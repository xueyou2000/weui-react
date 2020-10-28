import classNames from "classnames";
import React, { useContext, useRef, useState } from "react";
import { useMount } from "utils-hooks";
import { FormContext } from "xy-form";
import { FormItem } from "../Form";
import { FormItemProps } from "../Form/FormItem";
import Icon from "../Icon";
import Input, { InputProps } from "./Input";
import "./style/index.scss";

function NumberNormalize(val: string) {
    if (val) {
        return parseFloat(val);
    } else {
        return null;
    }
}

export type InputItemProps = FormItemProps &
    InputProps & {
        /**
         * 是否显示清除
         */
        clearable?: boolean;
        /**
         * 是否当number类型时候转换
         */
        converNumber?: boolean;
    };

function InputItem(props: InputItemProps) {
    const content = useContext(FormContext);
    const formMethods = content && content.formMethods;
    const {
        type,
        prefixCls,
        className,
        style,
        id,
        name,
        value,
        defaultValue,
        placeholder,
        autoFocus,
        tabIndex,
        onFocus,
        onBlur,
        onKeyDown,
        onChange,
        onCompositionStart,
        onCompositionEnd,
        pattern,
        maxLength,
        clearable = false,
        converNumber = false,
        ...rest
    } = props;
    const [visible, setVisible] = useState(false);
    const timeHandler = useRef(null);

    const inputProps: any = {
        type,
        prefixCls,
        style,
        id,
        name,
        value,
        defaultValue,
        placeholder,
        autoFocus,
        tabIndex,
        onFocus: focusHandle,
        onBlur: blurHandle,
        onKeyDown,
        onChange: changeHandle,
        onCompositionStart,
        onCompositionEnd,
        pattern,
        maxLength,
    };
    if ("disabled" in props) {
        inputProps.disabled = props.disabled;
    }
    if (converNumber && props.type === "number" && !props.normalize) {
        rest.normalize = NumberNormalize;
    }

    function changeHandle(val: string) {
        if (val) {
            if (!visible) {
                setVisible(true);
            }
        } else {
            if (visible) {
                setVisible(false);
            }
        }

        if (onChange) {
            onChange(val);
        }
    }

    function focusHandle(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
        window.clearTimeout(timeHandler.current);
        if (onFocus) {
            onFocus(e);
        }
        if (formMethods && props.prop) {
            if (formMethods.getFieldValue(props.prop) && !visible) {
                setVisible(true);
            }
        }
    }

    function blurHandle(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
        if (onBlur) {
            onBlur(e);
        }

        // blur 太快将 cleanIcon 隐藏，则 cleanIcon的onClick清除事件会无效
        timeHandler.current = setTimeout(() => {
            if (visible) {
                setVisible(false);
            }
        }, 50);

        // Tips: 防止ios键盘底部位置空出
        // document.body.scrollTop = 0;
        // document.documentElement.scrollTop = 0;
    }

    function clean() {
        if (formMethods && props.prop) {
            // Tips: 外部必须设置 prop 全路径
            formMethods.setFieldValue(props.prop, "");
        }
    }

    const cleanIcon = (
        <a className={classNames("weui-btn_reset weui-btn_icon weui-btn_input-clear", { visible: visible && clearable })} onClick={clean}>
            <Icon icon="clear" />
        </a>
    );

    useMount(() => {
        window.clearTimeout(timeHandler.current);
    });

    return (
        <FormItem {...rest} className={classNames(className, "input-item")} footer={rest.footer || cleanIcon}>
            <Input {...inputProps} />
        </FormItem>
    );
}

export default React.memo(InputItem);
