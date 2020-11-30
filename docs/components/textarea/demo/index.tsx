/**
 * title: 文本域
 * desc: 默认最大字符数为200
 */
import React from 'react';
import { List, ListItem, TextArea } from 'weui-react-v2';

export default function () {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '30px', margin: '-28px' }}>
      <List>
        <ListItem hd="配合ListItem标签:" alignItems="flex-start">
          <TextArea placeholder="请描述你所发生的问题" rows={3} />
        </ListItem>
        <ListItem>
          <TextArea disabled={true} defaultValue="禁用状态,恭喜发财🎉" placeholder="请描述你所发生的问题" rows={3} />
        </ListItem>
      </List>

      <List title="问题描述">
        <ListItem>
          <TextArea placeholder="请描述你所发生的问题" rows={3} />
        </ListItem>
      </List>
    </div>
  );
}
