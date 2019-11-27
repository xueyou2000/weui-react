import React from "react";
import classNames from "classnames";
import "./style/index.scss";

export interface MediaboxMetaProps {
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
     * 分割线模式
     * @description 显示左边分割线
     */
    extra?: boolean;
}

function MediaboxMeta(props: MediaboxMetaProps) {
    const { prefixCls = "weui-media-box__info__meta", className, style, children, extra } = props;

    return (
        <li className={classNames(prefixCls, className, { "weui-media-box__info__meta_extra": extra })} style={style}>
            {children}
        </li>
    );
}

export default React.memo(MediaboxMeta);
