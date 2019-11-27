(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "+zvC":
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

/***/ "PyW7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Qn9w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);



function PopupComponent(Component, props) {
    var closeFunc;
    var div = document.createElement("div");
    document.body.appendChild(div);
    react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, props, { defaultVisible: true, getCloseFunc: function (close) {
            closeFunc = close;
        }, getContainer: div, onUnmount: function () {
            react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.unmountComponentAtNode(div);
            div.parentNode.removeChild(div);
        } })), div);
    return closeFunc;
}
/* harmony default export */ __webpack_exports__["a"] = (PopupComponent);


/***/ }),

/***/ "bR3w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ReSL");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("hmJ2");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_3__);




function Popup(props) {
    var _a;
    var _b = props.prefixCls, prefixCls = _b === void 0 ? "weui-popup" : _b, _c = props.animateClassName, animateClassName = _c === void 0 ? "fade" : _c, popupClassName = props.popupClassName, popupContentCLassName = props.popupContentCLassName, duration = props.duration, onUnmount = props.onUnmount, children = props.children, onVisibleChange = props.onVisibleChange, getCloseFunc = props.getCloseFunc, _d = props.mask, mask = _d === void 0 ? true : _d, _e = props.maskClose, maskClose = _e === void 0 ? true : _e, getContainer = props.getContainer;
    var _f = Object(utils_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useControll */ "c"])(props, "visible", "defaultVisible"), visible = _f[0], setVisible = _f[1], isControll = _f[2];
    var _g = Object(utils_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useTranstion */ "g"])(visible), ref = _g[0], state = _g[1];
    var opening = state.indexOf("en") !== -1;
    var animateclassString = classnames__WEBPACK_IMPORTED_MODULE_0___default()(animateClassName, animateClassName + "-state-" + state, (_a = {},
        _a[animateClassName + "-open"] = opening,
        _a));
    var firstFlagRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(visible);
    var renderPortal = Object(utils_hooks__WEBPACK_IMPORTED_MODULE_2__[/* usePortal */ "f"])("", getContainer)[0];
    function handleChange(_open) {
        if (!isControll) {
            setVisible(_open);
        }
        if (onVisibleChange) {
            onVisibleChange(_open);
        }
    }
    function closeByMask() {
        if (maskClose) {
            handleChange(false);
        }
    }
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (state === utils_hooks__WEBPACK_IMPORTED_MODULE_2__[/* ENTERED */ "a"]) {
            firstFlagRef.current = true;
        }
        else if (state === utils_hooks__WEBPACK_IMPORTED_MODULE_2__[/* EXITED */ "b"] && firstFlagRef.current === true) {
            if (onUnmount) {
                onUnmount();
            }
        }
    }, [state]);
    Object(utils_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useMount */ "e"])(function () {
        var timeHandler;
        if (duration) {
            timeHandler = setTimeout(function () { return handleChange(false); }, duration);
        }
        return function () { return clearTimeout(timeHandler); };
    });
    if (getCloseFunc) {
        getCloseFunc(function () {
            handleChange(false);
        });
    }
    function content() {
        var _a;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, popupClassName, prefixCls + "-state-" + state, (_a = {}, _a[prefixCls + "-open"] = opening, _a)) },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls + "-mask", { "hidden-mask": !mask }), onClick: closeByMask }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls + "-content", popupContentCLassName, animateclassString), ref: ref }, children)));
    }
    return renderPortal(content());
}
/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Popup));


/***/ }),

/***/ "eUYX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var site_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a9X4");
/* harmony import */ var weui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lp3i");
/* harmony import */ var weui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qqMo");



function TooptipsDemo() {
    function success() {
        Object(weui_react__WEBPACK_IMPORTED_MODULE_2__[/* TooptipsPopup */ "a"])({
            type: "success",
            children: "提交成功",
        });
    }
    function fail() {
        Object(weui_react__WEBPACK_IMPORTED_MODULE_2__[/* TooptipsPopup */ "a"])({
            type: "fail",
            children: "金额不能为空",
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(site_components_Page__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], { title: "Tooptips", introduce: "\u5728\u9876\u90E8\u5F39\u51FA\u63D0\u793A, \u4E0D\u6253\u65AD\u7528\u6237\u64CD\u4F5C." },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], { onClick: success }, "\u6210\u529F\u63D0\u793A"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], { onClick: fail }, "\u9519\u8BEF\u63D0\u793A")));
}
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TooptipsDemo));


/***/ }),

/***/ "hmJ2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "lp3i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./components/Popup/Popup.tsx
var Popup = __webpack_require__("bR3w");

// EXTERNAL MODULE: ./components/Tooptips/style/index.scss
var Tooptips_style = __webpack_require__("PyW7");

// CONCATENATED MODULE: ./components/Tooptips/Tooptips.tsx





function Tooptips(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-toptips" : _a, className = props.className, style = props.style, _b = props.type, type = _b === void 0 ? "fail" : _b, children = props.children, _c = props.duration, duration = _c === void 0 ? 3000 : _c, rest = Object(tslib_es6["c" /* __rest */])(props, ["prefixCls", "className", "style", "type", "children", "duration"]);
    return (react_default.a.createElement(Popup["a" /* default */], Object(tslib_es6["a" /* __assign */])({}, rest, { mask: false, maskClose: false, duration: duration, animateClassName: "drillUp", popupContentCLassName: prefixCls + "-wrapper" }),
        react_default.a.createElement("div", { className: classnames_default()(prefixCls, className, prefixCls + "-type-" + type), style: style }, children)));
}
/* harmony default export */ var Tooptips_Tooptips = (react_default.a.memo(Tooptips));

// EXTERNAL MODULE: ./components/Popup/PopupToBody.tsx
var PopupToBody = __webpack_require__("Qn9w");

// CONCATENATED MODULE: ./components/Tooptips/index.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooptipsPopup; });
/* unused concated harmony import Tooptips */


function TooptipsPopup(props) {
    return Object(PopupToBody["a" /* default */])(Tooptips_Tooptips, props);
}



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
//# sourceMappingURL=12.chunk.js.map