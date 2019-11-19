import React from "react";
import "./style";

export interface PreviewItemProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
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
    const { prefixCls = "weui-form-preview__", children, title } = props;

    return (
        <div>
            <label className={`${prefixCls}label`}>{title}</label>
            <span className={`${prefixCls}value`}>{children}</span>
        </div>
    );
}

export default React.memo(PreviewItem);
