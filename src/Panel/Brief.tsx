import React from 'react';
import classNames from 'classnames';
import './style';

export interface BriefProps {
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
   * 是否显示左侧分割线
   */
  divider?: boolean;
}

export default function Brief(props: BriefProps) {
  const { prefixCls = 'weui-brief', className, style, children, divider } = props;
  return (
    <li className={classNames(prefixCls, className, { [`${prefixCls}_divider`]: divider })} style={style}>
      {children}
    </li>
  );
}
