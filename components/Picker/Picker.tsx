import React, { useRef } from "react";
import { useControll } from "utils-hooks";
import Button from "../Button";
import { HalfScreenDialog } from "../HalfScreenDialog";
import { HalfScreenDialogProps } from "../HalfScreenDialog/HalfScreenDialog";
import { fillingArray } from "../utils/array-utils";
import { isArray } from "../utils/object-utils";
import PickerGroup from "./PickerGroup";
import "./style";

export interface PickerItem {
    /**
     * 显示文本
     */
    label: string;
    /**
     * 选中值
     */
    value: any;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 子集
     */
    children?: PickerItem[];
}

export interface PickerProps extends HalfScreenDialogProps {
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
    data?: PickerItem[] | PickerItem[][];
    /**
     * 选中值
     */
    value?: any[];
    /**
     * 默认选中值
     */
    defaultValue?: any[];
    /**
     * 改变值
     */
    onChange?: (value: any[]) => void;
    /**
     * 列数
     */
    cols?: number;
    /**
     * 是否级联选择
     */
    cascade?: boolean;
    /**
     * 确定按钮点击
     */
    onConfirm?: (value: any[]) => void;
}

function getValByArray(i: number, array: any[]) {
    if (i < array.length) {
        return array[i];
    } else {
        return null;
    }
}

function Picker(props: PickerProps) {
    const { prefixCls = "weui-picker", className, style, data, value, defaultValue, onChange, cols = 1, cascade = false, onConfirm, ...rest } = props;
    const [val, setVal, isControll] = useControll<any[]>(props, "value", "defaultValue", fillingArray(cols, null));
    // 解决受控模式下,外部传入空导致异常
    const saveVal = val || fillingArray(cols, null);
    const lastVal = useRef(saveVal);

    function changeValue(newVal: any[]) {
        if (!isControll) {
            setVal(newVal);
        }
        if (onChange) {
            onChange(newVal);
        }
    }

    function changeColValue(colVal: any, index: number) {
        if (cascade) {
            // 级联时，当前列改变了，后面的值都需要清空
            lastVal.current = lastVal.current.map((x, i) => {
                if (i < index) {
                    return x;
                } else if (i === index) {
                    return colVal;
                } else {
                    return null;
                }
            });
            changeValue(lastVal.current);
        } else {
            lastVal.current[index] = colVal;
            changeValue(saveVal.map((x, i) => (i === index ? colVal : x)));
        }
    }

    function confirmHandle(i: number) {
        if (onConfirm) {
            onConfirm(lastVal.current);
        }
        return Promise.resolve();
    }

    function createPickerGroups() {
        if (!data) {
            return null;
        }

        let groups = [];
        // 多列模式
        const multiMode = data.length > 0 && isArray(data[0]);
        // 归一化数据源， 将 多列数据, 单列数据 统一成  PickerItem[][] 多列格式
        let _data = multiMode ? (data as PickerItem[][]) : ([data] as PickerItem[][]);
        if (cascade) {
            // 根据当前所选值，创建级联数据
            _data = createCascadeData(data as PickerItem[], saveVal);
        }
        for (let i = 0; i < _data.length; ++i) {
            groups.push(<PickerGroup key={i} cascade={cascade} data={_data[i]} index={i} value={getValByArray(i, saveVal)} onChange={changeColValue} passive={!!defaultValue} />);
        }

        return groups;
    }

    return (
        <HalfScreenDialog {...rest} footer={[<Button>确定</Button>]} onClick={confirmHandle}>
            <div className={`${prefixCls}__bd`}>{createPickerGroups()}</div>
        </HalfScreenDialog>
    );
}

export default React.memo(Picker);

/**
 * 创建级联数据
 * @param data
 * @param vals
 */
export function createCascadeData(data: PickerItem[], vals: any[]) {
    // vals [2, null, null]
    const cascadeData: PickerItem[][] = [data];

    for (let i = 1; i < vals.length; ++i) {
        const v = vals[i - 1];
        if (v !== null) {
            const prev: PickerItem = cascadeData[i - 1].find((x) => x.value === v);
            if (prev && prev.children && prev.children.length > 0) {
                cascadeData.push(prev.children);
            }
        } else {
            // 使用默认第一个作为默认
            const prev: PickerItem = cascadeData[i - 1][0];
            if (prev && prev.children && prev.children.length > 0) {
                cascadeData.push(prev.children);
            }
        }
    }
    return cascadeData;
}
