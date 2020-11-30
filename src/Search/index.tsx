import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import useMergeValue from 'use-merge-value';
import './style';
import Input from '../Input';
import { SearchOutlined } from '@ant-design/icons';
import { animated, useSpring } from 'react-spring';

export interface SearchProps {
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
   * 搜索回调, 配合delay防抖
   */
  onSearch?: (value: string) => void;
  /**
   * 确定事件
   */
  onConfirm?: (value: string) => void;
  /**
   * 点击取消事件
   */
  onCancel?: () => void;
  /**
   * 防抖毫秒, 默认 500ms, 关系到onSearch触发事件的频率
   */
  delay?: number;
  /**
   * 占位符文本
   */
  placeholder?: string;
  /**
   * 自动焦点
   */
  autoFocus?: boolean;
}

export default function Search(props: SearchProps) {
  const {
    prefixCls = 'weui-search',
    className,
    style,
    placeholder,
    autoFocus = false,
    onSearch,
    onCancel,
    delay,
    onConfirm,
    defaultValue = '',
  } = props;
  const [value, setValue] = useMergeValue<string>(defaultValue, {
    value: props.value,
    onChange: props.onChange,
  });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [focus, setFocus] = useState(autoFocus);
  const [phWidth, setPhWidth] = useState(0);
  const [btnWidth, setBtnWidth] = useState(0);

  function savePh(ins: HTMLDivElement | null) {
    if (ins) {
      setPhWidth(ins.clientWidth);
    }
  }

  function saveBtn(ins: HTMLElement | null) {
    if (ins) {
      setBtnWidth(ins.clientWidth);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (onConfirm) {
      onConfirm(value);
    }
    inputBlur();
    event.stopPropagation();
    event.preventDefault();
    return false;
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    if (!value) {
      setFocus(false);
    }
  }

  function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
    setFocus(true);
  }

  function handleCancel() {
    setValue('');
    inputBlur();
    setFocus(false);
    if (onCancel) {
      onCancel();
    }
  }

  function inputFocus() {
    const input = inputRef.current;
    if (input) {
      const evt = document.createEvent('MouseEvent');
      evt.initEvent('click', true, true);
      input.dispatchEvent(evt);
    }
  }

  function inputBlur() {
    const input = inputRef.current;
    if (input) {
      input.blur();
    }
  }

  useEffect(() => {
    if (focus) {
      inputFocus();
    }
  }, [focus]);

  return (
    <div className={classNames(prefixCls, className, { focus, 'has-value': !!value })} style={style}>
      <form className={`${prefixCls}__form`} onSubmit={handleSubmit}>
        <div
          className={`${prefixCls}__synthetic-ph`}
          onClick={() => setFocus(true)}
          style={{ width: focus ? phWidth : '100%' }}
        >
          <div className="synthetic-ph__inner" ref={savePh}>
            <SearchOutlined className="search-icon" />
            <span className="search_txt">{placeholder}</span>
          </div>
        </div>
        <Input
          className={`${prefixCls}__input`}
          inputRef={inputRef}
          value={value}
          onChange={setValue}
          onSearch={onSearch}
          delay={delay}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </form>
      <a className="cancel-btn" ref={saveBtn} style={{ marginRight: focus ? 0 : -btnWidth }} onClick={handleCancel}>
        取消
      </a>
    </div>
  );
}
