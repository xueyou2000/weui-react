import classNames from 'classnames';
import React from 'react';
import './style';
import Tab from './Tab';
import { TabInfo, TabKey } from './TabsContext';

export interface TabBarProps {
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
}

const TabBar = React.forwardRef((props: TabBarProps, ref: any) => {
  const { prefixCls = 'weui-tabbar', className, style, tabsInfo = [], onTabClick } = props;
  const tabs = tabsInfo.map((info, i) => (
    <Tab key={info.tabKey} tabIndex={i} {...info} onClick={onTabClick}>
      {info.tab}
    </Tab>
  ));

  return (
    <div className={classNames(prefixCls, className)} style={style} ref={ref}>
      {tabs}
    </div>
  );
});

export default TabBar;
