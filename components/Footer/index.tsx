import classNames from "classnames";
import React from "react";
import "./style/index.scss";

export interface FooterProps {
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
     * 页脚文本内容
     */
    children?: React.ReactNode;
    /**
     * 页脚链接内容
     */
    links?: React.ReactNode;
}

function Footer(props: FooterProps) {
    const { prefixCls = "weui-footer", className, style, children, links } = props;

    return (
        <div className={classNames(prefixCls, className)} style={style}>
            <p className={`${prefixCls}__links`}>{links}</p>
            <p className={`${prefixCls}__text`}>{children}</p>
        </div>
    );
}

export default React.memo(Footer);
