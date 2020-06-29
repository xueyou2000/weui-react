import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { useUnmount } from "utils-hooks";
import "./style/index.scss";
import { getLocal } from "../Local";

export interface CountDownProps {
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
     * 普通状态内容
     */
    children?: React.ReactNode;
    /**
     * 开始计时事件
     * @description 返回false则中断
     */
    onStart: (disabled: boolean) => Promise<boolean>;
    /**
     * 倒计时完毕节点
     */
    finish?: React.ReactNode;
    /**
     * 倒计时总秒数
     */
    time?: number;
    /**
     * 是否禁用
     */
    disabled?: boolean;
}

/**
 * 倒计时状态
 */
export enum CountdownStatusEnum {
    /**
     * 普通状态
     */
    NORMAL,
    /**
     * 倒计时状态
     */
    COUNTDOWN,
    /**
     * 倒计时完毕
     */
    COMPLETE,
}

function Countdown(props: CountDownProps) {
    const { prefixCls = "xy-count-down", className, style, children, disabled = false, onStart, finish = getLocal().Countdown.finish, time = 60 } = props;
    // 验证码倒计时数
    const [countdown, setCountdown] = useState(0);
    // 状态 0=正常, 1=倒计时, 2=倒计时完毕
    const [status, setStatus] = useState(CountdownStatusEnum.NORMAL);
    // 计时器句柄
    const timeHandle = useRef(null);
    // 是否发送请求中
    const [loading, setLoading] = useState(false);
    const countdownRef = useRef<number>(0);

    function start() {
        if (loading || status === CountdownStatusEnum.COUNTDOWN) {
            return;
        }
        if (onStart) {
            setLoading(true);
            onStart(disabled)
                .then((keep) => {
                    setLoading(false);
                    if (keep) {
                        doStart();
                    }
                })
                .catch((error) => {
                    setLoading(false);
                });
        } else {
            doStart();
        }
    }

    function doStart() {
        if (disabled) {
            return;
        }
        stop();
        setCountdown(time);
        countdownRef.current = time;
        setStatus(CountdownStatusEnum.COUNTDOWN);
    }

    function stop() {
        clearInterval(timeHandle.current);
    }

    function complete() {
        stop();
        setStatus(CountdownStatusEnum.COMPLETE);
    }

    function renderStatusNode() {
        let label;
        if (status === CountdownStatusEnum.COUNTDOWN) {
            label = (
                <span>
                    {getLocal().Countdown.remaining}
                    <span className={`${prefixCls}_timer_text`}>{countdown}</span>秒
                </span>
            );
        } else {
            label = loading ? getLocal().Countdown.sending : status === CountdownStatusEnum.COMPLETE ? finish : (children as any).props.children;
        }
        return React.cloneElement(children as any, { loading, disabled, onClick: start, className: classNames("weui-vcode-btn", (children as any).props.className), children: label });
    }

    useEffect(() => {
        if (status === CountdownStatusEnum.COUNTDOWN) {
            timeHandle.current = window.setInterval(() => {
                if (countdownRef.current <= 0) {
                    complete();
                } else {
                    countdownRef.current = countdownRef.current - 1;
                    setCountdown((prev) => --prev);
                }
            }, 1000);

            return stop;
        }
    }, [status, countdown]);

    useUnmount(() => {
        stop();
    });

    return (
        <span className={classNames(prefixCls, className, { [`${prefixCls}--disabled`]: disabled })} style={style}>
            {renderStatusNode()}
        </span>
    );
}

export default React.memo(Countdown);
