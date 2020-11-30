| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

[![NPM version][npm-image]][npm-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/weui-react-v2.svg?style=flat-square
[npm-url]: http://npmjs.org/package/weui-react-v2
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/weui-react-v2.svg?style=flat-square
[download-url]: https://npmjs.org/package/weui-react-v2

[![weui-react-v2](https://nodei.co/npm/weui-react-v2.png)](https://npmjs.org/package/weui-react-v2)

# weui-react-v2

`weui`的`React`实现, 快速编写移动端页面, 包含很多常用组件。[在线例子](http://xueyou2000.gitee.io/weui-react-v2)

基于`umi-hd`做高清适应，将`px`编译成`rem`运行，设计稿是 750px

## 安装

```bash
# yarn
yarn add weui-react-v2
```

## 开发

```bash
yarn run start
```

## 编译文档

> Tips: 由于 `dumi`有点小 bug, 打包会丢失样式， 是`package.json`中`sideEffects`引起的，所以编译文档请先把这一行删除

[see issues](https://github.com/umijs/dumi/issues/225)

```bash
yarn run docs:build
```

## 编译库

```bash
$ yarn run build
```

## 开源许可

weui-react-v2 is released under the MIT license.
