import classNames from "classnames";
import React, { useState, useRef } from "react";
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
     * 是否禁用
     */
    disabled?: boolean;
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
        disabled,
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

    const lastPickerVals = useRef<any[]>(null);
    const lastPickerLabel = useRef<string>(null);
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
        lastPickerVals.current = vals;
        lastPickerLabel.current = label;
        setLabel(label);
        if (onChange) {
            onChange(vals, label);
        }
    }

    function showHandle() {
        if (!disabled) {
            changeVisible(true);
        }
    }

    function confirmHandle() {
        let pickerVals: any[];
        let label: string;

        if (lastPickerVals.current) {
            pickerVals = lastPickerVals.current;
            label = lastPickerLabel.current;
        } else {
            // 如果将空值, 取默认值.(视觉上选中的值)
            const saveVals = getSaveValue(DefineDefaultValue(props, "value", "defaultValue"), cols, visibleValue);
            let _data = normalizedDate(data, saveVals, cascade);

            if (cascade) {
                pickerVals = _data.map((x, i) => (saveVals[i] === undefined || saveVals[i] === null ? x[0].value : saveVals[i]));
            } else {
                pickerVals = saveVals.map((x, i) => getValueByDefaul(x, i, _data));
            }
            label = getPickerLabel(pickerVals, data, { singleLabel, separator, labelValue, cascade });
        }

        setLabel(label);
        if (onConfirm) {
            onConfirm(pickerVals, label);
        }
        if (onChange) {
            onChange(pickerVals, label);
        }
        return Promise.resolve();
    }

    return (
        <div className={classNames(prefixCls, className, { [`${prefixCls}__disabled`]: disabled })} style={style}>
            <div ref={ref} onClick={showHandle}>
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
