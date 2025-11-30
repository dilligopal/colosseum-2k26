
(function() {
    const a = document.createElement("link").relList;
    if (a && a.supports && a.supports("modulepreload"))
        return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]'))
        o(c);
    new MutationObserver(c => {
        for (const d of c)
            if (d.type === "childList")
                for (const f of d.addedNodes)
                    f.tagName === "LINK" && f.rel === "modulepreload" && o(f)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function l(c) {
        const d = {};
        return c.integrity && (d.integrity = c.integrity),
        c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
        c.crossOrigin === "use-credentials" ? d.credentials = "include" : c.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin",
        d
    }
    function o(c) {
        if (c.ep)
            return;
        c.ep = !0;
        const d = l(c);
        fetch(c.href, d)
    }
}
)();
var mc = {
    exports: {}
}
  , Ys = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lp;
function Ux() {
    if (Lp)
        return Ys;
    Lp = 1;
    var i = Symbol.for("react.transitional.element")
      , a = Symbol.for("react.fragment");
    function l(o, c, d) {
        var f = null;
        if (d !== void 0 && (f = "" + d),
        c.key !== void 0 && (f = "" + c.key),
        "key"in c) {
            d = {};
            for (var p in c)
                p !== "key" && (d[p] = c[p])
        } else
            d = c;
        return c = d.ref,
        {
            $$typeof: i,
            type: o,
            key: f,
            ref: c !== void 0 ? c : null,
            props: d
        }
    }
    return Ys.Fragment = a,
    Ys.jsx = l,
    Ys.jsxs = l,
    Ys
}
var kp;
function Bx() {
    return kp || (kp = 1,
    mc.exports = Ux()),
    mc.exports
}
var S = Bx()
  , pc = {
    exports: {}
}
  , bt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hp;
function Lx() {
    if (Hp)
        return bt;
    Hp = 1;
    var i = Symbol.for("react.transitional.element")
      , a = Symbol.for("react.portal")
      , l = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , c = Symbol.for("react.profiler")
      , d = Symbol.for("react.consumer")
      , f = Symbol.for("react.context")
      , p = Symbol.for("react.forward_ref")
      , h = Symbol.for("react.suspense")
      , m = Symbol.for("react.memo")
      , y = Symbol.for("react.lazy")
      , b = Symbol.iterator;
    function x(A) {
        return A === null || typeof A != "object" ? null : (A = b && A[b] || A["@@iterator"],
        typeof A == "function" ? A : null)
    }
    var M = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , E = Object.assign
      , D = {};
    function R(A, G, W) {
        this.props = A,
        this.context = G,
        this.refs = D,
        this.updater = W || M
    }
    R.prototype.isReactComponent = {},
    R.prototype.setState = function(A, G) {
        if (typeof A != "object" && typeof A != "function" && A != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, A, G, "setState")
    }
    ,
    R.prototype.forceUpdate = function(A) {
        this.updater.enqueueForceUpdate(this, A, "forceUpdate")
    }
    ;
    function N() {}
    N.prototype = R.prototype;
    function j(A, G, W) {
        this.props = A,
        this.context = G,
        this.refs = D,
        this.updater = W || M
    }
    var _ = j.prototype = new N;
    _.constructor = j,
    E(_, R.prototype),
    _.isPureReactComponent = !0;
    var F = Array.isArray
      , Y = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
    }
      , K = Object.prototype.hasOwnProperty;
    function J(A, G, W, P, $, pt) {
        return W = pt.ref,
        {
            $$typeof: i,
            type: A,
            key: G,
            ref: W !== void 0 ? W : null,
            props: pt
        }
    }
    function L(A, G) {
        return J(A.type, G, void 0, void 0, void 0, A.props)
    }
    function I(A) {
        return typeof A == "object" && A !== null && A.$$typeof === i
    }
    function ct(A) {
        var G = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + A.replace(/[=:]/g, function(W) {
            return G[W]
        })
    }
    var ot = /\/+/g;
    function yt(A, G) {
        return typeof A == "object" && A !== null && A.key != null ? ct("" + A.key) : G.toString(36)
    }
    function Bt() {}
    function vt(A) {
        switch (A.status) {
        case "fulfilled":
            return A.value;
        case "rejected":
            throw A.reason;
        default:
            switch (typeof A.status == "string" ? A.then(Bt, Bt) : (A.status = "pending",
            A.then(function(G) {
                A.status === "pending" && (A.status = "fulfilled",
                A.value = G)
            }, function(G) {
                A.status === "pending" && (A.status = "rejected",
                A.reason = G)
            })),
            A.status) {
            case "fulfilled":
                return A.value;
            case "rejected":
                throw A.reason
            }
        }
        throw A
    }
    function mt(A, G, W, P, $) {
        var pt = typeof A;
        (pt === "undefined" || pt === "boolean") && (A = null);
        var st = !1;
        if (A === null)
            st = !0;
        else
            switch (pt) {
            case "bigint":
            case "string":
            case "number":
                st = !0;
                break;
            case "object":
                switch (A.$$typeof) {
                case i:
                case a:
                    st = !0;
                    break;
                case y:
                    return st = A._init,
                    mt(st(A._payload), G, W, P, $)
                }
            }
        if (st)
            return $ = $(A),
            st = P === "" ? "." + yt(A, 0) : P,
            F($) ? (W = "",
            st != null && (W = st.replace(ot, "$&/") + "/"),
            mt($, G, W, "", function(qt) {
                return qt
            })) : $ != null && (I($) && ($ = L($, W + ($.key == null || A && A.key === $.key ? "" : ("" + $.key).replace(ot, "$&/") + "/") + st)),
            G.push($)),
            1;
        st = 0;
        var ht = P === "" ? "." : P + ":";
        if (F(A))
            for (var gt = 0; gt < A.length; gt++)
                P = A[gt],
                pt = ht + yt(P, gt),
                st += mt(P, G, W, pt, $);
        else if (gt = x(A),
        typeof gt == "function")
            for (A = gt.call(A),
            gt = 0; !(P = A.next()).done; )
                P = P.value,
                pt = ht + yt(P, gt++),
                st += mt(P, G, W, pt, $);
        else if (pt === "object") {
            if (typeof A.then == "function")
                return mt(vt(A), G, W, P, $);
            throw G = String(A),
            Error("Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead.")
        }
        return st
    }
    function B(A, G, W) {
        if (A == null)
            return A;
        var P = []
          , $ = 0;
        return mt(A, P, "", "", function(pt) {
            return G.call(W, pt, $++)
        }),
        P
    }
    function Z(A) {
        if (A._status === -1) {
            var G = A._result;
            G = G(),
            G.then(function(W) {
                (A._status === 0 || A._status === -1) && (A._status = 1,
                A._result = W)
            }, function(W) {
                (A._status === 0 || A._status === -1) && (A._status = 2,
                A._result = W)
            }),
            A._status === -1 && (A._status = 0,
            A._result = G)
        }
        if (A._status === 1)
            return A._result.default;
        throw A._result
    }
    var H = typeof reportError == "function" ? reportError : function(A) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var G = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A),
                error: A
            });
            if (!window.dispatchEvent(G))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", A);
            return
        }
        console.error(A)
    }
    ;
    function rt() {}
    return bt.Children = {
        map: B,
        forEach: function(A, G, W) {
            B(A, function() {
                G.apply(this, arguments)
            }, W)
        },
        count: function(A) {
            var G = 0;
            return B(A, function() {
                G++
            }),
            G
        },
        toArray: function(A) {
            return B(A, function(G) {
                return G
            }) || []
        },
        only: function(A) {
            if (!I(A))
                throw Error("React.Children.only expected to receive a single React element child.");
            return A
        }
    },
    bt.Component = R,
    bt.Fragment = l,
    bt.Profiler = c,
    bt.PureComponent = j,
    bt.StrictMode = o,
    bt.Suspense = h,
    bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y,
    bt.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(A) {
            return Y.H.useMemoCache(A)
        }
    },
    bt.cache = function(A) {
        return function() {
            return A.apply(null, arguments)
        }
    }
    ,
    bt.cloneElement = function(A, G, W) {
        if (A == null)
            throw Error("The argument must be a React element, but you passed " + A + ".");
        var P = E({}, A.props)
          , $ = A.key
          , pt = void 0;
        if (G != null)
            for (st in G.ref !== void 0 && (pt = void 0),
            G.key !== void 0 && ($ = "" + G.key),
            G)
                !K.call(G, st) || st === "key" || st === "__self" || st === "__source" || st === "ref" && G.ref === void 0 || (P[st] = G[st]);
        var st = arguments.length - 2;
        if (st === 1)
            P.children = W;
        else if (1 < st) {
            for (var ht = Array(st), gt = 0; gt < st; gt++)
                ht[gt] = arguments[gt + 2];
            P.children = ht
        }
        return J(A.type, $, void 0, void 0, pt, P)
    }
    ,
    bt.createContext = function(A) {
        return A = {
            $$typeof: f,
            _currentValue: A,
            _currentValue2: A,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        A.Provider = A,
        A.Consumer = {
            $$typeof: d,
            _context: A
        },
        A
    }
    ,
    bt.createElement = function(A, G, W) {
        var P, $ = {}, pt = null;
        if (G != null)
            for (P in G.key !== void 0 && (pt = "" + G.key),
            G)
                K.call(G, P) && P !== "key" && P !== "__self" && P !== "__source" && ($[P] = G[P]);
        var st = arguments.length - 2;
        if (st === 1)
            $.children = W;
        else if (1 < st) {
            for (var ht = Array(st), gt = 0; gt < st; gt++)
                ht[gt] = arguments[gt + 2];
            $.children = ht
        }
        if (A && A.defaultProps)
            for (P in st = A.defaultProps,
            st)
                $[P] === void 0 && ($[P] = st[P]);
        return J(A, pt, void 0, void 0, null, $)
    }
    ,
    bt.createRef = function() {
        return {
            current: null
        }
    }
    ,
    bt.forwardRef = function(A) {
        return {
            $$typeof: p,
            render: A
        }
    }
    ,
    bt.isValidElement = I,
    bt.lazy = function(A) {
        return {
            $$typeof: y,
            _payload: {
                _status: -1,
                _result: A
            },
            _init: Z
        }
    }
    ,
    bt.memo = function(A, G) {
        return {
            $$typeof: m,
            type: A,
            compare: G === void 0 ? null : G
        }
    }
    ,
    bt.startTransition = function(A) {
        var G = Y.T
          , W = {};
        Y.T = W;
        try {
            var P = A()
              , $ = Y.S;
            $ !== null && $(W, P),
            typeof P == "object" && P !== null && typeof P.then == "function" && P.then(rt, H)
        } catch (pt) {
            H(pt)
        } finally {
            Y.T = G
        }
    }
    ,
    bt.unstable_useCacheRefresh = function() {
        return Y.H.useCacheRefresh()
    }
    ,
    bt.use = function(A) {
        return Y.H.use(A)
    }
    ,
    bt.useActionState = function(A, G, W) {
        return Y.H.useActionState(A, G, W)
    }
    ,
    bt.useCallback = function(A, G) {
        return Y.H.useCallback(A, G)
    }
    ,
    bt.useContext = function(A) {
        return Y.H.useContext(A)
    }
    ,
    bt.useDebugValue = function() {}
    ,
    bt.useDeferredValue = function(A, G) {
        return Y.H.useDeferredValue(A, G)
    }
    ,
    bt.useEffect = function(A, G, W) {
        var P = Y.H;
        if (typeof W == "function")
            throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return P.useEffect(A, G)
    }
    ,
    bt.useId = function() {
        return Y.H.useId()
    }
    ,
    bt.useImperativeHandle = function(A, G, W) {
        return Y.H.useImperativeHandle(A, G, W)
    }
    ,
    bt.useInsertionEffect = function(A, G) {
        return Y.H.useInsertionEffect(A, G)
    }
    ,
    bt.useLayoutEffect = function(A, G) {
        return Y.H.useLayoutEffect(A, G)
    }
    ,
    bt.useMemo = function(A, G) {
        return Y.H.useMemo(A, G)
    }
    ,
    bt.useOptimistic = function(A, G) {
        return Y.H.useOptimistic(A, G)
    }
    ,
    bt.useReducer = function(A, G, W) {
        return Y.H.useReducer(A, G, W)
    }
    ,
    bt.useRef = function(A) {
        return Y.H.useRef(A)
    }
    ,
    bt.useState = function(A) {
        return Y.H.useState(A)
    }
    ,
    bt.useSyncExternalStore = function(A, G, W) {
        return Y.H.useSyncExternalStore(A, G, W)
    }
    ,
    bt.useTransition = function() {
        return Y.H.useTransition()
    }
    ,
    bt.version = "19.1.1",
    bt
}
var qp;
function df() {
    return qp || (qp = 1,
    pc.exports = Lx()),
    pc.exports
}
var k = df()
  , gc = {
    exports: {}
}
  , Xs = {}
  , yc = {
    exports: {}
}
  , vc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gp;
function kx() {
    return Gp || (Gp = 1,
    (function(i) {
        function a(B, Z) {
            var H = B.length;
            B.push(Z);
            t: for (; 0 < H; ) {
                var rt = H - 1 >>> 1
                  , A = B[rt];
                if (0 < c(A, Z))
                    B[rt] = Z,
                    B[H] = A,
                    H = rt;
                else
                    break t
            }
        }
        function l(B) {
            return B.length === 0 ? null : B[0]
        }
        function o(B) {
            if (B.length === 0)
                return null;
            var Z = B[0]
              , H = B.pop();
            if (H !== Z) {
                B[0] = H;
                t: for (var rt = 0, A = B.length, G = A >>> 1; rt < G; ) {
                    var W = 2 * (rt + 1) - 1
                      , P = B[W]
                      , $ = W + 1
                      , pt = B[$];
                    if (0 > c(P, H))
                        $ < A && 0 > c(pt, P) ? (B[rt] = pt,
                        B[$] = H,
                        rt = $) : (B[rt] = P,
                        B[W] = H,
                        rt = W);
                    else if ($ < A && 0 > c(pt, H))
                        B[rt] = pt,
                        B[$] = H,
                        rt = $;
                    else
                        break t
                }
            }
            return Z
        }
        function c(B, Z) {
            var H = B.sortIndex - Z.sortIndex;
            return H !== 0 ? H : B.id - Z.id
        }
        if (i.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var d = performance;
            i.unstable_now = function() {
                return d.now()
            }
        } else {
            var f = Date
              , p = f.now();
            i.unstable_now = function() {
                return f.now() - p
            }
        }
        var h = []
          , m = []
          , y = 1
          , b = null
          , x = 3
          , M = !1
          , E = !1
          , D = !1
          , R = !1
          , N = typeof setTimeout == "function" ? setTimeout : null
          , j = typeof clearTimeout == "function" ? clearTimeout : null
          , _ = typeof setImmediate < "u" ? setImmediate : null;
        function F(B) {
            for (var Z = l(m); Z !== null; ) {
                if (Z.callback === null)
                    o(m);
                else if (Z.startTime <= B)
                    o(m),
                    Z.sortIndex = Z.expirationTime,
                    a(h, Z);
                else
                    break;
                Z = l(m)
            }
        }
        function Y(B) {
            if (D = !1,
            F(B),
            !E)
                if (l(h) !== null)
                    E = !0,
                    K || (K = !0,
                    yt());
                else {
                    var Z = l(m);
                    Z !== null && mt(Y, Z.startTime - B)
                }
        }
        var K = !1
          , J = -1
          , L = 5
          , I = -1;
        function ct() {
            return R ? !0 : !(i.unstable_now() - I < L)
        }
        function ot() {
            if (R = !1,
            K) {
                var B = i.unstable_now();
                I = B;
                var Z = !0;
                try {
                    t: {
                        E = !1,
                        D && (D = !1,
                        j(J),
                        J = -1),
                        M = !0;
                        var H = x;
                        try {
                            e: {
                                for (F(B),
                                b = l(h); b !== null && !(b.expirationTime > B && ct()); ) {
                                    var rt = b.callback;
                                    if (typeof rt == "function") {
                                        b.callback = null,
                                        x = b.priorityLevel;
                                        var A = rt(b.expirationTime <= B);
                                        if (B = i.unstable_now(),
                                        typeof A == "function") {
                                            b.callback = A,
                                            F(B),
                                            Z = !0;
                                            break e
                                        }
                                        b === l(h) && o(h),
                                        F(B)
                                    } else
                                        o(h);
                                    b = l(h)
                                }
                                if (b !== null)
                                    Z = !0;
                                else {
                                    var G = l(m);
                                    G !== null && mt(Y, G.startTime - B),
                                    Z = !1
                                }
                            }
                            break t
                        } finally {
                            b = null,
                            x = H,
                            M = !1
                        }
                        Z = void 0
                    }
                } finally {
                    Z ? yt() : K = !1
                }
            }
        }
        var yt;
        if (typeof _ == "function")
            yt = function() {
                _(ot)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Bt = new MessageChannel
              , vt = Bt.port2;
            Bt.port1.onmessage = ot,
            yt = function() {
                vt.postMessage(null)
            }
        } else
            yt = function() {
                N(ot, 0)
            }
            ;
        function mt(B, Z) {
            J = N(function() {
                B(i.unstable_now())
            }, Z)
        }
        i.unstable_IdlePriority = 5,
        i.unstable_ImmediatePriority = 1,
        i.unstable_LowPriority = 4,
        i.unstable_NormalPriority = 3,
        i.unstable_Profiling = null,
        i.unstable_UserBlockingPriority = 2,
        i.unstable_cancelCallback = function(B) {
            B.callback = null
        }
        ,
        i.unstable_forceFrameRate = function(B) {
            0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < B ? Math.floor(1e3 / B) : 5
        }
        ,
        i.unstable_getCurrentPriorityLevel = function() {
            return x
        }
        ,
        i.unstable_next = function(B) {
            switch (x) {
            case 1:
            case 2:
            case 3:
                var Z = 3;
                break;
            default:
                Z = x
            }
            var H = x;
            x = Z;
            try {
                return B()
            } finally {
                x = H
            }
        }
        ,
        i.unstable_requestPaint = function() {
            R = !0
        }
        ,
        i.unstable_runWithPriority = function(B, Z) {
            switch (B) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                B = 3
            }
            var H = x;
            x = B;
            try {
                return Z()
            } finally {
                x = H
            }
        }
        ,
        i.unstable_scheduleCallback = function(B, Z, H) {
            var rt = i.unstable_now();
            switch (typeof H == "object" && H !== null ? (H = H.delay,
            H = typeof H == "number" && 0 < H ? rt + H : rt) : H = rt,
            B) {
            case 1:
                var A = -1;
                break;
            case 2:
                A = 250;
                break;
            case 5:
                A = 1073741823;
                break;
            case 4:
                A = 1e4;
                break;
            default:
                A = 5e3
            }
            return A = H + A,
            B = {
                id: y++,
                callback: Z,
                priorityLevel: B,
                startTime: H,
                expirationTime: A,
                sortIndex: -1
            },
            H > rt ? (B.sortIndex = H,
            a(m, B),
            l(h) === null && B === l(m) && (D ? (j(J),
            J = -1) : D = !0,
            mt(Y, H - rt))) : (B.sortIndex = A,
            a(h, B),
            E || M || (E = !0,
            K || (K = !0,
            yt()))),
            B
        }
        ,
        i.unstable_shouldYield = ct,
        i.unstable_wrapCallback = function(B) {
            var Z = x;
            return function() {
                var H = x;
                x = Z;
                try {
                    return B.apply(this, arguments)
                } finally {
                    x = H
                }
            }
        }
    }
    )(vc)),
    vc
}
var Yp;
function Hx() {
    return Yp || (Yp = 1,
    yc.exports = kx()),
    yc.exports
}
var bc = {
    exports: {}
}
  , xe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xp;
function qx() {
    if (Xp)
        return xe;
    Xp = 1;
    var i = df();
    function a(h) {
        var m = "https://react.dev/errors/" + h;
        if (1 < arguments.length) {
            m += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var y = 2; y < arguments.length; y++)
                m += "&args[]=" + encodeURIComponent(arguments[y])
        }
        return "Minified React error #" + h + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function l() {}
    var o = {
        d: {
            f: l,
            r: function() {
                throw Error(a(522))
            },
            D: l,
            C: l,
            L: l,
            m: l,
            X: l,
            S: l,
            M: l
        },
        p: 0,
        findDOMNode: null
    }
      , c = Symbol.for("react.portal");
    function d(h, m, y) {
        var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: b == null ? null : "" + b,
            children: h,
            containerInfo: m,
            implementation: y
        }
    }
    var f = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function p(h, m) {
        if (h === "font")
            return "";
        if (typeof m == "string")
            return m === "use-credentials" ? m : ""
    }
    return xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o,
    xe.createPortal = function(h, m) {
        var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
            throw Error(a(299));
        return d(h, m, null, y)
    }
    ,
    xe.flushSync = function(h) {
        var m = f.T
          , y = o.p;
        try {
            if (f.T = null,
            o.p = 2,
            h)
                return h()
        } finally {
            f.T = m,
            o.p = y,
            o.d.f()
        }
    }
    ,
    xe.preconnect = function(h, m) {
        typeof h == "string" && (m ? (m = m.crossOrigin,
        m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null,
        o.d.C(h, m))
    }
    ,
    xe.prefetchDNS = function(h) {
        typeof h == "string" && o.d.D(h)
    }
    ,
    xe.preinit = function(h, m) {
        if (typeof h == "string" && m && typeof m.as == "string") {
            var y = m.as
              , b = p(y, m.crossOrigin)
              , x = typeof m.integrity == "string" ? m.integrity : void 0
              , M = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
            y === "style" ? o.d.S(h, typeof m.precedence == "string" ? m.precedence : void 0, {
                crossOrigin: b,
                integrity: x,
                fetchPriority: M
            }) : y === "script" && o.d.X(h, {
                crossOrigin: b,
                integrity: x,
                fetchPriority: M,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0
            })
        }
    }
    ,
    xe.preinitModule = function(h, m) {
        if (typeof h == "string")
            if (typeof m == "object" && m !== null) {
                if (m.as == null || m.as === "script") {
                    var y = p(m.as, m.crossOrigin);
                    o.d.M(h, {
                        crossOrigin: y,
                        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                        nonce: typeof m.nonce == "string" ? m.nonce : void 0
                    })
                }
            } else
                m == null && o.d.M(h)
    }
    ,
    xe.preload = function(h, m) {
        if (typeof h == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
            var y = m.as
              , b = p(y, m.crossOrigin);
            o.d.L(h, y, {
                crossOrigin: b,
                integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                type: typeof m.type == "string" ? m.type : void 0,
                fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
                referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
                imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
                imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
                media: typeof m.media == "string" ? m.media : void 0
            })
        }
    }
    ,
    xe.preloadModule = function(h, m) {
        if (typeof h == "string")
            if (m) {
                var y = p(m.as, m.crossOrigin);
                o.d.m(h, {
                    as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                    crossOrigin: y,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0
                })
            } else
                o.d.m(h)
    }
    ,
    xe.requestFormReset = function(h) {
        o.d.r(h)
    }
    ,
    xe.unstable_batchedUpdates = function(h, m) {
        return h(m)
    }
    ,
    xe.useFormState = function(h, m, y) {
        return f.H.useFormState(h, m, y)
    }
    ,
    xe.useFormStatus = function() {
        return f.H.useHostTransitionStatus()
    }
    ,
    xe.version = "19.1.1",
    xe
}
var Qp;
function Gx() {
    if (Qp)
        return bc.exports;
    Qp = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (a) {
                console.error(a)
            }
    }
    return i(),
    bc.exports = qx(),
    bc.exports
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
var Zp;
function Yx() {
    if (Zp)
        return Xs;
    Zp = 1;
    var i = Hx()
      , a = df()
      , l = Gx();
    function o(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                e += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function c(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function d(t) {
        var e = t
          , n = t;
        if (t.alternate)
            for (; e.return; )
                e = e.return;
        else {
            t = e;
            do
                e = t,
                (e.flags & 4098) !== 0 && (n = e.return),
                t = e.return;
            while (t)
        }
        return e.tag === 3 ? n : null
    }
    function f(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function p(t) {
        if (d(t) !== t)
            throw Error(o(188))
    }
    function h(t) {
        var e = t.alternate;
        if (!e) {
            if (e = d(t),
            e === null)
                throw Error(o(188));
            return e !== t ? null : t
        }
        for (var n = t, s = e; ; ) {
            var r = n.return;
            if (r === null)
                break;
            var u = r.alternate;
            if (u === null) {
                if (s = r.return,
                s !== null) {
                    n = s;
                    continue
                }
                break
            }
            if (r.child === u.child) {
                for (u = r.child; u; ) {
                    if (u === n)
                        return p(r),
                        t;
                    if (u === s)
                        return p(r),
                        e;
                    u = u.sibling
                }
                throw Error(o(188))
            }
            if (n.return !== s.return)
                n = r,
                s = u;
            else {
                for (var g = !1, v = r.child; v; ) {
                    if (v === n) {
                        g = !0,
                        n = r,
                        s = u;
                        break
                    }
                    if (v === s) {
                        g = !0,
                        s = r,
                        n = u;
                        break
                    }
                    v = v.sibling
                }
                if (!g) {
                    for (v = u.child; v; ) {
                        if (v === n) {
                            g = !0,
                            n = u,
                            s = r;
                            break
                        }
                        if (v === s) {
                            g = !0,
                            s = u,
                            n = r;
                            break
                        }
                        v = v.sibling
                    }
                    if (!g)
                        throw Error(o(189))
                }
            }
            if (n.alternate !== s)
                throw Error(o(190))
        }
        if (n.tag !== 3)
            throw Error(o(188));
        return n.stateNode.current === n ? t : e
    }
    function m(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t;
        for (t = t.child; t !== null; ) {
            if (e = m(t),
            e !== null)
                return e;
            t = t.sibling
        }
        return null
    }
    var y = Object.assign
      , b = Symbol.for("react.element")
      , x = Symbol.for("react.transitional.element")
      , M = Symbol.for("react.portal")
      , E = Symbol.for("react.fragment")
      , D = Symbol.for("react.strict_mode")
      , R = Symbol.for("react.profiler")
      , N = Symbol.for("react.provider")
      , j = Symbol.for("react.consumer")
      , _ = Symbol.for("react.context")
      , F = Symbol.for("react.forward_ref")
      , Y = Symbol.for("react.suspense")
      , K = Symbol.for("react.suspense_list")
      , J = Symbol.for("react.memo")
      , L = Symbol.for("react.lazy")
      , I = Symbol.for("react.activity")
      , ct = Symbol.for("react.memo_cache_sentinel")
      , ot = Symbol.iterator;
    function yt(t) {
        return t === null || typeof t != "object" ? null : (t = ot && t[ot] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var Bt = Symbol.for("react.client.reference");
    function vt(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.$$typeof === Bt ? null : t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case E:
            return "Fragment";
        case R:
            return "Profiler";
        case D:
            return "StrictMode";
        case Y:
            return "Suspense";
        case K:
            return "SuspenseList";
        case I:
            return "Activity"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case M:
                return "Portal";
            case _:
                return (t.displayName || "Context") + ".Provider";
            case j:
                return (t._context.displayName || "Context") + ".Consumer";
            case F:
                var e = t.render;
                return t = t.displayName,
                t || (t = e.displayName || e.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case J:
                return e = t.displayName || null,
                e !== null ? e : vt(t.type) || "Memo";
            case L:
                e = t._payload,
                t = t._init;
                try {
                    return vt(t(e))
                } catch {}
            }
        return null
    }
    var mt = Array.isArray
      , B = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , Z = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , H = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , rt = []
      , A = -1;
    function G(t) {
        return {
            current: t
        }
    }
    function W(t) {
        0 > A || (t.current = rt[A],
        rt[A] = null,
        A--)
    }
    function P(t, e) {
        A++,
        rt[A] = t.current,
        t.current = e
    }
    var $ = G(null)
      , pt = G(null)
      , st = G(null)
      , ht = G(null);
    function gt(t, e) {
        switch (P(st, e),
        P(pt, t),
        P($, null),
        e.nodeType) {
        case 9:
        case 11:
            t = (t = e.documentElement) && (t = t.namespaceURI) ? dp(t) : 0;
            break;
        default:
            if (t = e.tagName,
            e = e.namespaceURI)
                e = dp(e),
                t = hp(e, t);
            else
                switch (t) {
                case "svg":
                    t = 1;
                    break;
                case "math":
                    t = 2;
                    break;
                default:
                    t = 0
                }
        }
        W($),
        P($, t)
    }
    function qt() {
        W($),
        W(pt),
        W(st)
    }
    function Pt(t) {
        t.memoizedState !== null && P(ht, t);
        var e = $.current
          , n = hp(e, t.type);
        e !== n && (P(pt, t),
        P($, n))
    }
    function Mt(t) {
        pt.current === t && (W($),
        W(pt)),
        ht.current === t && (W(ht),
        Ls._currentValue = H)
    }
    var tt = Object.prototype.hasOwnProperty
      , Nt = i.unstable_scheduleCallback
      , Lt = i.unstable_cancelCallback
      , fe = i.unstable_shouldYield
      , Be = i.unstable_requestPaint
      , $t = i.unstable_now
      , mn = i.unstable_getCurrentPriorityLevel
      , We = i.unstable_ImmediatePriority
      , an = i.unstable_UserBlockingPriority
      , sn = i.unstable_NormalPriority
      , Ya = i.unstable_LowPriority
      , Li = i.unstable_IdlePriority
      , yl = i.log
      , vl = i.unstable_setDisableYieldValue
      , fi = null
      , ye = null;
    function ln(t) {
        if (typeof yl == "function" && vl(t),
        ye && typeof ye.setStrictMode == "function")
            try {
                ye.setStrictMode(fi, t)
            } catch {}
    }
    var de = Math.clz32 ? Math.clz32 : Qa
      , _n = Math.log
      , Xa = Math.LN2;
    function Qa(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (_n(t) / Xa | 0) | 0
    }
    var pn = 256
      , ki = 4194304;
    function gn(t) {
        var e = t & 42;
        if (e !== 0)
            return e;
        switch (t & -t) {
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
            return t & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return t & 62914560;
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
            return t
        }
    }
    function Hi(t, e, n) {
        var s = t.pendingLanes;
        if (s === 0)
            return 0;
        var r = 0
          , u = t.suspendedLanes
          , g = t.pingedLanes;
        t = t.warmLanes;
        var v = s & 134217727;
        return v !== 0 ? (s = v & ~u,
        s !== 0 ? r = gn(s) : (g &= v,
        g !== 0 ? r = gn(g) : n || (n = v & ~t,
        n !== 0 && (r = gn(n))))) : (v = s & ~u,
        v !== 0 ? r = gn(v) : g !== 0 ? r = gn(g) : n || (n = s & ~t,
        n !== 0 && (r = gn(n)))),
        r === 0 ? 0 : e !== 0 && e !== r && (e & u) === 0 && (u = r & -r,
        n = e & -e,
        u >= n || u === 32 && (n & 4194048) !== 0) ? e : r
    }
    function di(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }
    function sr(t, e) {
        switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return e + 250;
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
            return e + 5e3;
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
    function Za() {
        var t = pn;
        return pn <<= 1,
        (pn & 4194048) === 0 && (pn = 256),
        t
    }
    function bl() {
        var t = ki;
        return ki <<= 1,
        (ki & 62914560) === 0 && (ki = 4194304),
        t
    }
    function qi(t) {
        for (var e = [], n = 0; 31 > n; n++)
            e.push(t);
        return e
    }
    function Un(t, e) {
        t.pendingLanes |= e,
        e !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
    }
    function xl(t, e, n, s, r, u) {
        var g = t.pendingLanes;
        t.pendingLanes = n,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0,
        t.expiredLanes &= n,
        t.entangledLanes &= n,
        t.errorRecoveryDisabledLanes &= n,
        t.shellSuspendCounter = 0;
        var v = t.entanglements
          , T = t.expirationTimes
          , z = t.hiddenUpdates;
        for (n = g & ~n; 0 < n; ) {
            var q = 31 - de(n)
              , Q = 1 << q;
            v[q] = 0,
            T[q] = -1;
            var V = z[q];
            if (V !== null)
                for (z[q] = null,
                q = 0; q < V.length; q++) {
                    var U = V[q];
                    U !== null && (U.lane &= -536870913)
                }
            n &= ~Q
        }
        s !== 0 && Sl(t, s, 0),
        u !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(g & ~e))
    }
    function Sl(t, e, n) {
        t.pendingLanes |= e,
        t.suspendedLanes &= ~e;
        var s = 31 - de(e);
        t.entangledLanes |= e,
        t.entanglements[s] = t.entanglements[s] | 1073741824 | n & 4194090
    }
    function Ka(t, e) {
        var n = t.entangledLanes |= e;
        for (t = t.entanglements; n; ) {
            var s = 31 - de(n)
              , r = 1 << s;
            r & e | t[s] & e && (t[s] |= e),
            n &= ~r
        }
    }
    function Gi(t) {
        switch (t) {
        case 2:
            t = 1;
            break;
        case 8:
            t = 4;
            break;
        case 32:
            t = 16;
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
            t = 128;
            break;
        case 268435456:
            t = 134217728;
            break;
        default:
            t = 0
        }
        return t
    }
    function Pa(t) {
        return t &= -t,
        2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function If() {
        var t = Z.p;
        return t !== 0 ? t : (t = window.event,
        t === void 0 ? 32 : jp(t.type))
    }
    function wv(t, e) {
        var n = Z.p;
        try {
            return Z.p = t,
            e()
        } finally {
            Z.p = n
        }
    }
    var Bn = Math.random().toString(36).slice(2)
      , ve = "__reactFiber$" + Bn
      , Ee = "__reactProps$" + Bn
      , Yi = "__reactContainer$" + Bn
      , lr = "__reactEvents$" + Bn
      , Mv = "__reactListeners$" + Bn
      , Dv = "__reactHandles$" + Bn
      , td = "__reactResources$" + Bn
      , Fa = "__reactMarker$" + Bn;
    function or(t) {
        delete t[ve],
        delete t[Ee],
        delete t[lr],
        delete t[Mv],
        delete t[Dv]
    }
    function Xi(t) {
        var e = t[ve];
        if (e)
            return e;
        for (var n = t.parentNode; n; ) {
            if (e = n[Yi] || n[ve]) {
                if (n = e.alternate,
                e.child !== null || n !== null && n.child !== null)
                    for (t = yp(t); t !== null; ) {
                        if (n = t[ve])
                            return n;
                        t = yp(t)
                    }
                return e
            }
            t = n,
            n = t.parentNode
        }
        return null
    }
    function Qi(t) {
        if (t = t[ve] || t[Yi]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
                return t
        }
        return null
    }
    function Ja(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t.stateNode;
        throw Error(o(33))
    }
    function Zi(t) {
        var e = t[td];
        return e || (e = t[td] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        e
    }
    function le(t) {
        t[Fa] = !0
    }
    var ed = new Set
      , nd = {};
    function hi(t, e) {
        Ki(t, e),
        Ki(t + "Capture", e)
    }
    function Ki(t, e) {
        for (nd[t] = e,
        t = 0; t < e.length; t++)
            ed.add(e[t])
    }
    var Cv = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , id = {}
      , ad = {};
    function Nv(t) {
        return tt.call(ad, t) ? !0 : tt.call(id, t) ? !1 : Cv.test(t) ? ad[t] = !0 : (id[t] = !0,
        !1)
    }
    function Tl(t, e, n) {
        if (Nv(e))
            if (n === null)
                t.removeAttribute(e);
            else {
                switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(e);
                    return;
                case "boolean":
                    var s = e.toLowerCase().slice(0, 5);
                    if (s !== "data-" && s !== "aria-") {
                        t.removeAttribute(e);
                        return
                    }
                }
                t.setAttribute(e, "" + n)
            }
    }
    function Al(t, e, n) {
        if (n === null)
            t.removeAttribute(e);
        else {
            switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(e);
                return
            }
            t.setAttribute(e, "" + n)
        }
    }
    function yn(t, e, n, s) {
        if (s === null)
            t.removeAttribute(n);
        else {
            switch (typeof s) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(n);
                return
            }
            t.setAttributeNS(e, n, "" + s)
        }
    }
    var rr, sd;
    function Pi(t) {
        if (rr === void 0)
            try {
                throw Error()
            } catch (n) {
                var e = n.stack.trim().match(/\n( *(at )?)/);
                rr = e && e[1] || "",
                sd = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + rr + t + sd
    }
    var ur = !1;
    function cr(t, e) {
        if (!t || ur)
            return "";
        ur = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var s = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var Q = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(Q.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(Q, [])
                                } catch (U) {
                                    var V = U
                                }
                                Reflect.construct(t, [], Q)
                            } else {
                                try {
                                    Q.call()
                                } catch (U) {
                                    V = U
                                }
                                t.call(Q.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (U) {
                                V = U
                            }
                            (Q = t()) && typeof Q.catch == "function" && Q.catch(function() {})
                        }
                    } catch (U) {
                        if (U && V && typeof U.stack == "string")
                            return [U.stack, V.stack]
                    }
                    return [null, null]
                }
            };
            s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var r = Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot, "name");
            r && r.configurable && Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = s.DetermineComponentFrameRoot()
              , g = u[0]
              , v = u[1];
            if (g && v) {
                var T = g.split(`
`)
                  , z = v.split(`
`);
                for (r = s = 0; s < T.length && !T[s].includes("DetermineComponentFrameRoot"); )
                    s++;
                for (; r < z.length && !z[r].includes("DetermineComponentFrameRoot"); )
                    r++;
                if (s === T.length || r === z.length)
                    for (s = T.length - 1,
                    r = z.length - 1; 1 <= s && 0 <= r && T[s] !== z[r]; )
                        r--;
                for (; 1 <= s && 0 <= r; s--,
                r--)
                    if (T[s] !== z[r]) {
                        if (s !== 1 || r !== 1)
                            do
                                if (s--,
                                r--,
                                0 > r || T[s] !== z[r]) {
                                    var q = `
` + T[s].replace(" at new ", " at ");
                                    return t.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", t.displayName)),
                                    q
                                }
                            while (1 <= s && 0 <= r);
                        break
                    }
            }
        } finally {
            ur = !1,
            Error.prepareStackTrace = n
        }
        return (n = t ? t.displayName || t.name : "") ? Pi(n) : ""
    }
    function Rv(t) {
        switch (t.tag) {
        case 26:
        case 27:
        case 5:
            return Pi(t.type);
        case 16:
            return Pi("Lazy");
        case 13:
            return Pi("Suspense");
        case 19:
            return Pi("SuspenseList");
        case 0:
        case 15:
            return cr(t.type, !1);
        case 11:
            return cr(t.type.render, !1);
        case 1:
            return cr(t.type, !0);
        case 31:
            return Pi("Activity");
        default:
            return ""
        }
    }
    function ld(t) {
        try {
            var e = "";
            do
                e += Rv(t),
                t = t.return;
            while (t);
            return e
        } catch (n) {
            return `
Error generating stack: ` + n.message + `
` + n.stack
        }
    }
    function Le(t) {
        switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function od(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }
    function Ov(t) {
        var e = od(t) ? "checked" : "value"
          , n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
          , s = "" + t[e];
        if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var r = n.get
              , u = n.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return r.call(this)
                },
                set: function(g) {
                    s = "" + g,
                    u.call(this, g)
                }
            }),
            Object.defineProperty(t, e, {
                enumerable: n.enumerable
            }),
            {
                getValue: function() {
                    return s
                },
                setValue: function(g) {
                    s = "" + g
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[e]
                }
            }
        }
    }
    function El(t) {
        t._valueTracker || (t._valueTracker = Ov(t))
    }
    function rd(t) {
        if (!t)
            return !1;
        var e = t._valueTracker;
        if (!e)
            return !0;
        var n = e.getValue()
          , s = "";
        return t && (s = od(t) ? t.checked ? "true" : "false" : t.value),
        t = s,
        t !== n ? (e.setValue(t),
        !0) : !1
    }
    function wl(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var jv = /[\n"\\]/g;
    function ke(t) {
        return t.replace(jv, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }
    function fr(t, e, n, s, r, u, g, v) {
        t.name = "",
        g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? t.type = g : t.removeAttribute("type"),
        e != null ? g === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Le(e)) : t.value !== "" + Le(e) && (t.value = "" + Le(e)) : g !== "submit" && g !== "reset" || t.removeAttribute("value"),
        e != null ? dr(t, g, Le(e)) : n != null ? dr(t, g, Le(n)) : s != null && t.removeAttribute("value"),
        r == null && u != null && (t.defaultChecked = !!u),
        r != null && (t.checked = r && typeof r != "function" && typeof r != "symbol"),
        v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.name = "" + Le(v) : t.removeAttribute("name")
    }
    function ud(t, e, n, s, r, u, g, v) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u),
        e != null || n != null) {
            if (!(u !== "submit" && u !== "reset" || e != null))
                return;
            n = n != null ? "" + Le(n) : "",
            e = e != null ? "" + Le(e) : n,
            v || e === t.value || (t.value = e),
            t.defaultValue = e
        }
        s = s ?? r,
        s = typeof s != "function" && typeof s != "symbol" && !!s,
        t.checked = v ? t.checked : !!s,
        t.defaultChecked = !!s,
        g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (t.name = g)
    }
    function dr(t, e, n) {
        e === "number" && wl(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n)
    }
    function Fi(t, e, n, s) {
        if (t = t.options,
        e) {
            e = {};
            for (var r = 0; r < n.length; r++)
                e["$" + n[r]] = !0;
            for (n = 0; n < t.length; n++)
                r = e.hasOwnProperty("$" + t[n].value),
                t[n].selected !== r && (t[n].selected = r),
                r && s && (t[n].defaultSelected = !0)
        } else {
            for (n = "" + Le(n),
            e = null,
            r = 0; r < t.length; r++) {
                if (t[r].value === n) {
                    t[r].selected = !0,
                    s && (t[r].defaultSelected = !0);
                    return
                }
                e !== null || t[r].disabled || (e = t[r])
            }
            e !== null && (e.selected = !0)
        }
    }
    function cd(t, e, n) {
        if (e != null && (e = "" + Le(e),
        e !== t.value && (t.value = e),
        n == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = n != null ? "" + Le(n) : ""
    }
    function fd(t, e, n, s) {
        if (e == null) {
            if (s != null) {
                if (n != null)
                    throw Error(o(92));
                if (mt(s)) {
                    if (1 < s.length)
                        throw Error(o(93));
                    s = s[0]
                }
                n = s
            }
            n == null && (n = ""),
            e = n
        }
        n = Le(e),
        t.defaultValue = n,
        s = t.textContent,
        s === n && s !== "" && s !== null && (t.value = s)
    }
    function Ji(t, e) {
        if (e) {
            var n = t.firstChild;
            if (n && n === t.lastChild && n.nodeType === 3) {
                n.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var zv = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function dd(t, e, n) {
        var s = e.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? s ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : s ? t.setProperty(e, n) : typeof n != "number" || n === 0 || zv.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px"
    }
    function hd(t, e, n) {
        if (e != null && typeof e != "object")
            throw Error(o(62));
        if (t = t.style,
        n != null) {
            for (var s in n)
                !n.hasOwnProperty(s) || e != null && e.hasOwnProperty(s) || (s.indexOf("--") === 0 ? t.setProperty(s, "") : s === "float" ? t.cssFloat = "" : t[s] = "");
            for (var r in e)
                s = e[r],
                e.hasOwnProperty(r) && n[r] !== s && dd(t, r, s)
        } else
            for (var u in e)
                e.hasOwnProperty(u) && dd(t, u, e[u])
    }
    function hr(t) {
        if (t.indexOf("-") === -1)
            return !1;
        switch (t) {
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
    var Vv = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , _v = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Ml(t) {
        return _v.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    var mr = null;
    function pr(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var Wi = null
      , $i = null;
    function md(t) {
        var e = Qi(t);
        if (e && (t = e.stateNode)) {
            var n = t[Ee] || null;
            t: switch (t = e.stateNode,
            e.type) {
            case "input":
                if (fr(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                e = n.name,
                n.type === "radio" && e != null) {
                    for (n = t; n.parentNode; )
                        n = n.parentNode;
                    for (n = n.querySelectorAll('input[name="' + ke("" + e) + '"][type="radio"]'),
                    e = 0; e < n.length; e++) {
                        var s = n[e];
                        if (s !== t && s.form === t.form) {
                            var r = s[Ee] || null;
                            if (!r)
                                throw Error(o(90));
                            fr(s, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name)
                        }
                    }
                    for (e = 0; e < n.length; e++)
                        s = n[e],
                        s.form === t.form && rd(s)
                }
                break t;
            case "textarea":
                cd(t, n.value, n.defaultValue);
                break t;
            case "select":
                e = n.value,
                e != null && Fi(t, !!n.multiple, e, !1)
            }
        }
    }
    var gr = !1;
    function pd(t, e, n) {
        if (gr)
            return t(e, n);
        gr = !0;
        try {
            var s = t(e);
            return s
        } finally {
            if (gr = !1,
            (Wi !== null || $i !== null) && (fo(),
            Wi && (e = Wi,
            t = $i,
            $i = Wi = null,
            md(e),
            t)))
                for (e = 0; e < t.length; e++)
                    md(t[e])
        }
    }
    function Wa(t, e) {
        var n = t.stateNode;
        if (n === null)
            return null;
        var s = n[Ee] || null;
        if (s === null)
            return null;
        n = s[e];
        t: switch (e) {
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
            (s = !s.disabled) || (t = t.type,
            s = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !s;
            break t;
        default:
            t = !1
        }
        if (t)
            return null;
        if (n && typeof n != "function")
            throw Error(o(231, e, typeof n));
        return n
    }
    var vn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , yr = !1;
    if (vn)
        try {
            var $a = {};
            Object.defineProperty($a, "passive", {
                get: function() {
                    yr = !0
                }
            }),
            window.addEventListener("test", $a, $a),
            window.removeEventListener("test", $a, $a)
        } catch {
            yr = !1
        }
    var Ln = null
      , vr = null
      , Dl = null;
    function gd() {
        if (Dl)
            return Dl;
        var t, e = vr, n = e.length, s, r = "value"in Ln ? Ln.value : Ln.textContent, u = r.length;
        for (t = 0; t < n && e[t] === r[t]; t++)
            ;
        var g = n - t;
        for (s = 1; s <= g && e[n - s] === r[u - s]; s++)
            ;
        return Dl = r.slice(t, 1 < s ? 1 - s : void 0)
    }
    function Cl(t) {
        var e = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && e === 13 && (t = 13)) : t = e,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function Nl() {
        return !0
    }
    function yd() {
        return !1
    }
    function we(t) {
        function e(n, s, r, u, g) {
            this._reactName = n,
            this._targetInst = r,
            this.type = s,
            this.nativeEvent = u,
            this.target = g,
            this.currentTarget = null;
            for (var v in t)
                t.hasOwnProperty(v) && (n = t[v],
                this[v] = n ? n(u) : u[v]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Nl : yd,
            this.isPropagationStopped = yd,
            this
        }
        return y(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = Nl)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = Nl)
            },
            persist: function() {},
            isPersistent: Nl
        }),
        e
    }
    var mi = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Rl = we(mi), Ia = y({}, mi, {
        view: 0,
        detail: 0
    }), Uv = we(Ia), br, xr, ts, Ol = y({}, Ia, {
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
        getModifierState: Tr,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== ts && (ts && t.type === "mousemove" ? (br = t.screenX - ts.screenX,
            xr = t.screenY - ts.screenY) : xr = br = 0,
            ts = t),
            br)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : xr
        }
    }), vd = we(Ol), Bv = y({}, Ol, {
        dataTransfer: 0
    }), Lv = we(Bv), kv = y({}, Ia, {
        relatedTarget: 0
    }), Sr = we(kv), Hv = y({}, mi, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), qv = we(Hv), Gv = y({}, mi, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), Yv = we(Gv), Xv = y({}, mi, {
        data: 0
    }), bd = we(Xv), Qv = {
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
    }, Zv = {
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
    }, Kv = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Pv(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = Kv[t]) ? !!e[t] : !1
    }
    function Tr() {
        return Pv
    }
    var Fv = y({}, Ia, {
        key: function(t) {
            if (t.key) {
                var e = Qv[t.key] || t.key;
                if (e !== "Unidentified")
                    return e
            }
            return t.type === "keypress" ? (t = Cl(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Zv[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Tr,
        charCode: function(t) {
            return t.type === "keypress" ? Cl(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? Cl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , Jv = we(Fv)
      , Wv = y({}, Ol, {
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
      , xd = we(Wv)
      , $v = y({}, Ia, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Tr
    })
      , Iv = we($v)
      , tb = y({}, mi, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , eb = we(tb)
      , nb = y({}, Ol, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , ib = we(nb)
      , ab = y({}, mi, {
        newState: 0,
        oldState: 0
    })
      , sb = we(ab)
      , lb = [9, 13, 27, 32]
      , Ar = vn && "CompositionEvent"in window
      , es = null;
    vn && "documentMode"in document && (es = document.documentMode);
    var ob = vn && "TextEvent"in window && !es
      , Sd = vn && (!Ar || es && 8 < es && 11 >= es)
      , Td = " "
      , Ad = !1;
    function Ed(t, e) {
        switch (t) {
        case "keyup":
            return lb.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function wd(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var Ii = !1;
    function rb(t, e) {
        switch (t) {
        case "compositionend":
            return wd(e);
        case "keypress":
            return e.which !== 32 ? null : (Ad = !0,
            Td);
        case "textInput":
            return t = e.data,
            t === Td && Ad ? null : t;
        default:
            return null
        }
    }
    function ub(t, e) {
        if (Ii)
            return t === "compositionend" || !Ar && Ed(t, e) ? (t = gd(),
            Dl = vr = Ln = null,
            Ii = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length)
                    return e.char;
                if (e.which)
                    return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return Sd && e.locale !== "ko" ? null : e.data;
        default:
            return null
        }
    }
    var cb = {
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
    function Md(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!cb[t.type] : e === "textarea"
    }
    function Dd(t, e, n, s) {
        Wi ? $i ? $i.push(s) : $i = [s] : Wi = s,
        e = vo(e, "onChange"),
        0 < e.length && (n = new Rl("onChange","change",null,n,s),
        t.push({
            event: n,
            listeners: e
        }))
    }
    var ns = null
      , is = null;
    function fb(t) {
        op(t, 0)
    }
    function jl(t) {
        var e = Ja(t);
        if (rd(e))
            return t
    }
    function Cd(t, e) {
        if (t === "change")
            return e
    }
    var Nd = !1;
    if (vn) {
        var Er;
        if (vn) {
            var wr = "oninput"in document;
            if (!wr) {
                var Rd = document.createElement("div");
                Rd.setAttribute("oninput", "return;"),
                wr = typeof Rd.oninput == "function"
            }
            Er = wr
        } else
            Er = !1;
        Nd = Er && (!document.documentMode || 9 < document.documentMode)
    }
    function Od() {
        ns && (ns.detachEvent("onpropertychange", jd),
        is = ns = null)
    }
    function jd(t) {
        if (t.propertyName === "value" && jl(is)) {
            var e = [];
            Dd(e, is, t, pr(t)),
            pd(fb, e)
        }
    }
    function db(t, e, n) {
        t === "focusin" ? (Od(),
        ns = e,
        is = n,
        ns.attachEvent("onpropertychange", jd)) : t === "focusout" && Od()
    }
    function hb(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return jl(is)
    }
    function mb(t, e) {
        if (t === "click")
            return jl(e)
    }
    function pb(t, e) {
        if (t === "input" || t === "change")
            return jl(e)
    }
    function gb(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var Re = typeof Object.is == "function" ? Object.is : gb;
    function as(t, e) {
        if (Re(t, e))
            return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null)
            return !1;
        var n = Object.keys(t)
          , s = Object.keys(e);
        if (n.length !== s.length)
            return !1;
        for (s = 0; s < n.length; s++) {
            var r = n[s];
            if (!tt.call(e, r) || !Re(t[r], e[r]))
                return !1
        }
        return !0
    }
    function zd(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function Vd(t, e) {
        var n = zd(t);
        t = 0;
        for (var s; n; ) {
            if (n.nodeType === 3) {
                if (s = t + n.textContent.length,
                t <= e && s >= e)
                    return {
                        node: n,
                        offset: e - t
                    };
                t = s
            }
            t: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break t
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = zd(n)
        }
    }
    function _d(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? _d(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }
    function Ud(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = wl(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
                var n = typeof e.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n)
                t = e.contentWindow;
            else
                break;
            e = wl(t.document)
        }
        return e
    }
    function Mr(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    var yb = vn && "documentMode"in document && 11 >= document.documentMode
      , ta = null
      , Dr = null
      , ss = null
      , Cr = !1;
    function Bd(t, e, n) {
        var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Cr || ta == null || ta !== wl(s) || (s = ta,
        "selectionStart"in s && Mr(s) ? s = {
            start: s.selectionStart,
            end: s.selectionEnd
        } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(),
        s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset
        }),
        ss && as(ss, s) || (ss = s,
        s = vo(Dr, "onSelect"),
        0 < s.length && (e = new Rl("onSelect","select",null,e,n),
        t.push({
            event: e,
            listeners: s
        }),
        e.target = ta)))
    }
    function pi(t, e) {
        var n = {};
        return n[t.toLowerCase()] = e.toLowerCase(),
        n["Webkit" + t] = "webkit" + e,
        n["Moz" + t] = "moz" + e,
        n
    }
    var ea = {
        animationend: pi("Animation", "AnimationEnd"),
        animationiteration: pi("Animation", "AnimationIteration"),
        animationstart: pi("Animation", "AnimationStart"),
        transitionrun: pi("Transition", "TransitionRun"),
        transitionstart: pi("Transition", "TransitionStart"),
        transitioncancel: pi("Transition", "TransitionCancel"),
        transitionend: pi("Transition", "TransitionEnd")
    }
      , Nr = {}
      , Ld = {};
    vn && (Ld = document.createElement("div").style,
    "AnimationEvent"in window || (delete ea.animationend.animation,
    delete ea.animationiteration.animation,
    delete ea.animationstart.animation),
    "TransitionEvent"in window || delete ea.transitionend.transition);
    function gi(t) {
        if (Nr[t])
            return Nr[t];
        if (!ea[t])
            return t;
        var e = ea[t], n;
        for (n in e)
            if (e.hasOwnProperty(n) && n in Ld)
                return Nr[t] = e[n];
        return t
    }
    var kd = gi("animationend")
      , Hd = gi("animationiteration")
      , qd = gi("animationstart")
      , vb = gi("transitionrun")
      , bb = gi("transitionstart")
      , xb = gi("transitioncancel")
      , Gd = gi("transitionend")
      , Yd = new Map
      , Rr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Rr.push("scrollEnd");
    function $e(t, e) {
        Yd.set(t, e),
        hi(e, [t])
    }
    var Xd = new WeakMap;
    function He(t, e) {
        if (typeof t == "object" && t !== null) {
            var n = Xd.get(t);
            return n !== void 0 ? n : (e = {
                value: t,
                source: e,
                stack: ld(e)
            },
            Xd.set(t, e),
            e)
        }
        return {
            value: t,
            source: e,
            stack: ld(e)
        }
    }
    var qe = []
      , na = 0
      , Or = 0;
    function zl() {
        for (var t = na, e = Or = na = 0; e < t; ) {
            var n = qe[e];
            qe[e++] = null;
            var s = qe[e];
            qe[e++] = null;
            var r = qe[e];
            qe[e++] = null;
            var u = qe[e];
            if (qe[e++] = null,
            s !== null && r !== null) {
                var g = s.pending;
                g === null ? r.next = r : (r.next = g.next,
                g.next = r),
                s.pending = r
            }
            u !== 0 && Qd(n, r, u)
        }
    }
    function Vl(t, e, n, s) {
        qe[na++] = t,
        qe[na++] = e,
        qe[na++] = n,
        qe[na++] = s,
        Or |= s,
        t.lanes |= s,
        t = t.alternate,
        t !== null && (t.lanes |= s)
    }
    function jr(t, e, n, s) {
        return Vl(t, e, n, s),
        _l(t)
    }
    function ia(t, e) {
        return Vl(t, null, null, e),
        _l(t)
    }
    function Qd(t, e, n) {
        t.lanes |= n;
        var s = t.alternate;
        s !== null && (s.lanes |= n);
        for (var r = !1, u = t.return; u !== null; )
            u.childLanes |= n,
            s = u.alternate,
            s !== null && (s.childLanes |= n),
            u.tag === 22 && (t = u.stateNode,
            t === null || t._visibility & 1 || (r = !0)),
            t = u,
            u = u.return;
        return t.tag === 3 ? (u = t.stateNode,
        r && e !== null && (r = 31 - de(n),
        t = u.hiddenUpdates,
        s = t[r],
        s === null ? t[r] = [e] : s.push(e),
        e.lane = n | 536870912),
        u) : null
    }
    function _l(t) {
        if (50 < Rs)
            throw Rs = 0,
            Lu = null,
            Error(o(185));
        for (var e = t.return; e !== null; )
            t = e,
            e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var aa = {};
    function Sb(t, e, n, s) {
        this.tag = t,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = e,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = s,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Oe(t, e, n, s) {
        return new Sb(t,e,n,s)
    }
    function zr(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function bn(t, e) {
        var n = t.alternate;
        return n === null ? (n = Oe(t.tag, e, t.key, t.mode),
        n.elementType = t.elementType,
        n.type = t.type,
        n.stateNode = t.stateNode,
        n.alternate = t,
        t.alternate = n) : (n.pendingProps = e,
        n.type = t.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = t.flags & 65011712,
        n.childLanes = t.childLanes,
        n.lanes = t.lanes,
        n.child = t.child,
        n.memoizedProps = t.memoizedProps,
        n.memoizedState = t.memoizedState,
        n.updateQueue = t.updateQueue,
        e = t.dependencies,
        n.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        },
        n.sibling = t.sibling,
        n.index = t.index,
        n.ref = t.ref,
        n.refCleanup = t.refCleanup,
        n
    }
    function Zd(t, e) {
        t.flags &= 65011714;
        var n = t.alternate;
        return n === null ? (t.childLanes = 0,
        t.lanes = e,
        t.child = null,
        t.subtreeFlags = 0,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.updateQueue = null,
        t.dependencies = null,
        t.stateNode = null) : (t.childLanes = n.childLanes,
        t.lanes = n.lanes,
        t.child = n.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = n.memoizedProps,
        t.memoizedState = n.memoizedState,
        t.updateQueue = n.updateQueue,
        t.type = n.type,
        e = n.dependencies,
        t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }),
        t
    }
    function Ul(t, e, n, s, r, u) {
        var g = 0;
        if (s = t,
        typeof t == "function")
            zr(t) && (g = 1);
        else if (typeof t == "string")
            g = Ax(t, n, $.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            t: switch (t) {
            case I:
                return t = Oe(31, n, e, r),
                t.elementType = I,
                t.lanes = u,
                t;
            case E:
                return yi(n.children, r, u, e);
            case D:
                g = 8,
                r |= 24;
                break;
            case R:
                return t = Oe(12, n, e, r | 2),
                t.elementType = R,
                t.lanes = u,
                t;
            case Y:
                return t = Oe(13, n, e, r),
                t.elementType = Y,
                t.lanes = u,
                t;
            case K:
                return t = Oe(19, n, e, r),
                t.elementType = K,
                t.lanes = u,
                t;
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case N:
                    case _:
                        g = 10;
                        break t;
                    case j:
                        g = 9;
                        break t;
                    case F:
                        g = 11;
                        break t;
                    case J:
                        g = 14;
                        break t;
                    case L:
                        g = 16,
                        s = null;
                        break t
                    }
                g = 29,
                n = Error(o(130, t === null ? "null" : typeof t, "")),
                s = null
            }
        return e = Oe(g, n, e, r),
        e.elementType = t,
        e.type = s,
        e.lanes = u,
        e
    }
    function yi(t, e, n, s) {
        return t = Oe(7, t, s, e),
        t.lanes = n,
        t
    }
    function Vr(t, e, n) {
        return t = Oe(6, t, null, e),
        t.lanes = n,
        t
    }
    function _r(t, e, n) {
        return e = Oe(4, t.children !== null ? t.children : [], t.key, e),
        e.lanes = n,
        e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        e
    }
    var sa = []
      , la = 0
      , Bl = null
      , Ll = 0
      , Ge = []
      , Ye = 0
      , vi = null
      , xn = 1
      , Sn = "";
    function bi(t, e) {
        sa[la++] = Ll,
        sa[la++] = Bl,
        Bl = t,
        Ll = e
    }
    function Kd(t, e, n) {
        Ge[Ye++] = xn,
        Ge[Ye++] = Sn,
        Ge[Ye++] = vi,
        vi = t;
        var s = xn;
        t = Sn;
        var r = 32 - de(s) - 1;
        s &= ~(1 << r),
        n += 1;
        var u = 32 - de(e) + r;
        if (30 < u) {
            var g = r - r % 5;
            u = (s & (1 << g) - 1).toString(32),
            s >>= g,
            r -= g,
            xn = 1 << 32 - de(e) + r | n << r | s,
            Sn = u + t
        } else
            xn = 1 << u | n << r | s,
            Sn = t
    }
    function Ur(t) {
        t.return !== null && (bi(t, 1),
        Kd(t, 1, 0))
    }
    function Br(t) {
        for (; t === Bl; )
            Bl = sa[--la],
            sa[la] = null,
            Ll = sa[--la],
            sa[la] = null;
        for (; t === vi; )
            vi = Ge[--Ye],
            Ge[Ye] = null,
            Sn = Ge[--Ye],
            Ge[Ye] = null,
            xn = Ge[--Ye],
            Ge[Ye] = null
    }
    var Te = null
      , Qt = null
      , Ct = !1
      , xi = null
      , on = !1
      , Lr = Error(o(519));
    function Si(t) {
        var e = Error(o(418, ""));
        throw rs(He(e, t)),
        Lr
    }
    function Pd(t) {
        var e = t.stateNode
          , n = t.type
          , s = t.memoizedProps;
        switch (e[ve] = t,
        e[Ee] = s,
        n) {
        case "dialog":
            Et("cancel", e),
            Et("close", e);
            break;
        case "iframe":
        case "object":
        case "embed":
            Et("load", e);
            break;
        case "video":
        case "audio":
            for (n = 0; n < js.length; n++)
                Et(js[n], e);
            break;
        case "source":
            Et("error", e);
            break;
        case "img":
        case "image":
        case "link":
            Et("error", e),
            Et("load", e);
            break;
        case "details":
            Et("toggle", e);
            break;
        case "input":
            Et("invalid", e),
            ud(e, s.value, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name, !0),
            El(e);
            break;
        case "select":
            Et("invalid", e);
            break;
        case "textarea":
            Et("invalid", e),
            fd(e, s.value, s.defaultValue, s.children),
            El(e)
        }
        n = s.children,
        typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || s.suppressHydrationWarning === !0 || fp(e.textContent, n) ? (s.popover != null && (Et("beforetoggle", e),
        Et("toggle", e)),
        s.onScroll != null && Et("scroll", e),
        s.onScrollEnd != null && Et("scrollend", e),
        s.onClick != null && (e.onclick = bo),
        e = !0) : e = !1,
        e || Si(t)
    }
    function Fd(t) {
        for (Te = t.return; Te; )
            switch (Te.tag) {
            case 5:
            case 13:
                on = !1;
                return;
            case 27:
            case 3:
                on = !0;
                return;
            default:
                Te = Te.return
            }
    }
    function ls(t) {
        if (t !== Te)
            return !1;
        if (!Ct)
            return Fd(t),
            Ct = !0,
            !1;
        var e = t.tag, n;
        if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type,
        n = !(n !== "form" && n !== "button") || tc(t.type, t.memoizedProps)),
        n = !n),
        n && Qt && Si(t),
        Fd(t),
        e === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(o(317));
            t: {
                for (t = t.nextSibling,
                e = 0; t; ) {
                    if (t.nodeType === 8)
                        if (n = t.data,
                        n === "/$") {
                            if (e === 0) {
                                Qt = tn(t.nextSibling);
                                break t
                            }
                            e--
                        } else
                            n !== "$" && n !== "$!" && n !== "$?" || e++;
                    t = t.nextSibling
                }
                Qt = null
            }
        } else
            e === 27 ? (e = Qt,
            ti(t.type) ? (t = ac,
            ac = null,
            Qt = t) : Qt = e) : Qt = Te ? tn(t.stateNode.nextSibling) : null;
        return !0
    }
    function os() {
        Qt = Te = null,
        Ct = !1
    }
    function Jd() {
        var t = xi;
        return t !== null && (Ce === null ? Ce = t : Ce.push.apply(Ce, t),
        xi = null),
        t
    }
    function rs(t) {
        xi === null ? xi = [t] : xi.push(t)
    }
    var kr = G(null)
      , Ti = null
      , Tn = null;
    function kn(t, e, n) {
        P(kr, e._currentValue),
        e._currentValue = n
    }
    function An(t) {
        t._currentValue = kr.current,
        W(kr)
    }
    function Hr(t, e, n) {
        for (; t !== null; ) {
            var s = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e,
            s !== null && (s.childLanes |= e)) : s !== null && (s.childLanes & e) !== e && (s.childLanes |= e),
            t === n)
                break;
            t = t.return
        }
    }
    function qr(t, e, n, s) {
        var r = t.child;
        for (r !== null && (r.return = t); r !== null; ) {
            var u = r.dependencies;
            if (u !== null) {
                var g = r.child;
                u = u.firstContext;
                t: for (; u !== null; ) {
                    var v = u;
                    u = r;
                    for (var T = 0; T < e.length; T++)
                        if (v.context === e[T]) {
                            u.lanes |= n,
                            v = u.alternate,
                            v !== null && (v.lanes |= n),
                            Hr(u.return, n, t),
                            s || (g = null);
                            break t
                        }
                    u = v.next
                }
            } else if (r.tag === 18) {
                if (g = r.return,
                g === null)
                    throw Error(o(341));
                g.lanes |= n,
                u = g.alternate,
                u !== null && (u.lanes |= n),
                Hr(g, n, t),
                g = null
            } else
                g = r.child;
            if (g !== null)
                g.return = r;
            else
                for (g = r; g !== null; ) {
                    if (g === t) {
                        g = null;
                        break
                    }
                    if (r = g.sibling,
                    r !== null) {
                        r.return = g.return,
                        g = r;
                        break
                    }
                    g = g.return
                }
            r = g
        }
    }
    function us(t, e, n, s) {
        t = null;
        for (var r = e, u = !1; r !== null; ) {
            if (!u) {
                if ((r.flags & 524288) !== 0)
                    u = !0;
                else if ((r.flags & 262144) !== 0)
                    break
            }
            if (r.tag === 10) {
                var g = r.alternate;
                if (g === null)
                    throw Error(o(387));
                if (g = g.memoizedProps,
                g !== null) {
                    var v = r.type;
                    Re(r.pendingProps.value, g.value) || (t !== null ? t.push(v) : t = [v])
                }
            } else if (r === ht.current) {
                if (g = r.alternate,
                g === null)
                    throw Error(o(387));
                g.memoizedState.memoizedState !== r.memoizedState.memoizedState && (t !== null ? t.push(Ls) : t = [Ls])
            }
            r = r.return
        }
        t !== null && qr(e, t, n, s),
        e.flags |= 262144
    }
    function kl(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!Re(t.context._currentValue, t.memoizedValue))
                return !0;
            t = t.next
        }
        return !1
    }
    function Ai(t) {
        Ti = t,
        Tn = null,
        t = t.dependencies,
        t !== null && (t.firstContext = null)
    }
    function be(t) {
        return Wd(Ti, t)
    }
    function Hl(t, e) {
        return Ti === null && Ai(t),
        Wd(t, e)
    }
    function Wd(t, e) {
        var n = e._currentValue;
        if (e = {
            context: e,
            memoizedValue: n,
            next: null
        },
        Tn === null) {
            if (t === null)
                throw Error(o(308));
            Tn = e,
            t.dependencies = {
                lanes: 0,
                firstContext: e
            },
            t.flags |= 524288
        } else
            Tn = Tn.next = e;
        return n
    }
    var Tb = typeof AbortController < "u" ? AbortController : function() {
        var t = []
          , e = this.signal = {
            aborted: !1,
            addEventListener: function(n, s) {
                t.push(s)
            }
        };
        this.abort = function() {
            e.aborted = !0,
            t.forEach(function(n) {
                return n()
            })
        }
    }
      , Ab = i.unstable_scheduleCallback
      , Eb = i.unstable_NormalPriority
      , ie = {
        $$typeof: _,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Gr() {
        return {
            controller: new Tb,
            data: new Map,
            refCount: 0
        }
    }
    function cs(t) {
        t.refCount--,
        t.refCount === 0 && Ab(Eb, function() {
            t.controller.abort()
        })
    }
    var fs = null
      , Yr = 0
      , oa = 0
      , ra = null;
    function wb(t, e) {
        if (fs === null) {
            var n = fs = [];
            Yr = 0,
            oa = Qu(),
            ra = {
                status: "pending",
                value: void 0,
                then: function(s) {
                    n.push(s)
                }
            }
        }
        return Yr++,
        e.then($d, $d),
        e
    }
    function $d() {
        if (--Yr === 0 && fs !== null) {
            ra !== null && (ra.status = "fulfilled");
            var t = fs;
            fs = null,
            oa = 0,
            ra = null;
            for (var e = 0; e < t.length; e++)
                (0,
                t[e])()
        }
    }
    function Mb(t, e) {
        var n = []
          , s = {
            status: "pending",
            value: null,
            reason: null,
            then: function(r) {
                n.push(r)
            }
        };
        return t.then(function() {
            s.status = "fulfilled",
            s.value = e;
            for (var r = 0; r < n.length; r++)
                (0,
                n[r])(e)
        }, function(r) {
            for (s.status = "rejected",
            s.reason = r,
            r = 0; r < n.length; r++)
                (0,
                n[r])(void 0)
        }),
        s
    }
    var Id = B.S;
    B.S = function(t, e) {
        typeof e == "object" && e !== null && typeof e.then == "function" && wb(t, e),
        Id !== null && Id(t, e)
    }
    ;
    var Ei = G(null);
    function Xr() {
        var t = Ei.current;
        return t !== null ? t : Ut.pooledCache
    }
    function ql(t, e) {
        e === null ? P(Ei, Ei.current) : P(Ei, e.pool)
    }
    function th() {
        var t = Xr();
        return t === null ? null : {
            parent: ie._currentValue,
            pool: t
        }
    }
    var ds = Error(o(460))
      , eh = Error(o(474))
      , Gl = Error(o(542))
      , Qr = {
        then: function() {}
    };
    function nh(t) {
        return t = t.status,
        t === "fulfilled" || t === "rejected"
    }
    function Yl() {}
    function ih(t, e, n) {
        switch (n = t[n],
        n === void 0 ? t.push(e) : n !== e && (e.then(Yl, Yl),
        e = n),
        e.status) {
        case "fulfilled":
            return e.value;
        case "rejected":
            throw t = e.reason,
            sh(t),
            t;
        default:
            if (typeof e.status == "string")
                e.then(Yl, Yl);
            else {
                if (t = Ut,
                t !== null && 100 < t.shellSuspendCounter)
                    throw Error(o(482));
                t = e,
                t.status = "pending",
                t.then(function(s) {
                    if (e.status === "pending") {
                        var r = e;
                        r.status = "fulfilled",
                        r.value = s
                    }
                }, function(s) {
                    if (e.status === "pending") {
                        var r = e;
                        r.status = "rejected",
                        r.reason = s
                    }
                })
            }
            switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason,
                sh(t),
                t
            }
            throw hs = e,
            ds
        }
    }
    var hs = null;
    function ah() {
        if (hs === null)
            throw Error(o(459));
        var t = hs;
        return hs = null,
        t
    }
    function sh(t) {
        if (t === ds || t === Gl)
            throw Error(o(483))
    }
    var Hn = !1;
    function Zr(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
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
    function Kr(t, e) {
        t = t.updateQueue,
        e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }
    function qn(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Gn(t, e, n) {
        var s = t.updateQueue;
        if (s === null)
            return null;
        if (s = s.shared,
        (Rt & 2) !== 0) {
            var r = s.pending;
            return r === null ? e.next = e : (e.next = r.next,
            r.next = e),
            s.pending = e,
            e = _l(t),
            Qd(t, null, n),
            e
        }
        return Vl(t, s, e, n),
        _l(t)
    }
    function ms(t, e, n) {
        if (e = e.updateQueue,
        e !== null && (e = e.shared,
        (n & 4194048) !== 0)) {
            var s = e.lanes;
            s &= t.pendingLanes,
            n |= s,
            e.lanes = n,
            Ka(t, n)
        }
    }
    function Pr(t, e) {
        var n = t.updateQueue
          , s = t.alternate;
        if (s !== null && (s = s.updateQueue,
        n === s)) {
            var r = null
              , u = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var g = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? r = u = g : u = u.next = g,
                    n = n.next
                } while (n !== null);
                u === null ? r = u = e : u = u.next = e
            } else
                r = u = e;
            n = {
                baseState: s.baseState,
                firstBaseUpdate: r,
                lastBaseUpdate: u,
                shared: s.shared,
                callbacks: s.callbacks
            },
            t.updateQueue = n;
            return
        }
        t = n.lastBaseUpdate,
        t === null ? n.firstBaseUpdate = e : t.next = e,
        n.lastBaseUpdate = e
    }
    var Fr = !1;
    function ps() {
        if (Fr) {
            var t = ra;
            if (t !== null)
                throw t
        }
    }
    function gs(t, e, n, s) {
        Fr = !1;
        var r = t.updateQueue;
        Hn = !1;
        var u = r.firstBaseUpdate
          , g = r.lastBaseUpdate
          , v = r.shared.pending;
        if (v !== null) {
            r.shared.pending = null;
            var T = v
              , z = T.next;
            T.next = null,
            g === null ? u = z : g.next = z,
            g = T;
            var q = t.alternate;
            q !== null && (q = q.updateQueue,
            v = q.lastBaseUpdate,
            v !== g && (v === null ? q.firstBaseUpdate = z : v.next = z,
            q.lastBaseUpdate = T))
        }
        if (u !== null) {
            var Q = r.baseState;
            g = 0,
            q = z = T = null,
            v = u;
            do {
                var V = v.lane & -536870913
                  , U = V !== v.lane;
                if (U ? (wt & V) === V : (s & V) === V) {
                    V !== 0 && V === oa && (Fr = !0),
                    q !== null && (q = q.next = {
                        lane: 0,
                        tag: v.tag,
                        payload: v.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var ft = t
                          , lt = v;
                        V = e;
                        var Vt = n;
                        switch (lt.tag) {
                        case 1:
                            if (ft = lt.payload,
                            typeof ft == "function") {
                                Q = ft.call(Vt, Q, V);
                                break t
                            }
                            Q = ft;
                            break t;
                        case 3:
                            ft.flags = ft.flags & -65537 | 128;
                        case 0:
                            if (ft = lt.payload,
                            V = typeof ft == "function" ? ft.call(Vt, Q, V) : ft,
                            V == null)
                                break t;
                            Q = y({}, Q, V);
                            break t;
                        case 2:
                            Hn = !0
                        }
                    }
                    V = v.callback,
                    V !== null && (t.flags |= 64,
                    U && (t.flags |= 8192),
                    U = r.callbacks,
                    U === null ? r.callbacks = [V] : U.push(V))
                } else
                    U = {
                        lane: V,
                        tag: v.tag,
                        payload: v.payload,
                        callback: v.callback,
                        next: null
                    },
                    q === null ? (z = q = U,
                    T = Q) : q = q.next = U,
                    g |= V;
                if (v = v.next,
                v === null) {
                    if (v = r.shared.pending,
                    v === null)
                        break;
                    U = v,
                    v = U.next,
                    U.next = null,
                    r.lastBaseUpdate = U,
                    r.shared.pending = null
                }
            } while (!0);
            q === null && (T = Q),
            r.baseState = T,
            r.firstBaseUpdate = z,
            r.lastBaseUpdate = q,
            u === null && (r.shared.lanes = 0),
            Jn |= g,
            t.lanes = g,
            t.memoizedState = Q
        }
    }
    function lh(t, e) {
        if (typeof t != "function")
            throw Error(o(191, t));
        t.call(e)
    }
    function oh(t, e) {
        var n = t.callbacks;
        if (n !== null)
            for (t.callbacks = null,
            t = 0; t < n.length; t++)
                lh(n[t], e)
    }
    var ua = G(null)
      , Xl = G(0);
    function rh(t, e) {
        t = Rn,
        P(Xl, t),
        P(ua, e),
        Rn = t | e.baseLanes
    }
    function Jr() {
        P(Xl, Rn),
        P(ua, ua.current)
    }
    function Wr() {
        Rn = Xl.current,
        W(ua),
        W(Xl)
    }
    var Yn = 0
      , xt = null
      , jt = null
      , It = null
      , Ql = !1
      , ca = !1
      , wi = !1
      , Zl = 0
      , ys = 0
      , fa = null
      , Db = 0;
    function Ft() {
        throw Error(o(321))
    }
    function $r(t, e) {
        if (e === null)
            return !1;
        for (var n = 0; n < e.length && n < t.length; n++)
            if (!Re(t[n], e[n]))
                return !1;
        return !0
    }
    function Ir(t, e, n, s, r, u) {
        return Yn = u,
        xt = e,
        e.memoizedState = null,
        e.updateQueue = null,
        e.lanes = 0,
        B.H = t === null || t.memoizedState === null ? Qh : Zh,
        wi = !1,
        u = n(s, r),
        wi = !1,
        ca && (u = ch(e, n, s, r)),
        uh(t),
        u
    }
    function uh(t) {
        B.H = $l;
        var e = jt !== null && jt.next !== null;
        if (Yn = 0,
        It = jt = xt = null,
        Ql = !1,
        ys = 0,
        fa = null,
        e)
            throw Error(o(300));
        t === null || oe || (t = t.dependencies,
        t !== null && kl(t) && (oe = !0))
    }
    function ch(t, e, n, s) {
        xt = t;
        var r = 0;
        do {
            if (ca && (fa = null),
            ys = 0,
            ca = !1,
            25 <= r)
                throw Error(o(301));
            if (r += 1,
            It = jt = null,
            t.updateQueue != null) {
                var u = t.updateQueue;
                u.lastEffect = null,
                u.events = null,
                u.stores = null,
                u.memoCache != null && (u.memoCache.index = 0)
            }
            B.H = Vb,
            u = e(n, s)
        } while (ca);
        return u
    }
    function Cb() {
        var t = B.H
          , e = t.useState()[0];
        return e = typeof e.then == "function" ? vs(e) : e,
        t = t.useState()[0],
        (jt !== null ? jt.memoizedState : null) !== t && (xt.flags |= 1024),
        e
    }
    function tu() {
        var t = Zl !== 0;
        return Zl = 0,
        t
    }
    function eu(t, e, n) {
        e.updateQueue = t.updateQueue,
        e.flags &= -2053,
        t.lanes &= ~n
    }
    function nu(t) {
        if (Ql) {
            for (t = t.memoizedState; t !== null; ) {
                var e = t.queue;
                e !== null && (e.pending = null),
                t = t.next
            }
            Ql = !1
        }
        Yn = 0,
        It = jt = xt = null,
        ca = !1,
        ys = Zl = 0,
        fa = null
    }
    function Me() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return It === null ? xt.memoizedState = It = t : It = It.next = t,
        It
    }
    function te() {
        if (jt === null) {
            var t = xt.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = jt.next;
        var e = It === null ? xt.memoizedState : It.next;
        if (e !== null)
            It = e,
            jt = t;
        else {
            if (t === null)
                throw xt.alternate === null ? Error(o(467)) : Error(o(310));
            jt = t,
            t = {
                memoizedState: jt.memoizedState,
                baseState: jt.baseState,
                baseQueue: jt.baseQueue,
                queue: jt.queue,
                next: null
            },
            It === null ? xt.memoizedState = It = t : It = It.next = t
        }
        return It
    }
    function iu() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function vs(t) {
        var e = ys;
        return ys += 1,
        fa === null && (fa = []),
        t = ih(fa, t, e),
        e = xt,
        (It === null ? e.memoizedState : It.next) === null && (e = e.alternate,
        B.H = e === null || e.memoizedState === null ? Qh : Zh),
        t
    }
    function Kl(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function")
                return vs(t);
            if (t.$$typeof === _)
                return be(t)
        }
        throw Error(o(438, String(t)))
    }
    function au(t) {
        var e = null
          , n = xt.updateQueue;
        if (n !== null && (e = n.memoCache),
        e == null) {
            var s = xt.alternate;
            s !== null && (s = s.updateQueue,
            s !== null && (s = s.memoCache,
            s != null && (e = {
                data: s.data.map(function(r) {
                    return r.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
            data: [],
            index: 0
        }),
        n === null && (n = iu(),
        xt.updateQueue = n),
        n.memoCache = e,
        n = e.data[e.index],
        n === void 0)
            for (n = e.data[e.index] = Array(t),
            s = 0; s < t; s++)
                n[s] = ct;
        return e.index++,
        n
    }
    function En(t, e) {
        return typeof e == "function" ? e(t) : e
    }
    function Pl(t) {
        var e = te();
        return su(e, jt, t)
    }
    function su(t, e, n) {
        var s = t.queue;
        if (s === null)
            throw Error(o(311));
        s.lastRenderedReducer = n;
        var r = t.baseQueue
          , u = s.pending;
        if (u !== null) {
            if (r !== null) {
                var g = r.next;
                r.next = u.next,
                u.next = g
            }
            e.baseQueue = r = u,
            s.pending = null
        }
        if (u = t.baseState,
        r === null)
            t.memoizedState = u;
        else {
            e = r.next;
            var v = g = null
              , T = null
              , z = e
              , q = !1;
            do {
                var Q = z.lane & -536870913;
                if (Q !== z.lane ? (wt & Q) === Q : (Yn & Q) === Q) {
                    var V = z.revertLane;
                    if (V === 0)
                        T !== null && (T = T.next = {
                            lane: 0,
                            revertLane: 0,
                            action: z.action,
                            hasEagerState: z.hasEagerState,
                            eagerState: z.eagerState,
                            next: null
                        }),
                        Q === oa && (q = !0);
                    else if ((Yn & V) === V) {
                        z = z.next,
                        V === oa && (q = !0);
                        continue
                    } else
                        Q = {
                            lane: 0,
                            revertLane: z.revertLane,
                            action: z.action,
                            hasEagerState: z.hasEagerState,
                            eagerState: z.eagerState,
                            next: null
                        },
                        T === null ? (v = T = Q,
                        g = u) : T = T.next = Q,
                        xt.lanes |= V,
                        Jn |= V;
                    Q = z.action,
                    wi && n(u, Q),
                    u = z.hasEagerState ? z.eagerState : n(u, Q)
                } else
                    V = {
                        lane: Q,
                        revertLane: z.revertLane,
                        action: z.action,
                        hasEagerState: z.hasEagerState,
                        eagerState: z.eagerState,
                        next: null
                    },
                    T === null ? (v = T = V,
                    g = u) : T = T.next = V,
                    xt.lanes |= Q,
                    Jn |= Q;
                z = z.next
            } while (z !== null && z !== e);
            if (T === null ? g = u : T.next = v,
            !Re(u, t.memoizedState) && (oe = !0,
            q && (n = ra,
            n !== null)))
                throw n;
            t.memoizedState = u,
            t.baseState = g,
            t.baseQueue = T,
            s.lastRenderedState = u
        }
        return r === null && (s.lanes = 0),
        [t.memoizedState, s.dispatch]
    }
    function lu(t) {
        var e = te()
          , n = e.queue;
        if (n === null)
            throw Error(o(311));
        n.lastRenderedReducer = t;
        var s = n.dispatch
          , r = n.pending
          , u = e.memoizedState;
        if (r !== null) {
            n.pending = null;
            var g = r = r.next;
            do
                u = t(u, g.action),
                g = g.next;
            while (g !== r);
            Re(u, e.memoizedState) || (oe = !0),
            e.memoizedState = u,
            e.baseQueue === null && (e.baseState = u),
            n.lastRenderedState = u
        }
        return [u, s]
    }
    function fh(t, e, n) {
        var s = xt
          , r = te()
          , u = Ct;
        if (u) {
            if (n === void 0)
                throw Error(o(407));
            n = n()
        } else
            n = e();
        var g = !Re((jt || r).memoizedState, n);
        g && (r.memoizedState = n,
        oe = !0),
        r = r.queue;
        var v = mh.bind(null, s, r, t);
        if (bs(2048, 8, v, [t]),
        r.getSnapshot !== e || g || It !== null && It.memoizedState.tag & 1) {
            if (s.flags |= 2048,
            da(9, Fl(), hh.bind(null, s, r, n, e), null),
            Ut === null)
                throw Error(o(349));
            u || (Yn & 124) !== 0 || dh(s, e, n)
        }
        return n
    }
    function dh(t, e, n) {
        t.flags |= 16384,
        t = {
            getSnapshot: e,
            value: n
        },
        e = xt.updateQueue,
        e === null ? (e = iu(),
        xt.updateQueue = e,
        e.stores = [t]) : (n = e.stores,
        n === null ? e.stores = [t] : n.push(t))
    }
    function hh(t, e, n, s) {
        e.value = n,
        e.getSnapshot = s,
        ph(e) && gh(t)
    }
    function mh(t, e, n) {
        return n(function() {
            ph(e) && gh(t)
        })
    }
    function ph(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var n = e();
            return !Re(t, n)
        } catch {
            return !0
        }
    }
    function gh(t) {
        var e = ia(t, 2);
        e !== null && Ue(e, t, 2)
    }
    function ou(t) {
        var e = Me();
        if (typeof t == "function") {
            var n = t;
            if (t = n(),
            wi) {
                ln(!0);
                try {
                    n()
                } finally {
                    ln(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t,
        e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: En,
            lastRenderedState: t
        },
        e
    }
    function yh(t, e, n, s) {
        return t.baseState = n,
        su(t, jt, typeof s == "function" ? s : En)
    }
    function Nb(t, e, n, s, r) {
        if (Wl(t))
            throw Error(o(485));
        if (t = e.action,
        t !== null) {
            var u = {
                payload: r,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(g) {
                    u.listeners.push(g)
                }
            };
            B.T !== null ? n(!0) : u.isTransition = !1,
            s(u),
            n = e.pending,
            n === null ? (u.next = e.pending = u,
            vh(e, u)) : (u.next = n.next,
            e.pending = n.next = u)
        }
    }
    function vh(t, e) {
        var n = e.action
          , s = e.payload
          , r = t.state;
        if (e.isTransition) {
            var u = B.T
              , g = {};
            B.T = g;
            try {
                var v = n(r, s)
                  , T = B.S;
                T !== null && T(g, v),
                bh(t, e, v)
            } catch (z) {
                ru(t, e, z)
            } finally {
                B.T = u
            }
        } else
            try {
                u = n(r, s),
                bh(t, e, u)
            } catch (z) {
                ru(t, e, z)
            }
    }
    function bh(t, e, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(s) {
            xh(t, e, s)
        }, function(s) {
            return ru(t, e, s)
        }) : xh(t, e, n)
    }
    function xh(t, e, n) {
        e.status = "fulfilled",
        e.value = n,
        Sh(e),
        t.state = n,
        e = t.pending,
        e !== null && (n = e.next,
        n === e ? t.pending = null : (n = n.next,
        e.next = n,
        vh(t, n)))
    }
    function ru(t, e, n) {
        var s = t.pending;
        if (t.pending = null,
        s !== null) {
            s = s.next;
            do
                e.status = "rejected",
                e.reason = n,
                Sh(e),
                e = e.next;
            while (e !== s)
        }
        t.action = null
    }
    function Sh(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)
            (0,
            t[e])()
    }
    function Th(t, e) {
        return e
    }
    function Ah(t, e) {
        if (Ct) {
            var n = Ut.formState;
            if (n !== null) {
                t: {
                    var s = xt;
                    if (Ct) {
                        if (Qt) {
                            e: {
                                for (var r = Qt, u = on; r.nodeType !== 8; ) {
                                    if (!u) {
                                        r = null;
                                        break e
                                    }
                                    if (r = tn(r.nextSibling),
                                    r === null) {
                                        r = null;
                                        break e
                                    }
                                }
                                u = r.data,
                                r = u === "F!" || u === "F" ? r : null
                            }
                            if (r) {
                                Qt = tn(r.nextSibling),
                                s = r.data === "F!";
                                break t
                            }
                        }
                        Si(s)
                    }
                    s = !1
                }
                s && (e = n[0])
            }
        }
        return n = Me(),
        n.memoizedState = n.baseState = e,
        s = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Th,
            lastRenderedState: e
        },
        n.queue = s,
        n = Gh.bind(null, xt, s),
        s.dispatch = n,
        s = ou(!1),
        u = hu.bind(null, xt, !1, s.queue),
        s = Me(),
        r = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        },
        s.queue = r,
        n = Nb.bind(null, xt, r, u, n),
        r.dispatch = n,
        s.memoizedState = t,
        [e, n, !1]
    }
    function Eh(t) {
        var e = te();
        return wh(e, jt, t)
    }
    function wh(t, e, n) {
        if (e = su(t, e, Th)[0],
        t = Pl(En)[0],
        typeof e == "object" && e !== null && typeof e.then == "function")
            try {
                var s = vs(e)
            } catch (g) {
                throw g === ds ? Gl : g
            }
        else
            s = e;
        e = te();
        var r = e.queue
          , u = r.dispatch;
        return n !== e.memoizedState && (xt.flags |= 2048,
        da(9, Fl(), Rb.bind(null, r, n), null)),
        [s, u, t]
    }
    function Rb(t, e) {
        t.action = e
    }
    function Mh(t) {
        var e = te()
          , n = jt;
        if (n !== null)
            return wh(e, n, t);
        te(),
        e = e.memoizedState,
        n = te();
        var s = n.queue.dispatch;
        return n.memoizedState = t,
        [e, s, !1]
    }
    function da(t, e, n, s) {
        return t = {
            tag: t,
            create: n,
            deps: s,
            inst: e,
            next: null
        },
        e = xt.updateQueue,
        e === null && (e = iu(),
        xt.updateQueue = e),
        n = e.lastEffect,
        n === null ? e.lastEffect = t.next = t : (s = n.next,
        n.next = t,
        t.next = s,
        e.lastEffect = t),
        t
    }
    function Fl() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }
    function Dh() {
        return te().memoizedState
    }
    function Jl(t, e, n, s) {
        var r = Me();
        s = s === void 0 ? null : s,
        xt.flags |= t,
        r.memoizedState = da(1 | e, Fl(), n, s)
    }
    function bs(t, e, n, s) {
        var r = te();
        s = s === void 0 ? null : s;
        var u = r.memoizedState.inst;
        jt !== null && s !== null && $r(s, jt.memoizedState.deps) ? r.memoizedState = da(e, u, n, s) : (xt.flags |= t,
        r.memoizedState = da(1 | e, u, n, s))
    }
    function Ch(t, e) {
        Jl(8390656, 8, t, e)
    }
    function Nh(t, e) {
        bs(2048, 8, t, e)
    }
    function Rh(t, e) {
        return bs(4, 2, t, e)
    }
    function Oh(t, e) {
        return bs(4, 4, t, e)
    }
    function jh(t, e) {
        if (typeof e == "function") {
            t = t();
            var n = e(t);
            return function() {
                typeof n == "function" ? n() : e(null)
            }
        }
        if (e != null)
            return t = t(),
            e.current = t,
            function() {
                e.current = null
            }
    }
    function zh(t, e, n) {
        n = n != null ? n.concat([t]) : null,
        bs(4, 4, jh.bind(null, e, t), n)
    }
    function uu() {}
    function Vh(t, e) {
        var n = te();
        e = e === void 0 ? null : e;
        var s = n.memoizedState;
        return e !== null && $r(e, s[1]) ? s[0] : (n.memoizedState = [t, e],
        t)
    }
    function _h(t, e) {
        var n = te();
        e = e === void 0 ? null : e;
        var s = n.memoizedState;
        if (e !== null && $r(e, s[1]))
            return s[0];
        if (s = t(),
        wi) {
            ln(!0);
            try {
                t()
            } finally {
                ln(!1)
            }
        }
        return n.memoizedState = [s, e],
        s
    }
    function cu(t, e, n) {
        return n === void 0 || (Yn & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = n,
        t = Lm(),
        xt.lanes |= t,
        Jn |= t,
        n)
    }
    function Uh(t, e, n, s) {
        return Re(n, e) ? n : ua.current !== null ? (t = cu(t, n, s),
        Re(t, e) || (oe = !0),
        t) : (Yn & 42) === 0 ? (oe = !0,
        t.memoizedState = n) : (t = Lm(),
        xt.lanes |= t,
        Jn |= t,
        e)
    }
    function Bh(t, e, n, s, r) {
        var u = Z.p;
        Z.p = u !== 0 && 8 > u ? u : 8;
        var g = B.T
          , v = {};
        B.T = v,
        hu(t, !1, e, n);
        try {
            var T = r()
              , z = B.S;
            if (z !== null && z(v, T),
            T !== null && typeof T == "object" && typeof T.then == "function") {
                var q = Mb(T, s);
                xs(t, e, q, _e(t))
            } else
                xs(t, e, s, _e(t))
        } catch (Q) {
            xs(t, e, {
                then: function() {},
                status: "rejected",
                reason: Q
            }, _e())
        } finally {
            Z.p = u,
            B.T = g
        }
    }
    function Ob() {}
    function fu(t, e, n, s) {
        if (t.tag !== 5)
            throw Error(o(476));
        var r = Lh(t).queue;
        Bh(t, r, e, H, n === null ? Ob : function() {
            return kh(t),
            n(s)
        }
        )
    }
    function Lh(t) {
        var e = t.memoizedState;
        if (e !== null)
            return e;
        e = {
            memoizedState: H,
            baseState: H,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: En,
                lastRenderedState: H
            },
            next: null
        };
        var n = {};
        return e.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: En,
                lastRenderedState: n
            },
            next: null
        },
        t.memoizedState = e,
        t = t.alternate,
        t !== null && (t.memoizedState = e),
        e
    }
    function kh(t) {
        var e = Lh(t).next.queue;
        xs(t, e, {}, _e())
    }
    function du() {
        return be(Ls)
    }
    function Hh() {
        return te().memoizedState
    }
    function qh() {
        return te().memoizedState
    }
    function jb(t) {
        for (var e = t.return; e !== null; ) {
            switch (e.tag) {
            case 24:
            case 3:
                var n = _e();
                t = qn(n);
                var s = Gn(e, t, n);
                s !== null && (Ue(s, e, n),
                ms(s, e, n)),
                e = {
                    cache: Gr()
                },
                t.payload = e;
                return
            }
            e = e.return
        }
    }
    function zb(t, e, n) {
        var s = _e();
        n = {
            lane: s,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Wl(t) ? Yh(e, n) : (n = jr(t, e, n, s),
        n !== null && (Ue(n, t, s),
        Xh(n, e, s)))
    }
    function Gh(t, e, n) {
        var s = _e();
        xs(t, e, n, s)
    }
    function xs(t, e, n, s) {
        var r = {
            lane: s,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Wl(t))
            Yh(e, r);
        else {
            var u = t.alternate;
            if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer,
            u !== null))
                try {
                    var g = e.lastRenderedState
                      , v = u(g, n);
                    if (r.hasEagerState = !0,
                    r.eagerState = v,
                    Re(v, g))
                        return Vl(t, e, r, 0),
                        Ut === null && zl(),
                        !1
                } catch {} finally {}
            if (n = jr(t, e, r, s),
            n !== null)
                return Ue(n, t, s),
                Xh(n, e, s),
                !0
        }
        return !1
    }
    function hu(t, e, n, s) {
        if (s = {
            lane: 2,
            revertLane: Qu(),
            action: s,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Wl(t)) {
            if (e)
                throw Error(o(479))
        } else
            e = jr(t, n, s, 2),
            e !== null && Ue(e, t, 2)
    }
    function Wl(t) {
        var e = t.alternate;
        return t === xt || e !== null && e === xt
    }
    function Yh(t, e) {
        ca = Ql = !0;
        var n = t.pending;
        n === null ? e.next = e : (e.next = n.next,
        n.next = e),
        t.pending = e
    }
    function Xh(t, e, n) {
        if ((n & 4194048) !== 0) {
            var s = e.lanes;
            s &= t.pendingLanes,
            n |= s,
            e.lanes = n,
            Ka(t, n)
        }
    }
    var $l = {
        readContext: be,
        use: Kl,
        useCallback: Ft,
        useContext: Ft,
        useEffect: Ft,
        useImperativeHandle: Ft,
        useLayoutEffect: Ft,
        useInsertionEffect: Ft,
        useMemo: Ft,
        useReducer: Ft,
        useRef: Ft,
        useState: Ft,
        useDebugValue: Ft,
        useDeferredValue: Ft,
        useTransition: Ft,
        useSyncExternalStore: Ft,
        useId: Ft,
        useHostTransitionStatus: Ft,
        useFormState: Ft,
        useActionState: Ft,
        useOptimistic: Ft,
        useMemoCache: Ft,
        useCacheRefresh: Ft
    }
      , Qh = {
        readContext: be,
        use: Kl,
        useCallback: function(t, e) {
            return Me().memoizedState = [t, e === void 0 ? null : e],
            t
        },
        useContext: be,
        useEffect: Ch,
        useImperativeHandle: function(t, e, n) {
            n = n != null ? n.concat([t]) : null,
            Jl(4194308, 4, jh.bind(null, e, t), n)
        },
        useLayoutEffect: function(t, e) {
            return Jl(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            Jl(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var n = Me();
            e = e === void 0 ? null : e;
            var s = t();
            if (wi) {
                ln(!0);
                try {
                    t()
                } finally {
                    ln(!1)
                }
            }
            return n.memoizedState = [s, e],
            s
        },
        useReducer: function(t, e, n) {
            var s = Me();
            if (n !== void 0) {
                var r = n(e);
                if (wi) {
                    ln(!0);
                    try {
                        n(e)
                    } finally {
                        ln(!1)
                    }
                }
            } else
                r = e;
            return s.memoizedState = s.baseState = r,
            t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: r
            },
            s.queue = t,
            t = t.dispatch = zb.bind(null, xt, t),
            [s.memoizedState, t]
        },
        useRef: function(t) {
            var e = Me();
            return t = {
                current: t
            },
            e.memoizedState = t
        },
        useState: function(t) {
            t = ou(t);
            var e = t.queue
              , n = Gh.bind(null, xt, e);
            return e.dispatch = n,
            [t.memoizedState, n]
        },
        useDebugValue: uu,
        useDeferredValue: function(t, e) {
            var n = Me();
            return cu(n, t, e)
        },
        useTransition: function() {
            var t = ou(!1);
            return t = Bh.bind(null, xt, t.queue, !0, !1),
            Me().memoizedState = t,
            [!1, t]
        },
        useSyncExternalStore: function(t, e, n) {
            var s = xt
              , r = Me();
            if (Ct) {
                if (n === void 0)
                    throw Error(o(407));
                n = n()
            } else {
                if (n = e(),
                Ut === null)
                    throw Error(o(349));
                (wt & 124) !== 0 || dh(s, e, n)
            }
            r.memoizedState = n;
            var u = {
                value: n,
                getSnapshot: e
            };
            return r.queue = u,
            Ch(mh.bind(null, s, u, t), [t]),
            s.flags |= 2048,
            da(9, Fl(), hh.bind(null, s, u, n, e), null),
            n
        },
        useId: function() {
            var t = Me()
              , e = Ut.identifierPrefix;
            if (Ct) {
                var n = Sn
                  , s = xn;
                n = (s & ~(1 << 32 - de(s) - 1)).toString(32) + n,
                e = "«" + e + "R" + n,
                n = Zl++,
                0 < n && (e += "H" + n.toString(32)),
                e += "»"
            } else
                n = Db++,
                e = "«" + e + "r" + n.toString(32) + "»";
            return t.memoizedState = e
        },
        useHostTransitionStatus: du,
        useFormState: Ah,
        useActionState: Ah,
        useOptimistic: function(t) {
            var e = Me();
            e.memoizedState = e.baseState = t;
            var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return e.queue = n,
            e = hu.bind(null, xt, !0, n),
            n.dispatch = e,
            [t, e]
        },
        useMemoCache: au,
        useCacheRefresh: function() {
            return Me().memoizedState = jb.bind(null, xt)
        }
    }
      , Zh = {
        readContext: be,
        use: Kl,
        useCallback: Vh,
        useContext: be,
        useEffect: Nh,
        useImperativeHandle: zh,
        useInsertionEffect: Rh,
        useLayoutEffect: Oh,
        useMemo: _h,
        useReducer: Pl,
        useRef: Dh,
        useState: function() {
            return Pl(En)
        },
        useDebugValue: uu,
        useDeferredValue: function(t, e) {
            var n = te();
            return Uh(n, jt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = Pl(En)[0]
              , e = te().memoizedState;
            return [typeof t == "boolean" ? t : vs(t), e]
        },
        useSyncExternalStore: fh,
        useId: Hh,
        useHostTransitionStatus: du,
        useFormState: Eh,
        useActionState: Eh,
        useOptimistic: function(t, e) {
            var n = te();
            return yh(n, jt, t, e)
        },
        useMemoCache: au,
        useCacheRefresh: qh
    }
      , Vb = {
        readContext: be,
        use: Kl,
        useCallback: Vh,
        useContext: be,
        useEffect: Nh,
        useImperativeHandle: zh,
        useInsertionEffect: Rh,
        useLayoutEffect: Oh,
        useMemo: _h,
        useReducer: lu,
        useRef: Dh,
        useState: function() {
            return lu(En)
        },
        useDebugValue: uu,
        useDeferredValue: function(t, e) {
            var n = te();
            return jt === null ? cu(n, t, e) : Uh(n, jt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = lu(En)[0]
              , e = te().memoizedState;
            return [typeof t == "boolean" ? t : vs(t), e]
        },
        useSyncExternalStore: fh,
        useId: Hh,
        useHostTransitionStatus: du,
        useFormState: Mh,
        useActionState: Mh,
        useOptimistic: function(t, e) {
            var n = te();
            return jt !== null ? yh(n, jt, t, e) : (n.baseState = t,
            [t, n.queue.dispatch])
        },
        useMemoCache: au,
        useCacheRefresh: qh
    }
      , ha = null
      , Ss = 0;
    function Il(t) {
        var e = Ss;
        return Ss += 1,
        ha === null && (ha = []),
        ih(ha, t, e)
    }
    function Ts(t, e) {
        e = e.props.ref,
        t.ref = e !== void 0 ? e : null
    }
    function to(t, e) {
        throw e.$$typeof === b ? Error(o(525)) : (t = Object.prototype.toString.call(e),
        Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }
    function Kh(t) {
        var e = t._init;
        return e(t._payload)
    }
    function Ph(t) {
        function e(C, w) {
            if (t) {
                var O = C.deletions;
                O === null ? (C.deletions = [w],
                C.flags |= 16) : O.push(w)
            }
        }
        function n(C, w) {
            if (!t)
                return null;
            for (; w !== null; )
                e(C, w),
                w = w.sibling;
            return null
        }
        function s(C) {
            for (var w = new Map; C !== null; )
                C.key !== null ? w.set(C.key, C) : w.set(C.index, C),
                C = C.sibling;
            return w
        }
        function r(C, w) {
            return C = bn(C, w),
            C.index = 0,
            C.sibling = null,
            C
        }
        function u(C, w, O) {
            return C.index = O,
            t ? (O = C.alternate,
            O !== null ? (O = O.index,
            O < w ? (C.flags |= 67108866,
            w) : O) : (C.flags |= 67108866,
            w)) : (C.flags |= 1048576,
            w)
        }
        function g(C) {
            return t && C.alternate === null && (C.flags |= 67108866),
            C
        }
        function v(C, w, O, X) {
            return w === null || w.tag !== 6 ? (w = Vr(O, C.mode, X),
            w.return = C,
            w) : (w = r(w, O),
            w.return = C,
            w)
        }
        function T(C, w, O, X) {
            var et = O.type;
            return et === E ? q(C, w, O.props.children, X, O.key) : w !== null && (w.elementType === et || typeof et == "object" && et !== null && et.$$typeof === L && Kh(et) === w.type) ? (w = r(w, O.props),
            Ts(w, O),
            w.return = C,
            w) : (w = Ul(O.type, O.key, O.props, null, C.mode, X),
            Ts(w, O),
            w.return = C,
            w)
        }
        function z(C, w, O, X) {
            return w === null || w.tag !== 4 || w.stateNode.containerInfo !== O.containerInfo || w.stateNode.implementation !== O.implementation ? (w = _r(O, C.mode, X),
            w.return = C,
            w) : (w = r(w, O.children || []),
            w.return = C,
            w)
        }
        function q(C, w, O, X, et) {
            return w === null || w.tag !== 7 ? (w = yi(O, C.mode, X, et),
            w.return = C,
            w) : (w = r(w, O),
            w.return = C,
            w)
        }
        function Q(C, w, O) {
            if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
                return w = Vr("" + w, C.mode, O),
                w.return = C,
                w;
            if (typeof w == "object" && w !== null) {
                switch (w.$$typeof) {
                case x:
                    return O = Ul(w.type, w.key, w.props, null, C.mode, O),
                    Ts(O, w),
                    O.return = C,
                    O;
                case M:
                    return w = _r(w, C.mode, O),
                    w.return = C,
                    w;
                case L:
                    var X = w._init;
                    return w = X(w._payload),
                    Q(C, w, O)
                }
                if (mt(w) || yt(w))
                    return w = yi(w, C.mode, O, null),
                    w.return = C,
                    w;
                if (typeof w.then == "function")
                    return Q(C, Il(w), O);
                if (w.$$typeof === _)
                    return Q(C, Hl(C, w), O);
                to(C, w)
            }
            return null
        }
        function V(C, w, O, X) {
            var et = w !== null ? w.key : null;
            if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
                return et !== null ? null : v(C, w, "" + O, X);
            if (typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                case x:
                    return O.key === et ? T(C, w, O, X) : null;
                case M:
                    return O.key === et ? z(C, w, O, X) : null;
                case L:
                    return et = O._init,
                    O = et(O._payload),
                    V(C, w, O, X)
                }
                if (mt(O) || yt(O))
                    return et !== null ? null : q(C, w, O, X, null);
                if (typeof O.then == "function")
                    return V(C, w, Il(O), X);
                if (O.$$typeof === _)
                    return V(C, w, Hl(C, O), X);
                to(C, O)
            }
            return null
        }
        function U(C, w, O, X, et) {
            if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
                return C = C.get(O) || null,
                v(w, C, "" + X, et);
            if (typeof X == "object" && X !== null) {
                switch (X.$$typeof) {
                case x:
                    return C = C.get(X.key === null ? O : X.key) || null,
                    T(w, C, X, et);
                case M:
                    return C = C.get(X.key === null ? O : X.key) || null,
                    z(w, C, X, et);
                case L:
                    var Tt = X._init;
                    return X = Tt(X._payload),
                    U(C, w, O, X, et)
                }
                if (mt(X) || yt(X))
                    return C = C.get(O) || null,
                    q(w, C, X, et, null);
                if (typeof X.then == "function")
                    return U(C, w, O, Il(X), et);
                if (X.$$typeof === _)
                    return U(C, w, O, Hl(w, X), et);
                to(w, X)
            }
            return null
        }
        function ft(C, w, O, X) {
            for (var et = null, Tt = null, at = w, ut = w = 0, ue = null; at !== null && ut < O.length; ut++) {
                at.index > ut ? (ue = at,
                at = null) : ue = at.sibling;
                var Dt = V(C, at, O[ut], X);
                if (Dt === null) {
                    at === null && (at = ue);
                    break
                }
                t && at && Dt.alternate === null && e(C, at),
                w = u(Dt, w, ut),
                Tt === null ? et = Dt : Tt.sibling = Dt,
                Tt = Dt,
                at = ue
            }
            if (ut === O.length)
                return n(C, at),
                Ct && bi(C, ut),
                et;
            if (at === null) {
                for (; ut < O.length; ut++)
                    at = Q(C, O[ut], X),
                    at !== null && (w = u(at, w, ut),
                    Tt === null ? et = at : Tt.sibling = at,
                    Tt = at);
                return Ct && bi(C, ut),
                et
            }
            for (at = s(at); ut < O.length; ut++)
                ue = U(at, C, ut, O[ut], X),
                ue !== null && (t && ue.alternate !== null && at.delete(ue.key === null ? ut : ue.key),
                w = u(ue, w, ut),
                Tt === null ? et = ue : Tt.sibling = ue,
                Tt = ue);
            return t && at.forEach(function(si) {
                return e(C, si)
            }),
            Ct && bi(C, ut),
            et
        }
        function lt(C, w, O, X) {
            if (O == null)
                throw Error(o(151));
            for (var et = null, Tt = null, at = w, ut = w = 0, ue = null, Dt = O.next(); at !== null && !Dt.done; ut++,
            Dt = O.next()) {
                at.index > ut ? (ue = at,
                at = null) : ue = at.sibling;
                var si = V(C, at, Dt.value, X);
                if (si === null) {
                    at === null && (at = ue);
                    break
                }
                t && at && si.alternate === null && e(C, at),
                w = u(si, w, ut),
                Tt === null ? et = si : Tt.sibling = si,
                Tt = si,
                at = ue
            }
            if (Dt.done)
                return n(C, at),
                Ct && bi(C, ut),
                et;
            if (at === null) {
                for (; !Dt.done; ut++,
                Dt = O.next())
                    Dt = Q(C, Dt.value, X),
                    Dt !== null && (w = u(Dt, w, ut),
                    Tt === null ? et = Dt : Tt.sibling = Dt,
                    Tt = Dt);
                return Ct && bi(C, ut),
                et
            }
            for (at = s(at); !Dt.done; ut++,
            Dt = O.next())
                Dt = U(at, C, ut, Dt.value, X),
                Dt !== null && (t && Dt.alternate !== null && at.delete(Dt.key === null ? ut : Dt.key),
                w = u(Dt, w, ut),
                Tt === null ? et = Dt : Tt.sibling = Dt,
                Tt = Dt);
            return t && at.forEach(function(_x) {
                return e(C, _x)
            }),
            Ct && bi(C, ut),
            et
        }
        function Vt(C, w, O, X) {
            if (typeof O == "object" && O !== null && O.type === E && O.key === null && (O = O.props.children),
            typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                case x:
                    t: {
                        for (var et = O.key; w !== null; ) {
                            if (w.key === et) {
                                if (et = O.type,
                                et === E) {
                                    if (w.tag === 7) {
                                        n(C, w.sibling),
                                        X = r(w, O.props.children),
                                        X.return = C,
                                        C = X;
                                        break t
                                    }
                                } else if (w.elementType === et || typeof et == "object" && et !== null && et.$$typeof === L && Kh(et) === w.type) {
                                    n(C, w.sibling),
                                    X = r(w, O.props),
                                    Ts(X, O),
                                    X.return = C,
                                    C = X;
                                    break t
                                }
                                n(C, w);
                                break
                            } else
                                e(C, w);
                            w = w.sibling
                        }
                        O.type === E ? (X = yi(O.props.children, C.mode, X, O.key),
                        X.return = C,
                        C = X) : (X = Ul(O.type, O.key, O.props, null, C.mode, X),
                        Ts(X, O),
                        X.return = C,
                        C = X)
                    }
                    return g(C);
                case M:
                    t: {
                        for (et = O.key; w !== null; ) {
                            if (w.key === et)
                                if (w.tag === 4 && w.stateNode.containerInfo === O.containerInfo && w.stateNode.implementation === O.implementation) {
                                    n(C, w.sibling),
                                    X = r(w, O.children || []),
                                    X.return = C,
                                    C = X;
                                    break t
                                } else {
                                    n(C, w);
                                    break
                                }
                            else
                                e(C, w);
                            w = w.sibling
                        }
                        X = _r(O, C.mode, X),
                        X.return = C,
                        C = X
                    }
                    return g(C);
                case L:
                    return et = O._init,
                    O = et(O._payload),
                    Vt(C, w, O, X)
                }
                if (mt(O))
                    return ft(C, w, O, X);
                if (yt(O)) {
                    if (et = yt(O),
                    typeof et != "function")
                        throw Error(o(150));
                    return O = et.call(O),
                    lt(C, w, O, X)
                }
                if (typeof O.then == "function")
                    return Vt(C, w, Il(O), X);
                if (O.$$typeof === _)
                    return Vt(C, w, Hl(C, O), X);
                to(C, O)
            }
            return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O,
            w !== null && w.tag === 6 ? (n(C, w.sibling),
            X = r(w, O),
            X.return = C,
            C = X) : (n(C, w),
            X = Vr(O, C.mode, X),
            X.return = C,
            C = X),
            g(C)) : n(C, w)
        }
        return function(C, w, O, X) {
            try {
                Ss = 0;
                var et = Vt(C, w, O, X);
                return ha = null,
                et
            } catch (at) {
                if (at === ds || at === Gl)
                    throw at;
                var Tt = Oe(29, at, null, C.mode);
                return Tt.lanes = X,
                Tt.return = C,
                Tt
            } finally {}
        }
    }
    var ma = Ph(!0)
      , Fh = Ph(!1)
      , Xe = G(null)
      , rn = null;
    function Xn(t) {
        var e = t.alternate;
        P(ae, ae.current & 1),
        P(Xe, t),
        rn === null && (e === null || ua.current !== null || e.memoizedState !== null) && (rn = t)
    }
    function Jh(t) {
        if (t.tag === 22) {
            if (P(ae, ae.current),
            P(Xe, t),
            rn === null) {
                var e = t.alternate;
                e !== null && e.memoizedState !== null && (rn = t)
            }
        } else
            Qn()
    }
    function Qn() {
        P(ae, ae.current),
        P(Xe, Xe.current)
    }
    function wn(t) {
        W(Xe),
        rn === t && (rn = null),
        W(ae)
    }
    var ae = G(0);
    function eo(t) {
        for (var e = t; e !== null; ) {
            if (e.tag === 13) {
                var n = e.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || ic(n)))
                    return e
            } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
                if ((e.flags & 128) !== 0)
                    return e
            } else if (e.child !== null) {
                e.child.return = e,
                e = e.child;
                continue
            }
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return null;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
        return null
    }
    function mu(t, e, n, s) {
        e = t.memoizedState,
        n = n(s, e),
        n = n == null ? e : y({}, e, n),
        t.memoizedState = n,
        t.lanes === 0 && (t.updateQueue.baseState = n)
    }
    var pu = {
        enqueueSetState: function(t, e, n) {
            t = t._reactInternals;
            var s = _e()
              , r = qn(s);
            r.payload = e,
            n != null && (r.callback = n),
            e = Gn(t, r, s),
            e !== null && (Ue(e, t, s),
            ms(e, t, s))
        },
        enqueueReplaceState: function(t, e, n) {
            t = t._reactInternals;
            var s = _e()
              , r = qn(s);
            r.tag = 1,
            r.payload = e,
            n != null && (r.callback = n),
            e = Gn(t, r, s),
            e !== null && (Ue(e, t, s),
            ms(e, t, s))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var n = _e()
              , s = qn(n);
            s.tag = 2,
            e != null && (s.callback = e),
            e = Gn(t, s, n),
            e !== null && (Ue(e, t, n),
            ms(e, t, n))
        }
    };
    function Wh(t, e, n, s, r, u, g) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(s, u, g) : e.prototype && e.prototype.isPureReactComponent ? !as(n, s) || !as(r, u) : !0
    }
    function $h(t, e, n, s) {
        t = e.state,
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, s),
        typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, s),
        e.state !== t && pu.enqueueReplaceState(e, e.state, null)
    }
    function Mi(t, e) {
        var n = e;
        if ("ref"in e) {
            n = {};
            for (var s in e)
                s !== "ref" && (n[s] = e[s])
        }
        if (t = t.defaultProps) {
            n === e && (n = y({}, n));
            for (var r in t)
                n[r] === void 0 && (n[r] = t[r])
        }
        return n
    }
    var no = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(e))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    }
    ;
    function Ih(t) {
        no(t)
    }
    function tm(t) {
        console.error(t)
    }
    function em(t) {
        no(t)
    }
    function io(t, e) {
        try {
            var n = t.onUncaughtError;
            n(e.value, {
                componentStack: e.stack
            })
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }
    function nm(t, e, n) {
        try {
            var s = t.onCaughtError;
            s(n.value, {
                componentStack: n.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (r) {
            setTimeout(function() {
                throw r
            })
        }
    }
    function gu(t, e, n) {
        return n = qn(n),
        n.tag = 3,
        n.payload = {
            element: null
        },
        n.callback = function() {
            io(t, e)
        }
        ,
        n
    }
    function im(t) {
        return t = qn(t),
        t.tag = 3,
        t
    }
    function am(t, e, n, s) {
        var r = n.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var u = s.value;
            t.payload = function() {
                return r(u)
            }
            ,
            t.callback = function() {
                nm(e, n, s)
            }
        }
        var g = n.stateNode;
        g !== null && typeof g.componentDidCatch == "function" && (t.callback = function() {
            nm(e, n, s),
            typeof r != "function" && (Wn === null ? Wn = new Set([this]) : Wn.add(this));
            var v = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: v !== null ? v : ""
            })
        }
        )
    }
    function _b(t, e, n, s, r) {
        if (n.flags |= 32768,
        s !== null && typeof s == "object" && typeof s.then == "function") {
            if (e = n.alternate,
            e !== null && us(e, n, r, !0),
            n = Xe.current,
            n !== null) {
                switch (n.tag) {
                case 13:
                    return rn === null ? Hu() : n.alternate === null && Zt === 0 && (Zt = 3),
                    n.flags &= -257,
                    n.flags |= 65536,
                    n.lanes = r,
                    s === Qr ? n.flags |= 16384 : (e = n.updateQueue,
                    e === null ? n.updateQueue = new Set([s]) : e.add(s),
                    Gu(t, s, r)),
                    !1;
                case 22:
                    return n.flags |= 65536,
                    s === Qr ? n.flags |= 16384 : (e = n.updateQueue,
                    e === null ? (e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([s])
                    },
                    n.updateQueue = e) : (n = e.retryQueue,
                    n === null ? e.retryQueue = new Set([s]) : n.add(s)),
                    Gu(t, s, r)),
                    !1
                }
                throw Error(o(435, n.tag))
            }
            return Gu(t, s, r),
            Hu(),
            !1
        }
        if (Ct)
            return e = Xe.current,
            e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            e.flags |= 65536,
            e.lanes = r,
            s !== Lr && (t = Error(o(422), {
                cause: s
            }),
            rs(He(t, n)))) : (s !== Lr && (e = Error(o(423), {
                cause: s
            }),
            rs(He(e, n))),
            t = t.current.alternate,
            t.flags |= 65536,
            r &= -r,
            t.lanes |= r,
            s = He(s, n),
            r = gu(t.stateNode, s, r),
            Pr(t, r),
            Zt !== 4 && (Zt = 2)),
            !1;
        var u = Error(o(520), {
            cause: s
        });
        if (u = He(u, n),
        Ns === null ? Ns = [u] : Ns.push(u),
        Zt !== 4 && (Zt = 2),
        e === null)
            return !0;
        s = He(s, n),
        n = e;
        do {
            switch (n.tag) {
            case 3:
                return n.flags |= 65536,
                t = r & -r,
                n.lanes |= t,
                t = gu(n.stateNode, s, t),
                Pr(n, t),
                !1;
            case 1:
                if (e = n.type,
                u = n.stateNode,
                (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Wn === null || !Wn.has(u))))
                    return n.flags |= 65536,
                    r &= -r,
                    n.lanes |= r,
                    r = im(r),
                    am(r, t, n, s),
                    Pr(n, r),
                    !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var sm = Error(o(461))
      , oe = !1;
    function he(t, e, n, s) {
        e.child = t === null ? Fh(e, null, n, s) : ma(e, t.child, n, s)
    }
    function lm(t, e, n, s, r) {
        n = n.render;
        var u = e.ref;
        if ("ref"in s) {
            var g = {};
            for (var v in s)
                v !== "ref" && (g[v] = s[v])
        } else
            g = s;
        return Ai(e),
        s = Ir(t, e, n, g, u, r),
        v = tu(),
        t !== null && !oe ? (eu(t, e, r),
        Mn(t, e, r)) : (Ct && v && Ur(e),
        e.flags |= 1,
        he(t, e, s, r),
        e.child)
    }
    function om(t, e, n, s, r) {
        if (t === null) {
            var u = n.type;
            return typeof u == "function" && !zr(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15,
            e.type = u,
            rm(t, e, u, s, r)) : (t = Ul(n.type, null, s, e, e.mode, r),
            t.ref = e.ref,
            t.return = e,
            e.child = t)
        }
        if (u = t.child,
        !Eu(t, r)) {
            var g = u.memoizedProps;
            if (n = n.compare,
            n = n !== null ? n : as,
            n(g, s) && t.ref === e.ref)
                return Mn(t, e, r)
        }
        return e.flags |= 1,
        t = bn(u, s),
        t.ref = e.ref,
        t.return = e,
        e.child = t
    }
    function rm(t, e, n, s, r) {
        if (t !== null) {
            var u = t.memoizedProps;
            if (as(u, s) && t.ref === e.ref)
                if (oe = !1,
                e.pendingProps = s = u,
                Eu(t, r))
                    (t.flags & 131072) !== 0 && (oe = !0);
                else
                    return e.lanes = t.lanes,
                    Mn(t, e, r)
        }
        return yu(t, e, n, s, r)
    }
    function um(t, e, n) {
        var s = e.pendingProps
          , r = s.children
          , u = t !== null ? t.memoizedState : null;
        if (s.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (s = u !== null ? u.baseLanes | n : n,
                t !== null) {
                    for (r = e.child = t.child,
                    u = 0; r !== null; )
                        u = u | r.lanes | r.childLanes,
                        r = r.sibling;
                    e.childLanes = u & ~s
                } else
                    e.childLanes = 0,
                    e.child = null;
                return cm(t, e, s, n)
            }
            if ((n & 536870912) !== 0)
                e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                t !== null && ql(e, u !== null ? u.cachePool : null),
                u !== null ? rh(e, u) : Jr(),
                Jh(e);
            else
                return e.lanes = e.childLanes = 536870912,
                cm(t, e, u !== null ? u.baseLanes | n : n, n)
        } else
            u !== null ? (ql(e, u.cachePool),
            rh(e, u),
            Qn(),
            e.memoizedState = null) : (t !== null && ql(e, null),
            Jr(),
            Qn());
        return he(t, e, r, n),
        e.child
    }
    function cm(t, e, n, s) {
        var r = Xr();
        return r = r === null ? null : {
            parent: ie._currentValue,
            pool: r
        },
        e.memoizedState = {
            baseLanes: n,
            cachePool: r
        },
        t !== null && ql(e, null),
        Jr(),
        Jh(e),
        t !== null && us(t, e, s, !0),
        null
    }
    function ao(t, e) {
        var n = e.ref;
        if (n === null)
            t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof n != "function" && typeof n != "object")
                throw Error(o(284));
            (t === null || t.ref !== n) && (e.flags |= 4194816)
        }
    }
    function yu(t, e, n, s, r) {
        return Ai(e),
        n = Ir(t, e, n, s, void 0, r),
        s = tu(),
        t !== null && !oe ? (eu(t, e, r),
        Mn(t, e, r)) : (Ct && s && Ur(e),
        e.flags |= 1,
        he(t, e, n, r),
        e.child)
    }
    function fm(t, e, n, s, r, u) {
        return Ai(e),
        e.updateQueue = null,
        n = ch(e, s, n, r),
        uh(t),
        s = tu(),
        t !== null && !oe ? (eu(t, e, u),
        Mn(t, e, u)) : (Ct && s && Ur(e),
        e.flags |= 1,
        he(t, e, n, u),
        e.child)
    }
    function dm(t, e, n, s, r) {
        if (Ai(e),
        e.stateNode === null) {
            var u = aa
              , g = n.contextType;
            typeof g == "object" && g !== null && (u = be(g)),
            u = new n(s,u),
            e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            u.updater = pu,
            e.stateNode = u,
            u._reactInternals = e,
            u = e.stateNode,
            u.props = s,
            u.state = e.memoizedState,
            u.refs = {},
            Zr(e),
            g = n.contextType,
            u.context = typeof g == "object" && g !== null ? be(g) : aa,
            u.state = e.memoizedState,
            g = n.getDerivedStateFromProps,
            typeof g == "function" && (mu(e, n, g, s),
            u.state = e.memoizedState),
            typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (g = u.state,
            typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
            g !== u.state && pu.enqueueReplaceState(u, u.state, null),
            gs(e, s, u, r),
            ps(),
            u.state = e.memoizedState),
            typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            s = !0
        } else if (t === null) {
            u = e.stateNode;
            var v = e.memoizedProps
              , T = Mi(n, v);
            u.props = T;
            var z = u.context
              , q = n.contextType;
            g = aa,
            typeof q == "object" && q !== null && (g = be(q));
            var Q = n.getDerivedStateFromProps;
            q = typeof Q == "function" || typeof u.getSnapshotBeforeUpdate == "function",
            v = e.pendingProps !== v,
            q || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (v || z !== g) && $h(e, u, s, g),
            Hn = !1;
            var V = e.memoizedState;
            u.state = V,
            gs(e, s, u, r),
            ps(),
            z = e.memoizedState,
            v || V !== z || Hn ? (typeof Q == "function" && (mu(e, n, Q, s),
            z = e.memoizedState),
            (T = Hn || Wh(e, n, T, s, V, z, g)) ? (q || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            e.memoizedProps = s,
            e.memoizedState = z),
            u.props = s,
            u.state = z,
            u.context = g,
            s = T) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            s = !1)
        } else {
            u = e.stateNode,
            Kr(t, e),
            g = e.memoizedProps,
            q = Mi(n, g),
            u.props = q,
            Q = e.pendingProps,
            V = u.context,
            z = n.contextType,
            T = aa,
            typeof z == "object" && z !== null && (T = be(z)),
            v = n.getDerivedStateFromProps,
            (z = typeof v == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (g !== Q || V !== T) && $h(e, u, s, T),
            Hn = !1,
            V = e.memoizedState,
            u.state = V,
            gs(e, s, u, r),
            ps();
            var U = e.memoizedState;
            g !== Q || V !== U || Hn || t !== null && t.dependencies !== null && kl(t.dependencies) ? (typeof v == "function" && (mu(e, n, v, s),
            U = e.memoizedState),
            (q = Hn || Wh(e, n, q, s, V, U, T) || t !== null && t.dependencies !== null && kl(t.dependencies)) ? (z || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(s, U, T),
            typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(s, U, T)),
            typeof u.componentDidUpdate == "function" && (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || g === t.memoizedProps && V === t.memoizedState || (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || g === t.memoizedProps && V === t.memoizedState || (e.flags |= 1024),
            e.memoizedProps = s,
            e.memoizedState = U),
            u.props = s,
            u.state = U,
            u.context = T,
            s = q) : (typeof u.componentDidUpdate != "function" || g === t.memoizedProps && V === t.memoizedState || (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || g === t.memoizedProps && V === t.memoizedState || (e.flags |= 1024),
            s = !1)
        }
        return u = s,
        ao(t, e),
        s = (e.flags & 128) !== 0,
        u || s ? (u = e.stateNode,
        n = s && typeof n.getDerivedStateFromError != "function" ? null : u.render(),
        e.flags |= 1,
        t !== null && s ? (e.child = ma(e, t.child, null, r),
        e.child = ma(e, null, n, r)) : he(t, e, n, r),
        e.memoizedState = u.state,
        t = e.child) : t = Mn(t, e, r),
        t
    }
    function hm(t, e, n, s) {
        return os(),
        e.flags |= 256,
        he(t, e, n, s),
        e.child
    }
    var vu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function bu(t) {
        return {
            baseLanes: t,
            cachePool: th()
        }
    }
    function xu(t, e, n) {
        return t = t !== null ? t.childLanes & ~n : 0,
        e && (t |= Qe),
        t
    }
    function mm(t, e, n) {
        var s = e.pendingProps, r = !1, u = (e.flags & 128) !== 0, g;
        if ((g = u) || (g = t !== null && t.memoizedState === null ? !1 : (ae.current & 2) !== 0),
        g && (r = !0,
        e.flags &= -129),
        g = (e.flags & 32) !== 0,
        e.flags &= -33,
        t === null) {
            if (Ct) {
                if (r ? Xn(e) : Qn(),
                Ct) {
                    var v = Qt, T;
                    if (T = v) {
                        t: {
                            for (T = v,
                            v = on; T.nodeType !== 8; ) {
                                if (!v) {
                                    v = null;
                                    break t
                                }
                                if (T = tn(T.nextSibling),
                                T === null) {
                                    v = null;
                                    break t
                                }
                            }
                            v = T
                        }
                        v !== null ? (e.memoizedState = {
                            dehydrated: v,
                            treeContext: vi !== null ? {
                                id: xn,
                                overflow: Sn
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                        T = Oe(18, null, null, 0),
                        T.stateNode = v,
                        T.return = e,
                        e.child = T,
                        Te = e,
                        Qt = null,
                        T = !0) : T = !1
                    }
                    T || Si(e)
                }
                if (v = e.memoizedState,
                v !== null && (v = v.dehydrated,
                v !== null))
                    return ic(v) ? e.lanes = 32 : e.lanes = 536870912,
                    null;
                wn(e)
            }
            return v = s.children,
            s = s.fallback,
            r ? (Qn(),
            r = e.mode,
            v = so({
                mode: "hidden",
                children: v
            }, r),
            s = yi(s, r, n, null),
            v.return = e,
            s.return = e,
            v.sibling = s,
            e.child = v,
            r = e.child,
            r.memoizedState = bu(n),
            r.childLanes = xu(t, g, n),
            e.memoizedState = vu,
            s) : (Xn(e),
            Su(e, v))
        }
        if (T = t.memoizedState,
        T !== null && (v = T.dehydrated,
        v !== null)) {
            if (u)
                e.flags & 256 ? (Xn(e),
                e.flags &= -257,
                e = Tu(t, e, n)) : e.memoizedState !== null ? (Qn(),
                e.child = t.child,
                e.flags |= 128,
                e = null) : (Qn(),
                r = s.fallback,
                v = e.mode,
                s = so({
                    mode: "visible",
                    children: s.children
                }, v),
                r = yi(r, v, n, null),
                r.flags |= 2,
                s.return = e,
                r.return = e,
                s.sibling = r,
                e.child = s,
                ma(e, t.child, null, n),
                s = e.child,
                s.memoizedState = bu(n),
                s.childLanes = xu(t, g, n),
                e.memoizedState = vu,
                e = r);
            else if (Xn(e),
            ic(v)) {
                if (g = v.nextSibling && v.nextSibling.dataset,
                g)
                    var z = g.dgst;
                g = z,
                s = Error(o(419)),
                s.stack = "",
                s.digest = g,
                rs({
                    value: s,
                    source: null,
                    stack: null
                }),
                e = Tu(t, e, n)
            } else if (oe || us(t, e, n, !1),
            g = (n & t.childLanes) !== 0,
            oe || g) {
                if (g = Ut,
                g !== null && (s = n & -n,
                s = (s & 42) !== 0 ? 1 : Gi(s),
                s = (s & (g.suspendedLanes | n)) !== 0 ? 0 : s,
                s !== 0 && s !== T.retryLane))
                    throw T.retryLane = s,
                    ia(t, s),
                    Ue(g, t, s),
                    sm;
                v.data === "$?" || Hu(),
                e = Tu(t, e, n)
            } else
                v.data === "$?" ? (e.flags |= 192,
                e.child = t.child,
                e = null) : (t = T.treeContext,
                Qt = tn(v.nextSibling),
                Te = e,
                Ct = !0,
                xi = null,
                on = !1,
                t !== null && (Ge[Ye++] = xn,
                Ge[Ye++] = Sn,
                Ge[Ye++] = vi,
                xn = t.id,
                Sn = t.overflow,
                vi = e),
                e = Su(e, s.children),
                e.flags |= 4096);
            return e
        }
        return r ? (Qn(),
        r = s.fallback,
        v = e.mode,
        T = t.child,
        z = T.sibling,
        s = bn(T, {
            mode: "hidden",
            children: s.children
        }),
        s.subtreeFlags = T.subtreeFlags & 65011712,
        z !== null ? r = bn(z, r) : (r = yi(r, v, n, null),
        r.flags |= 2),
        r.return = e,
        s.return = e,
        s.sibling = r,
        e.child = s,
        s = r,
        r = e.child,
        v = t.child.memoizedState,
        v === null ? v = bu(n) : (T = v.cachePool,
        T !== null ? (z = ie._currentValue,
        T = T.parent !== z ? {
            parent: z,
            pool: z
        } : T) : T = th(),
        v = {
            baseLanes: v.baseLanes | n,
            cachePool: T
        }),
        r.memoizedState = v,
        r.childLanes = xu(t, g, n),
        e.memoizedState = vu,
        s) : (Xn(e),
        n = t.child,
        t = n.sibling,
        n = bn(n, {
            mode: "visible",
            children: s.children
        }),
        n.return = e,
        n.sibling = null,
        t !== null && (g = e.deletions,
        g === null ? (e.deletions = [t],
        e.flags |= 16) : g.push(t)),
        e.child = n,
        e.memoizedState = null,
        n)
    }
    function Su(t, e) {
        return e = so({
            mode: "visible",
            children: e
        }, t.mode),
        e.return = t,
        t.child = e
    }
    function so(t, e) {
        return t = Oe(22, t, null, e),
        t.lanes = 0,
        t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        },
        t
    }
    function Tu(t, e, n) {
        return ma(e, t.child, null, n),
        t = Su(e, e.pendingProps.children),
        t.flags |= 2,
        e.memoizedState = null,
        t
    }
    function pm(t, e, n) {
        t.lanes |= e;
        var s = t.alternate;
        s !== null && (s.lanes |= e),
        Hr(t.return, e, n)
    }
    function Au(t, e, n, s, r) {
        var u = t.memoizedState;
        u === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: s,
            tail: n,
            tailMode: r
        } : (u.isBackwards = e,
        u.rendering = null,
        u.renderingStartTime = 0,
        u.last = s,
        u.tail = n,
        u.tailMode = r)
    }
    function gm(t, e, n) {
        var s = e.pendingProps
          , r = s.revealOrder
          , u = s.tail;
        if (he(t, e, s.children, n),
        s = ae.current,
        (s & 2) !== 0)
            s = s & 1 | 2,
            e.flags |= 128;
        else {
            if (t !== null && (t.flags & 128) !== 0)
                t: for (t = e.child; t !== null; ) {
                    if (t.tag === 13)
                        t.memoizedState !== null && pm(t, n, e);
                    else if (t.tag === 19)
                        pm(t, n, e);
                    else if (t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break t;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break t;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            s &= 1
        }
        switch (P(ae, s),
        r) {
        case "forwards":
            for (n = e.child,
            r = null; n !== null; )
                t = n.alternate,
                t !== null && eo(t) === null && (r = n),
                n = n.sibling;
            n = r,
            n === null ? (r = e.child,
            e.child = null) : (r = n.sibling,
            n.sibling = null),
            Au(e, !1, r, n, u);
            break;
        case "backwards":
            for (n = null,
            r = e.child,
            e.child = null; r !== null; ) {
                if (t = r.alternate,
                t !== null && eo(t) === null) {
                    e.child = r;
                    break
                }
                t = r.sibling,
                r.sibling = n,
                n = r,
                r = t
            }
            Au(e, !0, n, null, u);
            break;
        case "together":
            Au(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
        }
        return e.child
    }
    function Mn(t, e, n) {
        if (t !== null && (e.dependencies = t.dependencies),
        Jn |= e.lanes,
        (n & e.childLanes) === 0)
            if (t !== null) {
                if (us(t, e, n, !1),
                (n & e.childLanes) === 0)
                    return null
            } else
                return null;
        if (t !== null && e.child !== t.child)
            throw Error(o(153));
        if (e.child !== null) {
            for (t = e.child,
            n = bn(t, t.pendingProps),
            e.child = n,
            n.return = e; t.sibling !== null; )
                t = t.sibling,
                n = n.sibling = bn(t, t.pendingProps),
                n.return = e;
            n.sibling = null
        }
        return e.child
    }
    function Eu(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies,
        !!(t !== null && kl(t)))
    }
    function Ub(t, e, n) {
        switch (e.tag) {
        case 3:
            gt(e, e.stateNode.containerInfo),
            kn(e, ie, t.memoizedState.cache),
            os();
            break;
        case 27:
        case 5:
            Pt(e);
            break;
        case 4:
            gt(e, e.stateNode.containerInfo);
            break;
        case 10:
            kn(e, e.type, e.memoizedProps.value);
            break;
        case 13:
            var s = e.memoizedState;
            if (s !== null)
                return s.dehydrated !== null ? (Xn(e),
                e.flags |= 128,
                null) : (n & e.child.childLanes) !== 0 ? mm(t, e, n) : (Xn(e),
                t = Mn(t, e, n),
                t !== null ? t.sibling : null);
            Xn(e);
            break;
        case 19:
            var r = (t.flags & 128) !== 0;
            if (s = (n & e.childLanes) !== 0,
            s || (us(t, e, n, !1),
            s = (n & e.childLanes) !== 0),
            r) {
                if (s)
                    return gm(t, e, n);
                e.flags |= 128
            }
            if (r = e.memoizedState,
            r !== null && (r.rendering = null,
            r.tail = null,
            r.lastEffect = null),
            P(ae, ae.current),
            s)
                break;
            return null;
        case 22:
        case 23:
            return e.lanes = 0,
            um(t, e, n);
        case 24:
            kn(e, ie, t.memoizedState.cache)
        }
        return Mn(t, e, n)
    }
    function ym(t, e, n) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps)
                oe = !0;
            else {
                if (!Eu(t, n) && (e.flags & 128) === 0)
                    return oe = !1,
                    Ub(t, e, n);
                oe = (t.flags & 131072) !== 0
            }
        else
            oe = !1,
            Ct && (e.flags & 1048576) !== 0 && Kd(e, Ll, e.index);
        switch (e.lanes = 0,
        e.tag) {
        case 16:
            t: {
                t = e.pendingProps;
                var s = e.elementType
                  , r = s._init;
                if (s = r(s._payload),
                e.type = s,
                typeof s == "function")
                    zr(s) ? (t = Mi(s, t),
                    e.tag = 1,
                    e = dm(null, e, s, t, n)) : (e.tag = 0,
                    e = yu(null, e, s, t, n));
                else {
                    if (s != null) {
                        if (r = s.$$typeof,
                        r === F) {
                            e.tag = 11,
                            e = lm(null, e, s, t, n);
                            break t
                        } else if (r === J) {
                            e.tag = 14,
                            e = om(null, e, s, t, n);
                            break t
                        }
                    }
                    throw e = vt(s) || s,
                    Error(o(306, e, ""))
                }
            }
            return e;
        case 0:
            return yu(t, e, e.type, e.pendingProps, n);
        case 1:
            return s = e.type,
            r = Mi(s, e.pendingProps),
            dm(t, e, s, r, n);
        case 3:
            t: {
                if (gt(e, e.stateNode.containerInfo),
                t === null)
                    throw Error(o(387));
                s = e.pendingProps;
                var u = e.memoizedState;
                r = u.element,
                Kr(t, e),
                gs(e, s, null, n);
                var g = e.memoizedState;
                if (s = g.cache,
                kn(e, ie, s),
                s !== u.cache && qr(e, [ie], n, !0),
                ps(),
                s = g.element,
                u.isDehydrated)
                    if (u = {
                        element: s,
                        isDehydrated: !1,
                        cache: g.cache
                    },
                    e.updateQueue.baseState = u,
                    e.memoizedState = u,
                    e.flags & 256) {
                        e = hm(t, e, s, n);
                        break t
                    } else if (s !== r) {
                        r = He(Error(o(424)), e),
                        rs(r),
                        e = hm(t, e, s, n);
                        break t
                    } else {
                        switch (t = e.stateNode.containerInfo,
                        t.nodeType) {
                        case 9:
                            t = t.body;
                            break;
                        default:
                            t = t.nodeName === "HTML" ? t.ownerDocument.body : t
                        }
                        for (Qt = tn(t.firstChild),
                        Te = e,
                        Ct = !0,
                        xi = null,
                        on = !0,
                        n = Fh(e, null, s, n),
                        e.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling
                    }
                else {
                    if (os(),
                    s === r) {
                        e = Mn(t, e, n);
                        break t
                    }
                    he(t, e, s, n)
                }
                e = e.child
            }
            return e;
        case 26:
            return ao(t, e),
            t === null ? (n = Sp(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : Ct || (n = e.type,
            t = e.pendingProps,
            s = xo(st.current).createElement(n),
            s[ve] = e,
            s[Ee] = t,
            pe(s, n, t),
            le(s),
            e.stateNode = s) : e.memoizedState = Sp(e.type, t.memoizedProps, e.pendingProps, t.memoizedState),
            null;
        case 27:
            return Pt(e),
            t === null && Ct && (s = e.stateNode = vp(e.type, e.pendingProps, st.current),
            Te = e,
            on = !0,
            r = Qt,
            ti(e.type) ? (ac = r,
            Qt = tn(s.firstChild)) : Qt = r),
            he(t, e, e.pendingProps.children, n),
            ao(t, e),
            t === null && (e.flags |= 4194304),
            e.child;
        case 5:
            return t === null && Ct && ((r = s = Qt) && (s = cx(s, e.type, e.pendingProps, on),
            s !== null ? (e.stateNode = s,
            Te = e,
            Qt = tn(s.firstChild),
            on = !1,
            r = !0) : r = !1),
            r || Si(e)),
            Pt(e),
            r = e.type,
            u = e.pendingProps,
            g = t !== null ? t.memoizedProps : null,
            s = u.children,
            tc(r, u) ? s = null : g !== null && tc(r, g) && (e.flags |= 32),
            e.memoizedState !== null && (r = Ir(t, e, Cb, null, null, n),
            Ls._currentValue = r),
            ao(t, e),
            he(t, e, s, n),
            e.child;
        case 6:
            return t === null && Ct && ((t = n = Qt) && (n = fx(n, e.pendingProps, on),
            n !== null ? (e.stateNode = n,
            Te = e,
            Qt = null,
            t = !0) : t = !1),
            t || Si(e)),
            null;
        case 13:
            return mm(t, e, n);
        case 4:
            return gt(e, e.stateNode.containerInfo),
            s = e.pendingProps,
            t === null ? e.child = ma(e, null, s, n) : he(t, e, s, n),
            e.child;
        case 11:
            return lm(t, e, e.type, e.pendingProps, n);
        case 7:
            return he(t, e, e.pendingProps, n),
            e.child;
        case 8:
            return he(t, e, e.pendingProps.children, n),
            e.child;
        case 12:
            return he(t, e, e.pendingProps.children, n),
            e.child;
        case 10:
            return s = e.pendingProps,
            kn(e, e.type, s.value),
            he(t, e, s.children, n),
            e.child;
        case 9:
            return r = e.type._context,
            s = e.pendingProps.children,
            Ai(e),
            r = be(r),
            s = s(r),
            e.flags |= 1,
            he(t, e, s, n),
            e.child;
        case 14:
            return om(t, e, e.type, e.pendingProps, n);
        case 15:
            return rm(t, e, e.type, e.pendingProps, n);
        case 19:
            return gm(t, e, n);
        case 31:
            return s = e.pendingProps,
            n = e.mode,
            s = {
                mode: s.mode,
                children: s.children
            },
            t === null ? (n = so(s, n),
            n.ref = e.ref,
            e.child = n,
            n.return = e,
            e = n) : (n = bn(t.child, s),
            n.ref = e.ref,
            e.child = n,
            n.return = e,
            e = n),
            e;
        case 22:
            return um(t, e, n);
        case 24:
            return Ai(e),
            s = be(ie),
            t === null ? (r = Xr(),
            r === null && (r = Ut,
            u = Gr(),
            r.pooledCache = u,
            u.refCount++,
            u !== null && (r.pooledCacheLanes |= n),
            r = u),
            e.memoizedState = {
                parent: s,
                cache: r
            },
            Zr(e),
            kn(e, ie, r)) : ((t.lanes & n) !== 0 && (Kr(t, e),
            gs(e, null, null, n),
            ps()),
            r = t.memoizedState,
            u = e.memoizedState,
            r.parent !== s ? (r = {
                parent: s,
                cache: s
            },
            e.memoizedState = r,
            e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = r),
            kn(e, ie, s)) : (s = u.cache,
            kn(e, ie, s),
            s !== r.cache && qr(e, [ie], n, !0))),
            he(t, e, e.pendingProps.children, n),
            e.child;
        case 29:
            throw e.pendingProps
        }
        throw Error(o(156, e.tag))
    }
    function Dn(t) {
        t.flags |= 4
    }
    function vm(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (t.flags |= 16777216,
        !Mp(e)) {
            if (e = Xe.current,
            e !== null && ((wt & 4194048) === wt ? rn !== null : (wt & 62914560) !== wt && (wt & 536870912) === 0 || e !== rn))
                throw hs = Qr,
                eh;
            t.flags |= 8192
        }
    }
    function lo(t, e) {
        e !== null && (t.flags |= 4),
        t.flags & 16384 && (e = t.tag !== 22 ? bl() : 536870912,
        t.lanes |= e,
        va |= e)
    }
    function As(t, e) {
        if (!Ct)
            switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var n = null; e !== null; )
                    e.alternate !== null && (n = e),
                    e = e.sibling;
                n === null ? t.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = t.tail;
                for (var s = null; n !== null; )
                    n.alternate !== null && (s = n),
                    n = n.sibling;
                s === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : s.sibling = null
            }
    }
    function Gt(t) {
        var e = t.alternate !== null && t.alternate.child === t.child
          , n = 0
          , s = 0;
        if (e)
            for (var r = t.child; r !== null; )
                n |= r.lanes | r.childLanes,
                s |= r.subtreeFlags & 65011712,
                s |= r.flags & 65011712,
                r.return = t,
                r = r.sibling;
        else
            for (r = t.child; r !== null; )
                n |= r.lanes | r.childLanes,
                s |= r.subtreeFlags,
                s |= r.flags,
                r.return = t,
                r = r.sibling;
        return t.subtreeFlags |= s,
        t.childLanes = n,
        e
    }
    function Bb(t, e, n) {
        var s = e.pendingProps;
        switch (Br(e),
        e.tag) {
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
            return Gt(e),
            null;
        case 1:
            return Gt(e),
            null;
        case 3:
            return n = e.stateNode,
            s = null,
            t !== null && (s = t.memoizedState.cache),
            e.memoizedState.cache !== s && (e.flags |= 2048),
            An(ie),
            qt(),
            n.pendingContext && (n.context = n.pendingContext,
            n.pendingContext = null),
            (t === null || t.child === null) && (ls(e) ? Dn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024,
            Jd())),
            Gt(e),
            null;
        case 26:
            return n = e.memoizedState,
            t === null ? (Dn(e),
            n !== null ? (Gt(e),
            vm(e, n)) : (Gt(e),
            e.flags &= -16777217)) : n ? n !== t.memoizedState ? (Dn(e),
            Gt(e),
            vm(e, n)) : (Gt(e),
            e.flags &= -16777217) : (t.memoizedProps !== s && Dn(e),
            Gt(e),
            e.flags &= -16777217),
            null;
        case 27:
            Mt(e),
            n = st.current;
            var r = e.type;
            if (t !== null && e.stateNode != null)
                t.memoizedProps !== s && Dn(e);
            else {
                if (!s) {
                    if (e.stateNode === null)
                        throw Error(o(166));
                    return Gt(e),
                    null
                }
                t = $.current,
                ls(e) ? Pd(e) : (t = vp(r, s, n),
                e.stateNode = t,
                Dn(e))
            }
            return Gt(e),
            null;
        case 5:
            if (Mt(e),
            n = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== s && Dn(e);
            else {
                if (!s) {
                    if (e.stateNode === null)
                        throw Error(o(166));
                    return Gt(e),
                    null
                }
                if (t = $.current,
                ls(e))
                    Pd(e);
                else {
                    switch (r = xo(st.current),
                    t) {
                    case 1:
                        t = r.createElementNS("http://www.w3.org/2000/svg", n);
                        break;
                    case 2:
                        t = r.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                        break;
                    default:
                        switch (n) {
                        case "svg":
                            t = r.createElementNS("http://www.w3.org/2000/svg", n);
                            break;
                        case "math":
                            t = r.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                            break;
                        case "script":
                            t = r.createElement("div"),
                            t.innerHTML = "<script><\/script>",
                            t = t.removeChild(t.firstChild);
                            break;
                        case "select":
                            t = typeof s.is == "string" ? r.createElement("select", {
                                is: s.is
                            }) : r.createElement("select"),
                            s.multiple ? t.multiple = !0 : s.size && (t.size = s.size);
                            break;
                        default:
                            t = typeof s.is == "string" ? r.createElement(n, {
                                is: s.is
                            }) : r.createElement(n)
                        }
                    }
                    t[ve] = e,
                    t[Ee] = s;
                    t: for (r = e.child; r !== null; ) {
                        if (r.tag === 5 || r.tag === 6)
                            t.appendChild(r.stateNode);
                        else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                            r.child.return = r,
                            r = r.child;
                            continue
                        }
                        if (r === e)
                            break t;
                        for (; r.sibling === null; ) {
                            if (r.return === null || r.return === e)
                                break t;
                            r = r.return
                        }
                        r.sibling.return = r.return,
                        r = r.sibling
                    }
                    e.stateNode = t;
                    t: switch (pe(t, n, s),
                    n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        t = !!s.autoFocus;
                        break t;
                    case "img":
                        t = !0;
                        break t;
                    default:
                        t = !1
                    }
                    t && Dn(e)
                }
            }
            return Gt(e),
            e.flags &= -16777217,
            null;
        case 6:
            if (t && e.stateNode != null)
                t.memoizedProps !== s && Dn(e);
            else {
                if (typeof s != "string" && e.stateNode === null)
                    throw Error(o(166));
                if (t = st.current,
                ls(e)) {
                    if (t = e.stateNode,
                    n = e.memoizedProps,
                    s = null,
                    r = Te,
                    r !== null)
                        switch (r.tag) {
                        case 27:
                        case 5:
                            s = r.memoizedProps
                        }
                    t[ve] = e,
                    t = !!(t.nodeValue === n || s !== null && s.suppressHydrationWarning === !0 || fp(t.nodeValue, n)),
                    t || Si(e)
                } else
                    t = xo(t).createTextNode(s),
                    t[ve] = e,
                    e.stateNode = t
            }
            return Gt(e),
            null;
        case 13:
            if (s = e.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (r = ls(e),
                s !== null && s.dehydrated !== null) {
                    if (t === null) {
                        if (!r)
                            throw Error(o(318));
                        if (r = e.memoizedState,
                        r = r !== null ? r.dehydrated : null,
                        !r)
                            throw Error(o(317));
                        r[ve] = e
                    } else
                        os(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    Gt(e),
                    r = !1
                } else
                    r = Jd(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = r),
                    r = !0;
                if (!r)
                    return e.flags & 256 ? (wn(e),
                    e) : (wn(e),
                    null)
            }
            if (wn(e),
            (e.flags & 128) !== 0)
                return e.lanes = n,
                e;
            if (n = s !== null,
            t = t !== null && t.memoizedState !== null,
            n) {
                s = e.child,
                r = null,
                s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (r = s.alternate.memoizedState.cachePool.pool);
                var u = null;
                s.memoizedState !== null && s.memoizedState.cachePool !== null && (u = s.memoizedState.cachePool.pool),
                u !== r && (s.flags |= 2048)
            }
            return n !== t && n && (e.child.flags |= 8192),
            lo(e, e.updateQueue),
            Gt(e),
            null;
        case 4:
            return qt(),
            t === null && Fu(e.stateNode.containerInfo),
            Gt(e),
            null;
        case 10:
            return An(e.type),
            Gt(e),
            null;
        case 19:
            if (W(ae),
            r = e.memoizedState,
            r === null)
                return Gt(e),
                null;
            if (s = (e.flags & 128) !== 0,
            u = r.rendering,
            u === null)
                if (s)
                    As(r, !1);
                else {
                    if (Zt !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = e.child; t !== null; ) {
                            if (u = eo(t),
                            u !== null) {
                                for (e.flags |= 128,
                                As(r, !1),
                                t = u.updateQueue,
                                e.updateQueue = t,
                                lo(e, t),
                                e.subtreeFlags = 0,
                                t = n,
                                n = e.child; n !== null; )
                                    Zd(n, t),
                                    n = n.sibling;
                                return P(ae, ae.current & 1 | 2),
                                e.child
                            }
                            t = t.sibling
                        }
                    r.tail !== null && $t() > uo && (e.flags |= 128,
                    s = !0,
                    As(r, !1),
                    e.lanes = 4194304)
                }
            else {
                if (!s)
                    if (t = eo(u),
                    t !== null) {
                        if (e.flags |= 128,
                        s = !0,
                        t = t.updateQueue,
                        e.updateQueue = t,
                        lo(e, t),
                        As(r, !0),
                        r.tail === null && r.tailMode === "hidden" && !u.alternate && !Ct)
                            return Gt(e),
                            null
                    } else
                        2 * $t() - r.renderingStartTime > uo && n !== 536870912 && (e.flags |= 128,
                        s = !0,
                        As(r, !1),
                        e.lanes = 4194304);
                r.isBackwards ? (u.sibling = e.child,
                e.child = u) : (t = r.last,
                t !== null ? t.sibling = u : e.child = u,
                r.last = u)
            }
            return r.tail !== null ? (e = r.tail,
            r.rendering = e,
            r.tail = e.sibling,
            r.renderingStartTime = $t(),
            e.sibling = null,
            t = ae.current,
            P(ae, s ? t & 1 | 2 : t & 1),
            e) : (Gt(e),
            null);
        case 22:
        case 23:
            return wn(e),
            Wr(),
            s = e.memoizedState !== null,
            t !== null ? t.memoizedState !== null !== s && (e.flags |= 8192) : s && (e.flags |= 8192),
            s ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Gt(e),
            e.subtreeFlags & 6 && (e.flags |= 8192)) : Gt(e),
            n = e.updateQueue,
            n !== null && lo(e, n.retryQueue),
            n = null,
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
            s = null,
            e.memoizedState !== null && e.memoizedState.cachePool !== null && (s = e.memoizedState.cachePool.pool),
            s !== n && (e.flags |= 2048),
            t !== null && W(Ei),
            null;
        case 24:
            return n = null,
            t !== null && (n = t.memoizedState.cache),
            e.memoizedState.cache !== n && (e.flags |= 2048),
            An(ie),
            Gt(e),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(o(156, e.tag))
    }
    function Lb(t, e) {
        switch (Br(e),
        e.tag) {
        case 1:
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 3:
            return An(ie),
            qt(),
            t = e.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 26:
        case 27:
        case 5:
            return Mt(e),
            null;
        case 13:
            if (wn(e),
            t = e.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (e.alternate === null)
                    throw Error(o(340));
                os()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 19:
            return W(ae),
            null;
        case 4:
            return qt(),
            null;
        case 10:
            return An(e.type),
            null;
        case 22:
        case 23:
            return wn(e),
            Wr(),
            t !== null && W(Ei),
            t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 24:
            return An(ie),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function bm(t, e) {
        switch (Br(e),
        e.tag) {
        case 3:
            An(ie),
            qt();
            break;
        case 26:
        case 27:
        case 5:
            Mt(e);
            break;
        case 4:
            qt();
            break;
        case 13:
            wn(e);
            break;
        case 19:
            W(ae);
            break;
        case 10:
            An(e.type);
            break;
        case 22:
        case 23:
            wn(e),
            Wr(),
            t !== null && W(Ei);
            break;
        case 24:
            An(ie)
        }
    }
    function Es(t, e) {
        try {
            var n = e.updateQueue
              , s = n !== null ? n.lastEffect : null;
            if (s !== null) {
                var r = s.next;
                n = r;
                do {
                    if ((n.tag & t) === t) {
                        s = void 0;
                        var u = n.create
                          , g = n.inst;
                        s = u(),
                        g.destroy = s
                    }
                    n = n.next
                } while (n !== r)
            }
        } catch (v) {
            _t(e, e.return, v)
        }
    }
    function Zn(t, e, n) {
        try {
            var s = e.updateQueue
              , r = s !== null ? s.lastEffect : null;
            if (r !== null) {
                var u = r.next;
                s = u;
                do {
                    if ((s.tag & t) === t) {
                        var g = s.inst
                          , v = g.destroy;
                        if (v !== void 0) {
                            g.destroy = void 0,
                            r = e;
                            var T = n
                              , z = v;
                            try {
                                z()
                            } catch (q) {
                                _t(r, T, q)
                            }
                        }
                    }
                    s = s.next
                } while (s !== u)
            }
        } catch (q) {
            _t(e, e.return, q)
        }
    }
    function xm(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var n = t.stateNode;
            try {
                oh(e, n)
            } catch (s) {
                _t(t, t.return, s)
            }
        }
    }
    function Sm(t, e, n) {
        n.props = Mi(t.type, t.memoizedProps),
        n.state = t.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (s) {
            _t(t, e, s)
        }
    }
    function ws(t, e) {
        try {
            var n = t.ref;
            if (n !== null) {
                switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var s = t.stateNode;
                    break;
                case 30:
                    s = t.stateNode;
                    break;
                default:
                    s = t.stateNode
                }
                typeof n == "function" ? t.refCleanup = n(s) : n.current = s
            }
        } catch (r) {
            _t(t, e, r)
        }
    }
    function un(t, e) {
        var n = t.ref
          , s = t.refCleanup;
        if (n !== null)
            if (typeof s == "function")
                try {
                    s()
                } catch (r) {
                    _t(t, e, r)
                } finally {
                    t.refCleanup = null,
                    t = t.alternate,
                    t != null && (t.refCleanup = null)
                }
            else if (typeof n == "function")
                try {
                    n(null)
                } catch (r) {
                    _t(t, e, r)
                }
            else
                n.current = null
    }
    function Tm(t) {
        var e = t.type
          , n = t.memoizedProps
          , s = t.stateNode;
        try {
            t: switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                n.autoFocus && s.focus();
                break t;
            case "img":
                n.src ? s.src = n.src : n.srcSet && (s.srcset = n.srcSet)
            }
        } catch (r) {
            _t(t, t.return, r)
        }
    }
    function wu(t, e, n) {
        try {
            var s = t.stateNode;
            sx(s, t.type, n, e),
            s[Ee] = e
        } catch (r) {
            _t(t, t.return, r)
        }
    }
    function Am(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ti(t.type) || t.tag === 4
    }
    function Mu(t) {
        t: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || Am(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.tag === 27 && ti(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                    continue t;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function Du(t, e, n) {
        var s = t.tag;
        if (s === 5 || s === 6)
            t = t.stateNode,
            e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n,
            e.appendChild(t),
            n = n._reactRootContainer,
            n != null || e.onclick !== null || (e.onclick = bo));
        else if (s !== 4 && (s === 27 && ti(t.type) && (n = t.stateNode,
        e = null),
        t = t.child,
        t !== null))
            for (Du(t, e, n),
            t = t.sibling; t !== null; )
                Du(t, e, n),
                t = t.sibling
    }
    function oo(t, e, n) {
        var s = t.tag;
        if (s === 5 || s === 6)
            t = t.stateNode,
            e ? n.insertBefore(t, e) : n.appendChild(t);
        else if (s !== 4 && (s === 27 && ti(t.type) && (n = t.stateNode),
        t = t.child,
        t !== null))
            for (oo(t, e, n),
            t = t.sibling; t !== null; )
                oo(t, e, n),
                t = t.sibling
    }
    function Em(t) {
        var e = t.stateNode
          , n = t.memoizedProps;
        try {
            for (var s = t.type, r = e.attributes; r.length; )
                e.removeAttributeNode(r[0]);
            pe(e, s, n),
            e[ve] = t,
            e[Ee] = n
        } catch (u) {
            _t(t, t.return, u)
        }
    }
    var Cn = !1
      , Jt = !1
      , Cu = !1
      , wm = typeof WeakSet == "function" ? WeakSet : Set
      , re = null;
    function kb(t, e) {
        if (t = t.containerInfo,
        $u = Mo,
        t = Ud(t),
        Mr(t)) {
            if ("selectionStart"in t)
                var n = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                t: {
                    n = (n = t.ownerDocument) && n.defaultView || window;
                    var s = n.getSelection && n.getSelection();
                    if (s && s.rangeCount !== 0) {
                        n = s.anchorNode;
                        var r = s.anchorOffset
                          , u = s.focusNode;
                        s = s.focusOffset;
                        try {
                            n.nodeType,
                            u.nodeType
                        } catch {
                            n = null;
                            break t
                        }
                        var g = 0
                          , v = -1
                          , T = -1
                          , z = 0
                          , q = 0
                          , Q = t
                          , V = null;
                        e: for (; ; ) {
                            for (var U; Q !== n || r !== 0 && Q.nodeType !== 3 || (v = g + r),
                            Q !== u || s !== 0 && Q.nodeType !== 3 || (T = g + s),
                            Q.nodeType === 3 && (g += Q.nodeValue.length),
                            (U = Q.firstChild) !== null; )
                                V = Q,
                                Q = U;
                            for (; ; ) {
                                if (Q === t)
                                    break e;
                                if (V === n && ++z === r && (v = g),
                                V === u && ++q === s && (T = g),
                                (U = Q.nextSibling) !== null)
                                    break;
                                Q = V,
                                V = Q.parentNode
                            }
                            Q = U
                        }
                        n = v === -1 || T === -1 ? null : {
                            start: v,
                            end: T
                        }
                    } else
                        n = null
                }
            n = n || {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (Iu = {
            focusedElem: t,
            selectionRange: n
        },
        Mo = !1,
        re = e; re !== null; )
            if (e = re,
            t = e.child,
            (e.subtreeFlags & 1024) !== 0 && t !== null)
                t.return = e,
                re = t;
            else
                for (; re !== null; ) {
                    switch (e = re,
                    u = e.alternate,
                    t = e.flags,
                    e.tag) {
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && u !== null) {
                            t = void 0,
                            n = e,
                            r = u.memoizedProps,
                            u = u.memoizedState,
                            s = n.stateNode;
                            try {
                                var ft = Mi(n.type, r, n.elementType === n.type);
                                t = s.getSnapshotBeforeUpdate(ft, u),
                                s.__reactInternalSnapshotBeforeUpdate = t
                            } catch (lt) {
                                _t(n, n.return, lt)
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = e.stateNode.containerInfo,
                            n = t.nodeType,
                            n === 9)
                                nc(t);
                            else if (n === 1)
                                switch (t.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    nc(t);
                                    break;
                                default:
                                    t.textContent = ""
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
                        if ((t & 1024) !== 0)
                            throw Error(o(163))
                    }
                    if (t = e.sibling,
                    t !== null) {
                        t.return = e.return,
                        re = t;
                        break
                    }
                    re = e.return
                }
    }
    function Mm(t, e, n) {
        var s = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
            Kn(t, n),
            s & 4 && Es(5, n);
            break;
        case 1:
            if (Kn(t, n),
            s & 4)
                if (t = n.stateNode,
                e === null)
                    try {
                        t.componentDidMount()
                    } catch (g) {
                        _t(n, n.return, g)
                    }
                else {
                    var r = Mi(n.type, e.memoizedProps);
                    e = e.memoizedState;
                    try {
                        t.componentDidUpdate(r, e, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (g) {
                        _t(n, n.return, g)
                    }
                }
            s & 64 && xm(n),
            s & 512 && ws(n, n.return);
            break;
        case 3:
            if (Kn(t, n),
            s & 64 && (t = n.updateQueue,
            t !== null)) {
                if (e = null,
                n.child !== null)
                    switch (n.child.tag) {
                    case 27:
                    case 5:
                        e = n.child.stateNode;
                        break;
                    case 1:
                        e = n.child.stateNode
                    }
                try {
                    oh(t, e)
                } catch (g) {
                    _t(n, n.return, g)
                }
            }
            break;
        case 27:
            e === null && s & 4 && Em(n);
        case 26:
        case 5:
            Kn(t, n),
            e === null && s & 4 && Tm(n),
            s & 512 && ws(n, n.return);
            break;
        case 12:
            Kn(t, n);
            break;
        case 13:
            Kn(t, n),
            s & 4 && Nm(t, n),
            s & 64 && (t = n.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null && (n = Pb.bind(null, n),
            dx(t, n))));
            break;
        case 22:
            if (s = n.memoizedState !== null || Cn,
            !s) {
                e = e !== null && e.memoizedState !== null || Jt,
                r = Cn;
                var u = Jt;
                Cn = s,
                (Jt = e) && !u ? Pn(t, n, (n.subtreeFlags & 8772) !== 0) : Kn(t, n),
                Cn = r,
                Jt = u
            }
            break;
        case 30:
            break;
        default:
            Kn(t, n)
        }
    }
    function Dm(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null,
        Dm(e)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (e = t.stateNode,
        e !== null && or(e)),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    var kt = null
      , De = !1;
    function Nn(t, e, n) {
        for (n = n.child; n !== null; )
            Cm(t, e, n),
            n = n.sibling
    }
    function Cm(t, e, n) {
        if (ye && typeof ye.onCommitFiberUnmount == "function")
            try {
                ye.onCommitFiberUnmount(fi, n)
            } catch {}
        switch (n.tag) {
        case 26:
            Jt || un(n, e),
            Nn(t, e, n),
            n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode,
            n.parentNode.removeChild(n));
            break;
        case 27:
            Jt || un(n, e);
            var s = kt
              , r = De;
            ti(n.type) && (kt = n.stateNode,
            De = !1),
            Nn(t, e, n),
            Vs(n.stateNode),
            kt = s,
            De = r;
            break;
        case 5:
            Jt || un(n, e);
        case 6:
            if (s = kt,
            r = De,
            kt = null,
            Nn(t, e, n),
            kt = s,
            De = r,
            kt !== null)
                if (De)
                    try {
                        (kt.nodeType === 9 ? kt.body : kt.nodeName === "HTML" ? kt.ownerDocument.body : kt).removeChild(n.stateNode)
                    } catch (u) {
                        _t(n, e, u)
                    }
                else
                    try {
                        kt.removeChild(n.stateNode)
                    } catch (u) {
                        _t(n, e, u)
                    }
            break;
        case 18:
            kt !== null && (De ? (t = kt,
            gp(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode),
            Gs(t)) : gp(kt, n.stateNode));
            break;
        case 4:
            s = kt,
            r = De,
            kt = n.stateNode.containerInfo,
            De = !0,
            Nn(t, e, n),
            kt = s,
            De = r;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Jt || Zn(2, n, e),
            Jt || Zn(4, n, e),
            Nn(t, e, n);
            break;
        case 1:
            Jt || (un(n, e),
            s = n.stateNode,
            typeof s.componentWillUnmount == "function" && Sm(n, e, s)),
            Nn(t, e, n);
            break;
        case 21:
            Nn(t, e, n);
            break;
        case 22:
            Jt = (s = Jt) || n.memoizedState !== null,
            Nn(t, e, n),
            Jt = s;
            break;
        default:
            Nn(t, e, n)
        }
    }
    function Nm(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null))))
            try {
                Gs(t)
            } catch (n) {
                _t(e, e.return, n)
            }
    }
    function Hb(t) {
        switch (t.tag) {
        case 13:
        case 19:
            var e = t.stateNode;
            return e === null && (e = t.stateNode = new wm),
            e;
        case 22:
            return t = t.stateNode,
            e = t._retryCache,
            e === null && (e = t._retryCache = new wm),
            e;
        default:
            throw Error(o(435, t.tag))
        }
    }
    function Nu(t, e) {
        var n = Hb(t);
        e.forEach(function(s) {
            var r = Fb.bind(null, t, s);
            n.has(s) || (n.add(s),
            s.then(r, r))
        })
    }
    function je(t, e) {
        var n = e.deletions;
        if (n !== null)
            for (var s = 0; s < n.length; s++) {
                var r = n[s]
                  , u = t
                  , g = e
                  , v = g;
                t: for (; v !== null; ) {
                    switch (v.tag) {
                    case 27:
                        if (ti(v.type)) {
                            kt = v.stateNode,
                            De = !1;
                            break t
                        }
                        break;
                    case 5:
                        kt = v.stateNode,
                        De = !1;
                        break t;
                    case 3:
                    case 4:
                        kt = v.stateNode.containerInfo,
                        De = !0;
                        break t
                    }
                    v = v.return
                }
                if (kt === null)
                    throw Error(o(160));
                Cm(u, g, r),
                kt = null,
                De = !1,
                u = r.alternate,
                u !== null && (u.return = null),
                r.return = null
            }
        if (e.subtreeFlags & 13878)
            for (e = e.child; e !== null; )
                Rm(e, t),
                e = e.sibling
    }
    var Ie = null;
    function Rm(t, e) {
        var n = t.alternate
          , s = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            je(e, t),
            ze(t),
            s & 4 && (Zn(3, t, t.return),
            Es(3, t),
            Zn(5, t, t.return));
            break;
        case 1:
            je(e, t),
            ze(t),
            s & 512 && (Jt || n === null || un(n, n.return)),
            s & 64 && Cn && (t = t.updateQueue,
            t !== null && (s = t.callbacks,
            s !== null && (n = t.shared.hiddenCallbacks,
            t.shared.hiddenCallbacks = n === null ? s : n.concat(s))));
            break;
        case 26:
            var r = Ie;
            if (je(e, t),
            ze(t),
            s & 512 && (Jt || n === null || un(n, n.return)),
            s & 4) {
                var u = n !== null ? n.memoizedState : null;
                if (s = t.memoizedState,
                n === null)
                    if (s === null)
                        if (t.stateNode === null) {
                            t: {
                                s = t.type,
                                n = t.memoizedProps,
                                r = r.ownerDocument || r;
                                e: switch (s) {
                                case "title":
                                    u = r.getElementsByTagName("title")[0],
                                    (!u || u[Fa] || u[ve] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = r.createElement(s),
                                    r.head.insertBefore(u, r.querySelector("head > title"))),
                                    pe(u, s, n),
                                    u[ve] = t,
                                    le(u),
                                    s = u;
                                    break t;
                                case "link":
                                    var g = Ep("link", "href", r).get(s + (n.href || ""));
                                    if (g) {
                                        for (var v = 0; v < g.length; v++)
                                            if (u = g[v],
                                            u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                g.splice(v, 1);
                                                break e
                                            }
                                    }
                                    u = r.createElement(s),
                                    pe(u, s, n),
                                    r.head.appendChild(u);
                                    break;
                                case "meta":
                                    if (g = Ep("meta", "content", r).get(s + (n.content || ""))) {
                                        for (v = 0; v < g.length; v++)
                                            if (u = g[v],
                                            u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                g.splice(v, 1);
                                                break e
                                            }
                                    }
                                    u = r.createElement(s),
                                    pe(u, s, n),
                                    r.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(o(468, s))
                                }
                                u[ve] = t,
                                le(u),
                                s = u
                            }
                            t.stateNode = s
                        } else
                            wp(r, t.type, t.stateNode);
                    else
                        t.stateNode = Ap(r, s, t.memoizedProps);
                else
                    u !== s ? (u === null ? n.stateNode !== null && (n = n.stateNode,
                    n.parentNode.removeChild(n)) : u.count--,
                    s === null ? wp(r, t.type, t.stateNode) : Ap(r, s, t.memoizedProps)) : s === null && t.stateNode !== null && wu(t, t.memoizedProps, n.memoizedProps)
            }
            break;
        case 27:
            je(e, t),
            ze(t),
            s & 512 && (Jt || n === null || un(n, n.return)),
            n !== null && s & 4 && wu(t, t.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if (je(e, t),
            ze(t),
            s & 512 && (Jt || n === null || un(n, n.return)),
            t.flags & 32) {
                r = t.stateNode;
                try {
                    Ji(r, "")
                } catch (U) {
                    _t(t, t.return, U)
                }
            }
            s & 4 && t.stateNode != null && (r = t.memoizedProps,
            wu(t, r, n !== null ? n.memoizedProps : r)),
            s & 1024 && (Cu = !0);
            break;
        case 6:
            if (je(e, t),
            ze(t),
            s & 4) {
                if (t.stateNode === null)
                    throw Error(o(162));
                s = t.memoizedProps,
                n = t.stateNode;
                try {
                    n.nodeValue = s
                } catch (U) {
                    _t(t, t.return, U)
                }
            }
            break;
        case 3:
            if (Ao = null,
            r = Ie,
            Ie = So(e.containerInfo),
            je(e, t),
            Ie = r,
            ze(t),
            s & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    Gs(e.containerInfo)
                } catch (U) {
                    _t(t, t.return, U)
                }
            Cu && (Cu = !1,
            Om(t));
            break;
        case 4:
            s = Ie,
            Ie = So(t.stateNode.containerInfo),
            je(e, t),
            ze(t),
            Ie = s;
            break;
        case 12:
            je(e, t),
            ze(t);
            break;
        case 13:
            je(e, t),
            ze(t),
            t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (_u = $t()),
            s & 4 && (s = t.updateQueue,
            s !== null && (t.updateQueue = null,
            Nu(t, s)));
            break;
        case 22:
            r = t.memoizedState !== null;
            var T = n !== null && n.memoizedState !== null
              , z = Cn
              , q = Jt;
            if (Cn = z || r,
            Jt = q || T,
            je(e, t),
            Jt = q,
            Cn = z,
            ze(t),
            s & 8192)
                t: for (e = t.stateNode,
                e._visibility = r ? e._visibility & -2 : e._visibility | 1,
                r && (n === null || T || Cn || Jt || Di(t)),
                n = null,
                e = t; ; ) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (n === null) {
                            T = n = e;
                            try {
                                if (u = T.stateNode,
                                r)
                                    g = u.style,
                                    typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                                else {
                                    v = T.stateNode;
                                    var Q = T.memoizedProps.style
                                      , V = Q != null && Q.hasOwnProperty("display") ? Q.display : null;
                                    v.style.display = V == null || typeof V == "boolean" ? "" : ("" + V).trim()
                                }
                            } catch (U) {
                                _t(T, T.return, U)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (n === null) {
                            T = e;
                            try {
                                T.stateNode.nodeValue = r ? "" : T.memoizedProps
                            } catch (U) {
                                _t(T, T.return, U)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break t;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break t;
                        n === e && (n = null),
                        e = e.return
                    }
                    n === e && (n = null),
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            s & 4 && (s = t.updateQueue,
            s !== null && (n = s.retryQueue,
            n !== null && (s.retryQueue = null,
            Nu(t, n))));
            break;
        case 19:
            je(e, t),
            ze(t),
            s & 4 && (s = t.updateQueue,
            s !== null && (t.updateQueue = null,
            Nu(t, s)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            je(e, t),
            ze(t)
        }
    }
    function ze(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var n, s = t.return; s !== null; ) {
                    if (Am(s)) {
                        n = s;
                        break
                    }
                    s = s.return
                }
                if (n == null)
                    throw Error(o(160));
                switch (n.tag) {
                case 27:
                    var r = n.stateNode
                      , u = Mu(t);
                    oo(t, u, r);
                    break;
                case 5:
                    var g = n.stateNode;
                    n.flags & 32 && (Ji(g, ""),
                    n.flags &= -33);
                    var v = Mu(t);
                    oo(t, v, g);
                    break;
                case 3:
                case 4:
                    var T = n.stateNode.containerInfo
                      , z = Mu(t);
                    Du(t, z, T);
                    break;
                default:
                    throw Error(o(161))
                }
            } catch (q) {
                _t(t, t.return, q)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }
    function Om(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var e = t;
                Om(e),
                e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                t = t.sibling
            }
    }
    function Kn(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; )
                Mm(t, e.alternate, e),
                e = e.sibling
    }
    function Di(t) {
        for (t = t.child; t !== null; ) {
            var e = t;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Zn(4, e, e.return),
                Di(e);
                break;
            case 1:
                un(e, e.return);
                var n = e.stateNode;
                typeof n.componentWillUnmount == "function" && Sm(e, e.return, n),
                Di(e);
                break;
            case 27:
                Vs(e.stateNode);
            case 26:
            case 5:
                un(e, e.return),
                Di(e);
                break;
            case 22:
                e.memoizedState === null && Di(e);
                break;
            case 30:
                Di(e);
                break;
            default:
                Di(e)
            }
            t = t.sibling
        }
    }
    function Pn(t, e, n) {
        for (n = n && (e.subtreeFlags & 8772) !== 0,
        e = e.child; e !== null; ) {
            var s = e.alternate
              , r = t
              , u = e
              , g = u.flags;
            switch (u.tag) {
            case 0:
            case 11:
            case 15:
                Pn(r, u, n),
                Es(4, u);
                break;
            case 1:
                if (Pn(r, u, n),
                s = u,
                r = s.stateNode,
                typeof r.componentDidMount == "function")
                    try {
                        r.componentDidMount()
                    } catch (z) {
                        _t(s, s.return, z)
                    }
                if (s = u,
                r = s.updateQueue,
                r !== null) {
                    var v = s.stateNode;
                    try {
                        var T = r.shared.hiddenCallbacks;
                        if (T !== null)
                            for (r.shared.hiddenCallbacks = null,
                            r = 0; r < T.length; r++)
                                lh(T[r], v)
                    } catch (z) {
                        _t(s, s.return, z)
                    }
                }
                n && g & 64 && xm(u),
                ws(u, u.return);
                break;
            case 27:
                Em(u);
            case 26:
            case 5:
                Pn(r, u, n),
                n && s === null && g & 4 && Tm(u),
                ws(u, u.return);
                break;
            case 12:
                Pn(r, u, n);
                break;
            case 13:
                Pn(r, u, n),
                n && g & 4 && Nm(r, u);
                break;
            case 22:
                u.memoizedState === null && Pn(r, u, n),
                ws(u, u.return);
                break;
            case 30:
                break;
            default:
                Pn(r, u, n)
            }
            e = e.sibling
        }
    }
    function Ru(t, e) {
        var n = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
        t = null,
        e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
        t !== n && (t != null && t.refCount++,
        n != null && cs(n))
    }
    function Ou(t, e) {
        t = null,
        e.alternate !== null && (t = e.alternate.memoizedState.cache),
        e = e.memoizedState.cache,
        e !== t && (e.refCount++,
        t != null && cs(t))
    }
    function cn(t, e, n, s) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                jm(t, e, n, s),
                e = e.sibling
    }
    function jm(t, e, n, s) {
        var r = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            cn(t, e, n, s),
            r & 2048 && Es(9, e);
            break;
        case 1:
            cn(t, e, n, s);
            break;
        case 3:
            cn(t, e, n, s),
            r & 2048 && (t = null,
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            e = e.memoizedState.cache,
            e !== t && (e.refCount++,
            t != null && cs(t)));
            break;
        case 12:
            if (r & 2048) {
                cn(t, e, n, s),
                t = e.stateNode;
                try {
                    var u = e.memoizedProps
                      , g = u.id
                      , v = u.onPostCommit;
                    typeof v == "function" && v(g, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                } catch (T) {
                    _t(e, e.return, T)
                }
            } else
                cn(t, e, n, s);
            break;
        case 13:
            cn(t, e, n, s);
            break;
        case 23:
            break;
        case 22:
            u = e.stateNode,
            g = e.alternate,
            e.memoizedState !== null ? u._visibility & 2 ? cn(t, e, n, s) : Ms(t, e) : u._visibility & 2 ? cn(t, e, n, s) : (u._visibility |= 2,
            pa(t, e, n, s, (e.subtreeFlags & 10256) !== 0)),
            r & 2048 && Ru(g, e);
            break;
        case 24:
            cn(t, e, n, s),
            r & 2048 && Ou(e.alternate, e);
            break;
        default:
            cn(t, e, n, s)
        }
    }
    function pa(t, e, n, s, r) {
        for (r = r && (e.subtreeFlags & 10256) !== 0,
        e = e.child; e !== null; ) {
            var u = t
              , g = e
              , v = n
              , T = s
              , z = g.flags;
            switch (g.tag) {
            case 0:
            case 11:
            case 15:
                pa(u, g, v, T, r),
                Es(8, g);
                break;
            case 23:
                break;
            case 22:
                var q = g.stateNode;
                g.memoizedState !== null ? q._visibility & 2 ? pa(u, g, v, T, r) : Ms(u, g) : (q._visibility |= 2,
                pa(u, g, v, T, r)),
                r && z & 2048 && Ru(g.alternate, g);
                break;
            case 24:
                pa(u, g, v, T, r),
                r && z & 2048 && Ou(g.alternate, g);
                break;
            default:
                pa(u, g, v, T, r)
            }
            e = e.sibling
        }
    }
    function Ms(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var n = t
                  , s = e
                  , r = s.flags;
                switch (s.tag) {
                case 22:
                    Ms(n, s),
                    r & 2048 && Ru(s.alternate, s);
                    break;
                case 24:
                    Ms(n, s),
                    r & 2048 && Ou(s.alternate, s);
                    break;
                default:
                    Ms(n, s)
                }
                e = e.sibling
            }
    }
    var Ds = 8192;
    function ga(t) {
        if (t.subtreeFlags & Ds)
            for (t = t.child; t !== null; )
                zm(t),
                t = t.sibling
    }
    function zm(t) {
        switch (t.tag) {
        case 26:
            ga(t),
            t.flags & Ds && t.memoizedState !== null && wx(Ie, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            ga(t);
            break;
        case 3:
        case 4:
            var e = Ie;
            Ie = So(t.stateNode.containerInfo),
            ga(t),
            Ie = e;
            break;
        case 22:
            t.memoizedState === null && (e = t.alternate,
            e !== null && e.memoizedState !== null ? (e = Ds,
            Ds = 16777216,
            ga(t),
            Ds = e) : ga(t));
            break;
        default:
            ga(t)
        }
    }
    function Vm(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child,
        t !== null)) {
            e.child = null;
            do
                e = t.sibling,
                t.sibling = null,
                t = e;
            while (t !== null)
        }
    }
    function Cs(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var n = 0; n < e.length; n++) {
                    var s = e[n];
                    re = s,
                    Um(s, t)
                }
            Vm(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                _m(t),
                t = t.sibling
    }
    function _m(t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Cs(t),
            t.flags & 2048 && Zn(9, t, t.return);
            break;
        case 3:
            Cs(t);
            break;
        case 12:
            Cs(t);
            break;
        case 22:
            var e = t.stateNode;
            t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3,
            ro(t)) : Cs(t);
            break;
        default:
            Cs(t)
        }
    }
    function ro(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var n = 0; n < e.length; n++) {
                    var s = e[n];
                    re = s,
                    Um(s, t)
                }
            Vm(t)
        }
        for (t = t.child; t !== null; ) {
            switch (e = t,
            e.tag) {
            case 0:
            case 11:
            case 15:
                Zn(8, e, e.return),
                ro(e);
                break;
            case 22:
                n = e.stateNode,
                n._visibility & 2 && (n._visibility &= -3,
                ro(e));
                break;
            default:
                ro(e)
            }
            t = t.sibling
        }
    }
    function Um(t, e) {
        for (; re !== null; ) {
            var n = re;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Zn(8, n, e);
                break;
            case 23:
            case 22:
                if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                    var s = n.memoizedState.cachePool.pool;
                    s != null && s.refCount++
                }
                break;
            case 24:
                cs(n.memoizedState.cache)
            }
            if (s = n.child,
            s !== null)
                s.return = n,
                re = s;
            else
                t: for (n = t; re !== null; ) {
                    s = re;
                    var r = s.sibling
                      , u = s.return;
                    if (Dm(s),
                    s === n) {
                        re = null;
                        break t
                    }
                    if (r !== null) {
                        r.return = u,
                        re = r;
                        break t
                    }
                    re = u
                }
        }
    }
    var qb = {
        getCacheForType: function(t) {
            var e = be(ie)
              , n = e.data.get(t);
            return n === void 0 && (n = t(),
            e.data.set(t, n)),
            n
        }
    }
      , Gb = typeof WeakMap == "function" ? WeakMap : Map
      , Rt = 0
      , Ut = null
      , At = null
      , wt = 0
      , Ot = 0
      , Ve = null
      , Fn = !1
      , ya = !1
      , ju = !1
      , Rn = 0
      , Zt = 0
      , Jn = 0
      , Ci = 0
      , zu = 0
      , Qe = 0
      , va = 0
      , Ns = null
      , Ce = null
      , Vu = !1
      , _u = 0
      , uo = 1 / 0
      , co = null
      , Wn = null
      , me = 0
      , $n = null
      , ba = null
      , xa = 0
      , Uu = 0
      , Bu = null
      , Bm = null
      , Rs = 0
      , Lu = null;
    function _e() {
        if ((Rt & 2) !== 0 && wt !== 0)
            return wt & -wt;
        if (B.T !== null) {
            var t = oa;
            return t !== 0 ? t : Qu()
        }
        return If()
    }
    function Lm() {
        Qe === 0 && (Qe = (wt & 536870912) === 0 || Ct ? Za() : 536870912);
        var t = Xe.current;
        return t !== null && (t.flags |= 32),
        Qe
    }
    function Ue(t, e, n) {
        (t === Ut && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null) && (Sa(t, 0),
        In(t, wt, Qe, !1)),
        Un(t, n),
        ((Rt & 2) === 0 || t !== Ut) && (t === Ut && ((Rt & 2) === 0 && (Ci |= n),
        Zt === 4 && In(t, wt, Qe, !1)),
        fn(t))
    }
    function km(t, e, n) {
        if ((Rt & 6) !== 0)
            throw Error(o(327));
        var s = !n && (e & 124) === 0 && (e & t.expiredLanes) === 0 || di(t, e)
          , r = s ? Qb(t, e) : qu(t, e, !0)
          , u = s;
        do {
            if (r === 0) {
                ya && !s && In(t, e, 0, !1);
                break
            } else {
                if (n = t.current.alternate,
                u && !Yb(n)) {
                    r = qu(t, e, !1),
                    u = !1;
                    continue
                }
                if (r === 2) {
                    if (u = e,
                    t.errorRecoveryDisabledLanes & u)
                        var g = 0;
                    else
                        g = t.pendingLanes & -536870913,
                        g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
                    if (g !== 0) {
                        e = g;
                        t: {
                            var v = t;
                            r = Ns;
                            var T = v.current.memoizedState.isDehydrated;
                            if (T && (Sa(v, g).flags |= 256),
                            g = qu(v, g, !1),
                            g !== 2) {
                                if (ju && !T) {
                                    v.errorRecoveryDisabledLanes |= u,
                                    Ci |= u,
                                    r = 4;
                                    break t
                                }
                                u = Ce,
                                Ce = r,
                                u !== null && (Ce === null ? Ce = u : Ce.push.apply(Ce, u))
                            }
                            r = g
                        }
                        if (u = !1,
                        r !== 2)
                            continue
                    }
                }
                if (r === 1) {
                    Sa(t, 0),
                    In(t, e, 0, !0);
                    break
                }
                t: {
                    switch (s = t,
                    u = r,
                    u) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 4:
                        if ((e & 4194048) !== e)
                            break;
                    case 6:
                        In(s, e, Qe, !Fn);
                        break t;
                    case 2:
                        Ce = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(o(329))
                    }
                    if ((e & 62914560) === e && (r = _u + 300 - $t(),
                    10 < r)) {
                        if (In(s, e, Qe, !Fn),
                        Hi(s, 0, !0) !== 0)
                            break t;
                        s.timeoutHandle = mp(Hm.bind(null, s, n, Ce, co, Vu, e, Qe, Ci, va, Fn, u, 2, -0, 0), r);
                        break t
                    }
                    Hm(s, n, Ce, co, Vu, e, Qe, Ci, va, Fn, u, 0, -0, 0)
                }
            }
            break
        } while (!0);
        fn(t)
    }
    function Hm(t, e, n, s, r, u, g, v, T, z, q, Q, V, U) {
        if (t.timeoutHandle = -1,
        Q = e.subtreeFlags,
        (Q & 8192 || (Q & 16785408) === 16785408) && (Bs = {
            stylesheets: null,
            count: 0,
            unsuspend: Ex
        },
        zm(e),
        Q = Mx(),
        Q !== null)) {
            t.cancelPendingCommit = Q(Km.bind(null, t, e, u, n, s, r, g, v, T, q, 1, V, U)),
            In(t, u, g, !z);
            return
        }
        Km(t, e, u, n, s, r, g, v, T)
    }
    function Yb(t) {
        for (var e = t; ; ) {
            var n = e.tag;
            if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue,
            n !== null && (n = n.stores,
            n !== null)))
                for (var s = 0; s < n.length; s++) {
                    var r = n[s]
                      , u = r.getSnapshot;
                    r = r.value;
                    try {
                        if (!Re(u(), r))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (n = e.child,
            e.subtreeFlags & 16384 && n !== null)
                n.return = e,
                e = n;
            else {
                if (e === t)
                    break;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        return !0;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        }
        return !0
    }
    function In(t, e, n, s) {
        e &= ~zu,
        e &= ~Ci,
        t.suspendedLanes |= e,
        t.pingedLanes &= ~e,
        s && (t.warmLanes |= e),
        s = t.expirationTimes;
        for (var r = e; 0 < r; ) {
            var u = 31 - de(r)
              , g = 1 << u;
            s[u] = -1,
            r &= ~g
        }
        n !== 0 && Sl(t, n, e)
    }
    function fo() {
        return (Rt & 6) === 0 ? (Os(0),
        !1) : !0
    }
    function ku() {
        if (At !== null) {
            if (Ot === 0)
                var t = At.return;
            else
                t = At,
                Tn = Ti = null,
                nu(t),
                ha = null,
                Ss = 0,
                t = At;
            for (; t !== null; )
                bm(t.alternate, t),
                t = t.return;
            At = null
        }
    }
    function Sa(t, e) {
        var n = t.timeoutHandle;
        n !== -1 && (t.timeoutHandle = -1,
        ox(n)),
        n = t.cancelPendingCommit,
        n !== null && (t.cancelPendingCommit = null,
        n()),
        ku(),
        Ut = t,
        At = n = bn(t.current, null),
        wt = e,
        Ot = 0,
        Ve = null,
        Fn = !1,
        ya = di(t, e),
        ju = !1,
        va = Qe = zu = Ci = Jn = Zt = 0,
        Ce = Ns = null,
        Vu = !1,
        (e & 8) !== 0 && (e |= e & 32);
        var s = t.entangledLanes;
        if (s !== 0)
            for (t = t.entanglements,
            s &= e; 0 < s; ) {
                var r = 31 - de(s)
                  , u = 1 << r;
                e |= t[r],
                s &= ~u
            }
        return Rn = e,
        zl(),
        n
    }
    function qm(t, e) {
        xt = null,
        B.H = $l,
        e === ds || e === Gl ? (e = ah(),
        Ot = 3) : e === eh ? (e = ah(),
        Ot = 4) : Ot = e === sm ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1,
        Ve = e,
        At === null && (Zt = 1,
        io(t, He(e, t.current)))
    }
    function Gm() {
        var t = B.H;
        return B.H = $l,
        t === null ? $l : t
    }
    function Ym() {
        var t = B.A;
        return B.A = qb,
        t
    }
    function Hu() {
        Zt = 4,
        Fn || (wt & 4194048) !== wt && Xe.current !== null || (ya = !0),
        (Jn & 134217727) === 0 && (Ci & 134217727) === 0 || Ut === null || In(Ut, wt, Qe, !1)
    }
    function qu(t, e, n) {
        var s = Rt;
        Rt |= 2;
        var r = Gm()
          , u = Ym();
        (Ut !== t || wt !== e) && (co = null,
        Sa(t, e)),
        e = !1;
        var g = Zt;
        t: do
            try {
                if (Ot !== 0 && At !== null) {
                    var v = At
                      , T = Ve;
                    switch (Ot) {
                    case 8:
                        ku(),
                        g = 6;
                        break t;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Xe.current === null && (e = !0);
                        var z = Ot;
                        if (Ot = 0,
                        Ve = null,
                        Ta(t, v, T, z),
                        n && ya) {
                            g = 0;
                            break t
                        }
                        break;
                    default:
                        z = Ot,
                        Ot = 0,
                        Ve = null,
                        Ta(t, v, T, z)
                    }
                }
                Xb(),
                g = Zt;
                break
            } catch (q) {
                qm(t, q)
            }
        while (!0);
        return e && t.shellSuspendCounter++,
        Tn = Ti = null,
        Rt = s,
        B.H = r,
        B.A = u,
        At === null && (Ut = null,
        wt = 0,
        zl()),
        g
    }
    function Xb() {
        for (; At !== null; )
            Xm(At)
    }
    function Qb(t, e) {
        var n = Rt;
        Rt |= 2;
        var s = Gm()
          , r = Ym();
        Ut !== t || wt !== e ? (co = null,
        uo = $t() + 500,
        Sa(t, e)) : ya = di(t, e);
        t: do
            try {
                if (Ot !== 0 && At !== null) {
                    e = At;
                    var u = Ve;
                    e: switch (Ot) {
                    case 1:
                        Ot = 0,
                        Ve = null,
                        Ta(t, e, u, 1);
                        break;
                    case 2:
                    case 9:
                        if (nh(u)) {
                            Ot = 0,
                            Ve = null,
                            Qm(e);
                            break
                        }
                        e = function() {
                            Ot !== 2 && Ot !== 9 || Ut !== t || (Ot = 7),
                            fn(t)
                        }
                        ,
                        u.then(e, e);
                        break t;
                    case 3:
                        Ot = 7;
                        break t;
                    case 4:
                        Ot = 5;
                        break t;
                    case 7:
                        nh(u) ? (Ot = 0,
                        Ve = null,
                        Qm(e)) : (Ot = 0,
                        Ve = null,
                        Ta(t, e, u, 7));
                        break;
                    case 5:
                        var g = null;
                        switch (At.tag) {
                        case 26:
                            g = At.memoizedState;
                        case 5:
                        case 27:
                            var v = At;
                            if (!g || Mp(g)) {
                                Ot = 0,
                                Ve = null;
                                var T = v.sibling;
                                if (T !== null)
                                    At = T;
                                else {
                                    var z = v.return;
                                    z !== null ? (At = z,
                                    ho(z)) : At = null
                                }
                                break e
                            }
                        }
                        Ot = 0,
                        Ve = null,
                        Ta(t, e, u, 5);
                        break;
                    case 6:
                        Ot = 0,
                        Ve = null,
                        Ta(t, e, u, 6);
                        break;
                    case 8:
                        ku(),
                        Zt = 6;
                        break t;
                    default:
                        throw Error(o(462))
                    }
                }
                Zb();
                break
            } catch (q) {
                qm(t, q)
            }
        while (!0);
        return Tn = Ti = null,
        B.H = s,
        B.A = r,
        Rt = n,
        At !== null ? 0 : (Ut = null,
        wt = 0,
        zl(),
        Zt)
    }
    function Zb() {
        for (; At !== null && !fe(); )
            Xm(At)
    }
    function Xm(t) {
        var e = ym(t.alternate, t, Rn);
        t.memoizedProps = t.pendingProps,
        e === null ? ho(t) : At = e
    }
    function Qm(t) {
        var e = t
          , n = e.alternate;
        switch (e.tag) {
        case 15:
        case 0:
            e = fm(n, e, e.pendingProps, e.type, void 0, wt);
            break;
        case 11:
            e = fm(n, e, e.pendingProps, e.type.render, e.ref, wt);
            break;
        case 5:
            nu(e);
        default:
            bm(n, e),
            e = At = Zd(e, Rn),
            e = ym(n, e, Rn)
        }
        t.memoizedProps = t.pendingProps,
        e === null ? ho(t) : At = e
    }
    function Ta(t, e, n, s) {
        Tn = Ti = null,
        nu(e),
        ha = null,
        Ss = 0;
        var r = e.return;
        try {
            if (_b(t, r, e, n, wt)) {
                Zt = 1,
                io(t, He(n, t.current)),
                At = null;
                return
            }
        } catch (u) {
            if (r !== null)
                throw At = r,
                u;
            Zt = 1,
            io(t, He(n, t.current)),
            At = null;
            return
        }
        e.flags & 32768 ? (Ct || s === 1 ? t = !0 : ya || (wt & 536870912) !== 0 ? t = !1 : (Fn = t = !0,
        (s === 2 || s === 9 || s === 3 || s === 6) && (s = Xe.current,
        s !== null && s.tag === 13 && (s.flags |= 16384))),
        Zm(e, t)) : ho(e)
    }
    function ho(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                Zm(e, Fn);
                return
            }
            t = e.return;
            var n = Bb(e.alternate, e, Rn);
            if (n !== null) {
                At = n;
                return
            }
            if (e = e.sibling,
            e !== null) {
                At = e;
                return
            }
            At = e = t
        } while (e !== null);
        Zt === 0 && (Zt = 5)
    }
    function Zm(t, e) {
        do {
            var n = Lb(t.alternate, t);
            if (n !== null) {
                n.flags &= 32767,
                At = n;
                return
            }
            if (n = t.return,
            n !== null && (n.flags |= 32768,
            n.subtreeFlags = 0,
            n.deletions = null),
            !e && (t = t.sibling,
            t !== null)) {
                At = t;
                return
            }
            At = t = n
        } while (t !== null);
        Zt = 6,
        At = null
    }
    function Km(t, e, n, s, r, u, g, v, T) {
        t.cancelPendingCommit = null;
        do
            mo();
        while (me !== 0);
        if ((Rt & 6) !== 0)
            throw Error(o(327));
        if (e !== null) {
            if (e === t.current)
                throw Error(o(177));
            if (u = e.lanes | e.childLanes,
            u |= Or,
            xl(t, n, u, g, v, T),
            t === Ut && (At = Ut = null,
            wt = 0),
            ba = e,
            $n = t,
            xa = n,
            Uu = u,
            Bu = r,
            Bm = s,
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null,
            t.callbackPriority = 0,
            Jb(sn, function() {
                return $m(),
                null
            })) : (t.callbackNode = null,
            t.callbackPriority = 0),
            s = (e.flags & 13878) !== 0,
            (e.subtreeFlags & 13878) !== 0 || s) {
                s = B.T,
                B.T = null,
                r = Z.p,
                Z.p = 2,
                g = Rt,
                Rt |= 4;
                try {
                    kb(t, e, n)
                } finally {
                    Rt = g,
                    Z.p = r,
                    B.T = s
                }
            }
            me = 1,
            Pm(),
            Fm(),
            Jm()
        }
    }
    function Pm() {
        if (me === 1) {
            me = 0;
            var t = $n
              , e = ba
              , n = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || n) {
                n = B.T,
                B.T = null;
                var s = Z.p;
                Z.p = 2;
                var r = Rt;
                Rt |= 4;
                try {
                    Rm(e, t);
                    var u = Iu
                      , g = Ud(t.containerInfo)
                      , v = u.focusedElem
                      , T = u.selectionRange;
                    if (g !== v && v && v.ownerDocument && _d(v.ownerDocument.documentElement, v)) {
                        if (T !== null && Mr(v)) {
                            var z = T.start
                              , q = T.end;
                            if (q === void 0 && (q = z),
                            "selectionStart"in v)
                                v.selectionStart = z,
                                v.selectionEnd = Math.min(q, v.value.length);
                            else {
                                var Q = v.ownerDocument || document
                                  , V = Q && Q.defaultView || window;
                                if (V.getSelection) {
                                    var U = V.getSelection()
                                      , ft = v.textContent.length
                                      , lt = Math.min(T.start, ft)
                                      , Vt = T.end === void 0 ? lt : Math.min(T.end, ft);
                                    !U.extend && lt > Vt && (g = Vt,
                                    Vt = lt,
                                    lt = g);
                                    var C = Vd(v, lt)
                                      , w = Vd(v, Vt);
                                    if (C && w && (U.rangeCount !== 1 || U.anchorNode !== C.node || U.anchorOffset !== C.offset || U.focusNode !== w.node || U.focusOffset !== w.offset)) {
                                        var O = Q.createRange();
                                        O.setStart(C.node, C.offset),
                                        U.removeAllRanges(),
                                        lt > Vt ? (U.addRange(O),
                                        U.extend(w.node, w.offset)) : (O.setEnd(w.node, w.offset),
                                        U.addRange(O))
                                    }
                                }
                            }
                        }
                        for (Q = [],
                        U = v; U = U.parentNode; )
                            U.nodeType === 1 && Q.push({
                                element: U,
                                left: U.scrollLeft,
                                top: U.scrollTop
                            });
                        for (typeof v.focus == "function" && v.focus(),
                        v = 0; v < Q.length; v++) {
                            var X = Q[v];
                            X.element.scrollLeft = X.left,
                            X.element.scrollTop = X.top
                        }
                    }
                    Mo = !!$u,
                    Iu = $u = null
                } finally {
                    Rt = r,
                    Z.p = s,
                    B.T = n
                }
            }
            t.current = e,
            me = 2
        }
    }
    function Fm() {
        if (me === 2) {
            me = 0;
            var t = $n
              , e = ba
              , n = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || n) {
                n = B.T,
                B.T = null;
                var s = Z.p;
                Z.p = 2;
                var r = Rt;
                Rt |= 4;
                try {
                    Mm(t, e.alternate, e)
                } finally {
                    Rt = r,
                    Z.p = s,
                    B.T = n
                }
            }
            me = 3
        }
    }
    function Jm() {
        if (me === 4 || me === 3) {
            me = 0,
            Be();
            var t = $n
              , e = ba
              , n = xa
              , s = Bm;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? me = 5 : (me = 0,
            ba = $n = null,
            Wm(t, t.pendingLanes));
            var r = t.pendingLanes;
            if (r === 0 && (Wn = null),
            Pa(n),
            e = e.stateNode,
            ye && typeof ye.onCommitFiberRoot == "function")
                try {
                    ye.onCommitFiberRoot(fi, e, void 0, (e.current.flags & 128) === 128)
                } catch {}
            if (s !== null) {
                e = B.T,
                r = Z.p,
                Z.p = 2,
                B.T = null;
                try {
                    for (var u = t.onRecoverableError, g = 0; g < s.length; g++) {
                        var v = s[g];
                        u(v.value, {
                            componentStack: v.stack
                        })
                    }
                } finally {
                    B.T = e,
                    Z.p = r
                }
            }
            (xa & 3) !== 0 && mo(),
            fn(t),
            r = t.pendingLanes,
            (n & 4194090) !== 0 && (r & 42) !== 0 ? t === Lu ? Rs++ : (Rs = 0,
            Lu = t) : Rs = 0,
            Os(0)
        }
    }
    function Wm(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache,
        e != null && (t.pooledCache = null,
        cs(e)))
    }
    function mo(t) {
        return Pm(),
        Fm(),
        Jm(),
        $m()
    }
    function $m() {
        if (me !== 5)
            return !1;
        var t = $n
          , e = Uu;
        Uu = 0;
        var n = Pa(xa)
          , s = B.T
          , r = Z.p;
        try {
            Z.p = 32 > n ? 32 : n,
            B.T = null,
            n = Bu,
            Bu = null;
            var u = $n
              , g = xa;
            if (me = 0,
            ba = $n = null,
            xa = 0,
            (Rt & 6) !== 0)
                throw Error(o(331));
            var v = Rt;
            if (Rt |= 4,
            _m(u.current),
            jm(u, u.current, g, n),
            Rt = v,
            Os(0, !1),
            ye && typeof ye.onPostCommitFiberRoot == "function")
                try {
                    ye.onPostCommitFiberRoot(fi, u)
                } catch {}
            return !0
        } finally {
            Z.p = r,
            B.T = s,
            Wm(t, e)
        }
    }
    function Im(t, e, n) {
        e = He(n, e),
        e = gu(t.stateNode, e, 2),
        t = Gn(t, e, 2),
        t !== null && (Un(t, 2),
        fn(t))
    }
    function _t(t, e, n) {
        if (t.tag === 3)
            Im(t, t, n);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    Im(e, t, n);
                    break
                } else if (e.tag === 1) {
                    var s = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Wn === null || !Wn.has(s))) {
                        t = He(n, t),
                        n = im(2),
                        s = Gn(e, n, 2),
                        s !== null && (am(n, s, e, t),
                        Un(s, 2),
                        fn(s));
                        break
                    }
                }
                e = e.return
            }
    }
    function Gu(t, e, n) {
        var s = t.pingCache;
        if (s === null) {
            s = t.pingCache = new Gb;
            var r = new Set;
            s.set(e, r)
        } else
            r = s.get(e),
            r === void 0 && (r = new Set,
            s.set(e, r));
        r.has(n) || (ju = !0,
        r.add(n),
        t = Kb.bind(null, t, e, n),
        e.then(t, t))
    }
    function Kb(t, e, n) {
        var s = t.pingCache;
        s !== null && s.delete(e),
        t.pingedLanes |= t.suspendedLanes & n,
        t.warmLanes &= ~n,
        Ut === t && (wt & n) === n && (Zt === 4 || Zt === 3 && (wt & 62914560) === wt && 300 > $t() - _u ? (Rt & 2) === 0 && Sa(t, 0) : zu |= n,
        va === wt && (va = 0)),
        fn(t)
    }
    function tp(t, e) {
        e === 0 && (e = bl()),
        t = ia(t, e),
        t !== null && (Un(t, e),
        fn(t))
    }
    function Pb(t) {
        var e = t.memoizedState
          , n = 0;
        e !== null && (n = e.retryLane),
        tp(t, n)
    }
    function Fb(t, e) {
        var n = 0;
        switch (t.tag) {
        case 13:
            var s = t.stateNode
              , r = t.memoizedState;
            r !== null && (n = r.retryLane);
            break;
        case 19:
            s = t.stateNode;
            break;
        case 22:
            s = t.stateNode._retryCache;
            break;
        default:
            throw Error(o(314))
        }
        s !== null && s.delete(e),
        tp(t, n)
    }
    function Jb(t, e) {
        return Nt(t, e)
    }
    var po = null
      , Aa = null
      , Yu = !1
      , go = !1
      , Xu = !1
      , Ni = 0;
    function fn(t) {
        t !== Aa && t.next === null && (Aa === null ? po = Aa = t : Aa = Aa.next = t),
        go = !0,
        Yu || (Yu = !0,
        $b())
    }
    function Os(t, e) {
        if (!Xu && go) {
            Xu = !0;
            do
                for (var n = !1, s = po; s !== null; ) {
                    if (t !== 0) {
                        var r = s.pendingLanes;
                        if (r === 0)
                            var u = 0;
                        else {
                            var g = s.suspendedLanes
                              , v = s.pingedLanes;
                            u = (1 << 31 - de(42 | t) + 1) - 1,
                            u &= r & ~(g & ~v),
                            u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (n = !0,
                        ap(s, u))
                    } else
                        u = wt,
                        u = Hi(s, s === Ut ? u : 0, s.cancelPendingCommit !== null || s.timeoutHandle !== -1),
                        (u & 3) === 0 || di(s, u) || (n = !0,
                        ap(s, u));
                    s = s.next
                }
            while (n);
            Xu = !1
        }
    }
    function Wb() {
        ep()
    }
    function ep() {
        go = Yu = !1;
        var t = 0;
        Ni !== 0 && (lx() && (t = Ni),
        Ni = 0);
        for (var e = $t(), n = null, s = po; s !== null; ) {
            var r = s.next
              , u = np(s, e);
            u === 0 ? (s.next = null,
            n === null ? po = r : n.next = r,
            r === null && (Aa = n)) : (n = s,
            (t !== 0 || (u & 3) !== 0) && (go = !0)),
            s = r
        }
        Os(t)
    }
    function np(t, e) {
        for (var n = t.suspendedLanes, s = t.pingedLanes, r = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
            var g = 31 - de(u)
              , v = 1 << g
              , T = r[g];
            T === -1 ? ((v & n) === 0 || (v & s) !== 0) && (r[g] = sr(v, e)) : T <= e && (t.expiredLanes |= v),
            u &= ~v
        }
        if (e = Ut,
        n = wt,
        n = Hi(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        s = t.callbackNode,
        n === 0 || t === e && (Ot === 2 || Ot === 9) || t.cancelPendingCommit !== null)
            return s !== null && s !== null && Lt(s),
            t.callbackNode = null,
            t.callbackPriority = 0;
        if ((n & 3) === 0 || di(t, n)) {
            if (e = n & -n,
            e === t.callbackPriority)
                return e;
            switch (s !== null && Lt(s),
            Pa(n)) {
            case 2:
            case 8:
                n = an;
                break;
            case 32:
                n = sn;
                break;
            case 268435456:
                n = Li;
                break;
            default:
                n = sn
            }
            return s = ip.bind(null, t),
            n = Nt(n, s),
            t.callbackPriority = e,
            t.callbackNode = n,
            e
        }
        return s !== null && s !== null && Lt(s),
        t.callbackPriority = 2,
        t.callbackNode = null,
        2
    }
    function ip(t, e) {
        if (me !== 0 && me !== 5)
            return t.callbackNode = null,
            t.callbackPriority = 0,
            null;
        var n = t.callbackNode;
        if (mo() && t.callbackNode !== n)
            return null;
        var s = wt;
        return s = Hi(t, t === Ut ? s : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        s === 0 ? null : (km(t, s, e),
        np(t, $t()),
        t.callbackNode != null && t.callbackNode === n ? ip.bind(null, t) : null)
    }
    function ap(t, e) {
        if (mo())
            return null;
        km(t, e, !0)
    }
    function $b() {
        rx(function() {
            (Rt & 6) !== 0 ? Nt(We, Wb) : ep()
        })
    }
    function Qu() {
        return Ni === 0 && (Ni = Za()),
        Ni
    }
    function sp(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Ml("" + t)
    }
    function lp(t, e) {
        var n = e.ownerDocument.createElement("input");
        return n.name = e.name,
        n.value = e.value,
        t.id && n.setAttribute("form", t.id),
        e.parentNode.insertBefore(n, e),
        t = new FormData(t),
        n.parentNode.removeChild(n),
        t
    }
    function Ib(t, e, n, s, r) {
        if (e === "submit" && n && n.stateNode === r) {
            var u = sp((r[Ee] || null).action)
              , g = s.submitter;
            g && (e = (e = g[Ee] || null) ? sp(e.formAction) : g.getAttribute("formAction"),
            e !== null && (u = e,
            g = null));
            var v = new Rl("action","action",null,s,r);
            t.push({
                event: v,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (s.defaultPrevented) {
                            if (Ni !== 0) {
                                var T = g ? lp(r, g) : new FormData(r);
                                fu(n, {
                                    pending: !0,
                                    data: T,
                                    method: r.method,
                                    action: u
                                }, null, T)
                            }
                        } else
                            typeof u == "function" && (v.preventDefault(),
                            T = g ? lp(r, g) : new FormData(r),
                            fu(n, {
                                pending: !0,
                                data: T,
                                method: r.method,
                                action: u
                            }, u, T))
                    },
                    currentTarget: r
                }]
            })
        }
    }
    for (var Zu = 0; Zu < Rr.length; Zu++) {
        var Ku = Rr[Zu]
          , tx = Ku.toLowerCase()
          , ex = Ku[0].toUpperCase() + Ku.slice(1);
        $e(tx, "on" + ex)
    }
    $e(kd, "onAnimationEnd"),
    $e(Hd, "onAnimationIteration"),
    $e(qd, "onAnimationStart"),
    $e("dblclick", "onDoubleClick"),
    $e("focusin", "onFocus"),
    $e("focusout", "onBlur"),
    $e(vb, "onTransitionRun"),
    $e(bb, "onTransitionStart"),
    $e(xb, "onTransitionCancel"),
    $e(Gd, "onTransitionEnd"),
    Ki("onMouseEnter", ["mouseout", "mouseover"]),
    Ki("onMouseLeave", ["mouseout", "mouseover"]),
    Ki("onPointerEnter", ["pointerout", "pointerover"]),
    Ki("onPointerLeave", ["pointerout", "pointerover"]),
    hi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    hi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    hi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    hi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    hi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    hi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var js = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , nx = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(js));
    function op(t, e) {
        e = (e & 4) !== 0;
        for (var n = 0; n < t.length; n++) {
            var s = t[n]
              , r = s.event;
            s = s.listeners;
            t: {
                var u = void 0;
                if (e)
                    for (var g = s.length - 1; 0 <= g; g--) {
                        var v = s[g]
                          , T = v.instance
                          , z = v.currentTarget;
                        if (v = v.listener,
                        T !== u && r.isPropagationStopped())
                            break t;
                        u = v,
                        r.currentTarget = z;
                        try {
                            u(r)
                        } catch (q) {
                            no(q)
                        }
                        r.currentTarget = null,
                        u = T
                    }
                else
                    for (g = 0; g < s.length; g++) {
                        if (v = s[g],
                        T = v.instance,
                        z = v.currentTarget,
                        v = v.listener,
                        T !== u && r.isPropagationStopped())
                            break t;
                        u = v,
                        r.currentTarget = z;
                        try {
                            u(r)
                        } catch (q) {
                            no(q)
                        }
                        r.currentTarget = null,
                        u = T
                    }
            }
        }
    }
    function Et(t, e) {
        var n = e[lr];
        n === void 0 && (n = e[lr] = new Set);
        var s = t + "__bubble";
        n.has(s) || (rp(e, t, 2, !1),
        n.add(s))
    }
    function Pu(t, e, n) {
        var s = 0;
        e && (s |= 4),
        rp(n, t, s, e)
    }
    var yo = "_reactListening" + Math.random().toString(36).slice(2);
    function Fu(t) {
        if (!t[yo]) {
            t[yo] = !0,
            ed.forEach(function(n) {
                n !== "selectionchange" && (nx.has(n) || Pu(n, !1, t),
                Pu(n, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[yo] || (e[yo] = !0,
            Pu("selectionchange", !1, e))
        }
    }
    function rp(t, e, n, s) {
        switch (jp(e)) {
        case 2:
            var r = Nx;
            break;
        case 8:
            r = Rx;
            break;
        default:
            r = uc
        }
        n = r.bind(null, e, n, t),
        r = void 0,
        !yr || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (r = !0),
        s ? r !== void 0 ? t.addEventListener(e, n, {
            capture: !0,
            passive: r
        }) : t.addEventListener(e, n, !0) : r !== void 0 ? t.addEventListener(e, n, {
            passive: r
        }) : t.addEventListener(e, n, !1)
    }
    function Ju(t, e, n, s, r) {
        var u = s;
        if ((e & 1) === 0 && (e & 2) === 0 && s !== null)
            t: for (; ; ) {
                if (s === null)
                    return;
                var g = s.tag;
                if (g === 3 || g === 4) {
                    var v = s.stateNode.containerInfo;
                    if (v === r)
                        break;
                    if (g === 4)
                        for (g = s.return; g !== null; ) {
                            var T = g.tag;
                            if ((T === 3 || T === 4) && g.stateNode.containerInfo === r)
                                return;
                            g = g.return
                        }
                    for (; v !== null; ) {
                        if (g = Xi(v),
                        g === null)
                            return;
                        if (T = g.tag,
                        T === 5 || T === 6 || T === 26 || T === 27) {
                            s = u = g;
                            continue t
                        }
                        v = v.parentNode
                    }
                }
                s = s.return
            }
        pd(function() {
            var z = u
              , q = pr(n)
              , Q = [];
            t: {
                var V = Yd.get(t);
                if (V !== void 0) {
                    var U = Rl
                      , ft = t;
                    switch (t) {
                    case "keypress":
                        if (Cl(n) === 0)
                            break t;
                    case "keydown":
                    case "keyup":
                        U = Jv;
                        break;
                    case "focusin":
                        ft = "focus",
                        U = Sr;
                        break;
                    case "focusout":
                        ft = "blur",
                        U = Sr;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        U = Sr;
                        break;
                    case "click":
                        if (n.button === 2)
                            break t;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        U = vd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        U = Lv;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        U = Iv;
                        break;
                    case kd:
                    case Hd:
                    case qd:
                        U = qv;
                        break;
                    case Gd:
                        U = eb;
                        break;
                    case "scroll":
                    case "scrollend":
                        U = Uv;
                        break;
                    case "wheel":
                        U = ib;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        U = Yv;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        U = xd;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        U = sb
                    }
                    var lt = (e & 4) !== 0
                      , Vt = !lt && (t === "scroll" || t === "scrollend")
                      , C = lt ? V !== null ? V + "Capture" : null : V;
                    lt = [];
                    for (var w = z, O; w !== null; ) {
                        var X = w;
                        if (O = X.stateNode,
                        X = X.tag,
                        X !== 5 && X !== 26 && X !== 27 || O === null || C === null || (X = Wa(w, C),
                        X != null && lt.push(zs(w, X, O))),
                        Vt)
                            break;
                        w = w.return
                    }
                    0 < lt.length && (V = new U(V,ft,null,n,q),
                    Q.push({
                        event: V,
                        listeners: lt
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (V = t === "mouseover" || t === "pointerover",
                    U = t === "mouseout" || t === "pointerout",
                    V && n !== mr && (ft = n.relatedTarget || n.fromElement) && (Xi(ft) || ft[Yi]))
                        break t;
                    if ((U || V) && (V = q.window === q ? q : (V = q.ownerDocument) ? V.defaultView || V.parentWindow : window,
                    U ? (ft = n.relatedTarget || n.toElement,
                    U = z,
                    ft = ft ? Xi(ft) : null,
                    ft !== null && (Vt = d(ft),
                    lt = ft.tag,
                    ft !== Vt || lt !== 5 && lt !== 27 && lt !== 6) && (ft = null)) : (U = null,
                    ft = z),
                    U !== ft)) {
                        if (lt = vd,
                        X = "onMouseLeave",
                        C = "onMouseEnter",
                        w = "mouse",
                        (t === "pointerout" || t === "pointerover") && (lt = xd,
                        X = "onPointerLeave",
                        C = "onPointerEnter",
                        w = "pointer"),
                        Vt = U == null ? V : Ja(U),
                        O = ft == null ? V : Ja(ft),
                        V = new lt(X,w + "leave",U,n,q),
                        V.target = Vt,
                        V.relatedTarget = O,
                        X = null,
                        Xi(q) === z && (lt = new lt(C,w + "enter",ft,n,q),
                        lt.target = O,
                        lt.relatedTarget = Vt,
                        X = lt),
                        Vt = X,
                        U && ft)
                            e: {
                                for (lt = U,
                                C = ft,
                                w = 0,
                                O = lt; O; O = Ea(O))
                                    w++;
                                for (O = 0,
                                X = C; X; X = Ea(X))
                                    O++;
                                for (; 0 < w - O; )
                                    lt = Ea(lt),
                                    w--;
                                for (; 0 < O - w; )
                                    C = Ea(C),
                                    O--;
                                for (; w--; ) {
                                    if (lt === C || C !== null && lt === C.alternate)
                                        break e;
                                    lt = Ea(lt),
                                    C = Ea(C)
                                }
                                lt = null
                            }
                        else
                            lt = null;
                        U !== null && up(Q, V, U, lt, !1),
                        ft !== null && Vt !== null && up(Q, Vt, ft, lt, !0)
                    }
                }
                t: {
                    if (V = z ? Ja(z) : window,
                    U = V.nodeName && V.nodeName.toLowerCase(),
                    U === "select" || U === "input" && V.type === "file")
                        var et = Cd;
                    else if (Md(V))
                        if (Nd)
                            et = pb;
                        else {
                            et = hb;
                            var Tt = db
                        }
                    else
                        U = V.nodeName,
                        !U || U.toLowerCase() !== "input" || V.type !== "checkbox" && V.type !== "radio" ? z && hr(z.elementType) && (et = Cd) : et = mb;
                    if (et && (et = et(t, z))) {
                        Dd(Q, et, n, q);
                        break t
                    }
                    Tt && Tt(t, V, z),
                    t === "focusout" && z && V.type === "number" && z.memoizedProps.value != null && dr(V, "number", V.value)
                }
                switch (Tt = z ? Ja(z) : window,
                t) {
                case "focusin":
                    (Md(Tt) || Tt.contentEditable === "true") && (ta = Tt,
                    Dr = z,
                    ss = null);
                    break;
                case "focusout":
                    ss = Dr = ta = null;
                    break;
                case "mousedown":
                    Cr = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Cr = !1,
                    Bd(Q, n, q);
                    break;
                case "selectionchange":
                    if (yb)
                        break;
                case "keydown":
                case "keyup":
                    Bd(Q, n, q)
                }
                var at;
                if (Ar)
                    t: {
                        switch (t) {
                        case "compositionstart":
                            var ut = "onCompositionStart";
                            break t;
                        case "compositionend":
                            ut = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            ut = "onCompositionUpdate";
                            break t
                        }
                        ut = void 0
                    }
                else
                    Ii ? Ed(t, n) && (ut = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (ut = "onCompositionStart");
                ut && (Sd && n.locale !== "ko" && (Ii || ut !== "onCompositionStart" ? ut === "onCompositionEnd" && Ii && (at = gd()) : (Ln = q,
                vr = "value"in Ln ? Ln.value : Ln.textContent,
                Ii = !0)),
                Tt = vo(z, ut),
                0 < Tt.length && (ut = new bd(ut,t,null,n,q),
                Q.push({
                    event: ut,
                    listeners: Tt
                }),
                at ? ut.data = at : (at = wd(n),
                at !== null && (ut.data = at)))),
                (at = ob ? rb(t, n) : ub(t, n)) && (ut = vo(z, "onBeforeInput"),
                0 < ut.length && (Tt = new bd("onBeforeInput","beforeinput",null,n,q),
                Q.push({
                    event: Tt,
                    listeners: ut
                }),
                Tt.data = at)),
                Ib(Q, t, z, n, q)
            }
            op(Q, e)
        })
    }
    function zs(t, e, n) {
        return {
            instance: t,
            listener: e,
            currentTarget: n
        }
    }
    function vo(t, e) {
        for (var n = e + "Capture", s = []; t !== null; ) {
            var r = t
              , u = r.stateNode;
            if (r = r.tag,
            r !== 5 && r !== 26 && r !== 27 || u === null || (r = Wa(t, n),
            r != null && s.unshift(zs(t, r, u)),
            r = Wa(t, e),
            r != null && s.push(zs(t, r, u))),
            t.tag === 3)
                return s;
            t = t.return
        }
        return []
    }
    function Ea(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }
    function up(t, e, n, s, r) {
        for (var u = e._reactName, g = []; n !== null && n !== s; ) {
            var v = n
              , T = v.alternate
              , z = v.stateNode;
            if (v = v.tag,
            T !== null && T === s)
                break;
            v !== 5 && v !== 26 && v !== 27 || z === null || (T = z,
            r ? (z = Wa(n, u),
            z != null && g.unshift(zs(n, z, T))) : r || (z = Wa(n, u),
            z != null && g.push(zs(n, z, T)))),
            n = n.return
        }
        g.length !== 0 && t.push({
            event: e,
            listeners: g
        })
    }
    var ix = /\r\n?/g
      , ax = /\u0000|\uFFFD/g;
    function cp(t) {
        return (typeof t == "string" ? t : "" + t).replace(ix, `
`).replace(ax, "")
    }
    function fp(t, e) {
        return e = cp(e),
        cp(t) === e
    }
    function bo() {}
    function zt(t, e, n, s, r, u) {
        switch (n) {
        case "children":
            typeof s == "string" ? e === "body" || e === "textarea" && s === "" || Ji(t, s) : (typeof s == "number" || typeof s == "bigint") && e !== "body" && Ji(t, "" + s);
            break;
        case "className":
            Al(t, "class", s);
            break;
        case "tabIndex":
            Al(t, "tabindex", s);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Al(t, n, s);
            break;
        case "style":
            hd(t, s, u);
            break;
        case "data":
            if (e !== "object") {
                Al(t, "data", s);
                break
            }
        case "src":
        case "href":
            if (s === "" && (e !== "a" || n !== "href")) {
                t.removeAttribute(n);
                break
            }
            if (s == null || typeof s == "function" || typeof s == "symbol" || typeof s == "boolean") {
                t.removeAttribute(n);
                break
            }
            s = Ml("" + s),
            t.setAttribute(n, s);
            break;
        case "action":
        case "formAction":
            if (typeof s == "function") {
                t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof u == "function" && (n === "formAction" ? (e !== "input" && zt(t, e, "name", r.name, r, null),
                zt(t, e, "formEncType", r.formEncType, r, null),
                zt(t, e, "formMethod", r.formMethod, r, null),
                zt(t, e, "formTarget", r.formTarget, r, null)) : (zt(t, e, "encType", r.encType, r, null),
                zt(t, e, "method", r.method, r, null),
                zt(t, e, "target", r.target, r, null)));
            if (s == null || typeof s == "symbol" || typeof s == "boolean") {
                t.removeAttribute(n);
                break
            }
            s = Ml("" + s),
            t.setAttribute(n, s);
            break;
        case "onClick":
            s != null && (t.onclick = bo);
            break;
        case "onScroll":
            s != null && Et("scroll", t);
            break;
        case "onScrollEnd":
            s != null && Et("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (s != null) {
                if (typeof s != "object" || !("__html"in s))
                    throw Error(o(61));
                if (n = s.__html,
                n != null) {
                    if (r.children != null)
                        throw Error(o(60));
                    t.innerHTML = n
                }
            }
            break;
        case "multiple":
            t.multiple = s && typeof s != "function" && typeof s != "symbol";
            break;
        case "muted":
            t.muted = s && typeof s != "function" && typeof s != "symbol";
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
            if (s == null || typeof s == "function" || typeof s == "boolean" || typeof s == "symbol") {
                t.removeAttribute("xlink:href");
                break
            }
            n = Ml("" + s),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            s != null && typeof s != "function" && typeof s != "symbol" ? t.setAttribute(n, "" + s) : t.removeAttribute(n);
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
            s && typeof s != "function" && typeof s != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
            break;
        case "capture":
        case "download":
            s === !0 ? t.setAttribute(n, "") : s !== !1 && s != null && typeof s != "function" && typeof s != "symbol" ? t.setAttribute(n, s) : t.removeAttribute(n);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            s != null && typeof s != "function" && typeof s != "symbol" && !isNaN(s) && 1 <= s ? t.setAttribute(n, s) : t.removeAttribute(n);
            break;
        case "rowSpan":
        case "start":
            s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s) ? t.removeAttribute(n) : t.setAttribute(n, s);
            break;
        case "popover":
            Et("beforetoggle", t),
            Et("toggle", t),
            Tl(t, "popover", s);
            break;
        case "xlinkActuate":
            yn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
            break;
        case "xlinkArcrole":
            yn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
            break;
        case "xlinkRole":
            yn(t, "http://www.w3.org/1999/xlink", "xlink:role", s);
            break;
        case "xlinkShow":
            yn(t, "http://www.w3.org/1999/xlink", "xlink:show", s);
            break;
        case "xlinkTitle":
            yn(t, "http://www.w3.org/1999/xlink", "xlink:title", s);
            break;
        case "xlinkType":
            yn(t, "http://www.w3.org/1999/xlink", "xlink:type", s);
            break;
        case "xmlBase":
            yn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
            break;
        case "xmlLang":
            yn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
            break;
        case "xmlSpace":
            yn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
            break;
        case "is":
            Tl(t, "is", s);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Vv.get(n) || n,
            Tl(t, n, s))
        }
    }
    function Wu(t, e, n, s, r, u) {
        switch (n) {
        case "style":
            hd(t, s, u);
            break;
        case "dangerouslySetInnerHTML":
            if (s != null) {
                if (typeof s != "object" || !("__html"in s))
                    throw Error(o(61));
                if (n = s.__html,
                n != null) {
                    if (r.children != null)
                        throw Error(o(60));
                    t.innerHTML = n
                }
            }
            break;
        case "children":
            typeof s == "string" ? Ji(t, s) : (typeof s == "number" || typeof s == "bigint") && Ji(t, "" + s);
            break;
        case "onScroll":
            s != null && Et("scroll", t);
            break;
        case "onScrollEnd":
            s != null && Et("scrollend", t);
            break;
        case "onClick":
            s != null && (t.onclick = bo);
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
            if (!nd.hasOwnProperty(n))
                t: {
                    if (n[0] === "o" && n[1] === "n" && (r = n.endsWith("Capture"),
                    e = n.slice(2, r ? n.length - 7 : void 0),
                    u = t[Ee] || null,
                    u = u != null ? u[n] : null,
                    typeof u == "function" && t.removeEventListener(e, u, r),
                    typeof s == "function")) {
                        typeof u != "function" && u !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)),
                        t.addEventListener(e, s, r);
                        break t
                    }
                    n in t ? t[n] = s : s === !0 ? t.setAttribute(n, "") : Tl(t, n, s)
                }
        }
    }
    function pe(t, e, n) {
        switch (e) {
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
            Et("error", t),
            Et("load", t);
            var s = !1, r = !1, u;
            for (u in n)
                if (n.hasOwnProperty(u)) {
                    var g = n[u];
                    if (g != null)
                        switch (u) {
                        case "src":
                            s = !0;
                            break;
                        case "srcSet":
                            r = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, e));
                        default:
                            zt(t, e, u, g, n, null)
                        }
                }
            r && zt(t, e, "srcSet", n.srcSet, n, null),
            s && zt(t, e, "src", n.src, n, null);
            return;
        case "input":
            Et("invalid", t);
            var v = u = g = r = null
              , T = null
              , z = null;
            for (s in n)
                if (n.hasOwnProperty(s)) {
                    var q = n[s];
                    if (q != null)
                        switch (s) {
                        case "name":
                            r = q;
                            break;
                        case "type":
                            g = q;
                            break;
                        case "checked":
                            T = q;
                            break;
                        case "defaultChecked":
                            z = q;
                            break;
                        case "value":
                            u = q;
                            break;
                        case "defaultValue":
                            v = q;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (q != null)
                                throw Error(o(137, e));
                            break;
                        default:
                            zt(t, e, s, q, n, null)
                        }
                }
            ud(t, u, v, T, z, g, r, !1),
            El(t);
            return;
        case "select":
            Et("invalid", t),
            s = g = u = null;
            for (r in n)
                if (n.hasOwnProperty(r) && (v = n[r],
                v != null))
                    switch (r) {
                    case "value":
                        u = v;
                        break;
                    case "defaultValue":
                        g = v;
                        break;
                    case "multiple":
                        s = v;
                    default:
                        zt(t, e, r, v, n, null)
                    }
            e = u,
            n = g,
            t.multiple = !!s,
            e != null ? Fi(t, !!s, e, !1) : n != null && Fi(t, !!s, n, !0);
            return;
        case "textarea":
            Et("invalid", t),
            u = r = s = null;
            for (g in n)
                if (n.hasOwnProperty(g) && (v = n[g],
                v != null))
                    switch (g) {
                    case "value":
                        s = v;
                        break;
                    case "defaultValue":
                        r = v;
                        break;
                    case "children":
                        u = v;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (v != null)
                            throw Error(o(91));
                        break;
                    default:
                        zt(t, e, g, v, n, null)
                    }
            fd(t, s, r, u),
            El(t);
            return;
        case "option":
            for (T in n)
                if (n.hasOwnProperty(T) && (s = n[T],
                s != null))
                    switch (T) {
                    case "selected":
                        t.selected = s && typeof s != "function" && typeof s != "symbol";
                        break;
                    default:
                        zt(t, e, T, s, n, null)
                    }
            return;
        case "dialog":
            Et("beforetoggle", t),
            Et("toggle", t),
            Et("cancel", t),
            Et("close", t);
            break;
        case "iframe":
        case "object":
            Et("load", t);
            break;
        case "video":
        case "audio":
            for (s = 0; s < js.length; s++)
                Et(js[s], t);
            break;
        case "image":
            Et("error", t),
            Et("load", t);
            break;
        case "details":
            Et("toggle", t);
            break;
        case "embed":
        case "source":
        case "link":
            Et("error", t),
            Et("load", t);
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
            for (z in n)
                if (n.hasOwnProperty(z) && (s = n[z],
                s != null))
                    switch (z) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(o(137, e));
                    default:
                        zt(t, e, z, s, n, null)
                    }
            return;
        default:
            if (hr(e)) {
                for (q in n)
                    n.hasOwnProperty(q) && (s = n[q],
                    s !== void 0 && Wu(t, e, q, s, n, void 0));
                return
            }
        }
        for (v in n)
            n.hasOwnProperty(v) && (s = n[v],
            s != null && zt(t, e, v, s, n, null))
    }
    function sx(t, e, n, s) {
        switch (e) {
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
            var r = null
              , u = null
              , g = null
              , v = null
              , T = null
              , z = null
              , q = null;
            for (U in n) {
                var Q = n[U];
                if (n.hasOwnProperty(U) && Q != null)
                    switch (U) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        T = Q;
                    default:
                        s.hasOwnProperty(U) || zt(t, e, U, null, s, Q)
                    }
            }
            for (var V in s) {
                var U = s[V];
                if (Q = n[V],
                s.hasOwnProperty(V) && (U != null || Q != null))
                    switch (V) {
                    case "type":
                        u = U;
                        break;
                    case "name":
                        r = U;
                        break;
                    case "checked":
                        z = U;
                        break;
                    case "defaultChecked":
                        q = U;
                        break;
                    case "value":
                        g = U;
                        break;
                    case "defaultValue":
                        v = U;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (U != null)
                            throw Error(o(137, e));
                        break;
                    default:
                        U !== Q && zt(t, e, V, U, s, Q)
                    }
            }
            fr(t, g, v, T, z, q, u, r);
            return;
        case "select":
            U = g = v = V = null;
            for (u in n)
                if (T = n[u],
                n.hasOwnProperty(u) && T != null)
                    switch (u) {
                    case "value":
                        break;
                    case "multiple":
                        U = T;
                    default:
                        s.hasOwnProperty(u) || zt(t, e, u, null, s, T)
                    }
            for (r in s)
                if (u = s[r],
                T = n[r],
                s.hasOwnProperty(r) && (u != null || T != null))
                    switch (r) {
                    case "value":
                        V = u;
                        break;
                    case "defaultValue":
                        v = u;
                        break;
                    case "multiple":
                        g = u;
                    default:
                        u !== T && zt(t, e, r, u, s, T)
                    }
            e = v,
            n = g,
            s = U,
            V != null ? Fi(t, !!n, V, !1) : !!s != !!n && (e != null ? Fi(t, !!n, e, !0) : Fi(t, !!n, n ? [] : "", !1));
            return;
        case "textarea":
            U = V = null;
            for (v in n)
                if (r = n[v],
                n.hasOwnProperty(v) && r != null && !s.hasOwnProperty(v))
                    switch (v) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        zt(t, e, v, null, s, r)
                    }
            for (g in s)
                if (r = s[g],
                u = n[g],
                s.hasOwnProperty(g) && (r != null || u != null))
                    switch (g) {
                    case "value":
                        V = r;
                        break;
                    case "defaultValue":
                        U = r;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (r != null)
                            throw Error(o(91));
                        break;
                    default:
                        r !== u && zt(t, e, g, r, s, u)
                    }
            cd(t, V, U);
            return;
        case "option":
            for (var ft in n)
                if (V = n[ft],
                n.hasOwnProperty(ft) && V != null && !s.hasOwnProperty(ft))
                    switch (ft) {
                    case "selected":
                        t.selected = !1;
                        break;
                    default:
                        zt(t, e, ft, null, s, V)
                    }
            for (T in s)
                if (V = s[T],
                U = n[T],
                s.hasOwnProperty(T) && V !== U && (V != null || U != null))
                    switch (T) {
                    case "selected":
                        t.selected = V && typeof V != "function" && typeof V != "symbol";
                        break;
                    default:
                        zt(t, e, T, V, s, U)
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
            for (var lt in n)
                V = n[lt],
                n.hasOwnProperty(lt) && V != null && !s.hasOwnProperty(lt) && zt(t, e, lt, null, s, V);
            for (z in s)
                if (V = s[z],
                U = n[z],
                s.hasOwnProperty(z) && V !== U && (V != null || U != null))
                    switch (z) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (V != null)
                            throw Error(o(137, e));
                        break;
                    default:
                        zt(t, e, z, V, s, U)
                    }
            return;
        default:
            if (hr(e)) {
                for (var Vt in n)
                    V = n[Vt],
                    n.hasOwnProperty(Vt) && V !== void 0 && !s.hasOwnProperty(Vt) && Wu(t, e, Vt, void 0, s, V);
                for (q in s)
                    V = s[q],
                    U = n[q],
                    !s.hasOwnProperty(q) || V === U || V === void 0 && U === void 0 || Wu(t, e, q, V, s, U);
                return
            }
        }
        for (var C in n)
            V = n[C],
            n.hasOwnProperty(C) && V != null && !s.hasOwnProperty(C) && zt(t, e, C, null, s, V);
        for (Q in s)
            V = s[Q],
            U = n[Q],
            !s.hasOwnProperty(Q) || V === U || V == null && U == null || zt(t, e, Q, V, s, U)
    }
    var $u = null
      , Iu = null;
    function xo(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function dp(t) {
        switch (t) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function hp(t, e) {
        if (t === 0)
            switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return t === 1 && e === "foreignObject" ? 0 : t
    }
    function tc(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var ec = null;
    function lx() {
        var t = window.event;
        return t && t.type === "popstate" ? t === ec ? !1 : (ec = t,
        !0) : (ec = null,
        !1)
    }
    var mp = typeof setTimeout == "function" ? setTimeout : void 0
      , ox = typeof clearTimeout == "function" ? clearTimeout : void 0
      , pp = typeof Promise == "function" ? Promise : void 0
      , rx = typeof queueMicrotask == "function" ? queueMicrotask : typeof pp < "u" ? function(t) {
        return pp.resolve(null).then(t).catch(ux)
    }
    : mp;
    function ux(t) {
        setTimeout(function() {
            throw t
        })
    }
    function ti(t) {
        return t === "head"
    }
    function gp(t, e) {
        var n = e
          , s = 0
          , r = 0;
        do {
            var u = n.nextSibling;
            if (t.removeChild(n),
            u && u.nodeType === 8)
                if (n = u.data,
                n === "/$") {
                    if (0 < s && 8 > s) {
                        n = s;
                        var g = t.ownerDocument;
                        if (n & 1 && Vs(g.documentElement),
                        n & 2 && Vs(g.body),
                        n & 4)
                            for (n = g.head,
                            Vs(n),
                            g = n.firstChild; g; ) {
                                var v = g.nextSibling
                                  , T = g.nodeName;
                                g[Fa] || T === "SCRIPT" || T === "STYLE" || T === "LINK" && g.rel.toLowerCase() === "stylesheet" || n.removeChild(g),
                                g = v
                            }
                    }
                    if (r === 0) {
                        t.removeChild(u),
                        Gs(e);
                        return
                    }
                    r--
                } else
                    n === "$" || n === "$?" || n === "$!" ? r++ : s = n.charCodeAt(0) - 48;
            else
                s = 0;
            n = u
        } while (n);
        Gs(e)
    }
    function nc(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var n = e;
            switch (e = e.nextSibling,
            n.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                nc(n),
                or(n);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (n.rel.toLowerCase() === "stylesheet")
                    continue
            }
            t.removeChild(n)
        }
    }
    function cx(t, e, n, s) {
        for (; t.nodeType === 1; ) {
            var r = n;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!s && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break
            } else if (s) {
                if (!t[Fa])
                    switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (u = t.getAttribute("rel"),
                        u === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (u !== r.rel || t.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || t.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || t.getAttribute("title") !== (r.title == null ? null : r.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (u = t.getAttribute("src"),
                        (u !== (r.src == null ? null : r.src) || t.getAttribute("type") !== (r.type == null ? null : r.type) || t.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default:
                        return t
                    }
            } else if (e === "input" && t.type === "hidden") {
                var u = r.name == null ? null : "" + r.name;
                if (r.type === "hidden" && t.getAttribute("name") === u)
                    return t
            } else
                return t;
            if (t = tn(t.nextSibling),
            t === null)
                break
        }
        return null
    }
    function fx(t, e, n) {
        if (e === "")
            return null;
        for (; t.nodeType !== 3; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = tn(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function ic(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete"
    }
    function dx(t, e) {
        var n = t.ownerDocument;
        if (t.data !== "$?" || n.readyState === "complete")
            e();
        else {
            var s = function() {
                e(),
                n.removeEventListener("DOMContentLoaded", s)
            };
            n.addEventListener("DOMContentLoaded", s),
            t._reactRetry = s
        }
    }
    function tn(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3)
                break;
            if (e === 8) {
                if (e = t.data,
                e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
                    break;
                if (e === "/$")
                    return null
            }
        }
        return t
    }
    var ac = null;
    function yp(t) {
        t = t.previousSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var n = t.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (e === 0)
                        return t;
                    e--
                } else
                    n === "/$" && e++
            }
            t = t.previousSibling
        }
        return null
    }
    function vp(t, e, n) {
        switch (e = xo(n),
        t) {
        case "html":
            if (t = e.documentElement,
            !t)
                throw Error(o(452));
            return t;
        case "head":
            if (t = e.head,
            !t)
                throw Error(o(453));
            return t;
        case "body":
            if (t = e.body,
            !t)
                throw Error(o(454));
            return t;
        default:
            throw Error(o(451))
        }
    }
    function Vs(t) {
        for (var e = t.attributes; e.length; )
            t.removeAttributeNode(e[0]);
        or(t)
    }
    var Ze = new Map
      , bp = new Set;
    function So(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var On = Z.d;
    Z.d = {
        f: hx,
        r: mx,
        D: px,
        C: gx,
        L: yx,
        m: vx,
        X: xx,
        S: bx,
        M: Sx
    };
    function hx() {
        var t = On.f()
          , e = fo();
        return t || e
    }
    function mx(t) {
        var e = Qi(t);
        e !== null && e.tag === 5 && e.type === "form" ? kh(e) : On.r(t)
    }
    var wa = typeof document > "u" ? null : document;
    function xp(t, e, n) {
        var s = wa;
        if (s && typeof e == "string" && e) {
            var r = ke(e);
            r = 'link[rel="' + t + '"][href="' + r + '"]',
            typeof n == "string" && (r += '[crossorigin="' + n + '"]'),
            bp.has(r) || (bp.add(r),
            t = {
                rel: t,
                crossOrigin: n,
                href: e
            },
            s.querySelector(r) === null && (e = s.createElement("link"),
            pe(e, "link", t),
            le(e),
            s.head.appendChild(e)))
        }
    }
    function px(t) {
        On.D(t),
        xp("dns-prefetch", t, null)
    }
    function gx(t, e) {
        On.C(t, e),
        xp("preconnect", t, e)
    }
    function yx(t, e, n) {
        On.L(t, e, n);
        var s = wa;
        if (s && t && e) {
            var r = 'link[rel="preload"][as="' + ke(e) + '"]';
            e === "image" && n && n.imageSrcSet ? (r += '[imagesrcset="' + ke(n.imageSrcSet) + '"]',
            typeof n.imageSizes == "string" && (r += '[imagesizes="' + ke(n.imageSizes) + '"]')) : r += '[href="' + ke(t) + '"]';
            var u = r;
            switch (e) {
            case "style":
                u = Ma(t);
                break;
            case "script":
                u = Da(t)
            }
            Ze.has(u) || (t = y({
                rel: "preload",
                href: e === "image" && n && n.imageSrcSet ? void 0 : t,
                as: e
            }, n),
            Ze.set(u, t),
            s.querySelector(r) !== null || e === "style" && s.querySelector(_s(u)) || e === "script" && s.querySelector(Us(u)) || (e = s.createElement("link"),
            pe(e, "link", t),
            le(e),
            s.head.appendChild(e)))
        }
    }
    function vx(t, e) {
        On.m(t, e);
        var n = wa;
        if (n && t) {
            var s = e && typeof e.as == "string" ? e.as : "script"
              , r = 'link[rel="modulepreload"][as="' + ke(s) + '"][href="' + ke(t) + '"]'
              , u = r;
            switch (s) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                u = Da(t)
            }
            if (!Ze.has(u) && (t = y({
                rel: "modulepreload",
                href: t
            }, e),
            Ze.set(u, t),
            n.querySelector(r) === null)) {
                switch (s) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (n.querySelector(Us(u)))
                        return
                }
                s = n.createElement("link"),
                pe(s, "link", t),
                le(s),
                n.head.appendChild(s)
            }
        }
    }
    function bx(t, e, n) {
        On.S(t, e, n);
        var s = wa;
        if (s && t) {
            var r = Zi(s).hoistableStyles
              , u = Ma(t);
            e = e || "default";
            var g = r.get(u);
            if (!g) {
                var v = {
                    loading: 0,
                    preload: null
                };
                if (g = s.querySelector(_s(u)))
                    v.loading = 5;
                else {
                    t = y({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, n),
                    (n = Ze.get(u)) && sc(t, n);
                    var T = g = s.createElement("link");
                    le(T),
                    pe(T, "link", t),
                    T._p = new Promise(function(z, q) {
                        T.onload = z,
                        T.onerror = q
                    }
                    ),
                    T.addEventListener("load", function() {
                        v.loading |= 1
                    }),
                    T.addEventListener("error", function() {
                        v.loading |= 2
                    }),
                    v.loading |= 4,
                    To(g, e, s)
                }
                g = {
                    type: "stylesheet",
                    instance: g,
                    count: 1,
                    state: v
                },
                r.set(u, g)
            }
        }
    }
    function xx(t, e) {
        On.X(t, e);
        var n = wa;
        if (n && t) {
            var s = Zi(n).hoistableScripts
              , r = Da(t)
              , u = s.get(r);
            u || (u = n.querySelector(Us(r)),
            u || (t = y({
                src: t,
                async: !0
            }, e),
            (e = Ze.get(r)) && lc(t, e),
            u = n.createElement("script"),
            le(u),
            pe(u, "link", t),
            n.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            s.set(r, u))
        }
    }
    function Sx(t, e) {
        On.M(t, e);
        var n = wa;
        if (n && t) {
            var s = Zi(n).hoistableScripts
              , r = Da(t)
              , u = s.get(r);
            u || (u = n.querySelector(Us(r)),
            u || (t = y({
                src: t,
                async: !0,
                type: "module"
            }, e),
            (e = Ze.get(r)) && lc(t, e),
            u = n.createElement("script"),
            le(u),
            pe(u, "link", t),
            n.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            s.set(r, u))
        }
    }
    function Sp(t, e, n, s) {
        var r = (r = st.current) ? So(r) : null;
        if (!r)
            throw Error(o(446));
        switch (t) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof n.precedence == "string" && typeof n.href == "string" ? (e = Ma(n.href),
            n = Zi(r).hoistableStyles,
            s = n.get(e),
            s || (s = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            n.set(e, s)),
            s) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                t = Ma(n.href);
                var u = Zi(r).hoistableStyles
                  , g = u.get(t);
                if (g || (r = r.ownerDocument || r,
                g = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                u.set(t, g),
                (u = r.querySelector(_s(t))) && !u._p && (g.instance = u,
                g.state.loading = 5),
                Ze.has(t) || (n = {
                    rel: "preload",
                    as: "style",
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy
                },
                Ze.set(t, n),
                u || Tx(r, t, n, g.state))),
                e && s === null)
                    throw Error(o(528, ""));
                return g
            }
            if (e && s !== null)
                throw Error(o(529, ""));
            return null;
        case "script":
            return e = n.async,
            n = n.src,
            typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Da(n),
            n = Zi(r).hoistableScripts,
            s = n.get(e),
            s || (s = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            n.set(e, s)),
            s) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(o(444, t))
        }
    }
    function Ma(t) {
        return 'href="' + ke(t) + '"'
    }
    function _s(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }
    function Tp(t) {
        return y({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }
    function Tx(t, e, n, s) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? s.loading = 1 : (e = t.createElement("link"),
        s.preload = e,
        e.addEventListener("load", function() {
            return s.loading |= 1
        }),
        e.addEventListener("error", function() {
            return s.loading |= 2
        }),
        pe(e, "link", n),
        le(e),
        t.head.appendChild(e))
    }
    function Da(t) {
        return '[src="' + ke(t) + '"]'
    }
    function Us(t) {
        return "script[async]" + t
    }
    function Ap(t, e, n) {
        if (e.count++,
        e.instance === null)
            switch (e.type) {
            case "style":
                var s = t.querySelector('style[data-href~="' + ke(n.href) + '"]');
                if (s)
                    return e.instance = s,
                    le(s),
                    s;
                var r = y({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return s = (t.ownerDocument || t).createElement("style"),
                le(s),
                pe(s, "style", r),
                To(s, n.precedence, t),
                e.instance = s;
            case "stylesheet":
                r = Ma(n.href);
                var u = t.querySelector(_s(r));
                if (u)
                    return e.state.loading |= 4,
                    e.instance = u,
                    le(u),
                    u;
                s = Tp(n),
                (r = Ze.get(r)) && sc(s, r),
                u = (t.ownerDocument || t).createElement("link"),
                le(u);
                var g = u;
                return g._p = new Promise(function(v, T) {
                    g.onload = v,
                    g.onerror = T
                }
                ),
                pe(u, "link", s),
                e.state.loading |= 4,
                To(u, n.precedence, t),
                e.instance = u;
            case "script":
                return u = Da(n.src),
                (r = t.querySelector(Us(u))) ? (e.instance = r,
                le(r),
                r) : (s = n,
                (r = Ze.get(u)) && (s = y({}, n),
                lc(s, r)),
                t = t.ownerDocument || t,
                r = t.createElement("script"),
                le(r),
                pe(r, "link", s),
                t.head.appendChild(r),
                e.instance = r);
            case "void":
                return null;
            default:
                throw Error(o(443, e.type))
            }
        else
            e.type === "stylesheet" && (e.state.loading & 4) === 0 && (s = e.instance,
            e.state.loading |= 4,
            To(s, n.precedence, t));
        return e.instance
    }
    function To(t, e, n) {
        for (var s = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), r = s.length ? s[s.length - 1] : null, u = r, g = 0; g < s.length; g++) {
            var v = s[g];
            if (v.dataset.precedence === e)
                u = v;
            else if (u !== r)
                break
        }
        u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n,
        e.insertBefore(t, e.firstChild))
    }
    function sc(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.title == null && (t.title = e.title)
    }
    function lc(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.integrity == null && (t.integrity = e.integrity)
    }
    var Ao = null;
    function Ep(t, e, n) {
        if (Ao === null) {
            var s = new Map
              , r = Ao = new Map;
            r.set(n, s)
        } else
            r = Ao,
            s = r.get(n),
            s || (s = new Map,
            r.set(n, s));
        if (s.has(t))
            return s;
        for (s.set(t, null),
        n = n.getElementsByTagName(t),
        r = 0; r < n.length; r++) {
            var u = n[r];
            if (!(u[Fa] || u[ve] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var g = u.getAttribute(e) || "";
                g = t + g;
                var v = s.get(g);
                v ? v.push(u) : s.set(g, [u])
            }
        }
        return s
    }
    function wp(t, e, n) {
        t = t.ownerDocument || t,
        t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null)
    }
    function Ax(t, e, n) {
        if (n === 1 || e.itemProp != null)
            return !1;
        switch (t) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
                break;
            return !0;
        case "link":
            if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
                break;
            switch (e.rel) {
            case "stylesheet":
                return t = e.disabled,
                typeof e.precedence == "string" && t == null;
            default:
                return !0
            }
        case "script":
            if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
                return !0
        }
        return !1
    }
    function Mp(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    var Bs = null;
    function Ex() {}
    function wx(t, e, n) {
        if (Bs === null)
            throw Error(o(475));
        var s = Bs;
        if (e.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (e.state.loading & 4) === 0) {
            if (e.instance === null) {
                var r = Ma(n.href)
                  , u = t.querySelector(_s(r));
                if (u) {
                    t = u._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (s.count++,
                    s = Eo.bind(s),
                    t.then(s, s)),
                    e.state.loading |= 4,
                    e.instance = u,
                    le(u);
                    return
                }
                u = t.ownerDocument || t,
                n = Tp(n),
                (r = Ze.get(r)) && sc(n, r),
                u = u.createElement("link"),
                le(u);
                var g = u;
                g._p = new Promise(function(v, T) {
                    g.onload = v,
                    g.onerror = T
                }
                ),
                pe(u, "link", n),
                e.instance = u
            }
            s.stylesheets === null && (s.stylesheets = new Map),
            s.stylesheets.set(e, t),
            (t = e.state.preload) && (e.state.loading & 3) === 0 && (s.count++,
            e = Eo.bind(s),
            t.addEventListener("load", e),
            t.addEventListener("error", e))
        }
    }
    function Mx() {
        if (Bs === null)
            throw Error(o(475));
        var t = Bs;
        return t.stylesheets && t.count === 0 && oc(t, t.stylesheets),
        0 < t.count ? function(e) {
            var n = setTimeout(function() {
                if (t.stylesheets && oc(t, t.stylesheets),
                t.unsuspend) {
                    var s = t.unsuspend;
                    t.unsuspend = null,
                    s()
                }
            }, 6e4);
            return t.unsuspend = e,
            function() {
                t.unsuspend = null,
                clearTimeout(n)
            }
        }
        : null
    }
    function Eo() {
        if (this.count--,
        this.count === 0) {
            if (this.stylesheets)
                oc(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null,
                t()
            }
        }
    }
    var wo = null;
    function oc(t, e) {
        t.stylesheets = null,
        t.unsuspend !== null && (t.count++,
        wo = new Map,
        e.forEach(Dx, t),
        wo = null,
        Eo.call(t))
    }
    function Dx(t, e) {
        if (!(e.state.loading & 4)) {
            var n = wo.get(t);
            if (n)
                var s = n.get(null);
            else {
                n = new Map,
                wo.set(t, n);
                for (var r = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < r.length; u++) {
                    var g = r[u];
                    (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (n.set(g.dataset.precedence, g),
                    s = g)
                }
                s && n.set(null, s)
            }
            r = e.instance,
            g = r.getAttribute("data-precedence"),
            u = n.get(g) || s,
            u === s && n.set(null, r),
            n.set(g, r),
            this.count++,
            s = Eo.bind(this),
            r.addEventListener("load", s),
            r.addEventListener("error", s),
            u ? u.parentNode.insertBefore(r, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
            t.insertBefore(r, t.firstChild)),
            e.state.loading |= 4
        }
    }
    var Ls = {
        $$typeof: _,
        Provider: null,
        Consumer: null,
        _currentValue: H,
        _currentValue2: H,
        _threadCount: 0
    };
    function Cx(t, e, n, s, r, u, g, v) {
        this.tag = 1,
        this.containerInfo = t,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = qi(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = qi(0),
        this.hiddenUpdates = qi(null),
        this.identifierPrefix = s,
        this.onUncaughtError = r,
        this.onCaughtError = u,
        this.onRecoverableError = g,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = v,
        this.incompleteTransitions = new Map
    }
    function Dp(t, e, n, s, r, u, g, v, T, z, q, Q) {
        return t = new Cx(t,e,n,g,v,T,z,Q),
        e = 1,
        u === !0 && (e |= 24),
        u = Oe(3, null, null, e),
        t.current = u,
        u.stateNode = t,
        e = Gr(),
        e.refCount++,
        t.pooledCache = e,
        e.refCount++,
        u.memoizedState = {
            element: s,
            isDehydrated: n,
            cache: e
        },
        Zr(u),
        t
    }
    function Cp(t) {
        return t ? (t = aa,
        t) : aa
    }
    function Np(t, e, n, s, r, u) {
        r = Cp(r),
        s.context === null ? s.context = r : s.pendingContext = r,
        s = qn(e),
        s.payload = {
            element: n
        },
        u = u === void 0 ? null : u,
        u !== null && (s.callback = u),
        n = Gn(t, s, e),
        n !== null && (Ue(n, t, e),
        ms(n, t, e))
    }
    function Rp(t, e) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var n = t.retryLane;
            t.retryLane = n !== 0 && n < e ? n : e
        }
    }
    function rc(t, e) {
        Rp(t, e),
        (t = t.alternate) && Rp(t, e)
    }
    function Op(t) {
        if (t.tag === 13) {
            var e = ia(t, 67108864);
            e !== null && Ue(e, t, 67108864),
            rc(t, 67108864)
        }
    }
    var Mo = !0;
    function Nx(t, e, n, s) {
        var r = B.T;
        B.T = null;
        var u = Z.p;
        try {
            Z.p = 2,
            uc(t, e, n, s)
        } finally {
            Z.p = u,
            B.T = r
        }
    }
    function Rx(t, e, n, s) {
        var r = B.T;
        B.T = null;
        var u = Z.p;
        try {
            Z.p = 8,
            uc(t, e, n, s)
        } finally {
            Z.p = u,
            B.T = r
        }
    }
    function uc(t, e, n, s) {
        if (Mo) {
            var r = cc(s);
            if (r === null)
                Ju(t, e, s, Do, n),
                zp(t, s);
            else if (jx(r, t, e, n, s))
                s.stopPropagation();
            else if (zp(t, s),
            e & 4 && -1 < Ox.indexOf(t)) {
                for (; r !== null; ) {
                    var u = Qi(r);
                    if (u !== null)
                        switch (u.tag) {
                        case 3:
                            if (u = u.stateNode,
                            u.current.memoizedState.isDehydrated) {
                                var g = gn(u.pendingLanes);
                                if (g !== 0) {
                                    var v = u;
                                    for (v.pendingLanes |= 2,
                                    v.entangledLanes |= 2; g; ) {
                                        var T = 1 << 31 - de(g);
                                        v.entanglements[1] |= T,
                                        g &= ~T
                                    }
                                    fn(u),
                                    (Rt & 6) === 0 && (uo = $t() + 500,
                                    Os(0))
                                }
                            }
                            break;
                        case 13:
                            v = ia(u, 2),
                            v !== null && Ue(v, u, 2),
                            fo(),
                            rc(u, 2)
                        }
                    if (u = cc(s),
                    u === null && Ju(t, e, s, Do, n),
                    u === r)
                        break;
                    r = u
                }
                r !== null && s.stopPropagation()
            } else
                Ju(t, e, s, null, n)
        }
    }
    function cc(t) {
        return t = pr(t),
        fc(t)
    }
    var Do = null;
    function fc(t) {
        if (Do = null,
        t = Xi(t),
        t !== null) {
            var e = d(t);
            if (e === null)
                t = null;
            else {
                var n = e.tag;
                if (n === 13) {
                    if (t = f(e),
                    t !== null)
                        return t;
                    t = null
                } else if (n === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else
                    e !== t && (t = null)
            }
        }
        return Do = t,
        null
    }
    function jp(t) {
        switch (t) {
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
            switch (mn()) {
            case We:
                return 2;
            case an:
                return 8;
            case sn:
            case Ya:
                return 32;
            case Li:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var dc = !1
      , ei = null
      , ni = null
      , ii = null
      , ks = new Map
      , Hs = new Map
      , ai = []
      , Ox = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function zp(t, e) {
        switch (t) {
        case "focusin":
        case "focusout":
            ei = null;
            break;
        case "dragenter":
        case "dragleave":
            ni = null;
            break;
        case "mouseover":
        case "mouseout":
            ii = null;
            break;
        case "pointerover":
        case "pointerout":
            ks.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Hs.delete(e.pointerId)
        }
    }
    function qs(t, e, n, s, r, u) {
        return t === null || t.nativeEvent !== u ? (t = {
            blockedOn: e,
            domEventName: n,
            eventSystemFlags: s,
            nativeEvent: u,
            targetContainers: [r]
        },
        e !== null && (e = Qi(e),
        e !== null && Op(e)),
        t) : (t.eventSystemFlags |= s,
        e = t.targetContainers,
        r !== null && e.indexOf(r) === -1 && e.push(r),
        t)
    }
    function jx(t, e, n, s, r) {
        switch (e) {
        case "focusin":
            return ei = qs(ei, t, e, n, s, r),
            !0;
        case "dragenter":
            return ni = qs(ni, t, e, n, s, r),
            !0;
        case "mouseover":
            return ii = qs(ii, t, e, n, s, r),
            !0;
        case "pointerover":
            var u = r.pointerId;
            return ks.set(u, qs(ks.get(u) || null, t, e, n, s, r)),
            !0;
        case "gotpointercapture":
            return u = r.pointerId,
            Hs.set(u, qs(Hs.get(u) || null, t, e, n, s, r)),
            !0
        }
        return !1
    }
    function Vp(t) {
        var e = Xi(t.target);
        if (e !== null) {
            var n = d(e);
            if (n !== null) {
                if (e = n.tag,
                e === 13) {
                    if (e = f(n),
                    e !== null) {
                        t.blockedOn = e,
                        wv(t.priority, function() {
                            if (n.tag === 13) {
                                var s = _e();
                                s = Gi(s);
                                var r = ia(n, s);
                                r !== null && Ue(r, n, s),
                                rc(n, s)
                            }
                        });
                        return
                    }
                } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function Co(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var e = t.targetContainers; 0 < e.length; ) {
            var n = cc(t.nativeEvent);
            if (n === null) {
                n = t.nativeEvent;
                var s = new n.constructor(n.type,n);
                mr = s,
                n.target.dispatchEvent(s),
                mr = null
            } else
                return e = Qi(n),
                e !== null && Op(e),
                t.blockedOn = n,
                !1;
            e.shift()
        }
        return !0
    }
    function _p(t, e, n) {
        Co(t) && n.delete(e)
    }
    function zx() {
        dc = !1,
        ei !== null && Co(ei) && (ei = null),
        ni !== null && Co(ni) && (ni = null),
        ii !== null && Co(ii) && (ii = null),
        ks.forEach(_p),
        Hs.forEach(_p)
    }
    function No(t, e) {
        t.blockedOn === e && (t.blockedOn = null,
        dc || (dc = !0,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, zx)))
    }
    var Ro = null;
    function Up(t) {
        Ro !== t && (Ro = t,
        i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
            Ro === t && (Ro = null);
            for (var e = 0; e < t.length; e += 3) {
                var n = t[e]
                  , s = t[e + 1]
                  , r = t[e + 2];
                if (typeof s != "function") {
                    if (fc(s || n) === null)
                        continue;
                    break
                }
                var u = Qi(n);
                u !== null && (t.splice(e, 3),
                e -= 3,
                fu(u, {
                    pending: !0,
                    data: r,
                    method: n.method,
                    action: s
                }, s, r))
            }
        }))
    }
    function Gs(t) {
        function e(T) {
            return No(T, t)
        }
        ei !== null && No(ei, t),
        ni !== null && No(ni, t),
        ii !== null && No(ii, t),
        ks.forEach(e),
        Hs.forEach(e);
        for (var n = 0; n < ai.length; n++) {
            var s = ai[n];
            s.blockedOn === t && (s.blockedOn = null)
        }
        for (; 0 < ai.length && (n = ai[0],
        n.blockedOn === null); )
            Vp(n),
            n.blockedOn === null && ai.shift();
        if (n = (t.ownerDocument || t).$$reactFormReplay,
        n != null)
            for (s = 0; s < n.length; s += 3) {
                var r = n[s]
                  , u = n[s + 1]
                  , g = r[Ee] || null;
                if (typeof u == "function")
                    g || Up(n);
                else if (g) {
                    var v = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (r = u,
                        g = u[Ee] || null)
                            v = g.formAction;
                        else if (fc(r) !== null)
                            continue
                    } else
                        v = g.action;
                    typeof v == "function" ? n[s + 1] = v : (n.splice(s, 3),
                    s -= 3),
                    Up(n)
                }
            }
    }
    function hc(t) {
        this._internalRoot = t
    }
    Oo.prototype.render = hc.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null)
            throw Error(o(409));
        var n = e.current
          , s = _e();
        Np(n, s, t, e, null, null)
    }
    ,
    Oo.prototype.unmount = hc.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            Np(t.current, 2, null, t, null, null),
            fo(),
            e[Yi] = null
        }
    }
    ;
    function Oo(t) {
        this._internalRoot = t
    }
    Oo.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = If();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var n = 0; n < ai.length && e !== 0 && e < ai[n].priority; n++)
                ;
            ai.splice(n, 0, t),
            n === 0 && Vp(t)
        }
    }
    ;
    var Bp = a.version;
    if (Bp !== "19.1.1")
        throw Error(o(527, Bp, "19.1.1"));
    Z.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0)
            throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","),
            Error(o(268, t)));
        return t = h(e),
        t = t !== null ? m(t) : null,
        t = t === null ? null : t.stateNode,
        t
    }
    ;
    var Vx = {
        bundleType: 0,
        version: "19.1.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: B,
        reconcilerVersion: "19.1.1"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var jo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!jo.isDisabled && jo.supportsFiber)
            try {
                fi = jo.inject(Vx),
                ye = jo
            } catch {}
    }
    return Xs.createRoot = function(t, e) {
        if (!c(t))
            throw Error(o(299));
        var n = !1
          , s = ""
          , r = Ih
          , u = tm
          , g = em
          , v = null;
        return e != null && (e.unstable_strictMode === !0 && (n = !0),
        e.identifierPrefix !== void 0 && (s = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (r = e.onUncaughtError),
        e.onCaughtError !== void 0 && (u = e.onCaughtError),
        e.onRecoverableError !== void 0 && (g = e.onRecoverableError),
        e.unstable_transitionCallbacks !== void 0 && (v = e.unstable_transitionCallbacks)),
        e = Dp(t, 1, !1, null, null, n, s, r, u, g, v, null),
        t[Yi] = e.current,
        Fu(t),
        new hc(e)
    }
    ,
    Xs.hydrateRoot = function(t, e, n) {
        if (!c(t))
            throw Error(o(299));
        var s = !1
          , r = ""
          , u = Ih
          , g = tm
          , v = em
          , T = null
          , z = null;
        return n != null && (n.unstable_strictMode === !0 && (s = !0),
        n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
        n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
        n.onCaughtError !== void 0 && (g = n.onCaughtError),
        n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
        n.unstable_transitionCallbacks !== void 0 && (T = n.unstable_transitionCallbacks),
        n.formState !== void 0 && (z = n.formState)),
        e = Dp(t, 1, !0, e, n ?? null, s, r, u, g, v, T, z),
        e.context = Cp(null),
        n = e.current,
        s = _e(),
        s = Gi(s),
        r = qn(s),
        r.callback = null,
        Gn(n, r, s),
        n = s,
        e.current.lanes = n,
        Un(e, n),
        fn(e),
        t[Yi] = e.current,
        Fu(t),
        new Oo(e)
    }
    ,
    Xs.version = "19.1.1",
    Xs
}
var Kp;
function Xx() {
    if (Kp)
        return gc.exports;
    Kp = 1;
    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
            } catch (a) {
                console.error(a)
            }
    }
    return i(),
    gc.exports = Yx(),
    gc.exports
}
var Qx = Xx();
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zx = i => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Kx = i => i.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, l, o) => o ? o.toUpperCase() : l.toLowerCase())
  , Pp = i => {
    const a = Kx(i);
    return a.charAt(0).toUpperCase() + a.slice(1)
}
  , T0 = (...i) => i.filter( (a, l, o) => !!a && a.trim() !== "" && o.indexOf(a) === l).join(" ").trim()
  , Px = i => {
    for (const a in i)
        if (a.startsWith("aria-") || a === "role" || a === "title")
            return !0
}
;
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Fx = {
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
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jx = k.forwardRef( ({color: i="currentColor", size: a=24, strokeWidth: l=2, absoluteStrokeWidth: o, className: c="", children: d, iconNode: f, ...p}, h) => k.createElement("svg", {
    ref: h,
    ...Fx,
    width: a,
    height: a,
    stroke: i,
    strokeWidth: o ? Number(l) * 24 / Number(a) : l,
    className: T0("lucide", c),
    ...!d && !Px(p) && {
        "aria-hidden": "true"
    },
    ...p
}, [...f.map( ([m,y]) => k.createElement(m, y)), ...Array.isArray(d) ? d : [d]]));
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ce = (i, a) => {
    const l = k.forwardRef( ({className: o, ...c}, d) => k.createElement(Jx, {
        ref: d,
        iconNode: a,
        className: T0(`lucide-${Zx(Pp(i))}`, `lucide-${i}`, o),
        ...c
    }));
    return l.displayName = Pp(i),
    l
}
;
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wx = [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]
  , $x = ce("arrow-left", Wx);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ix = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]
  , t1 = ce("arrow-right", Ix);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e1 = [["path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
    key: "1yiouv"
}], ["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}]]
  , n1 = ce("award", e1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i1 = [["path", {
    d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    key: "jecpp"
}], ["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "6",
    rx: "2",
    key: "i6l2r4"
}]]
  , a1 = ce("briefcase", i1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s1 = [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]
  , l1 = ce("chevron-down", s1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o1 = [["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "22",
    key: "7eqyqh"
}], ["path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    key: "1b0p4s"
}]]
  , r1 = ce("dollar-sign", o1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u1 = [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]
  , Fp = ce("external-link", u1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c1 = [["rect", {
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
  , f1 = ce("instagram", c1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d1 = [["path", {
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
  , h1 = ce("linkedin", d1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m1 = [["path", {
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
  , p1 = ce("mail", m1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g1 = [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]
  , y1 = ce("map-pin", g1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v1 = [["path", {
    d: "M4 5h16",
    key: "1tepv9"
}], ["path", {
    d: "M4 12h16",
    key: "1lakjw"
}], ["path", {
    d: "M4 19h16",
    key: "1djgab"
}]]
  , b1 = ce("menu", v1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x1 = [["path", {
    d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
    key: "1sd12s"
}]]
  , S1 = ce("message-circle", x1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T1 = [["path", {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    key: "m3kijz"
}], ["path", {
    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    key: "1fmvmk"
}], ["path", {
    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
    key: "1f8sc4"
}], ["path", {
    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
    key: "qeys4"
}]]
  , A1 = ce("rocket", T1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E1 = [["path", {
    d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
    key: "1s2grr"
}], ["path", {
    d: "M20 2v4",
    key: "1rf3ol"
}], ["path", {
    d: "M22 4h-4",
    key: "gwowj6"
}], ["circle", {
    cx: "4",
    cy: "20",
    r: "2",
    key: "6kqj1y"
}]]
  , w1 = ce("sparkles", E1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M1 = [["path", {
    d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",
    key: "1n3hpd"
}], ["path", {
    d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",
    key: "rfe1zi"
}], ["path", {
    d: "M18 9h1.5a1 1 0 0 0 0-5H18",
    key: "7xy6bh"
}], ["path", {
    d: "M4 22h16",
    key: "57wxv0"
}], ["path", {
    d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
    key: "1mhfuq"
}], ["path", {
    d: "M6 9H4.5a1 1 0 0 1 0-5H6",
    key: "tex48p"
}]]
  , D1 = ce("trophy", M1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C1 = [["path", {
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
  , N1 = ce("users", C1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R1 = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , O1 = ce("x", R1)
  , j1 = () => S.jsx("div", {
    className: "min-h-screen  text-white py-16 px-4",
    children: S.jsxs("div", {
        className: "max-w-7xl mx-auto",
        children: [S.jsxs("div", {
            className: "text-center mb-16",
            children: [S.jsx("h1", {
                className: "text-6xl md:text-7xl font-bold mb-6 text-cyan-400 bg-clip-text ",
                children: "About Us"
            }), S.jsx("div", {
                className: "w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
            })]
        }), S.jsx("div", {
            className: "mb-20",
            children: S.jsxs("div", {
                className: "bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500",
                children: [S.jsxs("div", {
                    className: "flex items-center gap-4 mb-6",
                    children: [S.jsx("div", {
                        className: "w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center",
                        children: S.jsx(w1, {
                            className: "w-8 h-8 text-white"
                        })
                    }), S.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold",
                        children: "Shaastra"
                    })]
                }), S.jsx("p", {
                    className: "text-lg md:text-xl leading-relaxed text-gray-300",
                    children: "Shaastra, the prestigious annual tech festival of IIT Madras, is much more than a typical college event—it’s a dynamic celebration of science and technology that transforms the campus into a vibrant hub of intellect, creativity, and innovation. Every year, students, professionals, and visionaries converge to share ideas and challenge the limits of possibility. The festival features thrilling technical competitions, hands-on workshops, inspiring talks by industry leaders, and engaging exhibitions, creating an immersive environment where curiosity flourishes, collaboration is key, and groundbreaking ideas come to life."
                })]
            })
        }), S.jsxs("div", {
            className: "relative",
            children: [S.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl -z-10"
            }), S.jsxs("div", {
                className: "bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500",
                children: [S.jsxs("div", {
                    className: "flex items-center gap-4 mb-6",
                    children: [S.jsx("div", {
                        className: "w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center",
                        children: S.jsx(A1, {
                            className: "w-8 h-8 text-white"
                        })
                    }), S.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold",
                        children: "TIF"
                    })]
                }), S.jsx("p", {
                    className: "text-lg md:text-xl leading-relaxed text-gray-300 ",
                    children: "Dreaming of turning your big idea into reality? The Tech and Innovation Fair (TIF) at Shaastra is your launchpad. Here, students from any background can pitch their innovations and develop prototypes into real products. TIF isn’t just about showcasing creativity- it’s about nurturing it and making a genuine impact. Whether you want to solve everyday problems or shape the future, TIF is where your journey begins."
                })]
            })]
        })]
    })
})
  , z1 = () => S.jsx("div", {
    className: "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 px-4",
    children: S.jsxs("div", {
        className: "max-w-6xl mx-auto",
        children: [S.jsxs("div", {
            className: "text-center mb-12",
            children: [S.jsx("h1", {
                className: "text-5xl font-bold text-cyan-400 mb-4",
                children: "Contact Us"
            }), S.jsx("p", {
                className: "text-gray-300 text-lg",
                children: "Have questions? We'd love to hear from you. Reach out to our team for any inquiries."
            })]
        }), S.jsxs("div", {
            className: "bg-slate-700/50 border border-cyan-500/30 rounded-2xl p-10 mb-8 backdrop-blur",
            children: [S.jsxs("div", {
                className: "flex flex-col items-center mb-6",
                children: [S.jsx("div", {
                    className: "w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center mb-4",
                    children: S.jsx(p1, {
                        className: "w-8 h-8 text-white"
                    })
                }), S.jsx("h2", {
                    className: "text-2xl font-bold uppercase tracking-wider",
                    children: "CONTACT US"
                })]
            }), S.jsxs("div", {
                className: "grid md:grid-cols-2 gap-8",
                children: [S.jsxs("div", {
                    className: "flex flex-col items-center text-center md:text-left",
                    children: [S.jsx("p", {
                        className: "text-gray-400 mb-2",
                        children: "E-mail"
                    }), S.jsx("a", {
                        href: "mailto:tif@shaastra.org",
                        className: "text-cyan-400 hover:text-cyan-300 transition-colors text-lg",
                        children: "innovision@shaastra.org"
                    })]
                }), S.jsxs("div", {
                    className: "flex flex-col items-center text-center md:text-right",
                    children: [S.jsx("p", {
                        className: "text-gray-400 mb-2",
                        children: "Phone:"
                    }), S.jsx("p", {
                        className: "text-gray-300",
                        children: "Avinash: +91 98498 34048"
                    }), S.jsx("p", {
                        className: "text-gray-300",
                        children: "Vivek: +91 90590 05735"
                    })]
                })]
            })]
        }), S.jsx("div", {
            className: "border-t border-gray-600 mb-8"
        }), S.jsxs("div", {
            className: "text-center",
            children: [S.jsxs("p", {
                className: "text-gray-400 mb-4",
                children: ["Made with ", S.jsx("span", {
                    className: "text-red-500",
                    children: "❤"
                }), " by Developers:", " ", S.jsx("a", {
                    className: "text-cyan-400",
                    target: "_blank",
                    href: "https://www.linkedin.com/in/bhagya-sree-neelapu-b4b010294",
                    children: "Bhagya Sree"
                }), ",", " ", S.jsx("a", {
                    className: "text-cyan-400",
                    target: "_blank",
                    href: "https://www.linkedin.com/in/vinay-lonpande/",
                    children: "Vinay"
                }), ",", " ", S.jsx("a", {
                    className: "text-cyan-400",
                    target: "_blank",
                    href: "https://www.linkedin.com/in/sai-ashish-mishra-33347b320/",
                    children: "Sai Ashish"
                })]
            }), S.jsx("p", {
                className: "text-gray-500 text-sm mb-6",
                children: "© 2025 Developed by WebOps | Shaastra | IIT Madras | All Rights Reserved"
            }), S.jsxs("div", {
                className: "flex justify-center gap-4",
                children: [S.jsx("a", {
                    href: "https://instagram.com/shaastra_iitm",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors",
                    children: S.jsx(f1, {
                        className: "w-5 h-5"
                    })
                }), S.jsx("a", {
                    href: "https://linkedin.com/company/shaastra-iit-madras",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors",
                    children: S.jsx(h1, {
                        className: "w-5 h-5"
                    })
                })]
            })]
        })]
    })
});
function V1(i) {
    return Object.prototype.toString.call(i) === "[object Object]"
}
function Jp(i) {
    return V1(i) || Array.isArray(i)
}
function _1() {
    return !!(typeof window < "u" && window.document && window.document.createElement)
}
function hf(i, a) {
    const l = Object.keys(i)
      , o = Object.keys(a);
    if (l.length !== o.length)
        return !1;
    const c = JSON.stringify(Object.keys(i.breakpoints || {}))
      , d = JSON.stringify(Object.keys(a.breakpoints || {}));
    return c !== d ? !1 : l.every(f => {
        const p = i[f]
          , h = a[f];
        return typeof p == "function" ? `${p}` == `${h}` : !Jp(p) || !Jp(h) ? p === h : hf(p, h)
    }
    )
}
function Wp(i) {
    return i.concat().sort( (a, l) => a.name > l.name ? 1 : -1).map(a => a.options)
}
function U1(i, a) {
    if (i.length !== a.length)
        return !1;
    const l = Wp(i)
      , o = Wp(a);
    return l.every( (c, d) => {
        const f = o[d];
        return hf(c, f)
    }
    )
}
function mf(i) {
    return typeof i == "number"
}
function Bc(i) {
    return typeof i == "string"
}
function $o(i) {
    return typeof i == "boolean"
}
function $p(i) {
    return Object.prototype.toString.call(i) === "[object Object]"
}
function Yt(i) {
    return Math.abs(i)
}
function pf(i) {
    return Math.sign(i)
}
function Ws(i, a) {
    return Yt(i - a)
}
function B1(i, a) {
    if (i === 0 || a === 0 || Yt(i) <= Yt(a))
        return 0;
    const l = Ws(Yt(i), Yt(a));
    return Yt(l / i)
}
function L1(i) {
    return Math.round(i * 100) / 100
}
function il(i) {
    return al(i).map(Number)
}
function nn(i) {
    return i[dl(i)]
}
function dl(i) {
    return Math.max(0, i.length - 1)
}
function gf(i, a) {
    return a === dl(i)
}
function Ip(i, a=0) {
    return Array.from(Array(i), (l, o) => a + o)
}
function al(i) {
    return Object.keys(i)
}
function A0(i, a) {
    return [i, a].reduce( (l, o) => (al(o).forEach(c => {
        const d = l[c]
          , f = o[c]
          , p = $p(d) && $p(f);
        l[c] = p ? A0(d, f) : f
    }
    ),
    l), {})
}
function Lc(i, a) {
    return typeof a.MouseEvent < "u" && i instanceof a.MouseEvent
}
function k1(i, a) {
    const l = {
        start: o,
        center: c,
        end: d
    };
    function o() {
        return 0
    }
    function c(h) {
        return d(h) / 2
    }
    function d(h) {
        return a - h
    }
    function f(h, m) {
        return Bc(i) ? l[i](h) : i(a, h, m)
    }
    return {
        measure: f
    }
}
function sl() {
    let i = [];
    function a(c, d, f, p={
        passive: !0
    }) {
        let h;
        if ("addEventListener"in c)
            c.addEventListener(d, f, p),
            h = () => c.removeEventListener(d, f, p);
        else {
            const m = c;
            m.addListener(f),
            h = () => m.removeListener(f)
        }
        return i.push(h),
        o
    }
    function l() {
        i = i.filter(c => c())
    }
    const o = {
        add: a,
        clear: l
    };
    return o
}
function H1(i, a, l, o) {
    const c = sl()
      , d = 1e3 / 60;
    let f = null
      , p = 0
      , h = 0;
    function m() {
        c.add(i, "visibilitychange", () => {
            i.hidden && E()
        }
        )
    }
    function y() {
        M(),
        c.clear()
    }
    function b(R) {
        if (!h)
            return;
        f || (f = R,
        l(),
        l());
        const N = R - f;
        for (f = R,
        p += N; p >= d; )
            l(),
            p -= d;
        const j = p / d;
        o(j),
        h && (h = a.requestAnimationFrame(b))
    }
    function x() {
        h || (h = a.requestAnimationFrame(b))
    }
    function M() {
        a.cancelAnimationFrame(h),
        f = null,
        p = 0,
        h = 0
    }
    function E() {
        f = null,
        p = 0
    }
    return {
        init: m,
        destroy: y,
        start: x,
        stop: M,
        update: l,
        render: o
    }
}
function q1(i, a) {
    const l = a === "rtl"
      , o = i === "y"
      , c = o ? "y" : "x"
      , d = o ? "x" : "y"
      , f = !o && l ? -1 : 1
      , p = y()
      , h = b();
    function m(E) {
        const {height: D, width: R} = E;
        return o ? D : R
    }
    function y() {
        return o ? "top" : l ? "right" : "left"
    }
    function b() {
        return o ? "bottom" : l ? "left" : "right"
    }
    function x(E) {
        return E * f
    }
    return {
        scroll: c,
        cross: d,
        startEdge: p,
        endEdge: h,
        measureSize: m,
        direction: x
    }
}
function Bi(i=0, a=0) {
    const l = Yt(i - a);
    function o(m) {
        return m < i
    }
    function c(m) {
        return m > a
    }
    function d(m) {
        return o(m) || c(m)
    }
    function f(m) {
        return d(m) ? o(m) ? i : a : m
    }
    function p(m) {
        return l ? m - l * Math.ceil((m - a) / l) : m
    }
    return {
        length: l,
        max: a,
        min: i,
        constrain: f,
        reachedAny: d,
        reachedMax: c,
        reachedMin: o,
        removeOffset: p
    }
}
function E0(i, a, l) {
    const {constrain: o} = Bi(0, i)
      , c = i + 1;
    let d = f(a);
    function f(x) {
        return l ? Yt((c + x) % c) : o(x)
    }
    function p() {
        return d
    }
    function h(x) {
        return d = f(x),
        b
    }
    function m(x) {
        return y().set(p() + x)
    }
    function y() {
        return E0(i, p(), l)
    }
    const b = {
        get: p,
        set: h,
        add: m,
        clone: y
    };
    return b
}
function G1(i, a, l, o, c, d, f, p, h, m, y, b, x, M, E, D, R, N, j) {
    const {cross: _, direction: F} = i
      , Y = ["INPUT", "SELECT", "TEXTAREA"]
      , K = {
        passive: !1
    }
      , J = sl()
      , L = sl()
      , I = Bi(50, 225).constrain(M.measure(20))
      , ct = {
        mouse: 300,
        touch: 400
    }
      , ot = {
        mouse: 500,
        touch: 600
    }
      , yt = E ? 43 : 25;
    let Bt = !1
      , vt = 0
      , mt = 0
      , B = !1
      , Z = !1
      , H = !1
      , rt = !1;
    function A(tt) {
        if (!j)
            return;
        function Nt(fe) {
            ($o(j) || j(tt, fe)) && st(fe)
        }
        const Lt = a;
        J.add(Lt, "dragstart", fe => fe.preventDefault(), K).add(Lt, "touchmove", () => {}
        , K).add(Lt, "touchend", () => {}
        ).add(Lt, "touchstart", Nt).add(Lt, "mousedown", Nt).add(Lt, "touchcancel", gt).add(Lt, "contextmenu", gt).add(Lt, "click", qt, !0)
    }
    function G() {
        J.clear(),
        L.clear()
    }
    function W() {
        const tt = rt ? l : a;
        L.add(tt, "touchmove", ht, K).add(tt, "touchend", gt).add(tt, "mousemove", ht, K).add(tt, "mouseup", gt)
    }
    function P(tt) {
        const Nt = tt.nodeName || "";
        return Y.includes(Nt)
    }
    function $() {
        return (E ? ot : ct)[rt ? "mouse" : "touch"]
    }
    function pt(tt, Nt) {
        const Lt = b.add(pf(tt) * -1)
          , fe = y.byDistance(tt, !E).distance;
        return E || Yt(tt) < I ? fe : R && Nt ? fe * .5 : y.byIndex(Lt.get(), 0).distance
    }
    function st(tt) {
        const Nt = Lc(tt, o);
        rt = Nt,
        H = E && Nt && !tt.buttons && Bt,
        Bt = Ws(c.get(), f.get()) >= 2,
        !(Nt && tt.button !== 0) && (P(tt.target) || (B = !0,
        d.pointerDown(tt),
        m.useFriction(0).useDuration(0),
        c.set(f),
        W(),
        vt = d.readPoint(tt),
        mt = d.readPoint(tt, _),
        x.emit("pointerDown")))
    }
    function ht(tt) {
        if (!Lc(tt, o) && tt.touches.length >= 2)
            return gt(tt);
        const Lt = d.readPoint(tt)
          , fe = d.readPoint(tt, _)
          , Be = Ws(Lt, vt)
          , $t = Ws(fe, mt);
        if (!Z && !rt && (!tt.cancelable || (Z = Be > $t,
        !Z)))
            return gt(tt);
        const mn = d.pointerMove(tt);
        Be > D && (H = !0),
        m.useFriction(.3).useDuration(.75),
        p.start(),
        c.add(F(mn)),
        tt.preventDefault()
    }
    function gt(tt) {
        const Lt = y.byDistance(0, !1).index !== b.get()
          , fe = d.pointerUp(tt) * $()
          , Be = pt(F(fe), Lt)
          , $t = B1(fe, Be)
          , mn = yt - 10 * $t
          , We = N + $t / 50;
        Z = !1,
        B = !1,
        L.clear(),
        m.useDuration(mn).useFriction(We),
        h.distance(Be, !E),
        rt = !1,
        x.emit("pointerUp")
    }
    function qt(tt) {
        H && (tt.stopPropagation(),
        tt.preventDefault(),
        H = !1)
    }
    function Pt() {
        return B
    }
    return {
        init: A,
        destroy: G,
        pointerDown: Pt
    }
}
function Y1(i, a) {
    let o, c;
    function d(b) {
        return b.timeStamp
    }
    function f(b, x) {
        const E = `client${(x || i.scroll) === "x" ? "X" : "Y"}`;
        return (Lc(b, a) ? b : b.touches[0])[E]
    }
    function p(b) {
        return o = b,
        c = b,
        f(b)
    }
    function h(b) {
        const x = f(b) - f(c)
          , M = d(b) - d(o) > 170;
        return c = b,
        M && (o = b),
        x
    }
    function m(b) {
        if (!o || !c)
            return 0;
        const x = f(c) - f(o)
          , M = d(b) - d(o)
          , E = d(b) - d(c) > 170
          , D = x / M;
        return M && !E && Yt(D) > .1 ? D : 0
    }
    return {
        pointerDown: p,
        pointerMove: h,
        pointerUp: m,
        readPoint: f
    }
}
function X1() {
    function i(l) {
        const {offsetTop: o, offsetLeft: c, offsetWidth: d, offsetHeight: f} = l;
        return {
            top: o,
            right: c + d,
            bottom: o + f,
            left: c,
            width: d,
            height: f
        }
    }
    return {
        measure: i
    }
}
function Q1(i) {
    function a(o) {
        return i * (o / 100)
    }
    return {
        measure: a
    }
}
function Z1(i, a, l, o, c, d, f) {
    const p = [i].concat(o);
    let h, m, y = [], b = !1;
    function x(R) {
        return c.measureSize(f.measure(R))
    }
    function M(R) {
        if (!d)
            return;
        m = x(i),
        y = o.map(x);
        function N(j) {
            for (const _ of j) {
                if (b)
                    return;
                const F = _.target === i
                  , Y = o.indexOf(_.target)
                  , K = F ? m : y[Y]
                  , J = x(F ? i : o[Y]);
                if (Yt(J - K) >= .5) {
                    R.reInit(),
                    a.emit("resize");
                    break
                }
            }
        }
        h = new ResizeObserver(j => {
            ($o(d) || d(R, j)) && N(j)
        }
        ),
        l.requestAnimationFrame( () => {
            p.forEach(j => h.observe(j))
        }
        )
    }
    function E() {
        b = !0,
        h && h.disconnect()
    }
    return {
        init: M,
        destroy: E
    }
}
function K1(i, a, l, o, c, d) {
    let f = 0
      , p = 0
      , h = c
      , m = d
      , y = i.get()
      , b = 0;
    function x() {
        const K = o.get() - i.get()
          , J = !h;
        let L = 0;
        return J ? (f = 0,
        l.set(o),
        i.set(o),
        L = K) : (l.set(i),
        f += K / h,
        f *= m,
        y += f,
        i.add(f),
        L = y - b),
        p = pf(L),
        b = y,
        Y
    }
    function M() {
        const K = o.get() - a.get();
        return Yt(K) < .001
    }
    function E() {
        return h
    }
    function D() {
        return p
    }
    function R() {
        return f
    }
    function N() {
        return _(c)
    }
    function j() {
        return F(d)
    }
    function _(K) {
        return h = K,
        Y
    }
    function F(K) {
        return m = K,
        Y
    }
    const Y = {
        direction: D,
        duration: E,
        velocity: R,
        seek: x,
        settled: M,
        useBaseFriction: j,
        useBaseDuration: N,
        useFriction: F,
        useDuration: _
    };
    return Y
}
function P1(i, a, l, o, c) {
    const d = c.measure(10)
      , f = c.measure(50)
      , p = Bi(.1, .99);
    let h = !1;
    function m() {
        return !(h || !i.reachedAny(l.get()) || !i.reachedAny(a.get()))
    }
    function y(M) {
        if (!m())
            return;
        const E = i.reachedMin(a.get()) ? "min" : "max"
          , D = Yt(i[E] - a.get())
          , R = l.get() - a.get()
          , N = p.constrain(D / f);
        l.subtract(R * N),
        !M && Yt(R) < d && (l.set(i.constrain(l.get())),
        o.useDuration(25).useBaseFriction())
    }
    function b(M) {
        h = !M
    }
    return {
        shouldConstrain: m,
        constrain: y,
        toggleActive: b
    }
}
function F1(i, a, l, o, c) {
    const d = Bi(-a + i, 0)
      , f = b()
      , p = y()
      , h = x();
    function m(E, D) {
        return Ws(E, D) <= 1
    }
    function y() {
        const E = f[0]
          , D = nn(f)
          , R = f.lastIndexOf(E)
          , N = f.indexOf(D) + 1;
        return Bi(R, N)
    }
    function b() {
        return l.map( (E, D) => {
            const {min: R, max: N} = d
              , j = d.constrain(E)
              , _ = !D
              , F = gf(l, D);
            return _ ? N : F || m(R, j) ? R : m(N, j) ? N : j
        }
        ).map(E => parseFloat(E.toFixed(3)))
    }
    function x() {
        if (a <= i + c)
            return [d.max];
        if (o === "keepSnaps")
            return f;
        const {min: E, max: D} = p;
        return f.slice(E, D)
    }
    return {
        snapsContained: h,
        scrollContainLimit: p
    }
}
function J1(i, a, l) {
    const o = a[0]
      , c = l ? o - i : nn(a);
    return {
        limit: Bi(c, o)
    }
}
function W1(i, a, l, o) {
    const d = a.min + .1
      , f = a.max + .1
      , {reachedMin: p, reachedMax: h} = Bi(d, f);
    function m(x) {
        return x === 1 ? h(l.get()) : x === -1 ? p(l.get()) : !1
    }
    function y(x) {
        if (!m(x))
            return;
        const M = i * (x * -1);
        o.forEach(E => E.add(M))
    }
    return {
        loop: y
    }
}
function $1(i) {
    const {max: a, length: l} = i;
    function o(d) {
        const f = d - a;
        return l ? f / -l : 0
    }
    return {
        get: o
    }
}
function I1(i, a, l, o, c) {
    const {startEdge: d, endEdge: f} = i
      , {groupSlides: p} = c
      , h = b().map(a.measure)
      , m = x()
      , y = M();
    function b() {
        return p(o).map(D => nn(D)[f] - D[0][d]).map(Yt)
    }
    function x() {
        return o.map(D => l[d] - D[d]).map(D => -Yt(D))
    }
    function M() {
        return p(m).map(D => D[0]).map( (D, R) => D + h[R])
    }
    return {
        snaps: m,
        snapsAligned: y
    }
}
function tS(i, a, l, o, c, d) {
    const {groupSlides: f} = c
      , {min: p, max: h} = o
      , m = y();
    function y() {
        const x = f(d)
          , M = !i || a === "keepSnaps";
        return l.length === 1 ? [d] : M ? x : x.slice(p, h).map( (E, D, R) => {
            const N = !D
              , j = gf(R, D);
            if (N) {
                const _ = nn(R[0]) + 1;
                return Ip(_)
            }
            if (j) {
                const _ = dl(d) - nn(R)[0] + 1;
                return Ip(_, nn(R)[0])
            }
            return E
        }
        )
    }
    return {
        slideRegistry: m
    }
}
function eS(i, a, l, o, c) {
    const {reachedAny: d, removeOffset: f, constrain: p} = o;
    function h(E) {
        return E.concat().sort( (D, R) => Yt(D) - Yt(R))[0]
    }
    function m(E) {
        const D = i ? f(E) : p(E)
          , R = a.map( (j, _) => ({
            diff: y(j - D, 0),
            index: _
        })).sort( (j, _) => Yt(j.diff) - Yt(_.diff))
          , {index: N} = R[0];
        return {
            index: N,
            distance: D
        }
    }
    function y(E, D) {
        const R = [E, E + l, E - l];
        if (!i)
            return E;
        if (!D)
            return h(R);
        const N = R.filter(j => pf(j) === D);
        return N.length ? h(N) : nn(R) - l
    }
    function b(E, D) {
        const R = a[E] - c.get()
          , N = y(R, D);
        return {
            index: E,
            distance: N
        }
    }
    function x(E, D) {
        const R = c.get() + E
          , {index: N, distance: j} = m(R)
          , _ = !i && d(R);
        if (!D || _)
            return {
                index: N,
                distance: E
            };
        const F = a[N] - j
          , Y = E + y(F, 0);
        return {
            index: N,
            distance: Y
        }
    }
    return {
        byDistance: x,
        byIndex: b,
        shortcut: y
    }
}
function nS(i, a, l, o, c, d, f) {
    function p(b) {
        const x = b.distance
          , M = b.index !== a.get();
        d.add(x),
        x && (o.duration() ? i.start() : (i.update(),
        i.render(1),
        i.update())),
        M && (l.set(a.get()),
        a.set(b.index),
        f.emit("select"))
    }
    function h(b, x) {
        const M = c.byDistance(b, x);
        p(M)
    }
    function m(b, x) {
        const M = a.clone().set(b)
          , E = c.byIndex(M.get(), x);
        p(E)
    }
    return {
        distance: h,
        index: m
    }
}
function iS(i, a, l, o, c, d, f, p) {
    const h = {
        passive: !0,
        capture: !0
    };
    let m = 0;
    function y(M) {
        if (!p)
            return;
        function E(D) {
            if (new Date().getTime() - m > 10)
                return;
            f.emit("slideFocusStart"),
            i.scrollLeft = 0;
            const j = l.findIndex(_ => _.includes(D));
            mf(j) && (c.useDuration(0),
            o.index(j, 0),
            f.emit("slideFocus"))
        }
        d.add(document, "keydown", b, !1),
        a.forEach( (D, R) => {
            d.add(D, "focus", N => {
                ($o(p) || p(M, N)) && E(R)
            }
            , h)
        }
        )
    }
    function b(M) {
        M.code === "Tab" && (m = new Date().getTime())
    }
    return {
        init: y
    }
}
function Ps(i) {
    let a = i;
    function l() {
        return a
    }
    function o(h) {
        a = f(h)
    }
    function c(h) {
        a += f(h)
    }
    function d(h) {
        a -= f(h)
    }
    function f(h) {
        return mf(h) ? h : h.get()
    }
    return {
        get: l,
        set: o,
        add: c,
        subtract: d
    }
}
function w0(i, a) {
    const l = i.scroll === "x" ? f : p
      , o = a.style;
    let c = null
      , d = !1;
    function f(x) {
        return `translate3d(${x}px,0px,0px)`
    }
    function p(x) {
        return `translate3d(0px,${x}px,0px)`
    }
    function h(x) {
        if (d)
            return;
        const M = L1(i.direction(x));
        M !== c && (o.transform = l(M),
        c = M)
    }
    function m(x) {
        d = !x
    }
    function y() {
        d || (o.transform = "",
        a.getAttribute("style") || a.removeAttribute("style"))
    }
    return {
        clear: y,
        to: h,
        toggleActive: m
    }
}
function aS(i, a, l, o, c, d, f, p, h) {
    const y = il(c)
      , b = il(c).reverse()
      , x = N().concat(j());
    function M(J, L) {
        return J.reduce( (I, ct) => I - c[ct], L)
    }
    function E(J, L) {
        return J.reduce( (I, ct) => M(I, L) > 0 ? I.concat([ct]) : I, [])
    }
    function D(J) {
        return d.map( (L, I) => ({
            start: L - o[I] + .5 + J,
            end: L + a - .5 + J
        }))
    }
    function R(J, L, I) {
        const ct = D(L);
        return J.map(ot => {
            const yt = I ? 0 : -l
              , Bt = I ? l : 0
              , vt = I ? "end" : "start"
              , mt = ct[ot][vt];
            return {
                index: ot,
                loopPoint: mt,
                slideLocation: Ps(-1),
                translate: w0(i, h[ot]),
                target: () => p.get() > mt ? yt : Bt
            }
        }
        )
    }
    function N() {
        const J = f[0]
          , L = E(b, J);
        return R(L, l, !1)
    }
    function j() {
        const J = a - f[0] - 1
          , L = E(y, J);
        return R(L, -l, !0)
    }
    function _() {
        return x.every( ({index: J}) => {
            const L = y.filter(I => I !== J);
            return M(L, a) <= .1
        }
        )
    }
    function F() {
        x.forEach(J => {
            const {target: L, translate: I, slideLocation: ct} = J
              , ot = L();
            ot !== ct.get() && (I.to(ot),
            ct.set(ot))
        }
        )
    }
    function Y() {
        x.forEach(J => J.translate.clear())
    }
    return {
        canLoop: _,
        clear: Y,
        loop: F,
        loopPoints: x
    }
}
function sS(i, a, l) {
    let o, c = !1;
    function d(h) {
        if (!l)
            return;
        function m(y) {
            for (const b of y)
                if (b.type === "childList") {
                    h.reInit(),
                    a.emit("slidesChanged");
                    break
                }
        }
        o = new MutationObserver(y => {
            c || ($o(l) || l(h, y)) && m(y)
        }
        ),
        o.observe(i, {
            childList: !0
        })
    }
    function f() {
        o && o.disconnect(),
        c = !0
    }
    return {
        init: d,
        destroy: f
    }
}
function lS(i, a, l, o) {
    const c = {};
    let d = null, f = null, p, h = !1;
    function m() {
        p = new IntersectionObserver(E => {
            h || (E.forEach(D => {
                const R = a.indexOf(D.target);
                c[R] = D
            }
            ),
            d = null,
            f = null,
            l.emit("slidesInView"))
        }
        ,{
            root: i.parentElement,
            threshold: o
        }),
        a.forEach(E => p.observe(E))
    }
    function y() {
        p && p.disconnect(),
        h = !0
    }
    function b(E) {
        return al(c).reduce( (D, R) => {
            const N = parseInt(R)
              , {isIntersecting: j} = c[N];
            return (E && j || !E && !j) && D.push(N),
            D
        }
        , [])
    }
    function x(E=!0) {
        if (E && d)
            return d;
        if (!E && f)
            return f;
        const D = b(E);
        return E && (d = D),
        E || (f = D),
        D
    }
    return {
        init: m,
        destroy: y,
        get: x
    }
}
function oS(i, a, l, o, c, d) {
    const {measureSize: f, startEdge: p, endEdge: h} = i
      , m = l[0] && c
      , y = E()
      , b = D()
      , x = l.map(f)
      , M = R();
    function E() {
        if (!m)
            return 0;
        const j = l[0];
        return Yt(a[p] - j[p])
    }
    function D() {
        if (!m)
            return 0;
        const j = d.getComputedStyle(nn(o));
        return parseFloat(j.getPropertyValue(`margin-${h}`))
    }
    function R() {
        return l.map( (j, _, F) => {
            const Y = !_
              , K = gf(F, _);
            return Y ? x[_] + y : K ? x[_] + b : F[_ + 1][p] - j[p]
        }
        ).map(Yt)
    }
    return {
        slideSizes: x,
        slideSizesWithGaps: M,
        startGap: y,
        endGap: b
    }
}
function rS(i, a, l, o, c, d, f, p, h) {
    const {startEdge: m, endEdge: y, direction: b} = i
      , x = mf(l);
    function M(N, j) {
        return il(N).filter(_ => _ % j === 0).map(_ => N.slice(_, _ + j))
    }
    function E(N) {
        return N.length ? il(N).reduce( (j, _, F) => {
            const Y = nn(j) || 0
              , K = Y === 0
              , J = _ === dl(N)
              , L = c[m] - d[Y][m]
              , I = c[m] - d[_][y]
              , ct = !o && K ? b(f) : 0
              , ot = !o && J ? b(p) : 0
              , yt = Yt(I - ot - (L + ct));
            return F && yt > a + h && j.push(_),
            J && j.push(N.length),
            j
        }
        , []).map( (j, _, F) => {
            const Y = Math.max(F[_ - 1] || 0);
            return N.slice(Y, j)
        }
        ) : []
    }
    function D(N) {
        return x ? M(N, l) : E(N)
    }
    return {
        groupSlides: D
    }
}
function uS(i, a, l, o, c, d, f) {
    const {align: p, axis: h, direction: m, startIndex: y, loop: b, duration: x, dragFree: M, dragThreshold: E, inViewThreshold: D, slidesToScroll: R, skipSnaps: N, containScroll: j, watchResize: _, watchSlides: F, watchDrag: Y, watchFocus: K} = d
      , J = 2
      , L = X1()
      , I = L.measure(a)
      , ct = l.map(L.measure)
      , ot = q1(h, m)
      , yt = ot.measureSize(I)
      , Bt = Q1(yt)
      , vt = k1(p, yt)
      , mt = !b && !!j
      , B = b || !!j
      , {slideSizes: Z, slideSizesWithGaps: H, startGap: rt, endGap: A} = oS(ot, I, ct, l, B, c)
      , G = rS(ot, yt, R, b, I, ct, rt, A, J)
      , {snaps: W, snapsAligned: P} = I1(ot, vt, I, ct, G)
      , $ = -nn(W) + nn(H)
      , {snapsContained: pt, scrollContainLimit: st} = F1(yt, $, P, j, J)
      , ht = mt ? pt : P
      , {limit: gt} = J1($, ht, b)
      , qt = E0(dl(ht), y, b)
      , Pt = qt.clone()
      , Mt = il(l)
      , tt = ({dragHandler: _n, scrollBody: Xa, scrollBounds: Qa, options: {loop: pn}}) => {
        pn || Qa.constrain(_n.pointerDown()),
        Xa.seek()
    }
      , Nt = ({scrollBody: _n, translate: Xa, location: Qa, offsetLocation: pn, previousLocation: ki, scrollLooper: gn, slideLooper: Hi, dragHandler: di, animation: sr, eventHandler: Za, scrollBounds: bl, options: {loop: qi}}, Un) => {
        const xl = _n.settled()
          , Sl = !bl.shouldConstrain()
          , Ka = qi ? xl : xl && Sl
          , Gi = Ka && !di.pointerDown();
        Gi && sr.stop();
        const Pa = Qa.get() * Un + ki.get() * (1 - Un);
        pn.set(Pa),
        qi && (gn.loop(_n.direction()),
        Hi.loop()),
        Xa.to(pn.get()),
        Gi && Za.emit("settle"),
        Ka || Za.emit("scroll")
    }
      , Lt = H1(o, c, () => tt(de), _n => Nt(de, _n))
      , fe = .68
      , Be = ht[qt.get()]
      , $t = Ps(Be)
      , mn = Ps(Be)
      , We = Ps(Be)
      , an = Ps(Be)
      , sn = K1($t, We, mn, an, x, fe)
      , Ya = eS(b, ht, $, gt, an)
      , Li = nS(Lt, qt, Pt, sn, Ya, an, f)
      , yl = $1(gt)
      , vl = sl()
      , fi = lS(a, l, f, D)
      , {slideRegistry: ye} = tS(mt, j, ht, st, G, Mt)
      , ln = iS(i, l, ye, Li, sn, vl, f, K)
      , de = {
        ownerDocument: o,
        ownerWindow: c,
        eventHandler: f,
        containerRect: I,
        slideRects: ct,
        animation: Lt,
        axis: ot,
        dragHandler: G1(ot, i, o, c, an, Y1(ot, c), $t, Lt, Li, sn, Ya, qt, f, Bt, M, E, N, fe, Y),
        eventStore: vl,
        percentOfView: Bt,
        index: qt,
        indexPrevious: Pt,
        limit: gt,
        location: $t,
        offsetLocation: We,
        previousLocation: mn,
        options: d,
        resizeHandler: Z1(a, f, c, l, ot, _, L),
        scrollBody: sn,
        scrollBounds: P1(gt, We, an, sn, Bt),
        scrollLooper: W1($, gt, We, [$t, We, mn, an]),
        scrollProgress: yl,
        scrollSnapList: ht.map(yl.get),
        scrollSnaps: ht,
        scrollTarget: Ya,
        scrollTo: Li,
        slideLooper: aS(ot, yt, $, Z, H, W, ht, We, l),
        slideFocus: ln,
        slidesHandler: sS(a, f, F),
        slidesInView: fi,
        slideIndexes: Mt,
        slideRegistry: ye,
        slidesToScroll: G,
        target: an,
        translate: w0(ot, a)
    };
    return de
}
function cS() {
    let i = {}, a;
    function l(m) {
        a = m
    }
    function o(m) {
        return i[m] || []
    }
    function c(m) {
        return o(m).forEach(y => y(a, m)),
        h
    }
    function d(m, y) {
        return i[m] = o(m).concat([y]),
        h
    }
    function f(m, y) {
        return i[m] = o(m).filter(b => b !== y),
        h
    }
    function p() {
        i = {}
    }
    const h = {
        init: l,
        emit: c,
        off: f,
        on: d,
        clear: p
    };
    return h
}
const fS = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: "trimSnaps",
    direction: "ltr",
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: !1,
    dragThreshold: 10,
    loop: !1,
    skipSnaps: !1,
    duration: 25,
    startIndex: 0,
    active: !0,
    watchDrag: !0,
    watchResize: !0,
    watchSlides: !0,
    watchFocus: !0
};
function dS(i) {
    function a(d, f) {
        return A0(d, f || {})
    }
    function l(d) {
        const f = d.breakpoints || {}
          , p = al(f).filter(h => i.matchMedia(h).matches).map(h => f[h]).reduce( (h, m) => a(h, m), {});
        return a(d, p)
    }
    function o(d) {
        return d.map(f => al(f.breakpoints || {})).reduce( (f, p) => f.concat(p), []).map(i.matchMedia)
    }
    return {
        mergeOptions: a,
        optionsAtMedia: l,
        optionsMediaQueries: o
    }
}
function hS(i) {
    let a = [];
    function l(d, f) {
        return a = f.filter( ({options: p}) => i.optionsAtMedia(p).active !== !1),
        a.forEach(p => p.init(d, i)),
        f.reduce( (p, h) => Object.assign(p, {
            [h.name]: h
        }), {})
    }
    function o() {
        a = a.filter(d => d.destroy())
    }
    return {
        init: l,
        destroy: o
    }
}
function Qo(i, a, l) {
    const o = i.ownerDocument
      , c = o.defaultView
      , d = dS(c)
      , f = hS(d)
      , p = sl()
      , h = cS()
      , {mergeOptions: m, optionsAtMedia: y, optionsMediaQueries: b} = d
      , {on: x, off: M, emit: E} = h
      , D = ot;
    let R = !1, N, j = m(fS, Qo.globalOptions), _ = m(j), F = [], Y, K, J;
    function L() {
        const {container: Mt, slides: tt} = _;
        K = (Bc(Mt) ? i.querySelector(Mt) : Mt) || i.children[0];
        const Lt = Bc(tt) ? K.querySelectorAll(tt) : tt;
        J = [].slice.call(Lt || K.children)
    }
    function I(Mt) {
        const tt = uS(i, K, J, o, c, Mt, h);
        if (Mt.loop && !tt.slideLooper.canLoop()) {
            const Nt = Object.assign({}, Mt, {
                loop: !1
            });
            return I(Nt)
        }
        return tt
    }
    function ct(Mt, tt) {
        R || (j = m(j, Mt),
        _ = y(j),
        F = tt || F,
        L(),
        N = I(_),
        b([j, ...F.map( ({options: Nt}) => Nt)]).forEach(Nt => p.add(Nt, "change", ot)),
        _.active && (N.translate.to(N.location.get()),
        N.animation.init(),
        N.slidesInView.init(),
        N.slideFocus.init(Pt),
        N.eventHandler.init(Pt),
        N.resizeHandler.init(Pt),
        N.slidesHandler.init(Pt),
        N.options.loop && N.slideLooper.loop(),
        K.offsetParent && J.length && N.dragHandler.init(Pt),
        Y = f.init(Pt, F)))
    }
    function ot(Mt, tt) {
        const Nt = G();
        yt(),
        ct(m({
            startIndex: Nt
        }, Mt), tt),
        h.emit("reInit")
    }
    function yt() {
        N.dragHandler.destroy(),
        N.eventStore.clear(),
        N.translate.clear(),
        N.slideLooper.clear(),
        N.resizeHandler.destroy(),
        N.slidesHandler.destroy(),
        N.slidesInView.destroy(),
        N.animation.destroy(),
        f.destroy(),
        p.clear()
    }
    function Bt() {
        R || (R = !0,
        p.clear(),
        yt(),
        h.emit("destroy"),
        h.clear())
    }
    function vt(Mt, tt, Nt) {
        !_.active || R || (N.scrollBody.useBaseFriction().useDuration(tt === !0 ? 0 : _.duration),
        N.scrollTo.index(Mt, Nt || 0))
    }
    function mt(Mt) {
        const tt = N.index.add(1).get();
        vt(tt, Mt, -1)
    }
    function B(Mt) {
        const tt = N.index.add(-1).get();
        vt(tt, Mt, 1)
    }
    function Z() {
        return N.index.add(1).get() !== G()
    }
    function H() {
        return N.index.add(-1).get() !== G()
    }
    function rt() {
        return N.scrollSnapList
    }
    function A() {
        return N.scrollProgress.get(N.offsetLocation.get())
    }
    function G() {
        return N.index.get()
    }
    function W() {
        return N.indexPrevious.get()
    }
    function P() {
        return N.slidesInView.get()
    }
    function $() {
        return N.slidesInView.get(!1)
    }
    function pt() {
        return Y
    }
    function st() {
        return N
    }
    function ht() {
        return i
    }
    function gt() {
        return K
    }
    function qt() {
        return J
    }
    const Pt = {
        canScrollNext: Z,
        canScrollPrev: H,
        containerNode: gt,
        internalEngine: st,
        destroy: Bt,
        off: M,
        on: x,
        emit: E,
        plugins: pt,
        previousScrollSnap: W,
        reInit: D,
        rootNode: ht,
        scrollNext: mt,
        scrollPrev: B,
        scrollProgress: A,
        scrollSnapList: rt,
        scrollTo: vt,
        selectedScrollSnap: G,
        slideNodes: qt,
        slidesInView: P,
        slidesNotInView: $
    };
    return ct(a, l),
    setTimeout( () => h.emit("init"), 0),
    Pt
}
Qo.globalOptions = void 0;
function Io(i={}, a=[]) {
    const l = k.useRef(i)
      , o = k.useRef(a)
      , [c,d] = k.useState()
      , [f,p] = k.useState()
      , h = k.useCallback( () => {
        c && c.reInit(l.current, o.current)
    }
    , [c]);
    return k.useEffect( () => {
        hf(l.current, i) || (l.current = i,
        h())
    }
    , [i, h]),
    k.useEffect( () => {
        U1(o.current, a) || (o.current = a,
        h())
    }
    , [a, h]),
    k.useEffect( () => {
        if (_1() && f) {
            Qo.globalOptions = Io.globalOptions;
            const m = Qo(f, l.current, o.current);
            return d(m),
            () => m.destroy()
        } else
            d(void 0)
    }
    , [f, d]),
    [p, c]
}
Io.globalOptions = void 0;
function M0(i) {
    var a, l, o = "";
    if (typeof i == "string" || typeof i == "number")
        o += i;
    else if (typeof i == "object")
        if (Array.isArray(i)) {
            var c = i.length;
            for (a = 0; a < c; a++)
                i[a] && (l = M0(i[a])) && (o && (o += " "),
                o += l)
        } else
            for (l in i)
                i[l] && (o && (o += " "),
                o += l);
    return o
}
function D0() {
    for (var i, a, l = 0, o = "", c = arguments.length; l < c; l++)
        (i = arguments[l]) && (a = M0(i)) && (o && (o += " "),
        o += a);
    return o
}
const yf = "-"
  , mS = i => {
    const a = gS(i)
      , {conflictingClassGroups: l, conflictingClassGroupModifiers: o} = i;
    return {
        getClassGroupId: f => {
            const p = f.split(yf);
            return p[0] === "" && p.length !== 1 && p.shift(),
            C0(p, a) || pS(f)
        }
        ,
        getConflictingClassGroupIds: (f, p) => {
            const h = l[f] || [];
            return p && o[f] ? [...h, ...o[f]] : h
        }
    }
}
  , C0 = (i, a) => {
    if (i.length === 0)
        return a.classGroupId;
    const l = i[0]
      , o = a.nextPart.get(l)
      , c = o ? C0(i.slice(1), o) : void 0;
    if (c)
        return c;
    if (a.validators.length === 0)
        return;
    const d = i.join(yf);
    return a.validators.find( ({validator: f}) => f(d))?.classGroupId
}
  , tg = /^\[(.+)\]$/
  , pS = i => {
    if (tg.test(i)) {
        const a = tg.exec(i)[1]
          , l = a?.substring(0, a.indexOf(":"));
        if (l)
            return "arbitrary.." + l
    }
}
  , gS = i => {
    const {theme: a, classGroups: l} = i
      , o = {
        nextPart: new Map,
        validators: []
    };
    for (const c in l)
        kc(l[c], o, c, a);
    return o
}
  , kc = (i, a, l, o) => {
    i.forEach(c => {
        if (typeof c == "string") {
            const d = c === "" ? a : eg(a, c);
            d.classGroupId = l;
            return
        }
        if (typeof c == "function") {
            if (yS(c)) {
                kc(c(o), a, l, o);
                return
            }
            a.validators.push({
                validator: c,
                classGroupId: l
            });
            return
        }
        Object.entries(c).forEach( ([d,f]) => {
            kc(f, eg(a, d), l, o)
        }
        )
    }
    )
}
  , eg = (i, a) => {
    let l = i;
    return a.split(yf).forEach(o => {
        l.nextPart.has(o) || l.nextPart.set(o, {
            nextPart: new Map,
            validators: []
        }),
        l = l.nextPart.get(o)
    }
    ),
    l
}
  , yS = i => i.isThemeGetter
  , vS = i => {
    if (i < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let a = 0
      , l = new Map
      , o = new Map;
    const c = (d, f) => {
        l.set(d, f),
        a++,
        a > i && (a = 0,
        o = l,
        l = new Map)
    }
    ;
    return {
        get(d) {
            let f = l.get(d);
            if (f !== void 0)
                return f;
            if ((f = o.get(d)) !== void 0)
                return c(d, f),
                f
        },
        set(d, f) {
            l.has(d) ? l.set(d, f) : c(d, f)
        }
    }
}
  , Hc = "!"
  , qc = ":"
  , bS = qc.length
  , xS = i => {
    const {prefix: a, experimentalParseClassName: l} = i;
    let o = c => {
        const d = [];
        let f = 0, p = 0, h = 0, m;
        for (let E = 0; E < c.length; E++) {
            let D = c[E];
            if (f === 0 && p === 0) {
                if (D === qc) {
                    d.push(c.slice(h, E)),
                    h = E + bS;
                    continue
                }
                if (D === "/") {
                    m = E;
                    continue
                }
            }
            D === "[" ? f++ : D === "]" ? f-- : D === "(" ? p++ : D === ")" && p--
        }
        const y = d.length === 0 ? c : c.substring(h)
          , b = SS(y)
          , x = b !== y
          , M = m && m > h ? m - h : void 0;
        return {
            modifiers: d,
            hasImportantModifier: x,
            baseClassName: b,
            maybePostfixModifierPosition: M
        }
    }
    ;
    if (a) {
        const c = a + qc
          , d = o;
        o = f => f.startsWith(c) ? d(f.substring(c.length)) : {
            isExternal: !0,
            modifiers: [],
            hasImportantModifier: !1,
            baseClassName: f,
            maybePostfixModifierPosition: void 0
        }
    }
    if (l) {
        const c = o;
        o = d => l({
            className: d,
            parseClassName: c
        })
    }
    return o
}
  , SS = i => i.endsWith(Hc) ? i.substring(0, i.length - 1) : i.startsWith(Hc) ? i.substring(1) : i
  , TS = i => {
    const a = Object.fromEntries(i.orderSensitiveModifiers.map(o => [o, !0]));
    return o => {
        if (o.length <= 1)
            return o;
        const c = [];
        let d = [];
        return o.forEach(f => {
            f[0] === "[" || a[f] ? (c.push(...d.sort(), f),
            d = []) : d.push(f)
        }
        ),
        c.push(...d.sort()),
        c
    }
}
  , AS = i => ({
    cache: vS(i.cacheSize),
    parseClassName: xS(i),
    sortModifiers: TS(i),
    ...mS(i)
})
  , ES = /\s+/
  , wS = (i, a) => {
    const {parseClassName: l, getClassGroupId: o, getConflictingClassGroupIds: c, sortModifiers: d} = a
      , f = []
      , p = i.trim().split(ES);
    let h = "";
    for (let m = p.length - 1; m >= 0; m -= 1) {
        const y = p[m]
          , {isExternal: b, modifiers: x, hasImportantModifier: M, baseClassName: E, maybePostfixModifierPosition: D} = l(y);
        if (b) {
            h = y + (h.length > 0 ? " " + h : h);
            continue
        }
        let R = !!D
          , N = o(R ? E.substring(0, D) : E);
        if (!N) {
            if (!R) {
                h = y + (h.length > 0 ? " " + h : h);
                continue
            }
            if (N = o(E),
            !N) {
                h = y + (h.length > 0 ? " " + h : h);
                continue
            }
            R = !1
        }
        const j = d(x).join(":")
          , _ = M ? j + Hc : j
          , F = _ + N;
        if (f.includes(F))
            continue;
        f.push(F);
        const Y = c(N, R);
        for (let K = 0; K < Y.length; ++K) {
            const J = Y[K];
            f.push(_ + J)
        }
        h = y + (h.length > 0 ? " " + h : h)
    }
    return h
}
;
function MS() {
    let i = 0, a, l, o = "";
    for (; i < arguments.length; )
        (a = arguments[i++]) && (l = N0(a)) && (o && (o += " "),
        o += l);
    return o
}
const N0 = i => {
    if (typeof i == "string")
        return i;
    let a, l = "";
    for (let o = 0; o < i.length; o++)
        i[o] && (a = N0(i[o])) && (l && (l += " "),
        l += a);
    return l
}
;
function Gc(i, ...a) {
    let l, o, c, d = f;
    function f(h) {
        const m = a.reduce( (y, b) => b(y), i());
        return l = AS(m),
        o = l.cache.get,
        c = l.cache.set,
        d = p,
        p(h)
    }
    function p(h) {
        const m = o(h);
        if (m)
            return m;
        const y = wS(h, l);
        return c(h, y),
        y
    }
    return function() {
        return d(MS.apply(null, arguments))
    }
}
const se = i => {
    const a = l => l[i] || [];
    return a.isThemeGetter = !0,
    a
}
  , R0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , O0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , DS = /^\d+\/\d+$/
  , CS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , NS = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , RS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , OS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , jS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Ca = i => DS.test(i)
  , St = i => !!i && !Number.isNaN(Number(i))
  , li = i => !!i && Number.isInteger(Number(i))
  , xc = i => i.endsWith("%") && St(i.slice(0, -1))
  , jn = i => CS.test(i)
  , zS = () => !0
  , VS = i => NS.test(i) && !RS.test(i)
  , j0 = () => !1
  , _S = i => OS.test(i)
  , US = i => jS.test(i)
  , BS = i => !nt(i) && !it(i)
  , LS = i => Ba(i, _0, j0)
  , nt = i => R0.test(i)
  , Ri = i => Ba(i, U0, VS)
  , Sc = i => Ba(i, YS, St)
  , ng = i => Ba(i, z0, j0)
  , kS = i => Ba(i, V0, US)
  , zo = i => Ba(i, B0, _S)
  , it = i => O0.test(i)
  , Qs = i => La(i, U0)
  , HS = i => La(i, XS)
  , ig = i => La(i, z0)
  , qS = i => La(i, _0)
  , GS = i => La(i, V0)
  , Vo = i => La(i, B0, !0)
  , Ba = (i, a, l) => {
    const o = R0.exec(i);
    return o ? o[1] ? a(o[1]) : l(o[2]) : !1
}
  , La = (i, a, l=!1) => {
    const o = O0.exec(i);
    return o ? o[1] ? a(o[1]) : l : !1
}
  , z0 = i => i === "position" || i === "percentage"
  , V0 = i => i === "image" || i === "url"
  , _0 = i => i === "length" || i === "size" || i === "bg-size"
  , U0 = i => i === "length"
  , YS = i => i === "number"
  , XS = i => i === "family-name"
  , B0 = i => i === "shadow"
  , Yc = () => {
    const i = se("color")
      , a = se("font")
      , l = se("text")
      , o = se("font-weight")
      , c = se("tracking")
      , d = se("leading")
      , f = se("breakpoint")
      , p = se("container")
      , h = se("spacing")
      , m = se("radius")
      , y = se("shadow")
      , b = se("inset-shadow")
      , x = se("text-shadow")
      , M = se("drop-shadow")
      , E = se("blur")
      , D = se("perspective")
      , R = se("aspect")
      , N = se("ease")
      , j = se("animate")
      , _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , F = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , Y = () => [...F(), it, nt]
      , K = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , J = () => ["auto", "contain", "none"]
      , L = () => [it, nt, h]
      , I = () => [Ca, "full", "auto", ...L()]
      , ct = () => [li, "none", "subgrid", it, nt]
      , ot = () => ["auto", {
        span: ["full", li, it, nt]
    }, li, it, nt]
      , yt = () => [li, "auto", it, nt]
      , Bt = () => ["auto", "min", "max", "fr", it, nt]
      , vt = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , mt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , B = () => ["auto", ...L()]
      , Z = () => [Ca, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...L()]
      , H = () => [i, it, nt]
      , rt = () => [...F(), ig, ng, {
        position: [it, nt]
    }]
      , A = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
    }]
      , G = () => ["auto", "cover", "contain", qS, LS, {
        size: [it, nt]
    }]
      , W = () => [xc, Qs, Ri]
      , P = () => ["", "none", "full", m, it, nt]
      , $ = () => ["", St, Qs, Ri]
      , pt = () => ["solid", "dashed", "dotted", "double"]
      , st = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , ht = () => [St, xc, ig, ng]
      , gt = () => ["", "none", E, it, nt]
      , qt = () => ["none", St, it, nt]
      , Pt = () => ["none", St, it, nt]
      , Mt = () => [St, it, nt]
      , tt = () => [Ca, "full", ...L()];
    return {
        cacheSize: 500,
        theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [jn],
            breakpoint: [jn],
            color: [zS],
            container: [jn],
            "drop-shadow": [jn],
            ease: ["in", "out", "in-out"],
            font: [BS],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [jn],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [jn],
            shadow: [jn],
            spacing: ["px", St],
            text: [jn],
            "text-shadow": [jn],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", Ca, nt, it, R]
            }],
            container: ["container"],
            columns: [{
                columns: [St, nt, it, p]
            }],
            "break-after": [{
                "break-after": _()
            }],
            "break-before": [{
                "break-before": _()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: Y()
            }],
            overflow: [{
                overflow: K()
            }],
            "overflow-x": [{
                "overflow-x": K()
            }],
            "overflow-y": [{
                "overflow-y": K()
            }],
            overscroll: [{
                overscroll: J()
            }],
            "overscroll-x": [{
                "overscroll-x": J()
            }],
            "overscroll-y": [{
                "overscroll-y": J()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: I()
            }],
            "inset-x": [{
                "inset-x": I()
            }],
            "inset-y": [{
                "inset-y": I()
            }],
            start: [{
                start: I()
            }],
            end: [{
                end: I()
            }],
            top: [{
                top: I()
            }],
            right: [{
                right: I()
            }],
            bottom: [{
                bottom: I()
            }],
            left: [{
                left: I()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [li, "auto", it, nt]
            }],
            basis: [{
                basis: [Ca, "full", "auto", p, ...L()]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
                flex: [St, Ca, "auto", "initial", "none", nt]
            }],
            grow: [{
                grow: ["", St, it, nt]
            }],
            shrink: [{
                shrink: ["", St, it, nt]
            }],
            order: [{
                order: [li, "first", "last", "none", it, nt]
            }],
            "grid-cols": [{
                "grid-cols": ct()
            }],
            "col-start-end": [{
                col: ot()
            }],
            "col-start": [{
                "col-start": yt()
            }],
            "col-end": [{
                "col-end": yt()
            }],
            "grid-rows": [{
                "grid-rows": ct()
            }],
            "row-start-end": [{
                row: ot()
            }],
            "row-start": [{
                "row-start": yt()
            }],
            "row-end": [{
                "row-end": yt()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": Bt()
            }],
            "auto-rows": [{
                "auto-rows": Bt()
            }],
            gap: [{
                gap: L()
            }],
            "gap-x": [{
                "gap-x": L()
            }],
            "gap-y": [{
                "gap-y": L()
            }],
            "justify-content": [{
                justify: [...vt(), "normal"]
            }],
            "justify-items": [{
                "justify-items": [...mt(), "normal"]
            }],
            "justify-self": [{
                "justify-self": ["auto", ...mt()]
            }],
            "align-content": [{
                content: ["normal", ...vt()]
            }],
            "align-items": [{
                items: [...mt(), {
                    baseline: ["", "last"]
                }]
            }],
            "align-self": [{
                self: ["auto", ...mt(), {
                    baseline: ["", "last"]
                }]
            }],
            "place-content": [{
                "place-content": vt()
            }],
            "place-items": [{
                "place-items": [...mt(), "baseline"]
            }],
            "place-self": [{
                "place-self": ["auto", ...mt()]
            }],
            p: [{
                p: L()
            }],
            px: [{
                px: L()
            }],
            py: [{
                py: L()
            }],
            ps: [{
                ps: L()
            }],
            pe: [{
                pe: L()
            }],
            pt: [{
                pt: L()
            }],
            pr: [{
                pr: L()
            }],
            pb: [{
                pb: L()
            }],
            pl: [{
                pl: L()
            }],
            m: [{
                m: B()
            }],
            mx: [{
                mx: B()
            }],
            my: [{
                my: B()
            }],
            ms: [{
                ms: B()
            }],
            me: [{
                me: B()
            }],
            mt: [{
                mt: B()
            }],
            mr: [{
                mr: B()
            }],
            mb: [{
                mb: B()
            }],
            ml: [{
                ml: B()
            }],
            "space-x": [{
                "space-x": L()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": L()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
                size: Z()
            }],
            w: [{
                w: [p, "screen", ...Z()]
            }],
            "min-w": [{
                "min-w": [p, "screen", "none", ...Z()]
            }],
            "max-w": [{
                "max-w": [p, "screen", "none", "prose", {
                    screen: [f]
                }, ...Z()]
            }],
            h: [{
                h: ["screen", "lh", ...Z()]
            }],
            "min-h": [{
                "min-h": ["screen", "lh", "none", ...Z()]
            }],
            "max-h": [{
                "max-h": ["screen", "lh", ...Z()]
            }],
            "font-size": [{
                text: ["base", l, Qs, Ri]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: [o, it, Sc]
            }],
            "font-stretch": [{
                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", xc, nt]
            }],
            "font-family": [{
                font: [HS, nt, a]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: [c, it, nt]
            }],
            "line-clamp": [{
                "line-clamp": [St, "none", it, Sc]
            }],
            leading: [{
                leading: [d, ...L()]
            }],
            "list-image": [{
                "list-image": ["none", it, nt]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "list-style-type": [{
                list: ["disc", "decimal", "none", it, nt]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
                placeholder: H()
            }],
            "text-color": [{
                text: H()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...pt(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: [St, "from-font", "auto", it, Ri]
            }],
            "text-decoration-color": [{
                decoration: H()
            }],
            "underline-offset": [{
                "underline-offset": [St, "auto", it, nt]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: L()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", it, nt]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
                wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", it, nt]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: rt()
            }],
            "bg-repeat": [{
                bg: A()
            }],
            "bg-size": [{
                bg: G()
            }],
            "bg-image": [{
                bg: ["none", {
                    linear: [{
                        to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, li, it, nt],
                    radial: ["", it, nt],
                    conic: [li, it, nt]
                }, GS, kS]
            }],
            "bg-color": [{
                bg: H()
            }],
            "gradient-from-pos": [{
                from: W()
            }],
            "gradient-via-pos": [{
                via: W()
            }],
            "gradient-to-pos": [{
                to: W()
            }],
            "gradient-from": [{
                from: H()
            }],
            "gradient-via": [{
                via: H()
            }],
            "gradient-to": [{
                to: H()
            }],
            rounded: [{
                rounded: P()
            }],
            "rounded-s": [{
                "rounded-s": P()
            }],
            "rounded-e": [{
                "rounded-e": P()
            }],
            "rounded-t": [{
                "rounded-t": P()
            }],
            "rounded-r": [{
                "rounded-r": P()
            }],
            "rounded-b": [{
                "rounded-b": P()
            }],
            "rounded-l": [{
                "rounded-l": P()
            }],
            "rounded-ss": [{
                "rounded-ss": P()
            }],
            "rounded-se": [{
                "rounded-se": P()
            }],
            "rounded-ee": [{
                "rounded-ee": P()
            }],
            "rounded-es": [{
                "rounded-es": P()
            }],
            "rounded-tl": [{
                "rounded-tl": P()
            }],
            "rounded-tr": [{
                "rounded-tr": P()
            }],
            "rounded-br": [{
                "rounded-br": P()
            }],
            "rounded-bl": [{
                "rounded-bl": P()
            }],
            "border-w": [{
                border: $()
            }],
            "border-w-x": [{
                "border-x": $()
            }],
            "border-w-y": [{
                "border-y": $()
            }],
            "border-w-s": [{
                "border-s": $()
            }],
            "border-w-e": [{
                "border-e": $()
            }],
            "border-w-t": [{
                "border-t": $()
            }],
            "border-w-r": [{
                "border-r": $()
            }],
            "border-w-b": [{
                "border-b": $()
            }],
            "border-w-l": [{
                "border-l": $()
            }],
            "divide-x": [{
                "divide-x": $()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": $()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
                border: [...pt(), "hidden", "none"]
            }],
            "divide-style": [{
                divide: [...pt(), "hidden", "none"]
            }],
            "border-color": [{
                border: H()
            }],
            "border-color-x": [{
                "border-x": H()
            }],
            "border-color-y": [{
                "border-y": H()
            }],
            "border-color-s": [{
                "border-s": H()
            }],
            "border-color-e": [{
                "border-e": H()
            }],
            "border-color-t": [{
                "border-t": H()
            }],
            "border-color-r": [{
                "border-r": H()
            }],
            "border-color-b": [{
                "border-b": H()
            }],
            "border-color-l": [{
                "border-l": H()
            }],
            "divide-color": [{
                divide: H()
            }],
            "outline-style": [{
                outline: [...pt(), "none", "hidden"]
            }],
            "outline-offset": [{
                "outline-offset": [St, it, nt]
            }],
            "outline-w": [{
                outline: ["", St, Qs, Ri]
            }],
            "outline-color": [{
                outline: H()
            }],
            shadow: [{
                shadow: ["", "none", y, Vo, zo]
            }],
            "shadow-color": [{
                shadow: H()
            }],
            "inset-shadow": [{
                "inset-shadow": ["none", b, Vo, zo]
            }],
            "inset-shadow-color": [{
                "inset-shadow": H()
            }],
            "ring-w": [{
                ring: $()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: H()
            }],
            "ring-offset-w": [{
                "ring-offset": [St, Ri]
            }],
            "ring-offset-color": [{
                "ring-offset": H()
            }],
            "inset-ring-w": [{
                "inset-ring": $()
            }],
            "inset-ring-color": [{
                "inset-ring": H()
            }],
            "text-shadow": [{
                "text-shadow": ["none", x, Vo, zo]
            }],
            "text-shadow-color": [{
                "text-shadow": H()
            }],
            opacity: [{
                opacity: [St, it, nt]
            }],
            "mix-blend": [{
                "mix-blend": [...st(), "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
                "bg-blend": st()
            }],
            "mask-clip": [{
                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
                mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [St]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": ht()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": ht()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": H()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": H()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": ht()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": ht()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": H()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": H()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": ht()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": ht()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": H()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": H()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": ht()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": ht()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": H()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": H()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": ht()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": ht()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": H()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": H()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": ht()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": ht()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": H()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": H()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": ht()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": ht()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": H()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": H()
            }],
            "mask-image-radial": [{
                "mask-radial": [it, nt]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": ht()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": ht()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": H()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": H()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: ["side", "corner"],
                    farthest: ["side", "corner"]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": F()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [St]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": ht()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": ht()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": H()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": H()
            }],
            "mask-mode": [{
                mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
                mask: rt()
            }],
            "mask-repeat": [{
                mask: A()
            }],
            "mask-size": [{
                mask: G()
            }],
            "mask-type": [{
                "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
                mask: ["none", it, nt]
            }],
            filter: [{
                filter: ["", "none", it, nt]
            }],
            blur: [{
                blur: gt()
            }],
            brightness: [{
                brightness: [St, it, nt]
            }],
            contrast: [{
                contrast: [St, it, nt]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", M, Vo, zo]
            }],
            "drop-shadow-color": [{
                "drop-shadow": H()
            }],
            grayscale: [{
                grayscale: ["", St, it, nt]
            }],
            "hue-rotate": [{
                "hue-rotate": [St, it, nt]
            }],
            invert: [{
                invert: ["", St, it, nt]
            }],
            saturate: [{
                saturate: [St, it, nt]
            }],
            sepia: [{
                sepia: ["", St, it, nt]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none", it, nt]
            }],
            "backdrop-blur": [{
                "backdrop-blur": gt()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [St, it, nt]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [St, it, nt]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": ["", St, it, nt]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [St, it, nt]
            }],
            "backdrop-invert": [{
                "backdrop-invert": ["", St, it, nt]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [St, it, nt]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [St, it, nt]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": ["", St, it, nt]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": L()
            }],
            "border-spacing-x": [{
                "border-spacing-x": L()
            }],
            "border-spacing-y": [{
                "border-spacing-y": L()
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", it, nt]
            }],
            "transition-behavior": [{
                transition: ["normal", "discrete"]
            }],
            duration: [{
                duration: [St, "initial", it, nt]
            }],
            ease: [{
                ease: ["linear", "initial", N, it, nt]
            }],
            delay: [{
                delay: [St, it, nt]
            }],
            animate: [{
                animate: ["none", j, it, nt]
            }],
            backface: [{
                backface: ["hidden", "visible"]
            }],
            perspective: [{
                perspective: [D, it, nt]
            }],
            "perspective-origin": [{
                "perspective-origin": Y()
            }],
            rotate: [{
                rotate: qt()
            }],
            "rotate-x": [{
                "rotate-x": qt()
            }],
            "rotate-y": [{
                "rotate-y": qt()
            }],
            "rotate-z": [{
                "rotate-z": qt()
            }],
            scale: [{
                scale: Pt()
            }],
            "scale-x": [{
                "scale-x": Pt()
            }],
            "scale-y": [{
                "scale-y": Pt()
            }],
            "scale-z": [{
                "scale-z": Pt()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
                skew: Mt()
            }],
            "skew-x": [{
                "skew-x": Mt()
            }],
            "skew-y": [{
                "skew-y": Mt()
            }],
            transform: [{
                transform: [it, nt, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
                origin: Y()
            }],
            "transform-style": [{
                transform: ["3d", "flat"]
            }],
            translate: [{
                translate: tt()
            }],
            "translate-x": [{
                "translate-x": tt()
            }],
            "translate-y": [{
                "translate-y": tt()
            }],
            "translate-z": [{
                "translate-z": tt()
            }],
            "translate-none": ["translate-none"],
            accent: [{
                accent: H()
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            "caret-color": [{
                caret: H()
            }],
            "color-scheme": [{
                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", it, nt]
            }],
            "field-sizing": [{
                "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
                "pointer-events": ["auto", "none"]
            }],
            resize: [{
                resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": L()
            }],
            "scroll-mx": [{
                "scroll-mx": L()
            }],
            "scroll-my": [{
                "scroll-my": L()
            }],
            "scroll-ms": [{
                "scroll-ms": L()
            }],
            "scroll-me": [{
                "scroll-me": L()
            }],
            "scroll-mt": [{
                "scroll-mt": L()
            }],
            "scroll-mr": [{
                "scroll-mr": L()
            }],
            "scroll-mb": [{
                "scroll-mb": L()
            }],
            "scroll-ml": [{
                "scroll-ml": L()
            }],
            "scroll-p": [{
                "scroll-p": L()
            }],
            "scroll-px": [{
                "scroll-px": L()
            }],
            "scroll-py": [{
                "scroll-py": L()
            }],
            "scroll-ps": [{
                "scroll-ps": L()
            }],
            "scroll-pe": [{
                "scroll-pe": L()
            }],
            "scroll-pt": [{
                "scroll-pt": L()
            }],
            "scroll-pr": [{
                "scroll-pr": L()
            }],
            "scroll-pb": [{
                "scroll-pb": L()
            }],
            "scroll-pl": [{
                "scroll-pl": L()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", it, nt]
            }],
            fill: [{
                fill: ["none", ...H()]
            }],
            "stroke-w": [{
                stroke: [St, Qs, Ri, Sc]
            }],
            stroke: [{
                stroke: ["none", ...H()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
}
  , QS = (i, {cacheSize: a, prefix: l, experimentalParseClassName: o, extend: c={}, override: d={}}) => (Fs(i, "cacheSize", a),
Fs(i, "prefix", l),
Fs(i, "experimentalParseClassName", o),
_o(i.theme, d.theme),
_o(i.classGroups, d.classGroups),
_o(i.conflictingClassGroups, d.conflictingClassGroups),
_o(i.conflictingClassGroupModifiers, d.conflictingClassGroupModifiers),
Fs(i, "orderSensitiveModifiers", d.orderSensitiveModifiers),
Uo(i.theme, c.theme),
Uo(i.classGroups, c.classGroups),
Uo(i.conflictingClassGroups, c.conflictingClassGroups),
Uo(i.conflictingClassGroupModifiers, c.conflictingClassGroupModifiers),
L0(i, c, "orderSensitiveModifiers"),
i)
  , Fs = (i, a, l) => {
    l !== void 0 && (i[a] = l)
}
  , _o = (i, a) => {
    if (a)
        for (const l in a)
            Fs(i, l, a[l])
}
  , Uo = (i, a) => {
    if (a)
        for (const l in a)
            L0(i, a, l)
}
  , L0 = (i, a, l) => {
    const o = a[l];
    o !== void 0 && (i[l] = i[l] ? i[l].concat(o) : o)
}
  , ZS = (i, ...a) => typeof i == "function" ? Gc(Yc, i, ...a) : Gc( () => QS(Yc(), i), ...a)
  , KS = Gc(Yc);
function ka(...i) {
    return KS(D0(i))
}
function ag(i, a) {
    if (typeof i == "function")
        return i(a);
    i != null && (i.current = a)
}
function PS(...i) {
    return a => {
        let l = !1;
        const o = i.map(c => {
            const d = ag(c, a);
            return !l && typeof d == "function" && (l = !0),
            d
        }
        );
        if (l)
            return () => {
                for (let c = 0; c < o.length; c++) {
                    const d = o[c];
                    typeof d == "function" ? d() : ag(i[c], null)
                }
            }
    }
}
function FS(i) {
    const a = WS(i)
      , l = k.forwardRef( (o, c) => {
        const {children: d, ...f} = o
          , p = k.Children.toArray(d)
          , h = p.find(IS);
        if (h) {
            const m = h.props.children
              , y = p.map(b => b === h ? k.Children.count(m) > 1 ? k.Children.only(null) : k.isValidElement(m) ? m.props.children : null : b);
            return S.jsx(a, {
                ...f,
                ref: c,
                children: k.isValidElement(m) ? k.cloneElement(m, void 0, y) : null
            })
        }
        return S.jsx(a, {
            ...f,
            ref: c,
            children: d
        })
    }
    );
    return l.displayName = `${i}.Slot`,
    l
}
var JS = FS("Slot");
function WS(i) {
    const a = k.forwardRef( (l, o) => {
        const {children: c, ...d} = l;
        if (k.isValidElement(c)) {
            const f = eT(c)
              , p = tT(d, c.props);
            return c.type !== k.Fragment && (p.ref = o ? PS(o, f) : f),
            k.cloneElement(c, p)
        }
        return k.Children.count(c) > 1 ? k.Children.only(null) : null
    }
    );
    return a.displayName = `${i}.SlotClone`,
    a
}
var $S = Symbol("radix.slottable");
function IS(i) {
    return k.isValidElement(i) && typeof i.type == "function" && "__radixId"in i.type && i.type.__radixId === $S
}
function tT(i, a) {
    const l = {
        ...a
    };
    for (const o in a) {
        const c = i[o]
          , d = a[o];
        /^on[A-Z]/.test(o) ? c && d ? l[o] = (...p) => {
            const h = d(...p);
            return c(...p),
            h
        }
        : c && (l[o] = c) : o === "style" ? l[o] = {
            ...c,
            ...d
        } : o === "className" && (l[o] = [c, d].filter(Boolean).join(" "))
    }
    return {
        ...i,
        ...l
    }
}
function eT(i) {
    let a = Object.getOwnPropertyDescriptor(i.props, "ref")?.get
      , l = a && "isReactWarning"in a && a.isReactWarning;
    return l ? i.ref : (a = Object.getOwnPropertyDescriptor(i, "ref")?.get,
    l = a && "isReactWarning"in a && a.isReactWarning,
    l ? i.props.ref : i.props.ref || i.ref)
}
const sg = i => typeof i == "boolean" ? `${i}` : i === 0 ? "0" : i
  , lg = D0
  , nT = (i, a) => l => {
    var o;
    if (a?.variants == null)
        return lg(i, l?.class, l?.className);
    const {variants: c, defaultVariants: d} = a
      , f = Object.keys(c).map(m => {
        const y = l?.[m]
          , b = d?.[m];
        if (y === null)
            return null;
        const x = sg(y) || sg(b);
        return c[m][x]
    }
    )
      , p = l && Object.entries(l).reduce( (m, y) => {
        let[b,x] = y;
        return x === void 0 || (m[b] = x),
        m
    }
    , {})
      , h = a == null || (o = a.compoundVariants) === null || o === void 0 ? void 0 : o.reduce( (m, y) => {
        let {class: b, className: x, ...M} = y;
        return Object.entries(M).every(E => {
            let[D,R] = E;
            return Array.isArray(R) ? R.includes({
                ...d,
                ...p
            }[D]) : {
                ...d,
                ...p
            }[D] === R
        }
        ) ? [...m, b, x] : m
    }
    , []);
    return lg(i, f, h, l?.class, l?.className)
}
  , iT = nT("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function k0({className: i, variant: a, size: l, asChild: o=!1, ...c}) {
    const d = o ? JS : "button";
    return S.jsx(d, {
        "data-slot": "button",
        className: ka(iT({
            variant: a,
            size: l,
            className: i
        })),
        ...c
    })
}
const H0 = k.createContext(null);
function tr() {
    const i = k.useContext(H0);
    if (!i)
        throw new Error("useCarousel must be used within a <Carousel />");
    return i
}
function aT({orientation: i="horizontal", opts: a, setApi: l, plugins: o, className: c, children: d, ...f}) {
    const [p,h] = Io({
        ...a,
        axis: i === "horizontal" ? "x" : "y"
    }, o)
      , [m,y] = k.useState(!1)
      , [b,x] = k.useState(!1)
      , M = k.useCallback( () => {
        if (h) {
            const j = h.plugins().autoplay;
            j && j.reset()
        }
    }
    , [h]);
    k.useEffect( () => {
        if (!h)
            return;
        const j = document.querySelector(".embla__prev")
          , _ = document.querySelector(".embla__next");
        return j && j.addEventListener("click", M),
        _ && _.addEventListener("click", M),
        () => {
            j && j.removeEventListener("click", M),
            _ && _.removeEventListener("click", M)
        }
    }
    , [h, M]);
    const E = k.useCallback(j => {
        j && (y(j.canScrollPrev()),
        x(j.canScrollNext()))
    }
    , [])
      , D = k.useCallback( () => {
        h?.scrollPrev()
    }
    , [h])
      , R = k.useCallback( () => {
        h?.scrollNext()
    }
    , [h])
      , N = k.useCallback(j => {
        j.key === "ArrowLeft" ? (j.preventDefault(),
        D()) : j.key === "ArrowRight" && (j.preventDefault(),
        R())
    }
    , [D, R]);
    return k.useEffect( () => {
        !h || !l || l(h)
    }
    , [h, l]),
    k.useEffect( () => {
        if (h)
            return E(h),
            h.on("reInit", E),
            h.on("select", E),
            () => {
                h?.off("select", E)
            }
    }
    , [h, E]),
    S.jsx(H0.Provider, {
        value: {
            carouselRef: p,
            api: h,
            opts: a,
            orientation: i || (a?.axis === "y" ? "vertical" : "horizontal"),
            scrollPrev: D,
            scrollNext: R,
            canScrollPrev: m,
            canScrollNext: b
        },
        children: S.jsx("div", {
            onKeyDownCapture: N,
            className: ka("relative", c),
            role: "region",
            "aria-roledescription": "carousel",
            "data-slot": "carousel",
            ...f,
            children: d
        })
    })
}
function sT({className: i, ...a}) {
    const {carouselRef: l, orientation: o} = tr();
    return S.jsx("div", {
        ref: l,
        className: "overflow-hidden",
        "data-slot": "carousel-content",
        children: S.jsx("div", {
            className: ka("flex", o === "horizontal" ? "-ml-4" : "-mt-4 flex-col", i),
            ...a
        })
    })
}
function lT({className: i, ...a}) {
    const {orientation: l} = tr();
    return S.jsx("div", {
        role: "group",
        "aria-roledescription": "slide",
        "data-slot": "carousel-item",
        className: ka("min-w-0 shrink-0 grow-0 basis-full", l === "horizontal" ? "pl-4" : "pt-4", i),
        ...a
    })
}
function oT({className: i, variant: a="outline", size: l="icon", ...o}) {
    const {orientation: c, scrollPrev: d, canScrollPrev: f} = tr();
    return S.jsxs(k0, {
        "data-slot": "carousel-previous",
        variant: a,
        size: l,
        className: ka("absolute size-8 rounded-full", "embla__prev  ", c === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", i),
        disabled: !f,
        onClick: d,
        ...o,
        children: [S.jsx($x, {}), S.jsx("span", {
            className: "sr-only",
            children: "Previous slide"
        })]
    })
}
function rT({className: i, variant: a="outline", size: l="icon", ...o}) {
    const {orientation: c, scrollNext: d, canScrollNext: f} = tr();
    return S.jsxs(k0, {
        "data-slot": "carousel-next",
        variant: a,
        size: l,
        className: ka("absolute size-8 rounded-full", "embla__next", c === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", i),
        disabled: !f,
        onClick: d,
        ...o,
        children: [S.jsx(t1, {}), S.jsx("span", {
            className: "sr-only",
            children: "Next slide"
        })]
    })
}
const uT = {
    active: !0,
    breakpoints: {},
    delay: 4e3,
    jump: !1,
    playOnInit: !0,
    stopOnFocusIn: !0,
    stopOnInteraction: !0,
    stopOnMouseEnter: !1,
    stopOnLastSnap: !1,
    rootNode: null
};
function cT(i, a) {
    const l = i.scrollSnapList();
    return typeof a == "number" ? l.map( () => a) : a(l, i)
}
function fT(i, a) {
    const l = i.rootNode();
    return a && a(l) || l
}
function vf(i={}) {
    let a, l, o, c, d = null, f = 0, p = !1, h = !1, m = !1, y = !1;
    function b(vt, mt) {
        l = vt;
        const {mergeOptions: B, optionsAtMedia: Z} = mt
          , H = B(uT, vf.globalOptions)
          , rt = B(H, i);
        if (a = Z(rt),
        l.scrollSnapList().length <= 1)
            return;
        y = a.jump,
        o = !1,
        c = cT(l, a.delay);
        const {eventStore: A, ownerDocument: G} = l.internalEngine()
          , W = !!l.internalEngine().options.watchDrag
          , P = fT(l, a.rootNode);
        A.add(G, "visibilitychange", N),
        W && l.on("pointerDown", _),
        W && !a.stopOnInteraction && l.on("pointerUp", F),
        a.stopOnMouseEnter && A.add(P, "mouseenter", Y),
        a.stopOnMouseEnter && !a.stopOnInteraction && A.add(P, "mouseleave", K),
        a.stopOnFocusIn && l.on("slideFocusStart", R),
        a.stopOnFocusIn && !a.stopOnInteraction && A.add(l.containerNode(), "focusout", D),
        a.playOnInit && D()
    }
    function x() {
        l.off("pointerDown", _).off("pointerUp", F).off("slideFocusStart", R),
        R(),
        o = !0,
        p = !1
    }
    function M() {
        const {ownerWindow: vt} = l.internalEngine();
        vt.clearTimeout(f),
        f = vt.setTimeout(ot, c[l.selectedScrollSnap()]),
        d = new Date().getTime(),
        l.emit("autoplay:timerset")
    }
    function E() {
        const {ownerWindow: vt} = l.internalEngine();
        vt.clearTimeout(f),
        f = 0,
        d = null,
        l.emit("autoplay:timerstopped")
    }
    function D() {
        if (!o) {
            if (j()) {
                m = !0;
                return
            }
            p || l.emit("autoplay:play"),
            M(),
            p = !0
        }
    }
    function R() {
        o || (p && l.emit("autoplay:stop"),
        E(),
        p = !1)
    }
    function N() {
        if (j())
            return m = p,
            R();
        m && D()
    }
    function j() {
        const {ownerDocument: vt} = l.internalEngine();
        return vt.visibilityState === "hidden"
    }
    function _() {
        h || R()
    }
    function F() {
        h || D()
    }
    function Y() {
        h = !0,
        R()
    }
    function K() {
        h = !1,
        D()
    }
    function J(vt) {
        typeof vt < "u" && (y = vt),
        D()
    }
    function L() {
        p && R()
    }
    function I() {
        p && D()
    }
    function ct() {
        return p
    }
    function ot() {
        const {index: vt} = l.internalEngine()
          , mt = vt.clone().add(1).get()
          , B = l.scrollSnapList().length - 1
          , Z = a.stopOnLastSnap && mt === B;
        if (l.canScrollNext() ? l.scrollNext(y) : l.scrollTo(0, y),
        l.emit("autoplay:select"),
        Z)
            return R();
        D()
    }
    function yt() {
        if (!d)
            return null;
        const vt = c[l.selectedScrollSnap()]
          , mt = new Date().getTime() - d;
        return vt - mt
    }
    return {
        name: "autoplay",
        options: i,
        init: b,
        destroy: x,
        play: J,
        stop: L,
        reset: I,
        isPlaying: ct,
        timeUntilNext: yt
    }
}
vf.globalOptions = void 0;
const dT = {
    loop: !0
};
function hT() {
    const i = k.useRef(vf({
        delay: 5e3,
        stopOnInteraction: !0
    }));
    return S.jsx(S.Fragment, {
        children: S.jsxs("div", {
            className: "my-4 max-w-[80%] mx-auto",
            children: [S.jsxs("div", {
                className: "text-center mb-16",
                children: [S.jsx("h1", {
                    className: "text-6xl md:text-7xl font-bold mb-6 text-cyan-400 bg-clip-text ",
                    children: "Pictures"
                }), S.jsx("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
                })]
            }), S.jsxs(aT, {
                className: "w-full max-w-5xl mx-auto my-6",
                opts: dT,
                plugins: [i.current],
                children: [S.jsx(sT, {
                    children: Array.from({
                        length: 7
                    }).map( (a, l) => S.jsx(lT, {
                        children: S.jsx("div", {
                            className: "h-full flex justify-center items-center",
                            children: S.jsx("div", {
                                className: "p-1 h-fit ",
                                children: S.jsx("img", {
                                    src: `/images/${l + 1}.jpg`,
                                    alt: "",
                                    className: "rounded-2xl"
                                })
                            })
                        })
                    }, l))
                }), S.jsx(oT, {}), S.jsx(rT, {})]
            })]
        })
    })
}
const q0 = ({size: i=24, color: a="currentColor", ...l}) => k.createElement("svg", {
    viewBox: "0 0 24 24",
    width: i,
    height: i,
    stroke: a,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    ...l
}, k.createElement("path", {
    d: "m15 18-6-6 6-6"
}));
q0.displayName = "ChevronLeft";
const G0 = ({size: i=24, color: a="currentColor", ...l}) => k.createElement("svg", {
    viewBox: "0 0 24 24",
    width: i,
    height: i,
    stroke: a,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    ...l
}, k.createElement("path", {
    d: "m9 18 6-6-6-6"
}));
G0.displayName = "ChevronRight";
const mT = ZS({
    extend: {
        theme: {
            text: ["display-xs", "display-sm", "display-md", "display-lg", "display-xl", "display-2xl"]
        }
    }
})
  , Zo = mT
  , Y0 = k.createContext(null)
  , X0 = () => {
    const i = k.useContext(Y0);
    if (!i)
        throw new Error("The `useCarousel` hook must be used within a <Carousel />");
    return i
}
  , pT = ({orientation: i="horizontal", opts: a, setApi: l, plugins: o, className: c, children: d, ...f}) => {
    const [p,h] = Io({
        ...a,
        axis: i === "horizontal" ? "x" : "y"
    }, o)
      , [m,y] = k.useState(!1)
      , [b,x] = k.useState(!1)
      , [M,E] = k.useState(0)
      , [D,R] = k.useState([])
      , N = k.useCallback(K => {
        K && R(K.scrollSnapList())
    }
    , [])
      , j = k.useCallback(K => {
        K && (y(K.canScrollPrev()),
        x(K.canScrollNext()),
        E(K.selectedScrollSnap()))
    }
    , [])
      , _ = k.useCallback( () => {
        h?.scrollPrev()
    }
    , [h])
      , F = k.useCallback( () => {
        h?.scrollNext()
    }
    , [h])
      , Y = k.useCallback(K => {
        K.key === "ArrowLeft" ? (K.preventDefault(),
        _()) : K.key === "ArrowRight" && (K.preventDefault(),
        F())
    }
    , [_, F]);
    return k.useEffect( () => {
        !h || !l || l(h)
    }
    , [h, l]),
    k.useEffect( () => {
        if (h)
            return N(h),
            j(h),
            h.on("reInit", N),
            h.on("reInit", j),
            h.on("select", j),
            () => {
                h?.off("select", j)
            }
    }
    , [h, N, j]),
    S.jsx(Y0.Provider, {
        value: {
            carouselRef: p,
            api: h,
            opts: a,
            orientation: i || (a?.axis === "y" ? "vertical" : "horizontal"),
            scrollPrev: _,
            scrollNext: F,
            canScrollPrev: m,
            canScrollNext: b,
            selectedIndex: M,
            scrollSnaps: D
        },
        children: S.jsx("div", {
            onKeyDownCapture: Y,
            className: Zo("relative", c),
            role: "region",
            "aria-roledescription": "carousel",
            ...f,
            children: d
        })
    })
}
  , gT = ({className: i, overflowHidden: a=!0, ...l}) => {
    const {carouselRef: o, orientation: c} = X0();
    return S.jsx("div", {
        ref: o,
        className: Zo("h-full w-full", a && "overflow-hidden"),
        children: S.jsx("div", {
            className: Zo("flex max-h-full", c === "horizontal" ? "" : "flex-col", i),
            ...l
        })
    })
}
  , yT = ({className: i, ...a}) => S.jsx("div", {
    role: "group",
    "aria-roledescription": "slide",
    className: Zo("min-w-0 shrink-0 grow-0 basis-full", i),
    ...a
})
  , Q0 = ({className: i, children: a, asChild: l, direction: o, style: c, ...d}) => {
    const {scrollPrev: f, canScrollNext: p, scrollNext: h, canScrollPrev: m} = X0()
      , y = o === "prev" ? !m : !p
      , b = () => {
        y || (o === "prev" ? f() : h())
    }
      , x = typeof i == "function" ? i({
        isDisabled: y
    }) : i
      , M = o === "prev" ? "Previous slide" : "Next slide";
    return typeof a == "function" ? S.jsx(S.Fragment, {
        children: a({
            isDisabled: y,
            onClick: b
        })
    }) : l && k.isValidElement(a) ? k.cloneElement(a, {
        onClick: b,
        disabled: y,
        "aria-label": M,
        style: {
            ...a.props.style,
            ...c
        },
        className: [x, a.props.className].filter(Boolean).join(" ") || void 0
    }) : S.jsx("button", {
        "aria-label": M,
        disabled: y,
        className: x,
        onClick: b,
        ...d,
        children: a
    })
}
  , vT = i => S.jsx(Q0, {
    ...i,
    direction: "prev"
})
  , bT = i => S.jsx(Q0, {
    ...i,
    direction: "next"
})
  , Zs = {
    Root: pT,
    Content: gT,
    Item: yT,
    PrevTrigger: vT,
    NextTrigger: bT
}
  , xT = [{
    question: "What is our objective?",
    answer: "We aim to ignite a wave of innovation and creativity, giving students and startups the stage to shine and bring their ideas to life."
}, {
    question: "How Do We Help Innovators?",
    answer: "From hands-on mentorship to real-world connections, we empower innovators to transform sparks of inspiration into groundbreaking solutions."
}, {
    question: "Who Are We?",
    answer: "We are Shaastra, a passionate student team at IIT Madras, committed to organizing the Tech and Innovation Fair to spotlight emerging talent and empower the next generation of creators and entrepreneurs."
}, {
    question: "Why Should You Join Us?",
    answer: "We provide unmatched mentorship, dynamic networking and access to workshops with industry leaders—this is where your innovation journey truly begins, surrounded by passionate minds and endless possibilities."
}]
  , ST = () => {
    const i = k.useRef(null);
    return k.useEffect( () => {
        const a = setInterval( () => {
            i.current && i.current.click()
        }
        , 6e3);
        return () => clearInterval(a)
    }
    , []),
    S.jsx("div", {
        className: "min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 my-12",
        children: S.jsxs(Zs.Root, {
            className: "relative w-full max-w-sm sm:max-w-2xl md:max-w-4xl aspect-[3/4] sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-[2/1] min-h-[500px] sm:min-h-[400px] md:min-h-0",
            opts: {
                loop: !0
            },
            children: [S.jsx(Zs.PrevTrigger, {
                className: "absolute top-1/2 left-2 sm:left-4 md:left-6 z-10 flex size-8 sm:size-10 md:size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-200 hover:bg-blue-300 hover:text-[#323437] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-800 disabled:cursor-not-allowed disabled:opacity-50",
                children: S.jsx(q0, {
                    className: "size-4 sm:size-5 md:size-6"
                })
            }), S.jsx(Zs.NextTrigger, {
                ref: i,
                className: "absolute top-1/2 right-2 sm:right-4 md:right-6 z-10 flex size-8 sm:size-10 md:size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-200 hover:bg-blue-300 hover:text-[#323437] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-800 disabled:cursor-not-allowed disabled:opacity-50",
                children: S.jsx(G0, {
                    className: "size-4 sm:size-5 md:size-6"
                })
            }), S.jsx(Zs.Content, {
                className: "h-full",
                children: xT.map( (a, l) => S.jsx(Zs.Item, {
                    className: "flex flex-col justify-center items-center h-full p-4 sm:p-6 md:p-8 lg:p-12 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 relative overflow-hidden",
                    children: S.jsxs("div", {
                        className: "text-center space-y-4 sm:space-y-6 md:space-y-8 relative z-10 max-w-full px-2 sm:px-4",
                        children: [S.jsx("h2", {
                            className: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-400 mb-3 sm:mb-4 md:mb-6 font-mono tracking-tight drop-shadow-lg leading-tight",
                            children: a.question
                        }), S.jsx("p", {
                            className: "text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed font-mono opacity-90 max-w-full sm:max-w-xl md:max-w-2xl mx-auto drop-shadow-md",
                            children: a.answer
                        })]
                    })
                }, l))
            })]
        })
    })
}
;
function TT() {
    return S.jsx(S.Fragment, {
        children: S.jsx("div", {
            className: "min-h-screen bg-cover bg-center bg-no-repeat bg-fixed relative",
            style: {
                backgroundImage: 'url("/bgimage1-removebg-preview.png")'
            },
            children: S.jsx(ST, {})
        })
    })
}
const bf = k.createContext({});
function xf(i) {
    const a = k.useRef(null);
    return a.current === null && (a.current = i()),
    a.current
}
const Sf = typeof window < "u"
  , Z0 = Sf ? k.useLayoutEffect : k.useEffect
  , er = k.createContext(null);
function Tf(i, a) {
    i.indexOf(a) === -1 && i.push(a)
}
function Af(i, a) {
    const l = i.indexOf(a);
    l > -1 && i.splice(l, 1)
}
const zn = (i, a, l) => l > a ? a : l < i ? i : l;
let Ef = () => {}
;
const Vn = {}
  , K0 = i => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);
function P0(i) {
    return typeof i == "object" && i !== null
}
const F0 = i => /^0[^.\s]+$/u.test(i);
function wf(i) {
    let a;
    return () => (a === void 0 && (a = i()),
    a)
}
const Je = i => i
  , AT = (i, a) => l => a(i(l))
  , hl = (...i) => i.reduce(AT)
  , ll = (i, a, l) => {
    const o = a - i;
    return o === 0 ? 1 : (l - i) / o
}
;
class Mf {
    constructor() {
        this.subscriptions = []
    }
    add(a) {
        return Tf(this.subscriptions, a),
        () => Af(this.subscriptions, a)
    }
    notify(a, l, o) {
        const c = this.subscriptions.length;
        if (c)
            if (c === 1)
                this.subscriptions[0](a, l, o);
            else
                for (let d = 0; d < c; d++) {
                    const f = this.subscriptions[d];
                    f && f(a, l, o)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const dn = i => i * 1e3
  , Fe = i => i / 1e3;
function J0(i, a) {
    return a ? i * (1e3 / a) : 0
}
const W0 = (i, a, l) => (((1 - 3 * l + 3 * a) * i + (3 * l - 6 * a)) * i + 3 * a) * i
  , ET = 1e-7
  , wT = 12;
function MT(i, a, l, o, c) {
    let d, f, p = 0;
    do
        f = a + (l - a) / 2,
        d = W0(f, o, c) - i,
        d > 0 ? l = f : a = f;
    while (Math.abs(d) > ET && ++p < wT);
    return f
}
function ml(i, a, l, o) {
    if (i === a && l === o)
        return Je;
    const c = d => MT(d, 0, 1, i, l);
    return d => d === 0 || d === 1 ? d : W0(c(d), a, o)
}
const $0 = i => a => a <= .5 ? i(2 * a) / 2 : (2 - i(2 * (1 - a))) / 2
  , I0 = i => a => 1 - i(1 - a)
  , ty = ml(.33, 1.53, .69, .99)
  , Df = I0(ty)
  , ey = $0(Df)
  , ny = i => (i *= 2) < 1 ? .5 * Df(i) : .5 * (2 - Math.pow(2, -10 * (i - 1)))
  , Cf = i => 1 - Math.sin(Math.acos(i))
  , iy = I0(Cf)
  , ay = $0(Cf)
  , DT = ml(.42, 0, 1, 1)
  , CT = ml(0, 0, .58, 1)
  , sy = ml(.42, 0, .58, 1)
  , NT = i => Array.isArray(i) && typeof i[0] != "number"
  , ly = i => Array.isArray(i) && typeof i[0] == "number"
  , RT = {
    linear: Je,
    easeIn: DT,
    easeInOut: sy,
    easeOut: CT,
    circIn: Cf,
    circInOut: ay,
    circOut: iy,
    backIn: Df,
    backInOut: ey,
    backOut: ty,
    anticipate: ny
}
  , OT = i => typeof i == "string"
  , og = i => {
    if (ly(i)) {
        Ef(i.length === 4);
        const [a,l,o,c] = i;
        return ml(a, l, o, c)
    } else if (OT(i))
        return RT[i];
    return i
}
  , Bo = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function jT(i, a) {
    let l = new Set
      , o = new Set
      , c = !1
      , d = !1;
    const f = new WeakSet;
    let p = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function h(y) {
        f.has(y) && (m.schedule(y),
        i()),
        y(p)
    }
    const m = {
        schedule: (y, b=!1, x=!1) => {
            const E = x && c ? l : o;
            return b && f.add(y),
            E.has(y) || E.add(y),
            y
        }
        ,
        cancel: y => {
            o.delete(y),
            f.delete(y)
        }
        ,
        process: y => {
            if (p = y,
            c) {
                d = !0;
                return
            }
            c = !0,
            [l,o] = [o, l],
            l.forEach(h),
            l.clear(),
            c = !1,
            d && (d = !1,
            m.process(y))
        }
    };
    return m
}
const zT = 40;
function oy(i, a) {
    let l = !1
      , o = !0;
    const c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , d = () => l = !0
      , f = Bo.reduce( (_, F) => (_[F] = jT(d),
    _), {})
      , {setup: p, read: h, resolveKeyframes: m, preUpdate: y, update: b, preRender: x, render: M, postRender: E} = f
      , D = () => {
        const _ = Vn.useManualTiming ? c.timestamp : performance.now();
        l = !1,
        Vn.useManualTiming || (c.delta = o ? 1e3 / 60 : Math.max(Math.min(_ - c.timestamp, zT), 1)),
        c.timestamp = _,
        c.isProcessing = !0,
        p.process(c),
        h.process(c),
        m.process(c),
        y.process(c),
        b.process(c),
        x.process(c),
        M.process(c),
        E.process(c),
        c.isProcessing = !1,
        l && a && (o = !1,
        i(D))
    }
      , R = () => {
        l = !0,
        o = !0,
        c.isProcessing || i(D)
    }
    ;
    return {
        schedule: Bo.reduce( (_, F) => {
            const Y = f[F];
            return _[F] = (K, J=!1, L=!1) => (l || R(),
            Y.schedule(K, J, L)),
            _
        }
        , {}),
        cancel: _ => {
            for (let F = 0; F < Bo.length; F++)
                f[Bo[F]].cancel(_)
        }
        ,
        state: c,
        steps: f
    }
}
const {schedule: Ht, cancel: ri, state: ge, steps: Tc} = oy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Je, !0);
let qo;
function VT() {
    qo = void 0
}
const Ne = {
    now: () => (qo === void 0 && Ne.set(ge.isProcessing || Vn.useManualTiming ? ge.timestamp : performance.now()),
    qo),
    set: i => {
        qo = i,
        queueMicrotask(VT)
    }
}
  , ry = i => a => typeof a == "string" && a.startsWith(i)
  , Nf = ry("--")
  , _T = ry("var(--")
  , Rf = i => _T(i) ? UT.test(i.split("/*")[0].trim()) : !1
  , UT = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , Ha = {
    test: i => typeof i == "number",
    parse: parseFloat,
    transform: i => i
}
  , ol = {
    ...Ha,
    transform: i => zn(0, 1, i)
}
  , Lo = {
    ...Ha,
    default: 1
}
  , $s = i => Math.round(i * 1e5) / 1e5
  , Of = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function BT(i) {
    return i == null
}
const LT = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , jf = (i, a) => l => !!(typeof l == "string" && LT.test(l) && l.startsWith(i) || a && !BT(l) && Object.prototype.hasOwnProperty.call(l, a))
  , uy = (i, a, l) => o => {
    if (typeof o != "string")
        return o;
    const [c,d,f,p] = o.match(Of);
    return {
        [i]: parseFloat(c),
        [a]: parseFloat(d),
        [l]: parseFloat(f),
        alpha: p !== void 0 ? parseFloat(p) : 1
    }
}
  , kT = i => zn(0, 255, i)
  , Ac = {
    ...Ha,
    transform: i => Math.round(kT(i))
}
  , zi = {
    test: jf("rgb", "red"),
    parse: uy("red", "green", "blue"),
    transform: ({red: i, green: a, blue: l, alpha: o=1}) => "rgba(" + Ac.transform(i) + ", " + Ac.transform(a) + ", " + Ac.transform(l) + ", " + $s(ol.transform(o)) + ")"
};
function HT(i) {
    let a = ""
      , l = ""
      , o = ""
      , c = "";
    return i.length > 5 ? (a = i.substring(1, 3),
    l = i.substring(3, 5),
    o = i.substring(5, 7),
    c = i.substring(7, 9)) : (a = i.substring(1, 2),
    l = i.substring(2, 3),
    o = i.substring(3, 4),
    c = i.substring(4, 5),
    a += a,
    l += l,
    o += o,
    c += c),
    {
        red: parseInt(a, 16),
        green: parseInt(l, 16),
        blue: parseInt(o, 16),
        alpha: c ? parseInt(c, 16) / 255 : 1
    }
}
const Xc = {
    test: jf("#"),
    parse: HT,
    transform: zi.transform
}
  , pl = i => ({
    test: a => typeof a == "string" && a.endsWith(i) && a.split(" ").length === 1,
    parse: parseFloat,
    transform: a => `${a}${i}`
})
  , oi = pl("deg")
  , hn = pl("%")
  , dt = pl("px")
  , qT = pl("vh")
  , GT = pl("vw")
  , rg = {
    ...hn,
    parse: i => hn.parse(i) / 100,
    transform: i => hn.transform(i * 100)
}
  , Na = {
    test: jf("hsl", "hue"),
    parse: uy("hue", "saturation", "lightness"),
    transform: ({hue: i, saturation: a, lightness: l, alpha: o=1}) => "hsla(" + Math.round(i) + ", " + hn.transform($s(a)) + ", " + hn.transform($s(l)) + ", " + $s(ol.transform(o)) + ")"
}
  , ee = {
    test: i => zi.test(i) || Xc.test(i) || Na.test(i),
    parse: i => zi.test(i) ? zi.parse(i) : Na.test(i) ? Na.parse(i) : Xc.parse(i),
    transform: i => typeof i == "string" ? i : i.hasOwnProperty("red") ? zi.transform(i) : Na.transform(i),
    getAnimatableNone: i => {
        const a = ee.parse(i);
        return a.alpha = 0,
        ee.transform(a)
    }
}
  , YT = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function XT(i) {
    return isNaN(i) && typeof i == "string" && (i.match(Of)?.length || 0) + (i.match(YT)?.length || 0) > 0
}
const cy = "number"
  , fy = "color"
  , QT = "var"
  , ZT = "var("
  , ug = "${}"
  , KT = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function rl(i) {
    const a = i.toString()
      , l = []
      , o = {
        color: [],
        number: [],
        var: []
    }
      , c = [];
    let d = 0;
    const p = a.replace(KT, h => (ee.test(h) ? (o.color.push(d),
    c.push(fy),
    l.push(ee.parse(h))) : h.startsWith(ZT) ? (o.var.push(d),
    c.push(QT),
    l.push(h)) : (o.number.push(d),
    c.push(cy),
    l.push(parseFloat(h))),
    ++d,
    ug)).split(ug);
    return {
        values: l,
        split: p,
        indexes: o,
        types: c
    }
}
function dy(i) {
    return rl(i).values
}
function hy(i) {
    const {split: a, types: l} = rl(i)
      , o = a.length;
    return c => {
        let d = "";
        for (let f = 0; f < o; f++)
            if (d += a[f],
            c[f] !== void 0) {
                const p = l[f];
                p === cy ? d += $s(c[f]) : p === fy ? d += ee.transform(c[f]) : d += c[f]
            }
        return d
    }
}
const PT = i => typeof i == "number" ? 0 : ee.test(i) ? ee.getAnimatableNone(i) : i;
function FT(i) {
    const a = dy(i);
    return hy(i)(a.map(PT))
}
const ui = {
    test: XT,
    parse: dy,
    createTransformer: hy,
    getAnimatableNone: FT
};
function Ec(i, a, l) {
    return l < 0 && (l += 1),
    l > 1 && (l -= 1),
    l < 1 / 6 ? i + (a - i) * 6 * l : l < 1 / 2 ? a : l < 2 / 3 ? i + (a - i) * (2 / 3 - l) * 6 : i
}
function JT({hue: i, saturation: a, lightness: l, alpha: o}) {
    i /= 360,
    a /= 100,
    l /= 100;
    let c = 0
      , d = 0
      , f = 0;
    if (!a)
        c = d = f = l;
    else {
        const p = l < .5 ? l * (1 + a) : l + a - l * a
          , h = 2 * l - p;
        c = Ec(h, p, i + 1 / 3),
        d = Ec(h, p, i),
        f = Ec(h, p, i - 1 / 3)
    }
    return {
        red: Math.round(c * 255),
        green: Math.round(d * 255),
        blue: Math.round(f * 255),
        alpha: o
    }
}
function Ko(i, a) {
    return l => l > 0 ? a : i
}
const Xt = (i, a, l) => i + (a - i) * l
  , wc = (i, a, l) => {
    const o = i * i
      , c = l * (a * a - o) + o;
    return c < 0 ? 0 : Math.sqrt(c)
}
  , WT = [Xc, zi, Na]
  , $T = i => WT.find(a => a.test(i));
function cg(i) {
    const a = $T(i);
    if (!a)
        return !1;
    let l = a.parse(i);
    return a === Na && (l = JT(l)),
    l
}
const fg = (i, a) => {
    const l = cg(i)
      , o = cg(a);
    if (!l || !o)
        return Ko(i, a);
    const c = {
        ...l
    };
    return d => (c.red = wc(l.red, o.red, d),
    c.green = wc(l.green, o.green, d),
    c.blue = wc(l.blue, o.blue, d),
    c.alpha = Xt(l.alpha, o.alpha, d),
    zi.transform(c))
}
  , Qc = new Set(["none", "hidden"]);
function IT(i, a) {
    return Qc.has(i) ? l => l <= 0 ? i : a : l => l >= 1 ? a : i
}
function t2(i, a) {
    return l => Xt(i, a, l)
}
function zf(i) {
    return typeof i == "number" ? t2 : typeof i == "string" ? Rf(i) ? Ko : ee.test(i) ? fg : i2 : Array.isArray(i) ? my : typeof i == "object" ? ee.test(i) ? fg : e2 : Ko
}
function my(i, a) {
    const l = [...i]
      , o = l.length
      , c = i.map( (d, f) => zf(d)(d, a[f]));
    return d => {
        for (let f = 0; f < o; f++)
            l[f] = c[f](d);
        return l
    }
}
function e2(i, a) {
    const l = {
        ...i,
        ...a
    }
      , o = {};
    for (const c in l)
        i[c] !== void 0 && a[c] !== void 0 && (o[c] = zf(i[c])(i[c], a[c]));
    return c => {
        for (const d in o)
            l[d] = o[d](c);
        return l
    }
}
function n2(i, a) {
    const l = []
      , o = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let c = 0; c < a.values.length; c++) {
        const d = a.types[c]
          , f = i.indexes[d][o[d]]
          , p = i.values[f] ?? 0;
        l[c] = p,
        o[d]++
    }
    return l
}
const i2 = (i, a) => {
    const l = ui.createTransformer(a)
      , o = rl(i)
      , c = rl(a);
    return o.indexes.var.length === c.indexes.var.length && o.indexes.color.length === c.indexes.color.length && o.indexes.number.length >= c.indexes.number.length ? Qc.has(i) && !c.values.length || Qc.has(a) && !o.values.length ? IT(i, a) : hl(my(n2(o, c), c.values), l) : Ko(i, a)
}
;
function py(i, a, l) {
    return typeof i == "number" && typeof a == "number" && typeof l == "number" ? Xt(i, a, l) : zf(i)(i, a)
}
const a2 = i => {
    const a = ({timestamp: l}) => i(l);
    return {
        start: (l=!0) => Ht.update(a, l),
        stop: () => ri(a),
        now: () => ge.isProcessing ? ge.timestamp : Ne.now()
    }
}
  , gy = (i, a, l=10) => {
    let o = "";
    const c = Math.max(Math.round(a / l), 2);
    for (let d = 0; d < c; d++)
        o += Math.round(i(d / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${o.substring(0, o.length - 2)})`
}
  , Po = 2e4;
function Vf(i) {
    let a = 0;
    const l = 50;
    let o = i.next(a);
    for (; !o.done && a < Po; )
        a += l,
        o = i.next(a);
    return a >= Po ? 1 / 0 : a
}
function s2(i, a=100, l) {
    const o = l({
        ...i,
        keyframes: [0, a]
    })
      , c = Math.min(Vf(o), Po);
    return {
        type: "keyframes",
        ease: d => o.next(c * d).value / a,
        duration: Fe(c)
    }
}
const l2 = 5;
function yy(i, a, l) {
    const o = Math.max(a - l2, 0);
    return J0(l - i(o), a - o)
}
const Kt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , Mc = .001;
function o2({duration: i=Kt.duration, bounce: a=Kt.bounce, velocity: l=Kt.velocity, mass: o=Kt.mass}) {
    let c, d, f = 1 - a;
    f = zn(Kt.minDamping, Kt.maxDamping, f),
    i = zn(Kt.minDuration, Kt.maxDuration, Fe(i)),
    f < 1 ? (c = m => {
        const y = m * f
          , b = y * i
          , x = y - l
          , M = Zc(m, f)
          , E = Math.exp(-b);
        return Mc - x / M * E
    }
    ,
    d = m => {
        const b = m * f * i
          , x = b * l + l
          , M = Math.pow(f, 2) * Math.pow(m, 2) * i
          , E = Math.exp(-b)
          , D = Zc(Math.pow(m, 2), f);
        return (-c(m) + Mc > 0 ? -1 : 1) * ((x - M) * E) / D
    }
    ) : (c = m => {
        const y = Math.exp(-m * i)
          , b = (m - l) * i + 1;
        return -Mc + y * b
    }
    ,
    d = m => {
        const y = Math.exp(-m * i)
          , b = (l - m) * (i * i);
        return y * b
    }
    );
    const p = 5 / i
      , h = u2(c, d, p);
    if (i = dn(i),
    isNaN(h))
        return {
            stiffness: Kt.stiffness,
            damping: Kt.damping,
            duration: i
        };
    {
        const m = Math.pow(h, 2) * o;
        return {
            stiffness: m,
            damping: f * 2 * Math.sqrt(o * m),
            duration: i
        }
    }
}
const r2 = 12;
function u2(i, a, l) {
    let o = l;
    for (let c = 1; c < r2; c++)
        o = o - i(o) / a(o);
    return o
}
function Zc(i, a) {
    return i * Math.sqrt(1 - a * a)
}
const c2 = ["duration", "bounce"]
  , f2 = ["stiffness", "damping", "mass"];
function dg(i, a) {
    return a.some(l => i[l] !== void 0)
}
function d2(i) {
    let a = {
        velocity: Kt.velocity,
        stiffness: Kt.stiffness,
        damping: Kt.damping,
        mass: Kt.mass,
        isResolvedFromDuration: !1,
        ...i
    };
    if (!dg(i, f2) && dg(i, c2))
        if (i.visualDuration) {
            const l = i.visualDuration
              , o = 2 * Math.PI / (l * 1.2)
              , c = o * o
              , d = 2 * zn(.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
            a = {
                ...a,
                mass: Kt.mass,
                stiffness: c,
                damping: d
            }
        } else {
            const l = o2(i);
            a = {
                ...a,
                ...l,
                mass: Kt.mass
            },
            a.isResolvedFromDuration = !0
        }
    return a
}
function Fo(i=Kt.visualDuration, a=Kt.bounce) {
    const l = typeof i != "object" ? {
        visualDuration: i,
        keyframes: [0, 1],
        bounce: a
    } : i;
    let {restSpeed: o, restDelta: c} = l;
    const d = l.keyframes[0]
      , f = l.keyframes[l.keyframes.length - 1]
      , p = {
        done: !1,
        value: d
    }
      , {stiffness: h, damping: m, mass: y, duration: b, velocity: x, isResolvedFromDuration: M} = d2({
        ...l,
        velocity: -Fe(l.velocity || 0)
    })
      , E = x || 0
      , D = m / (2 * Math.sqrt(h * y))
      , R = f - d
      , N = Fe(Math.sqrt(h / y))
      , j = Math.abs(R) < 5;
    o || (o = j ? Kt.restSpeed.granular : Kt.restSpeed.default),
    c || (c = j ? Kt.restDelta.granular : Kt.restDelta.default);
    let _;
    if (D < 1) {
        const Y = Zc(N, D);
        _ = K => {
            const J = Math.exp(-D * N * K);
            return f - J * ((E + D * N * R) / Y * Math.sin(Y * K) + R * Math.cos(Y * K))
        }
    } else if (D === 1)
        _ = Y => f - Math.exp(-N * Y) * (R + (E + N * R) * Y);
    else {
        const Y = N * Math.sqrt(D * D - 1);
        _ = K => {
            const J = Math.exp(-D * N * K)
              , L = Math.min(Y * K, 300);
            return f - J * ((E + D * N * R) * Math.sinh(L) + Y * R * Math.cosh(L)) / Y
        }
    }
    const F = {
        calculatedDuration: M && b || null,
        next: Y => {
            const K = _(Y);
            if (M)
                p.done = Y >= b;
            else {
                let J = Y === 0 ? E : 0;
                D < 1 && (J = Y === 0 ? dn(E) : yy(_, Y, K));
                const L = Math.abs(J) <= o
                  , I = Math.abs(f - K) <= c;
                p.done = L && I
            }
            return p.value = p.done ? f : K,
            p
        }
        ,
        toString: () => {
            const Y = Math.min(Vf(F), Po)
              , K = gy(J => F.next(Y * J).value, Y, 30);
            return Y + "ms " + K
        }
        ,
        toTransition: () => {}
    };
    return F
}
Fo.applyToOptions = i => {
    const a = s2(i, 100, Fo);
    return i.ease = a.ease,
    i.duration = dn(a.duration),
    i.type = "keyframes",
    i
}
;
function Kc({keyframes: i, velocity: a=0, power: l=.8, timeConstant: o=325, bounceDamping: c=10, bounceStiffness: d=500, modifyTarget: f, min: p, max: h, restDelta: m=.5, restSpeed: y}) {
    const b = i[0]
      , x = {
        done: !1,
        value: b
    }
      , M = L => p !== void 0 && L < p || h !== void 0 && L > h
      , E = L => p === void 0 ? h : h === void 0 || Math.abs(p - L) < Math.abs(h - L) ? p : h;
    let D = l * a;
    const R = b + D
      , N = f === void 0 ? R : f(R);
    N !== R && (D = N - b);
    const j = L => -D * Math.exp(-L / o)
      , _ = L => N + j(L)
      , F = L => {
        const I = j(L)
          , ct = _(L);
        x.done = Math.abs(I) <= m,
        x.value = x.done ? N : ct
    }
    ;
    let Y, K;
    const J = L => {
        M(x.value) && (Y = L,
        K = Fo({
            keyframes: [x.value, E(x.value)],
            velocity: yy(_, L, x.value),
            damping: c,
            stiffness: d,
            restDelta: m,
            restSpeed: y
        }))
    }
    ;
    return J(0),
    {
        calculatedDuration: null,
        next: L => {
            let I = !1;
            return !K && Y === void 0 && (I = !0,
            F(L),
            J(L)),
            Y !== void 0 && L >= Y ? K.next(L - Y) : (!I && F(L),
            x)
        }
    }
}
function h2(i, a, l) {
    const o = []
      , c = l || Vn.mix || py
      , d = i.length - 1;
    for (let f = 0; f < d; f++) {
        let p = c(i[f], i[f + 1]);
        if (a) {
            const h = Array.isArray(a) ? a[f] || Je : a;
            p = hl(h, p)
        }
        o.push(p)
    }
    return o
}
function m2(i, a, {clamp: l=!0, ease: o, mixer: c}={}) {
    const d = i.length;
    if (Ef(d === a.length),
    d === 1)
        return () => a[0];
    if (d === 2 && a[0] === a[1])
        return () => a[1];
    const f = i[0] === i[1];
    i[0] > i[d - 1] && (i = [...i].reverse(),
    a = [...a].reverse());
    const p = h2(a, o, c)
      , h = p.length
      , m = y => {
        if (f && y < i[0])
            return a[0];
        let b = 0;
        if (h > 1)
            for (; b < i.length - 2 && !(y < i[b + 1]); b++)
                ;
        const x = ll(i[b], i[b + 1], y);
        return p[b](x)
    }
    ;
    return l ? y => m(zn(i[0], i[d - 1], y)) : m
}
function p2(i, a) {
    const l = i[i.length - 1];
    for (let o = 1; o <= a; o++) {
        const c = ll(0, a, o);
        i.push(Xt(l, 1, c))
    }
}
function g2(i) {
    const a = [0];
    return p2(a, i.length - 1),
    a
}
function y2(i, a) {
    return i.map(l => l * a)
}
function v2(i, a) {
    return i.map( () => a || sy).splice(0, i.length - 1)
}
function Is({duration: i=300, keyframes: a, times: l, ease: o="easeInOut"}) {
    const c = NT(o) ? o.map(og) : og(o)
      , d = {
        done: !1,
        value: a[0]
    }
      , f = y2(l && l.length === a.length ? l : g2(a), i)
      , p = m2(f, a, {
        ease: Array.isArray(c) ? c : v2(a, c)
    });
    return {
        calculatedDuration: i,
        next: h => (d.value = p(h),
        d.done = h >= i,
        d)
    }
}
const b2 = i => i !== null;
function _f(i, {repeat: a, repeatType: l="loop"}, o, c=1) {
    const d = i.filter(b2)
      , p = c < 0 || a && l !== "loop" && a % 2 === 1 ? 0 : d.length - 1;
    return !p || o === void 0 ? d[p] : o
}
const x2 = {
    decay: Kc,
    inertia: Kc,
    tween: Is,
    keyframes: Is,
    spring: Fo
};
function vy(i) {
    typeof i.type == "string" && (i.type = x2[i.type])
}
class Uf {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(a => {
            this.resolve = a
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(a, l) {
        return this.finished.then(a, l)
    }
}
const S2 = i => i / 100;
class Bf extends Uf {
    constructor(a) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            const {motionValue: l} = this.options;
            l && l.updatedAt !== Ne.now() && this.tick(Ne.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            this.options.onStop?.())
        }
        ,
        this.options = a,
        this.initAnimation(),
        this.play(),
        a.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: a} = this;
        vy(a);
        const {type: l=Is, repeat: o=0, repeatDelay: c=0, repeatType: d, velocity: f=0} = a;
        let {keyframes: p} = a;
        const h = l || Is;
        h !== Is && typeof p[0] != "number" && (this.mixKeyframes = hl(S2, py(p[0], p[1])),
        p = [0, 100]);
        const m = h({
            ...a,
            keyframes: p
        });
        d === "mirror" && (this.mirroredGenerator = h({
            ...a,
            keyframes: [...p].reverse(),
            velocity: -f
        })),
        m.calculatedDuration === null && (m.calculatedDuration = Vf(m));
        const {calculatedDuration: y} = m;
        this.calculatedDuration = y,
        this.resolvedDuration = y + c,
        this.totalDuration = this.resolvedDuration * (o + 1) - c,
        this.generator = m
    }
    updateTime(a) {
        const l = Math.round(a - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = l
    }
    tick(a, l=!1) {
        const {generator: o, totalDuration: c, mixKeyframes: d, mirroredGenerator: f, resolvedDuration: p, calculatedDuration: h} = this;
        if (this.startTime === null)
            return o.next(0);
        const {delay: m=0, keyframes: y, repeat: b, repeatType: x, repeatDelay: M, type: E, onUpdate: D, finalKeyframe: R} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, a) : this.speed < 0 && (this.startTime = Math.min(a - c / this.speed, this.startTime)),
        l ? this.currentTime = a : this.updateTime(a);
        const N = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1)
          , j = this.playbackSpeed >= 0 ? N < 0 : N > c;
        this.currentTime = Math.max(N, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let _ = this.currentTime
          , F = o;
        if (b) {
            const L = Math.min(this.currentTime, c) / p;
            let I = Math.floor(L)
              , ct = L % 1;
            !ct && L >= 1 && (ct = 1),
            ct === 1 && I--,
            I = Math.min(I, b + 1),
            !!(I % 2) && (x === "reverse" ? (ct = 1 - ct,
            M && (ct -= M / p)) : x === "mirror" && (F = f)),
            _ = zn(0, 1, ct) * p
        }
        const Y = j ? {
            done: !1,
            value: y[0]
        } : F.next(_);
        d && (Y.value = d(Y.value));
        let {done: K} = Y;
        !j && h !== null && (K = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const J = this.holdTime === null && (this.state === "finished" || this.state === "running" && K);
        return J && E !== Kc && (Y.value = _f(y, this.options, R, this.speed)),
        D && D(Y.value),
        J && this.finish(),
        Y
    }
    then(a, l) {
        return this.finished.then(a, l)
    }
    get duration() {
        return Fe(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: a=0} = this.options || {};
        return this.duration + Fe(a)
    }
    get time() {
        return Fe(this.currentTime)
    }
    set time(a) {
        a = dn(a),
        this.currentTime = a,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = a : this.driver && (this.startTime = this.driver.now() - a / this.playbackSpeed),
        this.driver?.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(a) {
        this.updateTime(Ne.now());
        const l = this.playbackSpeed !== a;
        this.playbackSpeed = a,
        l && (this.time = Fe(this.currentTime))
    }
    play() {
        if (this.isStopped)
            return;
        const {driver: a=a2, startTime: l} = this.options;
        this.driver || (this.driver = a(c => this.tick(c))),
        this.options.onPlay?.();
        const o = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = l ?? o),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(Ne.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        this.options.onComplete?.()
    }
    cancel() {
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        this.options.onCancel?.()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(a) {
        return this.startTime = 0,
        this.tick(a, !0)
    }
    attachTimeline(a) {
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        this.driver?.stop(),
        a.observe(this)
    }
}
function T2(i) {
    for (let a = 1; a < i.length; a++)
        i[a] ?? (i[a] = i[a - 1])
}
const Vi = i => i * 180 / Math.PI
  , Pc = i => {
    const a = Vi(Math.atan2(i[1], i[0]));
    return Fc(a)
}
  , A2 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: i => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
    rotate: Pc,
    rotateZ: Pc,
    skewX: i => Vi(Math.atan(i[1])),
    skewY: i => Vi(Math.atan(i[2])),
    skew: i => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}
  , Fc = i => (i = i % 360,
i < 0 && (i += 360),
i)
  , hg = Pc
  , mg = i => Math.sqrt(i[0] * i[0] + i[1] * i[1])
  , pg = i => Math.sqrt(i[4] * i[4] + i[5] * i[5])
  , E2 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: mg,
    scaleY: pg,
    scale: i => (mg(i) + pg(i)) / 2,
    rotateX: i => Fc(Vi(Math.atan2(i[6], i[5]))),
    rotateY: i => Fc(Vi(Math.atan2(-i[2], i[0]))),
    rotateZ: hg,
    rotate: hg,
    skewX: i => Vi(Math.atan(i[4])),
    skewY: i => Vi(Math.atan(i[1])),
    skew: i => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function Jc(i) {
    return i.includes("scale") ? 1 : 0
}
function Wc(i, a) {
    if (!i || i === "none")
        return Jc(a);
    const l = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let o, c;
    if (l)
        o = E2,
        c = l;
    else {
        const p = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        o = A2,
        c = p
    }
    if (!c)
        return Jc(a);
    const d = o[a]
      , f = c[1].split(",").map(M2);
    return typeof d == "function" ? d(f) : f[d]
}
const w2 = (i, a) => {
    const {transform: l="none"} = getComputedStyle(i);
    return Wc(l, a)
}
;
function M2(i) {
    return parseFloat(i.trim())
}
const qa = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Ga = new Set(qa)
  , gg = i => i === Ha || i === dt
  , D2 = new Set(["x", "y", "z"])
  , C2 = qa.filter(i => !D2.has(i));
function N2(i) {
    const a = [];
    return C2.forEach(l => {
        const o = i.getValue(l);
        o !== void 0 && (a.push([l, o.get()]),
        o.set(l.startsWith("scale") ? 1 : 0))
    }
    ),
    a
}
const _i = {
    width: ({x: i}, {paddingLeft: a="0", paddingRight: l="0"}) => i.max - i.min - parseFloat(a) - parseFloat(l),
    height: ({y: i}, {paddingTop: a="0", paddingBottom: l="0"}) => i.max - i.min - parseFloat(a) - parseFloat(l),
    top: (i, {top: a}) => parseFloat(a),
    left: (i, {left: a}) => parseFloat(a),
    bottom: ({y: i}, {top: a}) => parseFloat(a) + (i.max - i.min),
    right: ({x: i}, {left: a}) => parseFloat(a) + (i.max - i.min),
    x: (i, {transform: a}) => Wc(a, "x"),
    y: (i, {transform: a}) => Wc(a, "y")
};
_i.translateX = _i.x;
_i.translateY = _i.y;
const Ui = new Set;
let $c = !1
  , Ic = !1
  , tf = !1;
function by() {
    if (Ic) {
        const i = Array.from(Ui).filter(o => o.needsMeasurement)
          , a = new Set(i.map(o => o.element))
          , l = new Map;
        a.forEach(o => {
            const c = N2(o);
            c.length && (l.set(o, c),
            o.render())
        }
        ),
        i.forEach(o => o.measureInitialState()),
        a.forEach(o => {
            o.render();
            const c = l.get(o);
            c && c.forEach( ([d,f]) => {
                o.getValue(d)?.set(f)
            }
            )
        }
        ),
        i.forEach(o => o.measureEndState()),
        i.forEach(o => {
            o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY)
        }
        )
    }
    Ic = !1,
    $c = !1,
    Ui.forEach(i => i.complete(tf)),
    Ui.clear()
}
function xy() {
    Ui.forEach(i => {
        i.readKeyframes(),
        i.needsMeasurement && (Ic = !0)
    }
    )
}
function R2() {
    tf = !0,
    xy(),
    by(),
    tf = !1
}
class Lf {
    constructor(a, l, o, c, d, f=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...a],
        this.onComplete = l,
        this.name = o,
        this.motionValue = c,
        this.element = d,
        this.isAsync = f
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (Ui.add(this),
        $c || ($c = !0,
        Ht.read(xy),
        Ht.resolveKeyframes(by))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: a, name: l, element: o, motionValue: c} = this;
        if (a[0] === null) {
            const d = c?.get()
              , f = a[a.length - 1];
            if (d !== void 0)
                a[0] = d;
            else if (o && l) {
                const p = o.readValue(l, f);
                p != null && (a[0] = p)
            }
            a[0] === void 0 && (a[0] = f),
            c && d === void 0 && c.set(a[0])
        }
        T2(a)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(a=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, a),
        Ui.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Ui.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const O2 = i => i.startsWith("--");
function j2(i, a, l) {
    O2(a) ? i.style.setProperty(a, l) : i.style[a] = l
}
const z2 = wf( () => window.ScrollTimeline !== void 0)
  , V2 = {};
function _2(i, a) {
    const l = wf(i);
    return () => V2[a] ?? l()
}
const Sy = _2( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , Js = ([i,a,l,o]) => `cubic-bezier(${i}, ${a}, ${l}, ${o})`
  , yg = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Js([0, .65, .55, 1]),
    circOut: Js([.55, 0, 1, .45]),
    backIn: Js([.31, .01, .66, -.59]),
    backOut: Js([.33, 1.53, .69, .99])
};
function Ty(i, a) {
    if (i)
        return typeof i == "function" ? Sy() ? gy(i, a) : "ease-out" : ly(i) ? Js(i) : Array.isArray(i) ? i.map(l => Ty(l, a) || yg.easeOut) : yg[i]
}
function U2(i, a, l, {delay: o=0, duration: c=300, repeat: d=0, repeatType: f="loop", ease: p="easeOut", times: h}={}, m=void 0) {
    const y = {
        [a]: l
    };
    h && (y.offset = h);
    const b = Ty(p, c);
    Array.isArray(b) && (y.easing = b);
    const x = {
        delay: o,
        duration: c,
        easing: Array.isArray(b) ? "linear" : b,
        fill: "both",
        iterations: d + 1,
        direction: f === "reverse" ? "alternate" : "normal"
    };
    return m && (x.pseudoElement = m),
    i.animate(y, x)
}
function Ay(i) {
    return typeof i == "function" && "applyToOptions"in i
}
function B2({type: i, ...a}) {
    return Ay(i) && Sy() ? i.applyToOptions(a) : (a.duration ?? (a.duration = 300),
    a.ease ?? (a.ease = "easeOut"),
    a)
}
class L2 extends Uf {
    constructor(a) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        !a)
            return;
        const {element: l, name: o, keyframes: c, pseudoElement: d, allowFlatten: f=!1, finalKeyframe: p, onComplete: h} = a;
        this.isPseudoElement = !!d,
        this.allowFlatten = f,
        this.options = a,
        Ef(typeof a.type != "string");
        const m = B2(a);
        this.animation = U2(l, o, c, m, d),
        m.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !d) {
                const y = _f(c, this.options, p, this.speed);
                this.updateMotionValue ? this.updateMotionValue(y) : j2(l, o, y),
                this.animation.cancel()
            }
            h?.(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.finish?.()
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: a} = this;
        a === "idle" || a === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        this.isPseudoElement || this.animation.commitStyles?.()
    }
    get duration() {
        const a = this.animation.effect?.getComputedTiming?.().duration || 0;
        return Fe(Number(a))
    }
    get iterationDuration() {
        const {delay: a=0} = this.options || {};
        return this.duration + Fe(a)
    }
    get time() {
        return Fe(Number(this.animation.currentTime) || 0)
    }
    set time(a) {
        this.finishedTime = null,
        this.animation.currentTime = dn(a)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(a) {
        a < 0 && (this.finishedTime = null),
        this.animation.playbackRate = a
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return Number(this.animation.startTime)
    }
    set startTime(a) {
        this.animation.startTime = a
    }
    attachTimeline({timeline: a, observe: l}) {
        return this.allowFlatten && this.animation.effect?.updateTiming({
            easing: "linear"
        }),
        this.animation.onfinish = null,
        a && z2() ? (this.animation.timeline = a,
        Je) : l(this)
    }
}
const Ey = {
    anticipate: ny,
    backInOut: ey,
    circInOut: ay
};
function k2(i) {
    return i in Ey
}
function H2(i) {
    typeof i.ease == "string" && k2(i.ease) && (i.ease = Ey[i.ease])
}
const vg = 10;
class q2 extends L2 {
    constructor(a) {
        H2(a),
        vy(a),
        super(a),
        a.startTime && (this.startTime = a.startTime),
        this.options = a
    }
    updateMotionValue(a) {
        const {motionValue: l, onUpdate: o, onComplete: c, element: d, ...f} = this.options;
        if (!l)
            return;
        if (a !== void 0) {
            l.set(a);
            return
        }
        const p = new Bf({
            ...f,
            autoplay: !1
        })
          , h = dn(this.finishedTime ?? this.time);
        l.setWithVelocity(p.sample(h - vg).value, p.sample(h).value, vg),
        p.stop()
    }
}
const bg = (i, a) => a === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && (ui.test(i) || i === "0") && !i.startsWith("url("));
function G2(i) {
    const a = i[0];
    if (i.length === 1)
        return !0;
    for (let l = 0; l < i.length; l++)
        if (i[l] !== a)
            return !0
}
function Y2(i, a, l, o) {
    const c = i[0];
    if (c === null)
        return !1;
    if (a === "display" || a === "visibility")
        return !0;
    const d = i[i.length - 1]
      , f = bg(c, a)
      , p = bg(d, a);
    return !f || !p ? !1 : G2(i) || (l === "spring" || Ay(l)) && o
}
function ef(i) {
    i.duration = 0,
    i.type = "keyframes"
}
const X2 = new Set(["opacity", "clipPath", "filter", "transform"])
  , Q2 = wf( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Z2(i) {
    const {motionValue: a, name: l, repeatDelay: o, repeatType: c, damping: d, type: f} = i;
    if (!(a?.owner?.current instanceof HTMLElement))
        return !1;
    const {onUpdate: h, transformTemplate: m} = a.owner.getProps();
    return Q2() && l && X2.has(l) && (l !== "transform" || !m) && !h && !o && c !== "mirror" && d !== 0 && f !== "inertia"
}
const K2 = 40;
class P2 extends Uf {
    constructor({autoplay: a=!0, delay: l=0, type: o="keyframes", repeat: c=0, repeatDelay: d=0, repeatType: f="loop", keyframes: p, name: h, motionValue: m, element: y, ...b}) {
        super(),
        this.stop = () => {
            this._animation && (this._animation.stop(),
            this.stopTimeline?.()),
            this.keyframeResolver?.cancel()
        }
        ,
        this.createdAt = Ne.now();
        const x = {
            autoplay: a,
            delay: l,
            type: o,
            repeat: c,
            repeatDelay: d,
            repeatType: f,
            name: h,
            motionValue: m,
            element: y,
            ...b
        }
          , M = y?.KeyframeResolver || Lf;
        this.keyframeResolver = new M(p, (E, D, R) => this.onKeyframesResolved(E, D, x, !R),h,m,y),
        this.keyframeResolver?.scheduleResolve()
    }
    onKeyframesResolved(a, l, o, c) {
        this.keyframeResolver = void 0;
        const {name: d, type: f, velocity: p, delay: h, isHandoff: m, onUpdate: y} = o;
        this.resolvedAt = Ne.now(),
        Y2(a, d, f, p) || ((Vn.instantAnimations || !h) && y?.(_f(a, o, l)),
        a[0] = a[a.length - 1],
        ef(o),
        o.repeat = 0);
        const x = {
            startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > K2 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: l,
            ...o,
            keyframes: a
        }
          , M = !m && Z2(x) ? new q2({
            ...x,
            element: x.motionValue.owner.current
        }) : new Bf(x);
        M.finished.then( () => this.notifyFinished()).catch(Je),
        this.pendingTimeline && (this.stopTimeline = M.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = M
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(a, l) {
        return this.finished.finally(a).then( () => {}
        )
    }
    get animation() {
        return this._animation || (this.keyframeResolver?.resume(),
        R2()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(a) {
        this.animation.time = a
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(a) {
        this.animation.speed = a
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(a) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(a) : this.pendingTimeline = a,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        this._animation && this.animation.cancel(),
        this.keyframeResolver?.cancel()
    }
}
const F2 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function J2(i) {
    const a = F2.exec(i);
    if (!a)
        return [, ];
    const [,l,o,c] = a;
    return [`--${l ?? o}`, c]
}
function wy(i, a, l=1) {
    const [o,c] = J2(i);
    if (!o)
        return;
    const d = window.getComputedStyle(a).getPropertyValue(o);
    if (d) {
        const f = d.trim();
        return K0(f) ? parseFloat(f) : f
    }
    return Rf(c) ? wy(c, a, l + 1) : c
}
function kf(i, a) {
    return i?.[a] ?? i?.default ?? i
}
const My = new Set(["width", "height", "top", "left", "right", "bottom", ...qa])
  , W2 = {
    test: i => i === "auto",
    parse: i => i
}
  , Dy = i => a => a.test(i)
  , Cy = [Ha, dt, hn, oi, GT, qT, W2]
  , xg = i => Cy.find(Dy(i));
function $2(i) {
    return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || F0(i) : !0
}
const I2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function tA(i) {
    const [a,l] = i.slice(0, -1).split("(");
    if (a === "drop-shadow")
        return i;
    const [o] = l.match(Of) || [];
    if (!o)
        return i;
    const c = l.replace(o, "");
    let d = I2.has(a) ? 1 : 0;
    return o !== l && (d *= 100),
    a + "(" + d + c + ")"
}
const eA = /\b([a-z-]*)\(.*?\)/gu
  , nf = {
    ...ui,
    getAnimatableNone: i => {
        const a = i.match(eA);
        return a ? a.map(tA).join(" ") : i
    }
}
  , Sg = {
    ...Ha,
    transform: Math.round
}
  , nA = {
    rotate: oi,
    rotateX: oi,
    rotateY: oi,
    rotateZ: oi,
    scale: Lo,
    scaleX: Lo,
    scaleY: Lo,
    scaleZ: Lo,
    skew: oi,
    skewX: oi,
    skewY: oi,
    distance: dt,
    translateX: dt,
    translateY: dt,
    translateZ: dt,
    x: dt,
    y: dt,
    z: dt,
    perspective: dt,
    transformPerspective: dt,
    opacity: ol,
    originX: rg,
    originY: rg,
    originZ: dt
}
  , Hf = {
    borderWidth: dt,
    borderTopWidth: dt,
    borderRightWidth: dt,
    borderBottomWidth: dt,
    borderLeftWidth: dt,
    borderRadius: dt,
    radius: dt,
    borderTopLeftRadius: dt,
    borderTopRightRadius: dt,
    borderBottomRightRadius: dt,
    borderBottomLeftRadius: dt,
    width: dt,
    maxWidth: dt,
    height: dt,
    maxHeight: dt,
    top: dt,
    right: dt,
    bottom: dt,
    left: dt,
    padding: dt,
    paddingTop: dt,
    paddingRight: dt,
    paddingBottom: dt,
    paddingLeft: dt,
    margin: dt,
    marginTop: dt,
    marginRight: dt,
    marginBottom: dt,
    marginLeft: dt,
    backgroundPositionX: dt,
    backgroundPositionY: dt,
    ...nA,
    zIndex: Sg,
    fillOpacity: ol,
    strokeOpacity: ol,
    numOctaves: Sg
}
  , iA = {
    ...Hf,
    color: ee,
    backgroundColor: ee,
    outlineColor: ee,
    fill: ee,
    stroke: ee,
    borderColor: ee,
    borderTopColor: ee,
    borderRightColor: ee,
    borderBottomColor: ee,
    borderLeftColor: ee,
    filter: nf,
    WebkitFilter: nf
}
  , Ny = i => iA[i];
function Ry(i, a) {
    let l = Ny(i);
    return l !== nf && (l = ui),
    l.getAnimatableNone ? l.getAnimatableNone(a) : void 0
}
const aA = new Set(["auto", "none", "0"]);
function sA(i, a, l) {
    let o = 0, c;
    for (; o < i.length && !c; ) {
        const d = i[o];
        typeof d == "string" && !aA.has(d) && rl(d).values.length && (c = i[o]),
        o++
    }
    if (c && l)
        for (const d of a)
            i[d] = Ry(l, c)
}
class lA extends Lf {
    constructor(a, l, o, c, d) {
        super(a, l, o, c, d, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: a, element: l, name: o} = this;
        if (!l || !l.current)
            return;
        super.readKeyframes();
        for (let h = 0; h < a.length; h++) {
            let m = a[h];
            if (typeof m == "string" && (m = m.trim(),
            Rf(m))) {
                const y = wy(m, l.current);
                y !== void 0 && (a[h] = y),
                h === a.length - 1 && (this.finalKeyframe = m)
            }
        }
        if (this.resolveNoneKeyframes(),
        !My.has(o) || a.length !== 2)
            return;
        const [c,d] = a
          , f = xg(c)
          , p = xg(d);
        if (f !== p)
            if (gg(f) && gg(p))
                for (let h = 0; h < a.length; h++) {
                    const m = a[h];
                    typeof m == "string" && (a[h] = parseFloat(m))
                }
            else
                _i[o] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: a, name: l} = this
          , o = [];
        for (let c = 0; c < a.length; c++)
            (a[c] === null || $2(a[c])) && o.push(c);
        o.length && sA(a, o, l)
    }
    measureInitialState() {
        const {element: a, unresolvedKeyframes: l, name: o} = this;
        if (!a || !a.current)
            return;
        o === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = _i[o](a.measureViewportBox(), window.getComputedStyle(a.current)),
        l[0] = this.measuredOrigin;
        const c = l[l.length - 1];
        c !== void 0 && a.getValue(o, c).jump(c, !1)
    }
    measureEndState() {
        const {element: a, name: l, unresolvedKeyframes: o} = this;
        if (!a || !a.current)
            return;
        const c = a.getValue(l);
        c && c.jump(this.measuredOrigin, !1);
        const d = o.length - 1
          , f = o[d];
        o[d] = _i[l](a.measureViewportBox(), window.getComputedStyle(a.current)),
        f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
        this.removedTransforms?.length && this.removedTransforms.forEach( ([p,h]) => {
            a.getValue(p).set(h)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function oA(i, a, l) {
    if (i instanceof EventTarget)
        return [i];
    if (typeof i == "string") {
        let o = document;
        const c = l?.[i] ?? o.querySelectorAll(i);
        return c ? Array.from(c) : []
    }
    return Array.from(i)
}
const Oy = (i, a) => a && typeof i == "number" ? a.transform(i) : i;
function jy(i) {
    return P0(i) && "offsetHeight"in i
}
const Tg = 30
  , rA = i => !isNaN(parseFloat(i));
class uA {
    constructor(a, l={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = o => {
            const c = Ne.now();
            if (this.updatedAt !== c && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(o),
            this.current !== this.prev && (this.events.change?.notify(this.current),
            this.dependents))
                for (const d of this.dependents)
                    d.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(a),
        this.owner = l.owner
    }
    setCurrent(a) {
        this.current = a,
        this.updatedAt = Ne.now(),
        this.canTrackVelocity === null && a !== void 0 && (this.canTrackVelocity = rA(this.current))
    }
    setPrevFrameValue(a=this.current) {
        this.prevFrameValue = a,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(a) {
        return this.on("change", a)
    }
    on(a, l) {
        this.events[a] || (this.events[a] = new Mf);
        const o = this.events[a].add(l);
        return a === "change" ? () => {
            o(),
            Ht.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : o
    }
    clearListeners() {
        for (const a in this.events)
            this.events[a].clear()
    }
    attach(a, l) {
        this.passiveEffect = a,
        this.stopPassiveEffect = l
    }
    set(a) {
        this.passiveEffect ? this.passiveEffect(a, this.updateAndNotify) : this.updateAndNotify(a)
    }
    setWithVelocity(a, l, o) {
        this.set(l),
        this.prev = void 0,
        this.prevFrameValue = a,
        this.prevUpdatedAt = this.updatedAt - o
    }
    jump(a, l=!0) {
        this.updateAndNotify(a),
        this.prev = a,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        l && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        this.events.change?.notify(this.current)
    }
    addDependent(a) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(a)
    }
    removeDependent(a) {
        this.dependents && this.dependents.delete(a)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const a = Ne.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || a - this.updatedAt > Tg)
            return 0;
        const l = Math.min(this.updatedAt - this.prevUpdatedAt, Tg);
        return J0(parseFloat(this.current) - parseFloat(this.prevFrameValue), l)
    }
    start(a) {
        return this.stop(),
        new Promise(l => {
            this.hasAnimated = !0,
            this.animation = a(l),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.dependents?.clear(),
        this.events.destroy?.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function _a(i, a) {
    return new uA(i,a)
}
const {schedule: qf} = oy(queueMicrotask, !1)
  , en = {
    x: !1,
    y: !1
};
function zy() {
    return en.x || en.y
}
function cA(i) {
    return i === "x" || i === "y" ? en[i] ? null : (en[i] = !0,
    () => {
        en[i] = !1
    }
    ) : en.x || en.y ? null : (en.x = en.y = !0,
    () => {
        en.x = en.y = !1
    }
    )
}
function Vy(i, a) {
    const l = oA(i)
      , o = new AbortController
      , c = {
        passive: !0,
        ...a,
        signal: o.signal
    };
    return [l, c, () => o.abort()]
}
function Ag(i) {
    return !(i.pointerType === "touch" || zy())
}
function fA(i, a, l={}) {
    const [o,c,d] = Vy(i, l)
      , f = p => {
        if (!Ag(p))
            return;
        const {target: h} = p
          , m = a(h, p);
        if (typeof m != "function" || !h)
            return;
        const y = b => {
            Ag(b) && (m(b),
            h.removeEventListener("pointerleave", y))
        }
        ;
        h.addEventListener("pointerleave", y, c)
    }
    ;
    return o.forEach(p => {
        p.addEventListener("pointerenter", f, c)
    }
    ),
    d
}
const _y = (i, a) => a ? i === a ? !0 : _y(i, a.parentElement) : !1
  , Gf = i => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1
  , dA = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function hA(i) {
    return dA.has(i.tagName) || i.tabIndex !== -1
}
const Go = new WeakSet;
function Eg(i) {
    return a => {
        a.key === "Enter" && i(a)
    }
}
function Dc(i, a) {
    i.dispatchEvent(new PointerEvent("pointer" + a,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const mA = (i, a) => {
    const l = i.currentTarget;
    if (!l)
        return;
    const o = Eg( () => {
        if (Go.has(l))
            return;
        Dc(l, "down");
        const c = Eg( () => {
            Dc(l, "up")
        }
        )
          , d = () => Dc(l, "cancel");
        l.addEventListener("keyup", c, a),
        l.addEventListener("blur", d, a)
    }
    );
    l.addEventListener("keydown", o, a),
    l.addEventListener("blur", () => l.removeEventListener("keydown", o), a)
}
;
function wg(i) {
    return Gf(i) && !zy()
}
function pA(i, a, l={}) {
    const [o,c,d] = Vy(i, l)
      , f = p => {
        const h = p.currentTarget;
        if (!wg(p))
            return;
        Go.add(h);
        const m = a(h, p)
          , y = (M, E) => {
            window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", x),
            Go.has(h) && Go.delete(h),
            wg(M) && typeof m == "function" && m(M, {
                success: E
            })
        }
          , b = M => {
            y(M, h === window || h === document || l.useGlobalTarget || _y(h, M.target))
        }
          , x = M => {
            y(M, !1)
        }
        ;
        window.addEventListener("pointerup", b, c),
        window.addEventListener("pointercancel", x, c)
    }
    ;
    return o.forEach(p => {
        (l.useGlobalTarget ? window : p).addEventListener("pointerdown", f, c),
        jy(p) && (p.addEventListener("focus", m => mA(m, c)),
        !hA(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0))
    }
    ),
    d
}
function Uy(i) {
    return P0(i) && "ownerSVGElement"in i
}
function gA(i) {
    return Uy(i) && i.tagName === "svg"
}
const Se = i => !!(i && i.getVelocity)
  , yA = [...Cy, ee, ui]
  , vA = i => yA.find(Dy(i))
  , Yf = k.createContext({
    transformPagePoint: i => i,
    isStatic: !1,
    reducedMotion: "never"
});
function Mg(i, a) {
    if (typeof i == "function")
        return i(a);
    i != null && (i.current = a)
}
function bA(...i) {
    return a => {
        let l = !1;
        const o = i.map(c => {
            const d = Mg(c, a);
            return !l && typeof d == "function" && (l = !0),
            d
        }
        );
        if (l)
            return () => {
                for (let c = 0; c < o.length; c++) {
                    const d = o[c];
                    typeof d == "function" ? d() : Mg(i[c], null)
                }
            }
    }
}
function xA(...i) {
    return k.useCallback(bA(...i), i)
}
class SA extends k.Component {
    getSnapshotBeforeUpdate(a) {
        const l = this.props.childRef.current;
        if (l && a.isPresent && !this.props.isPresent) {
            const o = l.offsetParent
              , c = jy(o) && o.offsetWidth || 0
              , d = this.props.sizeRef.current;
            d.height = l.offsetHeight || 0,
            d.width = l.offsetWidth || 0,
            d.top = l.offsetTop,
            d.left = l.offsetLeft,
            d.right = c - d.width - d.left
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function TA({children: i, isPresent: a, anchorX: l, root: o}) {
    const c = k.useId()
      , d = k.useRef(null)
      , f = k.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0
    })
      , {nonce: p} = k.useContext(Yf)
      , h = xA(d, i?.ref);
    return k.useInsertionEffect( () => {
        const {width: m, height: y, top: b, left: x, right: M} = f.current;
        if (a || !d.current || !m || !y)
            return;
        const E = l === "left" ? `left: ${x}` : `right: ${M}`;
        d.current.dataset.motionPopId = c;
        const D = document.createElement("style");
        p && (D.nonce = p);
        const R = o ?? document.head;
        return R.appendChild(D),
        D.sheet && D.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${y}px !important;
            ${E}px !important;
            top: ${b}px !important;
          }
        `),
        () => {
            R.contains(D) && R.removeChild(D)
        }
    }
    , [a]),
    S.jsx(SA, {
        isPresent: a,
        childRef: d,
        sizeRef: f,
        children: k.cloneElement(i, {
            ref: h
        })
    })
}
const AA = ({children: i, initial: a, isPresent: l, onExitComplete: o, custom: c, presenceAffectsLayout: d, mode: f, anchorX: p, root: h}) => {
    const m = xf(EA)
      , y = k.useId();
    let b = !0
      , x = k.useMemo( () => (b = !1,
    {
        id: y,
        initial: a,
        isPresent: l,
        custom: c,
        onExitComplete: M => {
            m.set(M, !0);
            for (const E of m.values())
                if (!E)
                    return;
            o && o()
        }
        ,
        register: M => (m.set(M, !1),
        () => m.delete(M))
    }), [l, m, o]);
    return d && b && (x = {
        ...x
    }),
    k.useMemo( () => {
        m.forEach( (M, E) => m.set(E, !1))
    }
    , [l]),
    k.useEffect( () => {
        !l && !m.size && o && o()
    }
    , [l]),
    f === "popLayout" && (i = S.jsx(TA, {
        isPresent: l,
        anchorX: p,
        root: h,
        children: i
    })),
    S.jsx(er.Provider, {
        value: x,
        children: i
    })
}
;
function EA() {
    return new Map
}
function By(i=!0) {
    const a = k.useContext(er);
    if (a === null)
        return [!0, null];
    const {isPresent: l, onExitComplete: o, register: c} = a
      , d = k.useId();
    k.useEffect( () => {
        if (i)
            return c(d)
    }
    , [i]);
    const f = k.useCallback( () => i && o && o(d), [d, o, i]);
    return !l && o ? [!1, f] : [!0]
}
const ko = i => i.key || "";
function Dg(i) {
    const a = [];
    return k.Children.forEach(i, l => {
        k.isValidElement(l) && a.push(l)
    }
    ),
    a
}
const Ly = ({children: i, custom: a, initial: l=!0, onExitComplete: o, presenceAffectsLayout: c=!0, mode: d="sync", propagate: f=!1, anchorX: p="left", root: h}) => {
    const [m,y] = By(f)
      , b = k.useMemo( () => Dg(i), [i])
      , x = f && !m ? [] : b.map(ko)
      , M = k.useRef(!0)
      , E = k.useRef(b)
      , D = xf( () => new Map)
      , [R,N] = k.useState(b)
      , [j,_] = k.useState(b);
    Z0( () => {
        M.current = !1,
        E.current = b;
        for (let K = 0; K < j.length; K++) {
            const J = ko(j[K]);
            x.includes(J) ? D.delete(J) : D.get(J) !== !0 && D.set(J, !1)
        }
    }
    , [j, x.length, x.join("-")]);
    const F = [];
    if (b !== R) {
        let K = [...b];
        for (let J = 0; J < j.length; J++) {
            const L = j[J]
              , I = ko(L);
            x.includes(I) || (K.splice(J, 0, L),
            F.push(L))
        }
        return d === "wait" && F.length && (K = F),
        _(Dg(K)),
        N(b),
        null
    }
    const {forceRender: Y} = k.useContext(bf);
    return S.jsx(S.Fragment, {
        children: j.map(K => {
            const J = ko(K)
              , L = f && !m ? !1 : b === j || x.includes(J)
              , I = () => {
                if (D.has(J))
                    D.set(J, !0);
                else
                    return;
                let ct = !0;
                D.forEach(ot => {
                    ot || (ct = !1)
                }
                ),
                ct && (Y?.(),
                _(E.current),
                f && y?.(),
                o && o())
            }
            ;
            return S.jsx(AA, {
                isPresent: L,
                initial: !M.current || l ? void 0 : !1,
                custom: a,
                presenceAffectsLayout: c,
                mode: d,
                root: h,
                onExitComplete: L ? void 0 : I,
                anchorX: p,
                children: K
            }, J)
        }
        )
    })
}
  , ky = k.createContext({
    strict: !1
})
  , Cg = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Ua = {};
for (const i in Cg)
    Ua[i] = {
        isEnabled: a => Cg[i].some(l => !!a[l])
    };
function wA(i) {
    for (const a in i)
        Ua[a] = {
            ...Ua[a],
            ...i[a]
        }
}
const MA = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Jo(i) {
    return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || MA.has(i)
}
let Hy = i => !Jo(i);
function DA(i) {
    typeof i == "function" && (Hy = a => a.startsWith("on") ? !Jo(a) : i(a))
}
try {
    DA(require("@emotion/is-prop-valid").default)
} catch {}
function CA(i, a, l) {
    const o = {};
    for (const c in i)
        c === "values" && typeof i.values == "object" || (Hy(c) || l === !0 && Jo(c) || !a && !Jo(c) || i.draggable && c.startsWith("onDrag")) && (o[c] = i[c]);
    return o
}
const nr = k.createContext({});
function ir(i) {
    return i !== null && typeof i == "object" && typeof i.start == "function"
}
function ul(i) {
    return typeof i == "string" || Array.isArray(i)
}
const Xf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Qf = ["initial", ...Xf];
function ar(i) {
    return ir(i.animate) || Qf.some(a => ul(i[a]))
}
function qy(i) {
    return !!(ar(i) || i.variants)
}
function NA(i, a) {
    if (ar(i)) {
        const {initial: l, animate: o} = i;
        return {
            initial: l === !1 || ul(l) ? l : void 0,
            animate: ul(o) ? o : void 0
        }
    }
    return i.inherit !== !1 ? a : {}
}
function RA(i) {
    const {initial: a, animate: l} = NA(i, k.useContext(nr));
    return k.useMemo( () => ({
        initial: a,
        animate: l
    }), [Ng(a), Ng(l)])
}
function Ng(i) {
    return Array.isArray(i) ? i.join(" ") : i
}
const cl = {};
function OA(i) {
    for (const a in i)
        cl[a] = i[a],
        Nf(a) && (cl[a].isCSSVariable = !0)
}
function Gy(i, {layout: a, layoutId: l}) {
    return Ga.has(i) || i.startsWith("origin") || (a || l !== void 0) && (!!cl[i] || i === "opacity")
}
const jA = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , zA = qa.length;
function VA(i, a, l) {
    let o = ""
      , c = !0;
    for (let d = 0; d < zA; d++) {
        const f = qa[d]
          , p = i[f];
        if (p === void 0)
            continue;
        let h = !0;
        if (typeof p == "number" ? h = p === (f.startsWith("scale") ? 1 : 0) : h = parseFloat(p) === 0,
        !h || l) {
            const m = Oy(p, Hf[f]);
            if (!h) {
                c = !1;
                const y = jA[f] || f;
                o += `${y}(${m}) `
            }
            l && (a[f] = m)
        }
    }
    return o = o.trim(),
    l ? o = l(a, c ? "" : o) : c && (o = "none"),
    o
}
function Zf(i, a, l) {
    const {style: o, vars: c, transformOrigin: d} = i;
    let f = !1
      , p = !1;
    for (const h in a) {
        const m = a[h];
        if (Ga.has(h)) {
            f = !0;
            continue
        } else if (Nf(h)) {
            c[h] = m;
            continue
        } else {
            const y = Oy(m, Hf[h]);
            h.startsWith("origin") ? (p = !0,
            d[h] = y) : o[h] = y
        }
    }
    if (a.transform || (f || l ? o.transform = VA(a, i.transform, l) : o.transform && (o.transform = "none")),
    p) {
        const {originX: h="50%", originY: m="50%", originZ: y=0} = d;
        o.transformOrigin = `${h} ${m} ${y}`
    }
}
const Kf = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Yy(i, a, l) {
    for (const o in a)
        !Se(a[o]) && !Gy(o, l) && (i[o] = a[o])
}
function _A({transformTemplate: i}, a) {
    return k.useMemo( () => {
        const l = Kf();
        return Zf(l, a, i),
        Object.assign({}, l.vars, l.style)
    }
    , [a])
}
function UA(i, a) {
    const l = i.style || {}
      , o = {};
    return Yy(o, l, i),
    Object.assign(o, _A(i, a)),
    o
}
function BA(i, a) {
    const l = {}
      , o = UA(i, a);
    return i.drag && i.dragListener !== !1 && (l.draggable = !1,
    o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
    o.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`),
    i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (l.tabIndex = 0),
    l.style = o,
    l
}
const LA = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , kA = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function HA(i, a, l=1, o=0, c=!0) {
    i.pathLength = 1;
    const d = c ? LA : kA;
    i[d.offset] = dt.transform(-o);
    const f = dt.transform(a)
      , p = dt.transform(l);
    i[d.array] = `${f} ${p}`
}
function Xy(i, {attrX: a, attrY: l, attrScale: o, pathLength: c, pathSpacing: d=1, pathOffset: f=0, ...p}, h, m, y) {
    if (Zf(i, p, m),
    h) {
        i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
        return
    }
    i.attrs = i.style,
    i.style = {};
    const {attrs: b, style: x} = i;
    b.transform && (x.transform = b.transform,
    delete b.transform),
    (x.transform || b.transformOrigin) && (x.transformOrigin = b.transformOrigin ?? "50% 50%",
    delete b.transformOrigin),
    x.transform && (x.transformBox = y?.transformBox ?? "fill-box",
    delete b.transformBox),
    a !== void 0 && (b.x = a),
    l !== void 0 && (b.y = l),
    o !== void 0 && (b.scale = o),
    c !== void 0 && HA(b, c, d, f, !1)
}
const Qy = () => ({
    ...Kf(),
    attrs: {}
})
  , Zy = i => typeof i == "string" && i.toLowerCase() === "svg";
function qA(i, a, l, o) {
    const c = k.useMemo( () => {
        const d = Qy();
        return Xy(d, a, Zy(o), i.transformTemplate, i.style),
        {
            ...d.attrs,
            style: {
                ...d.style
            }
        }
    }
    , [a]);
    if (i.style) {
        const d = {};
        Yy(d, i.style, i),
        c.style = {
            ...d,
            ...c.style
        }
    }
    return c
}
const GA = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Pf(i) {
    return typeof i != "string" || i.includes("-") ? !1 : !!(GA.indexOf(i) > -1 || /[A-Z]/u.test(i))
}
function YA(i, a, l, {latestValues: o}, c, d=!1) {
    const p = (Pf(i) ? qA : BA)(a, o, c, i)
      , h = CA(a, typeof i == "string", d)
      , m = i !== k.Fragment ? {
        ...h,
        ...p,
        ref: l
    } : {}
      , {children: y} = a
      , b = k.useMemo( () => Se(y) ? y.get() : y, [y]);
    return k.createElement(i, {
        ...m,
        children: b
    })
}
function Rg(i) {
    const a = [{}, {}];
    return i?.values.forEach( (l, o) => {
        a[0][o] = l.get(),
        a[1][o] = l.getVelocity()
    }
    ),
    a
}
function Ff(i, a, l, o) {
    if (typeof a == "function") {
        const [c,d] = Rg(o);
        a = a(l !== void 0 ? l : i.custom, c, d)
    }
    if (typeof a == "string" && (a = i.variants && i.variants[a]),
    typeof a == "function") {
        const [c,d] = Rg(o);
        a = a(l !== void 0 ? l : i.custom, c, d)
    }
    return a
}
function Yo(i) {
    return Se(i) ? i.get() : i
}
function XA({scrapeMotionValuesFromProps: i, createRenderState: a}, l, o, c) {
    return {
        latestValues: QA(l, o, c, i),
        renderState: a()
    }
}
function QA(i, a, l, o) {
    const c = {}
      , d = o(i, {});
    for (const x in d)
        c[x] = Yo(d[x]);
    let {initial: f, animate: p} = i;
    const h = ar(i)
      , m = qy(i);
    a && m && !h && i.inherit !== !1 && (f === void 0 && (f = a.initial),
    p === void 0 && (p = a.animate));
    let y = l ? l.initial === !1 : !1;
    y = y || f === !1;
    const b = y ? p : f;
    if (b && typeof b != "boolean" && !ir(b)) {
        const x = Array.isArray(b) ? b : [b];
        for (let M = 0; M < x.length; M++) {
            const E = Ff(i, x[M]);
            if (E) {
                const {transitionEnd: D, transition: R, ...N} = E;
                for (const j in N) {
                    let _ = N[j];
                    if (Array.isArray(_)) {
                        const F = y ? _.length - 1 : 0;
                        _ = _[F]
                    }
                    _ !== null && (c[j] = _)
                }
                for (const j in D)
                    c[j] = D[j]
            }
        }
    }
    return c
}
const Ky = i => (a, l) => {
    const o = k.useContext(nr)
      , c = k.useContext(er)
      , d = () => XA(i, a, o, c);
    return l ? d() : xf(d)
}
;
function Jf(i, a, l) {
    const {style: o} = i
      , c = {};
    for (const d in o)
        (Se(o[d]) || a.style && Se(a.style[d]) || Gy(d, i) || l?.getValue(d)?.liveStyle !== void 0) && (c[d] = o[d]);
    return c
}
const ZA = Ky({
    scrapeMotionValuesFromProps: Jf,
    createRenderState: Kf
});
function Py(i, a, l) {
    const o = Jf(i, a, l);
    for (const c in i)
        if (Se(i[c]) || Se(a[c])) {
            const d = qa.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
            o[d] = i[c]
        }
    return o
}
const KA = Ky({
    scrapeMotionValuesFromProps: Py,
    createRenderState: Qy
})
  , PA = Symbol.for("motionComponentSymbol");
function Ra(i) {
    return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current")
}
function FA(i, a, l) {
    return k.useCallback(o => {
        o && i.onMount && i.onMount(o),
        a && (o ? a.mount(o) : a.unmount()),
        l && (typeof l == "function" ? l(o) : Ra(l) && (l.current = o))
    }
    , [a])
}
const Wf = i => i.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , JA = "framerAppearId"
  , Fy = "data-" + Wf(JA)
  , Jy = k.createContext({});
function WA(i, a, l, o, c) {
    const {visualElement: d} = k.useContext(nr)
      , f = k.useContext(ky)
      , p = k.useContext(er)
      , h = k.useContext(Yf).reducedMotion
      , m = k.useRef(null);
    o = o || f.renderer,
    !m.current && o && (m.current = o(i, {
        visualState: a,
        parent: d,
        props: l,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: h
    }));
    const y = m.current
      , b = k.useContext(Jy);
    y && !y.projection && c && (y.type === "html" || y.type === "svg") && $A(m.current, l, c, b);
    const x = k.useRef(!1);
    k.useInsertionEffect( () => {
        y && x.current && y.update(l, p)
    }
    );
    const M = l[Fy]
      , E = k.useRef(!!M && !window.MotionHandoffIsComplete?.(M) && window.MotionHasOptimisedAnimation?.(M));
    return Z0( () => {
        y && (x.current = !0,
        window.MotionIsMounted = !0,
        y.updateFeatures(),
        y.scheduleRenderMicrotask(),
        E.current && y.animationState && y.animationState.animateChanges())
    }
    ),
    k.useEffect( () => {
        y && (!E.current && y.animationState && y.animationState.animateChanges(),
        E.current && (queueMicrotask( () => {
            window.MotionHandoffMarkAsComplete?.(M)
        }
        ),
        E.current = !1),
        y.enteringChildren = void 0)
    }
    ),
    y
}
function $A(i, a, l, o) {
    const {layoutId: c, layout: d, drag: f, dragConstraints: p, layoutScroll: h, layoutRoot: m, layoutCrossfade: y} = a;
    i.projection = new l(i.latestValues,a["data-framer-portal-id"] ? void 0 : Wy(i.parent)),
    i.projection.setOptions({
        layoutId: c,
        layout: d,
        alwaysMeasureLayout: !!f || p && Ra(p),
        visualElement: i,
        animationType: typeof d == "string" ? d : "both",
        initialPromotionConfig: o,
        crossfade: y,
        layoutScroll: h,
        layoutRoot: m
    })
}
function Wy(i) {
    if (i)
        return i.options.allowProjection !== !1 ? i.projection : Wy(i.parent)
}
function Cc(i, {forwardMotionProps: a=!1}={}, l, o) {
    l && wA(l);
    const c = Pf(i) ? KA : ZA;
    function d(p, h) {
        let m;
        const y = {
            ...k.useContext(Yf),
            ...p,
            layoutId: IA(p)
        }
          , {isStatic: b} = y
          , x = RA(p)
          , M = c(p, b);
        if (!b && Sf) {
            tE();
            const E = eE(y);
            m = E.MeasureLayout,
            x.visualElement = WA(i, M, y, o, E.ProjectionNode)
        }
        return S.jsxs(nr.Provider, {
            value: x,
            children: [m && x.visualElement ? S.jsx(m, {
                visualElement: x.visualElement,
                ...y
            }) : null, YA(i, p, FA(M, x.visualElement, h), M, b, a)]
        })
    }
    d.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
    const f = k.forwardRef(d);
    return f[PA] = i,
    f
}
function IA({layoutId: i}) {
    const a = k.useContext(bf).id;
    return a && i !== void 0 ? a + "-" + i : i
}
function tE(i, a) {
    k.useContext(ky).strict
}
function eE(i) {
    const {drag: a, layout: l} = Ua;
    if (!a && !l)
        return {};
    const o = {
        ...a,
        ...l
    };
    return {
        MeasureLayout: a?.isEnabled(i) || l?.isEnabled(i) ? o.MeasureLayout : void 0,
        ProjectionNode: o.ProjectionNode
    }
}
function nE(i, a) {
    if (typeof Proxy > "u")
        return Cc;
    const l = new Map
      , o = (d, f) => Cc(d, f, i, a)
      , c = (d, f) => o(d, f);
    return new Proxy(c,{
        get: (d, f) => f === "create" ? o : (l.has(f) || l.set(f, Cc(f, void 0, i, a)),
        l.get(f))
    })
}
function $y({top: i, left: a, right: l, bottom: o}) {
    return {
        x: {
            min: a,
            max: l
        },
        y: {
            min: i,
            max: o
        }
    }
}
function iE({x: i, y: a}) {
    return {
        top: a.min,
        right: i.max,
        bottom: a.max,
        left: i.min
    }
}
function aE(i, a) {
    if (!a)
        return i;
    const l = a({
        x: i.left,
        y: i.top
    })
      , o = a({
        x: i.right,
        y: i.bottom
    });
    return {
        top: l.y,
        left: l.x,
        bottom: o.y,
        right: o.x
    }
}
function Nc(i) {
    return i === void 0 || i === 1
}
function af({scale: i, scaleX: a, scaleY: l}) {
    return !Nc(i) || !Nc(a) || !Nc(l)
}
function ji(i) {
    return af(i) || Iy(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY
}
function Iy(i) {
    return Og(i.x) || Og(i.y)
}
function Og(i) {
    return i && i !== "0%"
}
function Wo(i, a, l) {
    const o = i - l
      , c = a * o;
    return l + c
}
function jg(i, a, l, o, c) {
    return c !== void 0 && (i = Wo(i, c, o)),
    Wo(i, l, o) + a
}
function sf(i, a=0, l=1, o, c) {
    i.min = jg(i.min, a, l, o, c),
    i.max = jg(i.max, a, l, o, c)
}
function tv(i, {x: a, y: l}) {
    sf(i.x, a.translate, a.scale, a.originPoint),
    sf(i.y, l.translate, l.scale, l.originPoint)
}
const zg = .999999999999
  , Vg = 1.0000000000001;
function sE(i, a, l, o=!1) {
    const c = l.length;
    if (!c)
        return;
    a.x = a.y = 1;
    let d, f;
    for (let p = 0; p < c; p++) {
        d = l[p],
        f = d.projectionDelta;
        const {visualElement: h} = d.options;
        h && h.props.style && h.props.style.display === "contents" || (o && d.options.layoutScroll && d.scroll && d !== d.root && ja(i, {
            x: -d.scroll.offset.x,
            y: -d.scroll.offset.y
        }),
        f && (a.x *= f.x.scale,
        a.y *= f.y.scale,
        tv(i, f)),
        o && ji(d.latestValues) && ja(i, d.latestValues))
    }
    a.x < Vg && a.x > zg && (a.x = 1),
    a.y < Vg && a.y > zg && (a.y = 1)
}
function Oa(i, a) {
    i.min = i.min + a,
    i.max = i.max + a
}
function _g(i, a, l, o, c=.5) {
    const d = Xt(i.min, i.max, c);
    sf(i, a, l, d, o)
}
function ja(i, a) {
    _g(i.x, a.x, a.scaleX, a.scale, a.originX),
    _g(i.y, a.y, a.scaleY, a.scale, a.originY)
}
function ev(i, a) {
    return $y(aE(i.getBoundingClientRect(), a))
}
function lE(i, a, l) {
    const o = ev(i, l)
      , {scroll: c} = a;
    return c && (Oa(o.x, c.offset.x),
    Oa(o.y, c.offset.y)),
    o
}
const Ug = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , za = () => ({
    x: Ug(),
    y: Ug()
})
  , Bg = () => ({
    min: 0,
    max: 0
})
  , Wt = () => ({
    x: Bg(),
    y: Bg()
})
  , lf = {
    current: null
}
  , nv = {
    current: !1
};
function oE() {
    if (nv.current = !0,
    !!Sf)
        if (window.matchMedia) {
            const i = window.matchMedia("(prefers-reduced-motion)")
              , a = () => lf.current = i.matches;
            i.addEventListener("change", a),
            a()
        } else
            lf.current = !1
}
const rE = new WeakMap;
function uE(i, a, l) {
    for (const o in a) {
        const c = a[o]
          , d = l[o];
        if (Se(c))
            i.addValue(o, c);
        else if (Se(d))
            i.addValue(o, _a(c, {
                owner: i
            }));
        else if (d !== c)
            if (i.hasValue(o)) {
                const f = i.getValue(o);
                f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c)
            } else {
                const f = i.getStaticValue(o);
                i.addValue(o, _a(f !== void 0 ? f : c, {
                    owner: i
                }))
            }
    }
    for (const o in l)
        a[o] === void 0 && i.removeValue(o);
    return a
}
const Lg = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class cE {
    scrapeMotionValuesFromProps(a, l, o) {
        return {}
    }
    constructor({parent: a, props: l, presenceContext: o, reducedMotionConfig: c, blockInitialAnimation: d, visualState: f}, p={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = Lf,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const x = Ne.now();
            this.renderScheduledAt < x && (this.renderScheduledAt = x,
            Ht.render(this.render, !1, !0))
        }
        ;
        const {latestValues: h, renderState: m} = f;
        this.latestValues = h,
        this.baseTarget = {
            ...h
        },
        this.initialValues = l.initial ? {
            ...h
        } : {},
        this.renderState = m,
        this.parent = a,
        this.props = l,
        this.presenceContext = o,
        this.depth = a ? a.depth + 1 : 0,
        this.reducedMotionConfig = c,
        this.options = p,
        this.blockInitialAnimation = !!d,
        this.isControllingVariants = ar(l),
        this.isVariantNode = qy(l),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(a && a.current);
        const {willChange: y, ...b} = this.scrapeMotionValuesFromProps(l, {}, this);
        for (const x in b) {
            const M = b[x];
            h[x] !== void 0 && Se(M) && M.set(h[x])
        }
    }
    mount(a) {
        this.current = a,
        rE.set(a, this),
        this.projection && !this.projection.instance && this.projection.mount(a),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (l, o) => this.bindToMotionValue(o, l)),
        nv.current || oE(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : lf.current,
        this.parent?.addChild(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(),
        ri(this.notifyUpdate),
        ri(this.render),
        this.valueSubscriptions.forEach(a => a()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this);
        for (const a in this.events)
            this.events[a].clear();
        for (const a in this.features) {
            const l = this.features[a];
            l && (l.unmount(),
            l.isMounted = !1)
        }
        this.current = null
    }
    addChild(a) {
        this.children.add(a),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(a)
    }
    removeChild(a) {
        this.children.delete(a),
        this.enteringChildren && this.enteringChildren.delete(a)
    }
    bindToMotionValue(a, l) {
        this.valueSubscriptions.has(a) && this.valueSubscriptions.get(a)();
        const o = Ga.has(a);
        o && this.onBindTransform && this.onBindTransform();
        const c = l.on("change", f => {
            this.latestValues[a] = f,
            this.props.onUpdate && Ht.preRender(this.notifyUpdate),
            o && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let d;
        window.MotionCheckAppearSync && (d = window.MotionCheckAppearSync(this, a, l)),
        this.valueSubscriptions.set(a, () => {
            c(),
            d && d(),
            l.owner && l.stop()
        }
        )
    }
    sortNodePosition(a) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== a.type ? 0 : this.sortInstanceNodePosition(this.current, a.current)
    }
    updateFeatures() {
        let a = "animation";
        for (a in Ua) {
            const l = Ua[a];
            if (!l)
                continue;
            const {isEnabled: o, Feature: c} = l;
            if (!this.features[a] && c && o(this.props) && (this.features[a] = new c(this)),
            this.features[a]) {
                const d = this.features[a];
                d.isMounted ? d.update() : (d.mount(),
                d.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Wt()
    }
    getStaticValue(a) {
        return this.latestValues[a]
    }
    setStaticValue(a, l) {
        this.latestValues[a] = l
    }
    update(a, l) {
        (a.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = a,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = l;
        for (let o = 0; o < Lg.length; o++) {
            const c = Lg[o];
            this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](),
            delete this.propEventSubscriptions[c]);
            const d = "on" + c
              , f = a[d];
            f && (this.propEventSubscriptions[c] = this.on(c, f))
        }
        this.prevMotionValues = uE(this, this.scrapeMotionValuesFromProps(a, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(a) {
        return this.props.variants ? this.props.variants[a] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(a) {
        const l = this.getClosestVariantNode();
        if (l)
            return l.variantChildren && l.variantChildren.add(a),
            () => l.variantChildren.delete(a)
    }
    addValue(a, l) {
        const o = this.values.get(a);
        l !== o && (o && this.removeValue(a),
        this.bindToMotionValue(a, l),
        this.values.set(a, l),
        this.latestValues[a] = l.get())
    }
    removeValue(a) {
        this.values.delete(a);
        const l = this.valueSubscriptions.get(a);
        l && (l(),
        this.valueSubscriptions.delete(a)),
        delete this.latestValues[a],
        this.removeValueFromRenderState(a, this.renderState)
    }
    hasValue(a) {
        return this.values.has(a)
    }
    getValue(a, l) {
        if (this.props.values && this.props.values[a])
            return this.props.values[a];
        let o = this.values.get(a);
        return o === void 0 && l !== void 0 && (o = _a(l === null ? void 0 : l, {
            owner: this
        }),
        this.addValue(a, o)),
        o
    }
    readValue(a, l) {
        let o = this.latestValues[a] !== void 0 || !this.current ? this.latestValues[a] : this.getBaseTargetFromProps(this.props, a) ?? this.readValueFromInstance(this.current, a, this.options);
        return o != null && (typeof o == "string" && (K0(o) || F0(o)) ? o = parseFloat(o) : !vA(o) && ui.test(l) && (o = Ry(a, l)),
        this.setBaseTarget(a, Se(o) ? o.get() : o)),
        Se(o) ? o.get() : o
    }
    setBaseTarget(a, l) {
        this.baseTarget[a] = l
    }
    getBaseTarget(a) {
        const {initial: l} = this.props;
        let o;
        if (typeof l == "string" || typeof l == "object") {
            const d = Ff(this.props, l, this.presenceContext?.custom);
            d && (o = d[a])
        }
        if (l && o !== void 0)
            return o;
        const c = this.getBaseTargetFromProps(this.props, a);
        return c !== void 0 && !Se(c) ? c : this.initialValues[a] !== void 0 && o === void 0 ? void 0 : this.baseTarget[a]
    }
    on(a, l) {
        return this.events[a] || (this.events[a] = new Mf),
        this.events[a].add(l)
    }
    notify(a, ...l) {
        this.events[a] && this.events[a].notify(...l)
    }
    scheduleRenderMicrotask() {
        qf.render(this.render)
    }
}
class iv extends cE {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = lA
    }
    sortInstanceNodePosition(a, l) {
        return a.compareDocumentPosition(l) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(a, l) {
        return a.style ? a.style[l] : void 0
    }
    removeValueFromRenderState(a, {vars: l, style: o}) {
        delete l[a],
        delete o[a]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: a} = this.props;
        Se(a) && (this.childSubscription = a.on("change", l => {
            this.current && (this.current.textContent = `${l}`)
        }
        ))
    }
}
function av(i, {style: a, vars: l}, o, c) {
    const d = i.style;
    let f;
    for (f in a)
        d[f] = a[f];
    c?.applyProjectionStyles(d, o);
    for (f in l)
        d.setProperty(f, l[f])
}
function fE(i) {
    return window.getComputedStyle(i)
}
class dE extends iv {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = av
    }
    readValueFromInstance(a, l) {
        if (Ga.has(l))
            return this.projection?.isProjecting ? Jc(l) : w2(a, l);
        {
            const o = fE(a)
              , c = (Nf(l) ? o.getPropertyValue(l) : o[l]) || 0;
            return typeof c == "string" ? c.trim() : c
        }
    }
    measureInstanceViewportBox(a, {transformPagePoint: l}) {
        return ev(a, l)
    }
    build(a, l, o) {
        Zf(a, l, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(a, l, o) {
        return Jf(a, l, o)
    }
}
const sv = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function hE(i, a, l, o) {
    av(i, a, void 0, o);
    for (const c in a.attrs)
        i.setAttribute(sv.has(c) ? c : Wf(c), a.attrs[c])
}
class mE extends iv {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Wt
    }
    getBaseTargetFromProps(a, l) {
        return a[l]
    }
    readValueFromInstance(a, l) {
        if (Ga.has(l)) {
            const o = Ny(l);
            return o && o.default || 0
        }
        return l = sv.has(l) ? l : Wf(l),
        a.getAttribute(l)
    }
    scrapeMotionValuesFromProps(a, l, o) {
        return Py(a, l, o)
    }
    build(a, l, o) {
        Xy(a, l, this.isSVGTag, o.transformTemplate, o.style)
    }
    renderInstance(a, l, o, c) {
        hE(a, l, o, c)
    }
    mount(a) {
        this.isSVGTag = Zy(a.tagName),
        super.mount(a)
    }
}
const pE = (i, a) => Pf(i) ? new mE(a) : new dE(a,{
    allowProjection: i !== k.Fragment
});
function Va(i, a, l) {
    const o = i.getProps();
    return Ff(o, a, l !== void 0 ? l : o.custom, i)
}
const of = i => Array.isArray(i);
function gE(i, a, l) {
    i.hasValue(a) ? i.getValue(a).set(l) : i.addValue(a, _a(l))
}
function yE(i) {
    return of(i) ? i[i.length - 1] || 0 : i
}
function vE(i, a) {
    const l = Va(i, a);
    let {transitionEnd: o={}, transition: c={}, ...d} = l || {};
    d = {
        ...d,
        ...o
    };
    for (const f in d) {
        const p = yE(d[f]);
        gE(i, f, p)
    }
}
function bE(i) {
    return !!(Se(i) && i.add)
}
function rf(i, a) {
    const l = i.getValue("willChange");
    if (bE(l))
        return l.add(a);
    if (!l && Vn.WillChange) {
        const o = new Vn.WillChange("auto");
        i.addValue("willChange", o),
        o.add(a)
    }
}
function lv(i) {
    return i.props[Fy]
}
const xE = i => i !== null;
function SE(i, {repeat: a, repeatType: l="loop"}, o) {
    const c = i.filter(xE)
      , d = a && l !== "loop" && a % 2 === 1 ? 0 : c.length - 1;
    return c[d]
}
const TE = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , AE = i => ({
    type: "spring",
    stiffness: 550,
    damping: i === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , EE = {
    type: "keyframes",
    duration: .8
}
  , wE = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , ME = (i, {keyframes: a}) => a.length > 2 ? EE : Ga.has(i) ? i.startsWith("scale") ? AE(a[1]) : TE : wE;
function DE({when: i, delay: a, delayChildren: l, staggerChildren: o, staggerDirection: c, repeat: d, repeatType: f, repeatDelay: p, from: h, elapsed: m, ...y}) {
    return !!Object.keys(y).length
}
const $f = (i, a, l, o={}, c, d) => f => {
    const p = kf(o, i) || {}
      , h = p.delay || o.delay || 0;
    let {elapsed: m=0} = o;
    m = m - dn(h);
    const y = {
        keyframes: Array.isArray(l) ? l : [null, l],
        ease: "easeOut",
        velocity: a.getVelocity(),
        ...p,
        delay: -m,
        onUpdate: x => {
            a.set(x),
            p.onUpdate && p.onUpdate(x)
        }
        ,
        onComplete: () => {
            f(),
            p.onComplete && p.onComplete()
        }
        ,
        name: i,
        motionValue: a,
        element: d ? void 0 : c
    };
    DE(p) || Object.assign(y, ME(i, y)),
    y.duration && (y.duration = dn(y.duration)),
    y.repeatDelay && (y.repeatDelay = dn(y.repeatDelay)),
    y.from !== void 0 && (y.keyframes[0] = y.from);
    let b = !1;
    if ((y.type === !1 || y.duration === 0 && !y.repeatDelay) && (ef(y),
    y.delay === 0 && (b = !0)),
    (Vn.instantAnimations || Vn.skipAnimations) && (b = !0,
    ef(y),
    y.delay = 0),
    y.allowFlatten = !p.type && !p.ease,
    b && !d && a.get() !== void 0) {
        const x = SE(y.keyframes, p);
        if (x !== void 0) {
            Ht.update( () => {
                y.onUpdate(x),
                y.onComplete()
            }
            );
            return
        }
    }
    return p.isSync ? new Bf(y) : new P2(y)
}
;
function CE({protectedKeys: i, needsAnimating: a}, l) {
    const o = i.hasOwnProperty(l) && a[l] !== !0;
    return a[l] = !1,
    o
}
function ov(i, a, {delay: l=0, transitionOverride: o, type: c}={}) {
    let {transition: d=i.getDefaultTransition(), transitionEnd: f, ...p} = a;
    o && (d = o);
    const h = []
      , m = c && i.animationState && i.animationState.getState()[c];
    for (const y in p) {
        const b = i.getValue(y, i.latestValues[y] ?? null)
          , x = p[y];
        if (x === void 0 || m && CE(m, y))
            continue;
        const M = {
            delay: l,
            ...kf(d || {}, y)
        }
          , E = b.get();
        if (E !== void 0 && !b.isAnimating && !Array.isArray(x) && x === E && !M.velocity)
            continue;
        let D = !1;
        if (window.MotionHandoffAnimation) {
            const N = lv(i);
            if (N) {
                const j = window.MotionHandoffAnimation(N, y, Ht);
                j !== null && (M.startTime = j,
                D = !0)
            }
        }
        rf(i, y),
        b.start($f(y, b, x, i.shouldReduceMotion && My.has(y) ? {
            type: !1
        } : M, i, D));
        const R = b.animation;
        R && h.push(R)
    }
    return f && Promise.all(h).then( () => {
        Ht.update( () => {
            f && vE(i, f)
        }
        )
    }
    ),
    h
}
function rv(i, a, l, o=0, c=1) {
    const d = Array.from(i).sort( (m, y) => m.sortNodePosition(y)).indexOf(a)
      , f = i.size
      , p = (f - 1) * o;
    return typeof l == "function" ? l(d, f) : c === 1 ? d * o : p - d * o
}
function uf(i, a, l={}) {
    const o = Va(i, a, l.type === "exit" ? i.presenceContext?.custom : void 0);
    let {transition: c=i.getDefaultTransition() || {}} = o || {};
    l.transitionOverride && (c = l.transitionOverride);
    const d = o ? () => Promise.all(ov(i, o, l)) : () => Promise.resolve()
      , f = i.variantChildren && i.variantChildren.size ? (h=0) => {
        const {delayChildren: m=0, staggerChildren: y, staggerDirection: b} = c;
        return NE(i, a, h, m, y, b, l)
    }
    : () => Promise.resolve()
      , {when: p} = c;
    if (p) {
        const [h,m] = p === "beforeChildren" ? [d, f] : [f, d];
        return h().then( () => m())
    } else
        return Promise.all([d(), f(l.delay)])
}
function NE(i, a, l=0, o=0, c=0, d=1, f) {
    const p = [];
    for (const h of i.variantChildren)
        h.notify("AnimationStart", a),
        p.push(uf(h, a, {
            ...f,
            delay: l + (typeof o == "function" ? 0 : o) + rv(i.variantChildren, h, o, c, d)
        }).then( () => h.notify("AnimationComplete", a)));
    return Promise.all(p)
}
function RE(i, a, l={}) {
    i.notify("AnimationStart", a);
    let o;
    if (Array.isArray(a)) {
        const c = a.map(d => uf(i, d, l));
        o = Promise.all(c)
    } else if (typeof a == "string")
        o = uf(i, a, l);
    else {
        const c = typeof a == "function" ? Va(i, a, l.custom) : a;
        o = Promise.all(ov(i, c, l))
    }
    return o.then( () => {
        i.notify("AnimationComplete", a)
    }
    )
}
function uv(i, a) {
    if (!Array.isArray(a))
        return !1;
    const l = a.length;
    if (l !== i.length)
        return !1;
    for (let o = 0; o < l; o++)
        if (a[o] !== i[o])
            return !1;
    return !0
}
const OE = Qf.length;
function cv(i) {
    if (!i)
        return;
    if (!i.isControllingVariants) {
        const l = i.parent ? cv(i.parent) || {} : {};
        return i.props.initial !== void 0 && (l.initial = i.props.initial),
        l
    }
    const a = {};
    for (let l = 0; l < OE; l++) {
        const o = Qf[l]
          , c = i.props[o];
        (ul(c) || c === !1) && (a[o] = c)
    }
    return a
}
const jE = [...Xf].reverse()
  , zE = Xf.length;
function VE(i) {
    return a => Promise.all(a.map( ({animation: l, options: o}) => RE(i, l, o)))
}
function _E(i) {
    let a = VE(i)
      , l = kg()
      , o = !0;
    const c = h => (m, y) => {
        const b = Va(i, y, h === "exit" ? i.presenceContext?.custom : void 0);
        if (b) {
            const {transition: x, transitionEnd: M, ...E} = b;
            m = {
                ...m,
                ...E,
                ...M
            }
        }
        return m
    }
    ;
    function d(h) {
        a = h(i)
    }
    function f(h) {
        const {props: m} = i
          , y = cv(i.parent) || {}
          , b = []
          , x = new Set;
        let M = {}
          , E = 1 / 0;
        for (let R = 0; R < zE; R++) {
            const N = jE[R]
              , j = l[N]
              , _ = m[N] !== void 0 ? m[N] : y[N]
              , F = ul(_)
              , Y = N === h ? j.isActive : null;
            Y === !1 && (E = R);
            let K = _ === y[N] && _ !== m[N] && F;
            if (K && o && i.manuallyAnimateOnMount && (K = !1),
            j.protectedKeys = {
                ...M
            },
            !j.isActive && Y === null || !_ && !j.prevProp || ir(_) || typeof _ == "boolean")
                continue;
            const J = UE(j.prevProp, _);
            let L = J || N === h && j.isActive && !K && F || R > E && F
              , I = !1;
            const ct = Array.isArray(_) ? _ : [_];
            let ot = ct.reduce(c(N), {});
            Y === !1 && (ot = {});
            const {prevResolvedValues: yt={}} = j
              , Bt = {
                ...yt,
                ...ot
            }
              , vt = Z => {
                L = !0,
                x.has(Z) && (I = !0,
                x.delete(Z)),
                j.needsAnimating[Z] = !0;
                const H = i.getValue(Z);
                H && (H.liveStyle = !1)
            }
            ;
            for (const Z in Bt) {
                const H = ot[Z]
                  , rt = yt[Z];
                if (M.hasOwnProperty(Z))
                    continue;
                let A = !1;
                of(H) && of(rt) ? A = !uv(H, rt) : A = H !== rt,
                A ? H != null ? vt(Z) : x.add(Z) : H !== void 0 && x.has(Z) ? vt(Z) : j.protectedKeys[Z] = !0
            }
            j.prevProp = _,
            j.prevResolvedValues = ot,
            j.isActive && (M = {
                ...M,
                ...ot
            }),
            o && i.blockInitialAnimation && (L = !1);
            const mt = K && J;
            L && (!mt || I) && b.push(...ct.map(Z => {
                const H = {
                    type: N
                };
                if (typeof Z == "string" && o && !mt && i.manuallyAnimateOnMount && i.parent) {
                    const {parent: rt} = i
                      , A = Va(rt, Z);
                    if (rt.enteringChildren && A) {
                        const {delayChildren: G} = A.transition || {};
                        H.delay = rv(rt.enteringChildren, i, G)
                    }
                }
                return {
                    animation: Z,
                    options: H
                }
            }
            ))
        }
        if (x.size) {
            const R = {};
            if (typeof m.initial != "boolean") {
                const N = Va(i, Array.isArray(m.initial) ? m.initial[0] : m.initial);
                N && N.transition && (R.transition = N.transition)
            }
            x.forEach(N => {
                const j = i.getBaseTarget(N)
                  , _ = i.getValue(N);
                _ && (_.liveStyle = !0),
                R[N] = j ?? null
            }
            ),
            b.push({
                animation: R
            })
        }
        let D = !!b.length;
        return o && (m.initial === !1 || m.initial === m.animate) && !i.manuallyAnimateOnMount && (D = !1),
        o = !1,
        D ? a(b) : Promise.resolve()
    }
    function p(h, m) {
        if (l[h].isActive === m)
            return Promise.resolve();
        i.variantChildren?.forEach(b => b.animationState?.setActive(h, m)),
        l[h].isActive = m;
        const y = f(h);
        for (const b in l)
            l[b].protectedKeys = {};
        return y
    }
    return {
        animateChanges: f,
        setActive: p,
        setAnimateFunction: d,
        getState: () => l,
        reset: () => {
            l = kg(),
            o = !0
        }
    }
}
function UE(i, a) {
    return typeof a == "string" ? a !== i : Array.isArray(a) ? !uv(a, i) : !1
}
function Oi(i=!1) {
    return {
        isActive: i,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function kg() {
    return {
        animate: Oi(!0),
        whileInView: Oi(),
        whileHover: Oi(),
        whileTap: Oi(),
        whileDrag: Oi(),
        whileFocus: Oi(),
        exit: Oi()
    }
}
class ci {
    constructor(a) {
        this.isMounted = !1,
        this.node = a
    }
    update() {}
}
class BE extends ci {
    constructor(a) {
        super(a),
        a.animationState || (a.animationState = _E(a))
    }
    updateAnimationControlsSubscription() {
        const {animate: a} = this.node.getProps();
        ir(a) && (this.unmountControls = a.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: a} = this.node.getProps()
          , {animate: l} = this.node.prevProps || {};
        a !== l && this.updateAnimationControlsSubscription()
    }
    unmount() {
        this.node.animationState.reset(),
        this.unmountControls?.()
    }
}
let LE = 0;
class kE extends ci {
    constructor() {
        super(...arguments),
        this.id = LE++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: a, onExitComplete: l} = this.node.presenceContext
          , {isPresent: o} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || a === o)
            return;
        const c = this.node.animationState.setActive("exit", !a);
        l && !a && c.then( () => {
            l(this.id)
        }
        )
    }
    mount() {
        const {register: a, onExitComplete: l} = this.node.presenceContext || {};
        l && l(this.id),
        a && (this.unmount = a(this.id))
    }
    unmount() {}
}
const HE = {
    animation: {
        Feature: BE
    },
    exit: {
        Feature: kE
    }
};
function fl(i, a, l, o={
    passive: !0
}) {
    return i.addEventListener(a, l, o),
    () => i.removeEventListener(a, l)
}
function gl(i) {
    return {
        point: {
            x: i.pageX,
            y: i.pageY
        }
    }
}
const qE = i => a => Gf(a) && i(a, gl(a));
function tl(i, a, l, o) {
    return fl(i, a, qE(l), o)
}
const fv = 1e-4
  , GE = 1 - fv
  , YE = 1 + fv
  , dv = .01
  , XE = 0 - dv
  , QE = 0 + dv;
function Ae(i) {
    return i.max - i.min
}
function ZE(i, a, l) {
    return Math.abs(i - a) <= l
}
function Hg(i, a, l, o=.5) {
    i.origin = o,
    i.originPoint = Xt(a.min, a.max, i.origin),
    i.scale = Ae(l) / Ae(a),
    i.translate = Xt(l.min, l.max, i.origin) - i.originPoint,
    (i.scale >= GE && i.scale <= YE || isNaN(i.scale)) && (i.scale = 1),
    (i.translate >= XE && i.translate <= QE || isNaN(i.translate)) && (i.translate = 0)
}
function el(i, a, l, o) {
    Hg(i.x, a.x, l.x, o ? o.originX : void 0),
    Hg(i.y, a.y, l.y, o ? o.originY : void 0)
}
function qg(i, a, l) {
    i.min = l.min + a.min,
    i.max = i.min + Ae(a)
}
function KE(i, a, l) {
    qg(i.x, a.x, l.x),
    qg(i.y, a.y, l.y)
}
function Gg(i, a, l) {
    i.min = a.min - l.min,
    i.max = i.min + Ae(a)
}
function nl(i, a, l) {
    Gg(i.x, a.x, l.x),
    Gg(i.y, a.y, l.y)
}
function Pe(i) {
    return [i("x"), i("y")]
}
const hv = ({current: i}) => i ? i.ownerDocument.defaultView : null
  , Yg = (i, a) => Math.abs(i - a);
function PE(i, a) {
    const l = Yg(i.x, a.x)
      , o = Yg(i.y, a.y);
    return Math.sqrt(l ** 2 + o ** 2)
}
class mv {
    constructor(a, l, {transformPagePoint: o, contextWindow: c=window, dragSnapToOrigin: d=!1, distanceThreshold: f=3}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const x = Oc(this.lastMoveEventInfo, this.history)
              , M = this.startEvent !== null
              , E = PE(x.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!M && !E)
                return;
            const {point: D} = x
              , {timestamp: R} = ge;
            this.history.push({
                ...D,
                timestamp: R
            });
            const {onStart: N, onMove: j} = this.handlers;
            M || (N && N(this.lastMoveEvent, x),
            this.startEvent = this.lastMoveEvent),
            j && j(this.lastMoveEvent, x)
        }
        ,
        this.handlePointerMove = (x, M) => {
            this.lastMoveEvent = x,
            this.lastMoveEventInfo = Rc(M, this.transformPagePoint),
            Ht.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (x, M) => {
            this.end();
            const {onEnd: E, onSessionEnd: D, resumeAnimation: R} = this.handlers;
            if (this.dragSnapToOrigin && R && R(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const N = Oc(x.type === "pointercancel" ? this.lastMoveEventInfo : Rc(M, this.transformPagePoint), this.history);
            this.startEvent && E && E(x, N),
            D && D(x, N)
        }
        ,
        !Gf(a))
            return;
        this.dragSnapToOrigin = d,
        this.handlers = l,
        this.transformPagePoint = o,
        this.distanceThreshold = f,
        this.contextWindow = c || window;
        const p = gl(a)
          , h = Rc(p, this.transformPagePoint)
          , {point: m} = h
          , {timestamp: y} = ge;
        this.history = [{
            ...m,
            timestamp: y
        }];
        const {onSessionStart: b} = l;
        b && b(a, Oc(h, this.history)),
        this.removeListeners = hl(tl(this.contextWindow, "pointermove", this.handlePointerMove), tl(this.contextWindow, "pointerup", this.handlePointerUp), tl(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(a) {
        this.handlers = a
    }
    end() {
        this.removeListeners && this.removeListeners(),
        ri(this.updatePoint)
    }
}
function Rc(i, a) {
    return a ? {
        point: a(i.point)
    } : i
}
function Xg(i, a) {
    return {
        x: i.x - a.x,
        y: i.y - a.y
    }
}
function Oc({point: i}, a) {
    return {
        point: i,
        delta: Xg(i, pv(a)),
        offset: Xg(i, FE(a)),
        velocity: JE(a, .1)
    }
}
function FE(i) {
    return i[0]
}
function pv(i) {
    return i[i.length - 1]
}
function JE(i, a) {
    if (i.length < 2)
        return {
            x: 0,
            y: 0
        };
    let l = i.length - 1
      , o = null;
    const c = pv(i);
    for (; l >= 0 && (o = i[l],
    !(c.timestamp - o.timestamp > dn(a))); )
        l--;
    if (!o)
        return {
            x: 0,
            y: 0
        };
    const d = Fe(c.timestamp - o.timestamp);
    if (d === 0)
        return {
            x: 0,
            y: 0
        };
    const f = {
        x: (c.x - o.x) / d,
        y: (c.y - o.y) / d
    };
    return f.x === 1 / 0 && (f.x = 0),
    f.y === 1 / 0 && (f.y = 0),
    f
}
function WE(i, {min: a, max: l}, o) {
    return a !== void 0 && i < a ? i = o ? Xt(a, i, o.min) : Math.max(i, a) : l !== void 0 && i > l && (i = o ? Xt(l, i, o.max) : Math.min(i, l)),
    i
}
function Qg(i, a, l) {
    return {
        min: a !== void 0 ? i.min + a : void 0,
        max: l !== void 0 ? i.max + l - (i.max - i.min) : void 0
    }
}
function $E(i, {top: a, left: l, bottom: o, right: c}) {
    return {
        x: Qg(i.x, l, c),
        y: Qg(i.y, a, o)
    }
}
function Zg(i, a) {
    let l = a.min - i.min
      , o = a.max - i.max;
    return a.max - a.min < i.max - i.min && ([l,o] = [o, l]),
    {
        min: l,
        max: o
    }
}
function IE(i, a) {
    return {
        x: Zg(i.x, a.x),
        y: Zg(i.y, a.y)
    }
}
function tw(i, a) {
    let l = .5;
    const o = Ae(i)
      , c = Ae(a);
    return c > o ? l = ll(a.min, a.max - o, i.min) : o > c && (l = ll(i.min, i.max - c, a.min)),
    zn(0, 1, l)
}
function ew(i, a) {
    const l = {};
    return a.min !== void 0 && (l.min = a.min - i.min),
    a.max !== void 0 && (l.max = a.max - i.min),
    l
}
const cf = .35;
function nw(i=cf) {
    return i === !1 ? i = 0 : i === !0 && (i = cf),
    {
        x: Kg(i, "left", "right"),
        y: Kg(i, "top", "bottom")
    }
}
function Kg(i, a, l) {
    return {
        min: Pg(i, a),
        max: Pg(i, l)
    }
}
function Pg(i, a) {
    return typeof i == "number" ? i : i[a] || 0
}
const iw = new WeakMap;
class aw {
    constructor(a) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Wt(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = a
    }
    start(a, {snapToCursor: l=!1, distanceThreshold: o}={}) {
        const {presenceContext: c} = this.visualElement;
        if (c && c.isPresent === !1)
            return;
        const d = b => {
            const {dragSnapToOrigin: x} = this.getProps();
            x ? this.pauseAnimation() : this.stopAnimation(),
            l && this.snapToCursor(gl(b).point)
        }
          , f = (b, x) => {
            const {drag: M, dragPropagation: E, onDragStart: D} = this.getProps();
            if (M && !E && (this.openDragLock && this.openDragLock(),
            this.openDragLock = cA(M),
            !this.openDragLock))
                return;
            this.latestPointerEvent = b,
            this.latestPanInfo = x,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Pe(N => {
                let j = this.getAxisMotionValue(N).get() || 0;
                if (hn.test(j)) {
                    const {projection: _} = this.visualElement;
                    if (_ && _.layout) {
                        const F = _.layout.layoutBox[N];
                        F && (j = Ae(F) * (parseFloat(j) / 100))
                    }
                }
                this.originPoint[N] = j
            }
            ),
            D && Ht.postRender( () => D(b, x)),
            rf(this.visualElement, "transform");
            const {animationState: R} = this.visualElement;
            R && R.setActive("whileDrag", !0)
        }
          , p = (b, x) => {
            this.latestPointerEvent = b,
            this.latestPanInfo = x;
            const {dragPropagation: M, dragDirectionLock: E, onDirectionLock: D, onDrag: R} = this.getProps();
            if (!M && !this.openDragLock)
                return;
            const {offset: N} = x;
            if (E && this.currentDirection === null) {
                this.currentDirection = sw(N),
                this.currentDirection !== null && D && D(this.currentDirection);
                return
            }
            this.updateAxis("x", x.point, N),
            this.updateAxis("y", x.point, N),
            this.visualElement.render(),
            R && R(b, x)
        }
          , h = (b, x) => {
            this.latestPointerEvent = b,
            this.latestPanInfo = x,
            this.stop(b, x),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , m = () => Pe(b => this.getAnimationState(b) === "paused" && this.getAxisMotionValue(b).animation?.play())
          , {dragSnapToOrigin: y} = this.getProps();
        this.panSession = new mv(a,{
            onSessionStart: d,
            onStart: f,
            onMove: p,
            onSessionEnd: h,
            resumeAnimation: m
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: y,
            distanceThreshold: o,
            contextWindow: hv(this.visualElement)
        })
    }
    stop(a, l) {
        const o = a || this.latestPointerEvent
          , c = l || this.latestPanInfo
          , d = this.isDragging;
        if (this.cancel(),
        !d || !c || !o)
            return;
        const {velocity: f} = c;
        this.startAnimation(f);
        const {onDragEnd: p} = this.getProps();
        p && Ht.postRender( () => p(o, c))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: a, animationState: l} = this.visualElement;
        a && (a.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: o} = this.getProps();
        !o && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        l && l.setActive("whileDrag", !1)
    }
    updateAxis(a, l, o) {
        const {drag: c} = this.getProps();
        if (!o || !Ho(a, c, this.currentDirection))
            return;
        const d = this.getAxisMotionValue(a);
        let f = this.originPoint[a] + o[a];
        this.constraints && this.constraints[a] && (f = WE(f, this.constraints[a], this.elastic[a])),
        d.set(f)
    }
    resolveConstraints() {
        const {dragConstraints: a, dragElastic: l} = this.getProps()
          , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout
          , c = this.constraints;
        a && Ra(a) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : a && o ? this.constraints = $E(o.layoutBox, a) : this.constraints = !1,
        this.elastic = nw(l),
        c !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Pe(d => {
            this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = ew(o.layoutBox[d], this.constraints[d]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: a, onMeasureDragConstraints: l} = this.getProps();
        if (!a || !Ra(a))
            return !1;
        const o = a.current
          , {projection: c} = this.visualElement;
        if (!c || !c.layout)
            return !1;
        const d = lE(o, c.root, this.visualElement.getTransformPagePoint());
        let f = IE(c.layout.layoutBox, d);
        if (l) {
            const p = l(iE(f));
            this.hasMutatedConstraints = !!p,
            p && (f = $y(p))
        }
        return f
    }
    startAnimation(a) {
        const {drag: l, dragMomentum: o, dragElastic: c, dragTransition: d, dragSnapToOrigin: f, onDragTransitionEnd: p} = this.getProps()
          , h = this.constraints || {}
          , m = Pe(y => {
            if (!Ho(y, l, this.currentDirection))
                return;
            let b = h && h[y] || {};
            f && (b = {
                min: 0,
                max: 0
            });
            const x = c ? 200 : 1e6
              , M = c ? 40 : 1e7
              , E = {
                type: "inertia",
                velocity: o ? a[y] : 0,
                bounceStiffness: x,
                bounceDamping: M,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...d,
                ...b
            };
            return this.startAxisValueAnimation(y, E)
        }
        );
        return Promise.all(m).then(p)
    }
    startAxisValueAnimation(a, l) {
        const o = this.getAxisMotionValue(a);
        return rf(this.visualElement, a),
        o.start($f(a, o, 0, l, this.visualElement, !1))
    }
    stopAnimation() {
        Pe(a => this.getAxisMotionValue(a).stop())
    }
    pauseAnimation() {
        Pe(a => this.getAxisMotionValue(a).animation?.pause())
    }
    getAnimationState(a) {
        return this.getAxisMotionValue(a).animation?.state
    }
    getAxisMotionValue(a) {
        const l = `_drag${a.toUpperCase()}`
          , o = this.visualElement.getProps()
          , c = o[l];
        return c || this.visualElement.getValue(a, (o.initial ? o.initial[a] : void 0) || 0)
    }
    snapToCursor(a) {
        Pe(l => {
            const {drag: o} = this.getProps();
            if (!Ho(l, o, this.currentDirection))
                return;
            const {projection: c} = this.visualElement
              , d = this.getAxisMotionValue(l);
            if (c && c.layout) {
                const {min: f, max: p} = c.layout.layoutBox[l];
                d.set(a[l] - Xt(f, p, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: a, dragConstraints: l} = this.getProps()
          , {projection: o} = this.visualElement;
        if (!Ra(l) || !o || !this.constraints)
            return;
        this.stopAnimation();
        const c = {
            x: 0,
            y: 0
        };
        Pe(f => {
            const p = this.getAxisMotionValue(f);
            if (p && this.constraints !== !1) {
                const h = p.get();
                c[f] = tw({
                    min: h,
                    max: h
                }, this.constraints[f])
            }
        }
        );
        const {transformTemplate: d} = this.visualElement.getProps();
        this.visualElement.current.style.transform = d ? d({}, "") : "none",
        o.root && o.root.updateScroll(),
        o.updateLayout(),
        this.resolveConstraints(),
        Pe(f => {
            if (!Ho(f, a, null))
                return;
            const p = this.getAxisMotionValue(f)
              , {min: h, max: m} = this.constraints[f];
            p.set(Xt(h, m, c[f]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        iw.set(this.visualElement, this);
        const a = this.visualElement.current
          , l = tl(a, "pointerdown", h => {
            const {drag: m, dragListener: y=!0} = this.getProps();
            m && y && this.start(h)
        }
        )
          , o = () => {
            const {dragConstraints: h} = this.getProps();
            Ra(h) && h.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: c} = this.visualElement
          , d = c.addEventListener("measure", o);
        c && !c.layout && (c.root && c.root.updateScroll(),
        c.updateLayout()),
        Ht.read(o);
        const f = fl(window, "resize", () => this.scalePositionWithinConstraints())
          , p = c.addEventListener("didUpdate", ( ({delta: h, hasLayoutChanged: m}) => {
            this.isDragging && m && (Pe(y => {
                const b = this.getAxisMotionValue(y);
                b && (this.originPoint[y] += h[y].translate,
                b.set(b.get() + h[y].translate))
            }
            ),
            this.visualElement.render())
        }
        ));
        return () => {
            f(),
            l(),
            d(),
            p && p()
        }
    }
    getProps() {
        const a = this.visualElement.getProps()
          , {drag: l=!1, dragDirectionLock: o=!1, dragPropagation: c=!1, dragConstraints: d=!1, dragElastic: f=cf, dragMomentum: p=!0} = a;
        return {
            ...a,
            drag: l,
            dragDirectionLock: o,
            dragPropagation: c,
            dragConstraints: d,
            dragElastic: f,
            dragMomentum: p
        }
    }
}
function Ho(i, a, l) {
    return (a === !0 || a === i) && (l === null || l === i)
}
function sw(i, a=10) {
    let l = null;
    return Math.abs(i.y) > a ? l = "y" : Math.abs(i.x) > a && (l = "x"),
    l
}
class lw extends ci {
    constructor(a) {
        super(a),
        this.removeGroupControls = Je,
        this.removeListeners = Je,
        this.controls = new aw(a)
    }
    mount() {
        const {dragControls: a} = this.node.getProps();
        a && (this.removeGroupControls = a.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Je
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const Fg = i => (a, l) => {
    i && Ht.postRender( () => i(a, l))
}
;
class ow extends ci {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Je
    }
    onPointerDown(a) {
        this.session = new mv(a,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: hv(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: a, onPanStart: l, onPan: o, onPanEnd: c} = this.node.getProps();
        return {
            onSessionStart: Fg(a),
            onStart: Fg(l),
            onMove: o,
            onEnd: (d, f) => {
                delete this.session,
                c && Ht.postRender( () => c(d, f))
            }
        }
    }
    mount() {
        this.removePointerDownListener = tl(this.node.current, "pointerdown", a => this.onPointerDown(a))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const Xo = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function Jg(i, a) {
    return a.max === a.min ? 0 : i / (a.max - a.min) * 100
}
const Ks = {
    correct: (i, a) => {
        if (!a.target)
            return i;
        if (typeof i == "string")
            if (dt.test(i))
                i = parseFloat(i);
            else
                return i;
        const l = Jg(i, a.target.x)
          , o = Jg(i, a.target.y);
        return `${l}% ${o}%`
    }
}
  , rw = {
    correct: (i, {treeScale: a, projectionDelta: l}) => {
        const o = i
          , c = ui.parse(i);
        if (c.length > 5)
            return o;
        const d = ui.createTransformer(i)
          , f = typeof c[0] != "number" ? 1 : 0
          , p = l.x.scale * a.x
          , h = l.y.scale * a.y;
        c[0 + f] /= p,
        c[1 + f] /= h;
        const m = Xt(p, h, .5);
        return typeof c[2 + f] == "number" && (c[2 + f] /= m),
        typeof c[3 + f] == "number" && (c[3 + f] /= m),
        d(c)
    }
};
let jc = !1;
class uw extends k.Component {
    componentDidMount() {
        const {visualElement: a, layoutGroup: l, switchLayoutGroup: o, layoutId: c} = this.props
          , {projection: d} = a;
        OA(cw),
        d && (l.group && l.group.add(d),
        o && o.register && c && o.register(d),
        jc && d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        d.setOptions({
            ...d.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Xo.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(a) {
        const {layoutDependency: l, visualElement: o, drag: c, isPresent: d} = this.props
          , {projection: f} = o;
        return f && (f.isPresent = d,
        jc = !0,
        c || a.layoutDependency !== l || l === void 0 || a.isPresent !== d ? f.willUpdate() : this.safeToRemove(),
        a.isPresent !== d && (d ? f.promote() : f.relegate() || Ht.postRender( () => {
            const p = f.getStack();
            (!p || !p.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: a} = this.props.visualElement;
        a && (a.root.didUpdate(),
        qf.postRender( () => {
            !a.currentAnimation && a.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: a, layoutGroup: l, switchLayoutGroup: o} = this.props
          , {projection: c} = a;
        jc = !0,
        c && (c.scheduleCheckAfterUnmount(),
        l && l.group && l.group.remove(c),
        o && o.deregister && o.deregister(c))
    }
    safeToRemove() {
        const {safeToRemove: a} = this.props;
        a && a()
    }
    render() {
        return null
    }
}
function gv(i) {
    const [a,l] = By()
      , o = k.useContext(bf);
    return S.jsx(uw, {
        ...i,
        layoutGroup: o,
        switchLayoutGroup: k.useContext(Jy),
        isPresent: a,
        safeToRemove: l
    })
}
const cw = {
    borderRadius: {
        ...Ks,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Ks,
    borderTopRightRadius: Ks,
    borderBottomLeftRadius: Ks,
    borderBottomRightRadius: Ks,
    boxShadow: rw
};
function fw(i, a, l) {
    const o = Se(i) ? i : _a(i);
    return o.start($f("", o, a, l)),
    o.animation
}
const dw = (i, a) => i.depth - a.depth;
class hw {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(a) {
        Tf(this.children, a),
        this.isDirty = !0
    }
    remove(a) {
        Af(this.children, a),
        this.isDirty = !0
    }
    forEach(a) {
        this.isDirty && this.children.sort(dw),
        this.isDirty = !1,
        this.children.forEach(a)
    }
}
function mw(i, a) {
    const l = Ne.now()
      , o = ({timestamp: c}) => {
        const d = c - l;
        d >= a && (ri(o),
        i(d - a))
    }
    ;
    return Ht.setup(o, !0),
    () => ri(o)
}
const yv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , pw = yv.length
  , Wg = i => typeof i == "string" ? parseFloat(i) : i
  , $g = i => typeof i == "number" || dt.test(i);
function gw(i, a, l, o, c, d) {
    c ? (i.opacity = Xt(0, l.opacity ?? 1, yw(o)),
    i.opacityExit = Xt(a.opacity ?? 1, 0, vw(o))) : d && (i.opacity = Xt(a.opacity ?? 1, l.opacity ?? 1, o));
    for (let f = 0; f < pw; f++) {
        const p = `border${yv[f]}Radius`;
        let h = Ig(a, p)
          , m = Ig(l, p);
        if (h === void 0 && m === void 0)
            continue;
        h || (h = 0),
        m || (m = 0),
        h === 0 || m === 0 || $g(h) === $g(m) ? (i[p] = Math.max(Xt(Wg(h), Wg(m), o), 0),
        (hn.test(m) || hn.test(h)) && (i[p] += "%")) : i[p] = m
    }
    (a.rotate || l.rotate) && (i.rotate = Xt(a.rotate || 0, l.rotate || 0, o))
}
function Ig(i, a) {
    return i[a] !== void 0 ? i[a] : i.borderRadius
}
const yw = vv(0, .5, iy)
  , vw = vv(.5, .95, Je);
function vv(i, a, l) {
    return o => o < i ? 0 : o > a ? 1 : l(ll(i, a, o))
}
function t0(i, a) {
    i.min = a.min,
    i.max = a.max
}
function Ke(i, a) {
    t0(i.x, a.x),
    t0(i.y, a.y)
}
function e0(i, a) {
    i.translate = a.translate,
    i.scale = a.scale,
    i.originPoint = a.originPoint,
    i.origin = a.origin
}
function n0(i, a, l, o, c) {
    return i -= a,
    i = Wo(i, 1 / l, o),
    c !== void 0 && (i = Wo(i, 1 / c, o)),
    i
}
function bw(i, a=0, l=1, o=.5, c, d=i, f=i) {
    if (hn.test(a) && (a = parseFloat(a),
    a = Xt(f.min, f.max, a / 100) - f.min),
    typeof a != "number")
        return;
    let p = Xt(d.min, d.max, o);
    i === d && (p -= a),
    i.min = n0(i.min, a, l, p, c),
    i.max = n0(i.max, a, l, p, c)
}
function i0(i, a, [l,o,c], d, f) {
    bw(i, a[l], a[o], a[c], a.scale, d, f)
}
const xw = ["x", "scaleX", "originX"]
  , Sw = ["y", "scaleY", "originY"];
function a0(i, a, l, o) {
    i0(i.x, a, xw, l ? l.x : void 0, o ? o.x : void 0),
    i0(i.y, a, Sw, l ? l.y : void 0, o ? o.y : void 0)
}
function s0(i) {
    return i.translate === 0 && i.scale === 1
}
function bv(i) {
    return s0(i.x) && s0(i.y)
}
function l0(i, a) {
    return i.min === a.min && i.max === a.max
}
function Tw(i, a) {
    return l0(i.x, a.x) && l0(i.y, a.y)
}
function o0(i, a) {
    return Math.round(i.min) === Math.round(a.min) && Math.round(i.max) === Math.round(a.max)
}
function xv(i, a) {
    return o0(i.x, a.x) && o0(i.y, a.y)
}
function r0(i) {
    return Ae(i.x) / Ae(i.y)
}
function u0(i, a) {
    return i.translate === a.translate && i.scale === a.scale && i.originPoint === a.originPoint
}
class Aw {
    constructor() {
        this.members = []
    }
    add(a) {
        Tf(this.members, a),
        a.scheduleRender()
    }
    remove(a) {
        if (Af(this.members, a),
        a === this.prevLead && (this.prevLead = void 0),
        a === this.lead) {
            const l = this.members[this.members.length - 1];
            l && this.promote(l)
        }
    }
    relegate(a) {
        const l = this.members.findIndex(c => a === c);
        if (l === 0)
            return !1;
        let o;
        for (let c = l; c >= 0; c--) {
            const d = this.members[c];
            if (d.isPresent !== !1) {
                o = d;
                break
            }
        }
        return o ? (this.promote(o),
        !0) : !1
    }
    promote(a, l) {
        const o = this.lead;
        if (a !== o && (this.prevLead = o,
        this.lead = a,
        a.show(),
        o)) {
            o.instance && o.scheduleRender(),
            a.scheduleRender(),
            a.resumeFrom = o,
            l && (a.resumeFrom.preserveOpacity = !0),
            o.snapshot && (a.snapshot = o.snapshot,
            a.snapshot.latestValues = o.animationValues || o.latestValues),
            a.root && a.root.isUpdating && (a.isLayoutDirty = !0);
            const {crossfade: c} = a.options;
            c === !1 && o.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(a => {
            const {options: l, resumingFrom: o} = a;
            l.onExitComplete && l.onExitComplete(),
            o && o.options.onExitComplete && o.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(a => {
            a.instance && a.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function Ew(i, a, l) {
    let o = "";
    const c = i.x.translate / a.x
      , d = i.y.translate / a.y
      , f = l?.z || 0;
    if ((c || d || f) && (o = `translate3d(${c}px, ${d}px, ${f}px) `),
    (a.x !== 1 || a.y !== 1) && (o += `scale(${1 / a.x}, ${1 / a.y}) `),
    l) {
        const {transformPerspective: m, rotate: y, rotateX: b, rotateY: x, skewX: M, skewY: E} = l;
        m && (o = `perspective(${m}px) ${o}`),
        y && (o += `rotate(${y}deg) `),
        b && (o += `rotateX(${b}deg) `),
        x && (o += `rotateY(${x}deg) `),
        M && (o += `skewX(${M}deg) `),
        E && (o += `skewY(${E}deg) `)
    }
    const p = i.x.scale * a.x
      , h = i.y.scale * a.y;
    return (p !== 1 || h !== 1) && (o += `scale(${p}, ${h})`),
    o || "none"
}
const zc = ["", "X", "Y", "Z"]
  , ww = 1e3;
let Mw = 0;
function Vc(i, a, l, o) {
    const {latestValues: c} = a;
    c[i] && (l[i] = c[i],
    a.setStaticValue(i, 0),
    o && (o[i] = 0))
}
function Sv(i) {
    if (i.hasCheckedOptimisedAppear = !0,
    i.root === i)
        return;
    const {visualElement: a} = i.options;
    if (!a)
        return;
    const l = lv(a);
    if (window.MotionHasOptimisedAnimation(l, "transform")) {
        const {layout: c, layoutId: d} = i.options;
        window.MotionCancelOptimisedAnimation(l, "transform", Ht, !(c || d))
    }
    const {parent: o} = i;
    o && !o.hasCheckedOptimisedAppear && Sv(o)
}
function Tv({attachResizeListener: i, defaultParent: a, measureScroll: l, checkIsScrollRoot: o, resetTransform: c}) {
    return class {
        constructor(f={}, p=a?.()) {
            this.id = Mw++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(Nw),
                this.nodes.forEach(zw),
                this.nodes.forEach(Vw),
                this.nodes.forEach(Rw)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = f,
            this.root = p ? p.root || p : this,
            this.path = p ? [...p.path, p] : [],
            this.parent = p,
            this.depth = p ? p.depth + 1 : 0;
            for (let h = 0; h < this.path.length; h++)
                this.path[h].shouldResetTransform = !0;
            this.root === this && (this.nodes = new hw)
        }
        addEventListener(f, p) {
            return this.eventHandlers.has(f) || this.eventHandlers.set(f, new Mf),
            this.eventHandlers.get(f).add(p)
        }
        notifyListeners(f, ...p) {
            const h = this.eventHandlers.get(f);
            h && h.notify(...p)
        }
        hasListeners(f) {
            return this.eventHandlers.has(f)
        }
        mount(f) {
            if (this.instance)
                return;
            this.isSVG = Uy(f) && !gA(f),
            this.instance = f;
            const {layoutId: p, layout: h, visualElement: m} = this.options;
            if (m && !m.current && m.mount(f),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (h || p) && (this.isLayoutDirty = !0),
            i) {
                let y, b = 0;
                const x = () => this.root.updateBlockedByResize = !1;
                Ht.read( () => {
                    b = window.innerWidth
                }
                ),
                i(f, () => {
                    const M = window.innerWidth;
                    M !== b && (b = M,
                    this.root.updateBlockedByResize = !0,
                    y && y(),
                    y = mw(x, 250),
                    Xo.hasAnimatedSinceResize && (Xo.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(d0)))
                }
                )
            }
            p && this.root.registerSharedNode(p, this),
            this.options.animate !== !1 && m && (p || h) && this.addEventListener("didUpdate", ({delta: y, hasLayoutChanged: b, hasRelativeLayoutChanged: x, layout: M}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const E = this.options.transition || m.getDefaultTransition() || kw
                  , {onLayoutAnimationStart: D, onLayoutAnimationComplete: R} = m.getProps()
                  , N = !this.targetLayout || !xv(this.targetLayout, M)
                  , j = !b && x;
                if (this.options.layoutRoot || this.resumeFrom || j || b && (N || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const _ = {
                        ...kf(E, "layout"),
                        onPlay: D,
                        onComplete: R
                    };
                    (m.shouldReduceMotion || this.options.layoutRoot) && (_.delay = 0,
                    _.type = !1),
                    this.startAnimation(_),
                    this.setAnimationOrigin(y, j)
                } else
                    b || d0(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = M
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const f = this.getStack();
            f && f.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            ri(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(_w),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: f} = this.options;
            return f && f.getProps().transformTemplate
        }
        willUpdate(f=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Sv(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let y = 0; y < this.path.length; y++) {
                const b = this.path[y];
                b.shouldResetTransform = !0,
                b.updateScroll("snapshot"),
                b.options.layoutRoot && b.willUpdate(!1)
            }
            const {layoutId: p, layout: h} = this.options;
            if (p === void 0 && !h)
                return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            f && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(c0);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(f0);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(jw),
            this.nodes.forEach(Dw),
            this.nodes.forEach(Cw)) : this.nodes.forEach(f0),
            this.clearAllSnapshots();
            const p = Ne.now();
            ge.delta = zn(0, 1e3 / 60, p - ge.timestamp),
            ge.timestamp = p,
            ge.isProcessing = !0,
            Tc.update.process(ge),
            Tc.preRender.process(ge),
            Tc.render.process(ge),
            ge.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            qf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Ow),
            this.sharedNodes.forEach(Uw)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Ht.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Ht.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !Ae(this.snapshot.measuredBox.x) && !Ae(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let h = 0; h < this.path.length; h++)
                    this.path[h].updateScroll();
            const f = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = Wt(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: p} = this.options;
            p && p.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0)
        }
        updateScroll(f="measure") {
            let p = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (p = !1),
            p && this.instance) {
                const h = o(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: f,
                    isRoot: h,
                    offset: l(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : h
                }
            }
        }
        resetTransform() {
            if (!c)
                return;
            const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , p = this.projectionDelta && !bv(this.projectionDelta)
              , h = this.getTransformTemplate()
              , m = h ? h(this.latestValues, "") : void 0
              , y = m !== this.prevTransformTemplateValue;
            f && this.instance && (p || ji(this.latestValues) || y) && (c(this.instance, m),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(f=!0) {
            const p = this.measurePageBox();
            let h = this.removeElementScroll(p);
            return f && (h = this.removeTransform(h)),
            Hw(h),
            {
                animationId: this.root.animationId,
                measuredBox: p,
                layoutBox: h,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: f} = this.options;
            if (!f)
                return Wt();
            const p = f.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(qw))) {
                const {scroll: m} = this.root;
                m && (Oa(p.x, m.offset.x),
                Oa(p.y, m.offset.y))
            }
            return p
        }
        removeElementScroll(f) {
            const p = Wt();
            if (Ke(p, f),
            this.scroll?.wasRoot)
                return p;
            for (let h = 0; h < this.path.length; h++) {
                const m = this.path[h]
                  , {scroll: y, options: b} = m;
                m !== this.root && y && b.layoutScroll && (y.wasRoot && Ke(p, f),
                Oa(p.x, y.offset.x),
                Oa(p.y, y.offset.y))
            }
            return p
        }
        applyTransform(f, p=!1) {
            const h = Wt();
            Ke(h, f);
            for (let m = 0; m < this.path.length; m++) {
                const y = this.path[m];
                !p && y.options.layoutScroll && y.scroll && y !== y.root && ja(h, {
                    x: -y.scroll.offset.x,
                    y: -y.scroll.offset.y
                }),
                ji(y.latestValues) && ja(h, y.latestValues)
            }
            return ji(this.latestValues) && ja(h, this.latestValues),
            h
        }
        removeTransform(f) {
            const p = Wt();
            Ke(p, f);
            for (let h = 0; h < this.path.length; h++) {
                const m = this.path[h];
                if (!m.instance || !ji(m.latestValues))
                    continue;
                af(m.latestValues) && m.updateSnapshot();
                const y = Wt()
                  , b = m.measurePageBox();
                Ke(y, b),
                a0(p, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, y)
            }
            return ji(this.latestValues) && a0(p, this.latestValues),
            p
        }
        setTargetDelta(f) {
            this.targetDelta = f,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(f) {
            this.options = {
                ...this.options,
                ...f,
                crossfade: f.crossfade !== void 0 ? f.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ge.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(f=!1) {
            const p = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
            const h = !!this.resumingFrom || this !== p;
            if (!(f || h && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: y, layoutId: b} = this.options;
            if (!(!this.layout || !(y || b))) {
                if (this.resolvedRelativeTargetAt = ge.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const x = this.getClosestProjectingParent();
                    x && x.layout && this.animationProgress !== 1 ? (this.relativeParent = x,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Wt(),
                    this.relativeTargetOrigin = Wt(),
                    nl(this.relativeTargetOrigin, this.layout.layoutBox, x.layout.layoutBox),
                    Ke(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Wt(),
                this.targetWithTransforms = Wt()),
                this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                KE(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ke(this.target, this.layout.layoutBox),
                tv(this.target, this.targetDelta)) : Ke(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const x = this.getClosestProjectingParent();
                    x && !!x.resumingFrom == !!this.resumingFrom && !x.options.layoutScroll && x.target && this.animationProgress !== 1 ? (this.relativeParent = x,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = Wt(),
                    this.relativeTargetOrigin = Wt(),
                    nl(this.relativeTargetOrigin, this.target, x.target),
                    Ke(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || af(this.parent.latestValues) || Iy(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            const f = this.getLead()
              , p = !!this.resumingFrom || this !== f;
            let h = !0;
            if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (h = !1),
            p && (this.isSharedProjectionDirty || this.isTransformDirty) && (h = !1),
            this.resolvedRelativeTargetAt === ge.timestamp && (h = !1),
            h)
                return;
            const {layout: m, layoutId: y} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(m || y))
                return;
            Ke(this.layoutCorrected, this.layout.layoutBox);
            const b = this.treeScale.x
              , x = this.treeScale.y;
            sE(this.layoutCorrected, this.treeScale, this.path, p),
            f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox,
            f.targetWithTransforms = Wt());
            const {target: M} = f;
            if (!M) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (e0(this.prevProjectionDelta.x, this.projectionDelta.x),
            e0(this.prevProjectionDelta.y, this.projectionDelta.y)),
            el(this.projectionDelta, this.layoutCorrected, M, this.latestValues),
            (this.treeScale.x !== b || this.treeScale.y !== x || !u0(this.projectionDelta.x, this.prevProjectionDelta.x) || !u0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", M))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(f=!0) {
            if (this.options.visualElement?.scheduleRender(),
            f) {
                const p = this.getStack();
                p && p.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = za(),
            this.projectionDelta = za(),
            this.projectionDeltaWithTransform = za()
        }
        setAnimationOrigin(f, p=!1) {
            const h = this.snapshot
              , m = h ? h.latestValues : {}
              , y = {
                ...this.latestValues
            }
              , b = za();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !p;
            const x = Wt()
              , M = h ? h.source : void 0
              , E = this.layout ? this.layout.source : void 0
              , D = M !== E
              , R = this.getStack()
              , N = !R || R.members.length <= 1
              , j = !!(D && !N && this.options.crossfade === !0 && !this.path.some(Lw));
            this.animationProgress = 0;
            let _;
            this.mixTargetDelta = F => {
                const Y = F / 1e3;
                h0(b.x, f.x, Y),
                h0(b.y, f.y, Y),
                this.setTargetDelta(b),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (nl(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                Bw(this.relativeTarget, this.relativeTargetOrigin, x, Y),
                _ && Tw(this.relativeTarget, _) && (this.isProjectionDirty = !1),
                _ || (_ = Wt()),
                Ke(_, this.relativeTarget)),
                D && (this.animationValues = y,
                gw(y, m, this.latestValues, Y, j, N)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = Y
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(f) {
            this.notifyListeners("animationStart"),
            this.currentAnimation?.stop(),
            this.resumingFrom?.currentAnimation?.stop(),
            this.pendingAnimation && (ri(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Ht.update( () => {
                Xo.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = _a(0)),
                this.currentAnimation = fw(this.motionValue, [0, 1e3], {
                    ...f,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: p => {
                        this.mixTargetDelta(p),
                        f.onUpdate && f.onUpdate(p)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        f.onComplete && f.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const f = this.getStack();
            f && f.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(ww),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const f = this.getLead();
            let {targetWithTransforms: p, target: h, layout: m, latestValues: y} = f;
            if (!(!p || !h || !m)) {
                if (this !== f && this.layout && m && Av(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    h = this.target || Wt();
                    const b = Ae(this.layout.layoutBox.x);
                    h.x.min = f.target.x.min,
                    h.x.max = h.x.min + b;
                    const x = Ae(this.layout.layoutBox.y);
                    h.y.min = f.target.y.min,
                    h.y.max = h.y.min + x
                }
                Ke(p, h),
                ja(p, y),
                el(this.projectionDeltaWithTransform, this.layoutCorrected, p, y)
            }
        }
        registerSharedNode(f, p) {
            this.sharedNodes.has(f) || this.sharedNodes.set(f, new Aw),
            this.sharedNodes.get(f).add(p);
            const m = p.options.initialPromotionConfig;
            p.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(p) : void 0
            })
        }
        isLead() {
            const f = this.getStack();
            return f ? f.lead === this : !0
        }
        getLead() {
            const {layoutId: f} = this.options;
            return f ? this.getStack()?.lead || this : this
        }
        getPrevLead() {
            const {layoutId: f} = this.options;
            return f ? this.getStack()?.prevLead : void 0
        }
        getStack() {
            const {layoutId: f} = this.options;
            if (f)
                return this.root.sharedNodes.get(f)
        }
        promote({needsReset: f, transition: p, preserveFollowOpacity: h}={}) {
            const m = this.getStack();
            m && m.promote(this, h),
            f && (this.projectionDelta = void 0,
            this.needsReset = !0),
            p && this.setOptions({
                transition: p
            })
        }
        relegate() {
            const f = this.getStack();
            return f ? f.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: f} = this.options;
            if (!f)
                return;
            let p = !1;
            const {latestValues: h} = f;
            if ((h.z || h.rotate || h.rotateX || h.rotateY || h.rotateZ || h.skewX || h.skewY) && (p = !0),
            !p)
                return;
            const m = {};
            h.z && Vc("z", f, m, this.animationValues);
            for (let y = 0; y < zc.length; y++)
                Vc(`rotate${zc[y]}`, f, m, this.animationValues),
                Vc(`skew${zc[y]}`, f, m, this.animationValues);
            f.render();
            for (const y in m)
                f.setStaticValue(y, m[y]),
                this.animationValues && (this.animationValues[y] = m[y]);
            f.scheduleRender()
        }
        applyProjectionStyles(f, p) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                f.visibility = "hidden";
                return
            }
            const h = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                f.visibility = "",
                f.opacity = "",
                f.pointerEvents = Yo(p?.pointerEvents) || "",
                f.transform = h ? h(this.latestValues, "") : "none";
                return
            }
            const m = this.getLead();
            if (!this.projectionDelta || !this.layout || !m.target) {
                this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                f.pointerEvents = Yo(p?.pointerEvents) || ""),
                this.hasProjected && !ji(this.latestValues) && (f.transform = h ? h({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            f.visibility = "";
            const y = m.animationValues || m.latestValues;
            this.applyTransformsToTarget();
            let b = Ew(this.projectionDeltaWithTransform, this.treeScale, y);
            h && (b = h(y, b)),
            f.transform = b;
            const {x, y: M} = this.projectionDelta;
            f.transformOrigin = `${x.origin * 100}% ${M.origin * 100}% 0`,
            m.animationValues ? f.opacity = m === this ? y.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : y.opacityExit : f.opacity = m === this ? y.opacity !== void 0 ? y.opacity : "" : y.opacityExit !== void 0 ? y.opacityExit : 0;
            for (const E in cl) {
                if (y[E] === void 0)
                    continue;
                const {correct: D, applyTo: R, isCSSVariable: N} = cl[E]
                  , j = b === "none" ? y[E] : D(y[E], m);
                if (R) {
                    const _ = R.length;
                    for (let F = 0; F < _; F++)
                        f[R[F]] = j
                } else
                    N ? this.options.visualElement.renderState.vars[E] = j : f[E] = j
            }
            this.options.layoutId && (f.pointerEvents = m === this ? Yo(p?.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(f => f.currentAnimation?.stop()),
            this.root.nodes.forEach(c0),
            this.root.sharedNodes.clear()
        }
    }
}
function Dw(i) {
    i.updateLayout()
}
function Cw(i) {
    const a = i.resumeFrom?.snapshot || i.snapshot;
    if (i.isLead() && i.layout && a && i.hasListeners("didUpdate")) {
        const {layoutBox: l, measuredBox: o} = i.layout
          , {animationType: c} = i.options
          , d = a.source !== i.layout.source;
        c === "size" ? Pe(y => {
            const b = d ? a.measuredBox[y] : a.layoutBox[y]
              , x = Ae(b);
            b.min = l[y].min,
            b.max = b.min + x
        }
        ) : Av(c, a.layoutBox, l) && Pe(y => {
            const b = d ? a.measuredBox[y] : a.layoutBox[y]
              , x = Ae(l[y]);
            b.max = b.min + x,
            i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0,
            i.relativeTarget[y].max = i.relativeTarget[y].min + x)
        }
        );
        const f = za();
        el(f, l, a.layoutBox);
        const p = za();
        d ? el(p, i.applyTransform(o, !0), a.measuredBox) : el(p, l, a.layoutBox);
        const h = !bv(f);
        let m = !1;
        if (!i.resumeFrom) {
            const y = i.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {snapshot: b, layout: x} = y;
                if (b && x) {
                    const M = Wt();
                    nl(M, a.layoutBox, b.layoutBox);
                    const E = Wt();
                    nl(E, l, x.layoutBox),
                    xv(M, E) || (m = !0),
                    y.options.layoutRoot && (i.relativeTarget = E,
                    i.relativeTargetOrigin = M,
                    i.relativeParent = y)
                }
            }
        }
        i.notifyListeners("didUpdate", {
            layout: l,
            snapshot: a,
            delta: p,
            layoutDelta: f,
            hasLayoutChanged: h,
            hasRelativeLayoutChanged: m
        })
    } else if (i.isLead()) {
        const {onExitComplete: l} = i.options;
        l && l()
    }
    i.options.transition = void 0
}
function Nw(i) {
    i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty),
    i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)),
    i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty))
}
function Rw(i) {
    i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1
}
function Ow(i) {
    i.clearSnapshot()
}
function c0(i) {
    i.clearMeasurements()
}
function f0(i) {
    i.isLayoutDirty = !1
}
function jw(i) {
    const {visualElement: a} = i.options;
    a && a.getProps().onBeforeLayoutMeasure && a.notify("BeforeLayoutMeasure"),
    i.resetTransform()
}
function d0(i) {
    i.finishAnimation(),
    i.targetDelta = i.relativeTarget = i.target = void 0,
    i.isProjectionDirty = !0
}
function zw(i) {
    i.resolveTargetDelta()
}
function Vw(i) {
    i.calcProjection()
}
function _w(i) {
    i.resetSkewAndRotation()
}
function Uw(i) {
    i.removeLeadSnapshot()
}
function h0(i, a, l) {
    i.translate = Xt(a.translate, 0, l),
    i.scale = Xt(a.scale, 1, l),
    i.origin = a.origin,
    i.originPoint = a.originPoint
}
function m0(i, a, l, o) {
    i.min = Xt(a.min, l.min, o),
    i.max = Xt(a.max, l.max, o)
}
function Bw(i, a, l, o) {
    m0(i.x, a.x, l.x, o),
    m0(i.y, a.y, l.y, o)
}
function Lw(i) {
    return i.animationValues && i.animationValues.opacityExit !== void 0
}
const kw = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , p0 = i => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i)
  , g0 = p0("applewebkit/") && !p0("chrome/") ? Math.round : Je;
function y0(i) {
    i.min = g0(i.min),
    i.max = g0(i.max)
}
function Hw(i) {
    y0(i.x),
    y0(i.y)
}
function Av(i, a, l) {
    return i === "position" || i === "preserve-aspect" && !ZE(r0(a), r0(l), .2)
}
function qw(i) {
    return i !== i.root && i.scroll?.wasRoot
}
const Gw = Tv({
    attachResizeListener: (i, a) => fl(i, "resize", a),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , _c = {
    current: void 0
}
  , Ev = Tv({
    measureScroll: i => ({
        x: i.scrollLeft,
        y: i.scrollTop
    }),
    defaultParent: () => {
        if (!_c.current) {
            const i = new Gw({});
            i.mount(window),
            i.setOptions({
                layoutScroll: !0
            }),
            _c.current = i
        }
        return _c.current
    }
    ,
    resetTransform: (i, a) => {
        i.style.transform = a !== void 0 ? a : "none"
    }
    ,
    checkIsScrollRoot: i => window.getComputedStyle(i).position === "fixed"
})
  , Yw = {
    pan: {
        Feature: ow
    },
    drag: {
        Feature: lw,
        ProjectionNode: Ev,
        MeasureLayout: gv
    }
};
function v0(i, a, l) {
    const {props: o} = i;
    i.animationState && o.whileHover && i.animationState.setActive("whileHover", l === "Start");
    const c = "onHover" + l
      , d = o[c];
    d && Ht.postRender( () => d(a, gl(a)))
}
class Xw extends ci {
    mount() {
        const {current: a} = this.node;
        a && (this.unmount = fA(a, (l, o) => (v0(this.node, o, "Start"),
        c => v0(this.node, c, "End"))))
    }
    unmount() {}
}
class Qw extends ci {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let a = !1;
        try {
            a = this.node.current.matches(":focus-visible")
        } catch {
            a = !0
        }
        !a || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = hl(fl(this.node.current, "focus", () => this.onFocus()), fl(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function b0(i, a, l) {
    const {props: o} = i;
    if (i.current instanceof HTMLButtonElement && i.current.disabled)
        return;
    i.animationState && o.whileTap && i.animationState.setActive("whileTap", l === "Start");
    const c = "onTap" + (l === "End" ? "" : l)
      , d = o[c];
    d && Ht.postRender( () => d(a, gl(a)))
}
class Zw extends ci {
    mount() {
        const {current: a} = this.node;
        a && (this.unmount = pA(a, (l, o) => (b0(this.node, o, "Start"),
        (c, {success: d}) => b0(this.node, c, d ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const ff = new WeakMap
  , Uc = new WeakMap
  , Kw = i => {
    const a = ff.get(i.target);
    a && a(i)
}
  , Pw = i => {
    i.forEach(Kw)
}
;
function Fw({root: i, ...a}) {
    const l = i || document;
    Uc.has(l) || Uc.set(l, {});
    const o = Uc.get(l)
      , c = JSON.stringify(a);
    return o[c] || (o[c] = new IntersectionObserver(Pw,{
        root: i,
        ...a
    })),
    o[c]
}
function Jw(i, a, l) {
    const o = Fw(a);
    return ff.set(i, l),
    o.observe(i),
    () => {
        ff.delete(i),
        o.unobserve(i)
    }
}
const Ww = {
    some: 0,
    all: 1
};
class $w extends ci {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: a={}} = this.node.getProps()
          , {root: l, margin: o, amount: c="some", once: d} = a
          , f = {
            root: l ? l.current : void 0,
            rootMargin: o,
            threshold: typeof c == "number" ? c : Ww[c]
        }
          , p = h => {
            const {isIntersecting: m} = h;
            if (this.isInView === m || (this.isInView = m,
            d && !m && this.hasEnteredView))
                return;
            m && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", m);
            const {onViewportEnter: y, onViewportLeave: b} = this.node.getProps()
              , x = m ? y : b;
            x && x(h)
        }
        ;
        return Jw(this.node.current, f, p)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: a, prevProps: l} = this.node;
        ["amount", "margin", "root"].some(Iw(a, l)) && this.startObserver()
    }
    unmount() {}
}
function Iw({viewport: i={}}, {viewport: a={}}={}) {
    return l => i[l] !== a[l]
}
const tM = {
    inView: {
        Feature: $w
    },
    tap: {
        Feature: Zw
    },
    focus: {
        Feature: Qw
    },
    hover: {
        Feature: Xw
    }
}
  , eM = {
    layout: {
        ProjectionNode: Ev,
        MeasureLayout: gv
    }
}
  , nM = {
    ...HE,
    ...tM,
    ...Yw,
    ...eM
}
  , ne = nE(nM, pE)
  , iM = [{
    id: "biotech",
    name: "Biotechnology",
    image: "/TIF WEBSITE Categories/biotech.png",
    description: "Innovative solutions in healthcare and life sciences",
    color: "from-blue-400 to-indigo-600"
}, {
    id: "edutech",
    name: "EdTech",
    image: "/TIF WEBSITE Categories/EDUTECH.png",
    description: "Revolutionizing education through technology",
    color: "from-blue-400 to-indigo-600"
}, {
    id: "green-tech",
    name: "Green Technology",
    image: "/TIF WEBSITE Categories/green-technology.png",
    description: "Sustainable solutions for a better tomorrow",
    color: "from-blue-400 to-indigo-600"
}, {
    id: "health",
    name: "Healthcare",
    image: "/TIF WEBSITE Categories/Health.png",
    description: "Advanced healthcare and medical innovations",
    color: "from-blue-400 to-indigo-600"
}, {
    id: "smart-agriculture",
    name: "Smart Agriculture",
    image: "/TIF WEBSITE Categories/smart-agriculture.png",
    description: "Technology-driven farming solutions",
    color: "from-blue-400 to-indigo-600"
}, {
    id: "disaster-rescue",
    name: "Disaster Rescue",
    image: "/TIF WEBSITE Categories/Disaster rescue.png",
    description: "Emergency response and disaster management",
    color: "from-blue-400 to-indigo-600"
}, {
    id: "smart-wearables",
    name: "Smart Wearables",
    image: "/TIF WEBSITE Categories/smart watch.png",
    description: "Next-gen wearable technology",
    color: "from-blue-400 to-indigo-600"
}, {
    id: "vr-ar",
    name: "VR & AR",
    image: "/TIF WEBSITE Categories/vr-glasses.png",
    description: "Immersive virtual and augmented reality",
    color: "from-blue-400 to-indigo-600"
}, {
    id: "assistive-tech",
    name: "Assistive Technology",
    image: "/TIF WEBSITE Categories/Disabled.png",
    description: "Technology for accessibility and inclusion",
    color: "from-blue-400 to-indigo-600"
}]
  , aM = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: .1,
            delayChildren: .3
        }
    }
}
  , sM = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: .9
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: .5,
            ease: [.6, -.05, .01, .99]
        }
    }
}
  , lM = () => {
    const [i,a] = k.useState(null);
    return S.jsx("div", {
        className: "min-h-screen relative overflow-hidden ",
        children: S.jsxs("div", {
            className: "relative z-10 container mx-auto px-4 py-20",
            children: [S.jsx(ne.div, {
                className: "text-center mb-16",
                initial: {
                    opacity: 0,
                    y: -50
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8
                },
                children: S.jsxs("div", {
                    className: "text-center mb-16",
                    children: [S.jsx("h1", {
                        className: "text-6xl md:text-7xl font-bold mb-6 text-cyan-400 bg-clip-text ",
                        children: "Categories"
                    }), S.jsx("div", {
                        className: "w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
                    })]
                })
            }), S.jsx(ne.div, {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto",
                variants: aM,
                initial: "hidden",
                animate: "visible",
                children: iM.map(l => S.jsx(ne.div, {
                    className: "group relative",
                    variants: sM,
                    onHoverStart: () => a(l.id),
                    onHoverEnd: () => a(null),
                    children: S.jsxs("div", {
                        className: "relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:bg-white/15 hover:border-white/30 hover:scale-105 shadow-lg",
                        children: [S.jsx("div", {
                            className: `absolute inset-0 bg-gradient-to-br ${l.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`
                        }), S.jsxs("div", {
                            className: "relative h-48 flex items-center justify-center text-amber-500  p-6",
                            children: [S.jsx(ne.img, {
                                src: l.image,
                                alt: l.name,
                                className: "max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-500",
                                animate: {
                                    scale: i === l.id ? 1.1 : 1,
                                    rotate: i === l.id ? 5 : 0
                                },
                                transition: {
                                    duration: .3
                                }
                            }), i === l.id && S.jsx(ne.div, {
                                className: "absolute inset-0 pointer-events-none",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                children: [...Array(6)].map( (o, c) => S.jsx(ne.div, {
                                    className: "absolute w-2 h-2 bg-blue-400 rounded-full",
                                    style: {
                                        left: `${20 + c * 12}%`,
                                        top: `${30 + c % 2 * 20}%`
                                    },
                                    animate: {
                                        y: [-10, -30, -10],
                                        opacity: [0, 1, 0],
                                        scale: [0, 1, 0]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: 1 / 0,
                                        delay: c * .2
                                    }
                                }, c))
                            })]
                        }), S.jsxs("div", {
                            className: "p-6 pt-0",
                            children: [S.jsx("h3", {
                                className: "text-2xl font-bold font-mono text-white mb-2 group-hover:text-[#01040d] transition-colors duration-300",
                                children: l.name
                            }), S.jsx("p", {
                                className: "text-[#a8abb3] text-sm mb-4 line-clamp-2 group-hover:text-[#d4d0d0] transition-colors duration-300 font-mono",
                                children: l.description
                            })]
                        }), S.jsx("div", {
                            className: `absolute -inset-0.5 bg-gradient-to-r ${l.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`
                        })]
                    })
                }, l.id))
            })]
        })
    })
}
  , oM = [{
    question: "What is TIF?",
    answer: "TIF is Shaastra's flagship tech expo where teams showcase working prototypes and compete for prizes and visibility."
}, {
    question: "Who can participate?",
    answer: "Open to college students, researchers, and startups with innovative tech-based projects."
}, {
    question: "What is the structure of the event?",
    answer: "It has two online screening rounds followed by an on-ground prototype display at Shaastra 2025."
}, {
    question: "What are the key benefits for participants?",
    answer: "Gain exposure, receive expert feedback, and connect with industry mentors and investors."
}, {
    question: "Are there prizes?",
    answer: "Yes, including cash prizes, mentorship, and possible incubation or funding opportunities."
}, {
    question: "When and where does it take place?",
    answer: "The final showcase is held at IIT Madras during Shaastra, from 3–7 January 2026."
}, {
    question: "How can I apply?",
    answer: "Register online via Unstop, submit project details, and clear the screening rounds."
}, {
    question: "What should I prepare for the finals?",
    answer: "A working prototype, presentation materials, and any necessary support equipment."
}, {
    question: "Is there a theme or domain focus?",
    answer: "Projects from all tech domains are welcome, with emphasis on innovation and societal impact."
}]
  , rM = ({question: i, answer: a, isActive: l, setActiveIndex: o, index: c}) => S.jsxs(ne.div, {
    className: `relative bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden transition-all duration-500 hover:bg-white/15 hover:border-white/30 cursor-pointer p-6 mb-4 shadow-lg ${l ? "border-blue-400/50 bg-white/15" : ""}`,
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0
    },
    transition: {
        duration: .5,
        delay: c * .1
    },
    onClick: () => o(l ? null : c),
    children: [S.jsxs("div", {
        className: "flex items-center justify-between",
        children: [S.jsx("h3", {
            className: `text-lg font-bold font-mono transition-colors duration-300 ${l ? "text-blue-200" : "text-white"}`,
            children: i
        }), S.jsx(ne.div, {
            animate: {
                rotate: l ? 180 : 0
            },
            transition: {
                duration: .3
            },
            className: "flex-shrink-0 ml-4",
            children: S.jsx("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                className: `transition-colors duration-300 ${l ? "text-blue-400" : "text-[#646669]"}`,
                children: S.jsx("path", {
                    d: "M5 7.5L10 12.5L15 7.5",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            })
        })]
    }), S.jsx(Ly, {
        children: l && S.jsxs(ne.div, {
            initial: {
                opacity: 0,
                height: 0,
                marginTop: 0
            },
            animate: {
                opacity: 1,
                height: "auto",
                marginTop: 16
            },
            exit: {
                opacity: 0,
                height: 0,
                marginTop: 0
            },
            transition: {
                duration: .3
            },
            className: "overflow-hidden",
            children: [S.jsx("div", {
                className: "w-full h-px bg-white/20 mb-4"
            }), S.jsx("p", {
                className: "text-gray-300 font-mono leading-relaxed",
                children: a
            })]
        })
    }), S.jsx("div", {
        className: `absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur opacity-0 hover:opacity-20 transition-opacity duration-500 -z-10 ${l ? "opacity-10" : ""}`
    })]
})
  , uM = () => {
    const [i,a] = k.useState(null);
    return S.jsx("div", {
        className: "min-h-screen relative overflow-hidden",
        children: S.jsxs("div", {
            className: "relative z-10 container mx-auto px-4 py-20",
            children: [S.jsx(ne.div, {
                className: "text-center mb-16",
                initial: {
                    opacity: 0,
                    y: -50
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8
                },
                children: S.jsxs("div", {
                    className: "text-center mb-16",
                    children: [S.jsx("h1", {
                        className: "text-6xl md:text-7xl font-bold mb-6 text-cyan-400 bg-clip-text ",
                        children: "Frequently Asked Questions"
                    }), S.jsx("div", {
                        className: "w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
                    })]
                })
            }), S.jsx(ne.div, {
                className: "max-w-4xl mx-auto",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: .5,
                    delay: .2
                },
                children: oM.map( (l, o) => S.jsx(rM, {
                    question: l.question,
                    answer: l.answer,
                    isActive: i === o,
                    setActiveIndex: a,
                    index: o
                }, o))
            })]
        })
    })
}
  , cM = () => {
    const i = [{
        icon: n1,
        text: "Certificate of Participation for all teams."
    }, {
        icon: r1,
        text: "Exciting prize money for the top three teams."
    }, {
        icon: D1,
        text: "Expo showcase opportunity with a chance to win the People's Choice Award and earn a certificate."
    }, {
        icon: N1,
        text: "Networking opportunities with leading venture capitalists, with the potential to secure funding or advance your prototype to the next stage."
    }, {
        icon: a1,
        text: "Opportunity to work on real-time research projects under IIT Madras professors, gaining hands-on experience and mentorship."
    }, {
        icon: y1,
        text: "Exclusive visit to the IIT Madras Research Park."
    }]
      , a = "https://chat.whatsapp.com/CplgQaeVYOQGPIje2V16e3?mode=wwt"
      , l = () => {
        window.open(a, "_blank")
    }
    ;
    return S.jsx("div", {
        className: "min-h-screen py-16 px-4",
        children: S.jsxs("div", {
            className: "max-w-6xl mx-auto",
            children: [S.jsxs("div", {
                className: "text-center mb-16",
                children: [S.jsx("h2", {
                    className: "text-5xl font-bold text-cyan-400 mb-4",
                    children: "What You'll Gain"
                }), S.jsx("div", {
                    className: "w-24 h-1 bg-cyan-400 mx-auto"
                })]
            }), S.jsxs("div", {
                className: "bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl",
                children: [S.jsx("h3", {
                    className: "text-2xl font-semibold text-white mb-8",
                    children: "Perks include:"
                }), S.jsx("div", {
                    className: "space-y-6",
                    children: i.map( (o, c) => S.jsxs("div", {
                        className: "flex gap-4 items-start group hover:bg-slate-700/30 p-4 rounded-xl transition-all duration-300",
                        children: [S.jsx("div", {
                            className: "flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                            children: S.jsx(o.icon, {
                                className: "w-6 h-6 text-white"
                            })
                        }), S.jsx("div", {
                            className: "flex-1",
                            children: S.jsxs("div", {
                                className: "flex items-start gap-3",
                                children: [S.jsxs("span", {
                                    className: "text-cyan-400 font-bold text-lg flex-shrink-0",
                                    children: [c + 1, "."]
                                }), S.jsx("p", {
                                    className: "text-gray-200 text-lg leading-relaxed",
                                    children: o.text
                                })]
                            })
                        })]
                    }, c))
                })]
            }), S.jsxs("div", {
                className: "max-w-6xl mx-auto text-center py-12 px-4 mt-12",
                children: [S.jsxs("div", {
                    className: "text-center mb-6",
                    children: [S.jsx("h2", {
                        className: "text-5xl font-bold text-cyan-400 mb-4",
                        children: "Join TIF"
                    }), S.jsx("div", {
                        className: "w-24 h-1 bg-cyan-400 mx-auto"
                    })]
                }), S.jsx("p", {
                    className: "text-gray-300 text-lg mb-8 max-w-2xl mx-auto",
                    children: "Register now and join our WhatsApp community to stay updated with all the latest information about Shaastra TIF!"
                }), S.jsxs("div", {
                    className: "flex flex-col w-full gap-5 justify-center items-center",
                    children: [S.jsxs("button", {
                        onClick: () => window.open("https://docs.google.com/forms/d/e/1FAIpQLSe15BT4mHCZB21gohS03JUeRkYWLp6rwnpkZa4JaNR43iVoSg/viewform?usp=header", "_blank"),
                        className: "hover:cursor-pointer flex gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105",
                        children: ["Register Now ", S.jsx(Fp, {})]
                    }), S.jsxs("button", {
                        onClick: l,
                        className: "hover:cursor-pointer group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105",
                        children: [S.jsx(S1, {
                            className: "w-6 h-6 group-hover:rotate-12 transition-transform duration-300"
                        }), S.jsxs("span", {
                            className: "flex gap-3",
                            children: ["Join WhatsApp Group ", S.jsx(Fp, {})]
                        })]
                    })]
                }), S.jsx("p", {
                    className: "text-gray-400 text-sm mt-4",
                    children: "Questions? Contact us through the WhatsApp group!"
                })]
            })]
        })
    })
}
  , fM = ({data: i}) => {
    const {"start-date": a, "end-date": l, text: o, category: c} = i;
    return S.jsx("div", {
        className: "group relative my-6 flex w-1/2 justify-end pr-6 odd:justify-start odd:self-end odd:pr-0 odd:pl-6 sm:pr-8 sm:odd:pl-8 md:my-8",
        children: S.jsxs("div", {
            className: "relative flex w-full max-w-[400px] flex-col sm:max-w-[450px] md:max-w-[500px]",
            children: [S.jsx("h3", {
                className: "mb-3 text-lg font-bold text-blue-600 md:text-xl lg:text-2xl group-odd:text-left text-right",
                children: a
            }), S.jsxs("div", {
                className: "relative flex flex-col rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 p-5 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] sm:p-6 md:p-7 after:absolute after:top-[30px] after:right-[-12px] after:h-6 after:w-6 after:rotate-45 after:bg-blue-600 group-odd:after:right-auto group-odd:after:left-[-12px] m-5",
                children: [S.jsx("div", {
                    className: "mb-4 inline-flex w-fit items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white sm:text-sm",
                    children: c
                }), S.jsx("p", {
                    className: "mb-4 text-sm leading-relaxed text-white sm:text-base md:text-lg",
                    children: o
                }), S.jsxs("div", {
                    className: "mt-auto flex flex-col md:flex-row items-center gap-2 border-t border-white/30 pt-4 text-xs text-white/90 sm:text-sm",
                    children: [S.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [S.jsx("svg", {
                            className: "h-4 w-4",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: S.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            })
                        }), S.jsx("span", {
                            className: "font-medium",
                            children: a
                        })]
                    }), S.jsx("span", {
                        className: "text-white/70 text-xl",
                        children: "→"
                    }), S.jsx("span", {
                        className: "font-medium ",
                        children: l
                    })]
                })]
            }), S.jsx("span", {
                className: "absolute top-[60px] -right-[42px] z-50 h-6 w-6 rounded-full border-4 border-blue-600 bg-white shadow-lg group-odd:right-auto group-odd:-left-[42px] sm:-right-[50px] sm:group-odd:-left-[50px] md:h-7 md:w-7"
            })]
        })
    })
}
  , x0 = [{
    text: "Submit your project details in the registration form and we'll get back to you with results!",
    "start-date": "October 25, 2025",
    "end-date": "November 21, 2025",
    category: "Submission Round-Online"
}, {
    text: "This will be an offline round! Come experience the magnificence of IIT Madras and Shaastra2025 from January 3rd to 7th",
    "start-date": "January 04, 2026",
    "end-date": "January 06, 2026",
    category: "Finale"
}]
  , dM = () => x0.length > 0 && S.jsxs(S.Fragment, {
    children: [S.jsxs("div", {
        className: "text-center mb-16",
        children: [S.jsx("h1", {
            className: "text-6xl md:text-7xl font-bold mb-6 text-cyan-400 bg-clip-text ",
            children: "Timeline"
        }), S.jsx("div", {
            className: "w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
        })]
    }), S.jsx("div", {
        className: "relative my-10 flex flex-col after:absolute after:left-1/2 after:-translate-x-[2px] after:h-full after:w-1 after:content-normal after:bg-slate-400",
        children: x0.map( (i, a) => S.jsx(fM, {
            data: i
        }, a))
    })]
})
  , S0 = [{
    name: "Home",
    href: "#home"
}, {
    name: "AboutUs",
    href: "#about"
}, {
    name: "Categories",
    href: "#categories"
}, {
    name: "Timeline",
    href: "#timeline"
}, {
    name: "Pictures",
    href: "#photos"
}, {
    name: "FAQs",
    href: "#faqs"
}, {
    name: "ContactUs",
    href: "#contactus"
}];
function hM() {
    const [i,a] = k.useState(!1)
      , l = d => {
        try {
            const f = document.querySelector(d);
            if (f) {
                const h = f.getBoundingClientRect().top + window.scrollY + -100;
                window.scrollTo({
                    top: h,
                    behavior: "smooth"
                })
            }
        } catch (f) {
            console.error("Scroll error:", f)
        }
    }
      , o = (d, f) => {
        d.preventDefault(),
        d.stopPropagation(),
        a(!1),
        setTimeout( () => {
            f.startsWith("#") ? l(f) : window.location.href = f
        }
        , 100)
    }
      , c = {
        closed: {
            opacity: 0,
            height: 0
        },
        open: {
            opacity: 1,
            height: "auto"
        }
    };
    return S.jsx(ne.header, {
        className: "fixed top-0 right-0 left-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10",
        initial: {
            y: -100
        },
        animate: {
            y: 0
        },
        transition: {
            duration: .6,
            ease: "easeOut"
        },
        children: S.jsxs("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: [S.jsxs("div", {
                className: "flex h-20 items-center justify-between",
                children: [S.jsx(ne.div, {
                    className: "flex items-center space-x-3",
                    whileHover: {
                        scale: 1.02
                    },
                    transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                    },
                    children: S.jsxs("button", {
                        onClick: d => o(d, "#home"),
                        className: "flex items-center space-x-3 cursor-pointer group",
                        children: [S.jsx("div", {
                            className: "flex items-center justify-center",
                            children: S.jsx("img", {
                                src: "/Shaastra logo Black.png",
                                alt: "Shaastra Logo",
                                className: "h-20 w-20 object-contain filter brightness-0 invert"
                            })
                        }), S.jsxs("div", {
                            className: "flex flex-col",
                            children: [S.jsx("span", {
                                className: "text-2xl font-bold text-white font-sans tracking-tight",
                                children: "TIF 2025"
                            }), S.jsx("span", {
                                className: "text-xs text-gray-300 font-medium",
                                children: "Tech & Innovation Fair"
                            })]
                        })]
                    })
                }), S.jsxs("nav", {
                    className: "hidden items-center space-x-2 lg:flex",
                    children: [S0.map(d => S.jsx(ne.div, {
                        className: "relative",
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: .98
                        },
                        children: S.jsxs("button", {
                            onClick: f => o(f, d.href),
                            className: "px-4 py-2 text-white flex items-center space-x-1 font-medium transition-all duration-300 hover:text-blue-400 hover:bg-white/10 rounded-xl cursor-pointer font-sans text-sm backdrop-blur-sm border border-transparent hover:border-white/20",
                            children: [S.jsx("span", {
                                children: d.name
                            }), d.hasDropdown && S.jsx(l1, {
                                className: "h-4 w-4 transition-transform duration-200"
                            })]
                        })
                    }, d.name)), S.jsx(ne.div, {
                        className: "relative",
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: .95
                        },
                        children: S.jsx("button", {
                            onClick: d => o(d, "https://docs.google.com/forms/d/e/1FAIpQLSe15BT4mHCZB21gohS03JUeRkYWLp6rwnpkZa4JaNR43iVoSg/viewform?usp=header"),
                            className: "px-6 py-2 text-white font-semibold transition-all duration-300 rounded-xl cursor-pointer font-sans text-sm bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-blue-500/50 border border-blue-400/30",
                            children: S.jsx("span", {
                                children: "Register"
                            })
                        })
                    })]
                }), S.jsx(ne.button, {
                    className: "rounded-xl p-2 text-white transition-all duration-300 hover:bg-white/10 hover:text-blue-400 lg:hidden border border-white/20 backdrop-blur-sm bg-white/5",
                    onClick: () => a(!i),
                    whileTap: {
                        scale: .95
                    },
                    whileHover: {
                        scale: 1.05
                    },
                    children: S.jsx(ne.div, {
                        animate: {
                            rotate: i ? 90 : 0
                        },
                        transition: {
                            duration: .2
                        },
                        children: i ? S.jsx(O1, {
                            className: "h-6 w-6"
                        }) : S.jsx(b1, {
                            className: "h-6 w-6"
                        })
                    })
                })]
            }), S.jsx(Ly, {
                children: i && S.jsx(ne.div, {
                    className: "overflow-hidden lg:hidden",
                    variants: c,
                    initial: "closed",
                    animate: "open",
                    exit: "closed",
                    transition: {
                        duration: .3,
                        ease: "easeInOut"
                    },
                    children: S.jsxs("div", {
                        className: "mt-4 space-y-2 rounded-xl border border-white/20 bg-black/40 backdrop-blur-lg py-4 shadow-2xl",
                        children: [S0.map( (d, f) => S.jsx(ne.button, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: .2,
                                delay: f * .05
                            },
                            onClick: p => o(p, d.href),
                            className: "block w-full text-left px-4 py-3 font-medium text-white transition-all duration-300 hover:bg-white/10 hover:text-blue-400 rounded-lg mx-2 font-sans",
                            children: d.name
                        }, d.name)), S.jsx(ne.button, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: .2,
                                delay: 6 * .05
                            },
                            onClick: d => {
                                o(d, "https://docs.google.com/forms/d/e/1FAIpQLSe15BT4mHCZB21gohS03JUeRkYWLp6rwnpkZa4JaNR43iVoSg/viewform?usp=header"),
                                a(!1)
                            }
                            ,
                            className: "block w-[95%] text-left mx-auto px-4 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 hover:bg-white/10 hover:text-blue-400 font-sans",
                            children: "Register"
                        })]
                    })
                })
            })]
        })
    })
}
function mM() {
    return S.jsxs(S.Fragment, {
        children: [S.jsx(hM, {}), S.jsxs("div", {
            className: "relative z-10",
            children: [S.jsx("section", {
                id: "home",
                children: S.jsx(TT, {})
            }), S.jsx("section", {
                id: "about",
                children: S.jsx(j1, {})
            }), S.jsx("section", {
                id: "whatyoullgain",
                children: S.jsx(cM, {})
            }), S.jsx("section", {
                id: "timeline",
                children: S.jsx(dM, {})
            }), S.jsx("section", {
                id: "categories",
                children: S.jsx(lM, {})
            }), S.jsx("section", {
                id: "photos",
                children: S.jsx(hT, {})
            }), S.jsx("section", {
                id: "faqs",
                children: S.jsx(uM, {})
            }), S.jsx("section", {
                id: "contactus",
                children: S.jsx(z1, {})
            })]
        })]
    })
}
Qx.createRoot(document.getElementById("root")).render(S.jsx(k.StrictMode, {
    children: S.jsx(mM, {})
}));
