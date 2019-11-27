(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "X5rK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon_tabbar.baed3dd.png";

/***/ }),

/***/ "lfWf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var site_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a9X4");
/* harmony import */ var weui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tswI");
/* harmony import */ var weui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("y6Fr");



var data = ["我的", "未读消息", "设置", "分享", "注册", "注销", "提现", "账户", "结算卡"];
function GridDemo() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(site_components_Page__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], { title: "Grid", introduce: "\u4E5D\u5BAB\u683C,\u6BCF\u884C3\u5217" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { data: data }, function (d, i) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], { label: d, key: i, icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: __webpack_require__("X5rK") }) }); })));
}
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(GridDemo));


/***/ }),

/***/ "tswI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wnya");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_2__);



/**
 * 九宫格
 */
function Grid(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-grid" : _a, className = props.className, style = props.style, data = props.data, children = props.children;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls + "s", className), style: style }, data.map(function (x, i) { return children(x, i); })));
}
/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Grid));


/***/ }),

/***/ "wnya":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "y6Fr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wnya");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_2__);



/**
 * 九宫格项
 */
function GridItem(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-grid" : _a, className = props.className, style = props.style, label = props.label, icon = props.icon, onClick = props.onClick;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className), style: style, onClick: onClick },
        icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: prefixCls + "__icon" }, icon),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: prefixCls + "__label" }, label)));
}
/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(GridItem));


/***/ })

}]);
//# sourceMappingURL=23.chunk.js.map