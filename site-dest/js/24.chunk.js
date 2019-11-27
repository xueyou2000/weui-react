(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "EjUP":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "U6XW":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "X5rK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon_tabbar.baed3dd.png";

/***/ }),

/***/ "xYwA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./site/components/Page/index.tsx
var Page = __webpack_require__("a9X4");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./components/Panel/style/index.scss
var Panel_style = __webpack_require__("U6XW");

// CONCATENATED MODULE: ./components/Panel/index.tsx



/**
 * 面板
 */
function Panel(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-panel" : _a, className = props.className, style = props.style, children = props.children, title = props.title, footer = props.footer;
    return (react_default.a.createElement("div", { className: classnames_default()(prefixCls, className), style: style },
        react_default.a.createElement("div", { className: prefixCls + "__hd" }, title),
        react_default.a.createElement("div", { className: prefixCls + "__bd" }, children),
        footer && react_default.a.createElement("div", { className: prefixCls + "__ft" }, footer)));
}
/* harmony default export */ var components_Panel = (react_default.a.memo(Panel));

// EXTERNAL MODULE: ./components/Mediabox/style/index.scss
var Mediabox_style = __webpack_require__("EjUP");

// CONCATENATED MODULE: ./components/Mediabox/Mediabox.tsx



function Mediabox(props) {
    var _a;
    var _b = props.prefixCls, prefixCls = _b === void 0 ? "weui-media-box" : _b, className = props.className, style = props.style, title = props.title, info = props.info, thumb = props.thumb, text = props.text, compact = props.compact, children = props.children, arrow = props.arrow, onClick = props.onClick;
    var classString = classnames_default()(prefixCls, className, (_a = {},
        _a[prefixCls + "_text"] = !text,
        _a[prefixCls + "_appmsg"] = compact,
        _a[prefixCls + "_arrow"] = arrow,
        _a));
    var content = (react_default.a.createElement(react_default.a.Fragment, null,
        react_default.a.createElement("h4", { className: prefixCls + "__title" }, title),
        children && react_default.a.createElement("div", { className: prefixCls + "__desc" }, children),
        info && react_default.a.createElement("ul", { className: prefixCls + "__info" }, info)));
    return (react_default.a.createElement("div", { className: classString, style: style, onClick: onClick },
        text ? (content) : (react_default.a.createElement(react_default.a.Fragment, null,
            react_default.a.createElement("div", { className: prefixCls + "__hd" }, thumb ? react_default.a.createElement("img", { className: prefixCls + "__thumb", src: thumb, alt: "" }) : title),
            react_default.a.createElement("div", { className: prefixCls + "__bd" }, content))),
        arrow && react_default.a.createElement("div", { className: prefixCls + "__ft" })));
}
/* harmony default export */ var Mediabox_Mediabox = (react_default.a.memo(Mediabox));

// EXTERNAL MODULE: ./components/List/ListItem.tsx
var ListItem = __webpack_require__("d8CH");

// CONCATENATED MODULE: ./components/Mediabox/Meta.tsx



function MediaboxMeta(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-media-box__info__meta" : _a, className = props.className, style = props.style, children = props.children, extra = props.extra;
    return (react_default.a.createElement("li", { className: classnames_default()(prefixCls, className, { "weui-media-box__info__meta_extra": extra }), style: style }, children));
}
/* harmony default export */ var Meta = (react_default.a.memo(MediaboxMeta));

// CONCATENATED MODULE: ./site/pages/Basic/Panel/index.tsx



function PanelDemo() {
    return (react_default.a.createElement(Page["a" /* default */], { className: "panel-demo", title: "Panel", introduce: "\u7EC4\u5408\u9762\u677F" },
        react_default.a.createElement(components_Panel, { title: "\u56FE\u6587\u7EC4\u5408\u5217\u8868" },
            react_default.a.createElement(Mediabox_Mediabox, { title: "\u6807\u9898\u4E00", compact: true, thumb: __webpack_require__("X5rK") }, "\u7531\u5404\u79CD\u7269\u8D28\u7EC4\u6210\u7684\u5DE8\u578B\u7403\u72B6\u5929\u4F53\uFF0C\u53EB\u505A\u661F\u7403\u3002\u661F\u7403\u6709\u4E00\u5B9A\u7684\u5F62\u72B6\uFF0C\u6709\u81EA\u5DF1\u7684\u8FD0\u884C\u8F68\u9053\u3002"),
            react_default.a.createElement(Mediabox_Mediabox, { title: "\u6807\u9898\u4E8C", compact: true, thumb: __webpack_require__("X5rK") }, "\u7531\u5404\u79CD\u7269\u8D28\u7EC4\u6210\u7684\u5DE8\u578B\u7403\u72B6\u5929\u4F53\uFF0C\u53EB\u505A\u661F\u7403\u3002\u661F\u7403\u6709\u4E00\u5B9A\u7684\u5F62\u72B6\uFF0C\u6709\u81EA\u5DF1\u7684\u8FD0\u884C\u8F68\u9053\u3002"),
            react_default.a.createElement(ListItem["a" /* default */], { arrow: true },
                react_default.a.createElement("a", null, "\u67E5\u770B\u66F4\u591A"))),
        react_default.a.createElement(components_Panel, { title: "\u6587\u5B57\u7EC4\u5408\u5217\u8868" },
            react_default.a.createElement(Mediabox_Mediabox, { title: "\u6807\u9898\u4E00", text: true }, "\u7531\u5404\u79CD\u7269\u8D28\u7EC4\u6210\u7684\u5DE8\u578B\u7403\u72B6\u5929\u4F53\uFF0C\u53EB\u505A\u661F\u7403\u3002\u661F\u7403\u6709\u4E00\u5B9A\u7684\u5F62\u72B6\uFF0C\u6709\u81EA\u5DF1\u7684\u8FD0\u884C\u8F68\u9053\u3002"),
            react_default.a.createElement(Mediabox_Mediabox, { title: "\u6807\u9898\u4E8C", text: true }, "\u7531\u5404\u79CD\u7269\u8D28\u7EC4\u6210\u7684\u5DE8\u578B\u7403\u72B6\u5929\u4F53\uFF0C\u53EB\u505A\u661F\u7403\u3002\u661F\u7403\u6709\u4E00\u5B9A\u7684\u5F62\u72B6\uFF0C\u6709\u81EA\u5DF1\u7684\u8FD0\u884C\u8F68\u9053\u3002")),
        react_default.a.createElement(components_Panel, { title: "\u6587\u5B57\u5217\u8868\u9644\u52A0\u6E90" },
            react_default.a.createElement(Mediabox_Mediabox, { title: "\u6807\u9898\u4E00", text: true, info: react_default.a.createElement("p", null,
                    react_default.a.createElement(Meta, null, "\u6587\u5B57\u6765\u6E90"),
                    react_default.a.createElement(Meta, null, "\u65F6\u95F4"),
                    react_default.a.createElement(Meta, { extra: true }, "\u5176\u4ED6\u4FE1\u606F")) }, "\u7531\u5404\u79CD\u7269\u8D28\u7EC4\u6210\u7684\u5DE8\u578B\u7403\u72B6\u5929\u4F53\uFF0C\u53EB\u505A\u661F\u7403\u3002\u661F\u7403\u6709\u4E00\u5B9A\u7684\u5F62\u72B6\uFF0C\u6709\u81EA\u5DF1\u7684\u8FD0\u884C\u8F68\u9053\u3002"))));
}
/* harmony default export */ var Basic_Panel = __webpack_exports__["default"] = (react_default.a.memo(PanelDemo));


/***/ })

}]);
//# sourceMappingURL=24.chunk.js.map