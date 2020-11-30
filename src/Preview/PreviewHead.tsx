import React from 'react';
import './style';

export interface PreviewHeadProps {
  /**
   * 附加类名
   */
  prefixCls?: string;
  /**
   * 值
   */
  children: React.ReactNode;
  /**
   * 标题
   */
  title?: React.ReactNode;
}

export default function PreviewHead(props: PreviewHeadProps) {
  const { prefixCls, children, title } = props;

  return (
    <React.Fragment>
      <label className={`${prefixCls}__label`}>{title}</label>
      <em className={`${prefixCls}__value`}>{children}</em>
    </React.Fragment>
  );
}
