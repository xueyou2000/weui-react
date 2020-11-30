import HalfScreenDialog, { HalfScreenDialogProps } from '@/HalfScreenDialog/HalfScreenDialog';
import classNames from 'classnames';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import useMergeValue from 'use-merge-value';
import PickerPanel, { PickerPanelProps } from './PickerPanel';
import './style';
import { findMatchData, getDefaultPickerValues, getValues, PickerItem, toDataCols } from './utils';

export interface PickerProps
  extends Pick<HalfScreenDialogProps, Exclude<keyof HalfScreenDialogProps, 'onConfirm' | 'title'>>,
    PickerPanelProps {
  /**
   * 确定事件
   */
  onConfirm?: (value: any[], data: PickerItem[]) => void;
  /**
   * 占位符
   */
  placeholder?: React.ReactNode;
  /**
   * 弹出模式, 用于js触发弹出，此时不展示label区块
   */
  popup?: boolean;
  /**
   * 格式化函数. 选中数据如何展示
   */
  format?: (pickerData: PickerItem[], separator: string, singleLabel: boolean) => React.ReactNode;
  /**
   * 是否只显示最终一级的label (用于默认format)
   */
  singleLabel?: boolean;
  /**
   * label分隔符 (用于默认format)
   * 比如日期: 2019-10-08
   * 比如类别: 食品/熟食
   */
  separator?: string;
  /**
   * 标签字段, 默认label
   */
  labelField?: string;
  /**
   * 弹出框标题
   */
  title?: React.ReactNode;
  /**
   * 当前即时选择的值
   */
  pickerValue?: any[];
  /**
   * 当前即时选择的值改变
   */
  onPickerValueChange?: (pickerValue: any[]) => void;
}

function defaultFormat(
  pickerData: PickerItem[],
  separator: string,
  singleLabel: boolean,
  labelField: string = 'label',
) {
  if (singleLabel) {
    return (pickerData[pickerData.length - 1] as any)[labelField];
  } else {
    const labels = [];
    for (let i = 0; i < pickerData.length; ++i) {
      if (!pickerData[i]) {
        return '';
      }
      labels.push((pickerData[i] as any)[labelField]);
      if (i !== pickerData.length - 1) {
        labels.push(separator);
      }
    }
    return <div>{labels}</div>;
  }
}

function isEmpty(value: any[]) {
  return !value || value.some((x) => !x);
}

/**
 * 用于Picker不提供children的默认状态，灵活配合表单组件
 */
function DefaultPickerItem({ onClick, children }: { onClick?: () => void; children?: React.ReactNode }) {
  return (
    <div className="default-picker-item" onClick={onClick}>
      {children}
    </div>
  );
}

const Picker = React.forwardRef<HTMLDivElement, PickerProps>((props, ref) => {
  const {
    prefixCls = 'weui-picker',
    className,
    style,
    data = [],
    cols = 1,
    defaultValue = [],
    onPickerChange,
    cascade = false,
    disabled,
    defaultVisible = false,
    labelField = 'label',
    children = <DefaultPickerItem />,
    popup,
    onChange,
    placeholder = '请选择',
    singleLabel = false,
    separator = '/',
    format = defaultFormat,
    title = '请选择',
    ...haflDialogProps
  } = props;
  const child = React.Children.only(children) as any;
  const [value, setValue] = useMergeValue(getValues(cols, defaultValue), {
    value: props.value,
    onChange: props.onChange,
  });
  const saveValue = getValues(cols, value);
  const [visible, setVisible] = useMergeValue(defaultVisible, {
    value: props.visible,
    onChange: props.onVisibleChange,
  });
  const dataCols = toDataCols(data, cascade, cols, getValues(cols, props.value));
  const [pickerValue, setPickerValue] = useMergeValue<any[]>(getDefaultPickerValues(dataCols, saveValue), {
    value: props.pickerValue,
    onChange: props.onPickerValueChange,
  });

  // 临时选择的数据
  const pickerDataRef = useRef<PickerItem[] | null>(findMatchData(dataCols, pickerValue));
  // 实际选择数据
  const actualPickerData = findMatchData(dataCols, saveValue);
  const scrollOffsetRestRef = useRef<Function | null>(null);

  useEffect(() => {
    // 受控模式下，主动设置pickerData
    if (props.value && !('pickerValue' in props)) {
      const vals = getValues(cols, props.value);
      pickerDataRef.current = findMatchData(dataCols, vals);
      setPickerValue(getDefaultPickerValues(dataCols, vals));
    }
  }, [props.value, data]);

  function handleConfirm() {
    const pickerData = pickerDataRef.current;
    if (pickerData) {
      setValue(pickerData.map((x) => x.value));
    }
    return Promise.resolve();
  }

  function handleShow() {
    if (!disabled) {
      if (!('pickerValue' in props)) {
        setPickerValue(getDefaultPickerValues(dataCols, value));
      }
      setVisible(true);
    }
  }

  function handlePickerChange(colIndex: number, value: any[], data: PickerItem[]) {
    pickerDataRef.current = data;
    setPickerValue(value);
    if (onPickerChange) {
      onPickerChange(colIndex, value, data);
    }
  }

  function positioningPickerCol() {
    if (scrollOffsetRestRef.current) {
      scrollOffsetRestRef.current();
    }
  }

  return (
    <div className={classNames(prefixCls, className, { disabled })} style={style} ref={ref}>
      {!popup && (
        <div className={`${prefixCls}-item`}>
          {React.cloneElement(
            child,
            Object.assign({}, child.props, {
              children:
                isEmpty(value) || !actualPickerData ? (
                  <span className={`${prefixCls}-placeholder`}>{placeholder}</span>
                ) : (
                  format(actualPickerData, separator, singleLabel, labelField)
                ),
              onClick: handleShow,
              access: !disabled,
            }),
          )}
        </div>
      )}

      <HalfScreenDialog
        {...haflDialogProps}
        title={title}
        visible={visible}
        onVisibleChange={setVisible}
        onConfirm={handleConfirm}
        onShow={positioningPickerCol}
      >
        <PickerPanel
          data={data}
          cols={cols}
          cascade={cascade}
          disabled={disabled}
          onPickerChange={handlePickerChange}
          value={pickerValue}
          scrollOffsetRestRef={scrollOffsetRestRef}
        />
      </HalfScreenDialog>
    </div>
  );
});

export default Picker;
