import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { useOutsideClick } from 'utils-hooks';
import './style';

export interface SwiperActionProps {
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
   * 包裹内容
   */
  children?: React.ReactNode;
  /**
   * 左侧按钮组
   */
  left?: React.ReactNode[];
  /**
   * 右侧按钮组
   */
  right?: React.ReactNode[];
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否点击内容收起操作按钮
   */
  clickContent?: boolean;
}

enum Direction {
  Left,
  Right,
  None,
}

export default function SwiperAction(props: SwiperActionProps) {
  const {
    prefixCls = 'weui-swiper-action',
    className,
    style,
    children,
    left,
    right,
    disabled,
    clickContent = true,
  } = props;
  const warpRef = useRef<HTMLDivElement | null>(null);
  const [leftWidth, setLeftWidth] = useState(0);
  const [rightWidth, setRightWidth] = useState(0);
  const [{ x }, set] = useSpring(() => ({ x: 0 }));
  const directionRef = useRef(Direction.None);

  function show() {
    set({
      x: directionRef.current === Direction.Left ? leftWidth : -rightWidth,
      immediate: false,
      config: config.stiff,
    });
  }

  function hide() {
    set({ x: 0, immediate: false });
    directionRef.current = Direction.None;
  }

  const bind = useDrag(
    ({ first, last, down, direction: _d, movement: [mx], cancel, event }) => {
      let dc = directionRef.current;
      if (first) {
        // x轴方向值为-1, 则代表左滑动，想展示右侧操作按钮
        dc = _d[0] >= 0 ? Direction.Left : Direction.Right;
        directionRef.current = dc;
      }
      if (last) {
        if (dc === Direction.Left) {
          mx > leftWidth * 0.5 ? show() : hide();
        } else {
          mx < -rightWidth * 0.5 ? show() : hide();
        }
      } else {
        if (down) {
          set({ x: mx, immediate: true });
        } else if (clickContent) {
          cancel();
        }
      }
    },
    {
      initial: () => [x.get(), 0],
      axis: 'x',
      filterTaps: true,
      rubberband: true,
      enabled: !disabled,
      bounds: {
        left: -rightWidth,
        right: leftWidth,
      },
    },
  );

  function saveWidth(direction: Direction, ins: HTMLDivElement | null) {
    if (!ins) {
      return;
    }
    const width = ins.offsetWidth;
    direction === Direction.Left ? setLeftWidth(width) : setRightWidth(width);
  }

  function proxyClick(x: any, e: any) {
    hide();
    if (x.props.onClick) {
      x.props.onClick(e);
    }
  }

  useOutsideClick([warpRef.current] as any, () => {
    hide();
  });

  return (
    <div className={classNames(prefixCls, className)} style={style} ref={warpRef}>
      <animated.div className={`${prefixCls}-content`} {...bind()} style={{ x }}>
        {children}
      </animated.div>
      {left && (
        <animated.div
          className={`${prefixCls}-actions actions-left`}
          ref={(ins) => saveWidth(Direction.Left, ins)}
          style={{ x, left: -leftWidth }}
        >
          {left.map((x, i) =>
            React.cloneElement(x as any, { className: `${prefixCls}-btn`, key: i, onClick: (e) => proxyClick(x, e) }),
          )}
        </animated.div>
      )}
      {right && (
        <animated.div
          className={`${prefixCls}-actions actions-right`}
          ref={(ins) => saveWidth(Direction.Right, ins)}
          style={{ x }}
        >
          {right.map((x, i) =>
            React.cloneElement(x as any, {
              className: `${prefixCls}-btn`,
              key: i,
              onClick: (e) => proxyClick(x, e),
            }),
          )}
        </animated.div>
      )}
    </div>
  );
}
