import classNames from "classnames";
import React, { useRef, useState } from "react";
import { useControll } from "utils-hooks";
import "./style/index.scss";
import { keyboradDown } from "./AmountKeyboardUtils";

export interface KeyboardProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 确认按钮内容
     */
    children?: React.ReactNode;
    /**
     * 清除文本
     */
    clean?: React.ReactNode;
    /**
     * 是否打开数字键盘
     */
    visible?: boolean;
    /**
     * 默认是否打开数字键盘
     */
    defaultVisible?: boolean;
    /**
     * 可视改变事件
     */
    onVisibleChange?: (visible?: boolean) => void;
    /**
     * 确认事件
     */
    onConfirm?: (amount: number, amountStr: string) => void;
    /**
     * 键盘键入事件
     */
    onChange?: (amount: number, amountStr: string, keyCode: string) => void;
}

function Keyboard(props: KeyboardProps) {
    const [amount, setAmount] = useState(null);
    const { prefixCls = "xy-keyboard", className, style, children, onVisibleChange, onConfirm, onChange, clean = "Clear" } = props;
    const [visible, setVisible, isControll] = useControll<boolean>(props, "visible", "defaultVisible", false);
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}-show`]: visible,
    });
    const lastBtn = useRef(null);

    function changeVisible(show: boolean) {
        if (!isControll) {
            setVisible(show);
        }
        if (onVisibleChange) {
            onVisibleChange(show);
        }
    }

    function handleKeyTouchstart(e: React.TouchEvent<HTMLAnchorElement>) {
        if (lastBtn.current) {
            lastBtn.current.classList.remove("down");
            lastBtn.current.scrollLeft;
        }
        const key = e.currentTarget as HTMLElement;
        const code = key.getAttribute("data-code");
        if (code === undefined) {
            return;
        }
        key.classList.add("down");
    }

    function handleKeyTouchend(e: React.TouchEvent<HTMLAnchorElement>) {
        const key = e.currentTarget as HTMLElement;
        lastBtn.current = key;
        const code = key.getAttribute("data-code");
        if (code !== undefined) {
            const navigator = window.navigator as any;
            navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
            if (navigator.vibrate) {
                window.navigator.vibrate(300);
            }
            const _amount = keyboradDown(amount, code);
            let _realAmount = parseFloat(_amount);
            if (_amount == "") {
                _realAmount = 0;
            }
            setAmount(_amount);
            if (onChange) {
                onChange(_realAmount, _amount, code);
            }
        }
    }

    function handleConfirm() {
        changeVisible(false);
        if (onConfirm) {
            let _realAmount = parseFloat(amount);
            if (amount == "") {
                _realAmount = 0;
            }
            onConfirm(_realAmount, amount);
        }
    }

    return (
        <div className={classString} style={style}>
            <div className={`${prefixCls}-inner`}>
                <a className={classNames(`${prefixCls}-key`, "left-0 top-0")} data-code="1" onTouchStart={handleKeyTouchstart} onTouchEnd={handleKeyTouchend}>
                    1
                </a>
                <a className={classNames(`${prefixCls}-key`, "left-1 top-0")} data-code="2" onTouchStart={handleKeyTouchstart} onTouchEnd={handleKeyTouchend}>
                    2
                </a>
                <a className={classNames(`${prefixCls}-key`, "left-2 top-0")} data-code="3" onTouchStart={handleKeyTouchstart} onTouchEnd={handleKeyTouchend}>
                    3
                </a>
                <a className={classNames(`${prefixCls}-key`, "left-0 top-1")} data-code="4" onTouchStart={handleKeyTouchstart} onTouchEnd={handleKeyTouchend}>
                    4
                </a>
                <a className={classNames(`${prefixCls}-key`, "left-1 top-1")} data-code="5" onTouchStart={handleKeyTouchstart} onTouchEnd={handleKeyTouchend}>
                    5
                </a>
                <a className={classNames(`${prefixCls}-key`, "left-2 top-1")} data-code="6" onTouchStart={handleKeyTouchstart} onTouchEnd={handleKeyTouchend}>
                    6
                </a>
                <a className={classNames(`${prefixCls}-key`, "left-0 top-2")} data-code="7" onTouchStart={handleKeyTouchstart} onTouchEnd={handleKeyTouchend}>
                    7
                </a>
                <a className={classNames(`${prefixCls}-key`, "left-1 top-2")} data-code="8" onTouchStart={handleKeyTouchstart} onTouchEnd={handleKeyTouchend}>
                    8
                </a>
                <a className={classNames(`${prefixCls}-key`, "left-2 top-2")} data-code="9" onTouchStart={handleKeyTouchstart} onTouchEnd={handleKeyTouchend}>
                    9
                </a>
                <a className={classNames(`${prefixCls}-key`, "left-0 top-3")} data-code="clear" onTouchStart={handleKeyTouchstart} onTouchEnd={handleKeyTouchend}>
                    {clean}
                </a>
                <a className={classNames(`${prefixCls}-key`, "left-1 top-3")} data-code="0" onTouchStart={handleKeyTouchstart} onTouchEnd={handleKeyTouchend}>
                    0
                </a>
                <a className={classNames(`${prefixCls}-key`, "left-2 top-3")} data-code="." onTouchStart={handleKeyTouchstart} onTouchEnd={handleKeyTouchend}>
                    .
                </a>
                <a className={classNames(`${prefixCls}-key`, "left-3 top-0")} data-code="backspace" onTouchStart={handleKeyTouchstart} onTouchEnd={handleKeyTouchend}>
                    <img src={require("./backspace.png")} alt="" />
                </a>
                <a className={classNames(`${prefixCls}-key`, "left-3 top-1 confirm-btn")} onClick={handleConfirm}>
                    {children}
                </a>
            </div>
        </div>
    );
}

export default React.memo(Keyboard);
