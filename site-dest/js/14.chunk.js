(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "2aFG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/utils-hooks/es/index.js + 21 modules
var es = __webpack_require__("ReSL");

// EXTERNAL MODULE: ./components/Button/index.tsx
var Button = __webpack_require__("qqMo");

// EXTERNAL MODULE: ./components/HalfScreenDialog/HalfScreenDialog.tsx
var HalfScreenDialog = __webpack_require__("klO8");

// EXTERNAL MODULE: ./components/utils/array-utils.ts
var array_utils = __webpack_require__("mVVa");

// EXTERNAL MODULE: ./components/utils/object-utils.ts
var object_utils = __webpack_require__("6DHa");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./components/utils/number-utils.ts
/**
 * 限制在 lower 和 upper 之间的值
 * @param i 被限制的值
 * @param min 下限
 * @param max 上限
 */
function clamp(i, min, max) {
    if (i < min) {
        return min;
    }
    else if (i > max) {
        return max;
    }
    else {
        return i;
    }
}

// EXTERNAL MODULE: ./components/Picker/style/index.scss
var Picker_style = __webpack_require__("9kUi");

// CONCATENATED MODULE: ./components/Picker/PickerGroup.tsx





// 单行选项高度
var ITEM_HEIGHT = 48;
/**
 * 计算偏移
 * @param i
 * @param half
 */
function calcOffset(i) {
    if (i === -1) {
        return 96;
    }
    return 96 - i * ITEM_HEIGHT;
}
/**
 * 计算索引
 * @param offset
 */
function calcIndex(offset) {
    return Math.round((96 - offset) / ITEM_HEIGHT);
}
function PickerGroup(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-picker" : _a, data = props.data, index = props.index, onChange = props.onChange, passive = props.passive;
    // 中心索引
    var half = Math.floor(data.length / 2);
    var _b = Object(es["c" /* useControll */])(props, "value", "defaultValue", data[half].value), value = _b[0], setValue = _b[1], isControll = _b[2];
    // 当前选中索引
    var currentIndex = data.findIndex(function (x) { return x.value === value; });
    // 起始touch偏移
    var startOffsetRef = Object(react["useRef"])(0);
    // 开始偏移
    var startTranslate = calcOffset(currentIndex);
    // 移动偏移
    var moveTranslate = Object(react["useRef"])(0);
    var contentRef = Object(react["useRef"])(null);
    function changeValue(newVal) {
        if (!isControll) {
            setValue(newVal);
        }
        if (onChange) {
            onChange(newVal, index);
        }
    }
    function touchStart(event) {
        var contentEle = contentRef.current;
        startOffsetRef.current = event.touches[0].clientY;
        contentEle.style.transition = "none";
    }
    function touchMove(event) {
        var target = event.target;
        var contentEle = contentRef.current;
        var wrapper = event.currentTarget;
        var _offset = (event.touches[0].clientY - startOffsetRef.current) * 0.8;
        target.stopScroll = true;
        moveTranslate.current = startTranslate + _offset;
        // console.log(`======move======== 当前translate3d(${startTranslate})  移动偏移(${startTranslate})  计算后偏移(${moveTranslate.current})`);
        contentEle.style.transform = "translate3d(0px, " + moveTranslate.current + "px, 0px)";
    }
    function touchEnd(event) {
        var contentEle = contentRef.current;
        // 限定范围
        var offset = clamp(moveTranslate.current, calcOffset(data.length - 1), 96);
        var i = calcIndex(offset);
        startOffsetRef.current = 0;
        contentEle.style.transition = "all 0.3s ease 0s";
        if (data[i].disabled) {
            // 复原
            contentEle.style.transform = "translate3d(0px, " + startTranslate + "px, 0px)";
        }
        else {
            contentEle.style.transform = "translate3d(0px, " + calcOffset(i) + "px, 0px)";
            changeValue(data[i].value);
        }
    }
    Object(react["useEffect"])(function () {
        // 确保有默认值
        if (value === null && data.length > 0 && !passive) {
            changeValue(data[0].value);
        }
    }, [value]);
    Object(es["e" /* useMount */])(function () {
        function stopFunc(e) {
            var target = e.target;
            if (target && target.stopScroll) {
                e.preventDefault();
            }
        }
        document.addEventListener("touchmove", stopFunc, { passive: false });
        return function () { return document.removeEventListener("touchmove", stopFunc); };
    });
    return (react_default.a.createElement("div", { className: prefixCls + "__group", onTouchStart: touchStart, onTouchMove: touchMove, onTouchEnd: touchEnd },
        react_default.a.createElement("div", { className: prefixCls + "__mask" }),
        react_default.a.createElement("div", { className: prefixCls + "__indicator" }),
        react_default.a.createElement("div", { className: prefixCls + "__content", ref: contentRef, style: { transform: "translate3d(0px, " + startTranslate + "px, 0px)" } }, data.map(function (x, i) {
            var _a;
            return (react_default.a.createElement("div", { className: classnames_default()(prefixCls + "__item", (_a = {},
                    _a[prefixCls + "__disabled"] = x.disabled,
                    _a)), key: i }, x.label));
        }))));
}
/* harmony default export */ var Picker_PickerGroup = (react_default.a.memo(PickerGroup));

// CONCATENATED MODULE: ./components/Picker/Picker.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createCascadeData; });









function getValByArray(i, array) {
    if (i < array.length) {
        return array[i];
    }
    else {
        return null;
    }
}
function Picker(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-picker" : _a, className = props.className, style = props.style, data = props.data, value = props.value, defaultValue = props.defaultValue, onChange = props.onChange, _b = props.cols, cols = _b === void 0 ? 1 : _b, _c = props.cascade, cascade = _c === void 0 ? false : _c, onConfirm = props.onConfirm, rest = Object(tslib_es6["c" /* __rest */])(props, ["prefixCls", "className", "style", "data", "value", "defaultValue", "onChange", "cols", "cascade", "onConfirm"]);
    var _d = Object(es["c" /* useControll */])(props, "value", "defaultValue", Object(array_utils["a" /* fillingArray */])(cols, null)), val = _d[0], setVal = _d[1], isControll = _d[2];
    // 解决受控模式下,外部传入空导致异常
    var saveVal = val || Object(array_utils["a" /* fillingArray */])(cols, null);
    var lastVal = Object(react["useRef"])(saveVal);
    function changeValue(newVal) {
        if (!isControll) {
            setVal(newVal);
        }
        if (onChange) {
            onChange(newVal);
        }
    }
    function changeColValue(colVal, index) {
        if (cascade) {
            // 级联时，当前列改变了，后面的值都需要清空
            lastVal.current = lastVal.current.map(function (x, i) {
                if (i < index) {
                    return x;
                }
                else if (i === index) {
                    return colVal;
                }
                else {
                    return null;
                }
            });
            changeValue(lastVal.current);
        }
        else {
            lastVal.current[index] = colVal;
            changeValue(saveVal.map(function (x, i) { return (i === index ? colVal : x); }));
        }
    }
    function confirmHandle(i) {
        if (onConfirm) {
            onConfirm(lastVal.current);
        }
        return Promise.resolve();
    }
    function createPickerGroups() {
        if (!data) {
            return null;
        }
        var groups = [];
        // 多列模式
        var multiMode = data.length > 0 && Object(object_utils["a" /* isArray */])(data[0]);
        // 归一化数据源， 将 多列数据, 单列数据 统一成  PickerItem[][] 多列格式
        var _data = multiMode ? data : [data];
        if (cascade) {
            // 根据当前所选值，创建级联数据
            _data = createCascadeData(data, saveVal);
        }
        for (var i = 0; i < _data.length; ++i) {
            groups.push(react_default.a.createElement(Picker_PickerGroup, { key: i, cascade: cascade, data: _data[i], index: i, value: getValByArray(i, saveVal), onChange: changeColValue, passive: !!defaultValue }));
        }
        return groups;
    }
    return (react_default.a.createElement(HalfScreenDialog["a" /* default */], Object(tslib_es6["a" /* __assign */])({}, rest, { footer: [react_default.a.createElement(Button["a" /* default */], null, "\u786E\u5B9A")], onClick: confirmHandle }),
        react_default.a.createElement("div", { className: prefixCls + "__bd" }, createPickerGroups())));
}
/* harmony default export */ var Picker_Picker = __webpack_exports__["b"] = (react_default.a.memo(Picker));
/**
 * 创建级联数据
 * @param data
 * @param vals
 */
function createCascadeData(data, vals) {
    // vals [2, null, null]
    var cascadeData = [data];
    var _loop_1 = function (i) {
        var v = vals[i - 1];
        if (v !== null) {
            var prev = cascadeData[i - 1].find(function (x) { return x.value === v; });
            if (prev && prev.children && prev.children.length > 0) {
                cascadeData.push(prev.children);
            }
        }
        else {
            // 使用默认第一个作为默认
            var prev = cascadeData[i - 1][0];
            if (prev && prev.children && prev.children.length > 0) {
                cascadeData.push(prev.children);
            }
        }
    };
    for (var i = 1; i < vals.length; ++i) {
        _loop_1(i);
    }
    return cascadeData;
}


/***/ }),

/***/ "6DHa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isArray; });
/**
 * 检测是否纯数组类型
 * @param obj
 */
function isArray(obj) {
    if (!obj) {
        return false;
    }
    return /Array/.test(Object.prototype.toString.call(obj));
}


/***/ }),

/***/ "9kUi":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "CrIY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPickerLabel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ReSL");
/* harmony import */ var _utils_array_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mVVa");
/* harmony import */ var _utils_object_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("6DHa");
/* harmony import */ var _Picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2aFG");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("9kUi");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_6__);







function getPickerLabel(pickerValues, data, cascade, separator) {
    if (cascade === void 0) { cascade = false; }
    if (separator === void 0) { separator = "/"; }
    var pickerItems = [];
    // 多列模式
    var multiMode = data.length > 0 && Object(_utils_object_utils__WEBPACK_IMPORTED_MODULE_4__[/* isArray */ "a"])(data[0]);
    // 归一化数据源， 将 多列数据, 单列数据 统一成  PickerItem[][] 多列格式
    var _data = multiMode ? data : [data];
    if (cascade) {
        // 根据当前所选值，创建级联数据
        _data = Object(_Picker__WEBPACK_IMPORTED_MODULE_5__[/* createCascadeData */ "a"])(data, pickerValues);
    }
    var _loop_1 = function (i) {
        var item = _data[i].find(function (x) { return x.value === pickerValues[i]; });
        pickerItems.push(item || null);
    };
    for (var i = 0; i < _data.length; ++i) {
        _loop_1(i);
    }
    return pickerItems.reduce(function (prev, current) {
        var colLabel = current ? current.label : "";
        return prev ? "" + prev + separator + colLabel : colLabel;
    }, "");
}
var PickerPanel = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    var _a = props.placeholder, placeholder = _a === void 0 ? "请选择" : _a, onChange = props.onChange, singleLabel = props.singleLabel, _b = props.separator, separator = _b === void 0 ? "/" : _b, getContainer = props.getContainer, _c = props.PickerComponent, PickerComponent = _c === void 0 ? _Picker__WEBPACK_IMPORTED_MODULE_5__[/* default */ "b"] : _c, disabledClick = props.disabledClick, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "c"])(props, ["placeholder", "onChange", "singleLabel", "separator", "getContainer", "PickerComponent", "disabledClick"]);
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_utils_array_utils__WEBPACK_IMPORTED_MODULE_3__[/* fillingArray */ "a"])(props.cols, null)), vals = _d[0], setVals = _d[1];
    var _e = Object(utils_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useControll */ "c"])(props, "visible", "defaultVisible"), visible = _e[0], setVisible = _e[1], isVisibleControll = _e[2];
    var renderPortal = Object(utils_hooks__WEBPACK_IMPORTED_MODULE_2__[/* usePortal */ "f"])("", getContainer)[0];
    function changeVisible(show) {
        if (!isVisibleControll) {
            setVisible(show);
        }
        if (props.onVisibleChange) {
            props.onVisibleChange;
            show;
        }
    }
    function showHandle() {
        if (!disabledClick) {
            changeVisible(true);
        }
    }
    function changeHandle(value) {
        if (onChange) {
            onChange(value);
        }
        setVals(value);
    }
    function _getPickerLabel() {
        var data = props.data, cascade = props.cascade;
        if (!data) {
            return null;
        }
        return getPickerLabel(vals, data, cascade, separator);
    }
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        if (props.value) {
            setVals(props.value);
        }
    }, [props.value]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "picker-panel" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", { ref: ref, onClick: showHandle }, !vals || vals[0] === null ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "placeholder" }, placeholder) : _getPickerLabel()),
        renderPortal(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PickerComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, rest, { visible: visible, onVisibleChange: changeVisible, onChange: changeHandle })))));
});
/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(PickerPanel));


/***/ }),

/***/ "NeeW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var site_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a9X4");
/* harmony import */ var weui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bVAN");
/* harmony import */ var weui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qqMo");
/* harmony import */ var weui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("RvQ8");
/* harmony import */ var weui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("CrIY");



// 级联数据
var pickerData = [
    {
        label: "票据",
        value: 0,
        children: [
            {
                label: "飞机票",
                value: 100,
            },
            {
                label: "火车票",
                value: 101,
                disabled: true,
            },
            {
                label: "的士票",
                value: 102,
            },
            {
                label: "打印票",
                value: 103,
            },
        ],
    },
    {
        label: "费用",
        value: 2,
        children: [
            {
                label: "住宿费",
                value: 200,
            },
            {
                label: "礼品费",
                value: 201,
                disabled: true,
            },
            {
                label: "活动费",
                value: 202,
            },
            {
                label: "通讯费",
                value: 203,
            },
            {
                label: "补助",
                value: 204,
            },
        ],
    },
];
// 单列数据
var pickerDataA = [
    {
        label: "飞机票",
        value: 0,
    },
    {
        label: "火车票(disabled)",
        disabled: true,
        value: 1,
    },
    {
        label: "的士票",
        value: 2,
    },
    {
        label: "住宿费",
        value: 3,
    },
    {
        label: "礼品费(disabled)",
        value: 4,
        disabled: true,
    },
    {
        label: "活动费",
        value: 5,
    },
    {
        label: "通讯费",
        value: 6,
    },
    {
        label: "补助",
        value: 7,
    },
    {
        label: "通讯费",
        value: 8,
    },
    {
        label: "其他",
        value: 9,
    },
];
// 双列数据
var pickerDataB = [
    [
        {
            label: "飞机票",
            value: 100,
        },
        {
            label: "火车票",
            value: 101,
            disabled: true,
        },
        {
            label: "的士票",
            value: 102,
        },
        {
            label: "打印票",
            value: 103,
        },
    ],
    [
        {
            label: "住宿费",
            value: 200,
        },
        {
            label: "礼品费",
            value: 201,
            disabled: true,
        },
        {
            label: "活动费",
            value: 202,
        },
        {
            label: "通讯费",
            value: 203,
        },
        {
            label: "补助",
            value: 204,
        },
    ],
];
function PickerDemo() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(site_components_Page__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], { className: "dialog-demo", title: "Picker", introduce: "\u9009\u62E9\u5668" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { title: "\u9009\u62E9\u5668", desc: "\u5355\u5217\u548C\u591A\u5217\u652F\u4ED8", opr: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], { type: "primary" }, "\u63D0\u4EA4")) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], { prop: "merchantType", label: "\u5355\u5217Picker", arrow: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], { cols: 1, placeholder: "\u8BF7\u9009\u62E9\u7968\u636E\u7C7B\u578B", title: "\u5355\u5217Picker", data: pickerDataA })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], { prop: "merchantType2", label: "\u53CC\u5217\u6570\u636E", arrow: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], { cols: 2, placeholder: "\u8BF7\u9009\u62E9\u7968\u636E\u7C7B\u578B", title: "\u53CC\u5217\u6570\u636E", data: pickerDataB })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], { prop: "merchantType3", label: "\u7EA7\u8054\u6570\u636E", arrow: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_react__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], { cascade: true, cols: 2, placeholder: "\u8BF7\u9009\u62E9\u7968\u636E\u7C7B\u578B", title: "\u7EA7\u8054\u6570\u636E", data: pickerData })))));
}
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(PickerDemo));


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

/***/ "klO8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mrSG");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("bR3w");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Vy3d");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("qyhb");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_5__);






function HalfScreenDialog(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-half-screen-dialog" : _a, className = props.className, style = props.style, title = props.title, subTitle = props.subTitle, children = props.children, _b = props.footer, footer = _b === void 0 ? [] : _b, more = props.more, onClick = props.onClick, onMoreClick = props.onMoreClick, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __rest */ "c"])(props, ["prefixCls", "className", "style", "title", "subTitle", "children", "footer", "more", "onClick", "onMoreClick"]);
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false), loading = _c[0], setLoading = _c[1];
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
    function moreClickHandle() {
        if (onMoreClick) {
            onMoreClick();
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Popup__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __assign */ "a"])({}, rest, { getCloseFunc: getCloseFunc, animateClassName: "drill", popupContentCLassName: prefixCls + "-wrapper" }),
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className), style: style },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: prefixCls + "__hd" },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: prefixCls + "__hd__side", onClick: close },
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], { className: "weui-icon-btn", icon: "btn_close" }, "\u5173\u95ED")),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: prefixCls + "__hd__main" },
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", { className: prefixCls + "__title" }, title),
                    subTitle && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", { className: prefixCls + "__subtitle" }, subTitle)),
                more && (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: prefixCls + "__hd__side", onClick: moreClickHandle },
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], { className: "weui-icon-btn", icon: "btn_more" }, "\u66F4\u591A")))),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: prefixCls + "__bd" }, children),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: prefixCls + "__ft" }, [].concat(footer).map(function (x, i) {
                return react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(x, {
                    key: i,
                    loading: loading,
                    onClick: function () { return clickHandle(i); },
                });
            })))));
}
/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(HalfScreenDialog));


/***/ }),

/***/ "mVVa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fillingArray; });
/**
 * 填充构造指定长度数组
 * @param size
 * @param val
 */
function fillingArray(size, val) {
    var array = [];
    for (var i = 0; i < size; ++i) {
        array.push(val);
    }
    return array;
}


/***/ }),

/***/ "qyhb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=14.chunk.js.map