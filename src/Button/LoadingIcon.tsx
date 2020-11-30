import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import React, { useRef } from 'react';
import { animated, useSpring } from 'react-spring';

export interface LoadingIconProps {
  prefixCls: string;
  loading?: boolean;
}

const defaultProps = { width: 0, opacity: 0 };
export default function LoadingIcon({ prefixCls, loading }: LoadingIconProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const props = useSpring({
    to: async (next: Function) => {
      await next(loading ? { width: ref.current?.offsetWidth || 0, opacity: 1 } : defaultProps);
    },
    from: defaultProps,
    config: { duration: 100 },
  });

  return (
    <animated.span className={`${prefixCls}-loading-icon`} style={props as any}>
      <LoadingOutlined ref={ref} />
    </animated.span>
  );
}
