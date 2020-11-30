/**
 * title: inline/block模式切换
 * desc: 默认是内联模式，`Spin`不会宽度100%
 */
import React, { useState } from 'react';
import { Spin, Button } from 'weui-react-v2';
import './index.less';

export default () => {
  const [inline, setInline] = useState(false);

  return (
    <div className="spin-demo">
      <Spin spinning={true} inline={inline} tips="加载中...">
        <div className="alert-box">
          <span className="ant-alert-message">title</span>
          <span className="ant-alert-description">
            context of this alert.
            <br />
            小的用于文本加载。
            <br />
            更多文本
            <br />
            更多文本
            <br />
            更多文本
            <br />
            更多文本
            <br />
            更多文本
          </span>
        </div>
      </Spin>
      <br />
      <Button type="primary" onClick={() => setInline((pre) => !pre)}>
        切换内联状态
      </Button>
    </div>
  );
};
