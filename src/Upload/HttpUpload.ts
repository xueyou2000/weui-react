/**
 * 上传配置
 */
export interface UploadOptions<Response = any> {
  /**
   * 上传地址
   */
  action: string;
  /**
   * 上传的文件
   */
  file: File;
  /**
   * 上传的文件name, 用于后台接收, 默认 file
   */
  filename?: string;
  /**
   * 附加数据
   */
  data?: Record<string, any>;
  /**
   * 是否启用 withCredentials
   */
  withCredentials?: boolean;
  /**
   * 附加请求头
   */
  headers?: Record<string, string>;
  /**
   * 成功事件
   */
  onSuccess?: (response: Response, xhr: XMLHttpRequest) => void;
  /**
   * 失败事件
   */
  onError?: (error: Error, response?: Response) => void;
  /**
   * 上传进度事件
   */
  onProgress?: (percent: number, event: ProgressEvent) => void;
}

/**
 * 文件上传
 * @description 返回中断上传的函数
 */
export default function httpUpload<T>(opt: UploadOptions<T>): Function {
  const xhr = new XMLHttpRequest();
  const formData = new FormData();
  const data = opt.data;
  if (data) {
    Object.keys(data).map((key) => {
      formData.append(key, data[key]);
    });
  }
  formData.append(opt.filename || 'file', opt.file);

  if (!opt.headers) {
    opt.headers = {};
  }
  for (const x in opt.headers) {
    if (opt.headers[x] !== null) {
      xhr.setRequestHeader(x, opt.headers[x]);
    }
  }

  xhr.open('post', opt.action, true);

  function abort() {
    xhr.abort();
  }

  // 事件
  xhr.onload = () => {
    if (xhr.status < 200 || xhr.status >= 300) {
      if (opt.onError) {
        opt.onError(new UploadError(`connot upload ${opt.action}`, opt.action, xhr.status), tryGetResponse(xhr));
      }
    } else if (opt.onSuccess) {
      opt.onSuccess(tryGetResponse(xhr), xhr);
    }
  };

  xhr.onerror = (e: ProgressEvent) => {
    if (opt.onError) {
      opt.onError(new UploadError(`upload fail ${opt.action}`, opt.action, xhr.status), tryGetResponse(xhr));
    }
  };

  xhr.onabort = (ev: ProgressEvent) => {
    if (opt.onError) {
      opt.onError(new UploadError(`upload abort ${opt.action}`, opt.action, xhr.status), tryGetResponse(xhr));
    }
  };

  const onProgress = opt.onProgress;
  if (onProgress && xhr.upload) {
    xhr.upload.onprogress = (e) => {
      let percent = 0;
      if (e.total > 0) {
        percent = (e.loaded / e.total) * 100;
      }
      onProgress(percent, e);
    };
  }

  if (opt.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }
  // 主动设置 headers['X-Requested-With'] = null, 用于跨域上传
  if (opt.headers['X-Requested-With'] !== null) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  }

  xhr.send(formData);

  return abort;
}

export class UploadError extends Error {
  /**
   * http状态码
   */
  public status: number;
  /**
   * 请求地址
   */
  public url: string;

  /**
   * 构造函数
   * @param msg
   * @param url
   * @param status
   */
  constructor(msg: string, url: string, status: number) {
    super(msg);
    this.url = url;
    this.status = status;
  }
}

function tryGetResponse(xhr: XMLHttpRequest) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}
