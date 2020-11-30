import get from 'lodash-es/get';
import merge from 'lodash-es/merge';
import set from 'lodash-es/set';
import { useRef } from 'react';
import { FormItemState } from '../context/FormContext';
import { FormProps } from '../Form';
import { FieldConfig, Validate, ValidateResult, ValidateTrigger } from '../utils/validate';
import Toptips from '../../Toptips';

export interface FormMethods {
  /**
   * 设置模型值
   * @description 快速设置整个模型的值
   */
  setModel: <ModelValue>(model: ModelValue) => void;
  /**
   * 重置所有字段到初始值
   */
  reset: () => void;
  /**
   * 验证所有字段
   */
  validateFields: () => Promise<any>;
  /**
   * 获取字段值
   */
  getFieldValue: (prop: string) => any;
  /**
   * 设置字段值
   */
  setFieldValue: (prop: string, value: any) => void;
  /**
   * 获取字段验证结果
   */
  getFieldValidateResult: (prop: string) => ValidateResult;
  /**
   * 设置字段验证结果
   */
  setFieldValidateResult: (prop: string, result: ValidateResult) => void;
  /**
   * 获取字段输入框元素
   */
  getFieldInput: (prop: string) => HTMLElement | null;
  /**
   * 重置字段到初始值
   */
  resetField: (prop: string) => void;
  /**
   * 验证指定字段
   */
  validateField: (prop: string) => Promise<any>;
  /**
   * 获取对应标签
   */
  getFieldLabel: (prop: string) => React.ReactNode;
  /**
   * 表单提交
   */
  submit: <T>(uncaught?: boolean) => Promise<T>;
  /**
   * 获取数据
   */
  toData: () => any;
}

function defaultValidateFailTips(error: Error, data: any) {
  Toptips(error.message, 'fail');
}

export default function useFormMethods<T>(
  props: FormProps<T>,
  fieldMapper: React.MutableRefObject<Map<string, FormItemState>>,
) {
  const {
    defaultModel = {},
    disabled,
    onSubmit,
    onSubmitBefore,
    onValidateFail = defaultValidateFailTips,
    onFieldChange,
    validConfig,
  } = props;
  const modelRef = useRef(Object.assign({}, defaultModel));

  function fieldChange(prop: string, value: any) {
    const model = modelRef.current;
    if (onFieldChange) {
      onFieldChange(prop, value);
    }
    set(model, prop, value);
  }

  function fieldValidate(prop: string, trigger?: ValidateTrigger) {
    const state = getFieldItemState(prop);
    if (!state) {
      return Promise.resolve();
    }

    const configs: FieldConfig[] = validConfig ? get(validConfig, prop) : [];
    const rules = merge(configs, state.getRule() || []);
    const value = state.getValue();
    const input = state.ref.current;
    const label = state.getLabel();

    if (rules.length > 0 && state.getCanValidate()) {
      return Validate(value, rules, { label, input, trigger });
    } else {
      return Promise.resolve();
    }
  }

  function getFieldItemState(prop: string): FormItemState | null {
    const mapper = fieldMapper.current;
    if (mapper.has(prop)) {
      return mapper.get(prop) || null;
    } else {
      console.warn(`未找到字段: ${prop}`);
      return null;
    }
  }

  const methods: FormMethods = {
    /**
     * 设置模型值
     */
    setModel<ModelValue>(model: ModelValue) {
      const mapper = fieldMapper.current;
      mapper.forEach((state, prop) => {
        state.setValue(get(model, prop));
      });
    },
    /**
     * 重置整个表单
     */
    reset() {
      const mapper = fieldMapper.current;
      mapper.forEach((state) => {
        state.rest();
      });
    },
    /**
     * 提交表单
     * @description 进行表单验证
     */
    submit<T>() {
      const data = methods.toData() as T;
      if (disabled) {
        console.error('form disabled, can not submit');
        return Promise.resolve(data);
      }
      if (onSubmitBefore) {
        onSubmitBefore(data);
      }
      return methods
        .validateFields()
        .then(() => {
          if (onSubmit) {
            return onSubmit(data);
          }
          return data;
        })
        .then(() => data)
        .catch((error) => {
          if (onValidateFail) {
            onValidateFail(error, data);
          }
          return data;
        });
    },
    /**
     * 获取模型值
     */
    toData() {
      const mapper = fieldMapper.current;
      let model: any = {};
      mapper.forEach((_, prop) => {
        const value = methods.getFieldValue(prop);
        set(model, prop, value);
      });
      return merge({}, modelRef.current, model);
    },
    /**
     * 验证所有字段
     */
    validateFields() {
      if (disabled) {
        return Promise.resolve();
      }
      const mapper = fieldMapper.current;
      const promises: Promise<any>[] = [];
      mapper.forEach((_, prop) => {
        promises.push(methods.validateField(prop));
      });
      return Promise.all(promises);
    },
    /**
     * 获取字段值
     *
     * @param prop 字段名
     */
    getFieldValue(prop: string) {
      return getFieldItemState(prop)?.getValue() || null;
    },
    /**
     * 设置字段值
     *
     * @param prop 字段名
     * @param value 要设置的值
     */
    setFieldValue(prop: string, value: any) {
      getFieldItemState(prop)?.setValue(value);
    },
    /**
     * 获取字段验证结果
     */
    getFieldValidateResult(prop: string) {
      const state = getFieldItemState(prop);
      if (state) {
        return state.getValidateResult();
      } else {
        return { status: true };
      }
    },
    /**
     * 设置字段验证结果
     */
    setFieldValidateResult(prop: string, result: ValidateResult) {
      getFieldItemState(prop)?.setValidateResult(result);
    },
    /**
     * 获取字段dom元素
     */
    getFieldInput(prop: string) {
      return getFieldItemState(prop)?.ref.current || null;
    },
    /**
     * 重置字段值
     */
    resetField(prop: string) {
      getFieldItemState(prop)?.rest();
    },
    /**
     * 验证字段
     */
    validateField(prop: string) {
      const state = getFieldItemState(prop);
      if (!state) {
        return Promise.resolve();
      }
      return fieldValidate(prop)
        .then(() => {
          state.setValidateResult({ status: true, msg: undefined });
        })
        .catch((error: Error) => {
          state.setValidateResult({ status: false, msg: error.message });
          return Promise.reject(error);
        });
    },
    /**
     * 获取字段标签文本
     */
    getFieldLabel(prop: string) {
      return getFieldItemState(prop)?.getLabel() || null;
    },
  };

  return { fieldChange, fieldValidate, methods };
}
