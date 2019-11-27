import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import { useControll, useMount } from "utils-hooks";
import { clamp } from "../utils/number-utils";
import { PickerItem } from "./Picker";
import "./style";

// 单行选项高度
const ITEM_HEIGHT = 48;

export interface PickerGroupProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 数据
     */
    data: PickerItem[];
    /**
     * 是否级联选择
     */
    cascade?: boolean;
    /**
     * 列索引
     */
    index: number;
    /**
     * 选中值
     */
    value?: any;
    /**
     * 默认选中值
     */
    defaultValue?: any;
    /**
     * 改变选中值
     */
    onChange?: (val: any, i: number) => void;
    /**
     * 初次不主动设置值
     */
    passive?: boolean;
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

function PickerGroup(props: PickerGroupProps) {
    const { prefixCls = "weui-picker", data, index, onChange, passive } = props;
    // 中心索引
    const half = Math.floor(data.length / 2);
    const [value, setValue, isControll] = useControll(props, "value", "defaultValue", data[half].value);

    // 当前选中索引
    const currentIndex = data.findIndex((x) => x.value === value);

    // 起始touch偏移
    const startOffsetRef = useRef(0);
    // 开始偏移
    const startTranslate = calcOffset(currentIndex);
    // 移动偏移
    const moveTranslate = useRef(0);
    const contentRef = useRef(null);

    function changeValue(newVal: any) {
        if (!isControll) {
            setValue(newVal);
        }
        if (onChange) {
            onChange(newVal, index);
        }
    }

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
        contentEle.style.transform = `translate3d(0px, ${moveTranslate.current}px, 0px)`;
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
            contentEle.style.transform = `translate3d(0px, ${startTranslate}px, 0px)`;
        } else {
            contentEle.style.transform = `translate3d(0px, ${calcOffset(i)}px, 0px)`;
            changeValue(data[i].value);
        }
    }

    useEffect(() => {
        // 确保有默认值
        if (value === null && data.length > 0 && !passive) {
            changeValue(data[0].value);
        }
    }, [value]);

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
        <div className={`${prefixCls}__group`} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
            <div className={`${prefixCls}__mask`}></div>
            <div className={`${prefixCls}__indicator`}></div>
            <div className={`${prefixCls}__content`} ref={contentRef} style={{ transform: `translate3d(0px, ${startTranslate}px, 0px)` }}>
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

export default React.memo(PickerGroup);
