---
title: Grid 九宫格
order: 6
nav:
  title: 组件
group:
  title: 数据展示
  path: /components/data-display
---

# Grid 九宫格

九宫格组件

## 代码演示

```tsx
/**
 * title: 九宫格每行3列
 */
import React from 'react';
import { Grid, GridItem } from 'weui-react-v2';

const data: string[] = ['我的', '未读消息', '设置', '分享', '注册', '注销', '提现', '账户', '结算卡'];

export default () => (
  <div style={{ minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '30px', margin: '-28px' }}>
    <Grid>
      {data.map((d, i) => (
        <GridItem key={d} icon={<img src={require('./icon_tabbar.png')} />}>
          {d}
        </GridItem>
      ))}
    </Grid>
  </div>
);
```

<API src="../../../src/Grid/Grid.tsx"></API>
<API src="../../../src/Grid/GridItem.tsx"></API>
