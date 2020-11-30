/**
 * title: 金额键盘
 * desc: 一般默认用Input组件唤起。
 */
import React, { useState } from 'react';
import { AmountKeyBoard, Toast } from 'weui-react-v2';
import './index.less';

export default function AmountKeyBoardDemo() {
  const [amount, setAmount] = useState(45.65);
  const [amountStr, setAmountStr] = useState('45.65');
  const [visible, setVisible] = useState(true);

  function amountChange(amount: number, _amountStr: string) {
    console.log('金额', amount, '_amountStr', _amountStr);
    setAmount(amount);
    setAmountStr(_amountStr);
  }

  function submit(amount: number) {
    Toast.success('提交金额' + amount);
  }

  return (
    <div className="keyboard-demo">
      <div className="payment-page__bd">
        <h1 className="paymeny-title">输入付款金额</h1>
        <p style={{ textAlign: 'center' }}>(Tips: 触摸事件需要在移动端查看)</p>

        <div className="fake-amount-input" onClick={() => setVisible(true)}>
          <div className="amount-placeholder">请输入金额</div>
          <div className="amount-input"></div>
          <div className="amount_plan">
            <span className="amount">{amountStr}</span>
            <span className="unit">$</span>
          </div>
        </div>
      </div>
      <AmountKeyBoard
        // confirmBtn={
        //   <span className="submit-btn">
        //     <div>确</div>
        //     <div>认</div>
        //   </span>
        // }
        value={amount}
        visible={visible}
        onVisibleChange={setVisible}
        onChange={amountChange}
        onConfirm={submit}
      />
    </div>
  );
}
