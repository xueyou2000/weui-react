import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import { EXITED, useControll, useMount, useTranstion, ENTERED, GetDrawerContainerFuc, usePortal } from "utils-hooks";
import "./style/index.scss";

export interface PopupProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 动画类名
     */
    animateClassName?: string;
    /**
     * 弹出附加类名
     */
    popupClassName?: string;
    /**
     * 弹出框内容元素类名
     */
    popupContentCLassName?: string;
    /**
     * 持续时间（毫秒）
     * @description 默认 3000 毫秒后关闭
     */
    duration?: number;
    /**
     * 关闭事件
     */
    onUnmount?: Function;
    /**
     * 内容
     */
    children?: React.ReactNode;
    /**
     * 是否显示遮罩层
     */
    mask?: boolean;
    /**
     * 背景遮罩是否可关闭
     */
    maskClose?: boolean;
    /**
     * 是否显示
     */
    visible?: boolean;
    /**
     * 默认是否显示
     */
    defaultVisible?: boolean;
    /**
     * 显示改变
     */
    onVisibleChange?: (visible: boolean) => void;
    /**
     * 获取关闭函数
     */
    getCloseFunc?: (close: Function) => void;
    /**
     * 返回一个容器来装载抽屉
     * @description 默认为body内创建一个div作为容器
     */
    getContainer?: HTMLElement | GetDrawerContainerFuc;
}

function Popup(props: PopupProps) {
    const { prefixCls = "weui-popup", animateClassName = "fade", popupClassName, popupContentCLassName, duration, onUnmount, children, onVisibleChange, getCloseFunc, mask = true, maskClose = true, getContainer } = props;
    const [visible, setVisible, isControll] = useControll(props, "visible", "defaultVisible");
    const [ref, state] = useTranstion(visible);
    const opening = state.indexOf("en") !== -1;
    const animateclassString = classNames(animateClassName, `${animateClassName}-state-${state}`, {
        [`${animateClassName}-open`]: opening,
    });
    const firstFlagRef = useRef(visible);
    const [renderPortal] = usePortal("", getContainer);

    function handleChange(_open: boolean) {
        if (!isControll) {
            setVisible(_open);
        }
        if (onVisibleChange) {
            onVisibleChange(_open);
        }
    }

    function closeByMask() {
        if (maskClose) {
            handleChange(false);
        }
    }

    useEffect(() => {
        if (state === ENTERED) {
            firstFlagRef.current = true;
        } else if (state === EXITED && firstFlagRef.current === true) {
            if (onUnmount) {
                onUnmount();
            }
        }
    }, [state]);

    useMount(() => {
        let timeHandler;
        if (duration) {
            timeHandler = setTimeout(() => handleChange(false), duration);
        }
        return () => clearTimeout(timeHandler);
    });

    if (getCloseFunc) {
        getCloseFunc(() => {
            handleChange(false);
        });
    }

    function content() {
        return (
            <div className={classNames(prefixCls, popupClassName, `${prefixCls}-state-${state}`, { [`${prefixCls}-open`]: opening })}>
                <div className={classNames(`${prefixCls}-mask`, { "hidden-mask": !mask })} onClick={closeByMask}></div>
                <div className={classNames(`${prefixCls}-content`, popupContentCLassName, animateclassString)} ref={ref}>
                    {children}
                </div>
            </div>
        );
    }

    return renderPortal(content());
}

export default React.memo(Popup);
