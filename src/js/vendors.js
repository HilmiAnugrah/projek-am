/**
 * Swiper 10.1.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: August 1, 2023
 */

var Swiper = (function () {
  "use strict";
  function e(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function t(s, a) {
    void 0 === s && (s = {}),
      void 0 === a && (a = {}),
      Object.keys(a).forEach((i) => {
        void 0 === s[i]
          ? (s[i] = a[i])
          : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
      });
  }
  const s = {
    body: {},
    addEventListener() { },
    removeEventListener() { },
    activeElement: { blur() { }, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() { } }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() { },
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
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
  function a() {
    const e = "undefined" != typeof document ? document : {};
    return t(e, s), e;
  }
  const i = {
    document: s,
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
    history: { replaceState() { }, pushState() { }, go() { }, back() { } },
    CustomEvent: function () {
      return this;
    },
    addEventListener() { },
    removeEventListener() { },
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() { },
    Date() { },
    screen: {},
    setTimeout() { },
    clearTimeout() { },
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function r() {
    const e = "undefined" != typeof window ? window : {};
    return t(e, i), e;
  }
  function n(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function l() {
    return Date.now();
  }
  function o(e, t) {
    void 0 === t && (t = "x");
    const s = r();
    let a, i, n;
    const l = (function (e) {
      const t = r();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((i = l.transform || l.webkitTransform),
          i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((e) => e.replace(",", "."))
            .join(", ")),
          (n = new s.WebKitCSSMatrix("none" === i ? "" : i)))
        : ((n =
          l.MozTransform ||
          l.OTransform ||
          l.MsTransform ||
          l.msTransform ||
          l.transform ||
          l
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
          (a = n.toString().split(","))),
      "x" === t &&
      (i = s.WebKitCSSMatrix
        ? n.m41
        : 16 === a.length
          ? parseFloat(a[12])
          : parseFloat(a[4])),
      "y" === t &&
      (i = s.WebKitCSSMatrix
        ? n.m42
        : 16 === a.length
          ? parseFloat(a[13])
          : parseFloat(a[5])),
      i || 0
    );
  }
  function d(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function c() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let a = 1; a < arguments.length; a += 1) {
      const i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
      if (
        null != i &&
        ((s = i),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? s instanceof HTMLElement
            : s && (1 === s.nodeType || 11 === s.nodeType)))
      ) {
        const s = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, a = s.length; t < a; t += 1) {
          const a = s[t],
            r = Object.getOwnPropertyDescriptor(i, a);
          void 0 !== r &&
            r.enumerable &&
            (d(e[a]) && d(i[a])
              ? i[a].__swiper__
                ? (e[a] = i[a])
                : c(e[a], i[a])
              : !d(e[a]) && d(i[a])
                ? ((e[a] = {}), i[a].__swiper__ ? (e[a] = i[a]) : c(e[a], i[a]))
                : (e[a] = i[a]));
        }
      }
    }
    var s;
    return e;
  }
  function p(e, t, s) {
    e.style.setProperty(t, s);
  }
  function u(e) {
    let { swiper: t, targetPosition: s, side: a } = e;
    const i = r(),
      n = -t.translate;
    let l,
      o = null;
    const d = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(t.cssModeFrameID);
    const c = s > n ? "next" : "prev",
      p = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
      u = () => {
        (l = new Date().getTime()), null === o && (o = l);
        const e = Math.max(Math.min((l - o) / d, 1), 0),
          r = 0.5 - Math.cos(e * Math.PI) / 2;
        let c = n + r * (s - n);
        if ((p(c, s) && (c = s), t.wrapperEl.scrollTo({ [a]: c }), p(c, s)))
          return (
            (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [a]: c });
            }),
            void i.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = i.requestAnimationFrame(u);
      };
    u();
  }
  function m(e) {
    return (
      e.querySelector(".swiper-slide-transform") ||
      (e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform")) ||
      e
    );
  }
  function h(e, t) {
    return (
      void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
    );
  }
  function f(e, t) {
    void 0 === t && (t = []);
    const s = document.createElement(e);
    return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
  }
  function g(e) {
    const t = r(),
      s = a(),
      i = e.getBoundingClientRect(),
      n = s.body,
      l = e.clientTop || n.clientTop || 0,
      o = e.clientLeft || n.clientLeft || 0,
      d = e === t ? t.scrollY : e.scrollTop,
      c = e === t ? t.scrollX : e.scrollLeft;
    return { top: i.top + d - l, left: i.left + c - o };
  }
  function v(e, t) {
    return r().getComputedStyle(e, null).getPropertyValue(t);
  }
  function w(e) {
    let t,
      s = e;
    if (s) {
      for (t = 0; null !== (s = s.previousSibling);)
        1 === s.nodeType && (t += 1);
      return t;
    }
  }
  function b(e, t) {
    const s = [];
    let a = e.parentElement;
    for (; a;)
      t ? a.matches(t) && s.push(a) : s.push(a), (a = a.parentElement);
    return s;
  }
  function y(e, t) {
    t &&
      e.addEventListener("transitionend", function s(a) {
        a.target === e &&
          (t.call(e, a), e.removeEventListener("transitionend", s));
      });
  }
  function E(e, t, s) {
    const a = r();
    return s
      ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
      parseFloat(
        a
          .getComputedStyle(e, null)
          .getPropertyValue("width" === t ? "margin-right" : "margin-top")
      ) +
      parseFloat(
        a
          .getComputedStyle(e, null)
          .getPropertyValue("width" === t ? "margin-left" : "margin-bottom")
      )
      : e.offsetWidth;
  }
  let x, S, T;
  function M() {
    return (
      x ||
      (x = (function () {
        const e = r(),
          t = a();
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
      })()),
      x
    );
  }
  function C(e) {
    return (
      void 0 === e && (e = {}),
      S ||
      (S = (function (e) {
        let { userAgent: t } = void 0 === e ? {} : e;
        const s = M(),
          a = r(),
          i = a.navigator.platform,
          n = t || a.navigator.userAgent,
          l = { ios: !1, android: !1 },
          o = a.screen.width,
          d = a.screen.height,
          c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
        let p = n.match(/(iPad).*OS\s([\d_]+)/);
        const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
          m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          h = "Win32" === i;
        let f = "MacIntel" === i;
        return (
          !p &&
          f &&
          s.touch &&
          [
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
          ].indexOf(`${o}x${d}`) >= 0 &&
          ((p = n.match(/(Version)\/([\d.]+)/)),
            p || (p = [0, 1, "13_0_0"]),
            (f = !1)),
          c && !h && ((l.os = "android"), (l.android = !0)),
          (p || m || u) && ((l.os = "ios"), (l.ios = !0)),
          l
        );
      })(e)),
      S
    );
  }
  function P() {
    return (
      T ||
      (T = (function () {
        const e = r();
        let t = !1;
        function s() {
          const t = e.navigator.userAgent.toLowerCase();
          return (
            t.indexOf("safari") >= 0 &&
            t.indexOf("chrome") < 0 &&
            t.indexOf("android") < 0
          );
        }
        if (s()) {
          const s = String(e.navigator.userAgent);
          if (s.includes("Version/")) {
            const [e, a] = s
              .split("Version/")[1]
              .split(" ")[0]
              .split(".")
              .map((e) => Number(e));
            t = e < 16 || (16 === e && a < 2);
          }
        }
        return {
          isSafari: t || s(),
          needPerspectiveFix: t,
          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
            e.navigator.userAgent
          ),
        };
      })()),
      T
    );
  }
  var L = {
    on(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      const i = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          a.eventsListeners[e] || (a.eventsListeners[e] = []),
            a.eventsListeners[e][i](t);
        }),
        a
      );
    },
    once(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ("function" != typeof t) return a;
      function i() {
        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
          r[n] = arguments[n];
        t.apply(a, r);
      }
      return (i.__emitterProxy = t), a.on(e, i, s);
    },
    onAny(e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      const a = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return !s.eventsListeners || s.destroyed
        ? s
        : s.eventsListeners
          ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
              s.eventsListeners[e].forEach((a, i) => {
                (a === t || (a.__emitterProxy && a.__emitterProxy === t)) &&
                  s.eventsListeners[e].splice(i, 1);
              });
          }),
            s)
          : s;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      let t, s, a;
      for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
        r[n] = arguments[n];
      "string" == typeof r[0] || Array.isArray(r[0])
        ? ((t = r[0]), (s = r.slice(1, r.length)), (a = e))
        : ((t = r[0].events), (s = r[0].data), (a = r[0].context || e)),
        s.unshift(a);
      return (
        (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(a, [t, ...s]);
            }),
            e.eventsListeners &&
            e.eventsListeners[t] &&
            e.eventsListeners[t].forEach((e) => {
              e.apply(a, s);
            });
        }),
        e
      );
    },
  };
  const z = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const s = t.closest(
      e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
    );
    if (s) {
      const t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
      t && t.remove();
    }
  },
    A = (e, t) => {
      if (!e.slides[t]) return;
      const s = e.slides[t].querySelector('[loading="lazy"]');
      s && s.removeAttribute("loading");
    },
    $ = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const s = e.slides.length;
      if (!s || !t || t < 0) return;
      t = Math.min(t, s);
      const a =
        "auto" === e.params.slidesPerView
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
        i = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        const s = i,
          r = [s - t];
        return (
          r.push(...Array.from({ length: t }).map((e, t) => s + a + t)),
          void e.slides.forEach((t, s) => {
            r.includes(t.column) && A(e, s);
          })
        );
      }
      const r = i + a - 1;
      if (e.params.rewind || e.params.loop)
        for (let a = i - t; a <= r + t; a += 1) {
          const t = ((a % s) + s) % s;
          (t < i || t > r) && A(e, t);
        }
      else
        for (let a = Math.max(i - t, 0); a <= Math.min(r + t, s - 1); a += 1)
          a !== i && (a > r || a < i) && A(e, a);
    };
  var I = {
    updateSize: function () {
      const e = this;
      let t, s;
      const a = e.el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : a.clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : a.clientHeight),
        (0 === t && e.isHorizontal()) ||
        (0 === s && e.isVertical()) ||
        ((t =
          t -
          parseInt(v(a, "padding-left") || 0, 10) -
          parseInt(v(a, "padding-right") || 0, 10)),
          (s =
            s -
            parseInt(v(a, "padding-top") || 0, 10) -
            parseInt(v(a, "padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[t];
      }
      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }
      const a = e.params,
        {
          wrapperEl: i,
          slidesEl: r,
          size: n,
          rtlTranslate: l,
          wrongRTL: o,
        } = e,
        d = e.virtual && a.virtual.enabled,
        c = d ? e.virtual.slides.length : e.slides.length,
        u = h(r, `.${e.params.slideClass}, swiper-slide`),
        m = d ? e.virtual.slides.length : u.length;
      let f = [];
      const g = [],
        w = [];
      let b = a.slidesOffsetBefore;
      "function" == typeof b && (b = a.slidesOffsetBefore.call(e));
      let y = a.slidesOffsetAfter;
      "function" == typeof y && (y = a.slidesOffsetAfter.call(e));
      const x = e.snapGrid.length,
        S = e.slidesGrid.length;
      let T = a.spaceBetween,
        M = -b,
        C = 0,
        P = 0;
      if (void 0 === n) return;
      "string" == typeof T && T.indexOf("%") >= 0
        ? (T = (parseFloat(T.replace("%", "")) / 100) * n)
        : "string" == typeof T && (T = parseFloat(T)),
        (e.virtualSize = -T),
        u.forEach((e) => {
          l ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
            (e.style.marginBottom = ""),
            (e.style.marginTop = "");
        }),
        a.centeredSlides &&
        a.cssMode &&
        (p(i, "--swiper-centered-offset-before", ""),
          p(i, "--swiper-centered-offset-after", ""));
      const L = a.grid && a.grid.rows > 1 && e.grid;
      let z;
      L && e.grid.initSlides(m);
      const A =
        "auto" === a.slidesPerView &&
        a.breakpoints &&
        Object.keys(a.breakpoints).filter(
          (e) => void 0 !== a.breakpoints[e].slidesPerView
        ).length > 0;
      for (let i = 0; i < m; i += 1) {
        let r;
        if (
          ((z = 0),
            u[i] && (r = u[i]),
            L && e.grid.updateSlide(i, r, m, t),
            !u[i] || "none" !== v(r, "display"))
        ) {
          if ("auto" === a.slidesPerView) {
            A && (u[i].style[t("width")] = "");
            const n = getComputedStyle(r),
              l = r.style.transform,
              o = r.style.webkitTransform;
            if (
              (l && (r.style.transform = "none"),
                o && (r.style.webkitTransform = "none"),
                a.roundLengths)
            )
              z = e.isHorizontal() ? E(r, "width", !0) : E(r, "height", !0);
            else {
              const e = s(n, "width"),
                t = s(n, "padding-left"),
                a = s(n, "padding-right"),
                i = s(n, "margin-left"),
                l = s(n, "margin-right"),
                o = n.getPropertyValue("box-sizing");
              if (o && "border-box" === o) z = e + i + l;
              else {
                const { clientWidth: s, offsetWidth: n } = r;
                z = e + t + a + i + l + (n - s);
              }
            }
            l && (r.style.transform = l),
              o && (r.style.webkitTransform = o),
              a.roundLengths && (z = Math.floor(z));
          } else
            (z = (n - (a.slidesPerView - 1) * T) / a.slidesPerView),
              a.roundLengths && (z = Math.floor(z)),
              u[i] && (u[i].style[t("width")] = `${z}px`);
          u[i] && (u[i].swiperSlideSize = z),
            w.push(z),
            a.centeredSlides
              ? ((M = M + z / 2 + C / 2 + T),
                0 === C && 0 !== i && (M = M - n / 2 - T),
                0 === i && (M = M - n / 2 - T),
                Math.abs(M) < 0.001 && (M = 0),
                a.roundLengths && (M = Math.floor(M)),
                P % a.slidesPerGroup == 0 && f.push(M),
                g.push(M))
              : (a.roundLengths && (M = Math.floor(M)),
                (P - Math.min(e.params.slidesPerGroupSkip, P)) %
                e.params.slidesPerGroup ==
                0 && f.push(M),
                g.push(M),
                (M = M + z + T)),
            (e.virtualSize += z + T),
            (C = z),
            (P += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, n) + y),
          l &&
          o &&
          ("slide" === a.effect || "coverflow" === a.effect) &&
          (i.style.width = `${e.virtualSize + T}px`),
          a.setWrapperSize && (i.style[t("width")] = `${e.virtualSize + T}px`),
          L && e.grid.updateWrapperSize(z, f, t),
          !a.centeredSlides)
      ) {
        const t = [];
        for (let s = 0; s < f.length; s += 1) {
          let i = f[s];
          a.roundLengths && (i = Math.floor(i)),
            f[s] <= e.virtualSize - n && t.push(i);
        }
        (f = t),
          Math.floor(e.virtualSize - n) - Math.floor(f[f.length - 1]) > 1 &&
          f.push(e.virtualSize - n);
      }
      if (d && a.loop) {
        const t = w[0] + T;
        if (a.slidesPerGroup > 1) {
          const s = Math.ceil(
            (e.virtual.slidesBefore + e.virtual.slidesAfter) /
            a.slidesPerGroup
          ),
            i = t * a.slidesPerGroup;
          for (let e = 0; e < s; e += 1) f.push(f[f.length - 1] + i);
        }
        for (
          let s = 0;
          s < e.virtual.slidesBefore + e.virtual.slidesAfter;
          s += 1
        )
          1 === a.slidesPerGroup && f.push(f[f.length - 1] + t),
            g.push(g[g.length - 1] + t),
            (e.virtualSize += t);
      }
      if ((0 === f.length && (f = [0]), 0 !== T)) {
        const s = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
        u.filter(
          (e, t) => !(a.cssMode && !a.loop) || t !== u.length - 1
        ).forEach((e) => {
          e.style[s] = `${T}px`;
        });
      }
      if (a.centeredSlides && a.centeredSlidesBounds) {
        let e = 0;
        w.forEach((t) => {
          e += t + (T || 0);
        }),
          (e -= T);
        const t = e - n;
        f = f.map((e) => (e <= 0 ? -b : e > t ? t + y : e));
      }
      if (a.centerInsufficientSlides) {
        let e = 0;
        if (
          (w.forEach((t) => {
            e += t + (T || 0);
          }),
            (e -= T),
            e < n)
        ) {
          const t = (n - e) / 2;
          f.forEach((e, s) => {
            f[s] = e - t;
          }),
            g.forEach((e, s) => {
              g[s] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: u,
          snapGrid: f,
          slidesGrid: g,
          slidesSizesGrid: w,
        }),
          a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)
      ) {
        p(i, "--swiper-centered-offset-before", -f[0] + "px"),
          p(
            i,
            "--swiper-centered-offset-after",
            e.size / 2 - w[w.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      if (
        (m !== c && e.emit("slidesLengthChange"),
          f.length !== x &&
          (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          g.length !== S && e.emit("slidesGridLengthChange"),
          a.watchSlidesProgress && e.updateSlidesOffset(),
          !(d || a.cssMode || ("slide" !== a.effect && "fade" !== a.effect)))
      ) {
        const t = `${a.containerModifierClass}backface-hidden`,
          s = e.el.classList.contains(t);
        m <= a.maxBackfaceHiddenSlides
          ? s || e.el.classList.add(t)
          : s && e.el.classList.remove(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        a = t.virtual && t.params.virtual.enabled;
      let i,
        r = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const n = (e) => (a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || []).forEach((e) => {
            s.push(e);
          });
        else
          for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
            const e = t.activeIndex + i;
            if (e > t.slides.length && !a) break;
            s.push(n(e));
          }
      else s.push(n(t.activeIndex));
      for (i = 0; i < s.length; i += 1)
        if (void 0 !== s[i]) {
          const e = s[i].offsetHeight;
          r = e > r ? e : r;
        }
      (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides,
        s = e.isElement
          ? e.isHorizontal()
            ? e.wrapperEl.offsetLeft
            : e.wrapperEl.offsetTop
          : 0;
      for (let a = 0; a < t.length; a += 1)
        t[a].swiperSlideOffset =
          (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) -
          s -
          e.cssOverflowAdjustment();
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        s = t.params,
        { slides: a, rtlTranslate: i, snapGrid: r } = t;
      if (0 === a.length) return;
      void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
      let n = -e;
      i && (n = e),
        a.forEach((e) => {
          e.classList.remove(s.slideVisibleClass);
        }),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      let l = s.spaceBetween;
      "string" == typeof l && l.indexOf("%") >= 0
        ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
        : "string" == typeof l && (l = parseFloat(l));
      for (let e = 0; e < a.length; e += 1) {
        const o = a[e];
        let d = o.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset);
        const c =
          (n + (s.centeredSlides ? t.minTranslate() : 0) - d) /
          (o.swiperSlideSize + l),
          p =
            (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) /
            (o.swiperSlideSize + l),
          u = -(n - d),
          m = u + t.slidesSizesGrid[e];
        ((u >= 0 && u < t.size - 1) ||
          (m > 1 && m <= t.size) ||
          (u <= 0 && m >= t.size)) &&
          (t.visibleSlides.push(o),
            t.visibleSlidesIndexes.push(e),
            a[e].classList.add(s.slideVisibleClass)),
          (o.progress = i ? -c : c),
          (o.originalProgress = i ? -p : p);
      }
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        a = t.maxTranslate() - t.minTranslate();
      let { progress: i, isBeginning: r, isEnd: n, progressLoop: l } = t;
      const o = r,
        d = n;
      if (0 === a) (i = 0), (r = !0), (n = !0);
      else {
        i = (e - t.minTranslate()) / a;
        const s = Math.abs(e - t.minTranslate()) < 1,
          l = Math.abs(e - t.maxTranslate()) < 1;
        (r = s || i <= 0), (n = l || i >= 1), s && (i = 0), l && (i = 1);
      }
      if (s.loop) {
        const s = t.getSlideIndexByData(0),
          a = t.getSlideIndexByData(t.slides.length - 1),
          i = t.slidesGrid[s],
          r = t.slidesGrid[a],
          n = t.slidesGrid[t.slidesGrid.length - 1],
          o = Math.abs(e);
        (l = o >= i ? (o - i) / n : (o + n - r) / n), l > 1 && (l -= 1);
      }
      Object.assign(t, {
        progress: i,
        progressLoop: l,
        isBeginning: r,
        isEnd: n,
      }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
        t.updateSlidesProgress(e),
        r && !o && t.emit("reachBeginning toEdge"),
        n && !d && t.emit("reachEnd toEdge"),
        ((o && !r) || (d && !n)) && t.emit("fromEdge"),
        t.emit("progress", i);
    },
    updateSlidesClasses: function () {
      const e = this,
        { slides: t, params: s, slidesEl: a, activeIndex: i } = e,
        r = e.virtual && s.virtual.enabled,
        n = (e) => h(a, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
      let l;
      if (
        (t.forEach((e) => {
          e.classList.remove(
            s.slideActiveClass,
            s.slideNextClass,
            s.slidePrevClass
          );
        }),
          r)
      )
        if (s.loop) {
          let t = i - e.virtual.slidesBefore;
          t < 0 && (t = e.virtual.slides.length + t),
            t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
            (l = n(`[data-swiper-slide-index="${t}"]`));
        } else l = n(`[data-swiper-slide-index="${i}"]`);
      else l = t[i];
      if (l) {
        l.classList.add(s.slideActiveClass);
        let e = (function (e, t) {
          const s = [];
          for (; e.nextElementSibling;) {
            const a = e.nextElementSibling;
            t ? a.matches(t) && s.push(a) : s.push(a), (e = a);
          }
          return s;
        })(l, `.${s.slideClass}, swiper-slide`)[0];
        s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
        let a = (function (e, t) {
          const s = [];
          for (; e.previousElementSibling;) {
            const a = e.previousElementSibling;
            t ? a.matches(t) && s.push(a) : s.push(a), (e = a);
          }
          return s;
        })(l, `.${s.slideClass}, swiper-slide`)[0];
        s.loop && 0 === !a && (a = t[t.length - 1]),
          a && a.classList.add(s.slidePrevClass);
      }
      e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          snapGrid: a,
          params: i,
          activeIndex: r,
          realIndex: n,
          snapIndex: l,
        } = t;
      let o,
        d = e;
      const c = (e) => {
        let s = e - t.virtual.slidesBefore;
        return (
          s < 0 && (s = t.virtual.slides.length + s),
          s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
          s
        );
      };
      if (
        (void 0 === d &&
          (d = (function (e) {
            const { slidesGrid: t, params: s } = e,
              a = e.rtlTranslate ? e.translate : -e.translate;
            let i;
            for (let e = 0; e < t.length; e += 1)
              void 0 !== t[e + 1]
                ? a >= t[e] && a < t[e + 1] - (t[e + 1] - t[e]) / 2
                  ? (i = e)
                  : a >= t[e] && a < t[e + 1] && (i = e + 1)
                : a >= t[e] && (i = e);
            return (
              s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
            );
          })(t)),
          a.indexOf(s) >= 0)
      )
        o = a.indexOf(s);
      else {
        const e = Math.min(i.slidesPerGroupSkip, d);
        o = e + Math.floor((d - e) / i.slidesPerGroup);
      }
      if ((o >= a.length && (o = a.length - 1), d === r))
        return (
          o !== l && ((t.snapIndex = o), t.emit("snapIndexChange")),
          void (
            t.params.loop &&
            t.virtual &&
            t.params.virtual.enabled &&
            (t.realIndex = c(d))
          )
        );
      let p;
      (p =
        t.virtual && i.virtual.enabled && i.loop
          ? c(d)
          : t.slides[d]
            ? parseInt(
              t.slides[d].getAttribute("data-swiper-slide-index") || d,
              10
            )
            : d),
        Object.assign(t, {
          previousSnapIndex: l,
          snapIndex: o,
          previousRealIndex: n,
          realIndex: p,
          previousIndex: r,
          activeIndex: d,
        }),
        t.initialized && $(t),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        n !== p && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        s = t.params,
        a = e.closest(`.${s.slideClass}, swiper-slide`);
      let i,
        r = !1;
      if (a)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === a) {
            (r = !0), (i = e);
            break;
          }
      if (!a || !r)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = a),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
            a.getAttribute("data-swiper-slide-index"),
            10
          ))
          : (t.clickedIndex = i),
        s.slideToClickedSlide &&
        void 0 !== t.clickedIndex &&
        t.clickedIndex !== t.activeIndex &&
        t.slideToClickedSlide();
    },
  };
  var k = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const { params: t, rtlTranslate: s, translate: a, wrapperEl: i } = this;
      if (t.virtualTranslate) return s ? -a : a;
      if (t.cssMode) return a;
      let r = o(i, e);
      return (r += this.cssOverflowAdjustment()), s && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        { rtlTranslate: a, params: i, wrapperEl: r, progress: n } = s;
      let l,
        o = 0,
        d = 0;
      s.isHorizontal() ? (o = a ? -e : e) : (d = e),
        i.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? o : d),
        i.cssMode
          ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
            ? -o
            : -d)
          : i.virtualTranslate ||
          (s.isHorizontal()
            ? (o -= s.cssOverflowAdjustment())
            : (d -= s.cssOverflowAdjustment()),
            (r.style.transform = `translate3d(${o}px, ${d}px, 0px)`));
      const c = s.maxTranslate() - s.minTranslate();
      (l = 0 === c ? 0 : (e - s.minTranslate()) / c),
        l !== n && s.updateProgress(e),
        s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, s, a, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        void 0 === a && (a = !0);
      const r = this,
        { params: n, wrapperEl: l } = r;
      if (r.animating && n.preventInteractionOnTransition) return !1;
      const o = r.minTranslate(),
        d = r.maxTranslate();
      let c;
      if (
        ((c = a && e > o ? o : a && e < d ? d : e),
          r.updateProgress(c),
          n.cssMode)
      ) {
        const e = r.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
          if (!r.support.smoothScroll)
            return (
              u({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }), !0
            );
          l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(c),
            s &&
            (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd")))
          : (r.setTransition(t),
            r.setTranslate(c),
            s &&
            (r.emit("beforeTransitionStart", t, i),
              r.emit("transitionStart")),
            r.animating ||
            ((r.animating = !0),
              r.onTranslateToWrapperTransitionEnd ||
              (r.onTranslateToWrapperTransitionEnd = function (e) {
                r &&
                  !r.destroyed &&
                  e.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                    (r.onTranslateToWrapperTransitionEnd = null),
                    delete r.onTranslateToWrapperTransitionEnd,
                    s && r.emit("transitionEnd"));
              }),
              r.wrapperEl.addEventListener(
                "transitionend",
                r.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function O(e) {
    let { swiper: t, runCallbacks: s, direction: a, step: i } = e;
    const { activeIndex: r, previousIndex: n } = t;
    let l = a;
    if (
      (l || (l = r > n ? "next" : r < n ? "prev" : "reset"),
        t.emit(`transition${i}`),
        s && r !== n)
    ) {
      if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
      t.emit(`slideChangeTransition${i}`),
        "next" === l
          ? t.emit(`slideNextTransition${i}`)
          : t.emit(`slidePrevTransition${i}`);
    }
  }
  var D = {
    slideTo: function (e, t, s, a, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        "string" == typeof e && (e = parseInt(e, 10));
      const r = this;
      let n = e;
      n < 0 && (n = 0);
      const {
        params: l,
        snapGrid: o,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: p,
        rtlTranslate: m,
        wrapperEl: h,
        enabled: f,
      } = r;
      if ((r.animating && l.preventInteractionOnTransition) || (!f && !a && !i))
        return !1;
      const g = Math.min(r.params.slidesPerGroupSkip, n);
      let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
      v >= o.length && (v = o.length - 1);
      const w = -o[v];
      if (l.normalizeSlideIndex)
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * w),
            s = Math.floor(100 * d[e]),
            a = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= s && t < a - (a - s) / 2
              ? (n = e)
              : t >= s && t < a && (n = e + 1)
            : t >= s && (n = e);
        }
      if (r.initialized && n !== p) {
        if (
          !r.allowSlideNext &&
          (m
            ? w > r.translate && w > r.minTranslate()
            : w < r.translate && w < r.minTranslate())
        )
          return !1;
        if (
          !r.allowSlidePrev &&
          w > r.translate &&
          w > r.maxTranslate() &&
          (p || 0) !== n
        )
          return !1;
      }
      let b;
      if (
        (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
          r.updateProgress(w),
          (b = n > p ? "next" : n < p ? "prev" : "reset"),
          (m && -w === r.translate) || (!m && w === r.translate))
      )
        return (
          r.updateActiveIndex(n),
          l.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          "slide" !== l.effect && r.setTranslate(w),
          "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
          !1
        );
      if (l.cssMode) {
        const e = r.isHorizontal(),
          s = m ? w : -w;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t &&
            ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
            t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
              ? ((r._cssModeVirtualInitialSet = !0),
                requestAnimationFrame(() => {
                  h[e ? "scrollLeft" : "scrollTop"] = s;
                }))
              : (h[e ? "scrollLeft" : "scrollTop"] = s),
            t &&
            requestAnimationFrame(() => {
              (r.wrapperEl.style.scrollSnapType = ""),
                (r._immediateVirtual = !1);
            });
        } else {
          if (!r.support.smoothScroll)
            return (
              u({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0
            );
          h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
        }
        return !0;
      }
      return (
        r.setTransition(t),
        r.setTranslate(w),
        r.updateActiveIndex(n),
        r.updateSlidesClasses(),
        r.emit("beforeTransitionStart", t, a),
        r.transitionStart(s, b),
        0 === t
          ? r.transitionEnd(s, b)
          : r.animating ||
          ((r.animating = !0),
            r.onSlideToWrapperTransitionEnd ||
            (r.onSlideToWrapperTransitionEnd = function (e) {
              r &&
                !r.destroyed &&
                e.target === this &&
                (r.wrapperEl.removeEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(s, b));
            }),
            r.wrapperEl.addEventListener(
              "transitionend",
              r.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e, t, s, a) {
      if (
        (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "string" == typeof e)
      ) {
        e = parseInt(e, 10);
      }
      const i = this;
      let r = e;
      return (
        i.params.loop &&
        (i.virtual && i.params.virtual.enabled
          ? (r += i.virtual.slidesBefore)
          : (r = i.getSlideIndexByData(r))),
        i.slideTo(r, t, s, a)
      );
    },
    slideNext: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const a = this,
        { enabled: i, params: r, animating: n } = a;
      if (!i) return a;
      let l = r.slidesPerGroup;
      "auto" === r.slidesPerView &&
        1 === r.slidesPerGroup &&
        r.slidesPerGroupAuto &&
        (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
      const o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l,
        d = a.virtual && r.virtual.enabled;
      if (r.loop) {
        if (n && !d && r.loopPreventsSliding) return !1;
        a.loopFix({ direction: "next" }),
          (a._clientLeft = a.wrapperEl.clientLeft);
      }
      return r.rewind && a.isEnd
        ? a.slideTo(0, e, t, s)
        : a.slideTo(a.activeIndex + o, e, t, s);
    },
    slidePrev: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const a = this,
        {
          params: i,
          snapGrid: r,
          slidesGrid: n,
          rtlTranslate: l,
          enabled: o,
          animating: d,
        } = a;
      if (!o) return a;
      const c = a.virtual && i.virtual.enabled;
      if (i.loop) {
        if (d && !c && i.loopPreventsSliding) return !1;
        a.loopFix({ direction: "prev" }),
          (a._clientLeft = a.wrapperEl.clientLeft);
      }
      function p(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const u = p(l ? a.translate : -a.translate),
        m = r.map((e) => p(e));
      let h = r[m.indexOf(u) - 1];
      if (void 0 === h && i.cssMode) {
        let e;
        r.forEach((t, s) => {
          u >= t && (e = s);
        }),
          void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
      }
      let f = 0;
      if (
        (void 0 !== h &&
          ((f = n.indexOf(h)),
            f < 0 && (f = a.activeIndex - 1),
            "auto" === i.slidesPerView &&
            1 === i.slidesPerGroup &&
            i.slidesPerGroupAuto &&
            ((f = f - a.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0)))),
          i.rewind && a.isBeginning)
      ) {
        const i =
          a.params.virtual && a.params.virtual.enabled && a.virtual
            ? a.virtual.slides.length - 1
            : a.slides.length - 1;
        return a.slideTo(i, e, t, s);
      }
      return a.slideTo(f, e, t, s);
    },
    slideReset: function (e, t, s) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, s)
      );
    },
    slideToClosest: function (e, t, s, a) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === a && (a = 0.5);
      const i = this;
      let r = i.activeIndex;
      const n = Math.min(i.params.slidesPerGroupSkip, r),
        l = n + Math.floor((r - n) / i.params.slidesPerGroup),
        o = i.rtlTranslate ? i.translate : -i.translate;
      if (o >= i.snapGrid[l]) {
        const e = i.snapGrid[l];
        o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
      } else {
        const e = i.snapGrid[l - 1];
        o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
      }
      return (
        (r = Math.max(r, 0)),
        (r = Math.min(r, i.slidesGrid.length - 1)),
        i.slideTo(r, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, slidesEl: s } = e,
        a =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let i,
        r = e.clickedIndex;
      const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
      if (t.loop) {
        if (e.animating) return;
        (i = parseInt(
          e.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        )),
          t.centeredSlides
            ? r < e.loopedSlides - a / 2 ||
              r > e.slides.length - e.loopedSlides + a / 2
              ? (e.loopFix(),
                (r = e.getSlideIndex(
                  h(s, `${l}[data-swiper-slide-index="${i}"]`)[0]
                )),
                n(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - a
              ? (e.loopFix(),
                (r = e.getSlideIndex(
                  h(s, `${l}[data-swiper-slide-index="${i}"]`)[0]
                )),
                n(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
      } else e.slideTo(r);
    },
  };
  var G = {
    loopCreate: function (e) {
      const t = this,
        { params: s, slidesEl: a } = t;
      if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
      h(a, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
        e.setAttribute("data-swiper-slide-index", t);
      }),
        t.loopFix({
          slideRealIndex: e,
          direction: s.centeredSlides ? void 0 : "next",
        });
    },
    loopFix: function (e) {
      let {
        slideRealIndex: t,
        slideTo: s = !0,
        direction: a,
        setTranslate: i,
        activeSlideIndex: r,
        byController: n,
        byMousewheel: l,
      } = void 0 === e ? {} : e;
      const o = this;
      if (!o.params.loop) return;
      o.emit("beforeLoopFix");
      const {
        slides: d,
        allowSlidePrev: c,
        allowSlideNext: p,
        slidesEl: u,
        params: m,
      } = o;
      if (
        ((o.allowSlidePrev = !0),
          (o.allowSlideNext = !0),
          o.virtual && m.virtual.enabled)
      )
        return (
          s &&
          (m.centeredSlides || 0 !== o.snapIndex
            ? m.centeredSlides && o.snapIndex < m.slidesPerView
              ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
              : o.snapIndex === o.snapGrid.length - 1 &&
              o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
            : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
          (o.allowSlidePrev = c),
          (o.allowSlideNext = p),
          void o.emit("loopFix")
        );
      const h =
        "auto" === m.slidesPerView
          ? o.slidesPerViewDynamic()
          : Math.ceil(parseFloat(m.slidesPerView, 10));
      let f = m.loopedSlides || h;
      f % m.slidesPerGroup != 0 &&
        (f += m.slidesPerGroup - (f % m.slidesPerGroup)),
        (o.loopedSlides = f);
      const g = [],
        v = [];
      let w = o.activeIndex;
      void 0 === r
        ? (r = o.getSlideIndex(
          o.slides.filter((e) => e.classList.contains(m.slideActiveClass))[0]
        ))
        : (w = r);
      const b = "next" === a || !a,
        y = "prev" === a || !a;
      let E = 0,
        x = 0;
      if (r < f) {
        E = Math.max(f - r, m.slidesPerGroup);
        for (let e = 0; e < f - r; e += 1) {
          const t = e - Math.floor(e / d.length) * d.length;
          g.push(d.length - t - 1);
        }
      } else if (r > o.slides.length - 2 * f) {
        x = Math.max(r - (o.slides.length - 2 * f), m.slidesPerGroup);
        for (let e = 0; e < x; e += 1) {
          const t = e - Math.floor(e / d.length) * d.length;
          v.push(t);
        }
      }
      if (
        (y &&
          g.forEach((e) => {
            (o.slides[e].swiperLoopMoveDOM = !0),
              u.prepend(o.slides[e]),
              (o.slides[e].swiperLoopMoveDOM = !1);
          }),
          b &&
          v.forEach((e) => {
            (o.slides[e].swiperLoopMoveDOM = !0),
              u.append(o.slides[e]),
              (o.slides[e].swiperLoopMoveDOM = !1);
          }),
          o.recalcSlides(),
          "auto" === m.slidesPerView && o.updateSlides(),
          m.watchSlidesProgress && o.updateSlidesOffset(),
          s)
      )
        if (g.length > 0 && y)
          if (void 0 === t) {
            const e = o.slidesGrid[w],
              t = o.slidesGrid[w + E] - e;
            l
              ? o.setTranslate(o.translate - t)
              : (o.slideTo(w + E, 0, !1, !0),
                i &&
                ((o.touches[o.isHorizontal() ? "startX" : "startY"] += t),
                  (o.touchEventsData.currentTranslate = o.translate)));
          } else
            i &&
              (o.slideToLoop(t, 0, !1, !0),
                (o.touchEventsData.currentTranslate = o.translate));
        else if (v.length > 0 && b)
          if (void 0 === t) {
            const e = o.slidesGrid[w],
              t = o.slidesGrid[w - x] - e;
            l
              ? o.setTranslate(o.translate - t)
              : (o.slideTo(w - x, 0, !1, !0),
                i &&
                ((o.touches[o.isHorizontal() ? "startX" : "startY"] += t),
                  (o.touchEventsData.currentTranslate = o.translate)));
          } else o.slideToLoop(t, 0, !1, !0);
      if (
        ((o.allowSlidePrev = c),
          (o.allowSlideNext = p),
          o.controller && o.controller.control && !n)
      ) {
        const e = {
          slideRealIndex: t,
          slideTo: !1,
          direction: a,
          setTranslate: i,
          activeSlideIndex: r,
          byController: !0,
        };
        Array.isArray(o.controller.control)
          ? o.controller.control.forEach((t) => {
            !t.destroyed && t.params.loop && t.loopFix(e);
          })
          : o.controller.control instanceof o.constructor &&
          o.controller.control.params.loop &&
          o.controller.control.loopFix(e);
      }
      o.emit("loopFix");
    },
    loopDestroy: function () {
      const e = this,
        { params: t, slidesEl: s } = e;
      if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
      e.recalcSlides();
      const a = [];
      e.slides.forEach((e) => {
        const t =
          void 0 === e.swiperSlideIndex
            ? 1 * e.getAttribute("data-swiper-slide-index")
            : e.swiperSlideIndex;
        a[t] = e;
      }),
        e.slides.forEach((e) => {
          e.removeAttribute("data-swiper-slide-index");
        }),
        a.forEach((e) => {
          s.append(e);
        }),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0);
    },
  };
  function H(e) {
    const t = this,
      s = a(),
      i = r(),
      n = t.touchEventsData;
    n.evCache.push(e);
    const { params: o, touches: d, enabled: c } = t;
    if (!c) return;
    if (!o.simulateTouch && "mouse" === e.pointerType) return;
    if (t.animating && o.preventInteractionOnTransition) return;
    !t.animating && o.cssMode && o.loop && t.loopFix();
    let p = e;
    p.originalEvent && (p = p.originalEvent);
    let u = p.target;
    if ("wrapper" === o.touchEventsTarget && !t.wrapperEl.contains(u)) return;
    if ("which" in p && 3 === p.which) return;
    if ("button" in p && p.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    const m = !!o.noSwipingClass && "" !== o.noSwipingClass,
      h = e.composedPath ? e.composedPath() : e.path;
    m && p.target && p.target.shadowRoot && h && (u = h[0]);
    const f = o.noSwipingSelector
      ? o.noSwipingSelector
      : `.${o.noSwipingClass}`,
      g = !(!p.target || !p.target.shadowRoot);
    if (
      o.noSwiping &&
      (g
        ? (function (e, t) {
          return (
            void 0 === t && (t = this),
            (function t(s) {
              if (!s || s === a() || s === r()) return null;
              s.assignedSlot && (s = s.assignedSlot);
              const i = s.closest(e);
              return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
            })(t)
          );
        })(f, u)
        : u.closest(f))
    )
      return void (t.allowClick = !0);
    if (o.swipeHandler && !u.closest(o.swipeHandler)) return;
    (d.currentX = p.pageX), (d.currentY = p.pageY);
    const v = d.currentX,
      w = d.currentY,
      b = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
      y = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
    if (b && (v <= y || v >= i.innerWidth - y)) {
      if ("prevent" !== b) return;
      e.preventDefault();
    }
    Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (d.startX = v),
      (d.startY = w),
      (n.touchStartTime = l()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      o.threshold > 0 && (n.allowThresholdMove = !1);
    let E = !0;
    u.matches(n.focusableElements) &&
      ((E = !1), "SELECT" === u.nodeName && (n.isTouched = !1)),
      s.activeElement &&
      s.activeElement.matches(n.focusableElements) &&
      s.activeElement !== u &&
      s.activeElement.blur();
    const x = E && t.allowTouchMove && o.touchStartPreventDefault;
    (!o.touchStartForcePreventDefault && !x) ||
      u.isContentEditable ||
      p.preventDefault(),
      o.freeMode &&
      o.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !o.cssMode &&
      t.freeMode.onTouchStart(),
      t.emit("touchStart", p);
  }
  function X(e) {
    const t = a(),
      s = this,
      i = s.touchEventsData,
      { params: r, touches: n, rtlTranslate: o, enabled: d } = s;
    if (!d) return;
    if (!r.simulateTouch && "mouse" === e.pointerType) return;
    let c = e;
    if ((c.originalEvent && (c = c.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit("touchMoveOpposite", c)
      );
    const p = i.evCache.findIndex((e) => e.pointerId === c.pointerId);
    p >= 0 && (i.evCache[p] = c);
    const u = i.evCache.length > 1 ? i.evCache[0] : c,
      m = u.pageX,
      h = u.pageY;
    if (c.preventedByNestedSwiper) return (n.startX = m), void (n.startY = h);
    if (!s.allowTouchMove)
      return (
        c.target.matches(i.focusableElements) || (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(n, {
            startX: m,
            startY: h,
            prevX: s.touches.currentX,
            prevY: s.touches.currentY,
            currentX: m,
            currentY: h,
          }),
            (i.touchStartTime = l()))
        )
      );
    if (r.touchReleaseOnEdges && !r.loop)
      if (s.isVertical()) {
        if (
          (h < n.startY && s.translate <= s.maxTranslate()) ||
          (h > n.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (m < n.startX && s.translate <= s.maxTranslate()) ||
        (m > n.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      t.activeElement &&
      c.target === t.activeElement &&
      c.target.matches(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1);
    if (
      (i.allowTouchCallbacks && s.emit("touchMove", c),
        c.targetTouches && c.targetTouches.length > 1)
    )
      return;
    (n.currentX = m), (n.currentY = h);
    const f = n.currentX - n.startX,
      g = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && n.currentY === n.startY) ||
        (s.isVertical() && n.currentX === n.startX)
        ? (i.isScrolling = !1)
        : f * f + g * g >= 25 &&
        ((e = (180 * Math.atan2(Math.abs(g), Math.abs(f))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > r.touchAngle
            : 90 - e > r.touchAngle));
    }
    if (
      (i.isScrolling && s.emit("touchMoveOpposite", c),
        void 0 === i.startMoving &&
        ((n.currentX === n.startX && n.currentY === n.startY) ||
          (i.startMoving = !0)),
        i.isScrolling ||
        (s.zoom &&
          s.params.zoom &&
          s.params.zoom.enabled &&
          i.evCache.length > 1))
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !r.cssMode && c.cancelable && c.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && c.stopPropagation();
    let v = s.isHorizontal() ? f : g,
      w = s.isHorizontal()
        ? n.currentX - n.previousX
        : n.currentY - n.previousY;
    r.oneWayMovement &&
      ((v = Math.abs(v) * (o ? 1 : -1)), (w = Math.abs(w) * (o ? 1 : -1))),
      (n.diff = v),
      (v *= r.touchRatio),
      o && ((v = -v), (w = -w));
    const b = s.touchesDirection;
    (s.swipeDirection = v > 0 ? "prev" : "next"),
      (s.touchesDirection = w > 0 ? "prev" : "next");
    const y = s.params.loop && !r.cssMode;
    if (!i.isMoved) {
      if (
        (y && s.loopFix({ direction: s.swipeDirection }),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating)
      ) {
        const e = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
        });
        s.wrapperEl.dispatchEvent(e);
      }
      (i.allowMomentumBounce = !1),
        !r.grabCursor ||
        (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
        s.setGrabCursor(!0),
        s.emit("sliderFirstMove", c);
    }
    let E;
    i.isMoved &&
      b !== s.touchesDirection &&
      y &&
      Math.abs(v) >= 1 &&
      (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }), (E = !0)),
      s.emit("sliderMove", c),
      (i.isMoved = !0),
      (i.currentTranslate = v + i.startTranslate);
    let x = !0,
      S = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (S = 0),
        v > 0
          ? (y &&
            !E &&
            i.currentTranslate >
            (r.centeredSlides
              ? s.minTranslate() - s.size / 2
              : s.minTranslate()) &&
            s.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
            i.currentTranslate > s.minTranslate() &&
            ((x = !1),
              r.resistance &&
              (i.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + i.startTranslate + v) ** S)))
          : v < 0 &&
          (y &&
            !E &&
            i.currentTranslate <
            (r.centeredSlides
              ? s.maxTranslate() + s.size / 2
              : s.maxTranslate()) &&
            s.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                s.slides.length -
                ("auto" === r.slidesPerView
                  ? s.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(r.slidesPerView, 10))),
            }),
            i.currentTranslate < s.maxTranslate() &&
            ((x = !1),
              r.resistance &&
              (i.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - i.startTranslate - v) ** S))),
        x && (c.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
        r.threshold > 0)
    ) {
      if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (n.startX = n.currentX),
          (n.startY = n.currentY),
          (i.currentTranslate = i.startTranslate),
          void (n.diff = s.isHorizontal()
            ? n.currentX - n.startX
            : n.currentY - n.startY)
        );
    }
    r.followFinger &&
      !r.cssMode &&
      (((r.freeMode && r.freeMode.enabled && s.freeMode) ||
        r.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
        r.freeMode &&
        r.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
  }
  function Y(e) {
    const t = this,
      s = t.touchEventsData,
      a = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
    if (
      (a >= 0 && s.evCache.splice(a, 1),
        ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
    ) {
      if (
        !(
          "pointercancel" === e.type &&
          (t.browser.isSafari || t.browser.isWebView)
        )
      )
        return;
    }
    const {
      params: i,
      touches: r,
      rtlTranslate: o,
      slidesGrid: d,
      enabled: c,
    } = t;
    if (!c) return;
    if (!i.simulateTouch && "mouse" === e.pointerType) return;
    let p = e;
    if (
      (p.originalEvent && (p = p.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", p),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
    )
      return (
        s.isMoved && i.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    i.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const u = l(),
      m = u - s.touchStartTime;
    if (t.allowClick) {
      const e = p.path || (p.composedPath && p.composedPath());
      t.updateClickedSlide((e && e[0]) || p.target),
        t.emit("tap click", p),
        m < 300 &&
        u - s.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", p);
    }
    if (
      ((s.lastClickTime = l()),
        n(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === r.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let h;
    if (
      ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (h = i.followFinger
          ? o
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        i.cssMode)
    )
      return;
    if (i.freeMode && i.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: h });
    let f = 0,
      g = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < d.length;
      e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
    ) {
      const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      void 0 !== d[e + t]
        ? h >= d[e] && h < d[e + t] && ((f = e), (g = d[e + t] - d[e]))
        : h >= d[e] && ((f = e), (g = d[d.length - 1] - d[d.length - 2]));
    }
    let v = null,
      w = null;
    i.rewind &&
      (t.isBeginning
        ? (w =
          i.virtual && i.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
        : t.isEnd && (v = 0));
    const b = (h - d[f]) / g,
      y = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (m > i.longSwipesMs) {
      if (!i.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (b >= i.longSwipesRatio
          ? t.slideTo(i.rewind && t.isEnd ? v : f + y)
          : t.slideTo(f)),
        "prev" === t.swipeDirection &&
        (b > 1 - i.longSwipesRatio
          ? t.slideTo(f + y)
          : null !== w && b < 0 && Math.abs(b) > i.longSwipesRatio
            ? t.slideTo(w)
            : t.slideTo(f));
    } else {
      if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
        (p.target === t.navigation.nextEl || p.target === t.navigation.prevEl)
        ? p.target === t.navigation.nextEl
          ? t.slideTo(f + y)
          : t.slideTo(f)
        : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : f + y),
          "prev" === t.swipeDirection && t.slideTo(null !== w ? w : f));
    }
  }
  function N() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e,
      n = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses();
    const l = n && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      l
      ? e.params.loop && !n
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0)
      : e.slideTo(e.slides.length - 1, 0, !1, !0),
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
      (e.allowSlideNext = a),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function B(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function R() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
    if (!a) return;
    let i;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
      i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  function q(e) {
    const t = this;
    z(t, e.target),
      t.params.cssMode ||
      ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
      t.update();
  }
  let F = !1;
  function _() { }
  const V = (e, t) => {
    const s = a(),
      { params: i, el: r, wrapperEl: n, device: l } = e,
      o = !!i.nested,
      d = "on" === t ? "addEventListener" : "removeEventListener",
      c = t;
    r[d]("pointerdown", e.onTouchStart, { passive: !1 }),
      s[d]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
      s[d]("pointerup", e.onTouchEnd, { passive: !0 }),
      s[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
      s[d]("pointerout", e.onTouchEnd, { passive: !0 }),
      s[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
      (i.preventClicks || i.preventClicksPropagation) &&
      r[d]("click", e.onClick, !0),
      i.cssMode && n[d]("scroll", e.onScroll),
      i.updateOnWindowResize
        ? e[c](
          l.ios || l.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          N,
          !0
        )
        : e[c]("observerUpdate", N, !0),
      r[d]("load", e.onLoad, { capture: !0 });
  };
  const j = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  var W = {
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
  function U(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      const a = Object.keys(s)[0],
        i = s[a];
      "object" == typeof i && null !== i
        ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 &&
          !0 === e[a] &&
          (e[a] = { auto: !0 }),
          a in e && "enabled" in i
            ? (!0 === e[a] && (e[a] = { enabled: !0 }),
              "object" != typeof e[a] ||
              "enabled" in e[a] ||
              (e[a].enabled = !0),
              e[a] || (e[a] = { enabled: !1 }),
              c(t, s))
            : c(t, s))
        : c(t, s);
    };
  }
  const K = {
    eventsEmitter: L,
    update: I,
    translate: k,
    transition: {
      setTransition: function (e, t) {
        const s = this;
        s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`),
          s.emit("setTransition", e, t);
      },
      transitionStart: function (e, t) {
        void 0 === e && (e = !0);
        const s = this,
          { params: a } = s;
        a.cssMode ||
          (a.autoHeight && s.updateAutoHeight(),
            O({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
      },
      transitionEnd: function (e, t) {
        void 0 === e && (e = !0);
        const s = this,
          { params: a } = s;
        (s.animating = !1),
          a.cssMode ||
          (s.setTransition(0),
            O({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
      },
    },
    slide: D,
    loop: G,
    grabCursor: {
      setGrabCursor: function (e) {
        const t = this;
        if (
          !t.params.simulateTouch ||
          (t.params.watchOverflow && t.isLocked) ||
          t.params.cssMode
        )
          return;
        const s =
          "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
        t.isElement && (t.__preventObserver__ = !0),
          (s.style.cursor = "move"),
          (s.style.cursor = e ? "grabbing" : "grab"),
          t.isElement &&
          requestAnimationFrame(() => {
            t.__preventObserver__ = !1;
          });
      },
      unsetGrabCursor: function () {
        const e = this;
        (e.params.watchOverflow && e.isLocked) ||
          e.params.cssMode ||
          (e.isElement && (e.__preventObserver__ = !0),
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = ""),
            e.isElement &&
            requestAnimationFrame(() => {
              e.__preventObserver__ = !1;
            }));
      },
    },
    events: {
      attachEvents: function () {
        const e = this,
          t = a(),
          { params: s } = e;
        (e.onTouchStart = H.bind(e)),
          (e.onTouchMove = X.bind(e)),
          (e.onTouchEnd = Y.bind(e)),
          s.cssMode && (e.onScroll = R.bind(e)),
          (e.onClick = B.bind(e)),
          (e.onLoad = q.bind(e)),
          F || (t.addEventListener("touchstart", _), (F = !0)),
          V(e, "on");
      },
      detachEvents: function () {
        V(this, "off");
      },
    },
    breakpoints: {
      setBreakpoint: function () {
        const e = this,
          { realIndex: t, initialized: s, params: a, el: i } = e,
          r = a.breakpoints;
        if (!r || (r && 0 === Object.keys(r).length)) return;
        const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
        if (!n || e.currentBreakpoint === n) return;
        const l = (n in r ? r[n] : void 0) || e.originalParams,
          o = j(e, a),
          d = j(e, l),
          p = a.enabled;
        o && !d
          ? (i.classList.remove(
            `${a.containerModifierClass}grid`,
            `${a.containerModifierClass}grid-column`
          ),
            e.emitContainerClasses())
          : !o &&
          d &&
          (i.classList.add(`${a.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === a.grid.fill)) &&
            i.classList.add(`${a.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          ["navigation", "pagination", "scrollbar"].forEach((t) => {
            if (void 0 === l[t]) return;
            const s = a[t] && a[t].enabled,
              i = l[t] && l[t].enabled;
            s && !i && e[t].disable(), !s && i && e[t].enable();
          });
        const u = l.direction && l.direction !== a.direction,
          m = a.loop && (l.slidesPerView !== a.slidesPerView || u);
        u && s && e.changeDirection(), c(e.params, l);
        const h = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          p && !h ? e.disable() : !p && h && e.enable(),
          (e.currentBreakpoint = n),
          e.emit("_beforeBreakpoint", l),
          m && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t, s) {
        if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
          return;
        let a = !1;
        const i = r(),
          n = "window" === t ? i.innerHeight : s.clientHeight,
          l = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: n * t, point: e };
            }
            return { value: e, point: e };
          });
        l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < l.length; e += 1) {
          const { point: r, value: n } = l[e];
          "window" === t
            ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r)
            : n <= s.clientWidth && (a = r);
        }
        return a || "max";
      },
    },
    checkOverflow: {
      checkOverflow: function () {
        const e = this,
          { isLocked: t, params: s } = e,
          { slidesOffsetBefore: a } = s;
        if (a) {
          const t = e.slides.length - 1,
            s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
          e.isLocked = e.size > s;
        } else e.isLocked = 1 === e.snapGrid.length;
        !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
          !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
          t && t !== e.isLocked && (e.isEnd = !1),
          t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
      },
    },
    classes: {
      addClasses: function () {
        const e = this,
          { classNames: t, params: s, rtl: a, el: i, device: r } = e,
          n = (function (e, t) {
            const s = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((a) => {
                    e[a] && s.push(t + a);
                  })
                  : "string" == typeof e && s.push(t + e);
              }),
              s
            );
          })(
            [
              "initialized",
              s.direction,
              { "free-mode": e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: a },
              { grid: s.grid && s.grid.rows > 1 },
              {
                "grid-column":
                  s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
              },
              { android: r.android },
              { ios: r.ios },
              { "css-mode": s.cssMode },
              { centered: s.cssMode && s.centeredSlides },
              { "watch-progress": s.watchSlidesProgress },
            ],
            s.containerModifierClass
          );
        t.push(...n), i.classList.add(...t), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { el: e, classNames: t } = this;
        e.classList.remove(...t), this.emitContainerClasses();
      },
    },
  },
    Z = {};
  class Q {
    constructor() {
      let e, t;
      for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
        i[r] = arguments[r];
      1 === i.length &&
        i[0].constructor &&
        "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
        ? (t = i[0])
        : ([e, t] = i),
        t || (t = {}),
        (t = c({}, t)),
        e && !t.el && (t.el = e);
      const n = a();
      if (
        t.el &&
        "string" == typeof t.el &&
        n.querySelectorAll(t.el).length > 1
      ) {
        const e = [];
        return (
          n.querySelectorAll(t.el).forEach((s) => {
            const a = c({}, t, { el: s });
            e.push(new Q(a));
          }),
          e
        );
      }
      const l = this;
      (l.__swiper__ = !0),
        (l.support = M()),
        (l.device = C({ userAgent: t.userAgent })),
        (l.browser = P()),
        (l.eventsListeners = {}),
        (l.eventsAnyListeners = []),
        (l.modules = [...l.__modules__]),
        t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
      const o = {};
      l.modules.forEach((e) => {
        e({
          params: t,
          swiper: l,
          extendParams: U(t, o),
          on: l.on.bind(l),
          once: l.once.bind(l),
          off: l.off.bind(l),
          emit: l.emit.bind(l),
        });
      });
      const d = c({}, W, o);
      return (
        (l.params = c({}, d, Z, t)),
        (l.originalParams = c({}, l.params)),
        (l.passedParams = c({}, t)),
        l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((e) => {
          l.on(e, l.params.on[e]);
        }),
        l.params && l.params.onAny && l.onAny(l.params.onAny),
        Object.assign(l, {
          enabled: l.params.enabled,
          el: e,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === l.params.direction,
          isVertical: () => "vertical" === l.params.direction,
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
    getSlideIndex(e) {
      const { slidesEl: t, params: s } = this,
        a = w(h(t, `.${s.slideClass}, swiper-slide`)[0]);
      return w(e) - a;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.filter(
          (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
        )[0]
      );
    }
    recalcSlides() {
      const { slidesEl: e, params: t } = this;
      this.slides = h(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const a = s.minTranslate(),
        i = (s.maxTranslate() - a) * e + a;
      s.translateTo(i, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((s) => {
        const a = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: a }), e.emit("_slideClass", s, a);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const {
        params: s,
        slides: a,
        slidesGrid: i,
        slidesSizesGrid: r,
        size: n,
        activeIndex: l,
      } = this;
      let o = 1;
      if (s.centeredSlides) {
        let e,
          t = a[l] ? a[l].swiperSlideSize : 0;
        for (let s = l + 1; s < a.length; s += 1)
          a[s] &&
            !e &&
            ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
        for (let s = l - 1; s >= 0; s -= 1)
          a[s] &&
            !e &&
            ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
      } else if ("current" === e)
        for (let e = l + 1; e < a.length; e += 1) {
          (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
        }
      else
        for (let e = l - 1; e >= 0; e -= 1) {
          i[l] - i[e] < n && (o += 1);
        }
      return o;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function a() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let i;
      if (
        (s.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && z(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          s.freeMode && s.freeMode.enabled && !s.cssMode)
      )
        a(), s.autoHeight && e.updateAutoHeight();
      else {
        if (
          ("auto" === s.slidesPerView || s.slidesPerView > 1) &&
          e.isEnd &&
          !s.centeredSlides
        ) {
          const t =
            e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
          i = e.slideTo(t.length - 1, 0, !1, !0);
        } else i = e.slideTo(e.activeIndex, 0, !1, !0);
        i || a();
      }
      s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const s = this,
        a = s.params.direction;
      return (
        e || (e = "horizontal" === a ? "vertical" : "horizontal"),
        e === a ||
        ("horizontal" !== e && "vertical" !== e) ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${a}`),
          s.el.classList.add(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.forEach((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && "rtl" === e) ||
        (!t.rtl && "ltr" === e) ||
        ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let s = e || t.params.el;
      if (("string" == typeof s && (s = document.querySelector(s)), !s))
        return !1;
      (s.swiper = t),
        s.parentNode &&
        s.parentNode.host &&
        "SWIPER-CONTAINER" === s.parentNode.host.nodeName &&
        (t.isElement = !0);
      const a = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let i = (() => {
        if (s && s.shadowRoot && s.shadowRoot.querySelector) {
          return s.shadowRoot.querySelector(a());
        }
        return h(s, a())[0];
      })();
      return (
        !i &&
        t.params.createElements &&
        ((i = f("div", t.params.wrapperClass)),
          s.append(i),
          h(s, `.${t.params.slideClass}`).forEach((e) => {
            i.append(e);
          })),
        Object.assign(t, {
          el: s,
          wrapperEl: i,
          slidesEl:
            t.isElement && !s.parentNode.host.slideSlots
              ? s.parentNode.host
              : i,
          hostEl: t.isElement ? s.parentNode.host : s,
          mounted: !0,
          rtl: "rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction")),
          wrongRTL: "-webkit-box" === v(i, "display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
        (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
              t.params.initialSlide + t.virtual.slidesBefore,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            )
            : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            ),
          t.params.loop && t.loopCreate(),
          t.attachEvents(),
          [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
            e.complete
              ? z(t, e)
              : e.addEventListener("load", (e) => {
                z(t, e.target);
              });
          }),
          $(t),
          (t.initialized = !0),
          $(t),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const s = this,
        { params: a, el: i, wrapperEl: r, slides: n } = s;
      return (
        void 0 === s.params ||
        s.destroyed ||
        (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          a.loop && s.loopDestroy(),
          t &&
          (s.removeClasses(),
            i.removeAttribute("style"),
            r.removeAttribute("style"),
            n &&
            n.length &&
            n.forEach((e) => {
              e.classList.remove(
                a.slideVisibleClass,
                a.slideActiveClass,
                a.slideNextClass,
                a.slidePrevClass
              ),
                e.removeAttribute("style"),
                e.removeAttribute("data-swiper-slide-index");
            })),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
          ((s.el.swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) { }
                try {
                  delete t[e];
                } catch (e) { }
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      c(Z, e);
    }
    static get extendedDefaults() {
      return Z;
    }
    static get defaults() {
      return W;
    }
    static installModule(e) {
      Q.prototype.__modules__ || (Q.prototype.__modules__ = []);
      const t = Q.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => Q.installModule(e)), Q)
        : (Q.installModule(e), Q);
    }
  }
  function J(e, t, s, a) {
    return (
      e.params.createElements &&
      Object.keys(a).forEach((i) => {
        if (!s[i] && !0 === s.auto) {
          let r = h(e.el, `.${a[i]}`)[0];
          r || ((r = f("div", a[i])), (r.className = a[i]), e.el.append(r)),
            (s[i] = r),
            (t[i] = r);
        }
      }),
      s
    );
  }
  function ee(e) {
    return (
      void 0 === e && (e = ""),
      `.${e
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function te(e) {
    const t = this,
      { params: s, slidesEl: a } = t;
    s.loop && t.loopDestroy();
    const i = (e) => {
      if ("string" == typeof e) {
        const t = document.createElement("div");
        (t.innerHTML = e), a.append(t.children[0]), (t.innerHTML = "");
      } else a.append(e);
    };
    if ("object" == typeof e && "length" in e)
      for (let t = 0; t < e.length; t += 1) e[t] && i(e[t]);
    else i(e);
    t.recalcSlides(),
      s.loop && t.loopCreate(),
      (s.observer && !t.isElement) || t.update();
  }
  function se(e) {
    const t = this,
      { params: s, activeIndex: a, slidesEl: i } = t;
    s.loop && t.loopDestroy();
    let r = a + 1;
    const n = (e) => {
      if ("string" == typeof e) {
        const t = document.createElement("div");
        (t.innerHTML = e), i.prepend(t.children[0]), (t.innerHTML = "");
      } else i.prepend(e);
    };
    if ("object" == typeof e && "length" in e) {
      for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
      r = a + e.length;
    } else n(e);
    t.recalcSlides(),
      s.loop && t.loopCreate(),
      (s.observer && !t.isElement) || t.update(),
      t.slideTo(r, 0, !1);
  }
  function ae(e, t) {
    const s = this,
      { params: a, activeIndex: i, slidesEl: r } = s;
    let n = i;
    a.loop && ((n -= s.loopedSlides), s.loopDestroy(), s.recalcSlides());
    const l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    let o = n > e ? n + 1 : n;
    const d = [];
    for (let t = l - 1; t >= e; t -= 1) {
      const e = s.slides[t];
      e.remove(), d.unshift(e);
    }
    if ("object" == typeof t && "length" in t) {
      for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
      o = n > e ? n + t.length : n;
    } else r.append(t);
    for (let e = 0; e < d.length; e += 1) r.append(d[e]);
    s.recalcSlides(),
      a.loop && s.loopCreate(),
      (a.observer && !s.isElement) || s.update(),
      a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
  }
  function ie(e) {
    const t = this,
      { params: s, activeIndex: a } = t;
    let i = a;
    s.loop && ((i -= t.loopedSlides), t.loopDestroy());
    let r,
      n = i;
    if ("object" == typeof e && "length" in e) {
      for (let s = 0; s < e.length; s += 1)
        (r = e[s]), t.slides[r] && t.slides[r].remove(), r < n && (n -= 1);
      n = Math.max(n, 0);
    } else
      (r = e),
        t.slides[r] && t.slides[r].remove(),
        r < n && (n -= 1),
        (n = Math.max(n, 0));
    t.recalcSlides(),
      s.loop && t.loopCreate(),
      (s.observer && !t.isElement) || t.update(),
      s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
  }
  function re() {
    const e = this,
      t = [];
    for (let s = 0; s < e.slides.length; s += 1) t.push(s);
    e.removeSlide(t);
  }
  function ne(e) {
    const {
      effect: t,
      swiper: s,
      on: a,
      setTranslate: i,
      setTransition: r,
      overwriteParams: n,
      perspective: l,
      recreateShadows: o,
      getEffectParams: d,
    } = e;
    let c;
    a("beforeInit", () => {
      if (s.params.effect !== t) return;
      s.classNames.push(`${s.params.containerModifierClass}${t}`),
        l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
      const e = n ? n() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e);
    }),
      a("setTranslate", () => {
        s.params.effect === t && i();
      }),
      a("setTransition", (e, a) => {
        s.params.effect === t && r(a);
      }),
      a("transitionEnd", () => {
        if (s.params.effect === t && o) {
          if (!d || !d().slideShadows) return;
          s.slides.forEach((e) => {
            e.querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            ).forEach((e) => e.remove());
          }),
            o();
        }
      }),
      a("virtualUpdate", () => {
        s.params.effect === t &&
          (s.slides.length || (c = !0),
            requestAnimationFrame(() => {
              c && s.slides && s.slides.length && (i(), (c = !1));
            }));
      });
  }
  function le(e, t) {
    const s = m(t);
    return (
      s !== t &&
      ((s.style.backfaceVisibility = "hidden"),
        (s.style["-webkit-backface-visibility"] = "hidden")),
      s
    );
  }
  function oe(e) {
    let { swiper: t, duration: s, transformElements: a, allSlides: i } = e;
    const { activeIndex: r } = t;
    if (t.params.virtualTranslate && 0 !== s) {
      let e,
        s = !1;
      (e = i
        ? a
        : a.filter((e) => {
          const s = e.classList.contains("swiper-slide-transform")
            ? ((e) => {
              if (!e.parentElement)
                return t.slides.filter(
                  (t) => t.shadowRoot && t.shadowRoot === e.parentNode
                )[0];
              return e.parentElement;
            })(e)
            : e;
          return t.getSlideIndex(s) === r;
        })),
        e.forEach((e) => {
          y(e, () => {
            if (s) return;
            if (!t || t.destroyed) return;
            (s = !0), (t.animating = !1);
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            t.wrapperEl.dispatchEvent(e);
          });
        });
    }
  }
  function de(e, t, s) {
    const a = `swiper-slide-shadow${s ? `-${s}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""
      }`,
      i = m(t);
    let r = i.querySelector(`.${a.split(" ").join(".")}`);
    return r || ((r = f("div", a.split(" "))), i.append(r)), r;
  }
  Object.keys(K).forEach((e) => {
    Object.keys(K[e]).forEach((t) => {
      Q.prototype[t] = K[e][t];
    });
  }),
    Q.use([
      function (e) {
        let { swiper: t, on: s, emit: a } = e;
        const i = r();
        let n = null,
          l = null;
        const o = () => {
          t &&
            !t.destroyed &&
            t.initialized &&
            (a("beforeResize"), a("resize"));
        },
          d = () => {
            t && !t.destroyed && t.initialized && a("orientationchange");
          };
        s("init", () => {
          t.params.resizeObserver && void 0 !== i.ResizeObserver
            ? t &&
            !t.destroyed &&
            t.initialized &&
            ((n = new ResizeObserver((e) => {
              l = i.requestAnimationFrame(() => {
                const { width: s, height: a } = t;
                let i = s,
                  r = a;
                e.forEach((e) => {
                  let { contentBoxSize: s, contentRect: a, target: n } = e;
                  (n && n !== t.el) ||
                    ((i = a ? a.width : (s[0] || s).inlineSize),
                      (r = a ? a.height : (s[0] || s).blockSize));
                }),
                  (i === s && r === a) || o();
              });
            })),
              n.observe(t.el))
            : (i.addEventListener("resize", o),
              i.addEventListener("orientationchange", d));
        }),
          s("destroy", () => {
            l && i.cancelAnimationFrame(l),
              n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
              i.removeEventListener("resize", o),
              i.removeEventListener("orientationchange", d);
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a, emit: i } = e;
        const n = [],
          l = r(),
          o = function (e, s) {
            void 0 === s && (s = {});
            const a = new (l.MutationObserver || l.WebkitMutationObserver)(
              (e) => {
                if (t.__preventObserver__) return;
                if (1 === e.length) return void i("observerUpdate", e[0]);
                const s = function () {
                  i("observerUpdate", e[0]);
                };
                l.requestAnimationFrame
                  ? l.requestAnimationFrame(s)
                  : l.setTimeout(s, 0);
              }
            );
            a.observe(e, {
              attributes: void 0 === s.attributes || s.attributes,
              childList: void 0 === s.childList || s.childList,
              characterData: void 0 === s.characterData || s.characterData,
            }),
              n.push(a);
          };
        s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          a("init", () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = b(t.hostEl);
                for (let t = 0; t < e.length; t += 1) o(e[t]);
              }
              o(t.hostEl, { childList: t.params.observeSlideChildren }),
                o(t.wrapperEl, { attributes: !1 });
            }
          }),
          a("destroy", () => {
            n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length);
          });
      },
    ]);
  const ce = [
    function (e) {
      let t,
        { swiper: s, extendParams: i, on: r, emit: n } = e;
      i({
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      });
      const l = a();
      s.virtual = {
        cache: {},
        from: void 0,
        to: void 0,
        slides: [],
        offset: 0,
        slidesGrid: [],
      };
      const o = l.createElement("div");
      function d(e, t) {
        const a = s.params.virtual;
        if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
        let i;
        return (
          a.renderSlide
            ? ((i = a.renderSlide.call(s, e, t)),
              "string" == typeof i && ((o.innerHTML = i), (i = o.children[0])))
            : (i = s.isElement
              ? f("swiper-slide")
              : f("div", s.params.slideClass)),
          i.setAttribute("data-swiper-slide-index", t),
          a.renderSlide || (i.innerHTML = e),
          a.cache && (s.virtual.cache[t] = i),
          i
        );
      }
      function c(e) {
        const {
          slidesPerView: t,
          slidesPerGroup: a,
          centeredSlides: i,
          loop: r,
        } = s.params,
          { addSlidesBefore: l, addSlidesAfter: o } = s.params.virtual,
          { from: c, to: p, slides: u, slidesGrid: m, offset: f } = s.virtual;
        s.params.cssMode || s.updateActiveIndex();
        const g = s.activeIndex || 0;
        let v, w, b;
        (v = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top"),
          i
            ? ((w = Math.floor(t / 2) + a + o), (b = Math.floor(t / 2) + a + l))
            : ((w = t + (a - 1) + o), (b = (r ? t : a) + l));
        let y = g - b,
          E = g + w;
        r || ((y = Math.max(y, 0)), (E = Math.min(E, u.length - 1)));
        let x = (s.slidesGrid[y] || 0) - (s.slidesGrid[0] || 0);
        function S() {
          s.updateSlides(),
            s.updateProgress(),
            s.updateSlidesClasses(),
            n("virtualUpdate");
        }
        if (
          (r && g >= b
            ? ((y -= b), i || (x += s.slidesGrid[0]))
            : r && g < b && ((y = -b), i && (x += s.slidesGrid[0])),
            Object.assign(s.virtual, {
              from: y,
              to: E,
              offset: x,
              slidesGrid: s.slidesGrid,
              slidesBefore: b,
              slidesAfter: w,
            }),
            c === y && p === E && !e)
        )
          return (
            s.slidesGrid !== m &&
            x !== f &&
            s.slides.forEach((e) => {
              e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px";
            }),
            s.updateProgress(),
            void n("virtualUpdate")
          );
        if (s.params.virtual.renderExternal)
          return (
            s.params.virtual.renderExternal.call(s, {
              offset: x,
              from: y,
              to: E,
              slides: (function () {
                const e = [];
                for (let t = y; t <= E; t += 1) e.push(u[t]);
                return e;
              })(),
            }),
            void (s.params.virtual.renderExternalUpdate
              ? S()
              : n("virtualUpdate"))
          );
        const T = [],
          M = [],
          C = (e) => {
            let t = e;
            return (
              e < 0 ? (t = u.length + e) : t >= u.length && (t -= u.length), t
            );
          };
        if (e)
          s.slidesEl
            .querySelectorAll(`.${s.params.slideClass}, swiper-slide`)
            .forEach((e) => {
              e.remove();
            });
        else
          for (let e = c; e <= p; e += 1)
            if (e < y || e > E) {
              const t = C(e);
              s.slidesEl
                .querySelectorAll(
                  `.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`
                )
                .forEach((e) => {
                  e.remove();
                });
            }
        const P = r ? -u.length : 0,
          L = r ? 2 * u.length : u.length;
        for (let t = P; t < L; t += 1)
          if (t >= y && t <= E) {
            const s = C(t);
            void 0 === p || e
              ? M.push(s)
              : (t > p && M.push(s), t < c && T.push(s));
          }
        if (
          (M.forEach((e) => {
            s.slidesEl.append(d(u[e], e));
          }),
            r)
        )
          for (let e = T.length - 1; e >= 0; e -= 1) {
            const t = T[e];
            s.slidesEl.prepend(d(u[t], t));
          }
        else
          T.sort((e, t) => t - e),
            T.forEach((e) => {
              s.slidesEl.prepend(d(u[e], e));
            });
        h(s.slidesEl, ".swiper-slide, swiper-slide").forEach((e) => {
          e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px";
        }),
          S();
      }
      r("beforeInit", () => {
        if (!s.params.virtual.enabled) return;
        let e;
        if (void 0 === s.passedParams.virtual.slides) {
          const t = [...s.slidesEl.children].filter((e) =>
            e.matches(`.${s.params.slideClass}, swiper-slide`)
          );
          t &&
            t.length &&
            ((s.virtual.slides = [...t]),
              (e = !0),
              t.forEach((e, t) => {
                e.setAttribute("data-swiper-slide-index", t),
                  (s.virtual.cache[t] = e),
                  e.remove();
              }));
        }
        e || (s.virtual.slides = s.params.virtual.slides),
          s.classNames.push(`${s.params.containerModifierClass}virtual`),
          (s.params.watchSlidesProgress = !0),
          (s.originalParams.watchSlidesProgress = !0),
          s.params.initialSlide || c();
      }),
        r("setTranslate", () => {
          s.params.virtual.enabled &&
            (s.params.cssMode && !s._immediateVirtual
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  c();
                }, 100)))
              : c());
        }),
        r("init update resize", () => {
          s.params.virtual.enabled &&
            s.params.cssMode &&
            p(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`);
        }),
        Object.assign(s.virtual, {
          appendSlide: function (e) {
            if ("object" == typeof e && "length" in e)
              for (let t = 0; t < e.length; t += 1)
                e[t] && s.virtual.slides.push(e[t]);
            else s.virtual.slides.push(e);
            c(!0);
          },
          prependSlide: function (e) {
            const t = s.activeIndex;
            let a = t + 1,
              i = 1;
            if (Array.isArray(e)) {
              for (let t = 0; t < e.length; t += 1)
                e[t] && s.virtual.slides.unshift(e[t]);
              (a = t + e.length), (i = e.length);
            } else s.virtual.slides.unshift(e);
            if (s.params.virtual.cache) {
              const e = s.virtual.cache,
                t = {};
              Object.keys(e).forEach((s) => {
                const a = e[s],
                  r = a.getAttribute("data-swiper-slide-index");
                r &&
                  a.setAttribute(
                    "data-swiper-slide-index",
                    parseInt(r, 10) + i
                  ),
                  (t[parseInt(s, 10) + i] = a);
              }),
                (s.virtual.cache = t);
            }
            c(!0), s.slideTo(a, 0);
          },
          removeSlide: function (e) {
            if (null == e) return;
            let t = s.activeIndex;
            if (Array.isArray(e))
              for (let a = e.length - 1; a >= 0; a -= 1)
                s.virtual.slides.splice(e[a], 1),
                  s.params.virtual.cache && delete s.virtual.cache[e[a]],
                  e[a] < t && (t -= 1),
                  (t = Math.max(t, 0));
            else
              s.virtual.slides.splice(e, 1),
                s.params.virtual.cache && delete s.virtual.cache[e],
                e < t && (t -= 1),
                (t = Math.max(t, 0));
            c(!0), s.slideTo(t, 0);
          },
          removeAllSlides: function () {
            (s.virtual.slides = []),
              s.params.virtual.cache && (s.virtual.cache = {}),
              c(!0),
              s.slideTo(0, 0);
          },
          update: c,
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: n } = e;
      const l = a(),
        o = r();
      function d(e) {
        if (!t.enabled) return;
        const { rtlTranslate: s } = t;
        let a = e;
        a.originalEvent && (a = a.originalEvent);
        const i = a.keyCode || a.charCode,
          r = t.params.keyboard.pageUpDown,
          d = r && 33 === i,
          c = r && 34 === i,
          p = 37 === i,
          u = 39 === i,
          m = 38 === i,
          h = 40 === i;
        if (
          !t.allowSlideNext &&
          ((t.isHorizontal() && u) || (t.isVertical() && h) || c)
        )
          return !1;
        if (
          !t.allowSlidePrev &&
          ((t.isHorizontal() && p) || (t.isVertical() && m) || d)
        )
          return !1;
        if (
          !(
            a.shiftKey ||
            a.altKey ||
            a.ctrlKey ||
            a.metaKey ||
            (l.activeElement &&
              l.activeElement.nodeName &&
              ("input" === l.activeElement.nodeName.toLowerCase() ||
                "textarea" === l.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            t.params.keyboard.onlyInViewport &&
            (d || c || p || u || m || h)
          ) {
            let e = !1;
            if (
              b(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 &&
              0 === b(t.el, `.${t.params.slideActiveClass}`).length
            )
              return;
            const a = t.el,
              i = a.clientWidth,
              r = a.clientHeight,
              n = o.innerWidth,
              l = o.innerHeight,
              d = g(a);
            s && (d.left -= a.scrollLeft);
            const c = [
              [d.left, d.top],
              [d.left + i, d.top],
              [d.left, d.top + r],
              [d.left + i, d.top + r],
            ];
            for (let t = 0; t < c.length; t += 1) {
              const s = c[t];
              if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                if (0 === s[0] && 0 === s[1]) continue;
                e = !0;
              }
            }
            if (!e) return;
          }
          t.isHorizontal()
            ? ((d || c || p || u) &&
              (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (((c || u) && !s) || ((d || p) && s)) && t.slideNext(),
              (((d || p) && !s) || ((c || u) && s)) && t.slidePrev())
            : ((d || c || m || h) &&
              (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (c || h) && t.slideNext(),
              (d || m) && t.slidePrev()),
            n("keyPress", i);
        }
      }
      function c() {
        t.keyboard.enabled ||
          (l.addEventListener("keydown", d), (t.keyboard.enabled = !0));
      }
      function p() {
        t.keyboard.enabled &&
          (l.removeEventListener("keydown", d), (t.keyboard.enabled = !1));
      }
      (t.keyboard = { enabled: !1 }),
        s({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
        i("init", () => {
          t.params.keyboard.enabled && c();
        }),
        i("destroy", () => {
          t.keyboard.enabled && p();
        }),
        Object.assign(t.keyboard, { enable: c, disable: p });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const o = r();
      let d;
      s({
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null,
          noMousewheelClass: "swiper-no-mousewheel",
        },
      }),
        (t.mousewheel = { enabled: !1 });
      let c,
        p = l();
      const u = [];
      function m() {
        t.enabled && (t.mouseEntered = !0);
      }
      function h() {
        t.enabled && (t.mouseEntered = !1);
      }
      function f(e) {
        return (
          !(
            t.params.mousewheel.thresholdDelta &&
            e.delta < t.params.mousewheel.thresholdDelta
          ) &&
          !(
            t.params.mousewheel.thresholdTime &&
            l() - p < t.params.mousewheel.thresholdTime
          ) &&
          ((e.delta >= 6 && l() - p < 60) ||
            (e.direction < 0
              ? (t.isEnd && !t.params.loop) ||
              t.animating ||
              (t.slideNext(), i("scroll", e.raw))
              : (t.isBeginning && !t.params.loop) ||
              t.animating ||
              (t.slidePrev(), i("scroll", e.raw)),
              (p = new o.Date().getTime()),
              !1))
        );
      }
      function g(e) {
        let s = e,
          a = !0;
        if (!t.enabled) return;
        if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))
          return;
        const r = t.params.mousewheel;
        t.params.cssMode && s.preventDefault();
        let o = t.el;
        "container" !== t.params.mousewheel.eventsTarget &&
          (o = document.querySelector(t.params.mousewheel.eventsTarget));
        const p = o && o.contains(s.target);
        if (!t.mouseEntered && !p && !r.releaseOnEdges) return !0;
        s.originalEvent && (s = s.originalEvent);
        let m = 0;
        const h = t.rtlTranslate ? -1 : 1,
          g = (function (e) {
            let t = 0,
              s = 0,
              a = 0,
              i = 0;
            return (
              "detail" in e && (s = e.detail),
              "wheelDelta" in e && (s = -e.wheelDelta / 120),
              "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
              "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
              "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
              (a = 10 * t),
              (i = 10 * s),
              "deltaY" in e && (i = e.deltaY),
              "deltaX" in e && (a = e.deltaX),
              e.shiftKey && !a && ((a = i), (i = 0)),
              (a || i) &&
              e.deltaMode &&
              (1 === e.deltaMode
                ? ((a *= 40), (i *= 40))
                : ((a *= 800), (i *= 800))),
              a && !t && (t = a < 1 ? -1 : 1),
              i && !s && (s = i < 1 ? -1 : 1),
              { spinX: t, spinY: s, pixelX: a, pixelY: i }
            );
          })(s);
        if (r.forceToAxis)
          if (t.isHorizontal()) {
            if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
            m = -g.pixelX * h;
          } else {
            if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
            m = -g.pixelY;
          }
        else
          m =
            Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * h : -g.pixelY;
        if (0 === m) return !0;
        r.invert && (m = -m);
        let v = t.getTranslate() + m * r.sensitivity;
        if (
          (v >= t.minTranslate() && (v = t.minTranslate()),
            v <= t.maxTranslate() && (v = t.maxTranslate()),
            (a =
              !!t.params.loop ||
              !(v === t.minTranslate() || v === t.maxTranslate())),
            a && t.params.nested && s.stopPropagation(),
            t.params.freeMode && t.params.freeMode.enabled)
        ) {
          const e = { time: l(), delta: Math.abs(m), direction: Math.sign(m) },
            a =
              c &&
              e.time < c.time + 500 &&
              e.delta <= c.delta &&
              e.direction === c.direction;
          if (!a) {
            c = void 0;
            let l = t.getTranslate() + m * r.sensitivity;
            const o = t.isBeginning,
              p = t.isEnd;
            if (
              (l >= t.minTranslate() && (l = t.minTranslate()),
                l <= t.maxTranslate() && (l = t.maxTranslate()),
                t.setTransition(0),
                t.setTranslate(l),
                t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses(),
                ((!o && t.isBeginning) || (!p && t.isEnd)) &&
                t.updateSlidesClasses(),
                t.params.loop &&
                t.loopFix({
                  direction: e.direction < 0 ? "next" : "prev",
                  byMousewheel: !0,
                }),
                t.params.freeMode.sticky)
            ) {
              clearTimeout(d), (d = void 0), u.length >= 15 && u.shift();
              const s = u.length ? u[u.length - 1] : void 0,
                a = u[0];
              if (
                (u.push(e),
                  s && (e.delta > s.delta || e.direction !== s.direction))
              )
                u.splice(0);
              else if (
                u.length >= 15 &&
                e.time - a.time < 500 &&
                a.delta - e.delta >= 1 &&
                e.delta <= 6
              ) {
                const s = m > 0 ? 0.8 : 0.2;
                (c = e),
                  u.splice(0),
                  (d = n(() => {
                    t.slideToClosest(t.params.speed, !0, void 0, s);
                  }, 0));
              }
              d ||
                (d = n(() => {
                  (c = e),
                    u.splice(0),
                    t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (a || i("scroll", s),
                t.params.autoplay &&
                t.params.autoplayDisableOnInteraction &&
                t.autoplay.stop(),
                r.releaseOnEdges &&
                (l === t.minTranslate() || l === t.maxTranslate()))
            )
              return !0;
          }
        } else {
          const s = {
            time: l(),
            delta: Math.abs(m),
            direction: Math.sign(m),
            raw: e,
          };
          u.length >= 2 && u.shift();
          const a = u.length ? u[u.length - 1] : void 0;
          if (
            (u.push(s),
              a
                ? (s.direction !== a.direction ||
                  s.delta > a.delta ||
                  s.time > a.time + 150) &&
                f(s)
                : f(s),
              (function (e) {
                const s = t.params.mousewheel;
                if (e.direction < 0) {
                  if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
                } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges)
                  return !0;
                return !1;
              })(s))
          )
            return !0;
        }
        return s.preventDefault ? s.preventDefault() : (s.returnValue = !1), !1;
      }
      function v(e) {
        let s = t.el;
        "container" !== t.params.mousewheel.eventsTarget &&
          (s = document.querySelector(t.params.mousewheel.eventsTarget)),
          s[e]("mouseenter", m),
          s[e]("mouseleave", h),
          s[e]("wheel", g);
      }
      function w() {
        return t.params.cssMode
          ? (t.wrapperEl.removeEventListener("wheel", g), !0)
          : !t.mousewheel.enabled &&
          (v("addEventListener"), (t.mousewheel.enabled = !0), !0);
      }
      function b() {
        return t.params.cssMode
          ? (t.wrapperEl.addEventListener(event, g), !0)
          : !!t.mousewheel.enabled &&
          (v("removeEventListener"), (t.mousewheel.enabled = !1), !0);
      }
      a("init", () => {
        !t.params.mousewheel.enabled && t.params.cssMode && b(),
          t.params.mousewheel.enabled && w();
      }),
        a("destroy", () => {
          t.params.cssMode && w(), t.mousewheel.enabled && b();
        }),
        Object.assign(t.mousewheel, { enable: w, disable: b });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (t.navigation = { nextEl: null, prevEl: null });
      const r = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function n(e) {
        let s;
        return e &&
          "string" == typeof e &&
          t.isElement &&
          ((s = t.el.querySelector(e)), s)
          ? s
          : (e &&
            ("string" == typeof e && (s = [...document.querySelectorAll(e)]),
              t.params.uniqueNavElements &&
              "string" == typeof e &&
              s.length > 1 &&
              1 === t.el.querySelectorAll(e).length &&
              (s = t.el.querySelector(e))),
            e && !s ? e : s);
      }
      function l(e, s) {
        const a = t.params.navigation;
        (e = r(e)).forEach((e) => {
          e &&
            (e.classList[s ? "add" : "remove"](...a.disabledClass.split(" ")),
              "BUTTON" === e.tagName && (e.disabled = s),
              t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](a.lockClass));
        });
      }
      function o() {
        const { nextEl: e, prevEl: s } = t.navigation;
        if (t.params.loop) return l(s, !1), void l(e, !1);
        l(s, t.isBeginning && !t.params.rewind),
          l(e, t.isEnd && !t.params.rewind);
      }
      function d(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) &&
          (t.slidePrev(), i("navigationPrev"));
      }
      function c(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) &&
          (t.slideNext(), i("navigationNext"));
      }
      function p() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = J(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
            !e.nextEl && !e.prevEl)
        )
          return;
        let s = n(e.nextEl),
          a = n(e.prevEl);
        Object.assign(t.navigation, { nextEl: s, prevEl: a }),
          (s = r(s)),
          (a = r(a));
        const i = (s, a) => {
          s && s.addEventListener("click", "next" === a ? c : d),
            !t.enabled && s && s.classList.add(...e.lockClass.split(" "));
        };
        s.forEach((e) => i(e, "next")), a.forEach((e) => i(e, "prev"));
      }
      function u() {
        let { nextEl: e, prevEl: s } = t.navigation;
        (e = r(e)), (s = r(s));
        const a = (e, s) => {
          e.removeEventListener("click", "next" === s ? c : d),
            e.classList.remove(...t.params.navigation.disabledClass.split(" "));
        };
        e.forEach((e) => a(e, "next")), s.forEach((e) => a(e, "prev"));
      }
      a("init", () => {
        !1 === t.params.navigation.enabled ? m() : (p(), o());
      }),
        a("toEdge fromEdge lock unlock", () => {
          o();
        }),
        a("destroy", () => {
          u();
        }),
        a("enable disable", () => {
          let { nextEl: e, prevEl: s } = t.navigation;
          (e = r(e)),
            (s = r(s)),
            [...e, ...s]
              .filter((e) => !!e)
              .forEach((e) =>
                e.classList[t.enabled ? "remove" : "add"](
                  t.params.navigation.lockClass
                )
              );
        }),
        a("click", (e, s) => {
          let { nextEl: a, prevEl: n } = t.navigation;
          (a = r(a)), (n = r(n));
          const l = s.target;
          if (
            t.params.navigation.hideOnClick &&
            !n.includes(l) &&
            !a.includes(l)
          ) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === l || t.pagination.el.contains(l))
            )
              return;
            let e;
            a.length
              ? (e = a[0].classList.contains(t.params.navigation.hiddenClass))
              : n.length &&
              (e = n[0].classList.contains(t.params.navigation.hiddenClass)),
              i(!0 === e ? "navigationShow" : "navigationHide"),
              [...a, ...n]
                .filter((e) => !!e)
                .forEach((e) =>
                  e.classList.toggle(t.params.navigation.hiddenClass)
                );
          }
        });
      const m = () => {
        t.el.classList.add(
          ...t.params.navigation.navigationDisabledClass.split(" ")
        ),
          u();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.el.classList.remove(
            ...t.params.navigation.navigationDisabledClass.split(" ")
          ),
            p(),
            o();
        },
        disable: m,
        update: o,
        init: p,
        destroy: u,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const r = "swiper-pagination";
      let n;
      s({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
          paginationDisabledClass: `${r}-disabled`,
        },
      }),
        (t.pagination = { el: null, bullets: [] });
      let l = 0;
      const o = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function d() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
        );
      }
      function c(e, s) {
        const { bulletActiveClass: a } = t.params.pagination;
        e &&
          (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          (e.classList.add(`${a}-${s}`),
            (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
            e.classList.add(`${a}-${s}-${s}`));
      }
      function p(e) {
        const s = e.target.closest(ee(t.params.pagination.bulletClass));
        if (!s) return;
        e.preventDefault();
        const a = w(s) * t.params.slidesPerGroup;
        if (t.params.loop) {
          if (t.realIndex === a) return;
          const e = t.getSlideIndexByData(a),
            s = t.getSlideIndexByData(t.realIndex);
          e > t.slides.length - t.loopedSlides &&
            t.loopFix({
              direction: e > s ? "next" : "prev",
              activeSlideIndex: e,
              slideTo: !1,
            }),
            t.slideToLoop(a);
        } else t.slideTo(a);
      }
      function u() {
        const e = t.rtl,
          s = t.params.pagination;
        if (d()) return;
        let a,
          r,
          p = t.pagination.el;
        p = o(p);
        const u =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length,
          m = t.params.loop
            ? Math.ceil(u / t.params.slidesPerGroup)
            : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((r = t.previousRealIndex || 0),
              (a =
                t.params.slidesPerGroup > 1
                  ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                  : t.realIndex))
            : void 0 !== t.snapIndex
              ? ((a = t.snapIndex), (r = t.previousSnapIndex))
              : ((r = t.previousIndex || 0), (a = t.activeIndex || 0)),
            "bullets" === s.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const i = t.pagination.bullets;
          let o, d, u;
          if (
            (s.dynamicBullets &&
              ((n = E(i[0], t.isHorizontal() ? "width" : "height", !0)),
                p.forEach((e) => {
                  e.style[t.isHorizontal() ? "width" : "height"] =
                    n * (s.dynamicMainBullets + 4) + "px";
                }),
                s.dynamicMainBullets > 1 &&
                void 0 !== r &&
                ((l += a - (r || 0)),
                  l > s.dynamicMainBullets - 1
                    ? (l = s.dynamicMainBullets - 1)
                    : l < 0 && (l = 0)),
                (o = Math.max(a - l, 0)),
                (d = o + (Math.min(i.length, s.dynamicMainBullets) - 1)),
                (u = (d + o) / 2)),
              i.forEach((e) => {
                const t = [
                  ...[
                    "",
                    "-next",
                    "-next-next",
                    "-prev",
                    "-prev-prev",
                    "-main",
                  ].map((e) => `${s.bulletActiveClass}${e}`),
                ]
                  .map((e) =>
                    "string" == typeof e && e.includes(" ") ? e.split(" ") : e
                  )
                  .flat();
                e.classList.remove(...t);
              }),
              p.length > 1)
          )
            i.forEach((e) => {
              const i = w(e);
              i === a
                ? e.classList.add(...s.bulletActiveClass.split(" "))
                : t.isElement && e.setAttribute("part", "bullet"),
                s.dynamicBullets &&
                (i >= o &&
                  i <= d &&
                  e.classList.add(
                    ...`${s.bulletActiveClass}-main`.split(" ")
                  ),
                  i === o && c(e, "prev"),
                  i === d && c(e, "next"));
            });
          else {
            const e = i[a];
            if (
              (e && e.classList.add(...s.bulletActiveClass.split(" ")),
                t.isElement &&
                i.forEach((e, t) => {
                  e.setAttribute("part", t === a ? "bullet-active" : "bullet");
                }),
                s.dynamicBullets)
            ) {
              const e = i[o],
                t = i[d];
              for (let e = o; e <= d; e += 1)
                i[e] &&
                  i[e].classList.add(
                    ...`${s.bulletActiveClass}-main`.split(" ")
                  );
              c(e, "prev"), c(t, "next");
            }
          }
          if (s.dynamicBullets) {
            const a = Math.min(i.length, s.dynamicMainBullets + 4),
              r = (n * a - n) / 2 - u * n,
              l = e ? "right" : "left";
            i.forEach((e) => {
              e.style[t.isHorizontal() ? l : "top"] = `${r}px`;
            });
          }
        }
        p.forEach((e, r) => {
          if (
            ("fraction" === s.type &&
              (e.querySelectorAll(ee(s.currentClass)).forEach((e) => {
                e.textContent = s.formatFractionCurrent(a + 1);
              }),
                e.querySelectorAll(ee(s.totalClass)).forEach((e) => {
                  e.textContent = s.formatFractionTotal(m);
                })),
              "progressbar" === s.type)
          ) {
            let i;
            i = s.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
                ? "horizontal"
                : "vertical";
            const r = (a + 1) / m;
            let n = 1,
              l = 1;
            "horizontal" === i ? (n = r) : (l = r),
              e.querySelectorAll(ee(s.progressbarFillClass)).forEach((e) => {
                (e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`),
                  (e.style.transitionDuration = `${t.params.speed}ms`);
              });
          }
          "custom" === s.type && s.renderCustom
            ? ((e.innerHTML = s.renderCustom(t, a + 1, m)),
              0 === r && i("paginationRender", e))
            : (0 === r && i("paginationRender", e), i("paginationUpdate", e)),
            t.params.watchOverflow &&
            t.enabled &&
            e.classList[t.isLocked ? "add" : "remove"](s.lockClass);
        });
      }
      function m() {
        const e = t.params.pagination;
        if (d()) return;
        const s =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length;
        let a = t.pagination.el;
        a = o(a);
        let r = "";
        if ("bullets" === e.type) {
          let a = t.params.loop
            ? Math.ceil(s / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode && t.params.freeMode.enabled && a > s && (a = s);
          for (let s = 0; s < a; s += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, s, e.bulletClass))
              : (r += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""
                } class="${e.bulletClass}"></${e.bulletElement}>`);
        }
        "fraction" === e.type &&
          (r = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          "progressbar" === e.type &&
          (r = e.renderProgressbar
            ? e.renderProgressbar.call(t, e.progressbarFillClass)
            : `<span class="${e.progressbarFillClass}"></span>`),
          (t.pagination.bullets = []),
          a.forEach((s) => {
            "custom" !== e.type && (s.innerHTML = r || ""),
              "bullets" === e.type &&
              t.pagination.bullets.push(
                ...s.querySelectorAll(ee(e.bulletClass))
              );
          }),
          "custom" !== e.type && i("paginationRender", a[0]);
      }
      function h() {
        t.params.pagination = J(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" }
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let s;
        "string" == typeof e.el &&
          t.isElement &&
          (s = t.el.querySelector(e.el)),
          s ||
          "string" != typeof e.el ||
          (s = [...document.querySelectorAll(e.el)]),
          s || (s = e.el),
          s &&
          0 !== s.length &&
          (t.params.uniqueNavElements &&
            "string" == typeof e.el &&
            Array.isArray(s) &&
            s.length > 1 &&
            ((s = [...t.el.querySelectorAll(e.el)]),
              s.length > 1 &&
              (s = s.filter((e) => b(e, ".swiper")[0] === t.el)[0])),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(t.pagination, { el: s }),
            (s = o(s)),
            s.forEach((s) => {
              "bullets" === e.type &&
                e.clickable &&
                s.classList.add(e.clickableClass),
                s.classList.add(e.modifierClass + e.type),
                s.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                "bullets" === e.type &&
                e.dynamicBullets &&
                (s.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                  (l = 0),
                  e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type &&
                e.progressbarOpposite &&
                s.classList.add(e.progressbarOppositeClass),
                e.clickable && s.addEventListener("click", p),
                t.enabled || s.classList.add(e.lockClass);
            }));
      }
      function f() {
        const e = t.params.pagination;
        if (d()) return;
        let s = t.pagination.el;
        s &&
          ((s = o(s)),
            s.forEach((s) => {
              s.classList.remove(e.hiddenClass),
                s.classList.remove(e.modifierClass + e.type),
                s.classList.remove(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                e.clickable && s.removeEventListener("click", p);
            })),
          t.pagination.bullets &&
          t.pagination.bullets.forEach((t) =>
            t.classList.remove(...e.bulletActiveClass.split(" "))
          );
      }
      a("changeDirection", () => {
        if (!t.pagination || !t.pagination.el) return;
        const e = t.params.pagination;
        let { el: s } = t.pagination;
        (s = o(s)),
          s.forEach((s) => {
            s.classList.remove(e.horizontalClass, e.verticalClass),
              s.classList.add(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass
              );
          });
      }),
        a("init", () => {
          !1 === t.params.pagination.enabled ? g() : (h(), m(), u());
        }),
        a("activeIndexChange", () => {
          void 0 === t.snapIndex && u();
        }),
        a("snapIndexChange", () => {
          u();
        }),
        a("snapGridLengthChange", () => {
          m(), u();
        }),
        a("destroy", () => {
          f();
        }),
        a("enable disable", () => {
          let { el: e } = t.pagination;
          e &&
            ((e = o(e)),
              e.forEach((e) =>
                e.classList[t.enabled ? "remove" : "add"](
                  t.params.pagination.lockClass
                )
              ));
        }),
        a("lock unlock", () => {
          u();
        }),
        a("click", (e, s) => {
          const a = s.target,
            r = o(t.pagination.el);
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            r &&
            r.length > 0 &&
            !a.classList.contains(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && a === t.navigation.nextEl) ||
                (t.navigation.prevEl && a === t.navigation.prevEl))
            )
              return;
            const e = r[0].classList.contains(t.params.pagination.hiddenClass);
            i(!0 === e ? "paginationShow" : "paginationHide"),
              r.forEach((e) =>
                e.classList.toggle(t.params.pagination.hiddenClass)
              );
          }
        });
      const g = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let { el: e } = t.pagination;
        e &&
          ((e = o(e)),
            e.forEach((e) =>
              e.classList.add(t.params.pagination.paginationDisabledClass)
            )),
          f();
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.el.classList.remove(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e &&
            ((e = o(e)),
              e.forEach((e) =>
                e.classList.remove(t.params.pagination.paginationDisabledClass)
              )),
            h(),
            m(),
            u();
        },
        disable: g,
        render: m,
        update: u,
        init: h,
        destroy: f,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: r } = e;
      const l = a();
      let o,
        d,
        c,
        p,
        u = !1,
        m = null,
        h = null;
      function v() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e, rtlTranslate: s } = t,
          { dragEl: a, el: i } = e,
          r = t.params.scrollbar,
          n = t.params.loop ? t.progressLoop : t.progress;
        let l = d,
          o = (c - d) * n;
        s
          ? ((o = -o),
            o > 0 ? ((l = d - o), (o = 0)) : -o + d > c && (l = c + o))
          : o < 0
            ? ((l = d + o), (o = 0))
            : o + d > c && (l = c - o),
          t.isHorizontal()
            ? ((a.style.transform = `translate3d(${o}px, 0, 0)`),
              (a.style.width = `${l}px`))
            : ((a.style.transform = `translate3d(0px, ${o}px, 0)`),
              (a.style.height = `${l}px`)),
          r.hide &&
          (clearTimeout(m),
            (i.style.opacity = 1),
            (m = setTimeout(() => {
              (i.style.opacity = 0), (i.style.transitionDuration = "400ms");
            }, 1e3)));
      }
      function w() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e } = t,
          { dragEl: s, el: a } = e;
        (s.style.width = ""),
          (s.style.height = ""),
          (c = t.isHorizontal() ? a.offsetWidth : a.offsetHeight),
          (p =
            t.size /
            (t.virtualSize +
              t.params.slidesOffsetBefore -
              (t.params.centeredSlides ? t.snapGrid[0] : 0))),
          (d =
            "auto" === t.params.scrollbar.dragSize
              ? c * p
              : parseInt(t.params.scrollbar.dragSize, 10)),
          t.isHorizontal()
            ? (s.style.width = `${d}px`)
            : (s.style.height = `${d}px`),
          (a.style.display = p >= 1 ? "none" : ""),
          t.params.scrollbar.hide && (a.style.opacity = 0),
          t.params.watchOverflow &&
          t.enabled &&
          e.el.classList[t.isLocked ? "add" : "remove"](
            t.params.scrollbar.lockClass
          );
      }
      function b(e) {
        return t.isHorizontal() ? e.clientX : e.clientY;
      }
      function y(e) {
        const { scrollbar: s, rtlTranslate: a } = t,
          { el: i } = s;
        let r;
        (r =
          (b(e) -
            g(i)[t.isHorizontal() ? "left" : "top"] -
            (null !== o ? o : d / 2)) /
          (c - d)),
          (r = Math.max(Math.min(r, 1), 0)),
          a && (r = 1 - r);
        const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
        t.updateProgress(n),
          t.setTranslate(n),
          t.updateActiveIndex(),
          t.updateSlidesClasses();
      }
      function E(e) {
        const s = t.params.scrollbar,
          { scrollbar: a, wrapperEl: i } = t,
          { el: n, dragEl: l } = a;
        (u = !0),
          (o =
            e.target === l
              ? b(e) -
              e.target.getBoundingClientRect()[
              t.isHorizontal() ? "left" : "top"
              ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          (i.style.transitionDuration = "100ms"),
          (l.style.transitionDuration = "100ms"),
          y(e),
          clearTimeout(h),
          (n.style.transitionDuration = "0ms"),
          s.hide && (n.style.opacity = 1),
          t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"),
          r("scrollbarDragStart", e);
      }
      function x(e) {
        const { scrollbar: s, wrapperEl: a } = t,
          { el: i, dragEl: n } = s;
        u &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            y(e),
            (a.style.transitionDuration = "0ms"),
            (i.style.transitionDuration = "0ms"),
            (n.style.transitionDuration = "0ms"),
            r("scrollbarDragMove", e));
      }
      function S(e) {
        const s = t.params.scrollbar,
          { scrollbar: a, wrapperEl: i } = t,
          { el: l } = a;
        u &&
          ((u = !1),
            t.params.cssMode &&
            ((t.wrapperEl.style["scroll-snap-type"] = ""),
              (i.style.transitionDuration = "")),
            s.hide &&
            (clearTimeout(h),
              (h = n(() => {
                (l.style.opacity = 0), (l.style.transitionDuration = "400ms");
              }, 1e3))),
            r("scrollbarDragEnd", e),
            s.snapOnRelease && t.slideToClosest());
      }
      function T(e) {
        const { scrollbar: s, params: a } = t,
          i = s.el;
        if (!i) return;
        const r = i,
          n = !!a.passiveListeners && { passive: !1, capture: !1 },
          o = !!a.passiveListeners && { passive: !0, capture: !1 };
        if (!r) return;
        const d = "on" === e ? "addEventListener" : "removeEventListener";
        r[d]("pointerdown", E, n),
          l[d]("pointermove", x, n),
          l[d]("pointerup", S, o);
      }
      function M() {
        const { scrollbar: e, el: s } = t;
        t.params.scrollbar = J(
          t,
          t.originalParams.scrollbar,
          t.params.scrollbar,
          { el: "swiper-scrollbar" }
        );
        const a = t.params.scrollbar;
        if (!a.el) return;
        let i, r;
        "string" == typeof a.el &&
          t.isElement &&
          (i = t.el.querySelector(a.el)),
          i || "string" != typeof a.el
            ? i || (i = a.el)
            : (i = l.querySelectorAll(a.el)),
          t.params.uniqueNavElements &&
          "string" == typeof a.el &&
          i.length > 1 &&
          1 === s.querySelectorAll(a.el).length &&
          (i = s.querySelector(a.el)),
          i.length > 0 && (i = i[0]),
          i.classList.add(
            t.isHorizontal() ? a.horizontalClass : a.verticalClass
          ),
          i &&
          ((r = i.querySelector(`.${t.params.scrollbar.dragClass}`)),
            r || ((r = f("div", t.params.scrollbar.dragClass)), i.append(r))),
          Object.assign(e, { el: i, dragEl: r }),
          a.draggable && t.params.scrollbar.el && t.scrollbar.el && T("on"),
          i &&
          i.classList[t.enabled ? "remove" : "add"](
            t.params.scrollbar.lockClass
          );
      }
      function C() {
        const e = t.params.scrollbar,
          s = t.scrollbar.el;
        s &&
          s.classList.remove(
            t.isHorizontal() ? e.horizontalClass : e.verticalClass
          ),
          t.params.scrollbar.el && t.scrollbar.el && T("off");
      }
      s({
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag",
          scrollbarDisabledClass: "swiper-scrollbar-disabled",
          horizontalClass: "swiper-scrollbar-horizontal",
          verticalClass: "swiper-scrollbar-vertical",
        },
      }),
        (t.scrollbar = { el: null, dragEl: null }),
        i("init", () => {
          !1 === t.params.scrollbar.enabled ? P() : (M(), w(), v());
        }),
        i("update resize observerUpdate lock unlock", () => {
          w();
        }),
        i("setTranslate", () => {
          v();
        }),
        i("setTransition", (e, s) => {
          !(function (e) {
            t.params.scrollbar.el &&
              t.scrollbar.el &&
              (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`);
          })(s);
        }),
        i("enable disable", () => {
          const { el: e } = t.scrollbar;
          e &&
            e.classList[t.enabled ? "remove" : "add"](
              t.params.scrollbar.lockClass
            );
        }),
        i("destroy", () => {
          C();
        });
      const P = () => {
        t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),
          t.scrollbar.el &&
          t.scrollbar.el.classList.add(
            t.params.scrollbar.scrollbarDisabledClass
          ),
          C();
      };
      Object.assign(t.scrollbar, {
        enable: () => {
          t.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),
            t.scrollbar.el &&
            t.scrollbar.el.classList.remove(
              t.params.scrollbar.scrollbarDisabledClass
            ),
            M(),
            w(),
            v();
        },
        disable: P,
        updateSize: w,
        setTranslate: v,
        init: M,
        destroy: C,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ parallax: { enabled: !1 } });
      const i = (e, s) => {
        const { rtl: a } = t,
          i = a ? -1 : 1,
          r = e.getAttribute("data-swiper-parallax") || "0";
        let n = e.getAttribute("data-swiper-parallax-x"),
          l = e.getAttribute("data-swiper-parallax-y");
        const o = e.getAttribute("data-swiper-parallax-scale"),
          d = e.getAttribute("data-swiper-parallax-opacity"),
          c = e.getAttribute("data-swiper-parallax-rotate");
        if (
          (n || l
            ? ((n = n || "0"), (l = l || "0"))
            : t.isHorizontal()
              ? ((n = r), (l = "0"))
              : ((l = r), (n = "0")),
            (n =
              n.indexOf("%") >= 0
                ? parseInt(n, 10) * s * i + "%"
                : n * s * i + "px"),
            (l =
              l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px"),
            null != d)
        ) {
          const t = d - (d - 1) * (1 - Math.abs(s));
          e.style.opacity = t;
        }
        let p = `translate3d(${n}, ${l}, 0px)`;
        if (null != o) {
          p += ` scale(${o - (o - 1) * (1 - Math.abs(s))})`;
        }
        if (c && null != c) {
          p += ` rotate(${c * s * -1}deg)`;
        }
        e.style.transform = p;
      },
        r = () => {
          const { el: e, slides: s, progress: a, snapGrid: r } = t;
          h(
            e,
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          ).forEach((e) => {
            i(e, a);
          }),
            s.forEach((e, s) => {
              let n = e.progress;
              t.params.slidesPerGroup > 1 &&
                "auto" !== t.params.slidesPerView &&
                (n += Math.ceil(s / 2) - a * (r.length - 1)),
                (n = Math.min(Math.max(n, -1), 1)),
                e
                  .querySelectorAll(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]"
                  )
                  .forEach((e) => {
                    i(e, n);
                  });
            });
        };
      a("beforeInit", () => {
        t.params.parallax.enabled &&
          ((t.params.watchSlidesProgress = !0),
            (t.originalParams.watchSlidesProgress = !0));
      }),
        a("init", () => {
          t.params.parallax.enabled && r();
        }),
        a("setTranslate", () => {
          t.params.parallax.enabled && r();
        }),
        a("setTransition", (e, s) => {
          t.params.parallax.enabled &&
            (function (e) {
              void 0 === e && (e = t.params.speed);
              const { el: s } = t;
              s.querySelectorAll(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              ).forEach((t) => {
                let s =
                  parseInt(
                    t.getAttribute("data-swiper-parallax-duration"),
                    10
                  ) || e;
                0 === e && (s = 0), (t.style.transitionDuration = `${s}ms`);
              });
            })(s);
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const n = r();
      s({
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed",
        },
      }),
        (t.zoom = { enabled: !1 });
      let l,
        d,
        c = 1,
        p = !1;
      const u = [],
        m = {
          originX: 0,
          originY: 0,
          slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          imageEl: void 0,
          imageWrapEl: void 0,
          maxRatio: 3,
        },
        f = {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {},
        },
        v = {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0,
        };
      let w = 1;
      function y() {
        if (u.length < 2) return 1;
        const e = u[0].pageX,
          t = u[0].pageY,
          s = u[1].pageX,
          a = u[1].pageY;
        return Math.sqrt((s - e) ** 2 + (a - t) ** 2);
      }
      function E(e) {
        const s = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
        return (
          !!e.target.matches(s) ||
          t.slides.filter((t) => t.contains(e.target)).length > 0
        );
      }
      function x(e) {
        if (("mouse" === e.pointerType && u.splice(0, u.length), !E(e))) return;
        const s = t.params.zoom;
        if (((l = !1), (d = !1), u.push(e), !(u.length < 2))) {
          if (((l = !0), (m.scaleStart = y()), !m.slideEl)) {
            (m.slideEl = e.target.closest(
              `.${t.params.slideClass}, swiper-slide`
            )),
              m.slideEl || (m.slideEl = t.slides[t.activeIndex]);
            let a = m.slideEl.querySelector(`.${s.containerClass}`);
            if (
              (a &&
                (a = a.querySelectorAll(
                  "picture, img, svg, canvas, .swiper-zoom-target"
                )[0]),
                (m.imageEl = a),
                (m.imageWrapEl = a
                  ? b(m.imageEl, `.${s.containerClass}`)[0]
                  : void 0),
                !m.imageWrapEl)
            )
              return void (m.imageEl = void 0);
            m.maxRatio =
              m.imageWrapEl.getAttribute("data-swiper-zoom") || s.maxRatio;
          }
          if (m.imageEl) {
            const [e, t] = (function () {
              if (u.length < 2) return { x: null, y: null };
              const e = m.imageEl.getBoundingClientRect();
              return [
                (u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x) / c,
                (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y) / c,
              ];
            })();
            (m.originX = e),
              (m.originY = t),
              (m.imageEl.style.transitionDuration = "0ms");
          }
          p = !0;
        }
      }
      function S(e) {
        if (!E(e)) return;
        const s = t.params.zoom,
          a = t.zoom,
          i = u.findIndex((t) => t.pointerId === e.pointerId);
        i >= 0 && (u[i] = e),
          u.length < 2 ||
          ((d = !0),
            (m.scaleMove = y()),
            m.imageEl &&
            ((a.scale = (m.scaleMove / m.scaleStart) * c),
              a.scale > m.maxRatio &&
              (a.scale = m.maxRatio - 1 + (a.scale - m.maxRatio + 1) ** 0.5),
              a.scale < s.minRatio &&
              (a.scale = s.minRatio + 1 - (s.minRatio - a.scale + 1) ** 0.5),
              (m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`)));
      }
      function T(e) {
        if (!E(e)) return;
        if ("mouse" === e.pointerType && "pointerout" === e.type) return;
        const s = t.params.zoom,
          a = t.zoom,
          i = u.findIndex((t) => t.pointerId === e.pointerId);
        i >= 0 && u.splice(i, 1),
          l &&
          d &&
          ((l = !1),
            (d = !1),
            m.imageEl &&
            ((a.scale = Math.max(Math.min(a.scale, m.maxRatio), s.minRatio)),
              (m.imageEl.style.transitionDuration = `${t.params.speed}ms`),
              (m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`),
              (c = a.scale),
              (p = !1),
              a.scale > 1 && m.slideEl
                ? m.slideEl.classList.add(`${s.zoomedSlideClass}`)
                : a.scale <= 1 &&
                m.slideEl &&
                m.slideEl.classList.remove(`${s.zoomedSlideClass}`),
              1 === a.scale &&
              ((m.originX = 0), (m.originY = 0), (m.slideEl = void 0))));
      }
      function M(e) {
        if (
          !E(e) ||
          !(function (e) {
            const s = `.${t.params.zoom.containerClass}`;
            return (
              !!e.target.matches(s) ||
              [...t.hostEl.querySelectorAll(s)].filter((t) =>
                t.contains(e.target)
              ).length > 0
            );
          })(e)
        )
          return;
        const s = t.zoom;
        if (!m.imageEl) return;
        if (!f.isTouched || !m.slideEl) return;
        f.isMoved ||
          ((f.width = m.imageEl.offsetWidth),
            (f.height = m.imageEl.offsetHeight),
            (f.startX = o(m.imageWrapEl, "x") || 0),
            (f.startY = o(m.imageWrapEl, "y") || 0),
            (m.slideWidth = m.slideEl.offsetWidth),
            (m.slideHeight = m.slideEl.offsetHeight),
            (m.imageWrapEl.style.transitionDuration = "0ms"));
        const a = f.width * s.scale,
          i = f.height * s.scale;
        if (a < m.slideWidth && i < m.slideHeight) return;
        (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0)),
          (f.maxX = -f.minX),
          (f.minY = Math.min(m.slideHeight / 2 - i / 2, 0)),
          (f.maxY = -f.minY),
          (f.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX),
          (f.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY);
        if (
          (Math.max(
            Math.abs(f.touchesCurrent.x - f.touchesStart.x),
            Math.abs(f.touchesCurrent.y - f.touchesStart.y)
          ) > 5 && (t.allowClick = !1),
            !f.isMoved && !p)
        ) {
          if (
            t.isHorizontal() &&
            ((Math.floor(f.minX) === Math.floor(f.startX) &&
              f.touchesCurrent.x < f.touchesStart.x) ||
              (Math.floor(f.maxX) === Math.floor(f.startX) &&
                f.touchesCurrent.x > f.touchesStart.x))
          )
            return void (f.isTouched = !1);
          if (
            !t.isHorizontal() &&
            ((Math.floor(f.minY) === Math.floor(f.startY) &&
              f.touchesCurrent.y < f.touchesStart.y) ||
              (Math.floor(f.maxY) === Math.floor(f.startY) &&
                f.touchesCurrent.y > f.touchesStart.y))
          )
            return void (f.isTouched = !1);
        }
        e.cancelable && e.preventDefault(),
          e.stopPropagation(),
          (f.isMoved = !0);
        const r = (s.scale - c) / (m.maxRatio - t.params.zoom.minRatio),
          { originX: n, originY: l } = m;
        (f.currentX =
          f.touchesCurrent.x -
          f.touchesStart.x +
          f.startX +
          r * (f.width - 2 * n)),
          (f.currentY =
            f.touchesCurrent.y -
            f.touchesStart.y +
            f.startY +
            r * (f.height - 2 * l)),
          f.currentX < f.minX &&
          (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8),
          f.currentX > f.maxX &&
          (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8),
          f.currentY < f.minY &&
          (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8),
          f.currentY > f.maxY &&
          (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8),
          v.prevPositionX || (v.prevPositionX = f.touchesCurrent.x),
          v.prevPositionY || (v.prevPositionY = f.touchesCurrent.y),
          v.prevTime || (v.prevTime = Date.now()),
          (v.x =
            (f.touchesCurrent.x - v.prevPositionX) /
            (Date.now() - v.prevTime) /
            2),
          (v.y =
            (f.touchesCurrent.y - v.prevPositionY) /
            (Date.now() - v.prevTime) /
            2),
          Math.abs(f.touchesCurrent.x - v.prevPositionX) < 2 && (v.x = 0),
          Math.abs(f.touchesCurrent.y - v.prevPositionY) < 2 && (v.y = 0),
          (v.prevPositionX = f.touchesCurrent.x),
          (v.prevPositionY = f.touchesCurrent.y),
          (v.prevTime = Date.now()),
          (m.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`);
      }
      function C() {
        const e = t.zoom;
        m.slideEl &&
          t.activeIndex !== t.slides.indexOf(m.slideEl) &&
          (m.imageEl &&
            (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
            m.imageWrapEl &&
            (m.imageWrapEl.style.transform = "translate3d(0,0,0)"),
            m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),
            (e.scale = 1),
            (c = 1),
            (m.slideEl = void 0),
            (m.imageEl = void 0),
            (m.imageWrapEl = void 0),
            (m.originX = 0),
            (m.originY = 0));
      }
      function P(e) {
        const s = t.zoom,
          a = t.params.zoom;
        if (!m.slideEl) {
          e &&
            e.target &&
            (m.slideEl = e.target.closest(
              `.${t.params.slideClass}, swiper-slide`
            )),
            m.slideEl ||
            (t.params.virtual && t.params.virtual.enabled && t.virtual
              ? (m.slideEl = h(
                t.slidesEl,
                `.${t.params.slideActiveClass}`
              )[0])
              : (m.slideEl = t.slides[t.activeIndex]));
          let s = m.slideEl.querySelector(`.${a.containerClass}`);
          s &&
            (s = s.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target"
            )[0]),
            (m.imageEl = s),
            (m.imageWrapEl = s
              ? b(m.imageEl, `.${a.containerClass}`)[0]
              : void 0);
        }
        if (!m.imageEl || !m.imageWrapEl) return;
        let i, r, l, o, d, p, u, v, w, y, E, x, S, T, M, C, P, L;
        t.params.cssMode &&
          ((t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.touchAction = "none")),
          m.slideEl.classList.add(`${a.zoomedSlideClass}`),
          void 0 === f.touchesStart.x && e
            ? ((i = e.pageX), (r = e.pageY))
            : ((i = f.touchesStart.x), (r = f.touchesStart.y));
        const z = "number" == typeof e ? e : null;
        1 === c && z && ((i = void 0), (r = void 0)),
          (s.scale =
            z || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio),
          (c =
            z || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio),
          !e || (1 === c && z)
            ? ((u = 0), (v = 0))
            : ((P = m.slideEl.offsetWidth),
              (L = m.slideEl.offsetHeight),
              (l = g(m.slideEl).left + n.scrollX),
              (o = g(m.slideEl).top + n.scrollY),
              (d = l + P / 2 - i),
              (p = o + L / 2 - r),
              (w = m.imageEl.offsetWidth),
              (y = m.imageEl.offsetHeight),
              (E = w * s.scale),
              (x = y * s.scale),
              (S = Math.min(P / 2 - E / 2, 0)),
              (T = Math.min(L / 2 - x / 2, 0)),
              (M = -S),
              (C = -T),
              (u = d * s.scale),
              (v = p * s.scale),
              u < S && (u = S),
              u > M && (u = M),
              v < T && (v = T),
              v > C && (v = C)),
          z && 1 === s.scale && ((m.originX = 0), (m.originY = 0)),
          (m.imageWrapEl.style.transitionDuration = "300ms"),
          (m.imageWrapEl.style.transform = `translate3d(${u}px, ${v}px,0)`),
          (m.imageEl.style.transitionDuration = "300ms"),
          (m.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`);
      }
      function L() {
        const e = t.zoom,
          s = t.params.zoom;
        if (!m.slideEl) {
          t.params.virtual && t.params.virtual.enabled && t.virtual
            ? (m.slideEl = h(t.slidesEl, `.${t.params.slideActiveClass}`)[0])
            : (m.slideEl = t.slides[t.activeIndex]);
          let e = m.slideEl.querySelector(`.${s.containerClass}`);
          e &&
            (e = e.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target"
            )[0]),
            (m.imageEl = e),
            (m.imageWrapEl = e
              ? b(m.imageEl, `.${s.containerClass}`)[0]
              : void 0);
        }
        m.imageEl &&
          m.imageWrapEl &&
          (t.params.cssMode &&
            ((t.wrapperEl.style.overflow = ""),
              (t.wrapperEl.style.touchAction = "")),
            (e.scale = 1),
            (c = 1),
            (m.imageWrapEl.style.transitionDuration = "300ms"),
            (m.imageWrapEl.style.transform = "translate3d(0,0,0)"),
            (m.imageEl.style.transitionDuration = "300ms"),
            (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
            m.slideEl.classList.remove(`${s.zoomedSlideClass}`),
            (m.slideEl = void 0),
            (m.originX = 0),
            (m.originY = 0));
      }
      function z(e) {
        const s = t.zoom;
        s.scale && 1 !== s.scale ? L() : P(e);
      }
      function A() {
        return {
          passiveListener: !!t.params.passiveListeners && {
            passive: !0,
            capture: !1,
          },
          activeListenerWithCapture: !t.params.passiveListeners || {
            passive: !1,
            capture: !0,
          },
        };
      }
      function $() {
        const e = t.zoom;
        if (e.enabled) return;
        e.enabled = !0;
        const { passiveListener: s, activeListenerWithCapture: a } = A();
        t.wrapperEl.addEventListener("pointerdown", x, s),
          t.wrapperEl.addEventListener("pointermove", S, a),
          ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
            t.wrapperEl.addEventListener(e, T, s);
          }),
          t.wrapperEl.addEventListener("pointermove", M, a);
      }
      function I() {
        const e = t.zoom;
        if (!e.enabled) return;
        e.enabled = !1;
        const { passiveListener: s, activeListenerWithCapture: a } = A();
        t.wrapperEl.removeEventListener("pointerdown", x, s),
          t.wrapperEl.removeEventListener("pointermove", S, a),
          ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
            t.wrapperEl.removeEventListener(e, T, s);
          }),
          t.wrapperEl.removeEventListener("pointermove", M, a);
      }
      Object.defineProperty(t.zoom, "scale", {
        get: () => w,
        set(e) {
          if (w !== e) {
            const t = m.imageEl,
              s = m.slideEl;
            i("zoomChange", e, t, s);
          }
          w = e;
        },
      }),
        a("init", () => {
          t.params.zoom.enabled && $();
        }),
        a("destroy", () => {
          I();
        }),
        a("touchStart", (e, s) => {
          t.zoom.enabled &&
            (function (e) {
              const s = t.device;
              if (!m.imageEl) return;
              if (f.isTouched) return;
              s.android && e.cancelable && e.preventDefault(),
                (f.isTouched = !0);
              const a = u.length > 0 ? u[0] : e;
              (f.touchesStart.x = a.pageX), (f.touchesStart.y = a.pageY);
            })(s);
        }),
        a("touchEnd", (e, s) => {
          t.zoom.enabled &&
            (function () {
              const e = t.zoom;
              if (!m.imageEl) return;
              if (!f.isTouched || !f.isMoved)
                return (f.isTouched = !1), void (f.isMoved = !1);
              (f.isTouched = !1), (f.isMoved = !1);
              let s = 300,
                a = 300;
              const i = v.x * s,
                r = f.currentX + i,
                n = v.y * a,
                l = f.currentY + n;
              0 !== v.x && (s = Math.abs((r - f.currentX) / v.x)),
                0 !== v.y && (a = Math.abs((l - f.currentY) / v.y));
              const o = Math.max(s, a);
              (f.currentX = r), (f.currentY = l);
              const d = f.width * e.scale,
                c = f.height * e.scale;
              (f.minX = Math.min(m.slideWidth / 2 - d / 2, 0)),
                (f.maxX = -f.minX),
                (f.minY = Math.min(m.slideHeight / 2 - c / 2, 0)),
                (f.maxY = -f.minY),
                (f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX)),
                (f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY)),
                (m.imageWrapEl.style.transitionDuration = `${o}ms`),
                (m.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`);
            })();
        }),
        a("doubleTap", (e, s) => {
          !t.animating &&
            t.params.zoom.enabled &&
            t.zoom.enabled &&
            t.params.zoom.toggle &&
            z(s);
        }),
        a("transitionEnd", () => {
          t.zoom.enabled && t.params.zoom.enabled && C();
        }),
        a("slideChange", () => {
          t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C();
        }),
        Object.assign(t.zoom, {
          enable: $,
          disable: I,
          in: P,
          out: L,
          toggle: z,
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      function i(e, t) {
        const s = (function () {
          let e, t, s;
          return (a, i) => {
            for (t = -1, e = a.length; e - t > 1;)
              (s = (e + t) >> 1), a[s] <= i ? (t = s) : (e = s);
            return e;
          };
        })();
        let a, i;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((i = s(this.x, e)),
                (a = i - 1),
                ((e - this.x[a]) * (this.y[i] - this.y[a])) /
                (this.x[i] - this.x[a]) +
                this.y[a])
              : 0;
          }),
          this
        );
      }
      function r() {
        t.controller.control &&
          t.controller.spline &&
          ((t.controller.spline = void 0), delete t.controller.spline);
      }
      s({ controller: { control: void 0, inverse: !1, by: "slide" } }),
        (t.controller = { control: void 0 }),
        a("beforeInit", () => {
          if (
            "undefined" != typeof window &&
            ("string" == typeof t.params.controller.control ||
              t.params.controller.control instanceof HTMLElement)
          ) {
            const e = document.querySelector(t.params.controller.control);
            if (e && e.swiper) t.controller.control = e.swiper;
            else if (e) {
              const s = (a) => {
                (t.controller.control = a.detail[0]),
                  t.update(),
                  e.removeEventListener("init", s);
              };
              e.addEventListener("init", s);
            }
          } else t.controller.control = t.params.controller.control;
        }),
        a("update", () => {
          r();
        }),
        a("resize", () => {
          r();
        }),
        a("observerUpdate", () => {
          r();
        }),
        a("setTranslate", (e, s, a) => {
          t.controller.control &&
            !t.controller.control.destroyed &&
            t.controller.setTranslate(s, a);
        }),
        a("setTransition", (e, s, a) => {
          t.controller.control &&
            !t.controller.control.destroyed &&
            t.controller.setTransition(s, a);
        }),
        Object.assign(t.controller, {
          setTranslate: function (e, s) {
            const a = t.controller.control;
            let r, n;
            const l = t.constructor;
            function o(e) {
              if (e.destroyed) return;
              const s = t.rtlTranslate ? -t.translate : t.translate;
              "slide" === t.params.controller.by &&
                (!(function (e) {
                  t.controller.spline = t.params.loop
                    ? new i(t.slidesGrid, e.slidesGrid)
                    : new i(t.snapGrid, e.snapGrid);
                })(e),
                  (n = -t.controller.spline.interpolate(-s))),
                (n && "container" !== t.params.controller.by) ||
                ((r =
                  (e.maxTranslate() - e.minTranslate()) /
                  (t.maxTranslate() - t.minTranslate())),
                  (!Number.isNaN(r) && Number.isFinite(r)) || (r = 1),
                  (n = (s - t.minTranslate()) * r + e.minTranslate())),
                t.params.controller.inverse && (n = e.maxTranslate() - n),
                e.updateProgress(n),
                e.setTranslate(n, t),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            }
            if (Array.isArray(a))
              for (let e = 0; e < a.length; e += 1)
                a[e] !== s && a[e] instanceof l && o(a[e]);
            else a instanceof l && s !== a && o(a);
          },
          setTransition: function (e, s) {
            const a = t.constructor,
              i = t.controller.control;
            let r;
            function l(s) {
              s.destroyed ||
                (s.setTransition(e, t),
                  0 !== e &&
                  (s.transitionStart(),
                    s.params.autoHeight &&
                    n(() => {
                      s.updateAutoHeight();
                    }),
                    y(s.wrapperEl, () => {
                      i && s.transitionEnd();
                    })));
            }
            if (Array.isArray(i))
              for (r = 0; r < i.length; r += 1)
                i[r] !== s && i[r] instanceof a && l(i[r]);
            else i instanceof a && s !== i && l(i);
          },
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group",
          id: null,
        },
      }),
        (t.a11y = { clicked: !1 });
      let i = null;
      function r(e) {
        const t = i;
        0 !== t.length && ((t.innerHTML = ""), (t.innerHTML = e));
      }
      const n = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function l(e) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("tabIndex", "0");
        });
      }
      function o(e) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("tabIndex", "-1");
        });
      }
      function d(e, t) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("role", t);
        });
      }
      function c(e, t) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("aria-roledescription", t);
        });
      }
      function p(e, t) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("aria-label", t);
        });
      }
      function u(e) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("aria-disabled", !0);
        });
      }
      function m(e) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("aria-disabled", !1);
        });
      }
      function h(e) {
        if (13 !== e.keyCode && 32 !== e.keyCode) return;
        const s = t.params.a11y,
          a = e.target;
        (t.pagination &&
          t.pagination.el &&
          (a === t.pagination.el || t.pagination.el.contains(e.target)) &&
          !e.target.matches(ee(t.params.pagination.bulletClass))) ||
          (t.navigation &&
            t.navigation.nextEl &&
            a === t.navigation.nextEl &&
            ((t.isEnd && !t.params.loop) || t.slideNext(),
              t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
            t.navigation &&
            t.navigation.prevEl &&
            a === t.navigation.prevEl &&
            ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)),
            t.pagination &&
            a.matches(ee(t.params.pagination.bulletClass)) &&
            a.click());
      }
      function g() {
        return (
          t.pagination && t.pagination.bullets && t.pagination.bullets.length
        );
      }
      function v() {
        return g() && t.params.pagination.clickable;
      }
      const b = (e, t, s) => {
        l(e),
          "BUTTON" !== e.tagName &&
          (d(e, "button"), e.addEventListener("keydown", h)),
          p(e, s),
          (function (e, t) {
            (e = n(e)).forEach((e) => {
              e.setAttribute("aria-controls", t);
            });
          })(e, t);
      },
        y = () => {
          t.a11y.clicked = !0;
        },
        E = () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              t.destroyed || (t.a11y.clicked = !1);
            });
          });
        },
        x = (e) => {
          if (t.a11y.clicked) return;
          const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
          if (!s || !t.slides.includes(s)) return;
          const a = t.slides.indexOf(s) === t.activeIndex,
            i =
              t.params.watchSlidesProgress &&
              t.visibleSlides &&
              t.visibleSlides.includes(s);
          a ||
            i ||
            (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) ||
            (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
              t.slideTo(t.slides.indexOf(s), 0));
        },
        S = () => {
          const e = t.params.a11y;
          e.itemRoleDescriptionMessage &&
            c(t.slides, e.itemRoleDescriptionMessage),
            e.slideRole && d(t.slides, e.slideRole);
          const s = t.slides.length;
          e.slideLabelMessage &&
            t.slides.forEach((a, i) => {
              const r = t.params.loop
                ? parseInt(a.getAttribute("data-swiper-slide-index"), 10)
                : i;
              p(
                a,
                e.slideLabelMessage
                  .replace(/\{\{index\}\}/, r + 1)
                  .replace(/\{\{slidesLength\}\}/, s)
              );
            });
        },
        T = () => {
          const e = t.params.a11y;
          t.el.append(i);
          const s = t.el;
          e.containerRoleDescriptionMessage &&
            c(s, e.containerRoleDescriptionMessage),
            e.containerMessage && p(s, e.containerMessage);
          const a = t.wrapperEl,
            r =
              e.id ||
              a.getAttribute("id") ||
              `swiper-wrapper-${((l = 16),
                void 0 === l && (l = 16),
                "x"
                  .repeat(l)
                  .replace(/x/g, () =>
                    Math.round(16 * Math.random()).toString(16)
                  ))
              }`;
          var l;
          const o =
            t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
          var d;
          (d = r),
            n(a).forEach((e) => {
              e.setAttribute("id", d);
            }),
            (function (e, t) {
              (e = n(e)).forEach((e) => {
                e.setAttribute("aria-live", t);
              });
            })(a, o),
            S();
          let { nextEl: u, prevEl: m } = t.navigation ? t.navigation : {};
          if (
            ((u = n(u)),
              (m = n(m)),
              u && u.forEach((t) => b(t, r, e.nextSlideMessage)),
              m && m.forEach((t) => b(t, r, e.prevSlideMessage)),
              v())
          ) {
            (Array.isArray(t.pagination.el)
              ? t.pagination.el
              : [t.pagination.el]
            ).forEach((e) => {
              e.addEventListener("keydown", h);
            });
          }
          t.el.addEventListener("focus", x, !0),
            t.el.addEventListener("pointerdown", y, !0),
            t.el.addEventListener("pointerup", E, !0);
        };
      a("beforeInit", () => {
        (i = f("span", t.params.a11y.notificationClass)),
          i.setAttribute("aria-live", "assertive"),
          i.setAttribute("aria-atomic", "true");
      }),
        a("afterInit", () => {
          t.params.a11y.enabled && T();
        }),
        a(
          "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
          () => {
            t.params.a11y.enabled && S();
          }
        ),
        a("fromEdge toEdge afterInit lock unlock", () => {
          t.params.a11y.enabled &&
            (function () {
              if (t.params.loop || t.params.rewind || !t.navigation) return;
              const { nextEl: e, prevEl: s } = t.navigation;
              s && (t.isBeginning ? (u(s), o(s)) : (m(s), l(s))),
                e && (t.isEnd ? (u(e), o(e)) : (m(e), l(e)));
            })();
        }),
        a("paginationUpdate", () => {
          t.params.a11y.enabled &&
            (function () {
              const e = t.params.a11y;
              g() &&
                t.pagination.bullets.forEach((s) => {
                  t.params.pagination.clickable &&
                    (l(s),
                      t.params.pagination.renderBullet ||
                      (d(s, "button"),
                        p(
                          s,
                          e.paginationBulletMessage.replace(
                            /\{\{index\}\}/,
                            w(s) + 1
                          )
                        ))),
                    s.matches(ee(t.params.pagination.bulletActiveClass))
                      ? s.setAttribute("aria-current", "true")
                      : s.removeAttribute("aria-current");
                });
            })();
        }),
        a("destroy", () => {
          t.params.a11y.enabled &&
            (function () {
              i && i.remove();
              let { nextEl: e, prevEl: s } = t.navigation ? t.navigation : {};
              (e = n(e)),
                (s = n(s)),
                e && e.forEach((e) => e.removeEventListener("keydown", h)),
                s && s.forEach((e) => e.removeEventListener("keydown", h)),
                v() &&
                (Array.isArray(t.pagination.el)
                  ? t.pagination.el
                  : [t.pagination.el]
                ).forEach((e) => {
                  e.removeEventListener("keydown", h);
                });
              t.el.removeEventListener("focus", x, !0),
                t.el.removeEventListener("pointerdown", y, !0),
                t.el.removeEventListener("pointerup", E, !0);
            })();
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        history: {
          enabled: !1,
          root: "",
          replaceState: !1,
          key: "slides",
          keepQuery: !1,
        },
      });
      let i = !1,
        n = {};
      const l = (e) =>
        e
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, ""),
        o = (e) => {
          const t = r();
          let s;
          s = e ? new URL(e) : t.location;
          const a = s.pathname
            .slice(1)
            .split("/")
            .filter((e) => "" !== e),
            i = a.length;
          return { key: a[i - 2], value: a[i - 1] };
        },
        d = (e, s) => {
          const a = r();
          if (!i || !t.params.history.enabled) return;
          let n;
          n = t.params.url ? new URL(t.params.url) : a.location;
          const o = t.slides[s];
          let d = l(o.getAttribute("data-history"));
          if (t.params.history.root.length > 0) {
            let s = t.params.history.root;
            "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)),
              (d = `${s}/${e ? `${e}/` : ""}${d}`);
          } else n.pathname.includes(e) || (d = `${e ? `${e}/` : ""}${d}`);
          t.params.history.keepQuery && (d += n.search);
          const c = a.history.state;
          (c && c.value === d) ||
            (t.params.history.replaceState
              ? a.history.replaceState({ value: d }, null, d)
              : a.history.pushState({ value: d }, null, d));
        },
        c = (e, s, a) => {
          if (s)
            for (let i = 0, r = t.slides.length; i < r; i += 1) {
              const r = t.slides[i];
              if (l(r.getAttribute("data-history")) === s) {
                const s = t.getSlideIndex(r);
                t.slideTo(s, e, a);
              }
            }
          else t.slideTo(0, e, a);
        },
        p = () => {
          (n = o(t.params.url)), c(t.params.speed, n.value, !1);
        };
      a("init", () => {
        t.params.history.enabled &&
          (() => {
            const e = r();
            if (t.params.history) {
              if (!e.history || !e.history.pushState)
                return (
                  (t.params.history.enabled = !1),
                  void (t.params.hashNavigation.enabled = !0)
                );
              (i = !0),
                (n = o(t.params.url)),
                n.key || n.value
                  ? (c(0, n.value, t.params.runCallbacksOnInit),
                    t.params.history.replaceState ||
                    e.addEventListener("popstate", p))
                  : t.params.history.replaceState ||
                  e.addEventListener("popstate", p);
            }
          })();
      }),
        a("destroy", () => {
          t.params.history.enabled &&
            (() => {
              const e = r();
              t.params.history.replaceState ||
                e.removeEventListener("popstate", p);
            })();
        }),
        a("transitionEnd _freeModeNoMomentumRelease", () => {
          i && d(t.params.history.key, t.activeIndex);
        }),
        a("slideChange", () => {
          i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, emit: i, on: n } = e,
        l = !1;
      const o = a(),
        d = r();
      s({
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1,
          getSlideIndex(e, s) {
            if (t.virtual && t.params.virtual.enabled) {
              const e = t.slides.filter(
                (e) => e.getAttribute("data-hash") === s
              )[0];
              if (!e) return 0;
              return parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            }
            return t.getSlideIndex(
              h(
                t.slidesEl,
                `.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`
              )[0]
            );
          },
        },
      });
      const c = () => {
        i("hashChange");
        const e = o.location.hash.replace("#", ""),
          s =
            t.virtual && t.params.virtual.enabled
              ? t.slidesEl.querySelector(
                `[data-swiper-slide-index="${t.activeIndex}"]`
              )
              : t.slides[t.activeIndex];
        if (e !== (s ? s.getAttribute("data-hash") : "")) {
          const s = t.params.hashNavigation.getSlideIndex(t, e);
          if (void 0 === s || Number.isNaN(s)) return;
          t.slideTo(s);
        }
      },
        p = () => {
          if (!l || !t.params.hashNavigation.enabled) return;
          const e =
            t.virtual && t.params.virtual.enabled
              ? t.slidesEl.querySelector(
                `[data-swiper-slide-index="${t.activeIndex}"]`
              )
              : t.slides[t.activeIndex],
            s = e
              ? e.getAttribute("data-hash") || e.getAttribute("data-history")
              : "";
          t.params.hashNavigation.replaceState &&
            d.history &&
            d.history.replaceState
            ? (d.history.replaceState(null, null, `#${s}` || ""), i("hashSet"))
            : ((o.location.hash = s || ""), i("hashSet"));
        };
      n("init", () => {
        t.params.hashNavigation.enabled &&
          (() => {
            if (
              !t.params.hashNavigation.enabled ||
              (t.params.history && t.params.history.enabled)
            )
              return;
            l = !0;
            const e = o.location.hash.replace("#", "");
            if (e) {
              const s = 0,
                a = t.params.hashNavigation.getSlideIndex(t, e);
              t.slideTo(a || 0, s, t.params.runCallbacksOnInit, !0);
            }
            t.params.hashNavigation.watchState &&
              d.addEventListener("hashchange", c);
          })();
      }),
        n("destroy", () => {
          t.params.hashNavigation.enabled &&
            t.params.hashNavigation.watchState &&
            d.removeEventListener("hashchange", c);
        }),
        n("transitionEnd _freeModeNoMomentumRelease", () => {
          l && p();
        }),
        n("slideChange", () => {
          l && t.params.cssMode && p();
        });
    },
    function (e) {
      let t,
        s,
        { swiper: i, extendParams: r, on: n, emit: l, params: o } = e;
      (i.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        r({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        });
      let d,
        c,
        p,
        u,
        m,
        h,
        f,
        g = o && o.autoplay ? o.autoplay.delay : 3e3,
        v = o && o.autoplay ? o.autoplay.delay : 3e3,
        w = new Date().getTime;
      function b(e) {
        i &&
          !i.destroyed &&
          i.wrapperEl &&
          e.target === i.wrapperEl &&
          (i.wrapperEl.removeEventListener("transitionend", b), M());
      }
      const y = () => {
        if (i.destroyed || !i.autoplay.running) return;
        i.autoplay.paused ? (c = !0) : c && ((v = d), (c = !1));
        const e = i.autoplay.paused ? d : w + v - new Date().getTime();
        (i.autoplay.timeLeft = e),
          l("autoplayTimeLeft", e, e / g),
          (s = requestAnimationFrame(() => {
            y();
          }));
      },
        E = (e) => {
          if (i.destroyed || !i.autoplay.running) return;
          cancelAnimationFrame(s), y();
          let a = void 0 === e ? i.params.autoplay.delay : e;
          (g = i.params.autoplay.delay), (v = i.params.autoplay.delay);
          const r = (() => {
            let e;
            if (
              ((e =
                i.virtual && i.params.virtual.enabled
                  ? i.slides.filter((e) =>
                    e.classList.contains("swiper-slide-active")
                  )[0]
                  : i.slides[i.activeIndex]),
                !e)
            )
              return;
            return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
          })();
          !Number.isNaN(r) &&
            r > 0 &&
            void 0 === e &&
            ((a = r), (g = r), (v = r)),
            (d = a);
          const n = i.params.speed,
            o = () => {
              i &&
                !i.destroyed &&
                (i.params.autoplay.reverseDirection
                  ? !i.isBeginning || i.params.loop || i.params.rewind
                    ? (i.slidePrev(n, !0, !0), l("autoplay"))
                    : i.params.autoplay.stopOnLastSlide ||
                    (i.slideTo(i.slides.length - 1, n, !0, !0), l("autoplay"))
                  : !i.isEnd || i.params.loop || i.params.rewind
                    ? (i.slideNext(n, !0, !0), l("autoplay"))
                    : i.params.autoplay.stopOnLastSlide ||
                    (i.slideTo(0, n, !0, !0), l("autoplay")),
                  i.params.cssMode &&
                  ((w = new Date().getTime()),
                    requestAnimationFrame(() => {
                      E();
                    })));
            };
          return (
            a > 0
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  o();
                }, a)))
              : requestAnimationFrame(() => {
                o();
              }),
            a
          );
        },
        x = () => {
          (i.autoplay.running = !0), E(), l("autoplayStart");
        },
        S = () => {
          (i.autoplay.running = !1),
            clearTimeout(t),
            cancelAnimationFrame(s),
            l("autoplayStop");
        },
        T = (e, s) => {
          if (i.destroyed || !i.autoplay.running) return;
          clearTimeout(t), e || (f = !0);
          const a = () => {
            l("autoplayPause"),
              i.params.autoplay.waitForTransition
                ? i.wrapperEl.addEventListener("transitionend", b)
                : M();
          };
          if (((i.autoplay.paused = !0), s))
            return h && (d = i.params.autoplay.delay), (h = !1), void a();
          const r = d || i.params.autoplay.delay;
          (d = r - (new Date().getTime() - w)),
            (i.isEnd && d < 0 && !i.params.loop) || (d < 0 && (d = 0), a());
        },
        M = () => {
          (i.isEnd && d < 0 && !i.params.loop) ||
            i.destroyed ||
            !i.autoplay.running ||
            ((w = new Date().getTime()),
              f ? ((f = !1), E(d)) : E(),
              (i.autoplay.paused = !1),
              l("autoplayResume"));
        },
        C = () => {
          if (i.destroyed || !i.autoplay.running) return;
          const e = a();
          "hidden" === e.visibilityState && ((f = !0), T(!0)),
            "visible" === e.visibilityState && M();
        },
        P = (e) => {
          "mouse" === e.pointerType && ((f = !0), T(!0));
        },
        L = (e) => {
          "mouse" === e.pointerType && i.autoplay.paused && M();
        };
      n("init", () => {
        i.params.autoplay.enabled &&
          (i.params.autoplay.pauseOnMouseEnter &&
            (i.el.addEventListener("pointerenter", P),
              i.el.addEventListener("pointerleave", L)),
            a().addEventListener("visibilitychange", C),
            (w = new Date().getTime()),
            x());
      }),
        n("destroy", () => {
          i.el.removeEventListener("pointerenter", P),
            i.el.removeEventListener("pointerleave", L),
            a().removeEventListener("visibilitychange", C),
            i.autoplay.running && S();
        }),
        n("beforeTransitionStart", (e, t, s) => {
          !i.destroyed &&
            i.autoplay.running &&
            (s || !i.params.autoplay.disableOnInteraction ? T(!0, !0) : S());
        }),
        n("sliderFirstMove", () => {
          !i.destroyed &&
            i.autoplay.running &&
            (i.params.autoplay.disableOnInteraction
              ? S()
              : ((p = !0),
                (u = !1),
                (f = !1),
                (m = setTimeout(() => {
                  (f = !0), (u = !0), T(!0);
                }, 200))));
        }),
        n("touchEnd", () => {
          if (!i.destroyed && i.autoplay.running && p) {
            if (
              (clearTimeout(m),
                clearTimeout(t),
                i.params.autoplay.disableOnInteraction)
            )
              return (u = !1), void (p = !1);
            u && i.params.cssMode && M(), (u = !1), (p = !1);
          }
        }),
        n("slideChange", () => {
          !i.destroyed && i.autoplay.running && (h = !0);
        }),
        Object.assign(i.autoplay, { start: x, stop: S, pause: T, resume: M });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let r = !1,
        n = !1;
      function l() {
        const e = t.thumbs.swiper;
        if (!e || e.destroyed) return;
        const s = e.clickedIndex,
          a = e.clickedSlide;
        if (a && a.classList.contains(t.params.thumbs.slideThumbActiveClass))
          return;
        if (null == s) return;
        let i;
        (i = e.params.loop
          ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)
          : s),
          t.params.loop ? t.slideToLoop(i) : t.slideTo(i);
      }
      function o() {
        const { thumbs: e } = t.params;
        if (r) return !1;
        r = !0;
        const s = t.constructor;
        if (e.swiper instanceof s)
          (t.thumbs.swiper = e.swiper),
            Object.assign(t.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(t.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            t.thumbs.swiper.update();
        else if (d(e.swiper)) {
          const a = Object.assign({}, e.swiper);
          Object.assign(a, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (t.thumbs.swiper = new s(a)),
            (n = !0);
        }
        return (
          t.thumbs.swiper.el.classList.add(
            t.params.thumbs.thumbsContainerClass
          ),
          t.thumbs.swiper.on("tap", l),
          !0
        );
      }
      function c(e) {
        const s = t.thumbs.swiper;
        if (!s || s.destroyed) return;
        const a =
          "auto" === s.params.slidesPerView
            ? s.slidesPerViewDynamic()
            : s.params.slidesPerView;
        let i = 1;
        const r = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 &&
            !t.params.centeredSlides &&
            (i = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (i = 1),
            (i = Math.floor(i)),
            s.slides.forEach((e) => e.classList.remove(r)),
            s.params.loop || (s.params.virtual && s.params.virtual.enabled))
        )
          for (let e = 0; e < i; e += 1)
            h(
              s.slidesEl,
              `[data-swiper-slide-index="${t.realIndex + e}"]`
            ).forEach((e) => {
              e.classList.add(r);
            });
        else
          for (let e = 0; e < i; e += 1)
            s.slides[t.realIndex + e] &&
              s.slides[t.realIndex + e].classList.add(r);
        const n = t.params.thumbs.autoScrollOffset,
          l = n && !s.params.loop;
        if (t.realIndex !== s.realIndex || l) {
          const i = s.activeIndex;
          let r, o;
          if (s.params.loop) {
            const e = s.slides.filter(
              (e) =>
                e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`
            )[0];
            (r = s.slides.indexOf(e)),
              (o = t.activeIndex > t.previousIndex ? "next" : "prev");
          } else (r = t.realIndex), (o = r > t.previousIndex ? "next" : "prev");
          l && (r += "next" === o ? n : -1 * n),
            s.visibleSlidesIndexes &&
            s.visibleSlidesIndexes.indexOf(r) < 0 &&
            (s.params.centeredSlides
              ? (r =
                r > i
                  ? r - Math.floor(a / 2) + 1
                  : r + Math.floor(a / 2) - 1)
              : r > i && s.params.slidesPerGroup,
              s.slideTo(r, e ? 0 : void 0));
        }
      }
      (t.thumbs = { swiper: null }),
        i("beforeInit", () => {
          const { thumbs: e } = t.params;
          if (e && e.swiper)
            if (
              "string" == typeof e.swiper ||
              e.swiper instanceof HTMLElement
            ) {
              const s = a(),
                i = () => {
                  const a =
                    "string" == typeof e.swiper
                      ? s.querySelector(e.swiper)
                      : e.swiper;
                  if (a && a.swiper) (e.swiper = a.swiper), o(), c(!0);
                  else if (a) {
                    const s = (i) => {
                      (e.swiper = i.detail[0]),
                        a.removeEventListener("init", s),
                        o(),
                        c(!0),
                        e.swiper.update(),
                        t.update();
                    };
                    a.addEventListener("init", s);
                  }
                  return a;
                },
                r = () => {
                  if (t.destroyed) return;
                  i() || requestAnimationFrame(r);
                };
              requestAnimationFrame(r);
            } else o(), c(!0);
        }),
        i("slideChange update resize observerUpdate", () => {
          c();
        }),
        i("setTransition", (e, s) => {
          const a = t.thumbs.swiper;
          a && !a.destroyed && a.setTransition(s);
        }),
        i("beforeDestroy", () => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && n && e.destroy();
        }),
        Object.assign(t.thumbs, { init: o, update: c });
    },
    function (e) {
      let { swiper: t, extendParams: s, emit: a, once: i } = e;
      s({
        freeMode: {
          enabled: !1,
          momentum: !0,
          momentumRatio: 1,
          momentumBounce: !0,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: !1,
          minimumVelocity: 0.02,
        },
      }),
        Object.assign(t, {
          freeMode: {
            onTouchStart: function () {
              if (t.params.cssMode) return;
              const e = t.getTranslate();
              t.setTranslate(e),
                t.setTransition(0),
                (t.touchEventsData.velocities.length = 0),
                t.freeMode.onTouchEnd({
                  currentPos: t.rtl ? t.translate : -t.translate,
                });
            },
            onTouchMove: function () {
              if (t.params.cssMode) return;
              const { touchEventsData: e, touches: s } = t;
              0 === e.velocities.length &&
                e.velocities.push({
                  position: s[t.isHorizontal() ? "startX" : "startY"],
                  time: e.touchStartTime,
                }),
                e.velocities.push({
                  position: s[t.isHorizontal() ? "currentX" : "currentY"],
                  time: l(),
                });
            },
            onTouchEnd: function (e) {
              let { currentPos: s } = e;
              if (t.params.cssMode) return;
              const {
                params: r,
                wrapperEl: n,
                rtlTranslate: o,
                snapGrid: d,
                touchEventsData: c,
              } = t,
                p = l() - c.touchStartTime;
              if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
              else if (s > -t.maxTranslate())
                t.slides.length < d.length
                  ? t.slideTo(d.length - 1)
                  : t.slideTo(t.slides.length - 1);
              else {
                if (r.freeMode.momentum) {
                  if (c.velocities.length > 1) {
                    const e = c.velocities.pop(),
                      s = c.velocities.pop(),
                      a = e.position - s.position,
                      i = e.time - s.time;
                    (t.velocity = a / i),
                      (t.velocity /= 2),
                      Math.abs(t.velocity) < r.freeMode.minimumVelocity &&
                      (t.velocity = 0),
                      (i > 150 || l() - e.time > 300) && (t.velocity = 0);
                  } else t.velocity = 0;
                  (t.velocity *= r.freeMode.momentumVelocityRatio),
                    (c.velocities.length = 0);
                  let e = 1e3 * r.freeMode.momentumRatio;
                  const s = t.velocity * e;
                  let p = t.translate + s;
                  o && (p = -p);
                  let u,
                    m = !1;
                  const h =
                    20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                  let f;
                  if (p < t.maxTranslate())
                    r.freeMode.momentumBounce
                      ? (p + t.maxTranslate() < -h &&
                        (p = t.maxTranslate() - h),
                        (u = t.maxTranslate()),
                        (m = !0),
                        (c.allowMomentumBounce = !0))
                      : (p = t.maxTranslate()),
                      r.loop && r.centeredSlides && (f = !0);
                  else if (p > t.minTranslate())
                    r.freeMode.momentumBounce
                      ? (p - t.minTranslate() > h && (p = t.minTranslate() + h),
                        (u = t.minTranslate()),
                        (m = !0),
                        (c.allowMomentumBounce = !0))
                      : (p = t.minTranslate()),
                      r.loop && r.centeredSlides && (f = !0);
                  else if (r.freeMode.sticky) {
                    let e;
                    for (let t = 0; t < d.length; t += 1)
                      if (d[t] > -p) {
                        e = t;
                        break;
                      }
                    (p =
                      Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) ||
                        "next" === t.swipeDirection
                        ? d[e]
                        : d[e - 1]),
                      (p = -p);
                  }
                  if (
                    (f &&
                      i("transitionEnd", () => {
                        t.loopFix();
                      }),
                      0 !== t.velocity)
                  ) {
                    if (
                      ((e = o
                        ? Math.abs((-p - t.translate) / t.velocity)
                        : Math.abs((p - t.translate) / t.velocity)),
                        r.freeMode.sticky)
                    ) {
                      const s = Math.abs((o ? -p : p) - t.translate),
                        a = t.slidesSizesGrid[t.activeIndex];
                      e =
                        s < a
                          ? r.speed
                          : s < 2 * a
                            ? 1.5 * r.speed
                            : 2.5 * r.speed;
                    }
                  } else if (r.freeMode.sticky) return void t.slideToClosest();
                  r.freeMode.momentumBounce && m
                    ? (t.updateProgress(u),
                      t.setTransition(e),
                      t.setTranslate(p),
                      t.transitionStart(!0, t.swipeDirection),
                      (t.animating = !0),
                      y(n, () => {
                        t &&
                          !t.destroyed &&
                          c.allowMomentumBounce &&
                          (a("momentumBounce"),
                            t.setTransition(r.speed),
                            setTimeout(() => {
                              t.setTranslate(u),
                                y(n, () => {
                                  t && !t.destroyed && t.transitionEnd();
                                });
                            }, 0));
                      }))
                    : t.velocity
                      ? (a("_freeModeNoMomentumRelease"),
                        t.updateProgress(p),
                        t.setTransition(e),
                        t.setTranslate(p),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating ||
                        ((t.animating = !0),
                          y(n, () => {
                            t && !t.destroyed && t.transitionEnd();
                          })))
                      : t.updateProgress(p),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses();
                } else {
                  if (r.freeMode.sticky) return void t.slideToClosest();
                  r.freeMode && a("_freeModeNoMomentumRelease");
                }
                (!r.freeMode.momentum || p >= r.longSwipesMs) &&
                  (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses());
              }
            },
          },
        });
    },
    function (e) {
      let t,
        s,
        a,
        { swiper: i, extendParams: r } = e;
      r({ grid: { rows: 1, fill: "column" } });
      const n = () => {
        let e = i.params.spaceBetween;
        return (
          "string" == typeof e && e.indexOf("%") >= 0
            ? (e = (parseFloat(e.replace("%", "")) / 100) * i.size)
            : "string" == typeof e && (e = parseFloat(e)),
          e
        );
      };
      i.grid = {
        initSlides: (e) => {
          const { slidesPerView: r } = i.params,
            { rows: n, fill: l } = i.params.grid;
          (a = Math.floor(e / n)),
            (t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n),
            "auto" !== r && "row" === l && (t = Math.max(t, r * n)),
            (s = t / n);
        },
        updateSlide: (e, r, l, o) => {
          const { slidesPerGroup: d } = i.params,
            c = n(),
            { rows: p, fill: u } = i.params.grid;
          let m, h, f;
          if ("row" === u && d > 1) {
            const s = Math.floor(e / (d * p)),
              a = e - p * d * s,
              i = 0 === s ? d : Math.min(Math.ceil((l - s * p * d) / p), d);
            (f = Math.floor(a / i)),
              (h = a - f * i + s * d),
              (m = h + (f * t) / p),
              (r.style.order = m);
          } else
            "column" === u
              ? ((h = Math.floor(e / p)),
                (f = e - h * p),
                (h > a || (h === a && f === p - 1)) &&
                ((f += 1), f >= p && ((f = 0), (h += 1))))
              : ((f = Math.floor(e / s)), (h = e - f * s));
          (r.row = f),
            (r.column = h),
            (r.style[o("margin-top")] = 0 !== f ? c && `${c}px` : "");
        },
        updateWrapperSize: (e, s, a) => {
          const { centeredSlides: r, roundLengths: l } = i.params,
            o = n(),
            { rows: d } = i.params.grid;
          if (
            ((i.virtualSize = (e + o) * t),
              (i.virtualSize = Math.ceil(i.virtualSize / d) - o),
              (i.wrapperEl.style[a("width")] = `${i.virtualSize + o}px`),
              r)
          ) {
            const e = [];
            for (let t = 0; t < s.length; t += 1) {
              let a = s[t];
              l && (a = Math.floor(a)),
                s[t] < i.virtualSize + s[0] && e.push(a);
            }
            s.splice(0, s.length), s.push(...e);
          }
        },
      };
    },
    function (e) {
      let { swiper: t } = e;
      Object.assign(t, {
        appendSlide: te.bind(t),
        prependSlide: se.bind(t),
        addSlide: ae.bind(t),
        removeSlide: ie.bind(t),
        removeAllSlides: re.bind(t),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ fadeEffect: { crossFade: !1 } }),
        ne({
          effect: "fade",
          swiper: t,
          on: a,
          setTranslate: () => {
            const { slides: e } = t;
            t.params.fadeEffect;
            for (let s = 0; s < e.length; s += 1) {
              const e = t.slides[s];
              let a = -e.swiperSlideOffset;
              t.params.virtualTranslate || (a -= t.translate);
              let i = 0;
              t.isHorizontal() || ((i = a), (a = 0));
              const r = t.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(e.progress), 0)
                : 1 + Math.min(Math.max(e.progress, -1), 0),
                n = le(0, e);
              (n.style.opacity = r),
                (n.style.transform = `translate3d(${a}px, ${i}px, 0px)`);
            }
          },
          setTransition: (e) => {
            const s = t.slides.map((e) => m(e));
            s.forEach((t) => {
              t.style.transitionDuration = `${e}ms`;
            }),
              oe({
                swiper: t,
                duration: e,
                transformElements: s,
                allSlides: !0,
              });
          },
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      });
      const i = (e, t, s) => {
        let a = s
          ? e.querySelector(".swiper-slide-shadow-left")
          : e.querySelector(".swiper-slide-shadow-top"),
          i = s
            ? e.querySelector(".swiper-slide-shadow-right")
            : e.querySelector(".swiper-slide-shadow-bottom");
        a ||
          ((a = f(
            "div",
            (
              "swiper-slide-shadow-cube swiper-slide-shadow-" +
              (s ? "left" : "top")
            ).split(" ")
          )),
            e.append(a)),
          i ||
          ((i = f(
            "div",
            (
              "swiper-slide-shadow-cube swiper-slide-shadow-" +
              (s ? "right" : "bottom")
            ).split(" ")
          )),
            e.append(i)),
          a && (a.style.opacity = Math.max(-t, 0)),
          i && (i.style.opacity = Math.max(t, 0));
      };
      ne({
        effect: "cube",
        swiper: t,
        on: a,
        setTranslate: () => {
          const {
            el: e,
            wrapperEl: s,
            slides: a,
            width: r,
            height: n,
            rtlTranslate: l,
            size: o,
            browser: d,
          } = t,
            c = t.params.cubeEffect,
            p = t.isHorizontal(),
            u = t.virtual && t.params.virtual.enabled;
          let m,
            h = 0;
          c.shadow &&
            (p
              ? ((m = t.wrapperEl.querySelector(".swiper-cube-shadow")),
                m ||
                ((m = f("div", "swiper-cube-shadow")), t.wrapperEl.append(m)),
                (m.style.height = `${r}px`))
              : ((m = e.querySelector(".swiper-cube-shadow")),
                m || ((m = f("div", "swiper-cube-shadow")), e.append(m))));
          for (let e = 0; e < a.length; e += 1) {
            const t = a[e];
            let s = e;
            u && (s = parseInt(t.getAttribute("data-swiper-slide-index"), 10));
            let r = 90 * s,
              n = Math.floor(r / 360);
            l && ((r = -r), (n = Math.floor(-r / 360)));
            const d = Math.max(Math.min(t.progress, 1), -1);
            let m = 0,
              f = 0,
              g = 0;
            s % 4 == 0
              ? ((m = 4 * -n * o), (g = 0))
              : (s - 1) % 4 == 0
                ? ((m = 0), (g = 4 * -n * o))
                : (s - 2) % 4 == 0
                  ? ((m = o + 4 * n * o), (g = o))
                  : (s - 3) % 4 == 0 && ((m = -o), (g = 3 * o + 4 * o * n)),
              l && (m = -m),
              p || ((f = m), (m = 0));
            const v = `rotateX(${p ? 0 : -r}deg) rotateY(${p ? r : 0
              }deg) translate3d(${m}px, ${f}px, ${g}px)`;
            d <= 1 &&
              d > -1 &&
              ((h = 90 * s + 90 * d), l && (h = 90 * -s - 90 * d)),
              (t.style.transform = v),
              c.slideShadows && i(t, d, p);
          }
          if (
            ((s.style.transformOrigin = `50% 50% -${o / 2}px`),
              (s.style["-webkit-transform-origin"] = `50% 50% -${o / 2}px`),
              c.shadow)
          )
            if (p)
              m.style.transform = `translate3d(0px, ${r / 2 + c.shadowOffset
                }px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale
                })`;
            else {
              const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                t =
                  1.5 -
                  (Math.sin((2 * e * Math.PI) / 360) / 2 +
                    Math.cos((2 * e * Math.PI) / 360) / 2),
                s = c.shadowScale,
                a = c.shadowScale / t,
                i = c.shadowOffset;
              m.style.transform = `scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i
                }px, ${-n / 2 / a}px) rotateX(-90deg)`;
            }
          const g =
            (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -o / 2 : 0;
          (s.style.transform = `translate3d(0px,0,${g}px) rotateX(${t.isHorizontal() ? 0 : h
            }deg) rotateY(${t.isHorizontal() ? -h : 0}deg)`),
            s.style.setProperty("--swiper-cube-translate-z", `${g}px`);
        },
        setTransition: (e) => {
          const { el: s, slides: a } = t;
          if (
            (a.forEach((t) => {
              (t.style.transitionDuration = `${e}ms`),
                t
                  .querySelectorAll(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .forEach((t) => {
                    t.style.transitionDuration = `${e}ms`;
                  });
            }),
              t.params.cubeEffect.shadow && !t.isHorizontal())
          ) {
            const t = s.querySelector(".swiper-cube-shadow");
            t && (t.style.transitionDuration = `${e}ms`);
          }
        },
        recreateShadows: () => {
          const e = t.isHorizontal();
          t.slides.forEach((t) => {
            const s = Math.max(Math.min(t.progress, 1), -1);
            i(t, s, e);
          });
        },
        getEffectParams: () => t.params.cubeEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: !1,
          virtualTranslate: !0,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
      const i = (e, s) => {
        let a = t.isHorizontal()
          ? e.querySelector(".swiper-slide-shadow-left")
          : e.querySelector(".swiper-slide-shadow-top"),
          i = t.isHorizontal()
            ? e.querySelector(".swiper-slide-shadow-right")
            : e.querySelector(".swiper-slide-shadow-bottom");
        a || (a = de("flip", e, t.isHorizontal() ? "left" : "top")),
          i || (i = de("flip", e, t.isHorizontal() ? "right" : "bottom")),
          a && (a.style.opacity = Math.max(-s, 0)),
          i && (i.style.opacity = Math.max(s, 0));
      };
      ne({
        effect: "flip",
        swiper: t,
        on: a,
        setTranslate: () => {
          const { slides: e, rtlTranslate: s } = t,
            a = t.params.flipEffect;
          for (let r = 0; r < e.length; r += 1) {
            const n = e[r];
            let l = n.progress;
            t.params.flipEffect.limitRotation &&
              (l = Math.max(Math.min(n.progress, 1), -1));
            const o = n.swiperSlideOffset;
            let d = -180 * l,
              c = 0,
              p = t.params.cssMode ? -o - t.translate : -o,
              u = 0;
            t.isHorizontal()
              ? s && (d = -d)
              : ((u = p), (p = 0), (c = -d), (d = 0)),
              (n.style.zIndex = -Math.abs(Math.round(l)) + e.length),
              a.slideShadows && i(n, l);
            const m = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
            le(0, n).style.transform = m;
          }
        },
        setTransition: (e) => {
          const s = t.slides.map((e) => m(e));
          s.forEach((t) => {
            (t.style.transitionDuration = `${e}ms`),
              t
                .querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .forEach((t) => {
                  t.style.transitionDuration = `${e}ms`;
                });
          }),
            oe({ swiper: t, duration: e, transformElements: s });
        },
        recreateShadows: () => {
          t.params.flipEffect,
            t.slides.forEach((e) => {
              let s = e.progress;
              t.params.flipEffect.limitRotation &&
                (s = Math.max(Math.min(e.progress, 1), -1)),
                i(e, s);
            });
        },
        getEffectParams: () => t.params.flipEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0,
        },
      }),
        ne({
          effect: "coverflow",
          swiper: t,
          on: a,
          setTranslate: () => {
            const { width: e, height: s, slides: a, slidesSizesGrid: i } = t,
              r = t.params.coverflowEffect,
              n = t.isHorizontal(),
              l = t.translate,
              o = n ? e / 2 - l : s / 2 - l,
              d = n ? r.rotate : -r.rotate,
              c = r.depth;
            for (let e = 0, t = a.length; e < t; e += 1) {
              const t = a[e],
                s = i[e],
                l = (o - t.swiperSlideOffset - s / 2) / s,
                p =
                  "function" == typeof r.modifier
                    ? r.modifier(l)
                    : l * r.modifier;
              let u = n ? d * p : 0,
                m = n ? 0 : d * p,
                h = -c * Math.abs(p),
                f = r.stretch;
              "string" == typeof f &&
                -1 !== f.indexOf("%") &&
                (f = (parseFloat(r.stretch) / 100) * s);
              let g = n ? 0 : f * p,
                v = n ? f * p : 0,
                w = 1 - (1 - r.scale) * Math.abs(p);
              Math.abs(v) < 0.001 && (v = 0),
                Math.abs(g) < 0.001 && (g = 0),
                Math.abs(h) < 0.001 && (h = 0),
                Math.abs(u) < 0.001 && (u = 0),
                Math.abs(m) < 0.001 && (m = 0),
                Math.abs(w) < 0.001 && (w = 0);
              const b = `translate3d(${v}px,${g}px,${h}px)  rotateX(${m}deg) rotateY(${u}deg) scale(${w})`;
              if (
                ((le(0, t).style.transform = b),
                  (t.style.zIndex = 1 - Math.abs(Math.round(p))),
                  r.slideShadows)
              ) {
                let e = n
                  ? t.querySelector(".swiper-slide-shadow-left")
                  : t.querySelector(".swiper-slide-shadow-top"),
                  s = n
                    ? t.querySelector(".swiper-slide-shadow-right")
                    : t.querySelector(".swiper-slide-shadow-bottom");
                e || (e = de("coverflow", t, n ? "left" : "top")),
                  s || (s = de("coverflow", t, n ? "right" : "bottom")),
                  e && (e.style.opacity = p > 0 ? p : 0),
                  s && (s.style.opacity = -p > 0 ? -p : 0);
              }
            }
          },
          setTransition: (e) => {
            t.slides
              .map((e) => m(e))
              .forEach((t) => {
                (t.style.transitionDuration = `${e}ms`),
                  t
                    .querySelectorAll(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .forEach((t) => {
                      t.style.transitionDuration = `${e}ms`;
                    });
              });
          },
          perspective: () => !0,
          overwriteParams: () => ({ watchSlidesProgress: !0 }),
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        creativeEffect: {
          limitProgress: 1,
          shadowPerProgress: !1,
          progressMultiplier: 1,
          perspective: !0,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
        },
      });
      const i = (e) => ("string" == typeof e ? e : `${e}px`);
      ne({
        effect: "creative",
        swiper: t,
        on: a,
        setTranslate: () => {
          const { slides: e, wrapperEl: s, slidesSizesGrid: a } = t,
            r = t.params.creativeEffect,
            { progressMultiplier: n } = r,
            l = t.params.centeredSlides;
          if (l) {
            const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
            s.style.transform = `translateX(calc(50% - ${e}px))`;
          }
          for (let s = 0; s < e.length; s += 1) {
            const a = e[s],
              o = a.progress,
              d = Math.min(
                Math.max(a.progress, -r.limitProgress),
                r.limitProgress
              );
            let c = d;
            l ||
              (c = Math.min(
                Math.max(a.originalProgress, -r.limitProgress),
                r.limitProgress
              ));
            const p = a.swiperSlideOffset,
              u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
              m = [0, 0, 0];
            let h = !1;
            t.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
            let f = {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              scale: 1,
              opacity: 1,
            };
            d < 0
              ? ((f = r.next), (h = !0))
              : d > 0 && ((f = r.prev), (h = !0)),
              u.forEach((e, t) => {
                u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(
                  d * n
                )}))`;
              }),
              m.forEach((e, t) => {
                m[t] = f.rotate[t] * Math.abs(d * n);
              }),
              (a.style.zIndex = -Math.abs(Math.round(o)) + e.length);
            const g = u.join(", "),
              v = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
              w =
                c < 0
                  ? `scale(${1 + (1 - f.scale) * c * n})`
                  : `scale(${1 - (1 - f.scale) * c * n})`,
              b =
                c < 0
                  ? 1 + (1 - f.opacity) * c * n
                  : 1 - (1 - f.opacity) * c * n,
              y = `translate3d(${g}) ${v} ${w}`;
            if ((h && f.shadow) || !h) {
              let e = a.querySelector(".swiper-slide-shadow");
              if ((!e && f.shadow && (e = de("creative", a)), e)) {
                const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
              }
            }
            const E = le(0, a);
            (E.style.transform = y),
              (E.style.opacity = b),
              f.origin && (E.style.transformOrigin = f.origin);
          }
        },
        setTransition: (e) => {
          const s = t.slides.map((e) => m(e));
          s.forEach((t) => {
            (t.style.transitionDuration = `${e}ms`),
              t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
                t.style.transitionDuration = `${e}ms`;
              });
          }),
            oe({ swiper: t, duration: e, transformElements: s, allSlides: !0 });
        },
        perspective: () => t.params.creativeEffect.perspective,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        cardsEffect: {
          slideShadows: !0,
          rotate: !0,
          perSlideRotate: 2,
          perSlideOffset: 8,
        },
      }),
        ne({
          effect: "cards",
          swiper: t,
          on: a,
          setTranslate: () => {
            const { slides: e, activeIndex: s, rtlTranslate: a } = t,
              i = t.params.cardsEffect,
              { startTranslate: r, isTouched: n } = t.touchEventsData,
              l = a ? -t.translate : t.translate;
            for (let o = 0; o < e.length; o += 1) {
              const d = e[o],
                c = d.progress,
                p = Math.min(Math.max(c, -4), 4);
              let u = d.swiperSlideOffset;
              t.params.centeredSlides &&
                !t.params.cssMode &&
                (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`),
                t.params.centeredSlides &&
                t.params.cssMode &&
                (u -= e[0].swiperSlideOffset);
              let m = t.params.cssMode ? -u - t.translate : -u,
                h = 0;
              const f = -100 * Math.abs(p);
              let g = 1,
                v = -i.perSlideRotate * p,
                w = i.perSlideOffset - 0.75 * Math.abs(p);
              const b =
                t.virtual && t.params.virtual.enabled
                  ? t.virtual.from + o
                  : o,
                y =
                  (b === s || b === s - 1) &&
                  p > 0 &&
                  p < 1 &&
                  (n || t.params.cssMode) &&
                  l < r,
                E =
                  (b === s || b === s + 1) &&
                  p < 0 &&
                  p > -1 &&
                  (n || t.params.cssMode) &&
                  l > r;
              if (y || E) {
                const e = (1 - Math.abs((Math.abs(p) - 0.5) / 0.5)) ** 0.5;
                (v += -28 * p * e),
                  (g += -0.5 * e),
                  (w += 96 * e),
                  (h = -25 * e * Math.abs(p) + "%");
              }
              if (
                ((m =
                  p < 0
                    ? `calc(${m}px ${a ? "-" : "+"} (${w * Math.abs(p)}%))`
                    : p > 0
                      ? `calc(${m}px ${a ? "-" : "+"} (-${w * Math.abs(p)}%))`
                      : `${m}px`),
                  !t.isHorizontal())
              ) {
                const e = h;
                (h = m), (m = e);
              }
              const x = p < 0 ? "" + (1 + (1 - g) * p) : "" + (1 - (1 - g) * p),
                S = `\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${i.rotate ? (a ? -v : v) : 0
                  }deg)\n        scale(${x})\n      `;
              if (i.slideShadows) {
                let e = d.querySelector(".swiper-slide-shadow");
                e || (e = de("cards", d)),
                  e &&
                  (e.style.opacity = Math.min(
                    Math.max((Math.abs(p) - 0.5) / 0.5, 0),
                    1
                  ));
              }
              d.style.zIndex = -Math.abs(Math.round(c)) + e.length;
              le(0, d).style.transform = S;
            }
          },
          setTransition: (e) => {
            const s = t.slides.map((e) => m(e));
            s.forEach((t) => {
              (t.style.transitionDuration = `${e}ms`),
                t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
                  t.style.transitionDuration = `${e}ms`;
                });
            }),
              oe({ swiper: t, duration: e, transformElements: s });
          },
          perspective: () => !0,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
    },
  ];
  return Q.use(ce), Q;
})();
//# sourceMappingURL=swiper-bundle.min.js.map

/**
 * Swiper Custom Element 10.1.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: August 1, 2023
 */

!(function () {
  "use strict";
  function e(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function t(s, i) {
    void 0 === s && (s = {}),
      void 0 === i && (i = {}),
      Object.keys(i).forEach((a) => {
        void 0 === s[a]
          ? (s[a] = i[a])
          : e(i[a]) && e(s[a]) && Object.keys(i[a]).length > 0 && t(s[a], i[a]);
      });
  }
  const s = {
    body: {},
    addEventListener() { },
    removeEventListener() { },
    activeElement: { blur() { }, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() { } }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() { },
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
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
  function i() {
    const e = "undefined" != typeof document ? document : {};
    return t(e, s), e;
  }
  const a = {
    document: s,
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
    history: { replaceState() { }, pushState() { }, go() { }, back() { } },
    CustomEvent: function () {
      return this;
    },
    addEventListener() { },
    removeEventListener() { },
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() { },
    Date() { },
    screen: {},
    setTimeout() { },
    clearTimeout() { },
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function r() {
    const e = "undefined" != typeof window ? window : {};
    return t(e, a), e;
  }
  function n(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function l() {
    return Date.now();
  }
  function o(e, t) {
    void 0 === t && (t = "x");
    const s = r();
    let i, a, n;
    const l = (function (e) {
      const t = r();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((a = l.transform || l.webkitTransform),
          a.split(",").length > 6 &&
          (a = a
            .split(", ")
            .map((e) => e.replace(",", "."))
            .join(", ")),
          (n = new s.WebKitCSSMatrix("none" === a ? "" : a)))
        : ((n =
          l.MozTransform ||
          l.OTransform ||
          l.MsTransform ||
          l.msTransform ||
          l.transform ||
          l
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = n.toString().split(","))),
      "x" === t &&
      (a = s.WebKitCSSMatrix
        ? n.m41
        : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      "y" === t &&
      (a = s.WebKitCSSMatrix
        ? n.m42
        : 16 === i.length
          ? parseFloat(i[13])
          : parseFloat(i[5])),
      a || 0
    );
  }
  function d(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function p() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
      const a = i < 0 || arguments.length <= i ? void 0 : arguments[i];
      if (
        null != a &&
        ((s = a),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? s instanceof HTMLElement
            : s && (1 === s.nodeType || 11 === s.nodeType)))
      ) {
        const s = Object.keys(Object(a)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, i = s.length; t < i; t += 1) {
          const i = s[t],
            r = Object.getOwnPropertyDescriptor(a, i);
          void 0 !== r &&
            r.enumerable &&
            (d(e[i]) && d(a[i])
              ? a[i].__swiper__
                ? (e[i] = a[i])
                : p(e[i], a[i])
              : !d(e[i]) && d(a[i])
                ? ((e[i] = {}), a[i].__swiper__ ? (e[i] = a[i]) : p(e[i], a[i]))
                : (e[i] = a[i]));
        }
      }
    }
    var s;
    return e;
  }
  function c(e, t, s) {
    e.style.setProperty(t, s);
  }
  function u(e) {
    let { swiper: t, targetPosition: s, side: i } = e;
    const a = r(),
      n = -t.translate;
    let l,
      o = null;
    const d = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      a.cancelAnimationFrame(t.cssModeFrameID);
    const p = s > n ? "next" : "prev",
      c = (e, t) => ("next" === p && e >= t) || ("prev" === p && e <= t),
      u = () => {
        (l = new Date().getTime()), null === o && (o = l);
        const e = Math.max(Math.min((l - o) / d, 1), 0),
          r = 0.5 - Math.cos(e * Math.PI) / 2;
        let p = n + r * (s - n);
        if ((c(p, s) && (p = s), t.wrapperEl.scrollTo({ [i]: p }), c(p, s)))
          return (
            (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [i]: p });
            }),
            void a.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = a.requestAnimationFrame(u);
      };
    u();
  }
  function m(e) {
    return (
      e.querySelector(".swiper-slide-transform") ||
      (e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform")) ||
      e
    );
  }
  function h(e, t) {
    return (
      void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
    );
  }
  function f(e, t) {
    void 0 === t && (t = []);
    const s = document.createElement(e);
    return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
  }
  function g(e) {
    const t = r(),
      s = i(),
      a = e.getBoundingClientRect(),
      n = s.body,
      l = e.clientTop || n.clientTop || 0,
      o = e.clientLeft || n.clientLeft || 0,
      d = e === t ? t.scrollY : e.scrollTop,
      p = e === t ? t.scrollX : e.scrollLeft;
    return { top: a.top + d - l, left: a.left + p - o };
  }
  function v(e, t) {
    return r().getComputedStyle(e, null).getPropertyValue(t);
  }
  function w(e) {
    let t,
      s = e;
    if (s) {
      for (t = 0; null !== (s = s.previousSibling);)
        1 === s.nodeType && (t += 1);
      return t;
    }
  }
  function b(e, t) {
    const s = [];
    let i = e.parentElement;
    for (; i;)
      t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement);
    return s;
  }
  function y(e, t) {
    t &&
      e.addEventListener("transitionend", function s(i) {
        i.target === e &&
          (t.call(e, i), e.removeEventListener("transitionend", s));
      });
  }
  function x(e, t, s) {
    const i = r();
    return s
      ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
      parseFloat(
        i
          .getComputedStyle(e, null)
          .getPropertyValue("width" === t ? "margin-right" : "margin-top")
      ) +
      parseFloat(
        i
          .getComputedStyle(e, null)
          .getPropertyValue("width" === t ? "margin-left" : "margin-bottom")
      )
      : e.offsetWidth;
  }
  let E, S, T;
  function M() {
    return (
      E ||
      (E = (function () {
        const e = r(),
          t = i();
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
      })()),
      E
    );
  }
  function C(e) {
    return (
      void 0 === e && (e = {}),
      S ||
      (S = (function (e) {
        let { userAgent: t } = void 0 === e ? {} : e;
        const s = M(),
          i = r(),
          a = i.navigator.platform,
          n = t || i.navigator.userAgent,
          l = { ios: !1, android: !1 },
          o = i.screen.width,
          d = i.screen.height,
          p = n.match(/(Android);?[\s\/]+([\d.]+)?/);
        let c = n.match(/(iPad).*OS\s([\d_]+)/);
        const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
          m = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          h = "Win32" === a;
        let f = "MacIntel" === a;
        return (
          !c &&
          f &&
          s.touch &&
          [
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
          ].indexOf(`${o}x${d}`) >= 0 &&
          ((c = n.match(/(Version)\/([\d.]+)/)),
            c || (c = [0, 1, "13_0_0"]),
            (f = !1)),
          p && !h && ((l.os = "android"), (l.android = !0)),
          (c || m || u) && ((l.os = "ios"), (l.ios = !0)),
          l
        );
      })(e)),
      S
    );
  }
  function P() {
    return (
      T ||
      (T = (function () {
        const e = r();
        let t = !1;
        function s() {
          const t = e.navigator.userAgent.toLowerCase();
          return (
            t.indexOf("safari") >= 0 &&
            t.indexOf("chrome") < 0 &&
            t.indexOf("android") < 0
          );
        }
        if (s()) {
          const s = String(e.navigator.userAgent);
          if (s.includes("Version/")) {
            const [e, i] = s
              .split("Version/")[1]
              .split(" ")[0]
              .split(".")
              .map((e) => Number(e));
            t = e < 16 || (16 === e && i < 2);
          }
        }
        return {
          isSafari: t || s(),
          needPerspectiveFix: t,
          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
            e.navigator.userAgent
          ),
        };
      })()),
      T
    );
  }
  var z = {
    on(e, t, s) {
      const i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof t) return i;
      const a = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][a](t);
        }),
        i
      );
    },
    once(e, t, s) {
      const i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof t) return i;
      function a() {
        i.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
          r[n] = arguments[n];
        t.apply(i, r);
      }
      return (a.__emitterProxy = t), i.on(e, a, s);
    },
    onAny(e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      const i = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return !s.eventsListeners || s.destroyed
        ? s
        : s.eventsListeners
          ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
              s.eventsListeners[e].forEach((i, a) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  s.eventsListeners[e].splice(a, 1);
              });
          }),
            s)
          : s;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      let t, s, i;
      for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++)
        r[n] = arguments[n];
      "string" == typeof r[0] || Array.isArray(r[0])
        ? ((t = r[0]), (s = r.slice(1, r.length)), (i = e))
        : ((t = r[0].events), (s = r[0].data), (i = r[0].context || e)),
        s.unshift(i);
      return (
        (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(i, [t, ...s]);
            }),
            e.eventsListeners &&
            e.eventsListeners[t] &&
            e.eventsListeners[t].forEach((e) => {
              e.apply(i, s);
            });
        }),
        e
      );
    },
  };
  const L = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const s = t.closest(
      e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
    );
    if (s) {
      const t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
      t && t.remove();
    }
  },
    k = (e, t) => {
      if (!e.slides[t]) return;
      const s = e.slides[t].querySelector('[loading="lazy"]');
      s && s.removeAttribute("loading");
    },
    A = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const s = e.slides.length;
      if (!s || !t || t < 0) return;
      t = Math.min(t, s);
      const i =
        "auto" === e.params.slidesPerView
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
        a = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        const s = a,
          r = [s - t];
        return (
          r.push(...Array.from({ length: t }).map((e, t) => s + i + t)),
          void e.slides.forEach((t, s) => {
            r.includes(t.column) && k(e, s);
          })
        );
      }
      const r = a + i - 1;
      if (e.params.rewind || e.params.loop)
        for (let i = a - t; i <= r + t; i += 1) {
          const t = ((i % s) + s) % s;
          (t < a || t > r) && k(e, t);
        }
      else
        for (let i = Math.max(a - t, 0); i <= Math.min(r + t, s - 1); i += 1)
          i !== a && (i > r || i < a) && k(e, i);
    };
  var $ = {
    updateSize: function () {
      const e = this;
      let t, s;
      const i = e.el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : i.clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : i.clientHeight),
        (0 === t && e.isHorizontal()) ||
        (0 === s && e.isVertical()) ||
        ((t =
          t -
          parseInt(v(i, "padding-left") || 0, 10) -
          parseInt(v(i, "padding-right") || 0, 10)),
          (s =
            s -
            parseInt(v(i, "padding-top") || 0, 10) -
            parseInt(v(i, "padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[t];
      }
      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }
      const i = e.params,
        {
          wrapperEl: a,
          slidesEl: r,
          size: n,
          rtlTranslate: l,
          wrongRTL: o,
        } = e,
        d = e.virtual && i.virtual.enabled,
        p = d ? e.virtual.slides.length : e.slides.length,
        u = h(r, `.${e.params.slideClass}, swiper-slide`),
        m = d ? e.virtual.slides.length : u.length;
      let f = [];
      const g = [],
        w = [];
      let b = i.slidesOffsetBefore;
      "function" == typeof b && (b = i.slidesOffsetBefore.call(e));
      let y = i.slidesOffsetAfter;
      "function" == typeof y && (y = i.slidesOffsetAfter.call(e));
      const E = e.snapGrid.length,
        S = e.slidesGrid.length;
      let T = i.spaceBetween,
        M = -b,
        C = 0,
        P = 0;
      if (void 0 === n) return;
      "string" == typeof T && T.indexOf("%") >= 0
        ? (T = (parseFloat(T.replace("%", "")) / 100) * n)
        : "string" == typeof T && (T = parseFloat(T)),
        (e.virtualSize = -T),
        u.forEach((e) => {
          l ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
            (e.style.marginBottom = ""),
            (e.style.marginTop = "");
        }),
        i.centeredSlides &&
        i.cssMode &&
        (c(a, "--swiper-centered-offset-before", ""),
          c(a, "--swiper-centered-offset-after", ""));
      const z = i.grid && i.grid.rows > 1 && e.grid;
      let L;
      z && e.grid.initSlides(m);
      const k =
        "auto" === i.slidesPerView &&
        i.breakpoints &&
        Object.keys(i.breakpoints).filter(
          (e) => void 0 !== i.breakpoints[e].slidesPerView
        ).length > 0;
      for (let a = 0; a < m; a += 1) {
        let r;
        if (
          ((L = 0),
            u[a] && (r = u[a]),
            z && e.grid.updateSlide(a, r, m, t),
            !u[a] || "none" !== v(r, "display"))
        ) {
          if ("auto" === i.slidesPerView) {
            k && (u[a].style[t("width")] = "");
            const n = getComputedStyle(r),
              l = r.style.transform,
              o = r.style.webkitTransform;
            if (
              (l && (r.style.transform = "none"),
                o && (r.style.webkitTransform = "none"),
                i.roundLengths)
            )
              L = e.isHorizontal() ? x(r, "width", !0) : x(r, "height", !0);
            else {
              const e = s(n, "width"),
                t = s(n, "padding-left"),
                i = s(n, "padding-right"),
                a = s(n, "margin-left"),
                l = s(n, "margin-right"),
                o = n.getPropertyValue("box-sizing");
              if (o && "border-box" === o) L = e + a + l;
              else {
                const { clientWidth: s, offsetWidth: n } = r;
                L = e + t + i + a + l + (n - s);
              }
            }
            l && (r.style.transform = l),
              o && (r.style.webkitTransform = o),
              i.roundLengths && (L = Math.floor(L));
          } else
            (L = (n - (i.slidesPerView - 1) * T) / i.slidesPerView),
              i.roundLengths && (L = Math.floor(L)),
              u[a] && (u[a].style[t("width")] = `${L}px`);
          u[a] && (u[a].swiperSlideSize = L),
            w.push(L),
            i.centeredSlides
              ? ((M = M + L / 2 + C / 2 + T),
                0 === C && 0 !== a && (M = M - n / 2 - T),
                0 === a && (M = M - n / 2 - T),
                Math.abs(M) < 0.001 && (M = 0),
                i.roundLengths && (M = Math.floor(M)),
                P % i.slidesPerGroup == 0 && f.push(M),
                g.push(M))
              : (i.roundLengths && (M = Math.floor(M)),
                (P - Math.min(e.params.slidesPerGroupSkip, P)) %
                e.params.slidesPerGroup ==
                0 && f.push(M),
                g.push(M),
                (M = M + L + T)),
            (e.virtualSize += L + T),
            (C = L),
            (P += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, n) + y),
          l &&
          o &&
          ("slide" === i.effect || "coverflow" === i.effect) &&
          (a.style.width = `${e.virtualSize + T}px`),
          i.setWrapperSize && (a.style[t("width")] = `${e.virtualSize + T}px`),
          z && e.grid.updateWrapperSize(L, f, t),
          !i.centeredSlides)
      ) {
        const t = [];
        for (let s = 0; s < f.length; s += 1) {
          let a = f[s];
          i.roundLengths && (a = Math.floor(a)),
            f[s] <= e.virtualSize - n && t.push(a);
        }
        (f = t),
          Math.floor(e.virtualSize - n) - Math.floor(f[f.length - 1]) > 1 &&
          f.push(e.virtualSize - n);
      }
      if (d && i.loop) {
        const t = w[0] + T;
        if (i.slidesPerGroup > 1) {
          const s = Math.ceil(
            (e.virtual.slidesBefore + e.virtual.slidesAfter) /
            i.slidesPerGroup
          ),
            a = t * i.slidesPerGroup;
          for (let e = 0; e < s; e += 1) f.push(f[f.length - 1] + a);
        }
        for (
          let s = 0;
          s < e.virtual.slidesBefore + e.virtual.slidesAfter;
          s += 1
        )
          1 === i.slidesPerGroup && f.push(f[f.length - 1] + t),
            g.push(g[g.length - 1] + t),
            (e.virtualSize += t);
      }
      if ((0 === f.length && (f = [0]), 0 !== T)) {
        const s = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
        u.filter(
          (e, t) => !(i.cssMode && !i.loop) || t !== u.length - 1
        ).forEach((e) => {
          e.style[s] = `${T}px`;
        });
      }
      if (i.centeredSlides && i.centeredSlidesBounds) {
        let e = 0;
        w.forEach((t) => {
          e += t + (T || 0);
        }),
          (e -= T);
        const t = e - n;
        f = f.map((e) => (e <= 0 ? -b : e > t ? t + y : e));
      }
      if (i.centerInsufficientSlides) {
        let e = 0;
        if (
          (w.forEach((t) => {
            e += t + (T || 0);
          }),
            (e -= T),
            e < n)
        ) {
          const t = (n - e) / 2;
          f.forEach((e, s) => {
            f[s] = e - t;
          }),
            g.forEach((e, s) => {
              g[s] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: u,
          snapGrid: f,
          slidesGrid: g,
          slidesSizesGrid: w,
        }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
      ) {
        c(a, "--swiper-centered-offset-before", -f[0] + "px"),
          c(
            a,
            "--swiper-centered-offset-after",
            e.size / 2 - w[w.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      if (
        (m !== p && e.emit("slidesLengthChange"),
          f.length !== E &&
          (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          g.length !== S && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(d || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
      ) {
        const t = `${i.containerModifierClass}backface-hidden`,
          s = e.el.classList.contains(t);
        m <= i.maxBackfaceHiddenSlides
          ? s || e.el.classList.add(t)
          : s && e.el.classList.remove(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        i = t.virtual && t.params.virtual.enabled;
      let a,
        r = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const n = (e) => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || []).forEach((e) => {
            s.push(e);
          });
        else
          for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
            const e = t.activeIndex + a;
            if (e > t.slides.length && !i) break;
            s.push(n(e));
          }
      else s.push(n(t.activeIndex));
      for (a = 0; a < s.length; a += 1)
        if (void 0 !== s[a]) {
          const e = s[a].offsetHeight;
          r = e > r ? e : r;
        }
      (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides,
        s = e.isElement
          ? e.isHorizontal()
            ? e.wrapperEl.offsetLeft
            : e.wrapperEl.offsetTop
          : 0;
      for (let i = 0; i < t.length; i += 1)
        t[i].swiperSlideOffset =
          (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
          s -
          e.cssOverflowAdjustment();
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        s = t.params,
        { slides: i, rtlTranslate: a, snapGrid: r } = t;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      let n = -e;
      a && (n = e),
        i.forEach((e) => {
          e.classList.remove(s.slideVisibleClass);
        }),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      let l = s.spaceBetween;
      "string" == typeof l && l.indexOf("%") >= 0
        ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
        : "string" == typeof l && (l = parseFloat(l));
      for (let e = 0; e < i.length; e += 1) {
        const o = i[e];
        let d = o.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
        const p =
          (n + (s.centeredSlides ? t.minTranslate() : 0) - d) /
          (o.swiperSlideSize + l),
          c =
            (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) /
            (o.swiperSlideSize + l),
          u = -(n - d),
          m = u + t.slidesSizesGrid[e];
        ((u >= 0 && u < t.size - 1) ||
          (m > 1 && m <= t.size) ||
          (u <= 0 && m >= t.size)) &&
          (t.visibleSlides.push(o),
            t.visibleSlidesIndexes.push(e),
            i[e].classList.add(s.slideVisibleClass)),
          (o.progress = a ? -p : p),
          (o.originalProgress = a ? -c : c);
      }
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        i = t.maxTranslate() - t.minTranslate();
      let { progress: a, isBeginning: r, isEnd: n, progressLoop: l } = t;
      const o = r,
        d = n;
      if (0 === i) (a = 0), (r = !0), (n = !0);
      else {
        a = (e - t.minTranslate()) / i;
        const s = Math.abs(e - t.minTranslate()) < 1,
          l = Math.abs(e - t.maxTranslate()) < 1;
        (r = s || a <= 0), (n = l || a >= 1), s && (a = 0), l && (a = 1);
      }
      if (s.loop) {
        const s = t.getSlideIndexByData(0),
          i = t.getSlideIndexByData(t.slides.length - 1),
          a = t.slidesGrid[s],
          r = t.slidesGrid[i],
          n = t.slidesGrid[t.slidesGrid.length - 1],
          o = Math.abs(e);
        (l = o >= a ? (o - a) / n : (o + n - r) / n), l > 1 && (l -= 1);
      }
      Object.assign(t, {
        progress: a,
        progressLoop: l,
        isBeginning: r,
        isEnd: n,
      }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
        t.updateSlidesProgress(e),
        r && !o && t.emit("reachBeginning toEdge"),
        n && !d && t.emit("reachEnd toEdge"),
        ((o && !r) || (d && !n)) && t.emit("fromEdge"),
        t.emit("progress", a);
    },
    updateSlidesClasses: function () {
      const e = this,
        { slides: t, params: s, slidesEl: i, activeIndex: a } = e,
        r = e.virtual && s.virtual.enabled,
        n = (e) => h(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
      let l;
      if (
        (t.forEach((e) => {
          e.classList.remove(
            s.slideActiveClass,
            s.slideNextClass,
            s.slidePrevClass
          );
        }),
          r)
      )
        if (s.loop) {
          let t = a - e.virtual.slidesBefore;
          t < 0 && (t = e.virtual.slides.length + t),
            t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
            (l = n(`[data-swiper-slide-index="${t}"]`));
        } else l = n(`[data-swiper-slide-index="${a}"]`);
      else l = t[a];
      if (l) {
        l.classList.add(s.slideActiveClass);
        let e = (function (e, t) {
          const s = [];
          for (; e.nextElementSibling;) {
            const i = e.nextElementSibling;
            t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
          }
          return s;
        })(l, `.${s.slideClass}, swiper-slide`)[0];
        s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
        let i = (function (e, t) {
          const s = [];
          for (; e.previousElementSibling;) {
            const i = e.previousElementSibling;
            t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
          }
          return s;
        })(l, `.${s.slideClass}, swiper-slide`)[0];
        s.loop && 0 === !i && (i = t[t.length - 1]),
          i && i.classList.add(s.slidePrevClass);
      }
      e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          snapGrid: i,
          params: a,
          activeIndex: r,
          realIndex: n,
          snapIndex: l,
        } = t;
      let o,
        d = e;
      const p = (e) => {
        let s = e - t.virtual.slidesBefore;
        return (
          s < 0 && (s = t.virtual.slides.length + s),
          s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
          s
        );
      };
      if (
        (void 0 === d &&
          (d = (function (e) {
            const { slidesGrid: t, params: s } = e,
              i = e.rtlTranslate ? e.translate : -e.translate;
            let a;
            for (let e = 0; e < t.length; e += 1)
              void 0 !== t[e + 1]
                ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                  ? (a = e)
                  : i >= t[e] && i < t[e + 1] && (a = e + 1)
                : i >= t[e] && (a = e);
            return (
              s.normalizeSlideIndex && (a < 0 || void 0 === a) && (a = 0), a
            );
          })(t)),
          i.indexOf(s) >= 0)
      )
        o = i.indexOf(s);
      else {
        const e = Math.min(a.slidesPerGroupSkip, d);
        o = e + Math.floor((d - e) / a.slidesPerGroup);
      }
      if ((o >= i.length && (o = i.length - 1), d === r))
        return (
          o !== l && ((t.snapIndex = o), t.emit("snapIndexChange")),
          void (
            t.params.loop &&
            t.virtual &&
            t.params.virtual.enabled &&
            (t.realIndex = p(d))
          )
        );
      let c;
      (c =
        t.virtual && a.virtual.enabled && a.loop
          ? p(d)
          : t.slides[d]
            ? parseInt(
              t.slides[d].getAttribute("data-swiper-slide-index") || d,
              10
            )
            : d),
        Object.assign(t, {
          previousSnapIndex: l,
          snapIndex: o,
          previousRealIndex: n,
          realIndex: c,
          previousIndex: r,
          activeIndex: d,
        }),
        t.initialized && A(t),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        n !== c && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        s = t.params,
        i = e.closest(`.${s.slideClass}, swiper-slide`);
      let a,
        r = !1;
      if (i)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === i) {
            (r = !0), (a = e);
            break;
          }
      if (!i || !r)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = i),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10
          ))
          : (t.clickedIndex = a),
        s.slideToClickedSlide &&
        void 0 !== t.clickedIndex &&
        t.clickedIndex !== t.activeIndex &&
        t.slideToClickedSlide();
    },
  };
  var I = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const { params: t, rtlTranslate: s, translate: i, wrapperEl: a } = this;
      if (t.virtualTranslate) return s ? -i : i;
      if (t.cssMode) return i;
      let r = o(a, e);
      return (r += this.cssOverflowAdjustment()), s && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        { rtlTranslate: i, params: a, wrapperEl: r, progress: n } = s;
      let l,
        o = 0,
        d = 0;
      s.isHorizontal() ? (o = i ? -e : e) : (d = e),
        a.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? o : d),
        a.cssMode
          ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
            ? -o
            : -d)
          : a.virtualTranslate ||
          (s.isHorizontal()
            ? (o -= s.cssOverflowAdjustment())
            : (d -= s.cssOverflowAdjustment()),
            (r.style.transform = `translate3d(${o}px, ${d}px, 0px)`));
      const p = s.maxTranslate() - s.minTranslate();
      (l = 0 === p ? 0 : (e - s.minTranslate()) / p),
        l !== n && s.updateProgress(e),
        s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, s, i, a) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        void 0 === i && (i = !0);
      const r = this,
        { params: n, wrapperEl: l } = r;
      if (r.animating && n.preventInteractionOnTransition) return !1;
      const o = r.minTranslate(),
        d = r.maxTranslate();
      let p;
      if (
        ((p = i && e > o ? o : i && e < d ? d : e),
          r.updateProgress(p),
          n.cssMode)
      ) {
        const e = r.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -p;
        else {
          if (!r.support.smoothScroll)
            return (
              u({ swiper: r, targetPosition: -p, side: e ? "left" : "top" }), !0
            );
          l.scrollTo({ [e ? "left" : "top"]: -p, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(p),
            s &&
            (r.emit("beforeTransitionStart", t, a), r.emit("transitionEnd")))
          : (r.setTransition(t),
            r.setTranslate(p),
            s &&
            (r.emit("beforeTransitionStart", t, a),
              r.emit("transitionStart")),
            r.animating ||
            ((r.animating = !0),
              r.onTranslateToWrapperTransitionEnd ||
              (r.onTranslateToWrapperTransitionEnd = function (e) {
                r &&
                  !r.destroyed &&
                  e.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                    (r.onTranslateToWrapperTransitionEnd = null),
                    delete r.onTranslateToWrapperTransitionEnd,
                    s && r.emit("transitionEnd"));
              }),
              r.wrapperEl.addEventListener(
                "transitionend",
                r.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function O(e) {
    let { swiper: t, runCallbacks: s, direction: i, step: a } = e;
    const { activeIndex: r, previousIndex: n } = t;
    let l = i;
    if (
      (l || (l = r > n ? "next" : r < n ? "prev" : "reset"),
        t.emit(`transition${a}`),
        s && r !== n)
    ) {
      if ("reset" === l) return void t.emit(`slideResetTransition${a}`);
      t.emit(`slideChangeTransition${a}`),
        "next" === l
          ? t.emit(`slideNextTransition${a}`)
          : t.emit(`slidePrevTransition${a}`);
    }
  }
  var D = {
    slideTo: function (e, t, s, i, a) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        "string" == typeof e && (e = parseInt(e, 10));
      const r = this;
      let n = e;
      n < 0 && (n = 0);
      const {
        params: l,
        snapGrid: o,
        slidesGrid: d,
        previousIndex: p,
        activeIndex: c,
        rtlTranslate: m,
        wrapperEl: h,
        enabled: f,
      } = r;
      if ((r.animating && l.preventInteractionOnTransition) || (!f && !i && !a))
        return !1;
      const g = Math.min(r.params.slidesPerGroupSkip, n);
      let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
      v >= o.length && (v = o.length - 1);
      const w = -o[v];
      if (l.normalizeSlideIndex)
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * w),
            s = Math.floor(100 * d[e]),
            i = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= s && t < i - (i - s) / 2
              ? (n = e)
              : t >= s && t < i && (n = e + 1)
            : t >= s && (n = e);
        }
      if (r.initialized && n !== c) {
        if (
          !r.allowSlideNext &&
          (m
            ? w > r.translate && w > r.minTranslate()
            : w < r.translate && w < r.minTranslate())
        )
          return !1;
        if (
          !r.allowSlidePrev &&
          w > r.translate &&
          w > r.maxTranslate() &&
          (c || 0) !== n
        )
          return !1;
      }
      let b;
      if (
        (n !== (p || 0) && s && r.emit("beforeSlideChangeStart"),
          r.updateProgress(w),
          (b = n > c ? "next" : n < c ? "prev" : "reset"),
          (m && -w === r.translate) || (!m && w === r.translate))
      )
        return (
          r.updateActiveIndex(n),
          l.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          "slide" !== l.effect && r.setTranslate(w),
          "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
          !1
        );
      if (l.cssMode) {
        const e = r.isHorizontal(),
          s = m ? w : -w;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t &&
            ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
            t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
              ? ((r._cssModeVirtualInitialSet = !0),
                requestAnimationFrame(() => {
                  h[e ? "scrollLeft" : "scrollTop"] = s;
                }))
              : (h[e ? "scrollLeft" : "scrollTop"] = s),
            t &&
            requestAnimationFrame(() => {
              (r.wrapperEl.style.scrollSnapType = ""),
                (r._immediateVirtual = !1);
            });
        } else {
          if (!r.support.smoothScroll)
            return (
              u({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0
            );
          h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
        }
        return !0;
      }
      return (
        r.setTransition(t),
        r.setTranslate(w),
        r.updateActiveIndex(n),
        r.updateSlidesClasses(),
        r.emit("beforeTransitionStart", t, i),
        r.transitionStart(s, b),
        0 === t
          ? r.transitionEnd(s, b)
          : r.animating ||
          ((r.animating = !0),
            r.onSlideToWrapperTransitionEnd ||
            (r.onSlideToWrapperTransitionEnd = function (e) {
              r &&
                !r.destroyed &&
                e.target === this &&
                (r.wrapperEl.removeEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(s, b));
            }),
            r.wrapperEl.addEventListener(
              "transitionend",
              r.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e, t, s, i) {
      if (
        (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "string" == typeof e)
      ) {
        e = parseInt(e, 10);
      }
      const a = this;
      let r = e;
      return (
        a.params.loop &&
        (a.virtual && a.params.virtual.enabled
          ? (r += a.virtual.slidesBefore)
          : (r = a.getSlideIndexByData(r))),
        a.slideTo(r, t, s, i)
      );
    },
    slideNext: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const i = this,
        { enabled: a, params: r, animating: n } = i;
      if (!a) return i;
      let l = r.slidesPerGroup;
      "auto" === r.slidesPerView &&
        1 === r.slidesPerGroup &&
        r.slidesPerGroupAuto &&
        (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
      const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : l,
        d = i.virtual && r.virtual.enabled;
      if (r.loop) {
        if (n && !d && r.loopPreventsSliding) return !1;
        i.loopFix({ direction: "next" }),
          (i._clientLeft = i.wrapperEl.clientLeft);
      }
      return r.rewind && i.isEnd
        ? i.slideTo(0, e, t, s)
        : i.slideTo(i.activeIndex + o, e, t, s);
    },
    slidePrev: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const i = this,
        {
          params: a,
          snapGrid: r,
          slidesGrid: n,
          rtlTranslate: l,
          enabled: o,
          animating: d,
        } = i;
      if (!o) return i;
      const p = i.virtual && a.virtual.enabled;
      if (a.loop) {
        if (d && !p && a.loopPreventsSliding) return !1;
        i.loopFix({ direction: "prev" }),
          (i._clientLeft = i.wrapperEl.clientLeft);
      }
      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const u = c(l ? i.translate : -i.translate),
        m = r.map((e) => c(e));
      let h = r[m.indexOf(u) - 1];
      if (void 0 === h && a.cssMode) {
        let e;
        r.forEach((t, s) => {
          u >= t && (e = s);
        }),
          void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
      }
      let f = 0;
      if (
        (void 0 !== h &&
          ((f = n.indexOf(h)),
            f < 0 && (f = i.activeIndex - 1),
            "auto" === a.slidesPerView &&
            1 === a.slidesPerGroup &&
            a.slidesPerGroupAuto &&
            ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0)))),
          a.rewind && i.isBeginning)
      ) {
        const a =
          i.params.virtual && i.params.virtual.enabled && i.virtual
            ? i.virtual.slides.length - 1
            : i.slides.length - 1;
        return i.slideTo(a, e, t, s);
      }
      return i.slideTo(f, e, t, s);
    },
    slideReset: function (e, t, s) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, s)
      );
    },
    slideToClosest: function (e, t, s, i) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === i && (i = 0.5);
      const a = this;
      let r = a.activeIndex;
      const n = Math.min(a.params.slidesPerGroupSkip, r),
        l = n + Math.floor((r - n) / a.params.slidesPerGroup),
        o = a.rtlTranslate ? a.translate : -a.translate;
      if (o >= a.snapGrid[l]) {
        const e = a.snapGrid[l];
        o - e > (a.snapGrid[l + 1] - e) * i && (r += a.params.slidesPerGroup);
      } else {
        const e = a.snapGrid[l - 1];
        o - e <= (a.snapGrid[l] - e) * i && (r -= a.params.slidesPerGroup);
      }
      return (
        (r = Math.max(r, 0)),
        (r = Math.min(r, a.slidesGrid.length - 1)),
        a.slideTo(r, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, slidesEl: s } = e,
        i =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let a,
        r = e.clickedIndex;
      const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
      if (t.loop) {
        if (e.animating) return;
        (a = parseInt(
          e.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        )),
          t.centeredSlides
            ? r < e.loopedSlides - i / 2 ||
              r > e.slides.length - e.loopedSlides + i / 2
              ? (e.loopFix(),
                (r = e.getSlideIndex(
                  h(s, `${l}[data-swiper-slide-index="${a}"]`)[0]
                )),
                n(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - i
              ? (e.loopFix(),
                (r = e.getSlideIndex(
                  h(s, `${l}[data-swiper-slide-index="${a}"]`)[0]
                )),
                n(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
      } else e.slideTo(r);
    },
  };
  var _ = {
    loopCreate: function (e) {
      const t = this,
        { params: s, slidesEl: i } = t;
      if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
      h(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
        e.setAttribute("data-swiper-slide-index", t);
      }),
        t.loopFix({
          slideRealIndex: e,
          direction: s.centeredSlides ? void 0 : "next",
        });
    },
    loopFix: function (e) {
      let {
        slideRealIndex: t,
        slideTo: s = !0,
        direction: i,
        setTranslate: a,
        activeSlideIndex: r,
        byController: n,
        byMousewheel: l,
      } = void 0 === e ? {} : e;
      const o = this;
      if (!o.params.loop) return;
      o.emit("beforeLoopFix");
      const {
        slides: d,
        allowSlidePrev: p,
        allowSlideNext: c,
        slidesEl: u,
        params: m,
      } = o;
      if (
        ((o.allowSlidePrev = !0),
          (o.allowSlideNext = !0),
          o.virtual && m.virtual.enabled)
      )
        return (
          s &&
          (m.centeredSlides || 0 !== o.snapIndex
            ? m.centeredSlides && o.snapIndex < m.slidesPerView
              ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
              : o.snapIndex === o.snapGrid.length - 1 &&
              o.slideTo(o.virtual.slidesBefore, 0, !1, !0)
            : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
          (o.allowSlidePrev = p),
          (o.allowSlideNext = c),
          void o.emit("loopFix")
        );
      const h =
        "auto" === m.slidesPerView
          ? o.slidesPerViewDynamic()
          : Math.ceil(parseFloat(m.slidesPerView, 10));
      let f = m.loopedSlides || h;
      f % m.slidesPerGroup != 0 &&
        (f += m.slidesPerGroup - (f % m.slidesPerGroup)),
        (o.loopedSlides = f);
      const g = [],
        v = [];
      let w = o.activeIndex;
      void 0 === r
        ? (r = o.getSlideIndex(
          o.slides.filter((e) => e.classList.contains(m.slideActiveClass))[0]
        ))
        : (w = r);
      const b = "next" === i || !i,
        y = "prev" === i || !i;
      let x = 0,
        E = 0;
      if (r < f) {
        x = Math.max(f - r, m.slidesPerGroup);
        for (let e = 0; e < f - r; e += 1) {
          const t = e - Math.floor(e / d.length) * d.length;
          g.push(d.length - t - 1);
        }
      } else if (r > o.slides.length - 2 * f) {
        E = Math.max(r - (o.slides.length - 2 * f), m.slidesPerGroup);
        for (let e = 0; e < E; e += 1) {
          const t = e - Math.floor(e / d.length) * d.length;
          v.push(t);
        }
      }
      if (
        (y &&
          g.forEach((e) => {
            (o.slides[e].swiperLoopMoveDOM = !0),
              u.prepend(o.slides[e]),
              (o.slides[e].swiperLoopMoveDOM = !1);
          }),
          b &&
          v.forEach((e) => {
            (o.slides[e].swiperLoopMoveDOM = !0),
              u.append(o.slides[e]),
              (o.slides[e].swiperLoopMoveDOM = !1);
          }),
          o.recalcSlides(),
          "auto" === m.slidesPerView && o.updateSlides(),
          m.watchSlidesProgress && o.updateSlidesOffset(),
          s)
      )
        if (g.length > 0 && y)
          if (void 0 === t) {
            const e = o.slidesGrid[w],
              t = o.slidesGrid[w + x] - e;
            l
              ? o.setTranslate(o.translate - t)
              : (o.slideTo(w + x, 0, !1, !0),
                a &&
                ((o.touches[o.isHorizontal() ? "startX" : "startY"] += t),
                  (o.touchEventsData.currentTranslate = o.translate)));
          } else
            a &&
              (o.slideToLoop(t, 0, !1, !0),
                (o.touchEventsData.currentTranslate = o.translate));
        else if (v.length > 0 && b)
          if (void 0 === t) {
            const e = o.slidesGrid[w],
              t = o.slidesGrid[w - E] - e;
            l
              ? o.setTranslate(o.translate - t)
              : (o.slideTo(w - E, 0, !1, !0),
                a &&
                ((o.touches[o.isHorizontal() ? "startX" : "startY"] += t),
                  (o.touchEventsData.currentTranslate = o.translate)));
          } else o.slideToLoop(t, 0, !1, !0);
      if (
        ((o.allowSlidePrev = p),
          (o.allowSlideNext = c),
          o.controller && o.controller.control && !n)
      ) {
        const e = {
          slideRealIndex: t,
          slideTo: !1,
          direction: i,
          setTranslate: a,
          activeSlideIndex: r,
          byController: !0,
        };
        Array.isArray(o.controller.control)
          ? o.controller.control.forEach((t) => {
            !t.destroyed && t.params.loop && t.loopFix(e);
          })
          : o.controller.control instanceof o.constructor &&
          o.controller.control.params.loop &&
          o.controller.control.loopFix(e);
      }
      o.emit("loopFix");
    },
    loopDestroy: function () {
      const e = this,
        { params: t, slidesEl: s } = e;
      if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
      e.recalcSlides();
      const i = [];
      e.slides.forEach((e) => {
        const t =
          void 0 === e.swiperSlideIndex
            ? 1 * e.getAttribute("data-swiper-slide-index")
            : e.swiperSlideIndex;
        i[t] = e;
      }),
        e.slides.forEach((e) => {
          e.removeAttribute("data-swiper-slide-index");
        }),
        i.forEach((e) => {
          s.append(e);
        }),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0);
    },
  };
  function G(e) {
    const t = this,
      s = i(),
      a = r(),
      n = t.touchEventsData;
    n.evCache.push(e);
    const { params: o, touches: d, enabled: p } = t;
    if (!p) return;
    if (!o.simulateTouch && "mouse" === e.pointerType) return;
    if (t.animating && o.preventInteractionOnTransition) return;
    !t.animating && o.cssMode && o.loop && t.loopFix();
    let c = e;
    c.originalEvent && (c = c.originalEvent);
    let u = c.target;
    if ("wrapper" === o.touchEventsTarget && !t.wrapperEl.contains(u)) return;
    if ("which" in c && 3 === c.which) return;
    if ("button" in c && c.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    const m = !!o.noSwipingClass && "" !== o.noSwipingClass,
      h = e.composedPath ? e.composedPath() : e.path;
    m && c.target && c.target.shadowRoot && h && (u = h[0]);
    const f = o.noSwipingSelector
      ? o.noSwipingSelector
      : `.${o.noSwipingClass}`,
      g = !(!c.target || !c.target.shadowRoot);
    if (
      o.noSwiping &&
      (g
        ? (function (e, t) {
          return (
            void 0 === t && (t = this),
            (function t(s) {
              if (!s || s === i() || s === r()) return null;
              s.assignedSlot && (s = s.assignedSlot);
              const a = s.closest(e);
              return a || s.getRootNode ? a || t(s.getRootNode().host) : null;
            })(t)
          );
        })(f, u)
        : u.closest(f))
    )
      return void (t.allowClick = !0);
    if (o.swipeHandler && !u.closest(o.swipeHandler)) return;
    (d.currentX = c.pageX), (d.currentY = c.pageY);
    const v = d.currentX,
      w = d.currentY,
      b = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
      y = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
    if (b && (v <= y || v >= a.innerWidth - y)) {
      if ("prevent" !== b) return;
      e.preventDefault();
    }
    Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (d.startX = v),
      (d.startY = w),
      (n.touchStartTime = l()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      o.threshold > 0 && (n.allowThresholdMove = !1);
    let x = !0;
    u.matches(n.focusableElements) &&
      ((x = !1), "SELECT" === u.nodeName && (n.isTouched = !1)),
      s.activeElement &&
      s.activeElement.matches(n.focusableElements) &&
      s.activeElement !== u &&
      s.activeElement.blur();
    const E = x && t.allowTouchMove && o.touchStartPreventDefault;
    (!o.touchStartForcePreventDefault && !E) ||
      u.isContentEditable ||
      c.preventDefault(),
      o.freeMode &&
      o.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !o.cssMode &&
      t.freeMode.onTouchStart(),
      t.emit("touchStart", c);
  }
  function H(e) {
    const t = i(),
      s = this,
      a = s.touchEventsData,
      { params: r, touches: n, rtlTranslate: o, enabled: d } = s;
    if (!d) return;
    if (!r.simulateTouch && "mouse" === e.pointerType) return;
    let p = e;
    if ((p.originalEvent && (p = p.originalEvent), !a.isTouched))
      return void (
        a.startMoving &&
        a.isScrolling &&
        s.emit("touchMoveOpposite", p)
      );
    const c = a.evCache.findIndex((e) => e.pointerId === p.pointerId);
    c >= 0 && (a.evCache[c] = p);
    const u = a.evCache.length > 1 ? a.evCache[0] : p,
      m = u.pageX,
      h = u.pageY;
    if (p.preventedByNestedSwiper) return (n.startX = m), void (n.startY = h);
    if (!s.allowTouchMove)
      return (
        p.target.matches(a.focusableElements) || (s.allowClick = !1),
        void (
          a.isTouched &&
          (Object.assign(n, {
            startX: m,
            startY: h,
            prevX: s.touches.currentX,
            prevY: s.touches.currentY,
            currentX: m,
            currentY: h,
          }),
            (a.touchStartTime = l()))
        )
      );
    if (r.touchReleaseOnEdges && !r.loop)
      if (s.isVertical()) {
        if (
          (h < n.startY && s.translate <= s.maxTranslate()) ||
          (h > n.startY && s.translate >= s.minTranslate())
        )
          return (a.isTouched = !1), void (a.isMoved = !1);
      } else if (
        (m < n.startX && s.translate <= s.maxTranslate()) ||
        (m > n.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      t.activeElement &&
      p.target === t.activeElement &&
      p.target.matches(a.focusableElements)
    )
      return (a.isMoved = !0), void (s.allowClick = !1);
    if (
      (a.allowTouchCallbacks && s.emit("touchMove", p),
        p.targetTouches && p.targetTouches.length > 1)
    )
      return;
    (n.currentX = m), (n.currentY = h);
    const f = n.currentX - n.startX,
      g = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold)
      return;
    if (void 0 === a.isScrolling) {
      let e;
      (s.isHorizontal() && n.currentY === n.startY) ||
        (s.isVertical() && n.currentX === n.startX)
        ? (a.isScrolling = !1)
        : f * f + g * g >= 25 &&
        ((e = (180 * Math.atan2(Math.abs(g), Math.abs(f))) / Math.PI),
          (a.isScrolling = s.isHorizontal()
            ? e > r.touchAngle
            : 90 - e > r.touchAngle));
    }
    if (
      (a.isScrolling && s.emit("touchMoveOpposite", p),
        void 0 === a.startMoving &&
        ((n.currentX === n.startX && n.currentY === n.startY) ||
          (a.startMoving = !0)),
        a.isScrolling ||
        (s.zoom &&
          s.params.zoom &&
          s.params.zoom.enabled &&
          a.evCache.length > 1))
    )
      return void (a.isTouched = !1);
    if (!a.startMoving) return;
    (s.allowClick = !1),
      !r.cssMode && p.cancelable && p.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && p.stopPropagation();
    let v = s.isHorizontal() ? f : g,
      w = s.isHorizontal()
        ? n.currentX - n.previousX
        : n.currentY - n.previousY;
    r.oneWayMovement &&
      ((v = Math.abs(v) * (o ? 1 : -1)), (w = Math.abs(w) * (o ? 1 : -1))),
      (n.diff = v),
      (v *= r.touchRatio),
      o && ((v = -v), (w = -w));
    const b = s.touchesDirection;
    (s.swipeDirection = v > 0 ? "prev" : "next"),
      (s.touchesDirection = w > 0 ? "prev" : "next");
    const y = s.params.loop && !r.cssMode;
    if (!a.isMoved) {
      if (
        (y && s.loopFix({ direction: s.swipeDirection }),
          (a.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating)
      ) {
        const e = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
        });
        s.wrapperEl.dispatchEvent(e);
      }
      (a.allowMomentumBounce = !1),
        !r.grabCursor ||
        (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
        s.setGrabCursor(!0),
        s.emit("sliderFirstMove", p);
    }
    let x;
    a.isMoved &&
      b !== s.touchesDirection &&
      y &&
      Math.abs(v) >= 1 &&
      (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }), (x = !0)),
      s.emit("sliderMove", p),
      (a.isMoved = !0),
      (a.currentTranslate = v + a.startTranslate);
    let E = !0,
      S = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (S = 0),
        v > 0
          ? (y &&
            !x &&
            a.currentTranslate >
            (r.centeredSlides
              ? s.minTranslate() - s.size / 2
              : s.minTranslate()) &&
            s.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
            a.currentTranslate > s.minTranslate() &&
            ((E = !1),
              r.resistance &&
              (a.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + a.startTranslate + v) ** S)))
          : v < 0 &&
          (y &&
            !x &&
            a.currentTranslate <
            (r.centeredSlides
              ? s.maxTranslate() + s.size / 2
              : s.maxTranslate()) &&
            s.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                s.slides.length -
                ("auto" === r.slidesPerView
                  ? s.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(r.slidesPerView, 10))),
            }),
            a.currentTranslate < s.maxTranslate() &&
            ((E = !1),
              r.resistance &&
              (a.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - a.startTranslate - v) ** S))),
        E && (p.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        a.currentTranslate < a.startTranslate &&
        (a.currentTranslate = a.startTranslate),
        !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        a.currentTranslate > a.startTranslate &&
        (a.currentTranslate = a.startTranslate),
        s.allowSlidePrev ||
        s.allowSlideNext ||
        (a.currentTranslate = a.startTranslate),
        r.threshold > 0)
    ) {
      if (!(Math.abs(v) > r.threshold || a.allowThresholdMove))
        return void (a.currentTranslate = a.startTranslate);
      if (!a.allowThresholdMove)
        return (
          (a.allowThresholdMove = !0),
          (n.startX = n.currentX),
          (n.startY = n.currentY),
          (a.currentTranslate = a.startTranslate),
          void (n.diff = s.isHorizontal()
            ? n.currentX - n.startX
            : n.currentY - n.startY)
        );
    }
    r.followFinger &&
      !r.cssMode &&
      (((r.freeMode && r.freeMode.enabled && s.freeMode) ||
        r.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
        r.freeMode &&
        r.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
        s.updateProgress(a.currentTranslate),
        s.setTranslate(a.currentTranslate));
  }
  function N(e) {
    const t = this,
      s = t.touchEventsData,
      i = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
    if (
      (i >= 0 && s.evCache.splice(i, 1),
        ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
    ) {
      if (
        !(
          "pointercancel" === e.type &&
          (t.browser.isSafari || t.browser.isWebView)
        )
      )
        return;
    }
    const {
      params: a,
      touches: r,
      rtlTranslate: o,
      slidesGrid: d,
      enabled: p,
    } = t;
    if (!p) return;
    if (!a.simulateTouch && "mouse" === e.pointerType) return;
    let c = e;
    if (
      (c.originalEvent && (c = c.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", c),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
    )
      return (
        s.isMoved && a.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    a.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const u = l(),
      m = u - s.touchStartTime;
    if (t.allowClick) {
      const e = c.path || (c.composedPath && c.composedPath());
      t.updateClickedSlide((e && e[0]) || c.target),
        t.emit("tap click", c),
        m < 300 &&
        u - s.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", c);
    }
    if (
      ((s.lastClickTime = l()),
        n(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === r.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let h;
    if (
      ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (h = a.followFinger
          ? o
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        a.cssMode)
    )
      return;
    if (a.freeMode && a.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: h });
    let f = 0,
      g = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < d.length;
      e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
    ) {
      const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      void 0 !== d[e + t]
        ? h >= d[e] && h < d[e + t] && ((f = e), (g = d[e + t] - d[e]))
        : h >= d[e] && ((f = e), (g = d[d.length - 1] - d[d.length - 2]));
    }
    let v = null,
      w = null;
    a.rewind &&
      (t.isBeginning
        ? (w =
          a.virtual && a.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
        : t.isEnd && (v = 0));
    const b = (h - d[f]) / g,
      y = f < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (m > a.longSwipesMs) {
      if (!a.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (b >= a.longSwipesRatio
          ? t.slideTo(a.rewind && t.isEnd ? v : f + y)
          : t.slideTo(f)),
        "prev" === t.swipeDirection &&
        (b > 1 - a.longSwipesRatio
          ? t.slideTo(f + y)
          : null !== w && b < 0 && Math.abs(b) > a.longSwipesRatio
            ? t.slideTo(w)
            : t.slideTo(f));
    } else {
      if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
        (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl)
        ? c.target === t.navigation.nextEl
          ? t.slideTo(f + y)
          : t.slideTo(f)
        : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : f + y),
          "prev" === t.swipeDirection && t.slideTo(null !== w ? w : f));
    }
  }
  function B() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: a, snapGrid: r } = e,
      n = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses();
    const l = n && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      l
      ? e.params.loop && !n
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0)
      : e.slideTo(e.slides.length - 1, 0, !1, !0),
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
      (e.allowSlidePrev = a),
      (e.allowSlideNext = i),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function X(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function Y() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
    if (!i) return;
    let a;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    (a = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
      a !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  function R(e) {
    const t = this;
    L(t, e.target),
      t.params.cssMode ||
      ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
      t.update();
  }
  let q = !1;
  function j() { }
  const F = (e, t) => {
    const s = i(),
      { params: a, el: r, wrapperEl: n, device: l } = e,
      o = !!a.nested,
      d = "on" === t ? "addEventListener" : "removeEventListener",
      p = t;
    r[d]("pointerdown", e.onTouchStart, { passive: !1 }),
      s[d]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
      s[d]("pointerup", e.onTouchEnd, { passive: !0 }),
      s[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
      s[d]("pointerout", e.onTouchEnd, { passive: !0 }),
      s[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
      (a.preventClicks || a.preventClicksPropagation) &&
      r[d]("click", e.onClick, !0),
      a.cssMode && n[d]("scroll", e.onScroll),
      a.updateOnWindowResize
        ? e[p](
          l.ios || l.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          B,
          !0
        )
        : e[p]("observerUpdate", B, !0),
      r[d]("load", e.onLoad, { capture: !0 });
  };
  const V = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  var W = {
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
  function U(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      const i = Object.keys(s)[0],
        a = s[i];
      "object" == typeof a && null !== a
        ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
          !0 === e[i] &&
          (e[i] = { auto: !0 }),
          i in e && "enabled" in a
            ? (!0 === e[i] && (e[i] = { enabled: !0 }),
              "object" != typeof e[i] ||
              "enabled" in e[i] ||
              (e[i].enabled = !0),
              e[i] || (e[i] = { enabled: !1 }),
              p(t, s))
            : p(t, s))
        : p(t, s);
    };
  }
  const K = {
    eventsEmitter: z,
    update: $,
    translate: I,
    transition: {
      setTransition: function (e, t) {
        const s = this;
        s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`),
          s.emit("setTransition", e, t);
      },
      transitionStart: function (e, t) {
        void 0 === e && (e = !0);
        const s = this,
          { params: i } = s;
        i.cssMode ||
          (i.autoHeight && s.updateAutoHeight(),
            O({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
      },
      transitionEnd: function (e, t) {
        void 0 === e && (e = !0);
        const s = this,
          { params: i } = s;
        (s.animating = !1),
          i.cssMode ||
          (s.setTransition(0),
            O({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
      },
    },
    slide: D,
    loop: _,
    grabCursor: {
      setGrabCursor: function (e) {
        const t = this;
        if (
          !t.params.simulateTouch ||
          (t.params.watchOverflow && t.isLocked) ||
          t.params.cssMode
        )
          return;
        const s =
          "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
        t.isElement && (t.__preventObserver__ = !0),
          (s.style.cursor = "move"),
          (s.style.cursor = e ? "grabbing" : "grab"),
          t.isElement &&
          requestAnimationFrame(() => {
            t.__preventObserver__ = !1;
          });
      },
      unsetGrabCursor: function () {
        const e = this;
        (e.params.watchOverflow && e.isLocked) ||
          e.params.cssMode ||
          (e.isElement && (e.__preventObserver__ = !0),
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = ""),
            e.isElement &&
            requestAnimationFrame(() => {
              e.__preventObserver__ = !1;
            }));
      },
    },
    events: {
      attachEvents: function () {
        const e = this,
          t = i(),
          { params: s } = e;
        (e.onTouchStart = G.bind(e)),
          (e.onTouchMove = H.bind(e)),
          (e.onTouchEnd = N.bind(e)),
          s.cssMode && (e.onScroll = Y.bind(e)),
          (e.onClick = X.bind(e)),
          (e.onLoad = R.bind(e)),
          q || (t.addEventListener("touchstart", j), (q = !0)),
          F(e, "on");
      },
      detachEvents: function () {
        F(this, "off");
      },
    },
    breakpoints: {
      setBreakpoint: function () {
        const e = this,
          { realIndex: t, initialized: s, params: i, el: a } = e,
          r = i.breakpoints;
        if (!r || (r && 0 === Object.keys(r).length)) return;
        const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
        if (!n || e.currentBreakpoint === n) return;
        const l = (n in r ? r[n] : void 0) || e.originalParams,
          o = V(e, i),
          d = V(e, l),
          c = i.enabled;
        o && !d
          ? (a.classList.remove(
            `${i.containerModifierClass}grid`,
            `${i.containerModifierClass}grid-column`
          ),
            e.emitContainerClasses())
          : !o &&
          d &&
          (a.classList.add(`${i.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === i.grid.fill)) &&
            a.classList.add(`${i.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          ["navigation", "pagination", "scrollbar"].forEach((t) => {
            if (void 0 === l[t]) return;
            const s = i[t] && i[t].enabled,
              a = l[t] && l[t].enabled;
            s && !a && e[t].disable(), !s && a && e[t].enable();
          });
        const u = l.direction && l.direction !== i.direction,
          m = i.loop && (l.slidesPerView !== i.slidesPerView || u);
        u && s && e.changeDirection(), p(e.params, l);
        const h = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          c && !h ? e.disable() : !c && h && e.enable(),
          (e.currentBreakpoint = n),
          e.emit("_beforeBreakpoint", l),
          m && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t, s) {
        if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
          return;
        let i = !1;
        const a = r(),
          n = "window" === t ? a.innerHeight : s.clientHeight,
          l = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: n * t, point: e };
            }
            return { value: e, point: e };
          });
        l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < l.length; e += 1) {
          const { point: r, value: n } = l[e];
          "window" === t
            ? a.matchMedia(`(min-width: ${n}px)`).matches && (i = r)
            : n <= s.clientWidth && (i = r);
        }
        return i || "max";
      },
    },
    checkOverflow: {
      checkOverflow: function () {
        const e = this,
          { isLocked: t, params: s } = e,
          { slidesOffsetBefore: i } = s;
        if (i) {
          const t = e.slides.length - 1,
            s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
          e.isLocked = e.size > s;
        } else e.isLocked = 1 === e.snapGrid.length;
        !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
          !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
          t && t !== e.isLocked && (e.isEnd = !1),
          t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
      },
    },
    classes: {
      addClasses: function () {
        const e = this,
          { classNames: t, params: s, rtl: i, el: a, device: r } = e,
          n = (function (e, t) {
            const s = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((i) => {
                    e[i] && s.push(t + i);
                  })
                  : "string" == typeof e && s.push(t + e);
              }),
              s
            );
          })(
            [
              "initialized",
              s.direction,
              { "free-mode": e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: i },
              { grid: s.grid && s.grid.rows > 1 },
              {
                "grid-column":
                  s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
              },
              { android: r.android },
              { ios: r.ios },
              { "css-mode": s.cssMode },
              { centered: s.cssMode && s.centeredSlides },
              { "watch-progress": s.watchSlidesProgress },
            ],
            s.containerModifierClass
          );
        t.push(...n), a.classList.add(...t), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { el: e, classNames: t } = this;
        e.classList.remove(...t), this.emitContainerClasses();
      },
    },
  },
    Z = {};
  class Q {
    constructor() {
      let e, t;
      for (var s = arguments.length, a = new Array(s), r = 0; r < s; r++)
        a[r] = arguments[r];
      1 === a.length &&
        a[0].constructor &&
        "Object" === Object.prototype.toString.call(a[0]).slice(8, -1)
        ? (t = a[0])
        : ([e, t] = a),
        t || (t = {}),
        (t = p({}, t)),
        e && !t.el && (t.el = e);
      const n = i();
      if (
        t.el &&
        "string" == typeof t.el &&
        n.querySelectorAll(t.el).length > 1
      ) {
        const e = [];
        return (
          n.querySelectorAll(t.el).forEach((s) => {
            const i = p({}, t, { el: s });
            e.push(new Q(i));
          }),
          e
        );
      }
      const l = this;
      (l.__swiper__ = !0),
        (l.support = M()),
        (l.device = C({ userAgent: t.userAgent })),
        (l.browser = P()),
        (l.eventsListeners = {}),
        (l.eventsAnyListeners = []),
        (l.modules = [...l.__modules__]),
        t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
      const o = {};
      l.modules.forEach((e) => {
        e({
          params: t,
          swiper: l,
          extendParams: U(t, o),
          on: l.on.bind(l),
          once: l.once.bind(l),
          off: l.off.bind(l),
          emit: l.emit.bind(l),
        });
      });
      const d = p({}, W, o);
      return (
        (l.params = p({}, d, Z, t)),
        (l.originalParams = p({}, l.params)),
        (l.passedParams = p({}, t)),
        l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((e) => {
          l.on(e, l.params.on[e]);
        }),
        l.params && l.params.onAny && l.onAny(l.params.onAny),
        Object.assign(l, {
          enabled: l.params.enabled,
          el: e,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === l.params.direction,
          isVertical: () => "vertical" === l.params.direction,
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
    getSlideIndex(e) {
      const { slidesEl: t, params: s } = this,
        i = w(h(t, `.${s.slideClass}, swiper-slide`)[0]);
      return w(e) - i;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.filter(
          (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
        )[0]
      );
    }
    recalcSlides() {
      const { slidesEl: e, params: t } = this;
      this.slides = h(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const i = s.minTranslate(),
        a = (s.maxTranslate() - i) * e + i;
      s.translateTo(a, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((s) => {
        const i = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const {
        params: s,
        slides: i,
        slidesGrid: a,
        slidesSizesGrid: r,
        size: n,
        activeIndex: l,
      } = this;
      let o = 1;
      if (s.centeredSlides) {
        let e,
          t = i[l] ? i[l].swiperSlideSize : 0;
        for (let s = l + 1; s < i.length; s += 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (o += 1), t > n && (e = !0));
        for (let s = l - 1; s >= 0; s -= 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (o += 1), t > n && (e = !0));
      } else if ("current" === e)
        for (let e = l + 1; e < i.length; e += 1) {
          (t ? a[e] + r[e] - a[l] < n : a[e] - a[l] < n) && (o += 1);
        }
      else
        for (let e = l - 1; e >= 0; e -= 1) {
          a[l] - a[e] < n && (o += 1);
        }
      return o;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function i() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let a;
      if (
        (s.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && L(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          s.freeMode && s.freeMode.enabled && !s.cssMode)
      )
        i(), s.autoHeight && e.updateAutoHeight();
      else {
        if (
          ("auto" === s.slidesPerView || s.slidesPerView > 1) &&
          e.isEnd &&
          !s.centeredSlides
        ) {
          const t =
            e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
          a = e.slideTo(t.length - 1, 0, !1, !0);
        } else a = e.slideTo(e.activeIndex, 0, !1, !0);
        a || i();
      }
      s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const s = this,
        i = s.params.direction;
      return (
        e || (e = "horizontal" === i ? "vertical" : "horizontal"),
        e === i ||
        ("horizontal" !== e && "vertical" !== e) ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
          s.el.classList.add(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.forEach((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && "rtl" === e) ||
        (!t.rtl && "ltr" === e) ||
        ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let s = e || t.params.el;
      if (("string" == typeof s && (s = document.querySelector(s)), !s))
        return !1;
      (s.swiper = t),
        s.parentNode &&
        s.parentNode.host &&
        "SWIPER-CONTAINER" === s.parentNode.host.nodeName &&
        (t.isElement = !0);
      const i = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let a = (() => {
        if (s && s.shadowRoot && s.shadowRoot.querySelector) {
          return s.shadowRoot.querySelector(i());
        }
        return h(s, i())[0];
      })();
      return (
        !a &&
        t.params.createElements &&
        ((a = f("div", t.params.wrapperClass)),
          s.append(a),
          h(s, `.${t.params.slideClass}`).forEach((e) => {
            a.append(e);
          })),
        Object.assign(t, {
          el: s,
          wrapperEl: a,
          slidesEl:
            t.isElement && !s.parentNode.host.slideSlots
              ? s.parentNode.host
              : a,
          hostEl: t.isElement ? s.parentNode.host : s,
          mounted: !0,
          rtl: "rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction")),
          wrongRTL: "-webkit-box" === v(a, "display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
        (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
              t.params.initialSlide + t.virtual.slidesBefore,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            )
            : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            ),
          t.params.loop && t.loopCreate(),
          t.attachEvents(),
          [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
            e.complete
              ? L(t, e)
              : e.addEventListener("load", (e) => {
                L(t, e.target);
              });
          }),
          A(t),
          (t.initialized = !0),
          A(t),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const s = this,
        { params: i, el: a, wrapperEl: r, slides: n } = s;
      return (
        void 0 === s.params ||
        s.destroyed ||
        (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          i.loop && s.loopDestroy(),
          t &&
          (s.removeClasses(),
            a.removeAttribute("style"),
            r.removeAttribute("style"),
            n &&
            n.length &&
            n.forEach((e) => {
              e.classList.remove(
                i.slideVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                e.removeAttribute("style"),
                e.removeAttribute("data-swiper-slide-index");
            })),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
          ((s.el.swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) { }
                try {
                  delete t[e];
                } catch (e) { }
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      p(Z, e);
    }
    static get extendedDefaults() {
      return Z;
    }
    static get defaults() {
      return W;
    }
    static installModule(e) {
      Q.prototype.__modules__ || (Q.prototype.__modules__ = []);
      const t = Q.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => Q.installModule(e)), Q)
        : (Q.installModule(e), Q);
    }
  }
  function J(e, t, s, i) {
    return (
      e.params.createElements &&
      Object.keys(i).forEach((a) => {
        if (!s[a] && !0 === s.auto) {
          let r = h(e.el, `.${i[a]}`)[0];
          r || ((r = f("div", i[a])), (r.className = i[a]), e.el.append(r)),
            (s[a] = r),
            (t[a] = r);
        }
      }),
      s
    );
  }
  function ee(e) {
    return (
      void 0 === e && (e = ""),
      `.${e
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function te(e) {
    const t = this,
      { params: s, slidesEl: i } = t;
    s.loop && t.loopDestroy();
    const a = (e) => {
      if ("string" == typeof e) {
        const t = document.createElement("div");
        (t.innerHTML = e), i.append(t.children[0]), (t.innerHTML = "");
      } else i.append(e);
    };
    if ("object" == typeof e && "length" in e)
      for (let t = 0; t < e.length; t += 1) e[t] && a(e[t]);
    else a(e);
    t.recalcSlides(),
      s.loop && t.loopCreate(),
      (s.observer && !t.isElement) || t.update();
  }
  function se(e) {
    const t = this,
      { params: s, activeIndex: i, slidesEl: a } = t;
    s.loop && t.loopDestroy();
    let r = i + 1;
    const n = (e) => {
      if ("string" == typeof e) {
        const t = document.createElement("div");
        (t.innerHTML = e), a.prepend(t.children[0]), (t.innerHTML = "");
      } else a.prepend(e);
    };
    if ("object" == typeof e && "length" in e) {
      for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
      r = i + e.length;
    } else n(e);
    t.recalcSlides(),
      s.loop && t.loopCreate(),
      (s.observer && !t.isElement) || t.update(),
      t.slideTo(r, 0, !1);
  }
  function ie(e, t) {
    const s = this,
      { params: i, activeIndex: a, slidesEl: r } = s;
    let n = a;
    i.loop && ((n -= s.loopedSlides), s.loopDestroy(), s.recalcSlides());
    const l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    let o = n > e ? n + 1 : n;
    const d = [];
    for (let t = l - 1; t >= e; t -= 1) {
      const e = s.slides[t];
      e.remove(), d.unshift(e);
    }
    if ("object" == typeof t && "length" in t) {
      for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
      o = n > e ? n + t.length : n;
    } else r.append(t);
    for (let e = 0; e < d.length; e += 1) r.append(d[e]);
    s.recalcSlides(),
      i.loop && s.loopCreate(),
      (i.observer && !s.isElement) || s.update(),
      i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
  }
  function ae(e) {
    const t = this,
      { params: s, activeIndex: i } = t;
    let a = i;
    s.loop && ((a -= t.loopedSlides), t.loopDestroy());
    let r,
      n = a;
    if ("object" == typeof e && "length" in e) {
      for (let s = 0; s < e.length; s += 1)
        (r = e[s]), t.slides[r] && t.slides[r].remove(), r < n && (n -= 1);
      n = Math.max(n, 0);
    } else
      (r = e),
        t.slides[r] && t.slides[r].remove(),
        r < n && (n -= 1),
        (n = Math.max(n, 0));
    t.recalcSlides(),
      s.loop && t.loopCreate(),
      (s.observer && !t.isElement) || t.update(),
      s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
  }
  function re() {
    const e = this,
      t = [];
    for (let s = 0; s < e.slides.length; s += 1) t.push(s);
    e.removeSlide(t);
  }
  function ne(e) {
    const {
      effect: t,
      swiper: s,
      on: i,
      setTranslate: a,
      setTransition: r,
      overwriteParams: n,
      perspective: l,
      recreateShadows: o,
      getEffectParams: d,
    } = e;
    let p;
    i("beforeInit", () => {
      if (s.params.effect !== t) return;
      s.classNames.push(`${s.params.containerModifierClass}${t}`),
        l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
      const e = n ? n() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e);
    }),
      i("setTranslate", () => {
        s.params.effect === t && a();
      }),
      i("setTransition", (e, i) => {
        s.params.effect === t && r(i);
      }),
      i("transitionEnd", () => {
        if (s.params.effect === t && o) {
          if (!d || !d().slideShadows) return;
          s.slides.forEach((e) => {
            e.querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            ).forEach((e) => e.remove());
          }),
            o();
        }
      }),
      i("virtualUpdate", () => {
        s.params.effect === t &&
          (s.slides.length || (p = !0),
            requestAnimationFrame(() => {
              p && s.slides && s.slides.length && (a(), (p = !1));
            }));
      });
  }
  function le(e, t) {
    const s = m(t);
    return (
      s !== t &&
      ((s.style.backfaceVisibility = "hidden"),
        (s.style["-webkit-backface-visibility"] = "hidden")),
      s
    );
  }
  function oe(e) {
    let { swiper: t, duration: s, transformElements: i, allSlides: a } = e;
    const { activeIndex: r } = t;
    if (t.params.virtualTranslate && 0 !== s) {
      let e,
        s = !1;
      (e = a
        ? i
        : i.filter((e) => {
          const s = e.classList.contains("swiper-slide-transform")
            ? ((e) => {
              if (!e.parentElement)
                return t.slides.filter(
                  (t) => t.shadowRoot && t.shadowRoot === e.parentNode
                )[0];
              return e.parentElement;
            })(e)
            : e;
          return t.getSlideIndex(s) === r;
        })),
        e.forEach((e) => {
          y(e, () => {
            if (s) return;
            if (!t || t.destroyed) return;
            (s = !0), (t.animating = !1);
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            t.wrapperEl.dispatchEvent(e);
          });
        });
    }
  }
  function de(e, t, s) {
    const i = `swiper-slide-shadow${s ? `-${s}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""
      }`,
      a = m(t);
    let r = a.querySelector(`.${i.split(" ").join(".")}`);
    return r || ((r = f("div", i.split(" "))), a.append(r)), r;
  }
  Object.keys(K).forEach((e) => {
    Object.keys(K[e]).forEach((t) => {
      Q.prototype[t] = K[e][t];
    });
  }),
    Q.use([
      function (e) {
        let { swiper: t, on: s, emit: i } = e;
        const a = r();
        let n = null,
          l = null;
        const o = () => {
          t &&
            !t.destroyed &&
            t.initialized &&
            (i("beforeResize"), i("resize"));
        },
          d = () => {
            t && !t.destroyed && t.initialized && i("orientationchange");
          };
        s("init", () => {
          t.params.resizeObserver && void 0 !== a.ResizeObserver
            ? t &&
            !t.destroyed &&
            t.initialized &&
            ((n = new ResizeObserver((e) => {
              l = a.requestAnimationFrame(() => {
                const { width: s, height: i } = t;
                let a = s,
                  r = i;
                e.forEach((e) => {
                  let { contentBoxSize: s, contentRect: i, target: n } = e;
                  (n && n !== t.el) ||
                    ((a = i ? i.width : (s[0] || s).inlineSize),
                      (r = i ? i.height : (s[0] || s).blockSize));
                }),
                  (a === s && r === i) || o();
              });
            })),
              n.observe(t.el))
            : (a.addEventListener("resize", o),
              a.addEventListener("orientationchange", d));
        }),
          s("destroy", () => {
            l && a.cancelAnimationFrame(l),
              n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
              a.removeEventListener("resize", o),
              a.removeEventListener("orientationchange", d);
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: i, emit: a } = e;
        const n = [],
          l = r(),
          o = function (e, s) {
            void 0 === s && (s = {});
            const i = new (l.MutationObserver || l.WebkitMutationObserver)(
              (e) => {
                if (t.__preventObserver__) return;
                if (1 === e.length) return void a("observerUpdate", e[0]);
                const s = function () {
                  a("observerUpdate", e[0]);
                };
                l.requestAnimationFrame
                  ? l.requestAnimationFrame(s)
                  : l.setTimeout(s, 0);
              }
            );
            i.observe(e, {
              attributes: void 0 === s.attributes || s.attributes,
              childList: void 0 === s.childList || s.childList,
              characterData: void 0 === s.characterData || s.characterData,
            }),
              n.push(i);
          };
        s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          i("init", () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = b(t.hostEl);
                for (let t = 0; t < e.length; t += 1) o(e[t]);
              }
              o(t.hostEl, { childList: t.params.observeSlideChildren }),
                o(t.wrapperEl, { attributes: !1 });
            }
          }),
          i("destroy", () => {
            n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length);
          });
      },
    ]);
  const pe = [
    function (e) {
      let t,
        { swiper: s, extendParams: a, on: r, emit: n } = e;
      a({
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      });
      const l = i();
      s.virtual = {
        cache: {},
        from: void 0,
        to: void 0,
        slides: [],
        offset: 0,
        slidesGrid: [],
      };
      const o = l.createElement("div");
      function d(e, t) {
        const i = s.params.virtual;
        if (i.cache && s.virtual.cache[t]) return s.virtual.cache[t];
        let a;
        return (
          i.renderSlide
            ? ((a = i.renderSlide.call(s, e, t)),
              "string" == typeof a && ((o.innerHTML = a), (a = o.children[0])))
            : (a = s.isElement
              ? f("swiper-slide")
              : f("div", s.params.slideClass)),
          a.setAttribute("data-swiper-slide-index", t),
          i.renderSlide || (a.innerHTML = e),
          i.cache && (s.virtual.cache[t] = a),
          a
        );
      }
      function p(e) {
        const {
          slidesPerView: t,
          slidesPerGroup: i,
          centeredSlides: a,
          loop: r,
        } = s.params,
          { addSlidesBefore: l, addSlidesAfter: o } = s.params.virtual,
          { from: p, to: c, slides: u, slidesGrid: m, offset: f } = s.virtual;
        s.params.cssMode || s.updateActiveIndex();
        const g = s.activeIndex || 0;
        let v, w, b;
        (v = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top"),
          a
            ? ((w = Math.floor(t / 2) + i + o), (b = Math.floor(t / 2) + i + l))
            : ((w = t + (i - 1) + o), (b = (r ? t : i) + l));
        let y = g - b,
          x = g + w;
        r || ((y = Math.max(y, 0)), (x = Math.min(x, u.length - 1)));
        let E = (s.slidesGrid[y] || 0) - (s.slidesGrid[0] || 0);
        function S() {
          s.updateSlides(),
            s.updateProgress(),
            s.updateSlidesClasses(),
            n("virtualUpdate");
        }
        if (
          (r && g >= b
            ? ((y -= b), a || (E += s.slidesGrid[0]))
            : r && g < b && ((y = -b), a && (E += s.slidesGrid[0])),
            Object.assign(s.virtual, {
              from: y,
              to: x,
              offset: E,
              slidesGrid: s.slidesGrid,
              slidesBefore: b,
              slidesAfter: w,
            }),
            p === y && c === x && !e)
        )
          return (
            s.slidesGrid !== m &&
            E !== f &&
            s.slides.forEach((e) => {
              e.style[v] = E - Math.abs(s.cssOverflowAdjustment()) + "px";
            }),
            s.updateProgress(),
            void n("virtualUpdate")
          );
        if (s.params.virtual.renderExternal)
          return (
            s.params.virtual.renderExternal.call(s, {
              offset: E,
              from: y,
              to: x,
              slides: (function () {
                const e = [];
                for (let t = y; t <= x; t += 1) e.push(u[t]);
                return e;
              })(),
            }),
            void (s.params.virtual.renderExternalUpdate
              ? S()
              : n("virtualUpdate"))
          );
        const T = [],
          M = [],
          C = (e) => {
            let t = e;
            return (
              e < 0 ? (t = u.length + e) : t >= u.length && (t -= u.length), t
            );
          };
        if (e)
          s.slidesEl
            .querySelectorAll(`.${s.params.slideClass}, swiper-slide`)
            .forEach((e) => {
              e.remove();
            });
        else
          for (let e = p; e <= c; e += 1)
            if (e < y || e > x) {
              const t = C(e);
              s.slidesEl
                .querySelectorAll(
                  `.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`
                )
                .forEach((e) => {
                  e.remove();
                });
            }
        const P = r ? -u.length : 0,
          z = r ? 2 * u.length : u.length;
        for (let t = P; t < z; t += 1)
          if (t >= y && t <= x) {
            const s = C(t);
            void 0 === c || e
              ? M.push(s)
              : (t > c && M.push(s), t < p && T.push(s));
          }
        if (
          (M.forEach((e) => {
            s.slidesEl.append(d(u[e], e));
          }),
            r)
        )
          for (let e = T.length - 1; e >= 0; e -= 1) {
            const t = T[e];
            s.slidesEl.prepend(d(u[t], t));
          }
        else
          T.sort((e, t) => t - e),
            T.forEach((e) => {
              s.slidesEl.prepend(d(u[e], e));
            });
        h(s.slidesEl, ".swiper-slide, swiper-slide").forEach((e) => {
          e.style[v] = E - Math.abs(s.cssOverflowAdjustment()) + "px";
        }),
          S();
      }
      r("beforeInit", () => {
        if (!s.params.virtual.enabled) return;
        let e;
        if (void 0 === s.passedParams.virtual.slides) {
          const t = [...s.slidesEl.children].filter((e) =>
            e.matches(`.${s.params.slideClass}, swiper-slide`)
          );
          t &&
            t.length &&
            ((s.virtual.slides = [...t]),
              (e = !0),
              t.forEach((e, t) => {
                e.setAttribute("data-swiper-slide-index", t),
                  (s.virtual.cache[t] = e),
                  e.remove();
              }));
        }
        e || (s.virtual.slides = s.params.virtual.slides),
          s.classNames.push(`${s.params.containerModifierClass}virtual`),
          (s.params.watchSlidesProgress = !0),
          (s.originalParams.watchSlidesProgress = !0),
          s.params.initialSlide || p();
      }),
        r("setTranslate", () => {
          s.params.virtual.enabled &&
            (s.params.cssMode && !s._immediateVirtual
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  p();
                }, 100)))
              : p());
        }),
        r("init update resize", () => {
          s.params.virtual.enabled &&
            s.params.cssMode &&
            c(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`);
        }),
        Object.assign(s.virtual, {
          appendSlide: function (e) {
            if ("object" == typeof e && "length" in e)
              for (let t = 0; t < e.length; t += 1)
                e[t] && s.virtual.slides.push(e[t]);
            else s.virtual.slides.push(e);
            p(!0);
          },
          prependSlide: function (e) {
            const t = s.activeIndex;
            let i = t + 1,
              a = 1;
            if (Array.isArray(e)) {
              for (let t = 0; t < e.length; t += 1)
                e[t] && s.virtual.slides.unshift(e[t]);
              (i = t + e.length), (a = e.length);
            } else s.virtual.slides.unshift(e);
            if (s.params.virtual.cache) {
              const e = s.virtual.cache,
                t = {};
              Object.keys(e).forEach((s) => {
                const i = e[s],
                  r = i.getAttribute("data-swiper-slide-index");
                r &&
                  i.setAttribute(
                    "data-swiper-slide-index",
                    parseInt(r, 10) + a
                  ),
                  (t[parseInt(s, 10) + a] = i);
              }),
                (s.virtual.cache = t);
            }
            p(!0), s.slideTo(i, 0);
          },
          removeSlide: function (e) {
            if (null == e) return;
            let t = s.activeIndex;
            if (Array.isArray(e))
              for (let i = e.length - 1; i >= 0; i -= 1)
                s.virtual.slides.splice(e[i], 1),
                  s.params.virtual.cache && delete s.virtual.cache[e[i]],
                  e[i] < t && (t -= 1),
                  (t = Math.max(t, 0));
            else
              s.virtual.slides.splice(e, 1),
                s.params.virtual.cache && delete s.virtual.cache[e],
                e < t && (t -= 1),
                (t = Math.max(t, 0));
            p(!0), s.slideTo(t, 0);
          },
          removeAllSlides: function () {
            (s.virtual.slides = []),
              s.params.virtual.cache && (s.virtual.cache = {}),
              p(!0),
              s.slideTo(0, 0);
          },
          update: p,
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: n } = e;
      const l = i(),
        o = r();
      function d(e) {
        if (!t.enabled) return;
        const { rtlTranslate: s } = t;
        let i = e;
        i.originalEvent && (i = i.originalEvent);
        const a = i.keyCode || i.charCode,
          r = t.params.keyboard.pageUpDown,
          d = r && 33 === a,
          p = r && 34 === a,
          c = 37 === a,
          u = 39 === a,
          m = 38 === a,
          h = 40 === a;
        if (
          !t.allowSlideNext &&
          ((t.isHorizontal() && u) || (t.isVertical() && h) || p)
        )
          return !1;
        if (
          !t.allowSlidePrev &&
          ((t.isHorizontal() && c) || (t.isVertical() && m) || d)
        )
          return !1;
        if (
          !(
            i.shiftKey ||
            i.altKey ||
            i.ctrlKey ||
            i.metaKey ||
            (l.activeElement &&
              l.activeElement.nodeName &&
              ("input" === l.activeElement.nodeName.toLowerCase() ||
                "textarea" === l.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            t.params.keyboard.onlyInViewport &&
            (d || p || c || u || m || h)
          ) {
            let e = !1;
            if (
              b(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 &&
              0 === b(t.el, `.${t.params.slideActiveClass}`).length
            )
              return;
            const i = t.el,
              a = i.clientWidth,
              r = i.clientHeight,
              n = o.innerWidth,
              l = o.innerHeight,
              d = g(i);
            s && (d.left -= i.scrollLeft);
            const p = [
              [d.left, d.top],
              [d.left + a, d.top],
              [d.left, d.top + r],
              [d.left + a, d.top + r],
            ];
            for (let t = 0; t < p.length; t += 1) {
              const s = p[t];
              if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                if (0 === s[0] && 0 === s[1]) continue;
                e = !0;
              }
            }
            if (!e) return;
          }
          t.isHorizontal()
            ? ((d || p || c || u) &&
              (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
              (((p || u) && !s) || ((d || c) && s)) && t.slideNext(),
              (((d || c) && !s) || ((p || u) && s)) && t.slidePrev())
            : ((d || p || m || h) &&
              (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
              (p || h) && t.slideNext(),
              (d || m) && t.slidePrev()),
            n("keyPress", a);
        }
      }
      function p() {
        t.keyboard.enabled ||
          (l.addEventListener("keydown", d), (t.keyboard.enabled = !0));
      }
      function c() {
        t.keyboard.enabled &&
          (l.removeEventListener("keydown", d), (t.keyboard.enabled = !1));
      }
      (t.keyboard = { enabled: !1 }),
        s({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
        a("init", () => {
          t.params.keyboard.enabled && p();
        }),
        a("destroy", () => {
          t.keyboard.enabled && c();
        }),
        Object.assign(t.keyboard, { enable: p, disable: c });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: a } = e;
      const o = r();
      let d;
      s({
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null,
          noMousewheelClass: "swiper-no-mousewheel",
        },
      }),
        (t.mousewheel = { enabled: !1 });
      let p,
        c = l();
      const u = [];
      function m() {
        t.enabled && (t.mouseEntered = !0);
      }
      function h() {
        t.enabled && (t.mouseEntered = !1);
      }
      function f(e) {
        return (
          !(
            t.params.mousewheel.thresholdDelta &&
            e.delta < t.params.mousewheel.thresholdDelta
          ) &&
          !(
            t.params.mousewheel.thresholdTime &&
            l() - c < t.params.mousewheel.thresholdTime
          ) &&
          ((e.delta >= 6 && l() - c < 60) ||
            (e.direction < 0
              ? (t.isEnd && !t.params.loop) ||
              t.animating ||
              (t.slideNext(), a("scroll", e.raw))
              : (t.isBeginning && !t.params.loop) ||
              t.animating ||
              (t.slidePrev(), a("scroll", e.raw)),
              (c = new o.Date().getTime()),
              !1))
        );
      }
      function g(e) {
        let s = e,
          i = !0;
        if (!t.enabled) return;
        if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))
          return;
        const r = t.params.mousewheel;
        t.params.cssMode && s.preventDefault();
        let o = t.el;
        "container" !== t.params.mousewheel.eventsTarget &&
          (o = document.querySelector(t.params.mousewheel.eventsTarget));
        const c = o && o.contains(s.target);
        if (!t.mouseEntered && !c && !r.releaseOnEdges) return !0;
        s.originalEvent && (s = s.originalEvent);
        let m = 0;
        const h = t.rtlTranslate ? -1 : 1,
          g = (function (e) {
            let t = 0,
              s = 0,
              i = 0,
              a = 0;
            return (
              "detail" in e && (s = e.detail),
              "wheelDelta" in e && (s = -e.wheelDelta / 120),
              "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
              "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
              "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
              (i = 10 * t),
              (a = 10 * s),
              "deltaY" in e && (a = e.deltaY),
              "deltaX" in e && (i = e.deltaX),
              e.shiftKey && !i && ((i = a), (a = 0)),
              (i || a) &&
              e.deltaMode &&
              (1 === e.deltaMode
                ? ((i *= 40), (a *= 40))
                : ((i *= 800), (a *= 800))),
              i && !t && (t = i < 1 ? -1 : 1),
              a && !s && (s = a < 1 ? -1 : 1),
              { spinX: t, spinY: s, pixelX: i, pixelY: a }
            );
          })(s);
        if (r.forceToAxis)
          if (t.isHorizontal()) {
            if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
            m = -g.pixelX * h;
          } else {
            if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
            m = -g.pixelY;
          }
        else
          m =
            Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * h : -g.pixelY;
        if (0 === m) return !0;
        r.invert && (m = -m);
        let v = t.getTranslate() + m * r.sensitivity;
        if (
          (v >= t.minTranslate() && (v = t.minTranslate()),
            v <= t.maxTranslate() && (v = t.maxTranslate()),
            (i =
              !!t.params.loop ||
              !(v === t.minTranslate() || v === t.maxTranslate())),
            i && t.params.nested && s.stopPropagation(),
            t.params.freeMode && t.params.freeMode.enabled)
        ) {
          const e = { time: l(), delta: Math.abs(m), direction: Math.sign(m) },
            i =
              p &&
              e.time < p.time + 500 &&
              e.delta <= p.delta &&
              e.direction === p.direction;
          if (!i) {
            p = void 0;
            let l = t.getTranslate() + m * r.sensitivity;
            const o = t.isBeginning,
              c = t.isEnd;
            if (
              (l >= t.minTranslate() && (l = t.minTranslate()),
                l <= t.maxTranslate() && (l = t.maxTranslate()),
                t.setTransition(0),
                t.setTranslate(l),
                t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses(),
                ((!o && t.isBeginning) || (!c && t.isEnd)) &&
                t.updateSlidesClasses(),
                t.params.loop &&
                t.loopFix({
                  direction: e.direction < 0 ? "next" : "prev",
                  byMousewheel: !0,
                }),
                t.params.freeMode.sticky)
            ) {
              clearTimeout(d), (d = void 0), u.length >= 15 && u.shift();
              const s = u.length ? u[u.length - 1] : void 0,
                i = u[0];
              if (
                (u.push(e),
                  s && (e.delta > s.delta || e.direction !== s.direction))
              )
                u.splice(0);
              else if (
                u.length >= 15 &&
                e.time - i.time < 500 &&
                i.delta - e.delta >= 1 &&
                e.delta <= 6
              ) {
                const s = m > 0 ? 0.8 : 0.2;
                (p = e),
                  u.splice(0),
                  (d = n(() => {
                    t.slideToClosest(t.params.speed, !0, void 0, s);
                  }, 0));
              }
              d ||
                (d = n(() => {
                  (p = e),
                    u.splice(0),
                    t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (i || a("scroll", s),
                t.params.autoplay &&
                t.params.autoplayDisableOnInteraction &&
                t.autoplay.stop(),
                r.releaseOnEdges &&
                (l === t.minTranslate() || l === t.maxTranslate()))
            )
              return !0;
          }
        } else {
          const s = {
            time: l(),
            delta: Math.abs(m),
            direction: Math.sign(m),
            raw: e,
          };
          u.length >= 2 && u.shift();
          const i = u.length ? u[u.length - 1] : void 0;
          if (
            (u.push(s),
              i
                ? (s.direction !== i.direction ||
                  s.delta > i.delta ||
                  s.time > i.time + 150) &&
                f(s)
                : f(s),
              (function (e) {
                const s = t.params.mousewheel;
                if (e.direction < 0) {
                  if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
                } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges)
                  return !0;
                return !1;
              })(s))
          )
            return !0;
        }
        return s.preventDefault ? s.preventDefault() : (s.returnValue = !1), !1;
      }
      function v(e) {
        let s = t.el;
        "container" !== t.params.mousewheel.eventsTarget &&
          (s = document.querySelector(t.params.mousewheel.eventsTarget)),
          s[e]("mouseenter", m),
          s[e]("mouseleave", h),
          s[e]("wheel", g);
      }
      function w() {
        return t.params.cssMode
          ? (t.wrapperEl.removeEventListener("wheel", g), !0)
          : !t.mousewheel.enabled &&
          (v("addEventListener"), (t.mousewheel.enabled = !0), !0);
      }
      function b() {
        return t.params.cssMode
          ? (t.wrapperEl.addEventListener(event, g), !0)
          : !!t.mousewheel.enabled &&
          (v("removeEventListener"), (t.mousewheel.enabled = !1), !0);
      }
      i("init", () => {
        !t.params.mousewheel.enabled && t.params.cssMode && b(),
          t.params.mousewheel.enabled && w();
      }),
        i("destroy", () => {
          t.params.cssMode && w(), t.mousewheel.enabled && b();
        }),
        Object.assign(t.mousewheel, { enable: w, disable: b });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: a } = e;
      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (t.navigation = { nextEl: null, prevEl: null });
      const r = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function n(e) {
        let s;
        return e &&
          "string" == typeof e &&
          t.isElement &&
          ((s = t.el.querySelector(e)), s)
          ? s
          : (e &&
            ("string" == typeof e && (s = [...document.querySelectorAll(e)]),
              t.params.uniqueNavElements &&
              "string" == typeof e &&
              s.length > 1 &&
              1 === t.el.querySelectorAll(e).length &&
              (s = t.el.querySelector(e))),
            e && !s ? e : s);
      }
      function l(e, s) {
        const i = t.params.navigation;
        (e = r(e)).forEach((e) => {
          e &&
            (e.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")),
              "BUTTON" === e.tagName && (e.disabled = s),
              t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](i.lockClass));
        });
      }
      function o() {
        const { nextEl: e, prevEl: s } = t.navigation;
        if (t.params.loop) return l(s, !1), void l(e, !1);
        l(s, t.isBeginning && !t.params.rewind),
          l(e, t.isEnd && !t.params.rewind);
      }
      function d(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) &&
          (t.slidePrev(), a("navigationPrev"));
      }
      function p(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) &&
          (t.slideNext(), a("navigationNext"));
      }
      function c() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = J(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
            !e.nextEl && !e.prevEl)
        )
          return;
        let s = n(e.nextEl),
          i = n(e.prevEl);
        Object.assign(t.navigation, { nextEl: s, prevEl: i }),
          (s = r(s)),
          (i = r(i));
        const a = (s, i) => {
          s && s.addEventListener("click", "next" === i ? p : d),
            !t.enabled && s && s.classList.add(...e.lockClass.split(" "));
        };
        s.forEach((e) => a(e, "next")), i.forEach((e) => a(e, "prev"));
      }
      function u() {
        let { nextEl: e, prevEl: s } = t.navigation;
        (e = r(e)), (s = r(s));
        const i = (e, s) => {
          e.removeEventListener("click", "next" === s ? p : d),
            e.classList.remove(...t.params.navigation.disabledClass.split(" "));
        };
        e.forEach((e) => i(e, "next")), s.forEach((e) => i(e, "prev"));
      }
      i("init", () => {
        !1 === t.params.navigation.enabled ? m() : (c(), o());
      }),
        i("toEdge fromEdge lock unlock", () => {
          o();
        }),
        i("destroy", () => {
          u();
        }),
        i("enable disable", () => {
          let { nextEl: e, prevEl: s } = t.navigation;
          (e = r(e)),
            (s = r(s)),
            [...e, ...s]
              .filter((e) => !!e)
              .forEach((e) =>
                e.classList[t.enabled ? "remove" : "add"](
                  t.params.navigation.lockClass
                )
              );
        }),
        i("click", (e, s) => {
          let { nextEl: i, prevEl: n } = t.navigation;
          (i = r(i)), (n = r(n));
          const l = s.target;
          if (
            t.params.navigation.hideOnClick &&
            !n.includes(l) &&
            !i.includes(l)
          ) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === l || t.pagination.el.contains(l))
            )
              return;
            let e;
            i.length
              ? (e = i[0].classList.contains(t.params.navigation.hiddenClass))
              : n.length &&
              (e = n[0].classList.contains(t.params.navigation.hiddenClass)),
              a(!0 === e ? "navigationShow" : "navigationHide"),
              [...i, ...n]
                .filter((e) => !!e)
                .forEach((e) =>
                  e.classList.toggle(t.params.navigation.hiddenClass)
                );
          }
        });
      const m = () => {
        t.el.classList.add(
          ...t.params.navigation.navigationDisabledClass.split(" ")
        ),
          u();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.el.classList.remove(
            ...t.params.navigation.navigationDisabledClass.split(" ")
          ),
            c(),
            o();
        },
        disable: m,
        update: o,
        init: c,
        destroy: u,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: a } = e;
      const r = "swiper-pagination";
      let n;
      s({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
          paginationDisabledClass: `${r}-disabled`,
        },
      }),
        (t.pagination = { el: null, bullets: [] });
      let l = 0;
      const o = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function d() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
        );
      }
      function p(e, s) {
        const { bulletActiveClass: i } = t.params.pagination;
        e &&
          (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          (e.classList.add(`${i}-${s}`),
            (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
            e.classList.add(`${i}-${s}-${s}`));
      }
      function c(e) {
        const s = e.target.closest(ee(t.params.pagination.bulletClass));
        if (!s) return;
        e.preventDefault();
        const i = w(s) * t.params.slidesPerGroup;
        if (t.params.loop) {
          if (t.realIndex === i) return;
          const e = t.getSlideIndexByData(i),
            s = t.getSlideIndexByData(t.realIndex);
          e > t.slides.length - t.loopedSlides &&
            t.loopFix({
              direction: e > s ? "next" : "prev",
              activeSlideIndex: e,
              slideTo: !1,
            }),
            t.slideToLoop(i);
        } else t.slideTo(i);
      }
      function u() {
        const e = t.rtl,
          s = t.params.pagination;
        if (d()) return;
        let i,
          r,
          c = t.pagination.el;
        c = o(c);
        const u =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length,
          m = t.params.loop
            ? Math.ceil(u / t.params.slidesPerGroup)
            : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((r = t.previousRealIndex || 0),
              (i =
                t.params.slidesPerGroup > 1
                  ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                  : t.realIndex))
            : void 0 !== t.snapIndex
              ? ((i = t.snapIndex), (r = t.previousSnapIndex))
              : ((r = t.previousIndex || 0), (i = t.activeIndex || 0)),
            "bullets" === s.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const a = t.pagination.bullets;
          let o, d, u;
          if (
            (s.dynamicBullets &&
              ((n = x(a[0], t.isHorizontal() ? "width" : "height", !0)),
                c.forEach((e) => {
                  e.style[t.isHorizontal() ? "width" : "height"] =
                    n * (s.dynamicMainBullets + 4) + "px";
                }),
                s.dynamicMainBullets > 1 &&
                void 0 !== r &&
                ((l += i - (r || 0)),
                  l > s.dynamicMainBullets - 1
                    ? (l = s.dynamicMainBullets - 1)
                    : l < 0 && (l = 0)),
                (o = Math.max(i - l, 0)),
                (d = o + (Math.min(a.length, s.dynamicMainBullets) - 1)),
                (u = (d + o) / 2)),
              a.forEach((e) => {
                const t = [
                  ...[
                    "",
                    "-next",
                    "-next-next",
                    "-prev",
                    "-prev-prev",
                    "-main",
                  ].map((e) => `${s.bulletActiveClass}${e}`),
                ]
                  .map((e) =>
                    "string" == typeof e && e.includes(" ") ? e.split(" ") : e
                  )
                  .flat();
                e.classList.remove(...t);
              }),
              c.length > 1)
          )
            a.forEach((e) => {
              const a = w(e);
              a === i
                ? e.classList.add(...s.bulletActiveClass.split(" "))
                : t.isElement && e.setAttribute("part", "bullet"),
                s.dynamicBullets &&
                (a >= o &&
                  a <= d &&
                  e.classList.add(
                    ...`${s.bulletActiveClass}-main`.split(" ")
                  ),
                  a === o && p(e, "prev"),
                  a === d && p(e, "next"));
            });
          else {
            const e = a[i];
            if (
              (e && e.classList.add(...s.bulletActiveClass.split(" ")),
                t.isElement &&
                a.forEach((e, t) => {
                  e.setAttribute("part", t === i ? "bullet-active" : "bullet");
                }),
                s.dynamicBullets)
            ) {
              const e = a[o],
                t = a[d];
              for (let e = o; e <= d; e += 1)
                a[e] &&
                  a[e].classList.add(
                    ...`${s.bulletActiveClass}-main`.split(" ")
                  );
              p(e, "prev"), p(t, "next");
            }
          }
          if (s.dynamicBullets) {
            const i = Math.min(a.length, s.dynamicMainBullets + 4),
              r = (n * i - n) / 2 - u * n,
              l = e ? "right" : "left";
            a.forEach((e) => {
              e.style[t.isHorizontal() ? l : "top"] = `${r}px`;
            });
          }
        }
        c.forEach((e, r) => {
          if (
            ("fraction" === s.type &&
              (e.querySelectorAll(ee(s.currentClass)).forEach((e) => {
                e.textContent = s.formatFractionCurrent(i + 1);
              }),
                e.querySelectorAll(ee(s.totalClass)).forEach((e) => {
                  e.textContent = s.formatFractionTotal(m);
                })),
              "progressbar" === s.type)
          ) {
            let a;
            a = s.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
                ? "horizontal"
                : "vertical";
            const r = (i + 1) / m;
            let n = 1,
              l = 1;
            "horizontal" === a ? (n = r) : (l = r),
              e.querySelectorAll(ee(s.progressbarFillClass)).forEach((e) => {
                (e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`),
                  (e.style.transitionDuration = `${t.params.speed}ms`);
              });
          }
          "custom" === s.type && s.renderCustom
            ? ((e.innerHTML = s.renderCustom(t, i + 1, m)),
              0 === r && a("paginationRender", e))
            : (0 === r && a("paginationRender", e), a("paginationUpdate", e)),
            t.params.watchOverflow &&
            t.enabled &&
            e.classList[t.isLocked ? "add" : "remove"](s.lockClass);
        });
      }
      function m() {
        const e = t.params.pagination;
        if (d()) return;
        const s =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length;
        let i = t.pagination.el;
        i = o(i);
        let r = "";
        if ("bullets" === e.type) {
          let i = t.params.loop
            ? Math.ceil(s / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode && t.params.freeMode.enabled && i > s && (i = s);
          for (let s = 0; s < i; s += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, s, e.bulletClass))
              : (r += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""
                } class="${e.bulletClass}"></${e.bulletElement}>`);
        }
        "fraction" === e.type &&
          (r = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          "progressbar" === e.type &&
          (r = e.renderProgressbar
            ? e.renderProgressbar.call(t, e.progressbarFillClass)
            : `<span class="${e.progressbarFillClass}"></span>`),
          (t.pagination.bullets = []),
          i.forEach((s) => {
            "custom" !== e.type && (s.innerHTML = r || ""),
              "bullets" === e.type &&
              t.pagination.bullets.push(
                ...s.querySelectorAll(ee(e.bulletClass))
              );
          }),
          "custom" !== e.type && a("paginationRender", i[0]);
      }
      function h() {
        t.params.pagination = J(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" }
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let s;
        "string" == typeof e.el &&
          t.isElement &&
          (s = t.el.querySelector(e.el)),
          s ||
          "string" != typeof e.el ||
          (s = [...document.querySelectorAll(e.el)]),
          s || (s = e.el),
          s &&
          0 !== s.length &&
          (t.params.uniqueNavElements &&
            "string" == typeof e.el &&
            Array.isArray(s) &&
            s.length > 1 &&
            ((s = [...t.el.querySelectorAll(e.el)]),
              s.length > 1 &&
              (s = s.filter((e) => b(e, ".swiper")[0] === t.el)[0])),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(t.pagination, { el: s }),
            (s = o(s)),
            s.forEach((s) => {
              "bullets" === e.type &&
                e.clickable &&
                s.classList.add(e.clickableClass),
                s.classList.add(e.modifierClass + e.type),
                s.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                "bullets" === e.type &&
                e.dynamicBullets &&
                (s.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                  (l = 0),
                  e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type &&
                e.progressbarOpposite &&
                s.classList.add(e.progressbarOppositeClass),
                e.clickable && s.addEventListener("click", c),
                t.enabled || s.classList.add(e.lockClass);
            }));
      }
      function f() {
        const e = t.params.pagination;
        if (d()) return;
        let s = t.pagination.el;
        s &&
          ((s = o(s)),
            s.forEach((s) => {
              s.classList.remove(e.hiddenClass),
                s.classList.remove(e.modifierClass + e.type),
                s.classList.remove(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                e.clickable && s.removeEventListener("click", c);
            })),
          t.pagination.bullets &&
          t.pagination.bullets.forEach((t) =>
            t.classList.remove(...e.bulletActiveClass.split(" "))
          );
      }
      i("changeDirection", () => {
        if (!t.pagination || !t.pagination.el) return;
        const e = t.params.pagination;
        let { el: s } = t.pagination;
        (s = o(s)),
          s.forEach((s) => {
            s.classList.remove(e.horizontalClass, e.verticalClass),
              s.classList.add(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass
              );
          });
      }),
        i("init", () => {
          !1 === t.params.pagination.enabled ? g() : (h(), m(), u());
        }),
        i("activeIndexChange", () => {
          void 0 === t.snapIndex && u();
        }),
        i("snapIndexChange", () => {
          u();
        }),
        i("snapGridLengthChange", () => {
          m(), u();
        }),
        i("destroy", () => {
          f();
        }),
        i("enable disable", () => {
          let { el: e } = t.pagination;
          e &&
            ((e = o(e)),
              e.forEach((e) =>
                e.classList[t.enabled ? "remove" : "add"](
                  t.params.pagination.lockClass
                )
              ));
        }),
        i("lock unlock", () => {
          u();
        }),
        i("click", (e, s) => {
          const i = s.target,
            r = o(t.pagination.el);
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            r &&
            r.length > 0 &&
            !i.classList.contains(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                (t.navigation.prevEl && i === t.navigation.prevEl))
            )
              return;
            const e = r[0].classList.contains(t.params.pagination.hiddenClass);
            a(!0 === e ? "paginationShow" : "paginationHide"),
              r.forEach((e) =>
                e.classList.toggle(t.params.pagination.hiddenClass)
              );
          }
        });
      const g = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let { el: e } = t.pagination;
        e &&
          ((e = o(e)),
            e.forEach((e) =>
              e.classList.add(t.params.pagination.paginationDisabledClass)
            )),
          f();
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.el.classList.remove(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e &&
            ((e = o(e)),
              e.forEach((e) =>
                e.classList.remove(t.params.pagination.paginationDisabledClass)
              )),
            h(),
            m(),
            u();
        },
        disable: g,
        render: m,
        update: u,
        init: h,
        destroy: f,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: r } = e;
      const l = i();
      let o,
        d,
        p,
        c,
        u = !1,
        m = null,
        h = null;
      function v() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e, rtlTranslate: s } = t,
          { dragEl: i, el: a } = e,
          r = t.params.scrollbar,
          n = t.params.loop ? t.progressLoop : t.progress;
        let l = d,
          o = (p - d) * n;
        s
          ? ((o = -o),
            o > 0 ? ((l = d - o), (o = 0)) : -o + d > p && (l = p + o))
          : o < 0
            ? ((l = d + o), (o = 0))
            : o + d > p && (l = p - o),
          t.isHorizontal()
            ? ((i.style.transform = `translate3d(${o}px, 0, 0)`),
              (i.style.width = `${l}px`))
            : ((i.style.transform = `translate3d(0px, ${o}px, 0)`),
              (i.style.height = `${l}px`)),
          r.hide &&
          (clearTimeout(m),
            (a.style.opacity = 1),
            (m = setTimeout(() => {
              (a.style.opacity = 0), (a.style.transitionDuration = "400ms");
            }, 1e3)));
      }
      function w() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e } = t,
          { dragEl: s, el: i } = e;
        (s.style.width = ""),
          (s.style.height = ""),
          (p = t.isHorizontal() ? i.offsetWidth : i.offsetHeight),
          (c =
            t.size /
            (t.virtualSize +
              t.params.slidesOffsetBefore -
              (t.params.centeredSlides ? t.snapGrid[0] : 0))),
          (d =
            "auto" === t.params.scrollbar.dragSize
              ? p * c
              : parseInt(t.params.scrollbar.dragSize, 10)),
          t.isHorizontal()
            ? (s.style.width = `${d}px`)
            : (s.style.height = `${d}px`),
          (i.style.display = c >= 1 ? "none" : ""),
          t.params.scrollbar.hide && (i.style.opacity = 0),
          t.params.watchOverflow &&
          t.enabled &&
          e.el.classList[t.isLocked ? "add" : "remove"](
            t.params.scrollbar.lockClass
          );
      }
      function b(e) {
        return t.isHorizontal() ? e.clientX : e.clientY;
      }
      function y(e) {
        const { scrollbar: s, rtlTranslate: i } = t,
          { el: a } = s;
        let r;
        (r =
          (b(e) -
            g(a)[t.isHorizontal() ? "left" : "top"] -
            (null !== o ? o : d / 2)) /
          (p - d)),
          (r = Math.max(Math.min(r, 1), 0)),
          i && (r = 1 - r);
        const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
        t.updateProgress(n),
          t.setTranslate(n),
          t.updateActiveIndex(),
          t.updateSlidesClasses();
      }
      function x(e) {
        const s = t.params.scrollbar,
          { scrollbar: i, wrapperEl: a } = t,
          { el: n, dragEl: l } = i;
        (u = !0),
          (o =
            e.target === l
              ? b(e) -
              e.target.getBoundingClientRect()[
              t.isHorizontal() ? "left" : "top"
              ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          (a.style.transitionDuration = "100ms"),
          (l.style.transitionDuration = "100ms"),
          y(e),
          clearTimeout(h),
          (n.style.transitionDuration = "0ms"),
          s.hide && (n.style.opacity = 1),
          t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"),
          r("scrollbarDragStart", e);
      }
      function E(e) {
        const { scrollbar: s, wrapperEl: i } = t,
          { el: a, dragEl: n } = s;
        u &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            y(e),
            (i.style.transitionDuration = "0ms"),
            (a.style.transitionDuration = "0ms"),
            (n.style.transitionDuration = "0ms"),
            r("scrollbarDragMove", e));
      }
      function S(e) {
        const s = t.params.scrollbar,
          { scrollbar: i, wrapperEl: a } = t,
          { el: l } = i;
        u &&
          ((u = !1),
            t.params.cssMode &&
            ((t.wrapperEl.style["scroll-snap-type"] = ""),
              (a.style.transitionDuration = "")),
            s.hide &&
            (clearTimeout(h),
              (h = n(() => {
                (l.style.opacity = 0), (l.style.transitionDuration = "400ms");
              }, 1e3))),
            r("scrollbarDragEnd", e),
            s.snapOnRelease && t.slideToClosest());
      }
      function T(e) {
        const { scrollbar: s, params: i } = t,
          a = s.el;
        if (!a) return;
        const r = a,
          n = !!i.passiveListeners && { passive: !1, capture: !1 },
          o = !!i.passiveListeners && { passive: !0, capture: !1 };
        if (!r) return;
        const d = "on" === e ? "addEventListener" : "removeEventListener";
        r[d]("pointerdown", x, n),
          l[d]("pointermove", E, n),
          l[d]("pointerup", S, o);
      }
      function M() {
        const { scrollbar: e, el: s } = t;
        t.params.scrollbar = J(
          t,
          t.originalParams.scrollbar,
          t.params.scrollbar,
          { el: "swiper-scrollbar" }
        );
        const i = t.params.scrollbar;
        if (!i.el) return;
        let a, r;
        "string" == typeof i.el &&
          t.isElement &&
          (a = t.el.querySelector(i.el)),
          a || "string" != typeof i.el
            ? a || (a = i.el)
            : (a = l.querySelectorAll(i.el)),
          t.params.uniqueNavElements &&
          "string" == typeof i.el &&
          a.length > 1 &&
          1 === s.querySelectorAll(i.el).length &&
          (a = s.querySelector(i.el)),
          a.length > 0 && (a = a[0]),
          a.classList.add(
            t.isHorizontal() ? i.horizontalClass : i.verticalClass
          ),
          a &&
          ((r = a.querySelector(`.${t.params.scrollbar.dragClass}`)),
            r || ((r = f("div", t.params.scrollbar.dragClass)), a.append(r))),
          Object.assign(e, { el: a, dragEl: r }),
          i.draggable && t.params.scrollbar.el && t.scrollbar.el && T("on"),
          a &&
          a.classList[t.enabled ? "remove" : "add"](
            t.params.scrollbar.lockClass
          );
      }
      function C() {
        const e = t.params.scrollbar,
          s = t.scrollbar.el;
        s &&
          s.classList.remove(
            t.isHorizontal() ? e.horizontalClass : e.verticalClass
          ),
          t.params.scrollbar.el && t.scrollbar.el && T("off");
      }
      s({
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag",
          scrollbarDisabledClass: "swiper-scrollbar-disabled",
          horizontalClass: "swiper-scrollbar-horizontal",
          verticalClass: "swiper-scrollbar-vertical",
        },
      }),
        (t.scrollbar = { el: null, dragEl: null }),
        a("init", () => {
          !1 === t.params.scrollbar.enabled ? P() : (M(), w(), v());
        }),
        a("update resize observerUpdate lock unlock", () => {
          w();
        }),
        a("setTranslate", () => {
          v();
        }),
        a("setTransition", (e, s) => {
          !(function (e) {
            t.params.scrollbar.el &&
              t.scrollbar.el &&
              (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`);
          })(s);
        }),
        a("enable disable", () => {
          const { el: e } = t.scrollbar;
          e &&
            e.classList[t.enabled ? "remove" : "add"](
              t.params.scrollbar.lockClass
            );
        }),
        a("destroy", () => {
          C();
        });
      const P = () => {
        t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),
          t.scrollbar.el &&
          t.scrollbar.el.classList.add(
            t.params.scrollbar.scrollbarDisabledClass
          ),
          C();
      };
      Object.assign(t.scrollbar, {
        enable: () => {
          t.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),
            t.scrollbar.el &&
            t.scrollbar.el.classList.remove(
              t.params.scrollbar.scrollbarDisabledClass
            ),
            M(),
            w(),
            v();
        },
        disable: P,
        updateSize: w,
        setTranslate: v,
        init: M,
        destroy: C,
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({ parallax: { enabled: !1 } });
      const a = (e, s) => {
        const { rtl: i } = t,
          a = i ? -1 : 1,
          r = e.getAttribute("data-swiper-parallax") || "0";
        let n = e.getAttribute("data-swiper-parallax-x"),
          l = e.getAttribute("data-swiper-parallax-y");
        const o = e.getAttribute("data-swiper-parallax-scale"),
          d = e.getAttribute("data-swiper-parallax-opacity"),
          p = e.getAttribute("data-swiper-parallax-rotate");
        if (
          (n || l
            ? ((n = n || "0"), (l = l || "0"))
            : t.isHorizontal()
              ? ((n = r), (l = "0"))
              : ((l = r), (n = "0")),
            (n =
              n.indexOf("%") >= 0
                ? parseInt(n, 10) * s * a + "%"
                : n * s * a + "px"),
            (l =
              l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px"),
            null != d)
        ) {
          const t = d - (d - 1) * (1 - Math.abs(s));
          e.style.opacity = t;
        }
        let c = `translate3d(${n}, ${l}, 0px)`;
        if (null != o) {
          c += ` scale(${o - (o - 1) * (1 - Math.abs(s))})`;
        }
        if (p && null != p) {
          c += ` rotate(${p * s * -1}deg)`;
        }
        e.style.transform = c;
      },
        r = () => {
          const { el: e, slides: s, progress: i, snapGrid: r } = t;
          h(
            e,
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          ).forEach((e) => {
            a(e, i);
          }),
            s.forEach((e, s) => {
              let n = e.progress;
              t.params.slidesPerGroup > 1 &&
                "auto" !== t.params.slidesPerView &&
                (n += Math.ceil(s / 2) - i * (r.length - 1)),
                (n = Math.min(Math.max(n, -1), 1)),
                e
                  .querySelectorAll(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]"
                  )
                  .forEach((e) => {
                    a(e, n);
                  });
            });
        };
      i("beforeInit", () => {
        t.params.parallax.enabled &&
          ((t.params.watchSlidesProgress = !0),
            (t.originalParams.watchSlidesProgress = !0));
      }),
        i("init", () => {
          t.params.parallax.enabled && r();
        }),
        i("setTranslate", () => {
          t.params.parallax.enabled && r();
        }),
        i("setTransition", (e, s) => {
          t.params.parallax.enabled &&
            (function (e) {
              void 0 === e && (e = t.params.speed);
              const { el: s } = t;
              s.querySelectorAll(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              ).forEach((t) => {
                let s =
                  parseInt(
                    t.getAttribute("data-swiper-parallax-duration"),
                    10
                  ) || e;
                0 === e && (s = 0), (t.style.transitionDuration = `${s}ms`);
              });
            })(s);
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: a } = e;
      const n = r();
      s({
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed",
        },
      }),
        (t.zoom = { enabled: !1 });
      let l,
        d,
        p = 1,
        c = !1;
      const u = [],
        m = {
          originX: 0,
          originY: 0,
          slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          imageEl: void 0,
          imageWrapEl: void 0,
          maxRatio: 3,
        },
        f = {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {},
        },
        v = {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0,
        };
      let w = 1;
      function y() {
        if (u.length < 2) return 1;
        const e = u[0].pageX,
          t = u[0].pageY,
          s = u[1].pageX,
          i = u[1].pageY;
        return Math.sqrt((s - e) ** 2 + (i - t) ** 2);
      }
      function x(e) {
        const s = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
        return (
          !!e.target.matches(s) ||
          t.slides.filter((t) => t.contains(e.target)).length > 0
        );
      }
      function E(e) {
        if (("mouse" === e.pointerType && u.splice(0, u.length), !x(e))) return;
        const s = t.params.zoom;
        if (((l = !1), (d = !1), u.push(e), !(u.length < 2))) {
          if (((l = !0), (m.scaleStart = y()), !m.slideEl)) {
            (m.slideEl = e.target.closest(
              `.${t.params.slideClass}, swiper-slide`
            )),
              m.slideEl || (m.slideEl = t.slides[t.activeIndex]);
            let i = m.slideEl.querySelector(`.${s.containerClass}`);
            if (
              (i &&
                (i = i.querySelectorAll(
                  "picture, img, svg, canvas, .swiper-zoom-target"
                )[0]),
                (m.imageEl = i),
                (m.imageWrapEl = i
                  ? b(m.imageEl, `.${s.containerClass}`)[0]
                  : void 0),
                !m.imageWrapEl)
            )
              return void (m.imageEl = void 0);
            m.maxRatio =
              m.imageWrapEl.getAttribute("data-swiper-zoom") || s.maxRatio;
          }
          if (m.imageEl) {
            const [e, t] = (function () {
              if (u.length < 2) return { x: null, y: null };
              const e = m.imageEl.getBoundingClientRect();
              return [
                (u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x) / p,
                (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y) / p,
              ];
            })();
            (m.originX = e),
              (m.originY = t),
              (m.imageEl.style.transitionDuration = "0ms");
          }
          c = !0;
        }
      }
      function S(e) {
        if (!x(e)) return;
        const s = t.params.zoom,
          i = t.zoom,
          a = u.findIndex((t) => t.pointerId === e.pointerId);
        a >= 0 && (u[a] = e),
          u.length < 2 ||
          ((d = !0),
            (m.scaleMove = y()),
            m.imageEl &&
            ((i.scale = (m.scaleMove / m.scaleStart) * p),
              i.scale > m.maxRatio &&
              (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** 0.5),
              i.scale < s.minRatio &&
              (i.scale = s.minRatio + 1 - (s.minRatio - i.scale + 1) ** 0.5),
              (m.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`)));
      }
      function T(e) {
        if (!x(e)) return;
        if ("mouse" === e.pointerType && "pointerout" === e.type) return;
        const s = t.params.zoom,
          i = t.zoom,
          a = u.findIndex((t) => t.pointerId === e.pointerId);
        a >= 0 && u.splice(a, 1),
          l &&
          d &&
          ((l = !1),
            (d = !1),
            m.imageEl &&
            ((i.scale = Math.max(Math.min(i.scale, m.maxRatio), s.minRatio)),
              (m.imageEl.style.transitionDuration = `${t.params.speed}ms`),
              (m.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`),
              (p = i.scale),
              (c = !1),
              i.scale > 1 && m.slideEl
                ? m.slideEl.classList.add(`${s.zoomedSlideClass}`)
                : i.scale <= 1 &&
                m.slideEl &&
                m.slideEl.classList.remove(`${s.zoomedSlideClass}`),
              1 === i.scale &&
              ((m.originX = 0), (m.originY = 0), (m.slideEl = void 0))));
      }
      function M(e) {
        if (
          !x(e) ||
          !(function (e) {
            const s = `.${t.params.zoom.containerClass}`;
            return (
              !!e.target.matches(s) ||
              [...t.hostEl.querySelectorAll(s)].filter((t) =>
                t.contains(e.target)
              ).length > 0
            );
          })(e)
        )
          return;
        const s = t.zoom;
        if (!m.imageEl) return;
        if (!f.isTouched || !m.slideEl) return;
        f.isMoved ||
          ((f.width = m.imageEl.offsetWidth),
            (f.height = m.imageEl.offsetHeight),
            (f.startX = o(m.imageWrapEl, "x") || 0),
            (f.startY = o(m.imageWrapEl, "y") || 0),
            (m.slideWidth = m.slideEl.offsetWidth),
            (m.slideHeight = m.slideEl.offsetHeight),
            (m.imageWrapEl.style.transitionDuration = "0ms"));
        const i = f.width * s.scale,
          a = f.height * s.scale;
        if (i < m.slideWidth && a < m.slideHeight) return;
        (f.minX = Math.min(m.slideWidth / 2 - i / 2, 0)),
          (f.maxX = -f.minX),
          (f.minY = Math.min(m.slideHeight / 2 - a / 2, 0)),
          (f.maxY = -f.minY),
          (f.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX),
          (f.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY);
        if (
          (Math.max(
            Math.abs(f.touchesCurrent.x - f.touchesStart.x),
            Math.abs(f.touchesCurrent.y - f.touchesStart.y)
          ) > 5 && (t.allowClick = !1),
            !f.isMoved && !c)
        ) {
          if (
            t.isHorizontal() &&
            ((Math.floor(f.minX) === Math.floor(f.startX) &&
              f.touchesCurrent.x < f.touchesStart.x) ||
              (Math.floor(f.maxX) === Math.floor(f.startX) &&
                f.touchesCurrent.x > f.touchesStart.x))
          )
            return void (f.isTouched = !1);
          if (
            !t.isHorizontal() &&
            ((Math.floor(f.minY) === Math.floor(f.startY) &&
              f.touchesCurrent.y < f.touchesStart.y) ||
              (Math.floor(f.maxY) === Math.floor(f.startY) &&
                f.touchesCurrent.y > f.touchesStart.y))
          )
            return void (f.isTouched = !1);
        }
        e.cancelable && e.preventDefault(),
          e.stopPropagation(),
          (f.isMoved = !0);
        const r = (s.scale - p) / (m.maxRatio - t.params.zoom.minRatio),
          { originX: n, originY: l } = m;
        (f.currentX =
          f.touchesCurrent.x -
          f.touchesStart.x +
          f.startX +
          r * (f.width - 2 * n)),
          (f.currentY =
            f.touchesCurrent.y -
            f.touchesStart.y +
            f.startY +
            r * (f.height - 2 * l)),
          f.currentX < f.minX &&
          (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8),
          f.currentX > f.maxX &&
          (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8),
          f.currentY < f.minY &&
          (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8),
          f.currentY > f.maxY &&
          (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8),
          v.prevPositionX || (v.prevPositionX = f.touchesCurrent.x),
          v.prevPositionY || (v.prevPositionY = f.touchesCurrent.y),
          v.prevTime || (v.prevTime = Date.now()),
          (v.x =
            (f.touchesCurrent.x - v.prevPositionX) /
            (Date.now() - v.prevTime) /
            2),
          (v.y =
            (f.touchesCurrent.y - v.prevPositionY) /
            (Date.now() - v.prevTime) /
            2),
          Math.abs(f.touchesCurrent.x - v.prevPositionX) < 2 && (v.x = 0),
          Math.abs(f.touchesCurrent.y - v.prevPositionY) < 2 && (v.y = 0),
          (v.prevPositionX = f.touchesCurrent.x),
          (v.prevPositionY = f.touchesCurrent.y),
          (v.prevTime = Date.now()),
          (m.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`);
      }
      function C() {
        const e = t.zoom;
        m.slideEl &&
          t.activeIndex !== t.slides.indexOf(m.slideEl) &&
          (m.imageEl &&
            (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
            m.imageWrapEl &&
            (m.imageWrapEl.style.transform = "translate3d(0,0,0)"),
            m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),
            (e.scale = 1),
            (p = 1),
            (m.slideEl = void 0),
            (m.imageEl = void 0),
            (m.imageWrapEl = void 0),
            (m.originX = 0),
            (m.originY = 0));
      }
      function P(e) {
        const s = t.zoom,
          i = t.params.zoom;
        if (!m.slideEl) {
          e &&
            e.target &&
            (m.slideEl = e.target.closest(
              `.${t.params.slideClass}, swiper-slide`
            )),
            m.slideEl ||
            (t.params.virtual && t.params.virtual.enabled && t.virtual
              ? (m.slideEl = h(
                t.slidesEl,
                `.${t.params.slideActiveClass}`
              )[0])
              : (m.slideEl = t.slides[t.activeIndex]));
          let s = m.slideEl.querySelector(`.${i.containerClass}`);
          s &&
            (s = s.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target"
            )[0]),
            (m.imageEl = s),
            (m.imageWrapEl = s
              ? b(m.imageEl, `.${i.containerClass}`)[0]
              : void 0);
        }
        if (!m.imageEl || !m.imageWrapEl) return;
        let a, r, l, o, d, c, u, v, w, y, x, E, S, T, M, C, P, z;
        t.params.cssMode &&
          ((t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.touchAction = "none")),
          m.slideEl.classList.add(`${i.zoomedSlideClass}`),
          void 0 === f.touchesStart.x && e
            ? ((a = e.pageX), (r = e.pageY))
            : ((a = f.touchesStart.x), (r = f.touchesStart.y));
        const L = "number" == typeof e ? e : null;
        1 === p && L && ((a = void 0), (r = void 0)),
          (s.scale =
            L || m.imageWrapEl.getAttribute("data-swiper-zoom") || i.maxRatio),
          (p =
            L || m.imageWrapEl.getAttribute("data-swiper-zoom") || i.maxRatio),
          !e || (1 === p && L)
            ? ((u = 0), (v = 0))
            : ((P = m.slideEl.offsetWidth),
              (z = m.slideEl.offsetHeight),
              (l = g(m.slideEl).left + n.scrollX),
              (o = g(m.slideEl).top + n.scrollY),
              (d = l + P / 2 - a),
              (c = o + z / 2 - r),
              (w = m.imageEl.offsetWidth),
              (y = m.imageEl.offsetHeight),
              (x = w * s.scale),
              (E = y * s.scale),
              (S = Math.min(P / 2 - x / 2, 0)),
              (T = Math.min(z / 2 - E / 2, 0)),
              (M = -S),
              (C = -T),
              (u = d * s.scale),
              (v = c * s.scale),
              u < S && (u = S),
              u > M && (u = M),
              v < T && (v = T),
              v > C && (v = C)),
          L && 1 === s.scale && ((m.originX = 0), (m.originY = 0)),
          (m.imageWrapEl.style.transitionDuration = "300ms"),
          (m.imageWrapEl.style.transform = `translate3d(${u}px, ${v}px,0)`),
          (m.imageEl.style.transitionDuration = "300ms"),
          (m.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`);
      }
      function z() {
        const e = t.zoom,
          s = t.params.zoom;
        if (!m.slideEl) {
          t.params.virtual && t.params.virtual.enabled && t.virtual
            ? (m.slideEl = h(t.slidesEl, `.${t.params.slideActiveClass}`)[0])
            : (m.slideEl = t.slides[t.activeIndex]);
          let e = m.slideEl.querySelector(`.${s.containerClass}`);
          e &&
            (e = e.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target"
            )[0]),
            (m.imageEl = e),
            (m.imageWrapEl = e
              ? b(m.imageEl, `.${s.containerClass}`)[0]
              : void 0);
        }
        m.imageEl &&
          m.imageWrapEl &&
          (t.params.cssMode &&
            ((t.wrapperEl.style.overflow = ""),
              (t.wrapperEl.style.touchAction = "")),
            (e.scale = 1),
            (p = 1),
            (m.imageWrapEl.style.transitionDuration = "300ms"),
            (m.imageWrapEl.style.transform = "translate3d(0,0,0)"),
            (m.imageEl.style.transitionDuration = "300ms"),
            (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
            m.slideEl.classList.remove(`${s.zoomedSlideClass}`),
            (m.slideEl = void 0),
            (m.originX = 0),
            (m.originY = 0));
      }
      function L(e) {
        const s = t.zoom;
        s.scale && 1 !== s.scale ? z() : P(e);
      }
      function k() {
        return {
          passiveListener: !!t.params.passiveListeners && {
            passive: !0,
            capture: !1,
          },
          activeListenerWithCapture: !t.params.passiveListeners || {
            passive: !1,
            capture: !0,
          },
        };
      }
      function A() {
        const e = t.zoom;
        if (e.enabled) return;
        e.enabled = !0;
        const { passiveListener: s, activeListenerWithCapture: i } = k();
        t.wrapperEl.addEventListener("pointerdown", E, s),
          t.wrapperEl.addEventListener("pointermove", S, i),
          ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
            t.wrapperEl.addEventListener(e, T, s);
          }),
          t.wrapperEl.addEventListener("pointermove", M, i);
      }
      function $() {
        const e = t.zoom;
        if (!e.enabled) return;
        e.enabled = !1;
        const { passiveListener: s, activeListenerWithCapture: i } = k();
        t.wrapperEl.removeEventListener("pointerdown", E, s),
          t.wrapperEl.removeEventListener("pointermove", S, i),
          ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
            t.wrapperEl.removeEventListener(e, T, s);
          }),
          t.wrapperEl.removeEventListener("pointermove", M, i);
      }
      Object.defineProperty(t.zoom, "scale", {
        get: () => w,
        set(e) {
          if (w !== e) {
            const t = m.imageEl,
              s = m.slideEl;
            a("zoomChange", e, t, s);
          }
          w = e;
        },
      }),
        i("init", () => {
          t.params.zoom.enabled && A();
        }),
        i("destroy", () => {
          $();
        }),
        i("touchStart", (e, s) => {
          t.zoom.enabled &&
            (function (e) {
              const s = t.device;
              if (!m.imageEl) return;
              if (f.isTouched) return;
              s.android && e.cancelable && e.preventDefault(),
                (f.isTouched = !0);
              const i = u.length > 0 ? u[0] : e;
              (f.touchesStart.x = i.pageX), (f.touchesStart.y = i.pageY);
            })(s);
        }),
        i("touchEnd", (e, s) => {
          t.zoom.enabled &&
            (function () {
              const e = t.zoom;
              if (!m.imageEl) return;
              if (!f.isTouched || !f.isMoved)
                return (f.isTouched = !1), void (f.isMoved = !1);
              (f.isTouched = !1), (f.isMoved = !1);
              let s = 300,
                i = 300;
              const a = v.x * s,
                r = f.currentX + a,
                n = v.y * i,
                l = f.currentY + n;
              0 !== v.x && (s = Math.abs((r - f.currentX) / v.x)),
                0 !== v.y && (i = Math.abs((l - f.currentY) / v.y));
              const o = Math.max(s, i);
              (f.currentX = r), (f.currentY = l);
              const d = f.width * e.scale,
                p = f.height * e.scale;
              (f.minX = Math.min(m.slideWidth / 2 - d / 2, 0)),
                (f.maxX = -f.minX),
                (f.minY = Math.min(m.slideHeight / 2 - p / 2, 0)),
                (f.maxY = -f.minY),
                (f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX)),
                (f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY)),
                (m.imageWrapEl.style.transitionDuration = `${o}ms`),
                (m.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`);
            })();
        }),
        i("doubleTap", (e, s) => {
          !t.animating &&
            t.params.zoom.enabled &&
            t.zoom.enabled &&
            t.params.zoom.toggle &&
            L(s);
        }),
        i("transitionEnd", () => {
          t.zoom.enabled && t.params.zoom.enabled && C();
        }),
        i("slideChange", () => {
          t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C();
        }),
        Object.assign(t.zoom, {
          enable: A,
          disable: $,
          in: P,
          out: z,
          toggle: L,
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i } = e;
      function a(e, t) {
        const s = (function () {
          let e, t, s;
          return (i, a) => {
            for (t = -1, e = i.length; e - t > 1;)
              (s = (e + t) >> 1), i[s] <= a ? (t = s) : (e = s);
            return e;
          };
        })();
        let i, a;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((a = s(this.x, e)),
                (i = a - 1),
                ((e - this.x[i]) * (this.y[a] - this.y[i])) /
                (this.x[a] - this.x[i]) +
                this.y[i])
              : 0;
          }),
          this
        );
      }
      function r() {
        t.controller.control &&
          t.controller.spline &&
          ((t.controller.spline = void 0), delete t.controller.spline);
      }
      s({ controller: { control: void 0, inverse: !1, by: "slide" } }),
        (t.controller = { control: void 0 }),
        i("beforeInit", () => {
          if (
            "undefined" != typeof window &&
            ("string" == typeof t.params.controller.control ||
              t.params.controller.control instanceof HTMLElement)
          ) {
            const e = document.querySelector(t.params.controller.control);
            if (e && e.swiper) t.controller.control = e.swiper;
            else if (e) {
              const s = (i) => {
                (t.controller.control = i.detail[0]),
                  t.update(),
                  e.removeEventListener("init", s);
              };
              e.addEventListener("init", s);
            }
          } else t.controller.control = t.params.controller.control;
        }),
        i("update", () => {
          r();
        }),
        i("resize", () => {
          r();
        }),
        i("observerUpdate", () => {
          r();
        }),
        i("setTranslate", (e, s, i) => {
          t.controller.control &&
            !t.controller.control.destroyed &&
            t.controller.setTranslate(s, i);
        }),
        i("setTransition", (e, s, i) => {
          t.controller.control &&
            !t.controller.control.destroyed &&
            t.controller.setTransition(s, i);
        }),
        Object.assign(t.controller, {
          setTranslate: function (e, s) {
            const i = t.controller.control;
            let r, n;
            const l = t.constructor;
            function o(e) {
              if (e.destroyed) return;
              const s = t.rtlTranslate ? -t.translate : t.translate;
              "slide" === t.params.controller.by &&
                (!(function (e) {
                  t.controller.spline = t.params.loop
                    ? new a(t.slidesGrid, e.slidesGrid)
                    : new a(t.snapGrid, e.snapGrid);
                })(e),
                  (n = -t.controller.spline.interpolate(-s))),
                (n && "container" !== t.params.controller.by) ||
                ((r =
                  (e.maxTranslate() - e.minTranslate()) /
                  (t.maxTranslate() - t.minTranslate())),
                  (!Number.isNaN(r) && Number.isFinite(r)) || (r = 1),
                  (n = (s - t.minTranslate()) * r + e.minTranslate())),
                t.params.controller.inverse && (n = e.maxTranslate() - n),
                e.updateProgress(n),
                e.setTranslate(n, t),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            }
            if (Array.isArray(i))
              for (let e = 0; e < i.length; e += 1)
                i[e] !== s && i[e] instanceof l && o(i[e]);
            else i instanceof l && s !== i && o(i);
          },
          setTransition: function (e, s) {
            const i = t.constructor,
              a = t.controller.control;
            let r;
            function l(s) {
              s.destroyed ||
                (s.setTransition(e, t),
                  0 !== e &&
                  (s.transitionStart(),
                    s.params.autoHeight &&
                    n(() => {
                      s.updateAutoHeight();
                    }),
                    y(s.wrapperEl, () => {
                      a && s.transitionEnd();
                    })));
            }
            if (Array.isArray(a))
              for (r = 0; r < a.length; r += 1)
                a[r] !== s && a[r] instanceof i && l(a[r]);
            else a instanceof i && s !== a && l(a);
          },
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group",
          id: null,
        },
      }),
        (t.a11y = { clicked: !1 });
      let a = null;
      function r(e) {
        const t = a;
        0 !== t.length && ((t.innerHTML = ""), (t.innerHTML = e));
      }
      const n = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function l(e) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("tabIndex", "0");
        });
      }
      function o(e) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("tabIndex", "-1");
        });
      }
      function d(e, t) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("role", t);
        });
      }
      function p(e, t) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("aria-roledescription", t);
        });
      }
      function c(e, t) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("aria-label", t);
        });
      }
      function u(e) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("aria-disabled", !0);
        });
      }
      function m(e) {
        (e = n(e)).forEach((e) => {
          e.setAttribute("aria-disabled", !1);
        });
      }
      function h(e) {
        if (13 !== e.keyCode && 32 !== e.keyCode) return;
        const s = t.params.a11y,
          i = e.target;
        (t.pagination &&
          t.pagination.el &&
          (i === t.pagination.el || t.pagination.el.contains(e.target)) &&
          !e.target.matches(ee(t.params.pagination.bulletClass))) ||
          (t.navigation &&
            t.navigation.nextEl &&
            i === t.navigation.nextEl &&
            ((t.isEnd && !t.params.loop) || t.slideNext(),
              t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
            t.navigation &&
            t.navigation.prevEl &&
            i === t.navigation.prevEl &&
            ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)),
            t.pagination &&
            i.matches(ee(t.params.pagination.bulletClass)) &&
            i.click());
      }
      function g() {
        return (
          t.pagination && t.pagination.bullets && t.pagination.bullets.length
        );
      }
      function v() {
        return g() && t.params.pagination.clickable;
      }
      const b = (e, t, s) => {
        l(e),
          "BUTTON" !== e.tagName &&
          (d(e, "button"), e.addEventListener("keydown", h)),
          c(e, s),
          (function (e, t) {
            (e = n(e)).forEach((e) => {
              e.setAttribute("aria-controls", t);
            });
          })(e, t);
      },
        y = () => {
          t.a11y.clicked = !0;
        },
        x = () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              t.destroyed || (t.a11y.clicked = !1);
            });
          });
        },
        E = (e) => {
          if (t.a11y.clicked) return;
          const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
          if (!s || !t.slides.includes(s)) return;
          const i = t.slides.indexOf(s) === t.activeIndex,
            a =
              t.params.watchSlidesProgress &&
              t.visibleSlides &&
              t.visibleSlides.includes(s);
          i ||
            a ||
            (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) ||
            (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
              t.slideTo(t.slides.indexOf(s), 0));
        },
        S = () => {
          const e = t.params.a11y;
          e.itemRoleDescriptionMessage &&
            p(t.slides, e.itemRoleDescriptionMessage),
            e.slideRole && d(t.slides, e.slideRole);
          const s = t.slides.length;
          e.slideLabelMessage &&
            t.slides.forEach((i, a) => {
              const r = t.params.loop
                ? parseInt(i.getAttribute("data-swiper-slide-index"), 10)
                : a;
              c(
                i,
                e.slideLabelMessage
                  .replace(/\{\{index\}\}/, r + 1)
                  .replace(/\{\{slidesLength\}\}/, s)
              );
            });
        },
        T = () => {
          const e = t.params.a11y;
          t.el.append(a);
          const s = t.el;
          e.containerRoleDescriptionMessage &&
            p(s, e.containerRoleDescriptionMessage),
            e.containerMessage && c(s, e.containerMessage);
          const i = t.wrapperEl,
            r =
              e.id ||
              i.getAttribute("id") ||
              `swiper-wrapper-${((l = 16),
                void 0 === l && (l = 16),
                "x"
                  .repeat(l)
                  .replace(/x/g, () =>
                    Math.round(16 * Math.random()).toString(16)
                  ))
              }`;
          var l;
          const o =
            t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
          var d;
          (d = r),
            n(i).forEach((e) => {
              e.setAttribute("id", d);
            }),
            (function (e, t) {
              (e = n(e)).forEach((e) => {
                e.setAttribute("aria-live", t);
              });
            })(i, o),
            S();
          let { nextEl: u, prevEl: m } = t.navigation ? t.navigation : {};
          if (
            ((u = n(u)),
              (m = n(m)),
              u && u.forEach((t) => b(t, r, e.nextSlideMessage)),
              m && m.forEach((t) => b(t, r, e.prevSlideMessage)),
              v())
          ) {
            (Array.isArray(t.pagination.el)
              ? t.pagination.el
              : [t.pagination.el]
            ).forEach((e) => {
              e.addEventListener("keydown", h);
            });
          }
          t.el.addEventListener("focus", E, !0),
            t.el.addEventListener("pointerdown", y, !0),
            t.el.addEventListener("pointerup", x, !0);
        };
      i("beforeInit", () => {
        (a = f("span", t.params.a11y.notificationClass)),
          a.setAttribute("aria-live", "assertive"),
          a.setAttribute("aria-atomic", "true");
      }),
        i("afterInit", () => {
          t.params.a11y.enabled && T();
        }),
        i(
          "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
          () => {
            t.params.a11y.enabled && S();
          }
        ),
        i("fromEdge toEdge afterInit lock unlock", () => {
          t.params.a11y.enabled &&
            (function () {
              if (t.params.loop || t.params.rewind || !t.navigation) return;
              const { nextEl: e, prevEl: s } = t.navigation;
              s && (t.isBeginning ? (u(s), o(s)) : (m(s), l(s))),
                e && (t.isEnd ? (u(e), o(e)) : (m(e), l(e)));
            })();
        }),
        i("paginationUpdate", () => {
          t.params.a11y.enabled &&
            (function () {
              const e = t.params.a11y;
              g() &&
                t.pagination.bullets.forEach((s) => {
                  t.params.pagination.clickable &&
                    (l(s),
                      t.params.pagination.renderBullet ||
                      (d(s, "button"),
                        c(
                          s,
                          e.paginationBulletMessage.replace(
                            /\{\{index\}\}/,
                            w(s) + 1
                          )
                        ))),
                    s.matches(ee(t.params.pagination.bulletActiveClass))
                      ? s.setAttribute("aria-current", "true")
                      : s.removeAttribute("aria-current");
                });
            })();
        }),
        i("destroy", () => {
          t.params.a11y.enabled &&
            (function () {
              a && a.remove();
              let { nextEl: e, prevEl: s } = t.navigation ? t.navigation : {};
              (e = n(e)),
                (s = n(s)),
                e && e.forEach((e) => e.removeEventListener("keydown", h)),
                s && s.forEach((e) => e.removeEventListener("keydown", h)),
                v() &&
                (Array.isArray(t.pagination.el)
                  ? t.pagination.el
                  : [t.pagination.el]
                ).forEach((e) => {
                  e.removeEventListener("keydown", h);
                });
              t.el.removeEventListener("focus", E, !0),
                t.el.removeEventListener("pointerdown", y, !0),
                t.el.removeEventListener("pointerup", x, !0);
            })();
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({
        history: {
          enabled: !1,
          root: "",
          replaceState: !1,
          key: "slides",
          keepQuery: !1,
        },
      });
      let a = !1,
        n = {};
      const l = (e) =>
        e
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, ""),
        o = (e) => {
          const t = r();
          let s;
          s = e ? new URL(e) : t.location;
          const i = s.pathname
            .slice(1)
            .split("/")
            .filter((e) => "" !== e),
            a = i.length;
          return { key: i[a - 2], value: i[a - 1] };
        },
        d = (e, s) => {
          const i = r();
          if (!a || !t.params.history.enabled) return;
          let n;
          n = t.params.url ? new URL(t.params.url) : i.location;
          const o = t.slides[s];
          let d = l(o.getAttribute("data-history"));
          if (t.params.history.root.length > 0) {
            let s = t.params.history.root;
            "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)),
              (d = `${s}/${e ? `${e}/` : ""}${d}`);
          } else n.pathname.includes(e) || (d = `${e ? `${e}/` : ""}${d}`);
          t.params.history.keepQuery && (d += n.search);
          const p = i.history.state;
          (p && p.value === d) ||
            (t.params.history.replaceState
              ? i.history.replaceState({ value: d }, null, d)
              : i.history.pushState({ value: d }, null, d));
        },
        p = (e, s, i) => {
          if (s)
            for (let a = 0, r = t.slides.length; a < r; a += 1) {
              const r = t.slides[a];
              if (l(r.getAttribute("data-history")) === s) {
                const s = t.getSlideIndex(r);
                t.slideTo(s, e, i);
              }
            }
          else t.slideTo(0, e, i);
        },
        c = () => {
          (n = o(t.params.url)), p(t.params.speed, n.value, !1);
        };
      i("init", () => {
        t.params.history.enabled &&
          (() => {
            const e = r();
            if (t.params.history) {
              if (!e.history || !e.history.pushState)
                return (
                  (t.params.history.enabled = !1),
                  void (t.params.hashNavigation.enabled = !0)
                );
              (a = !0),
                (n = o(t.params.url)),
                n.key || n.value
                  ? (p(0, n.value, t.params.runCallbacksOnInit),
                    t.params.history.replaceState ||
                    e.addEventListener("popstate", c))
                  : t.params.history.replaceState ||
                  e.addEventListener("popstate", c);
            }
          })();
      }),
        i("destroy", () => {
          t.params.history.enabled &&
            (() => {
              const e = r();
              t.params.history.replaceState ||
                e.removeEventListener("popstate", c);
            })();
        }),
        i("transitionEnd _freeModeNoMomentumRelease", () => {
          a && d(t.params.history.key, t.activeIndex);
        }),
        i("slideChange", () => {
          a && t.params.cssMode && d(t.params.history.key, t.activeIndex);
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, emit: a, on: n } = e,
        l = !1;
      const o = i(),
        d = r();
      s({
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1,
          getSlideIndex(e, s) {
            if (t.virtual && t.params.virtual.enabled) {
              const e = t.slides.filter(
                (e) => e.getAttribute("data-hash") === s
              )[0];
              if (!e) return 0;
              return parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            }
            return t.getSlideIndex(
              h(
                t.slidesEl,
                `.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`
              )[0]
            );
          },
        },
      });
      const p = () => {
        a("hashChange");
        const e = o.location.hash.replace("#", ""),
          s =
            t.virtual && t.params.virtual.enabled
              ? t.slidesEl.querySelector(
                `[data-swiper-slide-index="${t.activeIndex}"]`
              )
              : t.slides[t.activeIndex];
        if (e !== (s ? s.getAttribute("data-hash") : "")) {
          const s = t.params.hashNavigation.getSlideIndex(t, e);
          if (void 0 === s || Number.isNaN(s)) return;
          t.slideTo(s);
        }
      },
        c = () => {
          if (!l || !t.params.hashNavigation.enabled) return;
          const e =
            t.virtual && t.params.virtual.enabled
              ? t.slidesEl.querySelector(
                `[data-swiper-slide-index="${t.activeIndex}"]`
              )
              : t.slides[t.activeIndex],
            s = e
              ? e.getAttribute("data-hash") || e.getAttribute("data-history")
              : "";
          t.params.hashNavigation.replaceState &&
            d.history &&
            d.history.replaceState
            ? (d.history.replaceState(null, null, `#${s}` || ""), a("hashSet"))
            : ((o.location.hash = s || ""), a("hashSet"));
        };
      n("init", () => {
        t.params.hashNavigation.enabled &&
          (() => {
            if (
              !t.params.hashNavigation.enabled ||
              (t.params.history && t.params.history.enabled)
            )
              return;
            l = !0;
            const e = o.location.hash.replace("#", "");
            if (e) {
              const s = 0,
                i = t.params.hashNavigation.getSlideIndex(t, e);
              t.slideTo(i || 0, s, t.params.runCallbacksOnInit, !0);
            }
            t.params.hashNavigation.watchState &&
              d.addEventListener("hashchange", p);
          })();
      }),
        n("destroy", () => {
          t.params.hashNavigation.enabled &&
            t.params.hashNavigation.watchState &&
            d.removeEventListener("hashchange", p);
        }),
        n("transitionEnd _freeModeNoMomentumRelease", () => {
          l && c();
        }),
        n("slideChange", () => {
          l && t.params.cssMode && c();
        });
    },
    function (e) {
      let t,
        s,
        { swiper: a, extendParams: r, on: n, emit: l, params: o } = e;
      (a.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        r({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        });
      let d,
        p,
        c,
        u,
        m,
        h,
        f,
        g = o && o.autoplay ? o.autoplay.delay : 3e3,
        v = o && o.autoplay ? o.autoplay.delay : 3e3,
        w = new Date().getTime;
      function b(e) {
        a &&
          !a.destroyed &&
          a.wrapperEl &&
          e.target === a.wrapperEl &&
          (a.wrapperEl.removeEventListener("transitionend", b), M());
      }
      const y = () => {
        if (a.destroyed || !a.autoplay.running) return;
        a.autoplay.paused ? (p = !0) : p && ((v = d), (p = !1));
        const e = a.autoplay.paused ? d : w + v - new Date().getTime();
        (a.autoplay.timeLeft = e),
          l("autoplayTimeLeft", e, e / g),
          (s = requestAnimationFrame(() => {
            y();
          }));
      },
        x = (e) => {
          if (a.destroyed || !a.autoplay.running) return;
          cancelAnimationFrame(s), y();
          let i = void 0 === e ? a.params.autoplay.delay : e;
          (g = a.params.autoplay.delay), (v = a.params.autoplay.delay);
          const r = (() => {
            let e;
            if (
              ((e =
                a.virtual && a.params.virtual.enabled
                  ? a.slides.filter((e) =>
                    e.classList.contains("swiper-slide-active")
                  )[0]
                  : a.slides[a.activeIndex]),
                !e)
            )
              return;
            return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
          })();
          !Number.isNaN(r) &&
            r > 0 &&
            void 0 === e &&
            ((i = r), (g = r), (v = r)),
            (d = i);
          const n = a.params.speed,
            o = () => {
              a &&
                !a.destroyed &&
                (a.params.autoplay.reverseDirection
                  ? !a.isBeginning || a.params.loop || a.params.rewind
                    ? (a.slidePrev(n, !0, !0), l("autoplay"))
                    : a.params.autoplay.stopOnLastSlide ||
                    (a.slideTo(a.slides.length - 1, n, !0, !0), l("autoplay"))
                  : !a.isEnd || a.params.loop || a.params.rewind
                    ? (a.slideNext(n, !0, !0), l("autoplay"))
                    : a.params.autoplay.stopOnLastSlide ||
                    (a.slideTo(0, n, !0, !0), l("autoplay")),
                  a.params.cssMode &&
                  ((w = new Date().getTime()),
                    requestAnimationFrame(() => {
                      x();
                    })));
            };
          return (
            i > 0
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  o();
                }, i)))
              : requestAnimationFrame(() => {
                o();
              }),
            i
          );
        },
        E = () => {
          (a.autoplay.running = !0), x(), l("autoplayStart");
        },
        S = () => {
          (a.autoplay.running = !1),
            clearTimeout(t),
            cancelAnimationFrame(s),
            l("autoplayStop");
        },
        T = (e, s) => {
          if (a.destroyed || !a.autoplay.running) return;
          clearTimeout(t), e || (f = !0);
          const i = () => {
            l("autoplayPause"),
              a.params.autoplay.waitForTransition
                ? a.wrapperEl.addEventListener("transitionend", b)
                : M();
          };
          if (((a.autoplay.paused = !0), s))
            return h && (d = a.params.autoplay.delay), (h = !1), void i();
          const r = d || a.params.autoplay.delay;
          (d = r - (new Date().getTime() - w)),
            (a.isEnd && d < 0 && !a.params.loop) || (d < 0 && (d = 0), i());
        },
        M = () => {
          (a.isEnd && d < 0 && !a.params.loop) ||
            a.destroyed ||
            !a.autoplay.running ||
            ((w = new Date().getTime()),
              f ? ((f = !1), x(d)) : x(),
              (a.autoplay.paused = !1),
              l("autoplayResume"));
        },
        C = () => {
          if (a.destroyed || !a.autoplay.running) return;
          const e = i();
          "hidden" === e.visibilityState && ((f = !0), T(!0)),
            "visible" === e.visibilityState && M();
        },
        P = (e) => {
          "mouse" === e.pointerType && ((f = !0), T(!0));
        },
        z = (e) => {
          "mouse" === e.pointerType && a.autoplay.paused && M();
        };
      n("init", () => {
        a.params.autoplay.enabled &&
          (a.params.autoplay.pauseOnMouseEnter &&
            (a.el.addEventListener("pointerenter", P),
              a.el.addEventListener("pointerleave", z)),
            i().addEventListener("visibilitychange", C),
            (w = new Date().getTime()),
            E());
      }),
        n("destroy", () => {
          a.el.removeEventListener("pointerenter", P),
            a.el.removeEventListener("pointerleave", z),
            i().removeEventListener("visibilitychange", C),
            a.autoplay.running && S();
        }),
        n("beforeTransitionStart", (e, t, s) => {
          !a.destroyed &&
            a.autoplay.running &&
            (s || !a.params.autoplay.disableOnInteraction ? T(!0, !0) : S());
        }),
        n("sliderFirstMove", () => {
          !a.destroyed &&
            a.autoplay.running &&
            (a.params.autoplay.disableOnInteraction
              ? S()
              : ((c = !0),
                (u = !1),
                (f = !1),
                (m = setTimeout(() => {
                  (f = !0), (u = !0), T(!0);
                }, 200))));
        }),
        n("touchEnd", () => {
          if (!a.destroyed && a.autoplay.running && c) {
            if (
              (clearTimeout(m),
                clearTimeout(t),
                a.params.autoplay.disableOnInteraction)
            )
              return (u = !1), void (c = !1);
            u && a.params.cssMode && M(), (u = !1), (c = !1);
          }
        }),
        n("slideChange", () => {
          !a.destroyed && a.autoplay.running && (h = !0);
        }),
        Object.assign(a.autoplay, { start: E, stop: S, pause: T, resume: M });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let r = !1,
        n = !1;
      function l() {
        const e = t.thumbs.swiper;
        if (!e || e.destroyed) return;
        const s = e.clickedIndex,
          i = e.clickedSlide;
        if (i && i.classList.contains(t.params.thumbs.slideThumbActiveClass))
          return;
        if (null == s) return;
        let a;
        (a = e.params.loop
          ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)
          : s),
          t.params.loop ? t.slideToLoop(a) : t.slideTo(a);
      }
      function o() {
        const { thumbs: e } = t.params;
        if (r) return !1;
        r = !0;
        const s = t.constructor;
        if (e.swiper instanceof s)
          (t.thumbs.swiper = e.swiper),
            Object.assign(t.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(t.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            t.thumbs.swiper.update();
        else if (d(e.swiper)) {
          const i = Object.assign({}, e.swiper);
          Object.assign(i, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (t.thumbs.swiper = new s(i)),
            (n = !0);
        }
        return (
          t.thumbs.swiper.el.classList.add(
            t.params.thumbs.thumbsContainerClass
          ),
          t.thumbs.swiper.on("tap", l),
          !0
        );
      }
      function p(e) {
        const s = t.thumbs.swiper;
        if (!s || s.destroyed) return;
        const i =
          "auto" === s.params.slidesPerView
            ? s.slidesPerViewDynamic()
            : s.params.slidesPerView;
        let a = 1;
        const r = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 &&
            !t.params.centeredSlides &&
            (a = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (a = 1),
            (a = Math.floor(a)),
            s.slides.forEach((e) => e.classList.remove(r)),
            s.params.loop || (s.params.virtual && s.params.virtual.enabled))
        )
          for (let e = 0; e < a; e += 1)
            h(
              s.slidesEl,
              `[data-swiper-slide-index="${t.realIndex + e}"]`
            ).forEach((e) => {
              e.classList.add(r);
            });
        else
          for (let e = 0; e < a; e += 1)
            s.slides[t.realIndex + e] &&
              s.slides[t.realIndex + e].classList.add(r);
        const n = t.params.thumbs.autoScrollOffset,
          l = n && !s.params.loop;
        if (t.realIndex !== s.realIndex || l) {
          const a = s.activeIndex;
          let r, o;
          if (s.params.loop) {
            const e = s.slides.filter(
              (e) =>
                e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`
            )[0];
            (r = s.slides.indexOf(e)),
              (o = t.activeIndex > t.previousIndex ? "next" : "prev");
          } else (r = t.realIndex), (o = r > t.previousIndex ? "next" : "prev");
          l && (r += "next" === o ? n : -1 * n),
            s.visibleSlidesIndexes &&
            s.visibleSlidesIndexes.indexOf(r) < 0 &&
            (s.params.centeredSlides
              ? (r =
                r > a
                  ? r - Math.floor(i / 2) + 1
                  : r + Math.floor(i / 2) - 1)
              : r > a && s.params.slidesPerGroup,
              s.slideTo(r, e ? 0 : void 0));
        }
      }
      (t.thumbs = { swiper: null }),
        a("beforeInit", () => {
          const { thumbs: e } = t.params;
          if (e && e.swiper)
            if (
              "string" == typeof e.swiper ||
              e.swiper instanceof HTMLElement
            ) {
              const s = i(),
                a = () => {
                  const i =
                    "string" == typeof e.swiper
                      ? s.querySelector(e.swiper)
                      : e.swiper;
                  if (i && i.swiper) (e.swiper = i.swiper), o(), p(!0);
                  else if (i) {
                    const s = (a) => {
                      (e.swiper = a.detail[0]),
                        i.removeEventListener("init", s),
                        o(),
                        p(!0),
                        e.swiper.update(),
                        t.update();
                    };
                    i.addEventListener("init", s);
                  }
                  return i;
                },
                r = () => {
                  if (t.destroyed) return;
                  a() || requestAnimationFrame(r);
                };
              requestAnimationFrame(r);
            } else o(), p(!0);
        }),
        a("slideChange update resize observerUpdate", () => {
          p();
        }),
        a("setTransition", (e, s) => {
          const i = t.thumbs.swiper;
          i && !i.destroyed && i.setTransition(s);
        }),
        a("beforeDestroy", () => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && n && e.destroy();
        }),
        Object.assign(t.thumbs, { init: o, update: p });
    },
    function (e) {
      let { swiper: t, extendParams: s, emit: i, once: a } = e;
      s({
        freeMode: {
          enabled: !1,
          momentum: !0,
          momentumRatio: 1,
          momentumBounce: !0,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: !1,
          minimumVelocity: 0.02,
        },
      }),
        Object.assign(t, {
          freeMode: {
            onTouchStart: function () {
              if (t.params.cssMode) return;
              const e = t.getTranslate();
              t.setTranslate(e),
                t.setTransition(0),
                (t.touchEventsData.velocities.length = 0),
                t.freeMode.onTouchEnd({
                  currentPos: t.rtl ? t.translate : -t.translate,
                });
            },
            onTouchMove: function () {
              if (t.params.cssMode) return;
              const { touchEventsData: e, touches: s } = t;
              0 === e.velocities.length &&
                e.velocities.push({
                  position: s[t.isHorizontal() ? "startX" : "startY"],
                  time: e.touchStartTime,
                }),
                e.velocities.push({
                  position: s[t.isHorizontal() ? "currentX" : "currentY"],
                  time: l(),
                });
            },
            onTouchEnd: function (e) {
              let { currentPos: s } = e;
              if (t.params.cssMode) return;
              const {
                params: r,
                wrapperEl: n,
                rtlTranslate: o,
                snapGrid: d,
                touchEventsData: p,
              } = t,
                c = l() - p.touchStartTime;
              if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
              else if (s > -t.maxTranslate())
                t.slides.length < d.length
                  ? t.slideTo(d.length - 1)
                  : t.slideTo(t.slides.length - 1);
              else {
                if (r.freeMode.momentum) {
                  if (p.velocities.length > 1) {
                    const e = p.velocities.pop(),
                      s = p.velocities.pop(),
                      i = e.position - s.position,
                      a = e.time - s.time;
                    (t.velocity = i / a),
                      (t.velocity /= 2),
                      Math.abs(t.velocity) < r.freeMode.minimumVelocity &&
                      (t.velocity = 0),
                      (a > 150 || l() - e.time > 300) && (t.velocity = 0);
                  } else t.velocity = 0;
                  (t.velocity *= r.freeMode.momentumVelocityRatio),
                    (p.velocities.length = 0);
                  let e = 1e3 * r.freeMode.momentumRatio;
                  const s = t.velocity * e;
                  let c = t.translate + s;
                  o && (c = -c);
                  let u,
                    m = !1;
                  const h =
                    20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                  let f;
                  if (c < t.maxTranslate())
                    r.freeMode.momentumBounce
                      ? (c + t.maxTranslate() < -h &&
                        (c = t.maxTranslate() - h),
                        (u = t.maxTranslate()),
                        (m = !0),
                        (p.allowMomentumBounce = !0))
                      : (c = t.maxTranslate()),
                      r.loop && r.centeredSlides && (f = !0);
                  else if (c > t.minTranslate())
                    r.freeMode.momentumBounce
                      ? (c - t.minTranslate() > h && (c = t.minTranslate() + h),
                        (u = t.minTranslate()),
                        (m = !0),
                        (p.allowMomentumBounce = !0))
                      : (c = t.minTranslate()),
                      r.loop && r.centeredSlides && (f = !0);
                  else if (r.freeMode.sticky) {
                    let e;
                    for (let t = 0; t < d.length; t += 1)
                      if (d[t] > -c) {
                        e = t;
                        break;
                      }
                    (c =
                      Math.abs(d[e] - c) < Math.abs(d[e - 1] - c) ||
                        "next" === t.swipeDirection
                        ? d[e]
                        : d[e - 1]),
                      (c = -c);
                  }
                  if (
                    (f &&
                      a("transitionEnd", () => {
                        t.loopFix();
                      }),
                      0 !== t.velocity)
                  ) {
                    if (
                      ((e = o
                        ? Math.abs((-c - t.translate) / t.velocity)
                        : Math.abs((c - t.translate) / t.velocity)),
                        r.freeMode.sticky)
                    ) {
                      const s = Math.abs((o ? -c : c) - t.translate),
                        i = t.slidesSizesGrid[t.activeIndex];
                      e =
                        s < i
                          ? r.speed
                          : s < 2 * i
                            ? 1.5 * r.speed
                            : 2.5 * r.speed;
                    }
                  } else if (r.freeMode.sticky) return void t.slideToClosest();
                  r.freeMode.momentumBounce && m
                    ? (t.updateProgress(u),
                      t.setTransition(e),
                      t.setTranslate(c),
                      t.transitionStart(!0, t.swipeDirection),
                      (t.animating = !0),
                      y(n, () => {
                        t &&
                          !t.destroyed &&
                          p.allowMomentumBounce &&
                          (i("momentumBounce"),
                            t.setTransition(r.speed),
                            setTimeout(() => {
                              t.setTranslate(u),
                                y(n, () => {
                                  t && !t.destroyed && t.transitionEnd();
                                });
                            }, 0));
                      }))
                    : t.velocity
                      ? (i("_freeModeNoMomentumRelease"),
                        t.updateProgress(c),
                        t.setTransition(e),
                        t.setTranslate(c),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating ||
                        ((t.animating = !0),
                          y(n, () => {
                            t && !t.destroyed && t.transitionEnd();
                          })))
                      : t.updateProgress(c),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses();
                } else {
                  if (r.freeMode.sticky) return void t.slideToClosest();
                  r.freeMode && i("_freeModeNoMomentumRelease");
                }
                (!r.freeMode.momentum || c >= r.longSwipesMs) &&
                  (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses());
              }
            },
          },
        });
    },
    function (e) {
      let t,
        s,
        i,
        { swiper: a, extendParams: r } = e;
      r({ grid: { rows: 1, fill: "column" } });
      const n = () => {
        let e = a.params.spaceBetween;
        return (
          "string" == typeof e && e.indexOf("%") >= 0
            ? (e = (parseFloat(e.replace("%", "")) / 100) * a.size)
            : "string" == typeof e && (e = parseFloat(e)),
          e
        );
      };
      a.grid = {
        initSlides: (e) => {
          const { slidesPerView: r } = a.params,
            { rows: n, fill: l } = a.params.grid;
          (i = Math.floor(e / n)),
            (t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n),
            "auto" !== r && "row" === l && (t = Math.max(t, r * n)),
            (s = t / n);
        },
        updateSlide: (e, r, l, o) => {
          const { slidesPerGroup: d } = a.params,
            p = n(),
            { rows: c, fill: u } = a.params.grid;
          let m, h, f;
          if ("row" === u && d > 1) {
            const s = Math.floor(e / (d * c)),
              i = e - c * d * s,
              a = 0 === s ? d : Math.min(Math.ceil((l - s * c * d) / c), d);
            (f = Math.floor(i / a)),
              (h = i - f * a + s * d),
              (m = h + (f * t) / c),
              (r.style.order = m);
          } else
            "column" === u
              ? ((h = Math.floor(e / c)),
                (f = e - h * c),
                (h > i || (h === i && f === c - 1)) &&
                ((f += 1), f >= c && ((f = 0), (h += 1))))
              : ((f = Math.floor(e / s)), (h = e - f * s));
          (r.row = f),
            (r.column = h),
            (r.style[o("margin-top")] = 0 !== f ? p && `${p}px` : "");
        },
        updateWrapperSize: (e, s, i) => {
          const { centeredSlides: r, roundLengths: l } = a.params,
            o = n(),
            { rows: d } = a.params.grid;
          if (
            ((a.virtualSize = (e + o) * t),
              (a.virtualSize = Math.ceil(a.virtualSize / d) - o),
              (a.wrapperEl.style[i("width")] = `${a.virtualSize + o}px`),
              r)
          ) {
            const e = [];
            for (let t = 0; t < s.length; t += 1) {
              let i = s[t];
              l && (i = Math.floor(i)),
                s[t] < a.virtualSize + s[0] && e.push(i);
            }
            s.splice(0, s.length), s.push(...e);
          }
        },
      };
    },
    function (e) {
      let { swiper: t } = e;
      Object.assign(t, {
        appendSlide: te.bind(t),
        prependSlide: se.bind(t),
        addSlide: ie.bind(t),
        removeSlide: ae.bind(t),
        removeAllSlides: re.bind(t),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({ fadeEffect: { crossFade: !1 } }),
        ne({
          effect: "fade",
          swiper: t,
          on: i,
          setTranslate: () => {
            const { slides: e } = t;
            t.params.fadeEffect;
            for (let s = 0; s < e.length; s += 1) {
              const e = t.slides[s];
              let i = -e.swiperSlideOffset;
              t.params.virtualTranslate || (i -= t.translate);
              let a = 0;
              t.isHorizontal() || ((a = i), (i = 0));
              const r = t.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(e.progress), 0)
                : 1 + Math.min(Math.max(e.progress, -1), 0),
                n = le(0, e);
              (n.style.opacity = r),
                (n.style.transform = `translate3d(${i}px, ${a}px, 0px)`);
            }
          },
          setTransition: (e) => {
            const s = t.slides.map((e) => m(e));
            s.forEach((t) => {
              t.style.transitionDuration = `${e}ms`;
            }),
              oe({
                swiper: t,
                duration: e,
                transformElements: s,
                allSlides: !0,
              });
          },
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      });
      const a = (e, t, s) => {
        let i = s
          ? e.querySelector(".swiper-slide-shadow-left")
          : e.querySelector(".swiper-slide-shadow-top"),
          a = s
            ? e.querySelector(".swiper-slide-shadow-right")
            : e.querySelector(".swiper-slide-shadow-bottom");
        i ||
          ((i = f(
            "div",
            (
              "swiper-slide-shadow-cube swiper-slide-shadow-" +
              (s ? "left" : "top")
            ).split(" ")
          )),
            e.append(i)),
          a ||
          ((a = f(
            "div",
            (
              "swiper-slide-shadow-cube swiper-slide-shadow-" +
              (s ? "right" : "bottom")
            ).split(" ")
          )),
            e.append(a)),
          i && (i.style.opacity = Math.max(-t, 0)),
          a && (a.style.opacity = Math.max(t, 0));
      };
      ne({
        effect: "cube",
        swiper: t,
        on: i,
        setTranslate: () => {
          const {
            el: e,
            wrapperEl: s,
            slides: i,
            width: r,
            height: n,
            rtlTranslate: l,
            size: o,
            browser: d,
          } = t,
            p = t.params.cubeEffect,
            c = t.isHorizontal(),
            u = t.virtual && t.params.virtual.enabled;
          let m,
            h = 0;
          p.shadow &&
            (c
              ? ((m = t.wrapperEl.querySelector(".swiper-cube-shadow")),
                m ||
                ((m = f("div", "swiper-cube-shadow")), t.wrapperEl.append(m)),
                (m.style.height = `${r}px`))
              : ((m = e.querySelector(".swiper-cube-shadow")),
                m || ((m = f("div", "swiper-cube-shadow")), e.append(m))));
          for (let e = 0; e < i.length; e += 1) {
            const t = i[e];
            let s = e;
            u && (s = parseInt(t.getAttribute("data-swiper-slide-index"), 10));
            let r = 90 * s,
              n = Math.floor(r / 360);
            l && ((r = -r), (n = Math.floor(-r / 360)));
            const d = Math.max(Math.min(t.progress, 1), -1);
            let m = 0,
              f = 0,
              g = 0;
            s % 4 == 0
              ? ((m = 4 * -n * o), (g = 0))
              : (s - 1) % 4 == 0
                ? ((m = 0), (g = 4 * -n * o))
                : (s - 2) % 4 == 0
                  ? ((m = o + 4 * n * o), (g = o))
                  : (s - 3) % 4 == 0 && ((m = -o), (g = 3 * o + 4 * o * n)),
              l && (m = -m),
              c || ((f = m), (m = 0));
            const v = `rotateX(${c ? 0 : -r}deg) rotateY(${c ? r : 0
              }deg) translate3d(${m}px, ${f}px, ${g}px)`;
            d <= 1 &&
              d > -1 &&
              ((h = 90 * s + 90 * d), l && (h = 90 * -s - 90 * d)),
              (t.style.transform = v),
              p.slideShadows && a(t, d, c);
          }
          if (
            ((s.style.transformOrigin = `50% 50% -${o / 2}px`),
              (s.style["-webkit-transform-origin"] = `50% 50% -${o / 2}px`),
              p.shadow)
          )
            if (c)
              m.style.transform = `translate3d(0px, ${r / 2 + p.shadowOffset
                }px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale
                })`;
            else {
              const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                t =
                  1.5 -
                  (Math.sin((2 * e * Math.PI) / 360) / 2 +
                    Math.cos((2 * e * Math.PI) / 360) / 2),
                s = p.shadowScale,
                i = p.shadowScale / t,
                a = p.shadowOffset;
              m.style.transform = `scale3d(${s}, 1, ${i}) translate3d(0px, ${n / 2 + a
                }px, ${-n / 2 / i}px) rotateX(-90deg)`;
            }
          const g =
            (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -o / 2 : 0;
          (s.style.transform = `translate3d(0px,0,${g}px) rotateX(${t.isHorizontal() ? 0 : h
            }deg) rotateY(${t.isHorizontal() ? -h : 0}deg)`),
            s.style.setProperty("--swiper-cube-translate-z", `${g}px`);
        },
        setTransition: (e) => {
          const { el: s, slides: i } = t;
          if (
            (i.forEach((t) => {
              (t.style.transitionDuration = `${e}ms`),
                t
                  .querySelectorAll(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .forEach((t) => {
                    t.style.transitionDuration = `${e}ms`;
                  });
            }),
              t.params.cubeEffect.shadow && !t.isHorizontal())
          ) {
            const t = s.querySelector(".swiper-cube-shadow");
            t && (t.style.transitionDuration = `${e}ms`);
          }
        },
        recreateShadows: () => {
          const e = t.isHorizontal();
          t.slides.forEach((t) => {
            const s = Math.max(Math.min(t.progress, 1), -1);
            a(t, s, e);
          });
        },
        getEffectParams: () => t.params.cubeEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: !1,
          virtualTranslate: !0,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
      const a = (e, s) => {
        let i = t.isHorizontal()
          ? e.querySelector(".swiper-slide-shadow-left")
          : e.querySelector(".swiper-slide-shadow-top"),
          a = t.isHorizontal()
            ? e.querySelector(".swiper-slide-shadow-right")
            : e.querySelector(".swiper-slide-shadow-bottom");
        i || (i = de("flip", e, t.isHorizontal() ? "left" : "top")),
          a || (a = de("flip", e, t.isHorizontal() ? "right" : "bottom")),
          i && (i.style.opacity = Math.max(-s, 0)),
          a && (a.style.opacity = Math.max(s, 0));
      };
      ne({
        effect: "flip",
        swiper: t,
        on: i,
        setTranslate: () => {
          const { slides: e, rtlTranslate: s } = t,
            i = t.params.flipEffect;
          for (let r = 0; r < e.length; r += 1) {
            const n = e[r];
            let l = n.progress;
            t.params.flipEffect.limitRotation &&
              (l = Math.max(Math.min(n.progress, 1), -1));
            const o = n.swiperSlideOffset;
            let d = -180 * l,
              p = 0,
              c = t.params.cssMode ? -o - t.translate : -o,
              u = 0;
            t.isHorizontal()
              ? s && (d = -d)
              : ((u = c), (c = 0), (p = -d), (d = 0)),
              (n.style.zIndex = -Math.abs(Math.round(l)) + e.length),
              i.slideShadows && a(n, l);
            const m = `translate3d(${c}px, ${u}px, 0px) rotateX(${p}deg) rotateY(${d}deg)`;
            le(0, n).style.transform = m;
          }
        },
        setTransition: (e) => {
          const s = t.slides.map((e) => m(e));
          s.forEach((t) => {
            (t.style.transitionDuration = `${e}ms`),
              t
                .querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .forEach((t) => {
                  t.style.transitionDuration = `${e}ms`;
                });
          }),
            oe({ swiper: t, duration: e, transformElements: s });
        },
        recreateShadows: () => {
          t.params.flipEffect,
            t.slides.forEach((e) => {
              let s = e.progress;
              t.params.flipEffect.limitRotation &&
                (s = Math.max(Math.min(e.progress, 1), -1)),
                a(e, s);
            });
        },
        getEffectParams: () => t.params.flipEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0,
        },
      }),
        ne({
          effect: "coverflow",
          swiper: t,
          on: i,
          setTranslate: () => {
            const { width: e, height: s, slides: i, slidesSizesGrid: a } = t,
              r = t.params.coverflowEffect,
              n = t.isHorizontal(),
              l = t.translate,
              o = n ? e / 2 - l : s / 2 - l,
              d = n ? r.rotate : -r.rotate,
              p = r.depth;
            for (let e = 0, t = i.length; e < t; e += 1) {
              const t = i[e],
                s = a[e],
                l = (o - t.swiperSlideOffset - s / 2) / s,
                c =
                  "function" == typeof r.modifier
                    ? r.modifier(l)
                    : l * r.modifier;
              let u = n ? d * c : 0,
                m = n ? 0 : d * c,
                h = -p * Math.abs(c),
                f = r.stretch;
              "string" == typeof f &&
                -1 !== f.indexOf("%") &&
                (f = (parseFloat(r.stretch) / 100) * s);
              let g = n ? 0 : f * c,
                v = n ? f * c : 0,
                w = 1 - (1 - r.scale) * Math.abs(c);
              Math.abs(v) < 0.001 && (v = 0),
                Math.abs(g) < 0.001 && (g = 0),
                Math.abs(h) < 0.001 && (h = 0),
                Math.abs(u) < 0.001 && (u = 0),
                Math.abs(m) < 0.001 && (m = 0),
                Math.abs(w) < 0.001 && (w = 0);
              const b = `translate3d(${v}px,${g}px,${h}px)  rotateX(${m}deg) rotateY(${u}deg) scale(${w})`;
              if (
                ((le(0, t).style.transform = b),
                  (t.style.zIndex = 1 - Math.abs(Math.round(c))),
                  r.slideShadows)
              ) {
                let e = n
                  ? t.querySelector(".swiper-slide-shadow-left")
                  : t.querySelector(".swiper-slide-shadow-top"),
                  s = n
                    ? t.querySelector(".swiper-slide-shadow-right")
                    : t.querySelector(".swiper-slide-shadow-bottom");
                e || (e = de("coverflow", t, n ? "left" : "top")),
                  s || (s = de("coverflow", t, n ? "right" : "bottom")),
                  e && (e.style.opacity = c > 0 ? c : 0),
                  s && (s.style.opacity = -c > 0 ? -c : 0);
              }
            }
          },
          setTransition: (e) => {
            t.slides
              .map((e) => m(e))
              .forEach((t) => {
                (t.style.transitionDuration = `${e}ms`),
                  t
                    .querySelectorAll(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .forEach((t) => {
                      t.style.transitionDuration = `${e}ms`;
                    });
              });
          },
          perspective: () => !0,
          overwriteParams: () => ({ watchSlidesProgress: !0 }),
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({
        creativeEffect: {
          limitProgress: 1,
          shadowPerProgress: !1,
          progressMultiplier: 1,
          perspective: !0,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
        },
      });
      const a = (e) => ("string" == typeof e ? e : `${e}px`);
      ne({
        effect: "creative",
        swiper: t,
        on: i,
        setTranslate: () => {
          const { slides: e, wrapperEl: s, slidesSizesGrid: i } = t,
            r = t.params.creativeEffect,
            { progressMultiplier: n } = r,
            l = t.params.centeredSlides;
          if (l) {
            const e = i[0] / 2 - t.params.slidesOffsetBefore || 0;
            s.style.transform = `translateX(calc(50% - ${e}px))`;
          }
          for (let s = 0; s < e.length; s += 1) {
            const i = e[s],
              o = i.progress,
              d = Math.min(
                Math.max(i.progress, -r.limitProgress),
                r.limitProgress
              );
            let p = d;
            l ||
              (p = Math.min(
                Math.max(i.originalProgress, -r.limitProgress),
                r.limitProgress
              ));
            const c = i.swiperSlideOffset,
              u = [t.params.cssMode ? -c - t.translate : -c, 0, 0],
              m = [0, 0, 0];
            let h = !1;
            t.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
            let f = {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              scale: 1,
              opacity: 1,
            };
            d < 0
              ? ((f = r.next), (h = !0))
              : d > 0 && ((f = r.prev), (h = !0)),
              u.forEach((e, t) => {
                u[t] = `calc(${e}px + (${a(f.translate[t])} * ${Math.abs(
                  d * n
                )}))`;
              }),
              m.forEach((e, t) => {
                m[t] = f.rotate[t] * Math.abs(d * n);
              }),
              (i.style.zIndex = -Math.abs(Math.round(o)) + e.length);
            const g = u.join(", "),
              v = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
              w =
                p < 0
                  ? `scale(${1 + (1 - f.scale) * p * n})`
                  : `scale(${1 - (1 - f.scale) * p * n})`,
              b =
                p < 0
                  ? 1 + (1 - f.opacity) * p * n
                  : 1 - (1 - f.opacity) * p * n,
              y = `translate3d(${g}) ${v} ${w}`;
            if ((h && f.shadow) || !h) {
              let e = i.querySelector(".swiper-slide-shadow");
              if ((!e && f.shadow && (e = de("creative", i)), e)) {
                const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
              }
            }
            const x = le(0, i);
            (x.style.transform = y),
              (x.style.opacity = b),
              f.origin && (x.style.transformOrigin = f.origin);
          }
        },
        setTransition: (e) => {
          const s = t.slides.map((e) => m(e));
          s.forEach((t) => {
            (t.style.transitionDuration = `${e}ms`),
              t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
                t.style.transitionDuration = `${e}ms`;
              });
          }),
            oe({ swiper: t, duration: e, transformElements: s, allSlides: !0 });
        },
        perspective: () => t.params.creativeEffect.perspective,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({
        cardsEffect: {
          slideShadows: !0,
          rotate: !0,
          perSlideRotate: 2,
          perSlideOffset: 8,
        },
      }),
        ne({
          effect: "cards",
          swiper: t,
          on: i,
          setTranslate: () => {
            const { slides: e, activeIndex: s, rtlTranslate: i } = t,
              a = t.params.cardsEffect,
              { startTranslate: r, isTouched: n } = t.touchEventsData,
              l = i ? -t.translate : t.translate;
            for (let o = 0; o < e.length; o += 1) {
              const d = e[o],
                p = d.progress,
                c = Math.min(Math.max(p, -4), 4);
              let u = d.swiperSlideOffset;
              t.params.centeredSlides &&
                !t.params.cssMode &&
                (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`),
                t.params.centeredSlides &&
                t.params.cssMode &&
                (u -= e[0].swiperSlideOffset);
              let m = t.params.cssMode ? -u - t.translate : -u,
                h = 0;
              const f = -100 * Math.abs(c);
              let g = 1,
                v = -a.perSlideRotate * c,
                w = a.perSlideOffset - 0.75 * Math.abs(c);
              const b =
                t.virtual && t.params.virtual.enabled
                  ? t.virtual.from + o
                  : o,
                y =
                  (b === s || b === s - 1) &&
                  c > 0 &&
                  c < 1 &&
                  (n || t.params.cssMode) &&
                  l < r,
                x =
                  (b === s || b === s + 1) &&
                  c < 0 &&
                  c > -1 &&
                  (n || t.params.cssMode) &&
                  l > r;
              if (y || x) {
                const e = (1 - Math.abs((Math.abs(c) - 0.5) / 0.5)) ** 0.5;
                (v += -28 * c * e),
                  (g += -0.5 * e),
                  (w += 96 * e),
                  (h = -25 * e * Math.abs(c) + "%");
              }
              if (
                ((m =
                  c < 0
                    ? `calc(${m}px ${i ? "-" : "+"} (${w * Math.abs(c)}%))`
                    : c > 0
                      ? `calc(${m}px ${i ? "-" : "+"} (-${w * Math.abs(c)}%))`
                      : `${m}px`),
                  !t.isHorizontal())
              ) {
                const e = h;
                (h = m), (m = e);
              }
              const E = c < 0 ? "" + (1 + (1 - g) * c) : "" + (1 - (1 - g) * c),
                S = `\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${a.rotate ? (i ? -v : v) : 0
                  }deg)\n        scale(${E})\n      `;
              if (a.slideShadows) {
                let e = d.querySelector(".swiper-slide-shadow");
                e || (e = de("cards", d)),
                  e &&
                  (e.style.opacity = Math.min(
                    Math.max((Math.abs(c) - 0.5) / 0.5, 0),
                    1
                  ));
              }
              d.style.zIndex = -Math.abs(Math.round(p)) + e.length;
              le(0, d).style.transform = S;
            }
          },
          setTransition: (e) => {
            const s = t.slides.map((e) => m(e));
            s.forEach((t) => {
              (t.style.transitionDuration = `${e}ms`),
                t.querySelectorAll(".swiper-slide-shadow").forEach((t) => {
                  t.style.transitionDuration = `${e}ms`;
                });
            }),
              oe({ swiper: t, duration: e, transformElements: s });
          },
          perspective: () => !0,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
    },
  ];
  Q.use(pe);
  const ce = [
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
  function ue(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function me(e, t) {
    const s = ["__proto__", "constructor", "prototype"];
    Object.keys(t)
      .filter((e) => s.indexOf(e) < 0)
      .forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : ue(t[s]) && ue(e[s]) && Object.keys(t[s]).length > 0
            ? t[s].__swiper__
              ? (e[s] = t[s])
              : me(e[s], t[s])
            : (e[s] = t[s]);
      });
  }
  function he(e) {
    return (
      void 0 === e && (e = ""),
      e.replace(/-[a-z]/g, (e) => e.toUpperCase().replace("-", ""))
    );
  }
  const fe = (e) => {
    if (parseFloat(e) === Number(e)) return Number(e);
    if ("true" === e) return !0;
    if ("" === e) return !0;
    if ("false" === e) return !1;
    if ("null" === e) return null;
    if ("undefined" !== e) {
      if (
        "string" == typeof e &&
        e.includes("{") &&
        e.includes("}") &&
        e.includes('"')
      ) {
        let t;
        try {
          t = JSON.parse(e);
        } catch (s) {
          t = e;
        }
        return t;
      }
      return e;
    }
  },
    ge = [
      "a11y",
      "autoplay",
      "controller",
      "cards-effect",
      "coverflow-effect",
      "creative-effect",
      "cube-effect",
      "fade-effect",
      "flip-effect",
      "free-mode",
      "grid",
      "hash-navigation",
      "history",
      "keyboard",
      "mousewheel",
      "navigation",
      "pagination",
      "parallax",
      "scrollbar",
      "thumbs",
      "virtual",
      "zoom",
    ];
  function ve(e, t, s) {
    const i = {},
      a = {};
    me(i, W);
    const r = [...ce, "on"],
      n = r.map((e) => e.replace(/_/, ""));
    r.forEach((t) => {
      (t = t.replace("_", "")), void 0 !== e[t] && (a[t] = e[t]);
    });
    const l = [...e.attributes];
    return (
      "string" == typeof t && void 0 !== s && l.push({ name: t, value: s }),
      l.forEach((e) => {
        const t = ge.filter((t) => 0 === e.name.indexOf(`${t}-`))[0];
        if (t) {
          const s = he(t),
            i = he(e.name.split(`${t}-`)[1]);
          void 0 === a[s] && (a[s] = {}),
            !0 === a[s] && (a[s] = { enabled: !0 }),
            (a[s][i] = fe(e.value));
        } else {
          const t = he(e.name);
          if (!n.includes(t)) return;
          const s = fe(e.value);
          a[t] && ge.includes(e.name)
            ? (a[t].constructor !== Object && (a[t] = {}), (a[t].enabled = s))
            : (a[t] = s);
        }
      }),
      me(i, a),
      i.navigation
        ? (i.navigation = {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
          ...(!0 !== i.navigation ? i.navigation : {}),
        })
        : !1 === i.navigation && delete i.navigation,
      i.scrollbar
        ? (i.scrollbar = {
          el: ".swiper-scrollbar",
          ...(!0 !== i.scrollbar ? i.scrollbar : {}),
        })
        : !1 === i.scrollbar && delete i.scrollbar,
      i.pagination
        ? (i.pagination = {
          el: ".swiper-pagination",
          ...(!0 !== i.pagination ? i.pagination : {}),
        })
        : !1 === i.pagination && delete i.pagination,
      { params: i, passedParams: a }
    );
  }
  const we =
    ":host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;overflow:clip;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;-ms-touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active),.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}";
  const be =
    "undefined" == typeof window || "undefined" == typeof HTMLElement
      ? class { }
      : HTMLElement,
    ye =
      '<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>\n    ',
    xe = (e, t) => {
      if ("undefined" != typeof CSSStyleSheet && e.adoptedStyleSheets) {
        const s = new CSSStyleSheet();
        s.replaceSync(t), (e.adoptedStyleSheets = [s]);
      } else {
        const s = document.createElement("style");
        (s.rel = "stylesheet"), (s.textContent = t), e.appendChild(s);
      }
    };
  class Ee extends be {
    constructor() {
      super(), this.attachShadow({ mode: "open" });
    }
    static get nextButtonSvg() {
      return ye;
    }
    static get prevButtonSvg() {
      return ye.replace(
        "/></svg>",
        ' transform-origin="center" transform="rotate(180)"/></svg>'
      );
    }
    cssStyles() {
      return [
        we,
        ...(this.injectStyles && Array.isArray(this.injectStyles)
          ? this.injectStyles
          : []),
      ].join("\n");
    }
    cssLinks() {
      return this.injectStylesUrls || [];
    }
    calcSlideSlots() {
      const e = this.slideSlots || 0,
        t = [...this.querySelectorAll("[slot^=slide-]")].map((e) =>
          parseInt(e.getAttribute("slot").split("slide-")[1], 10)
        );
      if (
        ((this.slideSlots = t.length ? Math.max(...t) + 1 : 0), this.rendered)
      )
        if (this.slideSlots > e)
          for (let t = e; t < this.slideSlots; t += 1) {
            const e = document.createElement("swiper-slide");
            e.setAttribute("part", `slide slide-${t + 1}`);
            const s = document.createElement("slot");
            s.setAttribute("name", `slide-${t + 1}`),
              e.appendChild(s),
              this.shadowRoot.querySelector(".swiper-wrapper").appendChild(e);
          }
        else if (this.slideSlots < e) {
          const e = this.swiper.slides;
          for (let t = e.length - 1; t >= 0; t -= 1)
            t > this.slideSlots && e[t].remove();
        }
    }
    render() {
      if (this.rendered) return;
      this.calcSlideSlots();
      let e = this.cssStyles();
      this.slideSlots > 0 &&
        (e = e.replace(/::slotted\(([a-z-0-9.]*)\)/g, "$1")),
        e.length && xe(this.shadowRoot, e),
        this.cssLinks().forEach((e) => {
          if (this.shadowRoot.querySelector(`link[href="${e}"]`)) return;
          const t = document.createElement("link");
          (t.rel = "stylesheet"), (t.href = e), this.shadowRoot.appendChild(t);
        });
      const t = document.createElement("div");
      var s;
      t.classList.add("swiper"),
        (t.part = "container"),
        (t.innerHTML = `\n      <slot name="container-start"></slot>\n      <div class="swiper-wrapper" part="wrapper">\n        <slot></slot>\n        ${Array.from(
          { length: this.slideSlots }
        )
          .map(
            (e, t) =>
              `\n        <swiper-slide part="slide slide-${t}">\n          <slot name="slide-${t}"></slot>\n        </swiper-slide>\n        `
          )
          .join(
            ""
          )}\n      </div>\n      <slot name="container-end"></slot>\n      ${((s = this.passedParams),
            void 0 === s && (s = {}),
            s.navigation &&
              void 0 === s.navigation.nextEl &&
              void 0 === s.navigation.prevEl
              ? `\n        <div part="button-prev" class="swiper-button-prev">${this.constructor.prevButtonSvg}</div>\n        <div part="button-next" class="swiper-button-next">${this.constructor.nextButtonSvg}</div>\n      `
              : "")
          }\n      ${(function (e) {
            return (
              void 0 === e && (e = {}),
              e.pagination && void 0 === e.pagination.el
            );
          })(this.passedParams)
            ? '\n        <div part="pagination" class="swiper-pagination"></div>\n      '
            : ""
          }\n      ${(function (e) {
            return (
              void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
            );
          })(this.passedParams)
            ? '\n        <div part="scrollbar" class="swiper-scrollbar"></div>\n      '
            : ""
          }\n    `),
        this.shadowRoot.appendChild(t),
        (this.rendered = !0);
    }
    initialize() {
      var e = this;
      if (this.initialized) return;
      this.initialized = !0;
      const { params: t, passedParams: s } = ve(this);
      (this.swiperParams = t),
        (this.passedParams = s),
        delete this.swiperParams.init,
        this.render(),
        (this.swiper = new Q(this.shadowRoot.querySelector(".swiper"), {
          ...(t.virtual
            ? {}
            : { observer: !0, observeSlideChildren: this.slideSlots > 0 }),
          ...t,
          touchEventsTarget: "container",
          onAny: function (s) {
            "observerUpdate" === s && e.calcSlideSlots();
            const i = t.eventsPrefix
              ? `${t.eventsPrefix}${s.toLowerCase()}`
              : s.toLowerCase();
            for (
              var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), n = 1;
              n < a;
              n++
            )
              r[n - 1] = arguments[n];
            const l = new CustomEvent(i, {
              detail: r,
              bubbles: !0,
              cancelable: !0,
            });
            e.dispatchEvent(l);
          },
        }));
    }
    connectedCallback() {
      (this.initialized &&
        this.nested &&
        this.closest("swiper-slide") &&
        this.closest("swiper-slide").swiperLoopMoveDOM) ||
        (!1 !== this.init &&
          "false" !== this.getAttribute("init") &&
          this.initialize());
    }
    disconnectedCallback() {
      (this.nested &&
        this.closest("swiper-slide") &&
        this.closest("swiper-slide").swiperLoopMoveDOM) ||
        (this.swiper && this.swiper.destroy && this.swiper.destroy(),
          (this.initialized = !1));
    }
    updateSwiperOnPropChange(e, t) {
      const { params: s, passedParams: i } = ve(this, e, t);
      (this.passedParams = i),
        (this.swiperParams = s),
        (function (e) {
          let {
            swiper: t,
            slides: s,
            passedParams: i,
            changedParams: a,
            nextEl: r,
            prevEl: n,
            scrollbarEl: l,
            paginationEl: o,
          } = e;
          const d = a.filter(
            (e) =>
              "children" !== e && "direction" !== e && "wrapperClass" !== e
          ),
            {
              params: p,
              pagination: c,
              navigation: u,
              scrollbar: m,
              virtual: h,
              thumbs: f,
            } = t;
          let g, v, w, b, y, x, E, S;
          a.includes("thumbs") &&
            i.thumbs &&
            i.thumbs.swiper &&
            p.thumbs &&
            !p.thumbs.swiper &&
            (g = !0),
            a.includes("controller") &&
            i.controller &&
            i.controller.control &&
            p.controller &&
            !p.controller.control &&
            (v = !0),
            a.includes("pagination") &&
            i.pagination &&
            (i.pagination.el || o) &&
            (p.pagination || !1 === p.pagination) &&
            c &&
            !c.el &&
            (w = !0),
            a.includes("scrollbar") &&
            i.scrollbar &&
            (i.scrollbar.el || l) &&
            (p.scrollbar || !1 === p.scrollbar) &&
            m &&
            !m.el &&
            (b = !0),
            a.includes("navigation") &&
            i.navigation &&
            (i.navigation.prevEl || n) &&
            (i.navigation.nextEl || r) &&
            (p.navigation || !1 === p.navigation) &&
            u &&
            !u.prevEl &&
            !u.nextEl &&
            (y = !0);
          const T = (e) => {
            t[e] &&
              (t[e].destroy(),
                "navigation" === e
                  ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()),
                    (p[e].prevEl = void 0),
                    (p[e].nextEl = void 0),
                    (t[e].prevEl = void 0),
                    (t[e].nextEl = void 0))
                  : (t.isElement && t[e].el.remove(),
                    (p[e].el = void 0),
                    (t[e].el = void 0)));
          };
          a.includes("loop") &&
            t.isElement &&
            (p.loop && !i.loop
              ? (x = !0)
              : !p.loop && i.loop
                ? (E = !0)
                : (S = !0)),
            d.forEach((e) => {
              if (ue(p[e]) && ue(i[e]))
                me(p[e], i[e]),
                  ("navigation" !== e &&
                    "pagination" !== e &&
                    "scrollbar" !== e) ||
                  !("enabled" in i[e]) ||
                  i[e].enabled ||
                  T(e);
              else {
                const t = i[e];
                (!0 !== t && !1 !== t) ||
                  ("navigation" !== e && "pagination" !== e && "scrollbar" !== e)
                  ? (p[e] = i[e])
                  : !1 === t && T(e);
              }
            }),
            d.includes("controller") &&
            !v &&
            t.controller &&
            t.controller.control &&
            p.controller &&
            p.controller.control &&
            (t.controller.control = p.controller.control),
            a.includes("children") &&
            s &&
            h &&
            p.virtual.enabled &&
            ((h.slides = s), h.update(!0)),
            a.includes("children") && s && p.loop && (S = !0),
            g && f.init() && f.update(!0);
          v && (t.controller.control = p.controller.control),
            w &&
            (!t.isElement ||
              (o && "string" != typeof o) ||
              ((o = document.createElement("div")),
                o.classList.add("swiper-pagination"),
                t.el.appendChild(o)),
              o && (p.pagination.el = o),
              c.init(),
              c.render(),
              c.update()),
            b &&
            (!t.isElement ||
              (l && "string" != typeof l) ||
              ((l = document.createElement("div")),
                l.classList.add("swiper-scrollbar"),
                t.el.appendChild(l)),
              l && (p.scrollbar.el = l),
              m.init(),
              m.updateSize(),
              m.setTranslate()),
            y &&
            (t.isElement &&
              ((r && "string" != typeof r) ||
                ((r = document.createElement("div")),
                  r.classList.add("swiper-button-next"),
                  (r.innerHTML = t.hostEl.nextButtonSvg),
                  t.el.appendChild(r)),
                (n && "string" != typeof n) ||
                ((n = document.createElement("div")),
                  n.classList.add("swiper-button-prev"),
                  (r.innerHTML = t.hostEl.prevButtonSvg),
                  t.el.appendChild(n))),
              r && (p.navigation.nextEl = r),
              n && (p.navigation.prevEl = n),
              u.init(),
              u.update()),
            a.includes("allowSlideNext") &&
            (t.allowSlideNext = i.allowSlideNext),
            a.includes("allowSlidePrev") &&
            (t.allowSlidePrev = i.allowSlidePrev),
            a.includes("direction") && t.changeDirection(i.direction, !1),
            (x || S) && t.loopDestroy(),
            (E || S) && t.loopCreate(),
            t.update();
        })({
          swiper: this.swiper,
          passedParams: this.passedParams,
          changedParams: [he(e)],
          ...("navigation" === e && i[e]
            ? { prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }
            : {}),
          ...("pagination" === e && i[e]
            ? { paginationEl: ".swiper-pagination" }
            : {}),
          ...("scrollbar" === e && i[e]
            ? { scrollbarEl: ".swiper-scrollbar" }
            : {}),
        });
    }
    attributeChangedCallback(e, t, s) {
      this.initialized &&
        ("true" === t && null === s && (s = !1),
          this.updateSwiperOnPropChange(e, s));
    }
    static get observedAttributes() {
      return ce
        .filter((e) => e.includes("_"))
        .map((e) =>
          e
            .replace(/[A-Z]/g, (e) => `-${e}`)
            .replace("_", "")
            .toLowerCase()
        );
    }
  }
  ce.forEach((e) => {
    "init" !== e &&
      ((e = e.replace("_", "")),
        Object.defineProperty(Ee.prototype, e, {
          configurable: !0,
          get() {
            return (this.passedParams || {})[e];
          },
          set(t) {
            this.passedParams || (this.passedParams = {}),
              (this.passedParams[e] = t),
              this.initialized && this.updateSwiperOnPropChange(e);
          },
        }));
  });
  class Se extends be {
    constructor() {
      super(), this.attachShadow({ mode: "open" });
    }
    render() {
      const e =
        this.lazy ||
        "" === this.getAttribute("lazy") ||
        "true" === this.getAttribute("lazy");
      if (
        (xe(
          this.shadowRoot,
          "::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-lazy-preloader){animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}"
        ),
          this.shadowRoot.appendChild(document.createElement("slot")),
          e)
      ) {
        const e = document.createElement("div");
        e.classList.add("swiper-lazy-preloader"), this.appendChild(e);
      }
    }
    initialize() {
      this.render();
    }
    connectedCallback() {
      this.initialize();
    }
  }
  "undefined" != typeof window &&
    (window.SwiperElementRegisterParams = (e) => {
      ce.push(...e);
    }),
    "undefined" != typeof window &&
    (window.customElements.get("swiper-container") ||
      window.customElements.define("swiper-container", Ee),
      window.customElements.get("swiper-slide") ||
      window.customElements.define("swiper-slide", Se));
})();
//# sourceMappingURL=swiper-element-bundle.min.js.map
