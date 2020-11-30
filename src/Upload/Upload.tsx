import classNames from 'classnames';
import React, { useRef } from 'react';
import Toptips from '../Toptips';
import compress, { CompressOptions } from './compress';
import httpUpload, { UploadOptions } from './HttpUpload';
import './style';

export interface UploadProps<T>
  extends Pick<
    Partial<UploadOptions<T>>,
    Exclude<keyof Partial<UploadOptions<T>>, 'file' | 'onSuccess' | 'onProgress' | 'onError'>
  > {
  /**
   * 附加类名
   */
  prefixCls?: string;
  /**
   * 根节点的附加类名
   */
  className?: string;
  /**
   * 内联样式
   */
  style?: React.CSSProperties;
  /**
   * 文件类型, 默认 image/*,
   * 也可以是: image/gif,image/jpeg,image/jpg,image/png, 如果ios想从相机读取, 需要设置"image/*;capture=camera"
   */
  accept?: string;
  /**
   * 图片捕获设置， 比如capture=camera只从相机读取
   */
  capture?: boolean | string;
  /**
   * 是否多选
   */
  multiple?: boolean;
  /**
   * 上传前检查
   * @description 返回 Promise.reject() 则拒绝上传
   */
  beforeUpload?: (file: File) => boolean | Promise<File>;
  /**
   * 最大上传尺寸限制, 默认6MB
   */
  maxSize?: number;
  /**
   * 压缩选项
   */
  compressOptions?: CompressOptions;
  /**
   * 自定义上传按钮节点
   */
  children?: React.ReactNode;
  /**
   * 开始上传
   */
  onUpload?: (file: File) => void;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 最大上传数量
   */
  max?: number;
  /**
   * 成功事件
   */
  onSuccess?: (file: File, response: T, xhr: XMLHttpRequest) => void;
  /**
   * 失败事件
   */
  onError?: (file: File, error: Error, response?: T) => void;
  /**
   * 上传进度事件
   */
  onProgress?: (file: File, percent: number, event: ProgressEvent) => void;
}

export default function Upload<T>(props: UploadProps<T>) {
  const {
    prefixCls = 'weui-upload',
    className,
    style,
    accept = 'image/*',
    capture = false,
    beforeUpload,
    compressOptions,
    maxSize = 6,
    multiple,
    action,
    filename,
    data,
    withCredentials,
    headers,
    children,
    max,
    onError,
    onProgress,
    onSuccess,
    onUpload,
    disabled,
  } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    if (disabled) {
      return;
    }
    const input = inputRef.current as HTMLInputElement;
    if (input) {
      input.click();
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length <= 0) {
      return;
    }

    const hasOverLimit = [].some.call(files, (file: File) => file.size / 1024 / 1024 > maxSize);
    if (hasOverLimit) {
      Toptips('上传图片过大!', 'fail');
      return;
    }
    [].slice.call(files, 0, max).forEach((file) => upload(file));
  }

  function upload(file: File) {
    if (!beforeUpload) {
      postFile(file);
    } else {
      const pass = beforeUpload(file);
      const passPromise = pass as Promise<File>;
      if (passPromise && passPromise.then) {
        passPromise
          .then((blob) => {
            const processedFileType = Object.prototype.toString.call(blob);
            if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
              return postFile(blob);
            }
            return postFile(file);
          })
          .catch((error: Error) => {
            console.error('Upload Fail with beforeUpload ', error.message);
            if (onError) {
              onError(file, error);
            }
          });
      } else if (pass !== false) {
        postFile(file);
      }
    }
  }

  function postFile(file: File) {
    return compress(file, compressOptions)
      .then((fileRaw) => {
        if (onUpload) {
          onUpload(fileRaw as any);
        }
        return new Promise((resolve, reject) => {
          httpUpload<T>({
            file: fileRaw as any,
            data,
            action: action || '',
            headers,
            filename,
            withCredentials,
            onSuccess: (response, xhr) => {
              if (onSuccess) {
                onSuccess(fileRaw as any, response, xhr);
              }
              resolve(response);
            },
            onError: (error, response) => {
              if (onError) {
                onError(fileRaw as any, error, response);
              }
              reject(error);
            },
            onProgress: (percent, event) => {
              if (onProgress) {
                onProgress(fileRaw as any, percent, event);
              }
            },
          });
        });
      })
      .catch((error: Error) => {
        console.error('Upload Fail ', error.message);
        if (onError) {
          onError(file, error);
        }
      });
  }

  return (
    <div className={classNames(prefixCls, className)} style={style} onClick={handleClick}>
      <input
        className={`${prefixCls}-input`}
        style={{ display: 'none' }}
        type="file"
        max={max}
        multiple={multiple}
        accept={accept}
        capture={capture}
        name={filename}
        onChange={handleChange}
        ref={inputRef}
      />
      {children}
    </div>
  );
}
