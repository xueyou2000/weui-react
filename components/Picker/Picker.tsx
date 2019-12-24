import classNames from "classnames";
import React, { useState } from "react";
import { DefineDefaultValue, GetDrawerContainerFuc, useControll } from "utils-hooks";
import Button from "../Button";
import { HalfScreenDialog } from "../HalfScreenDialog";
import { HalfScreenDialogProps } from "../HalfScreenDialog/HalfScreenDialog";
import { getLocal } from "../Local";
import PickerPanel, { PickerPanelProps } from "./PickerPanel";
import "./style/index.scss";
import { getPickerLabel, getSaveValue, getValueByDefaul, normalizedDate } from "./utils";

export interface PickerProps extends HalfScreenDialogProps, PickerPanelProps {
    /**
     * 确定按钮点击
     */
    onConfirm?: (value: any[], label: string) => void;
    /**
     * 右侧图片
     */
    addon?: React.ReactNode;
    /**
     * 占位符
     */
    placeholder?: string;
    /**
     * 渲染的Picker组件
     */
    PickerComponent?: (props: PickerPanelProps) => JSX.Element;
    /**
     * 返回一个容器来装载抽屉
     * @description 默认为body内创建一个div作为容器
     */
    getContainer?: HTMLElement | GetDrawerContainerFuc;
}

const Picker = React.forwardRef((props: PickerProps, ref: React.MutableRefObject<any>) => {
    const {
        prefixCls = "weui-picker",
        className,
        style,
        onConfirm,
        addon,
        data,
        value,
        defaultValue,
        onChange,
        cols,
        singleLabel,
        separator,
        labelValue,
        cascade,
        visibleValue,
        onVisibleValue,
        placeholder = getLocal().Picker.placeholder,
        PickerComponent = PickerPanel,
        getContainer,
        ...halfScreenProps
    } = props;
    const pickerProps: PickerPanelProps = { data, cols, singleLabel, separator, labelValue, cascade, visibleValue, onVisibleValue };
    if ("value" in props) {
        pickerProps.value = value;
    } else {
        pickerProps.defaultValue = defaultValue;
    }

    const [visible, setVisible, isVisibleControll] = useControll(props, "visible", "defaultVisible");
    const [label, setLabel] = useState<string>(getPickerLabel(DefineDefaultValue(props, "value", "defaultValue"), data, { singleLabel, separator, labelValue, cascade }) || placeholder);

    function changeVisible(show: boolean) {
        if (!isVisibleControll) {
            setVisible(show);
        }
        if (props.onVisibleChange) {
            props.onVisibleChange(show);
        }
    }

    function changeHandle(vals: any[], label: string) {
        setLabel(label);
        if (onChange) {
            onChange(vals, label);
        }
    }

    function confirmHandle() {
        // 如果将空值, 取默认值.(视觉上选中的值)
        const saveVals = getSaveValue(DefineDefaultValue(props, "value", "defaultValue"), cols, visibleValue);
        let _data = normalizedDate(data, saveVals, cascade);
        let pickerVals: any[] = [];
        if (cascade) {
            pickerVals = _data.map((x, i) => (saveVals[i] === undefined || saveVals[i] === null ? x[0].value : saveVals[i]));
        } else {
            pickerVals = saveVals.map((x, i) => getValueByDefaul(x, i, _data));
        }
        const _label: string = getPickerLabel(pickerVals, data, { singleLabel, separator, labelValue, cascade });
        setLabel(_label);
        if (onConfirm) {
            onConfirm(pickerVals, _label);
        }
        if (onChange) {
            onChange(pickerVals, _label);
        }
        return Promise.resolve();
    }

    return (
        <div className={classNames(prefixCls, className)} style={style}>
            <div ref={ref} onClick={() => changeVisible(true)}>
                {label}
                {addon}
            </div>
            <HalfScreenDialog {...halfScreenProps} visible={visible} onVisibleChange={changeVisible} footer={[<Button>{getLocal().commom.confirm}</Button>]} onClick={confirmHandle}>
                <PickerComponent {...pickerProps} onChange={changeHandle} />
            </HalfScreenDialog>
        </div>
    );
});

export default React.memo(Picker);
