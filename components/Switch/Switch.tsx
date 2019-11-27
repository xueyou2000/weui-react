import classNames from "classnames";
import React from "react";
import { useControll } from "utils-hooks";
import "./style";

export interface SwitchProps {
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
     * ID
     */
    id?: string;
    /**
     * 同原生input 一样的name
     */
    name?: string;
    /**
     * tabIndex
     */
    tabIndex?: number;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 是否选中
     */
    value?: boolean;
    /**
     * 默认是否选中
     */
    defaultValue?: boolean;
    /**
     * Switch值更改事件
     */
    onChange?: (chcked: boolean) => void;
}

const Switch = React.forwardRef((props: SwitchProps, ref: React.MutableRefObject<any>) => {
    const { prefixCls = "weui-switch", className, style, id, disabled, name, tabIndex, onChange } = props;
    const [value, setValue, isControll] = useControll(props, "value", "defaultValue");

    function changeValue(checked: boolean) {
        if (props.disabled) {
            return;
        }

        if (!isControll) {
            setValue(checked);
        }

        if (onChange) {
            onChange(checked);
        }
    }

    const inputProps = {};
    if (isControll) {
        inputProps["checked"] = value || false;
    } else {
        inputProps["defaultChecked"] = props.defaultValue;
    }

    function handleCheckChange(e: React.ChangeEvent<HTMLInputElement>) {
        changeValue(e.target.checked);
    }

    return <input {...inputProps} className={classNames(prefixCls, className)} ref={ref} id={id} style={style} disabled={disabled} name={name} tabIndex={tabIndex} onChange={handleCheckChange} type="checkbox" />;
});

export default React.memo(Switch);
