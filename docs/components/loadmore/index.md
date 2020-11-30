---
title: Loadmore 加载更多
order: 2
nav:
  title: 组件
group:
  title: 操作反馈
  path: /components/feedback
---

# Loadmore 加载更多

可配合下拉刷新组件

## 代码演示

```tsx
/**
 * title: 加载更多
 */
import React from 'react';
import { Loadmore } from 'weui-react-v2';

export default () => (
  <>
    <Loadmore tips="正在加载" loading={true} />
    <br />
    <Loadmore tips="暂无数据" />
    <br />
    <Loadmore dot={true} />
    <br />
  </>
);
```
