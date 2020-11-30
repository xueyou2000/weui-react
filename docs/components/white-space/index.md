---
title: WhiteSpace 上下留白
order: 1
nav:
  title: 布局
group:
  title: 数据展示
  path: /components/layout
---

# WhiteSpace 上下留白

常用与页面的上下空白。

## 代码演示

```tsx
/**
 * title: 不同尺寸
 */
import React from 'react';
import { WhiteSpace, Button } from 'weui-react-v2';

export default () => (
  <>
    <Button block>最小间距</Button>
    <WhiteSpace size="xs" />
    <Button block>小间距</Button>
    <WhiteSpace size="sm" />
    <Button block>中等间距(默认)</Button>
    <WhiteSpace size="md" />
    <Button block>大间距</Button>
    <WhiteSpace size="lg" />
    <Button block>最大间距</Button>
    <WhiteSpace size="xl" />
  </>
);
```

<API src="../../../src/WingBlank/index.tsx"></API>
