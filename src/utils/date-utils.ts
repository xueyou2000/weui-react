/**
 * 自减年份
 */
export function decreaseYear(year: number, date?: Date) {
  const d = date || new Date();
  d.setFullYear(d.getFullYear() - year);
  return d;
}

/**
 * 自增年份
 */
export function increaseYear(year: number, date?: Date) {
  const d = date || new Date();
  d.setFullYear(d.getFullYear() + year);
  return d;
}

/**
 * 格式化日期字符串
 * @param t 日期
 * @param format 格式化字符串
 * @example formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss');
 */
export function formatDate(t: Date, format = 'yyyy-MM-dd HH:mm:ss') {
  const tf = function (i: number) {
    return (i < 10 ? '0' : '') + i;
  };
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (token) => {
    switch (token) {
      case 'yyyy':
        return tf(t.getFullYear());
      case 'MM':
        return tf(t.getMonth() + 1);
      case 'mm':
        return tf(t.getMinutes());
      case 'dd':
        return tf(t.getDate());
      case 'HH':
        return tf(t.getHours());
      case 'ss':
        return tf(t.getSeconds());
      default:
        return '';
    }
  });
}

/**
 * 设置年份, 返回新日期
 * @param d
 * @param year
 */
export function setYear(d: Date, year: number) {
  const date = new Date(d);
  date.setFullYear(year);
  return date;
}

/**
 * 设置月份, 返回新日期
 * @param d
 * @param year
 */
export function setMonth(d: Date, month: number) {
  const date = new Date(d);
  date.setMonth(month, 1);
  return date;
}

/**
 * 累加月份, 返回新日期
 * @param d
 */
export function incrementMonth(d: Date) {
  const date = new Date(d);
  const month = date.getMonth();
  let prevDate: Date;
  switch (month) {
    case 11:
      // 往后翻一年
      prevDate = setYear(date, date.getFullYear() + 1);
      prevDate.setMonth(0, 1);
      break;
    default:
      prevDate = setMonth(date, month + 1);
  }
  return prevDate;
}

/**
 * 获取指定月的天数
 * @param date
 */
export function daysInMonth(date: Date) {
  // Tips: 当 setDate(0) 传入0时，会得到前一个月的最后一天，就不用判断是否闰年了
  const prevDate = incrementMonth(date);
  prevDate.setDate(0);
  return prevDate.getDate();
}
