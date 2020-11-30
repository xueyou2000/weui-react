---
title: ActionSheet 弹出式菜单
order: 6
nav:
  title: 组件
group:
  title: 操作反馈
  path: /components/feedback
---

# ActionSheet 弹出式菜单

从底部弹出菜单，快速选择。

## 代码演示

```tsx
/**
 * title: 配置菜单
 * desc: 设置`menus`属性来配置菜单，`onClick`监听菜单点击事件
 */
import React from 'react';
import { ActionSheet, Button } from 'weui-react-v2';

function pop() {
  ActionSheet({
    title: '请选择喜欢的水果?',
    menus: ['苹果', '西瓜', '梨子'],
    rootSelector: '#root',
    onClick: (index) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    },
  });
}

export default () => (
  <>
    <Button onClick={pop}>点击选择</Button>
    <img
      style={{ width: '100%', display: 'block' }}
      src="https://images.pexels.com/photos/1239387/pexels-photo-1239387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt=""
    />
    <img
      style={{ width: '100%', display: 'block' }}
      src="https://images.pexels.com/photos/1657110/pexels-photo-1657110.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=650&w=940"
      alt=""
    />
  </>
);
```

<API src="../../../src/ActionSheet/ActionSheet.tsx"></API>
