(function() {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) d(u);
  new MutationObserver((u) => {
    for (const p of u) if (p.type === "childList") for (const h of p.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && d(h);
  }).observe(document, { childList: true, subtree: true });
  function c(u) {
    const p = {};
    return u.integrity && (p.integrity = u.integrity), u.referrerPolicy && (p.referrerPolicy = u.referrerPolicy), u.crossOrigin === "use-credentials" ? p.credentials = "include" : u.crossOrigin === "anonymous" ? p.credentials = "omit" : p.credentials = "same-origin", p;
  }
  function d(u) {
    if (u.ep) return;
    u.ep = true;
    const p = c(u);
    fetch(u.href, p);
  }
})();
function Mp(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var yp = { exports: {} }, Ma = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var vp;
function Ig() {
  if (vp) return Ma;
  vp = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(u, p, h) {
    var m = null;
    if (h !== void 0 && (m = "" + h), p.key !== void 0 && (m = "" + p.key), "key" in p) {
      h = {};
      for (var k in p) k !== "key" && (h[k] = p[k]);
    } else h = p;
    return p = h.ref, { $$typeof: i, type: u, key: m, ref: p !== void 0 ? p : null, props: h };
  }
  return Ma.Fragment = c, Ma.jsx = d, Ma.jsxs = d, Ma;
}
var bp;
function $g() {
  return bp || (bp = 1, yp.exports = Ig()), yp.exports;
}
var o = $g(), xp = { exports: {} }, K = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var kp;
function Bg() {
  if (kp) return K;
  kp = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), p = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), m = /* @__PURE__ */ Symbol.for("react.context"), k = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), L = /* @__PURE__ */ Symbol.for("react.activity"), E = Symbol.iterator;
  function I(x) {
    return x === null || typeof x != "object" ? null : (x = E && x[E] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var $ = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, O = Object.assign, D = {};
  function M(x, _, q) {
    this.props = x, this.context = _, this.refs = D, this.updater = q || $;
  }
  M.prototype.isReactComponent = {}, M.prototype.setState = function(x, _) {
    if (typeof x != "object" && typeof x != "function" && x != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, x, _, "setState");
  }, M.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function V() {
  }
  V.prototype = M.prototype;
  function G(x, _, q) {
    this.props = x, this.context = _, this.refs = D, this.updater = q || $;
  }
  var oe = G.prototype = new V();
  oe.constructor = G, O(oe, M.prototype), oe.isPureReactComponent = true;
  var te = Array.isArray;
  function Se() {
  }
  var ee = { H: null, A: null, T: null, S: null }, Le = Object.prototype.hasOwnProperty;
  function nn(x, _, q) {
    var W = q.ref;
    return { $$typeof: i, type: x, key: _, ref: W !== void 0 ? W : null, props: q };
  }
  function ft(x, _) {
    return nn(x.type, _, x.props);
  }
  function kn(x) {
    return typeof x == "object" && x !== null && x.$$typeof === i;
  }
  function Ue(x) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(q) {
      return _[q];
    });
  }
  var Bn = /\/+/g;
  function Be(x, _) {
    return typeof x == "object" && x !== null && x.key != null ? Ue("" + x.key) : _.toString(36);
  }
  function Fn(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (typeof x.status == "string" ? x.then(Se, Se) : (x.status = "pending", x.then(function(_) {
          x.status === "pending" && (x.status = "fulfilled", x.value = _);
        }, function(_) {
          x.status === "pending" && (x.status = "rejected", x.reason = _);
        })), x.status) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function T(x, _, q, W, X) {
    var re = typeof x;
    (re === "undefined" || re === "boolean") && (x = null);
    var he = false;
    if (x === null) he = true;
    else switch (re) {
      case "bigint":
      case "string":
      case "number":
        he = true;
        break;
      case "object":
        switch (x.$$typeof) {
          case i:
          case c:
            he = true;
            break;
          case S:
            return he = x._init, T(he(x._payload), _, q, W, X);
        }
    }
    if (he) return X = X(x), he = W === "" ? "." + Be(x, 0) : W, te(X) ? (q = "", he != null && (q = he.replace(Bn, "$&/") + "/"), T(X, _, q, "", function(Ur) {
      return Ur;
    })) : X != null && (kn(X) && (X = ft(X, q + (X.key == null || x && x.key === X.key ? "" : ("" + X.key).replace(Bn, "$&/") + "/") + he)), _.push(X)), 1;
    he = 0;
    var Xe = W === "" ? "." : W + ":";
    if (te(x)) for (var ze = 0; ze < x.length; ze++) W = x[ze], re = Xe + Be(W, ze), he += T(W, _, q, re, X);
    else if (ze = I(x), typeof ze == "function") for (x = ze.call(x), ze = 0; !(W = x.next()).done; ) W = W.value, re = Xe + Be(W, ze++), he += T(W, _, q, re, X);
    else if (re === "object") {
      if (typeof x.then == "function") return T(Fn(x), _, q, W, X);
      throw _ = String(x), Error("Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead.");
    }
    return he;
  }
  function B(x, _, q) {
    if (x == null) return x;
    var W = [], X = 0;
    return T(x, W, "", "", function(re) {
      return _.call(q, re, X++);
    }), W;
  }
  function J(x) {
    if (x._status === -1) {
      var _ = x._result;
      _ = _(), _.then(function(q) {
        (x._status === 0 || x._status === -1) && (x._status = 1, x._result = q);
      }, function(q) {
        (x._status === 0 || x._status === -1) && (x._status = 2, x._result = q);
      }), x._status === -1 && (x._status = 0, x._result = _);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var ye = typeof reportError == "function" ? reportError : function(x) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var _ = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x), error: x });
      if (!window.dispatchEvent(_)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", x);
      return;
    }
    console.error(x);
  }, ke = { map: B, forEach: function(x, _, q) {
    B(x, function() {
      _.apply(this, arguments);
    }, q);
  }, count: function(x) {
    var _ = 0;
    return B(x, function() {
      _++;
    }), _;
  }, toArray: function(x) {
    return B(x, function(_) {
      return _;
    }) || [];
  }, only: function(x) {
    if (!kn(x)) throw Error("React.Children.only expected to receive a single React element child.");
    return x;
  } };
  return K.Activity = L, K.Children = ke, K.Component = M, K.Fragment = d, K.Profiler = p, K.PureComponent = G, K.StrictMode = u, K.Suspense = v, K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ee, K.__COMPILER_RUNTIME = { __proto__: null, c: function(x) {
    return ee.H.useMemoCache(x);
  } }, K.cache = function(x) {
    return function() {
      return x.apply(null, arguments);
    };
  }, K.cacheSignal = function() {
    return null;
  }, K.cloneElement = function(x, _, q) {
    if (x == null) throw Error("The argument must be a React element, but you passed " + x + ".");
    var W = O({}, x.props), X = x.key;
    if (_ != null) for (re in _.key !== void 0 && (X = "" + _.key), _) !Le.call(_, re) || re === "key" || re === "__self" || re === "__source" || re === "ref" && _.ref === void 0 || (W[re] = _[re]);
    var re = arguments.length - 2;
    if (re === 1) W.children = q;
    else if (1 < re) {
      for (var he = Array(re), Xe = 0; Xe < re; Xe++) he[Xe] = arguments[Xe + 2];
      W.children = he;
    }
    return nn(x.type, X, W);
  }, K.createContext = function(x) {
    return x = { $$typeof: m, _currentValue: x, _currentValue2: x, _threadCount: 0, Provider: null, Consumer: null }, x.Provider = x, x.Consumer = { $$typeof: h, _context: x }, x;
  }, K.createElement = function(x, _, q) {
    var W, X = {}, re = null;
    if (_ != null) for (W in _.key !== void 0 && (re = "" + _.key), _) Le.call(_, W) && W !== "key" && W !== "__self" && W !== "__source" && (X[W] = _[W]);
    var he = arguments.length - 2;
    if (he === 1) X.children = q;
    else if (1 < he) {
      for (var Xe = Array(he), ze = 0; ze < he; ze++) Xe[ze] = arguments[ze + 2];
      X.children = Xe;
    }
    if (x && x.defaultProps) for (W in he = x.defaultProps, he) X[W] === void 0 && (X[W] = he[W]);
    return nn(x, re, X);
  }, K.createRef = function() {
    return { current: null };
  }, K.forwardRef = function(x) {
    return { $$typeof: k, render: x };
  }, K.isValidElement = kn, K.lazy = function(x) {
    return { $$typeof: S, _payload: { _status: -1, _result: x }, _init: J };
  }, K.memo = function(x, _) {
    return { $$typeof: g, type: x, compare: _ === void 0 ? null : _ };
  }, K.startTransition = function(x) {
    var _ = ee.T, q = {};
    ee.T = q;
    try {
      var W = x(), X = ee.S;
      X !== null && X(q, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(Se, ye);
    } catch (re) {
      ye(re);
    } finally {
      _ !== null && q.types !== null && (_.types = q.types), ee.T = _;
    }
  }, K.unstable_useCacheRefresh = function() {
    return ee.H.useCacheRefresh();
  }, K.use = function(x) {
    return ee.H.use(x);
  }, K.useActionState = function(x, _, q) {
    return ee.H.useActionState(x, _, q);
  }, K.useCallback = function(x, _) {
    return ee.H.useCallback(x, _);
  }, K.useContext = function(x) {
    return ee.H.useContext(x);
  }, K.useDebugValue = function() {
  }, K.useDeferredValue = function(x, _) {
    return ee.H.useDeferredValue(x, _);
  }, K.useEffect = function(x, _) {
    return ee.H.useEffect(x, _);
  }, K.useEffectEvent = function(x) {
    return ee.H.useEffectEvent(x);
  }, K.useId = function() {
    return ee.H.useId();
  }, K.useImperativeHandle = function(x, _, q) {
    return ee.H.useImperativeHandle(x, _, q);
  }, K.useInsertionEffect = function(x, _) {
    return ee.H.useInsertionEffect(x, _);
  }, K.useLayoutEffect = function(x, _) {
    return ee.H.useLayoutEffect(x, _);
  }, K.useMemo = function(x, _) {
    return ee.H.useMemo(x, _);
  }, K.useOptimistic = function(x, _) {
    return ee.H.useOptimistic(x, _);
  }, K.useReducer = function(x, _, q) {
    return ee.H.useReducer(x, _, q);
  }, K.useRef = function(x) {
    return ee.H.useRef(x);
  }, K.useState = function(x) {
    return ee.H.useState(x);
  }, K.useSyncExternalStore = function(x, _, q) {
    return ee.H.useSyncExternalStore(x, _, q);
  }, K.useTransition = function() {
    return ee.H.useTransition();
  }, K.version = "19.2.8", K;
}
var wp;
function tu() {
  return wp || (wp = 1, xp.exports = Bg()), xp.exports;
}
var w = tu();
const qg = Mp(w);
var Hs = { exports: {} }, Ia = {}, jp = { exports: {} }, Sp = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Np;
function Hg() {
  return Np || (Np = 1, (function(i) {
    function c(T, B) {
      var J = T.length;
      T.push(B);
      e: for (; 0 < J; ) {
        var ye = J - 1 >>> 1, ke = T[ye];
        if (0 < p(ke, B)) T[ye] = B, T[J] = ke, J = ye;
        else break e;
      }
    }
    function d(T) {
      return T.length === 0 ? null : T[0];
    }
    function u(T) {
      if (T.length === 0) return null;
      var B = T[0], J = T.pop();
      if (J !== B) {
        T[0] = J;
        e: for (var ye = 0, ke = T.length, x = ke >>> 1; ye < x; ) {
          var _ = 2 * (ye + 1) - 1, q = T[_], W = _ + 1, X = T[W];
          if (0 > p(q, J)) W < ke && 0 > p(X, q) ? (T[ye] = X, T[W] = J, ye = W) : (T[ye] = q, T[_] = J, ye = _);
          else if (W < ke && 0 > p(X, J)) T[ye] = X, T[W] = J, ye = W;
          else break e;
        }
      }
      return B;
    }
    function p(T, B) {
      var J = T.sortIndex - B.sortIndex;
      return J !== 0 ? J : T.id - B.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      i.unstable_now = function() {
        return h.now();
      };
    } else {
      var m = Date, k = m.now();
      i.unstable_now = function() {
        return m.now() - k;
      };
    }
    var v = [], g = [], S = 1, L = null, E = 3, I = false, $ = false, O = false, D = false, M = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, G = typeof setImmediate < "u" ? setImmediate : null;
    function oe(T) {
      for (var B = d(g); B !== null; ) {
        if (B.callback === null) u(g);
        else if (B.startTime <= T) u(g), B.sortIndex = B.expirationTime, c(v, B);
        else break;
        B = d(g);
      }
    }
    function te(T) {
      if (O = false, oe(T), !$) if (d(v) !== null) $ = true, Se || (Se = true, Ue());
      else {
        var B = d(g);
        B !== null && Fn(te, B.startTime - T);
      }
    }
    var Se = false, ee = -1, Le = 5, nn = -1;
    function ft() {
      return D ? true : !(i.unstable_now() - nn < Le);
    }
    function kn() {
      if (D = false, Se) {
        var T = i.unstable_now();
        nn = T;
        var B = true;
        try {
          e: {
            $ = false, O && (O = false, V(ee), ee = -1), I = true;
            var J = E;
            try {
              n: {
                for (oe(T), L = d(v); L !== null && !(L.expirationTime > T && ft()); ) {
                  var ye = L.callback;
                  if (typeof ye == "function") {
                    L.callback = null, E = L.priorityLevel;
                    var ke = ye(L.expirationTime <= T);
                    if (T = i.unstable_now(), typeof ke == "function") {
                      L.callback = ke, oe(T), B = true;
                      break n;
                    }
                    L === d(v) && u(v), oe(T);
                  } else u(v);
                  L = d(v);
                }
                if (L !== null) B = true;
                else {
                  var x = d(g);
                  x !== null && Fn(te, x.startTime - T), B = false;
                }
              }
              break e;
            } finally {
              L = null, E = J, I = false;
            }
            B = void 0;
          }
        } finally {
          B ? Ue() : Se = false;
        }
      }
    }
    var Ue;
    if (typeof G == "function") Ue = function() {
      G(kn);
    };
    else if (typeof MessageChannel < "u") {
      var Bn = new MessageChannel(), Be = Bn.port2;
      Bn.port1.onmessage = kn, Ue = function() {
        Be.postMessage(null);
      };
    } else Ue = function() {
      M(kn, 0);
    };
    function Fn(T, B) {
      ee = M(function() {
        T(i.unstable_now());
      }, B);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, i.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Le = 0 < T ? Math.floor(1e3 / T) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return E;
    }, i.unstable_next = function(T) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = E;
      }
      var J = E;
      E = B;
      try {
        return T();
      } finally {
        E = J;
      }
    }, i.unstable_requestPaint = function() {
      D = true;
    }, i.unstable_runWithPriority = function(T, B) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var J = E;
      E = T;
      try {
        return B();
      } finally {
        E = J;
      }
    }, i.unstable_scheduleCallback = function(T, B, J) {
      var ye = i.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? ye + J : ye) : J = ye, T) {
        case 1:
          var ke = -1;
          break;
        case 2:
          ke = 250;
          break;
        case 5:
          ke = 1073741823;
          break;
        case 4:
          ke = 1e4;
          break;
        default:
          ke = 5e3;
      }
      return ke = J + ke, T = { id: S++, callback: B, priorityLevel: T, startTime: J, expirationTime: ke, sortIndex: -1 }, J > ye ? (T.sortIndex = J, c(g, T), d(v) === null && T === d(g) && (O ? (V(ee), ee = -1) : O = true, Fn(te, J - ye))) : (T.sortIndex = ke, c(v, T), $ || I || ($ = true, Se || (Se = true, Ue()))), T;
    }, i.unstable_shouldYield = ft, i.unstable_wrapCallback = function(T) {
      var B = E;
      return function() {
        var J = E;
        E = B;
        try {
          return T.apply(this, arguments);
        } finally {
          E = J;
        }
      };
    };
  })(Sp)), Sp;
}
var Cp;
function Wg() {
  return Cp || (Cp = 1, jp.exports = Hg()), jp.exports;
}
var Ws = { exports: {} }, Ke = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ep;
function Ug() {
  if (Ep) return Ke;
  Ep = 1;
  var i = tu();
  function c(v) {
    var g = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++) g += "&args[]=" + encodeURIComponent(arguments[S]);
    }
    return "Minified React error #" + v + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d() {
  }
  var u = { d: { f: d, r: function() {
    throw Error(c(522));
  }, D: d, C: d, L: d, m: d, X: d, S: d, M: d }, p: 0, findDOMNode: null }, p = /* @__PURE__ */ Symbol.for("react.portal");
  function h(v, g, S) {
    var L = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: p, key: L == null ? null : "" + L, children: v, containerInfo: g, implementation: S };
  }
  var m = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function k(v, g) {
    if (v === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, Ke.createPortal = function(v, g) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11) throw Error(c(299));
    return h(v, g, null, S);
  }, Ke.flushSync = function(v) {
    var g = m.T, S = u.p;
    try {
      if (m.T = null, u.p = 2, v) return v();
    } finally {
      m.T = g, u.p = S, u.d.f();
    }
  }, Ke.preconnect = function(v, g) {
    typeof v == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, u.d.C(v, g));
  }, Ke.prefetchDNS = function(v) {
    typeof v == "string" && u.d.D(v);
  }, Ke.preinit = function(v, g) {
    if (typeof v == "string" && g && typeof g.as == "string") {
      var S = g.as, L = k(S, g.crossOrigin), E = typeof g.integrity == "string" ? g.integrity : void 0, I = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      S === "style" ? u.d.S(v, typeof g.precedence == "string" ? g.precedence : void 0, { crossOrigin: L, integrity: E, fetchPriority: I }) : S === "script" && u.d.X(v, { crossOrigin: L, integrity: E, fetchPriority: I, nonce: typeof g.nonce == "string" ? g.nonce : void 0 });
    }
  }, Ke.preinitModule = function(v, g) {
    if (typeof v == "string") if (typeof g == "object" && g !== null) {
      if (g.as == null || g.as === "script") {
        var S = k(g.as, g.crossOrigin);
        u.d.M(v, { crossOrigin: S, integrity: typeof g.integrity == "string" ? g.integrity : void 0, nonce: typeof g.nonce == "string" ? g.nonce : void 0 });
      }
    } else g == null && u.d.M(v);
  }, Ke.preload = function(v, g) {
    if (typeof v == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var S = g.as, L = k(S, g.crossOrigin);
      u.d.L(v, S, { crossOrigin: L, integrity: typeof g.integrity == "string" ? g.integrity : void 0, nonce: typeof g.nonce == "string" ? g.nonce : void 0, type: typeof g.type == "string" ? g.type : void 0, fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0, referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0, imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0, imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0, media: typeof g.media == "string" ? g.media : void 0 });
    }
  }, Ke.preloadModule = function(v, g) {
    if (typeof v == "string") if (g) {
      var S = k(g.as, g.crossOrigin);
      u.d.m(v, { as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0, crossOrigin: S, integrity: typeof g.integrity == "string" ? g.integrity : void 0 });
    } else u.d.m(v);
  }, Ke.requestFormReset = function(v) {
    u.d.r(v);
  }, Ke.unstable_batchedUpdates = function(v, g) {
    return v(g);
  }, Ke.useFormState = function(v, g, S) {
    return m.H.useFormState(v, g, S);
  }, Ke.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, Ke.version = "19.2.8", Ke;
}
var Pp;
function Vg() {
  if (Pp) return Ws.exports;
  Pp = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
    } catch (c) {
      console.error(c);
    }
  }
  return i(), Ws.exports = Ug(), Ws.exports;
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
var Lp;
function Qg() {
  if (Lp) return Ia;
  Lp = 1;
  var i = Wg(), c = tu(), d = Vg();
  function u(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function p(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function h(e) {
    var n = e, t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, (n.flags & 4098) !== 0 && (t = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function m(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function k(e) {
    if (e.tag === 31) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (h(e) !== e) throw Error(u(188));
  }
  function g(e) {
    var n = e.alternate;
    if (!n) {
      if (n = h(e), n === null) throw Error(u(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var a = t.return;
      if (a === null) break;
      var l = a.alternate;
      if (l === null) {
        if (r = a.return, r !== null) {
          t = r;
          continue;
        }
        break;
      }
      if (a.child === l.child) {
        for (l = a.child; l; ) {
          if (l === t) return v(a), e;
          if (l === r) return v(a), n;
          l = l.sibling;
        }
        throw Error(u(188));
      }
      if (t.return !== r.return) t = a, r = l;
      else {
        for (var s = false, f = a.child; f; ) {
          if (f === t) {
            s = true, t = a, r = l;
            break;
          }
          if (f === r) {
            s = true, r = a, t = l;
            break;
          }
          f = f.sibling;
        }
        if (!s) {
          for (f = l.child; f; ) {
            if (f === t) {
              s = true, t = l, r = a;
              break;
            }
            if (f === r) {
              s = true, r = l, t = a;
              break;
            }
            f = f.sibling;
          }
          if (!s) throw Error(u(189));
        }
      }
      if (t.alternate !== r) throw Error(u(190));
    }
    if (t.tag !== 3) throw Error(u(188));
    return t.stateNode.current === t ? e : n;
  }
  function S(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = S(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var L = Object.assign, E = /* @__PURE__ */ Symbol.for("react.element"), I = /* @__PURE__ */ Symbol.for("react.transitional.element"), $ = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), D = /* @__PURE__ */ Symbol.for("react.strict_mode"), M = /* @__PURE__ */ Symbol.for("react.profiler"), V = /* @__PURE__ */ Symbol.for("react.consumer"), G = /* @__PURE__ */ Symbol.for("react.context"), oe = /* @__PURE__ */ Symbol.for("react.forward_ref"), te = /* @__PURE__ */ Symbol.for("react.suspense"), Se = /* @__PURE__ */ Symbol.for("react.suspense_list"), ee = /* @__PURE__ */ Symbol.for("react.memo"), Le = /* @__PURE__ */ Symbol.for("react.lazy"), nn = /* @__PURE__ */ Symbol.for("react.activity"), ft = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), kn = Symbol.iterator;
  function Ue(e) {
    return e === null || typeof e != "object" ? null : (e = kn && e[kn] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Bn = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Be(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === Bn ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case O:
        return "Fragment";
      case M:
        return "Profiler";
      case D:
        return "StrictMode";
      case te:
        return "Suspense";
      case Se:
        return "SuspenseList";
      case nn:
        return "Activity";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case $:
        return "Portal";
      case G:
        return e.displayName || "Context";
      case V:
        return (e._context.displayName || "Context") + ".Consumer";
      case oe:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ee:
        return n = e.displayName || null, n !== null ? n : Be(e.type) || "Memo";
      case Le:
        n = e._payload, e = e._init;
        try {
          return Be(e(n));
        } catch {
        }
    }
    return null;
  }
  var Fn = Array.isArray, T = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = { pending: false, data: null, method: null, action: null }, ye = [], ke = -1;
  function x(e) {
    return { current: e };
  }
  function _(e) {
    0 > ke || (e.current = ye[ke], ye[ke] = null, ke--);
  }
  function q(e, n) {
    ke++, ye[ke] = e.current, e.current = n;
  }
  var W = x(null), X = x(null), re = x(null), he = x(null);
  function Xe(e, n) {
    switch (q(re, n), q(X, e), q(W, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? $f(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI) n = $f(n), e = Bf(n, e);
        else switch (e) {
          case "svg":
            e = 1;
            break;
          case "math":
            e = 2;
            break;
          default:
            e = 0;
        }
    }
    _(W), q(W, e);
  }
  function ze() {
    _(W), _(X), _(re);
  }
  function Ur(e) {
    e.memoizedState !== null && q(he, e);
    var n = W.current, t = Bf(n, e.type);
    n !== t && (q(X, e), q(W, t));
  }
  function Ya(e) {
    X.current === e && (_(W), _(X)), he.current === e && (_(he), Fa._currentValue = J);
  }
  var No, mu;
  function Mt(e) {
    if (No === void 0) try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      No = n && n[1] || "", mu = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + No + e + mu;
  }
  var Co = false;
  function Eo(e, n) {
    if (!e || Co) return "";
    Co = true;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = { DetermineComponentFrameRoot: function() {
        try {
          if (n) {
            var F = function() {
              throw Error();
            };
            if (Object.defineProperty(F.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(F, []);
              } catch (R) {
                var P = R;
              }
              Reflect.construct(e, [], F);
            } else {
              try {
                F.call();
              } catch (R) {
                P = R;
              }
              e.call(F.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (R) {
              P = R;
            }
            (F = e()) && typeof F.catch == "function" && F.catch(function() {
            });
          }
        } catch (R) {
          if (R && P && typeof R.stack == "string") return [R.stack, P.stack];
        }
        return [null, null];
      } };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
      a && a.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var l = r.DetermineComponentFrameRoot(), s = l[0], f = l[1];
      if (s && f) {
        var y = s.split(`
`), C = f.split(`
`);
        for (a = r = 0; r < y.length && !y[r].includes("DetermineComponentFrameRoot"); ) r++;
        for (; a < C.length && !C[a].includes("DetermineComponentFrameRoot"); ) a++;
        if (r === y.length || a === C.length) for (r = y.length - 1, a = C.length - 1; 1 <= r && 0 <= a && y[r] !== C[a]; ) a--;
        for (; 1 <= r && 0 <= a; r--, a--) if (y[r] !== C[a]) {
          if (r !== 1 || a !== 1) do
            if (r--, a--, 0 > a || y[r] !== C[a]) {
              var A = `
` + y[r].replace(" at new ", " at ");
              return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), A;
            }
          while (1 <= r && 0 <= a);
          break;
        }
      }
    } finally {
      Co = false, Error.prepareStackTrace = t;
    }
    return (t = e ? e.displayName || e.name : "") ? Mt(t) : "";
  }
  function gh(e, n) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Mt(e.type);
      case 16:
        return Mt("Lazy");
      case 13:
        return e.child !== n && n !== null ? Mt("Suspense Fallback") : Mt("Suspense");
      case 19:
        return Mt("SuspenseList");
      case 0:
      case 15:
        return Eo(e.type, false);
      case 11:
        return Eo(e.type.render, false);
      case 1:
        return Eo(e.type, true);
      case 31:
        return Mt("Activity");
      default:
        return "";
    }
  }
  function gu(e) {
    try {
      var n = "", t = null;
      do
        n += gh(e, t), t = e, e = e.return;
      while (e);
      return n;
    } catch (r) {
      return `
Error generating stack: ` + r.message + `
` + r.stack;
    }
  }
  var Po = Object.prototype.hasOwnProperty, Lo = i.unstable_scheduleCallback, Ro = i.unstable_cancelCallback, yh = i.unstable_shouldYield, vh = i.unstable_requestPaint, cn = i.unstable_now, bh = i.unstable_getCurrentPriorityLevel, yu = i.unstable_ImmediatePriority, vu = i.unstable_UserBlockingPriority, Ga = i.unstable_NormalPriority, xh = i.unstable_LowPriority, bu = i.unstable_IdlePriority, kh = i.log, wh = i.unstable_setDisableYieldValue, Vr = null, dn = null;
  function pt(e) {
    if (typeof kh == "function" && wh(e), dn && typeof dn.setStrictMode == "function") try {
      dn.setStrictMode(Vr, e);
    } catch {
    }
  }
  var fn = Math.clz32 ? Math.clz32 : Nh, jh = Math.log, Sh = Math.LN2;
  function Nh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (jh(e) / Sh | 0) | 0;
  }
  var Ja = 256, Ka = 262144, Xa = 4194304;
  function It(e) {
    var n = e & 42;
    if (n !== 0) return n;
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
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
        return e;
    }
  }
  function Za(e, n, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var a = 0, l = e.suspendedLanes, s = e.pingedLanes;
    e = e.warmLanes;
    var f = r & 134217727;
    return f !== 0 ? (r = f & ~l, r !== 0 ? a = It(r) : (s &= f, s !== 0 ? a = It(s) : t || (t = f & ~e, t !== 0 && (a = It(t))))) : (f = r & ~l, f !== 0 ? a = It(f) : s !== 0 ? a = It(s) : t || (t = r & ~e, t !== 0 && (a = It(t)))), a === 0 ? 0 : n !== 0 && n !== a && (n & l) === 0 && (l = a & -a, t = n & -n, l >= t || l === 32 && (t & 4194048) !== 0) ? n : a;
  }
  function Qr(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function Ch(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
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
        return n + 5e3;
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
        return -1;
    }
  }
  function xu() {
    var e = Xa;
    return Xa <<= 1, (Xa & 62914560) === 0 && (Xa = 4194304), e;
  }
  function Ao(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function Yr(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Eh(e, n, t, r, a, l) {
    var s = e.pendingLanes;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= t, e.entangledLanes &= t, e.errorRecoveryDisabledLanes &= t, e.shellSuspendCounter = 0;
    var f = e.entanglements, y = e.expirationTimes, C = e.hiddenUpdates;
    for (t = s & ~t; 0 < t; ) {
      var A = 31 - fn(t), F = 1 << A;
      f[A] = 0, y[A] = -1;
      var P = C[A];
      if (P !== null) for (C[A] = null, A = 0; A < P.length; A++) {
        var R = P[A];
        R !== null && (R.lane &= -536870913);
      }
      t &= ~F;
    }
    r !== 0 && ku(e, r, 0), l !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= l & ~(s & ~n));
  }
  function ku(e, n, t) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var r = 31 - fn(n);
    e.entangledLanes |= n, e.entanglements[r] = e.entanglements[r] | 1073741824 | t & 261930;
  }
  function wu(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - fn(t), a = 1 << r;
      a & n | e[r] & n && (e[r] |= n), t &= ~a;
    }
  }
  function ju(e, n) {
    var t = n & -n;
    return t = (t & 42) !== 0 ? 1 : To(t), (t & (e.suspendedLanes | n)) !== 0 ? 0 : t;
  }
  function To(e) {
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
        e = 0;
    }
    return e;
  }
  function zo(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Su() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : cp(e.type));
  }
  function Nu(e, n) {
    var t = B.p;
    try {
      return B.p = e, n();
    } finally {
      B.p = t;
    }
  }
  var ht = Math.random().toString(36).slice(2), Ve = "__reactFiber$" + ht, tn = "__reactProps$" + ht, rr = "__reactContainer$" + ht, Fo = "__reactEvents$" + ht, Ph = "__reactListeners$" + ht, Lh = "__reactHandles$" + ht, Cu = "__reactResources$" + ht, Gr = "__reactMarker$" + ht;
  function _o(e) {
    delete e[Ve], delete e[tn], delete e[Fo], delete e[Ph], delete e[Lh];
  }
  function ar(e) {
    var n = e[Ve];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[rr] || t[Ve]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = Yf(e); e !== null; ) {
          if (t = e[Ve]) return t;
          e = Yf(e);
        }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function lr(e) {
    if (e = e[Ve] || e[rr]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3) return e;
    }
    return null;
  }
  function Jr(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(u(33));
  }
  function or(e) {
    var n = e[Cu];
    return n || (n = e[Cu] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function qe(e) {
    e[Gr] = true;
  }
  var Eu = /* @__PURE__ */ new Set(), Pu = {};
  function $t(e, n) {
    ir(e, n), ir(e + "Capture", n);
  }
  function ir(e, n) {
    for (Pu[e] = n, e = 0; e < n.length; e++) Eu.add(n[e]);
  }
  var Rh = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Lu = {}, Ru = {};
  function Ah(e) {
    return Po.call(Ru, e) ? true : Po.call(Lu, e) ? false : Rh.test(e) ? Ru[e] = true : (Lu[e] = true, false);
  }
  function el(e, n, t) {
    if (Ah(n)) if (t === null) e.removeAttribute(n);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
          e.removeAttribute(n);
          return;
        case "boolean":
          var r = n.toLowerCase().slice(0, 5);
          if (r !== "data-" && r !== "aria-") {
            e.removeAttribute(n);
            return;
          }
      }
      e.setAttribute(n, "" + t);
    }
  }
  function nl(e, n, t) {
    if (t === null) e.removeAttribute(n);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + t);
    }
  }
  function Vn(e, n, t, r) {
    if (r === null) e.removeAttribute(t);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttributeNS(n, t, "" + r);
    }
  }
  function wn(e) {
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
        return "";
    }
  }
  function Au(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Th(e, n, t) {
    var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, n);
    if (!e.hasOwnProperty(n) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
      var a = r.get, l = r.set;
      return Object.defineProperty(e, n, { configurable: true, get: function() {
        return a.call(this);
      }, set: function(s) {
        t = "" + s, l.call(this, s);
      } }), Object.defineProperty(e, n, { enumerable: r.enumerable }), { getValue: function() {
        return t;
      }, setValue: function(s) {
        t = "" + s;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function Do(e) {
    if (!e._valueTracker) {
      var n = Au(e) ? "checked" : "value";
      e._valueTracker = Th(e, n, "" + e[n]);
    }
  }
  function Tu(e) {
    if (!e) return false;
    var n = e._valueTracker;
    if (!n) return true;
    var t = n.getValue(), r = "";
    return e && (r = Au(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), true) : false;
  }
  function tl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var zh = /[\n"\\]/g;
  function _n(e) {
    return e.replace(zh, function(n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function Oo(e, n, t, r, a, l, s, f) {
    e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), n != null ? s === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + wn(n)) : e.value !== "" + wn(n) && (e.value = "" + wn(n)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), n != null ? Mo(e, s, wn(n)) : t != null ? Mo(e, s, wn(t)) : r != null && e.removeAttribute("value"), a == null && l != null && (e.defaultChecked = !!l), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + wn(f) : e.removeAttribute("name");
  }
  function zu(e, n, t, r, a, l, s, f) {
    if (l != null && typeof l != "function" && typeof l != "symbol" && typeof l != "boolean" && (e.type = l), n != null || t != null) {
      if (!(l !== "submit" && l !== "reset" || n != null)) {
        Do(e);
        return;
      }
      t = t != null ? "" + wn(t) : "", n = n != null ? "" + wn(n) : t, f || n === e.value || (e.value = n), e.defaultValue = n;
    }
    r = r ?? a, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = f ? e.checked : !!r, e.defaultChecked = !!r, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), Do(e);
  }
  function Mo(e, n, t) {
    n === "number" && tl(e.ownerDocument) === e || e.defaultValue === "" + t || (e.defaultValue = "" + t);
  }
  function sr(e, n, t, r) {
    if (e = e.options, n) {
      n = {};
      for (var a = 0; a < t.length; a++) n["$" + t[a]] = true;
      for (t = 0; t < e.length; t++) a = n.hasOwnProperty("$" + e[t].value), e[t].selected !== a && (e[t].selected = a), a && r && (e[t].defaultSelected = true);
    } else {
      for (t = "" + wn(t), n = null, a = 0; a < e.length; a++) {
        if (e[a].value === t) {
          e[a].selected = true, r && (e[a].defaultSelected = true);
          return;
        }
        n !== null || e[a].disabled || (n = e[a]);
      }
      n !== null && (n.selected = true);
    }
  }
  function Fu(e, n, t) {
    if (n != null && (n = "" + wn(n), n !== e.value && (e.value = n), t == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = t != null ? "" + wn(t) : "";
  }
  function _u(e, n, t, r) {
    if (n == null) {
      if (r != null) {
        if (t != null) throw Error(u(92));
        if (Fn(r)) {
          if (1 < r.length) throw Error(u(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), n = t;
    }
    t = wn(n), e.defaultValue = t, r = e.textContent, r === t && r !== "" && r !== null && (e.value = r), Do(e);
  }
  function ur(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Fh = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Du(e, n, t) {
    var r = n.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === "" ? r ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : r ? e.setProperty(n, t) : typeof t != "number" || t === 0 || Fh.has(n) ? n === "float" ? e.cssFloat = t : e[n] = ("" + t).trim() : e[n] = t + "px";
  }
  function Ou(e, n, t) {
    if (n != null && typeof n != "object") throw Error(u(62));
    if (e = e.style, t != null) {
      for (var r in t) !t.hasOwnProperty(r) || n != null && n.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
      for (var a in n) r = n[a], n.hasOwnProperty(a) && t[a] !== r && Du(e, a, r);
    } else for (var l in n) n.hasOwnProperty(l) && Du(e, l, n[l]);
  }
  function Io(e) {
    if (e.indexOf("-") === -1) return false;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var _h = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Dh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function rl(e) {
    return Dh.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Qn() {
  }
  var $o = null;
  function Bo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var cr = null, dr = null;
  function Mu(e) {
    var n = lr(e);
    if (n && (e = n.stateNode)) {
      var t = e[tn] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Oo(e, t.value, t.defaultValue, t.defaultValue, t.checked, t.defaultChecked, t.type, t.name), n = t.name, t.type === "radio" && n != null) {
            for (t = e; t.parentNode; ) t = t.parentNode;
            for (t = t.querySelectorAll('input[name="' + _n("" + n) + '"][type="radio"]'), n = 0; n < t.length; n++) {
              var r = t[n];
              if (r !== e && r.form === e.form) {
                var a = r[tn] || null;
                if (!a) throw Error(u(90));
                Oo(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
              }
            }
            for (n = 0; n < t.length; n++) r = t[n], r.form === e.form && Tu(r);
          }
          break e;
        case "textarea":
          Fu(e, t.value, t.defaultValue);
          break e;
        case "select":
          n = t.value, n != null && sr(e, !!t.multiple, n, false);
      }
    }
  }
  var qo = false;
  function Iu(e, n, t) {
    if (qo) return e(n, t);
    qo = true;
    try {
      var r = e(n);
      return r;
    } finally {
      if (qo = false, (cr !== null || dr !== null) && (Wl(), cr && (n = cr, e = dr, dr = cr = null, Mu(n), e))) for (n = 0; n < e.length; n++) Mu(e[n]);
    }
  }
  function Kr(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = t[tn] || null;
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
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
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = false;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(u(231, n, typeof t));
    return t;
  }
  var Yn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ho = false;
  if (Yn) try {
    var Xr = {};
    Object.defineProperty(Xr, "passive", { get: function() {
      Ho = true;
    } }), window.addEventListener("test", Xr, Xr), window.removeEventListener("test", Xr, Xr);
  } catch {
    Ho = false;
  }
  var mt = null, Wo = null, al = null;
  function $u() {
    if (al) return al;
    var e, n = Wo, t = n.length, r, a = "value" in mt ? mt.value : mt.textContent, l = a.length;
    for (e = 0; e < t && n[e] === a[e]; e++) ;
    var s = t - e;
    for (r = 1; r <= s && n[t - r] === a[l - r]; r++) ;
    return al = a.slice(e, 1 < r ? 1 - r : void 0);
  }
  function ll(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ol() {
    return true;
  }
  function Bu() {
    return false;
  }
  function rn(e) {
    function n(t, r, a, l, s) {
      this._reactName = t, this._targetInst = a, this.type = r, this.nativeEvent = l, this.target = s, this.currentTarget = null;
      for (var f in e) e.hasOwnProperty(f) && (t = e[f], this[f] = t ? t(l) : l[f]);
      return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === false) ? ol : Bu, this.isPropagationStopped = Bu, this;
    }
    return L(n.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = false), this.isDefaultPrevented = ol);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = true), this.isPropagationStopped = ol);
    }, persist: function() {
    }, isPersistent: ol }), n;
  }
  var Bt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, il = rn(Bt), Zr = L({}, Bt, { view: 0, detail: 0 }), Oh = rn(Zr), Uo, Vo, ea, sl = L({}, Zr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Yo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== ea && (ea && e.type === "mousemove" ? (Uo = e.screenX - ea.screenX, Vo = e.screenY - ea.screenY) : Vo = Uo = 0, ea = e), Uo);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Vo;
  } }), qu = rn(sl), Mh = L({}, sl, { dataTransfer: 0 }), Ih = rn(Mh), $h = L({}, Zr, { relatedTarget: 0 }), Qo = rn($h), Bh = L({}, Bt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qh = rn(Bh), Hh = L({}, Bt, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Wh = rn(Hh), Uh = L({}, Bt, { data: 0 }), Hu = rn(Uh), Vh = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Qh = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Yh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Gh(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = Yh[e]) ? !!n[e] : false;
  }
  function Yo() {
    return Gh;
  }
  var Jh = L({}, Zr, { key: function(e) {
    if (e.key) {
      var n = Vh[e.key] || e.key;
      if (n !== "Unidentified") return n;
    }
    return e.type === "keypress" ? (e = ll(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Yo, charCode: function(e) {
    return e.type === "keypress" ? ll(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? ll(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Kh = rn(Jh), Xh = L({}, sl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Wu = rn(Xh), Zh = L({}, Zr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Yo }), em = rn(Zh), nm = L({}, Bt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), tm = rn(nm), rm = L({}, sl, { deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  }, deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), am = rn(rm), lm = L({}, Bt, { newState: 0, oldState: 0 }), om = rn(lm), im = [9, 13, 27, 32], Go = Yn && "CompositionEvent" in window, na = null;
  Yn && "documentMode" in document && (na = document.documentMode);
  var sm = Yn && "TextEvent" in window && !na, Uu = Yn && (!Go || na && 8 < na && 11 >= na), Vu = " ", Qu = false;
  function Yu(e, n) {
    switch (e) {
      case "keyup":
        return im.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function Gu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var fr = false;
  function um(e, n) {
    switch (e) {
      case "compositionend":
        return Gu(n);
      case "keypress":
        return n.which !== 32 ? null : (Qu = true, Vu);
      case "textInput":
        return e = n.data, e === Vu && Qu ? null : e;
      default:
        return null;
    }
  }
  function cm(e, n) {
    if (fr) return e === "compositionend" || !Go && Yu(e, n) ? (e = $u(), al = Wo = mt = null, fr = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Uu && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var dm = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Ju(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!dm[e.type] : n === "textarea";
  }
  function Ku(e, n, t, r) {
    cr ? dr ? dr.push(r) : dr = [r] : cr = r, n = Kl(n, "onChange"), 0 < n.length && (t = new il("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
  }
  var ta = null, ra = null;
  function fm(e) {
    Ff(e, 0);
  }
  function ul(e) {
    var n = Jr(e);
    if (Tu(n)) return e;
  }
  function Xu(e, n) {
    if (e === "change") return n;
  }
  var Zu = false;
  if (Yn) {
    var Jo;
    if (Yn) {
      var Ko = "oninput" in document;
      if (!Ko) {
        var ec = document.createElement("div");
        ec.setAttribute("oninput", "return;"), Ko = typeof ec.oninput == "function";
      }
      Jo = Ko;
    } else Jo = false;
    Zu = Jo && (!document.documentMode || 9 < document.documentMode);
  }
  function nc() {
    ta && (ta.detachEvent("onpropertychange", tc), ra = ta = null);
  }
  function tc(e) {
    if (e.propertyName === "value" && ul(ra)) {
      var n = [];
      Ku(n, ra, e, Bo(e)), Iu(fm, n);
    }
  }
  function pm(e, n, t) {
    e === "focusin" ? (nc(), ta = n, ra = t, ta.attachEvent("onpropertychange", tc)) : e === "focusout" && nc();
  }
  function hm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ul(ra);
  }
  function mm(e, n) {
    if (e === "click") return ul(n);
  }
  function gm(e, n) {
    if (e === "input" || e === "change") return ul(n);
  }
  function ym(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var pn = typeof Object.is == "function" ? Object.is : ym;
  function aa(e, n) {
    if (pn(e, n)) return true;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return false;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length) return false;
    for (r = 0; r < t.length; r++) {
      var a = t[r];
      if (!Po.call(n, a) || !pn(e[a], n[a])) return false;
    }
    return true;
  }
  function rc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ac(e, n) {
    var t = rc(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (r = e + t.textContent.length, e <= n && r >= n) return { node: t, offset: n - e };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = rc(t);
    }
  }
  function lc(e, n) {
    return e && n ? e === n ? true : e && e.nodeType === 3 ? false : n && n.nodeType === 3 ? lc(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : false : false;
  }
  function oc(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = tl(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = false;
      }
      if (t) e = n.contentWindow;
      else break;
      n = tl(e.document);
    }
    return n;
  }
  function Xo(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var vm = Yn && "documentMode" in document && 11 >= document.documentMode, pr = null, Zo = null, la = null, ei = false;
  function ic(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    ei || pr == null || pr !== tl(r) || (r = pr, "selectionStart" in r && Xo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), la && aa(la, r) || (la = r, r = Kl(Zo, "onSelect"), 0 < r.length && (n = new il("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = pr)));
  }
  function qt(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var hr = { animationend: qt("Animation", "AnimationEnd"), animationiteration: qt("Animation", "AnimationIteration"), animationstart: qt("Animation", "AnimationStart"), transitionrun: qt("Transition", "TransitionRun"), transitionstart: qt("Transition", "TransitionStart"), transitioncancel: qt("Transition", "TransitionCancel"), transitionend: qt("Transition", "TransitionEnd") }, ni = {}, sc = {};
  Yn && (sc = document.createElement("div").style, "AnimationEvent" in window || (delete hr.animationend.animation, delete hr.animationiteration.animation, delete hr.animationstart.animation), "TransitionEvent" in window || delete hr.transitionend.transition);
  function Ht(e) {
    if (ni[e]) return ni[e];
    if (!hr[e]) return e;
    var n = hr[e], t;
    for (t in n) if (n.hasOwnProperty(t) && t in sc) return ni[e] = n[t];
    return e;
  }
  var uc = Ht("animationend"), cc = Ht("animationiteration"), dc = Ht("animationstart"), bm = Ht("transitionrun"), xm = Ht("transitionstart"), km = Ht("transitioncancel"), fc = Ht("transitionend"), pc = /* @__PURE__ */ new Map(), ti = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  ti.push("scrollEnd");
  function Dn(e, n) {
    pc.set(e, n), $t(n, [e]);
  }
  var cl = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, jn = [], mr = 0, ri = 0;
  function dl() {
    for (var e = mr, n = ri = mr = 0; n < e; ) {
      var t = jn[n];
      jn[n++] = null;
      var r = jn[n];
      jn[n++] = null;
      var a = jn[n];
      jn[n++] = null;
      var l = jn[n];
      if (jn[n++] = null, r !== null && a !== null) {
        var s = r.pending;
        s === null ? a.next = a : (a.next = s.next, s.next = a), r.pending = a;
      }
      l !== 0 && hc(t, a, l);
    }
  }
  function fl(e, n, t, r) {
    jn[mr++] = e, jn[mr++] = n, jn[mr++] = t, jn[mr++] = r, ri |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
  }
  function ai(e, n, t, r) {
    return fl(e, n, t, r), pl(e);
  }
  function Wt(e, n) {
    return fl(e, null, null, n), pl(e);
  }
  function hc(e, n, t) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t);
    for (var a = false, l = e.return; l !== null; ) l.childLanes |= t, r = l.alternate, r !== null && (r.childLanes |= t), l.tag === 22 && (e = l.stateNode, e === null || e._visibility & 1 || (a = true)), e = l, l = l.return;
    return e.tag === 3 ? (l = e.stateNode, a && n !== null && (a = 31 - fn(t), e = l.hiddenUpdates, r = e[a], r === null ? e[a] = [n] : r.push(n), n.lane = t | 536870912), l) : null;
  }
  function pl(e) {
    if (50 < Ea) throw Ea = 0, ps = null, Error(u(185));
    for (var n = e.return; n !== null; ) e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var gr = {};
  function wm(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function hn(e, n, t, r) {
    return new wm(e, n, t, r);
  }
  function li(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Gn(e, n) {
    var t = e.alternate;
    return t === null ? (t = hn(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 65011712, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t.refCleanup = e.refCleanup, t;
  }
  function mc(e, n) {
    e.flags &= 65011714;
    var t = e.alternate;
    return t === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, e.type = t.type, n = t.dependencies, e.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), e;
  }
  function hl(e, n, t, r, a, l) {
    var s = 0;
    if (r = e, typeof e == "function") li(e) && (s = 1);
    else if (typeof e == "string") s = Eg(e, t, W.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (e) {
      case nn:
        return e = hn(31, t, n, a), e.elementType = nn, e.lanes = l, e;
      case O:
        return Ut(t.children, a, l, n);
      case D:
        s = 8, a |= 24;
        break;
      case M:
        return e = hn(12, t, n, a | 2), e.elementType = M, e.lanes = l, e;
      case te:
        return e = hn(13, t, n, a), e.elementType = te, e.lanes = l, e;
      case Se:
        return e = hn(19, t, n, a), e.elementType = Se, e.lanes = l, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case G:
            s = 10;
            break e;
          case V:
            s = 9;
            break e;
          case oe:
            s = 11;
            break e;
          case ee:
            s = 14;
            break e;
          case Le:
            s = 16, r = null;
            break e;
        }
        s = 29, t = Error(u(130, e === null ? "null" : typeof e, "")), r = null;
    }
    return n = hn(s, t, n, a), n.elementType = e, n.type = r, n.lanes = l, n;
  }
  function Ut(e, n, t, r) {
    return e = hn(7, e, r, n), e.lanes = t, e;
  }
  function oi(e, n, t) {
    return e = hn(6, e, null, n), e.lanes = t, e;
  }
  function gc(e) {
    var n = hn(18, null, null, 0);
    return n.stateNode = e, n;
  }
  function ii(e, n, t) {
    return n = hn(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  var yc = /* @__PURE__ */ new WeakMap();
  function Sn(e, n) {
    if (typeof e == "object" && e !== null) {
      var t = yc.get(e);
      return t !== void 0 ? t : (n = { value: e, source: n, stack: gu(n) }, yc.set(e, n), n);
    }
    return { value: e, source: n, stack: gu(n) };
  }
  var yr = [], vr = 0, ml = null, oa = 0, Nn = [], Cn = 0, gt = null, qn = 1, Hn = "";
  function Jn(e, n) {
    yr[vr++] = oa, yr[vr++] = ml, ml = e, oa = n;
  }
  function vc(e, n, t) {
    Nn[Cn++] = qn, Nn[Cn++] = Hn, Nn[Cn++] = gt, gt = e;
    var r = qn;
    e = Hn;
    var a = 32 - fn(r) - 1;
    r &= ~(1 << a), t += 1;
    var l = 32 - fn(n) + a;
    if (30 < l) {
      var s = a - a % 5;
      l = (r & (1 << s) - 1).toString(32), r >>= s, a -= s, qn = 1 << 32 - fn(n) + a | t << a | r, Hn = l + e;
    } else qn = 1 << l | t << a | r, Hn = e;
  }
  function si(e) {
    e.return !== null && (Jn(e, 1), vc(e, 1, 0));
  }
  function ui(e) {
    for (; e === ml; ) ml = yr[--vr], yr[vr] = null, oa = yr[--vr], yr[vr] = null;
    for (; e === gt; ) gt = Nn[--Cn], Nn[Cn] = null, Hn = Nn[--Cn], Nn[Cn] = null, qn = Nn[--Cn], Nn[Cn] = null;
  }
  function bc(e, n) {
    Nn[Cn++] = qn, Nn[Cn++] = Hn, Nn[Cn++] = gt, qn = n.id, Hn = n.overflow, gt = e;
  }
  var Qe = null, Ne = null, ce = false, yt = null, En = false, ci = Error(u(519));
  function vt(e) {
    var n = Error(u(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw ia(Sn(n, e)), ci;
  }
  function xc(e) {
    var n = e.stateNode, t = e.type, r = e.memoizedProps;
    switch (n[Ve] = e, n[tn] = r, t) {
      case "dialog":
        le("cancel", n), le("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        le("load", n);
        break;
      case "video":
      case "audio":
        for (t = 0; t < La.length; t++) le(La[t], n);
        break;
      case "source":
        le("error", n);
        break;
      case "img":
      case "image":
      case "link":
        le("error", n), le("load", n);
        break;
      case "details":
        le("toggle", n);
        break;
      case "input":
        le("invalid", n), zu(n, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, true);
        break;
      case "select":
        le("invalid", n);
        break;
      case "textarea":
        le("invalid", n), _u(n, r.value, r.defaultValue, r.children);
    }
    t = r.children, typeof t != "string" && typeof t != "number" && typeof t != "bigint" || n.textContent === "" + t || r.suppressHydrationWarning === true || Mf(n.textContent, t) ? (r.popover != null && (le("beforetoggle", n), le("toggle", n)), r.onScroll != null && le("scroll", n), r.onScrollEnd != null && le("scrollend", n), r.onClick != null && (n.onclick = Qn), n = true) : n = false, n || vt(e, true);
  }
  function kc(e) {
    for (Qe = e.return; Qe; ) switch (Qe.tag) {
      case 5:
      case 31:
      case 13:
        En = false;
        return;
      case 27:
      case 3:
        En = true;
        return;
      default:
        Qe = Qe.return;
    }
  }
  function br(e) {
    if (e !== Qe) return false;
    if (!ce) return kc(e), ce = true, false;
    var n = e.tag, t;
    if ((t = n !== 3 && n !== 27) && ((t = n === 5) && (t = e.type, t = !(t !== "form" && t !== "button") || Ps(e.type, e.memoizedProps)), t = !t), t && Ne && vt(e), kc(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      Ne = Qf(e);
    } else if (n === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      Ne = Qf(e);
    } else n === 27 ? (n = Ne, Tt(e.type) ? (e = zs, zs = null, Ne = e) : Ne = n) : Ne = Qe ? Pn(e.stateNode.nextSibling) : null;
    return true;
  }
  function Vt() {
    Ne = Qe = null, ce = false;
  }
  function di() {
    var e = yt;
    return e !== null && (sn === null ? sn = e : sn.push.apply(sn, e), yt = null), e;
  }
  function ia(e) {
    yt === null ? yt = [e] : yt.push(e);
  }
  var fi = x(null), Qt = null, Kn = null;
  function bt(e, n, t) {
    q(fi, n._currentValue), n._currentValue = t;
  }
  function Xn(e) {
    e._currentValue = fi.current, _(fi);
  }
  function pi(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
      e = e.return;
    }
  }
  function hi(e, n, t, r) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var l = a.dependencies;
      if (l !== null) {
        var s = a.child;
        l = l.firstContext;
        e: for (; l !== null; ) {
          var f = l;
          l = a;
          for (var y = 0; y < n.length; y++) if (f.context === n[y]) {
            l.lanes |= t, f = l.alternate, f !== null && (f.lanes |= t), pi(l.return, t, e), r || (s = null);
            break e;
          }
          l = f.next;
        }
      } else if (a.tag === 18) {
        if (s = a.return, s === null) throw Error(u(341));
        s.lanes |= t, l = s.alternate, l !== null && (l.lanes |= t), pi(s, t, e), s = null;
      } else s = a.child;
      if (s !== null) s.return = a;
      else for (s = a; s !== null; ) {
        if (s === e) {
          s = null;
          break;
        }
        if (a = s.sibling, a !== null) {
          a.return = s.return, s = a;
          break;
        }
        s = s.return;
      }
      a = s;
    }
  }
  function xr(e, n, t, r) {
    e = null;
    for (var a = n, l = false; a !== null; ) {
      if (!l) {
        if ((a.flags & 524288) !== 0) l = true;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var s = a.alternate;
        if (s === null) throw Error(u(387));
        if (s = s.memoizedProps, s !== null) {
          var f = a.type;
          pn(a.pendingProps.value, s.value) || (e !== null ? e.push(f) : e = [f]);
        }
      } else if (a === he.current) {
        if (s = a.alternate, s === null) throw Error(u(387));
        s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Fa) : e = [Fa]);
      }
      a = a.return;
    }
    e !== null && hi(n, e, t, r), n.flags |= 262144;
  }
  function gl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!pn(e.context._currentValue, e.memoizedValue)) return true;
      e = e.next;
    }
    return false;
  }
  function Yt(e) {
    Qt = e, Kn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Ye(e) {
    return wc(Qt, e);
  }
  function yl(e, n) {
    return Qt === null && Yt(e), wc(e, n);
  }
  function wc(e, n) {
    var t = n._currentValue;
    if (n = { context: n, memoizedValue: t, next: null }, Kn === null) {
      if (e === null) throw Error(u(308));
      Kn = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else Kn = Kn.next = n;
    return t;
  }
  var jm = typeof AbortController < "u" ? AbortController : function() {
    var e = [], n = this.signal = { aborted: false, addEventListener: function(t, r) {
      e.push(r);
    } };
    this.abort = function() {
      n.aborted = true, e.forEach(function(t) {
        return t();
      });
    };
  }, Sm = i.unstable_scheduleCallback, Nm = i.unstable_NormalPriority, De = { $$typeof: G, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function mi() {
    return { controller: new jm(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function sa(e) {
    e.refCount--, e.refCount === 0 && Sm(Nm, function() {
      e.controller.abort();
    });
  }
  var ua = null, gi = 0, kr = 0, wr = null;
  function Cm(e, n) {
    if (ua === null) {
      var t = ua = [];
      gi = 0, kr = bs(), wr = { status: "pending", value: void 0, then: function(r) {
        t.push(r);
      } };
    }
    return gi++, n.then(jc, jc), n;
  }
  function jc() {
    if (--gi === 0 && ua !== null) {
      wr !== null && (wr.status = "fulfilled");
      var e = ua;
      ua = null, kr = 0, wr = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Em(e, n) {
    var t = [], r = { status: "pending", value: null, reason: null, then: function(a) {
      t.push(a);
    } };
    return e.then(function() {
      r.status = "fulfilled", r.value = n;
      for (var a = 0; a < t.length; a++) (0, t[a])(n);
    }, function(a) {
      for (r.status = "rejected", r.reason = a, a = 0; a < t.length; a++) (0, t[a])(void 0);
    }), r;
  }
  var Sc = T.S;
  T.S = function(e, n) {
    sf = cn(), typeof n == "object" && n !== null && typeof n.then == "function" && Cm(e, n), Sc !== null && Sc(e, n);
  };
  var Gt = x(null);
  function yi() {
    var e = Gt.current;
    return e !== null ? e : we.pooledCache;
  }
  function vl(e, n) {
    n === null ? q(Gt, Gt.current) : q(Gt, n.pool);
  }
  function Nc() {
    var e = yi();
    return e === null ? null : { parent: De._currentValue, pool: e };
  }
  var jr = Error(u(460)), vi = Error(u(474)), bl = Error(u(542)), xl = { then: function() {
  } };
  function Cc(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Ec(e, n, t) {
    switch (t = e[t], t === void 0 ? e.push(n) : t !== n && (n.then(Qn, Qn), n = t), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, Lc(e), e;
      default:
        if (typeof n.status == "string") n.then(Qn, Qn);
        else {
          if (e = we, e !== null && 100 < e.shellSuspendCounter) throw Error(u(482));
          e = n, e.status = "pending", e.then(function(r) {
            if (n.status === "pending") {
              var a = n;
              a.status = "fulfilled", a.value = r;
            }
          }, function(r) {
            if (n.status === "pending") {
              var a = n;
              a.status = "rejected", a.reason = r;
            }
          });
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, Lc(e), e;
        }
        throw Kt = n, jr;
    }
  }
  function Jt(e) {
    try {
      var n = e._init;
      return n(e._payload);
    } catch (t) {
      throw t !== null && typeof t == "object" && typeof t.then == "function" ? (Kt = t, jr) : t;
    }
  }
  var Kt = null;
  function Pc() {
    if (Kt === null) throw Error(u(459));
    var e = Kt;
    return Kt = null, e;
  }
  function Lc(e) {
    if (e === jr || e === bl) throw Error(u(483));
  }
  var Sr = null, ca = 0;
  function kl(e) {
    var n = ca;
    return ca += 1, Sr === null && (Sr = []), Ec(Sr, e, n);
  }
  function da(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function wl(e, n) {
    throw n.$$typeof === E ? Error(u(525)) : (e = Object.prototype.toString.call(n), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e)));
  }
  function Rc(e) {
    function n(j, b) {
      if (e) {
        var N = j.deletions;
        N === null ? (j.deletions = [b], j.flags |= 16) : N.push(b);
      }
    }
    function t(j, b) {
      if (!e) return null;
      for (; b !== null; ) n(j, b), b = b.sibling;
      return null;
    }
    function r(j) {
      for (var b = /* @__PURE__ */ new Map(); j !== null; ) j.key !== null ? b.set(j.key, j) : b.set(j.index, j), j = j.sibling;
      return b;
    }
    function a(j, b) {
      return j = Gn(j, b), j.index = 0, j.sibling = null, j;
    }
    function l(j, b, N) {
      return j.index = N, e ? (N = j.alternate, N !== null ? (N = N.index, N < b ? (j.flags |= 67108866, b) : N) : (j.flags |= 67108866, b)) : (j.flags |= 1048576, b);
    }
    function s(j) {
      return e && j.alternate === null && (j.flags |= 67108866), j;
    }
    function f(j, b, N, z) {
      return b === null || b.tag !== 6 ? (b = oi(N, j.mode, z), b.return = j, b) : (b = a(b, N), b.return = j, b);
    }
    function y(j, b, N, z) {
      var Q = N.type;
      return Q === O ? A(j, b, N.props.children, z, N.key) : b !== null && (b.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Le && Jt(Q) === b.type) ? (b = a(b, N.props), da(b, N), b.return = j, b) : (b = hl(N.type, N.key, N.props, null, j.mode, z), da(b, N), b.return = j, b);
    }
    function C(j, b, N, z) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== N.containerInfo || b.stateNode.implementation !== N.implementation ? (b = ii(N, j.mode, z), b.return = j, b) : (b = a(b, N.children || []), b.return = j, b);
    }
    function A(j, b, N, z, Q) {
      return b === null || b.tag !== 7 ? (b = Ut(N, j.mode, z, Q), b.return = j, b) : (b = a(b, N), b.return = j, b);
    }
    function F(j, b, N) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint") return b = oi("" + b, j.mode, N), b.return = j, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case I:
            return N = hl(b.type, b.key, b.props, null, j.mode, N), da(N, b), N.return = j, N;
          case $:
            return b = ii(b, j.mode, N), b.return = j, b;
          case Le:
            return b = Jt(b), F(j, b, N);
        }
        if (Fn(b) || Ue(b)) return b = Ut(b, j.mode, N, null), b.return = j, b;
        if (typeof b.then == "function") return F(j, kl(b), N);
        if (b.$$typeof === G) return F(j, yl(j, b), N);
        wl(j, b);
      }
      return null;
    }
    function P(j, b, N, z) {
      var Q = b !== null ? b.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint") return Q !== null ? null : f(j, b, "" + N, z);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case I:
            return N.key === Q ? y(j, b, N, z) : null;
          case $:
            return N.key === Q ? C(j, b, N, z) : null;
          case Le:
            return N = Jt(N), P(j, b, N, z);
        }
        if (Fn(N) || Ue(N)) return Q !== null ? null : A(j, b, N, z, null);
        if (typeof N.then == "function") return P(j, b, kl(N), z);
        if (N.$$typeof === G) return P(j, b, yl(j, N), z);
        wl(j, N);
      }
      return null;
    }
    function R(j, b, N, z, Q) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint") return j = j.get(N) || null, f(b, j, "" + z, Q);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case I:
            return j = j.get(z.key === null ? N : z.key) || null, y(b, j, z, Q);
          case $:
            return j = j.get(z.key === null ? N : z.key) || null, C(b, j, z, Q);
          case Le:
            return z = Jt(z), R(j, b, N, z, Q);
        }
        if (Fn(z) || Ue(z)) return j = j.get(N) || null, A(b, j, z, Q, null);
        if (typeof z.then == "function") return R(j, b, N, kl(z), Q);
        if (z.$$typeof === G) return R(j, b, N, yl(b, z), Q);
        wl(b, z);
      }
      return null;
    }
    function H(j, b, N, z) {
      for (var Q = null, de = null, U = b, ne = b = 0, se = null; U !== null && ne < N.length; ne++) {
        U.index > ne ? (se = U, U = null) : se = U.sibling;
        var fe = P(j, U, N[ne], z);
        if (fe === null) {
          U === null && (U = se);
          break;
        }
        e && U && fe.alternate === null && n(j, U), b = l(fe, b, ne), de === null ? Q = fe : de.sibling = fe, de = fe, U = se;
      }
      if (ne === N.length) return t(j, U), ce && Jn(j, ne), Q;
      if (U === null) {
        for (; ne < N.length; ne++) U = F(j, N[ne], z), U !== null && (b = l(U, b, ne), de === null ? Q = U : de.sibling = U, de = U);
        return ce && Jn(j, ne), Q;
      }
      for (U = r(U); ne < N.length; ne++) se = R(U, j, ne, N[ne], z), se !== null && (e && se.alternate !== null && U.delete(se.key === null ? ne : se.key), b = l(se, b, ne), de === null ? Q = se : de.sibling = se, de = se);
      return e && U.forEach(function(Ot) {
        return n(j, Ot);
      }), ce && Jn(j, ne), Q;
    }
    function Y(j, b, N, z) {
      if (N == null) throw Error(u(151));
      for (var Q = null, de = null, U = b, ne = b = 0, se = null, fe = N.next(); U !== null && !fe.done; ne++, fe = N.next()) {
        U.index > ne ? (se = U, U = null) : se = U.sibling;
        var Ot = P(j, U, fe.value, z);
        if (Ot === null) {
          U === null && (U = se);
          break;
        }
        e && U && Ot.alternate === null && n(j, U), b = l(Ot, b, ne), de === null ? Q = Ot : de.sibling = Ot, de = Ot, U = se;
      }
      if (fe.done) return t(j, U), ce && Jn(j, ne), Q;
      if (U === null) {
        for (; !fe.done; ne++, fe = N.next()) fe = F(j, fe.value, z), fe !== null && (b = l(fe, b, ne), de === null ? Q = fe : de.sibling = fe, de = fe);
        return ce && Jn(j, ne), Q;
      }
      for (U = r(U); !fe.done; ne++, fe = N.next()) fe = R(U, j, ne, fe.value, z), fe !== null && (e && fe.alternate !== null && U.delete(fe.key === null ? ne : fe.key), b = l(fe, b, ne), de === null ? Q = fe : de.sibling = fe, de = fe);
      return e && U.forEach(function(Mg) {
        return n(j, Mg);
      }), ce && Jn(j, ne), Q;
    }
    function xe(j, b, N, z) {
      if (typeof N == "object" && N !== null && N.type === O && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case I:
            e: {
              for (var Q = N.key; b !== null; ) {
                if (b.key === Q) {
                  if (Q = N.type, Q === O) {
                    if (b.tag === 7) {
                      t(j, b.sibling), z = a(b, N.props.children), z.return = j, j = z;
                      break e;
                    }
                  } else if (b.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Le && Jt(Q) === b.type) {
                    t(j, b.sibling), z = a(b, N.props), da(z, N), z.return = j, j = z;
                    break e;
                  }
                  t(j, b);
                  break;
                } else n(j, b);
                b = b.sibling;
              }
              N.type === O ? (z = Ut(N.props.children, j.mode, z, N.key), z.return = j, j = z) : (z = hl(N.type, N.key, N.props, null, j.mode, z), da(z, N), z.return = j, j = z);
            }
            return s(j);
          case $:
            e: {
              for (Q = N.key; b !== null; ) {
                if (b.key === Q) if (b.tag === 4 && b.stateNode.containerInfo === N.containerInfo && b.stateNode.implementation === N.implementation) {
                  t(j, b.sibling), z = a(b, N.children || []), z.return = j, j = z;
                  break e;
                } else {
                  t(j, b);
                  break;
                }
                else n(j, b);
                b = b.sibling;
              }
              z = ii(N, j.mode, z), z.return = j, j = z;
            }
            return s(j);
          case Le:
            return N = Jt(N), xe(j, b, N, z);
        }
        if (Fn(N)) return H(j, b, N, z);
        if (Ue(N)) {
          if (Q = Ue(N), typeof Q != "function") throw Error(u(150));
          return N = Q.call(N), Y(j, b, N, z);
        }
        if (typeof N.then == "function") return xe(j, b, kl(N), z);
        if (N.$$typeof === G) return xe(j, b, yl(j, N), z);
        wl(j, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, b !== null && b.tag === 6 ? (t(j, b.sibling), z = a(b, N), z.return = j, j = z) : (t(j, b), z = oi(N, j.mode, z), z.return = j, j = z), s(j)) : t(j, b);
    }
    return function(j, b, N, z) {
      try {
        ca = 0;
        var Q = xe(j, b, N, z);
        return Sr = null, Q;
      } catch (U) {
        if (U === jr || U === bl) throw U;
        var de = hn(29, U, null, j.mode);
        return de.lanes = z, de.return = j, de;
      } finally {
      }
    };
  }
  var Xt = Rc(true), Ac = Rc(false), xt = false;
  function bi(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function xi(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
  }
  function kt(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function wt(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (pe & 2) !== 0) {
      var a = r.pending;
      return a === null ? n.next = n : (n.next = a.next, a.next = n), r.pending = n, n = pl(e), hc(e, null, t), n;
    }
    return fl(e, r, n, t), pl(e);
  }
  function fa(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194048) !== 0)) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, wu(e, t);
    }
  }
  function ki(e, n) {
    var t = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
      var a = null, l = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var s = { lane: t.lane, tag: t.tag, payload: t.payload, callback: null, next: null };
          l === null ? a = l = s : l = l.next = s, t = t.next;
        } while (t !== null);
        l === null ? a = l = n : l = l.next = n;
      } else a = l = n;
      t = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: l, shared: r.shared, callbacks: r.callbacks }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  var wi = false;
  function pa() {
    if (wi) {
      var e = wr;
      if (e !== null) throw e;
    }
  }
  function ha(e, n, t, r) {
    wi = false;
    var a = e.updateQueue;
    xt = false;
    var l = a.firstBaseUpdate, s = a.lastBaseUpdate, f = a.shared.pending;
    if (f !== null) {
      a.shared.pending = null;
      var y = f, C = y.next;
      y.next = null, s === null ? l = C : s.next = C, s = y;
      var A = e.alternate;
      A !== null && (A = A.updateQueue, f = A.lastBaseUpdate, f !== s && (f === null ? A.firstBaseUpdate = C : f.next = C, A.lastBaseUpdate = y));
    }
    if (l !== null) {
      var F = a.baseState;
      s = 0, A = C = y = null, f = l;
      do {
        var P = f.lane & -536870913, R = P !== f.lane;
        if (R ? (ie & P) === P : (r & P) === P) {
          P !== 0 && P === kr && (wi = true), A !== null && (A = A.next = { lane: 0, tag: f.tag, payload: f.payload, callback: null, next: null });
          e: {
            var H = e, Y = f;
            P = n;
            var xe = t;
            switch (Y.tag) {
              case 1:
                if (H = Y.payload, typeof H == "function") {
                  F = H.call(xe, F, P);
                  break e;
                }
                F = H;
                break e;
              case 3:
                H.flags = H.flags & -65537 | 128;
              case 0:
                if (H = Y.payload, P = typeof H == "function" ? H.call(xe, F, P) : H, P == null) break e;
                F = L({}, F, P);
                break e;
              case 2:
                xt = true;
            }
          }
          P = f.callback, P !== null && (e.flags |= 64, R && (e.flags |= 8192), R = a.callbacks, R === null ? a.callbacks = [P] : R.push(P));
        } else R = { lane: P, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, A === null ? (C = A = R, y = F) : A = A.next = R, s |= P;
        if (f = f.next, f === null) {
          if (f = a.shared.pending, f === null) break;
          R = f, f = R.next, R.next = null, a.lastBaseUpdate = R, a.shared.pending = null;
        }
      } while (true);
      A === null && (y = F), a.baseState = y, a.firstBaseUpdate = C, a.lastBaseUpdate = A, l === null && (a.shared.lanes = 0), Et |= s, e.lanes = s, e.memoizedState = F;
    }
  }
  function Tc(e, n) {
    if (typeof e != "function") throw Error(u(191, e));
    e.call(n);
  }
  function zc(e, n) {
    var t = e.callbacks;
    if (t !== null) for (e.callbacks = null, e = 0; e < t.length; e++) Tc(t[e], n);
  }
  var Nr = x(null), jl = x(0);
  function Fc(e, n) {
    e = it, q(jl, e), q(Nr, n), it = e | n.baseLanes;
  }
  function ji() {
    q(jl, it), q(Nr, Nr.current);
  }
  function Si() {
    it = jl.current, _(Nr), _(jl);
  }
  var mn = x(null), On = null;
  function jt(e) {
    var n = e.alternate;
    q(Fe, Fe.current & 1), q(mn, e), On === null && (n === null || Nr.current !== null || n.memoizedState !== null) && (On = e);
  }
  function Ni(e) {
    q(Fe, Fe.current), q(mn, e), On === null && (On = e);
  }
  function _c(e) {
    e.tag === 22 ? (q(Fe, Fe.current), q(mn, e), On === null && (On = e)) : St();
  }
  function St() {
    q(Fe, Fe.current), q(mn, mn.current);
  }
  function gn(e) {
    _(mn), On === e && (On = null), _(Fe);
  }
  var Fe = x(0);
  function Sl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || As(t) || Ts(t))) return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Zn = 0, Z = null, ve = null, Oe = null, Nl = false, Cr = false, Zt = false, Cl = 0, ma = 0, Er = null, Pm = 0;
  function Re() {
    throw Error(u(321));
  }
  function Ci(e, n) {
    if (n === null) return false;
    for (var t = 0; t < n.length && t < e.length; t++) if (!pn(e[t], n[t])) return false;
    return true;
  }
  function Ei(e, n, t, r, a, l) {
    return Zn = l, Z = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, T.H = e === null || e.memoizedState === null ? vd : qi, Zt = false, l = t(r, a), Zt = false, Cr && (l = Oc(n, t, r, a)), Dc(e), l;
  }
  function Dc(e) {
    T.H = va;
    var n = ve !== null && ve.next !== null;
    if (Zn = 0, Oe = ve = Z = null, Nl = false, ma = 0, Er = null, n) throw Error(u(300));
    e === null || Me || (e = e.dependencies, e !== null && gl(e) && (Me = true));
  }
  function Oc(e, n, t, r) {
    Z = e;
    var a = 0;
    do {
      if (Cr && (Er = null), ma = 0, Cr = false, 25 <= a) throw Error(u(301));
      if (a += 1, Oe = ve = null, e.updateQueue != null) {
        var l = e.updateQueue;
        l.lastEffect = null, l.events = null, l.stores = null, l.memoCache != null && (l.memoCache.index = 0);
      }
      T.H = bd, l = n(t, r);
    } while (Cr);
    return l;
  }
  function Lm() {
    var e = T.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? ga(n) : n, e = e.useState()[0], (ve !== null ? ve.memoizedState : null) !== e && (Z.flags |= 1024), n;
  }
  function Pi() {
    var e = Cl !== 0;
    return Cl = 0, e;
  }
  function Li(e, n, t) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~t;
  }
  function Ri(e) {
    if (Nl) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      Nl = false;
    }
    Zn = 0, Oe = ve = Z = null, Cr = false, ma = Cl = 0, Er = null;
  }
  function Ze() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Oe === null ? Z.memoizedState = Oe = e : Oe = Oe.next = e, Oe;
  }
  function _e() {
    if (ve === null) {
      var e = Z.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ve.next;
    var n = Oe === null ? Z.memoizedState : Oe.next;
    if (n !== null) Oe = n, ve = e;
    else {
      if (e === null) throw Z.alternate === null ? Error(u(467)) : Error(u(310));
      ve = e, e = { memoizedState: ve.memoizedState, baseState: ve.baseState, baseQueue: ve.baseQueue, queue: ve.queue, next: null }, Oe === null ? Z.memoizedState = Oe = e : Oe = Oe.next = e;
    }
    return Oe;
  }
  function El() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ga(e) {
    var n = ma;
    return ma += 1, Er === null && (Er = []), e = Ec(Er, e, n), n = Z, (Oe === null ? n.memoizedState : Oe.next) === null && (n = n.alternate, T.H = n === null || n.memoizedState === null ? vd : qi), e;
  }
  function Pl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ga(e);
      if (e.$$typeof === G) return Ye(e);
    }
    throw Error(u(438, String(e)));
  }
  function Ai(e) {
    var n = null, t = Z.updateQueue;
    if (t !== null && (n = t.memoCache), n == null) {
      var r = Z.alternate;
      r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (n = { data: r.data.map(function(a) {
        return a.slice();
      }), index: 0 })));
    }
    if (n == null && (n = { data: [], index: 0 }), t === null && (t = El(), Z.updateQueue = t), t.memoCache = n, t = n.data[n.index], t === void 0) for (t = n.data[n.index] = Array(e), r = 0; r < e; r++) t[r] = ft;
    return n.index++, t;
  }
  function et(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ll(e) {
    var n = _e();
    return Ti(n, ve, e);
  }
  function Ti(e, n, t) {
    var r = e.queue;
    if (r === null) throw Error(u(311));
    r.lastRenderedReducer = t;
    var a = e.baseQueue, l = r.pending;
    if (l !== null) {
      if (a !== null) {
        var s = a.next;
        a.next = l.next, l.next = s;
      }
      n.baseQueue = a = l, r.pending = null;
    }
    if (l = e.baseState, a === null) e.memoizedState = l;
    else {
      n = a.next;
      var f = s = null, y = null, C = n, A = false;
      do {
        var F = C.lane & -536870913;
        if (F !== C.lane ? (ie & F) === F : (Zn & F) === F) {
          var P = C.revertLane;
          if (P === 0) y !== null && (y = y.next = { lane: 0, revertLane: 0, gesture: null, action: C.action, hasEagerState: C.hasEagerState, eagerState: C.eagerState, next: null }), F === kr && (A = true);
          else if ((Zn & P) === P) {
            C = C.next, P === kr && (A = true);
            continue;
          } else F = { lane: 0, revertLane: C.revertLane, gesture: null, action: C.action, hasEagerState: C.hasEagerState, eagerState: C.eagerState, next: null }, y === null ? (f = y = F, s = l) : y = y.next = F, Z.lanes |= P, Et |= P;
          F = C.action, Zt && t(l, F), l = C.hasEagerState ? C.eagerState : t(l, F);
        } else P = { lane: F, revertLane: C.revertLane, gesture: C.gesture, action: C.action, hasEagerState: C.hasEagerState, eagerState: C.eagerState, next: null }, y === null ? (f = y = P, s = l) : y = y.next = P, Z.lanes |= F, Et |= F;
        C = C.next;
      } while (C !== null && C !== n);
      if (y === null ? s = l : y.next = f, !pn(l, e.memoizedState) && (Me = true, A && (t = wr, t !== null))) throw t;
      e.memoizedState = l, e.baseState = s, e.baseQueue = y, r.lastRenderedState = l;
    }
    return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
  }
  function zi(e) {
    var n = _e(), t = n.queue;
    if (t === null) throw Error(u(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, a = t.pending, l = n.memoizedState;
    if (a !== null) {
      t.pending = null;
      var s = a = a.next;
      do
        l = e(l, s.action), s = s.next;
      while (s !== a);
      pn(l, n.memoizedState) || (Me = true), n.memoizedState = l, n.baseQueue === null && (n.baseState = l), t.lastRenderedState = l;
    }
    return [l, r];
  }
  function Mc(e, n, t) {
    var r = Z, a = _e(), l = ce;
    if (l) {
      if (t === void 0) throw Error(u(407));
      t = t();
    } else t = n();
    var s = !pn((ve || a).memoizedState, t);
    if (s && (a.memoizedState = t, Me = true), a = a.queue, Di(Bc.bind(null, r, a, e), [e]), a.getSnapshot !== n || s || Oe !== null && Oe.memoizedState.tag & 1) {
      if (r.flags |= 2048, Pr(9, { destroy: void 0 }, $c.bind(null, r, a, t, n), null), we === null) throw Error(u(349));
      l || (Zn & 127) !== 0 || Ic(r, n, t);
    }
    return t;
  }
  function Ic(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = Z.updateQueue, n === null ? (n = El(), Z.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function $c(e, n, t, r) {
    n.value = t, n.getSnapshot = r, qc(n) && Hc(e);
  }
  function Bc(e, n, t) {
    return t(function() {
      qc(n) && Hc(e);
    });
  }
  function qc(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !pn(e, t);
    } catch {
      return true;
    }
  }
  function Hc(e) {
    var n = Wt(e, 2);
    n !== null && un(n, e, 2);
  }
  function Fi(e) {
    var n = Ze();
    if (typeof e == "function") {
      var t = e;
      if (e = t(), Zt) {
        pt(true);
        try {
          t();
        } finally {
          pt(false);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: et, lastRenderedState: e }, n;
  }
  function Wc(e, n, t, r) {
    return e.baseState = t, Ti(e, ve, typeof r == "function" ? r : et);
  }
  function Rm(e, n, t, r, a) {
    if (Tl(e)) throw Error(u(485));
    if (e = n.action, e !== null) {
      var l = { payload: a, action: e, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(s) {
        l.listeners.push(s);
      } };
      T.T !== null ? t(true) : l.isTransition = false, r(l), t = n.pending, t === null ? (l.next = n.pending = l, Uc(n, l)) : (l.next = t.next, n.pending = t.next = l);
    }
  }
  function Uc(e, n) {
    var t = n.action, r = n.payload, a = e.state;
    if (n.isTransition) {
      var l = T.T, s = {};
      T.T = s;
      try {
        var f = t(a, r), y = T.S;
        y !== null && y(s, f), Vc(e, n, f);
      } catch (C) {
        _i(e, n, C);
      } finally {
        l !== null && s.types !== null && (l.types = s.types), T.T = l;
      }
    } else try {
      l = t(a, r), Vc(e, n, l);
    } catch (C) {
      _i(e, n, C);
    }
  }
  function Vc(e, n, t) {
    t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(function(r) {
      Qc(e, n, r);
    }, function(r) {
      return _i(e, n, r);
    }) : Qc(e, n, t);
  }
  function Qc(e, n, t) {
    n.status = "fulfilled", n.value = t, Yc(n), e.state = t, n = e.pending, n !== null && (t = n.next, t === n ? e.pending = null : (t = t.next, n.next = t, Uc(e, t)));
  }
  function _i(e, n, t) {
    var r = e.pending;
    if (e.pending = null, r !== null) {
      r = r.next;
      do
        n.status = "rejected", n.reason = t, Yc(n), n = n.next;
      while (n !== r);
    }
    e.action = null;
  }
  function Yc(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Gc(e, n) {
    return n;
  }
  function Jc(e, n) {
    if (ce) {
      var t = we.formState;
      if (t !== null) {
        e: {
          var r = Z;
          if (ce) {
            if (Ne) {
              n: {
                for (var a = Ne, l = En; a.nodeType !== 8; ) {
                  if (!l) {
                    a = null;
                    break n;
                  }
                  if (a = Pn(a.nextSibling), a === null) {
                    a = null;
                    break n;
                  }
                }
                l = a.data, a = l === "F!" || l === "F" ? a : null;
              }
              if (a) {
                Ne = Pn(a.nextSibling), r = a.data === "F!";
                break e;
              }
            }
            vt(r);
          }
          r = false;
        }
        r && (n = t[0]);
      }
    }
    return t = Ze(), t.memoizedState = t.baseState = n, r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Gc, lastRenderedState: n }, t.queue = r, t = md.bind(null, Z, r), r.dispatch = t, r = Fi(false), l = Bi.bind(null, Z, false, r.queue), r = Ze(), a = { state: n, dispatch: null, action: e, pending: null }, r.queue = a, t = Rm.bind(null, Z, a, l, t), a.dispatch = t, r.memoizedState = e, [n, t, false];
  }
  function Kc(e) {
    var n = _e();
    return Xc(n, ve, e);
  }
  function Xc(e, n, t) {
    if (n = Ti(e, n, Gc)[0], e = Ll(et)[0], typeof n == "object" && n !== null && typeof n.then == "function") try {
      var r = ga(n);
    } catch (s) {
      throw s === jr ? bl : s;
    }
    else r = n;
    n = _e();
    var a = n.queue, l = a.dispatch;
    return t !== n.memoizedState && (Z.flags |= 2048, Pr(9, { destroy: void 0 }, Am.bind(null, a, t), null)), [r, l, e];
  }
  function Am(e, n) {
    e.action = n;
  }
  function Zc(e) {
    var n = _e(), t = ve;
    if (t !== null) return Xc(n, t, e);
    _e(), n = n.memoizedState, t = _e();
    var r = t.queue.dispatch;
    return t.memoizedState = e, [n, r, false];
  }
  function Pr(e, n, t, r) {
    return e = { tag: e, create: t, deps: r, inst: n, next: null }, n = Z.updateQueue, n === null && (n = El(), Z.updateQueue = n), t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e), e;
  }
  function ed() {
    return _e().memoizedState;
  }
  function Rl(e, n, t, r) {
    var a = Ze();
    Z.flags |= e, a.memoizedState = Pr(1 | n, { destroy: void 0 }, t, r === void 0 ? null : r);
  }
  function Al(e, n, t, r) {
    var a = _e();
    r = r === void 0 ? null : r;
    var l = a.memoizedState.inst;
    ve !== null && r !== null && Ci(r, ve.memoizedState.deps) ? a.memoizedState = Pr(n, l, t, r) : (Z.flags |= e, a.memoizedState = Pr(1 | n, l, t, r));
  }
  function nd(e, n) {
    Rl(8390656, 8, e, n);
  }
  function Di(e, n) {
    Al(2048, 8, e, n);
  }
  function Tm(e) {
    Z.flags |= 4;
    var n = Z.updateQueue;
    if (n === null) n = El(), Z.updateQueue = n, n.events = [e];
    else {
      var t = n.events;
      t === null ? n.events = [e] : t.push(e);
    }
  }
  function td(e) {
    var n = _e().memoizedState;
    return Tm({ ref: n, nextImpl: e }), function() {
      if ((pe & 2) !== 0) throw Error(u(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function rd(e, n) {
    return Al(4, 2, e, n);
  }
  function ad(e, n) {
    return Al(4, 4, e, n);
  }
  function ld(e, n) {
    if (typeof n == "function") {
      e = e();
      var t = n(e);
      return function() {
        typeof t == "function" ? t() : n(null);
      };
    }
    if (n != null) return e = e(), n.current = e, function() {
      n.current = null;
    };
  }
  function od(e, n, t) {
    t = t != null ? t.concat([e]) : null, Al(4, 4, ld.bind(null, n, e), t);
  }
  function Oi() {
  }
  function id(e, n) {
    var t = _e();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return n !== null && Ci(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function sd(e, n) {
    var t = _e();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    if (n !== null && Ci(n, r[1])) return r[0];
    if (r = e(), Zt) {
      pt(true);
      try {
        e();
      } finally {
        pt(false);
      }
    }
    return t.memoizedState = [r, n], r;
  }
  function Mi(e, n, t) {
    return t === void 0 || (Zn & 1073741824) !== 0 && (ie & 261930) === 0 ? e.memoizedState = n : (e.memoizedState = t, e = cf(), Z.lanes |= e, Et |= e, t);
  }
  function ud(e, n, t, r) {
    return pn(t, n) ? t : Nr.current !== null ? (e = Mi(e, t, r), pn(e, n) || (Me = true), e) : (Zn & 42) === 0 || (Zn & 1073741824) !== 0 && (ie & 261930) === 0 ? (Me = true, e.memoizedState = t) : (e = cf(), Z.lanes |= e, Et |= e, n);
  }
  function cd(e, n, t, r, a) {
    var l = B.p;
    B.p = l !== 0 && 8 > l ? l : 8;
    var s = T.T, f = {};
    T.T = f, Bi(e, false, n, t);
    try {
      var y = a(), C = T.S;
      if (C !== null && C(f, y), y !== null && typeof y == "object" && typeof y.then == "function") {
        var A = Em(y, r);
        ya(e, n, A, bn(e));
      } else ya(e, n, r, bn(e));
    } catch (F) {
      ya(e, n, { then: function() {
      }, status: "rejected", reason: F }, bn());
    } finally {
      B.p = l, s !== null && f.types !== null && (s.types = f.types), T.T = s;
    }
  }
  function zm() {
  }
  function Ii(e, n, t, r) {
    if (e.tag !== 5) throw Error(u(476));
    var a = dd(e).queue;
    cd(e, a, n, J, t === null ? zm : function() {
      return fd(e), t(r);
    });
  }
  function dd(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = { memoizedState: J, baseState: J, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: et, lastRenderedState: J }, next: null };
    var t = {};
    return n.next = { memoizedState: t, baseState: t, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: et, lastRenderedState: t }, next: null }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function fd(e) {
    var n = dd(e);
    n.next === null && (n = e.alternate.memoizedState), ya(e, n.next.queue, {}, bn());
  }
  function $i() {
    return Ye(Fa);
  }
  function pd() {
    return _e().memoizedState;
  }
  function hd() {
    return _e().memoizedState;
  }
  function Fm(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var t = bn();
          e = kt(t);
          var r = wt(n, e, t);
          r !== null && (un(r, n, t), fa(r, n, t)), n = { cache: mi() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function _m(e, n, t) {
    var r = bn();
    t = { lane: r, revertLane: 0, gesture: null, action: t, hasEagerState: false, eagerState: null, next: null }, Tl(e) ? gd(n, t) : (t = ai(e, n, t, r), t !== null && (un(t, e, r), yd(t, n, r)));
  }
  function md(e, n, t) {
    var r = bn();
    ya(e, n, t, r);
  }
  function ya(e, n, t, r) {
    var a = { lane: r, revertLane: 0, gesture: null, action: t, hasEagerState: false, eagerState: null, next: null };
    if (Tl(e)) gd(n, a);
    else {
      var l = e.alternate;
      if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = n.lastRenderedReducer, l !== null)) try {
        var s = n.lastRenderedState, f = l(s, t);
        if (a.hasEagerState = true, a.eagerState = f, pn(f, s)) return fl(e, n, a, 0), we === null && dl(), false;
      } catch {
      } finally {
      }
      if (t = ai(e, n, a, r), t !== null) return un(t, e, r), yd(t, n, r), true;
    }
    return false;
  }
  function Bi(e, n, t, r) {
    if (r = { lane: 2, revertLane: bs(), gesture: null, action: r, hasEagerState: false, eagerState: null, next: null }, Tl(e)) {
      if (n) throw Error(u(479));
    } else n = ai(e, t, r, 2), n !== null && un(n, e, 2);
  }
  function Tl(e) {
    var n = e.alternate;
    return e === Z || n !== null && n === Z;
  }
  function gd(e, n) {
    Cr = Nl = true;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function yd(e, n, t) {
    if ((t & 4194048) !== 0) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, wu(e, t);
    }
  }
  var va = { readContext: Ye, use: Pl, useCallback: Re, useContext: Re, useEffect: Re, useImperativeHandle: Re, useLayoutEffect: Re, useInsertionEffect: Re, useMemo: Re, useReducer: Re, useRef: Re, useState: Re, useDebugValue: Re, useDeferredValue: Re, useTransition: Re, useSyncExternalStore: Re, useId: Re, useHostTransitionStatus: Re, useFormState: Re, useActionState: Re, useOptimistic: Re, useMemoCache: Re, useCacheRefresh: Re };
  va.useEffectEvent = Re;
  var vd = { readContext: Ye, use: Pl, useCallback: function(e, n) {
    return Ze().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: Ye, useEffect: nd, useImperativeHandle: function(e, n, t) {
    t = t != null ? t.concat([e]) : null, Rl(4194308, 4, ld.bind(null, n, e), t);
  }, useLayoutEffect: function(e, n) {
    return Rl(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    Rl(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = Ze();
    n = n === void 0 ? null : n;
    var r = e();
    if (Zt) {
      pt(true);
      try {
        e();
      } finally {
        pt(false);
      }
    }
    return t.memoizedState = [r, n], r;
  }, useReducer: function(e, n, t) {
    var r = Ze();
    if (t !== void 0) {
      var a = t(n);
      if (Zt) {
        pt(true);
        try {
          t(n);
        } finally {
          pt(false);
        }
      }
    } else a = n;
    return r.memoizedState = r.baseState = a, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: a }, r.queue = e, e = e.dispatch = _m.bind(null, Z, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var n = Ze();
    return e = { current: e }, n.memoizedState = e;
  }, useState: function(e) {
    e = Fi(e);
    var n = e.queue, t = md.bind(null, Z, n);
    return n.dispatch = t, [e.memoizedState, t];
  }, useDebugValue: Oi, useDeferredValue: function(e, n) {
    var t = Ze();
    return Mi(t, e, n);
  }, useTransition: function() {
    var e = Fi(false);
    return e = cd.bind(null, Z, e.queue, true, false), Ze().memoizedState = e, [false, e];
  }, useSyncExternalStore: function(e, n, t) {
    var r = Z, a = Ze();
    if (ce) {
      if (t === void 0) throw Error(u(407));
      t = t();
    } else {
      if (t = n(), we === null) throw Error(u(349));
      (ie & 127) !== 0 || Ic(r, n, t);
    }
    a.memoizedState = t;
    var l = { value: t, getSnapshot: n };
    return a.queue = l, nd(Bc.bind(null, r, l, e), [e]), r.flags |= 2048, Pr(9, { destroy: void 0 }, $c.bind(null, r, l, t, n), null), t;
  }, useId: function() {
    var e = Ze(), n = we.identifierPrefix;
    if (ce) {
      var t = Hn, r = qn;
      t = (r & ~(1 << 32 - fn(r) - 1)).toString(32) + t, n = "_" + n + "R_" + t, t = Cl++, 0 < t && (n += "H" + t.toString(32)), n += "_";
    } else t = Pm++, n = "_" + n + "r_" + t.toString(32) + "_";
    return e.memoizedState = n;
  }, useHostTransitionStatus: $i, useFormState: Jc, useActionState: Jc, useOptimistic: function(e) {
    var n = Ze();
    n.memoizedState = n.baseState = e;
    var t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return n.queue = t, n = Bi.bind(null, Z, true, t), t.dispatch = n, [e, n];
  }, useMemoCache: Ai, useCacheRefresh: function() {
    return Ze().memoizedState = Fm.bind(null, Z);
  }, useEffectEvent: function(e) {
    var n = Ze(), t = { impl: e };
    return n.memoizedState = t, function() {
      if ((pe & 2) !== 0) throw Error(u(440));
      return t.impl.apply(void 0, arguments);
    };
  } }, qi = { readContext: Ye, use: Pl, useCallback: id, useContext: Ye, useEffect: Di, useImperativeHandle: od, useInsertionEffect: rd, useLayoutEffect: ad, useMemo: sd, useReducer: Ll, useRef: ed, useState: function() {
    return Ll(et);
  }, useDebugValue: Oi, useDeferredValue: function(e, n) {
    var t = _e();
    return ud(t, ve.memoizedState, e, n);
  }, useTransition: function() {
    var e = Ll(et)[0], n = _e().memoizedState;
    return [typeof e == "boolean" ? e : ga(e), n];
  }, useSyncExternalStore: Mc, useId: pd, useHostTransitionStatus: $i, useFormState: Kc, useActionState: Kc, useOptimistic: function(e, n) {
    var t = _e();
    return Wc(t, ve, e, n);
  }, useMemoCache: Ai, useCacheRefresh: hd };
  qi.useEffectEvent = td;
  var bd = { readContext: Ye, use: Pl, useCallback: id, useContext: Ye, useEffect: Di, useImperativeHandle: od, useInsertionEffect: rd, useLayoutEffect: ad, useMemo: sd, useReducer: zi, useRef: ed, useState: function() {
    return zi(et);
  }, useDebugValue: Oi, useDeferredValue: function(e, n) {
    var t = _e();
    return ve === null ? Mi(t, e, n) : ud(t, ve.memoizedState, e, n);
  }, useTransition: function() {
    var e = zi(et)[0], n = _e().memoizedState;
    return [typeof e == "boolean" ? e : ga(e), n];
  }, useSyncExternalStore: Mc, useId: pd, useHostTransitionStatus: $i, useFormState: Zc, useActionState: Zc, useOptimistic: function(e, n) {
    var t = _e();
    return ve !== null ? Wc(t, ve, e, n) : (t.baseState = e, [e, t.queue.dispatch]);
  }, useMemoCache: Ai, useCacheRefresh: hd };
  bd.useEffectEvent = td;
  function Hi(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : L({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var Wi = { enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var r = bn(), a = kt(r);
    a.payload = n, t != null && (a.callback = t), n = wt(e, a, r), n !== null && (un(n, e, r), fa(n, e, r));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r = bn(), a = kt(r);
    a.tag = 1, a.payload = n, t != null && (a.callback = t), n = wt(e, a, r), n !== null && (un(n, e, r), fa(n, e, r));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = bn(), r = kt(t);
    r.tag = 2, n != null && (r.callback = n), n = wt(e, r, t), n !== null && (un(n, e, t), fa(n, e, t));
  } };
  function xd(e, n, t, r, a, l, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, s) : n.prototype && n.prototype.isPureReactComponent ? !aa(t, r) || !aa(a, l) : true;
  }
  function kd(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && Wi.enqueueReplaceState(n, n.state, null);
  }
  function er(e, n) {
    var t = n;
    if ("ref" in n) {
      t = {};
      for (var r in n) r !== "ref" && (t[r] = n[r]);
    }
    if (e = e.defaultProps) {
      t === n && (t = L({}, t));
      for (var a in e) t[a] === void 0 && (t[a] = e[a]);
    }
    return t;
  }
  function wd(e) {
    cl(e);
  }
  function jd(e) {
    console.error(e);
  }
  function Sd(e) {
    cl(e);
  }
  function zl(e, n) {
    try {
      var t = e.onUncaughtError;
      t(n.value, { componentStack: n.stack });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function Nd(e, n, t) {
    try {
      var r = e.onCaughtError;
      r(t.value, { componentStack: t.stack, errorBoundary: n.tag === 1 ? n.stateNode : null });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Ui(e, n, t) {
    return t = kt(t), t.tag = 3, t.payload = { element: null }, t.callback = function() {
      zl(e, n);
    }, t;
  }
  function Cd(e) {
    return e = kt(e), e.tag = 3, e;
  }
  function Ed(e, n, t, r) {
    var a = t.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var l = r.value;
      e.payload = function() {
        return a(l);
      }, e.callback = function() {
        Nd(n, t, r);
      };
    }
    var s = t.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (e.callback = function() {
      Nd(n, t, r), typeof a != "function" && (Pt === null ? Pt = /* @__PURE__ */ new Set([this]) : Pt.add(this));
      var f = r.stack;
      this.componentDidCatch(r.value, { componentStack: f !== null ? f : "" });
    });
  }
  function Dm(e, n, t, r, a) {
    if (t.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
      if (n = t.alternate, n !== null && xr(n, t, a, true), t = mn.current, t !== null) {
        switch (t.tag) {
          case 31:
          case 13:
            return On === null ? Ul() : t.alternate === null && Ae === 0 && (Ae = 3), t.flags &= -257, t.flags |= 65536, t.lanes = a, r === xl ? t.flags |= 16384 : (n = t.updateQueue, n === null ? t.updateQueue = /* @__PURE__ */ new Set([r]) : n.add(r), gs(e, r, a)), false;
          case 22:
            return t.flags |= 65536, r === xl ? t.flags |= 16384 : (n = t.updateQueue, n === null ? (n = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([r]) }, t.updateQueue = n) : (t = n.retryQueue, t === null ? n.retryQueue = /* @__PURE__ */ new Set([r]) : t.add(r)), gs(e, r, a)), false;
        }
        throw Error(u(435, t.tag));
      }
      return gs(e, r, a), Ul(), false;
    }
    if (ce) return n = mn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = a, r !== ci && (e = Error(u(422), { cause: r }), ia(Sn(e, t)))) : (r !== ci && (n = Error(u(423), { cause: r }), ia(Sn(n, t))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = Sn(r, t), a = Ui(e.stateNode, r, a), ki(e, a), Ae !== 4 && (Ae = 2)), false;
    var l = Error(u(520), { cause: r });
    if (l = Sn(l, t), Ca === null ? Ca = [l] : Ca.push(l), Ae !== 4 && (Ae = 2), n === null) return true;
    r = Sn(r, t), t = n;
    do {
      switch (t.tag) {
        case 3:
          return t.flags |= 65536, e = a & -a, t.lanes |= e, e = Ui(t.stateNode, r, e), ki(t, e), false;
        case 1:
          if (n = t.type, l = t.stateNode, (t.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || l !== null && typeof l.componentDidCatch == "function" && (Pt === null || !Pt.has(l)))) return t.flags |= 65536, a &= -a, t.lanes |= a, a = Cd(a), Ed(a, e, t, r), ki(t, a), false;
      }
      t = t.return;
    } while (t !== null);
    return false;
  }
  var Vi = Error(u(461)), Me = false;
  function Ge(e, n, t, r) {
    n.child = e === null ? Ac(n, null, t, r) : Xt(n, e.child, t, r);
  }
  function Pd(e, n, t, r, a) {
    t = t.render;
    var l = n.ref;
    if ("ref" in r) {
      var s = {};
      for (var f in r) f !== "ref" && (s[f] = r[f]);
    } else s = r;
    return Yt(n), r = Ei(e, n, t, s, l, a), f = Pi(), e !== null && !Me ? (Li(e, n, a), nt(e, n, a)) : (ce && f && si(n), n.flags |= 1, Ge(e, n, r, a), n.child);
  }
  function Ld(e, n, t, r, a) {
    if (e === null) {
      var l = t.type;
      return typeof l == "function" && !li(l) && l.defaultProps === void 0 && t.compare === null ? (n.tag = 15, n.type = l, Rd(e, n, l, r, a)) : (e = hl(t.type, null, r, n, n.mode, a), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (l = e.child, !es(e, a)) {
      var s = l.memoizedProps;
      if (t = t.compare, t = t !== null ? t : aa, t(s, r) && e.ref === n.ref) return nt(e, n, a);
    }
    return n.flags |= 1, e = Gn(l, r), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Rd(e, n, t, r, a) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (aa(l, r) && e.ref === n.ref) if (Me = false, n.pendingProps = r = l, es(e, a)) (e.flags & 131072) !== 0 && (Me = true);
      else return n.lanes = e.lanes, nt(e, n, a);
    }
    return Qi(e, n, t, r, a);
  }
  function Ad(e, n, t, r) {
    var a = r.children, l = e !== null ? e.memoizedState : null;
    if (e === null && n.stateNode === null && (n.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), r.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (l = l !== null ? l.baseLanes | t : t, e !== null) {
          for (r = n.child = e.child, a = 0; r !== null; ) a = a | r.lanes | r.childLanes, r = r.sibling;
          r = a & ~l;
        } else r = 0, n.child = null;
        return Td(e, n, l, t, r);
      }
      if ((t & 536870912) !== 0) n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && vl(n, l !== null ? l.cachePool : null), l !== null ? Fc(n, l) : ji(), _c(n);
      else return r = n.lanes = 536870912, Td(e, n, l !== null ? l.baseLanes | t : t, t, r);
    } else l !== null ? (vl(n, l.cachePool), Fc(n, l), St(), n.memoizedState = null) : (e !== null && vl(n, null), ji(), St());
    return Ge(e, n, a, t), n.child;
  }
  function ba(e, n) {
    return e !== null && e.tag === 22 || n.stateNode !== null || (n.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), n.sibling;
  }
  function Td(e, n, t, r, a) {
    var l = yi();
    return l = l === null ? null : { parent: De._currentValue, pool: l }, n.memoizedState = { baseLanes: t, cachePool: l }, e !== null && vl(n, null), ji(), _c(n), e !== null && xr(e, n, r, true), n.childLanes = a, null;
  }
  function Fl(e, n) {
    return n = Dl({ mode: n.mode, children: n.children }, e.mode), n.ref = e.ref, e.child = n, n.return = e, n;
  }
  function zd(e, n, t) {
    return Xt(n, e.child, null, t), e = Fl(n, n.pendingProps), e.flags |= 2, gn(n), n.memoizedState = null, e;
  }
  function Om(e, n, t) {
    var r = n.pendingProps, a = (n.flags & 128) !== 0;
    if (n.flags &= -129, e === null) {
      if (ce) {
        if (r.mode === "hidden") return e = Fl(n, r), n.lanes = 536870912, ba(null, e);
        if (Ni(n), (e = Ne) ? (e = Vf(e, En), e = e !== null && e.data === "&" ? e : null, e !== null && (n.memoizedState = { dehydrated: e, treeContext: gt !== null ? { id: qn, overflow: Hn } : null, retryLane: 536870912, hydrationErrors: null }, t = gc(e), t.return = n, n.child = t, Qe = n, Ne = null)) : e = null, e === null) throw vt(n);
        return n.lanes = 536870912, null;
      }
      return Fl(n, r);
    }
    var l = e.memoizedState;
    if (l !== null) {
      var s = l.dehydrated;
      if (Ni(n), a) if (n.flags & 256) n.flags &= -257, n = zd(e, n, t);
      else if (n.memoizedState !== null) n.child = e.child, n.flags |= 128, n = null;
      else throw Error(u(558));
      else if (Me || xr(e, n, t, false), a = (t & e.childLanes) !== 0, Me || a) {
        if (r = we, r !== null && (s = ju(r, t), s !== 0 && s !== l.retryLane)) throw l.retryLane = s, Wt(e, s), un(r, e, s), Vi;
        Ul(), n = zd(e, n, t);
      } else e = l.treeContext, Ne = Pn(s.nextSibling), Qe = n, ce = true, yt = null, En = false, e !== null && bc(n, e), n = Fl(n, r), n.flags |= 4096;
      return n;
    }
    return e = Gn(e.child, { mode: r.mode, children: r.children }), e.ref = n.ref, n.child = e, e.return = n, e;
  }
  function _l(e, n) {
    var t = n.ref;
    if (t === null) e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object") throw Error(u(284));
      (e === null || e.ref !== t) && (n.flags |= 4194816);
    }
  }
  function Qi(e, n, t, r, a) {
    return Yt(n), t = Ei(e, n, t, r, void 0, a), r = Pi(), e !== null && !Me ? (Li(e, n, a), nt(e, n, a)) : (ce && r && si(n), n.flags |= 1, Ge(e, n, t, a), n.child);
  }
  function Fd(e, n, t, r, a, l) {
    return Yt(n), n.updateQueue = null, t = Oc(n, r, t, a), Dc(e), r = Pi(), e !== null && !Me ? (Li(e, n, l), nt(e, n, l)) : (ce && r && si(n), n.flags |= 1, Ge(e, n, t, l), n.child);
  }
  function _d(e, n, t, r, a) {
    if (Yt(n), n.stateNode === null) {
      var l = gr, s = t.contextType;
      typeof s == "object" && s !== null && (l = Ye(s)), l = new t(r, l), n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, l.updater = Wi, n.stateNode = l, l._reactInternals = n, l = n.stateNode, l.props = r, l.state = n.memoizedState, l.refs = {}, bi(n), s = t.contextType, l.context = typeof s == "object" && s !== null ? Ye(s) : gr, l.state = n.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Hi(n, t, s, r), l.state = n.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (s = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), s !== l.state && Wi.enqueueReplaceState(l, l.state, null), ha(n, r, l, a), pa(), l.state = n.memoizedState), typeof l.componentDidMount == "function" && (n.flags |= 4194308), r = true;
    } else if (e === null) {
      l = n.stateNode;
      var f = n.memoizedProps, y = er(t, f);
      l.props = y;
      var C = l.context, A = t.contextType;
      s = gr, typeof A == "object" && A !== null && (s = Ye(A));
      var F = t.getDerivedStateFromProps;
      A = typeof F == "function" || typeof l.getSnapshotBeforeUpdate == "function", f = n.pendingProps !== f, A || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (f || C !== s) && kd(n, l, r, s), xt = false;
      var P = n.memoizedState;
      l.state = P, ha(n, r, l, a), pa(), C = n.memoizedState, f || P !== C || xt ? (typeof F == "function" && (Hi(n, t, F, r), C = n.memoizedState), (y = xt || xd(n, t, y, r, P, C, s)) ? (A || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = C), l.props = r, l.state = C, l.context = s, r = y) : (typeof l.componentDidMount == "function" && (n.flags |= 4194308), r = false);
    } else {
      l = n.stateNode, xi(e, n), s = n.memoizedProps, A = er(t, s), l.props = A, F = n.pendingProps, P = l.context, C = t.contextType, y = gr, typeof C == "object" && C !== null && (y = Ye(C)), f = t.getDerivedStateFromProps, (C = typeof f == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== F || P !== y) && kd(n, l, r, y), xt = false, P = n.memoizedState, l.state = P, ha(n, r, l, a), pa();
      var R = n.memoizedState;
      s !== F || P !== R || xt || e !== null && e.dependencies !== null && gl(e.dependencies) ? (typeof f == "function" && (Hi(n, t, f, r), R = n.memoizedState), (A = xt || xd(n, t, A, r, P, R, y) || e !== null && e.dependencies !== null && gl(e.dependencies)) ? (C || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, R, y), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, R, y)), typeof l.componentDidUpdate == "function" && (n.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && P === e.memoizedState || (n.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && P === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = R), l.props = r, l.state = R, l.context = y, r = A) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && P === e.memoizedState || (n.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && P === e.memoizedState || (n.flags |= 1024), r = false);
    }
    return l = r, _l(e, n), r = (n.flags & 128) !== 0, l || r ? (l = n.stateNode, t = r && typeof t.getDerivedStateFromError != "function" ? null : l.render(), n.flags |= 1, e !== null && r ? (n.child = Xt(n, e.child, null, a), n.child = Xt(n, null, t, a)) : Ge(e, n, t, a), n.memoizedState = l.state, e = n.child) : e = nt(e, n, a), e;
  }
  function Dd(e, n, t, r) {
    return Vt(), n.flags |= 256, Ge(e, n, t, r), n.child;
  }
  var Yi = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Gi(e) {
    return { baseLanes: e, cachePool: Nc() };
  }
  function Ji(e, n, t) {
    return e = e !== null ? e.childLanes & ~t : 0, n && (e |= vn), e;
  }
  function Od(e, n, t) {
    var r = n.pendingProps, a = false, l = (n.flags & 128) !== 0, s;
    if ((s = l) || (s = e !== null && e.memoizedState === null ? false : (Fe.current & 2) !== 0), s && (a = true, n.flags &= -129), s = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (ce) {
        if (a ? jt(n) : St(), (e = Ne) ? (e = Vf(e, En), e = e !== null && e.data !== "&" ? e : null, e !== null && (n.memoizedState = { dehydrated: e, treeContext: gt !== null ? { id: qn, overflow: Hn } : null, retryLane: 536870912, hydrationErrors: null }, t = gc(e), t.return = n, n.child = t, Qe = n, Ne = null)) : e = null, e === null) throw vt(n);
        return Ts(e) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var f = r.children;
      return r = r.fallback, a ? (St(), a = n.mode, f = Dl({ mode: "hidden", children: f }, a), r = Ut(r, a, t, null), f.return = n, r.return = n, f.sibling = r, n.child = f, r = n.child, r.memoizedState = Gi(t), r.childLanes = Ji(e, s, t), n.memoizedState = Yi, ba(null, r)) : (jt(n), Ki(n, f));
    }
    var y = e.memoizedState;
    if (y !== null && (f = y.dehydrated, f !== null)) {
      if (l) n.flags & 256 ? (jt(n), n.flags &= -257, n = Xi(e, n, t)) : n.memoizedState !== null ? (St(), n.child = e.child, n.flags |= 128, n = null) : (St(), f = r.fallback, a = n.mode, r = Dl({ mode: "visible", children: r.children }, a), f = Ut(f, a, t, null), f.flags |= 2, r.return = n, f.return = n, r.sibling = f, n.child = r, Xt(n, e.child, null, t), r = n.child, r.memoizedState = Gi(t), r.childLanes = Ji(e, s, t), n.memoizedState = Yi, n = ba(null, r));
      else if (jt(n), Ts(f)) {
        if (s = f.nextSibling && f.nextSibling.dataset, s) var C = s.dgst;
        s = C, r = Error(u(419)), r.stack = "", r.digest = s, ia({ value: r, source: null, stack: null }), n = Xi(e, n, t);
      } else if (Me || xr(e, n, t, false), s = (t & e.childLanes) !== 0, Me || s) {
        if (s = we, s !== null && (r = ju(s, t), r !== 0 && r !== y.retryLane)) throw y.retryLane = r, Wt(e, r), un(s, e, r), Vi;
        As(f) || Ul(), n = Xi(e, n, t);
      } else As(f) ? (n.flags |= 192, n.child = e.child, n = null) : (e = y.treeContext, Ne = Pn(f.nextSibling), Qe = n, ce = true, yt = null, En = false, e !== null && bc(n, e), n = Ki(n, r.children), n.flags |= 4096);
      return n;
    }
    return a ? (St(), f = r.fallback, a = n.mode, y = e.child, C = y.sibling, r = Gn(y, { mode: "hidden", children: r.children }), r.subtreeFlags = y.subtreeFlags & 65011712, C !== null ? f = Gn(C, f) : (f = Ut(f, a, t, null), f.flags |= 2), f.return = n, r.return = n, r.sibling = f, n.child = r, ba(null, r), r = n.child, f = e.child.memoizedState, f === null ? f = Gi(t) : (a = f.cachePool, a !== null ? (y = De._currentValue, a = a.parent !== y ? { parent: y, pool: y } : a) : a = Nc(), f = { baseLanes: f.baseLanes | t, cachePool: a }), r.memoizedState = f, r.childLanes = Ji(e, s, t), n.memoizedState = Yi, ba(e.child, r)) : (jt(n), t = e.child, e = t.sibling, t = Gn(t, { mode: "visible", children: r.children }), t.return = n, t.sibling = null, e !== null && (s = n.deletions, s === null ? (n.deletions = [e], n.flags |= 16) : s.push(e)), n.child = t, n.memoizedState = null, t);
  }
  function Ki(e, n) {
    return n = Dl({ mode: "visible", children: n }, e.mode), n.return = e, e.child = n;
  }
  function Dl(e, n) {
    return e = hn(22, e, null, n), e.lanes = 0, e;
  }
  function Xi(e, n, t) {
    return Xt(n, e.child, null, t), e = Ki(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function Md(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), pi(e.return, n, t);
  }
  function Zi(e, n, t, r, a, l) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: a, treeForkCount: l } : (s.isBackwards = n, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = t, s.tailMode = a, s.treeForkCount = l);
  }
  function Id(e, n, t) {
    var r = n.pendingProps, a = r.revealOrder, l = r.tail;
    r = r.children;
    var s = Fe.current, f = (s & 2) !== 0;
    if (f ? (s = s & 1 | 2, n.flags |= 128) : s &= 1, q(Fe, s), Ge(e, n, r, t), r = ce ? oa : 0, !f && e !== null && (e.flags & 128) !== 0) e: for (e = n.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Md(e, t, n);
      else if (e.tag === 19) Md(e, t, n);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === n) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === n) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    switch (a) {
      case "forwards":
        for (t = n.child, a = null; t !== null; ) e = t.alternate, e !== null && Sl(e) === null && (a = t), t = t.sibling;
        t = a, t === null ? (a = n.child, n.child = null) : (a = t.sibling, t.sibling = null), Zi(n, false, a, t, l, r);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (t = null, a = n.child, n.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Sl(e) === null) {
            n.child = a;
            break;
          }
          e = a.sibling, a.sibling = t, t = a, a = e;
        }
        Zi(n, true, t, null, l, r);
        break;
      case "together":
        Zi(n, false, null, null, void 0, r);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function nt(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), Et |= n.lanes, (t & n.childLanes) === 0) if (e !== null) {
      if (xr(e, n, t, false), (t & n.childLanes) === 0) return null;
    } else return null;
    if (e !== null && n.child !== e.child) throw Error(u(153));
    if (n.child !== null) {
      for (e = n.child, t = Gn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = Gn(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function es(e, n) {
    return (e.lanes & n) !== 0 ? true : (e = e.dependencies, !!(e !== null && gl(e)));
  }
  function Mm(e, n, t) {
    switch (n.tag) {
      case 3:
        Xe(n, n.stateNode.containerInfo), bt(n, De, e.memoizedState.cache), Vt();
        break;
      case 27:
      case 5:
        Ur(n);
        break;
      case 4:
        Xe(n, n.stateNode.containerInfo);
        break;
      case 10:
        bt(n, n.type, n.memoizedProps.value);
        break;
      case 31:
        if (n.memoizedState !== null) return n.flags |= 128, Ni(n), null;
        break;
      case 13:
        var r = n.memoizedState;
        if (r !== null) return r.dehydrated !== null ? (jt(n), n.flags |= 128, null) : (t & n.child.childLanes) !== 0 ? Od(e, n, t) : (jt(n), e = nt(e, n, t), e !== null ? e.sibling : null);
        jt(n);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (r = (t & n.childLanes) !== 0, r || (xr(e, n, t, false), r = (t & n.childLanes) !== 0), a) {
          if (r) return Id(e, n, t);
          n.flags |= 128;
        }
        if (a = n.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), q(Fe, Fe.current), r) break;
        return null;
      case 22:
        return n.lanes = 0, Ad(e, n, t, n.pendingProps);
      case 24:
        bt(n, De, e.memoizedState.cache);
    }
    return nt(e, n, t);
  }
  function $d(e, n, t) {
    if (e !== null) if (e.memoizedProps !== n.pendingProps) Me = true;
    else {
      if (!es(e, t) && (n.flags & 128) === 0) return Me = false, Mm(e, n, t);
      Me = (e.flags & 131072) !== 0;
    }
    else Me = false, ce && (n.flags & 1048576) !== 0 && vc(n, oa, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var r = n.pendingProps;
          if (e = Jt(n.elementType), n.type = e, typeof e == "function") li(e) ? (r = er(e, r), n.tag = 1, n = _d(null, n, e, r, t)) : (n.tag = 0, n = Qi(null, n, e, r, t));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === oe) {
                n.tag = 11, n = Pd(null, n, e, r, t);
                break e;
              } else if (a === ee) {
                n.tag = 14, n = Ld(null, n, e, r, t);
                break e;
              }
            }
            throw n = Be(e) || e, Error(u(306, n, ""));
          }
        }
        return n;
      case 0:
        return Qi(e, n, n.type, n.pendingProps, t);
      case 1:
        return r = n.type, a = er(r, n.pendingProps), _d(e, n, r, a, t);
      case 3:
        e: {
          if (Xe(n, n.stateNode.containerInfo), e === null) throw Error(u(387));
          r = n.pendingProps;
          var l = n.memoizedState;
          a = l.element, xi(e, n), ha(n, r, null, t);
          var s = n.memoizedState;
          if (r = s.cache, bt(n, De, r), r !== l.cache && hi(n, [De], t, true), pa(), r = s.element, l.isDehydrated) if (l = { element: r, isDehydrated: false, cache: s.cache }, n.updateQueue.baseState = l, n.memoizedState = l, n.flags & 256) {
            n = Dd(e, n, r, t);
            break e;
          } else if (r !== a) {
            a = Sn(Error(u(424)), n), ia(a), n = Dd(e, n, r, t);
            break e;
          } else {
            switch (e = n.stateNode.containerInfo, e.nodeType) {
              case 9:
                e = e.body;
                break;
              default:
                e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
            }
            for (Ne = Pn(e.firstChild), Qe = n, ce = true, yt = null, En = true, t = Ac(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
          }
          else {
            if (Vt(), r === a) {
              n = nt(e, n, t);
              break e;
            }
            Ge(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 26:
        return _l(e, n), e === null ? (t = Xf(n.type, null, n.pendingProps, null)) ? n.memoizedState = t : ce || (t = n.type, e = n.pendingProps, r = Xl(re.current).createElement(t), r[Ve] = n, r[tn] = e, Je(r, t, e), qe(r), n.stateNode = r) : n.memoizedState = Xf(n.type, e.memoizedProps, n.pendingProps, e.memoizedState), null;
      case 27:
        return Ur(n), e === null && ce && (r = n.stateNode = Gf(n.type, n.pendingProps, re.current), Qe = n, En = true, a = Ne, Tt(n.type) ? (zs = a, Ne = Pn(r.firstChild)) : Ne = a), Ge(e, n, n.pendingProps.children, t), _l(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && ce && ((a = r = Ne) && (r = hg(r, n.type, n.pendingProps, En), r !== null ? (n.stateNode = r, Qe = n, Ne = Pn(r.firstChild), En = false, a = true) : a = false), a || vt(n)), Ur(n), a = n.type, l = n.pendingProps, s = e !== null ? e.memoizedProps : null, r = l.children, Ps(a, l) ? r = null : s !== null && Ps(a, s) && (n.flags |= 32), n.memoizedState !== null && (a = Ei(e, n, Lm, null, null, t), Fa._currentValue = a), _l(e, n), Ge(e, n, r, t), n.child;
      case 6:
        return e === null && ce && ((e = t = Ne) && (t = mg(t, n.pendingProps, En), t !== null ? (n.stateNode = t, Qe = n, Ne = null, e = true) : e = false), e || vt(n)), null;
      case 13:
        return Od(e, n, t);
      case 4:
        return Xe(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = Xt(n, null, r, t) : Ge(e, n, r, t), n.child;
      case 11:
        return Pd(e, n, n.type, n.pendingProps, t);
      case 7:
        return Ge(e, n, n.pendingProps, t), n.child;
      case 8:
        return Ge(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Ge(e, n, n.pendingProps.children, t), n.child;
      case 10:
        return r = n.pendingProps, bt(n, n.type, r.value), Ge(e, n, r.children, t), n.child;
      case 9:
        return a = n.type._context, r = n.pendingProps.children, Yt(n), a = Ye(a), r = r(a), n.flags |= 1, Ge(e, n, r, t), n.child;
      case 14:
        return Ld(e, n, n.type, n.pendingProps, t);
      case 15:
        return Rd(e, n, n.type, n.pendingProps, t);
      case 19:
        return Id(e, n, t);
      case 31:
        return Om(e, n, t);
      case 22:
        return Ad(e, n, t, n.pendingProps);
      case 24:
        return Yt(n), r = Ye(De), e === null ? (a = yi(), a === null && (a = we, l = mi(), a.pooledCache = l, l.refCount++, l !== null && (a.pooledCacheLanes |= t), a = l), n.memoizedState = { parent: r, cache: a }, bi(n), bt(n, De, a)) : ((e.lanes & t) !== 0 && (xi(e, n), ha(n, null, null, t), pa()), a = e.memoizedState, l = n.memoizedState, a.parent !== r ? (a = { parent: r, cache: r }, n.memoizedState = a, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = a), bt(n, De, r)) : (r = l.cache, bt(n, De, r), r !== a.cache && hi(n, [De], t, true))), Ge(e, n, n.pendingProps.children, t), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(u(156, n.tag));
  }
  function tt(e) {
    e.flags |= 4;
  }
  function ns(e, n, t, r, a) {
    if ((n = (e.mode & 32) !== 0) && (n = false), n) {
      if (e.flags |= 16777216, (a & 335544128) === a) if (e.stateNode.complete) e.flags |= 8192;
      else if (hf()) e.flags |= 8192;
      else throw Kt = xl, vi;
    } else e.flags &= -16777217;
  }
  function Bd(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (e.flags |= 16777216, !rp(n)) if (hf()) e.flags |= 8192;
    else throw Kt = xl, vi;
  }
  function Ol(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? xu() : 536870912, e.lanes |= n, Tr |= n);
  }
  function xa(e, n) {
    if (!ce) switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; ) n.alternate !== null && (t = n), n = n.sibling;
        t === null ? e.tail = null : t.sibling = null;
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
        r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Ce(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
    if (n) for (var a = e.child; a !== null; ) t |= a.lanes | a.childLanes, r |= a.subtreeFlags & 65011712, r |= a.flags & 65011712, a.return = e, a = a.sibling;
    else for (a = e.child; a !== null; ) t |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n;
  }
  function Im(e, n, t) {
    var r = n.pendingProps;
    switch (ui(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ce(n), null;
      case 1:
        return Ce(n), null;
      case 3:
        return t = n.stateNode, r = null, e !== null && (r = e.memoizedState.cache), n.memoizedState.cache !== r && (n.flags |= 2048), Xn(De), ze(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (e === null || e.child === null) && (br(n) ? tt(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, di())), Ce(n), null;
      case 26:
        var a = n.type, l = n.memoizedState;
        return e === null ? (tt(n), l !== null ? (Ce(n), Bd(n, l)) : (Ce(n), ns(n, a, null, r, t))) : l ? l !== e.memoizedState ? (tt(n), Ce(n), Bd(n, l)) : (Ce(n), n.flags &= -16777217) : (e = e.memoizedProps, e !== r && tt(n), Ce(n), ns(n, a, e, r, t)), null;
      case 27:
        if (Ya(n), t = re.current, a = n.type, e !== null && n.stateNode != null) e.memoizedProps !== r && tt(n);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(u(166));
            return Ce(n), null;
          }
          e = W.current, br(n) ? xc(n) : (e = Gf(a, r, t), n.stateNode = e, tt(n));
        }
        return Ce(n), null;
      case 5:
        if (Ya(n), a = n.type, e !== null && n.stateNode != null) e.memoizedProps !== r && tt(n);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(u(166));
            return Ce(n), null;
          }
          if (l = W.current, br(n)) xc(n);
          else {
            var s = Xl(re.current);
            switch (l) {
              case 1:
                l = s.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                l = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    l = s.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    l = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                    break;
                  case "script":
                    l = s.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? l.multiple = true : r.size && (l.size = r.size);
                    break;
                  default:
                    l = typeof r.is == "string" ? s.createElement(a, { is: r.is }) : s.createElement(a);
                }
            }
            l[Ve] = n, l[tn] = r;
            e: for (s = n.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6) l.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === n) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === n) break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            n.stateNode = l;
            e: switch (Je(l, a, r), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = true;
                break e;
              default:
                r = false;
            }
            r && tt(n);
          }
        }
        return Ce(n), ns(n, n.type, e === null ? null : e.memoizedProps, n.pendingProps, t), null;
      case 6:
        if (e && n.stateNode != null) e.memoizedProps !== r && tt(n);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(u(166));
          if (e = re.current, br(n)) {
            if (e = n.stateNode, t = n.memoizedProps, r = null, a = Qe, a !== null) switch (a.tag) {
              case 27:
              case 5:
                r = a.memoizedProps;
            }
            e[Ve] = n, e = !!(e.nodeValue === t || r !== null && r.suppressHydrationWarning === true || Mf(e.nodeValue, t)), e || vt(n, true);
          } else e = Xl(e).createTextNode(r), e[Ve] = n, n.stateNode = e;
        }
        return Ce(n), null;
      case 31:
        if (t = n.memoizedState, e === null || e.memoizedState !== null) {
          if (r = br(n), t !== null) {
            if (e === null) {
              if (!r) throw Error(u(318));
              if (e = n.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(557));
              e[Ve] = n;
            } else Vt(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ce(n), e = false;
          } else t = di(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = t), e = true;
          if (!e) return n.flags & 256 ? (gn(n), n) : (gn(n), null);
          if ((n.flags & 128) !== 0) throw Error(u(558));
        }
        return Ce(n), null;
      case 13:
        if (r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = br(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(u(318));
              if (a = n.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(u(317));
              a[Ve] = n;
            } else Vt(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ce(n), a = false;
          } else a = di(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = true;
          if (!a) return n.flags & 256 ? (gn(n), n) : (gn(n), null);
        }
        return gn(n), (n.flags & 128) !== 0 ? (n.lanes = t, n) : (t = r !== null, e = e !== null && e.memoizedState !== null, t && (r = n.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), l = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (l = r.memoizedState.cachePool.pool), l !== a && (r.flags |= 2048)), t !== e && t && (n.child.flags |= 8192), Ol(n, n.updateQueue), Ce(n), null);
      case 4:
        return ze(), e === null && js(n.stateNode.containerInfo), Ce(n), null;
      case 10:
        return Xn(n.type), Ce(n), null;
      case 19:
        if (_(Fe), r = n.memoizedState, r === null) return Ce(n), null;
        if (a = (n.flags & 128) !== 0, l = r.rendering, l === null) if (a) xa(r, false);
        else {
          if (Ae !== 0 || e !== null && (e.flags & 128) !== 0) for (e = n.child; e !== null; ) {
            if (l = Sl(e), l !== null) {
              for (n.flags |= 128, xa(r, false), e = l.updateQueue, n.updateQueue = e, Ol(n, e), n.subtreeFlags = 0, e = t, t = n.child; t !== null; ) mc(t, e), t = t.sibling;
              return q(Fe, Fe.current & 1 | 2), ce && Jn(n, r.treeForkCount), n.child;
            }
            e = e.sibling;
          }
          r.tail !== null && cn() > ql && (n.flags |= 128, a = true, xa(r, false), n.lanes = 4194304);
        }
        else {
          if (!a) if (e = Sl(l), e !== null) {
            if (n.flags |= 128, a = true, e = e.updateQueue, n.updateQueue = e, Ol(n, e), xa(r, true), r.tail === null && r.tailMode === "hidden" && !l.alternate && !ce) return Ce(n), null;
          } else 2 * cn() - r.renderingStartTime > ql && t !== 536870912 && (n.flags |= 128, a = true, xa(r, false), n.lanes = 4194304);
          r.isBackwards ? (l.sibling = n.child, n.child = l) : (e = r.last, e !== null ? e.sibling = l : n.child = l, r.last = l);
        }
        return r.tail !== null ? (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = cn(), e.sibling = null, t = Fe.current, q(Fe, a ? t & 1 | 2 : t & 1), ce && Jn(n, r.treeForkCount), e) : (Ce(n), null);
      case 22:
      case 23:
        return gn(n), Si(), r = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== r && (n.flags |= 8192) : r && (n.flags |= 8192), r ? (t & 536870912) !== 0 && (n.flags & 128) === 0 && (Ce(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ce(n), t = n.updateQueue, t !== null && Ol(n, t.retryQueue), t = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), r = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (r = n.memoizedState.cachePool.pool), r !== t && (n.flags |= 2048), e !== null && _(Gt), null;
      case 24:
        return t = null, e !== null && (t = e.memoizedState.cache), n.memoizedState.cache !== t && (n.flags |= 2048), Xn(De), Ce(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, n.tag));
  }
  function $m(e, n) {
    switch (ui(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Xn(De), ze(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Ya(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (gn(n), n.alternate === null) throw Error(u(340));
          Vt();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 13:
        if (gn(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null) throw Error(u(340));
          Vt();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return _(Fe), null;
      case 4:
        return ze(), null;
      case 10:
        return Xn(n.type), null;
      case 22:
      case 23:
        return gn(n), Si(), e !== null && _(Gt), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return Xn(De), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function qd(e, n) {
    switch (ui(n), n.tag) {
      case 3:
        Xn(De), ze();
        break;
      case 26:
      case 27:
      case 5:
        Ya(n);
        break;
      case 4:
        ze();
        break;
      case 31:
        n.memoizedState !== null && gn(n);
        break;
      case 13:
        gn(n);
        break;
      case 19:
        _(Fe);
        break;
      case 10:
        Xn(n.type);
        break;
      case 22:
      case 23:
        gn(n), Si(), e !== null && _(Gt);
        break;
      case 24:
        Xn(De);
    }
  }
  function ka(e, n) {
    try {
      var t = n.updateQueue, r = t !== null ? t.lastEffect : null;
      if (r !== null) {
        var a = r.next;
        t = a;
        do {
          if ((t.tag & e) === e) {
            r = void 0;
            var l = t.create, s = t.inst;
            r = l(), s.destroy = r;
          }
          t = t.next;
        } while (t !== a);
      }
    } catch (f) {
      ge(n, n.return, f);
    }
  }
  function Nt(e, n, t) {
    try {
      var r = n.updateQueue, a = r !== null ? r.lastEffect : null;
      if (a !== null) {
        var l = a.next;
        r = l;
        do {
          if ((r.tag & e) === e) {
            var s = r.inst, f = s.destroy;
            if (f !== void 0) {
              s.destroy = void 0, a = n;
              var y = t, C = f;
              try {
                C();
              } catch (A) {
                ge(a, y, A);
              }
            }
          }
          r = r.next;
        } while (r !== l);
      }
    } catch (A) {
      ge(n, n.return, A);
    }
  }
  function Hd(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var t = e.stateNode;
      try {
        zc(n, t);
      } catch (r) {
        ge(e, e.return, r);
      }
    }
  }
  function Wd(e, n, t) {
    t.props = er(e.type, e.memoizedProps), t.state = e.memoizedState;
    try {
      t.componentWillUnmount();
    } catch (r) {
      ge(e, n, r);
    }
  }
  function wa(e, n) {
    try {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var r = e.stateNode;
            break;
          case 30:
            r = e.stateNode;
            break;
          default:
            r = e.stateNode;
        }
        typeof t == "function" ? e.refCleanup = t(r) : t.current = r;
      }
    } catch (a) {
      ge(e, n, a);
    }
  }
  function Wn(e, n) {
    var t = e.ref, r = e.refCleanup;
    if (t !== null) if (typeof r == "function") try {
      r();
    } catch (a) {
      ge(e, n, a);
    } finally {
      e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
    }
    else if (typeof t == "function") try {
      t(null);
    } catch (a) {
      ge(e, n, a);
    }
    else t.current = null;
  }
  function Ud(e) {
    var n = e.type, t = e.memoizedProps, r = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          t.autoFocus && r.focus();
          break e;
        case "img":
          t.src ? r.src = t.src : t.srcSet && (r.srcset = t.srcSet);
      }
    } catch (a) {
      ge(e, e.return, a);
    }
  }
  function ts(e, n, t) {
    try {
      var r = e.stateNode;
      sg(r, e.type, t, n), r[tn] = n;
    } catch (a) {
      ge(e, e.return, a);
    }
  }
  function Vd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Tt(e.type) || e.tag === 4;
  }
  function rs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Vd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Tt(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function as(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(e, n) : (n = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.appendChild(e), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Qn));
    else if (r !== 4 && (r === 27 && Tt(e.type) && (t = e.stateNode, n = null), e = e.child, e !== null)) for (as(e, n, t), e = e.sibling; e !== null; ) as(e, n, t), e = e.sibling;
  }
  function Ml(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (r === 27 && Tt(e.type) && (t = e.stateNode), e = e.child, e !== null)) for (Ml(e, n, t), e = e.sibling; e !== null; ) Ml(e, n, t), e = e.sibling;
  }
  function Qd(e) {
    var n = e.stateNode, t = e.memoizedProps;
    try {
      for (var r = e.type, a = n.attributes; a.length; ) n.removeAttributeNode(a[0]);
      Je(n, r, t), n[Ve] = e, n[tn] = t;
    } catch (l) {
      ge(e, e.return, l);
    }
  }
  var rt = false, Ie = false, ls = false, Yd = typeof WeakSet == "function" ? WeakSet : Set, He = null;
  function Bm(e, n) {
    if (e = e.containerInfo, Cs = lo, e = oc(e), Xo(e)) {
      if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        t = (t = e.ownerDocument) && t.defaultView || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var a = r.anchorOffset, l = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, l.nodeType;
          } catch {
            t = null;
            break e;
          }
          var s = 0, f = -1, y = -1, C = 0, A = 0, F = e, P = null;
          n: for (; ; ) {
            for (var R; F !== t || a !== 0 && F.nodeType !== 3 || (f = s + a), F !== l || r !== 0 && F.nodeType !== 3 || (y = s + r), F.nodeType === 3 && (s += F.nodeValue.length), (R = F.firstChild) !== null; ) P = F, F = R;
            for (; ; ) {
              if (F === e) break n;
              if (P === t && ++C === a && (f = s), P === l && ++A === r && (y = s), (R = F.nextSibling) !== null) break;
              F = P, P = F.parentNode;
            }
            F = R;
          }
          t = f === -1 || y === -1 ? null : { start: f, end: y };
        } else t = null;
      }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (Es = { focusedElem: e, selectionRange: t }, lo = false, He = n; He !== null; ) if (n = He, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, He = e;
    else for (; He !== null; ) {
      switch (n = He, l = n.alternate, e = n.flags, n.tag) {
        case 0:
          if ((e & 4) !== 0 && (e = n.updateQueue, e = e !== null ? e.events : null, e !== null)) for (t = 0; t < e.length; t++) a = e[t], a.ref.impl = a.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((e & 1024) !== 0 && l !== null) {
            e = void 0, t = n, a = l.memoizedProps, l = l.memoizedState, r = t.stateNode;
            try {
              var H = er(t.type, a);
              e = r.getSnapshotBeforeUpdate(H, l), r.__reactInternalSnapshotBeforeUpdate = e;
            } catch (Y) {
              ge(t, t.return, Y);
            }
          }
          break;
        case 3:
          if ((e & 1024) !== 0) {
            if (e = n.stateNode.containerInfo, t = e.nodeType, t === 9) Rs(e);
            else if (t === 1) switch (e.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Rs(e);
                break;
              default:
                e.textContent = "";
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
          if ((e & 1024) !== 0) throw Error(u(163));
      }
      if (e = n.sibling, e !== null) {
        e.return = n.return, He = e;
        break;
      }
      He = n.return;
    }
  }
  function Gd(e, n, t) {
    var r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        lt(e, t), r & 4 && ka(5, t);
        break;
      case 1:
        if (lt(e, t), r & 4) if (e = t.stateNode, n === null) try {
          e.componentDidMount();
        } catch (s) {
          ge(t, t.return, s);
        }
        else {
          var a = er(t.type, n.memoizedProps);
          n = n.memoizedState;
          try {
            e.componentDidUpdate(a, n, e.__reactInternalSnapshotBeforeUpdate);
          } catch (s) {
            ge(t, t.return, s);
          }
        }
        r & 64 && Hd(t), r & 512 && wa(t, t.return);
        break;
      case 3:
        if (lt(e, t), r & 64 && (e = t.updateQueue, e !== null)) {
          if (n = null, t.child !== null) switch (t.child.tag) {
            case 27:
            case 5:
              n = t.child.stateNode;
              break;
            case 1:
              n = t.child.stateNode;
          }
          try {
            zc(e, n);
          } catch (s) {
            ge(t, t.return, s);
          }
        }
        break;
      case 27:
        n === null && r & 4 && Qd(t);
      case 26:
      case 5:
        lt(e, t), n === null && r & 4 && Ud(t), r & 512 && wa(t, t.return);
        break;
      case 12:
        lt(e, t);
        break;
      case 31:
        lt(e, t), r & 4 && Xd(e, t);
        break;
      case 13:
        lt(e, t), r & 4 && Zd(e, t), r & 64 && (e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null && (t = Jm.bind(null, t), gg(e, t))));
        break;
      case 22:
        if (r = t.memoizedState !== null || rt, !r) {
          n = n !== null && n.memoizedState !== null || Ie, a = rt;
          var l = Ie;
          rt = r, (Ie = n) && !l ? ot(e, t, (t.subtreeFlags & 8772) !== 0) : lt(e, t), rt = a, Ie = l;
        }
        break;
      case 30:
        break;
      default:
        lt(e, t);
    }
  }
  function Jd(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Jd(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && _o(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ee = null, an = false;
  function at(e, n, t) {
    for (t = t.child; t !== null; ) Kd(e, n, t), t = t.sibling;
  }
  function Kd(e, n, t) {
    if (dn && typeof dn.onCommitFiberUnmount == "function") try {
      dn.onCommitFiberUnmount(Vr, t);
    } catch {
    }
    switch (t.tag) {
      case 26:
        Ie || Wn(t, n), at(e, n, t), t.memoizedState ? t.memoizedState.count-- : t.stateNode && (t = t.stateNode, t.parentNode.removeChild(t));
        break;
      case 27:
        Ie || Wn(t, n);
        var r = Ee, a = an;
        Tt(t.type) && (Ee = t.stateNode, an = false), at(e, n, t), Aa(t.stateNode), Ee = r, an = a;
        break;
      case 5:
        Ie || Wn(t, n);
      case 6:
        if (r = Ee, a = an, Ee = null, at(e, n, t), Ee = r, an = a, Ee !== null) if (an) try {
          (Ee.nodeType === 9 ? Ee.body : Ee.nodeName === "HTML" ? Ee.ownerDocument.body : Ee).removeChild(t.stateNode);
        } catch (l) {
          ge(t, n, l);
        }
        else try {
          Ee.removeChild(t.stateNode);
        } catch (l) {
          ge(t, n, l);
        }
        break;
      case 18:
        Ee !== null && (an ? (e = Ee, Wf(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.stateNode), $r(e)) : Wf(Ee, t.stateNode));
        break;
      case 4:
        r = Ee, a = an, Ee = t.stateNode.containerInfo, an = true, at(e, n, t), Ee = r, an = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Nt(2, t, n), Ie || Nt(4, t, n), at(e, n, t);
        break;
      case 1:
        Ie || (Wn(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function" && Wd(t, n, r)), at(e, n, t);
        break;
      case 21:
        at(e, n, t);
        break;
      case 22:
        Ie = (r = Ie) || t.memoizedState !== null, at(e, n, t), Ie = r;
        break;
      default:
        at(e, n, t);
    }
  }
  function Xd(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        $r(e);
      } catch (t) {
        ge(n, n.return, t);
      }
    }
  }
  function Zd(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      $r(e);
    } catch (t) {
      ge(n, n.return, t);
    }
  }
  function qm(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Yd()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Yd()), n;
      default:
        throw Error(u(435, e.tag));
    }
  }
  function Il(e, n) {
    var t = qm(e);
    n.forEach(function(r) {
      if (!t.has(r)) {
        t.add(r);
        var a = Km.bind(null, e, r);
        r.then(a, a);
      }
    });
  }
  function ln(e, n) {
    var t = n.deletions;
    if (t !== null) for (var r = 0; r < t.length; r++) {
      var a = t[r], l = e, s = n, f = s;
      e: for (; f !== null; ) {
        switch (f.tag) {
          case 27:
            if (Tt(f.type)) {
              Ee = f.stateNode, an = false;
              break e;
            }
            break;
          case 5:
            Ee = f.stateNode, an = false;
            break e;
          case 3:
          case 4:
            Ee = f.stateNode.containerInfo, an = true;
            break e;
        }
        f = f.return;
      }
      if (Ee === null) throw Error(u(160));
      Kd(l, s, a), Ee = null, an = false, l = a.alternate, l !== null && (l.return = null), a.return = null;
    }
    if (n.subtreeFlags & 13886) for (n = n.child; n !== null; ) ef(n, e), n = n.sibling;
  }
  var Mn = null;
  function ef(e, n) {
    var t = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ln(n, e), on(e), r & 4 && (Nt(3, e, e.return), ka(3, e), Nt(5, e, e.return));
        break;
      case 1:
        ln(n, e), on(e), r & 512 && (Ie || t === null || Wn(t, t.return)), r & 64 && rt && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (t = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = t === null ? r : t.concat(r))));
        break;
      case 26:
        var a = Mn;
        if (ln(n, e), on(e), r & 512 && (Ie || t === null || Wn(t, t.return)), r & 4) {
          var l = t !== null ? t.memoizedState : null;
          if (r = e.memoizedState, t === null) if (r === null) if (e.stateNode === null) {
            e: {
              r = e.type, t = e.memoizedProps, a = a.ownerDocument || a;
              n: switch (r) {
                case "title":
                  l = a.getElementsByTagName("title")[0], (!l || l[Gr] || l[Ve] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = a.createElement(r), a.head.insertBefore(l, a.querySelector("head > title"))), Je(l, r, t), l[Ve] = e, qe(l), r = l;
                  break e;
                case "link":
                  var s = np("link", "href", a).get(r + (t.href || ""));
                  if (s) {
                    for (var f = 0; f < s.length; f++) if (l = s[f], l.getAttribute("href") === (t.href == null || t.href === "" ? null : t.href) && l.getAttribute("rel") === (t.rel == null ? null : t.rel) && l.getAttribute("title") === (t.title == null ? null : t.title) && l.getAttribute("crossorigin") === (t.crossOrigin == null ? null : t.crossOrigin)) {
                      s.splice(f, 1);
                      break n;
                    }
                  }
                  l = a.createElement(r), Je(l, r, t), a.head.appendChild(l);
                  break;
                case "meta":
                  if (s = np("meta", "content", a).get(r + (t.content || ""))) {
                    for (f = 0; f < s.length; f++) if (l = s[f], l.getAttribute("content") === (t.content == null ? null : "" + t.content) && l.getAttribute("name") === (t.name == null ? null : t.name) && l.getAttribute("property") === (t.property == null ? null : t.property) && l.getAttribute("http-equiv") === (t.httpEquiv == null ? null : t.httpEquiv) && l.getAttribute("charset") === (t.charSet == null ? null : t.charSet)) {
                      s.splice(f, 1);
                      break n;
                    }
                  }
                  l = a.createElement(r), Je(l, r, t), a.head.appendChild(l);
                  break;
                default:
                  throw Error(u(468, r));
              }
              l[Ve] = e, qe(l), r = l;
            }
            e.stateNode = r;
          } else tp(a, e.type, e.stateNode);
          else e.stateNode = ep(a, r, e.memoizedProps);
          else l !== r ? (l === null ? t.stateNode !== null && (t = t.stateNode, t.parentNode.removeChild(t)) : l.count--, r === null ? tp(a, e.type, e.stateNode) : ep(a, r, e.memoizedProps)) : r === null && e.stateNode !== null && ts(e, e.memoizedProps, t.memoizedProps);
        }
        break;
      case 27:
        ln(n, e), on(e), r & 512 && (Ie || t === null || Wn(t, t.return)), t !== null && r & 4 && ts(e, e.memoizedProps, t.memoizedProps);
        break;
      case 5:
        if (ln(n, e), on(e), r & 512 && (Ie || t === null || Wn(t, t.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            ur(a, "");
          } catch (H) {
            ge(e, e.return, H);
          }
        }
        r & 4 && e.stateNode != null && (a = e.memoizedProps, ts(e, a, t !== null ? t.memoizedProps : a)), r & 1024 && (ls = true);
        break;
      case 6:
        if (ln(n, e), on(e), r & 4) {
          if (e.stateNode === null) throw Error(u(162));
          r = e.memoizedProps, t = e.stateNode;
          try {
            t.nodeValue = r;
          } catch (H) {
            ge(e, e.return, H);
          }
        }
        break;
      case 3:
        if (no = null, a = Mn, Mn = Zl(n.containerInfo), ln(n, e), Mn = a, on(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
          $r(n.containerInfo);
        } catch (H) {
          ge(e, e.return, H);
        }
        ls && (ls = false, nf(e));
        break;
      case 4:
        r = Mn, Mn = Zl(e.stateNode.containerInfo), ln(n, e), on(e), Mn = r;
        break;
      case 12:
        ln(n, e), on(e);
        break;
      case 31:
        ln(n, e), on(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, Il(e, r)));
        break;
      case 13:
        ln(n, e), on(e), e.child.flags & 8192 && e.memoizedState !== null != (t !== null && t.memoizedState !== null) && (Bl = cn()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, Il(e, r)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var y = t !== null && t.memoizedState !== null, C = rt, A = Ie;
        if (rt = C || a, Ie = A || y, ln(n, e), Ie = A, rt = C, on(e), r & 8192) e: for (n = e.stateNode, n._visibility = a ? n._visibility & -2 : n._visibility | 1, a && (t === null || y || rt || Ie || nr(e)), t = null, n = e; ; ) {
          if (n.tag === 5 || n.tag === 26) {
            if (t === null) {
              y = t = n;
              try {
                if (l = y.stateNode, a) s = l.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                else {
                  f = y.stateNode;
                  var F = y.memoizedProps.style, P = F != null && F.hasOwnProperty("display") ? F.display : null;
                  f.style.display = P == null || typeof P == "boolean" ? "" : ("" + P).trim();
                }
              } catch (H) {
                ge(y, y.return, H);
              }
            }
          } else if (n.tag === 6) {
            if (t === null) {
              y = n;
              try {
                y.stateNode.nodeValue = a ? "" : y.memoizedProps;
              } catch (H) {
                ge(y, y.return, H);
              }
            }
          } else if (n.tag === 18) {
            if (t === null) {
              y = n;
              try {
                var R = y.stateNode;
                a ? Uf(R, true) : Uf(y.stateNode, false);
              } catch (H) {
                ge(y, y.return, H);
              }
            }
          } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
            n.child.return = n, n = n.child;
            continue;
          }
          if (n === e) break e;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === e) break e;
            t === n && (t = null), n = n.return;
          }
          t === n && (t = null), n.sibling.return = n.return, n = n.sibling;
        }
        r & 4 && (r = e.updateQueue, r !== null && (t = r.retryQueue, t !== null && (r.retryQueue = null, Il(e, t))));
        break;
      case 19:
        ln(n, e), on(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, Il(e, r)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ln(n, e), on(e);
    }
  }
  function on(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var t, r = e.return; r !== null; ) {
          if (Vd(r)) {
            t = r;
            break;
          }
          r = r.return;
        }
        if (t == null) throw Error(u(160));
        switch (t.tag) {
          case 27:
            var a = t.stateNode, l = rs(e);
            Ml(e, l, a);
            break;
          case 5:
            var s = t.stateNode;
            t.flags & 32 && (ur(s, ""), t.flags &= -33);
            var f = rs(e);
            Ml(e, f, s);
            break;
          case 3:
          case 4:
            var y = t.stateNode.containerInfo, C = rs(e);
            as(e, C, y);
            break;
          default:
            throw Error(u(161));
        }
      } catch (A) {
        ge(e, e.return, A);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function nf(e) {
    if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
      var n = e;
      nf(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
    }
  }
  function lt(e, n) {
    if (n.subtreeFlags & 8772) for (n = n.child; n !== null; ) Gd(e, n.alternate, n), n = n.sibling;
  }
  function nr(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Nt(4, n, n.return), nr(n);
          break;
        case 1:
          Wn(n, n.return);
          var t = n.stateNode;
          typeof t.componentWillUnmount == "function" && Wd(n, n.return, t), nr(n);
          break;
        case 27:
          Aa(n.stateNode);
        case 26:
        case 5:
          Wn(n, n.return), nr(n);
          break;
        case 22:
          n.memoizedState === null && nr(n);
          break;
        case 30:
          nr(n);
          break;
        default:
          nr(n);
      }
      e = e.sibling;
    }
  }
  function ot(e, n, t) {
    for (t = t && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var r = n.alternate, a = e, l = n, s = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ot(a, l, t), ka(4, l);
          break;
        case 1:
          if (ot(a, l, t), r = l, a = r.stateNode, typeof a.componentDidMount == "function") try {
            a.componentDidMount();
          } catch (C) {
            ge(r, r.return, C);
          }
          if (r = l, a = r.updateQueue, a !== null) {
            var f = r.stateNode;
            try {
              var y = a.shared.hiddenCallbacks;
              if (y !== null) for (a.shared.hiddenCallbacks = null, a = 0; a < y.length; a++) Tc(y[a], f);
            } catch (C) {
              ge(r, r.return, C);
            }
          }
          t && s & 64 && Hd(l), wa(l, l.return);
          break;
        case 27:
          Qd(l);
        case 26:
        case 5:
          ot(a, l, t), t && r === null && s & 4 && Ud(l), wa(l, l.return);
          break;
        case 12:
          ot(a, l, t);
          break;
        case 31:
          ot(a, l, t), t && s & 4 && Xd(a, l);
          break;
        case 13:
          ot(a, l, t), t && s & 4 && Zd(a, l);
          break;
        case 22:
          l.memoizedState === null && ot(a, l, t), wa(l, l.return);
          break;
        case 30:
          break;
        default:
          ot(a, l, t);
      }
      n = n.sibling;
    }
  }
  function os(e, n) {
    var t = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== t && (e != null && e.refCount++, t != null && sa(t));
  }
  function is(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && sa(e));
  }
  function In(e, n, t, r) {
    if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) tf(e, n, t, r), n = n.sibling;
  }
  function tf(e, n, t, r) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        In(e, n, t, r), a & 2048 && ka(9, n);
        break;
      case 1:
        In(e, n, t, r);
        break;
      case 3:
        In(e, n, t, r), a & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && sa(e)));
        break;
      case 12:
        if (a & 2048) {
          In(e, n, t, r), e = n.stateNode;
          try {
            var l = n.memoizedProps, s = l.id, f = l.onPostCommit;
            typeof f == "function" && f(s, n.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
          } catch (y) {
            ge(n, n.return, y);
          }
        } else In(e, n, t, r);
        break;
      case 31:
        In(e, n, t, r);
        break;
      case 13:
        In(e, n, t, r);
        break;
      case 23:
        break;
      case 22:
        l = n.stateNode, s = n.alternate, n.memoizedState !== null ? l._visibility & 2 ? In(e, n, t, r) : ja(e, n) : l._visibility & 2 ? In(e, n, t, r) : (l._visibility |= 2, Lr(e, n, t, r, (n.subtreeFlags & 10256) !== 0 || false)), a & 2048 && os(s, n);
        break;
      case 24:
        In(e, n, t, r), a & 2048 && is(n.alternate, n);
        break;
      default:
        In(e, n, t, r);
    }
  }
  function Lr(e, n, t, r, a) {
    for (a = a && ((n.subtreeFlags & 10256) !== 0 || false), n = n.child; n !== null; ) {
      var l = e, s = n, f = t, y = r, C = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Lr(l, s, f, y, a), ka(8, s);
          break;
        case 23:
          break;
        case 22:
          var A = s.stateNode;
          s.memoizedState !== null ? A._visibility & 2 ? Lr(l, s, f, y, a) : ja(l, s) : (A._visibility |= 2, Lr(l, s, f, y, a)), a && C & 2048 && os(s.alternate, s);
          break;
        case 24:
          Lr(l, s, f, y, a), a && C & 2048 && is(s.alternate, s);
          break;
        default:
          Lr(l, s, f, y, a);
      }
      n = n.sibling;
    }
  }
  function ja(e, n) {
    if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) {
      var t = e, r = n, a = r.flags;
      switch (r.tag) {
        case 22:
          ja(t, r), a & 2048 && os(r.alternate, r);
          break;
        case 24:
          ja(t, r), a & 2048 && is(r.alternate, r);
          break;
        default:
          ja(t, r);
      }
      n = n.sibling;
    }
  }
  var Sa = 8192;
  function Rr(e, n, t) {
    if (e.subtreeFlags & Sa) for (e = e.child; e !== null; ) rf(e, n, t), e = e.sibling;
  }
  function rf(e, n, t) {
    switch (e.tag) {
      case 26:
        Rr(e, n, t), e.flags & Sa && e.memoizedState !== null && Pg(t, Mn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Rr(e, n, t);
        break;
      case 3:
      case 4:
        var r = Mn;
        Mn = Zl(e.stateNode.containerInfo), Rr(e, n, t), Mn = r;
        break;
      case 22:
        e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Sa, Sa = 16777216, Rr(e, n, t), Sa = r) : Rr(e, n, t));
        break;
      default:
        Rr(e, n, t);
    }
  }
  function af(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function Na(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null) for (var t = 0; t < n.length; t++) {
        var r = n[t];
        He = r, of(r, e);
      }
      af(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) lf(e), e = e.sibling;
  }
  function lf(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Na(e), e.flags & 2048 && Nt(9, e, e.return);
        break;
      case 3:
        Na(e);
        break;
      case 12:
        Na(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, $l(e)) : Na(e);
        break;
      default:
        Na(e);
    }
  }
  function $l(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null) for (var t = 0; t < n.length; t++) {
        var r = n[t];
        He = r, of(r, e);
      }
      af(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          Nt(8, n, n.return), $l(n);
          break;
        case 22:
          t = n.stateNode, t._visibility & 2 && (t._visibility &= -3, $l(n));
          break;
        default:
          $l(n);
      }
      e = e.sibling;
    }
  }
  function of(e, n) {
    for (; He !== null; ) {
      var t = He;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Nt(8, t, n);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var r = t.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          sa(t.memoizedState.cache);
      }
      if (r = t.child, r !== null) r.return = t, He = r;
      else e: for (t = e; He !== null; ) {
        r = He;
        var a = r.sibling, l = r.return;
        if (Jd(r), r === t) {
          He = null;
          break e;
        }
        if (a !== null) {
          a.return = l, He = a;
          break e;
        }
        He = l;
      }
    }
  }
  var Hm = { getCacheForType: function(e) {
    var n = Ye(De), t = n.data.get(e);
    return t === void 0 && (t = e(), n.data.set(e, t)), t;
  }, cacheSignal: function() {
    return Ye(De).controller.signal;
  } }, Wm = typeof WeakMap == "function" ? WeakMap : Map, pe = 0, we = null, ae = null, ie = 0, me = 0, yn = null, Ct = false, Ar = false, ss = false, it = 0, Ae = 0, Et = 0, tr = 0, us = 0, vn = 0, Tr = 0, Ca = null, sn = null, cs = false, Bl = 0, sf = 0, ql = 1 / 0, Hl = null, Pt = null, $e = 0, Lt = null, zr = null, st = 0, ds = 0, fs = null, uf = null, Ea = 0, ps = null;
  function bn() {
    return (pe & 2) !== 0 && ie !== 0 ? ie & -ie : T.T !== null ? bs() : Su();
  }
  function cf() {
    if (vn === 0) if ((ie & 536870912) === 0 || ce) {
      var e = Ka;
      Ka <<= 1, (Ka & 3932160) === 0 && (Ka = 262144), vn = e;
    } else vn = 536870912;
    return e = mn.current, e !== null && (e.flags |= 32), vn;
  }
  function un(e, n, t) {
    (e === we && (me === 2 || me === 9) || e.cancelPendingCommit !== null) && (Fr(e, 0), Rt(e, ie, vn, false)), Yr(e, t), ((pe & 2) === 0 || e !== we) && (e === we && ((pe & 2) === 0 && (tr |= t), Ae === 4 && Rt(e, ie, vn, false)), Un(e));
  }
  function df(e, n, t) {
    if ((pe & 6) !== 0) throw Error(u(327));
    var r = !t && (n & 127) === 0 && (n & e.expiredLanes) === 0 || Qr(e, n), a = r ? Qm(e, n) : ms(e, n, true), l = r;
    do {
      if (a === 0) {
        Ar && !r && Rt(e, n, 0, false);
        break;
      } else {
        if (t = e.current.alternate, l && !Um(t)) {
          a = ms(e, n, false), l = false;
          continue;
        }
        if (a === 2) {
          if (l = n, e.errorRecoveryDisabledLanes & l) var s = 0;
          else s = e.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
          if (s !== 0) {
            n = s;
            e: {
              var f = e;
              a = Ca;
              var y = f.current.memoizedState.isDehydrated;
              if (y && (Fr(f, s).flags |= 256), s = ms(f, s, false), s !== 2) {
                if (ss && !y) {
                  f.errorRecoveryDisabledLanes |= l, tr |= l, a = 4;
                  break e;
                }
                l = sn, sn = a, l !== null && (sn === null ? sn = l : sn.push.apply(sn, l));
              }
              a = s;
            }
            if (l = false, a !== 2) continue;
          }
        }
        if (a === 1) {
          Fr(e, 0), Rt(e, n, 0, true);
          break;
        }
        e: {
          switch (r = e, l = a, l) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Rt(r, n, vn, !Ct);
              break e;
            case 2:
              sn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((n & 62914560) === n && (a = Bl + 300 - cn(), 10 < a)) {
            if (Rt(r, n, vn, !Ct), Za(r, 0, true) !== 0) break e;
            st = n, r.timeoutHandle = qf(ff.bind(null, r, t, sn, Hl, cs, n, vn, tr, Tr, Ct, l, "Throttled", -0, 0), a);
            break e;
          }
          ff(r, t, sn, Hl, cs, n, vn, tr, Tr, Ct, l, null, -0, 0);
        }
      }
      break;
    } while (true);
    Un(e);
  }
  function ff(e, n, t, r, a, l, s, f, y, C, A, F, P, R) {
    if (e.timeoutHandle = -1, F = n.subtreeFlags, F & 8192 || (F & 16785408) === 16785408) {
      F = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: Qn }, rf(n, l, F);
      var H = (l & 62914560) === l ? Bl - cn() : (l & 4194048) === l ? sf - cn() : 0;
      if (H = Lg(F, H), H !== null) {
        st = l, e.cancelPendingCommit = H(xf.bind(null, e, n, l, t, r, a, s, f, y, A, F, null, P, R)), Rt(e, l, s, !C);
        return;
      }
    }
    xf(e, n, l, t, r, a, s, f, y);
  }
  function Um(e) {
    for (var n = e; ; ) {
      var t = n.tag;
      if ((t === 0 || t === 11 || t === 15) && n.flags & 16384 && (t = n.updateQueue, t !== null && (t = t.stores, t !== null))) for (var r = 0; r < t.length; r++) {
        var a = t[r], l = a.getSnapshot;
        a = a.value;
        try {
          if (!pn(l(), a)) return false;
        } catch {
          return false;
        }
      }
      if (t = n.child, n.subtreeFlags & 16384 && t !== null) t.return = n, n = t;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return true;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return true;
  }
  function Rt(e, n, t, r) {
    n &= ~us, n &= ~tr, e.suspendedLanes |= n, e.pingedLanes &= ~n, r && (e.warmLanes |= n), r = e.expirationTimes;
    for (var a = n; 0 < a; ) {
      var l = 31 - fn(a), s = 1 << l;
      r[l] = -1, a &= ~s;
    }
    t !== 0 && ku(e, t, n);
  }
  function Wl() {
    return (pe & 6) === 0 ? (Pa(0), false) : true;
  }
  function hs() {
    if (ae !== null) {
      if (me === 0) var e = ae.return;
      else e = ae, Kn = Qt = null, Ri(e), Sr = null, ca = 0, e = ae;
      for (; e !== null; ) qd(e.alternate, e), e = e.return;
      ae = null;
    }
  }
  function Fr(e, n) {
    var t = e.timeoutHandle;
    t !== -1 && (e.timeoutHandle = -1, dg(t)), t = e.cancelPendingCommit, t !== null && (e.cancelPendingCommit = null, t()), st = 0, hs(), we = e, ae = t = Gn(e.current, null), ie = n, me = 0, yn = null, Ct = false, Ar = Qr(e, n), ss = false, Tr = vn = us = tr = Et = Ae = 0, sn = Ca = null, cs = false, (n & 8) !== 0 && (n |= n & 32);
    var r = e.entangledLanes;
    if (r !== 0) for (e = e.entanglements, r &= n; 0 < r; ) {
      var a = 31 - fn(r), l = 1 << a;
      n |= e[a], r &= ~l;
    }
    return it = n, dl(), t;
  }
  function pf(e, n) {
    Z = null, T.H = va, n === jr || n === bl ? (n = Pc(), me = 3) : n === vi ? (n = Pc(), me = 4) : me = n === Vi ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, yn = n, ae === null && (Ae = 1, zl(e, Sn(n, e.current)));
  }
  function hf() {
    var e = mn.current;
    return e === null ? true : (ie & 4194048) === ie ? On === null : (ie & 62914560) === ie || (ie & 536870912) !== 0 ? e === On : false;
  }
  function mf() {
    var e = T.H;
    return T.H = va, e === null ? va : e;
  }
  function gf() {
    var e = T.A;
    return T.A = Hm, e;
  }
  function Ul() {
    Ae = 4, Ct || (ie & 4194048) !== ie && mn.current !== null || (Ar = true), (Et & 134217727) === 0 && (tr & 134217727) === 0 || we === null || Rt(we, ie, vn, false);
  }
  function ms(e, n, t) {
    var r = pe;
    pe |= 2;
    var a = mf(), l = gf();
    (we !== e || ie !== n) && (Hl = null, Fr(e, n)), n = false;
    var s = Ae;
    e: do
      try {
        if (me !== 0 && ae !== null) {
          var f = ae, y = yn;
          switch (me) {
            case 8:
              hs(), s = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              mn.current === null && (n = true);
              var C = me;
              if (me = 0, yn = null, _r(e, f, y, C), t && Ar) {
                s = 0;
                break e;
              }
              break;
            default:
              C = me, me = 0, yn = null, _r(e, f, y, C);
          }
        }
        Vm(), s = Ae;
        break;
      } catch (A) {
        pf(e, A);
      }
    while (true);
    return n && e.shellSuspendCounter++, Kn = Qt = null, pe = r, T.H = a, T.A = l, ae === null && (we = null, ie = 0, dl()), s;
  }
  function Vm() {
    for (; ae !== null; ) yf(ae);
  }
  function Qm(e, n) {
    var t = pe;
    pe |= 2;
    var r = mf(), a = gf();
    we !== e || ie !== n ? (Hl = null, ql = cn() + 500, Fr(e, n)) : Ar = Qr(e, n);
    e: do
      try {
        if (me !== 0 && ae !== null) {
          n = ae;
          var l = yn;
          n: switch (me) {
            case 1:
              me = 0, yn = null, _r(e, n, l, 1);
              break;
            case 2:
            case 9:
              if (Cc(l)) {
                me = 0, yn = null, vf(n);
                break;
              }
              n = function() {
                me !== 2 && me !== 9 || we !== e || (me = 7), Un(e);
              }, l.then(n, n);
              break e;
            case 3:
              me = 7;
              break e;
            case 4:
              me = 5;
              break e;
            case 7:
              Cc(l) ? (me = 0, yn = null, vf(n)) : (me = 0, yn = null, _r(e, n, l, 7));
              break;
            case 5:
              var s = null;
              switch (ae.tag) {
                case 26:
                  s = ae.memoizedState;
                case 5:
                case 27:
                  var f = ae;
                  if (s ? rp(s) : f.stateNode.complete) {
                    me = 0, yn = null;
                    var y = f.sibling;
                    if (y !== null) ae = y;
                    else {
                      var C = f.return;
                      C !== null ? (ae = C, Vl(C)) : ae = null;
                    }
                    break n;
                  }
              }
              me = 0, yn = null, _r(e, n, l, 5);
              break;
            case 6:
              me = 0, yn = null, _r(e, n, l, 6);
              break;
            case 8:
              hs(), Ae = 6;
              break e;
            default:
              throw Error(u(462));
          }
        }
        Ym();
        break;
      } catch (A) {
        pf(e, A);
      }
    while (true);
    return Kn = Qt = null, T.H = r, T.A = a, pe = t, ae !== null ? 0 : (we = null, ie = 0, dl(), Ae);
  }
  function Ym() {
    for (; ae !== null && !yh(); ) yf(ae);
  }
  function yf(e) {
    var n = $d(e.alternate, e, it);
    e.memoizedProps = e.pendingProps, n === null ? Vl(e) : ae = n;
  }
  function vf(e) {
    var n = e, t = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Fd(t, n, n.pendingProps, n.type, void 0, ie);
        break;
      case 11:
        n = Fd(t, n, n.pendingProps, n.type.render, n.ref, ie);
        break;
      case 5:
        Ri(n);
      default:
        qd(t, n), n = ae = mc(n, it), n = $d(t, n, it);
    }
    e.memoizedProps = e.pendingProps, n === null ? Vl(e) : ae = n;
  }
  function _r(e, n, t, r) {
    Kn = Qt = null, Ri(n), Sr = null, ca = 0;
    var a = n.return;
    try {
      if (Dm(e, a, n, t, ie)) {
        Ae = 1, zl(e, Sn(t, e.current)), ae = null;
        return;
      }
    } catch (l) {
      if (a !== null) throw ae = a, l;
      Ae = 1, zl(e, Sn(t, e.current)), ae = null;
      return;
    }
    n.flags & 32768 ? (ce || r === 1 ? e = true : Ar || (ie & 536870912) !== 0 ? e = false : (Ct = e = true, (r === 2 || r === 9 || r === 3 || r === 6) && (r = mn.current, r !== null && r.tag === 13 && (r.flags |= 16384))), bf(n, e)) : Vl(n);
  }
  function Vl(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        bf(n, Ct);
        return;
      }
      e = n.return;
      var t = Im(n.alternate, n, it);
      if (t !== null) {
        ae = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        ae = n;
        return;
      }
      ae = n = e;
    } while (n !== null);
    Ae === 0 && (Ae = 5);
  }
  function bf(e, n) {
    do {
      var t = $m(e.alternate, e);
      if (t !== null) {
        t.flags &= 32767, ae = t;
        return;
      }
      if (t = e.return, t !== null && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !n && (e = e.sibling, e !== null)) {
        ae = e;
        return;
      }
      ae = e = t;
    } while (e !== null);
    Ae = 6, ae = null;
  }
  function xf(e, n, t, r, a, l, s, f, y) {
    e.cancelPendingCommit = null;
    do
      Ql();
    while ($e !== 0);
    if ((pe & 6) !== 0) throw Error(u(327));
    if (n !== null) {
      if (n === e.current) throw Error(u(177));
      if (l = n.lanes | n.childLanes, l |= ri, Eh(e, t, l, s, f, y), e === we && (ae = we = null, ie = 0), zr = n, Lt = e, st = t, ds = l, fs = a, uf = r, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Xm(Ga, function() {
        return Nf(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), r = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || r) {
        r = T.T, T.T = null, a = B.p, B.p = 2, s = pe, pe |= 4;
        try {
          Bm(e, n, t);
        } finally {
          pe = s, B.p = a, T.T = r;
        }
      }
      $e = 1, kf(), wf(), jf();
    }
  }
  function kf() {
    if ($e === 1) {
      $e = 0;
      var e = Lt, n = zr, t = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || t) {
        t = T.T, T.T = null;
        var r = B.p;
        B.p = 2;
        var a = pe;
        pe |= 4;
        try {
          ef(n, e);
          var l = Es, s = oc(e.containerInfo), f = l.focusedElem, y = l.selectionRange;
          if (s !== f && f && f.ownerDocument && lc(f.ownerDocument.documentElement, f)) {
            if (y !== null && Xo(f)) {
              var C = y.start, A = y.end;
              if (A === void 0 && (A = C), "selectionStart" in f) f.selectionStart = C, f.selectionEnd = Math.min(A, f.value.length);
              else {
                var F = f.ownerDocument || document, P = F && F.defaultView || window;
                if (P.getSelection) {
                  var R = P.getSelection(), H = f.textContent.length, Y = Math.min(y.start, H), xe = y.end === void 0 ? Y : Math.min(y.end, H);
                  !R.extend && Y > xe && (s = xe, xe = Y, Y = s);
                  var j = ac(f, Y), b = ac(f, xe);
                  if (j && b && (R.rangeCount !== 1 || R.anchorNode !== j.node || R.anchorOffset !== j.offset || R.focusNode !== b.node || R.focusOffset !== b.offset)) {
                    var N = F.createRange();
                    N.setStart(j.node, j.offset), R.removeAllRanges(), Y > xe ? (R.addRange(N), R.extend(b.node, b.offset)) : (N.setEnd(b.node, b.offset), R.addRange(N));
                  }
                }
              }
            }
            for (F = [], R = f; R = R.parentNode; ) R.nodeType === 1 && F.push({ element: R, left: R.scrollLeft, top: R.scrollTop });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < F.length; f++) {
              var z = F[f];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          lo = !!Cs, Es = Cs = null;
        } finally {
          pe = a, B.p = r, T.T = t;
        }
      }
      e.current = n, $e = 2;
    }
  }
  function wf() {
    if ($e === 2) {
      $e = 0;
      var e = Lt, n = zr, t = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || t) {
        t = T.T, T.T = null;
        var r = B.p;
        B.p = 2;
        var a = pe;
        pe |= 4;
        try {
          Gd(e, n.alternate, n);
        } finally {
          pe = a, B.p = r, T.T = t;
        }
      }
      $e = 3;
    }
  }
  function jf() {
    if ($e === 4 || $e === 3) {
      $e = 0, vh();
      var e = Lt, n = zr, t = st, r = uf;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? $e = 5 : ($e = 0, zr = Lt = null, Sf(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Pt = null), zo(t), n = n.stateNode, dn && typeof dn.onCommitFiberRoot == "function") try {
        dn.onCommitFiberRoot(Vr, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
      if (r !== null) {
        n = T.T, a = B.p, B.p = 2, T.T = null;
        try {
          for (var l = e.onRecoverableError, s = 0; s < r.length; s++) {
            var f = r[s];
            l(f.value, { componentStack: f.stack });
          }
        } finally {
          T.T = n, B.p = a;
        }
      }
      (st & 3) !== 0 && Ql(), Un(e), a = e.pendingLanes, (t & 261930) !== 0 && (a & 42) !== 0 ? e === ps ? Ea++ : (Ea = 0, ps = e) : Ea = 0, Pa(0);
    }
  }
  function Sf(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, sa(n)));
  }
  function Ql() {
    return kf(), wf(), jf(), Nf();
  }
  function Nf() {
    if ($e !== 5) return false;
    var e = Lt, n = ds;
    ds = 0;
    var t = zo(st), r = T.T, a = B.p;
    try {
      B.p = 32 > t ? 32 : t, T.T = null, t = fs, fs = null;
      var l = Lt, s = st;
      if ($e = 0, zr = Lt = null, st = 0, (pe & 6) !== 0) throw Error(u(331));
      var f = pe;
      if (pe |= 4, lf(l.current), tf(l, l.current, s, t), pe = f, Pa(0, false), dn && typeof dn.onPostCommitFiberRoot == "function") try {
        dn.onPostCommitFiberRoot(Vr, l);
      } catch {
      }
      return true;
    } finally {
      B.p = a, T.T = r, Sf(e, n);
    }
  }
  function Cf(e, n, t) {
    n = Sn(t, n), n = Ui(e.stateNode, n, 2), e = wt(e, n, 2), e !== null && (Yr(e, 2), Un(e));
  }
  function ge(e, n, t) {
    if (e.tag === 3) Cf(e, e, t);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        Cf(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Pt === null || !Pt.has(r))) {
          e = Sn(t, e), t = Cd(2), r = wt(n, t, 2), r !== null && (Ed(t, r, n, e), Yr(r, 2), Un(r));
          break;
        }
      }
      n = n.return;
    }
  }
  function gs(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Wm();
      var a = /* @__PURE__ */ new Set();
      r.set(n, a);
    } else a = r.get(n), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(n, a));
    a.has(t) || (ss = true, a.add(t), e = Gm.bind(null, e, n, t), n.then(e, e));
  }
  function Gm(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), e.pingedLanes |= e.suspendedLanes & t, e.warmLanes &= ~t, we === e && (ie & t) === t && (Ae === 4 || Ae === 3 && (ie & 62914560) === ie && 300 > cn() - Bl ? (pe & 2) === 0 && Fr(e, 0) : us |= t, Tr === ie && (Tr = 0)), Un(e);
  }
  function Ef(e, n) {
    n === 0 && (n = xu()), e = Wt(e, n), e !== null && (Yr(e, n), Un(e));
  }
  function Jm(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), Ef(e, t);
  }
  function Km(e, n) {
    var t = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var r = e.stateNode, a = e.memoizedState;
        a !== null && (t = a.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    r !== null && r.delete(n), Ef(e, t);
  }
  function Xm(e, n) {
    return Lo(e, n);
  }
  var Yl = null, Dr = null, ys = false, Gl = false, vs = false, At = 0;
  function Un(e) {
    e !== Dr && e.next === null && (Dr === null ? Yl = Dr = e : Dr = Dr.next = e), Gl = true, ys || (ys = true, eg());
  }
  function Pa(e, n) {
    if (!vs && Gl) {
      vs = true;
      do
        for (var t = false, r = Yl; r !== null; ) {
          if (e !== 0) {
            var a = r.pendingLanes;
            if (a === 0) var l = 0;
            else {
              var s = r.suspendedLanes, f = r.pingedLanes;
              l = (1 << 31 - fn(42 | e) + 1) - 1, l &= a & ~(s & ~f), l = l & 201326741 ? l & 201326741 | 1 : l ? l | 2 : 0;
            }
            l !== 0 && (t = true, Af(r, l));
          } else l = ie, l = Za(r, r === we ? l : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), (l & 3) === 0 || Qr(r, l) || (t = true, Af(r, l));
          r = r.next;
        }
      while (t);
      vs = false;
    }
  }
  function Zm() {
    Pf();
  }
  function Pf() {
    Gl = ys = false;
    var e = 0;
    At !== 0 && cg() && (e = At);
    for (var n = cn(), t = null, r = Yl; r !== null; ) {
      var a = r.next, l = Lf(r, n);
      l === 0 ? (r.next = null, t === null ? Yl = a : t.next = a, a === null && (Dr = t)) : (t = r, (e !== 0 || (l & 3) !== 0) && (Gl = true)), r = a;
    }
    $e !== 0 && $e !== 5 || Pa(e), At !== 0 && (At = 0);
  }
  function Lf(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes & -62914561; 0 < l; ) {
      var s = 31 - fn(l), f = 1 << s, y = a[s];
      y === -1 ? ((f & t) === 0 || (f & r) !== 0) && (a[s] = Ch(f, n)) : y <= n && (e.expiredLanes |= f), l &= ~f;
    }
    if (n = we, t = ie, t = Za(e, e === n ? t : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, t === 0 || e === n && (me === 2 || me === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && Ro(r), e.callbackNode = null, e.callbackPriority = 0;
    if ((t & 3) === 0 || Qr(e, t)) {
      if (n = t & -t, n === e.callbackPriority) return n;
      switch (r !== null && Ro(r), zo(t)) {
        case 2:
        case 8:
          t = vu;
          break;
        case 32:
          t = Ga;
          break;
        case 268435456:
          t = bu;
          break;
        default:
          t = Ga;
      }
      return r = Rf.bind(null, e), t = Lo(t, r), e.callbackPriority = n, e.callbackNode = t, n;
    }
    return r !== null && r !== null && Ro(r), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Rf(e, n) {
    if ($e !== 0 && $e !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var t = e.callbackNode;
    if (Ql() && e.callbackNode !== t) return null;
    var r = ie;
    return r = Za(e, e === we ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (df(e, r, n), Lf(e, cn()), e.callbackNode != null && e.callbackNode === t ? Rf.bind(null, e) : null);
  }
  function Af(e, n) {
    if (Ql()) return null;
    df(e, n, true);
  }
  function eg() {
    fg(function() {
      (pe & 6) !== 0 ? Lo(yu, Zm) : Pf();
    });
  }
  function bs() {
    if (At === 0) {
      var e = kr;
      e === 0 && (e = Ja, Ja <<= 1, (Ja & 261888) === 0 && (Ja = 256)), At = e;
    }
    return At;
  }
  function Tf(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : rl("" + e);
  }
  function zf(e, n) {
    var t = n.ownerDocument.createElement("input");
    return t.name = n.name, t.value = n.value, e.id && t.setAttribute("form", e.id), n.parentNode.insertBefore(t, n), e = new FormData(e), t.parentNode.removeChild(t), e;
  }
  function ng(e, n, t, r, a) {
    if (n === "submit" && t && t.stateNode === a) {
      var l = Tf((a[tn] || null).action), s = r.submitter;
      s && (n = (n = s[tn] || null) ? Tf(n.formAction) : s.getAttribute("formAction"), n !== null && (l = n, s = null));
      var f = new il("action", "action", null, r, a);
      e.push({ event: f, listeners: [{ instance: null, listener: function() {
        if (r.defaultPrevented) {
          if (At !== 0) {
            var y = s ? zf(a, s) : new FormData(a);
            Ii(t, { pending: true, data: y, method: a.method, action: l }, null, y);
          }
        } else typeof l == "function" && (f.preventDefault(), y = s ? zf(a, s) : new FormData(a), Ii(t, { pending: true, data: y, method: a.method, action: l }, l, y));
      }, currentTarget: a }] });
    }
  }
  for (var xs = 0; xs < ti.length; xs++) {
    var ks = ti[xs], tg = ks.toLowerCase(), rg = ks[0].toUpperCase() + ks.slice(1);
    Dn(tg, "on" + rg);
  }
  Dn(uc, "onAnimationEnd"), Dn(cc, "onAnimationIteration"), Dn(dc, "onAnimationStart"), Dn("dblclick", "onDoubleClick"), Dn("focusin", "onFocus"), Dn("focusout", "onBlur"), Dn(bm, "onTransitionRun"), Dn(xm, "onTransitionStart"), Dn(km, "onTransitionCancel"), Dn(fc, "onTransitionEnd"), ir("onMouseEnter", ["mouseout", "mouseover"]), ir("onMouseLeave", ["mouseout", "mouseover"]), ir("onPointerEnter", ["pointerout", "pointerover"]), ir("onPointerLeave", ["pointerout", "pointerover"]), $t("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), $t("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), $t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), $t("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), $t("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), $t("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var La = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ag = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(La));
  function Ff(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t], a = r.event;
      r = r.listeners;
      e: {
        var l = void 0;
        if (n) for (var s = r.length - 1; 0 <= s; s--) {
          var f = r[s], y = f.instance, C = f.currentTarget;
          if (f = f.listener, y !== l && a.isPropagationStopped()) break e;
          l = f, a.currentTarget = C;
          try {
            l(a);
          } catch (A) {
            cl(A);
          }
          a.currentTarget = null, l = y;
        }
        else for (s = 0; s < r.length; s++) {
          if (f = r[s], y = f.instance, C = f.currentTarget, f = f.listener, y !== l && a.isPropagationStopped()) break e;
          l = f, a.currentTarget = C;
          try {
            l(a);
          } catch (A) {
            cl(A);
          }
          a.currentTarget = null, l = y;
        }
      }
    }
  }
  function le(e, n) {
    var t = n[Fo];
    t === void 0 && (t = n[Fo] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    t.has(r) || (_f(n, e, 2, false), t.add(r));
  }
  function ws(e, n, t) {
    var r = 0;
    n && (r |= 4), _f(t, e, r, n);
  }
  var Jl = "_reactListening" + Math.random().toString(36).slice(2);
  function js(e) {
    if (!e[Jl]) {
      e[Jl] = true, Eu.forEach(function(t) {
        t !== "selectionchange" && (ag.has(t) || ws(t, false, e), ws(t, true, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Jl] || (n[Jl] = true, ws("selectionchange", false, n));
    }
  }
  function _f(e, n, t, r) {
    switch (cp(n)) {
      case 2:
        var a = Tg;
        break;
      case 8:
        a = zg;
        break;
      default:
        a = Ms;
    }
    t = a.bind(null, n, t, e), a = void 0, !Ho || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (a = true), r ? a !== void 0 ? e.addEventListener(n, t, { capture: true, passive: a }) : e.addEventListener(n, t, true) : a !== void 0 ? e.addEventListener(n, t, { passive: a }) : e.addEventListener(n, t, false);
  }
  function Ss(e, n, t, r, a) {
    var l = r;
    if ((n & 1) === 0 && (n & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var f = r.stateNode.containerInfo;
        if (f === a) break;
        if (s === 4) for (s = r.return; s !== null; ) {
          var y = s.tag;
          if ((y === 3 || y === 4) && s.stateNode.containerInfo === a) return;
          s = s.return;
        }
        for (; f !== null; ) {
          if (s = ar(f), s === null) return;
          if (y = s.tag, y === 5 || y === 6 || y === 26 || y === 27) {
            r = l = s;
            continue e;
          }
          f = f.parentNode;
        }
      }
      r = r.return;
    }
    Iu(function() {
      var C = l, A = Bo(t), F = [];
      e: {
        var P = pc.get(e);
        if (P !== void 0) {
          var R = il, H = e;
          switch (e) {
            case "keypress":
              if (ll(t) === 0) break e;
            case "keydown":
            case "keyup":
              R = Kh;
              break;
            case "focusin":
              H = "focus", R = Qo;
              break;
            case "focusout":
              H = "blur", R = Qo;
              break;
            case "beforeblur":
            case "afterblur":
              R = Qo;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              R = qu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              R = Ih;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              R = em;
              break;
            case uc:
            case cc:
            case dc:
              R = qh;
              break;
            case fc:
              R = tm;
              break;
            case "scroll":
            case "scrollend":
              R = Oh;
              break;
            case "wheel":
              R = am;
              break;
            case "copy":
            case "cut":
            case "paste":
              R = Wh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              R = Wu;
              break;
            case "toggle":
            case "beforetoggle":
              R = om;
          }
          var Y = (n & 4) !== 0, xe = !Y && (e === "scroll" || e === "scrollend"), j = Y ? P !== null ? P + "Capture" : null : P;
          Y = [];
          for (var b = C, N; b !== null; ) {
            var z = b;
            if (N = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || N === null || j === null || (z = Kr(b, j), z != null && Y.push(Ra(b, z, N))), xe) break;
            b = b.return;
          }
          0 < Y.length && (P = new R(P, H, null, t, A), F.push({ event: P, listeners: Y }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (P = e === "mouseover" || e === "pointerover", R = e === "mouseout" || e === "pointerout", P && t !== $o && (H = t.relatedTarget || t.fromElement) && (ar(H) || H[rr])) break e;
          if ((R || P) && (P = A.window === A ? A : (P = A.ownerDocument) ? P.defaultView || P.parentWindow : window, R ? (H = t.relatedTarget || t.toElement, R = C, H = H ? ar(H) : null, H !== null && (xe = h(H), Y = H.tag, H !== xe || Y !== 5 && Y !== 27 && Y !== 6) && (H = null)) : (R = null, H = C), R !== H)) {
            if (Y = qu, z = "onMouseLeave", j = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (Y = Wu, z = "onPointerLeave", j = "onPointerEnter", b = "pointer"), xe = R == null ? P : Jr(R), N = H == null ? P : Jr(H), P = new Y(z, b + "leave", R, t, A), P.target = xe, P.relatedTarget = N, z = null, ar(A) === C && (Y = new Y(j, b + "enter", H, t, A), Y.target = N, Y.relatedTarget = xe, z = Y), xe = z, R && H) n: {
              for (Y = lg, j = R, b = H, N = 0, z = j; z; z = Y(z)) N++;
              z = 0;
              for (var Q = b; Q; Q = Y(Q)) z++;
              for (; 0 < N - z; ) j = Y(j), N--;
              for (; 0 < z - N; ) b = Y(b), z--;
              for (; N--; ) {
                if (j === b || b !== null && j === b.alternate) {
                  Y = j;
                  break n;
                }
                j = Y(j), b = Y(b);
              }
              Y = null;
            }
            else Y = null;
            R !== null && Df(F, P, R, Y, false), H !== null && xe !== null && Df(F, xe, H, Y, true);
          }
        }
        e: {
          if (P = C ? Jr(C) : window, R = P.nodeName && P.nodeName.toLowerCase(), R === "select" || R === "input" && P.type === "file") var de = Xu;
          else if (Ju(P)) if (Zu) de = gm;
          else {
            de = hm;
            var U = pm;
          }
          else R = P.nodeName, !R || R.toLowerCase() !== "input" || P.type !== "checkbox" && P.type !== "radio" ? C && Io(C.elementType) && (de = Xu) : de = mm;
          if (de && (de = de(e, C))) {
            Ku(F, de, t, A);
            break e;
          }
          U && U(e, P, C), e === "focusout" && C && P.type === "number" && C.memoizedProps.value != null && Mo(P, "number", P.value);
        }
        switch (U = C ? Jr(C) : window, e) {
          case "focusin":
            (Ju(U) || U.contentEditable === "true") && (pr = U, Zo = C, la = null);
            break;
          case "focusout":
            la = Zo = pr = null;
            break;
          case "mousedown":
            ei = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ei = false, ic(F, t, A);
            break;
          case "selectionchange":
            if (vm) break;
          case "keydown":
          case "keyup":
            ic(F, t, A);
        }
        var ne;
        if (Go) e: {
          switch (e) {
            case "compositionstart":
              var se = "onCompositionStart";
              break e;
            case "compositionend":
              se = "onCompositionEnd";
              break e;
            case "compositionupdate":
              se = "onCompositionUpdate";
              break e;
          }
          se = void 0;
        }
        else fr ? Yu(e, t) && (se = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (se = "onCompositionStart");
        se && (Uu && t.locale !== "ko" && (fr || se !== "onCompositionStart" ? se === "onCompositionEnd" && fr && (ne = $u()) : (mt = A, Wo = "value" in mt ? mt.value : mt.textContent, fr = true)), U = Kl(C, se), 0 < U.length && (se = new Hu(se, e, null, t, A), F.push({ event: se, listeners: U }), ne ? se.data = ne : (ne = Gu(t), ne !== null && (se.data = ne)))), (ne = sm ? um(e, t) : cm(e, t)) && (se = Kl(C, "onBeforeInput"), 0 < se.length && (U = new Hu("onBeforeInput", "beforeinput", null, t, A), F.push({ event: U, listeners: se }), U.data = ne)), ng(F, e, C, t, A);
      }
      Ff(F, n);
    });
  }
  function Ra(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Kl(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var a = e, l = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || l === null || (a = Kr(e, t), a != null && r.unshift(Ra(e, a, l)), a = Kr(e, n), a != null && r.push(Ra(e, a, l))), e.tag === 3) return r;
      e = e.return;
    }
    return [];
  }
  function lg(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Df(e, n, t, r, a) {
    for (var l = n._reactName, s = []; t !== null && t !== r; ) {
      var f = t, y = f.alternate, C = f.stateNode;
      if (f = f.tag, y !== null && y === r) break;
      f !== 5 && f !== 26 && f !== 27 || C === null || (y = C, a ? (C = Kr(t, l), C != null && s.unshift(Ra(t, C, y))) : a || (C = Kr(t, l), C != null && s.push(Ra(t, C, y)))), t = t.return;
    }
    s.length !== 0 && e.push({ event: n, listeners: s });
  }
  var og = /\r\n?/g, ig = /\u0000|\uFFFD/g;
  function Of(e) {
    return (typeof e == "string" ? e : "" + e).replace(og, `
`).replace(ig, "");
  }
  function Mf(e, n) {
    return n = Of(n), Of(e) === n;
  }
  function be(e, n, t, r, a, l) {
    switch (t) {
      case "children":
        typeof r == "string" ? n === "body" || n === "textarea" && r === "" || ur(e, r) : (typeof r == "number" || typeof r == "bigint") && n !== "body" && ur(e, "" + r);
        break;
      case "className":
        nl(e, "class", r);
        break;
      case "tabIndex":
        nl(e, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        nl(e, t, r);
        break;
      case "style":
        Ou(e, r, l);
        break;
      case "data":
        if (n !== "object") {
          nl(e, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (n !== "a" || t !== "href")) {
          e.removeAttribute(t);
          break;
        }
        if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(t);
          break;
        }
        r = rl("" + r), e.setAttribute(t, r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          e.setAttribute(t, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof l == "function" && (t === "formAction" ? (n !== "input" && be(e, n, "name", a.name, a, null), be(e, n, "formEncType", a.formEncType, a, null), be(e, n, "formMethod", a.formMethod, a, null), be(e, n, "formTarget", a.formTarget, a, null)) : (be(e, n, "encType", a.encType, a, null), be(e, n, "method", a.method, a, null), be(e, n, "target", a.target, a, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(t);
          break;
        }
        r = rl("" + r), e.setAttribute(t, r);
        break;
      case "onClick":
        r != null && (e.onclick = Qn);
        break;
      case "onScroll":
        r != null && le("scroll", e);
        break;
      case "onScrollEnd":
        r != null && le("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(u(61));
          if (t = r.__html, t != null) {
            if (a.children != null) throw Error(u(60));
            e.innerHTML = t;
          }
        }
        break;
      case "multiple":
        e.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        e.muted = r && typeof r != "function" && typeof r != "symbol";
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
        if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        t = rl("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", t);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(t, "" + r) : e.removeAttribute(t);
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
        r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(t, "") : e.removeAttribute(t);
        break;
      case "capture":
      case "download":
        r === true ? e.setAttribute(t, "") : r !== false && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(t, r) : e.removeAttribute(t);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(t, r) : e.removeAttribute(t);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r);
        break;
      case "popover":
        le("beforetoggle", e), le("toggle", e), el(e, "popover", r);
        break;
      case "xlinkActuate":
        Vn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
        break;
      case "xlinkArcrole":
        Vn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
        break;
      case "xlinkRole":
        Vn(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
        break;
      case "xlinkShow":
        Vn(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
        break;
      case "xlinkTitle":
        Vn(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
        break;
      case "xlinkType":
        Vn(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
        break;
      case "xmlBase":
        Vn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
        break;
      case "xmlLang":
        Vn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
        break;
      case "xmlSpace":
        Vn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
        break;
      case "is":
        el(e, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = _h.get(t) || t, el(e, t, r));
    }
  }
  function Ns(e, n, t, r, a, l) {
    switch (t) {
      case "style":
        Ou(e, r, l);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(u(61));
          if (t = r.__html, t != null) {
            if (a.children != null) throw Error(u(60));
            e.innerHTML = t;
          }
        }
        break;
      case "children":
        typeof r == "string" ? ur(e, r) : (typeof r == "number" || typeof r == "bigint") && ur(e, "" + r);
        break;
      case "onScroll":
        r != null && le("scroll", e);
        break;
      case "onScrollEnd":
        r != null && le("scrollend", e);
        break;
      case "onClick":
        r != null && (e.onclick = Qn);
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
        if (!Pu.hasOwnProperty(t)) e: {
          if (t[0] === "o" && t[1] === "n" && (a = t.endsWith("Capture"), n = t.slice(2, a ? t.length - 7 : void 0), l = e[tn] || null, l = l != null ? l[t] : null, typeof l == "function" && e.removeEventListener(n, l, a), typeof r == "function")) {
            typeof l != "function" && l !== null && (t in e ? e[t] = null : e.hasAttribute(t) && e.removeAttribute(t)), e.addEventListener(n, r, a);
            break e;
          }
          t in e ? e[t] = r : r === true ? e.setAttribute(t, "") : el(e, t, r);
        }
    }
  }
  function Je(e, n, t) {
    switch (n) {
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
        le("error", e), le("load", e);
        var r = false, a = false, l;
        for (l in t) if (t.hasOwnProperty(l)) {
          var s = t[l];
          if (s != null) switch (l) {
            case "src":
              r = true;
              break;
            case "srcSet":
              a = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(u(137, n));
            default:
              be(e, n, l, s, t, null);
          }
        }
        a && be(e, n, "srcSet", t.srcSet, t, null), r && be(e, n, "src", t.src, t, null);
        return;
      case "input":
        le("invalid", e);
        var f = l = s = a = null, y = null, C = null;
        for (r in t) if (t.hasOwnProperty(r)) {
          var A = t[r];
          if (A != null) switch (r) {
            case "name":
              a = A;
              break;
            case "type":
              s = A;
              break;
            case "checked":
              y = A;
              break;
            case "defaultChecked":
              C = A;
              break;
            case "value":
              l = A;
              break;
            case "defaultValue":
              f = A;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (A != null) throw Error(u(137, n));
              break;
            default:
              be(e, n, r, A, t, null);
          }
        }
        zu(e, l, f, y, C, s, a, false);
        return;
      case "select":
        le("invalid", e), r = s = l = null;
        for (a in t) if (t.hasOwnProperty(a) && (f = t[a], f != null)) switch (a) {
          case "value":
            l = f;
            break;
          case "defaultValue":
            s = f;
            break;
          case "multiple":
            r = f;
          default:
            be(e, n, a, f, t, null);
        }
        n = l, t = s, e.multiple = !!r, n != null ? sr(e, !!r, n, false) : t != null && sr(e, !!r, t, true);
        return;
      case "textarea":
        le("invalid", e), l = a = r = null;
        for (s in t) if (t.hasOwnProperty(s) && (f = t[s], f != null)) switch (s) {
          case "value":
            r = f;
            break;
          case "defaultValue":
            a = f;
            break;
          case "children":
            l = f;
            break;
          case "dangerouslySetInnerHTML":
            if (f != null) throw Error(u(91));
            break;
          default:
            be(e, n, s, f, t, null);
        }
        _u(e, r, a, l);
        return;
      case "option":
        for (y in t) if (t.hasOwnProperty(y) && (r = t[y], r != null)) switch (y) {
          case "selected":
            e.selected = r && typeof r != "function" && typeof r != "symbol";
            break;
          default:
            be(e, n, y, r, t, null);
        }
        return;
      case "dialog":
        le("beforetoggle", e), le("toggle", e), le("cancel", e), le("close", e);
        break;
      case "iframe":
      case "object":
        le("load", e);
        break;
      case "video":
      case "audio":
        for (r = 0; r < La.length; r++) le(La[r], e);
        break;
      case "image":
        le("error", e), le("load", e);
        break;
      case "details":
        le("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        le("error", e), le("load", e);
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
        for (C in t) if (t.hasOwnProperty(C) && (r = t[C], r != null)) switch (C) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(u(137, n));
          default:
            be(e, n, C, r, t, null);
        }
        return;
      default:
        if (Io(n)) {
          for (A in t) t.hasOwnProperty(A) && (r = t[A], r !== void 0 && Ns(e, n, A, r, t, void 0));
          return;
        }
    }
    for (f in t) t.hasOwnProperty(f) && (r = t[f], r != null && be(e, n, f, r, t, null));
  }
  function sg(e, n, t, r) {
    switch (n) {
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
        var a = null, l = null, s = null, f = null, y = null, C = null, A = null;
        for (R in t) {
          var F = t[R];
          if (t.hasOwnProperty(R) && F != null) switch (R) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              y = F;
            default:
              r.hasOwnProperty(R) || be(e, n, R, null, r, F);
          }
        }
        for (var P in r) {
          var R = r[P];
          if (F = t[P], r.hasOwnProperty(P) && (R != null || F != null)) switch (P) {
            case "type":
              l = R;
              break;
            case "name":
              a = R;
              break;
            case "checked":
              C = R;
              break;
            case "defaultChecked":
              A = R;
              break;
            case "value":
              s = R;
              break;
            case "defaultValue":
              f = R;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (R != null) throw Error(u(137, n));
              break;
            default:
              R !== F && be(e, n, P, R, r, F);
          }
        }
        Oo(e, s, f, y, C, A, l, a);
        return;
      case "select":
        R = s = f = P = null;
        for (l in t) if (y = t[l], t.hasOwnProperty(l) && y != null) switch (l) {
          case "value":
            break;
          case "multiple":
            R = y;
          default:
            r.hasOwnProperty(l) || be(e, n, l, null, r, y);
        }
        for (a in r) if (l = r[a], y = t[a], r.hasOwnProperty(a) && (l != null || y != null)) switch (a) {
          case "value":
            P = l;
            break;
          case "defaultValue":
            f = l;
            break;
          case "multiple":
            s = l;
          default:
            l !== y && be(e, n, a, l, r, y);
        }
        n = f, t = s, r = R, P != null ? sr(e, !!t, P, false) : !!r != !!t && (n != null ? sr(e, !!t, n, true) : sr(e, !!t, t ? [] : "", false));
        return;
      case "textarea":
        R = P = null;
        for (f in t) if (a = t[f], t.hasOwnProperty(f) && a != null && !r.hasOwnProperty(f)) switch (f) {
          case "value":
            break;
          case "children":
            break;
          default:
            be(e, n, f, null, r, a);
        }
        for (s in r) if (a = r[s], l = t[s], r.hasOwnProperty(s) && (a != null || l != null)) switch (s) {
          case "value":
            P = a;
            break;
          case "defaultValue":
            R = a;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (a != null) throw Error(u(91));
            break;
          default:
            a !== l && be(e, n, s, a, r, l);
        }
        Fu(e, P, R);
        return;
      case "option":
        for (var H in t) if (P = t[H], t.hasOwnProperty(H) && P != null && !r.hasOwnProperty(H)) switch (H) {
          case "selected":
            e.selected = false;
            break;
          default:
            be(e, n, H, null, r, P);
        }
        for (y in r) if (P = r[y], R = t[y], r.hasOwnProperty(y) && P !== R && (P != null || R != null)) switch (y) {
          case "selected":
            e.selected = P && typeof P != "function" && typeof P != "symbol";
            break;
          default:
            be(e, n, y, P, r, R);
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
        for (var Y in t) P = t[Y], t.hasOwnProperty(Y) && P != null && !r.hasOwnProperty(Y) && be(e, n, Y, null, r, P);
        for (C in r) if (P = r[C], R = t[C], r.hasOwnProperty(C) && P !== R && (P != null || R != null)) switch (C) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (P != null) throw Error(u(137, n));
            break;
          default:
            be(e, n, C, P, r, R);
        }
        return;
      default:
        if (Io(n)) {
          for (var xe in t) P = t[xe], t.hasOwnProperty(xe) && P !== void 0 && !r.hasOwnProperty(xe) && Ns(e, n, xe, void 0, r, P);
          for (A in r) P = r[A], R = t[A], !r.hasOwnProperty(A) || P === R || P === void 0 && R === void 0 || Ns(e, n, A, P, r, R);
          return;
        }
    }
    for (var j in t) P = t[j], t.hasOwnProperty(j) && P != null && !r.hasOwnProperty(j) && be(e, n, j, null, r, P);
    for (F in r) P = r[F], R = t[F], !r.hasOwnProperty(F) || P === R || P == null && R == null || be(e, n, F, P, r, R);
  }
  function If(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  function ug() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, n = 0, t = performance.getEntriesByType("resource"), r = 0; r < t.length; r++) {
        var a = t[r], l = a.transferSize, s = a.initiatorType, f = a.duration;
        if (l && f && If(s)) {
          for (s = 0, f = a.responseEnd, r += 1; r < t.length; r++) {
            var y = t[r], C = y.startTime;
            if (C > f) break;
            var A = y.transferSize, F = y.initiatorType;
            A && If(F) && (y = y.responseEnd, s += A * (y < f ? 1 : (f - C) / (y - C)));
          }
          if (--r, n += 8 * (l + s) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return n / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Cs = null, Es = null;
  function Xl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function $f(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Bf(e, n) {
    if (e === 0) switch (n) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function Ps(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Ls = null;
  function cg() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Ls ? false : (Ls = e, true) : (Ls = null, false);
  }
  var qf = typeof setTimeout == "function" ? setTimeout : void 0, dg = typeof clearTimeout == "function" ? clearTimeout : void 0, Hf = typeof Promise == "function" ? Promise : void 0, fg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hf < "u" ? function(e) {
    return Hf.resolve(null).then(e).catch(pg);
  } : qf;
  function pg(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Tt(e) {
    return e === "head";
  }
  function Wf(e, n) {
    var t = n, r = 0;
    do {
      var a = t.nextSibling;
      if (e.removeChild(t), a && a.nodeType === 8) if (t = a.data, t === "/$" || t === "/&") {
        if (r === 0) {
          e.removeChild(a), $r(n);
          return;
        }
        r--;
      } else if (t === "$" || t === "$?" || t === "$~" || t === "$!" || t === "&") r++;
      else if (t === "html") Aa(e.ownerDocument.documentElement);
      else if (t === "head") {
        t = e.ownerDocument.head, Aa(t);
        for (var l = t.firstChild; l; ) {
          var s = l.nextSibling, f = l.nodeName;
          l[Gr] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && l.rel.toLowerCase() === "stylesheet" || t.removeChild(l), l = s;
        }
      } else t === "body" && Aa(e.ownerDocument.body);
      t = a;
    } while (t);
    $r(n);
  }
  function Uf(e, n) {
    var t = e;
    e = 0;
    do {
      var r = t.nextSibling;
      if (t.nodeType === 1 ? n ? (t._stashedDisplay = t.style.display, t.style.display = "none") : (t.style.display = t._stashedDisplay || "", t.getAttribute("style") === "" && t.removeAttribute("style")) : t.nodeType === 3 && (n ? (t._stashedText = t.nodeValue, t.nodeValue = "") : t.nodeValue = t._stashedText || ""), r && r.nodeType === 8) if (t = r.data, t === "/$") {
        if (e === 0) break;
        e--;
      } else t !== "$" && t !== "$?" && t !== "$~" && t !== "$!" || e++;
      t = r;
    } while (t);
  }
  function Rs(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var t = n;
      switch (n = n.nextSibling, t.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Rs(t), _o(t);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (t.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(t);
    }
  }
  function hg(e, n, t, r) {
    for (; e.nodeType === 1; ) {
      var a = t;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (r) {
        if (!e[Gr]) switch (n) {
          case "meta":
            if (!e.hasAttribute("itemprop")) break;
            return e;
          case "link":
            if (l = e.getAttribute("rel"), l === "stylesheet" && e.hasAttribute("data-precedence") || l !== a.rel || e.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || e.getAttribute("title") !== (a.title == null ? null : a.title)) break;
            return e;
          case "style":
            if (e.hasAttribute("data-precedence")) break;
            return e;
          case "script":
            if (l = e.getAttribute("src"), (l !== (a.src == null ? null : a.src) || e.getAttribute("type") !== (a.type == null ? null : a.type) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && l && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
            return e;
          default:
            return e;
        }
      } else if (n === "input" && e.type === "hidden") {
        var l = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && e.getAttribute("name") === l) return e;
      } else return e;
      if (e = Pn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function mg(e, n, t) {
    if (n === "") return null;
    for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Pn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Vf(e, n) {
    for (; e.nodeType !== 8; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Pn(e.nextSibling), e === null)) return null;
    return e;
  }
  function As(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Ts(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function gg(e, n) {
    var t = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = n;
    else if (e.data !== "$?" || t.readyState !== "loading") n();
    else {
      var r = function() {
        n(), t.removeEventListener("DOMContentLoaded", r);
      };
      t.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
    }
  }
  function Pn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F") break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return e;
  }
  var zs = null;
  function Qf(e) {
    e = e.nextSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "/$" || t === "/&") {
          if (n === 0) return Pn(e.nextSibling);
          n--;
        } else t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&" || n++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Yf(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&") {
          if (n === 0) return e;
          n--;
        } else t !== "/$" && t !== "/&" || n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Gf(e, n, t) {
    switch (n = Xl(t), e) {
      case "html":
        if (e = n.documentElement, !e) throw Error(u(452));
        return e;
      case "head":
        if (e = n.head, !e) throw Error(u(453));
        return e;
      case "body":
        if (e = n.body, !e) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  function Aa(e) {
    for (var n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
    _o(e);
  }
  var Ln = /* @__PURE__ */ new Map(), Jf = /* @__PURE__ */ new Set();
  function Zl(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ut = B.d;
  B.d = { f: yg, r: vg, D: bg, C: xg, L: kg, m: wg, X: Sg, S: jg, M: Ng };
  function yg() {
    var e = ut.f(), n = Wl();
    return e || n;
  }
  function vg(e) {
    var n = lr(e);
    n !== null && n.tag === 5 && n.type === "form" ? fd(n) : ut.r(e);
  }
  var Or = typeof document > "u" ? null : document;
  function Kf(e, n, t) {
    var r = Or;
    if (r && typeof n == "string" && n) {
      var a = _n(n);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof t == "string" && (a += '[crossorigin="' + t + '"]'), Jf.has(a) || (Jf.add(a), e = { rel: e, crossOrigin: t, href: n }, r.querySelector(a) === null && (n = r.createElement("link"), Je(n, "link", e), qe(n), r.head.appendChild(n)));
    }
  }
  function bg(e) {
    ut.D(e), Kf("dns-prefetch", e, null);
  }
  function xg(e, n) {
    ut.C(e, n), Kf("preconnect", e, n);
  }
  function kg(e, n, t) {
    ut.L(e, n, t);
    var r = Or;
    if (r && e && n) {
      var a = 'link[rel="preload"][as="' + _n(n) + '"]';
      n === "image" && t && t.imageSrcSet ? (a += '[imagesrcset="' + _n(t.imageSrcSet) + '"]', typeof t.imageSizes == "string" && (a += '[imagesizes="' + _n(t.imageSizes) + '"]')) : a += '[href="' + _n(e) + '"]';
      var l = a;
      switch (n) {
        case "style":
          l = Mr(e);
          break;
        case "script":
          l = Ir(e);
      }
      Ln.has(l) || (e = L({ rel: "preload", href: n === "image" && t && t.imageSrcSet ? void 0 : e, as: n }, t), Ln.set(l, e), r.querySelector(a) !== null || n === "style" && r.querySelector(Ta(l)) || n === "script" && r.querySelector(za(l)) || (n = r.createElement("link"), Je(n, "link", e), qe(n), r.head.appendChild(n)));
    }
  }
  function wg(e, n) {
    ut.m(e, n);
    var t = Or;
    if (t && e) {
      var r = n && typeof n.as == "string" ? n.as : "script", a = 'link[rel="modulepreload"][as="' + _n(r) + '"][href="' + _n(e) + '"]', l = a;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          l = Ir(e);
      }
      if (!Ln.has(l) && (e = L({ rel: "modulepreload", href: e }, n), Ln.set(l, e), t.querySelector(a) === null)) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(za(l))) return;
        }
        r = t.createElement("link"), Je(r, "link", e), qe(r), t.head.appendChild(r);
      }
    }
  }
  function jg(e, n, t) {
    ut.S(e, n, t);
    var r = Or;
    if (r && e) {
      var a = or(r).hoistableStyles, l = Mr(e);
      n = n || "default";
      var s = a.get(l);
      if (!s) {
        var f = { loading: 0, preload: null };
        if (s = r.querySelector(Ta(l))) f.loading = 5;
        else {
          e = L({ rel: "stylesheet", href: e, "data-precedence": n }, t), (t = Ln.get(l)) && Fs(e, t);
          var y = s = r.createElement("link");
          qe(y), Je(y, "link", e), y._p = new Promise(function(C, A) {
            y.onload = C, y.onerror = A;
          }), y.addEventListener("load", function() {
            f.loading |= 1;
          }), y.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, eo(s, n, r);
        }
        s = { type: "stylesheet", instance: s, count: 1, state: f }, a.set(l, s);
      }
    }
  }
  function Sg(e, n) {
    ut.X(e, n);
    var t = Or;
    if (t && e) {
      var r = or(t).hoistableScripts, a = Ir(e), l = r.get(a);
      l || (l = t.querySelector(za(a)), l || (e = L({ src: e, async: true }, n), (n = Ln.get(a)) && _s(e, n), l = t.createElement("script"), qe(l), Je(l, "link", e), t.head.appendChild(l)), l = { type: "script", instance: l, count: 1, state: null }, r.set(a, l));
    }
  }
  function Ng(e, n) {
    ut.M(e, n);
    var t = Or;
    if (t && e) {
      var r = or(t).hoistableScripts, a = Ir(e), l = r.get(a);
      l || (l = t.querySelector(za(a)), l || (e = L({ src: e, async: true, type: "module" }, n), (n = Ln.get(a)) && _s(e, n), l = t.createElement("script"), qe(l), Je(l, "link", e), t.head.appendChild(l)), l = { type: "script", instance: l, count: 1, state: null }, r.set(a, l));
    }
  }
  function Xf(e, n, t, r) {
    var a = (a = re.current) ? Zl(a) : null;
    if (!a) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string" ? (n = Mr(t.href), t = or(a).hoistableStyles, r = t.get(n), r || (r = { type: "style", instance: null, count: 0, state: null }, t.set(n, r)), r) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
          e = Mr(t.href);
          var l = or(a).hoistableStyles, s = l.get(e);
          if (s || (a = a.ownerDocument || a, s = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, l.set(e, s), (l = a.querySelector(Ta(e))) && !l._p && (s.instance = l, s.state.loading = 5), Ln.has(e) || (t = { rel: "preload", as: "style", href: t.href, crossOrigin: t.crossOrigin, integrity: t.integrity, media: t.media, hrefLang: t.hrefLang, referrerPolicy: t.referrerPolicy }, Ln.set(e, t), l || Cg(a, e, t, s.state))), n && r === null) throw Error(u(528, ""));
          return s;
        }
        if (n && r !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return n = t.async, t = t.src, typeof t == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ir(t), t = or(a).hoistableScripts, r = t.get(n), r || (r = { type: "script", instance: null, count: 0, state: null }, t.set(n, r)), r) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(u(444, e));
    }
  }
  function Mr(e) {
    return 'href="' + _n(e) + '"';
  }
  function Ta(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Zf(e) {
    return L({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Cg(e, n, t, r) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? r.loading = 1 : (n = e.createElement("link"), r.preload = n, n.addEventListener("load", function() {
      return r.loading |= 1;
    }), n.addEventListener("error", function() {
      return r.loading |= 2;
    }), Je(n, "link", t), qe(n), e.head.appendChild(n));
  }
  function Ir(e) {
    return '[src="' + _n(e) + '"]';
  }
  function za(e) {
    return "script[async]" + e;
  }
  function ep(e, n, t) {
    if (n.count++, n.instance === null) switch (n.type) {
      case "style":
        var r = e.querySelector('style[data-href~="' + _n(t.href) + '"]');
        if (r) return n.instance = r, qe(r), r;
        var a = L({}, t, { "data-href": t.href, "data-precedence": t.precedence, href: null, precedence: null });
        return r = (e.ownerDocument || e).createElement("style"), qe(r), Je(r, "style", a), eo(r, t.precedence, e), n.instance = r;
      case "stylesheet":
        a = Mr(t.href);
        var l = e.querySelector(Ta(a));
        if (l) return n.state.loading |= 4, n.instance = l, qe(l), l;
        r = Zf(t), (a = Ln.get(a)) && Fs(r, a), l = (e.ownerDocument || e).createElement("link"), qe(l);
        var s = l;
        return s._p = new Promise(function(f, y) {
          s.onload = f, s.onerror = y;
        }), Je(l, "link", r), n.state.loading |= 4, eo(l, t.precedence, e), n.instance = l;
      case "script":
        return l = Ir(t.src), (a = e.querySelector(za(l))) ? (n.instance = a, qe(a), a) : (r = t, (a = Ln.get(l)) && (r = L({}, t), _s(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), qe(a), Je(a, "link", r), e.head.appendChild(a), n.instance = a);
      case "void":
        return null;
      default:
        throw Error(u(443, n.type));
    }
    else n.type === "stylesheet" && (n.state.loading & 4) === 0 && (r = n.instance, n.state.loading |= 4, eo(r, t.precedence, e));
    return n.instance;
  }
  function eo(e, n, t) {
    for (var r = t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = r.length ? r[r.length - 1] : null, l = a, s = 0; s < r.length; s++) {
      var f = r[s];
      if (f.dataset.precedence === n) l = f;
      else if (l !== a) break;
    }
    l ? l.parentNode.insertBefore(e, l.nextSibling) : (n = t.nodeType === 9 ? t.head : t, n.insertBefore(e, n.firstChild));
  }
  function Fs(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function _s(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var no = null;
  function np(e, n, t) {
    if (no === null) {
      var r = /* @__PURE__ */ new Map(), a = no = /* @__PURE__ */ new Map();
      a.set(t, r);
    } else a = no, r = a.get(t), r || (r = /* @__PURE__ */ new Map(), a.set(t, r));
    if (r.has(e)) return r;
    for (r.set(e, null), t = t.getElementsByTagName(e), a = 0; a < t.length; a++) {
      var l = t[a];
      if (!(l[Gr] || l[Ve] || e === "link" && l.getAttribute("rel") === "stylesheet") && l.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = l.getAttribute(n) || "";
        s = e + s;
        var f = r.get(s);
        f ? f.push(l) : r.set(s, [l]);
      }
    }
    return r;
  }
  function tp(e, n, t) {
    e = e.ownerDocument || e, e.head.insertBefore(t, n === "title" ? e.querySelector("head > title") : null);
  }
  function Eg(e, n, t) {
    if (t === 1 || n.itemProp != null) return false;
    switch (e) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "") break;
        return true;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError) break;
        switch (n.rel) {
          case "stylesheet":
            return e = n.disabled, typeof n.precedence == "string" && e == null;
          default:
            return true;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string") return true;
    }
    return false;
  }
  function rp(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Pg(e, n, t, r) {
    if (t.type === "stylesheet" && (typeof r.media != "string" || matchMedia(r.media).matches !== false) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var a = Mr(r.href), l = n.querySelector(Ta(a));
        if (l) {
          n = l._p, n !== null && typeof n == "object" && typeof n.then == "function" && (e.count++, e = to.bind(e), n.then(e, e)), t.state.loading |= 4, t.instance = l, qe(l);
          return;
        }
        l = n.ownerDocument || n, r = Zf(r), (a = Ln.get(a)) && Fs(r, a), l = l.createElement("link"), qe(l);
        var s = l;
        s._p = new Promise(function(f, y) {
          s.onload = f, s.onerror = y;
        }), Je(l, "link", r), t.instance = l;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(t, n), (n = t.state.preload) && (t.state.loading & 3) === 0 && (e.count++, t = to.bind(e), n.addEventListener("load", t), n.addEventListener("error", t));
    }
  }
  var Ds = 0;
  function Lg(e, n) {
    return e.stylesheets && e.count === 0 && ao(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(t) {
      var r = setTimeout(function() {
        if (e.stylesheets && ao(e, e.stylesheets), e.unsuspend) {
          var l = e.unsuspend;
          e.unsuspend = null, l();
        }
      }, 6e4 + n);
      0 < e.imgBytes && Ds === 0 && (Ds = 62500 * ug());
      var a = setTimeout(function() {
        if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && ao(e, e.stylesheets), e.unsuspend)) {
          var l = e.unsuspend;
          e.unsuspend = null, l();
        }
      }, (e.imgBytes > Ds ? 50 : 800) + n);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(r), clearTimeout(a);
      };
    } : null;
  }
  function to() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ao(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var ro = null;
  function ao(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, ro = /* @__PURE__ */ new Map(), n.forEach(Rg, e), ro = null, to.call(e));
  }
  function Rg(e, n) {
    if (!(n.state.loading & 4)) {
      var t = ro.get(e);
      if (t) var r = t.get(null);
      else {
        t = /* @__PURE__ */ new Map(), ro.set(e, t);
        for (var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), l = 0; l < a.length; l++) {
          var s = a[l];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (t.set(s.dataset.precedence, s), r = s);
        }
        r && t.set(null, r);
      }
      a = n.instance, s = a.getAttribute("data-precedence"), l = t.get(s) || r, l === r && t.set(null, a), t.set(s, a), this.count++, r = to.bind(this), a.addEventListener("load", r), a.addEventListener("error", r), l ? l.parentNode.insertBefore(a, l.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Fa = { $$typeof: G, Provider: null, Consumer: null, _currentValue: J, _currentValue2: J, _threadCount: 0 };
  function Ag(e, n, t, r, a, l, s, f, y) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ao(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ao(0), this.hiddenUpdates = Ao(null), this.identifierPrefix = r, this.onUncaughtError = a, this.onCaughtError = l, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ap(e, n, t, r, a, l, s, f, y, C, A, F) {
    return e = new Ag(e, n, t, s, y, C, A, F, f), n = 1, l === true && (n |= 24), l = hn(3, null, null, n), e.current = l, l.stateNode = e, n = mi(), n.refCount++, e.pooledCache = n, n.refCount++, l.memoizedState = { element: r, isDehydrated: t, cache: n }, bi(l), e;
  }
  function lp(e) {
    return e ? (e = gr, e) : gr;
  }
  function op(e, n, t, r, a, l) {
    a = lp(a), r.context === null ? r.context = a : r.pendingContext = a, r = kt(n), r.payload = { element: t }, l = l === void 0 ? null : l, l !== null && (r.callback = l), t = wt(e, r, n), t !== null && (un(t, e, n), fa(t, e, n));
  }
  function ip(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function Os(e, n) {
    ip(e, n), (e = e.alternate) && ip(e, n);
  }
  function sp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = Wt(e, 67108864);
      n !== null && un(n, e, 67108864), Os(e, 67108864);
    }
  }
  function up(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = bn();
      n = To(n);
      var t = Wt(e, n);
      t !== null && un(t, e, n), Os(e, n);
    }
  }
  var lo = true;
  function Tg(e, n, t, r) {
    var a = T.T;
    T.T = null;
    var l = B.p;
    try {
      B.p = 2, Ms(e, n, t, r);
    } finally {
      B.p = l, T.T = a;
    }
  }
  function zg(e, n, t, r) {
    var a = T.T;
    T.T = null;
    var l = B.p;
    try {
      B.p = 8, Ms(e, n, t, r);
    } finally {
      B.p = l, T.T = a;
    }
  }
  function Ms(e, n, t, r) {
    if (lo) {
      var a = Is(r);
      if (a === null) Ss(e, n, r, oo, t), dp(e, r);
      else if (_g(a, e, n, t, r)) r.stopPropagation();
      else if (dp(e, r), n & 4 && -1 < Fg.indexOf(e)) {
        for (; a !== null; ) {
          var l = lr(a);
          if (l !== null) switch (l.tag) {
            case 3:
              if (l = l.stateNode, l.current.memoizedState.isDehydrated) {
                var s = It(l.pendingLanes);
                if (s !== 0) {
                  var f = l;
                  for (f.pendingLanes |= 2, f.entangledLanes |= 2; s; ) {
                    var y = 1 << 31 - fn(s);
                    f.entanglements[1] |= y, s &= ~y;
                  }
                  Un(l), (pe & 6) === 0 && (ql = cn() + 500, Pa(0));
                }
              }
              break;
            case 31:
            case 13:
              f = Wt(l, 2), f !== null && un(f, l, 2), Wl(), Os(l, 2);
          }
          if (l = Is(r), l === null && Ss(e, n, r, oo, t), l === a) break;
          a = l;
        }
        a !== null && r.stopPropagation();
      } else Ss(e, n, r, null, t);
    }
  }
  function Is(e) {
    return e = Bo(e), $s(e);
  }
  var oo = null;
  function $s(e) {
    if (oo = null, e = ar(e), e !== null) {
      var n = h(e);
      if (n === null) e = null;
      else {
        var t = n.tag;
        if (t === 13) {
          if (e = m(n), e !== null) return e;
          e = null;
        } else if (t === 31) {
          if (e = k(n), e !== null) return e;
          e = null;
        } else if (t === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return oo = e, null;
  }
  function cp(e) {
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
        switch (bh()) {
          case yu:
            return 2;
          case vu:
            return 8;
          case Ga:
          case xh:
            return 32;
          case bu:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Bs = false, zt = null, Ft = null, _t = null, _a = /* @__PURE__ */ new Map(), Da = /* @__PURE__ */ new Map(), Dt = [], Fg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function dp(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        zt = null;
        break;
      case "dragenter":
      case "dragleave":
        Ft = null;
        break;
      case "mouseover":
      case "mouseout":
        _t = null;
        break;
      case "pointerover":
      case "pointerout":
        _a.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Da.delete(n.pointerId);
    }
  }
  function Oa(e, n, t, r, a, l) {
    return e === null || e.nativeEvent !== l ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: l, targetContainers: [a] }, n !== null && (n = lr(n), n !== null && sp(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, a !== null && n.indexOf(a) === -1 && n.push(a), e);
  }
  function _g(e, n, t, r, a) {
    switch (n) {
      case "focusin":
        return zt = Oa(zt, e, n, t, r, a), true;
      case "dragenter":
        return Ft = Oa(Ft, e, n, t, r, a), true;
      case "mouseover":
        return _t = Oa(_t, e, n, t, r, a), true;
      case "pointerover":
        var l = a.pointerId;
        return _a.set(l, Oa(_a.get(l) || null, e, n, t, r, a)), true;
      case "gotpointercapture":
        return l = a.pointerId, Da.set(l, Oa(Da.get(l) || null, e, n, t, r, a)), true;
    }
    return false;
  }
  function fp(e) {
    var n = ar(e.target);
    if (n !== null) {
      var t = h(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = m(t), n !== null) {
            e.blockedOn = n, Nu(e.priority, function() {
              up(t);
            });
            return;
          }
        } else if (n === 31) {
          if (n = k(t), n !== null) {
            e.blockedOn = n, Nu(e.priority, function() {
              up(t);
            });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function io(e) {
    if (e.blockedOn !== null) return false;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Is(e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        $o = r, t.target.dispatchEvent(r), $o = null;
      } else return n = lr(t), n !== null && sp(n), e.blockedOn = t, false;
      n.shift();
    }
    return true;
  }
  function pp(e, n, t) {
    io(e) && t.delete(n);
  }
  function Dg() {
    Bs = false, zt !== null && io(zt) && (zt = null), Ft !== null && io(Ft) && (Ft = null), _t !== null && io(_t) && (_t = null), _a.forEach(pp), Da.forEach(pp);
  }
  function so(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Bs || (Bs = true, i.unstable_scheduleCallback(i.unstable_NormalPriority, Dg)));
  }
  var uo = null;
  function hp(e) {
    uo !== e && (uo = e, i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
      uo === e && (uo = null);
      for (var n = 0; n < e.length; n += 3) {
        var t = e[n], r = e[n + 1], a = e[n + 2];
        if (typeof r != "function") {
          if ($s(r || t) === null) continue;
          break;
        }
        var l = lr(t);
        l !== null && (e.splice(n, 3), n -= 3, Ii(l, { pending: true, data: a, method: t.method, action: r }, r, a));
      }
    }));
  }
  function $r(e) {
    function n(y) {
      return so(y, e);
    }
    zt !== null && so(zt, e), Ft !== null && so(Ft, e), _t !== null && so(_t, e), _a.forEach(n), Da.forEach(n);
    for (var t = 0; t < Dt.length; t++) {
      var r = Dt[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < Dt.length && (t = Dt[0], t.blockedOn === null); ) fp(t), t.blockedOn === null && Dt.shift();
    if (t = (e.ownerDocument || e).$$reactFormReplay, t != null) for (r = 0; r < t.length; r += 3) {
      var a = t[r], l = t[r + 1], s = a[tn] || null;
      if (typeof l == "function") s || hp(t);
      else if (s) {
        var f = null;
        if (l && l.hasAttribute("formAction")) {
          if (a = l, s = l[tn] || null) f = s.formAction;
          else if ($s(a) !== null) continue;
        } else f = s.action;
        typeof f == "function" ? t[r + 1] = f : (t.splice(r, 3), r -= 3), hp(t);
      }
    }
  }
  function mp() {
    function e(l) {
      l.canIntercept && l.info === "react-transition" && l.intercept({ handler: function() {
        return new Promise(function(s) {
          return a = s;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function n() {
      a !== null && (a(), a = null), r || setTimeout(t, 20);
    }
    function t() {
      if (!r && !navigation.transition) {
        var l = navigation.currentEntry;
        l && l.url != null && navigation.navigate(l.url, { state: l.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var r = false, a = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(t, 100), function() {
        r = true, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), a !== null && (a(), a = null);
      };
    }
  }
  function qs(e) {
    this._internalRoot = e;
  }
  co.prototype.render = qs.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(u(409));
    var t = n.current, r = bn();
    op(t, r, e, n, null, null);
  }, co.prototype.unmount = qs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      op(e.current, 2, null, e, null, null), Wl(), n[rr] = null;
    }
  };
  function co(e) {
    this._internalRoot = e;
  }
  co.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = Su();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Dt.length && n !== 0 && n < Dt[t].priority; t++) ;
      Dt.splice(t, 0, e), t === 0 && fp(e);
    }
  };
  var gp = c.version;
  if (gp !== "19.2.8") throw Error(u(527, gp, "19.2.8"));
  B.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0) throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = g(n), e = e !== null ? S(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Og = { bundleType: 0, version: "19.2.8", rendererPackageName: "react-dom", currentDispatcherRef: T, reconcilerVersion: "19.2.8" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fo.isDisabled && fo.supportsFiber) try {
      Vr = fo.inject(Og), dn = fo;
    } catch {
    }
  }
  return Ia.createRoot = function(e, n) {
    if (!p(e)) throw Error(u(299));
    var t = false, r = "", a = wd, l = jd, s = Sd;
    return n != null && (n.unstable_strictMode === true && (t = true), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onUncaughtError !== void 0 && (a = n.onUncaughtError), n.onCaughtError !== void 0 && (l = n.onCaughtError), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), n = ap(e, 1, false, null, null, t, r, null, a, l, s, mp), e[rr] = n.current, js(e), new qs(n);
  }, Ia.hydrateRoot = function(e, n, t) {
    if (!p(e)) throw Error(u(299));
    var r = false, a = "", l = wd, s = jd, f = Sd, y = null;
    return t != null && (t.unstable_strictMode === true && (r = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.formState !== void 0 && (y = t.formState)), n = ap(e, 1, true, n, t ?? null, r, a, y, l, s, f, mp), n.context = lp(null), t = n.current, r = bn(), r = To(r), a = kt(r), a.callback = null, wt(t, a, r), t = r, n.current.lanes = t, Yr(n, t), Un(n), e[rr] = n.current, js(e), new co(n);
  }, Ia.version = "19.2.8", Ia;
}
var Rp;
function Yg() {
  if (Rp) return Hs.exports;
  Rp = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
    } catch (c) {
      console.error(c);
    }
  }
  return i(), Hs.exports = Qg(), Hs.exports;
}
var Gg = Yg();
const Jg = Mp(Gg);
/**
* react-router v7.18.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
var ru = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i, Ip = /^[\\/]{2}/;
function Kg(i, c) {
  return c + i.replace(/\\/g, "/");
}
var Ap = "popstate";
function Tp(i) {
  return typeof i == "object" && i != null && "pathname" in i && "search" in i && "hash" in i && "state" in i && "key" in i;
}
function Xg(i = {}) {
  function c(u, p) {
    var h;
    let m = (h = p.state) == null ? void 0 : h.masked, { pathname: k, search: v, hash: g } = m || u.location;
    return Js("", { pathname: k, search: v, hash: g }, p.state && p.state.usr || null, p.state && p.state.key || "default", m ? { pathname: u.location.pathname, search: u.location.search, hash: u.location.hash } : void 0);
  }
  function d(u, p) {
    return typeof p == "string" ? p : Ha(p);
  }
  return ey(c, d, null, i);
}
function Pe(i, c) {
  if (i === false || i === null || typeof i > "u") throw new Error(c);
}
function Rn(i, c) {
  if (!i) {
    typeof console < "u" && console.warn(c);
    try {
      throw new Error(c);
    } catch {
    }
  }
}
function Zg() {
  return Math.random().toString(36).substring(2, 10);
}
function zp(i, c) {
  return { usr: i.state, key: i.key, idx: c, masked: i.mask ? { pathname: i.pathname, search: i.search, hash: i.hash } : void 0 };
}
function Js(i, c, d = null, u, p) {
  return { pathname: typeof i == "string" ? i : i.pathname, search: "", hash: "", ...typeof c == "string" ? Br(c) : c, state: d, key: c && c.key || u || Zg(), mask: p };
}
function Ha({ pathname: i = "/", search: c = "", hash: d = "" }) {
  return c && c !== "?" && (i += c.charAt(0) === "?" ? c : "?" + c), d && d !== "#" && (i += d.charAt(0) === "#" ? d : "#" + d), i;
}
function Br(i) {
  let c = {};
  if (i) {
    let d = i.indexOf("#");
    d >= 0 && (c.hash = i.substring(d), i = i.substring(0, d));
    let u = i.indexOf("?");
    u >= 0 && (c.search = i.substring(u), i = i.substring(0, u)), i && (c.pathname = i);
  }
  return c;
}
function ey(i, c, d, u = {}) {
  let { window: p = document.defaultView, v5Compat: h = false } = u, m = p.history, k = "POP", v = null, g = S();
  g == null && (g = 0, m.replaceState({ ...m.state, idx: g }, ""));
  function S() {
    return (m.state || { idx: null }).idx;
  }
  function L() {
    k = "POP";
    let D = S(), M = D == null ? null : D - g;
    g = D, v && v({ action: k, location: O.location, delta: M });
  }
  function E(D, M) {
    k = "PUSH";
    let V = Tp(D) ? D : Js(O.location, D, M);
    g = S() + 1;
    let G = zp(V, g), oe = O.createHref(V.mask || V);
    try {
      m.pushState(G, "", oe);
    } catch (te) {
      if (te instanceof DOMException && te.name === "DataCloneError") throw te;
      p.location.assign(oe);
    }
    h && v && v({ action: k, location: O.location, delta: 1 });
  }
  function I(D, M) {
    k = "REPLACE";
    let V = Tp(D) ? D : Js(O.location, D, M);
    g = S();
    let G = zp(V, g), oe = O.createHref(V.mask || V);
    m.replaceState(G, "", oe), h && v && v({ action: k, location: O.location, delta: 0 });
  }
  function $(D) {
    return ny(p, D);
  }
  let O = { get action() {
    return k;
  }, get location() {
    return i(p, m);
  }, listen(D) {
    if (v) throw new Error("A history only accepts one active listener");
    return p.addEventListener(Ap, L), v = D, () => {
      p.removeEventListener(Ap, L), v = null;
    };
  }, createHref(D) {
    return c(p, D);
  }, createURL: $, encodeLocation(D) {
    let M = $(D);
    return { pathname: M.pathname, search: M.search, hash: M.hash };
  }, push: E, replace: I, go(D) {
    return m.go(D);
  } };
  return O;
}
function ny(i, c, d = false) {
  let u = "http://localhost";
  i && (u = i.location.origin !== "null" ? i.location.origin : i.location.href), Pe(u, "No window.location.(origin|href) available to create URL");
  let p = typeof c == "string" ? c : Ha(c);
  return p = p.replace(/ $/, "%20"), !d && Ip.test(p) && (p = u + p), new URL(p, u);
}
function $p(i, c, d = "/") {
  return ty(i, c, d, false);
}
function ty(i, c, d, u, p) {
  let h = typeof c == "string" ? Br(c) : c, m = dt(h.pathname || "/", d);
  if (m == null) return null;
  let k = ry(i), v = null, g = hy(m);
  for (let S = 0; v == null && S < k.length; ++S) v = py(k[S], g, u);
  return v;
}
function ry(i) {
  let c = Bp(i);
  return ay(c), c;
}
function Bp(i, c = [], d = [], u = "", p = false) {
  let h = (m, k, v = p, g) => {
    let S = { relativePath: g === void 0 ? m.path || "" : g, caseSensitive: m.caseSensitive === true, childrenIndex: k, route: m };
    if (S.relativePath.startsWith("/")) {
      if (!S.relativePath.startsWith(u) && v) return;
      Pe(S.relativePath.startsWith(u), `Absolute route path "${S.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), S.relativePath = S.relativePath.slice(u.length);
    }
    let L = $n([u, S.relativePath]), E = d.concat(S);
    m.children && m.children.length > 0 && (Pe(m.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${L}".`), Bp(m.children, c, E, L, v)), !(m.path == null && !m.index) && c.push({ path: L, score: dy(L, m.index), routesMeta: E.map((I, $) => {
      let [O, D] = Wp(I.relativePath, I.caseSensitive, $ === E.length - 1);
      return { ...I, matcher: O, compiledParams: D };
    }) });
  };
  return i.forEach((m, k) => {
    var v;
    if (m.path === "" || !((v = m.path) != null && v.includes("?"))) h(m, k);
    else for (let g of qp(m.path)) h(m, k, true, g);
  }), c;
}
function qp(i) {
  let c = i.split("/");
  if (c.length === 0) return [];
  let [d, ...u] = c, p = d.endsWith("?"), h = d.replace(/\?$/, "");
  if (u.length === 0) return p ? [h, ""] : [h];
  let m = qp(u.join("/")), k = [];
  return k.push(...m.map((v) => v === "" ? h : [h, v].join("/"))), p && k.push(...m), k.map((v) => i.startsWith("/") && v === "" ? "/" : v);
}
function ay(i) {
  i.sort((c, d) => c.score !== d.score ? d.score - c.score : fy(c.routesMeta.map((u) => u.childrenIndex), d.routesMeta.map((u) => u.childrenIndex)));
}
var ly = /^:[\w-]+$/, oy = 3, iy = 2, sy = 1, uy = 10, cy = -2, Fp = (i) => i === "*";
function dy(i, c) {
  let d = i.split("/"), u = d.length;
  return d.some(Fp) && (u += cy), c && (u += iy), d.filter((p) => !Fp(p)).reduce((p, h) => p + (ly.test(h) ? oy : h === "" ? sy : uy), u);
}
function fy(i, c) {
  return i.length === c.length && i.slice(0, -1).every((d, u) => d === c[u]) ? i[i.length - 1] - c[c.length - 1] : 0;
}
function py(i, c, d = false) {
  let { routesMeta: u } = i, p = {}, h = "/", m = [];
  for (let k = 0; k < u.length; ++k) {
    let v = u[k], g = k === u.length - 1, S = h === "/" ? c : c.slice(h.length) || "/", L = { path: v.relativePath, caseSensitive: v.caseSensitive, end: g }, E = v.matcher && v.compiledParams ? Hp(L, S, v.matcher, v.compiledParams) : yo(L, S), I = v.route;
    if (!E && g && d && !u[u.length - 1].route.index && (E = yo({ path: v.relativePath, caseSensitive: v.caseSensitive, end: false }, S)), !E) return null;
    Object.assign(p, E.params), m.push({ params: p, pathname: $n([h, E.pathname]), pathnameBase: yy($n([h, E.pathnameBase])), route: I }), E.pathnameBase !== "/" && (h = $n([h, E.pathnameBase]));
  }
  return m;
}
function yo(i, c) {
  typeof i == "string" && (i = { path: i, caseSensitive: false, end: true });
  let [d, u] = Wp(i.path, i.caseSensitive, i.end);
  return Hp(i, c, d, u);
}
function Hp(i, c, d, u) {
  let p = c.match(d);
  if (!p) return null;
  let h = p[0], m = h.replace(/(.)\/+$/, "$1"), k = p.slice(1);
  return { params: u.reduce((v, { paramName: g, isOptional: S }, L) => {
    if (g === "*") {
      let I = k[L] || "";
      m = h.slice(0, h.length - I.length).replace(/(.)\/+$/, "$1");
    }
    const E = k[L];
    return S && !E ? v[g] = void 0 : v[g] = (E || "").replace(/%2F/g, "/"), v;
  }, {}), pathname: h, pathnameBase: m, pattern: i };
}
function Wp(i, c = false, d = true) {
  Rn(i === "*" || !i.endsWith("*") || i.endsWith("/*"), `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, "/*")}".`);
  let u = [], p = "^" + i.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (h, m, k, v, g) => {
    if (u.push({ paramName: m, isOptional: k != null }), k) {
      let S = g.charAt(v + h.length);
      return S && S !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
    }
    return "/([^\\/]+)";
  }).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return i.endsWith("*") ? (u.push({ paramName: "*" }), p += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : d ? p += "\\/*$" : i !== "" && i !== "/" && (p += "(?:(?=\\/|$))"), [new RegExp(p, c ? void 0 : "i"), u];
}
function hy(i) {
  try {
    return i.split("/").map((c) => decodeURIComponent(c).replace(/\//g, "%2F")).join("/");
  } catch (c) {
    return Rn(false, `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`), i;
  }
}
function dt(i, c) {
  if (c === "/") return i;
  if (!i.toLowerCase().startsWith(c.toLowerCase())) return null;
  let d = c.endsWith("/") ? c.length - 1 : c.length, u = i.charAt(d);
  return u && u !== "/" ? null : i.slice(d) || "/";
}
function my(i, c = "/") {
  let { pathname: d, search: u = "", hash: p = "" } = typeof i == "string" ? Br(i) : i, h;
  return d ? (d = Up(d), d.startsWith("/") ? h = _p(d.substring(1), "/") : h = _p(d, c)) : h = c, { pathname: h, search: vy(u), hash: by(p) };
}
function _p(i, c) {
  let d = vo(c).split("/");
  return i.split("/").forEach((u) => {
    u === ".." ? d.length > 1 && d.pop() : u !== "." && d.push(u);
  }), d.length > 1 ? d.join("/") : "/";
}
function Us(i, c, d, u) {
  return `Cannot include a '${i}' character in a manually specified \`to.${c}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function gy(i) {
  return i.filter((c, d) => d === 0 || c.route.path && c.route.path.length > 0);
}
function au(i) {
  let c = gy(i);
  return c.map((d, u) => u === c.length - 1 ? d.pathname : d.pathnameBase);
}
function bo(i, c, d, u = false) {
  let p;
  typeof i == "string" ? p = Br(i) : (p = { ...i }, Pe(!p.pathname || !p.pathname.includes("?"), Us("?", "pathname", "search", p)), Pe(!p.pathname || !p.pathname.includes("#"), Us("#", "pathname", "hash", p)), Pe(!p.search || !p.search.includes("#"), Us("#", "search", "hash", p)));
  let h = i === "" || p.pathname === "", m = h ? "/" : p.pathname, k;
  if (m == null) k = d;
  else {
    let L = c.length - 1;
    if (!u && m.startsWith("..")) {
      let E = m.split("/");
      for (; E[0] === ".."; ) E.shift(), L -= 1;
      p.pathname = E.join("/");
    }
    k = L >= 0 ? c[L] : "/";
  }
  let v = my(p, k), g = m && m !== "/" && m.endsWith("/"), S = (h || m === ".") && d.endsWith("/");
  return !v.pathname.endsWith("/") && (g || S) && (v.pathname += "/"), v;
}
var Up = (i) => i.replace(/[\\/]{2,}/g, "/"), $n = (i) => Up(i.join("/")), vo = (i) => i.replace(/\/+$/, ""), yy = (i) => vo(i).replace(/^\/*/, "/"), vy = (i) => !i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i, by = (i) => !i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i, xy = class {
  constructor(i, c, d, u = false) {
    this.status = i, this.statusText = c || "", this.internal = u, d instanceof Error ? (this.data = d.toString(), this.error = d) : this.data = d;
  }
};
function ky(i) {
  return i != null && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.internal == "boolean" && "data" in i;
}
function wy(i) {
  let c = i.map((d) => d.route.path).filter(Boolean);
  return $n(c) || "/";
}
var Vp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Qp(i, c) {
  let d = i;
  if (typeof d != "string" || !ru.test(d)) return { absoluteURL: void 0, isExternal: false, to: d };
  let u = d, p = false;
  if (Vp) try {
    let h = new URL(window.location.href), m = Ip.test(d) ? new URL(Kg(d, h.protocol)) : new URL(d), k = dt(m.pathname, c);
    m.origin === h.origin && k != null ? d = k + m.search + m.hash : p = true;
  } catch {
    Rn(false, `<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
  }
  return { absoluteURL: u, isExternal: p, to: d };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Yp = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Yp);
var jy = ["GET", ...Yp];
new Set(jy);
var Sy = ["about:", "blob:", "chrome:", "chrome-untrusted:", "content:", "data:", "devtools:", "file:", "filesystem:", "javascript:"];
function Ny(i) {
  try {
    return Sy.includes(new URL(i).protocol);
  } catch {
    return false;
  }
}
var qr = w.createContext(null);
qr.displayName = "DataRouter";
var xo = w.createContext(null);
xo.displayName = "DataRouterState";
var Gp = w.createContext(false);
function Cy() {
  return w.useContext(Gp);
}
var Jp = w.createContext({ isTransitioning: false });
Jp.displayName = "ViewTransition";
var Ey = w.createContext(/* @__PURE__ */ new Map());
Ey.displayName = "Fetchers";
var Py = w.createContext(null);
Py.displayName = "Await";
var xn = w.createContext(null);
xn.displayName = "Navigation";
var Wa = w.createContext(null);
Wa.displayName = "Location";
var An = w.createContext({ outlet: null, matches: [], isDataRoute: false });
An.displayName = "Route";
var lu = w.createContext(null);
lu.displayName = "RouteError";
var Kp = "REACT_ROUTER_ERROR", Ly = "REDIRECT", Ry = "ROUTE_ERROR_RESPONSE";
function Ay(i) {
  if (i.startsWith(`${Kp}:${Ly}:{`)) try {
    let c = JSON.parse(i.slice(28));
    if (typeof c == "object" && c && typeof c.status == "number" && typeof c.statusText == "string" && typeof c.location == "string" && typeof c.reloadDocument == "boolean" && typeof c.replace == "boolean") return c;
  } catch {
  }
}
function Ty(i) {
  if (i.startsWith(`${Kp}:${Ry}:{`)) try {
    let c = JSON.parse(i.slice(40));
    if (typeof c == "object" && c && typeof c.status == "number" && typeof c.statusText == "string") return new xy(c.status, c.statusText, c.data);
  } catch {
  }
}
function zy(i, { relative: c } = {}) {
  Pe(Hr(), "useHref() may be used only in the context of a <Router> component.");
  let { basename: d, navigator: u } = w.useContext(xn), { hash: p, pathname: h, search: m } = Ua(i, { relative: c }), k = h;
  return d !== "/" && (k = h === "/" ? d : $n([d, h])), u.createHref({ pathname: k, search: m, hash: p });
}
function Hr() {
  return w.useContext(Wa) != null;
}
function Tn() {
  return Pe(Hr(), "useLocation() may be used only in the context of a <Router> component."), w.useContext(Wa).location;
}
var Xp = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Zp(i) {
  w.useContext(xn).static || w.useLayoutEffect(i);
}
function Wr() {
  let { isDataRoute: i } = w.useContext(An);
  return i ? Gy() : Fy();
}
function Fy() {
  Pe(Hr(), "useNavigate() may be used only in the context of a <Router> component.");
  let i = w.useContext(qr), { basename: c, navigator: d } = w.useContext(xn), { matches: u } = w.useContext(An), { pathname: p } = Tn(), h = JSON.stringify(au(u)), m = w.useRef(false);
  return Zp(() => {
    m.current = true;
  }), w.useCallback((k, v = {}) => {
    if (Rn(m.current, Xp), !m.current) return;
    if (typeof k == "number") {
      d.go(k);
      return;
    }
    let g = bo(k, JSON.parse(h), p, v.relative === "path");
    i == null && c !== "/" && (g.pathname = g.pathname === "/" ? c : $n([c, g.pathname])), (v.replace ? d.replace : d.push)(g, v.state, v);
  }, [c, d, h, p, i]);
}
var _y = w.createContext(null);
function Dy(i) {
  let c = w.useContext(An).outlet;
  return w.useMemo(() => c && w.createElement(_y.Provider, { value: i }, c), [c, i]);
}
function Oy() {
  let { matches: i } = w.useContext(An), c = i[i.length - 1];
  return (c == null ? void 0 : c.params) ?? {};
}
function Ua(i, { relative: c } = {}) {
  let { matches: d } = w.useContext(An), { pathname: u } = Tn(), p = JSON.stringify(au(d));
  return w.useMemo(() => bo(i, JSON.parse(p), u, c === "path"), [i, p, u, c]);
}
function My(i, c) {
  return eh(i, c);
}
function eh(i, c, d) {
  var u;
  Pe(Hr(), "useRoutes() may be used only in the context of a <Router> component.");
  let { navigator: p } = w.useContext(xn), { matches: h } = w.useContext(An), m = h[h.length - 1], k = m ? m.params : {}, v = m ? m.pathname : "/", g = m ? m.pathnameBase : "/", S = m && m.route;
  {
    let M = S && S.path || "";
    th(v, !S || M.endsWith("*") || M.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M === "/" ? "*" : `${M}/*`}">.`);
  }
  let L = Tn(), E;
  if (c) {
    let M = typeof c == "string" ? Br(c) : c;
    Pe(g === "/" || ((u = M.pathname) == null ? void 0 : u.startsWith(g)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${M.pathname}" was given in the \`location\` prop.`), E = M;
  } else E = L;
  let I = E.pathname || "/", $ = I;
  if (g !== "/") {
    let M = g.replace(/^\//, "").split("/");
    $ = "/" + I.replace(/^\//, "").split("/").slice(M.length).join("/");
  }
  let O = d && d.state.matches.length ? d.state.matches.map((M) => Object.assign(M, { route: d.manifest[M.route.id] || M.route })) : $p(i, { pathname: $ });
  Rn(S || O != null, `No routes matched location "${E.pathname}${E.search}${E.hash}" `), Rn(O == null || O[O.length - 1].route.element !== void 0 || O[O.length - 1].route.Component !== void 0 || O[O.length - 1].route.lazy !== void 0, `Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
  let D = Hy(O && O.map((M) => Object.assign({}, M, { params: Object.assign({}, k, M.params), pathname: $n([g, p.encodeLocation ? p.encodeLocation(M.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : M.pathname]), pathnameBase: M.pathnameBase === "/" ? g : $n([g, p.encodeLocation ? p.encodeLocation(M.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : M.pathnameBase]) })), h, d);
  return c && D ? w.createElement(Wa.Provider, { value: { location: { pathname: "/", search: "", hash: "", state: null, key: "default", mask: void 0, ...E }, navigationType: "POP" } }, D) : D;
}
function Iy() {
  let i = Yy(), c = ky(i) ? `${i.status} ${i.statusText}` : i instanceof Error ? i.message : JSON.stringify(i), d = i instanceof Error ? i.stack : null, u = "rgba(200,200,200, 0.5)", p = { padding: "0.5rem", backgroundColor: u }, h = { padding: "2px 4px", backgroundColor: u }, m = null;
  return console.error("Error handled by React Router default ErrorBoundary:", i), m = w.createElement(w.Fragment, null, w.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), w.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", w.createElement("code", { style: h }, "ErrorBoundary"), " or", " ", w.createElement("code", { style: h }, "errorElement"), " prop on your route.")), w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", { style: { fontStyle: "italic" } }, c), d ? w.createElement("pre", { style: p }, d) : null, m);
}
var $y = w.createElement(Iy, null), nh = class extends w.Component {
  constructor(i) {
    super(i), this.state = { location: i.location, revalidation: i.revalidation, error: i.error };
  }
  static getDerivedStateFromError(i) {
    return { error: i };
  }
  static getDerivedStateFromProps(i, c) {
    return c.location !== i.location || c.revalidation !== "idle" && i.revalidation === "idle" ? { error: i.error, location: i.location, revalidation: i.revalidation } : { error: i.error !== void 0 ? i.error : c.error, location: c.location, revalidation: i.revalidation || c.revalidation };
  }
  componentDidCatch(i, c) {
    this.props.onError ? this.props.onError(i, c) : console.error("React Router caught the following error during render", i);
  }
  render() {
    let i = this.state.error;
    if (this.context && typeof i == "object" && i && "digest" in i && typeof i.digest == "string") {
      const d = Ty(i.digest);
      d && (i = d);
    }
    let c = i !== void 0 ? w.createElement(An.Provider, { value: this.props.routeContext }, w.createElement(lu.Provider, { value: i, children: this.props.component })) : this.props.children;
    return this.context ? w.createElement(By, { error: i }, c) : c;
  }
};
nh.contextType = Gp;
var Vs = /* @__PURE__ */ new WeakMap();
function By({ children: i, error: c }) {
  let { basename: d } = w.useContext(xn);
  if (typeof c == "object" && c && "digest" in c && typeof c.digest == "string") {
    let u = Ay(c.digest);
    if (u) {
      let p = Vs.get(c);
      if (p) throw p;
      let h = Qp(u.location, d), m = h.absoluteURL || h.to;
      if (Ny(m)) throw new Error("Invalid redirect location");
      if (Vp && !Vs.get(c)) if (h.isExternal || u.reloadDocument) window.location.href = m;
      else {
        const k = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(h.to, { replace: u.replace }));
        throw Vs.set(c, k), k;
      }
      return w.createElement("meta", { httpEquiv: "refresh", content: `0;url=${m}` });
    }
  }
  return i;
}
function qy({ routeContext: i, match: c, children: d }) {
  let u = w.useContext(qr);
  return u && u.static && u.staticContext && (c.route.errorElement || c.route.ErrorBoundary) && (u.staticContext._deepestRenderedBoundaryId = c.route.id), w.createElement(An.Provider, { value: i }, d);
}
function Hy(i, c = [], d) {
  let u = d == null ? void 0 : d.state;
  if (i == null) {
    if (!u) return null;
    if (u.errors) i = u.matches;
    else if (c.length === 0 && !u.initialized && u.matches.length > 0) i = u.matches;
    else return null;
  }
  let p = i, h = u == null ? void 0 : u.errors;
  if (h != null) {
    let S = p.findIndex((L) => L.route.id && (h == null ? void 0 : h[L.route.id]) !== void 0);
    Pe(S >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`), p = p.slice(0, Math.min(p.length, S + 1));
  }
  let m = false, k = -1;
  if (d && u) {
    m = u.renderFallback;
    for (let S = 0; S < p.length; S++) {
      let L = p[S];
      if ((L.route.HydrateFallback || L.route.hydrateFallbackElement) && (k = S), L.route.id) {
        let { loaderData: E, errors: I } = u, $ = L.route.loader && !E.hasOwnProperty(L.route.id) && (!I || I[L.route.id] === void 0);
        if (L.route.lazy || $) {
          d.isStatic && (m = true), k >= 0 ? p = p.slice(0, k + 1) : p = [p[0]];
          break;
        }
      }
    }
  }
  let v = d == null ? void 0 : d.onError, g = u && v ? (S, L) => {
    var E, I;
    v(S, { location: u.location, params: ((I = (E = u.matches) == null ? void 0 : E[0]) == null ? void 0 : I.params) ?? {}, pattern: wy(u.matches), errorInfo: L });
  } : void 0;
  return p.reduceRight((S, L, E) => {
    let I, $ = false, O = null, D = null;
    u && (I = h && L.route.id ? h[L.route.id] : void 0, O = L.route.errorElement || $y, m && (k < 0 && E === 0 ? (th("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), $ = true, D = null) : k === E && ($ = true, D = L.route.hydrateFallbackElement || null)));
    let M = c.concat(p.slice(0, E + 1)), V = () => {
      let G;
      return I ? G = O : $ ? G = D : L.route.Component ? G = w.createElement(L.route.Component, null) : L.route.element ? G = L.route.element : G = S, w.createElement(qy, { match: L, routeContext: { outlet: S, matches: M, isDataRoute: u != null }, children: G });
    };
    return u && (L.route.ErrorBoundary || L.route.errorElement || E === 0) ? w.createElement(nh, { location: u.location, revalidation: u.revalidation, component: O, error: I, children: V(), routeContext: { outlet: null, matches: M, isDataRoute: true }, onError: g }) : V();
  }, null);
}
function ou(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Wy(i) {
  let c = w.useContext(qr);
  return Pe(c, ou(i)), c;
}
function Uy(i) {
  let c = w.useContext(xo);
  return Pe(c, ou(i)), c;
}
function Vy(i) {
  let c = w.useContext(An);
  return Pe(c, ou(i)), c;
}
function iu(i) {
  let c = Vy(i), d = c.matches[c.matches.length - 1];
  return Pe(d.route.id, `${i} can only be used on routes that contain a unique "id"`), d.route.id;
}
function Qy() {
  return iu("useRouteId");
}
function Yy() {
  var i;
  let c = w.useContext(lu), d = Uy("useRouteError"), u = iu("useRouteError");
  return c !== void 0 ? c : (i = d.errors) == null ? void 0 : i[u];
}
function Gy() {
  let { router: i } = Wy("useNavigate"), c = iu("useNavigate"), d = w.useRef(false);
  return Zp(() => {
    d.current = true;
  }), w.useCallback(async (u, p = {}) => {
    Rn(d.current, Xp), d.current && (typeof u == "number" ? await i.navigate(u) : await i.navigate(u, { fromRouteId: c, ...p }));
  }, [i, c]);
}
var Dp = {};
function th(i, c, d) {
  !c && !Dp[i] && (Dp[i] = true, Rn(false, d));
}
w.memo(Jy);
function Jy({ routes: i, manifest: c, future: d, state: u, isStatic: p, onError: h }) {
  return eh(i, void 0, { manifest: c, state: u, isStatic: p, onError: h });
}
function su({ to: i, replace: c, state: d, relative: u }) {
  Pe(Hr(), "<Navigate> may be used only in the context of a <Router> component.");
  let { static: p } = w.useContext(xn);
  Rn(!p, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
  let { matches: h } = w.useContext(An), { pathname: m } = Tn(), k = Wr(), v = bo(i, au(h), m, u === "path"), g = JSON.stringify(v);
  return w.useEffect(() => {
    k(JSON.parse(g), { replace: c, state: d, relative: u });
  }, [k, g, u, c, d]), null;
}
function Ky(i) {
  return Dy(i.context);
}
function en(i) {
  Pe(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
function Xy({ basename: i = "/", children: c = null, location: d, navigationType: u = "POP", navigator: p, static: h = false, useTransitions: m }) {
  Pe(!Hr(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let k = i.replace(/^\/*/, "/"), v = w.useMemo(() => ({ basename: k, navigator: p, static: h, useTransitions: m, future: {} }), [k, p, h, m]);
  typeof d == "string" && (d = Br(d));
  let { pathname: g = "/", search: S = "", hash: L = "", state: E = null, key: I = "default", mask: $ } = d, O = w.useMemo(() => {
    let D = dt(g, k);
    return D == null ? null : { location: { pathname: D, search: S, hash: L, state: E, key: I, mask: $ }, navigationType: u };
  }, [k, g, S, L, E, I, u, $]);
  return Rn(O != null, `<Router basename="${k}"> is not able to match the URL "${g}${S}${L}" because it does not start with the basename, so the <Router> won't render anything.`), O == null ? null : w.createElement(xn.Provider, { value: v }, w.createElement(Wa.Provider, { children: c, value: O }));
}
function Zy({ children: i, location: c }) {
  return My(Ks(i), c);
}
function Ks(i, c = []) {
  let d = [];
  return w.Children.forEach(i, (u, p) => {
    if (!w.isValidElement(u)) return;
    let h = [...c, p];
    if (u.type === w.Fragment) {
      d.push.apply(d, Ks(u.props.children, h));
      return;
    }
    Pe(u.type === en, `[${typeof u.type == "string" ? u.type : u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Pe(!u.props.index || !u.props.children, "An index route cannot have child routes.");
    let m = { id: u.props.id || h.join("-"), caseSensitive: u.props.caseSensitive, element: u.props.element, Component: u.props.Component, index: u.props.index, path: u.props.path, middleware: u.props.middleware, loader: u.props.loader, action: u.props.action, hydrateFallbackElement: u.props.hydrateFallbackElement, HydrateFallback: u.props.HydrateFallback, errorElement: u.props.errorElement, ErrorBoundary: u.props.ErrorBoundary, hasErrorBoundary: u.props.hasErrorBoundary === true || u.props.ErrorBoundary != null || u.props.errorElement != null, shouldRevalidate: u.props.shouldRevalidate, handle: u.props.handle, lazy: u.props.lazy };
    u.props.children && (m.children = Ks(u.props.children, h)), d.push(m);
  }), d;
}
var mo = "get", go = "application/x-www-form-urlencoded";
function ko(i) {
  return typeof HTMLElement < "u" && i instanceof HTMLElement;
}
function ev(i) {
  return ko(i) && i.tagName.toLowerCase() === "button";
}
function nv(i) {
  return ko(i) && i.tagName.toLowerCase() === "form";
}
function tv(i) {
  return ko(i) && i.tagName.toLowerCase() === "input";
}
function rv(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function av(i, c) {
  return i.button === 0 && (!c || c === "_self") && !rv(i);
}
function Xs(i = "") {
  return new URLSearchParams(typeof i == "string" || Array.isArray(i) || i instanceof URLSearchParams ? i : Object.keys(i).reduce((c, d) => {
    let u = i[d];
    return c.concat(Array.isArray(u) ? u.map((p) => [d, p]) : [[d, u]]);
  }, []));
}
function lv(i, c) {
  let d = Xs(i);
  return c && c.forEach((u, p) => {
    d.has(p) || c.getAll(p).forEach((h) => {
      d.append(p, h);
    });
  }), d;
}
var po = null;
function ov() {
  if (po === null) try {
    new FormData(document.createElement("form"), 0), po = false;
  } catch {
    po = true;
  }
  return po;
}
var iv = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Qs(i) {
  return i != null && !iv.has(i) ? (Rn(false, `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${go}"`), null) : i;
}
function sv(i, c) {
  let d, u, p, h, m;
  if (nv(i)) {
    let k = i.getAttribute("action");
    u = k ? dt(k, c) : null, d = i.getAttribute("method") || mo, p = Qs(i.getAttribute("enctype")) || go, h = new FormData(i);
  } else if (ev(i) || tv(i) && (i.type === "submit" || i.type === "image")) {
    let k = i.form;
    if (k == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let v = i.getAttribute("formaction") || k.getAttribute("action");
    if (u = v ? dt(v, c) : null, d = i.getAttribute("formmethod") || k.getAttribute("method") || mo, p = Qs(i.getAttribute("formenctype")) || Qs(k.getAttribute("enctype")) || go, h = new FormData(k, i), !ov()) {
      let { name: g, type: S, value: L } = i;
      if (S === "image") {
        let E = g ? `${g}.` : "";
        h.append(`${E}x`, "0"), h.append(`${E}y`, "0");
      } else g && h.append(g, L);
    }
  } else {
    if (ko(i)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    d = mo, u = null, p = go, m = i;
  }
  return h && p === "text/plain" && (m = h, h = void 0), { action: u, method: d.toLowerCase(), encType: p, formData: h, body: m };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function uu(i, c) {
  if (i === false || i === null || typeof i > "u") throw new Error(c);
}
function rh(i, c, d, u) {
  let p = typeof i == "string" ? new URL(i, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : i;
  return d ? p.pathname.endsWith("/") ? p.pathname = `${p.pathname}_.${u}` : p.pathname = `${p.pathname}.${u}` : p.pathname === "/" ? p.pathname = `_root.${u}` : c && dt(p.pathname, c) === "/" ? p.pathname = `${vo(c)}/_root.${u}` : p.pathname = `${vo(p.pathname)}.${u}`, p;
}
async function uv(i, c) {
  if (i.id in c) return c[i.id];
  try {
    let d = await import(i.module);
    return c[i.id] = d, d;
  } catch (d) {
    return console.error(`Error loading route module \`${i.module}\`, reloading page...`), console.error(d), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function cv(i) {
  return i == null ? false : i.href == null ? i.rel === "preload" && typeof i.imageSrcSet == "string" && typeof i.imageSizes == "string" : typeof i.rel == "string" && typeof i.href == "string";
}
async function dv(i, c, d) {
  let u = await Promise.all(i.map(async (p) => {
    let h = c.routes[p.route.id];
    if (h) {
      let m = await uv(h, d);
      return m.links ? m.links() : [];
    }
    return [];
  }));
  return mv(u.flat(1).filter(cv).filter((p) => p.rel === "stylesheet" || p.rel === "preload").map((p) => p.rel === "stylesheet" ? { ...p, rel: "prefetch", as: "style" } : { ...p, rel: "prefetch" }));
}
function Op(i, c, d, u, p, h) {
  let m = (v, g) => d[g] ? v.route.id !== d[g].route.id : true, k = (v, g) => {
    var S;
    return d[g].pathname !== v.pathname || ((S = d[g].route.path) == null ? void 0 : S.endsWith("*")) && d[g].params["*"] !== v.params["*"];
  };
  return h === "assets" ? c.filter((v, g) => m(v, g) || k(v, g)) : h === "data" ? c.filter((v, g) => {
    var S;
    let L = u.routes[v.route.id];
    if (!L || !L.hasLoader) return false;
    if (m(v, g) || k(v, g)) return true;
    if (v.route.shouldRevalidate) {
      let E = v.route.shouldRevalidate({ currentUrl: new URL(p.pathname + p.search + p.hash, window.origin), currentParams: ((S = d[0]) == null ? void 0 : S.params) || {}, nextUrl: new URL(i, window.origin), nextParams: v.params, defaultShouldRevalidate: true });
      if (typeof E == "boolean") return E;
    }
    return true;
  }) : [];
}
function fv(i, c, { includeHydrateFallback: d } = {}) {
  return pv(i.map((u) => {
    let p = c.routes[u.route.id];
    if (!p) return [];
    let h = [p.module];
    return p.clientActionModule && (h = h.concat(p.clientActionModule)), p.clientLoaderModule && (h = h.concat(p.clientLoaderModule)), d && p.hydrateFallbackModule && (h = h.concat(p.hydrateFallbackModule)), p.imports && (h = h.concat(p.imports)), h;
  }).flat(1));
}
function pv(i) {
  return [...new Set(i)];
}
function hv(i) {
  let c = {}, d = Object.keys(i).sort();
  for (let u of d) c[u] = i[u];
  return c;
}
function mv(i, c) {
  let d = /* @__PURE__ */ new Set();
  return new Set(c), i.reduce((u, p) => {
    let h = JSON.stringify(hv(p));
    return d.has(h) || (d.add(h), u.push({ key: h, link: p })), u;
  }, []);
}
function cu() {
  let i = w.useContext(qr);
  return uu(i, "You must render this element inside a <DataRouterContext.Provider> element"), i;
}
function gv() {
  let i = w.useContext(xo);
  return uu(i, "You must render this element inside a <DataRouterStateContext.Provider> element"), i;
}
var du = w.createContext(void 0);
du.displayName = "FrameworkContext";
function wo() {
  let i = w.useContext(du);
  return uu(i, "You must render this element inside a <HydratedRouter> element"), i;
}
function yv(i, c) {
  let d = w.useContext(du), [u, p] = w.useState(false), [h, m] = w.useState(false), { onFocus: k, onBlur: v, onMouseEnter: g, onMouseLeave: S, onTouchStart: L } = c, E = w.useRef(null);
  w.useEffect(() => {
    if (i === "render" && m(true), i === "viewport") {
      let O = (M) => {
        M.forEach((V) => {
          m(V.isIntersecting);
        });
      }, D = new IntersectionObserver(O, { threshold: 0.5 });
      return E.current && D.observe(E.current), () => {
        D.disconnect();
      };
    }
  }, [i]), w.useEffect(() => {
    if (u) {
      let O = setTimeout(() => {
        m(true);
      }, 100);
      return () => {
        clearTimeout(O);
      };
    }
  }, [u]);
  let I = () => {
    p(true);
  }, $ = () => {
    p(false), m(false);
  };
  return d ? i !== "intent" ? [h, E, {}] : [h, E, { onFocus: $a(k, I), onBlur: $a(v, $), onMouseEnter: $a(g, I), onMouseLeave: $a(S, $), onTouchStart: $a(L, I) }] : [false, E, {}];
}
function $a(i, c) {
  return (d) => {
    i && i(d), d.defaultPrevented || c(d);
  };
}
function vv({ page: i, ...c }) {
  let d = Cy(), { nonce: u } = wo(), { router: p } = cu(), h = w.useMemo(() => $p(p.routes, i, p.basename), [p.routes, i, p.basename]);
  return h ? (c.nonce == null && u && (c = { ...c, nonce: u }), d ? w.createElement(xv, { page: i, matches: h, ...c }) : w.createElement(kv, { page: i, matches: h, ...c })) : null;
}
function bv(i) {
  let { manifest: c, routeModules: d } = wo(), [u, p] = w.useState([]);
  return w.useEffect(() => {
    let h = false;
    return dv(i, c, d).then((m) => {
      h || p(m);
    }), () => {
      h = true;
    };
  }, [i, c, d]), u;
}
function xv({ page: i, matches: c, ...d }) {
  let u = Tn(), { future: p } = wo(), { basename: h } = cu(), m = w.useMemo(() => {
    if (i === u.pathname + u.search + u.hash) return [];
    let k = rh(i, h, p.v8_trailingSlashAwareDataRequests, "rsc"), v = false, g = [];
    for (let S of c) typeof S.route.shouldRevalidate == "function" ? v = true : g.push(S.route.id);
    return v && g.length > 0 && k.searchParams.set("_routes", g.join(",")), [k.pathname + k.search];
  }, [h, p.v8_trailingSlashAwareDataRequests, i, u, c]);
  return w.createElement(w.Fragment, null, m.map((k) => w.createElement("link", { key: k, rel: "prefetch", as: "fetch", href: k, ...d })));
}
function kv({ page: i, matches: c, ...d }) {
  let u = Tn(), { future: p, manifest: h, routeModules: m } = wo(), { basename: k } = cu(), { loaderData: v, matches: g } = gv(), S = w.useMemo(() => Op(i, c, g, h, u, "data"), [i, c, g, h, u]), L = w.useMemo(() => Op(i, c, g, h, u, "assets"), [i, c, g, h, u]), E = w.useMemo(() => {
    if (i === u.pathname + u.search + u.hash) return [];
    let O = /* @__PURE__ */ new Set(), D = false;
    if (c.forEach((V) => {
      var G;
      let oe = h.routes[V.route.id];
      !oe || !oe.hasLoader || (!S.some((te) => te.route.id === V.route.id) && V.route.id in v && (G = m[V.route.id]) != null && G.shouldRevalidate || oe.hasClientLoader ? D = true : O.add(V.route.id));
    }), O.size === 0) return [];
    let M = rh(i, k, p.v8_trailingSlashAwareDataRequests, "data");
    return D && O.size > 0 && M.searchParams.set("_routes", c.filter((V) => O.has(V.route.id)).map((V) => V.route.id).join(",")), [M.pathname + M.search];
  }, [k, p.v8_trailingSlashAwareDataRequests, v, u, h, S, c, i, m]), I = w.useMemo(() => fv(L, h), [L, h]), $ = bv(L);
  return w.createElement(w.Fragment, null, E.map((O) => w.createElement("link", { key: O, rel: "prefetch", as: "fetch", href: O, ...d })), I.map((O) => w.createElement("link", { key: O, rel: "modulepreload", href: O, ...d })), $.map(({ key: O, link: D }) => w.createElement("link", { key: O, nonce: d.nonce, ...D, crossOrigin: D.crossOrigin ?? d.crossOrigin })));
}
function wv(...i) {
  return (c) => {
    i.forEach((d) => {
      typeof d == "function" ? d(c) : d != null && (d.current = c);
    });
  };
}
var jv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  jv && (window.__reactRouterVersion = "7.18.2");
} catch {
}
function Sv({ basename: i, children: c, useTransitions: d, window: u }) {
  let p = w.useRef();
  p.current == null && (p.current = Xg({ window: u, v5Compat: true }));
  let h = p.current, [m, k] = w.useState({ action: h.action, location: h.location }), v = w.useCallback((g) => {
    d === false ? k(g) : w.startTransition(() => k(g));
  }, [d]);
  return w.useLayoutEffect(() => h.listen(v), [h, v]), w.createElement(Xy, { basename: i, children: c, location: m.location, navigationType: m.action, navigator: h, useTransitions: d });
}
var ue = w.forwardRef(function({ onClick: i, discover: c = "render", prefetch: d = "none", relative: u, reloadDocument: p, replace: h, mask: m, state: k, target: v, to: g, preventScrollReset: S, viewTransition: L, defaultShouldRevalidate: E, ...I }, $) {
  let { basename: O, navigator: D, useTransitions: M } = w.useContext(xn), V = typeof g == "string" && ru.test(g), G = Qp(g, O);
  g = G.to;
  let oe = zy(g, { relative: u }), te = Tn(), Se = null;
  if (m) {
    let Be = bo(m, [], te.mask ? te.mask.pathname : "/", true);
    O !== "/" && (Be.pathname = Be.pathname === "/" ? O : $n([O, Be.pathname])), Se = D.createHref(Be);
  }
  let [ee, Le, nn] = yv(d, I), ft = Ev(g, { replace: h, mask: m, state: k, target: v, preventScrollReset: S, relative: u, viewTransition: L, defaultShouldRevalidate: E, useTransitions: M });
  function kn(Be) {
    i && i(Be), Be.defaultPrevented || ft(Be);
  }
  let Ue = !(G.isExternal || p), Bn = w.createElement("a", { ...I, ...nn, href: (Ue ? Se : void 0) || G.absoluteURL || oe, onClick: Ue ? kn : i, ref: wv($, Le), target: v, "data-discover": !V && c === "render" ? "true" : void 0 });
  return ee && !V ? w.createElement(w.Fragment, null, Bn, w.createElement(vv, { page: oe })) : Bn;
});
ue.displayName = "Link";
var qa = w.forwardRef(function({ "aria-current": i = "page", caseSensitive: c = false, className: d = "", end: u = false, style: p, to: h, viewTransition: m, children: k, ...v }, g) {
  let S = Ua(h, { relative: v.relative }), L = Tn(), E = w.useContext(xo), { navigator: I, basename: $ } = w.useContext(xn), O = E != null && zv(S) && m === true, D = I.encodeLocation ? I.encodeLocation(S).pathname : S.pathname, M = L.pathname, V = E && E.navigation && E.navigation.location ? E.navigation.location.pathname : null;
  c || (M = M.toLowerCase(), V = V ? V.toLowerCase() : null, D = D.toLowerCase()), V && $ && (V = dt(V, $) || V);
  const G = D !== "/" && D.endsWith("/") ? D.length - 1 : D.length;
  let oe = M === D || !u && M.startsWith(D) && M.charAt(G) === "/", te = V != null && (V === D || !u && V.startsWith(D) && V.charAt(D.length) === "/"), Se = { isActive: oe, isPending: te, isTransitioning: O }, ee = oe ? i : void 0, Le;
  typeof d == "function" ? Le = d(Se) : Le = [d, oe ? "active" : null, te ? "pending" : null, O ? "transitioning" : null].filter(Boolean).join(" ");
  let nn = typeof p == "function" ? p(Se) : p;
  return w.createElement(ue, { ...v, "aria-current": ee, className: Le, ref: g, style: nn, to: h, viewTransition: m }, typeof k == "function" ? k(Se) : k);
});
qa.displayName = "NavLink";
var Nv = w.forwardRef(({ discover: i = "render", fetcherKey: c, navigate: d, reloadDocument: u, replace: p, state: h, method: m = mo, action: k, onSubmit: v, relative: g, preventScrollReset: S, viewTransition: L, defaultShouldRevalidate: E, ...I }, $) => {
  let { useTransitions: O } = w.useContext(xn), D = Av(), M = Tv(k, { relative: g }), V = m.toLowerCase() === "get" ? "get" : "post", G = typeof k == "string" && ru.test(k), oe = (te) => {
    if (v && v(te), te.defaultPrevented) return;
    te.preventDefault();
    let Se = te.nativeEvent.submitter, ee = (Se == null ? void 0 : Se.getAttribute("formmethod")) || m, Le = () => D(Se || te.currentTarget, { fetcherKey: c, method: ee, navigate: d, replace: p, state: h, relative: g, preventScrollReset: S, viewTransition: L, defaultShouldRevalidate: E });
    O && d !== false ? w.startTransition(() => Le()) : Le();
  };
  return w.createElement("form", { ref: $, method: V, action: M, onSubmit: u ? v : oe, ...I, "data-discover": !G && i === "render" ? "true" : void 0 });
});
Nv.displayName = "Form";
function Cv(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ah(i) {
  let c = w.useContext(qr);
  return Pe(c, Cv(i)), c;
}
function Ev(i, { target: c, replace: d, mask: u, state: p, preventScrollReset: h, relative: m, viewTransition: k, defaultShouldRevalidate: v, useTransitions: g } = {}) {
  let S = Wr(), L = Tn(), E = Ua(i, { relative: m });
  return w.useCallback((I) => {
    if (av(I, c)) {
      I.preventDefault();
      let $ = d !== void 0 ? d : Ha(L) === Ha(E), O = () => S(i, { replace: $, mask: u, state: p, preventScrollReset: h, relative: m, viewTransition: k, defaultShouldRevalidate: v });
      g ? w.startTransition(() => O()) : O();
    }
  }, [L, S, E, d, u, p, c, i, h, m, k, v, g]);
}
function Pv(i) {
  Rn(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
  let c = w.useRef(Xs(i)), d = w.useRef(false), u = Tn(), p = w.useMemo(() => lv(u.search, d.current ? null : c.current), [u.search]), h = Wr(), m = w.useCallback((k, v) => {
    const g = Xs(typeof k == "function" ? k(new URLSearchParams(p)) : k);
    d.current = true, h("?" + g, v);
  }, [h, p]);
  return [p, m];
}
var Lv = 0, Rv = () => `__${String(++Lv)}__`;
function Av() {
  let { router: i } = ah("useSubmit"), { basename: c } = w.useContext(xn), d = Qy(), u = i.fetch, p = i.navigate;
  return w.useCallback(async (h, m = {}) => {
    let { action: k, method: v, encType: g, formData: S, body: L } = sv(h, c);
    if (m.navigate === false) {
      let E = m.fetcherKey || Rv();
      await u(E, d, m.action || k, { defaultShouldRevalidate: m.defaultShouldRevalidate, preventScrollReset: m.preventScrollReset, formData: S, body: L, formMethod: m.method || v, formEncType: m.encType || g, flushSync: m.flushSync });
    } else await p(m.action || k, { defaultShouldRevalidate: m.defaultShouldRevalidate, preventScrollReset: m.preventScrollReset, formData: S, body: L, formMethod: m.method || v, formEncType: m.encType || g, replace: m.replace, state: m.state, fromRouteId: d, flushSync: m.flushSync, viewTransition: m.viewTransition });
  }, [u, p, c, d]);
}
function Tv(i, { relative: c } = {}) {
  let { basename: d } = w.useContext(xn), u = w.useContext(An);
  Pe(u, "useFormAction must be used inside a RouteContext");
  let [p] = u.matches.slice(-1), h = { ...Ua(i || ".", { relative: c }) }, m = Tn();
  if (i == null) {
    h.search = m.search;
    let k = new URLSearchParams(h.search), v = k.getAll("index");
    if (v.some((g) => g === "")) {
      k.delete("index"), v.filter((S) => S).forEach((S) => k.append("index", S));
      let g = k.toString();
      h.search = g ? `?${g}` : "";
    }
  }
  return (!i || i === ".") && p.route.index && (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"), d !== "/" && (h.pathname = h.pathname === "/" ? d : $n([d, h.pathname])), Ha(h);
}
function zv(i, { relative: c } = {}) {
  let d = w.useContext(Jp);
  Pe(d != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
  let { basename: u } = ah("useViewTransitionState"), p = Ua(i, { relative: c });
  if (!d.isTransitioning) return false;
  let h = dt(d.currentLocation.pathname, u) || d.currentLocation.pathname, m = dt(d.nextLocation.pathname, u) || d.nextLocation.pathname;
  return yo(p.pathname, m) != null || yo(p.pathname, h) != null;
}
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Fv = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), lh = (...i) => i.filter((c, d, u) => !!c && c.trim() !== "" && u.indexOf(c) === d).join(" ").trim();
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var _v = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Dv = w.forwardRef(({ color: i = "currentColor", size: c = 24, strokeWidth: d = 2, absoluteStrokeWidth: u, className: p = "", children: h, iconNode: m, ...k }, v) => w.createElement("svg", { ref: v, ..._v, width: c, height: c, stroke: i, strokeWidth: u ? Number(d) * 24 / Number(c) : d, className: lh("lucide", p), ...k }, [...m.map(([g, S]) => w.createElement(g, S)), ...Array.isArray(h) ? h : [h]]));
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const je = (i, c) => {
  const d = w.forwardRef(({ className: u, ...p }, h) => w.createElement(Dv, { ref: h, iconNode: c, className: lh(`lucide-${Fv(i)}`, u), ...p }));
  return d.displayName = `${i}`, d;
};
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ov = je("ArrowLeft", [["path", { d: "m12 19-7-7 7-7", key: "1l729n" }], ["path", { d: "M19 12H5", key: "x3x0zl" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ct = je("ArrowRight", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const oh = je("ChartColumn", [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["path", { d: "M18 17V9", key: "2bz60n" }], ["path", { d: "M13 17V5", key: "1frdt8" }], ["path", { d: "M8 17v-3", key: "17ska0" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const fu = je("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Mv = je("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Iv = je("CircleUserRound", [["path", { d: "M18 20a6 6 0 0 0-12 0", key: "1qehca" }], ["circle", { cx: "12", cy: "10", r: "4", key: "1h16sb" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ih = je("Eye", [["path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0", key: "1nclc0" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const jo = je("Heart", [["path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z", key: "c3ymky" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $v = je("Instagram", [["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }], ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }], ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Bv = je("LayoutDashboard", [["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }], ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }], ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }], ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const sh = je("LockKeyhole", [["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }], ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }], ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const qv = je("LogOut", [["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }], ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }], ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Hv = je("Menu", [["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }], ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }], ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const uh = je("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ch = je("Package", [["path", { d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z", key: "1a0edw" }], ["path", { d: "M12 22V12", key: "d0xqtd" }], ["path", { d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7", key: "yx3hmr" }], ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Va = je("Plus", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "M12 5v14", key: "s699le" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const pu = je("Search", [["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Wv = je("Settings", [["path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z", key: "1qme2f" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const So = je("ShoppingBag", [["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }], ["path", { d: "M3 6h18", key: "d0wm0j" }], ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Uv = je("SlidersHorizontal", [["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }], ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }], ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }], ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }], ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }], ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }], ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }], ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }], ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Zs = je("Sparkles", [["path", { d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z", key: "4pj2yx" }], ["path", { d: "M20 3v4", key: "1olli1" }], ["path", { d: "M22 5h-4", key: "1gvqau" }], ["path", { d: "M4 17v2", key: "vumght" }], ["path", { d: "M5 18H3", key: "zchphs" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ba = je("Star", [["path", { d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z", key: "r04s7s" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const hu = je("Trash2", [["path", { d: "M3 6h18", key: "d0wm0j" }], ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }], ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }], ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }], ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const dh = je("Truck", [["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }], ["path", { d: "M15 18H9", key: "1lyqi6" }], ["path", { d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14", key: "lysw3i" }], ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }], ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const fh = je("Users", [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }], ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }], ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Qa = je("X", [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]]), Vv = "/api", eu = [{ id: "p1", name: "Noir Santal", slug: "noir-santal", description: "A smoky, woody signature with sandalwood, saffron and soft amber.", brand: "SCENTRA", gender: "unisex", category: "Custom Perfume", categorySlug: "custom-perfumes", featured: true, onSale: false, images: ["https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85"], scentNotes: { top: "Saffron, pink pepper", middle: "Iris, cedar", base: "Sandalwood, amber" }, variants: [{ id: "p1-50", size: "50ml", price: 42e3, stock: 12 }, { id: "p1-100", size: "100ml", price: 68e3, stock: 8 }] }, { id: "p2", name: "Velvet Oud", slug: "velvet-oud", description: "Rich oud softened with rose absolute, incense and vanilla bean.", brand: "SCENTRA", gender: "unisex", category: "Custom Perfume", categorySlug: "custom-perfumes", featured: true, onSale: true, images: ["https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85"], scentNotes: { top: "Bergamot, cardamom", middle: "Rose, incense", base: "Oud, vanilla" }, variants: [{ id: "p2-50", size: "50ml", price: 46e3, stock: 10 }, { id: "p2-100", size: "100ml", price: 76e3, stock: 4 }] }, { id: "p3", name: "Black Opium", slug: "black-opium", description: "The iconic coffee-floral fragrance with vanilla and white flowers.", brand: "Yves Saint Laurent", gender: "women", category: "Branded Perfume", categorySlug: "branded-perfumes", featured: true, onSale: false, images: ["https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=900&q=85"], scentNotes: { top: "Pear, pink pepper", middle: "Coffee, jasmine", base: "Vanilla, patchouli" }, variants: [{ id: "p3-30", size: "30ml", price: 98e3, stock: 5 }] }, { id: "p4", name: "Aqua Di Gio", slug: "aqua-di-gio", description: "A bright marine classic with bergamot, neroli and cedarwood.", brand: "Giorgio Armani", gender: "men", category: "Branded Perfume", categorySlug: "branded-perfumes", featured: false, onSale: false, images: ["https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=85"], scentNotes: { top: "Lime, bergamot", middle: "Marine notes, jasmine", base: "Cedar, musk" }, variants: [{ id: "p4-50", size: "50ml", price: 88e3, stock: 7 }] }, { id: "p5", name: "Dusk Body Mist", slug: "dusk-body-mist", description: "A sheer, skin-close mist for golden hour and slow evenings.", brand: "SCENTRA", gender: "unisex", category: "Body Spray", categorySlug: "body-sprays", featured: true, onSale: false, images: ["https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=900&q=85"], scentNotes: { top: "Mandarin, pear", middle: "Peony, tea", base: "Musk, tonka" }, variants: [{ id: "p5-150", size: "150ml", price: 18e3, stock: 22 }] }, { id: "p6", name: "Cedar + Clay", slug: "cedar-clay-deodorant", description: "A clean, aluminium-free deodorant with a dry cedar finish.", brand: "SCENTRA", gender: "men", category: "Deodorant", categorySlug: "deodorants", featured: false, onSale: true, images: ["https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85"], scentNotes: { top: "Grapefruit", middle: "Clary sage", base: "Cedar, vetiver" }, variants: [{ id: "p6-75", size: "75g", price: 9500, stock: 31 }] }], nu = [{ name: "Custom Perfumes", slug: "custom-perfumes", eyebrow: "Made by us", description: "Small-batch signatures, blended in Lagos.", image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1000&q=85" }, { name: "Branded Perfumes", slug: "branded-perfumes", eyebrow: "Iconic houses", description: "The world\u2019s most coveted fragrance names.", image: "https://images.unsplash.com/photo-1590156221122-bf9439f181aa?auto=format&fit=crop&w=1000&q=85" }, { name: "Body Sprays", slug: "body-sprays", eyebrow: "Everyday ritual", description: "Effortless scent for every day.", image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1000&q=85" }, { name: "Deodorants", slug: "deodorants", eyebrow: "Fresh essentials", description: "Quiet confidence, all day.", image: "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&w=1000&q=85" }], Te = (i) => `\u20A6${new Intl.NumberFormat("en-NG").format(i)}`;
async function We(i, c) {
  const d = await fetch(`${Vv}${i}`, { headers: { "Content-Type": "application/json", ...(c == null ? void 0 : c.headers) || {} }, ...c });
  if (!d.ok) throw new Error((await d.json().catch(() => ({}))).error || "Something went wrong");
  return d.status === 204 ? null : d.json();
}
const ph = w.createContext(null);
function Qv({ children: i }) {
  const [c, d] = w.useState(eu), [u, p] = w.useState(() => JSON.parse(localStorage.getItem("scentra-cart") || "[]")), [h, m] = w.useState(() => JSON.parse(localStorage.getItem("scentra-wishlist") || "[]")), [k, v] = w.useState(() => JSON.parse(localStorage.getItem("scentra-coupon") || "null")), [g, S] = w.useState({ announcement: "Complimentary Lagos delivery on orders over \u20A675,000", heroEyebrow: "The art of personal fragrance", heroTitle: "Leave a beautiful impression." });
  w.useEffect(() => {
    We("/products").then((D) => d(D.length ? D : eu)).catch(() => {
    });
  }, []), w.useEffect(() => {
    We("/content").then(S).catch(() => {
    });
  }, []), w.useEffect(() => localStorage.setItem("scentra-cart", JSON.stringify(u)), [u]), w.useEffect(() => localStorage.setItem("scentra-wishlist", JSON.stringify(h)), [h]), w.useEffect(() => k ? localStorage.setItem("scentra-coupon", JSON.stringify(k)) : localStorage.removeItem("scentra-coupon"), [k]);
  const L = (D, M, V = 1) => p((G) => {
    const oe = `${D.id}:${M.id}`;
    return G.find((te) => te.key === oe) ? G.map((te) => te.key === oe ? { ...te, qty: Math.min(te.qty + V, M.stock) } : te) : [...G, { key: oe, productId: D.id, variantId: M.id, slug: D.slug, name: D.name, image: D.images[0], size: M.size, price: M.price, stock: M.stock, qty: V }];
  }), E = (D, M) => p((V) => V.map((G) => G.key === D ? { ...G, qty: Math.max(1, Math.min(M, G.stock)) } : G)), I = (D) => p((M) => M.filter((V) => V.key !== D)), $ = (D) => m((M) => M.includes(D) ? M.filter((V) => V !== D) : [...M, D]), O = w.useMemo(() => ({ products: c, setProducts: d, cart: u, setCart: p, wishlist: h, coupon: k, setCoupon: v, content: g, setContent: S, addToCart: L, updateQty: E, removeItem: I, toggleWishlist: $, cartCount: u.reduce((D, M) => D + M.qty, 0), subtotal: u.reduce((D, M) => D + M.price * M.qty, 0) }), [c, u, h, k, g]);
  return o.jsx(ph.Provider, { value: O, children: i });
}
const zn = () => w.useContext(ph);
function Yv() {
  return o.jsxs(Qv, { children: [o.jsx(Gv, {}), o.jsxs(Zy, { children: [o.jsxs(en, { element: o.jsx(Kv, {}), children: [o.jsx(en, { index: true, element: o.jsx(Zv, {}) }), o.jsx(en, { path: "shop", element: o.jsx(nb, {}) }), o.jsx(en, { path: "product/:slug", element: o.jsx(tb, {}) }), o.jsx(en, { path: "cart", element: o.jsx(rb, {}) }), o.jsx(en, { path: "checkout", element: o.jsx(lb, {}) }), o.jsx(en, { path: "checkout/success", element: o.jsx(ob, {}) }), o.jsx(en, { path: "about", element: o.jsx(ho, { type: "about" }) }), o.jsx(en, { path: "contact", element: o.jsx(ho, { type: "contact" }) }), o.jsx(en, { path: "faq", element: o.jsx(ho, { type: "faq" }) }), o.jsx(en, { path: "shipping", element: o.jsx(ho, { type: "shipping" }) })] }), o.jsx(en, { path: "admin/login", element: o.jsx(cb, {}) }), o.jsx(en, { path: "admin/*", element: o.jsx(db, {}) }), o.jsx(en, { path: "*", element: o.jsx(su, { to: "/", replace: true }) })] })] });
}
function Gv() {
  const { pathname: i } = Tn();
  return w.useEffect(() => window.scrollTo(0, 0), [i]), null;
}
function Jv() {
  const { content: i } = zn();
  return o.jsxs("div", { className: "announcement", children: [o.jsx("span", { children: i.announcement }), o.jsxs(ue, { to: "/shop", children: ["Shop now ", o.jsx(ct, { size: 14 })] })] });
}
function Kv() {
  const [i, c] = w.useState(false), [d, u] = w.useState(false), { cartCount: p, wishlist: h } = zn();
  return o.jsxs("div", { className: "site", children: [o.jsx(Jv, {}), o.jsxs("header", { className: "header container", children: [o.jsx("button", { className: "icon-btn mobile-only", onClick: () => c(true), "aria-label": "Open menu", children: o.jsx(Hv, {}) }), o.jsxs(ue, { className: "wordmark", to: "/", children: [o.jsx("span", { children: "SCENTRA" }), o.jsx("small", { children: "FINE FRAGRANCE" })] }), o.jsxs("nav", { className: "desktop-nav", children: [o.jsx(qa, { to: "/", children: "Home" }), o.jsx(qa, { to: "/shop", children: "Shop" }), o.jsx(qa, { to: "/shop?category=custom-perfumes", children: "Our Blends" }), o.jsx(qa, { to: "/about", children: "Our Story" })] }), o.jsxs("div", { className: "header-actions", children: [o.jsx("button", { className: "icon-btn", onClick: () => u(true), "aria-label": "Search", children: o.jsx(pu, {}) }), o.jsx(ue, { className: "icon-btn desktop-action", to: "/admin/login", children: o.jsx(Iv, {}) }), o.jsxs(ue, { className: "icon-btn desktop-action heart-link", to: "/shop", children: [o.jsx(jo, {}), o.jsx("span", { children: h.length })] }), o.jsxs(ue, { className: "icon-btn bag-link", to: "/cart", children: [o.jsx(So, {}), o.jsx("span", { children: p })] })] })] }), i && o.jsxs("div", { className: "mobile-drawer", children: [o.jsx("button", { className: "icon-btn drawer-close", onClick: () => c(false), children: o.jsx(Qa, {}) }), o.jsxs("div", { className: "wordmark", children: [o.jsx("span", { children: "SCENTRA" }), o.jsx("small", { children: "FINE FRAGRANCE" })] }), o.jsx("nav", { children: [["Home", "/"], ["Shop all", "/shop"], ["Our blends", "/shop?category=custom-perfumes"], ["Our story", "/about"], ["Contact", "/contact"]].map(([m, k]) => o.jsxs(ue, { to: k, onClick: () => c(false), children: [m, o.jsx(ct, { size: 17 })] }, m)) })] }), d && o.jsx(Xv, { close: () => u(false) }), o.jsx("main", { children: o.jsx(Ky, {}) }), o.jsx(ub, {})] });
}
function Xv({ close: i }) {
  const [c, d] = w.useState(""), { products: u } = zn(), p = c ? u.filter((h) => `${h.name} ${h.brand}`.toLowerCase().includes(c.toLowerCase())).slice(0, 5) : [];
  return o.jsx("div", { className: "search-overlay", children: o.jsxs("div", { className: "search-box", children: [o.jsxs("div", { className: "search-head", children: [o.jsx(pu, {}), o.jsx("input", { autoFocus: true, value: c, onChange: (h) => d(h.target.value), placeholder: "Search fragrances, notes or brands" }), o.jsx("button", { className: "icon-btn", onClick: i, children: o.jsx(Qa, {}) })] }), c && o.jsx("div", { className: "search-results", children: p.length ? p.map((h) => o.jsxs(ue, { to: `/product/${h.slug}`, onClick: i, children: [o.jsx("img", { src: h.images[0] }), o.jsxs("span", { children: [o.jsx("small", { children: h.brand }), h.name] }), o.jsx("strong", { children: Te(h.variants[0].price) })] }, h.id)) : o.jsx("p", { children: "No fragrance found. Try another search." }) })] }) });
}
function Zv() {
  const { products: i, content: c } = zn(), d = (c.heroTitle || "Leave a beautiful impression.").split(" "), u = d.slice(0, -2).join(" "), p = d.slice(-2).join(" ");
  return o.jsxs(o.Fragment, { children: [o.jsx("section", { className: "hero", children: o.jsxs("div", { className: "container hero-grid", children: [o.jsxs("div", { className: "hero-copy", children: [o.jsx("p", { className: "eyebrow", children: c.heroEyebrow }), o.jsxs("h1", { children: [u, o.jsx("br", {}), p] }), o.jsx("p", { children: "Modern fragrance, thoughtfully composed. Discover small-batch blends made by us and timeless scents from the houses you love." }), o.jsxs("div", { className: "hero-actions", children: [o.jsx(ue, { className: "btn primary", to: "/shop", children: "Explore the collection" }), o.jsxs(ue, { className: "text-link", to: "/shop?category=custom-perfumes", children: ["Discover our blends ", o.jsx(ct, { size: 16 })] })] })] }), o.jsxs("div", { className: "hero-visual", children: [o.jsx("div", { className: "hero-arch", children: o.jsx("img", { src: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?auto=format&fit=crop&w=1200&q=90", alt: "Luxury perfume bottle" }) }), o.jsxs("div", { className: "hero-stamp", children: [o.jsx(Zs, { size: 18 }), o.jsxs("span", { children: ["BLENDED", o.jsx("br", {}), "IN LAGOS"] })] })] })] }) }), o.jsx("section", { className: "benefits", children: o.jsxs("div", { className: "container benefits-grid", children: [o.jsxs("div", { children: [o.jsx(Zs, {}), o.jsxs("span", { children: [o.jsx("strong", { children: "Small-batch blends" }), o.jsx("small", { children: "Created with intention" })] })] }), o.jsxs("div", { children: [o.jsx(dh, {}), o.jsxs("span", { children: [o.jsx("strong", { children: "Nationwide delivery" }), o.jsx("small", { children: "Carefully packed, always" })] })] }), o.jsxs("div", { children: [o.jsx(jo, {}), o.jsxs("span", { children: [o.jsx("strong", { children: "Authenticity assured" }), o.jsx("small", { children: "Only genuine fragrances" })] })] })] }) }), o.jsxs("section", { className: "section container", children: [o.jsx(Ys, { eyebrow: "Find your ritual", title: "Shop by collection", link: "/shop" }), o.jsx("div", { className: "category-grid", children: nu.map((h, m) => o.jsxs(ue, { className: `category-card category-${m + 1}`, to: `/shop?category=${h.slug}`, children: [o.jsx("img", { src: h.image }), o.jsxs("div", { children: [o.jsx("small", { children: h.eyebrow }), o.jsx("h3", { children: h.name }), o.jsx("p", { children: h.description }), o.jsxs("span", { children: ["Explore ", o.jsx(ct, { size: 16 })] })] })] }, h.slug)) })] }), o.jsx("section", { className: "section bestsellers", children: o.jsxs("div", { className: "container", children: [o.jsx(Ys, { eyebrow: "Loved, repeatedly", title: "The bestsellers", link: "/shop" }), o.jsx(hh, { products: i.filter((h) => h.featured).slice(0, 4) })] }) }), o.jsxs("section", { className: "section container story-split", children: [o.jsxs("div", { className: "story-image", children: [o.jsx("img", { src: "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?auto=format&fit=crop&w=1100&q=85" }), o.jsx("span", { children: "01 \u2014 THE SCENTRA WAY" })] }), o.jsxs("div", { className: "story-copy", children: [o.jsx("p", { className: "eyebrow", children: "Made close to home" }), o.jsx("h2", { children: "A fragrance wardrobe, curated for the way you live." }), o.jsx("p", { children: "We believe scent is an intimate form of self-expression. Our own blends are composed in considered batches, while every fragrance we source is selected for character, quality and staying power." }), o.jsx(ue, { className: "btn secondary", to: "/about", children: "Our story" })] })] }), o.jsx("section", { className: "custom-cta", children: o.jsxs("div", { className: "container", children: [o.jsx("p", { className: "eyebrow light", children: "A scent that is only yours" }), o.jsx("h2", { children: "Let us blend your signature." }), o.jsx("p", { children: "Choose the mood, notes and intensity. We will shape them into something entirely personal." }), o.jsx(ue, { className: "btn light-btn", to: "/contact", children: "Begin a consultation" })] }) }), o.jsxs("section", { className: "section container journal", children: [o.jsx(Ys, { eyebrow: "The scent journal", title: "Notes worth knowing" }), o.jsxs("div", { className: "journal-grid", children: [o.jsxs("article", { children: [o.jsx("span", { children: "GUIDE \xB7 5 MIN" }), o.jsx("h3", { children: "How to make your fragrance last longer" }), o.jsx("p", { children: "A thoughtful guide to pulse points, layering and storage." }), o.jsxs(ue, { to: "/about", children: ["Read the story ", o.jsx(ct, { size: 16 })] })] }), o.jsxs("article", { children: [o.jsx("span", { children: "NOTES \xB7 4 MIN" }), o.jsx("h3", { children: "Oud, explained without the mystery" }), o.jsx("p", { children: "Why this singular material feels warm, smoky and deeply alive." }), o.jsxs(ue, { to: "/about", children: ["Read the story ", o.jsx(ct, { size: 16 })] })] }), o.jsxs("article", { children: [o.jsx("span", { children: "RITUAL \xB7 3 MIN" }), o.jsx("h3", { children: "Finding a signature scent for every season" }), o.jsx("p", { children: "Build a small fragrance wardrobe that moves as you do." }), o.jsxs(ue, { to: "/about", children: ["Read the story ", o.jsx(ct, { size: 16 })] })] })] })] }), o.jsx(sb, {})] });
}
function Ys({ eyebrow: i, title: c, link: d }) {
  return o.jsxs("div", { className: "section-head", children: [o.jsxs("div", { children: [o.jsx("p", { className: "eyebrow", children: i }), o.jsx("h2", { children: c })] }), d && o.jsxs(ue, { className: "text-link", to: d, children: ["View all ", o.jsx(ct, { size: 16 })] })] });
}
function hh({ products: i }) {
  return o.jsx("div", { className: "product-grid", children: i.map((c) => o.jsx(eb, { product: c }, c.id)) });
}
function eb({ product: i }) {
  const { addToCart: c, wishlist: d, toggleWishlist: u } = zn(), p = i.variants[0];
  return o.jsxs("article", { className: "product-card", children: [o.jsxs("div", { className: "product-image", children: [o.jsx(ue, { to: `/product/${i.slug}`, children: o.jsx("img", { src: i.images[0], alt: i.name }) }), i.onSale && o.jsx("span", { className: "sale-badge", children: "SALE" }), o.jsx("button", { className: `wish ${d.includes(i.id) ? "active" : ""}`, onClick: () => u(i.id), children: o.jsx(jo, { fill: d.includes(i.id) ? "currentColor" : "none" }) }), o.jsx("button", { className: "quick-add", onClick: () => c(i, p), children: "Quick add" })] }), o.jsxs(ue, { to: `/product/${i.slug}`, className: "product-info", children: [o.jsx("span", { children: i.brand || i.category }), o.jsx("h3", { children: i.name }), o.jsxs("p", { children: [p.size, " \xB7 ", i.gender] }), o.jsx("strong", { children: Te(p.price) })] })] });
}
function nb() {
  var i;
  const { products: c } = zn(), [d, u] = Pv(), [p, h] = w.useState(false), m = d.get("category") || "", k = d.get("q") || "", v = d.get("gender") || "", g = d.get("sort") || "featured";
  let S = c.filter((E) => (!m || E.categorySlug === m) && (!v || E.gender === v) && (!k || `${E.name} ${E.brand}`.toLowerCase().includes(k.toLowerCase())));
  g === "price-low" && (S = [...S].sort((E, I) => E.variants[0].price - I.variants[0].price)), g === "price-high" && (S = [...S].sort((E, I) => I.variants[0].price - E.variants[0].price));
  const L = (E, I) => {
    const $ = new URLSearchParams(d);
    I ? $.set(E, I) : $.delete(E), u($);
  };
  return o.jsxs("div", { className: "shop-page", children: [o.jsxs("div", { className: "shop-hero container", children: [o.jsx("p", { className: "eyebrow", children: "The fragrance edit" }), o.jsx("h1", { children: ((i = nu.find((E) => E.slug === m)) == null ? void 0 : i.name) || "Shop all fragrance" }), o.jsx("p", { children: "Distinctive scents for every mood, moment and version of you." })] }), o.jsxs("div", { className: "container shop-toolbar", children: [o.jsxs("p", { children: [S.length, " pieces"] }), o.jsxs("button", { className: "filter-toggle", onClick: () => h(!p), children: [o.jsx(Uv, { size: 17 }), " Filter & sort"] }), o.jsxs("label", { className: "sort-select desktop-sort", children: ["Sort by ", o.jsxs("select", { value: g, onChange: (E) => L("sort", E.target.value), children: [o.jsx("option", { value: "featured", children: "Featured" }), o.jsx("option", { value: "price-low", children: "Price: low to high" }), o.jsx("option", { value: "price-high", children: "Price: high to low" })] })] })] }), o.jsxs("div", { className: "container shop-layout", children: [o.jsxs("aside", { className: p ? "filters open" : "filters", children: [o.jsxs("div", { className: "filter-top", children: [o.jsx("h3", { children: "Filters" }), o.jsx("button", { onClick: () => h(false), children: o.jsx(Qa, {}) })] }), o.jsx(Gs, { title: "Collection", children: [["All", ""], ...nu.map((E) => [E.name, E.slug])].map(([E, I]) => o.jsxs("label", { children: [o.jsx("input", { type: "radio", name: "category", checked: m === I, onChange: () => L("category", I) }), E] }, E)) }), o.jsx(Gs, { title: "For", children: [["All", ""], ["Women", "women"], ["Men", "men"], ["Unisex", "unisex"]].map(([E, I]) => o.jsxs("label", { children: [o.jsx("input", { type: "radio", name: "gender", checked: v === I, onChange: () => L("gender", I) }), E] }, E)) }), o.jsxs(Gs, { title: "Price", children: [o.jsxs("div", { className: "price-copy", children: [o.jsx("span", { children: "\u20A60" }), o.jsx("span", { children: "\u20A6150,000" })] }), o.jsx("input", { type: "range", min: "0", max: "150000", defaultValue: "150000" })] }), o.jsxs("label", { className: "sort-select mobile-sort", children: ["Sort by ", o.jsxs("select", { value: g, onChange: (E) => L("sort", E.target.value), children: [o.jsx("option", { value: "featured", children: "Featured" }), o.jsx("option", { value: "price-low", children: "Price: low to high" }), o.jsx("option", { value: "price-high", children: "Price: high to low" })] })] })] }), o.jsx("div", { className: "shop-products", children: S.length ? o.jsx(hh, { products: S }) : o.jsxs("div", { className: "empty-state", children: [o.jsx("h2", { children: "No fragrances found" }), o.jsx("p", { children: "Try clearing a filter or searching for something else." }), o.jsx("button", { className: "btn primary", onClick: () => u({}), children: "Clear filters" })] }) })] })] });
}
function Gs({ title: i, children: c }) {
  return o.jsxs("div", { className: "filter", children: [o.jsxs("h4", { children: [i, o.jsx(Mv, { size: 16 })] }), o.jsx("div", { children: c })] });
}
function tb() {
  const { slug: i } = Oy(), { products: c, addToCart: d, wishlist: u, toggleWishlist: p } = zn(), h = c.find(($) => $.slug === i), [m, k] = w.useState(0), [v, g] = w.useState(1), [S, L] = w.useState(false);
  if (!h) return o.jsx("div", { className: "loading container", children: "Finding your fragrance\u2026" });
  const E = h.variants[m], I = () => {
    d(h, E, v), L(true), setTimeout(() => L(false), 1800);
  };
  return o.jsxs("div", { className: "product-page container", children: [o.jsxs("div", { className: "breadcrumbs", children: [o.jsx(ue, { to: "/shop", children: "Shop" }), o.jsx("span", { children: "/" }), o.jsx("span", { children: h.category })] }), o.jsxs("div", { className: "product-detail", children: [o.jsxs("div", { className: "gallery", children: [o.jsxs("div", { className: "main-image", children: [o.jsx("img", { src: h.images[0], alt: h.name }), h.onSale && o.jsx("span", { className: "sale-badge", children: "SALE" })] }), o.jsxs("div", { className: "gallery-caption", children: [o.jsx("span", { children: "SCENTRA SELECTED" }), o.jsx("span", { children: "AUTHENTICITY GUARANTEED" })] })] }), o.jsxs("div", { className: "product-copy", children: [o.jsx("p", { className: "eyebrow", children: h.brand }), o.jsx("h1", { children: h.name }), o.jsxs("div", { className: "rating", children: [o.jsxs("span", { children: [o.jsx(Ba, { fill: "currentColor" }), o.jsx(Ba, { fill: "currentColor" }), o.jsx(Ba, { fill: "currentColor" }), o.jsx(Ba, { fill: "currentColor" }), o.jsx(Ba, { fill: "currentColor" })] }), o.jsx("a", { href: "#reviews", children: "4.9 \xB7 24 reviews" })] }), o.jsx("p", { className: "product-price", children: Te(E.price) }), o.jsx("p", { className: "description", children: h.description }), o.jsx("div", { className: "note-list", children: Object.entries(h.scentNotes || {}).map(([$, O]) => o.jsxs("div", { children: [o.jsxs("span", { children: [$, " notes"] }), o.jsx("p", { children: O })] }, $)) }), o.jsxs("div", { className: "option-head", children: [o.jsx("span", { children: "Choose size" }), o.jsxs("small", { children: [E.stock, " in stock"] })] }), o.jsx("div", { className: "variant-list", children: h.variants.map(($, O) => o.jsxs("button", { className: O === m ? "active" : "", onClick: () => k(O), children: [o.jsx("span", { children: $.size }), o.jsx("small", { children: Te($.price) })] }, $.id)) }), o.jsxs("div", { className: "buy-row", children: [o.jsxs("div", { className: "qty", children: [o.jsx("button", { onClick: () => g(Math.max(1, v - 1)), children: o.jsx(uh, {}) }), o.jsx("span", { children: v }), o.jsx("button", { onClick: () => g(Math.min(E.stock, v + 1)), children: o.jsx(Va, {}) })] }), o.jsx("button", { className: "btn primary add-btn", onClick: I, children: S ? o.jsxs(o.Fragment, { children: [o.jsx(fu, {}), " Added to bag"] }) : o.jsxs(o.Fragment, { children: ["Add to bag \xB7 ", Te(E.price * v)] }) }), o.jsx("button", { className: `btn wish-btn ${u.includes(h.id) ? "active" : ""}`, onClick: () => p(h.id), children: o.jsx(jo, { fill: u.includes(h.id) ? "currentColor" : "none" }) })] }), o.jsxs("div", { className: "delivery-notes", children: [o.jsxs("div", { children: [o.jsx(dh, {}), o.jsxs("span", { children: [o.jsx("strong", { children: "Delivery across Nigeria" }), o.jsx("small", { children: "2\u20135 business days, depending on location" })] })] }), o.jsxs("div", { children: [o.jsx(ch, {}), o.jsxs("span", { children: [o.jsx("strong", { children: "Beautifully wrapped" }), o.jsx("small", { children: "Every order arrives ready to delight" })] })] })] })] })] }), o.jsxs("section", { className: "reviews", id: "reviews", children: [o.jsx("p", { className: "eyebrow", children: "Worn and loved" }), o.jsx("h2", { children: "Customer notes" }), o.jsxs("div", { className: "review-grid", children: [o.jsxs("blockquote", { children: ["\u201CIt settles so beautifully on skin. Warm, confident and never too loud.\u201D", o.jsx("footer", { children: "\u2014 Amara, Lagos" })] }), o.jsxs("blockquote", { children: ["\u201CThe packaging felt genuinely special, and the scent lasted all evening.\u201D", o.jsx("footer", { children: "\u2014 Dami, Abuja" })] }), o.jsxs("blockquote", { children: ["\u201CFinally found something that feels like me. Already ordering the larger bottle.\u201D", o.jsx("footer", { children: "\u2014 Zara, Port Harcourt" })] })] })] })] });
}
function rb() {
  const { cart: i, updateQty: c, removeItem: d, subtotal: u } = zn();
  return i.length ? o.jsxs("div", { className: "cart-page container", children: [o.jsxs("div", { className: "page-title", children: [o.jsx("p", { className: "eyebrow", children: "Your selection" }), o.jsx("h1", { children: "Shopping bag" })] }), o.jsxs("div", { className: "cart-layout", children: [o.jsx("div", { className: "cart-list", children: i.map((p) => o.jsxs("div", { className: "cart-item", children: [o.jsx(ue, { to: `/product/${p.slug}`, children: o.jsx("img", { src: p.image }) }), o.jsxs("div", { className: "cart-item-info", children: [o.jsx("span", { children: "SCENTRA" }), o.jsx("h3", { children: p.name }), o.jsx("p", { children: p.size }), o.jsxs("div", { className: "qty small", children: [o.jsx("button", { onClick: () => c(p.key, p.qty - 1), children: o.jsx(uh, {}) }), o.jsx("span", { children: p.qty }), o.jsx("button", { onClick: () => c(p.key, p.qty + 1), children: o.jsx(Va, {}) })] })] }), o.jsxs("div", { className: "cart-item-end", children: [o.jsx("strong", { children: Te(p.price * p.qty) }), o.jsxs("button", { onClick: () => d(p.key), children: [o.jsx(hu, {}), " Remove"] })] })] }, p.key)) }), o.jsx(ab, { subtotal: u })] })] }) : o.jsxs("div", { className: "empty-state full", children: [o.jsx(So, {}), o.jsx("h1", { children: "Your bag is waiting" }), o.jsx("p", { children: "Discover a fragrance worth taking with you." }), o.jsx(ue, { className: "btn primary", to: "/shop", children: "Explore fragrance" })] });
}
function ab({ subtotal: i, checkout: c = true }) {
  const { coupon: d, setCoupon: u } = zn(), [p, h] = w.useState((d == null ? void 0 : d.code) || ""), [m, k] = w.useState(""), [v, g] = w.useState(false), S = async () => {
    g(true), k("");
    try {
      u(await We("/coupons/validate", { method: "POST", body: JSON.stringify({ code: p, subtotal: i }) }));
    } catch (E) {
      u(null), k(E.message);
    } finally {
      g(false);
    }
  }, L = Math.max(0, i - ((d == null ? void 0 : d.discount) || 0));
  return o.jsxs("aside", { className: "order-summary", children: [o.jsx("h2", { children: "Order summary" }), o.jsxs("div", { children: [o.jsx("span", { children: "Subtotal" }), o.jsx("strong", { children: Te(i) })] }), o.jsxs("div", { children: [o.jsx("span", { children: "Delivery" }), o.jsx("strong", { children: i >= 75e3 ? "Complimentary" : "Calculated at checkout" })] }), o.jsxs("div", { className: "promo", children: [o.jsx("input", { value: p, onChange: (E) => h(E.target.value.toUpperCase()), placeholder: "Promo code" }), o.jsx("button", { onClick: S, disabled: v, children: v ? "\u2026" : "Apply" })] }), m && o.jsx("p", { className: "form-error", children: m }), d && o.jsxs("div", { children: [o.jsx("span", { children: d.code }), o.jsxs("strong", { children: ["-", Te(d.discount)] })] }), o.jsxs("div", { className: "summary-total", children: [o.jsx("span", { children: "Total" }), o.jsx("strong", { children: Te(L) })] }), c && o.jsx(ue, { className: "btn primary", to: "/checkout", children: "Continue to checkout" }), o.jsxs("p", { children: [o.jsx(sh, {}), " Secure checkout powered by Paystack"] })] });
}
function lb() {
  const { cart: i, subtotal: c, setCart: d, coupon: u } = zn(), p = Wr(), [h, m] = w.useState(false), [k, v] = w.useState(""), [g, S] = w.useState({ name: "", email: "", phone: "", address: "", city: "", state: "", note: "" }), L = Math.max(0, c - ((u == null ? void 0 : u.discount) || 0));
  if (!i.length) return o.jsx(su, { to: "/cart" });
  const E = ($) => S({ ...g, [$.target.name]: $.target.value }), I = async ($) => {
    $.preventDefault(), m(true), v("");
    try {
      const O = await We("/orders", { method: "POST", body: JSON.stringify({ customer: { name: g.name, email: g.email, phone: g.phone }, shippingAddress: { address: g.address, city: g.city, state: g.state, note: g.note }, items: i.map(({ productId: D, variantId: M, name: V, size: G, qty: oe, price: te }) => ({ productId: D, variantId: M, name: V, size: G, qty: oe, price: te })), couponCode: u == null ? void 0 : u.code }) });
      localStorage.setItem("scentra-last-order", JSON.stringify(O)), O.authorization_url ? window.location.href = O.authorization_url : (d([]), p("/checkout/success"));
    } catch (O) {
      v(O.message);
    } finally {
      m(false);
    }
  };
  return o.jsx("div", { className: "checkout-page", children: o.jsxs("div", { className: "container", children: [o.jsxs(ue, { className: "back-link", to: "/cart", children: [o.jsx(Ov, {}), " Return to bag"] }), o.jsxs("div", { className: "checkout-layout", children: [o.jsxs("form", { onSubmit: I, className: "checkout-form", children: [o.jsxs("div", { className: "page-title", children: [o.jsx("p", { className: "eyebrow", children: "Almost yours" }), o.jsx("h1", { children: "Checkout" })] }), o.jsxs("fieldset", { children: [o.jsx("legend", { children: "Contact" }), o.jsxs("div", { className: "form-grid", children: [o.jsxs("label", { className: "full", children: ["Email address", o.jsx("input", { type: "email", name: "email", value: g.email, onChange: E, required: true, placeholder: "you@example.com" })] }), o.jsxs("label", { children: ["Full name", o.jsx("input", { name: "name", value: g.name, onChange: E, required: true, placeholder: "Your full name" })] }), o.jsxs("label", { children: ["Phone number", o.jsx("input", { name: "phone", value: g.phone, onChange: E, required: true, placeholder: "0800 000 0000" })] })] })] }), o.jsxs("fieldset", { children: [o.jsx("legend", { children: "Delivery address" }), o.jsxs("div", { className: "form-grid", children: [o.jsxs("label", { className: "full", children: ["Street address", o.jsx("input", { name: "address", value: g.address, onChange: E, required: true, placeholder: "House number and street" })] }), o.jsxs("label", { children: ["City", o.jsx("input", { name: "city", value: g.city, onChange: E, required: true, placeholder: "Lagos" })] }), o.jsxs("label", { children: ["State", o.jsxs("select", { name: "state", value: g.state, onChange: E, required: true, children: [o.jsx("option", { value: "", children: "Select state" }), ["Lagos", "Abuja FCT", "Rivers", "Oyo", "Ogun", "Enugu", "Kano", "Kaduna", "Delta", "Edo", "Other"].map(($) => o.jsx("option", { children: $ }, $))] })] }), o.jsxs("label", { className: "full", children: ["Delivery note (optional)", o.jsx("textarea", { name: "note", value: g.note, onChange: E, placeholder: "Landmark, gate code, or delivery preference" })] })] })] }), o.jsxs("fieldset", { children: [o.jsx("legend", { children: "Payment" }), o.jsxs("div", { className: "payment-choice", children: [o.jsxs("div", { children: [o.jsx("span", { className: "radio-dot" }), o.jsx("strong", { children: "Pay securely with Paystack" })] }), o.jsx("small", { children: "Cards \xB7 Bank transfer \xB7 USSD" })] })] }), k && o.jsx("p", { className: "form-error", children: k }), o.jsx("button", { className: "btn promo-btn checkout-submit", disabled: h, children: h ? "Preparing secure payment\u2026" : `Pay ${Te(L)}` }), o.jsxs("p", { className: "secure-line", children: [o.jsx(sh, {}), " Your payment information is encrypted and secure."] })] }), o.jsxs("div", { className: "checkout-summary", children: [o.jsx("h2", { children: "Your order" }), i.map(($) => o.jsxs("div", { className: "checkout-item", children: [o.jsxs("div", { children: [o.jsx("img", { src: $.image }), o.jsx("span", { children: $.qty })] }), o.jsxs("p", { children: [o.jsx("strong", { children: $.name }), o.jsx("small", { children: $.size })] }), o.jsx("b", { children: Te($.price * $.qty) })] }, $.key)), o.jsxs("div", { className: "checkout-totals", children: [o.jsxs("p", { children: [o.jsx("span", { children: "Subtotal" }), o.jsx("strong", { children: Te(c) })] }), u && o.jsxs("p", { children: [o.jsx("span", { children: u.code }), o.jsxs("strong", { children: ["-", Te(u.discount)] })] }), o.jsxs("p", { children: [o.jsx("span", { children: "Delivery" }), o.jsx("strong", { children: c >= 75e3 ? "Complimentary" : "Calculated" })] }), o.jsxs("p", { children: [o.jsx("span", { children: "Total" }), o.jsx("strong", { children: Te(L) })] })] })] })] })] }) });
}
function ob() {
  const { setCart: i } = zn(), c = JSON.parse(localStorage.getItem("scentra-last-order") || "{}"), [d, u] = w.useState(c.demo ? "PAID" : "PENDING");
  w.useEffect(() => {
    if (!c.orderNumber) return;
    let h = 0;
    const m = async () => {
      try {
        const k = await We(`/orders/${c.orderNumber}/status`);
        u(k.status), k.status === "PAID" ? i([]) : h++ < 8 && setTimeout(m, 1800);
      } catch {
        h++ < 8 && setTimeout(m, 1800);
      }
    };
    m();
  }, [c.orderNumber, c.demo, i]);
  const p = d === "PAID";
  return o.jsxs("div", { className: "success-page container", children: [o.jsx("div", { className: `success-mark ${p ? "" : "pending"}`, children: p ? o.jsx(fu, {}) : o.jsx("span", {}) }), o.jsx("p", { className: "eyebrow", children: p ? "Thank you" : "Confirming payment" }), o.jsx("h1", { children: p ? "Your fragrance is on its way." : "We are confirming your order." }), o.jsx("p", { children: p ? "Payment is confirmed. A receipt will be sent to your email shortly." : "Please keep this page open while Paystack confirms your payment." }), o.jsxs("div", { className: "success-card", children: [o.jsxs("div", { children: [o.jsx("span", { children: "Order number" }), o.jsx("strong", { children: c.orderNumber || "\u2014" })] }), o.jsxs("div", { children: [o.jsx("span", { children: "Status" }), o.jsx("strong", { children: d })] }), o.jsxs("div", { children: [o.jsx("span", { children: "Order total" }), o.jsx("strong", { children: Te(c.total || 0) })] })] }), o.jsx(ue, { className: "btn primary", to: p ? "/shop" : "/contact", children: p ? "Continue shopping" : "Get payment help" })] });
}
const ib = { about: { eyebrow: "Our point of view", title: "Fragrance is memory, made visible.", body: "Scentra began with a simple belief: finding a beautiful fragrance should feel personal, never intimidating. From our studio in Lagos, we compose expressive small-batch scents and curate enduring perfumes from houses we admire.", second: "Every selection is guided by character, quality and the way a fragrance lives on skin. No noise. No endless shelves. Just considered fragrance for considered living." }, contact: { eyebrow: "We are listening", title: "Let\u2019s find your scent.", body: "Need help choosing, sourcing a favourite or starting a custom blend? Our fragrance concierge is ready.", second: "Email hello@scentra.co or WhatsApp +234 800 SCENTRA. We reply Monday\u2013Saturday, 9am\u20136pm WAT." }, faq: { eyebrow: "Good to know", title: "Questions, answered.", body: "Are your branded perfumes authentic? Always. We source exclusively through trusted distributors and verify every item.", second: "How long will delivery take? Lagos orders usually arrive in 1\u20132 working days, while nationwide delivery takes 2\u20135 working days." }, shipping: { eyebrow: "Carefully, from us to you", title: "Shipping & returns.", body: "Orders above \u20A675,000 receive complimentary standard delivery. Every order is securely packed and dispatched with tracking.", second: "Unopened products may be returned within 7 days. For hygiene reasons, opened fragrance and body-care products cannot be returned unless faulty." } };
function ho({ type: i }) {
  const c = ib[i];
  return o.jsxs("div", { className: "editorial-page", children: [o.jsxs("div", { className: "editorial-hero container", children: [o.jsx("p", { className: "eyebrow", children: c.eyebrow }), o.jsx("h1", { children: c.title })] }), o.jsxs("div", { className: "editorial-body container", children: [o.jsx("div", { className: "editorial-image", children: o.jsx("img", { src: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=1200&q=85" }) }), o.jsxs("div", { children: [o.jsx("p", { children: c.body }), o.jsx("p", { children: c.second }), i === "contact" && o.jsx(ue, { className: "btn primary", to: "mailto:hello@scentra.co", children: "Write to us" })] })] })] });
}
function sb() {
  return o.jsx("section", { className: "newsletter", children: o.jsxs("div", { className: "container", children: [o.jsxs("div", { children: [o.jsx("p", { className: "eyebrow", children: "A note from Scentra" }), o.jsx("h2", { children: "Fragrance stories, quietly delivered." })] }), o.jsxs("form", { onSubmit: (i) => i.preventDefault(), children: [o.jsx("input", { type: "email", placeholder: "Your email address" }), o.jsx("button", { "aria-label": "Subscribe", children: o.jsx(ct, {}) })] })] }) });
}
function ub() {
  return o.jsxs("footer", { className: "footer", children: [o.jsxs("div", { className: "container footer-grid", children: [o.jsxs("div", { children: [o.jsxs("div", { className: "wordmark light", children: [o.jsx("span", { children: "SCENTRA" }), o.jsx("small", { children: "FINE FRAGRANCE" })] }), o.jsx("p", { children: "Modern fragrance for personal rituals." }), o.jsxs("a", { href: "https://instagram.com", children: [o.jsx($v, {}), " @scentrafragrance"] })] }), o.jsxs("div", { children: [o.jsx("h4", { children: "Explore" }), o.jsx(ue, { to: "/shop", children: "Shop all" }), o.jsx(ue, { to: "/shop?category=custom-perfumes", children: "Our blends" }), o.jsx(ue, { to: "/about", children: "Our story" })] }), o.jsxs("div", { children: [o.jsx("h4", { children: "Care" }), o.jsx(ue, { to: "/contact", children: "Contact" }), o.jsx(ue, { to: "/faq", children: "FAQ" }), o.jsx(ue, { to: "/shipping", children: "Shipping & returns" })] }), o.jsxs("div", { children: [o.jsx("h4", { children: "Visit" }), o.jsxs("p", { children: ["Lagos, Nigeria", o.jsx("br", {}), "Mon\u2013Sat \xB7 9am\u20136pm"] })] })] }), o.jsxs("div", { className: "container footer-bottom", children: [o.jsx("span", { children: "\xA9 2026 Scentra. All rights reserved." }), o.jsx("span", { children: "Made with intention in Lagos." })] })] });
}
function cb() {
  const i = Wr(), [c, d] = w.useState({ email: "admin@scentra.co", password: "Scentra123!" }), [u, p] = w.useState(""), h = async (m) => {
    m.preventDefault();
    try {
      const k = await We("/admin/login", { method: "POST", body: JSON.stringify(c) });
      localStorage.setItem("scentra-admin-token", k.token), i("/admin");
    } catch (k) {
      p(k.message);
    }
  };
  return o.jsxs("div", { className: "admin-login", children: [o.jsxs("div", { className: "admin-brand", children: [o.jsxs(ue, { className: "wordmark light", to: "/", children: [o.jsx("span", { children: "SCENTRA" }), o.jsx("small", { children: "FINE FRAGRANCE" })] }), o.jsxs("div", { children: [o.jsx("p", { children: "Private workspace" }), o.jsxs("h1", { children: ["Run the business.", o.jsx("br", {}), "Protect the craft."] })] }), o.jsx("span", { children: "SCENTRA COMMERCE \xB7 2026" })] }), o.jsxs("form", { onSubmit: h, children: [o.jsx("p", { className: "eyebrow", children: "Administration" }), o.jsx("h2", { children: "Welcome back" }), o.jsx("p", { children: "Sign in to manage the Scentra store." }), o.jsxs("label", { children: ["Email address", o.jsx("input", { type: "email", value: c.email, onChange: (m) => d({ ...c, email: m.target.value }) })] }), o.jsxs("label", { children: ["Password", o.jsx("input", { type: "password", value: c.password, onChange: (m) => d({ ...c, password: m.target.value }) })] }), u && o.jsx("p", { className: "form-error", children: u }), o.jsx("button", { className: "btn primary", children: "Sign in securely" }), o.jsx(ue, { to: "/", children: "\u2190 Return to storefront" })] })] });
}
function db() {
  const i = localStorage.getItem("scentra-admin-token"), c = Wr(), [d, u] = w.useState("Overview"), [p, h] = w.useState({ revenue: 0, orders: 0, pending: 0, lowStock: 0 }), [m, k] = w.useState([]), [v, g] = w.useState([]), [S, L] = w.useState([]), [E, I] = w.useState(null);
  if (w.useEffect(() => {
    if (i) {
      const O = { Authorization: `Bearer ${i}` };
      We("/admin/summary", { headers: O }).then(h).catch(() => {
      }), We("/admin/orders", { headers: O }).then(k).catch(() => {
      }), We("/admin/customers", { headers: O }).then(g).catch(() => {
      }), We("/admin/coupons", { headers: O }).then(L).catch(() => {
      }), We("/admin/settings", { headers: O }).then(I).catch(() => {
      });
    }
  }, [i]), !i) return o.jsx(su, { to: "/admin/login" });
  const $ = () => {
    localStorage.removeItem("scentra-admin-token"), c("/admin/login");
  };
  return o.jsxs("div", { className: "admin-shell", children: [o.jsxs("aside", { className: "admin-sidebar", children: [o.jsxs(ue, { className: "wordmark light", to: "/", children: [o.jsx("span", { children: "SCENTRA" }), o.jsx("small", { children: "ADMINISTRATION" })] }), o.jsx("nav", { children: [[Bv, "Overview"], [ch, "Products"], [So, "Orders"], [fh, "Customers"], [Zs, "Coupons"], [oh, "Analytics"], [Wv, "Settings"]].map(([O, D]) => o.jsxs("button", { onClick: () => u(D), className: d === D ? "active" : "", children: [o.jsx(O, {}), D, D === "Orders" && p.pending > 0 ? o.jsx("span", { children: p.pending }) : null] }, D)) }), o.jsxs("button", { className: "admin-logout", onClick: $, children: [o.jsx(qv, {}), " Sign out"] })] }), o.jsxs("main", { className: "admin-main", children: [o.jsxs("header", { children: [o.jsxs("div", { children: [o.jsx("p", { children: "SCENTRA COMMERCE" }), o.jsx("h1", { children: d })] }), o.jsxs("div", { children: [o.jsxs("span", { children: [o.jsx("small", { children: "Signed in as" }), "Store administrator"] }), o.jsx("div", { children: "SA" })] })] }), d === "Overview" && o.jsx(fb, { summary: p, orders: m, setSection: u }), " ", d === "Products" && o.jsx(pb, {}), d === "Orders" && o.jsx(mb, { orders: m, token: i, setOrders: k }), " ", d === "Customers" && o.jsx(gb, { customers: v }), " ", d === "Coupons" && o.jsx(yb, { coupons: S, setCoupons: L }), " ", d === "Analytics" && o.jsx(bb, { summary: p }), " ", d === "Settings" && E && o.jsx(xb, { settings: E, setSettings: I })] })] });
}
function fb({ summary: i, orders: c, setSection: d }) {
  const u = [["Revenue", Te(i.revenue), "+12.4% this month"], ["Total orders", i.orders, "Across all channels"], ["Awaiting action", i.pending, "New & unfulfilled"], ["Low stock", i.lowStock, "Variants to review"]];
  return o.jsxs("div", { className: "admin-content", children: [o.jsxs("section", { className: "admin-welcome", children: [o.jsxs("div", { children: [o.jsx("p", { children: "MONDAY, 03 AUGUST" }), o.jsx("h2", { children: "Good morning." }), o.jsx("span", { children: "Here is what is happening with your store today." })] }), o.jsxs("button", { className: "btn primary", onClick: () => d("Products"), children: [o.jsx(Va, {}), " Add product"] })] }), o.jsx("div", { className: "metric-grid", children: u.map(([p, h, m], k) => o.jsxs("article", { children: [o.jsx("span", { children: p }), o.jsx("strong", { children: h }), o.jsx("small", { className: k === 2 && i.pending ? "urgent" : "", children: m })] }, p)) }), o.jsxs("div", { className: "admin-columns", children: [o.jsxs("section", { className: "admin-panel", children: [o.jsxs("div", { className: "panel-head", children: [o.jsxs("div", { children: [o.jsx("p", { children: "PERFORMANCE" }), o.jsx("h3", { children: "Revenue overview" })] }), o.jsx("select", { children: o.jsx("option", { children: "Last 7 days" }) })] }), o.jsxs("div", { className: "chart", children: [o.jsxs("div", { className: "chart-y", children: [o.jsx("span", { children: "\u20A6150k" }), o.jsx("span", { children: "\u20A6100k" }), o.jsx("span", { children: "\u20A650k" }), o.jsx("span", { children: "\u20A60" })] }), o.jsx("div", { className: "chart-bars", children: [35, 58, 45, 74, 62, 92, 76].map((p, h) => o.jsxs("div", { children: [o.jsx("i", { style: { height: `${p}%` } }), o.jsx("span", { children: ["M", "T", "W", "T", "F", "S", "S"][h] })] }, h)) })] })] }), o.jsxs("section", { className: "admin-panel", children: [o.jsxs("div", { className: "panel-head", children: [o.jsxs("div", { children: [o.jsx("p", { children: "ATTENTION" }), o.jsx("h3", { children: "Stock watch" })] }), o.jsx("button", { onClick: () => d("Products"), children: "View products" })] }), eu.slice(0, 4).map((p, h) => o.jsxs("div", { className: "stock-row", children: [o.jsx("img", { src: p.images[0] }), o.jsxs("span", { children: [o.jsx("strong", { children: p.name }), o.jsx("small", { children: p.variants[0].size })] }), o.jsxs("b", { className: h < 2 ? "low" : "", children: [[2, 4, 7, 9][h], " left"] })] }, p.id))] })] }), o.jsxs("section", { className: "admin-panel orders-panel", children: [o.jsxs("div", { className: "panel-head", children: [o.jsxs("div", { children: [o.jsx("p", { children: "RECENT ACTIVITY" }), o.jsx("h3", { children: "Latest orders" })] }), o.jsx("button", { onClick: () => d("Orders"), children: "View all orders" })] }), o.jsx(mh, { orders: c })] })] });
}
function pb() {
  const { products: i, setProducts: c } = zn(), [d, u] = w.useState(null), p = async (h) => {
    if (!window.confirm(`Delete ${h.name}?`)) return;
    const m = localStorage.getItem("scentra-admin-token");
    await We(`/admin/products/${h.id}`, { method: "DELETE", headers: { Authorization: `Bearer ${m}` } }).catch(() => {
    }), c((k) => k.filter((v) => v.id !== h.id));
  };
  return o.jsxs("div", { className: "admin-content", children: [o.jsxs("div", { className: "admin-actions", children: [o.jsxs("div", { children: [o.jsx("input", { placeholder: "Search products" }), o.jsx("button", { children: o.jsx(pu, {}) })] }), o.jsxs("button", { className: "btn primary", onClick: () => u({}), children: [o.jsx(Va, {}), " Add product"] })] }), o.jsxs("section", { className: "admin-panel product-admin-list", children: [o.jsxs("div", { className: "product-table-head", children: [o.jsx("span", { children: "Product" }), o.jsx("span", { children: "Collection" }), o.jsx("span", { children: "Price" }), o.jsx("span", { children: "Inventory" }), o.jsx("span", { children: "Status" }), o.jsx("span", {})] }), i.map((h) => o.jsxs("div", { className: "product-admin-row", children: [o.jsxs("span", { children: [o.jsx("img", { src: h.images[0] }), o.jsxs("i", { children: [o.jsx("strong", { children: h.name }), o.jsx("small", { children: h.brand })] })] }), o.jsx("span", { children: h.category }), o.jsx("span", { children: Te(h.variants[0].price) }), o.jsxs("span", { children: [h.variants.reduce((m, k) => m + k.stock, 0), " units"] }), o.jsx("span", { children: o.jsx("b", { className: "status active", children: "Active" }) }), o.jsxs("span", { className: "row-actions", children: [o.jsx("button", { onClick: () => u(h), children: o.jsx(ih, {}) }), o.jsx("button", { onClick: () => p(h), children: o.jsx(hu, {}) })] })] }, h.id))] }), d && o.jsx(hb, { product: d.id ? d : null, close: () => u(null), onSaved: (h) => c((m) => d.id ? m.map((k) => k.id === h.id ? h : k) : [h, ...m]) })] });
}
function hb({ product: i, close: c, onSaved: d }) {
  var u, p, h, m;
  const k = localStorage.getItem("scentra-admin-token"), [v, g] = w.useState({ name: (i == null ? void 0 : i.name) || "", category: (i == null ? void 0 : i.category) || "Custom Perfume", categorySlug: (i == null ? void 0 : i.categorySlug) || "custom-perfumes", brand: (i == null ? void 0 : i.brand) || "SCENTRA", price: ((p = (u = i == null ? void 0 : i.variants) == null ? void 0 : u[0]) == null ? void 0 : p.price) || "", stock: ((m = (h = i == null ? void 0 : i.variants) == null ? void 0 : h[0]) == null ? void 0 : m.stock) || "", description: (i == null ? void 0 : i.description) || "" }), S = (E) => {
    const I = E.target.value;
    g(($) => ({ ...$, [E.target.name]: I, ...E.target.name === "category" ? { categorySlug: { "Custom Perfume": "custom-perfumes", "Branded Perfume": "branded-perfumes", "Body Spray": "body-sprays", Deodorant: "deodorants" }[I] } : {} }));
  }, L = async (E) => {
    E.preventDefault();
    try {
      let I;
      if (i) {
        const $ = { name: v.name, description: v.description, brand: v.brand };
        await We(`/admin/products/${i.id}`, { method: "PATCH", headers: { Authorization: `Bearer ${k}` }, body: JSON.stringify($) }), I = { ...i, ...$ };
      } else I = await We("/admin/products", { method: "POST", headers: { Authorization: `Bearer ${k}` }, body: JSON.stringify(v) });
      d == null || d(I), c();
    } catch {
      c();
    }
  };
  return o.jsx("div", { className: "modal-backdrop", children: o.jsxs("form", { className: "admin-modal", onSubmit: L, children: [o.jsxs("div", { className: "modal-head", children: [o.jsxs("div", { children: [o.jsx("p", { children: "CATALOGUE" }), o.jsx("h2", { children: i ? "Edit product" : "Add a product" })] }), o.jsx("button", { type: "button", onClick: c, children: o.jsx(Qa, {}) })] }), o.jsxs("div", { className: "form-grid", children: [o.jsxs("label", { className: "full", children: ["Product name", o.jsx("input", { name: "name", value: v.name, onChange: S, required: true, placeholder: "e.g. Amber Reverie" })] }), o.jsxs("label", { children: ["Collection", o.jsxs("select", { name: "category", value: v.category, onChange: S, disabled: !!i, children: [o.jsx("option", { children: "Custom Perfume" }), o.jsx("option", { children: "Branded Perfume" }), o.jsx("option", { children: "Body Spray" }), o.jsx("option", { children: "Deodorant" })] })] }), o.jsxs("label", { children: ["Brand", o.jsx("input", { name: "brand", value: v.brand, onChange: S, placeholder: "SCENTRA" })] }), o.jsxs("label", { children: ["Price (\u20A6)", o.jsx("input", { name: "price", type: "number", value: v.price, onChange: S, disabled: !!i, required: true, placeholder: "45000" })] }), o.jsxs("label", { children: ["Opening stock", o.jsx("input", { name: "stock", type: "number", value: v.stock, onChange: S, disabled: !!i, required: true, placeholder: "10" })] }), o.jsxs("label", { className: "full", children: ["Description", o.jsx("textarea", { name: "description", value: v.description, onChange: S, placeholder: "Describe the fragrance\u2026" })] })] }), o.jsxs("div", { className: "modal-actions", children: [o.jsx("button", { type: "button", className: "btn secondary", onClick: c, children: "Cancel" }), o.jsx("button", { className: "btn primary", children: "Save product" })] })] }) });
}
function mb({ orders: i, token: c, setOrders: d }) {
  const u = async (p, h) => {
    try {
      await We(`/admin/orders/${p}`, { method: "PATCH", headers: { Authorization: `Bearer ${c}` }, body: JSON.stringify({ status: h }) }), d((m) => m.map((k) => k.id === p ? { ...k, status: h } : k));
    } catch {
    }
  };
  return o.jsx("div", { className: "admin-content", children: o.jsxs("section", { className: "admin-panel orders-panel", children: [o.jsxs("div", { className: "panel-head", children: [o.jsxs("div", { children: [o.jsx("p", { children: "ORDER MANAGEMENT" }), o.jsx("h3", { children: "All orders" })] }), o.jsx("button", { children: "Export CSV" })] }), o.jsx(mh, { orders: i, update: u })] }) });
}
function mh({ orders: i, update: c }) {
  return i.length ? o.jsxs("div", { className: "order-table", children: [o.jsxs("div", { className: "order-row order-head", children: [o.jsx("span", { children: "Order" }), o.jsx("span", { children: "Customer" }), o.jsx("span", { children: "Date" }), o.jsx("span", { children: "Total" }), o.jsx("span", { children: "Status" }), o.jsx("span", {})] }), i.map((d) => o.jsxs("div", { className: "order-row", children: [o.jsx("strong", { children: d.orderNumber }), o.jsxs("span", { children: [d.customerName, o.jsx("small", { children: d.customerEmail })] }), o.jsx("span", { children: new Date(d.createdAt).toLocaleDateString() }), o.jsx("strong", { children: Te(d.total) }), o.jsx("select", { value: d.status, onChange: (u) => c == null ? void 0 : c(d.id, u.target.value), children: ["PENDING", "PAID", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"].map((u) => o.jsx("option", { children: u }, u)) }), o.jsx("button", { children: o.jsx(ih, {}) })] }, d.id))] }) : o.jsxs("div", { className: "admin-empty", children: [o.jsx(So, {}), o.jsx("h3", { children: "No orders yet" }), o.jsx("p", { children: "Paid customer orders will appear here instantly." })] });
}
function gb({ customers: i }) {
  return o.jsx("div", { className: "admin-content", children: o.jsxs("section", { className: "admin-panel data-list", children: [o.jsxs("div", { className: "panel-head", children: [o.jsxs("div", { children: [o.jsx("p", { children: "RELATIONSHIPS" }), o.jsx("h3", { children: "Customers" })] }), o.jsxs("span", { children: [i.length, " profiles"] })] }), i.length ? i.map((c) => {
    var d, u;
    const p = (c.orders || []).reduce((h, m) => h + m.total, 0);
    return o.jsxs("div", { className: "customer-row", children: [o.jsx("div", { className: "customer-avatar", children: (d = c.name) == null ? void 0 : d.split(" ").map((h) => h[0]).slice(0, 2).join("") }), o.jsxs("span", { children: [o.jsx("strong", { children: c.name }), o.jsxs("small", { children: [c.email, " \xB7 ", c.phone] })] }), o.jsxs("span", { children: [o.jsx("small", { children: "Orders" }), o.jsx("strong", { children: ((u = c.orders) == null ? void 0 : u.length) || 0 })] }), o.jsxs("span", { children: [o.jsx("small", { children: "Lifetime value" }), o.jsx("strong", { children: Te(p) })] })] }, c.id);
  }) : o.jsxs("div", { className: "admin-empty", children: [o.jsx(fh, {}), o.jsx("h3", { children: "No customer profiles yet" }), o.jsx("p", { children: "Guest checkout customers are captured automatically." })] })] }) });
}
function yb({ coupons: i, setCoupons: c }) {
  const d = localStorage.getItem("scentra-admin-token"), [u, p] = w.useState(false), h = async (m) => {
    await We(`/admin/coupons/${m}`, { method: "DELETE", headers: { Authorization: `Bearer ${d}` } }), c((k) => k.filter((v) => v.id !== m));
  };
  return o.jsxs("div", { className: "admin-content", children: [o.jsxs("div", { className: "admin-actions", children: [o.jsx("div", {}), o.jsxs("button", { className: "btn primary", onClick: () => p(true), children: [o.jsx(Va, {}), " New coupon"] })] }), o.jsxs("section", { className: "admin-panel data-list", children: [o.jsxs("div", { className: "coupon-head", children: [o.jsx("span", { children: "Code" }), o.jsx("span", { children: "Offer" }), o.jsx("span", { children: "Used" }), o.jsx("span", { children: "Expires" }), o.jsx("span", {})] }), i.map((m) => o.jsxs("div", { className: "coupon-row", children: [o.jsx("strong", { children: m.code }), o.jsxs("span", { children: [m.type === "percent" ? `${m.value}%` : `${Te(m.value)}`, " off"] }), o.jsxs("span", { children: [m.usedCount, m.usageLimit ? ` / ${m.usageLimit}` : ""] }), o.jsx("span", { children: new Date(m.expiryDate).toLocaleDateString() }), o.jsx("button", { onClick: () => h(m.id), children: o.jsx(hu, {}) })] }, m.id))] }), u && o.jsx(vb, { close: () => p(false), saved: (m) => c((k) => [m, ...k]) })] });
}
function vb({ close: i, saved: c }) {
  const d = localStorage.getItem("scentra-admin-token"), [u, p] = w.useState({ code: "", type: "percent", value: "", expiryDate: "", usageLimit: "" }), h = async (m) => {
    m.preventDefault();
    const k = await We("/admin/coupons", { method: "POST", headers: { Authorization: `Bearer ${d}` }, body: JSON.stringify(u) });
    c(k), i();
  };
  return o.jsx("div", { className: "modal-backdrop", children: o.jsxs("form", { className: "admin-modal", onSubmit: h, children: [o.jsxs("div", { className: "modal-head", children: [o.jsxs("div", { children: [o.jsx("p", { children: "PROMOTIONS" }), o.jsx("h2", { children: "Create coupon" })] }), o.jsx("button", { type: "button", onClick: i, children: o.jsx(Qa, {}) })] }), o.jsxs("div", { className: "form-grid", children: [o.jsxs("label", { children: ["Code", o.jsx("input", { value: u.code, onChange: (m) => p({ ...u, code: m.target.value.toUpperCase() }), required: true, placeholder: "SCENTRA10" })] }), o.jsxs("label", { children: ["Type", o.jsxs("select", { value: u.type, onChange: (m) => p({ ...u, type: m.target.value }), children: [o.jsx("option", { value: "percent", children: "Percent" }), o.jsx("option", { value: "fixed", children: "Fixed amount" })] })] }), o.jsxs("label", { children: ["Value", o.jsx("input", { type: "number", value: u.value, onChange: (m) => p({ ...u, value: m.target.value }), required: true })] }), o.jsxs("label", { children: ["Usage limit", o.jsx("input", { type: "number", value: u.usageLimit, onChange: (m) => p({ ...u, usageLimit: m.target.value }) })] }), o.jsxs("label", { className: "full", children: ["Expiry date", o.jsx("input", { type: "date", value: u.expiryDate, onChange: (m) => p({ ...u, expiryDate: m.target.value }), required: true })] })] }), o.jsxs("div", { className: "modal-actions", children: [o.jsx("button", { type: "button", className: "btn secondary", onClick: i, children: "Cancel" }), o.jsx("button", { className: "btn primary", children: "Create coupon" })] })] }) });
}
function bb({ summary: i }) {
  return o.jsxs("div", { className: "admin-content", children: [o.jsxs("div", { className: "metric-grid", children: [o.jsxs("article", { children: [o.jsx("span", { children: "Average order value" }), o.jsx("strong", { children: Te(i.orders ? Math.round(i.revenue / i.orders) : 0) }), o.jsx("small", { children: "Paid order performance" })] }), o.jsxs("article", { children: [o.jsx("span", { children: "Fulfilment queue" }), o.jsx("strong", { children: i.pending }), o.jsx("small", { className: i.pending ? "urgent" : "", children: "Orders requiring action" })] }), o.jsxs("article", { children: [o.jsx("span", { children: "Revenue tracked" }), o.jsx("strong", { children: Te(i.revenue) }), o.jsx("small", { children: "Webhook-confirmed sales" })] }), o.jsxs("article", { children: [o.jsx("span", { children: "Inventory alerts" }), o.jsx("strong", { children: i.lowStock }), o.jsx("small", { children: "Low-stock variants" })] })] }), o.jsxs("section", { className: "admin-panel admin-placeholder", children: [o.jsx(oh, {}), o.jsx("p", { children: "PERFORMANCE" }), o.jsx("h2", { children: "Sales reporting is live" }), o.jsx("span", { children: "Revenue, order and inventory metrics update from the shared commerce database." })] })] });
}
function xb({ settings: i, setSettings: c }) {
  const d = localStorage.getItem("scentra-admin-token"), [u, p] = w.useState(i.content), [h, m] = w.useState(i.notifications), [k, v] = w.useState(""), g = async (S, L) => {
    await We(`/admin/settings/${S}`, { method: "PUT", headers: { Authorization: `Bearer ${d}` }, body: JSON.stringify(L) }), c((E) => ({ ...E, [S]: L })), v(`${S} saved`), setTimeout(() => v(""), 1800);
  };
  return o.jsxs("div", { className: "admin-content settings-grid", children: [o.jsxs("form", { className: "admin-panel settings-card", onSubmit: (S) => {
    S.preventDefault(), g("content", u);
  }, children: [o.jsx("div", { className: "panel-head", children: o.jsxs("div", { children: [o.jsx("p", { children: "STOREFRONT" }), o.jsx("h3", { children: "Homepage content" })] }) }), o.jsxs("div", { className: "settings-fields", children: [o.jsxs("label", { children: ["Announcement", o.jsx("input", { value: u.announcement || "", onChange: (S) => p({ ...u, announcement: S.target.value }) })] }), o.jsxs("label", { children: ["Hero eyebrow", o.jsx("input", { value: u.heroEyebrow || "", onChange: (S) => p({ ...u, heroEyebrow: S.target.value }) })] }), o.jsxs("label", { children: ["Hero headline", o.jsx("textarea", { value: u.heroTitle || "", onChange: (S) => p({ ...u, heroTitle: S.target.value }) })] }), o.jsx("button", { className: "btn primary", children: "Save content" })] })] }), o.jsxs("form", { className: "admin-panel settings-card", onSubmit: (S) => {
    S.preventDefault(), g("notifications", h);
  }, children: [o.jsx("div", { className: "panel-head", children: o.jsxs("div", { children: [o.jsx("p", { children: "ORDER ALERTS" }), o.jsx("h3", { children: "Notification settings" })] }) }), o.jsxs("div", { className: "settings-fields", children: [o.jsxs("label", { children: ["Owner email", o.jsx("input", { type: "email", value: h.ownerEmail || "", onChange: (S) => m({ ...h, ownerEmail: S.target.value }) })] }), o.jsxs("label", { children: ["Owner WhatsApp", o.jsx("input", { value: h.ownerWhatsapp || "", onChange: (S) => m({ ...h, ownerWhatsapp: S.target.value }), placeholder: "+234\u2026" })] }), o.jsx("p", { children: "SMTP and Twilio credentials remain protected in server environment variables." }), o.jsx("button", { className: "btn primary", children: "Save notifications" })] })] }), k && o.jsxs("div", { className: "settings-toast", children: [o.jsx(fu, {}), " ", k] })] });
}
Jg.createRoot(document.getElementById("root")).render(o.jsx(qg.StrictMode, { children: o.jsx(Sv, { children: o.jsx(Yv, {}) }) }));
