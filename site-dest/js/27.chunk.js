(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

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

/***/ "c+ia":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./site/components/Page/index.tsx
var Page = __webpack_require__("a9X4");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/utils-hooks/es/index.js + 21 modules
var es = __webpack_require__("ReSL");

// EXTERNAL MODULE: ./components/List/List.tsx
var List = __webpack_require__("plWM");

// EXTERNAL MODULE: ./components/List/ListItem.tsx
var ListItem = __webpack_require__("d8CH");

// EXTERNAL MODULE: ./components/Icon/index.tsx
var Icon = __webpack_require__("Vy3d");

// EXTERNAL MODULE: ./components/SearchBar/style/index.scss
var SearchBar_style = __webpack_require__("e52A");

// CONCATENATED MODULE: ./components/SearchBar/SearchBar.tsx





var SearchBar = react_default.a.forwardRef(function (props, ref) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-search-bar" : _a, className = props.className, style = props.style, _b = props.placeholder, placeholder = _b === void 0 ? "搜索" : _b, onChange = props.onChange, onConfirm = props.onConfirm, _c = props.autoFocus, autoFocus = _c === void 0 ? false : _c, onCancel = props.onCancel, onSearch = props.onSearch, _d = props.delay, delay = _d === void 0 ? 200 : _d, _e = props.backfill, backfill = _e === void 0 ? true : _e;
    var _f = Object(es["c" /* useControll */])(props, "value", "defaultValue"), value = _f[0], setValue = _f[1], isControll = _f[2];
    var typingRef = Object(react["useRef"])(false);
    var searchRef = Object(react["useRef"])("");
    var _g = Object(react["useState"])(autoFocus), focus = _g[0], setFocus = _g[1];
    var inputRef = ref || Object(react["useRef"])(null);
    Object(es["d" /* useDebounceCallback */])(function () {
        if (onSearch) {
            if (backfill) {
                if (typingRef.current === false) {
                    onSearch(value);
                }
            }
            else {
                onSearch(value);
            }
        }
    }, delay, [searchRef.current]);
    function compositionStartHandle(e) {
        typingRef.current = true;
    }
    function compositionEndHandle(e) {
        typingRef.current = false;
    }
    function changeValue(val) {
        if (!isControll) {
            setValue(val);
        }
        if (onChange) {
            onChange(val);
        }
    }
    function searchChangeHandle(event) {
        var val = event.target.value;
        searchRef.current = val;
        changeValue(val);
    }
    function focusHandle(e) {
        setFocus(true);
    }
    function clearHandle(event) {
        changeValue(null);
        inputFocus();
    }
    function cancelHandle() {
        if (onCancel) {
            onCancel();
        }
        setFocus(false);
        changeValue(null);
    }
    function inputFocus(hide) {
        if (hide === void 0) { hide = false; }
        var input = inputRef.current;
        if (input) {
            if (hide) {
                input.blur();
            }
            else {
                input.focus();
            }
        }
    }
    Object(react["useEffect"])(function () {
        if (autoFocus) {
            inputFocus();
        }
    }, [autoFocus]);
    Object(react["useEffect"])(function () {
        if (focus) {
            inputFocus();
        }
    }, [focus, inputRef.current]);
    function submitHandle(event) {
        if (onConfirm) {
            onConfirm(value);
        }
        event.stopPropagation();
        event.preventDefault();
        return false;
    }
    return (react_default.a.createElement("div", { className: classnames_default()(prefixCls, className, { focus: focus }), style: style },
        react_default.a.createElement("form", { className: prefixCls + "__form", onSubmit: submitHandle },
            react_default.a.createElement("div", { className: prefixCls + "__box" },
                react_default.a.createElement(Icon["a" /* default */], { icon: "search" }),
                react_default.a.createElement("input", { ref: inputRef, type: "search", className: prefixCls + "__input", placeholder: placeholder, autoFocus: autoFocus, onChange: searchChangeHandle, onFocus: focusHandle, value: value || "", onCompositionStart: compositionStartHandle, onCompositionEnd: compositionEndHandle }),
                react_default.a.createElement(Icon["a" /* default */], { icon: "clear", onClick: clearHandle })),
            react_default.a.createElement("label", { className: prefixCls + "__label", onClick: function () { return setFocus(true); } },
                react_default.a.createElement(Icon["a" /* default */], { icon: "search" }),
                react_default.a.createElement("span", null, placeholder))),
        react_default.a.createElement("a", { className: prefixCls + "__cancel-btn", onClick: cancelHandle }, "\u53D6\u6D88")));
});
/* harmony default export */ var SearchBar_SearchBar = (react_default.a.memo(SearchBar));

// CONCATENATED MODULE: ./components/SearchBar/SearchPanel.tsx







function SearchPanel(props) {
    var _a = props.data, data = _a === void 0 ? [] : _a, children = props.children, visible = props.visible, defaultVisible = props.defaultVisible, onVisibleChange = props.onVisibleChange, onPicker = props.onPicker, conver = props.conver, rest = Object(tslib_es6["c" /* __rest */])(props, ["data", "children", "visible", "defaultVisible", "onVisibleChange", "onPicker", "conver"]);
    var _b = Object(es["c" /* useControll */])(props, "visible", "defaultVisible"), _visible = _b[0], setVisible = _b[1], isVisibleControll = _b[2];
    var _c = Object(es["c" /* useControll */])(props, "value", "defaultValue"), value = _c[0], setValue = _c[1], isControll = _c[2];
    function changeValue(val) {
        if (!isControll) {
            setValue(val);
        }
        if (props.onChange) {
            props.onChange(val);
        }
    }
    function handleVisibleChange(_open) {
        if (!isVisibleControll) {
            setVisible(_open);
        }
        if (onVisibleChange) {
            onVisibleChange(_open);
        }
    }
    function pickerHandle(d) {
        changeValue(conver ? conver(d) : d + "");
        if (onPicker) {
            onPicker(d);
        }
        if (props.onConfirm) {
            props.onConfirm(d);
        }
        handleVisibleChange(false);
    }
    return (react_default.a.createElement("div", { className: classnames_default()("container search-panel", { show: _visible }) },
        react_default.a.createElement(SearchBar_SearchBar, Object(tslib_es6["a" /* __assign */])({}, rest, { value: value, autoFocus: _visible, onChange: changeValue, onCancel: function () { return handleVisibleChange(false); }, onConfirm: pickerHandle })),
        react_default.a.createElement(List["a" /* default */], { className: "searchbar-result" }, data.map(function (d, i) { return (react_default.a.createElement(ListItem["a" /* default */], { key: i, onClick: function () { return pickerHandle(d); } }, children(d, i))); }))));
}
/* harmony default export */ var SearchBar_SearchPanel = (react_default.a.memo(SearchPanel));

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__("Ty5D");

// CONCATENATED MODULE: ./site/pages/Search/index.tsx





var DefaultBanks = ["建设银行", "农业银行"];
function Searchdemo(_a) {
    var history = _a.history;
    var _b = Object(react["useState"])(DefaultBanks), banks = _b[0], setBanks = _b[1];
    function searchBanks(str) {
        if (str) {
            setBanks(Object(tslib_es6["d" /* __spreadArrays */])([str + "银行"], DefaultBanks));
        }
        else {
            setBanks(DefaultBanks);
        }
    }
    return (react_default.a.createElement(Page["a" /* default */], { title: "Search", introduce: "\u641C\u7D22" },
        react_default.a.createElement(SearchBar_SearchPanel, { visible: true, data: banks, onSearch: searchBanks, onConfirm: function () { return history.goBack(); } }, function (d) { return react_default.a.createElement("span", null, d); })));
}
/* harmony default export */ var Search = __webpack_exports__["default"] = (Object(react_router["f" /* withRouter */])(Searchdemo));


/***/ }),

/***/ "e52A":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=27.chunk.js.map