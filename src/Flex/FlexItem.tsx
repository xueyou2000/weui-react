import classNames from 'classnames';
import React from 'react';
import { Col } from 'xy-grid';
import { ColProps } from 'xy-grid/es/interface';
import './style';

interface FlexItemProps {
  /**
   * 是否均分
   */
  average?: boolean;
}

export default function FlexItem(props: ColProps & FlexItemProps) {
  return <Col {...props} className={classNames(props.className, { average: props.average })} />;
}
