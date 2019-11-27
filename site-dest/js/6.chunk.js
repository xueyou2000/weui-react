(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "BGJA":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/backspace.b53ddd9.png";

/***/ }),

/***/ "GceH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./site/components/Page/index.tsx
var Page = __webpack_require__("a9X4");

// EXTERNAL MODULE: ./components/Toast/index.tsx + 1 modules
var Toast = __webpack_require__("gKhg");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/utils-hooks/es/index.js + 21 modules
var es = __webpack_require__("ReSL");

// EXTERNAL MODULE: ./components/Keyboard/style/index.scss
var Keyboard_style = __webpack_require__("Vues");

// CONCATENATED MODULE: ./components/Keyboard/AmountKeyboardUtils.ts
/**
 * 删除金额最后一位
 * @param amount 金额字符串
 */
function popAmount(amount) {
    if (amount) {
        return amount.slice(0, amount.length - 1);
    }
    else {
        return amount;
    }
}
/**
 * 寻找小数点
 * @param amount 金额字符串
 */
function findDot(amount) {
    return amount.indexOf(".");
}
/**
 * 检测是否超过2位小数
 * @param amount 金额字符串
 */
function testDotBit(amount) {
    var dotIndex = findDot(amount);
    if (dotIndex !== -1) {
        // 最多输入2位小数
        if (amount.slice(dotIndex).length > 2) {
            return false;
        }
    }
    return true;
}
/**
 * 拼接金额
 * @param amount
 * @param nextAmount
 */
function spliceAmount(amount, nextAmount) {
    var amount = String(amount);
    var nextAmount = String(nextAmount);
    return amount + nextAmount;
}
/**
 * 补全尾部0
 */
function appendZero(amount) {
    if (amount.slice(amount.length - 1) == ".") {
        return amount + "0";
    }
    else {
        return amount;
    }
}
/**
 * 去掉金额前缀0
 * @param amount
 */
function removePrefix(amount) {
    // 前缀输入多个0, 比如 0001 时， 格式化为一个0
    if (/^(0{2,})/.test(amount)) {
        return amount.replace(/^(0{2,})/, "0");
    }
    // 如果输入 0512 这种 而不是 0.5 这种则格式化去掉前缀0
    if (/^0/.test(amount) && /^0[^\\.]/.test(amount)) {
        return amount.replace(/^0/, "");
    }
    return amount;
}
/**
 * 数字键盘被按下
 * @param amount 当前金额字符串
 * @param code 按下的字符
 */
function keyboradDown(amount, code) {
    if (amount === undefined || amount === null) {
        amount = "";
    }
    switch (code) {
        case "clear":
            amount = "";
            break;
        case "backspace":
            amount = popAmount(amount);
            break;
        case ".":
            if (amount == "") {
                amount = "0.";
            }
            else if (findDot(amount) == -1 && amount.length >= 1) {
                // 确保不能输入多个小数点
                amount = amount + ".";
            }
            break;
        default:
            // 确保只能输入2未小数
            if (testDotBit(amount)) {
                amount = spliceAmount(amount, code);
            }
            break;
    }
    amount = removePrefix(amount);
    return amount;
}

// CONCATENATED MODULE: ./components/Keyboard/index.tsx





function Keyboard(props) {
    var _a;
    var _b = Object(react["useState"])(null), amount = _b[0], setAmount = _b[1];
    var _c = props.prefixCls, prefixCls = _c === void 0 ? "xy-keyboard" : _c, className = props.className, style = props.style, children = props.children, onVisibleChange = props.onVisibleChange, onConfirm = props.onConfirm, onChange = props.onChange, _d = props.clean, clean = _d === void 0 ? "Clear" : _d;
    var _e = Object(es["c" /* useControll */])(props, "visible", "defaultVisible", false), visible = _e[0], setVisible = _e[1], isControll = _e[2];
    var classString = classnames_default()(prefixCls, className, (_a = {},
        _a[prefixCls + "-show"] = visible,
        _a));
    var lastBtn = Object(react["useRef"])(null);
    function changeVisible(show) {
        if (!isControll) {
            setVisible(show);
        }
        if (onVisibleChange) {
            onVisibleChange(show);
        }
    }
    function handleKeyTouchstart(e) {
        if (lastBtn.current) {
            lastBtn.current.classList.remove("down");
            lastBtn.current.scrollLeft;
        }
        var key = e.currentTarget;
        var code = key.getAttribute("data-code");
        if (code === undefined) {
            return;
        }
        key.classList.add("down");
    }
    function handleKeyTouchend(e) {
        var key = e.currentTarget;
        lastBtn.current = key;
        var code = key.getAttribute("data-code");
        if (code !== undefined) {
            var navigator_1 = window.navigator;
            navigator_1.vibrate = navigator_1.vibrate || navigator_1.webkitVibrate || navigator_1.mozVibrate || navigator_1.msVibrate;
            if (navigator_1.vibrate) {
                window.navigator.vibrate(300);
            }
            var _amount = keyboradDown(amount, code);
            var _realAmount = parseFloat(_amount);
            if (_amount == "") {
                _realAmount = 0;
            }
            setAmount(_amount);
            if (onChange) {
                onChange(_realAmount, _amount, code);
            }
        }
    }
    function handleConfirm() {
        changeVisible(false);
        if (onConfirm) {
            var _realAmount = parseFloat(amount);
            if (amount == "") {
                _realAmount = 0;
            }
            onConfirm(_realAmount, amount);
        }
    }
    return (react_default.a.createElement("div", { className: classString, style: style },
        react_default.a.createElement("div", { className: prefixCls + "-inner" },
            react_default.a.createElement("a", { className: classnames_default()(prefixCls + "-key", "left-0 top-0"), "data-code": "1", onTouchStart: handleKeyTouchstart, onTouchEnd: handleKeyTouchend }, "1"),
            react_default.a.createElement("a", { className: classnames_default()(prefixCls + "-key", "left-1 top-0"), "data-code": "2", onTouchStart: handleKeyTouchstart, onTouchEnd: handleKeyTouchend }, "2"),
            react_default.a.createElement("a", { className: classnames_default()(prefixCls + "-key", "left-2 top-0"), "data-code": "3", onTouchStart: handleKeyTouchstart, onTouchEnd: handleKeyTouchend }, "3"),
            react_default.a.createElement("a", { className: classnames_default()(prefixCls + "-key", "left-0 top-1"), "data-code": "4", onTouchStart: handleKeyTouchstart, onTouchEnd: handleKeyTouchend }, "4"),
            react_default.a.createElement("a", { className: classnames_default()(prefixCls + "-key", "left-1 top-1"), "data-code": "5", onTouchStart: handleKeyTouchstart, onTouchEnd: handleKeyTouchend }, "5"),
            react_default.a.createElement("a", { className: classnames_default()(prefixCls + "-key", "left-2 top-1"), "data-code": "6", onTouchStart: handleKeyTouchstart, onTouchEnd: handleKeyTouchend }, "6"),
            react_default.a.createElement("a", { className: classnames_default()(prefixCls + "-key", "left-0 top-2"), "data-code": "7", onTouchStart: handleKeyTouchstart, onTouchEnd: handleKeyTouchend }, "7"),
            react_default.a.createElement("a", { className: classnames_default()(prefixCls + "-key", "left-1 top-2"), "data-code": "8", onTouchStart: handleKeyTouchstart, onTouchEnd: handleKeyTouchend }, "8"),
            react_default.a.createElement("a", { className: classnames_default()(prefixCls + "-key", "left-2 top-2"), "data-code": "9", onTouchStart: handleKeyTouchstart, onTouchEnd: handleKeyTouchend }, "9"),
            react_default.a.createElement("a", { className: classnames_default()(prefixCls + "-key", "left-0 top-3"), "data-code": "clear", onTouchStart: handleKeyTouchstart, onTouchEnd: handleKeyTouchend }, clean),
            react_default.a.createElement("a", { className: classnames_default()(prefixCls + "-key", "left-1 top-3"), "data-code": "0", onTouchStart: handleKeyTouchstart, onTouchEnd: handleKeyTouchend }, "0"),
            react_default.a.createElement("a", { className: classnames_default()(prefixCls + "-key", "left-2 top-3"), "data-code": ".", onTouchStart: handleKeyTouchstart, onTouchEnd: handleKeyTouchend }, "."),
            react_default.a.createElement("a", { className: classnames_default()(prefixCls + "-key", "left-3 top-0"), "data-code": "backspace", onTouchStart: handleKeyTouchstart, onTouchEnd: handleKeyTouchend },
                react_default.a.createElement("img", { src: __webpack_require__("BGJA"), alt: "" })),
            react_default.a.createElement("a", { className: classnames_default()(prefixCls + "-key", "left-3 top-1 confirm-btn"), onClick: handleConfirm }, children))));
}
/* harmony default export */ var components_Keyboard = (react_default.a.memo(Keyboard));

// EXTERNAL MODULE: ./site/pages/Form/Keyboard/index.scss
var Form_Keyboard = __webpack_require__("Hodo");

// CONCATENATED MODULE: ./site/pages/Form/Keyboard/index.tsx




function KeyboardDemo() {
    var _a = Object(react["useState"])(null), amountStr = _a[0], setAmountStr = _a[1];
    function amountChange(amount, _amountStr) {
        console.log("金额", amount);
        setAmountStr(_amountStr);
    }
    function submit(amount) {
        Toast["a" /* default */].success("提交金额" + amount);
    }
    return (react_default.a.createElement(Page["a" /* default */], { className: "keyboard-demo", title: "Keyboard", introduce: "\u91D1\u989D\u952E\u76D8" },
        react_default.a.createElement("div", { className: "payment-page__bd" },
            react_default.a.createElement("h1", { className: "paymeny-title" }, "\u8F93\u5165\u4ED8\u6B3E\u91D1\u989D"),
            react_default.a.createElement("div", { className: "fake-amount-input" },
                react_default.a.createElement("div", { className: "amount-placeholder" }, "\u8BF7\u8F93\u5165\u91D1\u989D"),
                react_default.a.createElement("div", { className: "amount-input" }),
                react_default.a.createElement("div", { className: "amount_plan" },
                    react_default.a.createElement("span", { className: "amount" }, amountStr),
                    react_default.a.createElement("span", { className: "unit" }, "$")))),
        react_default.a.createElement(components_Keyboard, { visible: true, onChange: amountChange, onConfirm: submit },
            react_default.a.createElement("span", { className: "submit-btn" },
                react_default.a.createElement("div", null, "\u786E"),
                react_default.a.createElement("div", null, "\u8BA4")))));
}
/* harmony default export */ var pages_Form_Keyboard = __webpack_exports__["default"] = (react_default.a.memo(KeyboardDemo));


/***/ }),

/***/ "Hodo":
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

/***/ "V3xl":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Vues":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "gKhg":
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

// EXTERNAL MODULE: ./components/Icon/index.tsx
var Icon = __webpack_require__("Vy3d");

// EXTERNAL MODULE: ./components/Icon/Loading.tsx
var Loading = __webpack_require__("LDgl");

// EXTERNAL MODULE: ./components/Popup/Popup.tsx
var Popup = __webpack_require__("bR3w");

// EXTERNAL MODULE: ./components/Toast/style/index.scss
var Toast_style = __webpack_require__("V3xl");

// CONCATENATED MODULE: ./components/Toast/Toast.tsx







function getIcon(type) {
    switch (type) {
        case "error":
            return react_default.a.createElement(Icon["a" /* default */], { icon: "warn" });
        case "info":
            return react_default.a.createElement(Icon["a" /* default */], { icon: "info" });
        case "loading":
            return react_default.a.createElement(Loading["b" /* default */], null);
        default:
            return react_default.a.createElement(Icon["a" /* default */], { icon: "success" });
    }
}
function Toast_Toast(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "xy-toast" : _a, className = props.className, style = props.style, _b = props.type, type = _b === void 0 ? "success" : _b, children = props.children, _c = props.duration, duration = _c === void 0 ? 3000 : _c, rest = Object(tslib_es6["c" /* __rest */])(props, ["prefixCls", "className", "style", "type", "children", "duration"]);
    return (react_default.a.createElement(Popup["a" /* default */], Object(tslib_es6["a" /* __assign */])({}, rest, { duration: duration, maskClose: false, popupClassName: prefixCls + "-popup", popupContentCLassName: prefixCls + "-wrapper" }),
        react_default.a.createElement("div", { className: classnames_default()(prefixCls, className), style: style, "data-type": type },
            react_default.a.createElement("div", { className: prefixCls + "-icon" }, getIcon(type)),
            react_default.a.createElement("div", { className: prefixCls + "-msg" }, children))));
}
/* harmony default export */ var components_Toast_Toast = (react_default.a.memo(Toast_Toast));

// EXTERNAL MODULE: ./components/Popup/PopupToBody.tsx
var PopupToBody = __webpack_require__("Qn9w");

// CONCATENATED MODULE: ./components/Toast/index.tsx


var components_Toast_Toast_0 = /** @class */ (function () {
    function Toast() {
    }
    /**
     * 成功提示
     * @param msg 提示内容
     * @param duration 持续时间
     * @param options
     */
    Toast.success = function (msg, duration, options) {
        return Object(PopupToBody["a" /* default */])(components_Toast_Toast, Object.assign({}, options, { children: msg, duration: duration, type: "success" }));
    };
    /**
     * 失败提示
     * @param msg 提示内容
     * @param duration 持续时间
     * @param options
     */
    Toast.fail = function (msg, duration, options) {
        return Object(PopupToBody["a" /* default */])(components_Toast_Toast, Object.assign({}, options, { children: msg, duration: duration, type: "error" }));
    };
    /**
     * 提示
     * @param msg 提示内容
     * @param duration 持续时间
     * @param options
     */
    Toast.info = function (msg, duration, options) {
        return Object(PopupToBody["a" /* default */])(components_Toast_Toast, Object.assign({}, options, { children: msg, duration: duration, type: "info" }));
    };
    /**
     * 加载提示
     * @param msg 提示内容
     * @param duration 持续时间
     * @param options
     */
    Toast.loading = function (msg, duration, options) {
        return Object(PopupToBody["a" /* default */])(components_Toast_Toast, Object.assign({}, options, { children: msg, duration: duration, type: "loading" }));
    };
    return Toast;
}());
/* harmony default export */ var components_Toast = __webpack_exports__["a"] = (components_Toast_Toast_0);


/***/ }),

/***/ "hmJ2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=6.chunk.js.map