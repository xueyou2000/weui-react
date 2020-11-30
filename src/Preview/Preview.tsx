import classNames from 'classnames';
import React from 'react';
import PreviewHead from './PreviewHead';
import './style';

export interface PreviewProps {
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
   * 内容
   */
  children: React.ReactNode;
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 子标题
   */
  subTitle?: React.ReactNode;
  /**
   * 页脚
   */
  footer?: React.ReactNode;
}

export default function Preview(props: PreviewProps) {
  const { prefixCls = 'weui-preview', className, style, title, subTitle, children, footer } = props;

  return (
    <div className={classNames(prefixCls, className)} style={style}>
      {(title || subTitle) && (
        <div className={`${prefixCls}__hd`}>
          <PreviewHead prefixCls={prefixCls} title={subTitle}>
            {title}
          </PreviewHead>
        </div>
      )}
      <div className={`${prefixCls}__bd`}>{children}</div>
      <div className={`${prefixCls}__ft`}>{footer}</div>
    </div>
  );
}
