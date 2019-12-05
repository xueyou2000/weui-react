import React from "react";
import "./style/index.scss";

export interface PreviewItemProps {
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
     * 值
     */
    children: React.ReactNode;
    /**
     * 标题
     */
    title: React.ReactNode;
}

function PreviewItem(props: PreviewItemProps) {
    const { prefixCls = "weui-form-preview__", className, style, children, title } = props;

    return (
        <div className={className} style={style}>
            <label className={`${prefixCls}label`}>{title}</label>
            <span className={`${prefixCls}value`}>{children}</span>
        </div>
    );
}

export default React.memo(PreviewItem);
