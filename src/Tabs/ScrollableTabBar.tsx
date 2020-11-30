import { clamp } from '../utils/number-utils';
import { DownOutlined, LeftOutlined, RightOutlined, UpOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './style';
import TabBar from './Tabbar';
import { TabInfo, TabKey } from './TabsContext';

export interface TabbarProps {
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
   * 当前激活key
   */
  activeKey?: TabKey;
  /**
   * tabs信息
   */
  tabsInfo?: TabInfo[];
  /**
   * tab被点击事件
   */
  onTabClick?: (activeKey: TabKey, event?: any) => void;
  /**
   * 获取定位函数
   */
  scrollToRef?: React.MutableRefObject<Function>;
  /**
   * 是否垂直展示, 垂直展示请给组件提供固定高度
   */
  vertical?: boolean;
  /**
   * 溢出后是否显示箭头
   */
  arrow?: boolean;
}

export default function ScrollableTabBar(props: TabbarProps) {
  const {
    prefixCls = 'weui-scrollable-tabbar',
    className,
    style,
    activeKey,
    tabsInfo = [],
    vertical,
    scrollToRef,
    arrow = true,
  } = props;
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);
  const [overflow, setOverflow] = useState(false);

  function checkOverflow() {
    const wrap = wrapRef.current as HTMLElement;
    const inner = innerRef.current as HTMLElement;
    // Tips: 注意元素的过度属性, 包括tab节点的过度, 都会影响计算宽度
    setOverflow(vertical ? inner.scrollHeight > wrap.clientHeight : inner.scrollWidth > wrap.clientWidth);
  }

  /**
   * 垂直模式获取高度，水平模式获取宽度
   */
  function getTabSize() {
    const inner = innerRef.current as HTMLElement;
    const { clientWidth, clientHeight } = inner;
    const tabbarSize = vertical ? clientHeight : clientWidth;
    const max = vertical ? inner.scrollHeight - tabbarSize : inner.scrollWidth - tabbarSize;

    return [tabbarSize, max];
  }

  function findScrollOffset(tabKey?: TabKey | null): [number, HTMLElement] {
    const wrap = wrapRef.current as HTMLElement;
    const inner = innerRef.current as HTMLElement;
    const tab = inner.querySelector(`[data-tab-key="${tabKey}"]`) as HTMLElement;
    if (!tab) {
      return [0, tab];
    }
    const tabOffset = vertical ? tab.offsetTop : tab.offsetLeft;
    const tabSize = vertical ? tab.clientHeight : tab.clientWidth;
    const wrapSize = vertical ? wrap.clientHeight : wrap.clientWidth;
    const [, max] = getTabSize();

    if (overflow && wrap) {
      // 居中显示
      return [clamp(tabOffset - (wrapSize / 2 - tabSize), 0, max), tab];
    } else {
      // 左对齐
      return [clamp(tabOffset, 0, max), tab];
    }
  }

  function prev() {
    const [tabbarSize, max] = getTabSize();
    const distance = clamp(offset - tabbarSize, 0, max);
    const first = tabsInfo[0];
    const [, tab] = findScrollOffset(first ? first.tabKey : null);

    if (tab && distance - (vertical ? tab.clientHeight : tab.clientWidth) < 0) {
      // 还剩下不到一个tab的距离, 则直接定位到第一个
      setOffset(0);
    } else {
      setOffset(distance);
    }
  }

  function next() {
    const [tabbarWidth, max] = getTabSize();
    const distance = clamp(offset + tabbarWidth, 0, max);
    const last = tabsInfo[tabsInfo.length - 1];
    const [lastLeft, tab] = findScrollOffset(last ? last.tabKey : null);

    if (tab && distance + (vertical ? tab.clientHeight : tab.clientWidth) > lastLeft) {
      // 接近最后一个tab, 则直接滚动到最后一个
      setOffset(lastLeft);
    } else {
      setOffset(distance);
    }
  }

  /**
   * 滚动到指定tab
   * @param tabKey 默认当前激活tabkey
   */
  function scrollTo(tabKey?: TabKey) {
    setOffset(findScrollOffset(tabKey || activeKey)[0]);
  }

  if (scrollToRef) {
    scrollToRef.current = scrollTo;
  }

  useEffect(() => {
    function resize() {
      checkOverflow();
      scrollTo();
    }

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    scrollTo(activeKey);
  }, [activeKey]);

  useLayoutEffect(() => {
    checkOverflow();
    scrollTo();
  }, [tabsInfo.length]);

  return (
    <div className={classNames(prefixCls, className, { overflow, vertical, arrow })} style={style} ref={wrapRef}>
      <span className="tabs-arrow tab-prev" onClick={prev}>
        <span className="tabs-icon">{vertical ? <UpOutlined /> : <LeftOutlined />}</span>
      </span>
      <span className="tabs-arrow tab-next" onClick={next}>
        <span className="tabs-icon">{vertical ? <DownOutlined /> : <RightOutlined />}</span>
      </span>
      <div className={`${prefixCls}-wrap`}>
        <TabBar
          {...props}
          className={`${prefixCls}-inner`}
          style={{ transform: vertical ? `translateY(-${offset}px)` : `translateX(-${offset}px)` }}
          ref={innerRef}
        />
      </div>
    </div>
  );
}
