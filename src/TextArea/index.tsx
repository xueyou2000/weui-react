import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import useMergeValue from 'use-merge-value';
import './style';

export interface TextAreaProps {
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
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 值
   */
  value?: string;
  /**
   * 默认值
   */
  defaultValue?: string;
  /**
   * 输入框change事件
   */
  onChange?: (value: string) => void;
  /**
   * 占位符文本
   */
  placeholder?: string;
  /**
   * 自动焦点
   */
  autoFocus?: boolean;
  /**
   * 输入框焦点事件
   */
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /**
   * 输入框失去焦点事件
   */
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /**
   * 最大字符长度, 默认200
   */
  maxLength?: number;
  /**
   * 可见宽度
   */
  cols?: number;
  /**
   * 可见行数
   */
  rows?: number;
}

const TextArea = React.forwardRef<HTMLDivElement, TextAreaProps>((props, ref) => {
  const {
    prefixCls = 'weui-textarea',
    className,
    style,
    disabled,
    placeholder,
    autoFocus,
    onBlur,
    onFocus,
    rows = 3,
    cols,
    maxLength = 200,
    defaultValue = '',
  } = props;
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useMergeValue<string>(defaultValue, {
    value: props.value,
    onChange: props.onChange,
  });

  function changeValue(val: string) {
    if ((val + '').length <= maxLength) {
      setValue(val);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    changeValue(e.target.value);
  }

  useEffect(() => {
    const input = inputRef.current;
    if (autoFocus && input) {
      // 由于移动端autoFocus无法拉起键盘，则模拟触发事件
      const evt = document.createEvent('MouseEvent');
      evt.initEvent('click', true, true);
      input.dispatchEvent(evt);
    }
  }, []);

  return (
    <div className={classNames(prefixCls, className, { disabled })} style={style}>
      <textarea
        className={`${prefixCls}-inner`}
        ref={inputRef}
        value={value || ''}
        onChange={handleChange}
        autoFocus={autoFocus}
        disabled={disabled}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        maxLength={maxLength}
        cols={cols}
        rows={rows}
      />
      <div className={`${prefixCls}-counter`}>
        <span>{(value + '').length}</span>/{maxLength}
      </div>
    </div>
  );
});

export default TextArea;
