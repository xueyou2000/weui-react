/**
 * 限制在 lower 和 upper 之间的值
 * @param i 被限制的值
 * @param min 下限
 * @param max 上限
 */
export function clamp(i: number, min: number, max: number) {
    if (i < min) {
        return min;
    } else if (i > max) {
        return max;
    } else {
        return i;
    }
}
