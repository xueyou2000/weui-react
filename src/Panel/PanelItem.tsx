import React from 'react';
import classNames from 'classnames';
import './style';

export interface PanelItemProps {
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
  title: React.ReactNode;
  /**
   * 缩略图
   */
  thumb?: string | React.ReactNode;
  /**
   * 内容
   */
  children?: React.ReactNode;
  /**
   * 文本模式
   */
  text?: boolean;
  /**
   * 扩展信息
   */
  info?: React.ReactNode;
  /**
   * 是否显示箭头
   */
  arrow?: boolean;
}

export default function PanelItem(props: PanelItemProps) {
  const { prefixCls = 'weui-panel-item', className, style, title, thumb, children, text, info, arrow } = props;

  const content = (
    <React.Fragment>
      <h4 className={`${prefixCls}_title`}>{title}</h4>
      {children && <div className={`${prefixCls}_desc`}>{children}</div>}
      {info && <ul className={`${prefixCls}_info`}>{info}</ul>}
    </React.Fragment>
  );

  return (
    <div
      className={classNames(prefixCls, className, { [`${prefixCls}_compact`]: thumb, [`${prefixCls}_arrow`]: arrow })}
      style={style}
    >
      {text ? (
        content
      ) : (
        <>
          {thumb && (
            <div className={`${prefixCls}_hd`}>
              {typeof thumb === 'string' ? <img className={`${prefixCls}_thumb`} src={thumb} alt="" /> : thumb}
            </div>
          )}
          <div className={`${prefixCls}_bd`}>{content}</div>
        </>
      )}
      {arrow && <div className={`${prefixCls}_ft`}></div>}
    </div>
  );
}
