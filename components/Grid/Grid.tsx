import React from "react";
import classNames from "classnames";
import "./style/index.scss";

export interface GridProps<T = any> {
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
     * 数据
     */
    data: T[];
    /**
     * 渲染函数
     */
    children: (d: T, i: number) => React.ReactNode;
}

/**
 * 九宫格
 */
function Grid(props: GridProps) {
    const { prefixCls = "weui-grid", className, style, data, children } = props;

    return (
        <div className={classNames(prefixCls + "s", className)} style={style}>
            {data.map((x, i) => children(x, i))}
        </div>
    );
}

export default React.memo(Grid);
