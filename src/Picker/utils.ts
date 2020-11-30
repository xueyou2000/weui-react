import { makeArray } from '@/utils/array-utils';
import { isArray } from '@/utils/object-utils';

export interface PickerItem {
  /**
   * 显示文本
   */
  label: React.ReactNode;
  /**
   * 选中值
   */
  value: any;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 子集
   */
  children?: PickerItem[];
}

/**
 * 获取默认选中值(单列默认值)
 * @description 不存在则使用第一个
 */
export function getDefaultPickerValue(data: PickerItem[], value?: any) {
  if (!data || data.length <= 0) {
    return null;
  }
  return data.some((x) => x.value === value) ? value : data[0].value;
}

/**
 * 获取默认选中值
 */
export function getDefaultPickerValues(data: PickerItem[][], value?: any[]) {
  const values = makeArray(data.length, null);
  for (let i = 0; i < data.length; ++i) {
    const colData = data[i];
    if (!colData || colData.length <= 0) {
      values[i] = null;
      continue;
    }
    // 选中值存在与colData中，则使用此值，否则取第一个作为默认值
    if (value && i < value.length) {
      values[i] = colData.some((x) => x.value === value[i]) ? value[i] : colData[0].value;
    } else {
      values[i] = colData[0].value;
    }
  }
  return values;
}

/**
 * 获取列值
 * @description 如果cols为3, 将不安全的['a', 'b'], 转换为['a', 'b', 'c'] 确保数组长度
 *
 * @param cols 列数量
 * @param value 默认值
 */
export function getValues(cols: number, value?: any[]) {
  if (!value || value.length === 0) {
    return makeArray(cols, null);
  } else if (value.length < cols) {
    // 补齐数组长度
    return [...value, ...makeArray(cols - value.length, null)];
  } else {
    return value;
  }
}

/**
 * 数据源转换列数据
 * @description 根据当前选中的值，得到列数据
 *
 * @param data 数据源
 * @param cascade 是否级连
 * @param value 受控选中值
 */
export function toDataCols(data: PickerItem[] | PickerItem[][], cascade: boolean, cols: number, value?: any[]) {
  // 多列模式
  const multiMode = data.length > 0 && isArray(data[0]);
  // 将 多列数据, 单列数据 统一成  PickerItem[][] 多列格式
  const dataCols = multiMode ? (data as PickerItem[][]) : ([data] as PickerItem[][]);
  if (cascade) {
    // 根据所选值，创建级连数据
    return createCascadeData(dataCols, cols, value);
  }
  return dataCols;
}

/**
 * 创建级联数据
 */
export function createCascadeData(dataCols: PickerItem[][], cols: number, value?: any[]) {
  // tips: 级连模式都是单列数据源， 所以要从PickerItem[][]在转为PickerItem[], 作为默认第一列的数据
  let data = dataCols[0];
  const cascadeDataCols: PickerItem[][] = [data];

  for (let colIndex = 0; colIndex < cols - 1; ++colIndex) {
    if (data.length <= 0) {
      cascadeDataCols.push([]);
      continue;
    }
    const item = data.find((x) => value && colIndex < value.length && x.value === value[colIndex]);
    if (item) {
      data = item.children || [];
    } else {
      // 取默认第一个数据的children作为第二列的数据源
      data = data[0].children || [];
    }
    cascadeDataCols.push(data);
  }

  return cascadeDataCols;
}

/**
 * 获取值所在的列数据
 */
export function findMatchData(dataCols: PickerItem[][], value: any[]) {
  return dataCols.map((colsData, colIndex) =>
    colsData.find((d) => colIndex < value.length && d.value === value[colIndex]),
  ) as PickerItem[];
}
