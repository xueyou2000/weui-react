import classNames from "classnames";
import React from "react";
import { Form, ValidateTrigger } from "xy-form";
import { FormProps } from "xy-form/es/interface";
import "./style";
import { formValidateFailHandle } from "./utils";

export interface WeFormProps extends FormProps {
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
     * 标题
     */
    title?: React.ReactNode;
    /**
     * 描述
     */
    desc?: React.ReactNode;
    /**
     * 扩展页脚
     */
    extra?: React.ReactNode;
    /**
     * 内容
     */
    children?: React.ReactNode;
    /**
     * 操作
     */
    opr?: React.ReactNode;
    /**
     * tips
     */
    tips?: React.ReactNode;
}

function WeForm(props: WeFormProps) {
    const { prefixCls = "weui-form", className, style, title, desc, extra, opr, tips, trigger = ValidateTrigger.blur, children, ...rest } = props;

    return (
        <div className={classNames(prefixCls, className)} style={style}>
            <Form {...rest} trigger={trigger} onValidateFail={formValidateFailHandle}>
                <div className={`${prefixCls}__text-area`}>
                    <h2 className={`${prefixCls}__title`}>{title}</h2>
                    <div className={`${prefixCls}__desc`}>{desc}</div>
                </div>
                <div className={`${prefixCls}__control-area`}>{children}</div>
                {tips && <div className={`${prefixCls}__tips-area`}>{tips}</div>}
                {opr && <div className={`${prefixCls}__opr-area`}>{opr}</div>}
                {extra && <div className={`${prefixCls}__extra-area`}>{extra}</div>}
            </Form>
        </div>
    );
}

export default React.memo(WeForm);
