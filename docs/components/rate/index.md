---
title: Rate 评级
order: 8
nav:
  title: 组件
group:
  title: 数据输入
  path: /components/data-input
---

# Rate 评级

常用与店铺点评

## 代码演示

```tsx
/**
 * title: count可以自定义星星数量
 */
import React from 'react';
import { Rate } from 'weui-react-v2';

export default () => (
  <>
    <div style={{ textAlign: 'center' }}>
      <Rate defaultValue={3} />
    </div>
  </>
);
```

<API src="../../../src/Rate/index.tsx"></API>
