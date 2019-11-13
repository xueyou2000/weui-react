import classNames from "classnames";
import React from "react";
import Loading from "../Icon/Loading";
import "./style";

export type ButtonType = "primary" | "default" | "danger";

export interface ButtonProps {
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
    children?: React.ReactNode;
    /**
     * 按钮类型
     */
    type?: ButtonType;
    /**
     * 是否长按钮
     */
    long?: boolean;
    /**
     * 等待状态
     */
    loading?: boolean;
    /**
     * 禁用状态
     */
    disabled?: boolean;
    /**
     * click事件
     */
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

/**
 * 按钮
 */
function Button(props: ButtonProps) {
    const { prefixCls = "weui-btn", className, style, children, type = "default", long, loading, disabled, onClick } = props;
    const classString = classNames(prefixCls, className, `${prefixCls}_${type}`, {
        [`${prefixCls}_disabled`]: disabled,
        [`${prefixCls}_loading`]: loading,
        [`${prefixCls}_long`]: long,
    });

    function clickHandle(event: React.MouseEvent<HTMLElement>) {
        if (!disabled && !loading && onClick) {
            onClick(event);
        }
    }

    return (
        <a className={classString} style={style} onClick={clickHandle}>
            {loading && <Loading />}
            {children}
        </a>
    );
}

export default React.memo(Button);
