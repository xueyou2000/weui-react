import classNames from 'classnames';
import React, { useRef } from 'react';
import './style';
import { TabKey, TabPanelContext } from './TabsContext';

export interface TablePanelProps {
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
   * 是否激活样式
   */
  active?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * tab内容
   */
  children?: React.ReactNode;
  /**
   * 选项卡tab内容
   */
  tab: React.ReactNode;
  /**
   * 是否延迟载入content, 默认false
   * @description 非激活content第一次延迟显示,
   */
  lazy?: boolean;
  /**
   * 选项卡key(唯一)
   */
  tabKey: TabKey;
  /**
   * 不是激活的content是否不渲染在dom中, 默认false
   */
  destroyInactiveTabPane?: boolean;
}

export default function TabPanel(props: TablePanelProps) {
  const {
    prefixCls = 'weui-tab-panel',
    className,
    style,
    active,
    disabled,
    tabKey,
    children,
    lazy,
    destroyInactiveTabPane,
  } = props;
  const cached = useRef(active);
  const classString = classNames(prefixCls, className, {
    active,
    disabled,
  });

  if (!active && (destroyInactiveTabPane || (lazy && !cached.current))) {
    // 输出占位符而不是 null, 避免动画Content, 计算 100% 时候不正确
    return (
      <div role="tabpanel" data-content-key={tabKey} style={style} className={classString} aria-hidden={!active} />
    );
  } else if (!cached.current) {
    // 标记已经缓存过 tabPanel了
    cached.current = true;
  }

  return (
    <div role="tabpanel" data-content-key={tabKey} style={style} className={classString} aria-hidden={!active}>
      <TabPanelContext.Provider value={{ tabKey }}>{children}</TabPanelContext.Provider>
    </div>
  );
}
