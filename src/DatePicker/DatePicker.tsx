import { decreaseYear, formatDate, increaseYear } from '@/utils/date-utils';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import useMergeValue from 'use-merge-value';
import Picker, { PickerProps } from '../Picker/Picker';
import './style';
import { createPickerDate, DatePickerMode, getDateFormat, getDateNums, numsToDate } from './utils';

export interface DatePickerProps
  extends Pick<PickerProps, Exclude<keyof PickerProps, 'value' | 'defaultValue' | 'onChange' | 'data' | 'format'>> {
  /**
   * 日期模式, (日期date,时间time,日期+时间datetime,年year,月month)
   */
  mode?: DatePickerMode;
  /**
   * 选中日期
   */
  value?: Date | null;
  /**
   * 默认选中日期
   */
  defaultValue?: Date | null;
  /**
   * 日期改变
   */
  onChange?: (value: Date | null) => void;
  /**
   * 最小可选日期, 默认向前10年
   */
  minDate?: Date;
  /**
   * 最大可选日期, 默认向后10年
   */
  maxDate?: Date;
  /**
   * 显示标签格式化
   */
  format?: (date: Date, mode: DatePickerMode) => React.ReactNode;
  /**
   * 是否使用内置日期格式化label
   * 默认除了年和月模式，其他默认默认使用
   */
  useDefaultFormat?: boolean;
}

const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>((props, ref) => {
  const {
    prefixCls = 'weui-date-picker',
    className,
    style,
    mode = 'date',
    value,
    onChange,
    defaultValue = new Date(),
    minDate = decreaseYear(10),
    maxDate = increaseYear(10),
    labelField = 'label',
    onPickerChange,
    format,
    useDefaultFormat = true,
    ...pickerProps
  } = props;
  const [date, setDate] = useMergeValue(defaultValue, {
    value: props.value,
    onChange: props.onChange,
  });
  const saveDate = date || new Date();
  const formate = getDateFormat(mode);
  const [pickerDate, setPickerDate] = useState<Date | null>(saveDate);
  const data = createPickerDate(pickerDate || new Date(), minDate, maxDate, mode);

  function handleChange(value: any[]) {
    // 分段的值再转换回日期对象
    setDate(numsToDate(value, mode));
  }

  function handlePickerValueChange(value: any[]) {
    setPickerDate(numsToDate(value, mode));
  }

  function datePickerFormat() {
    if (!date) {
      return null;
    }
    if (format) {
      return format(date, mode);
    } else {
      return formatDate(date, formate);
    }
  }

  useEffect(() => {
    // 受控模式下，主动设置pickerData
    if ('value' in props) {
      setPickerDate(props.value || null);
    }
  }, [props.value]);

  return (
    <Picker
      {...pickerProps}
      ref={ref}
      popupContentClassName={classNames('datepicker-content', `mode-${mode}`)}
      labelField={labelField}
      className={classNames(prefixCls, className)}
      style={style}
      cascade={false}
      data={data}
      cols={data.length}
      format={mode === 'year' || mode === 'month' || !useDefaultFormat ? undefined : datePickerFormat}
      value={date ? getDateNums(date, formate) : undefined}
      pickerValue={pickerDate ? getDateNums(pickerDate, formate) : undefined}
      onPickerValueChange={handlePickerValueChange}
      onPickerChange={onPickerChange}
      onChange={handleChange}
    />
  );
});

export default DatePicker;
