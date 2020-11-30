/**
 * title: Picker面板
 */
import { PickerItem } from '@/Picker/utils';
import React, { useState } from 'react';
import { PickerPanel, Button, Flex, WhiteSpace, List, ListItem, HalfScreenDialogPop } from 'weui-react-v2';

// 单列数据
const singlePickerData: PickerItem[] = [
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
    label: '住宿费',
    value: '住宿费',
  },
  {
    label: '礼品费(disabled)',
    value: '礼品费',
    disabled: true,
  },
  {
    label: '活动费',
    value: '活动费',
  },
  {
    label: '通讯费',
    value: '通讯费',
  },
  {
    label: '补助',
    value: '补助',
  },
  {
    label: '通讯费',
    value: '通讯费',
  },
  {
    label: '其他',
    value: '其他',
  },
];

export default function () {
  return (
    <div>
      <PickerPanel data={singlePickerData} />
    </div>
  );
}
