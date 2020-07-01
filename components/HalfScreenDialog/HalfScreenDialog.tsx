import classNames from "classnames";
import React, { useState } from "react";
import { Popup } from "../Popup";
import { PopupProps } from "../Popup/Popup";
import Icon from "../Icon";
import "./style/index.scss";
import { getLocal } from "../Local";

export interface HalfScreenDialogProps extends PopupProps {
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
    title: React.ReactNode;
    /**
     * 子标题
     */
    subTitle?: React.ReactNode;
    /**
     * 内容
     */
    children?: React.ReactNode;
    /**
     * 页脚按钮
     */
    footer?: React.ReactNode;
    /**
     * 选中按钮事件
     */
    onClick?: (index: number) => Promise<void>;
    /**
     * 是否显示更多
     */
    more?: boolean;
    /**
     * 右上角扩展内容
     */
    exted?: React.ReactNode;
    /**
     * 更多点击事件
     */
    onMoreClick?: () => void;
}

function HalfScreenDialog(props: HalfScreenDialogProps) {
    const { prefixCls = "weui-half-screen-dialog", className, style, title, subTitle, children, footer = [], more, onClick, onMoreClick, exted, ...rest } = props;
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

    function moreClickHandle() {
        if (onMoreClick) {
            onMoreClick();
        }
    }

    return (
        <Popup {...rest} getCloseFunc={getCloseFunc} animateClassName="drill" popupContentCLassName={`${prefixCls}-wrapper`}>
            <div className={classNames(prefixCls, className)} style={style}>
                <div className={`${prefixCls}__hd`}>
                    <div className={`${prefixCls}__hd__side`} onClick={() => closeFunc()}>
                        <Icon className="weui-icon-btn" icon="btn_close">
                            {getLocal().commom.close}
                        </Icon>
                    </div>
                    <div className={`${prefixCls}__hd__main`}>
                        <strong className={`${prefixCls}__title`}>{title}</strong>
                        {subTitle && <span className={`${prefixCls}__subtitle`}>{subTitle}</span>}
                    </div>
                    {exted && (
                        <div className={`${prefixCls}__hd__side`} onClick={moreClickHandle}>
                            {exted}
                        </div>
                    )}
                    {more && (
                        <div className={`${prefixCls}__hd__side`} onClick={moreClickHandle}>
                            <Icon className="weui-icon-btn" icon="btn_more">
                                {getLocal().commom.more}
                            </Icon>
                        </div>
                    )}
                </div>
                <div className={`${prefixCls}__bd`}>{children}</div>
                <div className={`${prefixCls}__ft`}>
                    {[].concat(footer).map((x: any, i) =>
                        React.cloneElement(x, {
                            key: i,
                            loading,
                            onClick: () => clickHandle(i),
                        }),
                    )}
                </div>
            </div>
        </Popup>
    );
}

export default React.memo(HalfScreenDialog);
