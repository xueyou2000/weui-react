import { PopupToBody } from '../Popup';
import HalfScreenDialog, { HalfScreenDialogProps } from './HalfScreenDialog';

export function HalfScreenDialogPop(props: HalfScreenDialogProps) {
  return PopupToBody(HalfScreenDialog, props);
}

export { HalfScreenDialog };
