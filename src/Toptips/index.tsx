import { PopupToBody } from '../Popup';
import ToptipsComponent, { ToptipsProps } from './Toptips';

var lastCloseFun: Function | null = null;

function hide() {
  if (lastCloseFun) {
    lastCloseFun();
    lastCloseFun = null;
  }
}

/**
 * 顶部提示
 */
export default function Toptips(tips: React.ReactNode, type = 'default', duration = 2500) {
  hide();
  lastCloseFun = PopupToBody<ToptipsProps>(ToptipsComponent, { tips, type, duration });
  return hide;
}
