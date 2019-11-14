import React from "react";
import classNames from "classnames";
import "./style";
import { Loading } from "weui-react";

export interface LoadmoreProps {
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
     * 加载模式
     */
    loading?: boolean;
    /**
     * 横线模式
     */
    line?: boolean;
    /**
     * 点模式
     */
    dot?: boolean;
    /**
     * 提示文本
     */
    tips?: string;
}

function Loadmore(props: LoadmoreProps) {
    const { prefixCls = "weui-loadmore", className, style, loading, line, dot, tips } = props;
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}_dot`]: dot || !tips,
        [`${prefixCls}_line`]: dot || line || !loading,
        [`${prefixCls}_loading`]: loading,
    });

    return (
        <div className={classString} style={style}>
            {loading && <Loading />}
            <span className={`${prefixCls}__tips`}>{tips}</span>
        </div>
    );
}

export default React.memo(Loadmore);
