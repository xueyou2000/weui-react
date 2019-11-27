(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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

/***/ "hNZO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./site/components/Page/index.tsx
var Page = __webpack_require__("a9X4");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./components/Icon/Loading.tsx
var Loading = __webpack_require__("LDgl");

// EXTERNAL MODULE: ./components/Popup/Popup.tsx
var Popup = __webpack_require__("bR3w");

// EXTERNAL MODULE: ./components/Actionsheet/style/index.scss
var Actionsheet_style = __webpack_require__("lhMK");

// CONCATENATED MODULE: ./components/Actionsheet/Actionsheet.tsx






function Actionsheet(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-actionsheet" : _a, className = props.className, style = props.style, title = props.title, _b = props.menus, menus = _b === void 0 ? [] : _b, onClick = props.onClick, rest = Object(tslib_es6["c" /* __rest */])(props, ["prefixCls", "className", "style", "title", "menus", "onClick"]);
    var _c = Object(react["useState"])(false), loading = _c[0], setLoading = _c[1];
    var closeFunc;
    var getCloseFunc = function (close) {
        closeFunc = close;
        if (props.getCloseFunc) {
            props.getCloseFunc(close);
        }
    };
    function clickHandle(i) {
        if (onClick) {
            setLoading(true);
            onClick(i)
                .then(function () { return closeFunc(); })
                .then(function () { return setLoading(false); });
        }
        else {
            closeFunc();
        }
    }
    return (react_default.a.createElement(Popup["a" /* default */], Object(tslib_es6["a" /* __assign */])({}, rest, { getCloseFunc: getCloseFunc, animateClassName: "drill", popupContentCLassName: prefixCls + "-wrapper" }),
        react_default.a.createElement("div", { className: classnames_default()(prefixCls, className), style: style },
            title && (react_default.a.createElement("div", { className: prefixCls + "__title" },
                react_default.a.createElement("p", { className: prefixCls + "__title-text" }, title))),
            react_default.a.createElement("div", { className: prefixCls + "__menu" }, menus.map(function (x, i) { return (react_default.a.createElement("div", { key: i, className: prefixCls + "__cell", onClick: function () { return clickHandle(i); } },
                loading && react_default.a.createElement(Loading["b" /* default */], null),
                x)); })),
            react_default.a.createElement("div", { className: prefixCls + "__action" },
                react_default.a.createElement("div", { className: prefixCls + "__cell", onClick: function () { return closeFunc(); } }, "\u53D6\u6D88")))));
}
/* harmony default export */ var Actionsheet_Actionsheet = (react_default.a.memo(Actionsheet));

// EXTERNAL MODULE: ./components/Popup/PopupToBody.tsx
var PopupToBody = __webpack_require__("Qn9w");

// CONCATENATED MODULE: ./components/Actionsheet/index.tsx


function ActionsheetPopup(props) {
    return Object(PopupToBody["a" /* default */])(Actionsheet_Actionsheet, props);
}


// EXTERNAL MODULE: ./components/Button/index.tsx
var Button = __webpack_require__("qqMo");

// CONCATENATED MODULE: ./site/pages/FeedBack/Actionsheet/index.tsx



function ActionsheetDemo() {
    var _a = Object(react["useState"])(false), visible = _a[0], setVisible = _a[1];
    function toggle() {
        if (visible) {
            setVisible(false);
        }
        else {
            setVisible(true);
        }
    }
    function pop() {
        ActionsheetPopup({
            title: "是否解除绑定?",
            menus: ["确定"],
            onClick: function (index) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        resolve();
                    }, 800);
                });
            },
        });
    }
    return (react_default.a.createElement(Page["a" /* default */], { title: "Actionsheet", introduce: "\u5F39\u51FA\u5F0F\u83DC\u5355" },
        react_default.a.createElement(Button["a" /* default */], { type: "primary", onClick: toggle }, "\u663E\u793A"),
        react_default.a.createElement(Button["a" /* default */], { onClick: pop }, "JS\u8C03\u7528"),
        react_default.a.createElement(Actionsheet_Actionsheet, { visible: visible, onVisibleChange: setVisible, title: "\u5F39\u51FA\u6846\u6807\u9898", menus: ["菜单1", "确定"] })));
}
/* harmony default export */ var FeedBack_Actionsheet = __webpack_exports__["default"] = (react_default.a.memo(ActionsheetDemo));


/***/ }),

/***/ "hmJ2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "lhMK":
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
//# sourceMappingURL=15.chunk.js.map