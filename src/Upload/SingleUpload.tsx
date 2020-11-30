import { PlusOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { GalleryPop } from '../ImageView';
import Image, { FileInfo } from './Image';
import Upload, { UploadProps } from './Upload';

export interface SingleUploadProps<T = any> extends UploadProps<T> {
  /**
   * 图片url
   */
  value?: string | null;
  /**
   * 图片url改变
   */
  onChange?: (url: string | null) => void;
  /**
   * 从上传的响应中拿到值, 此值将同步到value
   */
  getResponse: (res: T) => string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 转发ref
   */
  ref?: any;
  /**
   * 是否隐藏删除按钮
   */
  disableDelete?: boolean;
  /**
   * 图片点击事件
   */
  onImageView?: (fileInfo: FileInfo) => void;
  /**
   * 图片删除事件
   */
  onImageRemove?: (fileInfo: FileInfo) => void;
}

export default function SingleUpload<T>(props: SingleUploadProps<T>) {
  const {
    prefixCls = 'weui-single-upload',
    className,
    style,
    ref,
    disableDelete,
    getResponse,
    onSuccess,
    onError,
    onProgress,
    onImageView,
    onImageRemove,
    onChange,
    disabled,
    ...uploadProps
  } = props;
  const [value, setValue] = useState<string | null>(null);
  const [fileInfo, setFileInfo] = useState<FileInfo>({ thumbnail: null, file: null, percent: 0, status: 'init' });

  useEffect(() => {
    if ('value' in props) {
      // 受控下同步fileInfo
      setValue(value);
      if (props.value) {
        setFileInfo({ thumbnail: props.value, file: null, percent: 100, status: 'success' });
      } else {
        setFileInfo({ thumbnail: null, file: null, percent: 0, status: 'init' });
      }
    }
  }, [props.value]);

  function handleUpload(file: File) {
    setFileInfo({ thumbnail: URL.createObjectURL(file), file, percent: 0, status: 'uploading' });
  }

  function handleSuccess(file: File, response: T, xhr: XMLHttpRequest) {
    if (onSuccess) {
      onSuccess(file, response, xhr);
    }
    setFileInfo((info) => ({ ...info, response, percent: 100, status: 'success' }));
    try {
      const url = getResponse(response);
      setValue(url);
    } catch (error) {
      setFileInfo((info) => ({ ...info, percent: 0, status: 'fail' }));
    }
  }

  function handleError(file: File, error: Error, response?: T) {
    if (onError) {
      onError(file, error, response);
    }
    setFileInfo((info) => ({ ...info, percent: 0, status: 'fail' }));
  }

  function handleProgress(file: File, percent: number, event: ProgressEvent<EventTarget>) {
    if (onProgress) {
      onProgress(file, percent, event);
    }
    setFileInfo((info) => ({ ...info, percent, status: 'uploading' }));
  }

  function handleImageView() {
    if (onImageView) {
      onImageView(fileInfo);
    } else {
      if (fileInfo.thumbnail) {
        var close = GalleryPop({
          data: [{ src: fileInfo.thumbnail }],
          bottom: !disabled && (
            <div
              className="upload-image-view__delete"
              onClick={() => {
                handleImageRemove();
                close();
              }}
            >
              删除
            </div>
          ),
        });
      }
    }
  }

  function handleImageRemove() {
    if (onImageRemove) {
      onImageRemove(fileInfo);
    }
    setFileInfo({ thumbnail: null, file: null, percent: 0, status: 'init' });
    setValue(null);
    if (onChange) {
      onChange(null);
    }
  }

  return (
    <div className={classNames(prefixCls, className)} style={style} ref={ref}>
      {fileInfo.status === 'init' ? (
        <Upload
          {...uploadProps}
          disabled={disabled}
          onUpload={handleUpload}
          onSuccess={handleSuccess}
          onProgress={handleProgress}
          onError={handleError}
        >
          <div className={`${prefixCls}-uploadBtn`}>
            <PlusOutlined />
          </div>
        </Upload>
      ) : (
        <Image
          disableDelete={disabled ? true : disableDelete}
          onImageView={handleImageView}
          onImageRemove={handleImageRemove}
          fileInfo={fileInfo}
        />
      )}
    </div>
  );
}
