import classNames from "classnames";
import React, { useState } from "react";
import FormItem, { FormItemProps } from "../Form/FormItem";
import PickerPanel, { PickerPanelProps } from "./PickerPanel";

function PickerListItem(props: PickerPanelProps & FormItemProps) {
    const {
        className,
        placeholder,
        singleLabel,
        separator,
        PickerComponent,
        getContainer,
        data,
        value,
        defaultValue,
        onChange,
        cols,
        title,
        cascade,
        onConfirm,
        subTitle,
        maskClose,
        onClick,
        more,
        onMoreClick,
        visible,
        defaultVisible,
        onVisibleChange,
        ...rest
    } = props;
    const [_visible, setVisible] = useState(false);

    return (
        <FormItem className={classNames("picker-item", className)} arrow={true} onClick={() => setVisible(true)} {...rest}>
            <PickerPanel
                cols={cols}
                placeholder={placeholder}
                title={title}
                data={data}
                singleLabel={singleLabel}
                separator={separator}
                PickerComponent={PickerComponent}
                getContainer={getContainer}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                cascade={cascade}
                onConfirm={onConfirm}
                subTitle={subTitle}
                maskClose={maskClose}
                onClick={onClick}
                more={more}
                onMoreClick={onMoreClick}
                visible={_visible}
                onVisibleChange={setVisible}
                disabledClick={true}
            />
        </FormItem>
    );
}

export default React.memo(PickerListItem);
