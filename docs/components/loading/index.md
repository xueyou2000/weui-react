---
title: Loading 加载中
order: 1
nav:
  title: 组件
group:
  title: 操作反馈
  path: /components/feedback
---

# Loading 加载中

提供多种加载中的样式，用于不同场景。

## 代码演示

```tsx
/**
 * title: 加载中
 */
import React from 'react';
import { BallLoading, CircleLoading, WaveLoading, MultistageLoading, Flex } from 'weui-react-v2';

export default () => (
  <>
    <Flex justify="center">
      <BallLoading />
    </Flex>
    <br />
    <Flex justify="center">
      <CircleLoading />
    </Flex>
    <br />
    <Flex justify="center">
      <WaveLoading />
    </Flex>
    <br />
    <Flex justify="center">
      <MultistageLoading />
    </Flex>
  </>
);
```
