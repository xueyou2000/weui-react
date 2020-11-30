/**
 * title: 多张图片
 * desc: 可设置默认查看哪一张图片
 */
import React, { useState } from 'react';
import { Gallery, Button } from 'weui-react-v2';
import './index.less';

const images = [
  {
    src: require('../../swiper/pexels-photo-296878.jpeg'),
    title: 'Photo: Michael Hull',
    desc: "Dummy caption. It's Greek to you. Unless, of course, you're Greek, in which case, it really makes no sense.",
  },
  {
    src: require('./15008465772_d50c8f0531_h.jpg'),
    title: '一只熊',
    desc: '憨憨的熊， 短短的尾巴',
  },
  {
    src: require('./15008518202_c265dfa55f_h.jpg'),
  },
  {
    src: require('./15008867125_b61960af01_h.jpg'),
  },
];

export default () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <Button onClick={() => setVisible(true)}>打开</Button>
      <Gallery className="image-view-demo" data={images} visible={visible} onVisibleChange={setVisible} />
    </div>
  );
};
