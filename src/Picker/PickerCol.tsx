import { clamp } from '@/utils/number-utils';
import classNames from 'classnames';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import './style';
import { getDefaultPickerValue, PickerItem } from './utils';

export interface PickerColProps {
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
   * 数据源
   */
  data: PickerItem[];
  /**
   * 选中值
   */
  value?: any;
  /**
   * 选中值改变
   */
  onChange?: (value: string) => void;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 重置
   */
  getScrollOffsetRest?: (func: Function) => void;
}

export default function PickerCol(props: PickerColProps) {
  const { prefixCls = 'weui-picker', className, style, data, onChange, disabled, getScrollOffsetRest } = props;
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(getDefaultPickerValue(data, props.value));
  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  useEffect(() => {
    rest(false, props.value);
    if (props.value !== value) {
      setValue(props.value);
    }
  }, [props.value, value]);

  function rest(immediate = true, val?: any) {
    // 根据value,滚动到对应距离
    set({ y: calcOffset(data.findIndex((x) => x.value === (val === undefined ? value : val))), immediate });
  }

  // tips: 在HalfScreenDialog等地方，元素被隐藏了，所以获取不到正确的dom尺寸，需要被显示时修复. 所以暴露出一个方法，用于重置
  if (getScrollOffsetRest) {
    getScrollOffsetRest(rest);
  }

  function getDomsHeight() {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      const offsetTop = (wrapper.querySelector(`.${prefixCls}__indicator`) as HTMLDivElement)?.offsetTop || 96;
      const itemHeight = (wrapper.querySelector(`.${prefixCls}__item`) as HTMLDivElement)?.clientHeight || 48;

      return {
        offsetTop,
        itemHeight,
      };
    } else {
      return { offsetTop: 96, itemHeight: 48 };
    }
  }

  /**
   * 计算偏移
   * @param i 选中索引
   */
  function calcOffset(i: number) {
    // tips: 由于picker是中间显示当前值，所以要偏移indicator的距离
    const { offsetTop, itemHeight } = getDomsHeight();
    if (i === -1) {
      return offsetTop;
    }
    return offsetTop - i * itemHeight;
  }

  /**
   * 计算索引
   *
   * @param offset  偏移量
   */
  function calcIndex(offset: number) {
    // tips: 由于picker是中间显示当前值，所以要偏移indicator的距离
    const { offsetTop, itemHeight } = getDomsHeight();
    return Math.round((offsetTop - offset) / itemHeight);
  }

  const bind = useDrag(
    ({ last, vxvy: [, vy], movement: [, my], down, cancel, canceled }) => {
      if (last) {
        const { offsetTop } = getDomsHeight();
        const offset = clamp(my, calcOffset(data.length - 1), offsetTop);
        const i = clamp(calcIndex(offset), 0, data.length - 1);
        const item = data[i];
        if (item.disabled) {
          rest(false);
        } else {
          set({ y: calcOffset(i), immediate: false });
          if (value !== item.value) {
            setValue(item.value);
            if (onChange) {
              onChange(item.value);
            }
          }
        }
      } else if (down) {
        set({ y: my, immediate: false });
      }
    },
    {
      initial: () => [0, y.get()],
      filterTaps: true,
      axis: 'y',
      rubberband: true,
      enabled: !disabled,
    },
  );

  useLayoutEffect(() => {
    // 修复wrapperRef尺寸一开始不正确的问题
    const time = window.setTimeout(() => {
      rest();
    }, 100);
    return () => window.clearTimeout(time);
  }, []);

  return (
    <div className={classNames(`${prefixCls}__col`, className)} style={style} ref={wrapperRef} {...bind()}>
      <div className={`${prefixCls}__mask`}></div>
      <div className={`${prefixCls}__indicator`}></div>
      <animated.div className={`${prefixCls}__content`} style={{ y }}>
        {data.map((x, i) => (
          <div
            className={classNames(`${prefixCls}__item`, {
              [`${prefixCls}__disabled`]: x.disabled,
            })}
            key={i}
          >
            {x.label}
          </div>
        ))}
      </animated.div>
    </div>
  );
}
