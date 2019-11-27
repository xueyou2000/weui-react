(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "+zvC":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0CdP":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "LDgl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0CdP");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_2__);



/**
 * 加载图标
 * @param props
 */
function Loading(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-loading" : _a, className = props.className, style = props.style;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className), style: style });
}
/* harmony default export */ __webpack_exports__["b"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Loading));


/***/ }),

/***/ "Mm78":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var site_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a9X4");
/* harmony import */ var weui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qqMo");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("efJT");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);




function ButtonDemo() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(site_components_Page__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], { className: "button-demo", title: "Button", introduce: "\u6309\u94AE" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "button-sp-area" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { type: "primary" }, "\u4E3B\u64CD\u4F5C"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { type: "primary", loading: true }, "\u4E3B\u64CD\u4F5C"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { type: "primary", disabled: true }, "\u4E3B\u64CD\u4F5C"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, "\u6B21\u8981\u64CD\u4F5C"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { loading: true }, "\u6B21\u8981\u64CD\u4F5C"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { disabled: true }, "\u6B21\u8981\u64CD\u4F5C"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { type: "danger" }, "\u8B66\u544A\u64CD\u4F5C"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { type: "danger", loading: true }, "\u8B66\u544A\u64CD\u4F5C"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { type: "danger", disabled: true }, "\u8B66\u544A\u64CD\u4F5C"))));
}
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ButtonDemo));


/***/ }),

/***/ "efJT":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "qqMo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LDgl");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+zvC");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_3__);




/**
 * 按钮
 */
function Button(props) {
    var _a;
    var _b = props.prefixCls, prefixCls = _b === void 0 ? "weui-btn" : _b, className = props.className, style = props.style, children = props.children, _c = props.type, type = _c === void 0 ? "default" : _c, long = props.long, loading = props.loading, disabled = props.disabled, onClick = props.onClick;
    var classString = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, className, prefixCls + "_" + type, (_a = {},
        _a[prefixCls + "_disabled"] = disabled,
        _a[prefixCls + "_loading"] = loading,
        _a[prefixCls + "_long"] = long,
        _a));
    function clickHandle(event) {
        if (!disabled && !loading && onClick) {
            onClick(event);
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { className: classString, style: style, onClick: clickHandle },
        loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Loading__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"], null),
        children));
}
/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Button));


/***/ })

}]);
//# sourceMappingURL=19.chunk.js.map