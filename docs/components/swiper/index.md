---
title: Swiper 轮播
order: 4
nav:
  title: 组件
group:
  title: 操作反馈
  path: /components/feedback
---

# Swiper 轮播

轮播图片

## 代码演示

```tsx
/**
 * title: 自动轮播, 并有拖拽缩放效果
 */
import React from 'react';
import { Swiper } from 'weui-react-v2';
import './index.less';

export default () => (
  <>
    <Swiper className="swiper-demo" autoplay={true}>
      <div
        className="fimg"
        style={{
          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,
        }}
      />
      <div
        className="fimg"
        style={{
          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,
        }}
      />
      <div
        className="fimg"
        style={{
          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,
        }}
      />
      <div
        className="fimg"
        style={{
          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,
        }}
      />
    </Swiper>
  </>
);
```

```tsx
/**
 * title: 垂直滚动
 * desc: 垂直滚动时必须给容器设置固定高度
 */
import React from 'react';
import { Swiper } from 'weui-react-v2';
import './index.less';

export default () => (
  <>
    <Swiper className="swiper-demo2" autoplay={true} vertical={true} scaleMode={false} style={{ height: '500px' }}>
      <div
        className="fimg"
        style={{
          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,
        }}
      />
      <div
        className="fimg"
        style={{
          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,
        }}
      />
      <div
        className="fimg"
        style={{
          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,
        }}
      />
      <div
        className="fimg"
        style={{
          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,
        }}
      />
    </Swiper>
  </>
);
```

<API src="../../../src/Swiper/index.tsx"></API>
