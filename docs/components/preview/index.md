---
title: Preview 表单预览
order: 3
nav:
  title: 组件
group:
  title: 数据展示
  path: /components/data-display
---

# Preview 表单预览

展示键值对的内容

## 代码演示

```tsx
/**
 * title: 预览内容
 */
import React from 'react';
import { Preview, PreviewItem, PreviewButton, WhiteSpace } from 'weui-react-v2';

export default () => (
  <div style={{ minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '30px', margin: '-28px' }}>
    <Preview subTitle="付款金额" title="¥2400.00" footer={<PreviewButton key="c">操作</PreviewButton>}>
      <PreviewItem title="商品">电动打单机</PreviewItem>
      <PreviewItem title="标题标题">名字名字名字</PreviewItem>
      <PreviewItem title="标题标题">很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字</PreviewItem>
    </Preview>

    <WhiteSpace size="xl" />

    <Preview
      subTitle="付款金额"
      title="¥2400.00"
      footer={[
        <PreviewButton key="a">辅助操作</PreviewButton>,
        <PreviewButton type="primary" key="b">
          提交
        </PreviewButton>,
      ]}
    >
      <PreviewItem title="商品">电动打单机</PreviewItem>
      <PreviewItem title="标题标题">名字名字名字</PreviewItem>
      <PreviewItem title="标题标题">很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字</PreviewItem>
    </Preview>
  </div>
);
```

<API src="../../../src/Preview/Preview.tsx"></API>
<API src="../../../src/Preview/PreviewButton.tsx"></API>
<API src="../../../src/Preview/PreviewItem.tsx"></API>
