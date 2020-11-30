/**
 * title: 多列数据
 */
import { PickerItem } from '@/Picker/utils';
import React, { useState } from 'react';
import { PickerPanel, Button, Flex, WhiteSpace, List, ListItem, HalfScreenDialogPop } from 'weui-react-v2';

// 双列数据
const pickerData: PickerItem[][] = [
  [
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
      label: '打印票',
      value: '打印票',
    },
  ],
  [
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
      label: '通讯费',
      value: '通讯费',
    },
    {
      label: '补助',
      value: '补助',
    },
  ],
];

export default function () {
  const [value, setValue] = useState(['的士票', '补助']);

  function rest() {
    setValue(['的士票', '补助']);
  }

  return (
    <div>
      <PickerPanel data={pickerData} cols={2} value={value} onChange={setValue} />
      <Button type="primary" block={true} onClick={rest}>
        受控改变
      </Button>
    </div>
  );
}
