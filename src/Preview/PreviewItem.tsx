import React from 'react';
import './style';

export interface PreviewItemProps {
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
   * 值
   */
  children: React.ReactNode;
  /**
   * 标题
   */
  title: React.ReactNode;
  /**
   * 点击事件
   */
  onClick?: () => void;
}

export default function PreviewItem(props: PreviewItemProps) {
  const { prefixCls = 'weui-preview', className, style, children, title, onClick } = props;

  return (
    <div className={className} style={style} onClick={onClick}>
      <label className={`${prefixCls}__label`}>{title}</label>
      <span className={`${prefixCls}__value`}>{children}</span>
    </div>
  );
}
