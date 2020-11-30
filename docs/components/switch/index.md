---
title: Switch 开关
order: 4
nav:
  title: 组件
group:
  title: 数据输入
  path: /components/data-input
---

# Switch 开关

用作布尔值的开关状态

## 代码演示

```tsx
/**
 * title: 不同尺寸
 */
import React from 'react';
import { Switch, Flex, WhiteSpace, Form, FormItem, List, ListItem } from 'weui-react-v2';

export default () => (
  <Form labelWidth="20vw">
    <List title="不同尺寸">
      <FormItem label="小尺寸" access={false} align="right">
        <Switch defaultChecked={true} size="small" />
      </FormItem>
      <FormItem label="中等尺寸" access={false} align="right">
        <Switch defaultChecked={true} size="default" />
      </FormItem>
      <FormItem label="大尺寸" access={false} align="right">
        <Switch defaultChecked={true} size="large" />
      </FormItem>
    </List>
    <List title="禁用样式">
      <FormItem
        label="开禁用"
        prop="a"
        disabled={true}
        valueKey="checked"
        defaultValue={true}
        access={false}
        align="right"
      >
        <Switch />
      </FormItem>
      <FormItem label="关禁用" prop="c" disabled={true} valueKey="checked" access={false} align="right">
        <Switch />
      </FormItem>
    </List>
    <List title="自定义标识符">
      <FormItem label="中文提示" access={false} align="right">
        <Switch checkedNode="开" unCheckedNode="关" />
      </FormItem>
    </List>
  </Form>
);
```

<API src="../../../src/Switch/index.tsx"></API>
