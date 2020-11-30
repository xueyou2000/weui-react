---
title: WingBlank 两翼留白
order: 1
nav:
  title: 布局
group:
  title: 数据展示
  path: /components/layout
---

# WingBlank 两翼留白

常用与页面的两端空白。

## 代码演示

```tsx
/**
 * title: 不同尺寸
 */
import React from 'react';
import { WingBlank, WhiteSpace, Button } from 'weui-react-v2';

export default () => (
  <>
    <WingBlank size="sm">
      <Button block>小尺寸</Button>
    </WingBlank>
    <WhiteSpace />
    <WingBlank size="md">
      <Button block>中等尺寸(默认)</Button>
    </WingBlank>
    <WhiteSpace />
    <WingBlank size="lg">
      <Button block>大尺寸</Button>
    </WingBlank>
  </>
);
```

<API src="../../../src/WingBlank/index.tsx"></API>
