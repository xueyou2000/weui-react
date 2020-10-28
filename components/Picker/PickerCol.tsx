import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { useMount } from "utils-hooks";
import { clamp } from "../utils/number-utils";
import "./style/index.scss";
import { PickerItem, getAppropriateValue } from "./utils";

// 单行选项高度
const ITEM_HEIGHT = 48;

// 转换vw单位
function PxToVw(px: number) {
    return px / 3.75;
}

export interface PickerColProps {
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
     * 数据源
     */
    data?: PickerItem[];
    /**
     * 列索引
     */
    index: number;
    /**
     * 选中值
     */
    value: any;
    /**
     * 改变选中值
     */
    onChange: (val: any, i: number) => void;
    /**
     * 当前可视值
     */
    onVisibleValue?: (val: any, i: number) => void;
}

/**
 * 计算偏移
 * @param i
 * @param half
 */
function calcOffset(i: number) {
    if (i === -1) {
        return 96;
    }
    return 96 - i * ITEM_HEIGHT;
}

/**
 * 计算索引
 * @param offset
 */
function calcIndex(offset: number) {
    return Math.round((96 - offset) / ITEM_HEIGHT);
}

/**
 * Picker列
 */
function PickerCol(props: PickerColProps) {
    const { prefixCls = "weui-picker", className, style, data = [], index, value, onChange, onVisibleValue } = props;
    const [val, setVal] = useState(getAppropriateValue(value, data));

    function changeValue(v: any) {
        setVal(v);
        onChange(v, index);

        if (onVisibleValue) {
            onVisibleValue(v, index);
        }
    }

    useMount(() => {
        if (onVisibleValue) {
            onVisibleValue(getAppropriateValue(value, data), index);
        }
    });

    useEffect(() => {
        // PickerPanel主动触发更新
        setVal(getAppropriateValue(value, data));
    }, [value, data]);

    // 滚动条元素引用
    const contentRef = useRef(null);
    // 起始touch偏移
    const startOffsetRef = useRef(0);
    // 当前选中索引
    const currentIndex = data.findIndex((x) => x.value === val);
    // 开始距离
    const startTranslate = calcOffset(currentIndex);
    // 偏移距离
    const moveTranslate = useRef(0);

    function touchStart(event: React.TouchEvent<HTMLDivElement>) {
        const contentEle = contentRef.current;
        startOffsetRef.current = event.touches[0].clientY;
        contentEle.style.transition = "none";
    }

    function touchMove(event: React.TouchEvent<HTMLDivElement>) {
        const target = event.target as any;
        const contentEle = contentRef.current;
        const wrapper = event.currentTarget as HTMLElement;
        const _offset = (event.touches[0].clientY - startOffsetRef.current) * 0.8;

        target.stopScroll = true;

        moveTranslate.current = startTranslate + _offset;
        // console.log(`======move======== 当前translate3d(${startTranslate})  移动偏移(${startTranslate})  计算后偏移(${moveTranslate.current})`);
        contentEle.style.transform = `translate3d(0px, ${PxToVw(moveTranslate.current)}vw, 0px)`;
    }

    function touchEnd(event: React.TouchEvent<HTMLDivElement>) {
        const contentEle = contentRef.current;
        // 限定范围
        const offset = clamp(moveTranslate.current, calcOffset(data.length - 1), 96);
        const i = calcIndex(offset);

        startOffsetRef.current = 0;
        contentEle.style.transition = "all 0.3s ease 0s";
        if (data[i].disabled) {
            // 复原
            contentEle.style.transform = `translate3d(0px, ${PxToVw(startTranslate)}vw, 0px)`;
        } else {
            contentEle.style.transform = `translate3d(0px, ${PxToVw(calcOffset(i))}vw, 0px)`;
            if (val !== data[i].value) {
                changeValue(data[i].value);
            }
        }
    }

    useMount(() => {
        function stopFunc(e: TouchEvent) {
            const target = e.target as any;
            if (target && target.stopScroll) {
                e.preventDefault();
            }
        }
        document.addEventListener("touchmove", stopFunc, { passive: false });
        return () => document.removeEventListener("touchmove", stopFunc);
    });

    return (
        <div className={classNames(prefixCls + "__col", className)} style={style} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
            <div className={`${prefixCls}__mask`}></div>
            <div className={`${prefixCls}__indicator`}></div>
            <div className={`${prefixCls}__content`} ref={contentRef} style={{ transform: `translate3d(0px, ${PxToVw(startTranslate)}vw, 0px)` }}>
                {data.map((x, i) => (
                    <div
                        className={classNames(`${prefixCls}__item`, {
                            [`${prefixCls}__disabled`]: x.disabled,
                        })}
                        key={i}
                    >
                        {x.label}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default React.memo(PickerCol);
