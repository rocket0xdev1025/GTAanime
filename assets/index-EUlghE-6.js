var Jm = (a) => {
  throw TypeError(a);
};
var Fm = (a, i, o) => i.has(a) || Jm("Cannot " + o);
var rt = (a, i, o) => (
    Fm(a, i, "read from private field"), o ? o.call(a) : i.get(a)
  ),
  Wm = (a, i, o) =>
    i.has(a)
      ? Jm("Cannot add the same private member more than once")
      : i instanceof WeakSet
      ? i.add(a)
      : i.set(a, o),
  Xc = (a, i, o, s) => (
    Fm(a, i, "write to private field"), s ? s.call(a, o) : i.set(a, o), o
  );
function X0(a, i) {
  for (var o = 0; o < i.length; o++) {
    const s = i[o];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const u in s)
        if (u !== "default" && !(u in a)) {
          const f = Object.getOwnPropertyDescriptor(s, u);
          f &&
            Object.defineProperty(
              a,
              u,
              f.get ? f : { enumerable: !0, get: () => s[u] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(a, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) s(u);
  new MutationObserver((u) => {
    for (const f of u)
      if (f.type === "childList")
        for (const h of f.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && s(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(u) {
    const f = {};
    return (
      u.integrity && (f.integrity = u.integrity),
      u.referrerPolicy && (f.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : u.crossOrigin === "anonymous"
        ? (f.credentials = "omit")
        : (f.credentials = "same-origin"),
      f
    );
  }
  function s(u) {
    if (u.ep) return;
    u.ep = !0;
    const f = o(u);
    fetch(u.href, f);
  }
})();
function P0(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var Pc = { exports: {} },
  Ci = {};
var Im;
function Z0() {
  if (Im) return Ci;
  Im = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function o(s, u, f) {
    var h = null;
    if (
      (f !== void 0 && (h = "" + f),
      u.key !== void 0 && (h = "" + u.key),
      "key" in u)
    ) {
      f = {};
      for (var p in u) p !== "key" && (f[p] = u[p]);
    } else f = u;
    return (
      (u = f.ref),
      { $$typeof: a, type: s, key: h, ref: u !== void 0 ? u : null, props: f }
    );
  }
  return (Ci.Fragment = i), (Ci.jsx = o), (Ci.jsxs = o), Ci;
}
var ep;
function K0() {
  return ep || ((ep = 1), (Pc.exports = Z0())), Pc.exports;
}
var g = K0(),
  Zc = { exports: {} },
  Oi = {},
  Kc = { exports: {} },
  $c = {};
var tp;
function $0() {
  return (
    tp ||
      ((tp = 1),
      (function (a) {
        function i(C, Y) {
          var K = C.length;
          C.push(Y);
          e: for (; 0 < K; ) {
            var ie = (K - 1) >>> 1,
              x = C[ie];
            if (0 < u(x, Y)) (C[ie] = Y), (C[K] = x), (K = ie);
            else break e;
          }
        }
        function o(C) {
          return C.length === 0 ? null : C[0];
        }
        function s(C) {
          if (C.length === 0) return null;
          var Y = C[0],
            K = C.pop();
          if (K !== Y) {
            C[0] = K;
            e: for (var ie = 0, x = C.length, Q = x >>> 1; ie < Q; ) {
              var F = 2 * (ie + 1) - 1,
                J = C[F],
                le = F + 1,
                oe = C[le];
              if (0 > u(J, K))
                le < x && 0 > u(oe, J)
                  ? ((C[ie] = oe), (C[le] = K), (ie = le))
                  : ((C[ie] = J), (C[F] = K), (ie = F));
              else if (le < x && 0 > u(oe, K))
                (C[ie] = oe), (C[le] = K), (ie = le);
              else break e;
            }
          }
          return Y;
        }
        function u(C, Y) {
          var K = C.sortIndex - Y.sortIndex;
          return K !== 0 ? K : C.id - Y.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          a.unstable_now = function () {
            return f.now();
          };
        } else {
          var h = Date,
            p = h.now();
          a.unstable_now = function () {
            return h.now() - p;
          };
        }
        var m = [],
          y = [],
          b = 1,
          w = null,
          E = 3,
          R = !1,
          O = !1,
          _ = !1,
          M = !1,
          L = typeof setTimeout == "function" ? setTimeout : null,
          H = typeof clearTimeout == "function" ? clearTimeout : null,
          z = typeof setImmediate < "u" ? setImmediate : null;
        function q(C) {
          for (var Y = o(y); Y !== null; ) {
            if (Y.callback === null) s(y);
            else if (Y.startTime <= C)
              s(y), (Y.sortIndex = Y.expirationTime), i(m, Y);
            else break;
            Y = o(y);
          }
        }
        function V(C) {
          if (((_ = !1), q(C), !O))
            if (o(m) !== null) (O = !0), Z || ((Z = !0), ae());
            else {
              var Y = o(y);
              Y !== null && me(V, Y.startTime - C);
            }
        }
        var Z = !1,
          $ = -1,
          X = 5,
          I = -1;
        function fe() {
          return M ? !0 : !(a.unstable_now() - I < X);
        }
        function be() {
          if (((M = !1), Z)) {
            var C = a.unstable_now();
            I = C;
            var Y = !0;
            try {
              e: {
                (O = !1), _ && ((_ = !1), H($), ($ = -1)), (R = !0);
                var K = E;
                try {
                  t: {
                    for (
                      q(C), w = o(m);
                      w !== null && !(w.expirationTime > C && fe());

                    ) {
                      var ie = w.callback;
                      if (typeof ie == "function") {
                        (w.callback = null), (E = w.priorityLevel);
                        var x = ie(w.expirationTime <= C);
                        if (((C = a.unstable_now()), typeof x == "function")) {
                          (w.callback = x), q(C), (Y = !0);
                          break t;
                        }
                        w === o(m) && s(m), q(C);
                      } else s(m);
                      w = o(m);
                    }
                    if (w !== null) Y = !0;
                    else {
                      var Q = o(y);
                      Q !== null && me(V, Q.startTime - C), (Y = !1);
                    }
                  }
                  break e;
                } finally {
                  (w = null), (E = K), (R = !1);
                }
                Y = void 0;
              }
            } finally {
              Y ? ae() : (Z = !1);
            }
          }
        }
        var ae;
        if (typeof z == "function")
          ae = function () {
            z(be);
          };
        else if (typeof MessageChannel < "u") {
          var de = new MessageChannel(),
            he = de.port2;
          (de.port1.onmessage = be),
            (ae = function () {
              he.postMessage(null);
            });
        } else
          ae = function () {
            L(be, 0);
          };
        function me(C, Y) {
          $ = L(function () {
            C(a.unstable_now());
          }, Y);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (C) {
            C.callback = null;
          }),
          (a.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (X = 0 < C ? Math.floor(1e3 / C) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return E;
          }),
          (a.unstable_next = function (C) {
            switch (E) {
              case 1:
              case 2:
              case 3:
                var Y = 3;
                break;
              default:
                Y = E;
            }
            var K = E;
            E = Y;
            try {
              return C();
            } finally {
              E = K;
            }
          }),
          (a.unstable_requestPaint = function () {
            M = !0;
          }),
          (a.unstable_runWithPriority = function (C, Y) {
            switch (C) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                C = 3;
            }
            var K = E;
            E = C;
            try {
              return Y();
            } finally {
              E = K;
            }
          }),
          (a.unstable_scheduleCallback = function (C, Y, K) {
            var ie = a.unstable_now();
            switch (
              (typeof K == "object" && K !== null
                ? ((K = K.delay),
                  (K = typeof K == "number" && 0 < K ? ie + K : ie))
                : (K = ie),
              C)
            ) {
              case 1:
                var x = -1;
                break;
              case 2:
                x = 250;
                break;
              case 5:
                x = 1073741823;
                break;
              case 4:
                x = 1e4;
                break;
              default:
                x = 5e3;
            }
            return (
              (x = K + x),
              (C = {
                id: b++,
                callback: Y,
                priorityLevel: C,
                startTime: K,
                expirationTime: x,
                sortIndex: -1,
              }),
              K > ie
                ? ((C.sortIndex = K),
                  i(y, C),
                  o(m) === null &&
                    C === o(y) &&
                    (_ ? (H($), ($ = -1)) : (_ = !0), me(V, K - ie)))
                : ((C.sortIndex = x),
                  i(m, C),
                  O || R || ((O = !0), Z || ((Z = !0), ae()))),
              C
            );
          }),
          (a.unstable_shouldYield = fe),
          (a.unstable_wrapCallback = function (C) {
            var Y = E;
            return function () {
              var K = E;
              E = Y;
              try {
                return C.apply(this, arguments);
              } finally {
                E = K;
              }
            };
          });
      })($c)),
    $c
  );
}
var np;
function J0() {
  return np || ((np = 1), (Kc.exports = $0())), Kc.exports;
}
var Jc = { exports: {} },
  pe = {};
var ap;
function F0() {
  if (ap) return pe;
  ap = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    w = Symbol.iterator;
  function E(x) {
    return x === null || typeof x != "object"
      ? null
      : ((x = (w && x[w]) || x["@@iterator"]),
        typeof x == "function" ? x : null);
  }
  var R = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    O = Object.assign,
    _ = {};
  function M(x, Q, F) {
    (this.props = x),
      (this.context = Q),
      (this.refs = _),
      (this.updater = F || R);
  }
  (M.prototype.isReactComponent = {}),
    (M.prototype.setState = function (x, Q) {
      if (typeof x != "object" && typeof x != "function" && x != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, x, Q, "setState");
    }),
    (M.prototype.forceUpdate = function (x) {
      this.updater.enqueueForceUpdate(this, x, "forceUpdate");
    });
  function L() {}
  L.prototype = M.prototype;
  function H(x, Q, F) {
    (this.props = x),
      (this.context = Q),
      (this.refs = _),
      (this.updater = F || R);
  }
  var z = (H.prototype = new L());
  (z.constructor = H), O(z, M.prototype), (z.isPureReactComponent = !0);
  var q = Array.isArray,
    V = { H: null, A: null, T: null, S: null, V: null },
    Z = Object.prototype.hasOwnProperty;
  function $(x, Q, F, J, le, oe) {
    return (
      (F = oe.ref),
      { $$typeof: a, type: x, key: Q, ref: F !== void 0 ? F : null, props: oe }
    );
  }
  function X(x, Q) {
    return $(x.type, Q, void 0, void 0, void 0, x.props);
  }
  function I(x) {
    return typeof x == "object" && x !== null && x.$$typeof === a;
  }
  function fe(x) {
    var Q = { "=": "=0", ":": "=2" };
    return (
      "$" +
      x.replace(/[=:]/g, function (F) {
        return Q[F];
      })
    );
  }
  var be = /\/+/g;
  function ae(x, Q) {
    return typeof x == "object" && x !== null && x.key != null
      ? fe("" + x.key)
      : Q.toString(36);
  }
  function de() {}
  function he(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (
          (typeof x.status == "string"
            ? x.then(de, de)
            : ((x.status = "pending"),
              x.then(
                function (Q) {
                  x.status === "pending" &&
                    ((x.status = "fulfilled"), (x.value = Q));
                },
                function (Q) {
                  x.status === "pending" &&
                    ((x.status = "rejected"), (x.reason = Q));
                }
              )),
          x.status)
        ) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function me(x, Q, F, J, le) {
    var oe = typeof x;
    (oe === "undefined" || oe === "boolean") && (x = null);
    var te = !1;
    if (x === null) te = !0;
    else
      switch (oe) {
        case "bigint":
        case "string":
        case "number":
          te = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case a:
            case i:
              te = !0;
              break;
            case b:
              return (te = x._init), me(te(x._payload), Q, F, J, le);
          }
      }
    if (te)
      return (
        (le = le(x)),
        (te = J === "" ? "." + ae(x, 0) : J),
        q(le)
          ? ((F = ""),
            te != null && (F = te.replace(be, "$&/") + "/"),
            me(le, Q, F, "", function (Ee) {
              return Ee;
            }))
          : le != null &&
            (I(le) &&
              (le = X(
                le,
                F +
                  (le.key == null || (x && x.key === le.key)
                    ? ""
                    : ("" + le.key).replace(be, "$&/") + "/") +
                  te
              )),
            Q.push(le)),
        1
      );
    te = 0;
    var Ge = J === "" ? "." : J + ":";
    if (q(x))
      for (var Ce = 0; Ce < x.length; Ce++)
        (J = x[Ce]), (oe = Ge + ae(J, Ce)), (te += me(J, Q, F, oe, le));
    else if (((Ce = E(x)), typeof Ce == "function"))
      for (x = Ce.call(x), Ce = 0; !(J = x.next()).done; )
        (J = J.value), (oe = Ge + ae(J, Ce++)), (te += me(J, Q, F, oe, le));
    else if (oe === "object") {
      if (typeof x.then == "function") return me(he(x), Q, F, J, le);
      throw (
        ((Q = String(x)),
        Error(
          "Objects are not valid as a React child (found: " +
            (Q === "[object Object]"
              ? "object with keys {" + Object.keys(x).join(", ") + "}"
              : Q) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return te;
  }
  function C(x, Q, F) {
    if (x == null) return x;
    var J = [],
      le = 0;
    return (
      me(x, J, "", "", function (oe) {
        return Q.call(F, oe, le++);
      }),
      J
    );
  }
  function Y(x) {
    if (x._status === -1) {
      var Q = x._result;
      (Q = Q()),
        Q.then(
          function (F) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 1), (x._result = F));
          },
          function (F) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 2), (x._result = F));
          }
        ),
        x._status === -1 && ((x._status = 0), (x._result = Q));
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var K =
    typeof reportError == "function"
      ? reportError
      : function (x) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var Q = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof x == "object" &&
                x !== null &&
                typeof x.message == "string"
                  ? String(x.message)
                  : String(x),
              error: x,
            });
            if (!window.dispatchEvent(Q)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", x);
            return;
          }
          console.error(x);
        };
  function ie() {}
  return (
    (pe.Children = {
      map: C,
      forEach: function (x, Q, F) {
        C(
          x,
          function () {
            Q.apply(this, arguments);
          },
          F
        );
      },
      count: function (x) {
        var Q = 0;
        return (
          C(x, function () {
            Q++;
          }),
          Q
        );
      },
      toArray: function (x) {
        return (
          C(x, function (Q) {
            return Q;
          }) || []
        );
      },
      only: function (x) {
        if (!I(x))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return x;
      },
    }),
    (pe.Component = M),
    (pe.Fragment = o),
    (pe.Profiler = u),
    (pe.PureComponent = H),
    (pe.StrictMode = s),
    (pe.Suspense = m),
    (pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V),
    (pe.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (x) {
        return V.H.useMemoCache(x);
      },
    }),
    (pe.cache = function (x) {
      return function () {
        return x.apply(null, arguments);
      };
    }),
    (pe.cloneElement = function (x, Q, F) {
      if (x == null)
        throw Error(
          "The argument must be a React element, but you passed " + x + "."
        );
      var J = O({}, x.props),
        le = x.key,
        oe = void 0;
      if (Q != null)
        for (te in (Q.ref !== void 0 && (oe = void 0),
        Q.key !== void 0 && (le = "" + Q.key),
        Q))
          !Z.call(Q, te) ||
            te === "key" ||
            te === "__self" ||
            te === "__source" ||
            (te === "ref" && Q.ref === void 0) ||
            (J[te] = Q[te]);
      var te = arguments.length - 2;
      if (te === 1) J.children = F;
      else if (1 < te) {
        for (var Ge = Array(te), Ce = 0; Ce < te; Ce++)
          Ge[Ce] = arguments[Ce + 2];
        J.children = Ge;
      }
      return $(x.type, le, void 0, void 0, oe, J);
    }),
    (pe.createContext = function (x) {
      return (
        (x = {
          $$typeof: h,
          _currentValue: x,
          _currentValue2: x,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (x.Provider = x),
        (x.Consumer = { $$typeof: f, _context: x }),
        x
      );
    }),
    (pe.createElement = function (x, Q, F) {
      var J,
        le = {},
        oe = null;
      if (Q != null)
        for (J in (Q.key !== void 0 && (oe = "" + Q.key), Q))
          Z.call(Q, J) &&
            J !== "key" &&
            J !== "__self" &&
            J !== "__source" &&
            (le[J] = Q[J]);
      var te = arguments.length - 2;
      if (te === 1) le.children = F;
      else if (1 < te) {
        for (var Ge = Array(te), Ce = 0; Ce < te; Ce++)
          Ge[Ce] = arguments[Ce + 2];
        le.children = Ge;
      }
      if (x && x.defaultProps)
        for (J in ((te = x.defaultProps), te))
          le[J] === void 0 && (le[J] = te[J]);
      return $(x, oe, void 0, void 0, null, le);
    }),
    (pe.createRef = function () {
      return { current: null };
    }),
    (pe.forwardRef = function (x) {
      return { $$typeof: p, render: x };
    }),
    (pe.isValidElement = I),
    (pe.lazy = function (x) {
      return { $$typeof: b, _payload: { _status: -1, _result: x }, _init: Y };
    }),
    (pe.memo = function (x, Q) {
      return { $$typeof: y, type: x, compare: Q === void 0 ? null : Q };
    }),
    (pe.startTransition = function (x) {
      var Q = V.T,
        F = {};
      V.T = F;
      try {
        var J = x(),
          le = V.S;
        le !== null && le(F, J),
          typeof J == "object" &&
            J !== null &&
            typeof J.then == "function" &&
            J.then(ie, K);
      } catch (oe) {
        K(oe);
      } finally {
        V.T = Q;
      }
    }),
    (pe.unstable_useCacheRefresh = function () {
      return V.H.useCacheRefresh();
    }),
    (pe.use = function (x) {
      return V.H.use(x);
    }),
    (pe.useActionState = function (x, Q, F) {
      return V.H.useActionState(x, Q, F);
    }),
    (pe.useCallback = function (x, Q) {
      return V.H.useCallback(x, Q);
    }),
    (pe.useContext = function (x) {
      return V.H.useContext(x);
    }),
    (pe.useDebugValue = function () {}),
    (pe.useDeferredValue = function (x, Q) {
      return V.H.useDeferredValue(x, Q);
    }),
    (pe.useEffect = function (x, Q, F) {
      var J = V.H;
      if (typeof F == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return J.useEffect(x, Q);
    }),
    (pe.useId = function () {
      return V.H.useId();
    }),
    (pe.useImperativeHandle = function (x, Q, F) {
      return V.H.useImperativeHandle(x, Q, F);
    }),
    (pe.useInsertionEffect = function (x, Q) {
      return V.H.useInsertionEffect(x, Q);
    }),
    (pe.useLayoutEffect = function (x, Q) {
      return V.H.useLayoutEffect(x, Q);
    }),
    (pe.useMemo = function (x, Q) {
      return V.H.useMemo(x, Q);
    }),
    (pe.useOptimistic = function (x, Q) {
      return V.H.useOptimistic(x, Q);
    }),
    (pe.useReducer = function (x, Q, F) {
      return V.H.useReducer(x, Q, F);
    }),
    (pe.useRef = function (x) {
      return V.H.useRef(x);
    }),
    (pe.useState = function (x) {
      return V.H.useState(x);
    }),
    (pe.useSyncExternalStore = function (x, Q, F) {
      return V.H.useSyncExternalStore(x, Q, F);
    }),
    (pe.useTransition = function () {
      return V.H.useTransition();
    }),
    (pe.version = "19.1.0"),
    pe
  );
}
var lp;
function bo() {
  return lp || ((lp = 1), (Jc.exports = F0())), Jc.exports;
}
var Fc = { exports: {} },
  ot = {};
var ip;
function W0() {
  if (ip) return ot;
  ip = 1;
  var a = bo();
  function i(m) {
    var y = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        y += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return (
      "Minified React error #" +
      m +
      "; visit " +
      y +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var s = {
      d: {
        f: o,
        r: function () {
          throw Error(i(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    u = Symbol.for("react.portal");
  function f(m, y, b) {
    var w =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: w == null ? null : "" + w,
      children: m,
      containerInfo: y,
      implementation: b,
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(m, y) {
    if (m === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    (ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (ot.createPortal = function (m, y) {
      var b =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11))
        throw Error(i(299));
      return f(m, y, null, b);
    }),
    (ot.flushSync = function (m) {
      var y = h.T,
        b = s.p;
      try {
        if (((h.T = null), (s.p = 2), m)) return m();
      } finally {
        (h.T = y), (s.p = b), s.d.f();
      }
    }),
    (ot.preconnect = function (m, y) {
      typeof m == "string" &&
        (y
          ? ((y = y.crossOrigin),
            (y =
              typeof y == "string"
                ? y === "use-credentials"
                  ? y
                  : ""
                : void 0))
          : (y = null),
        s.d.C(m, y));
    }),
    (ot.prefetchDNS = function (m) {
      typeof m == "string" && s.d.D(m);
    }),
    (ot.preinit = function (m, y) {
      if (typeof m == "string" && y && typeof y.as == "string") {
        var b = y.as,
          w = p(b, y.crossOrigin),
          E = typeof y.integrity == "string" ? y.integrity : void 0,
          R = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        b === "style"
          ? s.d.S(m, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: w,
              integrity: E,
              fetchPriority: R,
            })
          : b === "script" &&
            s.d.X(m, {
              crossOrigin: w,
              integrity: E,
              fetchPriority: R,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
      }
    }),
    (ot.preinitModule = function (m, y) {
      if (typeof m == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var b = p(y.as, y.crossOrigin);
            s.d.M(m, {
              crossOrigin: b,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
          }
        } else y == null && s.d.M(m);
    }),
    (ot.preload = function (m, y) {
      if (
        typeof m == "string" &&
        typeof y == "object" &&
        y !== null &&
        typeof y.as == "string"
      ) {
        var b = y.as,
          w = p(b, y.crossOrigin);
        s.d.L(m, b, {
          crossOrigin: w,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority:
            typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy:
            typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet:
            typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    (ot.preloadModule = function (m, y) {
      if (typeof m == "string")
        if (y) {
          var b = p(y.as, y.crossOrigin);
          s.d.m(m, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: b,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          });
        } else s.d.m(m);
    }),
    (ot.requestFormReset = function (m) {
      s.d.r(m);
    }),
    (ot.unstable_batchedUpdates = function (m, y) {
      return m(y);
    }),
    (ot.useFormState = function (m, y, b) {
      return h.H.useFormState(m, y, b);
    }),
    (ot.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (ot.version = "19.1.0"),
    ot
  );
}
var rp;
function ly() {
  if (rp) return Fc.exports;
  rp = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), (Fc.exports = W0()), Fc.exports;
}
var op;
function I0() {
  if (op) return Oi;
  op = 1;
  var a = J0(),
    i = bo(),
    o = ly();
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function f(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function h(e) {
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
  function p(e) {
    if (f(e) !== e) throw Error(s(188));
  }
  function m(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = f(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var r = n.return;
      if (r === null) break;
      var c = r.alternate;
      if (c === null) {
        if (((l = r.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (r.child === c.child) {
        for (c = r.child; c; ) {
          if (c === n) return p(r), e;
          if (c === l) return p(r), t;
          c = c.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== l.return) (n = r), (l = c);
      else {
        for (var d = !1, v = r.child; v; ) {
          if (v === n) {
            (d = !0), (n = r), (l = c);
            break;
          }
          if (v === l) {
            (d = !0), (l = r), (n = c);
            break;
          }
          v = v.sibling;
        }
        if (!d) {
          for (v = c.child; v; ) {
            if (v === n) {
              (d = !0), (n = c), (l = r);
              break;
            }
            if (v === l) {
              (d = !0), (l = c), (n = r);
              break;
            }
            v = v.sibling;
          }
          if (!d) throw Error(s(189));
        }
      }
      if (n.alternate !== l) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function y(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = y(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign,
    w = Symbol.for("react.element"),
    E = Symbol.for("react.transitional.element"),
    R = Symbol.for("react.portal"),
    O = Symbol.for("react.fragment"),
    _ = Symbol.for("react.strict_mode"),
    M = Symbol.for("react.profiler"),
    L = Symbol.for("react.provider"),
    H = Symbol.for("react.consumer"),
    z = Symbol.for("react.context"),
    q = Symbol.for("react.forward_ref"),
    V = Symbol.for("react.suspense"),
    Z = Symbol.for("react.suspense_list"),
    $ = Symbol.for("react.memo"),
    X = Symbol.for("react.lazy"),
    I = Symbol.for("react.activity"),
    fe = Symbol.for("react.memo_cache_sentinel"),
    be = Symbol.iterator;
  function ae(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (be && e[be]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var de = Symbol.for("react.client.reference");
  function he(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === de ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case O:
        return "Fragment";
      case M:
        return "Profiler";
      case _:
        return "StrictMode";
      case V:
        return "Suspense";
      case Z:
        return "SuspenseList";
      case I:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case R:
          return "Portal";
        case z:
          return (e.displayName || "Context") + ".Provider";
        case H:
          return (e._context.displayName || "Context") + ".Consumer";
        case q:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case $:
          return (
            (t = e.displayName || null), t !== null ? t : he(e.type) || "Memo"
          );
        case X:
          (t = e._payload), (e = e._init);
          try {
            return he(e(t));
          } catch {}
      }
    return null;
  }
  var me = Array.isArray,
    C = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Y = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = { pending: !1, data: null, method: null, action: null },
    ie = [],
    x = -1;
  function Q(e) {
    return { current: e };
  }
  function F(e) {
    0 > x || ((e.current = ie[x]), (ie[x] = null), x--);
  }
  function J(e, t) {
    x++, (ie[x] = e.current), (e.current = t);
  }
  var le = Q(null),
    oe = Q(null),
    te = Q(null),
    Ge = Q(null);
  function Ce(e, t) {
    switch ((J(te, t), J(oe, e), J(le, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Em(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = Em(t)), (e = Am(t, e));
        else
          switch (e) {
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
    F(le), J(le, e);
  }
  function Ee() {
    F(le), F(oe), F(te);
  }
  function fn(e) {
    e.memoizedState !== null && J(Ge, e);
    var t = le.current,
      n = Am(t, e.type);
    t !== n && (J(oe, e), J(le, n));
  }
  function Zt(e) {
    oe.current === e && (F(le), F(oe)),
      Ge.current === e && (F(Ge), (Si._currentValue = K));
  }
  var Ft = Object.prototype.hasOwnProperty,
    dn = a.unstable_scheduleCallback,
    Wt = a.unstable_cancelCallback,
    za = a.unstable_shouldYield,
    Eg = a.unstable_requestPaint,
    It = a.unstable_now,
    Ag = a.unstable_getCurrentPriorityLevel,
    af = a.unstable_ImmediatePriority,
    lf = a.unstable_UserBlockingPriority,
    Yi = a.unstable_NormalPriority,
    Cg = a.unstable_LowPriority,
    rf = a.unstable_IdlePriority,
    Og = a.log,
    Rg = a.unstable_setDisableYieldValue,
    Nl = null,
    Tt = null;
  function Un(e) {
    if (
      (typeof Og == "function" && Rg(e),
      Tt && typeof Tt.setStrictMode == "function")
    )
      try {
        Tt.setStrictMode(Nl, e);
      } catch {}
  }
  var Et = Math.clz32 ? Math.clz32 : Dg,
    Ng = Math.log,
    _g = Math.LN2;
  function Dg(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Ng(e) / _g) | 0)) | 0;
  }
  var Vi = 256,
    Qi = 4194304;
  function fa(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return e;
    }
  }
  function Xi(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var r = 0,
      c = e.suspendedLanes,
      d = e.pingedLanes;
    e = e.warmLanes;
    var v = l & 134217727;
    return (
      v !== 0
        ? ((l = v & ~c),
          l !== 0
            ? (r = fa(l))
            : ((d &= v),
              d !== 0
                ? (r = fa(d))
                : n || ((n = v & ~e), n !== 0 && (r = fa(n)))))
        : ((v = l & ~c),
          v !== 0
            ? (r = fa(v))
            : d !== 0
            ? (r = fa(d))
            : n || ((n = l & ~e), n !== 0 && (r = fa(n)))),
      r === 0
        ? 0
        : t !== 0 &&
          t !== r &&
          (t & c) === 0 &&
          ((c = r & -r),
          (n = t & -t),
          c >= n || (c === 32 && (n & 4194048) !== 0))
        ? t
        : r
    );
  }
  function _l(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Mg(e, t) {
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
        return -1;
    }
  }
  function of() {
    var e = Vi;
    return (Vi <<= 1), (Vi & 4194048) === 0 && (Vi = 256), e;
  }
  function sf() {
    var e = Qi;
    return (Qi <<= 1), (Qi & 62914560) === 0 && (Qi = 4194304), e;
  }
  function zo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Dl(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function jg(e, t, n, l, r, c) {
    var d = e.pendingLanes;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0);
    var v = e.entanglements,
      T = e.expirationTimes,
      j = e.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var B = 31 - Et(n),
        P = 1 << B;
      (v[B] = 0), (T[B] = -1);
      var U = j[B];
      if (U !== null)
        for (j[B] = null, B = 0; B < U.length; B++) {
          var k = U[B];
          k !== null && (k.lane &= -536870913);
        }
      n &= ~P;
    }
    l !== 0 && cf(e, l, 0),
      c !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(d & ~t));
  }
  function cf(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var l = 31 - Et(t);
    (e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 4194090));
  }
  function uf(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - Et(n),
        r = 1 << l;
      (r & t) | (e[l] & t) && (e[l] |= t), (n &= ~r);
    }
  }
  function Uo(e) {
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
  function ko(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ff() {
    var e = Y.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Qm(e.type));
  }
  function zg(e, t) {
    var n = Y.p;
    try {
      return (Y.p = e), t();
    } finally {
      Y.p = n;
    }
  }
  var kn = Math.random().toString(36).slice(2),
    lt = "__reactFiber$" + kn,
    pt = "__reactProps$" + kn,
    Ua = "__reactContainer$" + kn,
    Lo = "__reactEvents$" + kn,
    Ug = "__reactListeners$" + kn,
    kg = "__reactHandles$" + kn,
    df = "__reactResources$" + kn,
    Ml = "__reactMarker$" + kn;
  function Ho(e) {
    delete e[lt], delete e[pt], delete e[Lo], delete e[Ug], delete e[kg];
  }
  function ka(e) {
    var t = e[lt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Ua] || n[lt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Nm(e); e !== null; ) {
            if ((n = e[lt])) return n;
            e = Nm(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function La(e) {
    if ((e = e[lt] || e[Ua])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function jl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Ha(e) {
    var t = e[df];
    return (
      t ||
        (t = e[df] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function $e(e) {
    e[Ml] = !0;
  }
  var hf = new Set(),
    mf = {};
  function da(e, t) {
    qa(e, t), qa(e + "Capture", t);
  }
  function qa(e, t) {
    for (mf[e] = t, e = 0; e < t.length; e++) hf.add(t[e]);
  }
  var Lg = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    pf = {},
    yf = {};
  function Hg(e) {
    return Ft.call(yf, e)
      ? !0
      : Ft.call(pf, e)
      ? !1
      : Lg.test(e)
      ? (yf[e] = !0)
      : ((pf[e] = !0), !1);
  }
  function Pi(e, t, n) {
    if (Hg(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Zi(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function hn(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }
  var qo, vf;
  function Ba(e) {
    if (qo === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        (qo = (t && t[1]) || ""),
          (vf =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      qo +
      e +
      vf
    );
  }
  var Bo = !1;
  function Go(e, t) {
    if (!e || Bo) return "";
    Bo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var P = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(P.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(P, []);
                } catch (k) {
                  var U = k;
                }
                Reflect.construct(e, [], P);
              } else {
                try {
                  P.call();
                } catch (k) {
                  U = k;
                }
                e.call(P.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (k) {
                U = k;
              }
              (P = e()) &&
                typeof P.catch == "function" &&
                P.catch(function () {});
            }
          } catch (k) {
            if (k && U && typeof k.stack == "string") return [k.stack, U.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      r &&
        r.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var c = l.DetermineComponentFrameRoot(),
        d = c[0],
        v = c[1];
      if (d && v) {
        var T = d.split(`
`),
          j = v.split(`
`);
        for (
          r = l = 0;
          l < T.length && !T[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; r < j.length && !j[r].includes("DetermineComponentFrameRoot"); )
          r++;
        if (l === T.length || r === j.length)
          for (
            l = T.length - 1, r = j.length - 1;
            1 <= l && 0 <= r && T[l] !== j[r];

          )
            r--;
        for (; 1 <= l && 0 <= r; l--, r--)
          if (T[l] !== j[r]) {
            if (l !== 1 || r !== 1)
              do
                if ((l--, r--, 0 > r || T[l] !== j[r])) {
                  var B =
                    `
` + T[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      B.includes("<anonymous>") &&
                      (B = B.replace("<anonymous>", e.displayName)),
                    B
                  );
                }
              while (1 <= l && 0 <= r);
            break;
          }
      }
    } finally {
      (Bo = !1), (Error.prepareStackTrace = n);
    }
    return (n = e ? e.displayName || e.name : "") ? Ba(n) : "";
  }
  function qg(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ba(e.type);
      case 16:
        return Ba("Lazy");
      case 13:
        return Ba("Suspense");
      case 19:
        return Ba("SuspenseList");
      case 0:
      case 15:
        return Go(e.type, !1);
      case 11:
        return Go(e.type.render, !1);
      case 1:
        return Go(e.type, !0);
      case 31:
        return Ba("Activity");
      default:
        return "";
    }
  }
  function gf(e) {
    try {
      var t = "";
      do (t += qg(e)), (e = e.return);
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function Ut(e) {
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
  function bf(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Bg(e) {
    var t = bf(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var r = n.get,
        c = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return r.call(this);
          },
          set: function (d) {
            (l = "" + d), c.call(this, d);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (d) {
            l = "" + d;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Ki(e) {
    e._valueTracker || (e._valueTracker = Bg(e));
  }
  function xf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = "";
    return (
      e && (l = bf(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function $i(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Gg = /[\n"\\]/g;
  function kt(e) {
    return e.replace(Gg, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Yo(e, t, n, l, r, c, d, v) {
    (e.name = ""),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (e.type = d)
        : e.removeAttribute("type"),
      t != null
        ? d === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Ut(t))
          : e.value !== "" + Ut(t) && (e.value = "" + Ut(t))
        : (d !== "submit" && d !== "reset") || e.removeAttribute("value"),
      t != null
        ? Vo(e, d, Ut(t))
        : n != null
        ? Vo(e, d, Ut(n))
        : l != null && e.removeAttribute("value"),
      r == null && c != null && (e.defaultChecked = !!c),
      r != null &&
        (e.checked = r && typeof r != "function" && typeof r != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (e.name = "" + Ut(v))
        : e.removeAttribute("name");
  }
  function Sf(e, t, n, l, r, c, d, v) {
    if (
      (c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (e.type = c),
      t != null || n != null)
    ) {
      if (!((c !== "submit" && c !== "reset") || t != null)) return;
      (n = n != null ? "" + Ut(n) : ""),
        (t = t != null ? "" + Ut(t) : n),
        v || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (l = l ?? r),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = v ? e.checked : !!l),
      (e.defaultChecked = !!l),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (e.name = d);
  }
  function Vo(e, t, n) {
    (t === "number" && $i(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function Ga(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
      for (n = 0; n < e.length; n++)
        (r = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== r && (e[n].selected = r),
          r && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Ut(n), t = null, r = 0; r < e.length; r++) {
        if (e[r].value === n) {
          (e[r].selected = !0), l && (e[r].defaultSelected = !0);
          return;
        }
        t !== null || e[r].disabled || (t = e[r]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function wf(e, t, n) {
    if (
      t != null &&
      ((t = "" + Ut(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Ut(n) : "";
  }
  function Tf(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(s(92));
        if (me(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), (t = n);
    }
    (n = Ut(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== "" && l !== null && (e.value = l);
  }
  function Ya(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Yg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ef(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : l
      ? e.setProperty(t, n)
      : typeof n != "number" || n === 0 || Yg.has(t)
      ? t === "float"
        ? (e.cssFloat = n)
        : (e[t] = ("" + n).trim())
      : (e[t] = n + "px");
  }
  function Af(e, t, n) {
    if (t != null && typeof t != "object") throw Error(s(62));
    if (((e = e.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
            ? (e.cssFloat = "")
            : (e[l] = ""));
      for (var r in t)
        (l = t[r]), t.hasOwnProperty(r) && n[r] !== l && Ef(e, r, l);
    } else for (var c in t) t.hasOwnProperty(c) && Ef(e, c, t[c]);
  }
  function Qo(e) {
    if (e.indexOf("-") === -1) return !1;
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
  var Vg = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Qg =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ji(e) {
    return Qg.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Xo = null;
  function Po(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Va = null,
    Qa = null;
  function Cf(e) {
    var t = La(e);
    if (t && (e = t.stateNode)) {
      var n = e[pt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Yo(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + kt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var r = l[pt] || null;
                if (!r) throw Error(s(90));
                Yo(
                  l,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              (l = n[t]), l.form === e.form && xf(l);
          }
          break e;
        case "textarea":
          wf(e, n.value, n.defaultValue);
          break e;
        case "select":
          (t = n.value), t != null && Ga(e, !!n.multiple, t, !1);
      }
    }
  }
  var Zo = !1;
  function Of(e, t, n) {
    if (Zo) return e(t, n);
    Zo = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((Zo = !1),
        (Va !== null || Qa !== null) &&
          (Ur(), Va && ((t = Va), (e = Qa), (Qa = Va = null), Cf(t), e)))
      )
        for (t = 0; t < e.length; t++) Cf(e[t]);
    }
  }
  function zl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[pt] || null;
    if (l === null) return null;
    n = l[t];
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
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var mn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Ko = !1;
  if (mn)
    try {
      var Ul = {};
      Object.defineProperty(Ul, "passive", {
        get: function () {
          Ko = !0;
        },
      }),
        window.addEventListener("test", Ul, Ul),
        window.removeEventListener("test", Ul, Ul);
    } catch {
      Ko = !1;
    }
  var Ln = null,
    $o = null,
    Fi = null;
  function Rf() {
    if (Fi) return Fi;
    var e,
      t = $o,
      n = t.length,
      l,
      r = "value" in Ln ? Ln.value : Ln.textContent,
      c = r.length;
    for (e = 0; e < n && t[e] === r[e]; e++);
    var d = n - e;
    for (l = 1; l <= d && t[n - l] === r[c - l]; l++);
    return (Fi = r.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Wi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ii() {
    return !0;
  }
  function Nf() {
    return !1;
  }
  function yt(e) {
    function t(n, l, r, c, d) {
      (this._reactName = n),
        (this._targetInst = r),
        (this.type = l),
        (this.nativeEvent = c),
        (this.target = d),
        (this.currentTarget = null);
      for (var v in e)
        e.hasOwnProperty(v) && ((n = e[v]), (this[v] = n ? n(c) : c[v]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? Ii
          : Nf),
        (this.isPropagationStopped = Nf),
        this
      );
    }
    return (
      b(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Ii));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ii));
        },
        persist: function () {},
        isPersistent: Ii,
      }),
      t
    );
  }
  var ha = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    er = yt(ha),
    kl = b({}, ha, { view: 0, detail: 0 }),
    Xg = yt(kl),
    Jo,
    Fo,
    Ll,
    tr = b({}, kl, {
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
      getModifierState: Io,
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
          : (e !== Ll &&
              (Ll && e.type === "mousemove"
                ? ((Jo = e.screenX - Ll.screenX), (Fo = e.screenY - Ll.screenY))
                : (Fo = Jo = 0),
              (Ll = e)),
            Jo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Fo;
      },
    }),
    _f = yt(tr),
    Pg = b({}, tr, { dataTransfer: 0 }),
    Zg = yt(Pg),
    Kg = b({}, kl, { relatedTarget: 0 }),
    Wo = yt(Kg),
    $g = b({}, ha, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Jg = yt($g),
    Fg = b({}, ha, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Wg = yt(Fg),
    Ig = b({}, ha, { data: 0 }),
    Df = yt(Ig),
    eb = {
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
    tb = {
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
    nb = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ab(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = nb[e])
      ? !!t[e]
      : !1;
  }
  function Io() {
    return ab;
  }
  var lb = b({}, kl, {
      key: function (e) {
        if (e.key) {
          var t = eb[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Wi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? tb[e.keyCode] || "Unidentified"
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
      getModifierState: Io,
      charCode: function (e) {
        return e.type === "keypress" ? Wi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Wi(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    ib = yt(lb),
    rb = b({}, tr, {
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
    Mf = yt(rb),
    ob = b({}, kl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Io,
    }),
    sb = yt(ob),
    cb = b({}, ha, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ub = yt(cb),
    fb = b({}, tr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
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
    db = yt(fb),
    hb = b({}, ha, { newState: 0, oldState: 0 }),
    mb = yt(hb),
    pb = [9, 13, 27, 32],
    es = mn && "CompositionEvent" in window,
    Hl = null;
  mn && "documentMode" in document && (Hl = document.documentMode);
  var yb = mn && "TextEvent" in window && !Hl,
    jf = mn && (!es || (Hl && 8 < Hl && 11 >= Hl)),
    zf = " ",
    Uf = !1;
  function kf(e, t) {
    switch (e) {
      case "keyup":
        return pb.indexOf(t.keyCode) !== -1;
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
  function Lf(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Xa = !1;
  function vb(e, t) {
    switch (e) {
      case "compositionend":
        return Lf(t);
      case "keypress":
        return t.which !== 32 ? null : ((Uf = !0), zf);
      case "textInput":
        return (e = t.data), e === zf && Uf ? null : e;
      default:
        return null;
    }
  }
  function gb(e, t) {
    if (Xa)
      return e === "compositionend" || (!es && kf(e, t))
        ? ((e = Rf()), (Fi = $o = Ln = null), (Xa = !1), e)
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
        return jf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var bb = {
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
  function Hf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!bb[e.type] : t === "textarea";
  }
  function qf(e, t, n, l) {
    Va ? (Qa ? Qa.push(l) : (Qa = [l])) : (Va = l),
      (t = Gr(t, "onChange")),
      0 < t.length &&
        ((n = new er("onChange", "change", null, n, l)),
        e.push({ event: n, listeners: t }));
  }
  var ql = null,
    Bl = null;
  function xb(e) {
    bm(e, 0);
  }
  function nr(e) {
    var t = jl(e);
    if (xf(t)) return e;
  }
  function Bf(e, t) {
    if (e === "change") return t;
  }
  var Gf = !1;
  if (mn) {
    var ts;
    if (mn) {
      var ns = "oninput" in document;
      if (!ns) {
        var Yf = document.createElement("div");
        Yf.setAttribute("oninput", "return;"),
          (ns = typeof Yf.oninput == "function");
      }
      ts = ns;
    } else ts = !1;
    Gf = ts && (!document.documentMode || 9 < document.documentMode);
  }
  function Vf() {
    ql && (ql.detachEvent("onpropertychange", Qf), (Bl = ql = null));
  }
  function Qf(e) {
    if (e.propertyName === "value" && nr(Bl)) {
      var t = [];
      qf(t, Bl, e, Po(e)), Of(xb, t);
    }
  }
  function Sb(e, t, n) {
    e === "focusin"
      ? (Vf(), (ql = t), (Bl = n), ql.attachEvent("onpropertychange", Qf))
      : e === "focusout" && Vf();
  }
  function wb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return nr(Bl);
  }
  function Tb(e, t) {
    if (e === "click") return nr(t);
  }
  function Eb(e, t) {
    if (e === "input" || e === "change") return nr(t);
  }
  function Ab(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var At = typeof Object.is == "function" ? Object.is : Ab;
  function Gl(e, t) {
    if (At(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var r = n[l];
      if (!Ft.call(t, r) || !At(e[r], t[r])) return !1;
    }
    return !0;
  }
  function Xf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Pf(e, t) {
    var n = Xf(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t))
          return { node: n, offset: t - e };
        e = l;
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
      n = Xf(n);
    }
  }
  function Zf(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Zf(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Kf(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = $i(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = $i(e.document);
    }
    return t;
  }
  function as(e) {
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
  var Cb = mn && "documentMode" in document && 11 >= document.documentMode,
    Pa = null,
    ls = null,
    Yl = null,
    is = !1;
  function $f(e, t, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    is ||
      Pa == null ||
      Pa !== $i(l) ||
      ((l = Pa),
      "selectionStart" in l && as(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Yl && Gl(Yl, l)) ||
        ((Yl = l),
        (l = Gr(ls, "onSelect")),
        0 < l.length &&
          ((t = new er("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = Pa))));
  }
  function ma(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Za = {
      animationend: ma("Animation", "AnimationEnd"),
      animationiteration: ma("Animation", "AnimationIteration"),
      animationstart: ma("Animation", "AnimationStart"),
      transitionrun: ma("Transition", "TransitionRun"),
      transitionstart: ma("Transition", "TransitionStart"),
      transitioncancel: ma("Transition", "TransitionCancel"),
      transitionend: ma("Transition", "TransitionEnd"),
    },
    rs = {},
    Jf = {};
  mn &&
    ((Jf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Za.animationend.animation,
      delete Za.animationiteration.animation,
      delete Za.animationstart.animation),
    "TransitionEvent" in window || delete Za.transitionend.transition);
  function pa(e) {
    if (rs[e]) return rs[e];
    if (!Za[e]) return e;
    var t = Za[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Jf) return (rs[e] = t[n]);
    return e;
  }
  var Ff = pa("animationend"),
    Wf = pa("animationiteration"),
    If = pa("animationstart"),
    Ob = pa("transitionrun"),
    Rb = pa("transitionstart"),
    Nb = pa("transitioncancel"),
    ed = pa("transitionend"),
    td = new Map(),
    os =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  os.push("scrollEnd");
  function Kt(e, t) {
    td.set(e, t), da(t, [e]);
  }
  var nd = new WeakMap();
  function Lt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = nd.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: gf(t) }), nd.set(e, t), t);
    }
    return { value: e, source: t, stack: gf(t) };
  }
  var Ht = [],
    Ka = 0,
    ss = 0;
  function ar() {
    for (var e = Ka, t = (ss = Ka = 0); t < e; ) {
      var n = Ht[t];
      Ht[t++] = null;
      var l = Ht[t];
      Ht[t++] = null;
      var r = Ht[t];
      Ht[t++] = null;
      var c = Ht[t];
      if (((Ht[t++] = null), l !== null && r !== null)) {
        var d = l.pending;
        d === null ? (r.next = r) : ((r.next = d.next), (d.next = r)),
          (l.pending = r);
      }
      c !== 0 && ad(n, r, c);
    }
  }
  function lr(e, t, n, l) {
    (Ht[Ka++] = e),
      (Ht[Ka++] = t),
      (Ht[Ka++] = n),
      (Ht[Ka++] = l),
      (ss |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function cs(e, t, n, l) {
    return lr(e, t, n, l), ir(e);
  }
  function $a(e, t) {
    return lr(e, null, null, t), ir(e);
  }
  function ad(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var r = !1, c = e.return; c !== null; )
      (c.childLanes |= n),
        (l = c.alternate),
        l !== null && (l.childLanes |= n),
        c.tag === 22 &&
          ((e = c.stateNode), e === null || e._visibility & 1 || (r = !0)),
        (e = c),
        (c = c.return);
    return e.tag === 3
      ? ((c = e.stateNode),
        r &&
          t !== null &&
          ((r = 31 - Et(n)),
          (e = c.hiddenUpdates),
          (l = e[r]),
          l === null ? (e[r] = [t]) : l.push(t),
          (t.lane = n | 536870912)),
        c)
      : null;
  }
  function ir(e) {
    if (50 < hi) throw ((hi = 0), (pc = null), Error(s(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ja = {};
  function _b(e, t, n, l) {
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
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ct(e, t, n, l) {
    return new _b(e, t, n, l);
  }
  function us(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function pn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Ct(e.tag, t, e.key, e.mode)),
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
      (n.flags = e.flags & 65011712),
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
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function ld(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function rr(e, t, n, l, r, c) {
    var d = 0;
    if (((l = e), typeof e == "function")) us(e) && (d = 1);
    else if (typeof e == "string")
      d = M0(e, n, le.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case I:
          return (e = Ct(31, n, t, r)), (e.elementType = I), (e.lanes = c), e;
        case O:
          return ya(n.children, r, c, t);
        case _:
          (d = 8), (r |= 24);
          break;
        case M:
          return (
            (e = Ct(12, n, t, r | 2)), (e.elementType = M), (e.lanes = c), e
          );
        case V:
          return (e = Ct(13, n, t, r)), (e.elementType = V), (e.lanes = c), e;
        case Z:
          return (e = Ct(19, n, t, r)), (e.elementType = Z), (e.lanes = c), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case L:
              case z:
                d = 10;
                break e;
              case H:
                d = 9;
                break e;
              case q:
                d = 11;
                break e;
              case $:
                d = 14;
                break e;
              case X:
                (d = 16), (l = null);
                break e;
            }
          (d = 29),
            (n = Error(s(130, e === null ? "null" : typeof e, ""))),
            (l = null);
      }
    return (
      (t = Ct(d, n, t, r)), (t.elementType = e), (t.type = l), (t.lanes = c), t
    );
  }
  function ya(e, t, n, l) {
    return (e = Ct(7, e, l, t)), (e.lanes = n), e;
  }
  function fs(e, t, n) {
    return (e = Ct(6, e, null, t)), (e.lanes = n), e;
  }
  function ds(e, t, n) {
    return (
      (t = Ct(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Fa = [],
    Wa = 0,
    or = null,
    sr = 0,
    qt = [],
    Bt = 0,
    va = null,
    yn = 1,
    vn = "";
  function ga(e, t) {
    (Fa[Wa++] = sr), (Fa[Wa++] = or), (or = e), (sr = t);
  }
  function id(e, t, n) {
    (qt[Bt++] = yn), (qt[Bt++] = vn), (qt[Bt++] = va), (va = e);
    var l = yn;
    e = vn;
    var r = 32 - Et(l) - 1;
    (l &= ~(1 << r)), (n += 1);
    var c = 32 - Et(t) + r;
    if (30 < c) {
      var d = r - (r % 5);
      (c = (l & ((1 << d) - 1)).toString(32)),
        (l >>= d),
        (r -= d),
        (yn = (1 << (32 - Et(t) + r)) | (n << r) | l),
        (vn = c + e);
    } else (yn = (1 << c) | (n << r) | l), (vn = e);
  }
  function hs(e) {
    e.return !== null && (ga(e, 1), id(e, 1, 0));
  }
  function ms(e) {
    for (; e === or; )
      (or = Fa[--Wa]), (Fa[Wa] = null), (sr = Fa[--Wa]), (Fa[Wa] = null);
    for (; e === va; )
      (va = qt[--Bt]),
        (qt[Bt] = null),
        (vn = qt[--Bt]),
        (qt[Bt] = null),
        (yn = qt[--Bt]),
        (qt[Bt] = null);
  }
  var dt = null,
    Le = null,
    Ae = !1,
    ba = null,
    en = !1,
    ps = Error(s(519));
  function xa(e) {
    var t = Error(s(418, ""));
    throw (Xl(Lt(t, e)), ps);
  }
  function rd(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[lt] = e), (t[pt] = l), n)) {
      case "dialog":
        Se("cancel", t), Se("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Se("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < pi.length; n++) Se(pi[n], t);
        break;
      case "source":
        Se("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Se("error", t), Se("load", t);
        break;
      case "details":
        Se("toggle", t);
        break;
      case "input":
        Se("invalid", t),
          Sf(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ),
          Ki(t);
        break;
      case "select":
        Se("invalid", t);
        break;
      case "textarea":
        Se("invalid", t), Tf(t, l.value, l.defaultValue, l.children), Ki(t);
    }
    (n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      Tm(t.textContent, n)
        ? (l.popover != null && (Se("beforetoggle", t), Se("toggle", t)),
          l.onScroll != null && Se("scroll", t),
          l.onScrollEnd != null && Se("scrollend", t),
          l.onClick != null && (t.onclick = Yr),
          (t = !0))
        : (t = !1),
      t || xa(e);
  }
  function od(e) {
    for (dt = e.return; dt; )
      switch (dt.tag) {
        case 5:
        case 13:
          en = !1;
          return;
        case 27:
        case 3:
          en = !0;
          return;
        default:
          dt = dt.return;
      }
  }
  function Vl(e) {
    if (e !== dt) return !1;
    if (!Ae) return od(e), (Ae = !0), !1;
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || Dc(e.type, e.memoizedProps))),
        (n = !n)),
      n && Le && xa(e),
      od(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((n = e.data), n === "/$")) {
              if (t === 0) {
                Le = Jt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          e = e.nextSibling;
        }
        Le = null;
      }
    } else
      t === 27
        ? ((t = Le), In(e.type) ? ((e = Uc), (Uc = null), (Le = e)) : (Le = t))
        : (Le = dt ? Jt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Ql() {
    (Le = dt = null), (Ae = !1);
  }
  function sd() {
    var e = ba;
    return (
      e !== null &&
        (bt === null ? (bt = e) : bt.push.apply(bt, e), (ba = null)),
      e
    );
  }
  function Xl(e) {
    ba === null ? (ba = [e]) : ba.push(e);
  }
  var ys = Q(null),
    Sa = null,
    gn = null;
  function Hn(e, t, n) {
    J(ys, t._currentValue), (t._currentValue = n);
  }
  function bn(e) {
    (e._currentValue = ys.current), F(ys);
  }
  function vs(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function gs(e, t, n, l) {
    var r = e.child;
    for (r !== null && (r.return = e); r !== null; ) {
      var c = r.dependencies;
      if (c !== null) {
        var d = r.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var v = c;
          c = r;
          for (var T = 0; T < t.length; T++)
            if (v.context === t[T]) {
              (c.lanes |= n),
                (v = c.alternate),
                v !== null && (v.lanes |= n),
                vs(c.return, n, e),
                l || (d = null);
              break e;
            }
          c = v.next;
        }
      } else if (r.tag === 18) {
        if (((d = r.return), d === null)) throw Error(s(341));
        (d.lanes |= n),
          (c = d.alternate),
          c !== null && (c.lanes |= n),
          vs(d, n, e),
          (d = null);
      } else d = r.child;
      if (d !== null) d.return = r;
      else
        for (d = r; d !== null; ) {
          if (d === e) {
            d = null;
            break;
          }
          if (((r = d.sibling), r !== null)) {
            (r.return = d.return), (d = r);
            break;
          }
          d = d.return;
        }
      r = d;
    }
  }
  function Pl(e, t, n, l) {
    e = null;
    for (var r = t, c = !1; r !== null; ) {
      if (!c) {
        if ((r.flags & 524288) !== 0) c = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var d = r.alternate;
        if (d === null) throw Error(s(387));
        if (((d = d.memoizedProps), d !== null)) {
          var v = r.type;
          At(r.pendingProps.value, d.value) ||
            (e !== null ? e.push(v) : (e = [v]));
        }
      } else if (r === Ge.current) {
        if (((d = r.alternate), d === null)) throw Error(s(387));
        d.memoizedState.memoizedState !== r.memoizedState.memoizedState &&
          (e !== null ? e.push(Si) : (e = [Si]));
      }
      r = r.return;
    }
    e !== null && gs(t, e, n, l), (t.flags |= 262144);
  }
  function cr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!At(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function wa(e) {
    (Sa = e),
      (gn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function it(e) {
    return cd(Sa, e);
  }
  function ur(e, t) {
    return Sa === null && wa(e), cd(e, t);
  }
  function cd(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), gn === null)) {
      if (e === null) throw Error(s(308));
      (gn = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else gn = gn.next = t;
    return n;
  }
  var Db =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                });
            };
          },
    Mb = a.unstable_scheduleCallback,
    jb = a.unstable_NormalPriority,
    Xe = {
      $$typeof: z,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function bs() {
    return { controller: new Db(), data: new Map(), refCount: 0 };
  }
  function Zl(e) {
    e.refCount--,
      e.refCount === 0 &&
        Mb(jb, function () {
          e.controller.abort();
        });
  }
  var Kl = null,
    xs = 0,
    Ia = 0,
    el = null;
  function zb(e, t) {
    if (Kl === null) {
      var n = (Kl = []);
      (xs = 0),
        (Ia = wc()),
        (el = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        });
    }
    return xs++, t.then(ud, ud), t;
  }
  function ud() {
    if (--xs === 0 && Kl !== null) {
      el !== null && (el.status = "fulfilled");
      var e = Kl;
      (Kl = null), (Ia = 0), (el = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Ub(e, t) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (r) {
          n.push(r);
        },
      };
    return (
      e.then(
        function () {
          (l.status = "fulfilled"), (l.value = t);
          for (var r = 0; r < n.length; r++) (0, n[r])(t);
        },
        function (r) {
          for (l.status = "rejected", l.reason = r, r = 0; r < n.length; r++)
            (0, n[r])(void 0);
        }
      ),
      l
    );
  }
  var fd = C.S;
  C.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      zb(e, t),
      fd !== null && fd(e, t);
  };
  var Ta = Q(null);
  function Ss() {
    var e = Ta.current;
    return e !== null ? e : ze.pooledCache;
  }
  function fr(e, t) {
    t === null ? J(Ta, Ta.current) : J(Ta, t.pool);
  }
  function dd() {
    var e = Ss();
    return e === null ? null : { parent: Xe._currentValue, pool: e };
  }
  var $l = Error(s(460)),
    hd = Error(s(474)),
    dr = Error(s(542)),
    ws = { then: function () {} };
  function md(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function hr() {}
  function pd(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(hr, hr), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), vd(e), e);
      default:
        if (typeof t.status == "string") t.then(hr, hr);
        else {
          if (((e = ze), e !== null && 100 < e.shellSuspendCounter))
            throw Error(s(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var r = t;
                  (r.status = "fulfilled"), (r.value = l);
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var r = t;
                  (r.status = "rejected"), (r.reason = l);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), vd(e), e);
        }
        throw ((Jl = t), $l);
    }
  }
  var Jl = null;
  function yd() {
    if (Jl === null) throw Error(s(459));
    var e = Jl;
    return (Jl = null), e;
  }
  function vd(e) {
    if (e === $l || e === dr) throw Error(s(483));
  }
  var qn = !1;
  function Ts(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Es(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Bn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Gn(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Oe & 2) !== 0)) {
      var r = l.pending;
      return (
        r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
        (l.pending = t),
        (t = ir(e)),
        ad(e, null, n),
        t
      );
    }
    return lr(e, l, t, n), ir(e);
  }
  function Fl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), uf(e, n);
    }
  }
  function As(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var r = null,
        c = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          c === null ? (r = c = d) : (c = c.next = d), (n = n.next);
        } while (n !== null);
        c === null ? (r = c = t) : (c = c.next = t);
      } else r = c = t;
      (n = {
        baseState: l.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: c,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  var Cs = !1;
  function Wl() {
    if (Cs) {
      var e = el;
      if (e !== null) throw e;
    }
  }
  function Il(e, t, n, l) {
    Cs = !1;
    var r = e.updateQueue;
    qn = !1;
    var c = r.firstBaseUpdate,
      d = r.lastBaseUpdate,
      v = r.shared.pending;
    if (v !== null) {
      r.shared.pending = null;
      var T = v,
        j = T.next;
      (T.next = null), d === null ? (c = j) : (d.next = j), (d = T);
      var B = e.alternate;
      B !== null &&
        ((B = B.updateQueue),
        (v = B.lastBaseUpdate),
        v !== d &&
          (v === null ? (B.firstBaseUpdate = j) : (v.next = j),
          (B.lastBaseUpdate = T)));
    }
    if (c !== null) {
      var P = r.baseState;
      (d = 0), (B = j = T = null), (v = c);
      do {
        var U = v.lane & -536870913,
          k = U !== v.lane;
        if (k ? (we & U) === U : (l & U) === U) {
          U !== 0 && U === Ia && (Cs = !0),
            B !== null &&
              (B = B.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var ue = e,
              se = v;
            U = t;
            var De = n;
            switch (se.tag) {
              case 1:
                if (((ue = se.payload), typeof ue == "function")) {
                  P = ue.call(De, P, U);
                  break e;
                }
                P = ue;
                break e;
              case 3:
                ue.flags = (ue.flags & -65537) | 128;
              case 0:
                if (
                  ((ue = se.payload),
                  (U = typeof ue == "function" ? ue.call(De, P, U) : ue),
                  U == null)
                )
                  break e;
                P = b({}, P, U);
                break e;
              case 2:
                qn = !0;
            }
          }
          (U = v.callback),
            U !== null &&
              ((e.flags |= 64),
              k && (e.flags |= 8192),
              (k = r.callbacks),
              k === null ? (r.callbacks = [U]) : k.push(U));
        } else
          (k = {
            lane: U,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            B === null ? ((j = B = k), (T = P)) : (B = B.next = k),
            (d |= U);
        if (((v = v.next), v === null)) {
          if (((v = r.shared.pending), v === null)) break;
          (k = v),
            (v = k.next),
            (k.next = null),
            (r.lastBaseUpdate = k),
            (r.shared.pending = null);
        }
      } while (!0);
      B === null && (T = P),
        (r.baseState = T),
        (r.firstBaseUpdate = j),
        (r.lastBaseUpdate = B),
        c === null && (r.shared.lanes = 0),
        ($n |= d),
        (e.lanes = d),
        (e.memoizedState = P);
    }
  }
  function gd(e, t) {
    if (typeof e != "function") throw Error(s(191, e));
    e.call(t);
  }
  function bd(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) gd(n[e], t);
  }
  var tl = Q(null),
    mr = Q(0);
  function xd(e, t) {
    (e = Cn), J(mr, e), J(tl, t), (Cn = e | t.baseLanes);
  }
  function Os() {
    J(mr, Cn), J(tl, tl.current);
  }
  function Rs() {
    (Cn = mr.current), F(tl), F(mr);
  }
  var Yn = 0,
    ye = null,
    Ne = null,
    Ye = null,
    pr = !1,
    nl = !1,
    Ea = !1,
    yr = 0,
    ei = 0,
    al = null,
    kb = 0;
  function qe() {
    throw Error(s(321));
  }
  function Ns(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!At(e[n], t[n])) return !1;
    return !0;
  }
  function _s(e, t, n, l, r, c) {
    return (
      (Yn = c),
      (ye = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (C.H = e === null || e.memoizedState === null ? ah : lh),
      (Ea = !1),
      (c = n(l, r)),
      (Ea = !1),
      nl && (c = wd(t, n, l, r)),
      Sd(e),
      c
    );
  }
  function Sd(e) {
    C.H = wr;
    var t = Ne !== null && Ne.next !== null;
    if (((Yn = 0), (Ye = Ne = ye = null), (pr = !1), (ei = 0), (al = null), t))
      throw Error(s(300));
    e === null ||
      Je ||
      ((e = e.dependencies), e !== null && cr(e) && (Je = !0));
  }
  function wd(e, t, n, l) {
    ye = e;
    var r = 0;
    do {
      if ((nl && (al = null), (ei = 0), (nl = !1), 25 <= r))
        throw Error(s(301));
      if (((r += 1), (Ye = Ne = null), e.updateQueue != null)) {
        var c = e.updateQueue;
        (c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0);
      }
      (C.H = Vb), (c = t(n, l));
    } while (nl);
    return c;
  }
  function Lb() {
    var e = C.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? ti(t) : t),
      (e = e.useState()[0]),
      (Ne !== null ? Ne.memoizedState : null) !== e && (ye.flags |= 1024),
      t
    );
  }
  function Ds() {
    var e = yr !== 0;
    return (yr = 0), e;
  }
  function Ms(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
  }
  function js(e) {
    if (pr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      pr = !1;
    }
    (Yn = 0), (Ye = Ne = ye = null), (nl = !1), (ei = yr = 0), (al = null);
  }
  function vt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ye === null ? (ye.memoizedState = Ye = e) : (Ye = Ye.next = e), Ye;
  }
  function Ve() {
    if (Ne === null) {
      var e = ye.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = Ye === null ? ye.memoizedState : Ye.next;
    if (t !== null) (Ye = t), (Ne = e);
    else {
      if (e === null)
        throw ye.alternate === null ? Error(s(467)) : Error(s(310));
      (Ne = e),
        (e = {
          memoizedState: Ne.memoizedState,
          baseState: Ne.baseState,
          baseQueue: Ne.baseQueue,
          queue: Ne.queue,
          next: null,
        }),
        Ye === null ? (ye.memoizedState = Ye = e) : (Ye = Ye.next = e);
    }
    return Ye;
  }
  function zs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ti(e) {
    var t = ei;
    return (
      (ei += 1),
      al === null && (al = []),
      (e = pd(al, e, t)),
      (t = ye),
      (Ye === null ? t.memoizedState : Ye.next) === null &&
        ((t = t.alternate),
        (C.H = t === null || t.memoizedState === null ? ah : lh)),
      e
    );
  }
  function vr(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ti(e);
      if (e.$$typeof === z) return it(e);
    }
    throw Error(s(438, String(e)));
  }
  function Us(e) {
    var t = null,
      n = ye.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = ye.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (r) {
                return r.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = zs()), (ye.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = fe;
    return t.index++, n;
  }
  function xn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function gr(e) {
    var t = Ve();
    return ks(t, Ne, e);
  }
  function ks(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = n;
    var r = e.baseQueue,
      c = l.pending;
    if (c !== null) {
      if (r !== null) {
        var d = r.next;
        (r.next = c.next), (c.next = d);
      }
      (t.baseQueue = r = c), (l.pending = null);
    }
    if (((c = e.baseState), r === null)) e.memoizedState = c;
    else {
      t = r.next;
      var v = (d = null),
        T = null,
        j = t,
        B = !1;
      do {
        var P = j.lane & -536870913;
        if (P !== j.lane ? (we & P) === P : (Yn & P) === P) {
          var U = j.revertLane;
          if (U === 0)
            T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: j.action,
                  hasEagerState: j.hasEagerState,
                  eagerState: j.eagerState,
                  next: null,
                }),
              P === Ia && (B = !0);
          else if ((Yn & U) === U) {
            (j = j.next), U === Ia && (B = !0);
            continue;
          } else
            (P = {
              lane: 0,
              revertLane: j.revertLane,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null,
            }),
              T === null ? ((v = T = P), (d = c)) : (T = T.next = P),
              (ye.lanes |= U),
              ($n |= U);
          (P = j.action),
            Ea && n(c, P),
            (c = j.hasEagerState ? j.eagerState : n(c, P));
        } else
          (U = {
            lane: P,
            revertLane: j.revertLane,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          }),
            T === null ? ((v = T = U), (d = c)) : (T = T.next = U),
            (ye.lanes |= P),
            ($n |= P);
        j = j.next;
      } while (j !== null && j !== t);
      if (
        (T === null ? (d = c) : (T.next = v),
        !At(c, e.memoizedState) && ((Je = !0), B && ((n = el), n !== null)))
      )
        throw n;
      (e.memoizedState = c),
        (e.baseState = d),
        (e.baseQueue = T),
        (l.lastRenderedState = c);
    }
    return r === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Ls(e) {
    var t = Ve(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      r = n.pending,
      c = t.memoizedState;
    if (r !== null) {
      n.pending = null;
      var d = (r = r.next);
      do (c = e(c, d.action)), (d = d.next);
      while (d !== r);
      At(c, t.memoizedState) || (Je = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (n.lastRenderedState = c);
    }
    return [c, l];
  }
  function Td(e, t, n) {
    var l = ye,
      r = Ve(),
      c = Ae;
    if (c) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = t();
    var d = !At((Ne || r).memoizedState, n);
    d && ((r.memoizedState = n), (Je = !0)), (r = r.queue);
    var v = Cd.bind(null, l, r, e);
    if (
      (ni(2048, 8, v, [e]),
      r.getSnapshot !== t || d || (Ye !== null && Ye.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        ll(9, br(), Ad.bind(null, l, r, n, t), null),
        ze === null)
      )
        throw Error(s(349));
      c || (Yn & 124) !== 0 || Ed(l, t, n);
    }
    return n;
  }
  function Ed(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ye.updateQueue),
      t === null
        ? ((t = zs()), (ye.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Ad(e, t, n, l) {
    (t.value = n), (t.getSnapshot = l), Od(t) && Rd(e);
  }
  function Cd(e, t, n) {
    return n(function () {
      Od(t) && Rd(e);
    });
  }
  function Od(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !At(e, n);
    } catch {
      return !0;
    }
  }
  function Rd(e) {
    var t = $a(e, 2);
    t !== null && Dt(t, e, 2);
  }
  function Hs(e) {
    var t = vt();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), Ea)) {
        Un(!0);
        try {
          n();
        } finally {
          Un(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Nd(e, t, n, l) {
    return (e.baseState = n), ks(e, Ne, typeof l == "function" ? l : xn);
  }
  function Hb(e, t, n, l, r) {
    if (Sr(e)) throw Error(s(485));
    if (((e = t.action), e !== null)) {
      var c = {
        payload: r,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          c.listeners.push(d);
        },
      };
      C.T !== null ? n(!0) : (c.isTransition = !1),
        l(c),
        (n = t.pending),
        n === null
          ? ((c.next = t.pending = c), _d(t, c))
          : ((c.next = n.next), (t.pending = n.next = c));
    }
  }
  function _d(e, t) {
    var n = t.action,
      l = t.payload,
      r = e.state;
    if (t.isTransition) {
      var c = C.T,
        d = {};
      C.T = d;
      try {
        var v = n(r, l),
          T = C.S;
        T !== null && T(d, v), Dd(e, t, v);
      } catch (j) {
        qs(e, t, j);
      } finally {
        C.T = c;
      }
    } else
      try {
        (c = n(r, l)), Dd(e, t, c);
      } catch (j) {
        qs(e, t, j);
      }
  }
  function Dd(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            Md(e, t, l);
          },
          function (l) {
            return qs(e, t, l);
          }
        )
      : Md(e, t, n);
  }
  function Md(e, t, n) {
    (t.status = "fulfilled"),
      (t.value = n),
      jd(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), _d(e, n)));
  }
  function qs(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (t.status = "rejected"), (t.reason = n), jd(t), (t = t.next);
      while (t !== l);
    }
    e.action = null;
  }
  function jd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function zd(e, t) {
    return t;
  }
  function Ud(e, t) {
    if (Ae) {
      var n = ze.formState;
      if (n !== null) {
        e: {
          var l = ye;
          if (Ae) {
            if (Le) {
              t: {
                for (var r = Le, c = en; r.nodeType !== 8; ) {
                  if (!c) {
                    r = null;
                    break t;
                  }
                  if (((r = Jt(r.nextSibling)), r === null)) {
                    r = null;
                    break t;
                  }
                }
                (c = r.data), (r = c === "F!" || c === "F" ? r : null);
              }
              if (r) {
                (Le = Jt(r.nextSibling)), (l = r.data === "F!");
                break e;
              }
            }
            xa(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = vt()),
      (n.memoizedState = n.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zd,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = eh.bind(null, ye, l)),
      (l.dispatch = n),
      (l = Hs(!1)),
      (c = Qs.bind(null, ye, !1, l.queue)),
      (l = vt()),
      (r = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = r),
      (n = Hb.bind(null, ye, r, c, n)),
      (r.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function kd(e) {
    var t = Ve();
    return Ld(t, Ne, e);
  }
  function Ld(e, t, n) {
    if (
      ((t = ks(e, t, zd)[0]),
      (e = gr(xn)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var l = ti(t);
      } catch (d) {
        throw d === $l ? dr : d;
      }
    else l = t;
    t = Ve();
    var r = t.queue,
      c = r.dispatch;
    return (
      n !== t.memoizedState &&
        ((ye.flags |= 2048), ll(9, br(), qb.bind(null, r, n), null)),
      [l, c, e]
    );
  }
  function qb(e, t) {
    e.action = t;
  }
  function Hd(e) {
    var t = Ve(),
      n = Ne;
    if (n !== null) return Ld(t, n, e);
    Ve(), (t = t.memoizedState), (n = Ve());
    var l = n.queue.dispatch;
    return (n.memoizedState = e), [t, l, !1];
  }
  function ll(e, t, n, l) {
    return (
      (e = { tag: e, create: n, deps: l, inst: t, next: null }),
      (t = ye.updateQueue),
      t === null && ((t = zs()), (ye.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function br() {
    return { destroy: void 0, resource: void 0 };
  }
  function qd() {
    return Ve().memoizedState;
  }
  function xr(e, t, n, l) {
    var r = vt();
    (l = l === void 0 ? null : l),
      (ye.flags |= e),
      (r.memoizedState = ll(1 | t, br(), n, l));
  }
  function ni(e, t, n, l) {
    var r = Ve();
    l = l === void 0 ? null : l;
    var c = r.memoizedState.inst;
    Ne !== null && l !== null && Ns(l, Ne.memoizedState.deps)
      ? (r.memoizedState = ll(t, c, n, l))
      : ((ye.flags |= e), (r.memoizedState = ll(1 | t, c, n, l)));
  }
  function Bd(e, t) {
    xr(8390656, 8, e, t);
  }
  function Gd(e, t) {
    ni(2048, 8, e, t);
  }
  function Yd(e, t) {
    return ni(4, 2, e, t);
  }
  function Vd(e, t) {
    return ni(4, 4, e, t);
  }
  function Qd(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Xd(e, t, n) {
    (n = n != null ? n.concat([e]) : null), ni(4, 4, Qd.bind(null, t, e), n);
  }
  function Bs() {}
  function Pd(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Ns(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function Zd(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Ns(t, l[1])) return l[0];
    if (((l = e()), Ea)) {
      Un(!0);
      try {
        e();
      } finally {
        Un(!1);
      }
    }
    return (n.memoizedState = [l, t]), l;
  }
  function Gs(e, t, n) {
    return n === void 0 || (Yn & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Jh()), (ye.lanes |= e), ($n |= e), n);
  }
  function Kd(e, t, n, l) {
    return At(n, t)
      ? n
      : tl.current !== null
      ? ((e = Gs(e, n, l)), At(e, t) || (Je = !0), e)
      : (Yn & 42) === 0
      ? ((Je = !0), (e.memoizedState = n))
      : ((e = Jh()), (ye.lanes |= e), ($n |= e), t);
  }
  function $d(e, t, n, l, r) {
    var c = Y.p;
    Y.p = c !== 0 && 8 > c ? c : 8;
    var d = C.T,
      v = {};
    (C.T = v), Qs(e, !1, t, n);
    try {
      var T = r(),
        j = C.S;
      if (
        (j !== null && j(v, T),
        T !== null && typeof T == "object" && typeof T.then == "function")
      ) {
        var B = Ub(T, l);
        ai(e, t, B, _t(e));
      } else ai(e, t, l, _t(e));
    } catch (P) {
      ai(e, t, { then: function () {}, status: "rejected", reason: P }, _t());
    } finally {
      (Y.p = c), (C.T = d);
    }
  }
  function Bb() {}
  function Ys(e, t, n, l) {
    if (e.tag !== 5) throw Error(s(476));
    var r = Jd(e).queue;
    $d(
      e,
      r,
      t,
      K,
      n === null
        ? Bb
        : function () {
            return Fd(e), n(l);
          }
    );
  }
  function Jd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: K,
      baseState: K,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xn,
        lastRenderedState: K,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: xn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Fd(e) {
    var t = Jd(e).next.queue;
    ai(e, t, {}, _t());
  }
  function Vs() {
    return it(Si);
  }
  function Wd() {
    return Ve().memoizedState;
  }
  function Id() {
    return Ve().memoizedState;
  }
  function Gb(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = _t();
          e = Bn(n);
          var l = Gn(t, e, n);
          l !== null && (Dt(l, t, n), Fl(l, t, n)),
            (t = { cache: bs() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Yb(e, t, n) {
    var l = _t();
    (n = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Sr(e)
        ? th(t, n)
        : ((n = cs(e, t, n, l)), n !== null && (Dt(n, e, l), nh(n, t, l)));
  }
  function eh(e, t, n) {
    var l = _t();
    ai(e, t, n, l);
  }
  function ai(e, t, n, l) {
    var r = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Sr(e)) th(t, r);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var d = t.lastRenderedState,
            v = c(d, n);
          if (((r.hasEagerState = !0), (r.eagerState = v), At(v, d)))
            return lr(e, t, r, 0), ze === null && ar(), !1;
        } catch {}
      if (((n = cs(e, t, r, l)), n !== null))
        return Dt(n, e, l), nh(n, t, l), !0;
    }
    return !1;
  }
  function Qs(e, t, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: wc(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Sr(e))
    ) {
      if (t) throw Error(s(479));
    } else (t = cs(e, n, l, 2)), t !== null && Dt(t, e, 2);
  }
  function Sr(e) {
    var t = e.alternate;
    return e === ye || (t !== null && t === ye);
  }
  function th(e, t) {
    nl = pr = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function nh(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), uf(e, n);
    }
  }
  var wr = {
      readContext: it,
      use: vr,
      useCallback: qe,
      useContext: qe,
      useEffect: qe,
      useImperativeHandle: qe,
      useLayoutEffect: qe,
      useInsertionEffect: qe,
      useMemo: qe,
      useReducer: qe,
      useRef: qe,
      useState: qe,
      useDebugValue: qe,
      useDeferredValue: qe,
      useTransition: qe,
      useSyncExternalStore: qe,
      useId: qe,
      useHostTransitionStatus: qe,
      useFormState: qe,
      useActionState: qe,
      useOptimistic: qe,
      useMemoCache: qe,
      useCacheRefresh: qe,
    },
    ah = {
      readContext: it,
      use: vr,
      useCallback: function (e, t) {
        return (vt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: it,
      useEffect: Bd,
      useImperativeHandle: function (e, t, n) {
        (n = n != null ? n.concat([e]) : null),
          xr(4194308, 4, Qd.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return xr(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        xr(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = vt();
        t = t === void 0 ? null : t;
        var l = e();
        if (Ea) {
          Un(!0);
          try {
            e();
          } finally {
            Un(!1);
          }
        }
        return (n.memoizedState = [l, t]), l;
      },
      useReducer: function (e, t, n) {
        var l = vt();
        if (n !== void 0) {
          var r = n(t);
          if (Ea) {
            Un(!0);
            try {
              n(t);
            } finally {
              Un(!1);
            }
          }
        } else r = t;
        return (
          (l.memoizedState = l.baseState = r),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: r,
          }),
          (l.queue = e),
          (e = e.dispatch = Yb.bind(null, ye, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = vt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = Hs(e);
        var t = e.queue,
          n = eh.bind(null, ye, t);
        return (t.dispatch = n), [e.memoizedState, n];
      },
      useDebugValue: Bs,
      useDeferredValue: function (e, t) {
        var n = vt();
        return Gs(n, e, t);
      },
      useTransition: function () {
        var e = Hs(!1);
        return (
          (e = $d.bind(null, ye, e.queue, !0, !1)),
          (vt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var l = ye,
          r = vt();
        if (Ae) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), ze === null)) throw Error(s(349));
          (we & 124) !== 0 || Ed(l, t, n);
        }
        r.memoizedState = n;
        var c = { value: n, getSnapshot: t };
        return (
          (r.queue = c),
          Bd(Cd.bind(null, l, c, e), [e]),
          (l.flags |= 2048),
          ll(9, br(), Ad.bind(null, l, c, n, t), null),
          n
        );
      },
      useId: function () {
        var e = vt(),
          t = ze.identifierPrefix;
        if (Ae) {
          var n = vn,
            l = yn;
          (n = (l & ~(1 << (32 - Et(l) - 1))).toString(32) + n),
            (t = "«" + t + "R" + n),
            (n = yr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "»");
        } else (n = kb++), (t = "«" + t + "r" + n.toString(32) + "»");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Vs,
      useFormState: Ud,
      useActionState: Ud,
      useOptimistic: function (e) {
        var t = vt();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = Qs.bind(null, ye, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Us,
      useCacheRefresh: function () {
        return (vt().memoizedState = Gb.bind(null, ye));
      },
    },
    lh = {
      readContext: it,
      use: vr,
      useCallback: Pd,
      useContext: it,
      useEffect: Gd,
      useImperativeHandle: Xd,
      useInsertionEffect: Yd,
      useLayoutEffect: Vd,
      useMemo: Zd,
      useReducer: gr,
      useRef: qd,
      useState: function () {
        return gr(xn);
      },
      useDebugValue: Bs,
      useDeferredValue: function (e, t) {
        var n = Ve();
        return Kd(n, Ne.memoizedState, e, t);
      },
      useTransition: function () {
        var e = gr(xn)[0],
          t = Ve().memoizedState;
        return [typeof e == "boolean" ? e : ti(e), t];
      },
      useSyncExternalStore: Td,
      useId: Wd,
      useHostTransitionStatus: Vs,
      useFormState: kd,
      useActionState: kd,
      useOptimistic: function (e, t) {
        var n = Ve();
        return Nd(n, Ne, e, t);
      },
      useMemoCache: Us,
      useCacheRefresh: Id,
    },
    Vb = {
      readContext: it,
      use: vr,
      useCallback: Pd,
      useContext: it,
      useEffect: Gd,
      useImperativeHandle: Xd,
      useInsertionEffect: Yd,
      useLayoutEffect: Vd,
      useMemo: Zd,
      useReducer: Ls,
      useRef: qd,
      useState: function () {
        return Ls(xn);
      },
      useDebugValue: Bs,
      useDeferredValue: function (e, t) {
        var n = Ve();
        return Ne === null ? Gs(n, e, t) : Kd(n, Ne.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ls(xn)[0],
          t = Ve().memoizedState;
        return [typeof e == "boolean" ? e : ti(e), t];
      },
      useSyncExternalStore: Td,
      useId: Wd,
      useHostTransitionStatus: Vs,
      useFormState: Hd,
      useActionState: Hd,
      useOptimistic: function (e, t) {
        var n = Ve();
        return Ne !== null
          ? Nd(n, Ne, e, t)
          : ((n.baseState = e), [e, n.queue.dispatch]);
      },
      useMemoCache: Us,
      useCacheRefresh: Id,
    },
    il = null,
    li = 0;
  function Tr(e) {
    var t = li;
    return (li += 1), il === null && (il = []), pd(il, e, t);
  }
  function ii(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Er(e, t) {
    throw t.$$typeof === w
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          s(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function ih(e) {
    var t = e._init;
    return t(e._payload);
  }
  function rh(e) {
    function t(N, A) {
      if (e) {
        var D = N.deletions;
        D === null ? ((N.deletions = [A]), (N.flags |= 16)) : D.push(A);
      }
    }
    function n(N, A) {
      if (!e) return null;
      for (; A !== null; ) t(N, A), (A = A.sibling);
      return null;
    }
    function l(N) {
      for (var A = new Map(); N !== null; )
        N.key !== null ? A.set(N.key, N) : A.set(N.index, N), (N = N.sibling);
      return A;
    }
    function r(N, A) {
      return (N = pn(N, A)), (N.index = 0), (N.sibling = null), N;
    }
    function c(N, A, D) {
      return (
        (N.index = D),
        e
          ? ((D = N.alternate),
            D !== null
              ? ((D = D.index), D < A ? ((N.flags |= 67108866), A) : D)
              : ((N.flags |= 67108866), A))
          : ((N.flags |= 1048576), A)
      );
    }
    function d(N) {
      return e && N.alternate === null && (N.flags |= 67108866), N;
    }
    function v(N, A, D, G) {
      return A === null || A.tag !== 6
        ? ((A = fs(D, N.mode, G)), (A.return = N), A)
        : ((A = r(A, D)), (A.return = N), A);
    }
    function T(N, A, D, G) {
      var ne = D.type;
      return ne === O
        ? B(N, A, D.props.children, G, D.key)
        : A !== null &&
          (A.elementType === ne ||
            (typeof ne == "object" &&
              ne !== null &&
              ne.$$typeof === X &&
              ih(ne) === A.type))
        ? ((A = r(A, D.props)), ii(A, D), (A.return = N), A)
        : ((A = rr(D.type, D.key, D.props, null, N.mode, G)),
          ii(A, D),
          (A.return = N),
          A);
    }
    function j(N, A, D, G) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== D.containerInfo ||
        A.stateNode.implementation !== D.implementation
        ? ((A = ds(D, N.mode, G)), (A.return = N), A)
        : ((A = r(A, D.children || [])), (A.return = N), A);
    }
    function B(N, A, D, G, ne) {
      return A === null || A.tag !== 7
        ? ((A = ya(D, N.mode, G, ne)), (A.return = N), A)
        : ((A = r(A, D)), (A.return = N), A);
    }
    function P(N, A, D) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return (A = fs("" + A, N.mode, D)), (A.return = N), A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case E:
            return (
              (D = rr(A.type, A.key, A.props, null, N.mode, D)),
              ii(D, A),
              (D.return = N),
              D
            );
          case R:
            return (A = ds(A, N.mode, D)), (A.return = N), A;
          case X:
            var G = A._init;
            return (A = G(A._payload)), P(N, A, D);
        }
        if (me(A) || ae(A))
          return (A = ya(A, N.mode, D, null)), (A.return = N), A;
        if (typeof A.then == "function") return P(N, Tr(A), D);
        if (A.$$typeof === z) return P(N, ur(N, A), D);
        Er(N, A);
      }
      return null;
    }
    function U(N, A, D, G) {
      var ne = A !== null ? A.key : null;
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return ne !== null ? null : v(N, A, "" + D, G);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case E:
            return D.key === ne ? T(N, A, D, G) : null;
          case R:
            return D.key === ne ? j(N, A, D, G) : null;
          case X:
            return (ne = D._init), (D = ne(D._payload)), U(N, A, D, G);
        }
        if (me(D) || ae(D)) return ne !== null ? null : B(N, A, D, G, null);
        if (typeof D.then == "function") return U(N, A, Tr(D), G);
        if (D.$$typeof === z) return U(N, A, ur(N, D), G);
        Er(N, D);
      }
      return null;
    }
    function k(N, A, D, G, ne) {
      if (
        (typeof G == "string" && G !== "") ||
        typeof G == "number" ||
        typeof G == "bigint"
      )
        return (N = N.get(D) || null), v(A, N, "" + G, ne);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case E:
            return (
              (N = N.get(G.key === null ? D : G.key) || null), T(A, N, G, ne)
            );
          case R:
            return (
              (N = N.get(G.key === null ? D : G.key) || null), j(A, N, G, ne)
            );
          case X:
            var ge = G._init;
            return (G = ge(G._payload)), k(N, A, D, G, ne);
        }
        if (me(G) || ae(G)) return (N = N.get(D) || null), B(A, N, G, ne, null);
        if (typeof G.then == "function") return k(N, A, D, Tr(G), ne);
        if (G.$$typeof === z) return k(N, A, D, ur(A, G), ne);
        Er(A, G);
      }
      return null;
    }
    function ue(N, A, D, G) {
      for (
        var ne = null, ge = null, re = A, ce = (A = 0), We = null;
        re !== null && ce < D.length;
        ce++
      ) {
        re.index > ce ? ((We = re), (re = null)) : (We = re.sibling);
        var Te = U(N, re, D[ce], G);
        if (Te === null) {
          re === null && (re = We);
          break;
        }
        e && re && Te.alternate === null && t(N, re),
          (A = c(Te, A, ce)),
          ge === null ? (ne = Te) : (ge.sibling = Te),
          (ge = Te),
          (re = We);
      }
      if (ce === D.length) return n(N, re), Ae && ga(N, ce), ne;
      if (re === null) {
        for (; ce < D.length; ce++)
          (re = P(N, D[ce], G)),
            re !== null &&
              ((A = c(re, A, ce)),
              ge === null ? (ne = re) : (ge.sibling = re),
              (ge = re));
        return Ae && ga(N, ce), ne;
      }
      for (re = l(re); ce < D.length; ce++)
        (We = k(re, N, ce, D[ce], G)),
          We !== null &&
            (e &&
              We.alternate !== null &&
              re.delete(We.key === null ? ce : We.key),
            (A = c(We, A, ce)),
            ge === null ? (ne = We) : (ge.sibling = We),
            (ge = We));
      return (
        e &&
          re.forEach(function (la) {
            return t(N, la);
          }),
        Ae && ga(N, ce),
        ne
      );
    }
    function se(N, A, D, G) {
      if (D == null) throw Error(s(151));
      for (
        var ne = null,
          ge = null,
          re = A,
          ce = (A = 0),
          We = null,
          Te = D.next();
        re !== null && !Te.done;
        ce++, Te = D.next()
      ) {
        re.index > ce ? ((We = re), (re = null)) : (We = re.sibling);
        var la = U(N, re, Te.value, G);
        if (la === null) {
          re === null && (re = We);
          break;
        }
        e && re && la.alternate === null && t(N, re),
          (A = c(la, A, ce)),
          ge === null ? (ne = la) : (ge.sibling = la),
          (ge = la),
          (re = We);
      }
      if (Te.done) return n(N, re), Ae && ga(N, ce), ne;
      if (re === null) {
        for (; !Te.done; ce++, Te = D.next())
          (Te = P(N, Te.value, G)),
            Te !== null &&
              ((A = c(Te, A, ce)),
              ge === null ? (ne = Te) : (ge.sibling = Te),
              (ge = Te));
        return Ae && ga(N, ce), ne;
      }
      for (re = l(re); !Te.done; ce++, Te = D.next())
        (Te = k(re, N, ce, Te.value, G)),
          Te !== null &&
            (e &&
              Te.alternate !== null &&
              re.delete(Te.key === null ? ce : Te.key),
            (A = c(Te, A, ce)),
            ge === null ? (ne = Te) : (ge.sibling = Te),
            (ge = Te));
      return (
        e &&
          re.forEach(function (Q0) {
            return t(N, Q0);
          }),
        Ae && ga(N, ce),
        ne
      );
    }
    function De(N, A, D, G) {
      if (
        (typeof D == "object" &&
          D !== null &&
          D.type === O &&
          D.key === null &&
          (D = D.props.children),
        typeof D == "object" && D !== null)
      ) {
        switch (D.$$typeof) {
          case E:
            e: {
              for (var ne = D.key; A !== null; ) {
                if (A.key === ne) {
                  if (((ne = D.type), ne === O)) {
                    if (A.tag === 7) {
                      n(N, A.sibling),
                        (G = r(A, D.props.children)),
                        (G.return = N),
                        (N = G);
                      break e;
                    }
                  } else if (
                    A.elementType === ne ||
                    (typeof ne == "object" &&
                      ne !== null &&
                      ne.$$typeof === X &&
                      ih(ne) === A.type)
                  ) {
                    n(N, A.sibling),
                      (G = r(A, D.props)),
                      ii(G, D),
                      (G.return = N),
                      (N = G);
                    break e;
                  }
                  n(N, A);
                  break;
                } else t(N, A);
                A = A.sibling;
              }
              D.type === O
                ? ((G = ya(D.props.children, N.mode, G, D.key)),
                  (G.return = N),
                  (N = G))
                : ((G = rr(D.type, D.key, D.props, null, N.mode, G)),
                  ii(G, D),
                  (G.return = N),
                  (N = G));
            }
            return d(N);
          case R:
            e: {
              for (ne = D.key; A !== null; ) {
                if (A.key === ne)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === D.containerInfo &&
                    A.stateNode.implementation === D.implementation
                  ) {
                    n(N, A.sibling),
                      (G = r(A, D.children || [])),
                      (G.return = N),
                      (N = G);
                    break e;
                  } else {
                    n(N, A);
                    break;
                  }
                else t(N, A);
                A = A.sibling;
              }
              (G = ds(D, N.mode, G)), (G.return = N), (N = G);
            }
            return d(N);
          case X:
            return (ne = D._init), (D = ne(D._payload)), De(N, A, D, G);
        }
        if (me(D)) return ue(N, A, D, G);
        if (ae(D)) {
          if (((ne = ae(D)), typeof ne != "function")) throw Error(s(150));
          return (D = ne.call(D)), se(N, A, D, G);
        }
        if (typeof D.then == "function") return De(N, A, Tr(D), G);
        if (D.$$typeof === z) return De(N, A, ur(N, D), G);
        Er(N, D);
      }
      return (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
        ? ((D = "" + D),
          A !== null && A.tag === 6
            ? (n(N, A.sibling), (G = r(A, D)), (G.return = N), (N = G))
            : (n(N, A), (G = fs(D, N.mode, G)), (G.return = N), (N = G)),
          d(N))
        : n(N, A);
    }
    return function (N, A, D, G) {
      try {
        li = 0;
        var ne = De(N, A, D, G);
        return (il = null), ne;
      } catch (re) {
        if (re === $l || re === dr) throw re;
        var ge = Ct(29, re, null, N.mode);
        return (ge.lanes = G), (ge.return = N), ge;
      }
    };
  }
  var rl = rh(!0),
    oh = rh(!1),
    Gt = Q(null),
    tn = null;
  function Vn(e) {
    var t = e.alternate;
    J(Pe, Pe.current & 1),
      J(Gt, e),
      tn === null &&
        (t === null || tl.current !== null || t.memoizedState !== null) &&
        (tn = e);
  }
  function sh(e) {
    if (e.tag === 22) {
      if ((J(Pe, Pe.current), J(Gt, e), tn === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (tn = e);
      }
    } else Qn();
  }
  function Qn() {
    J(Pe, Pe.current), J(Gt, Gt.current);
  }
  function Sn(e) {
    F(Gt), tn === e && (tn = null), F(Pe);
  }
  var Pe = Q(0);
  function Ar(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || zc(n))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
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
  function Xs(e, t, n, l) {
    (t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : b({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ps = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = _t(),
        r = Bn(l);
      (r.payload = t),
        n != null && (r.callback = n),
        (t = Gn(e, r, l)),
        t !== null && (Dt(t, e, l), Fl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = _t(),
        r = Bn(l);
      (r.tag = 1),
        (r.payload = t),
        n != null && (r.callback = n),
        (t = Gn(e, r, l)),
        t !== null && (Dt(t, e, l), Fl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = _t(),
        l = Bn(n);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Gn(e, l, n)),
        t !== null && (Dt(t, e, n), Fl(t, e, n));
    },
  };
  function ch(e, t, n, l, r, c, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, c, d)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Gl(n, l) || !Gl(r, c)
        : !0
    );
  }
  function uh(e, t, n, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && Ps.enqueueReplaceState(t, t.state, null);
  }
  function Aa(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t) l !== "ref" && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = b({}, n));
      for (var r in e) n[r] === void 0 && (n[r] = e[r]);
    }
    return n;
  }
  var Cr =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function fh(e) {
    Cr(e);
  }
  function dh(e) {
    console.error(e);
  }
  function hh(e) {
    Cr(e);
  }
  function Or(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function mh(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function Zs(e, t, n) {
    return (
      (n = Bn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Or(e, t);
      }),
      n
    );
  }
  function ph(e) {
    return (e = Bn(e)), (e.tag = 3), e;
  }
  function yh(e, t, n, l) {
    var r = n.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var c = l.value;
      (e.payload = function () {
        return r(c);
      }),
        (e.callback = function () {
          mh(t, n, l);
        });
    }
    var d = n.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (e.callback = function () {
        mh(t, n, l),
          typeof r != "function" &&
            (Jn === null ? (Jn = new Set([this])) : Jn.add(this));
        var v = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function Qb(e, t, n, l, r) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && Pl(t, n, r, !0),
        (n = Gt.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              tn === null ? vc() : n.alternate === null && He === 0 && (He = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = r),
              l === ws
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([l])) : t.add(l),
                  bc(e, l, r)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === ws
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  bc(e, l, r)),
              !1
            );
        }
        throw Error(s(435, n.tag));
      }
      return bc(e, l, r), vc(), !1;
    }
    if (Ae)
      return (
        (t = Gt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = r),
            l !== ps && ((e = Error(s(422), { cause: l })), Xl(Lt(e, n))))
          : (l !== ps && ((t = Error(s(423), { cause: l })), Xl(Lt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (r &= -r),
            (e.lanes |= r),
            (l = Lt(l, n)),
            (r = Zs(e.stateNode, l, r)),
            As(e, r),
            He !== 4 && (He = 2)),
        !1
      );
    var c = Error(s(520), { cause: l });
    if (
      ((c = Lt(c, n)),
      di === null ? (di = [c]) : di.push(c),
      He !== 4 && (He = 2),
      t === null)
    )
      return !0;
    (l = Lt(l, n)), (n = t);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = r & -r),
            (n.lanes |= e),
            (e = Zs(n.stateNode, l, e)),
            As(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (c = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (c !== null &&
                  typeof c.componentDidCatch == "function" &&
                  (Jn === null || !Jn.has(c)))))
          )
            return (
              (n.flags |= 65536),
              (r &= -r),
              (n.lanes |= r),
              (r = ph(r)),
              yh(r, e, n, l),
              As(n, r),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var vh = Error(s(461)),
    Je = !1;
  function tt(e, t, n, l) {
    t.child = e === null ? oh(t, null, n, l) : rl(t, e.child, n, l);
  }
  function gh(e, t, n, l, r) {
    n = n.render;
    var c = t.ref;
    if ("ref" in l) {
      var d = {};
      for (var v in l) v !== "ref" && (d[v] = l[v]);
    } else d = l;
    return (
      wa(t),
      (l = _s(e, t, n, d, c, r)),
      (v = Ds()),
      e !== null && !Je
        ? (Ms(e, t, r), wn(e, t, r))
        : (Ae && v && hs(t), (t.flags |= 1), tt(e, t, l, r), t.child)
    );
  }
  function bh(e, t, n, l, r) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" &&
        !us(c) &&
        c.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = c), xh(e, t, c, l, r))
        : ((e = rr(n.type, null, l, t, t.mode, r)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), !tc(e, r))) {
      var d = c.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Gl), n(d, l) && e.ref === t.ref)
      )
        return wn(e, t, r);
    }
    return (
      (t.flags |= 1),
      (e = pn(c, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function xh(e, t, n, l, r) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Gl(c, l) && e.ref === t.ref)
        if (((Je = !1), (t.pendingProps = l = c), tc(e, r)))
          (e.flags & 131072) !== 0 && (Je = !0);
        else return (t.lanes = e.lanes), wn(e, t, r);
    }
    return Ks(e, t, n, l, r);
  }
  function Sh(e, t, n) {
    var l = t.pendingProps,
      r = l.children,
      c = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((l = c !== null ? c.baseLanes | n : n), e !== null)) {
          for (r = t.child = e.child, c = 0; r !== null; )
            (c = c | r.lanes | r.childLanes), (r = r.sibling);
          t.childLanes = c & ~l;
        } else (t.childLanes = 0), (t.child = null);
        return wh(e, t, l, n);
      }
      if ((n & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && fr(t, c !== null ? c.cachePool : null),
          c !== null ? xd(t, c) : Os(),
          sh(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          wh(e, t, c !== null ? c.baseLanes | n : n, n)
        );
    } else
      c !== null
        ? (fr(t, c.cachePool), xd(t, c), Qn(), (t.memoizedState = null))
        : (e !== null && fr(t, null), Os(), Qn());
    return tt(e, t, r, n), t.child;
  }
  function wh(e, t, n, l) {
    var r = Ss();
    return (
      (r = r === null ? null : { parent: Xe._currentValue, pool: r }),
      (t.memoizedState = { baseLanes: n, cachePool: r }),
      e !== null && fr(t, null),
      Os(),
      sh(t),
      e !== null && Pl(e, t, l, !0),
      null
    );
  }
  function Rr(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(s(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Ks(e, t, n, l, r) {
    return (
      wa(t),
      (n = _s(e, t, n, l, void 0, r)),
      (l = Ds()),
      e !== null && !Je
        ? (Ms(e, t, r), wn(e, t, r))
        : (Ae && l && hs(t), (t.flags |= 1), tt(e, t, n, r), t.child)
    );
  }
  function Th(e, t, n, l, r, c) {
    return (
      wa(t),
      (t.updateQueue = null),
      (n = wd(t, l, n, r)),
      Sd(e),
      (l = Ds()),
      e !== null && !Je
        ? (Ms(e, t, c), wn(e, t, c))
        : (Ae && l && hs(t), (t.flags |= 1), tt(e, t, n, c), t.child)
    );
  }
  function Eh(e, t, n, l, r) {
    if ((wa(t), t.stateNode === null)) {
      var c = Ja,
        d = n.contextType;
      typeof d == "object" && d !== null && (c = it(d)),
        (c = new n(l, c)),
        (t.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = Ps),
        (t.stateNode = c),
        (c._reactInternals = t),
        (c = t.stateNode),
        (c.props = l),
        (c.state = t.memoizedState),
        (c.refs = {}),
        Ts(t),
        (d = n.contextType),
        (c.context = typeof d == "object" && d !== null ? it(d) : Ja),
        (c.state = t.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == "function" && (Xs(t, n, d, l), (c.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((d = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          d !== c.state && Ps.enqueueReplaceState(c, c.state, null),
          Il(t, l, c, r),
          Wl(),
          (c.state = t.memoizedState)),
        typeof c.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      c = t.stateNode;
      var v = t.memoizedProps,
        T = Aa(n, v);
      c.props = T;
      var j = c.context,
        B = n.contextType;
      (d = Ja), typeof B == "object" && B !== null && (d = it(B));
      var P = n.getDerivedStateFromProps;
      (B =
        typeof P == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function"),
        (v = t.pendingProps !== v),
        B ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((v || j !== d) && uh(t, c, l, d)),
        (qn = !1);
      var U = t.memoizedState;
      (c.state = U),
        Il(t, l, c, r),
        Wl(),
        (j = t.memoizedState),
        v || U !== j || qn
          ? (typeof P == "function" && (Xs(t, n, P, l), (j = t.memoizedState)),
            (T = qn || ch(t, n, T, l, U, j, d))
              ? (B ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = j)),
            (c.props = l),
            (c.state = j),
            (c.context = d),
            (l = T))
          : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1));
    } else {
      (c = t.stateNode),
        Es(e, t),
        (d = t.memoizedProps),
        (B = Aa(n, d)),
        (c.props = B),
        (P = t.pendingProps),
        (U = c.context),
        (j = n.contextType),
        (T = Ja),
        typeof j == "object" && j !== null && (T = it(j)),
        (v = n.getDerivedStateFromProps),
        (j =
          typeof v == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function") ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((d !== P || U !== T) && uh(t, c, l, T)),
        (qn = !1),
        (U = t.memoizedState),
        (c.state = U),
        Il(t, l, c, r),
        Wl();
      var k = t.memoizedState;
      d !== P ||
      U !== k ||
      qn ||
      (e !== null && e.dependencies !== null && cr(e.dependencies))
        ? (typeof v == "function" && (Xs(t, n, v, l), (k = t.memoizedState)),
          (B =
            qn ||
            ch(t, n, B, l, U, k, T) ||
            (e !== null && e.dependencies !== null && cr(e.dependencies)))
            ? (j ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(l, k, T),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(l, k, T)),
              typeof c.componentDidUpdate == "function" && (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (d === e.memoizedProps && U === e.memoizedState) ||
                (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (d === e.memoizedProps && U === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = k)),
          (c.props = l),
          (c.state = k),
          (c.context = T),
          (l = B))
        : (typeof c.componentDidUpdate != "function" ||
            (d === e.memoizedProps && U === e.memoizedState) ||
            (t.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (d === e.memoizedProps && U === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (c = l),
      Rr(e, t),
      (l = (t.flags & 128) !== 0),
      c || l
        ? ((c = t.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != "function"
              ? null
              : c.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = rl(t, e.child, null, r)),
              (t.child = rl(t, null, n, r)))
            : tt(e, t, n, r),
          (t.memoizedState = c.state),
          (e = t.child))
        : (e = wn(e, t, r)),
      e
    );
  }
  function Ah(e, t, n, l) {
    return Ql(), (t.flags |= 256), tt(e, t, n, l), t.child;
  }
  var $s = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Js(e) {
    return { baseLanes: e, cachePool: dd() };
  }
  function Fs(e, t, n) {
    return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= Yt), e;
  }
  function Ch(e, t, n) {
    var l = t.pendingProps,
      r = !1,
      c = (t.flags & 128) !== 0,
      d;
    if (
      ((d = c) ||
        (d =
          e !== null && e.memoizedState === null ? !1 : (Pe.current & 2) !== 0),
      d && ((r = !0), (t.flags &= -129)),
      (d = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ae) {
        if ((r ? Vn(t) : Qn(), Ae)) {
          var v = Le,
            T;
          if ((T = v)) {
            e: {
              for (T = v, v = en; T.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break e;
                }
                if (((T = Jt(T.nextSibling)), T === null)) {
                  v = null;
                  break e;
                }
              }
              v = T;
            }
            v !== null
              ? ((t.memoizedState = {
                  dehydrated: v,
                  treeContext: va !== null ? { id: yn, overflow: vn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (T = Ct(18, null, null, 0)),
                (T.stateNode = v),
                (T.return = t),
                (t.child = T),
                (dt = t),
                (Le = null),
                (T = !0))
              : (T = !1);
          }
          T || xa(t);
        }
        if (
          ((v = t.memoizedState),
          v !== null && ((v = v.dehydrated), v !== null))
        )
          return zc(v) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        Sn(t);
      }
      return (
        (v = l.children),
        (l = l.fallback),
        r
          ? (Qn(),
            (r = t.mode),
            (v = Nr({ mode: "hidden", children: v }, r)),
            (l = ya(l, r, n, null)),
            (v.return = t),
            (l.return = t),
            (v.sibling = l),
            (t.child = v),
            (r = t.child),
            (r.memoizedState = Js(n)),
            (r.childLanes = Fs(e, d, n)),
            (t.memoizedState = $s),
            l)
          : (Vn(t), Ws(t, v))
      );
    }
    if (
      ((T = e.memoizedState), T !== null && ((v = T.dehydrated), v !== null))
    ) {
      if (c)
        t.flags & 256
          ? (Vn(t), (t.flags &= -257), (t = Is(e, t, n)))
          : t.memoizedState !== null
          ? (Qn(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (Qn(),
            (r = l.fallback),
            (v = t.mode),
            (l = Nr({ mode: "visible", children: l.children }, v)),
            (r = ya(r, v, n, null)),
            (r.flags |= 2),
            (l.return = t),
            (r.return = t),
            (l.sibling = r),
            (t.child = l),
            rl(t, e.child, null, n),
            (l = t.child),
            (l.memoizedState = Js(n)),
            (l.childLanes = Fs(e, d, n)),
            (t.memoizedState = $s),
            (t = r));
      else if ((Vn(t), zc(v))) {
        if (((d = v.nextSibling && v.nextSibling.dataset), d)) var j = d.dgst;
        (d = j),
          (l = Error(s(419))),
          (l.stack = ""),
          (l.digest = d),
          Xl({ value: l, source: null, stack: null }),
          (t = Is(e, t, n));
      } else if (
        (Je || Pl(e, t, n, !1), (d = (n & e.childLanes) !== 0), Je || d)
      ) {
        if (
          ((d = ze),
          d !== null &&
            ((l = n & -n),
            (l = (l & 42) !== 0 ? 1 : Uo(l)),
            (l = (l & (d.suspendedLanes | n)) !== 0 ? 0 : l),
            l !== 0 && l !== T.retryLane))
        )
          throw ((T.retryLane = l), $a(e, l), Dt(d, e, l), vh);
        v.data === "$?" || vc(), (t = Is(e, t, n));
      } else
        v.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = T.treeContext),
            (Le = Jt(v.nextSibling)),
            (dt = t),
            (Ae = !0),
            (ba = null),
            (en = !1),
            e !== null &&
              ((qt[Bt++] = yn),
              (qt[Bt++] = vn),
              (qt[Bt++] = va),
              (yn = e.id),
              (vn = e.overflow),
              (va = t)),
            (t = Ws(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return r
      ? (Qn(),
        (r = l.fallback),
        (v = t.mode),
        (T = e.child),
        (j = T.sibling),
        (l = pn(T, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = T.subtreeFlags & 65011712),
        j !== null ? (r = pn(j, r)) : ((r = ya(r, v, n, null)), (r.flags |= 2)),
        (r.return = t),
        (l.return = t),
        (l.sibling = r),
        (t.child = l),
        (l = r),
        (r = t.child),
        (v = e.child.memoizedState),
        v === null
          ? (v = Js(n))
          : ((T = v.cachePool),
            T !== null
              ? ((j = Xe._currentValue),
                (T = T.parent !== j ? { parent: j, pool: j } : T))
              : (T = dd()),
            (v = { baseLanes: v.baseLanes | n, cachePool: T })),
        (r.memoizedState = v),
        (r.childLanes = Fs(e, d, n)),
        (t.memoizedState = $s),
        l)
      : (Vn(t),
        (n = e.child),
        (e = n.sibling),
        (n = pn(n, { mode: "visible", children: l.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((d = t.deletions),
          d === null ? ((t.deletions = [e]), (t.flags |= 16)) : d.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Ws(e, t) {
    return (
      (t = Nr({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Nr(e, t) {
    return (
      (e = Ct(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function Is(e, t, n) {
    return (
      rl(t, e.child, null, n),
      (e = Ws(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Oh(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), vs(e.return, t, n);
  }
  function ec(e, t, n, l, r) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: r,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = l),
        (c.tail = n),
        (c.tailMode = r));
  }
  function Rh(e, t, n) {
    var l = t.pendingProps,
      r = l.revealOrder,
      c = l.tail;
    if ((tt(e, t, l.children, n), (l = Pe.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Oh(e, n, t);
          else if (e.tag === 19) Oh(e, n, t);
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
      l &= 1;
    }
    switch ((J(Pe, l), r)) {
      case "forwards":
        for (n = t.child, r = null; n !== null; )
          (e = n.alternate),
            e !== null && Ar(e) === null && (r = n),
            (n = n.sibling);
        (n = r),
          n === null
            ? ((r = t.child), (t.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          ec(t, !1, r, n, c);
        break;
      case "backwards":
        for (n = null, r = t.child, t.child = null; r !== null; ) {
          if (((e = r.alternate), e !== null && Ar(e) === null)) {
            t.child = r;
            break;
          }
          (e = r.sibling), (r.sibling = n), (n = r), (r = e);
        }
        ec(t, !0, n, null, c);
        break;
      case "together":
        ec(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function wn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      ($n |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Pl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, n = pn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = pn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function tc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && cr(e)));
  }
  function Xb(e, t, n) {
    switch (t.tag) {
      case 3:
        Ce(t, t.stateNode.containerInfo),
          Hn(t, Xe, e.memoizedState.cache),
          Ql();
        break;
      case 27:
      case 5:
        fn(t);
        break;
      case 4:
        Ce(t, t.stateNode.containerInfo);
        break;
      case 10:
        Hn(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Vn(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
            ? Ch(e, t, n)
            : (Vn(t), (e = wn(e, t, n)), e !== null ? e.sibling : null);
        Vn(t);
        break;
      case 19:
        var r = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || (Pl(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          r)
        ) {
          if (l) return Rh(e, t, n);
          t.flags |= 128;
        }
        if (
          ((r = t.memoizedState),
          r !== null &&
            ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
          J(Pe, Pe.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Sh(e, t, n);
      case 24:
        Hn(t, Xe, e.memoizedState.cache);
    }
    return wn(e, t, n);
  }
  function Nh(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Je = !0;
      else {
        if (!tc(e, n) && (t.flags & 128) === 0) return (Je = !1), Xb(e, t, n);
        Je = (e.flags & 131072) !== 0;
      }
    else (Je = !1), Ae && (t.flags & 1048576) !== 0 && id(t, sr, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            r = l._init;
          if (((l = r(l._payload)), (t.type = l), typeof l == "function"))
            us(l)
              ? ((e = Aa(l, e)), (t.tag = 1), (t = Eh(null, t, l, e, n)))
              : ((t.tag = 0), (t = Ks(null, t, l, e, n)));
          else {
            if (l != null) {
              if (((r = l.$$typeof), r === q)) {
                (t.tag = 11), (t = gh(null, t, l, e, n));
                break e;
              } else if (r === $) {
                (t.tag = 14), (t = bh(null, t, l, e, n));
                break e;
              }
            }
            throw ((t = he(l) || l), Error(s(306, t, "")));
          }
        }
        return t;
      case 0:
        return Ks(e, t, t.type, t.pendingProps, n);
      case 1:
        return (l = t.type), (r = Aa(l, t.pendingProps)), Eh(e, t, l, r, n);
      case 3:
        e: {
          if ((Ce(t, t.stateNode.containerInfo), e === null))
            throw Error(s(387));
          l = t.pendingProps;
          var c = t.memoizedState;
          (r = c.element), Es(e, t), Il(t, l, null, n);
          var d = t.memoizedState;
          if (
            ((l = d.cache),
            Hn(t, Xe, l),
            l !== c.cache && gs(t, [Xe], n, !0),
            Wl(),
            (l = d.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: l, isDehydrated: !1, cache: d.cache }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              t = Ah(e, t, l, n);
              break e;
            } else if (l !== r) {
              (r = Lt(Error(s(424)), t)), Xl(r), (t = Ah(e, t, l, n));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  Le = Jt(e.firstChild),
                  dt = t,
                  Ae = !0,
                  ba = null,
                  en = !0,
                  n = oh(t, null, l, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Ql(), l === r)) {
              t = wn(e, t, n);
              break e;
            }
            tt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Rr(e, t),
          e === null
            ? (n = jm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Ae ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = Vr(te.current).createElement(n)),
                (l[lt] = t),
                (l[pt] = e),
                at(l, n, e),
                $e(l),
                (t.stateNode = l))
            : (t.memoizedState = jm(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          fn(t),
          e === null &&
            Ae &&
            ((l = t.stateNode = _m(t.type, t.pendingProps, te.current)),
            (dt = t),
            (en = !0),
            (r = Le),
            In(t.type) ? ((Uc = r), (Le = Jt(l.firstChild))) : (Le = r)),
          tt(e, t, t.pendingProps.children, n),
          Rr(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ae &&
            ((r = l = Le) &&
              ((l = b0(l, t.type, t.pendingProps, en)),
              l !== null
                ? ((t.stateNode = l),
                  (dt = t),
                  (Le = Jt(l.firstChild)),
                  (en = !1),
                  (r = !0))
                : (r = !1)),
            r || xa(t)),
          fn(t),
          (r = t.type),
          (c = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (l = c.children),
          Dc(r, c) ? (l = null) : d !== null && Dc(r, d) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((r = _s(e, t, Lb, null, null, n)), (Si._currentValue = r)),
          Rr(e, t),
          tt(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ae &&
            ((e = n = Le) &&
              ((n = x0(n, t.pendingProps, en)),
              n !== null
                ? ((t.stateNode = n), (dt = t), (Le = null), (e = !0))
                : (e = !1)),
            e || xa(t)),
          null
        );
      case 13:
        return Ch(e, t, n);
      case 4:
        return (
          Ce(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = rl(t, null, l, n)) : tt(e, t, l, n),
          t.child
        );
      case 11:
        return gh(e, t, t.type, t.pendingProps, n);
      case 7:
        return tt(e, t, t.pendingProps, n), t.child;
      case 8:
        return tt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return tt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return (
          (l = t.pendingProps),
          Hn(t, t.type, l.value),
          tt(e, t, l.children, n),
          t.child
        );
      case 9:
        return (
          (r = t.type._context),
          (l = t.pendingProps.children),
          wa(t),
          (r = it(r)),
          (l = l(r)),
          (t.flags |= 1),
          tt(e, t, l, n),
          t.child
        );
      case 14:
        return bh(e, t, t.type, t.pendingProps, n);
      case 15:
        return xh(e, t, t.type, t.pendingProps, n);
      case 19:
        return Rh(e, t, n);
      case 31:
        return (
          (l = t.pendingProps),
          (n = t.mode),
          (l = { mode: l.mode, children: l.children }),
          e === null
            ? ((n = Nr(l, n)),
              (n.ref = t.ref),
              (t.child = n),
              (n.return = t),
              (t = n))
            : ((n = pn(e.child, l)),
              (n.ref = t.ref),
              (t.child = n),
              (n.return = t),
              (t = n)),
          t
        );
      case 22:
        return Sh(e, t, n);
      case 24:
        return (
          wa(t),
          (l = it(Xe)),
          e === null
            ? ((r = Ss()),
              r === null &&
                ((r = ze),
                (c = bs()),
                (r.pooledCache = c),
                c.refCount++,
                c !== null && (r.pooledCacheLanes |= n),
                (r = c)),
              (t.memoizedState = { parent: l, cache: r }),
              Ts(t),
              Hn(t, Xe, r))
            : ((e.lanes & n) !== 0 && (Es(e, t), Il(t, null, null, n), Wl()),
              (r = e.memoizedState),
              (c = t.memoizedState),
              r.parent !== l
                ? ((r = { parent: l, cache: l }),
                  (t.memoizedState = r),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = r),
                  Hn(t, Xe, l))
                : ((l = c.cache),
                  Hn(t, Xe, l),
                  l !== r.cache && gs(t, [Xe], n, !0))),
          tt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function Tn(e) {
    e.flags |= 4;
  }
  function _h(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Hm(t))) {
      if (
        ((t = Gt.current),
        t !== null &&
          ((we & 4194048) === we
            ? tn !== null
            : ((we & 62914560) !== we && (we & 536870912) === 0) || t !== tn))
      )
        throw ((Jl = ws), hd);
      e.flags |= 8192;
    }
  }
  function _r(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? sf() : 536870912), (e.lanes |= t), (ul |= t));
  }
  function ri(e, t) {
    if (!Ae)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), (n = n.sibling);
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      for (var r = e.child; r !== null; )
        (n |= r.lanes | r.childLanes),
          (l |= r.subtreeFlags & 65011712),
          (l |= r.flags & 65011712),
          (r.return = e),
          (r = r.sibling);
    else
      for (r = e.child; r !== null; )
        (n |= r.lanes | r.childLanes),
          (l |= r.subtreeFlags),
          (l |= r.flags),
          (r.return = e),
          (r = r.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = n), t;
  }
  function Pb(e, t, n) {
    var l = t.pendingProps;
    switch ((ms(t), t.tag)) {
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
        return ke(t), null;
      case 1:
        return ke(t), null;
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          bn(Xe),
          Ee(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (Vl(t)
              ? Tn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), sd())),
          ke(t),
          null
        );
      case 26:
        return (
          (n = t.memoizedState),
          e === null
            ? (Tn(t),
              n !== null ? (ke(t), _h(t, n)) : (ke(t), (t.flags &= -16777217)))
            : n
            ? n !== e.memoizedState
              ? (Tn(t), ke(t), _h(t, n))
              : (ke(t), (t.flags &= -16777217))
            : (e.memoizedProps !== l && Tn(t), ke(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        Zt(t), (n = te.current);
        var r = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== l && Tn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(s(166));
            return ke(t), null;
          }
          (e = le.current),
            Vl(t) ? rd(t) : ((e = _m(r, l, n)), (t.stateNode = e), Tn(t));
        }
        return ke(t), null;
      case 5:
        if ((Zt(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && Tn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(s(166));
            return ke(t), null;
          }
          if (((e = le.current), Vl(t))) rd(t);
          else {
            switch (((r = Vr(te.current)), e)) {
              case 1:
                e = r.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                e = r.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    e = r.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    e = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (e = r.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof l.is == "string"
                        ? r.createElement("select", { is: l.is })
                        : r.createElement("select")),
                      l.multiple
                        ? (e.multiple = !0)
                        : l.size && (e.size = l.size);
                    break;
                  default:
                    e =
                      typeof l.is == "string"
                        ? r.createElement(n, { is: l.is })
                        : r.createElement(n);
                }
            }
            (e[lt] = t), (e[pt] = l);
            e: for (r = t.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                (r.child.return = r), (r = r.child);
                continue;
              }
              if (r === t) break e;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === t) break e;
                r = r.return;
              }
              (r.sibling.return = r.return), (r = r.sibling);
            }
            t.stateNode = e;
            e: switch ((at(e, n, l), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Tn(t);
          }
        }
        return ke(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && Tn(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(s(166));
          if (((e = te.current), Vl(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (l = null),
              (r = dt),
              r !== null)
            )
              switch (r.tag) {
                case 27:
                case 5:
                  l = r.memoizedProps;
              }
            (e[lt] = t),
              (e = !!(
                e.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Tm(e.nodeValue, n)
              )),
              e || xa(t);
          } else (e = Vr(e).createTextNode(l)), (e[lt] = t), (t.stateNode = e);
        }
        return ke(t), null;
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((r = Vl(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!r) throw Error(s(318));
              if (
                ((r = t.memoizedState),
                (r = r !== null ? r.dehydrated : null),
                !r)
              )
                throw Error(s(317));
              r[lt] = t;
            } else
              Ql(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            ke(t), (r = !1);
          } else
            (r = sd()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = r),
              (r = !0);
          if (!r) return t.flags & 256 ? (Sn(t), t) : (Sn(t), null);
        }
        if ((Sn(t), (t.flags & 128) !== 0)) return (t.lanes = n), t;
        if (
          ((n = l !== null), (e = e !== null && e.memoizedState !== null), n)
        ) {
          (l = t.child),
            (r = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (r = l.alternate.memoizedState.cachePool.pool);
          var c = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (c = l.memoizedState.cachePool.pool),
            c !== r && (l.flags |= 2048);
        }
        return (
          n !== e && n && (t.child.flags |= 8192),
          _r(t, t.updateQueue),
          ke(t),
          null
        );
      case 4:
        return Ee(), e === null && Cc(t.stateNode.containerInfo), ke(t), null;
      case 10:
        return bn(t.type), ke(t), null;
      case 19:
        if ((F(Pe), (r = t.memoizedState), r === null)) return ke(t), null;
        if (((l = (t.flags & 128) !== 0), (c = r.rendering), c === null))
          if (l) ri(r, !1);
          else {
            if (He !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((c = Ar(e)), c !== null)) {
                  for (
                    t.flags |= 128,
                      ri(r, !1),
                      e = c.updateQueue,
                      t.updateQueue = e,
                      _r(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    ld(n, e), (n = n.sibling);
                  return J(Pe, (Pe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            r.tail !== null &&
              It() > jr &&
              ((t.flags |= 128), (l = !0), ri(r, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = Ar(c)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                _r(t, e),
                ri(r, !0),
                r.tail === null &&
                  r.tailMode === "hidden" &&
                  !c.alternate &&
                  !Ae)
              )
                return ke(t), null;
            } else
              2 * It() - r.renderingStartTime > jr &&
                n !== 536870912 &&
                ((t.flags |= 128), (l = !0), ri(r, !1), (t.lanes = 4194304));
          r.isBackwards
            ? ((c.sibling = t.child), (t.child = c))
            : ((e = r.last),
              e !== null ? (e.sibling = c) : (t.child = c),
              (r.last = c));
        }
        return r.tail !== null
          ? ((t = r.tail),
            (r.rendering = t),
            (r.tail = t.sibling),
            (r.renderingStartTime = It()),
            (t.sibling = null),
            (e = Pe.current),
            J(Pe, l ? (e & 1) | 2 : e & 1),
            t)
          : (ke(t), null);
      case 22:
      case 23:
        return (
          Sn(t),
          Rs(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ke(t),
          (n = t.updateQueue),
          n !== null && _r(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== n && (t.flags |= 2048),
          e !== null && F(Ta),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          bn(Xe),
          ke(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Zb(e, t) {
    switch ((ms(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          bn(Xe),
          Ee(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Zt(t), null;
      case 13:
        if (
          (Sn(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          Ql();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return F(Pe), null;
      case 4:
        return Ee(), null;
      case 10:
        return bn(t.type), null;
      case 22:
      case 23:
        return (
          Sn(t),
          Rs(),
          e !== null && F(Ta),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return bn(Xe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Dh(e, t) {
    switch ((ms(t), t.tag)) {
      case 3:
        bn(Xe), Ee();
        break;
      case 26:
      case 27:
      case 5:
        Zt(t);
        break;
      case 4:
        Ee();
        break;
      case 13:
        Sn(t);
        break;
      case 19:
        F(Pe);
        break;
      case 10:
        bn(t.type);
        break;
      case 22:
      case 23:
        Sn(t), Rs(), e !== null && F(Ta);
        break;
      case 24:
        bn(Xe);
    }
  }
  function oi(e, t) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var r = l.next;
        n = r;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var c = n.create,
              d = n.inst;
            (l = c()), (d.destroy = l);
          }
          n = n.next;
        } while (n !== r);
      }
    } catch (v) {
      Me(t, t.return, v);
    }
  }
  function Xn(e, t, n) {
    try {
      var l = t.updateQueue,
        r = l !== null ? l.lastEffect : null;
      if (r !== null) {
        var c = r.next;
        l = c;
        do {
          if ((l.tag & e) === e) {
            var d = l.inst,
              v = d.destroy;
            if (v !== void 0) {
              (d.destroy = void 0), (r = t);
              var T = n,
                j = v;
              try {
                j();
              } catch (B) {
                Me(r, T, B);
              }
            }
          }
          l = l.next;
        } while (l !== c);
      }
    } catch (B) {
      Me(t, t.return, B);
    }
  }
  function Mh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        bd(t, n);
      } catch (l) {
        Me(e, e.return, l);
      }
    }
  }
  function jh(e, t, n) {
    (n.props = Aa(e.type, e.memoizedProps)), (n.state = e.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (l) {
      Me(e, t, l);
    }
  }
  function si(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(l)) : (n.current = l);
      }
    } catch (r) {
      Me(e, t, r);
    }
  }
  function nn(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (r) {
          Me(e, t, r);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Me(e, t, r);
        }
      else n.current = null;
  }
  function zh(e) {
    var t = e.type,
      n = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (r) {
      Me(e, e.return, r);
    }
  }
  function nc(e, t, n) {
    try {
      var l = e.stateNode;
      m0(l, e.type, n, t), (l[pt] = t);
    } catch (r) {
      Me(e, e.return, r);
    }
  }
  function Uh(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && In(e.type)) ||
      e.tag === 4
    );
  }
  function ac(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Uh(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && In(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function lc(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
              ? n.ownerDocument.body
              : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Yr));
    else if (
      l !== 4 &&
      (l === 27 && In(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (lc(e, t, n), e = e.sibling; e !== null; )
        lc(e, t, n), (e = e.sibling);
  }
  function Dr(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (
      l !== 4 &&
      (l === 27 && In(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (Dr(e, t, n), e = e.sibling; e !== null; )
        Dr(e, t, n), (e = e.sibling);
  }
  function kh(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var l = e.type, r = t.attributes; r.length; )
        t.removeAttributeNode(r[0]);
      at(t, l, n), (t[lt] = e), (t[pt] = n);
    } catch (c) {
      Me(e, e.return, c);
    }
  }
  var En = !1,
    Be = !1,
    ic = !1,
    Lh = typeof WeakSet == "function" ? WeakSet : Set,
    Fe = null;
  function Kb(e, t) {
    if (((e = e.containerInfo), (Nc = $r), (e = Kf(e)), as(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var r = l.anchorOffset,
              c = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, c.nodeType;
            } catch {
              n = null;
              break e;
            }
            var d = 0,
              v = -1,
              T = -1,
              j = 0,
              B = 0,
              P = e,
              U = null;
            t: for (;;) {
              for (
                var k;
                P !== n || (r !== 0 && P.nodeType !== 3) || (v = d + r),
                  P !== c || (l !== 0 && P.nodeType !== 3) || (T = d + l),
                  P.nodeType === 3 && (d += P.nodeValue.length),
                  (k = P.firstChild) !== null;

              )
                (U = P), (P = k);
              for (;;) {
                if (P === e) break t;
                if (
                  (U === n && ++j === r && (v = d),
                  U === c && ++B === l && (T = d),
                  (k = P.nextSibling) !== null)
                )
                  break;
                (P = U), (U = P.parentNode);
              }
              P = k;
            }
            n = v === -1 || T === -1 ? null : { start: v, end: T };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      _c = { focusedElem: e, selectionRange: n }, $r = !1, Fe = t;
      Fe !== null;

    )
      if (
        ((t = Fe), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = t), (Fe = e);
      else
        for (; Fe !== null; ) {
          switch (((t = Fe), (c = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && c !== null) {
                (e = void 0),
                  (n = t),
                  (r = c.memoizedProps),
                  (c = c.memoizedState),
                  (l = n.stateNode);
                try {
                  var ue = Aa(n.type, r, n.elementType === n.type);
                  (e = l.getSnapshotBeforeUpdate(ue, c)),
                    (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (se) {
                  Me(n, n.return, se);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  jc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      jc(e);
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
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Fe = e);
            break;
          }
          Fe = t.return;
        }
  }
  function Hh(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Pn(e, n), l & 4 && oi(5, n);
        break;
      case 1:
        if ((Pn(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (d) {
              Me(n, n.return, d);
            }
          else {
            var r = Aa(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(r, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Me(n, n.return, d);
            }
          }
        l & 64 && Mh(n), l & 512 && si(n, n.return);
        break;
      case 3:
        if ((Pn(e, n), l & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            bd(e, t);
          } catch (d) {
            Me(n, n.return, d);
          }
        }
        break;
      case 27:
        t === null && l & 4 && kh(n);
      case 26:
      case 5:
        Pn(e, n), t === null && l & 4 && zh(n), l & 512 && si(n, n.return);
        break;
      case 12:
        Pn(e, n);
        break;
      case 13:
        Pn(e, n),
          l & 4 && Gh(e, n),
          l & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = a0.bind(null, n)), S0(e, n))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || En), !l)) {
          (t = (t !== null && t.memoizedState !== null) || Be), (r = En);
          var c = Be;
          (En = l),
            (Be = t) && !c ? Zn(e, n, (n.subtreeFlags & 8772) !== 0) : Pn(e, n),
            (En = r),
            (Be = c);
        }
        break;
      case 30:
        break;
      default:
        Pn(e, n);
    }
  }
  function qh(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), qh(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Ho(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Ue = null,
    gt = !1;
  function An(e, t, n) {
    for (n = n.child; n !== null; ) Bh(e, t, n), (n = n.sibling);
  }
  function Bh(e, t, n) {
    if (Tt && typeof Tt.onCommitFiberUnmount == "function")
      try {
        Tt.onCommitFiberUnmount(Nl, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Be || nn(n, t),
          An(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Be || nn(n, t);
        var l = Ue,
          r = gt;
        In(n.type) && ((Ue = n.stateNode), (gt = !1)),
          An(e, t, n),
          vi(n.stateNode),
          (Ue = l),
          (gt = r);
        break;
      case 5:
        Be || nn(n, t);
      case 6:
        if (
          ((l = Ue),
          (r = gt),
          (Ue = null),
          An(e, t, n),
          (Ue = l),
          (gt = r),
          Ue !== null)
        )
          if (gt)
            try {
              (Ue.nodeType === 9
                ? Ue.body
                : Ue.nodeName === "HTML"
                ? Ue.ownerDocument.body
                : Ue
              ).removeChild(n.stateNode);
            } catch (c) {
              Me(n, t, c);
            }
          else
            try {
              Ue.removeChild(n.stateNode);
            } catch (c) {
              Me(n, t, c);
            }
        break;
      case 18:
        Ue !== null &&
          (gt
            ? ((e = Ue),
              Rm(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                n.stateNode
              ),
              Ai(e))
            : Rm(Ue, n.stateNode));
        break;
      case 4:
        (l = Ue),
          (r = gt),
          (Ue = n.stateNode.containerInfo),
          (gt = !0),
          An(e, t, n),
          (Ue = l),
          (gt = r);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Be || Xn(2, n, t), Be || Xn(4, n, t), An(e, t, n);
        break;
      case 1:
        Be ||
          (nn(n, t),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function" && jh(n, t, l)),
          An(e, t, n);
        break;
      case 21:
        An(e, t, n);
        break;
      case 22:
        (Be = (l = Be) || n.memoizedState !== null), An(e, t, n), (Be = l);
        break;
      default:
        An(e, t, n);
    }
  }
  function Gh(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ai(e);
      } catch (n) {
        Me(t, t.return, n);
      }
  }
  function $b(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Lh()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Lh()),
          t
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function rc(e, t) {
    var n = $b(e);
    t.forEach(function (l) {
      var r = l0.bind(null, e, l);
      n.has(l) || (n.add(l), l.then(r, r));
    });
  }
  function Ot(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var r = n[l],
          c = e,
          d = t,
          v = d;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (In(v.type)) {
                (Ue = v.stateNode), (gt = !1);
                break e;
              }
              break;
            case 5:
              (Ue = v.stateNode), (gt = !1);
              break e;
            case 3:
            case 4:
              (Ue = v.stateNode.containerInfo), (gt = !0);
              break e;
          }
          v = v.return;
        }
        if (Ue === null) throw Error(s(160));
        Bh(c, d, r),
          (Ue = null),
          (gt = !1),
          (c = r.alternate),
          c !== null && (c.return = null),
          (r.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Yh(t, e), (t = t.sibling);
  }
  var $t = null;
  function Yh(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ot(t, e),
          Rt(e),
          l & 4 && (Xn(3, e, e.return), oi(3, e), Xn(5, e, e.return));
        break;
      case 1:
        Ot(t, e),
          Rt(e),
          l & 512 && (Be || n === null || nn(n, n.return)),
          l & 64 &&
            En &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? l : n.concat(l)))));
        break;
      case 26:
        var r = $t;
        if (
          (Ot(t, e),
          Rt(e),
          l & 512 && (Be || n === null || nn(n, n.return)),
          l & 4)
        ) {
          var c = n !== null ? n.memoizedState : null;
          if (((l = e.memoizedState), n === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type),
                    (n = e.memoizedProps),
                    (r = r.ownerDocument || r);
                  t: switch (l) {
                    case "title":
                      (c = r.getElementsByTagName("title")[0]),
                        (!c ||
                          c[Ml] ||
                          c[lt] ||
                          c.namespaceURI === "http://www.w3.org/2000/svg" ||
                          c.hasAttribute("itemprop")) &&
                          ((c = r.createElement(l)),
                          r.head.insertBefore(
                            c,
                            r.querySelector("head > title")
                          )),
                        at(c, l, n),
                        (c[lt] = e),
                        $e(c),
                        (l = c);
                      break e;
                    case "link":
                      var d = km("link", "href", r).get(l + (n.href || ""));
                      if (d) {
                        for (var v = 0; v < d.length; v++)
                          if (
                            ((c = d[v]),
                            c.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              c.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              c.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              c.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            d.splice(v, 1);
                            break t;
                          }
                      }
                      (c = r.createElement(l)),
                        at(c, l, n),
                        r.head.appendChild(c);
                      break;
                    case "meta":
                      if (
                        (d = km("meta", "content", r).get(
                          l + (n.content || "")
                        ))
                      ) {
                        for (v = 0; v < d.length; v++)
                          if (
                            ((c = d[v]),
                            c.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              c.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              c.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              c.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              c.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            d.splice(v, 1);
                            break t;
                          }
                      }
                      (c = r.createElement(l)),
                        at(c, l, n),
                        r.head.appendChild(c);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  (c[lt] = e), $e(c), (l = c);
                }
                e.stateNode = l;
              } else Lm(r, e.type, e.stateNode);
            else e.stateNode = Um(r, l, e.memoizedProps);
          else
            c !== l
              ? (c === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : c.count--,
                l === null
                  ? Lm(r, e.type, e.stateNode)
                  : Um(r, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                nc(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        Ot(t, e),
          Rt(e),
          l & 512 && (Be || n === null || nn(n, n.return)),
          n !== null && l & 4 && nc(e, e.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (Ot(t, e),
          Rt(e),
          l & 512 && (Be || n === null || nn(n, n.return)),
          e.flags & 32)
        ) {
          r = e.stateNode;
          try {
            Ya(r, "");
          } catch (k) {
            Me(e, e.return, k);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((r = e.memoizedProps), nc(e, r, n !== null ? n.memoizedProps : r)),
          l & 1024 && (ic = !0);
        break;
      case 6:
        if ((Ot(t, e), Rt(e), l & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (l = e.memoizedProps), (n = e.stateNode);
          try {
            n.nodeValue = l;
          } catch (k) {
            Me(e, e.return, k);
          }
        }
        break;
      case 3:
        if (
          ((Pr = null),
          (r = $t),
          ($t = Qr(t.containerInfo)),
          Ot(t, e),
          ($t = r),
          Rt(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Ai(t.containerInfo);
          } catch (k) {
            Me(e, e.return, k);
          }
        ic && ((ic = !1), Vh(e));
        break;
      case 4:
        (l = $t),
          ($t = Qr(e.stateNode.containerInfo)),
          Ot(t, e),
          Rt(e),
          ($t = l);
        break;
      case 12:
        Ot(t, e), Rt(e);
        break;
      case 13:
        Ot(t, e),
          Rt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (dc = It()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), rc(e, l)));
        break;
      case 22:
        r = e.memoizedState !== null;
        var T = n !== null && n.memoizedState !== null,
          j = En,
          B = Be;
        if (
          ((En = j || r),
          (Be = B || T),
          Ot(t, e),
          (Be = B),
          (En = j),
          Rt(e),
          l & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = r ? t._visibility & -2 : t._visibility | 1,
              r && (n === null || T || En || Be || Ca(e)),
              n = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                T = n = t;
                try {
                  if (((c = T.stateNode), r))
                    (d = c.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none");
                  else {
                    v = T.stateNode;
                    var P = T.memoizedProps.style,
                      U =
                        P != null && P.hasOwnProperty("display")
                          ? P.display
                          : null;
                    v.style.display =
                      U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                  }
                } catch (k) {
                  Me(T, T.return, k);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                T = t;
                try {
                  T.stateNode.nodeValue = r ? "" : T.memoizedProps;
                } catch (k) {
                  Me(T, T.return, k);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), (t = t.return);
            }
            n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), rc(e, n))));
        break;
      case 19:
        Ot(t, e),
          Rt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), rc(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ot(t, e), Rt(e);
    }
  }
  function Rt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (Uh(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var r = n.stateNode,
              c = ac(e);
            Dr(e, c, r);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (Ya(d, ""), (n.flags &= -33));
            var v = ac(e);
            Dr(e, v, d);
            break;
          case 3:
          case 4:
            var T = n.stateNode.containerInfo,
              j = ac(e);
            lc(e, j, T);
            break;
          default:
            throw Error(s(161));
        }
      } catch (B) {
        Me(e, e.return, B);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Vh(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Vh(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function Pn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Hh(e, t.alternate, t), (t = t.sibling);
  }
  function Ca(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Xn(4, t, t.return), Ca(t);
          break;
        case 1:
          nn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && jh(t, t.return, n),
            Ca(t);
          break;
        case 27:
          vi(t.stateNode);
        case 26:
        case 5:
          nn(t, t.return), Ca(t);
          break;
        case 22:
          t.memoizedState === null && Ca(t);
          break;
        case 30:
          Ca(t);
          break;
        default:
          Ca(t);
      }
      e = e.sibling;
    }
  }
  function Zn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        r = e,
        c = t,
        d = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Zn(r, c, n), oi(4, c);
          break;
        case 1:
          if (
            (Zn(r, c, n),
            (l = c),
            (r = l.stateNode),
            typeof r.componentDidMount == "function")
          )
            try {
              r.componentDidMount();
            } catch (j) {
              Me(l, l.return, j);
            }
          if (((l = c), (r = l.updateQueue), r !== null)) {
            var v = l.stateNode;
            try {
              var T = r.shared.hiddenCallbacks;
              if (T !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < T.length; r++)
                  gd(T[r], v);
            } catch (j) {
              Me(l, l.return, j);
            }
          }
          n && d & 64 && Mh(c), si(c, c.return);
          break;
        case 27:
          kh(c);
        case 26:
        case 5:
          Zn(r, c, n), n && l === null && d & 4 && zh(c), si(c, c.return);
          break;
        case 12:
          Zn(r, c, n);
          break;
        case 13:
          Zn(r, c, n), n && d & 4 && Gh(r, c);
          break;
        case 22:
          c.memoizedState === null && Zn(r, c, n), si(c, c.return);
          break;
        case 30:
          break;
        default:
          Zn(r, c, n);
      }
      t = t.sibling;
    }
  }
  function oc(e, t) {
    var n = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Zl(n));
  }
  function sc(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Zl(e));
  }
  function an(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Qh(e, t, n, l), (t = t.sibling);
  }
  function Qh(e, t, n, l) {
    var r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        an(e, t, n, l), r & 2048 && oi(9, t);
        break;
      case 1:
        an(e, t, n, l);
        break;
      case 3:
        an(e, t, n, l),
          r & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Zl(e)));
        break;
      case 12:
        if (r & 2048) {
          an(e, t, n, l), (e = t.stateNode);
          try {
            var c = t.memoizedProps,
              d = c.id,
              v = c.onPostCommit;
            typeof v == "function" &&
              v(
                d,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (T) {
            Me(t, t.return, T);
          }
        } else an(e, t, n, l);
        break;
      case 13:
        an(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        (c = t.stateNode),
          (d = t.alternate),
          t.memoizedState !== null
            ? c._visibility & 2
              ? an(e, t, n, l)
              : ci(e, t)
            : c._visibility & 2
            ? an(e, t, n, l)
            : ((c._visibility |= 2),
              ol(e, t, n, l, (t.subtreeFlags & 10256) !== 0)),
          r & 2048 && oc(d, t);
        break;
      case 24:
        an(e, t, n, l), r & 2048 && sc(t.alternate, t);
        break;
      default:
        an(e, t, n, l);
    }
  }
  function ol(e, t, n, l, r) {
    for (r = r && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var c = e,
        d = t,
        v = n,
        T = l,
        j = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          ol(c, d, v, T, r), oi(8, d);
          break;
        case 23:
          break;
        case 22:
          var B = d.stateNode;
          d.memoizedState !== null
            ? B._visibility & 2
              ? ol(c, d, v, T, r)
              : ci(c, d)
            : ((B._visibility |= 2), ol(c, d, v, T, r)),
            r && j & 2048 && oc(d.alternate, d);
          break;
        case 24:
          ol(c, d, v, T, r), r && j & 2048 && sc(d.alternate, d);
          break;
        default:
          ol(c, d, v, T, r);
      }
      t = t.sibling;
    }
  }
  function ci(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          r = l.flags;
        switch (l.tag) {
          case 22:
            ci(n, l), r & 2048 && oc(l.alternate, l);
            break;
          case 24:
            ci(n, l), r & 2048 && sc(l.alternate, l);
            break;
          default:
            ci(n, l);
        }
        t = t.sibling;
      }
  }
  var ui = 8192;
  function sl(e) {
    if (e.subtreeFlags & ui)
      for (e = e.child; e !== null; ) Xh(e), (e = e.sibling);
  }
  function Xh(e) {
    switch (e.tag) {
      case 26:
        sl(e),
          e.flags & ui &&
            e.memoizedState !== null &&
            z0($t, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        sl(e);
        break;
      case 3:
      case 4:
        var t = $t;
        ($t = Qr(e.stateNode.containerInfo)), sl(e), ($t = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = ui), (ui = 16777216), sl(e), (ui = t))
            : sl(e));
        break;
      default:
        sl(e);
    }
  }
  function Ph(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function fi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          (Fe = l), Kh(l, e);
        }
      Ph(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Zh(e), (e = e.sibling);
  }
  function Zh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        fi(e), e.flags & 2048 && Xn(9, e, e.return);
        break;
      case 3:
        fi(e);
        break;
      case 12:
        fi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Mr(e))
          : fi(e);
        break;
      default:
        fi(e);
    }
  }
  function Mr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          (Fe = l), Kh(l, e);
        }
      Ph(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Xn(8, t, t.return), Mr(t);
          break;
        case 22:
          (n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Mr(t));
          break;
        default:
          Mr(t);
      }
      e = e.sibling;
    }
  }
  function Kh(e, t) {
    for (; Fe !== null; ) {
      var n = Fe;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Xn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Zl(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) (l.return = n), (Fe = l);
      else
        e: for (n = e; Fe !== null; ) {
          l = Fe;
          var r = l.sibling,
            c = l.return;
          if ((qh(l), l === n)) {
            Fe = null;
            break e;
          }
          if (r !== null) {
            (r.return = c), (Fe = r);
            break e;
          }
          Fe = c;
        }
    }
  }
  var Jb = {
      getCacheForType: function (e) {
        var t = it(Xe),
          n = t.data.get(e);
        return n === void 0 && ((n = e()), t.data.set(e, n)), n;
      },
    },
    Fb = typeof WeakMap == "function" ? WeakMap : Map,
    Oe = 0,
    ze = null,
    xe = null,
    we = 0,
    Re = 0,
    Nt = null,
    Kn = !1,
    cl = !1,
    cc = !1,
    Cn = 0,
    He = 0,
    $n = 0,
    Oa = 0,
    uc = 0,
    Yt = 0,
    ul = 0,
    di = null,
    bt = null,
    fc = !1,
    dc = 0,
    jr = 1 / 0,
    zr = null,
    Jn = null,
    nt = 0,
    Fn = null,
    fl = null,
    dl = 0,
    hc = 0,
    mc = null,
    $h = null,
    hi = 0,
    pc = null;
  function _t() {
    if ((Oe & 2) !== 0 && we !== 0) return we & -we;
    if (C.T !== null) {
      var e = Ia;
      return e !== 0 ? e : wc();
    }
    return ff();
  }
  function Jh() {
    Yt === 0 && (Yt = (we & 536870912) === 0 || Ae ? of() : 536870912);
    var e = Gt.current;
    return e !== null && (e.flags |= 32), Yt;
  }
  function Dt(e, t, n) {
    ((e === ze && (Re === 2 || Re === 9)) || e.cancelPendingCommit !== null) &&
      (hl(e, 0), Wn(e, we, Yt, !1)),
      Dl(e, n),
      ((Oe & 2) === 0 || e !== ze) &&
        (e === ze &&
          ((Oe & 2) === 0 && (Oa |= n), He === 4 && Wn(e, we, Yt, !1)),
        ln(e));
  }
  function Fh(e, t, n) {
    if ((Oe & 6) !== 0) throw Error(s(327));
    var l = (!n && (t & 124) === 0 && (t & e.expiredLanes) === 0) || _l(e, t),
      r = l ? e0(e, t) : gc(e, t, !0),
      c = l;
    do {
      if (r === 0) {
        cl && !l && Wn(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), c && !Wb(n))) {
          (r = gc(e, t, !1)), (c = !1);
          continue;
        }
        if (r === 2) {
          if (((c = t), e.errorRecoveryDisabledLanes & c)) var d = 0;
          else
            (d = e.pendingLanes & -536870913),
              (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0);
          if (d !== 0) {
            t = d;
            e: {
              var v = e;
              r = di;
              var T = v.current.memoizedState.isDehydrated;
              if ((T && (hl(v, d).flags |= 256), (d = gc(v, d, !1)), d !== 2)) {
                if (cc && !T) {
                  (v.errorRecoveryDisabledLanes |= c), (Oa |= c), (r = 4);
                  break e;
                }
                (c = bt),
                  (bt = r),
                  c !== null && (bt === null ? (bt = c) : bt.push.apply(bt, c));
              }
              r = d;
            }
            if (((c = !1), r !== 2)) continue;
          }
        }
        if (r === 1) {
          hl(e, 0), Wn(e, t, 0, !0);
          break;
        }
        e: {
          switch (((l = e), (c = r), c)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Wn(l, t, Yt, !Kn);
              break e;
            case 2:
              bt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && ((r = dc + 300 - It()), 10 < r)) {
            if ((Wn(l, t, Yt, !Kn), Xi(l, 0, !0) !== 0)) break e;
            l.timeoutHandle = Cm(
              Wh.bind(null, l, n, bt, zr, fc, t, Yt, Oa, ul, Kn, c, 2, -0, 0),
              r
            );
            break e;
          }
          Wh(l, n, bt, zr, fc, t, Yt, Oa, ul, Kn, c, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    ln(e);
  }
  function Wh(e, t, n, l, r, c, d, v, T, j, B, P, U, k) {
    if (
      ((e.timeoutHandle = -1),
      (P = t.subtreeFlags),
      (P & 8192 || (P & 16785408) === 16785408) &&
        ((xi = { stylesheets: null, count: 0, unsuspend: j0 }),
        Xh(t),
        (P = U0()),
        P !== null))
    ) {
      (e.cancelPendingCommit = P(
        im.bind(null, e, t, c, n, l, r, d, v, T, B, 1, U, k)
      )),
        Wn(e, c, d, !j);
      return;
    }
    im(e, t, c, n, l, r, d, v, T);
  }
  function Wb(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var r = n[l],
            c = r.getSnapshot;
          r = r.value;
          try {
            if (!At(c(), r)) return !1;
          } catch {
            return !1;
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
  function Wn(e, t, n, l) {
    (t &= ~uc),
      (t &= ~Oa),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes);
    for (var r = t; 0 < r; ) {
      var c = 31 - Et(r),
        d = 1 << c;
      (l[c] = -1), (r &= ~d);
    }
    n !== 0 && cf(e, n, t);
  }
  function Ur() {
    return (Oe & 6) === 0 ? (mi(0), !1) : !0;
  }
  function yc() {
    if (xe !== null) {
      if (Re === 0) var e = xe.return;
      else (e = xe), (gn = Sa = null), js(e), (il = null), (li = 0), (e = xe);
      for (; e !== null; ) Dh(e.alternate, e), (e = e.return);
      xe = null;
    }
  }
  function hl(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && ((e.timeoutHandle = -1), y0(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      yc(),
      (ze = e),
      (xe = n = pn(e.current, null)),
      (we = t),
      (Re = 0),
      (Nt = null),
      (Kn = !1),
      (cl = _l(e, t)),
      (cc = !1),
      (ul = Yt = uc = Oa = $n = He = 0),
      (bt = di = null),
      (fc = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var r = 31 - Et(l),
          c = 1 << r;
        (t |= e[r]), (l &= ~c);
      }
    return (Cn = t), ar(), n;
  }
  function Ih(e, t) {
    (ye = null),
      (C.H = wr),
      t === $l || t === dr
        ? ((t = yd()), (Re = 3))
        : t === hd
        ? ((t = yd()), (Re = 4))
        : (Re =
            t === vh
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (Nt = t),
      xe === null && ((He = 1), Or(e, Lt(t, e.current)));
  }
  function em() {
    var e = C.H;
    return (C.H = wr), e === null ? wr : e;
  }
  function tm() {
    var e = C.A;
    return (C.A = Jb), e;
  }
  function vc() {
    (He = 4),
      Kn || ((we & 4194048) !== we && Gt.current !== null) || (cl = !0),
      (($n & 134217727) === 0 && (Oa & 134217727) === 0) ||
        ze === null ||
        Wn(ze, we, Yt, !1);
  }
  function gc(e, t, n) {
    var l = Oe;
    Oe |= 2;
    var r = em(),
      c = tm();
    (ze !== e || we !== t) && ((zr = null), hl(e, t)), (t = !1);
    var d = He;
    e: do
      try {
        if (Re !== 0 && xe !== null) {
          var v = xe,
            T = Nt;
          switch (Re) {
            case 8:
              yc(), (d = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Gt.current === null && (t = !0);
              var j = Re;
              if (((Re = 0), (Nt = null), ml(e, v, T, j), n && cl)) {
                d = 0;
                break e;
              }
              break;
            default:
              (j = Re), (Re = 0), (Nt = null), ml(e, v, T, j);
          }
        }
        Ib(), (d = He);
        break;
      } catch (B) {
        Ih(e, B);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (gn = Sa = null),
      (Oe = l),
      (C.H = r),
      (C.A = c),
      xe === null && ((ze = null), (we = 0), ar()),
      d
    );
  }
  function Ib() {
    for (; xe !== null; ) nm(xe);
  }
  function e0(e, t) {
    var n = Oe;
    Oe |= 2;
    var l = em(),
      r = tm();
    ze !== e || we !== t
      ? ((zr = null), (jr = It() + 500), hl(e, t))
      : (cl = _l(e, t));
    e: do
      try {
        if (Re !== 0 && xe !== null) {
          t = xe;
          var c = Nt;
          t: switch (Re) {
            case 1:
              (Re = 0), (Nt = null), ml(e, t, c, 1);
              break;
            case 2:
            case 9:
              if (md(c)) {
                (Re = 0), (Nt = null), am(t);
                break;
              }
              (t = function () {
                (Re !== 2 && Re !== 9) || ze !== e || (Re = 7), ln(e);
              }),
                c.then(t, t);
              break e;
            case 3:
              Re = 7;
              break e;
            case 4:
              Re = 5;
              break e;
            case 7:
              md(c)
                ? ((Re = 0), (Nt = null), am(t))
                : ((Re = 0), (Nt = null), ml(e, t, c, 7));
              break;
            case 5:
              var d = null;
              switch (xe.tag) {
                case 26:
                  d = xe.memoizedState;
                case 5:
                case 27:
                  var v = xe;
                  if (!d || Hm(d)) {
                    (Re = 0), (Nt = null);
                    var T = v.sibling;
                    if (T !== null) xe = T;
                    else {
                      var j = v.return;
                      j !== null ? ((xe = j), kr(j)) : (xe = null);
                    }
                    break t;
                  }
              }
              (Re = 0), (Nt = null), ml(e, t, c, 5);
              break;
            case 6:
              (Re = 0), (Nt = null), ml(e, t, c, 6);
              break;
            case 8:
              yc(), (He = 6);
              break e;
            default:
              throw Error(s(462));
          }
        }
        t0();
        break;
      } catch (B) {
        Ih(e, B);
      }
    while (!0);
    return (
      (gn = Sa = null),
      (C.H = l),
      (C.A = r),
      (Oe = n),
      xe !== null ? 0 : ((ze = null), (we = 0), ar(), He)
    );
  }
  function t0() {
    for (; xe !== null && !za(); ) nm(xe);
  }
  function nm(e) {
    var t = Nh(e.alternate, e, Cn);
    (e.memoizedProps = e.pendingProps), t === null ? kr(e) : (xe = t);
  }
  function am(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Th(n, t, t.pendingProps, t.type, void 0, we);
        break;
      case 11:
        t = Th(n, t, t.pendingProps, t.type.render, t.ref, we);
        break;
      case 5:
        js(t);
      default:
        Dh(n, t), (t = xe = ld(t, Cn)), (t = Nh(n, t, Cn));
    }
    (e.memoizedProps = e.pendingProps), t === null ? kr(e) : (xe = t);
  }
  function ml(e, t, n, l) {
    (gn = Sa = null), js(t), (il = null), (li = 0);
    var r = t.return;
    try {
      if (Qb(e, r, t, n, we)) {
        (He = 1), Or(e, Lt(n, e.current)), (xe = null);
        return;
      }
    } catch (c) {
      if (r !== null) throw ((xe = r), c);
      (He = 1), Or(e, Lt(n, e.current)), (xe = null);
      return;
    }
    t.flags & 32768
      ? (Ae || l === 1
          ? (e = !0)
          : cl || (we & 536870912) !== 0
          ? (e = !1)
          : ((Kn = e = !0),
            (l === 2 || l === 9 || l === 3 || l === 6) &&
              ((l = Gt.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        lm(t, e))
      : kr(t);
  }
  function kr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        lm(t, Kn);
        return;
      }
      e = t.return;
      var n = Pb(t.alternate, t, Cn);
      if (n !== null) {
        xe = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        xe = t;
        return;
      }
      xe = t = e;
    } while (t !== null);
    He === 0 && (He = 5);
  }
  function lm(e, t) {
    do {
      var n = Zb(e.alternate, e);
      if (n !== null) {
        (n.flags &= 32767), (xe = n);
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        xe = e;
        return;
      }
      xe = e = n;
    } while (e !== null);
    (He = 6), (xe = null);
  }
  function im(e, t, n, l, r, c, d, v, T) {
    e.cancelPendingCommit = null;
    do Lr();
    while (nt !== 0);
    if ((Oe & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (
        ((c = t.lanes | t.childLanes),
        (c |= ss),
        jg(e, n, c, d, v, T),
        e === ze && ((xe = ze = null), (we = 0)),
        (fl = t),
        (Fn = e),
        (dl = n),
        (hc = c),
        (mc = r),
        ($h = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            i0(Yi, function () {
              return um(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = C.T), (C.T = null), (r = Y.p), (Y.p = 2), (d = Oe), (Oe |= 4);
        try {
          Kb(e, t, n);
        } finally {
          (Oe = d), (Y.p = r), (C.T = l);
        }
      }
      (nt = 1), rm(), om(), sm();
    }
  }
  function rm() {
    if (nt === 1) {
      nt = 0;
      var e = Fn,
        t = fl,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        (n = C.T), (C.T = null);
        var l = Y.p;
        Y.p = 2;
        var r = Oe;
        Oe |= 4;
        try {
          Yh(t, e);
          var c = _c,
            d = Kf(e.containerInfo),
            v = c.focusedElem,
            T = c.selectionRange;
          if (
            d !== v &&
            v &&
            v.ownerDocument &&
            Zf(v.ownerDocument.documentElement, v)
          ) {
            if (T !== null && as(v)) {
              var j = T.start,
                B = T.end;
              if ((B === void 0 && (B = j), "selectionStart" in v))
                (v.selectionStart = j),
                  (v.selectionEnd = Math.min(B, v.value.length));
              else {
                var P = v.ownerDocument || document,
                  U = (P && P.defaultView) || window;
                if (U.getSelection) {
                  var k = U.getSelection(),
                    ue = v.textContent.length,
                    se = Math.min(T.start, ue),
                    De = T.end === void 0 ? se : Math.min(T.end, ue);
                  !k.extend && se > De && ((d = De), (De = se), (se = d));
                  var N = Pf(v, se),
                    A = Pf(v, De);
                  if (
                    N &&
                    A &&
                    (k.rangeCount !== 1 ||
                      k.anchorNode !== N.node ||
                      k.anchorOffset !== N.offset ||
                      k.focusNode !== A.node ||
                      k.focusOffset !== A.offset)
                  ) {
                    var D = P.createRange();
                    D.setStart(N.node, N.offset),
                      k.removeAllRanges(),
                      se > De
                        ? (k.addRange(D), k.extend(A.node, A.offset))
                        : (D.setEnd(A.node, A.offset), k.addRange(D));
                  }
                }
              }
            }
            for (P = [], k = v; (k = k.parentNode); )
              k.nodeType === 1 &&
                P.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < P.length;
              v++
            ) {
              var G = P[v];
              (G.element.scrollLeft = G.left), (G.element.scrollTop = G.top);
            }
          }
          ($r = !!Nc), (_c = Nc = null);
        } finally {
          (Oe = r), (Y.p = l), (C.T = n);
        }
      }
      (e.current = t), (nt = 2);
    }
  }
  function om() {
    if (nt === 2) {
      nt = 0;
      var e = Fn,
        t = fl,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        (n = C.T), (C.T = null);
        var l = Y.p;
        Y.p = 2;
        var r = Oe;
        Oe |= 4;
        try {
          Hh(e, t.alternate, t);
        } finally {
          (Oe = r), (Y.p = l), (C.T = n);
        }
      }
      nt = 3;
    }
  }
  function sm() {
    if (nt === 4 || nt === 3) {
      (nt = 0), Eg();
      var e = Fn,
        t = fl,
        n = dl,
        l = $h;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (nt = 5)
        : ((nt = 0), (fl = Fn = null), cm(e, e.pendingLanes));
      var r = e.pendingLanes;
      if (
        (r === 0 && (Jn = null),
        ko(n),
        (t = t.stateNode),
        Tt && typeof Tt.onCommitFiberRoot == "function")
      )
        try {
          Tt.onCommitFiberRoot(Nl, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (t = C.T), (r = Y.p), (Y.p = 2), (C.T = null);
        try {
          for (var c = e.onRecoverableError, d = 0; d < l.length; d++) {
            var v = l[d];
            c(v.value, { componentStack: v.stack });
          }
        } finally {
          (C.T = t), (Y.p = r);
        }
      }
      (dl & 3) !== 0 && Lr(),
        ln(e),
        (r = e.pendingLanes),
        (n & 4194090) !== 0 && (r & 42) !== 0
          ? e === pc
            ? hi++
            : ((hi = 0), (pc = e))
          : (hi = 0),
        mi(0);
    }
  }
  function cm(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Zl(t)));
  }
  function Lr(e) {
    return rm(), om(), sm(), um();
  }
  function um() {
    if (nt !== 5) return !1;
    var e = Fn,
      t = hc;
    hc = 0;
    var n = ko(dl),
      l = C.T,
      r = Y.p;
    try {
      (Y.p = 32 > n ? 32 : n), (C.T = null), (n = mc), (mc = null);
      var c = Fn,
        d = dl;
      if (((nt = 0), (fl = Fn = null), (dl = 0), (Oe & 6) !== 0))
        throw Error(s(331));
      var v = Oe;
      if (
        ((Oe |= 4),
        Zh(c.current),
        Qh(c, c.current, d, n),
        (Oe = v),
        mi(0, !1),
        Tt && typeof Tt.onPostCommitFiberRoot == "function")
      )
        try {
          Tt.onPostCommitFiberRoot(Nl, c);
        } catch {}
      return !0;
    } finally {
      (Y.p = r), (C.T = l), cm(e, t);
    }
  }
  function fm(e, t, n) {
    (t = Lt(n, t)),
      (t = Zs(e.stateNode, t, 2)),
      (e = Gn(e, t, 2)),
      e !== null && (Dl(e, 2), ln(e));
  }
  function Me(e, t, n) {
    if (e.tag === 3) fm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          fm(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Jn === null || !Jn.has(l)))
          ) {
            (e = Lt(n, e)),
              (n = ph(2)),
              (l = Gn(t, n, 2)),
              l !== null && (yh(n, l, t, e), Dl(l, 2), ln(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function bc(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Fb();
      var r = new Set();
      l.set(t, r);
    } else (r = l.get(t)), r === void 0 && ((r = new Set()), l.set(t, r));
    r.has(n) ||
      ((cc = !0), r.add(n), (e = n0.bind(null, e, t, n)), t.then(e, e));
  }
  function n0(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      ze === e &&
        (we & n) === n &&
        (He === 4 || (He === 3 && (we & 62914560) === we && 300 > It() - dc)
          ? (Oe & 2) === 0 && hl(e, 0)
          : (uc |= n),
        ul === we && (ul = 0)),
      ln(e);
  }
  function dm(e, t) {
    t === 0 && (t = sf()), (e = $a(e, t)), e !== null && (Dl(e, t), ln(e));
  }
  function a0(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), dm(e, n);
  }
  function l0(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          r = e.memoizedState;
        r !== null && (n = r.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    l !== null && l.delete(t), dm(e, n);
  }
  function i0(e, t) {
    return dn(e, t);
  }
  var Hr = null,
    pl = null,
    xc = !1,
    qr = !1,
    Sc = !1,
    Ra = 0;
  function ln(e) {
    e !== pl &&
      e.next === null &&
      (pl === null ? (Hr = pl = e) : (pl = pl.next = e)),
      (qr = !0),
      xc || ((xc = !0), o0());
  }
  function mi(e, t) {
    if (!Sc && qr) {
      Sc = !0;
      do
        for (var n = !1, l = Hr; l !== null; ) {
          if (e !== 0) {
            var r = l.pendingLanes;
            if (r === 0) var c = 0;
            else {
              var d = l.suspendedLanes,
                v = l.pingedLanes;
              (c = (1 << (31 - Et(42 | e) + 1)) - 1),
                (c &= r & ~(d & ~v)),
                (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0);
            }
            c !== 0 && ((n = !0), ym(l, c));
          } else
            (c = we),
              (c = Xi(
                l,
                l === ze ? c : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (c & 3) === 0 || _l(l, c) || ((n = !0), ym(l, c));
          l = l.next;
        }
      while (n);
      Sc = !1;
    }
  }
  function r0() {
    hm();
  }
  function hm() {
    qr = xc = !1;
    var e = 0;
    Ra !== 0 && (p0() && (e = Ra), (Ra = 0));
    for (var t = It(), n = null, l = Hr; l !== null; ) {
      var r = l.next,
        c = mm(l, t);
      c === 0
        ? ((l.next = null),
          n === null ? (Hr = r) : (n.next = r),
          r === null && (pl = n))
        : ((n = l), (e !== 0 || (c & 3) !== 0) && (qr = !0)),
        (l = r);
    }
    mi(e);
  }
  function mm(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        r = e.expirationTimes,
        c = e.pendingLanes & -62914561;
      0 < c;

    ) {
      var d = 31 - Et(c),
        v = 1 << d,
        T = r[d];
      T === -1
        ? ((v & n) === 0 || (v & l) !== 0) && (r[d] = Mg(v, t))
        : T <= t && (e.expiredLanes |= v),
        (c &= ~v);
    }
    if (
      ((t = ze),
      (n = we),
      (n = Xi(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (l = e.callbackNode),
      n === 0 ||
        (e === t && (Re === 2 || Re === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && Wt(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || _l(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && Wt(l), ko(n))) {
        case 2:
        case 8:
          n = lf;
          break;
        case 32:
          n = Yi;
          break;
        case 268435456:
          n = rf;
          break;
        default:
          n = Yi;
      }
      return (
        (l = pm.bind(null, e)),
        (n = dn(n, l)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      l !== null && l !== null && Wt(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function pm(e, t) {
    if (nt !== 0 && nt !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var n = e.callbackNode;
    if (Lr() && e.callbackNode !== n) return null;
    var l = we;
    return (
      (l = Xi(
        e,
        e === ze ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (Fh(e, l, t),
          mm(e, It()),
          e.callbackNode != null && e.callbackNode === n
            ? pm.bind(null, e)
            : null)
    );
  }
  function ym(e, t) {
    if (Lr()) return null;
    Fh(e, t, !0);
  }
  function o0() {
    v0(function () {
      (Oe & 6) !== 0 ? dn(af, r0) : hm();
    });
  }
  function wc() {
    return Ra === 0 && (Ra = of()), Ra;
  }
  function vm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : Ji("" + e);
  }
  function gm(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function s0(e, t, n, l, r) {
    if (t === "submit" && n && n.stateNode === r) {
      var c = vm((r[pt] || null).action),
        d = l.submitter;
      d &&
        ((t = (t = d[pt] || null)
          ? vm(t.formAction)
          : d.getAttribute("formAction")),
        t !== null && ((c = t), (d = null)));
      var v = new er("action", "action", null, l, r);
      e.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Ra !== 0) {
                  var T = d ? gm(r, d) : new FormData(r);
                  Ys(
                    n,
                    { pending: !0, data: T, method: r.method, action: c },
                    null,
                    T
                  );
                }
              } else
                typeof c == "function" &&
                  (v.preventDefault(),
                  (T = d ? gm(r, d) : new FormData(r)),
                  Ys(
                    n,
                    { pending: !0, data: T, method: r.method, action: c },
                    c,
                    T
                  ));
            },
            currentTarget: r,
          },
        ],
      });
    }
  }
  for (var Tc = 0; Tc < os.length; Tc++) {
    var Ec = os[Tc],
      c0 = Ec.toLowerCase(),
      u0 = Ec[0].toUpperCase() + Ec.slice(1);
    Kt(c0, "on" + u0);
  }
  Kt(Ff, "onAnimationEnd"),
    Kt(Wf, "onAnimationIteration"),
    Kt(If, "onAnimationStart"),
    Kt("dblclick", "onDoubleClick"),
    Kt("focusin", "onFocus"),
    Kt("focusout", "onBlur"),
    Kt(Ob, "onTransitionRun"),
    Kt(Rb, "onTransitionStart"),
    Kt(Nb, "onTransitionCancel"),
    Kt(ed, "onTransitionEnd"),
    qa("onMouseEnter", ["mouseout", "mouseover"]),
    qa("onMouseLeave", ["mouseout", "mouseover"]),
    qa("onPointerEnter", ["pointerout", "pointerover"]),
    qa("onPointerLeave", ["pointerout", "pointerover"]),
    da(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    da(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    da(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    da(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    da(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var pi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    f0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(pi)
    );
  function bm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        r = l.event;
      l = l.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var d = l.length - 1; 0 <= d; d--) {
            var v = l[d],
              T = v.instance,
              j = v.currentTarget;
            if (((v = v.listener), T !== c && r.isPropagationStopped()))
              break e;
            (c = v), (r.currentTarget = j);
            try {
              c(r);
            } catch (B) {
              Cr(B);
            }
            (r.currentTarget = null), (c = T);
          }
        else
          for (d = 0; d < l.length; d++) {
            if (
              ((v = l[d]),
              (T = v.instance),
              (j = v.currentTarget),
              (v = v.listener),
              T !== c && r.isPropagationStopped())
            )
              break e;
            (c = v), (r.currentTarget = j);
            try {
              c(r);
            } catch (B) {
              Cr(B);
            }
            (r.currentTarget = null), (c = T);
          }
      }
    }
  }
  function Se(e, t) {
    var n = t[Lo];
    n === void 0 && (n = t[Lo] = new Set());
    var l = e + "__bubble";
    n.has(l) || (xm(t, e, 2, !1), n.add(l));
  }
  function Ac(e, t, n) {
    var l = 0;
    t && (l |= 4), xm(n, e, l, t);
  }
  var Br = "_reactListening" + Math.random().toString(36).slice(2);
  function Cc(e) {
    if (!e[Br]) {
      (e[Br] = !0),
        hf.forEach(function (n) {
          n !== "selectionchange" && (f0.has(n) || Ac(n, !1, e), Ac(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Br] || ((t[Br] = !0), Ac("selectionchange", !1, t));
    }
  }
  function xm(e, t, n, l) {
    switch (Qm(t)) {
      case 2:
        var r = H0;
        break;
      case 8:
        r = q0;
        break;
      default:
        r = Bc;
    }
    (n = r.bind(null, t, n, e)),
      (r = void 0),
      !Ko ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (r = !0),
      l
        ? r !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: r })
          : e.addEventListener(t, n, !0)
        : r !== void 0
        ? e.addEventListener(t, n, { passive: r })
        : e.addEventListener(t, n, !1);
  }
  function Oc(e, t, n, l, r) {
    var c = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var d = l.tag;
        if (d === 3 || d === 4) {
          var v = l.stateNode.containerInfo;
          if (v === r) break;
          if (d === 4)
            for (d = l.return; d !== null; ) {
              var T = d.tag;
              if ((T === 3 || T === 4) && d.stateNode.containerInfo === r)
                return;
              d = d.return;
            }
          for (; v !== null; ) {
            if (((d = ka(v)), d === null)) return;
            if (((T = d.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              l = c = d;
              continue e;
            }
            v = v.parentNode;
          }
        }
        l = l.return;
      }
    Of(function () {
      var j = c,
        B = Po(n),
        P = [];
      e: {
        var U = td.get(e);
        if (U !== void 0) {
          var k = er,
            ue = e;
          switch (e) {
            case "keypress":
              if (Wi(n) === 0) break e;
            case "keydown":
            case "keyup":
              k = ib;
              break;
            case "focusin":
              (ue = "focus"), (k = Wo);
              break;
            case "focusout":
              (ue = "blur"), (k = Wo);
              break;
            case "beforeblur":
            case "afterblur":
              k = Wo;
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
              k = _f;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = Zg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = sb;
              break;
            case Ff:
            case Wf:
            case If:
              k = Jg;
              break;
            case ed:
              k = ub;
              break;
            case "scroll":
            case "scrollend":
              k = Xg;
              break;
            case "wheel":
              k = db;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = Wg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = Mf;
              break;
            case "toggle":
            case "beforetoggle":
              k = mb;
          }
          var se = (t & 4) !== 0,
            De = !se && (e === "scroll" || e === "scrollend"),
            N = se ? (U !== null ? U + "Capture" : null) : U;
          se = [];
          for (var A = j, D; A !== null; ) {
            var G = A;
            if (
              ((D = G.stateNode),
              (G = G.tag),
              (G !== 5 && G !== 26 && G !== 27) ||
                D === null ||
                N === null ||
                ((G = zl(A, N)), G != null && se.push(yi(A, G, D))),
              De)
            )
              break;
            A = A.return;
          }
          0 < se.length &&
            ((U = new k(U, ue, null, n, B)),
            P.push({ event: U, listeners: se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((U = e === "mouseover" || e === "pointerover"),
            (k = e === "mouseout" || e === "pointerout"),
            U &&
              n !== Xo &&
              (ue = n.relatedTarget || n.fromElement) &&
              (ka(ue) || ue[Ua]))
          )
            break e;
          if (
            (k || U) &&
            ((U =
              B.window === B
                ? B
                : (U = B.ownerDocument)
                ? U.defaultView || U.parentWindow
                : window),
            k
              ? ((ue = n.relatedTarget || n.toElement),
                (k = j),
                (ue = ue ? ka(ue) : null),
                ue !== null &&
                  ((De = f(ue)),
                  (se = ue.tag),
                  ue !== De || (se !== 5 && se !== 27 && se !== 6)) &&
                  (ue = null))
              : ((k = null), (ue = j)),
            k !== ue)
          ) {
            if (
              ((se = _f),
              (G = "onMouseLeave"),
              (N = "onMouseEnter"),
              (A = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((se = Mf),
                (G = "onPointerLeave"),
                (N = "onPointerEnter"),
                (A = "pointer")),
              (De = k == null ? U : jl(k)),
              (D = ue == null ? U : jl(ue)),
              (U = new se(G, A + "leave", k, n, B)),
              (U.target = De),
              (U.relatedTarget = D),
              (G = null),
              ka(B) === j &&
                ((se = new se(N, A + "enter", ue, n, B)),
                (se.target = D),
                (se.relatedTarget = De),
                (G = se)),
              (De = G),
              k && ue)
            )
              t: {
                for (se = k, N = ue, A = 0, D = se; D; D = yl(D)) A++;
                for (D = 0, G = N; G; G = yl(G)) D++;
                for (; 0 < A - D; ) (se = yl(se)), A--;
                for (; 0 < D - A; ) (N = yl(N)), D--;
                for (; A--; ) {
                  if (se === N || (N !== null && se === N.alternate)) break t;
                  (se = yl(se)), (N = yl(N));
                }
                se = null;
              }
            else se = null;
            k !== null && Sm(P, U, k, se, !1),
              ue !== null && De !== null && Sm(P, De, ue, se, !0);
          }
        }
        e: {
          if (
            ((U = j ? jl(j) : window),
            (k = U.nodeName && U.nodeName.toLowerCase()),
            k === "select" || (k === "input" && U.type === "file"))
          )
            var ne = Bf;
          else if (Hf(U))
            if (Gf) ne = Eb;
            else {
              ne = wb;
              var ge = Sb;
            }
          else
            (k = U.nodeName),
              !k ||
              k.toLowerCase() !== "input" ||
              (U.type !== "checkbox" && U.type !== "radio")
                ? j && Qo(j.elementType) && (ne = Bf)
                : (ne = Tb);
          if (ne && (ne = ne(e, j))) {
            qf(P, ne, n, B);
            break e;
          }
          ge && ge(e, U, j),
            e === "focusout" &&
              j &&
              U.type === "number" &&
              j.memoizedProps.value != null &&
              Vo(U, "number", U.value);
        }
        switch (((ge = j ? jl(j) : window), e)) {
          case "focusin":
            (Hf(ge) || ge.contentEditable === "true") &&
              ((Pa = ge), (ls = j), (Yl = null));
            break;
          case "focusout":
            Yl = ls = Pa = null;
            break;
          case "mousedown":
            is = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (is = !1), $f(P, n, B);
            break;
          case "selectionchange":
            if (Cb) break;
          case "keydown":
          case "keyup":
            $f(P, n, B);
        }
        var re;
        if (es)
          e: {
            switch (e) {
              case "compositionstart":
                var ce = "onCompositionStart";
                break e;
              case "compositionend":
                ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ce = "onCompositionUpdate";
                break e;
            }
            ce = void 0;
          }
        else
          Xa
            ? kf(e, n) && (ce = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (ce = "onCompositionStart");
        ce &&
          (jf &&
            n.locale !== "ko" &&
            (Xa || ce !== "onCompositionStart"
              ? ce === "onCompositionEnd" && Xa && (re = Rf())
              : ((Ln = B),
                ($o = "value" in Ln ? Ln.value : Ln.textContent),
                (Xa = !0))),
          (ge = Gr(j, ce)),
          0 < ge.length &&
            ((ce = new Df(ce, e, null, n, B)),
            P.push({ event: ce, listeners: ge }),
            re
              ? (ce.data = re)
              : ((re = Lf(n)), re !== null && (ce.data = re)))),
          (re = yb ? vb(e, n) : gb(e, n)) &&
            ((ce = Gr(j, "onBeforeInput")),
            0 < ce.length &&
              ((ge = new Df("onBeforeInput", "beforeinput", null, n, B)),
              P.push({ event: ge, listeners: ce }),
              (ge.data = re))),
          s0(P, e, j, n, B);
      }
      bm(P, t);
    });
  }
  function yi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Gr(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var r = e,
        c = r.stateNode;
      if (
        ((r = r.tag),
        (r !== 5 && r !== 26 && r !== 27) ||
          c === null ||
          ((r = zl(e, n)),
          r != null && l.unshift(yi(e, r, c)),
          (r = zl(e, t)),
          r != null && l.push(yi(e, r, c))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function yl(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Sm(e, t, n, l, r) {
    for (var c = t._reactName, d = []; n !== null && n !== l; ) {
      var v = n,
        T = v.alternate,
        j = v.stateNode;
      if (((v = v.tag), T !== null && T === l)) break;
      (v !== 5 && v !== 26 && v !== 27) ||
        j === null ||
        ((T = j),
        r
          ? ((j = zl(n, c)), j != null && d.unshift(yi(n, j, T)))
          : r || ((j = zl(n, c)), j != null && d.push(yi(n, j, T)))),
        (n = n.return);
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var d0 = /\r\n?/g,
    h0 = /\u0000|\uFFFD/g;
  function wm(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        d0,
        `
`
      )
      .replace(h0, "");
  }
  function Tm(e, t) {
    return (t = wm(t)), wm(e) === t;
  }
  function Yr() {}
  function _e(e, t, n, l, r, c) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || Ya(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            t !== "body" &&
            Ya(e, "" + l);
        break;
      case "className":
        Zi(e, "class", l);
        break;
      case "tabIndex":
        Zi(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Zi(e, n, l);
        break;
      case "style":
        Af(e, l, c);
        break;
      case "data":
        if (t !== "object") {
          Zi(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        (l = Ji("" + l)), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" &&
            (n === "formAction"
              ? (t !== "input" && _e(e, t, "name", r.name, r, null),
                _e(e, t, "formEncType", r.formEncType, r, null),
                _e(e, t, "formMethod", r.formMethod, r, null),
                _e(e, t, "formTarget", r.formTarget, r, null))
              : (_e(e, t, "encType", r.encType, r, null),
                _e(e, t, "method", r.method, r, null),
                _e(e, t, "target", r.target, r, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        (l = Ji("" + l)), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = Yr);
        break;
      case "onScroll":
        l != null && Se("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Se("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((n = l.__html), n != null)) {
            if (r.children != null) throw Error(s(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
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
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (n = Ji("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(n, "" + l)
          : e.removeAttribute(n);
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
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(n, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(n)
          : e.setAttribute(n, l);
        break;
      case "popover":
        Se("beforetoggle", e), Se("toggle", e), Pi(e, "popover", l);
        break;
      case "xlinkActuate":
        hn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        hn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        hn(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        hn(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        hn(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        hn(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        hn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        hn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        hn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Pi(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Vg.get(n) || n), Pi(e, n, l));
    }
  }
  function Rc(e, t, n, l, r, c) {
    switch (n) {
      case "style":
        Af(e, l, c);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((n = l.__html), n != null)) {
            if (r.children != null) throw Error(s(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Ya(e, l)
          : (typeof l == "number" || typeof l == "bigint") && Ya(e, "" + l);
        break;
      case "onScroll":
        l != null && Se("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Se("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = Yr);
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
        if (!mf.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((r = n.endsWith("Capture")),
              (t = n.slice(2, r ? n.length - 7 : void 0)),
              (c = e[pt] || null),
              (c = c != null ? c[n] : null),
              typeof c == "function" && e.removeEventListener(t, c, r),
              typeof l == "function")
            ) {
              typeof c != "function" &&
                c !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, l, r);
              break e;
            }
            n in e
              ? (e[n] = l)
              : l === !0
              ? e.setAttribute(n, "")
              : Pi(e, n, l);
          }
    }
  }
  function at(e, t, n) {
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
        Se("error", e), Se("load", e);
        var l = !1,
          r = !1,
          c;
        for (c in n)
          if (n.hasOwnProperty(c)) {
            var d = n[c];
            if (d != null)
              switch (c) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  _e(e, t, c, d, n, null);
              }
          }
        r && _e(e, t, "srcSet", n.srcSet, n, null),
          l && _e(e, t, "src", n.src, n, null);
        return;
      case "input":
        Se("invalid", e);
        var v = (c = d = r = null),
          T = null,
          j = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var B = n[l];
            if (B != null)
              switch (l) {
                case "name":
                  r = B;
                  break;
                case "type":
                  d = B;
                  break;
                case "checked":
                  T = B;
                  break;
                case "defaultChecked":
                  j = B;
                  break;
                case "value":
                  c = B;
                  break;
                case "defaultValue":
                  v = B;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (B != null) throw Error(s(137, t));
                  break;
                default:
                  _e(e, t, l, B, n, null);
              }
          }
        Sf(e, c, v, T, j, d, r, !1), Ki(e);
        return;
      case "select":
        Se("invalid", e), (l = d = c = null);
        for (r in n)
          if (n.hasOwnProperty(r) && ((v = n[r]), v != null))
            switch (r) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                d = v;
                break;
              case "multiple":
                l = v;
              default:
                _e(e, t, r, v, n, null);
            }
        (t = c),
          (n = d),
          (e.multiple = !!l),
          t != null ? Ga(e, !!l, t, !1) : n != null && Ga(e, !!l, n, !0);
        return;
      case "textarea":
        Se("invalid", e), (c = r = l = null);
        for (d in n)
          if (n.hasOwnProperty(d) && ((v = n[d]), v != null))
            switch (d) {
              case "value":
                l = v;
                break;
              case "defaultValue":
                r = v;
                break;
              case "children":
                c = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(s(91));
                break;
              default:
                _e(e, t, d, v, n, null);
            }
        Tf(e, l, r, c), Ki(e);
        return;
      case "option":
        for (T in n)
          n.hasOwnProperty(T) &&
            ((l = n[T]), l != null) &&
            (T === "selected"
              ? (e.selected =
                  l && typeof l != "function" && typeof l != "symbol")
              : _e(e, t, T, l, n, null));
        return;
      case "dialog":
        Se("beforetoggle", e), Se("toggle", e), Se("cancel", e), Se("close", e);
        break;
      case "iframe":
      case "object":
        Se("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < pi.length; l++) Se(pi[l], e);
        break;
      case "image":
        Se("error", e), Se("load", e);
        break;
      case "details":
        Se("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Se("error", e), Se("load", e);
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
        for (j in n)
          if (n.hasOwnProperty(j) && ((l = n[j]), l != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                _e(e, t, j, l, n, null);
            }
        return;
      default:
        if (Qo(t)) {
          for (B in n)
            n.hasOwnProperty(B) &&
              ((l = n[B]), l !== void 0 && Rc(e, t, B, l, n, void 0));
          return;
        }
    }
    for (v in n)
      n.hasOwnProperty(v) && ((l = n[v]), l != null && _e(e, t, v, l, n, null));
  }
  function m0(e, t, n, l) {
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
        var r = null,
          c = null,
          d = null,
          v = null,
          T = null,
          j = null,
          B = null;
        for (k in n) {
          var P = n[k];
          if (n.hasOwnProperty(k) && P != null)
            switch (k) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = P;
              default:
                l.hasOwnProperty(k) || _e(e, t, k, null, l, P);
            }
        }
        for (var U in l) {
          var k = l[U];
          if (((P = n[U]), l.hasOwnProperty(U) && (k != null || P != null)))
            switch (U) {
              case "type":
                c = k;
                break;
              case "name":
                r = k;
                break;
              case "checked":
                j = k;
                break;
              case "defaultChecked":
                B = k;
                break;
              case "value":
                d = k;
                break;
              case "defaultValue":
                v = k;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (k != null) throw Error(s(137, t));
                break;
              default:
                k !== P && _e(e, t, U, k, l, P);
            }
        }
        Yo(e, d, v, T, j, B, c, r);
        return;
      case "select":
        k = d = v = U = null;
        for (c in n)
          if (((T = n[c]), n.hasOwnProperty(c) && T != null))
            switch (c) {
              case "value":
                break;
              case "multiple":
                k = T;
              default:
                l.hasOwnProperty(c) || _e(e, t, c, null, l, T);
            }
        for (r in l)
          if (
            ((c = l[r]),
            (T = n[r]),
            l.hasOwnProperty(r) && (c != null || T != null))
          )
            switch (r) {
              case "value":
                U = c;
                break;
              case "defaultValue":
                v = c;
                break;
              case "multiple":
                d = c;
              default:
                c !== T && _e(e, t, r, c, l, T);
            }
        (t = v),
          (n = d),
          (l = k),
          U != null
            ? Ga(e, !!n, U, !1)
            : !!l != !!n &&
              (t != null ? Ga(e, !!n, t, !0) : Ga(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        k = U = null;
        for (v in n)
          if (
            ((r = n[v]),
            n.hasOwnProperty(v) && r != null && !l.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                _e(e, t, v, null, l, r);
            }
        for (d in l)
          if (
            ((r = l[d]),
            (c = n[d]),
            l.hasOwnProperty(d) && (r != null || c != null))
          )
            switch (d) {
              case "value":
                U = r;
                break;
              case "defaultValue":
                k = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(s(91));
                break;
              default:
                r !== c && _e(e, t, d, r, l, c);
            }
        wf(e, U, k);
        return;
      case "option":
        for (var ue in n)
          (U = n[ue]),
            n.hasOwnProperty(ue) &&
              U != null &&
              !l.hasOwnProperty(ue) &&
              (ue === "selected"
                ? (e.selected = !1)
                : _e(e, t, ue, null, l, U));
        for (T in l)
          (U = l[T]),
            (k = n[T]),
            l.hasOwnProperty(T) &&
              U !== k &&
              (U != null || k != null) &&
              (T === "selected"
                ? (e.selected =
                    U && typeof U != "function" && typeof U != "symbol")
                : _e(e, t, T, U, l, k));
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
        for (var se in n)
          (U = n[se]),
            n.hasOwnProperty(se) &&
              U != null &&
              !l.hasOwnProperty(se) &&
              _e(e, t, se, null, l, U);
        for (j in l)
          if (
            ((U = l[j]),
            (k = n[j]),
            l.hasOwnProperty(j) && U !== k && (U != null || k != null))
          )
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(s(137, t));
                break;
              default:
                _e(e, t, j, U, l, k);
            }
        return;
      default:
        if (Qo(t)) {
          for (var De in n)
            (U = n[De]),
              n.hasOwnProperty(De) &&
                U !== void 0 &&
                !l.hasOwnProperty(De) &&
                Rc(e, t, De, void 0, l, U);
          for (B in l)
            (U = l[B]),
              (k = n[B]),
              !l.hasOwnProperty(B) ||
                U === k ||
                (U === void 0 && k === void 0) ||
                Rc(e, t, B, U, l, k);
          return;
        }
    }
    for (var N in n)
      (U = n[N]),
        n.hasOwnProperty(N) &&
          U != null &&
          !l.hasOwnProperty(N) &&
          _e(e, t, N, null, l, U);
    for (P in l)
      (U = l[P]),
        (k = n[P]),
        !l.hasOwnProperty(P) ||
          U === k ||
          (U == null && k == null) ||
          _e(e, t, P, U, l, k);
  }
  var Nc = null,
    _c = null;
  function Vr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Em(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Am(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Dc(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Mc = null;
  function p0() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Mc
        ? !1
        : ((Mc = e), !0)
      : ((Mc = null), !1);
  }
  var Cm = typeof setTimeout == "function" ? setTimeout : void 0,
    y0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Om = typeof Promise == "function" ? Promise : void 0,
    v0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Om < "u"
        ? function (e) {
            return Om.resolve(null).then(e).catch(g0);
          }
        : Cm;
  function g0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function In(e) {
    return e === "head";
  }
  function Rm(e, t) {
    var n = t,
      l = 0,
      r = 0;
    do {
      var c = n.nextSibling;
      if ((e.removeChild(n), c && c.nodeType === 8))
        if (((n = c.data), n === "/$")) {
          if (0 < l && 8 > l) {
            n = l;
            var d = e.ownerDocument;
            if ((n & 1 && vi(d.documentElement), n & 2 && vi(d.body), n & 4))
              for (n = d.head, vi(n), d = n.firstChild; d; ) {
                var v = d.nextSibling,
                  T = d.nodeName;
                d[Ml] ||
                  T === "SCRIPT" ||
                  T === "STYLE" ||
                  (T === "LINK" && d.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(d),
                  (d = v);
              }
          }
          if (r === 0) {
            e.removeChild(c), Ai(t);
            return;
          }
          r--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? r++
            : (l = n.charCodeAt(0) - 48);
      else l = 0;
      n = c;
    } while (n);
    Ai(t);
  }
  function jc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          jc(n), Ho(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function b0(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var r = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[Ml])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((c = e.getAttribute("rel")),
                c === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                c !== r.rel ||
                e.getAttribute("href") !==
                  (r.href == null || r.href === "" ? null : r.href) ||
                e.getAttribute("crossorigin") !==
                  (r.crossOrigin == null ? null : r.crossOrigin) ||
                e.getAttribute("title") !== (r.title == null ? null : r.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((c = e.getAttribute("src")),
                (c !== (r.src == null ? null : r.src) ||
                  e.getAttribute("type") !== (r.type == null ? null : r.type) ||
                  e.getAttribute("crossorigin") !==
                    (r.crossOrigin == null ? null : r.crossOrigin)) &&
                  c &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var c = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && e.getAttribute("name") === c) return e;
      } else return e;
      if (((e = Jt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function x0(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = Jt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function zc(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function S0(e, t) {
    var n = e.ownerDocument;
    if (e.data !== "$?" || n.readyState === "complete") t();
    else {
      var l = function () {
        t(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), (e._reactRetry = l);
    }
  }
  function Jt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var Uc = null;
  function Nm(e) {
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
  function _m(e, t, n) {
    switch (((t = Vr(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(s(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(s(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function vi(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Ho(e);
  }
  var Vt = new Map(),
    Dm = new Set();
  function Qr(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var On = Y.d;
  Y.d = { f: w0, r: T0, D: E0, C: A0, L: C0, m: O0, X: N0, S: R0, M: _0 };
  function w0() {
    var e = On.f(),
      t = Ur();
    return e || t;
  }
  function T0(e) {
    var t = La(e);
    t !== null && t.tag === 5 && t.type === "form" ? Fd(t) : On.r(e);
  }
  var vl = typeof document > "u" ? null : document;
  function Mm(e, t, n) {
    var l = vl;
    if (l && typeof t == "string" && t) {
      var r = kt(t);
      (r = 'link[rel="' + e + '"][href="' + r + '"]'),
        typeof n == "string" && (r += '[crossorigin="' + n + '"]'),
        Dm.has(r) ||
          (Dm.add(r),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(r) === null &&
            ((t = l.createElement("link")),
            at(t, "link", e),
            $e(t),
            l.head.appendChild(t)));
    }
  }
  function E0(e) {
    On.D(e), Mm("dns-prefetch", e, null);
  }
  function A0(e, t) {
    On.C(e, t), Mm("preconnect", e, t);
  }
  function C0(e, t, n) {
    On.L(e, t, n);
    var l = vl;
    if (l && e && t) {
      var r = 'link[rel="preload"][as="' + kt(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((r += '[imagesrcset="' + kt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (r += '[imagesizes="' + kt(n.imageSizes) + '"]'))
        : (r += '[href="' + kt(e) + '"]');
      var c = r;
      switch (t) {
        case "style":
          c = gl(e);
          break;
        case "script":
          c = bl(e);
      }
      Vt.has(c) ||
        ((e = b(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n
        )),
        Vt.set(c, e),
        l.querySelector(r) !== null ||
          (t === "style" && l.querySelector(gi(c))) ||
          (t === "script" && l.querySelector(bi(c))) ||
          ((t = l.createElement("link")),
          at(t, "link", e),
          $e(t),
          l.head.appendChild(t)));
    }
  }
  function O0(e, t) {
    On.m(e, t);
    var n = vl;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        r =
          'link[rel="modulepreload"][as="' + kt(l) + '"][href="' + kt(e) + '"]',
        c = r;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = bl(e);
      }
      if (
        !Vt.has(c) &&
        ((e = b({ rel: "modulepreload", href: e }, t)),
        Vt.set(c, e),
        n.querySelector(r) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(bi(c))) return;
        }
        (l = n.createElement("link")),
          at(l, "link", e),
          $e(l),
          n.head.appendChild(l);
      }
    }
  }
  function R0(e, t, n) {
    On.S(e, t, n);
    var l = vl;
    if (l && e) {
      var r = Ha(l).hoistableStyles,
        c = gl(e);
      t = t || "default";
      var d = r.get(c);
      if (!d) {
        var v = { loading: 0, preload: null };
        if ((d = l.querySelector(gi(c)))) v.loading = 5;
        else {
          (e = b({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = Vt.get(c)) && kc(e, n);
          var T = (d = l.createElement("link"));
          $e(T),
            at(T, "link", e),
            (T._p = new Promise(function (j, B) {
              (T.onload = j), (T.onerror = B);
            })),
            T.addEventListener("load", function () {
              v.loading |= 1;
            }),
            T.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            Xr(d, t, l);
        }
        (d = { type: "stylesheet", instance: d, count: 1, state: v }),
          r.set(c, d);
      }
    }
  }
  function N0(e, t) {
    On.X(e, t);
    var n = vl;
    if (n && e) {
      var l = Ha(n).hoistableScripts,
        r = bl(e),
        c = l.get(r);
      c ||
        ((c = n.querySelector(bi(r))),
        c ||
          ((e = b({ src: e, async: !0 }, t)),
          (t = Vt.get(r)) && Lc(e, t),
          (c = n.createElement("script")),
          $e(c),
          at(c, "link", e),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        l.set(r, c));
    }
  }
  function _0(e, t) {
    On.M(e, t);
    var n = vl;
    if (n && e) {
      var l = Ha(n).hoistableScripts,
        r = bl(e),
        c = l.get(r);
      c ||
        ((c = n.querySelector(bi(r))),
        c ||
          ((e = b({ src: e, async: !0, type: "module" }, t)),
          (t = Vt.get(r)) && Lc(e, t),
          (c = n.createElement("script")),
          $e(c),
          at(c, "link", e),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        l.set(r, c));
    }
  }
  function jm(e, t, n, l) {
    var r = (r = te.current) ? Qr(r) : null;
    if (!r) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = gl(n.href)),
            (n = Ha(r).hoistableStyles),
            (l = n.get(t)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = gl(n.href);
          var c = Ha(r).hoistableStyles,
            d = c.get(e);
          if (
            (d ||
              ((r = r.ownerDocument || r),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(e, d),
              (c = r.querySelector(gi(e))) &&
                !c._p &&
                ((d.instance = c), (d.state.loading = 5)),
              Vt.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Vt.set(e, n),
                c || D0(r, e, n, d.state))),
            t && l === null)
          )
            throw Error(s(528, ""));
          return d;
        }
        if (t && l !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = bl(n)),
              (n = Ha(r).hoistableScripts),
              (l = n.get(t)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function gl(e) {
    return 'href="' + kt(e) + '"';
  }
  function gi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function zm(e) {
    return b({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function D0(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (l.loading = 1)
      : ((t = e.createElement("link")),
        (l.preload = t),
        t.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        at(t, "link", n),
        $e(t),
        e.head.appendChild(t));
  }
  function bl(e) {
    return '[src="' + kt(e) + '"]';
  }
  function bi(e) {
    return "script[async]" + e;
  }
  function Um(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + kt(n.href) + '"]');
          if (l) return (t.instance = l), $e(l), l;
          var r = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            $e(l),
            at(l, "style", r),
            Xr(l, n.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          r = gl(n.href);
          var c = e.querySelector(gi(r));
          if (c) return (t.state.loading |= 4), (t.instance = c), $e(c), c;
          (l = zm(n)),
            (r = Vt.get(r)) && kc(l, r),
            (c = (e.ownerDocument || e).createElement("link")),
            $e(c);
          var d = c;
          return (
            (d._p = new Promise(function (v, T) {
              (d.onload = v), (d.onerror = T);
            })),
            at(c, "link", l),
            (t.state.loading |= 4),
            Xr(c, n.precedence, e),
            (t.instance = c)
          );
        case "script":
          return (
            (c = bl(n.src)),
            (r = e.querySelector(bi(c)))
              ? ((t.instance = r), $e(r), r)
              : ((l = n),
                (r = Vt.get(c)) && ((l = b({}, n)), Lc(l, r)),
                (e = e.ownerDocument || e),
                (r = e.createElement("script")),
                $e(r),
                at(r, "link", l),
                e.head.appendChild(r),
                (t.instance = r))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), Xr(l, n.precedence, e));
    return t.instance;
  }
  function Xr(e, t, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        r = l.length ? l[l.length - 1] : null,
        c = r,
        d = 0;
      d < l.length;
      d++
    ) {
      var v = l[d];
      if (v.dataset.precedence === t) c = v;
      else if (c !== r) break;
    }
    c
      ? c.parentNode.insertBefore(e, c.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function kc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Lc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Pr = null;
  function km(e, t, n) {
    if (Pr === null) {
      var l = new Map(),
        r = (Pr = new Map());
      r.set(n, l);
    } else (r = Pr), (l = r.get(n)), l || ((l = new Map()), r.set(n, l));
    if (l.has(e)) return l;
    for (
      l.set(e, null), n = n.getElementsByTagName(e), r = 0;
      r < n.length;
      r++
    ) {
      var c = n[r];
      if (
        !(
          c[Ml] ||
          c[lt] ||
          (e === "link" && c.getAttribute("rel") === "stylesheet")
        ) &&
        c.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var d = c.getAttribute(t) || "";
        d = e + d;
        var v = l.get(d);
        v ? v.push(c) : l.set(d, [c]);
      }
    }
    return l;
  }
  function Lm(e, t, n) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function M0(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Hm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var xi = null;
  function j0() {}
  function z0(e, t, n) {
    if (xi === null) throw Error(s(475));
    var l = xi;
    if (
      t.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var r = gl(n.href),
          c = e.querySelector(gi(r));
        if (c) {
          (e = c._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (l.count++, (l = Zr.bind(l)), e.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = c),
            $e(c);
          return;
        }
        (c = e.ownerDocument || e),
          (n = zm(n)),
          (r = Vt.get(r)) && kc(n, r),
          (c = c.createElement("link")),
          $e(c);
        var d = c;
        (d._p = new Promise(function (v, T) {
          (d.onload = v), (d.onerror = T);
        })),
          at(c, "link", n),
          (t.instance = c);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (l.count++,
          (t = Zr.bind(l)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function U0() {
    if (xi === null) throw Error(s(475));
    var e = xi;
    return (
      e.stylesheets && e.count === 0 && Hc(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var n = setTimeout(function () {
              if ((e.stylesheets && Hc(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                (e.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function Zr() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Hc(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Kr = null;
  function Hc(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Kr = new Map()),
        t.forEach(k0, e),
        (Kr = null),
        Zr.call(e));
  }
  function k0(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Kr.get(e);
      if (n) var l = n.get(null);
      else {
        (n = new Map()), Kr.set(e, n);
        for (
          var r = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            c = 0;
          c < r.length;
          c++
        ) {
          var d = r[c];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (n.set(d.dataset.precedence, d), (l = d));
        }
        l && n.set(null, l);
      }
      (r = t.instance),
        (d = r.getAttribute("data-precedence")),
        (c = n.get(d) || l),
        c === l && n.set(null, r),
        n.set(d, r),
        this.count++,
        (l = Zr.bind(this)),
        r.addEventListener("load", l),
        r.addEventListener("error", l),
        c
          ? c.parentNode.insertBefore(r, c.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(r, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Si = {
    $$typeof: z,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0,
  };
  function L0(e, t, n, l, r, c, d, v) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = zo(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = zo(0)),
      (this.hiddenUpdates = zo(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = r),
      (this.onCaughtError = c),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = v),
      (this.incompleteTransitions = new Map());
  }
  function qm(e, t, n, l, r, c, d, v, T, j, B, P) {
    return (
      (e = new L0(e, t, n, d, v, T, j, P)),
      (t = 1),
      c === !0 && (t |= 24),
      (c = Ct(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (t = bs()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (c.memoizedState = { element: l, isDehydrated: n, cache: t }),
      Ts(c),
      e
    );
  }
  function Bm(e) {
    return e ? ((e = Ja), e) : Ja;
  }
  function Gm(e, t, n, l, r, c) {
    (r = Bm(r)),
      l.context === null ? (l.context = r) : (l.pendingContext = r),
      (l = Bn(t)),
      (l.payload = { element: n }),
      (c = c === void 0 ? null : c),
      c !== null && (l.callback = c),
      (n = Gn(e, l, t)),
      n !== null && (Dt(n, e, t), Fl(n, e, t));
  }
  function Ym(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function qc(e, t) {
    Ym(e, t), (e = e.alternate) && Ym(e, t);
  }
  function Vm(e) {
    if (e.tag === 13) {
      var t = $a(e, 67108864);
      t !== null && Dt(t, e, 67108864), qc(e, 67108864);
    }
  }
  var $r = !0;
  function H0(e, t, n, l) {
    var r = C.T;
    C.T = null;
    var c = Y.p;
    try {
      (Y.p = 2), Bc(e, t, n, l);
    } finally {
      (Y.p = c), (C.T = r);
    }
  }
  function q0(e, t, n, l) {
    var r = C.T;
    C.T = null;
    var c = Y.p;
    try {
      (Y.p = 8), Bc(e, t, n, l);
    } finally {
      (Y.p = c), (C.T = r);
    }
  }
  function Bc(e, t, n, l) {
    if ($r) {
      var r = Gc(l);
      if (r === null) Oc(e, t, l, Jr, n), Xm(e, l);
      else if (G0(r, e, t, n, l)) l.stopPropagation();
      else if ((Xm(e, l), t & 4 && -1 < B0.indexOf(e))) {
        for (; r !== null; ) {
          var c = La(r);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var d = fa(c.pendingLanes);
                  if (d !== 0) {
                    var v = c;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; d; ) {
                      var T = 1 << (31 - Et(d));
                      (v.entanglements[1] |= T), (d &= ~T);
                    }
                    ln(c), (Oe & 6) === 0 && ((jr = It() + 500), mi(0));
                  }
                }
                break;
              case 13:
                (v = $a(c, 2)), v !== null && Dt(v, c, 2), Ur(), qc(c, 2);
            }
          if (((c = Gc(l)), c === null && Oc(e, t, l, Jr, n), c === r)) break;
          r = c;
        }
        r !== null && l.stopPropagation();
      } else Oc(e, t, l, null, n);
    }
  }
  function Gc(e) {
    return (e = Po(e)), Yc(e);
  }
  var Jr = null;
  function Yc(e) {
    if (((Jr = null), (e = ka(e)), e !== null)) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Jr = e), null;
  }
  function Qm(e) {
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
        switch (Ag()) {
          case af:
            return 2;
          case lf:
            return 8;
          case Yi:
          case Cg:
            return 32;
          case rf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Vc = !1,
    ea = null,
    ta = null,
    na = null,
    wi = new Map(),
    Ti = new Map(),
    aa = [],
    B0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Xm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ea = null;
        break;
      case "dragenter":
      case "dragleave":
        ta = null;
        break;
      case "mouseover":
      case "mouseout":
        na = null;
        break;
      case "pointerover":
      case "pointerout":
        wi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ti.delete(t.pointerId);
    }
  }
  function Ei(e, t, n, l, r, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: c,
          targetContainers: [r],
        }),
        t !== null && ((t = La(t)), t !== null && Vm(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        r !== null && t.indexOf(r) === -1 && t.push(r),
        e);
  }
  function G0(e, t, n, l, r) {
    switch (t) {
      case "focusin":
        return (ea = Ei(ea, e, t, n, l, r)), !0;
      case "dragenter":
        return (ta = Ei(ta, e, t, n, l, r)), !0;
      case "mouseover":
        return (na = Ei(na, e, t, n, l, r)), !0;
      case "pointerover":
        var c = r.pointerId;
        return wi.set(c, Ei(wi.get(c) || null, e, t, n, l, r)), !0;
      case "gotpointercapture":
        return (
          (c = r.pointerId), Ti.set(c, Ei(Ti.get(c) || null, e, t, n, l, r)), !0
        );
    }
    return !1;
  }
  function Pm(e) {
    var t = ka(e.target);
    if (t !== null) {
      var n = f(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = h(n)), t !== null)) {
            (e.blockedOn = t),
              zg(e.priority, function () {
                if (n.tag === 13) {
                  var l = _t();
                  l = Uo(l);
                  var r = $a(n, l);
                  r !== null && Dt(r, n, l), qc(n, l);
                }
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
  function Fr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Gc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        (Xo = l), n.target.dispatchEvent(l), (Xo = null);
      } else return (t = La(n)), t !== null && Vm(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Zm(e, t, n) {
    Fr(e) && n.delete(t);
  }
  function Y0() {
    (Vc = !1),
      ea !== null && Fr(ea) && (ea = null),
      ta !== null && Fr(ta) && (ta = null),
      na !== null && Fr(na) && (na = null),
      wi.forEach(Zm),
      Ti.forEach(Zm);
  }
  function Wr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Vc ||
        ((Vc = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, Y0)));
  }
  var Ir = null;
  function Km(e) {
    Ir !== e &&
      ((Ir = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Ir === e && (Ir = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            r = e[t + 2];
          if (typeof l != "function") {
            if (Yc(l || n) === null) continue;
            break;
          }
          var c = La(n);
          c !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Ys(c, { pending: !0, data: r, method: n.method, action: l }, l, r));
        }
      }));
  }
  function Ai(e) {
    function t(T) {
      return Wr(T, e);
    }
    ea !== null && Wr(ea, e),
      ta !== null && Wr(ta, e),
      na !== null && Wr(na, e),
      wi.forEach(t),
      Ti.forEach(t);
    for (var n = 0; n < aa.length; n++) {
      var l = aa[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < aa.length && ((n = aa[0]), n.blockedOn === null); )
      Pm(n), n.blockedOn === null && aa.shift();
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var r = n[l],
          c = n[l + 1],
          d = r[pt] || null;
        if (typeof c == "function") d || Km(n);
        else if (d) {
          var v = null;
          if (c && c.hasAttribute("formAction")) {
            if (((r = c), (d = c[pt] || null))) v = d.formAction;
            else if (Yc(r) !== null) continue;
          } else v = d.action;
          typeof v == "function" ? (n[l + 1] = v) : (n.splice(l, 3), (l -= 3)),
            Km(n);
        }
      }
  }
  function Qc(e) {
    this._internalRoot = e;
  }
  (eo.prototype.render = Qc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var n = t.current,
        l = _t();
      Gm(n, l, e, t, null, null);
    }),
    (eo.prototype.unmount = Qc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Gm(e.current, 2, null, e, null, null), Ur(), (t[Ua] = null);
        }
      });
  function eo(e) {
    this._internalRoot = e;
  }
  eo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ff();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < aa.length && t !== 0 && t < aa[n].priority; n++);
      aa.splice(n, 0, e), n === 0 && Pm(e);
    }
  };
  var $m = i.version;
  if ($m !== "19.1.0") throw Error(s(527, $m, "19.1.0"));
  Y.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(s(188))
        : ((e = Object.keys(e).join(",")), Error(s(268, e)));
    return (
      (e = m(t)),
      (e = e !== null ? y(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var V0 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var to = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!to.isDisabled && to.supportsFiber)
      try {
        (Nl = to.inject(V0)), (Tt = to);
      } catch {}
  }
  return (
    (Oi.createRoot = function (e, t) {
      if (!u(e)) throw Error(s(299));
      var n = !1,
        l = "",
        r = fh,
        c = dh,
        d = hh,
        v = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (r = t.onUncaughtError),
          t.onCaughtError !== void 0 && (c = t.onCaughtError),
          t.onRecoverableError !== void 0 && (d = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (v = t.unstable_transitionCallbacks)),
        (t = qm(e, 1, !1, null, null, n, l, r, c, d, v, null)),
        (e[Ua] = t.current),
        Cc(e),
        new Qc(t)
      );
    }),
    (Oi.hydrateRoot = function (e, t, n) {
      if (!u(e)) throw Error(s(299));
      var l = !1,
        r = "",
        c = fh,
        d = dh,
        v = hh,
        T = null,
        j = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (T = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (j = n.formState)),
        (t = qm(e, 1, !0, t, n ?? null, l, r, c, d, v, T, j)),
        (t.context = Bm(null)),
        (n = t.current),
        (l = _t()),
        (l = Uo(l)),
        (r = Bn(l)),
        (r.callback = null),
        Gn(n, r, l),
        (n = l),
        (t.current.lanes = n),
        Dl(t, n),
        ln(t),
        (e[Ua] = t.current),
        Cc(e),
        new eo(t)
      );
    }),
    (Oi.version = "19.1.0"),
    Oi
  );
}
var sp;
function ex() {
  if (sp) return Zc.exports;
  sp = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), (Zc.exports = I0()), Zc.exports;
}
var tx = ex(),
  S = bo();
const nx = P0(S),
  Al = X0({ __proto__: null, default: nx }, [S]),
  ax = S.createContext(void 0),
  lx = ({ client: a, children: i }) => (
    S.useEffect(
      () => (
        a.mount(),
        () => {
          a.unmount();
        }
      ),
      [a]
    ),
    g.jsx(ax.Provider, { value: a, children: i })
  ),
  ix = {
    setTimeout: (a, i) => setTimeout(a, i),
    clearTimeout: (a) => clearTimeout(a),
    setInterval: (a, i) => setInterval(a, i),
    clearInterval: (a) => clearInterval(a),
  };
var rx = class {
  #e = ix;
  #t = !1;
  setTimeoutProvider(a) {
    this.#e = a;
  }
  setTimeout(a, i) {
    return this.#e.setTimeout(a, i);
  }
  clearTimeout(a) {
    this.#e.clearTimeout(a);
  }
  setInterval(a, i) {
    return this.#e.setInterval(a, i);
  }
  clearInterval(a) {
    this.#e.clearInterval(a);
  }
};
const ou = new rx();
function ox(a) {
  setTimeout(a, 0);
}
const sx = typeof window > "u" || "Deno" in globalThis;
function Qt() {}
function cx(a, i) {
  return typeof a == "function" ? a(i) : a;
}
function ux(a) {
  return typeof a == "number" && a >= 0 && a !== 1 / 0;
}
function fx(a, i) {
  return Math.max(a + (i || 0) - Date.now(), 0);
}
function Mi(a, i) {
  return typeof a == "function" ? a(i) : a;
}
function cp(a, i) {
  const {
    type: o = "all",
    exact: s,
    fetchStatus: u,
    predicate: f,
    queryKey: h,
    stale: p,
  } = a;
  if (h) {
    if (s) {
      if (i.queryHash !== Au(h, i.options)) return !1;
    } else if (!Tl(i.queryKey, h)) return !1;
  }
  if (o !== "all") {
    const m = i.isActive();
    if ((o === "active" && !m) || (o === "inactive" && m)) return !1;
  }
  return !(
    (typeof p == "boolean" && i.isStale() !== p) ||
    (u && u !== i.state.fetchStatus) ||
    (f && !f(i))
  );
}
function up(a, i) {
  const { exact: o, status: s, predicate: u, mutationKey: f } = a;
  if (f) {
    if (!i.options.mutationKey) return !1;
    if (o) {
      if (zi(i.options.mutationKey) !== zi(f)) return !1;
    } else if (!Tl(i.options.mutationKey, f)) return !1;
  }
  return !((s && i.state.status !== s) || (u && !u(i)));
}
function Au(a, i) {
  return (i?.queryKeyHashFn || zi)(a);
}
function zi(a) {
  return JSON.stringify(a, (i, o) =>
    su(o)
      ? Object.keys(o)
          .sort()
          .reduce((s, u) => ((s[u] = o[u]), s), {})
      : o
  );
}
function Tl(a, i) {
  if (a === i) return !0;
  if (typeof a != typeof i) return !1;
  if (a && i && typeof a == "object" && typeof i == "object") {
    if (Array.isArray(a) && Array.isArray(i)) {
      if (i.length > a.length) return !1;
      for (let s = 0; s < i.length; s++) if (!Tl(a[s], i[s])) return !1;
      return !0;
    }
    const o = Object.keys(i);
    for (const s of o) if (!Tl(a[s], i[s])) return !1;
    return !0;
  }
  return !1;
}
const dx = Object.prototype.hasOwnProperty;
function iy(a, i, o = 0) {
  if (a === i) return a;
  if (o > 500) return i;
  const s = fp(a) && fp(i);
  if (!s && !(su(a) && su(i))) return i;
  const u = (s ? a : Object.keys(a)).length,
    f = s ? i : Object.keys(i),
    h = f.length,
    p = s ? new Array(h) : {};
  let m = 0;
  for (let y = 0; y < h; y++) {
    const b = s ? y : f[y],
      w = a[b],
      E = i[b];
    if (w === E) {
      (p[b] = w), (s ? y < u : dx.call(a, b)) && m++;
      continue;
    }
    if (
      w === null ||
      E === null ||
      typeof w != "object" ||
      typeof E != "object"
    ) {
      p[b] = E;
      continue;
    }
    const R = iy(w, E, o + 1);
    (p[b] = R), R === w && m++;
  }
  return u === h && m === u ? a : p;
}
function fp(a) {
  return Array.isArray(a) && a.length === Object.keys(a).length;
}
function su(a) {
  if (!dp(a)) return !1;
  const i = Object.getPrototypeOf(a),
    o = i?.constructor;
  if (o === void 0) return !0;
  if (typeof o != "function") return !1;
  const s = o.prototype;
  return !(
    !dp(s) ||
    !s.hasOwnProperty("isPrototypeOf") ||
    i !== Object.prototype
  );
}
function dp(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
}
function hx(a) {
  return new Promise((i) => {
    ou.setTimeout(i, a);
  });
}
function mx(a, i, o) {
  return typeof o.structuralSharing == "function"
    ? o.structuralSharing(a, i)
    : o.structuralSharing !== !1
    ? iy(a, i)
    : i;
}
function px(a, i, o = 0) {
  const s = [...a, i];
  return o && s.length > o ? s.slice(1) : s;
}
function yx(a, i, o = 0) {
  const s = [i, ...a];
  return o && s.length > o ? s.slice(0, -1) : s;
}
const Cu = Symbol();
function ry(a, i) {
  return !a.queryFn && i?.initialPromise
    ? () => i.initialPromise
    : !a.queryFn || a.queryFn === Cu
    ? () => Promise.reject(new Error(`Missing queryFn: '${a.queryHash}'`))
    : a.queryFn;
}
function vx(a, i, o) {
  let s = !1,
    u;
  return (
    Object.defineProperty(a, "signal", {
      enumerable: !0,
      get: () => (
        (u ??= i()),
        s ||
          ((s = !0),
          u.aborted ? o() : u.addEventListener("abort", o, { once: !0 })),
        u
      ),
    }),
    a
  );
}
let gx = () => sx;
const oy = () => gx();
var xo = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(a) {
      return (
        this.listeners.add(a),
        this.onSubscribe(),
        () => {
          this.listeners.delete(a), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  bx = class extends xo {
    #e;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (a) => {
          if (typeof window < "u" && window.addEventListener) {
            const i = () => a();
            return (
              window.addEventListener("visibilitychange", i, !1),
              () => {
                window.removeEventListener("visibilitychange", i);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(a) {
      (this.#n = a),
        this.#t?.(),
        (this.#t = a((i) => {
          typeof i == "boolean" ? this.setFocused(i) : this.onFocus();
        }));
    }
    setFocused(a) {
      this.#e !== a && ((this.#e = a), this.onFocus());
    }
    onFocus() {
      const a = this.isFocused();
      this.listeners.forEach((i) => {
        i(a);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  };
const sy = new bx(),
  xx = ox;
function Sx() {
  let a = [],
    i = 0,
    o = (p) => {
      p();
    },
    s = (p) => {
      p();
    },
    u = xx;
  const f = (p) => {
      i
        ? a.push(p)
        : u(() => {
            o(p);
          });
    },
    h = () => {
      const p = a;
      (a = []),
        p.length &&
          u(() => {
            s(() => {
              p.forEach((m) => {
                o(m);
              });
            });
          });
    };
  return {
    batch: (p) => {
      let m;
      i++;
      try {
        m = p();
      } finally {
        i--, i || h();
      }
      return m;
    },
    batchCalls:
      (p) =>
      (...m) => {
        f(() => {
          p(...m);
        });
      },
    schedule: f,
    setNotifyFunction: (p) => {
      o = p;
    },
    setBatchNotifyFunction: (p) => {
      s = p;
    },
    setScheduler: (p) => {
      u = p;
    },
  };
}
const ht = Sx();
var wx = class extends xo {
  #e = !0;
  #t;
  #n;
  constructor() {
    super(),
      (this.#n = (a) => {
        if (typeof window < "u" && window.addEventListener) {
          const i = () => a(!0),
            o = () => a(!1);
          return (
            window.addEventListener("online", i, !1),
            window.addEventListener("offline", o, !1),
            () => {
              window.removeEventListener("online", i),
                window.removeEventListener("offline", o);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.#t || this.setEventListener(this.#n);
  }
  onUnsubscribe() {
    this.hasListeners() || (this.#t?.(), (this.#t = void 0));
  }
  setEventListener(a) {
    (this.#n = a), this.#t?.(), (this.#t = a(this.setOnline.bind(this)));
  }
  setOnline(a) {
    this.#e !== a &&
      ((this.#e = a),
      this.listeners.forEach((i) => {
        i(a);
      }));
  }
  isOnline() {
    return this.#e;
  }
};
const ho = new wx();
function Tx(a) {
  return Math.min(1e3 * 2 ** a, 3e4);
}
function cy(a) {
  return (a ?? "online") === "online" ? ho.isOnline() : !0;
}
var cu = class extends Error {
  constructor(a) {
    super("CancelledError"),
      (this.revert = a?.revert),
      (this.silent = a?.silent);
  }
};
function uy(a) {
  let i = !1,
    o = 0,
    s,
    u = "pending",
    f,
    h;
  const p = new Promise((H, z) => {
    (f = H), (h = z);
  });
  p.catch(Qt);
  const m = () => u !== "pending",
    y = (H) => {
      if (!m()) {
        const z = new cu(H);
        _(z), a.onCancel?.(z);
      }
    },
    b = () => {
      i = !0;
    },
    w = () => {
      i = !1;
    },
    E = () =>
      sy.isFocused() &&
      (a.networkMode === "always" || ho.isOnline()) &&
      a.canRun(),
    R = () => cy(a.networkMode) && a.canRun(),
    O = (H) => {
      m() || (s?.(), (u = "resolved"), f(H));
    },
    _ = (H) => {
      m() || (s?.(), (u = "rejected"), h(H));
    },
    M = () =>
      new Promise((H) => {
        (s = (z) => {
          (m() || E()) && H(z);
        }),
          a.onPause?.();
      }).then(() => {
        (s = void 0), m() || a.onContinue?.();
      }),
    L = () => {
      if (m()) return;
      let H;
      const z = o === 0 ? a.initialPromise : void 0;
      try {
        H = z ?? a.fn();
      } catch (q) {
        H = Promise.reject(q);
      }
      Promise.resolve(H)
        .then(O)
        .catch((q) => {
          if (m()) return;
          const V = a.retry ?? (oy() ? 0 : 3),
            Z = a.retryDelay ?? Tx,
            $ = typeof Z == "function" ? Z(o, q) : Z,
            X =
              V === !0 ||
              (typeof V == "number" && o < V) ||
              (typeof V == "function" && V(o, q));
          if (i || !X) {
            _(q);
            return;
          }
          o++,
            a.onFail?.(o, q),
            hx($)
              .then(() => (E() ? void 0 : M()))
              .then(() => {
                i ? _(q) : L();
              });
        });
    };
  return {
    promise: p,
    status: () => u,
    cancel: y,
    continue: () => (s?.(), p),
    cancelRetry: b,
    continueRetry: w,
    canStart: R,
    start: () => (R() ? L() : M().then(L), p),
  };
}
var fy = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      ux(this.gcTime) &&
        (this.#e = ou.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime));
  }
  updateGcTime(a) {
    this.gcTime = Math.max(this.gcTime || 0, a ?? (oy() ? 1 / 0 : 3e5));
  }
  clearGcTimeout() {
    this.#e !== void 0 && (ou.clearTimeout(this.#e), (this.#e = void 0));
  }
};
function Ex(a) {
  return {
    onFetch: (i, o) => {
      const s = i.options,
        u = i.fetchOptions?.meta?.fetchMore?.direction,
        f = i.state.data?.pages || [],
        h = i.state.data?.pageParams || [];
      let p = { pages: [], pageParams: [] },
        m = 0;
      const y = async () => {
        let b = !1;
        const w = (O) => {
            vx(
              O,
              () => i.signal,
              () => (b = !0)
            );
          },
          E = ry(i.options, i.fetchOptions),
          R = async (O, _, M) => {
            if (b) return Promise.reject(i.signal.reason);
            if (_ == null && O.pages.length) return Promise.resolve(O);
            const H = (() => {
                const Z = {
                  client: i.client,
                  queryKey: i.queryKey,
                  pageParam: _,
                  direction: M ? "backward" : "forward",
                  meta: i.options.meta,
                };
                return w(Z), Z;
              })(),
              z = await E(H),
              { maxPages: q } = i.options,
              V = M ? yx : px;
            return {
              pages: V(O.pages, z, q),
              pageParams: V(O.pageParams, _, q),
            };
          };
        if (u && f.length) {
          const O = u === "backward",
            _ = O ? Ax : hp,
            M = { pages: f, pageParams: h };
          p = await R(M, _(s, M), O);
        } else {
          const O = a ?? f.length;
          do {
            const _ = m === 0 ? h[0] ?? s.initialPageParam : hp(s, p);
            if (m > 0 && _ == null) break;
            (p = await R(p, _)), m++;
          } while (m < O);
        }
        return p;
      };
      i.options.persister
        ? (i.fetchFn = () =>
            i.options.persister?.(
              y,
              {
                client: i.client,
                queryKey: i.queryKey,
                meta: i.options.meta,
                signal: i.signal,
              },
              o
            ))
        : (i.fetchFn = y);
    },
  };
}
function hp(a, { pages: i, pageParams: o }) {
  const s = i.length - 1;
  return i.length > 0 ? a.getNextPageParam(i[s], i, o[s], o) : void 0;
}
function Ax(a, { pages: i, pageParams: o }) {
  return i.length > 0 ? a.getPreviousPageParam?.(i[0], i, o[0], o) : void 0;
}
var Cx = class extends fy {
  #e;
  #t;
  #n;
  #l;
  #i;
  #a;
  #s;
  #r;
  constructor(a) {
    super(),
      (this.#r = !1),
      (this.#s = a.defaultOptions),
      this.setOptions(a.options),
      (this.observers = []),
      (this.#i = a.client),
      (this.#l = this.#i.getQueryCache()),
      (this.queryKey = a.queryKey),
      (this.queryHash = a.queryHash),
      (this.#t = pp(this.options)),
      (this.state = a.state ?? this.#t),
      this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return this.#e;
  }
  get promise() {
    return this.#a?.promise;
  }
  setOptions(a) {
    if (
      ((this.options = { ...this.#s, ...a }),
      a?._type && (this.#e = a._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      const i = pp(this.options);
      i.data !== void 0 &&
        (this.setState(mp(i.data, i.dataUpdatedAt)), (this.#t = i));
    }
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === "idle" &&
      this.#l.remove(this);
  }
  setData(a, i) {
    const o = mx(this.state.data, a, this.options);
    return (
      this.#o({
        data: o,
        type: "success",
        dataUpdatedAt: i?.updatedAt,
        manual: i?.manual,
      }),
      o
    );
  }
  setState(a) {
    this.#o({ type: "setState", state: a });
  }
  cancel(a) {
    const i = this.#a?.promise;
    return this.#a?.cancel(a), i ? i.then(Qt).catch(Qt) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  get resetState() {
    return this.#t;
  }
  reset() {
    this.destroy(), this.setState(this.resetState);
  }
  isActive() {
    return this.observers.some((a) => Mi(a.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === Cu || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return this.getObserversCount() > 0
      ? this.observers.some((a) => Mi(a.options.staleTime, this) === "static")
      : !1;
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((a) => a.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(a = 0) {
    return this.state.data === void 0
      ? !0
      : a === "static"
      ? !1
      : this.state.isInvalidated
      ? !0
      : !fx(this.state.dataUpdatedAt, a);
  }
  onFocus() {
    this.observers
      .find((a) => a.shouldFetchOnWindowFocus())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue();
  }
  onOnline() {
    this.observers
      .find((a) => a.shouldFetchOnReconnect())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue();
  }
  addObserver(a) {
    this.observers.includes(a) ||
      (this.observers.push(a),
      this.clearGcTimeout(),
      this.#l.notify({ type: "observerAdded", query: this, observer: a }));
  }
  removeObserver(a) {
    const i = this.observers.indexOf(a);
    i !== -1 &&
      (this.observers.splice(i, 1),
      this.observers.length ||
        (this.#a &&
          (this.#r ||
          (this.state.fetchStatus === "paused" &&
            this.state.status === "pending")
            ? this.#a.cancel({ revert: !0 })
            : this.#a.cancelRetry()),
        this.scheduleGc()),
      this.#l.notify({ type: "observerRemoved", query: this, observer: a }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.#o({ type: "invalidate" });
  }
  async fetch(a, i) {
    if (this.state.fetchStatus !== "idle" && this.#a?.status() !== "rejected") {
      if (this.state.data !== void 0 && i?.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.#a) return this.#a.continueRetry(), this.#a.promise;
    }
    if ((a && this.setOptions(a), !this.options.queryFn)) {
      const m = this.observers.find((y) => y.options.queryFn);
      m && this.setOptions(m.options);
    }
    const o = new AbortController(),
      s = (m) => {
        Object.defineProperty(m, "signal", {
          enumerable: !0,
          get: () => ((this.#r = !0), o.signal),
        });
      },
      u = () => {
        const m = ry(this.options, i),
          b = (() => {
            const w = {
              client: this.#i,
              queryKey: this.queryKey,
              meta: this.meta,
            };
            return s(w), w;
          })();
        return (
          (this.#r = !1),
          this.options.persister ? this.options.persister(m, b, this) : m(b)
        );
      },
      h = (() => {
        const m = {
          fetchOptions: i,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#i,
          state: this.state,
          fetchFn: u,
        };
        return s(m), m;
      })();
    (this.#e === "infinite"
      ? Ex(this.options.pages)
      : this.options.behavior
    )?.onFetch(h, this),
      (this.#n = this.state),
      (this.state.fetchStatus === "idle" ||
        this.state.fetchMeta !== h.fetchOptions?.meta) &&
        this.#o({ type: "fetch", meta: h.fetchOptions?.meta });
    const p = (this.#a = uy({
      initialPromise: i?.initialPromise,
      fn: h.fetchFn,
      onCancel: (m) => {
        m instanceof cu &&
          m.revert &&
          this.setState({ ...this.#n, fetchStatus: "idle" }),
          o.abort();
      },
      onFail: (m, y) => {
        this.#o({ type: "failed", failureCount: m, error: y });
      },
      onPause: () => {
        this.#o({ type: "pause" });
      },
      onContinue: () => {
        this.#o({ type: "continue" });
      },
      retry: h.options.retry,
      retryDelay: h.options.retryDelay,
      networkMode: h.options.networkMode,
      canRun: () => !0,
    }));
    try {
      const m = await p.start();
      if (m === void 0) throw new Error(`${this.queryHash} data is undefined`);
      return (
        this.setData(m),
        this.#l.config.onSuccess?.(m, this),
        this.#l.config.onSettled?.(m, this.state.error, this),
        m
      );
    } catch (m) {
      if (m instanceof cu) {
        if (m.silent) return this.#a.promise;
        if (m.revert) {
          if (this.state.data === void 0) throw m;
          return this.state.data;
        }
      }
      throw (
        (this.#o({ type: "error", error: m }),
        this.#l.config.onError?.(m, this),
        this.#l.config.onSettled?.(this.state.data, m, this),
        m)
      );
    } finally {
      this.#a === p && (this.#a = void 0), this.scheduleGc();
    }
  }
  #o(a) {
    const i = (o) => {
      switch (a.type) {
        case "failed":
          return {
            ...o,
            fetchFailureCount: a.failureCount,
            fetchFailureReason: a.error,
          };
        case "pause":
          return { ...o, fetchStatus: "paused" };
        case "continue":
          return { ...o, fetchStatus: "fetching" };
        case "fetch":
          return {
            ...o,
            ...Ox(o.data, this.options),
            fetchMeta: a.meta ?? null,
          };
        case "success":
          const s = {
            ...o,
            ...mp(a.data, a.dataUpdatedAt),
            dataUpdateCount: o.dataUpdateCount + 1,
            ...(!a.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
          return (this.#n = a.manual ? s : void 0), s;
        case "error":
          const u = a.error;
          return {
            ...o,
            error: u,
            errorUpdateCount: o.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: o.fetchFailureCount + 1,
            fetchFailureReason: u,
            fetchStatus: "idle",
            status: "error",
            isInvalidated: !0,
          };
        case "invalidate":
          return { ...o, isInvalidated: !0 };
        case "setState":
          return { ...o, ...a.state };
      }
    };
    (this.state = i(this.state)),
      ht.batch(() => {
        this.observers.slice().forEach((o) => {
          o.onQueryUpdate();
        }),
          this.#l.notify({ query: this, type: "updated", action: a });
      });
  }
};
function Ox(a, i) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: cy(i.networkMode) ? "fetching" : "paused",
    ...(a === void 0 && { error: null, status: "pending" }),
  };
}
function mp(a, i) {
  return {
    data: a,
    dataUpdatedAt: i ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function pp(a) {
  const i =
      typeof a.initialData == "function" ? a.initialData() : a.initialData,
    o = i !== void 0,
    s = o
      ? typeof a.initialDataUpdatedAt == "function"
        ? a.initialDataUpdatedAt()
        : a.initialDataUpdatedAt
      : 0;
  return {
    data: i,
    dataUpdateCount: 0,
    dataUpdatedAt: o ? s ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: o ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Rx = class extends fy {
  #e;
  #t;
  #n;
  #l;
  constructor(a) {
    super(),
      (this.#e = a.client),
      (this.mutationId = a.mutationId),
      (this.#n = a.mutationCache),
      (this.#t = []),
      (this.state = a.state || Nx()),
      this.setOptions(a.options),
      this.scheduleGc();
  }
  setOptions(a) {
    (this.options = a), this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(a) {
    this.#t.includes(a) ||
      (this.#t.push(a),
      this.clearGcTimeout(),
      this.#n.notify({ type: "observerAdded", mutation: this, observer: a }));
  }
  removeObserver(a) {
    (this.#t = this.#t.filter((i) => i !== a)),
      this.scheduleGc(),
      this.#n.notify({ type: "observerRemoved", mutation: this, observer: a });
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === "pending"
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return (
      this.#l?.continue() ??
      (this.state.status === "pending"
        ? this.execute(this.state.variables)
        : Promise.resolve())
    );
  }
  async execute(a) {
    const i = () => {
        this.#i({ type: "continue" });
      },
      o = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      },
      s = (this.#l = uy({
        fn: () =>
          this.options.mutationFn
            ? this.options.mutationFn(a, o)
            : Promise.reject(new Error("No mutationFn found")),
        onFail: (h, p) => {
          this.#i({ type: "failed", failureCount: h, error: p });
        },
        onPause: () => {
          this.#i({ type: "pause" });
        },
        onContinue: i,
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => this.#n.canRun(this),
      })),
      u = this.state.status === "pending",
      f = !s.canStart();
    try {
      if (u) i();
      else {
        this.#i({ type: "pending", variables: a, isPaused: f }),
          this.#n.config.onMutate &&
            (await this.#n.config.onMutate(a, this, o));
        const p = await this.options.onMutate?.(a, o);
        p !== this.state.context &&
          this.#i({ type: "pending", context: p, variables: a, isPaused: f });
      }
      const h = await s.start();
      return (
        await this.#n.config.onSuccess?.(h, a, this.state.context, this, o),
        await this.options.onSuccess?.(h, a, this.state.context, o),
        await this.#n.config.onSettled?.(
          h,
          null,
          this.state.variables,
          this.state.context,
          this,
          o
        ),
        await this.options.onSettled?.(h, null, a, this.state.context, o),
        this.#i({ type: "success", data: h }),
        h
      );
    } catch (h) {
      try {
        await this.#n.config.onError?.(h, a, this.state.context, this, o);
      } catch (p) {
        Promise.reject(p);
      }
      try {
        await this.options.onError?.(h, a, this.state.context, o);
      } catch (p) {
        Promise.reject(p);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          h,
          this.state.variables,
          this.state.context,
          this,
          o
        );
      } catch (p) {
        Promise.reject(p);
      }
      try {
        await this.options.onSettled?.(void 0, h, a, this.state.context, o);
      } catch (p) {
        Promise.reject(p);
      }
      throw (this.#i({ type: "error", error: h }), h);
    } finally {
      this.#l === s && (this.#l = void 0), this.#n.runNext(this);
    }
  }
  #i(a) {
    const i = (o) => {
      switch (a.type) {
        case "failed":
          return { ...o, failureCount: a.failureCount, failureReason: a.error };
        case "pause":
          return { ...o, isPaused: !0 };
        case "continue":
          return { ...o, isPaused: !1 };
        case "pending":
          return {
            ...o,
            context: a.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: a.isPaused,
            status: "pending",
            variables: a.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...o,
            data: a.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...o,
            data: void 0,
            error: a.error,
            failureCount: o.failureCount + 1,
            failureReason: a.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    (this.state = i(this.state)),
      ht.batch(() => {
        this.#t.forEach((o) => {
          o.onMutationUpdate(a);
        }),
          this.#n.notify({ mutation: this, type: "updated", action: a });
      });
  }
};
function Nx() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var _x = class extends xo {
  #e;
  #t;
  #n;
  constructor(a = {}) {
    super(),
      (this.config = a),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0);
  }
  build(a, i, o) {
    const s = new Rx({
      client: a,
      mutationCache: this,
      mutationId: ++this.#n,
      options: a.defaultMutationOptions(i),
      state: o,
    });
    return this.add(s), s;
  }
  add(a) {
    this.#e.add(a);
    const i = no(a);
    if (typeof i == "string") {
      const o = this.#t.get(i);
      o ? o.push(a) : this.#t.set(i, [a]);
    }
    this.notify({ type: "added", mutation: a });
  }
  remove(a) {
    if (this.#e.delete(a)) {
      const i = no(a);
      if (typeof i == "string") {
        const o = this.#t.get(i);
        if (o)
          if (o.length > 1) {
            const s = o.indexOf(a);
            s !== -1 && o.splice(s, 1);
          } else o[0] === a && this.#t.delete(i);
      }
    }
    this.notify({ type: "removed", mutation: a });
  }
  canRun(a) {
    const i = no(a);
    if (typeof i == "string") {
      const o = this.#t.get(i)?.find((s) => s.state.status === "pending");
      return !o || o === a;
    } else return !0;
  }
  runNext(a) {
    const i = no(a);
    return typeof i == "string"
      ? this.#t
          .get(i)
          ?.find((o) => o !== a && o.state.isPaused)
          ?.continue() ?? Promise.resolve()
      : Promise.resolve();
  }
  clear() {
    ht.batch(() => {
      this.#e.forEach((a) => {
        this.notify({ type: "removed", mutation: a });
      }),
        this.#e.clear(),
        this.#t.clear();
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(a) {
    const i = { exact: !0, ...a };
    return this.getAll().find((o) => up(i, o));
  }
  findAll(a = {}) {
    return this.getAll().filter((i) => up(a, i));
  }
  notify(a) {
    ht.batch(() => {
      this.listeners.forEach((i) => {
        i(a);
      });
    });
  }
  resumePausedMutations() {
    const a = this.getAll().filter((i) => i.state.isPaused);
    return ht.batch(() => Promise.all(a.map((i) => i.continue().catch(Qt))));
  }
};
function no(a) {
  return a.options.scope?.id;
}
var Dx = class extends xo {
    #e;
    constructor(a = {}) {
      super(), (this.config = a), (this.#e = new Map());
    }
    build(a, i, o) {
      const s = i.queryKey,
        u = i.queryHash ?? Au(s, i);
      let f = this.get(u);
      return (
        f ||
          ((f = new Cx({
            client: a,
            queryKey: s,
            queryHash: u,
            options: a.defaultQueryOptions(i),
            state: o,
            defaultOptions: a.getQueryDefaults(s),
          })),
          this.add(f)),
        f
      );
    }
    add(a) {
      this.#e.has(a.queryHash) ||
        (this.#e.set(a.queryHash, a), this.notify({ type: "added", query: a }));
    }
    remove(a) {
      this.#e.get(a.queryHash) === a &&
        (a.destroy(),
        this.#e.delete(a.queryHash),
        this.notify({ type: "removed", query: a }));
    }
    clear() {
      ht.batch(() => {
        this.getAll().forEach((a) => {
          this.remove(a);
        });
      });
    }
    get(a) {
      return this.#e.get(a);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(a) {
      const i = { exact: !0, ...a };
      return this.getAll().find((o) => cp(i, o));
    }
    findAll(a = {}) {
      const i = this.getAll();
      return Object.keys(a).length > 0 ? i.filter((o) => cp(a, o)) : i;
    }
    notify(a) {
      ht.batch(() => {
        this.listeners.forEach((i) => {
          i(a);
        });
      });
    }
    onFocus() {
      ht.batch(() => {
        this.getAll().forEach((a) => {
          a.onFocus();
        });
      });
    }
    onOnline() {
      ht.batch(() => {
        this.getAll().forEach((a) => {
          a.onOnline();
        });
      });
    }
  },
  Mx = class {
    #e;
    #t;
    #n;
    #l;
    #i;
    #a;
    #s;
    #r;
    constructor(a = {}) {
      (this.#e = a.queryCache || new Dx()),
        (this.#t = a.mutationCache || new _x()),
        (this.#n = a.defaultOptions || {}),
        (this.#l = new Map()),
        (this.#i = new Map()),
        (this.#a = 0);
    }
    mount() {
      this.#a++,
        this.#a === 1 &&
          ((this.#s = sy.subscribe(async (a) => {
            a && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#r = ho.subscribe(async (a) => {
            a && (await this.resumePausedMutations(), this.#e.onOnline());
          })));
    }
    unmount() {
      this.#a--,
        this.#a === 0 &&
          (this.#s?.(), (this.#s = void 0), this.#r?.(), (this.#r = void 0));
    }
    isFetching(a) {
      return this.#e.findAll({ ...a, fetchStatus: "fetching" }).length;
    }
    isMutating(a) {
      return this.#t.findAll({ ...a, status: "pending" }).length;
    }
    getQueryData(a) {
      const i = this.defaultQueryOptions({ queryKey: a });
      return this.#e.get(i.queryHash)?.state.data;
    }
    ensureQueryData(a) {
      const i = this.defaultQueryOptions(a),
        o = this.#e.build(this, i),
        s = o.state.data;
      return s === void 0
        ? this.fetchQuery(a)
        : (a.revalidateIfStale &&
            o.isStaleByTime(Mi(i.staleTime, o)) &&
            this.prefetchQuery(i),
          Promise.resolve(s));
    }
    getQueriesData(a) {
      return this.#e.findAll(a).map(({ queryKey: i, state: o }) => [i, o.data]);
    }
    setQueryData(a, i, o) {
      const s = this.defaultQueryOptions({ queryKey: a }),
        u = this.#e.get(s.queryHash)?.state.data,
        f = cx(i, u);
      if (f !== void 0)
        return this.#e.build(this, s).setData(f, { ...o, manual: !0 });
    }
    setQueriesData(a, i, o) {
      return ht.batch(() =>
        this.#e
          .findAll(a)
          .map(({ queryKey: s }) => [s, this.setQueryData(s, i, o)])
      );
    }
    getQueryState(a) {
      const i = this.defaultQueryOptions({ queryKey: a });
      return this.#e.get(i.queryHash)?.state;
    }
    removeQueries(a) {
      const i = this.#e;
      ht.batch(() => {
        i.findAll(a).forEach((o) => {
          i.remove(o);
        });
      });
    }
    resetQueries(a, i) {
      const o = this.#e;
      return ht.batch(() => {
        const s = o.findAll(a),
          u = new Set(s);
        return (
          s.forEach((f) => {
            f.reset();
          }),
          this.refetchQueries({ type: "active", predicate: (f) => u.has(f) }, i)
        );
      });
    }
    cancelQueries(a, i = {}) {
      const o = { revert: !0, ...i },
        s = ht.batch(() => this.#e.findAll(a).map((u) => u.cancel(o)));
      return Promise.all(s).then(Qt).catch(Qt);
    }
    invalidateQueries(a, i = {}) {
      return ht.batch(
        () => (
          this.#e.findAll(a).forEach((o) => {
            o.invalidate();
          }),
          a?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...a, type: a?.refetchType ?? a?.type ?? "active" },
                i
              )
        )
      );
    }
    refetchQueries(a, i = {}) {
      const o = { ...i, cancelRefetch: i.cancelRefetch ?? !0 },
        s = ht.batch(() =>
          this.#e
            .findAll(a)
            .filter((u) => !u.isDisabled() && !u.isStatic())
            .map((u) => {
              let f = u.fetch(void 0, o);
              return (
                o.throwOnError || (f = f.catch(Qt)),
                u.state.fetchStatus === "paused" ? Promise.resolve() : f
              );
            })
        );
      return Promise.all(s).then(Qt);
    }
    async query(a) {
      const i = this.defaultQueryOptions(a);
      i.retry === void 0 && (i.retry = !1);
      const o = this.#e.build(this, i),
        s = o.isStaleByTime(Mi(i.staleTime, o))
          ? await o.fetch(i)
          : o.state.data,
        u = i.select;
      return u ? u(s) : s;
    }
    fetchQuery(a) {
      const i = this.defaultQueryOptions(a);
      i.retry === void 0 && (i.retry = !1);
      const o = this.#e.build(this, i);
      return o.isStaleByTime(Mi(i.staleTime, o))
        ? o.fetch(i)
        : Promise.resolve(o.state.data);
    }
    prefetchQuery(a) {
      return this.fetchQuery(a).then(Qt).catch(Qt);
    }
    infiniteQuery(a) {
      return (a._type = "infinite"), this.query(a);
    }
    fetchInfiniteQuery(a) {
      return (a._type = "infinite"), this.fetchQuery(a);
    }
    prefetchInfiniteQuery(a) {
      return this.fetchInfiniteQuery(a).then(Qt).catch(Qt);
    }
    ensureInfiniteQueryData(a) {
      return (a._type = "infinite"), this.ensureQueryData(a);
    }
    resumePausedMutations() {
      return ho.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(a) {
      this.#n = a;
    }
    setQueryDefaults(a, i) {
      this.#l.set(zi(a), { queryKey: a, defaultOptions: i });
    }
    getQueryDefaults(a) {
      const i = [...this.#l.values()],
        o = {};
      return (
        i.forEach((s) => {
          Tl(a, s.queryKey) && Object.assign(o, s.defaultOptions);
        }),
        o
      );
    }
    setMutationDefaults(a, i) {
      this.#i.set(zi(a), { mutationKey: a, defaultOptions: i });
    }
    getMutationDefaults(a) {
      const i = [...this.#i.values()],
        o = {};
      return (
        i.forEach((s) => {
          Tl(a, s.mutationKey) && Object.assign(o, s.defaultOptions);
        }),
        o
      );
    }
    defaultQueryOptions(a) {
      if (a._defaulted) return a;
      const i = {
        ...this.#n.queries,
        ...this.getQueryDefaults(a.queryKey),
        ...a,
        _defaulted: !0,
      };
      return (
        i.queryHash || (i.queryHash = Au(i.queryKey, i)),
        i.refetchOnReconnect === void 0 &&
          (i.refetchOnReconnect = i.networkMode !== "always"),
        i.throwOnError === void 0 && (i.throwOnError = !!i.suspense),
        !i.networkMode && i.persister && (i.networkMode = "offlineFirst"),
        i.queryFn === Cu && (i.enabled = !1),
        i
      );
    }
    defaultMutationOptions(a) {
      return a?._defaulted
        ? a
        : {
            ...this.#n.mutations,
            ...(a?.mutationKey && this.getMutationDefaults(a.mutationKey)),
            ...a,
            _defaulted: !0,
          };
    }
    clear() {
      this.#e.clear(), this.#t.clear();
    }
  };
function yp(a) {
  if (a instanceof Error) return a;
  if (typeof a == "string") return new Error(a);
  try {
    return new Error(JSON.stringify(a));
  } catch {
    return new Error(String(a));
  }
}
function jx({ error: a, resetError: i }) {
  return g.jsx("div", {
    className:
      "min-h-screen w-full flex items-center justify-center bg-gray-50 p-6",
    children: g.jsxs("div", {
      className: "max-w-lg w-full text-center",
      children: [
        g.jsx("h1", {
          className: "text-xl font-semibold text-gray-900",
          children: "Something went wrong",
        }),
        g.jsx("p", {
          className: "mt-2 text-sm text-gray-600",
          children:
            "This part of the app hit an error. The rest of the app is still running.",
        }),
        null,
        g.jsx("button", {
          type: "button",
          onClick: i,
          className:
            "mt-4 rounded bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700",
          children: "Try again",
        }),
      ],
    }),
  });
}
class dy extends S.Component {
  state = { error: null };
  static getDerivedStateFromError(i) {
    return { error: yp(i) };
  }
  componentDidCatch(i, o) {
    console.error("ErrorBoundary caught an error:", yp(i), o.componentStack);
  }
  componentDidUpdate(i) {
    this.state.error !== null &&
      i.resetKey !== this.props.resetKey &&
      this.resetError();
  }
  resetError = () => {
    this.setState({ error: null });
  };
  render() {
    const { error: i } = this.state;
    if (i === null) return this.props.children;
    const o = this.props.FallbackComponent ?? jx;
    return g.jsx(o, { error: i, resetError: this.resetError });
  }
}
var So = ly(),
  zx = Object.defineProperty,
  Cl = (a, i) => zx(a, "name", { value: i, configurable: !0 }),
  hy = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
function st(a, i, { checkForDefaultPrevented: o = !0 } = {}) {
  return Cl(function (u) {
    if ((a?.(u), o === !1 || !u || !u.defaultPrevented)) return i?.(u);
  }, "handleEvent");
}
Cl(st, "composeEventHandlers");
function Ux(a) {
  if (!hy) throw new Error("Cannot access window outside of the DOM");
  return a?.ownerDocument?.defaultView ?? window;
}
Cl(Ux, "getOwnerWindow");
function uu(a) {
  if (!hy) throw new Error("Cannot access document outside of the DOM");
  return a?.ownerDocument ?? document;
}
Cl(uu, "getOwnerDocument");
function my(a, i = !1) {
  const { activeElement: o } = uu(a);
  if (!o?.nodeName) return null;
  if (py(o) && o.contentDocument) return my(o.contentDocument.body, i);
  if (i) {
    const s = o.getAttribute("aria-activedescendant");
    if (s) {
      const u = uu(o).getElementById(s);
      if (u) return u;
    }
  }
  return o;
}
Cl(my, "getActiveElement");
function py(a) {
  return a.tagName === "IFRAME";
}
Cl(py, "isFrame");
var kx = Object.defineProperty,
  Ou = (a, i) => kx(a, "name", { value: i, configurable: !0 });
function fu(a, i) {
  if (typeof a == "function") return a(i);
  a != null && (a.current = i);
}
Ou(fu, "setRef");
function yy(...a) {
  return (i) => {
    let o = !1;
    const s = a.map((u) => {
      const f = fu(u, i);
      return !o && typeof f == "function" && (o = !0), f;
    });
    if (o)
      return () => {
        for (let u = 0; u < s.length; u++) {
          const f = s[u];
          typeof f == "function" ? f() : fu(a[u], null);
        }
      };
  };
}
Ou(yy, "composeRefs");
function mt(...a) {
  return S.useCallback(yy(...a), a);
}
Ou(mt, "useComposedRefs");
var Lx = Object.defineProperty,
  Xt = (a, i) => Lx(a, "name", { value: i, configurable: !0 });
function Hx(a, i) {
  const o = S.createContext(i);
  o.displayName = a + "Context";
  const s = Xt((f) => {
    const { children: h, ...p } = f,
      m = S.useMemo(() => p, Object.values(p));
    return g.jsx(o.Provider, { value: m, children: h });
  }, "Provider");
  s.displayName = a + "Provider";
  function u(f, h = {}) {
    const { optional: p = !1 } = h,
      m = S.useContext(o);
    if (m) return m;
    if (i !== void 0) return i;
    if (!p) throw new Error(`\`${f}\` must be used within \`${a}\``);
  }
  return Xt(u, "useContext"), [s, u];
}
Xt(Hx, "createContext");
function sa(a, i = []) {
  let o = [];
  function s(f, h) {
    const p = S.createContext(h);
    p.displayName = f + "Context";
    const m = o.length;
    o = [...o, h];
    const y = Xt((w) => {
      const { scope: E, children: R, ...O } = w,
        _ = E?.[a]?.[m] || p,
        M = S.useMemo(() => O, Object.values(O));
      return g.jsx(_.Provider, { value: M, children: R });
    }, "Provider");
    y.displayName = f + "Provider";
    function b(w, E, R = {}) {
      const { optional: O = !1 } = R,
        _ = E?.[a]?.[m] || p,
        M = S.useContext(_);
      if (M) return M;
      if (h !== void 0) return h;
      if (!O) throw new Error(`\`${w}\` must be used within \`${f}\``);
    }
    return Xt(b, "useContext"), [y, b];
  }
  Xt(s, "createContext");
  const u = Xt(() => {
    const f = o.map((h) => S.createContext(h));
    return Xt(function (p) {
      const m = p?.[a] || f;
      return S.useMemo(() => ({ [`__scope${a}`]: { ...p, [a]: m } }), [p, m]);
    }, "useScope");
  }, "createScope");
  return (u.scopeName = a), [s, vy(u, ...i)];
}
Xt(sa, "createContextScope");
function vy(...a) {
  const i = a[0];
  if (a.length === 1) return i;
  const o = Xt(() => {
    const s = a.map((u) => ({ useScope: u(), scopeName: u.scopeName }));
    return Xt(function (f) {
      const h = s.reduce((p, { useScope: m, scopeName: y }) => {
        const w = m(f)[`__scope${y}`];
        return { ...p, ...w };
      }, {});
      return S.useMemo(() => ({ [`__scope${i.scopeName}`]: h }), [h]);
    }, "useComposedScopes");
  }, "createScope");
  return (o.scopeName = i.scopeName), o;
}
Xt(vy, "composeContextScopes");
var qx = Object.defineProperty,
  Pt = (a, i) => qx(a, "name", { value: i, configurable: !0 });
function El(a) {
  const i = S.forwardRef((o, s) => {
    let { children: u, ...f } = o,
      h = null,
      p = !1;
    const m = [];
    du(u) && typeof ao == "function" && (u = ao(u._payload)),
      S.Children.forEach(u, (E) => {
        if (wy(E)) {
          p = !0;
          const R = E;
          let O = "child" in R.props ? R.props.child : R.props.children;
          du(O) && typeof ao == "function" && (O = ao(O._payload)),
            (h = Bx(R, O)),
            m.push(h?.props?.children);
        } else m.push(E);
      }),
      h
        ? (h = S.cloneElement(h, void 0, m))
        : !p && S.Children.count(u) === 1 && S.isValidElement(u) && (h = u);
    const y = h ? Sy(h) : void 0,
      b = mt(s, y);
    if (!h) {
      if (u || u === 0) throw new Error(p ? Vx(a) : Yx(a));
      return u;
    }
    const w = xy(f, h.props ?? {});
    return h.type !== S.Fragment && (w.ref = s ? b : y), S.cloneElement(h, w);
  });
  return (i.displayName = `${a}.Slot`), i;
}
Pt(El, "createSlot");
var gy = Symbol.for("radix.slottable");
function by(a) {
  const i = Pt(
    (o) => ("child" in o ? o.children(o.child) : o.children),
    "Slottable"
  );
  return (i.displayName = `${a}.Slottable`), (i.__radixId = gy), i;
}
Pt(by, "createSlottable");
var Bx = Pt((a, i) => {
  if ("child" in a.props) {
    const o = a.props.child;
    return S.isValidElement(o)
      ? S.cloneElement(o, void 0, a.props.children(o.props.children))
      : null;
  }
  return S.isValidElement(i) ? i : null;
}, "getSlottableElementFromSlottable");
function xy(a, i) {
  const o = { ...i };
  for (const s in i) {
    const u = a[s],
      f = i[s];
    /^on[A-Z]/.test(s)
      ? u && f
        ? (o[s] = (...p) => {
            const m = f(...p);
            return u(...p), m;
          })
        : u && (o[s] = u)
      : s === "style"
      ? (o[s] = { ...u, ...f })
      : s === "className"
      ? (o[s] = [u, f].filter(Boolean).join(" "))
      : s === "aria-describedby" && (o[s] = Ey(f, u));
  }
  return { ...a, ...o };
}
Pt(xy, "mergeProps");
function Sy(a) {
  let i = Object.getOwnPropertyDescriptor(a.props, "ref")?.get,
    o = i && "isReactWarning" in i && i.isReactWarning;
  return o
    ? a.ref
    : ((i = Object.getOwnPropertyDescriptor(a, "ref")?.get),
      (o = i && "isReactWarning" in i && i.isReactWarning),
      o ? a.props.ref : a.props.ref || a.ref);
}
Pt(Sy, "getElementRef");
function wy(a) {
  return (
    S.isValidElement(a) &&
    typeof a.type == "function" &&
    "__radixId" in a.type &&
    a.type.__radixId === gy
  );
}
Pt(wy, "isSlottable");
var Gx = Symbol.for("react.lazy");
function du(a) {
  return (
    a != null &&
    typeof a == "object" &&
    "$$typeof" in a &&
    a.$$typeof === Gx &&
    "_payload" in a &&
    Ty(a._payload)
  );
}
Pt(du, "isLazyComponent");
function Ty(a) {
  return typeof a == "object" && a !== null && "then" in a;
}
Pt(Ty, "isPromiseLike");
function Ey(...a) {
  const i = new Set();
  for (const o of a)
    if (typeof o == "string")
      for (const s of String(o).trim().split(/\s+/)) s && i.add(s);
  return i.size > 0 ? Array.from(i).join(" ") : void 0;
}
Pt(Ey, "concatAriaDescribedby");
var Yx = Pt(
    (a) =>
      `${a} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
    "createSlotError"
  ),
  Vx = Pt(
    (a) =>
      `${a} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
    "createSlottableError"
  ),
  ao = Al[" use ".trim().toString()],
  Qx = Object.defineProperty,
  et = (a, i) => Qx(a, "name", { value: i, configurable: !0 });
function Ru(a) {
  const i = a + "CollectionProvider",
    [o, s] = sa(i),
    [u, f] = o(i, { collectionRef: { current: null }, itemMap: new Map() }),
    h = et((_) => {
      const { scope: M, children: L } = _,
        H = S.useRef(null),
        z = S.useRef(new Map()).current;
      return g.jsx(u, { scope: M, itemMap: z, collectionRef: H, children: L });
    }, "CollectionProvider");
  h.displayName = i;
  const p = a + "CollectionSlot",
    m = El(p),
    y = S.forwardRef((_, M) => {
      const { scope: L, children: H } = _,
        z = f(p, L),
        q = mt(M, z.collectionRef);
      return g.jsx(m, { ref: q, children: H });
    });
  y.displayName = p;
  const b = a + "CollectionItemSlot",
    w = "data-radix-collection-item",
    E = El(b),
    R = S.forwardRef((_, M) => {
      const { scope: L, children: H, ...z } = _,
        q = S.useRef(null),
        V = mt(M, q),
        Z = f(b, L);
      return (
        S.useEffect(
          () => (
            Z.itemMap.set(q, { ref: q, ...z }),
            () => {
              Z.itemMap.delete(q);
            }
          )
        ),
        g.jsx(E, { [w]: "", ref: V, children: H })
      );
    });
  R.displayName = b;
  function O(_) {
    const M = f(a + "CollectionConsumer", _);
    return S.useCallback(() => {
      const H = M.collectionRef.current;
      if (!H) return [];
      const z = Array.from(H.querySelectorAll(`[${w}]`));
      return Array.from(M.itemMap.values()).sort(
        (Z, $) => z.indexOf(Z.ref.current) - z.indexOf($.ref.current)
      );
    }, [M.collectionRef, M.itemMap]);
  }
  return et(O, "useCollection"), [{ Provider: h, Slot: y, ItemSlot: R }, O, s];
}
et(Ru, "createCollection");
var vp = new WeakMap(),
  Qe,
  Mt,
  Wc =
    ((Mt = class extends Map {
      constructor(o) {
        super(o);
        Wm(this, Qe);
        Xc(this, Qe, [...super.keys()]), vp.set(this, !0);
      }
      set(o, s) {
        return (
          vp.get(this) &&
            (this.has(o)
              ? (rt(this, Qe)[rt(this, Qe).indexOf(o)] = o)
              : rt(this, Qe).push(o)),
          super.set(o, s),
          this
        );
      }
      insert(o, s, u) {
        const f = this.has(s),
          h = rt(this, Qe).length,
          p = Nu(o);
        let m = p >= 0 ? p : h + p;
        const y = m < 0 || m >= h ? -1 : m;
        if (y === this.size || (f && y === this.size - 1) || y === -1)
          return this.set(s, u), this;
        const b = this.size + (f ? 0 : 1);
        p < 0 && m++;
        const w = [...rt(this, Qe)];
        let E,
          R = !1;
        for (let O = m; O < b; O++)
          if (m === O) {
            let _ = w[O];
            w[O] === s && (_ = w[O + 1]),
              f && this.delete(s),
              (E = this.get(_)),
              this.set(s, u);
          } else {
            !R && w[O - 1] === s && (R = !0);
            const _ = w[R ? O : O - 1],
              M = E;
            (E = this.get(_)), this.delete(_), this.set(_, M);
          }
        return this;
      }
      with(o, s, u) {
        const f = new Mt(this);
        return f.insert(o, s, u), f;
      }
      before(o) {
        const s = rt(this, Qe).indexOf(o) - 1;
        if (!(s < 0)) return this.entryAt(s);
      }
      setBefore(o, s, u) {
        const f = rt(this, Qe).indexOf(o);
        return f === -1 ? this : this.insert(f, s, u);
      }
      after(o) {
        let s = rt(this, Qe).indexOf(o);
        if (((s = s === -1 || s === this.size - 1 ? -1 : s + 1), s !== -1))
          return this.entryAt(s);
      }
      setAfter(o, s, u) {
        const f = rt(this, Qe).indexOf(o);
        return f === -1 ? this : this.insert(f + 1, s, u);
      }
      first() {
        return this.entryAt(0);
      }
      last() {
        return this.entryAt(-1);
      }
      clear() {
        return Xc(this, Qe, []), super.clear();
      }
      delete(o) {
        const s = super.delete(o);
        return s && rt(this, Qe).splice(rt(this, Qe).indexOf(o), 1), s;
      }
      deleteAt(o) {
        const s = this.keyAt(o);
        return s !== void 0 ? this.delete(s) : !1;
      }
      at(o) {
        const s = oo(rt(this, Qe), o);
        if (s !== void 0) return this.get(s);
      }
      entryAt(o) {
        const s = oo(rt(this, Qe), o);
        if (s !== void 0) return [s, this.get(s)];
      }
      indexOf(o) {
        return rt(this, Qe).indexOf(o);
      }
      keyAt(o) {
        return oo(rt(this, Qe), o);
      }
      from(o, s) {
        const u = this.indexOf(o);
        if (u === -1) return;
        let f = u + s;
        return (
          f < 0 && (f = 0), f >= this.size && (f = this.size - 1), this.at(f)
        );
      }
      keyFrom(o, s) {
        const u = this.indexOf(o);
        if (u === -1) return;
        let f = u + s;
        return (
          f < 0 && (f = 0), f >= this.size && (f = this.size - 1), this.keyAt(f)
        );
      }
      find(o, s) {
        let u = 0;
        for (const f of this) {
          if (Reflect.apply(o, s, [f, u, this])) return f;
          u++;
        }
      }
      findIndex(o, s) {
        let u = 0;
        for (const f of this) {
          if (Reflect.apply(o, s, [f, u, this])) return u;
          u++;
        }
        return -1;
      }
      filter(o, s) {
        const u = [];
        let f = 0;
        for (const h of this)
          Reflect.apply(o, s, [h, f, this]) && u.push(h), f++;
        return new Mt(u);
      }
      map(o, s) {
        const u = [];
        let f = 0;
        for (const h of this)
          u.push([h[0], Reflect.apply(o, s, [h, f, this])]), f++;
        return new Mt(u);
      }
      reduce(...o) {
        const [s, u] = o;
        let f = 0,
          h = u ?? this.at(0);
        for (const p of this)
          f === 0 && o.length === 1
            ? (h = p)
            : (h = Reflect.apply(s, this, [h, p, f, this])),
            f++;
        return h;
      }
      reduceRight(...o) {
        const [s, u] = o;
        let f = u ?? this.at(-1);
        for (let h = this.size - 1; h >= 0; h--) {
          const p = this.at(h);
          h === this.size - 1 && o.length === 1
            ? (f = p)
            : (f = Reflect.apply(s, this, [f, p, h, this]));
        }
        return f;
      }
      toSorted(o) {
        const s = [...this.entries()].sort(o);
        return new Mt(s);
      }
      toReversed() {
        const o = new Mt();
        for (let s = this.size - 1; s >= 0; s--) {
          const u = this.keyAt(s),
            f = this.get(u);
          o.set(u, f);
        }
        return o;
      }
      toSpliced(...o) {
        const s = [...this.entries()];
        return s.splice(...o), new Mt(s);
      }
      slice(o, s) {
        const u = new Mt();
        let f = this.size - 1;
        if (o === void 0) return u;
        o < 0 && (o = o + this.size), s !== void 0 && s > 0 && (f = s - 1);
        for (let h = o; h <= f; h++) {
          const p = this.keyAt(h),
            m = this.get(p);
          u.set(p, m);
        }
        return u;
      }
      every(o, s) {
        let u = 0;
        for (const f of this) {
          if (!Reflect.apply(o, s, [f, u, this])) return !1;
          u++;
        }
        return !0;
      }
      some(o, s) {
        let u = 0;
        for (const f of this) {
          if (Reflect.apply(o, s, [f, u, this])) return !0;
          u++;
        }
        return !1;
      }
    }),
    (Qe = new WeakMap()),
    et(Mt, "OrderedDict"),
    Mt);
function oo(a, i) {
  if ("at" in Array.prototype) return Array.prototype.at.call(a, i);
  const o = Ay(a, i);
  return o === -1 ? void 0 : a[o];
}
et(oo, "at");
function Ay(a, i) {
  const o = a.length,
    s = Nu(i),
    u = s >= 0 ? s : o + s;
  return u < 0 || u >= o ? -1 : u;
}
et(Ay, "toSafeIndex");
function Nu(a) {
  return a !== a || a === 0 ? 0 : Math.trunc(a);
}
et(Nu, "toSafeInteger");
function Xx(a) {
  const i = a + "CollectionProvider",
    [o, s] = sa(i),
    [u, f] = o(i, {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new Wc(),
      setItemMap: et(() => {}, "setItemMap"),
    }),
    h = et(
      ({ state: z, ...q }) =>
        z ? g.jsx(m, { ...q, state: z }) : g.jsx(p, { ...q }),
      "CollectionProvider"
    );
  h.displayName = i;
  const p = et((z) => {
    const q = M();
    return g.jsx(m, { ...z, state: q });
  }, "CollectionInit");
  p.displayName = i + "Init";
  const m = et((z) => {
    const { scope: q, children: V, state: Z } = z,
      $ = S.useRef(null),
      [X, I] = S.useState(null),
      fe = mt($, I),
      [be, ae] = Z;
    return (
      S.useEffect(() => {
        if (!X) return;
        const de = Ry(() => {});
        return (
          de.observe(X, { childList: !0, subtree: !0 }),
          () => {
            de.disconnect();
          }
        );
      }, [X]),
      g.jsx(u, {
        scope: q,
        itemMap: be,
        setItemMap: ae,
        collectionRef: fe,
        collectionRefObject: $,
        collectionElement: X,
        children: V,
      })
    );
  }, "CollectionProviderImpl");
  m.displayName = i + "Impl";
  const y = a + "CollectionSlot",
    b = El(y),
    w = S.forwardRef((z, q) => {
      const { scope: V, children: Z } = z,
        $ = f(y, V),
        X = mt(q, $.collectionRef);
      return g.jsx(b, { ref: X, children: Z });
    });
  w.displayName = y;
  const E = a + "CollectionItemSlot",
    R = "data-radix-collection-item",
    O = El(E),
    _ = S.forwardRef((z, q) => {
      const { scope: V, children: Z, ...$ } = z,
        X = S.useRef(null),
        [I, fe] = S.useState(null),
        be = mt(q, X, fe),
        ae = f(E, V),
        { setItemMap: de } = ae,
        he = S.useRef($);
      Cy(he.current, $) || (he.current = $);
      const me = he.current;
      return (
        S.useEffect(() => {
          const C = me;
          return (
            de((Y) =>
              I
                ? Y.has(I)
                  ? Y.set(I, { ...C, element: I }).toSorted(hu)
                  : (Y.set(I, { ...C, element: I }), Y.toSorted(hu))
                : Y
            ),
            () => {
              de((Y) => (!I || !Y.has(I) ? Y : (Y.delete(I), new Wc(Y))));
            }
          );
        }, [I, me, de]),
        g.jsx(O, { [R]: "", ref: be, children: Z })
      );
    });
  _.displayName = E;
  function M() {
    return S.useState(new Wc());
  }
  et(M, "useInitCollection");
  function L(z) {
    const { itemMap: q } = f(a + "CollectionConsumer", z);
    return q;
  }
  return (
    et(L, "useCollection"),
    [
      { Provider: h, Slot: w, ItemSlot: _ },
      { createCollectionScope: s, useCollection: L, useInitCollection: M },
    ]
  );
}
et(Xx, "createCollection");
function Cy(a, i) {
  if (a === i) return !0;
  if (typeof a != "object" || typeof i != "object" || a == null || i == null)
    return !1;
  const o = Object.keys(a),
    s = Object.keys(i);
  if (o.length !== s.length) return !1;
  for (const u of o)
    if (!Object.prototype.hasOwnProperty.call(i, u) || a[u] !== i[u]) return !1;
  return !0;
}
et(Cy, "shallowEqual");
function Oy(a, i) {
  return !!(i.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING);
}
et(Oy, "isElementPreceding");
function hu(a, i) {
  return !a[1].element || !i[1].element
    ? 0
    : Oy(a[1].element, i[1].element)
    ? -1
    : 1;
}
et(hu, "sortByDocumentPosition");
function Ry(a) {
  return new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList") {
        a();
        return;
      }
  });
}
et(Ry, "getChildListObserver");
var Px = Object.defineProperty,
  Zx = (a, i) => Px(a, "name", { value: i, configurable: !0 }),
  Kx = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  ut = Kx.reduce((a, i) => {
    const o = El(`Primitive.${i}`),
      s = S.forwardRef((u, f) => {
        const { asChild: h, ...p } = u,
          m = h ? o : i;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          g.jsx(m, { ...p, ref: f })
        );
      });
    return (s.displayName = `Primitive.${i}`), { ...a, [i]: s };
  }, {});
function _u(a, i) {
  a && So.flushSync(() => a.dispatchEvent(i));
}
Zx(_u, "dispatchDiscreteCustomEvent");
var $x = Object.defineProperty,
  Jx = (a, i) => $x(a, "name", { value: i, configurable: !0 });
function Dn(a) {
  const i = S.useRef(a);
  return (
    S.useEffect(() => {
      i.current = a;
    }),
    S.useMemo(
      () =>
        (...o) =>
          i.current?.(...o),
      []
    )
  );
}
Jx(Dn, "useCallbackRef");
var Fx = Object.defineProperty,
  Ke = (a, i) => Fx(a, "name", { value: i, configurable: !0 }),
  mu = "dismissableLayer.update",
  Wx = "dismissableLayer.pointerDownOutside",
  Ix = "dismissableLayer.focusOutside",
  gp,
  Du = S.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
    dismissableSurfaces: new Set(),
  }),
  Ny = S.forwardRef(
    Ke(function (i, o) {
      const {
          disableOutsidePointerEvents: s = !1,
          deferPointerDownOutside: u = !1,
          onEscapeKeyDown: f,
          onPointerDownOutside: h,
          onFocusOutside: p,
          onInteractOutside: m,
          onDismiss: y,
          ...b
        } = i,
        w = S.useContext(Du),
        [E, R] = S.useState(null),
        O = E?.ownerDocument ?? globalThis?.document,
        [, _] = S.useState({}),
        M = mt(o, R),
        L = Array.from(w.layers),
        [H] = [...w.layersWithOutsidePointerEventsDisabled].slice(-1),
        z = H ? L.indexOf(H) : -1,
        q = E ? L.indexOf(E) : -1,
        V = w.layersWithOutsidePointerEventsDisabled.size > 0,
        Z = q >= z,
        $ = S.useRef(!1),
        X = _y(
          (ae) => {
            h?.(ae), m?.(ae), ae.defaultPrevented || y?.();
          },
          {
            ownerDocument: O,
            deferPointerDownOutside: u,
            isDeferredPointerDownOutsideRef: $,
            dismissableSurfaces: w.dismissableSurfaces,
            shouldHandlePointerDownOutside: S.useCallback(
              (ae) => {
                if (!(ae instanceof Node)) return !1;
                const de = [...w.branches].some((he) => he.contains(ae));
                return Z && !de;
              },
              [w.branches, Z]
            ),
          }
        ),
        I = Dy((ae) => {
          if (u && $.current) return;
          const de = ae.target;
          [...w.branches].some((me) => me.contains(de)) ||
            (p?.(ae), m?.(ae), ae.defaultPrevented || y?.());
        }, O),
        fe = E ? q === L.length - 1 : !1,
        be = Dn((ae) => {
          ae.key === "Escape" &&
            (f?.(ae), !ae.defaultPrevented && y && (ae.preventDefault(), y()));
        });
      return (
        S.useEffect(() => {
          if (fe)
            return (
              O.addEventListener("keydown", be, { capture: !0 }),
              () => O.removeEventListener("keydown", be, { capture: !0 })
            );
        }, [O, fe, be]),
        S.useEffect(() => {
          if (E)
            return (
              s &&
                (w.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  ((gp = O.body.style.pointerEvents),
                  (O.body.style.pointerEvents = "none")),
                w.layersWithOutsidePointerEventsDisabled.add(E)),
              w.layers.add(E),
              pu(),
              () => {
                s &&
                  (w.layersWithOutsidePointerEventsDisabled.delete(E),
                  w.layersWithOutsidePointerEventsDisabled.size === 0 &&
                    (O.body.style.pointerEvents = gp));
              }
            );
        }, [E, O, s, w]),
        S.useEffect(
          () => () => {
            E &&
              (w.layers.delete(E),
              w.layersWithOutsidePointerEventsDisabled.delete(E),
              pu());
          },
          [E, w]
        ),
        S.useEffect(() => {
          const ae = Ke(() => _({}), "handleUpdate");
          return (
            document.addEventListener(mu, ae),
            () => document.removeEventListener(mu, ae)
          );
        }, []),
        g.jsx(ut.div, {
          ...b,
          ref: M,
          style: {
            pointerEvents: V ? (Z ? "auto" : "none") : void 0,
            ...i.style,
          },
          onFocusCapture: st(i.onFocusCapture, I.onFocusCapture),
          onBlurCapture: st(i.onBlurCapture, I.onBlurCapture),
          onPointerDownCapture: st(
            i.onPointerDownCapture,
            X.onPointerDownCapture
          ),
        })
      );
    }, "DismissableLayer")
  ),
  e1 = S.forwardRef(
    Ke(function (i, o) {
      const s = S.useContext(Du),
        u = S.useRef(null),
        f = mt(o, u);
      return (
        S.useEffect(() => {
          const h = u.current;
          if (h)
            return (
              s.branches.add(h),
              () => {
                s.branches.delete(h);
              }
            );
        }, [s.branches]),
        g.jsx(ut.div, { ...i, ref: f })
      );
    }, "DismissableLayerBranch")
  );
function t1() {
  const a = S.useContext(Du),
    [i, o] = S.useState(null);
  return (
    S.useEffect(() => {
      if (i)
        return (
          a.dismissableSurfaces.add(i),
          () => {
            a.dismissableSurfaces.delete(i);
          }
        );
    }, [i, a.dismissableSurfaces]),
    o
  );
}
Ke(t1, "useDismissableLayerSurface");
var n1 = Ke(() => !0, "IS_TRUE");
function _y(a, i) {
  const {
      ownerDocument: o = globalThis?.document,
      deferPointerDownOutside: s = !1,
      isDeferredPointerDownOutsideRef: u,
      dismissableSurfaces: f,
      shouldHandlePointerDownOutside: h = n1,
    } = i,
    p = Dn(a),
    m = S.useRef(!1),
    y = S.useRef(!1),
    b = S.useRef(new Map()),
    w = S.useRef(() => {});
  return (
    S.useEffect(() => {
      function E() {
        (y.current = !1), (u.current = !1), b.current.clear();
      }
      Ke(E, "resetOutsideInteraction");
      function R() {
        return Array.from(b.current.values()).some(Boolean);
      }
      Ke(R, "isOutsideInteractionIntercepted");
      function O(z) {
        if (!y.current) return;
        const q = z.target;
        (q instanceof Node && [...f].some((Z) => Z.contains(q))) ||
          b.current.set(z.type, !0),
          z.type === "click" &&
            window.setTimeout(() => {
              y.current && w.current();
            }, 0);
      }
      Ke(O, "handleInteractionCapture");
      function _(z) {
        y.current && b.current.set(z.type, !1);
      }
      Ke(_, "handleInteractionBubble");
      const M = Ke((z) => {
          if (z.target && !m.current) {
            let q = function () {
              o.removeEventListener("click", w.current);
              const Z = R();
              E(), Z || Mu(Wx, p, V, { discrete: !0 });
            };
            if (
              (Ke(q, "handleAndDispatchPointerDownOutsideEvent"), !h(z.target))
            ) {
              o.removeEventListener("click", w.current), E(), (m.current = !1);
              return;
            }
            const V = { originalEvent: z };
            (y.current = !0),
              (u.current = s && z.button === 0),
              b.current.clear(),
              !s || z.button !== 0
                ? q()
                : (o.removeEventListener("click", w.current),
                  (w.current = q),
                  o.addEventListener("click", w.current, { once: !0 }));
          } else o.removeEventListener("click", w.current), E();
          m.current = !1;
        }, "handlePointerDown"),
        L = [
          "pointerup",
          "mousedown",
          "mouseup",
          "touchstart",
          "touchend",
          "click",
        ];
      for (const z of L) o.addEventListener(z, O, !0), o.addEventListener(z, _);
      const H = window.setTimeout(() => {
        o.addEventListener("pointerdown", M);
      }, 0);
      return () => {
        window.clearTimeout(H),
          o.removeEventListener("pointerdown", M),
          o.removeEventListener("click", w.current);
        for (const z of L)
          o.removeEventListener(z, O, !0), o.removeEventListener(z, _);
      };
    }, [o, p, s, u, f, h]),
    { onPointerDownCapture: Ke(() => (m.current = !0), "onPointerDownCapture") }
  );
}
Ke(_y, "usePointerDownOutside");
function Dy(a, i = globalThis?.document) {
  const o = Dn(a),
    s = S.useRef(!1);
  return (
    S.useEffect(() => {
      const u = Ke((f) => {
        f.target &&
          !s.current &&
          Mu(Ix, o, { originalEvent: f }, { discrete: !1 });
      }, "handleFocus");
      return (
        i.addEventListener("focusin", u),
        () => i.removeEventListener("focusin", u)
      );
    }, [i, o]),
    {
      onFocusCapture: Ke(() => (s.current = !0), "onFocusCapture"),
      onBlurCapture: Ke(() => (s.current = !1), "onBlurCapture"),
    }
  );
}
Ke(Dy, "useFocusOutside");
function pu() {
  const a = new CustomEvent(mu);
  document.dispatchEvent(a);
}
Ke(pu, "dispatchUpdate");
function Mu(a, i, o, { discrete: s }) {
  const u = o.originalEvent.target,
    f = new CustomEvent(a, { bubbles: !1, cancelable: !0, detail: o });
  i && u.addEventListener(a, i, { once: !0 }),
    s ? _u(u, f) : u.dispatchEvent(f);
}
Ke(Mu, "handleAndDispatchCustomEvent");
var jt = globalThis?.document ? S.useLayoutEffect : () => {},
  a1 = Object.defineProperty,
  l1 = (a, i) => a1(a, "name", { value: i, configurable: !0 }),
  My = S.forwardRef(
    l1(function (i, o) {
      const { container: s, ...u } = i,
        [f, h] = S.useState(!1);
      jt(() => h(!0), []);
      const p = s || (f && globalThis?.document?.body);
      return p ? So.createPortal(g.jsx(ut.div, { ...u, ref: o }), p) : null;
    }, "Portal")
  ),
  i1 = Object.defineProperty,
  Mn = (a, i) => i1(a, "name", { value: i, configurable: !0 });
function jy(a, i) {
  return S.useReducer((o, s) => i[o][s] ?? o, a);
}
Mn(jy, "useStateMachine");
var wo = Mn((a) => {
  const { present: i, children: o } = a,
    s = zy(i),
    u =
      typeof o == "function" ? o({ present: s.isPresent }) : S.Children.only(o),
    f = Uy(s.ref, ky(u));
  return typeof o == "function" || s.isPresent
    ? S.cloneElement(u, { ref: f })
    : null;
}, "Presence");
function zy(a) {
  const [i, o] = S.useState(),
    s = S.useRef(null),
    u = S.useRef(a),
    f = S.useRef("none"),
    h = S.useRef(void 0),
    p = a ? "mounted" : "unmounted",
    [m, y] = jy(p, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    S.useEffect(() => {
      m === "mounted"
        ? ((f.current = h.current ?? xl(s.current)), (h.current = void 0))
        : (f.current = "none");
    }, [m]),
    jt(() => {
      const b = s.current,
        w = u.current;
      if (w !== a) {
        const R = f.current,
          O = xl(b);
        a
          ? ((h.current = O), y("MOUNT"))
          : O === "none" || b?.display === "none"
          ? y("UNMOUNT")
          : y(w && R !== O ? "ANIMATION_OUT" : "UNMOUNT"),
          (u.current = a);
      }
    }, [a, y]),
    jt(() => {
      if (i) {
        let b;
        const w = i.ownerDocument.defaultView ?? window,
          E = Mn((O) => {
            const M = xl(s.current).includes(CSS.escape(O.animationName));
            if (O.target === i && M && (y("ANIMATION_END"), !u.current)) {
              const L = i.style.animationFillMode;
              (i.style.animationFillMode = "forwards"),
                (b = w.setTimeout(() => {
                  i.style.animationFillMode === "forwards" &&
                    (i.style.animationFillMode = L);
                }));
            }
          }, "handleAnimationEnd"),
          R = Mn((O) => {
            O.target === i && (f.current = xl(s.current));
          }, "handleAnimationStart");
        return (
          i.addEventListener("animationstart", R),
          i.addEventListener("animationcancel", E),
          i.addEventListener("animationend", E),
          () => {
            w.clearTimeout(b),
              i.removeEventListener("animationstart", R),
              i.removeEventListener("animationcancel", E),
              i.removeEventListener("animationend", E);
          }
        );
      } else y("ANIMATION_END");
    }, [i, y]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(m),
      ref: S.useCallback((b) => {
        if (b) {
          const w = getComputedStyle(b);
          (s.current = w), (h.current = xl(w));
        } else s.current = null;
        o(b);
      }, []),
    }
  );
}
Mn(zy, "usePresence");
function yu(a, i) {
  if (typeof a == "function") return a(i);
  a != null && (a.current = i);
}
Mn(yu, "setRef");
function Uy(...a) {
  const i = S.useRef(a);
  return (
    (i.current = a),
    S.useCallback((o) => {
      const s = i.current;
      let u = !1;
      const f = s.map((h) => {
        const p = yu(h, o);
        return !u && typeof p == "function" && (u = !0), p;
      });
      if (u)
        return () => {
          for (let h = 0; h < f.length; h++) {
            const p = f[h];
            typeof p == "function" ? p() : yu(s[h], null);
          }
        };
    }, [])
  );
}
Mn(Uy, "useStableComposedRefs");
function xl(a) {
  return a?.animationName || "none";
}
Mn(xl, "getAnimationName");
function ky(a) {
  let i = Object.getOwnPropertyDescriptor(a.props, "ref")?.get,
    o = i && "isReactWarning" in i && i.isReactWarning;
  return o
    ? a.ref
    : ((i = Object.getOwnPropertyDescriptor(a, "ref")?.get),
      (o = i && "isReactWarning" in i && i.isReactWarning),
      o ? a.props.ref : a.props.ref || a.ref);
}
Mn(ky, "getElementRef");
var r1 = Object.defineProperty,
  o1 = (a, i) => r1(a, "name", { value: i, configurable: !0 }),
  bp = Al[" useEffectEvent ".trim().toString()],
  xp = Al[" useInsertionEffect ".trim().toString()];
function Ly(a) {
  if (typeof bp == "function") return bp(a);
  const i = S.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return (
    typeof xp == "function"
      ? xp(() => {
          i.current = a;
        })
      : jt(() => {
          i.current = a;
        }),
    S.useMemo(
      () =>
        (...o) =>
          i.current?.(...o),
      []
    )
  );
}
o1(Ly, "useEffectEvent");
var s1 = Object.defineProperty,
  Hi = (a, i) => s1(a, "name", { value: i, configurable: !0 }),
  c1 = Al[" useInsertionEffect ".trim().toString()] || jt;
function qi({
  prop: a,
  defaultProp: i,
  onChange: o = Hi(() => {}, "onChange"),
  caller: s,
}) {
  const [u, f, h] = Hy({ defaultProp: i, onChange: o }),
    p = a !== void 0,
    m = p ? a : u,
    y = S.useCallback(
      (b) => {
        if (p) {
          const w = qy(b) ? b(a) : b;
          w !== a && h.current?.(w);
        } else f(b);
      },
      [p, a, f, h]
    );
  return [m, y];
}
Hi(qi, "useControllableState");
function Hy({ defaultProp: a, onChange: i }) {
  const [o, s] = S.useState(a),
    u = S.useRef(o),
    f = S.useRef(i);
  return (
    c1(() => {
      f.current = i;
    }, [i]),
    S.useEffect(() => {
      u.current !== o && (f.current?.(o), (u.current = o));
    }, [o, u]),
    [o, s, f]
  );
}
Hi(Hy, "useUncontrolledState");
function qy(a) {
  return typeof a == "function";
}
Hi(qy, "isFunction");
var Sp = Symbol("RADIX:SYNC_STATE");
function u1(a, i, o, s) {
  const { prop: u, defaultProp: f, onChange: h, caller: p } = i,
    m = u !== void 0,
    y = Ly(h),
    b = [{ ...o, state: f }];
  s && b.push(s);
  const [w, E] = S.useReducer((M, L) => {
      if (L.type === Sp) return { ...M, state: L.state };
      const H = a(M, L);
      return m && !Object.is(H.state, M.state) && y(H.state), H;
    }, ...b),
    R = w.state,
    O = S.useRef(R);
  S.useEffect(() => {
    O.current !== R && ((O.current = R), m || y(R));
  }, [R, O, m]);
  const _ = S.useMemo(() => (u !== void 0 ? { ...w, state: u } : w), [w, u]);
  return (
    S.useEffect(() => {
      m && !Object.is(u, w.state) && E({ type: Sp, state: u });
    }, [u, w.state, m]),
    [_, E]
  );
}
Hi(u1, "useControllableStateReducer");
var f1 = Object.defineProperty,
  d1 = (a, i) => f1(a, "name", { value: i, configurable: !0 }),
  h1 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  ju = S.forwardRef(
    d1(function (i, o) {
      return g.jsx(ut.span, { ...i, ref: o, style: { ...h1, ...i.style } });
    }, "VisuallyHidden")
  ),
  m1 = Object.defineProperty,
  je = (a, i) => m1(a, "name", { value: i, configurable: !0 }),
  By = "ToastProvider",
  [zu, Gy, p1] = Ru("Toast"),
  vu = { Left: "left", Right: "right" },
  wp = { Foreground: "foreground" },
  [Yy, lA] = sa("Toast", [p1]),
  [y1, To] = Yy(By),
  v1 = je((a) => {
    const {
        __scopeToast: i,
        label: o = "Notification",
        duration: s = 5e3,
        swipeDirection: u = vu.Right,
        swipeThreshold: f = 50,
        announcerContainer: h,
        children: p,
      } = a,
      [m, y] = S.useState(null),
      [b, w] = S.useState(0),
      E = S.useRef(!1);
    return (
      o.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${By}\`. Expected non-empty \`string\`.`
        ),
      g.jsx(zu.Provider, {
        scope: i,
        children: g.jsx(y1, {
          scope: i,
          label: o,
          duration: s,
          swipeDirection: u,
          swipeThreshold: f,
          toastCount: b,
          viewport: m,
          onViewportChange: y,
          onToastAdd: S.useCallback(() => w((R) => R + 1), []),
          onToastRemove: S.useCallback(() => w((R) => R - 1), []),
          isClosePausedRef: E,
          announcerContainer: h,
          children: p,
        }),
      })
    );
  }, "ToastProvider"),
  g1 = "ToastViewport",
  b1 = ["F8"],
  gu = "toast.viewportPause",
  bu = "toast.viewportResume",
  Vy = S.forwardRef(
    je(function (i, o) {
      const {
          __scopeToast: s,
          hotkey: u = b1,
          label: f = "Notifications ({hotkey})",
          ...h
        } = i,
        p = To(g1, s),
        m = Gy(s),
        y = S.useRef(null),
        b = S.useRef(null),
        w = S.useRef(null),
        E = S.useRef(null),
        R = mt(o, E, p.onViewportChange),
        O = u.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
        _ = p.toastCount > 0;
      S.useEffect(() => {
        const L = je((H) => {
          u.length !== 0 &&
            u.every((q) => H[q] || H.code === q) &&
            E.current?.focus();
        }, "handleKeyDown");
        return (
          document.addEventListener("keydown", L),
          () => document.removeEventListener("keydown", L)
        );
      }, [u]),
        S.useEffect(() => {
          const L = y.current,
            H = E.current;
          if (_ && L && H) {
            const z = je(() => {
                if (!p.isClosePausedRef.current) {
                  const $ = new CustomEvent(gu);
                  H.dispatchEvent($), (p.isClosePausedRef.current = !0);
                }
              }, "handlePause"),
              q = je(() => {
                if (p.isClosePausedRef.current) {
                  const $ = new CustomEvent(bu);
                  H.dispatchEvent($), (p.isClosePausedRef.current = !1);
                }
              }, "handleResume"),
              V = je(($) => {
                !L.contains($.relatedTarget) && q();
              }, "handleFocusOutResume"),
              Z = je(() => {
                L.contains(document.activeElement) || q();
              }, "handlePointerLeaveResume");
            return (
              L.addEventListener("focusin", z),
              L.addEventListener("focusout", V),
              L.addEventListener("pointermove", z),
              L.addEventListener("pointerleave", Z),
              window.addEventListener("blur", z),
              window.addEventListener("focus", q),
              () => {
                L.removeEventListener("focusin", z),
                  L.removeEventListener("focusout", V),
                  L.removeEventListener("pointermove", z),
                  L.removeEventListener("pointerleave", Z),
                  window.removeEventListener("blur", z),
                  window.removeEventListener("focus", q);
              }
            );
          }
        }, [_, p.isClosePausedRef]);
      const M = S.useCallback(
        ({ tabbingDirection: L }) => {
          const z = m().map((q) => {
            const V = q.ref.current,
              Z = [V, ...Fy(V)];
            return L === "forwards" ? Z : Z.reverse();
          });
          return (L === "forwards" ? z.reverse() : z).flat();
        },
        [m]
      );
      return (
        S.useEffect(() => {
          const L = E.current;
          if (L) {
            const H = je((z) => {
              const q = z.altKey || z.ctrlKey || z.metaKey;
              if (z.key === "Tab" && !q) {
                const Z = document.activeElement,
                  $ = z.shiftKey;
                if (z.target === L && $) {
                  b.current?.focus();
                  return;
                }
                const fe = M({
                    tabbingDirection: $ ? "backwards" : "forwards",
                  }),
                  be = fe.findIndex((ae) => ae === Z);
                so(fe.slice(be + 1))
                  ? z.preventDefault()
                  : $
                  ? b.current?.focus()
                  : w.current?.focus();
              }
            }, "handleKeyDown");
            return (
              L.addEventListener("keydown", H),
              () => L.removeEventListener("keydown", H)
            );
          }
        }, [m, M]),
        g.jsxs(e1, {
          ref: y,
          role: "region",
          "aria-label": f.replace("{hotkey}", O),
          tabIndex: -1,
          style: { pointerEvents: _ ? void 0 : "none" },
          children: [
            _ &&
              g.jsx(Tp, {
                ref: b,
                onFocusFromOutsideViewport: () => {
                  const L = M({ tabbingDirection: "forwards" });
                  so(L);
                },
              }),
            g.jsx(zu.Slot, {
              scope: s,
              children: g.jsx(ut.ol, { tabIndex: -1, ...h, ref: R }),
            }),
            _ &&
              g.jsx(Tp, {
                ref: w,
                onFocusFromOutsideViewport: () => {
                  const L = M({ tabbingDirection: "backwards" });
                  so(L);
                },
              }),
          ],
        })
      );
    }, "ToastViewport")
  ),
  x1 = "ToastFocusProxy",
  Tp = S.forwardRef(
    je(function (i, o) {
      const { __scopeToast: s, onFocusFromOutsideViewport: u, ...f } = i,
        h = To(x1, s);
      return g.jsx(ju, {
        tabIndex: 0,
        ...f,
        ref: o,
        style: { position: "fixed" },
        onFocus: (p) => {
          const m = p.relatedTarget;
          !h.viewport?.contains(m) && u();
        },
      });
    }, "ToastFocusProxy")
  ),
  Eo = "Toast",
  S1 = "toast.swipeStart",
  w1 = "toast.swipeMove",
  T1 = "toast.swipeCancel",
  E1 = "toast.swipeEnd",
  Qy = S.forwardRef(
    je(function (i, o) {
      const {
          forceMount: s,
          open: u,
          defaultOpen: f,
          onOpenChange: h,
          ...p
        } = i,
        [m, y] = qi({ prop: u, defaultProp: f ?? !0, onChange: h, caller: Eo });
      return g.jsx(wo, {
        present: s || m,
        children: g.jsx(O1, {
          open: m,
          ...p,
          ref: o,
          onClose: () => y(!1),
          onPause: Dn(i.onPause),
          onResume: Dn(i.onResume),
          onSwipeStart: st(i.onSwipeStart, (b) => {
            b.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: st(i.onSwipeMove, (b) => {
            const { x: w, y: E } = b.detail.delta;
            b.currentTarget.setAttribute("data-swipe", "move"),
              b.currentTarget.style.setProperty(
                "--radix-toast-swipe-move-x",
                `${w}px`
              ),
              b.currentTarget.style.setProperty(
                "--radix-toast-swipe-move-y",
                `${E}px`
              );
          }),
          onSwipeCancel: st(i.onSwipeCancel, (b) => {
            b.currentTarget.setAttribute("data-swipe", "cancel"),
              b.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-x"
              ),
              b.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-y"
              ),
              b.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
              b.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: st(i.onSwipeEnd, (b) => {
            const { x: w, y: E } = b.detail.delta;
            b.currentTarget.setAttribute("data-swipe", "end"),
              b.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-x"
              ),
              b.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-y"
              ),
              b.currentTarget.style.setProperty(
                "--radix-toast-swipe-end-x",
                `${w}px`
              ),
              b.currentTarget.style.setProperty(
                "--radix-toast-swipe-end-y",
                `${E}px`
              ),
              y(!1);
          }),
        }),
      });
    }, "Toast")
  ),
  [A1, C1] = Yy(Eo, { onClose() {} }),
  O1 = S.forwardRef(
    je(function (i, o) {
      const {
          __scopeToast: s,
          type: u = wp.Foreground,
          duration: f,
          open: h,
          onClose: p,
          onEscapeKeyDown: m,
          onPause: y,
          onResume: b,
          onSwipeStart: w,
          onSwipeMove: E,
          onSwipeCancel: R,
          onSwipeEnd: O,
          ..._
        } = i,
        M = To(Eo, s),
        L = Gy(s),
        [H, z] = S.useState(null),
        q = mt(o, z),
        V = S.useRef(null),
        Z = S.useRef(null),
        $ = f || M.duration,
        X = S.useRef(0),
        I = S.useRef($),
        fe = S.useRef(0),
        { onToastAdd: be, onToastRemove: ae } = M,
        de = Dn(() => {
          H?.contains(document.activeElement) && M.viewport?.focus(), p();
        }),
        he = S.useCallback(
          (C) => {
            !C ||
              C === 1 / 0 ||
              (window.clearTimeout(fe.current),
              (X.current = new Date().getTime()),
              (fe.current = window.setTimeout(de, C)));
          },
          [de]
        );
      S.useEffect(() => {
        const C = M.viewport;
        if (C) {
          const Y = je(() => {
              he(I.current), b?.();
            }, "handleResume"),
            K = je(() => {
              const ie = new Date().getTime() - X.current;
              (I.current = I.current - ie),
                window.clearTimeout(fe.current),
                y?.();
            }, "handlePause");
          return (
            C.addEventListener(gu, K),
            C.addEventListener(bu, Y),
            () => {
              C.removeEventListener(gu, K), C.removeEventListener(bu, Y);
            }
          );
        }
      }, [M.viewport, $, y, b, he]),
        S.useEffect(() => {
          (I.current = $), h && !M.isClosePausedRef.current && he($);
        }, [h, $, M.isClosePausedRef, he]),
        S.useEffect(
          () => () => {
            window.clearTimeout(fe.current);
          },
          []
        ),
        S.useEffect(() => (be(), () => ae()), [be, ae]);
      const me = S.useMemo(() => (H ? ku(H) : null), [H]);
      return M.viewport
        ? g.jsxs(g.Fragment, {
            children: [
              me &&
                g.jsx(R1, {
                  __scopeToast: s,
                  role: "status",
                  "aria-live": u === wp.Foreground ? "assertive" : "polite",
                  children: me,
                }),
              g.jsx(A1, {
                scope: s,
                onClose: de,
                children: So.createPortal(
                  g.jsx(zu.ItemSlot, {
                    scope: s,
                    children: g.jsx(Ny, {
                      asChild: !0,
                      onEscapeKeyDown: st(m, (C) => {
                        L().some((K) => K.ref.current?.contains(C.target)) ||
                          de();
                      }),
                      children: g.jsx(ut.li, {
                        tabIndex: 0,
                        "data-state": h ? "open" : "closed",
                        "data-swipe-direction": M.swipeDirection,
                        ..._,
                        ref: q,
                        style: {
                          userSelect: "none",
                          touchAction: "none",
                          ...i.style,
                        },
                        onKeyDown: st(i.onKeyDown, (C) => {
                          C.key === "Escape" &&
                            (m?.(C.nativeEvent),
                            C.nativeEvent.defaultPrevented || de());
                        }),
                        onPointerDown: st(i.onPointerDown, (C) => {
                          C.button === 0 &&
                            (V.current = { x: C.clientX, y: C.clientY });
                        }),
                        onPointerMove: st(i.onPointerMove, (C) => {
                          if (!V.current) return;
                          const Y = C.clientX - V.current.x,
                            K = C.clientY - V.current.y,
                            ie = !!Z.current,
                            x = ["left", "right"].includes(M.swipeDirection),
                            Q = ["left", "up"].includes(M.swipeDirection)
                              ? Math.min
                              : Math.max,
                            F = x ? Q(0, Y) : 0,
                            J = x ? 0 : Q(0, K),
                            le = C.pointerType === "touch" ? 10 : 2,
                            oe = { x: F, y: J },
                            te = { originalEvent: C, delta: oe };
                          ie
                            ? ((Z.current = oe),
                              _i(w1, E, te, { discrete: !1 }))
                            : Ep(oe, M.swipeDirection, le)
                            ? ((Z.current = oe),
                              _i(S1, w, te, { discrete: !1 }),
                              C.target.setPointerCapture(C.pointerId))
                            : (Math.abs(Y) > le || Math.abs(K) > le) &&
                              (V.current = null);
                        }),
                        onPointerUp: st(i.onPointerUp, (C) => {
                          const Y = Z.current,
                            K = C.target;
                          if (
                            (K.hasPointerCapture(C.pointerId) &&
                              K.releasePointerCapture(C.pointerId),
                            (Z.current = null),
                            (V.current = null),
                            Y)
                          ) {
                            const ie = C.currentTarget,
                              x = { originalEvent: C, delta: Y };
                            Ep(Y, M.swipeDirection, M.swipeThreshold)
                              ? _i(E1, O, x, { discrete: !0 })
                              : _i(T1, R, x, { discrete: !0 }),
                              ie.addEventListener(
                                "click",
                                (Q) => Q.preventDefault(),
                                { once: !0 }
                              );
                          }
                        }),
                      }),
                    }),
                  }),
                  M.viewport
                ),
              }),
            ],
          })
        : null;
    }, "ToastImpl")
  ),
  R1 = je((a) => {
    const { __scopeToast: i, children: o, ...s } = a,
      u = To(Eo, i),
      [f, h] = S.useState(!1),
      [p, m] = S.useState(!1);
    return (
      $y(() => h(!0)),
      S.useEffect(() => {
        const y = window.setTimeout(() => m(!0), 1e3);
        return () => window.clearTimeout(y);
      }, []),
      p
        ? null
        : g.jsx(My, {
            asChild: !0,
            container: u.announcerContainer || void 0,
            children: g.jsx(ju, {
              ...s,
              children:
                f && g.jsxs(g.Fragment, { children: [u.label, " ", o] }),
            }),
          })
    );
  }, "ToastAnnounce"),
  Xy = S.forwardRef(
    je(function (i, o) {
      const { __scopeToast: s, ...u } = i;
      return g.jsx(ut.div, { ...u, ref: o });
    }, "ToastTitle")
  ),
  Py = S.forwardRef(
    je(function (i, o) {
      const { __scopeToast: s, ...u } = i;
      return g.jsx(ut.div, { ...u, ref: o });
    }, "ToastDescription")
  ),
  N1 = "ToastAction",
  Zy = S.forwardRef(
    je(function (i, o) {
      const { altText: s, ...u } = i;
      return s.trim()
        ? g.jsx(Ky, {
            altText: s,
            asChild: !0,
            children: g.jsx(Uu, { ...u, ref: o }),
          })
        : (console.error(
            `Invalid prop \`altText\` supplied to \`${N1}\`. Expected non-empty \`string\`.`
          ),
          null);
    }, "ToastAction")
  ),
  _1 = "ToastClose",
  Uu = S.forwardRef(
    je(function (i, o) {
      const { __scopeToast: s, ...u } = i,
        f = C1(_1, s);
      return g.jsx(Ky, {
        asChild: !0,
        children: g.jsx(ut.button, {
          type: "button",
          ...u,
          ref: o,
          onClick: st(i.onClick, f.onClose),
        }),
      });
    }, "ToastClose")
  ),
  Ky = S.forwardRef(
    je(function (i, o) {
      const { __scopeToast: s, altText: u, ...f } = i;
      return g.jsx(ut.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": u || void 0,
        ...f,
        ref: o,
      });
    }, "ToastAnnounceExclude")
  );
function ku(a) {
  const i = [];
  return (
    Array.from(a.childNodes).forEach((s) => {
      if (
        (s.nodeType === s.TEXT_NODE && s.textContent && i.push(s.textContent),
        Jy(s))
      ) {
        const u = s.ariaHidden || s.hidden || s.style.display === "none",
          f = s.dataset.radixToastAnnounceExclude === "";
        if (!u)
          if (f) {
            const h = s.dataset.radixToastAnnounceAlt;
            h && i.push(h);
          } else i.push(...ku(s));
      }
    }),
    i
  );
}
je(ku, "getAnnounceTextContent");
function _i(a, i, o, { discrete: s }) {
  const u = o.originalEvent.currentTarget,
    f = new CustomEvent(a, { bubbles: !0, cancelable: !0, detail: o });
  i && u.addEventListener(a, i, { once: !0 }),
    s ? _u(u, f) : u.dispatchEvent(f);
}
je(_i, "handleAndDispatchCustomEvent");
var Ep = je((a, i, o = 0) => {
  const s = Math.abs(a.x),
    u = Math.abs(a.y),
    f = s > u;
  return i === vu.Left || i === vu.Right ? f && s > o : !f && u > o;
}, "isDeltaInDirection");
function $y(a = () => {}) {
  const i = Dn(a);
  jt(() => {
    let o = 0,
      s = 0;
    return (
      (o = window.requestAnimationFrame(
        () => (s = window.requestAnimationFrame(i))
      )),
      () => {
        window.cancelAnimationFrame(o), window.cancelAnimationFrame(s);
      }
    );
  }, [i]);
}
je($y, "useNextFrame");
function Jy(a) {
  return a.nodeType === a.ELEMENT_NODE;
}
je(Jy, "isHTMLElement");
function Fy(a) {
  const i = [],
    o = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
      acceptNode: je((s) => {
        const u = s.tagName === "INPUT" && s.type === "hidden";
        return s.disabled || s.hidden || u
          ? NodeFilter.FILTER_SKIP
          : s.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      }, "acceptNode"),
    });
  for (; o.nextNode(); ) i.push(o.currentNode);
  return i;
}
je(Fy, "getTabbableCandidates");
function so(a) {
  const i = document.activeElement;
  return a.some((o) =>
    o === i ? !0 : (o.focus(), document.activeElement !== i)
  );
}
je(so, "focusFirst");
const D1 = (a, i) => {
    const o = new Array(a.length + i.length);
    for (let s = 0; s < a.length; s++) o[s] = a[s];
    for (let s = 0; s < i.length; s++) o[a.length + s] = i[s];
    return o;
  },
  M1 = (a, i) => ({ classGroupId: a, validator: i }),
  Wy = (a = new Map(), i = null, o) => ({
    nextPart: a,
    validators: i,
    classGroupId: o,
  }),
  mo = "-",
  Ap = [],
  j1 = "arbitrary..",
  z1 = (a) => {
    const i = k1(a),
      { conflictingClassGroups: o, conflictingClassGroupModifiers: s } = a;
    return {
      getClassGroupId: (h) => {
        if (h.startsWith("[") && h.endsWith("]")) return U1(h);
        const p = h.split(mo),
          m = p[0] === "" && p.length > 1 ? 1 : 0;
        return Iy(p, m, i);
      },
      getConflictingClassGroupIds: (h, p) => {
        if (p) {
          const m = s[h],
            y = o[h];
          return m ? (y ? D1(y, m) : m) : y || Ap;
        }
        return o[h] || Ap;
      },
    };
  },
  Iy = (a, i, o) => {
    if (a.length - i === 0) return o.classGroupId;
    const u = a[i],
      f = o.nextPart.get(u);
    if (f) {
      const y = Iy(a, i + 1, f);
      if (y) return y;
    }
    const h = o.validators;
    if (h === null) return;
    const p = i === 0 ? a.join(mo) : a.slice(i).join(mo),
      m = h.length;
    for (let y = 0; y < m; y++) {
      const b = h[y];
      if (b.validator(p)) return b.classGroupId;
    }
  },
  U1 = (a) =>
    a.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const i = a.slice(1, -1),
            o = i.indexOf(":"),
            s = i.slice(0, o);
          return s ? j1 + s : void 0;
        })(),
  k1 = (a) => {
    const { theme: i, classGroups: o } = a;
    return L1(o, i);
  },
  L1 = (a, i) => {
    const o = Wy();
    for (const s in a) {
      const u = a[s];
      Lu(u, o, s, i);
    }
    return o;
  },
  Lu = (a, i, o, s) => {
    const u = a.length;
    for (let f = 0; f < u; f++) {
      const h = a[f];
      H1(h, i, o, s);
    }
  },
  H1 = (a, i, o, s) => {
    if (typeof a == "string") {
      q1(a, i, o);
      return;
    }
    if (typeof a == "function") {
      B1(a, i, o, s);
      return;
    }
    G1(a, i, o, s);
  },
  q1 = (a, i, o) => {
    const s = a === "" ? i : ev(i, a);
    s.classGroupId = o;
  },
  B1 = (a, i, o, s) => {
    if (Y1(a)) {
      Lu(a(s), i, o, s);
      return;
    }
    i.validators === null && (i.validators = []), i.validators.push(M1(o, a));
  },
  G1 = (a, i, o, s) => {
    const u = Object.entries(a),
      f = u.length;
    for (let h = 0; h < f; h++) {
      const [p, m] = u[h];
      Lu(m, ev(i, p), o, s);
    }
  },
  ev = (a, i) => {
    let o = a;
    const s = i.split(mo),
      u = s.length;
    for (let f = 0; f < u; f++) {
      const h = s[f];
      let p = o.nextPart.get(h);
      p || ((p = Wy()), o.nextPart.set(h, p)), (o = p);
    }
    return o;
  },
  Y1 = (a) => "isThemeGetter" in a && a.isThemeGetter === !0,
  V1 = (a) => {
    if (a < 1) return { get: () => {}, set: () => {} };
    let i = 0,
      o = Object.create(null),
      s = Object.create(null);
    const u = (f, h) => {
      (o[f] = h), i++, i > a && ((i = 0), (s = o), (o = Object.create(null)));
    };
    return {
      get(f) {
        let h = o[f];
        if (h !== void 0) return h;
        if ((h = s[f]) !== void 0) return u(f, h), h;
      },
      set(f, h) {
        f in o ? (o[f] = h) : u(f, h);
      },
    };
  },
  xu = "!",
  Cp = ":",
  Q1 = [],
  Op = (a, i, o, s, u) => ({
    modifiers: a,
    hasImportantModifier: i,
    baseClassName: o,
    maybePostfixModifierPosition: s,
    isExternal: u,
  }),
  X1 = (a) => {
    const { prefix: i, experimentalParseClassName: o } = a;
    let s = (u) => {
      const f = [];
      let h = 0,
        p = 0,
        m = 0,
        y;
      const b = u.length;
      for (let _ = 0; _ < b; _++) {
        const M = u[_];
        if (h === 0 && p === 0) {
          if (M === Cp) {
            f.push(u.slice(m, _)), (m = _ + 1);
            continue;
          }
          if (M === "/") {
            y = _;
            continue;
          }
        }
        M === "[" ? h++ : M === "]" ? h-- : M === "(" ? p++ : M === ")" && p--;
      }
      const w = f.length === 0 ? u : u.slice(m);
      let E = w,
        R = !1;
      w.endsWith(xu)
        ? ((E = w.slice(0, -1)), (R = !0))
        : w.startsWith(xu) && ((E = w.slice(1)), (R = !0));
      const O = y && y > m ? y - m : void 0;
      return Op(f, R, E, O);
    };
    if (i) {
      const u = i + Cp,
        f = s;
      s = (h) =>
        h.startsWith(u) ? f(h.slice(u.length)) : Op(Q1, !1, h, void 0, !0);
    }
    if (o) {
      const u = s;
      s = (f) => o({ className: f, parseClassName: u });
    }
    return s;
  },
  P1 = (a) => {
    const i = new Map();
    return (
      a.orderSensitiveModifiers.forEach((o, s) => {
        i.set(o, 1e6 + s);
      }),
      (o) => {
        const s = [];
        let u = [];
        for (let f = 0; f < o.length; f++) {
          const h = o[f],
            p = h[0] === "[",
            m = i.has(h);
          p || m
            ? (u.length > 0 && (u.sort(), s.push(...u), (u = [])), s.push(h))
            : u.push(h);
        }
        return u.length > 0 && (u.sort(), s.push(...u)), s;
      }
    );
  },
  Z1 = (a) => ({
    cache: V1(a.cacheSize),
    parseClassName: X1(a),
    sortModifiers: P1(a),
    postfixLookupClassGroupIds: K1(a),
    ...z1(a),
  }),
  K1 = (a) => {
    const i = Object.create(null),
      o = a.postfixLookupClassGroups;
    if (o) for (let s = 0; s < o.length; s++) i[o[s]] = !0;
    return i;
  },
  $1 = /\s+/,
  J1 = (a, i) => {
    const {
        parseClassName: o,
        getClassGroupId: s,
        getConflictingClassGroupIds: u,
        sortModifiers: f,
        postfixLookupClassGroupIds: h,
      } = i,
      p = [],
      m = a.trim().split($1);
    let y = "";
    for (let b = m.length - 1; b >= 0; b -= 1) {
      const w = m[b],
        {
          isExternal: E,
          modifiers: R,
          hasImportantModifier: O,
          baseClassName: _,
          maybePostfixModifierPosition: M,
        } = o(w);
      if (E) {
        y = w + (y.length > 0 ? " " + y : y);
        continue;
      }
      let L = !!M,
        H;
      if (L) {
        const $ = _.substring(0, M);
        H = s($);
        const X = H && h[H] ? s(_) : void 0;
        X && X !== H && ((H = X), (L = !1));
      } else H = s(_);
      if (!H) {
        if (!L) {
          y = w + (y.length > 0 ? " " + y : y);
          continue;
        }
        if (((H = s(_)), !H)) {
          y = w + (y.length > 0 ? " " + y : y);
          continue;
        }
        L = !1;
      }
      const z = R.length === 0 ? "" : R.length === 1 ? R[0] : f(R).join(":"),
        q = O ? z + xu : z,
        V = q + H;
      if (p.indexOf(V) > -1) continue;
      p.push(V);
      const Z = u(H, L);
      for (let $ = 0; $ < Z.length; ++$) {
        const X = Z[$];
        p.push(q + X);
      }
      y = w + (y.length > 0 ? " " + y : y);
    }
    return y;
  },
  F1 = (...a) => {
    let i = 0,
      o,
      s,
      u = "";
    for (; i < a.length; )
      (o = a[i++]) && (s = tv(o)) && (u && (u += " "), (u += s));
    return u;
  },
  tv = (a) => {
    if (typeof a == "string") return a;
    let i,
      o = "";
    for (let s = 0; s < a.length; s++)
      a[s] && (i = tv(a[s])) && (o && (o += " "), (o += i));
    return o;
  },
  W1 = (a, ...i) => {
    let o, s, u, f;
    const h = (m) => {
        const y = i.reduce((b, w) => w(b), a());
        return (o = Z1(y)), (s = o.cache.get), (u = o.cache.set), (f = p), p(m);
      },
      p = (m) => {
        const y = s(m);
        if (y) return y;
        const b = J1(m, o);
        return u(m, b), b;
      };
    return (f = h), (...m) => f(F1(...m));
  },
  I1 = [],
  Ze = (a) => {
    const i = (o) => o[a] || I1;
    return (i.isThemeGetter = !0), (i.themeKey = a), i;
  },
  nv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  av = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  eS = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  tS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  nS =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  aS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,
  lS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  iS =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  ia = (a) => eS.test(a),
  ve = (a) => !!a && !Number.isNaN(Number(a)),
  rn = (a) => !!a && Number.isInteger(Number(a)),
  Ic = (a) => a.endsWith("%") && ve(a.slice(0, -1)),
  Rn = (a) => tS.test(a),
  lv = () => !0,
  rS = (a) => nS.test(a) && !aS.test(a),
  Hu = () => !1,
  oS = (a) => lS.test(a),
  sS = (a) => iS.test(a),
  cS = (a) => !W(a) && !ee(a),
  uS = (a) =>
    a.startsWith("@container") &&
    ((a[10] === "/" && a[11] !== void 0) ||
      (a[11] === "s" && a[16] !== void 0 && a.startsWith("-size/", 10)) ||
      (a[11] === "n" && a[18] !== void 0 && a.startsWith("-normal/", 10))),
  fS = (a) => ca(a, ov, Hu),
  W = (a) => nv.test(a),
  Na = (a) => ca(a, sv, rS),
  Rp = (a) => ca(a, bS, ve),
  dS = (a) => ca(a, uv, lv),
  hS = (a) => ca(a, cv, Hu),
  Np = (a) => ca(a, iv, Hu),
  mS = (a) => ca(a, rv, sS),
  lo = (a) => ca(a, fv, oS),
  ee = (a) => av.test(a),
  Ri = (a) => ja(a, sv),
  pS = (a) => ja(a, cv),
  _p = (a) => ja(a, iv),
  yS = (a) => ja(a, ov),
  vS = (a) => ja(a, rv),
  io = (a) => ja(a, fv, !0),
  gS = (a) => ja(a, uv, !0),
  ca = (a, i, o) => {
    const s = nv.exec(a);
    return s ? (s[1] ? i(s[1]) : o(s[2])) : !1;
  },
  ja = (a, i, o = !1) => {
    const s = av.exec(a);
    return s ? (s[1] ? i(s[1]) : o) : !1;
  },
  iv = (a) => a === "position" || a === "percentage",
  rv = (a) => a === "image" || a === "url",
  ov = (a) => a === "length" || a === "size" || a === "bg-size",
  sv = (a) => a === "length",
  bS = (a) => a === "number",
  cv = (a) => a === "family-name",
  uv = (a) => a === "number" || a === "weight",
  fv = (a) => a === "shadow",
  xS = () => {
    const a = Ze("color"),
      i = Ze("font"),
      o = Ze("text"),
      s = Ze("font-weight"),
      u = Ze("tracking"),
      f = Ze("leading"),
      h = Ze("breakpoint"),
      p = Ze("container"),
      m = Ze("spacing"),
      y = Ze("radius"),
      b = Ze("shadow"),
      w = Ze("inset-shadow"),
      E = Ze("text-shadow"),
      R = Ze("drop-shadow"),
      O = Ze("blur"),
      _ = Ze("perspective"),
      M = Ze("aspect"),
      L = Ze("ease"),
      H = Ze("animate"),
      z = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      q = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      V = () => [...q(), ee, W],
      Z = () => ["auto", "hidden", "clip", "visible", "scroll"],
      $ = () => ["auto", "contain", "none"],
      X = () => [ee, W, m],
      I = () => [ia, "full", "auto", ...X()],
      fe = () => [rn, "none", "subgrid", ee, W],
      be = () => ["auto", { span: ["full", rn, ee, W] }, rn, ee, W],
      ae = () => [rn, "auto", ee, W],
      de = () => ["auto", "min", "max", "fr", ee, W],
      he = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      me = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      C = () => ["auto", ...X()],
      Y = () => [
        ia,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...X(),
      ],
      K = () => [
        p,
        ia,
        "screen",
        "full",
        "dvw",
        "lvw",
        "svw",
        "min",
        "max",
        "fit",
        ...X(),
      ],
      ie = () => [
        ia,
        "screen",
        "full",
        "lh",
        "dvh",
        "lvh",
        "svh",
        "min",
        "max",
        "fit",
        ...X(),
      ],
      x = () => [a, ee, W],
      Q = () => [...q(), _p, Np, { position: [ee, W] }],
      F = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      J = () => ["auto", "cover", "contain", yS, fS, { size: [ee, W] }],
      le = () => [Ic, Ri, Na],
      oe = () => ["", "none", "full", y, ee, W],
      te = () => ["", ve, Ri, Na],
      Ge = () => ["solid", "dashed", "dotted", "double"],
      Ce = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      Ee = () => [ve, Ic, _p, Np],
      fn = () => ["", "none", O, ee, W],
      Zt = () => ["none", ve, ee, W],
      Ft = () => ["none", ve, ee, W],
      dn = () => [ve, ee, W],
      Wt = () => [ia, "full", ...X()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Rn],
        breakpoint: [Rn],
        color: [lv],
        container: [Rn],
        "drop-shadow": [Rn],
        ease: ["in", "out", "in-out"],
        font: [cS],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Rn],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Rn],
        shadow: [Rn],
        spacing: ["px", ve],
        text: [Rn],
        "text-shadow": [Rn],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", ia, W, ee, M] }],
        container: ["container"],
        "container-type": [{ "@container": ["", "normal", "size", ee, W] }],
        "container-named": [uS],
        columns: [{ columns: [ve, "auto", W, ee, p] }],
        "break-after": [{ "break-after": z() }],
        "break-before": [{ "break-before": z() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: V() }],
        overflow: [{ overflow: Z() }],
        "overflow-x": [{ "overflow-x": Z() }],
        "overflow-y": [{ "overflow-y": Z() }],
        overscroll: [{ overscroll: $() }],
        "overscroll-x": [{ "overscroll-x": $() }],
        "overscroll-y": [{ "overscroll-y": $() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: I() }],
        "inset-x": [{ "inset-x": I() }],
        "inset-y": [{ "inset-y": I() }],
        start: [{ "inset-s": I(), start: I() }],
        end: [{ "inset-e": I(), end: I() }],
        "inset-bs": [{ "inset-bs": I() }],
        "inset-be": [{ "inset-be": I() }],
        top: [{ top: I() }],
        right: [{ right: I() }],
        bottom: [{ bottom: I() }],
        left: [{ left: I() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [rn, "auto", ee, W] }],
        basis: [{ basis: [ia, "full", "auto", p, ...X()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [ve, ia, "auto", "initial", "none", W] }],
        grow: [{ grow: ["", ve, ee, W] }],
        shrink: [{ shrink: ["", ve, ee, W] }],
        order: [{ order: [rn, "first", "last", "none", ee, W] }],
        "grid-cols": [{ "grid-cols": fe() }],
        "col-start-end": [{ col: be() }],
        "col-start": [{ "col-start": ae() }],
        "col-end": [{ "col-end": ae() }],
        "grid-rows": [{ "grid-rows": fe() }],
        "row-start-end": [{ row: be() }],
        "row-start": [{ "row-start": ae() }],
        "row-end": [{ "row-end": ae() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": de() }],
        "auto-rows": [{ "auto-rows": de() }],
        gap: [{ gap: X() }],
        "gap-x": [{ "gap-x": X() }],
        "gap-y": [{ "gap-y": X() }],
        "justify-content": [{ justify: [...he(), "normal"] }],
        "justify-items": [{ "justify-items": [...me(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...me()] }],
        "align-content": [{ content: ["normal", ...he()] }],
        "align-items": [{ items: [...me(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...me(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": he() }],
        "place-items": [{ "place-items": [...me(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...me()] }],
        p: [{ p: X() }],
        px: [{ px: X() }],
        py: [{ py: X() }],
        ps: [{ ps: X() }],
        pe: [{ pe: X() }],
        pbs: [{ pbs: X() }],
        pbe: [{ pbe: X() }],
        pt: [{ pt: X() }],
        pr: [{ pr: X() }],
        pb: [{ pb: X() }],
        pl: [{ pl: X() }],
        m: [{ m: C() }],
        mx: [{ mx: C() }],
        my: [{ my: C() }],
        ms: [{ ms: C() }],
        me: [{ me: C() }],
        mbs: [{ mbs: C() }],
        mbe: [{ mbe: C() }],
        mt: [{ mt: C() }],
        mr: [{ mr: C() }],
        mb: [{ mb: C() }],
        ml: [{ ml: C() }],
        "space-x": [{ "space-x": X() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": X() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: Y() }],
        "inline-size": [{ inline: ["auto", ...K()] }],
        "min-inline-size": [{ "min-inline": ["auto", ...K()] }],
        "max-inline-size": [{ "max-inline": ["none", ...K()] }],
        "block-size": [{ block: ["auto", ...ie()] }],
        "min-block-size": [{ "min-block": ["auto", ...ie()] }],
        "max-block-size": [{ "max-block": ["none", ...ie()] }],
        w: [{ w: [p, "screen", ...Y()] }],
        "min-w": [{ "min-w": [p, "screen", "none", ...Y()] }],
        "max-w": [
          { "max-w": [p, "screen", "none", "prose", { screen: [h] }, ...Y()] },
        ],
        h: [{ h: ["screen", "lh", ...Y()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...Y()] }],
        "max-h": [{ "max-h": ["screen", "lh", "none", ...Y()] }],
        "font-size": [{ text: ["base", o, Ri, Na] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [s, gS, dS] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Ic,
              W,
            ],
          },
        ],
        "font-family": [{ font: [pS, hS, i] }],
        "font-features": [{ "font-features": [W] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [u, ee, W] }],
        "line-clamp": [{ "line-clamp": [ve, "none", ee, Rp] }],
        leading: [{ leading: ["none", f, ...X()] }],
        "list-image": [{ "list-image": ["none", ee, W] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", ee, W] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: x() }],
        "text-color": [{ text: x() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...Ge(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [ve, "from-font", "auto", ee, Na] },
        ],
        "text-decoration-color": [{ decoration: x() }],
        "underline-offset": [{ "underline-offset": [ve, "auto", ee, W] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: X() }],
        "tab-size": [{ tab: [rn, ee, W] }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ee,
              W,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ee, W] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: Q() }],
        "bg-repeat": [{ bg: F() }],
        "bg-size": [{ bg: J() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  rn,
                  ee,
                  W,
                ],
                radial: ["", ee, W],
                conic: ["", rn, ee, W],
              },
              vS,
              mS,
            ],
          },
        ],
        "bg-color": [{ bg: x() }],
        "gradient-from-pos": [{ from: le() }],
        "gradient-via-pos": [{ via: le() }],
        "gradient-to-pos": [{ to: le() }],
        "gradient-from": [{ from: x() }],
        "gradient-via": [{ via: x() }],
        "gradient-to": [{ to: x() }],
        rounded: [{ rounded: oe() }],
        "rounded-s": [{ "rounded-s": oe() }],
        "rounded-e": [{ "rounded-e": oe() }],
        "rounded-t": [{ "rounded-t": oe() }],
        "rounded-r": [{ "rounded-r": oe() }],
        "rounded-b": [{ "rounded-b": oe() }],
        "rounded-l": [{ "rounded-l": oe() }],
        "rounded-ss": [{ "rounded-ss": oe() }],
        "rounded-se": [{ "rounded-se": oe() }],
        "rounded-ee": [{ "rounded-ee": oe() }],
        "rounded-es": [{ "rounded-es": oe() }],
        "rounded-tl": [{ "rounded-tl": oe() }],
        "rounded-tr": [{ "rounded-tr": oe() }],
        "rounded-br": [{ "rounded-br": oe() }],
        "rounded-bl": [{ "rounded-bl": oe() }],
        "border-w": [{ border: te() }],
        "border-w-x": [{ "border-x": te() }],
        "border-w-y": [{ "border-y": te() }],
        "border-w-s": [{ "border-s": te() }],
        "border-w-e": [{ "border-e": te() }],
        "border-w-bs": [{ "border-bs": te() }],
        "border-w-be": [{ "border-be": te() }],
        "border-w-t": [{ "border-t": te() }],
        "border-w-r": [{ "border-r": te() }],
        "border-w-b": [{ "border-b": te() }],
        "border-w-l": [{ "border-l": te() }],
        "divide-x": [{ "divide-x": te() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": te() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...Ge(), "hidden", "none"] }],
        "divide-style": [{ divide: [...Ge(), "hidden", "none"] }],
        "border-color": [{ border: x() }],
        "border-color-x": [{ "border-x": x() }],
        "border-color-y": [{ "border-y": x() }],
        "border-color-s": [{ "border-s": x() }],
        "border-color-e": [{ "border-e": x() }],
        "border-color-bs": [{ "border-bs": x() }],
        "border-color-be": [{ "border-be": x() }],
        "border-color-t": [{ "border-t": x() }],
        "border-color-r": [{ "border-r": x() }],
        "border-color-b": [{ "border-b": x() }],
        "border-color-l": [{ "border-l": x() }],
        "divide-color": [{ divide: x() }],
        "outline-style": [{ outline: [...Ge(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [ve, ee, W] }],
        "outline-w": [{ outline: ["", ve, Ri, Na] }],
        "outline-color": [{ outline: x() }],
        shadow: [{ shadow: ["", "inner", "none", b, io, lo] }],
        "shadow-color": [{ shadow: x() }],
        "inset-shadow": [{ "inset-shadow": ["none", w, io, lo] }],
        "inset-shadow-color": [{ "inset-shadow": x() }],
        "ring-w": [{ ring: te() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: x() }],
        "ring-offset-w": [{ "ring-offset": [ve, Na] }],
        "ring-offset-color": [{ "ring-offset": x() }],
        "inset-ring-w": [{ "inset-ring": te() }],
        "inset-ring-color": [{ "inset-ring": x() }],
        "text-shadow": [{ "text-shadow": ["none", E, io, lo] }],
        "text-shadow-color": [{ "text-shadow": x() }],
        opacity: [{ opacity: [ve, ee, W] }],
        "mix-blend": [
          { "mix-blend": [...Ce(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": Ce() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [ve] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": Ee() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": Ee() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": x() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": x() }],
        "mask-image-t-from-pos": [{ "mask-t-from": Ee() }],
        "mask-image-t-to-pos": [{ "mask-t-to": Ee() }],
        "mask-image-t-from-color": [{ "mask-t-from": x() }],
        "mask-image-t-to-color": [{ "mask-t-to": x() }],
        "mask-image-r-from-pos": [{ "mask-r-from": Ee() }],
        "mask-image-r-to-pos": [{ "mask-r-to": Ee() }],
        "mask-image-r-from-color": [{ "mask-r-from": x() }],
        "mask-image-r-to-color": [{ "mask-r-to": x() }],
        "mask-image-b-from-pos": [{ "mask-b-from": Ee() }],
        "mask-image-b-to-pos": [{ "mask-b-to": Ee() }],
        "mask-image-b-from-color": [{ "mask-b-from": x() }],
        "mask-image-b-to-color": [{ "mask-b-to": x() }],
        "mask-image-l-from-pos": [{ "mask-l-from": Ee() }],
        "mask-image-l-to-pos": [{ "mask-l-to": Ee() }],
        "mask-image-l-from-color": [{ "mask-l-from": x() }],
        "mask-image-l-to-color": [{ "mask-l-to": x() }],
        "mask-image-x-from-pos": [{ "mask-x-from": Ee() }],
        "mask-image-x-to-pos": [{ "mask-x-to": Ee() }],
        "mask-image-x-from-color": [{ "mask-x-from": x() }],
        "mask-image-x-to-color": [{ "mask-x-to": x() }],
        "mask-image-y-from-pos": [{ "mask-y-from": Ee() }],
        "mask-image-y-to-pos": [{ "mask-y-to": Ee() }],
        "mask-image-y-from-color": [{ "mask-y-from": x() }],
        "mask-image-y-to-color": [{ "mask-y-to": x() }],
        "mask-image-radial": [{ "mask-radial": [ee, W] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": Ee() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": Ee() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": x() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": x() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": q() }],
        "mask-image-conic-pos": [{ "mask-conic": [ve] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": Ee() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": Ee() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": x() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": x() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: Q() }],
        "mask-repeat": [{ mask: F() }],
        "mask-size": [{ mask: J() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", ee, W] }],
        filter: [{ filter: ["", "none", ee, W] }],
        blur: [{ blur: fn() }],
        brightness: [{ brightness: [ve, ee, W] }],
        contrast: [{ contrast: [ve, ee, W] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", R, io, lo] }],
        "drop-shadow-color": [{ "drop-shadow": x() }],
        grayscale: [{ grayscale: ["", ve, ee, W] }],
        "hue-rotate": [{ "hue-rotate": [ve, ee, W] }],
        invert: [{ invert: ["", ve, ee, W] }],
        saturate: [{ saturate: [ve, ee, W] }],
        sepia: [{ sepia: ["", ve, ee, W] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", ee, W] }],
        "backdrop-blur": [{ "backdrop-blur": fn() }],
        "backdrop-brightness": [{ "backdrop-brightness": [ve, ee, W] }],
        "backdrop-contrast": [{ "backdrop-contrast": [ve, ee, W] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", ve, ee, W] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [ve, ee, W] }],
        "backdrop-invert": [{ "backdrop-invert": ["", ve, ee, W] }],
        "backdrop-opacity": [{ "backdrop-opacity": [ve, ee, W] }],
        "backdrop-saturate": [{ "backdrop-saturate": [ve, ee, W] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", ve, ee, W] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": X() }],
        "border-spacing-x": [{ "border-spacing-x": X() }],
        "border-spacing-y": [{ "border-spacing-y": X() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              ee,
              W,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [ve, "initial", ee, W] }],
        ease: [{ ease: ["linear", "initial", L, ee, W] }],
        delay: [{ delay: [ve, ee, W] }],
        animate: [{ animate: ["none", H, ee, W] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [_, ee, W] }],
        "perspective-origin": [{ "perspective-origin": V() }],
        rotate: [{ rotate: Zt() }],
        "rotate-x": [{ "rotate-x": Zt() }],
        "rotate-y": [{ "rotate-y": Zt() }],
        "rotate-z": [{ "rotate-z": Zt() }],
        scale: [{ scale: Ft() }],
        "scale-x": [{ "scale-x": Ft() }],
        "scale-y": [{ "scale-y": Ft() }],
        "scale-z": [{ "scale-z": Ft() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: dn() }],
        "skew-x": [{ "skew-x": dn() }],
        "skew-y": [{ "skew-y": dn() }],
        transform: [{ transform: [ee, W, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: V() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Wt() }],
        "translate-x": [{ "translate-x": Wt() }],
        "translate-y": [{ "translate-y": Wt() }],
        "translate-z": [{ "translate-z": Wt() }],
        "translate-none": ["translate-none"],
        zoom: [{ zoom: [rn, ee, W] }],
        accent: [{ accent: x() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: x() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ee,
              W,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": x() }],
        "scrollbar-track-color": [{ "scrollbar-track": x() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": ["auto", "stable", "both"] },
        ],
        "scrollbar-w": [{ scrollbar: ["auto", "thin", "none"] }],
        "scroll-m": [{ "scroll-m": X() }],
        "scroll-mx": [{ "scroll-mx": X() }],
        "scroll-my": [{ "scroll-my": X() }],
        "scroll-ms": [{ "scroll-ms": X() }],
        "scroll-me": [{ "scroll-me": X() }],
        "scroll-mbs": [{ "scroll-mbs": X() }],
        "scroll-mbe": [{ "scroll-mbe": X() }],
        "scroll-mt": [{ "scroll-mt": X() }],
        "scroll-mr": [{ "scroll-mr": X() }],
        "scroll-mb": [{ "scroll-mb": X() }],
        "scroll-ml": [{ "scroll-ml": X() }],
        "scroll-p": [{ "scroll-p": X() }],
        "scroll-px": [{ "scroll-px": X() }],
        "scroll-py": [{ "scroll-py": X() }],
        "scroll-ps": [{ "scroll-ps": X() }],
        "scroll-pe": [{ "scroll-pe": X() }],
        "scroll-pbs": [{ "scroll-pbs": X() }],
        "scroll-pbe": [{ "scroll-pbe": X() }],
        "scroll-pt": [{ "scroll-pt": X() }],
        "scroll-pr": [{ "scroll-pr": X() }],
        "scroll-pb": [{ "scroll-pb": X() }],
        "scroll-pl": [{ "scroll-pl": X() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", ee, W] },
        ],
        fill: [{ fill: ["none", ...x()] }],
        "stroke-w": [{ stroke: [ve, Ri, Na, Rp] }],
        stroke: [{ stroke: ["none", ...x()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        "container-named": ["container-type"],
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "inset-bs",
          "inset-be",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["start", "end", "right", "left"],
        "inset-y": ["inset-bs", "inset-be", "top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["ps", "pe", "pr", "pl"],
        py: ["pbs", "pbe", "pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["ms", "me", "mr", "ml"],
        my: ["mbs", "mbe", "mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-bs",
          "border-w-be",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-s", "border-w-e", "border-w-r", "border-w-l"],
        "border-w-y": [
          "border-w-bs",
          "border-w-be",
          "border-w-t",
          "border-w-b",
        ],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-bs",
          "border-color-be",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": [
          "border-color-s",
          "border-color-e",
          "border-color-r",
          "border-color-l",
        ],
        "border-color-y": [
          "border-color-bs",
          "border-color-be",
          "border-color-t",
          "border-color-b",
        ],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mbs",
          "scroll-mbe",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-ms", "scroll-me", "scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pbs",
          "scroll-pbe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-ps", "scroll-pe", "scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      postfixLookupClassGroups: ["container-type"],
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  SS = W1(xS);
function dv(a) {
  var i,
    o,
    s = "";
  if (typeof a == "string" || typeof a == "number") s += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var u = a.length;
      for (i = 0; i < u; i++)
        a[i] && (o = dv(a[i])) && (s && (s += " "), (s += o));
    } else for (o in a) a[o] && (s && (s += " "), (s += o));
  return s;
}
function hv() {
  for (var a, i, o = 0, s = "", u = arguments.length; o < u; o++)
    (a = arguments[o]) && (i = dv(a)) && (s && (s += " "), (s += i));
  return s;
}
function ft(...a) {
  return SS(hv(a));
}
const Dp = (a) => (typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a),
  Mp = hv,
  wS = (a, i) => (o) => {
    var s;
    if (i?.variants == null) return Mp(a, o?.class, o?.className);
    const { variants: u, defaultVariants: f } = i,
      h = Object.keys(u).map((y) => {
        const b = o?.[y],
          w = f?.[y];
        if (b === null) return null;
        const E = Dp(b) || Dp(w);
        return u[y][E];
      }),
      p =
        o &&
        Object.entries(o).reduce((y, b) => {
          let [w, E] = b;
          return E === void 0 || (y[w] = E), y;
        }, {}),
      m =
        i == null || (s = i.compoundVariants) === null || s === void 0
          ? void 0
          : s.reduce((y, b) => {
              let { class: w, className: E, ...R } = b;
              return Object.entries(R).every((O) => {
                let [_, M] = O;
                return Array.isArray(M)
                  ? M.includes({ ...f, ...p }[_])
                  : { ...f, ...p }[_] === M;
              })
                ? [...y, w, E]
                : y;
            }, []);
    return Mp(a, h, m, o?.class, o?.className);
  };
const TS = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  ES = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, o, s) =>
      s ? s.toUpperCase() : o.toLowerCase()
    ),
  jp = (a) => {
    const i = ES(a);
    return i.charAt(0).toUpperCase() + i.slice(1);
  },
  mv = (...a) =>
    a
      .filter((i, o, s) => !!i && i.trim() !== "" && s.indexOf(i) === o)
      .join(" ")
      .trim(),
  AS = (a) => {
    for (const i in a)
      if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
  };
var CS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const OS = S.forwardRef(
  (
    {
      color: a = "currentColor",
      size: i = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: s,
      className: u = "",
      children: f,
      iconNode: h,
      ...p
    },
    m
  ) =>
    S.createElement(
      "svg",
      {
        ref: m,
        ...CS,
        width: i,
        height: i,
        stroke: a,
        strokeWidth: s ? (Number(o) * 24) / Number(i) : o,
        className: mv("lucide", u),
        ...(!f && !AS(p) && { "aria-hidden": "true" }),
        ...p,
      },
      [
        ...h.map(([y, b]) => S.createElement(y, b)),
        ...(Array.isArray(f) ? f : [f]),
      ]
    )
);
const wt = (a, i) => {
  const o = S.forwardRef(({ className: s, ...u }, f) =>
    S.createElement(OS, {
      ref: f,
      iconNode: i,
      className: mv(`lucide-${TS(jp(a))}`, `lucide-${a}`, s),
      ...u,
    })
  );
  return (o.displayName = jp(a)), o;
};
const RS = [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
  ],
  NS = wt("arrow-down", RS);
const _S = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  pv = wt("check", _S);
const DS = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  MS = wt("chevron-down", DS);
const jS = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  zS = wt("circle-alert", jS);
const US = [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea",
      },
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf",
      },
    ],
  ],
  yv = wt("copy", US);
const kS = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ],
  qu = wt("external-link", kS);
const LS = [
    [
      "rect",
      {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1",
      },
    ],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
  ],
  HS = wt("lock", LS);
const qS = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  BS = wt("menu", qS);
const GS = [
    [
      "rect",
      { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" },
    ],
    [
      "rect",
      { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" },
    ],
  ],
  YS = wt("pause", GS);
const VS = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1",
      },
    ],
  ],
  QS = wt("play", VS);
const XS = [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq",
      },
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ],
  vv = wt("triangle-alert", XS);
const PS = [
    [
      "path",
      {
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
        key: "uqj9uw",
      },
    ],
    ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
    ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }],
  ],
  ZS = wt("volume-2", PS);
const KS = [
    [
      "path",
      {
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
        key: "uqj9uw",
      },
    ],
    ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
    ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }],
  ],
  $S = wt("volume-x", KS);
const JS = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  gv = wt("x", JS),
  FS = v1,
  bv = S.forwardRef(({ className: a, ...i }, o) =>
    g.jsx(Vy, {
      ref: o,
      className: ft(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        a
      ),
      ...i,
    })
  );
bv.displayName = Vy.displayName;
const WS = wS(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  xv = S.forwardRef(({ className: a, variant: i, ...o }, s) =>
    g.jsx(Qy, { ref: s, className: ft(WS({ variant: i }), a), ...o })
  );
xv.displayName = Qy.displayName;
const IS = S.forwardRef(({ className: a, ...i }, o) =>
  g.jsx(Zy, {
    ref: o,
    className: ft(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      a
    ),
    ...i,
  })
);
IS.displayName = Zy.displayName;
const Sv = S.forwardRef(({ className: a, ...i }, o) =>
  g.jsx(Uu, {
    ref: o,
    className: ft(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      a
    ),
    "toast-close": "",
    ...i,
    children: g.jsx(gv, { className: "h-4 w-4" }),
  })
);
Sv.displayName = Uu.displayName;
const wv = S.forwardRef(({ className: a, ...i }, o) =>
  g.jsx(Xy, { ref: o, className: ft("text-sm font-semibold", a), ...i })
);
wv.displayName = Xy.displayName;
const Tv = S.forwardRef(({ className: a, ...i }, o) =>
  g.jsx(Py, { ref: o, className: ft("text-sm opacity-90", a), ...i })
);
Tv.displayName = Py.displayName;
const ew = 1,
  tw = 1e6;
let eu = 0;
function nw() {
  return (eu = (eu + 1) % Number.MAX_SAFE_INTEGER), eu.toString();
}
const tu = new Map(),
  zp = (a) => {
    if (tu.has(a)) return;
    const i = setTimeout(() => {
      tu.delete(a), ji({ type: "REMOVE_TOAST", toastId: a });
    }, tw);
    tu.set(a, i);
  },
  aw = (a, i) => {
    switch (i.type) {
      case "ADD_TOAST":
        return { ...a, toasts: [i.toast, ...a.toasts].slice(0, ew) };
      case "UPDATE_TOAST":
        return {
          ...a,
          toasts: a.toasts.map((o) =>
            o.id === i.toast.id ? { ...o, ...i.toast } : o
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: o } = i;
        return (
          o
            ? zp(o)
            : a.toasts.forEach((s) => {
                zp(s.id);
              }),
          {
            ...a,
            toasts: a.toasts.map((s) =>
              s.id === o || o === void 0 ? { ...s, open: !1 } : s
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return i.toastId === void 0
          ? { ...a, toasts: [] }
          : { ...a, toasts: a.toasts.filter((o) => o.id !== i.toastId) };
    }
  },
  co = [];
let uo = { toasts: [] };
function ji(a) {
  (uo = aw(uo, a)),
    co.forEach((i) => {
      i(uo);
    });
}
function lw({ ...a }) {
  const i = nw(),
    o = (u) => ji({ type: "UPDATE_TOAST", toast: { ...u, id: i } }),
    s = () => ji({ type: "DISMISS_TOAST", toastId: i });
  return (
    ji({
      type: "ADD_TOAST",
      toast: {
        ...a,
        id: i,
        open: !0,
        onOpenChange: (u) => {
          u || s();
        },
      },
    }),
    { id: i, dismiss: s, update: o }
  );
}
function Ev() {
  const [a, i] = S.useState(uo);
  return (
    S.useEffect(
      () => (
        co.push(i),
        () => {
          const o = co.indexOf(i);
          o > -1 && co.splice(o, 1);
        }
      ),
      [a]
    ),
    {
      ...a,
      toast: lw,
      dismiss: (o) => ji({ type: "DISMISS_TOAST", toastId: o }),
    }
  );
}
function iw() {
  const { toasts: a } = Ev();
  return g.jsxs(FS, {
    children: [
      a.map(function ({ id: i, title: o, description: s, action: u, ...f }) {
        return g.jsxs(
          xv,
          {
            ...f,
            children: [
              g.jsxs("div", {
                className: "grid gap-1",
                children: [
                  o && g.jsx(wv, { children: o }),
                  s && g.jsx(Tv, { children: s }),
                ],
              }),
              u,
              g.jsx(Sv, {}),
            ],
          },
          i
        );
      }),
      g.jsx(bv, {}),
    ],
  });
}
var rw = Object.defineProperty,
  ow = (a, i) => rw(a, "name", { value: i, configurable: !0 }),
  sw = Al[" useId ".trim().toString()] || (() => {}),
  cw = 0;
function Bu(a) {
  const [i, o] = S.useState(sw());
  return (
    jt(() => {
      a || o((s) => s ?? String(cw++));
    }, [a]),
    a || (i ? `radix-${i}` : "")
  );
}
ow(Bu, "useId");
const uw = ["top", "right", "bottom", "left"],
  ra = Math.min,
  Nn = Math.max,
  po = Math.round,
  ro = Math.floor,
  _n = (a) => ({ x: a, y: a }),
  fw = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Av(a, i, o) {
  return Nn(a, ra(i, o));
}
function jn(a, i) {
  return typeof a == "function" ? a(i) : a;
}
function oa(a) {
  return a.split("-")[0];
}
function Ol(a) {
  return a.split("-")[1];
}
function Gu(a) {
  return a === "x" ? "y" : "x";
}
function Yu(a) {
  return a === "y" ? "height" : "width";
}
function on(a) {
  const i = a[0];
  return i === "t" || i === "b" ? "y" : "x";
}
function Vu(a) {
  return Gu(on(a));
}
function dw(a, i, o) {
  o === void 0 && (o = !1);
  const s = Ol(a),
    u = Vu(a),
    f = Yu(u);
  let h =
    u === "x"
      ? s === (o ? "end" : "start")
        ? "right"
        : "left"
      : s === "start"
      ? "bottom"
      : "top";
  return i.reference[f] > i.floating[f] && (h = yo(h)), [h, yo(h)];
}
function hw(a) {
  const i = yo(a);
  return [Su(a), i, Su(i)];
}
function Su(a) {
  return a.includes("start")
    ? a.replace("start", "end")
    : a.replace("end", "start");
}
const Up = ["left", "right"],
  kp = ["right", "left"],
  mw = ["top", "bottom"],
  pw = ["bottom", "top"];
function yw(a, i, o) {
  switch (a) {
    case "top":
    case "bottom":
      return o ? (i ? kp : Up) : i ? Up : kp;
    case "left":
    case "right":
      return i ? mw : pw;
    default:
      return [];
  }
}
function vw(a, i, o, s) {
  const u = Ol(a);
  let f = yw(oa(a), o === "start", s);
  return (
    u && ((f = f.map((h) => h + "-" + u)), i && (f = f.concat(f.map(Su)))), f
  );
}
function yo(a) {
  const i = oa(a);
  return fw[i] + a.slice(i.length);
}
function gw(a) {
  var i, o, s, u;
  return {
    top: (i = a.top) != null ? i : 0,
    right: (o = a.right) != null ? o : 0,
    bottom: (s = a.bottom) != null ? s : 0,
    left: (u = a.left) != null ? u : 0,
  };
}
function Cv(a) {
  return typeof a != "number"
    ? gw(a)
    : { top: a, right: a, bottom: a, left: a };
}
function vo(a) {
  const { x: i, y: o, width: s, height: u } = a;
  return {
    width: s,
    height: u,
    top: o,
    left: i,
    right: i + s,
    bottom: o + u,
    x: i,
    y: o,
  };
}
function Lp(a, i, o) {
  let { reference: s, floating: u } = a;
  const f = on(i),
    h = Vu(i),
    p = Yu(h),
    m = oa(i),
    y = f === "y",
    b = s.x + s.width / 2 - u.width / 2,
    w = s.y + s.height / 2 - u.height / 2,
    E = s[p] / 2 - u[p] / 2;
  let R;
  switch (m) {
    case "top":
      R = { x: b, y: s.y - u.height };
      break;
    case "bottom":
      R = { x: b, y: s.y + s.height };
      break;
    case "right":
      R = { x: s.x + s.width, y: w };
      break;
    case "left":
      R = { x: s.x - u.width, y: w };
      break;
    default:
      R = { x: s.x, y: s.y };
  }
  const O = Ol(i);
  return O && (R[h] += E * (O === "end" ? 1 : -1) * (o && y ? -1 : 1)), R;
}
async function bw(a, i) {
  var o;
  i === void 0 && (i = {});
  const { x: s, y: u, platform: f, rects: h, elements: p, strategy: m } = a,
    {
      boundary: y = "clippingAncestors",
      rootBoundary: b = "viewport",
      elementContext: w = "floating",
      altBoundary: E = !1,
      padding: R = 0,
    } = jn(i, a),
    O = Cv(R),
    M = p[E ? (w === "floating" ? "reference" : "floating") : w],
    L = vo(
      await f.getClippingRect({
        element:
          (o = await (f.isElement == null ? void 0 : f.isElement(M))) == null ||
          o
            ? M
            : M.contextElement ||
              (await (f.getDocumentElement == null
                ? void 0
                : f.getDocumentElement(p.floating))),
        boundary: y,
        rootBoundary: b,
        strategy: m,
      })
    ),
    H =
      w === "floating"
        ? { x: s, y: u, width: h.floating.width, height: h.floating.height }
        : h.reference,
    z = await (f.getOffsetParent == null
      ? void 0
      : f.getOffsetParent(p.floating)),
    q = ((await (f.isElement == null ? void 0 : f.isElement(z))) &&
      (await (f.getScale == null ? void 0 : f.getScale(z)))) || { x: 1, y: 1 },
    V = vo(
      f.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: p,
            rect: H,
            offsetParent: z,
            strategy: m,
          })
        : H
    );
  return {
    top: (L.top - V.top + O.top) / q.y,
    bottom: (V.bottom - L.bottom + O.bottom) / q.y,
    left: (L.left - V.left + O.left) / q.x,
    right: (V.right - L.right + O.right) / q.x,
  };
}
const xw = 50,
  Sw = async (a, i, o) => {
    const {
        placement: s = "bottom",
        strategy: u = "absolute",
        middleware: f = [],
        platform: h,
      } = o,
      p = h.detectOverflow ? h : { ...h, detectOverflow: bw },
      m = await (h.isRTL == null ? void 0 : h.isRTL(i));
    let y = await h.getElementRects({ reference: a, floating: i, strategy: u }),
      { x: b, y: w } = Lp(y, s, m),
      E = s,
      R = 0;
    const O = {};
    for (let _ = 0; _ < f.length; _++) {
      const M = f[_];
      if (!M) continue;
      const { name: L, fn: H } = M,
        {
          x: z,
          y: q,
          data: V,
          reset: Z,
        } = await H({
          x: b,
          y: w,
          initialPlacement: s,
          placement: E,
          strategy: u,
          middlewareData: O,
          rects: y,
          platform: p,
          elements: { reference: a, floating: i },
        });
      (b = z ?? b),
        (w = q ?? w),
        (O[L] = { ...O[L], ...V }),
        Z &&
          R < xw &&
          (R++,
          typeof Z == "object" &&
            (Z.placement && (E = Z.placement),
            Z.rects &&
              (y =
                Z.rects === !0
                  ? await h.getElementRects({
                      reference: a,
                      floating: i,
                      strategy: u,
                    })
                  : Z.rects),
            ({ x: b, y: w } = Lp(y, E, m))),
          (_ = -1));
    }
    return { x: b, y: w, placement: E, strategy: u, middlewareData: O };
  },
  ww = (a) => ({
    name: "arrow",
    options: a,
    async fn(i) {
      const {
          x: o,
          y: s,
          placement: u,
          rects: f,
          platform: h,
          elements: p,
          middlewareData: m,
        } = i,
        { element: y, padding: b = 0 } = jn(a, i) || {};
      if (y == null) return {};
      const w = Cv(b),
        E = { x: o, y: s },
        R = Vu(u),
        O = Yu(R),
        _ = await h.getDimensions(y),
        M = R === "y",
        L = M ? "top" : "left",
        H = M ? "bottom" : "right",
        z = M ? "clientHeight" : "clientWidth",
        q = f.reference[O] + f.reference[R] - E[R] - f.floating[O],
        V = E[R] - f.reference[R],
        Z = await (h.getOffsetParent == null ? void 0 : h.getOffsetParent(y));
      let $ = Z ? Z[z] : 0;
      (!$ || !(await (h.isElement == null ? void 0 : h.isElement(Z)))) &&
        ($ = p.floating[z] || f.floating[O]);
      const X = q / 2 - V / 2,
        I = $ / 2 - _[O] / 2 - 1,
        fe = ra(w[L], I),
        be = ra(w[H], I),
        ae = $ - _[O] - be,
        de = $ / 2 - _[O] / 2 + X,
        he = Av(fe, de, ae),
        me =
          !m.arrow &&
          Ol(u) != null &&
          de !== he &&
          f.reference[O] / 2 - (de < fe ? fe : be) - _[O] / 2 < 0,
        C = me ? (de < fe ? de - fe : de - ae) : 0;
      return {
        [R]: E[R] + C,
        data: {
          [R]: he,
          centerOffset: de - he - C,
          ...(me && { alignmentOffset: C }),
        },
        reset: me,
      };
    },
  }),
  Tw = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "flip",
        options: a,
        async fn(i) {
          var o, s;
          const {
              placement: u,
              middlewareData: f,
              rects: h,
              initialPlacement: p,
              platform: m,
              elements: y,
            } = i,
            {
              mainAxis: b = !0,
              crossAxis: w = !0,
              fallbackPlacements: E,
              fallbackStrategy: R = "bestFit",
              fallbackAxisSideDirection: O = "none",
              flipAlignment: _ = !0,
              ...M
            } = jn(a, i);
          if ((o = f.arrow) != null && o.alignmentOffset) return {};
          const L = oa(u),
            H = on(p),
            z = oa(p) === p,
            q = await (m.isRTL == null ? void 0 : m.isRTL(y.floating)),
            V = E || (z || !_ ? [yo(p)] : hw(p)),
            Z = O !== "none";
          !E && Z && V.push(...vw(p, _, O, q));
          const $ = [p, ...V],
            X = await m.detectOverflow(i, M),
            I = [];
          let fe = ((s = f.flip) == null ? void 0 : s.overflows) || [];
          if ((b && I.push(X[L]), w)) {
            const he = dw(u, h, q);
            I.push(X[he[0]], X[he[1]]);
          }
          if (
            ((fe = [...fe, { placement: u, overflows: I }]),
            !I.every((he) => he <= 0))
          ) {
            var be, ae;
            const he = (((be = f.flip) == null ? void 0 : be.index) || 0) + 1,
              me = $[he];
            if (
              me &&
              (!(w === "alignment" ? H !== on(me) : !1) ||
                fe.every((K) =>
                  on(K.placement) === H ? K.overflows[0] > 0 : !0
                ))
            )
              return {
                data: { index: he, overflows: fe },
                reset: { placement: me },
              };
            let C =
              (ae = fe
                .filter((Y) => Y.overflows[0] <= 0)
                .sort((Y, K) => Y.overflows[1] - K.overflows[1])[0]) == null
                ? void 0
                : ae.placement;
            if (!C)
              switch (R) {
                case "bestFit": {
                  var de;
                  const Y =
                    (de = fe
                      .filter((K) => {
                        if (Z) {
                          const ie = on(K.placement);
                          return ie === H || ie === "y";
                        }
                        return !0;
                      })
                      .map((K) => [
                        K.placement,
                        K.overflows
                          .filter((ie) => ie > 0)
                          .reduce((ie, x) => ie + x, 0),
                      ])
                      .sort((K, ie) => K[1] - ie[1])[0]) == null
                      ? void 0
                      : de[0];
                  Y && (C = Y);
                  break;
                }
                case "initialPlacement":
                  C = p;
                  break;
              }
            if (u !== C) return { reset: { placement: C } };
          }
          return {};
        },
      }
    );
  };
function Hp(a, i) {
  return {
    top: a.top - i.height,
    right: a.right - i.width,
    bottom: a.bottom - i.height,
    left: a.left - i.width,
  };
}
function qp(a) {
  return uw.some((i) => a[i] >= 0);
}
const Ew = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "hide",
        options: a,
        async fn(i) {
          const { rects: o, platform: s } = i,
            { strategy: u = "referenceHidden", ...f } = jn(a, i);
          switch (u) {
            case "referenceHidden": {
              const h = await s.detectOverflow(i, {
                  ...f,
                  elementContext: "reference",
                }),
                p = Hp(h, o.reference);
              return {
                data: { referenceHiddenOffsets: p, referenceHidden: qp(p) },
              };
            }
            case "escaped": {
              const h = await s.detectOverflow(i, { ...f, altBoundary: !0 }),
                p = Hp(h, o.floating);
              return { data: { escapedOffsets: p, escaped: qp(p) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Ov = new Set(["left", "top"]);
async function Aw(a, i) {
  const { placement: o, platform: s, elements: u } = a,
    f = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)),
    h = oa(o),
    p = Ol(o),
    m = on(o) === "y",
    y = Ov.has(h) ? -1 : 1,
    b = f && m ? -1 : 1,
    w = jn(i, a);
  let {
    mainAxis: E,
    crossAxis: R,
    alignmentAxis: O,
  } = typeof w == "number"
    ? { mainAxis: w, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: w.mainAxis || 0,
        crossAxis: w.crossAxis || 0,
        alignmentAxis: w.alignmentAxis,
      };
  return (
    p && typeof O == "number" && (R = p === "end" ? O * -1 : O),
    m ? { x: R * b, y: E * y } : { x: E * y, y: R * b }
  );
}
const Cw = function (a) {
    return (
      a === void 0 && (a = 0),
      {
        name: "offset",
        options: a,
        async fn(i) {
          var o, s;
          const { x: u, y: f, placement: h, middlewareData: p } = i,
            m = await Aw(i, a);
          return h === ((o = p.offset) == null ? void 0 : o.placement) &&
            (s = p.arrow) != null &&
            s.alignmentOffset
            ? {}
            : { x: u + m.x, y: f + m.y, data: { ...m, placement: h } };
        },
      }
    );
  },
  Ow = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "shift",
        options: a,
        async fn(i) {
          const { x: o, y: s, placement: u, platform: f } = i,
            {
              mainAxis: h = !0,
              crossAxis: p = !1,
              limiter: m = {
                fn: (H) => {
                  let { x: z, y: q } = H;
                  return { x: z, y: q };
                },
              },
              ...y
            } = jn(a, i),
            b = { x: o, y: s },
            w = await f.detectOverflow(i, y),
            E = on(u),
            R = Gu(E);
          let O = b[R],
            _ = b[E];
          const M = (H, z) =>
            Av(
              z + w[H === "y" ? "top" : "left"],
              z,
              z - w[H === "y" ? "bottom" : "right"]
            );
          h && (O = M(R, O)), p && (_ = M(E, _));
          const L = m.fn({ ...i, [R]: O, [E]: _ });
          return {
            ...L,
            data: { x: L.x - o, y: L.y - s, enabled: { [R]: h, [E]: p } },
          };
        },
      }
    );
  },
  Rw = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        options: a,
        fn(i) {
          var o, s;
          const { x: u, y: f, placement: h, rects: p, middlewareData: m } = i,
            { offset: y = 0, mainAxis: b = !0, crossAxis: w = !0 } = jn(a, i),
            E = { x: u, y: f },
            R = on(h),
            O = Gu(R);
          let _ = E[O],
            M = E[R];
          const L = jn(y, i),
            H =
              typeof L == "number"
                ? { mainAxis: L, crossAxis: 0 }
                : {
                    mainAxis: (o = L.mainAxis) != null ? o : 0,
                    crossAxis: (s = L.crossAxis) != null ? s : 0,
                  };
          if (b) {
            const V = O === "y" ? "height" : "width",
              Z = p.reference[O] - p.floating[V] + H.mainAxis,
              $ = p.reference[O] + p.reference[V] - H.mainAxis;
            _ < Z ? (_ = Z) : _ > $ && (_ = $);
          }
          if (w) {
            var z, q;
            const V = O === "y" ? "width" : "height",
              Z = Ov.has(oa(h)),
              $ =
                p.reference[R] -
                p.floating[V] +
                ((Z && ((z = m.offset) == null ? void 0 : z[R])) || 0) +
                (Z ? 0 : H.crossAxis),
              X =
                p.reference[R] +
                p.reference[V] +
                (Z ? 0 : ((q = m.offset) == null ? void 0 : q[R]) || 0) -
                (Z ? H.crossAxis : 0);
            M < $ ? (M = $) : M > X && (M = X);
          }
          return { [O]: _, [R]: M };
        },
      }
    );
  },
  Nw = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "size",
        options: a,
        async fn(i) {
          const { placement: o, rects: s, platform: u, elements: f } = i,
            { apply: h = () => {}, ...p } = jn(a, i),
            m = await u.detectOverflow(i, p),
            y = oa(o),
            b = Ol(o),
            w = on(o) === "y",
            { width: E, height: R } = s.floating;
          let O, _;
          y === "top" || y === "bottom"
            ? ((O = y),
              (_ =
                b ===
                ((await (u.isRTL == null ? void 0 : u.isRTL(f.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((_ = y), (O = b === "end" ? "top" : "bottom"));
          const M = R - m.top - m.bottom,
            L = E - m.left - m.right,
            H = ra(R - m[O], M),
            z = ra(E - m[_], L),
            q = i.middlewareData.shift,
            V = !q;
          let Z = H,
            $ = z;
          q != null && q.enabled.x && ($ = L),
            q != null && q.enabled.y && (Z = M),
            V &&
              !b &&
              (w
                ? ($ = E - 2 * Nn(m.left, m.right))
                : (Z = R - 2 * Nn(m.top, m.bottom))),
            await h({ ...i, availableWidth: $, availableHeight: Z });
          const X = await u.getDimensions(f.floating);
          return E !== X.width || R !== X.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Ao() {
  return typeof window < "u";
}
function Rl(a) {
  return Rv(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function xt(a) {
  var i;
  return (
    (a == null || (i = a.ownerDocument) == null ? void 0 : i.defaultView) ||
    window
  );
}
function zn(a) {
  var i;
  return (i = (Rv(a) ? a.ownerDocument : a.document) || window.document) == null
    ? void 0
    : i.documentElement;
}
function Rv(a) {
  return Ao() ? a instanceof Node || a instanceof xt(a).Node : !1;
}
function sn(a) {
  return Ao() ? a instanceof Element || a instanceof xt(a).Element : !1;
}
function ua(a) {
  return Ao() ? a instanceof HTMLElement || a instanceof xt(a).HTMLElement : !1;
}
function Bp(a) {
  return !Ao() || typeof ShadowRoot > "u"
    ? !1
    : a instanceof ShadowRoot || a instanceof xt(a).ShadowRoot;
}
function Co(a) {
  const { overflow: i, overflowX: o, overflowY: s, display: u } = cn(a);
  return (
    /auto|scroll|overlay|hidden|clip/.test(i + s + o) &&
    u !== "inline" &&
    u !== "contents"
  );
}
function _w(a) {
  return /^(table|td|th)$/.test(Rl(a));
}
function Oo(a) {
  try {
    if (a.matches(":popover-open")) return !0;
  } catch {}
  try {
    return a.matches(":modal");
  } catch {
    return !1;
  }
}
const Dw = /transform|translate|scale|rotate|perspective|filter/,
  Mw = /paint|layout|strict|content/,
  _a = (a) => !!a && a !== "none";
let nu;
function Qu(a) {
  const i = sn(a) ? cn(a) : a;
  return (
    _a(i.transform) ||
    _a(i.translate) ||
    _a(i.scale) ||
    _a(i.rotate) ||
    _a(i.perspective) ||
    (!Xu() && (_a(i.backdropFilter) || _a(i.filter))) ||
    Dw.test(i.willChange || "") ||
    Mw.test(i.contain || "")
  );
}
function jw(a) {
  let i = Da(a);
  for (; ua(i) && !Ui(i); ) {
    if (Qu(i)) return i;
    if (Oo(i)) return null;
    i = Da(i);
  }
  return null;
}
function Xu() {
  return (
    nu == null &&
      (nu =
        typeof CSS < "u" &&
        CSS.supports &&
        CSS.supports("-webkit-backdrop-filter", "none")),
    nu
  );
}
function Ui(a) {
  return /^(html|body|#document)$/.test(Rl(a));
}
function cn(a) {
  return xt(a).getComputedStyle(a);
}
function Ro(a) {
  return sn(a)
    ? { scrollLeft: a.scrollLeft, scrollTop: a.scrollTop }
    : { scrollLeft: a.scrollX, scrollTop: a.scrollY };
}
function Da(a) {
  if (Rl(a) === "html") return a;
  const i = a.assignedSlot || a.parentNode || (Bp(a) && a.host) || zn(a);
  return Bp(i) ? i.host : i;
}
function Nv(a) {
  const i = Da(a);
  return Ui(i) ? (a.ownerDocument || a).body : ua(i) && Co(i) ? i : Nv(i);
}
function ki(a, i, o) {
  var s;
  i === void 0 && (i = []), o === void 0 && (o = !0);
  const u = Nv(a),
    f = u === ((s = a.ownerDocument) == null ? void 0 : s.body),
    h = xt(u);
  if (f) {
    const p = wu(h);
    return i.concat(
      h,
      h.visualViewport || [],
      Co(u) ? u : [],
      p && o ? ki(p) : []
    );
  } else return i.concat(u, ki(u, [], o));
}
function wu(a) {
  return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
}
function _v(a) {
  const i = cn(a);
  let o = parseFloat(i.width) || 0,
    s = parseFloat(i.height) || 0;
  const u = ua(a),
    f = u ? a.offsetWidth : o,
    h = u ? a.offsetHeight : s,
    p = po(o) !== f || po(s) !== h;
  return p && ((o = f), (s = h)), { width: o, height: s, $: p };
}
function Pu(a) {
  return sn(a) ? a : a.contextElement;
}
function Sl(a) {
  const i = Pu(a);
  if (!ua(i)) return _n(1);
  const o = i.getBoundingClientRect(),
    { width: s, height: u, $: f } = _v(i);
  let h = (f ? po(o.width) : o.width) / s,
    p = (f ? po(o.height) : o.height) / u;
  return (
    (!h || !Number.isFinite(h)) && (h = 1),
    (!p || !Number.isFinite(p)) && (p = 1),
    { x: h, y: p }
  );
}
const zw = _n(0);
function Dv(a) {
  const i = xt(a);
  return !Xu() || !i.visualViewport
    ? zw
    : { x: i.visualViewport.offsetLeft, y: i.visualViewport.offsetTop };
}
function Uw(a, i, o) {
  return i === void 0 && (i = !1), !!o && i && o === xt(a);
}
function Ma(a, i, o, s) {
  i === void 0 && (i = !1), o === void 0 && (o = !1);
  const u = a.getBoundingClientRect(),
    f = Pu(a);
  let h = _n(1);
  i && (s ? sn(s) && (h = Sl(s)) : (h = Sl(a)));
  const p = Uw(f, o, s) ? Dv(f) : _n(0);
  let m = (u.left + p.x) / h.x,
    y = (u.top + p.y) / h.y,
    b = u.width / h.x,
    w = u.height / h.y;
  if (f && s) {
    const E = xt(f),
      R = sn(s) ? xt(s) : s;
    let O = E,
      _ = wu(O);
    for (; _ && R !== O; ) {
      const M = Sl(_),
        L = _.getBoundingClientRect(),
        H = cn(_),
        z = L.left + (_.clientLeft + parseFloat(H.paddingLeft)) * M.x,
        q = L.top + (_.clientTop + parseFloat(H.paddingTop)) * M.y;
      (m *= M.x),
        (y *= M.y),
        (b *= M.x),
        (w *= M.y),
        (m += z),
        (y += q),
        (O = xt(_)),
        (_ = wu(O));
    }
  }
  return vo({ width: b, height: w, x: m, y });
}
function No(a, i) {
  const o = Ro(a).scrollLeft;
  return i ? i.left + o : Ma(zn(a)).left + o;
}
function Mv(a, i) {
  const o = a.getBoundingClientRect(),
    s = o.left + i.scrollLeft - No(a, o),
    u = o.top + i.scrollTop;
  return { x: s, y: u };
}
function kw(a) {
  let { elements: i, rect: o, offsetParent: s, strategy: u } = a;
  const f = u === "fixed",
    h = zn(s),
    p = i ? Oo(i.floating) : !1;
  if (s === h || (p && f)) return o;
  let m = { scrollLeft: 0, scrollTop: 0 },
    y = _n(1);
  const b = _n(0),
    w = ua(s);
  if ((w || !f) && ((Rl(s) !== "body" || Co(h)) && (m = Ro(s)), w)) {
    const R = Ma(s);
    (y = Sl(s)), (b.x = R.x + s.clientLeft), (b.y = R.y + s.clientTop);
  }
  const E = h && !w && !f ? Mv(h, m) : _n(0);
  return {
    width: o.width * y.x,
    height: o.height * y.y,
    x: o.x * y.x - m.scrollLeft * y.x + b.x + E.x,
    y: o.y * y.y - m.scrollTop * y.y + b.y + E.y,
  };
}
function Lw(a) {
  return a.getClientRects ? Array.from(a.getClientRects()) : [];
}
function Hw(a) {
  const i = Ro(a),
    o = a.ownerDocument.body,
    s = Nn(a.scrollWidth, a.clientWidth, o.scrollWidth, o.clientWidth),
    u = Nn(a.scrollHeight, a.clientHeight, o.scrollHeight, o.clientHeight);
  let f = -i.scrollLeft + No(a);
  const h = -i.scrollTop;
  return (
    cn(o).direction === "rtl" && (f += Nn(a.clientWidth, o.clientWidth) - s),
    { width: s, height: u, x: f, y: h }
  );
}
const qw = 25;
function Bw(a, i, o) {
  o === void 0 && (o = "viewport");
  const s = o === "layoutViewport",
    u = xt(a),
    f = zn(a),
    h = u.visualViewport;
  let p = f.clientWidth,
    m = f.clientHeight,
    y = 0,
    b = 0;
  if (h) {
    const E = !Xu() || i === "fixed";
    s
      ? E || ((y = -h.offsetLeft), (b = -h.offsetTop))
      : ((p = h.width),
        (m = h.height),
        E && ((y = h.offsetLeft), (b = h.offsetTop)));
  }
  if (No(f) <= 0) {
    const E = f.ownerDocument,
      R = E.body,
      O = getComputedStyle(R),
      _ =
        (E.compatMode === "CSS1Compat" &&
          parseFloat(O.marginLeft) + parseFloat(O.marginRight)) ||
        0,
      M = Math.abs(f.clientWidth - R.clientWidth - _),
      L =
        getComputedStyle(f).scrollbarGutter === "stable both-edges" ? M / 2 : M;
    L <= qw && (p -= L);
  }
  return { width: p, height: m, x: y, y: b };
}
function Gw(a, i) {
  const o = Ma(a, !0, i === "fixed"),
    s = o.top + a.clientTop,
    u = o.left + a.clientLeft,
    f = Sl(a),
    h = a.clientWidth * f.x,
    p = a.clientHeight * f.y,
    m = u * f.x,
    y = s * f.y;
  return { width: h, height: p, x: m, y };
}
function Gp(a, i, o) {
  let s;
  if (i === "viewport" || i === "layoutViewport") s = Bw(a, o, i);
  else if (i === "document") s = Hw(zn(a));
  else if (sn(i)) s = Gw(i, o);
  else {
    const u = Dv(a);
    s = { x: i.x - u.x, y: i.y - u.y, width: i.width, height: i.height };
  }
  return vo(s);
}
function Yw(a, i) {
  const o = i.get(a);
  if (o) return o;
  let s = ki(a, [], !1).filter((p) => sn(p) && Rl(p) !== "body"),
    u = null;
  const f = cn(a).position === "fixed";
  let h = f ? Da(a) : a;
  for (; sn(h) && !Ui(h); ) {
    const p = cn(h),
      m = Qu(h),
      y = u ? u.position : f ? "fixed" : "";
    !m && (y === "fixed" || (y === "absolute" && p.position === "static"))
      ? (s = s.filter((w) => w !== h))
      : (u = p),
      (h = Da(h));
  }
  return i.set(a, s), s;
}
function Vw(a) {
  let { element: i, boundary: o, rootBoundary: s, strategy: u } = a;
  const h = [
      ...(o === "clippingAncestors"
        ? Oo(i)
          ? []
          : Yw(i, this._c)
        : [].concat(o)),
      s,
    ],
    p = Gp(i, h[0], u);
  let m = p.top,
    y = p.right,
    b = p.bottom,
    w = p.left;
  for (let E = 1; E < h.length; E++) {
    const R = Gp(i, h[E], u);
    (m = Nn(R.top, m)),
      (y = ra(R.right, y)),
      (b = ra(R.bottom, b)),
      (w = Nn(R.left, w));
  }
  return { width: y - w, height: b - m, x: w, y: m };
}
function Qw(a) {
  const { width: i, height: o } = _v(a);
  return { width: i, height: o };
}
function Xw(a, i, o) {
  const s = ua(i),
    u = zn(i),
    f = o === "fixed",
    h = Ma(a, !0, f, i);
  let p = { scrollLeft: 0, scrollTop: 0 };
  const m = _n(0);
  if ((s || !f) && ((Rl(i) !== "body" || Co(u)) && (p = Ro(i)), s)) {
    const E = Ma(i, !0, f, i);
    (m.x = E.x + i.clientLeft), (m.y = E.y + i.clientTop);
  }
  !s && u && (m.x = No(u));
  const y = u && !s && !f ? Mv(u, p) : _n(0),
    b = h.left + p.scrollLeft - m.x - y.x,
    w = h.top + p.scrollTop - m.y - y.y;
  return { x: b, y: w, width: h.width, height: h.height };
}
function au(a) {
  return cn(a).position === "static";
}
function Yp(a, i) {
  if (!ua(a) || cn(a).position === "fixed") return null;
  if (i) return i(a);
  let o = a.offsetParent;
  return zn(a) === o && (o = o.ownerDocument.body), o;
}
function jv(a, i) {
  const o = xt(a);
  if (Oo(a)) return o;
  if (!ua(a)) {
    let u = Da(a);
    for (; u && !Ui(u); ) {
      if (sn(u) && !au(u)) return u;
      u = Da(u);
    }
    return o;
  }
  let s = Yp(a, i);
  for (; s && _w(s) && au(s); ) s = Yp(s, i);
  return s && Ui(s) && au(s) && !Qu(s) ? o : s || jw(a) || o;
}
const Pw = async function (a) {
  const i = this.getOffsetParent || jv,
    o = this.getDimensions,
    s = await o(a.floating);
  return {
    reference: Xw(a.reference, await i(a.floating), a.strategy),
    floating: { x: 0, y: 0, width: s.width, height: s.height },
  };
};
function Zw(a) {
  return cn(a).direction === "rtl";
}
const Kw = {
  convertOffsetParentRelativeRectToViewportRelativeRect: kw,
  getDocumentElement: zn,
  getClippingRect: Vw,
  getOffsetParent: jv,
  getElementRects: Pw,
  getClientRects: Lw,
  getDimensions: Qw,
  getScale: Sl,
  isElement: sn,
  isRTL: Zw,
};
function zv(a, i) {
  return (
    a.x === i.x && a.y === i.y && a.width === i.width && a.height === i.height
  );
}
function $w(a, i, o) {
  let s = null,
    u;
  const f = zn(a);
  function h() {
    var b;
    clearTimeout(u), (b = s) == null || b.disconnect(), (s = null);
  }
  function p(b, w) {
    b === void 0 && (b = !1), w === void 0 && (w = 1), h();
    const E = a.getBoundingClientRect(),
      { left: R, top: O, width: _, height: M } = E;
    if ((b || i(), !_ || !M)) return;
    const L = ro(O),
      H = ro(f.clientWidth - (R + _)),
      z = ro(f.clientHeight - (O + M)),
      q = ro(R),
      Z = {
        rootMargin: -L + "px " + -H + "px " + -z + "px " + -q + "px",
        threshold: Nn(0, ra(1, w)) || 1,
      };
    let $ = !0;
    function X(I) {
      const fe = I[0].intersectionRatio;
      if (!zv(E, a.getBoundingClientRect())) return p();
      if (fe !== w) {
        if (!$) return p();
        fe
          ? p(!1, fe)
          : (u = setTimeout(() => {
              p(!1, 1e-7);
            }, 1e3));
      }
      $ = !1;
    }
    try {
      s = new IntersectionObserver(X, { ...Z, root: f.ownerDocument });
    } catch {
      s = new IntersectionObserver(X, Z);
    }
    s.observe(a);
  }
  const m = xt(a),
    y = () => p(o);
  return (
    m.addEventListener("resize", y),
    p(!0),
    () => {
      m.removeEventListener("resize", y), h();
    }
  );
}
function Jw(a, i, o, s) {
  s === void 0 && (s = {});
  const {
      ancestorScroll: u = !0,
      ancestorResize: f = !0,
      elementResize: h = typeof ResizeObserver == "function",
      layoutShift: p = typeof IntersectionObserver == "function",
      animationFrame: m = !1,
    } = s,
    y = Pu(a),
    b = u || f ? [...(y ? ki(y) : []), ...(i ? ki(i) : [])] : [];
  b.forEach((L) => {
    u && L.addEventListener("scroll", o), f && L.addEventListener("resize", o);
  });
  const w = y && p ? $w(y, o, f) : null;
  let E = -1,
    R = null;
  h &&
    ((R = new ResizeObserver((L) => {
      let [H] = L;
      H &&
        H.target === y &&
        R &&
        i &&
        (R.unobserve(i),
        cancelAnimationFrame(E),
        (E = requestAnimationFrame(() => {
          var z;
          (z = R) == null || z.observe(i);
        }))),
        o();
    })),
    y && !m && R.observe(y),
    i && R.observe(i));
  let O,
    _ = m ? Ma(a) : null;
  m && M();
  function M() {
    const L = Ma(a);
    _ && !zv(_, L) && o(), (_ = L), (O = requestAnimationFrame(M));
  }
  return (
    o(),
    () => {
      var L;
      b.forEach((H) => {
        u && H.removeEventListener("scroll", o),
          f && H.removeEventListener("resize", o);
      }),
        w?.(),
        (L = R) == null || L.disconnect(),
        (R = null),
        m && cancelAnimationFrame(O);
    }
  );
}
const Fw = Cw,
  Ww = Ow,
  Iw = Tw,
  eT = Nw,
  tT = Ew,
  Vp = ww,
  nT = Rw,
  aT = (a, i, o) => {
    const s = new Map(),
      u = o ?? {},
      f = { ...Kw, ...u.platform, _c: s };
    return Sw(a, i, { ...u, platform: f });
  };
var lT = typeof document < "u",
  iT = function () {},
  fo = lT ? S.useLayoutEffect : iT;
function go(a, i) {
  if (a === i) return !0;
  if (typeof a != typeof i) return !1;
  if (typeof a == "function" && a.toString() === i.toString()) return !0;
  let o, s, u;
  if (a && i && typeof a == "object") {
    if (Array.isArray(a)) {
      if (((o = a.length), o !== i.length)) return !1;
      for (s = o; s-- !== 0; ) if (!go(a[s], i[s])) return !1;
      return !0;
    }
    if (((u = Object.keys(a)), (o = u.length), o !== Object.keys(i).length))
      return !1;
    for (s = o; s-- !== 0; ) if (!{}.hasOwnProperty.call(i, u[s])) return !1;
    for (s = o; s-- !== 0; ) {
      const f = u[s];
      if (!(f === "_owner" && a.$$typeof) && !go(a[f], i[f])) return !1;
    }
    return !0;
  }
  return a !== a && i !== i;
}
function Uv(a) {
  return typeof window > "u"
    ? 1
    : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qp(a, i) {
  const o = Uv(a);
  return Math.round(i * o) / o;
}
function lu(a) {
  const i = S.useRef(a);
  return (
    fo(() => {
      i.current = a;
    }),
    i
  );
}
function rT(a) {
  a === void 0 && (a = {});
  const {
      placement: i = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: u,
      elements: { reference: f, floating: h } = {},
      transform: p = !0,
      whileElementsMounted: m,
      open: y,
    } = a,
    [b, w] = S.useState({
      x: 0,
      y: 0,
      strategy: o,
      placement: i,
      middlewareData: {},
      isPositioned: !1,
    }),
    [E, R] = S.useState(s);
  go(E, s) || R(s);
  const [O, _] = S.useState(null),
    [M, L] = S.useState(null),
    H = S.useCallback((K) => {
      K !== Z.current && ((Z.current = K), _(K));
    }, []),
    z = S.useCallback((K) => {
      K !== $.current && (($.current = K), L(K));
    }, []),
    q = f || O,
    V = h || M,
    Z = S.useRef(null),
    $ = S.useRef(null),
    X = S.useRef(b),
    I = m != null,
    fe = lu(m),
    be = lu(u),
    ae = lu(y),
    de = S.useCallback(() => {
      if (!Z.current || !$.current) return;
      const K = { placement: i, strategy: o, middleware: E };
      be.current && (K.platform = be.current),
        aT(Z.current, $.current, K).then((ie) => {
          const x = { ...ie, isPositioned: ae.current !== !1 };
          he.current &&
            !go(X.current, x) &&
            ((X.current = x),
            So.flushSync(() => {
              w(x);
            }));
        });
    }, [E, i, o, be, ae]);
  fo(() => {
    y === !1 &&
      X.current.isPositioned &&
      ((X.current.isPositioned = !1), w((K) => ({ ...K, isPositioned: !1 })));
  }, [y]);
  const he = S.useRef(!1);
  fo(
    () => (
      (he.current = !0),
      () => {
        he.current = !1;
      }
    ),
    []
  ),
    fo(() => {
      if ((q && (Z.current = q), V && ($.current = V), q && V)) {
        if (fe.current) return fe.current(q, V, de);
        de();
      }
    }, [q, V, de, fe, I]);
  const me = S.useMemo(
      () => ({ reference: Z, floating: $, setReference: H, setFloating: z }),
      [H, z]
    ),
    C = S.useMemo(() => ({ reference: q, floating: V }), [q, V]),
    Y = S.useMemo(() => {
      const K = { position: o, left: 0, top: 0 };
      if (!C.floating) return K;
      const ie = Qp(C.floating, b.x),
        x = Qp(C.floating, b.y);
      return p
        ? {
            ...K,
            transform: "translate(" + ie + "px, " + x + "px)",
            ...(Uv(C.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: o, left: ie, top: x };
    }, [o, p, C.floating, b.x, b.y]);
  return S.useMemo(
    () => ({ ...b, update: de, refs: me, elements: C, floatingStyles: Y }),
    [b, de, me, C, Y]
  );
}
const oT = (a) => {
    function i(o) {
      return {}.hasOwnProperty.call(o, "current");
    }
    return {
      name: "arrow",
      options: a,
      fn(o) {
        const { element: s, padding: u } = typeof a == "function" ? a(o) : a;
        return s && i(s)
          ? s.current != null
            ? Vp({ element: s.current, padding: u }).fn(o)
            : {}
          : s
          ? Vp({ element: s, padding: u }).fn(o)
          : {};
      },
    };
  },
  sT = (a, i) => {
    const o = Fw(a);
    return { name: o.name, fn: o.fn, options: [a, i] };
  },
  cT = (a, i) => {
    const o = Ww(a);
    return { name: o.name, fn: o.fn, options: [a, i] };
  },
  uT = (a, i) => ({ fn: nT(a).fn, options: [a, i] }),
  fT = (a, i) => {
    const o = Iw(a);
    return { name: o.name, fn: o.fn, options: [a, i] };
  },
  dT = (a, i) => {
    const o = eT(a);
    return { name: o.name, fn: o.fn, options: [a, i] };
  },
  hT = (a, i) => {
    const o = tT(a);
    return { name: o.name, fn: o.fn, options: [a, i] };
  },
  mT = (a, i) => {
    const o = oT(a);
    return { name: o.name, fn: o.fn, options: [a, i] };
  };
var pT = Object.defineProperty,
  yT = (a, i) => pT(a, "name", { value: i, configurable: !0 });
function kv(a) {
  const [i, o] = S.useState(void 0);
  return (
    jt(() => {
      if (a) {
        o({ width: a.offsetWidth, height: a.offsetHeight });
        let s = 0;
        const u = new ResizeObserver((f) => {
          if (!Array.isArray(f) || !f.length) return;
          const h = f[0];
          window.cancelAnimationFrame(s),
            (s = window.requestAnimationFrame(() => {
              let p, m;
              if ("borderBoxSize" in h) {
                const y = h.borderBoxSize,
                  b = Array.isArray(y) ? y[0] : y;
                (p = b.inlineSize), (m = b.blockSize);
              } else (p = a.offsetWidth), (m = a.offsetHeight);
              o({ width: p, height: m });
            }));
        });
        return (
          u.observe(a, { box: "border-box" }),
          () => {
            window.cancelAnimationFrame(s), u.unobserve(a);
          }
        );
      } else o(void 0);
    }, [a]),
    i
  );
}
yT(kv, "useSize");
var vT = Object.defineProperty,
  wl = (a, i) => vT(a, "name", { value: i, configurable: !0 }),
  Xp = { Partial: "partial" },
  Pp = { Optimized: "optimized", Always: "always" },
  Lv = "Popper",
  [Hv, qv] = sa(Lv),
  [iA, gT] = Hv(Lv),
  Bv = "PopperContent",
  [bT, rA] = Hv(Bv),
  xT = S.forwardRef(
    wl(function (i, o) {
      const {
          __scopePopper: s,
          side: u = "bottom",
          sideOffset: f = 0,
          align: h = "center",
          alignOffset: p = 0,
          arrowPadding: m = 0,
          avoidCollisions: y = !0,
          collisionBoundary: b = [],
          collisionPadding: w = 0,
          sticky: E = Xp.Partial,
          hideWhenDetached: R = !1,
          updatePositionStrategy: O = Pp.Optimized,
          onPlaced: _,
          ...M
        } = i,
        L = gT(Bv, s),
        [H, z] = S.useState(null),
        q = mt(o, z),
        [V, Z] = S.useState(null),
        $ = kv(V),
        X = $?.width ?? 0,
        I = $?.height ?? 0,
        fe = u + (h !== "center" ? "-" + h : ""),
        be =
          typeof w == "number"
            ? w
            : { top: 0, right: 0, bottom: 0, left: 0, ...w },
        ae = Array.isArray(b) ? b : [b],
        de = ae.length > 0,
        he = { padding: be, boundary: ae.filter(Gv), altBoundary: de },
        {
          refs: me,
          floatingStyles: C,
          placement: Y,
          isPositioned: K,
          middlewareData: ie,
        } = rT({
          strategy: "fixed",
          placement: fe,
          whileElementsMounted: wl(
            (...Ee) => Jw(...Ee, { animationFrame: O === Pp.Always }),
            "whileElementsMounted"
          ),
          elements: { reference: L.anchor },
          middleware: [
            sT({ mainAxis: f + I, alignmentAxis: p }),
            y &&
              cT({
                mainAxis: !0,
                crossAxis: !1,
                limiter: E === Xp.Partial ? uT() : void 0,
                ...he,
              }),
            y && fT({ ...he }),
            dT({
              ...he,
              apply: wl(
                ({
                  elements: Ee,
                  rects: fn,
                  availableWidth: Zt,
                  availableHeight: Ft,
                }) => {
                  const { width: dn, height: Wt } = fn.reference,
                    za = Ee.floating.style;
                  za.setProperty("--radix-popper-available-width", `${Zt}px`),
                    za.setProperty(
                      "--radix-popper-available-height",
                      `${Ft}px`
                    ),
                    za.setProperty("--radix-popper-anchor-width", `${dn}px`),
                    za.setProperty("--radix-popper-anchor-height", `${Wt}px`);
                },
                "apply"
              ),
            }),
            V && mT({ element: V, padding: m }),
            ST({ arrowWidth: X, arrowHeight: I }),
            R &&
              hT({
                strategy: "referenceHidden",
                ...he,
                boundary: de ? he.boundary : void 0,
              }),
          ],
        }),
        x = L.setPlacementState;
      jt(
        () => (
          x(Y),
          () => {
            x(void 0);
          }
        ),
        [Y, x]
      );
      const [Q, F] = Zu(Y),
        J = Dn(_);
      jt(() => {
        K && J?.();
      }, [K, J]);
      const le = ie.arrow?.x,
        oe = ie.arrow?.y,
        te = ie.arrow?.centerOffset !== 0,
        [Ge, Ce] = S.useState();
      return (
        jt(() => {
          H && Ce(window.getComputedStyle(H).zIndex);
        }, [H]),
        g.jsx("div", {
          ref: me.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...C,
            transform: K ? C.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: Ge,
            "--radix-popper-transform-origin": [
              ie.transformOrigin?.x,
              ie.transformOrigin?.y,
            ].join(" "),
            ...(ie.hide?.referenceHidden && {
              visibility: "hidden",
              pointerEvents: "none",
            }),
          },
          dir: i.dir,
          children: g.jsx(bT, {
            scope: s,
            placedSide: Q,
            placedAlign: F,
            onArrowChange: Z,
            arrowX: le,
            arrowY: oe,
            shouldHideArrow: te,
            children: g.jsx(ut.div, {
              "data-side": Q,
              "data-align": F,
              ...M,
              ref: q,
              style: { ...M.style, animation: K ? M.style?.animation : "none" },
            }),
          }),
        })
      );
    }, "PopperContent")
  );
function Gv(a) {
  return a !== null;
}
wl(Gv, "isNotNull");
var ST = wl(
  (a) => ({
    name: "transformOrigin",
    options: a,
    fn(i) {
      const { placement: o, rects: s, middlewareData: u } = i,
        h = u.arrow?.centerOffset !== 0,
        p = h ? 0 : a.arrowWidth,
        m = h ? 0 : a.arrowHeight,
        [y, b] = Zu(o),
        w = { start: "0%", center: "50%", end: "100%" }[b],
        E = (u.arrow?.x ?? 0) + p / 2,
        R = (u.arrow?.y ?? 0) + m / 2;
      let O = "",
        _ = "";
      return (
        y === "bottom"
          ? ((O = h ? w : `${E}px`), (_ = `${-m}px`))
          : y === "top"
          ? ((O = h ? w : `${E}px`), (_ = `${s.floating.height + m}px`))
          : y === "right"
          ? ((O = `${-m}px`), (_ = h ? w : `${R}px`))
          : y === "left" &&
            ((O = `${s.floating.width + m}px`), (_ = h ? w : `${R}px`)),
        { data: { x: O, y: _ } }
      );
    },
  }),
  "transformOrigin"
);
function Zu(a) {
  const [i, o = "center"] = a.split("-");
  return [i, o];
}
wl(Zu, "getSideAndAlignFromPlacement");
var wT = Object.defineProperty,
  ct = (a, i) => wT(a, "name", { value: i, configurable: !0 }),
  [Ku, oA] = sa("Tooltip", [qv]),
  TT = qv(),
  ET = "TooltipProvider",
  AT = 700,
  Zp = "tooltip.open",
  [CT, OT] = Ku(ET),
  RT = ct((a) => {
    const {
        __scopeTooltip: i,
        delayDuration: o = AT,
        skipDelayDuration: s = 300,
        disableHoverableContent: u = !1,
        children: f,
      } = a,
      h = S.useRef(!0),
      p = S.useRef(!1),
      m = S.useRef(0);
    return (
      S.useEffect(() => {
        const y = m.current;
        return () => window.clearTimeout(y);
      }, []),
      g.jsx(CT, {
        scope: i,
        isOpenDelayedRef: h,
        delayDuration: o,
        onOpen: S.useCallback(() => {
          s <= 0 || (window.clearTimeout(m.current), (h.current = !1));
        }, [s]),
        onClose: S.useCallback(() => {
          s <= 0 ||
            (window.clearTimeout(m.current),
            (m.current = window.setTimeout(() => (h.current = !0), s)));
        }, [s]),
        isPointerInTransitRef: p,
        onPointerInTransitChange: S.useCallback((y) => {
          p.current = y;
        }, []),
        disableHoverableContent: u,
        children: f,
      })
    );
  }, "TooltipProvider"),
  NT = "Tooltip",
  [sA, _o] = Ku(NT),
  Yv = "TooltipPortal",
  [_T, DT] = Ku(Yv, { forceMount: void 0 }),
  MT = ct((a) => {
    const { __scopeTooltip: i, forceMount: o, children: s, container: u } = a,
      f = _o(Yv, i);
    return g.jsx(_T, {
      scope: i,
      forceMount: o,
      children: g.jsx(wo, {
        present: o || f.open,
        children: g.jsx(My, { asChild: !0, container: u, children: s }),
      }),
    });
  }, "TooltipPortal"),
  Li = "TooltipContent",
  Vv = S.forwardRef(
    ct(function (i, o) {
      const s = DT(Li, i.__scopeTooltip),
        { forceMount: u = s.forceMount, side: f = "top", ...h } = i,
        p = _o(Li, i.__scopeTooltip);
      return g.jsx(wo, {
        present: u || p.open,
        children: p.disableHoverableContent
          ? g.jsx(Qv, { side: f, ...h, ref: o })
          : g.jsx(jT, { side: f, ...h, ref: o }),
      });
    }, "TooltipContent")
  ),
  jT = S.forwardRef(
    ct(function (i, o) {
      const s = _o(Li, i.__scopeTooltip),
        u = OT(Li, i.__scopeTooltip),
        f = S.useRef(null),
        h = mt(o, f),
        [p, m] = S.useState(null),
        { trigger: y, onClose: b } = s,
        w = f.current,
        { onPointerInTransitChange: E } = u,
        R = S.useCallback(() => {
          m(null), E(!1);
        }, [E]),
        O = S.useCallback(
          (_, M) => {
            const L = _.currentTarget,
              H = { x: _.clientX, y: _.clientY },
              z = Xv(H, L.getBoundingClientRect()),
              q = Pv(H, z),
              V = Zv(M.getBoundingClientRect()),
              Z = $v([...q, ...V]);
            m(Z), E(!0);
          },
          [E]
        );
      return (
        S.useEffect(() => () => R(), [R]),
        S.useEffect(() => {
          if (y && w) {
            const _ = ct((L) => O(L, w), "handleTriggerLeave"),
              M = ct((L) => O(L, y), "handleContentLeave");
            return (
              y.addEventListener("pointerleave", _),
              w.addEventListener("pointerleave", M),
              () => {
                y.removeEventListener("pointerleave", _),
                  w.removeEventListener("pointerleave", M);
              }
            );
          }
        }, [y, w, O, R]),
        S.useEffect(() => {
          if (p) {
            const _ = ct((M) => {
              const L = M.target,
                H = { x: M.clientX, y: M.clientY },
                z = y?.contains(L) || w?.contains(L),
                q = !Kv(H, p);
              z ? R() : q && (R(), b());
            }, "handleTrackPointerGrace");
            return (
              document.addEventListener("pointermove", _),
              () => document.removeEventListener("pointermove", _)
            );
          }
        }, [y, w, p, b, R]),
        g.jsx(Qv, { ...i, ref: h })
      );
    }, "TooltipContentHoverable")
  ),
  zT = by("TooltipContent"),
  Qv = S.forwardRef(
    ct(function (i, o) {
      const {
          __scopeTooltip: s,
          children: u,
          "aria-label": f,
          id: h,
          onEscapeKeyDown: p,
          onPointerDownOutside: m,
          ...y
        } = i,
        b = _o(Li, s),
        w = TT(s),
        { onClose: E } = b;
      S.useEffect(
        () => (
          document.addEventListener(Zp, E),
          () => document.removeEventListener(Zp, E)
        ),
        [E]
      ),
        S.useEffect(() => {
          if (b.trigger) {
            const O = ct((_) => {
              _.target instanceof Node && _.target.contains(b.trigger) && E();
            }, "handleScroll");
            return (
              window.addEventListener("scroll", O, { capture: !0 }),
              () => window.removeEventListener("scroll", O, { capture: !0 })
            );
          }
        }, [b.trigger, E]);
      const { setContentId: R } = b;
      return (
        jt(
          () => (
            R(h),
            () => {
              R(void 0);
            }
          ),
          [h, R]
        ),
        g.jsx(Ny, {
          asChild: !0,
          disableOutsidePointerEvents: !1,
          onEscapeKeyDown: p,
          onPointerDownOutside: m,
          onFocusOutside: (O) => O.preventDefault(),
          onDismiss: E,
          children: g.jsxs(xT, {
            "data-state": b.stateAttribute,
            role: f ? void 0 : "tooltip",
            id: f ? void 0 : b.contentId,
            ...w,
            ...y,
            ref: o,
            style: {
              ...y.style,
              "--radix-tooltip-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
            children: [
              g.jsx(zT, { children: u }),
              f
                ? g.jsx(ju, { id: b.contentId, role: "tooltip", children: f })
                : null,
            ],
          }),
        })
      );
    }, "TooltipContentImpl")
  );
function Xv(a, i) {
  const o = Math.abs(i.top - a.y),
    s = Math.abs(i.bottom - a.y),
    u = Math.abs(i.right - a.x),
    f = Math.abs(i.left - a.x);
  switch (Math.min(o, s, u, f)) {
    case f:
      return "left";
    case u:
      return "right";
    case o:
      return "top";
    case s:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
ct(Xv, "getExitSideFromRect");
function Pv(a, i, o = 5) {
  const s = [];
  switch (i) {
    case "top":
      s.push({ x: a.x - o, y: a.y + o }, { x: a.x + o, y: a.y + o });
      break;
    case "bottom":
      s.push({ x: a.x - o, y: a.y - o }, { x: a.x + o, y: a.y - o });
      break;
    case "left":
      s.push({ x: a.x + o, y: a.y - o }, { x: a.x + o, y: a.y + o });
      break;
    case "right":
      s.push({ x: a.x - o, y: a.y - o }, { x: a.x - o, y: a.y + o });
      break;
  }
  return s;
}
ct(Pv, "getPaddedExitPoints");
function Zv(a) {
  const { top: i, right: o, bottom: s, left: u } = a;
  return [
    { x: u, y: i },
    { x: o, y: i },
    { x: o, y: s },
    { x: u, y: s },
  ];
}
ct(Zv, "getPointsFromRect");
function Kv(a, i) {
  const { x: o, y: s } = a;
  let u = !1;
  for (let f = 0, h = i.length - 1; f < i.length; h = f++) {
    const p = i[f],
      m = i[h],
      y = p.x,
      b = p.y,
      w = m.x,
      E = m.y;
    b > s != E > s && o < ((w - y) * (s - b)) / (E - b) + y && (u = !u);
  }
  return u;
}
ct(Kv, "isPointInPolygon");
function $v(a) {
  const i = a.slice();
  return (
    i.sort((o, s) =>
      o.x < s.x ? -1 : o.x > s.x ? 1 : o.y < s.y ? -1 : o.y > s.y ? 1 : 0
    ),
    Jv(i)
  );
}
ct($v, "getHull");
function Jv(a) {
  if (a.length <= 1) return a.slice();
  const i = [];
  for (let s = 0; s < a.length; s++) {
    const u = a[s];
    for (; i.length >= 2; ) {
      const f = i[i.length - 1],
        h = i[i.length - 2];
      if ((f.x - h.x) * (u.y - h.y) >= (f.y - h.y) * (u.x - h.x)) i.pop();
      else break;
    }
    i.push(u);
  }
  i.pop();
  const o = [];
  for (let s = a.length - 1; s >= 0; s--) {
    const u = a[s];
    for (; o.length >= 2; ) {
      const f = o[o.length - 1],
        h = o[o.length - 2];
      if ((f.x - h.x) * (u.y - h.y) >= (f.y - h.y) * (u.x - h.x)) o.pop();
      else break;
    }
    o.push(u);
  }
  return (
    o.pop(),
    i.length === 1 && o.length === 1 && i[0].x === o[0].x && i[0].y === o[0].y
      ? i
      : i.concat(o)
  );
}
ct(Jv, "getHullPresorted");
function UT(...a) {
  const i = new Set();
  for (const o of a)
    if (typeof o == "string")
      for (const s of String(o).trim().split(/\s+/)) s && i.add(s);
  return i.size > 0 ? Array.from(i).join(" ") : void 0;
}
ct(UT, "concatAriaDescribedby");
const kT = RT,
  LT = S.forwardRef(({ className: a, sideOffset: i = 4, ...o }, s) =>
    g.jsx(MT, {
      children: g.jsx(Vv, {
        ref: s,
        sideOffset: i,
        className: ft(
          "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
          a
        ),
        ...o,
      }),
    })
  );
LT.displayName = Vv.displayName;
const Fv = S.forwardRef(({ className: a, ...i }, o) =>
  g.jsx("div", {
    ref: o,
    className: ft("rounded-xl border bg-card text-card-foreground shadow", a),
    ...i,
  })
);
Fv.displayName = "Card";
const HT = S.forwardRef(({ className: a, ...i }, o) =>
  g.jsx("div", {
    ref: o,
    className: ft("flex flex-col space-y-1.5 p-6", a),
    ...i,
  })
);
HT.displayName = "CardHeader";
const qT = S.forwardRef(({ className: a, ...i }, o) =>
  g.jsx("div", {
    ref: o,
    className: ft("font-semibold leading-none tracking-tight", a),
    ...i,
  })
);
qT.displayName = "CardTitle";
const BT = S.forwardRef(({ className: a, ...i }, o) =>
  g.jsx("div", {
    ref: o,
    className: ft("text-sm text-muted-foreground", a),
    ...i,
  })
);
BT.displayName = "CardDescription";
const Wv = S.forwardRef(({ className: a, ...i }, o) =>
  g.jsx("div", { ref: o, className: ft("p-6 pt-0", a), ...i })
);
Wv.displayName = "CardContent";
const GT = S.forwardRef(({ className: a, ...i }, o) =>
  g.jsx("div", { ref: o, className: ft("flex items-center p-6 pt-0", a), ...i })
);
GT.displayName = "CardFooter";
function YT() {
  return g.jsx("div", {
    className:
      "min-h-screen w-full flex items-center justify-center bg-gray-50",
    children: g.jsx(Fv, {
      className: "w-full max-w-md mx-4",
      children: g.jsxs(Wv, {
        className: "pt-6",
        children: [
          g.jsxs("div", {
            className: "flex mb-4 gap-2",
            children: [
              g.jsx(zS, { className: "h-8 w-8 text-red-500" }),
              g.jsx("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: "404 Page Not Found",
              }),
            ],
          }),
          g.jsx("p", {
            className: "mt-4 text-sm text-gray-600",
            children: "Did you forget to add the page to the router?",
          }),
        ],
      }),
    }),
  });
}
var VT = Object.defineProperty,
  Bi = (a, i) => VT(a, "name", { value: i, configurable: !0 }),
  $u = "Collapsible",
  [QT, Iv] = sa($u),
  [XT, Ju] = QT($u),
  PT = S.forwardRef(
    Bi(function (i, o) {
      const {
          __scopeCollapsible: s,
          open: u,
          defaultOpen: f,
          disabled: h,
          onOpenChange: p,
          ...m
        } = i,
        [y, b] = qi({ prop: u, defaultProp: f ?? !1, onChange: p, caller: $u });
      return g.jsx(XT, {
        scope: s,
        disabled: h,
        contentId: Bu(),
        open: y,
        onOpenToggle: S.useCallback(() => b((w) => !w), [b]),
        children: g.jsx(ut.div, {
          "data-state": Do(y),
          "data-disabled": h ? "" : void 0,
          ...m,
          ref: o,
        }),
      });
    }, "Collapsible")
  ),
  ZT = "CollapsibleTrigger",
  KT = S.forwardRef(
    Bi(function (i, o) {
      const { __scopeCollapsible: s, ...u } = i,
        f = Ju(ZT, s);
      return g.jsx(ut.button, {
        type: "button",
        "aria-controls": f.open ? f.contentId : void 0,
        "aria-expanded": f.open || !1,
        "data-state": Do(f.open),
        "data-disabled": f.disabled ? "" : void 0,
        disabled: f.disabled,
        ...u,
        ref: o,
        onClick: st(i.onClick, f.onOpenToggle),
      });
    }, "CollapsibleTrigger")
  ),
  eg = "CollapsibleContent",
  $T = S.forwardRef(
    Bi(function (i, o) {
      const { forceMount: s, ...u } = i,
        f = Ju(eg, i.__scopeCollapsible);
      return g.jsx(wo, {
        present: s || f.open,
        children: ({ present: h }) => g.jsx(JT, { ...u, ref: o, present: h }),
      });
    }, "CollapsibleContent")
  ),
  JT = S.forwardRef(
    Bi(function (i, o) {
      const { __scopeCollapsible: s, present: u, children: f, ...h } = i,
        p = Ju(eg, s),
        [m, y] = S.useState(u),
        b = S.useRef(null),
        w = mt(o, b),
        E = S.useRef(0),
        R = E.current,
        O = S.useRef(0),
        _ = O.current,
        M = p.open || m,
        L = S.useRef(M),
        H = S.useRef(void 0);
      return (
        S.useEffect(() => {
          const z = requestAnimationFrame(() => (L.current = !1));
          return () => cancelAnimationFrame(z);
        }, []),
        jt(() => {
          const z = b.current;
          if (z) {
            (H.current = H.current || {
              transitionDuration: z.style.transitionDuration,
              animationName: z.style.animationName,
            }),
              (z.style.transitionDuration = "0s"),
              (z.style.animationName = "none");
            const q = z.getBoundingClientRect();
            (E.current = q.height),
              (O.current = q.width),
              L.current ||
                ((z.style.transitionDuration = H.current.transitionDuration),
                (z.style.animationName = H.current.animationName)),
              y(u);
          }
        }, [p.open, u]),
        g.jsx(ut.div, {
          "data-state": Do(p.open),
          "data-disabled": p.disabled ? "" : void 0,
          id: p.contentId,
          hidden: !M,
          ...h,
          ref: w,
          style: {
            "--radix-collapsible-content-height": R ? `${R}px` : void 0,
            "--radix-collapsible-content-width": _ ? `${_}px` : void 0,
            ...i.style,
          },
          children: M && f,
        })
      );
    }, "CollapsibleContentImpl")
  );
function Do(a) {
  return a ? "open" : "closed";
}
Bi(Do, "getState");
var FT = Object.defineProperty,
  WT = (a, i) => FT(a, "name", { value: i, configurable: !0 }),
  IT = { LTR: "ltr" },
  eE = S.createContext(void 0);
function tg(a) {
  const i = S.useContext(eE);
  return a || i || IT.LTR;
}
WT(tg, "useDirection");
var tE = Object.defineProperty,
  zt = (a, i) => tE(a, "name", { value: i, configurable: !0 }),
  nE = { Multiple: "multiple" },
  Ni = { Vertical: "vertical", Horizontal: "horizontal" },
  aE = { LTR: "ltr" },
  un = "Accordion",
  lE = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
  [Fu, iE, rE] = Ru(un),
  [Mo, cA] = sa(un, [rE, Iv]),
  Wu = Iv(),
  oE = S.forwardRef(
    zt(function (i, o) {
      const { type: s, ...u } = i,
        f = u,
        h = u;
      return g.jsx(Fu.Provider, {
        scope: i.__scopeAccordion,
        children:
          s === nE.Multiple
            ? g.jsx(fE, { ...h, ref: o })
            : g.jsx(uE, { ...f, ref: o }),
      });
    }, "Accordion")
  ),
  [ng, sE] = Mo(un),
  [ag, cE] = Mo(un, { collapsible: !1 }),
  uE = S.forwardRef(
    zt(function (i, o) {
      const {
          value: s,
          defaultValue: u,
          onValueChange: f = zt(() => {}, "onValueChange"),
          collapsible: h = !1,
          ...p
        } = i,
        [m, y] = qi({ prop: s, defaultProp: u ?? "", onChange: f, caller: un });
      return g.jsx(ng, {
        scope: i.__scopeAccordion,
        value: S.useMemo(() => (m ? [m] : []), [m]),
        onItemOpen: y,
        onItemClose: S.useCallback(() => h && y(""), [h, y]),
        children: g.jsx(ag, {
          scope: i.__scopeAccordion,
          collapsible: h,
          children: g.jsx(lg, { ...p, ref: o }),
        }),
      });
    }, "AccordionImplSingle")
  ),
  fE = S.forwardRef(
    zt(function (i, o) {
      const {
          value: s,
          defaultValue: u,
          onValueChange: f = zt(() => {}, "onValueChange"),
          ...h
        } = i,
        [p, m] = qi({ prop: s, defaultProp: u ?? [], onChange: f, caller: un }),
        y = S.useCallback((w) => m((E = []) => [...E, w]), [m]),
        b = S.useCallback((w) => m((E = []) => E.filter((R) => R !== w)), [m]);
      return g.jsx(ng, {
        scope: i.__scopeAccordion,
        value: p,
        onItemOpen: y,
        onItemClose: b,
        children: g.jsx(ag, {
          scope: i.__scopeAccordion,
          collapsible: !0,
          children: g.jsx(lg, { ...h, ref: o }),
        }),
      });
    }, "AccordionImplMultiple")
  ),
  [dE, jo] = Mo(un),
  lg = S.forwardRef(
    zt(function (i, o) {
      const {
          __scopeAccordion: s,
          disabled: u,
          dir: f,
          orientation: h = Ni.Vertical,
          ...p
        } = i,
        m = S.useRef(null),
        y = mt(m, o),
        b = iE(s),
        E = tg(f) === aE.LTR,
        R = st(i.onKeyDown, (O) => {
          if (!lE.includes(O.key)) return;
          const _ = O.target,
            M = b().filter((I) => !I.ref.current?.disabled),
            L = M.findIndex((I) => I.ref.current === _),
            H = M.length;
          if (L === -1) return;
          O.preventDefault();
          let z = L;
          const q = 0,
            V = H - 1,
            Z = zt(() => {
              (z = L + 1), z > V && (z = q);
            }, "moveNext"),
            $ = zt(() => {
              (z = L - 1), z < q && (z = V);
            }, "movePrev");
          switch (O.key) {
            case "Home":
              z = q;
              break;
            case "End":
              z = V;
              break;
            case "ArrowRight":
              h === Ni.Horizontal && (E ? Z() : $());
              break;
            case "ArrowDown":
              h === Ni.Vertical && Z();
              break;
            case "ArrowLeft":
              h === Ni.Horizontal && (E ? $() : Z());
              break;
            case "ArrowUp":
              h === Ni.Vertical && $();
              break;
          }
          const X = z % H;
          M[X].ref.current?.focus();
        });
      return g.jsx(dE, {
        scope: s,
        disabled: u,
        direction: f,
        orientation: h,
        children: g.jsx(Fu.Slot, {
          scope: s,
          children: g.jsx(ut.div, {
            ...p,
            "data-orientation": h,
            ref: y,
            onKeyDown: u ? void 0 : R,
          }),
        }),
      });
    }, "AccordionImpl")
  ),
  Tu = "AccordionItem",
  [hE, Iu] = Mo(Tu),
  mE = S.forwardRef(
    zt(function (i, o) {
      const { __scopeAccordion: s, value: u, ...f } = i,
        h = jo(Tu, s),
        p = sE(Tu, s),
        m = Wu(s),
        y = Bu(),
        b = (u && p.value.includes(u)) || !1,
        w = h.disabled || i.disabled;
      return g.jsx(hE, {
        scope: s,
        open: b,
        disabled: w,
        triggerId: y,
        children: g.jsx(PT, {
          "data-orientation": h.orientation,
          "data-state": ef(b),
          ...m,
          ...f,
          ref: o,
          disabled: w,
          open: b,
          onOpenChange: (E) => {
            E ? p.onItemOpen(u) : p.onItemClose(u);
          },
        }),
      });
    }, "AccordionItem")
  ),
  pE = "AccordionHeader",
  yE = S.forwardRef(
    zt(function (i, o) {
      const { __scopeAccordion: s, ...u } = i,
        f = jo(un, s),
        h = Iu(pE, s);
      return g.jsx(ut.h3, {
        "data-orientation": f.orientation,
        "data-state": ef(h.open),
        "data-disabled": h.disabled ? "" : void 0,
        ...u,
        ref: o,
      });
    }, "AccordionHeader")
  ),
  Kp = "AccordionTrigger",
  ig = S.forwardRef(
    zt(function (i, o) {
      const { __scopeAccordion: s, ...u } = i,
        f = jo(un, s),
        h = Iu(Kp, s),
        p = cE(Kp, s),
        m = Wu(s);
      return g.jsx(Fu.ItemSlot, {
        scope: s,
        children: g.jsx(KT, {
          "aria-disabled": (h.open && !p.collapsible) || void 0,
          "data-orientation": f.orientation,
          id: h.triggerId,
          ...m,
          ...u,
          ref: o,
        }),
      });
    }, "AccordionTrigger")
  ),
  vE = "AccordionContent",
  rg = S.forwardRef(
    zt(function (i, o) {
      const { __scopeAccordion: s, ...u } = i,
        f = jo(un, s),
        h = Iu(vE, s),
        p = Wu(s);
      return g.jsx($T, {
        role: "region",
        "aria-labelledby": h.triggerId,
        "data-orientation": f.orientation,
        ...p,
        ...u,
        ref: o,
        style: {
          "--radix-accordion-content-height":
            "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width":
            "var(--radix-collapsible-content-width)",
          ...i.style,
        },
      });
    }, "AccordionContent")
  );
function ef(a) {
  return a ? "open" : "closed";
}
zt(ef, "getState");
const gE = oE,
  og = S.forwardRef(({ className: a, ...i }, o) =>
    g.jsx(mE, { ref: o, className: ft("border-b", a), ...i })
  );
og.displayName = "AccordionItem";
const sg = S.forwardRef(({ className: a, children: i, ...o }, s) =>
  g.jsx(yE, {
    className: "flex",
    children: g.jsxs(ig, {
      ref: s,
      className: ft(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
        a
      ),
      ...o,
      children: [
        i,
        g.jsx(MS, {
          className:
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
        }),
      ],
    }),
  })
);
sg.displayName = ig.displayName;
const cg = S.forwardRef(({ className: a, children: i, ...o }, s) =>
  g.jsx(rg, {
    ref: s,
    className:
      "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...o,
    children: g.jsx("div", { className: ft("pb-4 pt-0", a), children: i }),
  })
);
cg.displayName = rg.displayName;
const Ie = {
    ticker: "GTA",
    fullName: "Grab That Ass",
    chain: "Solana",
    status: "Live",
    contractAddress: "2AMo6XkdPXPNXywbCTvcJE9bxXeF91qPh9f6hjsjpump",
    pairingToken: {
      label: "Pairing token · BTC",
      name: "Big Titty Coin",
      address: "2AMo6XkdPXPNXywbCTvcJE9bxXeF91qPh9f6hjsjpump",
      explorerUrl:
        "https://solscan.io/token/2AMo6XkdPXPNXywbCTvcJE9bxXeF91qPh9f6hjsjpump",
    },
    launchDate: "November 8, 2026 (UTC)",
    buyUrl:
      "https://swap.pump.fun/?input=So11111111111111111111111111111111111111112&output=2AMo6XkdPXPNXywbCTvcJE9bxXeF91qPh9f6hjsjpump",
    chartUrl:
      "https://dexscreener.com/solana/2AMo6XkdPXPNXywbCTvcJE9bxXeF91qPh9f6hjsjpump",
    totalSupply: null,
    liquidity: null,
    taxes: null,
    socials: [
      { id: "x", label: "X / Twitter", url: "https://x.com/grabthatassx" },
      { id: "telegram", label: "Telegram", url: "https://t.me/grabthatass" },
      { id: "discord", label: "Discord", url: null },
    ],
  },
  bE = "Not announced",
  tf = "/",
  xE = `${tf}media/gta-hero.mp4?v=grab-that-ass`,
  nf = `${tf}media/gta-poster.jpg?v=grab-that-ass`,
  Eu = [
    { id: "ride", label: "The Ride" },
    { id: "status", label: "Status" },
    { id: "pairing", label: "Pairing" },
    { id: "plan", label: "The Plan" },
    { id: "faq", label: "FAQ" },
    { id: "risk", label: "Risk" },
  ];
function SE() {
  const [a, i] = S.useState(!1);
  return (
    S.useEffect(() => {
      const o = window.matchMedia("(prefers-reduced-motion: reduce)");
      i(o.matches);
      const s = () => i(o.matches);
      return (
        o.addEventListener("change", s),
        () => o.removeEventListener("change", s)
      );
    }, []),
    a
  );
}
function St({ children: a, className: i = "", delay: o = 0 }) {
  const s = S.useRef(null);
  return (
    S.useEffect(() => {
      const u = s.current;
      if (!u) return;
      const f = new IntersectionObserver(
        ([h]) => {
          h.isIntersecting && (u.classList.add("in"), f.disconnect());
        },
        { threshold: 0.15 }
      );
      return f.observe(u), () => f.disconnect();
    }, []),
    g.jsx("div", {
      ref: s,
      className: `reveal ${i}`,
      style: { transitionDelay: `${o}ms` },
      children: a,
    })
  );
}
function ug() {
  const { toast: a } = Ev();
  return (i) =>
    a({
      title: `${i}: not announced`,
      description:
        "This community channel has no official link yet. Use only links listed on this site.",
    });
}
function wE() {
  const [a, i] = S.useState(!1),
    [o, s] = S.useState(!1);
  return (
    S.useEffect(() => {
      const u = () => s(window.scrollY > 40);
      return (
        u(),
        window.addEventListener("scroll", u, { passive: !0 }),
        () => window.removeEventListener("scroll", u)
      );
    }, []),
    S.useEffect(() => {
      if (!a) return;
      const u = (f) => f.key === "Escape" && i(!1);
      return (
        window.addEventListener("keydown", u),
        () => window.removeEventListener("keydown", u)
      );
    }, [a]),
    g.jsxs("header", {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        o || a ? "bg-background/85 backdrop-blur-md border-b border-border" : ""
      }`,
      children: [
        g.jsxs("nav", {
          className:
            "mx-auto flex h-16 max-w-7xl items-center justify-between px-5",
          "aria-label": "Main",
          children: [
            g.jsxs("a", {
              href: "#top",
              className: "flex items-center gap-2",
              "data-testid": "link-logo",
              children: [
                g.jsx("img", {
                  src: `${tf}favicon.svg`,
                  alt: "",
                  className: "h-8 w-8",
                }),
                g.jsx("span", {
                  className: "font-display text-2xl",
                  children: "GTA",
                }),
              ],
            }),
            g.jsx("ul", {
              className: "hidden items-center gap-1 md:flex",
              children: Eu.map((u) =>
                g.jsx(
                  "li",
                  {
                    children: g.jsxs("a", {
                      href: `#${u.id}`,
                      "data-testid": `link-nav-${u.id}`,
                      className:
                        "group relative px-3 py-2 font-mono text-xs uppercase tracking-widest text-foreground/75 transition-colors hover:text-foreground",
                      children: [
                        u.label,
                        g.jsx("span", {
                          className:
                            "absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100",
                        }),
                      ],
                    }),
                  },
                  u.id
                )
              ),
            }),
            g.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                g.jsx("a", {
                  href: "#status",
                  "data-testid": "link-nav-status",
                  className:
                    "rounded-full border border-secondary/60 px-4 py-2 font-mono text-xs uppercase tracking-widest text-secondary transition hover:bg-secondary hover:text-secondary-foreground",
                  children: "Live now",
                }),
                g.jsx("button", {
                  className: "rounded-md p-2 md:hidden",
                  "aria-expanded": a,
                  "aria-controls": "mobile-menu",
                  "aria-label": a ? "Close menu" : "Open menu",
                  onClick: () => i(!a),
                  "data-testid": "button-menu",
                  children: a
                    ? g.jsx(gv, { className: "h-6 w-6" })
                    : g.jsx(BS, { className: "h-6 w-6" }),
                }),
              ],
            }),
          ],
        }),
        g.jsx("div", {
          id: "mobile-menu",
          className: `grid overflow-hidden transition-all duration-500 md:hidden ${
            a ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`,
          hidden: !a,
          children: g.jsx("ul", {
            className: "min-h-0 px-5 pb-6",
            children: Eu.map((u, f) =>
              g.jsx(
                "li",
                {
                  className: "border-b border-border/60",
                  children: g.jsxs("a", {
                    href: `#${u.id}`,
                    onClick: () => i(!1),
                    "data-testid": `link-mobile-${u.id}`,
                    className:
                      "flex items-baseline justify-between py-4 font-display text-4xl",
                    children: [
                      u.label,
                      g.jsxs("span", {
                        className: "font-mono text-xs text-muted-foreground",
                        children: ["0", f + 1],
                      }),
                    ],
                  }),
                },
                u.id
              )
            ),
          }),
        }),
      ],
    })
  );
}
function TE() {
  const a = S.useRef(null),
    i = SE(),
    [o, s] = S.useState(!1),
    [u, f] = S.useState(!0);
  S.useEffect(() => {
    const m = a.current;
    m && (i ? m.pause() : m.play().catch(() => s(!1)));
  }, [i]);
  const h = () => {
      const m = a.current;
      m && (m.paused ? m.play().catch(() => {}) : m.pause());
    },
    p = () => {
      const m = a.current;
      m &&
        ((m.muted = !m.muted),
        f(m.muted),
        !m.muted && m.paused && m.play().catch(() => {}));
    };
  return g.jsxs("section", {
    id: "top",
    className: "relative min-h-[100dvh] overflow-hidden",
    children: [
      g.jsx("video", {
        ref: a,
        className: "absolute inset-0 h-full w-full object-cover",
        src: xE,
        poster: nf,
        muted: !0,
        loop: !0,
        playsInline: !0,
        preload: "metadata",
        onPlay: () => s(!0),
        onPause: () => s(!1),
        "aria-label":
          "Animated scene: a masked silver-haired woman in a GTA jacket beside a muscle car under palm trees at a purple sunset",
        "data-testid": "video-hero",
      }),
      g.jsx("div", {
        className: "scanlines pointer-events-none absolute inset-0",
      }),
      g.jsx("div", {
        className:
          "pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background",
      }),
      g.jsx("div", {
        className:
          "pointer-events-none absolute inset-0 bg-gradient-to-r from-background/80 via-background/10 to-transparent",
      }),
      g.jsxs("div", {
        className:
          "relative mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-end px-5 pb-28 pt-28",
        children: [
          g.jsxs("p", {
            className:
              "rise mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-secondary",
            style: { animationDelay: "100ms" },
            children: [
              g.jsx("span", {
                className: "blink inline-block h-2 w-2 rounded-full bg-accent",
              }),
              " ",
              Ie.status,
              " / ",
              Ie.chain,
              " meme token",
            ],
          }),
          g.jsxs("h1", {
            className: "font-display",
            children: [
              g.jsx("span", {
                className:
                  "rise sunset-text block text-[26vw] leading-[.8] md:text-[15rem]",
                style: { animationDelay: "200ms" },
                children: "GTA",
              }),
              g.jsx("span", {
                className:
                  "rise mt-3 block text-4xl text-foreground sm:text-6xl md:text-7xl",
                style: { animationDelay: "380ms" },
                children: Ie.fullName,
              }),
            ],
          }),
          g.jsx("p", {
            className: "rise mt-6 max-w-md text-lg text-foreground/85",
            style: { animationDelay: "520ms" },
            children:
              "A meme coin for the 2am crowd. Windows down, synths up, absolutely no adult supervision. GTA is live on Solana.",
          }),
          g.jsxs("div", {
            className: "rise mt-8 flex flex-wrap items-center gap-3",
            style: { animationDelay: "650ms" },
            children: [
              g.jsxs("a", {
                href: Ie.buyUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                "data-testid": "link-hero-buy",
                className:
                  "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-secondary",
                children: ["Buy GTA ", g.jsx(qu, { className: "h-4 w-4" })],
              }),
              g.jsxs("a", {
                href: "#status",
                "data-testid": "link-hero-status",
                className:
                  "inline-flex items-center gap-2 rounded-full border border-foreground/30 px-6 py-3 font-mono text-sm uppercase tracking-wider transition hover:border-accent hover:text-accent",
                children: [
                  "Launch status ",
                  g.jsx(NS, { className: "h-4 w-4" }),
                ],
              }),
              g.jsx("a", {
                href: "#pairing",
                "data-testid": "link-hero-pairing",
                className:
                  "rounded-full border border-foreground/30 px-6 py-3 font-mono text-sm uppercase tracking-wider transition hover:border-accent hover:text-accent",
                children: "Pairing token",
              }),
            ],
          }),
        ],
      }),
      g.jsxs("div", {
        className:
          "absolute bottom-6 right-5 z-10 flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 p-1.5 backdrop-blur",
        role: "group",
        "aria-label": "Video controls",
        children: [
          g.jsx("button", {
            onClick: h,
            "aria-label": o ? "Pause video" : "Play video",
            "data-testid": "button-video-play",
            className:
              "rounded-full p-2.5 transition hover:bg-primary hover:text-primary-foreground",
            children: o
              ? g.jsx(YS, { className: "h-4 w-4" })
              : g.jsx(QS, { className: "h-4 w-4" }),
          }),
          g.jsx("button", {
            onClick: p,
            "aria-label": u ? "Turn sound on" : "Mute sound",
            "aria-pressed": !u,
            "data-testid": "button-video-sound",
            className:
              "rounded-full p-2.5 transition hover:bg-primary hover:text-primary-foreground",
            children: u
              ? g.jsx($S, { className: "h-4 w-4" })
              : g.jsx(ZS, { className: "h-4 w-4" }),
          }),
          g.jsx("span", {
            className:
              "pr-3 font-mono text-[10px] uppercase tracking-widest text-foreground/70",
            children: o ? "Rolling" : i ? "Paused / reduced motion" : "Paused",
          }),
        ],
      }),
    ],
  });
}
function EE() {
  const a = [
      Ie.fullName,
      "Live now",
      "Palm trees",
      "GTA / BTC",
      "Night drive",
      "Not financial advice",
      "Solana",
    ],
    i = [...a, ...a];
  return g.jsx("div", {
    className:
      "overflow-hidden border-y border-primary/40 bg-primary py-3 text-primary-foreground",
    "aria-hidden": "true",
    children: g.jsx("div", {
      className:
        "marquee flex w-max gap-8 whitespace-nowrap font-display text-2xl",
      children: [...i, ...i].map((o, s) =>
        g.jsxs(
          "span",
          {
            className: "flex items-center gap-8",
            children: [
              o,
              g.jsx("span", {
                className: "h-2 w-2 rotate-45 bg-primary-foreground",
              }),
            ],
          },
          s
        )
      ),
    }),
  });
}
function AE() {
  const a = [
    {
      t: "11:47 PM",
      h: "Keys in.",
      b: "Somewhere between the last bar and the first bad idea, a token gets named something your mother would hate.",
    },
    {
      t: "12:30 AM",
      h: "Ocean Drive.",
      b: "Palms strobing past. Pink sky that should have ended hours ago. The group chat is already typing.",
    },
    {
      t: "02:14 AM",
      h: "The grab.",
      b: "That is the whole joke. It was always the whole joke. GTA does not pretend to be anything else.",
    },
  ];
  return g.jsxs("section", {
    id: "ride",
    className: "relative mx-auto max-w-7xl px-5 py-28 md:py-40",
    children: [
      g.jsxs(St, {
        children: [
          g.jsx("p", {
            className:
              "font-mono text-xs uppercase tracking-[0.3em] text-accent",
            children: "01 / The Ride",
          }),
          g.jsxs("h2", {
            className: "mt-4 max-w-4xl font-display text-6xl md:text-8xl",
            children: [
              "A city that never ",
              g.jsx("span", {
                className: "stroke-text",
                children: "logs off.",
              }),
            ],
          }),
        ],
      }),
      g.jsxs("div", {
        className: "mt-20 grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-20",
        children: [
          g.jsxs(St, {
            className: "relative",
            children: [
              g.jsxs("div", {
                className:
                  "relative overflow-hidden rounded-2xl border border-border",
                children: [
                  g.jsx("img", {
                    src: nf,
                    alt: "Still frame: silver-haired heroine in a GTA jacket with a muscle car under a violet sunset",
                    className:
                      "aspect-[4/5] w-full object-cover transition-transform duration-[1.5s] hover:scale-105 md:aspect-[4/3]",
                    loading: "lazy",
                  }),
                  g.jsx("div", {
                    className: "scanlines pointer-events-none absolute inset-0",
                  }),
                  g.jsx("span", {
                    className:
                      "absolute left-4 top-4 rounded bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest",
                    children: "Frame 060 / Vice hour",
                  }),
                ],
              }),
              g.jsx("div", {
                className:
                  "absolute -bottom-6 -right-4 hidden rotate-[-4deg] rounded-lg bg-secondary px-4 py-2 font-display text-2xl text-secondary-foreground md:block",
                children: "Wanted: 5 stars",
              }),
            ],
          }),
          g.jsx("ol", {
            className: "space-y-14",
            children: a.map((i, o) =>
              g.jsx(
                St,
                {
                  delay: o * 120,
                  children: g.jsxs("li", {
                    className: "border-l-2 border-primary pl-6",
                    children: [
                      g.jsx("p", {
                        className: "font-mono text-sm text-secondary",
                        children: i.t,
                      }),
                      g.jsx("h3", {
                        className: "mt-1 font-display text-4xl",
                        children: i.h,
                      }),
                      g.jsx("p", {
                        className: "mt-3 text-foreground/75",
                        children: i.b,
                      }),
                    ],
                  }),
                },
                i.t
              )
            ),
          }),
        ],
      }),
    ],
  });
}
function CE() {
  ug();
  const [a, i] = S.useState("idle"),
    o = async () => {
      try {
        await navigator.clipboard.writeText(Ie.contractAddress), i("ok");
      } catch {
        i("fail");
      }
      window.setTimeout(() => i("idle"), 2600);
    },
    s = [
      { k: "Status", v: Ie.status },
      { k: "Launch date", v: Ie.launchDate },
    ];
  return g.jsxs("section", {
    id: "status",
    className: "relative overflow-hidden bg-card py-28 md:py-36",
    children: [
      g.jsx("div", {
        className:
          "pointer-events-none absolute inset-x-0 bottom-0 h-1/2 overflow-hidden opacity-40",
        "aria-hidden": "true",
        children: g.jsx("div", {
          className: "grid-floor absolute -inset-x-1/2 top-0 h-[200%]",
        }),
      }),
      g.jsxs("div", {
        className: "relative mx-auto max-w-7xl px-5",
        children: [
          g.jsxs(St, {
            className:
              "flex flex-col justify-between gap-6 md:flex-row md:items-end",
            children: [
              g.jsxs("div", {
                children: [
                  g.jsx("p", {
                    className:
                      "font-mono text-xs uppercase tracking-[0.3em] text-accent",
                    children: "02 / Launch status",
                  }),
                  g.jsxs("h2", {
                    className: "mt-4 font-display text-6xl md:text-8xl",
                    children: [
                      "Engine running.",
                      g.jsx("br", {}),
                      g.jsx("span", {
                        className: "sunset-text",
                        children: "GTA is live.",
                      }),
                    ],
                  }),
                ],
              }),
              g.jsxs("p", {
                className: "max-w-sm text-foreground/75",
                children: [
                  Ie.fullName,
                  " has launched on Solana. Trade on Pump.fun and follow the GTA/BTC chart.",
                ],
              }),
            ],
          }),
          g.jsxs(St, {
            className: "mt-14",
            children: [
              g.jsx("dl", {
                className:
                  "grid overflow-hidden rounded-2xl border border-border bg-background/70 backdrop-blur sm:grid-cols-2",
                children: s.map((u) =>
                  g.jsxs(
                    "div",
                    {
                      className:
                        "group min-w-0 border-b border-r border-border p-6 transition hover:bg-muted/60",
                      "data-testid": `status-${u.k
                        .replace(/\W+/g, "-")
                        .toLowerCase()}`,
                      children: [
                        g.jsx("dt", {
                          className:
                            "font-mono text-xs uppercase tracking-widest text-muted-foreground",
                          children: u.k,
                        }),
                        g.jsx("dd", {
                          className:
                            "mt-3 flex items-center gap-2 font-display text-3xl",
                          children:
                            u.v ??
                            g.jsxs(g.Fragment, {
                              children: [
                                g.jsx(HS, {
                                  className: "h-5 w-5 text-primary",
                                }),
                                g.jsx("span", {
                                  className: "text-foreground/50",
                                  children: bE,
                                }),
                              ],
                            }),
                        }),
                      ],
                    },
                    u.k
                  )
                ),
              }),
              g.jsxs("div", {
                className:
                  "mt-6 rounded-2xl border border-primary/50 bg-background/70 p-6",
                children: [
                  g.jsx("h3", {
                    className:
                      "font-mono text-xs uppercase tracking-widest text-accent",
                    children: "GTA contract address",
                  }),
                  g.jsx("p", {
                    className:
                      "mt-4 select-all break-all rounded-lg bg-background/70 p-4 font-mono text-sm md:text-base",
                    "data-testid": "text-contract-address",
                    children: Ie.contractAddress,
                  }),
                  g.jsxs("div", {
                    className: "mt-4 flex flex-wrap gap-3",
                    children: [
                      g.jsxs("button", {
                        type: "button",
                        onClick: o,
                        "data-testid": "button-copy-contract",
                        className:
                          "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground transition hover:bg-secondary",
                        children: [
                          a === "ok"
                            ? g.jsx(pv, { className: "h-4 w-4" })
                            : g.jsx(yv, { className: "h-4 w-4" }),
                          a === "ok" ? "Copied" : "Copy contract address",
                        ],
                      }),
                      g.jsxs("a", {
                        href: `https://solscan.io/token/${Ie.contractAddress}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "data-testid": "link-contract-explorer",
                        className:
                          "inline-flex items-center gap-2 rounded-full border border-foreground/30 px-5 py-2.5 transition hover:border-accent hover:text-accent",
                        children: [
                          "View GTA on Solscan ",
                          g.jsx(qu, { className: "h-4 w-4" }),
                        ],
                      }),
                    ],
                  }),
                  g.jsxs("p", {
                    role: "status",
                    "aria-live": "polite",
                    className:
                      "mt-3 min-h-5 font-mono text-xs text-muted-foreground",
                    children: [
                      a === "ok" && "GTA contract address copied.",
                      a === "fail" &&
                        "Clipboard blocked. Select the address above and copy it manually.",
                    ],
                  }),
                ],
              }),
            ],
          }),
          g.jsxs(St, {
            className: "mt-10 flex flex-wrap gap-3",
            children: [
              g.jsx("a", {
                href: Ie.buyUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                "data-testid": "link-buy",
                className:
                  "rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground",
                children: "Buy GTA",
              }),
              g.jsx("a", {
                href: Ie.chartUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                "data-testid": "link-chart",
                className: "rounded-full border border-foreground/30 px-6 py-3",
                children: "Chart",
              }),
              g.jsx("p", {
                id: "buy-note",
                className: "w-full font-mono text-xs text-muted-foreground",
                children:
                  "GTA is live. Verify the GTA contract before trading. BTC is the separate pairing token — buying BTC is not buying GTA. Meme tokens are high risk.",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function OE() {
  const { address: a, label: i, explorerUrl: o } = Ie.pairingToken,
    [s, u] = S.useState("idle"),
    f = async () => {
      try {
        await navigator.clipboard.writeText(a), u("ok");
      } catch {
        u("fail");
      }
      window.setTimeout(() => u("idle"), 2600);
    };
  return g.jsx("section", {
    id: "pairing",
    className: "mx-auto max-w-7xl px-5 py-28 md:py-40",
    children: g.jsxs("div", {
      className: "grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-center",
      children: [
        g.jsxs(St, {
          children: [
            g.jsx("p", {
              className:
                "font-mono text-xs uppercase tracking-[0.3em] text-accent",
              children: "03 / Pairing",
            }),
            g.jsx("h2", {
              className: "mt-4 font-display text-6xl md:text-7xl",
              children: "The ride-along.",
            }),
            g.jsxs("p", {
              className: "mt-6 text-foreground/75",
              children: [
                "GTA is paired with ",
                g.jsxs("strong", {
                  className: "text-secondary",
                  children: [Ie.pairingToken.name, " (BTC)"],
                }),
                ". The GTA/BTC pair is live on Pump.fun. The address below belongs to the pairing token — ",
                g.jsx("strong", {
                  className: "text-secondary",
                  children: "not GTA",
                }),
                ".",
              ],
            }),
          ],
        }),
        g.jsx(St, {
          delay: 120,
          children: g.jsxs("div", {
            className:
              "relative rounded-2xl border border-primary/50 bg-gradient-to-br from-muted to-card p-6 md:p-8",
            children: [
              g.jsxs("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                  g.jsx("span", {
                    className:
                      "rounded-full bg-accent px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-accent-foreground",
                    "data-testid": "text-pairing-label",
                    children: i,
                  }),
                  g.jsx("span", {
                    className:
                      "rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground",
                    children: "Not GTA contract",
                  }),
                  g.jsx("span", {
                    className:
                      "rounded-full border border-accent/50 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent",
                    children: "Live pair",
                  }),
                ],
              }),
              g.jsx("p", {
                className:
                  "mt-6 break-all rounded-lg bg-background/70 p-4 font-mono text-sm leading-relaxed md:text-base",
                "data-testid": "text-pairing-address",
                children: a,
              }),
              g.jsxs("div", {
                className: "mt-5 flex flex-wrap items-center gap-3",
                children: [
                  g.jsxs("button", {
                    onClick: f,
                    "data-testid": "button-copy-pairing",
                    className: `inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold transition ${
                      s === "ok"
                        ? "bg-accent text-accent-foreground"
                        : s === "fail"
                        ? "bg-destructive text-destructive-foreground"
                        : "bg-primary text-primary-foreground hover:bg-secondary"
                    }`,
                    children: [
                      s === "ok"
                        ? g.jsx(pv, { className: "h-4 w-4" })
                        : s === "fail"
                        ? g.jsx(vv, { className: "h-4 w-4" })
                        : g.jsx(yv, { className: "h-4 w-4" }),
                      s === "ok"
                        ? "Copied"
                        : s === "fail"
                        ? "Copy failed"
                        : "Copy address",
                    ],
                  }),
                  g.jsxs("a", {
                    href: o,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-testid": "link-solscan-pairing",
                    className:
                      "inline-flex items-center gap-2 rounded-full border border-foreground/30 px-5 py-2.5 transition hover:border-accent hover:text-accent",
                    children: [
                      "View pairing token on Solscan ",
                      g.jsx(qu, { className: "h-4 w-4" }),
                    ],
                  }),
                ],
              }),
              g.jsxs("p", {
                className: "mt-3 min-h-5 font-mono text-xs",
                role: "status",
                "aria-live": "polite",
                "data-testid": "status-copy",
                children: [
                  s === "ok" &&
                    g.jsx("span", {
                      className: "text-accent",
                      children: "Pairing token address copied to clipboard.",
                    }),
                  s === "fail" &&
                    g.jsx("span", {
                      className: "text-destructive",
                      children:
                        "Clipboard blocked. Select the address above and copy it manually.",
                    }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function RE() {
  const a = [
    {
      n: "01",
      h: "Warm the engine",
      b: "Site up, story out, jokes loaded.",
      done: !0,
    },
    {
      n: "02",
      h: "Hit the streets",
      b: "GTA has launched on Solana. The official contract is published.",
      done: !0,
    },
    {
      n: "03",
      h: "Open the gate",
      b: "Trading is open on Pump.fun and the GTA/BTC chart is live.",
      done: !0,
    },
    {
      n: "04",
      h: "Cruise",
      b: "Memes, chaos, and whatever the group chat demands next.",
    },
  ];
  return g.jsxs("section", {
    id: "plan",
    className: "relative overflow-hidden py-28 md:py-40",
    children: [
      g.jsx("img", {
        src: nf,
        alt: "",
        className:
          "absolute inset-0 h-full w-full object-cover opacity-20 blur-sm",
        loading: "lazy",
      }),
      g.jsx("div", {
        className:
          "absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background",
      }),
      g.jsxs("div", {
        className: "relative mx-auto max-w-7xl px-5",
        children: [
          g.jsxs(St, {
            children: [
              g.jsx("p", {
                className:
                  "font-mono text-xs uppercase tracking-[0.3em] text-accent",
                children: "04 / The Plan",
              }),
              g.jsxs("h2", {
                className: "mt-4 font-display text-6xl md:text-8xl",
                children: [
                  "Four stops. ",
                  g.jsx("span", {
                    className: "stroke-text",
                    children: "No dates.",
                  }),
                ],
              }),
              g.jsx("p", {
                className: "mt-4 max-w-lg text-foreground/75",
                children:
                  "Dates get announced when they are true. Until then, this is the route, not a promise.",
              }),
            ],
          }),
          g.jsx("ol", {
            className:
              "mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4",
            children: a.map((i, o) =>
              g.jsx(
                "li",
                {
                  className:
                    "bg-background/90 p-7 transition-colors hover:bg-muted",
                  "data-testid": `card-plan-${i.n}`,
                  children: g.jsxs(St, {
                    delay: o * 100,
                    children: [
                      g.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          g.jsx("span", {
                            className: "font-display text-5xl text-primary",
                            children: i.n,
                          }),
                          g.jsx("span", {
                            className: `font-mono text-[10px] uppercase tracking-widest ${
                              i.done ? "text-accent" : "text-muted-foreground"
                            }`,
                            children: i.done ? "Complete" : "Up next",
                          }),
                        ],
                      }),
                      g.jsx("h3", {
                        className: "mt-6 font-display text-3xl",
                        children: i.h,
                      }),
                      g.jsx("p", {
                        className: "mt-2 text-sm text-foreground/70",
                        children: i.b,
                      }),
                    ],
                  }),
                },
                i.n
              )
            ),
          }),
        ],
      }),
    ],
  });
}
function NE() {
  const a = ug();
  return g.jsx("section", {
    id: "community",
    className: "mx-auto max-w-7xl px-5 py-28",
    children: g.jsxs(St, {
      className:
        "rounded-3xl bg-gradient-to-br from-secondary via-primary to-[hsl(270_70%_45%)] p-8 text-primary-foreground md:p-16",
      children: [
        g.jsx("h2", {
          className: "font-display text-6xl md:text-8xl",
          children: "Get in the car.",
        }),
        g.jsx("p", {
          className: "mt-4 max-w-md text-lg font-semibold",
          children:
            'GTA is live. Follow our official account on X for updates and join the conversation. Other community channels are still to be announced. Treat unsolicited "GTA" accounts in your DMs with caution.',
        }),
        g.jsx("div", {
          className: "mt-10 flex flex-wrap gap-3",
          children: Ie.socials.map((i) =>
            i.url
              ? g.jsx(
                  "a",
                  {
                    href: i.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-testid": `link-social-${i.id}`,
                    className:
                      "rounded-full bg-background px-6 py-3 font-semibold text-foreground",
                    children: i.label,
                  },
                  i.id
                )
              : g.jsxs(
                  "button",
                  {
                    onClick: () => a(i.label),
                    "data-testid": `button-social-${i.id}`,
                    className:
                      "rounded-full border-2 border-primary-foreground px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:bg-primary-foreground hover:text-primary",
                    children: [
                      i.label,
                      " ",
                      g.jsx("span", {
                        className: "font-mono text-xs opacity-70",
                        children: "/ soon",
                      }),
                    ],
                  },
                  i.id
                )
          ),
        }),
      ],
    }),
  });
}
function _E() {
  const a = [
    {
      q: "What is GTA?",
      a: `GTA, short for ${Ie.fullName}, is a meme token. It is a joke with a ticker. It has no utility, no roadmap of products, and no promise of value.`,
    },
    {
      q: "Is this related to Grand Theft Auto or Rockstar Games?",
      a: "No. GTA the token has no affiliation with, endorsement from, or connection to Rockstar Games, Take-Two Interactive, or the Grand Theft Auto series. The name is a pun.",
    },
    {
      q: "Is the pairing token the same as GTA?",
      a: "No. Big Titty Coin (BTC) is the quote token in the live GTA/BTC pair. It is separate from GTA, and buying BTC is not buying GTA.",
    },
    {
      q: "Has GTA launched?",
      a: "Yes. Grab That Ass is live on Solana. Use the Buy GTA and Chart links in the launch status section, and always verify the contract before trading.",
    },
    {
      q: "Where is the official community?",
      a: "Follow our official X account using the link in the community section. Telegram and Discord are not announced yet. Never trust unsolicited links or send anyone your seed phrase.",
    },
  ];
  return g.jsxs("section", {
    id: "faq",
    className: "mx-auto max-w-4xl px-5 py-28",
    children: [
      g.jsxs(St, {
        children: [
          g.jsx("p", {
            className:
              "font-mono text-xs uppercase tracking-[0.3em] text-accent",
            children: "05 / FAQ",
          }),
          g.jsx("h2", {
            className: "mt-4 font-display text-6xl md:text-7xl",
            children: "Questions at the red light.",
          }),
        ],
      }),
      g.jsx(St, {
        className: "mt-12",
        children: g.jsx(gE, {
          type: "single",
          collapsible: !0,
          className: "border-t border-border",
          children: a.map((i, o) =>
            g.jsxs(
              og,
              {
                value: `q${o}`,
                className: "border-border",
                "data-testid": `faq-item-${o}`,
                children: [
                  g.jsx(sg, {
                    className:
                      "py-6 text-left text-lg font-semibold hover:text-secondary hover:no-underline",
                    children: i.q,
                  }),
                  g.jsx(cg, {
                    className: "pb-6 text-base text-foreground/75",
                    children: i.a,
                  }),
                ],
              },
              o
            )
          ),
        }),
      }),
    ],
  });
}
function DE() {
  return g.jsx("section", {
    id: "risk",
    className: "mx-auto max-w-7xl px-5 pb-28",
    children: g.jsx(St, {
      children: g.jsxs("div", {
        className:
          "rounded-2xl border-2 border-dashed border-secondary/70 bg-card p-8 md:p-12",
        children: [
          g.jsxs("div", {
            className: "flex items-center gap-3 text-secondary",
            children: [
              g.jsx(vv, { className: "h-6 w-6" }),
              g.jsx("h2", {
                className: "font-display text-4xl md:text-5xl",
                children: "Read this sober.",
              }),
            ],
          }),
          g.jsxs("div", {
            className: "mt-6 grid gap-6 text-foreground/80 md:grid-cols-2",
            children: [
              g.jsx("p", {
                children:
                  "GTA is a meme token created for entertainment. Meme tokens are extremely volatile, often illiquid, and can go to zero. You can lose everything you put in. Nothing on this site is financial, investment, legal or tax advice, and no return of any kind is promised.",
              }),
              g.jsx("p", {
                children:
                  "Always verify the official GTA contract before trading. Scams, copycat tokens and fake accounts are common around launches. GTA is not affiliated with, endorsed by, or connected to Rockstar Games, Take-Two Interactive or the Grand Theft Auto franchise. Check the laws where you live and do your own research.",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function ME() {
  return g.jsx("footer", {
    className: "border-t border-border bg-card",
    children: g.jsxs("div", {
      className: "mx-auto max-w-7xl px-5 py-14",
      children: [
        g.jsx("p", {
          className:
            "sunset-text font-display text-[22vw] leading-none md:text-[12rem]",
          "aria-hidden": "true",
          children: Ie.fullName,
        }),
        g.jsxs("div", {
          className:
            "mt-8 flex flex-col justify-between gap-6 font-mono text-xs text-muted-foreground md:flex-row",
          children: [
            g.jsx("p", {
              children:
                "GTA meme token. Live on Solana. Not affiliated with Rockstar Games.",
            }),
            g.jsxs("ul", {
              className: "flex flex-wrap gap-4",
              children: [
                Eu.map((a) =>
                  g.jsx(
                    "li",
                    {
                      children: g.jsx("a", {
                        href: `#${a.id}`,
                        className: "hover:text-foreground",
                        "data-testid": `link-footer-${a.id}`,
                        children: a.label,
                      }),
                    },
                    a.id
                  )
                ),
                g.jsx("li", {
                  children: g.jsx("a", {
                    href: "#top",
                    className: "hover:text-foreground",
                    "data-testid": "link-footer-top",
                    children: "Back to top",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function jE() {
  return g.jsxs("div", {
    className: "min-h-[100dvh]",
    children: [
      g.jsx("a", {
        href: "#ride",
        className:
          "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground",
        children: "Skip to content",
      }),
      g.jsx(wE, {}),
      g.jsxs("main", {
        children: [
          g.jsx(TE, {}),
          g.jsx(EE, {}),
          g.jsx(AE, {}),
          g.jsx(CE, {}),
          g.jsx(OE, {}),
          g.jsx(RE, {}),
          g.jsx(NE, {}),
          g.jsx(_E, {}),
          g.jsx(DE, {}),
        ],
      }),
      g.jsx(ME, {}),
    ],
  });
}
function zE(a, i) {
  if (a instanceof RegExp) return { keys: !1, pattern: a };
  var o,
    s,
    u,
    f,
    h = [],
    p = "",
    m = a.split("/");
  for (m[0] || m.shift(); (u = m.shift()); )
    (o = u[0]),
      o === "*"
        ? (h.push(o), (p += u[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : o === ":"
        ? ((s = u.indexOf("?", 1)),
          (f = u.indexOf(".", 1)),
          h.push(u.substring(1, ~s ? s : ~f ? f : u.length)),
          (p += ~s && !~f ? "(?:/([^/]+?))?" : "/([^/]+?)"),
          ~f && (p += (~s ? "?" : "") + "\\" + u.substring(f)))
        : (p += "/" + u);
  return {
    keys: h,
    pattern: new RegExp("^" + p + (i ? "(?=$|/)" : "/?$"), "i"),
  };
}
var iu = { exports: {} },
  ru = {};
var $p;
function UE() {
  if ($p) return ru;
  $p = 1;
  var a = bo();
  function i(w, E) {
    return (w === E && (w !== 0 || 1 / w === 1 / E)) || (w !== w && E !== E);
  }
  var o = typeof Object.is == "function" ? Object.is : i,
    s = a.useState,
    u = a.useEffect,
    f = a.useLayoutEffect,
    h = a.useDebugValue;
  function p(w, E) {
    var R = E(),
      O = s({ inst: { value: R, getSnapshot: E } }),
      _ = O[0].inst,
      M = O[1];
    return (
      f(
        function () {
          (_.value = R), (_.getSnapshot = E), m(_) && M({ inst: _ });
        },
        [w, R, E]
      ),
      u(
        function () {
          return (
            m(_) && M({ inst: _ }),
            w(function () {
              m(_) && M({ inst: _ });
            })
          );
        },
        [w]
      ),
      h(R),
      R
    );
  }
  function m(w) {
    var E = w.getSnapshot;
    w = w.value;
    try {
      var R = E();
      return !o(w, R);
    } catch {
      return !0;
    }
  }
  function y(w, E) {
    return E();
  }
  var b =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? y
      : p;
  return (
    (ru.useSyncExternalStore =
      a.useSyncExternalStore !== void 0 ? a.useSyncExternalStore : b),
    ru
  );
}
var Jp;
function kE() {
  return Jp || ((Jp = 1), (iu.exports = UE())), iu.exports;
}
var LE = kE();
const HE = Al.useInsertionEffect,
  qE =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  BE = qE ? S.useLayoutEffect : S.useEffect,
  GE = HE || BE,
  fg = (a) => {
    const i = S.useRef([a, (...o) => i[0](...o)]).current;
    return (
      GE(() => {
        i[0] = a;
      }),
      i[1]
    );
  },
  Fp = ["popstate", "pushState", "replaceState", "hashchange"];
let Di = [];
const Wp = () => Di.forEach((a) => a()),
  YE = (a) => (
    Di.push(a) === 1 && Fp.forEach((i) => addEventListener(i, Wp)),
    () => {
      (Di = Di.filter((i) => i !== a)),
        Di.length || Fp.forEach((i) => removeEventListener(i, Wp));
    }
  ),
  dg = (a, i) => LE.useSyncExternalStore(YE, a, i),
  Ip = () => location.search,
  VE = ({ ssrSearch: a } = {}) => dg(Ip, a != null ? () => a : Ip),
  ey = () => location.pathname,
  QE = ({ ssrPath: a } = {}) => dg(ey, a != null ? () => a : ey),
  XE = (a, { replace: i = !1, state: o = null } = {}) =>
    history[i ? "replaceState" : "pushState"](o, "", a),
  PE = (a) => [QE(a), XE],
  ty = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[ty] > "u") {
  for (const a of ["pushState", "replaceState"]) {
    const i = history[a];
    history[a] = function () {
      const o = i.apply(this, arguments),
        s = new Event(a);
      return (s.arguments = arguments), dispatchEvent(s), o;
    };
  }
  Object.defineProperty(window, ty, { value: !0 });
}
const hg = (a = "") => (a === "/" ? "" : a),
  ZE = (a, i) => (a[0] === "~" ? a.slice(1) : hg(i) + a),
  mg = (a, i) => (
    (a = ny(hg(a))),
    (i = ny(i)),
    !a || (i.toLowerCase() + "/").startsWith(a.toLowerCase() + "/")
      ? i.slice(a.length) || "/"
      : "~" + i
  ),
  ny = (a) => {
    try {
      return a.includes("%") ? decodeURI(a) : a;
    } catch {
      return a;
    }
  },
  pg = {
    hook: PE,
    searchHook: VE,
    parser: zE,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: (a) => a,
    aroundNav: (a, i, o) => a(i, o),
  },
  yg = S.createContext(pg),
  Gi = () => S.useContext(yg),
  vg = {},
  gg = S.createContext(vg),
  KE = () => S.useContext(gg),
  bg = (a, i = a.base) => mg(i, a.hook(a)[0]),
  xg = (a) => {
    const [i, o] = a.hook(a);
    return [mg(a.base, i), fg((s, u) => a.aroundNav(o, ZE(s, a.base), u))];
  },
  $E = () => xg(Gi()),
  Sg = (a, i, o, s) => {
    const { pattern: u, keys: f } =
        i instanceof RegExp ? { pattern: i } : a(i || "*", s),
      h = u.exec(o);
    if (!h) return [!1, null];
    const p = {};
    for (let m = 1; m < h.length; m++) p[m - 1] = h[m];
    if (f) for (let m = 0; m < f.length; m++) p[f[m]] = h[m + 1];
    else Object.assign(p, h.groups);
    return s ? [!0, p, h[0]] : [!0, p];
  },
  wg = ({ children: a, ...i }) => {
    const o = Gi(),
      s = i.hook ? pg : o;
    let u = s;
    if (i.ssrPath) {
      const [m, y = i.ssrSearch ?? ""] = i.ssrPath.split("?");
      m && ((i.ssrSearch = y), (i.ssrPath = m));
    }
    (i.hrefs = i.hrefs ?? i.hook?.hrefs),
      (i.searchHook = i.searchHook ?? i.hook?.searchHook);
    let f = S.useRef(s),
      h = f.current,
      p = h;
    for (let m in s) {
      const y = m === "base" ? s[m] + (i[m] ?? "") : i[m] ?? s[m];
      y !== p[m] && (h === p && (f.current = p = { ...p }), (p[m] = y)),
        (y !== s[m] || y !== u[m]) && (u = p);
    }
    return S.createElement(yg.Provider, { value: u }, a);
  },
  JE = ({ children: a, component: i }, o) =>
    i ? S.createElement(i, { params: o }) : typeof a == "function" ? a(o) : a,
  FE = (a) => {
    let i = S.useRef(vg);
    const o = i.current,
      s = Object.keys(a);
    return (i.current =
      s.length !== Object.keys(o).length || s.some((u) => a[u] !== o[u])
        ? a
        : o);
  },
  ay = ({ path: a, nest: i, match: o, ...s }) => {
    const u = Gi(),
      f = bg(u),
      [h, p, m] = o ?? Sg(u.parser, a, f, i),
      y = FE({ ...KE(), ...p });
    if (!h) return null;
    const b = JE(s, y);
    return S.createElement(
      gg.Provider,
      { value: y },
      m ? S.createElement(wg, { base: m }, b) : b
    );
  };
S.forwardRef((a, i) => {
  const o = Gi(),
    [s, u] = xg(o),
    {
      to: f = "",
      href: h = f,
      onClick: p,
      asChild: m,
      children: y,
      className: b,
      replace: w,
      state: E,
      transition: R,
      ...O
    } = a;
  return (
    (O.onClick = fg((_) => {
      _.ctrlKey ||
        _.metaKey ||
        _.altKey ||
        _.shiftKey ||
        _.button !== 0 ||
        (p?.(_), _.defaultPrevented || (_.preventDefault(), u(h, a)));
    })),
    (O.href = o.hrefs(h[0] === "~" ? h.slice(1) : o.base + h, o)),
    b !== void 0 && (O.className = b?.call ? b(s === h) : b),
    i && (O.ref = i),
    m && S.isValidElement(y) ? S.cloneElement(y, O) : S.createElement("a", O, y)
  );
});
const Tg = (a, i = []) => {
    if (Array.isArray(a))
      for (const o of a)
        Tg(o && o.type === S.Fragment ? o.props.children : o, i);
    else i.push(a);
    return i;
  },
  WE = ({ children: a, location: i }) => {
    const o = Gi(),
      s = bg(o);
    for (const u of Tg(a)) {
      let f = 0;
      if (
        S.isValidElement(u) &&
        (f = Sg(o.parser, u.props.path, i || s, u.props.nest))[0]
      )
        return S.cloneElement(u, { match: f });
    }
    return null;
  },
  IE = new Mx();
function eA() {
  return g.jsx(tA, {
    children: g.jsxs(WE, {
      children: [
        g.jsx(ay, { path: "/", component: jE }),
        g.jsx(ay, { component: YT }),
      ],
    }),
  });
}
function tA({ children: a }) {
  const [i] = $E();
  return g.jsx(dy, { resetKey: i, children: a });
}
function nA() {
  return g.jsx(lx, {
    client: IE,
    children: g.jsxs(kT, {
      children: [
        g.jsx(wg, { base: "/".replace(/\/$/, ""), children: g.jsx(eA, {}) }),
        g.jsx(iw, {}),
      ],
    }),
  });
}
tx.createRoot(document.getElementById("root"), {
  onCaughtError: (a, i) => {
    console.error(a, i.componentStack);
  },
}).render(g.jsx(dy, { children: g.jsx(nA, {}) }));
