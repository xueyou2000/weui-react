import React from "react";
import classNames from "classnames";
import "./style/index.scss";

export interface MediaboxProps {
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
     * 扩展信息
     */
    info?: React.ReactNode;
    /**
     * 标题
     */
    title: React.ReactNode;
    /**
     * 缩略图地址
     */
    thumb?: string;
    /**
     * 文本模式
     */
    text?: boolean;
    /**
     * 紧凑模式
     */
    compact?: boolean;
    /**
     * 内容
     */
    children?: React.ReactNode;
    /**
     * 是否显示箭头
     */
    arrow?: boolean;
    /**
     * 点击事件
     */
    onClick?: () => void;
}

function Mediabox(props: MediaboxProps) {
    const { prefixCls = "weui-media-box", className, style, title, info, thumb, text, compact, children, arrow, onClick } = props;
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}_text`]: !text,
        [`${prefixCls}_appmsg`]: compact,
        [`${prefixCls}_arrow`]: arrow,
    });
    const content = (
        <React.Fragment>
            <h4 className={`${prefixCls}__title`}>{title}</h4>
            {children && <div className={`${prefixCls}__desc`}>{children}</div>}
            {info && <ul className={`${prefixCls}__info`}>{info}</ul>}
        </React.Fragment>
    );

    return (
        <div className={classString} style={style} onClick={onClick}>
            {text ? (
                content
            ) : (
                <React.Fragment>
                    <div className={`${prefixCls}__hd`}>{thumb ? <img className={`${prefixCls}__thumb`} src={thumb} alt="" /> : title}</div>
                    <div className={`${prefixCls}__bd`}>{content}</div>
                </React.Fragment>
            )}
            {arrow && <div className={`${prefixCls}__ft`}></div>}
        </div>
    );
}

export default React.memo(Mediabox);
