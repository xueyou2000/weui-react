/**
 * title: 长按钮
 * desc: 按钮将`100%`填充父元素宽度
 */
import React from 'react';
import { Button } from 'weui-react-v2';
import './btn-demo.less';

export default () => {
  return (
    <div>
      <Button type="primary" block style={{ marginBottom: '10px' }}>
        Primary
      </Button>
      <Button block style={{ marginBottom: '10px' }}>
        Default
      </Button>
      <Button type="dashed" block style={{ marginBottom: '10px' }}>
        Dashed
      </Button>
      <Button type="link" block style={{ marginBottom: '10px' }}>
        Link
      </Button>
    </div>
  );
};
