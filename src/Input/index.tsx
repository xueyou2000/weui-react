import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import useMergeValue from 'use-merge-value';
import { useDebounceCallback } from 'utils-hooks';
import './style';

export type InputParser = (value: any) => string;

export interface InputProps {
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
   * 是否只读
   */
  readOnly?: boolean;
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
   * 匹配模式
   */
  pattern?: string;
  /**
   * 自动焦点
   */
  autoFocus?: boolean;
  /**
   * 最大字符长度
   */
  maxlength?: number;
  /**
   * 输入框类型
   */
  type?: 'text' | 'number' | 'password' | 'phone' | 'bankCard';
  /**
   * 输入框焦点事件
   */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * 输入框失去焦点事件
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * 开始输入中文
   */
  onCompositionStart?: (e: React.CompositionEvent<HTMLInputElement>) => void;
  /**
   * 输入中文完毕
   */
  onCompositionEnd?: (e: React.CompositionEvent<HTMLInputElement>) => void;
  /**
   * 搜索回调, 配合delay防抖
   */
  onSearch?: (value: string) => void;
  /**
   * 防抖毫秒, 默认 500ms, 关系到onSearch触发事件的频率
   */
  delay?: number;
  /**
   * 是否显示清除
   */
  clearable?: boolean;
  /**
   * 前置图标
   */
  prefix?: React.ReactNode;
  /**
   * 后置图标
   */
  suffix?: React.ReactNode;
  /**
   * 输入框展示值的格式化
   */
  formatter?: InputParser;
  /**
   * 从formatter里转换回来, 配合 formatter使用
   */
  parser?: InputParser;
  /**
   * 输入框引用
   */
  inputRef?: React.MutableRefObject<HTMLInputElement | null>;
}

const formatters = {
  phone: {
    in: (val: string) => {
      if (!val) {
        return '';
      }
      return val.replace(/\s/g, '').replace(/(.{3})(.)/g, '$1 $2');
    },
    out: (val: string) => {
      if (!val) {
        return '';
      }
      return val.replace(/\s/g, '');
    },
  },
  bankCard: {
    in: (val: string) => {
      if (!val) {
        return '';
      }
      return val.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');
    },
    out: (val: string) => {
      if (!val) {
        return '';
      }
      return val.replace(/\s/g, '');
    },
  },
};

const Input = React.forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const {
    prefixCls = 'weui-input',
    className,
    style,
    clearable = true,
    prefix,
    suffix,
    type = 'text',
    disabled,
    defaultValue = '',
    placeholder,
    pattern,
    autoFocus,
    maxlength,
    onBlur,
    onFocus,
    onCompositionStart,
    onCompositionEnd,
    onSearch,
    delay = 500,
    formatter,
    parser,
    readOnly,
  } = props;
  const [value, setValue] = useMergeValue<string>(defaultValue, {
    value: props.value,
    onChange: props.onChange,
  });
  const [focus, setFocus] = useState(autoFocus);
  const typing = useRef(false);
  const scrollTopRef = useRef(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  if (props.inputRef) {
    props.inputRef.current = inputRef.current;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (type in formatters) {
      setValue((formatters as any)[type].out(e.target.value));
    } else if (formatter && parser) {
      setValue(parser(e.target.value));
    } else {
      setValue(e.target.value);
    }
  }

  function format() {
    if (type in formatters) {
      return (formatters as any)[type].in(value);
    } else if (formatter && parser) {
      return formatter(value);
    } else {
      return value;
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    setTimeout(() => {
      setFocus(false);
      if (onBlur) {
        onBlur(e);
      }
      if (/webOS|iPhone|iPod/i.test(navigator.userAgent)) {
        if (document.activeElement?.nodeName !== 'INPUT') {
          // 移动端, 防止ios键盘底部突出
          document.body.scrollTop = scrollTopRef.current;
          document.documentElement.scrollTop = scrollTopRef.current;
        }
      }
    }, 100);
  }

  function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
    scrollTopRef.current = window.pageYOffset;
    setFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  }

  function handleCompositionStart(e: React.CompositionEvent<HTMLInputElement>) {
    typing.current = true;
    if (onCompositionStart) {
      onCompositionStart(e);
    }
  }

  function handleCompositionEnd(e: React.CompositionEvent<HTMLInputElement>) {
    typing.current = false;
    if (onCompositionEnd) {
      onCompositionEnd(e);
    }
  }

  function clear(e: React.TouchEvent<HTMLDivElement>) {
    setValue('');
    e.stopPropagation();
    e.preventDefault();
    inputFocus();
  }

  function handleClickClear(e: any) {
    clear(e);
  }

  function inputFocus() {
    const input = inputRef.current;
    if (input) {
      // 由于移动端autoFocus无法拉起键盘，则模拟触发事件
      const evt = document.createEvent('MouseEvent');
      evt.initEvent('click', true, true);
      input.dispatchEvent(evt);
    }
  }

  useDebounceCallback(
    () => {
      if (onSearch && !typing.current) {
        onSearch(value);
      }
    },
    delay,
    [value],
  );

  useEffect(() => {
    if (autoFocus) {
      // 由于移动端autoFocus无法拉起键盘，则模拟触发事件
      inputFocus();
    }
  }, []);

  return (
    <div
      className={classNames(prefixCls, className, {
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-focus`]: focus,
      })}
      style={style}
      ref={ref}
    >
      {prefix && <div className={`${prefixCls}-prefix`}>{prefix}</div>}
      <div className={`${prefixCls}-outter`}>
        <input
          ref={inputRef}
          className={`${prefixCls}-inner`}
          type={type in formatters ? 'text' : type}
          value={format() || ''}
          autoFocus={autoFocus}
          onChange={handleChange}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          pattern={focus ? pattern : undefined} // tips: 变通方式，为了不影响pattern调起数字键盘，但又不想格式化后影响表单验证
          maxLength={maxlength}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
        />
      </div>
      <div
        className={classNames(`${prefixCls}-clear`, { visible: focus && clearable && value })}
        onTouchStart={clear}
        onClick={handleClickClear}
      ></div>
      {suffix && <div className={`${prefixCls}-suffix`}>{suffix}</div>}
    </div>
  );
});

export default Input;
