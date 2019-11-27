(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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

/***/ "FobK":
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

// EXTERNAL MODULE: ./components/Form/FormItem.tsx
var FormItem = __webpack_require__("RvQ8");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./components/Picker/PickerPanel.tsx
var PickerPanel = __webpack_require__("CrIY");

// CONCATENATED MODULE: ./node_modules/utils-dom/es/Image.js
/**
 * 加载图片工厂函数
 * @param src 图片地址
 */
function ImageFactory(src) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;
        if (img.complete) {
            resolve(img);
        }
        else {
            img.onload = function () { return resolve(img); };
            img.onerror = function (event) { return reject(event); };
            // img.onabort 事件也许应该处理
        }
    });
}
/**
 * 加载图片
 * @param url   图片地址
 */
function loadImage(url) {
    return ImageFactory(url);
}
/**
 * 加载图片
 * @param base64 图片base64数据
 */
function loadImageBase64(base64) {
    var flag = "data:image/jpeg;base64,";
    return ImageFactory(base64.indexOf(flag) === 0 ? base64 : "" + flag + base64);
}
//# sourceMappingURL=Image.js.map
// CONCATENATED MODULE: ./node_modules/utils-dom/es/Dom.js
/**
 * 获取文档document
 * TODO: 稳定后移动到 utils-dom 库
 * @param node
 */
function getDocument(node) {
    var nodeWin = node;
    var nodeEle = node;
    if (nodeWin === nodeWin.window) {
        return nodeWin.document;
    }
    if (nodeEle.nodeType === 9) {
        return node;
    }
    return nodeEle.ownerDocument;
}
/**
 * 获取视窗大小
 * @returns [viewportWidth, viewportHeight]
 */
function getViewportSize(contaninScroll) {
    if (contaninScroll === void 0) { contaninScroll = false; }
    return ["Width", "Height"].map(function (field) {
        var prop = "" + (contaninScroll ? "offset" : "client") + field;
        var doc = window.document;
        var body = doc.body;
        var documentElement = doc.documentElement;
        var documentElementProp = documentElement[prop];
        // 标准模式取 documentElement
        // backcompat 取 body
        return (doc.compatMode === "CSS1Compat" && documentElementProp) || (body && body[prop]) || documentElementProp;
    });
}
/**
 * 获取文档大小
 */
function getDocumentSize(contaninScroll) {
    if (contaninScroll === void 0) { contaninScroll = false; }
    var _a = getViewportSize(contaninScroll), viewportWidth = _a[0], viewportHeight = _a[1];
    return [viewportWidth + window.pageXOffset, viewportHeight + window.pageYOffset];
}
/**
 * 判断元素是否是window
 * @param obj
 */
function isWindow(obj) {
    return obj !== null && obj !== undefined && obj == obj.window;
}
/**
 * 定位元素
 * @description 将元素定位到wrap可视区域中
 * @param wrap 含有溢出滚动条的容器
 * @param element 元素
 */
function locateElement(wrap, element) {
    if (!wrap || !element) {
        return;
    }
    wrap.scrollTop = element.offsetTop - wrap.clientHeight / 2;
}
//# sourceMappingURL=Dom.js.map
// CONCATENATED MODULE: ./node_modules/utils-dom/es/AlignDom/utils.js

/**
 * 获取区域
 * @param element   dom元素
 * @param setDirection 是否叠加窗口滚动条距离
 */
function getRegion(element, setDirection) {
    if (setDirection === void 0) { setDirection = false; }
    var region = { left: 0, top: 0, width: 0, height: 0 };
    if ("pageX" in element) {
        region.left = element.pageX;
        region.top = element.pageY;
    }
    else if ("clientX" in element) {
        region.left = element.clientX + window.pageXOffset;
        region.top = element.clientY + window.pageYOffset;
    }
    else {
        var bound = element.getBoundingClientRect();
        region.left = bound.left;
        region.top = bound.top;
        region.width = bound.width;
        region.height = bound.height;
        if (setDirection) {
            region.left += window.pageXOffset;
            region.top += window.pageYOffset;
        }
    }
    return region;
}
/**
 * 计算点对齐后的坐标点
 * @param region    区域
 * @param pointSuite    对齐类型
 */
function calcPoint(region, pointSuite) {
    var point = { x: 0, y: 0 };
    // 处理 y 轴
    switch (pointSuite[0]) {
        case "t":
            point.y = region.top;
            break;
        case "c":
            point.y = region.top + region.height / 2;
            break;
        case "b":
            point.y = region.top + region.height;
            break;
    }
    // 处理 x 轴
    switch (pointSuite[1]) {
        case "l":
            point.x = region.left;
            break;
        case "c":
            point.x = region.left + region.width / 2;
            break;
        case "r":
            point.x = region.left + region.width;
            break;
    }
    return point;
}
/**
 * 将百分比字符串转换为数值
 * @param ratio 百分比字符串 例如: 10%
 */
function coverPercentage(ratio) {
    if (!ratio || ratio.indexOf("%") === -1) {
        return 0;
    }
    return parseFloat(ratio.replace("%", "")) / 100;
}
/**
 * 计算偏移量
 * @param region    区域
 * @param offset    偏移量
 * @param allowX    允许x轴偏移
 * @param allowY    允许y轴偏移
 */
function calcOffset(region, offset, allow) {
    if (allow === void 0) { allow = { x: true, y: true }; }
    var distance = { x: 0, y: 0 };
    if (!offset) {
        return distance;
    }
    if (allow.x) {
        distance.x = typeof offset[0] === "string" ? coverPercentage(offset[0]) * region.width : offset[0];
    }
    if (allow.y) {
        distance.y = typeof offset[1] === "string" ? coverPercentage(offset[1]) * region.height : offset[1];
    }
    return distance;
}
/**
 * 反转百分比字符串
 * @param rate
 */
function reversePercentage(rate) {
    if (rate.indexOf("-") !== -1) {
        return rate.replace("-", "");
    }
    else {
        return "-" + rate;
    }
}
/**
 * 反转偏移量
 * @param offset
 */
function flipOffset(offset) {
    if (!offset) {
        return offset;
    }
    var result = [];
    if (offset.length >= 1) {
        result[0] = typeof offset[0] === "string" ? reversePercentage(offset[0]) : -offset[0];
    }
    if (offset.length >= 2) {
        result[1] = typeof offset[1] === "string" ? reversePercentage(offset[1]) : -offset[1];
    }
    return result;
}
/**
 * 累加坐标
 * @param p1
 * @param p2
 */
function accPoint(p1, p2) {
    return { x: p1.x + p2.x, y: p1.y + p2.y };
}
/**
 * 累加反转状态
 * @param p1
 * @param p2
 */
function accRevisePoint(p1, p2) {
    return { x: p1.x || p2.x, y: p1.y || p2.y };
}
/**
 * 计算四周溢出距离
 * @param point
 * @param sourceRegion
 * @param targetRegion
 */
function clacOverFlowSize(point, sourceRegion, contaninScroll) {
    if (contaninScroll === void 0) { contaninScroll = false; }
    var _a = getDocumentSize(contaninScroll), documentWidth = _a[0], documentHeight = _a[1];
    var left = point.x < 0 ? Math.abs(point.x) : 0;
    var right = point.x + sourceRegion.width > documentWidth ? point.x + sourceRegion.width - documentWidth : 0;
    var top = point.y < 0 ? Math.abs(point.y) : 0;
    var bottom = point.y + sourceRegion.height > documentHeight ? point.y + sourceRegion.height - documentHeight : 0;
    return { left: left, right: right, top: top, bottom: bottom };
}
/**
 * 微调点
 * @description 返回微调后的坐标
 * @param point
 * @param overflow
 */
function adjustPoint(point, sourceRegion, contaninScroll) {
    if (contaninScroll === void 0) { contaninScroll = false; }
    var _a = getDocumentSize(contaninScroll), documentWidth = _a[0], documentHeight = _a[1];
    var overflow = clacOverFlowSize(point, sourceRegion, contaninScroll);
    var adjustX = false;
    var adjustY = false;
    // Tips: 溢出小于 target 尺寸的一半才微调, 否则忽略交由后续去反转
    if (overflow.left > 0 && overflow.left <= sourceRegion.width / 2 && sourceRegion.width <= documentWidth) {
        point.x = 0;
        adjustX = true;
    }
    if (overflow.top > 0 && overflow.top <= sourceRegion.height / 2 && sourceRegion.height <= documentHeight) {
        point.y = 0;
        adjustY = true;
    }
    if (overflow.right > 0 && overflow.right <= sourceRegion.width / 2 && documentWidth >= sourceRegion.width) {
        point.x = documentWidth - sourceRegion.width;
        adjustX = true;
    }
    if (overflow.bottom > 0 && overflow.bottom <= sourceRegion.height / 2 && overflow.right <= sourceRegion.width / 2 && documentHeight >= sourceRegion.height) {
        point.y = documentHeight - sourceRegion.height;
        adjustY = true;
    }
    if (overflow.left > 0 && overflow.right > 0) {
        point.x = 0;
        adjustX = true;
    }
    if (overflow.top > 0 && overflow.bottom > 0) {
        point.y = 0;
        adjustY = true;
    }
    return { x: adjustX, y: adjustY };
}
/**
 * 反转点
 * @param point
 * @param sourceRegion
 * @param overflow
 */
function flipPoint(point, sourceRegion, targetRegion, contaninScroll) {
    if (contaninScroll === void 0) { contaninScroll = false; }
    var overflow = clacOverFlowSize(point, sourceRegion);
    var _a = getDocumentSize(contaninScroll), documentWidth = _a[0], documentHeight = _a[1];
    var targetRight = targetRegion.left + targetRegion.width;
    var targetBottom = targetRegion.top + targetRegion.height;
    var adjustX = false;
    var adjustY = false;
    var leftViewSpace = targetRegion.left - window.pageXOffset;
    var rightViewSpace = documentWidth - targetRegion.left - targetRegion.width;
    var topViewSpace = targetRegion.top - window.pageYOffset;
    var bottomtViewSpace = documentHeight - targetRegion.top - targetRegion.height;
    // 当前所在方向比对边多可视空间，才允许反转
    // console.log("元素可视区域上部分", targetRegion.top - window.pageYOffset);
    // console.log("元素可视区域下部分", documentHeight - targetRegion.top - targetRegion.height);
    // console.log("元素可视区域左部分", targetRegion.left - window.pageXOffset);
    // console.log("元素可视区域右部分", documentWidth - targetRegion.left - targetRegion.width);
    if (overflow.left > 0 && rightViewSpace > leftViewSpace && targetRight + sourceRegion.width <= documentWidth) {
        // 反转到  targetRegion 右边
        point.x = targetRight;
        adjustX = true;
    }
    if (overflow.right > 0 && leftViewSpace > rightViewSpace && targetRegion.left - sourceRegion.width >= 0) {
        // 反转到  targetRegion 左边
        point.x = targetRegion.left - sourceRegion.width;
        adjustX = true;
    }
    if (overflow.top > 0 && bottomtViewSpace > topViewSpace && targetBottom + sourceRegion.height <= documentHeight) {
        // 反转到  targetRegion 下边
        point.y = targetBottom;
        adjustY = true;
    }
    if (overflow.bottom > 0 && topViewSpace > bottomtViewSpace && targetRegion.top - sourceRegion.height >= 0) {
        // 反转到  targetRegion 上边
        point.y = targetRegion.top - sourceRegion.height;
        adjustY = true;
    }
    return { x: adjustX, y: adjustY };
}
/**
 * 调整source尺寸
 * @param point
 * @param sourceRegion
 * @param targetRegion
 * @param overflow
 */
function resizeSource(point, sourceRegion, contaninScroll) {
    if (contaninScroll === void 0) { contaninScroll = false; }
    var _a = getDocumentSize(contaninScroll), documentWidth = _a[0], documentHeight = _a[1];
    var overflow = clacOverFlowSize(point, sourceRegion);
    var region = { top: point.y, left: point.x, height: null, width: null };
    // TODO：#1 严重BUG， 当 sourceRegion, 大于文档尺寸时候, overflow.left溢出计算了width宽度, overflow.right也溢出，又设置了一次宽度
    if (overflow.left > 0) {
        region.left = 0;
        region.width = sourceRegion.width - overflow.left;
    }
    if (overflow.top > 0) {
        region.top = 0;
        region.height = sourceRegion.height - overflow.top;
    }
    if (overflow.right > 0) {
        region.width = sourceRegion.width - overflow.right;
    }
    if (overflow.bottom > 0) {
        region.height = sourceRegion.height - overflow.bottom;
    }
    if (sourceRegion.width > documentWidth) {
        region.width = documentWidth;
    }
    if (sourceRegion.height > documentHeight) {
        region.height = documentHeight;
    }
    return region;
}
//# sourceMappingURL=utils.js.map
// CONCATENATED MODULE: ./node_modules/utils-dom/es/AlignDom/index.js

/**
 * 元素对齐
 * @param sourceNode    要移动元素
 * @param targetNode    被对齐目标
 * @param option
 */
function alignElement(sourceNode, targetNode, option, restAnimation) {
    if (restAnimation === void 0) { restAnimation = true; }
    sourceNode.style.display = "block";
    if (restAnimation) {
        sourceNode.style.animation = "none";
    }
    var sourceRegion = getRegion(sourceNode);
    var targetRegion = getRegion(targetNode, true);
    var _a = alignRegion(sourceRegion, targetRegion, option), region = _a[0], flipRevise = _a[1];
    sourceNode.style.position = "absolute";
    sourceNode.style.left = region.left + "px";
    sourceNode.style.top = region.top + "px";
    if (region.width) {
        sourceNode.style.width = region.width + "px";
    }
    if (region.height) {
        sourceNode.style.height = region.height + "px";
    }
    if (restAnimation) {
        sourceNode.style.animation = null;
    }
    sourceNode.style.display = null;
    return flipRevise;
}
/**
 * 区域对齐
 * @param sourceRegion
 * @param targetRegion
 * @param option
 */
function alignRegion(sourceRegion, targetRegion, option) {
    var points = option.points;
    var sourcePoint = calcPoint({ left: 0, top: 0, width: sourceRegion.width, height: sourceRegion.height }, points[0]);
    var targetPoint = calcPoint(targetRegion, points[1]);
    var alignPoint = { x: targetPoint.x - sourcePoint.x, y: targetPoint.y - sourcePoint.y };
    /**
     * 将对齐点叠加偏移量
     * @param point   对齐点
     */
    function accOffset(point, allow, flip) {
        if (allow === void 0) { allow = { x: true, y: true }; }
        if (flip === void 0) { flip = false; }
        var offset = option.offset, targetOffset = option.targetOffset;
        // 反转后， 偏移量也要反转
        if (flip) {
            offset = flipOffset(offset);
            targetOffset = flipOffset(targetOffset);
        }
        var p;
        // 累加上 Source 偏移量
        p = accPoint(point, calcOffset(sourceRegion, offset, allow));
        // 累加 Target 偏移量
        p = accPoint(p, calcOffset(targetRegion, targetOffset, allow));
        return p;
    }
    // 叠加偏移量后的对齐点
    var finallyPoint = accOffset(alignPoint);
    // 是否微调或者反转了
    var flipRevise = { x: false, y: false };
    // 微调
    if (option.overflow && option.overflow.adjust) {
        var needAccOffset = adjustPoint(finallyPoint, sourceRegion, option.contaninScroll);
        // 累加偏移量(微调或反转后，需要重新累加偏移量)
        finallyPoint = accOffset(finallyPoint, needAccOffset);
    }
    // 反转
    if (option.overflow && option.overflow.flip) {
        flipRevise = flipPoint(finallyPoint, sourceRegion, targetRegion, option.contaninScroll);
        // 累加偏移量(微调或反转后，需要重新累加偏移量)
        finallyPoint = accOffset(finallyPoint, flipRevise, true);
    }
    var region = resizeSource(finallyPoint, sourceRegion, option.contaninScroll);
    return [region, flipRevise];
}
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/utils-dom/es/Navigate.js
/**
 * 生成键盘导航处理函数
 * @param config
 */
function CreateNnavigateHandle(config) {
    function handleKeyDown(e) {
        switch (e.keyCode) {
            // Enter
            case 13:
                if (config.onEnter) {
                    config.onEnter(e);
                }
                e.stopPropagation();
                e.preventDefault();
                break;
            // Space
            case 32:
                if (config.onShow) {
                    config.onShow(e);
                }
                e.stopPropagation();
                break;
            // 上方向
            case 38:
                if (config.onPrev) {
                    config.onPrev(e);
                }
                e.preventDefault();
                break;
            // 下方向
            case 40:
                if (config.onNext) {
                    config.onNext(e);
                }
                e.preventDefault();
                break;
            // 取消
            case 27:
                if (config.onHide) {
                    config.onHide(e);
                }
                e.stopPropagation();
                e.preventDefault();
                break;
        }
    }
    return handleKeyDown;
}
//# sourceMappingURL=Navigate.js.map
// CONCATENATED MODULE: ./node_modules/utils-dom/es/date/time.js
/**
 * 验证时间字符串
 * @description 验证是否为时间字符串, 可以是 (时分秒) 或者 (时分)
 * @param time 时间字符串, 比如 10:32
 * @example isTime('24:00') === false
 * @example isTime('3:00') === false
 * @example isTime('03:00') === true
 * @example isTime('03:00:00') === true
 */
function isTime(time) {
    if (!time) {
        return false;
    }
    return /^((20|21|22|23|[0-1]\d)\:[0-5][0-9])(\:[0-5][0-9])?$/.test(time);
}
/**
 * 验证范围时间字符串
 * @param time 范围时间字符串, 比如 06:00:00 - 18:00:00
 * @param separator 分隔符, 默认 " - "
 */
function isTimeRange(time, separator) {
    if (separator === void 0) { separator = " - "; }
    var segments = timeRangeSplit(time, separator);
    return isTime(segments[0]) && isTime(segments[1]);
}
/**
 * 解析时间字符串
 * @description 将时间字符串解析成Date对象, 可以是 (时分秒) 或者 (时分)
 */
function timeParse(time, d) {
    var date = d || new Date();
    var _a = time.split(":"), hours = _a[0], minutes = _a[1], seconds = _a[2];
    date.setHours(parseInt(hours));
    date.setMinutes(parseInt(minutes));
    date.setSeconds(seconds !== undefined ? parseInt(seconds) : 0);
    return date;
}
/**
 * 分解范围时间字符串
 * @param time
 */
function timeRangeSplit(time, separator) {
    if (separator === void 0) { separator = " - "; }
    if (!time) {
        return [null, null];
    }
    var segments = time.split(separator);
    if (segments.length !== 2) {
        return [null, null];
    }
    return [segments[0], segments[1]];
}
/**
 * 解析范围时间字符串
 * @param time
 * @param separator
 */
function timeRangeParse(time, separator) {
    if (separator === void 0) { separator = " - "; }
    var segments = timeRangeSplit(time, separator);
    return [timeParse(segments[0]), timeParse(segments[1])];
}
//# sourceMappingURL=time.js.map
// CONCATENATED MODULE: ./node_modules/utils-dom/es/date/date.js

/**
 * 格式化日期字符串
 * @param t 日期
 * @param format 格式化字符串
 * @example formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss');
 */
function formatDate(t, format) {
    if (format === void 0) { format = "yyyy-MM-dd HH:mm:ss"; }
    var tf = function (i) {
        return (i < 10 ? "0" : "") + i;
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (token) {
        switch (token) {
            case "yyyy":
                return tf(t.getFullYear());
            case "MM":
                return tf(t.getMonth() + 1);
            case "mm":
                return tf(t.getMinutes());
            case "dd":
                return tf(t.getDate());
            case "HH":
                return tf(t.getHours());
            case "ss":
                return tf(t.getSeconds());
        }
    });
}
/**
 * 验证日期字符串格式
 * @description 例如: 2018-03-26
 * @param date 日期字符串
 */
function isDateFormat(date) {
    if (!date) {
        return false;
    }
    var status = true;
    var regexp = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
    var matches = regexp.exec(date);
    if (matches == null) {
        return false;
    }
    var matches3 = parseInt(matches[3]);
    if (matches3 <= 0 || matches3 > 12) {
        return false;
    }
    var matches4 = parseInt(matches[4]);
    if (!matches) {
        status = false;
    }
    if (status && matches4 > 31) {
        status = false;
    }
    if (status && matches3 == 2 && matches4 > 28) {
        status = false;
    }
    if (status && (matches3 == 1 || matches3 == 3 || matches3 == 5 || matches3 == 7 || matches3 == 8 || matches3 == 10 || matches3 == 12) && matches4 > 31) {
        status = false;
    }
    return status;
}
/**
 * 验证日期字符串格式
 * @description 例如: 2018-03-26 10:32:33
 * @param date 日期字符串
 */
function isDateISO(date) {
    if (!date) {
        return false;
    }
    var status = true;
    var regexp = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) ((\d{1,2}):(\d{1,2}):(\d{1,2}))$/;
    var matches = regexp.exec(date);
    if (matches == null) {
        return false;
    }
    var matches3 = parseInt(matches[3]);
    if (matches3 <= 0 || matches3 > 12) {
        return false;
    }
    var matches4 = parseInt(matches[4]);
    if (!matches) {
        status = false;
    }
    if (status && matches4 > 31) {
        status = false;
    }
    if (status && matches3 == 2 && matches4 > 28) {
        status = false;
    }
    if (status && (matches3 == 1 || matches3 == 3 || matches3 == 5 || matches3 == 7 || matches3 == 8 || matches3 == 10 || matches3 == 12) && matches4 > 31) {
        status = false;
    }
    if (status && !isTime(matches[5])) {
        status = false;
    }
    return status;
}
/**
 * 是否日期字符串
 * @param dateVal   日期字符串
 * @param showTime  是否显示时间
 */
function isDate(dateVal, showTime) {
    if (showTime === void 0) { showTime = false; }
    if (showTime) {
        return isDateISO(dateVal);
    }
    else {
        return isDateFormat(dateVal);
    }
}
/**
 * 验证范围日期字符串
 * @param date
 * @param showTime
 * @param separator
 */
function isDateRange(date, showTime, separator) {
    if (showTime === void 0) { showTime = false; }
    if (separator === void 0) { separator = " - "; }
    var segments = dateRangeSplit(date, separator);
    return isDate(segments[0], showTime) && isDate(segments[1], showTime) && segments[0] <= segments[1];
}
/**
 * 分解范围日期字符串
 * @param date
 * @param showTime 显示时间
 * @param separator 分隔符
 */
function dateRangeSplit(date, separator) {
    if (separator === void 0) { separator = " - "; }
    if (!date) {
        return [null, null];
    }
    var segments = date.split(separator);
    if (segments.length !== 2) {
        return [null, null];
    }
    return [segments[0], segments[1]];
}
/**
 * 日期范围解析成Date类型
 * @param date
 * @param showTime
 * @param separator
 */
function dateRangeParse(date, showTime, separator) {
    if (showTime === void 0) { showTime = false; }
    if (separator === void 0) { separator = " - "; }
    if (isDateRange(date, showTime, separator)) {
        var _a = dateRangeSplit(date, separator), start = _a[0], end = _a[1];
        return [dateParse(start), dateParse(end)];
    }
    else {
        return [null, null];
    }
}
/**
 * 验证年月字符串
 * @param date 年月字符串 2018-03 这种格式
 */
function isYearMonth(date) {
    if (!date) {
        return false;
    }
    var regexp = /^(\d{1,4})(-|\/)(\d{1,2})$/;
    var matches = regexp.exec(date);
    if (matches == null) {
        return false;
    }
    var matches3 = parseInt(matches[3]);
    if (matches3 <= 0 || matches3 > 12) {
        return false;
    }
    return true;
}
/**
 * 解析年月字符串
 * @param date 只能是 2018-03 这种字符串
 */
function yearMonthParse(yearMonth) {
    if (isYearMonth(yearMonth)) {
        var _a = yearMonth.split("-"), year = _a[0], month = _a[1];
        var date = new Date();
        date.setFullYear(parseInt(year));
        date.setMonth(parseInt(month) - 1);
        return date;
    }
    else {
        return null;
    }
}
/**
 * 解析日期字符串
 * @param date 只能是 2018-03-26 这种字符串
 */
function dateFormatParse(dateStr, d) {
    var date = d || new Date();
    var _a = dateStr.split("-"), year = _a[0], month = _a[1], day = _a[2];
    date.setFullYear(parseInt(year));
    date.setMonth(parseInt(month) - 1);
    date.setDate(parseInt(day));
    return date;
}
/**
 * 解析日期字符串
 * @param date 只能是 2018-03-26 10:32:33 这种字符串
 */
function dateISOParse(dateStr, d) {
    var _a = dateStr.split(" "), _date = _a[0], _time = _a[1];
    var date = dateFormatParse(_date, d);
    var finallyDate = timeParse(_time, date);
    return finallyDate;
}
/**
 * 解析日期字符串
 * @description 可以是2018-03-26 10:32:33，也可以不带时分秒
 */
function dateParse(dateStr) {
    if (isDateFormat(dateStr)) {
        return dateFormatParse(dateStr);
    }
    else if (isDateISO(dateStr)) {
        return dateISOParse(dateStr);
    }
    else {
        return null;
    }
}
/**
 * 设置年份, 返回新日期
 * @param d
 * @param year
 */
function setYear(d, year) {
    var date = new Date(d);
    date.setFullYear(year);
    return date;
}
/**
 * 设置月份, 返回新日期
 * @param d
 * @param year
 */
function setMonth(d, month) {
    var date = new Date(d);
    date.setMonth(month);
    return date;
}
/**
 * 累加月份, 返回新日期
 * @param d
 */
function incrementMonth(d) {
    var date = new Date(d);
    var month = date.getMonth();
    var prevDate;
    switch (month) {
        case 11:
            // 往后翻一年
            prevDate = setYear(date, date.getFullYear() + 1);
            prevDate.setMonth(0);
            break;
        default:
            prevDate = setMonth(date, month + 1);
    }
    return prevDate;
}
/**
 * 累减月份, 返回新日期
 * @param d
 */
function decreaseMonth(d) {
    var date = new Date(d);
    var month = date.getMonth();
    var prevDate;
    switch (month) {
        case 0:
            // 往前翻一年
            prevDate = setYear(date, date.getFullYear() - 1);
            prevDate.setMonth(11);
            break;
        default:
            prevDate = setMonth(date, month - 1);
    }
    return prevDate;
}
/**
 * 设置日, 返回新日期
 * @param d
 * @param year
 */
function setDate(d, day) {
    var date = new Date(d);
    date.setDate(day);
    return date;
}
/**
 * 设置年月日, 返回新日期
 * @param d
 * @param year
 */
function setYearMonthDay(d, other) {
    var date = new Date(d);
    date.setFullYear(other.getFullYear());
    date.setMonth(other.getMonth());
    date.setDate(other.getDate());
    return date;
}
//# sourceMappingURL=date.js.map
// CONCATENATED MODULE: ./node_modules/utils-dom/es/date/short-time.js
/**
 * 验证时间字符串
 * @description 验证是否为时间字符串, 正确的范围是 00:00 ~ 23:59
 * @param time 时间字符串, 比如 10:32
 * @example isShortTime('24:00') === false
 * @example isShortTime('3:00') === false
 * @example isShortTime('03:00') === true
 */
function isShortTime(time) {
    if (!time) {
        return false;
    }
    return /^((20|21|22|23|[0-1]\d)\:[0-5][0-9])?$/.test(time);
}
/**
 * 解析时间字符串
 * @description 将时间字符串解析成Date对象
 */
function shortTimeParse(time, d) {
    var date = d || new Date();
    var _a = time.split(":"), hours = _a[0], minutes = _a[1];
    date.setHours(parseInt(hours));
    date.setMinutes(parseInt(minutes));
    date.setSeconds(0);
    return date;
}
/**
 * 获取短时间的毫秒数
 * @param date
 */
function shrotTimeTimestamp(date) {
    var hours = date.getHours() * 60 * 60 * 1000;
    var min = date.getMinutes() * 60 * 1000;
    return hours + min;
}
//# sourceMappingURL=short-time.js.map
// CONCATENATED MODULE: ./node_modules/utils-dom/es/date/calendar.js

/**
 * 获取指定月的天数
 * @param date
 */
function daysInMonth(date) {
    // Tips: 当 setDate(0) 传入0时，会得到前一个月的最后一天，就不用判断是否闰年了
    var prevDate = incrementMonth(date);
    prevDate.setDate(0);
    return prevDate.getDate();
}
//# sourceMappingURL=calendar.js.map
// CONCATENATED MODULE: ./node_modules/utils-dom/es/date/index.js




//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/utils-dom/es/index.js





//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./components/Picker/Picker.tsx + 2 modules
var Picker = __webpack_require__("2aFG");

// CONCATENATED MODULE: ./components/DatePicker/DatePicker.tsx




var today = new Date();
var todayValue = [today.getFullYear(), today.getMonth(), today.getDate()];
function createRange(start, end, suffix, createChildren) {
    var data = [];
    for (var i = start; i <= end; ++i) {
        data.push({
            label: i + suffix,
            value: i,
            children: createChildren ? createChildren(i) : null,
        });
    }
    return data;
}
/**
 * 生成级联日期数据
 * @param start
 * @param end
 */
function createCascadeDates(start, end) {
    var data = createRange(start, end, "年");
    data.forEach(function (yearItem) {
        var year = yearItem.value;
        yearItem.children = createRange(1, 12, "月", function (month) { return createRange(1, daysInMonth(dateFormatParse(year + "-" + month + "-1")), "日"); });
    });
    return data;
}
function DatePicker(props) {
    var _a = props.start, start = _a === void 0 ? today.getFullYear() - 20 : _a, _b = props.end, end = _b === void 0 ? today.getFullYear() + 30 : _b, rest = Object(tslib_es6["c" /* __rest */])(props, ["start", "end"]);
    return react_default.a.createElement(Picker["b" /* default */], Object(tslib_es6["a" /* __assign */])({}, rest, { defaultValue: props.defaultValue || todayValue, data: createCascadeDates(start, end), cascade: true, cols: 3 }));
}
/* harmony default export */ var DatePicker_DatePicker = (react_default.a.memo(DatePicker));

// EXTERNAL MODULE: ./node_modules/utils-hooks/es/index.js + 21 modules
var es = __webpack_require__("ReSL");

// CONCATENATED MODULE: ./components/DatePicker/DatePickerPanel.tsx





var DatePickerPanel = react_default.a.forwardRef(function (props, ref) {
    var _a = props.separator, separator = _a === void 0 ? "-" : _a, _b = props.placeholder, placeholder = _b === void 0 ? "请选择日期" : _b, _c = props.singleLabel, singleLabel = _c === void 0 ? false : _c, _d = props.start, start = _d === void 0 ? today.getFullYear() - 20 : _d, _e = props.end, end = _e === void 0 ? today.getFullYear() + 30 : _e, _f = props.defaultValue, defaultValue = _f === void 0 ? props.defaultValue || todayValue : _f, rest = Object(tslib_es6["c" /* __rest */])(props, ["separator", "placeholder", "singleLabel", "start", "end", "defaultValue"]);
    var defaultData = createCascadeDates(start, end);
    var _g = Object(es["c" /* useControll */])(props, "visible", "defaultVisible"), visible = _g[0], setVisible = _g[1], isControll = _g[2];
    var _h = Object(react["useState"])(props.value || defaultValue), value = _h[0], setValue = _h[1];
    function changeVisible(show) {
        if (!isControll) {
            setVisible(show);
        }
        if (props.onVisibleChange) {
            props.onVisibleChange(show);
        }
    }
    function changeValue(v) {
        setValue(v);
        if (props.onChange) {
            props.onChange(v);
        }
    }
    function _getPickerLabel() {
        return Object(PickerPanel["b" /* getPickerLabel */])(value, defaultData, true, separator);
    }
    return (react_default.a.createElement("div", { className: "date-picker-panel" },
        react_default.a.createElement("p", { ref: ref, onClick: function () { return changeVisible(true); } }, !value || value.length === 0 || value[0] === null ? react_default.a.createElement("span", { className: "placeholder" }, placeholder) : _getPickerLabel()),
        react_default.a.createElement(DatePicker_DatePicker, Object(tslib_es6["a" /* __assign */])({}, rest, { start: start, end: end, defaultValue: defaultValue, visible: visible, onVisibleChange: changeVisible, onChange: changeValue }))));
});
/* harmony default export */ var DatePicker_DatePickerPanel = (react_default.a.memo(DatePickerPanel));

// CONCATENATED MODULE: ./site/pages/Form/DatePIcker/index.tsx



function DatePickerDemo(_a) {
    var history = _a.history;
    return (react_default.a.createElement(Form["a" /* default */], { title: "\u65E5\u671F\u9009\u62E9\u5668", opr: react_default.a.createElement(Button["a" /* default */], { type: "primary", onClick: function () { return history.goBack(); } }, "\u8FD4\u56DE") },
        react_default.a.createElement(ListGroup["a" /* default */], null,
            react_default.a.createElement(FormItem["a" /* default */], { prop: "a", label: "\u65E5\u671F\u9009\u62E9", arrow: true },
                react_default.a.createElement(DatePicker_DatePickerPanel, { title: "\u9009\u62E9\u65E5\u671F", placeholder: "\u8BF7\u9009\u62E9\u65E5\u671F" })))));
}
/* harmony default export */ var DatePIcker = __webpack_exports__["default"] = (Object(react_router["f" /* withRouter */])(DatePickerDemo));


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
//# sourceMappingURL=11.chunk.js.map