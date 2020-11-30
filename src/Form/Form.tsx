import classNames from 'classnames';
import React, { useRef } from 'react';
import FormContext, { FormContextState, FormItemState } from './context/FormContext';
import useFormMethods, { FormMethods } from './hooks/useFormMethods';
import './style';
import { ValidateConfig, ValidateTrigger } from './utils/validate';

export interface FormProps<T> extends Partial<FormContextState> {
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
   * 表单内容
   */
  children?: React.ReactNode;
  /**
   * 验证配置
   */
  validConfig?: ValidateConfig<T>;
  /**
   * 获取表单方法
   */
  getFormMethods?: (methods: FormMethods) => void;
  /**
   * 字段值改变事件
   */
  onFieldChange?: (prop: string, value: any) => void;
  /**
   * 开始点击提交按钮
   */
  onSubmitBefore?: (data: any) => void;
  /**
   * 表单验证失败事件
   */
  onValidateFail?: (error: Error, data: any) => void;
  /**
   * 表单提交事件
   * @description 当验证全部通过后才会调用此事件
   */
  onSubmit?: (data: any) => void;
}

export default function Form<T = any>(props: FormProps<T>) {
  const {
    prefixCls = 'weui-form',
    className,
    style,
    children,
    disabled = false,
    trigger = ValidateTrigger.blur,
    labelWidth = '15vw',
    labelPostion = 'left',
    defaultModel,
    getFormMethods,
  } = props;
  const fieldMapper = useRef(new Map<string, FormItemState>());
  const { fieldChange, fieldValidate, methods } = useFormMethods<T>(props, fieldMapper);

  if (getFormMethods) {
    getFormMethods(methods);
  }

  function add(prop: string, itemState: FormItemState) {
    const mapper = fieldMapper.current;
    if (mapper.has(prop)) {
      console.warn('存在重复字段', prop);
    }
    mapper.set(prop, itemState);
  }

  function remove(prop: string) {
    const mapper = fieldMapper.current;
    if (mapper.has(prop)) {
      mapper.delete(prop);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.stopPropagation();
    event.preventDefault();
    methods.submit();
    return false;
  }

  function handleRest() {
    if (disabled) {
      return;
    }
    methods.reset();
  }

  return (
    <form
      className={classNames(prefixCls, className)}
      style={style}
      onSubmit={handleSubmit}
      onReset={handleRest}
      autoComplete="off"
    >
      <FormContext.Provider
        value={{
          disabled,
          methods,
          trigger,
          labelWidth,
          labelPostion,
          defaultModel,
          add,
          remove,
          fieldChange,
          fieldValidate,
        }}
      >
        {children}
      </FormContext.Provider>
    </form>
  );
}
