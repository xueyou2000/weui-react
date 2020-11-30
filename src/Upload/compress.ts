import { isImageUrl } from './utils';

/**
 * 压缩选项
 */
export interface CompressOptions {
  /**
   * 上传类型
   * `file`为文件上传; `base64`为以base64上传
   */
  type?: 'file' | 'base64';
  /**
   * 是否压缩
   */
  compress?: boolean;
  /**
   * 图片最大宽度
   */
  width?: number;
  /**
   * 图片最大高度
   */
  height?: number;
  /**
   * 压缩质量
   * 取值范围 0 ~ 1
   */
  quality?: number;
}

/**
 * 检查图片是否有被压扁，如果有，返回比率
 * ref to http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
 */
function detectVerticalSquash(img: HTMLImageElement) {
  // 拍照在IOS7或以下的机型会出现照片被压扁的bug
  var data: Uint8ClampedArray;
  var ih = img.naturalHeight;
  var canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = ih;
  var ctx = canvas.getContext('2d');
  if (!ctx) {
    return 1;
  }
  ctx.drawImage(img, 0, 0);
  try {
    data = ctx.getImageData(0, 0, 1, ih).data;
  } catch (err) {
    console.log('Cannot check verticalSquash: CORS?');
    return 1;
  }
  var sy = 0;
  var ey = ih;
  var py = ih;
  while (py > sy) {
    var alpha = data[(py - 1) * 4 + 3];
    if (alpha === 0) {
      ey = py;
    } else {
      sy = py;
    }
    py = (ey + sy) >> 1; // py = parseInt((ey + sy) / 2)
  }
  var ratio = py / ih;
  return ratio === 0 ? 1 : ratio;
}

/**
 * dataURI to blob, ref to https://gist.github.com/fupslot/5015897
 * @param dataURI
 */
function dataURItoBuffer(dataURI: string) {
  var byteString = atob(dataURI.split(',')[1]);
  var buffer = new ArrayBuffer(byteString.length);
  var view = new Uint8Array(buffer);
  for (var i = 0; i < byteString.length; i++) {
    view[i] = byteString.charCodeAt(i);
  }
  return buffer;
}

/**
 * dataURI to Blob
 * @param dataURI
 */
function dataURItoBlob(dataURI: string) {
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  var buffer = dataURItoBuffer(dataURI);
  return new Blob([buffer], { type: mimeString });
}

/**
 * 获取图片的orientation方向
 * ref to http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
 */
function getOrientation(buffer: ArrayBuffer) {
  var view = new DataView(buffer);
  if (view.getUint16(0, false) != 0xffd8) return -2;
  var length = view.byteLength,
    offset = 2;
  while (offset < length) {
    var marker = view.getUint16(offset, false);
    offset += 2;
    if (marker == 0xffe1) {
      if (view.getUint32((offset += 2), false) != 0x45786966) return -1;
      var little = view.getUint16((offset += 6), false) == 0x4949;
      offset += view.getUint32(offset + 4, little);
      var tags = view.getUint16(offset, little);
      offset += 2;
      for (var i = 0; i < tags; i++)
        if (view.getUint16(offset + i * 12, little) == 0x0112) return view.getUint16(offset + i * 12 + 8, little);
    } else if ((marker & 0xff00) != 0xff00) break;
    else offset += view.getUint16(offset, false);
  }
  return -1;
}

/**
 * 修正拍照时图片的方向
 * ref to http://stackoverflow.com/questions/19463126/how-to-draw-photo-with-correct-orientation-in-canvas-after-capture-photo-by-usin
 */
function orientationHelper(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, orientation: number) {
  const w = canvas.width,
    h = canvas.height;
  if (orientation > 4) {
    canvas.width = h;
    canvas.height = w;
  }
  switch (orientation) {
    case 2:
      ctx.translate(w, 0);
      ctx.scale(-1, 1);
      break;
    case 3:
      ctx.translate(w, h);
      ctx.rotate(Math.PI);
      break;
    case 4:
      ctx.translate(0, h);
      ctx.scale(1, -1);
      break;
    case 5:
      ctx.rotate(0.5 * Math.PI);
      ctx.scale(1, -1);
      break;
    case 6:
      ctx.rotate(0.5 * Math.PI);
      ctx.translate(0, -h);
      break;
    case 7:
      ctx.rotate(0.5 * Math.PI);
      ctx.translate(w, -h);
      ctx.scale(-1, 1);
      break;
    case 8:
      ctx.rotate(-0.5 * Math.PI);
      ctx.translate(-w, 0);
      break;
  }
}

const DefaultOptions: CompressOptions = {
  type: 'file',
  compress: true,
  width: 1600,
  height: 1600,
  quality: 0.8,
};

/**
 * 压缩文件
 * @param file 文件
 * @param options 压缩配置
 */
function compress(file: File, options: CompressOptions = DefaultOptions) {
  if (!('FileReader' in window)) {
    // 浏览器不支持FileReader, 则不压缩
    return Promise.resolve(file);
  }
  options = Object.assign({}, DefaultOptions, options);

  return new Promise<File | Blob | string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (evt) => {
      if (!evt.target) {
        throw new Error('FileReader 获取异常!');
      }

      if (options.compress === false && options.type !== 'file') {
        // 不启用压缩 & base64上传 的分支，不做任何处理，直接返回文件的base64编码
        const base64 = evt.target.result as string;
        resolve(base64);
        return;
      }

      // 非图片不进行压缩
      if (!isImageUrl(file.name)) {
        resolve(file);
        console.warn(`文件: ${file.name} 非图片后缀, 跳过压缩!`);
        return;
      }

      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        // 图片比率
        const ratio = detectVerticalSquash(img);
        // 图片方向
        const orientation = getOrientation(dataURItoBuffer(img.src));
        if (!ctx) {
          resolve(file);
          return;
        }

        // 限制图片到最大范围
        const maxW = options.width || 0;
        const maxH = options.height || 0;
        let w = img.width;
        let h = img.height;
        let dataURL: string;

        if (w < h && h > maxH) {
          w = parseInt((maxH * img.width) / img.height + '');
          h = maxH;
        } else if (w >= h && w > maxW) {
          h = parseInt((maxW * img.height) / img.width + '');
          w = maxW;
        }

        canvas.width = w;
        canvas.height = h;

        // 修正拍照方向
        if (orientation > 0) {
          orientationHelper(canvas, ctx, orientation);
        }

        ctx.drawImage(img, 0, 0, w, h / ratio);
        // jpeg canvas 支持质量参数
        dataURL = canvas.toDataURL('image/jpeg', options.quality);

        if (options.type === 'file') {
          if (/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)) {
            // 压缩出错，以文件方式上传的，采用原文件上传
            resolve(file);
          } else {
            // 伪装 Blob 为 File对象
            let blob = dataURItoBlob(dataURL);
            resolve(new window.File([blob], file.name, { type: blob.type, lastModified: file.lastModified }));
          }
        } else {
          if (/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)) {
            // 压缩失败，以base64上传的，直接报错不上传
            reject(new Error('Compress fail, dataURL is ' + dataURL + '.'));
          } else {
            const base64 = dataURL;
            resolve(base64);
          }
        }
      };
      img.src = evt.target.result as string;
    };
    reader.readAsDataURL(file);
  });
}

export default compress;
