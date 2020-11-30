import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { DefineDefaultValue } from 'utils-hooks';
import { Popup } from '../Popup';
import { PopupProps } from '../Popup/Popup';
import './style';
import { keyboradDown } from './utils';

export interface AmountKeyBoardProps extends PopupProps {
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
   * 确认按钮
   */
  confirmBtn?: React.ReactNode;
  /**
   * 清除按钮
   */
  cleanBtn?: React.ReactNode;
  /**
   * 是否打开数字键盘
   */
  visible?: boolean;
  /**
   * 默认是否打开数字键盘
   */
  defaultVisible?: boolean;
  /**
   * 可视改变事件
   */
  onVisibleChange?: (visible: boolean) => void;
  /**
   * 金额
   */
  value?: number;
  /**
   * 默认金额
   */
  defaultVlue?: number;
  /**
   * 键盘键入事件
   */
  onChange?: (amount: number, amountStr: string) => void;
  /**
   * 确认事件
   */
  onConfirm?: (amount: number, amountStr: string) => void;
}

const AmountKeyBoard = React.forwardRef<HTMLDivElement, AmountKeyBoardProps>((props, ref) => {
  const {
    prefixCls = 'weui-keyboard',
    className,
    style,
    confirmBtn = (
      <span className="submit-btn">
        <div>确</div>
        <div>定</div>
      </span>
    ),
    cleanBtn = '清',
    value,
    defaultVlue = 0,
    onChange,
    onConfirm,
    ...rest
  } = props;
  const lastBtn = useRef<HTMLElement | null>(null);
  const closeRef = useRef<Function | null>(null);
  const [amountStr, setAmountStr] = useState(DefineDefaultValue(props, 'value', 'defaultValue') + '' || '');

  function changeAmount(amountStr: string) {
    let _realAmount = parseFloat(amountStr);
    if (amountStr == '') {
      _realAmount = 0;
    }
    setAmountStr(amountStr);
    if (props.onChange) {
      props.onChange(_realAmount, amountStr);
    }
  }

  useEffect(() => {
    setAmountStr(props.value + '');
  }, [props.value]);

  function close() {
    if (closeRef.current) {
      closeRef.current();
    }
  }

  function handleKeyTouchStart(e: React.TouchEvent<HTMLAnchorElement>) {
    if (lastBtn.current) {
      lastBtn.current.classList.remove('down');
    }
    lastBtn.current = e.currentTarget;
    const key = e.currentTarget as HTMLElement;
    const code = key.getAttribute('data-code');
    if (code === undefined) {
      return;
    }
    key.classList.add('down');
  }

  function handleKeyTouchEnd(e: React.TouchEvent<HTMLAnchorElement>) {
    const key = e.currentTarget as HTMLElement;
    const code = key.getAttribute('data-code');
    if (code !== undefined && code !== null) {
      const navigator = window.navigator as any;
      navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
      if (navigator.vibrate) {
        window.navigator.vibrate(300);
      }
      changeAmount(keyboradDown(amountStr, code));
      setTimeout(() => {
        if (lastBtn.current) {
          lastBtn.current.classList.remove('down');
        }
      }, 100);
    }
  }

  function handleConfirm() {
    if (onConfirm) {
      let _realAmount = parseFloat(amountStr);
      if (amountStr == '') {
        _realAmount = 0;
      }
      onConfirm(_realAmount, amountStr);
    }
    close();
  }

  return (
    <Popup
      {...rest}
      mask={false}
      closeFuncRef={closeRef}
      animateClassName="drill"
      popupContentClassName={`${prefixCls}-wrapper`}
    >
      <div className={classNames(prefixCls, className)} style={style} ref={ref}>
        <div className={`${prefixCls}-inner`}>
          <a
            className={classNames(`${prefixCls}-key`, 'left-0 top-0')}
            data-code="1"
            onTouchStart={handleKeyTouchStart}
            onTouchEnd={handleKeyTouchEnd}
          >
            1
          </a>
          <a
            className={classNames(`${prefixCls}-key`, 'left-1 top-0')}
            data-code="2"
            onTouchStart={handleKeyTouchStart}
            onTouchEnd={handleKeyTouchEnd}
          >
            2
          </a>
          <a
            className={classNames(`${prefixCls}-key`, 'left-2 top-0')}
            data-code="3"
            onTouchStart={handleKeyTouchStart}
            onTouchEnd={handleKeyTouchEnd}
          >
            3
          </a>
          <a
            className={classNames(`${prefixCls}-key`, 'left-0 top-1')}
            data-code="4"
            onTouchStart={handleKeyTouchStart}
            onTouchEnd={handleKeyTouchEnd}
          >
            4
          </a>
          <a
            className={classNames(`${prefixCls}-key`, 'left-1 top-1')}
            data-code="5"
            onTouchStart={handleKeyTouchStart}
            onTouchEnd={handleKeyTouchEnd}
          >
            5
          </a>
          <a
            className={classNames(`${prefixCls}-key`, 'left-2 top-1')}
            data-code="6"
            onTouchStart={handleKeyTouchStart}
            onTouchEnd={handleKeyTouchEnd}
          >
            6
          </a>
          <a
            className={classNames(`${prefixCls}-key`, 'left-0 top-2')}
            data-code="7"
            onTouchStart={handleKeyTouchStart}
            onTouchEnd={handleKeyTouchEnd}
          >
            7
          </a>
          <a
            className={classNames(`${prefixCls}-key`, 'left-1 top-2')}
            data-code="8"
            onTouchStart={handleKeyTouchStart}
            onTouchEnd={handleKeyTouchEnd}
          >
            8
          </a>
          <a
            className={classNames(`${prefixCls}-key`, 'left-2 top-2')}
            data-code="9"
            onTouchStart={handleKeyTouchStart}
            onTouchEnd={handleKeyTouchEnd}
          >
            9
          </a>
          <a
            className={classNames(`${prefixCls}-key`, 'left-0 top-3')}
            data-code="clear"
            onTouchStart={handleKeyTouchStart}
            onTouchEnd={handleKeyTouchEnd}
          >
            {cleanBtn}
          </a>
          <a
            className={classNames(`${prefixCls}-key`, 'left-1 top-3')}
            data-code="0"
            onTouchStart={handleKeyTouchStart}
            onTouchEnd={handleKeyTouchEnd}
          >
            0
          </a>
          <a
            className={classNames(`${prefixCls}-key`, 'left-2 top-3')}
            data-code="."
            onTouchStart={handleKeyTouchStart}
            onTouchEnd={handleKeyTouchEnd}
          >
            .
          </a>
          <a
            className={classNames(`${prefixCls}-key`, 'left-3 top-0')}
            data-code="backspace"
            onTouchStart={handleKeyTouchStart}
            onTouchEnd={handleKeyTouchEnd}
          >
            <img src={require('./backspace.png')} alt="" />
          </a>
          <a className={classNames(`${prefixCls}-key`, 'left-3 top-1 confirm-btn')} onClick={handleConfirm}>
            {confirmBtn}
          </a>
        </div>
      </div>
    </Popup>
  );
});

export default AmountKeyBoard;
