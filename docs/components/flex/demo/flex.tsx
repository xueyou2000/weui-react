/**
 * title: 对其方式
 * desc: 根据主轴进行左对齐，居中对齐，右对齐
 */
import React from 'react';
import { Flex, FlexItem } from 'weui-react-v2';
import './flex-demo.less';

export default () => {
  return (
    <div className="flex-demo">
      <p className="title">左对齐</p>
      <Flex type="flex" justify="start">
        <FlexItem span={4}>4</FlexItem>
        <FlexItem span={4}>4</FlexItem>
        <FlexItem span={4}>4</FlexItem>
        <FlexItem span={4}>4</FlexItem>
      </Flex>

      <p className="title">居中对齐</p>
      <Flex type="flex" justify="center">
        <FlexItem span={4}>4</FlexItem>
        <FlexItem span={4}>4</FlexItem>
        <FlexItem span={4}>4</FlexItem>
        <FlexItem span={4}>4</FlexItem>
      </Flex>

      <p className="title">右对齐</p>
      <Flex type="flex" justify="end">
        <FlexItem span={4}>4</FlexItem>
        <FlexItem span={4}>4</FlexItem>
        <FlexItem span={4}>4</FlexItem>
        <FlexItem span={4}>4</FlexItem>
      </Flex>

      <p className="title">均分</p>
      <Flex type="flex" justify="space-between">
        <FlexItem span={4}>4</FlexItem>
        <FlexItem span={4}>4</FlexItem>
        <FlexItem span={4}>4</FlexItem>
        <FlexItem span={4}>4</FlexItem>
      </Flex>

      <p className="title">均分-两边留白</p>
      <Flex type="flex" justify="space-around">
        <FlexItem span={4}>4</FlexItem>
        <FlexItem span={4}>4</FlexItem>
        <FlexItem span={4}>4</FlexItem>
        <FlexItem span={4}>4</FlexItem>
      </Flex>
    </div>
  );
};
