import HalfScreenDialog, { HalfScreenDialogProps } from "./HalfScreenDialog";
import { PopupComponent } from "../Popup";

function HalfScreenDialogPopup(props: HalfScreenDialogProps) {
    return PopupComponent(HalfScreenDialog, props);
}

export { HalfScreenDialog, HalfScreenDialogPopup };
