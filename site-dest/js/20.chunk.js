(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "/iM7":
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

// EXTERNAL MODULE: ./components/Loadmore/style/index.scss
var Loadmore_style = __webpack_require__("SX+/");

// EXTERNAL MODULE: ./components/Icon/Loading.tsx
var Loading = __webpack_require__("LDgl");

// CONCATENATED MODULE: ./components/Loadmore/index.tsx




function Loadmore(props) {
    var _a;
    var _b = props.prefixCls, prefixCls = _b === void 0 ? "weui-loadmore" : _b, className = props.className, style = props.style, loading = props.loading, line = props.line, dot = props.dot, tips = props.tips;
    var classString = classnames_default()(prefixCls, className, (_a = {},
        _a[prefixCls + "_dot"] = dot || !tips,
        _a[prefixCls + "_line"] = dot || line || !loading,
        _a[prefixCls + "_loading"] = loading,
        _a));
    return (react_default.a.createElement("div", { className: classString, style: style },
        loading && react_default.a.createElement(Loading["a" /* Loading */], null),
        react_default.a.createElement("span", { className: prefixCls + "__tips" }, tips)));
}
/* harmony default export */ var components_Loadmore = (react_default.a.memo(Loadmore));

// EXTERNAL MODULE: ./components/Loading/style/index.scss
var Loading_style = __webpack_require__("nPpw");

// CONCATENATED MODULE: ./components/Loading/BallLoading.tsx


function BallLoading() {
    return react_default.a.createElement("div", { className: "we-loading sp-volume" });
}

// CONCATENATED MODULE: ./components/Loading/CircleLoading.tsx


function CircleLoading() {
    return react_default.a.createElement("div", { className: "we-loading sp-circle" });
}

// EXTERNAL MODULE: ./components/Loading/WaveLoading.tsx
var WaveLoading = __webpack_require__("Jq+w");

// EXTERNAL MODULE: ./site/pages/Basic/Loadmore/index.scss
var Basic_Loadmore = __webpack_require__("6uAZ");

// CONCATENATED MODULE: ./site/pages/Basic/Loadmore/index.tsx




function LoadmoreDemo() {
    return (react_default.a.createElement(Page["a" /* default */], { className: "loadmore-demo", title: "Loadmore", introduce: "\u52A0\u8F7D\u66F4\u591A" },
        react_default.a.createElement(components_Loadmore, { tips: "\u6B63\u5728\u52A0\u8F7D", loading: true }),
        react_default.a.createElement("br", null),
        react_default.a.createElement(components_Loadmore, { tips: "\u6682\u65E0\u6570\u636E" }),
        react_default.a.createElement("br", null),
        react_default.a.createElement(components_Loadmore, { dot: true }),
        react_default.a.createElement("br", null),
        react_default.a.createElement("div", { className: "align-center" },
            react_default.a.createElement(BallLoading, null)),
        react_default.a.createElement("br", null),
        react_default.a.createElement("div", { className: "align-center" },
            react_default.a.createElement(CircleLoading, null)),
        react_default.a.createElement("br", null),
        react_default.a.createElement("div", { className: "align-center" },
            react_default.a.createElement(WaveLoading["a" /* default */], null))));
}
/* harmony default export */ var pages_Basic_Loadmore = __webpack_exports__["default"] = (react_default.a.memo(LoadmoreDemo));


/***/ }),

/***/ "0CdP":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6uAZ":
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

/***/ "SX+/":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=20.chunk.js.map