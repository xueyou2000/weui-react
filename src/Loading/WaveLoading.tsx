import React from 'react';
import classNames from 'classnames';
import './style';

export interface Props {
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
}

export default function WaveLoading({ prefixCls = 'weui-loading', className, style }: Props) {
  return <div className={classNames(prefixCls, `${prefixCls}-wave`, className)} style={style}></div>;
}
