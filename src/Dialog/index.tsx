import { PopupToBody } from '../Popup';
import Dialog, { DialogProps } from './Dialog';

export function DialogPop(props: DialogProps) {
  return PopupToBody(Dialog, props);
}

export { Dialog };
