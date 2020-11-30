/**
 * title: 垂直显示
 * desc: 通过自定义样式，可以实现更加丰富的功能
 */
import classNames from 'classnames';
import React from 'react';
import { Tabs, TabPanel, SwipeableTabContent, ScrollableTabBar } from 'weui-react-v2';
import data from './data.json';
import './index.less';

let allFoods: IDishInfo[] = data.reduce((pre: any, cur: any) => {
  return pre.concat(cur.foods);
}, []);
allFoods = allFoods.map((d) => {
  d.cover = require(`./images/${d.cover}`);
  return d;
});

interface IDishInfo {
  name: string;
  unitPrice: number;
  cover: string;
}

function FoodList({ data }: { data: IDishInfo[] }) {
  return (
    <React.Fragment>
      {data.map((d, i) => (
        <ListSegment key={i} cover={d.cover} extra={<NumberBtn />}>
          <p className="dish-list__name">{d.name}</p>
          <p className="dish-list__price">¥{d.unitPrice}</p>
        </ListSegment>
      ))}
    </React.Fragment>
  );
}

interface ListSegmentProps {
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 封面图片
   */
  cover: string;
  /**
   * 右侧操作区域
   */
  extra?: React.ReactNode;
  children?: React.ReactNode;
}
function ListSegment(props: ListSegmentProps) {
  const { className, style, cover, extra, children } = props;
  const classList = classNames(['list-segment-item', className]);

  return (
    <div className={classList} style={style}>
      <div className="list-segment__cover">
        <img src={cover} alt="" />
      </div>
      <div className="list-segment__content">{children}</div>
      <div className="list-segment__extra">{extra}</div>
    </div>
  );
}

interface NumberBtnProps {
  className?: string;
  onAdd?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  onRemove?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}
function NumberBtn(props: NumberBtnProps) {
  const { className, onAdd, onRemove } = props;
  return (
    <div className={classNames('number-btn-wrap', className)}>
      <span className="number-btn left" onClick={onRemove}>
        +
      </span>
      <span className="number-btn right" onClick={onAdd}>
        -
      </span>
    </div>
  );
}

export default function () {
  return (
    <div className="tabs-v-demo">
      <Tabs vertical={true} renderTabContent={() => <SwipeableTabContent disabled={true} />}>
        <TabPanel tabKey="all" tab={<span className="tab_point">全部菜品</span>}>
          <FoodList data={allFoods} />
        </TabPanel>
        {data.map((d, i) => (
          <TabPanel key={d.type} tabKey={d.type} tab={<span className="tab_point">{d.type}</span>}>
            <FoodList data={d.foods} />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}
