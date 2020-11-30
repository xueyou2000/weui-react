---
title: SafeArea 安全空间
order: 1
nav:
  title: 布局
group:
  title: 数据展示
  path: /components/layout
---

# SafeArea 安全空间

一般包裹在页面外层，兼容异形屏的不规则四周。

## 代码演示

```tsx
/**
 * title: 四周保留安全边距
 */
import React from 'react';
import { SafeArea } from 'weui-react-v2';
import './index.less';

export default () => (
  <SafeArea className="safearea-demo">
    <div className="block">1</div>
    <div className="block">2</div>
    <div className="block">3</div>
    <div className="block">4</div>
    <div className="block">5</div>
    <div className="block">6</div>
    <div className="block">7</div>
    <div className="block">8</div>
  </SafeArea>
);
```

<API src="../../../src/SafeArea/index.tsx"></API>
