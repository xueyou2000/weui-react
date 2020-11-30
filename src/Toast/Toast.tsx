import classNames from 'classnames';
import React from 'react';
import { CircleLoading } from '../Loading';
import { Popup } from '../Popup';
import { PopupProps } from '../Popup/Popup';
import './style';

export interface ToastProps extends PopupProps {
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
   * 内容
   */
  content: React.ReactNode;
  /**
   * 类型
   */
  type?: 'text' | 'success' | 'fail' | 'loading';
}

function getIcon(type: 'text' | 'success' | 'fail' | 'loading') {
  switch (type) {
    case 'success':
      return <i className="weui-icon weui-icon-success"></i>;
    case 'fail':
      return <i className="weui-icon weui-icon-warn"></i>;
    case 'loading':
      return <CircleLoading className="weui-loading" />;
    default:
      return null;
  }
}

export default function Toast(props: ToastProps) {
  const {
    prefixCls = 'weui-toast',
    className,
    style,
    type = 'text',
    content,
    duration = 2500,
    mask = false,
    maskClose = false,
    ...rest
  } = props;

  return (
    <Popup
      {...rest}
      duration={duration}
      mask={mask}
      maskClose={maskClose}
      animateClassName="fade-scale"
      popupClassName={`${prefixCls}-popup`}
      popupContentClassName={`${prefixCls}-wrapper`}
    >
      <div className={classNames(prefixCls, className)} style={style} data-type={type}>
        {type !== 'text' && <div className={`${prefixCls}-icon`}>{getIcon(type)}</div>}
        <div className={`${prefixCls}-msg`}>{content}</div>
      </div>
    </Popup>
  );
}
