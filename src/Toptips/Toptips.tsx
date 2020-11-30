import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import useMergeValue from 'use-merge-value';
import { useMount, usePortal } from 'utils-hooks';
import { GetContainerFun, PopupProps } from '../Popup/Popup';
import './style';

export interface ToptipsProps extends PopupProps {
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
   * 类型
   */
  type?: 'success' | 'fail' | 'default' | string;
  /**
   * 提示内容
   */
  tips?: React.ReactNode;
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
   * 关闭事件
   */
  onUnmount?: Function;
  /**
   * 返回一个容器来装载抽屉
   * @description 默认为body内创建一个div作为容器
   */
  getContainer?: HTMLElement | GetContainerFun;
  /**
   * 持续时间（毫秒）, 默认 3000 毫秒后关闭
   * @default 300
   */
  duration?: number;
  /**
   * 距离顶部边距, 默认 20px
   */
  top?: number;
}

// BUG: #1 由于组件在新创建的body > div 层次中，导致useDrag的阻止事件冒泡不生效，会穿透点击

export default function Toptips(props: ToptipsProps) {
  const {
    prefixCls = 'weui-toptips',
    className,
    style,
    type = 'default',
    tips,
    duration = 3000,
    defaultVisible = false,
    getCloseFunc,
    getContainer,
    top = 20,
    onUnmount,
  } = props;
  const [renderPortal] = usePortal('', getContainer);
  const [height, setheight] = useState(200);
  const [{ y }, set] = useSpring(() => ({ y: -height - top }));
  const [visible, setVisible] = useMergeValue<boolean>(defaultVisible, {
    value: props.visible,
    onChange: props.onVisibleChange,
  });
  if (getCloseFunc) {
    getCloseFunc(() => setVisible(false));
  }

  function saveRef(ins: HTMLDivElement | null) {
    if (ins && height === 200) {
      setheight(ins.scrollHeight);
    }
  }

  function open() {
    set({ y: top, immediate: false, config: config.stiff });
    setVisible(true);
  }

  function close() {
    set({
      y: -height - top,
      immediate: false,
      onRest: (result) => {
        if (result.finished && result.value.y !== top) {
          // 关闭过渡执行完毕
          if (onUnmount) {
            onUnmount();
          }
        }
      },
    });
    setVisible(false);
  }

  useEffect(() => {
    if (visible) {
      set({ y: top });
    } else {
      set({ y: -height - top });
    }
  }, [visible]);

  useMount(() => {
    let timeHandler: number;
    if (duration) {
      timeHandler = window.setTimeout(() => close(), duration);
    }
    return () => window.clearTimeout(timeHandler);
  });

  const bind = useDrag(
    ({ last, down, vxvy: [, vy], movement: [_, my] }) => {
      if (last) {
        my < height * -0.5 || vy > 0.7 ? close() : open();
      } else if (down) {
        set({ y: my, immediate: true });
      }
    },
    { initial: () => [0, y.get()], axis: 'y', bounds: { bottom: top } },
  );

  return renderPortal(
    <animated.div
      {...bind()}
      ref={saveRef}
      className={`${prefixCls}-wrapper`}
      style={{ y, opacity: y.to([-height - top, top], [0.3, 1], 'clamp') as any }}
    >
      <div className={classNames(prefixCls, className, `${prefixCls}-type-${type}`)} style={style}>
        {tips}
      </div>
    </animated.div>,
  );
}
