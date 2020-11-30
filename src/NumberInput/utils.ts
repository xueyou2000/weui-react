export function isEmpy(val: any) {
  return val === undefined || val === null;
}

/**
 * 默认格式化
 * @description 返回数值的字符串
 */
export function defaultFormatter(value: any) {
  if (isEmpy(value)) {
    return '';
  } else {
    return value + '';
  }
}

/**
 * 默认解析
 * @description 返回对应的反格式化字符串
 */
export function defaultParser(value: string) {
  if (value) {
    return value + '';
  } else {
    return '';
  }
}

/**
 * 保留精度
 *
 * @param precision 精度
 * @param val 数值字符串
 */
export function keepPrecision(precision: number | undefined, val: string | number): string {
  if (precision === undefined || val === undefined || val === '') {
    return String(val);
  } else {
    return parseFloat(val + '').toFixed(precision);
  }
}

/**
 * 字符串转换为数值
 * @description 返回undefined则不是数值
 */
export function toNumber(val: string) {
  if (val) {
    const number = parseFloat(val + '');
    if (!isNaN(number)) {
      return number;
    }
  }
}

const FIX_NUMBER = 1000;

/**
 * 提供精确的加法运算
 * @param num1 被加数
 * @param num2 加数
 * @returns 两个参数的和  num1 + num2
 */
export function add(num1: number, num2: number) {
  return (num1 * FIX_NUMBER + num2 * FIX_NUMBER) / FIX_NUMBER;
}

/**
 * 提供精确的减法运算
 * @param num1 被减数
 * @param num2 减数
 * @returns 两个参数的差  num1 - num2
 */
export function sub(num1: number, num2: number) {
  return (num1 * FIX_NUMBER - num2 * FIX_NUMBER) / FIX_NUMBER;
}
