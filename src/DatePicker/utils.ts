import { daysInMonth, formatDate } from '@/utils/date-utils';
import { PickerItem } from '../Picker/utils';

/**
 * 日期模式
 * date = 年月日
 * datetime = 年月日 时分秒
 * time = 十分秒
 * year = 年
 * month = 月
 */
export type DatePickerMode = 'date' | 'datetime' | 'time' | 'year' | 'month';

/**
 * 获取日期格式化字符串
 *
 * @param mode 日期模式
 */
export function getDateFormat(mode: DatePickerMode) {
  switch (mode) {
    case 'date':
      return 'yyyy-MM-dd ';
    case 'datetime':
      return 'yyyy-MM-dd HH:mm:ss';
    case 'time':
      return 'HH:mm:ss';
    case 'year':
      return 'yyyy';
    case 'month':
      return 'MM';
  }
}

/**
 * 获取label结尾
 */
export function getDateSuffix(format: string) {
  const s = format
    .replace(/yyyy/g, '年')
    .replace(/MM/g, '月')
    .replace(/dd/g, '日')
    .replace(/HH/g, '时')
    .replace(/mm/g, '分')
    .replace(/ss/g, '秒');

  return splitDateStr(s);
}

/**
 * 分隔日期数组
 * '2020-10-12 15:10:10' 分隔为 ['2020', '10', '12', '15', '10', '10']
 */
export function splitDateStr(dateStr: string) {
  const chips = dateStr.split(/(-|\s|:)/);
  return chips.filter((s) => s && !/(-|\s|:)/.test(s));
}

/**
 * 获取日期数值
 * 比如 [2020, 10, 9]
 *
 * @param d 日期
 * @param format 格式化
 */
export function getDateNums(d: Date, format: string) {
  const dateStr = formatDate(d, format);
  return splitDateStr(dateStr).map((x) => parseInt(x));
}

/**
 * 日期数值转日期对象
 *
 * 比如 [2020, 10, 9] -> 日期对象
 */
export function numsToDate(value: any[], mode: DatePickerMode) {
  if (!value) {
    return null;
  } else {
    const d = new Date();
    switch (mode) {
      case 'date':
        d.setFullYear(value[0]);
        // setMonth(month, 1) fix 日期小于31自动到下个月份
        d.setMonth(Math.max(value[1] - 1, 0), 1);
        d.setDate(value[2]);
        break;
      case 'datetime':
        d.setFullYear(value[0]);
        d.setMonth(Math.max(value[1] - 1, 0), 1);
        d.setDate(value[2]);
        d.setHours(value[3]);
        d.setMinutes(value[4]);
        d.setSeconds(value[5]);
        break;
      case 'time':
        d.setHours(value[0]);
        d.setMinutes(value[1]);
        d.setSeconds(value[2]);
      case 'year':
        d.setFullYear(value[0]);
        break;
      case 'month':
        d.setMonth(Math.max(value[0] - 1, 0), 1);
        break;
    }
    return d;
  }
}

/**
 * 创建范围Picker数据
 *
 * @param start 起始范围
 * @param end   结束范围
 * @param suffix 标签后缀， 比如xx年，xx月
 */
export function createRangeData(start: number, end: number, suffix: string) {
  const data: PickerItem[] = [];
  for (let i = start; i <= end; ++i) {
    data.push({
      label: i + suffix,
      value: i,
    });
  }
  return data;
}

/**
 * 获取日期选择数据源
 */
export function createPickerDate(d: Date, minDate: Date, maxDate: Date, mode: DatePickerMode) {
  const dataSource: PickerItem[][] = [];
  const formate = getDateFormat(mode);
  const min = getDateNums(minDate, formate);
  const max = getDateNums(maxDate, formate);
  const suffix = getDateSuffix(formate);

  for (let i = 0; i < min.length; ++i) {
    const colSuffix = suffix[i];
    switch (colSuffix) {
      case '年':
        dataSource.push(createRangeData(min[i], max[i], colSuffix));
        break;
      case '月':
        dataSource.push(createRangeData(1, 12, colSuffix));
        break;
      case '日':
        dataSource.push(createRangeData(1, daysInMonth(d), colSuffix));
        break;
      case '时':
        dataSource.push(createRangeData(1, 23, colSuffix));
        break;
      case '分':
        dataSource.push(createRangeData(1, 59, colSuffix));
        break;
      case '秒':
        dataSource.push(createRangeData(1, 59, colSuffix));
        break;
    }
  }
  return dataSource;
}
