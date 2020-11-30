import { makeArray } from '@/utils/array-utils';
import classNames from 'classnames';
import React, { useRef } from 'react';
import useMergeValue from 'use-merge-value';
import PickerCol from './PickerCol';
import './style';
import { findMatchData, getDefaultPickerValues, getValues, PickerItem, toDataCols } from './utils';

export interface PickerPanelProps {
  /**
   * 附加类名
   */
  prefixCls?: string;
  /**
   * 根节点的附加类名
   */
  className?: string;
  /**
   * 内联样式
   */
  style?: React.CSSProperties;
  /**
   * 数据源
   */
  data: PickerItem[] | PickerItem[][];
  /**
   * 列数
   */
  cols?: number;
  /**
   * 选中值
   */
  value?: any[];
  /**
   * 默认值
   */
  defaultValue?: any[];
  /**
   * 值改变事件
   */
  onChange?: (value: any[]) => void;
  /**
   * 每列数据改变
   */
  onPickerChange?: (colIndex: number, value: any[], data: PickerItem[]) => void;
  /**
   * 是否级连
   */
  cascade?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 重置
   */
  scrollOffsetRestRef?: React.MutableRefObject<Function | null>;
}

export default function PickerPanel(props: PickerPanelProps) {
  const {
    prefixCls = 'weui-picker',
    className,
    style,
    data = [],
    cols = 1,
    cascade = false,
    onPickerChange,
    defaultValue = [],
    disabled,
    scrollOffsetRestRef,
  } = props;
  const [value, setValue] = useMergeValue(getValues(cols, defaultValue), {
    value: props.value,
    onChange: props.onChange,
  });
  // 确保长度后的数组(避免数组越界空指针)
  const dataCols = toDataCols(data, cascade, cols, getValues(cols, value));
  const saveValue = getDefaultPickerValues(dataCols, value);
  const scrollOffsetRestsRef = useRef<Array<Function>>([]);

  if (cols !== dataCols.length) {
    console.warn('cols 与 数据源长度不匹配!');
  }

  function handleColChange(colIndex: number, value: any) {
    // console.log(`列: ${colIndex}, 改变值: ${value}`);
    let nextValue: any[];
    // 之前(保留值) ｜ 当前(改变) | 后续(保留值)
    const tempValue = saveValue.map((x, i) => (i === colIndex ? value : x));

    if (cascade) {
      // 用此新的值获取最新的级连数据
      const nextDataCols = toDataCols(data, cascade, cols, tempValue);
      // 用最新的级连数据，填补colIndex后续列的默认值(如果saveValue里的值依然在新的列数据中，则还是使用他)
      nextValue = getDefaultPickerValues(nextDataCols, tempValue);
      setValue(nextValue);
      if (onPickerChange) {
        onPickerChange(colIndex, nextValue, findMatchData(nextDataCols, nextValue));
      }
    } else {
      setValue(tempValue);
      if (onPickerChange) {
        onPickerChange(colIndex, tempValue, findMatchData(dataCols, tempValue));
      }
    }
  }

  function getScrollOffsetRest(colIndex: number, rest: Function) {
    const scrollOffsetRests = scrollOffsetRestsRef.current;
    scrollOffsetRests[colIndex] = rest;
  }

  if (scrollOffsetRestRef) {
    scrollOffsetRestRef.current = () => {
      scrollOffsetRestsRef.current.forEach((rest) => {
        if (rest) {
          rest(false);
        }
      });
    };
  }

  return (
    <div className={classNames(`${prefixCls}-panel`, className)} style={style}>
      {dataCols.length >= 1 &&
        dataCols.map((d, i) => (
          <PickerCol
            getScrollOffsetRest={(rest) => getScrollOffsetRest(i, rest)}
            data={d}
            key={i}
            value={saveValue[i]}
            disabled={disabled}
            onChange={(v) => handleColChange(i, v)}
          />
        ))}
    </div>
  );
}
