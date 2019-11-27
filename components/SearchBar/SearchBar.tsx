import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { useControll, useDebounceCallback } from "utils-hooks";
import { Icon } from "..";
import "./style";

export interface SearchBarProps {
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
     * 占位符
     */
    placeholder?: string;
    /**
     * 输入框change事件
     */
    onChange?: (value: string) => void;
    /**
     * 确定事件
     */
    onConfirm?: (value: string) => void;
    /**
     * 取消事件
     */
    onCancel?: () => void;
    /**
     * 值
     */
    value?: string;
    /**
     * 默认值
     */
    defaultValue?: string;
    /**
     * autoFocus
     */
    autoFocus?: boolean;
    /**
     * 防抖毫秒
     * 默认 500ms
     * @description 关系到onSearch触发事件的频率
     */
    delay?: number;
    /**
     * 是否键盘输入完再回填
     * @description 比如输入中文时候, 可有优化
     */
    backfill?: boolean;
    /**
     * 搜索回调
     * @description 搜索内容改变触发
     */
    onSearch?: (value: string) => void;
}

const SearchBar = React.forwardRef((props: SearchBarProps, ref: React.MutableRefObject<any>) => {
    const { prefixCls = "weui-search-bar", className, style, placeholder = "搜索", onChange, onConfirm, autoFocus = false, onCancel, onSearch, delay = 200, backfill = true } = props;
    const [value, setValue, isControll] = useControll(props, "value", "defaultValue");
    const typingRef = useRef(false);
    const searchRef = useRef("");
    const [focus, setFocus] = useState(autoFocus);
    const inputRef = ref || useRef(null);

    useDebounceCallback(
        () => {
            if (onSearch) {
                if (backfill) {
                    if (typingRef.current === false) {
                        onSearch(value);
                    }
                } else {
                    onSearch(value);
                }
            }
        },
        delay,
        [searchRef.current],
    );

    function compositionStartHandle(e: React.CompositionEvent<HTMLInputElement>) {
        typingRef.current = true;
    }

    function compositionEndHandle(e: React.CompositionEvent<HTMLInputElement>) {
        typingRef.current = false;
    }

    function changeValue(val: string) {
        if (!isControll) {
            setValue(val);
        }

        if (onChange) {
            onChange(val);
        }
    }

    function searchChangeHandle(event: React.ChangeEvent<HTMLInputElement>) {
        const val = event.target.value;
        searchRef.current = val;
        changeValue(val);
    }

    function focusHandle(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFocus(true);
    }

    function clearHandle(event: React.MouseEvent<HTMLElement, MouseEvent>) {
        changeValue(null);

        inputFocus();
    }

    function cancelHandle() {
        if (onCancel) {
            onCancel();
        }
        setFocus(false);
        changeValue(null);
    }

    function inputFocus(hide = false) {
        const input = inputRef.current as HTMLInputElement;
        if (input) {
            if (hide) {
                input.blur();
            } else {
                input.focus();
            }
        }
    }

    useEffect(() => {
        if (autoFocus) {
            inputFocus();
        }
    }, [autoFocus]);

    useEffect(() => {
        if (focus) {
            inputFocus();
        }
    }, [focus, inputRef.current]);

    function submitHandle(event: React.FormEvent<HTMLFormElement>) {
        if (onConfirm) {
            onConfirm(value);
        }

        event.stopPropagation();
        event.preventDefault();
        return false;
    }

    return (
        <div className={classNames(prefixCls, className, { focus })} style={style}>
            <form className={`${prefixCls}__form`} onSubmit={submitHandle}>
                <div className={`${prefixCls}__box`}>
                    <Icon icon="search" />
                    <input
                        ref={inputRef}
                        type="search"
                        className={`${prefixCls}__input`}
                        placeholder={placeholder}
                        autoFocus={autoFocus}
                        onChange={searchChangeHandle}
                        onFocus={focusHandle}
                        value={value || ""}
                        onCompositionStart={compositionStartHandle}
                        onCompositionEnd={compositionEndHandle}
                    />
                    <Icon icon="clear" onClick={clearHandle} />
                </div>
                <label className={`${prefixCls}__label`} onClick={() => setFocus(true)}>
                    <Icon icon="search" />
                    <span>{placeholder}</span>
                </label>
            </form>
            <a className={`${prefixCls}__cancel-btn`} onClick={cancelHandle}>
                取消
            </a>
        </div>
    );
});

export default React.memo(SearchBar);
