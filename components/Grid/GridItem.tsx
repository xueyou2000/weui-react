import React from "react";
import classNames from "classnames";
import "./style/index.scss";

export interface GridItemProps {
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
    label: React.ReactNode;
    /**
     * 图标
     */
    icon?: React.ReactNode;
    /**
     * onClick
     */
    onClick?: () => void;
}

/**
 * 九宫格项
 */
function GridItem(props: GridItemProps) {
    const { prefixCls = "weui-grid", className, style, label, icon, onClick } = props;

    return (
        <div className={classNames(prefixCls, className)} style={style} onClick={onClick}>
            {icon && <div className={`${prefixCls}__icon`}>{icon}</div>}
            <p className={`${prefixCls}__label`}>{label}</p>
        </div>
    );
}

export default React.memo(GridItem);
