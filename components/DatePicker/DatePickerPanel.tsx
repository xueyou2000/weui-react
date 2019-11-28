import React, { useRef, useState } from "react";
import { PickerPanel } from "../Picker";
import { PickerPanelProps, getPickerLabel } from "../Picker/PickerPanel";
import DatePicker, { DatePickerProps, today, todayValue, createCascadeDates } from "./DatePicker";
import { Picker } from "../Picker";
import { useControll, DefineDefaultValue } from "utils-hooks";

export interface DatePickerPanelProps {
    /**
     * 占位符
     */
    placeholder?: string;
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
}

const DatePickerPanel = React.forwardRef((props: DatePickerProps & DatePickerPanelProps, ref: React.MutableRefObject<any>) => {
    const { separator = "-", placeholder = "请选择日期", singleLabel = false, start = today.getFullYear() - 20, end = today.getFullYear() + 30, defaultValue = props.defaultValue || todayValue, ...rest } = props;
    const defaultData = createCascadeDates(start, end);
    const [visible, setVisible, isControll] = useControll(props, "visible", "defaultVisible");
    const [value, setValue] = useState<number[]>(props.value || defaultValue);

    function changeVisible(show: boolean) {
        if (!isControll) {
            setVisible(show);
        }
        if (props.onVisibleChange) {
            props.onVisibleChange(show);
        }
    }

    function changeValue(v: number[]) {
        console.log("change", v);
        setValue(v);
        // if (props.onChange) {
        //     props.onChange(v);
        // }
    }

    function _getPickerLabel() {
        return getPickerLabel(value, defaultData, true, separator);
    }

    return (
        <div className="date-picker-panel">
            <p ref={ref} onClick={() => changeVisible(true)}>
                {!value || value.length === 0 || value[0] === null ? <span className="placeholder">{placeholder}</span> : _getPickerLabel()}
            </p>
            <DatePicker {...rest} start={start} end={end} defaultValue={defaultValue} visible={visible} onVisibleChange={changeVisible} onConfirm={changeValue} />
        </div>
    );
});

export default React.memo(DatePickerPanel);
