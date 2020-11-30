---
title: Skeleton 骨架屏
order: 1
nav:
  title: 布局
group:
  title: 数据展示
  path: /components/layout
---

# Skeleton 骨架屏

用于加载中的样式

## 代码演示

```tsx
/**
 * title: 切换加载状态
 */
import React, { useState } from 'react';
import { SafeArea, Skeleton, Stripe, Button, WhiteSpace } from 'weui-react-v2';
import './index.less';

export default function app() {
  const [loading, setLoading] = useState(true);

  return (
    <SafeArea className="safearea-demo">
      <Button onClick={() => setLoading(!loading)}>切换</Button>
      <WhiteSpace />
      <Skeleton loading={loading}>
        <p>加载完毕</p>
      </Skeleton>
    </SafeArea>
  );
}
```

```tsx
/**
 * title: Stripe用于行内数据
 */
import React, { useState } from 'react';
import { SafeArea, Skeleton, Stripe, Button, WhiteSpace, Flex, FlexItem, List, ListItem } from 'weui-react-v2';
import './index.less';

export default function app() {
  return (
    <SafeArea className="skeleton-demo">
      <List title="基本信息">
        <ListItem extra={<Stripe />}>用户名称:</ListItem>
        <ListItem extra={<Stripe />}>手机号码:</ListItem>
      </List>
    </SafeArea>
  );
}
```

<API src="../../../src/Skeleton/Skeleton.tsx"></API>

<API src="../../../src/Skeleton/Stripe.tsx"></API>
