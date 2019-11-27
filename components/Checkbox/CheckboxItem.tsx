import classNames from "classnames";
import React, { useContext } from "react";
import { FormContext, FormItemField } from "xy-form";
import { FormItemFieldProps } from "xy-form/es/interface";
import { ListItem } from "../List";
import { ListItemProps } from "../List/ListItem";
import Checkbox, { CheckboxProps } from "./Checkbox";
import "./style";

export type CheckboxItemProps = CheckboxProps & ListItemProps & FormItemFieldProps;

function CheckboxItem(props: CheckboxItemProps) {
    const { footer, arrow, className, disabled, children, head, prop, valueKey, converValue, label, trigger, defaultValue, normalize, serialization, disabledValidate, onValidate, ...rest } = props;
    const content = useContext(FormContext);

    if ("disabled" in props) {
        (rest as any).disabled = disabled;
    }

    return (
        <label className={classNames("weui-check__label", { "weui-cell_disabled": disabled || content.disabled })} htmlFor={props.id}>
            <ListItem
                className={classNames(className, "checkbox-item")}
                footer={footer}
                arrow={arrow}
                head={
                    <FormItemField
                        prop={prop}
                        valueKey="checked"
                        converValue={converValue}
                        label={label}
                        trigger={trigger}
                        defaultValue={defaultValue}
                        normalize={normalize}
                        serialization={serialization}
                        disabledValidate={disabledValidate}
                        onValidate={onValidate}
                    >
                        <Checkbox {...rest} />
                    </FormItemField>
                }
            >
                {children}
            </ListItem>
        </label>
    );
}

export default React.memo(CheckboxItem);
