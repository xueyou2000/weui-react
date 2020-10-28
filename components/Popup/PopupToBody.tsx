import React from "react";
import ReactDOM from "react-dom";
import { PopupProps } from "./Popup";

function PopupComponent(Component: React.FC<PopupProps>, props: PopupProps) {
    let closeFunc: Function;
    const div = document.createElement("div");
    document.body.appendChild(div);

    ReactDOM.render(
        <Component
            {...props}
            defaultVisible={true}
            getCloseFunc={(close) => {
                closeFunc = close;
            }}
            getContainer={div}
            onUnmount={() => {
                ReactDOM.unmountComponentAtNode(div);
                div.parentNode.removeChild(div);
            }}
        />,
        div,
    );

    return closeFunc;
}

export default PopupComponent;
