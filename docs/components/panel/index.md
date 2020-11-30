---
title: Panel 面板
order: 2
nav:
  title: 组件
group:
  title: 数据展示
  path: /components/data-display
---

# Panel 面板

常用于展示组合数据

## 代码演示

```tsx
/**
 * title: 图文组合面板
 */
import React from 'react';
import { Panel, PanelItem, Brief, ListItem } from 'weui-react-v2';
import './index.less';

export default () => (
  <div
    className="panel-demo"
    style={{ minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '30px', margin: '-28px' }}
  >
    <Panel title="图文组合列表">
      <PanelItem title="标题一" thumb={require('./icon_tabbar.png')}>
        由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
      </PanelItem>
      <PanelItem title="标题二" thumb={require('./icon_tabbar.png')}>
        由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
      </PanelItem>
      <ListItem arrow={true}>
        <a>查看更多</a>
      </ListItem>
    </Panel>
    <Panel title="文字组合列表">
      <PanelItem title="标题一" text={true}>
        由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
      </PanelItem>
      <PanelItem title="标题二" text={true}>
        由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
      </PanelItem>
    </Panel>
    <Panel title="文字列表附加源">
      <PanelItem
        title="标题一"
        text={true}
        info={
          <>
            <Brief>文字来源</Brief>
            <Brief>时间</Brief>
            <Brief divider={true}>其他信息</Brief>
          </>
        }
      >
        由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
      </PanelItem>
    </Panel>
  </div>
);
```

<API src="../../../src/Panel/Panel.tsx"></API>
<API src="../../../src/Panel/PanelItem.tsx"></API>
