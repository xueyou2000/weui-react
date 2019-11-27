import ToastComponent, { ToastProps } from "./Toast";
import { PopupComponent } from "../Popup";

export default class Toast {
    /**
     * 成功提示
     * @param msg 提示内容
     * @param duration 持续时间
     * @param options
     */
    static success(msg: React.ReactNode, duration?: number, options?: ToastProps) {
        return PopupComponent(ToastComponent, Object.assign({}, options, { children: msg, duration, type: "success" }));
    }

    /**
     * 失败提示
     * @param msg 提示内容
     * @param duration 持续时间
     * @param options
     */
    static fail(msg: React.ReactNode, duration?: number, options?: ToastProps) {
        return PopupComponent(ToastComponent, Object.assign({}, options, { children: msg, duration, type: "error" }));
    }

    /**
     * 提示
     * @param msg 提示内容
     * @param duration 持续时间
     * @param options
     */
    static info(msg: React.ReactNode, duration?: number, options?: ToastProps) {
        return PopupComponent(ToastComponent, Object.assign({}, options, { children: msg, duration, type: "info" }));
    }

    /**
     * 加载提示
     * @param msg 提示内容
     * @param duration 持续时间
     * @param options
     */
    static loading(msg: React.ReactNode, duration?: number, options?: ToastProps) {
        return PopupComponent(ToastComponent, Object.assign({}, options, { children: msg, duration, type: "loading" }));
    }
}
