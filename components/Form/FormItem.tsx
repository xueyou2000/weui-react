import classNames from "classnames";
import React, { useContext, useRef, useState } from "react";
import { FormContext, FormItemContext, FormItemField } from "xy-form";
import { FormItemFailResult, FormItemFieldProps } from "xy-form/es/interface";
import { ValidateResult } from "xy-form/es/ValidateUtils/ValidateInterface";
import { ListItem } from "../List";
import "./style";

export interface FormItemProps<T = any, NormalizeResult = any> extends Pick<Partial<FormItemFieldProps<T, NormalizeResult>>, Exclude<keyof Partial<FormItemFieldProps<T, NormalizeResult>>, "label">> {
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
     * 标签名称
     */
    label?: React.ReactNode;
    /**
     * 是否必填
     */
    required?: boolean;
    /**
     * 页脚内容
     */
    footer?: React.ReactNode;
    /**
     * 是否显示箭头
     */
    arrow?: boolean;
    /**
     * 点击事件
     */
    onClick?: () => void;
    /**
     * 内容
     */
    children?: React.ReactNode;
    /**
     * 禁用
     */
    disabled?: boolean;
    /**
     * 头部
     */
    head?: React.ReactNode;
}

function FormItem(props: FormItemProps) {
    const { prefixCls = "form-item", className, style, label, required, footer, arrow, onClick, children, head, disabled, ...rest } = props;
    const [failValidateResult, setFailValidateResult] = useState<FormItemFailResult[]>([]);
    const content = useContext(FormContext);
    const _disabled = content.disabled || props.disabled;
    // Tips: 通过ref来确保failValidateResult是最新的值, validateChangeHandle函数中failValidateResult总是第一次初始化的值!
    const lastFailValidateRef = useRef<FormItemFailResult[]>(failValidateResult);
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}-required`]: required,
        [`${prefixCls}-error`]: lastFailValidateRef.current.length > 0,
        "weui-cell_disabled": _disabled,
    });
    const [labelStr, setLabel] = useState(typeof props.label === "string" ? props.label : null);
    function labelMount(labelElement: HTMLElement) {
        if (!labelStr && labelElement) {
            setLabel(labelElement.textContent || labelElement.innerText);
        }
    }

    function validateChangeHandle(prop: string, validateResult: ValidateResult) {
        const lastFailValida = lastFailValidateRef.current;
        const i = lastFailValida.findIndex((x) => x.prop === prop);
        if (validateResult.status) {
            if (i !== -1) {
                // 清除上一次验证失败
                lastFailValidateRef.current = lastFailValida.filter((x) => x.prop !== prop);
                setFailValidateResult(lastFailValidateRef.current);
            }
        } else {
            if (i !== -1) {
                lastFailValida[i].msg = validateResult.msg;
                setFailValidateResult([...lastFailValida]);
            } else {
                lastFailValidateRef.current = [...lastFailValida, { prop, ...validateResult }];
                setFailValidateResult(lastFailValidateRef.current);
            }
        }
    }

    return (
        <ListItem
            className={classString}
            style={style}
            arrow={arrow}
            footer={footer}
            onClick={onClick}
            head={
                head || (
                    <label className="weui-label" ref={labelMount}>
                        {label}
                    </label>
                )
            }
        >
            <FormItemContext.Provider value={{ onValidateChange: validateChangeHandle, label: labelStr }}>{"prop" in props ? <FormItemField {...(rest as any)}>{children}</FormItemField> : children}</FormItemContext.Provider>
        </ListItem>
    );
}

export default React.memo(FormItem);
