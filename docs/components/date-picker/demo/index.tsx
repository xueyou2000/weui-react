/**
 * title: 日期选择器
 */
import React, { useState } from 'react';
import { DatePicker, Button, Flex, WhiteSpace, List, ListItem, HalfScreenDialogPop } from 'weui-react-v2';

export default function () {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '30px', margin: '-28px' }}>
      <List title="不同模式">
        <DatePicker placeholder="请选择" defaultValue={null} useDefaultFormat={false} separator="">
          <ListItem hd="date" arrow={true} />
        </DatePicker>
        <DatePicker placeholder="请选择" mode="datetime" defaultValue={null}>
          <ListItem hd="datetime" arrow={true} />
        </DatePicker>
        <DatePicker placeholder="请选择" mode="time" defaultValue={null} useDefaultFormat={false} separator="">
          <ListItem hd="time" arrow={true} />
        </DatePicker>
        <DatePicker placeholder="请选择" mode="year" defaultValue={null}>
          <ListItem hd="year" arrow={true} />
        </DatePicker>
        <DatePicker placeholder="请选择" mode="month" defaultValue={null}>
          <ListItem hd="month" arrow={true} />
        </DatePicker>
      </List>
    </div>
  );
}
