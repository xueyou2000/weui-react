import React from "react";
import classNames from "classnames";
import "./style";

export interface IconProps {
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
     * 点击事件
     */
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    /**
     * 图标
     * @description 内置如下图标
     * 'success' 成功
     * 'safe-success'
     * 'success-circle'
     * 'success-no-circle'
     * 'success-no-circle-thin'
     * 'warn' 警告
     * 'safe-warn'
     * 'info' 提示
     * 'info-circle'
     * 'waiting' 等待
     * 'waiting-circle'
     * 'circle' 圆
     * 'download' 下载
     * 'cancel' 取消
     * 'search' 搜索
     * 'clear' 清除
     * 'back' 返回
     * 'delete' 删除
     * 'arrow' 箭头
     * 'arrow-bold'
     * 'back-arrow' 返回箭头
     * 'back-arrow-thin'
     * 'back-circle'
     * 'close' 关闭
     * 'close-thin'
     * 'btn_close' 关闭
     * 'btn_more' 更多
     */
    icon: string | React.ReactNode;
    /**
     * 是否旋转
     */
    spin?: boolean;
    /**
     * 内容
     */
    children?: React.ReactNode;
}

/**
 * 图标
 * @description 配合 @svgr/webpack 使用
 * @param props
 */
function Icon(props: IconProps) {
    const { prefixCls = "weui-icon", className, style, onClick, icon, spin = false, children } = props;
    const internal = typeof icon === "string";
    const Icon = icon as any;

    return (
        <i className={classNames(prefixCls, className, internal ? `${prefixCls}-${icon}` : null, { spin })} style={style} onClick={onClick}>
            {!internal && <Icon />}
            {children}
        </i>
    );
}

export default React.memo(Icon);
