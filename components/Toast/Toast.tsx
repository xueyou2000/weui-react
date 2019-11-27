import classNames from "classnames";
import React from "react";
import Icon from "../Icon";
import Loading from "../Icon/Loading";
import { Popup } from "../Popup";
import { PopupProps } from "../Popup/Popup";
import "./style";

export interface ToastProps extends PopupProps {
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
     * 内容
     */
    children: React.ReactNode;
    /**
     * 类型
     * @description 默认 'success'
     */
    type?: "success" | "error" | "info" | "loading";
}

function getIcon(type?: "success" | "error" | "info" | "loading") {
    switch (type) {
        case "error":
            return <Icon icon="warn" />;
        case "info":
            return <Icon icon="info" />;
        case "loading":
            return <Loading />;
        default:
            return <Icon icon="success" />;
    }
}

function Toast(props: ToastProps) {
    const { prefixCls = "xy-toast", className, style, type = "success", children, duration = 3000, ...rest } = props;

    return (
        <Popup {...rest} duration={duration} maskClose={false} popupClassName={`${prefixCls}-popup`} popupContentCLassName={`${prefixCls}-wrapper`}>
            <div className={classNames(prefixCls, className)} style={style} data-type={type}>
                <div className={`${prefixCls}-icon`}>{getIcon(type)}</div>
                <div className={`${prefixCls}-msg`}>{children}</div>
            </div>
        </Popup>
    );
}

export default React.memo(Toast);
