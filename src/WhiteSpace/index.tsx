import classNames from 'classnames';
import React from 'react';
import './style';

export interface WhiteSpaceProps {
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
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export default function WhiteSpace(props: WhiteSpaceProps) {
  const { prefixCls = 'weui-whitespace', className, style, children, size = 'md' } = props;
  return (
    <div className={classNames(prefixCls, className, `${prefixCls}-${size}`)} style={style}>
      {children}
    </div>
  );
}
