import classNames from "classnames";
import React from "react";
import { useControll } from "utils-hooks";
import Icon from "../Icon";
import "./style/index.scss";

export interface RateProps {
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
     * 评星数量(默认5星)
     */
    starCount?: number;
    /**
     * 选中值
     */
    value?: number;
    /**
     * 默认选中值
     */
    defaultValue?: number;
    /**
     * 改变事件
     */
    onChange?: (val: number) => void;
}

function Rate(props: RateProps) {
    const { prefixCls = "xy-rate", className, style, starCount = 5, onChange } = props;
    const [value, setValue, isControll] = useControll(props, "value", "defaultValue");

    function changeValue(val: number) {
        if (!isControll) {
            setValue(val);
        }
        if (onChange) {
            onChange(val);
        }
    }

    function createStarList() {
        let starList = [];

        for (let i = 1; i <= starCount; ++i) {
            const star = (
                <li key={i} className={classNames(`${prefixCls}-star`, `${prefixCls}-${value >= i ? "full" : "zero"}`)} onClick={() => changeValue(i)}>
                    <Icon className={`${prefixCls}-second`} icon="star" />
                </li>
            );
            starList.push(star);
        }

        return starList;
    }

    return (
        <ul className={classNames(prefixCls, className)} style={style}>
            {createStarList()}
        </ul>
    );
}

export default React.memo(Rate);
