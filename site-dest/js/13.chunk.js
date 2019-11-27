(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "8nBe":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ECzo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZLMm");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("plWM");




/**
 * 列表组
 */
function ListGroup(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-cells" : _a, className = props.className, style = props.style, title = props.title, children = props.children, _b = props.formMode, formMode = _b === void 0 ? true : _b;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls + "__group", className, formMode ? "weui-cells__group_form" : ""), style: style },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], { className: formMode ? "weui-cells_form" : "", title: title }, children)));
}
/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ListGroup));


/***/ }),

/***/ "RvQ8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mrSG");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xy_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6yG6");
/* harmony import */ var xy_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("b0S1");
/* harmony import */ var xy_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("mcfo");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("d8CH");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("3mje");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_7__);






function FormItem(props) {
    var _a;
    var _b = props.prefixCls, prefixCls = _b === void 0 ? "form-item" : _b, className = props.className, style = props.style, label = props.label, required = props.required, footer = props.footer, arrow = props.arrow, onClick = props.onClick, children = props.children, head = props.head, disabled = props.disabled, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "c"])(props, ["prefixCls", "className", "style", "label", "required", "footer", "arrow", "onClick", "children", "head", "disabled"]);
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]), failValidateResult = _c[0], setFailValidateResult = _c[1];
    var content = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(xy_form__WEBPACK_IMPORTED_MODULE_3__[/* FormContext */ "a"]);
    var _disabled = content.disabled || props.disabled;
    // Tips: 通过ref来确保failValidateResult是最新的值, validateChangeHandle函数中failValidateResult总是第一次初始化的值!
    var lastFailValidateRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(failValidateResult);
    var classString = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className, (_a = {},
        _a[prefixCls + "-required"] = required,
        _a[prefixCls + "-error"] = lastFailValidateRef.current.length > 0,
        _a["weui-cell_disabled"] = _disabled,
        _a));
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(typeof props.label === "string" ? props.label : null), labelStr = _d[0], setLabel = _d[1];
    function labelMount(labelElement) {
        if (!labelStr && labelElement) {
            setLabel(labelElement.textContent || labelElement.innerText);
        }
    }
    function validateChangeHandle(prop, validateResult) {
        var lastFailValida = lastFailValidateRef.current;
        var i = lastFailValida.findIndex(function (x) { return x.prop === prop; });
        if (validateResult.status) {
            if (i !== -1) {
                // 清除上一次验证失败
                lastFailValidateRef.current = lastFailValida.filter(function (x) { return x.prop !== prop; });
                setFailValidateResult(lastFailValidateRef.current);
            }
        }
        else {
            if (i !== -1) {
                lastFailValida[i].msg = validateResult.msg;
                setFailValidateResult(Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArrays */ "d"])(lastFailValida));
            }
            else {
                lastFailValidateRef.current = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __spreadArrays */ "d"])(lastFailValida, [Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({ prop: prop }, validateResult)]);
                setFailValidateResult(lastFailValidateRef.current);
            }
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], { className: classString, style: style, arrow: arrow, footer: footer, onClick: onClick, head: head || (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", { className: "weui-label", ref: labelMount }, label)) },
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(xy_form__WEBPACK_IMPORTED_MODULE_4__[/* FormItemContext */ "a"].Provider, { value: { onValidateChange: validateChangeHandle, label: labelStr } }, "prop" in props ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(xy_form__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, rest), children) : children)));
}
/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(FormItem));


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

/***/ "cIhF":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fBAX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__("Ty5D");

// EXTERNAL MODULE: ./components/Form/Form.tsx + 1 modules
var Form = __webpack_require__("bVAN");

// EXTERNAL MODULE: ./components/Button/index.tsx
var Button = __webpack_require__("qqMo");

// EXTERNAL MODULE: ./components/Checkbox/Checkbox.tsx
var Checkbox = __webpack_require__("tlGR");

// EXTERNAL MODULE: ./components/List/ListGroup.tsx
var ListGroup = __webpack_require__("ECzo");

// EXTERNAL MODULE: ./components/Input/InputItem.tsx + 1 modules
var InputItem = __webpack_require__("lf5R");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/utils-hooks/es/index.js + 21 modules
var es = __webpack_require__("ReSL");

// EXTERNAL MODULE: ./components/Countdown/style/index.scss
var Countdown_style = __webpack_require__("cIhF");

// CONCATENATED MODULE: ./components/Countdown/index.tsx




/**
 * 倒计时状态
 */
var CountdownStatusEnum;
(function (CountdownStatusEnum) {
    /**
     * 普通状态
     */
    CountdownStatusEnum[CountdownStatusEnum["NORMAL"] = 0] = "NORMAL";
    /**
     * 倒计时状态
     */
    CountdownStatusEnum[CountdownStatusEnum["COUNTDOWN"] = 1] = "COUNTDOWN";
    /**
     * 倒计时完毕
     */
    CountdownStatusEnum[CountdownStatusEnum["COMPLETE"] = 2] = "COMPLETE";
})(CountdownStatusEnum || (CountdownStatusEnum = {}));
function Countdown(props) {
    var _a;
    var _b = props.prefixCls, prefixCls = _b === void 0 ? "xy-count-down" : _b, className = props.className, style = props.style, children = props.children, _c = props.disabled, disabled = _c === void 0 ? false : _c, onStart = props.onStart, _d = props.finish, finish = _d === void 0 ? "再次发送" : _d, _e = props.time, time = _e === void 0 ? 60 : _e;
    // 验证码倒计时数
    var _f = Object(react["useState"])(0), countdown = _f[0], setCountdown = _f[1];
    // 状态 0=正常, 1=倒计时, 2=倒计时完毕
    var _g = Object(react["useState"])(CountdownStatusEnum.NORMAL), status = _g[0], setStatus = _g[1];
    // 计时器句柄
    var timeHandle = Object(react["useRef"])(null);
    // 是否发送请求中
    var _h = Object(react["useState"])(false), loading = _h[0], setLoading = _h[1];
    var countdownRef = Object(react["useRef"])(0);
    function start() {
        if (loading || status === CountdownStatusEnum.COUNTDOWN) {
            return;
        }
        if (onStart) {
            setLoading(true);
            onStart(disabled)
                .then(function (keep) {
                setLoading(false);
                if (keep) {
                    doStart();
                }
            })
                .catch(function (error) {
                setLoading(false);
            });
        }
        else {
            doStart();
        }
    }
    function doStart() {
        if (disabled) {
            return;
        }
        stop();
        setCountdown(time);
        countdownRef.current = time;
        setStatus(CountdownStatusEnum.COUNTDOWN);
    }
    function stop() {
        clearInterval(timeHandle.current);
    }
    function complete() {
        stop();
        setStatus(CountdownStatusEnum.COMPLETE);
    }
    function renderStatusNode() {
        var label;
        if (status === CountdownStatusEnum.COUNTDOWN) {
            label = (react_default.a.createElement("span", null,
                "\u5269\u4F59",
                react_default.a.createElement("span", { className: prefixCls + "_timer_text" }, countdown),
                "\u79D2"));
        }
        else {
            label = loading ? "发送中" : status === CountdownStatusEnum.COMPLETE ? finish : children.props.children;
        }
        return react_default.a.cloneElement(children, { loading: loading, disabled: disabled, onClick: start, className: "weui-vcode-btn", children: label });
    }
    Object(react["useEffect"])(function () {
        if (status === CountdownStatusEnum.COUNTDOWN) {
            timeHandle.current = window.setInterval(function () {
                if (countdownRef.current <= 0) {
                    complete();
                }
                else {
                    countdownRef.current = countdownRef.current - 1;
                    setCountdown(function (prev) { return --prev; });
                }
            }, 1000);
            return stop;
        }
    }, [status, countdown]);
    Object(es["h" /* useUnmount */])(function () {
        stop();
    });
    return (react_default.a.createElement("span", { className: classnames_default()(prefixCls, className, (_a = {}, _a[prefixCls + "--disabled"] = disabled, _a)), style: style }, renderStatusNode()));
}
/* harmony default export */ var components_Countdown = (react_default.a.memo(Countdown));

// CONCATENATED MODULE: ./site/pages/Form/Form/Structure.tsx



function FormStructureDemo(_a) {
    var history = _a.history;
    function sendVerifyCode() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(true);
            }, 600);
        });
    }
    return (react_default.a.createElement(Form["a" /* default */], { title: "\u8868\u5355\u6807\u9898", desc: "\u8868\u5355\u8BF4\u660E", opr: react_default.a.createElement(Button["a" /* default */], { type: "primary", onClick: function () { return history.goBack(); } }, "\u8FD4\u56DE"), tips: react_default.a.createElement(Checkbox["a" /* default */], { className: "weui-agree" },
            react_default.a.createElement("span", { className: "weui-agree__text" },
                "\u9605\u8BFB\u5E76\u540C\u610F",
                react_default.a.createElement("a", null, "\u300A\u76F8\u5173\u6761\u6B3E\u300B"))) },
        react_default.a.createElement(ListGroup["a" /* default */], null,
            react_default.a.createElement(InputItem["a" /* default */], { prop: "phone", label: "\u624B\u673A\u53F7", type: "number", clearable: true, placeholder: "\u8BF7\u8F93\u516511\u4F4D\u624B\u673A\u53F7", pattern: "[0-9]*", maxLength: 11 }),
            react_default.a.createElement(InputItem["a" /* default */], { prop: "code", className: "weui-cell_vcode", label: "\u9A8C\u8BC1\u7801", type: "number", pattern: "[0-9]*", clearable: true, placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801", maxLength: 6, footer: react_default.a.createElement(components_Countdown, { onStart: sendVerifyCode },
                    react_default.a.createElement(Button["a" /* default */], null, "\u83B7\u53D6\u9A8C\u8BC1\u7801")) }),
            react_default.a.createElement(InputItem["a" /* default */], { prop: "name", label: "\u59D3\u540D", placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u771F\u5B9E\u59D3\u540D" }))));
}
/* harmony default export */ var Structure = __webpack_exports__["default"] = (Object(react_router["f" /* withRouter */])(FormStructureDemo));


/***/ }),

/***/ "lf5R":
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

// EXTERNAL MODULE: ./node_modules/utils-hooks/es/index.js + 21 modules
var es = __webpack_require__("ReSL");

// EXTERNAL MODULE: ./node_modules/xy-form/es/Context/FormContext.js
var FormContext = __webpack_require__("6yG6");

// EXTERNAL MODULE: ./components/Form/FormItem.tsx
var FormItem = __webpack_require__("RvQ8");

// EXTERNAL MODULE: ./components/Icon/index.tsx
var Icon = __webpack_require__("Vy3d");

// EXTERNAL MODULE: ./components/Input/style/index.scss
var Input_style = __webpack_require__("8nBe");

// CONCATENATED MODULE: ./components/Input/Input.tsx





var Input = react_default.a.forwardRef(function (props, ref) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-input" : _a, className = props.className, style = props.style, _b = props.type, type = _b === void 0 ? "text" : _b, defaultValue = props.defaultValue, onBlur = props.onBlur, onChange = props.onChange, genericProps = Object(tslib_es6["c" /* __rest */])(props, ["prefixCls", "className", "style", "type", "defaultValue", "onBlur", "onChange"]);
    var classString = classnames_default()(prefixCls, className);
    var _c = Object(es["c" /* useControll */])(props, "value", "defaultValue"), value = _c[0], setValue = _c[1], isControll = _c[2];
    function changeValue(val) {
        if (props.disabled) {
            return;
        }
        if (!isControll) {
            setValue(val);
        }
        if (onChange) {
            onChange(val);
        }
    }
    function changeHandle(event) {
        changeValue(event.target.value);
    }
    function blurHandle(e) {
        if (onBlur) {
            onBlur(e);
        }
        // Tips: 防止ios键盘底部位置空出
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    genericProps["style"] = style;
    genericProps["ref"] = ref;
    return react_default.a.createElement("input", Object(tslib_es6["a" /* __assign */])({}, genericProps, { type: type }, (isControll ? { value: value || "" } : { defaultValue: value }), { "aria-disabled": props.disabled, className: classString, onChange: changeHandle, onBlur: blurHandle }));
});
/* harmony default export */ var Input_Input = (react_default.a.memo(Input));

// CONCATENATED MODULE: ./components/Input/InputItem.tsx









function NumberNormalize(val) {
    if (val) {
        return parseFloat(val);
    }
    else {
        return null;
    }
}
function InputItem(props) {
    var content = Object(react["useContext"])(FormContext["a" /* FormContext */]);
    var formMethods = content && content.formMethods;
    var type = props.type, prefixCls = props.prefixCls, className = props.className, style = props.style, id = props.id, name = props.name, value = props.value, defaultValue = props.defaultValue, placeholder = props.placeholder, autoFocus = props.autoFocus, tabIndex = props.tabIndex, onFocus = props.onFocus, onBlur = props.onBlur, onKeyDown = props.onKeyDown, onChange = props.onChange, onCompositionStart = props.onCompositionStart, onCompositionEnd = props.onCompositionEnd, pattern = props.pattern, maxLength = props.maxLength, _a = props.clearable, clearable = _a === void 0 ? false : _a, _b = props.converNumber, converNumber = _b === void 0 ? false : _b, rest = Object(tslib_es6["c" /* __rest */])(props, ["type", "prefixCls", "className", "style", "id", "name", "value", "defaultValue", "placeholder", "autoFocus", "tabIndex", "onFocus", "onBlur", "onKeyDown", "onChange", "onCompositionStart", "onCompositionEnd", "pattern", "maxLength", "clearable", "converNumber"]);
    var _c = Object(react["useState"])(false), visible = _c[0], setVisible = _c[1];
    var timeHandler = Object(react["useRef"])(null);
    var inputProps = {
        type: type,
        prefixCls: prefixCls,
        style: style,
        id: id,
        name: name,
        value: value,
        defaultValue: defaultValue,
        placeholder: placeholder,
        autoFocus: autoFocus,
        tabIndex: tabIndex,
        onFocus: focusHandle,
        onBlur: blurHandle,
        onKeyDown: onKeyDown,
        onChange: changeHandle,
        onCompositionStart: onCompositionStart,
        onCompositionEnd: onCompositionEnd,
        pattern: pattern,
        maxLength: maxLength,
    };
    if ("disabled" in props) {
        inputProps.disabled = props.disabled;
    }
    if (converNumber && props.type === "number" && !props.normalize) {
        rest.normalize = NumberNormalize;
    }
    function changeHandle(val) {
        if (val) {
            if (!visible) {
                setVisible(true);
            }
        }
        else {
            if (visible) {
                setVisible(false);
            }
        }
        if (onChange) {
            onChange(val);
        }
    }
    function focusHandle(e) {
        window.clearTimeout(timeHandler.current);
        if (onFocus) {
            onFocus(e);
        }
        if (formMethods && props.prop) {
            if (formMethods.getFieldValue(props.prop) && !visible) {
                setVisible(true);
            }
        }
    }
    function blurHandle(e) {
        if (onBlur) {
            onBlur(e);
        }
        // blur 太快将 cleanIcon 隐藏，则 cleanIcon的onClick清除事件会无效
        timeHandler.current = setTimeout(function () {
            if (visible) {
                setVisible(false);
            }
        }, 50);
        // Tips: 防止ios键盘底部位置空出
        // document.body.scrollTop = 0;
        // document.documentElement.scrollTop = 0;
    }
    function clean() {
        if (formMethods && props.prop) {
            // Tips: 外部必须设置 prop 全路径
            formMethods.setFieldValue(props.prop, "");
        }
    }
    var cleanIcon = (react_default.a.createElement("a", { className: classnames_default()("weui-btn_reset weui-btn_icon weui-btn_input-clear", { visible: visible && clearable }), onClick: clean },
        react_default.a.createElement(Icon["a" /* default */], { icon: "clear" })));
    Object(es["e" /* useMount */])(function () {
        window.clearTimeout(timeHandler.current);
    });
    return (react_default.a.createElement(FormItem["a" /* default */], Object(tslib_es6["a" /* __assign */])({}, rest, { className: classnames_default()(className, "input-item"), footer: rest.footer || cleanIcon }),
        react_default.a.createElement(Input_Input, Object(tslib_es6["a" /* __assign */])({}, inputProps))));
}
/* harmony default export */ var Input_InputItem = __webpack_exports__["a"] = (react_default.a.memo(InputItem));


/***/ }),

/***/ "tlGR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mrSG");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ReSL");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Vy3d");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ujKk");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_5__);






var Checkbox = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
    var _a;
    var _b = props.prefixCls, prefixCls = _b === void 0 ? "weui-check" : _b, className = props.className, style = props.style, defaultChecked = props.defaultChecked, children = props.children, _c = props.stand, stand = _c === void 0 ? false : _c, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "c"])(props, ["prefixCls", "className", "style", "defaultChecked", "children", "stand"]);
    var _d = Object(utils_hooks__WEBPACK_IMPORTED_MODULE_3__[/* useControll */ "c"])(props, "checked", "defaultChecked", false), checked = _d[0], setChecked = _d[1], isControll = _d[2];
    var classString = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, (_a = {},
        _a[prefixCls + "-checked"] = checked,
        _a[prefixCls + "-disabled"] = props.disabled,
        _a));
    function changeChecked(check) {
        if (props.disabled) {
            return;
        }
        if (!isControll) {
            // 非受控组件将当前checked作为唯一数据源
            setChecked(check);
        }
        if (props.onChange) {
            props.onChange(check, props.value);
        }
    }
    function handleCheckChange(e) {
        changeChecked(e.target.checked);
    }
    function toggle() {
        if (!("checked" in props) || stand) {
            changeChecked(!checked);
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("checkbox-wrap", className) },
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, rest, { value: rest.value || "" }, (isControll ? { checked: checked } : { defaultChecked: checked }), { type: "checkbox", "aria-disabled": props.disabled, className: classString, onChange: handleCheckChange, ref: ref })),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], { icon: "checked", onClick: toggle }),
        children && react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(children, { onClick: toggle })));
});
/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Checkbox));


/***/ }),

/***/ "ujKk":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=13.chunk.js.map