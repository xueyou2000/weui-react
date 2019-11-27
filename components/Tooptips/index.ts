import Tooptips, { TooptipsProps } from "./Tooptips";
import { PopupComponent } from "../Popup";

function TooptipsPopup(props: TooptipsProps) {
    return PopupComponent(Tooptips, props);
}

export { Tooptips, TooptipsPopup };
