import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import Button from '../Button';
import { Popup } from '../Popup';
import { PopupProps } from '../Popup/Popup';
import './style';

export interface DialogProps extends PopupProps {
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
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 内容
   */
  children: React.ReactNode;
  /**
   * 取消按钮
   */
  cancel?: React.ReactNode;
  /**
   * 取消按钮点击
   */
  onCancel?: () => void;
  /**
   * 确定按钮
   */
  confirm?: React.ReactNode;
  /**
   * 确定按钮点击
   */
  onConfirm?: () => Promise<unknown>;
  /**
   * 是否隐藏页脚
   */
  hideFooter?: boolean;
}

export default function Dialog(props: DialogProps) {
  const {
    prefixCls = 'weui-dialog',
    className,
    style,
    title,
    children,
    cancel = '取消',
    onCancel,
    confirm = '确定',
    onConfirm,
    hideFooter = false,
    maskClose = false,
    ...rest
  } = props;
  const closeRef = useRef<Function | null>(null);
  const [loading, setLoading] = useState(false);

  function close() {
    if (closeRef.current) {
      closeRef.current();
    }
  }

  function handleConfirm() {
    if (loading) {
      return;
    }
    if (onConfirm) {
      setLoading(true);
      onConfirm()
        .then(() => {
          setLoading(false);
          close();
        })
        .catch(() => setLoading(false));
    } else {
      close();
    }
  }

  function handleCancel() {
    if (onCancel) {
      onCancel();
    }
    close();
  }

  return (
    <Popup
      {...rest}
      maskClose={maskClose}
      closeFuncRef={closeRef}
      animateClassName="fade-scale"
      popupClassName={`${prefixCls}-popup`}
      popupContentClassName={`${prefixCls}-wrapper`}
    >
      <div className={classNames(prefixCls, className)} style={style}>
        <div className={`${prefixCls}-hd`}>
          <div className={`${prefixCls}-title`}>{title}</div>
        </div>
        <div className={`${prefixCls}-bd`}>{children}</div>
        {!hideFooter && (
          <div className={`${prefixCls}-ft`}>
            <Button onClick={handleCancel}>{cancel}</Button>
            <Button onClick={handleConfirm} type="primary" loading={loading}>
              {confirm}
            </Button>
          </div>
        )}
      </div>
    </Popup>
  );
}
