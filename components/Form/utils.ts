import { TooptipsPopup } from "../Tooptips";
import { ValidateError } from "xy-form/es/ValidateUtils/FormValidate";

/**
 * 表单验证错误处理器
 * @param error
 * @param data
 */
export function formValidateFailHandle(error: ValidateError, data: any) {
    if (error.input) {
        error.input.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }
    TooptipsPopup({ children: error.message });
}
