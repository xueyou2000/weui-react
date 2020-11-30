/**
 * title: 模态对话框
 * desc: 属性基本与`HalfScreenDialog`保持一致
 */
import React from 'react';
import { Button, DialogPop } from 'weui-react-v2';

export default function () {
  function pop() {
    DialogPop({
      title: '对话框标题',
      children: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
      onConfirm: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });
      },
    });
  }

  return (
    <div>
      <Button onClick={pop}>显示</Button>
    </div>
  );
}
