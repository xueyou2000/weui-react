import classNames from "classnames";
import React from "react";
import { Popup } from "../Popup";
import { PopupProps } from "../Popup/Popup";
import "./style";

export interface TooptipsProps extends PopupProps {
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
     * 类型
     */
    type?: "success" | "fail";
    /**
     * 内容
     */
    children: React.ReactNode;
}

function Tooptips(props: TooptipsProps) {
    const { prefixCls = "weui-toptips", className, style, type = "fail", children, duration = 3000, ...rest } = props;

    return (
        <Popup {...rest} mask={false} maskClose={false} duration={duration} animateClassName="drillUp" popupContentCLassName={`${prefixCls}-wrapper`}>
            <div className={classNames(prefixCls, className, `${prefixCls}-type-${type}`)} style={style}>
                {children}
            </div>
        </Popup>
    );
}

export default React.memo(Tooptips);
