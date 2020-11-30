/**
 * title: 单文件上传
 */
import React from 'react';
import { List, ListItem, SingleUpload, MultiUpload } from 'weui-react-v2';

interface Res {
  code: number;
  filekey: string;
}

export default function () {
  function getResponse(res: Res) {
    if (res && res.code === 0) {
      return res.filekey;
    } else {
      throw new Error('后台上传错误');
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '30px', margin: '-28px' }}>
      <List title="单文件上传">
        <ListItem hd="图片上传" alignItems="flex-start">
          <SingleUpload<Res> style={{ marginLeft: '30px' }} action="/upload" getResponse={getResponse} />
        </ListItem>
        <ListItem hd="上传失败" alignItems="flex-start">
          <SingleUpload<Res> style={{ marginLeft: '30px' }} action="/upload2" getResponse={getResponse} />
        </ListItem>
        <ListItem hd="静态显示" alignItems="flex-start">
          <SingleUpload<Res>
            style={{ marginLeft: '30px' }}
            value="https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg"
            disabled={true}
            action="/upload2"
            getResponse={getResponse}
          />
        </ListItem>
      </List>
      <List title="多文件上传">
        <ListItem hd="图片上传" alignItems="flex-start">
          <MultiUpload<Res>
            style={{ marginLeft: '30px' }}
            action="/upload"
            maxSize={10}
            length={3}
            getResponse={getResponse}
            max={4}
          />
        </ListItem>
        <ListItem hd="静态显示" alignItems="flex-start">
          <MultiUpload<Res>
            style={{ marginLeft: '30px' }}
            disabled={true}
            value={[
              'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
              'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
              'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
              'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
            ]}
            action="/upload"
            length={3}
            getResponse={getResponse}
            max={6}
          />
        </ListItem>
      </List>
    </div>
  );
}
