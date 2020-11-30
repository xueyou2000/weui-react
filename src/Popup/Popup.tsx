import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import useMergeValue from 'use-merge-value';
import { ENTERED, EXITED, useMount, usePortal, useTranstion } from 'utils-hooks';
import './style';

export type GetContainerFun = () => HTMLElement;

export interface PopupProps {
  /**
   * 附加类名
   */
  prefixCls?: string;
  /**
   * 动画类名
   */
  animateClassName?: string;
  /**
   * 弹出附加类名
   */
  popupClassName?: string;
  /**
   * 弹出框内容元素类名
   */
  popupContentClassName?: string;
  /**
   * 持续时间（毫秒）
   * @description 持续时间（毫秒）, 默认 3000 毫秒后关闭
   * @default 300
   */
  duration?: number;
  /**
   * 关闭事件
   */
  onUnmount?: Function;
  /**
   * 内容
   */
  children?: React.ReactNode;
  /**
   * 是否显示遮罩层
   */
  mask?: boolean;
  /**
   * 背景遮罩是否可关闭
   */
  maskClose?: boolean;
  /**
   * 是否显示
   */
  visible?: boolean;
  /**
   * 默认是否显示
   */
  defaultVisible?: boolean;
  /**
   * 显示改变
   */
  onVisibleChange?: (visible: boolean) => void;
  /**
   * 获取关闭函数
   */
  closeFuncRef?: React.MutableRefObject<Function | null>;
  /**
   * 获取关闭函数(用于js弹出)
   */
  getCloseFunc?: (close: Function) => void;
  /**
   * 返回一个容器来装载抽屉
   * @description 默认为body内创建一个div作为容器
   */
  getContainer?: HTMLElement | GetContainerFun;
  /**
   * 关闭事件 (动画完毕)
   */
  onClose?: Function;
  /**
   * 打开事件 (动画完毕)
   */
  onShow?: Function;
}

export default function Popup(props: PopupProps) {
  const {
    prefixCls = 'weui-popup',
    animateClassName = 'fade',
    popupClassName,
    popupContentClassName,
    duration,
    onUnmount,
    defaultVisible = false,
    children,
    getCloseFunc,
    closeFuncRef,
    mask = true,
    maskClose = true,
    getContainer,
    onClose,
    onShow,
  } = props;
  const [visible, setVisible] = useMergeValue<boolean>(defaultVisible, {
    value: props.visible,
    onChange: props.onVisibleChange,
  });
  const [ref, state] = useTranstion(visible);
  const firstFlagRef = useRef(visible);
  const opening = state.indexOf('en') !== -1;
  const animateclassString = classNames(animateClassName, `${animateClassName}-state-${state}`, {
    [`${animateClassName}-open`]: opening,
  });
  const [renderPortal] = usePortal(`${prefixCls}-wrapper`, getContainer);
  if (closeFuncRef) {
    closeFuncRef.current = () => setVisible(false);
  }
  if (getCloseFunc) {
    getCloseFunc(() => setVisible(false));
  }

  useMount(() => {
    let timeHandler: number;
    if (duration) {
      timeHandler = window.setTimeout(() => setVisible(false), duration);
    }
    return () => window.clearTimeout(timeHandler);
  });

  useEffect(() => {
    if (state === ENTERED) {
      firstFlagRef.current = true;
    } else if (state === EXITED && firstFlagRef.current === true) {
      if (onUnmount) {
        onUnmount();
      }
    }
    if (state === EXITED && onClose) {
      onClose();
    }
    if (state === ENTERED && onShow) {
      onShow();
    }
  }, [state]);

  return renderPortal(
    <div
      className={classNames(prefixCls, popupClassName, `${prefixCls}-state-${state}`, {
        [`${prefixCls}-open`]: opening,
      })}
    >
      <div
        className={classNames(`${prefixCls}-mask`, { 'hidden-mask': !mask })}
        onClick={() => maskClose && setVisible(false)}
      ></div>
      <div className={classNames(`${prefixCls}-content`, popupContentClassName, animateclassString)} ref={ref as any}>
        {children}
      </div>
    </div>,
  );
}
