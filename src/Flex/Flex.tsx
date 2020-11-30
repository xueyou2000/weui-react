import React from 'react';
import { Row } from 'xy-grid';
import { RowProps } from 'xy-grid/es/interface';

export default function Flex(props: RowProps) {
  return <Row {...props} type="flex" />;
}
