import React from "react";
import classNames from "classnames";
import "./style";

export interface LoadingProps {
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
}

/**
 * 加载图标
 * @param props
 */
export function Loading(props: LoadingProps) {
    const { prefixCls = "weui-loading", className, style } = props;
    return <i className={classNames(prefixCls, className)} style={style}></i>;
}

export default React.memo(Loading);
