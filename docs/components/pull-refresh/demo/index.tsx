/**
 * title: 下拉刷新
 * desc: 设置阈值可以指定下拉多少距离，松开后刷新
 */
import React, { useEffect, useState } from 'react';
import { PullRefresh, PullRefreshAction, Loadmore, Skeleton, SafeArea } from 'weui-react-v2';
import './index.less';

const MAX = 20;

function makeArray(count: number) {
  const arr: Array<string> = [];

  for (let i = 0; i < count; ++i) {
    arr.push(count + '-' + i);
  }

  return arr;
}

export default () => {
  const [action, setAction] = useState(PullRefreshAction.init);
  const [data, setData] = useState<Array<string>>([]);
  const [nomore, setNomore] = useState(false);

  function handleAction(act: PullRefreshAction) {
    if (act === action) {
      return false;
    }
    if (act === PullRefreshAction.refreshing) {
      // 刷新
      handRefreshing();
    } else if (act === PullRefreshAction.loading) {
      // 刷新
      handleLoadmore();
    } else {
      setAction(act);
    }
  }

  function handRefreshing() {
    if (action === PullRefreshAction.refreshing) {
      return;
    }
    // console.log('===》 开始刷新');
    setTimeout(() => {
      // console.log('===》 刷新完毕');
      setData(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
      setNomore(false);
      setAction(PullRefreshAction.refreshed);
    }, 3000);
    setAction(PullRefreshAction.refreshing);
  }

  function handleLoadmore() {
    if (data.length >= MAX) {
      setAction(PullRefreshAction.reset);
      setNomore(true);
      return;
    }
    if (action === PullRefreshAction.loading) {
      return;
    }
    // console.log('===》 开始加载');
    setTimeout(() => {
      // console.log('===》 加载完毕', data);
      setData([...data, ...makeArray(5)]);
      setAction(PullRefreshAction.reset);
    }, 3000);
    setAction(PullRefreshAction.loading);
  }

  return (
    <SafeArea className="pull-refresh-demo">
      <div>
        <p className="tips">我是头部</p>
      </div>
      <PullRefresh action={action} handleAction={handleAction}>
        <ul className="fake-list">
          {data.length === 0 ? <Skeleton loading={true}></Skeleton> : data.map((x, i) => <li key={i}>列表{i}</li>)}
          {nomore && <Loadmore tips="暂无更多" />}
        </ul>
      </PullRefresh>
      <div>
        <p className="tips">我是尾部</p>
      </div>
    </SafeArea>
  );
};
