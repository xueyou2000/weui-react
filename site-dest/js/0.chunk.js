(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "0CdP":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ReSL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./node_modules/utils-hooks/es/useMedia.js

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
// CONCATENATED MODULE: ./node_modules/utils-hooks/es/useControll.js

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
// CONCATENATED MODULE: ./node_modules/utils-hooks/es/useContainer.js

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

// CONCATENATED MODULE: ./node_modules/utils-hooks/es/usePortal.js


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
// CONCATENATED MODULE: ./node_modules/utils-hooks/es/useTranstion.js

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
// CONCATENATED MODULE: ./node_modules/utils-hooks/es/useObserver.js

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
// CONCATENATED MODULE: ./node_modules/utils-hooks/es/Lifecycles/useMount.js

var useMount = function (mount) { return Object(react["useEffect"])(mount, []); };
//# sourceMappingURL=useMount.js.map
// CONCATENATED MODULE: ./node_modules/utils-hooks/es/Lifecycles/useUnmount.js

var useUnmount = function (unmount) {
    Object(react["useEffect"])(function () { return function () {
        if (unmount)
            unmount();
    }; }, []);
};
//# sourceMappingURL=useUnmount.js.map
// CONCATENATED MODULE: ./node_modules/utils-hooks/es/Lifecycles/useUpdateEffect.js

var useUpdateEffect = function (effect, deps) {
    var isInitialMount = Object(react["useRef"])(true);
    Object(react["useEffect"])(isInitialMount.current
        ? function () {
            isInitialMount.current = false;
        }
        : effect, deps);
};
//# sourceMappingURL=useUpdateEffect.js.map
// CONCATENATED MODULE: ./node_modules/utils-hooks/es/Sensors/useObserverScroll.js

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
// CONCATENATED MODULE: ./node_modules/utils-hooks/es/State/useGlobalState.js

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
// CONCATENATED MODULE: ./node_modules/utils-hooks/es/State/index.js
/**
 * 状态数据
 * @description 数据修改将触发订阅事件
 */
var Store = /** @class */ (function () {
    /**
     * 创建Store
     * @param defaultValue
     */
    function Store(defaultValue) {
        var _this = this;
        /**
         * 改变值
         * @param val
         */
        this.change = function (val) {
            _this._value = val;
            _this._subscribes.forEach(function (fn) { return fn(val); });
        };
        /**
         * 取消订阅
         */
        this.unsubscribe = function (callback) {
            var subscribes = _this._subscribes;
            var index = _this.findSubscribe(callback);
            if (index !== -1) {
                subscribes.splice(index, 1);
            }
        };
        this._value = defaultValue || null;
        this._subscribes = [];
    }
    /**
     * 寻找订阅器
     * @param callback
     */
    Store.prototype.findSubscribe = function (callback) {
        return this._subscribes.findIndex(function (fn) { return fn === callback; });
    };
    /**
     * 订阅
     * @param callback
     */
    Store.prototype.subscribe = function (callback) {
        var _this = this;
        var subscribes = this._subscribes;
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
    Object.defineProperty(Store.prototype, "value", {
        /**
         * 获取值
         */
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 创建Store
     */
    Store.Create = function (defaultValue) {
        return new Store(defaultValue);
    };
    return Store;
}());

//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/utils-hooks/es/State/useStore.js

/**
 * 数据管理hook
 * @param store
 */
function useStore(store) {
    var _a = Object(react["useState"])(store.value), val = _a[0], setVal = _a[1];
    var unsubscribe = store.subscribe(function (value) {
        setVal(value);
    });
    Object(react["useEffect"])(function () { return function () {
        unsubscribe();
    }; }, []);
    return [val, store.change];
}
//# sourceMappingURL=useStore.js.map
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// CONCATENATED MODULE: ./node_modules/utils-hooks/es/useOutsideClick.js


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
    }, Object(tslib_es6["d" /* __spreadArrays */])(elements, deps));
}
//# sourceMappingURL=useOutsideClick.js.map
// CONCATENATED MODULE: ./node_modules/utils-hooks/es/Trigger/utils.js
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
// CONCATENATED MODULE: ./node_modules/utils-hooks/es/Trigger/useTrigger.js



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
    }, Object(tslib_es6["d" /* __spreadArrays */])([ref.current], deps));
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
// CONCATENATED MODULE: ./node_modules/utils-hooks/es/Trigger/useTriggerChain.js




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
    }, Object(tslib_es6["d" /* __spreadArrays */])([hideRef.current], deps));
    return setActived;
}
//# sourceMappingURL=useTriggerChain.js.map
// CONCATENATED MODULE: ./node_modules/utils-hooks/es/SideEffects/useDebounce.js

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
// CONCATENATED MODULE: ./node_modules/utils-hooks/es/SideEffects/useForceUpdate.js

var useForceUpdate = function () {
    var _a = Object(react["useState"])(false), setIt = _a[1];
    return function () { return setIt(function (it) { return !it; }); };
};
//# sourceMappingURL=useForceUpdate.js.map
// CONCATENATED MODULE: ./node_modules/utils-hooks/es/SideEffects/useHover.js

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
// CONCATENATED MODULE: ./node_modules/utils-hooks/es/useFetch.js


/**
 * 默认加载信息
 */
var DefaultFetchState = { loading: true, result: null, error: null };
/**
 * 管理网络加载的相关状态
 * @param promise
 */
function useFetch(doFetch) {
    var _a = Object(react["useState"])({ loading: true, result: null, error: null }), state = _a[0], setState = _a[1];
    useMount(function () {
        doFetch()
            .then(function (response) {
            setState({ loading: false, result: response, error: null });
        })
            .catch(function (error) {
            setState({ loading: false, result: null, error: error });
        });
    });
    return state;
}
/**
 * 管理网络加载的相关状态
 * @description 为了不打破useFetch的接口，新起一个
 * @param promise
 */
function useFetchWichRefresh(doFetch) {
    var _a = Object(react["useState"])({ loading: true, result: null, error: null }), state = _a[0], setState = _a[1];
    function refresh() {
        setState({ loading: true, result: null, error: null });
        doFetch()
            .then(function (response) {
            setState({ loading: false, result: response, error: null });
        })
            .catch(function (error) {
            setState({ loading: false, result: null, error: error });
        });
    }
    useMount(refresh);
    return [state, refresh];
}
//# sourceMappingURL=useFetch.js.map
// CONCATENATED MODULE: ./node_modules/utils-hooks/es/index.js
/* unused concated harmony import useMedia */
/* unused concated harmony import DefineDefaultValue */
/* concated harmony reexport useControll */__webpack_require__.d(__webpack_exports__, "c", function() { return useControll; });
/* unused concated harmony import useContainer */
/* unused concated harmony import useContainerWithRef */
/* concated harmony reexport usePortal */__webpack_require__.d(__webpack_exports__, "f", function() { return usePortal; });
/* unused concated harmony import UNMOUNTED */
/* concated harmony reexport EXITED */__webpack_require__.d(__webpack_exports__, "b", function() { return EXITED; });
/* unused concated harmony import ENTERING */
/* concated harmony reexport ENTERED */__webpack_require__.d(__webpack_exports__, "a", function() { return ENTERED; });
/* unused concated harmony import EXITING */
/* concated harmony reexport useTranstion */__webpack_require__.d(__webpack_exports__, "g", function() { return useTranstion; });
/* unused concated harmony import useTranstionWithRef */
/* unused concated harmony import useObserver */
/* unused concated harmony import useObserverWithRef */
/* concated harmony reexport useMount */__webpack_require__.d(__webpack_exports__, "e", function() { return useMount; });
/* concated harmony reexport useUnmount */__webpack_require__.d(__webpack_exports__, "h", function() { return useUnmount; });
/* unused concated harmony import useUpdateEffect */
/* unused concated harmony import useObserverScroll */
/* unused concated harmony import MonitorState */
/* unused concated harmony import useGlobalState */
/* unused concated harmony import Store */
/* unused concated harmony import useStore */
/* unused concated harmony import useOutsideClick */
/* unused concated harmony import useTrigger */
/* unused concated harmony import TriggerWrap */
/* unused concated harmony import useTriggerChain */
/* unused concated harmony import useDebounce */
/* concated harmony reexport useDebounceCallback */__webpack_require__.d(__webpack_exports__, "d", function() { return useDebounceCallback; });
/* unused concated harmony import useForceUpdate */
/* unused concated harmony import useHover */
/* unused concated harmony import DefaultFetchState */
/* unused concated harmony import useFetch */
/* unused concated harmony import useFetchWichRefresh */




















//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=0.chunk.js.map