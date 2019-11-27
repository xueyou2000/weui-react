import classNames from "classnames";
import React from "react";
import { useControll } from "utils-hooks";
import Icon from "../Icon";
import "./style";

export interface CheckboxProps {
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
     * 同原生input checkbox一样的name
     */
    name?: string;
    /**
     * tabIndex
     */
    tabIndex?: number;
    /**
     * 复选框是否选中
     */
    checked?: boolean;
    /**
     * 默认是否选中
     */
    defaultChecked?: boolean;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 同原生input checkbox一样的value
     */
    value?: any;
    /**
     * 是否只读
     */
    readOnly?: boolean;
    /**
     * Checkbox值更改事件
     */
    onChange?: (chcked: boolean, value: any) => void;
    /**
     * Checkbox聚集焦点事件
     */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Checkbox失去焦点事件
     */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Checkbox点击事件
     */
    onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    /**
     * 内容
     */
    children?: React.ReactNode;
    /**
     * 是否独立使用
     */
    stand?: boolean;
}

const Checkbox = React.forwardRef((props: CheckboxProps, ref: React.MutableRefObject<any>) => {
    const { prefixCls = "weui-check", className, style, defaultChecked, children, stand = false, ...rest } = props;
    const [checked, setChecked, isControll] = useControll(props, "checked", "defaultChecked", false);
    const classString = classNames(prefixCls, {
        [`${prefixCls}-checked`]: checked,
        [`${prefixCls}-disabled`]: props.disabled,
    });

    function changeChecked(check: boolean) {
        if (props.disabled) {
            return;
        }
        if (!isControll) {
            // 非受控组件将当前checked作为唯一数据源
            setChecked(check);
        }
        if (props.onChange) {
            props.onChange(check, props.value);
        }
    }

    function handleCheckChange(e: React.ChangeEvent<HTMLInputElement>) {
        changeChecked(e.target.checked);
    }

    function toggle() {
        if (!("checked" in props) || stand) {
            changeChecked(!checked);
        }
    }

    return (
        <span className={classNames("checkbox-wrap", className)}>
            <input {...rest} value={rest.value || ""} {...(isControll ? { checked } : { defaultChecked: checked })} type="checkbox" aria-disabled={props.disabled} className={classString} onChange={handleCheckChange} ref={ref} />
            <Icon icon="checked" onClick={toggle} />
            {children && React.cloneElement(children as any, { onClick: toggle })}
        </span>
    );
});

export default React.memo(Checkbox);
