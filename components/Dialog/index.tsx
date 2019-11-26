import Dialog, { DialogProps } from "./Dialog";
import { PopupComponent } from "../Popup";

function DialogPopup(props: DialogProps) {
    return PopupComponent(Dialog, props);
}

export { Dialog, DialogPopup };
