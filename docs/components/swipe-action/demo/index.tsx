/**
 * title: 左右滑动显示按钮
 * desc: 可设置滑动打开距离
 */
import React from 'react';
import { List, ListItem, SwipeAction } from 'weui-react-v2';
import './index.less';

export default () => {
  return (
    <div className="swiper-action-demo">
      <List>
        <SwipeAction right={[<a>删除</a>, <a>归档</a>]}>
          <ListItem>右侧按钮</ListItem>
        </SwipeAction>
        <SwipeAction left={[<a>删除</a>, <a>归档</a>]}>
          <ListItem>左侧按钮</ListItem>
        </SwipeAction>
        <SwipeAction
          left={[
            <a style={{ backgroundColor: '#108ee9' }}>已读</a>,
            <a onClick={() => alert('点击了回复按钮')}>回复</a>,
          ]}
          right={[<a style={{ backgroundColor: 'red' }}>删除</a>, <a>归档</a>]}
        >
          <ListItem>秘笈： 左右操作</ListItem>
        </SwipeAction>
      </List>
    </div>
  );
};
