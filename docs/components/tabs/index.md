---
title: Tabs 选项卡
order: 1
nav:
  title: 组件
group:
  title: 导航
  path: /components/navigation
---

# Tabs 选项卡

选项卡组件, 内置`tabbar`溢出箭头

## 代码演示

```tsx
/**
 * title: 懒加载
 * desc: F12查看元素，可以看到懒加载时，内容不会真的插入dom,而是占位符取代
 */
import React from 'react';
import { Tabs, TabPanel } from 'weui-react-v2';
import '../swiper/index.less';

export default () => (
  <>
    <Tabs className="swiper-demo2" lazy={true}>
      <TabPanel tabKey="a" tab={<span className="tab_point">tab1</span>}>
        <div
          className="fimg"
          style={{
            height: '350px',
            backgroundImage: `url(${require('../swiper/pexels-photo-296878.jpeg')})`,
          }}
        />
      </TabPanel>
      <TabPanel tabKey="b" tab={<span className="tab_point">tab2</span>}>
        <div
          className="fimg"
          style={{
            height: '350px',
            backgroundImage: `url(${require('../swiper/pexels-photo-296878.jpeg')})`,
          }}
        />
      </TabPanel>
      <TabPanel tabKey="c" tab={<span className="tab_point">tab3</span>}>
        <div
          className="fimg"
          style={{
            height: '350px',
            backgroundImage: `url(${require('../swiper/pexels-photo-296878.jpeg')})`,
          }}
        />
      </TabPanel>
    </Tabs>
  </>
);
```

```tsx
/**
 * title: 动态增减
 * desc: 当tabbar溢出后，会显示箭头, 默认开启自动高度
 */
import React, { useState, useRef } from 'react';
import { Tabs, TabPanel, ScrollableTabBar, Button, WhiteSpace } from 'weui-react-v2';
import '../swiper/index.less';

function makeSection(count: number) {
  const result = [];

  for (let i = 0; i < count + 3; ++i) {
    result.push(<p key={i}>count: {count}</p>);
  }
  return result;
}

export default () => {
  // 初始化种子数据
  const [tabs, setTabs] = useState(['选项0', '选项1', '选项2']);
  const [key, setKey] = useState(tabs[0]);
  const scrollToRef = useRef<Function>(null);

  function addTab() {
    setTabs(tabs.concat(['选项' + tabs.length]));
  }

  function removeTab() {
    setKey(0);
    setTabs(tabs.slice(0, tabs.length - 1));
  }

  function scrollTo() {
    if (scrollToRef.current) {
      scrollToRef.current(key);
    }
  }

  return (
    <div className="tabs-demo">
      <Button block={true} onClick={addTab}>
        动态增加
      </Button>

      <Button block={true} onClick={removeTab}>
        动态减少
      </Button>
      <WhiteSpace size="lg" />
      <select value={key} onChange={(e) => setKey(e.target.value)}>
        {tabs.map((tab) => (
          <option key={tab} value={tab}>
            {tab}
          </option>
        ))}
      </select>
      <WhiteSpace size="lg" />
      <Button block={true} onClick={scrollTo}>
        滚动到指定tab
      </Button>

      <Tabs renderTabBar={() => <ScrollableTabBar scrollToRef={scrollToRef} />}>
        {tabs.map((tab, i) => (
          <TabPanel key={i} tabKey={tab} tab={<span className="tab_point">{tab}</span>}>
            {makeSection(i)}
          </TabPanel>
        ))}
      </Tabs>

      <p>观察我就知道， 上面是自动高度</p>
    </div>
  );
};
```

<code src="./demo/vertical.tsx" />

<API src="../../../src/Tabs/Tabs.tsx"></API>

<API src="../../../src/Tabs/TabPanel.tsx"></API>
