import { clamp } from '../utils/number-utils';
import classNames from 'classnames';
import React, { useContext, useEffect, useRef } from 'react';
import { animated, config, useSpring } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import GalleryContext from './context';
import './style';

export interface ImageViewProps {
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
   * 图片地址
   */
  src: string;
  /**
   * 索引
   */
  index: number;
  /**
   * 缩放改变
   */
  onScaleChange?: (scale: number) => void;
}

export default function ImageView(props: ImageViewProps) {
  const { prefixCls = 'weui-image-view', className, style, src, index, onScaleChange } = props;
  const [spring, setSpring] = useSpring(() => ({ from: { zoom: 1, rotate: 0, scale: 1, x: 0, y: 0 } }));
  const context = useContext(GalleryContext);
  const lastRotateGoal = useRef(0);

  function rotate() {
    const r = (lastRotateGoal.current + 90) % 361;
    setSpring({
      rotate: r,
      immediate: false,
      onRest: () => {
        if (r === 360) {
          setSpring({ rotate: 0, immediate: true });
        }
      },
    });
    lastRotateGoal.current = r === 360 ? 0 : r;
  }

  function zoom(scale?: number) {
    var _scale = spring.scale.get();
    switch (_scale) {
      case 1:
        _scale = 2.5;
        break;
      default:
        _scale = 1;
    }
    var attr: any = { scale: scale || _scale };
    if (attr.scale <= 1) {
      attr.x = 0;
      attr.y = 0;
    }
    setSpring({ ...attr, immediate: false, config: { duration: 200 } });
    if (onScaleChange) {
      onScaleChange(attr.scale);
    }
  }

  function rest() {
    setSpring({ x: 0, y: 0, scale: 1, rotate: 0, immediate: true });
  }

  useEffect(() => {
    if (context) {
      context.addImage(index, { rotate, zoom, rest });
    }
    return () => context.removeImage(index);
  }, []);

  useEffect(() => {
    if (context) {
      if (context.index !== index) {
        rest();
      }
    }
  }, [context?.index]);

  const bind = useGesture(
    {
      onDrag: ({ movement: [mx, my], pinching, vxvy: [vx, vy], dragging, event }) => {
        if (pinching) {
          return;
        }

        if (spring.scale.get() <= 1) {
          setSpring({ x: 0, y: 0, immediate: false });
        } else {
          setSpring({ x: mx, y: my, immediate: false, config: config.wobbly });
        }
      },
      onPinch: ({ movement: [x], pinching, event, last, down, offset, lastOffset, direction: [dx] }) => {
        const lastScale = spring.scale.get();
        if (pinching && dx !== 0) {
          // 缩放时，越接近最大或最小，阻尼就越大
          const damp = Math.round(dx) === 1 ? Math.abs(6 - lastScale) * 0.08 : 1;
          // const scale = (lastScale * window.innerWidth + x * 0.5) / window.innerWidth;
          const scale = clamp(lastScale + (x * damp) / window.innerWidth, 1, 6);

          // TODO: 根据缩放比例，计算偏移
          setSpring({ scale, x: 0, y: 0, immediate: true, config: config.wobbly });
          if (onScaleChange) {
            onScaleChange(scale);
          }
          event.stopPropagation();
          event.preventDefault();
        }
      },
    },
    {
      eventOptions: { passive: false },
      drag: {
        rubberband: true,
        filterTaps: true,
        initial: () => [spring.x.get(), spring.y.get()],
        bounds: ({ event }) => {
          const target = event?.target as HTMLElement;
          const scale = spring.scale.get();
          const rotate = spring.rotate.get();
          if (scale <= 1) {
            return {
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
            };
          }

          var scaleSize = { width: target.clientWidth * scale, height: target.clientHeight * scale };
          var windowSize = { width: window.innerWidth, height: window.innerHeight };

          // 测算图片溢出尺寸
          var overWidth = Math.max(scaleSize.width, windowSize.width) - Math.min(scaleSize.width, windowSize.width);
          var overHeight =
            Math.max(scaleSize.height, windowSize.height) - Math.min(scaleSize.height, windowSize.height);

          // 旋转成垂直角度时，长宽需要反过来
          if (rotate === 90 || rotate === 270) {
            overWidth = Math.max(scaleSize.height, windowSize.width) - Math.min(scaleSize.height, windowSize.width);
            overHeight = Math.max(scaleSize.width, windowSize.height) - Math.min(scaleSize.width, windowSize.height);
          }
          // 溢出尺寸与偏移量计算
          var offsetX = overWidth / 2;
          var offsetY = overHeight / 2;

          return {
            left: -offsetX,
            top: -offsetY,
            right: offsetX,
            bottom: offsetY,
          };
        },
      },
    },
  );

  return (
    <div className={classNames(prefixCls, className)} style={style} onDoubleClick={() => zoom()}>
      <animated.img src={src || require('./image-placeholder.png')} alt="" {...bind()} style={spring as any} />
    </div>
  );
}

document.addEventListener('gesturestart', (e) => e.preventDefault());
document.addEventListener('gesturechange', (e) => e.preventDefault());
