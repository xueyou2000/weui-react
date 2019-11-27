import classNames from "classnames";
import React, { useContext } from "react";
import { FormContext, FormItemField } from "xy-form";
import { FormItemFieldProps } from "xy-form/es/interface";
import { ListItem } from "../List";
import { ListItemProps } from "../List/ListItem";
import "./style";
import { SwitchProps } from "./Switch";

export type SwitchItemProps = SwitchProps & ListItemProps & FormItemFieldProps;

function SwitchBox(props: SwitchItemProps) {
    const { footer, arrow, className, disabled, children, head, prop, valueKey, converValue, label, trigger, defaultValue, normalize, serialization, disabledValidate, onValidate, ...rest } = props;
    const content = useContext(FormContext);

    if ("disabled" in props) {
        (rest as any).disabled = disabled;
    }

    return (
        <ListItem
            className={classNames(className, "checkbox-item")}
            footer={
                <FormItemField
                    prop={prop}
                    converValue={converValue}
                    label={label}
                    trigger={trigger}
                    defaultValue={defaultValue}
                    normalize={normalize}
                    serialization={serialization}
                    disabledValidate={disabledValidate}
                    onValidate={onValidate}
                >
                    {children}
                </FormItemField>
            }
            arrow={arrow}
        >
            {label}
        </ListItem>
    );
}

export default React.memo(SwitchBox);
