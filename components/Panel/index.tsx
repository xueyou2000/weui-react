import React from "react";
import classNames from "classnames";
import "./Style";

export interface PanelProps {
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
     * 标题
     */
    title: React.ReactNode;
    /**
     * 页脚
     */
    footer?: React.ReactNode;
}

/**
 * 面板
 */
function Panel(props: PanelProps) {
    const { prefixCls = "weui-panel", className, style, children, title, footer } = props;

    return (
        <div className={classNames(prefixCls, className)} style={style}>
            <div className={`${prefixCls}__hd`}>{title}</div>
            <div className={`${prefixCls}__bd`}>{children}</div>
            {footer && <div className={`${prefixCls}__ft`}>{footer}</div>}
        </div>
    );
}

export default React.memo(Panel);
