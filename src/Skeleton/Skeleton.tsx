import classNames from 'classnames';
import React from 'react';
import { Flex, FlexItem } from '../Flex';
import Stripe from './Stripe';
import './style';

export interface SkeletonProps {
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
   * 是否显示加载状态
   */
  loading?: boolean;
  /**
   * 显示多少行骨架
   */
  rows?: number;
  /**
   * 包裹内容
   */
  children?: React.ReactNode;
}

const ColConfig = [[22], [8, 15], [6, 18], [13, 9], [4, 3, 16], [8, 6, 8]];

export default function Skeleton(props: SkeletonProps) {
  const { prefixCls = 'weui-skeleton', className, style, loading, rows = 6, children } = props;

  const content = [];
  for (let i = 0; i < rows; ++i) {
    const cfgIndex = i % ColConfig.length;
    content.push(
      <Flex gutter={8} key={i}>
        {ColConfig[cfgIndex].map((d, j) => (
          <FlexItem key={j} span={d}>
            <Stripe style={{ animationDelay: `${j * 0.5}s` }} />
          </FlexItem>
        ))}
      </Flex>,
    );
  }

  return (
    <div className={classNames(prefixCls, className, { loading })} style={style}>
      {loading ? content : children}
    </div>
  );
}
