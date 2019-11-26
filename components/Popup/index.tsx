import Popup, { PopupProps } from "./Popup";
import PopupComponent from "./PopupToBody";

function Popupbox(props: PopupProps) {
    return PopupComponent(Popup, props);
}

export { Popup, Popupbox, PopupComponent };
