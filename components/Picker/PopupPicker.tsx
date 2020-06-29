import React from "react";
import ReactDOM from "react-dom";
import Picker, { PickerProps } from "./Picker";

export function PopupPicker(props: PickerProps) {
    const div = document.createElement("div");
    document.body.appendChild(div);

    ReactDOM.render(
        <Picker
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
