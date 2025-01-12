(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
    new MutationObserver((i) => {
        for (const r of i)
            if (r.type === "childList")
                for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
        const r = {};
        return (
            i.integrity && (r.integrity = i.integrity),
            i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials"
                ? (r.credentials = "include")
                : i.crossOrigin === "anonymous"
                  ? (r.credentials = "omit")
                  : (r.credentials = "same-origin"),
            r
        );
    }
    function s(i) {
        if (i.ep) return;
        i.ep = !0;
        const r = n(i);
        fetch(i.href, r);
    }
})();
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Qn(e) {
    const t = Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
}
const z = {},
    ht = [],
    Te = () => {},
    pr = () => !1,
    dn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    qn = (e) => e.startsWith("onUpdate:"),
    fe = Object.assign,
    $n = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
    },
    hr = Object.prototype.hasOwnProperty,
    J = (e, t) => hr.call(e, t),
    j = Array.isArray,
    gt = (e) => pn(e) === "[object Map]",
    Qs = (e) => pn(e) === "[object Set]",
    k = (e) => typeof e == "function",
    ie = (e) => typeof e == "string",
    Xe = (e) => typeof e == "symbol",
    $ = (e) => e !== null && typeof e == "object",
    qs = (e) => ($(e) || k(e)) && k(e.then) && k(e.catch),
    $s = Object.prototype.toString,
    pn = (e) => $s.call(e),
    gr = (e) => pn(e).slice(8, -1),
    ei = (e) => pn(e) === "[object Object]",
    es = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Mt = Qn(
        ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
    ),
    hn = (e) => {
        const t = Object.create(null);
        return (n) => t[n] || (t[n] = e(n));
    },
    mr = /-(\w)/g,
    Ue = hn((e) => e.replace(mr, (t, n) => (n ? n.toUpperCase() : ""))),
    yr = /\B([A-Z])/g,
    ct = hn((e) => e.replace(yr, "-$1").toLowerCase()),
    ti = hn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    Sn = hn((e) => (e ? `on${ti(e)}` : "")),
    ze = (e, t) => !Object.is(e, t),
    $t = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t);
    },
    ni = (e, t, n, s = !1) => {
        Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: s, value: n });
    },
    Fn = (e) => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t;
    };
let _s;
const gn = () =>
    _s ||
    (_s =
        typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : typeof window < "u"
                ? window
                : typeof global < "u"
                  ? global
                  : {});
function mn(e) {
    if (j(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n],
                i = ie(s) ? vr(s) : mn(s);
            if (i) for (const r in i) t[r] = i[r];
        }
        return t;
    } else if (ie(e) || $(e)) return e;
}
const Ar = /;(?![^(]*\))/g,
    br = /:([^]+)/,
    _r = /\/\*[^]*?\*\//g;
function vr(e) {
    const t = {};
    return (
        e
            .replace(_r, "")
            .split(Ar)
            .forEach((n) => {
                if (n) {
                    const s = n.split(br);
                    s.length > 1 && (t[s[0].trim()] = s[1].trim());
                }
            }),
        t
    );
}
function bt(e) {
    let t = "";
    if (ie(e)) t = e;
    else if (j(e))
        for (let n = 0; n < e.length; n++) {
            const s = bt(e[n]);
            s && (t += s + " ");
        }
    else if ($(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
}
const wr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    xr = Qn(wr);
function si(e) {
    return !!e || e === "";
}
const ii = (e) => !!(e && e.__v_isRef === !0),
    he = (e) =>
        ie(e)
            ? e
            : e == null
              ? ""
              : j(e) || ($(e) && (e.toString === $s || !k(e.toString)))
                ? ii(e)
                    ? he(e.value)
                    : JSON.stringify(e, ri, 2)
                : String(e),
    ri = (e, t) =>
        ii(t)
            ? ri(e, t.value)
            : gt(t)
              ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, i], r) => ((n[Pn(s, r) + " =>"] = i), n), {}) }
              : Qs(t)
                ? { [`Set(${t.size})`]: [...t.values()].map((n) => Pn(n)) }
                : Xe(t)
                  ? Pn(t)
                  : $(t) && !j(t) && !ei(t)
                    ? String(t)
                    : t,
    Pn = (e, t = "") => {
        var n;
        return Xe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
    };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let de;
class oi {
    constructor(t = !1) {
        (this.detached = t),
            (this._active = !0),
            (this.effects = []),
            (this.cleanups = []),
            (this._isPaused = !1),
            (this.parent = de),
            !t && de && (this.index = (de.scopes || (de.scopes = [])).push(this) - 1);
    }
    get active() {
        return this._active;
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
        }
    }
    run(t) {
        if (this._active) {
            const n = de;
            try {
                return (de = this), t();
            } finally {
                de = n;
            }
        }
    }
    on() {
        de = this;
    }
    off() {
        de = this.parent;
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, s;
            for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
            for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
            if (((this.cleanups.length = 0), this.scopes)) {
                for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
                this.scopes.length = 0;
            }
            if (!this.detached && this.parent && !t) {
                const i = this.parent.scopes.pop();
                i && i !== this && ((this.parent.scopes[this.index] = i), (i.index = this.index));
            }
            this.parent = void 0;
        }
    }
}
function li(e) {
    return new oi(e);
}
function ci() {
    return de;
}
function Cr(e, t = !1) {
    de && de.cleanups.push(e);
}
let K;
const On = new WeakSet();
class ui {
    constructor(t) {
        (this.fn = t),
            (this.deps = void 0),
            (this.depsTail = void 0),
            (this.flags = 5),
            (this.next = void 0),
            (this.cleanup = void 0),
            (this.scheduler = void 0),
            de && de.active && de.effects.push(this);
    }
    pause() {
        this.flags |= 64;
    }
    resume() {
        this.flags & 64 && ((this.flags &= -65), On.has(this) && (On.delete(this), this.trigger()));
    }
    notify() {
        (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || ai(this);
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        (this.flags |= 2), vs(this), di(this);
        const t = K,
            n = Ce;
        (K = this), (Ce = !0);
        try {
            return this.fn();
        } finally {
            pi(this), (K = t), (Ce = n), (this.flags &= -3);
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) ss(t);
            (this.deps = this.depsTail = void 0), vs(this), this.onStop && this.onStop(), (this.flags &= -2);
        }
    }
    trigger() {
        this.flags & 64 ? On.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
        Yn(this) && this.run();
    }
    get dirty() {
        return Yn(this);
    }
}
let fi = 0,
    jt,
    kt;
function ai(e, t = !1) {
    if (((e.flags |= 8), t)) {
        (e.next = kt), (kt = e);
        return;
    }
    (e.next = jt), (jt = e);
}
function ts() {
    fi++;
}
function ns() {
    if (--fi > 0) return;
    if (kt) {
        let t = kt;
        for (kt = void 0; t; ) {
            const n = t.next;
            (t.next = void 0), (t.flags &= -9), (t = n);
        }
    }
    let e;
    for (; jt; ) {
        let t = jt;
        for (jt = void 0; t; ) {
            const n = t.next;
            if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
                try {
                    t.trigger();
                } catch (s) {
                    e || (e = s);
                }
            t = n;
        }
    }
    if (e) throw e;
}
function di(e) {
    for (let t = e.deps; t; t = t.nextDep)
        (t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t);
}
function pi(e) {
    let t,
        n = e.depsTail,
        s = n;
    for (; s; ) {
        const i = s.prevDep;
        s.version === -1 ? (s === n && (n = i), ss(s), Rr(s)) : (t = s),
            (s.dep.activeLink = s.prevActiveLink),
            (s.prevActiveLink = void 0),
            (s = i);
    }
    (e.deps = t), (e.depsTail = n);
}
function Yn(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || (t.dep.computed && (hi(t.dep.computed) || t.dep.version !== t.version)))
            return !0;
    return !!e._dirty;
}
function hi(e) {
    if ((e.flags & 4 && !(e.flags & 16)) || ((e.flags &= -17), e.globalVersion === Et)) return;
    e.globalVersion = Et;
    const t = e.dep;
    if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !Yn(e))) {
        e.flags &= -3;
        return;
    }
    const n = K,
        s = Ce;
    (K = e), (Ce = !0);
    try {
        di(e);
        const i = e.fn(e._value);
        (t.version === 0 || ze(i, e._value)) && ((e._value = i), t.version++);
    } catch (i) {
        throw (t.version++, i);
    } finally {
        (K = n), (Ce = s), pi(e), (e.flags &= -3);
    }
}
function ss(e, t = !1) {
    const { dep: n, prevSub: s, nextSub: i } = e;
    if (
        (s && ((s.nextSub = i), (e.prevSub = void 0)),
        i && ((i.prevSub = s), (e.nextSub = void 0)),
        n.subs === e && ((n.subs = s), !s && n.computed))
    ) {
        n.computed.flags &= -5;
        for (let r = n.computed.deps; r; r = r.nextDep) ss(r, !0);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Rr(e) {
    const { prevDep: t, nextDep: n } = e;
    t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0));
}
let Ce = !0;
const gi = [];
function Ke() {
    gi.push(Ce), (Ce = !1);
}
function Qe() {
    const e = gi.pop();
    Ce = e === void 0 ? !0 : e;
}
function vs(e) {
    const { cleanup: t } = e;
    if (((e.cleanup = void 0), t)) {
        const n = K;
        K = void 0;
        try {
            t();
        } finally {
            K = n;
        }
    }
}
let Et = 0;
class Ir {
    constructor(t, n) {
        (this.sub = t),
            (this.dep = n),
            (this.version = n.version),
            (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0);
    }
}
class is {
    constructor(t) {
        (this.computed = t),
            (this.version = 0),
            (this.activeLink = void 0),
            (this.subs = void 0),
            (this.map = void 0),
            (this.key = void 0),
            (this.sc = 0);
    }
    track(t) {
        if (!K || !Ce || K === this.computed) return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== K)
            (n = this.activeLink = new Ir(K, this)),
                K.deps
                    ? ((n.prevDep = K.depsTail), (K.depsTail.nextDep = n), (K.depsTail = n))
                    : (K.deps = K.depsTail = n),
                mi(n);
        else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
            const s = n.nextDep;
            (s.prevDep = n.prevDep),
                n.prevDep && (n.prevDep.nextDep = s),
                (n.prevDep = K.depsTail),
                (n.nextDep = void 0),
                (K.depsTail.nextDep = n),
                (K.depsTail = n),
                K.deps === n && (K.deps = s);
        }
        return n;
    }
    trigger(t) {
        this.version++, Et++, this.notify(t);
    }
    notify(t) {
        ts();
        try {
            for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
        } finally {
            ns();
        }
    }
}
function mi(e) {
    if ((e.dep.sc++, e.sub.flags & 4)) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let s = t.deps; s; s = s.nextDep) mi(s);
        }
        const n = e.dep.subs;
        n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
    }
}
const sn = new WeakMap(),
    it = Symbol(""),
    Bn = Symbol(""),
    Ft = Symbol("");
function oe(e, t, n) {
    if (Ce && K) {
        let s = sn.get(e);
        s || sn.set(e, (s = new Map()));
        let i = s.get(n);
        i || (s.set(n, (i = new is())), (i.map = s), (i.key = n)), i.track();
    }
}
function Ee(e, t, n, s, i, r) {
    const o = sn.get(e);
    if (!o) {
        Et++;
        return;
    }
    const l = (c) => {
        c && c.trigger();
    };
    if ((ts(), t === "clear")) o.forEach(l);
    else {
        const c = j(e),
            d = c && es(n);
        if (c && n === "length") {
            const a = Number(s);
            o.forEach((h, C) => {
                (C === "length" || C === Ft || (!Xe(C) && C >= a)) && l(h);
            });
        } else
            switch (((n !== void 0 || o.has(void 0)) && l(o.get(n)), d && l(o.get(Ft)), t)) {
                case "add":
                    c ? d && l(o.get("length")) : (l(o.get(it)), gt(e) && l(o.get(Bn)));
                    break;
                case "delete":
                    c || (l(o.get(it)), gt(e) && l(o.get(Bn)));
                    break;
                case "set":
                    gt(e) && l(o.get(it));
                    break;
            }
    }
    ns();
}
function Sr(e, t) {
    const n = sn.get(e);
    return n && n.get(t);
}
function ft(e) {
    const t = Y(e);
    return t === e ? t : (oe(t, "iterate", Ft), xe(e) ? t : t.map(le));
}
function yn(e) {
    return oe((e = Y(e)), "iterate", Ft), e;
}
const Pr = {
    __proto__: null,
    [Symbol.iterator]() {
        return Mn(this, Symbol.iterator, le);
    },
    concat(...e) {
        return ft(this).concat(...e.map((t) => (j(t) ? ft(t) : t)));
    },
    entries() {
        return Mn(this, "entries", (e) => ((e[1] = le(e[1])), e));
    },
    every(e, t) {
        return Ge(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
        return Ge(this, "filter", e, t, (n) => n.map(le), arguments);
    },
    find(e, t) {
        return Ge(this, "find", e, t, le, arguments);
    },
    findIndex(e, t) {
        return Ge(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
        return Ge(this, "findLast", e, t, le, arguments);
    },
    findLastIndex(e, t) {
        return Ge(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
        return Ge(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
        return jn(this, "includes", e);
    },
    indexOf(...e) {
        return jn(this, "indexOf", e);
    },
    join(e) {
        return ft(this).join(e);
    },
    lastIndexOf(...e) {
        return jn(this, "lastIndexOf", e);
    },
    map(e, t) {
        return Ge(this, "map", e, t, void 0, arguments);
    },
    pop() {
        return Rt(this, "pop");
    },
    push(...e) {
        return Rt(this, "push", e);
    },
    reduce(e, ...t) {
        return ws(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
        return ws(this, "reduceRight", e, t);
    },
    shift() {
        return Rt(this, "shift");
    },
    some(e, t) {
        return Ge(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
        return Rt(this, "splice", e);
    },
    toReversed() {
        return ft(this).toReversed();
    },
    toSorted(e) {
        return ft(this).toSorted(e);
    },
    toSpliced(...e) {
        return ft(this).toSpliced(...e);
    },
    unshift(...e) {
        return Rt(this, "unshift", e);
    },
    values() {
        return Mn(this, "values", le);
    },
};
function Mn(e, t, n) {
    const s = yn(e),
        i = s[t]();
    return (
        s !== e &&
            !xe(e) &&
            ((i._next = i.next),
            (i.next = () => {
                const r = i._next();
                return r.value && (r.value = n(r.value)), r;
            })),
        i
    );
}
const Or = Array.prototype;
function Ge(e, t, n, s, i, r) {
    const o = yn(e),
        l = o !== e && !xe(e),
        c = o[t];
    if (c !== Or[t]) {
        const h = c.apply(e, r);
        return l ? le(h) : h;
    }
    let d = n;
    o !== e &&
        (l
            ? (d = function (h, C) {
                  return n.call(this, le(h), C, e);
              })
            : n.length > 2 &&
              (d = function (h, C) {
                  return n.call(this, h, C, e);
              }));
    const a = c.call(o, d, s);
    return l && i ? i(a) : a;
}
function ws(e, t, n, s) {
    const i = yn(e);
    let r = n;
    return (
        i !== e &&
            (xe(e)
                ? n.length > 3 &&
                  (r = function (o, l, c) {
                      return n.call(this, o, l, c, e);
                  })
                : (r = function (o, l, c) {
                      return n.call(this, o, le(l), c, e);
                  })),
        i[t](r, ...s)
    );
}
function jn(e, t, n) {
    const s = Y(e);
    oe(s, "iterate", Ft);
    const i = s[t](...n);
    return (i === -1 || i === !1) && ls(n[0]) ? ((n[0] = Y(n[0])), s[t](...n)) : i;
}
function Rt(e, t, n = []) {
    Ke(), ts();
    const s = Y(e)[t].apply(e, n);
    return ns(), Qe(), s;
}
const Mr = Qn("__proto__,__v_isRef,__isVue"),
    yi = new Set(
        Object.getOwnPropertyNames(Symbol)
            .filter((e) => e !== "arguments" && e !== "caller")
            .map((e) => Symbol[e])
            .filter(Xe),
    );
function jr(e) {
    Xe(e) || (e = String(e));
    const t = Y(this);
    return oe(t, "has", e), t.hasOwnProperty(e);
}
class Ai {
    constructor(t = !1, n = !1) {
        (this._isReadonly = t), (this._isShallow = n);
    }
    get(t, n, s) {
        if (n === "__v_skip") return t.__v_skip;
        const i = this._isReadonly,
            r = this._isShallow;
        if (n === "__v_isReactive") return !i;
        if (n === "__v_isReadonly") return i;
        if (n === "__v_isShallow") return r;
        if (n === "__v_raw")
            return s === (i ? (r ? Br : wi) : r ? vi : _i).get(t) ||
                Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
                ? t
                : void 0;
        const o = j(t);
        if (!i) {
            let c;
            if (o && (c = Pr[n])) return c;
            if (n === "hasOwnProperty") return jr;
        }
        const l = Reflect.get(t, n, ee(t) ? t : s);
        return (Xe(n) ? yi.has(n) : Mr(n)) || (i || oe(t, "get", n), r)
            ? l
            : ee(l)
              ? o && es(n)
                  ? l
                  : l.value
              : $(l)
                ? i
                    ? xi(l)
                    : An(l)
                : l;
    }
}
class bi extends Ai {
    constructor(t = !1) {
        super(!1, t);
    }
    set(t, n, s, i) {
        let r = t[n];
        if (!this._isShallow) {
            const c = ot(r);
            if ((!xe(s) && !ot(s) && ((r = Y(r)), (s = Y(s))), !j(t) && ee(r) && !ee(s)))
                return c ? !1 : ((r.value = s), !0);
        }
        const o = j(t) && es(n) ? Number(n) < t.length : J(t, n),
            l = Reflect.set(t, n, s, ee(t) ? t : i);
        return t === Y(i) && (o ? ze(s, r) && Ee(t, "set", n, s) : Ee(t, "add", n, s)), l;
    }
    deleteProperty(t, n) {
        const s = J(t, n);
        t[n];
        const i = Reflect.deleteProperty(t, n);
        return i && s && Ee(t, "delete", n, void 0), i;
    }
    has(t, n) {
        const s = Reflect.has(t, n);
        return (!Xe(n) || !yi.has(n)) && oe(t, "has", n), s;
    }
    ownKeys(t) {
        return oe(t, "iterate", j(t) ? "length" : it), Reflect.ownKeys(t);
    }
}
class kr extends Ai {
    constructor(t = !1) {
        super(!0, t);
    }
    set(t, n) {
        return !0;
    }
    deleteProperty(t, n) {
        return !0;
    }
}
const Tr = new bi(),
    Zr = new kr(),
    Dr = new bi(!0);
const Hn = (e) => e,
    Kt = (e) => Reflect.getPrototypeOf(e);
function Gr(e, t, n) {
    return function (...s) {
        const i = this.__v_raw,
            r = Y(i),
            o = gt(r),
            l = e === "entries" || (e === Symbol.iterator && o),
            c = e === "keys" && o,
            d = i[e](...s),
            a = n ? Hn : t ? Ln : le;
        return (
            !t && oe(r, "iterate", c ? Bn : it),
            {
                next() {
                    const { value: h, done: C } = d.next();
                    return C ? { value: h, done: C } : { value: l ? [a(h[0]), a(h[1])] : a(h), done: C };
                },
                [Symbol.iterator]() {
                    return this;
                },
            }
        );
    };
}
function Qt(e) {
    return function (...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this;
    };
}
function Wr(e, t) {
    const n = {
        get(i) {
            const r = this.__v_raw,
                o = Y(r),
                l = Y(i);
            e || (ze(i, l) && oe(o, "get", i), oe(o, "get", l));
            const { has: c } = Kt(o),
                d = t ? Hn : e ? Ln : le;
            if (c.call(o, i)) return d(r.get(i));
            if (c.call(o, l)) return d(r.get(l));
            r !== o && r.get(i);
        },
        get size() {
            const i = this.__v_raw;
            return !e && oe(Y(i), "iterate", it), Reflect.get(i, "size", i);
        },
        has(i) {
            const r = this.__v_raw,
                o = Y(r),
                l = Y(i);
            return e || (ze(i, l) && oe(o, "has", i), oe(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
        },
        forEach(i, r) {
            const o = this,
                l = o.__v_raw,
                c = Y(l),
                d = t ? Hn : e ? Ln : le;
            return !e && oe(c, "iterate", it), l.forEach((a, h) => i.call(r, d(a), d(h), o));
        },
    };
    return (
        fe(
            n,
            e
                ? { add: Qt("add"), set: Qt("set"), delete: Qt("delete"), clear: Qt("clear") }
                : {
                      add(i) {
                          !t && !xe(i) && !ot(i) && (i = Y(i));
                          const r = Y(this);
                          return Kt(r).has.call(r, i) || (r.add(i), Ee(r, "add", i, i)), this;
                      },
                      set(i, r) {
                          !t && !xe(r) && !ot(r) && (r = Y(r));
                          const o = Y(this),
                              { has: l, get: c } = Kt(o);
                          let d = l.call(o, i);
                          d || ((i = Y(i)), (d = l.call(o, i)));
                          const a = c.call(o, i);
                          return o.set(i, r), d ? ze(r, a) && Ee(o, "set", i, r) : Ee(o, "add", i, r), this;
                      },
                      delete(i) {
                          const r = Y(this),
                              { has: o, get: l } = Kt(r);
                          let c = o.call(r, i);
                          c || ((i = Y(i)), (c = o.call(r, i))), l && l.call(r, i);
                          const d = r.delete(i);
                          return c && Ee(r, "delete", i, void 0), d;
                      },
                      clear() {
                          const i = Y(this),
                              r = i.size !== 0,
                              o = i.clear();
                          return r && Ee(i, "clear", void 0, void 0), o;
                      },
                  },
        ),
        ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
            n[i] = Gr(i, e, t);
        }),
        n
    );
}
function rs(e, t) {
    const n = Wr(e, t);
    return (s, i, r) =>
        i === "__v_isReactive"
            ? !e
            : i === "__v_isReadonly"
              ? e
              : i === "__v_raw"
                ? s
                : Reflect.get(J(n, i) && i in s ? n : s, i, r);
}
const Er = { get: rs(!1, !1) },
    Fr = { get: rs(!1, !0) },
    Yr = { get: rs(!0, !1) };
const _i = new WeakMap(),
    vi = new WeakMap(),
    wi = new WeakMap(),
    Br = new WeakMap();
function Hr(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0;
    }
}
function Lr(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Hr(gr(e));
}
function An(e) {
    return ot(e) ? e : os(e, !1, Tr, Er, _i);
}
function Jr(e) {
    return os(e, !1, Dr, Fr, vi);
}
function xi(e) {
    return os(e, !0, Zr, Yr, wi);
}
function os(e, t, n, s, i) {
    if (!$(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
    const r = i.get(e);
    if (r) return r;
    const o = Lr(e);
    if (o === 0) return e;
    const l = new Proxy(e, o === 2 ? s : n);
    return i.set(e, l), l;
}
function Ye(e) {
    return ot(e) ? Ye(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ot(e) {
    return !!(e && e.__v_isReadonly);
}
function xe(e) {
    return !!(e && e.__v_isShallow);
}
function ls(e) {
    return e ? !!e.__v_raw : !1;
}
function Y(e) {
    const t = e && e.__v_raw;
    return t ? Y(t) : e;
}
function cs(e) {
    return !J(e, "__v_skip") && Object.isExtensible(e) && ni(e, "__v_skip", !0), e;
}
const le = (e) => ($(e) ? An(e) : e),
    Ln = (e) => ($(e) ? xi(e) : e);
function ee(e) {
    return e ? e.__v_isRef === !0 : !1;
}
function Yt(e) {
    return Nr(e, !1);
}
function Nr(e, t) {
    return ee(e) ? e : new Vr(e, t);
}
class Vr {
    constructor(t, n) {
        (this.dep = new is()),
            (this.__v_isRef = !0),
            (this.__v_isShallow = !1),
            (this._rawValue = n ? t : Y(t)),
            (this._value = n ? t : le(t)),
            (this.__v_isShallow = n);
    }
    get value() {
        return this.dep.track(), this._value;
    }
    set value(t) {
        const n = this._rawValue,
            s = this.__v_isShallow || xe(t) || ot(t);
        (t = s ? t : Y(t)), ze(t, n) && ((this._rawValue = t), (this._value = s ? t : le(t)), this.dep.trigger());
    }
}
function w(e) {
    return ee(e) ? e.value : e;
}
const zr = {
    get: (e, t, n) => (t === "__v_raw" ? e : w(Reflect.get(e, t, n))),
    set: (e, t, n, s) => {
        const i = e[t];
        return ee(i) && !ee(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, s);
    },
};
function Ci(e) {
    return Ye(e) ? e : new Proxy(e, zr);
}
function Ur(e) {
    const t = j(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = Ri(e, n);
    return t;
}
class Xr {
    constructor(t, n, s) {
        (this._object = t), (this._key = n), (this._defaultValue = s), (this.__v_isRef = !0), (this._value = void 0);
    }
    get value() {
        const t = this._object[this._key];
        return (this._value = t === void 0 ? this._defaultValue : t);
    }
    set value(t) {
        this._object[this._key] = t;
    }
    get dep() {
        return Sr(Y(this._object), this._key);
    }
}
class Kr {
    constructor(t) {
        (this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0), (this._value = void 0);
    }
    get value() {
        return (this._value = this._getter());
    }
}
function Qr(e, t, n) {
    return ee(e) ? e : k(e) ? new Kr(e) : $(e) && arguments.length > 1 ? Ri(e, t, n) : Yt(e);
}
function Ri(e, t, n) {
    const s = e[t];
    return ee(s) ? s : new Xr(e, t, n);
}
class qr {
    constructor(t, n, s) {
        (this.fn = t),
            (this.setter = n),
            (this._value = void 0),
            (this.dep = new is(this)),
            (this.__v_isRef = !0),
            (this.deps = void 0),
            (this.depsTail = void 0),
            (this.flags = 16),
            (this.globalVersion = Et - 1),
            (this.next = void 0),
            (this.effect = this),
            (this.__v_isReadonly = !n),
            (this.isSSR = s);
    }
    notify() {
        if (((this.flags |= 16), !(this.flags & 8) && K !== this)) return ai(this, !0), !0;
    }
    get value() {
        const t = this.dep.track();
        return hi(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
        this.setter && this.setter(t);
    }
}
function $r(e, t, n = !1) {
    let s, i;
    return k(e) ? (s = e) : ((s = e.get), (i = e.set)), new qr(s, i, n);
}
const qt = {},
    rn = new WeakMap();
let st;
function eo(e, t = !1, n = st) {
    if (n) {
        let s = rn.get(n);
        s || rn.set(n, (s = [])), s.push(e);
    }
}
function to(e, t, n = z) {
    const { immediate: s, deep: i, once: r, scheduler: o, augmentJob: l, call: c } = n,
        d = (O) => (i ? O : xe(O) || i === !1 || i === 0 ? Fe(O, 1) : Fe(O));
    let a,
        h,
        C,
        v,
        D = !1,
        Z = !1;
    if (
        (ee(e)
            ? ((h = () => e.value), (D = xe(e)))
            : Ye(e)
              ? ((h = () => d(e)), (D = !0))
              : j(e)
                ? ((Z = !0),
                  (D = e.some((O) => Ye(O) || xe(O))),
                  (h = () =>
                      e.map((O) => {
                          if (ee(O)) return O.value;
                          if (Ye(O)) return d(O);
                          if (k(O)) return c ? c(O, 2) : O();
                      })))
                : k(e)
                  ? t
                      ? (h = c ? () => c(e, 2) : e)
                      : (h = () => {
                            if (C) {
                                Ke();
                                try {
                                    C();
                                } finally {
                                    Qe();
                                }
                            }
                            const O = st;
                            st = a;
                            try {
                                return c ? c(e, 3, [v]) : e(v);
                            } finally {
                                st = O;
                            }
                        })
                  : (h = Te),
        t && i)
    ) {
        const O = h,
            L = i === !0 ? 1 / 0 : i;
        h = () => Fe(O(), L);
    }
    const G = ci(),
        B = () => {
            a.stop(), G && G.active && $n(G.effects, a);
        };
    if (r && t) {
        const O = t;
        t = (...L) => {
            O(...L), B();
        };
    }
    let q = Z ? new Array(e.length).fill(qt) : qt;
    const Q = (O) => {
        if (!(!(a.flags & 1) || (!a.dirty && !O)))
            if (t) {
                const L = a.run();
                if (i || D || (Z ? L.some((De, re) => ze(De, q[re])) : ze(L, q))) {
                    C && C();
                    const De = st;
                    st = a;
                    try {
                        const re = [L, q === qt ? void 0 : Z && q[0] === qt ? [] : q, v];
                        c ? c(t, 3, re) : t(...re), (q = L);
                    } finally {
                        st = De;
                    }
                }
            } else a.run();
    };
    return (
        l && l(Q),
        (a = new ui(h)),
        (a.scheduler = o ? () => o(Q, !1) : Q),
        (v = (O) => eo(O, !1, a)),
        (C = a.onStop =
            () => {
                const O = rn.get(a);
                if (O) {
                    if (c) c(O, 4);
                    else for (const L of O) L();
                    rn.delete(a);
                }
            }),
        t ? (s ? Q(!0) : (q = a.run())) : o ? o(Q.bind(null, !0), !0) : a.run(),
        (B.pause = a.pause.bind(a)),
        (B.resume = a.resume.bind(a)),
        (B.stop = B),
        B
    );
}
function Fe(e, t = 1 / 0, n) {
    if (t <= 0 || !$(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e;
    if ((n.add(e), t--, ee(e))) Fe(e.value, t, n);
    else if (j(e)) for (let s = 0; s < e.length; s++) Fe(e[s], t, n);
    else if (Qs(e) || gt(e))
        e.forEach((s) => {
            Fe(s, t, n);
        });
    else if (ei(e)) {
        for (const s in e) Fe(e[s], t, n);
        for (const s of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, s) && Fe(e[s], t, n);
    }
    return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Nt(e, t, n, s) {
    try {
        return s ? e(...s) : e();
    } catch (i) {
        bn(i, t, n);
    }
}
function Ze(e, t, n, s) {
    if (k(e)) {
        const i = Nt(e, t, n, s);
        return (
            i &&
                qs(i) &&
                i.catch((r) => {
                    bn(r, t, n);
                }),
            i
        );
    }
    if (j(e)) {
        const i = [];
        for (let r = 0; r < e.length; r++) i.push(Ze(e[r], t, n, s));
        return i;
    }
}
function bn(e, t, n, s = !0) {
    const i = t ? t.vnode : null,
        { errorHandler: r, throwUnhandledErrorInProduction: o } = (t && t.appContext.config) || z;
    if (t) {
        let l = t.parent;
        const c = t.proxy,
            d = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; l; ) {
            const a = l.ec;
            if (a) {
                for (let h = 0; h < a.length; h++) if (a[h](e, c, d) === !1) return;
            }
            l = l.parent;
        }
        if (r) {
            Ke(), Nt(r, null, 10, [e, c, d]), Qe();
            return;
        }
    }
    no(e, n, i, s, o);
}
function no(e, t, n, s = !0, i = !1) {
    if (i) throw e;
    console.error(e);
}
const pe = [];
let je = -1;
const mt = [];
let Ne = null,
    dt = 0;
const Ii = Promise.resolve();
let on = null;
function Si(e) {
    const t = on || Ii;
    return e ? t.then(this ? e.bind(this) : e) : t;
}
function so(e) {
    let t = je + 1,
        n = pe.length;
    for (; t < n; ) {
        const s = (t + n) >>> 1,
            i = pe[s],
            r = Bt(i);
        r < e || (r === e && i.flags & 2) ? (t = s + 1) : (n = s);
    }
    return t;
}
function us(e) {
    if (!(e.flags & 1)) {
        const t = Bt(e),
            n = pe[pe.length - 1];
        !n || (!(e.flags & 2) && t >= Bt(n)) ? pe.push(e) : pe.splice(so(t), 0, e), (e.flags |= 1), Pi();
    }
}
function Pi() {
    on || (on = Ii.then(Mi));
}
function io(e) {
    j(e) ? mt.push(...e) : Ne && e.id === -1 ? Ne.splice(dt + 1, 0, e) : e.flags & 1 || (mt.push(e), (e.flags |= 1)),
        Pi();
}
function xs(e, t, n = je + 1) {
    for (; n < pe.length; n++) {
        const s = pe[n];
        if (s && s.flags & 2) {
            if (e && s.id !== e.uid) continue;
            pe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
        }
    }
}
function Oi(e) {
    if (mt.length) {
        const t = [...new Set(mt)].sort((n, s) => Bt(n) - Bt(s));
        if (((mt.length = 0), Ne)) {
            Ne.push(...t);
            return;
        }
        for (Ne = t, dt = 0; dt < Ne.length; dt++) {
            const n = Ne[dt];
            n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
        }
        (Ne = null), (dt = 0);
    }
}
const Bt = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function Mi(e) {
    try {
        for (je = 0; je < pe.length; je++) {
            const t = pe[je];
            t &&
                !(t.flags & 8) &&
                (t.flags & 4 && (t.flags &= -2), Nt(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
        }
    } finally {
        for (; je < pe.length; je++) {
            const t = pe[je];
            t && (t.flags &= -2);
        }
        (je = -1), (pe.length = 0), Oi(), (on = null), (pe.length || mt.length) && Mi();
    }
}
let be = null,
    ji = null;
function ln(e) {
    const t = be;
    return (be = e), (ji = (e && e.type.__scopeId) || null), t;
}
function ro(e, t = be, n) {
    if (!t || e._n) return e;
    const s = (...i) => {
        s._d && ks(-1);
        const r = ln(t);
        let o;
        try {
            o = e(...i);
        } finally {
            ln(r), s._d && ks(1);
        }
        return o;
    };
    return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function _n(e, t) {
    if (be === null) return e;
    const n = Cn(be),
        s = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
        let [r, o, l, c = z] = t[i];
        r &&
            (k(r) && (r = { mounted: r, updated: r }),
            r.deep && Fe(o),
            s.push({ dir: r, instance: n, value: o, oldValue: void 0, arg: l, modifiers: c }));
    }
    return e;
}
function tt(e, t, n, s) {
    const i = e.dirs,
        r = t && t.dirs;
    for (let o = 0; o < i.length; o++) {
        const l = i[o];
        r && (l.oldValue = r[o].value);
        let c = l.dir[s];
        c && (Ke(), Ze(c, n, 8, [e.el, l, e, t]), Qe());
    }
}
const oo = Symbol("_vte"),
    lo = (e) => e.__isTeleport;
function fs(e, t) {
    e.shapeFlag & 6 && e.component
        ? ((e.transition = t), fs(e.component.subTree, t))
        : e.shapeFlag & 128
          ? ((e.ssContent.transition = t.clone(e.ssContent)), (e.ssFallback.transition = t.clone(e.ssFallback)))
          : (e.transition = t);
}
/*! #__NO_SIDE_EFFECTS__ */ function Be(e, t) {
    return k(e) ? fe({ name: e.name }, t, { setup: e }) : e;
}
function ki(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function cn(e, t, n, s, i = !1) {
    if (j(e)) {
        e.forEach((D, Z) => cn(D, t && (j(t) ? t[Z] : t), n, s, i));
        return;
    }
    if (Tt(s) && !i) {
        s.shapeFlag & 512 &&
            s.type.__asyncResolved &&
            s.component.subTree.component &&
            cn(e, t, n, s.component.subTree);
        return;
    }
    const r = s.shapeFlag & 4 ? Cn(s.component) : s.el,
        o = i ? null : r,
        { i: l, r: c } = e,
        d = t && t.r,
        a = l.refs === z ? (l.refs = {}) : l.refs,
        h = l.setupState,
        C = Y(h),
        v = h === z ? () => !1 : (D) => J(C, D);
    if ((d != null && d !== c && (ie(d) ? ((a[d] = null), v(d) && (h[d] = null)) : ee(d) && (d.value = null)), k(c)))
        Nt(c, l, 12, [o, a]);
    else {
        const D = ie(c),
            Z = ee(c);
        if (D || Z) {
            const G = () => {
                if (e.f) {
                    const B = D ? (v(c) ? h[c] : a[c]) : c.value;
                    i
                        ? j(B) && $n(B, r)
                        : j(B)
                          ? B.includes(r) || B.push(r)
                          : D
                            ? ((a[c] = [r]), v(c) && (h[c] = a[c]))
                            : ((c.value = [r]), e.k && (a[e.k] = c.value));
                } else D ? ((a[c] = o), v(c) && (h[c] = o)) : Z && ((c.value = o), e.k && (a[e.k] = o));
            };
            o ? ((G.id = -1), Ae(G, n)) : G();
        }
    }
}
gn().requestIdleCallback;
gn().cancelIdleCallback;
const Tt = (e) => !!e.type.__asyncLoader,
    Ti = (e) => e.type.__isKeepAlive;
function co(e, t) {
    Zi(e, "a", t);
}
function uo(e, t) {
    Zi(e, "da", t);
}
function Zi(e, t, n = ue) {
    const s =
        e.__wdc ||
        (e.__wdc = () => {
            let i = n;
            for (; i; ) {
                if (i.isDeactivated) return;
                i = i.parent;
            }
            return e();
        });
    if ((vn(t, s, n), n)) {
        let i = n.parent;
        for (; i && i.parent; ) Ti(i.parent.vnode) && fo(s, t, n, i), (i = i.parent);
    }
}
function fo(e, t, n, s) {
    const i = vn(t, e, s, !0);
    Di(() => {
        $n(s[t], i);
    }, n);
}
function vn(e, t, n = ue, s = !1) {
    if (n) {
        const i = n[e] || (n[e] = []),
            r =
                t.__weh ||
                (t.__weh = (...o) => {
                    Ke();
                    const l = Vt(n),
                        c = Ze(t, n, e, o);
                    return l(), Qe(), c;
                });
        return s ? i.unshift(r) : i.push(r), r;
    }
}
const He =
        (e) =>
        (t, n = ue) => {
            (!Jt || e === "sp") && vn(e, (...s) => t(...s), n);
        },
    ao = He("bm"),
    as = He("m"),
    po = He("bu"),
    ho = He("u"),
    go = He("bum"),
    Di = He("um"),
    mo = He("sp"),
    yo = He("rtg"),
    Ao = He("rtc");
function bo(e, t = ue) {
    vn("ec", e, t);
}
const _o = Symbol.for("v-ndc");
function Ht(e, t, n, s) {
    let i;
    const r = n,
        o = j(e);
    if (o || ie(e)) {
        const l = o && Ye(e);
        let c = !1;
        l && ((c = !xe(e)), (e = yn(e))), (i = new Array(e.length));
        for (let d = 0, a = e.length; d < a; d++) i[d] = t(c ? le(e[d]) : e[d], d, void 0, r);
    } else if (typeof e == "number") {
        i = new Array(e);
        for (let l = 0; l < e; l++) i[l] = t(l + 1, l, void 0, r);
    } else if ($(e))
        if (e[Symbol.iterator]) i = Array.from(e, (l, c) => t(l, c, void 0, r));
        else {
            const l = Object.keys(e);
            i = new Array(l.length);
            for (let c = 0, d = l.length; c < d; c++) {
                const a = l[c];
                i[c] = t(e[a], a, c, r);
            }
        }
    else i = [];
    return i;
}
const Jn = (e) => (e ? (sr(e) ? Cn(e) : Jn(e.parent)) : null),
    Zt = fe(Object.create(null), {
        $: (e) => e,
        $el: (e) => e.vnode.el,
        $data: (e) => e.data,
        $props: (e) => e.props,
        $attrs: (e) => e.attrs,
        $slots: (e) => e.slots,
        $refs: (e) => e.refs,
        $parent: (e) => Jn(e.parent),
        $root: (e) => Jn(e.root),
        $host: (e) => e.ce,
        $emit: (e) => e.emit,
        $options: (e) => Wi(e),
        $forceUpdate: (e) =>
            e.f ||
            (e.f = () => {
                us(e.update);
            }),
        $nextTick: (e) => e.n || (e.n = Si.bind(e.proxy)),
        $watch: (e) => Lo.bind(e),
    }),
    kn = (e, t) => e !== z && !e.__isScriptSetup && J(e, t),
    vo = {
        get({ _: e }, t) {
            if (t === "__v_skip") return !0;
            const { ctx: n, setupState: s, data: i, props: r, accessCache: o, type: l, appContext: c } = e;
            let d;
            if (t[0] !== "$") {
                const v = o[t];
                if (v !== void 0)
                    switch (v) {
                        case 1:
                            return s[t];
                        case 2:
                            return i[t];
                        case 4:
                            return n[t];
                        case 3:
                            return r[t];
                    }
                else {
                    if (kn(s, t)) return (o[t] = 1), s[t];
                    if (i !== z && J(i, t)) return (o[t] = 2), i[t];
                    if ((d = e.propsOptions[0]) && J(d, t)) return (o[t] = 3), r[t];
                    if (n !== z && J(n, t)) return (o[t] = 4), n[t];
                    Nn && (o[t] = 0);
                }
            }
            const a = Zt[t];
            let h, C;
            if (a) return t === "$attrs" && oe(e.attrs, "get", ""), a(e);
            if ((h = l.__cssModules) && (h = h[t])) return h;
            if (n !== z && J(n, t)) return (o[t] = 4), n[t];
            if (((C = c.config.globalProperties), J(C, t))) return C[t];
        },
        set({ _: e }, t, n) {
            const { data: s, setupState: i, ctx: r } = e;
            return kn(i, t)
                ? ((i[t] = n), !0)
                : s !== z && J(s, t)
                  ? ((s[t] = n), !0)
                  : J(e.props, t) || (t[0] === "$" && t.slice(1) in e)
                    ? !1
                    : ((r[t] = n), !0);
        },
        has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, propsOptions: r } }, o) {
            let l;
            return (
                !!n[o] ||
                (e !== z && J(e, o)) ||
                kn(t, o) ||
                ((l = r[0]) && J(l, o)) ||
                J(s, o) ||
                J(Zt, o) ||
                J(i.config.globalProperties, o)
            );
        },
        defineProperty(e, t, n) {
            return (
                n.get != null ? (e._.accessCache[t] = 0) : J(n, "value") && this.set(e, t, n.value, null),
                Reflect.defineProperty(e, t, n)
            );
        },
    };
function Cs(e) {
    return j(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Nn = !0;
function wo(e) {
    const t = Wi(e),
        n = e.proxy,
        s = e.ctx;
    (Nn = !1), t.beforeCreate && Rs(t.beforeCreate, e, "bc");
    const {
        data: i,
        computed: r,
        methods: o,
        watch: l,
        provide: c,
        inject: d,
        created: a,
        beforeMount: h,
        mounted: C,
        beforeUpdate: v,
        updated: D,
        activated: Z,
        deactivated: G,
        beforeDestroy: B,
        beforeUnmount: q,
        destroyed: Q,
        unmounted: O,
        render: L,
        renderTracked: De,
        renderTriggered: re,
        errorCaptured: H,
        serverPrefetch: V,
        expose: ne,
        inheritAttrs: we,
        components: Re,
        directives: Le,
        filters: vt,
    } = t;
    if ((d && xo(d, s, null), o))
        for (const W in o) {
            const U = o[W];
            k(U) && (s[W] = U.bind(n));
        }
    if (i) {
        const W = i.call(n, n);
        $(W) && (e.data = An(W));
    }
    if (((Nn = !0), r))
        for (const W in r) {
            const U = r[W],
                $e = k(U) ? U.bind(n, n) : k(U.get) ? U.get.bind(n, n) : Te,
                Ut = !k(U) && k(U.set) ? U.set.bind(n) : Te,
                et = hs({ get: $e, set: Ut });
            Object.defineProperty(s, W, {
                enumerable: !0,
                configurable: !0,
                get: () => et.value,
                set: (Ie) => (et.value = Ie),
            });
        }
    if (l) for (const W in l) Gi(l[W], s, n, W);
    if (c) {
        const W = k(c) ? c.call(n) : c;
        Reflect.ownKeys(W).forEach((U) => {
            Oo(U, W[U]);
        });
    }
    a && Rs(a, e, "c");
    function te(W, U) {
        j(U) ? U.forEach(($e) => W($e.bind(n))) : U && W(U.bind(n));
    }
    if (
        (te(ao, h),
        te(as, C),
        te(po, v),
        te(ho, D),
        te(co, Z),
        te(uo, G),
        te(bo, H),
        te(Ao, De),
        te(yo, re),
        te(go, q),
        te(Di, O),
        te(mo, V),
        j(ne))
    )
        if (ne.length) {
            const W = e.exposed || (e.exposed = {});
            ne.forEach((U) => {
                Object.defineProperty(W, U, { get: () => n[U], set: ($e) => (n[U] = $e) });
            });
        } else e.exposed || (e.exposed = {});
    L && e.render === Te && (e.render = L),
        we != null && (e.inheritAttrs = we),
        Re && (e.components = Re),
        Le && (e.directives = Le),
        V && ki(e);
}
function xo(e, t, n = Te) {
    j(e) && (e = Vn(e));
    for (const s in e) {
        const i = e[s];
        let r;
        $(i) ? ("default" in i ? (r = Dt(i.from || s, i.default, !0)) : (r = Dt(i.from || s))) : (r = Dt(i)),
            ee(r)
                ? Object.defineProperty(t, s, {
                      enumerable: !0,
                      configurable: !0,
                      get: () => r.value,
                      set: (o) => (r.value = o),
                  })
                : (t[s] = r);
    }
}
function Rs(e, t, n) {
    Ze(j(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Gi(e, t, n, s) {
    let i = s.includes(".") ? Qi(n, s) : () => n[s];
    if (ie(e)) {
        const r = t[e];
        k(r) && en(i, r);
    } else if (k(e)) en(i, e.bind(n));
    else if ($(e))
        if (j(e)) e.forEach((r) => Gi(r, t, n, s));
        else {
            const r = k(e.handler) ? e.handler.bind(n) : t[e.handler];
            k(r) && en(i, r, e);
        }
}
function Wi(e) {
    const t = e.type,
        { mixins: n, extends: s } = t,
        {
            mixins: i,
            optionsCache: r,
            config: { optionMergeStrategies: o },
        } = e.appContext,
        l = r.get(t);
    let c;
    return (
        l
            ? (c = l)
            : !i.length && !n && !s
              ? (c = t)
              : ((c = {}), i.length && i.forEach((d) => un(c, d, o, !0)), un(c, t, o)),
        $(t) && r.set(t, c),
        c
    );
}
function un(e, t, n, s = !1) {
    const { mixins: i, extends: r } = t;
    r && un(e, r, n, !0), i && i.forEach((o) => un(e, o, n, !0));
    for (const o in t)
        if (!(s && o === "expose")) {
            const l = Co[o] || (n && n[o]);
            e[o] = l ? l(e[o], t[o]) : t[o];
        }
    return e;
}
const Co = {
    data: Is,
    props: Ss,
    emits: Ss,
    methods: Pt,
    computed: Pt,
    beforeCreate: ae,
    created: ae,
    beforeMount: ae,
    mounted: ae,
    beforeUpdate: ae,
    updated: ae,
    beforeDestroy: ae,
    beforeUnmount: ae,
    destroyed: ae,
    unmounted: ae,
    activated: ae,
    deactivated: ae,
    errorCaptured: ae,
    serverPrefetch: ae,
    components: Pt,
    directives: Pt,
    watch: Io,
    provide: Is,
    inject: Ro,
};
function Is(e, t) {
    return t
        ? e
            ? function () {
                  return fe(k(e) ? e.call(this, this) : e, k(t) ? t.call(this, this) : t);
              }
            : t
        : e;
}
function Ro(e, t) {
    return Pt(Vn(e), Vn(t));
}
function Vn(e) {
    if (j(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t;
    }
    return e;
}
function ae(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
}
function Pt(e, t) {
    return e ? fe(Object.create(null), e, t) : t;
}
function Ss(e, t) {
    return e ? (j(e) && j(t) ? [...new Set([...e, ...t])] : fe(Object.create(null), Cs(e), Cs(t ?? {}))) : t;
}
function Io(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = fe(Object.create(null), e);
    for (const s in t) n[s] = ae(e[s], t[s]);
    return n;
}
function Ei() {
    return {
        app: null,
        config: {
            isNativeTag: pr,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {},
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap(),
    };
}
let So = 0;
function Po(e, t) {
    return function (s, i = null) {
        k(s) || (s = fe({}, s)), i != null && !$(i) && (i = null);
        const r = Ei(),
            o = new WeakSet(),
            l = [];
        let c = !1;
        const d = (r.app = {
            _uid: So++,
            _component: s,
            _props: i,
            _container: null,
            _context: r,
            _instance: null,
            version: ul,
            get config() {
                return r.config;
            },
            set config(a) {},
            use(a, ...h) {
                return (
                    o.has(a) || (a && k(a.install) ? (o.add(a), a.install(d, ...h)) : k(a) && (o.add(a), a(d, ...h))), d
                );
            },
            mixin(a) {
                return r.mixins.includes(a) || r.mixins.push(a), d;
            },
            component(a, h) {
                return h ? ((r.components[a] = h), d) : r.components[a];
            },
            directive(a, h) {
                return h ? ((r.directives[a] = h), d) : r.directives[a];
            },
            mount(a, h, C) {
                if (!c) {
                    const v = d._ceVNode || ve(s, i);
                    return (
                        (v.appContext = r),
                        C === !0 ? (C = "svg") : C === !1 && (C = void 0),
                        e(v, a, C),
                        (c = !0),
                        (d._container = a),
                        (a.__vue_app__ = d),
                        Cn(v.component)
                    );
                }
            },
            onUnmount(a) {
                l.push(a);
            },
            unmount() {
                c && (Ze(l, d._instance, 16), e(null, d._container), delete d._container.__vue_app__);
            },
            provide(a, h) {
                return (r.provides[a] = h), d;
            },
            runWithContext(a) {
                const h = rt;
                rt = d;
                try {
                    return a();
                } finally {
                    rt = h;
                }
            },
        });
        return d;
    };
}
let rt = null;
function Oo(e, t) {
    if (ue) {
        let n = ue.provides;
        const s = ue.parent && ue.parent.provides;
        s === n && (n = ue.provides = Object.create(s)), (n[e] = t);
    }
}
function Dt(e, t, n = !1) {
    const s = ue || be;
    if (s || rt) {
        const i = rt
            ? rt._context.provides
            : s
              ? s.parent == null
                  ? s.vnode.appContext && s.vnode.appContext.provides
                  : s.parent.provides
              : void 0;
        if (i && e in i) return i[e];
        if (arguments.length > 1) return n && k(t) ? t.call(s && s.proxy) : t;
    }
}
function Mo() {
    return !!(ue || be || rt);
}
const Fi = {},
    Yi = () => Object.create(Fi),
    Bi = (e) => Object.getPrototypeOf(e) === Fi;
function jo(e, t, n, s = !1) {
    const i = {},
        r = Yi();
    (e.propsDefaults = Object.create(null)), Hi(e, t, i, r);
    for (const o in e.propsOptions[0]) o in i || (i[o] = void 0);
    n ? (e.props = s ? i : Jr(i)) : e.type.props ? (e.props = i) : (e.props = r), (e.attrs = r);
}
function ko(e, t, n, s) {
    const {
            props: i,
            attrs: r,
            vnode: { patchFlag: o },
        } = e,
        l = Y(i),
        [c] = e.propsOptions;
    let d = !1;
    if ((s || o > 0) && !(o & 16)) {
        if (o & 8) {
            const a = e.vnode.dynamicProps;
            for (let h = 0; h < a.length; h++) {
                let C = a[h];
                if (wn(e.emitsOptions, C)) continue;
                const v = t[C];
                if (c)
                    if (J(r, C)) v !== r[C] && ((r[C] = v), (d = !0));
                    else {
                        const D = Ue(C);
                        i[D] = zn(c, l, D, v, e, !1);
                    }
                else v !== r[C] && ((r[C] = v), (d = !0));
            }
        }
    } else {
        Hi(e, t, i, r) && (d = !0);
        let a;
        for (const h in l)
            (!t || (!J(t, h) && ((a = ct(h)) === h || !J(t, a)))) &&
                (c ? n && (n[h] !== void 0 || n[a] !== void 0) && (i[h] = zn(c, l, h, void 0, e, !0)) : delete i[h]);
        if (r !== l) for (const h in r) (!t || !J(t, h)) && (delete r[h], (d = !0));
    }
    d && Ee(e.attrs, "set", "");
}
function Hi(e, t, n, s) {
    const [i, r] = e.propsOptions;
    let o = !1,
        l;
    if (t)
        for (let c in t) {
            if (Mt(c)) continue;
            const d = t[c];
            let a;
            i && J(i, (a = Ue(c)))
                ? !r || !r.includes(a)
                    ? (n[a] = d)
                    : ((l || (l = {}))[a] = d)
                : wn(e.emitsOptions, c) || ((!(c in s) || d !== s[c]) && ((s[c] = d), (o = !0)));
        }
    if (r) {
        const c = Y(n),
            d = l || z;
        for (let a = 0; a < r.length; a++) {
            const h = r[a];
            n[h] = zn(i, c, h, d[h], e, !J(d, h));
        }
    }
    return o;
}
function zn(e, t, n, s, i, r) {
    const o = e[n];
    if (o != null) {
        const l = J(o, "default");
        if (l && s === void 0) {
            const c = o.default;
            if (o.type !== Function && !o.skipFactory && k(c)) {
                const { propsDefaults: d } = i;
                if (n in d) s = d[n];
                else {
                    const a = Vt(i);
                    (s = d[n] = c.call(null, t)), a();
                }
            } else s = c;
            i.ce && i.ce._setProp(n, s);
        }
        o[0] && (r && !l ? (s = !1) : o[1] && (s === "" || s === ct(n)) && (s = !0));
    }
    return s;
}
const To = new WeakMap();
function Li(e, t, n = !1) {
    const s = n ? To : t.propsCache,
        i = s.get(e);
    if (i) return i;
    const r = e.props,
        o = {},
        l = [];
    let c = !1;
    if (!k(e)) {
        const a = (h) => {
            c = !0;
            const [C, v] = Li(h, t, !0);
            fe(o, C), v && l.push(...v);
        };
        !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
    }
    if (!r && !c) return $(e) && s.set(e, ht), ht;
    if (j(r))
        for (let a = 0; a < r.length; a++) {
            const h = Ue(r[a]);
            Ps(h) && (o[h] = z);
        }
    else if (r)
        for (const a in r) {
            const h = Ue(a);
            if (Ps(h)) {
                const C = r[a],
                    v = (o[h] = j(C) || k(C) ? { type: C } : fe({}, C)),
                    D = v.type;
                let Z = !1,
                    G = !0;
                if (j(D))
                    for (let B = 0; B < D.length; ++B) {
                        const q = D[B],
                            Q = k(q) && q.name;
                        if (Q === "Boolean") {
                            Z = !0;
                            break;
                        } else Q === "String" && (G = !1);
                    }
                else Z = k(D) && D.name === "Boolean";
                (v[0] = Z), (v[1] = G), (Z || J(v, "default")) && l.push(h);
            }
        }
    const d = [o, l];
    return $(e) && s.set(e, d), d;
}
function Ps(e) {
    return e[0] !== "$" && !Mt(e);
}
const Ji = (e) => e[0] === "_" || e === "$stable",
    ds = (e) => (j(e) ? e.map(ke) : [ke(e)]),
    Zo = (e, t, n) => {
        if (t._n) return t;
        const s = ro((...i) => ds(t(...i)), n);
        return (s._c = !1), s;
    },
    Ni = (e, t, n) => {
        const s = e._ctx;
        for (const i in e) {
            if (Ji(i)) continue;
            const r = e[i];
            if (k(r)) t[i] = Zo(i, r, s);
            else if (r != null) {
                const o = ds(r);
                t[i] = () => o;
            }
        }
    },
    Vi = (e, t) => {
        const n = ds(t);
        e.slots.default = () => n;
    },
    zi = (e, t, n) => {
        for (const s in t) (n || s !== "_") && (e[s] = t[s]);
    },
    Do = (e, t, n) => {
        const s = (e.slots = Yi());
        if (e.vnode.shapeFlag & 32) {
            const i = t._;
            i ? (zi(s, t, n), n && ni(s, "_", i, !0)) : Ni(t, s);
        } else t && Vi(e, t);
    },
    Go = (e, t, n) => {
        const { vnode: s, slots: i } = e;
        let r = !0,
            o = z;
        if (s.shapeFlag & 32) {
            const l = t._;
            l ? (n && l === 1 ? (r = !1) : zi(i, t, n)) : ((r = !t.$stable), Ni(t, i)), (o = t);
        } else t && (Vi(e, t), (o = { default: 1 }));
        if (r) for (const l in i) !Ji(l) && o[l] == null && delete i[l];
    },
    Ae = Ko;
function Wo(e) {
    return Eo(e);
}
function Eo(e, t) {
    const n = gn();
    n.__VUE__ = !0;
    const {
            insert: s,
            remove: i,
            patchProp: r,
            createElement: o,
            createText: l,
            createComment: c,
            setText: d,
            setElementText: a,
            parentNode: h,
            nextSibling: C,
            setScopeId: v = Te,
            insertStaticContent: D,
        } = e,
        Z = (u, f, p, y = null, g = null, m = null, x = void 0, _ = null, b = !!f.dynamicChildren) => {
            if (u === f) return;
            u && !It(u, f) && ((y = Xt(u)), Ie(u, g, m, !0), (u = null)),
                f.patchFlag === -2 && ((b = !1), (f.dynamicChildren = null));
            const { type: A, ref: P, shapeFlag: R } = f;
            switch (A) {
                case xn:
                    G(u, f, p, y);
                    break;
                case lt:
                    B(u, f, p, y);
                    break;
                case Zn:
                    u == null && q(f, p, y, x);
                    break;
                case ce:
                    Re(u, f, p, y, g, m, x, _, b);
                    break;
                default:
                    R & 1
                        ? L(u, f, p, y, g, m, x, _, b)
                        : R & 6
                          ? Le(u, f, p, y, g, m, x, _, b)
                          : (R & 64 || R & 128) && A.process(u, f, p, y, g, m, x, _, b, xt);
            }
            P != null && g && cn(P, u && u.ref, m, f || u, !f);
        },
        G = (u, f, p, y) => {
            if (u == null) s((f.el = l(f.children)), p, y);
            else {
                const g = (f.el = u.el);
                f.children !== u.children && d(g, f.children);
            }
        },
        B = (u, f, p, y) => {
            u == null ? s((f.el = c(f.children || "")), p, y) : (f.el = u.el);
        },
        q = (u, f, p, y) => {
            [u.el, u.anchor] = D(u.children, f, p, y, u.el, u.anchor);
        },
        Q = ({ el: u, anchor: f }, p, y) => {
            let g;
            for (; u && u !== f; ) (g = C(u)), s(u, p, y), (u = g);
            s(f, p, y);
        },
        O = ({ el: u, anchor: f }) => {
            let p;
            for (; u && u !== f; ) (p = C(u)), i(u), (u = p);
            i(f);
        },
        L = (u, f, p, y, g, m, x, _, b) => {
            f.type === "svg" ? (x = "svg") : f.type === "math" && (x = "mathml"),
                u == null ? De(f, p, y, g, m, x, _, b) : V(u, f, g, m, x, _, b);
        },
        De = (u, f, p, y, g, m, x, _) => {
            let b, A;
            const { props: P, shapeFlag: R, transition: S, dirs: M } = u;
            if (
                ((b = u.el = o(u.type, m, P && P.is, P)),
                R & 8 ? a(b, u.children) : R & 16 && H(u.children, b, null, y, g, Tn(u, m), x, _),
                M && tt(u, null, y, "created"),
                re(b, u, u.scopeId, x, y),
                P)
            ) {
                for (const X in P) X !== "value" && !Mt(X) && r(b, X, null, P[X], m, y);
                "value" in P && r(b, "value", null, P.value, m), (A = P.onVnodeBeforeMount) && Me(A, y, u);
            }
            M && tt(u, null, y, "beforeMount");
            const F = Fo(g, S);
            F && S.beforeEnter(b),
                s(b, f, p),
                ((A = P && P.onVnodeMounted) || F || M) &&
                    Ae(() => {
                        A && Me(A, y, u), F && S.enter(b), M && tt(u, null, y, "mounted");
                    }, g);
        },
        re = (u, f, p, y, g) => {
            if ((p && v(u, p), y)) for (let m = 0; m < y.length; m++) v(u, y[m]);
            if (g) {
                let m = g.subTree;
                if (f === m || ($i(m.type) && (m.ssContent === f || m.ssFallback === f))) {
                    const x = g.vnode;
                    re(u, x, x.scopeId, x.slotScopeIds, g.parent);
                }
            }
        },
        H = (u, f, p, y, g, m, x, _, b = 0) => {
            for (let A = b; A < u.length; A++) {
                const P = (u[A] = _ ? Ve(u[A]) : ke(u[A]));
                Z(null, P, f, p, y, g, m, x, _);
            }
        },
        V = (u, f, p, y, g, m, x) => {
            const _ = (f.el = u.el);
            let { patchFlag: b, dynamicChildren: A, dirs: P } = f;
            b |= u.patchFlag & 16;
            const R = u.props || z,
                S = f.props || z;
            let M;
            if (
                (p && nt(p, !1),
                (M = S.onVnodeBeforeUpdate) && Me(M, p, f, u),
                P && tt(f, u, p, "beforeUpdate"),
                p && nt(p, !0),
                ((R.innerHTML && S.innerHTML == null) || (R.textContent && S.textContent == null)) && a(_, ""),
                A ? ne(u.dynamicChildren, A, _, p, y, Tn(f, g), m) : x || U(u, f, _, null, p, y, Tn(f, g), m, !1),
                b > 0)
            ) {
                if (b & 16) we(_, R, S, p, g);
                else if (
                    (b & 2 && R.class !== S.class && r(_, "class", null, S.class, g),
                    b & 4 && r(_, "style", R.style, S.style, g),
                    b & 8)
                ) {
                    const F = f.dynamicProps;
                    for (let X = 0; X < F.length; X++) {
                        const N = F[X],
                            me = R[N],
                            ge = S[N];
                        (ge !== me || N === "value") && r(_, N, me, ge, g, p);
                    }
                }
                b & 1 && u.children !== f.children && a(_, f.children);
            } else !x && A == null && we(_, R, S, p, g);
            ((M = S.onVnodeUpdated) || P) &&
                Ae(() => {
                    M && Me(M, p, f, u), P && tt(f, u, p, "updated");
                }, y);
        },
        ne = (u, f, p, y, g, m, x) => {
            for (let _ = 0; _ < f.length; _++) {
                const b = u[_],
                    A = f[_],
                    P = b.el && (b.type === ce || !It(b, A) || b.shapeFlag & 70) ? h(b.el) : p;
                Z(b, A, P, null, y, g, m, x, !0);
            }
        },
        we = (u, f, p, y, g) => {
            if (f !== p) {
                if (f !== z) for (const m in f) !Mt(m) && !(m in p) && r(u, m, f[m], null, g, y);
                for (const m in p) {
                    if (Mt(m)) continue;
                    const x = p[m],
                        _ = f[m];
                    x !== _ && m !== "value" && r(u, m, _, x, g, y);
                }
                "value" in p && r(u, "value", f.value, p.value, g);
            }
        },
        Re = (u, f, p, y, g, m, x, _, b) => {
            const A = (f.el = u ? u.el : l("")),
                P = (f.anchor = u ? u.anchor : l(""));
            let { patchFlag: R, dynamicChildren: S, slotScopeIds: M } = f;
            M && (_ = _ ? _.concat(M) : M),
                u == null
                    ? (s(A, p, y), s(P, p, y), H(f.children || [], p, P, g, m, x, _, b))
                    : R > 0 && R & 64 && S && u.dynamicChildren
                      ? (ne(u.dynamicChildren, S, p, g, m, x, _),
                        (f.key != null || (g && f === g.subTree)) && Ui(u, f, !0))
                      : U(u, f, p, P, g, m, x, _, b);
        },
        Le = (u, f, p, y, g, m, x, _, b) => {
            (f.slotScopeIds = _),
                u == null ? (f.shapeFlag & 512 ? g.ctx.activate(f, p, y, x, b) : vt(f, p, y, g, m, x, b)) : zt(u, f, b);
        },
        vt = (u, f, p, y, g, m, x) => {
            const _ = (u.component = sl(u, y, g));
            if ((Ti(u) && (_.ctx.renderer = xt), il(_, !1, x), _.asyncDep)) {
                if ((g && g.registerDep(_, te, x), !u.el)) {
                    const b = (_.subTree = ve(lt));
                    B(null, b, f, p);
                }
            } else te(_, u, f, p, g, m, x);
        },
        zt = (u, f, p) => {
            const y = (f.component = u.component);
            if (Uo(u, f, p))
                if (y.asyncDep && !y.asyncResolved) {
                    W(y, f, p);
                    return;
                } else (y.next = f), y.update();
            else (f.el = u.el), (y.vnode = f);
        },
        te = (u, f, p, y, g, m, x) => {
            const _ = () => {
                if (u.isMounted) {
                    let { next: R, bu: S, u: M, parent: F, vnode: X } = u;
                    {
                        const Pe = Xi(u);
                        if (Pe) {
                            R && ((R.el = X.el), W(u, R, x)),
                                Pe.asyncDep.then(() => {
                                    u.isUnmounted || _();
                                });
                            return;
                        }
                    }
                    let N = R,
                        me;
                    nt(u, !1),
                        R ? ((R.el = X.el), W(u, R, x)) : (R = X),
                        S && $t(S),
                        (me = R.props && R.props.onVnodeBeforeUpdate) && Me(me, F, R, X),
                        nt(u, !0);
                    const ge = Ms(u),
                        Se = u.subTree;
                    (u.subTree = ge),
                        Z(Se, ge, h(Se.el), Xt(Se), u, g, m),
                        (R.el = ge.el),
                        N === null && Xo(u, ge.el),
                        M && Ae(M, g),
                        (me = R.props && R.props.onVnodeUpdated) && Ae(() => Me(me, F, R, X), g);
                } else {
                    let R;
                    const { el: S, props: M } = f,
                        { bm: F, m: X, parent: N, root: me, type: ge } = u,
                        Se = Tt(f);
                    nt(u, !1), F && $t(F), !Se && (R = M && M.onVnodeBeforeMount) && Me(R, N, f), nt(u, !0);
                    {
                        me.ce && me.ce._injectChildStyle(ge);
                        const Pe = (u.subTree = Ms(u));
                        Z(null, Pe, p, y, u, g, m), (f.el = Pe.el);
                    }
                    if ((X && Ae(X, g), !Se && (R = M && M.onVnodeMounted))) {
                        const Pe = f;
                        Ae(() => Me(R, N, Pe), g);
                    }
                    (f.shapeFlag & 256 || (N && Tt(N.vnode) && N.vnode.shapeFlag & 256)) && u.a && Ae(u.a, g),
                        (u.isMounted = !0),
                        (f = p = y = null);
                }
            };
            u.scope.on();
            const b = (u.effect = new ui(_));
            u.scope.off();
            const A = (u.update = b.run.bind(b)),
                P = (u.job = b.runIfDirty.bind(b));
            (P.i = u), (P.id = u.uid), (b.scheduler = () => us(P)), nt(u, !0), A();
        },
        W = (u, f, p) => {
            f.component = u;
            const y = u.vnode.props;
            (u.vnode = f), (u.next = null), ko(u, f.props, y, p), Go(u, f.children, p), Ke(), xs(u), Qe();
        },
        U = (u, f, p, y, g, m, x, _, b = !1) => {
            const A = u && u.children,
                P = u ? u.shapeFlag : 0,
                R = f.children,
                { patchFlag: S, shapeFlag: M } = f;
            if (S > 0) {
                if (S & 128) {
                    Ut(A, R, p, y, g, m, x, _, b);
                    return;
                } else if (S & 256) {
                    $e(A, R, p, y, g, m, x, _, b);
                    return;
                }
            }
            M & 8
                ? (P & 16 && wt(A, g, m), R !== A && a(p, R))
                : P & 16
                  ? M & 16
                      ? Ut(A, R, p, y, g, m, x, _, b)
                      : wt(A, g, m, !0)
                  : (P & 8 && a(p, ""), M & 16 && H(R, p, y, g, m, x, _, b));
        },
        $e = (u, f, p, y, g, m, x, _, b) => {
            (u = u || ht), (f = f || ht);
            const A = u.length,
                P = f.length,
                R = Math.min(A, P);
            let S;
            for (S = 0; S < R; S++) {
                const M = (f[S] = b ? Ve(f[S]) : ke(f[S]));
                Z(u[S], M, p, null, g, m, x, _, b);
            }
            A > P ? wt(u, g, m, !0, !1, R) : H(f, p, y, g, m, x, _, b, R);
        },
        Ut = (u, f, p, y, g, m, x, _, b) => {
            let A = 0;
            const P = f.length;
            let R = u.length - 1,
                S = P - 1;
            for (; A <= R && A <= S; ) {
                const M = u[A],
                    F = (f[A] = b ? Ve(f[A]) : ke(f[A]));
                if (It(M, F)) Z(M, F, p, null, g, m, x, _, b);
                else break;
                A++;
            }
            for (; A <= R && A <= S; ) {
                const M = u[R],
                    F = (f[S] = b ? Ve(f[S]) : ke(f[S]));
                if (It(M, F)) Z(M, F, p, null, g, m, x, _, b);
                else break;
                R--, S--;
            }
            if (A > R) {
                if (A <= S) {
                    const M = S + 1,
                        F = M < P ? f[M].el : y;
                    for (; A <= S; ) Z(null, (f[A] = b ? Ve(f[A]) : ke(f[A])), p, F, g, m, x, _, b), A++;
                }
            } else if (A > S) for (; A <= R; ) Ie(u[A], g, m, !0), A++;
            else {
                const M = A,
                    F = A,
                    X = new Map();
                for (A = F; A <= S; A++) {
                    const ye = (f[A] = b ? Ve(f[A]) : ke(f[A]));
                    ye.key != null && X.set(ye.key, A);
                }
                let N,
                    me = 0;
                const ge = S - F + 1;
                let Se = !1,
                    Pe = 0;
                const Ct = new Array(ge);
                for (A = 0; A < ge; A++) Ct[A] = 0;
                for (A = M; A <= R; A++) {
                    const ye = u[A];
                    if (me >= ge) {
                        Ie(ye, g, m, !0);
                        continue;
                    }
                    let Oe;
                    if (ye.key != null) Oe = X.get(ye.key);
                    else
                        for (N = F; N <= S; N++)
                            if (Ct[N - F] === 0 && It(ye, f[N])) {
                                Oe = N;
                                break;
                            }
                    Oe === void 0
                        ? Ie(ye, g, m, !0)
                        : ((Ct[Oe - F] = A + 1),
                          Oe >= Pe ? (Pe = Oe) : (Se = !0),
                          Z(ye, f[Oe], p, null, g, m, x, _, b),
                          me++);
                }
                const As = Se ? Yo(Ct) : ht;
                for (N = As.length - 1, A = ge - 1; A >= 0; A--) {
                    const ye = F + A,
                        Oe = f[ye],
                        bs = ye + 1 < P ? f[ye + 1].el : y;
                    Ct[A] === 0
                        ? Z(null, Oe, p, bs, g, m, x, _, b)
                        : Se && (N < 0 || A !== As[N] ? et(Oe, p, bs, 2) : N--);
                }
            }
        },
        et = (u, f, p, y, g = null) => {
            const { el: m, type: x, transition: _, children: b, shapeFlag: A } = u;
            if (A & 6) {
                et(u.component.subTree, f, p, y);
                return;
            }
            if (A & 128) {
                u.suspense.move(f, p, y);
                return;
            }
            if (A & 64) {
                x.move(u, f, p, xt);
                return;
            }
            if (x === ce) {
                s(m, f, p);
                for (let R = 0; R < b.length; R++) et(b[R], f, p, y);
                s(u.anchor, f, p);
                return;
            }
            if (x === Zn) {
                Q(u, f, p);
                return;
            }
            if (y !== 2 && A & 1 && _)
                if (y === 0) _.beforeEnter(m), s(m, f, p), Ae(() => _.enter(m), g);
                else {
                    const { leave: R, delayLeave: S, afterLeave: M } = _,
                        F = () => s(m, f, p),
                        X = () => {
                            R(m, () => {
                                F(), M && M();
                            });
                        };
                    S ? S(m, F, X) : X();
                }
            else s(m, f, p);
        },
        Ie = (u, f, p, y = !1, g = !1) => {
            const {
                type: m,
                props: x,
                ref: _,
                children: b,
                dynamicChildren: A,
                shapeFlag: P,
                patchFlag: R,
                dirs: S,
                cacheIndex: M,
            } = u;
            if (
                (R === -2 && (g = !1),
                _ != null && cn(_, null, p, u, !0),
                M != null && (f.renderCache[M] = void 0),
                P & 256)
            ) {
                f.ctx.deactivate(u);
                return;
            }
            const F = P & 1 && S,
                X = !Tt(u);
            let N;
            if ((X && (N = x && x.onVnodeBeforeUnmount) && Me(N, f, u), P & 6)) dr(u.component, p, y);
            else {
                if (P & 128) {
                    u.suspense.unmount(p, y);
                    return;
                }
                F && tt(u, null, f, "beforeUnmount"),
                    P & 64
                        ? u.type.remove(u, f, p, xt, y)
                        : A && !A.hasOnce && (m !== ce || (R > 0 && R & 64))
                          ? wt(A, f, p, !1, !0)
                          : ((m === ce && R & 384) || (!g && P & 16)) && wt(b, f, p),
                    y && ms(u);
            }
            ((X && (N = x && x.onVnodeUnmounted)) || F) &&
                Ae(() => {
                    N && Me(N, f, u), F && tt(u, null, f, "unmounted");
                }, p);
        },
        ms = (u) => {
            const { type: f, el: p, anchor: y, transition: g } = u;
            if (f === ce) {
                ar(p, y);
                return;
            }
            if (f === Zn) {
                O(u);
                return;
            }
            const m = () => {
                i(p), g && !g.persisted && g.afterLeave && g.afterLeave();
            };
            if (u.shapeFlag & 1 && g && !g.persisted) {
                const { leave: x, delayLeave: _ } = g,
                    b = () => x(p, m);
                _ ? _(u.el, m, b) : b();
            } else m();
        },
        ar = (u, f) => {
            let p;
            for (; u !== f; ) (p = C(u)), i(u), (u = p);
            i(f);
        },
        dr = (u, f, p) => {
            const { bum: y, scope: g, job: m, subTree: x, um: _, m: b, a: A } = u;
            Os(b),
                Os(A),
                y && $t(y),
                g.stop(),
                m && ((m.flags |= 8), Ie(x, u, f, p)),
                _ && Ae(_, f),
                Ae(() => {
                    u.isUnmounted = !0;
                }, f),
                f &&
                    f.pendingBranch &&
                    !f.isUnmounted &&
                    u.asyncDep &&
                    !u.asyncResolved &&
                    u.suspenseId === f.pendingId &&
                    (f.deps--, f.deps === 0 && f.resolve());
        },
        wt = (u, f, p, y = !1, g = !1, m = 0) => {
            for (let x = m; x < u.length; x++) Ie(u[x], f, p, y, g);
        },
        Xt = (u) => {
            if (u.shapeFlag & 6) return Xt(u.component.subTree);
            if (u.shapeFlag & 128) return u.suspense.next();
            const f = C(u.anchor || u.el),
                p = f && f[oo];
            return p ? C(p) : f;
        };
    let In = !1;
    const ys = (u, f, p) => {
            u == null ? f._vnode && Ie(f._vnode, null, null, !0) : Z(f._vnode || null, u, f, null, null, null, p),
                (f._vnode = u),
                In || ((In = !0), xs(), Oi(), (In = !1));
        },
        xt = { p: Z, um: Ie, m: et, r: ms, mt: vt, mc: H, pc: U, pbc: ne, n: Xt, o: e };
    return { render: ys, hydrate: void 0, createApp: Po(ys) };
}
function Tn({ type: e, props: t }, n) {
    return (n === "svg" && e === "foreignObject") ||
        (n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html"))
        ? void 0
        : n;
}
function nt({ effect: e, job: t }, n) {
    n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function Fo(e, t) {
    return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Ui(e, t, n = !1) {
    const s = e.children,
        i = t.children;
    if (j(s) && j(i))
        for (let r = 0; r < s.length; r++) {
            const o = s[r];
            let l = i[r];
            l.shapeFlag & 1 &&
                !l.dynamicChildren &&
                ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = i[r] = Ve(i[r])), (l.el = o.el)),
                !n && l.patchFlag !== -2 && Ui(o, l)),
                l.type === xn && (l.el = o.el);
        }
}
function Yo(e) {
    const t = e.slice(),
        n = [0];
    let s, i, r, o, l;
    const c = e.length;
    for (s = 0; s < c; s++) {
        const d = e[s];
        if (d !== 0) {
            if (((i = n[n.length - 1]), e[i] < d)) {
                (t[s] = i), n.push(s);
                continue;
            }
            for (r = 0, o = n.length - 1; r < o; ) (l = (r + o) >> 1), e[n[l]] < d ? (r = l + 1) : (o = l);
            d < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), (n[r] = s));
        }
    }
    for (r = n.length, o = n[r - 1]; r-- > 0; ) (n[r] = o), (o = t[o]);
    return n;
}
function Xi(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Xi(t);
}
function Os(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const Bo = Symbol.for("v-scx"),
    Ho = () => Dt(Bo);
function en(e, t, n) {
    return Ki(e, t, n);
}
function Ki(e, t, n = z) {
    const { immediate: s, deep: i, flush: r, once: o } = n,
        l = fe({}, n),
        c = (t && s) || (!t && r !== "post");
    let d;
    if (Jt) {
        if (r === "sync") {
            const v = Ho();
            d = v.__watcherHandles || (v.__watcherHandles = []);
        } else if (!c) {
            const v = () => {};
            return (v.stop = Te), (v.resume = Te), (v.pause = Te), v;
        }
    }
    const a = ue;
    l.call = (v, D, Z) => Ze(v, a, D, Z);
    let h = !1;
    r === "post"
        ? (l.scheduler = (v) => {
              Ae(v, a && a.suspense);
          })
        : r !== "sync" &&
          ((h = !0),
          (l.scheduler = (v, D) => {
              D ? v() : us(v);
          })),
        (l.augmentJob = (v) => {
            t && (v.flags |= 4), h && ((v.flags |= 2), a && ((v.id = a.uid), (v.i = a)));
        });
    const C = to(e, t, l);
    return Jt && (d ? d.push(C) : c && C()), C;
}
function Lo(e, t, n) {
    const s = this.proxy,
        i = ie(e) ? (e.includes(".") ? Qi(s, e) : () => s[e]) : e.bind(s, s);
    let r;
    k(t) ? (r = t) : ((r = t.handler), (n = t));
    const o = Vt(this),
        l = Ki(i, r.bind(s), n);
    return o(), l;
}
function Qi(e, t) {
    const n = t.split(".");
    return () => {
        let s = e;
        for (let i = 0; i < n.length && s; i++) s = s[n[i]];
        return s;
    };
}
const Jo = (e, t) =>
    t === "modelValue" || t === "model-value"
        ? e.modelModifiers
        : e[`${t}Modifiers`] || e[`${Ue(t)}Modifiers`] || e[`${ct(t)}Modifiers`];
function No(e, t, ...n) {
    if (e.isUnmounted) return;
    const s = e.vnode.props || z;
    let i = n;
    const r = t.startsWith("update:"),
        o = r && Jo(s, t.slice(7));
    o && (o.trim && (i = n.map((a) => (ie(a) ? a.trim() : a))), o.number && (i = n.map(Fn)));
    let l,
        c = s[(l = Sn(t))] || s[(l = Sn(Ue(t)))];
    !c && r && (c = s[(l = Sn(ct(t)))]), c && Ze(c, e, 6, i);
    const d = s[l + "Once"];
    if (d) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[l]) return;
        (e.emitted[l] = !0), Ze(d, e, 6, i);
    }
}
function qi(e, t, n = !1) {
    const s = t.emitsCache,
        i = s.get(e);
    if (i !== void 0) return i;
    const r = e.emits;
    let o = {},
        l = !1;
    if (!k(e)) {
        const c = (d) => {
            const a = qi(d, t, !0);
            a && ((l = !0), fe(o, a));
        };
        !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
    }
    return !r && !l
        ? ($(e) && s.set(e, null), null)
        : (j(r) ? r.forEach((c) => (o[c] = null)) : fe(o, r), $(e) && s.set(e, o), o);
}
function wn(e, t) {
    return !e || !dn(t)
        ? !1
        : ((t = t.slice(2).replace(/Once$/, "")), J(e, t[0].toLowerCase() + t.slice(1)) || J(e, ct(t)) || J(e, t));
}
function Ms(e) {
    const {
            type: t,
            vnode: n,
            proxy: s,
            withProxy: i,
            propsOptions: [r],
            slots: o,
            attrs: l,
            emit: c,
            render: d,
            renderCache: a,
            props: h,
            data: C,
            setupState: v,
            ctx: D,
            inheritAttrs: Z,
        } = e,
        G = ln(e);
    let B, q;
    try {
        if (n.shapeFlag & 4) {
            const O = i || s,
                L = O;
            (B = ke(d.call(L, O, a, h, v, C, D))), (q = l);
        } else {
            const O = t;
            (B = ke(O.length > 1 ? O(h, { attrs: l, slots: o, emit: c }) : O(h, null))), (q = t.props ? l : Vo(l));
        }
    } catch (O) {
        (Gt.length = 0), bn(O, e, 1), (B = ve(lt));
    }
    let Q = B;
    if (q && Z !== !1) {
        const O = Object.keys(q),
            { shapeFlag: L } = Q;
        O.length && L & 7 && (r && O.some(qn) && (q = zo(q, r)), (Q = At(Q, q, !1, !0)));
    }
    return (
        n.dirs && ((Q = At(Q, null, !1, !0)), (Q.dirs = Q.dirs ? Q.dirs.concat(n.dirs) : n.dirs)),
        n.transition && fs(Q, n.transition),
        (B = Q),
        ln(G),
        B
    );
}
const Vo = (e) => {
        let t;
        for (const n in e) (n === "class" || n === "style" || dn(n)) && ((t || (t = {}))[n] = e[n]);
        return t;
    },
    zo = (e, t) => {
        const n = {};
        for (const s in e) (!qn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
        return n;
    };
function Uo(e, t, n) {
    const { props: s, children: i, component: r } = e,
        { props: o, children: l, patchFlag: c } = t,
        d = r.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && c >= 0) {
        if (c & 1024) return !0;
        if (c & 16) return s ? js(s, o, d) : !!o;
        if (c & 8) {
            const a = t.dynamicProps;
            for (let h = 0; h < a.length; h++) {
                const C = a[h];
                if (o[C] !== s[C] && !wn(d, C)) return !0;
            }
        }
    } else return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? (o ? js(s, o, d) : !0) : !!o;
    return !1;
}
function js(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length) return !0;
    for (let i = 0; i < s.length; i++) {
        const r = s[i];
        if (t[r] !== e[r] && !wn(n, r)) return !0;
    }
    return !1;
}
function Xo({ vnode: e, parent: t }, n) {
    for (; t; ) {
        const s = t.subTree;
        if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
            ((e = t.vnode).el = n), (t = t.parent);
        else break;
    }
}
const $i = (e) => e.__isSuspense;
function Ko(e, t) {
    t && t.pendingBranch ? (j(e) ? t.effects.push(...e) : t.effects.push(e)) : io(e);
}
const ce = Symbol.for("v-fgt"),
    xn = Symbol.for("v-txt"),
    lt = Symbol.for("v-cmt"),
    Zn = Symbol.for("v-stc"),
    Gt = [];
let _e = null;
function T(e = !1) {
    Gt.push((_e = e ? null : []));
}
function Qo() {
    Gt.pop(), (_e = Gt[Gt.length - 1] || null);
}
let Lt = 1;
function ks(e, t = !1) {
    (Lt += e), e < 0 && _e && t && (_e.hasOnce = !0);
}
function er(e) {
    return (e.dynamicChildren = Lt > 0 ? _e || ht : null), Qo(), Lt > 0 && _e && _e.push(e), e;
}
function E(e, t, n, s, i, r) {
    return er(I(e, t, n, s, i, r, !0));
}
function Ot(e, t, n, s, i) {
    return er(ve(e, t, n, s, i, !0));
}
function tr(e) {
    return e ? e.__v_isVNode === !0 : !1;
}
function It(e, t) {
    return e.type === t.type && e.key === t.key;
}
const nr = ({ key: e }) => e ?? null,
    tn = ({ ref: e, ref_key: t, ref_for: n }) => (
        typeof e == "number" && (e = "" + e),
        e != null ? (ie(e) || ee(e) || k(e) ? { i: be, r: e, k: t, f: !!n } : e) : null
    );
function I(e, t = null, n = null, s = 0, i = null, r = e === ce ? 0 : 1, o = !1, l = !1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && nr(t),
        ref: t && tn(t),
        scopeId: ji,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: r,
        patchFlag: s,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
        ctx: be,
    };
    return (
        l ? (ps(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= ie(n) ? 8 : 16),
        Lt > 0 && !o && _e && (c.patchFlag > 0 || r & 6) && c.patchFlag !== 32 && _e.push(c),
        c
    );
}
const ve = qo;
function qo(e, t = null, n = null, s = 0, i = null, r = !1) {
    if (((!e || e === _o) && (e = lt), tr(e))) {
        const l = At(e, t, !0);
        return (
            n && ps(l, n),
            Lt > 0 && !r && _e && (l.shapeFlag & 6 ? (_e[_e.indexOf(e)] = l) : _e.push(l)),
            (l.patchFlag = -2),
            l
        );
    }
    if ((cl(e) && (e = e.__vccOpts), t)) {
        t = $o(t);
        let { class: l, style: c } = t;
        l && !ie(l) && (t.class = bt(l)), $(c) && (ls(c) && !j(c) && (c = fe({}, c)), (t.style = mn(c)));
    }
    const o = ie(e) ? 1 : $i(e) ? 128 : lo(e) ? 64 : $(e) ? 4 : k(e) ? 2 : 0;
    return I(e, t, n, s, i, o, r, !0);
}
function $o(e) {
    return e ? (ls(e) || Bi(e) ? fe({}, e) : e) : null;
}
function At(e, t, n = !1, s = !1) {
    const { props: i, ref: r, patchFlag: o, children: l, transition: c } = e,
        d = t ? el(i || {}, t) : i,
        a = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: d,
            key: d && nr(d),
            ref: t && t.ref ? (n && r ? (j(r) ? r.concat(tn(t)) : [r, tn(t)]) : tn(t)) : r,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: l,
            target: e.target,
            targetStart: e.targetStart,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== ce ? (o === -1 ? 16 : o | 16) : o,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: c,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && At(e.ssContent),
            ssFallback: e.ssFallback && At(e.ssFallback),
            el: e.el,
            anchor: e.anchor,
            ctx: e.ctx,
            ce: e.ce,
        };
    return c && s && fs(a, c.clone(a)), a;
}
function Un(e = " ", t = 0) {
    return ve(xn, null, e, t);
}
function se(e = "", t = !1) {
    return t ? (T(), Ot(lt, null, e)) : ve(lt, null, e);
}
function ke(e) {
    return e == null || typeof e == "boolean"
        ? ve(lt)
        : j(e)
          ? ve(ce, null, e.slice())
          : tr(e)
            ? Ve(e)
            : ve(xn, null, String(e));
}
function Ve(e) {
    return (e.el === null && e.patchFlag !== -1) || e.memo ? e : At(e);
}
function ps(e, t) {
    let n = 0;
    const { shapeFlag: s } = e;
    if (t == null) t = null;
    else if (j(t)) n = 16;
    else if (typeof t == "object")
        if (s & 65) {
            const i = t.default;
            i && (i._c && (i._d = !1), ps(e, i()), i._c && (i._d = !0));
            return;
        } else {
            n = 32;
            const i = t._;
            !i && !Bi(t)
                ? (t._ctx = be)
                : i === 3 && be && (be.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
        }
    else
        k(t)
            ? ((t = { default: t, _ctx: be }), (n = 32))
            : ((t = String(t)), s & 64 ? ((n = 16), (t = [Un(t)])) : (n = 8));
    (e.children = t), (e.shapeFlag |= n);
}
function el(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (const i in s)
            if (i === "class") t.class !== s.class && (t.class = bt([t.class, s.class]));
            else if (i === "style") t.style = mn([t.style, s.style]);
            else if (dn(i)) {
                const r = t[i],
                    o = s[i];
                o && r !== o && !(j(r) && r.includes(o)) && (t[i] = r ? [].concat(r, o) : o);
            } else i !== "" && (t[i] = s[i]);
    }
    return t;
}
function Me(e, t, n, s = null) {
    Ze(e, t, 7, [n, s]);
}
const tl = Ei();
let nl = 0;
function sl(e, t, n) {
    const s = e.type,
        i = (t ? t.appContext : e.appContext) || tl,
        r = {
            uid: nl++,
            vnode: e,
            type: s,
            parent: t,
            appContext: i,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new oi(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(i.provides),
            ids: t ? t.ids : ["", 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Li(s, i),
            emitsOptions: qi(s, i),
            emit: null,
            emitted: null,
            propsDefaults: z,
            inheritAttrs: s.inheritAttrs,
            ctx: z,
            data: z,
            props: z,
            attrs: z,
            slots: z,
            refs: z,
            setupState: z,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null,
        };
    return (r.ctx = { _: r }), (r.root = t ? t.root : r), (r.emit = No.bind(null, r)), e.ce && e.ce(r), r;
}
let ue = null,
    fn,
    Xn;
{
    const e = gn(),
        t = (n, s) => {
            let i;
            return (
                (i = e[n]) || (i = e[n] = []),
                i.push(s),
                (r) => {
                    i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
                }
            );
        };
    (fn = t("__VUE_INSTANCE_SETTERS__", (n) => (ue = n))), (Xn = t("__VUE_SSR_SETTERS__", (n) => (Jt = n)));
}
const Vt = (e) => {
        const t = ue;
        return (
            fn(e),
            e.scope.on(),
            () => {
                e.scope.off(), fn(t);
            }
        );
    },
    Ts = () => {
        ue && ue.scope.off(), fn(null);
    };
function sr(e) {
    return e.vnode.shapeFlag & 4;
}
let Jt = !1;
function il(e, t = !1, n = !1) {
    t && Xn(t);
    const { props: s, children: i } = e.vnode,
        r = sr(e);
    jo(e, s, r, t), Do(e, i, n);
    const o = r ? rl(e, t) : void 0;
    return t && Xn(!1), o;
}
function rl(e, t) {
    const n = e.type;
    (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, vo));
    const { setup: s } = n;
    if (s) {
        Ke();
        const i = (e.setupContext = s.length > 1 ? ll(e) : null),
            r = Vt(e),
            o = Nt(s, e, 0, [e.props, i]),
            l = qs(o);
        if ((Qe(), r(), (l || e.sp) && !Tt(e) && ki(e), l)) {
            if ((o.then(Ts, Ts), t))
                return o
                    .then((c) => {
                        Zs(e, c);
                    })
                    .catch((c) => {
                        bn(c, e, 0);
                    });
            e.asyncDep = o;
        } else Zs(e, o);
    } else ir(e);
}
function Zs(e, t, n) {
    k(t) ? (e.type.__ssrInlineRender ? (e.ssrRender = t) : (e.render = t)) : $(t) && (e.setupState = Ci(t)), ir(e);
}
function ir(e, t, n) {
    const s = e.type;
    e.render || (e.render = s.render || Te);
    {
        const i = Vt(e);
        Ke();
        try {
            wo(e);
        } finally {
            Qe(), i();
        }
    }
}
const ol = {
    get(e, t) {
        return oe(e, "get", ""), e[t];
    },
};
function ll(e) {
    const t = (n) => {
        e.exposed = n || {};
    };
    return { attrs: new Proxy(e.attrs, ol), slots: e.slots, emit: e.emit, expose: t };
}
function Cn(e) {
    return e.exposed
        ? e.exposeProxy ||
              (e.exposeProxy = new Proxy(Ci(cs(e.exposed)), {
                  get(t, n) {
                      if (n in t) return t[n];
                      if (n in Zt) return Zt[n](e);
                  },
                  has(t, n) {
                      return n in t || n in Zt;
                  },
              }))
        : e.proxy;
}
function cl(e) {
    return k(e) && "__vccOpts" in e;
}
const hs = (e, t) => $r(e, t, Jt),
    ul = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Kn;
const Ds = typeof window < "u" && window.trustedTypes;
if (Ds)
    try {
        Kn = Ds.createPolicy("vue", { createHTML: (e) => e });
    } catch {}
const rr = Kn ? (e) => Kn.createHTML(e) : (e) => e,
    fl = "http://www.w3.org/2000/svg",
    al = "http://www.w3.org/1998/Math/MathML",
    We = typeof document < "u" ? document : null,
    Gs = We && We.createElement("template"),
    dl = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null);
        },
        remove: (e) => {
            const t = e.parentNode;
            t && t.removeChild(e);
        },
        createElement: (e, t, n, s) => {
            const i =
                t === "svg"
                    ? We.createElementNS(fl, e)
                    : t === "mathml"
                      ? We.createElementNS(al, e)
                      : n
                        ? We.createElement(e, { is: n })
                        : We.createElement(e);
            return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
        },
        createText: (e) => We.createTextNode(e),
        createComment: (e) => We.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t;
        },
        setElementText: (e, t) => {
            e.textContent = t;
        },
        parentNode: (e) => e.parentNode,
        nextSibling: (e) => e.nextSibling,
        querySelector: (e) => We.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "");
        },
        insertStaticContent(e, t, n, s, i, r) {
            const o = n ? n.previousSibling : t.lastChild;
            if (i && (i === r || i.nextSibling))
                for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); );
            else {
                Gs.innerHTML = rr(s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e);
                const l = Gs.content;
                if (s === "svg" || s === "mathml") {
                    const c = l.firstChild;
                    for (; c.firstChild; ) l.appendChild(c.firstChild);
                    l.removeChild(c);
                }
                t.insertBefore(l, n);
            }
            return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
        },
    },
    pl = Symbol("_vtc");
function hl(e, t, n) {
    const s = e[pl];
    s && (t = (t ? [t, ...s] : [...s]).join(" ")),
        t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : (e.className = t);
}
const an = Symbol("_vod"),
    or = Symbol("_vsh"),
    gs = {
        beforeMount(e, { value: t }, { transition: n }) {
            (e[an] = e.style.display === "none" ? "" : e.style.display), n && t ? n.beforeEnter(e) : St(e, t);
        },
        mounted(e, { value: t }, { transition: n }) {
            n && t && n.enter(e);
        },
        updated(e, { value: t, oldValue: n }, { transition: s }) {
            !t != !n &&
                (s
                    ? t
                        ? (s.beforeEnter(e), St(e, !0), s.enter(e))
                        : s.leave(e, () => {
                              St(e, !1);
                          })
                    : St(e, t));
        },
        beforeUnmount(e, { value: t }) {
            St(e, t);
        },
    };
function St(e, t) {
    (e.style.display = t ? e[an] : "none"), (e[or] = !t);
}
const gl = Symbol(""),
    ml = /(^|;)\s*display\s*:/;
function yl(e, t, n) {
    const s = e.style,
        i = ie(n);
    let r = !1;
    if (n && !i) {
        if (t)
            if (ie(t))
                for (const o of t.split(";")) {
                    const l = o.slice(0, o.indexOf(":")).trim();
                    n[l] == null && nn(s, l, "");
                }
            else for (const o in t) n[o] == null && nn(s, o, "");
        for (const o in n) o === "display" && (r = !0), nn(s, o, n[o]);
    } else if (i) {
        if (t !== n) {
            const o = s[gl];
            o && (n += ";" + o), (s.cssText = n), (r = ml.test(n));
        }
    } else t && e.removeAttribute("style");
    an in e && ((e[an] = r ? s.display : ""), e[or] && (s.display = "none"));
}
const Ws = /\s*!important$/;
function nn(e, t, n) {
    if (j(n)) n.forEach((s) => nn(e, t, s));
    else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
    else {
        const s = Al(e, t);
        Ws.test(n) ? e.setProperty(ct(s), n.replace(Ws, ""), "important") : (e[s] = n);
    }
}
const Es = ["Webkit", "Moz", "ms"],
    Dn = {};
function Al(e, t) {
    const n = Dn[t];
    if (n) return n;
    let s = Ue(t);
    if (s !== "filter" && s in e) return (Dn[t] = s);
    s = ti(s);
    for (let i = 0; i < Es.length; i++) {
        const r = Es[i] + s;
        if (r in e) return (Dn[t] = r);
    }
    return t;
}
const Fs = "http://www.w3.org/1999/xlink";
function Ys(e, t, n, s, i, r = xr(t)) {
    s && t.startsWith("xlink:")
        ? n == null
            ? e.removeAttributeNS(Fs, t.slice(6, t.length))
            : e.setAttributeNS(Fs, t, n)
        : n == null || (r && !si(n))
          ? e.removeAttribute(t)
          : e.setAttribute(t, r ? "" : Xe(n) ? String(n) : n);
}
function Bs(e, t, n, s, i) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? rr(n) : n);
        return;
    }
    const r = e.tagName;
    if (t === "value" && r !== "PROGRESS" && !r.includes("-")) {
        const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value,
            c = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
        (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), (e._value = n);
        return;
    }
    let o = !1;
    if (n === "" || n == null) {
        const l = typeof e[t];
        l === "boolean"
            ? (n = si(n))
            : n == null && l === "string"
              ? ((n = ""), (o = !0))
              : l === "number" && ((n = 0), (o = !0));
    }
    try {
        e[t] = n;
    } catch {}
    o && e.removeAttribute(i || t);
}
function pt(e, t, n, s) {
    e.addEventListener(t, n, s);
}
function bl(e, t, n, s) {
    e.removeEventListener(t, n, s);
}
const Hs = Symbol("_vei");
function _l(e, t, n, s, i = null) {
    const r = e[Hs] || (e[Hs] = {}),
        o = r[t];
    if (s && o) o.value = s;
    else {
        const [l, c] = vl(t);
        if (s) {
            const d = (r[t] = Cl(s, i));
            pt(e, l, d, c);
        } else o && (bl(e, l, o, c), (r[t] = void 0));
    }
}
const Ls = /(?:Once|Passive|Capture)$/;
function vl(e) {
    let t;
    if (Ls.test(e)) {
        t = {};
        let s;
        for (; (s = e.match(Ls)); ) (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
    }
    return [e[2] === ":" ? e.slice(3) : ct(e.slice(2)), t];
}
let Gn = 0;
const wl = Promise.resolve(),
    xl = () => Gn || (wl.then(() => (Gn = 0)), (Gn = Date.now()));
function Cl(e, t) {
    const n = (s) => {
        if (!s._vts) s._vts = Date.now();
        else if (s._vts <= n.attached) return;
        Ze(Rl(s, n.value), t, 5, [s]);
    };
    return (n.value = e), (n.attached = xl()), n;
}
function Rl(e, t) {
    if (j(t)) {
        const n = e.stopImmediatePropagation;
        return (
            (e.stopImmediatePropagation = () => {
                n.call(e), (e._stopped = !0);
            }),
            t.map((s) => (i) => !i._stopped && s && s(i))
        );
    } else return t;
}
const Js = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    Il = (e, t, n, s, i, r) => {
        const o = i === "svg";
        t === "class"
            ? hl(e, s, o)
            : t === "style"
              ? yl(e, n, s)
              : dn(t)
                ? qn(t) || _l(e, t, n, s, r)
                : (t[0] === "." ? ((t = t.slice(1)), !0) : t[0] === "^" ? ((t = t.slice(1)), !1) : Sl(e, t, s, o))
                  ? (Bs(e, t, s),
                    !e.tagName.includes("-") &&
                        (t === "value" || t === "checked" || t === "selected") &&
                        Ys(e, t, s, o, r, t !== "value"))
                  : e._isVueCE && (/[A-Z]/.test(t) || !ie(s))
                    ? Bs(e, Ue(t), s, r, t)
                    : (t === "true-value" ? (e._trueValue = s) : t === "false-value" && (e._falseValue = s),
                      Ys(e, t, s, o));
    };
function Sl(e, t, n, s) {
    if (s) return !!(t === "innerHTML" || t === "textContent" || (t in e && Js(t) && k(n)));
    if (
        t === "spellcheck" ||
        t === "draggable" ||
        t === "translate" ||
        t === "form" ||
        (t === "list" && e.tagName === "INPUT") ||
        (t === "type" && e.tagName === "TEXTAREA")
    )
        return !1;
    if (t === "width" || t === "height") {
        const i = e.tagName;
        if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE") return !1;
    }
    return Js(t) && ie(n) ? !1 : t in e;
}
const Ns = (e) => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return j(t) ? (n) => $t(t, n) : t;
};
function Pl(e) {
    e.target.composing = !0;
}
function Vs(e) {
    const t = e.target;
    t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const Wn = Symbol("_assign"),
    Ol = {
        created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
            e[Wn] = Ns(i);
            const r = s || (i.props && i.props.type === "number");
            pt(e, t ? "change" : "input", (o) => {
                if (o.target.composing) return;
                let l = e.value;
                n && (l = l.trim()), r && (l = Fn(l)), e[Wn](l);
            }),
                n &&
                    pt(e, "change", () => {
                        e.value = e.value.trim();
                    }),
                t || (pt(e, "compositionstart", Pl), pt(e, "compositionend", Vs), pt(e, "change", Vs));
        },
        mounted(e, { value: t }) {
            e.value = t ?? "";
        },
        beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, o) {
            if (((e[Wn] = Ns(o)), e.composing)) return;
            const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? Fn(e.value) : e.value,
                c = t ?? "";
            l !== c &&
                ((document.activeElement === e &&
                    e.type !== "range" &&
                    ((s && t === n) || (i && e.value.trim() === c))) ||
                    (e.value = c));
        },
    },
    Ml = fe({ patchProp: Il }, dl);
let zs;
function jl() {
    return zs || (zs = Wo(Ml));
}
const kl = (...e) => {
    const t = jl().createApp(...e),
        { mount: n } = t;
    return (
        (t.mount = (s) => {
            const i = Zl(s);
            if (!i) return;
            const r = t._component;
            !k(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
            const o = n(i, !1, Tl(i));
            return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
        }),
        t
    );
};
function Tl(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Zl(e) {
    return ie(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ let lr;
const Rn = (e) => (lr = e),
    cr = Symbol();
function Us(e) {
    return (
        e &&
        typeof e == "object" &&
        Object.prototype.toString.call(e) === "[object Object]" &&
        typeof e.toJSON != "function"
    );
}
var Wt;
(function (e) {
    (e.direct = "direct"), (e.patchObject = "patch object"), (e.patchFunction = "patch function");
})(Wt || (Wt = {}));
function Dl() {
    const e = li(!0),
        t = e.run(() => Yt({}));
    let n = [],
        s = [];
    const i = cs({
        install(r) {
            Rn(i),
                (i._a = r),
                r.provide(cr, i),
                (r.config.globalProperties.$pinia = i),
                s.forEach((o) => n.push(o)),
                (s = []);
        },
        use(r) {
            return this._a ? n.push(r) : s.push(r), this;
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map(),
        state: t,
    });
    return i;
}
const Gl = () => {};
function Xs(e, t, n, s = Gl) {
    e.push(t);
    const i = () => {
        const r = e.indexOf(t);
        r > -1 && (e.splice(r, 1), s());
    };
    return !n && ci() && Cr(i), i;
}
function at(e, ...t) {
    e.slice().forEach((n) => {
        n(...t);
    });
}
const Wl = (e) => e(),
    Ks = Symbol(),
    En = Symbol();
function ur(e, t) {
    e instanceof Map && t instanceof Map
        ? t.forEach((n, s) => e.set(s, n))
        : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n)) continue;
        const s = t[n],
            i = e[n];
        Us(i) && Us(s) && e.hasOwnProperty(n) && !ee(s) && !Ye(s) ? (e[n] = ur(i, s)) : (e[n] = s);
    }
    return e;
}
const { assign: Je } = Object;
function El(e) {
    return !!(ee(e) && e.effect);
}
function Fl(e, t, n, s) {
    const { state: i, actions: r, getters: o } = t,
        l = n.state.value[e];
    let c;
    function d() {
        l || (n.state.value[e] = i ? i() : {});
        const a = Ur(n.state.value[e]);
        return Je(
            a,
            r,
            Object.keys(o || {}).reduce(
                (h, C) => (
                    (h[C] = cs(
                        hs(() => {
                            Rn(n);
                            const v = n._s.get(e);
                            return o[C].call(v, v);
                        }),
                    )),
                    h
                ),
                {},
            ),
        );
    }
    return (c = Yl(e, d, t, n, s, !0)), c;
}
function Yl(e, t, n = {}, s, i, r) {
    let o;
    const l = Je({ actions: {} }, n),
        c = { deep: !0 };
    let d,
        a,
        h = [],
        C = [],
        v;
    const D = s.state.value[e];
    Yt({});
    let Z;
    function G(H) {
        let V;
        (d = a = !1),
            typeof H == "function"
                ? (H(s.state.value[e]), (V = { type: Wt.patchFunction, storeId: e, events: v }))
                : (ur(s.state.value[e], H), (V = { type: Wt.patchObject, payload: H, storeId: e, events: v }));
        const ne = (Z = Symbol());
        Si().then(() => {
            Z === ne && (d = !0);
        }),
            (a = !0),
            at(h, V, s.state.value[e]);
    }
    const B = function () {
        const { state: V } = n,
            ne = V ? V() : {};
        this.$patch((we) => {
            Je(we, ne);
        });
    };
    function q() {
        o.stop(), (h = []), (C = []), s._s.delete(e);
    }
    const Q = (H, V = "") => {
            if (Ks in H) return (H[En] = V), H;
            const ne = function () {
                Rn(s);
                const we = Array.from(arguments),
                    Re = [],
                    Le = [];
                function vt(W) {
                    Re.push(W);
                }
                function zt(W) {
                    Le.push(W);
                }
                at(C, { args: we, name: ne[En], store: L, after: vt, onError: zt });
                let te;
                try {
                    te = H.apply(this && this.$id === e ? this : L, we);
                } catch (W) {
                    throw (at(Le, W), W);
                }
                return te instanceof Promise
                    ? te.then((W) => (at(Re, W), W)).catch((W) => (at(Le, W), Promise.reject(W)))
                    : (at(Re, te), te);
            };
            return (ne[Ks] = !0), (ne[En] = V), ne;
        },
        O = {
            _p: s,
            $id: e,
            $onAction: Xs.bind(null, C),
            $patch: G,
            $reset: B,
            $subscribe(H, V = {}) {
                const ne = Xs(h, H, V.detached, () => we()),
                    we = o.run(() =>
                        en(
                            () => s.state.value[e],
                            (Re) => {
                                (V.flush === "sync" ? a : d) && H({ storeId: e, type: Wt.direct, events: v }, Re);
                            },
                            Je({}, c, V),
                        ),
                    );
                return ne;
            },
            $dispose: q,
        },
        L = An(O);
    s._s.set(e, L);
    const re = ((s._a && s._a.runWithContext) || Wl)(() => s._e.run(() => (o = li()).run(() => t({ action: Q }))));
    for (const H in re) {
        const V = re[H];
        if (!((ee(V) && !El(V)) || Ye(V))) {
            if (typeof V == "function") {
                const ne = Q(V, H);
                (re[H] = ne), (l.actions[H] = V);
            }
        }
    }
    return (
        Je(L, re),
        Je(Y(L), re),
        Object.defineProperty(L, "$state", {
            get: () => s.state.value[e],
            set: (H) => {
                G((V) => {
                    Je(V, H);
                });
            },
        }),
        s._p.forEach((H) => {
            Je(
                L,
                o.run(() => H({ store: L, app: s._a, pinia: s, options: l })),
            );
        }),
        D && r && n.hydrate && n.hydrate(L.$state, D),
        (d = !0),
        (a = !0),
        L
    );
}
/*! #__NO_SIDE_EFFECTS__ */ function Bl(e, t, n) {
    let s, i;
    typeof e == "string" ? ((s = e), (i = t)) : ((i = e), (s = e.id));
    function r(o, l) {
        const c = Mo();
        return (o = o || (c ? Dt(cr, null) : null)), o && Rn(o), (o = lr), o._s.has(s) || Fl(s, i, o), o._s.get(s);
    }
    return (r.$id = s), r;
}
function _t(e) {
    {
        const t = Y(e),
            n = {};
        for (const s in t) {
            const i = t[s];
            i.effect
                ? (n[s] = hs({
                      get: () => e[s],
                      set(r) {
                          e[s] = r;
                      },
                  }))
                : (ee(i) || Ye(i)) && (n[s] = Qr(e, s));
        }
        return n;
    }
}
const Hl = "/assets/pdf-DJvAcE-K.png",
    Ll = [
        { id: 1, name: "README", extention: "txt", icon: "readme", type: "text", isOnStartMenu: !0, sortApp: -1 },
        { id: 2, name: "SETUP", extention: "exe", icon: "setup", type: "setup", isOnStartMenu: !0, sortApp: -1 },
        {
            id: 3,
            name: "Wordle",
            extention: "exe",
            icon: "infinite-wordle",
            type: "app",
            url: "https://www.google.com",
            isOnStartMenu: !0,
            sortApp: 1,
        },
        {
            id: 4,
            name: "Hibu",
            extention: "exe",
            icon: "hibu",
            type: "project",
            url: "https://www.youtube.com/",
            sortApp: 6,
        },
        {
            id: 5,
            name: "Earthquakes",
            extention: "exe",
            icon: "earthquakes",
            type: "project",
            url: "https://www.youtube.com/",
            sortApp: 5,
        },
        {
            id: 7,
            name: "Calculator",
            extention: "exe",
            icon: "calculator",
            type: "project",
            url: "https://calculator.hicaku.com/",
            isOnStartMenu: !0,
            sortApp: 7,
        },
        {
            id: 8,
            name: "Tictactoe",
            extention: "exe",
            icon: "tictactoe",
            type: "project",
            url: "https://tictactoe.hicaku.com/",
            isOnStartMenu: !0,
            sortApp: 8,
        },
        {
            id: 9,
            name: "Photographs",
            icon: "folder",
            type: "folder",
            children: [
                { id: 10, name: "photo1", extention: "jpg", icon: "photo1", type: "photo" },
                { id: 11, name: "photo2", extention: "jpg", icon: "photo2", type: "photo" },
                { id: 12, name: "photo3", extention: "jpg", icon: "photo3", type: "photo" },
                { id: 13, name: "photo4", extention: "jpg", icon: "photo4", type: "photo" },
                { id: 16, name: "photo5", extention: "jpg", icon: "photo5", type: "photo" },
            ],
        },
        {
            id: 14,
            name: "GitHub",
            extention: "app",
            icon: "github",
            type: "app",
            url: "https://github.com/Spencehiko",
            isOnStartMenu: !0,
        },
        {
            id: 15,
            name: "LinkedIn",
            extention: "app",
            icon: "linkedin",
            type: "app",
            url: "https://www.linkedin.com/in/hikmet-can-kufteoglu/",
            isOnStartMenu: !0,
        },
        {
            id: 16,
            name: "Hikotify",
            extention: "exe",
            icon: "hikotify",
            type: "project",
            url: "https://hikotify.hicaku.com/",
            isOnStartMenu: !0,
            sortApp: 2,
        },
        {
            id: 17,
            name: "CVGenerate",
            extention: "exe",
            icon: "cv",
            type: "project",
            url: "https://cv.hicaku.com/",
            isOnStartMenu: !0,
            sortApp: 3,
        },
    ],
    Jl = "/assets/photo-D57LZhNA.png",
    Nl = "/assets/photo1-CcV6uYvy.jpg",
    Vl = "/assets/photo2-DnD7Aguo.jpg",
    zl = "/assets/photo3-C1H4TOaV.jpg",
    Ul = "/assets/photo4-DcDPD6K7.jpg",
    Xl = "/assets/photo5-ifB2sqAg.jpg",
    Kl = "/assets/step1-DzsjyMvh.png",
    Ql = "/assets/step2-C22WlxWv.png",
    ql = "/assets/step3-CtCjRqJK.png",
    $l = "/assets/step4-6LGZLGvk.png",
    ec = "/assets/solitaire-BcSTa9vP.png",
    tc = "/assets/cv-CGOfukT1.png",
    nc = "/assets/nba-BV13cP_a.png",
    sc = "/assets/hikotify-BI2jONZ3.png",
    ic = "/assets/linkedin-Cyh2rkP_.png",
    rc = "/assets/github-CZ6GW8fA.png",
    oc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEYWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA0LTMwPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPjY0MmZlMTNmLTFkZWItNDIyNy04N2RkLWIwYTQwNmNhZGIxZjwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5FTkc8L3JkZjpsaT4KICAgPC9yZGY6QWx0PgogIDwvZGM6dGl0bGU+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+SGlrbWV0IENhbjwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/Pp8+2aoAAAp9SURBVHic7ZxLjB1HFYa/U933jseDHcevBFiESBCxYgEBVtkhARJkyYYoiCwQrNhECCSyQUKCsCCKYIWEgpF5EylBgBKEsvEGlCggeyZWYsaQxMHz8nPuzNy53fWzqOrXnb72WLGDJ9O/NNPV3aer+546dV51uqFDhw4dOnTo0KFDhw43DHvk/YukezwbV1OETwAzMyQwE1KdGlBtx1TtN85BY88s7jUJmv2OdxD3t54TGIZqRwwZGPF5zMKmth/oFJ87dlvtC8qfozQ/TN4fQDbg2PJd12RgmsmTrTonmcfIr0m9UxD5sn1UA6S7Rbaw7LI98oNDOQ9riWMrRyZemco7Z8IbNiP4HHAf4OJ5D+Sxdx+3Qvg4avXj1fnrt9/e+fb7T75eKNLH4ybQ+HUgLtplnQPzyQZu/zL+0PIRvnjnJY5fOjCBgcLL2wPm8p8b3FOMnDW2xXDGKUWYMhUK4mJKl3Ok9aZvG+PSZbVD1tioRlu0i4esnYsP6sjYsJeBbwMvMHJu+cNn/Z2fPAXPTXiUh44u3WvoH2bslyxzrnHT6mGsubuNH2hthC0stWud3PY9r0en1maTxAdWGkKyT5vzzwNuaeGo//OErlNDX8PYj2xoRn+4JvI8qOSoZZv6v2Y3ikZD0GrnJbY8bYOrbQNVNCbpMWs5XBuCcUmceO+WDvvTkCQ2kuhj/OC5haPPP3Dwij98ZIUvL4kh0AeeqkvTw0eXnsF4EMh9LvfZr05zz0dSG65HCh8scfnnK8aEYyqPjdP4nDiklRX0eTtt2Z8PNJG8QbPlXr7a1q/fel3Rbp6jSaN//zPj6gWPS8wEGeKjYCcx3zfwqrwB73AejFTQKzWc4OOfn7IPfaLXNlTvdtjjX7isl/60yfR+UE4igTkPps0xpU+ONwOlRA+q6GTtaphzo6FwyTZvPUGptB0e06cN+Ax6e4wzL474zXcHpH3DLAiwubg1q9pbtjZGO0bj2voLbeeMt17LLZ0qFBeY8SiysyZLgVF88ivACdDfUUJK5bIA4OJekoJLbsiZmghJBOe8ndNmRp6J3h7jwls5Tz5yhXOnc3pThpdaR6K1q3FSbTndPqrxuul9Rtozk5ei1nm4uMSg0rAGJvueS/StdJJqvZkws8a2fO7IWJ+LJDVGQ/HEl65wft5zx10u6sLmNW3e081C0M+SmVkcoAyqOMisZGUq9E3v9eIWCXynUEqlVynpP/7KVeZOjNh3yJFtagvD4Vqezs2BxZvGW6fhWVEIa0tWZmb0EJ9xWCGXwhwk74D9qE/pYioef2yVE7/eYN9BRz5qZ97/C2ZYZK3VJ6yw9RRhweULAbobk0dFHVSY/xu7c2sz3lx4D2nP+MtP13nmh2u856ArXZjbFmHw4xTXqTTYoEm0we9yid1sdQOAS+Dl54Y89egqe2as9PVuJ+kbR+CE0iBuzKVMUMWKYa9LjEuLntdPZlxa9KVf3HADyv3gETkXep3kgoBIe8bVC56nvjEI1yTBmNzOzANiXsIQuuLF6RSTa6RzImHxg//4ozWefWKdwUXPaJNGiFX/rWW75VxrsG+QZ5D2IO3vEOYFP8wDCXAmG6ytlDoQiNITdlxi/P77A44/NmDvfiPpG+lUW6/bOtR6MOkRw6nbn3lAofui12iz0/un1ZjCZlYakTMvjnj68TX2HXSYq8WsNxM7QOfVofCwRSr8FS/DjRsRH1KLnHxhxMaqSFLw+a3zvnYK8woYJFHZzUmQBj+w+hGFBC6czYPkaef9yFuFaDycYZt4ZjGop08NKBMI5+cz0p7dsqTyTkORCQvmVm8BbwA0/EAJLAmB/cJZT9q7BXpvh8IsMDHuzSbTGrpUjBkRmJqGpdc9a5djOqtjIAAxx+AlEuCVbBPYtMSZKUhgDNV6U8b5f+UM14XdpHTWuwSiSLxIc8V6nlNj3UokPViYzxiubY2LdzXMACWYCbNTYeIG6SvZZM4YDeH8vMeVyxjdHBYoMMJAuug9r8Yci3dF0CWCBd4YiPPzOWnfOhcmoki9xN1XLyyfvZyNNjA8tVg42OPhQCyczUk6C1xCcf4WIdyRuz8AhtPIfOkHykOvb1w671m96DsLXIdVuWjBXFwWdffftVK5MRKk/RCBDNfY/orcboAMTAkyDObi4pKfX91bi4UVsiPn53OGA5VZmQ5AWfCjdXlOFSVW567MUK2JxPzcypsxp26dBQYKJsT0Mm9IWpA8mPS7i4dwKLgxzsHmurjwX18akM4Cg0Ka3UcDcirpM0r6VYo4Jt/DRB4NCQzsDEgJk1SVw+oVcqGMJLewfFkakWKB2+fBod5Jic5bibiC4cocYLS5hYA5zFzd4ZtURbB7EUM4LEdutgjhLBa1urAgXA+H1djuZsT0VcGIZcvcGXLDPP744kGgpgOLivWiYqCTQMBEtcCr0/sOTA9WLl5ErhKuRjKh9LWZXEm1qxBqtOIqEXNX1wccPnogqb/LkAZRKxzFYtNJIEQxii/NGDYnH/iUuc2SJkVyzarH2sr5LkesQUii5Z2LfPGuFudGN6aqTKjaHRMjDBh42WyUMyVZVcJWGpEOTcQKhMKAzGfDwbLPNjHlOrZyuKRLMXOVBd5ZlQK3EmYyyXKQA5vds3c6N7DMW8O6OlQvLuoscAHJaiEcs/LgPckgSxt0jpYi6U4CIZiQsozjdBQv5WPllA6jJpN1Y9KBIGAjVOYA/V4bNQhikXnHtDpU5gBlwGJm9p9obfWrpcMNWhcSXkbnvlQIKqyYmDY7NZWvzxzcxFrkzBEju6KM39qodhkU3rPxkROzfmRsXEoT8q2vMGzxA6VOAgkWxBVJVHlD3qy3d2MLYWoQSy67GLhArAMs3k2Yi4e9WmyFU6f0mlAIQopKfDyni1W41Tfv3kLuAFe9CNgpwKjBihTWa6v56oVNjfDm9dsWWXPAgNoU3s1hiFR+QMVHR/rkTH9GvTR1Tu2lag7sRLS+IyvejKniunfTH7VtfVeShBAh/vVmoZ5I2NMI8FjOaisDU7x9B+cfBOsXHbWI4PWksv38ZLfybUv5dRX3tjR7ZTgD/wBTqvCC9S8Tpz8ILMuTnAkSmJrzL0l8SugnZnZv0r8BQ2yNzUTUubUlWNwuK9VC2ipPY8fGL6r3oyp5YhgyEf89qcUjXx8dWsGckIOe7mh9rFRmTl5/XV/ivn3vtY998P7kfWnPmYQDnxBflg9ZGyz4R+bAu3jXUGMo78ILn2ax6tUwOQQ+xyjCHV+cjxU6vgyDkJfFLFygUXDuJbP44qONfUQipEzy+DEKH7zfkq74AEUe3gyNGZWyLQ9ZkZ0P2dIR8CzYKXdgBTlvgJxyfrZ4qJ2B5uTxuN6MMsHfRhsqv7ZRRCjFaJWZ/yJKjEMavrejwMf6K/qR1vuqbVLp4oOQt1q7Eozml0FiPwXjoPrqBkI5Y1/2sMYXO8rran0VfU+AIw0FMAAunzzH0tHMEX7xmvmHDi1BUTOtpiKcNDWsaluDrn5t+XZFIGxEOqptqnGqfiDVj2w8Q9uxWp91MqmF5trwieT3jEasTfU4tnj0hi7u0KFDhw4dOnTo0KHDNvA/7llpgSHqDt8AAAAASUVORK5CYII=",
    lc = "/assets/tictactoe-CHCZORcX.png",
    cc = "/assets/calculator-2immO4Uz.png",
    uc = "/assets/earthquakes-Dpd6-bAx.png",
    fc = "/assets/hibu-Cqv1MFIx.png",
    ac = "/assets/infinite-wordle-BbjQ9ejX.png",
    dc = "/assets/setup-MjPOi5TJ.png",
    pc = "/assets/readme-DlZ6hZOp.png",
    yt = {
        photo: Jl,
        photo1: Nl,
        photo2: Vl,
        photo3: zl,
        photo4: Ul,
        photo5: Xl,
        step1: Kl,
        step2: Ql,
        step3: ql,
        step4: $l,
        solitaire: ec,
        cv: tc,
        nba: nc,
        hikotify: sc,
        linkedin: ic,
        github: rc,
        folder: oc,
        tictactoe: lc,
        calculator: cc,
        earthquakes: uc,
        hibu: fc,
        "infinite-wordle": ac,
        setup: dc,
        readme: pc,
    },
    qe = Bl({
        id: "store",
        state: () => ({
            stepNum: 1,
            steps: [
                {
                    id: 1,
                    title: "Welcome!",
                    description: "At the of setup wizard, you will be able to see my CV.",
                    img: "step1",
                },
                {
                    id: 2,
                    title: "Employment History",
                    description: "In short, you can see my employment history.",
                    img: "step2",
                },
                {
                    id: 3,
                    title: "Technical Skills",
                    description: "My technical skills can be seen here.",
                    img: "step3",
                },
                { id: 4, title: "Hobbies", description: "My hobbies are listed here.", img: "step4" },
            ],
            searchQuery: "",
            apps: Ll,
            program: {},
            folderPrograms: [],
            currentTime: new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
            currentDate: new Date().toLocaleDateString("en-GB"),
            recentApps: [],
            isShown: !0,
            isMinimized: !1,
            isFullscreen: !1,
            isSetupFinished: !1,
            isStartMenuOpen: !1,
        }),
        getters: {
            getApps() {
                const e = this.searchQuery.trim();
                return e.length >= 3
                    ? this.apps.filter((t) => t.name.toLowerCase().includes(e.toLowerCase()))
                    : this.apps.sort((t, n) => (t.sortApp || 0) - (n.sortApp || 0));
            },
            getStartMenuApps() {
                return this.apps.filter((e) => e.isOnStartMenu);
            },
            currentStep() {
                return this.steps[this.stepNum - 1];
            },
            maxSteps() {
                return this.steps.length;
            },
        },
        actions: {
            getCurrentTime() {
                this.currentTime = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
            },
            openProgram(e) {
                (this.isStartMenuOpen = !1),
                    e.type === "app"
                        ? (window.open(e.url, "_blank"), this.insertRecentApp(e))
                        : ((this.isMinimized = !1),
                          (this.program = e),
                          e.type === "folder" ? (this.folderPrograms = e.children) : this.insertRecentApp(e));
            },
            insertRecentApp(e) {
                e.isOnStartMenu ||
                    this.recentApps.includes(e) ||
                    (this.recentApps.length === 5 && this.recentApps.pop(), this.recentApps.unshift(e));
            },
            closeProgram() {
                (this.isFullscreen = !1),
                    (this.isMinimized = !1),
                    (this.stepNum = 1),
                    (this.program =
                        this.program.type === "photo"
                            ? {
                                  id: 9,
                                  name: "Photographs",
                                  icon: "folder",
                                  type: "folder",
                                  children: Array.from({ length: 5 }, (e, t) => ({
                                      id: t + 10,
                                      name: `photo${t + 1}`,
                                      extention: "jpg",
                                      icon: `photo${t + 1}`,
                                      type: "photo",
                                  })),
                              }
                            : {});
            },
            toggleMinimized() {
                (this.isMinimized = !this.isMinimized), this.isMinimized && (this.isStartMenuOpen = !1);
            },
            toggleFullscreen() {
                this.isFullscreen = !this.isFullscreen;
            },
            nextStep() {
                this.stepNum < this.maxSteps && this.stepNum++;
            },
            prevStep() {
                this.stepNum > 1 && this.stepNum--;
            },
            finishSetup() {
                (this.stepNum = 1), (this.isSetupFinished = !0), (this.program = {});
            },
            downloadCV() {
                const e = document.createElement("a");
                (e.href = "./cv.pdf"), (e.download = "cv.pdf"), e.click();
            },
        },
    }),
    hc = { class: "desktop-apps" },
    gc = { class: "desktop-apps__apps" },
    mc = ["onClick"],
    yc = { class: "desktop-apps__apps-item-icon" },
    Ac = ["src"],
    bc = { class: "desktop-apps__apps-item-name" },
    _c = Be({
        __name: "DesktopApps",
        setup(e) {
            const t = qe(),
                { getApps: n, isSetupFinished: s } = _t(t),
                { openProgram: i, downloadCV: r } = t;
            return (o, l) => (
                T(),
                E("div", hc, [
                    I("div", gc, [
                        (T(!0),
                        E(
                            ce,
                            null,
                            Ht(
                                w(n),
                                (c) => (
                                    T(),
                                    E(
                                        "div",
                                        { class: "desktop-apps__apps-item", key: c.id, onClick: (d) => w(i)(c) },
                                        [
                                            I("div", yc, [I("img", { src: w(yt)[c.icon] }, null, 8, Ac)]),
                                            I("div", bc, [
                                                I("p", null, he(c.name) + he(c.extention ? "." + c.extention : ""), 1),
                                            ]),
                                        ],
                                        8,
                                        mc,
                                    )
                                ),
                            ),
                            128,
                        )),
                        w(s)
                            ? (T(),
                              E(
                                  "div",
                                  {
                                      key: 0,
                                      class: "desktop-apps__apps-item",
                                      onClick: l[0] || (l[0] = (...c) => w(r) && w(r)(...c)),
                                  },
                                  l[1] ||
                                      (l[1] = [
                                          I(
                                              "div",
                                              { class: "desktop-apps__apps-item-icon" },
                                              [I("img", { src: Hl })],
                                              -1,
                                          ),
                                          I(
                                              "div",
                                              { class: "desktop-apps__apps-item-name" },
                                              [I("p", null, "Hola.pdf")],
                                              -1,
                                          ),
                                      ]),
                              ))
                            : se("", !0),
                    ]),
                ])
            );
        },
    }),
    ut = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [s, i] of t) n[s] = i;
        return n;
    },
    vc = ut(_c, [["__scopeId", "data-v-bb83b8cd"]]),
    wc = "/assets/start-BoRoUXrz.png",
    xc = "/assets/search-icon-C5fdwOsR.png",
    Cc = { class: "navbar" },
    Rc = { class: "navbar__search" },
    Ic = ["src"],
    Sc = { class: "navbar__opened-program-name" },
    Pc = { class: "navbar__settings" },
    Oc = { class: "navbar__settings-time" },
    Mc = { class: "navbar__settings-date" },
    jc = { key: 0, class: "start-menu" },
    kc = { class: "start-menu__content" },
    Tc = ["onClick"],
    Zc = ["src", "alt"],
    Dc = { class: "start-menu__content-item-name" },
    Gc = { key: 0, class: "start-menu__recent-title" },
    Wc = { key: 1, class: "start-menu__content" },
    Ec = ["onClick"],
    Fc = ["src", "alt"],
    Yc = { class: "start-menu__content-item-name" },
    Bc = Be({
        __name: "NavBar",
        setup(e) {
            const t = qe(),
                {
                    searchQuery: n,
                    program: s,
                    currentTime: i,
                    currentDate: r,
                    isStartMenuOpen: o,
                    recentApps: l,
                } = _t(t),
                { toggleMinimized: c, getCurrentTime: d, getStartMenuApps: a, openProgram: h } = t;
            return (
                setInterval(d, 5e3),
                (C, v) => {
                    var D, Z;
                    return (
                        T(),
                        E(
                            ce,
                            null,
                            [
                                I("div", Cc, [
                                    I("img", {
                                        class: "navbar__logo",
                                        src: wc,
                                        alt: "Logo",
                                        onClick: v[0] || (v[0] = (G) => (o.value = !w(o))),
                                    }),
                                    I("div", Rc, [
                                        v[3] ||
                                            (v[3] = I(
                                                "img",
                                                { class: "navbar__search-icon", src: xc, alt: "Search" },
                                                null,
                                                -1,
                                            )),
                                        _n(
                                            I(
                                                "input",
                                                {
                                                    type: "text",
                                                    class: "navbar__search-input",
                                                    "onUpdate:modelValue":
                                                        v[1] || (v[1] = (G) => (ee(n) ? (n.value = G) : null)),
                                                    placeholder: "Search...",
                                                },
                                                null,
                                                512,
                                            ),
                                            [[Ol, w(n)]],
                                        ),
                                    ]),
                                    (D = w(s)) != null && D.type && ((Z = w(s)) == null ? void 0 : Z.type) !== "welcome"
                                        ? (T(),
                                          E(
                                              "div",
                                              {
                                                  key: 0,
                                                  class: "navbar__opened-program",
                                                  onClick: v[2] || (v[2] = (...G) => w(c) && w(c)(...G)),
                                              },
                                              [
                                                  I(
                                                      "img",
                                                      {
                                                          class: "navbar__opened-program-icon",
                                                          src: w(yt)[w(s).icon],
                                                          alt: "Minimized Icon",
                                                      },
                                                      null,
                                                      8,
                                                      Ic,
                                                  ),
                                                  I("p", Sc, he(w(s).name), 1),
                                              ],
                                          ))
                                        : se("", !0),
                                    I("div", Pc, [I("span", Oc, he(w(i)), 1), I("span", Mc, he(w(r)), 1)]),
                                ]),
                                w(o)
                                    ? (T(),
                                      E("div", jc, [
                                          v[4] ||
                                              (v[4] = I(
                                                  "div",
                                                  { class: "start-menu__header" },
                                                  [I("h3", { class: "start-menu__header-title" }, "Visitor")],
                                                  -1,
                                              )),
                                          I("div", kc, [
                                              (T(!0),
                                              E(
                                                  ce,
                                                  null,
                                                  Ht(
                                                      w(a),
                                                      (G) => (
                                                          T(),
                                                          E(
                                                              "div",
                                                              {
                                                                  class: "start-menu__content-item",
                                                                  key: G.id,
                                                                  onClick: (B) => w(h)(G),
                                                              },
                                                              [
                                                                  I(
                                                                      "img",
                                                                      {
                                                                          class: "start-menu__content-item-icon",
                                                                          src: w(yt)[G.icon],
                                                                          alt: G.name,
                                                                      },
                                                                      null,
                                                                      8,
                                                                      Zc,
                                                                  ),
                                                                  I("span", Dc, he(G.name), 1),
                                                              ],
                                                              8,
                                                              Tc,
                                                          )
                                                      ),
                                                  ),
                                                  128,
                                              )),
                                          ]),
                                          w(l).length ? (T(), E("h3", Gc, "Recent Apps")) : se("", !0),
                                          w(l).length
                                              ? (T(),
                                                E("div", Wc, [
                                                    (T(!0),
                                                    E(
                                                        ce,
                                                        null,
                                                        Ht(
                                                            w(l),
                                                            (G) => (
                                                                T(),
                                                                E(
                                                                    "div",
                                                                    {
                                                                        class: "start-menu__content-item",
                                                                        key: G.id,
                                                                        onClick: (B) => w(h)(G),
                                                                    },
                                                                    [
                                                                        I(
                                                                            "img",
                                                                            {
                                                                                class: "start-menu__content-item-icon",
                                                                                src: w(yt)[G.icon],
                                                                                alt: G.name,
                                                                            },
                                                                            null,
                                                                            8,
                                                                            Fc,
                                                                        ),
                                                                        I("span", Yc, he(G.name), 1),
                                                                    ],
                                                                    8,
                                                                    Ec,
                                                                )
                                                            ),
                                                        ),
                                                        128,
                                                    )),
                                                ]))
                                              : se("", !0),
                                      ]))
                                    : se("", !0),
                            ],
                            64,
                        )
                    );
                }
            );
        },
    }),
    Hc = ut(Bc, [["__scopeId", "data-v-1b7d4096"]]),
    Lc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADmmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA0LTIzPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmQyM2ZiZmRkLWVmOTEtNGU0YS1hZTc4LWMxN2MzYTE3ZDA2OTwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5IaWttZXQgQ2FuPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+PTWRPgAAAaJJREFUeJzt2D9LHEEYx/HvztkGxCYQ0gqxshN8A4kBIb2pDARsxZch+BKS9xEIpBAC6WxCSlsbESzX3FrMTHZuvTmu8E9kvx94uNvZPbj73czuw4AkSZIkSZIkSZIkSZIk6f41lfGQSr1pqoUmj/BFnruZjMoZGOgT3kq1OvzACP0FroBfqWA2qxkfgFOgs+bWKbBbBtak6oBD4CSNdyn5bl7KI9QQV2JesUfErP6t4ANiWFOgpb9hTovxp/73H7vK356rLcY/52RfAX+AF8RZN6GfebWn9NiUeeSMLoGNAOwRw2sxvJqcRUfMqAXWgI8B2EknA4a3SBli7pHfB2B9cIHh1Q0zWq/2M1pOAM7T+27wqruGGZ0H4Hs6mOLyXUZDv2q/NcBr4De2MYvMa2OugTf5gk/UG+myoR5TzcugLc7vA6wQ74NfiH3NcRojJe0DJgrEWZezOQS+Umz55aX6DvgB3PD0M+B/q5uUzdsys9p21iawDbxEABfAT+AsHVfbv7Hv/S2juqFaCvRbXZp9sEiSJEmSJEmSJEmSJEmSHtwtsxdhEKr3+kkAAAAASUVORK5CYII=",
    Jc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADmmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA0LTIzPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPjE1ODBjOWExLWZiNDEtNDJjNC04MGFjLTFlZWI1NTgzNjVkZDwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5IaWttZXQgQ2FuPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+zc/jIAAAAfJJREFUeJzt3U1u01AYRuHjJIjCApDYAczYA3tgNYBQVYm9sBpmzJhRwQbaIjUxA+fiW/8E0FtaTM4jWVZiD26OnDijz9B5B5wDLbDbb63bja3u8gV4s2/H2eCk+17ov77VjU4b4BvwBNgC6/0BgAbV6i6l1deGrmg50FZ7jY0abWYOePVNGzZqNwdOuMaY0DfYMPHtHL5RTt4Cr4CPwGP6r/mxWQEXwAvgA/094udFNbwCixb4BHz+ywtcihNm7gtzAQEeVedsb3tFC7Gm+yk7Yean7FDAXbU/1rvybrAfWd3RQv5bBgwZMGTAkAFDBgwZMGTAkAFDBgwZMGTAkAFDBgwZMGTAkAFDBgwZMGTAkAFDBgwZMGTAkAFDBgwZMGTAkAFDBgwZMGTAkAFDBgwZMGTAkAFDBgwZMGTAkAFDBgwZMGTAkAFDBgwZMGTAkAFDBgwZMGTAkAFDBgwZMGTAkAFDBgwZMGTAkAFDh6a3rar9sU5vW9FNbpu90A4FvNzvr29zRQtTPvsVfziAsQGeA99xBOgF8IyZAYxlDHI9S9UhtDfNDaGdnOJbj/h9cFcrXJDRnO3yYjQf+T5WtwCjedsN3UMInuIo+F+ZGgV/vgYeAi/p/640GG9K6dLS/615Xw6+xcdh/M5THOrHYbwG+AGBPDT6+NVB4AAAAABJRU5ErkJggg==",
    Nc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADmmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA0LTIzPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmYzYWYzM2E4LWRmMTMtNDg4OC1hNzg4LTA5NWVmMTFlODJjMjwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5IaWttZXQgQ2FuPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+TjMurQAAA6tJREFUeJztnL1rFEEYh5/dW6PE4AdpBFOlFLEQwcZWrFIoaiWIiIXYiJWFjQj+C1qoYCVoaaH4gZIggmUsRFAkoCABIUbFu1zu1uKdceaSze3B6+Xi7fvAsHt7M2H3ybyzc80voZwEyN35AWAKGAPSHsYOE22gATwFXrhrSdkg3yEDbiAircEDYEeZvFjgXTewBdTdsV3BVgeazsWzWFARNSfqMPAEWEbKNnV/qFEyfpjIkSrc6j4vASPAmaxkEMApd2y5P3IbuEwQmK8eOlT4Z0yAi8BVwvp/utsgzzSh9n/RY+0PMe8IPr7Fb9IEKVvonFW16PwH8Luvtzd4MlYvTUnU5t21NjDmSzh1F1qu01g0MC7zFNgJLLrrw1S+OfATWeshOPHfEV3/SxZ13A5cAI4CkwRxo1H/ceD9v7zrDcQS8mz3gJvIZIoldmU/MEfxnqeF/Fdarg16D7Ye7Q0w4dysLOeZyEsDZFZ9dhfrTtagH2BQrekc5E6UJ5bYITADLgG7nc3NrtMn5I1blZ9rbWR3MYEsXU3gEHASuI+8SJeLBmbAMXe+yR3PAneQjWLet1veWCTIGngNuEJ47ilEYNd18LvrkANv+3eP/wVjwAKhpKcL+nSUcErnNmWRULZV+ZkG4VnbyNLl2UKJh5VrXEqYvlUpX1j7WUsdFL0kqiSujNIqrMpbtm+YQCUmUIkJVGIClZhAJSZQiQlUYgKVmEAlJlCJCVRiApWYQCUmUIkJVGIClZhAJSZQiQlUYgKVmEAlJlCJCVRiApWYQCUmUIkJVGIClZhAJSZQiQlUYgKVmEAlJlCJCVRiApWYQCUmUIkJVGIClZhAJSZQiQlUYgKVmEAlJlCJCVRiApWYwO746KsaIVsidtbuFn9nSFZMM/o8Cex15ykwbwK7sws4h0gcB84D2wghRTMgMR8+N+b1QG5z4zAKfCHkwhTFQzXccRnYZzOwO206I59qSKITyMycBZuBMb3MwFkkEgogLZqBVchF7YUUCWG7TijZD8Cr6PtVb+GcagqMg2bjZ/8K3Cro7xOOyehMJhtxnxM6Y6CGnQQR4uONPSmSaued+DzpVjz4I6G+60jce1U5jnhYcseH7vqaEVAZ8BzZIPq9zWPgESKzKgluPoBxKvoM8NIdU1bMupg9hHhzv8epcvMRoHOEzOw1J5L/4gSS1Ajh9V1FfNT9AnAECaMtTfL1P44PIpn5OWGxHPRsWK/mn7WJxCBPOidxCHkhfwBMDkfNf5SkigAAAABJRU5ErkJggg==",
    Vc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADmmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA0LTIzPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPjJlYmJmYmZlLWRjNjYtNGY1ZS04NDYxLWNhYjQwODExMzJiNDwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5IaWttZXQgQ2FuPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+gdCJawAABxpJREFUeJzt3cuPHFcVx/Hv75xbPQ9sx0SEHWYH3hAIjxWWgPBPxKtkBYgN4p+AJewgRAoOILPiTzBBCCfBmBAJBBICCYkV4ChRFEI8XVWHRd2aVM90j/tV/Zo50qikmnp+5ty6t6pu3fFkIKGDg0OiLiF43I0bJm6Y+JiC95LpnQhwYWaECyygZnciOZiyxWAA1BA8bsYNbyyuKfhfx0ImwA3MYM+NZHw7GW8mIzo/7yXje4A7kIQng2SQ1nvOS4vkzcm5IQSDxuJbyXgwwSKJBpFLRdGu8HwyonBF4aoKV5mn7cq/cXgssVuIHTxDcJCcZLwwyaJoLH4FHAoaBDe+nlc4SkaVjDoZddFOXQ8z5H2HK7uSiSfx9pORjFvJicI1TEaVfMSiKlzv54T6YWFqtpOMv2SgsjBFRutOo3A9TE4k4/ddRNd2Ip6JZxqOMWinbal81+EaSXyuTde8UJ1Td2TecYZmRIMrBvgWIs6KN2pBXbjKnIXPGuKJvN0AiIiRnUlSRNBMohAaAp814w5wOYJK4ABsAWLy9kSxKqj33Sjr+hbiWYXKUHg+55Ck7rrNfJq1m3jCCP6dZygvdGqnpxClIeLzZtwJuBRBRWw+4iPxCBfj8QAiIgREtgLetCr4E/CPPKMmUJxMQyZm4hfceBm4zIYjToU3IfMg40ltpjlQBtw1N44Cvp9x6qDZwFSIORNl/DJycSbwCDYKcWl4za+HmeYlE3/l+tWr7Pt0F9FJFUue91uDS85mVSzzVhiPONd7wL4gt74NDpsG5E/n3XCulTYKcdl4uQXyO4fHcgvEcDvVCp8f0TcHsS88y21gF+42Zke7gNg3XvcubOwOtxlxJZk37lx2AXFteLuAuHa8bUbsCe/+zHjbiNgT3uv6oKky37FuA2KPeFeX8qTpTERfL+Kq8HzRUjJyoAaHzW3fzwoj0poQV5l5vgjeuAMWsLfvJOP2OhC3Dq974KlpfZsDB3urR9xavOMTMCgESZitGHHr8doo1oC4M3g9I75qcHgK0XYMr2fEV04i7iReb4g2BjF3t9g5vFUgGnBFg93Fa+MsxGJ+xFcNDgYmkvGTBV819IZ3+iXwnFEYEBBgEdTFvlMeVbcRN4XKiJnffBXAHeCfiOfmeXsGFBHxRlnzFYO3JRyoJIgaqiWc99IAYRSxCurDwnlYVbcFN0MqmQ2xDCIRIKmKCJvpD0AUBH+oa56mJzxY8iWgjubmGxEGdlRF7A38F1UdnxR8GqnKr53P6DoRZAiXVOVF58Krap5uM09aPh70cA2to+np2SKWZcRgPkTlnhQTl4Wz8dTBg+XjwZKLcDe6xbkO6r09ZzicvjhPE9Pg0UOx7UZvtXhbnAUhzZ6Jj4pNwIOem0HTICpCIxe/KWJT8GAF7cgzEK8LngypVoRmScH2+phr6oLgjXXgrTS6jW2A/cJIxo/zHUs5qWF8RmO57SX6GnBpXXcY9uhFNjialJXWeB691cLdmFAj/1zwTDTXQZu1FsmXzLax/ceq5kuCt1ZdhHv/y53RnHkmpPIYb0yHzkmRK5GIiCQ0RHzKm06eVyOooOnkqRUU5V4Bp2kLtrcd09bAMKG7sfjMOhAvGtILRi8ZmKzpkzwvXts/O3J053VjQiY+dTITob9MXDpg0W4xd+ieB69TqmtJdbvsPIgEVUR/iBePsxaMpWXgyQeqe/sNHuIms+MNIyIR3AFu5Q9gqlkzUdJTZrxcr6F2ninO8yP9hePipdKG4u38a82LF+ubh/fauejacdG5aIFIq8CzHe3edtHBckG8iy6+S8C76GS+CJ7O32cOacL1eHG8c/ChTXuMcyFuA17fiHYevpPrGfF8fKm5MYjbjLd2xF3AWxviLuGtErGtndthT7QreKtGxA3JljDwzgbh9Y3o3YF3PlQkBi6S8eK8G87zNgqvL8Q87x5w2OygKcJfO1ae7zH8PYfLDhs5quWSER/mc36+HQLUk/HnvODIEKDTFlvlzNvkcVWXiNgu91+Hj5sbTwLX834MMcuL6/t1zVcF70o4uTc8NZQrxJkmyqodYZLahb1f1SSz5wheCkWa/r0z0LyXP5TxZRN8hGbbY4cAzfNOf0V0Ai/YXLw2jhFZBBH4YAjQj1rAf2gGJVdeaGSlsZkHr2e8d+h0mdhkvDbKqunSOk8mRpwaAvQBBkUy/jbuGnjq4ukXwyB3pkM3PtHWwt/s1KplslODT7cDcY/gbWqFMW2cidg8MB5n0Q7E/ULhwIf399uh4H+QEaNoxpI+ORT8XT8/Q8H/qGMxbij4XwMHguZOxO14AP5vJOPvGaz9+VcyvgMMdiXzTkYHsfvPCCZZfBfYE+BCSrk36V4qOKqGlBUDN74ouAY8qIJXkvFWWYEJQ9SCragwZonktN3zVHiKsi7HWdxNxtu5IpIg/g+U0L5vjN/YhwAAAABJRU5ErkJggg==",
    zc = { class: "step-window" },
    Uc = { class: "step-window__body" },
    Xc = { class: "step-window__body-step" },
    Kc = { class: "step-window__body-step-number" },
    Qc = { class: "step-window__body-step-number-current" },
    qc = { class: "step-window__body-step-content" },
    $c = ["src"],
    eu = { class: "step-window__body-step-content-text" },
    tu = { class: "step-window__body-step-content-text-title" },
    nu = { class: "step-window__body-step-content-text-description" },
    su = { class: "step-window__buttons" },
    iu = ["disabled"],
    ru = Be({
        __name: "SetupWindow",
        setup(e) {
            const t = qe(),
                { stepNum: n, currentStep: s, isMinimized: i } = _t(t),
                { maxSteps: r, nextStep: o, prevStep: l, finishSetup: c } = t;
            return (d, a) =>
                _n(
                    (T(),
                    E(
                        "div",
                        zc,
                        [
                            I("div", Uc, [
                                I("div", Xc, [
                                    I("div", Kc, [
                                        I("span", null, [
                                            a[3] || (a[3] = Un("Step ")),
                                            I("span", Qc, he(w(n)), 1),
                                            Un("/" + he(w(r)), 1),
                                        ]),
                                    ]),
                                ]),
                                I("div", qc, [
                                    I(
                                        "img",
                                        {
                                            src: w(s).img,
                                            alt: "banner",
                                            class: "step-window__body-step-content-banner",
                                        },
                                        null,
                                        8,
                                        $c,
                                    ),
                                    I("div", eu, [
                                        I("div", tu, [I("p", null, he(w(s).title), 1)]),
                                        I("div", nu, [I("p", null, he(w(s).description), 1)]),
                                    ]),
                                ]),
                                I("div", su, [
                                    I(
                                        "button",
                                        {
                                            onClick: a[0] || (a[0] = (...h) => w(l) && w(l)(...h)),
                                            disabled: w(n) === 1,
                                        },
                                        "< Back",
                                        8,
                                        iu,
                                    ),
                                    w(n) !== w(r)
                                        ? (T(),
                                          E(
                                              "button",
                                              { key: 0, onClick: a[1] || (a[1] = (...h) => w(o) && w(o)(...h)) },
                                              "Next >",
                                          ))
                                        : se("", !0),
                                    w(n) === w(r)
                                        ? (T(),
                                          E(
                                              "button",
                                              { key: 1, onClick: a[2] || (a[2] = (...h) => w(c) && w(c)(...h)) },
                                              "Finish",
                                          ))
                                        : se("", !0),
                                ]),
                            ]),
                        ],
                        512,
                    )),
                    [[gs, !w(i)]],
                );
        },
    }),
    ou = ut(ru, [["__scopeId", "data-v-7bbace2f"]]),
    lu = ["src", "alt"],
    cu = Be({
        __name: "ImageWindow",
        setup(e) {
            const t = qe(),
                { program: n, isFullscreen: s } = _t(t);
            return (i, r) => (
                T(), E("img", { class: bt({ fullscreen: w(s) }), src: w(yt)[w(n).name], alt: w(n).name }, null, 10, lu)
            );
        },
    }),
    uu = ut(cu, [["__scopeId", "data-v-27782e93"]]),
    fu = { class: "folder-window__apps" },
    au = ["onClick"],
    du = { class: "folder-window__apps-item-icon" },
    pu = ["src"],
    hu = { class: "folder-window__apps-item-name" },
    gu = Be({
        __name: "FolderWindow",
        setup(e) {
            const t = qe(),
                { isFullscreen: n, folderPrograms: s } = _t(t),
                { openProgram: i } = t;
            return (r, o) => (
                T(),
                E(
                    "div",
                    { class: bt(["folder-window", { fullscreen: w(n) }]) },
                    [
                        I("div", fu, [
                            (T(!0),
                            E(
                                ce,
                                null,
                                Ht(
                                    w(s),
                                    (l) => (
                                        T(),
                                        E(
                                            "div",
                                            { class: "folder-window__apps-item", key: l.id, onClick: (c) => w(i)(l) },
                                            [
                                                I("div", du, [I("img", { src: w(yt)[l.icon] }, null, 8, pu)]),
                                                I("div", hu, [
                                                    I(
                                                        "p",
                                                        null,
                                                        he(l.name) + he(l.extention ? "." + l.extention : ""),
                                                        1,
                                                    ),
                                                ]),
                                            ],
                                            8,
                                            au,
                                        )
                                    ),
                                ),
                                128,
                            )),
                        ]),
                    ],
                    2,
                )
            );
        },
    }),
    mu = ut(gu, [["__scopeId", "data-v-4ed4056b"]]),
    yu = { class: "welcome-window" },
    Au = { key: 0, class: "progress" },
    bu = { key: 0, class: "progress-before" },
    _u = { class: "progress-text" },
    vu = { key: 1, class: "welcome-text" },
    wu = { class: "download" },
    xu = Be({
        __name: "WelcomeWindow",
        setup(e) {
            const t = qe(),
                { downloadCV: n } = t,
                s = Yt([0, 0, 0, 0, 0]),
                i = Yt(!1);
            as(() => {
                o();
            });
            let r = 0;
            function o() {
                if (r === s.value.length) {
                    i.value = !0;
                    return;
                }
                (s.value[r] += 1),
                    setTimeout(function () {
                        s.value[r] < 100 ? o() : s.value[r] === 100 && (r++, o());
                    }, 1);
            }
            return (l, c) => (
                T(),
                E("div", yu, [
                    i.value
                        ? se("", !0)
                        : (T(),
                          E("div", Au, [
                              (T(!0),
                              E(
                                  ce,
                                  null,
                                  Ht(
                                      s.value,
                                      (d, a) => (
                                          T(),
                                          E("div", { class: "progress-row", key: a }, [
                                              d !== 0 ? (T(), E("div", bu, ">>")) : se("", !0),
                                              d !== 0
                                                  ? (T(),
                                                    E(
                                                        "div",
                                                        {
                                                            key: 1,
                                                            class: "progress-bar",
                                                            style: mn({ width: d + "%" }),
                                                        },
                                                        null,
                                                        4,
                                                    ))
                                                  : se("", !0),
                                              _n(I("span", _u, "Completed!", 512), [[gs, d === 100]]),
                                          ])
                                      ),
                                  ),
                                  128,
                              )),
                          ])),
                    i.value
                        ? (T(),
                          E("div", vu, [
                              c[1] || (c[1] = I("h2", null, ">> Welcome to the HikOS 22!", -1)),
                              c[2] || (c[2] = I("h4", null, ">> You can simply download my resume,", -1)),
                              c[3] ||
                                  (c[3] = I("h4", null, ">> Or close this window and start to explore my works!", -1)),
                              I("div", wu, [
                                  I(
                                      "button",
                                      {
                                          class: "download-button",
                                          onClick: c[0] || (c[0] = (...d) => w(n) && w(n)(...d)),
                                      },
                                      "Download CV",
                                  ),
                              ]),
                          ]))
                        : se("", !0),
                ])
            );
        },
    }),
    Cu = ut(xu, [["__scopeId", "data-v-a41116c0"]]),
    Ru = { class: "program-window__header" },
    Iu = { class: "program-window__header-buttons" },
    Su = { key: 0, src: Jc, alt: "Maximize" },
    Pu = { key: 1, src: Nc, alt: "Maximized" },
    Ou = ["src"],
    Mu = { key: 5, class: "text-editor" },
    ju = Be({
        __name: "ProgramWindow",
        setup(e) {
            const t = qe(),
                { program: n, isMinimized: s, isFullscreen: i } = _t(t),
                { toggleMinimized: r, closeProgram: o, toggleFullscreen: l } = t;
            return (c, d) => {
                var a;
                return (a = w(n)) != null && a.type
                    ? _n(
                          (T(),
                          E(
                              "div",
                              { key: 0, class: bt(["program-window", { fullscreen: w(i) }]) },
                              [
                                  I("div", Ru, [
                                      I("span", null, he(w(n).name), 1),
                                      I("div", Iu, [
                                          w(n).type !== "welcome"
                                              ? (T(),
                                                E(
                                                    "button",
                                                    {
                                                        key: 0,
                                                        type: "button",
                                                        onClick: d[0] || (d[0] = (...h) => w(r) && w(r)(...h)),
                                                    },
                                                    d[3] || (d[3] = [I("img", { src: Lc, alt: "Minimize" }, null, -1)]),
                                                ))
                                              : se("", !0),
                                          w(n).type !== "setup" && w(n).type !== "welcome"
                                              ? (T(),
                                                E(
                                                    "button",
                                                    {
                                                        key: 1,
                                                        type: "button",
                                                        onClick: d[1] || (d[1] = (...h) => w(l) && w(l)(...h)),
                                                    },
                                                    [w(i) ? (T(), E("img", Pu)) : (T(), E("img", Su))],
                                                ))
                                              : se("", !0),
                                          I(
                                              "button",
                                              {
                                                  class: "close",
                                                  type: "button",
                                                  onClick: d[2] || (d[2] = (...h) => w(o) && w(o)(...h)),
                                              },
                                              d[4] || (d[4] = [I("img", { src: Vc, alt: "Close" }, null, -1)]),
                                          ),
                                      ]),
                                  ]),
                                  w(n).type === "project"
                                      ? (T(), E("iframe", { key: 0, src: w(n).url, frameborder: "0" }, null, 8, Ou))
                                      : se("", !0),
                                  w(n).type === "setup" ? (T(), Ot(ou, { key: 1 })) : se("", !0),
                                  w(n).type === "photo" ? (T(), Ot(uu, { key: 2 })) : se("", !0),
                                  w(n).type === "folder" ? (T(), Ot(mu, { key: 3 })) : se("", !0),
                                  w(n).type === "welcome" ? (T(), Ot(Cu, { key: 4 })) : se("", !0),
                                  w(n).type === "text"
                                      ? (T(),
                                        E(
                                            "div",
                                            Mu,
                                            d[5] ||
                                                (d[5] = [
                                                    I("h1", null, "Hello World!", -1),
                                                    I("p", null, "This website exists for you to get to know me.", -1),
                                                    I("br", null, null, -1),
                                                    I(
                                                        "p",
                                                        null,
                                                        " If you want to download my CV, you can click to SETUP.exe and when the setup finishes, you will be able to download my CV. ",
                                                        -1,
                                                    ),
                                                    I("br", null, null, -1),
                                                    I(
                                                        "p",
                                                        null,
                                                        " You can view my websites by clicking the logos on the desktop. Also I have added 4 photographs that I took. ",
                                                        -1,
                                                    ),
                                                    I("br", null, null, -1),
                                                    I("p", { style: { "text-align": "right" } }, "- Hikmet", -1),
                                                ]),
                                        ))
                                      : se("", !0),
                              ],
                              2,
                          )),
                          [[gs, !w(s)]],
                      )
                    : se("", !0);
            };
        },
    }),
    ku = ut(ju, [["__scopeId", "data-v-f180dcc4"]]),
    Tu = Be({
        __name: "HomePage",
        setup(e) {
            const t = qe(),
                { openProgram: n } = t;
            return (
                as(() => {
                    localStorage.getItem("hasCodeRunBefore") === null &&
                        (n({
                            id: -1,
                            name: "Welcome",
                            extention: "",
                            icon: "",
                            type: "welcome",
                            url: "",
                            isOnStartMenu: !1,
                            sortApp: -1,
                        }),
                        localStorage.setItem("hasCodeRunBefore", "true"));
                }),
                (s, i) => (T(), E(ce, null, [ve(vc), ve(Hc), ve(ku)], 64))
            );
        },
    }),
    Zu = Be({
        __name: "App",
        setup(e) {
            return (t, n) => (T(), E("main", null, [ve(Tu)]));
        },
    }),
    fr = kl(Zu);
fr.use(Dl());
fr.mount("#app");
