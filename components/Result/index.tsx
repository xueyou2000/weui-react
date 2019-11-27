import classNames from "classnames";
import React from "react";
import Icon from "../Icon";
import "./style";

export interface ResultProps {
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
     * 自定义图标
     */
    icon?: React.ReactNode;
    /**
     * 标题
     */
    title?: React.ReactNode;
    /**
     * 描述
     */
    desc?: React.ReactNode;
    /**
     * 扩展页脚
     */
    extra?: React.ReactNode;
    /**
     * 内容
     */
    children?: React.ReactNode;
    /**
     * 类型
     */
    type?: "success" | "fail" | "info";
}

function getIcon(type?: "fail" | "success" | "info") {
    if (!type) {
        return null;
    }
    switch (type) {
        case "fail":
            return <Icon icon="warn" />;
        case "info":
            return <Icon icon="info" />;
        default:
            return <Icon icon="success" />;
    }
}

function Result(props: ResultProps) {
    const { prefixCls = "weui-msg", className, style, title, icon, desc, extra, children, type } = props;

    return (
        <div className={classNames(prefixCls, className, prefixCls + type)} style={style}>
            {type || icon ? <div className={`${prefixCls}__icon-area`}>{icon || getIcon(type)}</div> : null}
            <div className={`${prefixCls}__text-area`}>
                <h2 className={`${prefixCls}__title`}>{title}</h2>
                <div className={`${prefixCls}__desc`}>{desc}</div>
            </div>
            <div className={`${prefixCls}__opr-area`}>{children}</div>
            <div className={`${prefixCls}__extra-area`}>{extra}</div>
        </div>
    );
}

export default React.memo(Result);
