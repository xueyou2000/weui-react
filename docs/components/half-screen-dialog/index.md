---
title: HalfScreenDialog 半屏对话框
order: 7
nav:
  title: 组件
group:
  title: 操作反馈
  path: /components/feedback
---

# HalfScreenDialog 半屏对话框

从底部弹出对话框， 常见于内容确认等场景。

## 代码演示

<code src="./demo/confirm.tsx" />

```tsx
/**
 * title: js弹出
 * desc: 使用`HalfScreenDialogPop`方法用代码弹出半屏组件
 */
import React from 'react';
import { HalfScreenDialogPop, Button } from 'weui-react-v2';

function pop() {
  HalfScreenDialogPop({
    title: '标题',
    children: <p style={{ fontSize: '24px' }}>可放入自定义内容</p>,
  });
}

export default () => (
  <>
    <Button onClick={pop}>js弹出</Button>
  </>
);
```

<API src="../../../src/HalfScreenDialog/HalfScreenDialog.tsx"></API>
