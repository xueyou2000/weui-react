import classNames from "classnames";
import React, { useRef } from "react";
import { useControll } from "utils-hooks";
import PickerCol from "./PickerCol";
import "./style/index.scss";
import { getPickerLabel, normalizedDate, PickerItem, PickerLabelOption, getValueByDefaul, getSaveValue } from "./utils";

export interface PickerPanelProps extends PickerLabelOption {
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
    onChange?: (value: any[], label: string) => void;
    /**
     * 列数
     */
    cols?: number;
    /**
     * 默认可视值
     */
    visibleValue?: any[];
    /**
     * 当前可视值
     */
    onVisibleValue?: (val: any, i: number) => void;
}

/**
 * Picker面板
 */
function PickerPanel(props: PickerPanelProps) {
    const { prefixCls = "weui-picker-panel", className, style, data = [], cols = 1, cascade = false, singleLabel = false, separator = "/", labelValue = false, onChange, visibleValue, onVisibleValue } = props;
    const [value, setValue, isControll] = useControll<any[]>(props, "value", "defaultValue");
    const saveVals = getSaveValue(value, cols, visibleValue);
    let _data = normalizedDate(data, saveVals, cascade);

    function changeValue(val: any[]) {
        if (!isControll) {
            setValue(val);
        }
        if (onChange) {
            onChange(val, getPickerLabel(val, data, { singleLabel, separator, labelValue, cascade }));
        }
    }

    /**
     * picker列改变
     * @param val
     * @param i
     */
    function pickerColChangeHandle(val: any, index: number) {
        if (cascade) {
            let vals: any[] = [];
            // 上级的 childer
            let children: PickerItem[] = data as PickerItem[];
            // 级联后续的 data 都会变, 所以不能根据 _data 归一化数据去获取任何东西
            for (let i = 0; i < cols; ++i) {
                if (i < index) {
                    // 之前的, 为空的默认, 存在值则不进行设置
                    vals[i] = saveVals[i] === undefined || saveVals[i] === null ? children[i].value : saveVals[i];
                } else if (i === index) {
                    vals[i] = val;
                } else {
                    // 之后的 为空的默认, 存在则不进行设置
                    vals[i] = children.some((x) => x.value === saveVals[i]) ? saveVals[i] : children[0].value;
                }
                children = children.find((x) => x.value === vals[i]).children;
            }
            changeValue(vals);
        } else {
            changeValue(saveVals.map((x, i) => (i === index ? val : getValueByDefaul(x, index, _data))));
        }
    }

    function renderPickerCols() {
        if (!data || data.length <= 0) {
            return null;
        }
        let groups = [];

        for (let i = 0; i < _data.length; ++i) {
            groups.push(<PickerCol key={i} index={i} data={_data[i]} value={saveVals[i]} onChange={pickerColChangeHandle} onVisibleValue={onVisibleValue} />);
        }

        return groups;
    }

    return (
        <div className={classNames(prefixCls, className)} style={style}>
            {renderPickerCols()}
        </div>
    );
}

export default React.memo(PickerPanel);
