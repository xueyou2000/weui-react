import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import useMergeValue from 'use-merge-value';
import { usePortal } from 'utils-hooks';
import LoadingIcon from '../Button/LoadingIcon';
import { GetContainerFun, PopupProps } from '../Popup/Popup';
import './style';

export interface ActionSheetProps extends PopupProps {
  /**
   * 附加类名
   */
  prefixCls?: string;
  /**
   * 根节点的附加类名
   */
  className?: string;
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 取消文本
   */
  cancel?: React.ReactNode;
  /**
   * 菜单
   */
  menus?: React.ReactNode[];
  /**
   * 选中菜单事件
   */
  onClick?: (index: number) => Promise<unknown>;
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
   * 根选择器, 让此节点样式变化. 一般是`#root`
   */
  rootSelector?: string;
}

/**
 * 计算Sheet内容高度
 */
function calcHeight(div: HTMLDivElement | null, menuSize: number) {
  let height = menuSize * 200;
  const parent = div?.parentElement;
  if (div && parent) {
    let backup = parent.style.display;
    parent.style.display = 'block';
    let scrollHeight = div.scrollHeight;

    if (scrollHeight) {
      height = scrollHeight;
    }
    parent.style.display = backup;
  }
  return height;
}

export default function ActionSheet(props: ActionSheetProps) {
  const {
    prefixCls = 'weui-actionsheet',
    className,
    title,
    menus = [],
    cancel = '取消',
    onClick,
    defaultVisible = false,
    getCloseFunc,
    getContainer,
    onUnmount,
    rootSelector,
  } = props;

  const [renderPortal] = usePortal('', getContainer);
  const [loadingIndex, setLoadingIndex] = useState(-1);
  const [height, setheight] = useState(menus.length * 200);
  const [{ y }, set] = useSpring(() => ({ y: height }));
  const root = useRef(rootSelector ? (document.querySelector(rootSelector) as HTMLElement) : null);
  const [visible, setVisible] = useMergeValue<boolean>(defaultVisible, {
    value: props.visible,
    onChange: props.onVisibleChange,
  });

  if (getCloseFunc) {
    getCloseFunc(() => setVisible(false));
  }

  function saveRef(ins: HTMLDivElement | null) {
    if (ins && height === menus.length * 200) {
      setheight(calcHeight(ins, menus.length));
    }
  }

  const open = ({ canceled }: { canceled?: boolean }) => {
    if (root.current) {
      document.body.style.overflow = 'hidden';
      root.current.style.transition = '0.3s';
      root.current.style.transform = 'translateY(-8%) scale(1.16)';
      root.current.style.filter = 'blur(5px)';
    }
    set({ y: 0, immediate: false, config: canceled ? config.wobbly : config.stiff });
    setVisible(true);
  };
  const close = (velocity = 0) => {
    if (root.current) {
      root.current.style.transform = 'translateY(0%) scale(1)';
      root.current.style.filter = 'blur(0px)';
      document.body.style.overflow = '';
    }

    set({
      y: height,
      immediate: false,
      config: { ...config.stiff, velocity },
      onRest: (result) => {
        if (result.finished && result.value.y !== 0) {
          if (root.current) {
            root.current.style.transition = '';
            root.current.style.transform = '';
            root.current.style.filter = '';
          }
          // 关闭过渡执行完毕
          if (onUnmount) {
            onUnmount();
          }
        }
      },
    });
    setVisible(false);
  };

  useEffect(() => {
    if (visible) {
      open({});
    } else {
      close();
    }
  }, [visible]);

  const bind = useDrag(
    ({ last, vxvy: [, vy], movement: [, my], cancel, canceled }) => {
      // 向上拖动超过阈值，则取消拖动
      if (my < -70) cancel();

      if (last) {
        my > height * 0.7 || vy > 0.7 ? close(vy) : open({ canceled });
      } else {
        set({ y: my, immediate: true });
      }
    },
    { initial: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true },
  );

  function handleClick(i: number) {
    if (loadingIndex !== -1) {
      return;
    }
    if (onClick) {
      setLoadingIndex(i);
      onClick(i)
        .then(() => {
          setLoadingIndex(-1);
          close();
        })
        .catch(() => setLoadingIndex(-1));
    } else {
      close();
    }
  }

  const display = y.to((py: number) => (py < height ? 'block' : 'none'));
  const bgStyle = {
    display,
    transform: y.to([0, height], ['translateY(0px) scale(1.05)', 'translateY(-8%) scale(1.16)']),
    opacity: y.to([0, height], [1, 0.1], 'clamp'),
  };

  return renderPortal(
    <div className={classNames(`${prefixCls}-wrapper`, { 'with-root': root.current })}>
      <animated.div
        className={classNames(`${prefixCls}-mask`)}
        style={bgStyle as any}
        onClick={() => close()}
      ></animated.div>
      <animated.div
        className={classNames(prefixCls, className)}
        {...bind()}
        style={{ display, bottom: `calc(-100vh + ${height}px)`, y }}
      >
        <div className={`${prefixCls}-inner`} ref={saveRef}>
          {title && (
            <div className={`${prefixCls}-title`}>
              <div className={`${prefixCls}-title_inner`}>{title}</div>
            </div>
          )}
          <div className={`${prefixCls}-menu`}>
            {menus.map((x, i) => (
              <div key={i} className={`${prefixCls}-cell`} onClick={() => handleClick(i)}>
                <LoadingIcon prefixCls={prefixCls} loading={loadingIndex === i} />
                {x}
              </div>
            ))}
          </div>
          <div className={`${prefixCls}-action`}>
            <div className={`${prefixCls}-cell`} onClick={() => close()}>
              {cancel}
            </div>
          </div>
        </div>
      </animated.div>
    </div>,
  );
}
