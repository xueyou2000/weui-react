import React, { useEffect, useState } from "react";
import { GetDrawerContainerFuc, useControll, usePortal } from "utils-hooks";
import { fillingArray } from "../utils/array-utils";
import { isArray } from "../utils/object-utils";
import Picker, { createCascadeData, PickerItem, PickerProps } from "./Picker";
import "./style/index.scss";

export interface PickerPanelProps extends PickerProps {
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
    /**
     * 渲染的Picker组件
     */
    PickerComponent?: (props: PickerProps) => JSX.Element;
    /**
     * 返回一个容器来装载抽屉
     * @description 默认为body内创建一个div作为容器
     */
    getContainer?: HTMLElement | GetDrawerContainerFuc;
    /**
     * 是否不使用点击时间
     */
    disabledClick?: boolean;
}

export function getPickerLabel(pickerValues: any[], data: PickerItem[] | PickerItem[][], cascade = false, separator = "/") {
    const pickerItems = [];

    // 多列模式
    const multiMode = data.length > 0 && isArray(data[0]);
    // 归一化数据源， 将 多列数据, 单列数据 统一成  PickerItem[][] 多列格式
    let _data = multiMode ? (data as PickerItem[][]) : ([data] as PickerItem[][]);
    if (cascade) {
        // 根据当前所选值，创建级联数据
        _data = createCascadeData(data as PickerItem[], pickerValues);
    }

    for (let i = 0; i < _data.length; ++i) {
        const item = _data[i].find((x) => x.value === pickerValues[i]);
        pickerItems.push(item || null);
    }

    return pickerItems.reduce((prev, current) => {
        const colLabel = current ? current.label : "";
        return prev ? `${prev}${separator}${colLabel}` : colLabel;
    }, "");
}

const PickerPanel = React.forwardRef((props: PickerPanelProps, ref: React.MutableRefObject<any>) => {
    const { placeholder = "请选择", onChange, singleLabel, separator = "/", getContainer, PickerComponent = Picker, disabledClick, ...rest } = props;
    const [vals, setVals] = useState(fillingArray(props.cols, null));
    const [visible, setVisible, isVisibleControll] = useControll(props, "visible", "defaultVisible");
    const [renderPortal] = usePortal("", getContainer);

    function changeVisible(show: boolean) {
        if (!isVisibleControll) {
            setVisible(show);
        }
        if (props.onVisibleChange) {
            props.onVisibleChange;
            show;
        }
    }

    function showHandle() {
        if (!disabledClick) {
            changeVisible(true);
        }
    }

    function changeHandle(value: any[]) {
        if (onChange) {
            onChange(value);
        }
        setVals(value);
    }

    function _getPickerLabel() {
        const { data, cascade } = props;
        if (!data) {
            return null;
        }
        return getPickerLabel(vals, data, cascade, separator);
    }

    useEffect(() => {
        if (props.value) {
            setVals(props.value);
        }
    }, [props.value]);

    return (
        <div className="picker-panel">
            <p ref={ref} onClick={showHandle}>
                {!vals || vals[0] === null ? <span className="placeholder">{placeholder}</span> : _getPickerLabel()}
            </p>
            {renderPortal(<PickerComponent {...rest} visible={visible} onVisibleChange={changeVisible} onChange={changeHandle} />)}
        </div>
    );
});

export default React.memo(PickerPanel);
