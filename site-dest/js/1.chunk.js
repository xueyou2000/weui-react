(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "+zvC":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "/1FC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/* harmony default export */ __webpack_exports__["a"] = (isArray);


/***/ }),

/***/ "3/ER":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ju5/");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (cloneBuffer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("3UD+")(module)))

/***/ }),

/***/ "3UD+":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "3cmB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Y7yP");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ju5/");



/* Built-in method references that are verified to be native. */
var Map = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_root_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'Map');

/* harmony default export */ __webpack_exports__["a"] = (Map);


/***/ }),

/***/ "3mje":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6yG6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DefaultFormContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ValidateUtils_ValidateTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LsAB");


var DefaultFormContext = {
    disabled: false,
    trigger: _ValidateUtils_ValidateTrigger__WEBPACK_IMPORTED_MODULE_1__[/* ValidateTrigger */ "a"].change,
    labelPosition: "right",
    labelWidth: "90px",
    inline: false,
    formMethods: null,
    defaultModel: null,
};
var FormContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(DefaultFormContext);
//# sourceMappingURL=FormContext.js.map

/***/ }),

/***/ "7EGn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_castPath.js + 7 modules
var _castPath = __webpack_require__("IlA0");

// EXTERNAL MODULE: ./node_modules/lodash-es/_toKey.js
var _toKey = __webpack_require__("Tchk");

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGet.js



/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = Object(_castPath["a" /* default */])(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[Object(_toKey["a" /* default */])(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/* harmony default export */ var _baseGet = (baseGet);

// CONCATENATED MODULE: ./node_modules/lodash-es/get.js


/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/* harmony default export */ var lodash_es_get = __webpack_exports__["a"] = (get);


/***/ }),

/***/ "8M4i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_Symbol.js
var _Symbol = __webpack_require__("ylTp");

// CONCATENATED MODULE: ./node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol["a" /* default */] ? _Symbol["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ var _getRawTag = (getRawTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ var _objectToString = (objectToString);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol["a" /* default */] ? _Symbol["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ var _baseGetTag = __webpack_exports__["a"] = (baseGetTag);


/***/ }),

/***/ "AJE1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var es_namespaceObject = {};
__webpack_require__.r(es_namespaceObject);
__webpack_require__.d(es_namespaceObject, "Required", function() { return Required; });
__webpack_require__.d(es_namespaceObject, "MinLength", function() { return MinLength; });
__webpack_require__.d(es_namespaceObject, "MaxLength", function() { return MaxLength; });
__webpack_require__.d(es_namespaceObject, "RangeLength", function() { return RangeLength; });
__webpack_require__.d(es_namespaceObject, "Min", function() { return Min; });
__webpack_require__.d(es_namespaceObject, "Max", function() { return Max; });
__webpack_require__.d(es_namespaceObject, "Range", function() { return Range; });
__webpack_require__.d(es_namespaceObject, "Pattern", function() { return Pattern; });
__webpack_require__.d(es_namespaceObject, "IsNumber", function() { return IsNumber; });
__webpack_require__.d(es_namespaceObject, "IsFunction", function() { return IsFunction; });
__webpack_require__.d(es_namespaceObject, "IsArray", function() { return IsArray; });
__webpack_require__.d(es_namespaceObject, "IsTime", function() { return IsTime; });
__webpack_require__.d(es_namespaceObject, "IsDateFormat", function() { return IsDateFormat; });
__webpack_require__.d(es_namespaceObject, "IsDateISO", function() { return IsDateISO; });
__webpack_require__.d(es_namespaceObject, "IsEmail", function() { return IsEmail; });
__webpack_require__.d(es_namespaceObject, "IsUrl", function() { return IsUrl; });
__webpack_require__.d(es_namespaceObject, "AcceptSuffix", function() { return AcceptSuffix; });
__webpack_require__.d(es_namespaceObject, "ZipCode", function() { return ZipCode; });
__webpack_require__.d(es_namespaceObject, "PhoneNo", function() { return PhoneNo; });
__webpack_require__.d(es_namespaceObject, "Tel", function() { return Tel; });
__webpack_require__.d(es_namespaceObject, "Chinese", function() { return Chinese; });
__webpack_require__.d(es_namespaceObject, "NotChinese", function() { return NotChinese; });
__webpack_require__.d(es_namespaceObject, "BankCard", function() { return BankCard; });
__webpack_require__.d(es_namespaceObject, "IdCardNo", function() { return IdCardNo; });
__webpack_require__.d(es_namespaceObject, "IsDigits", function() { return IsDigits; });
__webpack_require__.d(es_namespaceObject, "IsStep", function() { return IsStep; });
__webpack_require__.d(es_namespaceObject, "Amount", function() { return Amount; });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/xy-form/es/Context/FormBlockContext.js
var FormBlockContext = __webpack_require__("hM9q");

// EXTERNAL MODULE: ./node_modules/xy-form/es/Context/FormContext.js
var FormContext = __webpack_require__("6yG6");

// CONCATENATED MODULE: ./node_modules/validate-methods/es/helper.js
/**
 * @author  XueYOu
 * @description 辅助函数
 */
/**
 * 是否6位日期
 * @param sDate
 */
function IsDate6(sDate) {
    if (!/^[0-9]{6}$/.test(sDate)) {
        return false;
    }
    var year, month;
    year = sDate.substring(0, 4);
    month = sDate.substring(4, 6);
    if (parseInt(year) < 1700 || parseInt(year) > 2500)
        return false;
    if (parseInt(month) < 1 || parseInt(month) > 12)
        return false;
    return true;
}
/**
 * 是否8位日期
 */
function IsDate8(sDate) {
    if (!/^[0-9]{8}$/.test(sDate)) {
        return false;
    }
    var year, month, day;
    year = parseInt(sDate.substring(0, 4));
    month = parseInt(sDate.substring(4, 6));
    day = parseInt(sDate.substring(6, 8));
    var iaMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year < 1700 || year > 2500)
        return false;
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        iaMonthDays[1] = 29;
    }
    if (month < 1 || month > 12)
        return false;
    if (day < 1 || day > iaMonthDays[month - 1])
        return false;
    return true;
}
/**
 * 判断值是否为空
 * @description 对于数组, 如果长度为0则也算空, 并且会遍历数组中的每个元素进行测试
 * @param value
 */
function IsEmpy(value) {
    if (value === null || value === undefined || value === "") {
        return true;
    }
    if (value instanceof Array) {
        if (value.length === 0) {
            return true;
        }
        return value.some(function (val) { return IsEmpy(val); });
    }
    return false;
}
//# sourceMappingURL=helper.js.map
// CONCATENATED MODULE: ./node_modules/validate-methods/es/common.js
/**
 * @author  XueYou
 * @description 常用验证函数
 */

/**
 * 验证值是否必填
 * @param value 比较值
 */
function Required(value) {
    if (typeof value === "string") {
        return value !== "";
    }
    else if (value instanceof Array) {
        return value.every(function (val) { return Required(val); }) && value.length > 0;
    }
    else {
        return value !== undefined && value !== null;
    }
}
/**
 * 验证字符串长度是否小于min
 * @param str 字符串
 * @param min 最小长度
 * @param equal 是否等于最小长度
 */
function MinLength(str, min, equal) {
    if (equal === void 0) { equal = true; }
    if (IsEmpy([str, min])) {
        return false;
    }
    return equal ? str.length <= min : str.length < min;
}
/**
 * 验证字符串长度是否大于max
 * @param str 字符串
 * @param max 最大长度
 * @param equal 是否等于最大长度
 */
function MaxLength(str, max, equal) {
    if (equal === void 0) { equal = true; }
    if (IsEmpy([str, max])) {
        return false;
    }
    return equal ? str.length >= max : str.length > max;
}
/**
 * 验证字符串长度在范围内
 * @param str 字符串
 * @param min 最小范围
 * @param max 最大范围
 * @param equal 是否等于最小/最大范围
 */
function RangeLength(str, min, max, equal) {
    if (equal === void 0) { equal = true; }
    if (IsEmpy([str, min, max])) {
        return false;
    }
    var length = str.length;
    if (equal) {
        return length >= min && length <= max;
    }
    else {
        return length > min && length < max;
    }
}
/**
 * 验证数值是否小于min
 * @param val 数值
 * @param min 比较数值
 * @param equal 是否等于比较数值
 */
function Min(val, min, equal) {
    if (equal === void 0) { equal = true; }
    if (IsEmpy([val, min])) {
        return false;
    }
    var _val = parseFloat(val + "");
    var equalVal = parseFloat(min + "");
    return equal ? _val <= equalVal : _val < equalVal;
}
/**
 * 验证数值是否大于min
 * @param val 数值
 * @param max 比较数值
 * @param equal 是否等于比较数值
 */
function Max(val, max, equal) {
    if (equal === void 0) { equal = true; }
    if (IsEmpy([val, max])) {
        return false;
    }
    var _val = parseFloat(val + "");
    var equalVal = parseFloat(max + "");
    return equal ? _val >= equalVal : _val > equalVal;
}
/**
 * 验证数值是否在某个范围内
 * @param val 数值
 * @param min 最小范围
 * @param max 最大范围
 * @param equal 是否等于最小/最大范围
 */
function Range(val, min, max, equal) {
    if (equal === void 0) { equal = true; }
    if (IsEmpy([val, min, max])) {
        return false;
    }
    var _val = parseFloat(val + "");
    if (equal) {
        return _val >= min && _val <= max;
    }
    else {
        return _val > min && _val < max;
    }
}
/**
 * 验证字符串是否匹配正则
 * @param val 比较字符串
 * @param regexp 正则字符串
 */
function Pattern(val, regexp) {
    if (IsEmpy([val, regexp])) {
        return false;
    }
    if (typeof regexp === "string") {
        return new RegExp(regexp).test(val);
    }
    else if (regexp instanceof RegExp) {
        return regexp.test(val);
    }
    else {
        throw new Error("未知正则类型");
    }
}
//# sourceMappingURL=common.js.map
// CONCATENATED MODULE: ./node_modules/validate-methods/es/type.js
/**
 * @author  XueYou
 * @description 类型验证函数
 */

/**
 * 验证数值类型
 * @param number 数值
 */
function IsNumber(number) {
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(number + "");
}
/**
 * 验证函数类型
 * @param func 函数
 */
function IsFunction(func) {
    if (IsEmpy(func)) {
        return false;
    }
    var typeName = Object.prototype.toString.call(func);
    return typeName.indexOf("Function") != -1;
}
/**
 * 验证数组类型
 * @param array 数组
 */
function IsArray(array) {
    if (!array) {
        return false;
    }
    var typeName = Object.prototype.toString.call(array);
    return typeName.indexOf("Array") != -1;
}
//# sourceMappingURL=type.js.map
// CONCATENATED MODULE: ./node_modules/validate-methods/es/date.js
/**
 * @author  XueYou
 * @description 日期/时间验证函数
 */

/**
 * 验证时间字符串格式
 * @description 例如 10:32:33
 * @param time 时间字符串
 */
function IsTime(time) {
    return /^((20|21|22|23|[0-1]\d)\:[0-5][0-9])(\:[0-5][0-9])?$/.test(time + "");
}
/**
 * 验证日期字符串格式
 * @description 例如: 2018-03-26
 * @param date 日期字符串
 */
function IsDateFormat(date) {
    if (IsEmpy(date)) {
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
function IsDateISO(date) {
    if (IsEmpy(date)) {
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
    if (status && !IsTime(matches[5])) {
        status = false;
    }
    return status;
}
//# sourceMappingURL=date.js.map
// CONCATENATED MODULE: ./node_modules/validate-methods/es/format.js
/**
 * @author  XueYou
 * @description 格式验证函数
 */

/**
 * 验证邮箱格式
 * @param email 邮箱
 */
function IsEmail(email) {
    if (IsEmpy(email)) {
        return false;
    }
    return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
}
/**
 * 验证网址格式
 * @param url 网址
 */
function IsUrl(url) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(url);
}
/**
 * 验证合法后缀
 * @param val 比较字符串
 * @param suffixs 后缀集合 ['png', 'jpg']
 */
function AcceptSuffix(val, suffixs) {
    if (IsEmpy([val, suffixs])) {
        return false;
    }
    return suffixs.some(function (suffix) {
        var regexp = new RegExp("\\." + suffix + "$", "i");
        return regexp.test(val);
    });
}
/**
 * 验证邮政编码格式
 * @param val 证邮政编
 */
function ZipCode(val) {
    return /^[0-9]{6}$/.test(val + "");
}
/**
 * 验证手机号格式
 * @param val 手机号
 */
function PhoneNo(val) {
    if (IsEmpy(val)) {
        return false;
    }
    var mobile = /^[1][3,4,5,7,8][0-9]{9}$/;
    return val.length === 11 && mobile.test(val);
}
/**
 * 验证座机号码格式
 * @param val 座机号码
 */
function Tel(val) {
    return /^\d{3,4}-?\d{7,9}$/.test(val + "");
}
/**
 * 验证是否中文字符
 * @param val 比较字符串
 */
function Chinese(val) {
    return /^([\u4e00-\u9fa5]|\u00b7)+$/.test(val + "");
}
/**
 * 验证是否不包含中文字符
 * @param val 比较字符串
 */
function NotChinese(val) {
    return !/([\u4e00-\u9fa5]|\u00b7)+/.test(val + "");
}
/**
 * 验证银行卡号格式(卢恩算法)
 * @param card 银行卡号
 */
function BankCard(card) {
    if (IsEmpy(card)) {
        return false;
    }
    var status = true;
    // value为NAN(非法值)或者长度小于12, 则false
    if (isNaN(parseInt(card)))
        status = false;
    if (card.length < 12) {
        status = false;
    }
    // 将 123456字符串卡号,分割成数组 ['1', '2', '3', ...]
    var nums = card.split("");
    // 合计
    var sum = 0;
    // 索引
    var index = 1;
    for (var i = 0; i < nums.length; i++) {
        // 当前索引是否为偶数
        if ((i + 1) % 2 === 0) {
            // 当前数组倒index的数字 * 2, 转数值
            var tmp = Number(nums[nums.length - index]) * 2;
            if (tmp >= 10) {
                // 将大于等于10的值转字符串
                var t = (tmp + "").split("");
                // tmp 值等于 字符串[0] + 字符串[1],  '16' 就是 1+6=7
                tmp = Number(t[0]) + Number(t[1]);
            }
            // 累加值
            sum += tmp;
        }
        else {
            // sum 累加当前数组倒index的数字
            sum += Number(nums[nums.length - index]);
        }
        // 累加索引
        index++;
    }
    // 如果值不是10的倍数, 则不是一个合法的银行卡号
    if (sum % 10 !== 0) {
        status = false;
    }
    return status;
}
/**
 * 验证身份证格式
 * @param cardNo 身份证
 */
function IdCardNo(cardNo) {
    if (IsEmpy(cardNo)) {
        return false;
    }
    var factorArr = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1);
    var parityBit = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
    var varArray = new Array();
    var lngProduct = 0;
    var intCheckDigit;
    var intStrLen = cardNo.length;
    var idNumber = cardNo;
    // initialize
    if (intStrLen !== 15 && intStrLen !== 18) {
        return false;
    }
    // check and set value
    for (var i = 0; i < intStrLen; i++) {
        varArray[i] = idNumber.charAt(i);
        if ((varArray[i] < "0" || varArray[i] > "9") && i !== 17) {
            return false;
        }
        else if (i < 17) {
            varArray[i] = varArray[i] * factorArr[i];
        }
    }
    if (intStrLen === 18) {
        // check date
        var date8 = idNumber.substring(6, 14);
        if (IsDate8(date8) === false) {
            return false;
        }
        // calculate the sum of the products
        for (i = 0; i < 17; i++) {
            lngProduct = lngProduct + varArray[i];
        }
        // calculate the check digit
        intCheckDigit = parityBit[lngProduct % 11];
        // check last digit
        if (varArray[17] !== intCheckDigit) {
            return false;
        }
    }
    else {
        var date6 = idNumber.substring(6, 12);
        if (IsDate6(date6) === false) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=format.js.map
// CONCATENATED MODULE: ./node_modules/validate-methods/es/number.js
/**
 * @author  XueYou
 * @description 数值验证函数
 */

/**
 * 验证整数格式
 * @param number 整数
 */
function IsDigits(number) {
    return /^\d+$/.test(number + "");
}
/**
 * 验证数值是否为指定倍数
 * @param val 数值
 * @param step 倍数
 */
function IsStep(val, step) {
    if (IsEmpy([val, step])) {
        return false;
    }
    var _val = parseFloat(val + "");
    return _val % step === 0;
}
/**
 * 验证金额格式
 * @param amount 金额
 * @param canBeZero 金额是否能为0
 * @param bits 金额小数范围
 */
function Amount(amount, canBeZero, bits) {
    if (canBeZero === void 0) { canBeZero = false; }
    if (bits === void 0) { bits = 6; }
    if (IsEmpy(amount)) {
        return false;
    }
    amount = parseFloat(amount + "");
    if (amount == 0 && canBeZero == false)
        return false;
    var regexp = new RegExp("^([1-9][\\d]{0,7}|0)(\\.[\\d]{1," + bits + "})?$");
    return regexp.test(amount + "");
}
//# sourceMappingURL=number.js.map
// CONCATENATED MODULE: ./node_modules/validate-methods/es/index.js





//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/validate-provider/es/index.js

/**
 * @class ValidateMethodError
 * @description 验证失败异常
 */
var es_ValidateMethodError = /** @class */ (function (_super) {
    tslib_es6["b" /* __extends */](ValidateMethodError, _super);
    /**
     * 构造函数
     * @param value 验证值
     * @param params 验证参数
     * @param message 验证错误消息
     * @param validName 验证函数名称
     */
    function ValidateMethodError(value, params, message, validName) {
        var _this = _super.call(this, message) || this;
        /**
         * 被验证的值
         */
        _this.value = null;
        /**
         * 验证参数
         */
        _this.params = null;
        /**
         * 验证函数名称
         */
        _this.validName = null;
        _this.name = "ValidFailError";
        _this.value = value;
        _this.params = params;
        _this.validName = validName;
        return _this;
    }
    return ValidateMethodError;
}(Error));

/**
 * 验证提供方
 * @class ValidateProvider
 * @description 用键值对的字典存储验证函数
 */
var es_ValidateProvider = /** @class */ (function () {
    /**
     * 构造函数
     * @param other
     */
    function ValidateProvider(other) {
        // 无序字典存储验证函数
        this.dictionary = {};
        this.merge(other);
    }
    /**
     * 添加验证函数
     * @param name 验证函数名称
     * @param method 验证函数
     * @param errMsg 默认验证错误消息
     */
    ValidateProvider.prototype.add = function (name, method, errMsg) {
        this.addByMethodRegister({ name: name, method: method, errMsg: errMsg });
    };
    /**
     * 添加验证函数
     * @param methodRegister 验证函数注册信息
     */
    ValidateProvider.prototype.addByMethodRegister = function (methodRegister) {
        var method = methodRegister.method, rest = tslib_es6["c" /* __rest */](methodRegister, ["method"]);
        var methodInfo = tslib_es6["a" /* __assign */]({}, rest, { method: ValidateProvider.PromisefyValidMethod(methodRegister) });
        this.dictionary[methodRegister.name] = methodInfo;
        return this;
    };
    /**
     * 获取验证函数注册信息
     * @param name 验证函数名称
     */
    ValidateProvider.prototype.get = function (name) {
        var dictionary = this.dictionary;
        if (dictionary[name]) {
            return dictionary[name];
        }
        for (var validName in dictionary) {
            var methodRegister = dictionary[validName];
            if (validName.toLocaleLowerCase() === name.toLocaleLowerCase()) {
                return methodRegister;
            }
        }
        return null;
    };
    /**
     * 合并提供方
     * @param other 要合并的验证提供方
     */
    ValidateProvider.prototype.merge = function (other) {
        if (!other) {
            return this;
        }
        var dictionary = this.dictionary;
        for (var name_1 in other.dictionary) {
            dictionary[name_1] = other.get(name_1);
        }
        return this;
    };
    /**
     * 遍历验证函数
     * @param callback 回调函数
     */
    ValidateProvider.prototype.each = function (callback) {
        var dictionary = this.dictionary;
        for (var name_2 in dictionary) {
            callback(name_2, dictionary[name_2]);
        }
    };
    /**
     * 格式化错误消息
     * @description 默认格式化函数根据数组来完成 {0},{1} 对应参数数组 params, 另外提供额外的 {{VALUE}} 标记当前值
     * @param methodRegister 验证函数注册信息
     * @param value 验证值
     * @param params 验证参数
     * @param message 默认验证消息
     */
    ValidateProvider.FormatMessage = function (methodRegister, value, params, message) {
        var format = methodRegister.format, errMsg = methodRegister.errMsg;
        var msg = message || errMsg;
        if (format) {
            // 使用自定义消息格式化
            return format(value, params, msg);
        }
        else {
            if (!msg) {
                return "";
            }
            // 使用内置格式化
            return msg
                .replace(/{(\d)}/g, function (match, index) {
                var i = parseInt(index);
                return i >= 0 && i < params.length ? params[i] : match;
            })
                .replace(/{{VALUE}}/g, String(value));
        }
    };
    /**
     * promise化验证函数
     * @param methodRegister 验证函数注册信息
     */
    ValidateProvider.PromisefyValidMethod = function (methodRegister) {
        var name = methodRegister.name, method = methodRegister.method;
        return function (value) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            var ctx = this;
            var args = [].slice.call(arguments, 0);
            return new Promise(function (resolve, reject) {
                // 验证失败异常
                var validError = new es_ValidateMethodError(value, params, ValidateProvider.FormatMessage(methodRegister, value, params, methodRegister.errMsg), name);
                try {
                    // 执行验证函数
                    var result = method.apply(ctx, args);
                    if (result instanceof Promise) {
                        result
                            .then(function () { return resolve(methodRegister); })
                            .catch(function (error) {
                            validError.message = ValidateProvider.FormatMessage(methodRegister, value, params, error.message);
                            reject(validError);
                        });
                    }
                    else if (typeof result === "boolean") {
                        result === true ? resolve(methodRegister) : reject(validError);
                    }
                    else if (typeof result === "string") {
                        validError.message = ValidateProvider.FormatMessage(methodRegister, value, params, result);
                        reject(validError);
                    }
                    else {
                        throw new TypeError('未知的验证函数返回类型, 仅支持: ["Promise", "boolean", "string"]');
                    }
                }
                catch (error) {
                    validError.message = error.message;
                    reject(validError);
                }
            });
        };
    };
    return ValidateProvider;
}());

//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/validate-runner/es/validate-runner.js
/**
 * 验证执行描述对象
 */
var ValidateRunnerElement = /** @class */ (function () {
    /**
     * 实例化验证执行对象
     * @param name 验证函数名称
     * @param value 待验证的值
     * @param params 验证函数参数
     */
    function ValidateRunnerElement(name, value, params) {
        if (params === void 0) { params = []; }
        this.name = name;
        this.value = value;
        this.params = params === null || params === undefined ? [] : params;
    }
    return ValidateRunnerElement;
}());

/**
 * 验证执行器抽象类
 */
var ValidateRunner = /** @class */ (function () {
    /**
     * 构造函数
     * @param provider 验证函数提供方
     */
    function ValidateRunner(provider) {
        /**
         * 验证描述对象集合
         */
        this.elements = [];
        this.provider = provider;
    }
    /**
     * 添加验证描述对象
     * @param element 证描述对象
     */
    ValidateRunner.prototype.add = function (element) {
        this.elements.push(element);
        return this;
    };
    /**
     * 批量添加验证描述对象
     * @param elements 证描述对象集合
     */
    ValidateRunner.prototype.addBatch = function (elements) {
        var _this = this;
        elements.forEach(function (x) { return _this.add(x); });
        return this;
    };
    /**
     * 删除验证描述对象
     * @param element 证描述对象
     */
    ValidateRunner.prototype.remove = function (element) {
        if (element && element.name) {
            this.removeByName(element.name);
        }
        return this;
    };
    /**
     * 根据验证方法名称删除验证描述对象
     * @param name 验证方法名称
     */
    ValidateRunner.prototype.removeByName = function (name) {
        var i = this.elements.findIndex(function (x) { return x.name === name; });
        if (i !== -1) {
            this.elements.splice(i, 1);
        }
        else {
            console.warn("remove faild, element not found");
        }
        return this;
    };
    /**
     * 确保提供了验证提供方
     */
    ValidateRunner.prototype.makeSureProvider = function () {
        if (!this.provider) {
            throw new Error("provider Unavailable!");
        }
    };
    return ValidateRunner;
}());

/**
 * 创建无效验证名称异常
 * @param name 验证函数名称
 */
function createInvalidError(name) {
    return new Error("invalid validaMethod: " + name);
}
//# sourceMappingURL=validate-runner.js.map
// CONCATENATED MODULE: ./node_modules/validate-runner/es/all-runner.js


/**
 * 所有验证执行器
 * @description 有一个验证失败则失败
 */
var all_runner_ValidateRunnerAll = /** @class */ (function (_super) {
    tslib_es6["b" /* __extends */](ValidateRunnerAll, _super);
    /**
     * 构造函数
     * @param provider 验证函数提供方
     */
    function ValidateRunnerAll(provider) {
        return _super.call(this, provider) || this;
    }
    /**
     * 执行验证
     * @description 成功的返回数组永远只有一个元素
     */
    ValidateRunnerAll.prototype.execute = function () {
        var _a = this, elements = _a.elements, provider = _a.provider;
        var promiseCollection = [];
        this.makeSureProvider();
        for (var i = 0; i < elements.length; i++) {
            var runnerElement = elements[i];
            var provideInfo = provider.get(runnerElement.name);
            if (!provideInfo) {
                throw createInvalidError(runnerElement.name);
            }
            promiseCollection.push(provideInfo.method.apply(provideInfo, [runnerElement.value].concat(runnerElement.params)));
        }
        return Promise.all(promiseCollection);
    };
    return ValidateRunnerAll;
}(ValidateRunner));

//# sourceMappingURL=all-runner.js.map
// CONCATENATED MODULE: ./node_modules/validate-runner/es/any-runner.js


/**
 * 任意验证执行器
 * @description 顺序执行验证, 有一个验证失败则成功, 则成功
 * @description 适用场景: 比如一个输入框既可以输入邮箱也可以输入手机号, 此时邮箱或手机号验证其中一个通过则验证通过
 */
var any_runner_ValidateRunnerAny = /** @class */ (function (_super) {
    tslib_es6["b" /* __extends */](ValidateRunnerAny, _super);
    /**
     * 构造函数
     * @param provider 验证函数提供方
     */
    function ValidateRunnerAny(provider) {
        return _super.call(this, provider) || this;
    }
    /**
     * 执行验证
     */
    ValidateRunnerAny.prototype.execute = function () {
        var _this = this;
        var _a = this, elements = _a.elements, provider = _a.provider;
        return new Promise(function (resolve, reject) {
            try {
                _this.makeSureProvider();
            }
            catch (error) {
                reject(error);
                return;
            }
            var successd = false;
            var failCount = 0;
            for (var i = 0; i < elements.length; ++i) {
                if (successd) {
                    break;
                }
                var runnerElement = elements[i];
                var provideInfo = provider.get(runnerElement.name);
                if (!provideInfo) {
                    reject(createInvalidError(runnerElement.name));
                }
                provideInfo
                    .method.apply(provideInfo, [runnerElement.value].concat(runnerElement.params)).then(function (result) {
                    successd = true;
                    resolve([result]);
                })
                    .catch(function (error) {
                    ++failCount;
                    if (failCount >= elements.length) {
                        reject(error);
                    }
                });
            }
        });
    };
    return ValidateRunnerAny;
}(ValidateRunner));

//# sourceMappingURL=any-runner.js.map
// CONCATENATED MODULE: ./node_modules/validate-runner/es/index.js



//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/xy-form/es/ValidateUtils/FormValidateLocal.js
var FormValidateLocal = {
    // 通用验证===
    Required: "必填",
    MinLength: "长度应小于{0}",
    MaxLength: "长度应大于{0}",
    RangeLength: "长度范围应在{0} ~ {1}之间",
    Min: "值应该小于{0}",
    Max: "值应该大于{0}",
    Range: "值范围应该在{0} ~ {1}之间",
    Pattern: "无效值",
    // 类型验证===
    IsNumber: "无效数值",
    IsFunction: "无效函数",
    IsArray: "无效数组",
    // 格式验证===
    IsEmail: "无效邮箱格式",
    IsUrl: "无效网址格式",
    AcceptSuffix: "无效后缀格式",
    ZipCode: "无效邮政编码格式",
    PhoneNo: "无效手机号码",
    Tel: "无效座机号码",
    Chinese: "无效中文字符",
    NotChinese: "不能包含中文字符",
    BankCard: "无效银行卡号",
    IdCardNo: "无效身份证号",
    // 日期验证===
    IsTime: "无效时间格式",
    IsDateFormat: "无效日期格式",
    IsDateISO: "无效日期格式",
    // 数值验证===
    IsDigits: "无效整数",
    IsStep: "不是{0}的倍数",
    Amount: "无效金额"
};
//# sourceMappingURL=FormValidateLocal.js.map
// CONCATENATED MODULE: ./node_modules/xy-form/es/ValidateUtils/FormValidate.js





var FormValidate_ValidateError = /** @class */ (function (_super) {
    Object(tslib_es6["b" /* __extends */])(ValidateError, _super);
    /**
     * 构造函数
     * @param value
     * @param params
     * @param message
     * @param validName
     * @param input
     * @param trigger
     */
    function ValidateError(value, params, message, validName, input, trigger) {
        var _this = _super.call(this, value, params, message, validName) || this;
        _this.input = input;
        _this.trigger = trigger;
        return _this;
    }
    return ValidateError;
}(es_ValidateMethodError));

/**
 * 表单字段验证
 * @description {0}-{99}是格式化对应参数, {{VALUE}}是当前值 {{NAME}}是当前字段中文名称
 * @param configs   验证配置集合
 * @param value 值
 * @param input 输入框dom
 * @param trigger   触发事件
 */
function FieldValidate(value, configs, params) {
    if (configs === void 0) { configs = []; }
    var provider = new es_ValidateProvider();
    var runner = new all_runner_ValidateRunnerAll(provider);
    var label = params.label, input = params.input, trigger = params.trigger;
    configs.forEach(function (config) {
        if (!config.trigger || !trigger || (config.trigger && trigger && (trigger & config.trigger) !== 0)) {
            if (config.method || config.name in es_namespaceObject) {
                var msg = config.errMsg || FormValidateLocal[config.name] || "{{NAME}}验证失败";
                msg = msg.replace(/{{NAME}}/g, String(label));
                provider.addByMethodRegister({
                    name: config.name,
                    method: config.method || es_namespaceObject[config.name],
                    errMsg: msg,
                    format: config.format
                });
                runner.add(new ValidateRunnerElement(config.name, value, Object(tslib_es6["d" /* __spreadArrays */])((config.params || []), [input])));
            }
        }
    });
    return runner.execute().catch(function (error) {
        return Promise.reject(new FormValidate_ValidateError(value, error.params, error.message, error.validName, input, trigger));
    });
}
//# sourceMappingURL=FormValidate.js.map
// EXTERNAL MODULE: ./node_modules/lodash-es/get.js + 1 modules
var get = __webpack_require__("7EGn");

// EXTERNAL MODULE: ./node_modules/lodash-es/_getNative.js + 5 modules
var _getNative = __webpack_require__("Y7yP");

// CONCATENATED MODULE: ./node_modules/lodash-es/_defineProperty.js


var defineProperty = (function() {
  try {
    var func = Object(_getNative["a" /* default */])(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ var _defineProperty = (defineProperty);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseAssignValue.js


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ var _baseAssignValue = (baseAssignValue);

// EXTERNAL MODULE: ./node_modules/lodash-es/eq.js
var eq = __webpack_require__("YHEm");

// CONCATENATED MODULE: ./node_modules/lodash-es/_assignValue.js



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _assignValue_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(_assignValue_hasOwnProperty.call(object, key) && Object(eq["a" /* default */])(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

/* harmony default export */ var _assignValue = (assignValue);

// EXTERNAL MODULE: ./node_modules/lodash-es/_castPath.js + 7 modules
var _castPath = __webpack_require__("IlA0");

// CONCATENATED MODULE: ./node_modules/lodash-es/_isIndex.js
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ var _isIndex = (isIndex);

// EXTERNAL MODULE: ./node_modules/lodash-es/isObject.js
var isObject = __webpack_require__("IzLi");

// EXTERNAL MODULE: ./node_modules/lodash-es/_toKey.js
var _toKey = __webpack_require__("Tchk");

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseSet.js






/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!Object(isObject["a" /* default */])(object)) {
    return object;
  }
  path = Object(_castPath["a" /* default */])(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = Object(_toKey["a" /* default */])(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = Object(isObject["a" /* default */])(objValue)
          ? objValue
          : (_isIndex(path[index + 1]) ? [] : {});
      }
    }
    _assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

/* harmony default export */ var _baseSet = (baseSet);

// CONCATENATED MODULE: ./node_modules/lodash-es/set.js


/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : _baseSet(object, path, value);
}

/* harmony default export */ var lodash_es_set = (set);

// EXTERNAL MODULE: ./node_modules/lodash-es/_ListCache.js + 6 modules
var _ListCache = __webpack_require__("nLtN");

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackClear.js


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache["a" /* default */];
  this.size = 0;
}

/* harmony default export */ var _stackClear = (stackClear);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackDelete.js
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/* harmony default export */ var _stackDelete = (stackDelete);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackGet.js
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ var _stackGet = (stackGet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackHas.js
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ var _stackHas = (stackHas);

// EXTERNAL MODULE: ./node_modules/lodash-es/_Map.js
var _Map = __webpack_require__("3cmB");

// EXTERNAL MODULE: ./node_modules/lodash-es/_MapCache.js + 14 modules
var _MapCache = __webpack_require__("DlmY");

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackSet.js




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache["a" /* default */]) {
    var pairs = data.__data__;
    if (!_Map["a" /* default */] || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache["a" /* default */](pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ var _stackSet = (stackSet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Stack.js







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache["a" /* default */](entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

/* harmony default export */ var _Stack = (Stack);

// CONCATENATED MODULE: ./node_modules/lodash-es/_assignMergeValue.js



/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !Object(eq["a" /* default */])(object[key], value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

/* harmony default export */ var _assignMergeValue = (assignMergeValue);

// CONCATENATED MODULE: ./node_modules/lodash-es/_createBaseFor.js
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/* harmony default export */ var _createBaseFor = (createBaseFor);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseFor.js


/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

/* harmony default export */ var _baseFor = (baseFor);

// EXTERNAL MODULE: ./node_modules/lodash-es/_cloneBuffer.js
var _cloneBuffer = __webpack_require__("3/ER");

// EXTERNAL MODULE: ./node_modules/lodash-es/_root.js
var _root = __webpack_require__("Ju5/");

// CONCATENATED MODULE: ./node_modules/lodash-es/_Uint8Array.js


/** Built-in value references. */
var Uint8Array = _root["a" /* default */].Uint8Array;

/* harmony default export */ var _Uint8Array = (Uint8Array);

// CONCATENATED MODULE: ./node_modules/lodash-es/_cloneArrayBuffer.js


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

/* harmony default export */ var _cloneArrayBuffer = (cloneArrayBuffer);

// CONCATENATED MODULE: ./node_modules/lodash-es/_cloneTypedArray.js


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/* harmony default export */ var _cloneTypedArray = (cloneTypedArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_copyArray.js
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/* harmony default export */ var _copyArray = (copyArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseCreate.js


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!Object(isObject["a" /* default */])(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/* harmony default export */ var _baseCreate = (baseCreate);

// CONCATENATED MODULE: ./node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ var _overArg = (overArg);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getPrototype.js


/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

/* harmony default export */ var _getPrototype = (getPrototype);

// CONCATENATED MODULE: ./node_modules/lodash-es/_isPrototype.js
/** Used for built-in method references. */
var _isPrototype_objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || _isPrototype_objectProto;

  return value === proto;
}

/* harmony default export */ var _isPrototype = (isPrototype);

// CONCATENATED MODULE: ./node_modules/lodash-es/_initCloneObject.js




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}

/* harmony default export */ var _initCloneObject = (initCloneObject);

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseGetTag.js + 2 modules
var _baseGetTag = __webpack_require__("8M4i");

// EXTERNAL MODULE: ./node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__("EUcb");

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsArguments.js



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return Object(isObjectLike["a" /* default */])(value) && Object(_baseGetTag["a" /* default */])(value) == argsTag;
}

/* harmony default export */ var _baseIsArguments = (baseIsArguments);

// CONCATENATED MODULE: ./node_modules/lodash-es/isArguments.js



/** Used for built-in method references. */
var isArguments_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var isArguments_hasOwnProperty = isArguments_objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = isArguments_objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return Object(isObjectLike["a" /* default */])(value) && isArguments_hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ var lodash_es_isArguments = (isArguments);

// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__("/1FC");

// EXTERNAL MODULE: ./node_modules/lodash-es/isFunction.js
var isFunction = __webpack_require__("vJtL");

// CONCATENATED MODULE: ./node_modules/lodash-es/isLength.js
/** Used as references for various `Number` constants. */
var isLength_MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= isLength_MAX_SAFE_INTEGER;
}

/* harmony default export */ var lodash_es_isLength = (isLength);

// CONCATENATED MODULE: ./node_modules/lodash-es/isArrayLike.js



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && lodash_es_isLength(value.length) && !Object(isFunction["a" /* default */])(value);
}

/* harmony default export */ var lodash_es_isArrayLike = (isArrayLike);

// CONCATENATED MODULE: ./node_modules/lodash-es/isArrayLikeObject.js



/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return Object(isObjectLike["a" /* default */])(value) && lodash_es_isArrayLike(value);
}

/* harmony default export */ var lodash_es_isArrayLikeObject = (isArrayLikeObject);

// EXTERNAL MODULE: ./node_modules/lodash-es/isBuffer.js
var isBuffer = __webpack_require__("WOAq");

// CONCATENATED MODULE: ./node_modules/lodash-es/isPlainObject.js




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    isPlainObject_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var isPlainObject_hasOwnProperty = isPlainObject_objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(isObjectLike["a" /* default */])(value) || Object(_baseGetTag["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = isPlainObject_hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ var lodash_es_isPlainObject = (isPlainObject);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsTypedArray.js




/** `Object#toString` result references. */
var _baseIsTypedArray_argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    _baseIsTypedArray_objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[_baseIsTypedArray_argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[_baseIsTypedArray_objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return Object(isObjectLike["a" /* default */])(value) &&
    lodash_es_isLength(value.length) && !!typedArrayTags[Object(_baseGetTag["a" /* default */])(value)];
}

/* harmony default export */ var _baseIsTypedArray = (baseIsTypedArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseUnary.js
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/* harmony default export */ var _baseUnary = (baseUnary);

// EXTERNAL MODULE: ./node_modules/lodash-es/_nodeUtil.js
var _nodeUtil = __webpack_require__("xutz");

// CONCATENATED MODULE: ./node_modules/lodash-es/isTypedArray.js




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil["a" /* default */] && _nodeUtil["a" /* default */].isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

/* harmony default export */ var lodash_es_isTypedArray = (isTypedArray);

// CONCATENATED MODULE: ./node_modules/lodash-es/_safeGet.js
/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/* harmony default export */ var _safeGet = (safeGet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_copyObject.js



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

/* harmony default export */ var _copyObject = (copyObject);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseTimes.js
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/* harmony default export */ var _baseTimes = (baseTimes);

// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayLikeKeys.js







/** Used for built-in method references. */
var _arrayLikeKeys_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _arrayLikeKeys_hasOwnProperty = _arrayLikeKeys_objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = Object(isArray["a" /* default */])(value),
      isArg = !isArr && lodash_es_isArguments(value),
      isBuff = !isArr && !isArg && Object(isBuffer["a" /* default */])(value),
      isType = !isArr && !isArg && !isBuff && lodash_es_isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || _arrayLikeKeys_hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _arrayLikeKeys = (arrayLikeKeys);

// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeKeysIn.js
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _nativeKeysIn = (nativeKeysIn);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseKeysIn.js




/** Used for built-in method references. */
var _baseKeysIn_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeysIn_hasOwnProperty = _baseKeysIn_objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!Object(isObject["a" /* default */])(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !_baseKeysIn_hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _baseKeysIn = (baseKeysIn);

// CONCATENATED MODULE: ./node_modules/lodash-es/keysIn.js




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return lodash_es_isArrayLike(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

/* harmony default export */ var lodash_es_keysIn = (keysIn);

// CONCATENATED MODULE: ./node_modules/lodash-es/toPlainObject.js



/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return _copyObject(value, lodash_es_keysIn(value));
}

/* harmony default export */ var lodash_es_toPlainObject = (toPlainObject);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseMergeDeep.js
















/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = _safeGet(object, key),
      srcValue = _safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    _assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = Object(isArray["a" /* default */])(srcValue),
        isBuff = !isArr && Object(isBuffer["a" /* default */])(srcValue),
        isTyped = !isArr && !isBuff && lodash_es_isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (Object(isArray["a" /* default */])(objValue)) {
        newValue = objValue;
      }
      else if (lodash_es_isArrayLikeObject(objValue)) {
        newValue = _copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = Object(_cloneBuffer["a" /* default */])(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = _cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (lodash_es_isPlainObject(srcValue) || lodash_es_isArguments(srcValue)) {
      newValue = objValue;
      if (lodash_es_isArguments(objValue)) {
        newValue = lodash_es_toPlainObject(objValue);
      }
      else if (!Object(isObject["a" /* default */])(objValue) || Object(isFunction["a" /* default */])(objValue)) {
        newValue = _initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  _assignMergeValue(object, key, newValue);
}

/* harmony default export */ var _baseMergeDeep = (baseMergeDeep);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseMerge.js








/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  _baseFor(source, function(srcValue, key) {
    stack || (stack = new _Stack);
    if (Object(isObject["a" /* default */])(srcValue)) {
      _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(_safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      _assignMergeValue(object, key, newValue);
    }
  }, lodash_es_keysIn);
}

/* harmony default export */ var _baseMerge = (baseMerge);

// CONCATENATED MODULE: ./node_modules/lodash-es/identity.js
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/* harmony default export */ var lodash_es_identity = (identity);

// CONCATENATED MODULE: ./node_modules/lodash-es/_apply.js
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* harmony default export */ var _apply = (apply);

// CONCATENATED MODULE: ./node_modules/lodash-es/_overRest.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

/* harmony default export */ var _overRest = (overRest);

// CONCATENATED MODULE: ./node_modules/lodash-es/constant.js
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/* harmony default export */ var lodash_es_constant = (constant);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseSetToString.js




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty ? lodash_es_identity : function(func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': lodash_es_constant(string),
    'writable': true
  });
};

/* harmony default export */ var _baseSetToString = (baseSetToString);

// CONCATENATED MODULE: ./node_modules/lodash-es/_shortOut.js
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/* harmony default export */ var _shortOut = (shortOut);

// CONCATENATED MODULE: ./node_modules/lodash-es/_setToString.js



/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

/* harmony default export */ var _setToString = (setToString);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseRest.js




/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, lodash_es_identity), func + '');
}

/* harmony default export */ var _baseRest = (baseRest);

// CONCATENATED MODULE: ./node_modules/lodash-es/_isIterateeCall.js





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!Object(isObject["a" /* default */])(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (lodash_es_isArrayLike(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return Object(eq["a" /* default */])(object[index], value);
  }
  return false;
}

/* harmony default export */ var _isIterateeCall = (isIterateeCall);

// CONCATENATED MODULE: ./node_modules/lodash-es/_createAssigner.js



/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return _baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/* harmony default export */ var _createAssigner = (createAssigner);

// CONCATENATED MODULE: ./node_modules/lodash-es/merge.js



/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = _createAssigner(function(object, source, srcIndex) {
  _baseMerge(object, source, srcIndex);
});

/* harmony default export */ var lodash_es_merge = (merge);

// CONCATENATED MODULE: ./node_modules/xy-form/es/Hooks/useFormMethods.js




function throwFieldLose(prop) {
    throw new Error("\u672A\u627E\u5230\u5B57\u6BB5: " + prop);
}
function GetFieldItemState(fieldMapper, prop) {
    var mapper = fieldMapper.current;
    if (mapper.has(prop)) {
        return mapper.get(prop);
    }
    else {
        throwFieldLose(prop);
    }
}
/**
 * 获取指定模型对象对应全字段路径的值
 * @description 用于外部验证, onFieldValidate时把参数prop解析到对应验证配置
 * @param model
 * @param fullProp
 */
function getValueByFullProp(model, fullProp) {
    return Object(get["a" /* default */])(model, fullProp);
}
/**
 * 获取指定模型对象对应全字段路径的所在对象
 * @param model
 * @param fullProp
 */
function setValueByFullProp(model, fullProp, value) {
    lodash_es_set(model, fullProp, value);
}
function fieldValidateDefault(validConfig, onFieldValidate, fieldMapper, prop, trigger) {
    var state = GetFieldItemState(fieldMapper, prop);
    var configs = validConfig ? getValueByFullProp(validConfig, prop) : [];
    var value = state.getValue();
    var input = state.ref.current;
    var label = state.getLabel();
    if (state.getCanValidate() && onFieldValidate) {
        return onFieldValidate(value, configs, { label: label, input: input, trigger: trigger });
    }
    else {
        return Promise.resolve();
    }
}
function useFormMethods(props, fieldMapper) {
    var _a = props.onFieldValidate, onFieldValidate = _a === void 0 ? FieldValidate : _a, validConfig = props.validConfig, disabled = props.disabled, onFormValidate = props.onFormValidate, onSubmitBefore = props.onSubmitBefore, onSubmit = props.onSubmit, onValidateFail = props.onValidateFail;
    function getFieldItemState(prop) {
        return GetFieldItemState(fieldMapper, prop);
    }
    function getFieldValue(prop) {
        var state = getFieldItemState(prop);
        return state.getValue();
    }
    function setFieldValue(prop, value) {
        var state = getFieldItemState(prop);
        state.setValue(value);
    }
    function getFieldValidateResult(prop) {
        var state = getFieldItemState(prop);
        return state.getValidateResult();
    }
    function setFieldValidateResult(prop, result) {
        var state = getFieldItemState(prop);
        state.setValidateResult(result);
    }
    function resetField(prop) {
        var state = getFieldItemState(prop);
        state.rest();
    }
    function resetFields() {
        var mapper = fieldMapper.current;
        mapper.forEach(function (state) {
            state.rest();
        });
    }
    function validateField(prop) {
        var state = getFieldItemState(prop);
        return fieldValidateDefault(validConfig, onFieldValidate, fieldMapper, prop)
            .then(function () {
            state.setValidateResult({ status: true, msg: null });
        })
            .catch(function (error) {
            state.setValidateResult({ status: false, msg: error.message });
            return Promise.reject(error);
        });
    }
    function validateFields() {
        if (props.disabled) {
            return Promise.resolve();
        }
        var mapper = fieldMapper.current;
        var promises = [];
        mapper.forEach(function (state, prop) {
            promises.push(validateField(prop));
        });
        return Promise.all(promises);
    }
    function getFieldLabel(prop) {
        var state = getFieldItemState(prop);
        return state.getLabel();
    }
    function getFieldInput(prop) {
        var state = getFieldItemState(prop);
        return state.ref.current;
    }
    function submit(uncaught) {
        var data = toData();
        var validateFunc = onFormValidate || validateFields;
        if (disabled) {
            return Promise.reject(new Error("form disabled, can not submit"));
        }
        if (onSubmitBefore) {
            onSubmitBefore(data);
        }
        return validateFunc(fieldMapper)
            .then(function () {
            if (onSubmit) {
                return onSubmit(data);
            }
        })
            .then(function () {
            if (!uncaught) {
                return data;
            }
        })
            .catch(function (error) {
            if (onValidateFail) {
                onValidateFail(error, data);
            }
            if (!uncaught) {
                return Promise.reject(error);
            }
        });
    }
    function toData() {
        var mapper = fieldMapper.current;
        var model = {};
        mapper.forEach(function (state, prop) {
            var value = getFieldValue(prop);
            lodash_es_set(model, prop, value);
        });
        return lodash_es_merge({}, props.defaultModel, model);
    }
    function setModel(model) {
        var mapper = fieldMapper.current;
        mapper.forEach(function (state, prop) {
            state.setValue(Object(get["a" /* default */])(model, prop));
        });
    }
    return {
        getFieldValue: getFieldValue,
        setFieldValue: setFieldValue,
        getFieldValidateResult: getFieldValidateResult,
        resetField: resetField,
        resetFields: resetFields,
        validateField: validateField,
        validateFields: validateFields,
        getFieldInput: getFieldInput,
        getFieldLabel: getFieldLabel,
        setFieldValidateResult: setFieldValidateResult,
        toData: toData,
        setModel: setModel,
        submit: submit,
    };
}
//# sourceMappingURL=useFormMethods.js.map
// CONCATENATED MODULE: ./node_modules/xy-form/es/Hooks/useFormBlockState.js



function useFormBlockState(props) {
    var defaultModel = props.defaultModel, onFieldChange = props.onFieldChange, validConfig = props.validConfig, _a = props.onFieldValidate, onFieldValidate = _a === void 0 ? FieldValidate : _a;
    var fieldMapper = Object(react["useRef"])(new Map());
    function add(prop, itemState) {
        var mapper = fieldMapper.current;
        if (mapper.has(prop)) {
            console.warn("存在重复字段", prop);
        }
        mapper.set(prop, itemState);
    }
    function remove(prop) {
        var mapper = fieldMapper.current;
        if (mapper.has(prop)) {
            mapper.delete(prop);
        }
    }
    function fieldChange(prop, value) {
        if (onFieldChange) {
            onFieldChange(prop, value);
        }
        // 尝试同步到模型
        if (defaultModel) {
            setValueByFullProp(defaultModel, prop, value);
        }
    }
    function fieldValidate(prop, value, input, trigger) {
        return fieldValidateDefault(validConfig, onFieldValidate, fieldMapper, prop, trigger);
    }
    return [fieldMapper, { model: defaultModel, prop: "", add: add, remove: remove, fieldChange: fieldChange, fieldValidate: fieldValidate }];
}
//# sourceMappingURL=useFormBlockState.js.map
// EXTERNAL MODULE: ./node_modules/xy-form/es/ValidateUtils/ValidateTrigger.js
var ValidateTrigger = __webpack_require__("LsAB");

// CONCATENATED MODULE: ./node_modules/xy-form/es/Form.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Separator; });
/* unused harmony export Form */








/**
 * 字段分隔符
 */
var Separator = ".";
function Form(props) {
    var _a;
    var _b = props.prefixCls, prefixCls = _b === void 0 ? "xy-form" : _b, className = props.className, children = props.children, defaultModel = props.defaultModel, getFormMethods = props.getFormMethods, onFieldChange = props.onFieldChange, onFieldValidate = props.onFieldValidate, onSubmitBefore = props.onSubmitBefore, onFormValidate = props.onFormValidate, onValidateFail = props.onValidateFail, validConfig = props.validConfig, onSubmit = props.onSubmit, _c = props.disabled, disabled = _c === void 0 ? false : _c, _d = props.trigger, trigger = _d === void 0 ? ValidateTrigger["a" /* ValidateTrigger */].change : _d, _e = props.labelPosition, labelPosition = _e === void 0 ? "right" : _e, _f = props.labelWidth, labelWidth = _f === void 0 ? "85px" : _f, _g = props.inline, inline = _g === void 0 ? false : _g, _h = props.preventDefault, preventDefault = _h === void 0 ? true : _h, rest = Object(tslib_es6["c" /* __rest */])(props, ["prefixCls", "className", "children", "defaultModel", "getFormMethods", "onFieldChange", "onFieldValidate", "onSubmitBefore", "onFormValidate", "onValidateFail", "validConfig", "onSubmit", "disabled", "trigger", "labelPosition", "labelWidth", "inline", "preventDefault"]);
    var _j = useFormBlockState(props), fieldMapper = _j[0], formBlockContextState = _j[1];
    var formMethods = useFormMethods(props, fieldMapper);
    var classString = classnames_default()(prefixCls, className, (_a = {},
        _a[prefixCls + "--inline"] = inline,
        _a[prefixCls + "--label-" + labelPosition] = !!labelPosition,
        _a));
    if (getFormMethods) {
        getFormMethods(formMethods);
    }
    function submitHandle(event) {
        if (!preventDefault) {
            formMethods.submit(true);
        }
        event.stopPropagation();
        event.preventDefault();
        return false;
    }
    function restHandle() {
        if (disabled) {
            return;
        }
        formMethods.resetFields();
    }
    return (react_default.a.createElement("form", Object(tslib_es6["a" /* __assign */])({}, rest, { className: classString, onSubmit: submitHandle, onReset: restHandle, autoComplete: "off" }),
        react_default.a.createElement(FormContext["a" /* FormContext */].Provider, { value: { disabled: disabled, trigger: trigger, labelPosition: labelPosition, labelWidth: labelWidth, inline: inline, formMethods: formMethods, defaultModel: defaultModel } },
            react_default.a.createElement(FormBlockContext["a" /* FormBlockContext */].Provider, { value: formBlockContextState }, children))));
}
/* harmony default export */ var es_Form = __webpack_exports__["b"] = (react_default.a.memo(Form));
//# sourceMappingURL=Form.js.map

/***/ }),

/***/ "DlmY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_getNative.js + 5 modules
var _getNative = __webpack_require__("Y7yP");

// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeCreate.js


/* Built-in method references that are verified to be native. */
var nativeCreate = Object(_getNative["a" /* default */])(Object, 'create');

/* harmony default export */ var _nativeCreate = (nativeCreate);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hashClear.js


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

/* harmony default export */ var _hashClear = (hashClear);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hashDelete.js
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ var _hashDelete = (hashDelete);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hashGet.js


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashGet_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return _hashGet_hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ var _hashGet = (hashGet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hashHas.js


/** Used for built-in method references. */
var _hashHas_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashHas_hasOwnProperty = _hashHas_objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : _hashHas_hasOwnProperty.call(data, key);
}

/* harmony default export */ var _hashHas = (hashHas);

// CONCATENATED MODULE: ./node_modules/lodash-es/_hashSet.js


/** Used to stand-in for `undefined` hash values. */
var _hashSet_HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? _hashSet_HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ var _hashSet = (hashSet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Hash.js






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

/* harmony default export */ var _Hash = (Hash);

// EXTERNAL MODULE: ./node_modules/lodash-es/_ListCache.js + 6 modules
var _ListCache = __webpack_require__("nLtN");

// EXTERNAL MODULE: ./node_modules/lodash-es/_Map.js
var _Map = __webpack_require__("3cmB");

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheClear.js




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map["a" /* default */] || _ListCache["a" /* default */]),
    'string': new _Hash
  };
}

/* harmony default export */ var _mapCacheClear = (mapCacheClear);

// CONCATENATED MODULE: ./node_modules/lodash-es/_isKeyable.js
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ var _isKeyable = (isKeyable);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getMapData.js


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ var _getMapData = (getMapData);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheDelete.js


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ var _mapCacheDelete = (mapCacheDelete);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheGet.js


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

/* harmony default export */ var _mapCacheGet = (mapCacheGet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheHas.js


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

/* harmony default export */ var _mapCacheHas = (mapCacheHas);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheSet.js


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ var _mapCacheSet = (mapCacheSet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_MapCache.js






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

/* harmony default export */ var _MapCache = __webpack_exports__["a"] = (MapCache);


/***/ }),

/***/ "EUcb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),

/***/ "G8aS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8M4i");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EUcb");



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value) && Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) == symbolTag);
}

/* harmony default export */ __webpack_exports__["a"] = (isSymbol);


/***/ }),

/***/ "IlA0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__("/1FC");

// EXTERNAL MODULE: ./node_modules/lodash-es/isSymbol.js
var isSymbol = __webpack_require__("G8aS");

// CONCATENATED MODULE: ./node_modules/lodash-es/_isKey.js



/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (Object(isArray["a" /* default */])(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || Object(isSymbol["a" /* default */])(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/* harmony default export */ var _isKey = (isKey);

// EXTERNAL MODULE: ./node_modules/lodash-es/_MapCache.js + 14 modules
var _MapCache = __webpack_require__("DlmY");

// CONCATENATED MODULE: ./node_modules/lodash-es/memoize.js


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache["a" /* default */]);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache["a" /* default */];

/* harmony default export */ var lodash_es_memoize = (memoize);

// CONCATENATED MODULE: ./node_modules/lodash-es/_memoizeCapped.js


/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = lodash_es_memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/* harmony default export */ var _memoizeCapped = (memoizeCapped);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stringToPath.js


/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/* harmony default export */ var _stringToPath = (stringToPath);

// EXTERNAL MODULE: ./node_modules/lodash-es/_Symbol.js
var _Symbol = __webpack_require__("ylTp");

// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayMap.js
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/* harmony default export */ var _arrayMap = (arrayMap);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseToString.js





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol["a" /* default */] ? _Symbol["a" /* default */].prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (Object(isArray["a" /* default */])(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (Object(isSymbol["a" /* default */])(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ var _baseToString = (baseToString);

// CONCATENATED MODULE: ./node_modules/lodash-es/toString.js


/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString_toString(value) {
  return value == null ? '' : _baseToString(value);
}

/* harmony default export */ var lodash_es_toString = (toString_toString);

// CONCATENATED MODULE: ./node_modules/lodash-es/_castPath.js





/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (Object(isArray["a" /* default */])(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(lodash_es_toString(value));
}

/* harmony default export */ var _castPath = __webpack_exports__["a"] = (castPath);


/***/ }),

/***/ "IzLi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ __webpack_exports__["a"] = (isObject);


/***/ }),

/***/ "Ju5/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XqMk");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),

/***/ "L3Qv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/* harmony default export */ __webpack_exports__["a"] = (stubFalse);


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

/***/ "LsAB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateTrigger; });
/**
 * 验证事件
 */
var ValidateTrigger;
(function (ValidateTrigger) {
    /**
     * 失去焦点触发
     */
    ValidateTrigger[ValidateTrigger["blur"] = 2] = "blur";
    /**
     * 输入时触发
     */
    ValidateTrigger[ValidateTrigger["change"] = 4] = "change";
    /**
     * 无, 只会再表单submit时提交
     */
    ValidateTrigger[ValidateTrigger["none"] = 999] = "none";
    /**
     * 二者都是
     */
    ValidateTrigger[ValidateTrigger["all"] = 6] = "all";
})(ValidateTrigger || (ValidateTrigger = {}));
//# sourceMappingURL=ValidateTrigger.js.map

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

/***/ "Tchk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("G8aS");


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ __webpack_exports__["a"] = (toKey);


/***/ }),

/***/ "WOAq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ju5/");
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("L3Qv");



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];

/* harmony default export */ __webpack_exports__["a"] = (isBuffer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("3UD+")(module)))

/***/ }),

/***/ "XqMk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ }),

/***/ "Y7yP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/isFunction.js
var isFunction = __webpack_require__("vJtL");

// EXTERNAL MODULE: ./node_modules/lodash-es/_root.js
var _root = __webpack_require__("Ju5/");

// CONCATENATED MODULE: ./node_modules/lodash-es/_coreJsData.js


/** Used to detect overreaching core-js shims. */
var coreJsData = _root["a" /* default */]['__core-js_shared__'];

/* harmony default export */ var _coreJsData = (coreJsData);

// CONCATENATED MODULE: ./node_modules/lodash-es/_isMasked.js


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/* harmony default export */ var _isMasked = (isMasked);

// EXTERNAL MODULE: ./node_modules/lodash-es/isObject.js
var isObject = __webpack_require__("IzLi");

// CONCATENATED MODULE: ./node_modules/lodash-es/_toSource.js
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ var _toSource = (toSource);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsNative.js





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var _baseIsNative_funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var _baseIsNative_funcToString = _baseIsNative_funcProto.toString;

/** Used to check objects for own properties. */
var _baseIsNative_hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  _baseIsNative_funcToString.call(_baseIsNative_hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!Object(isObject["a" /* default */])(value) || _isMasked(value)) {
    return false;
  }
  var pattern = Object(isFunction["a" /* default */])(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

/* harmony default export */ var _baseIsNative = (baseIsNative);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getValue.js
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ var _getValue = (getValue);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getNative.js



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

/* harmony default export */ var _getNative = __webpack_exports__["a"] = (getNative);


/***/ }),

/***/ "YHEm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ __webpack_exports__["a"] = (eq);


/***/ }),

/***/ "b0S1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormItemContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var FormItemContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
    onValidateChange: null,
    label: ""
});
//# sourceMappingURL=FormItemContext.js.map

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

/***/ "bVAN":
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

// EXTERNAL MODULE: ./node_modules/xy-form/es/ValidateUtils/ValidateTrigger.js
var ValidateTrigger = __webpack_require__("LsAB");

// EXTERNAL MODULE: ./node_modules/xy-form/es/Form.js + 70 modules
var Form = __webpack_require__("AJE1");

// EXTERNAL MODULE: ./components/Form/style/index.scss
var Form_style = __webpack_require__("3mje");

// EXTERNAL MODULE: ./components/Tooptips/index.ts + 1 modules
var Tooptips = __webpack_require__("lp3i");

// CONCATENATED MODULE: ./components/Form/utils.ts

/**
 * 表单验证错误处理器
 * @param error
 * @param data
 */
function formValidateFailHandle(error, data) {
    if (error.input) {
        error.input.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }
    Object(Tooptips["a" /* TooptipsPopup */])({ children: error.message });
}

// CONCATENATED MODULE: ./components/Form/Form.tsx






function WeForm(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "weui-form" : _a, className = props.className, style = props.style, title = props.title, desc = props.desc, extra = props.extra, opr = props.opr, tips = props.tips, _b = props.trigger, trigger = _b === void 0 ? ValidateTrigger["a" /* ValidateTrigger */].blur : _b, children = props.children, rest = Object(tslib_es6["c" /* __rest */])(props, ["prefixCls", "className", "style", "title", "desc", "extra", "opr", "tips", "trigger", "children"]);
    return (react_default.a.createElement("div", { className: classnames_default()(prefixCls, className), style: style },
        react_default.a.createElement(Form["b" /* default */], Object(tslib_es6["a" /* __assign */])({}, rest, { trigger: trigger, onValidateFail: formValidateFailHandle }),
            react_default.a.createElement("div", { className: prefixCls + "__text-area" },
                react_default.a.createElement("h2", { className: prefixCls + "__title" }, title),
                react_default.a.createElement("div", { className: prefixCls + "__desc" }, desc)),
            react_default.a.createElement("div", { className: prefixCls + "__control-area" }, children),
            tips && react_default.a.createElement("div", { className: prefixCls + "__tips-area" }, tips),
            opr && react_default.a.createElement("div", { className: prefixCls + "__opr-area" }, opr),
            extra && react_default.a.createElement("div", { className: prefixCls + "__extra-area" }, extra))));
}
/* harmony default export */ var Form_Form = __webpack_exports__["a"] = (react_default.a.memo(WeForm));


/***/ }),

/***/ "hM9q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DefaultFormBlockContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormBlockContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DefaultFormBlockContext = {
    add: null,
    remove: null,
    model: null,
    prop: ""
};
var FormBlockContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(DefaultFormBlockContext);
//# sourceMappingURL=FormBlockContext.js.map

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

/***/ "mcfo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./node_modules/xy-form/node_modules/utils-hooks/es/useMedia.js

/**
 * 媒体查询hooks
 * @param queries 媒体查询语句集合
 * @param values 对应值
 * @param defaultValue 默认值
 * @see https://usehooks.com/useMedia/
 * @example
 *  useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2)
 */
function useMedia(queries, values, defaultValue) {
    // Array containing a media query list for each query
    var mediaQueryLists = queries.map(function (q) { return window.matchMedia(q); });
    // Function that gets value based on matching media query
    var getValue = function () {
        // Get index of first media query that matches
        var index = mediaQueryLists.findIndex(function (mql) { return mql.matches; });
        // Return related value or defaultValue if none
        return typeof values[index] !== "undefined" ? values[index] : defaultValue;
    };
    // State and setter for matched value
    var _a = Object(react["useState"])(getValue), value = _a[0], setValue = _a[1];
    Object(react["useEffect"])(function () {
        // Event listener callback
        // Note: By defining getValue outside of useEffect we ensure that it has ...
        // ... current values of hook args (as this hook callback is created once on mount).
        var handler = function () { return setValue(getValue); };
        // Set a listener for each media query with above handler as callback.
        mediaQueryLists.forEach(function (mql) { return mql.addListener(handler); });
        // Remove listeners on cleanup
        return function () { return mediaQueryLists.forEach(function (mql) { return mql.removeListener(handler); }); };
    }, []); // Empty array ensures effect is only run on mount and unmount
    return value;
}
//# sourceMappingURL=useMedia.js.map
// CONCATENATED MODULE: ./node_modules/xy-form/node_modules/utils-hooks/es/useControll.js

/**
 * 获取默认值
 * @param props React组件的props对象
 * @param key 值键
 * @param defaultKey    默认值键
 */
function DefineDefaultValue(props, key, defaultKey, convent) {
    if (key === void 0) { key = "value"; }
    if (defaultKey === void 0) { defaultKey = "defaultValue"; }
    var defaultValue = null;
    if (key in props) {
        defaultValue = convent ? convent(props[key]) : props[key];
    }
    else if (defaultKey in props) {
        defaultValue = convent ? convent(props[defaultKey]) : props[defaultKey];
    }
    return defaultValue;
}
/**
 * 受控组件样板
 * @param props React组件的props对象
 * @param key 值键
 * @param defaultKey 默认值键
 */
function useControll(props, key, defaultKey, defaultValue, convent) {
    if (key === void 0) { key = "value"; }
    if (defaultKey === void 0) { defaultKey = "defaultValue"; }
    var isControll = key in props;
    var _a = Object(react["useState"])(DefineDefaultValue(props, key, defaultKey, convent) || defaultValue), value = _a[0], setValue = _a[1];
    return [isControll ? props[key] : value, setValue, isControll];
}
//# sourceMappingURL=useControll.js.map
// CONCATENATED MODULE: ./node_modules/xy-form/node_modules/utils-hooks/es/useContainer.js

/**
 * 获取容器
 * @param getContainer
 * @param   className
 * @example const container = useContainer(() => some_container);
 */
function useContainer(className, getContainer) {
    var containerRef = Object(react["useRef"])(null);
    // 在组件装卸时, 清除再body内创建的 container
    Object(react["useEffect"])(function () {
        return function () {
            if (containerRef.current) {
                document.body.removeChild(containerRef.current);
            }
        };
    }, []);
    var container;
    if (!getContainer) {
        // 未提供 container 则在Body下创建div作为容器
        if (!containerRef.current) {
            container = document.createElement("div");
            if (className) {
                container.classList.add(className);
            }
            document.body.appendChild(container);
            containerRef.current = container;
        }
        else {
            return containerRef.current;
        }
    }
    else if (getContainer instanceof Function) {
        container = getContainer();
    }
    else {
        container = getContainer;
    }
    return container;
}
function useContainerWithRef(containerRef, className, getContainer) {
    // 在组件装卸时, 清除再body内创建的 container
    Object(react["useEffect"])(function () {
        return function () {
            if (containerRef.current) {
                document.body.removeChild(containerRef.current);
            }
        };
    }, []);
    var container;
    if (!getContainer) {
        // 未提供 container 则在Body下创建div作为容器
        if (!containerRef.current) {
            container = document.createElement("div");
            if (className) {
                container.classList.add(className);
            }
            document.body.appendChild(container);
            containerRef.current = container;
        }
        else {
            return containerRef.current;
        }
    }
    else if (getContainer instanceof Function) {
        container = getContainer();
    }
    else {
        container = getContainer;
    }
    return container;
}
//# sourceMappingURL=useContainer.js.map
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// CONCATENATED MODULE: ./node_modules/xy-form/node_modules/utils-hooks/es/usePortal.js


/**
 * 使用Portal, 弹出内容
 * @param getContainer
 * @param getContainer
 */
function usePortal(className, getContainer) {
    var container = useContainer(className, getContainer);
    function renderPortal(node) {
        if (!container) {
            return null;
        }
        return react_dom_default.a.createPortal(node, container);
    }
    return [renderPortal, container];
}
//# sourceMappingURL=usePortal.js.map
// CONCATENATED MODULE: ./node_modules/xy-form/node_modules/utils-hooks/es/useTranstion.js

var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
/**
 * 过度状态
 * @param visible   是否可见
 * @param initTranstion   是否初始动画, 默认false[可选]
 * @example const [ref, state] = useTranstion(visible);
 */
function useTranstion(visible, initTranstion) {
    if (initTranstion === void 0) { initTranstion = false; }
    var _a = Object(react["useState"])(UNMOUNTED), state = _a[0], setState = _a[1];
    // visible ? ENTERED : EXITED
    var firstFlag = Object(react["useRef"])(true);
    var firstVisible = Object(react["useRef"])(visible);
    var ref = Object(react["useRef"])();
    var handleTransitionEnter = Object(react["useCallback"])(function (e) {
        var element = ref.current;
        if (e.target === element) {
            setState(ENTERED);
        }
    }, []);
    var handleTransitionLeave = Object(react["useCallback"])(function (e) {
        var element = ref.current;
        if (e.target === element) {
            setState(EXITED);
        }
    }, []);
    Object(react["useEffect"])(function () {
        var element = ref.current;
        if (!element) {
            return;
        }
        // 默认忽略第一次visible状态为false时的过度, 避免显示关闭过度动画
        if (firstFlag.current) {
            firstFlag.current = false;
            if (!initTranstion && !firstVisible.current) {
                visible ? setState(ENTERED) : setState(EXITED);
                return;
            }
        }
        if (visible) {
            // 重置离开的样式和事件
            element.removeEventListener("transitionend", handleTransitionLeave);
            element.removeEventListener("animationend", handleTransitionLeave);
            // 1. 监听过度完毕事件
            element.addEventListener("transitionend", handleTransitionEnter);
            element.addEventListener("animationend", handleTransitionEnter);
            setState(ENTERING);
        }
        else {
            element.removeEventListener("transitionend", handleTransitionEnter);
            element.removeEventListener("animationend", handleTransitionEnter);
            element.addEventListener("transitionend", handleTransitionLeave);
            element.addEventListener("animationend", handleTransitionLeave);
            setState(EXITING);
        }
    }, [visible]);
    return [ref, state];
}
function useTranstionWithRef(ref, visible, initTranstion) {
    if (initTranstion === void 0) { initTranstion = false; }
    var _a = Object(react["useState"])(initTranstion ? UNMOUNTED : visible ? ENTERED : EXITED), state = _a[0], setState = _a[1];
    var init = Object(react["useRef"])(false);
    var handleTransitionEnter = Object(react["useCallback"])(function (e) {
        var element = ref.current;
        if (e.target === element) {
            setState(ENTERED);
        }
    }, []);
    var handleTransitionLeave = Object(react["useCallback"])(function (e) {
        var element = ref.current;
        if (e.target === element) {
            setState(EXITED);
        }
    }, []);
    Object(react["useEffect"])(function () {
        var element = ref.current;
        if (!element) {
            return;
        }
        /**
         * 第一次立即设置完毕状态, 而不等待过度动画完毕, 因为这个时候没有过度
         */
        if (init.current === false) {
            if (initTranstion) {
                visible ? setState(ENTERED) : setState(EXITED);
            }
            init.current = true;
            return;
        }
        if (visible) {
            // 重置离开的样式和事件
            element.removeEventListener("transitionend", handleTransitionLeave);
            element.removeEventListener("animationend", handleTransitionLeave);
            // 1. 监听过度完毕事件
            element.addEventListener("transitionend", handleTransitionEnter);
            element.addEventListener("animationend", handleTransitionEnter);
            setState(ENTERING);
        }
        else {
            element.removeEventListener("transitionend", handleTransitionEnter);
            element.removeEventListener("animationend", handleTransitionEnter);
            element.addEventListener("transitionend", handleTransitionLeave);
            element.addEventListener("animationend", handleTransitionLeave);
            setState(EXITING);
        }
    }, [visible]);
    return state;
}
//# sourceMappingURL=useTranstion.js.map
// CONCATENATED MODULE: ./node_modules/xy-form/node_modules/utils-hooks/es/useObserver.js

/**
 * 监听元素是否可视
 * @param justFirst 是否仅初次加载触发
 * @example
 *  const [ref, visible] = useObserver();
 */
function useObserver(justFirst) {
    if (justFirst === void 0) { justFirst = false; }
    var ref = Object(react["useRef"])();
    var loadRef = Object(react["useRef"])(false);
    // 元素当前是否可见
    var _a = Object(react["useState"])(false), visible = _a[0], setVisible = _a[1];
    Object(react["useEffect"])(function () {
        var element = ref.current;
        if (!element) {
            return;
        }
        var intersectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (info) {
                var _visible = info.intersectionRatio > 0;
                if (justFirst) {
                    if (_visible && !loadRef.current) {
                        loadRef.current = true;
                        setVisible(_visible);
                        intersectionObserver.disconnect();
                    }
                }
                else {
                    setVisible(_visible);
                }
            });
        });
        intersectionObserver.observe(element);
        return function () {
            intersectionObserver.unobserve(element);
        };
    }, [ref.current]);
    return [ref, visible];
}
function useObserverWithRef(ref, justFirst) {
    if (justFirst === void 0) { justFirst = false; }
    var loadRef = Object(react["useRef"])(false);
    // 元素当前是否可见
    var _a = Object(react["useState"])(false), visible = _a[0], setVisible = _a[1];
    Object(react["useEffect"])(function () {
        var element = ref.current;
        if (!element) {
            return;
        }
        var intersectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (info) {
                var _visible = info.intersectionRatio > 0;
                if (justFirst) {
                    if (_visible && !loadRef.current) {
                        loadRef.current = true;
                        setVisible(_visible);
                        intersectionObserver.disconnect();
                    }
                }
                else {
                    setVisible(_visible);
                }
            });
        });
        intersectionObserver.observe(element);
        return function () {
            intersectionObserver.unobserve(element);
        };
    }, [ref.current]);
    return visible;
}
//# sourceMappingURL=useObserver.js.map
// CONCATENATED MODULE: ./node_modules/xy-form/node_modules/utils-hooks/es/Lifecycles/useMount.js

var useMount = function (mount) { return Object(react["useEffect"])(mount, []); };
//# sourceMappingURL=useMount.js.map
// CONCATENATED MODULE: ./node_modules/xy-form/node_modules/utils-hooks/es/Lifecycles/useUnmount.js

var useUnmount = function (unmount) {
    Object(react["useEffect"])(function () { return function () {
        if (unmount)
            unmount();
    }; }, []);
};
//# sourceMappingURL=useUnmount.js.map
// CONCATENATED MODULE: ./node_modules/xy-form/node_modules/utils-hooks/es/Lifecycles/useUpdateEffect.js

var useUpdateEffect = function (effect, deps) {
    var isInitialMount = Object(react["useRef"])(true);
    Object(react["useEffect"])(isInitialMount.current
        ? function () {
            isInitialMount.current = false;
        }
        : effect, deps);
};
//# sourceMappingURL=useUpdateEffect.js.map
// CONCATENATED MODULE: ./node_modules/xy-form/node_modules/utils-hooks/es/Sensors/useObserverScroll.js

/**
 * 监听元素滚动事件
 * @description 封装了滚动方向
 * @param callback
 * @param deps
 * @param target
 */
function useObserverScroll(callback, target, deps) {
    var lastScroll = Object(react["useRef"])(window.pageYOffset);
    Object(react["useEffect"])(function () {
        function handleScroll(event) {
            callback(event, !(lastScroll.current > window.pageYOffset));
            lastScroll.current = window.pageYOffset;
        }
        var t = target || window;
        if (t) {
            t.addEventListener("scroll", handleScroll);
        }
        return function () {
            t.removeEventListener("scroll", handleScroll);
        };
    }, deps);
}
//# sourceMappingURL=useObserverScroll.js.map
// CONCATENATED MODULE: ./node_modules/xy-form/node_modules/utils-hooks/es/State/useGlobalState.js

var MonitorState = /** @class */ (function () {
    function MonitorState(initState) {
        var _this = this;
        this.unsubscribe = function (callback) {
            var subscribes = _this.subscribes;
            var index = _this.findSubscribe(callback);
            if (index !== -1) {
                subscribes.splice(index, 1);
            }
        };
        this.setState = function (value) {
            _this.previousState = value;
            _this.subscribes.forEach(function (fn) { return fn(value); });
        };
        this.previousState = initState;
        this.subscribes = [];
    }
    MonitorState.prototype.findSubscribe = function (callback) {
        return this.subscribes.findIndex(function (fn) { return fn === callback; });
    };
    MonitorState.prototype.subscribe = function (callback) {
        var _this = this;
        var subscribes = this.subscribes;
        var index = this.findSubscribe(callback);
        if (index === -1) {
            subscribes.push(callback);
        }
        else {
            subscribes[index] = callback;
        }
        // 返回取消订阅得函数
        return function () { return _this.unsubscribe(callback); };
    };
    MonitorState.prototype.getState = function () {
        return this.previousState;
    };
    return MonitorState;
}());

function useGlobalState(state) {
    var _a = Object(react["useState"])(state.getState()), val = _a[0], setVal = _a[1];
    Object(react["useEffect"])(function () {
        var unsubscribe = state.subscribe(function (value) {
            setVal(value);
        });
        return unsubscribe;
    }, [1]);
    return [val, state.setState];
}
//# sourceMappingURL=useGlobalState.js.map
// CONCATENATED MODULE: ./node_modules/xy-form/node_modules/utils-hooks/es/useOutsideClick.js

/**
 * 监听是否空白处点击
 * @param elements
 * @param cb
 */
function useOutsideClick(elements, cb, deps) {
    if (deps === void 0) { deps = []; }
    Object(react["useEffect"])(function () {
        var outsideClickHandle = function (event) {
            if (!elements.some(function (ele) { return ele && (ele === event.target || ele.contains(event.target)); })) {
                cb(event);
            }
        };
        document.addEventListener("click", outsideClickHandle, true);
        return function () { return document.removeEventListener("click", outsideClickHandle, true); };
    }, elements.concat(deps));
}
//# sourceMappingURL=useOutsideClick.js.map
// CONCATENATED MODULE: ./node_modules/xy-form/node_modules/utils-hooks/es/Trigger/utils.js
/**
 * 监听元素是否hover
 * @param element
 * @param cb
 */
function listenHover(element, cb) {
    if (!element) {
        return;
    }
    var onMouseEnter = function (event) {
        cb(true, event);
    };
    var onMouseLeave = function (event) {
        cb(false, event);
    };
    element.addEventListener("mouseenter", onMouseEnter);
    element.addEventListener("mouseleave", onMouseLeave);
    // 返回取消函数
    return function () {
        element.removeEventListener("mouseenter", onMouseEnter);
        element.removeEventListener("mouseleave", onMouseLeave);
    };
}
/**
 * 监听元素点击事件
 * @param element
 * @param cb
 */
function listenClick(element, cb, getPrevState) {
    if (!element) {
        return;
    }
    var onMouseClick = function (event) {
        if (getPrevState) {
            cb(!getPrevState(), event);
        }
        else {
            cb(true, event);
        }
    };
    element.addEventListener("click", onMouseClick);
    // 返回取消函数
    return function () { return element.removeEventListener("click", onMouseClick); };
}
/**
 * 监听元素焦点事件
 * @param element
 * @param cb
 */
function listenFocus(element, cb) {
    if (!element) {
        return;
    }
    var onMouseFocus = function (event) {
        cb(true, event);
    };
    var onMouseBlur = function (event) {
        cb(false, event);
    };
    element.addEventListener("focus", onMouseFocus);
    element.addEventListener("blur", onMouseBlur);
    // 返回取消函数
    return function () {
        element.removeEventListener("focus", onMouseFocus);
        element.removeEventListener("blur", onMouseBlur);
    };
}
/**
 * 监听元素右键菜单事件
 * @param element
 * @param cb
 */
function listenContextMenu(element, cb) {
    if (!element) {
        return;
    }
    var onContextMenu = function (event) {
        cb(true, event);
        event.preventDefault();
    };
    element.addEventListener("contextmenu", onContextMenu);
    // 返回取消函数
    return function () {
        element.removeEventListener("contextmenu", onContextMenu);
    };
}
//# sourceMappingURL=utils.js.map
// CONCATENATED MODULE: ./node_modules/xy-form/node_modules/utils-hooks/es/Trigger/useTrigger.js


var ActionMap = {
    hover: listenHover,
    click: listenClick,
    focus: listenFocus,
    contextMenu: listenContextMenu,
};
function useTrigger(ref, action, cancel, cb, deps) {
    if (deps === void 0) { deps = []; }
    var prevState = Object(react["useRef"])(false);
    /**
     * 是否可以取消激活
     * @param act
     */
    function canbeCancel(act) {
        if (act === "contextMenu") {
            return cancel.some(function (x) { return x === "click"; });
        }
        return cancel.some(function (x) { return x === act; });
    }
    function listenTrigger(element, actions, handle, alreadyListenMap) {
        if (alreadyListenMap === void 0) { alreadyListenMap = {}; }
        var listenMap = alreadyListenMap || {};
        actions.forEach(function (act) {
            var listenFn = ActionMap[act];
            if (!listenFn) {
                throw new Error("invalid action " + act);
            }
            if (!listenMap[act]) {
                listenMap[act] = listenFn(element, function (actived, event) { return handle(act, actived, event); }, function () { return prevState.current; });
            }
        });
        return listenMap;
    }
    Object(react["useEffect"])(function () {
        var element = ref.current;
        if (!element) {
            return;
        }
        var listenMap = listenTrigger(element, action, function (act, actived, event) {
            if (actived || canbeCancel(act)) {
                prevState.current = actived;
                cb(act, actived, event);
            }
        });
        listenTrigger(element, cancel, function (act, actived, event) {
            prevState.current = false;
            cb(act, false, event);
        }, listenMap);
        return function () {
            // 清除事件监听
            for (var key in listenMap) {
                listenMap[key]();
            }
        };
    }, [ref.current].concat(deps));
    return function (visible) { return (prevState.current = visible); };
}
/**
 * 触发包裹组件
 * @description 如果element是原生组件, 则直接返回, 否则包裹一层div去监听事件
 * @param element
 */
function TriggerWrap(element, ref, className, allowOther) {
    if (allowOther === void 0) { allowOther = false; }
    var node = react_default.a.Children.only(element);
    // node.type 是字符串, 则认为原生标签, 如果是构造函数, 则认定是自定义组件
    if (typeof node.type === "string" || allowOther) {
        return react_default.a.cloneElement(node, Object.assign({}, node.props, { ref: ref, className: className }));
    }
    else {
        return (react_default.a.createElement("div", { ref: ref, className: className }, element));
    }
}
//# sourceMappingURL=useTrigger.js.map
// CONCATENATED MODULE: ./node_modules/xy-form/node_modules/utils-hooks/es/Trigger/useTriggerChain.js



/**
 * 触发链
 * @param triggerRef
 * @param hideRef
 * @param mouseDelay
 */
function useTriggerChain(triggerRef, hideRef, cb, config, deps) {
    if (deps === void 0) { deps = []; }
    var triggerActived = Object(react["useRef"])(false);
    var hideActived = Object(react["useRef"])(false);
    var timeHandle = Object(react["useRef"])(null);
    var setActived = useTrigger(triggerRef, config.trigger, config.trigger, function (act, actived, event) {
        triggerActived.current = actived;
        if (actived) {
            cb(act, actived, event);
        }
        else if (act === "hover") {
            // hover时候离开, 等mouseDelay秒, 再判断
            clearTimeout(timeHandle.current);
            timeHandle.current = setTimeout(function () {
                if (!hideActived.current) {
                    cb(act, actived, event);
                }
            }, config.mouseDelay);
        }
        else {
            if (!hideActived.current) {
                cb(act, actived, event);
            }
        }
    }, deps);
    Object(react["useEffect"])(function () {
        if (config.trigger.indexOf("hover") === -1) {
            return;
        }
        return listenHover(hideRef.current, function (hovered, event) {
            hideActived.current = hovered;
            if (!hovered) {
                clearTimeout(timeHandle.current);
                timeHandle.current = setTimeout(function () {
                    if (!triggerActived.current) {
                        cb("hover", hovered, event);
                    }
                }, config.mouseDelay);
            }
        });
    }, [hideRef.current].concat(deps));
    return setActived;
}
//# sourceMappingURL=useTriggerChain.js.map
// CONCATENATED MODULE: ./node_modules/xy-form/node_modules/utils-hooks/es/SideEffects/useDebounce.js

/**
 * 防抖函数
 * @param value 值
 * @param delay 延迟
 * @example const debouncedSearch = useDebounce(search, 500);
 */
function useDebounce(value, delay) {
    if (delay === void 0) { delay = 500; }
    // State and setters for debounced value
    var _a = Object(react["useState"])(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    Object(react["useEffect"])(function () {
        // Update debounced value after delay
        var handler = setTimeout(function () {
            setDebouncedValue(value);
        }, delay);
        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        return function () {
            clearTimeout(handler);
        };
    }, [value, delay]); // Only re-call effect if value or delay changes
    return debouncedValue;
}
/**
 * 防抖函数
 * @param   fn 回调函数
 * @param   ms  延迟
 * @param   args    依赖参数
 */
function useDebounceCallback(fn, ms, args) {
    if (ms === void 0) { ms = 0; }
    if (args === void 0) { args = []; }
    Object(react["useEffect"])(function () {
        if (!ms) {
            fn();
            return;
        }
        var handle = setTimeout(fn.bind(null, args), ms);
        return function () {
            // if args change then clear timeout
            clearTimeout(handle);
        };
    }, args);
}
//# sourceMappingURL=useDebounce.js.map
// CONCATENATED MODULE: ./node_modules/xy-form/node_modules/utils-hooks/es/SideEffects/useForceUpdate.js

var useForceUpdate = function () {
    var _a = Object(react["useState"])(false), setIt = _a[1];
    return function () { return setIt(function (it) { return !it; }); };
};
//# sourceMappingURL=useForceUpdate.js.map
// CONCATENATED MODULE: ./node_modules/xy-form/node_modules/utils-hooks/es/SideEffects/useHover.js

function useHover() {
    var _a = Object(react["useState"])(false), value = _a[0], setValue = _a[1];
    var ref = Object(react["useRef"])(null);
    var handleMouseOver = function () { return setValue(true); };
    var handleMouseOut = function () { return setValue(false); };
    Object(react["useEffect"])(function () {
        var node = ref.current;
        if (node) {
            node.addEventListener("mouseover", handleMouseOver);
            node.addEventListener("mouseout", handleMouseOut);
            return function () {
                node.removeEventListener("mouseover", handleMouseOver);
                node.removeEventListener("mouseout", handleMouseOut);
            };
        }
    }, [ref.current]); // Recall only if ref changes
    return [ref, value];
}
//# sourceMappingURL=useHover.js.map
// CONCATENATED MODULE: ./node_modules/xy-form/node_modules/utils-hooks/es/index.js

















//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/xy-form/es/Context/FormBlockContext.js
var FormBlockContext = __webpack_require__("hM9q");

// EXTERNAL MODULE: ./node_modules/xy-form/es/Context/FormContext.js
var FormContext = __webpack_require__("6yG6");

// EXTERNAL MODULE: ./node_modules/xy-form/es/Context/FormItemContext.js
var FormItemContext = __webpack_require__("b0S1");

// EXTERNAL MODULE: ./node_modules/xy-form/es/Form.js + 70 modules
var Form = __webpack_require__("AJE1");

// EXTERNAL MODULE: ./node_modules/xy-form/es/ValidateUtils/ValidateTrigger.js
var ValidateTrigger = __webpack_require__("LsAB");

// EXTERNAL MODULE: ./node_modules/lodash-es/get.js + 1 modules
var get = __webpack_require__("7EGn");

// CONCATENATED MODULE: ./node_modules/xy-form/es/FormItemField.js
/* unused harmony export FormItemField */









function DefaultChangeValue(value) {
    // 如果onChange的参数是 event 事件
    if (value && typeof value === "object" && "target" in value) {
        return value.target.value;
    }
    return value;
}
function DefaultSerialization(value) {
    return value;
}
function FormItemField(props) {
    var _a;
    var prop = props.prop, children = props.children, defaultValue = props.defaultValue, normalize = props.normalize, _b = props.serialization, serialization = _b === void 0 ? DefaultSerialization : _b, _c = props.valueKey, valueKey = _c === void 0 ? "value" : _c, _d = props.converValue, converValue = _d === void 0 ? DefaultChangeValue : _d, disabledValidate = props.disabledValidate, onValidate = props.onValidate;
    // 是否使用 blockContext, 如果主动提供全名，baseInfo.dateInfo.type 这种，就不需要使用
    var useBlockContext = prop.indexOf(".") === -1 && prop.indexOf("[") === -1;
    var blockContext = Object(react["useContext"])(FormBlockContext["a" /* FormBlockContext */]);
    var formContext = Object(react["useContext"])(FormContext["a" /* FormContext */]);
    var formItemContext = Object(react["useContext"])(FormItemContext["a" /* FormItemContext */]);
    var parentProp = useBlockContext ? (blockContext.prop ? blockContext.prop + Form["a" /* Separator */] : "") : prop;
    var inputRef = Object(react["useRef"])(null);
    var blockContextDefault = blockContext.model && prop in blockContext.model ? blockContext.model[prop] : defaultValue;
    var _defaultValue = formContext.defaultModel ? Object(get["a" /* default */])(formContext.defaultModel, prop) : null;
    var initialValue = Object(react["useRef"])(serialization(defaultValue || useBlockContext ? blockContextDefault : _defaultValue));
    var disabled = formContext.disabled;
    var label = props.label || formItemContext.label || "";
    var trigger = props.trigger || formContext.trigger;
    var child = react_default.a.Children.only(children);
    var _e = Object(react["useState"])(initialValue.current), value = _e[0], setValue = _e[1];
    var _f = Object(react["useState"])({ status: true, msg: null }), validateResult = _f[0], setValidateResult = _f[1];
    // Tips: 用于validate时这个时候onChange导致的setValue还未更新完毕
    var lastValue = Object(react["useRef"])(value);
    var lastValidateResult = Object(react["useRef"])(validateResult);
    var itemState = Object(react["useRef"])({
        rest: rest,
        ref: inputRef,
        setValue: changeValue,
        setValidateResult: changeValidateResult,
        getLabel: function () { return label; },
        getValidateResult: function () { return validateResult; },
        getCanValidate: function () { return !disabled && !disabledValidate; },
        getValue: function () { return (normalize ? normalize(lastValue.current) : lastValue.current); },
    });
    // Tips: 由于外部访问时方法都是旧的, 所以需要重新设置
    itemState.current.getLabel = function () { return label; };
    useMount(function () {
        if (!prop) {
            throw new Error("Must assign prop");
        }
        blockContext.add(prop, itemState.current);
    });
    useUnmount(function () {
        blockContext.remove(prop);
    });
    function changeValidateResult(result) {
        if ((result.status === true && lastValidateResult.current.status !== result.status) || !result.status) {
            lastValidateResult.current = result;
            setValidateResult(result);
            if (onValidate) {
                onValidate(value, result, inputRef.current, normalize);
            }
            if (formItemContext && formItemContext.onValidateChange) {
                formItemContext.onValidateChange(prop, result);
            }
        }
    }
    function changeValue(value) {
        var val = serialization(value);
        lastValue.current = val;
        setValue(val);
        // 触发器ValidateTrigger.blur情况下, 改变值则取消验证失败的状态
        if (trigger === ValidateTrigger["a" /* ValidateTrigger */].blur || trigger === ValidateTrigger["a" /* ValidateTrigger */].none) {
            changeValidateResult({ status: true, msg: null });
        }
        if (child.props.onChange) {
            child.props.onChange(val);
        }
        blockContext.fieldChange(prop, val);
    }
    function validate(_trigger) {
        if ((_trigger & trigger) !== 0 && !disabled && !disabledValidate) {
            blockContext
                .fieldValidate(prop, lastValue.current, inputRef.current, _trigger)
                .then(function () {
                changeValidateResult({ status: true, msg: null });
            })
                .catch(function (error) {
                changeValidateResult({ status: false, msg: error.message });
            });
        }
    }
    function rest() {
        changeValue(initialValue.current);
        changeValidateResult({ status: true, msg: "" });
    }
    function changeHandle(value) {
        changeValue(converValue(value));
        validate(ValidateTrigger["a" /* ValidateTrigger */].change);
    }
    function blurHandle(e) {
        if (child.props.onBlur) {
            child.props.onBlur(e);
        }
        validate(ValidateTrigger["a" /* ValidateTrigger */].blur);
    }
    return child
        ? react_default.a.cloneElement(child, Object.assign({}, child.props, (_a = {},
            // Tips: 非原生组件没有提供初始值则使用空字符串, 自定义组件使用null, 来确保输入组件是受控的
            _a[valueKey] = value === undefined ? (typeof child.type === "string" ? "" : null) : value,
            _a.key = prop,
            _a.ref = inputRef,
            _a.name = child.props.name || parentProp + prop,
            _a.disabled = "disabled" in child.props ? child.props.disabled : disabled,
            _a.onBlur = blurHandle,
            _a.onChange = changeHandle,
            _a.className = classnames_default()(child.props.className, validateResult.status ? "" : "valid-error"),
            _a)))
        : null;
}
/* harmony default export */ var es_FormItemField = __webpack_exports__["a"] = (react_default.a.memo(FormItemField));
//# sourceMappingURL=FormItemField.js.map

/***/ }),

/***/ "nLtN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheClear.js
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ var _listCacheClear = (listCacheClear);

// EXTERNAL MODULE: ./node_modules/lodash-es/eq.js
var eq = __webpack_require__("YHEm");

// CONCATENATED MODULE: ./node_modules/lodash-es/_assocIndexOf.js


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (Object(eq["a" /* default */])(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ var _assocIndexOf = (assocIndexOf);

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheDelete.js


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/* harmony default export */ var _listCacheDelete = (listCacheDelete);

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheGet.js


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ var _listCacheGet = (listCacheGet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheHas.js


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

/* harmony default export */ var _listCacheHas = (listCacheHas);

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheSet.js


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ var _listCacheSet = (listCacheSet);

// CONCATENATED MODULE: ./node_modules/lodash-es/_ListCache.js






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

/* harmony default export */ var _ListCache = __webpack_exports__["a"] = (ListCache);


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


/***/ }),

/***/ "vJtL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8M4i");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IzLi");



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ __webpack_exports__["a"] = (isFunction);


/***/ }),

/***/ "xutz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XqMk");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ __webpack_exports__["a"] = (nodeUtil);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("3UD+")(module)))

/***/ }),

/***/ "ylTp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ju5/");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ })

}]);
//# sourceMappingURL=1.chunk.js.map