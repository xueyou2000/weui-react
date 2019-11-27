import React from "react";
import classNames from "classnames";
import "./style";

export interface SkeletonProps {
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
     * 显示多少行骨架
     */
    rows?: number;
}

const ColConfig = [[22], [8, 15], [6, 18], [13, 9], [4, 3, 16], [8, 6, 8]];

function Skeleton(props: SkeletonProps) {
    const { prefixCls = "xy-skeleton", className, style, rows = 6 } = props;

    const content = [];
    for (let i = 0; i < rows; ++i) {
        const cfgIndex = i % ColConfig.length;
        content.push(
            <div className={`${prefixCls}-row`} key={i}>
                {ColConfig[cfgIndex].map((d, j) => (
                    <div className={classNames(`${prefixCls}-col`, `col-${d}`)} key={j}>
                        <div className="stripe" style={{ animationDelay: `${j * 0.5}s` }} />
                    </div>
                ))}
            </div>,
        );
    }

    return (
        <div className={classNames(prefixCls, className)} style={style}>
            {content}
        </div>
    );
}

export default React.memo(Skeleton);
