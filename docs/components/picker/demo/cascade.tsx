/**
 * title: 级连数据
 */
import { PickerItem } from '@/Picker/utils';
import React, { useState } from 'react';
import { PickerPanel, Button, Flex, WhiteSpace, List, ListItem, HalfScreenDialogPop } from 'weui-react-v2';

const pickerData: PickerItem[] = [
  {
    label: '票据',
    value: '票据',
    children: [
      {
        label: '飞机票',
        value: '飞机票',
      },
      {
        label: '火车票',
        value: '火车票',
      },
      {
        label: '的士票',
        value: '的士票',
      },
      {
        label: '同值测试',
        value: '同值测试',
      },
      {
        label: '打印票',
        value: '打印票',
      },
    ],
  },
  {
    label: '费用',
    value: '费用',
    children: [
      {
        label: '住宿费',
        value: '住宿费',
      },
      {
        label: '礼品费',
        value: '礼品费',
      },
      {
        label: '活动费',
        value: '活动费',
      },
      {
        label: '同值测试',
        value: '同值测试',
      },
      {
        label: '通讯费',
        value: '通讯费',
      },
      {
        label: '补助',
        value: '补助',
      },
    ],
  },
];

export default function () {
  return (
    <div>
      <PickerPanel
        data={pickerData}
        cols={2}
        cascade={true}
        onPickerChange={(colIndex, value, data) => console.log(colIndex, value, data)}
      />
    </div>
  );
}
