/**
 * title: 按钮类型
 * desc: 钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
 */
import React, { useState } from 'react';
import { Button } from 'weui-react-v2';
import './btn-demo.less';

export default () => {
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <div className="demo-btn-wrap">
      <Button type="primary">主按钮</Button>
      <Button>默认按钮</Button>
      <Button type="dashed">虚线按钮</Button>
      <br />
      <Button type="text">文本按钮</Button>
      <Button type="link">链接按钮</Button>
      <br />
      <Button type="primary" loading={loading} onClick={handleClick}>
        点击加载
      </Button>
    </div>
  );
};
