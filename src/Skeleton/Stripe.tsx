import React from 'react';
import classNames from 'classnames';
import './style';

export interface StripeProps {
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
  children?: React.ReactNode;
}

export default function Stripe(props: StripeProps) {
  const { prefixCls = 'weui-stripe', className, style, children } = props;
  return (
    <div className={classNames(prefixCls, className)} style={style}>
      {children}
    </div>
  );
}
