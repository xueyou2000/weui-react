/**
 * title: Picker选择器，默认/分隔
 */
import { PickerItem } from '@/Picker/utils';
import React, { useState } from 'react';
import { Picker, Button, Flex, WhiteSpace, List, ListItem, HalfScreenDialogPop } from 'weui-react-v2';

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
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '30px', margin: '-28px' }}>
      <List>
        <Picker title="请选择" placeholder="请选择" data={singlePickerData}>
          <ListItem hd="正常选择" arrow={true}>
            自定义
          </ListItem>
        </Picker>
        <Picker title="请选择" placeholder="请选择" data={singlePickerData} disabled={true}>
          <ListItem hd="禁用状态" arrow={true}>
            自定义
          </ListItem>
        </Picker>
        <Picker title="请选择" placeholder="请选择" data={pickerData} cols={2}>
          <ListItem hd="双列数据" arrow={true}>
            自定义
          </ListItem>
        </Picker>
      </List>
      <List title="独立使用">
        <Picker disabled={true} placeholder="请选择" value={['住宿费']} data={singlePickerData}>
          <ListItem hd="用作查看详情" />
        </Picker>
      </List>
    </div>
  );
}
