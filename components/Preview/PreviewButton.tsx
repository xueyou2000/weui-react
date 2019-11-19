import classNames from "classnames";
import React from "react";
import "./style";

export interface PreviewButtonProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 值
     */
    children: React.ReactNode;
    /**
     * 按钮类型
     */
    type?: "default" | "primary";
    /**
     * 点击事件
     */
    onClick?: () => void;
}

function PreviewButton(props: PreviewButtonProps) {
    const { prefixCls = "weui-form-preview__btn", children, type = "default", onClick } = props;

    return (
        <a onClick={onClick} className={classNames(prefixCls, prefixCls + "_" + type)}>
            {children}
        </a>
    );
}

export default React.memo(PreviewButton);
