import { isArray } from "../utils/object-utils";
import { fillingArray } from "../utils/array-utils";

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

export interface PickerLabelOption {
    /**
     * 是否只显示最终一级的label
     */
    singleLabel?: boolean;
    /**
     * label分隔符
     * 比如日期: 2019-10-08
     * 比如类别: 食品/熟食
     */
    separator?: string;
    /**
     * label取值方式
     * label取label还是value, 默认label, 比如 2019年 是列的label, 但是太长, 想取2019这个value, 也是可以的
     */
    labelValue?: boolean;
    /**
     * 是否级联选择
     */
    cascade?: boolean;
}

function getLabel(val: PickerItem, labelValue: boolean) {
    if (!val) {
        return null;
    }
    return labelValue ? val.value : val.label;
}

/**
 * 获取安全值
 * @description 确保值是有列数相同的数组
 * @param val 值
 * @param cols 列数
 * @param visibleValue 默认可视值
 */
export function getSaveValue(val: any[], cols: number, visibleValue?: any[]) {
    if (!val || val.length === 0) {
        return visibleValue || fillingArray(cols, null);
    } else if (val.length < cols) {
        // 补全val的长度到cols
        for (let i = 0; i < cols; ++i) {
            if (val[i] === undefined || val[i] === null) {
                val[i] = visibleValue && visibleValue.length > i ? visibleValue[i] : null;
            }
        }
        return val;
    } else {
        return val;
    }
}

/**
 * 获取Picker文本
 * @param vals 选择值
 * @param data 数据源
 */
export function getPickerLabel(vals: any[], data: PickerItem[] | PickerItem[][], option?: PickerLabelOption) {
    const { singleLabel = false, separator = "/", labelValue = false, cascade = false } = option || {};
    // 选中item列表
    const pickerItems = [];
    if (!data || !vals) {
        return null;
    }

    let _data = normalizedDate(data, vals, cascade);
    for (let i = 0; i < _data.length; ++i) {
        const item = _data[i].find((x) => x.value === vals[i]);
        pickerItems.push(item || null);

        if (singleLabel && i === _data.length - 1) {
            return getLabel(item, labelValue);
        }
    }

    return pickerItems.reduce((prev, current) => {
        const colLabel = current ? current.label : "";
        return prev ? `${prev}${colLabel ? separator + colLabel : ""}` : colLabel;
    }, "");
}

/**
 * 创建级联数据
 * @param data
 * @param vals
 */
export function createCascadeData(data: PickerItem[], vals: any[]) {
    // vals [100, 102]
    const cascadeData: PickerItem[][] = [data];
    if (!vals) {
        return [];
    }

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

/**
 * 归一化数据源为 PickerItem[][] 多列格式
 * @param data 数据源
 */
export function normalizedDate(data: PickerItem[] | PickerItem[][], vals: any[], cascade: boolean) {
    // 多列模式
    const multiMode = data.length > 0 && isArray(data[0]);
    // 归一化数据源， 将 多列数据, 单列数据 统一成  PickerItem[][] 多列格式
    let _data = multiMode ? (data as PickerItem[][]) : ([data] as PickerItem[][]);
    if (cascade) {
        // 根据当前所选值，创建级联数据
        _data = createCascadeData(data as PickerItem[], vals);
    }
    return _data;
}

export function getValueByDefaul(val: any, index: number, data: PickerItem[][]) {
    if (val === undefined || val === null) {
        return data[index][0].value;
    } else {
        return getAppropriateValue(val, data[index]);
    }
}

/**
 * 获取合适值
 * value存在与数据源, 则使用value, 否则使用数据源第一个
 * @param value
 * @param data
 */
export function getAppropriateValue(value: any, data?: PickerItem[]) {
    if (!data || data.length <= 0) {
        return null;
    }
    // 存在则取value, 否则默认取第一个
    return data.some((x) => x.value === value) ? value : data[0].value;
}
