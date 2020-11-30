import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import './style';
import { TabInfo, TabKey } from './TabsContext';
import Swiper from '../Swiper';

export interface TabContentProps {
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
   * 是否延迟载入content, 默认false
   * @description 非激活content第一次延迟显示,
   */
  lazy?: boolean;
  /**
   * 不是激活的content是否不渲染在dom中, 默认false
   */
  destroyInactiveTabPane?: boolean;
  /**
   * ref
   */
  ref?: React.Ref<any>;
  /**
   * tab被点击事件
   */
  onTabClick?: (activeKey: TabKey, event?: any) => void;
  /**
   * 自动高度. 此模式下非当前索引的元素会被`display: none;`形式隐藏
   */
  audoHeight?: boolean;
  /**
   * 是否垂直展示, 垂直展示请给组件提供固定高度
   */
  vertical?: boolean;
  /**
   * 拖拽切换距离, 默认0.5
   * 如果为0.5这样的百分比，则以元素尺寸的百分比计算
   */
  swiperDistance?: number;
  /**
   * 拖拽切换加速度, 默认4
   * 加速度越快，即可切换
   */
  swiperSpeed?: number;
  /**
   * 是否禁用触摸切换
   */
  disabled?: boolean;
}

export default function SwipeableTabContent(props: TabContentProps) {
  const {
    prefixCls = 'weui-swiper-tabcontent',
    className,
    style,
    activeKey,
    tabsInfo = [],
    lazy,
    destroyInactiveTabPane,
    ref,
    audoHeight,
    vertical,
    onTabClick,
    swiperDistance,
    swiperSpeed,
    disabled,
  } = props;
  const [index, setIndex] = useState(tabsInfo.findIndex((x) => x.tabKey === activeKey));

  useEffect(() => {
    setIndex(tabsInfo.findIndex((x) => x.tabKey === activeKey));
  }, [activeKey, tabsInfo]);

  function handleSwiper(index: number) {
    if (onTabClick) {
      const item = tabsInfo[index];
      if (item) {
        onTabClick(item.tabKey);
      }
    } else {
      setIndex(index);
    }
  }

  return (
    <div className={classNames(prefixCls, className)} style={style} ref={ref}>
      <Swiper
        audoHeight={audoHeight}
        vertical={vertical}
        scaleMode={false}
        dots={false}
        swiperDistance={swiperDistance}
        swiperSpeed={swiperSpeed}
        index={index}
        onChange={handleSwiper}
        disabled={disabled}
      >
        {tabsInfo.map((info) =>
          React.cloneElement(info.panel as any, {
            lazy,
            key: info.tabKey,
            ...info,
            destroyInactiveTabPane,
          }),
        )}
      </Swiper>
    </div>
  );
}
