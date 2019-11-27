(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "+zvC":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0CdP":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0GAQ":
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

/***/ "mU/c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./components/Footer/style/index.scss
var Footer_style = __webpack_require__("nEXY");

// CONCATENATED MODULE: ./components/Footer/index.tsx



function Footer(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-footer" : _a, className = props.className, style = props.style, children = props.children, links = props.links;
    return (react_default.a.createElement("div", { className: classnames_default()(prefixCls, className), style: style },
        react_default.a.createElement("p", { className: prefixCls + "__links" }, links),
        react_default.a.createElement("p", { className: prefixCls + "__text" }, children)));
}
/* harmony default export */ var components_Footer = (react_default.a.memo(Footer));

// EXTERNAL MODULE: ./components/Icon/index.tsx
var Icon = __webpack_require__("Vy3d");

// EXTERNAL MODULE: ./components/Result/style/index.scss
var Result_style = __webpack_require__("0GAQ");

// CONCATENATED MODULE: ./components/Result/index.tsx




function getIcon(type) {
    if (!type) {
        return null;
    }
    switch (type) {
        case "fail":
            return react_default.a.createElement(Icon["a" /* default */], { icon: "warn" });
        case "info":
            return react_default.a.createElement(Icon["a" /* default */], { icon: "info" });
        default:
            return react_default.a.createElement(Icon["a" /* default */], { icon: "success" });
    }
}
function Result(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-msg" : _a, className = props.className, style = props.style, title = props.title, icon = props.icon, desc = props.desc, extra = props.extra, children = props.children, type = props.type;
    return (react_default.a.createElement("div", { className: classnames_default()(prefixCls, className, prefixCls + type), style: style },
        type || icon ? react_default.a.createElement("div", { className: prefixCls + "__icon-area" }, icon || getIcon(type)) : null,
        react_default.a.createElement("div", { className: prefixCls + "__text-area" },
            react_default.a.createElement("h2", { className: prefixCls + "__title" }, title),
            react_default.a.createElement("div", { className: prefixCls + "__desc" }, desc)),
        react_default.a.createElement("div", { className: prefixCls + "__opr-area" }, children),
        react_default.a.createElement("div", { className: prefixCls + "__extra-area" }, extra)));
}
/* harmony default export */ var components_Result = (react_default.a.memo(Result));

// EXTERNAL MODULE: ./components/Preview/Preview.tsx + 1 modules
var Preview = __webpack_require__("RGaz");

// EXTERNAL MODULE: ./components/Preview/PreviewItem.tsx
var PreviewItem = __webpack_require__("s1oF");

// EXTERNAL MODULE: ./components/Button/index.tsx
var Button = __webpack_require__("qqMo");

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__("Ty5D");

// CONCATENATED MODULE: ./site/pages/FeedBack/Result/index.tsx



function AppFooter() {
    return (react_default.a.createElement(components_Footer, { links: [react_default.a.createElement("a", { key: "ios" }, "IOS\u7248\u672C"), react_default.a.createElement("a", { key: "apk" }, "\u5B89\u5353\u7248\u672C")] },
        react_default.a.createElement("a", { href: "tel:400-860-7199" }, "\u5BA2\u670D\u7535\u8BDD: 400-860-7199"),
        react_default.a.createElement("br", null),
        "Copyright \u00A9 2008-2016 weui.io"));
}
function ResultDemo(_a) {
    var history = _a.history;
    return (react_default.a.createElement(components_Result, { type: "success", title: "\u652F\u4ED8\u6210\u529F", desc: react_default.a.createElement("div", null,
            react_default.a.createElement(Preview["a" /* default */], { subTitle: "\u8BA2\u5355\u91D1\u989D", title: "$12.54" },
                react_default.a.createElement(PreviewItem["a" /* default */], { title: "\u8DEF\u8D39" }, "$10.50"),
                react_default.a.createElement(PreviewItem["a" /* default */], { title: "\u624B\u7EED\u8D39" }, "$2.04"),
                react_default.a.createElement(PreviewItem["a" /* default */], { title: "\u6253\u8D4F" }, "$0"))), extra: react_default.a.createElement(AppFooter, null) },
        react_default.a.createElement(Button["a" /* default */], { type: "primary", onClick: function () { return history.goBack(); } }, "\u786E\u5B9A"),
        react_default.a.createElement(Button["a" /* default */], { onClick: function () { return history.goBack(); } }, "\u8FD4\u56DE")));
}
/* harmony default export */ var FeedBack_Result = __webpack_exports__["default"] = (Object(react_router["f" /* withRouter */])(ResultDemo));


/***/ }),

/***/ "nEXY":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "odqs":
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
//# sourceMappingURL=5.chunk.js.map