(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "Kgpi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./site/components/Page/index.tsx
var Page = __webpack_require__("a9X4");

// EXTERNAL MODULE: ./components/List/List.tsx
var List = __webpack_require__("plWM");

// EXTERNAL MODULE: ./components/List/ListItem.tsx
var ListItem = __webpack_require__("d8CH");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./node_modules/xy-badge/node_modules/utils-hooks/es/useMedia.js

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
// CONCATENATED MODULE: ./node_modules/xy-badge/node_modules/utils-hooks/es/useControll.js

/**
 * 获取默认值
 * @param props React组件的props对象
 * @param key 值键
 * @param defaultKey    默认值键
 */
function DefineDefaultValue(props, key, defaultKey) {
    if (key === void 0) { key = "value"; }
    if (defaultKey === void 0) { defaultKey = "defaultValue"; }
    var defaultValue = null;
    if (key in props) {
        defaultValue = props[key];
    }
    else if (defaultKey in props) {
        defaultValue = props[defaultKey];
    }
    return defaultValue;
}
/**
 * 受控组件样板
 * @param props React组件的props对象
 * @param key 值键
 * @param defaultKey 默认值键
 */
function useControll(props, key, defaultKey, defaultValue) {
    if (key === void 0) { key = "value"; }
    if (defaultKey === void 0) { defaultKey = "defaultValue"; }
    var isControll = key in props;
    var _a = Object(react["useState"])(DefineDefaultValue(props, key, defaultKey) || defaultValue), value = _a[0], setValue = _a[1];
    return [isControll ? props[key] : value, setValue, isControll];
}
//# sourceMappingURL=useControll.js.map
// CONCATENATED MODULE: ./node_modules/xy-badge/node_modules/utils-hooks/es/useContainer.js

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

// CONCATENATED MODULE: ./node_modules/xy-badge/node_modules/utils-hooks/es/usePortal.js


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
// CONCATENATED MODULE: ./node_modules/xy-badge/node_modules/utils-hooks/es/useTranstion.js

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
// CONCATENATED MODULE: ./node_modules/xy-badge/node_modules/utils-hooks/es/useObserver.js

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
// CONCATENATED MODULE: ./node_modules/xy-badge/node_modules/utils-hooks/es/Lifecycles/useMount.js

var useMount = function (mount) { return Object(react["useEffect"])(mount, []); };
//# sourceMappingURL=useMount.js.map
// CONCATENATED MODULE: ./node_modules/xy-badge/node_modules/utils-hooks/es/Lifecycles/useUnmount.js

var useUnmount = function (unmount) {
    Object(react["useEffect"])(function () { return function () {
        if (unmount)
            unmount();
    }; }, []);
};
//# sourceMappingURL=useUnmount.js.map
// CONCATENATED MODULE: ./node_modules/xy-badge/node_modules/utils-hooks/es/Lifecycles/useUpdateEffect.js

var useUpdateEffect = function (effect, deps) {
    var isInitialMount = Object(react["useRef"])(true);
    Object(react["useEffect"])(isInitialMount.current
        ? function () {
            isInitialMount.current = false;
        }
        : effect, deps);
};
//# sourceMappingURL=useUpdateEffect.js.map
// CONCATENATED MODULE: ./node_modules/xy-badge/node_modules/utils-hooks/es/Sensors/useObserverScroll.js

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
// CONCATENATED MODULE: ./node_modules/xy-badge/node_modules/utils-hooks/es/State/useGlobalState.js

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
// CONCATENATED MODULE: ./node_modules/xy-badge/node_modules/utils-hooks/es/useOutsideClick.js

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
// CONCATENATED MODULE: ./node_modules/xy-badge/node_modules/utils-hooks/es/Trigger/utils.js
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
// CONCATENATED MODULE: ./node_modules/xy-badge/node_modules/utils-hooks/es/Trigger/useTrigger.js


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
// CONCATENATED MODULE: ./node_modules/xy-badge/node_modules/utils-hooks/es/Trigger/useTriggerChain.js



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
// CONCATENATED MODULE: ./node_modules/xy-badge/node_modules/utils-hooks/es/SideEffects/useDebounce.js

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
// CONCATENATED MODULE: ./node_modules/xy-badge/node_modules/utils-hooks/es/SideEffects/useForceUpdate.js

var useForceUpdate = function () {
    var _a = Object(react["useState"])(false), setIt = _a[1];
    return function () { return setIt(function (it) { return !it; }); };
};
//# sourceMappingURL=useForceUpdate.js.map
// CONCATENATED MODULE: ./node_modules/xy-badge/node_modules/utils-hooks/es/SideEffects/useHover.js

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
// CONCATENATED MODULE: ./node_modules/xy-badge/node_modules/utils-hooks/es/index.js

















//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./node_modules/xy-badge/es/ScrollNumberItem.js



function getNumberBit(num, digits) {
    var bits = num
        .toString()
        .split("")
        .reverse();
    if (digits <= bits.length - 1) {
        return parseInt(bits[digits]);
    }
    else {
        return undefined;
    }
}
function useScrollNumber(count, digits) {
    var lastCountRef = Object(react["useRef"])(count);
    var currentBit = getNumberBit(count, digits);
    var lastBit = getNumberBit(lastCountRef.current, digits);
    if (currentBit === undefined) {
        return null;
    }
    useUpdateEffect(function () {
        lastCountRef.current = count;
    }, [count]);
    var diff = lastCountRef.current - count;
    var bitDiff = Math.abs(lastBit - currentBit);
    var position;
    // 如跳转不是连续的
    if (bitDiff !== 1 && bitDiff !== 0) {
        if (diff < 0) {
            position = 20 + currentBit;
        }
        else {
            position = currentBit;
        }
    }
    else {
        position = 10 + currentBit;
    }
    return position;
}
function ScrollNumber(props) {
    var _a = props.prefixCls, prefixCls = _a === void 0 ? "xy-scroll-number-item" : _a, className = props.className, _b = props.digits, digits = _b === void 0 ? 0 : _b, _c = props.count, count = _c === void 0 ? 0 : _c;
    var ref = Object(react["useRef"])(null);
    var position = useScrollNumber(count, digits);
    function handleTransitionEnd(e) {
        var element = ref.current;
        if (element && (position < 10 || position >= 20)) {
            element.style.transition = "none";
            element.style.transform = "translateY(-" + (10 + getNumberBit(count, digits)) * 100 + "%)";
            // Tips: 确保dom操作执行完毕
            element && element.scrollTop;
            element.style.transition = null;
        }
    }
    function renderNumberList() {
        var numberList = [];
        for (var i = 0; i < 30; ++i) {
            numberList.push(react_default.a.createElement("p", { className: classnames_default()({ current: position === i }), key: i }, i % 10));
        }
        return numberList;
    }
    return (react_default.a.createElement("span", { ref: ref, className: classnames_default()(prefixCls, className), onTransitionEnd: handleTransitionEnd, style: { transform: "translateY(-" + position * 100 + "%)" } }, renderNumberList()));
}
/* harmony default export */ var ScrollNumberItem = (react_default.a.memo(ScrollNumber));
//# sourceMappingURL=ScrollNumberItem.js.map
// CONCATENATED MODULE: ./node_modules/xy-badge/es/ScrollNumber.js



function ScrollNumber_ScrollNumber(props) {
    var _a;
    var _b = props.prefixCls, prefixCls = _b === void 0 ? "xy-scroll-number" : _b, className = props.className, style = props.style, count = props.count, overflowCount = props.overflowCount, showZero = props.showZero;
    var _count = overflowCount ? Math.min(count, overflowCount) : count;
    var countStr = _count.toString();
    var classString = classnames_default()(prefixCls, className, (_a = {},
        _a[prefixCls + "__hidden"] = count === undefined || count === null || showZero ? count < 0 : count <= 0,
        _a));
    return (react_default.a.createElement("sup", { className: classString, style: style },
        countStr.split("").map(function (v, i) { return (react_default.a.createElement(ScrollNumberItem, { key: i, count: _count, digits: countStr.length - 1 - i })); }),
        overflowCount && count > overflowCount && react_default.a.createElement("span", { className: prefixCls + "__text" }, "+")));
}
/* harmony default export */ var es_ScrollNumber = (react_default.a.memo(ScrollNumber_ScrollNumber));
//# sourceMappingURL=ScrollNumber.js.map
// CONCATENATED MODULE: ./node_modules/xy-badge/es/BadgeDot.js


function Badge(props) {
    var _a;
    var _b = props.prefixCls, prefixCls = _b === void 0 ? "xy-badge-dot" : _b, className = props.className, style = props.style, status = props.status, children = props.children;
    var classString = classnames_default()(prefixCls, className, (_a = {},
        _a[prefixCls + "__status_" + status] = !!status,
        _a));
    return (react_default.a.createElement("span", { className: classString, style: style },
        react_default.a.createElement("span", { className: prefixCls + "-status" }),
        children && react_default.a.createElement("span", { className: prefixCls + "-text" }, children)));
}
/* harmony default export */ var BadgeDot = (react_default.a.memo(Badge));
//# sourceMappingURL=BadgeDot.js.map
// CONCATENATED MODULE: ./node_modules/xy-badge/es/Badge.js





function Badge_Badge(props) {
    var _a;
    var _b = props.prefixCls, prefixCls = _b === void 0 ? "xy-badge" : _b, className = props.className, style = props.style, dot = props.dot, positionStyle = props.positionStyle, offset = props.offset, status = props.status, text = props.text, children = props.children, rest = Object(tslib_es6["c" /* __rest */])(props, ["prefixCls", "className", "style", "dot", "positionStyle", "offset", "status", "text", "children"]);
    var showDot = !("count" in props);
    var classString = classnames_default()(prefixCls, className, (_a = {},
        _a[prefixCls + "-not-wrapper"] = !children,
        _a[prefixCls + "-status"] = showDot,
        _a));
    return (react_default.a.createElement("span", { className: classString, style: style },
        children,
        react_default.a.createElement("span", { className: prefixCls + "-position" }, showDot ? (react_default.a.createElement(BadgeDot, { className: classnames_default()({ dot__hidden: !dot && !status }), style: positionStyle, status: status }, text)) : (react_default.a.createElement(es_ScrollNumber, Object(tslib_es6["a" /* __assign */])({ style: positionStyle }, rest))))));
}
/* harmony default export */ var es_Badge = (react_default.a.memo(Badge_Badge));
//# sourceMappingURL=Badge.js.map
// EXTERNAL MODULE: ./node_modules/xy-badge/assets/index.css
var assets = __webpack_require__("u6UA");

// CONCATENATED MODULE: ./components/Badge/index.tsx


/* harmony default export */ var components_Badge = (es_Badge);

// CONCATENATED MODULE: ./site/pages/Basic/Badge/index.tsx



function Badgedemo() {
    return (react_default.a.createElement(Page["a" /* default */], { className: "preview-demo", title: "Badge", introduce: "\u5FBD\u7AE0" },
        react_default.a.createElement(List["a" /* default */], { title: "\u65B0\u6D88\u606F\u63D0\u793A\u8DDF\u6458\u8981\u4FE1\u606F\u540E\uFF0C\u7EDF\u4E00\u5728\u5217\u8868\u53F3\u4FA7" },
            react_default.a.createElement(ListItem["a" /* default */], { arrow: true, footer: react_default.a.createElement(components_Badge, { dot: true },
                    react_default.a.createElement("a", { href: "#" }, "\u8BE6\u7EC6\u4FE1\u606F")) }, "\u5355\u884C\u5217\u8868")),
        react_default.a.createElement(List["a" /* default */], { title: "\u672A\u8BFB\u6570\u7EA2\u70B9\u8DDF\u5728\u4E3B\u9898\u4FE1\u606F\u540E\uFF0C\u7EDF\u4E00\u5728\u5217\u8868\u5DE6\u4FA7" },
            react_default.a.createElement(ListItem["a" /* default */], { head: react_default.a.createElement(components_Badge, { count: 8, style: { marginRight: "15px" } },
                    react_default.a.createElement("img", { src: __webpack_require__("LF+n"), style: { width: "50px", display: "block" } })) },
                react_default.a.createElement("p", null, "\u8054\u7CFB\u4EBA\u540D\u79F0"),
                react_default.a.createElement("p", { style: { fontSize: "13px", color: "#888888" } }, "\u6458\u8981\u4FE1\u606F")),
            react_default.a.createElement(ListItem["a" /* default */], { arrow: true },
                react_default.a.createElement("span", null, "\u5355\u884C\u5217\u8868"),
                react_default.a.createElement(components_Badge, { count: 8, overflowCount: 99, style: { marginLeft: "5px" } })),
            react_default.a.createElement(ListItem["a" /* default */], { arrow: true, footer: "\u8BE6\u7EC6\u4FE1\u606F" },
                react_default.a.createElement("span", null, "\u5355\u884C\u5217\u8868"),
                react_default.a.createElement(components_Badge, { count: 8, positionStyle: { backgroundColor: "#52c41a" }, style: { marginLeft: "5px" } })))));
}
/* harmony default export */ var Basic_Badge = __webpack_exports__["default"] = (react_default.a.memo(Badgedemo));


/***/ }),

/***/ "LF+n":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/pic_160.6961380.png";

/***/ }),

/***/ "u6UA":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=29.chunk.js.map