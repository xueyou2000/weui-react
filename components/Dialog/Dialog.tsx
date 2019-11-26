import classNames from "classnames";
import React, { useCallback } from "react";
import "./index.scss";
import { Popup } from "../Popup";
import { PopupProps } from "../Popup/Popup";

export interface DialogProps extends PopupProps {
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
    children: React.ReactNode;
    /**
     * 页脚按钮
     */
    footer?: React.ReactNode[];
    /**
     * 选中按钮事件
     */
    onClick?: (index: number) => Promise<void>;
}

function Dialog(props: DialogProps) {
    const { prefixCls = "weui-dialog", className, style, title, children, footer, onClick, maskClose = false, ...rest } = props;
    let closeFunc: Function;

    const getCloseFunc = (close: Function) => {
        closeFunc = close;
        if (props.getCloseFunc) {
            props.getCloseFunc(close);
        }
    };

    function clickHandle(i: number) {
        if (onClick) {
            onClick(i).then(() => closeFunc());
        } else {
            closeFunc();
        }
    }

    return (
        <Popup {...rest} getCloseFunc={getCloseFunc} maskClose={maskClose}>
            <div className={classNames(prefixCls, className)} style={style}>
                {title && (
                    <div className={`${prefixCls}__hd`}>
                        <div className={`${prefixCls}__title`}>{title}</div>
                    </div>
                )}
                <div className={`${prefixCls}__bd`}>{children}</div>
                <div className={`${prefixCls}__ft`}>
                    {footer.map((x, i) => (
                        <a key={i} className={classNames(`${prefixCls}__btn`, { [`${prefixCls}__btn_default`]: i === 0 && footer.length > 1 })} onClick={() => clickHandle(i)}>
                            {x}
                        </a>
                    ))}
                </div>
            </div>
        </Popup>
    );
}

export default React.memo(Dialog);
