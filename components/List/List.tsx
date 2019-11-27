import React from "react";
import classNames from "classnames";
import "./style/index.scss";

export interface ListProps {
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
}

function List(props: ListProps) {
    const { prefixCls = "weui-cells", className, style, title, children } = props;

    return (
        <React.Fragment>
            {title && <div className={`${prefixCls}__title`}>{title}</div>}
            <div className={classNames(prefixCls, className)} style={style} tabIndex={1}>
                {children}
            </div>
        </React.Fragment>
    );
}

export default React.memo(List);
