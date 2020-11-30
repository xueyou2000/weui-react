import React from 'react';
import classNames from 'classnames';
import './style';

export interface GridItemProps {
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
   * 标题
   */
  children: React.ReactNode;
  /**
   * 图标
   */
  icon?: React.ReactNode;
  /**
   * 点击事件
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function GridItem(props: GridItemProps) {
  const { prefixCls = 'weui-grid', className, style, children, icon, onClick } = props;

  return (
    <div className={classNames(prefixCls, className)} style={style} onClick={onClick}>
      {icon && <div className={`${prefixCls}-icon`}>{icon}</div>}
      <p className={`${prefixCls}-label`}>{children}</p>
    </div>
  );
}
