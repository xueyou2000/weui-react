import React, { useContext, useEffect } from 'react';
import { useMount } from 'utils-hooks';
import { TabKey, TabPanelContext, TabsContext } from './TabsContext';

const DEFAULT_KEY = '-1';

export function findDefaultTabKey(children: React.ReactNode, defaultActiveKey?: TabKey) {
  let firstTabKey = defaultActiveKey || DEFAULT_KEY;

  React.Children.forEach(children, (d: any) => {
    if (firstTabKey === DEFAULT_KEY) {
      firstTabKey = d.props.tabKey;
    }
  });

  return firstTabKey;
}

export function findTabsInfo(children: React.ReactNode, activeKey: TabKey) {
  const tabsInfo =
    React.Children.map(children, (d: any) => {
      const { tabKey, tab, disabled } = d.props;
      return {
        tabKey,
        tab,
        disabled,
        panel: d,
        active: activeKey === tabKey,
      };
    }) || [];
  return tabsInfo;
}

/**
 * tab面板激活事件
 */
export function useTabEnter(func: Function) {
  const tabsContext = useContext(TabsContext);
  const panelContext = useContext(TabPanelContext);

  useEffect(() => {
    // 懒加载模式下主动调用一次
    if (tabsContext.lazy || tabsContext.activeKey === panelContext.tabKey) {
      func();
    }
    tabsContext.enterEvents.set(panelContext.tabKey, func);
    return () => tabsContext.enterEvents.delete(panelContext.tabKey) as any;
  }, []);
}

/**
 * tab面板离开事件
 */
export function useTabLeave(func: Function) {
  const tabsContext = useContext(TabsContext);
  const panelContext = useContext(TabPanelContext);

  useEffect(() => {
    tabsContext.leaveEvents.set(panelContext.tabKey, func);
    return () => tabsContext.leaveEvents.delete(panelContext.tabKey) as any;
  }, []);
}
