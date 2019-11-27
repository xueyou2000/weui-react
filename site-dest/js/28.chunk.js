(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

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

/***/ "GQbg":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "vFlV":
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

// EXTERNAL MODULE: ./components/Switch/style/index.scss
var Switch_style = __webpack_require__("GQbg");

// CONCATENATED MODULE: ./components/Switch/SwitchItem.tsx






function SwitchBox(props) {
    var footer = props.footer, arrow = props.arrow, className = props.className, disabled = props.disabled, children = props.children, head = props.head, prop = props.prop, valueKey = props.valueKey, converValue = props.converValue, label = props.label, trigger = props.trigger, defaultValue = props.defaultValue, normalize = props.normalize, serialization = props.serialization, disabledValidate = props.disabledValidate, onValidate = props.onValidate, rest = Object(tslib_es6["c" /* __rest */])(props, ["footer", "arrow", "className", "disabled", "children", "head", "prop", "valueKey", "converValue", "label", "trigger", "defaultValue", "normalize", "serialization", "disabledValidate", "onValidate"]);
    var content = Object(react["useContext"])(FormContext["a" /* FormContext */]);
    if ("disabled" in props) {
        rest.disabled = disabled;
    }
    return (react_default.a.createElement(ListItem["a" /* default */], { className: classnames_default()(className, "checkbox-item"), footer: react_default.a.createElement(FormItemField["a" /* default */], { prop: prop, converValue: converValue, label: label, trigger: trigger, defaultValue: defaultValue, normalize: normalize, serialization: serialization, disabledValidate: disabledValidate, onValidate: onValidate }, children), arrow: arrow }, label));
}
/* harmony default export */ var SwitchItem = (react_default.a.memo(SwitchBox));

// EXTERNAL MODULE: ./node_modules/utils-hooks/es/index.js + 21 modules
var es = __webpack_require__("ReSL");

// CONCATENATED MODULE: ./components/Switch/Switch.tsx





var Switch = react_default.a.forwardRef(function (props, ref) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-switch" : _a, className = props.className, style = props.style, id = props.id, disabled = props.disabled, name = props.name, tabIndex = props.tabIndex, onChange = props.onChange;
    var _b = Object(es["c" /* useControll */])(props, "value", "defaultValue"), value = _b[0], setValue = _b[1], isControll = _b[2];
    function changeValue(checked) {
        if (props.disabled) {
            return;
        }
        if (!isControll) {
            setValue(checked);
        }
        if (onChange) {
            onChange(checked);
        }
    }
    var inputProps = {};
    if (isControll) {
        inputProps["checked"] = value || false;
    }
    else {
        inputProps["defaultChecked"] = props.defaultValue;
    }
    function handleCheckChange(e) {
        changeValue(e.target.checked);
    }
    return react_default.a.createElement("input", Object(tslib_es6["a" /* __assign */])({}, inputProps, { className: classnames_default()(prefixCls, className), ref: ref, id: id, style: style, disabled: disabled, name: name, tabIndex: tabIndex, onChange: handleCheckChange, type: "checkbox" }));
});
/* harmony default export */ var Switch_Switch = (react_default.a.memo(Switch));

// CONCATENATED MODULE: ./site/pages/Form/Switch/index.tsx



function SwitchDemo(_a) {
    var history = _a.history;
    return (react_default.a.createElement(Form["a" /* default */], { title: "\u590D\u9009\u6846\u6837\u5F0F", opr: react_default.a.createElement(Button["a" /* default */], { type: "primary", onClick: function () { return history.goBack(); } }, "\u8FD4\u56DE") },
        react_default.a.createElement(ListGroup["a" /* default */], null,
            react_default.a.createElement(SwitchItem, { prop: "switch", label: "\u6807\u9898\u6587\u5B57" },
                react_default.a.createElement(Switch_Switch, null)))));
}
/* harmony default export */ var Form_Switch = __webpack_exports__["default"] = (Object(react_router["f" /* withRouter */])(SwitchDemo));


/***/ })

}]);
//# sourceMappingURL=28.chunk.js.map