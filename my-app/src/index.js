import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
(function() {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload"))
        return;
    for (const h of document.querySelectorAll('link[rel="modulepreload"]'))
        f(h);
    new MutationObserver(h => {
        for (const g of h)
            if (g.type === "childList")
                for (const w of g.addedNodes)
                    w.tagName === "LINK" && w.rel === "modulepreload" && f(w)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function d(h) {
        const g = {};
        return h.integrity && (g.integrity = h.integrity),
        h.referrerPolicy && (g.referrerPolicy = h.referrerPolicy),
        h.crossOrigin === "use-credentials" ? g.credentials = "include" : h.crossOrigin === "anonymous" ? g.credentials = "omit" : g.credentials = "same-origin",
        g
    }
    function f(h) {
        if (h.ep)
            return;
        h.ep = !0;
        const g = d(h);
        fetch(h.href, g)
    }
}
)();
function G0(i) {
    return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i
}
var Es = {
    exports: {}
}
  , _n = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ud;
function X0() {
    if (Ud)
        return _n;
    Ud = 1;
    var i = Symbol.for("react.transitional.element")
      , o = Symbol.for("react.fragment");
    function d(f, h, g) {
        var w = null;
        if (g !== void 0 && (w = "" + g),
        h.key !== void 0 && (w = "" + h.key),
        "key"in h) {
            g = {};
            for (var M in h)
                M !== "key" && (g[M] = h[M])
        } else
            g = h;
        return h = g.ref,
        {
            $$typeof: i,
            type: f,
            key: w,
            ref: h !== void 0 ? h : null,
            props: g
        }
    }
    return _n.Fragment = o,
    _n.jsx = d,
    _n.jsxs = d,
    _n
}
var Cd;
function Q0() {
    return Cd || (Cd = 1,
    Es.exports = X0()),
    Es.exports
}
var s = Q0()
  , Ns = {
    exports: {}
}
  , te = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hd;
function Z0() {
    if (Hd)
        return te;
    Hd = 1;
    var i = Symbol.for("react.transitional.element")
      , o = Symbol.for("react.portal")
      , d = Symbol.for("react.fragment")
      , f = Symbol.for("react.strict_mode")
      , h = Symbol.for("react.profiler")
      , g = Symbol.for("react.consumer")
      , w = Symbol.for("react.context")
      , M = Symbol.for("react.forward_ref")
      , x = Symbol.for("react.suspense")
      , y = Symbol.for("react.memo")
      , T = Symbol.for("react.lazy")
      , H = Symbol.iterator;
    function D(v) {
        return v === null || typeof v != "object" ? null : (v = H && v[H] || v["@@iterator"],
        typeof v == "function" ? v : null)
    }
    var Q = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , C = Object.assign
      , G = {};
    function V(v, U, L) {
        this.props = v,
        this.context = U,
        this.refs = G,
        this.updater = L || Q
    }
    V.prototype.isReactComponent = {},
    V.prototype.setState = function(v, U) {
        if (typeof v != "object" && typeof v != "function" && v != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, v, U, "setState")
    }
    ,
    V.prototype.forceUpdate = function(v) {
        this.updater.enqueueForceUpdate(this, v, "forceUpdate")
    }
    ;
    function q() {}
    q.prototype = V.prototype;
    function Z(v, U, L) {
        this.props = v,
        this.context = U,
        this.refs = G,
        this.updater = L || Q
    }
    var P = Z.prototype = new q;
    P.constructor = Z,
    C(P, V.prototype),
    P.isPureReactComponent = !0;
    var ce = Array.isArray
      , I = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
    }
      , _e = Object.prototype.hasOwnProperty;
    function we(v, U, L, B, k, se) {
        return L = se.ref,
        {
            $$typeof: i,
            type: v,
            key: U,
            ref: L !== void 0 ? L : null,
            props: se
        }
    }
    function Re(v, U) {
        return we(v.type, U, void 0, void 0, void 0, v.props)
    }
    function xe(v) {
        return typeof v == "object" && v !== null && v.$$typeof === i
    }
    function $e(v) {
        var U = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + v.replace(/[=:]/g, function(L) {
            return U[L]
        })
    }
    var dt = /\/+/g;
    function Ze(v, U) {
        return typeof v == "object" && v !== null && v.key != null ? $e("" + v.key) : U.toString(36)
    }
    function Nl() {}
    function jl(v) {
        switch (v.status) {
        case "fulfilled":
            return v.value;
        case "rejected":
            throw v.reason;
        default:
            switch (typeof v.status == "string" ? v.then(Nl, Nl) : (v.status = "pending",
            v.then(function(U) {
                v.status === "pending" && (v.status = "fulfilled",
                v.value = U)
            }, function(U) {
                v.status === "pending" && (v.status = "rejected",
                v.reason = U)
            })),
            v.status) {
            case "fulfilled":
                return v.value;
            case "rejected":
                throw v.reason
            }
        }
        throw v
    }
    function Ve(v, U, L, B, k) {
        var se = typeof v;
        (se === "undefined" || se === "boolean") && (v = null);
        var ee = !1;
        if (v === null)
            ee = !0;
        else
            switch (se) {
            case "bigint":
            case "string":
            case "number":
                ee = !0;
                break;
            case "object":
                switch (v.$$typeof) {
                case i:
                case o:
                    ee = !0;
                    break;
                case T:
                    return ee = v._init,
                    Ve(ee(v._payload), U, L, B, k)
                }
            }
        if (ee)
            return k = k(v),
            ee = B === "" ? "." + Ze(v, 0) : B,
            ce(k) ? (L = "",
            ee != null && (L = ee.replace(dt, "$&/") + "/"),
            Ve(k, U, L, "", function(Pt) {
                return Pt
            })) : k != null && (xe(k) && (k = Re(k, L + (k.key == null || v && v.key === k.key ? "" : ("" + k.key).replace(dt, "$&/") + "/") + ee)),
            U.push(k)),
            1;
        ee = 0;
        var lt = B === "" ? "." : B + ":";
        if (ce(v))
            for (var be = 0; be < v.length; be++)
                B = v[be],
                se = lt + Ze(B, be),
                ee += Ve(B, U, L, se, k);
        else if (be = D(v),
        typeof be == "function")
            for (v = be.call(v),
            be = 0; !(B = v.next()).done; )
                B = B.value,
                se = lt + Ze(B, be++),
                ee += Ve(B, U, L, se, k);
        else if (se === "object") {
            if (typeof v.then == "function")
                return Ve(jl(v), U, L, B, k);
            throw U = String(v),
            Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ee
    }
    function z(v, U, L) {
        if (v == null)
            return v;
        var B = []
          , k = 0;
        return Ve(v, B, "", "", function(se) {
            return U.call(L, se, k++)
        }),
        B
    }
    function Y(v) {
        if (v._status === -1) {
            var U = v._result;
            U = U(),
            U.then(function(L) {
                (v._status === 0 || v._status === -1) && (v._status = 1,
                v._result = L)
            }, function(L) {
                (v._status === 0 || v._status === -1) && (v._status = 2,
                v._result = L)
            }),
            v._status === -1 && (v._status = 0,
            v._result = U)
        }
        if (v._status === 1)
            return v._result.default;
        throw v._result
    }
    var W = typeof reportError == "function" ? reportError : function(v) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var U = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
                error: v
            });
            if (!window.dispatchEvent(U))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", v);
            return
        }
        console.error(v)
    }
    ;
    function ge() {}
    return te.Children = {
        map: z,
        forEach: function(v, U, L) {
            z(v, function() {
                U.apply(this, arguments)
            }, L)
        },
        count: function(v) {
            var U = 0;
            return z(v, function() {
                U++
            }),
            U
        },
        toArray: function(v) {
            return z(v, function(U) {
                return U
            }) || []
        },
        only: function(v) {
            if (!xe(v))
                throw Error("React.Children.only expected to receive a single React element child.");
            return v
        }
    },
    te.Component = V,
    te.Fragment = d,
    te.Profiler = h,
    te.PureComponent = Z,
    te.StrictMode = f,
    te.Suspense = x,
    te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I,
    te.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(v) {
            return I.H.useMemoCache(v)
        }
    },
    te.cache = function(v) {
        return function() {
            return v.apply(null, arguments)
        }
    }
    ,
    te.cloneElement = function(v, U, L) {
        if (v == null)
            throw Error("The argument must be a React element, but you passed " + v + ".");
        var B = C({}, v.props)
          , k = v.key
          , se = void 0;
        if (U != null)
            for (ee in U.ref !== void 0 && (se = void 0),
            U.key !== void 0 && (k = "" + U.key),
            U)
                !_e.call(U, ee) || ee === "key" || ee === "__self" || ee === "__source" || ee === "ref" && U.ref === void 0 || (B[ee] = U[ee]);
        var ee = arguments.length - 2;
        if (ee === 1)
            B.children = L;
        else if (1 < ee) {
            for (var lt = Array(ee), be = 0; be < ee; be++)
                lt[be] = arguments[be + 2];
            B.children = lt
        }
        return we(v.type, k, void 0, void 0, se, B)
    }
    ,
    te.createContext = function(v) {
        return v = {
            $$typeof: w,
            _currentValue: v,
            _currentValue2: v,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        v.Provider = v,
        v.Consumer = {
            $$typeof: g,
            _context: v
        },
        v
    }
    ,
    te.createElement = function(v, U, L) {
        var B, k = {}, se = null;
        if (U != null)
            for (B in U.key !== void 0 && (se = "" + U.key),
            U)
                _e.call(U, B) && B !== "key" && B !== "__self" && B !== "__source" && (k[B] = U[B]);
        var ee = arguments.length - 2;
        if (ee === 1)
            k.children = L;
        else if (1 < ee) {
            for (var lt = Array(ee), be = 0; be < ee; be++)
                lt[be] = arguments[be + 2];
            k.children = lt
        }
        if (v && v.defaultProps)
            for (B in ee = v.defaultProps,
            ee)
                k[B] === void 0 && (k[B] = ee[B]);
        return we(v, se, void 0, void 0, null, k)
    }
    ,
    te.createRef = function() {
        return {
            current: null
        }
    }
    ,
    te.forwardRef = function(v) {
        return {
            $$typeof: M,
            render: v
        }
    }
    ,
    te.isValidElement = xe,
    te.lazy = function(v) {
        return {
            $$typeof: T,
            _payload: {
                _status: -1,
                _result: v
            },
            _init: Y
        }
    }
    ,
    te.memo = function(v, U) {
        return {
            $$typeof: y,
            type: v,
            compare: U === void 0 ? null : U
        }
    }
    ,
    te.startTransition = function(v) {
        var U = I.T
          , L = {};
        I.T = L;
        try {
            var B = v()
              , k = I.S;
            k !== null && k(L, B),
            typeof B == "object" && B !== null && typeof B.then == "function" && B.then(ge, W)
        } catch (se) {
            W(se)
        } finally {
            I.T = U
        }
    }
    ,
    te.unstable_useCacheRefresh = function() {
        return I.H.useCacheRefresh()
    }
    ,
    te.use = function(v) {
        return I.H.use(v)
    }
    ,
    te.useActionState = function(v, U, L) {
        return I.H.useActionState(v, U, L)
    }
    ,
    te.useCallback = function(v, U) {
        return I.H.useCallback(v, U)
    }
    ,
    te.useContext = function(v) {
        return I.H.useContext(v)
    }
    ,
    te.useDebugValue = function() {}
    ,
    te.useDeferredValue = function(v, U) {
        return I.H.useDeferredValue(v, U)
    }
    ,
    te.useEffect = function(v, U, L) {
        var B = I.H;
        if (typeof L == "function")
            throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return B.useEffect(v, U)
    }
    ,
    te.useId = function() {
        return I.H.useId()
    }
    ,
    te.useImperativeHandle = function(v, U, L) {
        return I.H.useImperativeHandle(v, U, L)
    }
    ,
    te.useInsertionEffect = function(v, U) {
        return I.H.useInsertionEffect(v, U)
    }
    ,
    te.useLayoutEffect = function(v, U) {
        return I.H.useLayoutEffect(v, U)
    }
    ,
    te.useMemo = function(v, U) {
        return I.H.useMemo(v, U)
    }
    ,
    te.useOptimistic = function(v, U) {
        return I.H.useOptimistic(v, U)
    }
    ,
    te.useReducer = function(v, U, L) {
        return I.H.useReducer(v, U, L)
    }
    ,
    te.useRef = function(v) {
        return I.H.useRef(v)
    }
    ,
    te.useState = function(v) {
        return I.H.useState(v)
    }
    ,
    te.useSyncExternalStore = function(v, U, L) {
        return I.H.useSyncExternalStore(v, U, L)
    }
    ,
    te.useTransition = function() {
        return I.H.useTransition()
    }
    ,
    te.version = "19.1.0",
    te
}
var qd;
function Os() {
    return qd || (qd = 1,
    Ns.exports = Z0()),
    Ns.exports
}
var A = Os();
const V0 = G0(A);
var js = {
    exports: {}
}
  , On = {}
  , ws = {
    exports: {}
}
  , Ts = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bd;
function K0() {
    return Bd || (Bd = 1,
    function(i) {
        function o(z, Y) {
            var W = z.length;
            z.push(Y);
            e: for (; 0 < W; ) {
                var ge = W - 1 >>> 1
                  , v = z[ge];
                if (0 < h(v, Y))
                    z[ge] = Y,
                    z[W] = v,
                    W = ge;
                else
                    break e
            }
        }
        function d(z) {
            return z.length === 0 ? null : z[0]
        }
        function f(z) {
            if (z.length === 0)
                return null;
            var Y = z[0]
              , W = z.pop();
            if (W !== Y) {
                z[0] = W;
                e: for (var ge = 0, v = z.length, U = v >>> 1; ge < U; ) {
                    var L = 2 * (ge + 1) - 1
                      , B = z[L]
                      , k = L + 1
                      , se = z[k];
                    if (0 > h(B, W))
                        k < v && 0 > h(se, B) ? (z[ge] = se,
                        z[k] = W,
                        ge = k) : (z[ge] = B,
                        z[L] = W,
                        ge = L);
                    else if (k < v && 0 > h(se, W))
                        z[ge] = se,
                        z[k] = W,
                        ge = k;
                    else
                        break e
                }
            }
            return Y
        }
        function h(z, Y) {
            var W = z.sortIndex - Y.sortIndex;
            return W !== 0 ? W : z.id - Y.id
        }
        if (i.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var g = performance;
            i.unstable_now = function() {
                return g.now()
            }
        } else {
            var w = Date
              , M = w.now();
            i.unstable_now = function() {
                return w.now() - M
            }
        }
        var x = []
          , y = []
          , T = 1
          , H = null
          , D = 3
          , Q = !1
          , C = !1
          , G = !1
          , V = !1
          , q = typeof setTimeout == "function" ? setTimeout : null
          , Z = typeof clearTimeout == "function" ? clearTimeout : null
          , P = typeof setImmediate < "u" ? setImmediate : null;
        function ce(z) {
            for (var Y = d(y); Y !== null; ) {
                if (Y.callback === null)
                    f(y);
                else if (Y.startTime <= z)
                    f(y),
                    Y.sortIndex = Y.expirationTime,
                    o(x, Y);
                else
                    break;
                Y = d(y)
            }
        }
        function I(z) {
            if (G = !1,
            ce(z),
            !C)
                if (d(x) !== null)
                    C = !0,
                    _e || (_e = !0,
                    Ze());
                else {
                    var Y = d(y);
                    Y !== null && Ve(I, Y.startTime - z)
                }
        }
        var _e = !1
          , we = -1
          , Re = 5
          , xe = -1;
        function $e() {
            return V ? !0 : !(i.unstable_now() - xe < Re)
        }
        function dt() {
            if (V = !1,
            _e) {
                var z = i.unstable_now();
                xe = z;
                var Y = !0;
                try {
                    e: {
                        C = !1,
                        G && (G = !1,
                        Z(we),
                        we = -1),
                        Q = !0;
                        var W = D;
                        try {
                            t: {
                                for (ce(z),
                                H = d(x); H !== null && !(H.expirationTime > z && $e()); ) {
                                    var ge = H.callback;
                                    if (typeof ge == "function") {
                                        H.callback = null,
                                        D = H.priorityLevel;
                                        var v = ge(H.expirationTime <= z);
                                        if (z = i.unstable_now(),
                                        typeof v == "function") {
                                            H.callback = v,
                                            ce(z),
                                            Y = !0;
                                            break t
                                        }
                                        H === d(x) && f(x),
                                        ce(z)
                                    } else
                                        f(x);
                                    H = d(x)
                                }
                                if (H !== null)
                                    Y = !0;
                                else {
                                    var U = d(y);
                                    U !== null && Ve(I, U.startTime - z),
                                    Y = !1
                                }
                            }
                            break e
                        } finally {
                            H = null,
                            D = W,
                            Q = !1
                        }
                        Y = void 0
                    }
                } finally {
                    Y ? Ze() : _e = !1
                }
            }
        }
        var Ze;
        if (typeof P == "function")
            Ze = function() {
                P(dt)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Nl = new MessageChannel
              , jl = Nl.port2;
            Nl.port1.onmessage = dt,
            Ze = function() {
                jl.postMessage(null)
            }
        } else
            Ze = function() {
                q(dt, 0)
            }
            ;
        function Ve(z, Y) {
            we = q(function() {
                z(i.unstable_now())
            }, Y)
        }
        i.unstable_IdlePriority = 5,
        i.unstable_ImmediatePriority = 1,
        i.unstable_LowPriority = 4,
        i.unstable_NormalPriority = 3,
        i.unstable_Profiling = null,
        i.unstable_UserBlockingPriority = 2,
        i.unstable_cancelCallback = function(z) {
            z.callback = null
        }
        ,
        i.unstable_forceFrameRate = function(z) {
            0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Re = 0 < z ? Math.floor(1e3 / z) : 5
        }
        ,
        i.unstable_getCurrentPriorityLevel = function() {
            return D
        }
        ,
        i.unstable_next = function(z) {
            switch (D) {
            case 1:
            case 2:
            case 3:
                var Y = 3;
                break;
            default:
                Y = D
            }
            var W = D;
            D = Y;
            try {
                return z()
            } finally {
                D = W
            }
        }
        ,
        i.unstable_requestPaint = function() {
            V = !0
        }
        ,
        i.unstable_runWithPriority = function(z, Y) {
            switch (z) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                z = 3
            }
            var W = D;
            D = z;
            try {
                return Y()
            } finally {
                D = W
            }
        }
        ,
        i.unstable_scheduleCallback = function(z, Y, W) {
            var ge = i.unstable_now();
            switch (typeof W == "object" && W !== null ? (W = W.delay,
            W = typeof W == "number" && 0 < W ? ge + W : ge) : W = ge,
            z) {
            case 1:
                var v = -1;
                break;
            case 2:
                v = 250;
                break;
            case 5:
                v = 1073741823;
                break;
            case 4:
                v = 1e4;
                break;
            default:
                v = 5e3
            }
            return v = W + v,
            z = {
                id: T++,
                callback: Y,
                priorityLevel: z,
                startTime: W,
                expirationTime: v,
                sortIndex: -1
            },
            W > ge ? (z.sortIndex = W,
            o(y, z),
            d(x) === null && z === d(y) && (G ? (Z(we),
            we = -1) : G = !0,
            Ve(I, W - ge))) : (z.sortIndex = v,
            o(x, z),
            C || Q || (C = !0,
            _e || (_e = !0,
            Ze()))),
            z
        }
        ,
        i.unstable_shouldYield = $e,
        i.unstable_wrapCallback = function(z) {
            var Y = D;
            return function() {
                var W = D;
                D = Y;
                try {
                    return z.apply(this, arguments)
                } finally {
                    D = W
                }
            }
        }
    }(Ts)),
    Ts
}
var Yd;
function k0() {
    return Yd || (Yd = 1,
    ws.exports = K0()),
    ws.exports
}
var As = {
    exports: {}
}
  , Je = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ld;
function J0() {
    if (Ld)
        return Je;
    Ld = 1;
    var i = Os();
    function o(x) {
        var y = "https://react.dev/errors/" + x;
        if (1 < arguments.length) {
            y += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var T = 2; T < arguments.length; T++)
                y += "&args[]=" + encodeURIComponent(arguments[T])
        }
        return "Minified React error #" + x + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function d() {}
    var f = {
        d: {
            f: d,
            r: function() {
                throw Error(o(522))
            },
            D: d,
            C: d,
            L: d,
            m: d,
            X: d,
            S: d,
            M: d
        },
        p: 0,
        findDOMNode: null
    }
      , h = Symbol.for("react.portal");
    function g(x, y, T) {
        var H = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: h,
            key: H == null ? null : "" + H,
            children: x,
            containerInfo: y,
            implementation: T
        }
    }
    var w = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function M(x, y) {
        if (x === "font")
            return "";
        if (typeof y == "string")
            return y === "use-credentials" ? y : ""
    }
    return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f,
    Je.createPortal = function(x, y) {
        var T = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
            throw Error(o(299));
        return g(x, y, null, T)
    }
    ,
    Je.flushSync = function(x) {
        var y = w.T
          , T = f.p;
        try {
            if (w.T = null,
            f.p = 2,
            x)
                return x()
        } finally {
            w.T = y,
            f.p = T,
            f.d.f()
        }
    }
    ,
    Je.preconnect = function(x, y) {
        typeof x == "string" && (y ? (y = y.crossOrigin,
        y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null,
        f.d.C(x, y))
    }
    ,
    Je.prefetchDNS = function(x) {
        typeof x == "string" && f.d.D(x)
    }
    ,
    Je.preinit = function(x, y) {
        if (typeof x == "string" && y && typeof y.as == "string") {
            var T = y.as
              , H = M(T, y.crossOrigin)
              , D = typeof y.integrity == "string" ? y.integrity : void 0
              , Q = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
            T === "style" ? f.d.S(x, typeof y.precedence == "string" ? y.precedence : void 0, {
                crossOrigin: H,
                integrity: D,
                fetchPriority: Q
            }) : T === "script" && f.d.X(x, {
                crossOrigin: H,
                integrity: D,
                fetchPriority: Q,
                nonce: typeof y.nonce == "string" ? y.nonce : void 0
            })
        }
    }
    ,
    Je.preinitModule = function(x, y) {
        if (typeof x == "string")
            if (typeof y == "object" && y !== null) {
                if (y.as == null || y.as === "script") {
                    var T = M(y.as, y.crossOrigin);
                    f.d.M(x, {
                        crossOrigin: T,
                        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                        nonce: typeof y.nonce == "string" ? y.nonce : void 0
                    })
                }
            } else
                y == null && f.d.M(x)
    }
    ,
    Je.preload = function(x, y) {
        if (typeof x == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
            var T = y.as
              , H = M(T, y.crossOrigin);
            f.d.L(x, T, {
                crossOrigin: H,
                integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                nonce: typeof y.nonce == "string" ? y.nonce : void 0,
                type: typeof y.type == "string" ? y.type : void 0,
                fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
                referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
                imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
                imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
                media: typeof y.media == "string" ? y.media : void 0
            })
        }
    }
    ,
    Je.preloadModule = function(x, y) {
        if (typeof x == "string")
            if (y) {
                var T = M(y.as, y.crossOrigin);
                f.d.m(x, {
                    as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
                    crossOrigin: T,
                    integrity: typeof y.integrity == "string" ? y.integrity : void 0
                })
            } else
                f.d.m(x)
    }
    ,
    Je.requestFormReset = function(x) {
        f.d.r(x)
    }
    ,
    Je.unstable_batchedUpdates = function(x, y) {
        return x(y)
    }
    ,
    Je.useFormState = function(x, y, T) {
        return w.H.useFormState(x, y, T)
    }
    ,
    Je.useFormStatus = function() {
        return w.H.useHostTransitionStatus()
    }
    ,
    Je.version = "19.1.0",
    Je
}
var Gd;
function $0() {
    if (Gd)
        return As.exports;
    Gd = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (o) {
                console.error(o)
            }
    }
    return i(),
    As.exports = J0(),
    As.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xd;
function W0() {
    if (Xd)
        return On;
    Xd = 1;
    var i = k0()
      , o = Os()
      , d = $0();
    function f(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var l = 2; l < arguments.length; l++)
                t += "&args[]=" + encodeURIComponent(arguments[l])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function h(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function g(e) {
        var t = e
          , l = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (l = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? l : null
    }
    function w(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function M(e) {
        if (g(e) !== e)
            throw Error(f(188))
    }
    function x(e) {
        var t = e.alternate;
        if (!t) {
            if (t = g(e),
            t === null)
                throw Error(f(188));
            return t !== e ? null : e
        }
        for (var l = e, a = t; ; ) {
            var n = l.return;
            if (n === null)
                break;
            var u = n.alternate;
            if (u === null) {
                if (a = n.return,
                a !== null) {
                    l = a;
                    continue
                }
                break
            }
            if (n.child === u.child) {
                for (u = n.child; u; ) {
                    if (u === l)
                        return M(n),
                        e;
                    if (u === a)
                        return M(n),
                        t;
                    u = u.sibling
                }
                throw Error(f(188))
            }
            if (l.return !== a.return)
                l = n,
                a = u;
            else {
                for (var c = !1, r = n.child; r; ) {
                    if (r === l) {
                        c = !0,
                        l = n,
                        a = u;
                        break
                    }
                    if (r === a) {
                        c = !0,
                        a = n,
                        l = u;
                        break
                    }
                    r = r.sibling
                }
                if (!c) {
                    for (r = u.child; r; ) {
                        if (r === l) {
                            c = !0,
                            l = u,
                            a = n;
                            break
                        }
                        if (r === a) {
                            c = !0,
                            a = u,
                            l = n;
                            break
                        }
                        r = r.sibling
                    }
                    if (!c)
                        throw Error(f(189))
                }
            }
            if (l.alternate !== a)
                throw Error(f(190))
        }
        if (l.tag !== 3)
            throw Error(f(188));
        return l.stateNode.current === l ? e : t
    }
    function y(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = y(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var T = Object.assign
      , H = Symbol.for("react.element")
      , D = Symbol.for("react.transitional.element")
      , Q = Symbol.for("react.portal")
      , C = Symbol.for("react.fragment")
      , G = Symbol.for("react.strict_mode")
      , V = Symbol.for("react.profiler")
      , q = Symbol.for("react.provider")
      , Z = Symbol.for("react.consumer")
      , P = Symbol.for("react.context")
      , ce = Symbol.for("react.forward_ref")
      , I = Symbol.for("react.suspense")
      , _e = Symbol.for("react.suspense_list")
      , we = Symbol.for("react.memo")
      , Re = Symbol.for("react.lazy")
      , xe = Symbol.for("react.activity")
      , $e = Symbol.for("react.memo_cache_sentinel")
      , dt = Symbol.iterator;
    function Ze(e) {
        return e === null || typeof e != "object" ? null : (e = dt && e[dt] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var Nl = Symbol.for("react.client.reference");
    function jl(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === Nl ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case C:
            return "Fragment";
        case V:
            return "Profiler";
        case G:
            return "StrictMode";
        case I:
            return "Suspense";
        case _e:
            return "SuspenseList";
        case xe:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case Q:
                return "Portal";
            case P:
                return (e.displayName || "Context") + ".Provider";
            case Z:
                return (e._context.displayName || "Context") + ".Consumer";
            case ce:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case we:
                return t = e.displayName || null,
                t !== null ? t : jl(e.type) || "Memo";
            case Re:
                t = e._payload,
                e = e._init;
                try {
                    return jl(e(t))
                } catch {}
            }
        return null
    }
    var Ve = Array.isArray
      , z = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , Y = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , W = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , ge = []
      , v = -1;
    function U(e) {
        return {
            current: e
        }
    }
    function L(e) {
        0 > v || (e.current = ge[v],
        ge[v] = null,
        v--)
    }
    function B(e, t) {
        v++,
        ge[v] = e.current,
        e.current = t
    }
    var k = U(null)
      , se = U(null)
      , ee = U(null)
      , lt = U(null);
    function be(e, t) {
        switch (B(ee, t),
        B(se, e),
        B(k, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? sd(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = sd(t),
                e = rd(t, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        L(k),
        B(k, e)
    }
    function Pt() {
        L(k),
        L(se),
        L(ee)
    }
    function ci(e) {
        e.memoizedState !== null && B(lt, e);
        var t = k.current
          , l = rd(t, e.type);
        t !== l && (B(se, e),
        B(k, l))
    }
    function Yn(e) {
        se.current === e && (L(k),
        L(se)),
        lt.current === e && (L(lt),
        Tn._currentValue = W)
    }
    var si = Object.prototype.hasOwnProperty
      , ri = i.unstable_scheduleCallback
      , fi = i.unstable_cancelCallback
      , xh = i.unstable_shouldYield
      , bh = i.unstable_requestPaint
      , wt = i.unstable_now
      , Sh = i.unstable_getCurrentPriorityLevel
      , Ls = i.unstable_ImmediatePriority
      , Gs = i.unstable_UserBlockingPriority
      , Ln = i.unstable_NormalPriority
      , Eh = i.unstable_LowPriority
      , Xs = i.unstable_IdlePriority
      , Nh = i.log
      , jh = i.unstable_setDisableYieldValue
      , Da = null
      , at = null;
    function It(e) {
        if (typeof Nh == "function" && jh(e),
        at && typeof at.setStrictMode == "function")
            try {
                at.setStrictMode(Da, e)
            } catch {}
    }
    var nt = Math.clz32 ? Math.clz32 : Ah
      , wh = Math.log
      , Th = Math.LN2;
    function Ah(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (wh(e) / Th | 0) | 0
    }
    var Gn = 256
      , Xn = 4194304;
    function wl(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function Qn(e, t, l) {
        var a = e.pendingLanes;
        if (a === 0)
            return 0;
        var n = 0
          , u = e.suspendedLanes
          , c = e.pingedLanes;
        e = e.warmLanes;
        var r = a & 134217727;
        return r !== 0 ? (a = r & ~u,
        a !== 0 ? n = wl(a) : (c &= r,
        c !== 0 ? n = wl(c) : l || (l = r & ~e,
        l !== 0 && (n = wl(l))))) : (r = a & ~u,
        r !== 0 ? n = wl(r) : c !== 0 ? n = wl(c) : l || (l = a & ~e,
        l !== 0 && (n = wl(l)))),
        n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n,
        l = t & -t,
        u >= l || u === 32 && (l & 4194048) !== 0) ? t : n
    }
    function Ua(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function Rh(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Qs() {
        var e = Gn;
        return Gn <<= 1,
        (Gn & 4194048) === 0 && (Gn = 256),
        e
    }
    function Zs() {
        var e = Xn;
        return Xn <<= 1,
        (Xn & 62914560) === 0 && (Xn = 4194304),
        e
    }
    function oi(e) {
        for (var t = [], l = 0; 31 > l; l++)
            t.push(e);
        return t
    }
    function Ca(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function zh(e, t, l, a, n, u) {
        var c = e.pendingLanes;
        e.pendingLanes = l,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= l,
        e.entangledLanes &= l,
        e.errorRecoveryDisabledLanes &= l,
        e.shellSuspendCounter = 0;
        var r = e.entanglements
          , m = e.expirationTimes
          , E = e.hiddenUpdates;
        for (l = c & ~l; 0 < l; ) {
            var R = 31 - nt(l)
              , O = 1 << R;
            r[R] = 0,
            m[R] = -1;
            var N = E[R];
            if (N !== null)
                for (E[R] = null,
                R = 0; R < N.length; R++) {
                    var j = N[R];
                    j !== null && (j.lane &= -536870913)
                }
            l &= ~O
        }
        a !== 0 && Vs(e, a, 0),
        u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t))
    }
    function Vs(e, t, l) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var a = 31 - nt(t);
        e.entangledLanes |= t,
        e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 4194090
    }
    function Ks(e, t) {
        var l = e.entangledLanes |= t;
        for (e = e.entanglements; l; ) {
            var a = 31 - nt(l)
              , n = 1 << a;
            n & t | e[a] & t && (e[a] |= t),
            l &= ~n
        }
    }
    function di(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function hi(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function ks() {
        var e = Y.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : Rd(e.type))
    }
    function Mh(e, t) {
        var l = Y.p;
        try {
            return Y.p = e,
            t()
        } finally {
            Y.p = l
        }
    }
    var el = Math.random().toString(36).slice(2)
      , Ke = "__reactFiber$" + el
      , Fe = "__reactProps$" + el
      , Vl = "__reactContainer$" + el
      , mi = "__reactEvents$" + el
      , _h = "__reactListeners$" + el
      , Oh = "__reactHandles$" + el
      , Js = "__reactResources$" + el
      , Ha = "__reactMarker$" + el;
    function yi(e) {
        delete e[Ke],
        delete e[Fe],
        delete e[mi],
        delete e[_h],
        delete e[Oh]
    }
    function Kl(e) {
        var t = e[Ke];
        if (t)
            return t;
        for (var l = e.parentNode; l; ) {
            if (t = l[Vl] || l[Ke]) {
                if (l = t.alternate,
                t.child !== null || l !== null && l.child !== null)
                    for (e = hd(e); e !== null; ) {
                        if (l = e[Ke])
                            return l;
                        e = hd(e)
                    }
                return t
            }
            e = l,
            l = e.parentNode
        }
        return null
    }
    function kl(e) {
        if (e = e[Ke] || e[Vl]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function qa(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(f(33))
    }
    function Jl(e) {
        var t = e[Js];
        return t || (t = e[Js] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function qe(e) {
        e[Ha] = !0
    }
    var $s = new Set
      , Ws = {};
    function Tl(e, t) {
        $l(e, t),
        $l(e + "Capture", t)
    }
    function $l(e, t) {
        for (Ws[e] = t,
        e = 0; e < t.length; e++)
            $s.add(t[e])
    }
    var Dh = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Fs = {}
      , Ps = {};
    function Uh(e) {
        return si.call(Ps, e) ? !0 : si.call(Fs, e) ? !1 : Dh.test(e) ? Ps[e] = !0 : (Fs[e] = !0,
        !1)
    }
    function Zn(e, t, l) {
        if (Uh(t))
            if (l === null)
                e.removeAttribute(t);
            else {
                switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var a = t.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, "" + l)
            }
    }
    function Vn(e, t, l) {
        if (l === null)
            e.removeAttribute(t);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, "" + l)
        }
    }
    function Dt(e, t, l, a) {
        if (a === null)
            e.removeAttribute(l);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(l);
                return
            }
            e.setAttributeNS(t, l, "" + a)
        }
    }
    var gi, Is;
    function Wl(e) {
        if (gi === void 0)
            try {
                throw Error()
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                gi = t && t[1] || "",
                Is = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + gi + e + Is
    }
    var vi = !1;
    function pi(e, t) {
        if (!e || vi)
            return "";
        vi = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var O = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(O.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(O, [])
                                } catch (j) {
                                    var N = j
                                }
                                Reflect.construct(e, [], O)
                            } else {
                                try {
                                    O.call()
                                } catch (j) {
                                    N = j
                                }
                                e.call(O.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (j) {
                                N = j
                            }
                            (O = e()) && typeof O.catch == "function" && O.catch(function() {})
                        }
                    } catch (j) {
                        if (j && N && typeof j.stack == "string")
                            return [j.stack, N.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = a.DetermineComponentFrameRoot()
              , c = u[0]
              , r = u[1];
            if (c && r) {
                var m = c.split(`
`)
                  , E = r.split(`
`);
                for (n = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
                    a++;
                for (; n < E.length && !E[n].includes("DetermineComponentFrameRoot"); )
                    n++;
                if (a === m.length || n === E.length)
                    for (a = m.length - 1,
                    n = E.length - 1; 1 <= a && 0 <= n && m[a] !== E[n]; )
                        n--;
                for (; 1 <= a && 0 <= n; a--,
                n--)
                    if (m[a] !== E[n]) {
                        if (a !== 1 || n !== 1)
                            do
                                if (a--,
                                n--,
                                0 > n || m[a] !== E[n]) {
                                    var R = `
` + m[a].replace(" at new ", " at ");
                                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)),
                                    R
                                }
                            while (1 <= a && 0 <= n);
                        break
                    }
            }
        } finally {
            vi = !1,
            Error.prepareStackTrace = l
        }
        return (l = e ? e.displayName || e.name : "") ? Wl(l) : ""
    }
    function Ch(e) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return Wl(e.type);
        case 16:
            return Wl("Lazy");
        case 13:
            return Wl("Suspense");
        case 19:
            return Wl("SuspenseList");
        case 0:
        case 15:
            return pi(e.type, !1);
        case 11:
            return pi(e.type.render, !1);
        case 1:
            return pi(e.type, !0);
        case 31:
            return Wl("Activity");
        default:
            return ""
        }
    }
    function er(e) {
        try {
            var t = "";
            do
                t += Ch(e),
                e = e.return;
            while (e);
            return t
        } catch (l) {
            return `
Error generating stack: ` + l.message + `
` + l.stack
        }
    }
    function ht(e) {
        switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function tr(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Hh(e) {
        var t = tr(e) ? "checked" : "value"
          , l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , a = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
            var n = l.get
              , u = l.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return n.call(this)
                },
                set: function(c) {
                    a = "" + c,
                    u.call(this, c)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: l.enumerable
            }),
            {
                getValue: function() {
                    return a
                },
                setValue: function(c) {
                    a = "" + c
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function Kn(e) {
        e._valueTracker || (e._valueTracker = Hh(e))
    }
    function lr(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var l = t.getValue()
          , a = "";
        return e && (a = tr(e) ? e.checked ? "true" : "false" : e.value),
        e = a,
        e !== l ? (t.setValue(e),
        !0) : !1
    }
    function kn(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var qh = /[\n"\\]/g;
    function mt(e) {
        return e.replace(qh, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function xi(e, t, l, a, n, u, c, r) {
        e.name = "",
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"),
        t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ht(t)) : e.value !== "" + ht(t) && (e.value = "" + ht(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"),
        t != null ? bi(e, c, ht(t)) : l != null ? bi(e, c, ht(l)) : a != null && e.removeAttribute("value"),
        n == null && u != null && (e.defaultChecked = !!u),
        n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"),
        r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? e.name = "" + ht(r) : e.removeAttribute("name")
    }
    function ar(e, t, l, a, n, u, c, r) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u),
        t != null || l != null) {
            if (!(u !== "submit" && u !== "reset" || t != null))
                return;
            l = l != null ? "" + ht(l) : "",
            t = t != null ? "" + ht(t) : l,
            r || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        a = a ?? n,
        a = typeof a != "function" && typeof a != "symbol" && !!a,
        e.checked = r ? e.checked : !!a,
        e.defaultChecked = !!a,
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c)
    }
    function bi(e, t, l) {
        t === "number" && kn(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l)
    }
    function Fl(e, t, l, a) {
        if (e = e.options,
        t) {
            t = {};
            for (var n = 0; n < l.length; n++)
                t["$" + l[n]] = !0;
            for (l = 0; l < e.length; l++)
                n = t.hasOwnProperty("$" + e[l].value),
                e[l].selected !== n && (e[l].selected = n),
                n && a && (e[l].defaultSelected = !0)
        } else {
            for (l = "" + ht(l),
            t = null,
            n = 0; n < e.length; n++) {
                if (e[n].value === l) {
                    e[n].selected = !0,
                    a && (e[n].defaultSelected = !0);
                    return
                }
                t !== null || e[n].disabled || (t = e[n])
            }
            t !== null && (t.selected = !0)
        }
    }
    function nr(e, t, l) {
        if (t != null && (t = "" + ht(t),
        t !== e.value && (e.value = t),
        l == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = l != null ? "" + ht(l) : ""
    }
    function ur(e, t, l, a) {
        if (t == null) {
            if (a != null) {
                if (l != null)
                    throw Error(f(92));
                if (Ve(a)) {
                    if (1 < a.length)
                        throw Error(f(93));
                    a = a[0]
                }
                l = a
            }
            l == null && (l = ""),
            t = l
        }
        l = ht(t),
        e.defaultValue = l,
        a = e.textContent,
        a === l && a !== "" && a !== null && (e.value = a)
    }
    function Pl(e, t) {
        if (t) {
            var l = e.firstChild;
            if (l && l === e.lastChild && l.nodeType === 3) {
                l.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Bh = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function ir(e, t, l) {
        var a = t.indexOf("--") === 0;
        l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Bh.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px"
    }
    function cr(e, t, l) {
        if (t != null && typeof t != "object")
            throw Error(f(62));
        if (e = e.style,
        l != null) {
            for (var a in l)
                !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
            for (var n in t)
                a = t[n],
                t.hasOwnProperty(n) && l[n] !== a && ir(e, n, a)
        } else
            for (var u in t)
                t.hasOwnProperty(u) && ir(e, u, t[u])
    }
    function Si(e) {
        if (e.indexOf("-") === -1)
            return !1;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Yh = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , Lh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Jn(e) {
        return Lh.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var Ei = null;
    function Ni(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var Il = null
      , ea = null;
    function sr(e) {
        var t = kl(e);
        if (t && (e = t.stateNode)) {
            var l = e[Fe] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (xi(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name),
                t = l.name,
                l.type === "radio" && t != null) {
                    for (l = e; l.parentNode; )
                        l = l.parentNode;
                    for (l = l.querySelectorAll('input[name="' + mt("" + t) + '"][type="radio"]'),
                    t = 0; t < l.length; t++) {
                        var a = l[t];
                        if (a !== e && a.form === e.form) {
                            var n = a[Fe] || null;
                            if (!n)
                                throw Error(f(90));
                            xi(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
                        }
                    }
                    for (t = 0; t < l.length; t++)
                        a = l[t],
                        a.form === e.form && lr(a)
                }
                break e;
            case "textarea":
                nr(e, l.value, l.defaultValue);
                break e;
            case "select":
                t = l.value,
                t != null && Fl(e, !!l.multiple, t, !1)
            }
        }
    }
    var ji = !1;
    function rr(e, t, l) {
        if (ji)
            return e(t, l);
        ji = !0;
        try {
            var a = e(t);
            return a
        } finally {
            if (ji = !1,
            (Il !== null || ea !== null) && (Du(),
            Il && (t = Il,
            e = ea,
            ea = Il = null,
            sr(t),
            e)))
                for (t = 0; t < e.length; t++)
                    sr(e[t])
        }
    }
    function Ba(e, t) {
        var l = e.stateNode;
        if (l === null)
            return null;
        var a = l[Fe] || null;
        if (a === null)
            return null;
        l = a[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (a = !a.disabled) || (e = e.type,
            a = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !a;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (l && typeof l != "function")
            throw Error(f(231, t, typeof l));
        return l
    }
    var Ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , wi = !1;
    if (Ut)
        try {
            var Ya = {};
            Object.defineProperty(Ya, "passive", {
                get: function() {
                    wi = !0
                }
            }),
            window.addEventListener("test", Ya, Ya),
            window.removeEventListener("test", Ya, Ya)
        } catch {
            wi = !1
        }
    var tl = null
      , Ti = null
      , $n = null;
    function fr() {
        if ($n)
            return $n;
        var e, t = Ti, l = t.length, a, n = "value"in tl ? tl.value : tl.textContent, u = n.length;
        for (e = 0; e < l && t[e] === n[e]; e++)
            ;
        var c = l - e;
        for (a = 1; a <= c && t[l - a] === n[u - a]; a++)
            ;
        return $n = n.slice(e, 1 < a ? 1 - a : void 0)
    }
    function Wn(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function Fn() {
        return !0
    }
    function or() {
        return !1
    }
    function Pe(e) {
        function t(l, a, n, u, c) {
            this._reactName = l,
            this._targetInst = n,
            this.type = a,
            this.nativeEvent = u,
            this.target = c,
            this.currentTarget = null;
            for (var r in e)
                e.hasOwnProperty(r) && (l = e[r],
                this[r] = l ? l(u) : u[r]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Fn : or,
            this.isPropagationStopped = or,
            this
        }
        return T(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var l = this.nativeEvent;
                l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1),
                this.isDefaultPrevented = Fn)
            },
            stopPropagation: function() {
                var l = this.nativeEvent;
                l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
                this.isPropagationStopped = Fn)
            },
            persist: function() {},
            isPersistent: Fn
        }),
        t
    }
    var Al = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Pn = Pe(Al), La = T({}, Al, {
        view: 0,
        detail: 0
    }), Gh = Pe(La), Ai, Ri, Ga, In = T({}, La, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Mi,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== Ga && (Ga && e.type === "mousemove" ? (Ai = e.screenX - Ga.screenX,
            Ri = e.screenY - Ga.screenY) : Ri = Ai = 0,
            Ga = e),
            Ai)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : Ri
        }
    }), dr = Pe(In), Xh = T({}, In, {
        dataTransfer: 0
    }), Qh = Pe(Xh), Zh = T({}, La, {
        relatedTarget: 0
    }), zi = Pe(Zh), Vh = T({}, Al, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Kh = Pe(Vh), kh = T({}, Al, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), Jh = Pe(kh), $h = T({}, Al, {
        data: 0
    }), hr = Pe($h), Wh = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Fh = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Ph = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Ih(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Ph[e]) ? !!t[e] : !1
    }
    function Mi() {
        return Ih
    }
    var em = T({}, La, {
        key: function(e) {
            if (e.key) {
                var t = Wh[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Wn(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Fh[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Mi,
        charCode: function(e) {
            return e.type === "keypress" ? Wn(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Wn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , tm = Pe(em)
      , lm = T({}, In, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , mr = Pe(lm)
      , am = T({}, La, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Mi
    })
      , nm = Pe(am)
      , um = T({}, Al, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , im = Pe(um)
      , cm = T({}, In, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , sm = Pe(cm)
      , rm = T({}, Al, {
        newState: 0,
        oldState: 0
    })
      , fm = Pe(rm)
      , om = [9, 13, 27, 32]
      , _i = Ut && "CompositionEvent"in window
      , Xa = null;
    Ut && "documentMode"in document && (Xa = document.documentMode);
    var dm = Ut && "TextEvent"in window && !Xa
      , yr = Ut && (!_i || Xa && 8 < Xa && 11 >= Xa)
      , gr = " "
      , vr = !1;
    function pr(e, t) {
        switch (e) {
        case "keyup":
            return om.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function xr(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var ta = !1;
    function hm(e, t) {
        switch (e) {
        case "compositionend":
            return xr(t);
        case "keypress":
            return t.which !== 32 ? null : (vr = !0,
            gr);
        case "textInput":
            return e = t.data,
            e === gr && vr ? null : e;
        default:
            return null
        }
    }
    function mm(e, t) {
        if (ta)
            return e === "compositionend" || !_i && pr(e, t) ? (e = fr(),
            $n = Ti = tl = null,
            ta = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return yr && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var ym = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function br(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!ym[e.type] : t === "textarea"
    }
    function Sr(e, t, l, a) {
        Il ? ea ? ea.push(a) : ea = [a] : Il = a,
        t = Yu(t, "onChange"),
        0 < t.length && (l = new Pn("onChange","change",null,l,a),
        e.push({
            event: l,
            listeners: t
        }))
    }
    var Qa = null
      , Za = null;
    function gm(e) {
        ad(e, 0)
    }
    function eu(e) {
        var t = qa(e);
        if (lr(t))
            return e
    }
    function Er(e, t) {
        if (e === "change")
            return t
    }
    var Nr = !1;
    if (Ut) {
        var Oi;
        if (Ut) {
            var Di = "oninput"in document;
            if (!Di) {
                var jr = document.createElement("div");
                jr.setAttribute("oninput", "return;"),
                Di = typeof jr.oninput == "function"
            }
            Oi = Di
        } else
            Oi = !1;
        Nr = Oi && (!document.documentMode || 9 < document.documentMode)
    }
    function wr() {
        Qa && (Qa.detachEvent("onpropertychange", Tr),
        Za = Qa = null)
    }
    function Tr(e) {
        if (e.propertyName === "value" && eu(Za)) {
            var t = [];
            Sr(t, Za, e, Ni(e)),
            rr(gm, t)
        }
    }
    function vm(e, t, l) {
        e === "focusin" ? (wr(),
        Qa = t,
        Za = l,
        Qa.attachEvent("onpropertychange", Tr)) : e === "focusout" && wr()
    }
    function pm(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return eu(Za)
    }
    function xm(e, t) {
        if (e === "click")
            return eu(t)
    }
    function bm(e, t) {
        if (e === "input" || e === "change")
            return eu(t)
    }
    function Sm(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var ut = typeof Object.is == "function" ? Object.is : Sm;
    function Va(e, t) {
        if (ut(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var l = Object.keys(e)
          , a = Object.keys(t);
        if (l.length !== a.length)
            return !1;
        for (a = 0; a < l.length; a++) {
            var n = l[a];
            if (!si.call(t, n) || !ut(e[n], t[n]))
                return !1
        }
        return !0
    }
    function Ar(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function Rr(e, t) {
        var l = Ar(e);
        e = 0;
        for (var a; l; ) {
            if (l.nodeType === 3) {
                if (a = e + l.textContent.length,
                e <= t && a >= t)
                    return {
                        node: l,
                        offset: t - e
                    };
                e = a
            }
            e: {
                for (; l; ) {
                    if (l.nextSibling) {
                        l = l.nextSibling;
                        break e
                    }
                    l = l.parentNode
                }
                l = void 0
            }
            l = Ar(l)
        }
    }
    function zr(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zr(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function Mr(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = kn(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var l = typeof t.contentWindow.location.href == "string"
            } catch {
                l = !1
            }
            if (l)
                e = t.contentWindow;
            else
                break;
            t = kn(e.document)
        }
        return t
    }
    function Ui(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var Em = Ut && "documentMode"in document && 11 >= document.documentMode
      , la = null
      , Ci = null
      , Ka = null
      , Hi = !1;
    function _r(e, t, l) {
        var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
        Hi || la == null || la !== kn(a) || (a = la,
        "selectionStart"in a && Ui(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        Ka && Va(Ka, a) || (Ka = a,
        a = Yu(Ci, "onSelect"),
        0 < a.length && (t = new Pn("onSelect","select",null,t,l),
        e.push({
            event: t,
            listeners: a
        }),
        t.target = la)))
    }
    function Rl(e, t) {
        var l = {};
        return l[e.toLowerCase()] = t.toLowerCase(),
        l["Webkit" + e] = "webkit" + t,
        l["Moz" + e] = "moz" + t,
        l
    }
    var aa = {
        animationend: Rl("Animation", "AnimationEnd"),
        animationiteration: Rl("Animation", "AnimationIteration"),
        animationstart: Rl("Animation", "AnimationStart"),
        transitionrun: Rl("Transition", "TransitionRun"),
        transitionstart: Rl("Transition", "TransitionStart"),
        transitioncancel: Rl("Transition", "TransitionCancel"),
        transitionend: Rl("Transition", "TransitionEnd")
    }
      , qi = {}
      , Or = {};
    Ut && (Or = document.createElement("div").style,
    "AnimationEvent"in window || (delete aa.animationend.animation,
    delete aa.animationiteration.animation,
    delete aa.animationstart.animation),
    "TransitionEvent"in window || delete aa.transitionend.transition);
    function zl(e) {
        if (qi[e])
            return qi[e];
        if (!aa[e])
            return e;
        var t = aa[e], l;
        for (l in t)
            if (t.hasOwnProperty(l) && l in Or)
                return qi[e] = t[l];
        return e
    }
    var Dr = zl("animationend")
      , Ur = zl("animationiteration")
      , Cr = zl("animationstart")
      , Nm = zl("transitionrun")
      , jm = zl("transitionstart")
      , wm = zl("transitioncancel")
      , Hr = zl("transitionend")
      , qr = new Map
      , Bi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Bi.push("scrollEnd");
    function Et(e, t) {
        qr.set(e, t),
        Tl(t, [e])
    }
    var Br = new WeakMap;
    function yt(e, t) {
        if (typeof e == "object" && e !== null) {
            var l = Br.get(e);
            return l !== void 0 ? l : (t = {
                value: e,
                source: t,
                stack: er(t)
            },
            Br.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: er(t)
        }
    }
    var gt = []
      , na = 0
      , Yi = 0;
    function tu() {
        for (var e = na, t = Yi = na = 0; t < e; ) {
            var l = gt[t];
            gt[t++] = null;
            var a = gt[t];
            gt[t++] = null;
            var n = gt[t];
            gt[t++] = null;
            var u = gt[t];
            if (gt[t++] = null,
            a !== null && n !== null) {
                var c = a.pending;
                c === null ? n.next = n : (n.next = c.next,
                c.next = n),
                a.pending = n
            }
            u !== 0 && Yr(l, n, u)
        }
    }
    function lu(e, t, l, a) {
        gt[na++] = e,
        gt[na++] = t,
        gt[na++] = l,
        gt[na++] = a,
        Yi |= a,
        e.lanes |= a,
        e = e.alternate,
        e !== null && (e.lanes |= a)
    }
    function Li(e, t, l, a) {
        return lu(e, t, l, a),
        au(e)
    }
    function ua(e, t) {
        return lu(e, null, null, t),
        au(e)
    }
    function Yr(e, t, l) {
        e.lanes |= l;
        var a = e.alternate;
        a !== null && (a.lanes |= l);
        for (var n = !1, u = e.return; u !== null; )
            u.childLanes |= l,
            a = u.alternate,
            a !== null && (a.childLanes |= l),
            u.tag === 22 && (e = u.stateNode,
            e === null || e._visibility & 1 || (n = !0)),
            e = u,
            u = u.return;
        return e.tag === 3 ? (u = e.stateNode,
        n && t !== null && (n = 31 - nt(l),
        e = u.hiddenUpdates,
        a = e[n],
        a === null ? e[n] = [t] : a.push(t),
        t.lane = l | 536870912),
        u) : null
    }
    function au(e) {
        if (50 < pn)
            throw pn = 0,
            Kc = null,
            Error(f(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var ia = {};
    function Tm(e, t, l, a) {
        this.tag = e,
        this.key = l,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function it(e, t, l, a) {
        return new Tm(e,t,l,a)
    }
    function Gi(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function Ct(e, t) {
        var l = e.alternate;
        return l === null ? (l = it(e.tag, t, e.key, e.mode),
        l.elementType = e.elementType,
        l.type = e.type,
        l.stateNode = e.stateNode,
        l.alternate = e,
        e.alternate = l) : (l.pendingProps = t,
        l.type = e.type,
        l.flags = 0,
        l.subtreeFlags = 0,
        l.deletions = null),
        l.flags = e.flags & 65011712,
        l.childLanes = e.childLanes,
        l.lanes = e.lanes,
        l.child = e.child,
        l.memoizedProps = e.memoizedProps,
        l.memoizedState = e.memoizedState,
        l.updateQueue = e.updateQueue,
        t = e.dependencies,
        l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        l.sibling = e.sibling,
        l.index = e.index,
        l.ref = e.ref,
        l.refCleanup = e.refCleanup,
        l
    }
    function Lr(e, t) {
        e.flags &= 65011714;
        var l = e.alternate;
        return l === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = l.childLanes,
        e.lanes = l.lanes,
        e.child = l.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = l.memoizedProps,
        e.memoizedState = l.memoizedState,
        e.updateQueue = l.updateQueue,
        e.type = l.type,
        t = l.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function nu(e, t, l, a, n, u) {
        var c = 0;
        if (a = e,
        typeof e == "function")
            Gi(e) && (c = 1);
        else if (typeof e == "string")
            c = R0(e, l, k.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case xe:
                return e = it(31, l, t, n),
                e.elementType = xe,
                e.lanes = u,
                e;
            case C:
                return Ml(l.children, n, u, t);
            case G:
                c = 8,
                n |= 24;
                break;
            case V:
                return e = it(12, l, t, n | 2),
                e.elementType = V,
                e.lanes = u,
                e;
            case I:
                return e = it(13, l, t, n),
                e.elementType = I,
                e.lanes = u,
                e;
            case _e:
                return e = it(19, l, t, n),
                e.elementType = _e,
                e.lanes = u,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case q:
                    case P:
                        c = 10;
                        break e;
                    case Z:
                        c = 9;
                        break e;
                    case ce:
                        c = 11;
                        break e;
                    case we:
                        c = 14;
                        break e;
                    case Re:
                        c = 16,
                        a = null;
                        break e
                    }
                c = 29,
                l = Error(f(130, e === null ? "null" : typeof e, "")),
                a = null
            }
        return t = it(c, l, t, n),
        t.elementType = e,
        t.type = a,
        t.lanes = u,
        t
    }
    function Ml(e, t, l, a) {
        return e = it(7, e, a, t),
        e.lanes = l,
        e
    }
    function Xi(e, t, l) {
        return e = it(6, e, null, t),
        e.lanes = l,
        e
    }
    function Qi(e, t, l) {
        return t = it(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = l,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var ca = []
      , sa = 0
      , uu = null
      , iu = 0
      , vt = []
      , pt = 0
      , _l = null
      , Ht = 1
      , qt = "";
    function Ol(e, t) {
        ca[sa++] = iu,
        ca[sa++] = uu,
        uu = e,
        iu = t
    }
    function Gr(e, t, l) {
        vt[pt++] = Ht,
        vt[pt++] = qt,
        vt[pt++] = _l,
        _l = e;
        var a = Ht;
        e = qt;
        var n = 32 - nt(a) - 1;
        a &= ~(1 << n),
        l += 1;
        var u = 32 - nt(t) + n;
        if (30 < u) {
            var c = n - n % 5;
            u = (a & (1 << c) - 1).toString(32),
            a >>= c,
            n -= c,
            Ht = 1 << 32 - nt(t) + n | l << n | a,
            qt = u + e
        } else
            Ht = 1 << u | l << n | a,
            qt = e
    }
    function Zi(e) {
        e.return !== null && (Ol(e, 1),
        Gr(e, 1, 0))
    }
    function Vi(e) {
        for (; e === uu; )
            uu = ca[--sa],
            ca[sa] = null,
            iu = ca[--sa],
            ca[sa] = null;
        for (; e === _l; )
            _l = vt[--pt],
            vt[pt] = null,
            qt = vt[--pt],
            vt[pt] = null,
            Ht = vt[--pt],
            vt[pt] = null
    }
    var We = null
      , Te = null
      , fe = !1
      , Dl = null
      , Tt = !1
      , Ki = Error(f(519));
    function Ul(e) {
        var t = Error(f(418, ""));
        throw $a(yt(t, e)),
        Ki
    }
    function Xr(e) {
        var t = e.stateNode
          , l = e.type
          , a = e.memoizedProps;
        switch (t[Ke] = e,
        t[Fe] = a,
        l) {
        case "dialog":
            ue("cancel", t),
            ue("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            ue("load", t);
            break;
        case "video":
        case "audio":
            for (l = 0; l < bn.length; l++)
                ue(bn[l], t);
            break;
        case "source":
            ue("error", t);
            break;
        case "img":
        case "image":
        case "link":
            ue("error", t),
            ue("load", t);
            break;
        case "details":
            ue("toggle", t);
            break;
        case "input":
            ue("invalid", t),
            ar(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0),
            Kn(t);
            break;
        case "select":
            ue("invalid", t);
            break;
        case "textarea":
            ue("invalid", t),
            ur(t, a.value, a.defaultValue, a.children),
            Kn(t)
        }
        l = a.children,
        typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || cd(t.textContent, l) ? (a.popover != null && (ue("beforetoggle", t),
        ue("toggle", t)),
        a.onScroll != null && ue("scroll", t),
        a.onScrollEnd != null && ue("scrollend", t),
        a.onClick != null && (t.onclick = Lu),
        t = !0) : t = !1,
        t || Ul(e)
    }
    function Qr(e) {
        for (We = e.return; We; )
            switch (We.tag) {
            case 5:
            case 13:
                Tt = !1;
                return;
            case 27:
            case 3:
                Tt = !0;
                return;
            default:
                We = We.return
            }
    }
    function ka(e) {
        if (e !== We)
            return !1;
        if (!fe)
            return Qr(e),
            fe = !0,
            !1;
        var t = e.tag, l;
        if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type,
        l = !(l !== "form" && l !== "button") || ss(e.type, e.memoizedProps)),
        l = !l),
        l && Te && Ul(e),
        Qr(e),
        t === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(f(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (e.nodeType === 8)
                        if (l = e.data,
                        l === "/$") {
                            if (t === 0) {
                                Te = jt(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            l !== "$" && l !== "$!" && l !== "$?" || t++;
                    e = e.nextSibling
                }
                Te = null
            }
        } else
            t === 27 ? (t = Te,
            vl(e.type) ? (e = ds,
            ds = null,
            Te = e) : Te = t) : Te = We ? jt(e.stateNode.nextSibling) : null;
        return !0
    }
    function Ja() {
        Te = We = null,
        fe = !1
    }
    function Zr() {
        var e = Dl;
        return e !== null && (tt === null ? tt = e : tt.push.apply(tt, e),
        Dl = null),
        e
    }
    function $a(e) {
        Dl === null ? Dl = [e] : Dl.push(e)
    }
    var ki = U(null)
      , Cl = null
      , Bt = null;
    function ll(e, t, l) {
        B(ki, t._currentValue),
        t._currentValue = l
    }
    function Yt(e) {
        e._currentValue = ki.current,
        L(ki)
    }
    function Ji(e, t, l) {
        for (; e !== null; ) {
            var a = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
            e === l)
                break;
            e = e.return
        }
    }
    function $i(e, t, l, a) {
        var n = e.child;
        for (n !== null && (n.return = e); n !== null; ) {
            var u = n.dependencies;
            if (u !== null) {
                var c = n.child;
                u = u.firstContext;
                e: for (; u !== null; ) {
                    var r = u;
                    u = n;
                    for (var m = 0; m < t.length; m++)
                        if (r.context === t[m]) {
                            u.lanes |= l,
                            r = u.alternate,
                            r !== null && (r.lanes |= l),
                            Ji(u.return, l, e),
                            a || (c = null);
                            break e
                        }
                    u = r.next
                }
            } else if (n.tag === 18) {
                if (c = n.return,
                c === null)
                    throw Error(f(341));
                c.lanes |= l,
                u = c.alternate,
                u !== null && (u.lanes |= l),
                Ji(c, l, e),
                c = null
            } else
                c = n.child;
            if (c !== null)
                c.return = n;
            else
                for (c = n; c !== null; ) {
                    if (c === e) {
                        c = null;
                        break
                    }
                    if (n = c.sibling,
                    n !== null) {
                        n.return = c.return,
                        c = n;
                        break
                    }
                    c = c.return
                }
            n = c
        }
    }
    function Wa(e, t, l, a) {
        e = null;
        for (var n = t, u = !1; n !== null; ) {
            if (!u) {
                if ((n.flags & 524288) !== 0)
                    u = !0;
                else if ((n.flags & 262144) !== 0)
                    break
            }
            if (n.tag === 10) {
                var c = n.alternate;
                if (c === null)
                    throw Error(f(387));
                if (c = c.memoizedProps,
                c !== null) {
                    var r = n.type;
                    ut(n.pendingProps.value, c.value) || (e !== null ? e.push(r) : e = [r])
                }
            } else if (n === lt.current) {
                if (c = n.alternate,
                c === null)
                    throw Error(f(387));
                c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Tn) : e = [Tn])
            }
            n = n.return
        }
        e !== null && $i(t, e, l, a),
        t.flags |= 262144
    }
    function cu(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!ut(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function Hl(e) {
        Cl = e,
        Bt = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function ke(e) {
        return Vr(Cl, e)
    }
    function su(e, t) {
        return Cl === null && Hl(e),
        Vr(e, t)
    }
    function Vr(e, t) {
        var l = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: l,
            next: null
        },
        Bt === null) {
            if (e === null)
                throw Error(f(308));
            Bt = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            Bt = Bt.next = t;
        return l
    }
    var Am = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(l, a) {
                e.push(a)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(l) {
                return l()
            })
        }
    }
      , Rm = i.unstable_scheduleCallback
      , zm = i.unstable_NormalPriority
      , Ce = {
        $$typeof: P,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Wi() {
        return {
            controller: new Am,
            data: new Map,
            refCount: 0
        }
    }
    function Fa(e) {
        e.refCount--,
        e.refCount === 0 && Rm(zm, function() {
            e.controller.abort()
        })
    }
    var Pa = null
      , Fi = 0
      , ra = 0
      , fa = null;
    function Mm(e, t) {
        if (Pa === null) {
            var l = Pa = [];
            Fi = 0,
            ra = Ic(),
            fa = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    l.push(a)
                }
            }
        }
        return Fi++,
        t.then(Kr, Kr),
        t
    }
    function Kr() {
        if (--Fi === 0 && Pa !== null) {
            fa !== null && (fa.status = "fulfilled");
            var e = Pa;
            Pa = null,
            ra = 0,
            fa = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function _m(e, t) {
        var l = []
          , a = {
            status: "pending",
            value: null,
            reason: null,
            then: function(n) {
                l.push(n)
            }
        };
        return e.then(function() {
            a.status = "fulfilled",
            a.value = t;
            for (var n = 0; n < l.length; n++)
                (0,
                l[n])(t)
        }, function(n) {
            for (a.status = "rejected",
            a.reason = n,
            n = 0; n < l.length; n++)
                (0,
                l[n])(void 0)
        }),
        a
    }
    var kr = z.S;
    z.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && Mm(e, t),
        kr !== null && kr(e, t)
    }
    ;
    var ql = U(null);
    function Pi() {
        var e = ql.current;
        return e !== null ? e : pe.pooledCache
    }
    function ru(e, t) {
        t === null ? B(ql, ql.current) : B(ql, t.pool)
    }
    function Jr() {
        var e = Pi();
        return e === null ? null : {
            parent: Ce._currentValue,
            pool: e
        }
    }
    var Ia = Error(f(460))
      , $r = Error(f(474))
      , fu = Error(f(542))
      , Ii = {
        then: function() {}
    };
    function Wr(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function ou() {}
    function Fr(e, t, l) {
        switch (l = e[l],
        l === void 0 ? e.push(t) : l !== t && (t.then(ou, ou),
        t = l),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            Ir(e),
            e;
        default:
            if (typeof t.status == "string")
                t.then(ou, ou);
            else {
                if (e = pe,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(f(482));
                e = t,
                e.status = "pending",
                e.then(function(a) {
                    if (t.status === "pending") {
                        var n = t;
                        n.status = "fulfilled",
                        n.value = a
                    }
                }, function(a) {
                    if (t.status === "pending") {
                        var n = t;
                        n.status = "rejected",
                        n.reason = a
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                Ir(e),
                e
            }
            throw en = t,
            Ia
        }
    }
    var en = null;
    function Pr() {
        if (en === null)
            throw Error(f(459));
        var e = en;
        return en = null,
        e
    }
    function Ir(e) {
        if (e === Ia || e === fu)
            throw Error(f(483))
    }
    var al = !1;
    function ec(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function tc(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function nl(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function ul(e, t, l) {
        var a = e.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (oe & 2) !== 0) {
            var n = a.pending;
            return n === null ? t.next = t : (t.next = n.next,
            n.next = t),
            a.pending = t,
            t = au(e),
            Yr(e, null, l),
            t
        }
        return lu(e, a, t, l),
        au(e)
    }
    function tn(e, t, l) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (l & 4194048) !== 0)) {
            var a = t.lanes;
            a &= e.pendingLanes,
            l |= a,
            t.lanes = l,
            Ks(e, l)
        }
    }
    function lc(e, t) {
        var l = e.updateQueue
          , a = e.alternate;
        if (a !== null && (a = a.updateQueue,
        l === a)) {
            var n = null
              , u = null;
            if (l = l.firstBaseUpdate,
            l !== null) {
                do {
                    var c = {
                        lane: l.lane,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? n = u = c : u = u.next = c,
                    l = l.next
                } while (l !== null);
                u === null ? n = u = t : u = u.next = t
            } else
                n = u = t;
            l = {
                baseState: a.baseState,
                firstBaseUpdate: n,
                lastBaseUpdate: u,
                shared: a.shared,
                callbacks: a.callbacks
            },
            e.updateQueue = l;
            return
        }
        e = l.lastBaseUpdate,
        e === null ? l.firstBaseUpdate = t : e.next = t,
        l.lastBaseUpdate = t
    }
    var ac = !1;
    function ln() {
        if (ac) {
            var e = fa;
            if (e !== null)
                throw e
        }
    }
    function an(e, t, l, a) {
        ac = !1;
        var n = e.updateQueue;
        al = !1;
        var u = n.firstBaseUpdate
          , c = n.lastBaseUpdate
          , r = n.shared.pending;
        if (r !== null) {
            n.shared.pending = null;
            var m = r
              , E = m.next;
            m.next = null,
            c === null ? u = E : c.next = E,
            c = m;
            var R = e.alternate;
            R !== null && (R = R.updateQueue,
            r = R.lastBaseUpdate,
            r !== c && (r === null ? R.firstBaseUpdate = E : r.next = E,
            R.lastBaseUpdate = m))
        }
        if (u !== null) {
            var O = n.baseState;
            c = 0,
            R = E = m = null,
            r = u;
            do {
                var N = r.lane & -536870913
                  , j = N !== r.lane;
                if (j ? (ie & N) === N : (a & N) === N) {
                    N !== 0 && N === ra && (ac = !0),
                    R !== null && (R = R.next = {
                        lane: 0,
                        tag: r.tag,
                        payload: r.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var F = e
                          , J = r;
                        N = t;
                        var ye = l;
                        switch (J.tag) {
                        case 1:
                            if (F = J.payload,
                            typeof F == "function") {
                                O = F.call(ye, O, N);
                                break e
                            }
                            O = F;
                            break e;
                        case 3:
                            F.flags = F.flags & -65537 | 128;
                        case 0:
                            if (F = J.payload,
                            N = typeof F == "function" ? F.call(ye, O, N) : F,
                            N == null)
                                break e;
                            O = T({}, O, N);
                            break e;
                        case 2:
                            al = !0
                        }
                    }
                    N = r.callback,
                    N !== null && (e.flags |= 64,
                    j && (e.flags |= 8192),
                    j = n.callbacks,
                    j === null ? n.callbacks = [N] : j.push(N))
                } else
                    j = {
                        lane: N,
                        tag: r.tag,
                        payload: r.payload,
                        callback: r.callback,
                        next: null
                    },
                    R === null ? (E = R = j,
                    m = O) : R = R.next = j,
                    c |= N;
                if (r = r.next,
                r === null) {
                    if (r = n.shared.pending,
                    r === null)
                        break;
                    j = r,
                    r = j.next,
                    j.next = null,
                    n.lastBaseUpdate = j,
                    n.shared.pending = null
                }
            } while (!0);
            R === null && (m = O),
            n.baseState = m,
            n.firstBaseUpdate = E,
            n.lastBaseUpdate = R,
            u === null && (n.shared.lanes = 0),
            hl |= c,
            e.lanes = c,
            e.memoizedState = O
        }
    }
    function ef(e, t) {
        if (typeof e != "function")
            throw Error(f(191, e));
        e.call(t)
    }
    function tf(e, t) {
        var l = e.callbacks;
        if (l !== null)
            for (e.callbacks = null,
            e = 0; e < l.length; e++)
                ef(l[e], t)
    }
    var oa = U(null)
      , du = U(0);
    function lf(e, t) {
        e = Kt,
        B(du, e),
        B(oa, t),
        Kt = e | t.baseLanes
    }
    function nc() {
        B(du, Kt),
        B(oa, oa.current)
    }
    function uc() {
        Kt = du.current,
        L(oa),
        L(du)
    }
    var il = 0
      , le = null
      , he = null
      , Oe = null
      , hu = !1
      , da = !1
      , Bl = !1
      , mu = 0
      , nn = 0
      , ha = null
      , Om = 0;
    function ze() {
        throw Error(f(321))
    }
    function ic(e, t) {
        if (t === null)
            return !1;
        for (var l = 0; l < t.length && l < e.length; l++)
            if (!ut(e[l], t[l]))
                return !1;
        return !0
    }
    function cc(e, t, l, a, n, u) {
        return il = u,
        le = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        z.H = e === null || e.memoizedState === null ? Lf : Gf,
        Bl = !1,
        u = l(a, n),
        Bl = !1,
        da && (u = nf(t, l, a, n)),
        af(e),
        u
    }
    function af(e) {
        z.H = bu;
        var t = he !== null && he.next !== null;
        if (il = 0,
        Oe = he = le = null,
        hu = !1,
        nn = 0,
        ha = null,
        t)
            throw Error(f(300));
        e === null || Be || (e = e.dependencies,
        e !== null && cu(e) && (Be = !0))
    }
    function nf(e, t, l, a) {
        le = e;
        var n = 0;
        do {
            if (da && (ha = null),
            nn = 0,
            da = !1,
            25 <= n)
                throw Error(f(301));
            if (n += 1,
            Oe = he = null,
            e.updateQueue != null) {
                var u = e.updateQueue;
                u.lastEffect = null,
                u.events = null,
                u.stores = null,
                u.memoCache != null && (u.memoCache.index = 0)
            }
            z.H = Ym,
            u = t(l, a)
        } while (da);
        return u
    }
    function Dm() {
        var e = z.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? un(t) : t,
        e = e.useState()[0],
        (he !== null ? he.memoizedState : null) !== e && (le.flags |= 1024),
        t
    }
    function sc() {
        var e = mu !== 0;
        return mu = 0,
        e
    }
    function rc(e, t, l) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~l
    }
    function fc(e) {
        if (hu) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            hu = !1
        }
        il = 0,
        Oe = he = le = null,
        da = !1,
        nn = mu = 0,
        ha = null
    }
    function Ie() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Oe === null ? le.memoizedState = Oe = e : Oe = Oe.next = e,
        Oe
    }
    function De() {
        if (he === null) {
            var e = le.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = he.next;
        var t = Oe === null ? le.memoizedState : Oe.next;
        if (t !== null)
            Oe = t,
            he = e;
        else {
            if (e === null)
                throw le.alternate === null ? Error(f(467)) : Error(f(310));
            he = e,
            e = {
                memoizedState: he.memoizedState,
                baseState: he.baseState,
                baseQueue: he.baseQueue,
                queue: he.queue,
                next: null
            },
            Oe === null ? le.memoizedState = Oe = e : Oe = Oe.next = e
        }
        return Oe
    }
    function oc() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function un(e) {
        var t = nn;
        return nn += 1,
        ha === null && (ha = []),
        e = Fr(ha, e, t),
        t = le,
        (Oe === null ? t.memoizedState : Oe.next) === null && (t = t.alternate,
        z.H = t === null || t.memoizedState === null ? Lf : Gf),
        e
    }
    function yu(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return un(e);
            if (e.$$typeof === P)
                return ke(e)
        }
        throw Error(f(438, String(e)))
    }
    function dc(e) {
        var t = null
          , l = le.updateQueue;
        if (l !== null && (t = l.memoCache),
        t == null) {
            var a = le.alternate;
            a !== null && (a = a.updateQueue,
            a !== null && (a = a.memoCache,
            a != null && (t = {
                data: a.data.map(function(n) {
                    return n.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        l === null && (l = oc(),
        le.updateQueue = l),
        l.memoCache = t,
        l = t.data[t.index],
        l === void 0)
            for (l = t.data[t.index] = Array(e),
            a = 0; a < e; a++)
                l[a] = $e;
        return t.index++,
        l
    }
    function Lt(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function gu(e) {
        var t = De();
        return hc(t, he, e)
    }
    function hc(e, t, l) {
        var a = e.queue;
        if (a === null)
            throw Error(f(311));
        a.lastRenderedReducer = l;
        var n = e.baseQueue
          , u = a.pending;
        if (u !== null) {
            if (n !== null) {
                var c = n.next;
                n.next = u.next,
                u.next = c
            }
            t.baseQueue = n = u,
            a.pending = null
        }
        if (u = e.baseState,
        n === null)
            e.memoizedState = u;
        else {
            t = n.next;
            var r = c = null
              , m = null
              , E = t
              , R = !1;
            do {
                var O = E.lane & -536870913;
                if (O !== E.lane ? (ie & O) === O : (il & O) === O) {
                    var N = E.revertLane;
                    if (N === 0)
                        m !== null && (m = m.next = {
                            lane: 0,
                            revertLane: 0,
                            action: E.action,
                            hasEagerState: E.hasEagerState,
                            eagerState: E.eagerState,
                            next: null
                        }),
                        O === ra && (R = !0);
                    else if ((il & N) === N) {
                        E = E.next,
                        N === ra && (R = !0);
                        continue
                    } else
                        O = {
                            lane: 0,
                            revertLane: E.revertLane,
                            action: E.action,
                            hasEagerState: E.hasEagerState,
                            eagerState: E.eagerState,
                            next: null
                        },
                        m === null ? (r = m = O,
                        c = u) : m = m.next = O,
                        le.lanes |= N,
                        hl |= N;
                    O = E.action,
                    Bl && l(u, O),
                    u = E.hasEagerState ? E.eagerState : l(u, O)
                } else
                    N = {
                        lane: O,
                        revertLane: E.revertLane,
                        action: E.action,
                        hasEagerState: E.hasEagerState,
                        eagerState: E.eagerState,
                        next: null
                    },
                    m === null ? (r = m = N,
                    c = u) : m = m.next = N,
                    le.lanes |= O,
                    hl |= O;
                E = E.next
            } while (E !== null && E !== t);
            if (m === null ? c = u : m.next = r,
            !ut(u, e.memoizedState) && (Be = !0,
            R && (l = fa,
            l !== null)))
                throw l;
            e.memoizedState = u,
            e.baseState = c,
            e.baseQueue = m,
            a.lastRenderedState = u
        }
        return n === null && (a.lanes = 0),
        [e.memoizedState, a.dispatch]
    }
    function mc(e) {
        var t = De()
          , l = t.queue;
        if (l === null)
            throw Error(f(311));
        l.lastRenderedReducer = e;
        var a = l.dispatch
          , n = l.pending
          , u = t.memoizedState;
        if (n !== null) {
            l.pending = null;
            var c = n = n.next;
            do
                u = e(u, c.action),
                c = c.next;
            while (c !== n);
            ut(u, t.memoizedState) || (Be = !0),
            t.memoizedState = u,
            t.baseQueue === null && (t.baseState = u),
            l.lastRenderedState = u
        }
        return [u, a]
    }
    function uf(e, t, l) {
        var a = le
          , n = De()
          , u = fe;
        if (u) {
            if (l === void 0)
                throw Error(f(407));
            l = l()
        } else
            l = t();
        var c = !ut((he || n).memoizedState, l);
        c && (n.memoizedState = l,
        Be = !0),
        n = n.queue;
        var r = rf.bind(null, a, n, e);
        if (cn(2048, 8, r, [e]),
        n.getSnapshot !== t || c || Oe !== null && Oe.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            ma(9, vu(), sf.bind(null, a, n, l, t), null),
            pe === null)
                throw Error(f(349));
            u || (il & 124) !== 0 || cf(a, t, l)
        }
        return l
    }
    function cf(e, t, l) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: l
        },
        t = le.updateQueue,
        t === null ? (t = oc(),
        le.updateQueue = t,
        t.stores = [e]) : (l = t.stores,
        l === null ? t.stores = [e] : l.push(e))
    }
    function sf(e, t, l, a) {
        t.value = l,
        t.getSnapshot = a,
        ff(t) && of(e)
    }
    function rf(e, t, l) {
        return l(function() {
            ff(t) && of(e)
        })
    }
    function ff(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var l = t();
            return !ut(e, l)
        } catch {
            return !0
        }
    }
    function of(e) {
        var t = ua(e, 2);
        t !== null && ot(t, e, 2)
    }
    function yc(e) {
        var t = Ie();
        if (typeof e == "function") {
            var l = e;
            if (e = l(),
            Bl) {
                It(!0);
                try {
                    l()
                } finally {
                    It(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Lt,
            lastRenderedState: e
        },
        t
    }
    function df(e, t, l, a) {
        return e.baseState = l,
        hc(e, he, typeof a == "function" ? a : Lt)
    }
    function Um(e, t, l, a, n) {
        if (xu(e))
            throw Error(f(485));
        if (e = t.action,
        e !== null) {
            var u = {
                payload: n,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(c) {
                    u.listeners.push(c)
                }
            };
            z.T !== null ? l(!0) : u.isTransition = !1,
            a(u),
            l = t.pending,
            l === null ? (u.next = t.pending = u,
            hf(t, u)) : (u.next = l.next,
            t.pending = l.next = u)
        }
    }
    function hf(e, t) {
        var l = t.action
          , a = t.payload
          , n = e.state;
        if (t.isTransition) {
            var u = z.T
              , c = {};
            z.T = c;
            try {
                var r = l(n, a)
                  , m = z.S;
                m !== null && m(c, r),
                mf(e, t, r)
            } catch (E) {
                gc(e, t, E)
            } finally {
                z.T = u
            }
        } else
            try {
                u = l(n, a),
                mf(e, t, u)
            } catch (E) {
                gc(e, t, E)
            }
    }
    function mf(e, t, l) {
        l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
            yf(e, t, a)
        }, function(a) {
            return gc(e, t, a)
        }) : yf(e, t, l)
    }
    function yf(e, t, l) {
        t.status = "fulfilled",
        t.value = l,
        gf(t),
        e.state = l,
        t = e.pending,
        t !== null && (l = t.next,
        l === t ? e.pending = null : (l = l.next,
        t.next = l,
        hf(e, l)))
    }
    function gc(e, t, l) {
        var a = e.pending;
        if (e.pending = null,
        a !== null) {
            a = a.next;
            do
                t.status = "rejected",
                t.reason = l,
                gf(t),
                t = t.next;
            while (t !== a)
        }
        e.action = null
    }
    function gf(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function vf(e, t) {
        return t
    }
    function pf(e, t) {
        if (fe) {
            var l = pe.formState;
            if (l !== null) {
                e: {
                    var a = le;
                    if (fe) {
                        if (Te) {
                            t: {
                                for (var n = Te, u = Tt; n.nodeType !== 8; ) {
                                    if (!u) {
                                        n = null;
                                        break t
                                    }
                                    if (n = jt(n.nextSibling),
                                    n === null) {
                                        n = null;
                                        break t
                                    }
                                }
                                u = n.data,
                                n = u === "F!" || u === "F" ? n : null
                            }
                            if (n) {
                                Te = jt(n.nextSibling),
                                a = n.data === "F!";
                                break e
                            }
                        }
                        Ul(a)
                    }
                    a = !1
                }
                a && (t = l[0])
            }
        }
        return l = Ie(),
        l.memoizedState = l.baseState = t,
        a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: vf,
            lastRenderedState: t
        },
        l.queue = a,
        l = qf.bind(null, le, a),
        a.dispatch = l,
        a = yc(!1),
        u = Sc.bind(null, le, !1, a.queue),
        a = Ie(),
        n = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        a.queue = n,
        l = Um.bind(null, le, n, u, l),
        n.dispatch = l,
        a.memoizedState = e,
        [t, l, !1]
    }
    function xf(e) {
        var t = De();
        return bf(t, he, e)
    }
    function bf(e, t, l) {
        if (t = hc(e, t, vf)[0],
        e = gu(Lt)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var a = un(t)
            } catch (c) {
                throw c === Ia ? fu : c
            }
        else
            a = t;
        t = De();
        var n = t.queue
          , u = n.dispatch;
        return l !== t.memoizedState && (le.flags |= 2048,
        ma(9, vu(), Cm.bind(null, n, l), null)),
        [a, u, e]
    }
    function Cm(e, t) {
        e.action = t
    }
    function Sf(e) {
        var t = De()
          , l = he;
        if (l !== null)
            return bf(t, l, e);
        De(),
        t = t.memoizedState,
        l = De();
        var a = l.queue.dispatch;
        return l.memoizedState = e,
        [t, a, !1]
    }
    function ma(e, t, l, a) {
        return e = {
            tag: e,
            create: l,
            deps: a,
            inst: t,
            next: null
        },
        t = le.updateQueue,
        t === null && (t = oc(),
        le.updateQueue = t),
        l = t.lastEffect,
        l === null ? t.lastEffect = e.next = e : (a = l.next,
        l.next = e,
        e.next = a,
        t.lastEffect = e),
        e
    }
    function vu() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }
    function Ef() {
        return De().memoizedState
    }
    function pu(e, t, l, a) {
        var n = Ie();
        a = a === void 0 ? null : a,
        le.flags |= e,
        n.memoizedState = ma(1 | t, vu(), l, a)
    }
    function cn(e, t, l, a) {
        var n = De();
        a = a === void 0 ? null : a;
        var u = n.memoizedState.inst;
        he !== null && a !== null && ic(a, he.memoizedState.deps) ? n.memoizedState = ma(t, u, l, a) : (le.flags |= e,
        n.memoizedState = ma(1 | t, u, l, a))
    }
    function Nf(e, t) {
        pu(8390656, 8, e, t)
    }
    function jf(e, t) {
        cn(2048, 8, e, t)
    }
    function wf(e, t) {
        return cn(4, 2, e, t)
    }
    function Tf(e, t) {
        return cn(4, 4, e, t)
    }
    function Af(e, t) {
        if (typeof t == "function") {
            e = e();
            var l = t(e);
            return function() {
                typeof l == "function" ? l() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function Rf(e, t, l) {
        l = l != null ? l.concat([e]) : null,
        cn(4, 4, Af.bind(null, t, e), l)
    }
    function vc() {}
    function zf(e, t) {
        var l = De();
        t = t === void 0 ? null : t;
        var a = l.memoizedState;
        return t !== null && ic(t, a[1]) ? a[0] : (l.memoizedState = [e, t],
        e)
    }
    function Mf(e, t) {
        var l = De();
        t = t === void 0 ? null : t;
        var a = l.memoizedState;
        if (t !== null && ic(t, a[1]))
            return a[0];
        if (a = e(),
        Bl) {
            It(!0);
            try {
                e()
            } finally {
                It(!1)
            }
        }
        return l.memoizedState = [a, t],
        a
    }
    function pc(e, t, l) {
        return l === void 0 || (il & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l,
        e = Uo(),
        le.lanes |= e,
        hl |= e,
        l)
    }
    function _f(e, t, l, a) {
        return ut(l, t) ? l : oa.current !== null ? (e = pc(e, l, a),
        ut(e, t) || (Be = !0),
        e) : (il & 42) === 0 ? (Be = !0,
        e.memoizedState = l) : (e = Uo(),
        le.lanes |= e,
        hl |= e,
        t)
    }
    function Of(e, t, l, a, n) {
        var u = Y.p;
        Y.p = u !== 0 && 8 > u ? u : 8;
        var c = z.T
          , r = {};
        z.T = r,
        Sc(e, !1, t, l);
        try {
            var m = n()
              , E = z.S;
            if (E !== null && E(r, m),
            m !== null && typeof m == "object" && typeof m.then == "function") {
                var R = _m(m, a);
                sn(e, t, R, ft(e))
            } else
                sn(e, t, a, ft(e))
        } catch (O) {
            sn(e, t, {
                then: function() {},
                status: "rejected",
                reason: O
            }, ft())
        } finally {
            Y.p = u,
            z.T = c
        }
    }
    function Hm() {}
    function xc(e, t, l, a) {
        if (e.tag !== 5)
            throw Error(f(476));
        var n = Df(e).queue;
        Of(e, n, t, W, l === null ? Hm : function() {
            return Uf(e),
            l(a)
        }
        )
    }
    function Df(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: W,
            baseState: W,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Lt,
                lastRenderedState: W
            },
            next: null
        };
        var l = {};
        return t.next = {
            memoizedState: l,
            baseState: l,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Lt,
                lastRenderedState: l
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function Uf(e) {
        var t = Df(e).next.queue;
        sn(e, t, {}, ft())
    }
    function bc() {
        return ke(Tn)
    }
    function Cf() {
        return De().memoizedState
    }
    function Hf() {
        return De().memoizedState
    }
    function qm(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var l = ft();
                e = nl(l);
                var a = ul(t, e, l);
                a !== null && (ot(a, t, l),
                tn(a, t, l)),
                t = {
                    cache: Wi()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function Bm(e, t, l) {
        var a = ft();
        l = {
            lane: a,
            revertLane: 0,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        xu(e) ? Bf(t, l) : (l = Li(e, t, l, a),
        l !== null && (ot(l, e, a),
        Yf(l, t, a)))
    }
    function qf(e, t, l) {
        var a = ft();
        sn(e, t, l, a)
    }
    function sn(e, t, l, a) {
        var n = {
            lane: a,
            revertLane: 0,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (xu(e))
            Bf(t, n);
        else {
            var u = e.alternate;
            if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer,
            u !== null))
                try {
                    var c = t.lastRenderedState
                      , r = u(c, l);
                    if (n.hasEagerState = !0,
                    n.eagerState = r,
                    ut(r, c))
                        return lu(e, t, n, 0),
                        pe === null && tu(),
                        !1
                } catch {} finally {}
            if (l = Li(e, t, n, a),
            l !== null)
                return ot(l, e, a),
                Yf(l, t, a),
                !0
        }
        return !1
    }
    function Sc(e, t, l, a) {
        if (a = {
            lane: 2,
            revertLane: Ic(),
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        xu(e)) {
            if (t)
                throw Error(f(479))
        } else
            t = Li(e, l, a, 2),
            t !== null && ot(t, e, 2)
    }
    function xu(e) {
        var t = e.alternate;
        return e === le || t !== null && t === le
    }
    function Bf(e, t) {
        da = hu = !0;
        var l = e.pending;
        l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        e.pending = t
    }
    function Yf(e, t, l) {
        if ((l & 4194048) !== 0) {
            var a = t.lanes;
            a &= e.pendingLanes,
            l |= a,
            t.lanes = l,
            Ks(e, l)
        }
    }
    var bu = {
        readContext: ke,
        use: yu,
        useCallback: ze,
        useContext: ze,
        useEffect: ze,
        useImperativeHandle: ze,
        useLayoutEffect: ze,
        useInsertionEffect: ze,
        useMemo: ze,
        useReducer: ze,
        useRef: ze,
        useState: ze,
        useDebugValue: ze,
        useDeferredValue: ze,
        useTransition: ze,
        useSyncExternalStore: ze,
        useId: ze,
        useHostTransitionStatus: ze,
        useFormState: ze,
        useActionState: ze,
        useOptimistic: ze,
        useMemoCache: ze,
        useCacheRefresh: ze
    }
      , Lf = {
        readContext: ke,
        use: yu,
        useCallback: function(e, t) {
            return Ie().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: ke,
        useEffect: Nf,
        useImperativeHandle: function(e, t, l) {
            l = l != null ? l.concat([e]) : null,
            pu(4194308, 4, Af.bind(null, t, e), l)
        },
        useLayoutEffect: function(e, t) {
            return pu(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            pu(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var l = Ie();
            t = t === void 0 ? null : t;
            var a = e();
            if (Bl) {
                It(!0);
                try {
                    e()
                } finally {
                    It(!1)
                }
            }
            return l.memoizedState = [a, t],
            a
        },
        useReducer: function(e, t, l) {
            var a = Ie();
            if (l !== void 0) {
                var n = l(t);
                if (Bl) {
                    It(!0);
                    try {
                        l(t)
                    } finally {
                        It(!1)
                    }
                }
            } else
                n = t;
            return a.memoizedState = a.baseState = n,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: n
            },
            a.queue = e,
            e = e.dispatch = Bm.bind(null, le, e),
            [a.memoizedState, e]
        },
        useRef: function(e) {
            var t = Ie();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = yc(e);
            var t = e.queue
              , l = qf.bind(null, le, t);
            return t.dispatch = l,
            [e.memoizedState, l]
        },
        useDebugValue: vc,
        useDeferredValue: function(e, t) {
            var l = Ie();
            return pc(l, e, t)
        },
        useTransition: function() {
            var e = yc(!1);
            return e = Of.bind(null, le, e.queue, !0, !1),
            Ie().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, l) {
            var a = le
              , n = Ie();
            if (fe) {
                if (l === void 0)
                    throw Error(f(407));
                l = l()
            } else {
                if (l = t(),
                pe === null)
                    throw Error(f(349));
                (ie & 124) !== 0 || cf(a, t, l)
            }
            n.memoizedState = l;
            var u = {
                value: l,
                getSnapshot: t
            };
            return n.queue = u,
            Nf(rf.bind(null, a, u, e), [e]),
            a.flags |= 2048,
            ma(9, vu(), sf.bind(null, a, u, l, t), null),
            l
        },
        useId: function() {
            var e = Ie()
              , t = pe.identifierPrefix;
            if (fe) {
                var l = qt
                  , a = Ht;
                l = (a & ~(1 << 32 - nt(a) - 1)).toString(32) + l,
                t = "«" + t + "R" + l,
                l = mu++,
                0 < l && (t += "H" + l.toString(32)),
                t += "»"
            } else
                l = Om++,
                t = "«" + t + "r" + l.toString(32) + "»";
            return e.memoizedState = t
        },
        useHostTransitionStatus: bc,
        useFormState: pf,
        useActionState: pf,
        useOptimistic: function(e) {
            var t = Ie();
            t.memoizedState = t.baseState = e;
            var l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = l,
            t = Sc.bind(null, le, !0, l),
            l.dispatch = t,
            [e, t]
        },
        useMemoCache: dc,
        useCacheRefresh: function() {
            return Ie().memoizedState = qm.bind(null, le)
        }
    }
      , Gf = {
        readContext: ke,
        use: yu,
        useCallback: zf,
        useContext: ke,
        useEffect: jf,
        useImperativeHandle: Rf,
        useInsertionEffect: wf,
        useLayoutEffect: Tf,
        useMemo: Mf,
        useReducer: gu,
        useRef: Ef,
        useState: function() {
            return gu(Lt)
        },
        useDebugValue: vc,
        useDeferredValue: function(e, t) {
            var l = De();
            return _f(l, he.memoizedState, e, t)
        },
        useTransition: function() {
            var e = gu(Lt)[0]
              , t = De().memoizedState;
            return [typeof e == "boolean" ? e : un(e), t]
        },
        useSyncExternalStore: uf,
        useId: Cf,
        useHostTransitionStatus: bc,
        useFormState: xf,
        useActionState: xf,
        useOptimistic: function(e, t) {
            var l = De();
            return df(l, he, e, t)
        },
        useMemoCache: dc,
        useCacheRefresh: Hf
    }
      , Ym = {
        readContext: ke,
        use: yu,
        useCallback: zf,
        useContext: ke,
        useEffect: jf,
        useImperativeHandle: Rf,
        useInsertionEffect: wf,
        useLayoutEffect: Tf,
        useMemo: Mf,
        useReducer: mc,
        useRef: Ef,
        useState: function() {
            return mc(Lt)
        },
        useDebugValue: vc,
        useDeferredValue: function(e, t) {
            var l = De();
            return he === null ? pc(l, e, t) : _f(l, he.memoizedState, e, t)
        },
        useTransition: function() {
            var e = mc(Lt)[0]
              , t = De().memoizedState;
            return [typeof e == "boolean" ? e : un(e), t]
        },
        useSyncExternalStore: uf,
        useId: Cf,
        useHostTransitionStatus: bc,
        useFormState: Sf,
        useActionState: Sf,
        useOptimistic: function(e, t) {
            var l = De();
            return he !== null ? df(l, he, e, t) : (l.baseState = e,
            [e, l.queue.dispatch])
        },
        useMemoCache: dc,
        useCacheRefresh: Hf
    }
      , ya = null
      , rn = 0;
    function Su(e) {
        var t = rn;
        return rn += 1,
        ya === null && (ya = []),
        Fr(ya, e, t)
    }
    function fn(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function Eu(e, t) {
        throw t.$$typeof === H ? Error(f(525)) : (e = Object.prototype.toString.call(t),
        Error(f(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function Xf(e) {
        var t = e._init;
        return t(e._payload)
    }
    function Qf(e) {
        function t(b, p) {
            if (e) {
                var S = b.deletions;
                S === null ? (b.deletions = [p],
                b.flags |= 16) : S.push(p)
            }
        }
        function l(b, p) {
            if (!e)
                return null;
            for (; p !== null; )
                t(b, p),
                p = p.sibling;
            return null
        }
        function a(b) {
            for (var p = new Map; b !== null; )
                b.key !== null ? p.set(b.key, b) : p.set(b.index, b),
                b = b.sibling;
            return p
        }
        function n(b, p) {
            return b = Ct(b, p),
            b.index = 0,
            b.sibling = null,
            b
        }
        function u(b, p, S) {
            return b.index = S,
            e ? (S = b.alternate,
            S !== null ? (S = S.index,
            S < p ? (b.flags |= 67108866,
            p) : S) : (b.flags |= 67108866,
            p)) : (b.flags |= 1048576,
            p)
        }
        function c(b) {
            return e && b.alternate === null && (b.flags |= 67108866),
            b
        }
        function r(b, p, S, _) {
            return p === null || p.tag !== 6 ? (p = Xi(S, b.mode, _),
            p.return = b,
            p) : (p = n(p, S),
            p.return = b,
            p)
        }
        function m(b, p, S, _) {
            var X = S.type;
            return X === C ? R(b, p, S.props.children, _, S.key) : p !== null && (p.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Re && Xf(X) === p.type) ? (p = n(p, S.props),
            fn(p, S),
            p.return = b,
            p) : (p = nu(S.type, S.key, S.props, null, b.mode, _),
            fn(p, S),
            p.return = b,
            p)
        }
        function E(b, p, S, _) {
            return p === null || p.tag !== 4 || p.stateNode.containerInfo !== S.containerInfo || p.stateNode.implementation !== S.implementation ? (p = Qi(S, b.mode, _),
            p.return = b,
            p) : (p = n(p, S.children || []),
            p.return = b,
            p)
        }
        function R(b, p, S, _, X) {
            return p === null || p.tag !== 7 ? (p = Ml(S, b.mode, _, X),
            p.return = b,
            p) : (p = n(p, S),
            p.return = b,
            p)
        }
        function O(b, p, S) {
            if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
                return p = Xi("" + p, b.mode, S),
                p.return = b,
                p;
            if (typeof p == "object" && p !== null) {
                switch (p.$$typeof) {
                case D:
                    return S = nu(p.type, p.key, p.props, null, b.mode, S),
                    fn(S, p),
                    S.return = b,
                    S;
                case Q:
                    return p = Qi(p, b.mode, S),
                    p.return = b,
                    p;
                case Re:
                    var _ = p._init;
                    return p = _(p._payload),
                    O(b, p, S)
                }
                if (Ve(p) || Ze(p))
                    return p = Ml(p, b.mode, S, null),
                    p.return = b,
                    p;
                if (typeof p.then == "function")
                    return O(b, Su(p), S);
                if (p.$$typeof === P)
                    return O(b, su(b, p), S);
                Eu(b, p)
            }
            return null
        }
        function N(b, p, S, _) {
            var X = p !== null ? p.key : null;
            if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
                return X !== null ? null : r(b, p, "" + S, _);
            if (typeof S == "object" && S !== null) {
                switch (S.$$typeof) {
                case D:
                    return S.key === X ? m(b, p, S, _) : null;
                case Q:
                    return S.key === X ? E(b, p, S, _) : null;
                case Re:
                    return X = S._init,
                    S = X(S._payload),
                    N(b, p, S, _)
                }
                if (Ve(S) || Ze(S))
                    return X !== null ? null : R(b, p, S, _, null);
                if (typeof S.then == "function")
                    return N(b, p, Su(S), _);
                if (S.$$typeof === P)
                    return N(b, p, su(b, S), _);
                Eu(b, S)
            }
            return null
        }
        function j(b, p, S, _, X) {
            if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
                return b = b.get(S) || null,
                r(p, b, "" + _, X);
            if (typeof _ == "object" && _ !== null) {
                switch (_.$$typeof) {
                case D:
                    return b = b.get(_.key === null ? S : _.key) || null,
                    m(p, b, _, X);
                case Q:
                    return b = b.get(_.key === null ? S : _.key) || null,
                    E(p, b, _, X);
                case Re:
                    var ae = _._init;
                    return _ = ae(_._payload),
                    j(b, p, S, _, X)
                }
                if (Ve(_) || Ze(_))
                    return b = b.get(S) || null,
                    R(p, b, _, X, null);
                if (typeof _.then == "function")
                    return j(b, p, S, Su(_), X);
                if (_.$$typeof === P)
                    return j(b, p, S, su(p, _), X);
                Eu(p, _)
            }
            return null
        }
        function F(b, p, S, _) {
            for (var X = null, ae = null, K = p, $ = p = 0, Le = null; K !== null && $ < S.length; $++) {
                K.index > $ ? (Le = K,
                K = null) : Le = K.sibling;
                var re = N(b, K, S[$], _);
                if (re === null) {
                    K === null && (K = Le);
                    break
                }
                e && K && re.alternate === null && t(b, K),
                p = u(re, p, $),
                ae === null ? X = re : ae.sibling = re,
                ae = re,
                K = Le
            }
            if ($ === S.length)
                return l(b, K),
                fe && Ol(b, $),
                X;
            if (K === null) {
                for (; $ < S.length; $++)
                    K = O(b, S[$], _),
                    K !== null && (p = u(K, p, $),
                    ae === null ? X = K : ae.sibling = K,
                    ae = K);
                return fe && Ol(b, $),
                X
            }
            for (K = a(K); $ < S.length; $++)
                Le = j(K, b, $, S[$], _),
                Le !== null && (e && Le.alternate !== null && K.delete(Le.key === null ? $ : Le.key),
                p = u(Le, p, $),
                ae === null ? X = Le : ae.sibling = Le,
                ae = Le);
            return e && K.forEach(function(El) {
                return t(b, El)
            }),
            fe && Ol(b, $),
            X
        }
        function J(b, p, S, _) {
            if (S == null)
                throw Error(f(151));
            for (var X = null, ae = null, K = p, $ = p = 0, Le = null, re = S.next(); K !== null && !re.done; $++,
            re = S.next()) {
                K.index > $ ? (Le = K,
                K = null) : Le = K.sibling;
                var El = N(b, K, re.value, _);
                if (El === null) {
                    K === null && (K = Le);
                    break
                }
                e && K && El.alternate === null && t(b, K),
                p = u(El, p, $),
                ae === null ? X = El : ae.sibling = El,
                ae = El,
                K = Le
            }
            if (re.done)
                return l(b, K),
                fe && Ol(b, $),
                X;
            if (K === null) {
                for (; !re.done; $++,
                re = S.next())
                    re = O(b, re.value, _),
                    re !== null && (p = u(re, p, $),
                    ae === null ? X = re : ae.sibling = re,
                    ae = re);
                return fe && Ol(b, $),
                X
            }
            for (K = a(K); !re.done; $++,
            re = S.next())
                re = j(K, b, $, re.value, _),
                re !== null && (e && re.alternate !== null && K.delete(re.key === null ? $ : re.key),
                p = u(re, p, $),
                ae === null ? X = re : ae.sibling = re,
                ae = re);
            return e && K.forEach(function(L0) {
                return t(b, L0)
            }),
            fe && Ol(b, $),
            X
        }
        function ye(b, p, S, _) {
            if (typeof S == "object" && S !== null && S.type === C && S.key === null && (S = S.props.children),
            typeof S == "object" && S !== null) {
                switch (S.$$typeof) {
                case D:
                    e: {
                        for (var X = S.key; p !== null; ) {
                            if (p.key === X) {
                                if (X = S.type,
                                X === C) {
                                    if (p.tag === 7) {
                                        l(b, p.sibling),
                                        _ = n(p, S.props.children),
                                        _.return = b,
                                        b = _;
                                        break e
                                    }
                                } else if (p.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Re && Xf(X) === p.type) {
                                    l(b, p.sibling),
                                    _ = n(p, S.props),
                                    fn(_, S),
                                    _.return = b,
                                    b = _;
                                    break e
                                }
                                l(b, p);
                                break
                            } else
                                t(b, p);
                            p = p.sibling
                        }
                        S.type === C ? (_ = Ml(S.props.children, b.mode, _, S.key),
                        _.return = b,
                        b = _) : (_ = nu(S.type, S.key, S.props, null, b.mode, _),
                        fn(_, S),
                        _.return = b,
                        b = _)
                    }
                    return c(b);
                case Q:
                    e: {
                        for (X = S.key; p !== null; ) {
                            if (p.key === X)
                                if (p.tag === 4 && p.stateNode.containerInfo === S.containerInfo && p.stateNode.implementation === S.implementation) {
                                    l(b, p.sibling),
                                    _ = n(p, S.children || []),
                                    _.return = b,
                                    b = _;
                                    break e
                                } else {
                                    l(b, p);
                                    break
                                }
                            else
                                t(b, p);
                            p = p.sibling
                        }
                        _ = Qi(S, b.mode, _),
                        _.return = b,
                        b = _
                    }
                    return c(b);
                case Re:
                    return X = S._init,
                    S = X(S._payload),
                    ye(b, p, S, _)
                }
                if (Ve(S))
                    return F(b, p, S, _);
                if (Ze(S)) {
                    if (X = Ze(S),
                    typeof X != "function")
                        throw Error(f(150));
                    return S = X.call(S),
                    J(b, p, S, _)
                }
                if (typeof S.then == "function")
                    return ye(b, p, Su(S), _);
                if (S.$$typeof === P)
                    return ye(b, p, su(b, S), _);
                Eu(b, S)
            }
            return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S,
            p !== null && p.tag === 6 ? (l(b, p.sibling),
            _ = n(p, S),
            _.return = b,
            b = _) : (l(b, p),
            _ = Xi(S, b.mode, _),
            _.return = b,
            b = _),
            c(b)) : l(b, p)
        }
        return function(b, p, S, _) {
            try {
                rn = 0;
                var X = ye(b, p, S, _);
                return ya = null,
                X
            } catch (K) {
                if (K === Ia || K === fu)
                    throw K;
                var ae = it(29, K, null, b.mode);
                return ae.lanes = _,
                ae.return = b,
                ae
            } finally {}
        }
    }
    var ga = Qf(!0)
      , Zf = Qf(!1)
      , xt = U(null)
      , At = null;
    function cl(e) {
        var t = e.alternate;
        B(He, He.current & 1),
        B(xt, e),
        At === null && (t === null || oa.current !== null || t.memoizedState !== null) && (At = e)
    }
    function Vf(e) {
        if (e.tag === 22) {
            if (B(He, He.current),
            B(xt, e),
            At === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (At = e)
            }
        } else
            sl()
    }
    function sl() {
        B(He, He.current),
        B(xt, xt.current)
    }
    function Gt(e) {
        L(xt),
        At === e && (At = null),
        L(He)
    }
    var He = U(0);
    function Nu(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var l = t.memoizedState;
                if (l !== null && (l = l.dehydrated,
                l === null || l.data === "$?" || os(l)))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    function Ec(e, t, l, a) {
        t = e.memoizedState,
        l = l(a, t),
        l = l == null ? t : T({}, t, l),
        e.memoizedState = l,
        e.lanes === 0 && (e.updateQueue.baseState = l)
    }
    var Nc = {
        enqueueSetState: function(e, t, l) {
            e = e._reactInternals;
            var a = ft()
              , n = nl(a);
            n.payload = t,
            l != null && (n.callback = l),
            t = ul(e, n, a),
            t !== null && (ot(t, e, a),
            tn(t, e, a))
        },
        enqueueReplaceState: function(e, t, l) {
            e = e._reactInternals;
            var a = ft()
              , n = nl(a);
            n.tag = 1,
            n.payload = t,
            l != null && (n.callback = l),
            t = ul(e, n, a),
            t !== null && (ot(t, e, a),
            tn(t, e, a))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var l = ft()
              , a = nl(l);
            a.tag = 2,
            t != null && (a.callback = t),
            t = ul(e, a, l),
            t !== null && (ot(t, e, l),
            tn(t, e, l))
        }
    };
    function Kf(e, t, l, a, n, u, c) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, c) : t.prototype && t.prototype.isPureReactComponent ? !Va(l, a) || !Va(n, u) : !0
    }
    function kf(e, t, l, a) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a),
        t.state !== e && Nc.enqueueReplaceState(t, t.state, null)
    }
    function Yl(e, t) {
        var l = t;
        if ("ref"in t) {
            l = {};
            for (var a in t)
                a !== "ref" && (l[a] = t[a])
        }
        if (e = e.defaultProps) {
            l === t && (l = T({}, l));
            for (var n in e)
                l[n] === void 0 && (l[n] = e[n])
        }
        return l
    }
    var ju = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
    ;
    function Jf(e) {
        ju(e)
    }
    function $f(e) {
        console.error(e)
    }
    function Wf(e) {
        ju(e)
    }
    function wu(e, t) {
        try {
            var l = e.onUncaughtError;
            l(t.value, {
                componentStack: t.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    function Ff(e, t, l) {
        try {
            var a = e.onCaughtError;
            a(l.value, {
                componentStack: l.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    function jc(e, t, l) {
        return l = nl(l),
        l.tag = 3,
        l.payload = {
            element: null
        },
        l.callback = function() {
            wu(e, t)
        }
        ,
        l
    }
    function Pf(e) {
        return e = nl(e),
        e.tag = 3,
        e
    }
    function If(e, t, l, a) {
        var n = l.type.getDerivedStateFromError;
        if (typeof n == "function") {
            var u = a.value;
            e.payload = function() {
                return n(u)
            }
            ,
            e.callback = function() {
                Ff(t, l, a)
            }
        }
        var c = l.stateNode;
        c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
            Ff(t, l, a),
            typeof n != "function" && (ml === null ? ml = new Set([this]) : ml.add(this));
            var r = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: r !== null ? r : ""
            })
        }
        )
    }
    function Lm(e, t, l, a, n) {
        if (l.flags |= 32768,
        a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = l.alternate,
            t !== null && Wa(t, l, n, !0),
            l = xt.current,
            l !== null) {
                switch (l.tag) {
                case 13:
                    return At === null ? Jc() : l.alternate === null && Ae === 0 && (Ae = 3),
                    l.flags &= -257,
                    l.flags |= 65536,
                    l.lanes = n,
                    a === Ii ? l.flags |= 16384 : (t = l.updateQueue,
                    t === null ? l.updateQueue = new Set([a]) : t.add(a),
                    Wc(e, a, n)),
                    !1;
                case 22:
                    return l.flags |= 65536,
                    a === Ii ? l.flags |= 16384 : (t = l.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a])
                    },
                    l.updateQueue = t) : (l = t.retryQueue,
                    l === null ? t.retryQueue = new Set([a]) : l.add(a)),
                    Wc(e, a, n)),
                    !1
                }
                throw Error(f(435, l.tag))
            }
            return Wc(e, a, n),
            Jc(),
            !1
        }
        if (fe)
            return t = xt.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = n,
            a !== Ki && (e = Error(f(422), {
                cause: a
            }),
            $a(yt(e, l)))) : (a !== Ki && (t = Error(f(423), {
                cause: a
            }),
            $a(yt(t, l))),
            e = e.current.alternate,
            e.flags |= 65536,
            n &= -n,
            e.lanes |= n,
            a = yt(a, l),
            n = jc(e.stateNode, a, n),
            lc(e, n),
            Ae !== 4 && (Ae = 2)),
            !1;
        var u = Error(f(520), {
            cause: a
        });
        if (u = yt(u, l),
        vn === null ? vn = [u] : vn.push(u),
        Ae !== 4 && (Ae = 2),
        t === null)
            return !0;
        a = yt(a, l),
        l = t;
        do {
            switch (l.tag) {
            case 3:
                return l.flags |= 65536,
                e = n & -n,
                l.lanes |= e,
                e = jc(l.stateNode, a, e),
                lc(l, e),
                !1;
            case 1:
                if (t = l.type,
                u = l.stateNode,
                (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (ml === null || !ml.has(u))))
                    return l.flags |= 65536,
                    n &= -n,
                    l.lanes |= n,
                    n = Pf(n),
                    If(n, e, l, a),
                    lc(l, n),
                    !1
            }
            l = l.return
        } while (l !== null);
        return !1
    }
    var eo = Error(f(461))
      , Be = !1;
    function Ge(e, t, l, a) {
        t.child = e === null ? Zf(t, null, l, a) : ga(t, e.child, l, a)
    }
    function to(e, t, l, a, n) {
        l = l.render;
        var u = t.ref;
        if ("ref"in a) {
            var c = {};
            for (var r in a)
                r !== "ref" && (c[r] = a[r])
        } else
            c = a;
        return Hl(t),
        a = cc(e, t, l, c, u, n),
        r = sc(),
        e !== null && !Be ? (rc(e, t, n),
        Xt(e, t, n)) : (fe && r && Zi(t),
        t.flags |= 1,
        Ge(e, t, a, n),
        t.child)
    }
    function lo(e, t, l, a, n) {
        if (e === null) {
            var u = l.type;
            return typeof u == "function" && !Gi(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15,
            t.type = u,
            ao(e, t, u, a, n)) : (e = nu(l.type, null, a, t, t.mode, n),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (u = e.child,
        !Oc(e, n)) {
            var c = u.memoizedProps;
            if (l = l.compare,
            l = l !== null ? l : Va,
            l(c, a) && e.ref === t.ref)
                return Xt(e, t, n)
        }
        return t.flags |= 1,
        e = Ct(u, a),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function ao(e, t, l, a, n) {
        if (e !== null) {
            var u = e.memoizedProps;
            if (Va(u, a) && e.ref === t.ref)
                if (Be = !1,
                t.pendingProps = a = u,
                Oc(e, n))
                    (e.flags & 131072) !== 0 && (Be = !0);
                else
                    return t.lanes = e.lanes,
                    Xt(e, t, n)
        }
        return wc(e, t, l, a, n)
    }
    function no(e, t, l) {
        var a = t.pendingProps
          , n = a.children
          , u = e !== null ? e.memoizedState : null;
        if (a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (a = u !== null ? u.baseLanes | l : l,
                e !== null) {
                    for (n = t.child = e.child,
                    u = 0; n !== null; )
                        u = u | n.lanes | n.childLanes,
                        n = n.sibling;
                    t.childLanes = u & ~a
                } else
                    t.childLanes = 0,
                    t.child = null;
                return uo(e, t, a, l)
            }
            if ((l & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && ru(t, u !== null ? u.cachePool : null),
                u !== null ? lf(t, u) : nc(),
                Vf(t);
            else
                return t.lanes = t.childLanes = 536870912,
                uo(e, t, u !== null ? u.baseLanes | l : l, l)
        } else
            u !== null ? (ru(t, u.cachePool),
            lf(t, u),
            sl(),
            t.memoizedState = null) : (e !== null && ru(t, null),
            nc(),
            sl());
        return Ge(e, t, n, l),
        t.child
    }
    function uo(e, t, l, a) {
        var n = Pi();
        return n = n === null ? null : {
            parent: Ce._currentValue,
            pool: n
        },
        t.memoizedState = {
            baseLanes: l,
            cachePool: n
        },
        e !== null && ru(t, null),
        nc(),
        Vf(t),
        e !== null && Wa(e, t, a, !0),
        null
    }
    function Tu(e, t) {
        var l = t.ref;
        if (l === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof l != "function" && typeof l != "object")
                throw Error(f(284));
            (e === null || e.ref !== l) && (t.flags |= 4194816)
        }
    }
    function wc(e, t, l, a, n) {
        return Hl(t),
        l = cc(e, t, l, a, void 0, n),
        a = sc(),
        e !== null && !Be ? (rc(e, t, n),
        Xt(e, t, n)) : (fe && a && Zi(t),
        t.flags |= 1,
        Ge(e, t, l, n),
        t.child)
    }
    function io(e, t, l, a, n, u) {
        return Hl(t),
        t.updateQueue = null,
        l = nf(t, a, l, n),
        af(e),
        a = sc(),
        e !== null && !Be ? (rc(e, t, u),
        Xt(e, t, u)) : (fe && a && Zi(t),
        t.flags |= 1,
        Ge(e, t, l, u),
        t.child)
    }
    function co(e, t, l, a, n) {
        if (Hl(t),
        t.stateNode === null) {
            var u = ia
              , c = l.contextType;
            typeof c == "object" && c !== null && (u = ke(c)),
            u = new l(a,u),
            t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            u.updater = Nc,
            t.stateNode = u,
            u._reactInternals = t,
            u = t.stateNode,
            u.props = a,
            u.state = t.memoizedState,
            u.refs = {},
            ec(t),
            c = l.contextType,
            u.context = typeof c == "object" && c !== null ? ke(c) : ia,
            u.state = t.memoizedState,
            c = l.getDerivedStateFromProps,
            typeof c == "function" && (Ec(t, l, c, a),
            u.state = t.memoizedState),
            typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state,
            typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
            c !== u.state && Nc.enqueueReplaceState(u, u.state, null),
            an(t, a, u, n),
            ln(),
            u.state = t.memoizedState),
            typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            a = !0
        } else if (e === null) {
            u = t.stateNode;
            var r = t.memoizedProps
              , m = Yl(l, r);
            u.props = m;
            var E = u.context
              , R = l.contextType;
            c = ia,
            typeof R == "object" && R !== null && (c = ke(R));
            var O = l.getDerivedStateFromProps;
            R = typeof O == "function" || typeof u.getSnapshotBeforeUpdate == "function",
            r = t.pendingProps !== r,
            R || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (r || E !== c) && kf(t, u, a, c),
            al = !1;
            var N = t.memoizedState;
            u.state = N,
            an(t, a, u, n),
            ln(),
            E = t.memoizedState,
            r || N !== E || al ? (typeof O == "function" && (Ec(t, l, O, a),
            E = t.memoizedState),
            (m = al || Kf(t, l, m, a, N, E, c)) ? (R || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = a,
            t.memoizedState = E),
            u.props = a,
            u.state = E,
            u.context = c,
            a = m) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            a = !1)
        } else {
            u = t.stateNode,
            tc(e, t),
            c = t.memoizedProps,
            R = Yl(l, c),
            u.props = R,
            O = t.pendingProps,
            N = u.context,
            E = l.contextType,
            m = ia,
            typeof E == "object" && E !== null && (m = ke(E)),
            r = l.getDerivedStateFromProps,
            (E = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== O || N !== m) && kf(t, u, a, m),
            al = !1,
            N = t.memoizedState,
            u.state = N,
            an(t, a, u, n),
            ln();
            var j = t.memoizedState;
            c !== O || N !== j || al || e !== null && e.dependencies !== null && cu(e.dependencies) ? (typeof r == "function" && (Ec(t, l, r, a),
            j = t.memoizedState),
            (R = al || Kf(t, l, R, a, N, j, m) || e !== null && e.dependencies !== null && cu(e.dependencies)) ? (E || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, j, m),
            typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, j, m)),
            typeof u.componentDidUpdate == "function" && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && N === e.memoizedState || (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = a,
            t.memoizedState = j),
            u.props = a,
            u.state = j,
            u.context = m,
            a = R) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && N === e.memoizedState || (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024),
            a = !1)
        }
        return u = a,
        Tu(e, t),
        a = (t.flags & 128) !== 0,
        u || a ? (u = t.stateNode,
        l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(),
        t.flags |= 1,
        e !== null && a ? (t.child = ga(t, e.child, null, n),
        t.child = ga(t, null, l, n)) : Ge(e, t, l, n),
        t.memoizedState = u.state,
        e = t.child) : e = Xt(e, t, n),
        e
    }
    function so(e, t, l, a) {
        return Ja(),
        t.flags |= 256,
        Ge(e, t, l, a),
        t.child
    }
    var Tc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Ac(e) {
        return {
            baseLanes: e,
            cachePool: Jr()
        }
    }
    function Rc(e, t, l) {
        return e = e !== null ? e.childLanes & ~l : 0,
        t && (e |= bt),
        e
    }
    function ro(e, t, l) {
        var a = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, c;
        if ((c = u) || (c = e !== null && e.memoizedState === null ? !1 : (He.current & 2) !== 0),
        c && (n = !0,
        t.flags &= -129),
        c = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (fe) {
                if (n ? cl(t) : sl(),
                fe) {
                    var r = Te, m;
                    if (m = r) {
                        e: {
                            for (m = r,
                            r = Tt; m.nodeType !== 8; ) {
                                if (!r) {
                                    r = null;
                                    break e
                                }
                                if (m = jt(m.nextSibling),
                                m === null) {
                                    r = null;
                                    break e
                                }
                            }
                            r = m
                        }
                        r !== null ? (t.memoizedState = {
                            dehydrated: r,
                            treeContext: _l !== null ? {
                                id: Ht,
                                overflow: qt
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                        m = it(18, null, null, 0),
                        m.stateNode = r,
                        m.return = t,
                        t.child = m,
                        We = t,
                        Te = null,
                        m = !0) : m = !1
                    }
                    m || Ul(t)
                }
                if (r = t.memoizedState,
                r !== null && (r = r.dehydrated,
                r !== null))
                    return os(r) ? t.lanes = 32 : t.lanes = 536870912,
                    null;
                Gt(t)
            }
            return r = a.children,
            a = a.fallback,
            n ? (sl(),
            n = t.mode,
            r = Au({
                mode: "hidden",
                children: r
            }, n),
            a = Ml(a, n, l, null),
            r.return = t,
            a.return = t,
            r.sibling = a,
            t.child = r,
            n = t.child,
            n.memoizedState = Ac(l),
            n.childLanes = Rc(e, c, l),
            t.memoizedState = Tc,
            a) : (cl(t),
            zc(t, r))
        }
        if (m = e.memoizedState,
        m !== null && (r = m.dehydrated,
        r !== null)) {
            if (u)
                t.flags & 256 ? (cl(t),
                t.flags &= -257,
                t = Mc(e, t, l)) : t.memoizedState !== null ? (sl(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (sl(),
                n = a.fallback,
                r = t.mode,
                a = Au({
                    mode: "visible",
                    children: a.children
                }, r),
                n = Ml(n, r, l, null),
                n.flags |= 2,
                a.return = t,
                n.return = t,
                a.sibling = n,
                t.child = a,
                ga(t, e.child, null, l),
                a = t.child,
                a.memoizedState = Ac(l),
                a.childLanes = Rc(e, c, l),
                t.memoizedState = Tc,
                t = n);
            else if (cl(t),
            os(r)) {
                if (c = r.nextSibling && r.nextSibling.dataset,
                c)
                    var E = c.dgst;
                c = E,
                a = Error(f(419)),
                a.stack = "",
                a.digest = c,
                $a({
                    value: a,
                    source: null,
                    stack: null
                }),
                t = Mc(e, t, l)
            } else if (Be || Wa(e, t, l, !1),
            c = (l & e.childLanes) !== 0,
            Be || c) {
                if (c = pe,
                c !== null && (a = l & -l,
                a = (a & 42) !== 0 ? 1 : di(a),
                a = (a & (c.suspendedLanes | l)) !== 0 ? 0 : a,
                a !== 0 && a !== m.retryLane))
                    throw m.retryLane = a,
                    ua(e, a),
                    ot(c, e, a),
                    eo;
                r.data === "$?" || Jc(),
                t = Mc(e, t, l)
            } else
                r.data === "$?" ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = m.treeContext,
                Te = jt(r.nextSibling),
                We = t,
                fe = !0,
                Dl = null,
                Tt = !1,
                e !== null && (vt[pt++] = Ht,
                vt[pt++] = qt,
                vt[pt++] = _l,
                Ht = e.id,
                qt = e.overflow,
                _l = t),
                t = zc(t, a.children),
                t.flags |= 4096);
            return t
        }
        return n ? (sl(),
        n = a.fallback,
        r = t.mode,
        m = e.child,
        E = m.sibling,
        a = Ct(m, {
            mode: "hidden",
            children: a.children
        }),
        a.subtreeFlags = m.subtreeFlags & 65011712,
        E !== null ? n = Ct(E, n) : (n = Ml(n, r, l, null),
        n.flags |= 2),
        n.return = t,
        a.return = t,
        a.sibling = n,
        t.child = a,
        a = n,
        n = t.child,
        r = e.child.memoizedState,
        r === null ? r = Ac(l) : (m = r.cachePool,
        m !== null ? (E = Ce._currentValue,
        m = m.parent !== E ? {
            parent: E,
            pool: E
        } : m) : m = Jr(),
        r = {
            baseLanes: r.baseLanes | l,
            cachePool: m
        }),
        n.memoizedState = r,
        n.childLanes = Rc(e, c, l),
        t.memoizedState = Tc,
        a) : (cl(t),
        l = e.child,
        e = l.sibling,
        l = Ct(l, {
            mode: "visible",
            children: a.children
        }),
        l.return = t,
        l.sibling = null,
        e !== null && (c = t.deletions,
        c === null ? (t.deletions = [e],
        t.flags |= 16) : c.push(e)),
        t.child = l,
        t.memoizedState = null,
        l)
    }
    function zc(e, t) {
        return t = Au({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function Au(e, t) {
        return e = it(22, e, null, t),
        e.lanes = 0,
        e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        },
        e
    }
    function Mc(e, t, l) {
        return ga(t, e.child, null, l),
        e = zc(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function fo(e, t, l) {
        e.lanes |= t;
        var a = e.alternate;
        a !== null && (a.lanes |= t),
        Ji(e.return, t, l)
    }
    function _c(e, t, l, a, n) {
        var u = e.memoizedState;
        u === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: l,
            tailMode: n
        } : (u.isBackwards = t,
        u.rendering = null,
        u.renderingStartTime = 0,
        u.last = a,
        u.tail = l,
        u.tailMode = n)
    }
    function oo(e, t, l) {
        var a = t.pendingProps
          , n = a.revealOrder
          , u = a.tail;
        if (Ge(e, t, a.children, l),
        a = He.current,
        (a & 2) !== 0)
            a = a & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && fo(e, l, t);
                    else if (e.tag === 19)
                        fo(e, l, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            a &= 1
        }
        switch (B(He, a),
        n) {
        case "forwards":
            for (l = t.child,
            n = null; l !== null; )
                e = l.alternate,
                e !== null && Nu(e) === null && (n = l),
                l = l.sibling;
            l = n,
            l === null ? (n = t.child,
            t.child = null) : (n = l.sibling,
            l.sibling = null),
            _c(t, !1, n, l, u);
            break;
        case "backwards":
            for (l = null,
            n = t.child,
            t.child = null; n !== null; ) {
                if (e = n.alternate,
                e !== null && Nu(e) === null) {
                    t.child = n;
                    break
                }
                e = n.sibling,
                n.sibling = l,
                l = n,
                n = e
            }
            _c(t, !0, l, null, u);
            break;
        case "together":
            _c(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function Xt(e, t, l) {
        if (e !== null && (t.dependencies = e.dependencies),
        hl |= t.lanes,
        (l & t.childLanes) === 0)
            if (e !== null) {
                if (Wa(e, t, l, !1),
                (l & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(f(153));
        if (t.child !== null) {
            for (e = t.child,
            l = Ct(e, e.pendingProps),
            t.child = l,
            l.return = t; e.sibling !== null; )
                e = e.sibling,
                l = l.sibling = Ct(e, e.pendingProps),
                l.return = t;
            l.sibling = null
        }
        return t.child
    }
    function Oc(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && cu(e)))
    }
    function Gm(e, t, l) {
        switch (t.tag) {
        case 3:
            be(t, t.stateNode.containerInfo),
            ll(t, Ce, e.memoizedState.cache),
            Ja();
            break;
        case 27:
        case 5:
            ci(t);
            break;
        case 4:
            be(t, t.stateNode.containerInfo);
            break;
        case 10:
            ll(t, t.type, t.memoizedProps.value);
            break;
        case 13:
            var a = t.memoizedState;
            if (a !== null)
                return a.dehydrated !== null ? (cl(t),
                t.flags |= 128,
                null) : (l & t.child.childLanes) !== 0 ? ro(e, t, l) : (cl(t),
                e = Xt(e, t, l),
                e !== null ? e.sibling : null);
            cl(t);
            break;
        case 19:
            var n = (e.flags & 128) !== 0;
            if (a = (l & t.childLanes) !== 0,
            a || (Wa(e, t, l, !1),
            a = (l & t.childLanes) !== 0),
            n) {
                if (a)
                    return oo(e, t, l);
                t.flags |= 128
            }
            if (n = t.memoizedState,
            n !== null && (n.rendering = null,
            n.tail = null,
            n.lastEffect = null),
            B(He, He.current),
            a)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            no(e, t, l);
        case 24:
            ll(t, Ce, e.memoizedState.cache)
        }
        return Xt(e, t, l)
    }
    function ho(e, t, l) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                Be = !0;
            else {
                if (!Oc(e, l) && (t.flags & 128) === 0)
                    return Be = !1,
                    Gm(e, t, l);
                Be = (e.flags & 131072) !== 0
            }
        else
            Be = !1,
            fe && (t.flags & 1048576) !== 0 && Gr(t, iu, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            e: {
                e = t.pendingProps;
                var a = t.elementType
                  , n = a._init;
                if (a = n(a._payload),
                t.type = a,
                typeof a == "function")
                    Gi(a) ? (e = Yl(a, e),
                    t.tag = 1,
                    t = co(null, t, a, e, l)) : (t.tag = 0,
                    t = wc(null, t, a, e, l));
                else {
                    if (a != null) {
                        if (n = a.$$typeof,
                        n === ce) {
                            t.tag = 11,
                            t = to(null, t, a, e, l);
                            break e
                        } else if (n === we) {
                            t.tag = 14,
                            t = lo(null, t, a, e, l);
                            break e
                        }
                    }
                    throw t = jl(a) || a,
                    Error(f(306, t, ""))
                }
            }
            return t;
        case 0:
            return wc(e, t, t.type, t.pendingProps, l);
        case 1:
            return a = t.type,
            n = Yl(a, t.pendingProps),
            co(e, t, a, n, l);
        case 3:
            e: {
                if (be(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(f(387));
                a = t.pendingProps;
                var u = t.memoizedState;
                n = u.element,
                tc(e, t),
                an(t, a, null, l);
                var c = t.memoizedState;
                if (a = c.cache,
                ll(t, Ce, a),
                a !== u.cache && $i(t, [Ce], l, !0),
                ln(),
                a = c.element,
                u.isDehydrated)
                    if (u = {
                        element: a,
                        isDehydrated: !1,
                        cache: c.cache
                    },
                    t.updateQueue.baseState = u,
                    t.memoizedState = u,
                    t.flags & 256) {
                        t = so(e, t, a, l);
                        break e
                    } else if (a !== n) {
                        n = yt(Error(f(424)), t),
                        $a(n),
                        t = so(e, t, a, l);
                        break e
                    } else {
                        switch (e = t.stateNode.containerInfo,
                        e.nodeType) {
                        case 9:
                            e = e.body;
                            break;
                        default:
                            e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (Te = jt(e.firstChild),
                        We = t,
                        fe = !0,
                        Dl = null,
                        Tt = !0,
                        l = Zf(t, null, a, l),
                        t.child = l; l; )
                            l.flags = l.flags & -3 | 4096,
                            l = l.sibling
                    }
                else {
                    if (Ja(),
                    a === n) {
                        t = Xt(e, t, l);
                        break e
                    }
                    Ge(e, t, a, l)
                }
                t = t.child
            }
            return t;
        case 26:
            return Tu(e, t),
            e === null ? (l = vd(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : fe || (l = t.type,
            e = t.pendingProps,
            a = Gu(ee.current).createElement(l),
            a[Ke] = t,
            a[Fe] = e,
            Qe(a, l, e),
            qe(a),
            t.stateNode = a) : t.memoizedState = vd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return ci(t),
            e === null && fe && (a = t.stateNode = md(t.type, t.pendingProps, ee.current),
            We = t,
            Tt = !0,
            n = Te,
            vl(t.type) ? (ds = n,
            Te = jt(a.firstChild)) : Te = n),
            Ge(e, t, t.pendingProps.children, l),
            Tu(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && fe && ((n = a = Te) && (a = y0(a, t.type, t.pendingProps, Tt),
            a !== null ? (t.stateNode = a,
            We = t,
            Te = jt(a.firstChild),
            Tt = !1,
            n = !0) : n = !1),
            n || Ul(t)),
            ci(t),
            n = t.type,
            u = t.pendingProps,
            c = e !== null ? e.memoizedProps : null,
            a = u.children,
            ss(n, u) ? a = null : c !== null && ss(n, c) && (t.flags |= 32),
            t.memoizedState !== null && (n = cc(e, t, Dm, null, null, l),
            Tn._currentValue = n),
            Tu(e, t),
            Ge(e, t, a, l),
            t.child;
        case 6:
            return e === null && fe && ((e = l = Te) && (l = g0(l, t.pendingProps, Tt),
            l !== null ? (t.stateNode = l,
            We = t,
            Te = null,
            e = !0) : e = !1),
            e || Ul(t)),
            null;
        case 13:
            return ro(e, t, l);
        case 4:
            return be(t, t.stateNode.containerInfo),
            a = t.pendingProps,
            e === null ? t.child = ga(t, null, a, l) : Ge(e, t, a, l),
            t.child;
        case 11:
            return to(e, t, t.type, t.pendingProps, l);
        case 7:
            return Ge(e, t, t.pendingProps, l),
            t.child;
        case 8:
            return Ge(e, t, t.pendingProps.children, l),
            t.child;
        case 12:
            return Ge(e, t, t.pendingProps.children, l),
            t.child;
        case 10:
            return a = t.pendingProps,
            ll(t, t.type, a.value),
            Ge(e, t, a.children, l),
            t.child;
        case 9:
            return n = t.type._context,
            a = t.pendingProps.children,
            Hl(t),
            n = ke(n),
            a = a(n),
            t.flags |= 1,
            Ge(e, t, a, l),
            t.child;
        case 14:
            return lo(e, t, t.type, t.pendingProps, l);
        case 15:
            return ao(e, t, t.type, t.pendingProps, l);
        case 19:
            return oo(e, t, l);
        case 31:
            return a = t.pendingProps,
            l = t.mode,
            a = {
                mode: a.mode,
                children: a.children
            },
            e === null ? (l = Au(a, l),
            l.ref = t.ref,
            t.child = l,
            l.return = t,
            t = l) : (l = Ct(e.child, a),
            l.ref = t.ref,
            t.child = l,
            l.return = t,
            t = l),
            t;
        case 22:
            return no(e, t, l);
        case 24:
            return Hl(t),
            a = ke(Ce),
            e === null ? (n = Pi(),
            n === null && (n = pe,
            u = Wi(),
            n.pooledCache = u,
            u.refCount++,
            u !== null && (n.pooledCacheLanes |= l),
            n = u),
            t.memoizedState = {
                parent: a,
                cache: n
            },
            ec(t),
            ll(t, Ce, n)) : ((e.lanes & l) !== 0 && (tc(e, t),
            an(t, null, null, l),
            ln()),
            n = e.memoizedState,
            u = t.memoizedState,
            n.parent !== a ? (n = {
                parent: a,
                cache: a
            },
            t.memoizedState = n,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n),
            ll(t, Ce, a)) : (a = u.cache,
            ll(t, Ce, a),
            a !== n.cache && $i(t, [Ce], l, !0))),
            Ge(e, t, t.pendingProps.children, l),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(f(156, t.tag))
    }
    function Qt(e) {
        e.flags |= 4
    }
    function mo(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !Ed(t)) {
            if (t = xt.current,
            t !== null && ((ie & 4194048) === ie ? At !== null : (ie & 62914560) !== ie && (ie & 536870912) === 0 || t !== At))
                throw en = Ii,
                $r;
            e.flags |= 8192
        }
    }
    function Ru(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? Zs() : 536870912,
        e.lanes |= t,
        ba |= t)
    }
    function on(e, t) {
        if (!fe)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var l = null; t !== null; )
                    t.alternate !== null && (l = t),
                    t = t.sibling;
                l === null ? e.tail = null : l.sibling = null;
                break;
            case "collapsed":
                l = e.tail;
                for (var a = null; l !== null; )
                    l.alternate !== null && (a = l),
                    l = l.sibling;
                a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null
            }
    }
    function Ee(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , l = 0
          , a = 0;
        if (t)
            for (var n = e.child; n !== null; )
                l |= n.lanes | n.childLanes,
                a |= n.subtreeFlags & 65011712,
                a |= n.flags & 65011712,
                n.return = e,
                n = n.sibling;
        else
            for (n = e.child; n !== null; )
                l |= n.lanes | n.childLanes,
                a |= n.subtreeFlags,
                a |= n.flags,
                n.return = e,
                n = n.sibling;
        return e.subtreeFlags |= a,
        e.childLanes = l,
        t
    }
    function Xm(e, t, l) {
        var a = t.pendingProps;
        switch (Vi(t),
        t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Ee(t),
            null;
        case 1:
            return Ee(t),
            null;
        case 3:
            return l = t.stateNode,
            a = null,
            e !== null && (a = e.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            Yt(Ce),
            Pt(),
            l.pendingContext && (l.context = l.pendingContext,
            l.pendingContext = null),
            (e === null || e.child === null) && (ka(t) ? Qt(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Zr())),
            Ee(t),
            null;
        case 26:
            return l = t.memoizedState,
            e === null ? (Qt(t),
            l !== null ? (Ee(t),
            mo(t, l)) : (Ee(t),
            t.flags &= -16777217)) : l ? l !== e.memoizedState ? (Qt(t),
            Ee(t),
            mo(t, l)) : (Ee(t),
            t.flags &= -16777217) : (e.memoizedProps !== a && Qt(t),
            Ee(t),
            t.flags &= -16777217),
            null;
        case 27:
            Yn(t),
            l = ee.current;
            var n = t.type;
            if (e !== null && t.stateNode != null)
                e.memoizedProps !== a && Qt(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(f(166));
                    return Ee(t),
                    null
                }
                e = k.current,
                ka(t) ? Xr(t) : (e = md(n, a, l),
                t.stateNode = e,
                Qt(t))
            }
            return Ee(t),
            null;
        case 5:
            if (Yn(t),
            l = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== a && Qt(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(f(166));
                    return Ee(t),
                    null
                }
                if (e = k.current,
                ka(t))
                    Xr(t);
                else {
                    switch (n = Gu(ee.current),
                    e) {
                    case 1:
                        e = n.createElementNS("http://www.w3.org/2000/svg", l);
                        break;
                    case 2:
                        e = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                        break;
                    default:
                        switch (l) {
                        case "svg":
                            e = n.createElementNS("http://www.w3.org/2000/svg", l);
                            break;
                        case "math":
                            e = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                            break;
                        case "script":
                            e = n.createElement("div"),
                            e.innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild);
                            break;
                        case "select":
                            e = typeof a.is == "string" ? n.createElement("select", {
                                is: a.is
                            }) : n.createElement("select"),
                            a.multiple ? e.multiple = !0 : a.size && (e.size = a.size);
                            break;
                        default:
                            e = typeof a.is == "string" ? n.createElement(l, {
                                is: a.is
                            }) : n.createElement(l)
                        }
                    }
                    e[Ke] = t,
                    e[Fe] = a;
                    e: for (n = t.child; n !== null; ) {
                        if (n.tag === 5 || n.tag === 6)
                            e.appendChild(n.stateNode);
                        else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                            n.child.return = n,
                            n = n.child;
                            continue
                        }
                        if (n === t)
                            break e;
                        for (; n.sibling === null; ) {
                            if (n.return === null || n.return === t)
                                break e;
                            n = n.return
                        }
                        n.sibling.return = n.return,
                        n = n.sibling
                    }
                    t.stateNode = e;
                    e: switch (Qe(e, l, a),
                    l) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        e = !!a.autoFocus;
                        break e;
                    case "img":
                        e = !0;
                        break e;
                    default:
                        e = !1
                    }
                    e && Qt(t)
                }
            }
            return Ee(t),
            t.flags &= -16777217,
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== a && Qt(t);
            else {
                if (typeof a != "string" && t.stateNode === null)
                    throw Error(f(166));
                if (e = ee.current,
                ka(t)) {
                    if (e = t.stateNode,
                    l = t.memoizedProps,
                    a = null,
                    n = We,
                    n !== null)
                        switch (n.tag) {
                        case 27:
                        case 5:
                            a = n.memoizedProps
                        }
                    e[Ke] = t,
                    e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || cd(e.nodeValue, l)),
                    e || Ul(t)
                } else
                    e = Gu(e).createTextNode(a),
                    e[Ke] = t,
                    t.stateNode = e
            }
            return Ee(t),
            null;
        case 13:
            if (a = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (n = ka(t),
                a !== null && a.dehydrated !== null) {
                    if (e === null) {
                        if (!n)
                            throw Error(f(318));
                        if (n = t.memoizedState,
                        n = n !== null ? n.dehydrated : null,
                        !n)
                            throw Error(f(317));
                        n[Ke] = t
                    } else
                        Ja(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Ee(t),
                    n = !1
                } else
                    n = Zr(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                    n = !0;
                if (!n)
                    return t.flags & 256 ? (Gt(t),
                    t) : (Gt(t),
                    null)
            }
            if (Gt(t),
            (t.flags & 128) !== 0)
                return t.lanes = l,
                t;
            if (l = a !== null,
            e = e !== null && e.memoizedState !== null,
            l) {
                a = t.child,
                n = null,
                a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool);
                var u = null;
                a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)
            }
            return l !== e && l && (t.child.flags |= 8192),
            Ru(t, t.updateQueue),
            Ee(t),
            null;
        case 4:
            return Pt(),
            e === null && as(t.stateNode.containerInfo),
            Ee(t),
            null;
        case 10:
            return Yt(t.type),
            Ee(t),
            null;
        case 19:
            if (L(He),
            n = t.memoizedState,
            n === null)
                return Ee(t),
                null;
            if (a = (t.flags & 128) !== 0,
            u = n.rendering,
            u === null)
                if (a)
                    on(n, !1);
                else {
                    if (Ae !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (u = Nu(e),
                            u !== null) {
                                for (t.flags |= 128,
                                on(n, !1),
                                e = u.updateQueue,
                                t.updateQueue = e,
                                Ru(t, e),
                                t.subtreeFlags = 0,
                                e = l,
                                l = t.child; l !== null; )
                                    Lr(l, e),
                                    l = l.sibling;
                                return B(He, He.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    n.tail !== null && wt() > _u && (t.flags |= 128,
                    a = !0,
                    on(n, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!a)
                    if (e = Nu(u),
                    e !== null) {
                        if (t.flags |= 128,
                        a = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        Ru(t, e),
                        on(n, !0),
                        n.tail === null && n.tailMode === "hidden" && !u.alternate && !fe)
                            return Ee(t),
                            null
                    } else
                        2 * wt() - n.renderingStartTime > _u && l !== 536870912 && (t.flags |= 128,
                        a = !0,
                        on(n, !1),
                        t.lanes = 4194304);
                n.isBackwards ? (u.sibling = t.child,
                t.child = u) : (e = n.last,
                e !== null ? e.sibling = u : t.child = u,
                n.last = u)
            }
            return n.tail !== null ? (t = n.tail,
            n.rendering = t,
            n.tail = t.sibling,
            n.renderingStartTime = wt(),
            t.sibling = null,
            e = He.current,
            B(He, a ? e & 1 | 2 : e & 1),
            t) : (Ee(t),
            null);
        case 22:
        case 23:
            return Gt(t),
            uc(),
            a = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
            a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ee(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Ee(t),
            l = t.updateQueue,
            l !== null && Ru(t, l.retryQueue),
            l = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
            a = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
            a !== l && (t.flags |= 2048),
            e !== null && L(ql),
            null;
        case 24:
            return l = null,
            e !== null && (l = e.memoizedState.cache),
            t.memoizedState.cache !== l && (t.flags |= 2048),
            Yt(Ce),
            Ee(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(f(156, t.tag))
    }
    function Qm(e, t) {
        switch (Vi(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return Yt(Ce),
            Pt(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return Yn(t),
            null;
        case 13:
            if (Gt(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(f(340));
                Ja()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return L(He),
            null;
        case 4:
            return Pt(),
            null;
        case 10:
            return Yt(t.type),
            null;
        case 22:
        case 23:
            return Gt(t),
            uc(),
            e !== null && L(ql),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return Yt(Ce),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function yo(e, t) {
        switch (Vi(t),
        t.tag) {
        case 3:
            Yt(Ce),
            Pt();
            break;
        case 26:
        case 27:
        case 5:
            Yn(t);
            break;
        case 4:
            Pt();
            break;
        case 13:
            Gt(t);
            break;
        case 19:
            L(He);
            break;
        case 10:
            Yt(t.type);
            break;
        case 22:
        case 23:
            Gt(t),
            uc(),
            e !== null && L(ql);
            break;
        case 24:
            Yt(Ce)
        }
    }
    function dn(e, t) {
        try {
            var l = t.updateQueue
              , a = l !== null ? l.lastEffect : null;
            if (a !== null) {
                var n = a.next;
                l = n;
                do {
                    if ((l.tag & e) === e) {
                        a = void 0;
                        var u = l.create
                          , c = l.inst;
                        a = u(),
                        c.destroy = a
                    }
                    l = l.next
                } while (l !== n)
            }
        } catch (r) {
            ve(t, t.return, r)
        }
    }
    function rl(e, t, l) {
        try {
            var a = t.updateQueue
              , n = a !== null ? a.lastEffect : null;
            if (n !== null) {
                var u = n.next;
                a = u;
                do {
                    if ((a.tag & e) === e) {
                        var c = a.inst
                          , r = c.destroy;
                        if (r !== void 0) {
                            c.destroy = void 0,
                            n = t;
                            var m = l
                              , E = r;
                            try {
                                E()
                            } catch (R) {
                                ve(n, m, R)
                            }
                        }
                    }
                    a = a.next
                } while (a !== u)
            }
        } catch (R) {
            ve(t, t.return, R)
        }
    }
    function go(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var l = e.stateNode;
            try {
                tf(t, l)
            } catch (a) {
                ve(e, e.return, a)
            }
        }
    }
    function vo(e, t, l) {
        l.props = Yl(e.type, e.memoizedProps),
        l.state = e.memoizedState;
        try {
            l.componentWillUnmount()
        } catch (a) {
            ve(e, t, a)
        }
    }
    function hn(e, t) {
        try {
            var l = e.ref;
            if (l !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var a = e.stateNode;
                    break;
                case 30:
                    a = e.stateNode;
                    break;
                default:
                    a = e.stateNode
                }
                typeof l == "function" ? e.refCleanup = l(a) : l.current = a
            }
        } catch (n) {
            ve(e, t, n)
        }
    }
    function Rt(e, t) {
        var l = e.ref
          , a = e.refCleanup;
        if (l !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (n) {
                    ve(e, t, n)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof l == "function")
                try {
                    l(null)
                } catch (n) {
                    ve(e, t, n)
                }
            else
                l.current = null
    }
    function po(e) {
        var t = e.type
          , l = e.memoizedProps
          , a = e.stateNode;
        try {
            e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                l.autoFocus && a.focus();
                break e;
            case "img":
                l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet)
            }
        } catch (n) {
            ve(e, e.return, n)
        }
    }
    function Dc(e, t, l) {
        try {
            var a = e.stateNode;
            f0(a, e.type, l, t),
            a[Fe] = t
        } catch (n) {
            ve(e, e.return, n)
        }
    }
    function xo(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && vl(e.type) || e.tag === 4
    }
    function Uc(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || xo(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && vl(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function Cc(e, t, l) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
            t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
            t.appendChild(e),
            l = l._reactRootContainer,
            l != null || t.onclick !== null || (t.onclick = Lu));
        else if (a !== 4 && (a === 27 && vl(e.type) && (l = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (Cc(e, t, l),
            e = e.sibling; e !== null; )
                Cc(e, t, l),
                e = e.sibling
    }
    function zu(e, t, l) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
            t ? l.insertBefore(e, t) : l.appendChild(e);
        else if (a !== 4 && (a === 27 && vl(e.type) && (l = e.stateNode),
        e = e.child,
        e !== null))
            for (zu(e, t, l),
            e = e.sibling; e !== null; )
                zu(e, t, l),
                e = e.sibling
    }
    function bo(e) {
        var t = e.stateNode
          , l = e.memoizedProps;
        try {
            for (var a = e.type, n = t.attributes; n.length; )
                t.removeAttributeNode(n[0]);
            Qe(t, a, l),
            t[Ke] = e,
            t[Fe] = l
        } catch (u) {
            ve(e, e.return, u)
        }
    }
    var Zt = !1
      , Me = !1
      , Hc = !1
      , So = typeof WeakSet == "function" ? WeakSet : Set
      , Ye = null;
    function Zm(e, t) {
        if (e = e.containerInfo,
        is = ku,
        e = Mr(e),
        Ui(e)) {
            if ("selectionStart"in e)
                var l = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    l = (l = e.ownerDocument) && l.defaultView || window;
                    var a = l.getSelection && l.getSelection();
                    if (a && a.rangeCount !== 0) {
                        l = a.anchorNode;
                        var n = a.anchorOffset
                          , u = a.focusNode;
                        a = a.focusOffset;
                        try {
                            l.nodeType,
                            u.nodeType
                        } catch {
                            l = null;
                            break e
                        }
                        var c = 0
                          , r = -1
                          , m = -1
                          , E = 0
                          , R = 0
                          , O = e
                          , N = null;
                        t: for (; ; ) {
                            for (var j; O !== l || n !== 0 && O.nodeType !== 3 || (r = c + n),
                            O !== u || a !== 0 && O.nodeType !== 3 || (m = c + a),
                            O.nodeType === 3 && (c += O.nodeValue.length),
                            (j = O.firstChild) !== null; )
                                N = O,
                                O = j;
                            for (; ; ) {
                                if (O === e)
                                    break t;
                                if (N === l && ++E === n && (r = c),
                                N === u && ++R === a && (m = c),
                                (j = O.nextSibling) !== null)
                                    break;
                                O = N,
                                N = O.parentNode
                            }
                            O = j
                        }
                        l = r === -1 || m === -1 ? null : {
                            start: r,
                            end: m
                        }
                    } else
                        l = null
                }
            l = l || {
                start: 0,
                end: 0
            }
        } else
            l = null;
        for (cs = {
            focusedElem: e,
            selectionRange: l
        },
        ku = !1,
        Ye = t; Ye !== null; )
            if (t = Ye,
            e = t.child,
            (t.subtreeFlags & 1024) !== 0 && e !== null)
                e.return = t,
                Ye = e;
            else
                for (; Ye !== null; ) {
                    switch (t = Ye,
                    u = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && u !== null) {
                            e = void 0,
                            l = t,
                            n = u.memoizedProps,
                            u = u.memoizedState,
                            a = l.stateNode;
                            try {
                                var F = Yl(l.type, n, l.elementType === l.type);
                                e = a.getSnapshotBeforeUpdate(F, u),
                                a.__reactInternalSnapshotBeforeUpdate = e
                            } catch (J) {
                                ve(l, l.return, J)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            l = e.nodeType,
                            l === 9)
                                fs(e);
                            else if (l === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    fs(e);
                                    break;
                                default:
                                    e.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0)
                            throw Error(f(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        Ye = e;
                        break
                    }
                    Ye = t.return
                }
    }
    function Eo(e, t, l) {
        var a = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            fl(e, l),
            a & 4 && dn(5, l);
            break;
        case 1:
            if (fl(e, l),
            a & 4)
                if (e = l.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (c) {
                        ve(l, l.return, c)
                    }
                else {
                    var n = Yl(l.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (c) {
                        ve(l, l.return, c)
                    }
                }
            a & 64 && go(l),
            a & 512 && hn(l, l.return);
            break;
        case 3:
            if (fl(e, l),
            a & 64 && (e = l.updateQueue,
            e !== null)) {
                if (t = null,
                l.child !== null)
                    switch (l.child.tag) {
                    case 27:
                    case 5:
                        t = l.child.stateNode;
                        break;
                    case 1:
                        t = l.child.stateNode
                    }
                try {
                    tf(e, t)
                } catch (c) {
                    ve(l, l.return, c)
                }
            }
            break;
        case 27:
            t === null && a & 4 && bo(l);
        case 26:
        case 5:
            fl(e, l),
            t === null && a & 4 && po(l),
            a & 512 && hn(l, l.return);
            break;
        case 12:
            fl(e, l);
            break;
        case 13:
            fl(e, l),
            a & 4 && wo(e, l),
            a & 64 && (e = l.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (l = Im.bind(null, l),
            v0(e, l))));
            break;
        case 22:
            if (a = l.memoizedState !== null || Zt,
            !a) {
                t = t !== null && t.memoizedState !== null || Me,
                n = Zt;
                var u = Me;
                Zt = a,
                (Me = t) && !u ? ol(e, l, (l.subtreeFlags & 8772) !== 0) : fl(e, l),
                Zt = n,
                Me = u
            }
            break;
        case 30:
            break;
        default:
            fl(e, l)
        }
    }
    function No(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        No(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && yi(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var Se = null
      , et = !1;
    function Vt(e, t, l) {
        for (l = l.child; l !== null; )
            jo(e, t, l),
            l = l.sibling
    }
    function jo(e, t, l) {
        if (at && typeof at.onCommitFiberUnmount == "function")
            try {
                at.onCommitFiberUnmount(Da, l)
            } catch {}
        switch (l.tag) {
        case 26:
            Me || Rt(l, t),
            Vt(e, t, l),
            l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode,
            l.parentNode.removeChild(l));
            break;
        case 27:
            Me || Rt(l, t);
            var a = Se
              , n = et;
            vl(l.type) && (Se = l.stateNode,
            et = !1),
            Vt(e, t, l),
            En(l.stateNode),
            Se = a,
            et = n;
            break;
        case 5:
            Me || Rt(l, t);
        case 6:
            if (a = Se,
            n = et,
            Se = null,
            Vt(e, t, l),
            Se = a,
            et = n,
            Se !== null)
                if (et)
                    try {
                        (Se.nodeType === 9 ? Se.body : Se.nodeName === "HTML" ? Se.ownerDocument.body : Se).removeChild(l.stateNode)
                    } catch (u) {
                        ve(l, t, u)
                    }
                else
                    try {
                        Se.removeChild(l.stateNode)
                    } catch (u) {
                        ve(l, t, u)
                    }
            break;
        case 18:
            Se !== null && (et ? (e = Se,
            dd(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode),
            Mn(e)) : dd(Se, l.stateNode));
            break;
        case 4:
            a = Se,
            n = et,
            Se = l.stateNode.containerInfo,
            et = !0,
            Vt(e, t, l),
            Se = a,
            et = n;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Me || rl(2, l, t),
            Me || rl(4, l, t),
            Vt(e, t, l);
            break;
        case 1:
            Me || (Rt(l, t),
            a = l.stateNode,
            typeof a.componentWillUnmount == "function" && vo(l, t, a)),
            Vt(e, t, l);
            break;
        case 21:
            Vt(e, t, l);
            break;
        case 22:
            Me = (a = Me) || l.memoizedState !== null,
            Vt(e, t, l),
            Me = a;
            break;
        default:
            Vt(e, t, l)
        }
    }
    function wo(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                Mn(e)
            } catch (l) {
                ve(t, t.return, l)
            }
    }
    function Vm(e) {
        switch (e.tag) {
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new So),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new So),
            t;
        default:
            throw Error(f(435, e.tag))
        }
    }
    function qc(e, t) {
        var l = Vm(e);
        t.forEach(function(a) {
            var n = e0.bind(null, e, a);
            l.has(a) || (l.add(a),
            a.then(n, n))
        })
    }
    function ct(e, t) {
        var l = t.deletions;
        if (l !== null)
            for (var a = 0; a < l.length; a++) {
                var n = l[a]
                  , u = e
                  , c = t
                  , r = c;
                e: for (; r !== null; ) {
                    switch (r.tag) {
                    case 27:
                        if (vl(r.type)) {
                            Se = r.stateNode,
                            et = !1;
                            break e
                        }
                        break;
                    case 5:
                        Se = r.stateNode,
                        et = !1;
                        break e;
                    case 3:
                    case 4:
                        Se = r.stateNode.containerInfo,
                        et = !0;
                        break e
                    }
                    r = r.return
                }
                if (Se === null)
                    throw Error(f(160));
                jo(u, c, n),
                Se = null,
                et = !1,
                u = n.alternate,
                u !== null && (u.return = null),
                n.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null; )
                To(t, e),
                t = t.sibling
    }
    var Nt = null;
    function To(e, t) {
        var l = e.alternate
          , a = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            ct(t, e),
            st(e),
            a & 4 && (rl(3, e, e.return),
            dn(3, e),
            rl(5, e, e.return));
            break;
        case 1:
            ct(t, e),
            st(e),
            a & 512 && (Me || l === null || Rt(l, l.return)),
            a & 64 && Zt && (e = e.updateQueue,
            e !== null && (a = e.callbacks,
            a !== null && (l = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
            break;
        case 26:
            var n = Nt;
            if (ct(t, e),
            st(e),
            a & 512 && (Me || l === null || Rt(l, l.return)),
            a & 4) {
                var u = l !== null ? l.memoizedState : null;
                if (a = e.memoizedState,
                l === null)
                    if (a === null)
                        if (e.stateNode === null) {
                            e: {
                                a = e.type,
                                l = e.memoizedProps,
                                n = n.ownerDocument || n;
                                t: switch (a) {
                                case "title":
                                    u = n.getElementsByTagName("title")[0],
                                    (!u || u[Ha] || u[Ke] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a),
                                    n.head.insertBefore(u, n.querySelector("head > title"))),
                                    Qe(u, a, l),
                                    u[Ke] = e,
                                    qe(u),
                                    a = u;
                                    break e;
                                case "link":
                                    var c = bd("link", "href", n).get(a + (l.href || ""));
                                    if (c) {
                                        for (var r = 0; r < c.length; r++)
                                            if (u = c[r],
                                            u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                c.splice(r, 1);
                                                break t
                                            }
                                    }
                                    u = n.createElement(a),
                                    Qe(u, a, l),
                                    n.head.appendChild(u);
                                    break;
                                case "meta":
                                    if (c = bd("meta", "content", n).get(a + (l.content || ""))) {
                                        for (r = 0; r < c.length; r++)
                                            if (u = c[r],
                                            u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                c.splice(r, 1);
                                                break t
                                            }
                                    }
                                    u = n.createElement(a),
                                    Qe(u, a, l),
                                    n.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(f(468, a))
                                }
                                u[Ke] = e,
                                qe(u),
                                a = u
                            }
                            e.stateNode = a
                        } else
                            Sd(n, e.type, e.stateNode);
                    else
                        e.stateNode = xd(n, a, e.memoizedProps);
                else
                    u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode,
                    l.parentNode.removeChild(l)) : u.count--,
                    a === null ? Sd(n, e.type, e.stateNode) : xd(n, a, e.memoizedProps)) : a === null && e.stateNode !== null && Dc(e, e.memoizedProps, l.memoizedProps)
            }
            break;
        case 27:
            ct(t, e),
            st(e),
            a & 512 && (Me || l === null || Rt(l, l.return)),
            l !== null && a & 4 && Dc(e, e.memoizedProps, l.memoizedProps);
            break;
        case 5:
            if (ct(t, e),
            st(e),
            a & 512 && (Me || l === null || Rt(l, l.return)),
            e.flags & 32) {
                n = e.stateNode;
                try {
                    Pl(n, "")
                } catch (j) {
                    ve(e, e.return, j)
                }
            }
            a & 4 && e.stateNode != null && (n = e.memoizedProps,
            Dc(e, n, l !== null ? l.memoizedProps : n)),
            a & 1024 && (Hc = !0);
            break;
        case 6:
            if (ct(t, e),
            st(e),
            a & 4) {
                if (e.stateNode === null)
                    throw Error(f(162));
                a = e.memoizedProps,
                l = e.stateNode;
                try {
                    l.nodeValue = a
                } catch (j) {
                    ve(e, e.return, j)
                }
            }
            break;
        case 3:
            if (Zu = null,
            n = Nt,
            Nt = Xu(t.containerInfo),
            ct(t, e),
            Nt = n,
            st(e),
            a & 4 && l !== null && l.memoizedState.isDehydrated)
                try {
                    Mn(t.containerInfo)
                } catch (j) {
                    ve(e, e.return, j)
                }
            Hc && (Hc = !1,
            Ao(e));
            break;
        case 4:
            a = Nt,
            Nt = Xu(e.stateNode.containerInfo),
            ct(t, e),
            st(e),
            Nt = a;
            break;
        case 12:
            ct(t, e),
            st(e);
            break;
        case 13:
            ct(t, e),
            st(e),
            e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Qc = wt()),
            a & 4 && (a = e.updateQueue,
            a !== null && (e.updateQueue = null,
            qc(e, a)));
            break;
        case 22:
            n = e.memoizedState !== null;
            var m = l !== null && l.memoizedState !== null
              , E = Zt
              , R = Me;
            if (Zt = E || n,
            Me = R || m,
            ct(t, e),
            Me = R,
            Zt = E,
            st(e),
            a & 8192)
                e: for (t = e.stateNode,
                t._visibility = n ? t._visibility & -2 : t._visibility | 1,
                n && (l === null || m || Zt || Me || Ll(e)),
                l = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (l === null) {
                            m = l = t;
                            try {
                                if (u = m.stateNode,
                                n)
                                    c = u.style,
                                    typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                                else {
                                    r = m.stateNode;
                                    var O = m.memoizedProps.style
                                      , N = O != null && O.hasOwnProperty("display") ? O.display : null;
                                    r.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim()
                                }
                            } catch (j) {
                                ve(m, m.return, j)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (l === null) {
                            m = t;
                            try {
                                m.stateNode.nodeValue = n ? "" : m.memoizedProps
                            } catch (j) {
                                ve(m, m.return, j)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break e;
                        l === t && (l = null),
                        t = t.return
                    }
                    l === t && (l = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            a & 4 && (a = e.updateQueue,
            a !== null && (l = a.retryQueue,
            l !== null && (a.retryQueue = null,
            qc(e, l))));
            break;
        case 19:
            ct(t, e),
            st(e),
            a & 4 && (a = e.updateQueue,
            a !== null && (e.updateQueue = null,
            qc(e, a)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            ct(t, e),
            st(e)
        }
    }
    function st(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var l, a = e.return; a !== null; ) {
                    if (xo(a)) {
                        l = a;
                        break
                    }
                    a = a.return
                }
                if (l == null)
                    throw Error(f(160));
                switch (l.tag) {
                case 27:
                    var n = l.stateNode
                      , u = Uc(e);
                    zu(e, u, n);
                    break;
                case 5:
                    var c = l.stateNode;
                    l.flags & 32 && (Pl(c, ""),
                    l.flags &= -33);
                    var r = Uc(e);
                    zu(e, r, c);
                    break;
                case 3:
                case 4:
                    var m = l.stateNode.containerInfo
                      , E = Uc(e);
                    Cc(e, E, m);
                    break;
                default:
                    throw Error(f(161))
                }
            } catch (R) {
                ve(e, e.return, R)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function Ao(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                Ao(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function fl(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                Eo(e, t.alternate, t),
                t = t.sibling
    }
    function Ll(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                rl(4, t, t.return),
                Ll(t);
                break;
            case 1:
                Rt(t, t.return);
                var l = t.stateNode;
                typeof l.componentWillUnmount == "function" && vo(t, t.return, l),
                Ll(t);
                break;
            case 27:
                En(t.stateNode);
            case 26:
            case 5:
                Rt(t, t.return),
                Ll(t);
                break;
            case 22:
                t.memoizedState === null && Ll(t);
                break;
            case 30:
                Ll(t);
                break;
            default:
                Ll(t)
            }
            e = e.sibling
        }
    }
    function ol(e, t, l) {
        for (l = l && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var a = t.alternate
              , n = e
              , u = t
              , c = u.flags;
            switch (u.tag) {
            case 0:
            case 11:
            case 15:
                ol(n, u, l),
                dn(4, u);
                break;
            case 1:
                if (ol(n, u, l),
                a = u,
                n = a.stateNode,
                typeof n.componentDidMount == "function")
                    try {
                        n.componentDidMount()
                    } catch (E) {
                        ve(a, a.return, E)
                    }
                if (a = u,
                n = a.updateQueue,
                n !== null) {
                    var r = a.stateNode;
                    try {
                        var m = n.shared.hiddenCallbacks;
                        if (m !== null)
                            for (n.shared.hiddenCallbacks = null,
                            n = 0; n < m.length; n++)
                                ef(m[n], r)
                    } catch (E) {
                        ve(a, a.return, E)
                    }
                }
                l && c & 64 && go(u),
                hn(u, u.return);
                break;
            case 27:
                bo(u);
            case 26:
            case 5:
                ol(n, u, l),
                l && a === null && c & 4 && po(u),
                hn(u, u.return);
                break;
            case 12:
                ol(n, u, l);
                break;
            case 13:
                ol(n, u, l),
                l && c & 4 && wo(n, u);
                break;
            case 22:
                u.memoizedState === null && ol(n, u, l),
                hn(u, u.return);
                break;
            case 30:
                break;
            default:
                ol(n, u, l)
            }
            t = t.sibling
        }
    }
    function Bc(e, t) {
        var l = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== l && (e != null && e.refCount++,
        l != null && Fa(l))
    }
    function Yc(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && Fa(e))
    }
    function zt(e, t, l, a) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                Ro(e, t, l, a),
                t = t.sibling
    }
    function Ro(e, t, l, a) {
        var n = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            zt(e, t, l, a),
            n & 2048 && dn(9, t);
            break;
        case 1:
            zt(e, t, l, a);
            break;
        case 3:
            zt(e, t, l, a),
            n & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && Fa(e)));
            break;
        case 12:
            if (n & 2048) {
                zt(e, t, l, a),
                e = t.stateNode;
                try {
                    var u = t.memoizedProps
                      , c = u.id
                      , r = u.onPostCommit;
                    typeof r == "function" && r(c, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (m) {
                    ve(t, t.return, m)
                }
            } else
                zt(e, t, l, a);
            break;
        case 13:
            zt(e, t, l, a);
            break;
        case 23:
            break;
        case 22:
            u = t.stateNode,
            c = t.alternate,
            t.memoizedState !== null ? u._visibility & 2 ? zt(e, t, l, a) : mn(e, t) : u._visibility & 2 ? zt(e, t, l, a) : (u._visibility |= 2,
            va(e, t, l, a, (t.subtreeFlags & 10256) !== 0)),
            n & 2048 && Bc(c, t);
            break;
        case 24:
            zt(e, t, l, a),
            n & 2048 && Yc(t.alternate, t);
            break;
        default:
            zt(e, t, l, a)
        }
    }
    function va(e, t, l, a, n) {
        for (n = n && (t.subtreeFlags & 10256) !== 0,
        t = t.child; t !== null; ) {
            var u = e
              , c = t
              , r = l
              , m = a
              , E = c.flags;
            switch (c.tag) {
            case 0:
            case 11:
            case 15:
                va(u, c, r, m, n),
                dn(8, c);
                break;
            case 23:
                break;
            case 22:
                var R = c.stateNode;
                c.memoizedState !== null ? R._visibility & 2 ? va(u, c, r, m, n) : mn(u, c) : (R._visibility |= 2,
                va(u, c, r, m, n)),
                n && E & 2048 && Bc(c.alternate, c);
                break;
            case 24:
                va(u, c, r, m, n),
                n && E & 2048 && Yc(c.alternate, c);
                break;
            default:
                va(u, c, r, m, n)
            }
            t = t.sibling
        }
    }
    function mn(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var l = e
                  , a = t
                  , n = a.flags;
                switch (a.tag) {
                case 22:
                    mn(l, a),
                    n & 2048 && Bc(a.alternate, a);
                    break;
                case 24:
                    mn(l, a),
                    n & 2048 && Yc(a.alternate, a);
                    break;
                default:
                    mn(l, a)
                }
                t = t.sibling
            }
    }
    var yn = 8192;
    function pa(e) {
        if (e.subtreeFlags & yn)
            for (e = e.child; e !== null; )
                zo(e),
                e = e.sibling
    }
    function zo(e) {
        switch (e.tag) {
        case 26:
            pa(e),
            e.flags & yn && e.memoizedState !== null && M0(Nt, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            pa(e);
            break;
        case 3:
        case 4:
            var t = Nt;
            Nt = Xu(e.stateNode.containerInfo),
            pa(e),
            Nt = t;
            break;
        case 22:
            e.memoizedState === null && (t = e.alternate,
            t !== null && t.memoizedState !== null ? (t = yn,
            yn = 16777216,
            pa(e),
            yn = t) : pa(e));
            break;
        default:
            pa(e)
        }
    }
    function Mo(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function gn(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var a = t[l];
                    Ye = a,
                    Oo(a, e)
                }
            Mo(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                _o(e),
                e = e.sibling
    }
    function _o(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            gn(e),
            e.flags & 2048 && rl(9, e, e.return);
            break;
        case 3:
            gn(e);
            break;
        case 12:
            gn(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            Mu(e)) : gn(e);
            break;
        default:
            gn(e)
        }
    }
    function Mu(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var a = t[l];
                    Ye = a,
                    Oo(a, e)
                }
            Mo(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                rl(8, t, t.return),
                Mu(t);
                break;
            case 22:
                l = t.stateNode,
                l._visibility & 2 && (l._visibility &= -3,
                Mu(t));
                break;
            default:
                Mu(t)
            }
            e = e.sibling
        }
    }
    function Oo(e, t) {
        for (; Ye !== null; ) {
            var l = Ye;
            switch (l.tag) {
            case 0:
            case 11:
            case 15:
                rl(8, l, t);
                break;
            case 23:
            case 22:
                if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                    var a = l.memoizedState.cachePool.pool;
                    a != null && a.refCount++
                }
                break;
            case 24:
                Fa(l.memoizedState.cache)
            }
            if (a = l.child,
            a !== null)
                a.return = l,
                Ye = a;
            else
                e: for (l = e; Ye !== null; ) {
                    a = Ye;
                    var n = a.sibling
                      , u = a.return;
                    if (No(a),
                    a === l) {
                        Ye = null;
                        break e
                    }
                    if (n !== null) {
                        n.return = u,
                        Ye = n;
                        break e
                    }
                    Ye = u
                }
        }
    }
    var Km = {
        getCacheForType: function(e) {
            var t = ke(Ce)
              , l = t.data.get(e);
            return l === void 0 && (l = e(),
            t.data.set(e, l)),
            l
        }
    }
      , km = typeof WeakMap == "function" ? WeakMap : Map
      , oe = 0
      , pe = null
      , ne = null
      , ie = 0
      , de = 0
      , rt = null
      , dl = !1
      , xa = !1
      , Lc = !1
      , Kt = 0
      , Ae = 0
      , hl = 0
      , Gl = 0
      , Gc = 0
      , bt = 0
      , ba = 0
      , vn = null
      , tt = null
      , Xc = !1
      , Qc = 0
      , _u = 1 / 0
      , Ou = null
      , ml = null
      , Xe = 0
      , yl = null
      , Sa = null
      , Ea = 0
      , Zc = 0
      , Vc = null
      , Do = null
      , pn = 0
      , Kc = null;
    function ft() {
        if ((oe & 2) !== 0 && ie !== 0)
            return ie & -ie;
        if (z.T !== null) {
            var e = ra;
            return e !== 0 ? e : Ic()
        }
        return ks()
    }
    function Uo() {
        bt === 0 && (bt = (ie & 536870912) === 0 || fe ? Qs() : 536870912);
        var e = xt.current;
        return e !== null && (e.flags |= 32),
        bt
    }
    function ot(e, t, l) {
        (e === pe && (de === 2 || de === 9) || e.cancelPendingCommit !== null) && (Na(e, 0),
        gl(e, ie, bt, !1)),
        Ca(e, l),
        ((oe & 2) === 0 || e !== pe) && (e === pe && ((oe & 2) === 0 && (Gl |= l),
        Ae === 4 && gl(e, ie, bt, !1)),
        Mt(e))
    }
    function Co(e, t, l) {
        if ((oe & 6) !== 0)
            throw Error(f(327));
        var a = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Ua(e, t)
          , n = a ? Wm(e, t) : $c(e, t, !0)
          , u = a;
        do {
            if (n === 0) {
                xa && !a && gl(e, t, 0, !1);
                break
            } else {
                if (l = e.current.alternate,
                u && !Jm(l)) {
                    n = $c(e, t, !1),
                    u = !1;
                    continue
                }
                if (n === 2) {
                    if (u = t,
                    e.errorRecoveryDisabledLanes & u)
                        var c = 0;
                    else
                        c = e.pendingLanes & -536870913,
                        c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
                    if (c !== 0) {
                        t = c;
                        e: {
                            var r = e;
                            n = vn;
                            var m = r.current.memoizedState.isDehydrated;
                            if (m && (Na(r, c).flags |= 256),
                            c = $c(r, c, !1),
                            c !== 2) {
                                if (Lc && !m) {
                                    r.errorRecoveryDisabledLanes |= u,
                                    Gl |= u,
                                    n = 4;
                                    break e
                                }
                                u = tt,
                                tt = n,
                                u !== null && (tt === null ? tt = u : tt.push.apply(tt, u))
                            }
                            n = c
                        }
                        if (u = !1,
                        n !== 2)
                            continue
                    }
                }
                if (n === 1) {
                    Na(e, 0),
                    gl(e, t, 0, !0);
                    break
                }
                e: {
                    switch (a = e,
                    u = n,
                    u) {
                    case 0:
                    case 1:
                        throw Error(f(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        gl(a, t, bt, !dl);
                        break e;
                    case 2:
                        tt = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(f(329))
                    }
                    if ((t & 62914560) === t && (n = Qc + 300 - wt(),
                    10 < n)) {
                        if (gl(a, t, bt, !dl),
                        Qn(a, 0, !0) !== 0)
                            break e;
                        a.timeoutHandle = fd(Ho.bind(null, a, l, tt, Ou, Xc, t, bt, Gl, ba, dl, u, 2, -0, 0), n);
                        break e
                    }
                    Ho(a, l, tt, Ou, Xc, t, bt, Gl, ba, dl, u, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Mt(e)
    }
    function Ho(e, t, l, a, n, u, c, r, m, E, R, O, N, j) {
        if (e.timeoutHandle = -1,
        O = t.subtreeFlags,
        (O & 8192 || (O & 16785408) === 16785408) && (wn = {
            stylesheets: null,
            count: 0,
            unsuspend: z0
        },
        zo(t),
        O = _0(),
        O !== null)) {
            e.cancelPendingCommit = O(Qo.bind(null, e, t, u, l, a, n, c, r, m, R, 1, N, j)),
            gl(e, u, c, !E);
            return
        }
        Qo(e, t, u, l, a, n, c, r, m)
    }
    function Jm(e) {
        for (var t = e; ; ) {
            var l = t.tag;
            if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue,
            l !== null && (l = l.stores,
            l !== null)))
                for (var a = 0; a < l.length; a++) {
                    var n = l[a]
                      , u = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!ut(u(), n))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (l = t.child,
            t.subtreeFlags & 16384 && l !== null)
                l.return = t,
                t = l;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function gl(e, t, l, a) {
        t &= ~Gc,
        t &= ~Gl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        a && (e.warmLanes |= t),
        a = e.expirationTimes;
        for (var n = t; 0 < n; ) {
            var u = 31 - nt(n)
              , c = 1 << u;
            a[u] = -1,
            n &= ~c
        }
        l !== 0 && Vs(e, l, t)
    }
    function Du() {
        return (oe & 6) === 0 ? (xn(0),
        !1) : !0
    }
    function kc() {
        if (ne !== null) {
            if (de === 0)
                var e = ne.return;
            else
                e = ne,
                Bt = Cl = null,
                fc(e),
                ya = null,
                rn = 0,
                e = ne;
            for (; e !== null; )
                yo(e.alternate, e),
                e = e.return;
            ne = null
        }
    }
    function Na(e, t) {
        var l = e.timeoutHandle;
        l !== -1 && (e.timeoutHandle = -1,
        d0(l)),
        l = e.cancelPendingCommit,
        l !== null && (e.cancelPendingCommit = null,
        l()),
        kc(),
        pe = e,
        ne = l = Ct(e.current, null),
        ie = t,
        de = 0,
        rt = null,
        dl = !1,
        xa = Ua(e, t),
        Lc = !1,
        ba = bt = Gc = Gl = hl = Ae = 0,
        tt = vn = null,
        Xc = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var a = e.entangledLanes;
        if (a !== 0)
            for (e = e.entanglements,
            a &= t; 0 < a; ) {
                var n = 31 - nt(a)
                  , u = 1 << n;
                t |= e[n],
                a &= ~u
            }
        return Kt = t,
        tu(),
        l
    }
    function qo(e, t) {
        le = null,
        z.H = bu,
        t === Ia || t === fu ? (t = Pr(),
        de = 3) : t === $r ? (t = Pr(),
        de = 4) : de = t === eo ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        rt = t,
        ne === null && (Ae = 1,
        wu(e, yt(t, e.current)))
    }
    function Bo() {
        var e = z.H;
        return z.H = bu,
        e === null ? bu : e
    }
    function Yo() {
        var e = z.A;
        return z.A = Km,
        e
    }
    function Jc() {
        Ae = 4,
        dl || (ie & 4194048) !== ie && xt.current !== null || (xa = !0),
        (hl & 134217727) === 0 && (Gl & 134217727) === 0 || pe === null || gl(pe, ie, bt, !1)
    }
    function $c(e, t, l) {
        var a = oe;
        oe |= 2;
        var n = Bo()
          , u = Yo();
        (pe !== e || ie !== t) && (Ou = null,
        Na(e, t)),
        t = !1;
        var c = Ae;
        e: do
            try {
                if (de !== 0 && ne !== null) {
                    var r = ne
                      , m = rt;
                    switch (de) {
                    case 8:
                        kc(),
                        c = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        xt.current === null && (t = !0);
                        var E = de;
                        if (de = 0,
                        rt = null,
                        ja(e, r, m, E),
                        l && xa) {
                            c = 0;
                            break e
                        }
                        break;
                    default:
                        E = de,
                        de = 0,
                        rt = null,
                        ja(e, r, m, E)
                    }
                }
                $m(),
                c = Ae;
                break
            } catch (R) {
                qo(e, R)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        Bt = Cl = null,
        oe = a,
        z.H = n,
        z.A = u,
        ne === null && (pe = null,
        ie = 0,
        tu()),
        c
    }
    function $m() {
        for (; ne !== null; )
            Lo(ne)
    }
    function Wm(e, t) {
        var l = oe;
        oe |= 2;
        var a = Bo()
          , n = Yo();
        pe !== e || ie !== t ? (Ou = null,
        _u = wt() + 500,
        Na(e, t)) : xa = Ua(e, t);
        e: do
            try {
                if (de !== 0 && ne !== null) {
                    t = ne;
                    var u = rt;
                    t: switch (de) {
                    case 1:
                        de = 0,
                        rt = null,
                        ja(e, t, u, 1);
                        break;
                    case 2:
                    case 9:
                        if (Wr(u)) {
                            de = 0,
                            rt = null,
                            Go(t);
                            break
                        }
                        t = function() {
                            de !== 2 && de !== 9 || pe !== e || (de = 7),
                            Mt(e)
                        }
                        ,
                        u.then(t, t);
                        break e;
                    case 3:
                        de = 7;
                        break e;
                    case 4:
                        de = 5;
                        break e;
                    case 7:
                        Wr(u) ? (de = 0,
                        rt = null,
                        Go(t)) : (de = 0,
                        rt = null,
                        ja(e, t, u, 7));
                        break;
                    case 5:
                        var c = null;
                        switch (ne.tag) {
                        case 26:
                            c = ne.memoizedState;
                        case 5:
                        case 27:
                            var r = ne;
                            if (!c || Ed(c)) {
                                de = 0,
                                rt = null;
                                var m = r.sibling;
                                if (m !== null)
                                    ne = m;
                                else {
                                    var E = r.return;
                                    E !== null ? (ne = E,
                                    Uu(E)) : ne = null
                                }
                                break t
                            }
                        }
                        de = 0,
                        rt = null,
                        ja(e, t, u, 5);
                        break;
                    case 6:
                        de = 0,
                        rt = null,
                        ja(e, t, u, 6);
                        break;
                    case 8:
                        kc(),
                        Ae = 6;
                        break e;
                    default:
                        throw Error(f(462))
                    }
                }
                Fm();
                break
            } catch (R) {
                qo(e, R)
            }
        while (!0);
        return Bt = Cl = null,
        z.H = a,
        z.A = n,
        oe = l,
        ne !== null ? 0 : (pe = null,
        ie = 0,
        tu(),
        Ae)
    }
    function Fm() {
        for (; ne !== null && !xh(); )
            Lo(ne)
    }
    function Lo(e) {
        var t = ho(e.alternate, e, Kt);
        e.memoizedProps = e.pendingProps,
        t === null ? Uu(e) : ne = t
    }
    function Go(e) {
        var t = e
          , l = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = io(l, t, t.pendingProps, t.type, void 0, ie);
            break;
        case 11:
            t = io(l, t, t.pendingProps, t.type.render, t.ref, ie);
            break;
        case 5:
            fc(t);
        default:
            yo(l, t),
            t = ne = Lr(t, Kt),
            t = ho(l, t, Kt)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? Uu(e) : ne = t
    }
    function ja(e, t, l, a) {
        Bt = Cl = null,
        fc(t),
        ya = null,
        rn = 0;
        var n = t.return;
        try {
            if (Lm(e, n, t, l, ie)) {
                Ae = 1,
                wu(e, yt(l, e.current)),
                ne = null;
                return
            }
        } catch (u) {
            if (n !== null)
                throw ne = n,
                u;
            Ae = 1,
            wu(e, yt(l, e.current)),
            ne = null;
            return
        }
        t.flags & 32768 ? (fe || a === 1 ? e = !0 : xa || (ie & 536870912) !== 0 ? e = !1 : (dl = e = !0,
        (a === 2 || a === 9 || a === 3 || a === 6) && (a = xt.current,
        a !== null && a.tag === 13 && (a.flags |= 16384))),
        Xo(t, e)) : Uu(t)
    }
    function Uu(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                Xo(t, dl);
                return
            }
            e = t.return;
            var l = Xm(t.alternate, t, Kt);
            if (l !== null) {
                ne = l;
                return
            }
            if (t = t.sibling,
            t !== null) {
                ne = t;
                return
            }
            ne = t = e
        } while (t !== null);
        Ae === 0 && (Ae = 5)
    }
    function Xo(e, t) {
        do {
            var l = Qm(e.alternate, e);
            if (l !== null) {
                l.flags &= 32767,
                ne = l;
                return
            }
            if (l = e.return,
            l !== null && (l.flags |= 32768,
            l.subtreeFlags = 0,
            l.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                ne = e;
                return
            }
            ne = e = l
        } while (e !== null);
        Ae = 6,
        ne = null
    }
    function Qo(e, t, l, a, n, u, c, r, m) {
        e.cancelPendingCommit = null;
        do
            Cu();
        while (Xe !== 0);
        if ((oe & 6) !== 0)
            throw Error(f(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(f(177));
            if (u = t.lanes | t.childLanes,
            u |= Yi,
            zh(e, l, u, c, r, m),
            e === pe && (ne = pe = null,
            ie = 0),
            Sa = t,
            yl = e,
            Ea = l,
            Zc = u,
            Vc = n,
            Do = a,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            t0(Ln, function() {
                return Jo(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            a = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || a) {
                a = z.T,
                z.T = null,
                n = Y.p,
                Y.p = 2,
                c = oe,
                oe |= 4;
                try {
                    Zm(e, t, l)
                } finally {
                    oe = c,
                    Y.p = n,
                    z.T = a
                }
            }
            Xe = 1,
            Zo(),
            Vo(),
            Ko()
        }
    }
    function Zo() {
        if (Xe === 1) {
            Xe = 0;
            var e = yl
              , t = Sa
              , l = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || l) {
                l = z.T,
                z.T = null;
                var a = Y.p;
                Y.p = 2;
                var n = oe;
                oe |= 4;
                try {
                    To(t, e);
                    var u = cs
                      , c = Mr(e.containerInfo)
                      , r = u.focusedElem
                      , m = u.selectionRange;
                    if (c !== r && r && r.ownerDocument && zr(r.ownerDocument.documentElement, r)) {
                        if (m !== null && Ui(r)) {
                            var E = m.start
                              , R = m.end;
                            if (R === void 0 && (R = E),
                            "selectionStart"in r)
                                r.selectionStart = E,
                                r.selectionEnd = Math.min(R, r.value.length);
                            else {
                                var O = r.ownerDocument || document
                                  , N = O && O.defaultView || window;
                                if (N.getSelection) {
                                    var j = N.getSelection()
                                      , F = r.textContent.length
                                      , J = Math.min(m.start, F)
                                      , ye = m.end === void 0 ? J : Math.min(m.end, F);
                                    !j.extend && J > ye && (c = ye,
                                    ye = J,
                                    J = c);
                                    var b = Rr(r, J)
                                      , p = Rr(r, ye);
                                    if (b && p && (j.rangeCount !== 1 || j.anchorNode !== b.node || j.anchorOffset !== b.offset || j.focusNode !== p.node || j.focusOffset !== p.offset)) {
                                        var S = O.createRange();
                                        S.setStart(b.node, b.offset),
                                        j.removeAllRanges(),
                                        J > ye ? (j.addRange(S),
                                        j.extend(p.node, p.offset)) : (S.setEnd(p.node, p.offset),
                                        j.addRange(S))
                                    }
                                }
                            }
                        }
                        for (O = [],
                        j = r; j = j.parentNode; )
                            j.nodeType === 1 && O.push({
                                element: j,
                                left: j.scrollLeft,
                                top: j.scrollTop
                            });
                        for (typeof r.focus == "function" && r.focus(),
                        r = 0; r < O.length; r++) {
                            var _ = O[r];
                            _.element.scrollLeft = _.left,
                            _.element.scrollTop = _.top
                        }
                    }
                    ku = !!is,
                    cs = is = null
                } finally {
                    oe = n,
                    Y.p = a,
                    z.T = l
                }
            }
            e.current = t,
            Xe = 2
        }
    }
    function Vo() {
        if (Xe === 2) {
            Xe = 0;
            var e = yl
              , t = Sa
              , l = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || l) {
                l = z.T,
                z.T = null;
                var a = Y.p;
                Y.p = 2;
                var n = oe;
                oe |= 4;
                try {
                    Eo(e, t.alternate, t)
                } finally {
                    oe = n,
                    Y.p = a,
                    z.T = l
                }
            }
            Xe = 3
        }
    }
    function Ko() {
        if (Xe === 4 || Xe === 3) {
            Xe = 0,
            bh();
            var e = yl
              , t = Sa
              , l = Ea
              , a = Do;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Xe = 5 : (Xe = 0,
            Sa = yl = null,
            ko(e, e.pendingLanes));
            var n = e.pendingLanes;
            if (n === 0 && (ml = null),
            hi(l),
            t = t.stateNode,
            at && typeof at.onCommitFiberRoot == "function")
                try {
                    at.onCommitFiberRoot(Da, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (a !== null) {
                t = z.T,
                n = Y.p,
                Y.p = 2,
                z.T = null;
                try {
                    for (var u = e.onRecoverableError, c = 0; c < a.length; c++) {
                        var r = a[c];
                        u(r.value, {
                            componentStack: r.stack
                        })
                    }
                } finally {
                    z.T = t,
                    Y.p = n
                }
            }
            (Ea & 3) !== 0 && Cu(),
            Mt(e),
            n = e.pendingLanes,
            (l & 4194090) !== 0 && (n & 42) !== 0 ? e === Kc ? pn++ : (pn = 0,
            Kc = e) : pn = 0,
            xn(0)
        }
    }
    function ko(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        Fa(t)))
    }
    function Cu(e) {
        return Zo(),
        Vo(),
        Ko(),
        Jo()
    }
    function Jo() {
        if (Xe !== 5)
            return !1;
        var e = yl
          , t = Zc;
        Zc = 0;
        var l = hi(Ea)
          , a = z.T
          , n = Y.p;
        try {
            Y.p = 32 > l ? 32 : l,
            z.T = null,
            l = Vc,
            Vc = null;
            var u = yl
              , c = Ea;
            if (Xe = 0,
            Sa = yl = null,
            Ea = 0,
            (oe & 6) !== 0)
                throw Error(f(331));
            var r = oe;
            if (oe |= 4,
            _o(u.current),
            Ro(u, u.current, c, l),
            oe = r,
            xn(0, !1),
            at && typeof at.onPostCommitFiberRoot == "function")
                try {
                    at.onPostCommitFiberRoot(Da, u)
                } catch {}
            return !0
        } finally {
            Y.p = n,
            z.T = a,
            ko(e, t)
        }
    }
    function $o(e, t, l) {
        t = yt(l, t),
        t = jc(e.stateNode, t, 2),
        e = ul(e, t, 2),
        e !== null && (Ca(e, 2),
        Mt(e))
    }
    function ve(e, t, l) {
        if (e.tag === 3)
            $o(e, e, l);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    $o(t, e, l);
                    break
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ml === null || !ml.has(a))) {
                        e = yt(l, e),
                        l = Pf(2),
                        a = ul(t, l, 2),
                        a !== null && (If(l, a, t, e),
                        Ca(a, 2),
                        Mt(a));
                        break
                    }
                }
                t = t.return
            }
    }
    function Wc(e, t, l) {
        var a = e.pingCache;
        if (a === null) {
            a = e.pingCache = new km;
            var n = new Set;
            a.set(t, n)
        } else
            n = a.get(t),
            n === void 0 && (n = new Set,
            a.set(t, n));
        n.has(l) || (Lc = !0,
        n.add(l),
        e = Pm.bind(null, e, t, l),
        t.then(e, e))
    }
    function Pm(e, t, l) {
        var a = e.pingCache;
        a !== null && a.delete(t),
        e.pingedLanes |= e.suspendedLanes & l,
        e.warmLanes &= ~l,
        pe === e && (ie & l) === l && (Ae === 4 || Ae === 3 && (ie & 62914560) === ie && 300 > wt() - Qc ? (oe & 2) === 0 && Na(e, 0) : Gc |= l,
        ba === ie && (ba = 0)),
        Mt(e)
    }
    function Wo(e, t) {
        t === 0 && (t = Zs()),
        e = ua(e, t),
        e !== null && (Ca(e, t),
        Mt(e))
    }
    function Im(e) {
        var t = e.memoizedState
          , l = 0;
        t !== null && (l = t.retryLane),
        Wo(e, l)
    }
    function e0(e, t) {
        var l = 0;
        switch (e.tag) {
        case 13:
            var a = e.stateNode
              , n = e.memoizedState;
            n !== null && (l = n.retryLane);
            break;
        case 19:
            a = e.stateNode;
            break;
        case 22:
            a = e.stateNode._retryCache;
            break;
        default:
            throw Error(f(314))
        }
        a !== null && a.delete(t),
        Wo(e, l)
    }
    function t0(e, t) {
        return ri(e, t)
    }
    var Hu = null
      , wa = null
      , Fc = !1
      , qu = !1
      , Pc = !1
      , Xl = 0;
    function Mt(e) {
        e !== wa && e.next === null && (wa === null ? Hu = wa = e : wa = wa.next = e),
        qu = !0,
        Fc || (Fc = !0,
        a0())
    }
    function xn(e, t) {
        if (!Pc && qu) {
            Pc = !0;
            do
                for (var l = !1, a = Hu; a !== null; ) {
                    if (e !== 0) {
                        var n = a.pendingLanes;
                        if (n === 0)
                            var u = 0;
                        else {
                            var c = a.suspendedLanes
                              , r = a.pingedLanes;
                            u = (1 << 31 - nt(42 | e) + 1) - 1,
                            u &= n & ~(c & ~r),
                            u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (l = !0,
                        ed(a, u))
                    } else
                        u = ie,
                        u = Qn(a, a === pe ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
                        (u & 3) === 0 || Ua(a, u) || (l = !0,
                        ed(a, u));
                    a = a.next
                }
            while (l);
            Pc = !1
        }
    }
    function l0() {
        Fo()
    }
    function Fo() {
        qu = Fc = !1;
        var e = 0;
        Xl !== 0 && (o0() && (e = Xl),
        Xl = 0);
        for (var t = wt(), l = null, a = Hu; a !== null; ) {
            var n = a.next
              , u = Po(a, t);
            u === 0 ? (a.next = null,
            l === null ? Hu = n : l.next = n,
            n === null && (wa = l)) : (l = a,
            (e !== 0 || (u & 3) !== 0) && (qu = !0)),
            a = n
        }
        xn(e)
    }
    function Po(e, t) {
        for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
            var c = 31 - nt(u)
              , r = 1 << c
              , m = n[c];
            m === -1 ? ((r & l) === 0 || (r & a) !== 0) && (n[c] = Rh(r, t)) : m <= t && (e.expiredLanes |= r),
            u &= ~r
        }
        if (t = pe,
        l = ie,
        l = Qn(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        a = e.callbackNode,
        l === 0 || e === t && (de === 2 || de === 9) || e.cancelPendingCommit !== null)
            return a !== null && a !== null && fi(a),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((l & 3) === 0 || Ua(e, l)) {
            if (t = l & -l,
            t === e.callbackPriority)
                return t;
            switch (a !== null && fi(a),
            hi(l)) {
            case 2:
            case 8:
                l = Gs;
                break;
            case 32:
                l = Ln;
                break;
            case 268435456:
                l = Xs;
                break;
            default:
                l = Ln
            }
            return a = Io.bind(null, e),
            l = ri(l, a),
            e.callbackPriority = t,
            e.callbackNode = l,
            t
        }
        return a !== null && a !== null && fi(a),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function Io(e, t) {
        if (Xe !== 0 && Xe !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var l = e.callbackNode;
        if (Cu() && e.callbackNode !== l)
            return null;
        var a = ie;
        return a = Qn(e, e === pe ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        a === 0 ? null : (Co(e, a, t),
        Po(e, wt()),
        e.callbackNode != null && e.callbackNode === l ? Io.bind(null, e) : null)
    }
    function ed(e, t) {
        if (Cu())
            return null;
        Co(e, t, !0)
    }
    function a0() {
        h0(function() {
            (oe & 6) !== 0 ? ri(Ls, l0) : Fo()
        })
    }
    function Ic() {
        return Xl === 0 && (Xl = Qs()),
        Xl
    }
    function td(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Jn("" + e)
    }
    function ld(e, t) {
        var l = t.ownerDocument.createElement("input");
        return l.name = t.name,
        l.value = t.value,
        e.id && l.setAttribute("form", e.id),
        t.parentNode.insertBefore(l, t),
        e = new FormData(e),
        l.parentNode.removeChild(l),
        e
    }
    function n0(e, t, l, a, n) {
        if (t === "submit" && l && l.stateNode === n) {
            var u = td((n[Fe] || null).action)
              , c = a.submitter;
            c && (t = (t = c[Fe] || null) ? td(t.formAction) : c.getAttribute("formAction"),
            t !== null && (u = t,
            c = null));
            var r = new Pn("action","action",null,a,n);
            e.push({
                event: r,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (Xl !== 0) {
                                var m = c ? ld(n, c) : new FormData(n);
                                xc(l, {
                                    pending: !0,
                                    data: m,
                                    method: n.method,
                                    action: u
                                }, null, m)
                            }
                        } else
                            typeof u == "function" && (r.preventDefault(),
                            m = c ? ld(n, c) : new FormData(n),
                            xc(l, {
                                pending: !0,
                                data: m,
                                method: n.method,
                                action: u
                            }, u, m))
                    },
                    currentTarget: n
                }]
            })
        }
    }
    for (var es = 0; es < Bi.length; es++) {
        var ts = Bi[es]
          , u0 = ts.toLowerCase()
          , i0 = ts[0].toUpperCase() + ts.slice(1);
        Et(u0, "on" + i0)
    }
    Et(Dr, "onAnimationEnd"),
    Et(Ur, "onAnimationIteration"),
    Et(Cr, "onAnimationStart"),
    Et("dblclick", "onDoubleClick"),
    Et("focusin", "onFocus"),
    Et("focusout", "onBlur"),
    Et(Nm, "onTransitionRun"),
    Et(jm, "onTransitionStart"),
    Et(wm, "onTransitionCancel"),
    Et(Hr, "onTransitionEnd"),
    $l("onMouseEnter", ["mouseout", "mouseover"]),
    $l("onMouseLeave", ["mouseout", "mouseover"]),
    $l("onPointerEnter", ["pointerout", "pointerover"]),
    $l("onPointerLeave", ["pointerout", "pointerover"]),
    Tl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Tl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Tl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Tl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Tl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Tl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var bn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , c0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bn));
    function ad(e, t) {
        t = (t & 4) !== 0;
        for (var l = 0; l < e.length; l++) {
            var a = e[l]
              , n = a.event;
            a = a.listeners;
            e: {
                var u = void 0;
                if (t)
                    for (var c = a.length - 1; 0 <= c; c--) {
                        var r = a[c]
                          , m = r.instance
                          , E = r.currentTarget;
                        if (r = r.listener,
                        m !== u && n.isPropagationStopped())
                            break e;
                        u = r,
                        n.currentTarget = E;
                        try {
                            u(n)
                        } catch (R) {
                            ju(R)
                        }
                        n.currentTarget = null,
                        u = m
                    }
                else
                    for (c = 0; c < a.length; c++) {
                        if (r = a[c],
                        m = r.instance,
                        E = r.currentTarget,
                        r = r.listener,
                        m !== u && n.isPropagationStopped())
                            break e;
                        u = r,
                        n.currentTarget = E;
                        try {
                            u(n)
                        } catch (R) {
                            ju(R)
                        }
                        n.currentTarget = null,
                        u = m
                    }
            }
        }
    }
    function ue(e, t) {
        var l = t[mi];
        l === void 0 && (l = t[mi] = new Set);
        var a = e + "__bubble";
        l.has(a) || (nd(t, e, 2, !1),
        l.add(a))
    }
    function ls(e, t, l) {
        var a = 0;
        t && (a |= 4),
        nd(l, e, a, t)
    }
    var Bu = "_reactListening" + Math.random().toString(36).slice(2);
    function as(e) {
        if (!e[Bu]) {
            e[Bu] = !0,
            $s.forEach(function(l) {
                l !== "selectionchange" && (c0.has(l) || ls(l, !1, e),
                ls(l, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Bu] || (t[Bu] = !0,
            ls("selectionchange", !1, t))
        }
    }
    function nd(e, t, l, a) {
        switch (Rd(t)) {
        case 2:
            var n = U0;
            break;
        case 8:
            n = C0;
            break;
        default:
            n = vs
        }
        l = n.bind(null, t, l, e),
        n = void 0,
        !wi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0),
        a ? n !== void 0 ? e.addEventListener(t, l, {
            capture: !0,
            passive: n
        }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
            passive: n
        }) : e.addEventListener(t, l, !1)
    }
    function ns(e, t, l, a, n) {
        var u = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            e: for (; ; ) {
                if (a === null)
                    return;
                var c = a.tag;
                if (c === 3 || c === 4) {
                    var r = a.stateNode.containerInfo;
                    if (r === n)
                        break;
                    if (c === 4)
                        for (c = a.return; c !== null; ) {
                            var m = c.tag;
                            if ((m === 3 || m === 4) && c.stateNode.containerInfo === n)
                                return;
                            c = c.return
                        }
                    for (; r !== null; ) {
                        if (c = Kl(r),
                        c === null)
                            return;
                        if (m = c.tag,
                        m === 5 || m === 6 || m === 26 || m === 27) {
                            a = u = c;
                            continue e
                        }
                        r = r.parentNode
                    }
                }
                a = a.return
            }
        rr(function() {
            var E = u
              , R = Ni(l)
              , O = [];
            e: {
                var N = qr.get(e);
                if (N !== void 0) {
                    var j = Pn
                      , F = e;
                    switch (e) {
                    case "keypress":
                        if (Wn(l) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        j = tm;
                        break;
                    case "focusin":
                        F = "focus",
                        j = zi;
                        break;
                    case "focusout":
                        F = "blur",
                        j = zi;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        j = zi;
                        break;
                    case "click":
                        if (l.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        j = dr;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        j = Qh;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        j = nm;
                        break;
                    case Dr:
                    case Ur:
                    case Cr:
                        j = Kh;
                        break;
                    case Hr:
                        j = im;
                        break;
                    case "scroll":
                    case "scrollend":
                        j = Gh;
                        break;
                    case "wheel":
                        j = sm;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        j = Jh;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        j = mr;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        j = fm
                    }
                    var J = (t & 4) !== 0
                      , ye = !J && (e === "scroll" || e === "scrollend")
                      , b = J ? N !== null ? N + "Capture" : null : N;
                    J = [];
                    for (var p = E, S; p !== null; ) {
                        var _ = p;
                        if (S = _.stateNode,
                        _ = _.tag,
                        _ !== 5 && _ !== 26 && _ !== 27 || S === null || b === null || (_ = Ba(p, b),
                        _ != null && J.push(Sn(p, _, S))),
                        ye)
                            break;
                        p = p.return
                    }
                    0 < J.length && (N = new j(N,F,null,l,R),
                    O.push({
                        event: N,
                        listeners: J
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (N = e === "mouseover" || e === "pointerover",
                    j = e === "mouseout" || e === "pointerout",
                    N && l !== Ei && (F = l.relatedTarget || l.fromElement) && (Kl(F) || F[Vl]))
                        break e;
                    if ((j || N) && (N = R.window === R ? R : (N = R.ownerDocument) ? N.defaultView || N.parentWindow : window,
                    j ? (F = l.relatedTarget || l.toElement,
                    j = E,
                    F = F ? Kl(F) : null,
                    F !== null && (ye = g(F),
                    J = F.tag,
                    F !== ye || J !== 5 && J !== 27 && J !== 6) && (F = null)) : (j = null,
                    F = E),
                    j !== F)) {
                        if (J = dr,
                        _ = "onMouseLeave",
                        b = "onMouseEnter",
                        p = "mouse",
                        (e === "pointerout" || e === "pointerover") && (J = mr,
                        _ = "onPointerLeave",
                        b = "onPointerEnter",
                        p = "pointer"),
                        ye = j == null ? N : qa(j),
                        S = F == null ? N : qa(F),
                        N = new J(_,p + "leave",j,l,R),
                        N.target = ye,
                        N.relatedTarget = S,
                        _ = null,
                        Kl(R) === E && (J = new J(b,p + "enter",F,l,R),
                        J.target = S,
                        J.relatedTarget = ye,
                        _ = J),
                        ye = _,
                        j && F)
                            t: {
                                for (J = j,
                                b = F,
                                p = 0,
                                S = J; S; S = Ta(S))
                                    p++;
                                for (S = 0,
                                _ = b; _; _ = Ta(_))
                                    S++;
                                for (; 0 < p - S; )
                                    J = Ta(J),
                                    p--;
                                for (; 0 < S - p; )
                                    b = Ta(b),
                                    S--;
                                for (; p--; ) {
                                    if (J === b || b !== null && J === b.alternate)
                                        break t;
                                    J = Ta(J),
                                    b = Ta(b)
                                }
                                J = null
                            }
                        else
                            J = null;
                        j !== null && ud(O, N, j, J, !1),
                        F !== null && ye !== null && ud(O, ye, F, J, !0)
                    }
                }
                e: {
                    if (N = E ? qa(E) : window,
                    j = N.nodeName && N.nodeName.toLowerCase(),
                    j === "select" || j === "input" && N.type === "file")
                        var X = Er;
                    else if (br(N))
                        if (Nr)
                            X = bm;
                        else {
                            X = pm;
                            var ae = vm
                        }
                    else
                        j = N.nodeName,
                        !j || j.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? E && Si(E.elementType) && (X = Er) : X = xm;
                    if (X && (X = X(e, E))) {
                        Sr(O, X, l, R);
                        break e
                    }
                    ae && ae(e, N, E),
                    e === "focusout" && E && N.type === "number" && E.memoizedProps.value != null && bi(N, "number", N.value)
                }
                switch (ae = E ? qa(E) : window,
                e) {
                case "focusin":
                    (br(ae) || ae.contentEditable === "true") && (la = ae,
                    Ci = E,
                    Ka = null);
                    break;
                case "focusout":
                    Ka = Ci = la = null;
                    break;
                case "mousedown":
                    Hi = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Hi = !1,
                    _r(O, l, R);
                    break;
                case "selectionchange":
                    if (Em)
                        break;
                case "keydown":
                case "keyup":
                    _r(O, l, R)
                }
                var K;
                if (_i)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var $ = "onCompositionStart";
                            break e;
                        case "compositionend":
                            $ = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            $ = "onCompositionUpdate";
                            break e
                        }
                        $ = void 0
                    }
                else
                    ta ? pr(e, l) && ($ = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && ($ = "onCompositionStart");
                $ && (yr && l.locale !== "ko" && (ta || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && ta && (K = fr()) : (tl = R,
                Ti = "value"in tl ? tl.value : tl.textContent,
                ta = !0)),
                ae = Yu(E, $),
                0 < ae.length && ($ = new hr($,e,null,l,R),
                O.push({
                    event: $,
                    listeners: ae
                }),
                K ? $.data = K : (K = xr(l),
                K !== null && ($.data = K)))),
                (K = dm ? hm(e, l) : mm(e, l)) && ($ = Yu(E, "onBeforeInput"),
                0 < $.length && (ae = new hr("onBeforeInput","beforeinput",null,l,R),
                O.push({
                    event: ae,
                    listeners: $
                }),
                ae.data = K)),
                n0(O, e, E, l, R)
            }
            ad(O, t)
        })
    }
    function Sn(e, t, l) {
        return {
            instance: e,
            listener: t,
            currentTarget: l
        }
    }
    function Yu(e, t) {
        for (var l = t + "Capture", a = []; e !== null; ) {
            var n = e
              , u = n.stateNode;
            if (n = n.tag,
            n !== 5 && n !== 26 && n !== 27 || u === null || (n = Ba(e, l),
            n != null && a.unshift(Sn(e, n, u)),
            n = Ba(e, t),
            n != null && a.push(Sn(e, n, u))),
            e.tag === 3)
                return a;
            e = e.return
        }
        return []
    }
    function Ta(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function ud(e, t, l, a, n) {
        for (var u = t._reactName, c = []; l !== null && l !== a; ) {
            var r = l
              , m = r.alternate
              , E = r.stateNode;
            if (r = r.tag,
            m !== null && m === a)
                break;
            r !== 5 && r !== 26 && r !== 27 || E === null || (m = E,
            n ? (E = Ba(l, u),
            E != null && c.unshift(Sn(l, E, m))) : n || (E = Ba(l, u),
            E != null && c.push(Sn(l, E, m)))),
            l = l.return
        }
        c.length !== 0 && e.push({
            event: t,
            listeners: c
        })
    }
    var s0 = /\r\n?/g
      , r0 = /\u0000|\uFFFD/g;
    function id(e) {
        return (typeof e == "string" ? e : "" + e).replace(s0, `
`).replace(r0, "")
    }
    function cd(e, t) {
        return t = id(t),
        id(e) === t
    }
    function Lu() {}
    function me(e, t, l, a, n, u) {
        switch (l) {
        case "children":
            typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Pl(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Pl(e, "" + a);
            break;
        case "className":
            Vn(e, "class", a);
            break;
        case "tabIndex":
            Vn(e, "tabindex", a);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Vn(e, l, a);
            break;
        case "style":
            cr(e, a, u);
            break;
        case "data":
            if (t !== "object") {
                Vn(e, "data", a);
                break
            }
        case "src":
        case "href":
            if (a === "" && (t !== "a" || l !== "href")) {
                e.removeAttribute(l);
                break
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                e.removeAttribute(l);
                break
            }
            a = Jn("" + a),
            e.setAttribute(l, a);
            break;
        case "action":
        case "formAction":
            if (typeof a == "function") {
                e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof u == "function" && (l === "formAction" ? (t !== "input" && me(e, t, "name", n.name, n, null),
                me(e, t, "formEncType", n.formEncType, n, null),
                me(e, t, "formMethod", n.formMethod, n, null),
                me(e, t, "formTarget", n.formTarget, n, null)) : (me(e, t, "encType", n.encType, n, null),
                me(e, t, "method", n.method, n, null),
                me(e, t, "target", n.target, n, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                e.removeAttribute(l);
                break
            }
            a = Jn("" + a),
            e.setAttribute(l, a);
            break;
        case "onClick":
            a != null && (e.onclick = Lu);
            break;
        case "onScroll":
            a != null && ue("scroll", e);
            break;
        case "onScrollEnd":
            a != null && ue("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(f(61));
                if (l = a.__html,
                l != null) {
                    if (n.children != null)
                        throw Error(f(60));
                    e.innerHTML = l
                }
            }
            break;
        case "multiple":
            e.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "muted":
            e.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            l = Jn("" + a),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
            break;
        case "capture":
        case "download":
            a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
            break;
        case "rowSpan":
        case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
            break;
        case "popover":
            ue("beforetoggle", e),
            ue("toggle", e),
            Zn(e, "popover", a);
            break;
        case "xlinkActuate":
            Dt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
        case "xlinkArcrole":
            Dt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
        case "xlinkRole":
            Dt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
        case "xlinkShow":
            Dt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
        case "xlinkTitle":
            Dt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
        case "xlinkType":
            Dt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
        case "xmlBase":
            Dt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
        case "xmlLang":
            Dt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
        case "xmlSpace":
            Dt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
        case "is":
            Zn(e, "is", a);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Yh.get(l) || l,
            Zn(e, l, a))
        }
    }
    function us(e, t, l, a, n, u) {
        switch (l) {
        case "style":
            cr(e, a, u);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(f(61));
                if (l = a.__html,
                l != null) {
                    if (n.children != null)
                        throw Error(f(60));
                    e.innerHTML = l
                }
            }
            break;
        case "children":
            typeof a == "string" ? Pl(e, a) : (typeof a == "number" || typeof a == "bigint") && Pl(e, "" + a);
            break;
        case "onScroll":
            a != null && ue("scroll", e);
            break;
        case "onScrollEnd":
            a != null && ue("scrollend", e);
            break;
        case "onClick":
            a != null && (e.onclick = Lu);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Ws.hasOwnProperty(l))
                e: {
                    if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"),
                    t = l.slice(2, n ? l.length - 7 : void 0),
                    u = e[Fe] || null,
                    u = u != null ? u[l] : null,
                    typeof u == "function" && e.removeEventListener(t, u, n),
                    typeof a == "function")) {
                        typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)),
                        e.addEventListener(t, a, n);
                        break e
                    }
                    l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : Zn(e, l, a)
                }
        }
    }
    function Qe(e, t, l) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            ue("error", e),
            ue("load", e);
            var a = !1, n = !1, u;
            for (u in l)
                if (l.hasOwnProperty(u)) {
                    var c = l[u];
                    if (c != null)
                        switch (u) {
                        case "src":
                            a = !0;
                            break;
                        case "srcSet":
                            n = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(f(137, t));
                        default:
                            me(e, t, u, c, l, null)
                        }
                }
            n && me(e, t, "srcSet", l.srcSet, l, null),
            a && me(e, t, "src", l.src, l, null);
            return;
        case "input":
            ue("invalid", e);
            var r = u = c = n = null
              , m = null
              , E = null;
            for (a in l)
                if (l.hasOwnProperty(a)) {
                    var R = l[a];
                    if (R != null)
                        switch (a) {
                        case "name":
                            n = R;
                            break;
                        case "type":
                            c = R;
                            break;
                        case "checked":
                            m = R;
                            break;
                        case "defaultChecked":
                            E = R;
                            break;
                        case "value":
                            u = R;
                            break;
                        case "defaultValue":
                            r = R;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (R != null)
                                throw Error(f(137, t));
                            break;
                        default:
                            me(e, t, a, R, l, null)
                        }
                }
            ar(e, u, r, m, E, c, n, !1),
            Kn(e);
            return;
        case "select":
            ue("invalid", e),
            a = c = u = null;
            for (n in l)
                if (l.hasOwnProperty(n) && (r = l[n],
                r != null))
                    switch (n) {
                    case "value":
                        u = r;
                        break;
                    case "defaultValue":
                        c = r;
                        break;
                    case "multiple":
                        a = r;
                    default:
                        me(e, t, n, r, l, null)
                    }
            t = u,
            l = c,
            e.multiple = !!a,
            t != null ? Fl(e, !!a, t, !1) : l != null && Fl(e, !!a, l, !0);
            return;
        case "textarea":
            ue("invalid", e),
            u = n = a = null;
            for (c in l)
                if (l.hasOwnProperty(c) && (r = l[c],
                r != null))
                    switch (c) {
                    case "value":
                        a = r;
                        break;
                    case "defaultValue":
                        n = r;
                        break;
                    case "children":
                        u = r;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (r != null)
                            throw Error(f(91));
                        break;
                    default:
                        me(e, t, c, r, l, null)
                    }
            ur(e, a, n, u),
            Kn(e);
            return;
        case "option":
            for (m in l)
                if (l.hasOwnProperty(m) && (a = l[m],
                a != null))
                    switch (m) {
                    case "selected":
                        e.selected = a && typeof a != "function" && typeof a != "symbol";
                        break;
                    default:
                        me(e, t, m, a, l, null)
                    }
            return;
        case "dialog":
            ue("beforetoggle", e),
            ue("toggle", e),
            ue("cancel", e),
            ue("close", e);
            break;
        case "iframe":
        case "object":
            ue("load", e);
            break;
        case "video":
        case "audio":
            for (a = 0; a < bn.length; a++)
                ue(bn[a], e);
            break;
        case "image":
            ue("error", e),
            ue("load", e);
            break;
        case "details":
            ue("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            ue("error", e),
            ue("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (E in l)
                if (l.hasOwnProperty(E) && (a = l[E],
                a != null))
                    switch (E) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(f(137, t));
                    default:
                        me(e, t, E, a, l, null)
                    }
            return;
        default:
            if (Si(t)) {
                for (R in l)
                    l.hasOwnProperty(R) && (a = l[R],
                    a !== void 0 && us(e, t, R, a, l, void 0));
                return
            }
        }
        for (r in l)
            l.hasOwnProperty(r) && (a = l[r],
            a != null && me(e, t, r, a, l, null))
    }
    function f0(e, t, l, a) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var n = null
              , u = null
              , c = null
              , r = null
              , m = null
              , E = null
              , R = null;
            for (j in l) {
                var O = l[j];
                if (l.hasOwnProperty(j) && O != null)
                    switch (j) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        m = O;
                    default:
                        a.hasOwnProperty(j) || me(e, t, j, null, a, O)
                    }
            }
            for (var N in a) {
                var j = a[N];
                if (O = l[N],
                a.hasOwnProperty(N) && (j != null || O != null))
                    switch (N) {
                    case "type":
                        u = j;
                        break;
                    case "name":
                        n = j;
                        break;
                    case "checked":
                        E = j;
                        break;
                    case "defaultChecked":
                        R = j;
                        break;
                    case "value":
                        c = j;
                        break;
                    case "defaultValue":
                        r = j;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (j != null)
                            throw Error(f(137, t));
                        break;
                    default:
                        j !== O && me(e, t, N, j, a, O)
                    }
            }
            xi(e, c, r, m, E, R, u, n);
            return;
        case "select":
            j = c = r = N = null;
            for (u in l)
                if (m = l[u],
                l.hasOwnProperty(u) && m != null)
                    switch (u) {
                    case "value":
                        break;
                    case "multiple":
                        j = m;
                    default:
                        a.hasOwnProperty(u) || me(e, t, u, null, a, m)
                    }
            for (n in a)
                if (u = a[n],
                m = l[n],
                a.hasOwnProperty(n) && (u != null || m != null))
                    switch (n) {
                    case "value":
                        N = u;
                        break;
                    case "defaultValue":
                        r = u;
                        break;
                    case "multiple":
                        c = u;
                    default:
                        u !== m && me(e, t, n, u, a, m)
                    }
            t = r,
            l = c,
            a = j,
            N != null ? Fl(e, !!l, N, !1) : !!a != !!l && (t != null ? Fl(e, !!l, t, !0) : Fl(e, !!l, l ? [] : "", !1));
            return;
        case "textarea":
            j = N = null;
            for (r in l)
                if (n = l[r],
                l.hasOwnProperty(r) && n != null && !a.hasOwnProperty(r))
                    switch (r) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        me(e, t, r, null, a, n)
                    }
            for (c in a)
                if (n = a[c],
                u = l[c],
                a.hasOwnProperty(c) && (n != null || u != null))
                    switch (c) {
                    case "value":
                        N = n;
                        break;
                    case "defaultValue":
                        j = n;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (n != null)
                            throw Error(f(91));
                        break;
                    default:
                        n !== u && me(e, t, c, n, a, u)
                    }
            nr(e, N, j);
            return;
        case "option":
            for (var F in l)
                if (N = l[F],
                l.hasOwnProperty(F) && N != null && !a.hasOwnProperty(F))
                    switch (F) {
                    case "selected":
                        e.selected = !1;
                        break;
                    default:
                        me(e, t, F, null, a, N)
                    }
            for (m in a)
                if (N = a[m],
                j = l[m],
                a.hasOwnProperty(m) && N !== j && (N != null || j != null))
                    switch (m) {
                    case "selected":
                        e.selected = N && typeof N != "function" && typeof N != "symbol";
                        break;
                    default:
                        me(e, t, m, N, a, j)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var J in l)
                N = l[J],
                l.hasOwnProperty(J) && N != null && !a.hasOwnProperty(J) && me(e, t, J, null, a, N);
            for (E in a)
                if (N = a[E],
                j = l[E],
                a.hasOwnProperty(E) && N !== j && (N != null || j != null))
                    switch (E) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (N != null)
                            throw Error(f(137, t));
                        break;
                    default:
                        me(e, t, E, N, a, j)
                    }
            return;
        default:
            if (Si(t)) {
                for (var ye in l)
                    N = l[ye],
                    l.hasOwnProperty(ye) && N !== void 0 && !a.hasOwnProperty(ye) && us(e, t, ye, void 0, a, N);
                for (R in a)
                    N = a[R],
                    j = l[R],
                    !a.hasOwnProperty(R) || N === j || N === void 0 && j === void 0 || us(e, t, R, N, a, j);
                return
            }
        }
        for (var b in l)
            N = l[b],
            l.hasOwnProperty(b) && N != null && !a.hasOwnProperty(b) && me(e, t, b, null, a, N);
        for (O in a)
            N = a[O],
            j = l[O],
            !a.hasOwnProperty(O) || N === j || N == null && j == null || me(e, t, O, N, a, j)
    }
    var is = null
      , cs = null;
    function Gu(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function sd(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function rd(e, t) {
        if (e === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function ss(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var rs = null;
    function o0() {
        var e = window.event;
        return e && e.type === "popstate" ? e === rs ? !1 : (rs = e,
        !0) : (rs = null,
        !1)
    }
    var fd = typeof setTimeout == "function" ? setTimeout : void 0
      , d0 = typeof clearTimeout == "function" ? clearTimeout : void 0
      , od = typeof Promise == "function" ? Promise : void 0
      , h0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof od < "u" ? function(e) {
        return od.resolve(null).then(e).catch(m0)
    }
    : fd;
    function m0(e) {
        setTimeout(function() {
            throw e
        })
    }
    function vl(e) {
        return e === "head"
    }
    function dd(e, t) {
        var l = t
          , a = 0
          , n = 0;
        do {
            var u = l.nextSibling;
            if (e.removeChild(l),
            u && u.nodeType === 8)
                if (l = u.data,
                l === "/$") {
                    if (0 < a && 8 > a) {
                        l = a;
                        var c = e.ownerDocument;
                        if (l & 1 && En(c.documentElement),
                        l & 2 && En(c.body),
                        l & 4)
                            for (l = c.head,
                            En(l),
                            c = l.firstChild; c; ) {
                                var r = c.nextSibling
                                  , m = c.nodeName;
                                c[Ha] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && c.rel.toLowerCase() === "stylesheet" || l.removeChild(c),
                                c = r
                            }
                    }
                    if (n === 0) {
                        e.removeChild(u),
                        Mn(t);
                        return
                    }
                    n--
                } else
                    l === "$" || l === "$?" || l === "$!" ? n++ : a = l.charCodeAt(0) - 48;
            else
                a = 0;
            l = u
        } while (l);
        Mn(t)
    }
    function fs(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var l = t;
            switch (t = t.nextSibling,
            l.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                fs(l),
                yi(l);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (l.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(l)
        }
    }
    function y0(e, t, l, a) {
        for (; e.nodeType === 1; ) {
            var n = l;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (a) {
                if (!e[Ha])
                    switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (u = e.getAttribute("rel"),
                        u === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (u !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (u = e.getAttribute("src"),
                        (u !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var u = n.name == null ? null : "" + n.name;
                if (n.type === "hidden" && e.getAttribute("name") === u)
                    return e
            } else
                return e;
            if (e = jt(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function g0(e, t, l) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = jt(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function os(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
    }
    function v0(e, t) {
        var l = e.ownerDocument;
        if (e.data !== "$?" || l.readyState === "complete")
            t();
        else {
            var a = function() {
                t(),
                l.removeEventListener("DOMContentLoaded", a)
            };
            l.addEventListener("DOMContentLoaded", a),
            e._reactRetry = a
        }
    }
    function jt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    var ds = null;
    function hd(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === "$" || l === "$!" || l === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    l === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    function md(e, t, l) {
        switch (t = Gu(l),
        e) {
        case "html":
            if (e = t.documentElement,
            !e)
                throw Error(f(452));
            return e;
        case "head":
            if (e = t.head,
            !e)
                throw Error(f(453));
            return e;
        case "body":
            if (e = t.body,
            !e)
                throw Error(f(454));
            return e;
        default:
            throw Error(f(451))
        }
    }
    function En(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        yi(e)
    }
    var St = new Map
      , yd = new Set;
    function Xu(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var kt = Y.d;
    Y.d = {
        f: p0,
        r: x0,
        D: b0,
        C: S0,
        L: E0,
        m: N0,
        X: w0,
        S: j0,
        M: T0
    };
    function p0() {
        var e = kt.f()
          , t = Du();
        return e || t
    }
    function x0(e) {
        var t = kl(e);
        t !== null && t.tag === 5 && t.type === "form" ? Uf(t) : kt.r(e)
    }
    var Aa = typeof document > "u" ? null : document;
    function gd(e, t, l) {
        var a = Aa;
        if (a && typeof t == "string" && t) {
            var n = mt(t);
            n = 'link[rel="' + e + '"][href="' + n + '"]',
            typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
            yd.has(n) || (yd.add(n),
            e = {
                rel: e,
                crossOrigin: l,
                href: t
            },
            a.querySelector(n) === null && (t = a.createElement("link"),
            Qe(t, "link", e),
            qe(t),
            a.head.appendChild(t)))
        }
    }
    function b0(e) {
        kt.D(e),
        gd("dns-prefetch", e, null)
    }
    function S0(e, t) {
        kt.C(e, t),
        gd("preconnect", e, t)
    }
    function E0(e, t, l) {
        kt.L(e, t, l);
        var a = Aa;
        if (a && e && t) {
            var n = 'link[rel="preload"][as="' + mt(t) + '"]';
            t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + mt(l.imageSrcSet) + '"]',
            typeof l.imageSizes == "string" && (n += '[imagesizes="' + mt(l.imageSizes) + '"]')) : n += '[href="' + mt(e) + '"]';
            var u = n;
            switch (t) {
            case "style":
                u = Ra(e);
                break;
            case "script":
                u = za(e)
            }
            St.has(u) || (e = T({
                rel: "preload",
                href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                as: t
            }, l),
            St.set(u, e),
            a.querySelector(n) !== null || t === "style" && a.querySelector(Nn(u)) || t === "script" && a.querySelector(jn(u)) || (t = a.createElement("link"),
            Qe(t, "link", e),
            qe(t),
            a.head.appendChild(t)))
        }
    }
    function N0(e, t) {
        kt.m(e, t);
        var l = Aa;
        if (l && e) {
            var a = t && typeof t.as == "string" ? t.as : "script"
              , n = 'link[rel="modulepreload"][as="' + mt(a) + '"][href="' + mt(e) + '"]'
              , u = n;
            switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                u = za(e)
            }
            if (!St.has(u) && (e = T({
                rel: "modulepreload",
                href: e
            }, t),
            St.set(u, e),
            l.querySelector(n) === null)) {
                switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (l.querySelector(jn(u)))
                        return
                }
                a = l.createElement("link"),
                Qe(a, "link", e),
                qe(a),
                l.head.appendChild(a)
            }
        }
    }
    function j0(e, t, l) {
        kt.S(e, t, l);
        var a = Aa;
        if (a && e) {
            var n = Jl(a).hoistableStyles
              , u = Ra(e);
            t = t || "default";
            var c = n.get(u);
            if (!c) {
                var r = {
                    loading: 0,
                    preload: null
                };
                if (c = a.querySelector(Nn(u)))
                    r.loading = 5;
                else {
                    e = T({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, l),
                    (l = St.get(u)) && hs(e, l);
                    var m = c = a.createElement("link");
                    qe(m),
                    Qe(m, "link", e),
                    m._p = new Promise(function(E, R) {
                        m.onload = E,
                        m.onerror = R
                    }
                    ),
                    m.addEventListener("load", function() {
                        r.loading |= 1
                    }),
                    m.addEventListener("error", function() {
                        r.loading |= 2
                    }),
                    r.loading |= 4,
                    Qu(c, t, a)
                }
                c = {
                    type: "stylesheet",
                    instance: c,
                    count: 1,
                    state: r
                },
                n.set(u, c)
            }
        }
    }
    function w0(e, t) {
        kt.X(e, t);
        var l = Aa;
        if (l && e) {
            var a = Jl(l).hoistableScripts
              , n = za(e)
              , u = a.get(n);
            u || (u = l.querySelector(jn(n)),
            u || (e = T({
                src: e,
                async: !0
            }, t),
            (t = St.get(n)) && ms(e, t),
            u = l.createElement("script"),
            qe(u),
            Qe(u, "link", e),
            l.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            a.set(n, u))
        }
    }
    function T0(e, t) {
        kt.M(e, t);
        var l = Aa;
        if (l && e) {
            var a = Jl(l).hoistableScripts
              , n = za(e)
              , u = a.get(n);
            u || (u = l.querySelector(jn(n)),
            u || (e = T({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = St.get(n)) && ms(e, t),
            u = l.createElement("script"),
            qe(u),
            Qe(u, "link", e),
            l.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            a.set(n, u))
        }
    }
    function vd(e, t, l, a) {
        var n = (n = ee.current) ? Xu(n) : null;
        if (!n)
            throw Error(f(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Ra(l.href),
            l = Jl(n).hoistableStyles,
            a = l.get(t),
            a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            l.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                e = Ra(l.href);
                var u = Jl(n).hoistableStyles
                  , c = u.get(e);
                if (c || (n = n.ownerDocument || n,
                c = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                u.set(e, c),
                (u = n.querySelector(Nn(e))) && !u._p && (c.instance = u,
                c.state.loading = 5),
                St.has(e) || (l = {
                    rel: "preload",
                    as: "style",
                    href: l.href,
                    crossOrigin: l.crossOrigin,
                    integrity: l.integrity,
                    media: l.media,
                    hrefLang: l.hrefLang,
                    referrerPolicy: l.referrerPolicy
                },
                St.set(e, l),
                u || A0(n, e, l, c.state))),
                t && a === null)
                    throw Error(f(528, ""));
                return c
            }
            if (t && a !== null)
                throw Error(f(529, ""));
            return null;
        case "script":
            return t = l.async,
            l = l.src,
            typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = za(l),
            l = Jl(n).hoistableScripts,
            a = l.get(t),
            a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            l.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(f(444, e))
        }
    }
    function Ra(e) {
        return 'href="' + mt(e) + '"'
    }
    function Nn(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function pd(e) {
        return T({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function A0(e, t, l, a) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"),
        a.preload = t,
        t.addEventListener("load", function() {
            return a.loading |= 1
        }),
        t.addEventListener("error", function() {
            return a.loading |= 2
        }),
        Qe(t, "link", l),
        qe(t),
        e.head.appendChild(t))
    }
    function za(e) {
        return '[src="' + mt(e) + '"]'
    }
    function jn(e) {
        return "script[async]" + e
    }
    function xd(e, t, l) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var a = e.querySelector('style[data-href~="' + mt(l.href) + '"]');
                if (a)
                    return t.instance = a,
                    qe(a),
                    a;
                var n = T({}, l, {
                    "data-href": l.href,
                    "data-precedence": l.precedence,
                    href: null,
                    precedence: null
                });
                return a = (e.ownerDocument || e).createElement("style"),
                qe(a),
                Qe(a, "style", n),
                Qu(a, l.precedence, e),
                t.instance = a;
            case "stylesheet":
                n = Ra(l.href);
                var u = e.querySelector(Nn(n));
                if (u)
                    return t.state.loading |= 4,
                    t.instance = u,
                    qe(u),
                    u;
                a = pd(l),
                (n = St.get(n)) && hs(a, n),
                u = (e.ownerDocument || e).createElement("link"),
                qe(u);
                var c = u;
                return c._p = new Promise(function(r, m) {
                    c.onload = r,
                    c.onerror = m
                }
                ),
                Qe(u, "link", a),
                t.state.loading |= 4,
                Qu(u, l.precedence, e),
                t.instance = u;
            case "script":
                return u = za(l.src),
                (n = e.querySelector(jn(u))) ? (t.instance = n,
                qe(n),
                n) : (a = l,
                (n = St.get(u)) && (a = T({}, l),
                ms(a, n)),
                e = e.ownerDocument || e,
                n = e.createElement("script"),
                qe(n),
                Qe(n, "link", a),
                e.head.appendChild(n),
                t.instance = n);
            case "void":
                return null;
            default:
                throw Error(f(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance,
            t.state.loading |= 4,
            Qu(a, l.precedence, e));
        return t.instance
    }
    function Qu(e, t, l) {
        for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, c = 0; c < a.length; c++) {
            var r = a[c];
            if (r.dataset.precedence === t)
                u = r;
            else if (u !== n)
                break
        }
        u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l,
        t.insertBefore(e, t.firstChild))
    }
    function hs(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function ms(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var Zu = null;
    function bd(e, t, l) {
        if (Zu === null) {
            var a = new Map
              , n = Zu = new Map;
            n.set(l, a)
        } else
            n = Zu,
            a = n.get(l),
            a || (a = new Map,
            n.set(l, a));
        if (a.has(e))
            return a;
        for (a.set(e, null),
        l = l.getElementsByTagName(e),
        n = 0; n < l.length; n++) {
            var u = l[n];
            if (!(u[Ha] || u[Ke] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var c = u.getAttribute(t) || "";
                c = e + c;
                var r = a.get(c);
                r ? r.push(u) : a.set(c, [u])
            }
        }
        return a
    }
    function Sd(e, t, l) {
        e = e.ownerDocument || e,
        e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null)
    }
    function R0(e, t, l) {
        if (l === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            switch (t.rel) {
            case "stylesheet":
                return e = t.disabled,
                typeof t.precedence == "string" && e == null;
            default:
                return !0
            }
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function Ed(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var wn = null;
    function z0() {}
    function M0(e, t, l) {
        if (wn === null)
            throw Error(f(475));
        var a = wn;
        if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var n = Ra(l.href)
                  , u = e.querySelector(Nn(n));
                if (u) {
                    e = u._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (a.count++,
                    a = Vu.bind(a),
                    e.then(a, a)),
                    t.state.loading |= 4,
                    t.instance = u,
                    qe(u);
                    return
                }
                u = e.ownerDocument || e,
                l = pd(l),
                (n = St.get(n)) && hs(l, n),
                u = u.createElement("link"),
                qe(u);
                var c = u;
                c._p = new Promise(function(r, m) {
                    c.onload = r,
                    c.onerror = m
                }
                ),
                Qe(u, "link", l),
                t.instance = u
            }
            a.stylesheets === null && (a.stylesheets = new Map),
            a.stylesheets.set(t, e),
            (e = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++,
            t = Vu.bind(a),
            e.addEventListener("load", t),
            e.addEventListener("error", t))
        }
    }
    function _0() {
        if (wn === null)
            throw Error(f(475));
        var e = wn;
        return e.stylesheets && e.count === 0 && ys(e, e.stylesheets),
        0 < e.count ? function(t) {
            var l = setTimeout(function() {
                if (e.stylesheets && ys(e, e.stylesheets),
                e.unsuspend) {
                    var a = e.unsuspend;
                    e.unsuspend = null,
                    a()
                }
            }, 6e4);
            return e.unsuspend = t,
            function() {
                e.unsuspend = null,
                clearTimeout(l)
            }
        }
        : null
    }
    function Vu() {
        if (this.count--,
        this.count === 0) {
            if (this.stylesheets)
                ys(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var Ku = null;
    function ys(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        Ku = new Map,
        t.forEach(O0, e),
        Ku = null,
        Vu.call(e))
    }
    function O0(e, t) {
        if (!(t.state.loading & 4)) {
            var l = Ku.get(e);
            if (l)
                var a = l.get(null);
            else {
                l = new Map,
                Ku.set(e, l);
                for (var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
                    var c = n[u];
                    (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c),
                    a = c)
                }
                a && l.set(null, a)
            }
            n = t.instance,
            c = n.getAttribute("data-precedence"),
            u = l.get(c) || a,
            u === a && l.set(null, n),
            l.set(c, n),
            this.count++,
            a = Vu.bind(this),
            n.addEventListener("load", a),
            n.addEventListener("error", a),
            u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(n, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var Tn = {
        $$typeof: P,
        Provider: null,
        Consumer: null,
        _currentValue: W,
        _currentValue2: W,
        _threadCount: 0
    };
    function D0(e, t, l, a, n, u, c, r) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = oi(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = oi(0),
        this.hiddenUpdates = oi(null),
        this.identifierPrefix = a,
        this.onUncaughtError = n,
        this.onCaughtError = u,
        this.onRecoverableError = c,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = r,
        this.incompleteTransitions = new Map
    }
    function Nd(e, t, l, a, n, u, c, r, m, E, R, O) {
        return e = new D0(e,t,l,c,r,m,E,O),
        t = 1,
        u === !0 && (t |= 24),
        u = it(3, null, null, t),
        e.current = u,
        u.stateNode = e,
        t = Wi(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        u.memoizedState = {
            element: a,
            isDehydrated: l,
            cache: t
        },
        ec(u),
        e
    }
    function jd(e) {
        return e ? (e = ia,
        e) : ia
    }
    function wd(e, t, l, a, n, u) {
        n = jd(n),
        a.context === null ? a.context = n : a.pendingContext = n,
        a = nl(t),
        a.payload = {
            element: l
        },
        u = u === void 0 ? null : u,
        u !== null && (a.callback = u),
        l = ul(e, a, t),
        l !== null && (ot(l, e, t),
        tn(l, e, t))
    }
    function Td(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var l = e.retryLane;
            e.retryLane = l !== 0 && l < t ? l : t
        }
    }
    function gs(e, t) {
        Td(e, t),
        (e = e.alternate) && Td(e, t)
    }
    function Ad(e) {
        if (e.tag === 13) {
            var t = ua(e, 67108864);
            t !== null && ot(t, e, 67108864),
            gs(e, 67108864)
        }
    }
    var ku = !0;
    function U0(e, t, l, a) {
        var n = z.T;
        z.T = null;
        var u = Y.p;
        try {
            Y.p = 2,
            vs(e, t, l, a)
        } finally {
            Y.p = u,
            z.T = n
        }
    }
    function C0(e, t, l, a) {
        var n = z.T;
        z.T = null;
        var u = Y.p;
        try {
            Y.p = 8,
            vs(e, t, l, a)
        } finally {
            Y.p = u,
            z.T = n
        }
    }
    function vs(e, t, l, a) {
        if (ku) {
            var n = ps(a);
            if (n === null)
                ns(e, t, a, Ju, l),
                zd(e, a);
            else if (q0(n, e, t, l, a))
                a.stopPropagation();
            else if (zd(e, a),
            t & 4 && -1 < H0.indexOf(e)) {
                for (; n !== null; ) {
                    var u = kl(n);
                    if (u !== null)
                        switch (u.tag) {
                        case 3:
                            if (u = u.stateNode,
                            u.current.memoizedState.isDehydrated) {
                                var c = wl(u.pendingLanes);
                                if (c !== 0) {
                                    var r = u;
                                    for (r.pendingLanes |= 2,
                                    r.entangledLanes |= 2; c; ) {
                                        var m = 1 << 31 - nt(c);
                                        r.entanglements[1] |= m,
                                        c &= ~m
                                    }
                                    Mt(u),
                                    (oe & 6) === 0 && (_u = wt() + 500,
                                    xn(0))
                                }
                            }
                            break;
                        case 13:
                            r = ua(u, 2),
                            r !== null && ot(r, u, 2),
                            Du(),
                            gs(u, 2)
                        }
                    if (u = ps(a),
                    u === null && ns(e, t, a, Ju, l),
                    u === n)
                        break;
                    n = u
                }
                n !== null && a.stopPropagation()
            } else
                ns(e, t, a, null, l)
        }
    }
    function ps(e) {
        return e = Ni(e),
        xs(e)
    }
    var Ju = null;
    function xs(e) {
        if (Ju = null,
        e = Kl(e),
        e !== null) {
            var t = g(e);
            if (t === null)
                e = null;
            else {
                var l = t.tag;
                if (l === 13) {
                    if (e = w(t),
                    e !== null)
                        return e;
                    e = null
                } else if (l === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return Ju = e,
        null
    }
    function Rd(e) {
        switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (Sh()) {
            case Ls:
                return 2;
            case Gs:
                return 8;
            case Ln:
            case Eh:
                return 32;
            case Xs:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var bs = !1
      , pl = null
      , xl = null
      , bl = null
      , An = new Map
      , Rn = new Map
      , Sl = []
      , H0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function zd(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            pl = null;
            break;
        case "dragenter":
        case "dragleave":
            xl = null;
            break;
        case "mouseover":
        case "mouseout":
            bl = null;
            break;
        case "pointerover":
        case "pointerout":
            An.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Rn.delete(t.pointerId)
        }
    }
    function zn(e, t, l, a, n, u) {
        return e === null || e.nativeEvent !== u ? (e = {
            blockedOn: t,
            domEventName: l,
            eventSystemFlags: a,
            nativeEvent: u,
            targetContainers: [n]
        },
        t !== null && (t = kl(t),
        t !== null && Ad(t)),
        e) : (e.eventSystemFlags |= a,
        t = e.targetContainers,
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e)
    }
    function q0(e, t, l, a, n) {
        switch (t) {
        case "focusin":
            return pl = zn(pl, e, t, l, a, n),
            !0;
        case "dragenter":
            return xl = zn(xl, e, t, l, a, n),
            !0;
        case "mouseover":
            return bl = zn(bl, e, t, l, a, n),
            !0;
        case "pointerover":
            var u = n.pointerId;
            return An.set(u, zn(An.get(u) || null, e, t, l, a, n)),
            !0;
        case "gotpointercapture":
            return u = n.pointerId,
            Rn.set(u, zn(Rn.get(u) || null, e, t, l, a, n)),
            !0
        }
        return !1
    }
    function Md(e) {
        var t = Kl(e.target);
        if (t !== null) {
            var l = g(t);
            if (l !== null) {
                if (t = l.tag,
                t === 13) {
                    if (t = w(l),
                    t !== null) {
                        e.blockedOn = t,
                        Mh(e.priority, function() {
                            if (l.tag === 13) {
                                var a = ft();
                                a = di(a);
                                var n = ua(l, a);
                                n !== null && ot(n, l, a),
                                gs(l, a)
                            }
                        });
                        return
                    }
                } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function $u(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var l = ps(e.nativeEvent);
            if (l === null) {
                l = e.nativeEvent;
                var a = new l.constructor(l.type,l);
                Ei = a,
                l.target.dispatchEvent(a),
                Ei = null
            } else
                return t = kl(l),
                t !== null && Ad(t),
                e.blockedOn = l,
                !1;
            t.shift()
        }
        return !0
    }
    function _d(e, t, l) {
        $u(e) && l.delete(t)
    }
    function B0() {
        bs = !1,
        pl !== null && $u(pl) && (pl = null),
        xl !== null && $u(xl) && (xl = null),
        bl !== null && $u(bl) && (bl = null),
        An.forEach(_d),
        Rn.forEach(_d)
    }
    function Wu(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        bs || (bs = !0,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, B0)))
    }
    var Fu = null;
    function Od(e) {
        Fu !== e && (Fu = e,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
            Fu === e && (Fu = null);
            for (var t = 0; t < e.length; t += 3) {
                var l = e[t]
                  , a = e[t + 1]
                  , n = e[t + 2];
                if (typeof a != "function") {
                    if (xs(a || l) === null)
                        continue;
                    break
                }
                var u = kl(l);
                u !== null && (e.splice(t, 3),
                t -= 3,
                xc(u, {
                    pending: !0,
                    data: n,
                    method: l.method,
                    action: a
                }, a, n))
            }
        }))
    }
    function Mn(e) {
        function t(m) {
            return Wu(m, e)
        }
        pl !== null && Wu(pl, e),
        xl !== null && Wu(xl, e),
        bl !== null && Wu(bl, e),
        An.forEach(t),
        Rn.forEach(t);
        for (var l = 0; l < Sl.length; l++) {
            var a = Sl[l];
            a.blockedOn === e && (a.blockedOn = null)
        }
        for (; 0 < Sl.length && (l = Sl[0],
        l.blockedOn === null); )
            Md(l),
            l.blockedOn === null && Sl.shift();
        if (l = (e.ownerDocument || e).$$reactFormReplay,
        l != null)
            for (a = 0; a < l.length; a += 3) {
                var n = l[a]
                  , u = l[a + 1]
                  , c = n[Fe] || null;
                if (typeof u == "function")
                    c || Od(l);
                else if (c) {
                    var r = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (n = u,
                        c = u[Fe] || null)
                            r = c.formAction;
                        else if (xs(n) !== null)
                            continue
                    } else
                        r = c.action;
                    typeof r == "function" ? l[a + 1] = r : (l.splice(a, 3),
                    a -= 3),
                    Od(l)
                }
            }
    }
    function Ss(e) {
        this._internalRoot = e
    }
    Pu.prototype.render = Ss.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(f(409));
        var l = t.current
          , a = ft();
        wd(l, a, e, t, null, null)
    }
    ,
    Pu.prototype.unmount = Ss.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            wd(e.current, 2, null, e, null, null),
            Du(),
            t[Vl] = null
        }
    }
    ;
    function Pu(e) {
        this._internalRoot = e
    }
    Pu.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = ks();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var l = 0; l < Sl.length && t !== 0 && t < Sl[l].priority; l++)
                ;
            Sl.splice(l, 0, e),
            l === 0 && Md(e)
        }
    }
    ;
    var Dd = o.version;
    if (Dd !== "19.1.0")
        throw Error(f(527, Dd, "19.1.0"));
    Y.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","),
            Error(f(268, e)));
        return e = x(t),
        e = e !== null ? y(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var Y0 = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: z,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Iu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Iu.isDisabled && Iu.supportsFiber)
            try {
                Da = Iu.inject(Y0),
                at = Iu
            } catch {}
    }
    return On.createRoot = function(e, t) {
        if (!h(e))
            throw Error(f(299));
        var l = !1
          , a = ""
          , n = Jf
          , u = $f
          , c = Wf
          , r = null;
        return t != null && (t.unstable_strictMode === !0 && (l = !0),
        t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
        t.onCaughtError !== void 0 && (u = t.onCaughtError),
        t.onRecoverableError !== void 0 && (c = t.onRecoverableError),
        t.unstable_transitionCallbacks !== void 0 && (r = t.unstable_transitionCallbacks)),
        t = Nd(e, 1, !1, null, null, l, a, n, u, c, r, null),
        e[Vl] = t.current,
        as(e),
        new Ss(t)
    }
    ,
    On.hydrateRoot = function(e, t, l) {
        if (!h(e))
            throw Error(f(299));
        var a = !1
          , n = ""
          , u = Jf
          , c = $f
          , r = Wf
          , m = null
          , E = null;
        return l != null && (l.unstable_strictMode === !0 && (a = !0),
        l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
        l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
        l.onCaughtError !== void 0 && (c = l.onCaughtError),
        l.onRecoverableError !== void 0 && (r = l.onRecoverableError),
        l.unstable_transitionCallbacks !== void 0 && (m = l.unstable_transitionCallbacks),
        l.formState !== void 0 && (E = l.formState)),
        t = Nd(e, 1, !0, t, l ?? null, a, n, u, c, r, m, E),
        t.context = jd(null),
        l = t.current,
        a = ft(),
        a = di(a),
        n = nl(a),
        n.callback = null,
        ul(l, n, a),
        l = a,
        t.current.lanes = l,
        Ca(t, l),
        Mt(t),
        e[Vl] = t.current,
        as(e),
        new Pu(t)
    }
    ,
    On.version = "19.1.0",
    On
}
var Qd;
function F0() {
    if (Qd)
        return js.exports;
    Qd = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (o) {
                console.error(o)
            }
    }
    return i(),
    js.exports = W0(),
    js.exports
}
var P0 = F0(), Dn = {}, Zd;
function I0() {
    if (Zd)
        return Dn;
    Zd = 1,
    Object.defineProperty(Dn, "__esModule", {
        value: !0
    }),
    Dn.parse = w,
    Dn.serialize = y;
    const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/
      , o = /^[\u0021-\u003A\u003C-\u007E]*$/
      , d = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i
      , f = /^[\u0020-\u003A\u003D-\u007E]*$/
      , h = Object.prototype.toString
      , g = ( () => {
        const D = function() {};
        return D.prototype = Object.create(null),
        D
    }
    )();
    function w(D, Q) {
        const C = new g
          , G = D.length;
        if (G < 2)
            return C;
        const V = (Q == null ? void 0 : Q.decode) || T;
        let q = 0;
        do {
            const Z = D.indexOf("=", q);
            if (Z === -1)
                break;
            const P = D.indexOf(";", q)
              , ce = P === -1 ? G : P;
            if (Z > ce) {
                q = D.lastIndexOf(";", Z - 1) + 1;
                continue
            }
            const I = M(D, q, Z)
              , _e = x(D, Z, I)
              , we = D.slice(I, _e);
            if (C[we] === void 0) {
                let Re = M(D, Z + 1, ce)
                  , xe = x(D, ce, Re);
                const $e = V(D.slice(Re, xe));
                C[we] = $e
            }
            q = ce + 1
        } while (q < G);
        return C
    }
    function M(D, Q, C) {
        do {
            const G = D.charCodeAt(Q);
            if (G !== 32 && G !== 9)
                return Q
        } while (++Q < C);
        return C
    }
    function x(D, Q, C) {
        for (; Q > C; ) {
            const G = D.charCodeAt(--Q);
            if (G !== 32 && G !== 9)
                return Q + 1
        }
        return C
    }
    function y(D, Q, C) {
        const G = (C == null ? void 0 : C.encode) || encodeURIComponent;
        if (!i.test(D))
            throw new TypeError(`argument name is invalid: ${D}`);
        const V = G(Q);
        if (!o.test(V))
            throw new TypeError(`argument val is invalid: ${Q}`);
        let q = D + "=" + V;
        if (!C)
            return q;
        if (C.maxAge !== void 0) {
            if (!Number.isInteger(C.maxAge))
                throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);
            q += "; Max-Age=" + C.maxAge
        }
        if (C.domain) {
            if (!d.test(C.domain))
                throw new TypeError(`option domain is invalid: ${C.domain}`);
            q += "; Domain=" + C.domain
        }
        if (C.path) {
            if (!f.test(C.path))
                throw new TypeError(`option path is invalid: ${C.path}`);
            q += "; Path=" + C.path
        }
        if (C.expires) {
            if (!H(C.expires) || !Number.isFinite(C.expires.valueOf()))
                throw new TypeError(`option expires is invalid: ${C.expires}`);
            q += "; Expires=" + C.expires.toUTCString()
        }
        if (C.httpOnly && (q += "; HttpOnly"),
        C.secure && (q += "; Secure"),
        C.partitioned && (q += "; Partitioned"),
        C.priority)
            switch (typeof C.priority == "string" ? C.priority.toLowerCase() : void 0) {
            case "low":
                q += "; Priority=Low";
                break;
            case "medium":
                q += "; Priority=Medium";
                break;
            case "high":
                q += "; Priority=High";
                break;
            default:
                throw new TypeError(`option priority is invalid: ${C.priority}`)
            }
        if (C.sameSite)
            switch (typeof C.sameSite == "string" ? C.sameSite.toLowerCase() : C.sameSite) {
            case !0:
            case "strict":
                q += "; SameSite=Strict";
                break;
            case "lax":
                q += "; SameSite=Lax";
                break;
            case "none":
                q += "; SameSite=None";
                break;
            default:
                throw new TypeError(`option sameSite is invalid: ${C.sameSite}`)
            }
        return q
    }
    function T(D) {
        if (D.indexOf("%") === -1)
            return D;
        try {
            return decodeURIComponent(D)
        } catch {
            return D
        }
    }
    function H(D) {
        return h.call(D) === "[object Date]"
    }
    return Dn
}
I0();
var Vd = "popstate";
function ey(i={}) {
    function o(f, h) {
        let {pathname: g, search: w, hash: M} = f.location;
        return Ms("", {
            pathname: g,
            search: w,
            hash: M
        }, h.state && h.state.usr || null, h.state && h.state.key || "default")
    }
    function d(f, h) {
        return typeof h == "string" ? h : Cn(h)
    }
    return ly(o, d, null, i)
}
function je(i, o) {
    if (i === !1 || i === null || typeof i > "u")
        throw new Error(o)
}
function _t(i, o) {
    if (!i) {
        typeof console < "u" && console.warn(o);
        try {
            throw new Error(o)
        } catch {}
    }
}
function ty() {
    return Math.random().toString(36).substring(2, 10)
}
function Kd(i, o) {
    return {
        usr: i.state,
        key: i.key,
        idx: o
    }
}
function Ms(i, o, d=null, f) {
    return {
        pathname: typeof i == "string" ? i : i.pathname,
        search: "",
        hash: "",
        ...typeof o == "string" ? _a(o) : o,
        state: d,
        key: o && o.key || f || ty()
    }
}
function Cn({pathname: i="/", search: o="", hash: d=""}) {
    return o && o !== "?" && (i += o.charAt(0) === "?" ? o : "?" + o),
    d && d !== "#" && (i += d.charAt(0) === "#" ? d : "#" + d),
    i
}
function _a(i) {
    let o = {};
    if (i) {
        let d = i.indexOf("#");
        d >= 0 && (o.hash = i.substring(d),
        i = i.substring(0, d));
        let f = i.indexOf("?");
        f >= 0 && (o.search = i.substring(f),
        i = i.substring(0, f)),
        i && (o.pathname = i)
    }
    return o
}
function ly(i, o, d, f={}) {
    let {window: h=document.defaultView, v5Compat: g=!1} = f
      , w = h.history
      , M = "POP"
      , x = null
      , y = T();
    y == null && (y = 0,
    w.replaceState({
        ...w.state,
        idx: y
    }, ""));
    function T() {
        return (w.state || {
            idx: null
        }).idx
    }
    function H() {
        M = "POP";
        let V = T()
          , q = V == null ? null : V - y;
        y = V,
        x && x({
            action: M,
            location: G.location,
            delta: q
        })
    }
    function D(V, q) {
        M = "PUSH";
        let Z = Ms(G.location, V, q);
        y = T() + 1;
        let P = Kd(Z, y)
          , ce = G.createHref(Z);
        try {
            w.pushState(P, "", ce)
        } catch (I) {
            if (I instanceof DOMException && I.name === "DataCloneError")
                throw I;
            h.location.assign(ce)
        }
        g && x && x({
            action: M,
            location: G.location,
            delta: 1
        })
    }
    function Q(V, q) {
        M = "REPLACE";
        let Z = Ms(G.location, V, q);
        y = T();
        let P = Kd(Z, y)
          , ce = G.createHref(Z);
        w.replaceState(P, "", ce),
        g && x && x({
            action: M,
            location: G.location,
            delta: 0
        })
    }
    function C(V) {
        return ay(V)
    }
    let G = {
        get action() {
            return M
        },
        get location() {
            return i(h, w)
        },
        listen(V) {
            if (x)
                throw new Error("A history only accepts one active listener");
            return h.addEventListener(Vd, H),
            x = V,
            () => {
                h.removeEventListener(Vd, H),
                x = null
            }
        },
        createHref(V) {
            return o(h, V)
        },
        createURL: C,
        encodeLocation(V) {
            let q = C(V);
            return {
                pathname: q.pathname,
                search: q.search,
                hash: q.hash
            }
        },
        push: D,
        replace: Q,
        go(V) {
            return w.go(V)
        }
    };
    return G
}
function ay(i, o=!1) {
    let d = "http://localhost";
    typeof window < "u" && (d = window.location.origin !== "null" ? window.location.origin : window.location.href),
    je(d, "No window.location.(origin|href) available to create URL");
    let f = typeof i == "string" ? i : Cn(i);
    return f = f.replace(/ $/, "%20"),
    !o && f.startsWith("//") && (f = d + f),
    new URL(f,d)
}
function Fd(i, o, d="/") {
    return ny(i, o, d, !1)
}
function ny(i, o, d, f) {
    let h = typeof o == "string" ? _a(o) : o
      , g = $t(h.pathname || "/", d);
    if (g == null)
        return null;
    let w = Pd(i);
    uy(w);
    let M = null;
    for (let x = 0; M == null && x < w.length; ++x) {
        let y = gy(g);
        M = my(w[x], y, f)
    }
    return M
}
function Pd(i, o=[], d=[], f="") {
    let h = (g, w, M) => {
        let x = {
            relativePath: M === void 0 ? g.path || "" : M,
            caseSensitive: g.caseSensitive === !0,
            childrenIndex: w,
            route: g
        };
        x.relativePath.startsWith("/") && (je(x.relativePath.startsWith(f), `Absolute route path "${x.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
        x.relativePath = x.relativePath.slice(f.length));
        let y = Jt([f, x.relativePath])
          , T = d.concat(x);
        g.children && g.children.length > 0 && (je(g.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${y}".`),
        Pd(g.children, o, T, y)),
        !(g.path == null && !g.index) && o.push({
            path: y,
            score: dy(y, g.index),
            routesMeta: T
        })
    }
    ;
    return i.forEach( (g, w) => {
        var M;
        if (g.path === "" || !((M = g.path) != null && M.includes("?")))
            h(g, w);
        else
            for (let x of Id(g.path))
                h(g, w, x)
    }
    ),
    o
}
function Id(i) {
    let o = i.split("/");
    if (o.length === 0)
        return [];
    let[d,...f] = o
      , h = d.endsWith("?")
      , g = d.replace(/\?$/, "");
    if (f.length === 0)
        return h ? [g, ""] : [g];
    let w = Id(f.join("/"))
      , M = [];
    return M.push(...w.map(x => x === "" ? g : [g, x].join("/"))),
    h && M.push(...w),
    M.map(x => i.startsWith("/") && x === "" ? "/" : x)
}
function uy(i) {
    i.sort( (o, d) => o.score !== d.score ? d.score - o.score : hy(o.routesMeta.map(f => f.childrenIndex), d.routesMeta.map(f => f.childrenIndex)))
}
var iy = /^:[\w-]+$/
  , cy = 3
  , sy = 2
  , ry = 1
  , fy = 10
  , oy = -2
  , kd = i => i === "*";
function dy(i, o) {
    let d = i.split("/")
      , f = d.length;
    return d.some(kd) && (f += oy),
    o && (f += sy),
    d.filter(h => !kd(h)).reduce( (h, g) => h + (iy.test(g) ? cy : g === "" ? ry : fy), f)
}
function hy(i, o) {
    return i.length === o.length && i.slice(0, -1).every( (f, h) => f === o[h]) ? i[i.length - 1] - o[o.length - 1] : 0
}
function my(i, o, d=!1) {
    let {routesMeta: f} = i
      , h = {}
      , g = "/"
      , w = [];
    for (let M = 0; M < f.length; ++M) {
        let x = f[M]
          , y = M === f.length - 1
          , T = g === "/" ? o : o.slice(g.length) || "/"
          , H = ai({
            path: x.relativePath,
            caseSensitive: x.caseSensitive,
            end: y
        }, T)
          , D = x.route;
        if (!H && y && d && !f[f.length - 1].route.index && (H = ai({
            path: x.relativePath,
            caseSensitive: x.caseSensitive,
            end: !1
        }, T)),
        !H)
            return null;
        Object.assign(h, H.params),
        w.push({
            params: h,
            pathname: Jt([g, H.pathname]),
            pathnameBase: by(Jt([g, H.pathnameBase])),
            route: D
        }),
        H.pathnameBase !== "/" && (g = Jt([g, H.pathnameBase]))
    }
    return w
}
function ai(i, o) {
    typeof i == "string" && (i = {
        path: i,
        caseSensitive: !1,
        end: !0
    });
    let[d,f] = yy(i.path, i.caseSensitive, i.end)
      , h = o.match(d);
    if (!h)
        return null;
    let g = h[0]
      , w = g.replace(/(.)\/+$/, "$1")
      , M = h.slice(1);
    return {
        params: f.reduce( (y, {paramName: T, isOptional: H}, D) => {
            if (T === "*") {
                let C = M[D] || "";
                w = g.slice(0, g.length - C.length).replace(/(.)\/+$/, "$1")
            }
            const Q = M[D];
            return H && !Q ? y[T] = void 0 : y[T] = (Q || "").replace(/%2F/g, "/"),
            y
        }
        , {}),
        pathname: g,
        pathnameBase: w,
        pattern: i
    }
}
function yy(i, o=!1, d=!0) {
    _t(i === "*" || !i.endsWith("*") || i.endsWith("/*"), `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, "/*")}".`);
    let f = []
      , h = "^" + i.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (w, M, x) => (f.push({
        paramName: M,
        isOptional: x != null
    }),
    x ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return i.endsWith("*") ? (f.push({
        paramName: "*"
    }),
    h += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : d ? h += "\\/*$" : i !== "" && i !== "/" && (h += "(?:(?=\\/|$))"),
    [new RegExp(h,o ? void 0 : "i"), f]
}
function gy(i) {
    try {
        return i.split("/").map(o => decodeURIComponent(o).replace(/\//g, "%2F")).join("/")
    } catch (o) {
        return _t(!1, `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),
        i
    }
}
function $t(i, o) {
    if (o === "/")
        return i;
    if (!i.toLowerCase().startsWith(o.toLowerCase()))
        return null;
    let d = o.endsWith("/") ? o.length - 1 : o.length
      , f = i.charAt(d);
    return f && f !== "/" ? null : i.slice(d) || "/"
}
function vy(i, o="/") {
    let {pathname: d, search: f="", hash: h=""} = typeof i == "string" ? _a(i) : i;
    return {
        pathname: d ? d.startsWith("/") ? d : py(d, o) : o,
        search: Sy(f),
        hash: Ey(h)
    }
}
function py(i, o) {
    let d = o.replace(/\/+$/, "").split("/");
    return i.split("/").forEach(h => {
        h === ".." ? d.length > 1 && d.pop() : h !== "." && d.push(h)
    }
    ),
    d.length > 1 ? d.join("/") : "/"
}
function Rs(i, o, d, f) {
    return `Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function xy(i) {
    return i.filter( (o, d) => d === 0 || o.route.path && o.route.path.length > 0)
}
function eh(i) {
    let o = xy(i);
    return o.map( (d, f) => f === o.length - 1 ? d.pathname : d.pathnameBase)
}
function th(i, o, d, f=!1) {
    let h;
    typeof i == "string" ? h = _a(i) : (h = {
        ...i
    },
    je(!h.pathname || !h.pathname.includes("?"), Rs("?", "pathname", "search", h)),
    je(!h.pathname || !h.pathname.includes("#"), Rs("#", "pathname", "hash", h)),
    je(!h.search || !h.search.includes("#"), Rs("#", "search", "hash", h)));
    let g = i === "" || h.pathname === "", w = g ? "/" : h.pathname, M;
    if (w == null)
        M = d;
    else {
        let H = o.length - 1;
        if (!f && w.startsWith("..")) {
            let D = w.split("/");
            for (; D[0] === ".."; )
                D.shift(),
                H -= 1;
            h.pathname = D.join("/")
        }
        M = H >= 0 ? o[H] : "/"
    }
    let x = vy(h, M)
      , y = w && w !== "/" && w.endsWith("/")
      , T = (g || w === ".") && d.endsWith("/");
    return !x.pathname.endsWith("/") && (y || T) && (x.pathname += "/"),
    x
}
var Jt = i => i.join("/").replace(/\/\/+/g, "/")
  , by = i => i.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Sy = i => !i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i
  , Ey = i => !i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i;
function Ny(i) {
    return i != null && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.internal == "boolean" && "data"in i
}
var lh = ["POST", "PUT", "PATCH", "DELETE"];
new Set(lh);
var jy = ["GET", ...lh];
new Set(jy);
var Oa = A.createContext(null);
Oa.displayName = "DataRouter";
var ni = A.createContext(null);
ni.displayName = "DataRouterState";
var ah = A.createContext({
    isTransitioning: !1
});
ah.displayName = "ViewTransition";
var wy = A.createContext(new Map);
wy.displayName = "Fetchers";
var Ty = A.createContext(null);
Ty.displayName = "Await";
var Ot = A.createContext(null);
Ot.displayName = "Navigation";
var Hn = A.createContext(null);
Hn.displayName = "Location";
var Wt = A.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
Wt.displayName = "Route";
var Ds = A.createContext(null);
Ds.displayName = "RouteError";
function Ay(i, {relative: o}={}) {
    je(qn(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: d, navigator: f} = A.useContext(Ot)
      , {hash: h, pathname: g, search: w} = Bn(i, {
        relative: o
    })
      , M = g;
    return d !== "/" && (M = g === "/" ? d : Jt([d, g])),
    f.createHref({
        pathname: M,
        search: w,
        hash: h
    })
}
function qn() {
    return A.useContext(Hn) != null
}
function Ft() {
    return je(qn(), "useLocation() may be used only in the context of a <Router> component."),
    A.useContext(Hn).location
}
var nh = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function uh(i) {
    A.useContext(Ot).static || A.useLayoutEffect(i)
}
function ui() {
    let {isDataRoute: i} = A.useContext(Wt);
    return i ? Ly() : Ry()
}
function Ry() {
    je(qn(), "useNavigate() may be used only in the context of a <Router> component.");
    let i = A.useContext(Oa)
      , {basename: o, navigator: d} = A.useContext(Ot)
      , {matches: f} = A.useContext(Wt)
      , {pathname: h} = Ft()
      , g = JSON.stringify(eh(f))
      , w = A.useRef(!1);
    return uh( () => {
        w.current = !0
    }
    ),
    A.useCallback( (x, y={}) => {
        if (_t(w.current, nh),
        !w.current)
            return;
        if (typeof x == "number") {
            d.go(x);
            return
        }
        let T = th(x, JSON.parse(g), h, y.relative === "path");
        i == null && o !== "/" && (T.pathname = T.pathname === "/" ? o : Jt([o, T.pathname])),
        (y.replace ? d.replace : d.push)(T, y.state, y)
    }
    , [o, d, g, h, i])
}
A.createContext(null);
function Bn(i, {relative: o}={}) {
    let {matches: d} = A.useContext(Wt)
      , {pathname: f} = Ft()
      , h = JSON.stringify(eh(d));
    return A.useMemo( () => th(i, JSON.parse(h), f, o === "path"), [i, h, f, o])
}
function zy(i, o) {
    return ih(i, o)
}
function ih(i, o, d, f) {
    var q;
    je(qn(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: h} = A.useContext(Ot)
      , {matches: g} = A.useContext(Wt)
      , w = g[g.length - 1]
      , M = w ? w.params : {}
      , x = w ? w.pathname : "/"
      , y = w ? w.pathnameBase : "/"
      , T = w && w.route;
    {
        let Z = T && T.path || "";
        ch(x, !T || Z.endsWith("*") || Z.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${Z === "/" ? "*" : `${Z}/*`}">.`)
    }
    let H = Ft(), D;
    if (o) {
        let Z = typeof o == "string" ? _a(o) : o;
        je(y === "/" || ((q = Z.pathname) == null ? void 0 : q.startsWith(y)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${Z.pathname}" was given in the \`location\` prop.`),
        D = Z
    } else
        D = H;
    let Q = D.pathname || "/"
      , C = Q;
    if (y !== "/") {
        let Z = y.replace(/^\//, "").split("/");
        C = "/" + Q.replace(/^\//, "").split("/").slice(Z.length).join("/")
    }
    let G = Fd(i, {
        pathname: C
    });
    _t(T || G != null, `No routes matched location "${D.pathname}${D.search}${D.hash}" `),
    _t(G == null || G[G.length - 1].route.element !== void 0 || G[G.length - 1].route.Component !== void 0 || G[G.length - 1].route.lazy !== void 0, `Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let V = Uy(G && G.map(Z => Object.assign({}, Z, {
        params: Object.assign({}, M, Z.params),
        pathname: Jt([y, h.encodeLocation ? h.encodeLocation(Z.pathname).pathname : Z.pathname]),
        pathnameBase: Z.pathnameBase === "/" ? y : Jt([y, h.encodeLocation ? h.encodeLocation(Z.pathnameBase).pathname : Z.pathnameBase])
    })), g, d, f);
    return o && V ? A.createElement(Hn.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...D
            },
            navigationType: "POP"
        }
    }, V) : V
}
function My() {
    let i = Yy()
      , o = Ny(i) ? `${i.status} ${i.statusText}` : i instanceof Error ? i.message : JSON.stringify(i)
      , d = i instanceof Error ? i.stack : null
      , f = "rgba(200,200,200, 0.5)"
      , h = {
        padding: "0.5rem",
        backgroundColor: f
    }
      , g = {
        padding: "2px 4px",
        backgroundColor: f
    }
      , w = null;
    return console.error("Error handled by React Router default ErrorBoundary:", i),
    w = A.createElement(A.Fragment, null, A.createElement("p", null, "💿 Hey developer 👋"), A.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", A.createElement("code", {
        style: g
    }, "ErrorBoundary"), " or", " ", A.createElement("code", {
        style: g
    }, "errorElement"), " prop on your route.")),
    A.createElement(A.Fragment, null, A.createElement("h2", null, "Unexpected Application Error!"), A.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, o), d ? A.createElement("pre", {
        style: h
    }, d) : null, w)
}
var _y = A.createElement(My, null)
  , Oy = class extends A.Component {
    constructor(i) {
        super(i),
        this.state = {
            location: i.location,
            revalidation: i.revalidation,
            error: i.error
        }
    }
    static getDerivedStateFromError(i) {
        return {
            error: i
        }
    }
    static getDerivedStateFromProps(i, o) {
        return o.location !== i.location || o.revalidation !== "idle" && i.revalidation === "idle" ? {
            error: i.error,
            location: i.location,
            revalidation: i.revalidation
        } : {
            error: i.error !== void 0 ? i.error : o.error,
            location: o.location,
            revalidation: i.revalidation || o.revalidation
        }
    }
    componentDidCatch(i, o) {
        console.error("React Router caught the following error during render", i, o)
    }
    render() {
        return this.state.error !== void 0 ? A.createElement(Wt.Provider, {
            value: this.props.routeContext
        }, A.createElement(Ds.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
;
function Dy({routeContext: i, match: o, children: d}) {
    let f = A.useContext(Oa);
    return f && f.static && f.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (f.staticContext._deepestRenderedBoundaryId = o.route.id),
    A.createElement(Wt.Provider, {
        value: i
    }, d)
}
function Uy(i, o=[], d=null, f=null) {
    if (i == null) {
        if (!d)
            return null;
        if (d.errors)
            i = d.matches;
        else if (o.length === 0 && !d.initialized && d.matches.length > 0)
            i = d.matches;
        else
            return null
    }
    let h = i
      , g = d == null ? void 0 : d.errors;
    if (g != null) {
        let x = h.findIndex(y => y.route.id && (g == null ? void 0 : g[y.route.id]) !== void 0);
        je(x >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),
        h = h.slice(0, Math.min(h.length, x + 1))
    }
    let w = !1
      , M = -1;
    if (d)
        for (let x = 0; x < h.length; x++) {
            let y = h[x];
            if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (M = x),
            y.route.id) {
                let {loaderData: T, errors: H} = d
                  , D = y.route.loader && !T.hasOwnProperty(y.route.id) && (!H || H[y.route.id] === void 0);
                if (y.route.lazy || D) {
                    w = !0,
                    M >= 0 ? h = h.slice(0, M + 1) : h = [h[0]];
                    break
                }
            }
        }
    return h.reduceRight( (x, y, T) => {
        let H, D = !1, Q = null, C = null;
        d && (H = g && y.route.id ? g[y.route.id] : void 0,
        Q = y.route.errorElement || _y,
        w && (M < 0 && T === 0 ? (ch("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
        D = !0,
        C = null) : M === T && (D = !0,
        C = y.route.hydrateFallbackElement || null)));
        let G = o.concat(h.slice(0, T + 1))
          , V = () => {
            let q;
            return H ? q = Q : D ? q = C : y.route.Component ? q = A.createElement(y.route.Component, null) : y.route.element ? q = y.route.element : q = x,
            A.createElement(Dy, {
                match: y,
                routeContext: {
                    outlet: x,
                    matches: G,
                    isDataRoute: d != null
                },
                children: q
            })
        }
        ;
        return d && (y.route.ErrorBoundary || y.route.errorElement || T === 0) ? A.createElement(Oy, {
            location: d.location,
            revalidation: d.revalidation,
            component: Q,
            error: H,
            children: V(),
            routeContext: {
                outlet: null,
                matches: G,
                isDataRoute: !0
            }
        }) : V()
    }
    , null)
}
function Us(i) {
    return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Cy(i) {
    let o = A.useContext(Oa);
    return je(o, Us(i)),
    o
}
function Hy(i) {
    let o = A.useContext(ni);
    return je(o, Us(i)),
    o
}
function qy(i) {
    let o = A.useContext(Wt);
    return je(o, Us(i)),
    o
}
function Cs(i) {
    let o = qy(i)
      , d = o.matches[o.matches.length - 1];
    return je(d.route.id, `${i} can only be used on routes that contain a unique "id"`),
    d.route.id
}
function By() {
    return Cs("useRouteId")
}
function Yy() {
    var f;
    let i = A.useContext(Ds)
      , o = Hy("useRouteError")
      , d = Cs("useRouteError");
    return i !== void 0 ? i : (f = o.errors) == null ? void 0 : f[d]
}
function Ly() {
    let {router: i} = Cy("useNavigate")
      , o = Cs("useNavigate")
      , d = A.useRef(!1);
    return uh( () => {
        d.current = !0
    }
    ),
    A.useCallback(async (h, g={}) => {
        _t(d.current, nh),
        d.current && (typeof h == "number" ? i.navigate(h) : await i.navigate(h, {
            fromRouteId: o,
            ...g
        }))
    }
    , [i, o])
}
var Jd = {};
function ch(i, o, d) {
    !o && !Jd[i] && (Jd[i] = !0,
    _t(!1, d))
}
A.memo(Gy);
function Gy({routes: i, future: o, state: d}) {
    return ih(i, void 0, d, o)
}
function Zl(i) {
    je(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}
function Xy({basename: i="/", children: o=null, location: d, navigationType: f="POP", navigator: h, static: g=!1}) {
    je(!qn(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let w = i.replace(/^\/*/, "/")
      , M = A.useMemo( () => ({
        basename: w,
        navigator: h,
        static: g,
        future: {}
    }), [w, h, g]);
    typeof d == "string" && (d = _a(d));
    let {pathname: x="/", search: y="", hash: T="", state: H=null, key: D="default"} = d
      , Q = A.useMemo( () => {
        let C = $t(x, w);
        return C == null ? null : {
            location: {
                pathname: C,
                search: y,
                hash: T,
                state: H,
                key: D
            },
            navigationType: f
        }
    }
    , [w, x, y, T, H, D, f]);
    return _t(Q != null, `<Router basename="${w}"> is not able to match the URL "${x}${y}${T}" because it does not start with the basename, so the <Router> won't render anything.`),
    Q == null ? null : A.createElement(Ot.Provider, {
        value: M
    }, A.createElement(Hn.Provider, {
        children: o,
        value: Q
    }))
}
function Qy({children: i, location: o}) {
    return zy(_s(i), o)
}
function _s(i, o=[]) {
    let d = [];
    return A.Children.forEach(i, (f, h) => {
        if (!A.isValidElement(f))
            return;
        let g = [...o, h];
        if (f.type === A.Fragment) {
            d.push.apply(d, _s(f.props.children, g));
            return
        }
        je(f.type === Zl, `[${typeof f.type == "string" ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
        je(!f.props.index || !f.props.children, "An index route cannot have child routes.");
        let w = {
            id: f.props.id || g.join("-"),
            caseSensitive: f.props.caseSensitive,
            element: f.props.element,
            Component: f.props.Component,
            index: f.props.index,
            path: f.props.path,
            loader: f.props.loader,
            action: f.props.action,
            hydrateFallbackElement: f.props.hydrateFallbackElement,
            HydrateFallback: f.props.HydrateFallback,
            errorElement: f.props.errorElement,
            ErrorBoundary: f.props.ErrorBoundary,
            hasErrorBoundary: f.props.hasErrorBoundary === !0 || f.props.ErrorBoundary != null || f.props.errorElement != null,
            shouldRevalidate: f.props.shouldRevalidate,
            handle: f.props.handle,
            lazy: f.props.lazy
        };
        f.props.children && (w.children = _s(f.props.children, g)),
        d.push(w)
    }
    ),
    d
}
var ti = "get"
  , li = "application/x-www-form-urlencoded";
function ii(i) {
    return i != null && typeof i.tagName == "string"
}
function Zy(i) {
    return ii(i) && i.tagName.toLowerCase() === "button"
}
function Vy(i) {
    return ii(i) && i.tagName.toLowerCase() === "form"
}
function Ky(i) {
    return ii(i) && i.tagName.toLowerCase() === "input"
}
function ky(i) {
    return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey)
}
function Jy(i, o) {
    return i.button === 0 && (!o || o === "_self") && !ky(i)
}
var ei = null;
function $y() {
    if (ei === null)
        try {
            new FormData(document.createElement("form"),0),
            ei = !1
        } catch {
            ei = !0
        }
    return ei
}
var Wy = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function zs(i) {
    return i != null && !Wy.has(i) ? (_t(!1, `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${li}"`),
    null) : i
}
function Fy(i, o) {
    let d, f, h, g, w;
    if (Vy(i)) {
        let M = i.getAttribute("action");
        f = M ? $t(M, o) : null,
        d = i.getAttribute("method") || ti,
        h = zs(i.getAttribute("enctype")) || li,
        g = new FormData(i)
    } else if (Zy(i) || Ky(i) && (i.type === "submit" || i.type === "image")) {
        let M = i.form;
        if (M == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let x = i.getAttribute("formaction") || M.getAttribute("action");
        if (f = x ? $t(x, o) : null,
        d = i.getAttribute("formmethod") || M.getAttribute("method") || ti,
        h = zs(i.getAttribute("formenctype")) || zs(M.getAttribute("enctype")) || li,
        g = new FormData(M,i),
        !$y()) {
            let {name: y, type: T, value: H} = i;
            if (T === "image") {
                let D = y ? `${y}.` : "";
                g.append(`${D}x`, "0"),
                g.append(`${D}y`, "0")
            } else
                y && g.append(y, H)
        }
    } else {
        if (ii(i))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        d = ti,
        f = null,
        h = li,
        w = i
    }
    return g && h === "text/plain" && (w = g,
    g = void 0),
    {
        action: f,
        method: d.toLowerCase(),
        encType: h,
        formData: g,
        body: w
    }
}
function Hs(i, o) {
    if (i === !1 || i === null || typeof i > "u")
        throw new Error(o)
}
async function Py(i, o) {
    if (i.id in o)
        return o[i.id];
    try {
        let d = await import(i.module);
        return o[i.id] = d,
        d
    } catch (d) {
        return console.error(`Error loading route module \`${i.module}\`, reloading page...`),
        console.error(d),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function Iy(i) {
    return i == null ? !1 : i.href == null ? i.rel === "preload" && typeof i.imageSrcSet == "string" && typeof i.imageSizes == "string" : typeof i.rel == "string" && typeof i.href == "string"
}
async function eg(i, o, d) {
    let f = await Promise.all(i.map(async h => {
        let g = o.routes[h.route.id];
        if (g) {
            let w = await Py(g, d);
            return w.links ? w.links() : []
        }
        return []
    }
    ));
    return ng(f.flat(1).filter(Iy).filter(h => h.rel === "stylesheet" || h.rel === "preload").map(h => h.rel === "stylesheet" ? {
        ...h,
        rel: "prefetch",
        as: "style"
    } : {
        ...h,
        rel: "prefetch"
    }))
}
function $d(i, o, d, f, h, g) {
    let w = (x, y) => d[y] ? x.route.id !== d[y].route.id : !0
      , M = (x, y) => {
        var T;
        return d[y].pathname !== x.pathname || ((T = d[y].route.path) == null ? void 0 : T.endsWith("*")) && d[y].params["*"] !== x.params["*"]
    }
    ;
    return g === "assets" ? o.filter( (x, y) => w(x, y) || M(x, y)) : g === "data" ? o.filter( (x, y) => {
        var H;
        let T = f.routes[x.route.id];
        if (!T || !T.hasLoader)
            return !1;
        if (w(x, y) || M(x, y))
            return !0;
        if (x.route.shouldRevalidate) {
            let D = x.route.shouldRevalidate({
                currentUrl: new URL(h.pathname + h.search + h.hash,window.origin),
                currentParams: ((H = d[0]) == null ? void 0 : H.params) || {},
                nextUrl: new URL(i,window.origin),
                nextParams: x.params,
                defaultShouldRevalidate: !0
            });
            if (typeof D == "boolean")
                return D
        }
        return !0
    }
    ) : []
}
function tg(i, o, {includeHydrateFallback: d}={}) {
    return lg(i.map(f => {
        let h = o.routes[f.route.id];
        if (!h)
            return [];
        let g = [h.module];
        return h.clientActionModule && (g = g.concat(h.clientActionModule)),
        h.clientLoaderModule && (g = g.concat(h.clientLoaderModule)),
        d && h.hydrateFallbackModule && (g = g.concat(h.hydrateFallbackModule)),
        h.imports && (g = g.concat(h.imports)),
        g
    }
    ).flat(1))
}
function lg(i) {
    return [...new Set(i)]
}
function ag(i) {
    let o = {}
      , d = Object.keys(i).sort();
    for (let f of d)
        o[f] = i[f];
    return o
}
function ng(i, o) {
    let d = new Set;
    return new Set(o),
    i.reduce( (f, h) => {
        let g = JSON.stringify(ag(h));
        return d.has(g) || (d.add(g),
        f.push({
            key: g,
            link: h
        })),
        f
    }
    , [])
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var ug = new Set([100, 101, 204, 205]);
function ig(i, o) {
    let d = typeof i == "string" ? new URL(i,typeof window > "u" ? "server://singlefetch/" : window.location.origin) : i;
    return d.pathname === "/" ? d.pathname = "_root.data" : o && $t(d.pathname, o) === "/" ? d.pathname = `${o.replace(/\/$/, "")}/_root.data` : d.pathname = `${d.pathname.replace(/\/$/, "")}.data`,
    d
}
function sh() {
    let i = A.useContext(Oa);
    return Hs(i, "You must render this element inside a <DataRouterContext.Provider> element"),
    i
}
function cg() {
    let i = A.useContext(ni);
    return Hs(i, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    i
}
var qs = A.createContext(void 0);
qs.displayName = "FrameworkContext";
function rh() {
    let i = A.useContext(qs);
    return Hs(i, "You must render this element inside a <HydratedRouter> element"),
    i
}
function sg(i, o) {
    let d = A.useContext(qs)
      , [f,h] = A.useState(!1)
      , [g,w] = A.useState(!1)
      , {onFocus: M, onBlur: x, onMouseEnter: y, onMouseLeave: T, onTouchStart: H} = o
      , D = A.useRef(null);
    A.useEffect( () => {
        if (i === "render" && w(!0),
        i === "viewport") {
            let G = q => {
                q.forEach(Z => {
                    w(Z.isIntersecting)
                }
                )
            }
              , V = new IntersectionObserver(G,{
                threshold: .5
            });
            return D.current && V.observe(D.current),
            () => {
                V.disconnect()
            }
        }
    }
    , [i]),
    A.useEffect( () => {
        if (f) {
            let G = setTimeout( () => {
                w(!0)
            }
            , 100);
            return () => {
                clearTimeout(G)
            }
        }
    }
    , [f]);
    let Q = () => {
        h(!0)
    }
      , C = () => {
        h(!1),
        w(!1)
    }
    ;
    return d ? i !== "intent" ? [g, D, {}] : [g, D, {
        onFocus: Un(M, Q),
        onBlur: Un(x, C),
        onMouseEnter: Un(y, Q),
        onMouseLeave: Un(T, C),
        onTouchStart: Un(H, Q)
    }] : [!1, D, {}]
}
function Un(i, o) {
    return d => {
        i && i(d),
        d.defaultPrevented || o(d)
    }
}
function rg({page: i, ...o}) {
    let {router: d} = sh()
      , f = A.useMemo( () => Fd(d.routes, i, d.basename), [d.routes, i, d.basename]);
    return f ? A.createElement(og, {
        page: i,
        matches: f,
        ...o
    }) : null
}
function fg(i) {
    let {manifest: o, routeModules: d} = rh()
      , [f,h] = A.useState([]);
    return A.useEffect( () => {
        let g = !1;
        return eg(i, o, d).then(w => {
            g || h(w)
        }
        ),
        () => {
            g = !0
        }
    }
    , [i, o, d]),
    f
}
function og({page: i, matches: o, ...d}) {
    let f = Ft()
      , {manifest: h, routeModules: g} = rh()
      , {basename: w} = sh()
      , {loaderData: M, matches: x} = cg()
      , y = A.useMemo( () => $d(i, o, x, h, f, "data"), [i, o, x, h, f])
      , T = A.useMemo( () => $d(i, o, x, h, f, "assets"), [i, o, x, h, f])
      , H = A.useMemo( () => {
        if (i === f.pathname + f.search + f.hash)
            return [];
        let C = new Set
          , G = !1;
        if (o.forEach(q => {
            var P;
            let Z = h.routes[q.route.id];
            !Z || !Z.hasLoader || (!y.some(ce => ce.route.id === q.route.id) && q.route.id in M && ((P = g[q.route.id]) != null && P.shouldRevalidate) || Z.hasClientLoader ? G = !0 : C.add(q.route.id))
        }
        ),
        C.size === 0)
            return [];
        let V = ig(i, w);
        return G && C.size > 0 && V.searchParams.set("_routes", o.filter(q => C.has(q.route.id)).map(q => q.route.id).join(",")),
        [V.pathname + V.search]
    }
    , [w, M, f, h, y, o, i, g])
      , D = A.useMemo( () => tg(T, h), [T, h])
      , Q = fg(T);
    return A.createElement(A.Fragment, null, H.map(C => A.createElement("link", {
        key: C,
        rel: "prefetch",
        as: "fetch",
        href: C,
        ...d
    })), D.map(C => A.createElement("link", {
        key: C,
        rel: "modulepreload",
        href: C,
        ...d
    })), Q.map( ({key: C, link: G}) => A.createElement("link", {
        key: C,
        ...G
    })))
}
function dg(...i) {
    return o => {
        i.forEach(d => {
            typeof d == "function" ? d(o) : d != null && (d.current = o)
        }
        )
    }
}
var fh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    fh && (window.__reactRouterVersion = "7.6.3")
} catch {}
function hg({basename: i, children: o, window: d}) {
    let f = A.useRef();
    f.current == null && (f.current = ey({
        window: d,
        v5Compat: !0
    }));
    let h = f.current
      , [g,w] = A.useState({
        action: h.action,
        location: h.location
    })
      , M = A.useCallback(x => {
        A.startTransition( () => w(x))
    }
    , [w]);
    return A.useLayoutEffect( () => h.listen(M), [h, M]),
    A.createElement(Xy, {
        basename: i,
        children: o,
        location: g.location,
        navigationType: g.action,
        navigator: h
    })
}
var oh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Ma = A.forwardRef(function({onClick: o, discover: d="render", prefetch: f="none", relative: h, reloadDocument: g, replace: w, state: M, target: x, to: y, preventScrollReset: T, viewTransition: H, ...D}, Q) {
    let {basename: C} = A.useContext(Ot), G = typeof y == "string" && oh.test(y), V, q = !1;
    if (typeof y == "string" && G && (V = y,
    fh))
        try {
            let xe = new URL(window.location.href)
              , $e = y.startsWith("//") ? new URL(xe.protocol + y) : new URL(y)
              , dt = $t($e.pathname, C);
            $e.origin === xe.origin && dt != null ? y = dt + $e.search + $e.hash : q = !0
        } catch {
            _t(!1, `<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    let Z = Ay(y, {
        relative: h
    })
      , [P,ce,I] = sg(f, D)
      , _e = vg(y, {
        replace: w,
        state: M,
        target: x,
        preventScrollReset: T,
        relative: h,
        viewTransition: H
    });
    function we(xe) {
        o && o(xe),
        xe.defaultPrevented || _e(xe)
    }
    let Re = A.createElement("a", {
        ...D,
        ...I,
        href: V || Z,
        onClick: q || g ? o : we,
        ref: dg(Q, ce),
        target: x,
        "data-discover": !G && d === "render" ? "true" : void 0
    });
    return P && !G ? A.createElement(A.Fragment, null, Re, A.createElement(rg, {
        page: Z
    })) : Re
});
Ma.displayName = "Link";
var mg = A.forwardRef(function({"aria-current": o="page", caseSensitive: d=!1, className: f="", end: h=!1, style: g, to: w, viewTransition: M, children: x, ...y}, T) {
    let H = Bn(w, {
        relative: y.relative
    })
      , D = Ft()
      , Q = A.useContext(ni)
      , {navigator: C, basename: G} = A.useContext(Ot)
      , V = Q != null && Eg(H) && M === !0
      , q = C.encodeLocation ? C.encodeLocation(H).pathname : H.pathname
      , Z = D.pathname
      , P = Q && Q.navigation && Q.navigation.location ? Q.navigation.location.pathname : null;
    d || (Z = Z.toLowerCase(),
    P = P ? P.toLowerCase() : null,
    q = q.toLowerCase()),
    P && G && (P = $t(P, G) || P);
    const ce = q !== "/" && q.endsWith("/") ? q.length - 1 : q.length;
    let I = Z === q || !h && Z.startsWith(q) && Z.charAt(ce) === "/", _e = P != null && (P === q || !h && P.startsWith(q) && P.charAt(q.length) === "/"), we = {
        isActive: I,
        isPending: _e,
        isTransitioning: V
    }, Re = I ? o : void 0, xe;
    typeof f == "function" ? xe = f(we) : xe = [f, I ? "active" : null, _e ? "pending" : null, V ? "transitioning" : null].filter(Boolean).join(" ");
    let $e = typeof g == "function" ? g(we) : g;
    return A.createElement(Ma, {
        ...y,
        "aria-current": Re,
        className: xe,
        ref: T,
        style: $e,
        to: w,
        viewTransition: M
    }, typeof x == "function" ? x(we) : x)
});
mg.displayName = "NavLink";
var yg = A.forwardRef( ({discover: i="render", fetcherKey: o, navigate: d, reloadDocument: f, replace: h, state: g, method: w=ti, action: M, onSubmit: x, relative: y, preventScrollReset: T, viewTransition: H, ...D}, Q) => {
    let C = bg()
      , G = Sg(M, {
        relative: y
    })
      , V = w.toLowerCase() === "get" ? "get" : "post"
      , q = typeof M == "string" && oh.test(M)
      , Z = P => {
        if (x && x(P),
        P.defaultPrevented)
            return;
        P.preventDefault();
        let ce = P.nativeEvent.submitter
          , I = (ce == null ? void 0 : ce.getAttribute("formmethod")) || w;
        C(ce || P.currentTarget, {
            fetcherKey: o,
            method: I,
            navigate: d,
            replace: h,
            state: g,
            relative: y,
            preventScrollReset: T,
            viewTransition: H
        })
    }
    ;
    return A.createElement("form", {
        ref: Q,
        method: V,
        action: G,
        onSubmit: f ? x : Z,
        ...D,
        "data-discover": !q && i === "render" ? "true" : void 0
    })
}
);
yg.displayName = "Form";
function gg(i) {
    return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function dh(i) {
    let o = A.useContext(Oa);
    return je(o, gg(i)),
    o
}
function vg(i, {target: o, replace: d, state: f, preventScrollReset: h, relative: g, viewTransition: w}={}) {
    let M = ui()
      , x = Ft()
      , y = Bn(i, {
        relative: g
    });
    return A.useCallback(T => {
        if (Jy(T, o)) {
            T.preventDefault();
            let H = d !== void 0 ? d : Cn(x) === Cn(y);
            M(i, {
                replace: H,
                state: f,
                preventScrollReset: h,
                relative: g,
                viewTransition: w
            })
        }
    }
    , [x, M, y, d, f, o, i, h, g, w])
}
var pg = 0
  , xg = () => `__${String(++pg)}__`;
function bg() {
    let {router: i} = dh("useSubmit")
      , {basename: o} = A.useContext(Ot)
      , d = By();
    return A.useCallback(async (f, h={}) => {
        let {action: g, method: w, encType: M, formData: x, body: y} = Fy(f, o);
        if (h.navigate === !1) {
            let T = h.fetcherKey || xg();
            await i.fetch(T, d, h.action || g, {
                preventScrollReset: h.preventScrollReset,
                formData: x,
                body: y,
                formMethod: h.method || w,
                formEncType: h.encType || M,
                flushSync: h.flushSync
            })
        } else
            await i.navigate(h.action || g, {
                preventScrollReset: h.preventScrollReset,
                formData: x,
                body: y,
                formMethod: h.method || w,
                formEncType: h.encType || M,
                replace: h.replace,
                state: h.state,
                fromRouteId: d,
                flushSync: h.flushSync,
                viewTransition: h.viewTransition
            })
    }
    , [i, o, d])
}
function Sg(i, {relative: o}={}) {
    let {basename: d} = A.useContext(Ot)
      , f = A.useContext(Wt);
    je(f, "useFormAction must be used inside a RouteContext");
    let[h] = f.matches.slice(-1)
      , g = {
        ...Bn(i || ".", {
            relative: o
        })
    }
      , w = Ft();
    if (i == null) {
        g.search = w.search;
        let M = new URLSearchParams(g.search)
          , x = M.getAll("index");
        if (x.some(T => T === "")) {
            M.delete("index"),
            x.filter(H => H).forEach(H => M.append("index", H));
            let T = M.toString();
            g.search = T ? `?${T}` : ""
        }
    }
    return (!i || i === ".") && h.route.index && (g.search = g.search ? g.search.replace(/^\?/, "?index&") : "?index"),
    d !== "/" && (g.pathname = g.pathname === "/" ? d : Jt([d, g.pathname])),
    Cn(g)
}
function Eg(i, o={}) {
    let d = A.useContext(ah);
    je(d != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: f} = dh("useViewTransitionState")
      , h = Bn(i, {
        relative: o.relative
    });
    if (!d.isTransitioning)
        return !1;
    let g = $t(d.currentLocation.pathname, f) || d.currentLocation.pathname
      , w = $t(d.nextLocation.pathname, f) || d.nextLocation.pathname;
    return ai(h.pathname, w) != null || ai(h.pathname, g) != null
}
[...ug];
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ng = i => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , jg = i => i.replace(/^([A-Z])|[\s-_]+(\w)/g, (o, d, f) => f ? f.toUpperCase() : d.toLowerCase())
  , Wd = i => {
    const o = jg(i);
    return o.charAt(0).toUpperCase() + o.slice(1)
}
  , hh = (...i) => i.filter( (o, d, f) => !!o && o.trim() !== "" && f.indexOf(o) === d).join(" ").trim()
  , wg = i => {
    for (const o in i)
        if (o.startsWith("aria-") || o === "role" || o === "title")
            return !0
}
;
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Tg = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ag = A.forwardRef( ({color: i="currentColor", size: o=24, strokeWidth: d=2, absoluteStrokeWidth: f, className: h="", children: g, iconNode: w, ...M}, x) => A.createElement("svg", {
    ref: x,
    ...Tg,
    width: o,
    height: o,
    stroke: i,
    strokeWidth: f ? Number(d) * 24 / Number(o) : d,
    className: hh("lucide", h),
    ...!g && !wg(M) && {
        "aria-hidden": "true"
    },
    ...M
}, [...w.map( ([y,T]) => A.createElement(y, T)), ...Array.isArray(g) ? g : [g]]));
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = (i, o) => {
    const d = A.forwardRef( ({className: f, ...h}, g) => A.createElement(Ag, {
        ref: g,
        iconNode: o,
        className: hh(`lucide-${Ng(Wd(i))}`, `lucide-${i}`, f),
        ...h
    }));
    return d.displayName = Wd(i),
    d
}
;
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rg = [["path", {
    d: "M12 7v14",
    key: "1akyts"
}], ["path", {
    d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
    key: "ruj8y"
}]]
  , mh = Ue("book-open", Rg);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zg = [["path", {
    d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
    key: "hh9hay"
}], ["path", {
    d: "m3.3 7 8.7 5 8.7-5",
    key: "g66t2b"
}], ["path", {
    d: "M12 22V12",
    key: "d0xqtd"
}]]
  , Mg = Ue("box", zg);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _g = [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]
  , Og = Ue("chevron-down", _g);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dg = [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]]
  , Ug = Ue("chevron-up", Dg);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cg = [["path", {
    d: "M12 20v2",
    key: "1lh1kg"
}], ["path", {
    d: "M12 2v2",
    key: "tus03m"
}], ["path", {
    d: "M17 20v2",
    key: "1rnc9c"
}], ["path", {
    d: "M17 2v2",
    key: "11trls"
}], ["path", {
    d: "M2 12h2",
    key: "1t8f8n"
}], ["path", {
    d: "M2 17h2",
    key: "7oei6x"
}], ["path", {
    d: "M2 7h2",
    key: "asdhe0"
}], ["path", {
    d: "M20 12h2",
    key: "1q8mjw"
}], ["path", {
    d: "M20 17h2",
    key: "1fpfkl"
}], ["path", {
    d: "M20 7h2",
    key: "1o8tra"
}], ["path", {
    d: "M7 20v2",
    key: "4gnj0m"
}], ["path", {
    d: "M7 2v2",
    key: "1i4yhu"
}], ["rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "2",
    key: "1vbyd7"
}], ["rect", {
    x: "8",
    y: "8",
    width: "8",
    height: "8",
    rx: "1",
    key: "z9xiuo"
}]]
  , Hg = Ue("cpu", Cg);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qg = [["path", {
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    key: "1jg4f8"
}]]
  , yh = Ue("facebook", qg);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bg = [["rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    rx: "5",
    ry: "5",
    key: "2e1cvw"
}], ["path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    key: "9exkf1"
}], ["line", {
    x1: "17.5",
    x2: "17.51",
    y1: "6.5",
    y2: "6.5",
    key: "r4j83e"
}]]
  , gh = Ue("instagram", Bg);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yg = [["path", {
    d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
    key: "nnexq3"
}], ["path", {
    d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
    key: "mt58a7"
}]]
  , Lg = Ue("leaf", Yg);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gg = [["path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    key: "c2jq9f"
}], ["rect", {
    width: "4",
    height: "12",
    x: "2",
    y: "9",
    key: "mk3on5"
}], ["circle", {
    cx: "4",
    cy: "4",
    r: "2",
    key: "bt5ra8"
}]]
  , Xg = Ue("linkedin", Gg);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qg = [["path", {
    d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
    key: "132q7q"
}], ["rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2",
    key: "izxlao"
}]]
  , Bs = Ue("mail", Qg);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zg = [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]
  , Ys = Ue("map-pin", Zg);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vg = [["path", {
    d: "M4 12h16",
    key: "1lakjw"
}], ["path", {
    d: "M4 18h16",
    key: "19g7jn"
}], ["path", {
    d: "M4 6h16",
    key: "1o0s65"
}]]
  , Kg = Ue("menu", Vg);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kg = [["path", {
    d: "m16 16 2 2 4-4",
    key: "gfu2re"
}], ["path", {
    d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
    key: "e7tb2h"
}], ["path", {
    d: "m7.5 4.27 9 5.15",
    key: "1c824w"
}], ["polyline", {
    points: "3.29 7 12 12 20.71 7",
    key: "ousv84"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "22",
    y2: "12",
    key: "a4e8g8"
}]]
  , Jg = Ue("package-check", kg);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $g = [["path", {
    d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
    key: "9njp5v"
}]]
  , vh = Ue("phone", $g);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wg = [["path", {
    d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",
    key: "x6z5xu"
}], ["path", {
    d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",
    key: "1x4zh5"
}], ["path", {
    d: "m14 16-3 3 3 3",
    key: "f6jyew"
}], ["path", {
    d: "M8.293 13.596 7.196 9.5 3.1 10.598",
    key: "wf1obh"
}], ["path", {
    d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",
    key: "9tzpgr"
}], ["path", {
    d: "m13.378 9.633 4.096 1.098 1.097-4.096",
    key: "1oe83g"
}]]
  , Fg = Ue("recycle", Wg);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pg = [["path", {
    d: "m8 11 2 2 4-4",
    key: "1sed1v"
}], ["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]
  , Ig = Ue("search-check", Pg);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ev = [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    key: "afitv7"
}], ["path", {
    d: "M8 7v7",
    key: "1x2jlm"
}], ["path", {
    d: "M12 7v4",
    key: "xawao1"
}], ["path", {
    d: "M16 7v9",
    key: "1hp2iy"
}]]
  , tv = Ue("square-kanban", ev);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lv = [["path", {
    d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
    key: "pff0z6"
}]]
  , av = Ue("twitter", lv);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nv = [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["path", {
    d: "M16 3.128a4 4 0 0 1 0 7.744",
    key: "16gr8j"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}]]
  , uv = Ue("users", nv);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iv = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , cv = Ue("x", iv)
  , sv = "/assets/logo-DdlK4GtC.webp"
  , rv = "/assets/secondary-logo-Dat85N4B.webp"
  , fv = "/assets/hero-ssQ3wT8T.webp"
  , ov = "/assets/garbage-dustbin-DbqCETER.webp"
  , dv = "/assets/garbage-DSVdOACC.webp"
  , hv = "/assets/garbage-van-CsEz078h.webp"
  , mv = "/assets/recycle-C5IX9iz6.webp"
  , yv = "/assets/garbage-collect1-yDvrCAiP.webp"
  , gv = "/assets/garbage-collect2-DDJ2_YYQ.webp"
  , vv = "/assets/garbage-collect3-C9-at71a.webp"
  , pv = "/assets/garbage-collect4-CZPb7pJA.webp"
  , xv = "/assets/greenearth-BneCxfxv.webp"
  , bv = "/assets/whoweare-Bf2Rmjxc.webp"
  , Sv = "/assets/garbage-factory-FxJi0OuC.webp"
  , Ev = "/assets/mission-hBYxFduO.webp"
  , Nv = "/assets/founder-CTJJyoUU.webp"
  , jv = "/assets/cofounder-Vf2SkEOi.webp"
  , wv = "/assets/growthofficer-CpFiqF7i.webp"
  , Tv = "/assets/financialofficer-BCHJ79Fn.webp"
  , Av = "/assets/technicalofficer-BjR4At7Z.webp"
  , Ne = {
    logo: sv,
    secondarylogo: rv,
    hero: fv,
    garbade_dustbin: ov,
    garbage: dv,
    garbage_van: hv,
    recycle: mv,
    garbage_collect1: yv,
    garbage_collect2: gv,
    garbage_collect3: vv,
    garbage_collect4: pv,
    greenearth: xv,
    whoweare: bv,
    garbage_factory: Sv,
    mission: Ev,
    founder: Nv,
    cofounder: jv,
    growthofficer: wv,
    financialofficer: Tv,
    technicalofficer: Av
};
function Rv() {
    const i = Ft()
      , o = ui()
      , d = A.useRef()
      , [f,h] = V0.useState(!1)
      , g = () => {
        h(!0)
    }
      , w = () => {
        h(!1)
    }
    ;
    A.useEffect( () => {
        const x = y => {
            f && d.current && !d.current.contains(y.target) && w()
        }
        ;
        return document.addEventListener("mousedown", x),
        f && (document.body.style.overflow = "hidden"),
        () => {
            document.removeEventListener("mousedown", x),
            document.body.style.overflow = ""
        }
    }
    , [f]),
    A.useEffect( () => {
        w()
    }
    , [i.pathname]);
    let M = [{
        icon: yh,
        link: "https://www.facebook.com/share/1E6eX2FzMk/"
    }, {
        icon: gh,
        link: "https://www.instagram.com/ecoshudhra/"
    }, {
        icon: Xg,
        link: "https://www.linkedin.com/company/ecoshudhra/"
    }];
    return s.jsxs("nav", {
        className: "bg-white shadow-sm sticky top-0 z-50",
        children: [s.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center",
            children: [s.jsxs("div", {
                className: "flex items-center space-x-2",
                onClick: () => o("/"),
                children: [s.jsx("img", {
                    src: Ne.logo,
                    alt: "Ecoshudhra Logo",
                    className: "h-12 w-12 rounded-xl"
                }), s.jsx("span", {
                    className: "text-2xl font-extrabold  text-[#15542C] tracking-[1px]",
                    children: "Ecoshudhra"
                })]
            }), s.jsx("div", {
                className: "hidden md:flex space-x-6",
                children: [{
                    name: "Overview",
                    path: "/"
                }, {
                    name: "About",
                    path: "/about"
                }, {
                    name: "FAQ",
                    path: "/faq"
                }, {
                    name: "Contact",
                    path: "/contact"
                }].map( (x, y) => {
                    const T = i.pathname === x.path;
                    return s.jsxs(Ma, {
                        to: x.path,
                        className: `relative text-[16px] font-medium transition duration-300 ease-in-out
                                            ${T ? "text-green-600" : "text-gray-600 hover:text-green-600"}`,
                        children: [x.name, T && s.jsx("span", {
                            className: "absolute -bottom-1 left-0 w-full h-0.5 bg-green-600 rounded-full animate-fade-in"
                        })]
                    }, y)
                }
                )
            }), s.jsx("div", {
                className: "hidden sm:flex items-center space-x-4",
                children: M.map( (x, y) => s.jsx("a", {
                    href: x.link,
                    target: "_blank",
                    children: s.jsx(x.icon, {
                        className: "h-5 w-5 text-gray-500 hover:text-green-600 transition duration-200 cursor-pointer"
                    })
                }, y))
            }), s.jsx(Kg, {
                onClick: g,
                className: "text-green-700 md:hidden w-12 h-12 cursor-pointer hover:bg-gray-100 rounded-full p-2"
            })]
        }), f && s.jsx("div", {
            className: "fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden",
            children: s.jsxs("div", {
                ref: d,
                className: `fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-40 rounded-r-2xl
                  transform transition-transform duration-500 ease-in-out
                  ${f ? "translate-x-0" : "-translate-x-full"}`,
                children: [s.jsxs("div", {
                    className: "px-6 py-4 flex justify-between items-center border-b",
                    children: [s.jsx("h2", {
                        className: "text-lg font-semibold text-green-600",
                        children: "EcoShudhra"
                    }), s.jsx(cv, {
                        onClick: w,
                        className: "text-green-700 cursor-pointer w-12 h-12 hover:bg-gray-100 rounded-full p-2"
                    })]
                }), s.jsx("nav", {
                    className: "flex flex-col px-6 py-6 space-y-4 font-medium text-gray-700",
                    children: [{
                        name: "Overview",
                        path: "/"
                    }, {
                        name: "About",
                        path: "/about"
                    }, {
                        name: "FAQ",
                        path: "/faq"
                    }, {
                        name: "Contact",
                        path: "/contact"
                    }].map( (x, y) => {
                        const T = i.pathname === x.path;
                        return s.jsxs(Ma, {
                            to: x.path,
                            onClick: w,
                            className: `hover:bg-gray-100 px-4 py-2 rounded-lg relative transition duration-300 ease-in-out
                ${T ? "text-green-600" : "text-gray-600 hover:text-green-600"}`,
                            children: [x.name, T && s.jsx("span", {
                                className: "absolute -bottom-1 left-0 w-full h-0.5 bg-green-600 rounded-full animate-fade-in"
                            })]
                        }, y)
                    }
                    )
                })]
            })
        })]
    })
}
const ph = ({children: i, className: o="", ...d}) => s.jsx("button", {
    className: `inline-flex items-center justify-center rounded-md bg-green-600 text-white hover:bg-green-700 px-4 py-2 text-sm font-medium transition-colors ${o}`,
    ...d,
    children: i
})
  , zv = ({className: i="", ...o}) => s.jsx("input", {
    className: `border border-gray-300 rounded-md px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-green-500 ${i}`,
    ...o
});
function Mv() {
    const i = ui();
    return s.jsxs("footer", {
        className: "bg-black text-white py-12 px-4",
        children: [s.jsxs("div", {
            className: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8",
            children: [s.jsxs("div", {
                children: [s.jsxs("div", {
                    className: "flex items-center mb-4",
                    onClick: () => i("/"),
                    children: [s.jsx("img", {
                        src: Ne.secondarylogo,
                        alt: "Ecoshudhra Logo",
                        className: "h-10 w-10 rounded-xl"
                    }), s.jsx("span", {
                        className: "ml-2 text-md font-bold",
                        children: "EcoShudhra"
                    })]
                }), s.jsx("p", {
                    className: "text-sm text-gray-400",
                    children: "Transforming public waste into opportunity and impact."
                }), s.jsxs("div", {
                    className: "flex mt-4 space-x-4",
                    children: [s.jsx("a", {
                        href: "ttps://www.facebook.com/share/1E6eX2FzMk/",
                        target: "_blank",
                        children: s.jsx(yh, {
                            className: "w-5 h-5 text-gray-400 hover:text-white cursor-pointer"
                        })
                    }), s.jsx("a", {
                        href: "https://www.instagram.com/ecoshudhra/",
                        target: "_blank",
                        children: s.jsx(av, {
                            className: "w-5 h-5 text-gray-400 hover:text-white cursor-pointer"
                        })
                    }), s.jsx("a", {
                        href: "https://www.linkedin.com/company/ecoshudhra/",
                        target: "_blank",
                        children: s.jsx(gh, {
                            className: "w-5 h-5 text-gray-400 hover:text-white cursor-pointer"
                        })
                    })]
                })]
            }), s.jsxs("div", {
                children: [s.jsx("h4", {
                    className: "font-semibold mb-4",
                    children: "About"
                }), s.jsxs("ul", {
                    className: "text-sm space-y-2 text-gray-400",
                    children: [s.jsx("li", {
                        children: s.jsx("a", {
                            href: "#",
                            className: "hover:text-white",
                            children: "Our Mission"
                        })
                    }), s.jsx("li", {
                        children: s.jsx("a", {
                            href: "#",
                            className: "hover:text-white",
                            children: "Vision"
                        })
                    }), s.jsx("li", {
                        children: s.jsx("a", {
                            href: "#",
                            className: "hover:text-white",
                            children: "Values"
                        })
                    })]
                })]
            }), s.jsxs("div", {
                children: [s.jsx("h4", {
                    className: "font-semibold mb-4",
                    children: "Support"
                }), s.jsxs("ul", {
                    className: "text-sm space-y-2 text-gray-400",
                    children: [s.jsx("li", {
                        children: s.jsx("a", {
                            href: "#",
                            className: "hover:text-white",
                            children: "Help Center"
                        })
                    }), s.jsx("li", {
                        children: s.jsx("a", {
                            href: "/faq",
                            className: "hover:text-white",
                            children: "FAQs"
                        })
                    }), s.jsx("li", {
                        children: s.jsx("a", {
                            href: "/contact",
                            className: "hover:text-white",
                            children: "Contact"
                        })
                    })]
                })]
            }), s.jsxs("div", {
                children: [s.jsx("h4", {
                    className: "font-semibold mb-4",
                    children: "Contact"
                }), s.jsxs("div", {
                    className: "text-sm text-gray-400 space-y-2",
                    children: [s.jsxs("div", {
                        className: "flex items-center",
                        children: [s.jsx(Bs, {
                            className: "w-4 h-4 mr-2"
                        }), " support@ecoshudhra.in"]
                    }), s.jsxs("div", {
                        className: "flex items-center",
                        children: [s.jsx(vh, {
                            className: "w-4 h-4 mr-2"
                        }), " +91 90642-30170"]
                    }), s.jsxs("div", {
                        className: "flex items-center",
                        children: [s.jsx(Ys, {
                            className: "w-4 h-4 mr-2"
                        }), " 123 Barasat, Kolkata"]
                    })]
                })]
            })]
        }), s.jsx("div", {
            className: "border-t border-gray-800 mt-8 pt-6 px-4",
            children: s.jsxs("div", {
                className: "max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4 text-center md:text-left",
                children: [s.jsxs("p", {
                    className: "",
                    children: ["© ", new Date().getFullYear(), " Ecoshudhra. All rights reserved."]
                }), s.jsxs("div", {
                    className: "space-x-4",
                    children: [s.jsx(Ma, {
                        to: "/privacy-policy",
                        className: "hover:text-white transition-colors duration-200",
                        children: "Privacy Policy"
                    }), s.jsx("span", {
                        children: "|"
                    }), s.jsx(Ma, {
                        to: "/terms-and-conditions",
                        className: "hover:text-white transition-colors duration-200",
                        children: "Terms & Conditions"
                    })]
                })]
            })
        })]
    })
}
const _v = [{
    id: 1,
    name: "Joy Paul",
    title: "Founder & COO",
    image: Ne.founder,
    details: "Joy has 10+ years of experience in operations and business development.",
    roleDetails: "Oversees daily operations, strategic planning, and ensures seamless execution of core company goals."
}, {
    id: 2,
    name: "Raktim Mondal",
    title: "CEO & Co-founder",
    image: Ne.cofounder,
    details: "Raktim is passionate about leadership and innovation.",
    roleDetails: "Drives company vision, leads fundraising efforts, and represents the company externally."
}, {
    id: 3,
    name: "Rounak Basak",
    title: "Chief Technology Officer",
    image: Ne.technicalofficer,
    details: "Rounak leads tech innovation and architecture.",
    roleDetails: "Responsible for technical strategy, system architecture, and development team leadership."
}, {
    id: 4,
    name: "Parojita Mukherjee",
    title: "Chief Growth Officer",
    image: Ne.growthofficer,
    details: "Parojita drives user growth and engagement.",
    roleDetails: "Focuses on marketing, partnerships, and data-driven growth strategies."
}, {
    id: 5,
    name: "Surajit Bhowmik",
    title: "Chief Financial Officer",
    image: Ne.financialofficer,
    details: "Surajit manages company finances and budget forecasting.",
    roleDetails: "Handles financial planning, investor reporting, and compliance."
}];
function Ov() {
    const [i,o] = A.useState(null)
      , d = A.useRef(null)
      , f = g => {
        o(g)
    }
      , h = () => {
        o(null)
    }
    ;
    return A.useEffect( () => {
        const g = M => {
            i && d.current && !d.current.contains(M.target) && h()
        }
          , w = M => {
            M.key === "Escape" && h()
        }
        ;
        return i && (document.body.style.overflow = "hidden",
        document.addEventListener("mousedown", g),
        document.addEventListener("keydown", w)),
        () => {
            document.body.style.overflow = "",
            document.removeEventListener("mousedown", g),
            document.removeEventListener("keydown", w)
        }
    }
    , [i]),
    s.jsxs(s.Fragment, {
        children: [s.jsxs("div", {
            className: "bg-white",
            children: [s.jsxs("section", {
                className: "h-[300px] sm:h-[400px] bg-cover bg-center relative flex items-center justify-center sm:justify-start text-white",
                style: {
                    backgroundImage: `url(${Ne.whoweare})`
                },
                children: [s.jsx("div", {
                    className: "absolute inset-0 bg-black/60"
                }), s.jsxs("div", {
                    className: "relative z-10 px-4 sm:pl-16 md:pl-32 text-center sm:text-left max-w-3xl",
                    children: [s.jsx("p", {
                        className: "text-base sm:text-lg md:text-xl font-light",
                        children: "Recycling for a Greener Planet"
                    }), s.jsx("h1", {
                        className: "text-2xl sm:text-4xl md:text-5xl font-bold mt-2",
                        children: "Who We Are"
                    }), s.jsxs("p", {
                        className: "mt-4 text-sm sm:text-base font-light",
                        children: [s.jsx("span", {
                            className: "text-green-500 font-bold",
                            children: "Ecoshudhra"
                        }), " is dedicated to reducing landfill waste and protecting our planet by transforming discarded wastes into reusable resources."]
                    })]
                })]
            }), s.jsx("section", {
                className: "pt-24 px-4 sm:px-6 lg:px-28",
                children: s.jsxs("div", {
                    className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
                    children: [s.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [s.jsx("img", {
                            loading: "lazy",
                            src: Ne.garbage_collect1,
                            alt: "Cleanup 1",
                            className: "rounded-xl border-2 border-white shadow-md object-cover h-42 w-full"
                        }), s.jsx("img", {
                            loading: "lazy",
                            src: Ne.garbage_collect2,
                            alt: "Plastic Bottles",
                            className: "rounded-xl border-2 border-white shadow-md object-cover h-42 w-full"
                        }), s.jsx("img", {
                            loading: "lazy",
                            src: Ne.garbage_collect3,
                            alt: "Cleanup 2",
                            className: "rounded-xl border-2 border-white shadow-md object-cover h-42 w-full"
                        }), s.jsx("img", {
                            loading: "lazy",
                            src: Ne.garbage_collect4,
                            alt: "Trash Pickup",
                            className: "rounded-xl border-2 border-white shadow-md object-cover h-42 w-full"
                        })]
                    }), s.jsxs("div", {
                        children: [s.jsxs("h2", {
                            className: "text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center",
                            children: ["Our Story", s.jsxs("div", {
                                className: "flex items-center justify-center gap-2 mt-3",
                                children: [s.jsx("div", {
                                    className: "w-2 h-2 rounded-full bg-green-500"
                                }), s.jsx("div", {
                                    className: "w-16 h-0.5 bg-green-500"
                                }), s.jsx("div", {
                                    className: "w-2 h-2 rounded-full bg-green-500"
                                })]
                            })]
                        }), s.jsx("p", {
                            className: "text-gray-700 text-base mb-4 leading-relaxed",
                            children: "Ecoshudhra began with a simple yet profound realization: the world is drowning in waste, and something had to be done. Founded by a group of environmentally-conscious individuals, our journey started with a shared commitment to reduce waste pollution and create a sustainable future."
                        }), s.jsx("p", {
                            className: "text-gray-700 text-base leading-relaxed",
                            children: "What began as a small local initiative quickly grew into a pioneering recycling enterprise, dedicated to transforming waste into valuable resources."
                        }), s.jsx("p", {
                            className: "text-gray-700 text-base leading-relaxed mt-4",
                            children: "Driven by innovation and a passion for the environment, Ecoshudhra has evolved into a leader in the waste recycling industry. Our team tirelessly works to develop cutting-edge technologies and eco-friendly processes that not only recycle waste but also educate and inspire communities to take action."
                        })]
                    })]
                })
            }), s.jsx("section", {
                className: "pt-24 px-4 sm:px-6 lg:px-20 bg-white",
                children: s.jsxs("div", {
                    className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start",
                    children: [s.jsxs("div", {
                        children: [s.jsxs("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-4 text-center",
                            children: ["Process", s.jsxs("div", {
                                className: "flex items-center justify-center gap-2 mt-3",
                                children: [s.jsx("div", {
                                    className: "w-2 h-2 rounded-full bg-green-500"
                                }), s.jsx("div", {
                                    className: "w-16 h-0.5 bg-green-500"
                                }), s.jsx("div", {
                                    className: "w-2 h-2 rounded-full bg-green-500"
                                })]
                            })]
                        }), s.jsxs("ul", {
                            className: "text-gray-700 space-y-5 list-disc list-inside text-sm",
                            children: [s.jsxs("li", {
                                children: [s.jsx("strong", {
                                    children: "Collection:"
                                }), " Partnering with local communities, businesses, and organizations to gather waste."]
                            }), s.jsxs("li", {
                                children: [s.jsx("strong", {
                                    children: "Sorting:"
                                }), " Using advanced sorting systems to separate different types of wastes."]
                            }), s.jsxs("li", {
                                children: [s.jsx("strong", {
                                    children: "Cleaning:"
                                }), " Thoroughly cleaning the collected waste to remove contaminants."]
                            }), s.jsxs("li", {
                                children: [s.jsx("strong", {
                                    children: "Processing:"
                                }), " Breaking down wastes into raw materials that can be reused."]
                            }), s.jsxs("li", {
                                children: [s.jsx("strong", {
                                    children: "Manufacturing:"
                                }), " Creating new, high-quality products from recycled wastes."]
                            })]
                        })]
                    }), s.jsx("div", {
                        className: "flex h-full justify-center",
                        children: s.jsx("img", {
                            src: Ne.garbage_factory,
                            alt: "Plastic processing",
                            loading: "lazy",
                            className: "rounded-xl w-[90%] border-2 border-white shadow-md h-full  max-w-sm object-cover"
                        })
                    }), s.jsxs("div", {
                        children: [s.jsxs("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-4 text-center",
                            children: ["Impact", s.jsxs("div", {
                                className: "flex items-center justify-center gap-2 mt-3",
                                children: [s.jsx("div", {
                                    className: "w-2 h-2 rounded-full bg-green-500"
                                }), s.jsx("div", {
                                    className: "w-16 h-0.5 bg-green-500"
                                }), s.jsx("div", {
                                    className: "w-2 h-2 rounded-full bg-green-500"
                                })]
                            })]
                        }), s.jsxs("ul", {
                            className: "text-gray-700 space-y-4 list-disc list-inside text-sm",
                            children: [s.jsx("li", {
                                children: "Recycled over millions of public waste."
                            }), s.jsx("li", {
                                children: "Reduced carbon emissions by 1000+ metric tons."
                            }), s.jsx("li", {
                                children: "Created 1000+ jobs in local communities."
                            }), s.jsx("li", {
                                children: "Educated thousands about the importance of recycling."
                            })]
                        }), s.jsx("p", {
                            className: "mt-4 text-gray-600 text-sm",
                            children: "Our efforts not only promote a cleaner environment, but also raise awareness about the critical issue of waste pollution. Join us in building a sustainable future."
                        })]
                    })]
                })
            }), s.jsxs("section", {
                className: "relative mt-20 py-20 bg-cover bg-center text-white text-center",
                style: {
                    backgroundImage: `url(${Ne.mission})`
                },
                children: [s.jsx("div", {
                    className: "absolute inset-0 bg-black bg-opacity-60"
                }), s.jsxs("div", {
                    className: "relative z-10 max-w-4xl mx-auto px-4",
                    children: [s.jsx("h2", {
                        className: "text-3xl md:text-4xl font-bold mb-6",
                        children: "Our Mission"
                    }), s.jsx("p", {
                        className: "text-lg font-light",
                        children: "Our mission is to reduce the environmental footprint of public waste through innovative recycling solutions. We promote a circular economy where waste is reused, recycled, and repurposed — empowering communities to take action."
                    })]
                })]
            }), s.jsx("section", {
                className: "py-20 bg-white",
                children: s.jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 text-center",
                    children: [s.jsx("h2", {
                        className: "text-3xl md:text-4xl font-bold text-gray-900 mb-6",
                        children: "Meet Our Leadership Team"
                    }), s.jsxs("div", {
                        className: "flex items-center justify-center gap-2 mb-12",
                        children: [s.jsx("div", {
                            className: "w-2 h-2 rounded-full bg-green-500"
                        }), s.jsx("div", {
                            className: "w-16 h-0.5 bg-green-500"
                        }), s.jsx("div", {
                            className: "w-2 h-2 rounded-full bg-green-500"
                        })]
                    }), s.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10",
                        children: _v.map( (g, w) => s.jsxs("div", {
                            className: "text-center",
                            children: [s.jsx("img", {
                                src: g.image,
                                alt: g.name,
                                loading: "lazy",
                                onClick: () => f(g),
                                className: "w-full h-60 object-cover border-2 cursor-pointer border-white hover:scale-110 transition-all duration-300 object-top rounded-xl shadow-md mb-4"
                            }), s.jsx("h3", {
                                className: "text-lg font-semibold text-gray-900",
                                children: g.name
                            }), s.jsx("p", {
                                className: "text-sm text-gray-600",
                                children: g.title
                            })]
                        }, w))
                    })]
                })
            })]
        }), i && s.jsx("div", {
            className: "fixed cursor-pointer backdrop-blur-sm inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center",
            children: s.jsxs("div", {
                ref: d,
                className: "bg-white cursor-pointer max-w-lg w-full rounded-xl p-6 relative shadow-lg mx-4",
                children: [s.jsx("img", {
                    src: i.image,
                    alt: i.name,
                    loading: "lazy",
                    className: "w-full h-64 object-cover object-top rounded-xl mb-4"
                }), s.jsx("h2", {
                    className: "text-2xl font-bold text-gray-800",
                    children: i.name
                }), s.jsx("p", {
                    className: "text-green-600 text-sm font-semibold mb-2",
                    children: i.title
                }), s.jsxs("ul", {
                    className: "space-y-3 mt-4 pl-4 ",
                    children: [s.jsx("li", {
                        className: "text-gray-700 text-sm leading-relaxed relative before:content-['✓'] before:absolute before:-left-4 before:text-green-500 before:font-bold",
                        children: i.details
                    }), s.jsx("li", {
                        className: "text-gray-700 text-sm leading-relaxed relative before:content-['✓'] before:absolute before:-left-4 before:text-green-500 before:font-bold",
                        children: i.roleDetails
                    })]
                })]
            })
        })]
    })
}
function Dv() {
    const i = [{
        type: "text",
        name: "name",
        placeholder: "Name"
    }, {
        type: "email",
        name: "email",
        placeholder: "Email"
    }, {
        type: "tel",
        name: "phone",
        placeholder: "Phone"
    }, {
        type: "text",
        name: "subject",
        placeholder: "Subject"
    }];
    return s.jsx("section", {
        className: "py-24 pt-14 bg-white",
        children: s.jsxs("div", {
            className: "max-w-7xl mx-auto px-4",
            children: [s.jsxs("h2", {
                className: "text-3xl md:text-4xl font-bold text-center text-gray-900 mb-5 md:mb-16",
                children: ["Contact Us", s.jsxs("div", {
                    className: "flex items-center justify-center gap-2 mt-3",
                    children: [s.jsx("div", {
                        className: "w-2 h-2 rounded-full bg-green-500"
                    }), s.jsx("div", {
                        className: "w-16 h-0.5 bg-green-500"
                    }), s.jsx("div", {
                        className: "w-2 h-2 rounded-full bg-green-500"
                    })]
                })]
            }), s.jsxs("div", {
                className: "flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center",
                children: [s.jsx("div", {
                    className: "w-full h-full",
                    children: s.jsx("iframe", {
                        title: "Google Map",
                        src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3733.123456789!2d88.475!3d22.726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273b0f044f123%3A0x123456abcdef!2sBarasat%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
                        className: "w-full h-[300px] md:h-full border-0 rounded-lg shadow-md",
                        allowFullScreen: "",
                        loading: "lazy",
                        referrerPolicy: "no-referrer-when-downgrade"
                    })
                }), s.jsxs("div", {
                    className: "bg-white p-8 rounded-lg shadow-md",
                    children: [s.jsx("h3", {
                        className: "text-xl font-semibold text-gray-800 mb-4",
                        children: "Get in touch with Us"
                    }), s.jsx("p", {
                        className: "text-sm text-gray-600 mb-6",
                        children: "Get in touch with us to help ReEarth transform discarded plastic into reusable resources and protect our planet!"
                    }), s.jsxs("form", {
                        method: "POST",
                        action: "https://formspree.io/f/mgvydzpp",
                        className: "space-y-4",
                        children: [i.map( (o, d) => s.jsx("input", {
                            type: o.type,
                            placeholder: o.placeholder,
                            name: o.name,
                            required: !0,
                            className: "w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        }, d)), s.jsx("textarea", {
                            rows: "4",
                            name: "message",
                            placeholder: "Message",
                            required: !0,
                            className: "w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        }), s.jsx("button", {
                            type: "submit",
                            className: "w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition",
                            children: "Send Message"
                        })]
                    })]
                })]
            }), s.jsxs("div", {
                className: "mt-12 flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 text-sm text-gray-600",
                children: [s.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [s.jsx(vh, {
                        className: "w-4 h-4 text-green-600"
                    }), "+91 90642-30170"]
                }), s.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [s.jsx(Bs, {
                        className: "w-4 h-4 text-green-600"
                    }), "support@ecoshudhra.in"]
                }), s.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [s.jsx(Ys, {
                        className: "w-4 h-4 text-green-600"
                    }), "123 - Barasat, Kolkata"]
                })]
            })]
        })
    })
}
const Uv = [{
    question: "What is Ecoshudhra’s mission?",
    answer: "Ecoshudhra aims to build a cleaner and greener future by enabling responsible waste disposal, efficient collection, and incentivized recycling through community collaboration and smart technology."
}, {
    question: "What types of waste does Ecoshudhra handle?",
    answer: "Ecoshudhra supports the collection and recycling of all common waste types, including plastic, organic, e-waste, metal, and general litter from public spaces."
}, {
    question: "How can I report garbage in my area?",
    answer: "Simply take a photo of the garbage using the Ecoshudhra app or website, and submit it. The image will be geotagged and sent to local municipal or private collection partners."
}, {
    question: "Who collects the reported waste?",
    answer: "Waste is assigned to nearby authorized municipal workers or private collection companies based on the location and type of garbage reported."
}, {
    question: "What is EcoCrystal and how do I earn it?",
    answer: "EcoCrystal is a digital reward you earn each time your garbage report leads to successful cleanup. It can be redeemed for sustainable products, discounts, or community rewards."
}, {
    question: "How does Ecoshudhra ensure proper recycling?",
    answer: "Ecoshudhra partners with certified recyclers who sort and process waste into reusable materials using environmentally safe methods."
}, {
    question: "Can I track the status of a garbage report?",
    answer: "Yes, once you upload a report, you can track its progress in your dashboard — from assignment to cleanup and EcoCrystal reward confirmation."
}, {
    question: "Does Ecoshudhra operate in my city?",
    answer: "Ecoshudhra is expanding rapidly. You can check supported locations in the app or contact our support team to request service in your area."
}, {
    question: "How do I partner as a collector or recycling company?",
    answer: "Fill out our partner registration form on the website to collaborate with us for waste pickup, processing, or awareness campaigns."
}, {
    question: "Is there a way to educate my community using Ecoshudhra?",
    answer: "Absolutely! We offer digital toolkits, school programs, and workshops to help communities promote responsible waste management."
}];
function Cv() {
    const [i,o] = A.useState(null)
      , d = f => {
        o(i === f ? null : f)
    }
    ;
    return s.jsx("section", {
        className: "py-24 pt-14 bg-white",
        children: s.jsxs("div", {
            className: "max-w-4xl mx-auto px-4 text-center",
            children: [s.jsx("h2", {
                className: "text-3xl md:text-4xl font-bold text-gray-900 mb-6",
                children: "Frequently Asked Questions (FAQ)"
            }), s.jsxs("div", {
                className: "flex items-center justify-center gap-2 mb-10",
                children: [s.jsx("div", {
                    className: "w-2 h-2 rounded-full bg-green-500"
                }), s.jsx("div", {
                    className: "w-16 h-0.5 bg-green-500"
                }), s.jsx("div", {
                    className: "w-2 h-2 rounded-full bg-green-500"
                })]
            }), s.jsx("div", {
                className: "space-y-4 text-left",
                children: Uv.map( (f, h) => s.jsxs("div", {
                    className: "border overflow-hidden border-gray-200 rounded-lg shadow-sm transition-all duration-300",
                    children: [s.jsxs("button", {
                        onClick: () => d(h),
                        className: "w-full flex justify-between items-center px-6 py-4 text-left",
                        children: [s.jsx("span", {
                            className: "text-gray-800 font-medium text-base",
                            children: f.question
                        }), i === h ? s.jsx(Ug, {
                            className: "w-5 h-5 text-green-600"
                        }) : s.jsx(Og, {
                            className: "w-5 h-5 text-gray-500"
                        })]
                    }), i === h && s.jsx("div", {
                        className: "px-6 py-4 text-white text-sm bg-green-600",
                        children: f.answer
                    })]
                }, h))
            })]
        })
    })
}
function Hv() {
    const i = () => {}
    ;
    return s.jsxs("section", {
        className: "relative bg-gradient-to-r from-green-50 to-blue-50 py-20 sm:py-32",
        children: [s.jsx("div", {
            className: "absolute inset-0 bg-cover bg-center",
            style: {
                backgroundImage: `url(${Ne.hero})`
            },
            "aria-hidden": "true"
        }), s.jsx("div", {
            className: "absolute inset-0 bg-black opacity-50"
        }), s.jsx("div", {
            className: "relative z-10 max-w-6xl mx-auto px-6",
            children: s.jsxs("div", {
                className: "max-w-2xl text-center md:text-left space-y-7",
                children: [s.jsx("p", {
                    className: "text-white text-lg font-medium tracking-wide uppercase",
                    children: "Recycling for a Greener Planet"
                }), s.jsx("h1", {
                    className: "text-white text-4xl sm:text-5xl block md:text-6xl font-extrabold leading-tight md:whitespace-nowrap drop-shadow-md",
                    children: "Smart Waste Solutions."
                }), s.jsxs("p", {
                    className: "text-white text-md sm:text-xl",
                    children: ["Transforming discarded Wastes into reusable resources, ", s.jsx("span", {
                        className: "text-green-500",
                        children: "Ecoshudhra"
                    }), " is commited to reducing all waste and promoting sustainable living."]
                }), s.jsx("a", {
                    href: "/downloads/ecoshudhra.apk",
                    download: !0,
                    onClick: i,
                    className: "bg-green-600 inline-block hover:bg-green-700 text-white px-5 py-4 sm:px-8 sm:py-4 text-lg rounded-xl shadow-md transition-all duration-300",
                    children: "Download App"
                })]
            })
        }), s.jsx("div", {
            className: "absolute left-1/2 transform -translate-x-1/2 bottom-[-3rem] z-40 w-[90%] lg:w-[70%] xl:w-[65%] bg-white rounded-3xl shadow-xl px-6 py-5",
            children: s.jsxs("div", {
                className: "grid grid-cols-7 md:grid-cols-7 items-start gap-6 text-center",
                children: [s.jsx(Ql, {
                    icon: Hg,
                    label: "Tech-Driven"
                }), s.jsx(Ql, {
                    icon: uv,
                    label: "Community"
                }), s.jsx(Ql, {
                    icon: Lg,
                    label: "Eco-Friendly"
                }), s.jsx(Ql, {
                    icon: mh,
                    label: "Education"
                }), s.jsx(Ql, {
                    icon: Jg,
                    label: "New Products"
                }), s.jsx(Ql, {
                    icon: Ys,
                    label: "Location"
                }), s.jsx(Ql, {
                    icon: Fg,
                    label: "Sustainability"
                })]
            })
        })]
    })
}
const Ql = ({icon: i, label: o}) => s.jsxs("div", {
    className: "flex flex-col items-center lg:gap-1 justify-center cursor-pointer hover:scale-110 transition-all",
    children: [s.jsx(i, {
        className: "w-6 h-6 sm:w-7 sm:h-7 lg:w-6 lg:h-6 text-green-600 mb-1"
    }), s.jsx("span", {
        className: "hidden text-sm font-medium md:block text-gray-700 whitespace-nowrap",
        children: o
    })]
});
function qv() {
    const i = [{
        icon: s.jsx(tv, {
            className: "w-6 h-6 text-white"
        }),
        title: "Sustainable Waste Management",
        description: "Ecoshudhra leads community efforts in collecting, segregating, and responsibly disposing of all types of waste—plastic, organic, electronic, and more."
    }, {
        icon: s.jsx(Mg, {
            className: "w-6 h-6 text-white"
        }),
        title: "Circular Product Innovation",
        description: "Through upcycling and advanced processing, Ecoshudhra transforms collected waste into practical, eco-friendly products that reduce the need for virgin materials."
    }, {
        icon: s.jsx(mh, {
            className: "w-6 h-6 text-white"
        }),
        title: "Environmental Waste Education",
        description: "We conduct engaging workshops, school programs, and corporate sessions to promote environmental awareness and responsible waste habits at every level of society."
    }, {
        icon: s.jsx(Ig, {
            className: "w-6 h-6 text-white"
        }),
        title: "Research & Impact Development",
        description: "Ecoshudhra continuously invests in R&D to develop efficient technologies and scalable models that increase recycling rates and reduce landfill dependency."
    }];
    return s.jsx("section", {
        className: "mt-28 bg-white",
        children: s.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
            children: [s.jsxs("h2", {
                className: "text-3xl md:text-4xl font-bold text-gray-900 mb-16",
                children: ["What We Do", s.jsxs("div", {
                    className: "flex items-center justify-center gap-2 mt-3",
                    children: [s.jsx("div", {
                        className: "w-2 h-2 rounded-full bg-green-500"
                    }), s.jsx("div", {
                        className: "w-16 h-0.5 bg-green-500"
                    }), s.jsx("div", {
                        className: "w-2 h-2 rounded-full bg-green-500"
                    })]
                })]
            }), s.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
                children: i.map( (o, d) => s.jsxs("div", {
                    className: "bg-white cursor-pointer rounded-xl border border-gray-200 shadow-md p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-lg",
                    children: [s.jsx("div", {
                        className: "bg-green-600 rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow",
                        children: o.icon
                    }), s.jsx("h3", {
                        className: "text-lg font-semibold text-gray-900 mb-2",
                        children: o.title
                    }), s.jsx("p", {
                        className: "text-gray-600 text-sm",
                        children: o.description
                    })]
                }, d))
            })]
        })
    })
}
function Bv() {
    return s.jsx("section", {
        className: "mt-16 md:mt-28",
        children: s.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-12",
            children: s.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                children: [s.jsxs("div", {
                    children: [s.jsx("h2", {
                        className: "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight",
                        children: "Understanding the Purpose and Necessity of Recycling"
                    }), s.jsxs("div", {
                        className: "space-y-4 text-gray-600 text-base md:text-lg",
                        children: [s.jsx("p", {
                            children: "Our planet is facing an unprecedented environmental crisis, and plastic waste is one of the major contributors to this problem. Understanding the importance of recycling is crucial for creating a sustainable future."
                        }), s.jsxs("ul", {
                            className: "space-y-2 list-disc pl-5",
                            children: [s.jsx("li", {
                                children: "Reduces environmental pollution"
                            }), s.jsx("li", {
                                children: "Conserves natural resources"
                            }), s.jsx("li", {
                                children: "Creates economic opportunities"
                            }), s.jsx("li", {
                                children: "Promotes sustainable living"
                            })]
                        })]
                    })]
                }), s.jsx("div", {
                    className: "flex items-center justify-center lg:justify-end",
                    children: s.jsxs("div", {
                        className: "relative w-full max-w-md sm:max-w-lg md:max-w-xl",
                        children: [s.jsx("img", {
                            loading: "lazy",
                            src: Ne.garbage_collect1,
                            alt: "Main cleanup activity",
                            className: "w-full h-auto rounded-xl shadow-xl object-cover"
                        }), s.jsx("img", {
                            loading: "lazy",
                            src: Ne.garbade_dustbin,
                            alt: "Supporting cleanup activity",
                            className: "hidden sm:block absolute bottom-[-30px] left-[-40px] w-32 sm:w-40 md:w-44 h-auto rounded-xl shadow-lg border-[6px] border-white"
                        })]
                    })
                })]
            })
        })
    })
}
function Yv() {
    const i = [{
        number: "01",
        title: "Dispose of public waste.",
        image: Ne.garbage,
        description: "Gather your waste items and locate a nearby recycling bin designated for wastes. Place clean public waste into the bin, following local guidelines."
    }, {
        number: "02",
        title: "Waste is picked up.",
        image: Ne.garbage_van,
        description: "Recycling trucks with specialized bins collect the waste on scheduled routes and transport it to recycling facilities."
    }, {
        number: "03",
        title: "Waste is sorted and recycled.",
        image: Ne.recycle,
        description: "The waste is sorted and processed through melting, extrusion, and molding to create usable products."
    }];
    return s.jsx("section", {
        className: "mt-28 bg-white",
        children: s.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 text-center",
            children: [s.jsxs("h2", {
                className: "text-3xl md:text-4xl font-bold text-gray-900 mb-16 font-quicksand",
                children: ["How It Works", s.jsxs("div", {
                    className: "flex items-center justify-center gap-2 mt-3",
                    children: [s.jsx("div", {
                        className: "w-2 h-2 rounded-full bg-green-500"
                    }), s.jsx("div", {
                        className: "w-16 h-0.5 bg-green-500"
                    }), s.jsx("div", {
                        className: "w-2 h-2 rounded-full bg-green-500"
                    })]
                })]
            }), s.jsxs("div", {
                className: "relative flex flex-col md:flex-row items-stretch justify-between gap-12 md:gap-8 max-w-6xl mx-auto",
                children: [s.jsx("div", {
                    className: "hidden md:block absolute top-4 left-[15%] right-[15%] h-0.5 border-t-2 border-dotted border-gray-300 z-0"
                }), i.map( (o, d) => s.jsxs("div", {
                    className: "relative z-10 flex-1 text-center px-2",
                    children: [s.jsx("div", {
                        className: "inline-block text-sm font-semibold border border-dashed border-gray-400 rounded-full px-4 py-1 bg-white mb-4 relative z-10",
                        children: o.number
                    }), s.jsx("img", {
                        src: o.image,
                        alt: o.title,
                        loading: "lazy",
                        className: "h-36 w-auto mx-auto object-contain mb-4"
                    }), s.jsx("h3", {
                        className: "text-lg font-semibold text-gray-800 mb-2 font-quicksand",
                        children: o.title
                    }), s.jsx("p", {
                        className: "text-gray-600 text-sm px-4 font-quicksand leading-relaxed",
                        children: o.description
                    })]
                }, d))]
            })]
        })
    })
}
function Lv() {
    const i = ui();
    return s.jsxs("section", {
        className: "mt-28 relative py-20 bg-cover bg-center bg-no-repeat",
        style: {
            backgroundImage: `url(${Ne.greenearth})`
        },
        children: [s.jsx("div", {
            className: "absolute inset-0 bg-black bg-opacity-60"
        }), s.jsxs("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
            children: [s.jsx("h2", {
                className: "text-3xl md:text-4xl font-bold text-white mb-4",
                children: "Join our mission to create a greener future"
            }), s.jsx("p", {
                className: "text-xl text-gray-200 mb-8 max-w-3xl mx-auto",
                children: "Together, we can make a significant impact on our environment through responsible waste recycling"
            }), s.jsx(ph, {
                onClick: () => i("/contact"),
                className: "bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg",
                children: "Join Us Today"
            })]
        })]
    })
}
function Gv() {
    return s.jsxs("section", {
        className: "py-20 bg-white text-center px-4",
        children: [s.jsxs("h2", {
            className: "text-3xl font-bold text-gray-900 mb-2",
            children: ["Subscribe for ", s.jsx("span", {
                className: "text-green-600",
                children: "Exclusive"
            })]
        }), s.jsx("h2", {
            className: "text-3xl font-bold text-green-600 mb-6",
            children: "Shudhra's Updates!"
        }), s.jsx("div", {
            className: "w-16 h-1 bg-green-600 mx-auto mb-6 rounded-full"
        }), s.jsxs("div", {
            className: "max-w-xl mx-auto flex items-center justify-center gap-4 mt-6",
            children: [s.jsxs("div", {
                className: "relative w-full",
                children: [s.jsx(Bs, {
                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 w-5 h-5"
                }), s.jsx(zv, {
                    type: "email",
                    placeholder: "Email Address",
                    className: "pl-10 pr-4 py-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-green-500"
                })]
            }), s.jsx(ph, {
                className: "bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition",
                children: "Subscribe"
            })]
        })]
    })
}
function Xv() {
    return s.jsxs(s.Fragment, {
        children: [s.jsx(Hv, {}), s.jsx(qv, {}), s.jsx(Bv, {}), s.jsx(Yv, {}), s.jsx(Lv, {}), s.jsx(Gv, {})]
    })
}
function Qv() {
    const {pathname: i} = Ft();
    return A.useEffect( () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    , [i]),
    null
}
function Zv() {
    return s.jsxs("section", {
        className: "relative py-20 pt-10 bg-white px-4 sm:px-8 lg:px-16",
        children: [s.jsx("img", {
            src: Ne.secondarylogo,
            alt: "Watermark Logo",
            className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 w-[500px] h-[500px] pointer-events-none z-0"
        }), s.jsxs("div", {
            className: "relative z-10 max-w-4xl mx-auto text-gray-800",
            children: [s.jsxs("h1", {
                className: "text-4xl font-bold text-center mb-6 text-green-700",
                children: ["Privacy Policy", s.jsxs("div", {
                    className: "flex items-center justify-center gap-2 mt-3",
                    children: [s.jsx("div", {
                        className: "w-2 h-2 rounded-full bg-green-600"
                    }), s.jsx("div", {
                        className: "w-16 h-0.5 bg-green-600"
                    }), s.jsx("div", {
                        className: "w-2 h-2 rounded-full bg-green-600"
                    })]
                })]
            }), s.jsxs("p", {
                className: "text-base leading-relaxed mb-6",
                children: ["At ", s.jsx("strong", {
                    className: "text-green-700",
                    children: "Ecoshudhra"
                }), ", we respect your privacy and are committed to protecting your personal data. This privacy policy outlines how we collect, use, and safeguard your information."]
            }), s.jsxs("div", {
                className: "space-y-6",
                children: [s.jsxs("div", {
                    children: [s.jsx("h2", {
                        className: "text-xl font-semibold text-green-700 mb-2",
                        children: "1. Information We Collect"
                    }), s.jsx("p", {
                        className: "text-gray-700",
                        children: "We collect personal information such as your name, email address, location, and any content you provide when interacting with our platform or subscribing to our updates."
                    })]
                }), s.jsxs("div", {
                    children: [s.jsx("h2", {
                        className: "text-xl font-semibold text-green-700 mb-2",
                        children: "2. How We Use Your Information"
                    }), s.jsx("p", {
                        className: "text-gray-700",
                        children: "Your information helps us provide better services, communicate updates, improve our content, and respond to your requests. We never sell your data to third parties."
                    })]
                }), s.jsxs("div", {
                    children: [s.jsx("h2", {
                        className: "text-xl font-semibold text-green-700 mb-2",
                        children: "3. Data Security"
                    }), s.jsx("p", {
                        className: "text-gray-700",
                        children: "We implement security measures to protect your personal data from unauthorized access, alteration, or disclosure."
                    })]
                }), s.jsxs("div", {
                    children: [s.jsx("h2", {
                        className: "text-xl font-semibold text-green-700 mb-2",
                        children: "4. Cookies"
                    }), s.jsx("p", {
                        className: "text-gray-700",
                        children: "We use cookies to enhance your experience. You can choose to disable cookies through your browser settings."
                    })]
                }), s.jsxs("div", {
                    children: [s.jsx("h2", {
                        className: "text-xl font-semibold text-green-700 mb-2",
                        children: "5. Your Rights"
                    }), s.jsx("p", {
                        className: "text-gray-700",
                        children: "You have the right to access, update, or delete your personal information. Contact us if you wish to exercise these rights."
                    })]
                }), s.jsxs("div", {
                    children: [s.jsx("h2", {
                        className: "text-xl font-semibold text-green-700 mb-2",
                        children: "6. Changes to This Policy"
                    }), s.jsx("p", {
                        className: "text-gray-700",
                        children: "We may update our privacy policy from time to time. Changes will be posted on this page with an updated date."
                    })]
                }), s.jsx("p", {
                    className: "mt-10 text-gray-600 text-sm text-center",
                    children: "Last updated: June 2025"
                })]
            })]
        })]
    })
}
const Vv = () => s.jsxs("section", {
    className: "relative py-20 pt-10 bg-white text-gray-800 overflow-hidden",
    children: [s.jsx("div", {
        className: "absolute inset-0 flex items-center justify-center pointer-events-none opacity-5",
        children: s.jsx("img", {
            src: Ne.secondarylogo,
            alt: "Ecoshudhra Logo",
            className: "w-[500px] h-[500px]"
        })
    }), s.jsxs("div", {
        className: "relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10",
        children: [s.jsxs("h1", {
            className: "text-4xl font-bold text-center text-green-700 mb-8",
            children: ["Terms & Conditions", s.jsxs("div", {
                className: "flex items-center justify-center gap-2 mt-3",
                children: [s.jsx("div", {
                    className: "w-2 h-2 rounded-full bg-green-600"
                }), s.jsx("div", {
                    className: "w-16 h-0.5 bg-green-600"
                }), s.jsx("div", {
                    className: "w-2 h-2 rounded-full bg-green-600"
                })]
            })]
        }), s.jsxs("div", {
            className: "space-y-6 text-justify text-base leading-relaxed",
            children: [s.jsx("p", {
                children: "Welcome to Ecoshudhra. By accessing our website or using our services, you agree to be bound by the following terms and conditions. Please read them carefully."
            }), s.jsx("h2", {
                className: "text-xl font-semibold text-green-600",
                children: "1. Use of the Website"
            }), s.jsx("p", {
                children: "You agree to use the site for lawful purposes only. You must not use this website in any way that is unlawful, illegal, or harmful."
            }), s.jsx("h2", {
                className: "text-xl font-semibold text-green-600",
                children: "2. Intellectual Property"
            }), s.jsx("p", {
                children: "All content, logos, images, and text on this site are the property of Ecoshudhra and are protected by applicable copyright and trademark laws."
            }), s.jsx("h2", {
                className: "text-xl font-semibold text-green-600",
                children: "3. Limitation of Liability"
            }), s.jsx("p", {
                children: "Ecoshudhra will not be held responsible for any damages resulting from the use or inability to use the website, even if we have been advised of such damages."
            }), s.jsx("h2", {
                className: "text-xl font-semibold text-green-600",
                children: "4. Third-Party Links"
            }), s.jsx("p", {
                children: "Our site may contain links to third-party websites. We are not responsible for the content or privacy practices of these websites."
            }), s.jsx("h2", {
                className: "text-xl font-semibold text-green-600",
                children: "5. Changes to Terms"
            }), s.jsx("p", {
                children: "We reserve the right to modify these terms at any time. Updated terms will be posted on this page. Your continued use of the site constitutes acceptance of those changes."
            }), s.jsx("h2", {
                className: "text-xl font-semibold text-green-600",
                children: "6. Contact Us"
            }), s.jsxs("p", {
                children: ["If you have any questions about these Terms and Conditions, please contact us at: ", s.jsx("br", {}), s.jsx("a", {
                    href: "mailto:support@ecoshudhra.com",
                    className: "text-green-600 underline",
                    children: "support@ecoshudhra.com"
                })]
            })]
        })]
    })]
});
function Kv() {
    return s.jsxs("div", {
        className: "min-h-screen bg-white",
        children: [s.jsx(Qv, {}), s.jsx(Rv, {}), s.jsxs(Qy, {
            children: [s.jsx(Zl, {
                path: "",
                element: s.jsx(Xv, {})
            }), s.jsx(Zl, {
                path: "/about",
                element: s.jsx(Ov, {})
            }), s.jsx(Zl, {
                path: "/faq",
                element: s.jsx(Cv, {})
            }), s.jsx(Zl, {
                path: "/contact",
                element: s.jsx(Dv, {})
            }), s.jsx(Zl, {
                path: "/privacy-policy",
                element: s.jsx(Zv, {})
            }), s.jsx(Zl, {
                path: "/terms-and-conditions",
                element: s.jsx(Vv, {})
            })]
        }), s.jsx(Mv, {})]
    })
}
P0.createRoot(document.getElementById("root")).render(s.jsx(A.StrictMode, {
    children: s.jsx(hg, {
        children: s.jsx(Kv, {})
    })
}));
