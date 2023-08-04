function L1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var N1 =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Vh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Hh = { exports: {} },
  fl = {},
  Wh = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xo = Symbol.for("react.element"),
  M1 = Symbol.for("react.portal"),
  A1 = Symbol.for("react.fragment"),
  R1 = Symbol.for("react.strict_mode"),
  I1 = Symbol.for("react.profiler"),
  z1 = Symbol.for("react.provider"),
  D1 = Symbol.for("react.context"),
  $1 = Symbol.for("react.forward_ref"),
  F1 = Symbol.for("react.suspense"),
  U1 = Symbol.for("react.memo"),
  B1 = Symbol.for("react.lazy"),
  gf = Symbol.iterator;
function V1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gf && e[gf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Gh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Kh = Object.assign,
  qh = {};
function ci(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qh),
    (this.updater = n || Gh);
}
ci.prototype.isReactComponent = {};
ci.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ci.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Jh() {}
Jh.prototype = ci.prototype;
function Fc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qh),
    (this.updater = n || Gh);
}
var Uc = (Fc.prototype = new Jh());
Uc.constructor = Fc;
Kh(Uc, ci.prototype);
Uc.isPureReactComponent = !0;
var vf = Array.isArray,
  Qh = Object.prototype.hasOwnProperty,
  Bc = { current: null },
  Yh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xh(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Qh.call(t, r) && !Yh.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: xo,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Bc.current,
  };
}
function H1(e, t) {
  return {
    $$typeof: xo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Vc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xo;
}
function W1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var yf = /\/+/g;
function pa(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? W1("" + e.key)
    : t.toString(36);
}
function os(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case xo:
          case M1:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + pa(s, 0) : r),
      vf(i)
        ? ((n = ""),
          e != null && (n = e.replace(yf, "$&/") + "/"),
          os(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (Vc(i) &&
            (i = H1(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(yf, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), vf(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + pa(o, l);
      s += os(o, t, n, a, i);
    }
  else if (((a = V1(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + pa(o, l++)), (s += os(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function zo(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    os(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function G1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Qe = { current: null },
  ss = { transition: null },
  K1 = {
    ReactCurrentDispatcher: Qe,
    ReactCurrentBatchConfig: ss,
    ReactCurrentOwner: Bc,
  };
V.Children = {
  map: zo,
  forEach: function (e, t, n) {
    zo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      zo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      zo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Vc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
V.Component = ci;
V.Fragment = A1;
V.Profiler = I1;
V.PureComponent = Fc;
V.StrictMode = R1;
V.Suspense = F1;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K1;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Kh({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Bc.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Qh.call(t, a) &&
        !Yh.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: xo, type: e.type, key: i, ref: o, props: r, _owner: s };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: D1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: z1, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = Xh;
V.createFactory = function (e) {
  var t = Xh.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: $1, render: e };
};
V.isValidElement = Vc;
V.lazy = function (e) {
  return { $$typeof: B1, _payload: { _status: -1, _result: e }, _init: G1 };
};
V.memo = function (e, t) {
  return { $$typeof: U1, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = ss.transition;
  ss.transition = {};
  try {
    e();
  } finally {
    ss.transition = t;
  }
};
V.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
V.useCallback = function (e, t) {
  return Qe.current.useCallback(e, t);
};
V.useContext = function (e) {
  return Qe.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return Qe.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return Qe.current.useEffect(e, t);
};
V.useId = function () {
  return Qe.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return Qe.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return Qe.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return Qe.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return Qe.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return Qe.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return Qe.current.useRef(e);
};
V.useState = function (e) {
  return Qe.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return Qe.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return Qe.current.useTransition();
};
V.version = "18.2.0";
Wh.exports = V;
var b = Wh.exports;
const A = Vh(b),
  q1 = L1({ __proto__: null, default: A }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var J1 = b,
  Q1 = Symbol.for("react.element"),
  Y1 = Symbol.for("react.fragment"),
  X1 = Object.prototype.hasOwnProperty,
  Z1 = J1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ey = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zh(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) X1.call(t, r) && !ey.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Q1,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Z1.current,
  };
}
fl.Fragment = Y1;
fl.jsx = Zh;
fl.jsxs = Zh;
Hh.exports = fl;
var u = Hh.exports,
  vu = {},
  em = { exports: {} },
  mt = {},
  tm = { exports: {} },
  nm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, I) {
    var z = R.length;
    R.push(I);
    e: for (; 0 < z; ) {
      var H = (z - 1) >>> 1,
        J = R[H];
      if (0 < i(J, I)) (R[H] = I), (R[z] = J), (z = H);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var I = R[0],
      z = R.pop();
    if (z !== I) {
      R[0] = z;
      e: for (var H = 0, J = R.length, xe = J >>> 1; H < xe; ) {
        var oe = 2 * (H + 1) - 1,
          Pe = R[oe],
          de = oe + 1,
          Q = R[de];
        if (0 > i(Pe, z))
          de < J && 0 > i(Q, Pe)
            ? ((R[H] = Q), (R[de] = z), (H = de))
            : ((R[H] = Pe), (R[oe] = z), (H = oe));
        else if (de < J && 0 > i(Q, z)) (R[H] = Q), (R[de] = z), (H = de);
        else break e;
      }
    }
    return I;
  }
  function i(R, I) {
    var z = R.sortIndex - I.sortIndex;
    return z !== 0 ? z : R.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    c = [],
    d = 1,
    f = null,
    p = 3,
    h = !1,
    v = !1,
    y = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(R) {
    for (var I = n(c); I !== null; ) {
      if (I.callback === null) r(c);
      else if (I.startTime <= R)
        r(c), (I.sortIndex = I.expirationTime), t(a, I);
      else break;
      I = n(c);
    }
  }
  function S(R) {
    if (((y = !1), x(R), !v))
      if (n(a) !== null) (v = !0), ie(j);
      else {
        var I = n(c);
        I !== null && Z(S, I.startTime - R);
      }
  }
  function j(R, I) {
    (v = !1), y && ((y = !1), m(T), (T = -1)), (h = !0);
    var z = p;
    try {
      for (
        x(I), f = n(a);
        f !== null && (!(f.expirationTime > I) || (R && !C()));

      ) {
        var H = f.callback;
        if (typeof H == "function") {
          (f.callback = null), (p = f.priorityLevel);
          var J = H(f.expirationTime <= I);
          (I = e.unstable_now()),
            typeof J == "function" ? (f.callback = J) : f === n(a) && r(a),
            x(I);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var xe = !0;
      else {
        var oe = n(c);
        oe !== null && Z(S, oe.startTime - I), (xe = !1);
      }
      return xe;
    } finally {
      (f = null), (p = z), (h = !1);
    }
  }
  var E = !1,
    k = null,
    T = -1,
    O = 5,
    L = -1;
  function C() {
    return !(e.unstable_now() - L < O);
  }
  function P() {
    if (k !== null) {
      var R = e.unstable_now();
      L = R;
      var I = !0;
      try {
        I = k(!0, R);
      } finally {
        I ? M() : ((E = !1), (k = null));
      }
    } else E = !1;
  }
  var M;
  if (typeof g == "function")
    M = function () {
      g(P);
    };
  else if (typeof MessageChannel < "u") {
    var $ = new MessageChannel(),
      q = $.port2;
    ($.port1.onmessage = P),
      (M = function () {
        q.postMessage(null);
      });
  } else
    M = function () {
      w(P, 0);
    };
  function ie(R) {
    (k = R), E || ((E = !0), M());
  }
  function Z(R, I) {
    T = w(function () {
      R(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || h || ((v = !0), ie(j));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (R) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = p;
      }
      var z = p;
      p = I;
      try {
        return R();
      } finally {
        p = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, I) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var z = p;
      p = R;
      try {
        return I();
      } finally {
        p = z;
      }
    }),
    (e.unstable_scheduleCallback = function (R, I, z) {
      var H = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? H + z : H))
          : (z = H),
        R)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = z + J),
        (R = {
          id: d++,
          callback: I,
          priorityLevel: R,
          startTime: z,
          expirationTime: J,
          sortIndex: -1,
        }),
        z > H
          ? ((R.sortIndex = z),
            t(c, R),
            n(a) === null &&
              R === n(c) &&
              (y ? (m(T), (T = -1)) : (y = !0), Z(S, z - H)))
          : ((R.sortIndex = J), t(a, R), v || h || ((v = !0), ie(j))),
        R
      );
    }),
    (e.unstable_shouldYield = C),
    (e.unstable_wrapCallback = function (R) {
      var I = p;
      return function () {
        var z = p;
        p = I;
        try {
          return R.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    });
})(nm);
tm.exports = nm;
var ty = tm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rm = b,
  pt = ty;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var im = new Set(),
  Gi = {};
function vr(e, t) {
  qr(e, t), qr(e + "Capture", t);
}
function qr(e, t) {
  for (Gi[e] = t, e = 0; e < t.length; e++) im.add(t[e]);
}
var an = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  yu = Object.prototype.hasOwnProperty,
  ny =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  xf = {},
  wf = {};
function ry(e) {
  return yu.call(wf, e)
    ? !0
    : yu.call(xf, e)
    ? !1
    : ny.test(e)
    ? (wf[e] = !0)
    : ((xf[e] = !0), !1);
}
function iy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function oy(e, t, n, r) {
  if (t === null || typeof t > "u" || iy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ye(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var Ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ue[e] = new Ye(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ue[t] = new Ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ue[e] = new Ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ue[e] = new Ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ue[e] = new Ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ue[e] = new Ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ue[e] = new Ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ue[e] = new Ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ue[e] = new Ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Hc = /[\-:]([a-z])/g;
function Wc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Hc, Wc);
    Ue[t] = new Ye(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Hc, Wc);
    Ue[t] = new Ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Hc, Wc);
  Ue[t] = new Ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ue[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ue.xlinkHref = new Ye(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ue[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Gc(e, t, n, r) {
  var i = Ue.hasOwnProperty(t) ? Ue[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (oy(t, n, i, r) && (n = null),
    r || i === null
      ? ry(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pn = rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Do = Symbol.for("react.element"),
  kr = Symbol.for("react.portal"),
  Cr = Symbol.for("react.fragment"),
  Kc = Symbol.for("react.strict_mode"),
  xu = Symbol.for("react.profiler"),
  om = Symbol.for("react.provider"),
  sm = Symbol.for("react.context"),
  qc = Symbol.for("react.forward_ref"),
  wu = Symbol.for("react.suspense"),
  Su = Symbol.for("react.suspense_list"),
  Jc = Symbol.for("react.memo"),
  xn = Symbol.for("react.lazy"),
  lm = Symbol.for("react.offscreen"),
  Sf = Symbol.iterator;
function vi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Sf && e[Sf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ye = Object.assign,
  ha;
function Pi(e) {
  if (ha === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ha = (t && t[1]) || "";
    }
  return (
    `
` +
    ha +
    e
  );
}
var ma = !1;
function ga(e, t) {
  if (!e || ma) return "";
  ma = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (ma = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Pi(e) : "";
}
function sy(e) {
  switch (e.tag) {
    case 5:
      return Pi(e.type);
    case 16:
      return Pi("Lazy");
    case 13:
      return Pi("Suspense");
    case 19:
      return Pi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ga(e.type, !1)), e;
    case 11:
      return (e = ga(e.type.render, !1)), e;
    case 1:
      return (e = ga(e.type, !0)), e;
    default:
      return "";
  }
}
function bu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Cr:
      return "Fragment";
    case kr:
      return "Portal";
    case xu:
      return "Profiler";
    case Kc:
      return "StrictMode";
    case wu:
      return "Suspense";
    case Su:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case sm:
        return (e.displayName || "Context") + ".Consumer";
      case om:
        return (e._context.displayName || "Context") + ".Provider";
      case qc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Jc:
        return (
          (t = e.displayName || null), t !== null ? t : bu(e.type) || "Memo"
        );
      case xn:
        (t = e._payload), (e = e._init);
        try {
          return bu(e(t));
        } catch {}
    }
  return null;
}
function ly(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return bu(t);
    case 8:
      return t === Kc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Vn(e) {
  switch (typeof e) {
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
function am(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ay(e) {
  var t = am(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function $o(e) {
  e._valueTracker || (e._valueTracker = ay(e));
}
function um(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = am(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Os(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ju(e, t) {
  var n = t.checked;
  return ye({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function bf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Vn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function cm(e, t) {
  (t = t.checked), t != null && Gc(e, "checked", t, !1);
}
function Eu(e, t) {
  cm(e, t);
  var n = Vn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ku(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ku(e, t.type, Vn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function jf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ku(e, t, n) {
  (t !== "number" || Os(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ti = Array.isArray;
function Dr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Vn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Cu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return ye({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ef(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Ti(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Vn(n) };
}
function dm(e, t) {
  var n = Vn(t.value),
    r = Vn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function kf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function fm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Pu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? fm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Fo,
  pm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Fo = Fo || document.createElement("div"),
          Fo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Fo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ki(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  uy = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mi).forEach(function (e) {
  uy.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mi[t] = Mi[e]);
  });
});
function hm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Mi.hasOwnProperty(e) && Mi[e])
    ? ("" + t).trim()
    : t + "px";
}
function mm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = hm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var cy = ye(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Tu(e, t) {
  if (t) {
    if (cy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function Ou(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
      return !0;
  }
}
var _u = null;
function Qc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Lu = null,
  $r = null,
  Fr = null;
function Cf(e) {
  if ((e = bo(e))) {
    if (typeof Lu != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = vl(t)), Lu(e.stateNode, e.type, t));
  }
}
function gm(e) {
  $r ? (Fr ? Fr.push(e) : (Fr = [e])) : ($r = e);
}
function vm() {
  if ($r) {
    var e = $r,
      t = Fr;
    if (((Fr = $r = null), Cf(e), t)) for (e = 0; e < t.length; e++) Cf(t[e]);
  }
}
function ym(e, t) {
  return e(t);
}
function xm() {}
var va = !1;
function wm(e, t, n) {
  if (va) return e(t, n);
  va = !0;
  try {
    return ym(e, t, n);
  } finally {
    (va = !1), ($r !== null || Fr !== null) && (xm(), vm());
  }
}
function qi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = vl(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Nu = !1;
if (an)
  try {
    var yi = {};
    Object.defineProperty(yi, "passive", {
      get: function () {
        Nu = !0;
      },
    }),
      window.addEventListener("test", yi, yi),
      window.removeEventListener("test", yi, yi);
  } catch {
    Nu = !1;
  }
function dy(e, t, n, r, i, o, s, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var Ai = !1,
  _s = null,
  Ls = !1,
  Mu = null,
  fy = {
    onError: function (e) {
      (Ai = !0), (_s = e);
    },
  };
function py(e, t, n, r, i, o, s, l, a) {
  (Ai = !1), (_s = null), dy.apply(fy, arguments);
}
function hy(e, t, n, r, i, o, s, l, a) {
  if ((py.apply(this, arguments), Ai)) {
    if (Ai) {
      var c = _s;
      (Ai = !1), (_s = null);
    } else throw Error(N(198));
    Ls || ((Ls = !0), (Mu = c));
  }
}
function yr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Sm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Pf(e) {
  if (yr(e) !== e) throw Error(N(188));
}
function my(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = yr(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Pf(i), e;
        if (o === r) return Pf(i), t;
        o = o.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function bm(e) {
  return (e = my(e)), e !== null ? jm(e) : null;
}
function jm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = jm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Em = pt.unstable_scheduleCallback,
  Tf = pt.unstable_cancelCallback,
  gy = pt.unstable_shouldYield,
  vy = pt.unstable_requestPaint,
  je = pt.unstable_now,
  yy = pt.unstable_getCurrentPriorityLevel,
  Yc = pt.unstable_ImmediatePriority,
  km = pt.unstable_UserBlockingPriority,
  Ns = pt.unstable_NormalPriority,
  xy = pt.unstable_LowPriority,
  Cm = pt.unstable_IdlePriority,
  pl = null,
  Gt = null;
function wy(e) {
  if (Gt && typeof Gt.onCommitFiberRoot == "function")
    try {
      Gt.onCommitFiberRoot(pl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var At = Math.clz32 ? Math.clz32 : jy,
  Sy = Math.log,
  by = Math.LN2;
function jy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Sy(e) / by) | 0)) | 0;
}
var Uo = 64,
  Bo = 4194304;
function Oi(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ms(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = Oi(l)) : ((o &= s), o !== 0 && (r = Oi(o)));
  } else (s = n & ~i), s !== 0 ? (r = Oi(s)) : o !== 0 && (r = Oi(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - At(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Ey(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ky(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - At(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = Ey(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function Au(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Pm() {
  var e = Uo;
  return (Uo <<= 1), !(Uo & 4194240) && (Uo = 64), e;
}
function ya(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function wo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - At(t)),
    (e[t] = n);
}
function Cy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - At(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Xc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - At(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ee = 0;
function Tm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Om,
  Zc,
  _m,
  Lm,
  Nm,
  Ru = !1,
  Vo = [],
  On = null,
  _n = null,
  Ln = null,
  Ji = new Map(),
  Qi = new Map(),
  Sn = [],
  Py =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Of(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      On = null;
      break;
    case "dragenter":
    case "dragleave":
      _n = null;
      break;
    case "mouseover":
    case "mouseout":
      Ln = null;
      break;
    case "pointerover":
    case "pointerout":
      Ji.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Qi.delete(t.pointerId);
  }
}
function xi(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = bo(t)), t !== null && Zc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Ty(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (On = xi(On, e, t, n, r, i)), !0;
    case "dragenter":
      return (_n = xi(_n, e, t, n, r, i)), !0;
    case "mouseover":
      return (Ln = xi(Ln, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Ji.set(o, xi(Ji.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Qi.set(o, xi(Qi.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Mm(e) {
  var t = tr(e.target);
  if (t !== null) {
    var n = yr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Sm(n)), t !== null)) {
          (e.blockedOn = t),
            Nm(e.priority, function () {
              _m(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ls(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Iu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (_u = r), n.target.dispatchEvent(r), (_u = null);
    } else return (t = bo(n)), t !== null && Zc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function _f(e, t, n) {
  ls(e) && n.delete(t);
}
function Oy() {
  (Ru = !1),
    On !== null && ls(On) && (On = null),
    _n !== null && ls(_n) && (_n = null),
    Ln !== null && ls(Ln) && (Ln = null),
    Ji.forEach(_f),
    Qi.forEach(_f);
}
function wi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ru ||
      ((Ru = !0),
      pt.unstable_scheduleCallback(pt.unstable_NormalPriority, Oy)));
}
function Yi(e) {
  function t(i) {
    return wi(i, e);
  }
  if (0 < Vo.length) {
    wi(Vo[0], e);
    for (var n = 1; n < Vo.length; n++) {
      var r = Vo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    On !== null && wi(On, e),
      _n !== null && wi(_n, e),
      Ln !== null && wi(Ln, e),
      Ji.forEach(t),
      Qi.forEach(t),
      n = 0;
    n < Sn.length;
    n++
  )
    (r = Sn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Sn.length && ((n = Sn[0]), n.blockedOn === null); )
    Mm(n), n.blockedOn === null && Sn.shift();
}
var Ur = pn.ReactCurrentBatchConfig,
  As = !0;
function _y(e, t, n, r) {
  var i = ee,
    o = Ur.transition;
  Ur.transition = null;
  try {
    (ee = 1), ed(e, t, n, r);
  } finally {
    (ee = i), (Ur.transition = o);
  }
}
function Ly(e, t, n, r) {
  var i = ee,
    o = Ur.transition;
  Ur.transition = null;
  try {
    (ee = 4), ed(e, t, n, r);
  } finally {
    (ee = i), (Ur.transition = o);
  }
}
function ed(e, t, n, r) {
  if (As) {
    var i = Iu(e, t, n, r);
    if (i === null) Ta(e, t, r, Rs, n), Of(e, r);
    else if (Ty(i, e, t, n, r)) r.stopPropagation();
    else if ((Of(e, r), t & 4 && -1 < Py.indexOf(e))) {
      for (; i !== null; ) {
        var o = bo(i);
        if (
          (o !== null && Om(o),
          (o = Iu(e, t, n, r)),
          o === null && Ta(e, t, r, Rs, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ta(e, t, r, null, n);
  }
}
var Rs = null;
function Iu(e, t, n, r) {
  if (((Rs = null), (e = Qc(r)), (e = tr(e)), e !== null))
    if (((t = yr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Sm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Rs = e), null;
}
function Am(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (yy()) {
        case Yc:
          return 1;
        case km:
          return 4;
        case Ns:
        case xy:
          return 16;
        case Cm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var En = null,
  td = null,
  as = null;
function Rm() {
  if (as) return as;
  var e,
    t = td,
    n = t.length,
    r,
    i = "value" in En ? En.value : En.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (as = i.slice(e, 1 < r ? 1 - r : void 0));
}
function us(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ho() {
  return !0;
}
function Lf() {
  return !1;
}
function gt(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ho
        : Lf),
      (this.isPropagationStopped = Lf),
      this
    );
  }
  return (
    ye(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ho));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ho));
      },
      persist: function () {},
      isPersistent: Ho,
    }),
    t
  );
}
var di = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  nd = gt(di),
  So = ye({}, di, { view: 0, detail: 0 }),
  Ny = gt(So),
  xa,
  wa,
  Si,
  hl = ye({}, So, {
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
    getModifierState: rd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Si &&
            (Si && e.type === "mousemove"
              ? ((xa = e.screenX - Si.screenX), (wa = e.screenY - Si.screenY))
              : (wa = xa = 0),
            (Si = e)),
          xa);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : wa;
    },
  }),
  Nf = gt(hl),
  My = ye({}, hl, { dataTransfer: 0 }),
  Ay = gt(My),
  Ry = ye({}, So, { relatedTarget: 0 }),
  Sa = gt(Ry),
  Iy = ye({}, di, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zy = gt(Iy),
  Dy = ye({}, di, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  $y = gt(Dy),
  Fy = ye({}, di, { data: 0 }),
  Mf = gt(Fy),
  Uy = {
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
    MozPrintableKey: "Unidentified",
  },
  By = {
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
    224: "Meta",
  },
  Vy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Hy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Vy[e]) ? !!t[e] : !1;
}
function rd() {
  return Hy;
}
var Wy = ye({}, So, {
    key: function (e) {
      if (e.key) {
        var t = Uy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = us(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? By[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: rd,
    charCode: function (e) {
      return e.type === "keypress" ? us(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? us(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Gy = gt(Wy),
  Ky = ye({}, hl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Af = gt(Ky),
  qy = ye({}, So, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: rd,
  }),
  Jy = gt(qy),
  Qy = ye({}, di, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yy = gt(Qy),
  Xy = ye({}, hl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zy = gt(Xy),
  ex = [9, 13, 27, 32],
  id = an && "CompositionEvent" in window,
  Ri = null;
an && "documentMode" in document && (Ri = document.documentMode);
var tx = an && "TextEvent" in window && !Ri,
  Im = an && (!id || (Ri && 8 < Ri && 11 >= Ri)),
  Rf = String.fromCharCode(32),
  If = !1;
function zm(e, t) {
  switch (e) {
    case "keyup":
      return ex.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Dm(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Pr = !1;
function nx(e, t) {
  switch (e) {
    case "compositionend":
      return Dm(t);
    case "keypress":
      return t.which !== 32 ? null : ((If = !0), Rf);
    case "textInput":
      return (e = t.data), e === Rf && If ? null : e;
    default:
      return null;
  }
}
function rx(e, t) {
  if (Pr)
    return e === "compositionend" || (!id && zm(e, t))
      ? ((e = Rm()), (as = td = En = null), (Pr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Im && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ix = {
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
  week: !0,
};
function zf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ix[e.type] : t === "textarea";
}
function $m(e, t, n, r) {
  gm(r),
    (t = Is(t, "onChange")),
    0 < t.length &&
      ((n = new nd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ii = null,
  Xi = null;
function ox(e) {
  Qm(e, 0);
}
function ml(e) {
  var t = _r(e);
  if (um(t)) return e;
}
function sx(e, t) {
  if (e === "change") return t;
}
var Fm = !1;
if (an) {
  var ba;
  if (an) {
    var ja = "oninput" in document;
    if (!ja) {
      var Df = document.createElement("div");
      Df.setAttribute("oninput", "return;"),
        (ja = typeof Df.oninput == "function");
    }
    ba = ja;
  } else ba = !1;
  Fm = ba && (!document.documentMode || 9 < document.documentMode);
}
function $f() {
  Ii && (Ii.detachEvent("onpropertychange", Um), (Xi = Ii = null));
}
function Um(e) {
  if (e.propertyName === "value" && ml(Xi)) {
    var t = [];
    $m(t, Xi, e, Qc(e)), wm(ox, t);
  }
}
function lx(e, t, n) {
  e === "focusin"
    ? ($f(), (Ii = t), (Xi = n), Ii.attachEvent("onpropertychange", Um))
    : e === "focusout" && $f();
}
function ax(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ml(Xi);
}
function ux(e, t) {
  if (e === "click") return ml(t);
}
function cx(e, t) {
  if (e === "input" || e === "change") return ml(t);
}
function dx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var zt = typeof Object.is == "function" ? Object.is : dx;
function Zi(e, t) {
  if (zt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!yu.call(t, i) || !zt(e[i], t[i])) return !1;
  }
  return !0;
}
function Ff(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Uf(e, t) {
  var n = Ff(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ff(n);
  }
}
function Bm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Bm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Vm() {
  for (var e = window, t = Os(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Os(e.document);
  }
  return t;
}
function od(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function fx(e) {
  var t = Vm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Bm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && od(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Uf(n, o));
        var s = Uf(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var px = an && "documentMode" in document && 11 >= document.documentMode,
  Tr = null,
  zu = null,
  zi = null,
  Du = !1;
function Bf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Du ||
    Tr == null ||
    Tr !== Os(r) ||
    ((r = Tr),
    "selectionStart" in r && od(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (zi && Zi(zi, r)) ||
      ((zi = r),
      (r = Is(zu, "onSelect")),
      0 < r.length &&
        ((t = new nd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Tr))));
}
function Wo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Or = {
    animationend: Wo("Animation", "AnimationEnd"),
    animationiteration: Wo("Animation", "AnimationIteration"),
    animationstart: Wo("Animation", "AnimationStart"),
    transitionend: Wo("Transition", "TransitionEnd"),
  },
  Ea = {},
  Hm = {};
an &&
  ((Hm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Or.animationend.animation,
    delete Or.animationiteration.animation,
    delete Or.animationstart.animation),
  "TransitionEvent" in window || delete Or.transitionend.transition);
function gl(e) {
  if (Ea[e]) return Ea[e];
  if (!Or[e]) return e;
  var t = Or[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Hm) return (Ea[e] = t[n]);
  return e;
}
var Wm = gl("animationend"),
  Gm = gl("animationiteration"),
  Km = gl("animationstart"),
  qm = gl("transitionend"),
  Jm = new Map(),
  Vf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function qn(e, t) {
  Jm.set(e, t), vr(t, [e]);
}
for (var ka = 0; ka < Vf.length; ka++) {
  var Ca = Vf[ka],
    hx = Ca.toLowerCase(),
    mx = Ca[0].toUpperCase() + Ca.slice(1);
  qn(hx, "on" + mx);
}
qn(Wm, "onAnimationEnd");
qn(Gm, "onAnimationIteration");
qn(Km, "onAnimationStart");
qn("dblclick", "onDoubleClick");
qn("focusin", "onFocus");
qn("focusout", "onBlur");
qn(qm, "onTransitionEnd");
qr("onMouseEnter", ["mouseout", "mouseover"]);
qr("onMouseLeave", ["mouseout", "mouseover"]);
qr("onPointerEnter", ["pointerout", "pointerover"]);
qr("onPointerLeave", ["pointerout", "pointerover"]);
vr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
vr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
vr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
vr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
vr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var _i =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  gx = new Set("cancel close invalid load scroll toggle".split(" ").concat(_i));
function Hf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), hy(r, t, void 0, e), (e.currentTarget = null);
}
function Qm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            c = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          Hf(i, l, c), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (c = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          Hf(i, l, c), (o = a);
        }
    }
  }
  if (Ls) throw ((e = Mu), (Ls = !1), (Mu = null), e);
}
function ae(e, t) {
  var n = t[Vu];
  n === void 0 && (n = t[Vu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ym(t, e, 2, !1), n.add(r));
}
function Pa(e, t, n) {
  var r = 0;
  t && (r |= 4), Ym(n, e, r, t);
}
var Go = "_reactListening" + Math.random().toString(36).slice(2);
function eo(e) {
  if (!e[Go]) {
    (e[Go] = !0),
      im.forEach(function (n) {
        n !== "selectionchange" && (gx.has(n) || Pa(n, !1, e), Pa(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Go] || ((t[Go] = !0), Pa("selectionchange", !1, t));
  }
}
function Ym(e, t, n, r) {
  switch (Am(t)) {
    case 1:
      var i = _y;
      break;
    case 4:
      i = Ly;
      break;
    default:
      i = ed;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Nu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Ta(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = tr(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  wm(function () {
    var c = o,
      d = Qc(n),
      f = [];
    e: {
      var p = Jm.get(e);
      if (p !== void 0) {
        var h = nd,
          v = e;
        switch (e) {
          case "keypress":
            if (us(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = Gy;
            break;
          case "focusin":
            (v = "focus"), (h = Sa);
            break;
          case "focusout":
            (v = "blur"), (h = Sa);
            break;
          case "beforeblur":
          case "afterblur":
            h = Sa;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Nf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Ay;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Jy;
            break;
          case Wm:
          case Gm:
          case Km:
            h = zy;
            break;
          case qm:
            h = Yy;
            break;
          case "scroll":
            h = Ny;
            break;
          case "wheel":
            h = Zy;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = $y;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Af;
        }
        var y = (t & 4) !== 0,
          w = !y && e === "scroll",
          m = y ? (p !== null ? p + "Capture" : null) : p;
        y = [];
        for (var g = c, x; g !== null; ) {
          x = g;
          var S = x.stateNode;
          if (
            (x.tag === 5 &&
              S !== null &&
              ((x = S),
              m !== null && ((S = qi(g, m)), S != null && y.push(to(g, S, x)))),
            w)
          )
            break;
          g = g.return;
        }
        0 < y.length &&
          ((p = new h(p, v, null, n, d)), f.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          p &&
            n !== _u &&
            (v = n.relatedTarget || n.fromElement) &&
            (tr(v) || v[un]))
        )
          break e;
        if (
          (h || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          h
            ? ((v = n.relatedTarget || n.toElement),
              (h = c),
              (v = v ? tr(v) : null),
              v !== null &&
                ((w = yr(v)), v !== w || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((h = null), (v = c)),
          h !== v)
        ) {
          if (
            ((y = Nf),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Af),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (g = "pointer")),
            (w = h == null ? p : _r(h)),
            (x = v == null ? p : _r(v)),
            (p = new y(S, g + "leave", h, n, d)),
            (p.target = w),
            (p.relatedTarget = x),
            (S = null),
            tr(d) === c &&
              ((y = new y(m, g + "enter", v, n, d)),
              (y.target = x),
              (y.relatedTarget = w),
              (S = y)),
            (w = S),
            h && v)
          )
            t: {
              for (y = h, m = v, g = 0, x = y; x; x = jr(x)) g++;
              for (x = 0, S = m; S; S = jr(S)) x++;
              for (; 0 < g - x; ) (y = jr(y)), g--;
              for (; 0 < x - g; ) (m = jr(m)), x--;
              for (; g--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                (y = jr(y)), (m = jr(m));
              }
              y = null;
            }
          else y = null;
          h !== null && Wf(f, p, h, y, !1),
            v !== null && w !== null && Wf(f, w, v, y, !0);
        }
      }
      e: {
        if (
          ((p = c ? _r(c) : window),
          (h = p.nodeName && p.nodeName.toLowerCase()),
          h === "select" || (h === "input" && p.type === "file"))
        )
          var j = sx;
        else if (zf(p))
          if (Fm) j = cx;
          else {
            j = ax;
            var E = lx;
          }
        else
          (h = p.nodeName) &&
            h.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (j = ux);
        if (j && (j = j(e, c))) {
          $m(f, j, n, d);
          break e;
        }
        E && E(e, p, c),
          e === "focusout" &&
            (E = p._wrapperState) &&
            E.controlled &&
            p.type === "number" &&
            ku(p, "number", p.value);
      }
      switch (((E = c ? _r(c) : window), e)) {
        case "focusin":
          (zf(E) || E.contentEditable === "true") &&
            ((Tr = E), (zu = c), (zi = null));
          break;
        case "focusout":
          zi = zu = Tr = null;
          break;
        case "mousedown":
          Du = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Du = !1), Bf(f, n, d);
          break;
        case "selectionchange":
          if (px) break;
        case "keydown":
        case "keyup":
          Bf(f, n, d);
      }
      var k;
      if (id)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Pr
          ? zm(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Im &&
          n.locale !== "ko" &&
          (Pr || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Pr && (k = Rm())
            : ((En = d),
              (td = "value" in En ? En.value : En.textContent),
              (Pr = !0))),
        (E = Is(c, T)),
        0 < E.length &&
          ((T = new Mf(T, e, null, n, d)),
          f.push({ event: T, listeners: E }),
          k ? (T.data = k) : ((k = Dm(n)), k !== null && (T.data = k)))),
        (k = tx ? nx(e, n) : rx(e, n)) &&
          ((c = Is(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Mf("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = k)));
    }
    Qm(f, t);
  });
}
function to(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Is(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = qi(e, n)),
      o != null && r.unshift(to(e, o, i)),
      (o = qi(e, t)),
      o != null && r.push(to(e, o, i))),
      (e = e.return);
  }
  return r;
}
function jr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Wf(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      c = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      c !== null &&
      ((l = c),
      i
        ? ((a = qi(n, o)), a != null && s.unshift(to(n, a, l)))
        : i || ((a = qi(n, o)), a != null && s.push(to(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var vx = /\r\n?/g,
  yx = /\u0000|\uFFFD/g;
function Gf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      vx,
      `
`
    )
    .replace(yx, "");
}
function Ko(e, t, n) {
  if (((t = Gf(t)), Gf(e) !== t && n)) throw Error(N(425));
}
function zs() {}
var $u = null,
  Fu = null;
function Uu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Bu = typeof setTimeout == "function" ? setTimeout : void 0,
  xx = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Kf = typeof Promise == "function" ? Promise : void 0,
  wx =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Kf < "u"
      ? function (e) {
          return Kf.resolve(null).then(e).catch(Sx);
        }
      : Bu;
function Sx(e) {
  setTimeout(function () {
    throw e;
  });
}
function Oa(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Yi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Yi(t);
}
function Nn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function qf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var fi = Math.random().toString(36).slice(2),
  Vt = "__reactFiber$" + fi,
  no = "__reactProps$" + fi,
  un = "__reactContainer$" + fi,
  Vu = "__reactEvents$" + fi,
  bx = "__reactListeners$" + fi,
  jx = "__reactHandles$" + fi;
function tr(e) {
  var t = e[Vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[un] || n[Vt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qf(e); e !== null; ) {
          if ((n = e[Vt])) return n;
          e = qf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function bo(e) {
  return (
    (e = e[Vt] || e[un]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function _r(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function vl(e) {
  return e[no] || null;
}
var Hu = [],
  Lr = -1;
function Jn(e) {
  return { current: e };
}
function ce(e) {
  0 > Lr || ((e.current = Hu[Lr]), (Hu[Lr] = null), Lr--);
}
function se(e, t) {
  Lr++, (Hu[Lr] = e.current), (e.current = t);
}
var Hn = {},
  Ge = Jn(Hn),
  rt = Jn(!1),
  cr = Hn;
function Jr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Hn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function it(e) {
  return (e = e.childContextTypes), e != null;
}
function Ds() {
  ce(rt), ce(Ge);
}
function Jf(e, t, n) {
  if (Ge.current !== Hn) throw Error(N(168));
  se(Ge, t), se(rt, n);
}
function Xm(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(N(108, ly(e) || "Unknown", i));
  return ye({}, n, r);
}
function $s(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Hn),
    (cr = Ge.current),
    se(Ge, e),
    se(rt, rt.current),
    !0
  );
}
function Qf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = Xm(e, t, cr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ce(rt),
      ce(Ge),
      se(Ge, e))
    : ce(rt),
    se(rt, n);
}
var en = null,
  yl = !1,
  _a = !1;
function Zm(e) {
  en === null ? (en = [e]) : en.push(e);
}
function Ex(e) {
  (yl = !0), Zm(e);
}
function Qn() {
  if (!_a && en !== null) {
    _a = !0;
    var e = 0,
      t = ee;
    try {
      var n = en;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (en = null), (yl = !1);
    } catch (i) {
      throw (en !== null && (en = en.slice(e + 1)), Em(Yc, Qn), i);
    } finally {
      (ee = t), (_a = !1);
    }
  }
  return null;
}
var Nr = [],
  Mr = 0,
  Fs = null,
  Us = 0,
  xt = [],
  wt = 0,
  dr = null,
  tn = 1,
  nn = "";
function Xn(e, t) {
  (Nr[Mr++] = Us), (Nr[Mr++] = Fs), (Fs = e), (Us = t);
}
function e0(e, t, n) {
  (xt[wt++] = tn), (xt[wt++] = nn), (xt[wt++] = dr), (dr = e);
  var r = tn;
  e = nn;
  var i = 32 - At(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - At(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (tn = (1 << (32 - At(t) + i)) | (n << i) | r),
      (nn = o + e);
  } else (tn = (1 << o) | (n << i) | r), (nn = e);
}
function sd(e) {
  e.return !== null && (Xn(e, 1), e0(e, 1, 0));
}
function ld(e) {
  for (; e === Fs; )
    (Fs = Nr[--Mr]), (Nr[Mr] = null), (Us = Nr[--Mr]), (Nr[Mr] = null);
  for (; e === dr; )
    (dr = xt[--wt]),
      (xt[wt] = null),
      (nn = xt[--wt]),
      (xt[wt] = null),
      (tn = xt[--wt]),
      (xt[wt] = null);
}
var ft = null,
  dt = null,
  pe = !1,
  Nt = null;
function t0(e, t) {
  var n = St(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Yf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ft = e), (dt = Nn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ft = e), (dt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = dr !== null ? { id: tn, overflow: nn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = St(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ft = e),
            (dt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Wu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Gu(e) {
  if (pe) {
    var t = dt;
    if (t) {
      var n = t;
      if (!Yf(e, t)) {
        if (Wu(e)) throw Error(N(418));
        t = Nn(n.nextSibling);
        var r = ft;
        t && Yf(e, t)
          ? t0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (ft = e));
      }
    } else {
      if (Wu(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (pe = !1), (ft = e);
    }
  }
}
function Xf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ft = e;
}
function qo(e) {
  if (e !== ft) return !1;
  if (!pe) return Xf(e), (pe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Uu(e.type, e.memoizedProps))),
    t && (t = dt))
  ) {
    if (Wu(e)) throw (n0(), Error(N(418)));
    for (; t; ) t0(e, t), (t = Nn(t.nextSibling));
  }
  if ((Xf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              dt = Nn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      dt = null;
    }
  } else dt = ft ? Nn(e.stateNode.nextSibling) : null;
  return !0;
}
function n0() {
  for (var e = dt; e; ) e = Nn(e.nextSibling);
}
function Qr() {
  (dt = ft = null), (pe = !1);
}
function ad(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
var kx = pn.ReactCurrentBatchConfig;
function _t(e, t) {
  if (e && e.defaultProps) {
    (t = ye({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Bs = Jn(null),
  Vs = null,
  Ar = null,
  ud = null;
function cd() {
  ud = Ar = Vs = null;
}
function dd(e) {
  var t = Bs.current;
  ce(Bs), (e._currentValue = t);
}
function Ku(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Br(e, t) {
  (Vs = e),
    (ud = Ar = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (tt = !0), (e.firstContext = null));
}
function Et(e) {
  var t = e._currentValue;
  if (ud !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ar === null)) {
      if (Vs === null) throw Error(N(308));
      (Ar = e), (Vs.dependencies = { lanes: 0, firstContext: e });
    } else Ar = Ar.next = e;
  return t;
}
var nr = null;
function fd(e) {
  nr === null ? (nr = [e]) : nr.push(e);
}
function r0(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), fd(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    cn(e, r)
  );
}
function cn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var wn = !1;
function pd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function i0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function on(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Mn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), K & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      cn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), fd(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    cn(e, n)
  );
}
function cs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xc(e, n);
  }
}
function Zf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Hs(e, t, n, r) {
  var i = e.updateQueue;
  wn = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      c = a.next;
    (a.next = null), s === null ? (o = c) : (s.next = c), (s = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== s &&
        (l === null ? (d.firstBaseUpdate = c) : (l.next = c),
        (d.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (d = c = a = null), (l = o);
    do {
      var p = l.lane,
        h = l.eventTime;
      if ((r & p) === p) {
        d !== null &&
          (d = d.next =
            {
              eventTime: h,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = e,
            y = l;
          switch (((p = t), (h = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                f = v.call(h, f, p);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (p = typeof v == "function" ? v.call(h, f, p) : v),
                p == null)
              )
                break e;
              f = ye({}, f, p);
              break e;
            case 2:
              wn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [l]) : p.push(l));
      } else
        (h = {
          eventTime: h,
          lane: p,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((c = d = h), (a = f)) : (d = d.next = h),
          (s |= p);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (p = l),
          (l = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (pr |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function ep(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(N(191, i));
        i.call(r);
      }
    }
}
var o0 = new rm.Component().refs;
function qu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ye({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var xl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? yr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Je(),
      i = Rn(e),
      o = on(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Mn(e, o, i)),
      t !== null && (Rt(t, e, i, r), cs(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Je(),
      i = Rn(e),
      o = on(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Mn(e, o, i)),
      t !== null && (Rt(t, e, i, r), cs(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Je(),
      r = Rn(e),
      i = on(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Mn(e, i, r)),
      t !== null && (Rt(t, e, r, n), cs(t, e, r));
  },
};
function tp(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Zi(n, r) || !Zi(i, o)
      : !0
  );
}
function s0(e, t, n) {
  var r = !1,
    i = Hn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Et(o))
      : ((i = it(t) ? cr : Ge.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Jr(e, i) : Hn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = xl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function np(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xl.enqueueReplaceState(t, t.state, null);
}
function Ju(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = o0), pd(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Et(o))
    : ((o = it(t) ? cr : Ge.current), (i.context = Jr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (qu(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && xl.enqueueReplaceState(i, i.state, null),
      Hs(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function bi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === o0 && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Jo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function rp(e) {
  var t = e._init;
  return t(e._payload);
}
function l0(e) {
  function t(m, g) {
    if (e) {
      var x = m.deletions;
      x === null ? ((m.deletions = [g]), (m.flags |= 16)) : x.push(g);
    }
  }
  function n(m, g) {
    if (!e) return null;
    for (; g !== null; ) t(m, g), (g = g.sibling);
    return null;
  }
  function r(m, g) {
    for (m = new Map(); g !== null; )
      g.key !== null ? m.set(g.key, g) : m.set(g.index, g), (g = g.sibling);
    return m;
  }
  function i(m, g) {
    return (m = In(m, g)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, g, x) {
    return (
      (m.index = x),
      e
        ? ((x = m.alternate),
          x !== null
            ? ((x = x.index), x < g ? ((m.flags |= 2), g) : x)
            : ((m.flags |= 2), g))
        : ((m.flags |= 1048576), g)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, g, x, S) {
    return g === null || g.tag !== 6
      ? ((g = za(x, m.mode, S)), (g.return = m), g)
      : ((g = i(g, x)), (g.return = m), g);
  }
  function a(m, g, x, S) {
    var j = x.type;
    return j === Cr
      ? d(m, g, x.props.children, S, x.key)
      : g !== null &&
        (g.elementType === j ||
          (typeof j == "object" &&
            j !== null &&
            j.$$typeof === xn &&
            rp(j) === g.type))
      ? ((S = i(g, x.props)), (S.ref = bi(m, g, x)), (S.return = m), S)
      : ((S = gs(x.type, x.key, x.props, null, m.mode, S)),
        (S.ref = bi(m, g, x)),
        (S.return = m),
        S);
  }
  function c(m, g, x, S) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== x.containerInfo ||
      g.stateNode.implementation !== x.implementation
      ? ((g = Da(x, m.mode, S)), (g.return = m), g)
      : ((g = i(g, x.children || [])), (g.return = m), g);
  }
  function d(m, g, x, S, j) {
    return g === null || g.tag !== 7
      ? ((g = lr(x, m.mode, S, j)), (g.return = m), g)
      : ((g = i(g, x)), (g.return = m), g);
  }
  function f(m, g, x) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = za("" + g, m.mode, x)), (g.return = m), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Do:
          return (
            (x = gs(g.type, g.key, g.props, null, m.mode, x)),
            (x.ref = bi(m, null, g)),
            (x.return = m),
            x
          );
        case kr:
          return (g = Da(g, m.mode, x)), (g.return = m), g;
        case xn:
          var S = g._init;
          return f(m, S(g._payload), x);
      }
      if (Ti(g) || vi(g))
        return (g = lr(g, m.mode, x, null)), (g.return = m), g;
      Jo(m, g);
    }
    return null;
  }
  function p(m, g, x, S) {
    var j = g !== null ? g.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return j !== null ? null : l(m, g, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Do:
          return x.key === j ? a(m, g, x, S) : null;
        case kr:
          return x.key === j ? c(m, g, x, S) : null;
        case xn:
          return (j = x._init), p(m, g, j(x._payload), S);
      }
      if (Ti(x) || vi(x)) return j !== null ? null : d(m, g, x, S, null);
      Jo(m, x);
    }
    return null;
  }
  function h(m, g, x, S, j) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(x) || null), l(g, m, "" + S, j);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Do:
          return (m = m.get(S.key === null ? x : S.key) || null), a(g, m, S, j);
        case kr:
          return (m = m.get(S.key === null ? x : S.key) || null), c(g, m, S, j);
        case xn:
          var E = S._init;
          return h(m, g, x, E(S._payload), j);
      }
      if (Ti(S) || vi(S)) return (m = m.get(x) || null), d(g, m, S, j, null);
      Jo(g, S);
    }
    return null;
  }
  function v(m, g, x, S) {
    for (
      var j = null, E = null, k = g, T = (g = 0), O = null;
      k !== null && T < x.length;
      T++
    ) {
      k.index > T ? ((O = k), (k = null)) : (O = k.sibling);
      var L = p(m, k, x[T], S);
      if (L === null) {
        k === null && (k = O);
        break;
      }
      e && k && L.alternate === null && t(m, k),
        (g = o(L, g, T)),
        E === null ? (j = L) : (E.sibling = L),
        (E = L),
        (k = O);
    }
    if (T === x.length) return n(m, k), pe && Xn(m, T), j;
    if (k === null) {
      for (; T < x.length; T++)
        (k = f(m, x[T], S)),
          k !== null &&
            ((g = o(k, g, T)), E === null ? (j = k) : (E.sibling = k), (E = k));
      return pe && Xn(m, T), j;
    }
    for (k = r(m, k); T < x.length; T++)
      (O = h(k, m, T, x[T], S)),
        O !== null &&
          (e && O.alternate !== null && k.delete(O.key === null ? T : O.key),
          (g = o(O, g, T)),
          E === null ? (j = O) : (E.sibling = O),
          (E = O));
    return (
      e &&
        k.forEach(function (C) {
          return t(m, C);
        }),
      pe && Xn(m, T),
      j
    );
  }
  function y(m, g, x, S) {
    var j = vi(x);
    if (typeof j != "function") throw Error(N(150));
    if (((x = j.call(x)), x == null)) throw Error(N(151));
    for (
      var E = (j = null), k = g, T = (g = 0), O = null, L = x.next();
      k !== null && !L.done;
      T++, L = x.next()
    ) {
      k.index > T ? ((O = k), (k = null)) : (O = k.sibling);
      var C = p(m, k, L.value, S);
      if (C === null) {
        k === null && (k = O);
        break;
      }
      e && k && C.alternate === null && t(m, k),
        (g = o(C, g, T)),
        E === null ? (j = C) : (E.sibling = C),
        (E = C),
        (k = O);
    }
    if (L.done) return n(m, k), pe && Xn(m, T), j;
    if (k === null) {
      for (; !L.done; T++, L = x.next())
        (L = f(m, L.value, S)),
          L !== null &&
            ((g = o(L, g, T)), E === null ? (j = L) : (E.sibling = L), (E = L));
      return pe && Xn(m, T), j;
    }
    for (k = r(m, k); !L.done; T++, L = x.next())
      (L = h(k, m, T, L.value, S)),
        L !== null &&
          (e && L.alternate !== null && k.delete(L.key === null ? T : L.key),
          (g = o(L, g, T)),
          E === null ? (j = L) : (E.sibling = L),
          (E = L));
    return (
      e &&
        k.forEach(function (P) {
          return t(m, P);
        }),
      pe && Xn(m, T),
      j
    );
  }
  function w(m, g, x, S) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === Cr &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case Do:
          e: {
            for (var j = x.key, E = g; E !== null; ) {
              if (E.key === j) {
                if (((j = x.type), j === Cr)) {
                  if (E.tag === 7) {
                    n(m, E.sibling),
                      (g = i(E, x.props.children)),
                      (g.return = m),
                      (m = g);
                    break e;
                  }
                } else if (
                  E.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === xn &&
                    rp(j) === E.type)
                ) {
                  n(m, E.sibling),
                    (g = i(E, x.props)),
                    (g.ref = bi(m, E, x)),
                    (g.return = m),
                    (m = g);
                  break e;
                }
                n(m, E);
                break;
              } else t(m, E);
              E = E.sibling;
            }
            x.type === Cr
              ? ((g = lr(x.props.children, m.mode, S, x.key)),
                (g.return = m),
                (m = g))
              : ((S = gs(x.type, x.key, x.props, null, m.mode, S)),
                (S.ref = bi(m, g, x)),
                (S.return = m),
                (m = S));
          }
          return s(m);
        case kr:
          e: {
            for (E = x.key; g !== null; ) {
              if (g.key === E)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === x.containerInfo &&
                  g.stateNode.implementation === x.implementation
                ) {
                  n(m, g.sibling),
                    (g = i(g, x.children || [])),
                    (g.return = m),
                    (m = g);
                  break e;
                } else {
                  n(m, g);
                  break;
                }
              else t(m, g);
              g = g.sibling;
            }
            (g = Da(x, m.mode, S)), (g.return = m), (m = g);
          }
          return s(m);
        case xn:
          return (E = x._init), w(m, g, E(x._payload), S);
      }
      if (Ti(x)) return v(m, g, x, S);
      if (vi(x)) return y(m, g, x, S);
      Jo(m, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        g !== null && g.tag === 6
          ? (n(m, g.sibling), (g = i(g, x)), (g.return = m), (m = g))
          : (n(m, g), (g = za(x, m.mode, S)), (g.return = m), (m = g)),
        s(m))
      : n(m, g);
  }
  return w;
}
var Yr = l0(!0),
  a0 = l0(!1),
  jo = {},
  Kt = Jn(jo),
  ro = Jn(jo),
  io = Jn(jo);
function rr(e) {
  if (e === jo) throw Error(N(174));
  return e;
}
function hd(e, t) {
  switch ((se(io, t), se(ro, e), se(Kt, jo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Pu(t, e));
  }
  ce(Kt), se(Kt, t);
}
function Xr() {
  ce(Kt), ce(ro), ce(io);
}
function u0(e) {
  rr(io.current);
  var t = rr(Kt.current),
    n = Pu(t, e.type);
  t !== n && (se(ro, e), se(Kt, n));
}
function md(e) {
  ro.current === e && (ce(Kt), ce(ro));
}
var ge = Jn(0);
function Ws(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var La = [];
function gd() {
  for (var e = 0; e < La.length; e++)
    La[e]._workInProgressVersionPrimary = null;
  La.length = 0;
}
var ds = pn.ReactCurrentDispatcher,
  Na = pn.ReactCurrentBatchConfig,
  fr = 0,
  ve = null,
  Oe = null,
  Me = null,
  Gs = !1,
  Di = !1,
  oo = 0,
  Cx = 0;
function Be() {
  throw Error(N(321));
}
function vd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!zt(e[n], t[n])) return !1;
  return !0;
}
function yd(e, t, n, r, i, o) {
  if (
    ((fr = o),
    (ve = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ds.current = e === null || e.memoizedState === null ? _x : Lx),
    (e = n(r, i)),
    Di)
  ) {
    o = 0;
    do {
      if (((Di = !1), (oo = 0), 25 <= o)) throw Error(N(301));
      (o += 1),
        (Me = Oe = null),
        (t.updateQueue = null),
        (ds.current = Nx),
        (e = n(r, i));
    } while (Di);
  }
  if (
    ((ds.current = Ks),
    (t = Oe !== null && Oe.next !== null),
    (fr = 0),
    (Me = Oe = ve = null),
    (Gs = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function xd() {
  var e = oo !== 0;
  return (oo = 0), e;
}
function Ut() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Me === null ? (ve.memoizedState = Me = e) : (Me = Me.next = e), Me;
}
function kt() {
  if (Oe === null) {
    var e = ve.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Oe.next;
  var t = Me === null ? ve.memoizedState : Me.next;
  if (t !== null) (Me = t), (Oe = e);
  else {
    if (e === null) throw Error(N(310));
    (Oe = e),
      (e = {
        memoizedState: Oe.memoizedState,
        baseState: Oe.baseState,
        baseQueue: Oe.baseQueue,
        queue: Oe.queue,
        next: null,
      }),
      Me === null ? (ve.memoizedState = Me = e) : (Me = Me.next = e);
  }
  return Me;
}
function so(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ma(e) {
  var t = kt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = Oe,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      c = o;
    do {
      var d = c.lane;
      if ((fr & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (ve.lanes |= d),
          (pr |= d);
      }
      c = c.next;
    } while (c !== null && c !== o);
    a === null ? (s = r) : (a.next = l),
      zt(r, t.memoizedState) || (tt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ve.lanes |= o), (pr |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Aa(e) {
  var t = kt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    zt(o, t.memoizedState) || (tt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function c0() {}
function d0(e, t) {
  var n = ve,
    r = kt(),
    i = t(),
    o = !zt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (tt = !0)),
    (r = r.queue),
    wd(h0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Me !== null && Me.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      lo(9, p0.bind(null, n, r, i, t), void 0, null),
      Ie === null)
    )
      throw Error(N(349));
    fr & 30 || f0(n, t, i);
  }
  return i;
}
function f0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ve.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function p0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), m0(t) && g0(e);
}
function h0(e, t, n) {
  return n(function () {
    m0(t) && g0(e);
  });
}
function m0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !zt(e, n);
  } catch {
    return !0;
  }
}
function g0(e) {
  var t = cn(e, 1);
  t !== null && Rt(t, e, 1, -1);
}
function ip(e) {
  var t = Ut();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: so,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ox.bind(null, ve, e)),
    [t.memoizedState, e]
  );
}
function lo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ve.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function v0() {
  return kt().memoizedState;
}
function fs(e, t, n, r) {
  var i = Ut();
  (ve.flags |= e),
    (i.memoizedState = lo(1 | t, n, void 0, r === void 0 ? null : r));
}
function wl(e, t, n, r) {
  var i = kt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Oe !== null) {
    var s = Oe.memoizedState;
    if (((o = s.destroy), r !== null && vd(r, s.deps))) {
      i.memoizedState = lo(t, n, o, r);
      return;
    }
  }
  (ve.flags |= e), (i.memoizedState = lo(1 | t, n, o, r));
}
function op(e, t) {
  return fs(8390656, 8, e, t);
}
function wd(e, t) {
  return wl(2048, 8, e, t);
}
function y0(e, t) {
  return wl(4, 2, e, t);
}
function x0(e, t) {
  return wl(4, 4, e, t);
}
function w0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function S0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), wl(4, 4, w0.bind(null, t, e), n)
  );
}
function Sd() {}
function b0(e, t) {
  var n = kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function j0(e, t) {
  var n = kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function E0(e, t, n) {
  return fr & 21
    ? (zt(n, t) || ((n = Pm()), (ve.lanes |= n), (pr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (tt = !0)), (e.memoizedState = n));
}
function Px(e, t) {
  var n = ee;
  (ee = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Na.transition;
  Na.transition = {};
  try {
    e(!1), t();
  } finally {
    (ee = n), (Na.transition = r);
  }
}
function k0() {
  return kt().memoizedState;
}
function Tx(e, t, n) {
  var r = Rn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    C0(e))
  )
    P0(t, n);
  else if (((n = r0(e, t, n, r)), n !== null)) {
    var i = Je();
    Rt(n, e, r, i), T0(n, t, r);
  }
}
function Ox(e, t, n) {
  var r = Rn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (C0(e)) P0(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), zt(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), fd(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = r0(e, t, i, r)),
      n !== null && ((i = Je()), Rt(n, e, r, i), T0(n, t, r));
  }
}
function C0(e) {
  var t = e.alternate;
  return e === ve || (t !== null && t === ve);
}
function P0(e, t) {
  Di = Gs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function T0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xc(e, n);
  }
}
var Ks = {
    readContext: Et,
    useCallback: Be,
    useContext: Be,
    useEffect: Be,
    useImperativeHandle: Be,
    useInsertionEffect: Be,
    useLayoutEffect: Be,
    useMemo: Be,
    useReducer: Be,
    useRef: Be,
    useState: Be,
    useDebugValue: Be,
    useDeferredValue: Be,
    useTransition: Be,
    useMutableSource: Be,
    useSyncExternalStore: Be,
    useId: Be,
    unstable_isNewReconciler: !1,
  },
  _x = {
    readContext: Et,
    useCallback: function (e, t) {
      return (Ut().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Et,
    useEffect: op,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        fs(4194308, 4, w0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return fs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return fs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ut();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ut();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Tx.bind(null, ve, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ut();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ip,
    useDebugValue: Sd,
    useDeferredValue: function (e) {
      return (Ut().memoizedState = e);
    },
    useTransition: function () {
      var e = ip(!1),
        t = e[0];
      return (e = Px.bind(null, e[1])), (Ut().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ve,
        i = Ut();
      if (pe) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), Ie === null)) throw Error(N(349));
        fr & 30 || f0(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        op(h0.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        lo(9, p0.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ut(),
        t = Ie.identifierPrefix;
      if (pe) {
        var n = nn,
          r = tn;
        (n = (r & ~(1 << (32 - At(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = oo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Cx++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Lx = {
    readContext: Et,
    useCallback: b0,
    useContext: Et,
    useEffect: wd,
    useImperativeHandle: S0,
    useInsertionEffect: y0,
    useLayoutEffect: x0,
    useMemo: j0,
    useReducer: Ma,
    useRef: v0,
    useState: function () {
      return Ma(so);
    },
    useDebugValue: Sd,
    useDeferredValue: function (e) {
      var t = kt();
      return E0(t, Oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ma(so)[0],
        t = kt().memoizedState;
      return [e, t];
    },
    useMutableSource: c0,
    useSyncExternalStore: d0,
    useId: k0,
    unstable_isNewReconciler: !1,
  },
  Nx = {
    readContext: Et,
    useCallback: b0,
    useContext: Et,
    useEffect: wd,
    useImperativeHandle: S0,
    useInsertionEffect: y0,
    useLayoutEffect: x0,
    useMemo: j0,
    useReducer: Aa,
    useRef: v0,
    useState: function () {
      return Aa(so);
    },
    useDebugValue: Sd,
    useDeferredValue: function (e) {
      var t = kt();
      return Oe === null ? (t.memoizedState = e) : E0(t, Oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Aa(so)[0],
        t = kt().memoizedState;
      return [e, t];
    },
    useMutableSource: c0,
    useSyncExternalStore: d0,
    useId: k0,
    unstable_isNewReconciler: !1,
  };
function Zr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += sy(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ra(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Qu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Mx = typeof WeakMap == "function" ? WeakMap : Map;
function O0(e, t, n) {
  (n = on(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Js || ((Js = !0), (sc = r)), Qu(e, t);
    }),
    n
  );
}
function _0(e, t, n) {
  (n = on(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Qu(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Qu(e, t),
          typeof r != "function" &&
            (An === null ? (An = new Set([this])) : An.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function sp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Mx();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Kx.bind(null, e, t, n)), t.then(e, e));
}
function lp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ap(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = on(-1, 1)), (t.tag = 2), Mn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ax = pn.ReactCurrentOwner,
  tt = !1;
function Ke(e, t, n, r) {
  t.child = e === null ? a0(t, null, n, r) : Yr(t, e.child, n, r);
}
function up(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Br(t, i),
    (r = yd(e, t, n, r, o, i)),
    (n = xd()),
    e !== null && !tt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        dn(e, t, i))
      : (pe && n && sd(t), (t.flags |= 1), Ke(e, t, r, i), t.child)
  );
}
function cp(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Od(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), L0(e, t, o, r, i))
      : ((e = gs(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Zi), n(s, r) && e.ref === t.ref)
    )
      return dn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = In(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function L0(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Zi(o, r) && e.ref === t.ref)
      if (((tt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (tt = !0);
      else return (t.lanes = e.lanes), dn(e, t, i);
  }
  return Yu(e, t, n, r, i);
}
function N0(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        se(Ir, ut),
        (ut |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          se(Ir, ut),
          (ut |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        se(Ir, ut),
        (ut |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      se(Ir, ut),
      (ut |= r);
  return Ke(e, t, i, n), t.child;
}
function M0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Yu(e, t, n, r, i) {
  var o = it(n) ? cr : Ge.current;
  return (
    (o = Jr(t, o)),
    Br(t, i),
    (n = yd(e, t, n, r, o, i)),
    (r = xd()),
    e !== null && !tt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        dn(e, t, i))
      : (pe && r && sd(t), (t.flags |= 1), Ke(e, t, n, i), t.child)
  );
}
function dp(e, t, n, r, i) {
  if (it(n)) {
    var o = !0;
    $s(t);
  } else o = !1;
  if ((Br(t, i), t.stateNode === null))
    ps(e, t), s0(t, n, r), Ju(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Et(c))
      : ((c = it(n) ? cr : Ge.current), (c = Jr(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== c) && np(t, s, r, c)),
      (wn = !1);
    var p = t.memoizedState;
    (s.state = p),
      Hs(t, r, s, i),
      (a = t.memoizedState),
      l !== r || p !== a || rt.current || wn
        ? (typeof d == "function" && (qu(t, n, d, r), (a = t.memoizedState)),
          (l = wn || tp(t, n, l, r, p, a, c))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = c),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      i0(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : _t(t.type, l)),
      (s.props = c),
      (f = t.pendingProps),
      (p = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Et(a))
        : ((a = it(n) ? cr : Ge.current), (a = Jr(t, a)));
    var h = n.getDerivedStateFromProps;
    (d =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || p !== a) && np(t, s, r, a)),
      (wn = !1),
      (p = t.memoizedState),
      (s.state = p),
      Hs(t, r, s, i);
    var v = t.memoizedState;
    l !== f || p !== v || rt.current || wn
      ? (typeof h == "function" && (qu(t, n, h, r), (v = t.memoizedState)),
        (c = wn || tp(t, n, c, r, p, v, a) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = a),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Xu(e, t, n, r, o, i);
}
function Xu(e, t, n, r, i, o) {
  M0(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Qf(t, n, !1), dn(e, t, o);
  (r = t.stateNode), (Ax.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Yr(t, e.child, null, o)), (t.child = Yr(t, null, l, o)))
      : Ke(e, t, l, o),
    (t.memoizedState = r.state),
    i && Qf(t, n, !0),
    t.child
  );
}
function A0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Jf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Jf(e, t.context, !1),
    hd(e, t.containerInfo);
}
function fp(e, t, n, r, i) {
  return Qr(), ad(i), (t.flags |= 256), Ke(e, t, n, r), t.child;
}
var Zu = { dehydrated: null, treeContext: null, retryLane: 0 };
function ec(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function R0(e, t, n) {
  var r = t.pendingProps,
    i = ge.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    se(ge, i & 1),
    e === null)
  )
    return (
      Gu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = jl(s, r, 0, null)),
              (e = lr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ec(n)),
              (t.memoizedState = Zu),
              e)
            : bd(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Rx(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = In(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = In(l, o)) : ((o = lr(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ec(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Zu),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = In(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function bd(e, t) {
  return (
    (t = jl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Qo(e, t, n, r) {
  return (
    r !== null && ad(r),
    Yr(t, e.child, null, n),
    (e = bd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Rx(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ra(Error(N(422)))), Qo(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = jl({ mode: "visible", children: r.children }, i, 0, null)),
        (o = lr(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Yr(t, e.child, null, s),
        (t.child.memoizedState = ec(s)),
        (t.memoizedState = Zu),
        o);
  if (!(t.mode & 1)) return Qo(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(N(419))), (r = Ra(o, r, void 0)), Qo(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), tt || l)) {
    if (((r = Ie), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), cn(e, i), Rt(r, e, i, -1));
    }
    return Td(), (r = Ra(Error(N(421)))), Qo(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = qx.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (dt = Nn(i.nextSibling)),
      (ft = t),
      (pe = !0),
      (Nt = null),
      e !== null &&
        ((xt[wt++] = tn),
        (xt[wt++] = nn),
        (xt[wt++] = dr),
        (tn = e.id),
        (nn = e.overflow),
        (dr = t)),
      (t = bd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function pp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ku(e.return, t, n);
}
function Ia(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function I0(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ke(e, t, r.children, n), (r = ge.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && pp(e, n, t);
        else if (e.tag === 19) pp(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((se(ge, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Ws(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ia(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ws(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ia(t, !0, n, null, o);
        break;
      case "together":
        Ia(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ps(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function dn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (pr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = In(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = In(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ix(e, t, n) {
  switch (t.tag) {
    case 3:
      A0(t), Qr();
      break;
    case 5:
      u0(t);
      break;
    case 1:
      it(t.type) && $s(t);
      break;
    case 4:
      hd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      se(Bs, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (se(ge, ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? R0(e, t, n)
          : (se(ge, ge.current & 1),
            (e = dn(e, t, n)),
            e !== null ? e.sibling : null);
      se(ge, ge.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return I0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        se(ge, ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), N0(e, t, n);
  }
  return dn(e, t, n);
}
var z0, tc, D0, $0;
z0 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
tc = function () {};
D0 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), rr(Kt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = ju(e, i)), (r = ju(e, r)), (o = []);
        break;
      case "select":
        (i = ye({}, i, { value: void 0 })),
          (r = ye({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Cu(e, i)), (r = Cu(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = zs);
    }
    Tu(n, r);
    var s;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var l = i[c];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Gi.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((l = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && a !== l && (a != null || l != null))
      )
        if (c === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Gi.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && ae("scroll", e),
                  o || l === a || (o = []))
                : (o = o || []).push(c, a));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
$0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ji(e, t) {
  if (!pe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function zx(e, t, n) {
  var r = t.pendingProps;
  switch ((ld(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ve(t), null;
    case 1:
      return it(t.type) && Ds(), Ve(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Xr(),
        ce(rt),
        ce(Ge),
        gd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (qo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Nt !== null && (uc(Nt), (Nt = null)))),
        tc(e, t),
        Ve(t),
        null
      );
    case 5:
      md(t);
      var i = rr(io.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        D0(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return Ve(t), null;
        }
        if (((e = rr(Kt.current)), qo(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Vt] = t), (r[no] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ae("cancel", r), ae("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ae("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < _i.length; i++) ae(_i[i], r);
              break;
            case "source":
              ae("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ae("error", r), ae("load", r);
              break;
            case "details":
              ae("toggle", r);
              break;
            case "input":
              bf(r, o), ae("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ae("invalid", r);
              break;
            case "textarea":
              Ef(r, o), ae("invalid", r);
          }
          Tu(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ko(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ko(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Gi.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  ae("scroll", r);
            }
          switch (n) {
            case "input":
              $o(r), jf(r, o, !0);
              break;
            case "textarea":
              $o(r), kf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = zs);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = fm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Vt] = t),
            (e[no] = r),
            z0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Ou(n, r)), n)) {
              case "dialog":
                ae("cancel", e), ae("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ae("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < _i.length; i++) ae(_i[i], e);
                i = r;
                break;
              case "source":
                ae("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ae("error", e), ae("load", e), (i = r);
                break;
              case "details":
                ae("toggle", e), (i = r);
                break;
              case "input":
                bf(e, r), (i = ju(e, r)), ae("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ye({}, r, { value: void 0 })),
                  ae("invalid", e);
                break;
              case "textarea":
                Ef(e, r), (i = Cu(e, r)), ae("invalid", e);
                break;
              default:
                i = r;
            }
            Tu(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? mm(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && pm(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Ki(e, a)
                    : typeof a == "number" && Ki(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Gi.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && ae("scroll", e)
                      : a != null && Gc(e, o, a, s));
              }
            switch (n) {
              case "input":
                $o(e), jf(e, r, !1);
                break;
              case "textarea":
                $o(e), kf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Vn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Dr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Dr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = zs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ve(t), null;
    case 6:
      if (e && t.stateNode != null) $0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = rr(io.current)), rr(Kt.current), qo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Vt] = t),
            (o = r.nodeValue !== n) && ((e = ft), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ko(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ko(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Vt] = t),
            (t.stateNode = r);
      }
      return Ve(t), null;
    case 13:
      if (
        (ce(ge),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (pe && dt !== null && t.mode & 1 && !(t.flags & 128))
          n0(), Qr(), (t.flags |= 98560), (o = !1);
        else if (((o = qo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(N(317));
            o[Vt] = t;
          } else
            Qr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ve(t), (o = !1);
        } else Nt !== null && (uc(Nt), (Nt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ge.current & 1 ? _e === 0 && (_e = 3) : Td())),
          t.updateQueue !== null && (t.flags |= 4),
          Ve(t),
          null);
    case 4:
      return (
        Xr(), tc(e, t), e === null && eo(t.stateNode.containerInfo), Ve(t), null
      );
    case 10:
      return dd(t.type._context), Ve(t), null;
    case 17:
      return it(t.type) && Ds(), Ve(t), null;
    case 19:
      if ((ce(ge), (o = t.memoizedState), o === null)) return Ve(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) ji(o, !1);
        else {
          if (_e !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Ws(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ji(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return se(ge, (ge.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            je() > ei &&
            ((t.flags |= 128), (r = !0), ji(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ws(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ji(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !pe)
            )
              return Ve(t), null;
          } else
            2 * je() - o.renderingStartTime > ei &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ji(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = je()),
          (t.sibling = null),
          (n = ge.current),
          se(ge, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ve(t), null);
    case 22:
    case 23:
      return (
        Pd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ut & 1073741824 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ve(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function Dx(e, t) {
  switch ((ld(t), t.tag)) {
    case 1:
      return (
        it(t.type) && Ds(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Xr(),
        ce(rt),
        ce(Ge),
        gd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return md(t), null;
    case 13:
      if (
        (ce(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        Qr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ce(ge), null;
    case 4:
      return Xr(), null;
    case 10:
      return dd(t.type._context), null;
    case 22:
    case 23:
      return Pd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Yo = !1,
  We = !1,
  $x = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function Rr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        we(e, t, r);
      }
    else n.current = null;
}
function nc(e, t, n) {
  try {
    n();
  } catch (r) {
    we(e, t, r);
  }
}
var hp = !1;
function Fx(e, t) {
  if ((($u = As), (e = Vm()), od(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            c = 0,
            d = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var h;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (h = f.firstChild) !== null;

            )
              (p = f), (f = h);
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++c === i && (l = s),
                p === o && ++d === r && (a = s),
                (h = f.nextSibling) !== null)
              )
                break;
              (f = p), (p = f.parentNode);
            }
            f = h;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Fu = { focusedElem: e, selectionRange: n }, As = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    w = v.memoizedState,
                    m = t.stateNode,
                    g = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : _t(t.type, y),
                      w
                    );
                  m.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (S) {
          we(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (v = hp), (hp = !1), v;
}
function $i(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && nc(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Sl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function rc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function F0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), F0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Vt], delete t[no], delete t[Vu], delete t[bx], delete t[jx])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function U0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function mp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || U0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ic(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = zs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ic(e, t, n), e = e.sibling; e !== null; ) ic(e, t, n), (e = e.sibling);
}
function oc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oc(e, t, n), e = e.sibling; e !== null; ) oc(e, t, n), (e = e.sibling);
}
var $e = null,
  Lt = !1;
function gn(e, t, n) {
  for (n = n.child; n !== null; ) B0(e, t, n), (n = n.sibling);
}
function B0(e, t, n) {
  if (Gt && typeof Gt.onCommitFiberUnmount == "function")
    try {
      Gt.onCommitFiberUnmount(pl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      We || Rr(n, t);
    case 6:
      var r = $e,
        i = Lt;
      ($e = null),
        gn(e, t, n),
        ($e = r),
        (Lt = i),
        $e !== null &&
          (Lt
            ? ((e = $e),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : $e.removeChild(n.stateNode));
      break;
    case 18:
      $e !== null &&
        (Lt
          ? ((e = $e),
            (n = n.stateNode),
            e.nodeType === 8
              ? Oa(e.parentNode, n)
              : e.nodeType === 1 && Oa(e, n),
            Yi(e))
          : Oa($e, n.stateNode));
      break;
    case 4:
      (r = $e),
        (i = Lt),
        ($e = n.stateNode.containerInfo),
        (Lt = !0),
        gn(e, t, n),
        ($e = r),
        (Lt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !We &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && nc(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      gn(e, t, n);
      break;
    case 1:
      if (
        !We &&
        (Rr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          we(n, t, l);
        }
      gn(e, t, n);
      break;
    case 21:
      gn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((We = (r = We) || n.memoizedState !== null), gn(e, t, n), (We = r))
        : gn(e, t, n);
      break;
    default:
      gn(e, t, n);
  }
}
function gp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new $x()),
      t.forEach(function (r) {
        var i = Jx.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ($e = l.stateNode), (Lt = !1);
              break e;
            case 3:
              ($e = l.stateNode.containerInfo), (Lt = !0);
              break e;
            case 4:
              ($e = l.stateNode.containerInfo), (Lt = !0);
              break e;
          }
          l = l.return;
        }
        if ($e === null) throw Error(N(160));
        B0(o, s, i), ($e = null), (Lt = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (c) {
        we(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) V0(t, e), (t = t.sibling);
}
function V0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ot(t, e), $t(e), r & 4)) {
        try {
          $i(3, e, e.return), Sl(3, e);
        } catch (y) {
          we(e, e.return, y);
        }
        try {
          $i(5, e, e.return);
        } catch (y) {
          we(e, e.return, y);
        }
      }
      break;
    case 1:
      Ot(t, e), $t(e), r & 512 && n !== null && Rr(n, n.return);
      break;
    case 5:
      if (
        (Ot(t, e),
        $t(e),
        r & 512 && n !== null && Rr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ki(i, "");
        } catch (y) {
          we(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && cm(i, o),
              Ou(l, s);
            var c = Ou(l, o);
            for (s = 0; s < a.length; s += 2) {
              var d = a[s],
                f = a[s + 1];
              d === "style"
                ? mm(i, f)
                : d === "dangerouslySetInnerHTML"
                ? pm(i, f)
                : d === "children"
                ? Ki(i, f)
                : Gc(i, d, f, c);
            }
            switch (l) {
              case "input":
                Eu(i, o);
                break;
              case "textarea":
                dm(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var h = o.value;
                h != null
                  ? Dr(i, !!o.multiple, h, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Dr(i, !!o.multiple, o.defaultValue, !0)
                      : Dr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[no] = o;
          } catch (y) {
            we(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Ot(t, e), $t(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (y) {
          we(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Ot(t, e), $t(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Yi(t.containerInfo);
        } catch (y) {
          we(e, e.return, y);
        }
      break;
    case 4:
      Ot(t, e), $t(e);
      break;
    case 13:
      Ot(t, e),
        $t(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (kd = je())),
        r & 4 && gp(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((We = (c = We) || d), Ot(t, e), (We = c)) : Ot(t, e),
        $t(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (D = e, d = e.child; d !== null; ) {
            for (f = D = d; D !== null; ) {
              switch (((p = D), (h = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $i(4, p, p.return);
                  break;
                case 1:
                  Rr(p, p.return);
                  var v = p.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      we(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Rr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    yp(f);
                    continue;
                  }
              }
              h !== null ? ((h.return = p), (D = h)) : yp(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (i = f.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = hm("display", s)));
              } catch (y) {
                we(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (y) {
                we(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ot(t, e), $t(e), r & 4 && gp(e);
      break;
    case 21:
      break;
    default:
      Ot(t, e), $t(e);
  }
}
function $t(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (U0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ki(i, ""), (r.flags &= -33));
          var o = mp(e);
          oc(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = mp(e);
          ic(e, l, s);
          break;
        default:
          throw Error(N(161));
      }
    } catch (a) {
      we(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ux(e, t, n) {
  (D = e), H0(e);
}
function H0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var i = D,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Yo;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || We;
        l = Yo;
        var c = We;
        if (((Yo = s), (We = a) && !c))
          for (D = i; D !== null; )
            (s = D),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? xp(i)
                : a !== null
                ? ((a.return = s), (D = a))
                : xp(i);
        for (; o !== null; ) (D = o), H0(o), (o = o.sibling);
        (D = i), (Yo = l), (We = c);
      }
      vp(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (D = o)) : vp(e);
  }
}
function vp(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              We || Sl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !We)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : _t(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && ep(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ep(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Yi(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        We || (t.flags & 512 && rc(t));
      } catch (p) {
        we(t, t.return, p);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function yp(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function xp(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Sl(4, t);
          } catch (a) {
            we(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              we(t, i, a);
            }
          }
          var o = t.return;
          try {
            rc(t);
          } catch (a) {
            we(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            rc(t);
          } catch (a) {
            we(t, s, a);
          }
      }
    } catch (a) {
      we(t, t.return, a);
    }
    if (t === e) {
      D = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (D = l);
      break;
    }
    D = t.return;
  }
}
var Bx = Math.ceil,
  qs = pn.ReactCurrentDispatcher,
  jd = pn.ReactCurrentOwner,
  bt = pn.ReactCurrentBatchConfig,
  K = 0,
  Ie = null,
  ke = null,
  Fe = 0,
  ut = 0,
  Ir = Jn(0),
  _e = 0,
  ao = null,
  pr = 0,
  bl = 0,
  Ed = 0,
  Fi = null,
  et = null,
  kd = 0,
  ei = 1 / 0,
  Xt = null,
  Js = !1,
  sc = null,
  An = null,
  Xo = !1,
  kn = null,
  Qs = 0,
  Ui = 0,
  lc = null,
  hs = -1,
  ms = 0;
function Je() {
  return K & 6 ? je() : hs !== -1 ? hs : (hs = je());
}
function Rn(e) {
  return e.mode & 1
    ? K & 2 && Fe !== 0
      ? Fe & -Fe
      : kx.transition !== null
      ? (ms === 0 && (ms = Pm()), ms)
      : ((e = ee),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Am(e.type))),
        e)
    : 1;
}
function Rt(e, t, n, r) {
  if (50 < Ui) throw ((Ui = 0), (lc = null), Error(N(185)));
  wo(e, n, r),
    (!(K & 2) || e !== Ie) &&
      (e === Ie && (!(K & 2) && (bl |= n), _e === 4 && bn(e, Fe)),
      ot(e, r),
      n === 1 && K === 0 && !(t.mode & 1) && ((ei = je() + 500), yl && Qn()));
}
function ot(e, t) {
  var n = e.callbackNode;
  ky(e, t);
  var r = Ms(e, e === Ie ? Fe : 0);
  if (r === 0)
    n !== null && Tf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Tf(n), t === 1))
      e.tag === 0 ? Ex(wp.bind(null, e)) : Zm(wp.bind(null, e)),
        wx(function () {
          !(K & 6) && Qn();
        }),
        (n = null);
    else {
      switch (Tm(r)) {
        case 1:
          n = Yc;
          break;
        case 4:
          n = km;
          break;
        case 16:
          n = Ns;
          break;
        case 536870912:
          n = Cm;
          break;
        default:
          n = Ns;
      }
      n = X0(n, W0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function W0(e, t) {
  if (((hs = -1), (ms = 0), K & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (Vr() && e.callbackNode !== n) return null;
  var r = Ms(e, e === Ie ? Fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ys(e, r);
  else {
    t = r;
    var i = K;
    K |= 2;
    var o = K0();
    (Ie !== e || Fe !== t) && ((Xt = null), (ei = je() + 500), sr(e, t));
    do
      try {
        Wx();
        break;
      } catch (l) {
        G0(e, l);
      }
    while (1);
    cd(),
      (qs.current = o),
      (K = i),
      ke !== null ? (t = 0) : ((Ie = null), (Fe = 0), (t = _e));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Au(e)), i !== 0 && ((r = i), (t = ac(e, i)))), t === 1)
    )
      throw ((n = ao), sr(e, 0), bn(e, r), ot(e, je()), n);
    if (t === 6) bn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Vx(i) &&
          ((t = Ys(e, r)),
          t === 2 && ((o = Au(e)), o !== 0 && ((r = o), (t = ac(e, o)))),
          t === 1))
      )
        throw ((n = ao), sr(e, 0), bn(e, r), ot(e, je()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Zn(e, et, Xt);
          break;
        case 3:
          if (
            (bn(e, r), (r & 130023424) === r && ((t = kd + 500 - je()), 10 < t))
          ) {
            if (Ms(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Je(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Bu(Zn.bind(null, e, et, Xt), t);
            break;
          }
          Zn(e, et, Xt);
          break;
        case 4:
          if ((bn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - At(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = je() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Bx(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Bu(Zn.bind(null, e, et, Xt), r);
            break;
          }
          Zn(e, et, Xt);
          break;
        case 5:
          Zn(e, et, Xt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return ot(e, je()), e.callbackNode === n ? W0.bind(null, e) : null;
}
function ac(e, t) {
  var n = Fi;
  return (
    e.current.memoizedState.isDehydrated && (sr(e, t).flags |= 256),
    (e = Ys(e, t)),
    e !== 2 && ((t = et), (et = n), t !== null && uc(t)),
    e
  );
}
function uc(e) {
  et === null ? (et = e) : et.push.apply(et, e);
}
function Vx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!zt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function bn(e, t) {
  for (
    t &= ~Ed,
      t &= ~bl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - At(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function wp(e) {
  if (K & 6) throw Error(N(327));
  Vr();
  var t = Ms(e, 0);
  if (!(t & 1)) return ot(e, je()), null;
  var n = Ys(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Au(e);
    r !== 0 && ((t = r), (n = ac(e, r)));
  }
  if (n === 1) throw ((n = ao), sr(e, 0), bn(e, t), ot(e, je()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Zn(e, et, Xt),
    ot(e, je()),
    null
  );
}
function Cd(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    (K = n), K === 0 && ((ei = je() + 500), yl && Qn());
  }
}
function hr(e) {
  kn !== null && kn.tag === 0 && !(K & 6) && Vr();
  var t = K;
  K |= 1;
  var n = bt.transition,
    r = ee;
  try {
    if (((bt.transition = null), (ee = 1), e)) return e();
  } finally {
    (ee = r), (bt.transition = n), (K = t), !(K & 6) && Qn();
  }
}
function Pd() {
  (ut = Ir.current), ce(Ir);
}
function sr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), xx(n)), ke !== null))
    for (n = ke.return; n !== null; ) {
      var r = n;
      switch ((ld(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ds();
          break;
        case 3:
          Xr(), ce(rt), ce(Ge), gd();
          break;
        case 5:
          md(r);
          break;
        case 4:
          Xr();
          break;
        case 13:
          ce(ge);
          break;
        case 19:
          ce(ge);
          break;
        case 10:
          dd(r.type._context);
          break;
        case 22:
        case 23:
          Pd();
      }
      n = n.return;
    }
  if (
    ((Ie = e),
    (ke = e = In(e.current, null)),
    (Fe = ut = t),
    (_e = 0),
    (ao = null),
    (Ed = bl = pr = 0),
    (et = Fi = null),
    nr !== null)
  ) {
    for (t = 0; t < nr.length; t++)
      if (((n = nr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    nr = null;
  }
  return e;
}
function G0(e, t) {
  do {
    var n = ke;
    try {
      if ((cd(), (ds.current = Ks), Gs)) {
        for (var r = ve.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Gs = !1;
      }
      if (
        ((fr = 0),
        (Me = Oe = ve = null),
        (Di = !1),
        (oo = 0),
        (jd.current = null),
        n === null || n.return === null)
      ) {
        (_e = 1), (ao = t), (ke = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = Fe),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            d = l,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = d.alternate;
            p
              ? ((d.updateQueue = p.updateQueue),
                (d.memoizedState = p.memoizedState),
                (d.lanes = p.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var h = lp(s);
          if (h !== null) {
            (h.flags &= -257),
              ap(h, s, l, o, t),
              h.mode & 1 && sp(o, c, t),
              (t = h),
              (a = c);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              sp(o, c, t), Td();
              break e;
            }
            a = Error(N(426));
          }
        } else if (pe && l.mode & 1) {
          var w = lp(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              ap(w, s, l, o, t),
              ad(Zr(a, l));
            break e;
          }
        }
        (o = a = Zr(a, l)),
          _e !== 4 && (_e = 2),
          Fi === null ? (Fi = [o]) : Fi.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = O0(o, a, t);
              Zf(o, m);
              break e;
            case 1:
              l = a;
              var g = o.type,
                x = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (An === null || !An.has(x))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = _0(o, l, t);
                Zf(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      J0(n);
    } catch (j) {
      (t = j), ke === n && n !== null && (ke = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function K0() {
  var e = qs.current;
  return (qs.current = Ks), e === null ? Ks : e;
}
function Td() {
  (_e === 0 || _e === 3 || _e === 2) && (_e = 4),
    Ie === null || (!(pr & 268435455) && !(bl & 268435455)) || bn(Ie, Fe);
}
function Ys(e, t) {
  var n = K;
  K |= 2;
  var r = K0();
  (Ie !== e || Fe !== t) && ((Xt = null), sr(e, t));
  do
    try {
      Hx();
      break;
    } catch (i) {
      G0(e, i);
    }
  while (1);
  if ((cd(), (K = n), (qs.current = r), ke !== null)) throw Error(N(261));
  return (Ie = null), (Fe = 0), _e;
}
function Hx() {
  for (; ke !== null; ) q0(ke);
}
function Wx() {
  for (; ke !== null && !gy(); ) q0(ke);
}
function q0(e) {
  var t = Y0(e.alternate, e, ut);
  (e.memoizedProps = e.pendingProps),
    t === null ? J0(e) : (ke = t),
    (jd.current = null);
}
function J0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Dx(n, t)), n !== null)) {
        (n.flags &= 32767), (ke = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (_e = 6), (ke = null);
        return;
      }
    } else if (((n = zx(n, t, ut)), n !== null)) {
      ke = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ke = t;
      return;
    }
    ke = t = e;
  } while (t !== null);
  _e === 0 && (_e = 5);
}
function Zn(e, t, n) {
  var r = ee,
    i = bt.transition;
  try {
    (bt.transition = null), (ee = 1), Gx(e, t, n, r);
  } finally {
    (bt.transition = i), (ee = r);
  }
  return null;
}
function Gx(e, t, n, r) {
  do Vr();
  while (kn !== null);
  if (K & 6) throw Error(N(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Cy(e, o),
    e === Ie && ((ke = Ie = null), (Fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Xo ||
      ((Xo = !0),
      X0(Ns, function () {
        return Vr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = bt.transition), (bt.transition = null);
    var s = ee;
    ee = 1;
    var l = K;
    (K |= 4),
      (jd.current = null),
      Fx(e, n),
      V0(n, e),
      fx(Fu),
      (As = !!$u),
      (Fu = $u = null),
      (e.current = n),
      Ux(n),
      vy(),
      (K = l),
      (ee = s),
      (bt.transition = o);
  } else e.current = n;
  if (
    (Xo && ((Xo = !1), (kn = e), (Qs = i)),
    (o = e.pendingLanes),
    o === 0 && (An = null),
    wy(n.stateNode),
    ot(e, je()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Js) throw ((Js = !1), (e = sc), (sc = null), e);
  return (
    Qs & 1 && e.tag !== 0 && Vr(),
    (o = e.pendingLanes),
    o & 1 ? (e === lc ? Ui++ : ((Ui = 0), (lc = e))) : (Ui = 0),
    Qn(),
    null
  );
}
function Vr() {
  if (kn !== null) {
    var e = Tm(Qs),
      t = bt.transition,
      n = ee;
    try {
      if (((bt.transition = null), (ee = 16 > e ? 16 : e), kn === null))
        var r = !1;
      else {
        if (((e = kn), (kn = null), (Qs = 0), K & 6)) throw Error(N(331));
        var i = K;
        for (K |= 4, D = e.current; D !== null; ) {
          var o = D,
            s = o.child;
          if (D.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var c = l[a];
                for (D = c; D !== null; ) {
                  var d = D;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $i(8, d, o);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (D = f);
                  else
                    for (; D !== null; ) {
                      d = D;
                      var p = d.sibling,
                        h = d.return;
                      if ((F0(d), d === c)) {
                        D = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = h), (D = p);
                        break;
                      }
                      D = h;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var w = y.sibling;
                    (y.sibling = null), (y = w);
                  } while (y !== null);
                }
              }
              D = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (D = s);
          else
            e: for (; D !== null; ) {
              if (((o = D), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    $i(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (D = m);
                break e;
              }
              D = o.return;
            }
        }
        var g = e.current;
        for (D = g; D !== null; ) {
          s = D;
          var x = s.child;
          if (s.subtreeFlags & 2064 && x !== null) (x.return = s), (D = x);
          else
            e: for (s = g; D !== null; ) {
              if (((l = D), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Sl(9, l);
                  }
                } catch (j) {
                  we(l, l.return, j);
                }
              if (l === s) {
                D = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (D = S);
                break e;
              }
              D = l.return;
            }
        }
        if (
          ((K = i), Qn(), Gt && typeof Gt.onPostCommitFiberRoot == "function")
        )
          try {
            Gt.onPostCommitFiberRoot(pl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ee = n), (bt.transition = t);
    }
  }
  return !1;
}
function Sp(e, t, n) {
  (t = Zr(n, t)),
    (t = O0(e, t, 1)),
    (e = Mn(e, t, 1)),
    (t = Je()),
    e !== null && (wo(e, 1, t), ot(e, t));
}
function we(e, t, n) {
  if (e.tag === 3) Sp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Sp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (An === null || !An.has(r)))
        ) {
          (e = Zr(n, e)),
            (e = _0(t, e, 1)),
            (t = Mn(t, e, 1)),
            (e = Je()),
            t !== null && (wo(t, 1, e), ot(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Kx(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Je()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ie === e &&
      (Fe & n) === n &&
      (_e === 4 || (_e === 3 && (Fe & 130023424) === Fe && 500 > je() - kd)
        ? sr(e, 0)
        : (Ed |= n)),
    ot(e, t);
}
function Q0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Bo), (Bo <<= 1), !(Bo & 130023424) && (Bo = 4194304))
      : (t = 1));
  var n = Je();
  (e = cn(e, t)), e !== null && (wo(e, t, n), ot(e, n));
}
function qx(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Q0(e, n);
}
function Jx(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), Q0(e, n);
}
var Y0;
Y0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || rt.current) tt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (tt = !1), Ix(e, t, n);
      tt = !!(e.flags & 131072);
    }
  else (tt = !1), pe && t.flags & 1048576 && e0(t, Us, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ps(e, t), (e = t.pendingProps);
      var i = Jr(t, Ge.current);
      Br(t, n), (i = yd(null, t, r, e, i, n));
      var o = xd();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            it(r) ? ((o = !0), $s(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            pd(t),
            (i.updater = xl),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ju(t, r, e, n),
            (t = Xu(null, t, r, !0, o, n)))
          : ((t.tag = 0), pe && o && sd(t), Ke(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ps(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Yx(r)),
          (e = _t(r, e)),
          i)
        ) {
          case 0:
            t = Yu(null, t, r, e, n);
            break e;
          case 1:
            t = dp(null, t, r, e, n);
            break e;
          case 11:
            t = up(null, t, r, e, n);
            break e;
          case 14:
            t = cp(null, t, r, _t(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : _t(r, i)),
        Yu(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : _t(r, i)),
        dp(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((A0(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          i0(e, t),
          Hs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Zr(Error(N(423)), t)), (t = fp(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Zr(Error(N(424)), t)), (t = fp(e, t, r, n, i));
            break e;
          } else
            for (
              dt = Nn(t.stateNode.containerInfo.firstChild),
                ft = t,
                pe = !0,
                Nt = null,
                n = a0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Qr(), r === i)) {
            t = dn(e, t, n);
            break e;
          }
          Ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        u0(t),
        e === null && Gu(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Uu(r, i) ? (s = null) : o !== null && Uu(r, o) && (t.flags |= 32),
        M0(e, t),
        Ke(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Gu(t), null;
    case 13:
      return R0(e, t, n);
    case 4:
      return (
        hd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Yr(t, null, r, n)) : Ke(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : _t(r, i)),
        up(e, t, r, i, n)
      );
    case 7:
      return Ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          se(Bs, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (zt(o.value, s)) {
            if (o.children === i.children && !rt.current) {
              t = dn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = on(-1, n & -n)), (a.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (c.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Ku(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(N(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Ku(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Ke(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Br(t, n),
        (i = Et(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ke(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = _t(r, t.pendingProps)),
        (i = _t(r.type, i)),
        cp(e, t, r, i, n)
      );
    case 15:
      return L0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : _t(r, i)),
        ps(e, t),
        (t.tag = 1),
        it(r) ? ((e = !0), $s(t)) : (e = !1),
        Br(t, n),
        s0(t, r, i),
        Ju(t, r, i, n),
        Xu(null, t, r, !0, e, n)
      );
    case 19:
      return I0(e, t, n);
    case 22:
      return N0(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function X0(e, t) {
  return Em(e, t);
}
function Qx(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function St(e, t, n, r) {
  return new Qx(e, t, n, r);
}
function Od(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Yx(e) {
  if (typeof e == "function") return Od(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === qc)) return 11;
    if (e === Jc) return 14;
  }
  return 2;
}
function In(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = St(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function gs(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Od(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Cr:
        return lr(n.children, i, o, t);
      case Kc:
        (s = 8), (i |= 8);
        break;
      case xu:
        return (
          (e = St(12, n, t, i | 2)), (e.elementType = xu), (e.lanes = o), e
        );
      case wu:
        return (e = St(13, n, t, i)), (e.elementType = wu), (e.lanes = o), e;
      case Su:
        return (e = St(19, n, t, i)), (e.elementType = Su), (e.lanes = o), e;
      case lm:
        return jl(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case om:
              s = 10;
              break e;
            case sm:
              s = 9;
              break e;
            case qc:
              s = 11;
              break e;
            case Jc:
              s = 14;
              break e;
            case xn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = St(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function lr(e, t, n, r) {
  return (e = St(7, e, r, t)), (e.lanes = n), e;
}
function jl(e, t, n, r) {
  return (
    (e = St(22, e, r, t)),
    (e.elementType = lm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function za(e, t, n) {
  return (e = St(6, e, null, t)), (e.lanes = n), e;
}
function Da(e, t, n) {
  return (
    (t = St(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Xx(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ya(0)),
    (this.expirationTimes = ya(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ya(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function _d(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new Xx(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = St(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    pd(o),
    e
  );
}
function Zx(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: kr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Z0(e) {
  if (!e) return Hn;
  e = e._reactInternals;
  e: {
    if (yr(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (it(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (it(n)) return Xm(e, n, t);
  }
  return t;
}
function eg(e, t, n, r, i, o, s, l, a) {
  return (
    (e = _d(n, r, !0, e, i, o, s, l, a)),
    (e.context = Z0(null)),
    (n = e.current),
    (r = Je()),
    (i = Rn(n)),
    (o = on(r, i)),
    (o.callback = t ?? null),
    Mn(n, o, i),
    (e.current.lanes = i),
    wo(e, i, r),
    ot(e, r),
    e
  );
}
function El(e, t, n, r) {
  var i = t.current,
    o = Je(),
    s = Rn(i);
  return (
    (n = Z0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = on(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Mn(i, t, s)),
    e !== null && (Rt(e, i, s, o), cs(e, i, s)),
    s
  );
}
function Xs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function bp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ld(e, t) {
  bp(e, t), (e = e.alternate) && bp(e, t);
}
function ew() {
  return null;
}
var tg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Nd(e) {
  this._internalRoot = e;
}
kl.prototype.render = Nd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  El(e, t, null, null);
};
kl.prototype.unmount = Nd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hr(function () {
      El(null, e, null, null);
    }),
      (t[un] = null);
  }
};
function kl(e) {
  this._internalRoot = e;
}
kl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Lm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Sn.length && t !== 0 && t < Sn[n].priority; n++);
    Sn.splice(n, 0, e), n === 0 && Mm(e);
  }
};
function Md(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Cl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function jp() {}
function tw(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = Xs(s);
        o.call(c);
      };
    }
    var s = eg(t, r, e, 0, null, !1, !1, "", jp);
    return (
      (e._reactRootContainer = s),
      (e[un] = s.current),
      eo(e.nodeType === 8 ? e.parentNode : e),
      hr(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var c = Xs(a);
      l.call(c);
    };
  }
  var a = _d(e, 0, !1, null, null, !1, !1, "", jp);
  return (
    (e._reactRootContainer = a),
    (e[un] = a.current),
    eo(e.nodeType === 8 ? e.parentNode : e),
    hr(function () {
      El(t, a, n, r);
    }),
    a
  );
}
function Pl(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = Xs(s);
        l.call(a);
      };
    }
    El(t, s, e, i);
  } else s = tw(n, t, e, i, r);
  return Xs(s);
}
Om = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Oi(t.pendingLanes);
        n !== 0 &&
          (Xc(t, n | 1), ot(t, je()), !(K & 6) && ((ei = je() + 500), Qn()));
      }
      break;
    case 13:
      hr(function () {
        var r = cn(e, 1);
        if (r !== null) {
          var i = Je();
          Rt(r, e, 1, i);
        }
      }),
        Ld(e, 1);
  }
};
Zc = function (e) {
  if (e.tag === 13) {
    var t = cn(e, 134217728);
    if (t !== null) {
      var n = Je();
      Rt(t, e, 134217728, n);
    }
    Ld(e, 134217728);
  }
};
_m = function (e) {
  if (e.tag === 13) {
    var t = Rn(e),
      n = cn(e, t);
    if (n !== null) {
      var r = Je();
      Rt(n, e, t, r);
    }
    Ld(e, t);
  }
};
Lm = function () {
  return ee;
};
Nm = function (e, t) {
  var n = ee;
  try {
    return (ee = e), t();
  } finally {
    ee = n;
  }
};
Lu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Eu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = vl(r);
            if (!i) throw Error(N(90));
            um(r), Eu(r, i);
          }
        }
      }
      break;
    case "textarea":
      dm(e, n);
      break;
    case "select":
      (t = n.value), t != null && Dr(e, !!n.multiple, t, !1);
  }
};
ym = Cd;
xm = hr;
var nw = { usingClientEntryPoint: !1, Events: [bo, _r, vl, gm, vm, Cd] },
  Ei = {
    findFiberByHostInstance: tr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  rw = {
    bundleType: Ei.bundleType,
    version: Ei.version,
    rendererPackageName: Ei.rendererPackageName,
    rendererConfig: Ei.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = bm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ei.findFiberByHostInstance || ew,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Zo.isDisabled && Zo.supportsFiber)
    try {
      (pl = Zo.inject(rw)), (Gt = Zo);
    } catch {}
}
mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nw;
mt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Md(t)) throw Error(N(200));
  return Zx(e, t, null, n);
};
mt.createRoot = function (e, t) {
  if (!Md(e)) throw Error(N(299));
  var n = !1,
    r = "",
    i = tg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = _d(e, 1, !1, null, null, n, !1, r, i)),
    (e[un] = t.current),
    eo(e.nodeType === 8 ? e.parentNode : e),
    new Nd(t)
  );
};
mt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = bm(t)), (e = e === null ? null : e.stateNode), e;
};
mt.flushSync = function (e) {
  return hr(e);
};
mt.hydrate = function (e, t, n) {
  if (!Cl(t)) throw Error(N(200));
  return Pl(null, e, t, !0, n);
};
mt.hydrateRoot = function (e, t, n) {
  if (!Md(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = tg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = eg(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[un] = t.current),
    eo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new kl(t);
};
mt.render = function (e, t, n) {
  if (!Cl(t)) throw Error(N(200));
  return Pl(null, e, t, !1, n);
};
mt.unmountComponentAtNode = function (e) {
  if (!Cl(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (hr(function () {
        Pl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[un] = null);
        });
      }),
      !0)
    : !1;
};
mt.unstable_batchedUpdates = Cd;
mt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Cl(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Pl(e, t, n, !1, r);
};
mt.version = "18.2.0-next-9e3b772b8-20220608";
function ng() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ng);
    } catch (e) {
      console.error(e);
    }
}
ng(), (em.exports = mt);
var rg = em.exports,
  Ep = rg;
(vu.createRoot = Ep.createRoot), (vu.hydrateRoot = Ep.hydrateRoot);
/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function uo() {
  return (
    (uo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    uo.apply(this, arguments)
  );
}
var Cn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Cn || (Cn = {}));
const kp = "popstate";
function iw(e) {
  e === void 0 && (e = {});
  function t(i, o) {
    let {
      pathname: s = "/",
      search: l = "",
      hash: a = "",
    } = xr(i.location.hash.substr(1));
    return cc(
      "",
      { pathname: s, search: l, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(i, o) {
    let s = i.document.querySelector("base"),
      l = "";
    if (s && s.getAttribute("href")) {
      let a = i.location.href,
        c = a.indexOf("#");
      l = c === -1 ? a : a.slice(0, c);
    }
    return l + "#" + (typeof o == "string" ? o : Zs(o));
  }
  function r(i, o) {
    Tl(
      i.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(o) +
        ")"
    );
  }
  return sw(t, n, r, e);
}
function Ce(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Tl(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ow() {
  return Math.random().toString(36).substr(2, 8);
}
function Cp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function cc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    uo(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? xr(t) : t,
      { state: n, key: (t && t.key) || r || ow() }
    )
  );
}
function Zs(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function xr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function sw(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    l = Cn.Pop,
    a = null,
    c = d();
  c == null && ((c = 0), s.replaceState(uo({}, s.state, { idx: c }), ""));
  function d() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    l = Cn.Pop;
    let w = d(),
      m = w == null ? null : w - c;
    (c = w), a && a({ action: l, location: y.location, delta: m });
  }
  function p(w, m) {
    l = Cn.Push;
    let g = cc(y.location, w, m);
    n && n(g, w), (c = d() + 1);
    let x = Cp(g, c),
      S = y.createHref(g);
    try {
      s.pushState(x, "", S);
    } catch (j) {
      if (j instanceof DOMException && j.name === "DataCloneError") throw j;
      i.location.assign(S);
    }
    o && a && a({ action: l, location: y.location, delta: 1 });
  }
  function h(w, m) {
    l = Cn.Replace;
    let g = cc(y.location, w, m);
    n && n(g, w), (c = d());
    let x = Cp(g, c),
      S = y.createHref(g);
    s.replaceState(x, "", S),
      o && a && a({ action: l, location: y.location, delta: 0 });
  }
  function v(w) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      g = typeof w == "string" ? w : Zs(w);
    return (
      Ce(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          g
      ),
      new URL(g, m)
    );
  }
  let y = {
    get action() {
      return l;
    },
    get location() {
      return e(i, s);
    },
    listen(w) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(kp, f),
        (a = w),
        () => {
          i.removeEventListener(kp, f), (a = null);
        }
      );
    },
    createHref(w) {
      return t(i, w);
    },
    createURL: v,
    encodeLocation(w) {
      let m = v(w);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: p,
    replace: h,
    go(w) {
      return s.go(w);
    },
  };
  return y;
}
var Pp;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Pp || (Pp = {}));
function lw(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? xr(t) : t,
    i = Ad(r.pathname || "/", n);
  if (i == null) return null;
  let o = ig(e);
  aw(o);
  let s = null;
  for (let l = 0; s == null && l < o.length; ++l) s = vw(o[l], ww(i));
  return s;
}
function ig(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, l) => {
    let a = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (Ce(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let c = zn([r, a.relativePath]),
      d = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (Ce(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      ig(o.children, t, d, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: mw(c, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, s) => {
      var l;
      if (o.path === "" || !((l = o.path) != null && l.includes("?"))) i(o, s);
      else for (let a of og(o.path)) i(o, s, a);
    }),
    t
  );
}
function og(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = og(r.join("/")),
    l = [];
  return (
    l.push(...s.map((a) => (a === "" ? o : [o, a].join("/")))),
    i && l.push(...s),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function aw(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : gw(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const uw = /^:\w+$/,
  cw = 3,
  dw = 2,
  fw = 1,
  pw = 10,
  hw = -2,
  Tp = (e) => e === "*";
function mw(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Tp) && (r += hw),
    t && (r += dw),
    n
      .filter((i) => !Tp(i))
      .reduce((i, o) => i + (uw.test(o) ? cw : o === "" ? fw : pw), r)
  );
}
function gw(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function vw(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let s = 0; s < n.length; ++s) {
    let l = n[s],
      a = s === n.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      d = yw(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
        c
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let f = l.route;
    o.push({
      params: r,
      pathname: zn([i, d.pathname]),
      pathnameBase: Ew(zn([i, d.pathnameBase])),
      route: f,
    }),
      d.pathnameBase !== "/" && (i = zn([i, d.pathnameBase]));
  }
  return o;
}
function yw(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = xw(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((c, d, f) => {
      if (d === "*") {
        let p = l[f] || "";
        s = o.slice(0, o.length - p.length).replace(/(.)\/+$/, "$1");
      }
      return (c[d] = Sw(l[f] || "", d)), c;
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function xw(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Tl(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (s, l) => (r.push(l), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function ww(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Tl(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Sw(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Tl(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Ad(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function bw(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? xr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : jw(n, t)) : t,
    search: kw(r),
    hash: Cw(i),
  };
}
function jw(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function $a(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function sg(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function lg(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = xr(e))
    : ((i = uo({}, e)),
      Ce(
        !i.pathname || !i.pathname.includes("?"),
        $a("?", "pathname", "search", i)
      ),
      Ce(
        !i.pathname || !i.pathname.includes("#"),
        $a("#", "pathname", "hash", i)
      ),
      Ce(!i.search || !i.search.includes("#"), $a("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    l;
  if (r || s == null) l = n;
  else {
    let f = t.length - 1;
    if (s.startsWith("..")) {
      let p = s.split("/");
      for (; p[0] === ".."; ) p.shift(), (f -= 1);
      i.pathname = p.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let a = bw(i, l),
    c = s && s !== "/" && s.endsWith("/"),
    d = (o || s === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (c || d) && (a.pathname += "/"), a;
}
const zn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Ew = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  kw = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Cw = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Pw(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const ag = ["post", "put", "patch", "delete"];
new Set(ag);
const Tw = ["get", ...ag];
new Set(Tw);
/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function el() {
  return (
    (el = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    el.apply(this, arguments)
  );
}
const Rd = b.createContext(null),
  ug = b.createContext(null),
  wr = b.createContext(null),
  Ol = b.createContext(null),
  Yn = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  cg = b.createContext(null);
function Ow(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Eo() || Ce(!1);
  let { basename: r, navigator: i } = b.useContext(wr),
    { hash: o, pathname: s, search: l } = Id(e, { relative: n }),
    a = s;
  return (
    r !== "/" && (a = s === "/" ? r : zn([r, s])),
    i.createHref({ pathname: a, search: l, hash: o })
  );
}
function Eo() {
  return b.useContext(Ol) != null;
}
function ko() {
  return Eo() || Ce(!1), b.useContext(Ol).location;
}
function dg(e) {
  b.useContext(wr).static || b.useLayoutEffect(e);
}
function Dt() {
  let { isDataRoute: e } = b.useContext(Yn);
  return e ? Bw() : _w();
}
function _w() {
  Eo() || Ce(!1);
  let e = b.useContext(Rd),
    { basename: t, navigator: n } = b.useContext(wr),
    { matches: r } = b.useContext(Yn),
    { pathname: i } = ko(),
    o = JSON.stringify(sg(r).map((a) => a.pathnameBase)),
    s = b.useRef(!1);
  return (
    dg(() => {
      s.current = !0;
    }),
    b.useCallback(
      function (a, c) {
        if ((c === void 0 && (c = {}), !s.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let d = lg(a, JSON.parse(o), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : zn([t, d.pathname])),
          (c.replace ? n.replace : n.push)(d, c.state, c);
      },
      [t, n, o, i, e]
    )
  );
}
function _l() {
  let { matches: e } = b.useContext(Yn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Id(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = b.useContext(Yn),
    { pathname: i } = ko(),
    o = JSON.stringify(sg(r).map((s) => s.pathnameBase));
  return b.useMemo(() => lg(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function Lw(e, t) {
  return Nw(e, t);
}
function Nw(e, t, n) {
  Eo() || Ce(!1);
  let { navigator: r } = b.useContext(wr),
    { matches: i } = b.useContext(Yn),
    o = i[i.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let a = ko(),
    c;
  if (t) {
    var d;
    let y = typeof t == "string" ? xr(t) : t;
    l === "/" || ((d = y.pathname) != null && d.startsWith(l)) || Ce(!1),
      (c = y);
  } else c = a;
  let f = c.pathname || "/",
    p = l === "/" ? f : f.slice(l.length) || "/",
    h = lw(e, { pathname: p }),
    v = zw(
      h &&
        h.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, s, y.params),
            pathname: zn([
              l,
              r.encodeLocation
                ? r.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? l
                : zn([
                    l,
                    r.encodeLocation
                      ? r.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && v
    ? b.createElement(
        Ol.Provider,
        {
          value: {
            location: el(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Cn.Pop,
          },
        },
        v
      )
    : v;
}
function Mw() {
  let e = Uw(),
    t = Pw(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return b.createElement(
    b.Fragment,
    null,
    b.createElement("h2", null, "Unexpected Application Error!"),
    b.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? b.createElement("pre", { style: i }, n) : null,
    o
  );
}
const Aw = b.createElement(Mw, null);
class Rw extends b.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? b.createElement(
          Yn.Provider,
          { value: this.props.routeContext },
          b.createElement(cg.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Iw(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = b.useContext(Rd);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    b.createElement(Yn.Provider, { value: t }, r)
  );
}
function zw(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    s = (r = n) == null ? void 0 : r.errors;
  if (s != null) {
    let l = o.findIndex(
      (a) => a.route.id && (s == null ? void 0 : s[a.route.id])
    );
    l >= 0 || Ce(!1), (o = o.slice(0, Math.min(o.length, l + 1)));
  }
  return o.reduceRight((l, a, c) => {
    let d = a.route.id ? (s == null ? void 0 : s[a.route.id]) : null,
      f = null;
    n && (f = a.route.errorElement || Aw);
    let p = t.concat(o.slice(0, c + 1)),
      h = () => {
        let v;
        return (
          d
            ? (v = f)
            : a.route.Component
            ? (v = b.createElement(a.route.Component, null))
            : a.route.element
            ? (v = a.route.element)
            : (v = l),
          b.createElement(Iw, {
            match: a,
            routeContext: { outlet: l, matches: p, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || c === 0)
      ? b.createElement(Rw, {
          location: n.location,
          revalidation: n.revalidation,
          component: f,
          error: d,
          children: h(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var dc;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(dc || (dc = {}));
var co;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId");
})(co || (co = {}));
function Dw(e) {
  let t = b.useContext(Rd);
  return t || Ce(!1), t;
}
function $w(e) {
  let t = b.useContext(ug);
  return t || Ce(!1), t;
}
function Fw(e) {
  let t = b.useContext(Yn);
  return t || Ce(!1), t;
}
function fg(e) {
  let t = Fw(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ce(!1), n.route.id;
}
function Uw() {
  var e;
  let t = b.useContext(cg),
    n = $w(co.UseRouteError),
    r = fg(co.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Bw() {
  let { router: e } = Dw(dc.UseNavigateStable),
    t = fg(co.UseNavigateStable),
    n = b.useRef(!1);
  return (
    dg(() => {
      n.current = !0;
    }),
    b.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, el({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function be(e) {
  Ce(!1);
}
function Vw(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Cn.Pop,
    navigator: o,
    static: s = !1,
  } = e;
  Eo() && Ce(!1);
  let l = t.replace(/^\/*/, "/"),
    a = b.useMemo(() => ({ basename: l, navigator: o, static: s }), [l, o, s]);
  typeof r == "string" && (r = xr(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: p = null,
      key: h = "default",
    } = r,
    v = b.useMemo(() => {
      let y = Ad(c, l);
      return y == null
        ? null
        : {
            location: { pathname: y, search: d, hash: f, state: p, key: h },
            navigationType: i,
          };
    }, [l, c, d, f, p, h, i]);
  return v == null
    ? null
    : b.createElement(
        wr.Provider,
        { value: a },
        b.createElement(Ol.Provider, { children: n, value: v })
      );
}
function Hw(e) {
  let { children: t, location: n } = e;
  return Lw(fc(t), n);
}
var Op;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Op || (Op = {}));
new Promise(() => {});
function fc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    b.Children.forEach(e, (r, i) => {
      if (!b.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === b.Fragment) {
        n.push.apply(n, fc(r.props.children, o));
        return;
      }
      r.type !== be && Ce(!1), !r.props.index || !r.props.children || Ce(!1);
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = fc(r.props.children, o)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function tl() {
  return (
    (tl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    tl.apply(this, arguments)
  );
}
function pg(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ww(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Gw(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Ww(e);
}
const Kw = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  qw = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ],
  Jw = "startTransition",
  _p = q1[Jw];
function Qw(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = b.useRef();
  o.current == null && (o.current = iw({ window: i, v5Compat: !0 }));
  let s = o.current,
    [l, a] = b.useState({ action: s.action, location: s.location }),
    { v7_startTransition: c } = r || {},
    d = b.useCallback(
      (f) => {
        c && _p ? _p(() => a(f)) : a(f);
      },
      [a, c]
    );
  return (
    b.useLayoutEffect(() => s.listen(d), [s, d]),
    b.createElement(Vw, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
    })
  );
}
const Yw =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Xw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Re = b.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: l,
        target: a,
        to: c,
        preventScrollReset: d,
      } = t,
      f = pg(t, Kw),
      { basename: p } = b.useContext(wr),
      h,
      v = !1;
    if (typeof c == "string" && Xw.test(c) && ((h = c), Yw))
      try {
        let g = new URL(window.location.href),
          x = c.startsWith("//") ? new URL(g.protocol + c) : new URL(c),
          S = Ad(x.pathname, p);
        x.origin === g.origin && S != null
          ? (c = S + x.search + x.hash)
          : (v = !0);
      } catch {}
    let y = Ow(c, { relative: i }),
      w = Zw(c, {
        replace: s,
        state: l,
        target: a,
        preventScrollReset: d,
        relative: i,
      });
    function m(g) {
      r && r(g), g.defaultPrevented || w(g);
    }
    return b.createElement(
      "a",
      tl({}, f, { href: h || y, onClick: v || o ? r : m, ref: n, target: a })
    );
  }),
  qe = b.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: o = "",
        end: s = !1,
        style: l,
        to: a,
        children: c,
      } = t,
      d = pg(t, qw),
      f = Id(a, { relative: d.relative }),
      p = ko(),
      h = b.useContext(ug),
      { navigator: v } = b.useContext(wr),
      y = v.encodeLocation ? v.encodeLocation(f).pathname : f.pathname,
      w = p.pathname,
      m =
        h && h.navigation && h.navigation.location
          ? h.navigation.location.pathname
          : null;
    i ||
      ((w = w.toLowerCase()),
      (m = m ? m.toLowerCase() : null),
      (y = y.toLowerCase()));
    let g = w === y || (!s && w.startsWith(y) && w.charAt(y.length) === "/"),
      x =
        m != null &&
        (m === y || (!s && m.startsWith(y) && m.charAt(y.length) === "/")),
      S = g ? r : void 0,
      j;
    typeof o == "function"
      ? (j = o({ isActive: g, isPending: x }))
      : (j = [o, g ? "active" : null, x ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let E = typeof l == "function" ? l({ isActive: g, isPending: x }) : l;
    return b.createElement(
      Re,
      tl({}, d, { "aria-current": S, className: j, ref: n, style: E, to: a }),
      typeof c == "function" ? c({ isActive: g, isPending: x }) : c
    );
  });
var Lp;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(Lp || (Lp = {}));
var Np;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Np || (Np = {}));
function Zw(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
    } = t === void 0 ? {} : t,
    l = Dt(),
    a = ko(),
    c = Id(e, { relative: s });
  return b.useCallback(
    (d) => {
      if (Gw(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : Zs(a) === Zs(c);
        l(e, { replace: f, state: i, preventScrollReset: o, relative: s });
      }
    },
    [a, l, c, r, i, n, e, o, s]
  );
}
function hg(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: e2 } = Object.prototype,
  { getPrototypeOf: zd } = Object,
  Ll = ((e) => (t) => {
    const n = e2.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Jt = (e) => ((e = e.toLowerCase()), (t) => Ll(t) === e),
  Nl = (e) => (t) => typeof t === e,
  { isArray: pi } = Array,
  fo = Nl("undefined");
function t2(e) {
  return (
    e !== null &&
    !fo(e) &&
    e.constructor !== null &&
    !fo(e.constructor) &&
    jt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const mg = Jt("ArrayBuffer");
function n2(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && mg(e.buffer)),
    t
  );
}
const r2 = Nl("string"),
  jt = Nl("function"),
  gg = Nl("number"),
  Ml = (e) => e !== null && typeof e == "object",
  i2 = (e) => e === !0 || e === !1,
  vs = (e) => {
    if (Ll(e) !== "object") return !1;
    const t = zd(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  o2 = Jt("Date"),
  s2 = Jt("File"),
  l2 = Jt("Blob"),
  a2 = Jt("FileList"),
  u2 = (e) => Ml(e) && jt(e.pipe),
  c2 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (jt(e.append) &&
          ((t = Ll(e)) === "formdata" ||
            (t === "object" &&
              jt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  d2 = Jt("URLSearchParams"),
  f2 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Co(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), pi(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = o.length;
    let l;
    for (r = 0; r < s; r++) (l = o[r]), t.call(null, e[l], l, e);
  }
}
function vg(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const yg = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  xg = (e) => !fo(e) && e !== yg;
function pc() {
  const { caseless: e } = (xg(this) && this) || {},
    t = {},
    n = (r, i) => {
      const o = (e && vg(t, i)) || i;
      vs(t[o]) && vs(r)
        ? (t[o] = pc(t[o], r))
        : vs(r)
        ? (t[o] = pc({}, r))
        : pi(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Co(arguments[r], n);
  return t;
}
const p2 = (e, t, n, { allOwnKeys: r } = {}) => (
    Co(
      t,
      (i, o) => {
        n && jt(i) ? (e[o] = hg(i, n)) : (e[o] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  h2 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  m2 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  g2 = (e, t, n, r) => {
    let i, o, s;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
        (s = i[o]), (!r || r(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0));
      e = n !== !1 && zd(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  v2 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  y2 = (e) => {
    if (!e) return null;
    if (pi(e)) return e;
    let t = e.length;
    if (!gg(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  x2 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && zd(Uint8Array)),
  w2 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const o = i.value;
      t.call(e, o[0], o[1]);
    }
  },
  S2 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  b2 = Jt("HTMLFormElement"),
  j2 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  Mp = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  E2 = Jt("RegExp"),
  wg = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Co(n, (i, o) => {
      t(i, o, e) !== !1 && (r[o] = i);
    }),
      Object.defineProperties(e, r);
  },
  k2 = (e) => {
    wg(e, (t, n) => {
      if (jt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (jt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  C2 = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((o) => {
          n[o] = !0;
        });
      };
    return pi(e) ? r(e) : r(String(e).split(t)), n;
  },
  P2 = () => {},
  T2 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Fa = "abcdefghijklmnopqrstuvwxyz",
  Ap = "0123456789",
  Sg = { DIGIT: Ap, ALPHA: Fa, ALPHA_DIGIT: Fa + Fa.toUpperCase() + Ap },
  O2 = (e = 16, t = Sg.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function _2(e) {
  return !!(
    e &&
    jt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const L2 = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (Ml(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const o = pi(r) ? [] : {};
            return (
              Co(r, (s, l) => {
                const a = n(s, i + 1);
                !fo(a) && (o[l] = a);
              }),
              (t[i] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  N2 = Jt("AsyncFunction"),
  M2 = (e) => e && (Ml(e) || jt(e)) && jt(e.then) && jt(e.catch),
  _ = {
    isArray: pi,
    isArrayBuffer: mg,
    isBuffer: t2,
    isFormData: c2,
    isArrayBufferView: n2,
    isString: r2,
    isNumber: gg,
    isBoolean: i2,
    isObject: Ml,
    isPlainObject: vs,
    isUndefined: fo,
    isDate: o2,
    isFile: s2,
    isBlob: l2,
    isRegExp: E2,
    isFunction: jt,
    isStream: u2,
    isURLSearchParams: d2,
    isTypedArray: x2,
    isFileList: a2,
    forEach: Co,
    merge: pc,
    extend: p2,
    trim: f2,
    stripBOM: h2,
    inherits: m2,
    toFlatObject: g2,
    kindOf: Ll,
    kindOfTest: Jt,
    endsWith: v2,
    toArray: y2,
    forEachEntry: w2,
    matchAll: S2,
    isHTMLForm: b2,
    hasOwnProperty: Mp,
    hasOwnProp: Mp,
    reduceDescriptors: wg,
    freezeMethods: k2,
    toObjectSet: C2,
    toCamelCase: j2,
    noop: P2,
    toFiniteNumber: T2,
    findKey: vg,
    global: yg,
    isContextDefined: xg,
    ALPHABET: Sg,
    generateString: O2,
    isSpecCompliantForm: _2,
    toJSONObject: L2,
    isAsyncFn: N2,
    isThenable: M2,
  };
function G(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
_.inherits(G, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: _.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const bg = G.prototype,
  jg = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  jg[e] = { value: e };
});
Object.defineProperties(G, jg);
Object.defineProperty(bg, "isAxiosError", { value: !0 });
G.from = (e, t, n, r, i, o) => {
  const s = Object.create(bg);
  return (
    _.toFlatObject(
      e,
      s,
      function (a) {
        return a !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    G.call(s, e.message, t, n, r, i),
    (s.cause = e),
    (s.name = e.name),
    o && Object.assign(s, o),
    s
  );
};
const A2 = null;
function hc(e) {
  return _.isPlainObject(e) || _.isArray(e);
}
function Eg(e) {
  return _.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Rp(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = Eg(i)), !n && o ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function R2(e) {
  return _.isArray(e) && !e.some(hc);
}
const I2 = _.toFlatObject(_, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Al(e, t, n) {
  if (!_.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = _.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, w) {
        return !_.isUndefined(w[y]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || d,
    o = n.dots,
    s = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && _.isSpecCompliantForm(t);
  if (!_.isFunction(i)) throw new TypeError("visitor must be a function");
  function c(v) {
    if (v === null) return "";
    if (_.isDate(v)) return v.toISOString();
    if (!a && _.isBlob(v))
      throw new G("Blob is not supported. Use a Buffer instead.");
    return _.isArrayBuffer(v) || _.isTypedArray(v)
      ? a && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function d(v, y, w) {
    let m = v;
    if (v && !w && typeof v == "object") {
      if (_.endsWith(y, "{}"))
        (y = r ? y : y.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (_.isArray(v) && R2(v)) ||
        ((_.isFileList(v) || _.endsWith(y, "[]")) && (m = _.toArray(v)))
      )
        return (
          (y = Eg(y)),
          m.forEach(function (x, S) {
            !(_.isUndefined(x) || x === null) &&
              t.append(
                s === !0 ? Rp([y], S, o) : s === null ? y : y + "[]",
                c(x)
              );
          }),
          !1
        );
    }
    return hc(v) ? !0 : (t.append(Rp(w, y, o), c(v)), !1);
  }
  const f = [],
    p = Object.assign(I2, {
      defaultVisitor: d,
      convertValue: c,
      isVisitable: hc,
    });
  function h(v, y) {
    if (!_.isUndefined(v)) {
      if (f.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      f.push(v),
        _.forEach(v, function (m, g) {
          (!(_.isUndefined(m) || m === null) &&
            i.call(t, m, _.isString(g) ? g.trim() : g, y, p)) === !0 &&
            h(m, y ? y.concat(g) : [g]);
        }),
        f.pop();
    }
  }
  if (!_.isObject(e)) throw new TypeError("data must be an object");
  return h(e), t;
}
function Ip(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Dd(e, t) {
  (this._pairs = []), e && Al(e, this, t);
}
const kg = Dd.prototype;
kg.append = function (t, n) {
  this._pairs.push([t, n]);
};
kg.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Ip);
      }
    : Ip;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function z2(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Cg(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || z2,
    i = n && n.serialize;
  let o;
  if (
    (i
      ? (o = i(t, n))
      : (o = _.isURLSearchParams(t) ? t.toString() : new Dd(t, n).toString(r)),
    o)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class D2 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    _.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const zp = D2,
  Pg = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  $2 = typeof URLSearchParams < "u" ? URLSearchParams : Dd,
  F2 = typeof FormData < "u" ? FormData : null,
  U2 = typeof Blob < "u" ? Blob : null,
  B2 = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  V2 = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  Ht = {
    isBrowser: !0,
    classes: { URLSearchParams: $2, FormData: F2, Blob: U2 },
    isStandardBrowserEnv: B2,
    isStandardBrowserWebWorkerEnv: V2,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function H2(e, t) {
  return Al(
    e,
    new Ht.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, o) {
          return Ht.isNode && _.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function W2(e) {
  return _.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function G2(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Tg(e) {
  function t(n, r, i, o) {
    let s = n[o++];
    const l = Number.isFinite(+s),
      a = o >= n.length;
    return (
      (s = !s && _.isArray(i) ? i.length : s),
      a
        ? (_.hasOwnProp(i, s) ? (i[s] = [i[s], r]) : (i[s] = r), !l)
        : ((!i[s] || !_.isObject(i[s])) && (i[s] = []),
          t(n, r, i[s], o) && _.isArray(i[s]) && (i[s] = G2(i[s])),
          !l)
    );
  }
  if (_.isFormData(e) && _.isFunction(e.entries)) {
    const n = {};
    return (
      _.forEachEntry(e, (r, i) => {
        t(W2(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
const K2 = { "Content-Type": void 0 };
function q2(e, t, n) {
  if (_.isString(e))
    try {
      return (t || JSON.parse)(e), _.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Rl = {
  transitional: Pg,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        o = _.isObject(t);
      if ((o && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t)))
        return i && i ? JSON.stringify(Tg(t)) : t;
      if (
        _.isArrayBuffer(t) ||
        _.isBuffer(t) ||
        _.isStream(t) ||
        _.isFile(t) ||
        _.isBlob(t)
      )
        return t;
      if (_.isArrayBufferView(t)) return t.buffer;
      if (_.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return H2(t, this.formSerializer).toString();
        if ((l = _.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return Al(
            l ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return o || i ? (n.setContentType("application/json", !1), q2(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Rl.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (t && _.isString(t) && ((r && !this.responseType) || i)) {
        const s = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (s)
            throw l.name === "SyntaxError"
              ? G.from(l, G.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Ht.classes.FormData, Blob: Ht.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
_.forEach(["delete", "get", "head"], function (t) {
  Rl.headers[t] = {};
});
_.forEach(["post", "put", "patch"], function (t) {
  Rl.headers[t] = _.merge(K2);
});
const $d = Rl,
  J2 = _.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Q2 = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (i = s.indexOf(":")),
              (n = s.substring(0, i).trim().toLowerCase()),
              (r = s.substring(i + 1).trim()),
              !(!n || (t[n] && J2[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Dp = Symbol("internals");
function ki(e) {
  return e && String(e).trim().toLowerCase();
}
function ys(e) {
  return e === !1 || e == null ? e : _.isArray(e) ? e.map(ys) : String(e);
}
function Y2(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const X2 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ua(e, t, n, r, i) {
  if (_.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!_.isString(t))) {
    if (_.isString(r)) return t.indexOf(r) !== -1;
    if (_.isRegExp(r)) return r.test(t);
  }
}
function Z2(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function eS(e, t) {
  const n = _.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, o, s) {
        return this[r].call(this, t, i, o, s);
      },
      configurable: !0,
    });
  });
}
class Il {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(l, a, c) {
      const d = ki(a);
      if (!d) throw new Error("header name must be a non-empty string");
      const f = _.findKey(i, d);
      (!f || i[f] === void 0 || c === !0 || (c === void 0 && i[f] !== !1)) &&
        (i[f || a] = ys(l));
    }
    const s = (l, a) => _.forEach(l, (c, d) => o(c, d, a));
    return (
      _.isPlainObject(t) || t instanceof this.constructor
        ? s(t, n)
        : _.isString(t) && (t = t.trim()) && !X2(t)
        ? s(Q2(t), n)
        : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = ki(t)), t)) {
      const r = _.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return Y2(i);
        if (_.isFunction(n)) return n.call(this, i, r);
        if (_.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = ki(t)), t)) {
      const r = _.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ua(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(s) {
      if (((s = ki(s)), s)) {
        const l = _.findKey(r, s);
        l && (!n || Ua(r, r[l], l, n)) && (delete r[l], (i = !0));
      }
    }
    return _.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Ua(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      _.forEach(this, (i, o) => {
        const s = _.findKey(r, o);
        if (s) {
          (n[s] = ys(i)), delete n[o];
          return;
        }
        const l = t ? Z2(o) : String(o).trim();
        l !== o && delete n[o], (n[l] = ys(i)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      _.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && _.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[Dp] = this[Dp] = { accessors: {} }).accessors,
      i = this.prototype;
    function o(s) {
      const l = ki(s);
      r[l] || (eS(i, s), (r[l] = !0));
    }
    return _.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Il.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
_.freezeMethods(Il.prototype);
_.freezeMethods(Il);
const sn = Il;
function Ba(e, t) {
  const n = this || $d,
    r = t || n,
    i = sn.from(r.headers);
  let o = r.data;
  return (
    _.forEach(e, function (l) {
      o = l.call(n, o, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    o
  );
}
function Og(e) {
  return !!(e && e.__CANCEL__);
}
function Po(e, t, n) {
  G.call(this, e ?? "canceled", G.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
_.inherits(Po, G, { __CANCEL__: !0 });
function tS(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new G(
          "Request failed with status code " + n.status,
          [G.ERR_BAD_REQUEST, G.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const nS = Ht.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, i, o, s, l) {
          const a = [];
          a.push(n + "=" + encodeURIComponent(r)),
            _.isNumber(i) && a.push("expires=" + new Date(i).toGMTString()),
            _.isString(o) && a.push("path=" + o),
            _.isString(s) && a.push("domain=" + s),
            l === !0 && a.push("secure"),
            (document.cookie = a.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function rS(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function iS(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function _g(e, t) {
  return e && !rS(t) ? iS(e, t) : t;
}
const oS = Ht.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function i(o) {
        let s = o;
        return (
          t && (n.setAttribute("href", s), (s = n.href)),
          n.setAttribute("href", s),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = i(window.location.href)),
        function (s) {
          const l = _.isString(s) ? i(s) : s;
          return l.protocol === r.protocol && l.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function sS(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function lS(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    o = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const c = Date.now(),
        d = r[o];
      s || (s = c), (n[i] = a), (r[i] = c);
      let f = o,
        p = 0;
      for (; f !== i; ) (p += n[f++]), (f = f % e);
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), c - s < t)) return;
      const h = d && c - d;
      return h ? Math.round((p * 1e3) / h) : void 0;
    }
  );
}
function $p(e, t) {
  let n = 0;
  const r = lS(50, 250);
  return (i) => {
    const o = i.loaded,
      s = i.lengthComputable ? i.total : void 0,
      l = o - n,
      a = r(l),
      c = o <= s;
    n = o;
    const d = {
      loaded: o,
      total: s,
      progress: s ? o / s : void 0,
      bytes: l,
      rate: a || void 0,
      estimated: a && s && c ? (s - o) / a : void 0,
      event: i,
    };
    (d[t ? "download" : "upload"] = !0), e(d);
  };
}
const aS = typeof XMLHttpRequest < "u",
  uS =
    aS &&
    function (e) {
      return new Promise(function (n, r) {
        let i = e.data;
        const o = sn.from(e.headers).normalize(),
          s = e.responseType;
        let l;
        function a() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l);
        }
        _.isFormData(i) &&
          (Ht.isStandardBrowserEnv || Ht.isStandardBrowserWebWorkerEnv
            ? o.setContentType(!1)
            : o.setContentType("multipart/form-data;", !1));
        let c = new XMLHttpRequest();
        if (e.auth) {
          const h = e.auth.username || "",
            v = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(h + ":" + v));
        }
        const d = _g(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), Cg(d, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout);
        function f() {
          if (!c) return;
          const h = sn.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            y = {
              data:
                !s || s === "text" || s === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: h,
              config: e,
              request: c,
            };
          tS(
            function (m) {
              n(m), a();
            },
            function (m) {
              r(m), a();
            },
            y
          ),
            (c = null);
        }
        if (
          ("onloadend" in c
            ? (c.onloadend = f)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(f);
              }),
          (c.onabort = function () {
            c &&
              (r(new G("Request aborted", G.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new G("Network Error", G.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let v = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const y = e.transitional || Pg;
            e.timeoutErrorMessage && (v = e.timeoutErrorMessage),
              r(
                new G(
                  v,
                  y.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED,
                  e,
                  c
                )
              ),
              (c = null);
          }),
          Ht.isStandardBrowserEnv)
        ) {
          const h =
            (e.withCredentials || oS(d)) &&
            e.xsrfCookieName &&
            nS.read(e.xsrfCookieName);
          h && o.set(e.xsrfHeaderName, h);
        }
        i === void 0 && o.setContentType(null),
          "setRequestHeader" in c &&
            _.forEach(o.toJSON(), function (v, y) {
              c.setRequestHeader(y, v);
            }),
          _.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          s && s !== "json" && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            c.addEventListener("progress", $p(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", $p(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (h) => {
              c &&
                (r(!h || h.type ? new Po(null, e, c) : h),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const p = sS(d);
        if (p && Ht.protocols.indexOf(p) === -1) {
          r(new G("Unsupported protocol " + p + ":", G.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(i || null);
      });
    },
  xs = { http: A2, xhr: uS };
_.forEach(xs, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const cS = {
  getAdapter: (e) => {
    e = _.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (
      let i = 0;
      i < t && ((n = e[i]), !(r = _.isString(n) ? xs[n.toLowerCase()] : n));
      i++
    );
    if (!r)
      throw r === !1
        ? new G(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            _.hasOwnProp(xs, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!_.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: xs,
};
function Va(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Po(null, e);
}
function Fp(e) {
  return (
    Va(e),
    (e.headers = sn.from(e.headers)),
    (e.data = Ba.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    cS
      .getAdapter(e.adapter || $d.adapter)(e)
      .then(
        function (r) {
          return (
            Va(e),
            (r.data = Ba.call(e, e.transformResponse, r)),
            (r.headers = sn.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            Og(r) ||
              (Va(e),
              r &&
                r.response &&
                ((r.response.data = Ba.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = sn.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const Up = (e) => (e instanceof sn ? e.toJSON() : e);
function ti(e, t) {
  t = t || {};
  const n = {};
  function r(c, d, f) {
    return _.isPlainObject(c) && _.isPlainObject(d)
      ? _.merge.call({ caseless: f }, c, d)
      : _.isPlainObject(d)
      ? _.merge({}, d)
      : _.isArray(d)
      ? d.slice()
      : d;
  }
  function i(c, d, f) {
    if (_.isUndefined(d)) {
      if (!_.isUndefined(c)) return r(void 0, c, f);
    } else return r(c, d, f);
  }
  function o(c, d) {
    if (!_.isUndefined(d)) return r(void 0, d);
  }
  function s(c, d) {
    if (_.isUndefined(d)) {
      if (!_.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, d);
  }
  function l(c, d, f) {
    if (f in t) return r(c, d);
    if (f in e) return r(void 0, c);
  }
  const a = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (c, d) => i(Up(c), Up(d), !0),
  };
  return (
    _.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const f = a[d] || i,
        p = f(e[d], t[d], d);
      (_.isUndefined(p) && f !== l) || (n[d] = p);
    }),
    n
  );
}
const Lg = "1.4.0",
  Fd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Fd[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Bp = {};
Fd.transitional = function (t, n, r) {
  function i(o, s) {
    return (
      "[Axios v" +
      Lg +
      "] Transitional option '" +
      o +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (o, s, l) => {
    if (t === !1)
      throw new G(
        i(s, " has been removed" + (n ? " in " + n : "")),
        G.ERR_DEPRECATED
      );
    return (
      n &&
        !Bp[s] &&
        ((Bp[s] = !0),
        console.warn(
          i(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, s, l) : !0
    );
  };
};
function dS(e, t, n) {
  if (typeof e != "object")
    throw new G("options must be an object", G.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i],
      s = t[o];
    if (s) {
      const l = e[o],
        a = l === void 0 || s(l, o, e);
      if (a !== !0)
        throw new G("option " + o + " must be " + a, G.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new G("Unknown option " + o, G.ERR_BAD_OPTION);
  }
}
const mc = { assertOptions: dS, validators: Fd },
  vn = mc.validators;
class nl {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new zp(), response: new zp() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = ti(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 &&
      mc.assertOptions(
        r,
        {
          silentJSONParsing: vn.transitional(vn.boolean),
          forcedJSONParsing: vn.transitional(vn.boolean),
          clarifyTimeoutError: vn.transitional(vn.boolean),
        },
        !1
      ),
      i != null &&
        (_.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : mc.assertOptions(
              i,
              { encode: vn.function, serialize: vn.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s;
    (s = o && _.merge(o.common, o[n.method])),
      s &&
        _.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (v) => {
            delete o[v];
          }
        ),
      (n.headers = sn.concat(s, o));
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == "function" && y.runWhen(n) === !1) ||
        ((a = a && y.synchronous), l.unshift(y.fulfilled, y.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (y) {
      c.push(y.fulfilled, y.rejected);
    });
    let d,
      f = 0,
      p;
    if (!a) {
      const v = [Fp.bind(this), void 0];
      for (
        v.unshift.apply(v, l),
          v.push.apply(v, c),
          p = v.length,
          d = Promise.resolve(n);
        f < p;

      )
        d = d.then(v[f++], v[f++]);
      return d;
    }
    p = l.length;
    let h = n;
    for (f = 0; f < p; ) {
      const v = l[f++],
        y = l[f++];
      try {
        h = v(h);
      } catch (w) {
        y.call(this, w);
        break;
      }
    }
    try {
      d = Fp.call(this, h);
    } catch (v) {
      return Promise.reject(v);
    }
    for (f = 0, p = c.length; f < p; ) d = d.then(c[f++], c[f++]);
    return d;
  }
  getUri(t) {
    t = ti(this.defaults, t);
    const n = _g(t.baseURL, t.url);
    return Cg(n, t.params, t.paramsSerializer);
  }
}
_.forEach(["delete", "get", "head", "options"], function (t) {
  nl.prototype[t] = function (n, r) {
    return this.request(
      ti(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
_.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, s, l) {
      return this.request(
        ti(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: s,
        })
      );
    };
  }
  (nl.prototype[t] = n()), (nl.prototype[t + "Form"] = n(!0));
});
const ws = nl;
class Ud {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let o;
        const s = new Promise((l) => {
          r.subscribe(l), (o = l);
        }).then(i);
        return (
          (s.cancel = function () {
            r.unsubscribe(o);
          }),
          s
        );
      }),
      t(function (o, s, l) {
        r.reason || ((r.reason = new Po(o, s, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Ud(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
const fS = Ud;
function pS(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function hS(e) {
  return _.isObject(e) && e.isAxiosError === !0;
}
const gc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(gc).forEach(([e, t]) => {
  gc[t] = e;
});
const mS = gc;
function Ng(e) {
  const t = new ws(e),
    n = hg(ws.prototype.request, t);
  return (
    _.extend(n, ws.prototype, t, { allOwnKeys: !0 }),
    _.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Ng(ti(e, i));
    }),
    n
  );
}
const Le = Ng($d);
Le.Axios = ws;
Le.CanceledError = Po;
Le.CancelToken = fS;
Le.isCancel = Og;
Le.VERSION = Lg;
Le.toFormData = Al;
Le.AxiosError = G;
Le.Cancel = Le.CanceledError;
Le.all = function (t) {
  return Promise.all(t);
};
Le.spread = pS;
Le.isAxiosError = hS;
Le.mergeConfig = ti;
Le.AxiosHeaders = sn;
Le.formToJSON = (e) => Tg(_.isHTMLForm(e) ? new FormData(e) : e);
Le.HttpStatusCode = mS;
Le.default = Le;
const To = Le;
var nt = function () {
  return (
    (nt =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    nt.apply(this, arguments)
  );
};
function po(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, o; r < i; r++)
      (o || !(r in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
  return e.concat(o || Array.prototype.slice.call(t));
}
var ue = "-ms-",
  Bi = "-moz-",
  Y = "-webkit-",
  Mg = "comm",
  zl = "rule",
  Bd = "decl",
  gS = "@import",
  Ag = "@keyframes",
  vS = "@layer",
  yS = Math.abs,
  Vd = String.fromCharCode,
  vc = Object.assign;
function xS(e, t) {
  return Ae(e, 0) ^ 45
    ? (((((((t << 2) ^ Ae(e, 0)) << 2) ^ Ae(e, 1)) << 2) ^ Ae(e, 2)) << 2) ^
        Ae(e, 3)
    : 0;
}
function Rg(e) {
  return e.trim();
}
function Zt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function B(e, t, n) {
  return e.replace(t, n);
}
function Ss(e, t) {
  return e.indexOf(t);
}
function Ae(e, t) {
  return e.charCodeAt(t) | 0;
}
function ni(e, t, n) {
  return e.slice(t, n);
}
function Bt(e) {
  return e.length;
}
function Ig(e) {
  return e.length;
}
function Li(e, t) {
  return t.push(e), e;
}
function wS(e, t) {
  return e.map(t).join("");
}
function Vp(e, t) {
  return e.filter(function (n) {
    return !Zt(n, t);
  });
}
var Dl = 1,
  ri = 1,
  zg = 0,
  Ct = 0,
  Ee = 0,
  hi = "";
function $l(e, t, n, r, i, o, s, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: Dl,
    column: ri,
    length: s,
    return: "",
    siblings: l,
  };
}
function yn(e, t) {
  return vc(
    $l("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function Er(e) {
  for (; e.root; ) e = yn(e.root, { children: [e] });
  Li(e, e.siblings);
}
function SS() {
  return Ee;
}
function bS() {
  return (
    (Ee = Ct > 0 ? Ae(hi, --Ct) : 0), ri--, Ee === 10 && ((ri = 1), Dl--), Ee
  );
}
function It() {
  return (
    (Ee = Ct < zg ? Ae(hi, Ct++) : 0), ri++, Ee === 10 && ((ri = 1), Dl++), Ee
  );
}
function ar() {
  return Ae(hi, Ct);
}
function bs() {
  return Ct;
}
function Fl(e, t) {
  return ni(hi, e, t);
}
function yc(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function jS(e) {
  return (Dl = ri = 1), (zg = Bt((hi = e))), (Ct = 0), [];
}
function ES(e) {
  return (hi = ""), e;
}
function Ha(e) {
  return Rg(Fl(Ct - 1, xc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function kS(e) {
  for (; (Ee = ar()) && Ee < 33; ) It();
  return yc(e) > 2 || yc(Ee) > 3 ? "" : " ";
}
function CS(e, t) {
  for (
    ;
    --t &&
    It() &&
    !(Ee < 48 || Ee > 102 || (Ee > 57 && Ee < 65) || (Ee > 70 && Ee < 97));

  );
  return Fl(e, bs() + (t < 6 && ar() == 32 && It() == 32));
}
function xc(e) {
  for (; It(); )
    switch (Ee) {
      case e:
        return Ct;
      case 34:
      case 39:
        e !== 34 && e !== 39 && xc(Ee);
        break;
      case 40:
        e === 41 && xc(e);
        break;
      case 92:
        It();
        break;
    }
  return Ct;
}
function PS(e, t) {
  for (; It() && e + Ee !== 47 + 10; )
    if (e + Ee === 42 + 42 && ar() === 47) break;
  return "/*" + Fl(t, Ct - 1) + "*" + Vd(e === 47 ? e : It());
}
function TS(e) {
  for (; !yc(ar()); ) It();
  return Fl(e, Ct);
}
function OS(e) {
  return ES(js("", null, null, null, [""], (e = jS(e)), 0, [0], e));
}
function js(e, t, n, r, i, o, s, l, a) {
  for (
    var c = 0,
      d = 0,
      f = s,
      p = 0,
      h = 0,
      v = 0,
      y = 1,
      w = 1,
      m = 1,
      g = 0,
      x = "",
      S = i,
      j = o,
      E = r,
      k = x;
    w;

  )
    switch (((v = g), (g = It()))) {
      case 40:
        if (v != 108 && Ae(k, f - 1) == 58) {
          Ss((k += B(Ha(g), "&", "&\f")), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Ha(g);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += kS(v);
        break;
      case 92:
        k += CS(bs() - 1, 7);
        continue;
      case 47:
        switch (ar()) {
          case 42:
          case 47:
            Li(_S(PS(It(), bs()), t, n, a), a);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * y:
        l[c++] = Bt(k) * m;
      case 125 * y:
      case 59:
      case 0:
        switch (g) {
          case 0:
          case 125:
            w = 0;
          case 59 + d:
            m == -1 && (k = B(k, /\f/g, "")),
              h > 0 &&
                Bt(k) - f &&
                Li(
                  h > 32
                    ? Wp(k + ";", r, n, f - 1, a)
                    : Wp(B(k, " ", "") + ";", r, n, f - 2, a),
                  a
                );
            break;
          case 59:
            k += ";";
          default:
            if (
              (Li(
                (E = Hp(k, t, n, c, d, i, l, x, (S = []), (j = []), f, o)),
                o
              ),
              g === 123)
            )
              if (d === 0) js(k, t, E, E, S, o, f, l, j);
              else
                switch (p === 99 && Ae(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    js(
                      e,
                      E,
                      E,
                      r && Li(Hp(e, E, E, 0, 0, i, l, x, i, (S = []), f, j), j),
                      i,
                      j,
                      f,
                      l,
                      r ? S : j
                    );
                    break;
                  default:
                    js(k, E, E, E, [""], j, 0, l, j);
                }
        }
        (c = d = h = 0), (y = m = 1), (x = k = ""), (f = s);
        break;
      case 58:
        (f = 1 + Bt(k)), (h = v);
      default:
        if (y < 1) {
          if (g == 123) --y;
          else if (g == 125 && y++ == 0 && bS() == 125) continue;
        }
        switch (((k += Vd(g)), g * y)) {
          case 38:
            m = d > 0 ? 1 : ((k += "\f"), -1);
            break;
          case 44:
            (l[c++] = (Bt(k) - 1) * m), (m = 1);
            break;
          case 64:
            ar() === 45 && (k += Ha(It())),
              (p = ar()),
              (d = f = Bt((x = k += TS(bs())))),
              g++;
            break;
          case 45:
            v === 45 && Bt(k) == 2 && (y = 0);
        }
    }
  return o;
}
function Hp(e, t, n, r, i, o, s, l, a, c, d, f) {
  for (
    var p = i - 1, h = i === 0 ? o : [""], v = Ig(h), y = 0, w = 0, m = 0;
    y < r;
    ++y
  )
    for (var g = 0, x = ni(e, p + 1, (p = yS((w = s[y])))), S = e; g < v; ++g)
      (S = Rg(w > 0 ? h[g] + " " + x : B(x, /&\f/g, h[g]))) && (a[m++] = S);
  return $l(e, t, n, i === 0 ? zl : l, a, c, d, f);
}
function _S(e, t, n, r) {
  return $l(e, t, n, Mg, Vd(SS()), ni(e, 2, -2), 0, r);
}
function Wp(e, t, n, r, i) {
  return $l(e, t, n, Bd, ni(e, 0, r), ni(e, r + 1, -1), r, i);
}
function Dg(e, t, n) {
  switch (xS(e, t)) {
    case 5103:
      return Y + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Y + e + e;
    case 4789:
      return Bi + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Y + e + Bi + e + ue + e + e;
    case 5936:
      switch (Ae(e, t + 11)) {
        case 114:
          return Y + e + ue + B(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Y + e + ue + B(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Y + e + ue + B(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return Y + e + ue + e + e;
    case 6165:
      return Y + e + ue + "flex-" + e + e;
    case 5187:
      return (
        Y + e + B(e, /(\w+).+(:[^]+)/, Y + "box-$1$2" + ue + "flex-$1$2") + e
      );
    case 5443:
      return (
        Y +
        e +
        ue +
        "flex-item-" +
        B(e, /flex-|-self/g, "") +
        (Zt(e, /flex-|baseline/)
          ? ""
          : ue + "grid-row-" + B(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        Y +
        e +
        ue +
        "flex-line-pack" +
        B(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return Y + e + ue + B(e, "shrink", "negative") + e;
    case 5292:
      return Y + e + ue + B(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Y +
        "box-" +
        B(e, "-grow", "") +
        Y +
        e +
        ue +
        B(e, "grow", "positive") +
        e
      );
    case 4554:
      return Y + B(e, /([^-])(transform)/g, "$1" + Y + "$2") + e;
    case 6187:
      return (
        B(B(B(e, /(zoom-|grab)/, Y + "$1"), /(image-set)/, Y + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return B(e, /(image-set\([^]*)/, Y + "$1$`$1");
    case 4968:
      return (
        B(
          B(e, /(.+:)(flex-)?(.*)/, Y + "box-pack:$3" + ue + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Y +
        e +
        e
      );
    case 4200:
      if (!Zt(e, /flex-|baseline/))
        return ue + "grid-column-align" + ni(e, t) + e;
      break;
    case 2592:
    case 3360:
      return ue + B(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, i) {
          return (t = i), Zt(r.props, /grid-\w+-end/);
        })
        ? ~Ss(e + (n = n[t].value), "span")
          ? e
          : ue +
            B(e, "-start", "") +
            e +
            ue +
            "grid-row-span:" +
            (~Ss(n, "span") ? Zt(n, /\d+/) : +Zt(n, /\d+/) - +Zt(e, /\d+/)) +
            ";"
        : ue + B(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return Zt(r.props, /grid-\w+-start/);
        })
        ? e
        : ue + B(B(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return B(e, /(.+)-inline(.+)/, Y + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Bt(e) - 1 - t > 6)
        switch (Ae(e, t + 1)) {
          case 109:
            if (Ae(e, t + 4) !== 45) break;
          case 102:
            return (
              B(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Y +
                  "$2-$3$1" +
                  Bi +
                  (Ae(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Ss(e, "stretch")
              ? Dg(B(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return B(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, i, o, s, l, a, c) {
          return (
            ue +
            i +
            ":" +
            o +
            c +
            (s ? ue + i + "-span:" + (l ? a : +a - +o) + c : "") +
            e
          );
        }
      );
    case 4949:
      if (Ae(e, t + 6) === 121) return B(e, ":", ":" + Y) + e;
      break;
    case 6444:
      switch (Ae(e, Ae(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            B(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                Y +
                (Ae(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Y +
                "$2$3$1" +
                ue +
                "$2box$3"
            ) + e
          );
        case 100:
          return B(e, ":", ":" + ue) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return B(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function rl(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function LS(e, t, n, r) {
  switch (e.type) {
    case vS:
      if (e.children.length) break;
    case gS:
    case Bd:
      return (e.return = e.return || e.value);
    case Mg:
      return "";
    case Ag:
      return (e.return = e.value + "{" + rl(e.children, r) + "}");
    case zl:
      if (!Bt((e.value = e.props.join(",")))) return "";
  }
  return Bt((n = rl(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function NS(e) {
  var t = Ig(e);
  return function (n, r, i, o) {
    for (var s = "", l = 0; l < t; l++) s += e[l](n, r, i, o) || "";
    return s;
  };
}
function MS(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function AS(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Bd:
        e.return = Dg(e.value, e.length, n);
        return;
      case Ag:
        return rl([yn(e, { value: B(e.value, "@", "@" + Y) })], r);
      case zl:
        if (e.length)
          return wS((n = e.props), function (i) {
            switch (Zt(i, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Er(yn(e, { props: [B(i, /:(read-\w+)/, ":" + Bi + "$1")] })),
                  Er(yn(e, { props: [i] })),
                  vc(e, { props: Vp(n, r) });
                break;
              case "::placeholder":
                Er(
                  yn(e, { props: [B(i, /:(plac\w+)/, ":" + Y + "input-$1")] })
                ),
                  Er(yn(e, { props: [B(i, /:(plac\w+)/, ":" + Bi + "$1")] })),
                  Er(yn(e, { props: [B(i, /:(plac\w+)/, ue + "input-$1")] })),
                  Er(yn(e, { props: [i] })),
                  vc(e, { props: Vp(n, r) });
                break;
            }
            return "";
          });
    }
}
var RS = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  ii =
    (typeof process < "u" &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    "data-styled",
  Hd = typeof window < "u" && "HTMLElement" in window,
  IS = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      {}.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== "" &&
      {}.SC_DISABLE_SPEEDY !== "false" &&
      {}.SC_DISABLE_SPEEDY),
  Ul = Object.freeze([]),
  oi = Object.freeze({});
function zS(e, t, n) {
  return (
    n === void 0 && (n = oi), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var $g = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  DS = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  $S = /(^-|-$)/g;
function Gp(e) {
  return e.replace(DS, "-").replace($S, "");
}
var FS = /(a)(d)/gi,
  Kp = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function wc(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Kp(t % 52) + n;
  return (Kp(t % 52) + n).replace(FS, "$1-$2");
}
var Wa,
  zr = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  Fg = function (e) {
    return zr(5381, e);
  };
function Ug(e) {
  return wc(Fg(e) >>> 0);
}
function US(e) {
  return e.displayName || e.name || "Component";
}
function Ga(e) {
  return typeof e == "string" && !0;
}
var Bg = typeof Symbol == "function" && Symbol.for,
  Vg = Bg ? Symbol.for("react.memo") : 60115,
  BS = Bg ? Symbol.for("react.forward_ref") : 60112,
  VS = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  HS = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Hg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  WS =
    (((Wa = {})[BS] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Wa[Vg] = Hg),
    Wa);
function qp(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Vg
    ? Hg
    : "$$typeof" in e
    ? WS[e.$$typeof]
    : VS;
  var t;
}
var GS = Object.defineProperty,
  KS = Object.getOwnPropertyNames,
  Jp = Object.getOwnPropertySymbols,
  qS = Object.getOwnPropertyDescriptor,
  JS = Object.getPrototypeOf,
  Qp = Object.prototype;
function Wg(e, t, n) {
  if (typeof t != "string") {
    if (Qp) {
      var r = JS(t);
      r && r !== Qp && Wg(e, r, n);
    }
    var i = KS(t);
    Jp && (i = i.concat(Jp(t)));
    for (var o = qp(e), s = qp(t), l = 0; l < i.length; ++l) {
      var a = i[l];
      if (!(a in HS || (n && n[a]) || (s && a in s) || (o && a in o))) {
        var c = qS(t, a);
        try {
          GS(e, a, c);
        } catch {}
      }
    }
  }
  return e;
}
function si(e) {
  return typeof e == "function";
}
function Wd(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ir(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Sc(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
  return n;
}
function ho(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function bc(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !ho(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = bc(e[r], t[r]);
  else if (ho(t)) for (var r in t) e[r] = bc(e[r], t[r]);
  return e;
}
function Gd(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function Oo(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var QS = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, i = r.length, o = i; t >= o; )
            if ((o <<= 1) < 0) throw Oo(16, "".concat(t));
          (this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(r),
            (this.length = o);
          for (var s = i; s < o; s++) this.groupSizes[s] = 0;
        }
        for (
          var l = this.indexOfGroup(t + 1), a = ((s = 0), n.length);
          s < a;
          s++
        )
          this.tag.insertRule(l, n[s]) && (this.groupSizes[t]++, l++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            i = r + n;
          this.groupSizes[t] = 0;
          for (var o = r; o < i; o++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            i = this.indexOfGroup(t),
            o = i + r,
            s = i;
          s < o;
          s++
        )
          n += "".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);
        return n;
      }),
      e
    );
  })(),
  Es = new Map(),
  il = new Map(),
  Ka = 1,
  es = function (e) {
    if (Es.has(e)) return Es.get(e);
    for (; il.has(Ka); ) Ka++;
    var t = Ka++;
    return Es.set(e, t), il.set(t, e), t;
  },
  YS = function (e, t) {
    Es.set(e, t), il.set(t, e);
  },
  XS = "style["
    .concat(ii, "][")
    .concat("data-styled-version", '="')
    .concat("6.0.3", '"]'),
  ZS = new RegExp(
    "^".concat(ii, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  eb = function (e, t, n) {
    for (var r, i = n.split(","), o = 0, s = i.length; o < s; o++)
      (r = i[o]) && e.registerName(t, r);
  },
  tb = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "")
          .split(`/*!sc*/
`),
        i = [],
        o = 0,
        s = r.length;
      o < s;
      o++
    ) {
      var l = r[o].trim();
      if (l) {
        var a = l.match(ZS);
        if (a) {
          var c = 0 | parseInt(a[1], 10),
            d = a[2];
          c !== 0 && (YS(d, c), eb(e, d, a[3]), e.getTag().insertRules(c, i)),
            (i.length = 0);
        } else i.push(l);
      }
    }
  };
function nb() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Gg = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      i = (function (l) {
        var a = Array.from(l.querySelectorAll("style[".concat(ii, "]")));
        return a[a.length - 1];
      })(n),
      o = i !== void 0 ? i.nextSibling : null;
    r.setAttribute(ii, "active"),
      r.setAttribute("data-styled-version", "6.0.3");
    var s = nb();
    return s && r.setAttribute("nonce", s), n.insertBefore(r, o), r;
  },
  rb = (function () {
    function e(t) {
      (this.element = Gg(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, i = 0, o = r.length; i < o; i++) {
            var s = r[i];
            if (s.ownerNode === n) return s;
          }
          throw Oo(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  ib = (function () {
    function e(t) {
      (this.element = Gg(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  ob = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  Yp = Hd,
  sb = { isServer: !Hd, useCSSOMInjection: !IS },
  Kg = (function () {
    function e(t, n, r) {
      t === void 0 && (t = oi), n === void 0 && (n = {});
      var i = this;
      (this.options = nt(nt({}, sb), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          Hd &&
          Yp &&
          ((Yp = !1),
          (function (o) {
            for (
              var s = document.querySelectorAll(XS), l = 0, a = s.length;
              l < a;
              l++
            ) {
              var c = s[l];
              c &&
                c.getAttribute(ii) !== "active" &&
                (tb(o, c), c.parentNode && c.parentNode.removeChild(c));
            }
          })(this)),
        Gd(this, function () {
          return (function (o) {
            for (
              var s = o.getTag(),
                l = s.length,
                a = "",
                c = function (f) {
                  var p = (function (m) {
                    return il.get(m);
                  })(f);
                  if (p === void 0) return "continue";
                  var h = o.names.get(p),
                    v = s.getGroup(f);
                  if (h === void 0 || v.length === 0) return "continue";
                  var y = ""
                      .concat(ii, ".g")
                      .concat(f, '[id="')
                      .concat(p, '"]'),
                    w = "";
                  h !== void 0 &&
                    h.forEach(function (m) {
                      m.length > 0 && (w += "".concat(m, ","));
                    }),
                    (a += "".concat(v).concat(y, '{content:"').concat(w, '"}')
                      .concat(`/*!sc*/
`));
                },
                d = 0;
              d < l;
              d++
            )
              c(d);
            return a;
          })(i);
        });
    }
    return (
      (e.registerId = function (t) {
        return es(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            nt(nt({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                i = n.target;
              return n.isServer ? new ob(i) : r ? new rb(i) : new ib(i);
            })(this.options)),
            new QS(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((es(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(es(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(es(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  lb = /&/g,
  ab = /^\s*\/\/.*$/gm;
function qg(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = qg(n.children, t)),
      n
    );
  });
}
function ub(e) {
  var t,
    n,
    r,
    i = e === void 0 ? oi : e,
    o = i.options,
    s = o === void 0 ? oi : o,
    l = i.plugins,
    a = l === void 0 ? Ul : l,
    c = function (p, h, v) {
      return v === n ||
        (v.startsWith(n) && v.endsWith(n) && v.replaceAll(n, "").length > 0)
        ? ".".concat(t)
        : p;
    },
    d = a.slice();
  d.push(function (p) {
    p.type === zl &&
      p.value.includes("&") &&
      (p.props[0] = p.props[0].replace(lb, n).replace(r, c));
  }),
    s.prefix && d.push(AS),
    d.push(LS);
  var f = function (p, h, v, y) {
    h === void 0 && (h = ""),
      v === void 0 && (v = ""),
      y === void 0 && (y = "&"),
      (t = y),
      (n = h),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var w = p.replace(ab, ""),
      m = OS(v || h ? "".concat(v, " ").concat(h, " { ").concat(w, " }") : w);
    s.namespace && (m = qg(m, s.namespace));
    var g = [];
    return (
      rl(
        m,
        NS(
          d.concat(
            MS(function (x) {
              return g.push(x);
            })
          )
        )
      ),
      g
    );
  };
  return (
    (f.hash = a.length
      ? a
          .reduce(function (p, h) {
            return h.name || Oo(15), zr(p, h.name);
          }, 5381)
          .toString()
      : ""),
    f
  );
}
var cb = new Kg(),
  jc = ub(),
  Jg = A.createContext({
    shouldForwardProp: void 0,
    styleSheet: cb,
    stylis: jc,
  });
Jg.Consumer;
A.createContext(void 0);
function Xp() {
  return b.useContext(Jg);
}
var Qg = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (i, o) {
        o === void 0 && (o = jc);
        var s = r.name + o.hash;
        i.hasNameForId(r.id, s) ||
          i.insertRules(r.id, s, o(r.rules, s, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        Gd(this, function () {
          throw Oo(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = jc), this.name + t.hash;
      }),
      e
    );
  })(),
  db = function (e) {
    return e >= "A" && e <= "Z";
  };
function Zp(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    db(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Yg = function (e) {
    return e == null || e === !1 || e === "";
  },
  Xg = function (e) {
    var t,
      n,
      r = [];
    for (var i in e) {
      var o = e[i];
      e.hasOwnProperty(i) &&
        !Yg(o) &&
        ((Array.isArray(o) && o.isCss) || si(o)
          ? r.push("".concat(Zp(i), ":"), o, ";")
          : ho(o)
          ? r.push.apply(r, po(po(["".concat(i, " {")], Xg(o), !1), ["}"], !1))
          : r.push(
              ""
                .concat(Zp(i), ": ")
                .concat(
                  ((t = i),
                  (n = o) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in RS ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function ur(e, t, n, r) {
  if (Yg(e)) return [];
  if (Wd(e)) return [".".concat(e.styledComponentId)];
  if (si(e)) {
    if (!si((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t)
      return [e];
    var i = e(t);
    return ur(i, t, n, r);
  }
  var o;
  return e instanceof Qg
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : ho(e)
    ? Xg(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        Ul,
        e.map(function (s) {
          return ur(s, t, n, r);
        })
      )
    : [e.toString()];
}
function fb(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (si(n) && !Wd(n)) return !1;
  }
  return !0;
}
var pb = Fg("6.0.3"),
  hb = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && fb(t)),
        (this.componentId = n),
        (this.baseHash = zr(pb, n)),
        (this.baseStyle = r),
        Kg.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var i = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            i = ir(i, this.staticRulesId);
          else {
            var o = Sc(ur(this.rules, t, n, r)),
              s = wc(zr(this.baseHash, o) >>> 0);
            if (!n.hasNameForId(this.componentId, s)) {
              var l = r(o, ".".concat(s), void 0, this.componentId);
              n.insertRules(this.componentId, s, l);
            }
            (i = ir(i, s)), (this.staticRulesId = s);
          }
        else {
          for (
            var a = zr(this.baseHash, r.hash), c = "", d = 0;
            d < this.rules.length;
            d++
          ) {
            var f = this.rules[d];
            if (typeof f == "string") c += f;
            else if (f) {
              var p = Sc(ur(f, t, n, r));
              (a = zr(a, p)), (c += p);
            }
          }
          if (c) {
            var h = wc(a >>> 0);
            n.hasNameForId(this.componentId, h) ||
              n.insertRules(
                this.componentId,
                h,
                r(c, ".".concat(h), void 0, this.componentId)
              ),
              (i = ir(i, h));
          }
        }
        return i;
      }),
      e
    );
  })(),
  Zg = A.createContext(void 0);
Zg.Consumer;
var qa = {};
function mb(e, t, n) {
  var r = Wd(e),
    i = e,
    o = !Ga(e),
    s = t.attrs,
    l = s === void 0 ? Ul : s,
    a = t.componentId,
    c =
      a === void 0
        ? (function (x, S) {
            var j = typeof x != "string" ? "sc" : Gp(x);
            qa[j] = (qa[j] || 0) + 1;
            var E = "".concat(j, "-").concat(Ug("6.0.3" + j + qa[j]));
            return S ? "".concat(S, "-").concat(E) : E;
          })(t.displayName, t.parentComponentId)
        : a,
    d = t.displayName;
  d === void 0 &&
    (function (x) {
      return Ga(x) ? "styled.".concat(x) : "Styled(".concat(US(x), ")");
    })(e);
  var f =
      t.displayName && t.componentId
        ? "".concat(Gp(t.displayName), "-").concat(t.componentId)
        : t.componentId || c,
    p = r && i.attrs ? i.attrs.concat(l).filter(Boolean) : l,
    h = t.shouldForwardProp;
  if (r && i.shouldForwardProp) {
    var v = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var y = t.shouldForwardProp;
      h = function (x, S) {
        return v(x, S) && y(x, S);
      };
    } else h = v;
  }
  var w = new hb(n, f, r ? i.componentStyle : void 0);
  function m(x, S) {
    return (function (j, E, k) {
      var T = j.attrs,
        O = j.componentStyle,
        L = j.defaultProps,
        C = j.foldedComponentIds,
        P = j.styledComponentId,
        M = j.target,
        $ = A.useContext(Zg),
        q = Xp(),
        ie = j.shouldForwardProp || q.shouldForwardProp,
        Z = (function (xe, oe, Pe) {
          for (
            var de,
              Q = nt(nt({}, oe), { className: void 0, theme: Pe }),
              he = 0;
            he < xe.length;
            he += 1
          ) {
            var Ne = si((de = xe[he])) ? de(Q) : de;
            for (var De in Ne)
              Q[De] =
                De === "className"
                  ? ir(Q[De], Ne[De])
                  : De === "style"
                  ? nt(nt({}, Q[De]), Ne[De])
                  : Ne[De];
          }
          return (
            oe.className && (Q.className = ir(Q.className, oe.className)), Q
          );
        })(T, E, zS(E, $, L) || oi),
        R = Z.as || M,
        I = {};
      for (var z in Z)
        Z[z] === void 0 ||
          z[0] === "$" ||
          z === "as" ||
          z === "theme" ||
          (z === "forwardedAs"
            ? (I.as = Z.forwardedAs)
            : (ie && !ie(z, R)) || (I[z] = Z[z]));
      var H = (function (xe, oe) {
          var Pe = Xp(),
            de = xe.generateAndInjectStyles(oe, Pe.styleSheet, Pe.stylis);
          return de;
        })(O, Z),
        J = ir(C, P);
      return (
        H && (J += " " + H),
        Z.className && (J += " " + Z.className),
        (I[Ga(R) && !$g.has(R) ? "class" : "className"] = J),
        (I.ref = k),
        b.createElement(R, I)
      );
    })(g, x, S);
  }
  var g = A.forwardRef(m);
  return (
    (g.attrs = p),
    (g.componentStyle = w),
    (g.shouldForwardProp = h),
    (g.foldedComponentIds = r
      ? ir(i.foldedComponentIds, i.styledComponentId)
      : ""),
    (g.styledComponentId = f),
    (g.target = r ? i.target : e),
    Object.defineProperty(g, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (x) {
        this._foldedDefaultProps = r
          ? (function (S) {
              for (var j = [], E = 1; E < arguments.length; E++)
                j[E - 1] = arguments[E];
              for (var k = 0, T = j; k < T.length; k++) bc(S, T[k], !0);
              return S;
            })({}, i.defaultProps, x)
          : x;
      },
    }),
    Gd(g, function () {
      return ".".concat(g.styledComponentId);
    }),
    o &&
      Wg(g, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    g
  );
}
function eh(e, t) {
  for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var th = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function ev(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (si(e) || ho(e)) {
    var r = e;
    return th(ur(eh(Ul, po([r], t, !0))));
  }
  var i = e;
  return t.length === 0 && i.length === 1 && typeof i[0] == "string"
    ? ur(i)
    : th(ur(eh(i, t)));
}
function Ec(e, t, n) {
  if ((n === void 0 && (n = oi), !t)) throw Oo(1, t);
  var r = function (i) {
    for (var o = [], s = 1; s < arguments.length; s++) o[s - 1] = arguments[s];
    return e(t, n, ev.apply(void 0, po([i], o, !1)));
  };
  return (
    (r.attrs = function (i) {
      return Ec(
        e,
        t,
        nt(nt({}, n), {
          attrs: Array.prototype.concat(n.attrs, i).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (i) {
      return Ec(e, t, nt(nt({}, n), i));
    }),
    r
  );
}
var tv = function (e) {
    return Ec(mb, e);
  },
  W = tv;
$g.forEach(function (e) {
  W[e] = tv(e);
});
function nv(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = Sc(ev.apply(void 0, po([e], t, !1))),
    i = Ug(r);
  return new Qg(i, r);
}
const Xe = W.div`
  display: block;
  margin-bottom:100px ;
  margin-left: 250px;
  @media (max-width: 1400px) {
    margin-left: 70px;
  }
  background-color: #000000;
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 25px;
    font-weight: 700;
  }
  color: white;
  div div span {
    cursor: pointer;
  }
`,
  gb = W.div`
  background-color: #000000;
  border-right: 1px solid #1a1a1a;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  @media (max-width: 1400px) {
    width: 70px;
    font-size: 30px;
  }
  .big{
    width: 70%;
  }
  .small{
    width: 100%;
  }
  font-size: 20px;
  a {
    color: white;
    font-size: 20px;
  }
  hr {
    color: #1a1a1a;
  }
  .on {
    color: #ede837;
  }
  padding: 25px;
  box-sizing: border-box;
  input {
    height: 30px;
    background-color: #1a1a1a;
    color: white;
    border: 1px solid #1a1a1a;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box;

    &:focus {
      border: 1px solid #043e69;
    }
  }
  .logoutbit{
      color: white;
      padding: 0 20px;
      border: none;
      border-radius: 5px;
      height: 25px;
      /* text-align: center; */
      margin-right: 10px;
      line-height: 25px;
      font-size: 16px;
      cursor: pointer;
      background-color: #1a1a1a;
      margin: auto;
      width: 100%;
      @media (max-width: 1400px) {
    padding: 0;
  }
    }
  ul {
    li {
      cursor: pointer;

      button {
        border: none;
        background-color: transparent;
        font-size: 20px;
        color: #fff;
        font-weight: 700;
        padding: 0;
      }
    }
  }
`,
  vb = W.div`
  position: fixed;
  background-color: #191919;
  color: white;
  width: 100%;
  height: 100px;
  bottom: 0;
  left: 0;
  z-index: 15;
  padding: 20px 0 0 600px;
  .inst {
    position: absolute;
    left: 280px;
    top: 35px;
    width: 180px;
    display: flex;
    align-items: center;
    img {
      height: 50px;
    }
    span {
      font-size: 20px;
      font-weight: 700;
      padding-left: 20px;
      position: absolute;
    }
    @media (max-width: 1400px) {
      left: 100px;
    }
  }
  div {
    z-index: 50;
    width: 100%;
    background-color: #191919;
    .rhap_container {
      width: 24%;
      z-index: 16;
      .rhap_volume-bar {
        background-color: #202020;
      }
      .rhap_volume-indicator {
        width: 20px;
        height: 20px;
        background-color: #000;
        box-shadow: none;
        transform: translateY(-20%);
      }
      .rhap_download-progress {
        background-color: #202020 !important;
      }
      .rhap_progress-bar {
        background-color: #202020 !important;
      }
      .rhap_progress-filled {
        background-color: #202020 !important;
      }
      .rhap_progress-indicator {
        width: 20px;
        height: 20px;
        box-shadow: none;
        background-color: #000;
        z-index: 70;
      }
    }
    @media (max-width: 1400px) {
      div {
        width: 100%;
        position: relative;
        right: 10%;
        .rhap_container {
          .rhap_progress-container {
            width: 80%;
            margin-left: 50px;
          }
        }
      }
    }
  }
`,
  yb = nv`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`,
  xb = W.div`
  background-color: #111111;
  position: fixed;
  width: 100%;
  height: 90%;
  z-index: 15;
  bottom: -200%;
  left: 0px;
  display: flex;
  animation: none;
  transition: 0.5s ease-in-out;
  &.on {
    bottom: 100px;
    animation: ${yb} 0.5s ease-in-out forwards;
  }
  ul {
    height: 90%;
    overflow-y: scroll;
  }
  .cover {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    img {
      margin: auto;
    }
  }
  .playbutbox {
    display: flex;
    justify-content: space-between;
  }
  .playlistbut {
    display: flex;
    width: 100px;
    justify-content: space-around;
    font-size: 20px;
    h2 {
      margin-right: 30px;
    }
  }

  .playmusiclist {
    border-left: 1px solid #191919;
    display: block;
    width: 600px;
    color: white;
    padding: 30px;
    padding-top: 30px;
    font-size: 20px;
    z-index: 2;
  }
  box-sizing: border-box;
`;
W.div``;
const rv = W.div`
  height: 400px;
  /* background-color: #333333; */
  a {
    color: white;
  }
`,
  wb = W.li``,
  Sb = W.li`
  position: relative;
  img {
    height: 60px;
    width: 60px;
    transition: 0.5s;
  }
  border-bottom: 1px solid #333333;
  a {
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover img{
    opacity: 0.5;
  }
  &:hover::after {
    content: '';
    display: block;
    position: absolute;
    top: 35px;
    left: 37px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid white;
    transform: translate(-50%, -50%) rotate(0deg);

  }
  padding: 5px;
  height: 60px;
  display: flex;
  flex-direction: row;
  div {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 10px;
    justify-content: space-around;
    align-items: baseline;
    span {
      display: block;
      width: 20px;
      height: 20px;
      transform: translate(0, 0);
    }
    h4 {
      a {
        color: #888888;
      }
    }
  }
`,
  Wn = W.div`
  padding: 40px;
  padding-bottom: 150px;
  margin-right: 200px;
  @media (max-width: 1400px) {
    margin-right: 50px;
  }
`,
  bb = W.div`
  position: fixed;
  background-color: #000;
  top: 0;
  bottom: 0;
  opacity: 0.6;
  width: 100%;
  height: 100%;
  z-index: 100;
`,
  jb = W.div`
  .topimg {
    width: 180px;
    height: 180px;
  }
  .butbox {
    display: flex;
    margin: 10px 0;
    .typered {
      background-color: #ff0050;
    }
    .typebleck {
      background-color: #222222;
    }
    button {
      color: white;
      padding: 0 20px;
      border: none;
      border-radius: 5px;
      height: 40px;
      /* text-align: center; */
      margin-right: 10px;
      line-height: 40px;
      font-size: 16px;
      cursor: pointer;
    }
    .Obox {
      button {
        border: 1px solid #999999;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        font-size: 22px;
        background: none;
        color: #999999;
        line-height: 10px;
        padding: 0;
      }
    }
    .clicklist {
      position: relative;
    }
    .dishul {
      position: absolute;
      width: 80px;
      top: 10px;
      left: 300px;
      border-radius: 15px;
      background-color: #999999;
    }
  }
  .comentbox {
    border-top: 1px solid #222222;
    padding: 50px 0;
  }
  .commentinput {
    height: 50px;
    border-radius: 15px;
    line-height: 50px;
    padding-left: 20px;
    input {
      color: white;
      font-size: 16px;
      width: 95%;
      border: none; /* 태두리 선 제거 */
      outline: none; /* 포커스 시 나타나는 외곽선 제거 */
      &:focus {
        border: none !important; /* 포커스 시 나타나는 외곽선 덮어쓰기 */
        outline: none !important; /* 포커스 시 나타나는 외곽선 덮어쓰기 */
      }
    }
  }
`,
  Eb = W.div`
  position: fixed;
  background-color: #222222;
  opacity: 1;
  border-radius: 5px;
  z-index: 101;
  color: white;
  width: 500px;
  height: 500px;
  top: 30%;
  left: 30%;
  transform: translate(-50% -50%);
  flex-direction: column;
  em {
    color: #999999;
  }
`,
  kb = W.li`
  height: 85px;
  margin: 5px 0;
  border-bottom: 1px solid #222222;
  padding: 15px;
  img {
    height: 30px;
    width: 30px;
    margin: 0 0 0 0;
  }
  .username {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 15px;
  }
  .text {
    font-size: 16px;
    cursor: auto;
  }
  button {
    height: 20px;
    padding: 0 5px;
  }
  .commentbottom {
    display: flex;
    justify-content: space-between;
  }
  button {
    height: 25px;
    background: none;
    color: white;
    border: 1px solid #222222;
    padding: 0 10px;
    border-radius: 12px;
  }
`,
  Cb = W.ul`
  background-color: #000;
  min-height: 324px;
  color: white;
  .alllist {
    display: flex;
  }
  .alllist span {
    font-size: 16px;
    display: inline-block;
    margin-top: 18px;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + label {
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 2px solid #707070;
    border-radius: 4px;
    position: relative;
    margin: 20px;
  }
  input[type="checkbox"]:checked + label::after {
    content: "✔";
    font-size: 12px;
    width: 15px;
    height: 15px;
    text-align: center;
    position: absolute;
    background-color: #ff0050;
    left: 0;
    top: 0;
    line-height: 12px;
  }
`,
  Pb = W.li`
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #222222;
  padding: 10px 0;
  h3 {
    margin-left: 20px;
    font-size: 16px;
    line-height: 60px;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 90%;
  }
  &:hover {
    background-color: #222222;
  }
  img {
    width: 60px;
    height: 60px;
  }
  display: flex;
  a {
    color: white;
  }
`,
  Tb = W.div`
  font-size: 16px;
  h2 {
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 50px;
  }
  h3 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 40px;
  }
  h4 {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  ul {
    li {
      margin: 20px 20px 20px 0;
      padding: 0;
      margin: 0;
      div {
        display: flex;
        align-items: center;
        img {
          width: 50px;
          height: 50px;
          margin: 20px 20px 20px 0;
        }
      }
    }
    .null {
      margin-bottom: 30px;
    }
  }
`,
  Ob = nv`
  from {
    opacity: 0;
    }
  to {
    opacity: 1;
  }
`,
  _b = W.div`
  padding-bottom: 40px;
  border-bottom: 1px solid #222222;
  position: relative;
  h2 {
    margin-bottom: 20px;
  }
  .arrow {
    opacity: 0;
    display: none;
  }
  .arrowon {
    color: #0a22fb;
    font-size: 30px;
    position: absolute;
    top: 140%;
    left: 3%;
    animation: ${Ob} 0.5s ease-in-out infinite forwards;
  }
  .butbox {
    display: flex;
    .typered {
      background-color: #ff0050;
    }
    .typebleck {
      background-color: #222222;
    }
    button {
      color: white;
      padding: 0 20px;
      border: none;
      border-radius: 5px;
      height: 40px;
      /* text-align: center; */
      margin-right: 20px;
      line-height: 40px;
      font-size: 16px;
    }
  }
`,
  iv = W.div`
  height: 400px;
  margin: 100px 0;
`,
  Lb = W.div`
  width: 100%;

  h3 {
    font-size: 22px;
    font-weight: 300;
  }
  h4 {
    color: #555555;
    font-size: 18px;
    font-weight: 300;
  }
  &:hover img{
    opacity: 0.5;
  }

  img {
    width: 100%;
    transition: 0.5s;
    position: relative;
  }
  &:hover::after {
    content: '';
    display: block;
    position: absolute;
    top: 40%;
    left: 50%;
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 30px solid white;
    transform: translate(-50%, -50%) rotate(0deg);

  }
`,
  Nb = W.div`
  width: 100%;
  margin: auto;
  height: 350px;
  display: flex;
  background-color: rgba(19, 19, 19, 1);
  color: #fff;
  cursor: pointer;
  img {
    width: 350px;
    height: 350px;
    background-size: cover;
  }
  div {
    width: 70%;
    font-size: 25px;
    padding: 5px 0 0 30px;
    position: relative;
    box-sizing: border-box;
    border: 1px solid #191919;
    span {
      font-size: 18px;
      display: block;
    }
    strong {
      font-size: 40px;
      font-weight: 600;
      margin-right: 10px;
    }
    b {
      font-size: 40px;
      font-weight: 600;
      display: block;
    }
    p {
      font-size: 18px;
      margin-top: 20px;
    }
    p:last-child {
      position: absolute;
      bottom: 10px;
    }
  }
`,
  Mb = W.img`
  width: 100%;
  cursor: pointer;
`;
var ov = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  nh = A.createContext && A.createContext(ov),
  Dn =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Dn =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        Dn.apply(this, arguments)
      );
    },
  Ab =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      return n;
    };
function sv(e) {
  return (
    e &&
    e.map(function (t, n) {
      return A.createElement(t.tag, Dn({ key: n }, t.attr), sv(t.child));
    })
  );
}
function le(e) {
  return function (t) {
    return A.createElement(Rb, Dn({ attr: Dn({}, e.attr) }, t), sv(e.child));
  };
}
function Rb(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      o = e.title,
      s = Ab(e, ["attr", "size", "title"]),
      l = i || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      A.createElement(
        "svg",
        Dn(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          s,
          {
            className: a,
            style: Dn(Dn({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && A.createElement("title", null, o),
        e.children
      )
    );
  };
  return nh !== void 0
    ? A.createElement(nh.Consumer, null, function (n) {
        return t(n);
      })
    : t(ov);
}
function Ib(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M816 768h-24V428c0-141.1-104.3-257.8-240-277.2V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.8C336.3 170.2 232 286.9 232 428v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48z",
        },
      },
    ],
  })(e);
}
function zb(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z",
        },
      },
    ],
  })(e);
}
function lv(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z",
        },
      },
    ],
  })(e);
}
function Db(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z",
        },
      },
    ],
  })(e);
}
function $b(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M663.8 455.5zm-151.5-93.8l-151.8 93.8 151.8 93.9 151.5-93.9zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm151.2 595.5L512.6 750l-151-90.5v-33.1l45.4 29.4 105.6-87.7 105.6 87.7 45.1-29.4v33.1zm-45.6-22.4l-105.3-87.7L407 637.1l-151-99.2 104.5-82.4L256 371.2 407 274l105.3 87.7L617.6 274 768 372.1l-104.2 83.5L768 539l-150.4 98.1z",
        },
      },
    ],
  })(e);
}
function Fb(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M160 894c0 17.7 14.3 32 32 32h286V550H160v344zm386 32h286c17.7 0 32-14.3 32-32V550H546v376zm334-616H732.4c13.6-21.4 21.6-46.8 21.6-74 0-76.1-61.9-138-138-138-41.4 0-78.7 18.4-104 47.4-25.3-29-62.6-47.4-104-47.4-76.1 0-138 61.9-138 138 0 27.2 7.9 52.6 21.6 74H144c-17.7 0-32 14.3-32 32v140h366V310h68v172h366V342c0-17.7-14.3-32-32-32zm-402-4h-70c-38.6 0-70-31.4-70-70s31.4-70 70-70 70 31.4 70 70v70zm138 0h-70v-70c0-38.6 31.4-70 70-70s70 31.4 70 70-31.4 70-70 70z",
        },
      },
    ],
  })(e);
}
function Ub(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z",
        },
      },
    ],
  })(e);
}
function Bb(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z",
        },
      },
    ],
  })(e);
}
function Vb(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 0 0-44 44v148c0 81.7 60 149.6 138.2 162C265.6 630.2 359 721.8 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.8 758.4 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 0 0-44-44zM248 439.6c-37.1-11.9-64-46.7-64-87.6V232h64v207.6zM840 352c0 41-26.9 75.8-64 87.6V232h64v120z",
        },
      },
    ],
  })(e);
}
function Hb(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: { d: "M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z" },
      },
    ],
  })(e);
}
function Wb(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
        },
      },
    ],
  })(e);
}
function av(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z",
        },
      },
    ],
  })(e);
}
function Gb(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z",
        },
      },
    ],
  })(e);
}
function Kb(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z",
        },
      },
    ],
  })(e);
}
function qb(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z",
        },
      },
    ],
  })(e);
}
function Jb(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
        },
      },
    ],
  })(e);
}
function Qb(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z",
        },
      },
    ],
  })(e);
}
function Yb(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z",
        },
      },
    ],
  })(e);
}
function Xb(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z",
        },
      },
    ],
  })(e);
}
function Zb(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z",
        },
      },
    ],
  })(e);
}
function rh(e) {
  return le({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z",
        },
      },
    ],
  })(e);
}
function e3(e) {
  return le({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z",
        },
      },
    ],
  })(e);
}
function uv(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z",
        },
      },
    ],
  })(e);
}
function t3(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z",
        },
      },
    ],
  })(e);
}
var cv = { exports: {} },
  dv = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var li = b;
function n3(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var r3 = typeof Object.is == "function" ? Object.is : n3,
  i3 = li.useState,
  o3 = li.useEffect,
  s3 = li.useLayoutEffect,
  l3 = li.useDebugValue;
function a3(e, t) {
  var n = t(),
    r = i3({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    s3(
      function () {
        (i.value = n), (i.getSnapshot = t), Ja(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    o3(
      function () {
        return (
          Ja(i) && o({ inst: i }),
          e(function () {
            Ja(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    l3(n),
    n
  );
}
function Ja(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !r3(e, n);
  } catch {
    return !0;
  }
}
function u3(e, t) {
  return t();
}
var c3 =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? u3
    : a3;
dv.useSyncExternalStore =
  li.useSyncExternalStore !== void 0 ? li.useSyncExternalStore : c3;
cv.exports = dv;
var d3 = cv.exports,
  fv = { exports: {} },
  pv = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bl = b,
  f3 = d3;
function p3(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var h3 = typeof Object.is == "function" ? Object.is : p3,
  m3 = f3.useSyncExternalStore,
  g3 = Bl.useRef,
  v3 = Bl.useEffect,
  y3 = Bl.useMemo,
  x3 = Bl.useDebugValue;
pv.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = g3(null);
  if (o.current === null) {
    var s = { hasValue: !1, value: null };
    o.current = s;
  } else s = o.current;
  o = y3(
    function () {
      function a(h) {
        if (!c) {
          if (((c = !0), (d = h), (h = r(h)), i !== void 0 && s.hasValue)) {
            var v = s.value;
            if (i(v, h)) return (f = v);
          }
          return (f = h);
        }
        if (((v = f), h3(d, h))) return v;
        var y = r(h);
        return i !== void 0 && i(v, y) ? v : ((d = h), (f = y));
      }
      var c = !1,
        d,
        f,
        p = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        p === null
          ? void 0
          : function () {
              return a(p());
            },
      ];
    },
    [t, n, r, i]
  );
  var l = m3(e, o[0], o[1]);
  return (
    v3(
      function () {
        (s.hasValue = !0), (s.value = l);
      },
      [l]
    ),
    x3(l),
    l
  );
};
fv.exports = pv;
var w3 = fv.exports;
function S3(e) {
  e();
}
let hv = S3;
const b3 = (e) => (hv = e),
  j3 = () => hv,
  ih = Symbol.for(`react-redux-context-${b.version}`),
  oh = globalThis;
function E3() {
  let e = oh[ih];
  return e || ((e = b.createContext(null)), (oh[ih] = e)), e;
}
const Gn = new Proxy(
  {},
  new Proxy(
    {},
    {
      get(e, t) {
        const n = E3();
        return (r, ...i) => Reflect[t](n, ...i);
      },
    }
  )
);
function Kd(e = Gn) {
  return function () {
    return b.useContext(e);
  };
}
const mv = Kd(),
  k3 = () => {
    throw new Error("uSES not initialized!");
  };
let gv = k3;
const C3 = (e) => {
    gv = e;
  },
  P3 = (e, t) => e === t;
function T3(e = Gn) {
  const t = e === Gn ? mv : Kd(e);
  return function (r, i = {}) {
    const {
        equalityFn: o = P3,
        stabilityCheck: s = void 0,
        noopCheck: l = void 0,
      } = typeof i == "function" ? { equalityFn: i } : i,
      {
        store: a,
        subscription: c,
        getServerState: d,
        stabilityCheck: f,
        noopCheck: p,
      } = t();
    b.useRef(!0);
    const h = b.useCallback(
        {
          [r.name](y) {
            return r(y);
          },
        }[r.name],
        [r, f, s]
      ),
      v = gv(c.addNestedSub, a.getState, d || a.getState, h, o);
    return b.useDebugValue(v), v;
  };
}
const X = T3();
function kc() {
  return (
    (kc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    kc.apply(this, arguments)
  );
}
var vv = { exports: {} },
  te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ze = typeof Symbol == "function" && Symbol.for,
  qd = ze ? Symbol.for("react.element") : 60103,
  Jd = ze ? Symbol.for("react.portal") : 60106,
  Vl = ze ? Symbol.for("react.fragment") : 60107,
  Hl = ze ? Symbol.for("react.strict_mode") : 60108,
  Wl = ze ? Symbol.for("react.profiler") : 60114,
  Gl = ze ? Symbol.for("react.provider") : 60109,
  Kl = ze ? Symbol.for("react.context") : 60110,
  Qd = ze ? Symbol.for("react.async_mode") : 60111,
  ql = ze ? Symbol.for("react.concurrent_mode") : 60111,
  Jl = ze ? Symbol.for("react.forward_ref") : 60112,
  Ql = ze ? Symbol.for("react.suspense") : 60113,
  O3 = ze ? Symbol.for("react.suspense_list") : 60120,
  Yl = ze ? Symbol.for("react.memo") : 60115,
  Xl = ze ? Symbol.for("react.lazy") : 60116,
  _3 = ze ? Symbol.for("react.block") : 60121,
  L3 = ze ? Symbol.for("react.fundamental") : 60117,
  N3 = ze ? Symbol.for("react.responder") : 60118,
  M3 = ze ? Symbol.for("react.scope") : 60119;
function vt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case qd:
        switch (((e = e.type), e)) {
          case Qd:
          case ql:
          case Vl:
          case Wl:
          case Hl:
          case Ql:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Kl:
              case Jl:
              case Xl:
              case Yl:
              case Gl:
                return e;
              default:
                return t;
            }
        }
      case Jd:
        return t;
    }
  }
}
function yv(e) {
  return vt(e) === ql;
}
te.AsyncMode = Qd;
te.ConcurrentMode = ql;
te.ContextConsumer = Kl;
te.ContextProvider = Gl;
te.Element = qd;
te.ForwardRef = Jl;
te.Fragment = Vl;
te.Lazy = Xl;
te.Memo = Yl;
te.Portal = Jd;
te.Profiler = Wl;
te.StrictMode = Hl;
te.Suspense = Ql;
te.isAsyncMode = function (e) {
  return yv(e) || vt(e) === Qd;
};
te.isConcurrentMode = yv;
te.isContextConsumer = function (e) {
  return vt(e) === Kl;
};
te.isContextProvider = function (e) {
  return vt(e) === Gl;
};
te.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === qd;
};
te.isForwardRef = function (e) {
  return vt(e) === Jl;
};
te.isFragment = function (e) {
  return vt(e) === Vl;
};
te.isLazy = function (e) {
  return vt(e) === Xl;
};
te.isMemo = function (e) {
  return vt(e) === Yl;
};
te.isPortal = function (e) {
  return vt(e) === Jd;
};
te.isProfiler = function (e) {
  return vt(e) === Wl;
};
te.isStrictMode = function (e) {
  return vt(e) === Hl;
};
te.isSuspense = function (e) {
  return vt(e) === Ql;
};
te.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Vl ||
    e === ql ||
    e === Wl ||
    e === Hl ||
    e === Ql ||
    e === O3 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Xl ||
        e.$$typeof === Yl ||
        e.$$typeof === Gl ||
        e.$$typeof === Kl ||
        e.$$typeof === Jl ||
        e.$$typeof === L3 ||
        e.$$typeof === N3 ||
        e.$$typeof === M3 ||
        e.$$typeof === _3))
  );
};
te.typeOf = vt;
vv.exports = te;
var A3 = vv.exports,
  xv = A3,
  R3 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  I3 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  wv = {};
wv[xv.ForwardRef] = R3;
wv[xv.Memo] = I3;
var re = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yd = Symbol.for("react.element"),
  Xd = Symbol.for("react.portal"),
  Zl = Symbol.for("react.fragment"),
  ea = Symbol.for("react.strict_mode"),
  ta = Symbol.for("react.profiler"),
  na = Symbol.for("react.provider"),
  ra = Symbol.for("react.context"),
  z3 = Symbol.for("react.server_context"),
  ia = Symbol.for("react.forward_ref"),
  oa = Symbol.for("react.suspense"),
  sa = Symbol.for("react.suspense_list"),
  la = Symbol.for("react.memo"),
  aa = Symbol.for("react.lazy"),
  D3 = Symbol.for("react.offscreen"),
  Sv;
Sv = Symbol.for("react.module.reference");
function Tt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Yd:
        switch (((e = e.type), e)) {
          case Zl:
          case ta:
          case ea:
          case oa:
          case sa:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case z3:
              case ra:
              case ia:
              case aa:
              case la:
              case na:
                return e;
              default:
                return t;
            }
        }
      case Xd:
        return t;
    }
  }
}
re.ContextConsumer = ra;
re.ContextProvider = na;
re.Element = Yd;
re.ForwardRef = ia;
re.Fragment = Zl;
re.Lazy = aa;
re.Memo = la;
re.Portal = Xd;
re.Profiler = ta;
re.StrictMode = ea;
re.Suspense = oa;
re.SuspenseList = sa;
re.isAsyncMode = function () {
  return !1;
};
re.isConcurrentMode = function () {
  return !1;
};
re.isContextConsumer = function (e) {
  return Tt(e) === ra;
};
re.isContextProvider = function (e) {
  return Tt(e) === na;
};
re.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yd;
};
re.isForwardRef = function (e) {
  return Tt(e) === ia;
};
re.isFragment = function (e) {
  return Tt(e) === Zl;
};
re.isLazy = function (e) {
  return Tt(e) === aa;
};
re.isMemo = function (e) {
  return Tt(e) === la;
};
re.isPortal = function (e) {
  return Tt(e) === Xd;
};
re.isProfiler = function (e) {
  return Tt(e) === ta;
};
re.isStrictMode = function (e) {
  return Tt(e) === ea;
};
re.isSuspense = function (e) {
  return Tt(e) === oa;
};
re.isSuspenseList = function (e) {
  return Tt(e) === sa;
};
re.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Zl ||
    e === ta ||
    e === ea ||
    e === oa ||
    e === sa ||
    e === D3 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === aa ||
        e.$$typeof === la ||
        e.$$typeof === na ||
        e.$$typeof === ra ||
        e.$$typeof === ia ||
        e.$$typeof === Sv ||
        e.getModuleId !== void 0))
  );
};
re.typeOf = Tt;
function $3() {
  const e = j3();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        i = t;
      for (; i; ) r.push(i), (i = i.next);
      return r;
    },
    subscribe(r) {
      let i = !0,
        o = (n = { callback: r, next: null, prev: n });
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next));
        }
      );
    },
  };
}
const sh = { notify() {}, get: () => [] };
function F3(e, t) {
  let n,
    r = sh;
  function i(f) {
    return a(), r.subscribe(f);
  }
  function o() {
    r.notify();
  }
  function s() {
    d.onStateChange && d.onStateChange();
  }
  function l() {
    return !!n;
  }
  function a() {
    n || ((n = t ? t.addNestedSub(s) : e.subscribe(s)), (r = $3()));
  }
  function c() {
    n && (n(), (n = void 0), r.clear(), (r = sh));
  }
  const d = {
    addNestedSub: i,
    notifyNestedSubs: o,
    handleChangeWrapper: s,
    isSubscribed: l,
    trySubscribe: a,
    tryUnsubscribe: c,
    getListeners: () => r,
  };
  return d;
}
const U3 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  B3 = U3 ? b.useLayoutEffect : b.useEffect;
function V3({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  noopCheck: o = "once",
}) {
  const s = b.useMemo(() => {
      const c = F3(e);
      return {
        store: e,
        subscription: c,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        noopCheck: o,
      };
    }, [e, r, i, o]),
    l = b.useMemo(() => e.getState(), [e]);
  B3(() => {
    const { subscription: c } = s;
    return (
      (c.onStateChange = c.notifyNestedSubs),
      c.trySubscribe(),
      l !== e.getState() && c.notifyNestedSubs(),
      () => {
        c.tryUnsubscribe(), (c.onStateChange = void 0);
      }
    );
  }, [s, l]);
  const a = t || Gn;
  return A.createElement(a.Provider, { value: s }, n);
}
function bv(e = Gn) {
  const t = e === Gn ? mv : Kd(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const H3 = bv();
function W3(e = Gn) {
  const t = e === Gn ? H3 : bv(e);
  return function () {
    return t().dispatch;
  };
}
const Se = W3();
C3(w3.useSyncExternalStoreWithSelector);
b3(rg.unstable_batchedUpdates);
function Mt(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (n.length
        ? " " +
          n
            .map(function (i) {
              return "'" + i + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function Kn(e) {
  return !!e && !!e[fe];
}
function fn(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != "object") return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var i = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
      return (
        i === Object ||
        (typeof i == "function" && Function.toString.call(i) === ej)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[ph] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[ph]) ||
      Zd(e) ||
      ef(e))
  );
}
function mr(e, t, n) {
  n === void 0 && (n = !1),
    mi(e) === 0
      ? (n ? Object.keys : Wr)(e).forEach(function (r) {
          (n && typeof r == "symbol") || t(r, e[r], e);
        })
      : e.forEach(function (r, i) {
          return t(i, r, e);
        });
}
function mi(e) {
  var t = e[fe];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : Zd(e)
    ? 2
    : ef(e)
    ? 3
    : 0;
}
function Hr(e, t) {
  return mi(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function G3(e, t) {
  return mi(e) === 2 ? e.get(t) : e[t];
}
function jv(e, t, n) {
  var r = mi(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function Ev(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Zd(e) {
  return X3 && e instanceof Map;
}
function ef(e) {
  return Z3 && e instanceof Set;
}
function er(e) {
  return e.o || e.t;
}
function tf(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = Cv(e);
  delete t[fe];
  for (var n = Wr(t), r = 0; r < n.length; r++) {
    var i = n[r],
      o = t[i];
    o.writable === !1 && ((o.writable = !0), (o.configurable = !0)),
      (o.get || o.set) &&
        (t[i] = {
          configurable: !0,
          writable: !0,
          enumerable: o.enumerable,
          value: e[i],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function nf(e, t) {
  return (
    t === void 0 && (t = !1),
    rf(e) ||
      Kn(e) ||
      !fn(e) ||
      (mi(e) > 1 && (e.set = e.add = e.clear = e.delete = K3),
      Object.freeze(e),
      t &&
        mr(
          e,
          function (n, r) {
            return nf(r, !0);
          },
          !0
        )),
    e
  );
}
function K3() {
  Mt(2);
}
function rf(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function qt(e) {
  var t = Oc[e];
  return t || Mt(18, e), t;
}
function q3(e, t) {
  Oc[e] || (Oc[e] = t);
}
function Cc() {
  return mo;
}
function Qa(e, t) {
  t && (qt("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function ol(e) {
  Pc(e), e.p.forEach(J3), (e.p = null);
}
function Pc(e) {
  e === mo && (mo = e.l);
}
function lh(e) {
  return (mo = { p: [], l: mo, h: e, m: !0, _: 0 });
}
function J3(e) {
  var t = e[fe];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function Ya(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.O || qt("ES5").S(t, e, r),
    r
      ? (n[fe].P && (ol(t), Mt(4)),
        fn(e) && ((e = sl(t, e)), t.l || ll(t, e)),
        t.u && qt("Patches").M(n[fe].t, e, t.u, t.s))
      : (e = sl(t, n, [])),
    ol(t),
    t.u && t.v(t.u, t.s),
    e !== kv ? e : void 0
  );
}
function sl(e, t, n) {
  if (rf(t)) return t;
  var r = t[fe];
  if (!r)
    return (
      mr(
        t,
        function (l, a) {
          return ah(e, r, t, l, a, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return ll(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var i = r.i === 4 || r.i === 5 ? (r.o = tf(r.k)) : r.o,
      o = i,
      s = !1;
    r.i === 3 && ((o = new Set(i)), i.clear(), (s = !0)),
      mr(o, function (l, a) {
        return ah(e, r, i, l, a, n, s);
      }),
      ll(e, i, !1),
      n && e.u && qt("Patches").N(r, n, e.u, e.s);
  }
  return r.o;
}
function ah(e, t, n, r, i, o, s) {
  if (Kn(i)) {
    var l = sl(e, i, o && t && t.i !== 3 && !Hr(t.R, r) ? o.concat(r) : void 0);
    if ((jv(n, r, l), !Kn(l))) return;
    e.m = !1;
  } else s && n.add(i);
  if (fn(i) && !rf(i)) {
    if (!e.h.D && e._ < 1) return;
    sl(e, i), (t && t.A.l) || ll(e, i);
  }
}
function ll(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && nf(t, n);
}
function Xa(e, t) {
  var n = e[fe];
  return (n ? er(n) : e)[t];
}
function uh(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function jn(e) {
  e.P || ((e.P = !0), e.l && jn(e.l));
}
function Za(e) {
  e.o || (e.o = tf(e.t));
}
function Tc(e, t, n) {
  var r = Zd(t)
    ? qt("MapSet").F(t, n)
    : ef(t)
    ? qt("MapSet").T(t, n)
    : e.O
    ? (function (i, o) {
        var s = Array.isArray(i),
          l = {
            i: s ? 1 : 0,
            A: o ? o.A : Cc(),
            P: !1,
            I: !1,
            R: {},
            l: o,
            t: i,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          a = l,
          c = go;
        s && ((a = [l]), (c = Ni));
        var d = Proxy.revocable(a, c),
          f = d.revoke,
          p = d.proxy;
        return (l.k = p), (l.j = f), p;
      })(t, n)
    : qt("ES5").J(t, n);
  return (n ? n.A : Cc()).p.push(r), r;
}
function Q3(e) {
  return (
    Kn(e) || Mt(22, e),
    (function t(n) {
      if (!fn(n)) return n;
      var r,
        i = n[fe],
        o = mi(n);
      if (i) {
        if (!i.P && (i.i < 4 || !qt("ES5").K(i))) return i.t;
        (i.I = !0), (r = ch(n, o)), (i.I = !1);
      } else r = ch(n, o);
      return (
        mr(r, function (s, l) {
          (i && G3(i.t, s) === l) || jv(r, s, t(l));
        }),
        o === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function ch(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return tf(e);
}
function Y3() {
  function e(o, s) {
    var l = i[o];
    return (
      l
        ? (l.enumerable = s)
        : (i[o] = l =
            {
              configurable: !0,
              enumerable: s,
              get: function () {
                var a = this[fe];
                return go.get(a, o);
              },
              set: function (a) {
                var c = this[fe];
                go.set(c, o, a);
              },
            }),
      l
    );
  }
  function t(o) {
    for (var s = o.length - 1; s >= 0; s--) {
      var l = o[s][fe];
      if (!l.P)
        switch (l.i) {
          case 5:
            r(l) && jn(l);
            break;
          case 4:
            n(l) && jn(l);
        }
    }
  }
  function n(o) {
    for (var s = o.t, l = o.k, a = Wr(l), c = a.length - 1; c >= 0; c--) {
      var d = a[c];
      if (d !== fe) {
        var f = s[d];
        if (f === void 0 && !Hr(s, d)) return !0;
        var p = l[d],
          h = p && p[fe];
        if (h ? h.t !== f : !Ev(p, f)) return !0;
      }
    }
    var v = !!s[fe];
    return a.length !== Wr(s).length + (v ? 0 : 1);
  }
  function r(o) {
    var s = o.k;
    if (s.length !== o.t.length) return !0;
    var l = Object.getOwnPropertyDescriptor(s, s.length - 1);
    if (l && !l.get) return !0;
    for (var a = 0; a < s.length; a++) if (!s.hasOwnProperty(a)) return !0;
    return !1;
  }
  var i = {};
  q3("ES5", {
    J: function (o, s) {
      var l = Array.isArray(o),
        a = (function (d, f) {
          if (d) {
            for (var p = Array(f.length), h = 0; h < f.length; h++)
              Object.defineProperty(p, "" + h, e(h, !0));
            return p;
          }
          var v = Cv(f);
          delete v[fe];
          for (var y = Wr(v), w = 0; w < y.length; w++) {
            var m = y[w];
            v[m] = e(m, d || !!v[m].enumerable);
          }
          return Object.create(Object.getPrototypeOf(f), v);
        })(l, o),
        c = {
          i: l ? 5 : 4,
          A: s ? s.A : Cc(),
          P: !1,
          I: !1,
          R: {},
          l: s,
          t: o,
          k: a,
          o: null,
          g: !1,
          C: !1,
        };
      return Object.defineProperty(a, fe, { value: c, writable: !0 }), a;
    },
    S: function (o, s, l) {
      l
        ? Kn(s) && s[fe].A === o && t(o.p)
        : (o.u &&
            (function a(c) {
              if (c && typeof c == "object") {
                var d = c[fe];
                if (d) {
                  var f = d.t,
                    p = d.k,
                    h = d.R,
                    v = d.i;
                  if (v === 4)
                    mr(p, function (x) {
                      x !== fe &&
                        (f[x] !== void 0 || Hr(f, x)
                          ? h[x] || a(p[x])
                          : ((h[x] = !0), jn(d)));
                    }),
                      mr(f, function (x) {
                        p[x] !== void 0 || Hr(p, x) || ((h[x] = !1), jn(d));
                      });
                  else if (v === 5) {
                    if ((r(d) && (jn(d), (h.length = !0)), p.length < f.length))
                      for (var y = p.length; y < f.length; y++) h[y] = !1;
                    else for (var w = f.length; w < p.length; w++) h[w] = !0;
                    for (
                      var m = Math.min(p.length, f.length), g = 0;
                      g < m;
                      g++
                    )
                      p.hasOwnProperty(g) || (h[g] = !0),
                        h[g] === void 0 && a(p[g]);
                  }
                }
              }
            })(o.p[0]),
          t(o.p));
    },
    K: function (o) {
      return o.i === 4 ? n(o) : r(o);
    },
  });
}
var dh,
  mo,
  of = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  X3 = typeof Map < "u",
  Z3 = typeof Set < "u",
  fh = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  kv = of
    ? Symbol.for("immer-nothing")
    : (((dh = {})["immer-nothing"] = !0), dh),
  ph = of ? Symbol.for("immer-draftable") : "__$immer_draftable",
  fe = of ? Symbol.for("immer-state") : "__$immer_state",
  ej = "" + Object.prototype.constructor,
  Wr =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  Cv =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        Wr(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  Oc = {},
  go = {
    get: function (e, t) {
      if (t === fe) return e;
      var n = er(e);
      if (!Hr(n, t))
        return (function (i, o, s) {
          var l,
            a = uh(o, s);
          return a
            ? "value" in a
              ? a.value
              : (l = a.get) === null || l === void 0
              ? void 0
              : l.call(i.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !fn(r)
        ? r
        : r === Xa(e.t, t)
        ? (Za(e), (e.o[t] = Tc(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in er(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(er(e));
    },
    set: function (e, t, n) {
      var r = uh(er(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var i = Xa(er(e), t),
          o = i == null ? void 0 : i[fe];
        if (o && o.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
        if (Ev(n, i) && (n !== void 0 || Hr(e.t, t))) return !0;
        Za(e), jn(e);
      }
      return (
        (e.o[t] === n && (n !== void 0 || t in e.o)) ||
          (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = n), (e.R[t] = !0)),
        !0
      );
    },
    deleteProperty: function (e, t) {
      return (
        Xa(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), Za(e), jn(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = er(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      Mt(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      Mt(12);
    },
  },
  Ni = {};
mr(go, function (e, t) {
  Ni[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (Ni.deleteProperty = function (e, t) {
    return Ni.set.call(this, e, t, void 0);
  }),
  (Ni.set = function (e, t, n) {
    return go.set.call(this, e[0], t, n, e[0]);
  });
var tj = (function () {
    function e(n) {
      var r = this;
      (this.O = fh),
        (this.D = !0),
        (this.produce = function (i, o, s) {
          if (typeof i == "function" && typeof o != "function") {
            var l = o;
            o = i;
            var a = r;
            return function (y) {
              var w = this;
              y === void 0 && (y = l);
              for (
                var m = arguments.length, g = Array(m > 1 ? m - 1 : 0), x = 1;
                x < m;
                x++
              )
                g[x - 1] = arguments[x];
              return a.produce(y, function (S) {
                var j;
                return (j = o).call.apply(j, [w, S].concat(g));
              });
            };
          }
          var c;
          if (
            (typeof o != "function" && Mt(6),
            s !== void 0 && typeof s != "function" && Mt(7),
            fn(i))
          ) {
            var d = lh(r),
              f = Tc(r, i, void 0),
              p = !0;
            try {
              (c = o(f)), (p = !1);
            } finally {
              p ? ol(d) : Pc(d);
            }
            return typeof Promise < "u" && c instanceof Promise
              ? c.then(
                  function (y) {
                    return Qa(d, s), Ya(y, d);
                  },
                  function (y) {
                    throw (ol(d), y);
                  }
                )
              : (Qa(d, s), Ya(c, d));
          }
          if (!i || typeof i != "object") {
            if (
              ((c = o(i)) === void 0 && (c = i),
              c === kv && (c = void 0),
              r.D && nf(c, !0),
              s)
            ) {
              var h = [],
                v = [];
              qt("Patches").M(i, c, h, v), s(h, v);
            }
            return c;
          }
          Mt(21, i);
        }),
        (this.produceWithPatches = function (i, o) {
          if (typeof i == "function")
            return function (c) {
              for (
                var d = arguments.length, f = Array(d > 1 ? d - 1 : 0), p = 1;
                p < d;
                p++
              )
                f[p - 1] = arguments[p];
              return r.produceWithPatches(c, function (h) {
                return i.apply(void 0, [h].concat(f));
              });
            };
          var s,
            l,
            a = r.produce(i, o, function (c, d) {
              (s = c), (l = d);
            });
          return typeof Promise < "u" && a instanceof Promise
            ? a.then(function (c) {
                return [c, s, l];
              })
            : [a, s, l];
        }),
        typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        fn(n) || Mt(8), Kn(n) && (n = Q3(n));
        var r = lh(this),
          i = Tc(this, n, void 0);
        return (i[fe].C = !0), Pc(r), i;
      }),
      (t.finishDraft = function (n, r) {
        var i = n && n[fe],
          o = i.A;
        return Qa(o, r), Ya(void 0, o);
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (t.setUseProxies = function (n) {
        n && !fh && Mt(20), (this.O = n);
      }),
      (t.applyPatches = function (n, r) {
        var i;
        for (i = r.length - 1; i >= 0; i--) {
          var o = r[i];
          if (o.path.length === 0 && o.op === "replace") {
            n = o.value;
            break;
          }
        }
        i > -1 && (r = r.slice(i + 1));
        var s = qt("Patches").$;
        return Kn(n)
          ? s(n, r)
          : this.produce(n, function (l) {
              return s(l, r);
            });
      }),
      e
    );
  })(),
  ht = new tj(),
  Pv = ht.produce;
ht.produceWithPatches.bind(ht);
ht.setAutoFreeze.bind(ht);
ht.setUseProxies.bind(ht);
ht.applyPatches.bind(ht);
ht.createDraft.bind(ht);
ht.finishDraft.bind(ht);
function ai(e) {
  "@babel/helpers - typeof";
  return (
    (ai =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ai(e)
  );
}
function nj(e, t) {
  if (ai(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ai(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Tv(e) {
  var t = nj(e, "string");
  return ai(t) === "symbol" ? t : String(t);
}
function F(e, t, n) {
  return (
    (t = Tv(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function hh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function mh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hh(Object(n), !0).forEach(function (r) {
          F(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : hh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function He(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var gh = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  eu = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  al = {
    INIT: "@@redux/INIT" + eu(),
    REPLACE: "@@redux/REPLACE" + eu(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + eu();
    },
  };
function rj(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Ov(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(He(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(He(1));
    return n(Ov)(e, t);
  }
  if (typeof e != "function") throw new Error(He(2));
  var i = e,
    o = t,
    s = [],
    l = s,
    a = !1;
  function c() {
    l === s && (l = s.slice());
  }
  function d() {
    if (a) throw new Error(He(3));
    return o;
  }
  function f(y) {
    if (typeof y != "function") throw new Error(He(4));
    if (a) throw new Error(He(5));
    var w = !0;
    return (
      c(),
      l.push(y),
      function () {
        if (w) {
          if (a) throw new Error(He(6));
          (w = !1), c();
          var g = l.indexOf(y);
          l.splice(g, 1), (s = null);
        }
      }
    );
  }
  function p(y) {
    if (!rj(y)) throw new Error(He(7));
    if (typeof y.type > "u") throw new Error(He(8));
    if (a) throw new Error(He(9));
    try {
      (a = !0), (o = i(o, y));
    } finally {
      a = !1;
    }
    for (var w = (s = l), m = 0; m < w.length; m++) {
      var g = w[m];
      g();
    }
    return y;
  }
  function h(y) {
    if (typeof y != "function") throw new Error(He(10));
    (i = y), p({ type: al.REPLACE });
  }
  function v() {
    var y,
      w = f;
    return (
      (y = {
        subscribe: function (g) {
          if (typeof g != "object" || g === null) throw new Error(He(11));
          function x() {
            g.next && g.next(d());
          }
          x();
          var S = w(x);
          return { unsubscribe: S };
        },
      }),
      (y[gh] = function () {
        return this;
      }),
      y
    );
  }
  return (
    p({ type: al.INIT }),
    (r = { dispatch: p, subscribe: f, getState: d, replaceReducer: h }),
    (r[gh] = v),
    r
  );
}
function ij(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: al.INIT });
    if (typeof r > "u") throw new Error(He(12));
    if (typeof n(void 0, { type: al.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(He(13));
  });
}
function oj(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var i = t[r];
    typeof e[i] == "function" && (n[i] = e[i]);
  }
  var o = Object.keys(n),
    s;
  try {
    ij(n);
  } catch (l) {
    s = l;
  }
  return function (a, c) {
    if ((a === void 0 && (a = {}), s)) throw s;
    for (var d = !1, f = {}, p = 0; p < o.length; p++) {
      var h = o[p],
        v = n[h],
        y = a[h],
        w = v(y, c);
      if (typeof w > "u") throw (c && c.type, new Error(He(14)));
      (f[h] = w), (d = d || w !== y);
    }
    return (d = d || o.length !== Object.keys(a).length), d ? f : a;
  };
}
function ul() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, i) {
        return function () {
          return r(i.apply(void 0, arguments));
        };
      });
}
function sj() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var i = r.apply(void 0, arguments),
        o = function () {
          throw new Error(He(15));
        },
        s = {
          getState: i.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        l = t.map(function (a) {
          return a(s);
        });
      return (
        (o = ul.apply(void 0, l)(i.dispatch)),
        mh(mh({}, i), {}, { dispatch: o })
      );
    };
  };
}
function _v(e) {
  var t = function (r) {
    var i = r.dispatch,
      o = r.getState;
    return function (s) {
      return function (l) {
        return typeof l == "function" ? l(i, o, e) : s(l);
      };
    };
  };
  return t;
}
var Lv = _v();
Lv.withExtraArgument = _v;
const vh = Lv;
var Nv =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, i) {
                r.__proto__ = i;
              }) ||
            function (r, i) {
              for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  lj =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (o[0] & 1) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        },
        r,
        i,
        o,
        s;
      return (
        (s = { next: l(0), throw: l(1), return: l(2) }),
        typeof Symbol == "function" &&
          (s[Symbol.iterator] = function () {
            return this;
          }),
        s
      );
      function l(c) {
        return function (d) {
          return a([c, d]);
        };
      }
      function a(c) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((r = 1),
              i &&
                (o =
                  c[0] & 2
                    ? i.return
                    : c[0]
                    ? i.throw || ((o = i.return) && o.call(i), 0)
                    : i.next) &&
                !(o = o.call(i, c[1])).done)
            )
              return o;
            switch (((i = 0), o && (c = [c[0] & 2, o.value]), c[0])) {
              case 0:
              case 1:
                o = c;
                break;
              case 4:
                return n.label++, { value: c[1], done: !1 };
              case 5:
                n.label++, (i = c[1]), (c = [0]);
                continue;
              case 7:
                (c = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((o = n.trys),
                  !(o = o.length > 0 && o[o.length - 1]) &&
                    (c[0] === 6 || c[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (c[0] === 3 && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                  n.label = c[1];
                  break;
                }
                if (c[0] === 6 && n.label < o[1]) {
                  (n.label = o[1]), (o = c);
                  break;
                }
                if (o && n.label < o[2]) {
                  (n.label = o[2]), n.ops.push(c);
                  break;
                }
                o[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            c = t.call(e, n);
          } catch (d) {
            (c = [6, d]), (i = 0);
          } finally {
            r = o = 0;
          }
        if (c[0] & 5) throw c[1];
        return { value: c[0] ? c[1] : void 0, done: !0 };
      }
    },
  ui =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
      return e;
    },
  aj = Object.defineProperty,
  uj = Object.defineProperties,
  cj = Object.getOwnPropertyDescriptors,
  yh = Object.getOwnPropertySymbols,
  dj = Object.prototype.hasOwnProperty,
  fj = Object.prototype.propertyIsEnumerable,
  xh = function (e, t, n) {
    return t in e
      ? aj(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  $n = function (e, t) {
    for (var n in t || (t = {})) dj.call(t, n) && xh(e, n, t[n]);
    if (yh)
      for (var r = 0, i = yh(t); r < i.length; r++) {
        var n = i[r];
        fj.call(t, n) && xh(e, n, t[n]);
      }
    return e;
  },
  tu = function (e, t) {
    return uj(e, cj(t));
  },
  pj = function (e, t, n) {
    return new Promise(function (r, i) {
      var o = function (a) {
          try {
            l(n.next(a));
          } catch (c) {
            i(c);
          }
        },
        s = function (a) {
          try {
            l(n.throw(a));
          } catch (c) {
            i(c);
          }
        },
        l = function (a) {
          return a.done ? r(a.value) : Promise.resolve(a.value).then(o, s);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  hj =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? ul
              : ul.apply(null, arguments);
        };
function mj(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var gj = (function (e) {
    Nv(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var i = e.apply(this, n) || this;
      return Object.setPrototypeOf(i, t.prototype), i;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, ui([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, ui([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array),
  vj = (function (e) {
    Nv(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var i = e.apply(this, n) || this;
      return Object.setPrototypeOf(i, t.prototype), i;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, ui([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, ui([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array);
function _c(e) {
  return fn(e) ? Pv(e, function () {}) : e;
}
function yj(e) {
  return typeof e == "boolean";
}
function xj() {
  return function (t) {
    return wj(t);
  };
}
function wj(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new gj();
  return (
    n && (yj(n) ? r.push(vh) : r.push(vh.withExtraArgument(n.extraArgument))), r
  );
}
var Sj = !0;
function bj(e) {
  var t = xj(),
    n = e || {},
    r = n.reducer,
    i = r === void 0 ? void 0 : r,
    o = n.middleware,
    s = o === void 0 ? t() : o,
    l = n.devTools,
    a = l === void 0 ? !0 : l,
    c = n.preloadedState,
    d = c === void 0 ? void 0 : c,
    f = n.enhancers,
    p = f === void 0 ? void 0 : f,
    h;
  if (typeof i == "function") h = i;
  else if (mj(i)) h = oj(i);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var v = s;
  typeof v == "function" && (v = v(t));
  var y = sj.apply(void 0, v),
    w = ul;
  a && (w = hj($n({ trace: !Sj }, typeof a == "object" && a)));
  var m = new vj(y),
    g = m;
  Array.isArray(p) ? (g = ui([y], p)) : typeof p == "function" && (g = p(m));
  var x = w.apply(void 0, g);
  return Ov(h, d, x);
}
function Fn(e, t) {
  function n() {
    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
    if (t) {
      var o = t.apply(void 0, r);
      if (!o) throw new Error("prepareAction did not return an object");
      return $n(
        $n({ type: e, payload: o.payload }, "meta" in o && { meta: o.meta }),
        "error" in o && { error: o.error }
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return "" + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
function Mv(e) {
  var t = {},
    n = [],
    r,
    i = {
      addCase: function (o, s) {
        var l = typeof o == "string" ? o : o.type;
        if (l in t)
          throw new Error(
            "addCase cannot be called with two reducers for the same action type"
          );
        return (t[l] = s), i;
      },
      addMatcher: function (o, s) {
        return n.push({ matcher: o, reducer: s }), i;
      },
      addDefaultCase: function (o) {
        return (r = o), i;
      },
    };
  return e(i), [t, n, r];
}
function jj(e) {
  return typeof e == "function";
}
function Ej(e, t, n, r) {
  n === void 0 && (n = []);
  var i = typeof t == "function" ? Mv(t) : [t, n, r],
    o = i[0],
    s = i[1],
    l = i[2],
    a;
  if (jj(e))
    a = function () {
      return _c(e());
    };
  else {
    var c = _c(e);
    a = function () {
      return c;
    };
  }
  function d(f, p) {
    f === void 0 && (f = a());
    var h = ui(
      [o[p.type]],
      s
        .filter(function (v) {
          var y = v.matcher;
          return y(p);
        })
        .map(function (v) {
          var y = v.reducer;
          return y;
        })
    );
    return (
      h.filter(function (v) {
        return !!v;
      }).length === 0 && (h = [l]),
      h.reduce(function (v, y) {
        if (y)
          if (Kn(v)) {
            var w = v,
              m = y(w, p);
            return m === void 0 ? v : m;
          } else {
            if (fn(v))
              return Pv(v, function (g) {
                return y(g, p);
              });
            var m = y(v, p);
            if (m === void 0) {
              if (v === null) return v;
              throw Error(
                "A case reducer on a non-draftable value must not return undefined"
              );
            }
            return m;
          }
        return v;
      }, f)
    );
  }
  return (d.getInitialState = a), d;
}
function kj(e, t) {
  return e + "/" + t;
}
function gi(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var n =
      typeof e.initialState == "function" ? e.initialState : _c(e.initialState),
    r = e.reducers || {},
    i = Object.keys(r),
    o = {},
    s = {},
    l = {};
  i.forEach(function (d) {
    var f = r[d],
      p = kj(t, d),
      h,
      v;
    "reducer" in f ? ((h = f.reducer), (v = f.prepare)) : (h = f),
      (o[d] = h),
      (s[p] = h),
      (l[d] = v ? Fn(p, v) : Fn(p));
  });
  function a() {
    var d =
        typeof e.extraReducers == "function"
          ? Mv(e.extraReducers)
          : [e.extraReducers],
      f = d[0],
      p = f === void 0 ? {} : f,
      h = d[1],
      v = h === void 0 ? [] : h,
      y = d[2],
      w = y === void 0 ? void 0 : y,
      m = $n($n({}, p), s);
    return Ej(n, function (g) {
      for (var x in m) g.addCase(x, m[x]);
      for (var S = 0, j = v; S < j.length; S++) {
        var E = j[S];
        g.addMatcher(E.matcher, E.reducer);
      }
      w && g.addDefaultCase(w);
    });
  }
  var c;
  return {
    name: t,
    reducer: function (d, f) {
      return c || (c = a()), c(d, f);
    },
    actions: l,
    caseReducers: o,
    getInitialState: function () {
      return c || (c = a()), c.getInitialState();
    },
  };
}
var Cj = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  Pj = function (e) {
    e === void 0 && (e = 21);
    for (var t = "", n = e; n--; ) t += Cj[(Math.random() * 64) | 0];
    return t;
  },
  Tj = ["name", "message", "stack", "code"],
  nu = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  wh = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  Oj = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, n = 0, r = Tj; n < r.length; n++) {
        var i = r[n];
        typeof e[i] == "string" && (t[i] = e[i]);
      }
      return t;
    }
    return { message: String(e) };
  },
  ua = (function () {
    function e(t, n, r) {
      var i = Fn(t + "/fulfilled", function (c, d, f, p) {
          return {
            payload: c,
            meta: tu($n({}, p || {}), {
              arg: f,
              requestId: d,
              requestStatus: "fulfilled",
            }),
          };
        }),
        o = Fn(t + "/pending", function (c, d, f) {
          return {
            payload: void 0,
            meta: tu($n({}, f || {}), {
              arg: d,
              requestId: c,
              requestStatus: "pending",
            }),
          };
        }),
        s = Fn(t + "/rejected", function (c, d, f, p, h) {
          return {
            payload: p,
            error: ((r && r.serializeError) || Oj)(c || "Rejected"),
            meta: tu($n({}, h || {}), {
              arg: f,
              requestId: d,
              rejectedWithValue: !!p,
              requestStatus: "rejected",
              aborted: (c == null ? void 0 : c.name) === "AbortError",
              condition: (c == null ? void 0 : c.name) === "ConditionError",
            }),
          };
        }),
        l =
          typeof AbortController < "u"
            ? AbortController
            : (function () {
                function c() {
                  this.signal = {
                    aborted: !1,
                    addEventListener: function () {},
                    dispatchEvent: function () {
                      return !1;
                    },
                    onabort: function () {},
                    removeEventListener: function () {},
                    reason: void 0,
                    throwIfAborted: function () {},
                  };
                }
                return (c.prototype.abort = function () {}), c;
              })();
      function a(c) {
        return function (d, f, p) {
          var h = r != null && r.idGenerator ? r.idGenerator(c) : Pj(),
            v = new l(),
            y;
          function w(g) {
            (y = g), v.abort();
          }
          var m = (function () {
            return pj(this, null, function () {
              var g, x, S, j, E, k, T;
              return lj(this, function (O) {
                switch (O.label) {
                  case 0:
                    return (
                      O.trys.push([0, 4, , 5]),
                      (j =
                        (g = r == null ? void 0 : r.condition) == null
                          ? void 0
                          : g.call(r, c, { getState: f, extra: p })),
                      Lj(j) ? [4, j] : [3, 2]
                    );
                  case 1:
                    (j = O.sent()), (O.label = 2);
                  case 2:
                    if (j === !1 || v.signal.aborted)
                      throw {
                        name: "ConditionError",
                        message:
                          "Aborted due to condition callback returning false.",
                      };
                    return (
                      (E = new Promise(function (L, C) {
                        return v.signal.addEventListener("abort", function () {
                          return C({
                            name: "AbortError",
                            message: y || "Aborted",
                          });
                        });
                      })),
                      d(
                        o(
                          h,
                          c,
                          (x = r == null ? void 0 : r.getPendingMeta) == null
                            ? void 0
                            : x.call(
                                r,
                                { requestId: h, arg: c },
                                { getState: f, extra: p }
                              )
                        )
                      ),
                      [
                        4,
                        Promise.race([
                          E,
                          Promise.resolve(
                            n(c, {
                              dispatch: d,
                              getState: f,
                              extra: p,
                              requestId: h,
                              signal: v.signal,
                              abort: w,
                              rejectWithValue: function (L, C) {
                                return new nu(L, C);
                              },
                              fulfillWithValue: function (L, C) {
                                return new wh(L, C);
                              },
                            })
                          ).then(function (L) {
                            if (L instanceof nu) throw L;
                            return L instanceof wh
                              ? i(L.payload, h, c, L.meta)
                              : i(L, h, c);
                          }),
                        ]),
                      ]
                    );
                  case 3:
                    return (S = O.sent()), [3, 5];
                  case 4:
                    return (
                      (k = O.sent()),
                      (S =
                        k instanceof nu
                          ? s(null, h, c, k.payload, k.meta)
                          : s(k, h, c)),
                      [3, 5]
                    );
                  case 5:
                    return (
                      (T =
                        r &&
                        !r.dispatchConditionRejection &&
                        s.match(S) &&
                        S.meta.condition),
                      T || d(S),
                      [2, S]
                    );
                }
              });
            });
          })();
          return Object.assign(m, {
            abort: w,
            requestId: h,
            arg: c,
            unwrap: function () {
              return m.then(_j);
            },
          });
        };
      }
      return Object.assign(a, {
        pending: o,
        rejected: s,
        fulfilled: i,
        typePrefix: t,
      });
    }
    return (
      (e.withTypes = function () {
        return e;
      }),
      e
    );
  })();
function _j(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function Lj(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var sf = "listenerMiddleware";
Fn(sf + "/add");
Fn(sf + "/removeAll");
Fn(sf + "/remove");
var Sh;
typeof queueMicrotask == "function" &&
  queueMicrotask.bind(
    typeof window < "u" ? window : typeof global < "u" ? global : globalThis
  );
Y3();
const Nj = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  status: "idle",
  isplay: !1,
  login_UserID: "",
  login_UserPassword: "",
  playListtog: !1,
  selectedSong: [],
};
function bh(e) {
  const t = [...e];
  return t.sort(() => Math.random() - 0.5), t;
}
const Av = gi({
    name: "user",
    initialState: Nj,
    reducers: {
      playListToggle(e, t) {
        e.playListtog = !e.playListtog;
      },
      changeInputID(e, t) {
        e.login_UserID = t.payload;
      },
      changeInputPassword(e, t) {
        e.login_UserPassword = t.payload;
      },
      loginOnSubmit(e, t) {
        const n = t.payload;
        console.log(n),
          n
            ? (n.user && n.user.pick && n.user.playList && n.user.playmusic
                ? (e.user = {
                    login_UserID: n.UserID,
                    login_UserPassword: n.UserPassword,
                    ...n.user,
                  })
                : (e.user = {
                    login_UserID: n.UserID,
                    login_UserPassword: n.UserPassword,
                    pick: [],
                    playList: [],
                    playmusic: [],
                  }),
              localStorage.setItem("user", JSON.stringify(e.user)),
              (e.isplay = !0))
            : (localStorage.removeItem("user"),
              (e.user = null),
              (e.isplay = !1),
              alert("정보를 다시 확인해 주세요"));
      },
      LOGOUT(e, t) {
        localStorage.removeItem("user"), (e.user = null), (e.isplay = !1);
      },
      userAdd(e, t) {
        e.user.pick === void 0 && (e.user.pick = []),
          e.user.pick.push(t.payload),
          localStorage.setItem("user", JSON.stringify(e.user));
      },
      playListAdd(e, t) {
        e.user.playList === void 0 && (e.user.playList = []),
          (e.user.playList = [...t.payload]),
          localStorage.setItem("user", JSON.stringify(e.user));
      },
      addMusicplay(e, t) {
        if (!e.user) return alert("로그인 후 이용해주세요");
        (e.user.playmusic = []),
          e.user.playmusic.push(t.payload),
          localStorage.setItem("user", JSON.stringify(e.user));
      },
      addplaylist(e, t) {
        if (!e.user) return alert("로그인 후 이용해주세요");
        e.user.playList.push(t.payload),
          localStorage.setItem("user", JSON.stringify(e.user));
      },
      allAddPlayList(e, t) {
        if (!e.user) return alert("로그인 후 이용해주세요");
        (e.user.playList = e.user.playList.concat(...t.payload)),
          (e.user.playmusic = e.user.playList),
          localStorage.setItem("user", JSON.stringify(e.user));
      },
      removeplaylist(e, t) {
        if (!e.user) return alert("로그인 후 이용해주세요");
        (e.user.playList = e.user.playList.filter((n) => n.name !== t.payload)),
          localStorage.setItem("user", JSON.stringify(e.user));
      },
      allremoveplaylist(e, t) {
        (e.user.playList = []),
          (e.user.playmusic = []),
          localStorage.setItem("user", JSON.stringify(e.user));
      },
      addplayListMusic(e, t) {
        if (!e.user) return alert("로그인 후 이용해주세요");
        (e.user.playmusic = []),
          (e.selectedSong = []),
          (e.user.playmusic = e.user.playmusic.concat(t.payload)),
          localStorage.setItem("user", JSON.stringify(e.user));
      },
      playListandPlay(e, t) {
        t.payload !== void 0 && (e.selectedSong = t.payload);
      },
      randomPlayList(e, t) {
        e.user &&
          e.user.playList &&
          ((e.user.playList = bh(e.user.playList)),
          (e.user.playmusic = e.user.playList),
          localStorage.setItem("user", JSON.stringify(e.user)));
      },
      AllRandomPlayList(e, t) {
        const n = bh(t.payload);
        (e.user.playList = e.user.playList.concat(...n)),
          (e.user.playmusic = e.user.playList),
          localStorage.setItem("user", JSON.stringify(e.user));
      },
    },
  }),
  {
    changeInputID: Mj,
    changeInputPassword: Aj,
    loginOnSubmit: Rj,
    LOGOUT: Ij,
    userAdd: jh,
    playListToggle: Rv,
    playListAdd: f5,
    addMusicplay: Iv,
    addplayListMusic: zj,
    addplaylist: ca,
    removeplaylist: zv,
    allremoveplaylist: Dj,
    allAddPlayList: $j,
    playListandPlay: p5,
    randomPlayList: Fj,
    AllRandomPlayList: Uj,
  } = Av.actions,
  Bj = Av.reducer,
  Lc = b.memo(({ z: e }) => {
    const t = Se();
    if ((X((i) => i.user), !e)) return;
    const n = e.album ? "kor" : "billboard",
      r = (i) => {
        t(Iv(i));
      };
    return u.jsxs(Sb, {
      children: [
        e.image
          ? u.jsx("img", {
              src: n === "kor" ? `./${e.image}` : `${e.image}`,
              alt: "",
              onClick: () => r(e),
            })
          : "",
        u.jsxs("div", {
          children: [
            u.jsx("span", { children: e.rank }),
            u.jsxs("span", {
              children: [
                e.rank < e.last_week_rank || e.last_week_rank === null
                  ? u.jsx(Db, { style: { color: "red" } })
                  : "",
                e.rank > e.last_week_rank && e.last_week_rank !== null
                  ? u.jsx(zb, { style: { color: "blue" } })
                  : "",
                e.rank === e.last_week_rank &&
                  u.jsx(Jb, { style: { color: "gray", fontWeight: 800 } }),
              ],
            }),
          ],
        }),
        u.jsxs("div", {
          children: [
            u.jsx(qe, { to: `/chart/${e.rank}/${n}`, children: e.name }),
            u.jsx("h4", {
              className: "content",
              children: u.jsx(qe, {
                to: `/chart/${n}/${e.artist}/artist`,
                children: e.artist,
              }),
            }),
          ],
        }),
      ],
    });
  }),
  Vj = b.memo(() => {
    const { playListtog: e, user: t } = X((d) => d.user),
      [n, r] = b.useState([]),
      [i, o] = b.useState(!0),
      [s, l] = b.useState(null),
      a = Se();
    if (
      (b.useEffect(() => {
        (async () => {
          try {
            const f = await To.get(
              "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json"
            );
            r(f.data.data), o(!1);
          } catch (f) {
            console.error(f), l(f), o(!1);
          }
        })();
      }, []),
      i)
    )
      return u.jsx("div", { children: "Loading..." });
    if (s) return u.jsxs("div", { children: ["Error: ", s.message] });
    const c = (d) => {
      !t || !t.playList ? alert("로그인 후 재생이 가능합니다.") : a(zj(d));
    };
    return u.jsxs(xb, {
      className: e ? "on" : "",
      children: [
        u.jsx("div", {
          className: "cover",
          children:
            t && t.playList && t.playList.length > 0
              ? u.jsx("img", {
                  src:
                    t.playList[0].peak_rank === ""
                      ? `./${t.playList[0].image}`
                      : `${t.playList[0].image}`,
                  alt: "",
                })
              : t && t.playList && t.playList.length === 0
              ? null
              : u.jsx("img", { src: n[0].image, alt: "" }),
        }),
        u.jsxs("div", {
          className: "playmusiclist",
          children: [
            u.jsxs("div", {
              className: "playbutbox",
              children: [
                u.jsx("h2", { children: "플레이 리스트" }),
                u.jsxs("div", {
                  className: "playlistbut",
                  children: [
                    u.jsx("h2", {
                      onClick: () => a(Dj()),
                      children: u.jsx(t3, {}),
                    }),
                    u.jsx("h2", {
                      onClick: () => a(Fj(t.playList)),
                      children: u.jsx(uv, {}),
                    }),
                    u.jsx("h2", {
                      children: t
                        ? u.jsx(rh, { onClick: () => c(t.playList) })
                        : u.jsx(rh, { onClick: () => c(n) }),
                    }),
                  ],
                }),
              ],
            }),
            u.jsx("ul", {
              children: t
                ? t.playList.map((d, f) => u.jsx(Lc, { z: d }, f))
                : n.map((d, f) => u.jsx(Lc, { z: d }, f)),
            }),
          ],
        }),
      ],
    });
  });
function _o(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Eh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, Tv(r.key), r);
  }
}
function Lo(e, t, n) {
  return (
    t && Eh(e.prototype, t),
    n && Eh(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function U(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Nc(e, t) {
  return (
    (Nc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Nc(e, t)
  );
}
function No(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Nc(e, t);
}
function Mo(e, t) {
  if (t && (ai(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return U(e);
}
function Pt(e) {
  return (
    (Pt = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Pt(e)
  );
}
const Vi = /^[a-z0-9]+(-[a-z0-9]+)*$/,
  Wt = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16,
    rotate: 0,
    vFlip: !1,
    hFlip: !1,
  });
function lf(e) {
  return { ...Wt, ...e };
}
const da = (e, t, n, r = "") => {
    const i = e.split(":");
    if (e.slice(0, 1) === "@") {
      if (i.length < 2 || i.length > 3) return null;
      r = i.shift().slice(1);
    }
    if (i.length > 3 || !i.length) return null;
    if (i.length > 1) {
      const l = i.pop(),
        a = i.pop(),
        c = { provider: i.length > 0 ? i[0] : r, prefix: a, name: l };
      return t && !Hi(c) ? null : c;
    }
    const o = i[0],
      s = o.split("-");
    if (s.length > 1) {
      const l = { provider: r, prefix: s.shift(), name: s.join("-") };
      return t && !Hi(l) ? null : l;
    }
    if (n && r === "") {
      const l = { provider: r, prefix: "", name: o };
      return t && !Hi(l, n) ? null : l;
    }
    return null;
  },
  Hi = (e, t) =>
    e
      ? !!(
          (e.provider === "" || e.provider.match(Vi)) &&
          ((t && e.prefix === "") || e.prefix.match(Vi)) &&
          e.name.match(Vi)
        )
      : !1;
function Hj(e, t) {
  const n = { ...e };
  for (const r in Wt) {
    const i = r;
    if (t[i] !== void 0) {
      const o = t[i];
      if (n[i] === void 0) {
        n[i] = o;
        continue;
      }
      switch (i) {
        case "rotate":
          n[i] = (n[i] + o) % 4;
          break;
        case "hFlip":
        case "vFlip":
          n[i] = o !== n[i];
          break;
        default:
          n[i] = o;
      }
    }
  }
  return n;
}
function kh(e, t, n = !1) {
  function r(o, s) {
    if (e.icons[o] !== void 0) return Object.assign({}, e.icons[o]);
    if (s > 5) return null;
    const l = e.aliases;
    if (l && l[o] !== void 0) {
      const c = l[o],
        d = r(c.parent, s + 1);
      return d && Hj(d, c);
    }
    const a = e.chars;
    return !s && a && a[o] !== void 0 ? r(a[o], s + 1) : null;
  }
  const i = r(t, 0);
  if (i)
    for (const o in Wt) i[o] === void 0 && e[o] !== void 0 && (i[o] = e[o]);
  return i && n ? lf(i) : i;
}
function Wj(e) {
  for (const t in Wt) if (e[t] !== void 0) return !0;
  return !1;
}
function Dv(e, t, n) {
  n = n || {};
  const r = [];
  if (typeof e != "object" || typeof e.icons != "object") return r;
  e.not_found instanceof Array &&
    e.not_found.forEach((s) => {
      t(s, null), r.push(s);
    });
  const i = e.icons;
  Object.keys(i).forEach((s) => {
    const l = kh(e, s, !0);
    l && (t(s, l), r.push(s));
  });
  const o = n.aliases || "all";
  if (o !== "none" && typeof e.aliases == "object") {
    const s = e.aliases;
    Object.keys(s).forEach((l) => {
      if (o === "variations" && Wj(s[l])) return;
      const a = kh(e, l, !0);
      a && (t(l, a), r.push(l));
    });
  }
  return r;
}
const Mc = { provider: "string", aliases: "object", not_found: "object" };
for (const e in Wt) Mc[e] = typeof Wt[e];
function $v(e) {
  if (typeof e != "object" || e === null) return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object")
    return null;
  for (const i in Mc) if (e[i] !== void 0 && typeof e[i] !== Mc[i]) return null;
  const n = t.icons;
  for (const i in n) {
    const o = n[i];
    if (!i.match(Vi) || typeof o.body != "string") return null;
    for (const s in Wt)
      if (o[s] !== void 0 && typeof o[s] != typeof Wt[s]) return null;
  }
  const r = t.aliases;
  if (r)
    for (const i in r) {
      const o = r[i],
        s = o.parent;
      if (!i.match(Vi) || typeof s != "string" || (!n[s] && !r[s])) return null;
      for (const l in Wt)
        if (o[l] !== void 0 && typeof o[l] != typeof Wt[l]) return null;
    }
  return t;
}
const Gj = 1;
let ks = Object.create(null);
try {
  const e = window || self;
  e && e._iconifyStorage.version === Gj && (ks = e._iconifyStorage.storage);
} catch {}
function Kj(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: Object.create(null),
    missing: Object.create(null),
  };
}
function Sr(e, t) {
  ks[e] === void 0 && (ks[e] = Object.create(null));
  const n = ks[e];
  return n[t] === void 0 && (n[t] = Kj(e, t)), n[t];
}
function af(e, t) {
  if (!$v(t)) return [];
  const n = Date.now();
  return Dv(t, (r, i) => {
    i ? (e.icons[r] = i) : (e.missing[r] = n);
  });
}
function qj(e, t, n) {
  try {
    if (typeof n.body == "string")
      return (e.icons[t] = Object.freeze(lf(n))), !0;
  } catch {}
  return !1;
}
function Jj(e, t) {
  const n = e.icons[t];
  return n === void 0 ? null : n;
}
let vo = !1;
function Fv(e) {
  return typeof e == "boolean" && (vo = e), vo;
}
function Qj(e) {
  const t = typeof e == "string" ? da(e, !0, vo) : e;
  return t ? Jj(Sr(t.provider, t.prefix), t.name) : null;
}
function Yj(e, t) {
  const n = da(e, !0, vo);
  if (!n) return !1;
  const r = Sr(n.provider, n.prefix);
  return qj(r, n.name, t);
}
function Xj(e, t) {
  if (typeof e != "object") return !1;
  if (
    (typeof t != "string" &&
      (t = typeof e.provider == "string" ? e.provider : ""),
    vo && t === "" && (typeof e.prefix != "string" || e.prefix === ""))
  ) {
    let r = !1;
    return (
      $v(e) &&
        ((e.prefix = ""),
        Dv(e, (i, o) => {
          o && Yj(i, o) && (r = !0);
        })),
      r
    );
  }
  if (
    typeof e.prefix != "string" ||
    !Hi({ provider: t, prefix: e.prefix, name: "a" })
  )
    return !1;
  const n = Sr(t, e.prefix);
  return !!af(n, e);
}
const Uv = Object.freeze({
  inline: !1,
  width: null,
  height: null,
  hAlign: "center",
  vAlign: "middle",
  slice: !1,
  hFlip: !1,
  vFlip: !1,
  rotate: 0,
});
function Zj(e, t) {
  const n = {};
  for (const r in e) {
    const i = r;
    if (((n[i] = e[i]), t[i] === void 0)) continue;
    const o = t[i];
    switch (i) {
      case "inline":
      case "slice":
        typeof o == "boolean" && (n[i] = o);
        break;
      case "hFlip":
      case "vFlip":
        o === !0 && (n[i] = !n[i]);
        break;
      case "hAlign":
      case "vAlign":
        typeof o == "string" && o !== "" && (n[i] = o);
        break;
      case "width":
      case "height":
        ((typeof o == "string" && o !== "") ||
          (typeof o == "number" && o) ||
          o === null) &&
          (n[i] = o);
        break;
      case "rotate":
        typeof o == "number" && (n[i] += o);
        break;
    }
  }
  return n;
}
const eE = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
  tE = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ru(e, t, n) {
  if (t === 1) return e;
  if (((n = n === void 0 ? 100 : n), typeof e == "number"))
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string") return e;
  const r = e.split(eE);
  if (r === null || !r.length) return e;
  const i = [];
  let o = r.shift(),
    s = tE.test(o);
  for (;;) {
    if (s) {
      const l = parseFloat(o);
      isNaN(l) ? i.push(o) : i.push(Math.ceil(l * t * n) / n);
    } else i.push(o);
    if (((o = r.shift()), o === void 0)) return i.join("");
    s = !s;
  }
}
function nE(e) {
  let t = "";
  switch (e.hAlign) {
    case "left":
      t += "xMin";
      break;
    case "right":
      t += "xMax";
      break;
    default:
      t += "xMid";
  }
  switch (e.vAlign) {
    case "top":
      t += "YMin";
      break;
    case "bottom":
      t += "YMax";
      break;
    default:
      t += "YMid";
  }
  return (t += e.slice ? " slice" : " meet"), t;
}
function rE(e, t) {
  const n = { left: e.left, top: e.top, width: e.width, height: e.height };
  let r = e.body;
  [e, t].forEach((l) => {
    const a = [],
      c = l.hFlip,
      d = l.vFlip;
    let f = l.rotate;
    c
      ? d
        ? (f += 2)
        : (a.push(
            "translate(" +
              (n.width + n.left).toString() +
              " " +
              (0 - n.top).toString() +
              ")"
          ),
          a.push("scale(-1 1)"),
          (n.top = n.left = 0))
      : d &&
        (a.push(
          "translate(" +
            (0 - n.left).toString() +
            " " +
            (n.height + n.top).toString() +
            ")"
        ),
        a.push("scale(1 -1)"),
        (n.top = n.left = 0));
    let p;
    switch ((f < 0 && (f -= Math.floor(f / 4) * 4), (f = f % 4), f)) {
      case 1:
        (p = n.height / 2 + n.top),
          a.unshift("rotate(90 " + p.toString() + " " + p.toString() + ")");
        break;
      case 2:
        a.unshift(
          "rotate(180 " +
            (n.width / 2 + n.left).toString() +
            " " +
            (n.height / 2 + n.top).toString() +
            ")"
        );
        break;
      case 3:
        (p = n.width / 2 + n.left),
          a.unshift("rotate(-90 " + p.toString() + " " + p.toString() + ")");
        break;
    }
    f % 2 === 1 &&
      ((n.left !== 0 || n.top !== 0) &&
        ((p = n.left), (n.left = n.top), (n.top = p)),
      n.width !== n.height &&
        ((p = n.width), (n.width = n.height), (n.height = p))),
      a.length && (r = '<g transform="' + a.join(" ") + '">' + r + "</g>");
  });
  let i, o;
  t.width === null && t.height === null
    ? ((o = "1em"), (i = ru(o, n.width / n.height)))
    : t.width !== null && t.height !== null
    ? ((i = t.width), (o = t.height))
    : t.height !== null
    ? ((o = t.height), (i = ru(o, n.width / n.height)))
    : ((i = t.width), (o = ru(i, n.height / n.width))),
    i === "auto" && (i = n.width),
    o === "auto" && (o = n.height),
    (i = typeof i == "string" ? i : i.toString() + ""),
    (o = typeof o == "string" ? o : o.toString() + "");
  const s = {
    attributes: {
      width: i,
      height: o,
      preserveAspectRatio: nE(t),
      viewBox:
        n.left.toString() +
        " " +
        n.top.toString() +
        " " +
        n.width.toString() +
        " " +
        n.height.toString(),
    },
    body: r,
  };
  return t.inline && (s.inline = !0), s;
}
const iE = /\sid="(\S+)"/g,
  oE =
    "IconifyId" +
    Date.now().toString(16) +
    ((Math.random() * 16777216) | 0).toString(16);
let sE = 0;
function lE(e, t = oE) {
  const n = [];
  let r;
  for (; (r = iE.exec(e)); ) n.push(r[1]);
  return (
    n.length &&
      n.forEach((i) => {
        const o = typeof t == "function" ? t(i) : t + (sE++).toString(),
          s = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        e = e.replace(
          new RegExp('([#;"])(' + s + ')([")]|\\.[a-z])', "g"),
          "$1" + o + "$3"
        );
      }),
    e
  );
}
const Ac = Object.create(null);
function aE(e, t) {
  Ac[e] = t;
}
function Rc(e) {
  return Ac[e] || Ac[""];
}
function uf(e) {
  let t;
  if (typeof e.resources == "string") t = [e.resources];
  else if (((t = e.resources), !(t instanceof Array) || !t.length)) return null;
  return {
    resources: t,
    path: e.path === void 0 ? "/" : e.path,
    maxURL: e.maxURL ? e.maxURL : 500,
    rotate: e.rotate ? e.rotate : 750,
    timeout: e.timeout ? e.timeout : 5e3,
    random: e.random === !0,
    index: e.index ? e.index : 0,
    dataAfterTimeout: e.dataAfterTimeout !== !1,
  };
}
const cf = Object.create(null),
  Ci = ["https://api.simplesvg.com", "https://api.unisvg.com"],
  Cs = [];
for (; Ci.length > 0; )
  Ci.length === 1 || Math.random() > 0.5
    ? Cs.push(Ci.shift())
    : Cs.push(Ci.pop());
cf[""] = uf({ resources: ["https://api.iconify.design"].concat(Cs) });
function uE(e, t) {
  const n = uf(t);
  return n === null ? !1 : ((cf[e] = n), !0);
}
function df(e) {
  return cf[e];
}
const Bv = (e, t) => {
    let n = e,
      r = n.indexOf("?") !== -1;
    function i(o) {
      switch (typeof o) {
        case "boolean":
          return o ? "true" : "false";
        case "number":
          return encodeURIComponent(o);
        case "string":
          return encodeURIComponent(o);
        default:
          throw new Error("Invalid parameter");
      }
    }
    return (
      Object.keys(t).forEach((o) => {
        let s;
        try {
          s = i(t[o]);
        } catch {
          return;
        }
        (n += (r ? "&" : "?") + encodeURIComponent(o) + "=" + s), (r = !0);
      }),
      n
    );
  },
  Vv = {},
  Ps = {},
  cE = () => {
    let e;
    try {
      if (((e = fetch), typeof e == "function")) return e;
    } catch {}
    return null;
  };
let Ch = cE();
function dE(e, t) {
  const n = df(e);
  if (!n) return 0;
  let r;
  if (!n.maxURL) r = 0;
  else {
    let o = 0;
    n.resources.forEach((l) => {
      o = Math.max(o, l.length);
    });
    const s = Bv(t + ".json", { icons: "" });
    r = n.maxURL - o - n.path.length - s.length;
  }
  const i = e + ":" + t;
  return (Ps[e] = n.path), (Vv[i] = r), r;
}
function fE(e) {
  return e === 404;
}
const pE = (e, t, n) => {
  const r = [];
  let i = Vv[t];
  i === void 0 && (i = dE(e, t));
  const o = "icons";
  let s = { type: o, provider: e, prefix: t, icons: [] },
    l = 0;
  return (
    n.forEach((a, c) => {
      (l += a.length + 1),
        l >= i &&
          c > 0 &&
          (r.push(s),
          (s = { type: o, provider: e, prefix: t, icons: [] }),
          (l = a.length)),
        s.icons.push(a);
    }),
    r.push(s),
    r
  );
};
function hE(e) {
  if (typeof e == "string") {
    if (Ps[e] === void 0) {
      const t = df(e);
      if (!t) return "/";
      Ps[e] = t.path;
    }
    return Ps[e];
  }
  return "/";
}
const mE = (e, t, n) => {
    if (!Ch) {
      n("abort", 424);
      return;
    }
    let r = hE(t.provider);
    switch (t.type) {
      case "icons": {
        const o = t.prefix,
          l = t.icons.join(",");
        r += Bv(o + ".json", { icons: l });
        break;
      }
      case "custom": {
        const o = t.uri;
        r += o.slice(0, 1) === "/" ? o.slice(1) : o;
        break;
      }
      default:
        n("abort", 400);
        return;
    }
    let i = 503;
    Ch(e + r)
      .then((o) => {
        const s = o.status;
        if (s !== 200) {
          setTimeout(() => {
            n(fE(s) ? "abort" : "next", s);
          });
          return;
        }
        return (i = 501), o.json();
      })
      .then((o) => {
        if (typeof o != "object" || o === null) {
          setTimeout(() => {
            n("next", i);
          });
          return;
        }
        setTimeout(() => {
          n("success", o);
        });
      })
      .catch(() => {
        n("next", i);
      });
  },
  gE = { prepare: pE, send: mE };
function vE(e) {
  const t = { loaded: [], missing: [], pending: [] },
    n = Object.create(null);
  e.sort((i, o) =>
    i.provider !== o.provider
      ? i.provider.localeCompare(o.provider)
      : i.prefix !== o.prefix
      ? i.prefix.localeCompare(o.prefix)
      : i.name.localeCompare(o.name)
  );
  let r = { provider: "", prefix: "", name: "" };
  return (
    e.forEach((i) => {
      if (
        r.name === i.name &&
        r.prefix === i.prefix &&
        r.provider === i.provider
      )
        return;
      r = i;
      const o = i.provider,
        s = i.prefix,
        l = i.name;
      n[o] === void 0 && (n[o] = Object.create(null));
      const a = n[o];
      a[s] === void 0 && (a[s] = Sr(o, s));
      const c = a[s];
      let d;
      c.icons[l] !== void 0
        ? (d = t.loaded)
        : s === "" || c.missing[l] !== void 0
        ? (d = t.missing)
        : (d = t.pending);
      const f = { provider: o, prefix: s, name: l };
      d.push(f);
    }),
    t
  );
}
const Un = Object.create(null),
  iu = Object.create(null);
function Hv(e, t) {
  e.forEach((n) => {
    const r = n.provider;
    if (Un[r] === void 0) return;
    const i = Un[r],
      o = n.prefix,
      s = i[o];
    s && (i[o] = s.filter((l) => l.id !== t));
  });
}
function yE(e, t) {
  iu[e] === void 0 && (iu[e] = Object.create(null));
  const n = iu[e];
  n[t] ||
    ((n[t] = !0),
    setTimeout(() => {
      if (((n[t] = !1), Un[e] === void 0 || Un[e][t] === void 0)) return;
      const r = Un[e][t].slice(0);
      if (!r.length) return;
      const i = Sr(e, t);
      let o = !1;
      r.forEach((s) => {
        const l = s.icons,
          a = l.pending.length;
        (l.pending = l.pending.filter((c) => {
          if (c.prefix !== t) return !0;
          const d = c.name;
          if (i.icons[d] !== void 0)
            l.loaded.push({ provider: e, prefix: t, name: d });
          else if (i.missing[d] !== void 0)
            l.missing.push({ provider: e, prefix: t, name: d });
          else return (o = !0), !0;
          return !1;
        })),
          l.pending.length !== a &&
            (o || Hv([{ provider: e, prefix: t }], s.id),
            s.callback(
              l.loaded.slice(0),
              l.missing.slice(0),
              l.pending.slice(0),
              s.abort
            ));
      });
    }));
}
let xE = 0;
function wE(e, t, n) {
  const r = xE++,
    i = Hv.bind(null, n, r);
  if (!t.pending.length) return i;
  const o = { id: r, icons: t, callback: e, abort: i };
  return (
    n.forEach((s) => {
      const l = s.provider,
        a = s.prefix;
      Un[l] === void 0 && (Un[l] = Object.create(null));
      const c = Un[l];
      c[a] === void 0 && (c[a] = []), c[a].push(o);
    }),
    i
  );
}
function SE(e, t = !0, n = !1) {
  const r = [];
  return (
    e.forEach((i) => {
      const o = typeof i == "string" ? da(i, !1, n) : i;
      (!t || Hi(o, n)) &&
        r.push({ provider: o.provider, prefix: o.prefix, name: o.name });
    }),
    r
  );
}
var Ph = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1,
};
function bE(e, t, n, r) {
  const i = e.resources.length,
    o = e.random ? Math.floor(Math.random() * i) : e.index;
  let s;
  if (e.random) {
    let E = e.resources.slice(0);
    for (s = []; E.length > 1; ) {
      const k = Math.floor(Math.random() * E.length);
      s.push(E[k]), (E = E.slice(0, k).concat(E.slice(k + 1)));
    }
    s = s.concat(E);
  } else s = e.resources.slice(o).concat(e.resources.slice(0, o));
  const l = Date.now();
  let a = "pending",
    c = 0,
    d,
    f = null,
    p = [],
    h = [];
  typeof r == "function" && h.push(r);
  function v() {
    f && (clearTimeout(f), (f = null));
  }
  function y() {
    a === "pending" && (a = "aborted"),
      v(),
      p.forEach((E) => {
        E.status === "pending" && (E.status = "aborted");
      }),
      (p = []);
  }
  function w(E, k) {
    k && (h = []), typeof E == "function" && h.push(E);
  }
  function m() {
    return {
      startTime: l,
      payload: t,
      status: a,
      queriesSent: c,
      queriesPending: p.length,
      subscribe: w,
      abort: y,
    };
  }
  function g() {
    (a = "failed"),
      h.forEach((E) => {
        E(void 0, d);
      });
  }
  function x() {
    p.forEach((E) => {
      E.status === "pending" && (E.status = "aborted");
    }),
      (p = []);
  }
  function S(E, k, T) {
    const O = k !== "success";
    switch (((p = p.filter((L) => L !== E)), a)) {
      case "pending":
        break;
      case "failed":
        if (O || !e.dataAfterTimeout) return;
        break;
      default:
        return;
    }
    if (k === "abort") {
      (d = T), g();
      return;
    }
    if (O) {
      (d = T), p.length || (s.length ? j() : g());
      return;
    }
    if ((v(), x(), !e.random)) {
      const L = e.resources.indexOf(E.resource);
      L !== -1 && L !== e.index && (e.index = L);
    }
    (a = "completed"),
      h.forEach((L) => {
        L(T);
      });
  }
  function j() {
    if (a !== "pending") return;
    v();
    const E = s.shift();
    if (E === void 0) {
      if (p.length) {
        f = setTimeout(() => {
          v(), a === "pending" && (x(), g());
        }, e.timeout);
        return;
      }
      g();
      return;
    }
    const k = {
      status: "pending",
      resource: E,
      callback: (T, O) => {
        S(k, T, O);
      },
    };
    p.push(k), c++, (f = setTimeout(j, e.rotate)), n(E, t, k.callback);
  }
  return setTimeout(j), m;
}
function jE(e) {
  if (
    typeof e != "object" ||
    typeof e.resources != "object" ||
    !(e.resources instanceof Array) ||
    !e.resources.length
  )
    throw new Error("Invalid Reduncancy configuration");
  const t = Object.create(null);
  let n;
  for (n in Ph) e[n] !== void 0 ? (t[n] = e[n]) : (t[n] = Ph[n]);
  return t;
}
function Wv(e) {
  const t = jE(e);
  let n = [];
  function r() {
    n = n.filter((l) => l().status === "pending");
  }
  function i(l, a, c) {
    const d = bE(t, l, a, (f, p) => {
      r(), c && c(f, p);
    });
    return n.push(d), d;
  }
  function o(l) {
    const a = n.find((c) => l(c));
    return a !== void 0 ? a : null;
  }
  return {
    query: i,
    find: o,
    setIndex: (l) => {
      t.index = l;
    },
    getIndex: () => t.index,
    cleanup: r,
  };
}
function Th() {}
const ou = Object.create(null);
function EE(e) {
  if (ou[e] === void 0) {
    const t = df(e);
    if (!t) return;
    const n = Wv(t),
      r = { config: t, redundancy: n };
    ou[e] = r;
  }
  return ou[e];
}
function kE(e, t, n) {
  let r, i;
  if (typeof e == "string") {
    const o = Rc(e);
    if (!o) return n(void 0, 424), Th;
    i = o.send;
    const s = EE(e);
    s && (r = s.redundancy);
  } else {
    const o = uf(e);
    if (o) {
      r = Wv(o);
      const s = e.resources ? e.resources[0] : "",
        l = Rc(s);
      l && (i = l.send);
    }
  }
  return !r || !i ? (n(void 0, 424), Th) : r.query(t, i, n)().abort;
}
const Ic = {};
function Oh() {}
const or = Object.create(null),
  su = Object.create(null),
  lu = Object.create(null),
  au = Object.create(null);
function CE(e, t) {
  lu[e] === void 0 && (lu[e] = Object.create(null));
  const n = lu[e];
  n[t] ||
    ((n[t] = !0),
    setTimeout(() => {
      (n[t] = !1), yE(e, t);
    }));
}
const _h = Object.create(null);
function PE(e, t, n) {
  function r() {
    const l = (e === "" ? "" : "@" + e + ":") + t,
      a = Math.floor(Date.now() / 6e4);
    _h[l] < a &&
      ((_h[l] = a),
      console.error(
        'Unable to retrieve icons for "' +
          l +
          '" because API is not configured properly.'
      ));
  }
  su[e] === void 0 && (su[e] = Object.create(null));
  const i = su[e];
  au[e] === void 0 && (au[e] = Object.create(null));
  const o = au[e];
  or[e] === void 0 && (or[e] = Object.create(null));
  const s = or[e];
  i[t] === void 0 ? (i[t] = n) : (i[t] = i[t].concat(n).sort()),
    o[t] ||
      ((o[t] = !0),
      setTimeout(() => {
        o[t] = !1;
        const l = i[t];
        delete i[t];
        const a = Rc(e);
        if (!a) {
          r();
          return;
        }
        a.prepare(e, t, l).forEach((d) => {
          kE(e, d, (f, p) => {
            const h = Sr(e, t);
            if (typeof f != "object") {
              if (p !== 404) return;
              const v = Date.now();
              d.icons.forEach((y) => {
                h.missing[y] = v;
              });
            } else
              try {
                const v = af(h, f);
                if (!v.length) return;
                const y = s[t];
                v.forEach((w) => {
                  delete y[w];
                }),
                  Ic.store && Ic.store(e, f);
              } catch (v) {
                console.error(v);
              }
            CE(e, t);
          });
        });
      }));
}
const TE = (e, t) => {
    const n = SE(e, !0, Fv()),
      r = vE(n);
    if (!r.pending.length) {
      let c = !0;
      return (
        t &&
          setTimeout(() => {
            c && t(r.loaded, r.missing, r.pending, Oh);
          }),
        () => {
          c = !1;
        }
      );
    }
    const i = Object.create(null),
      o = [];
    let s, l;
    r.pending.forEach((c) => {
      const d = c.provider,
        f = c.prefix;
      if (f === l && d === s) return;
      (s = d),
        (l = f),
        o.push({ provider: d, prefix: f }),
        or[d] === void 0 && (or[d] = Object.create(null));
      const p = or[d];
      p[f] === void 0 && (p[f] = Object.create(null)),
        i[d] === void 0 && (i[d] = Object.create(null));
      const h = i[d];
      h[f] === void 0 && (h[f] = []);
    });
    const a = Date.now();
    return (
      r.pending.forEach((c) => {
        const d = c.provider,
          f = c.prefix,
          p = c.name,
          h = or[d][f];
        h[p] === void 0 && ((h[p] = a), i[d][f].push(p));
      }),
      o.forEach((c) => {
        const d = c.provider,
          f = c.prefix;
        i[d][f].length && PE(d, f, i[d][f]);
      }),
      t ? wE(t, r, o) : Oh
    );
  },
  Gv = "iconify2",
  Ao = "iconify",
  Kv = Ao + "-count",
  qv = Ao + "-version",
  Jv = 36e5,
  OE = 168,
  ff = { local: !0, session: !0 };
let zc = !1;
const Qv = { local: 0, session: 0 },
  Yv = { local: [], session: [] };
let ts = typeof window > "u" ? {} : window;
function Xv(e) {
  const t = e + "Storage";
  try {
    if (ts && ts[t] && typeof ts[t].length == "number") return ts[t];
  } catch {}
  return (ff[e] = !1), null;
}
function pf(e, t, n) {
  try {
    return e.setItem(Kv, n.toString()), (Qv[t] = n), !0;
  } catch {
    return !1;
  }
}
function Zv(e) {
  const t = e.getItem(Kv);
  if (t) {
    const n = parseInt(t);
    return n || 0;
  }
  return 0;
}
function _E(e, t) {
  try {
    e.setItem(qv, Gv);
  } catch {}
  pf(e, t, 0);
}
function LE(e) {
  try {
    const t = Zv(e);
    for (let n = 0; n < t; n++) e.removeItem(Ao + n.toString());
  } catch {}
}
const e1 = () => {
    if (zc) return;
    zc = !0;
    const e = Math.floor(Date.now() / Jv) - OE;
    function t(n) {
      const r = Xv(n);
      if (!r) return;
      const i = (o) => {
        const s = Ao + o.toString(),
          l = r.getItem(s);
        if (typeof l != "string") return !1;
        let a = !0;
        try {
          const c = JSON.parse(l);
          if (
            typeof c != "object" ||
            typeof c.cached != "number" ||
            c.cached < e ||
            typeof c.provider != "string" ||
            typeof c.data != "object" ||
            typeof c.data.prefix != "string"
          )
            a = !1;
          else {
            const d = c.provider,
              f = c.data.prefix,
              p = Sr(d, f);
            a = af(p, c.data).length > 0;
          }
        } catch {
          a = !1;
        }
        return a || r.removeItem(s), a;
      };
      try {
        const o = r.getItem(qv);
        if (o !== Gv) {
          o && LE(r), _E(r, n);
          return;
        }
        let s = Zv(r);
        for (let l = s - 1; l >= 0; l--)
          i(l) || (l === s - 1 ? s-- : Yv[n].push(l));
        pf(r, n, s);
      } catch {}
    }
    for (const n in ff) t(n);
  },
  NE = (e, t) => {
    zc || e1();
    function n(r) {
      if (!ff[r]) return !1;
      const i = Xv(r);
      if (!i) return !1;
      let o = Yv[r].shift();
      if (o === void 0 && ((o = Qv[r]), !pf(i, r, o + 1))) return !1;
      try {
        const s = { cached: Math.floor(Date.now() / Jv), provider: e, data: t };
        i.setItem(Ao + o.toString(), JSON.stringify(s));
      } catch {
        return !1;
      }
      return !0;
    }
    Object.keys(t.icons).length &&
      (t.not_found && ((t = Object.assign({}, t)), delete t.not_found),
      n("local") || n("session"));
  },
  t1 = /[\s,]+/;
function ME(e, t) {
  t.split(t1).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function AE(e, t) {
  t.split(t1).forEach((n) => {
    const r = n.trim();
    switch (r) {
      case "left":
      case "center":
      case "right":
        e.hAlign = r;
        break;
      case "top":
      case "middle":
      case "bottom":
        e.vAlign = r;
        break;
      case "slice":
      case "crop":
        e.slice = !0;
        break;
      case "meet":
        e.slice = !1;
    }
  });
}
function RE(e, t = 0) {
  const n = e.replace(/^-?[0-9.]*/, "");
  function r(i) {
    for (; i < 0; ) i += 4;
    return i % 4;
  }
  if (n === "") {
    const i = parseInt(e);
    return isNaN(i) ? 0 : r(i);
  } else if (n !== e) {
    let i = 0;
    switch (n) {
      case "%":
        i = 25;
        break;
      case "deg":
        i = 90;
    }
    if (i) {
      let o = parseFloat(e.slice(0, e.length - n.length));
      return isNaN(o) ? 0 : ((o = o / i), o % 1 === 0 ? r(o) : 0);
    }
  }
  return t;
}
const IE = {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-hidden": !0,
    role: "img",
    style: {},
  },
  zE = { ...Uv, inline: !0 },
  DE = (e, t, n, r) => {
    const i = n ? zE : Uv,
      o = Zj(i, t),
      s = typeof t.style == "object" && t.style !== null ? t.style : {},
      l = { ...IE, ref: r, style: s };
    for (let f in t) {
      const p = t[f];
      if (p !== void 0)
        switch (f) {
          case "icon":
          case "style":
          case "children":
          case "onLoad":
          case "_ref":
          case "_inline":
            break;
          case "inline":
          case "hFlip":
          case "vFlip":
            o[f] = p === !0 || p === "true" || p === 1;
            break;
          case "flip":
            typeof p == "string" && ME(o, p);
            break;
          case "align":
            typeof p == "string" && AE(o, p);
            break;
          case "color":
            s.color = p;
            break;
          case "rotate":
            typeof p == "string"
              ? (o[f] = RE(p))
              : typeof p == "number" && (o[f] = p);
            break;
          case "ariaHidden":
          case "aria-hidden":
            p !== !0 && p !== "true" && delete l["aria-hidden"];
            break;
          default:
            i[f] === void 0 && (l[f] = p);
        }
    }
    const a = rE(e, o);
    let c = 0,
      d = t.id;
    typeof d == "string" && (d = d.replace(/-/g, "_")),
      (l.dangerouslySetInnerHTML = {
        __html: lE(a.body, d ? () => d + "ID" + c++ : "iconifyReact"),
      });
    for (let f in a.attributes) l[f] = a.attributes[f];
    return (
      a.inline && s.verticalAlign === void 0 && (s.verticalAlign = "-0.125em"),
      A.createElement("svg", l)
    );
  };
Fv(!0);
aE("", gE);
if (typeof document < "u" && typeof window < "u") {
  (Ic.store = NE), e1();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload,
      n = "Invalid IconifyPreload syntax.";
    typeof t == "object" &&
      t !== null &&
      (t instanceof Array ? t : [t]).forEach((r) => {
        try {
          (typeof r != "object" ||
            r === null ||
            r instanceof Array ||
            typeof r.icons != "object" ||
            typeof r.prefix != "string" ||
            !Xj(r)) &&
            console.error(n);
        } catch {
          console.error(n);
        }
      });
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders;
    if (typeof t == "object" && t !== null)
      for (let n in t) {
        const r = "IconifyProviders[" + n + "] is invalid.";
        try {
          const i = t[n];
          if (typeof i != "object" || !i || i.resources === void 0) continue;
          uE(n, i) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
class n1 extends A.Component {
  constructor(t) {
    super(t), (this.state = { icon: null });
  }
  _abortLoading() {
    this._loading && (this._loading.abort(), (this._loading = null));
  }
  _setData(t) {
    this.state.icon !== t && this.setState({ icon: t });
  }
  _checkIcon(t) {
    const n = this.state,
      r = this.props.icon;
    if (typeof r == "object" && r !== null && typeof r.body == "string") {
      (this._icon = ""),
        this._abortLoading(),
        (t || n.icon === null) && this._setData({ data: lf(r) });
      return;
    }
    let i;
    if (typeof r != "string" || (i = da(r, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const o = Qj(i);
    if (o === null) {
      (!this._loading || this._loading.name !== r) &&
        (this._abortLoading(),
        (this._icon = ""),
        this._setData(null),
        (this._loading = {
          name: r,
          abort: TE([i], this._checkIcon.bind(this, !1)),
        }));
      return;
    }
    if (this._icon !== r || n.icon === null) {
      this._abortLoading(), (this._icon = r);
      const s = ["iconify"];
      i.prefix !== "" && s.push("iconify--" + i.prefix),
        i.provider !== "" && s.push("iconify--" + i.provider),
        this._setData({ data: o, classes: s }),
        this.props.onLoad && this.props.onLoad(r);
    }
  }
  componentDidMount() {
    this._checkIcon(!1);
  }
  componentDidUpdate(t) {
    t.icon !== this.props.icon && this._checkIcon(!0);
  }
  componentWillUnmount() {
    this._abortLoading();
  }
  render() {
    const t = this.props,
      n = this.state.icon;
    if (n === null)
      return t.children ? t.children : A.createElement("span", {});
    let r = t;
    return (
      n.classes &&
        (r = {
          ...t,
          className:
            (typeof t.className == "string" ? t.className + " " : "") +
            n.classes.join(" "),
        }),
      DE(n.data, r, t._inline, t._ref)
    );
  }
}
const Ft = A.forwardRef(function (t, n) {
  const r = { ...t, _ref: n, _inline: !1 };
  return A.createElement(n1, r);
});
A.forwardRef(function (t, n) {
  const r = { ...t, _ref: n, _inline: !0 };
  return A.createElement(n1, r);
});
var $E = {
    body: '<path d="M10 16.5v-9l6 4.5M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z" fill="currentColor"/>',
    width: 24,
    height: 24,
  },
  FE = $E,
  UE = {
    body: '<path d="M15 16h-2V8h2m-4 8H9V8h2m1-6A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z" fill="currentColor"/>',
    width: 24,
    height: 24,
  },
  BE = UE,
  VE = {
    body: '<path d="M6 18V6h2v12H6m3.5-6L18 6v12l-8.5-6z" fill="currentColor"/>',
    width: 24,
    height: 24,
  },
  HE = VE,
  WE = {
    body: '<path d="M16 18h2V6h-2M6 18l8.5-6L6 6v12z" fill="currentColor"/>',
    width: 24,
    height: 24,
  },
  GE = WE,
  KE = {
    body: '<path d="M13 6v12l8.5-6M4 18l8.5-6L4 6v12z" fill="currentColor"/>',
    width: 24,
    height: 24,
  },
  qE = KE,
  JE = {
    body: '<path d="M11.5 12l8.5 6V6m-9 12V6l-8.5 6l8.5 6z" fill="currentColor"/>',
    width: 24,
    height: 24,
  },
  QE = JE,
  YE = {
    body: '<path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77c0-4.28-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9H3z" fill="currentColor"/>',
    width: 24,
    height: 24,
  },
  XE = YE,
  ZE = {
    body: '<path d="M3 9h4l5-5v16l-5-5H3V9m13.59 3L14 9.41L15.41 8L18 10.59L20.59 8L22 9.41L19.41 12L22 14.59L20.59 16L18 13.41L15.41 16L14 14.59L16.59 12z" fill="currentColor"/>',
    width: 24,
    height: 24,
  },
  e4 = ZE,
  t4 = {
    body: '<path d="M17 17H7v-3l-4 4l4 4v-3h12v-6h-2M7 7h10v3l4-4l-4-4v3H5v6h2V7z" fill="currentColor"/>',
    width: 24,
    height: 24,
  },
  n4 = t4,
  r4 = {
    body: '<path d="M2 5.27L3.28 4L20 20.72L18.73 22l-3-3H7v3l-4-4l4-4v3h6.73L7 10.27V11H5V8.27l-3-3M17 13h2v4.18l-2-2V13m0-8V2l4 4l-4 4V7H8.82l-2-2H17z" fill="currentColor"/>',
    width: 24,
    height: 24,
  },
  i4 = r4,
  o4 = function (t) {
    switch (t) {
      case "stacked":
        return "rhap_stacked";
      case "stacked-reverse":
        return "rhap_stacked-reverse";
      case "horizontal":
        return "rhap_horizontal";
      case "horizontal-reverse":
        return "rhap_horizontal-reverse";
      default:
        return "rhap_stacked";
    }
  },
  r1 = function (t) {
    return t instanceof MouseEvent ? t.clientX : t.touches[0].clientX;
  },
  uu = function (t) {
    return t > 9 ? t.toString() : "0".concat(t);
  },
  Gr = function (t, n, r) {
    if (!isFinite(t)) return null;
    var i = Math.floor(t / 60),
      o = uu(i),
      s = uu(Math.floor(t % 60)),
      l = uu(Math.floor(i % 60)),
      a = Math.floor(i / 60),
      c = "".concat(o, ":").concat(s),
      d = "".concat(a, ":").concat(l, ":").concat(s);
    if (r === "auto") return n >= 3600 ? d : c;
    if (r === "mm:ss") return c;
    if (r === "hh:mm:ss") return d;
  };
function i1(e, t) {
  var n = !1;
  return function (r) {
    n ||
      (e(r),
      (n = !0),
      setTimeout(function () {
        return (n = !1);
      }, t));
  };
}
function s4(e) {
  var t = l4();
  return function () {
    var r = Pt(e),
      i;
    if (t) {
      var o = Pt(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return Mo(this, i);
  };
}
function l4() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
var a4 = (function (e) {
    No(n, e);
    var t = s4(n);
    function n() {
      var r;
      _o(this, n);
      for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
        o[s] = arguments[s];
      return (
        (r = t.call.apply(t, [this].concat(o))),
        F(U(r), "audio", void 0),
        F(U(r), "timeOnMouseMove", 0),
        F(U(r), "hasAddedAudioEventListener", !1),
        F(U(r), "downloadProgressAnimationTimer", void 0),
        F(U(r), "state", {
          isDraggingProgress: !1,
          currentTimePos: "0%",
          hasDownloadProgressAnimation: !1,
          downloadProgressArr: [],
          waitingForSeekCallback: !1,
        }),
        F(U(r), "getCurrentProgress", function (l) {
          var a = r.props,
            c = a.audio,
            d = a.progressBar,
            f =
              c.src.indexOf("blob:") !== 0 && typeof r.props.srcDuration > "u";
          if (f && (!c.src || !isFinite(c.currentTime) || !d.current))
            return { currentTime: 0, currentTimePos: "0%" };
          var p = d.current.getBoundingClientRect(),
            h = p.width,
            v = r1(l) - p.left;
          v < 0 ? (v = 0) : v > h && (v = h);
          var y = r.getDuration(),
            w = (y * v) / h;
          return {
            currentTime: w,
            currentTimePos: "".concat(((v / h) * 100).toFixed(2), "%"),
          };
        }),
        F(U(r), "handleContextMenu", function (l) {
          l.preventDefault();
        }),
        F(U(r), "handleMouseDownOrTouchStartProgressBar", function (l) {
          l.stopPropagation();
          var a = r.getCurrentProgress(l.nativeEvent),
            c = a.currentTime,
            d = a.currentTimePos;
          isFinite(c) &&
            ((r.timeOnMouseMove = c),
            r.setState({ isDraggingProgress: !0, currentTimePos: d }),
            l.nativeEvent instanceof MouseEvent
              ? (window.addEventListener(
                  "mousemove",
                  r.handleWindowMouseOrTouchMove
                ),
                window.addEventListener(
                  "mouseup",
                  r.handleWindowMouseOrTouchUp
                ))
              : (window.addEventListener(
                  "touchmove",
                  r.handleWindowMouseOrTouchMove
                ),
                window.addEventListener(
                  "touchend",
                  r.handleWindowMouseOrTouchUp
                )));
        }),
        F(U(r), "handleWindowMouseOrTouchMove", function (l) {
          l instanceof MouseEvent && l.preventDefault(), l.stopPropagation();
          var a = window.getSelection();
          a && a.type === "Range" && a.empty();
          var c = r.state.isDraggingProgress;
          if (c) {
            var d = r.getCurrentProgress(l),
              f = d.currentTime,
              p = d.currentTimePos;
            (r.timeOnMouseMove = f), r.setState({ currentTimePos: p });
          }
        }),
        F(U(r), "handleWindowMouseOrTouchUp", function (l) {
          l.stopPropagation();
          var a = r.timeOnMouseMove,
            c = r.props,
            d = c.audio,
            f = c.onChangeCurrentTimeError,
            p = c.onSeek;
          if (p)
            r.setState(
              { isDraggingProgress: !1, waitingForSeekCallback: !0 },
              function () {
                p(d, a).then(
                  function () {
                    return r.setState({ waitingForSeekCallback: !1 });
                  },
                  function (v) {
                    throw new Error(v);
                  }
                );
              }
            );
          else {
            var h = { isDraggingProgress: !1 };
            d.readyState === d.HAVE_NOTHING ||
            d.readyState === d.HAVE_METADATA ||
            !isFinite(a)
              ? ((h.currentTimePos = "0%"), f && f())
              : (d.currentTime = a),
              r.setState(h);
          }
          l instanceof MouseEvent
            ? (window.removeEventListener(
                "mousemove",
                r.handleWindowMouseOrTouchMove
              ),
              window.removeEventListener(
                "mouseup",
                r.handleWindowMouseOrTouchUp
              ))
            : (window.removeEventListener(
                "touchmove",
                r.handleWindowMouseOrTouchMove
              ),
              window.removeEventListener(
                "touchend",
                r.handleWindowMouseOrTouchUp
              ));
        }),
        F(
          U(r),
          "handleAudioTimeUpdate",
          i1(function (l) {
            var a = r.state.isDraggingProgress,
              c = l.target;
            if (!(a || r.state.waitingForSeekCallback === !0)) {
              var d = c.currentTime,
                f = r.getDuration();
              r.setState({
                currentTimePos: "".concat(((d / f) * 100 || 0).toFixed(2), "%"),
              });
            }
          }, r.props.progressUpdateInterval)
        ),
        F(U(r), "handleAudioDownloadProgressUpdate", function (l) {
          for (
            var a = l.target, c = r.getDuration(), d = [], f = 0;
            f < a.buffered.length;
            f++
          ) {
            var p = a.buffered.start(f),
              h = a.buffered.end(f);
            d.push({
              left: "".concat(Math.round((100 / c) * p) || 0, "%"),
              width: "".concat(Math.round((100 / c) * (h - p)) || 0, "%"),
            });
          }
          clearTimeout(r.downloadProgressAnimationTimer),
            r.setState({
              downloadProgressArr: d,
              hasDownloadProgressAnimation: !0,
            }),
            (r.downloadProgressAnimationTimer = setTimeout(function () {
              r.setState({ hasDownloadProgressAnimation: !1 });
            }, 200));
        }),
        r
      );
    }
    return (
      Lo(n, [
        {
          key: "getDuration",
          value: function () {
            var i = this.props,
              o = i.audio,
              s = i.srcDuration;
            return typeof s > "u" ? o.duration : s;
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            var i = this.props.audio;
            i &&
              !this.hasAddedAudioEventListener &&
              ((this.audio = i),
              (this.hasAddedAudioEventListener = !0),
              i.addEventListener("timeupdate", this.handleAudioTimeUpdate),
              i.addEventListener(
                "progress",
                this.handleAudioDownloadProgressUpdate
              ));
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this.audio &&
              this.hasAddedAudioEventListener &&
              (this.audio.removeEventListener(
                "timeupdate",
                this.handleAudioTimeUpdate
              ),
              this.audio.removeEventListener(
                "progress",
                this.handleAudioDownloadProgressUpdate
              )),
              clearTimeout(this.downloadProgressAnimationTimer);
          },
        },
        {
          key: "render",
          value: function () {
            var i = this.props,
              o = i.showDownloadProgress,
              s = i.showFilledProgress,
              l = i.progressBar,
              a = i.i18nProgressBar,
              c = this.state,
              d = c.currentTimePos,
              f = c.downloadProgressArr,
              p = c.hasDownloadProgressAnimation;
            return A.createElement(
              "div",
              {
                className: "rhap_progress-container",
                ref: l,
                "aria-label": a,
                role: "progressbar",
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": Number(d.split("%")[0]),
                tabIndex: 0,
                onMouseDown: this.handleMouseDownOrTouchStartProgressBar,
                onTouchStart: this.handleMouseDownOrTouchStartProgressBar,
                onContextMenu: this.handleContextMenu,
              },
              A.createElement(
                "div",
                {
                  className: "rhap_progress-bar ".concat(
                    o ? "rhap_progress-bar-show-download" : ""
                  ),
                },
                A.createElement("div", {
                  className: "rhap_progress-indicator",
                  style: { left: d },
                }),
                s &&
                  A.createElement("div", {
                    className: "rhap_progress-filled",
                    style: { width: d },
                  }),
                o &&
                  f.map(function (h, v) {
                    var y = h.left,
                      w = h.width;
                    return A.createElement("div", {
                      key: v,
                      className: "rhap_download-progress",
                      style: {
                        left: y,
                        width: w,
                        transitionDuration: p ? ".2s" : "0s",
                      },
                    });
                  })
              )
            );
          },
        },
      ]),
      n
    );
  })(b.Component),
  u4 = function (t, n) {
    return A.createElement(a4, kc({}, t, { progressBar: n }));
  };
const c4 = b.forwardRef(u4);
function d4(e) {
  var t = f4();
  return function () {
    var r = Pt(e),
      i;
    if (t) {
      var o = Pt(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return Mo(this, i);
  };
}
function f4() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
var Lh = (function (e) {
  No(n, e);
  var t = d4(n);
  function n(r) {
    var i;
    _o(this, n),
      (i = t.call(this, r)),
      F(U(i), "audio", void 0),
      F(U(i), "hasAddedAudioEventListener", !1),
      F(U(i), "state", { currentTime: i.props.defaultCurrentTime }),
      F(U(i), "handleAudioCurrentTimeChange", function (d) {
        var f = d.target,
          p = i.props,
          h = p.isLeftTime,
          v = p.timeFormat,
          y = p.defaultCurrentTime;
        i.setState({
          currentTime:
            Gr(h ? f.duration - f.currentTime : f.currentTime, f.duration, v) ||
            y,
        });
      }),
      F(U(i), "addAudioEventListeners", function () {
        var d = i.props.audio;
        d &&
          !i.hasAddedAudioEventListener &&
          ((i.audio = d),
          (i.hasAddedAudioEventListener = !0),
          d.addEventListener("timeupdate", i.handleAudioCurrentTimeChange),
          d.addEventListener("loadedmetadata", i.handleAudioCurrentTimeChange));
      });
    var o = r.audio,
      s = r.defaultCurrentTime,
      l = r.isLeftTime,
      a = r.timeFormat,
      c = s;
    return (
      o &&
        (c = Gr(l ? o.duration - o.currentTime : o.currentTime, o.duration, a)),
      (i.state = { currentTime: c }),
      i
    );
  }
  return (
    Lo(n, [
      {
        key: "componentDidMount",
        value: function () {
          this.addAudioEventListeners();
        },
      },
      {
        key: "componentDidUpdate",
        value: function () {
          this.addAudioEventListeners();
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.audio &&
            this.hasAddedAudioEventListener &&
            (this.audio.removeEventListener(
              "timeupdate",
              this.handleAudioCurrentTimeChange
            ),
            this.audio.removeEventListener(
              "loadedmetadata",
              this.handleAudioCurrentTimeChange
            ));
        },
      },
      {
        key: "render",
        value: function () {
          return this.state.currentTime;
        },
      },
    ]),
    n
  );
})(b.PureComponent);
function p4(e) {
  var t = h4();
  return function () {
    var r = Pt(e),
      i;
    if (t) {
      var o = Pt(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return Mo(this, i);
  };
}
function h4() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
var m4 = (function (e) {
  No(n, e);
  var t = p4(n);
  function n(r) {
    var i;
    _o(this, n),
      (i = t.call(this, r)),
      F(U(i), "audio", void 0),
      F(U(i), "hasAddedAudioEventListener", !1),
      F(U(i), "state", {
        duration: i.props.audio
          ? Gr(
              i.props.audio.duration,
              i.props.audio.duration,
              i.props.timeFormat
            )
          : i.props.defaultDuration,
      }),
      F(U(i), "handleAudioDurationChange", function (a) {
        var c = a.target,
          d = i.props,
          f = d.timeFormat,
          p = d.defaultDuration;
        i.setState({ duration: Gr(c.duration, c.duration, f) || p });
      }),
      F(U(i), "addAudioEventListeners", function () {
        var a = i.props.audio;
        a &&
          !i.hasAddedAudioEventListener &&
          ((i.audio = a),
          (i.hasAddedAudioEventListener = !0),
          a.addEventListener("durationchange", i.handleAudioDurationChange),
          a.addEventListener("abort", i.handleAudioDurationChange));
      });
    var o = r.audio,
      s = r.timeFormat,
      l = r.defaultDuration;
    return (i.state = { duration: o ? Gr(o.duration, o.duration, s) : l }), i;
  }
  return (
    Lo(n, [
      {
        key: "componentDidMount",
        value: function () {
          this.addAudioEventListeners();
        },
      },
      {
        key: "componentDidUpdate",
        value: function () {
          this.addAudioEventListeners();
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.audio &&
            this.hasAddedAudioEventListener &&
            (this.audio.removeEventListener(
              "durationchange",
              this.handleAudioDurationChange
            ),
            this.audio.removeEventListener(
              "abort",
              this.handleAudioDurationChange
            ));
        },
      },
      {
        key: "render",
        value: function () {
          return this.state.duration;
        },
      },
    ]),
    n
  );
})(b.PureComponent);
function g4(e) {
  var t = v4();
  return function () {
    var r = Pt(e),
      i;
    if (t) {
      var o = Pt(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return Mo(this, i);
  };
}
function v4() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
var y4 = (function (e) {
    No(n, e);
    var t = g4(n);
    function n() {
      var r;
      _o(this, n);
      for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
        o[s] = arguments[s];
      return (
        (r = t.call.apply(t, [this].concat(o))),
        F(U(r), "audio", void 0),
        F(U(r), "hasAddedAudioEventListener", !1),
        F(U(r), "volumeBar", b.createRef()),
        F(U(r), "volumeAnimationTimer", 0),
        F(U(r), "lastVolume", r.props.volume),
        F(U(r), "state", {
          currentVolumePos: "".concat(
            ((r.lastVolume / 1) * 100 || 0).toFixed(2),
            "%"
          ),
          hasVolumeAnimation: !1,
          isDraggingVolume: !1,
        }),
        F(U(r), "getCurrentVolume", function (l) {
          var a = r.props.audio;
          if (!r.volumeBar.current)
            return {
              currentVolume: a.volume,
              currentVolumePos: r.state.currentVolumePos,
            };
          var c = r.volumeBar.current.getBoundingClientRect(),
            d = c.width,
            f = r1(l) - c.left,
            p,
            h;
          return (
            f < 0
              ? ((p = 0), (h = "0%"))
              : f > c.width
              ? ((p = 1), (h = "100%"))
              : ((p = f / d), (h = "".concat((f / d) * 100, "%"))),
            { currentVolume: p, currentVolumePos: h }
          );
        }),
        F(U(r), "handleContextMenu", function (l) {
          l.preventDefault();
        }),
        F(U(r), "handleClickVolumeButton", function () {
          var l = r.props.audio;
          l.volume > 0
            ? ((r.lastVolume = l.volume), (l.volume = 0))
            : (l.volume = r.lastVolume);
        }),
        F(U(r), "handleVolumnControlMouseOrTouchDown", function (l) {
          l.stopPropagation();
          var a = r.props.audio,
            c = r.getCurrentVolume(l.nativeEvent),
            d = c.currentVolume,
            f = c.currentVolumePos;
          (a.volume = d),
            r.setState({ isDraggingVolume: !0, currentVolumePos: f }),
            l.nativeEvent instanceof MouseEvent
              ? (window.addEventListener(
                  "mousemove",
                  r.handleWindowMouseOrTouchMove
                ),
                window.addEventListener(
                  "mouseup",
                  r.handleWindowMouseOrTouchUp
                ))
              : (window.addEventListener(
                  "touchmove",
                  r.handleWindowMouseOrTouchMove
                ),
                window.addEventListener(
                  "touchend",
                  r.handleWindowMouseOrTouchUp
                ));
        }),
        F(U(r), "handleWindowMouseOrTouchMove", function (l) {
          l instanceof MouseEvent && l.preventDefault(), l.stopPropagation();
          var a = r.props.audio,
            c = window.getSelection();
          c && c.type === "Range" && c.empty();
          var d = r.state.isDraggingVolume;
          if (d) {
            var f = r.getCurrentVolume(l),
              p = f.currentVolume,
              h = f.currentVolumePos;
            (a.volume = p), r.setState({ currentVolumePos: h });
          }
        }),
        F(U(r), "handleWindowMouseOrTouchUp", function (l) {
          l.stopPropagation(),
            r.setState({ isDraggingVolume: !1 }),
            l instanceof MouseEvent
              ? (window.removeEventListener(
                  "mousemove",
                  r.handleWindowMouseOrTouchMove
                ),
                window.removeEventListener(
                  "mouseup",
                  r.handleWindowMouseOrTouchUp
                ))
              : (window.removeEventListener(
                  "touchmove",
                  r.handleWindowMouseOrTouchMove
                ),
                window.removeEventListener(
                  "touchend",
                  r.handleWindowMouseOrTouchUp
                ));
        }),
        F(U(r), "handleAudioVolumeChange", function (l) {
          var a = r.state.isDraggingVolume,
            c = l.target,
            d = c.volume;
          ((r.lastVolume > 0 && d === 0) || (r.lastVolume === 0 && d > 0)) &&
            r.props.onMuteChange(),
            (r.lastVolume = d),
            !a &&
              (r.setState({
                hasVolumeAnimation: !0,
                currentVolumePos: "".concat(
                  ((d / 1) * 100 || 0).toFixed(2),
                  "%"
                ),
              }),
              clearTimeout(r.volumeAnimationTimer),
              (r.volumeAnimationTimer = setTimeout(function () {
                r.setState({ hasVolumeAnimation: !1 });
              }, 100)));
        }),
        r
      );
    }
    return (
      Lo(n, [
        {
          key: "componentDidUpdate",
          value: function () {
            var i = this.props.audio;
            i &&
              !this.hasAddedAudioEventListener &&
              ((this.audio = i),
              (this.hasAddedAudioEventListener = !0),
              i.addEventListener("volumechange", this.handleAudioVolumeChange));
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this.audio &&
              this.hasAddedAudioEventListener &&
              this.audio.removeEventListener(
                "volumechange",
                this.handleAudioVolumeChange
              ),
              clearTimeout(this.volumeAnimationTimer);
          },
        },
        {
          key: "render",
          value: function () {
            var i = this.props,
              o = i.audio,
              s = i.showFilledVolume,
              l = i.i18nVolumeControl,
              a = this.state,
              c = a.currentVolumePos,
              d = a.hasVolumeAnimation,
              f = o || {},
              p = f.volume;
            return A.createElement(
              "div",
              {
                ref: this.volumeBar,
                onMouseDown: this.handleVolumnControlMouseOrTouchDown,
                onTouchStart: this.handleVolumnControlMouseOrTouchDown,
                onContextMenu: this.handleContextMenu,
                role: "progressbar",
                "aria-label": l,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": Number((p * 100).toFixed(0)),
                tabIndex: 0,
                className: "rhap_volume-bar-area",
              },
              A.createElement(
                "div",
                { className: "rhap_volume-bar" },
                A.createElement("div", {
                  className: "rhap_volume-indicator",
                  style: { left: c, transitionDuration: d ? ".1s" : "0s" },
                }),
                s &&
                  A.createElement("div", {
                    className: "rhap_volume-filled",
                    style: { width: c },
                  })
              )
            );
          },
        },
      ]),
      n
    );
  })(b.Component),
  Te;
(function (e) {
  (e.CURRENT_TIME = "CURRENT_TIME"),
    (e.CURRENT_LEFT_TIME = "CURRENT_LEFT_TIME"),
    (e.PROGRESS_BAR = "PROGRESS_BAR"),
    (e.DURATION = "DURATION"),
    (e.ADDITIONAL_CONTROLS = "ADDITIONAL_CONTROLS"),
    (e.MAIN_CONTROLS = "MAIN_CONTROLS"),
    (e.VOLUME_CONTROLS = "VOLUME_CONTROLS"),
    (e.LOOP = "LOOP"),
    (e.VOLUME = "VOLUME");
})(Te || (Te = {}));
function x4(e) {
  var t = w4();
  return function () {
    var r = Pt(e),
      i;
    if (t) {
      var o = Pt(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return Mo(this, i);
  };
}
function w4() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
var o1 = (function (e) {
  No(n, e);
  var t = x4(n);
  function n() {
    var r;
    _o(this, n);
    for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
      o[s] = arguments[s];
    return (
      (r = t.call.apply(t, [this].concat(o))),
      F(U(r), "audio", b.createRef()),
      F(U(r), "progressBar", b.createRef()),
      F(U(r), "container", b.createRef()),
      F(U(r), "lastVolume", r.props.volume),
      F(U(r), "listenTracker", void 0),
      F(U(r), "volumeAnimationTimer", void 0),
      F(U(r), "downloadProgressAnimationTimer", void 0),
      F(U(r), "togglePlay", function (l) {
        l.stopPropagation();
        var a = r.audio.current;
        (a.paused || a.ended) && a.src
          ? r.playAudioPromise()
          : a.paused || a.pause();
      }),
      F(U(r), "playAudioPromise", function () {
        var l = r.audio.current.play();
        l
          ? l.then(null).catch(function (a) {
              var c = r.props.onPlayError;
              c && c(new Error(a));
            })
          : r.forceUpdate();
      }),
      F(U(r), "isPlaying", function () {
        var l = r.audio.current;
        return l ? !l.paused && !l.ended : !1;
      }),
      F(U(r), "handlePlay", function (l) {
        r.forceUpdate(), r.props.onPlay && r.props.onPlay(l);
      }),
      F(U(r), "handlePause", function (l) {
        r.audio && (r.forceUpdate(), r.props.onPause && r.props.onPause(l));
      }),
      F(U(r), "handleEnded", function (l) {
        r.audio && (r.forceUpdate(), r.props.onEnded && r.props.onEnded(l));
      }),
      F(U(r), "handleAbort", function (l) {
        r.props.onAbort && r.props.onAbort(l);
      }),
      F(U(r), "handleClickVolumeButton", function () {
        var l = r.audio.current;
        l.volume > 0
          ? ((r.lastVolume = l.volume), (l.volume = 0))
          : (l.volume = r.lastVolume);
      }),
      F(U(r), "handleMuteChange", function () {
        r.forceUpdate();
      }),
      F(U(r), "handleClickLoopButton", function () {
        (r.audio.current.loop = !r.audio.current.loop), r.forceUpdate();
      }),
      F(U(r), "handleClickRewind", function () {
        var l = r.props,
          a = l.progressJumpSteps,
          c = l.progressJumpStep,
          d = a.backward || c;
        r.setJumpTime(-d);
      }),
      F(U(r), "handleClickForward", function () {
        var l = r.props,
          a = l.progressJumpSteps,
          c = l.progressJumpStep,
          d = a.forward || c;
        r.setJumpTime(d);
      }),
      F(U(r), "setJumpTime", function (l) {
        var a = r.audio.current,
          c = a.duration,
          d = a.currentTime;
        if (
          a.readyState === a.HAVE_NOTHING ||
          a.readyState === a.HAVE_METADATA ||
          !isFinite(c) ||
          !isFinite(d)
        )
          return (
            r.props.onChangeCurrentTimeError &&
            r.props.onChangeCurrentTimeError()
          );
        var f = d + l / 1e3;
        f < 0
          ? ((a.currentTime = 0), (f = 0))
          : f > c
          ? ((a.currentTime = c), (f = c))
          : (a.currentTime = f);
      }),
      F(U(r), "setJumpVolume", function (l) {
        var a = r.audio.current.volume + l;
        a < 0 ? (a = 0) : a > 1 && (a = 1), (r.audio.current.volume = a);
      }),
      F(U(r), "handleKeyDown", function (l) {
        if (r.props.hasDefaultKeyBindings)
          switch (l.key) {
            case " ":
              (l.target === r.container.current ||
                l.target === r.progressBar.current) &&
                (l.preventDefault(), r.togglePlay(l));
              break;
            case "ArrowLeft":
              r.handleClickRewind();
              break;
            case "ArrowRight":
              r.handleClickForward();
              break;
            case "ArrowUp":
              l.preventDefault(), r.setJumpVolume(r.props.volumeJumpStep);
              break;
            case "ArrowDown":
              l.preventDefault(), r.setJumpVolume(-r.props.volumeJumpStep);
              break;
            case "l":
              r.handleClickLoopButton();
              break;
            case "m":
              r.handleClickVolumeButton();
              break;
          }
      }),
      F(U(r), "renderUIModules", function (l) {
        return l.map(function (a, c) {
          return r.renderUIModule(a, c);
        });
      }),
      F(U(r), "renderUIModule", function (l, a) {
        var c = r.props,
          d = c.defaultCurrentTime,
          f = c.progressUpdateInterval,
          p = c.showDownloadProgress,
          h = c.showFilledProgress,
          v = c.showFilledVolume,
          y = c.defaultDuration,
          w = c.customIcons,
          m = c.showSkipControls,
          g = c.onClickPrevious,
          x = c.onClickNext,
          S = c.onChangeCurrentTimeError,
          j = c.showJumpControls,
          E = c.customAdditionalControls,
          k = c.customVolumeControls,
          T = c.muted,
          O = c.timeFormat,
          L = c.volume,
          C = c.loop,
          P = c.mse,
          M = c.i18nAriaLabels;
        switch (l) {
          case Te.CURRENT_TIME:
            return A.createElement(
              "div",
              {
                key: a,
                id: "rhap_current-time",
                className: "rhap_time rhap_current-time",
              },
              A.createElement(Lh, {
                audio: r.audio.current,
                isLeftTime: !1,
                defaultCurrentTime: d,
                timeFormat: O,
              })
            );
          case Te.CURRENT_LEFT_TIME:
            return A.createElement(
              "div",
              {
                key: a,
                id: "rhap_current-left-time",
                className: "rhap_time rhap_current-left-time",
              },
              A.createElement(Lh, {
                audio: r.audio.current,
                isLeftTime: !0,
                defaultCurrentTime: d,
                timeFormat: O,
              })
            );
          case Te.PROGRESS_BAR:
            return A.createElement(c4, {
              key: a,
              ref: r.progressBar,
              audio: r.audio.current,
              progressUpdateInterval: f,
              showDownloadProgress: p,
              showFilledProgress: h,
              onSeek: P && P.onSeek,
              onChangeCurrentTimeError: S,
              srcDuration: P && P.srcDuration,
              i18nProgressBar: M.progressControl,
            });
          case Te.DURATION:
            return A.createElement(
              "div",
              { key: a, className: "rhap_time rhap_total-time" },
              P && P.srcDuration
                ? Gr(P.srcDuration, P.srcDuration, r.props.timeFormat)
                : A.createElement(m4, {
                    audio: r.audio.current,
                    defaultDuration: y,
                    timeFormat: O,
                  })
            );
          case Te.ADDITIONAL_CONTROLS:
            return A.createElement(
              "div",
              { key: a, className: "rhap_additional-controls" },
              r.renderUIModules(E)
            );
          case Te.MAIN_CONTROLS: {
            var $ = r.isPlaying(),
              q;
            return (
              $
                ? (q = w.pause ? w.pause : A.createElement(Ft, { icon: BE }))
                : (q = w.play ? w.play : A.createElement(Ft, { icon: FE })),
              A.createElement(
                "div",
                { key: a, className: "rhap_main-controls" },
                m &&
                  A.createElement(
                    "button",
                    {
                      "aria-label": M.previous,
                      className:
                        "rhap_button-clear rhap_main-controls-button rhap_skip-button",
                      type: "button",
                      onClick: g,
                    },
                    w.previous ? w.previous : A.createElement(Ft, { icon: HE })
                  ),
                j &&
                  A.createElement(
                    "button",
                    {
                      "aria-label": M.rewind,
                      className:
                        "rhap_button-clear rhap_main-controls-button rhap_rewind-button",
                      type: "button",
                      onClick: r.handleClickRewind,
                    },
                    w.rewind ? w.rewind : A.createElement(Ft, { icon: QE })
                  ),
                A.createElement(
                  "button",
                  {
                    "aria-label": $ ? M.pause : M.play,
                    className:
                      "rhap_button-clear rhap_main-controls-button rhap_play-pause-button",
                    type: "button",
                    onClick: r.togglePlay,
                  },
                  q
                ),
                j &&
                  A.createElement(
                    "button",
                    {
                      "aria-label": M.forward,
                      className:
                        "rhap_button-clear rhap_main-controls-button rhap_forward-button",
                      type: "button",
                      onClick: r.handleClickForward,
                    },
                    w.forward ? w.forward : A.createElement(Ft, { icon: qE })
                  ),
                m &&
                  A.createElement(
                    "button",
                    {
                      "aria-label": M.next,
                      className:
                        "rhap_button-clear rhap_main-controls-button rhap_skip-button",
                      type: "button",
                      onClick: x,
                    },
                    w.next ? w.next : A.createElement(Ft, { icon: GE })
                  )
              )
            );
          }
          case Te.VOLUME_CONTROLS:
            return A.createElement(
              "div",
              { key: a, className: "rhap_volume-controls" },
              r.renderUIModules(k)
            );
          case Te.LOOP: {
            var ie = r.audio.current ? r.audio.current.loop : C,
              Z;
            return (
              ie
                ? (Z = w.loop ? w.loop : A.createElement(Ft, { icon: n4 }))
                : (Z = w.loopOff
                    ? w.loopOff
                    : A.createElement(Ft, { icon: i4 })),
              A.createElement(
                "button",
                {
                  key: a,
                  "aria-label": ie ? M.loop : M.loopOff,
                  className: "rhap_button-clear rhap_repeat-button",
                  type: "button",
                  onClick: r.handleClickLoopButton,
                },
                Z
              )
            );
          }
          case Te.VOLUME: {
            var R = r.audio.current || {},
              I = R.volume,
              z = I === void 0 ? (T ? 0 : L) : I,
              H;
            return (
              z
                ? (H = w.volume ? w.volume : A.createElement(Ft, { icon: XE }))
                : (H = w.volume
                    ? w.volumeMute
                    : A.createElement(Ft, { icon: e4 })),
              A.createElement(
                "div",
                { key: a, className: "rhap_volume-container" },
                A.createElement(
                  "button",
                  {
                    "aria-label": z ? M.volume : M.volumeMute,
                    onClick: r.handleClickVolumeButton,
                    type: "button",
                    className: "rhap_button-clear rhap_volume-button",
                  },
                  H
                ),
                A.createElement(y4, {
                  audio: r.audio.current,
                  volume: z,
                  onMuteChange: r.handleMuteChange,
                  showFilledVolume: v,
                  i18nVolumeControl: M.volumeControl,
                })
              )
            );
          }
          default:
            return b.isValidElement(l)
              ? l.key
                ? l
                : b.cloneElement(l, { key: a })
              : null;
        }
      }),
      r
    );
  }
  return (
    Lo(n, [
      {
        key: "componentDidMount",
        value: function () {
          var i = this;
          this.forceUpdate();
          var o = this.audio.current;
          this.props.muted ? (o.volume = 0) : (o.volume = this.lastVolume),
            o.addEventListener("error", function (s) {
              i.props.onError && i.props.onError(s);
            }),
            o.addEventListener("canplay", function (s) {
              i.props.onCanPlay && i.props.onCanPlay(s);
            }),
            o.addEventListener("canplaythrough", function (s) {
              i.props.onCanPlayThrough && i.props.onCanPlayThrough(s);
            }),
            o.addEventListener("play", this.handlePlay),
            o.addEventListener("abort", this.handleAbort),
            o.addEventListener("ended", this.handleEnded),
            o.addEventListener("playing", function (s) {
              i.props.onPlaying && i.props.onPlaying(s);
            }),
            o.addEventListener("seeking", function (s) {
              i.props.onSeeking && i.props.onSeeking(s);
            }),
            o.addEventListener("seeked", function (s) {
              i.props.onSeeked && i.props.onSeeked(s);
            }),
            o.addEventListener("waiting", function (s) {
              i.props.onWaiting && i.props.onWaiting(s);
            }),
            o.addEventListener("emptied", function (s) {
              i.props.onEmptied && i.props.onEmptied(s);
            }),
            o.addEventListener("stalled", function (s) {
              i.props.onStalled && i.props.onStalled(s);
            }),
            o.addEventListener("suspend", function (s) {
              i.props.onSuspend && i.props.onSuspend(s);
            }),
            o.addEventListener("loadstart", function (s) {
              i.props.onLoadStart && i.props.onLoadStart(s);
            }),
            o.addEventListener("loadedmetadata", function (s) {
              i.props.onLoadedMetaData && i.props.onLoadedMetaData(s);
            }),
            o.addEventListener("loadeddata", function (s) {
              i.props.onLoadedData && i.props.onLoadedData(s);
            }),
            o.addEventListener("pause", this.handlePause),
            o.addEventListener(
              "timeupdate",
              i1(function (s) {
                i.props.onListen && i.props.onListen(s);
              }, this.props.listenInterval)
            ),
            o.addEventListener("volumechange", function (s) {
              i.props.onVolumeChange && i.props.onVolumeChange(s);
            }),
            o.addEventListener("encrypted", function (s) {
              var l = i.props.mse;
              l && l.onEcrypted && l.onEcrypted(s);
            });
        },
      },
      {
        key: "componentDidUpdate",
        value: function (i) {
          var o = this.props,
            s = o.src,
            l = o.autoPlayAfterSrcChange;
          i.src !== s && (l ? this.playAudioPromise() : this.forceUpdate());
        },
      },
      {
        key: "render",
        value: function () {
          var i = this.props,
            o = i.className,
            s = i.src,
            l = i.loop,
            a = i.preload,
            c = i.autoPlay,
            d = i.crossOrigin,
            f = i.mediaGroup,
            p = i.header,
            h = i.footer,
            v = i.layout,
            y = i.customProgressBarSection,
            w = i.customControlsSection,
            m = i.children,
            g = i.style,
            x = i.i18nAriaLabels,
            S = this.audio.current ? this.audio.current.loop : l,
            j = S ? "rhap_loop--on" : "rhap_loop--off",
            E = this.isPlaying()
              ? "rhap_play-status--playing"
              : "rhap_play-status--paused";
          return A.createElement(
            "div",
            {
              role: "group",
              tabIndex: 0,
              "aria-label": x.player,
              className: "rhap_container "
                .concat(j, " ")
                .concat(E, " ")
                .concat(o),
              onKeyDown: this.handleKeyDown,
              ref: this.container,
              style: g,
            },
            A.createElement(
              "audio",
              {
                src: s,
                controls: !1,
                loop: S,
                autoPlay: c,
                preload: a,
                crossOrigin: d,
                mediaGroup: f,
                ref: this.audio,
              },
              m
            ),
            p && A.createElement("div", { className: "rhap_header" }, p),
            A.createElement(
              "div",
              { className: "rhap_main ".concat(o4(v)) },
              A.createElement(
                "div",
                { className: "rhap_progress-section" },
                this.renderUIModules(y)
              ),
              A.createElement(
                "div",
                { className: "rhap_controls-section" },
                this.renderUIModules(w)
              )
            ),
            h && A.createElement("div", { className: "rhap_footer" }, h)
          );
        },
      },
    ]),
    n
  );
})(b.Component);
F(o1, "defaultProps", {
  autoPlay: !1,
  autoPlayAfterSrcChange: !0,
  listenInterval: 1e3,
  progressJumpStep: 5e3,
  progressJumpSteps: {},
  volumeJumpStep: 0.1,
  loop: !1,
  muted: !1,
  preload: "auto",
  progressUpdateInterval: 20,
  defaultCurrentTime: "--:--",
  defaultDuration: "--:--",
  timeFormat: "auto",
  volume: 1,
  className: "",
  showJumpControls: !0,
  showSkipControls: !1,
  showDownloadProgress: !0,
  showFilledProgress: !0,
  showFilledVolume: !1,
  customIcons: {},
  customProgressBarSection: [Te.CURRENT_TIME, Te.PROGRESS_BAR, Te.DURATION],
  customControlsSection: [
    Te.ADDITIONAL_CONTROLS,
    Te.MAIN_CONTROLS,
    Te.VOLUME_CONTROLS,
  ],
  customAdditionalControls: [Te.LOOP],
  customVolumeControls: [Te.VOLUME],
  layout: "stacked",
  hasDefaultKeyBindings: !0,
  i18nAriaLabels: {
    player: "Audio player",
    progressControl: "Audio progress control",
    volumeControl: "Volume control",
    play: "Play",
    pause: "Pause",
    rewind: "Rewind",
    forward: "Forward",
    previous: "Previous",
    next: "Skip",
    loop: "Disable loop",
    loopOff: "Enable loop",
    volume: "Mute",
    volumeMute: "Unmute",
  },
});
const st = b.memo(() => {
    const e = Se(),
      t = () => {
        e(Rv());
      },
      { user: n, selectedSong: r } = X((p) => p.user),
      [i, o] = b.useState([]),
      s = (p) => {
        p.stopPropagation();
      };
    b.useEffect(() => {
      n && n.playmusic && (o(n.playmusic), console.log(i));
    }, [n == null ? void 0 : n.playmusic]);
    const [l, a] = b.useState(0),
      [c, d] = b.useState(i[0]);
    b.useEffect(() => {
      d(i[l]);
    }, [i, l]);
    const f = i.find((p) => p.name === (r == null ? void 0 : r.name));
    return u.jsx(u.Fragment, {
      children: u.jsxs(vb, {
        onClick: t,
        children: [
          u.jsxs("div", {
            children: [
              u.jsx("div", {
                className: "inst",
                children: f
                  ? u.jsxs("div", {
                      children: [
                        f.image &&
                          u.jsx("img", {
                            src: f.album ? `./${f.image}` : `${f.image}`,
                            alt: "",
                          }),
                        u.jsx("span", { children: f.name }),
                      ],
                    })
                  : u.jsxs("div", {
                      children: [
                        c &&
                          c.image &&
                          u.jsx("img", {
                            src: c.album ? `./${c.image}` : `${c.image}`,
                            alt: "",
                          }),
                        c && u.jsx("span", { children: c.name }),
                      ],
                    }),
              }),
              u.jsx("div", {
                onClick: s,
                children: u.jsx(o1, {
                  className: "audio_player",
                  style: { width: "24%" },
                  autoPlay: !1,
                  volume: 1,
                  src: "https://docs.google.com/uc?export=open&id=14JlzHWUE2TqAsN237ft43SOw02xDPori",
                  onPlay: (p) => console.log("onPlay"),
                  onEnded: () => {
                    a((p) => (p + 1) % i.length);
                  },
                }),
              }),
            ],
          }),
          u.jsx(Vj, {}),
        ],
      }),
    });
  }),
  Nh = localStorage.getItem("sign"),
  Mh = localStorage.getItem("newSignUpData"),
  S4 = {
    sign: Nh ? JSON.parse(Nh) : [],
    chked1: !1,
    chked2: !1,
    chked3: !1,
    chked4: !1,
    chked5: !1,
    totalChked: !1,
    UserID: "",
    UserPassword: "",
    eMail: "",
    phone: "",
    eMail_select: "",
    repassword: "",
    newSignUpData: Mh ? JSON.parse(Mh) : [],
  },
  s1 = gi({
    name: "sign",
    initialState: S4,
    reducers: {
      changeChked1(e, t) {
        e.chked1 = !e.chked1;
      },
      changeChked2(e, t) {
        e.chked2 = !e.chked2;
      },
      changeChked3(e, t) {
        e.chked3 = !e.chked3;
      },
      changeChked4(e, t) {
        e.chked4 = !e.chked4;
      },
      changeChked5(e, t) {
        e.chked5 = !e.chked5;
      },
      changetotal(e, t) {
        (e.totalChked = !e.totalChked),
          e.totalChked &&
            ((e.chked1 = !0),
            (e.chked2 = !0),
            (e.chked3 = !0),
            (e.chked4 = !0),
            (e.chked5 = !0)),
          e.totalChked ||
            ((e.chked1 = !1),
            (e.chked2 = !1),
            (e.chked3 = !1),
            (e.chked4 = !1),
            (e.chked5 = !1));
      },
      onchkedsubmit(e, t) {
        e.chked1 && e.chked2 && e.chked3
          ? localStorage.setItem("sign", JSON.stringify(e.sign))
          : alert("필수 약관에 동의해야 회원가입이 가능합니다.");
      },
      changeUSERID(e, t) {
        e.UserID = t.payload;
      },
      changePASSWORD(e, t) {
        e.UserPassword = t.payload;
      },
      changeEMAIL(e, t) {
        e.eMail = t.payload;
      },
      changePHONE(e, t) {
        e.phone = t.payload;
      },
      chingeselect(e, t) {
        e.eMail_select = t.payload;
      },
      chingeREPASSWORD(e, t) {
        e.repassword = t.payload;
      },
      onSignUpSubmit(e, t) {
        if (
          e.UserID &&
          e.UserPassword &&
          e.eMail &&
          e.phone &&
          e.eMail_select &&
          e.UserPassword === e.repassword
        ) {
          const n = {
            UserID: e.UserID,
            UserPassword: e.UserPassword,
            eMail: e.eMail,
            phone: e.phone,
            eMail_select: e.eMail_select,
            chked1: e.chked1,
            chked2: e.chked2,
            chked3: e.chked3,
            chked4: e.chked4,
            chked5: e.chked5,
          };
          (e.sign = [n]), localStorage.setItem("sign", JSON.stringify(e.sign));
          const r = [...e.newSignUpData, n];
          localStorage.setItem("newSignUpData", JSON.stringify(r)),
            (e.newSignUpData = r),
            (e.chked1 = !1),
            (e.chked2 = !1),
            (e.chked3 = !1),
            (e.chked4 = !1),
            (e.chked5 = !1),
            (e.totalChked = !1),
            (e.UserID = ""),
            (e.UserPassword = ""),
            (e.repassword = ""),
            (e.eMail = ""),
            (e.phone = ""),
            (e.eMail_select = "");
        } else alert("정보를 다시 확인해주세요");
      },
      loggout(e, t) {
        const n = t.payload,
          r = e.newSignUpData.map((i) =>
            i.UserID === n.login_UserID &&
            i.UserPassword === n.login_UserPassword
              ? {
                  ...i,
                  user: {
                    pick: n.pick || [],
                    playList: n.playList || [],
                    playmusic: n.playmusic || [],
                  },
                }
              : i
          );
        localStorage.setItem("newSignUpData", JSON.stringify(r)),
          (e.newSignUpData = r);
      },
    },
  }),
  {
    changeChked1: b4,
    changeChked2: j4,
    changeChked3: E4,
    changeChked4: k4,
    changeChked5: C4,
    onchkedsubmit: P4,
    changeUSERID: T4,
    changePASSWORD: O4,
    changeEMAIL: _4,
    changePHONE: L4,
    onSignUpSubmit: N4,
    chingeselect: M4,
    chingeREPASSWORD: A4,
    changetotal: R4,
    loggout: I4,
  } = s1.actions,
  z4 = s1.reducer,
  lt = b.memo(() => {
    const e = Dt(),
      [t, n] = b.useState(""),
      r = (h) => n(h.target.value),
      i = (h) => {
        h.preventDefault(), e(`/${t}`);
      },
      { user: o } = X((h) => h.user);
    X((h) => h.signup);
    const s = o && o.login_UserID,
      l = Se(),
      a = () => {
        l(I4(o)), l(Ij()), e("/");
      },
      c = () => (window.innerWidth <= 1400 ? 2 : 3),
      [d, f] = b.useState(c());
    b.useEffect(() => {
      const h = () => {
        window.innerWidth > 1400 ? f(3) : f(2);
      };
      return (
        window.addEventListener("resize", h),
        () => {
          window.removeEventListener("resize", h);
        }
      );
    }, [d]);
    const p = (h) => {
      o || (alert("로그인 후 이용 가능합니다."), h.preventDefault());
    };
    return u.jsxs(gb, {
      children: [
        u.jsx("h2", {
          children: u.jsx(qe, {
            to: "/",
            children:
              d === 3
                ? u.jsx("img", {
                    className: "big",
                    src: "./biglogo.png",
                    alt: "",
                  })
                : u.jsx("img", {
                    className: "small",
                    src: "/vite.svg",
                    alt: "",
                  }),
          }),
        }),
        u.jsx("hr", {}),
        o
          ? u.jsxs(u.Fragment, {
              children: [
                d === 3
                  ? u.jsx(Re, {
                      to: "/storage",
                      children: u.jsxs("span", {
                        children: [" ", s, " 님 환영합니다!  "],
                      }),
                    })
                  : null,
                u.jsxs("button", {
                  className: "logoutbit",
                  onClick: () => a(),
                  children: [" ", u.jsx(qb, {}), d === 3 ? "로그아웃" : ""],
                }),
              ],
            })
          : u.jsxs(qe, {
              to: "/Login",
              children: [
                u.jsx(Zb, {}),
                u.jsx("span", { children: d === 3 ? "로그인" : "" }),
                " ",
              ],
            }),
        u.jsx("hr", {}),
        d === 3
          ? u.jsxs(u.Fragment, {
              children: [
                u.jsx("form", {
                  onSubmit: i,
                  children: u.jsx("input", {
                    type: "text",
                    placeholder: "검색 가능",
                    value: t,
                    onChange: r,
                  }),
                }),
                u.jsx("hr", {}),
              ],
            })
          : null,
        u.jsxs("ul", {
          children: [
            u.jsx("li", {
              children: u.jsxs(qe, {
                to: "/",
                className: ({ isActive: h }) => (h ? "on" : ""),
                children: [u.jsx(Bb, {}), d === 3 ? "홈" : ""],
              }),
            }),
            u.jsx("li", {
              children: u.jsxs(qe, {
                to: "/chart",
                className: ({ isActive: h }) => (h ? "on" : ""),
                children: [u.jsx(Vb, {}), " ", d === 3 ? "차트" : ""],
              }),
            }),
            u.jsx("li", {
              children: u.jsxs(qe, {
                to: "/storage",
                onClick: p,
                className: ({ isActive: h }) => (h ? "on" : ""),
                children: [u.jsx($b, {}), d === 3 ? "보관함" : ""],
              }),
            }),
            u.jsx("li", {
              children: u.jsxs(qe, {
                to: "/list",
                className: ({ isActive: h }) => (h ? "on" : ""),
                children: [u.jsx(Ib, {}), d === 3 ? "리스트" : ""],
              }),
            }),
            u.jsx("li", {
              children: u.jsxs(qe, {
                to: "/event",
                className: ({ isActive: h }) => (h ? "on" : ""),
                children: [u.jsx(Fb, {}), d === 3 ? "멤버쉽" : ""],
              }),
            }),
          ],
        }),
      ],
    });
  }),
  D4 = W.div`
  height: 100%;
  background-color: #000;
  box-sizing: border-box;
  overflow: hidden;

  p h2 {
    font-size: 50px;
    text-align: center;
    padding: 80px;
    position: relative;
    left: 5%;
    color: rgb(217, 217, 217);
  }
  ul {
    height: 100px;
    display: flex;
    justify-content: center;
    font-weight: 700;
    margin: 40px;
    color: rgb(217, 217, 217);
    position: relative;
    left: 5%;
    li {
      height: 100px;
      display: flex;
      align-items: center;
      padding: 0 25px;
      min-width: 100px;
      height: 100%;
      cursor: pointer;
      font-size: 25px;
      a {
        font-size: 25px;
        padding: 0 25px;
        color: rgb(217, 217, 217);
      }
    }
    li:hover {
      color: red;
      a {
        color: red;
      }
    }
  }
  form {
    display: flex;
    justify-content: center;
    position: relative;
    margin: 20px;
    left: 5%;
    input {
      width: 700px;
      height: 60px;
      border-radius: 30px;
      border: 1px solid #222;
      text-indent: 50px;
      font-size: 20px;
      outline: none;
    }
    button {
      background-color: transparent;
      border: none;
      font-size: 40px;
      position: relative;
      right: 60px;
      width: 20px;
      height: 20px;
      transform: translateY(50%);
    }
  }
  table {
    margin: 0 auto;
    width: 60%;
    position: relative;
    left: 5%;
    caption {
      display: none;
    }
    .NO {
      width: 80px;
    }
    .table_editor {
      width: 48px;
    }
    thead {
      display: none;
    }
    tbody {
      tr {
        height: 150px;
        border-bottom: 1px solid;
        td {
          text-align: left;
          vertical-align: middle;
          font-size: 20px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          color: rgb(217, 217, 217);
          a {
            font-size: 20px;
            color: rgb(217, 217, 217);
          }
        }
        td:hover {
          a {
            color: rgb(51, 51, 51);
            font-size: 25px;
            font-weight: 700;
          }
        }
      }
      td:nth-child(3),
      td:nth-child(4) {
        font-size: 13px;
        color: rgb(217, 217, 217);
      }
      td:nth-child(1) {
        font-size: 15px;
        font-weight: 700;
      }
    }
  }
  p {
    display: flex;
    justify-content: center;
    padding: 50px 0;
    position: relative;
    left: 5%;
    button {
      width: 320px;
      height: 50px;
      font-size: 12px;
      font-weight: 700;
      background-color: transparent;
      border: 1px solid rgb(217, 217, 217);
      border-radius: 20px;
      color: rgb(217, 217, 217);
    }
  }
`,
  $4 = W.div`
  width: 100%;
  height: 100%;
  padding-left: 100px;
  background-color: #000;
  overflow: hidden;

  ul {
    height: 100px;
    display: flex;
    justify-content: center;
    font-weight: 700;
    padding: 40px 0;

    li {
      height: 100px;
      display: flex;
      align-items: center;
      padding: 0 15px;
      min-width: 100px;
      height: 100%;
      cursor: pointer;
      font-size: 25px;
      color: rgb(217, 217, 217);
      a {
        font-size: 25px;
      }
    }
    .QnaMenu:hover {
      color: red;
    }
  }
  table {
    margin: 50px auto;
    width: 60%;
    caption {
      display: none;
    }
    .table_No {
      width: 120px;
    }
    .tableQna_title {
      text-align: center;
    }
    thead {
      height: 40px;
      tr {
        border-top: 2px solid rgb(235, 235, 235);
        border-bottom: 1px solid rgb(217, 217, 217);
        th {
          font-size: 12px;
          vertical-align: middle;
        }
      }
    }
    tbody {
      tr {
        height: 100px;
        border-bottom: 1px solid rgb(235, 235, 235);
        td {
          vertical-align: middle;
          position: relative;
          color: rgb(217, 217, 217);
          strong {
            display: block;
          }
          strong.on {
            height: 50px;
            width: 100%;
            padding: 20px 0;
            text-indent: 20px;
            background-color: #222222;
            font-size: 24px;
            border-bottom: 1px solid darkgray;
          }
          p {
            position: absolute;
            right: 3%;
            top: 50%;
            transform: translateY(-50%);
            font-size: 15px;
            color: gray;
          }
          p.on {
            position: absolute;
            right: 3%;
            top: 20px;
            transform: translateY(-50%);
            font-size: 15px;
            color: gray;
          }
          ul {
            display: none;
            flex-direction: column;
            li {
              font-size: 12px;
              line-height: 2;
              display: flex;
              justify-content: left;
              display: flex;
              width: 80%;
              padding-left: 20px;
              color: lightgray;
              img {
                width: 100px;
                height: 100px;
              }
            }
          }
        }
      }
      tr td:first-child {
        text-align: center;
        font-weight: 700;
      }
      tr td:nth-child(2) ul.on {
        background-color: #222222;
        font-size: 14px;
      }
      tr td:first-child ul.on {
        background-color: #333333;
      }
      ul.on {
        display: flex;
        height: 150px;
        padding: 50px 0;
      }
    }
  }
  .prev {
    padding: 50px 0;
    background-color: transparent;
    border: none;
    width: 100%;
    display: flex;
    justify-content: center;
    button {
      width: 320px;
      height: 50px;
      font-size: 12px;
      font-weight: 700;
      background-color: transparent;
      border: 1px solid rgb(235, 235, 235);
      border-radius: 20px;
      color: rgb(217, 217, 217);
    }
  }
`,
  F4 = W.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  padding: 100px 0;
  overflow: hidden;

  h2 {
    font-size: 50px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    margin-bottom: 50px;
    position: relative;
    left: 5%;
  }
  form {
    width: 700px;
    height: 500px;
    border: 1px solid rgb(217, 217, 217);
    margin: auto;
    padding: 50px 120px;
    box-sizing: border-box;
    position: relative;
    left: 5%;

    input[type="text"] {
      width: 440px;
      height: 60px;
      border: none;
      border-bottom: 1px solid rgb(217, 217, 217);
      font-size: 16px;
      font-weight: 700;
      color: rgb(217, 217, 217);
      outline: none;
      margin-bottom: 10px;
      background-color: transparent;
    }
    input::placeholder {
      color: rgb(235, 235, 235);
      font-size: 16px;
    }
    .login_submit {
      width: 410px;
      height: 110px;
      padding-top: 20px;

      input[type="checkbox"] {
        width: 15px;
        height: 15px;
        margin-left: 10px;
      }

      label {
        font-size: 14px;
        color: rgb(24, 24, 24);
        margin-left: 15px;
        color: rgb(217, 217, 217);
      }
      .Login_Btn {
        width: 440px;
        height: 60px;
        margin-top: 30px;
        background-color: rgb(63, 63, 255);
        border: none;
        font-size: 18px;
        font-weight: 700;
        color: #fff;
      }
    }
    .LoginJoin_btn {
      position: absolute;
      right: 140px;
      transform: translateY(50%);
      a {
        color: rgb(217, 217, 217);
      }
    }
    .Login_type {
      display: flex;
      margin-top: 70px;
      justify-content: center;
      button {
        width: 215px;
        height: 60px;
        font-size: 14px;
        font-weight: 700;
        color: #fff;
        border: none;
        margin-right: 10px;
        border: 1px solid rgb(235, 235, 235);
      }
      button:first-child {
        background-color: rgb(51, 51, 51);
        color: #fff;
        border: none;
      }
      button:last-child {
        background-color: #fff;
        color: #000;
      }
    }
  }
`,
  U4 = W.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  padding: 100px 0;
  margin: auto;
  overflow: hidden;

  h2 {
    text-align: center;
    position: relative;
    left: 5%;
    img {
      width: 80px;
      height: 60px;
      margin: 20px 0;
    }
  }
  form {
    width: 600px;
    height: 600px;
    margin: auto;
    padding: 60px 120px;
    border: 1px solid rgb(217, 217, 217);
    position: relative;
    left: 5%;
    h3 {
      text-align: center;
      font-size: 30px;
      font-weight: 700;
      padding-bottom: 30px;
      border-bottom: 1px solid rgb(217, 217, 217);
      color: #fff;
    }
    div {
      margin-top: 20px;
      height: 40px;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      font-size: 16px;
      input {
        width: 15px;
        height: 15px;
        margin-right: 15px;
      }
      strong {
        position: absolute;
        right: 0;
        a {
          font-size: 12px;
          font-weight: 700;
          color: #fff;
        }
      }
      label {
        p {
          display: inline;
          color: rgb(63, 63, 255);
          font-weight: 700;
          margin-right: 10px;
        }
        span {
          color: lightgray;
        }
      }
      .total {
        font-size: 16px;
        font-weight: 700;
      }
      em {
        display: block;
        margin-left: 35px;
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        font-weight: 700;
      }
    }
    div:last-of-type {
      padding-top: 20px;
      border-top: 1px solid rgb(217, 217, 217);
      span {
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
  p {
    margin: 70px 0;
    text-align: center;
    button {
      width: 480px;
      height: 60px;
      background-color: #3f3fff;
      border: none;
      font-size: 18px;
      font-weight: 700;
      color: #fff;
    }
  }
`,
  B4 = W.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  padding: 100px 0;
  margin: auto;
  overflow: hidden;

  div {
    width: 900px;
    height: 100%;
    margin: auto;
    box-sizing: border-box;
    position: relative;
    left: 3%;
    h2 {
      text-align: center;
      position: relative;
      left: 3%;
      img {
        width: 80px;
        height: 60px;
        margin: 20px 0;
      }
    }
    form {
      padding: 60px 120px;
      border: 1px solid rgb(217, 217, 217);
      text-align: center;
      h3 {
        font-size: 50px;
        font-weight: 70;
        color: #fff;
        margin-bottom: 50px;
      }
      div {
        position: relative;
        width: 100%;
        color: #fff;
        input {
          width: 560px;
          height: 60px;
          border: none;
          border-bottom: 1px solid rgb(235, 235, 235);
          font-size: 20px;
          font-weight: 700;
          font-weight: normal;
          color: rgb(217, 217, 217);
          outline: none;
          margin-bottom: 10px;
          background-color: transparent;
        }
        input::placeholder {
          font-size: 18px;
          font-weight: 600;
          color: rgb(217, 217, 217);
        }
        p {
          display: block;
          width: 380px;
          margin: 20px;
          text-align: left;
          font-size: 14px;
          padding-left: 30px;
          color: lightgray;
        }
        .emil {
          width: 260px;
          height: 60px;
          margin-right: 10px;
          outline: none;
          border-bottom: 1px solid rgb(217, 217, 217);
          color: rgb(217, 217, 217);
        }
        select {
          width: 260px;
          height: 60px;
          margin-left: 10px;
          outline: none;
          border: none;
          border-bottom: 1px solid rgb(217, 217, 217);
          font-size: 18px;
          font-weight: 700;
          color: rgb(217, 217, 217);
          background-color: transparent;
        }
      }
      .Certified {
        position: relative;
        width: 580px;
        height: 60px;
        background-color: #3f3fff;
        border: none;
        font-size: 18px;
        font-weight: 700;
        color: #fff;
        margin: 50px auto;
        line-height: 3;
        left: 3%;
      }
    }
  }
`,
  V4 = W.div`
  width: 100%;
  height: 800px;
  background-color: #000;
  overflow: hidden;

  div {
    padding: 50px 40px;
    width: 1200px;
    height: 500px;
    margin: auto;
    border: 1px solid rgb(217, 217, 217);
    box-sizing: border-box;
    position: relative;
    left: 8%;
    top: 15%;
    text-align: center;

    h2 {
      font-size: 60px;
      color: #3f3fff;
    }
    h3 {
      font-size: 50px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 30px;
      color: #fff;
    }
    strong {
      margin: auto;
      display: block;
      width: 50%;
      font-size: 18px;
      color: rgb(51, 51, 51);
    }
  }
  p {
    button {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translatex(-50%);
      width: 220px;
      height: 60px;
      background-color: #3f3fff;
      border: none;
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      margin: 30px 0;
    }
  }
`,
  H4 = W.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  padding: 100px 0 50px 150px;
  position: relative;
  box-sizing: border-box;
  h2 {
    font-size: 25px;
    font-weight: 700;
    text-align: left;
    padding: 30px 0;
    color: rgb(217, 217, 217);
  }
  .playList,
  .playList2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 250px;
    position: relative;
    border-bottom: 1px solid rgb(217, 217, 217);
    .storageBox {
      width: 250px;
      height: 250px;
      background-color: gray;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 120px;
      color: #800000;
    }
    .storageBox2 {
      width: 250px;
      height: 250px;
      background-color: gray;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 80px;
      color: #000;
    }

    p {
      font-size: 20px;
    }
    strong {
      font-size: 30px;
      font-weight: normal;
    }
  }
  .table1,
  .table2 {
    width: 90%;
    height: 100%;
    text-align: left;
    margin: 50px 0;
    caption {
      display: none;
    }
    thead {
      tr {
        th {
          width: 100px;
          font-weight: 700;
          font-size: 14px;
          display: none;
        }
        th:nth-child(3) {
          text-align: center;
        }
      }
    }

    tbody {
      tr {
        width: 80px;
        white-space: nowrap;
        height: 80px;
        img {
          width: 50px;
          height: 50px;
          vertical-align: middle;
        }
        button {
          width: 140px;
          height: 50px;
          background-color: #000;
          border: 1px solid #202020;
          color: #fff;
          font-weight: 700;
          font-size: 12px;
          padding: 0;
          text-align: center;
        }
        p {
          font-size: 16px;
          font-weight: 700;
        }
      }
      td:nth-child(3) {
        text-align: center;
      }
    }
  }
`,
  W4 = W.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  padding: 100px 0;
  overflow: hidden;
  div {
    width: 80%;
    margin: auto;
    position: relative;
    left: 3%;
    text-align: center;
    h2 {
      font-size: 40px;
      text-align: center;
      position: relative;
      left: 3%;
      padding-bottom: 50px;
      color: rgb(235, 235, 235);
    }
    .item_textbox {
      display: flex;
      height: 50px;
      align-items: center;
      width: 100%;
      border-top: 3px solid rgb(235, 235, 235);
      border-bottom: 1px solid rgb(51, 51, 51);
      p {
        margin-right: 20px;
        color: lightgray;
      }
    }

    .info {
      width: 50%;
      text-align: center;
      padding: 50px 0;
      img {
        margin-bottom: 10px;
      }
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 80%;

        strong {
          color: rgb(235, 235, 235);
          font-size: 12px;
          display: block;
          margin-bottom: 20px;
        }
        p {
          font-size: 18px;
          font-weight: 700;
          margin: 20px 0;
          color: #fff;
        }
      }
      p {
        font-size: 18px;
        margin: 20px 0;
        color: #fff;
      }
    }

    .button_onprev {
      padding: 30px 0;
      width: 100%;
      position: relative;
      left: 3%;
      border-top: 1px solid rgb(51, 51, 51);
      margin: auto;
      button {
        width: 240px;
        height: 60px;
        background-color: #3f3fff;
        border: none;
        font-size: 18px;
        font-weight: 700;
        color: #fff;
        position: absolute;
        left: 52%;
        transform: translateX(-50%);
      }
    }
  }
`,
  G4 = W.div`
  width: 100%;
  height: 200px;
  position: relative;
  box-sizing: border-box;
  background-color: #111111;
  padding: 40px 25px 0 25px;
  z-index: 1;
  ul {
    display: flex;
    li {
      color: #666;
      p {
        display: inline;
        color: #999;
      }
    }
  }
  ul:last-child {
    margin: 25px 0;
    li {
      margin-right: 15px;
      a {
      }
    }
  }
`,
  K4 = W.div`
  width: 60%;
  margin: auto;
  h2 {
    text-align: center;
    font-size: 25px;
    font-weight: 700;
    color: #fff;
    margin: 50px 0;
  }
  h3 {
    text-align: center;
    font-size: 25px;
    font-weight: 700;
    color: #fff;
    margin: 80px 0;
  }
  .textLi {
    text-align: center;
    margin-bottom: 50px;
    padding: 0;
    li {
      font-size: 15px;
      font-weight: normal;
      border: 1px solid red;
      border-radius: 20px;
      list-style-type: none;
      strong {
        display: block;
      }
      span {
        display: inline;
        font-size: 23px;
        font-weight: 700;
      }
      p {
        display: inline;
        font-size: 12px;
        color: darkgray;
      }
    }
  }
  ul {
    padding-left: 30px;
    li {
      font-size: 15px;
      font-weight: lighter;
      line-height: 2;
      list-style-type: disc;

      span {
        color: red;
      }
    }
  }
  p {
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 120px;
      height: 50px;
      background-color: transparent;
      font-size: 20px;
    }
    button:first-child {
      color: #fff;
      border: 1px solid #fff;
      margin-right: 30px;
    }
    button:last-child {
      color: #fff;
      background-color: #0a22fb;
      border: none;
    }
  }
`,
  q4 = W.div`
  color: gray;
  font-size: 15px;
  margin: 50px 0;
  width: 900px;
  @media (max-width: 1400px) {
    width: 700px;
  }
  line-height: 3;
  overflow:hidden;
  text-overflow: ellipsis;
`,
  J4 = W.div`
  width: 900px;
  height: 60px;
  @media (max-width: 1400px) {
    width: 700px;
  }
  button{
    margin: 0 0 0 30px;
    height: 40px;
    width: 200px;
    border-radius: 20px;
    font-size: 18px;
    background: none;
    color: white;
    border: 1px solid #1a1a1a;
  }
`,
  Q4 = W.div`
  line-height: 2.5;
  width: 80%;
`,
  at = () =>
    u.jsxs(G4, {
      children: [
        u.jsxs("ul", {
          children: [
            u.jsxs("li", {
              children: [
                "(주) 대표 이사 : ",
                u.jsx("p", { children: "최수연" }),
              ],
            }),
            u.jsxs("li", {
              children: [
                "사업자 등록번호 : ",
                u.jsx("p", { children: "000-00-00000" }),
              ],
            }),
            u.jsxs("li", {
              children: [
                "통신 판매 업신고 번호 : ",
                u.jsx("p", { children: "제2006-경기성남-000호" }),
              ],
            }),
          ],
        }),
        u.jsxs("ul", {
          children: [
            u.jsxs("li", {
              children: [
                "주소 : ",
                u.jsx("p", {
                  children: "경기도 성남시 분당구 정자일로 95, 2층 13561",
                }),
              ],
            }),
            u.jsxs("li", {
              children: ["대표번호 : ", u.jsx("p", { children: "0000-0000" })],
            }),
            u.jsxs("li", {
              children: [
                "이메일 : ",
                u.jsx("p", { children: "lyola2511@naver.com" }),
              ],
            }),
            u.jsxs("li", {
              children: [
                "참고 서비스 제공 : ",
                u.jsx("p", { children: "VIBE,FLO,genie" }),
              ],
            }),
          ],
        }),
        u.jsxs("ul", {
          children: [
            u.jsx("li", {
              children: u.jsx(Re, {
                to: "/Login/FooterPolicy",
                children: "개인정보처리방침",
              }),
            }),
            u.jsx("li", {
              children: u.jsx(Re, {
                to: "/Login/FooterPolicy",
                children: "이용약관",
              }),
            }),
            u.jsx("li", {
              children: u.jsx(Re, { to: "/storage", children: "고객센터" }),
            }),
            u.jsx("li", {
              children: u.jsx(Re, {
                to: "/storage",
                children: "결제 / 환불 관리",
              }),
            }),
          ],
        }),
      ],
    });
function Ah(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function hf(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : Ah(t[n]) &&
          Ah(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          hf(e[n], t[n]);
    });
}
const l1 = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function br() {
  const e = typeof document < "u" ? document : {};
  return hf(e, l1), e;
}
const Y4 = {
  document: l1,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function yt() {
  const e = typeof window < "u" ? window : {};
  return hf(e, Y4), e;
}
function X4(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function Dc(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function cl() {
  return Date.now();
}
function Z4(e) {
  const t = yt();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function ek(e, t) {
  t === void 0 && (t = "x");
  const n = yt();
  let r, i, o;
  const s = Z4(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = s.transform || s.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (o = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((o =
          s.MozTransform ||
          s.OTransform ||
          s.MsTransform ||
          s.msTransform ||
          s.transform ||
          s
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = o.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = o.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = o.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function ns(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function tk(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function ct() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !tk(r)) {
      const i = Object.keys(Object(r)).filter((o) => t.indexOf(o) < 0);
      for (let o = 0, s = i.length; o < s; o += 1) {
        const l = i[o],
          a = Object.getOwnPropertyDescriptor(r, l);
        a !== void 0 &&
          a.enumerable &&
          (ns(e[l]) && ns(r[l])
            ? r[l].__swiper__
              ? (e[l] = r[l])
              : ct(e[l], r[l])
            : !ns(e[l]) && ns(r[l])
            ? ((e[l] = {}), r[l].__swiper__ ? (e[l] = r[l]) : ct(e[l], r[l]))
            : (e[l] = r[l]));
      }
    }
  }
  return e;
}
function rs(e, t, n) {
  e.style.setProperty(t, n);
}
function a1(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = yt(),
    o = -t.translate;
  let s = null,
    l;
  const a = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const c = n > o ? "next" : "prev",
    d = (p, h) => (c === "next" && p >= h) || (c === "prev" && p <= h),
    f = () => {
      (l = new Date().getTime()), s === null && (s = l);
      const p = Math.max(Math.min((l - s) / a, 1), 0),
        h = 0.5 - Math.cos(p * Math.PI) / 2;
      let v = o + h * (n - o);
      if ((d(v, n) && (v = n), t.wrapperEl.scrollTo({ [r]: v }), d(v, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: v });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(f);
    };
  f();
}
function rn(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t));
}
function nk(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : [t])), n;
}
function rk(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function ik(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function Pn(e, t) {
  return yt().getComputedStyle(e, null).getPropertyValue(t);
}
function Rh(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function ok(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
  return n;
}
function Ih(e, t, n) {
  const r = yt();
  return n
    ? e[t === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
        )
    : e.offsetWidth;
}
let cu;
function sk() {
  const e = yt(),
    t = br();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function u1() {
  return cu || (cu = sk()), cu;
}
let du;
function lk(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = u1(),
    r = yt(),
    i = r.navigator.platform,
    o = t || r.navigator.userAgent,
    s = { ios: !1, android: !1 },
    l = r.screen.width,
    a = r.screen.height,
    c = o.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = o.match(/(iPad).*OS\s([\d_]+)/);
  const f = o.match(/(iPod)(.*OS\s([\d_]+))?/),
    p = !d && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    h = i === "Win32";
  let v = i === "MacIntel";
  const y = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !d &&
      v &&
      n.touch &&
      y.indexOf(`${l}x${a}`) >= 0 &&
      ((d = o.match(/(Version)\/([\d.]+)/)),
      d || (d = [0, 1, "13_0_0"]),
      (v = !1)),
    c && !h && ((s.os = "android"), (s.android = !0)),
    (d || p || f) && ((s.os = "ios"), (s.ios = !0)),
    s
  );
}
function ak(e) {
  return e === void 0 && (e = {}), du || (du = lk(e)), du;
}
let fu;
function uk() {
  const e = yt();
  let t = !1;
  function n() {
    const r = e.navigator.userAgent.toLowerCase();
    return (
      r.indexOf("safari") >= 0 &&
      r.indexOf("chrome") < 0 &&
      r.indexOf("android") < 0
    );
  }
  if (n()) {
    const r = String(e.navigator.userAgent);
    if (r.includes("Version/")) {
      const [i, o] = r
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((s) => Number(s));
      t = i < 16 || (i === 16 && o < 2);
    }
  }
  return {
    isSafari: t || n(),
    needPerspectiveFix: t,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
  };
}
function ck() {
  return fu || (fu = uk()), fu;
}
function dk(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = yt();
  let o = null,
    s = null;
  const l = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    a = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((o = new ResizeObserver((f) => {
          s = i.requestAnimationFrame(() => {
            const { width: p, height: h } = t;
            let v = p,
              y = h;
            f.forEach((w) => {
              let { contentBoxSize: m, contentRect: g, target: x } = w;
              (x && x !== t.el) ||
                ((v = g ? g.width : (m[0] || m).inlineSize),
                (y = g ? g.height : (m[0] || m).blockSize));
            }),
              (v !== p || y !== h) && l();
          });
        })),
        o.observe(t.el));
    },
    c = () => {
      s && i.cancelAnimationFrame(s),
        o && o.unobserve && t.el && (o.unobserve(t.el), (o = null));
    },
    d = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      a();
      return;
    }
    i.addEventListener("resize", l), i.addEventListener("orientationchange", d);
  }),
    n("destroy", () => {
      c(),
        i.removeEventListener("resize", l),
        i.removeEventListener("orientationchange", d);
    });
}
function fk(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const o = [],
    s = yt(),
    l = function (d, f) {
      f === void 0 && (f = {});
      const p = s.MutationObserver || s.WebkitMutationObserver,
        h = new p((v) => {
          if (t.__preventObserver__) return;
          if (v.length === 1) {
            i("observerUpdate", v[0]);
            return;
          }
          const y = function () {
            i("observerUpdate", v[0]);
          };
          s.requestAnimationFrame
            ? s.requestAnimationFrame(y)
            : s.setTimeout(y, 0);
        });
      h.observe(d, {
        attributes: typeof f.attributes > "u" ? !0 : f.attributes,
        childList: typeof f.childList > "u" ? !0 : f.childList,
        characterData: typeof f.characterData > "u" ? !0 : f.characterData,
      }),
        o.push(h);
    },
    a = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const d = ok(t.el);
          for (let f = 0; f < d.length; f += 1) l(d[f]);
        }
        l(t.el, { childList: t.params.observeSlideChildren }),
          l(t.wrapperEl, { attributes: !1 });
      }
    },
    c = () => {
      o.forEach((d) => {
        d.disconnect();
      }),
        o.splice(0, o.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", a),
    r("destroy", c);
}
var pk = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((o) => {
        r.eventsListeners[o] || (r.eventsListeners[o] = []),
          r.eventsListeners[o][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++)
        s[l] = arguments[l];
      t.apply(r, s);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, o) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(o, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
      o[s] = arguments[s];
    return (
      typeof o[0] == "string" || Array.isArray(o[0])
        ? ((t = o[0]), (n = o.slice(1, o.length)), (r = e))
        : ((t = o[0].events), (n = o[0].data), (r = o[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((a) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((c) => {
            c.apply(r, [a, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[a] &&
            e.eventsListeners[a].forEach((c) => {
              c.apply(r, n);
            });
      }),
      e
    );
  },
};
function hk() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(Pn(r, "padding-left") || 0, 10) -
        parseInt(Pn(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(Pn(r, "padding-top") || 0, 10) -
        parseInt(Pn(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function mk() {
  const e = this;
  function t(C) {
    return e.isHorizontal()
      ? C
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[C];
  }
  function n(C, P) {
    return parseFloat(C.getPropertyValue(t(P)) || 0);
  }
  const r = e.params,
    { wrapperEl: i, slidesEl: o, size: s, rtlTranslate: l, wrongRTL: a } = e,
    c = e.virtual && r.virtual.enabled,
    d = c ? e.virtual.slides.length : e.slides.length,
    f = rn(o, `.${e.params.slideClass}, swiper-slide`),
    p = c ? e.virtual.slides.length : f.length;
  let h = [];
  const v = [],
    y = [];
  let w = r.slidesOffsetBefore;
  typeof w == "function" && (w = r.slidesOffsetBefore.call(e));
  let m = r.slidesOffsetAfter;
  typeof m == "function" && (m = r.slidesOffsetAfter.call(e));
  const g = e.snapGrid.length,
    x = e.slidesGrid.length;
  let S = r.spaceBetween,
    j = -w,
    E = 0,
    k = 0;
  if (typeof s > "u") return;
  typeof S == "string" && S.indexOf("%") >= 0
    ? (S = (parseFloat(S.replace("%", "")) / 100) * s)
    : typeof S == "string" && (S = parseFloat(S)),
    (e.virtualSize = -S),
    f.forEach((C) => {
      l ? (C.style.marginLeft = "") : (C.style.marginRight = ""),
        (C.style.marginBottom = ""),
        (C.style.marginTop = "");
    }),
    r.centeredSlides &&
      r.cssMode &&
      (rs(i, "--swiper-centered-offset-before", ""),
      rs(i, "--swiper-centered-offset-after", ""));
  const T = r.grid && r.grid.rows > 1 && e.grid;
  T && e.grid.initSlides(p);
  let O;
  const L =
    r.slidesPerView === "auto" &&
    r.breakpoints &&
    Object.keys(r.breakpoints).filter(
      (C) => typeof r.breakpoints[C].slidesPerView < "u"
    ).length > 0;
  for (let C = 0; C < p; C += 1) {
    O = 0;
    let P;
    if (
      (f[C] && (P = f[C]),
      T && e.grid.updateSlide(C, P, p, t),
      !(f[C] && Pn(P, "display") === "none"))
    ) {
      if (r.slidesPerView === "auto") {
        L && (f[C].style[t("width")] = "");
        const M = getComputedStyle(P),
          $ = P.style.transform,
          q = P.style.webkitTransform;
        if (
          ($ && (P.style.transform = "none"),
          q && (P.style.webkitTransform = "none"),
          r.roundLengths)
        )
          O = e.isHorizontal() ? Ih(P, "width", !0) : Ih(P, "height", !0);
        else {
          const ie = n(M, "width"),
            Z = n(M, "padding-left"),
            R = n(M, "padding-right"),
            I = n(M, "margin-left"),
            z = n(M, "margin-right"),
            H = M.getPropertyValue("box-sizing");
          if (H && H === "border-box") O = ie + I + z;
          else {
            const { clientWidth: J, offsetWidth: xe } = P;
            O = ie + Z + R + I + z + (xe - J);
          }
        }
        $ && (P.style.transform = $),
          q && (P.style.webkitTransform = q),
          r.roundLengths && (O = Math.floor(O));
      } else
        (O = (s - (r.slidesPerView - 1) * S) / r.slidesPerView),
          r.roundLengths && (O = Math.floor(O)),
          f[C] && (f[C].style[t("width")] = `${O}px`);
      f[C] && (f[C].swiperSlideSize = O),
        y.push(O),
        r.centeredSlides
          ? ((j = j + O / 2 + E / 2 + S),
            E === 0 && C !== 0 && (j = j - s / 2 - S),
            C === 0 && (j = j - s / 2 - S),
            Math.abs(j) < 1 / 1e3 && (j = 0),
            r.roundLengths && (j = Math.floor(j)),
            k % r.slidesPerGroup === 0 && h.push(j),
            v.push(j))
          : (r.roundLengths && (j = Math.floor(j)),
            (k - Math.min(e.params.slidesPerGroupSkip, k)) %
              e.params.slidesPerGroup ===
              0 && h.push(j),
            v.push(j),
            (j = j + O + S)),
        (e.virtualSize += O + S),
        (E = O),
        (k += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, s) + m),
    l &&
      a &&
      (r.effect === "slide" || r.effect === "coverflow") &&
      (i.style.width = `${e.virtualSize + S}px`),
    r.setWrapperSize && (i.style[t("width")] = `${e.virtualSize + S}px`),
    T && e.grid.updateWrapperSize(O, h, t),
    !r.centeredSlides)
  ) {
    const C = [];
    for (let P = 0; P < h.length; P += 1) {
      let M = h[P];
      r.roundLengths && (M = Math.floor(M)),
        h[P] <= e.virtualSize - s && C.push(M);
    }
    (h = C),
      Math.floor(e.virtualSize - s) - Math.floor(h[h.length - 1]) > 1 &&
        h.push(e.virtualSize - s);
  }
  if (c && r.loop) {
    const C = y[0] + S;
    if (r.slidesPerGroup > 1) {
      const P = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup
        ),
        M = C * r.slidesPerGroup;
      for (let $ = 0; $ < P; $ += 1) h.push(h[h.length - 1] + M);
    }
    for (let P = 0; P < e.virtual.slidesBefore + e.virtual.slidesAfter; P += 1)
      r.slidesPerGroup === 1 && h.push(h[h.length - 1] + C),
        v.push(v[v.length - 1] + C),
        (e.virtualSize += C);
  }
  if ((h.length === 0 && (h = [0]), S !== 0)) {
    const C = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
    f.filter((P, M) =>
      !r.cssMode || r.loop ? !0 : M !== f.length - 1
    ).forEach((P) => {
      P.style[C] = `${S}px`;
    });
  }
  if (r.centeredSlides && r.centeredSlidesBounds) {
    let C = 0;
    y.forEach((M) => {
      C += M + (S || 0);
    }),
      (C -= S);
    const P = C - s;
    h = h.map((M) => (M <= 0 ? -w : M > P ? P + m : M));
  }
  if (r.centerInsufficientSlides) {
    let C = 0;
    if (
      (y.forEach((P) => {
        C += P + (S || 0);
      }),
      (C -= S),
      C < s)
    ) {
      const P = (s - C) / 2;
      h.forEach((M, $) => {
        h[$] = M - P;
      }),
        v.forEach((M, $) => {
          v[$] = M + P;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: f,
      snapGrid: h,
      slidesGrid: v,
      slidesSizesGrid: y,
    }),
    r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
  ) {
    rs(i, "--swiper-centered-offset-before", `${-h[0]}px`),
      rs(
        i,
        "--swiper-centered-offset-after",
        `${e.size / 2 - y[y.length - 1] / 2}px`
      );
    const C = -e.snapGrid[0],
      P = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((M) => M + C)),
      (e.slidesGrid = e.slidesGrid.map((M) => M + P));
  }
  if (
    (p !== d && e.emit("slidesLengthChange"),
    h.length !== g &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    v.length !== x && e.emit("slidesGridLengthChange"),
    r.watchSlidesProgress && e.updateSlidesOffset(),
    !c && !r.cssMode && (r.effect === "slide" || r.effect === "fade"))
  ) {
    const C = `${r.containerModifierClass}backface-hidden`,
      P = e.el.classList.contains(C);
    p <= r.maxBackfaceHiddenSlides
      ? P || e.el.classList.add(C)
      : P && e.el.classList.remove(C);
  }
}
function gk(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    o;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const s = (l) => (r ? t.slides[t.getSlideIndexByData(l)] : t.slides[l]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((l) => {
        n.push(l);
      });
    else
      for (o = 0; o < Math.ceil(t.params.slidesPerView); o += 1) {
        const l = t.activeIndex + o;
        if (l > t.slides.length && !r) break;
        n.push(s(l));
      }
  else n.push(s(t.activeIndex));
  for (o = 0; o < n.length; o += 1)
    if (typeof n[o] < "u") {
      const l = n[o].offsetHeight;
      i = l > i ? l : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function vk() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
function yk(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: o } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let s = -e;
  i && (s = e),
    r.forEach((a) => {
      a.classList.remove(n.slideVisibleClass);
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  let l = n.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0
    ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
    : typeof l == "string" && (l = parseFloat(l));
  for (let a = 0; a < r.length; a += 1) {
    const c = r[a];
    let d = c.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (d -= r[0].swiperSlideOffset);
    const f =
        (s + (n.centeredSlides ? t.minTranslate() : 0) - d) /
        (c.swiperSlideSize + l),
      p =
        (s - o[0] + (n.centeredSlides ? t.minTranslate() : 0) - d) /
        (c.swiperSlideSize + l),
      h = -(s - d),
      v = h + t.slidesSizesGrid[a];
    ((h >= 0 && h < t.size - 1) ||
      (v > 1 && v <= t.size) ||
      (h <= 0 && v >= t.size)) &&
      (t.visibleSlides.push(c),
      t.visibleSlidesIndexes.push(a),
      r[a].classList.add(n.slideVisibleClass)),
      (c.progress = i ? -f : f),
      (c.originalProgress = i ? -p : p);
  }
}
function xk(e) {
  const t = this;
  if (typeof e > "u") {
    const d = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * d) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: o, isEnd: s, progressLoop: l } = t;
  const a = o,
    c = s;
  if (r === 0) (i = 0), (o = !0), (s = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const d = Math.abs(e - t.minTranslate()) < 1,
      f = Math.abs(e - t.maxTranslate()) < 1;
    (o = d || i <= 0), (s = f || i >= 1), d && (i = 0), f && (i = 1);
  }
  if (n.loop) {
    const d = t.getSlideIndexByData(0),
      f = t.getSlideIndexByData(t.slides.length - 1),
      p = t.slidesGrid[d],
      h = t.slidesGrid[f],
      v = t.slidesGrid[t.slidesGrid.length - 1],
      y = Math.abs(e);
    y >= p ? (l = (y - p) / v) : (l = (y + v - h) / v), l > 1 && (l -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: l, isBeginning: o, isEnd: s }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    o && !a && t.emit("reachBeginning toEdge"),
    s && !c && t.emit("reachEnd toEdge"),
    ((a && !o) || (c && !s)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
function wk() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    o = e.virtual && n.virtual.enabled,
    s = (a) => rn(r, `.${n.slideClass}${a}, swiper-slide${a}`)[0];
  t.forEach((a) => {
    a.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
  });
  let l;
  if (o)
    if (n.loop) {
      let a = i - e.virtual.slidesBefore;
      a < 0 && (a = e.virtual.slides.length + a),
        a >= e.virtual.slides.length && (a -= e.virtual.slides.length),
        (l = s(`[data-swiper-slide-index="${a}"]`));
    } else l = s(`[data-swiper-slide-index="${i}"]`);
  else l = t[i];
  if (l) {
    l.classList.add(n.slideActiveClass);
    let a = ik(l, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !a && (a = t[0]), a && a.classList.add(n.slideNextClass);
    let c = rk(l, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !c === 0 && (c = t[t.length - 1]),
      c && c.classList.add(n.slidePrevClass);
  }
  e.emitSlidesClasses();
}
const Ts = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      const i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      i && i.remove();
    }
  },
  pu = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  $c = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const s = i,
        l = [s - t];
      l.push(...Array.from({ length: t }).map((a, c) => s + r + c)),
        e.slides.forEach((a, c) => {
          l.includes(a.column) && pu(e, c);
        });
      return;
    }
    const o = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let s = i - t; s <= o + t; s += 1) {
        const l = ((s % n) + n) % n;
        (l < i || l > o) && pu(e, l);
      }
    else
      for (let s = Math.max(i - t, 0); s <= Math.min(o + t, n - 1); s += 1)
        s !== i && (s > o || s < i) && pu(e, s);
  };
function Sk(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let o = 0; o < t.length; o += 1)
    typeof t[o + 1] < "u"
      ? r >= t[o] && r < t[o + 1] - (t[o + 1] - t[o]) / 2
        ? (i = o)
        : r >= t[o] && r < t[o + 1] && (i = o + 1)
      : r >= t[o] && (i = o);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function bk(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: o, realIndex: s, snapIndex: l } = t;
  let a = e,
    c;
  const d = (p) => {
    let h = p - t.virtual.slidesBefore;
    return (
      h < 0 && (h = t.virtual.slides.length + h),
      h >= t.virtual.slides.length && (h -= t.virtual.slides.length),
      h
    );
  };
  if ((typeof a > "u" && (a = Sk(t)), r.indexOf(n) >= 0)) c = r.indexOf(n);
  else {
    const p = Math.min(i.slidesPerGroupSkip, a);
    c = p + Math.floor((a - p) / i.slidesPerGroup);
  }
  if ((c >= r.length && (c = r.length - 1), a === o)) {
    c !== l && ((t.snapIndex = c), t.emit("snapIndexChange")),
      t.params.loop &&
        t.virtual &&
        t.params.virtual.enabled &&
        (t.realIndex = d(a));
    return;
  }
  let f;
  t.virtual && i.virtual.enabled && i.loop
    ? (f = d(a))
    : t.slides[a]
    ? (f = parseInt(
        t.slides[a].getAttribute("data-swiper-slide-index") || a,
        10
      ))
    : (f = a),
    Object.assign(t, {
      previousSnapIndex: l,
      snapIndex: c,
      previousRealIndex: s,
      realIndex: f,
      previousIndex: o,
      activeIndex: a,
    }),
    t.initialized && $c(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    s !== f && t.emit("realIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
}
function jk(e) {
  const t = this,
    n = t.params,
    r = e.closest(`.${n.slideClass}, swiper-slide`);
  let i = !1,
    o;
  if (r) {
    for (let s = 0; s < t.slides.length; s += 1)
      if (t.slides[s] === r) {
        (i = !0), (o = s);
        break;
      }
  }
  if (r && i)
    (t.clickedSlide = r),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(
            r.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (t.clickedIndex = o);
  else {
    (t.clickedSlide = void 0), (t.clickedIndex = void 0);
    return;
  }
  n.slideToClickedSlide &&
    t.clickedIndex !== void 0 &&
    t.clickedIndex !== t.activeIndex &&
    t.slideToClickedSlide();
}
var Ek = {
  updateSize: hk,
  updateSlides: mk,
  updateAutoHeight: gk,
  updateSlidesOffset: vk,
  updateSlidesProgress: yk,
  updateProgress: xk,
  updateSlidesClasses: wk,
  updateActiveIndex: bk,
  updateClickedSlide: jk,
};
function kk(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: o } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let s = ek(o, e);
  return (s += t.cssOverflowAdjustment()), r && (s = -s), s || 0;
}
function Ck(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: o, progress: s } = n;
  let l = 0,
    a = 0;
  const c = 0;
  n.isHorizontal() ? (l = r ? -e : e) : (a = e),
    i.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? l : a),
    i.cssMode
      ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -l
          : -a)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (l -= n.cssOverflowAdjustment())
          : (a -= n.cssOverflowAdjustment()),
        (o.style.transform = `translate3d(${l}px, ${a}px, ${c}px)`));
  let d;
  const f = n.maxTranslate() - n.minTranslate();
  f === 0 ? (d = 0) : (d = (e - n.minTranslate()) / f),
    d !== s && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function Pk() {
  return -this.snapGrid[0];
}
function Tk() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Ok(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const o = this,
    { params: s, wrapperEl: l } = o;
  if (o.animating && s.preventInteractionOnTransition) return !1;
  const a = o.minTranslate(),
    c = o.maxTranslate();
  let d;
  if (
    (r && e > a ? (d = a) : r && e < c ? (d = c) : (d = e),
    o.updateProgress(d),
    s.cssMode)
  ) {
    const f = o.isHorizontal();
    if (t === 0) l[f ? "scrollLeft" : "scrollTop"] = -d;
    else {
      if (!o.support.smoothScroll)
        return (
          a1({ swiper: o, targetPosition: -d, side: f ? "left" : "top" }), !0
        );
      l.scrollTo({ [f ? "left" : "top"]: -d, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (o.setTransition(0),
        o.setTranslate(d),
        n && (o.emit("beforeTransitionStart", t, i), o.emit("transitionEnd")))
      : (o.setTransition(t),
        o.setTranslate(d),
        n && (o.emit("beforeTransitionStart", t, i), o.emit("transitionStart")),
        o.animating ||
          ((o.animating = !0),
          o.onTranslateToWrapperTransitionEnd ||
            (o.onTranslateToWrapperTransitionEnd = function (p) {
              !o ||
                o.destroyed ||
                (p.target === this &&
                  (o.wrapperEl.removeEventListener(
                    "transitionend",
                    o.onTranslateToWrapperTransitionEnd
                  ),
                  (o.onTranslateToWrapperTransitionEnd = null),
                  delete o.onTranslateToWrapperTransitionEnd,
                  n && o.emit("transitionEnd")));
            }),
          o.wrapperEl.addEventListener(
            "transitionend",
            o.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var _k = {
  getTranslate: kk,
  setTranslate: Ck,
  minTranslate: Pk,
  maxTranslate: Tk,
  translateTo: Ok,
};
function Lk(e, t) {
  const n = this;
  n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`),
    n.emit("setTransition", e, t);
}
function c1(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: o, previousIndex: s } = t;
  let l = r;
  if (
    (l || (o > s ? (l = "next") : o < s ? (l = "prev") : (l = "reset")),
    t.emit(`transition${i}`),
    n && o !== s)
  ) {
    if (l === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      l === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function Nk(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    c1({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function Mk(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      c1({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var Ak = { setTransition: Lk, transitionStart: Nk, transitionEnd: Mk };
function Rk(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const o = this;
  let s = e;
  s < 0 && (s = 0);
  const {
    params: l,
    snapGrid: a,
    slidesGrid: c,
    previousIndex: d,
    activeIndex: f,
    rtlTranslate: p,
    wrapperEl: h,
    enabled: v,
  } = o;
  if ((o.animating && l.preventInteractionOnTransition) || (!v && !r && !i))
    return !1;
  const y = Math.min(o.params.slidesPerGroupSkip, s);
  let w = y + Math.floor((s - y) / o.params.slidesPerGroup);
  w >= a.length && (w = a.length - 1);
  const m = -a[w];
  if (l.normalizeSlideIndex)
    for (let x = 0; x < c.length; x += 1) {
      const S = -Math.floor(m * 100),
        j = Math.floor(c[x] * 100),
        E = Math.floor(c[x + 1] * 100);
      typeof c[x + 1] < "u"
        ? S >= j && S < E - (E - j) / 2
          ? (s = x)
          : S >= j && S < E && (s = x + 1)
        : S >= j && (s = x);
    }
  if (
    o.initialized &&
    s !== f &&
    ((!o.allowSlideNext &&
      (p
        ? m > o.translate && m > o.minTranslate()
        : m < o.translate && m < o.minTranslate())) ||
      (!o.allowSlidePrev &&
        m > o.translate &&
        m > o.maxTranslate() &&
        (f || 0) !== s))
  )
    return !1;
  s !== (d || 0) && n && o.emit("beforeSlideChangeStart"), o.updateProgress(m);
  let g;
  if (
    (s > f ? (g = "next") : s < f ? (g = "prev") : (g = "reset"),
    (p && -m === o.translate) || (!p && m === o.translate))
  )
    return (
      o.updateActiveIndex(s),
      l.autoHeight && o.updateAutoHeight(),
      o.updateSlidesClasses(),
      l.effect !== "slide" && o.setTranslate(m),
      g !== "reset" && (o.transitionStart(n, g), o.transitionEnd(n, g)),
      !1
    );
  if (l.cssMode) {
    const x = o.isHorizontal(),
      S = p ? m : -m;
    if (t === 0) {
      const j = o.virtual && o.params.virtual.enabled;
      j &&
        ((o.wrapperEl.style.scrollSnapType = "none"),
        (o._immediateVirtual = !0)),
        j && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0
          ? ((o._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              h[x ? "scrollLeft" : "scrollTop"] = S;
            }))
          : (h[x ? "scrollLeft" : "scrollTop"] = S),
        j &&
          requestAnimationFrame(() => {
            (o.wrapperEl.style.scrollSnapType = ""), (o._immediateVirtual = !1);
          });
    } else {
      if (!o.support.smoothScroll)
        return (
          a1({ swiper: o, targetPosition: S, side: x ? "left" : "top" }), !0
        );
      h.scrollTo({ [x ? "left" : "top"]: S, behavior: "smooth" });
    }
    return !0;
  }
  return (
    o.setTransition(t),
    o.setTranslate(m),
    o.updateActiveIndex(s),
    o.updateSlidesClasses(),
    o.emit("beforeTransitionStart", t, r),
    o.transitionStart(n, g),
    t === 0
      ? o.transitionEnd(n, g)
      : o.animating ||
        ((o.animating = !0),
        o.onSlideToWrapperTransitionEnd ||
          (o.onSlideToWrapperTransitionEnd = function (S) {
            !o ||
              o.destroyed ||
              (S.target === this &&
                (o.wrapperEl.removeEventListener(
                  "transitionend",
                  o.onSlideToWrapperTransitionEnd
                ),
                (o.onSlideToWrapperTransitionEnd = null),
                delete o.onSlideToWrapperTransitionEnd,
                o.transitionEnd(n, g)));
          }),
        o.wrapperEl.addEventListener(
          "transitionend",
          o.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function Ik(e, t, n, r) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  let o = e;
  return (
    i.params.loop &&
      (i.virtual && i.params.virtual.enabled
        ? (o = o + i.virtual.slidesBefore)
        : (o = i.getSlideIndexByData(o))),
    i.slideTo(o, t, n, r)
  );
}
function zk(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: o, animating: s } = r;
  if (!i) return r;
  let l = o.slidesPerGroup;
  o.slidesPerView === "auto" &&
    o.slidesPerGroup === 1 &&
    o.slidesPerGroupAuto &&
    (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const a = r.activeIndex < o.slidesPerGroupSkip ? 1 : l,
    c = r.virtual && o.virtual.enabled;
  if (o.loop) {
    if (s && !c && o.loopPreventsSliding) return !1;
    r.loopFix({ direction: "next" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  return o.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + a, e, t, n);
}
function Dk(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: o,
      slidesGrid: s,
      rtlTranslate: l,
      enabled: a,
      animating: c,
    } = r;
  if (!a) return r;
  const d = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (c && !d && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const f = l ? r.translate : -r.translate;
  function p(m) {
    return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m);
  }
  const h = p(f),
    v = o.map((m) => p(m));
  let y = o[v.indexOf(h) - 1];
  if (typeof y > "u" && i.cssMode) {
    let m;
    o.forEach((g, x) => {
      h >= g && (m = x);
    }),
      typeof m < "u" && (y = o[m > 0 ? m - 1 : m]);
  }
  let w = 0;
  if (
    (typeof y < "u" &&
      ((w = s.indexOf(y)),
      w < 0 && (w = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((w = w - r.slidesPerViewDynamic("previous", !0) + 1),
        (w = Math.max(w, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const m =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(m, e, t, n);
  }
  return r.slideTo(w, e, t, n);
}
function $k(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this;
  return r.slideTo(r.activeIndex, e, t, n);
}
function Fk(e, t, n, r) {
  e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    r === void 0 && (r = 0.5);
  const i = this;
  let o = i.activeIndex;
  const s = Math.min(i.params.slidesPerGroupSkip, o),
    l = s + Math.floor((o - s) / i.params.slidesPerGroup),
    a = i.rtlTranslate ? i.translate : -i.translate;
  if (a >= i.snapGrid[l]) {
    const c = i.snapGrid[l],
      d = i.snapGrid[l + 1];
    a - c > (d - c) * r && (o += i.params.slidesPerGroup);
  } else {
    const c = i.snapGrid[l - 1],
      d = i.snapGrid[l];
    a - c <= (d - c) * r && (o -= i.params.slidesPerGroup);
  }
  return (
    (o = Math.max(o, 0)),
    (o = Math.min(o, i.slidesGrid.length - 1)),
    i.slideTo(o, e, t, n)
  );
}
function Uk() {
  const e = this,
    { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    o;
  const s = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (o = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              rn(n, `${s}[data-swiper-slide-index="${o}"]`)[0]
            )),
            Dc(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            rn(n, `${s}[data-swiper-slide-index="${o}"]`)[0]
          )),
          Dc(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var Bk = {
  slideTo: Rk,
  slideToLoop: Ik,
  slideNext: zk,
  slidePrev: Dk,
  slideReset: $k,
  slideToClosest: Fk,
  slideToClickedSlide: Uk,
};
function Vk(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  rn(r, `.${n.slideClass}, swiper-slide`).forEach((o, s) => {
    o.setAttribute("data-swiper-slide-index", s);
  }),
    t.loopFix({
      slideRealIndex: e,
      direction: n.centeredSlides ? void 0 : "next",
    });
}
function Hk(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: o,
    byController: s,
    byMousewheel: l,
  } = e === void 0 ? {} : e;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
    slides: c,
    allowSlidePrev: d,
    allowSlideNext: f,
    slidesEl: p,
    params: h,
  } = a;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && h.virtual.enabled)
  ) {
    n &&
      (!h.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : h.centeredSlides && a.snapIndex < h.slidesPerView
        ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
        : a.snapIndex === a.snapGrid.length - 1 &&
          a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = d),
      (a.allowSlideNext = f),
      a.emit("loopFix");
    return;
  }
  const v =
    h.slidesPerView === "auto"
      ? a.slidesPerViewDynamic()
      : Math.ceil(parseFloat(h.slidesPerView, 10));
  let y = h.loopedSlides || v;
  y % h.slidesPerGroup !== 0 &&
    (y += h.slidesPerGroup - (y % h.slidesPerGroup)),
    (a.loopedSlides = y);
  const w = [],
    m = [];
  let g = a.activeIndex;
  typeof o > "u"
    ? (o = a.getSlideIndex(
        a.slides.filter((k) => k.classList.contains(h.slideActiveClass))[0]
      ))
    : (g = o);
  const x = r === "next" || !r,
    S = r === "prev" || !r;
  let j = 0,
    E = 0;
  if (o < y) {
    j = Math.max(y - o, h.slidesPerGroup);
    for (let k = 0; k < y - o; k += 1) {
      const T = k - Math.floor(k / c.length) * c.length;
      w.push(c.length - T - 1);
    }
  } else if (o > a.slides.length - y * 2) {
    E = Math.max(o - (a.slides.length - y * 2), h.slidesPerGroup);
    for (let k = 0; k < E; k += 1) {
      const T = k - Math.floor(k / c.length) * c.length;
      m.push(T);
    }
  }
  if (
    (S &&
      w.forEach((k) => {
        (a.slides[k].swiperLoopMoveDOM = !0),
          p.prepend(a.slides[k]),
          (a.slides[k].swiperLoopMoveDOM = !1);
      }),
    x &&
      m.forEach((k) => {
        (a.slides[k].swiperLoopMoveDOM = !0),
          p.append(a.slides[k]),
          (a.slides[k].swiperLoopMoveDOM = !1);
      }),
    a.recalcSlides(),
    h.slidesPerView === "auto" && a.updateSlides(),
    h.watchSlidesProgress && a.updateSlidesOffset(),
    n)
  ) {
    if (w.length > 0 && S)
      if (typeof t > "u") {
        const k = a.slidesGrid[g],
          O = a.slidesGrid[g + j] - k;
        l
          ? a.setTranslate(a.translate - O)
          : (a.slideTo(g + j, 0, !1, !0),
            i && (a.touches[a.isHorizontal() ? "startX" : "startY"] += O));
      } else i && a.slideToLoop(t, 0, !1, !0);
    else if (m.length > 0 && x)
      if (typeof t > "u") {
        const k = a.slidesGrid[g],
          O = a.slidesGrid[g - E] - k;
        l
          ? a.setTranslate(a.translate - O)
          : (a.slideTo(g - E, 0, !1, !0),
            i && (a.touches[a.isHorizontal() ? "startX" : "startY"] += O));
      } else a.slideToLoop(t, 0, !1, !0);
  }
  if (
    ((a.allowSlidePrev = d),
    (a.allowSlideNext = f),
    a.controller && a.controller.control && !s)
  ) {
    const k = {
      slideRealIndex: t,
      slideTo: !1,
      direction: r,
      setTranslate: i,
      activeSlideIndex: o,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((T) => {
          !T.destroyed && T.params.loop && T.loopFix(k);
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix(k);
  }
  a.emit("loopFix");
}
function Wk() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const o =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[o] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var Gk = { loopCreate: Vk, loopFix: Hk, loopDestroy: Wk };
function Kk(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function qk() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var Jk = { setGrabCursor: Kk, unsetGrabCursor: qk };
function Qk(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === br() || r === yt()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function Yk(e) {
  const t = this,
    n = br(),
    r = yt(),
    i = t.touchEventsData;
  i.evCache.push(e);
  const { params: o, touches: s, enabled: l } = t;
  if (
    !l ||
    (!o.simulateTouch && e.pointerType === "mouse") ||
    (t.animating && o.preventInteractionOnTransition)
  )
    return;
  !t.animating && o.cssMode && o.loop && t.loopFix();
  let a = e;
  a.originalEvent && (a = a.originalEvent);
  let c = a.target;
  if (
    (o.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(c)) ||
    ("which" in a && a.which === 3) ||
    ("button" in a && a.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const d = !!o.noSwipingClass && o.noSwipingClass !== "",
    f = e.composedPath ? e.composedPath() : e.path;
  d && a.target && a.target.shadowRoot && f && (c = f[0]);
  const p = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
    h = !!(a.target && a.target.shadowRoot);
  if (o.noSwiping && (h ? Qk(p, c) : c.closest(p))) {
    t.allowClick = !0;
    return;
  }
  if (o.swipeHandler && !c.closest(o.swipeHandler)) return;
  (s.currentX = a.pageX), (s.currentY = a.pageY);
  const v = s.currentX,
    y = s.currentY,
    w = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
    m = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
  if (w && (v <= m || v >= r.innerWidth - m))
    if (w === "prevent") e.preventDefault();
    else return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (s.startX = v),
    (s.startY = y),
    (i.touchStartTime = cl()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    o.threshold > 0 && (i.allowThresholdMove = !1);
  let g = !0;
  c.matches(i.focusableElements) &&
    ((g = !1), c.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== c &&
      n.activeElement.blur();
  const x = g && t.allowTouchMove && o.touchStartPreventDefault;
  (o.touchStartForcePreventDefault || x) &&
    !c.isContentEditable &&
    a.preventDefault(),
    o.freeMode &&
      o.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !o.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", a);
}
function Xk(e) {
  const t = br(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: o, rtlTranslate: s, enabled: l } = n;
  if (!l || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let a = e;
  if ((a.originalEvent && (a = a.originalEvent), !r.isTouched)) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", a);
    return;
  }
  const c = r.evCache.findIndex((E) => E.pointerId === a.pointerId);
  c >= 0 && (r.evCache[c] = a);
  const d = r.evCache.length > 1 ? r.evCache[0] : a,
    f = d.pageX,
    p = d.pageY;
  if (a.preventedByNestedSwiper) {
    (o.startX = f), (o.startY = p);
    return;
  }
  if (!n.allowTouchMove) {
    a.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(o, {
          startX: f,
          startY: p,
          prevX: n.touches.currentX,
          prevY: n.touches.currentY,
          currentX: f,
          currentY: p,
        }),
        (r.touchStartTime = cl()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (p < o.startY && n.translate <= n.maxTranslate()) ||
        (p > o.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (f < o.startX && n.translate <= n.maxTranslate()) ||
      (f > o.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    a.target === t.activeElement &&
    a.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  if (
    (r.allowTouchCallbacks && n.emit("touchMove", a),
    a.targetTouches && a.targetTouches.length > 1)
  )
    return;
  (o.currentX = f), (o.currentY = p);
  const h = o.currentX - o.startX,
    v = o.currentY - o.startY;
  if (n.params.threshold && Math.sqrt(h ** 2 + v ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let E;
    (n.isHorizontal() && o.currentY === o.startY) ||
    (n.isVertical() && o.currentX === o.startX)
      ? (r.isScrolling = !1)
      : h * h + v * v >= 25 &&
        ((E = (Math.atan2(Math.abs(v), Math.abs(h)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? E > i.touchAngle
          : 90 - E > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", a),
    typeof r.startMoving > "u" &&
      (o.currentX !== o.startX || o.currentY !== o.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (n.zoom &&
        n.params.zoom &&
        n.params.zoom.enabled &&
        r.evCache.length > 1))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && a.cancelable && a.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && a.stopPropagation();
  let y = n.isHorizontal() ? h : v,
    w = n.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
  i.oneWayMovement &&
    ((y = Math.abs(y) * (s ? 1 : -1)), (w = Math.abs(w) * (s ? 1 : -1))),
    (o.diff = y),
    (y *= i.touchRatio),
    s && ((y = -y), (w = -w));
  const m = n.touchesDirection;
  (n.swipeDirection = y > 0 ? "prev" : "next"),
    (n.touchesDirection = w > 0 ? "prev" : "next");
  const g = n.params.loop && !i.cssMode;
  if (!r.isMoved) {
    if (
      (g && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const E = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      n.wrapperEl.dispatchEvent(E);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", a);
  }
  let x;
  r.isMoved &&
    m !== n.touchesDirection &&
    g &&
    Math.abs(y) >= 1 &&
    (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }), (x = !0)),
    n.emit("sliderMove", a),
    (r.isMoved = !0),
    (r.currentTranslate = y + r.startTranslate);
  let S = !0,
    j = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (j = 0),
    y > 0
      ? (g &&
          !x &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.size / 2
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((S = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + y) ** j)))
      : y < 0 &&
        (g &&
          !x &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() + n.size / 2
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((S = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - y) ** j))),
    S && (a.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(y) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (o.startX = o.currentX),
          (o.startY = o.currentY),
          (r.currentTranslate = r.startTranslate),
          (o.diff = n.isHorizontal()
            ? o.currentX - o.startX
            : o.currentY - o.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function Zk(e) {
  const t = this,
    n = t.touchEventsData,
    r = n.evCache.findIndex((x) => x.pointerId === e.pointerId);
  if (
    (r >= 0 && n.evCache.splice(r, 1),
    ["pointercancel", "pointerout", "pointerleave"].includes(e.type) &&
      !(
        e.type === "pointercancel" &&
        (t.browser.isSafari || t.browser.isWebView)
      ))
  )
    return;
  const {
    params: i,
    touches: o,
    rtlTranslate: s,
    slidesGrid: l,
    enabled: a,
  } = t;
  if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let c = e;
  if (
    (c.originalEvent && (c = c.originalEvent),
    n.allowTouchCallbacks && t.emit("touchEnd", c),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && i.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  i.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const d = cl(),
    f = d - n.touchStartTime;
  if (t.allowClick) {
    const x = c.path || (c.composedPath && c.composedPath());
    t.updateClickedSlide((x && x[0]) || c.target),
      t.emit("tap click", c),
      f < 300 &&
        d - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", c);
  }
  if (
    ((n.lastClickTime = cl()),
    Dc(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      o.diff === 0 ||
      n.currentTranslate === n.startTranslate)
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let p;
  if (
    (i.followFinger
      ? (p = s ? t.translate : -t.translate)
      : (p = -n.currentTranslate),
    i.cssMode)
  )
    return;
  if (i.freeMode && i.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: p });
    return;
  }
  let h = 0,
    v = t.slidesSizesGrid[0];
  for (
    let x = 0;
    x < l.length;
    x += x < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const S = x < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof l[x + S] < "u"
      ? p >= l[x] && p < l[x + S] && ((h = x), (v = l[x + S] - l[x]))
      : p >= l[x] && ((h = x), (v = l[l.length - 1] - l[l.length - 2]));
  }
  let y = null,
    w = null;
  i.rewind &&
    (t.isBeginning
      ? (w =
          i.virtual && i.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (y = 0));
  const m = (p - l[h]) / v,
    g = h < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (f > i.longSwipesMs) {
    if (!i.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (m >= i.longSwipesRatio
        ? t.slideTo(i.rewind && t.isEnd ? y : h + g)
        : t.slideTo(h)),
      t.swipeDirection === "prev" &&
        (m > 1 - i.longSwipesRatio
          ? t.slideTo(h + g)
          : w !== null && m < 0 && Math.abs(m) > i.longSwipesRatio
          ? t.slideTo(w)
          : t.slideTo(h));
  } else {
    if (!i.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl)
      ? c.target === t.navigation.nextEl
        ? t.slideTo(h + g)
        : t.slideTo(h)
      : (t.swipeDirection === "next" && t.slideTo(y !== null ? y : h + g),
        t.swipeDirection === "prev" && t.slideTo(w !== null ? w : h));
  }
}
function zh() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: o } = e,
    s = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const l = s && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !l
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !s
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
}
function eC(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function tC() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const o = e.maxTranslate() - e.minTranslate();
  o === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / o),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function nC(e) {
  const t = this;
  Ts(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
let Dh = !1;
function rC() {}
const d1 = (e, t) => {
  const n = br(),
    { params: r, el: i, wrapperEl: o, device: s } = e,
    l = !!r.nested,
    a = t === "on" ? "addEventListener" : "removeEventListener",
    c = t;
  i[a]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[a]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
    n[a]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[a]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerleave", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[a]("click", e.onClick, !0),
    r.cssMode && o[a]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[c](
          s.ios || s.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          zh,
          !0
        )
      : e[c]("observerUpdate", zh, !0),
    i[a]("load", e.onLoad, { capture: !0 });
};
function iC() {
  const e = this,
    t = br(),
    { params: n } = e;
  (e.onTouchStart = Yk.bind(e)),
    (e.onTouchMove = Xk.bind(e)),
    (e.onTouchEnd = Zk.bind(e)),
    n.cssMode && (e.onScroll = tC.bind(e)),
    (e.onClick = eC.bind(e)),
    (e.onLoad = nC.bind(e)),
    Dh || (t.addEventListener("touchstart", rC), (Dh = !0)),
    d1(e, "on");
}
function oC() {
  d1(this, "off");
}
var sC = { attachEvents: iC, detachEvents: oC };
const $h = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function lC() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    o = r.breakpoints;
  if (!o || (o && Object.keys(o).length === 0)) return;
  const s = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
  if (!s || e.currentBreakpoint === s) return;
  const a = (s in o ? o[s] : void 0) || e.originalParams,
    c = $h(e, r),
    d = $h(e, a),
    f = r.enabled;
  c && !d
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !c &&
      d &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((a.grid.fill && a.grid.fill === "column") ||
        (!a.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((y) => {
      if (typeof a[y] > "u") return;
      const w = r[y] && r[y].enabled,
        m = a[y] && a[y].enabled;
      w && !m && e[y].disable(), !w && m && e[y].enable();
    });
  const p = a.direction && a.direction !== r.direction,
    h = r.loop && (a.slidesPerView !== r.slidesPerView || p);
  p && n && e.changeDirection(), ct(e.params, a);
  const v = e.params.enabled;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    f && !v ? e.disable() : !f && v && e.enable(),
    (e.currentBreakpoint = s),
    e.emit("_beforeBreakpoint", a),
    h && n && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
    e.emit("breakpoint", a);
}
function aC(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = yt(),
    o = t === "window" ? i.innerHeight : n.clientHeight,
    s = Object.keys(e).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const a = parseFloat(l.substr(1));
        return { value: o * a, point: l };
      }
      return { value: l, point: l };
    });
  s.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
  for (let l = 0; l < s.length; l += 1) {
    const { point: a, value: c } = s[l];
    t === "window"
      ? i.matchMedia(`(min-width: ${c}px)`).matches && (r = a)
      : c <= n.clientWidth && (r = a);
  }
  return r || "max";
}
var uC = { setBreakpoint: lC, getBreakpoint: aC };
function cC(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function dC() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: o } = e,
    s = cC(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: o.android },
        { ios: o.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...s), i.classList.add(...t), e.emitContainerClasses();
}
function fC() {
  const e = this,
    { el: t, classNames: n } = e;
  t.classList.remove(...n), e.emitContainerClasses();
}
var pC = { addClasses: dC, removeClasses: fC };
function hC() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      o = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > o;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var mC = { checkOverflow: hC },
  Fh = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function gC(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      o = r[i];
    if (typeof o != "object" || o === null) {
      ct(t, r);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] === !0 &&
        (e[i] = { auto: !0 }),
      !(i in e && "enabled" in o))
    ) {
      ct(t, r);
      return;
    }
    e[i] === !0 && (e[i] = { enabled: !0 }),
      typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      ct(t, r);
  };
}
const hu = {
    eventsEmitter: pk,
    update: Ek,
    translate: _k,
    transition: Ak,
    slide: Bk,
    loop: Gk,
    grabCursor: Jk,
    events: sC,
    breakpoints: uC,
    checkOverflow: mC,
    classes: pC,
  },
  mu = {};
let yo = class Yt {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = ct({}, n)),
      t && !n.el && (n.el = t);
    const s = br();
    if (
      n.el &&
      typeof n.el == "string" &&
      s.querySelectorAll(n.el).length > 1
    ) {
      const d = [];
      return (
        s.querySelectorAll(n.el).forEach((f) => {
          const p = ct({}, n, { el: f });
          d.push(new Yt(p));
        }),
        d
      );
    }
    const l = this;
    (l.__swiper__ = !0),
      (l.support = u1()),
      (l.device = ak({ userAgent: n.userAgent })),
      (l.browser = ck()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules);
    const a = {};
    l.modules.forEach((d) => {
      d({
        params: n,
        swiper: l,
        extendParams: gC(n, a),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      });
    });
    const c = ct({}, Fh, a);
    return (
      (l.params = ct({}, c, mu, n)),
      (l.originalParams = ct({}, l.params)),
      (l.passedParams = ct({}, n)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((d) => {
          l.on(d, l.params.on[d]);
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === "horizontal";
        },
        isVertical() {
          return l.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: [],
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit("_swiper"),
      l.params.init && l.init(),
      l
    );
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = rn(n, `.${r.slideClass}, swiper-slide`),
      o = Rh(i[0]);
    return Rh(t) - o;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = rn(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      s = (r.maxTranslate() - i) * t + i;
    r.translateTo(s, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: o,
        slidesGrid: s,
        slidesSizesGrid: l,
        size: a,
        activeIndex: c,
      } = r;
    let d = 1;
    if (i.centeredSlides) {
      let f = o[c] ? o[c].swiperSlideSize : 0,
        p;
      for (let h = c + 1; h < o.length; h += 1)
        o[h] &&
          !p &&
          ((f += o[h].swiperSlideSize), (d += 1), f > a && (p = !0));
      for (let h = c - 1; h >= 0; h -= 1)
        o[h] &&
          !p &&
          ((f += o[h].swiperSlideSize), (d += 1), f > a && (p = !0));
    } else if (t === "current")
      for (let f = c + 1; f < o.length; f += 1)
        (n ? s[f] + l[f] - s[c] < a : s[f] - s[c] < a) && (d += 1);
    else for (let f = c - 1; f >= 0; f -= 1) s[c] - s[f] < a && (d += 1);
    return d;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((s) => {
        s.complete && Ts(t, s);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const s = t.rtlTranslate ? t.translate * -1 : t.translate,
        l = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let o;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const s = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        o = t.slideTo(s.length - 1, 0, !1, !0);
      } else o = t.slideTo(t.activeIndex, 0, !1, !0);
      o || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((o) => {
          t === "vertical" ? (o.style.width = "") : (o.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n), r.parentNode && r.parentNode.host && (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let s = (() =>
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : rn(r, i())[0])();
    return (
      !s &&
        n.params.createElements &&
        ((s = nk("div", n.params.wrapperClass)),
        r.append(s),
        rn(r, `.${n.params.slideClass}`).forEach((l) => {
          s.append(l);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: s,
        slidesEl: n.isElement ? r.parentNode.host : s,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || Pn(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || Pn(r, "direction") === "rtl"),
        wrongRTL: Pn(s, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    return (
      n.initialized ||
        n.mount(t) === !1 ||
        (n.emit("beforeInit"),
        n.params.breakpoints && n.setBreakpoint(),
        n.addClasses(),
        n.updateSize(),
        n.updateSlides(),
        n.params.watchOverflow && n.checkOverflow(),
        n.params.grabCursor && n.enabled && n.setGrabCursor(),
        n.params.loop && n.virtual && n.params.virtual.enabled
          ? n.slideTo(
              n.params.initialSlide + n.virtual.slidesBefore,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            )
          : n.slideTo(
              n.params.initialSlide,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            ),
        n.params.loop && n.loopCreate(),
        n.attachEvents(),
        [...n.el.querySelectorAll('[loading="lazy"]')].forEach((i) => {
          i.complete
            ? Ts(n, i)
            : i.addEventListener("load", (o) => {
                Ts(n, o.target);
              });
        }),
        $c(n),
        (n.initialized = !0),
        $c(n),
        n.emit("init"),
        n.emit("afterInit")),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: o, wrapperEl: s, slides: l } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          o.removeAttribute("style"),
          s.removeAttribute("style"),
          l &&
            l.length &&
            l.forEach((a) => {
              a.classList.remove(
                i.slideVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((a) => {
          r.off(a);
        }),
        t !== !1 && ((r.el.swiper = null), X4(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    ct(mu, t);
  }
  static get extendedDefaults() {
    return mu;
  }
  static get defaults() {
    return Fh;
  }
  static installModule(t) {
    Yt.prototype.__modules__ || (Yt.prototype.__modules__ = []);
    const n = Yt.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => Yt.installModule(n)), Yt)
      : (Yt.installModule(t), Yt);
  }
};
Object.keys(hu).forEach((e) => {
  Object.keys(hu[e]).forEach((t) => {
    yo.prototype[t] = hu[e][t];
  });
});
yo.use([dk, fk]);
const f1 = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopedSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function gr(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function Tn(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : gr(t[r]) && gr(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : Tn(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function p1(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function h1(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function m1(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function g1(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function vC(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function yC(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: o,
    prevEl: s,
    scrollbarEl: l,
    paginationEl: a,
  } = e;
  const c = i.filter(
      (O) => O !== "children" && O !== "direction" && O !== "wrapperClass"
    ),
    {
      params: d,
      pagination: f,
      navigation: p,
      scrollbar: h,
      virtual: v,
      thumbs: y,
    } = t;
  let w, m, g, x, S, j, E, k;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    d.thumbs &&
    !d.thumbs.swiper &&
    (w = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      d.controller &&
      !d.controller.control &&
      (m = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || a) &&
      (d.pagination || d.pagination === !1) &&
      f &&
      !f.el &&
      (g = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || l) &&
      (d.scrollbar || d.scrollbar === !1) &&
      h &&
      !h.el &&
      (x = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || s) &&
      (r.navigation.nextEl || o) &&
      (d.navigation || d.navigation === !1) &&
      p &&
      !p.prevEl &&
      !p.nextEl &&
      (S = !0);
  const T = (O) => {
    t[O] &&
      (t[O].destroy(),
      O === "navigation"
        ? (t.isElement && (t[O].prevEl.remove(), t[O].nextEl.remove()),
          (d[O].prevEl = void 0),
          (d[O].nextEl = void 0),
          (t[O].prevEl = void 0),
          (t[O].nextEl = void 0))
        : (t.isElement && t[O].el.remove(),
          (d[O].el = void 0),
          (t[O].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (d.loop && !r.loop ? (j = !0) : !d.loop && r.loop ? (E = !0) : (k = !0)),
    c.forEach((O) => {
      if (gr(d[O]) && gr(r[O]))
        Tn(d[O], r[O]),
          (O === "navigation" || O === "pagination" || O === "scrollbar") &&
            "enabled" in r[O] &&
            !r[O].enabled &&
            T(O);
      else {
        const L = r[O];
        (L === !0 || L === !1) &&
        (O === "navigation" || O === "pagination" || O === "scrollbar")
          ? L === !1 && T(O)
          : (d[O] = r[O]);
      }
    }),
    c.includes("controller") &&
      !m &&
      t.controller &&
      t.controller.control &&
      d.controller &&
      d.controller.control &&
      (t.controller.control = d.controller.control),
    i.includes("children") &&
      n &&
      v &&
      d.virtual.enabled &&
      ((v.slides = n), v.update(!0)),
    i.includes("children") && n && d.loop && (k = !0),
    w && y.init() && y.update(!0),
    m && (t.controller.control = d.controller.control),
    g &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        t.el.appendChild(a)),
      a && (d.pagination.el = a),
      f.init(),
      f.render(),
      f.update()),
    x &&
      (t.isElement &&
        (!l || typeof l == "string") &&
        ((l = document.createElement("div")),
        l.classList.add("swiper-scrollbar"),
        t.el.appendChild(l)),
      l && (d.scrollbar.el = l),
      h.init(),
      h.updateSize(),
      h.setTranslate()),
    S &&
      (t.isElement &&
        ((!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-next"),
          (o.innerHTML = t.hostEl.nextButtonSvg),
          t.el.appendChild(o)),
        (!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-prev"),
          (o.innerHTML = t.hostEl.prevButtonSvg),
          t.el.appendChild(s))),
      o && (d.navigation.nextEl = o),
      s && (d.navigation.prevEl = s),
      p.init(),
      p.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (j || k) && t.loopDestroy(),
    (E || k) && t.loopCreate(),
    t.update();
}
function xC(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  Tn(n, yo.defaults),
    Tn(n, yo.extendedDefaults),
    (n._emitClasses = !0),
    (n.init = !1);
  const o = {},
    s = f1.map((a) => a.replace(/_/, "")),
    l = Object.assign({}, e);
  return (
    Object.keys(l).forEach((a) => {
      typeof e[a] > "u" ||
        (s.indexOf(a) >= 0
          ? gr(e[a])
            ? ((n[a] = {}), (i[a] = {}), Tn(n[a], e[a]), Tn(i[a], e[a]))
            : ((n[a] = e[a]), (i[a] = e[a]))
          : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function"
          ? t
            ? (r[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
            : (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
          : (o[a] = e[a]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((a) => {
      n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a];
    }),
    { params: n, passedParams: i, rest: o, events: r }
  );
}
function wC(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: o,
    scrollbarEl: s,
    swiper: l,
  } = e;
  p1(t) &&
    r &&
    i &&
    ((l.params.navigation.nextEl = r),
    (l.originalParams.navigation.nextEl = r),
    (l.params.navigation.prevEl = i),
    (l.originalParams.navigation.prevEl = i)),
    h1(t) &&
      o &&
      ((l.params.pagination.el = o), (l.originalParams.pagination.el = o)),
    m1(t) &&
      s &&
      ((l.params.scrollbar.el = s), (l.originalParams.scrollbar.el = s)),
    l.init(n);
}
function SC(e, t, n, r, i) {
  const o = [];
  if (!t) return o;
  const s = (a) => {
    o.indexOf(a) < 0 && o.push(a);
  };
  if (n && r) {
    const a = r.map(i),
      c = n.map(i);
    a.join("") !== c.join("") && s("children"),
      r.length !== n.length && s("children");
  }
  return (
    f1
      .filter((a) => a[0] === "_")
      .map((a) => a.replace(/_/, ""))
      .forEach((a) => {
        if (a in e && a in t)
          if (gr(e[a]) && gr(t[a])) {
            const c = Object.keys(e[a]),
              d = Object.keys(t[a]);
            c.length !== d.length
              ? s(a)
              : (c.forEach((f) => {
                  e[a][f] !== t[a][f] && s(a);
                }),
                d.forEach((f) => {
                  e[a][f] !== t[a][f] && s(a);
                }));
          } else e[a] !== t[a] && s(a);
      }),
    o
  );
}
const bC = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function dl() {
  return (
    (dl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    dl.apply(this, arguments)
  );
}
function v1(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function y1(e) {
  const t = [];
  return (
    A.Children.toArray(e).forEach((n) => {
      v1(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          y1(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function jC(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    A.Children.toArray(e).forEach((r) => {
      if (v1(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = y1(r.props.children);
        i.length > 0 ? i.forEach((o) => t.push(o)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function EC(e, t, n) {
  if (!n) return null;
  const r = (d) => {
      let f = d;
      return (
        d < 0 ? (f = t.length + d) : f >= t.length && (f = f - t.length), f
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: o, to: s } = n,
    l = e.params.loop ? -t.length : 0,
    a = e.params.loop ? t.length * 2 : t.length,
    c = [];
  for (let d = l; d < a; d += 1) d >= o && d <= s && c.push(t[r(d)]);
  return c.map((d, f) =>
    A.cloneElement(d, { swiper: e, style: i, key: `slide-${f}` })
  );
}
function Wi(e, t) {
  return typeof window > "u" ? b.useEffect(e, t) : b.useLayoutEffect(e, t);
}
const Uh = b.createContext(null),
  kC = b.createContext(null),
  Ro = b.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: o,
        onSwiper: s,
        ...l
      } = e === void 0 ? {} : e,
      a = !1;
    const [c, d] = b.useState("swiper"),
      [f, p] = b.useState(null),
      [h, v] = b.useState(!1),
      y = b.useRef(!1),
      w = b.useRef(null),
      m = b.useRef(null),
      g = b.useRef(null),
      x = b.useRef(null),
      S = b.useRef(null),
      j = b.useRef(null),
      E = b.useRef(null),
      k = b.useRef(null),
      { params: T, passedParams: O, rest: L, events: C } = xC(l),
      { slides: P, slots: M } = jC(o),
      $ = () => {
        v(!h);
      };
    Object.assign(T.on, {
      _containerClasses(I, z) {
        d(z);
      },
    });
    const q = () => {
      Object.assign(T.on, C), (a = !0);
      const I = { ...T };
      if (
        (delete I.wrapperClass,
        (m.current = new yo(I)),
        m.current.virtual && m.current.params.virtual.enabled)
      ) {
        m.current.virtual.slides = P;
        const z = {
          cache: !1,
          slides: P,
          renderExternal: p,
          renderExternalUpdate: !1,
        };
        Tn(m.current.params.virtual, z),
          Tn(m.current.originalParams.virtual, z);
      }
    };
    w.current || q(), m.current && m.current.on("_beforeBreakpoint", $);
    const ie = () => {
        a ||
          !C ||
          !m.current ||
          Object.keys(C).forEach((I) => {
            m.current.on(I, C[I]);
          });
      },
      Z = () => {
        !C ||
          !m.current ||
          Object.keys(C).forEach((I) => {
            m.current.off(I, C[I]);
          });
      };
    b.useEffect(() => () => {
      m.current && m.current.off("_beforeBreakpoint", $);
    }),
      b.useEffect(() => {
        !y.current &&
          m.current &&
          (m.current.emitSlidesClasses(), (y.current = !0));
      }),
      Wi(() => {
        if ((t && (t.current = w.current), !!w.current))
          return (
            m.current.destroyed && q(),
            wC(
              {
                el: w.current,
                nextEl: S.current,
                prevEl: j.current,
                paginationEl: E.current,
                scrollbarEl: k.current,
                swiper: m.current,
              },
              T
            ),
            s && s(m.current),
            () => {
              m.current && !m.current.destroyed && m.current.destroy(!0, !1);
            }
          );
      }, []),
      Wi(() => {
        ie();
        const I = SC(O, g.current, P, x.current, (z) => z.key);
        return (
          (g.current = O),
          (x.current = P),
          I.length &&
            m.current &&
            !m.current.destroyed &&
            yC({
              swiper: m.current,
              slides: P,
              passedParams: O,
              changedParams: I,
              nextEl: S.current,
              prevEl: j.current,
              scrollbarEl: k.current,
              paginationEl: E.current,
            }),
          () => {
            Z();
          }
        );
      }),
      Wi(() => {
        bC(m.current);
      }, [f]);
    function R() {
      return T.virtual
        ? EC(m.current, P, f)
        : P.map((I, z) =>
            A.cloneElement(I, { swiper: m.current, swiperSlideIndex: z })
          );
    }
    return A.createElement(
      r,
      dl({ ref: w, className: g1(`${c}${n ? ` ${n}` : ""}`) }, L),
      A.createElement(
        kC.Provider,
        { value: m.current },
        M["container-start"],
        A.createElement(
          i,
          { className: vC(T.wrapperClass) },
          M["wrapper-start"],
          R(),
          M["wrapper-end"]
        ),
        p1(T) &&
          A.createElement(
            A.Fragment,
            null,
            A.createElement("div", { ref: j, className: "swiper-button-prev" }),
            A.createElement("div", { ref: S, className: "swiper-button-next" })
          ),
        m1(T) &&
          A.createElement("div", { ref: k, className: "swiper-scrollbar" }),
        h1(T) &&
          A.createElement("div", { ref: E, className: "swiper-pagination" }),
        M["container-end"]
      )
    );
  });
Ro.displayName = "Swiper";
const Io = b.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: o,
    zoom: s,
    lazy: l,
    virtualIndex: a,
    swiperSlideIndex: c,
    ...d
  } = e === void 0 ? {} : e;
  const f = b.useRef(null),
    [p, h] = b.useState("swiper-slide"),
    [v, y] = b.useState(!1);
  function w(S, j, E) {
    j === f.current && h(E);
  }
  Wi(() => {
    if (
      (typeof c < "u" && (f.current.swiperSlideIndex = c),
      t && (t.current = f.current),
      !(!f.current || !o))
    ) {
      if (o.destroyed) {
        p !== "swiper-slide" && h("swiper-slide");
        return;
      }
      return (
        o.on("_slideClass", w),
        () => {
          o && o.off("_slideClass", w);
        }
      );
    }
  }),
    Wi(() => {
      o && f.current && !o.destroyed && h(o.getSlideClasses(f.current));
    }, [o]);
  const m = {
      isActive: p.indexOf("swiper-slide-active") >= 0,
      isVisible: p.indexOf("swiper-slide-visible") >= 0,
      isPrev: p.indexOf("swiper-slide-prev") >= 0,
      isNext: p.indexOf("swiper-slide-next") >= 0,
    },
    g = () => (typeof r == "function" ? r(m) : r),
    x = () => {
      y(!0);
    };
  return A.createElement(
    n,
    dl(
      {
        ref: f,
        className: g1(`${p}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": a,
        onLoad: x,
      },
      d
    ),
    s &&
      A.createElement(
        Uh.Provider,
        { value: m },
        A.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof s == "number" ? s : void 0,
          },
          g(),
          l &&
            !v &&
            A.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !s &&
      A.createElement(
        Uh.Provider,
        { value: m },
        g(),
        l &&
          !v &&
          A.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
Io.displayName = "SwiperSlide";
const CC = {
    kodata: [],
    korswiper: [],
    randomdata: [],
    loading: !0,
    state: null,
  },
  ln = ua("kordeta/kordata", async () => {
    try {
      return (
        await To.get(
          "https://gist.githubusercontent.com/Jabchoking/89b047ed80935a36b3dd476b04a541ab/raw/547b20392ab8d1c5d9e8f2c12dbbea1f283dffaf/gistfile1.txt"
        )
      ).data;
    } catch (e) {
      throw (console.log(e), e);
    }
  }),
  x1 = gi({
    name: "kordata",
    initialState: CC,
    reducers: {
      useswiper(e, t) {
        let n = [],
          r = [];
        e.kodata.map((i, o) => {
          o % t.payload === 0 && o !== 0
            ? (n.push(r), (r = []), r.push(i))
            : e.kodata.length - 1 === o
            ? (r.push(i), n.push(r), (r = []))
            : r.push(i);
        }),
          (e.korswiper = n);
      },
      randomset(e) {
        const { kodata: t } = e;
        function n(i) {
          const o = i.slice();
          for (let s = o.length - 1; s > 0; s--) {
            const l = Math.floor(Math.random() * (s + 1));
            [o[s], o[l]] = [o[l], o[s]];
          }
          return o;
        }
        const r = n(t).slice(0, 10);
        e.randomdata = r;
      },
    },
    extraReducers: (e) => {
      e.addCase(ln.pending, (t, n) => {
        (t.state = "로딩중"), (t.loading = !0);
      })
        .addCase(ln.fulfilled, (t, n) => {
          (t.state = "성공"), (t.loading = !1), (t.kodata = n.payload);
        })
        .addCase(ln.rejected, (t, n) => {
          (t.state = "실패"), (t.loading = !0);
        });
    },
  }),
  { useswiper: PC, randomset: TC } = x1.actions,
  OC = x1.reducer,
  w1 = b.memo(({ i: e, listname: t }) => {
    const n = Se(),
      r = (i) => n(ca(e));
    return u.jsxs(Lb, {
      children: [
        u.jsx("img", {
          src: `${t === "kor" ? `./${e.image}` : `${e.image}`}`,
          alt: "",
          onClick: r,
          style: { cursor: "pointer" },
        }),
        u.jsxs(qe, {
          to: `/chart/${e.rank}/${t}`,
          children: [
            " ",
            u.jsx("h3", { style: { color: "white" }, children: e.name }),
            " ",
          ],
        }),
        u.jsx(qe, {
          to: `/chart/${t}/${e.artist}/artist`,
          children: u.jsx("h4", { children: e.artist }),
        }),
      ],
    });
  });
const S1 = b.memo(() => {
    const e = Se(),
      t = X((s) => s.kordata.randomdata),
      n = X((s) => s.kordata.loading);
    b.useEffect(() => {
      setTimeout(() => {
        e(TC());
      }, 150);
    }, [e, n]);
    const r = () => (window.innerWidth <= 1400 ? 2 : 3),
      [i, o] = b.useState(r());
    return (
      b.useEffect(() => {
        const s = () => {
          window.innerWidth > 1200 ? o(3) : o(2);
        };
        return (
          window.addEventListener("resize", s),
          () => {
            window.removeEventListener("resize", s);
          }
        );
      }, [i]),
      n
        ? u.jsx("h2", { children: "불러오는중" })
        : u.jsxs(iv, {
            children: [
              u.jsx("h2", { children: "오늘의 추천 한국음악" }),
              u.jsx(Ro, {
                spaceBetween: 30,
                slidesPerView: i === 3 ? 5 : 3,
                loop: !0,
                className: "mySwiper",
                children: t.map((s, l) =>
                  u.jsx(
                    Io,
                    { children: u.jsx(w1, { i: s, listname: "kor" }) },
                    l
                  )
                ),
              }),
            ],
          })
    );
  }),
  _C = {
    billboarddatas: [],
    billboardswiperarr: [],
    billboardRandomdata: [],
    loading: !0,
    state: null,
  },
  Bn = ua("billboarddata/billboarddata", async () => {
    try {
      return (
        await To.get(
          "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json"
        )
      ).data.data;
    } catch (e) {
      console.log(e);
    }
  }),
  b1 = gi({
    name: "billboarddata",
    initialState: _C,
    reducers: {
      billboardswiper(e, t) {
        let n = [],
          r = [];
        e.billboarddatas.map((i, o) => {
          o % t.payload === 0 && o !== 0
            ? (n.push(r), (r = []), r.push(i))
            : e.billboarddatas.length - 1 === o
            ? (r.push(i), n.push(r), (r = []))
            : r.push(i);
        }),
          (e.billboardswiperarr = n);
      },
      billboardRandomdset(e) {
        const { billboarddatas: t } = e;
        function n(i) {
          const o = i.slice();
          for (let s = o.length - 1; s > 0; s--) {
            const l = Math.floor(Math.random() * (s + 1));
            [o[s], o[l]] = [o[l], o[s]];
          }
          return o;
        }
        const r = n(t).slice(0, 10);
        e.billboardRandomdata = r;
      },
    },
    extraReducers: (e) => {
      e.addCase(Bn.pending, (t, n) => {
        (t.state = "로딩중"), (t.loading = !0);
      })
        .addCase(Bn.fulfilled, (t, n) => {
          (t.state = "성공"), (t.loading = !1), (t.billboarddatas = n.payload);
        })
        .addCase(Bn.rejected, (t, n) => {
          (t.state = "실패"), (t.loading = !0);
        });
    },
  }),
  { billboardswiper: LC, billboardRandomdset: NC } = b1.actions,
  MC = b1.reducer,
  j1 = b.memo(() => {
    const e = Se(),
      t = X((s) => s.billboarddata.billboardRandomdata),
      n = X((s) => s.billboarddata.loading);
    b.useEffect(() => {
      e(NC());
    }, [e, n]);
    const r = () => (window.innerWidth <= 1400 ? 2 : 3),
      [i, o] = b.useState(r());
    return (
      b.useEffect(() => {
        const s = () => {
          window.innerWidth > 1200 ? o(3) : o(2);
        };
        return (
          window.addEventListener("resize", s),
          () => {
            window.removeEventListener("resize", s);
          }
        );
      }, [i]),
      n
        ? u.jsx("h2", { children: "불러오는중" })
        : u.jsxs(iv, {
            children: [
              u.jsx("h2", { children: "오늘의 추천 Billboard음악" }),
              u.jsx(Ro, {
                spaceBetween: 30,
                slidesPerView: i === 3 ? 5 : 3,
                loop: !0,
                children: t.map((s, l) =>
                  u.jsx(
                    Io,
                    { children: u.jsx(w1, { i: s, listname: "billborad" }) },
                    l
                  )
                ),
              }),
            ],
          })
    );
  }),
  AC = () => {
    const [e, t] = b.useState([]),
      { kodata: n } = X((s) => s.kordata),
      r = Se();
    b.useEffect(() => {
      r(ln());
    }, [r]),
      b.useEffect(() => {
        n.length > 0 && t(n[10]);
      }, [n]);
    const i = Dt(),
      o = () => {
        i("/chart/11/kor");
      };
    return u.jsx(u.Fragment, {
      children: u.jsxs(Nb, {
        onClick: o,
        children: [
          u.jsx("img", { src: "./img/Ditto2.jpg", alt: "" }),
          u.jsxs("div", {
            children: [
              u.jsx("p", { children: u.jsx("i", {}) }),
              u.jsx("span", { children: "오늘의 추천 음악" }),
              u.jsx("b", { children: "컴백 소리가 들려," }),
              u.jsx("strong", { children: e.name }),
              u.jsx("strong", { children: e.artist }),
              u.jsx("p", {
                children:
                  "가장 NewJenans다운 모습으로 돌아왔다. 가장 뜨겁고 가장 시원한 여름이 담긴 노래로.",
              }),
              u.jsx("p", { children: " MAG 작성일 2023.07.25" }),
            ],
          }),
        ],
      }),
    });
  };
var E1 = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(N1, function () {
    return (function (n) {
      function r(o) {
        if (i[o]) return i[o].exports;
        var s = (i[o] = { exports: {}, id: o, loaded: !1 });
        return (
          n[o].call(s.exports, s, s.exports, r), (s.loaded = !0), s.exports
        );
      }
      var i = {};
      return (r.m = n), (r.c = i), (r.p = "dist/"), r(0);
    })([
      function (n, r, i) {
        function o($) {
          return $ && $.__esModule ? $ : { default: $ };
        }
        var s =
            Object.assign ||
            function ($) {
              for (var q = 1; q < arguments.length; q++) {
                var ie = arguments[q];
                for (var Z in ie)
                  Object.prototype.hasOwnProperty.call(ie, Z) && ($[Z] = ie[Z]);
              }
              return $;
            },
          l = i(1),
          a = (o(l), i(6)),
          c = o(a),
          d = i(7),
          f = o(d),
          p = i(8),
          h = o(p),
          v = i(9),
          y = o(v),
          w = i(10),
          m = o(w),
          g = i(11),
          x = o(g),
          S = i(14),
          j = o(S),
          E = [],
          k = !1,
          T = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded",
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1,
          },
          O = function () {
            var $ =
              arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
            if (($ && (k = !0), k))
              return (E = (0, x.default)(E, T)), (0, m.default)(E, T.once), E;
          },
          L = function () {
            (E = (0, j.default)()), O();
          },
          C = function () {
            E.forEach(function ($, q) {
              $.node.removeAttribute("data-aos"),
                $.node.removeAttribute("data-aos-easing"),
                $.node.removeAttribute("data-aos-duration"),
                $.node.removeAttribute("data-aos-delay");
            });
          },
          P = function ($) {
            return (
              $ === !0 ||
              ($ === "mobile" && y.default.mobile()) ||
              ($ === "phone" && y.default.phone()) ||
              ($ === "tablet" && y.default.tablet()) ||
              (typeof $ == "function" && $() === !0)
            );
          },
          M = function ($) {
            (T = s(T, $)), (E = (0, j.default)());
            var q = document.all && !window.atob;
            return P(T.disable) || q
              ? C()
              : (T.disableMutationObserver ||
                  h.default.isSupported() ||
                  (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                  (T.disableMutationObserver = !0)),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-easing", T.easing),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-duration", T.duration),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-delay", T.delay),
                T.startEvent === "DOMContentLoaded" &&
                ["complete", "interactive"].indexOf(document.readyState) > -1
                  ? O(!0)
                  : T.startEvent === "load"
                  ? window.addEventListener(T.startEvent, function () {
                      O(!0);
                    })
                  : document.addEventListener(T.startEvent, function () {
                      O(!0);
                    }),
                window.addEventListener(
                  "resize",
                  (0, f.default)(O, T.debounceDelay, !0)
                ),
                window.addEventListener(
                  "orientationchange",
                  (0, f.default)(O, T.debounceDelay, !0)
                ),
                window.addEventListener(
                  "scroll",
                  (0, c.default)(function () {
                    (0, m.default)(E, T.once);
                  }, T.throttleDelay)
                ),
                T.disableMutationObserver || h.default.ready("[data-aos]", L),
                E);
          };
        n.exports = { init: M, refresh: O, refreshHard: L };
      },
      function (n, r) {},
      ,
      ,
      ,
      ,
      function (n, r) {
        (function (i) {
          function o(P, M, $) {
            function q(ne) {
              var Ze = oe,
                mn = Pe;
              return (oe = Pe = void 0), (De = ne), (Q = P.apply(mn, Ze));
            }
            function ie(ne) {
              return (De = ne), (he = setTimeout(I, M)), hn ? q(ne) : Q;
            }
            function Z(ne) {
              var Ze = ne - Ne,
                mn = ne - De,
                mf = M - Ze;
              return Qt ? L(mf, de - mn) : mf;
            }
            function R(ne) {
              var Ze = ne - Ne,
                mn = ne - De;
              return Ne === void 0 || Ze >= M || Ze < 0 || (Qt && mn >= de);
            }
            function I() {
              var ne = C();
              return R(ne) ? z(ne) : void (he = setTimeout(I, Z(ne)));
            }
            function z(ne) {
              return (he = void 0), me && oe ? q(ne) : ((oe = Pe = void 0), Q);
            }
            function H() {
              he !== void 0 && clearTimeout(he),
                (De = 0),
                (oe = Ne = Pe = he = void 0);
            }
            function J() {
              return he === void 0 ? Q : z(C());
            }
            function xe() {
              var ne = C(),
                Ze = R(ne);
              if (((oe = arguments), (Pe = this), (Ne = ne), Ze)) {
                if (he === void 0) return ie(Ne);
                if (Qt) return (he = setTimeout(I, M)), q(Ne);
              }
              return he === void 0 && (he = setTimeout(I, M)), Q;
            }
            var oe,
              Pe,
              de,
              Q,
              he,
              Ne,
              De = 0,
              hn = !1,
              Qt = !1,
              me = !0;
            if (typeof P != "function") throw new TypeError(p);
            return (
              (M = d(M) || 0),
              l($) &&
                ((hn = !!$.leading),
                (Qt = "maxWait" in $),
                (de = Qt ? O(d($.maxWait) || 0, M) : de),
                (me = "trailing" in $ ? !!$.trailing : me)),
              (xe.cancel = H),
              (xe.flush = J),
              xe
            );
          }
          function s(P, M, $) {
            var q = !0,
              ie = !0;
            if (typeof P != "function") throw new TypeError(p);
            return (
              l($) &&
                ((q = "leading" in $ ? !!$.leading : q),
                (ie = "trailing" in $ ? !!$.trailing : ie)),
              o(P, M, { leading: q, maxWait: M, trailing: ie })
            );
          }
          function l(P) {
            var M = typeof P > "u" ? "undefined" : f(P);
            return !!P && (M == "object" || M == "function");
          }
          function a(P) {
            return !!P && (typeof P > "u" ? "undefined" : f(P)) == "object";
          }
          function c(P) {
            return (
              (typeof P > "u" ? "undefined" : f(P)) == "symbol" ||
              (a(P) && T.call(P) == v)
            );
          }
          function d(P) {
            if (typeof P == "number") return P;
            if (c(P)) return h;
            if (l(P)) {
              var M = typeof P.valueOf == "function" ? P.valueOf() : P;
              P = l(M) ? M + "" : M;
            }
            if (typeof P != "string") return P === 0 ? P : +P;
            P = P.replace(y, "");
            var $ = m.test(P);
            return $ || g.test(P)
              ? x(P.slice(2), $ ? 2 : 8)
              : w.test(P)
              ? h
              : +P;
          }
          var f =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (P) {
                    return typeof P;
                  }
                : function (P) {
                    return P &&
                      typeof Symbol == "function" &&
                      P.constructor === Symbol &&
                      P !== Symbol.prototype
                      ? "symbol"
                      : typeof P;
                  },
            p = "Expected a function",
            h = NaN,
            v = "[object Symbol]",
            y = /^\s+|\s+$/g,
            w = /^[-+]0x[0-9a-f]+$/i,
            m = /^0b[01]+$/i,
            g = /^0o[0-7]+$/i,
            x = parseInt,
            S =
              (typeof i > "u" ? "undefined" : f(i)) == "object" &&
              i &&
              i.Object === Object &&
              i,
            j =
              (typeof self > "u" ? "undefined" : f(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            E = S || j || Function("return this")(),
            k = Object.prototype,
            T = k.toString,
            O = Math.max,
            L = Math.min,
            C = function () {
              return E.Date.now();
            };
          n.exports = s;
        }).call(
          r,
          (function () {
            return this;
          })()
        );
      },
      function (n, r) {
        (function (i) {
          function o(C, P, M) {
            function $(me) {
              var ne = xe,
                Ze = oe;
              return (xe = oe = void 0), (Ne = me), (de = C.apply(Ze, ne));
            }
            function q(me) {
              return (Ne = me), (Q = setTimeout(R, P)), De ? $(me) : de;
            }
            function ie(me) {
              var ne = me - he,
                Ze = me - Ne,
                mn = P - ne;
              return hn ? O(mn, Pe - Ze) : mn;
            }
            function Z(me) {
              var ne = me - he,
                Ze = me - Ne;
              return he === void 0 || ne >= P || ne < 0 || (hn && Ze >= Pe);
            }
            function R() {
              var me = L();
              return Z(me) ? I(me) : void (Q = setTimeout(R, ie(me)));
            }
            function I(me) {
              return (Q = void 0), Qt && xe ? $(me) : ((xe = oe = void 0), de);
            }
            function z() {
              Q !== void 0 && clearTimeout(Q),
                (Ne = 0),
                (xe = he = oe = Q = void 0);
            }
            function H() {
              return Q === void 0 ? de : I(L());
            }
            function J() {
              var me = L(),
                ne = Z(me);
              if (((xe = arguments), (oe = this), (he = me), ne)) {
                if (Q === void 0) return q(he);
                if (hn) return (Q = setTimeout(R, P)), $(he);
              }
              return Q === void 0 && (Q = setTimeout(R, P)), de;
            }
            var xe,
              oe,
              Pe,
              de,
              Q,
              he,
              Ne = 0,
              De = !1,
              hn = !1,
              Qt = !0;
            if (typeof C != "function") throw new TypeError(f);
            return (
              (P = c(P) || 0),
              s(M) &&
                ((De = !!M.leading),
                (hn = "maxWait" in M),
                (Pe = hn ? T(c(M.maxWait) || 0, P) : Pe),
                (Qt = "trailing" in M ? !!M.trailing : Qt)),
              (J.cancel = z),
              (J.flush = H),
              J
            );
          }
          function s(C) {
            var P = typeof C > "u" ? "undefined" : d(C);
            return !!C && (P == "object" || P == "function");
          }
          function l(C) {
            return !!C && (typeof C > "u" ? "undefined" : d(C)) == "object";
          }
          function a(C) {
            return (
              (typeof C > "u" ? "undefined" : d(C)) == "symbol" ||
              (l(C) && k.call(C) == h)
            );
          }
          function c(C) {
            if (typeof C == "number") return C;
            if (a(C)) return p;
            if (s(C)) {
              var P = typeof C.valueOf == "function" ? C.valueOf() : C;
              C = s(P) ? P + "" : P;
            }
            if (typeof C != "string") return C === 0 ? C : +C;
            C = C.replace(v, "");
            var M = w.test(C);
            return M || m.test(C)
              ? g(C.slice(2), M ? 2 : 8)
              : y.test(C)
              ? p
              : +C;
          }
          var d =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (C) {
                    return typeof C;
                  }
                : function (C) {
                    return C &&
                      typeof Symbol == "function" &&
                      C.constructor === Symbol &&
                      C !== Symbol.prototype
                      ? "symbol"
                      : typeof C;
                  },
            f = "Expected a function",
            p = NaN,
            h = "[object Symbol]",
            v = /^\s+|\s+$/g,
            y = /^[-+]0x[0-9a-f]+$/i,
            w = /^0b[01]+$/i,
            m = /^0o[0-7]+$/i,
            g = parseInt,
            x =
              (typeof i > "u" ? "undefined" : d(i)) == "object" &&
              i &&
              i.Object === Object &&
              i,
            S =
              (typeof self > "u" ? "undefined" : d(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            j = x || S || Function("return this")(),
            E = Object.prototype,
            k = E.toString,
            T = Math.max,
            O = Math.min,
            L = function () {
              return j.Date.now();
            };
          n.exports = o;
        }).call(
          r,
          (function () {
            return this;
          })()
        );
      },
      function (n, r) {
        function i(d) {
          var f = void 0,
            p = void 0;
          for (f = 0; f < d.length; f += 1)
            if (
              ((p = d[f]),
              (p.dataset && p.dataset.aos) || (p.children && i(p.children)))
            )
              return !0;
          return !1;
        }
        function o() {
          return (
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver
          );
        }
        function s() {
          return !!o();
        }
        function l(d, f) {
          var p = window.document,
            h = o(),
            v = new h(a);
          (c = f),
            v.observe(p.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0,
            });
        }
        function a(d) {
          d &&
            d.forEach(function (f) {
              var p = Array.prototype.slice.call(f.addedNodes),
                h = Array.prototype.slice.call(f.removedNodes),
                v = p.concat(h);
              if (i(v)) return c();
            });
        }
        Object.defineProperty(r, "__esModule", { value: !0 });
        var c = function () {};
        r.default = { isSupported: s, ready: l };
      },
      function (n, r) {
        function i(p, h) {
          if (!(p instanceof h))
            throw new TypeError("Cannot call a class as a function");
        }
        function o() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        Object.defineProperty(r, "__esModule", { value: !0 });
        var s = (function () {
            function p(h, v) {
              for (var y = 0; y < v.length; y++) {
                var w = v[y];
                (w.enumerable = w.enumerable || !1),
                  (w.configurable = !0),
                  "value" in w && (w.writable = !0),
                  Object.defineProperty(h, w.key, w);
              }
            }
            return function (h, v, y) {
              return v && p(h.prototype, v), y && p(h, y), h;
            };
          })(),
          l =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          a =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          c =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          d =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          f = (function () {
            function p() {
              i(this, p);
            }
            return (
              s(p, [
                {
                  key: "phone",
                  value: function () {
                    var h = o();
                    return !(!l.test(h) && !a.test(h.substr(0, 4)));
                  },
                },
                {
                  key: "mobile",
                  value: function () {
                    var h = o();
                    return !(!c.test(h) && !d.test(h.substr(0, 4)));
                  },
                },
                {
                  key: "tablet",
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
              ]),
              p
            );
          })();
        r.default = new f();
      },
      function (n, r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var i = function (s, l, a) {
            var c = s.node.getAttribute("data-aos-once");
            l > s.position
              ? s.node.classList.add("aos-animate")
              : typeof c < "u" &&
                (c === "false" || (!a && c !== "true")) &&
                s.node.classList.remove("aos-animate");
          },
          o = function (s, l) {
            var a = window.pageYOffset,
              c = window.innerHeight;
            s.forEach(function (d, f) {
              i(d, c + a, l);
            });
          };
        r.default = o;
      },
      function (n, r, i) {
        function o(c) {
          return c && c.__esModule ? c : { default: c };
        }
        Object.defineProperty(r, "__esModule", { value: !0 });
        var s = i(12),
          l = o(s),
          a = function (c, d) {
            return (
              c.forEach(function (f, p) {
                f.node.classList.add("aos-init"),
                  (f.position = (0, l.default)(f.node, d.offset));
              }),
              c
            );
          };
        r.default = a;
      },
      function (n, r, i) {
        function o(c) {
          return c && c.__esModule ? c : { default: c };
        }
        Object.defineProperty(r, "__esModule", { value: !0 });
        var s = i(13),
          l = o(s),
          a = function (c, d) {
            var f = 0,
              p = 0,
              h = window.innerHeight,
              v = {
                offset: c.getAttribute("data-aos-offset"),
                anchor: c.getAttribute("data-aos-anchor"),
                anchorPlacement: c.getAttribute("data-aos-anchor-placement"),
              };
            switch (
              (v.offset && !isNaN(v.offset) && (p = parseInt(v.offset)),
              v.anchor &&
                document.querySelectorAll(v.anchor) &&
                (c = document.querySelectorAll(v.anchor)[0]),
              (f = (0, l.default)(c).top),
              v.anchorPlacement)
            ) {
              case "top-bottom":
                break;
              case "center-bottom":
                f += c.offsetHeight / 2;
                break;
              case "bottom-bottom":
                f += c.offsetHeight;
                break;
              case "top-center":
                f += h / 2;
                break;
              case "bottom-center":
                f += h / 2 + c.offsetHeight;
                break;
              case "center-center":
                f += h / 2 + c.offsetHeight / 2;
                break;
              case "top-top":
                f += h;
                break;
              case "bottom-top":
                f += c.offsetHeight + h;
                break;
              case "center-top":
                f += c.offsetHeight / 2 + h;
            }
            return v.anchorPlacement || v.offset || isNaN(d) || (p = d), f + p;
          };
        r.default = a;
      },
      function (n, r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var i = function (o) {
          for (
            var s = 0, l = 0;
            o && !isNaN(o.offsetLeft) && !isNaN(o.offsetTop);

          )
            (s += o.offsetLeft - (o.tagName != "BODY" ? o.scrollLeft : 0)),
              (l += o.offsetTop - (o.tagName != "BODY" ? o.scrollTop : 0)),
              (o = o.offsetParent);
          return { top: l, left: s };
        };
        r.default = i;
      },
      function (n, r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var i = function (o) {
          return (
            (o = o || document.querySelectorAll("[data-aos]")),
            Array.prototype.map.call(o, function (s) {
              return { node: s };
            })
          );
        };
        r.default = i;
      },
    ]);
  });
})(E1);
var RC = E1.exports;
const fa = Vh(RC);
const IC = b.memo(() => {
    const e = Se(),
      t = Dt();
    b.useEffect(() => {
      e(ln()), e(Bn());
    }, [e]),
      b.useEffect(() => {
        fa.init({ easing: "ease-in-out", once: !0 });
      }, []);
    const n = () => {
      t("/event");
    };
    return u.jsx(u.Fragment, {
      children: u.jsxs(Xe, {
        children: [
          u.jsxs(Wn, {
            children: [
              u.jsx(AC, {}),
              u.jsx(S1, {}),
              u.jsx(j1, {}),
              u.jsx(Mb, {
                src: "./images/eventbanner.png",
                alt: "",
                onClick: () => n(),
                "data-aos": "fade-down",
                "data-aos-duration": "2000",
              }),
            ],
          }),
          u.jsx(at, {}),
          u.jsx(st, {}),
          u.jsx(lt, {}),
        ],
      }),
    });
  }),
  k1 = b.memo(({ i: e, listname: t }) =>
    u.jsx(u.Fragment, {
      children: u.jsx(wb, {
        children: u.jsx("ul", {
          children: e && e.map((n) => u.jsx(Lc, { z: n, listname: t }, n.rank)),
        }),
      }),
    })
  ),
  zC = b.memo(() => {
    const e = Se();
    b.useEffect(() => {
      (async () => {
        await e(ln()), e(PC(5));
      })();
    }, []);
    const t = X((o) => o.kordata.korswiper),
      n = () => (window.innerWidth <= 1400 ? 2 : 3),
      [r, i] = b.useState(n());
    return (
      b.useEffect(() => {
        const o = () => {
          window.innerWidth > 1400 ? i(3) : i(2);
        };
        return (
          window.addEventListener("resize", o),
          () => {
            window.removeEventListener("resize", o);
          }
        );
      }, [r]),
      b.useEffect(() => {
        const o = () => {
            window.innerWidth > 1400 ? i(3) : i(2);
          },
          s = () => {
            o();
          },
          l = () => {
            console.log("스크린에러");
          };
        return (
          window.addEventListener("resize", o),
          document.addEventListener("fullscreenchange", s),
          document.addEventListener("fullscreenerror", l),
          () => {
            window.removeEventListener("resize", o),
              document.removeEventListener("fullscreenchange", s),
              document.removeEventListener("fullscreenerror", l);
          }
        );
      }, [r]),
      X((o) => o.kordata.kodata),
      u.jsxs(rv, {
        children: [
          u.jsxs("h3", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
              "국내 HOT 100",
              " ",
              u.jsx(qe, { to: "/chart/kor/text/nop", children: "더보기..." }),
              " ",
            ],
          }),
          u.jsx("ul", {
            children: u.jsx(Ro, {
              spaceBetween: 5,
              slidesPerView: r,
              children: t.map((o, s) =>
                u.jsxs(
                  Io,
                  {
                    style: { width: 350 },
                    children: [
                      " ",
                      u.jsx(k1, { i: o, listname: "kor" }, s),
                      " ",
                    ],
                  },
                  s
                )
              ),
            }),
          }),
        ],
      })
    );
  }),
  DC = b.memo(() => {
    const e = Se();
    b.useEffect(() => {
      (() => {
        e(Bn());
      })();
    }, [e]);
    const t = X((s) => s.billboarddata.billboarddatas),
      n = X((s) => s.billboarddata.billboardswiperarr);
    b.useEffect(() => {
      e(LC(5));
    }, [t]);
    const r = () => (window.innerWidth <= 1400 ? 2 : 3),
      [i, o] = b.useState(r());
    return (
      b.useEffect(() => {
        const s = () => {
          window.innerWidth > 1400 ? o(3) : o(2);
        };
        return (
          window.addEventListener("resize", s),
          () => {
            window.removeEventListener("resize", s);
          }
        );
      }, [i]),
      u.jsxs(rv, {
        children: [
          u.jsxs("h3", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
              "billboard HOT",
              " ",
              u.jsx(qe, {
                to: "/chart/billboard/text/nop",
                children: "더보기...",
              }),
            ],
          }),
          u.jsx("ul", {
            children: u.jsx(Ro, {
              spaceBetween: 5,
              slidesPerView: i,
              children: n.map((s, l) =>
                u.jsx(
                  Io,
                  {
                    style: { width: 350 },
                    children: u.jsx(k1, { i: s, listname: "billboard" }, l),
                  },
                  l
                )
              ),
            }),
          }),
        ],
      })
    );
  }),
  $C = b.memo(() =>
    u.jsxs(u.Fragment, {
      children: [
        u.jsxs(Xe, {
          children: [
            u.jsxs(Wn, {
              children: [
                u.jsx("h2", { children: " 차트" }),
                u.jsx(zC, {}),
                u.jsx("br", {}),
                u.jsx(DC, {}),
              ],
            }),
            u.jsx(at, {}),
          ],
        }),
        u.jsx(st, {}),
        u.jsx(lt, {}),
      ],
    })
  ),
  C1 = (e, t) => (r) => {
    if (!Array.isArray(e) || e.length === 0) return !1;
    const i = e.find((o) => o.rank === r);
    return i !== void 0
      ? t && Array.isArray(t.playList)
        ? t.playList.some((o) => JSON.stringify(o) === JSON.stringify(i))
        : void 0
      : !1;
  },
  FC = {
    data: JSON.parse(localStorage.getItem("comments")) || [
      { name: "SuperShy", text: "tqtqws", username: "qwe" },
    ],
  },
  P1 = gi({
    name: "comment",
    initialState: FC,
    reducers: {
      addcomment(e, t) {
        (e.data = [...e.data, t.payload]),
          localStorage.setItem("comments", JSON.stringify(e.data));
      },
      removecomment(e, t) {
        (e.data = e.data.filter((n) => n.text !== t.payload.text)),
          localStorage.setItem("comments", JSON.stringify(e.data));
      },
    },
  }),
  { addcomment: UC, removecomment: BC } = P1.actions,
  VC = P1.reducer,
  HC = b.memo(({ user: e, i: t, commentremvebut: n }) =>
    u.jsxs(kb, {
      children: [
        u.jsx("img", { src: "/img/userimg.png", alt: "" }),
        u.jsx("br", {}),
        u.jsxs("em", {
          className: "username",
          children: [" ", t.username, " "],
        }),
        " ",
        u.jsx("br", {}),
        u.jsxs("div", {
          className: "commentbottom",
          children: [
            u.jsxs("span", { className: "text", children: [" ", t.text, " "] }),
            e
              ? e.login_UserID === t.username
                ? u.jsx("button", { onClick: (r) => n(t), children: "삭제" })
                : u.jsx("button", { children: "신고하기" })
              : u.jsx("button", { children: "신고하기" }),
          ],
        }),
      ],
    })
  ),
  T1 = ({ artist: e, song: t }) => {
    const [n, r] = b.useState(""),
      [i, o] = b.useState(!1);
    return (
      b.useEffect(() => {
        (async () => {
          const a = `https://api.vagalume.com.br/search.php?apikey=021b67939de3203f3f7ac2782d3b08a2&art=${encodeURIComponent(
            e
          )}&mus=${encodeURIComponent(t)}`;
          try {
            const c = await To.get(a);
            c.data.type === "exact"
              ? r(c.data.mus[0].text)
              : console.error("Lyrics not found.");
          } catch (c) {
            console.error("Error fetching lyrics:", c);
          }
        })();
      }, []),
      u.jsxs(u.Fragment, {
        children: [
          u.jsx(q4, {
            style: { height: i ? "" : 400 },
            children: n
              ? u.jsx("p", { children: n })
              : u.jsx("p", { children: "가사를 불러오는 중..." }),
          }),
          u.jsx(J4, {
            children: u.jsx("button", {
              onClick: () => o(!i),
              children: i ? "접기" : "더보기",
            }),
          }),
        ],
      })
    );
  },
  WC = b.memo(() => {
    const e = Se(),
      { user: t } = X((L) => L.user),
      { chartid: n, listname: r } = _l(),
      [i, o] = b.useState(!1),
      [s, l] = b.useState(!1),
      [a, c] = b.useState([]),
      d = X((L) => L.comment.data),
      f = (L) => {
        o(!i);
      },
      p = (L) => l(!s);
    b.useEffect(() => {
      e(r === "kor" ? ln() : Bn());
    }, [e, r]);
    const h = X((L) =>
        r === "kor" ? L.kordata.loading : L.billboarddata.loading
      ),
      v = X((L) =>
        r === "kor" ? L.kordata.kodata : L.billboarddata.billboarddatas
      ),
      y = v.find((L) => L.rank === Number(n));
    b.useEffect(() => {
      if (y && t && t.pick) {
        const L = t.pick.some((C) => C.name === y.name);
        o(L);
      }
    }, [t, y]);
    const [w, m] = b.useState(!1),
      g = () => m(!w);
    if (h) return u.jsx("h2", { children: "불러오는중" });
    const x = C1(v, t),
      S = (L) => {
        const C = v.find((M) => M.rank === L);
        x(L)
          ? alert("이미 추가된 노래입니다.")
          : (e(ca(C)), alert("플레이 리스트에 추가되었습니다."));
      },
      j = (L) => {
        if (v.length === 0) return;
        const C = v.find((P) => P.rank === L);
        C !== void 0 &&
        t.pick.find((M) => JSON.stringify(M) === JSON.stringify(C))
          ? alert("이미 추가된 노래입니다.")
          : e(jh(C));
      },
      E = (L) => {
        c({ name: y.name, text: L.target.value, username: t.login_UserID }),
          console.log(a);
      },
      k = (L) => {
        L.preventDefault(), e(UC(a)), c({ ...a, text: "" });
      },
      T = (L) => {
        console.log(L), e(BC(L));
      },
      O = (L) => {
        const C = v.find((P) => P.rank === L);
        e(Iv(C));
      };
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx(bb, { onClick: g, style: { display: w ? "block" : "none" } }),
        u.jsx(Eb, {
          onClick: g,
          style: { display: w ? "block" : "none" },
          children: u.jsx(Wn, {
            children: u.jsxs("div", {
              children: [
                u.jsx("img", {
                  src: r === "kor" ? `./${y.image}` : `${y.image}`,
                  alt: "",
                }),
                u.jsxs("h4", {
                  children: [
                    y.name,
                    u.jsx("br", {}),
                    u.jsx("em", { children: y.artist }),
                  ],
                }),
                u.jsx("em", { children: "엘범" }),
                u.jsx("span", { children: y.album }),
              ],
            }),
          }),
        }),
        u.jsxs(Xe, {
          children: [
            u.jsx(Wn, {
              children: u.jsxs(jb, {
                children: [
                  u.jsx("img", {
                    className: "topimg",
                    src: r === "kor" ? `./${y.image}` : `${y.image}`,
                    alt: "",
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("h2", { children: y.name }),
                      u.jsx("h3", { children: y.artist }),
                      u.jsxs("span", {
                        onClick: g,
                        className: "cursor",
                        children: [" ", "상세보기...", " "],
                      }),
                      u.jsxs("div", {
                        className: "butbox",
                        children: [
                          u.jsxs("button", {
                            className: "typered",
                            onClick: () => O(y.rank),
                            children: [
                              u.jsx(lv, { style: { fontSize: 20 } }),
                              "재생",
                            ],
                          }),
                          u.jsx("button", {
                            className: "typebleck",
                            children: "MP3구매",
                          }),
                          u.jsxs("button", {
                            className: "typebleck",
                            onClick: () => S(y.rank),
                            children: [u.jsx(Gb, {}), "플레이리스트 추가"],
                          }),
                          u.jsxs("div", {
                            className: "Obox",
                            children: [
                              u.jsx("button", {
                                onClick: () => j(y.rank),
                                children: i
                                  ? u.jsx(Ub, {
                                      onClick: f,
                                      style: { color: "#ff0050" },
                                    })
                                  : u.jsx(Kb, { onClick: f }),
                              }),
                              u.jsxs("em", {
                                className: "clicklist",
                                children: [
                                  u.jsx("button", {
                                    children: u.jsx(Hb, { onClick: p }),
                                  }),
                                  u.jsxs("ul", {
                                    className: "dishul",
                                    style: { display: s ? "block" : "none" },
                                    children: [
                                      u.jsx("li", { children: "리스트1" }),
                                      u.jsx("li", { children: "리스트2" }),
                                      u.jsx("li", { children: "리스트3" }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsx(T1, { artist: y.artist, song: y.name }),
                  u.jsx(S1, {}),
                  u.jsx(j1, {}),
                  u.jsxs("div", {
                    className: "commentbox",
                    children: [
                      u.jsx("span", { children: "댓글" }),
                      u.jsx("div", {
                        className: "commentinput",
                        style: { background: i ? "none" : "#202020" },
                        children: t
                          ? t.login_UserID
                            ? u.jsx("form", {
                                onSubmit: k,
                                children: u.jsx("input", {
                                  type: "text",
                                  value: a.text,
                                  onChange: E,
                                  placeholder: "댓글을 입력해주세요",
                                  style: { background: "none", border: "none" },
                                }),
                              })
                            : u.jsxs("h5", {
                                children: [
                                  u.jsx(Re, {
                                    to: "/Login",
                                    style: { color: "#FF0050" },
                                    children: "로그인",
                                  }),
                                  "을 해주세요.",
                                ],
                              })
                          : u.jsxs("h5", {
                              children: [
                                u.jsx(Re, {
                                  to: "/Login",
                                  style: { color: "#FF0050" },
                                  children: "로그인",
                                }),
                                "을 해주세요.",
                              ],
                            }),
                      }),
                      u.jsx("div", {
                        className: "commentlist",
                        children: d.filter((L) => L.name === y.name).length
                          ? u.jsx("ul", {
                              children: d.map((L, C) =>
                                L.name === y.name
                                  ? u.jsx(
                                      HC,
                                      { i: L, user: t, commentremvebut: T },
                                      C
                                    )
                                  : null
                              ),
                            })
                          : u.jsx("h2", {
                              children:
                                "댓글이 없습니다 . 첫 댓글의 주인공이 되보세요!",
                            }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            u.jsx(at, {}),
          ],
        }),
        u.jsx(st, {}),
        u.jsx(lt, {}),
      ],
    });
  }),
  GC = b.memo(({ i: e, j: t, listname: n, rankor: r, setArrowTog: i }) => {
    const o = Se(),
      s = (l) => {
        l.target.checked
          ? (o(ca(e)), console.log("추가"), i(!1))
          : (o(zv(e)), console.log("제거"), i(!1));
      };
    return (
      b.useEffect(() => {
        fa.init({ easing: "ease-in-out", once: !0 });
      }, []),
      u.jsxs(Pb, {
        "data-aos": "fade-up",
        "data-aos-anchor-placement": "center-bottom",
        "data-aos-duration": "1000",
        children: [
          u.jsx("input", { type: "checkbox", id: `${e.rank}`, onChange: s }),
          u.jsx("label", { htmlFor: `${e.rank}` }),
          u.jsx("img", {
            src: n === "kor" ? `./${e.image}` : `${e.image}`,
            alt: "",
          }),
          r ? u.jsx("h3", { children: t + 1 }) : "",
          u.jsxs("div", {
            children: [
              u.jsx("h3", {
                children: u.jsx(qe, {
                  to: `/chart/${e.rank}/${n}`,
                  children: e.name,
                }),
              }),
              u.jsx("h3", {
                children: u.jsx(qe, {
                  to: `/chart/${n}/${e.artist}/artist`,
                  children: e.artist,
                }),
              }),
            ],
          }),
        ],
      })
    );
  });
function KC(e) {
  return le({
    tag: "svg",
    attr: { version: "1.1", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: { d: "M11.5 16l-4-4 8.5-8.5-3.5-3.5-8.5 8.5-4-4v11.5h11.5z" },
      },
    ],
  })(e);
}
const qC = b.memo(() => {
    const [e, t] = b.useState(!1),
      n = Se(),
      { listname: r, text: i, type: o } = _l(),
      s = X((p) =>
        r === "kor" ? p.kordata.kodata : p.billboarddata.billboarddatas
      ),
      l = o === "nop" ? s : s.filter((p) => p[o].includes(i));
    if (
      (b.useEffect(() => {
        n(r === "kor" ? ln() : Bn());
      }, [n, r]),
      X((p) => (r === "kor" ? p.kordata.loading : p.billboarddata.loading)))
    )
      return u.jsx("h2", { children: "불러오는중" });
    const c = () => {
        n($j([...l]));
      },
      d = () => {
        n(Uj([...l]));
      },
      f = () => {
        t(!e);
      };
    return u.jsxs(u.Fragment, {
      children: [
        u.jsxs(Xe, {
          children: [
            u.jsxs(Wn, {
              children: [
                u.jsxs(_b, {
                  children: [
                    u.jsx(KC, { className: `arrow${e ? "on" : ""}` }),
                    u.jsx("h2", {
                      children:
                        o === "nop"
                          ? r === "kor"
                            ? "오늘의 한국음악 TOP 100"
                            : "Billboard 음악 T0P 100"
                          : `${i} 의 곡`,
                    }),
                    u.jsxs("div", {
                      className: "butbox",
                      children: [
                        u.jsxs("button", {
                          className: "typered",
                          onClick: () => c(),
                          children: [
                            u.jsx(lv, { style: { fontSize: 20 } }),
                            "전체재생",
                          ],
                        }),
                        u.jsxs("button", {
                          className: "typebleck",
                          onClick: () => d(),
                          children: [
                            u.jsx(uv, { style: { fontSize: 20 } }),
                            "랜덤재생",
                          ],
                        }),
                        u.jsxs("button", {
                          className: "typebleck",
                          onClick: () => f(),
                          children: [u.jsx(Yb, {}), "선택재생"],
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs(Cb, {
                  children: [
                    l.length !== 0
                      ? u.jsxs("li", {
                          className: "alllist",
                          children: [
                            " ",
                            u.jsx("input", { type: "checkbox", id: "all" }),
                            u.jsx("label", { htmlFor: "all" }),
                            u.jsxs("span", {
                              children: [" 전체 ", l.length, " 곡 "],
                            }),
                            " ",
                          ],
                        })
                      : "",
                    l.length !== 0
                      ? l.map((p, h) =>
                          u.jsx(
                            GC,
                            {
                              i: p,
                              j: h,
                              listname: r,
                              rankor: o === "nop",
                              setArrowTog: t,
                            },
                            p.rank
                          )
                        )
                      : u.jsx("li", {
                          children: u.jsx("h2", { children: "검색결과 없음" }),
                        }),
                  ],
                }),
              ],
            }),
            u.jsx(at, {}),
          ],
        }),
        u.jsx(st, {}),
        u.jsx(lt, {}),
      ],
    });
  }),
  JC = b.memo(() => {
    const { searchtext: e } = _l(),
      t = Se();
    b.useEffect(() => {
      (() => {
        t(Bn()), t(ln());
      })();
    }, [t]);
    const n = X((c) => c.billboarddata.billboarddatas),
      r = X((c) => c.kordata.kodata),
      i = r.filter((c) => c.name.toLowerCase().includes(e.toLowerCase())),
      o = n.filter((c) => c.name.toLowerCase().includes(e.toLowerCase())),
      s = r.filter((c) => c.album.toLowerCase().includes(e.toLowerCase())),
      l = r.filter((c) => c.artist.toLowerCase().includes(e.toLowerCase())),
      a = n.filter((c) => c.artist.toLowerCase().includes(e.toLowerCase()));
    return (
      console.log(r),
      console.log(n),
      u.jsxs(u.Fragment, {
        children: [
          u.jsxs(Xe, {
            children: [
              u.jsx(Wn, {
                children: u.jsxs(Tb, {
                  children: [
                    u.jsxs("h2", { children: [e, " 검색결과"] }),
                    u.jsx("h3", { children: "곡 제목" }),
                    u.jsx("br", {}),
                    u.jsx("h4", { children: "한국곡" }),
                    u.jsx("br", {}),
                    u.jsx("ul", {
                      children:
                        i.length !== 0
                          ? i.slice(0, 3).map((c) =>
                              u.jsx("li", {
                                style: { color: "yellow" },
                                children: c.name,
                              })
                            )
                          : u.jsx("li", { children: "검색결과 없음" }),
                    }),
                    u.jsx("br", {}),
                    u.jsx("h4", { children: "billboard 곡" }),
                    u.jsx("br", {}),
                    u.jsx("ul", {
                      children:
                        o.length !== 0
                          ? o.slice(0, 3).map((c, d) =>
                              u.jsx(
                                "li",
                                {
                                  style: { color: "yellow" },
                                  children: c.name,
                                },
                                d
                              )
                            )
                          : u.jsx("li", {
                              className: "null",
                              children: "검색결과 없음",
                            }),
                    }),
                    u.jsx("h3", { children: "엘범 제목" }),
                    u.jsx("h4", { children: "한국 엘범" }),
                    u.jsx("br", {}),
                    u.jsx("ul", {
                      children:
                        s.length !== 0
                          ? s.slice(0, 3).map((c) =>
                              u.jsx("li", {
                                style: { color: "yellow" },
                                children: u.jsxs("div", {
                                  children: [
                                    u.jsx("img", { src: c.image, alt: "" }),
                                    " ",
                                    c.album,
                                  ],
                                }),
                              })
                            )
                          : u.jsx("li", { children: "검색결과 없음" }),
                    }),
                    u.jsx("br", {}),
                    u.jsx("h3", { children: "가수" }),
                    u.jsx("h4", { children: "한국 가수" }),
                    u.jsx("br", {}),
                    u.jsx("ul", {
                      children:
                        l.length !== 0
                          ? l.slice(0, 3).map((c) =>
                              u.jsx("li", {
                                style: { color: "yellow" },
                                children: c.artist,
                              })
                            )
                          : u.jsx("li", { children: "검색결과 없음" }),
                    }),
                    u.jsx("br", {}),
                    u.jsx("h4", { children: "billboard 가수" }),
                    u.jsx("br", {}),
                    u.jsx("ul", {
                      children:
                        a.length !== 0
                          ? a.slice(0, 3).map((c) =>
                              u.jsx("li", {
                                style: { color: "yellow" },
                                children: c.artist,
                              })
                            )
                          : u.jsx("li", { children: "검색결과 없음" }),
                    }),
                  ],
                }),
              }),
              u.jsx(at, {}),
            ],
          }),
          u.jsx(st, {}),
          u.jsx(lt, {}),
        ],
      })
    );
  }),
  QC = {
    data: { list: [], qna: [] },
    loading: !0,
    status: "idle",
    randomUrls: [],
    searchTerm: "",
    filteredBySearch: [],
  },
  Kr = ua("data/getData", async () => {
    try {
      return (
        await To.get(
          "https://gist.githubusercontent.com/jeonseoungil/8a42710b58bd531cc31d568cd24e1b39/raw/6eac68352c9e84b2dd2c31c2eb9add39137414e9/list.json"
        )
      ).data;
    } catch (e) {
      console.log(e);
    }
  }),
  O1 = ua("data/searchList", (e) => e),
  _1 = gi({
    name: "data",
    initialState: QC,
    reducers: {
      changeInput(e, t) {
        e.searchTerm = t.payload;
      },
      Menu(e, t) {
        t.payload === "전체"
          ? ((e.data.filtered1 = null), (e.filteredBySearch = []))
          : ((e.data.filtered1 = e.data.list.filter(
              (n) => n.category === t.payload
            )),
            (e.randomUrls = e.data.list.filter(
              (n) => n.category === t.payload
            )),
            (e.randomUrls = []),
            (e.filteredBySearch = []));
      },
      Qna_Menu(e, t) {
        t.payload === "전체"
          ? (e.data.filtered2 = null)
          : (e.data.filtered2 = e.data.qna.filter(
              (n) => n.category === t.payload
            ));
      },
      setRandomUrls: (e, t) => {
        e.randomUrls = [...e.randomUrls, ...t.payload];
      },
    },
    extraReducers: (e) => {
      e.addCase(Kr.pending, (t, n) => {
        (t.status = "loading"), (t.loading = !0);
      })
        .addCase(Kr.fulfilled, (t, n) => {
          (t.status = "fulfilled"), (t.data = n.payload), (t.loading = !1);
        })
        .addCase(Kr.rejected, (t, n) => {
          (t.status = "error"), (t.loading = !1);
        })
        .addCase(O1.fulfilled, (t, n) => {
          const r = n.payload;
          r
            ? (t.filteredBySearch = t.data.list.filter((i) =>
                i.title.includes(r)
              ))
            : (t.filteredBySearch = t.data.filtered1 || t.data.list);
        });
    },
  }),
  { Menu: is, Qna_Menu: gu, setRandomUrls: YC, changeInput: Bh } = _1.actions,
  XC = _1.reducer,
  ZC = () => {
    const {
        data: e,
        randomUrls: t,
        searchTerm: n,
        filteredBySearch: r,
      } = X((f) => f.data),
      [i, o] = b.useState(e.list.length),
      s = Se();
    b.useEffect(() => {
      s(Kr());
    }, [s]),
      b.useEffect(() => {
        fa.init({ duration: 800, easing: "ease-in-out", once: !0 });
      }, []);
    const l = e.filtered1 || e.list,
      a = () => {
        const f = Math.min(i + 10, e.list.length);
        o(f);
        const h = e.list
          .slice()
          .sort(() => Math.random() - 0.5)
          .slice(0, f);
        s(YC(h)), (n || e.filtered1) && s(is("전체"));
      },
      c = (f) => {
        f.preventDefault(), s(O1(n));
      },
      d = (f) => {
        s(is(f)), s(Bh("")), o(10);
      };
    return u.jsxs(u.Fragment, {
      children: [
        u.jsxs(D4, {
          children: [
            u.jsx("h2", { children: "고객지원센터" }),
            u.jsxs("ul", {
              children: [
                u.jsx("li", { onClick: () => d("전체"), children: "전체" }),
                u.jsx("li", {
                  onClick: () => s(is("공지사항")),
                  children: "공지사항",
                }),
                u.jsx("li", {
                  children: u.jsx(Re, { to: "/list/QNA", children: "QNA" }),
                }),
                u.jsx("li", {
                  onClick: () => s(is("이벤트")),
                  children: "진행 중인 이벤트",
                }),
              ],
            }),
            u.jsxs("form", {
              onSubmit: c,
              children: [
                u.jsx("input", {
                  type: "text",
                  value: n,
                  onChange: (f) => s(Bh(f.target.value)),
                  placeholder: "검색어를 입력해주세요",
                }),
                u.jsx("button", { type: "onSubmit", children: u.jsx(Qb, {}) }),
              ],
            }),
            u.jsxs("table", {
              children: [
                u.jsx("caption", { children: "LIST" }),
                u.jsxs("colgroup", {
                  children: [
                    u.jsx("col", { className: "NO" }),
                    u.jsx("col", { className: "table_title" }),
                    u.jsx("col", { className: "table_editor" }),
                    u.jsx("col", { className: "table_days" }),
                  ],
                }),
                u.jsx("thead", {
                  children: u.jsxs("tr", {
                    children: [
                      u.jsx("th", { children: "종류" }),
                      u.jsx("th", { children: "제목" }),
                      u.jsx("th", { children: "작성자" }),
                      u.jsx("th", { children: "작성일" }),
                    ],
                  }),
                }),
                u.jsxs("tbody", {
                  children: [
                    r.length > 0
                      ? r.map((f, p) =>
                          u.jsxs(
                            "tr",
                            {
                              "data-aos": "fade-up",
                              "data-aos-anchor-placement": "top-bottom",
                              children: [
                                u.jsx("td", { children: f.category }),
                                u.jsx("td", {
                                  children: u.jsx(Re, {
                                    to: `/list/${f.id}`,
                                    children: f.title,
                                  }),
                                }),
                                u.jsx("td", { children: f.editor }),
                                u.jsx("td", { children: f.days }),
                              ],
                            },
                            p
                          )
                        )
                      : l.map((f) =>
                          u.jsxs(
                            "tr",
                            {
                              "data-aos": "fade-up",
                              "data-aos-anchor-placement": "top-bottom",
                              children: [
                                u.jsx("td", { children: f.category }),
                                u.jsx("td", {
                                  children: u.jsx(Re, {
                                    to: `/list/${f.id}`,
                                    children: f.title,
                                  }),
                                }),
                                u.jsx("td", { children: f.editor }),
                                u.jsx("td", { children: f.days }),
                              ],
                            },
                            f.id
                          )
                        ),
                    t.map((f, p) =>
                      u.jsxs(
                        "tr",
                        {
                          "data-aos": "fade-up",
                          "data-aos-anchor-placement": "top-bottom",
                          children: [
                            u.jsx("td", { children: f.category }),
                            u.jsx("td", {
                              children: u.jsx(Re, {
                                to: `/list/${f.id}`,
                                children: f.title,
                              }),
                            }),
                            u.jsx("td", { children: f.editor }),
                            u.jsx("td", { children: f.days }),
                          ],
                        },
                        p
                      )
                    ),
                  ],
                }),
              ],
            }),
            !n &&
              !e.filtered1 &&
              t.length !== 90 &&
              u.jsx("p", {
                children: u.jsxs("button", {
                  onClick: a,
                  children: ["더 보기", u.jsx(av, {})],
                }),
              }),
          ],
        }),
        u.jsxs(Xe, { children: [u.jsx(at, {}), u.jsx(st, {}), u.jsx(lt, {})] }),
      ],
    });
  },
  e5 = () => {
    const { data: e } = X((a) => a.data),
      [t, n] = b.useState(null),
      r = Se(),
      i = Dt();
    b.useEffect(() => {
      r(Kr()), console.log(e.qna);
    }, [r]);
    const o = e.filtered2 || e.qna,
      s = () => {
        i("/list");
      },
      l = (a) => {
        n(t === a ? null : a);
      };
    return u.jsxs(u.Fragment, {
      children: [
        " ",
        u.jsxs($4, {
          children: [
            u.jsxs("ul", {
              children: [
                u.jsx("li", {
                  className: "QnaMenu",
                  onClick: () => r(gu("전체")),
                  children: "전체 보기",
                }),
                u.jsx("li", {
                  className: "QnaMenu",
                  onClick: () => r(gu("개인정보")),
                  children: "개인정보",
                }),
                u.jsx("li", {
                  className: "QnaMenu",
                  onClick: () => r(gu("공지사항")),
                  children: "공지사항",
                }),
              ],
            }),
            u.jsxs("table", {
              children: [
                u.jsx("caption", { children: "QNA" }),
                u.jsxs("colgroup", {
                  children: [
                    u.jsx("col", { className: "table_No" }),
                    u.jsx("col", { className: "tableQna_title" }),
                  ],
                }),
                u.jsx("thead", {
                  children: u.jsxs("tr", {
                    children: [
                      u.jsx("th", { children: "NO." }),
                      u.jsx("th", { children: "제목" }),
                    ],
                  }),
                }),
                u.jsx("tbody", {
                  children: o.map((a) =>
                    u.jsxs(
                      "tr",
                      {
                        children: [
                          u.jsx("td", { children: a.category }),
                          u.jsxs("td", {
                            onClick: () => l(a.id),
                            children: [
                              u.jsx("strong", {
                                className: t === a.id ? "on" : "",
                                children: a.titel,
                              }),
                              t === null
                                ? u.jsxs("p", {
                                    className: t === a.id ? "on" : "",
                                    children: [u.jsx(av, {}), " "],
                                  })
                                : u.jsxs("p", {
                                    className: t === a.id ? "on" : "",
                                    children: [u.jsx(Xb, {}), " "],
                                  }),
                              u.jsxs("ul", {
                                className: t === a.id ? "on" : "",
                                children: [
                                  u.jsx("li", { children: a.content }),
                                  a.img &&
                                    u.jsx("li", {
                                      children: u.jsx("img", {
                                        src: a.img,
                                        alt: "",
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      a.id
                    )
                  ),
                }),
              ],
            }),
            u.jsxs("p", {
              className: "prev",
              children: [
                u.jsx("button", { onClick: s, children: "목록으로 가기" }),
                " ",
              ],
            }),
          ],
        }),
        u.jsxs(Xe, { children: [u.jsx(at, {}), u.jsx(st, {}), u.jsx(lt, {})] }),
      ],
    });
  },
  t5 = () => {
    const e = Se(),
      { data: t, loading: n } = X((h) => h.data),
      { listID: r } = _l(),
      i = Dt();
    if (
      (b.useEffect(() => {
        fa.init({ duration: 800, easing: "ease-in-out", once: !0 });
      }, []),
      b.useEffect(() => {
        e(Kr());
      }, [e]),
      n)
    )
      return u.jsx("div", { children: "Loading..." });
    const o = t.list.find((h) => h.id === Number(r)),
      { id: s, title: l, days: a, editor: c, content: d, category: f } = o,
      p = () => {
        i("/list");
      };
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx(W4, {
          children: u.jsxs("div", {
            "data-aos": "fade-down",
            "data-aos-duration": "500",
            children: [
              u.jsx("h2", { children: l }),
              u.jsxs("div", {
                className: "item_textbox",
                children: [
                  u.jsx("p", { children: f }),
                  u.jsxs("p", { children: ["작성일 : ", a] }),
                  u.jsxs("p", { children: ["작성자 : ", c] }),
                ],
              }),
              u.jsxs("div", {
                className: "info",
                children: [
                  o.content1 &&
                    u.jsxs("div", {
                      className: "itm_box",
                      children: [
                        u.jsxs("strong", { children: ["(", o.content0, ")"] }),
                        u.jsx("p", { children: o.content1 }),
                        u.jsx("img", {
                          src: o.constent1_img,
                          alt: "",
                          "data-aos": "fade-down",
                          "data-aos-duration": "800",
                        }),
                        u.jsx("p", { children: o.content2 }),
                        u.jsx("img", {
                          src: o.constent2_img,
                          alt: "",
                          "data-aos": "fade-down",
                          "data-aos-duration": "1000",
                        }),
                        u.jsx("p", { children: o.content3 }),
                        u.jsx("img", {
                          src: o.constent3_img,
                          alt: "",
                          "data-aos": "fade-down",
                          "data-aos-duration": "1200",
                        }),
                      ],
                    }),
                  o.slide1 &&
                    u.jsx("div", {
                      children: o.slide1.map((h, v) =>
                        u.jsx(
                          "img",
                          { src: h, alt: "", "data-aos": "fade-up" },
                          v
                        )
                      ),
                    }),
                  u.jsx("p", { children: d }),
                ],
              }),
              u.jsx("p", {
                className: "button_onprev",
                children: u.jsx("button", { onClick: p, children: "목록으로" }),
              }),
            ],
          }),
        }),
        u.jsxs(Xe, { children: [u.jsx(at, {}), u.jsx(st, {}), u.jsx(lt, {})] }),
      ],
    });
  };
function n5(e) {
  return le({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M22 6h-5v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6zm-7 0H3v2h12V6zm0 4H3v2h12v-2zm-4 4H3v2h8v-2z",
        },
      },
    ],
  })(e);
}
const r5 = () => {
    const { user: e } = X((l) => l.user),
      t = Se(),
      n = () => {
        t(Rv());
      },
      r = C1(e.pick, e),
      i = (l) => {
        const a = e.pick.find((d) => d.rank === l);
        r(l) ? alert("이미 추가된 노래입니다.") : t(ca(a));
      },
      o = (l) => {
        t(zv(l));
      },
      s = (l) => e.playList.some((a) => a.name === l);
    return u.jsx(u.Fragment, {
      children: u.jsxs(Xe, {
        children: [
          u.jsxs(H4, {
            children: [
              u.jsx("h2", { children: "플레이리스트" }),
              u.jsxs("div", {
                className: "playList",
                onClick: n,
                children: [
                  u.jsx("p", {
                    className: "storageBox",
                    children: u.jsx(n5, {}),
                  }),
                  u.jsxs("strong", {
                    children: ['"', e.login_UserID, '"님의 플레이리스트'],
                  }),
                  u.jsx("p", { children: u.jsx(e3, {}) }),
                ],
              }),
              u.jsxs("div", {
                children: [
                  u.jsx("h2", { children: "좋아요 누른 내 노래" }),
                  u.jsxs("table", {
                    className: "table1",
                    children: [
                      u.jsx("caption", { children: "좋아요 노래 리스트" }),
                      u.jsxs("colgroup", {
                        children: [
                          u.jsx("col", { className: "LOCAL_NO" }),
                          u.jsx("col", { className: "LOCAL_title" }),
                          u.jsx("col", { className: "LOCAL_img" }),
                          u.jsx("col", { className: "LOCAL_singer" }),
                          u.jsx("col", { className: "LOCAL_button" }),
                        ],
                      }),
                      u.jsx("thead", {
                        children: u.jsxs("tr", {
                          children: [
                            u.jsx("th", { children: "순위" }),
                            u.jsx("th", { children: "앨범자켓" }),
                            u.jsx("th", { children: "노래명" }),
                            u.jsx("th", { children: "가수명" }),
                            u.jsx("th", { children: "플레이리스트" }),
                          ],
                        }),
                      }),
                      u.jsx("tbody", {
                        children:
                          e &&
                          e.pick &&
                          e.pick.length > 0 &&
                          e.pick.map((l, a) =>
                            u.jsxs(
                              "tr",
                              {
                                children: [
                                  u.jsx("td", {
                                    children: u.jsx("p", { children: a }),
                                  }),
                                  u.jsx("td", {
                                    children: u.jsx("img", {
                                      src: l.image,
                                      alt: l.name,
                                    }),
                                  }),
                                  u.jsx("td", {
                                    children: u.jsx("p", { children: l.name }),
                                  }),
                                  u.jsx("td", {
                                    children: u.jsx("p", {
                                      children: l.artist,
                                    }),
                                  }),
                                  u.jsx("td", {
                                    children: s(l.name)
                                      ? null
                                      : u.jsx("button", {
                                          onClick: () => i(l.rank),
                                          children: "플레이리스트에 추가",
                                        }),
                                  }),
                                ],
                              },
                              a
                            )
                          ),
                      }),
                    ],
                  }),
                  u.jsx("h2", { children: "플레이리스트" }),
                  u.jsxs("table", {
                    className: "table2",
                    children: [
                      u.jsx("caption", { children: "플레이 리스트 목록" }),
                      u.jsxs("colgroup", {
                        children: [
                          u.jsx("col", { className: "LOCAL_NO" }),
                          u.jsx("col", { className: "LOCAL_title" }),
                          u.jsx("col", { className: "LOCAL_img" }),
                          u.jsx("col", { className: "LOCAL_singer" }),
                          u.jsx("col", { className: "LOCAL_button" }),
                        ],
                      }),
                      u.jsx("thead", {
                        children: u.jsxs("tr", {
                          children: [
                            u.jsx("th", { children: "순위" }),
                            u.jsx("th", { children: "앨범자켓" }),
                            u.jsx("th", { children: "노래명" }),
                            u.jsx("th", { children: "가수명" }),
                            u.jsx("th", { children: "플레이리스트" }),
                          ],
                        }),
                      }),
                      e &&
                        e.playList &&
                        e.playList.length > 0 &&
                        u.jsx("tbody", {
                          children: e.playList.map((l, a) =>
                            u.jsxs(
                              "tr",
                              {
                                children: [
                                  u.jsx("td", {
                                    children: u.jsx("p", { children: a }),
                                  }),
                                  u.jsx("td", {
                                    children:
                                      l &&
                                      l.image &&
                                      u.jsx("img", {
                                        src: l.image,
                                        alt: l.name,
                                      }),
                                  }),
                                  u.jsx("td", {
                                    children: u.jsx("p", {
                                      children: l && l.name,
                                    }),
                                  }),
                                  u.jsx("td", {
                                    children: u.jsx("p", {
                                      children: l && l.artist,
                                    }),
                                  }),
                                  u.jsx("td", {
                                    children: u.jsx("button", {
                                      onClick: () => o(l.name),
                                      children: "삭제",
                                    }),
                                  }),
                                ],
                              },
                              a
                            )
                          ),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          u.jsx(at, {}),
          u.jsx(st, {}),
          u.jsx(lt, {}),
        ],
      }),
    });
  },
  i5 = () => {
    const { login_UserID: e, login_UserPassword: t } = X((s) => s.user),
      { newSignUpData: n } = X((s) => s.signup),
      r = Dt(),
      i = Se(),
      o = (s) => {
        s.preventDefault();
        const l = n.find((a) => a.UserID === e && a.UserPassword === t);
        l
          ? (console.log("로그인 성공"), i(Rj(l)), r("/"))
          : (console.log("로그인 실패"), alert("정보를 다시 확인해 주세요"));
      };
    return u.jsxs(u.Fragment, {
      children: [
        u.jsxs(F4, {
          children: [
            u.jsx("h2", { children: "LOGIN" }),
            u.jsxs("form", {
              onSubmit: o,
              children: [
                u.jsx("input", {
                  type: "text",
                  value: e,
                  onChange: (s) => i(Mj(s.target.value)),
                  placeholder: "아이디(이메일)",
                }),
                u.jsx("input", {
                  type: "text",
                  value: t,
                  onChange: (s) => i(Aj(s.target.value)),
                  placeholder: "비밀번호",
                }),
                u.jsxs("div", {
                  className: "login_submit",
                  children: [
                    u.jsx("input", { type: "checkbox" }),
                    u.jsx("label", { children: "아이디 저장" }),
                    u.jsx("button", {
                      type: "submit",
                      className: "Login_Btn",
                      children: "로그인",
                    }),
                  ],
                }),
                u.jsx("p", {
                  className: "LoginJoin_btn",
                  children: u.jsx(Re, {
                    to: "/Login/join",
                    children: "회원가입",
                  }),
                }),
                u.jsxs("p", {
                  className: "Login_type",
                  children: [
                    u.jsx("button", { children: "아이디로 로그인하기" }),
                    u.jsx("button", { children: "이메일로 로그인하기" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        u.jsxs(Xe, { children: [u.jsx(at, {}), u.jsx(st, {}), u.jsx(lt, {})] }),
      ],
    });
  },
  o5 = () => {
    const {
        chked1: e,
        chked2: t,
        chked3: n,
        chked4: r,
        chked5: i,
        totalChked: o,
      } = X((c) => c.signup),
      s = Se(),
      l = Dt(),
      a = (c) => {
        c.preventDefault(),
          s(P4(c.target.value)),
          e && t && n && (console.log("필수 약관 동의"), l("/Login/joinup"));
      };
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx(U4, {
          children: u.jsxs("div", {
            children: [
              u.jsx("h2", {
                children: u.jsx(Re, {
                  to: "/",
                  children: u.jsx("img", {
                    src: "logo_white.jpg",
                    alt: "",
                  }),
                }),
              }),
              u.jsxs("form", {
                onSubmit: a,
                children: [
                  u.jsx("h3", { children: "이용약관" }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("input", {
                        type: "checkbox",
                        checked: e,
                        onChange: () => s(b4()),
                      }),
                      u.jsxs("label", {
                        children: [
                          u.jsx("p", { children: "(필수)" }),
                          u.jsx("span", { children: "이용약관" }),
                        ],
                      }),
                      u.jsx("strong", {
                        children: u.jsx(Re, {
                          to: "/Login/FooterPolicy",
                          children: "전문보기",
                        }),
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("input", {
                        type: "checkbox",
                        checked: t,
                        onChange: () => s(j4()),
                      }),
                      u.jsxs("label", {
                        children: [
                          u.jsx("p", { children: "(필수)" }),
                          u.jsx("span", {
                            children: "개인 정보 수집 및 이용안내",
                          }),
                        ],
                      }),
                      u.jsx("strong", {
                        children: u.jsx(Re, {
                          to: "/Login/FooterPolicy",
                          children: "전문보기",
                        }),
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("input", {
                        type: "checkbox",
                        checked: n,
                        onChange: () => s(E4()),
                      }),
                      u.jsxs("label", {
                        children: [
                          u.jsx("p", { children: "(필수)" }),
                          u.jsx("span", { children: " 제 3자 제공안내" }),
                        ],
                      }),
                      u.jsx("strong", {
                        children: u.jsx(Re, {
                          to: "/Login/FooterPolicy",
                          children: "전문보기",
                        }),
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("input", {
                        type: "checkbox",
                        checked: r,
                        onChange: () => s(k4()),
                      }),
                      u.jsxs("label", {
                        children: [
                          u.jsx("p", { children: "(선택)" }),
                          u.jsx("span", {
                            children: "이벤트/기타 문자 수신 동의",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("input", {
                        type: "checkbox",
                        checked: i,
                        onChange: () => s(C4()),
                      }),
                      u.jsxs("label", {
                        children: [
                          u.jsx("p", { children: "(선택)" }),
                          u.jsx("span", {
                            children:
                              "이벤트/혜택 알림 제공을 위한 개인정보 수집 및 이용 안내",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("input", {
                        type: "checkbox",
                        checked: o,
                        onChange: () => s(R4()),
                      }),
                      u.jsx("label", {
                        children: u.jsx("span", { children: "전체 동의" }),
                      }),
                      u.jsx("em", {
                        children:
                          "주요 공지사항 및 결제 관련 정보일 경우, 정보 수신 동의 여부에 관계없이 발송됩니다.",
                      }),
                    ],
                  }),
                  u.jsx("p", {
                    children: u.jsx("button", {
                      type: "submit",
                      onClick: a,
                      children: "회원 가입하기",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        u.jsxs(Xe, { children: [u.jsx(at, {}), u.jsx(st, {}), u.jsx(lt, {})] }),
      ],
    });
  },
  s5 = () => {
    const {
        UserID: e,
        UserPassword: t,
        eMail: n,
        phone: r,
        eMail_select: i,
        repassword: o,
      } = X((c) => c.signup),
      s = Dt(),
      l = Se(),
      a = (c) => {
        c.preventDefault(),
          l(N4(c.target.value)),
          e && t && n && r && i && t === o && s("/Login/completed");
      };
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx(B4, {
          children: u.jsxs("div", {
            children: [
              u.jsx("h2", {
                children: u.jsx(Re, {
                  to: "/",
                  children: u.jsx("img", { src: "logo_white.jpg", alt: "" }),
                }),
              }),
              u.jsx("div", {
                children: u.jsxs("form", {
                  onSubmit: a,
                  children: [
                    u.jsx("h3", { children: "회원가입" }),
                    u.jsxs("div", {
                      children: [
                        u.jsx("input", {
                          type: "text",
                          value: e,
                          placeholder: "아이디혹은 이메일 주소를 입력해주세요",
                          onChange: (c) => l(T4(c.target.value)),
                        }),
                        u.jsx("p", {
                          children: "4~12자/영문 소문자(숫자 조합 가능)",
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      children: [
                        u.jsx("input", {
                          type: "text",
                          alue: t,
                          placeholder: "비밀번호",
                          onChange: (c) => l(O4(c.target.value)),
                        }),
                        u.jsx("input", {
                          type: "text",
                          value: o,
                          placeholder: "비밀번호 확인",
                          onChange: (c) => l(A4(c.target.value)),
                        }),
                        u.jsx("p", {
                          children:
                            "8~20자/영문 대문자, 소문자, 숫자, 특수문자 중 2가지 이상 조합",
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      children: [
                        u.jsx("input", {
                          type: "text",
                          value: n,
                          className: "emil",
                          placeholder: "아이디(이메일)",
                          onChange: (c) => l(_4(c.target.value)),
                        }),
                        "@",
                        u.jsxs("select", {
                          value: i,
                          placeholder: "선택",
                          onChange: (c) => l(M4(c.target.value)),
                          children: [
                            u.jsx("option", {
                              value: "choice",
                              children: "선택",
                            }),
                            u.jsx("option", {
                              value: "naver.com",
                              children: "naver.com",
                            }),
                            u.jsx("option", {
                              value: "daum.net",
                              children: "daum.net",
                            }),
                            u.jsx("option", {
                              value: "kakao.com",
                              children: "kakao.com",
                            }),
                            u.jsx("option", {
                              value: "gmail.com",
                              children: "gmail.com",
                            }),
                          ],
                        }),
                        u.jsx("p", {
                          children:
                            "더 안전하게 계정을 보호하려면 가입 후 [내정보 - 회원정보 수정]에서 이메일 인증을 진행해주세요.",
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      children: [
                        u.jsx("input", {
                          type: "text",
                          value: r,
                          placeholder: "휴대폰 번호를 입력해주세요",
                          onChange: (c) => l(L4(c.target.value)),
                        }),
                        u.jsx("p", {
                          children:
                            "휴대폰 인증 후 이용가능합니다 인증은 [내정보-회원정보 수정]에서 진행해주세요",
                        }),
                      ],
                    }),
                    u.jsx("p", {
                      type: "submit",
                      onClick: a,
                      className: "Certified",
                      children: "가입하기",
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        u.jsxs(Xe, { children: [u.jsx(at, {}), u.jsx(st, {}), u.jsx(lt, {})] }),
      ],
    });
  },
  l5 = () => {
    const e = Dt(),
      t = () => {
        e("/Login");
      };
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx(V4, {
          children: u.jsxs("div", {
            children: [
              u.jsx("h2", { children: u.jsx(Wb, {}) }),
              u.jsx("h3", { children: "회원가입이 완료되었습니다." }),
              u.jsx("strong", {
                children:
                  "최초 로그인 시 본인인증을 필요합니다. 본인인증 시 더 많은 헤턕과 서비스 시용이 가능합니다. [개인정보]칸에서 휴대폰/이메일 인증을 진행해주세요",
              }),
              u.jsx("p", {
                children: u.jsx("button", {
                  onClick: t,
                  children: "로그인하러 가기",
                }),
              }),
            ],
          }),
        }),
        u.jsxs(Xe, { children: [u.jsx(at, {}), u.jsx(st, {}), u.jsx(lt, {})] }),
      ],
    });
  },
  a5 = () =>
    u.jsx(Xe, {
      children: u.jsx(Wn, {
        children: u.jsxs(Q4, {
          children: [
            u.jsx("h2", { children: "이용약관" }),
            u.jsx("p", { children: "회원 이용약관" }),
            u.jsx("strong", { children: "제1조 (목적)" }),
            u.jsx("p", {
              children:
                "본 약관은 주식회사 (이하 “회사”) 가 제공하는 유·무선 온라인상에서 제공되는 FLO 서비스(이하 “서비스”) 이용과 관련하여 회원과 회사 간의 권리, 의무, 책임사항 및 회원의 서비스 이용조건 및 절차 등 기본적인 사항을 규정함을 그 목적으로 합니다.",
            }),
            u.jsx("strong", { children: "제2조 (약관의 효력 및 변경)" }),
            u.jsx("span", {
              children:
                "1. 본 약관은 서비스를 이용하고자 하는 모든 회원에게 그 효력이 발생합니다.",
            }),
            u.jsx("p", {
              children:
                "2. 회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 화면에 게시하거나 회원이 요구할 경우 약관의 사본을 회원에게 제공할 수 있으며, 기타의 방법으로 회사가 회원에게 공지합니다.",
            }),
            u.jsx("span", {
              children:
                "3. 회사는 필요하다고 인정되는 경우 관련 법령을 위반하지 않는 범위에서 본 약관을 변경할 수 있으며, 회사가 약관을 변경할 때에는 적용 일자와 변경사유를 밝혀 본 조 제2항과 같은 방법으로 그 적용일자 10일 전부터 공지합니다. 단, 회원에게 불리하게 약관을 변경할 때에는 그 적용일자 30일 전부터 공지하며, 제8조의 통지수단으로 회원에게 개별 통지합니다. (회원이 연락처를 기재하지 않았거나 변경하여 개별 통지가 어려울 때에는 서비스 화면에 변경 약관을 공지하는 것을 개별 통지로 갈음합니다.)",
            }),
            u.jsx("span", {
              children:
                "4. 회사가 본 조 제3항에 따라 변경 약관을 공지 또는 통지하면서, 회원에게 약관 변경 적용일까지 거부의사를 표시하지 아니하는 경우 약관의 변경에 동의한 것으로 간주한다는 내용을 명확하게 공지 또는 통지하였음에도 회원이 변경된 약관의 효력 발생일까지 약관 변경에 대한 명시적인 거부의 의사를 표시하지 아니하면 회원이 변경 약관에 동의한 것으로 간주합니다.",
            }),
            u.jsx("p", {
              children:
                "5. 회원은 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고, 회원 해지 신청을 통해 회사와의 이용계약을 해지할 수 있습니다.",
            }),
            u.jsx("span", {
              children:
                "6. 본 약관에 동의하는 것은 회사가 운영하는 서비스의 홈페이지를 정기적으로 방문하여 약관의 변경사항을 확인하는 것에 동의함을 의미합니다. 변경된 약관에 대한 정보를 알지 못하여 발생하는 회원의 피해에 대하여는 회사는 책임 지지 않습니다.",
            }),
            u.jsx("strong", { children: "제3조 (약관 외 준칙)" }),
            u.jsxs("p", {
              children: [
                "1. 본 약관에 명시되지 않은 사항은 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 전자상거래 등에서의 소비자 보호에 관한 법률 등 관계법령 및 회사가 정한 서비스의 이용 지침 등의 규정을 따릅니다.",
                u.jsx("br", {}),
                "2. 회사는 필요한 경우 서비스 내의 특정 서비스에 관하여 적용될 사항(이하 “개별약관“)을 정하여 이를 제2조 제2항의 방법에 따라 공지할 수 있습니다.",
                u.jsx("br", {}),
                "3. 회사는 필요한 경우 서비스 이용과 관련된 세부이용지침을 정하여 이를 제2조 제2항의 방법에 따라 공지할 수 있습니다.",
                u.jsx("br", {}),
                "4. 본 약관과 관련하여 회사의 정책 변경, 법령의 제·개정 또는 공공기관의 고시나 지침 등에 따라 회사가 공지사항 게시판 등을 통해 공지하는 내용도 이용계약의 일부를 구성합니다.",
                u.jsx("br", {}),
              ],
            }),
            u.jsx("strong", { children: "제4조 (용어의 정의)" }),
            u.jsxs("p", {
              children: [
                "1. 본 약관에서 사용하는 용어의 정의는 다음 각 호와 같습니다.",
                u.jsx("br", {}),
                "① 회원: 서비스를 이용하기 위해서 서비스 애플리케이션 등에 접속하여 본 약관에 동의하고 서비스 이용을 신청하여 회사로부터 서비스 이용에 대한 자격을 부여 받은 모든 고객 ",
                u.jsx("br", {}),
                "② 결제: 회원이 특정 서비스를 이용하기 위하여 각종 결제수단을 통하여 회사가 특정 서비스에 대하여 정한 일정 금액을 회사에 지불하는 것",
                u.jsx("br", {}),
                "③ 서비스 중지: 정상 이용 중 회사가 정한 일정한 요건에 따라 일정기간 동안 서비스의 제공을 중지하는 것",
                u.jsx("br", {}),
                "④ 결제취소: 회원이 서비스를 결제한 이후에 본 약관에서 정한 바에 따른 일정한 절차에 따라 결제 행위 자체를 취소하는 것",
                u.jsx("br", {}),
                "⑤ 환불: 회사가 결제수단 별 승인취소 등의 방법을 전제로 본 약관에서 정한 바에 따라 결제금액을 반환하는 것",
                u.jsx("br", {}),
                "⑥ 운영자: 서비스의 전반적인 관리와 원활한 운영을 위하여 회사가 선정한 자",
                u.jsx("br", {}),
                "⑦ FLO 크리에이터 스튜디오(이하 “스튜디오”): 크리에이터가 스튜디오에 제작자가 제작한 콘텐츠를 등록하고 회원이 서비스를 통해 이를 이용할 수 있도록 회사가 제공하는 웹기반 콘텐츠 플랫폼",
                u.jsx("br", {}),
                "⑧ 크리에이터: 스튜디오에 제작자를 생성하고 제작자가 제작한 콘텐츠를 게시하는 등 제작자를 관리, 운영하는 회원",
                u.jsx("br", {}),
                "⑨ 콘텐츠: 제작자가 제작하여 스튜디오에 등록하는 콘텐츠 등으로서 음성, 영상, 이미지 기타 자료 및 이상의 콘텐츠들에 대한 메타 정보",
                u.jsx("br", {}),
                "⑩ 제작자 : 콘텐츠의 권리를 보유하고 정산 대상이 되는 주체로 사업자가 아닌 개인과 사업자(개인, 법인) 단, 제작자 생성시 정산정보를 입력하지 않은 경우 제작자를 생성한 크리에이터를 제작자로 간주함 ",
                u.jsx("br", {}),
                "2. 본 약관에서 사용하는 용어의 정의는 본 조 제1항에서 정하는 것을 제외하고는 관계 법령과 서비스 별 안내에서 정하는 바를 따릅니다.",
              ],
            }),
            u.jsx("strong", { children: "제5조 (이용계약의 체결)" }),
            u.jsxs("span", {
              children: [
                "1. 이용계약은 회원이 되고자 하는 자(이하 “가입신청자”)가 본 약관의 내용에 대하여 동의한 후 서비스 이용에 필요한 정보를 입력하여 회원가입신청을 하고 회사가 위 신청을 승낙함으로써 체결됩니다.",
                u.jsx("br", {}),
                "2. 회사는 가입신청자의 신청에 대하여 서비스 이용을 승낙함을 원칙으로 합니다. 단, 회사는 다음 각 호에 해당하는 신청에 대해서는 그 사유가 해소될 때까지 승낙을 유보하거나, 승낙을 거부할 수 있습니다.",
              ],
            }),
            u.jsxs("p", {
              children: [
                "① 가입신청자가 가입신청자의 귀책사유로 본 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 단 회사의 회원 재가입 승낙을 얻은 경우에는 예외로 함",
                u.jsx("br", {}),
                "② 다른 사람의 전화번호 등 개인정보를 이용한 경우",
                u.jsx("br", {}),
                "③ 만 14세 미만 아동이 법정대리인 (부모 등)의 동의를 얻지 아니한 경우",
                u.jsx("br", {}),
                "④ 허위의 정보를 기재하거나 회사가 제시하는 내용을 기재하지 않은 경우",
                u.jsx("br", {}),
                "⑤ 기술 상 서비스를 제공할 수 없는 경우",
                u.jsx("br", {}),
                "⑥ 부정한 용도 또는 영리를 추구할 목적으로 서비스를 이용하고자 하는 경우",
                u.jsx("br", {}),
                "⑦ 회사로부터 회원자격정지 조치 등을 받은 회원이 그 조치 기간에 이용계약을 임의로 해지하고 재이용을 신청하는 경우",
                u.jsx("br", {}),
                "⑧ 관계법령에 위배되거나 사회의 안녕질서 혹은 미풍양속을 저해할 수 있는 목적으로 신청한 경우",
                u.jsx("br", {}),
                "⑨ 기타 회사가 정한 이용계약 요건을 만족시키지 않았거나 위법 또는 부당한 가입신청임이 확인된 경우 또는 회원의 책임이 있는 사유로 회사가 승낙할 수 없는 경우",
                u.jsx("br", {}),
                "3. 본 조 제2항에 따라 회사가 회원가입 신청의 승낙을 유보하거나 거절했을 때에는 회사는 가입신청자에게 승낙 유보의 사유, 승낙 가능시기 또는 승낙에 필요한 추가 요청 정보나 자료 등 기타 승낙 유보, 거절과 관련된 사항을 서비스 화면에 게시하거나 제8조의 통지수단으로 통지합니다.",
                u.jsx("br", {}),
                "4. 이용계약의 성립 시기는 회사가 가입완료를 신청절차 상에서 표시한 시점으로 합니다.",
                u.jsx("br", {}),
                "5. 회원의 자격 또는 나이에 따라 서비스 이용의 일부가 제한될 수 있습니다.",
                u.jsx("br", {}),
                "① 만 19세 미만의 회원은 청소년보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 청소년보호법의 규정에 의하여 청소년 유해매체물은 이용할 수 없습니다.",
                u.jsx("br", {}),
                "② 청소년 유해매체물을 이용하시기 위해서는 만 19세 이상의 회원이어야 하며, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 청소년보호법의 규정에 의하여 실명인증을 통해 본인 및 연령 인증을 받아야 합니다.",
                u.jsx("br", {}),
              ],
            }),
            u.jsx("strong", {
              children: "제6조 (미성년자 회원가입에 대한 특칙)",
            }),
            u.jsx("p", {
              children:
                "1. 만 14세 미만의 가입신청자는 개인정보의 수집 및 이용목적에 대하여 충분히 숙지하고 부모 등 법정대리인의 동의를 얻은 후에 회원가입을 신청하고 본인의 개인정보를 제공하여야 합니다.",
            }),
            u.jsxs("span", {
              children: [
                "2. 회사는 부모 등 법정대리인의 동의에 대한 확인절차를 거치지 않은 만 14세 미만 회원에 대하여는 가입을 취소 또는 불허합니다.",
                u.jsx("br", {}),
                "3. 만 14세 미만 회원의 부모 등 법정대리인은 아동에 대한 개인정보의 열람, 정정, 갱신을 요청하거나 회원가입에 대한 동의를 철회할 수 있으며, 이러한 경우에 회사는 지체 없이 필요한 조치를 취해야 합니다.",
                u.jsx("br", {}),
                "4. 회사는 만 19세 미만의 미성년이용자가 유료서비스를 이용하고자 하는 경우에 부모 등 법정 대리인의 동의를 얻거나, 계약체결 후 추인을 얻지 않으면 미성년자 본인 또는 법정대리인이 그 계약을 취소할 수 있다는 내용을 계약체결 전에 고지하는 조치를 취합니다.",
                u.jsx("br", {}),
              ],
            }),
            u.jsx("strong", { children: "제7조 (회원정보의 변경)" }),
            u.jsx("p", {
              children:
                "회원은 서비스를 이용하면서 이용 신청 시 기재한 정보가 변경되었을 경우, 지체 없이 해당 정보를 수정해야 합니다. 해당 정보를 수정하지 않음으로 인하여 발생하는 모든 책임은 회원에게 있습니다.",
            }),
            u.jsx("strong", { children: "제8조 (회원에 대한 통지)" }),
            u.jsxs("p", {
              children: [
                "1. 회사가 회원에 대한 통지를 하는 경우 본 약관에 별도 규정이 없는 한 E-mail, SMS/MMS 또는 모바일 애플리케이션의 PUSH Notification 등(이하 “통지수단”)으로 할 수 있습니다.",
                u.jsx("br", {}),
                "2. 회사는 회원 전체에 대한 통지의 경우 서비스의 공지사항 게시판에 게시함으로써 제1항의 통지에 갈음할 수 있습니다. 단, 본 약관에서 달리 정한 경우에는 그 규정에 의합니다.",
              ],
            }),
            u.jsx("strong", { children: "제9조 (회사의 의무)" }),
            u.jsxs("p", {
              children: [
                "1. 회사는 관련법령과 본 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적이고 안정적으로 서비스를 제공하기 위하여 최선을 다하여 노력합니다.",
                u.jsx("br", {}),
                "2. 회사는 회원이 안전하게 서비스를 이용할 수 있도록 개인정보보호를 위해 보안 시스템을 갖추어야 하며 개인정보처리방침을 공시하고 준수합니다.",
                u.jsx("br", {}),
                "3. 회사는 서비스 제공과 관련하여 수집한 회원의 개인정보를 사전 동의 없이 제3자에게 제공, 누설, 전송, 배포하지 않습니다. 단, 관계법령에 의하여 권한 있는 자가 적법한 절차에 따라 그 제공을 요청한 경우에는 그러하지 않습니다.",
                u.jsx("br", {}),
                "4. 회사는 서비스 이용과 관련하여 회원으로부터 제기된 의견이나 불만이 정당하다고 인정할 경우에는 이를 처리하여야 합니다. 회원이 제기한 의견이나 불만사항에 대해서는 통지수단을 통하여 회원에게 처리과정 및 결과를 전달합니다.",
                u.jsx("br", {}),
              ],
            }),
            u.jsx("strong", { children: "제10조 (회원의 의무)" }),
            u.jsxs("p", {
              children: [
                "1. 회원은 서비스 이용과 관련하여 다음 각 호의 행위를 하여서는 안됩니다.",
                u.jsx("br", {}),
                "① 회원가입신청 또는 변경 시 허위 내용의 등록",
                u.jsx("br", {}),
                "② 타인의 정보 도용 또는 타인으로 가장",
                u.jsx("br", {}),
                "③ 회사가 게시한 각종 정보의 무단 변경",
                u.jsx("br", {}),
                "④ 회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해하는 행위",
                u.jsx("br", {}),
                "⑤ 회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위",
                u.jsx("br", {}),
                "⑥ 회사의 서비스를 통해 얻은 정보를 회사의 사전 승낙 없이 복제 또는 유통시키거나 상업적으로 이용하는 행위",
                u.jsx("br", {}),
                "⑦ 회사가 정한 정보 이외의 정보 (컴퓨터 프로그래밍 등) 등의 송신 또는 게시하는 행위",
                u.jsx("br", {}),
                "⑧ 회사가 제공하는 서비스 이용방법에 의하지 아니하고 비정상적인 방법으로 서비스를 이용하거나 시스템에 접근하는 행위",
                u.jsx("br", {}),
                "⑨ 회사의 직원이나 운영자를 가장하거나 사칭하는 행위",
                u.jsx("br", {}),
                "⑩ 외설 또는 폭력적인 메시지, 음성, 화상 등 기타 미풍양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위",
                u.jsx("br", {}),
                "⑪ 서비스의 운영을 고의로 방해하거나 서비스의 안정적 운영을 방해할 수 있는 행위 및 수신자의 명시적 의사에 반하여 광고성 정보를 전송하는 행위",
                u.jsx("br", {}),
                "⑫ 본인이 아닌 제 3자에게 접속 권한을 부여하는 행위",
                u.jsx("br", {}),
                "⑬ 서비스를 부정한 용도 또는 영리를 추구할 목적으로 이용하거나 제공받은 음원을 영리를 목적으로 하는 영업장과 매장 등에서 제3자에게 송출 또는 이용하게 하는 행위",
                u.jsx("br", {}),
                "⑭ 1개월 이내 회원 가입 및 이벤트 상품 구매 후 다시 해지하는 행위를 2회 이상 반복하는 행위, 기술적 조치를 무력화 하는 등의 방법으로 동일 아이디의 이동통신단말기기나 태블릿 PC 등 접속이 허용되는 단말기기에서 동시 로그인을 허용하게 하는 행위 등 서비스를 부당하게 악용하는 행위",
                u.jsx("br", {}),
                "⑮ 기타 불법적이거나 부당한 행위",
                u.jsx("br", {}),
                "2. 회원은 관계법령, 본 약관의 규정, 이용안내 및 서비스와 관련하여 공지한 주의사항, 회사가 통지하는 사항 등을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 하여서는 안됩니다.",
                u.jsx("br", {}),
                "3. 회원은 서비스 이용을 위해 개인정보를 등록하는 경우 현재의 사실과 일치하는 완전한 정보 (이하 “등록정보”)를 제공하여야 합니다. 회원은 등록정보에 변경사항이 발생할 경우 즉시 갱신하여야 합니다.",
                u.jsx("br", {}),
              ],
            }),
            u.jsx("strong", {
              children:
                "제11조 (아이디(ID)와 비밀번호(PASSWORD)관리에 대한 의무와 책임)",
            }),
            u.jsxs("p", {
              children: [
                "1. 회사는 서비스 내에서 일부 서비스 신청 시 이용요금을 부과할 수 있으므로, 회원은 회원 아이디(ID)와 비밀번호(PASSWORD)관리를 철저히 하여야 합니다.",
                u.jsx("br", {}),
                "2. 회원의 아이디(ID)와 비밀번호(PASSWORD)의 관리 소홀, 부정 사용에 의하여 발생하는 모든 결과에 대한 책임은 회원에게 있으며, 회사의 시스템 고장 등 회사의 책임 있는 사유로 발생하는 문제에 대해서는 회사가 책임을 집니다.",
                u.jsx("br", {}),
                "3. 회원은 본인 아이디(ID) 및 비밀번호(PASSWORD)를 제3자에게 이용하게 해서는 안되며, 회원 본인의 아이디(ID) 및 비밀번호(PASSWORD)를 도난 당하거나 제3자가 사용하고 있음을 인지하는 경우에는 즉시 회사에 통보하고 회사의 안내가 있는 경우 그에 따라야 합니다.",
                u.jsx("br", {}),
                "4. 회원의 아이디(ID)는 회사의 사전 동의 없이 변경할 수 없습니다.",
                u.jsx("br", {}),
              ],
            }),
            u.jsx("strong", { children: "제12조 (개인정보의 보호 및 이용)" }),
            u.jsxs("p", {
              children: [
                "1. 회사는 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련 법령을 준수하고, 회원의 개인정보를 보호하기 위하여 노력합니다.",
                u.jsx("br", {}),
                "2. 회원의 개인정보에 대한 수집, 이용, 제공, 위탁 등(이하 ‘처리’)의 구체적인 내용은 서비스에 공지된 회사의 개인정보처리방침에 기재되어 있으며, 회사는 회원의 회원 가입 신청 시 동 개인정보에 대한 회원의 동의를 얻으며, 이에 따라 회원의 개인정보를 처리합니다.",
                u.jsx("br", {}),
                "3. 회사는 필요에 따라 개인정보처리방침의 내용을 변경할 수 있으며, 이에 대해서는 제8조 소정의 절차를 준용합니다.",
                u.jsx("br", {}),
                "4. 회원의 귀책사유로 인해 노출된 정보에 대해서 회사는 일체의 책임을 지지 않습니다.",
                u.jsx("br", {}),
                "5. 회사는 회원이 미풍양속에 저해되거나 국가안보에 위배되는 파일 등 위법한 자료를 등록·배포할 경우 관련기관의 요청에 따라 회원의 개인정보를 열람하거나 해당 자료를 관련기관에 제출할 수 있습니다.",
                u.jsx("br", {}),
              ],
            }),
            u.jsx("strong", { children: "제13조 (서비스의 이용)" }),
            u.jsxs("p", {
              children: [
                "1. 회사는 회원의 이용신청을 승낙한 때부터 서비스를 개시합니다. 단, 일부 서비스의 경우에는 지정된 일자부터 서비스를 개시하며, 이용권은 회사가 지정하는 결제 수단으로 결제가 완료된 후 이용 가능합니다.",
                u.jsx("br", {}),
                "2. 회사가 회원에게 제공하는 서비스에 따른 이용권은 제14조와 같으며, 시스템 체계의 변경(또는 기술적 사양의 변경) 등 필요한 경우 이를 추가하거나 제한할 수 있으며 그 내용은 서비스 공지사항 등에 기재하는 것으로 갈음합니다. 각 서비스에 대한 제공내용, 가격, 결제 등 상세사항은 서비스 내 이용권 안내 페이지 및 결제화면 등에 게시하여 회원에게 알립니다",
                u.jsx("br", {}),
                "3. 회원이 이동전화단말기 제조사, 이동통신사의 이동통신요금제와 제휴된 서비스에 가입한 경우, 회원이 해당 이동통신요금제의 이용 정지/중단, 타 요금제로의 변경, 제휴사의 멤버십 종류 또는 단말기의 변경 등의 사유로 가입 당시 약정한 조건에 부합하지 않게 되는 경우에는 회원은 해당 제휴 서비스 혜택을 받을 수 없습니다. 또한, 회사와 이동전화단말기 제조사 또는 이동통신사와의 제휴서비스 계약이 종료되거나 변경되는 경우에는 제휴 서비스 혜택을 받을 수 없거나 혜택의 내용, 종류 등이 변경될 수 있으며, 이 경우 회사는 회원에게 사전에 서비스 내 공지사항에 공지하기로 합니다.",
                u.jsx("br", {}),
                "4. 서비스의 이용은 연중무휴 1일 24시간을 원칙으로 합니다. 단, 회사의 업무상 또는 기술상의 이유로 서비스가 일시 중지될 수 있고, 또는 서비스 운영 상의 목적으로 회사가 정한 기간에는 서비스가 일시 중지될 수 있습니다. 이러한 경우 회사는 사전 또는 사후에 이를 서비스에 공지하거나 회원에게 통지수단으로 개별 통지합니다.",
                u.jsx("br", {}),
                "5. 회사는 서비스를 일정범위로 분할하여 각 범위 별로 이용 가능한 시간을 별도로 정할 수 있으며 이 경우 그 내용을 공지합니다.",
                u.jsx("br", {}),
                "6. 회사는 청소년보호법 등 관계법령에 따른 등급 및 연령준수를 위하여 이용제한이나 등급별 제한 등 필요한 조치를 회원에게 할 수 있습니다.",
                u.jsx("br", {}),
                "7. 회사는 서비스 내의 개별 서비스에 대한 개별 약관을 둘 수 있으며, 개별 서비스에서 별도로 적용되는 개별 약관에 대한 동의는 회원이 개별 서비스를 최초로 이용할 경우 별도의 동의 절차를 거치게 됩니다.",
                u.jsx("br", {}),
                "8. 회원은 회사와의 서비스 이용계약과 관련하여 취득 또는 부담하는 권리나 의무의 전부 또는 일부를 회사의 사전 서면 동의 없이 양도, 위임, 증여, 위탁하거나 담보 제공 등의 목적으로 처분할 수 없습니다.",
                u.jsx("br", {}),
                "9. 회사는 저작권 문제 또는 기타 사업권역 문제로 인하여 국가별로 서비스 지역을 제한할 수 있습니다. 또한 제한의 추가 또는 변경 시 그 내용을 공지합니다.",
                u.jsx("br", {}),
                "10. 회사는 타인 계정 도용이나 음악산업진흥에 관한 법률에 따른 청취 어뷰징 등 회원의 비정상적인 행위가 의심되는 경우 서비스 이용을 제한할 수 있습니다.",
                u.jsx("br", {}),
              ],
            }),
            u.jsx("strong", { children: "제14조 (이용권)" }),
            u.jsxs("p", {
              children: [
                "1. 서비스에서 제공하는 이용권은 다음과 같습니다. 상세 사항은 이용권 안내 페이지 등을 통해 게시합니다. 단, 이용권 종류 명칭과 회원에게 판매 시 고지되는 이용권 명칭은 달라질 수 있습니다. ① 이용권 종류",
                u.jsx("br", {}),
                "- 횟수 차감형 음악 듣기 이용권: 회원이 선택한 음악을 월간 정해진 횟수만큼 실시간 음악 듣기(스트리밍) 방식으로 이용할 수 있는 이용권",
                u.jsx("br", {}),
                "- 무제한 음악 듣기 이용권: 회원이 선택한 음악을 월간 횟수의 제한 없이 실시간 음악 듣기(스트리밍) 방식으로 이용할 수 있는 이용권",
                u.jsx("br", {}),
                "- 복합이용권(무제한 음악듣기 및 모바일 저장): 회원이 선택한 음악을 월간 횟수의 제한 없이 실시간 음악 듣기(스트리밍) 및 오프라인 재생(모바일 저장)을 통해 이용할 수 있는 이용권",
                u.jsx("br", {}),
                "- 기타 회사가 자체 개발하거나, 다른 회사와의 계약 등을 통해 제공하는 서비스",
                u.jsx("br", {}),
                "② 이용권의 이용기간 : 월단위 이용권은 각 상품별 이용권 유의사항에서 정의하는 사용기간을 기준으로 합니다. 회원이 월단위 이용권 구매 당시 자동 결제에 동의한 경우 월단위로 이용기간이 갱신 됩니다.",
                u.jsx("br", {}),
                "③ 이용권 이용 중에 다른 이용권과 중복사용이 불가능합니다.",
                u.jsx("br", {}),
                "④ 일부 곡은 음원 제공사의 요청으로 음악 듣기 이용이 제한될 수 있습니다.",
                u.jsx("br", {}),
              ],
            }),
            u.jsx("strong", { children: "제15조 (결제수단 등)" }),
            u.jsxs("p", {
              children: [
                "1. 회원이 결제를 위하여 이용할 수 있는 결제수단은 결제수단을 제공하는 회사(이하 “결제회사”)에 따라 다음 각 호와 같습니다. 단, 회사 또는 결제회사의 사정에 따라 특정 결제수단이 추가되거나 특정 결제수단의 제공이 중단 또는 종료될 수 있습니다.",
                u.jsx("br", {}),
                "① 제휴 된 선불카드, 직불카드, 신용카드 등의 각종 카드",
                u.jsx("br", {}),
                "② 제휴 된 통신사 청구서 통합 결제 및 휴대폰 소액결제 방식",
                u.jsx("br", {}),
                "③ 기타 회사가 결제회사와 제휴계약 등을 체결하여 회원에게 제공하는 전자적 지급 방법에 의한 대금지급 등",
                u.jsx("br", {}),
                "2. 회원이 자동결제 이용권을 구매하는 경우, 이용권 구매 시 사용한 결제수단으로 결제시점 이후 일정시기 또는 이용 횟수 소진 시 자동으로 결제가 진행됩니다. 단, 회사는 자동 결제가 되는 이용권의 금액이 변경되는 등 변경사항이 있는 경우 회원에게 미리 알리고 동의를 받은 이후 자동결제가 진행되게 합니다.",
                u.jsx("br", {}),
                "3. 회원의 결제 한도는 각 결제회사의 정책 또는 기준에 따릅니다.",
                u.jsx("br", {}),
                "4. 회원은 각 결제회사의 시스템에 의하여 이용요금을 납부를 하며, 이용요금을 정상적으로 납부하지 않은 경우 회사는 회원의 서비스 이용을 제한할 수 있습니다.",
                u.jsx("br", {}),
              ],
            }),
            u.jsx("strong", {
              children: "제16조 (청약철회, 계약해제 및 해지 등)",
            }),
            u.jsxs("p", {
              children: [
                "1. 회원은 이용권에 대하여 청약철회가능기간(서비스 사용내역 없이 이용권(유료 이용권 쿠폰 포함) 결제일 또는 이용권(유료 이용권 쿠폰 포함)의 사용 가능일 중 늦은 날로부터 7일 이내, 이하 “청약철회가능기간”)에 회사에 청약철회를 요청 할 수 있습니다. 단, 이용권의 내용이 표시•광고 내용과 다르거나 계약 내용과 다르게 이행된 경우에는 해당 이용권을 공급받은 날로부터 3개월 혹은 그 사실을 안 날 또는 알 수 있었던 날로부터 30일 이내에 청약철회 등을 할 수 있습니다.",
                u.jsx("br", {}),
                "2. 회원이 이용권에 대하여 청약철회가능기간을 경과한 경우, 청약철회가능기간 중 스트리밍, 오프라인 재생 서비스를 사용한 경우, 전자상거래 등에서의 소비자 보호에 관한 법률, 콘텐츠산업진흥법, 콘텐츠이용자보호지침 등 기타 관계 법령에서 정한 청약 철회 제한 사유에 해당되고 회사가 이를 표시하는 등 적법한 조치를 취한 경우에는 청약 철회가 제한됩니다.",
                u.jsx("br", {}),
                "3. 계약 해지 또는 해지 신청은 1:1문의, 유선 전화문의를 통해 할 수 있으며, 회사에 그 의사표시가 도달한 때에 효력이 발생합니다. 회사는 회원의 의사표시를 수령한 후 지체 없이 이러한 사실을 회원에게 회신합니다.",
                u.jsx("br", {}),
                "4. Apple App Store에서 판매하는 이용권에 대한 취소 및 환불 처리에 대하여는 Apple 규정에 의하게 되며 회사는 구매과정에서 이를 회원에게 고지해 드립니다.",
                u.jsx("br", {}),
                "5. 회사는 회원이 제10조 제1항의 회원의 의무를 준수하지 아니하는 경우, 회원에 대하여 경고, 일시 이용정지, 영구 이용정지(향후 가입신청 승인 거절), 이용 계약 등 회원의 서비스 이용을 제한할 수 있습니다. 회원은 회사의 이용 제한에 대하여 회사가 정한 절차에 따라 이의신청을 할 수 있습니다. 이 때 회원의 이의신청이 정당하다고 회사가 인정하는 경우, 회사는 즉시 회원이 서비스 이용을 재개할 수 있도록 조치를 취합니다.",
                u.jsx("br", {}),
              ],
            }),
            u.jsx("strong", {
              children: "제17조 (청약철회와 계약해제 및 해지의 효과)",
            }),
            u.jsx("span", {
              children:
                "1. 회사는 회원에게 계약해제 및 해지의 의사표시에 대하여 회사의 특별한 사정이 없는 한 원칙적으로 회원의 의사 표시를 한 날로부터 3영업일 이내에 대금의 결제와 동일한 방법으로 이를 환급하여야 하며, 동일한 방법으로 환불이 불가능할 때에는 이를 사전에 고지합니다. 단, 회사가 사전에 회원에게 공지 하였거나, 결제회사의 환불 절차 및 환불 처리에 필요한 회원의 이행 지체로 인하여 환불 방법과 기간에 있어서 차이가 있을 수 있습니다.",
            }),
            u.jsxs("p", {
              children: [
                "2. 회사는 위 대금을 환급함에 있어서 해당 결제회사에게 재화 등의 대금의 청구를 정지 또는 취소하도록 요청합니다.",
                u.jsx("br", {}),
              ],
            }),
            u.jsxs("span", {
              children: [
                "3. 회사, 서비스 등의 대금을 지급 받은 자 또는 회원과 서비스 이용계약을 체결한 자가 동일인이 아닌 경우에 각자는 청약철회 또는 계약해제 및 해지로 인한 대금환급과 관련한 의무의 이행에 있어서 연대하여 책임을 집니다.",
                u.jsx("br", {}),
                "4. 이용권을 구매한 회원이 이용기간 중 고객의 의사에 따라 해당 이용권을 중도 해지하는 때에는, 회사는 회원이 구매 지급한 대금에서 회원이 실제 사용한 기간 등 이용권을 통하여 취득한 이익을 감안, 합리적인 범위 내에서 회사가 적용하는 소정의 기준 또는 콘텐츠이용자보호지침에 의거하여 차감하고 환불합니다. 프로모션 등을 통해 할인된 금액으로 이용권을 구매한 회원이 해당 이용권을 중도 해지하는 경우, 회사는 해당 이용권의 정상가격을 기준으로 산정한 이용금액을 차감하고 환불합니다. 이 때 회원의 결제금액보다 차감금액이 더 큰 경우 환불이 불가합니다.",
                u.jsx("br", {}),
                "5. 회사가 환불을 하는 때에는 콘텐츠이용자보호지침 등에 따라, 회사는 회사가 부담하였거나 부담할 결제비용, 송금수수료 등을 차감하여 환불 할 수 있습니다.",
                u.jsx("br", {}),
                "6. 회사의 책임 있는 사유로 인하여 이용권을 중도 해지하는 때에는, 회사는 회원이 이용권 구매 시 지급한 대금에서 회원이 이용권을 실제 사용한 기간 등 이용권을 통하여 취득한 이익을 감안하여 공제한 후 콘텐츠이용자보호지침에 의거한 금액을 더하여 환불합니다. ",
                u.jsx("br", {}),
              ],
            }),
            u.jsxs("p", {
              children: [
                "7. 회원이 프로모션 등을 통해 무상으로 취득하는 등 회원이 직접 비용을 지불하지 아니한 서비스에 대해서는 회사는 환불 의무를 부담하지 않습니다. 단, 모바일 전용회원 등 회원이 제휴사가 제공하는 혜택을 통하여 서비스를 이용하는 경우에는 제휴사의 이용약관에서 정하는 바에 따라 제휴사로부터 환불을 받을 수 있습니다.",
                u.jsx("br", {}),
                "8. 회사는 회원에게 청약철회를 이유로 위약금 또는 손해배상을 청구하지 않습니다. 그러나 회원의 계약해제·해지는 손해배상의 청구에 영향을 미치지 않습니다.",
              ],
            }),
            u.jsx("strong", { children: "제18조 (과오금)" }),
            u.jsxs("p", {
              children: [
                "1. 회사는 과오금이 발생한 경우 이용대금의 결제와 동일한 방법으로 과오금 전액을 환불하여야 합니다. 다만, 동일한 방법으로 환불이 불가능할 때는 이를 사전에 고지합니다.",
                u.jsx("br", {}),
                "2. 회사의 책임 있는 사유로 과오금이 발생한 경우 회사는 계약비용, 수수료 등에 관계없이 과오금 전액을 환불합니다. 다만, 회원의 책임있는 사유로 과오금이 발생한 경우, 회사가 과오금 환불하는 데 소요되는 비용은 합리적인 범위 내에서 회원이 부담하여야 합니다.",
                u.jsx("br", {}),
                "3. 회사는 회원이 주장하는 과오금에 대해 환불을 거부할 경우에 정당하게 이용대금이 부과되었음을 입증할 책임을 집니다.",
                u.jsx("br", {}),
                "4. 회사는 과오금의 환불절차는 콘텐츠이용자보호지침에 따라 처리합니다.",
              ],
            }),
            u.jsx("strong", { children: "제19조 (스튜디오의 이용)" }),
            u.jsxs("p", {
              children: [
                "1. 만 14세 미만의 아동이 아닌 자 는 크리에이터 등록 및 제작자 생성 후 스튜디오를 이용할 수 있습니다. ",
                u.jsx("br", {}),
                "2. 회원의 크리에이터 등록과 제작자 생성에 있어서 본 항에서 정하는 사유가 이용계약 체결 후 발견되는 경우 회사는 크리에이터 및 제작자의 스튜디오 이용을 중지시킬 수 있습니다. ",
                u.jsx("br", {}),
                "① 실명이 아니거나 타인의 명의를 이용한 신청인 경우 ",
                u.jsx("br", {}),
                "② 이미 알려진 브랜드 및 제 3 자의 상호, 명칭 등과 유사성이 크거나 동일한 이름으로 신청한 경우 ",
                u.jsx("br", {}),
                "③ 회사가 요구하는 정보를 기재하지 않거나 허위로 기재한 경우 ",
                u.jsx("br", {}),
                "④ 본 약관에 의하여 이용계약이 해지된 이력이 있는 경우 ",
                u.jsx("br", {}),
                "⑤ 스튜디오에 등록될 콘텐츠가 제20조 제3항 각 호에서 정한 내용에 해당할 것이 명백히 예상되는 경우 ",
                u.jsx("br", {}),
                "3. 회사는 스튜디오 이용과 관련하여 크리에이터 및 제작자에게 전문기관을 통한 실명확인 및 본인인증을 요청할 수 있습니다. ",
                u.jsx("br", {}),
                "4. 회사는 제작자와 크리에이터가 동일인이 아닐 경우 제작자 또는 크리에이터에게 제작자가 특정 브랜드 및 회사를 대표하고 본 약관에서 정하고 있는 제작자의 의무와 책임을 부담한다는 내용의 인감이 날인된 문서, 제작자를 생성하는 크리에이터의 재직증명서 등의 증빙자료를 요구할 수 있으며, 제작자가 이에 응하지 않으면 정산 등 스튜디오 이용을 제한할 수 있습니다. ",
                u.jsx("br", {}),
              ],
            }),
            "제20조 (제작자 및 크리에이터의 역할 및 권한)",
            u.jsxs("p", {
              children: [
                "1. 제작자 및 크리에이터는 본 약관을 준수하며, 스튜디오에 콘텐츠를 등록하여 회원이 서비스를 통해 이용하도록 할 수 있습니다. ",
                u.jsx("br", {}),
                "2. 제작자 및 크리에이터는 본 조 제 1 항에 따라 등록한 콘텐츠를 언제든지 삭제할 수 있습니다. ",
                u.jsx("br", {}),
                "3. 제작자 및 크리에이터는 다음 각 호에 해당하는 콘텐츠를 스튜디오에 등록하여서는 아니됩니다. ",
                u.jsx("br", {}),
                "① 제작자 및 크리에이터가 본 약관에 따라 콘텐츠를 등록하여 서비스 되도록 하는 것이 타인의 저작권 등 지식재산권을 침해하는 사유에 해당하는 경우 ",
                u.jsx("br", {}),
                "② 콘텐츠에 폭력성, 잔혹성을 조장하거나 혐오감 또는 불쾌감을 주는 내용이 포함된 경우 ",
                u.jsx("br", {}),
                "③ 콘텐츠에 불법성, 반사회성으로 사회의 미풍양속을 저해하는 내용이 포함된 경우 ",
                u.jsx("br", {}),
                "④ 콘텐츠에 현행 법령에 위배되는 내용, 음란한 내용, 비속어 등이 포함된 경우 ",
                u.jsx("br", {}),
                "⑤ 콘텐츠에 적법하지 않은 개인정보 노출이 포함된 경우 ",
                u.jsx("br", {}),
                "⑥ 콘텐츠에 초상 사용 허락 없이 특정 인물의 사진이 포함된 경우 ",
                u.jsx("br", {}),
                "⑦ 콘텐츠에 타인, 특정 집단 또는 계층에 대한 명예훼손, 모욕 등 인격권 침해 내용, 비난이 포함된 경우 ",
                u.jsx("br", {}),
                "⑧ 콘텐츠에 타인을 기만하거나 사칭하는 내용이 포함된 경우 ",
                u.jsx("br", {}),
                "⑨ 콘텐츠의 주된 내용이 특정 정당·단체나 계층을 지지 혹은 폄훼하는 것인 경우 ",
                u.jsx("br", {}),
                "⑩ 콘텐츠가 특정 업체나 제품에 대한 광고만을 목적으로 작성된 경우(단, 일부 리뷰성 홍보 내용이 포함된 경우는 예외로 함) ",
                u.jsx("br", {}),
                "⑪ 콘텐츠에 회사 서비스의 공정성, 중립성, 적절성 등 그 평판을 심각하게 훼손할 수 있는 내용이 포함된 경우 ",
                u.jsx("br", {}),
                "⑫ 콘텐츠에 본 약관(세부 운영원칙 포함), 운영정책에 위배되는 내용이 포함된 경우 ",
                u.jsx("br", {}),
                "⑬ 저품질(ex. 창작성 없는 ‘콘텐츠’) 콘텐츠 등 서비스에 적절하지 아니한 콘텐츠인 경우 ",
                u.jsx("br", {}),
                "4. 제작자 및 크리에이터는 스튜디오 및 서비스 이용과정에서 얻은 정보를 회사의 사전승낙 없이 복제, 배포, 출판 및 방송 등에 사용하거나 제 3 자에게 제공하여서는 아니됩니다. ",
                u.jsx("br", {}),
                "5. 제작자 및 크리에이터는 콘텐츠에 관하여 회원에게 혼란을 줄 수 있는 정보를 제공하여서는 아니되며, 이를 위반하는 경우 콘텐츠에 대한 서비스가 중단될 수 있습니다. ",
                u.jsx("br", {}),
              ],
            }),
            u.jsx("strong", {
              children: "제21조 (스튜디오에 대한 회사의 역할 및 권한)",
            }),
            u.jsxs("p", {
              children: [
                "1. 회사는 본 약관에 따라 회원에게 제작자 및 크리에이터의 콘텐츠를 서비스합니다.",
                u.jsx("br", {}),
                "2. 회사는 콘텐츠가 본 약관에 위반되는 내용을 포함하는 경우 또는 회사가 서비스를 종료하는 경우 등에 있어서 회사의 결정에 따라 콘텐츠의 서비스를 직접 중단할 수 있습니다.",
                u.jsx("br", {}),
                "3. 회사는 스튜디오의 구성(UI 등 디자인 포함), 제공방식, 운영 등에 대한 크리에이터 스튜디오 이용가이드(이하 “이용가이드”)를 제정할 수 있으며, 회원의 별도 동의 없이도 가이드를 개정할 수 있습니다. 회사는 가이드의 준수를 위하여 필요할 경우 제작자가 제공한 콘텐츠를 그 내용을 변경하지 않는 범위 내에서 수정재배치 할 수 있습니다.",
                u.jsx("br", {}),
                "4. 제 3 자가 콘텐츠에 대한 게시중단을 요청하는 경우, 회사는 관련 법령 및 본 약관, 운영정책 등에 따른 게시중단 요건이 충족되면 제작자 및 크리에이터와 협의 없이 콘텐츠에 대한 게시중단을 할 수 있습니다.",
                u.jsx("br", {}),
                "5. 회사는 제작자 및 크리에이터가 등록한 콘텐츠의 카테고리 분류를 서비스 내부 기준에 따라 적절히 변경할 수 있습니다.",
                u.jsx("br", {}),
                "6. 회사는 제작자에게 콘텐츠 제작 지원금을 지급할 수 있으며, 콘텐츠 제작 지원금의 지급과 관련한 상세 내용은 이용가이드에서 정합니다.",
                u.jsx("br", {}),
              ],
            }),
            u.jsx("strong", {
              children: "제22조 (지식재산권 및 콘텐츠의 적법성에 대한 보장)",
            }),
            u.jsxs("p", {
              children: [
                "1. 제작자 및 크리에이터는 스튜디오에 등록하는 콘텐츠에 대하여 다음 각 호에서 정하는 바에 따른 이용권한을 회사에 부여합니다",
                u.jsx("br", {}),
                "① 제작자 및 크리에이터는 회사가 서비스를 통해 콘텐츠를 적법하게 제공하도록 하기 위해 해당 콘텐츠에 대한 저장, 복제, 수정, 공중송신, 전시, 배포, 2차적 저작물 작성 등의 이용 권한(기한과 지역제한에 정함이 없으며, 별도 대가 지급이 없는 라이선스)을 부여합니다. 회사는 회원이 부여한 콘텐츠 이용 권한을 저작권법 등 관련 법령에서 정하는 바에 따라 서비스 내 노출, 서비스 홍보를 위한 활용, 서비스 운영, 개선 및 새로운 서비스 개발을 위한 연구, 법률상 의무 준수를 위해서만 제한적으로 행사할 것입니다.",
                u.jsx("br", {}),
                "② 회사는 콘텐츠의 내용을 변경하지 않는 범위 내에서 다음과 같이 서비스할 수 있습니다.",
                u.jsx("br", {}),
                "1) 음질의 품질향상을 위하여 콘텐츠를 가공하여 서비스",
                u.jsx("br", {}),
                "2) 콘텐츠를 일정한 기준에 따라 분할 등 편집하여 서비스",
                u.jsx("br", {}),
                "3) 콘텐츠를 서비스에 등록된 다른 제공자의 콘텐츠와 함께 서비스",
                u.jsx("br", {}),
                "③ 회사는 서비스의 홍보, 마케팅, 프로모션의 목적을 위해서는 콘텐츠를 (필요할 경우 편집하여) 본 약관에서 정의된 서비스 이외의 영역에서 콘텐츠의 일부를 편집, 가공하거나 변형하여 복제, 공중송신할 수 있습니다.",
                u.jsx("br", {}),
                "④ 회사는 서비스 성능 향상을 위해 필요한 범위 내에서 제작자 및 크리에이터가 제공한 콘텐츠를 활용할 수 습니다.",
                u.jsx("br", {}),
                "⑤ 회사는 제작자 및 크리에이터가 서비스에 연재한 음성 또는 영상 등 콘텐츠의 일부 구간을 회원 또는 회사가 잘라내어 별도의 하이라이트 클립으로 생성하는 기능을 제공할 수 있으며, 제작자 및 크리에이터는 본 기능 적용을 거부할 수 있습니다.",
                u.jsx("br", {}),
                "2. 제작자 및 크리에이터는 회사가 본 약관에서 정하는 바에 따라 콘텐츠를 적법하게 서비스하는 데에 필요한 이용허락을 할 수 있는 모든 법적 권리(저작권, 초상권 기타 일체의 권리)를 확보한 적법한 권리자임을 보증합니다. 만약 원권리자가 별도로 있는 저작물(음원 등)이 콘텐츠에 포함된 경우, 회사는 원권리자의 이용허락 의사표시가 포함된 서면을 제작자 또는 크리에이터에게 요청할 수 있습니다.",
                u.jsx("br", {}),
                "3. 제작자 및 크리에이터는 자신이 제공하는 콘텐츠가 다음 각 호의 내용을 포함하고 있지 않다는 점에 대하여 보증합니다.",
                u.jsx("br", {}),
                "① 저작권 등 제 3 자의 법률상·계약상 권리를 침해하는 내용",
                u.jsx("br", {}),
                "② 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령에 저촉되는 불법적인 내용(예를 들면 음란물, 청소년유해물, 명예훼손물 등)",
                u.jsx("br", {}),
                "③ 제20조 제3항 각 호의 내용",
                u.jsx("br", {}),
                "4. 제작자 및 크리에이터는 본 조 제 2 항 또는 제 3 항을 위반하여 콘텐츠를 제공한 사실을 알게 된 경우 지체 없이 회사에게 통지하여야 합니다. 단, 본 조의 통지로써 제작자의 본 조 위반의 책임이 면제되는 것은 아닙니다.",
                u.jsx("br", {}),
                "5. 제작자 및 크리에이터가 본 조 제 2 항 또는 제 3 항을 위반하여 콘텐츠를 제공한 사실을 회사가 알게 되거나 이에 관하여 국가기관 및 제 3 자 등으로부터 문제가 제기되는 경우, 회사는 해당 콘텐츠를 직접 삭제하거나 해당 콘텐츠에 대한 서비스를 직접 중단할 수 있습니다. 만약 제작자 및 크리에이터가 본 조 제 2 항 또는 제 3 항을 위반하여 콘텐츠를 제공한 것으로 인하여 회사에 손해가 발생한 경우 회사는 제작자 및 크리에이터에게 손해배상을 청구할 수 있습니다.",
                u.jsx("br", {}),
              ],
            }),
            u.jsx("strong", { children: "제23조 (서비스의 변경 및 중단)" }),
            u.jsxs("p", {
              children: [
                "1. 회사는 서비스를 변경하여 제공할 수 있습니다. 이 경우 회사는 변경될 서비스의 내용 및 제공일자를 제8조 제2항에서 정한 방법으로 회원에게 통지합니다. ",
                u.jsx("br", {}),
                "2. 회사는 다음 각 호에 해당하는 경우 서비스의 전부 또는 일부를 제한하거나 중단할 수 있습니다.",
                u.jsx("br", {}),
                "① 서비스용 설비의 보수 등 공사로 인하여 부득이한 경우",
                u.jsx("br", {}),
                "② 회원, 제3자가 불법행위, 범죄행위 등으로 회사의 영업활동을 방해하는 경우",
                u.jsx("br", {}),
                "③ 정전, 시스템 및 기타 서비스 설비의 장애, 유무선 Network 장애 또는 이용량의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우",
                u.jsx("br", {}),
                "④ 저작(인접)권자, 콘텐츠 제공사업자 등과의 계약 종료 등과 같은 회사의 제반 사정으로 서비스를 유지할 수 없는 경우",
                u.jsx("br", {}),
                "⑤ 기타 천재지변, 국가비상사태, 정전 등 회사가 통제할 수 없는 불가항력적 사유가 있는 경우",
                u.jsx("br", {}),
                "3. 회사는 제2항의 변경 또는 중단에 대하여 변경 또는 중단 사유, 변경 또는 중단될 서비스의 내용 및 중단 일자 등을 서비스 초기 화면에 게시하거나 회원에게 개별 통지합니다. 단, 회사가 통제할 수 없는 사유로 인한 서비스의 중단(운영자의 고의, 과실이 없는 디스크 장애, 시스템 다운 등)으로 인하여 사전 통지가 불가능한 경우에는 그러하지 아니합니다.",
                u.jsx("br", {}),
                "4. 회사는 관련 법령에서 서비스 제공을 금지하는 경우, 또는 천재지변/비상사태/정전/서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 정상적인 서비스 제공이 불가능할 경우 또는 회사의 분할/합병/영업양도/영업의 폐지/당해 서비스의 수익 악화 등 회사의 경영상 중대한 필요에 의한 경우 등 회사의 기술상·운영상 필요에 의해 서비스의 일부나 전부를 중단할 수 있으며, 이 경우 30일 전에 서비스 내에 이를 공지하고 서비스의 제공을 중단할 수 있습니다. 만일, 사전에 통지할 수 없는 부득이한 사정이 있는 경우에는 사후에 통지를 할 수 있습니다.",
                u.jsx("br", {}),
                "5. 회사는 제 2항의 각 호에 해당하는 사유가 아닌 회사의 귀책사유로 서비스의 제공이 중단됨으로 인하여 회원이 입은 손해에 대하여 콘텐츠이용자보호지침 , 소비자분쟁해결기준 등에 의거하여 아래와 같이 배상합니다. 다만, 천재지변 등 불가항력으로 인한 경우는 아래 이용 중지 또는 장애 발생 시간에 산입하지 아니합니다. 또 각 호를 적용함에 있어 사전 고지는 서비스 중지, 장애 시점 기준으로 24시간 이전에 고지된 것에 한합니다.",
                u.jsx("br", {}),
                "① 이용권의 경우 사업자가 서비스 중지∙장애에 대하여 사전 고지 하지 않은 경우에 있어서 이용자의 피해구제 등은 다음 각호에 의합니다. 다만, 이용자의 책임 있는 사유로 인하여 서비스가 중지 및 장애가 발생하는 경우는 서비스 중지 및 장애 시간에 포함하지 않습니다.",
                u.jsx("br", {}),
                "1) 사업자의 책임 있는 사유로 인한 서비스 중지 또는 장애가 4시간 이상 지속된 경우 : 서비스 중지∙장애 시간의 3배를 무료로 연장",
                u.jsx("br", {}),
                "2) 1개월 누적 서비스 중지∙장애발생 누적시간이 72시간을 초과한 경우 : 계약 해제 또는 해지 및 미이용기간을 포함한 잔여 기간에 대한 이용료 환급 및 손해 배상(단, 사업자가 고의 또는 과실 없음을 입증한 경우 손해배상책임을 지지 않음)",
                u.jsx("br", {}),
                "3) 사업자가 서비스 중지∙장애에 대하여 사전고지한 경우에 있어서 이용자의 피해구제는 1개월 기준 서비스 중지∙장애 시간이 10시간을 초과하는 경우 초과시간 만큼 서비스 제공 기간 연장(10시간 이내 서비스 재개시 배상 의무 없음)",
                u.jsx("br", {}),
                "② 복합이용권 중 모바일 저장 콘텐츠의 경우 음악 콘텐츠 자체에 이용 장애를 유발하는 하자가 있는 경우 회사는 완전한 음악 콘텐츠를 회원에게 재공급해야 하며, 24시간 내에 완전한 온라인 콘텐츠를 공급하지 못하는 경우 이에 상응하는 이용대금을 지급합니다.",
                u.jsx("br", {}),
                "6. 회사는 서비스 중 무료로 제공되는 서비스의 일부 또는 전부를 회사의 정책 및 운영의 필요상 유료화, 중단, 변경할 수 있으며, 이에 대하여 관련법에 특별한 규정이 없는 한 회원에게 별도의 보상을 하지 않습니다.",
                u.jsx("br", {}),
              ],
            }),
            u.jsx("strong", {
              children: "제24조 (정보의 제공 및 광고의 게재)",
            }),
            u.jsxs("p", {
              children: [
                "1. 회사는 서비스를 운영함에 있어 서비스와 관련한 각종 정보를 서비스 화면에 게재하거나 통지수단으로 회원에게 제공할 수 있습니다. ",
                u.jsx("br", {}),
                "2. 회사는 서비스를 운영함에 있어 회사 또는 제휴사의 서비스 관련 각종 광고를 서비스 화면에 게재하거나 회원의 동의를 얻어 통지수단 및 TM(Telemarketing) 등의 방법으로 회원에게 제공할 수 있습니다.",
                u.jsx("br", {}),
                "3. 회원이 서비스 내에 게재되어 있는 광고를 통해서 타 사업자(광고주)의 판촉활동에 참여하는 등의 방법으로 교신 또는 거래를 하는 것은 전적으로 회원과 광고주간의 문제입니다. 만약, 회원과 광고주간에 문제가 발생할 경우에도 회원과 광고주가 직접 해결하여야 하며, 이와 관련하여 회사는 분쟁에 개입할 의무가 없으며 회사의 고의 또는 과실이 없는 한 이로 인한 손해를 배상할 책임이 없습니다.",
                u.jsx("br", {}),
                "4. 회사는 제작자 및 크리에이터가 스튜디오에 등록한 콘텐츠에 광고 등을 삽입할 수 있습니다.",
              ],
            }),
            u.jsx("strong", { children: "제25조 (권리의 귀속)" }),
            u.jsxs("p", {
              children: [
                "1. 서비스에 대한 저작권 및 지적재산권은 회사에 귀속됩니다. 단, 회원의 게시물 및 제휴계약에 따라 제공된 저작물 등은 제외합니다.",
                u.jsx("br", {}),
                "2. 회원이 서비스 내에서 작성하고 게재한 게시물(플레이리스트, 이미지(공개용사진), 소개글 등)에 대한 지식재산권 등의 권리는 회원에게 있습니다. 회원은 회사가 서비스를 통해 회원이 게재한 게시물을 적법하게 제공하도록 하기 위해 해당 게시물에 대한 저장, 복제, 수정, 공중송신, 전시, 배포, 2차적 저작물 작성 등의 이용 권한(기한과 지역제한에 정함이 없으며, 별도 대가 지급이 없는 라이선스)을 부여 합니다. 회사는 회원이 부여한 게시물 이용 권한을 저작권법 등 관련 법령에서 정하는 바에 따라 서비스 내 노출, 서비스 홍보를 위한 활용, 서비스 운영, 개선 및 새로운 서비스 개발을 위한 연구, 법률상 의무 준수를 위해서만 제한적으로 행사할 것입니다.",
                u.jsx("br", {}),
                "3. 회사가 제공하는 서비스의 디자인, 회사가 만든 텍스트, 스크립트, 그래픽 등 서비스에 관련된 모든 상표, 서비스 마크, 로고 등에 관한 저작권 및 기타 지적재산권은 대한민국 및 외국의 법령에 기하여 회사가 보유하고 있거나 회사에게 소유권 또는 사용권이 있습니다.",
                u.jsx("br", {}),
                "4. 회원은 본 약관으로 인하여 서비스를 소유하거나 서비스에 관한 저작권을 보유하게 되는 것이 아니라, 회사로부터 서비스의 이용을 허락 받아 정보 취득 또는 개인 용도로만 이용할 수 있습니다.",
                u.jsx("br", {}),
                "5. 회원은 명시적으로 허락된 내용을 제외하고는 회사가 만든 텍스트, 스크립트, 그래픽 등을 복사하거나 유통할 수 없습니다.",
                u.jsx("br", {}),
                "6. 회사는 서비스와 관련하여 회원에게 회사가 정한 이용조건에 따라 콘텐츠 등을 이용할 수 있는 이용권만을 부여하며, 회원은 이를 양도, 판매, 담보제공 등의 처분행위를 할 수 없습니다.",
                u.jsx("br", {}),
                "7. 회원의 게시물이 청소년유해매체물에 해당하거나 사생활 침해 또는 명예훼손, 저작권 등 타인의 권리를 침해하는 등 청소년 보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 저작권법 등 관련 법령에 위반되는 내용을 포함할 경우에는 그 침해를 받은 자 또는 권리자는 관련 법령이 정한 절차에 의거하여 해당 게시물의 게시중단 및 삭제 등을 회사가 운영하는 서비스 관련 고객센터를 통해 회사에 요청할 수 있으며, 회사는 관련 법령에 따른 조치를 취하여야 합니다.",
                u.jsx("br", {}),
                "8. 전항의 권리자의 요청이 없을 경우에도 회원의 게시물이 청소년유해매체물에 해당하거나 사생활 침해 또는 명예훼손, 저작권 등 타인의 권리를 침해하는 등 청소년 보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 저작권법 등 관련 법령에 위반되는 내용을 포함할 경우에는 회사는 관련 법령에 의거 해당 게시물에 대한 접근을 임시적으로 차단하거나 삭제할 수 있습니다.",
                u.jsx("br", {}),
              ],
            }),
            u.jsx("strong", {
              children:
                "제26조 (서비스 이용계약의 해지 및 스튜디오 이용 종료 등)",
            }),
            u.jsxs("p", {
              children: [
                "1. 회원이 서비스 이용계약을 해지하고자 하는 경우 본인이 서비스 내에서 또는 기타 회사가 제공하는 그 밖의 방법으로 회사에 이용계약 해지 신청을 하여야 합니다. 회사는 회원이 서비스 이용계약을 해지하는 경우 관련 법령 및 서비스의 개인정보 처리방침에 따라 회원정보를 보유하는 경우를 제외하고는 해지 즉시 회원의 모든 개인정보를 삭제합니다. ",
                u.jsx("br", {}),
                "2. 회원은 원칙적으로 서비스 이용계약을 해지할 수 있습니다. 단, 회원이 유효한 이용권을 보유하고 있는 경우 회원의 권익보호를 위하여 서비스 이용계약 해지 이전에 회원은 이용권 해지 신청을 하여야 합니다.",
                u.jsx("br", {}),
                "3. 제작자 및 크리에이터가 본 조 제1항 내지 제2항에 따라 서비스 이용계약을 해지하거나 캐릭터 또는 크리에이터 계정을 삭제하는 경우 스튜디오 이용이 종료됩니다.",
                u.jsx("br", {}),
                "4. 회사는 제작자 또는 크리에이터가 관련 법령을 위반하거나 본 약관의 내용을 준수하지 않는 경우 콘텐츠 서비스를 중단하고 이에 대한 시정 요청을 할 수 있으며, 정해진 기한 내에 이를 시정하지 않는 경우 해당 콘텐츠를 삭제하거나 해당 제작자 또는 크리에이터에 대해 스튜디오 이용을 제한 또는 종료시킬 수 있습니다.",
                u.jsx("br", {}),
                "5. 제작자 또는 크리에이터가 스튜디오 이용을 종료할 경우 제작자 또는 크리에이터가 스튜디오에 등록한 콘텐츠는 자동으로 삭제되지 않으므로 콘텐츠의 삭제를 원하는 경우 스튜디오 이용 종료 전에 직접 이를 삭제하여야 합니다. 서비스 이용계약 해지 이후에 콘텐츠 삭제를 요청하는 경우에는 회사는 콘텐츠 삭제를 지원해드릴 수 없습니다.",
                u.jsx("br", {}),
                "6. 본 조 제 5항에 따라 제작자 또는 크리에이터가 직접 삭제하지 아니하여 서비스상에서 콘텐츠가 삭제되지 않고 서비스되는 경우 회사는 다른 회원들의 정상적인 서비스 이용을 위하여 필요한 범위 내에서 무상으로 콘텐츠에 대한 서비스를 유지할 수 있습니다.",
                u.jsx("br", {}),
                "7. 회사가 본 약관에 따라 제작자 또는 크리에이터의 스튜디오 이용을 종료할 경우 회사는 콘텐츠의 서비스를 중지하고 종료일로부터 1개월 내에 제작자 또는 크리에이터가 스튜디오에 등록한 콘텐츠를 삭제할 수 있습니다.",
                u.jsx("br", {}),
                "8. 본 조에 따라 삭제된 콘텐츠는 복원되지 않습니다 ",
                u.jsx("br", {}),
              ],
            }),
            u.jsx("strong", { children: "제27조 (손해 배상)" }),
            u.jsxs("p", {
              children: [
                "1. 회원이 본 약관의 규정을 위반함으로 인하여 회사에 손해가 발생하게 되는 경우, 본 약관을 위반한 회원은 회사에 발생하는 모든 손해를 배상하여야 합니다.",
                u.jsx("br", {}),
                "2. 회원이 서비스를 이용하는 과정에서 행한 불법행위나 본 약관 위반행위로 인하여 회사가 당해 회원 이외의 제3자로부터 손해배상 청구 또는 소송을 비롯한 각종 이의제기를 받는 경우 당해 회원은 자신의 책임과 비용으로 회사를 면책시켜야 하며, 회사가 면책되지 못한 경우 당해 회원은 그로 인하여 회사에 발생한 모든 손해를 배상하여야 합니다.",
                u.jsx("br", {}),
                "3. 회사가 본 약관의 규정을 위반함으로 인하여 회원에게 손해가 발생하게 되는 경우, 회사는 회원에게 발생한 모든 손해를 배상하여야 합니다.",
                u.jsx("br", {}),
              ],
            }),
            u.jsx("strong", { children: "제28조 (면책 사항)" }),
            u.jsxs("p", {
              children: [
                "1. 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.",
                u.jsx("br", {}),
                "2. 회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.",
                u.jsx("br", {}),
                "3. 회사는 회원 간 또는 회원과 제3자 상호간에 서비스를 매개로 하여 거래 등을 한 경우에는 회사는 고의 또는 과실이 없는 한 어떠한 책임도 지지 않습니다.",
                u.jsx("br", {}),
                "4. 회사는 고의 또는 과실이 없는 한 서비스를 이용한 회원이 기대하는 수익을 잃은 것에 대해 책임을 지지 않으며, 그 밖에 서비스를 통하여 얻은 자료로 인한 손해 등에 대해서도 책임을 지지 않습니다. 회사는 회원이 게시판 등에 게재한 정보, 자료, 사실의 신뢰도 및 정확성 등의 내용에 대해 책임을 지지 않습니다.",
                u.jsx("br", {}),
                "5. 회사 및 회사의 임직원 그리고 대리인은 귀책사유가 없는 한 다음 각 호에 해당하는 사항으로부터 발생하는 손해에 대해 책임을 지지 않습니다",
                u.jsx("br", {}),
                "① 회원 정보의 허위 또는 부정확성에 기인하는 손",
                u.jsx("br", {}),
                "② 회사의 관리영역이 아닌 공중통신선로의 장애, 통신서비스의 장애 등 이에 준하는 사유로 서비스에 장애가 발생하여 발생한 손해",
                u.jsx("br", {}),
                "③ 서버에 대한 제3자의 모든 불법적인 접속 또는 서버의 불법적인 이용으로부터 발생하는 손해",
                u.jsx("br", {}),
                "④ 서버에 대한 전송 또는 서버로부터의 전송에 대한 제3자의 모든 불법적인 방해 또는 중단행위로부터 발생하는 손해",
                u.jsx("br", {}),
                "⑤ 제3자가 서비스를 이용하여 불법적으로 전송, 유포하거나 또는 전송, 유포되도록 한 모든 바이러스, 스파이웨어 및 기타 악성 프로그램으로 인한 손해",
                u.jsx("br", {}),
              ],
            }),
            u.jsx("strong", { children: "제29조 (분쟁 조정 및 관할법원)" }),
            u.jsxs("p", {
              children: [
                "1. 회원은 게시물과 관련된 저작권 침해, 명예훼손 또는 개인정보 및 서비스 이용과 관련된 사항에 관한 문제제기 등은 회사가 운영하는 서비스 관련 고객센터를 통하여 접수하고 처리할 수 있습니다.",
                u.jsx("br", {}),
                "2. 서비스 이용과 관련하여 회사와 회원간 발생한 분쟁에 대한 소송을 제기하는 경우에는 민사소송법상의 관할법원을 1심 관할법원으로 합니다.",
                u.jsx("br", {}),
              ],
            }),
            u.jsx("strong", { children: "부칙" }),
            u.jsx("p", {
              children: "(시행일) 본 약관은 2023년 7월 1일부터 적용됩니다.",
            }),
          ],
        }),
      }),
    }),
  u5 = () => {
    const e = Dt(),
      t = () => {
        e("/");
      },
      n = () => {
        alert("준비 중입니다. 기다려주세요");
      };
    return u.jsxs(Xe, {
      children: [
        u.jsx(Wn, {
          children: u.jsxs(K4, {
            children: [
              u.jsx("h2", { children: "멤버쉽 구독하기" }),
              u.jsx("ul", {
                className: "textLi",
                children: u.jsxs("li", {
                  children: [
                    u.jsx("strong", { children: " 무제한 듣기(모바일 전용)" }),
                    u.jsx("span", { children: "월 3,850원" }),
                    u.jsx("p", { children: "부가세 포함" }),
                  ],
                }),
              }),
              u.jsxs("ul", {
                children: [
                  u.jsxs("li", {
                    children: [
                      u.jsx("span", {
                        children: "2개월 동안 50% 할인된 3,850원이 결제되며,",
                      }),
                      "3개월부터 월 7,700원(부가세 포함)으로 결제됩니다.",
                    ],
                  }),
                  u.jsx("li", {
                    children: "본 멤버십은 언제든지 해지할 수 있습니다.",
                  }),
                  u.jsx("li", {
                    children:
                      "결제일 7일 전 네이버톡톡으로 결제 알람이 발송됩니다.",
                  }),
                ],
              }),
              u.jsx("h3", { children: "결제 및 멤버십 유의사항" }),
              u.jsxs("ul", {
                children: [
                  u.jsx("li", {
                    children:
                      "매월 정기결제되는 상품으로,  APP에서 무제한 음악 듣기가 가능합니다.",
                  }),
                  u.jsx("li", {
                    children:
                      "매월 결제일 기준 7일 이내 이용내역이 없는 경우, 청약철회 신청 가능하며 전액 환불됩니다",
                  }),
                  u.jsx("li", {
                    children:
                      "매월 결제일 기준 7일 이내 이용내역이 있는 경우, 고객센터를 통해 환불 신청 가능하며 결제 금액에서 이용금액 및 위약금을 제외한 나머지 금액이 환불됩니다",
                  }),
                  u.jsx("li", {
                    children:
                      "이용금액은 이미 경과된 기간(실제 사용 여부 불문)에 상응하는 금액을 말합니다.",
                  }),
                  u.jsx("li", {
                    children:
                      "월 결제일 기준 7일 경과 후에는 이용금액과 위약금을 제외한 나머지 금액이 환불됩니다.",
                  }),
                  u.jsx("li", {
                    children:
                      "위약금은 결제 금액에서 이용금액을 제외한 금액의 10%으로 계산됩니다.",
                  }),
                  u.jsx("li", {
                    children:
                      "할인 상품의 경우 기 이용금액은 정상가를 기준으로 산정합니다.",
                  }),
                  u.jsx("li", {
                    children:
                      "멤버십 종류에 따라 이용금액을 계좌이체로 지급하신 후 전체 결제 내역을 취소해 드리는 방식으로 환불 될 수 있습니다.",
                  }),
                  u.jsx("li", {
                    children:
                      " APP을 지원하는 모바일 기기, 태블릿에서 사용 가능합니다.",
                  }),
                  u.jsx("li", {
                    children:
                      "여러 기기에서 동시에 접속할 경우 최종 접속된 1개 기기에서만 무제한 음악 듣기가 가능합니다.",
                  }),
                  u.jsx("li", {
                    children:
                      "최고 음질(AAC 320K)과 이퀄라이저(EQ) 지원합니다.",
                  }),
                  u.jsx("li", {
                    children:
                      "E를 원활히 이용하시려면 APP은 iOS 14.0.0 버전 이상, Android 버전 7.0 이상이 필요합니다.",
                  }),
                  u.jsx("li", {
                    children:
                      "멤버십 이용 중인 ID로 네이버 회원 탈퇴가 이루어지면, 해당 ID로 이용하던 서비스 또는 멤버십이 종료되며 탈퇴된 회원의 개인 정보 및 데이터는 즉시 파기되므로, 멤버십 복구 또는 환불이 불가능하다는 점 유의하시기 바랍니다.",
                  }),
                  u.jsx("li", {
                    children:
                      "멤버십 구매내역을 타인에게 양도하거나, 다른 ID로 이전하는 기능은 제공하지 않으며, 단체 ID로는 구독이 불가능합니다.",
                  }),
                  u.jsx("li", {
                    children:
                      "BE의 모든 멤버십은 네이버 페이 포인트나 국내에서 발행한 카드와 계좌를 통해 구매 가능합니다.",
                  }),
                  u.jsx("li", {
                    children:
                      "BE의 모든 멤버십은 네이버 페이 포인트나 국내에서 발행한 카드와 계좌를 통해 구매 가능합니다",
                  }),
                  u.jsx("li", {
                    children:
                      "환불과 관련한 상세한 내용은 이용 약관과 도움말을 참고해 주십시오.",
                  }),
                  u.jsx("li", {
                    children:
                      "본 멤버십 상품은  서비스 정책에 따라 종료 또는 변경될 수 있습니다.",
                  }),
                  u.jsx("li", {
                    children:
                      "버십 이용 중인 ID로 네이버 회원 탈퇴가 이루어지면, 해당 ID로 이용하던 서비스 또는 멤버십이 종료되며 탈퇴된 회원의 개인 정보 및 데이터는 즉시 파기되므로, 멤버십 복구 또는 환불이 불가능하다는 점 유의하시기 바랍니다.",
                  }),
                ],
              }),
              u.jsxs("p", {
                children: [
                  u.jsx("button", { onClick: () => t(), children: "취소" }),
                  u.jsx("button", { onClick: () => n(), children: "결제하기" }),
                ],
              }),
            ],
          }),
        }),
        u.jsx(st, {}),
        u.jsx(at, {}),
      ],
    });
  };
function c5() {
  return u.jsx(u.Fragment, {
    children: u.jsxs(Qw, {
      children: [
        u.jsx(lt, {}),
        u.jsxs(Hw, {
          children: [
            u.jsxs(be, {
              path: "/",
              children: [
                u.jsx(be, { index: !0, element: u.jsx(IC, {}) }),
                u.jsx(be, { path: ":searchtext", element: u.jsx(JC, {}) }),
                u.jsx(be, { path: "/event", element: u.jsx(u5, {}) }),
              ],
            }),
            u.jsxs(be, {
              path: "/chart",
              children: [
                u.jsx(be, { index: !0, element: u.jsx($C, {}) }),
                u.jsx(be, {
                  path: ":chartid/:listname",
                  element: u.jsx(WC, {}),
                }),
                u.jsx(be, {
                  path: ":listname/:text/:type",
                  element: u.jsx(qC, {}),
                }),
              ],
            }),
            u.jsxs(be, {
              path: "/list",
              children: [
                u.jsx(be, { index: !0, element: u.jsx(ZC, {}) }),
                u.jsx(be, { path: "QNA", element: u.jsx(e5, {}) }),
                u.jsx(be, { path: ":listID", element: u.jsx(t5, {}) }),
              ],
            }),
            u.jsx(be, { path: "/storage", element: u.jsx(r5, {}) }),
            u.jsxs(be, {
              path: "/Login",
              children: [
                u.jsx(be, { index: !0, element: u.jsx(i5, {}) }),
                u.jsx(be, { path: "/Login/join", element: u.jsx(o5, {}) }),
                u.jsx(be, { path: "/Login/joinup", element: u.jsx(s5, {}) }),
                u.jsx(be, { path: "/Login/completed", element: u.jsx(l5, {}) }),
                u.jsx(be, {
                  path: "/Login/FooterPolicy",
                  element: u.jsx(a5, {}),
                }),
              ],
            }),
            u.jsx(be, { path: "/lyrics", element: u.jsx(T1, {}) }),
          ],
        }),
      ],
    }),
  });
}
const d5 = bj({
  reducer: {
    kordata: OC,
    billboarddata: MC,
    data: XC,
    user: Bj,
    signup: z4,
    comment: VC,
  },
});
vu.createRoot(document.getElementById("root")).render(
  u.jsx(A.StrictMode, {
    children: u.jsx(V3, { store: d5, children: u.jsx(c5, {}) }),
  })
);
