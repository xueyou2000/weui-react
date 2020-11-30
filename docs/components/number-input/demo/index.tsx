/**
 * title: 数值输入框
 */
import { ExclamationCircleOutlined, FormOutlined, PhoneOutlined, SnippetsOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { NumberInput, Button, Flex, WhiteSpace, List, ListItem, HalfScreenDialogPop } from 'weui-react-v2';

export default function () {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '30px', margin: '-28px' }}>
      <List title="输入格式">
        <ListItem hd="任意输入">
          <NumberInput placeholder="请输入数值" />
        </ListItem>
        <ListItem hd="保留小数点3位">
          <NumberInput placeholder="请输入数值" precision={3} />
        </ListItem>
        <ListItem hd="自定义前缀">
          <NumberInput
            placeholder="前缀加上美元符号"
            formatter={(value) => `$ ${value || ''}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
          />
        </ListItem>
        <ListItem hd="自定义后缀">
          <NumberInput
            placeholder="后缀加上百分比"
            min={0}
            max={100}
            formatter={(value) => `${value}%`}
            parser={(value) => (value + '').replace('%', '')}
          />
        </ListItem>
        <ListItem hd="最大最小限制">
          <NumberInput placeholder="最小3,最大15" min={3} max={15} />
        </ListItem>
        <ListItem hd="禁用样式">
          <NumberInput placeholder="请输入" disabled={true} />
        </ListItem>
        <ListItem hd="禁用样式">
          <NumberInput value={123} disabled={true} />
        </ListItem>
        <ListItem hd="显示控制按钮">
          <NumberInput defaultValue={1} min={1} max={10} showControl={true} />
        </ListItem>
      </List>
    </div>
  );
}
