import { PopupToBody } from '../Popup';
import DatePicker, { DatePickerProps } from './DatePicker';

export function DatePickerPop(props: DatePickerProps) {
  return PopupToBody(DatePicker, Object.assign({}, props, { popup: true }));
}

export { DatePicker };
