/**
 * title: 搜索栏
 */

import React, { useEffect, useState } from 'react';
import { Search, SafeArea } from 'weui-react-v2';

export default () => {
  return (
    <SafeArea style={{ margin: '-0.16rem' }}>
      <Search
        placeholder="搜索"
        onConfirm={(val) => console.log('确认输入: ', val)}
        onSearch={(val) => console.log('search: ', val)}
        onCancel={() => console.log('取消搜索')}
      />
    </SafeArea>
  );
};
