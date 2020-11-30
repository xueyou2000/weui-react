import * as ValidateMethods from 'validate-methods';
import { IMethodRegister, ValidateMethodError, ValidateProvider } from 'validate-provider';
import { ValidateRunnerAll, ValidateRunnerElement } from 'validate-runner';
import ValidateMessage from './ValidateMessage';

/**
 * 验证事件
 */
export enum ValidateTrigger {
  /**
   * 失去焦点触发
   */
  blur = 2,
  /**
   * 输入时触发
   */
  change = 4,
  /**
   * 无, 只会再表单submit时提交
   */
  none = 33,
  /**
   * 二者都是
   */
  all = 6,
}

/**
 * 验证结果
 */
export interface ValidateResult {
  /**
   * 验证结果
   */
  status: boolean;
  /**
   * 验证失败原因
   */
  msg?: string;
}

/**
 * 验证值类型
 */
export type ValidValue = string | number | null | boolean | Date | Array<ValidValue>;

/**
 * 验证配置
 */
export interface ValidateParams {
  label: string;
  input: HTMLElement | null;
  trigger?: ValidateTrigger;
}

/**
 * 字段验证配置
 */
export interface FieldConfig extends IMethodRegister {
  /**
   * 触发事件
   */
  trigger?: ValidateTrigger;
  /**
   * 参数
   */
  params?: any[];
  /**
   * 验证规则是否生效, 返回true=验证生效
   */
  on?: (value: any, params: ValidateParams, fieldConfig: FieldConfig) => boolean;
}

/**
 * 验证配置
 * @example var rule: ValidateConfig<AddDto>;
 */
export type ValidateConfig<T> = { [P in keyof T]?: T[P] extends ValidValue ? FieldConfig[] : ValidateConfig<T[P]> };

export class ValidateError extends ValidateMethodError {
  /**
   * 验证元素
   */
  public input: HTMLElement | null;
  /**
   * 触发事件
   */
  public trigger?: ValidateTrigger;

  /**
   * 构造函数
   * @param value
   * @param params
   * @param message
   * @param validName
   * @param input
   * @param trigger
   */
  constructor(
    value: any,
    params: any[],
    message: string,
    validName: string,
    input: HTMLElement | null,
    trigger?: ValidateTrigger,
  ) {
    super(value, params, message, validName);
    this.input = input;
    this.trigger = trigger;
  }
}

/**
 * 验证核心
 */
export function Validate(value: any, configs: FieldConfig[] = [], params: ValidateParams): Promise<unknown> {
  const provider = new ValidateProvider();
  const runner = new ValidateRunnerAll(provider);
  const { label, input, trigger } = params;

  // 转换验证 配置
  configs.forEach((config) => {
    if (!config.trigger || !trigger || (config.trigger && trigger && (trigger & config.trigger) !== 0)) {
      if (config.on && !config.on(value, params, config)) {
        return;
      }
      if (config.method || config.name in ValidateMethods) {
        const validateLocal = (window as any).globalValidateLocal || ValidateMessage;
        let msg = config.errMsg || validateLocal[config.name] || '{{NAME}}验证失败';
        msg = msg.replace(/{{NAME}}/g, String(label) || '');
        provider.addByMethodRegister({
          name: config.name,
          method: config.method || (ValidateMethods as any)[config.name],
          errMsg: msg,
          format: config.format,
        });
        runner.add(new ValidateRunnerElement(config.name, value, [...(config.params || []), input]));
      }
    }
  });

  return runner.execute().catch((error: ValidateMethodError) => {
    return Promise.reject(new ValidateError(value, error.params, error.message, error.validName, input, trigger));
  });
}
