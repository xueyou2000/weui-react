import { clamp } from '../utils/number-utils';
import classNames from 'classnames';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { animated, useSpring, useSprings } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import useMergeValue from 'use-merge-value';
import './style';

export interface SwiperProps {
  /**
   * 附加类名
   */
  prefixCls?: string;
  /**
   * 根节点的附加类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 包裹内容
   */
  children?: React.ReactNode;
  /**
   * 当前索引
   */
  index?: number;
  /**
   * 索引改变
   */
  onChange?: (index: number) => void;
  /**
   * 默认索引
   */
  defaultIndex?: number;
  /**
   * 是否自动播放
   */
  autoplay?: boolean;
  /**
   * 自动播放间隔
   */
  autoplayInterval?: number;
  /**
   * 是否垂直展示, 垂直展示请给组件提供固定高度
   */
  vertical?: boolean;
  /**
   * 是否滑动缩放特效
   */
  scaleMode?: boolean;
  /**
   * 自动高度. 此模式下非当前索引的元素会被`display: none;`形式隐藏
   */
  audoHeight?: boolean;
  /**
   * 是否显示面板指示点
   */
  dots?: boolean;
  /**
   * 拖拽切换距离, 默认0.5
   * 如果为0.5这样的百分比，则以元素尺寸的百分比计算
   */
  swiperDistance?: number;
  /**
   * 拖拽切换加速度, 默认4
   * 加速度越快，即可切换
   */
  swiperSpeed?: number;
  /**
   * 是否禁用触摸切换
   */
  disabled?: boolean;
}

export default function Swiper(props: SwiperProps) {
  const {
    prefixCls = 'weui-swiper',
    className,
    style,
    children,
    defaultIndex = 0,
    autoplay,
    autoplayInterval = 3000,
    vertical,
    scaleMode = false,
    audoHeight,
    dots = true,
    swiperDistance = 0.5,
    swiperSpeed = 3,
    disabled,
  } = props;
  const items = React.Children.toArray(children);
  const [index, setIndex] = useMergeValue<number>(defaultIndex, {
    value: props.index,
    onChange: props.onChange,
  });
  const [{ offset, scale }, set] = useSpring(() => ({ offset: 0, scale: 1 }));
  const sizeRef = useRef({ width: 0, height: 0 });
  const start = useRef(offset.get());
  const isMove = useRef(false);
  const [displays, setDisplays] = useSprings(items.length, (i) => ({
    display: index === i ? 'block' : 'none',
    top: 0,
  }));
  const cacheOffset = useRef(offset.get());
  const first = useRef(true);
  const insRef = useRef<HTMLDivElement | null>(null);

  function saveSize(ins: HTMLDivElement | null) {
    if (ins) {
      insRef.current = ins;
      sizeRef.current = { width: ins.clientWidth, height: ins.clientHeight };
    }
  }

  function toIndex(index: number, immediate = false) {
    var itemSize = vertical ? sizeRef.current.height : sizeRef.current.width;
    var nextOffset = -(index * itemSize);
    if (!first.current || vertical) {
      setDisplays((i) => ({ display: 'block', top: i * sizeRef.current.height, immediate: true }));
    } else {
      first.current = false;
    }

    function complete() {
      if (!isMove.current) {
        if (audoHeight && !vertical) {
          set({ offset: 0, immediate: true });
        }
        setDisplays((i) => ({
          display: index === i ? 'block' : 'none',
          top: i * itemSize,
          immediate: true,
        }));
      }
    }

    set({
      offset: nextOffset,
      immediate,
      onRest: complete,
      from: { offset: offset.get() },
    });
    cacheOffset.current = -(index * itemSize);
  }

  useEffect(() => {
    if (disabled) {
      toIndex(index, true);
    }
  }, [disabled, index]);

  useEffect(() => {
    toIndex(index);
  }, [index]);

  useEffect(() => {
    var handler: number | undefined;
    if (autoplay) {
      handler = window.setInterval(() => {
        if (!isMove.current) {
          setIndex(index + 1 >= items.length ? 0 : index + 1);
        }
      }, autoplayInterval);
    }
    return () => window.clearInterval(handler);
  }, [index, autoplay]);

  const bind = useDrag(
    ({ down, first, last, vxvy: [vx, vy], movement: [mx, my], direction: [xDir, yDir], distance, cancel }) => {
      if (disabled) {
        return;
      }
      var size = sizeRef.current;
      var itemSize = vertical ? size.height : size.width;
      var mv = vertical ? my : mx;
      var dir = vertical ? yDir : xDir;
      var v = vertical ? vy : vx;

      if (mv === 0) {
        return;
      }

      if (down && first) {
        start.current = cacheOffset.current;
        setDisplays((i) => ({ display: 'block', top: i * sizeRef.current.height, immediate: true }));
      }
      isMove.current = true;

      if (down && Math.abs(v) > swiperSpeed) {
        isMove.current = false;
        setIndex(clamp(index + (dir > 0 ? -1 : 1), 0, items.length - 1));
        cancel();
      }

      set({
        offset: clamp(start.current + mv, -(items.length - 1) * itemSize, 0),
        scale: down ? 1 - distance / size.width / 2 : 1,
        immediate: true,
      });

      if (last) {
        isMove.current = false;
        if (distance > (swiperDistance <= 1 ? itemSize * swiperDistance : swiperDistance)) {
          setIndex(clamp(index + (dir > 0 ? -1 : 1), 0, items.length - 1));
        } else {
          set({ offset: -(index * itemSize), scale: 1, immediate: false });
        }
      }
    },
    {
      axis: vertical ? 'y' : 'x',
      filterTaps: true,
      enabled: !disabled,
      eventOptions: { passive: true, capture: true },
    },
  );

  // 修复有时候内容突然尺寸变化，初次渲染时距离不对的问题
  useLayoutEffect(() => {
    const time = window.setTimeout(() => {
      saveSize(insRef.current);
      // 内容变化重新计算
      if (audoHeight) {
        setDisplays((i) => ({ display: 'block', top: i * sizeRef.current.height, immediate: true }));
      }
      toIndex(index, true);
    }, 100);

    return () => window.clearTimeout(time);
  }, []);

  return (
    <div className={classNames(prefixCls, className, { [`${prefixCls}-vertical`]: vertical })} style={style}>
      <animated.div
        {...bind()}
        ref={saveSize}
        className={`${prefixCls}-carousel`}
        style={{ [vertical ? 'top' : 'left']: offset }}
      >
        {displays.map(({ display, top }: any, i) => (
          <animated.div
            className={`${prefixCls}-item`}
            key={i}
            style={{ display: audoHeight ? display : 'block', scale: scaleMode ? scale : 1, top: vertical ? top : 0 }}
          >
            {items[i]}
          </animated.div>
        ))}
      </animated.div>
      {dots && (
        <div className={`${prefixCls}-decorator`}>
          <div className={`${prefixCls}-decorator-inner`}>
            {items.map((_, i) => (
              <div className={classNames(`${prefixCls}-dot`, { active: index === i })} key={i}>
                <span />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
