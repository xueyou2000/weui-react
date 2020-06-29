import React from "react";
import ReactDOM from "react-dom";
import DatePicker, { DatePickerProps } from "./DatePicker";

export function PopupDatePicker(props: DatePickerProps) {
    const div = document.createElement("div");
    document.body.appendChild(div);

    ReactDOM.render(
        <DatePicker
            {...props}
            defaultVisible={true}
            getContainer={div}
            onUnmount={() => {
                ReactDOM.unmountComponentAtNode(div);
                div.parentNode.removeChild(div);
            }}
        />,
        div,
    );
}
