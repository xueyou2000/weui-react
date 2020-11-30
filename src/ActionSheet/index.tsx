import { PopupToBody } from '../Popup';
import ActionSheetComponent, { ActionSheetProps } from './ActionSheet';

export default function ActionSheet(props: ActionSheetProps) {
  return PopupToBody(ActionSheetComponent, props);
}
