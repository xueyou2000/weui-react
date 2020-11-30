import get from 'lodash-es/get';
import React, { useContext, useRef, useState } from 'react';
import { useMount, useUnmount } from 'utils-hooks';
import FormContext from '../context/FormContext';
import { FieldConfig, ValidateResult, ValidateTrigger } from '../utils/validate';

export interface UseFieldConfig {
  /**
   * 字段字
   */
  prop: string;
  /**
   * 字段值的key, 默认情况下都是`value`,但有些组件，比如`Switch`是`checked`
   */
  valueKey?: string;
  /**
   * 如何从onChange转换值
   */
  converValue?: Function;
  /**
   * 中文标签名 (用于验证提示)
   */
  labelString?: string;
  /**
   * 默认触发事件
   */
  trigger?: ValidateTrigger;
  /**
   * 验证配置
   */
  rule?: FieldConfig[];
  /**
   * 默认值
   */
  defaultValue?: any;
  /**
   * 规范化函数 (getData时转换的提交值)
   * @description 比如绑定的是 Date 类型，form 最后同步时可以是日期字符串.
   */
  normalize?: (value: any) => any;
  /**
   * 是否禁用验证
   */
  disabledValidate?: boolean;
  /**
   * 验证状态改变事件
   */
  onValidateChange?: (value: any, validateResult: ValidateResult) => void;
  /**
   * 透传属性，没有则取form上的disabled
   */
  disabled?: boolean;
  /**
   * 透传属性，为了失去焦点验证，需要代理此事件
   */
  onBlur?: (e: React.FocusEvent<HTMLElement>) => void;
  /**
   * 透传属性，
   */
  onChange?: (value: any) => void;
}

export interface FormItemState {
  /**
   * 获取字段值
   */
  getValue: () => any;
  /**
   * 设置字段值
   */
  setValue: (value: any) => void;
  /**
   * 获取验证结果
   */
  getValidateResult: () => ValidateResult;
  /**
   * 设置验证结果
   */
  setValidateResult: (result: ValidateResult) => void;
  /**
   * 获取是否可以验证
   */
  getCanValidate: () => boolean;
  /**
   * 获取dom
   */
  ref: React.MutableRefObject<HTMLElement | null>;
  /**
   * 重置到初始值
   */
  rest: () => void;
  /**
   * 获取标签
   */
  getLabel: () => string;
  /**
   * 获取验证配置
   */
  getRule: () => FieldConfig[] | null;
}

function DefaultChangeValue(value: any) {
  // 如果onChange的参数是 event 事件
  if (value && typeof value === 'object' && 'target' in value) {
    return (value as any).target.value;
  }
  return value;
}

/**
 * 包裹组件要求:
 * -  需要有对应的value/onChange
 * -  需要有onBlur
 * -  需要有disabled
 * -  需要有ref
 */
export default function useField(config: UseFieldConfig) {
  const {
    prop,
    defaultValue,
    onValidateChange,
    converValue = DefaultChangeValue,
    disabledValidate = false,
    valueKey = 'value',
    onBlur,
    onChange,
    labelString,
    normalize,
    rule = null,
  } = config;
  const formContext = useContext(FormContext);
  const trigger = config.trigger || formContext.trigger;
  const disabled = 'disabled' in config ? config.disabled : formContext.disabled;
  const inputRef = useRef<HTMLElement | null>(null);
  const initialValueRef = useRef(defaultValue || get(formContext.defaultModel, prop) || null);
  const [value, setValue] = useState(initialValueRef.current);
  const lastValue = useRef(value);
  const [validateResult, setValidateResult] = useState<ValidateResult>({ status: true, msg: undefined });
  const lastValidateResult = useRef(validateResult);

  function changeValue(val: any) {
    lastValue.current = val;
    setValue(val);

    // 触发器ValidateTrigger.blur情况下, 改变值则取消验证失败的状态
    if (trigger === ValidateTrigger.blur || trigger === ValidateTrigger.none) {
      changeValidateResult({ status: true, msg: undefined });
    }
    formContext.fieldChange(prop, val);
  }

  function changeValidateResult(res: ValidateResult) {
    if ((res.status === true && lastValidateResult.current.status !== res.status) || !res.status) {
      lastValidateResult.current = res;
      setValidateResult(res);
      if (onValidateChange) {
        onValidateChange(value, res);
      }
    }
  }

  const itemState = useRef<FormItemState>({
    ref: inputRef,
    setValue: changeValue,
    setValidateResult: changeValidateResult,
    rest: () => {
      changeValue(initialValueRef.current);
      changeValidateResult({ status: true, msg: undefined });
    },
    getLabel: () => labelString || '',
    getValidateResult: () => validateResult,
    getCanValidate: () => !disabled && !disabledValidate,
    getValue: () => (normalize ? normalize(lastValue.current) : lastValue.current),
    getRule: () => rule,
  });

  useMount(() => {
    if (!prop) {
      throw new Error('Must assign prop');
    }
    formContext.add(prop, itemState.current);
  });

  useUnmount(() => {
    formContext.remove(prop);
  });

  function validate(_trigger?: ValidateTrigger) {
    if (((_trigger || 0) & trigger) !== 0 && !formContext.disabled && !disabledValidate) {
      formContext
        .fieldValidate(prop, _trigger)
        .then(() => {
          changeValidateResult({ status: true, msg: undefined });
        })
        .catch((error) => {
          changeValidateResult({ status: false, msg: error.message });
        });
    } else {
      changeValidateResult({ status: true, msg: undefined });
    }
  }

  function handleChange(value: any) {
    changeValue(converValue(value));
    if (onChange) {
      onChange(converValue(value));
    }
    validate(ValidateTrigger.change);
  }

  function handleBlur(e: React.FocusEvent<HTMLElement>) {
    if (onBlur) {
      onBlur(e);
    }
    validate(ValidateTrigger.blur);
  }

  return {
    // tips: 自定义组件使用null, 来确保输入组件是受控的
    [valueKey]: value === undefined ? null : value,
    key: prop,
    ref: inputRef,
    disabled,
    onBlur: handleBlur,
    onChange: handleChange,
  };
}
