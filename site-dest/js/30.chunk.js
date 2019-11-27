(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "7ptJ":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "JhQt":
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

// EXTERNAL MODULE: ./components/Skeleton/style/index.scss
var Skeleton_style = __webpack_require__("7ptJ");

// CONCATENATED MODULE: ./components/Skeleton/index.tsx



var ColConfig = [[22], [8, 15], [6, 18], [13, 9], [4, 3, 16], [8, 6, 8]];
function Skeleton(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "xy-skeleton" : _a, className = props.className, style = props.style, _b = props.rows, rows = _b === void 0 ? 6 : _b;
    var content = [];
    for (var i = 0; i < rows; ++i) {
        var cfgIndex = i % ColConfig.length;
        content.push(react_default.a.createElement("div", { className: prefixCls + "-row", key: i }, ColConfig[cfgIndex].map(function (d, j) { return (react_default.a.createElement("div", { className: classnames_default()(prefixCls + "-col", "col-" + d), key: j },
            react_default.a.createElement("div", { className: "stripe", style: { animationDelay: j * 0.5 + "s" } }))); })));
    }
    return (react_default.a.createElement("div", { className: classnames_default()(prefixCls, className), style: style }, content));
}
/* harmony default export */ var components_Skeleton = (react_default.a.memo(Skeleton));

// CONCATENATED MODULE: ./site/pages/FeedBack/Skeleton/index.tsx



function SkeletonDemo() {
    return (react_default.a.createElement(Page["a" /* default */], { className: "dialog-demo", title: "Skeleton", introduce: "\u9AA8\u67B6\u5C4F, \u7528\u4E8E\u9875\u9762\u52A0\u8F7D, \u5355\u9875\u9762\u6574\u4F53\u5E03\u5C40\u4E0D\u53D8" },
        react_default.a.createElement(components_Skeleton, null)));
}
/* harmony default export */ var FeedBack_Skeleton = __webpack_exports__["default"] = (react_default.a.memo(SkeletonDemo));


/***/ })

}]);
//# sourceMappingURL=30.chunk.js.map