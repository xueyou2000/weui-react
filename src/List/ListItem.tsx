import React from 'react';
import classNames from 'classnames';
import './style';

export interface ListItemProps {
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
   * 头部
   */
  hd?: React.ReactNode;
  /**
   * 缩略图(当为 string 类型时作为 img src)
   */
  thumb?: string | React.ReactNode;
  /**
   * 右侧扩展内容
   */
  extra?: React.ReactNode;
  /**
   * 箭头方向
   */
  arrow?: 'horizontal' | 'up' | 'down' | boolean;
  /**
   * 是否点击交互样式
   */
  access?: boolean;
  /**
   * 列表点击事件
   */
  onClick?: () => void;
  /**
   * 是否报错样式
   */
  error?: boolean;
  /**
   * 内容
   */
  children?: React.ReactNode;
  /**
   * 内容对齐方式
   */
  align?: 'left' | 'center' | 'right';
  /**
   * 垂直对齐方式
   */
  alignItems?: 'center' | 'flex-end' | 'flex-start';
}

export default function ListItem(props: ListItemProps) {
  const {
    prefixCls = 'weui-item',
    className,
    style,
    thumb,
    hd,
    extra,
    arrow,
    onClick,
    error,
    access,
    children,
    align = 'left',
    alignItems = 'center',
  } = props;
  const classString = classNames(prefixCls, className, `${prefixCls}-align-${align}`, {
    [`${prefixCls}-error`]: error,
    [`${prefixCls}-arrow-${arrow}`]: arrow,
    [`${prefixCls}-access`]: 'access' in props ? access : !!onClick || arrow,
  });

  return (
    <div className={classString} style={style}>
      <div className={`${prefixCls}-inner`} style={{ alignItems }}>
        {hd && <div className={`${prefixCls}-hd`}>{hd}</div>}
        {thumb && <div className={`${prefixCls}-thumb`}>{typeof thumb === 'string' ? <img src={thumb} /> : thumb}</div>}
        <div className={`${prefixCls}-bd`} onClick={onClick}>
          {children}
        </div>
        {(extra || arrow) && <div className={`${prefixCls}-ft`}>{extra}</div>}
      </div>
    </div>
  );
}
