/**
 * 分隔数组, 将数组每多个个元素后，分隔
 */
export function segmentArray<T>(array: Array<T>, count: number) {
  const result: T[][] = [];

  for (let i = 0; i < Math.max(array.length, count); ++i) {
    if (i % count === 0) {
      result.push([array[i]]);
    } else {
      const last = result[result.length - 1];
      last.push(array[i]);
    }
  }

  // 末尾元素不足， 则用空元素补全, 并留一个位置给上传按钮
  const lastItem = result[result.length - 1];
  if (lastItem && lastItem.length < count) {
    result[result.length - 1] = lastItem.concat(makeArray(count - lastItem.length, null) as any);
  }

  return result;
}

export function makeArray<T>(size: number, fill: T | null) {
  const array = [];
  for (let i = 0; i < size; ++i) {
    array.push(fill);
  }
  return array;
}
