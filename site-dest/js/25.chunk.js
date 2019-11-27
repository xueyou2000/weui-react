(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "Msa/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./site/components/Page/index.tsx
var Page = __webpack_require__("a9X4");

// EXTERNAL MODULE: ./components/Preview/Preview.tsx + 1 modules
var Preview = __webpack_require__("RGaz");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./components/Preview/style/index.scss
var style = __webpack_require__("odqs");

// CONCATENATED MODULE: ./components/Preview/PreviewButton.tsx



function PreviewButton(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-form-preview__btn" : _a, children = props.children, _b = props.type, type = _b === void 0 ? "default" : _b, onClick = props.onClick;
    return (react_default.a.createElement("a", { onClick: onClick, className: classnames_default()(prefixCls, prefixCls + "_" + type) }, children));
}
/* harmony default export */ var Preview_PreviewButton = (react_default.a.memo(PreviewButton));

// EXTERNAL MODULE: ./components/Preview/PreviewItem.tsx
var PreviewItem = __webpack_require__("s1oF");

// CONCATENATED MODULE: ./site/pages/Basic/Preview/index.tsx



function PreviewDemo() {
    return (react_default.a.createElement(Page["a" /* default */], { className: "preview-demo", title: "Preview", introduce: "\u8868\u5355\u9884\u89C8" },
        react_default.a.createElement(Preview["a" /* default */], { subTitle: "\u4ED8\u6B3E\u91D1\u989D", title: "\u00A52400.00", footer: react_default.a.createElement(Preview_PreviewButton, { key: "c" }, "\u64CD\u4F5C") },
            react_default.a.createElement(PreviewItem["a" /* default */], { title: "\u5546\u54C1" }, "\u7535\u52A8\u6253\u5355\u673A"),
            react_default.a.createElement(PreviewItem["a" /* default */], { title: "\u6807\u9898\u6807\u9898" }, "\u540D\u5B57\u540D\u5B57\u540D\u5B57"),
            react_default.a.createElement(PreviewItem["a" /* default */], { title: "\u6807\u9898\u6807\u9898" }, "\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57")),
        react_default.a.createElement("br", null),
        react_default.a.createElement(Preview["a" /* default */], { subTitle: "\u4ED8\u6B3E\u91D1\u989D", title: "\u00A52400.00", footer: [react_default.a.createElement(Preview_PreviewButton, { key: "a" }, "\u8F85\u52A9\u64CD\u4F5C"), react_default.a.createElement(Preview_PreviewButton, { key: "b" }, "\u63D0\u4EA4")] },
            react_default.a.createElement(PreviewItem["a" /* default */], { title: "\u5546\u54C1" }, "\u7535\u52A8\u6253\u5355\u673A"),
            react_default.a.createElement(PreviewItem["a" /* default */], { title: "\u6807\u9898\u6807\u9898" }, "\u540D\u5B57\u540D\u5B57\u540D\u5B57"),
            react_default.a.createElement(PreviewItem["a" /* default */], { title: "\u6807\u9898\u6807\u9898" }, "\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57\u5F88\u957F\u5F88\u957F\u7684\u540D\u5B57"))));
}
/* harmony default export */ var Basic_Preview = __webpack_exports__["default"] = (react_default.a.memo(PreviewDemo));


/***/ }),

/***/ "RGaz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./components/Preview/style/index.scss
var Preview_style = __webpack_require__("odqs");

// CONCATENATED MODULE: ./components/Preview/PreviewHead.tsx


function PreviewHead(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-form-preview__" : _a, children = props.children, title = props.title;
    return (react_default.a.createElement(react_default.a.Fragment, null,
        react_default.a.createElement("label", { className: prefixCls + "label" }, title),
        react_default.a.createElement("em", { className: prefixCls + "value" }, children)));
}
/* harmony default export */ var Preview_PreviewHead = (react_default.a.memo(PreviewHead));

// CONCATENATED MODULE: ./components/Preview/Preview.tsx




function Preview(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-form-preview" : _a, className = props.className, style = props.style, title = props.title, subTitle = props.subTitle, children = props.children, footer = props.footer;
    return (react_default.a.createElement("div", { className: classnames_default()(prefixCls, className), style: style },
        (title || subTitle) && (react_default.a.createElement("div", { className: prefixCls + "__hd" },
            react_default.a.createElement(Preview_PreviewHead, { title: subTitle }, title))),
        react_default.a.createElement("div", { className: prefixCls + "__bd" }, children),
        react_default.a.createElement("div", { className: prefixCls + "__ft" }, footer)));
}
/* harmony default export */ var Preview_Preview = __webpack_exports__["a"] = (react_default.a.memo(Preview));


/***/ }),

/***/ "odqs":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "s1oF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("odqs");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_1__);


function PreviewItem(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-form-preview__" : _a, children = props.children, title = props.title;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: prefixCls + "label" }, title),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: prefixCls + "value" }, children)));
}
/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(PreviewItem));


/***/ })

}]);
//# sourceMappingURL=25.chunk.js.map