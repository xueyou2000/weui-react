import classNames from 'classnames';
import React, { useRef } from 'react';
import useMergeValue from 'use-merge-value';
import ScrollableTabBar from './ScrollableTabBar';
import './style';
import SwipeableTabContent from './SwipeableTabContent';
import { TabKey, TabsContext } from './TabsContext';
import { findDefaultTabKey, findTabsInfo } from './utils';

export interface TabsProps {
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
   * 是否延迟载入content, 默认false
   * @description 非激活content第一次延迟显示,
   */
  lazy?: boolean;
  /**
   * 是否翻转
   * @description 默认tabbar在tabcontent的上面
   */
  reverse?: boolean;
  /**
   * 不是激活的content是否不渲染在dom中, 默认false
   */
  destroyInactiveTabPane?: boolean;

  /**
   * 激活key
   */
  activeKey?: TabKey;
  /**
   * 默认激活key
   */
  defaultActiveKey?: TabKey;
  /**
   * 激活改变事件
   */
  onChange?: (activeKey: TabKey) => void;
  /**
   * tab被点击事件
   * @description 与onChange不同的仅仅是多了原生事件参数
   */
  onTabClick?: (activeKey: TabKey, event?: any) => void;
  /**
   * 渲染选项卡tab
   * @description 默认用div包裹, 可自行实现, 比如溢出显示箭头
   */
  renderTabBar?: () => JSX.Element;
  /**
   * 渲染选项卡内容
   * @description 默认用div包裹, 可自行实现, 比如切换时内容的动画滑动
   */
  renderTabContent?: () => JSX.Element;
  /**
   * TabPanels
   */
  children?: React.ReactNode;
  /**
   * 自动高度. 此模式下非当前索引的元素会被`display: none;`形式隐藏
   */
  audoHeight?: boolean;
  /**
   * 是否垂直展示, 垂直展示请给组件提供固定高度
   */
  vertical?: boolean;
}

const DEFAULT_RenderTabBar = () => <ScrollableTabBar />;
const DEFAULT_renderTabContent = () => <SwipeableTabContent />;

export default function Tabs(props: TabsProps) {
  const {
    prefixCls = 'weui-tabs',
    className,
    style,
    defaultActiveKey,
    children,
    onTabClick,
    reverse,
    lazy,
    audoHeight = true,
    vertical,
    destroyInactiveTabPane,
    renderTabBar = DEFAULT_RenderTabBar,
    renderTabContent = DEFAULT_renderTabContent,
  } = props;
  const [activeKey, setActiveKey] = useMergeValue<TabKey>(findDefaultTabKey(children, defaultActiveKey), {
    value: props.activeKey,
    onChange: props.onChange,
  });
  const tabsInfo = findTabsInfo(children, activeKey);
  // 进入事件map
  const EnterEventsRef = useRef(new Map<TabKey, Function>());
  // 离开事件map
  const LeaveEventsRef = useRef(new Map<TabKey, Function>());

  function handleTabClick(key: TabKey, event?: any) {
    const enterEvents = EnterEventsRef.current;
    const leaveEvents = LeaveEventsRef.current;

    if (activeKey !== key) {
      // 发送离开事件
      const leaveFunc = leaveEvents.get(activeKey);
      if (leaveFunc) {
        leaveFunc();
      }
      // 发送进入事件
      const enterFunc = enterEvents.get(key);
      if (enterFunc) {
        enterFunc();
      }

      setActiveKey(key);
      if (onTabClick) {
        onTabClick(key, event);
      }
    }
  }

  function doRenderTabBar() {
    return React.cloneElement(renderTabBar(), {
      activeKey,
      tabsInfo,
      onTabClick: handleTabClick,
      vertical,
      key: 'tabbar',
    });
  }

  function doRenderTabContent() {
    return React.cloneElement(renderTabContent(), {
      activeKey,
      tabsInfo,
      lazy,
      audoHeight,
      vertical,
      destroyInactiveTabPane,
      onTabClick: handleTabClick,
      key: 'tabcontent',
    });
  }

  const childrens = [doRenderTabBar(), doRenderTabContent()];

  return (
    <TabsContext.Provider
      value={{
        activeKey,
        setActiveKey,
        lazy,
        enterEvents: EnterEventsRef.current,
        leaveEvents: LeaveEventsRef.current,
      }}
    >
      <div className={classNames(prefixCls, className)} style={style} data-active-key={activeKey}>
        {reverse ? childrens.reverse() : childrens}
      </div>
    </TabsContext.Provider>
  );
}
