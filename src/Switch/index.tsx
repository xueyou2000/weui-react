import classNames from 'classnames';
import React from 'react';
import useMergeValue from 'use-merge-value';
import './style';

export interface SwitchProps {
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
   * 复选框是否选中
   */
  checked?: boolean;
  /**
   * Switch值更改事件
   */
  onChange?: (chcked: boolean) => void;
  /**
   * 默认是否选中
   */
  defaultChecked?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 选中时得内容
   */
  checkedNode?: React.ReactNode;
  /**
   * 非选中时得内容
   */
  unCheckedNode?: React.ReactNode;
  /**
   * 尺寸
   */
  size?: 'default' | 'small' | 'large';
}

const Switch = React.forwardRef<HTMLSpanElement, SwitchProps>((props, ref) => {
  const {
    prefixCls = 'weui-switch',
    className,
    style,
    disabled,
    checkedNode,
    unCheckedNode,
    size = 'default',
    defaultChecked = false,
  } = props;
  const [checked, setChecked] = useMergeValue<boolean>(defaultChecked, {
    value: props.checked,
    onChange: props.onChange,
  });

  function checkedChange(ck: boolean) {
    if (disabled) {
      return;
    }
    setChecked(ck);
  }

  function handleCheckChange(e: React.ChangeEvent<HTMLInputElement>) {
    checkedChange(e.target.checked);
  }

  return (
    <span
      className={classNames(prefixCls, className, `${prefixCls}-size-${size}`, {
        [`${prefixCls}-checked`]: checked,
        [`${prefixCls}-disabled`]: disabled,
      })}
      style={style}
      ref={ref}
    >
      <span className={`${prefixCls}-inner`}>{checked ? checkedNode : unCheckedNode}</span>
      <input
        className={`${prefixCls}-input`}
        type="checkbox"
        checked={checked}
        onChange={handleCheckChange}
        disabled={disabled}
      />
    </span>
  );
});

export default Switch;
