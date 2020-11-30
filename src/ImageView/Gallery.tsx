import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import useMergeValue from 'use-merge-value';
import { Popup } from '../Popup';
import { PopupProps } from '../Popup/Popup';
import Swiper from '../Swiper';
import GalleryContext, { ImageViewMethods } from './context';
import ImageView from './ImageView';
import './style';

export interface ImageOption {
  src: string;
  title?: string;
  desc?: string;
}

export interface GalleryProps extends PopupProps {
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
  data?: ImageOption[];
  /**
   * 查看图片索引
   */
  index?: number;
  /**
   * 索引更改事件
   */
  onChange?: (index: number) => void;
  /**
   * 默认查看图片索引
   */
  defaultIndex?: number;
  /**
   * 自定义工具条
   */
  tool?: React.ReactNode;
  /**
   * 自定义底部节点
   */
  bottom?: React.ReactNode;
  /**
   * 拖拽切换距离, 默认0.35
   * 如果为0.5这样的百分比，则以元素尺寸的百分比计算
   */
  swiperDistance?: number;
  /**
   * 拖拽切换加速度, 默认4
   * 加速度越快，即可切换
   */
  swiperSpeed?: number;
}

export default function Gallery(props: GalleryProps) {
  const {
    prefixCls = 'weui-gallery',
    className,
    style,
    data = [],
    defaultIndex = 0,
    tool,
    swiperDistance = 0.35,
    swiperSpeed,
    bottom,
    ...rest
  } = props;
  const [index, setIndex] = useMergeValue<number>(defaultIndex, {
    value: props.index,
    onChange: props.onChange,
  });
  const current = index >= 0 && index < data.length ? data[index] : null;
  const imagesMethodsMap = useRef(new Map<number, ImageViewMethods>());
  const [disabledSwiper, setDisableSwiper] = useState(false);
  const closeRef = useRef<Function | null>(null);

  function close() {
    if (closeRef.current) {
      closeRef.current();
    }
  }

  function handleScaleChange(scale: number) {
    setDisableSwiper(scale !== 1);
  }

  function addImage(index: number, methods: ImageViewMethods) {
    imagesMethodsMap.current.set(index, methods);
  }

  function removeImage(index: number) {
    if (imagesMethodsMap.current.has(index)) {
      imagesMethodsMap.current.delete(index);
    }
  }

  function getMethods() {
    if (imagesMethodsMap.current.has(index)) {
      return imagesMethodsMap.current.get(index);
    }
  }

  function rotate() {
    getMethods()?.rotate();
  }

  function zoom() {
    getMethods()?.zoom();
  }

  function prev() {
    if (index - 1 >= 0) {
      getMethods()?.rest();
      setIndex(index - 1);
      setDisableSwiper(false);
    }
  }

  function next() {
    if (index + 1 < data.length) {
      getMethods()?.rest();
      setIndex(index + 1);
      setDisableSwiper(false);
    }
  }

  return (
    <Popup
      {...rest}
      closeFuncRef={closeRef}
      popupClassName={`${prefixCls}-popup`}
      popupContentClassName={`${prefixCls}-wrapper`}
    >
      <div className={classNames(prefixCls, className)} style={style}>
        <GalleryContext.Provider value={{ index, addImage, removeImage }}>
          <Swiper
            className={`${prefixCls}-container`}
            dots={false}
            index={index}
            onChange={setIndex}
            swiperDistance={swiperDistance}
            swiperSpeed={swiperSpeed}
            disabled={disabledSwiper}
          >
            {data.map((x, i) => (
              <ImageView key={i} index={i} src={x.src} onScaleChange={handleScaleChange} />
            ))}
          </Swiper>
        </GalleryContext.Provider>

        <div className={`${prefixCls}-ui`}>
          <div className={`${prefixCls}-topbar`}>
            <div className={`${prefixCls}-counter`}>
              {index + 1} / {data.length}
            </div>
            <button className={`${prefixCls}-skin-btn btn-close`} onClick={close}></button>
            <button className={`${prefixCls}-skin-btn btn-share`} onClick={rotate}></button>
            <button className={`${prefixCls}-skin-btn btn-zoom`} onClick={zoom}></button>
            {tool}
          </div>

          <button className={`${prefixCls}-skin-btn btn-arrow-left`} onClick={prev}></button>
          <button className={`${prefixCls}-skin-btn btn-arrow-right`} onClick={next}></button>

          {bottom && <div className={`${prefixCls}-bottom`}>{bottom}</div>}

          <div className={`${prefixCls}-caption`}>
            <div className={`${prefixCls}-caption-inner`}>
              {current?.desc}
              <br />
              <small>{current?.title}</small>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
}
