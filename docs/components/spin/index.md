---
title: Spin 加载中
order: 1
nav:
  title: 组件
group:
  title: 操作反馈
  path: /components/feedback
---

# Spin 加载中

包裹元素，显示加载动画。

## 何时使用

- 拉取数据
- 加载页面
- 页面提交等待

## 代码演示

```tsx
/**
 * title: 不同尺寸
 * desc: 内置3种不同尺寸， 设置 `size` 属性为 `small`, `large`, `default`。
 */
import React from 'react';
import { Spin, Flex, WhiteSpace } from 'weui-react-v2';

export default () => (
  <>
    <Flex justify="center">
      <Spin spinning={true} size="small" />
    </Flex>
    <WhiteSpace size="sm" />
    <Flex justify="center">
      <Spin spinning={true} />
    </Flex>

    <WhiteSpace size="sm" />
    <Flex justify="center">
      <Spin spinning={true} size="large" />
    </Flex>
  </>
);
```

<code src="./demo/inline.tsx" />

```tsx
/**
 * title: 自定义指示符
 * desc: 设置 indicator 属性，自定义加载指示符。
 */
import React from 'react';
import { Spin, Flex, WhiteSpace } from 'weui-react-v2';
import { Loading3QuartersOutlined, SyncOutlined, StarOutlined } from '@ant-design/icons';

export default () => (
  <div>
    <Flex justify="center">
      <Spin size="small" spinning={true} indicator={<StarOutlined spin={true} />} />
    </Flex>

    <WhiteSpace size="sm" />
    <Flex justify="center">
      <Spin spinning={true} indicator={<SyncOutlined spin={true} />} />
    </Flex>

    <WhiteSpace size="sm" />
    <Flex justify="center">
      <Spin size="large" spinning={true} indicator={<Loading3QuartersOutlined spin={true} />} />
    </Flex>
  </div>
);
```

<API src="../../../src/Spin/index.tsx"></API>
