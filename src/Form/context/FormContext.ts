import React from 'react';
import { FormMethods } from '../hooks/useFormMethods';
import { FieldConfig, ValidateResult, ValidateTrigger } from '../utils/validate';

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

export interface FormContextState {
  /**
   * 是否禁用表单
   */
  disabled: boolean;
  /**
   * 表单方法
   */
  methods: FormMethods;
  /**
   * 默认触发事件
   */
  trigger: ValidateTrigger;
  /**
   * 标签宽度
   */
  labelWidth: string;
  /**
   * 标签位置
   */
  labelPostion: 'left' | 'top';
  /**
   * 默认模型
   */
  defaultModel?: any;
  /**
   * 添加字段
   */
  add: (prop: string, itemState: FormItemState) => void;
  /**
   * 移除字段
   */
  remove: (prop: string) => void;
  /**
   * 字段值改变事件
   */
  fieldChange: (prop: string, value: any) => void;
  /**
   * 字段需要验证事件
   */
  fieldValidate: (prop: string, trigger?: ValidateTrigger) => Promise<any>;
}

function loop() {}

const FormContext = React.createContext<FormContextState>({
  disabled: false,
  trigger: ValidateTrigger.change,
  labelWidth: '90px',
  labelPostion: 'left',
  add: loop,
  methods: {} as any,
  remove: loop,
  fieldChange: loop,
  fieldValidate: () => Promise.resolve(),
});

export default FormContext;
