import { CloseCircleOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import React from 'react';
import { CircleLoading } from '../Loading';
import './style';

export type UploadStatus = 'init' | 'success' | 'fail' | 'uploading';

export interface FileInfo<T = any> {
  /**
   * 上传响应
   */
  response?: T;
  /**
   * 缩略图
   */
  thumbnail: string | null;
  /**
   * 文件
   */
  file: File | null;
  /**
   * 进度
   * 0~100
   */
  percent: number;
  /**
   * 上传状态
   */
  status?: UploadStatus;
}

export interface ImageProps {
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
  /**
   * 文件信息
   */
  fileInfo: FileInfo;
}

export default function Image(props: ImageProps) {
  const {
    prefixCls = 'weui-image-item',
    className,
    style,
    disableDelete = false,
    onImageView,
    onImageRemove,
    fileInfo,
  } = props;

  function handleImageView() {
    if (onImageView) {
      onImageView(fileInfo);
    }
  }

  function handleImageRemove() {
    if (onImageRemove) {
      onImageRemove(fileInfo);
    }
  }

  return (
    <div
      className={classnames(prefixCls, className, `status-${fileInfo.status}`, { 'disable-delete': disableDelete })}
      style={style}
    >
      <div className={`${prefixCls}-remove`} onClick={handleImageRemove}></div>
      <div
        className={`${prefixCls}-content`}
        style={{ backgroundImage: `url(${fileInfo.thumbnail})` }}
        onClick={handleImageView}
      />
      <div className={`${prefixCls}-error`} onClick={handleImageView}>
        <CloseCircleOutlined />
      </div>
      <div className={`${prefixCls}-uploading`}>
        <CircleLoading />
      </div>
    </div>
  );
}
