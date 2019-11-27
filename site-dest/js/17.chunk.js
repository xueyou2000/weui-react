(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

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

/***/ "V3xl":
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

/***/ "mHR9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__("Ty5D");

// EXTERNAL MODULE: ./components/Toast/index.tsx + 1 modules
var Toast = __webpack_require__("gKhg");

// EXTERNAL MODULE: ./components/Tooptips/index.ts + 1 modules
var Tooptips = __webpack_require__("lp3i");

// EXTERNAL MODULE: ./components/Form/Form.tsx + 1 modules
var Form = __webpack_require__("bVAN");

// EXTERNAL MODULE: ./components/Button/index.tsx
var Button = __webpack_require__("qqMo");

// EXTERNAL MODULE: ./components/List/ListGroup.tsx
var ListGroup = __webpack_require__("ECzo");

// EXTERNAL MODULE: ./components/Input/InputItem.tsx + 1 modules
var InputItem = __webpack_require__("lf5R");

// EXTERNAL MODULE: ./node_modules/xy-form/es/Context/FormContext.js
var FormContext = __webpack_require__("6yG6");

// CONCATENATED MODULE: ./node_modules/xy-form/es/FormSubmitButton.js


/**
 * 提交按钮
 */
function FormSubmitButton(_a) {
    var children = _a.children;
    var context = Object(react["useContext"])(FormContext["a" /* FormContext */]);
    var _b = Object(react["useState"])(null), loading = _b[0], setLoading = _b[1];
    function clickHande(e) {
        setLoading(true);
        context.formMethods
            .submit(true)
            .then(function () {
            setLoading(false);
        })
            .catch(function () {
            setLoading(false);
        });
        e.stopPropagation();
        e.preventDefault();
    }
    return react_default.a.cloneElement(children, { onClick: clickHande, loading: loading });
}
//# sourceMappingURL=FormSubmitButton.js.map
// CONCATENATED MODULE: ./site/pages/Form/Form/Validate.tsx




var requiredErrorTips = "{{NAME}}必填";
var rule = {
    phone: [{ name: "Required", errMsg: requiredErrorTips }, { name: "PhoneNo" }],
    name: [{ name: "Required", errMsg: requiredErrorTips }],
};
function FormValidateDemo(_a) {
    var history = _a.history;
    function submit(data) {
        console.log(data);
        var stop = Toast["a" /* default */].loading("登录中...", 0);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                stop();
                Object(Tooptips["a" /* TooptipsPopup */])({ type: "success", children: "登陆成功" });
                resolve();
            }, 600);
        });
    }
    return (react_default.a.createElement(Form["a" /* default */], { title: "\u8868\u5355\u6807\u9898", desc: "\u8868\u5355\u8BF4\u660E", validConfig: rule, onSubmit: submit, opr: react_default.a.createElement(react_default.a.Fragment, null,
            react_default.a.createElement(FormSubmitButton, null,
                react_default.a.createElement(Button["a" /* default */], { type: "primary" }, "\u767B \u5F55")),
            react_default.a.createElement(Button["a" /* default */], { onClick: function () { return history.goBack(); } }, "\u8FD4\u56DE")) },
        react_default.a.createElement(ListGroup["a" /* default */], null,
            react_default.a.createElement(InputItem["a" /* default */], { prop: "phone", label: "\u624B\u673A\u53F7", type: "number", clearable: true, placeholder: "\u8BF7\u8F93\u516511\u4F4D\u624B\u673A\u53F7", pattern: "[0-9]*", maxLength: 11 }),
            react_default.a.createElement(InputItem["a" /* default */], { prop: "name", label: "\u59D3\u540D", placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u771F\u5B9E\u59D3\u540D" }))));
}
/* harmony default export */ var Validate = __webpack_exports__["default"] = (Object(react_router["f" /* withRouter */])(FormValidateDemo));


/***/ })

}]);
//# sourceMappingURL=17.chunk.js.map