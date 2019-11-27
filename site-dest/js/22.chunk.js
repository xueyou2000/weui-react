(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

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

/***/ "XyG5":
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

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/xy-form/es/Context/FormContext.js
var FormContext = __webpack_require__("6yG6");

// EXTERNAL MODULE: ./node_modules/xy-form/es/FormItemField.js + 19 modules
var FormItemField = __webpack_require__("mcfo");

// EXTERNAL MODULE: ./components/List/ListItem.tsx
var ListItem = __webpack_require__("d8CH");

// EXTERNAL MODULE: ./components/Checkbox/style/index.scss
var style = __webpack_require__("ujKk");

// CONCATENATED MODULE: ./components/Checkbox/CheckboxItem.tsx







function CheckboxItem(props) {
    var footer = props.footer, arrow = props.arrow, className = props.className, disabled = props.disabled, children = props.children, head = props.head, prop = props.prop, valueKey = props.valueKey, converValue = props.converValue, label = props.label, trigger = props.trigger, defaultValue = props.defaultValue, normalize = props.normalize, serialization = props.serialization, disabledValidate = props.disabledValidate, onValidate = props.onValidate, rest = Object(tslib_es6["c" /* __rest */])(props, ["footer", "arrow", "className", "disabled", "children", "head", "prop", "valueKey", "converValue", "label", "trigger", "defaultValue", "normalize", "serialization", "disabledValidate", "onValidate"]);
    var content = Object(react["useContext"])(FormContext["a" /* FormContext */]);
    if ("disabled" in props) {
        rest.disabled = disabled;
    }
    return (react_default.a.createElement("label", { className: classnames_default()("weui-check__label", { "weui-cell_disabled": disabled || content.disabled }), htmlFor: props.id },
        react_default.a.createElement(ListItem["a" /* default */], { className: classnames_default()(className, "checkbox-item"), footer: footer, arrow: arrow, head: react_default.a.createElement(FormItemField["a" /* default */], { prop: prop, valueKey: "checked", converValue: converValue, label: label, trigger: trigger, defaultValue: defaultValue, normalize: normalize, serialization: serialization, disabledValidate: disabledValidate, onValidate: onValidate },
                react_default.a.createElement(Checkbox["a" /* default */], Object(tslib_es6["a" /* __assign */])({}, rest))) }, children)));
}
/* harmony default export */ var Checkbox_CheckboxItem = (react_default.a.memo(CheckboxItem));

// CONCATENATED MODULE: ./site/pages/Form/Checkbox/index.tsx



function CheckboxDemo(_a) {
    var history = _a.history;
    return (react_default.a.createElement(Form["a" /* default */], { title: "\u590D\u9009\u6846\u6837\u5F0F", opr: react_default.a.createElement(Button["a" /* default */], { type: "primary", onClick: function () { return history.goBack(); } }, "\u8FD4\u56DE"), tips: react_default.a.createElement(Checkbox["a" /* default */], { className: "weui-agree" },
            react_default.a.createElement("span", { className: "weui-agree__text" },
                "\u9605\u8BFB\u5E76\u540C\u610F",
                react_default.a.createElement("a", null, "\u300A\u76F8\u5173\u6761\u6B3E\u300B"))) },
        react_default.a.createElement(ListGroup["a" /* default */], null,
            react_default.a.createElement(Checkbox_CheckboxItem, { prop: "checkbox", value: "vvv", id: "s11" }, "\u96F7\u7535\u63A5\u53E3"),
            react_default.a.createElement(Checkbox_CheckboxItem, { prop: "checkbox", value: "ggg", id: "s12" }, "type-c\u63A5\u53E3"))));
}
/* harmony default export */ var Form_Checkbox = __webpack_exports__["default"] = (Object(react_router["f" /* withRouter */])(CheckboxDemo));


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
//# sourceMappingURL=22.chunk.js.map