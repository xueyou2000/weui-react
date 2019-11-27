(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "0CdP":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "NKF/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var site_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a9X4");
/* harmony import */ var weui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tswI");
/* harmony import */ var weui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("y6Fr");
/* harmony import */ var weui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Vy3d");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("gbeQ");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);




var data = [
    "success",
    "safe-success",
    "success-circle",
    "success-no-circle",
    "warn",
    "safe-warn",
    "info",
    "info-circle",
    "waiting",
    "waiting-circle",
    "circle",
    "download",
    "cancel",
    "search",
    "clear",
    "back",
    "delete",
    "arrow",
    "arrow-bold",
    "back-arrow",
    "back-arrow-thin",
    "back-circle",
    "close",
    "close-thin",
];
function IconDemo() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(site_components_Page__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], { className: "icons-demo", title: "Icons", introduce: "\u5185\u7F6E\u56FE\u6807, \u4E5F\u80FD\u914D\u5408 @svgr/webpack \u4F20\u5165svg\u81EA\u5B9A\u4E49\u56FE\u6807" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { data: data }, function (d, i) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], { label: d, key: d, icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], { icon: d }) }); })));
}
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(IconDemo));


/***/ }),

/***/ "Vy3d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0CdP");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_2__);



/**
 * 图标
 * @description 配合 @svgr/webpack 使用
 * @param props
 */
function Icon(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-icon" : _a, className = props.className, style = props.style, onClick = props.onClick, icon = props.icon, _b = props.spin, spin = _b === void 0 ? false : _b, children = props.children;
    var internal = typeof icon === "string";
    var Icon = icon;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className, internal ? prefixCls + "-" + icon : null, { spin: spin }), style: style, onClick: onClick },
        !internal && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, null),
        children));
}
/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Icon));


/***/ }),

/***/ "gbeQ":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
//# sourceMappingURL=18.chunk.js.map