import classNames from 'classnames';
import React from 'react';
import './style';

export interface SafeAreaProps {
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
   * 是否最小高度为屏幕高度
   */
  fullHeight?: boolean;
}

export default function SafeArea(props: SafeAreaProps) {
  const { prefixCls = 'weui-safearea', className, style, children, fullHeight } = props;
  return (
    <div className={classNames(prefixCls, className, { [`${prefixCls}-height`]: fullHeight })} style={style}>
      {children}
    </div>
  );
}
