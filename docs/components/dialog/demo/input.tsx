/**
 * title: 封装输入框
 * desc: 根据业务和样式需要，自行封装
 */
import React, { useState } from 'react';
import { Button, Dialog, Toast } from 'weui-react-v2';
import './index.less';

export default function () {
  const [visible, setVisible] = useState(true);
  const [char, setChar] = useState('Luck');
  const [error, setError] = useState<string | null>(null);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>显示</Button>

      <Dialog
        className="demo-prompt"
        title="输入数值"
        visible={visible}
        onVisibleChange={setVisible}
        onConfirm={() => {
          return new Promise((resolve, reject) => {
            if (char) {
              console.log('幸运字符: ', char);
              setTimeout(() => {
                resolve();
              }, 2000);
            } else {
              setError('请输入幸运字符!');
              reject();
            }
          });
        }}
      >
        <p className="title">请输入您的幸运字符</p>
        <div className="input-container">
          <input
            type="text"
            value={char}
            onInput={(e) => setChar(e.currentTarget.value)}
            onFocus={() => setError(null)}
          />
        </div>
        {error && <p className="tips">{error}</p>}
      </Dialog>
    </div>
  );
}
