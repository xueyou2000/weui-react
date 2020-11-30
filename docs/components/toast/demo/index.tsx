/**
 * title: 轻提示
 * desc: 大部分都是由js弹出操作, `duration`持续事件设为0则不会自动关闭
 */
import React, { useState } from 'react';
import { Toast, Button } from 'weui-react-v2';
import './demo.less';

export default () => {
  return (
    <div className="toast-demo">
      <Button block={true} onClick={() => Toast.text('一行文本')}>
        文本提示
      </Button>
      <Button block={true} onClick={() => Toast.success('提交成功')}>
        成功提示
      </Button>
      <Button block={true} onClick={() => Toast.fail('提交失败')}>
        失败提示
      </Button>
      <Button block={true} onClick={() => Toast.loading('正在加载...')}>
        加载中
      </Button>
    </div>
  );
};
