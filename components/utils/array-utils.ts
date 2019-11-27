/**
 * 填充构造指定长度数组
 * @param size
 * @param val
 */
export function fillingArray<T = any>(size: number, val: T) {
    const array = [];
    for (let i = 0; i < size; ++i) {
        array.push(val);
    }
    return array;
}
