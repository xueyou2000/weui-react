/**
 * 检测是否纯数组类型
 * @param obj
 */
export function isArray(obj: any) {
    if (!obj) {
        return false;
    }
    return /Array/.test(Object.prototype.toString.call(obj));
}
