import React, { useState, useRef } from "react";
import Page from "site/components/Page";
import { Button, Keyboard, Toast } from "weui-react";
import "./index.scss";

function KeyboardDemo() {
    const [amountStr, setAmountStr] = useState(null);

    function amountChange(amount: number, _amountStr: string) {
        console.log("金额", amount);
        setAmountStr(_amountStr);
    }

    function submit(amount: number) {
        Toast.success("提交金额" + amount);
    }

    return (
        <Page className="keyboard-demo" title="Keyboard" introduce="金额键盘">
            <div className="payment-page__bd">
                <h1 className="paymeny-title">输入付款金额</h1>

                <div className="fake-amount-input">
                    <div className="amount-placeholder">请输入金额</div>
                    <div className="amount-input"></div>
                    <div className="amount_plan">
                        <span className="amount">{amountStr}</span>
                        <span className="unit">$</span>
                    </div>
                </div>
            </div>
            <Keyboard visible={true} onChange={amountChange} onConfirm={submit}>
                <span className="submit-btn">
                    <div>确</div>
                    <div>认</div>
                </span>
            </Keyboard>
        </Page>
    );
}

export default React.memo(KeyboardDemo);
