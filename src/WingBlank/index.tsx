import classNames from 'classnames';
import React from 'react';
import './style';

export interface WingBlankProps {
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
   * 两翼留白的间距
   */
  size?: 'lg' | 'sm' | 'md';
}

export default function WingBlank(props: WingBlankProps) {
  const { prefixCls = 'weui-wingblank', className, style, children, size = 'md' } = props;
  return (
    <div className={classNames(prefixCls, className, `${prefixCls}-${size}`)} style={style}>
      {children}
    </div>
  );
}
