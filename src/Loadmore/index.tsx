import React from 'react';
import classNames from 'classnames';
import { MultistageLoading } from '../Loading';
import './style';

export interface LoadmoreProps {
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
   * 加载模式
   */
  loading?: boolean;
  /**
   * 横线模式
   */
  line?: boolean;
  /**
   * 点模式
   */
  dot?: boolean;
  /**
   * 提示文本
   */
  tips?: string;
  /**
   * 自定义图标
   */
  icon?: React.ReactNode;
}

export default function Loadmore(props: LoadmoreProps) {
  const { prefixCls = 'weui-loadmore', className, style, loading, line, dot, tips, icon } = props;
  const classString = classNames(prefixCls, className, {
    [`${prefixCls}-dot`]: dot || !tips,
    [`${prefixCls}-line`]: dot || line || !loading,
    [`${prefixCls}-loading`]: loading,
  });

  return (
    <div className={classString} style={style}>
      {loading && <MultistageLoading />} {icon}
      <span className={`${prefixCls}-tips`}>{tips}</span>
    </div>
  );
}
