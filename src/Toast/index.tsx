import { PopupToBody } from '../Popup';
import ToastComponent, { ToastProps } from './Toast';

var lastCloseFun: Function | null = null;

function popup(props: ToastProps) {
  Toast.hide();
  lastCloseFun = PopupToBody<ToastProps>(ToastComponent, props);
}

export default class Toast {
  /**
   * 文本提示
   */
  static text(content: React.ReactNode, duration: number = 2500, mask = false) {
    popup({ content, duration, mask, type: 'text' });
  }

  /**
   * 成功提示
   */
  static success(content: React.ReactNode, duration: number = 2500, mask = false) {
    popup({ content, duration, mask, type: 'success' });
  }

  /**
   * 失败提示
   */
  static fail(content: React.ReactNode, duration: number = 2500, mask = false) {
    popup({ content, duration, mask, type: 'fail' });
  }

  /**
   * 加载提示
   */
  static loading(content: React.ReactNode, duration: number = 2500, mask = true) {
    popup({ content, duration, mask, type: 'loading' });
  }

  /**
   * 关闭提示
   */
  static hide() {
    if (lastCloseFun) {
      lastCloseFun();
      lastCloseFun = null;
    }
  }
}
