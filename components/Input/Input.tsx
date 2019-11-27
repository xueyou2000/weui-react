import classNames from "classnames";
import React from "react";
import { useControll } from "utils-hooks";
import "./style";

export interface InputProps {
    /**
     * 输入框类型
     */
    type?: "text" | "password" | "number";
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
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 值
     */
    value?: string;
    /**
     * 默认值
     */
    defaultValue?: string;
    /**
     * 占位符文本
     */
    placeholder?: string;
    /**
     * 自动焦点
     */
    autoFocus?: boolean;
    /**
     * tabIndex
     */
    tabIndex?: number;
    /**
     * 输入框焦点事件
     */
    onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * 输入框失去焦点事件
     */
    onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * 键盘事件
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    /**
     * 输入框change事件
     */
    onChange?: (value: string) => void;
    /**
     * 开始输入中文
     */
    onCompositionStart?: (e: React.CompositionEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * 输入中文完毕
     */
    onCompositionEnd?: (e: React.CompositionEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * 正则
     */
    pattern?: string;
    /**
     * 最大长度
     */
    maxLength?: number;
}

const Input = React.forwardRef((props: InputProps, ref: React.MutableRefObject<any>) => {
    const { prefixCls = "weui-input", className, style, type = "text", defaultValue, onBlur, onChange, ...genericProps } = props;
    const classString = classNames(prefixCls, className);
    const [value, setValue, isControll] = useControll(props, "value", "defaultValue");

    function changeValue(val: string) {
        if (props.disabled) {
            return;
        }

        if (!isControll) {
            setValue(val);
        }

        if (onChange) {
            onChange(val);
        }
    }

    function changeHandle(event: React.ChangeEvent<HTMLInputElement>) {
        changeValue(event.target.value);
    }

    function blurHandle(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
        if (onBlur) {
            onBlur(e);
        }

        // Tips: 防止ios键盘底部位置空出
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    genericProps["style"] = style;
    genericProps["ref"] = ref;
    return <input {...genericProps} type={type} {...(isControll ? { value: value || "" } : { defaultValue: value })} aria-disabled={props.disabled} className={classString} onChange={changeHandle} onBlur={blurHandle} />;
});

export default React.memo(Input);
