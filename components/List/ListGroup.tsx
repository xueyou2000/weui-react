import React from "react";
import classNames from "classnames";
import "./style";
import List from "./List";

export interface ListGroupProps {
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
     * 标题
     */
    title?: React.ReactNode;
    /**
     * 内容
     */
    children?: React.ReactNode;
    /**
     * 表单域
     */
    formMode?: boolean;
}

/**
 * 列表组
 */
function ListGroup(props: ListGroupProps) {
    const { prefixCls = "weui-cells", className, style, title, children, formMode = true } = props;

    return (
        <div className={classNames(prefixCls + "__group", className, formMode ? "weui-cells__group_form" : "")} style={style}>
            <List className={formMode ? "weui-cells_form" : ""} title={title}>
                {children}
            </List>
        </div>
    );
}

export default React.memo(ListGroup);
