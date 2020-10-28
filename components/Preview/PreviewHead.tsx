import React from "react";
import "./style/index.scss";

export interface PreviewHeadProps {
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
    title?: React.ReactNode;
}

function PreviewHead(props: PreviewHeadProps) {
    const { prefixCls = "weui-form-preview__", children, title } = props;

    return (
        <React.Fragment>
            <label className={`${prefixCls}label`}>{title}</label>
            <em className={`${prefixCls}value`}>{children}</em>
        </React.Fragment>
    );
}

export default React.memo(PreviewHead);
