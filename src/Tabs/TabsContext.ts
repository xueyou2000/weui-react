import React from 'react';

/**
 * 选项卡key(唯一)
 */
export type TabKey = string | number;

export interface TabsContextType {
  /**
   * 当前激活key
   */
  activeKey?: TabKey;
  /**
   * 设置激活key
   */
  setActiveKey?: (key: TabKey) => void;
  /**
   * 是否延迟载入content, 默认false
   * @description 非激活content第一次延迟显示,
   */
  lazy?: boolean;
  /**
   * 监听tab面板激活事件
   */
  enterEvents: Map<TabKey, Function>;
  /**
   * 监听tab面板离开事件
   */
  leaveEvents: Map<TabKey, Function>;
}

export interface TabInfo {
  /**
   * key
   */
  tabKey: TabKey;
  /**
   * tab标签
   */
  tab: React.ReactNode;
  /**
   * tab内容
   */
  panel?: JSX.Element;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否激活
   */
  active?: boolean;
}

export const TabsContext = React.createContext<TabsContextType>({
  enterEvents: new Map<TabKey, Function>(),
  leaveEvents: new Map<TabKey, Function>(),
});

export interface TabPanelContextType {
  /**
   * 当前面板的key
   */
  tabKey: TabKey;
}

export const TabPanelContext = React.createContext<TabPanelContextType>({ tabKey: '' });
