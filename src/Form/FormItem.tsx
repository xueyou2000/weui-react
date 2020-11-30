import classNames from 'classnames';
import React, { useContext, useState } from 'react';
import { ListItem } from '../List';
import FormContext from './context/FormContext';
import useField, { UseFieldConfig } from './hooks/useField';
import { ValidateResult } from './utils/validate';
import Toast from '../Toast';

export interface FormItemProps extends Pick<Partial<UseFieldConfig>, Exclude<keyof Partial<UseFieldConfig>, 'label'>> {
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
   * 标签名称
   */
  label?: React.ReactNode;
  /**
   * 右侧扩展内容
   */
  extra?: React.ReactNode;
  /**
   * 箭头方向
   */
  arrow?: 'horizontal' | 'up' | 'down' | boolean;
  /**
   * 是否点击交互样式
   */
  access?: boolean;
  /**
   * 点击label是否显示验证失败原因
   */
  clickShowError?: boolean;
  /**
   * 内容对齐方式
   */
  align?: 'left' | 'center' | 'right';
  /**
   * 是否精简模式，不显示List样式
   */
  simple?: boolean;
  /**
   * 标签位置
   */
  labelPostion?: 'left' | 'top';
  /**
   * 垂直对齐方式
   */
  alignItems?: 'center' | 'flex-end' | 'flex-start';
  /**
   * 列表点击事件
   */
  onClick?: () => void;
}

export default function FormItem(props: FormItemProps) {
  const {
    prefixCls = 'weui-form-item',
    className,
    style,
    children,
    label,
    extra,
    arrow,
    access = true,
    clickShowError = true,
    align,
    simple = false,
    labelPostion,
    alignItems,
    onChange,
    onClick,
    ...rest
  } = props;

  const child = React.Children.only(children) as any;
  const formContext = useContext(FormContext);
  const [validateResult, setValidateResult] = useState<ValidateResult>({ status: true, msg: undefined });
  const disabled =
    'disabled' in child.props ? child.props.disabled : 'disabled' in props ? props.disabled : formContext.disabled;
  const classString = classNames(prefixCls, className, `${prefixCls}-pos-${labelPostion || formContext.labelPostion}`, {
    [`${prefixCls}-error`]: !validateResult.status,
    [`${prefixCls}-disabled`]: disabled,
  });

  function handleValidateChange(value: any, res: ValidateResult) {
    setValidateResult(res);
    if (props.onValidateChange) {
      props.onValidateChange(value, res);
    }
  }

  function showError() {
    if (clickShowError && !validateResult.status && validateResult.msg) {
      Toast.fail(validateResult.msg);
    }
  }

  const proxyInput = rest.prop
    ? React.cloneElement(
        child,
        Object.assign(
          {},
          child.props,
          useField(
            Object.assign(rest, {
              onValidateChange: handleValidateChange,
              disabled,
              onChange: (val: any) => {
                if (onChange) {
                  onChange(val);
                }
                if (child.props.onChange) {
                  child.props.onChange(val);
                }
              },
              labelString: props.labelString || typeof label === 'string' ? label : null,
            }) as UseFieldConfig,
          ),
        ),
      )
    : children;

  if (simple) {
    return proxyInput as any;
  } else {
    return (
      <ListItem
        className={classString}
        style={style}
        arrow={arrow}
        extra={extra}
        align={align}
        onClick={onClick}
        alignItems={alignItems}
        hd={
          label && (
            <span className={`${prefixCls}-label`} style={{ width: formContext.labelWidth }} onClick={showError}>
              {label}
            </span>
          )
        }
        access={props.disabled ? false : access}
      >
        {proxyInput}
      </ListItem>
    );
  }
}
