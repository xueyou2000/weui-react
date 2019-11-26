import Actionsheet, { ActionsheetProps } from "./Actionsheet";
import { PopupComponent } from "../Popup";

function ActionsheetPopup(props: ActionsheetProps) {
    return PopupComponent(Actionsheet, props);
}

export { Actionsheet, ActionsheetPopup };
