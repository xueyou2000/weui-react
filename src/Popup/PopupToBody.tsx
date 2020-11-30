import React from 'react';
import ReactDOM from 'react-dom';
import { PopupProps } from './Popup';

function loop() {}

type FCComponent = (props: PopupProps) => JSX.Element;

/**
 * 渲染到body外部
 */
export default function PopupComponent<T extends PopupProps>(Component: React.FC<T> | FCComponent, props: T) {
  var closeFunc: Function = loop;
  const div = document.createElement('div');
  document.body.appendChild(div);

  ReactDOM.render(
    <Component
      {...props}
      defaultVisible={true}
      getCloseFunc={(close) => {
        closeFunc = close;
      }}
      getContainer={div}
      onUnmount={() => {
        ReactDOM.unmountComponentAtNode(div);
        div.parentNode?.removeChild(div);
      }}
    />,
    div,
  );

  return closeFunc;
}
