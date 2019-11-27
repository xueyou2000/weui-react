import classNames from "classnames";
import React, { useState } from "react";
import Loading from "../Icon/Loading";
import { Popup } from "../Popup";
import { PopupProps } from "../Popup/Popup";
import "./style/index.scss";

export interface ActionsheetProps extends PopupProps {
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
     * 菜单
     */
    menus?: React.ReactNode[];
    /**
     * 选中菜单事件
     */
    onClick?: (index: number) => Promise<any>;
}

function Actionsheet(props: ActionsheetProps) {
    const { prefixCls = "weui-actionsheet", className, style, title, menus = [], onClick, ...rest } = props;
    const [loading, setLoading] = useState(false);
    let closeFunc: Function;

    const getCloseFunc = (close: Function) => {
        closeFunc = close;
        if (props.getCloseFunc) {
            props.getCloseFunc(close);
        }
    };

    function clickHandle(i: number) {
        if (onClick) {
            setLoading(true);
            onClick(i)
                .then(() => closeFunc())
                .then(() => setLoading(false));
        } else {
            closeFunc();
        }
    }

    return (
        <Popup {...rest} getCloseFunc={getCloseFunc} animateClassName="drill" popupContentCLassName={`${prefixCls}-wrapper`}>
            <div className={classNames(prefixCls, className)} style={style}>
                {title && (
                    <div className={`${prefixCls}__title`}>
                        <p className={`${prefixCls}__title-text`}>{title}</p>
                    </div>
                )}
                <div className={`${prefixCls}__menu`}>
                    {menus.map((x, i) => (
                        <div key={i} className={`${prefixCls}__cell`} onClick={() => clickHandle(i)}>
                            {loading && <Loading />}
                            {x}
                        </div>
                    ))}
                </div>
                <div className={`${prefixCls}__action`}>
                    <div className={`${prefixCls}__cell`} onClick={() => closeFunc()}>
                        取消
                    </div>
                </div>
            </div>
        </Popup>
    );
}

export default React.memo(Actionsheet);
