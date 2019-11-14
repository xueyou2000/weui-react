import React from "react";
import classNames from "classnames";
import "./style";

export interface ListItemProps {
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
     * 头部
     */
    head?: React.ReactNode;
    /**
     * 内容
     */
    children?: React.ReactNode;
    /**
     * 页脚内容
     */
    footer?: React.ReactNode;
    /**
     * 是否显示箭头
     */
    arrow?: boolean;
    /**
     * 点击事件
     */
    onClick?: () => void;
}

/**
 * 列表项
 */
function ListItem(props: ListItemProps) {
    const { prefixCls = "weui-cell", className, style, head, children, footer, arrow, onClick } = props;
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}_access`]: !!onClick || arrow,
    });

    return (
        <div className={classString} style={style} onClick={onClick}>
            {head && <div className={`${prefixCls}__hd`}>{head}</div>}
            <div className={`${prefixCls}__bd`}>{children}</div>
            {(footer || arrow) && <div className={`${prefixCls}__ft`}>{footer}</div>}
        </div>
    );
}

export default React.memo(ListItem);
