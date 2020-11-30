---
title: List 列表
order: 1
nav:
  title: 组件
group:
  title: 数据展示
  path: /components/data-display
---

# List 列表

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。

## 代码演示

```tsx
/**
 * title: 加载中
 */
import React from 'react';
import { List, ListItem } from 'weui-react-v2';
import { WeiboOutlined } from '@ant-design/icons';

export default () => (
  <div style={{ minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '30px', margin: '-28px' }}>
    <List title="带说明的列表">
      <ListItem extra="说明文字">标题文字</ListItem>
      <ListItem extra="说明文字">标题文字</ListItem>
    </List>
    <List title="带图标，说明的列表">
      <ListItem thumb={<WeiboOutlined style={{ color: '#07c160', fontSize: '28px' }} />} extra="说明文字">
        标题文字
      </ListItem>
      <ListItem thumb={<WeiboOutlined style={{ color: '#07c160', fontSize: '28px' }} />} extra="说明文字">
        标题文字
      </ListItem>
    </List>
    <List title="带跳转的列表">
      <ListItem arrow={true} extra="说明文字">
        标题文字
      </ListItem>
      <ListItem arrow="up" extra="说明文字">
        上箭头
      </ListItem>
      <ListItem arrow="down" extra="说明文字">
        下箭头
      </ListItem>
    </List>
    <List title="带图标，说明, 跳转的列表">
      <ListItem arrow={true} thumb={<WeiboOutlined style={{ color: '#07c160', fontSize: '28px' }} />} extra="说明文字">
        标题文字
      </ListItem>
      <ListItem arrow={true} thumb={<WeiboOutlined style={{ color: '#07c160', fontSize: '28px' }} />} extra="说明文字">
        标题文字
      </ListItem>
    </List>
  </div>
);
```

<API src="../../../src/List/index.tsx"></API>
