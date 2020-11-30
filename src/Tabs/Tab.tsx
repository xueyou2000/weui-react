import classNames from 'classnames';
import React from 'react';
import { TabKey } from './TabsContext';

export interface TabProps {
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
   * tab索引
   */
  tabIndex?: number;
  /**
   * 是否激活样式
   */
  active?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 选项卡key(唯一)
   */
  tabKey: TabKey;
  /**
   * tab文本
   */
  children?: React.ReactNode;
  /**
   * tab被点击事件
   */
  onClick?: (activeKey: TabKey, event: any) => void;
}

export default function Tab(props: TabProps) {
  const { prefixCls = 'weui-tab', className, style, tabKey, active, disabled, children, tabIndex, onClick } = props;

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    if (!disabled && onClick) {
      onClick(tabKey, event);
    }
  }

  return (
    <div
      role="tab"
      data-tab-key={tabKey}
      style={style}
      className={classNames(prefixCls, className, { active, disabled })}
      aria-selected={active}
      aria-disabled={disabled}
      tabIndex={tabIndex}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
