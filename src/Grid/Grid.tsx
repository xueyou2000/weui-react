import React from 'react';
import classNames from 'classnames';
import './style';

export interface GridProps {
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
   * 网格内容
   */
  children: React.ReactNode;
}

export default function Grid(props: GridProps) {
  const { prefixCls = 'weui-grid', className, style, children } = props;

  return (
    <div className={classNames(prefixCls + 's', className)} style={style}>
      {children}
    </div>
  );
}
