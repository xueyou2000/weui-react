---
title: Checkbox 复选框
order: 3
nav:
  title: 组件
group:
  title: 数据输入
  path: /components/data-input
---

# Checkbox 复选框

与`Switch`组件很像，但是比它常用

## 代码演示

```tsx
/**
 * title: 不同尺寸
 */
import React from 'react';
import { Checkbox, Flex, WhiteSpace, Form, FormItem, List, ListItem } from 'weui-react-v2';

export default () => (
  <Form>
    <List title="不同尺寸">
      <FormItem access={true}>
        <Checkbox defaultChecked={true} size="small">
          (small) standard is dealt for u.
        </Checkbox>
      </FormItem>
      <FormItem access={true}>
        <Checkbox defaultChecked={true} size="default">
          (default) standard is dealicient for u.
        </Checkbox>
      </FormItem>
      <FormItem access={true}>
        <Checkbox defaultChecked={true} size="large">
          (big) standard is dealicient for u.
        </Checkbox>
      </FormItem>
    </List>
    <List title="禁用样式">
      <FormItem prop="a" disabled={true} valueKey="checked" defaultValue={true}>
        <Checkbox>选中禁用</Checkbox>
      </FormItem>
      <FormItem prop="b" disabled={true} valueKey="checked">
        <Checkbox>未选中禁用</Checkbox>
      </FormItem>
    </List>
  </Form>
);
```

<API src="../../../src/Checkbox/index.tsx"></API>
