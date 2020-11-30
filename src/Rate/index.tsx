import classNames from 'classnames';
import React from 'react';
import './style';
import useMergeValue from 'use-merge-value';

export interface RateProps {
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
   * 评星数量(默认5星)
   */
  starCount?: number;
  /**
   * 选中值
   */
  value?: number;
  /**
   * 默认选中值
   */
  defaultValue?: number;
  /**
   * 改变事件
   */
  onChange?: (val: number) => void;
}

export default function Rate(props: RateProps) {
  const { prefixCls = 'weui-rate', className, style, starCount = 5, defaultValue = 1 } = props;
  const [value, setValue] = useMergeValue<number>(defaultValue, {
    value: props.value,
    onChange: props.onChange,
  });

  function changeValue(i: number) {
    if (i === value) {
      // 取消
      setValue(-1);
    } else {
      setValue(i);
    }
  }

  function createStarList() {
    let starList = [];

    for (let i = 1; i <= starCount; ++i) {
      const star = (
        <li
          key={i}
          className={classNames(`${prefixCls}-star`, `${prefixCls}-${value >= i ? 'full' : 'zero'}`)}
          onClick={() => changeValue(i)}
        >
          <i className={classNames('weui-icon-star', `${prefixCls}-second`)} />
        </li>
      );
      starList.push(star);
    }

    return starList;
  }

  return (
    <ul className={classNames(prefixCls, className)} style={style}>
      {createStarList()}
    </ul>
  );
}
