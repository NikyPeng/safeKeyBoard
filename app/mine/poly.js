/**
 * Created by glzc on 2017/10/10.
 */
!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    var n = [], i = e.document, r = n.slice, a = n.concat, o = n.push, s = n.indexOf, l = {}, u = l.toString, d = l.hasOwnProperty, c = {}, f = "1.12.4", p = function (e, t) {
        return new p.fn.init(e, t)
    }, h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, v = /^-ms-/, g = /-([\da-z])/gi, m = function (e, t) {
        return t.toUpperCase()
    };
    p.fn = p.prototype = {
        jquery: f, constructor: p, selector: "", length: 0, toArray: function () {
            return r.call(this)
        }, get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : r.call(this)
        }, pushStack: function (e) {
            var t = p.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e) {
            return p.each(this, e)
        }, map: function (e) {
            return this.pushStack(p.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(r.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: o, sort: n.sort, splice: n.splice
    }, p.extend = p.fn.extend = function () {
        var e, t, n, i, r, a, o = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || p.isFunction(o) || (o = {}), s === l && (o = this, s--); l > s; s++)if (null != (r = arguments[s]))for (i in r)e = o[i], n = r[i], o !== n && (u && n && (p.isPlainObject(n) || (t = p.isArray(n))) ? (t ? (t = !1, a = e && p.isArray(e) ? e : []) : a = e && p.isPlainObject(e) ? e : {}, o[i] = p.extend(u, a, n)) : void 0 !== n && (o[i] = n));
        return o
    }, p.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === p.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === p.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            var t = e && e.toString();
            return !p.isArray(e) && t - parseFloat(t) + 1 >= 0
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, isPlainObject: function (e) {
            var t;
            if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e))return !1;
            try {
                if (e.constructor && !d.call(e, "constructor") && !d.call(e.constructor.prototype, "isPrototypeOf"))return !1
            } catch (n) {
                return !1
            }
            if (!c.ownFirst)for (t in e)return d.call(e, t);
            for (t in e);
            return void 0 === t || d.call(e, t)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[u.call(e)] || "object" : typeof e
        }, globalEval: function (t) {
            t && p.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(v, "ms-").replace(g, m)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t) {
            var n, i = 0;
            if (y(e)) {
                for (n = e.length; n > i; i++)if (t.call(e[i], i, e[i]) === !1)break
            } else for (i in e)if (t.call(e[i], i, e[i]) === !1)break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(h, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (y(Object(e)) ? p.merge(n, "string" == typeof e ? [e] : e) : o.call(n, e)), n
        }, inArray: function (e, t, n) {
            var i;
            if (t) {
                if (s)return s.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)if (n in t && t[n] === e)return n
            }
            return -1
        }, merge: function (e, t) {
            var n = +t.length, i = 0, r = e.length;
            while (n > i)e[r++] = t[i++];
            if (n !== n)while (void 0 !== t[i])e[r++] = t[i++];
            return e.length = r, e
        }, grep: function (e, t, n) {
            for (var i, r = [], a = 0, o = e.length, s = !n; o > a; a++)i = !t(e[a], a), i !== s && r.push(e[a]);
            return r
        }, map: function (e, t, n) {
            var i, r, o = 0, s = [];
            if (y(e))for (i = e.length; i > o; o++)r = t(e[o], o, n), null != r && s.push(r); else for (o in e)r = t(e[o], o, n), null != r && s.push(r);
            return a.apply([], s)
        }, guid: 1, proxy: function (e, t) {
            var n, i, a;
            return "string" == typeof t && (a = e[t], t = e, e = a), p.isFunction(e) ? (n = r.call(arguments, 2), i = function () {
                return e.apply(t || this, n.concat(r.call(arguments)))
            }, i.guid = e.guid = e.guid || p.guid++, i) : void 0
        }, now: function () {
            return +new Date
        }, support: c
    }), "function" == typeof Symbol && (p.fn[Symbol.iterator] = n[Symbol.iterator]), p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    function y(e) {
        var t = !!e && "length"in e && e.length, n = p.type(e);
        return "function" === n || p.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    var w = function (e) {
        var t, n, i, r, a, o, s, l, u, d, c, f, p, h, v, g, m, y, w, b = "sizzle" + 1 * new Date, _ = e.document, x = 0, S = 0, T = oe(), E = oe(), j = oe(), C = function (e, t) {
            return e === t && (c = !0), 0
        }, A = 1 << 31, k = {}.hasOwnProperty, P = [], I = P.pop, O = P.push, L = P.push, F = P.slice, N = function (e, t) {
            for (var n = 0, i = e.length; i > n; n++)if (e[n] === t)return n;
            return -1
        }, D = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", B = "[\\x20\\t\\r\\n\\f]", H = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", V = "\\[" + B + "*(" + H + ")(?:" + B + "*([*^$|!~]?=)" + B + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + B + "*\\]", M = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + V + ")*)|.*)\\)|)", R = new RegExp(B + "+", "g"), U = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"), W = new RegExp("^" + B + "*," + B + "*"), q = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"), z = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"), $ = new RegExp(M), J = new RegExp("^" + H + "$"), X = {
            ID: new RegExp("^#(" + H + ")"),
            CLASS: new RegExp("^\\.(" + H + ")"),
            TAG: new RegExp("^(" + H + "|[*])"),
            ATTR: new RegExp("^" + V),
            PSEUDO: new RegExp("^" + M),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + D + ")$", "i"),
            needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
        }, Q = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/, ee = /'|\\/g, te = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"), ne = function (e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, ie = function () {
            f()
        };
        try {
            L.apply(P = F.call(_.childNodes), _.childNodes), P[_.childNodes.length].nodeType
        } catch (re) {
            L = {
                apply: P.length ? function (e, t) {
                    O.apply(e, F.call(t))
                } : function (e, t) {
                    var n = e.length, i = 0;
                    while (e[n++] = t[i++]);
                    e.length = n - 1
                }
            }
        }
        function ae(e, t, i, r) {
            var a, s, u, d, c, h, m, y, x = t && t.ownerDocument, S = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== S && 9 !== S && 11 !== S)return i;
            if (!r && ((t ? t.ownerDocument || t : _) !== p && f(t), t = t || p, v)) {
                if (11 !== S && (h = K.exec(e)))if (a = h[1]) {
                    if (9 === S) {
                        if (!(u = t.getElementById(a)))return i;
                        if (u.id === a)return i.push(u), i
                    } else if (x && (u = x.getElementById(a)) && w(t, u) && u.id === a)return i.push(u), i
                } else {
                    if (h[2])return L.apply(i, t.getElementsByTagName(e)), i;
                    if ((a = h[3]) && n.getElementsByClassName && t.getElementsByClassName)return L.apply(i, t.getElementsByClassName(a)), i
                }
                if (n.qsa && !j[e + " "] && (!g || !g.test(e))) {
                    if (1 !== S)x = t, y = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        (d = t.getAttribute("id")) ? d = d.replace(ee, "\\$&") : t.setAttribute("id", d = b), m = o(e), s = m.length, c = J.test(d) ? "#" + d : "[id='" + d + "']";
                        while (s--)m[s] = c + " " + ge(m[s]);
                        y = m.join(","), x = Z.test(e) && he(t.parentNode) || t
                    }
                    if (y)try {
                        return L.apply(i, x.querySelectorAll(y)), i
                    } catch (T) {
                    } finally {
                        d === b && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(U, "$1"), t, i, r)
        }

        function oe() {
            var e = [];

            function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
            }

            return t
        }

        function se(e) {
            return e[b] = !0, e
        }

        function le(e) {
            var t = p.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e, t) {
            var n = e.split("|"), r = n.length;
            while (r--)i.attrHandle[n[r]] = t
        }

        function de(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || A) - (~e.sourceIndex || A);
            if (i)return i;
            if (n)while (n = n.nextSibling)if (n === t)return -1;
            return e ? 1 : -1
        }

        function ce(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function fe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function pe(e) {
            return se(function (t) {
                return t = +t, se(function (n, i) {
                    var r, a = e([], n.length, t), o = a.length;
                    while (o--)n[r = a[o]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function he(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        n = ae.support = {}, a = ae.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, f = ae.setDocument = function (e) {
            var t, r, o = e ? e.ownerDocument || e : _;
            return o !== p && 9 === o.nodeType && o.documentElement ? (p = o, h = p.documentElement, v = !a(p), (r = p.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), n.attributes = le(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = le(function (e) {
                return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Y.test(p.getElementsByClassName), n.getById = le(function (e) {
                return h.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length
            }), n.getById ? (i.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && v) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, i.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete i.find.ID, i.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [], r = 0, a = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = a[r++])1 === n.nodeType && i.push(n);
                    return i
                }
                return a
            }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                    return "undefined" != typeof t.getElementsByClassName && v ? t.getElementsByClassName(e) : void 0
                }, m = [], g = [], (n.qsa = Y.test(p.querySelectorAll)) && (le(function (e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + B + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + B + "*(?:value|" + D + ")"), e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]")
            }), le(function (e) {
                var t = p.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + B + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            })), (n.matchesSelector = Y.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le(function (e) {
                n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", M)
            }), g = g.length && new RegExp(g.join("|")), m = m.length && new RegExp(m.join("|")), t = Y.test(h.compareDocumentPosition), w = t || Y.test(h.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)while (t = t.parentNode)if (t === e)return !0;
                return !1
            }, C = t ? function (e, t) {
                if (e === t)return c = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === p || e.ownerDocument === _ && w(_, e) ? -1 : t === p || t.ownerDocument === _ && w(_, t) ? 1 : d ? N(d, e) - N(d, t) : 0 : 4 & i ? -1 : 1)
            } : function (e, t) {
                if (e === t)return c = !0, 0;
                var n, i = 0, r = e.parentNode, a = t.parentNode, o = [e], s = [t];
                if (!r || !a)return e === p ? -1 : t === p ? 1 : r ? -1 : a ? 1 : d ? N(d, e) - N(d, t) : 0;
                if (r === a)return de(e, t);
                n = e;
                while (n = n.parentNode)o.unshift(n);
                n = t;
                while (n = n.parentNode)s.unshift(n);
                while (o[i] === s[i])i++;
                return i ? de(o[i], s[i]) : o[i] === _ ? -1 : s[i] === _ ? 1 : 0
            }, p) : p
        }, ae.matches = function (e, t) {
            return ae(e, null, null, t)
        }, ae.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== p && f(e), t = t.replace(z, "='$1']"), n.matchesSelector && v && !j[t + " "] && (!m || !m.test(t)) && (!g || !g.test(t)))try {
                var i = y.call(e, t);
                if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)return i
            } catch (r) {
            }
            return ae(t, p, null, [e]).length > 0
        }, ae.contains = function (e, t) {
            return (e.ownerDocument || e) !== p && f(e), w(e, t)
        }, ae.attr = function (e, t) {
            (e.ownerDocument || e) !== p && f(e);
            var r = i.attrHandle[t.toLowerCase()], a = r && k.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !v) : void 0;
            return void 0 !== a ? a : n.attributes || !v ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
        }, ae.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ae.uniqueSort = function (e) {
            var t, i = [], r = 0, a = 0;
            if (c = !n.detectDuplicates, d = !n.sortStable && e.slice(0), e.sort(C), c) {
                while (t = e[a++])t === e[a] && (r = i.push(a));
                while (r--)e.splice(i[r], 1)
            }
            return d = null, e
        }, r = ae.getText = function (e) {
            var t, n = "", i = 0, a = e.nodeType;
            if (a) {
                if (1 === a || 9 === a || 11 === a) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += r(e)
                } else if (3 === a || 4 === a)return e.nodeValue
            } else while (t = e[i++])n += r(t);
            return n
        }, i = ae.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = T[e + " "];
                    return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && T(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, t, n) {
                    return function (i) {
                        var r = ae.attr(i, e);
                        return null == r ? "!=" === t : t ? (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === t ? r === n || r.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, i, r) {
                    var a = "nth" !== e.slice(0, 3), o = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, d, c, f, p, h, v = a !== o ? "nextSibling" : "previousSibling", g = t.parentNode, m = s && t.nodeName.toLowerCase(), y = !l && !s, w = !1;
                        if (g) {
                            if (a) {
                                while (v) {
                                    f = t;
                                    while (f = f[v])if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType)return !1;
                                    h = v = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [o ? g.firstChild : g.lastChild], o && y) {
                                f = g, c = f[b] || (f[b] = {}), d = c[f.uniqueID] || (c[f.uniqueID] = {}), u = d[e] || [], p = u[0] === x && u[1], w = p && u[2], f = p && g.childNodes[p];
                                while (f = ++p && f && f[v] || (w = p = 0) || h.pop())if (1 === f.nodeType && ++w && f === t) {
                                    d[e] = [x, p, w];
                                    break
                                }
                            } else if (y && (f = t, c = f[b] || (f[b] = {}), d = c[f.uniqueID] || (c[f.uniqueID] = {}), u = d[e] || [], p = u[0] === x && u[1], w = p), w === !1)while (f = ++p && f && f[v] || (w = p = 0) || h.pop())if ((s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) && ++w && (y && (c = f[b] || (f[b] = {}), d = c[f.uniqueID] || (c[f.uniqueID] = {}), d[e] = [x, w]), f === t))break;
                            return w -= r, w === i || w % i === 0 && w / i >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                        var i, a = r(e, t), o = a.length;
                        while (o--)i = N(e, a[o]), e[i] = !(n[i] = a[o])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: se(function (e) {
                    var t = [], n = [], i = s(e.replace(U, "$1"));
                    return i[b] ? se(function (e, t, n, r) {
                        var a, o = i(e, null, r, []), s = e.length;
                        while (s--)(a = o[s]) && (e[s] = !(t[s] = a))
                    }) : function (e, r, a) {
                        return t[0] = e, i(t, null, a, n), t[0] = null, !n.pop()
                    }
                }), has: se(function (e) {
                    return function (t) {
                        return ae(e, t).length > 0
                    }
                }), contains: se(function (e) {
                    return e = e.replace(te, ne), function (t) {
                        return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                    }
                }), lang: se(function (e) {
                    return J.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
                        var n;
                        do if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === h
                }, focus: function (e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                    return !0
                }, parent: function (e) {
                    return !i.pseudos.empty(e)
                }, header: function (e) {
                    return G.test(e.nodeName)
                }, input: function (e) {
                    return Q.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: pe(function () {
                    return [0]
                }), last: pe(function (e, t) {
                    return [t - 1]
                }), eq: pe(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: pe(function (e, t) {
                    for (var n = 0; t > n; n += 2)e.push(n);
                    return e
                }), odd: pe(function (e, t) {
                    for (var n = 1; t > n; n += 2)e.push(n);
                    return e
                }), lt: pe(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;)e.push(i);
                    return e
                }), gt: pe(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;)e.push(i);
                    return e
                })
            }
        }, i.pseudos.nth = i.pseudos.eq;
        for (t in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})i.pseudos[t] = ce(t);
        for (t in{submit: !0, reset: !0})i.pseudos[t] = fe(t);
        function ve() {
        }

        ve.prototype = i.filters = i.pseudos, i.setFilters = new ve, o = ae.tokenize = function (e, t) {
            var n, r, a, o, s, l, u, d = E[e + " "];
            if (d)return t ? 0 : d.slice(0);
            s = e, l = [], u = i.preFilter;
            while (s) {
                n && !(r = W.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(a = [])), n = !1, (r = q.exec(s)) && (n = r.shift(), a.push({
                    value: n,
                    type: r[0].replace(U, " ")
                }), s = s.slice(n.length));
                for (o in i.filter)!(r = X[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(), a.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n)break
            }
            return t ? s.length : s ? ae.error(e) : E(e, l).slice(0)
        };
        function ge(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++)i += e[t].value;
            return i
        }

        function me(e, t, n) {
            var i = t.dir, r = n && "parentNode" === i, a = S++;
            return t.first ? function (t, n, a) {
                while (t = t[i])if (1 === t.nodeType || r)return e(t, n, a)
            } : function (t, n, o) {
                var s, l, u, d = [x, a];
                if (o) {
                    while (t = t[i])if ((1 === t.nodeType || r) && e(t, n, o))return !0
                } else while (t = t[i])if (1 === t.nodeType || r) {
                    if (u = t[b] || (t[b] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (s = l[i]) && s[0] === x && s[1] === a)return d[2] = s[2];
                    if (l[i] = d, d[2] = e(t, n, o))return !0
                }
            }
        }

        function ye(e) {
            return e.length > 1 ? function (t, n, i) {
                var r = e.length;
                while (r--)if (!e[r](t, n, i))return !1;
                return !0
            } : e[0]
        }

        function we(e, t, n) {
            for (var i = 0, r = t.length; r > i; i++)ae(e, t[i], n);
            return n
        }

        function be(e, t, n, i, r) {
            for (var a, o = [], s = 0, l = e.length, u = null != t; l > s; s++)(a = e[s]) && (n && !n(a, i, r) || (o.push(a), u && t.push(s)));
            return o
        }

        function _e(e, t, n, i, r, a) {
            return i && !i[b] && (i = _e(i)), r && !r[b] && (r = _e(r, a)), se(function (a, o, s, l) {
                var u, d, c, f = [], p = [], h = o.length, v = a || we(t || "*", s.nodeType ? [s] : s, []), g = !e || !a && t ? v : be(v, f, e, s, l), m = n ? r || (a ? e : h || i) ? [] : o : g;
                if (n && n(g, m, s, l), i) {
                    u = be(m, p), i(u, [], s, l), d = u.length;
                    while (d--)(c = u[d]) && (m[p[d]] = !(g[p[d]] = c))
                }
                if (a) {
                    if (r || e) {
                        if (r) {
                            u = [], d = m.length;
                            while (d--)(c = m[d]) && u.push(g[d] = c);
                            r(null, m = [], u, l)
                        }
                        d = m.length;
                        while (d--)(c = m[d]) && (u = r ? N(a, c) : f[d]) > -1 && (a[u] = !(o[u] = c))
                    }
                } else m = be(m === o ? m.splice(h, m.length) : m), r ? r(null, o, m, l) : L.apply(o, m)
            })
        }

        function xe(e) {
            for (var t, n, r, a = e.length, o = i.relative[e[0].type], s = o || i.relative[" "], l = o ? 1 : 0, d = me(function (e) {
                return e === t
            }, s, !0), c = me(function (e) {
                return N(t, e) > -1
            }, s, !0), f = [function (e, n, i) {
                var r = !o && (i || n !== u) || ((t = n).nodeType ? d(e, n, i) : c(e, n, i));
                return t = null, r
            }]; a > l; l++)if (n = i.relative[e[l].type])f = [me(ye(f), n)]; else {
                if (n = i.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                    for (r = ++l; a > r; r++)if (i.relative[e[r].type])break;
                    return _e(l > 1 && ye(f), l > 1 && ge(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(U, "$1"), n, r > l && xe(e.slice(l, r)), a > r && xe(e = e.slice(r)), a > r && ge(e))
                }
                f.push(n)
            }
            return ye(f)
        }

        function Se(e, t) {
            var n = t.length > 0, r = e.length > 0, a = function (a, o, s, l, d) {
                var c, h, g, m = 0, y = "0", w = a && [], b = [], _ = u, S = a || r && i.find.TAG("*", d), T = x += null == _ ? 1 : Math.random() || .1, E = S.length;
                for (d && (u = o === p || o || d); y !== E && null != (c = S[y]); y++) {
                    if (r && c) {
                        h = 0, o || c.ownerDocument === p || (f(c), s = !v);
                        while (g = e[h++])if (g(c, o || p, s)) {
                            l.push(c);
                            break
                        }
                        d && (x = T)
                    }
                    n && ((c = !g && c) && m--, a && w.push(c))
                }
                if (m += y, n && y !== m) {
                    h = 0;
                    while (g = t[h++])g(w, b, o, s);
                    if (a) {
                        if (m > 0)while (y--)w[y] || b[y] || (b[y] = I.call(l));
                        b = be(b)
                    }
                    L.apply(l, b), d && !a && b.length > 0 && m + t.length > 1 && ae.uniqueSort(l)
                }
                return d && (x = T, u = _), w
            };
            return n ? se(a) : a
        }

        return s = ae.compile = function (e, t) {
            var n, i = [], r = [], a = j[e + " "];
            if (!a) {
                t || (t = o(e)), n = t.length;
                while (n--)a = xe(t[n]), a[b] ? i.push(a) : r.push(a);
                a = j(e, Se(r, i)), a.selector = e
            }
            return a
        }, l = ae.select = function (e, t, r, a) {
            var l, u, d, c, f, p = "function" == typeof e && e, h = !a && o(e = p.selector || e);
            if (r = r || [], 1 === h.length) {
                if (u = h[0] = h[0].slice(0), u.length > 2 && "ID" === (d = u[0]).type && n.getById && 9 === t.nodeType && v && i.relative[u[1].type]) {
                    if (t = (i.find.ID(d.matches[0].replace(te, ne), t) || [])[0], !t)return r;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                l = X.needsContext.test(e) ? 0 : u.length;
                while (l--) {
                    if (d = u[l], i.relative[c = d.type])break;
                    if ((f = i.find[c]) && (a = f(d.matches[0].replace(te, ne), Z.test(u[0].type) && he(t.parentNode) || t))) {
                        if (u.splice(l, 1), e = a.length && ge(u), !e)return L.apply(r, a), r;
                        break
                    }
                }
            }
            return (p || s(e, h))(a, t, !v, r, !t || Z.test(e) && he(t.parentNode) || t), r
        }, n.sortStable = b.split("").sort(C).join("") === b, n.detectDuplicates = !!c, f(), n.sortDetached = le(function (e) {
            return 1 & e.compareDocumentPosition(p.createElement("div"))
        }), le(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && le(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ue("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), le(function (e) {
            return null == e.getAttribute("disabled")
        }) || ue(D, function (e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), ae
    }(e);
    p.find = w, p.expr = w.selectors, p.expr[":"] = p.expr.pseudos, p.uniqueSort = p.unique = w.uniqueSort, p.text = w.getText, p.isXMLDoc = w.isXML, p.contains = w.contains;
    var b = function (e, t, n) {
        var i = [], r = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)if (1 === e.nodeType) {
            if (r && p(e).is(n))break;
            i.push(e)
        }
        return i
    }, _ = function (e, t) {
        for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
        return n
    }, x = p.expr.match.needsContext, S = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, T = /^.[^:#\[\.,]*$/;

    function E(e, t, n) {
        if (p.isFunction(t))return p.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType)return p.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (T.test(t))return p.filter(t, e, n);
            t = p.filter(t, e)
        }
        return p.grep(e, function (e) {
            return p.inArray(e, t) > -1 !== n
        })
    }

    p.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? p.find.matchesSelector(i, e) ? [i] : [] : p.find.matches(e, p.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, p.fn.extend({
        find: function (e) {
            var t, n = [], i = this, r = i.length;
            if ("string" != typeof e)return this.pushStack(p(e).filter(function () {
                for (t = 0; r > t; t++)if (p.contains(i[t], this))return !0
            }));
            for (t = 0; r > t; t++)p.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? p.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, filter: function (e) {
            return this.pushStack(E(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(E(this, e || [], !0))
        }, is: function (e) {
            return !!E(this, "string" == typeof e && x.test(e) ? p(e) : e || [], !1).length
        }
    });
    var j, C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = p.fn.init = function (e, t, n) {
        var r, a;
        if (!e)return this;
        if (n = n || j, "string" == typeof e) {
            if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : C.exec(e), !r || !r[1] && t)return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), S.test(r[1]) && p.isPlainObject(t))for (r in t)p.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            if (a = i.getElementById(r[2]), a && a.parentNode) {
                if (a.id !== r[2])return j.find(e);
                this.length = 1, this[0] = a
            }
            return this.context = i, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(p) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this))
    };
    A.prototype = p.fn, j = p(i);
    var k = /^(?:parents|prev(?:Until|All))/, P = {children: !0, contents: !0, next: !0, prev: !0};
    p.fn.extend({
        has: function (e) {
            var t, n = p(e, this), i = n.length;
            return this.filter(function () {
                for (t = 0; i > t; t++)if (p.contains(this, n[t]))return !0
            })
        }, closest: function (e, t) {
            for (var n, i = 0, r = this.length, a = [], o = x.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; r > i; i++)for (n = this[i]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && p.find.matchesSelector(n, e))) {
                a.push(n);
                break
            }
            return this.pushStack(a.length > 1 ? p.uniqueSort(a) : a)
        }, index: function (e) {
            return e ? "string" == typeof e ? p.inArray(this[0], p(e)) : p.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(p.uniqueSort(p.merge(this.get(), p(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function I(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    p.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return b(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return b(e, "parentNode", n)
        }, next: function (e) {
            return I(e, "nextSibling")
        }, prev: function (e) {
            return I(e, "previousSibling")
        }, nextAll: function (e) {
            return b(e, "nextSibling")
        }, prevAll: function (e) {
            return b(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return b(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return b(e, "previousSibling", n)
        }, siblings: function (e) {
            return _((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return _(e.firstChild)
        }, contents: function (e) {
            return p.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : p.merge([], e.childNodes)
        }
    }, function (e, t) {
        p.fn[e] = function (n, i) {
            var r = p.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = p.filter(i, r)), this.length > 1 && (P[e] || (r = p.uniqueSort(r)), k.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var O = /\S+/g;

    function L(e) {
        var t = {};
        return p.each(e.match(O) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    p.Callbacks = function (e) {
        e = "string" == typeof e ? L(e) : p.extend({}, e);
        var t, n, i, r, a = [], o = [], s = -1, l = function () {
            for (r = e.once, i = t = !0; o.length; s = -1) {
                n = o.shift();
                while (++s < a.length)a[s].apply(n[0], n[1]) === !1 && e.stopOnFalse && (s = a.length, n = !1)
            }
            e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
        }, u = {
            add: function () {
                return a && (n && !t && (s = a.length - 1, o.push(n)), function i(t) {
                    p.each(t, function (t, n) {
                        p.isFunction(n) ? e.unique && u.has(n) || a.push(n) : n && n.length && "string" !== p.type(n) && i(n)
                    })
                }(arguments), n && !t && l()), this
            }, remove: function () {
                return p.each(arguments, function (e, t) {
                    var n;
                    while ((n = p.inArray(t, a, n)) > -1)a.splice(n, 1), s >= n && s--
                }), this
            }, has: function (e) {
                return e ? p.inArray(e, a) > -1 : a.length > 0
            }, empty: function () {
                return a && (a = []), this
            }, disable: function () {
                return r = o = [], a = n = "", this
            }, disabled: function () {
                return !a
            }, lock: function () {
                return r = !0, n || u.disable(), this
            }, locked: function () {
                return !!r
            }, fireWith: function (e, n) {
                return r || (n = n || [], n = [e, n.slice ? n.slice() : n], o.push(n), t || l()), this
            }, fire: function () {
                return u.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return u
    }, p.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", p.Callbacks("once memory"), "resolved"], ["reject", "fail", p.Callbacks("once memory"), "rejected"], ["notify", "progress", p.Callbacks("memory")]], n = "pending", i = {
                state: function () {
                    return n
                }, always: function () {
                    return r.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return p.Deferred(function (n) {
                        p.each(t, function (t, a) {
                            var o = p.isFunction(e[t]) && e[t];
                            r[a[1]](function () {
                                var e = o && o.apply(this, arguments);
                                e && p.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this === i ? n.promise() : this, o ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? p.extend(e, i) : i
                }
            }, r = {};
            return i.pipe = i.then, p.each(t, function (e, a) {
                var o = a[2], s = a[3];
                i[a[1]] = o.add, s && o.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[a[0]] = function () {
                    return r[a[0] + "With"](this === r ? i : this, arguments), this
                }, r[a[0] + "With"] = o.fireWith
            }), i.promise(r), e && e.call(r, r), r
        }, when: function (e) {
            var t = 0, n = r.call(arguments), i = n.length, a = 1 !== i || e && p.isFunction(e.promise) ? i : 0, o = 1 === a ? e : p.Deferred(), s = function (e, t, n) {
                return function (i) {
                    t[e] = this, n[e] = arguments.length > 1 ? r.call(arguments) : i, n === l ? o.notifyWith(t, n) : --a || o.resolveWith(t, n)
                }
            }, l, u, d;
            if (i > 1)for (l = new Array(i), u = new Array(i), d = new Array(i); i > t; t++)n[t] && p.isFunction(n[t].promise) ? n[t].promise().progress(s(t, u, l)).done(s(t, d, n)).fail(o.reject) : --a;
            return a || o.resolveWith(d, n), o.promise()
        }
    });
    var F;
    p.fn.ready = function (e) {
        return p.ready.promise().done(e), this
    }, p.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? p.readyWait++ : p.ready(!0)
        }, ready: function (e) {
            (e === !0 ? --p.readyWait : p.isReady) || (p.isReady = !0, e !== !0 && --p.readyWait > 0 || (F.resolveWith(i, [p]), p.fn.triggerHandler && (p(i).triggerHandler("ready"), p(i).off("ready"))))
        }
    });
    function N() {
        i.addEventListener ? (i.removeEventListener("DOMContentLoaded", D), e.removeEventListener("load", D)) : (i.detachEvent("onreadystatechange", D), e.detachEvent("onload", D))
    }

    function D() {
        (i.addEventListener || "load" === e.event.type || "complete" === i.readyState) && (N(), p.ready())
    }

    p.ready.promise = function (t) {
        if (!F)if (F = p.Deferred(), "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll)e.setTimeout(p.ready); else if (i.addEventListener)i.addEventListener("DOMContentLoaded", D), e.addEventListener("load", D); else {
            i.attachEvent("onreadystatechange", D), e.attachEvent("onload", D);
            var n = !1;
            try {
                n = null == e.frameElement && i.documentElement
            } catch (r) {
            }
            n && n.doScroll && !function a() {
                if (!p.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return e.setTimeout(a, 50)
                    }
                    N(), p.ready()
                }
            }()
        }
        return F.promise(t)
    }, p.ready.promise();
    var B;
    for (B in p(c))break;
    c.ownFirst = "0" === B, c.inlineBlockNeedsLayout = !1, p(function () {
        var e, t, n, r;
        n = i.getElementsByTagName("body")[0], n && n.style && (t = i.createElement("div"), r = i.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", c.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
    }), function () {
        var e = i.createElement("div");
        c.deleteExpando = !0;
        try {
            delete e.test
        } catch (t) {
            c.deleteExpando = !1
        }
        e = null
    }();
    var H = function (e) {
        var t = p.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    }, V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, M = /([A-Z])/g;

    function R(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(M, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : V.test(n) ? p.parseJSON(n) : n
                } catch (r) {
                }
                p.data(e, t, n)
            } else n = void 0;
        }
        return n
    }

    function U(e) {
        var t;
        for (t in e)if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
        return !0
    }

    function W(e, t, i, r) {
        if (H(e)) {
            var a, o, s = p.expando, l = e.nodeType, u = l ? p.cache : e, d = l ? e[s] : e[s] && s;
            if (d && u[d] && (r || u[d].data) || void 0 !== i || "string" != typeof t)return d || (d = l ? e[s] = n.pop() || p.guid++ : s), u[d] || (u[d] = l ? {} : {toJSON: p.noop}), "object" != typeof t && "function" != typeof t || (r ? u[d] = p.extend(u[d], t) : u[d].data = p.extend(u[d].data, t)), o = u[d], r || (o.data || (o.data = {}), o = o.data), void 0 !== i && (o[p.camelCase(t)] = i), "string" == typeof t ? (a = o[t], null == a && (a = o[p.camelCase(t)])) : a = o, a
        }
    }

    function q(e, t, n) {
        if (H(e)) {
            var i, r, a = e.nodeType, o = a ? p.cache : e, s = a ? e[p.expando] : p.expando;
            if (o[s]) {
                if (t && (i = n ? o[s] : o[s].data)) {
                    p.isArray(t) ? t = t.concat(p.map(t, p.camelCase)) : t in i ? t = [t] : (t = p.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                    while (r--)delete i[t[r]];
                    if (n ? !U(i) : !p.isEmptyObject(i))return
                }
                (n || (delete o[s].data, U(o[s]))) && (a ? p.cleanData([e], !0) : c.deleteExpando || o != o.window ? delete o[s] : o[s] = void 0)
            }
        }
    }

    p.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando], !!e && !U(e)
        },
        data: function (e, t, n) {
            return W(e, t, n)
        },
        removeData: function (e, t) {
            return q(e, t)
        },
        _data: function (e, t, n) {
            return W(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return q(e, t, !0)
        }
    }), p.fn.extend({
        data: function (e, t) {
            var n, i, r, a = this[0], o = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (r = p.data(a), 1 === a.nodeType && !p._data(a, "parsedAttrs"))) {
                    n = o.length;
                    while (n--)o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = p.camelCase(i.slice(5)), R(a, i, r[i])));
                    p._data(a, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                p.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                p.data(this, e, t)
            }) : a ? R(a, e, p.data(a, e)) : void 0
        }, removeData: function (e) {
            return this.each(function () {
                p.removeData(this, e)
            })
        }
    }), p.extend({
        queue: function (e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = p._data(e, t), n && (!i || p.isArray(n) ? i = p._data(e, t, p.makeArray(n)) : i.push(n)), i || []) : void 0
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = p.queue(e, t), i = n.length, r = n.shift(), a = p._queueHooks(e, t), o = function () {
                p.dequeue(e, t)
            };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, o, a)), !i && a && a.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return p._data(e, n) || p._data(e, n, {
                    empty: p.Callbacks("once memory").add(function () {
                        p._removeData(e, t + "queue"), p._removeData(e, n)
                    })
                })
        }
    }), p.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? p.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = p.queue(this, e, t);
                p._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                p.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, i = 1, r = p.Deferred(), a = this, o = this.length, s = function () {
                --i || r.resolveWith(a, [a])
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (o--)n = p._data(a[o], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    }), function () {
        var e;
        c.shrinkWrapBlocks = function () {
            if (null != e)return e;
            e = !1;
            var t, n, r;
            return n = i.getElementsByTagName("body")[0], n && n.style ? (t = i.createElement("div"), r = i.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(i.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
        }
    }();
    var z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, $ = new RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i"), J = ["Top", "Right", "Bottom", "Left"], X = function (e, t) {
        return e = t || e, "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
    };

    function Q(e, t, n, i) {
        var r, a = 1, o = 20, s = i ? function () {
            return i.cur()
        } : function () {
            return p.css(e, t, "")
        }, l = s(), u = n && n[3] || (p.cssNumber[t] ? "" : "px"), d = (p.cssNumber[t] || "px" !== u && +l) && $.exec(p.css(e, t));
        if (d && d[3] !== u) {
            u = u || d[3], n = n || [], d = +l || 1;
            do a = a || ".5", d /= a, p.style(e, t, d + u); while (a !== (a = s() / l) && 1 !== a && --o)
        }
        return n && (d = +d || +l || 0, r = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = d, i.end = r)), r
    }

    var G = function (e, t, n, i, r, a, o) {
        var s = 0, l = e.length, u = null == n;
        if ("object" === p.type(n)) {
            r = !0;
            for (s in n)G(e, t, s, n[s], !0, a, o)
        } else if (void 0 !== i && (r = !0, p.isFunction(i) || (o = !0), u && (o ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                return u.call(p(e), n)
            })), t))for (; l > s; s++)t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : a
    }, Y = /^(?:checkbox|radio)$/i, K = /<([\w:-]+)/, Z = /^$|\/(?:java|ecma)script/i, ee = /^\s+/, te = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ne(e) {
        var t = te.split("|"), n = e.createDocumentFragment();
        if (n.createElement)while (t.length)n.createElement(t.pop());
        return n
    }

    !function () {
        var e = i.createElement("div"), t = i.createDocumentFragment(), n = i.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c.leadingWhitespace = 3 === e.firstChild.nodeType, c.tbody = !e.getElementsByTagName("tbody").length, c.htmlSerialize = !!e.getElementsByTagName("link").length, c.html5Clone = "<:nav></:nav>" !== i.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), c.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", c.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = i.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), c.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, c.noCloneEvent = !!e.addEventListener, e[p.expando] = 1, c.attributes = !e.getAttribute(p.expando)
    }();
    var ie = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: c.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    ie.optgroup = ie.option, ie.tbody = ie.tfoot = ie.colgroup = ie.caption = ie.thead, ie.th = ie.td;
    function re(e, t) {
        var n, i, r = 0, a = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!a)for (a = [], n = e.childNodes || e; null != (i = n[r]); r++)!t || p.nodeName(i, t) ? a.push(i) : p.merge(a, re(i, t));
        return void 0 === t || t && p.nodeName(e, t) ? p.merge([e], a) : a
    }

    function ae(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++)p._data(n, "globalEval", !t || p._data(t[i], "globalEval"))
    }

    var oe = /<|&#?\w+;/, se = /<tbody/i;

    function le(e) {
        Y.test(e.type) && (e.defaultChecked = e.checked)
    }

    function ue(e, t, n, i, r) {
        for (var a, o, s, l, u, d, f, h = e.length, v = ne(t), g = [], m = 0; h > m; m++)if (o = e[m], o || 0 === o)if ("object" === p.type(o))p.merge(g, o.nodeType ? [o] : o); else if (oe.test(o)) {
            l = l || v.appendChild(t.createElement("div")), u = (K.exec(o) || ["", ""])[1].toLowerCase(), f = ie[u] || ie._default, l.innerHTML = f[1] + p.htmlPrefilter(o) + f[2], a = f[0];
            while (a--)l = l.lastChild;
            if (!c.leadingWhitespace && ee.test(o) && g.push(t.createTextNode(ee.exec(o)[0])), !c.tbody) {
                o = "table" !== u || se.test(o) ? "<table>" !== f[1] || se.test(o) ? 0 : l : l.firstChild, a = o && o.childNodes.length;
                while (a--)p.nodeName(d = o.childNodes[a], "tbody") && !d.childNodes.length && o.removeChild(d)
            }
            p.merge(g, l.childNodes), l.textContent = "";
            while (l.firstChild)l.removeChild(l.firstChild);
            l = v.lastChild
        } else g.push(t.createTextNode(o));
        l && v.removeChild(l), c.appendChecked || p.grep(re(g, "input"), le), m = 0;
        while (o = g[m++])if (i && p.inArray(o, i) > -1)r && r.push(o); else if (s = p.contains(o.ownerDocument, o), l = re(v.appendChild(o), "script"), s && ae(l), n) {
            a = 0;
            while (o = l[a++])Z.test(o.type || "") && n.push(o)
        }
        return l = null, v
    }

    !function () {
        var t, n, r = i.createElement("div");
        for (t in{
            submit: !0,
            change: !0,
            focusin: !0
        })n = "on" + t, (c[t] = n in e) || (r.setAttribute(n, "t"), c[t] = r.attributes[n].expando === !1);
        r = null
    }();
    var de = /^(?:input|select|textarea)$/i, ce = /^key/, fe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, pe = /^(?:focusinfocus|focusoutblur)$/, he = /^([^.]*)(?:\.(.+)|)/;

    function ve() {
        return !0
    }

    function ge() {
        return !1
    }

    function me() {
        try {
            return i.activeElement
        } catch (e) {
        }
    }

    function ye(e, t, n, i, r, a) {
        var o, s;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (s in t)ye(e, s, n, i, t[s], a);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1)r = ge; else if (!r)return e;
        return 1 === a && (o = r, r = function (e) {
            return p().off(e), o.apply(this, arguments)
        }, r.guid = o.guid || (o.guid = p.guid++)), e.each(function () {
            p.event.add(this, t, r, i, n)
        })
    }

    p.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var a, o, s, l, u, d, c, f, h, v, g, m = p._data(e);
            if (m) {
                n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = p.guid++), (o = m.events) || (o = m.events = {}), (d = m.handle) || (d = m.handle = function (e) {
                    return "undefined" == typeof p || e && p.event.triggered === e.type ? void 0 : p.event.dispatch.apply(d.elem, arguments)
                }, d.elem = e), t = (t || "").match(O) || [""], s = t.length;
                while (s--)a = he.exec(t[s]) || [], h = g = a[1], v = (a[2] || "").split(".").sort(), h && (u = p.event.special[h] || {}, h = (r ? u.delegateType : u.bindType) || h, u = p.event.special[h] || {}, c = p.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && p.expr.match.needsContext.test(r),
                    namespace: v.join(".")
                }, l), (f = o[h]) || (f = o[h] = [], f.delegateCount = 0, u.setup && u.setup.call(e, i, v, d) !== !1 || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), p.event.global[h] = !0);
                e = null
            }
        },
        remove: function (e, t, n, i, r) {
            var a, o, s, l, u, d, c, f, h, v, g, m = p.hasData(e) && p._data(e);
            if (m && (d = m.events)) {
                t = (t || "").match(O) || [""], u = t.length;
                while (u--)if (s = he.exec(t[u]) || [], h = g = s[1], v = (s[2] || "").split(".").sort(), h) {
                    c = p.event.special[h] || {}, h = (i ? c.delegateType : c.bindType) || h, f = d[h] || [], s = s[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = f.length;
                    while (a--)o = f[a], !r && g !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (f.splice(a, 1), o.selector && f.delegateCount--, c.remove && c.remove.call(e, o));
                    l && !f.length && (c.teardown && c.teardown.call(e, v, m.handle) !== !1 || p.removeEvent(e, h, m.handle), delete d[h])
                } else for (h in d)p.event.remove(e, h + t[u], n, i, !0);
                p.isEmptyObject(d) && (delete m.handle, p._removeData(e, "events"))
            }
        },
        trigger: function (t, n, r, a) {
            var o, s, l, u, c, f, h, v = [r || i], g = d.call(t, "type") ? t.type : t, m = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (l = f = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !pe.test(g + p.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), s = g.indexOf(":") < 0 && "on" + g, t = t[p.expando] ? t : new p.Event(g, "object" == typeof t && t), t.isTrigger = a ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : p.makeArray(n, [t]), c = p.event.special[g] || {}, a || !c.trigger || c.trigger.apply(r, n) !== !1)) {
                if (!a && !c.noBubble && !p.isWindow(r)) {
                    for (u = c.delegateType || g, pe.test(u + g) || (l = l.parentNode); l; l = l.parentNode)v.push(l), f = l;
                    f === (r.ownerDocument || i) && v.push(f.defaultView || f.parentWindow || e)
                }
                h = 0;
                while ((l = v[h++]) && !t.isPropagationStopped())t.type = h > 1 ? u : c.bindType || g, o = (p._data(l, "events") || {})[t.type] && p._data(l, "handle"), o && o.apply(l, n), o = s && l[s], o && o.apply && H(l) && (t.result = o.apply(l, n), t.result === !1 && t.preventDefault());
                if (t.type = g, !a && !t.isDefaultPrevented() && (!c._default || c._default.apply(v.pop(), n) === !1) && H(r) && s && r[g] && !p.isWindow(r)) {
                    f = r[s], f && (r[s] = null), p.event.triggered = g;
                    try {
                        r[g]()
                    } catch (y) {
                    }
                    p.event.triggered = void 0, f && (r[s] = f)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = p.event.fix(e);
            var t, n, i, a, o, s = [], l = r.call(arguments), u = (p._data(this, "events") || {})[e.type] || [], d = p.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, e) !== !1) {
                s = p.event.handlers.call(this, e, u), t = 0;
                while ((a = s[t++]) && !e.isPropagationStopped()) {
                    e.currentTarget = a.elem, n = 0;
                    while ((o = a.handlers[n++]) && !e.isImmediatePropagationStopped())e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, i = ((p.event.special[o.origType] || {}).handle || o.handler).apply(a.elem, l), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return d.postDispatch && d.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, a, o = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                for (i = [], n = 0; s > n; n++)a = t[n], r = a.selector + " ", void 0 === i[r] && (i[r] = a.needsContext ? p(r, this).index(l) > -1 : p.find(r, this, null, [l]).length), i[r] && i.push(a);
                i.length && o.push({elem: l, handlers: i})
            }
            return s < t.length && o.push({elem: this, handlers: t.slice(s)}), o
        },
        fix: function (e) {
            if (e[p.expando])return e;
            var t, n, r, a = e.type, o = e, s = this.fixHooks[a];
            s || (this.fixHooks[a] = s = fe.test(a) ? this.mouseHooks : ce.test(a) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new p.Event(o), t = r.length;
            while (t--)n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || i), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, a, o = t.button, s = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || i, a = r.documentElement, n = r.body, e.pageX = t.clientX + (a && a.scrollLeft || n && n.scrollLeft || 0) - (a && a.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (a && a.scrollTop || n && n.scrollTop || 0) - (a && a.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== me() && this.focus)try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === me() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return p.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (e) {
                    return p.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n) {
            var i = p.extend(new p.Event, n, {type: e, isSimulated: !0});
            p.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
        }
    }, p.removeEvent = i.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function (e, t, n) {
        var i = "on" + t;
        e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
    }, p.Event = function (e, t) {
        return this instanceof p.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? ve : ge) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(e, t)
    }, p.Event.prototype = {
        constructor: p.Event,
        isDefaultPrevented: ge,
        isPropagationStopped: ge,
        isImmediatePropagationStopped: ge,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = ve, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = ve, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ve, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        p.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = this, r = e.relatedTarget, a = e.handleObj;
                return r && (r === i || p.contains(i, r)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), c.submit || (p.event.special.submit = {
        setup: function () {
            return p.nodeName(this, "form") ? !1 : void p.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target, n = p.nodeName(t, "input") || p.nodeName(t, "button") ? p.prop(t, "form") : void 0;
                n && !p._data(n, "submit") && (p.event.add(n, "submit._submit", function (e) {
                    e._submitBubble = !0
                }), p._data(n, "submit", !0))
            })
        }, postDispatch: function (e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && p.event.simulate("submit", this.parentNode, e))
        }, teardown: function () {
            return p.nodeName(this, "form") ? !1 : void p.event.remove(this, "._submit")
        }
    }), c.change || (p.event.special.change = {
        setup: function () {
            return de.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (p.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), p.event.add(this, "click._change", function (e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), p.event.simulate("change", this, e)
            })), !1) : void p.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                de.test(t.nodeName) && !p._data(t, "change") && (p.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || p.event.simulate("change", this.parentNode, e)
                }), p._data(t, "change", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return p.event.remove(this, "._change"), !de.test(this.nodeName)
        }
    }), c.focusin || p.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            p.event.simulate(t, e.target, p.event.fix(e))
        };
        p.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this, r = p._data(i, t);
                r || i.addEventListener(e, n, !0), p._data(i, t, (r || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, r = p._data(i, t) - 1;
                r ? p._data(i, t, r) : (i.removeEventListener(e, n, !0), p._removeData(i, t))
            }
        }
    }), p.fn.extend({
        on: function (e, t, n, i) {
            return ye(this, e, t, n, i)
        }, one: function (e, t, n, i) {
            return ye(this, e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)return i = e.handleObj, p(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e)this.off(r, t, e[r]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = ge), this.each(function () {
                p.event.remove(this, e, n, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                p.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            return n ? p.event.trigger(e, t, n, !0) : void 0
        }
    });
    var we = / jQuery\d+="(?:null|\d+)"/g, be = new RegExp("<(?:" + te + ")[\\s/>]", "i"), _e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, xe = /<script|<style|<link/i, Se = /checked\s*(?:[^=]|=\s*.checked.)/i, Te = /^true\/(.*)/, Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, je = ne(i), Ce = je.appendChild(i.createElement("div"));

    function Ae(e, t) {
        return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function ke(e) {
        return e.type = (null !== p.find.attr(e, "type")) + "/" + e.type, e
    }

    function Pe(e) {
        var t = Te.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Ie(e, t) {
        if (1 === t.nodeType && p.hasData(e)) {
            var n, i, r, a = p._data(e), o = p._data(t, a), s = a.events;
            if (s) {
                delete o.handle, o.events = {};
                for (n in s)for (i = 0, r = s[n].length; r > i; i++)p.event.add(t, n, s[n][i])
            }
            o.data && (o.data = p.extend({}, o.data))
        }
    }

    function Oe(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !c.noCloneEvent && t[p.expando]) {
                r = p._data(t);
                for (i in r.events)p.removeEvent(t, i, r.handle);
                t.removeAttribute(p.expando)
            }
            "script" === n && t.text !== e.text ? (ke(t).text = e.text, Pe(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), c.html5Clone && e.innerHTML && !p.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Y.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function Le(e, t, n, i) {
        t = a.apply([], t);
        var r, o, s, l, u, d, f = 0, h = e.length, v = h - 1, g = t[0], m = p.isFunction(g);
        if (m || h > 1 && "string" == typeof g && !c.checkClone && Se.test(g))return e.each(function (r) {
            var a = e.eq(r);
            m && (t[0] = g.call(this, r, a.html())), Le(a, t, n, i)
        });
        if (h && (d = ue(t, e[0].ownerDocument, !1, e, i), r = d.firstChild, 1 === d.childNodes.length && (d = r), r || i)) {
            for (l = p.map(re(d, "script"), ke), s = l.length; h > f; f++)o = d, f !== v && (o = p.clone(o, !0, !0), s && p.merge(l, re(o, "script"))), n.call(e[f], o, f);
            if (s)for (u = l[l.length - 1].ownerDocument, p.map(l, Pe), f = 0; s > f; f++)o = l[f], Z.test(o.type || "") && !p._data(o, "globalEval") && p.contains(u, o) && (o.src ? p._evalUrl && p._evalUrl(o.src) : p.globalEval((o.text || o.textContent || o.innerHTML || "").replace(Ee, "")));
            d = r = null
        }
        return e
    }

    function Fe(e, t, n) {
        for (var i, r = t ? p.filter(t, e) : e, a = 0; null != (i = r[a]); a++)n || 1 !== i.nodeType || p.cleanData(re(i)), i.parentNode && (n && p.contains(i.ownerDocument, i) && ae(re(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    p.extend({
        htmlPrefilter: function (e) {
            return e.replace(_e, "<$1></$2>")
        }, clone: function (e, t, n) {
            var i, r, a, o, s, l = p.contains(e.ownerDocument, e);
            if (c.html5Clone || p.isXMLDoc(e) || !be.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (Ce.innerHTML = e.outerHTML, Ce.removeChild(a = Ce.firstChild)), !(c.noCloneEvent && c.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e)))for (i = re(a), s = re(e), o = 0; null != (r = s[o]); ++o)i[o] && Oe(r, i[o]);
            if (t)if (n)for (s = s || re(e), i = i || re(a), o = 0; null != (r = s[o]); o++)Ie(r, i[o]); else Ie(e, a);
            return i = re(a, "script"), i.length > 0 && ae(i, !l && re(e, "script")), i = s = r = null, a
        }, cleanData: function (e, t) {
            for (var i, r, a, o, s = 0, l = p.expando, u = p.cache, d = c.attributes, f = p.event.special; null != (i = e[s]); s++)if ((t || H(i)) && (a = i[l], o = a && u[a])) {
                if (o.events)for (r in o.events)f[r] ? p.event.remove(i, r) : p.removeEvent(i, r, o.handle);
                u[a] && (delete u[a], d || "undefined" == typeof i.removeAttribute ? i[l] = void 0 : i.removeAttribute(l), n.push(a))
            }
        }
    }), p.fn.extend({
        domManip: Le, detach: function (e) {
            return Fe(this, e, !0)
        }, remove: function (e) {
            return Fe(this, e)
        }, text: function (e) {
            return G(this, function (e) {
                return void 0 === e ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return Le(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ae(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return Le(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ae(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return Le(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return Le(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                1 === e.nodeType && p.cleanData(re(e, !1));
                while (e.firstChild)e.removeChild(e.firstChild);
                e.options && p.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return p.clone(this, e, t)
            })
        }, html: function (e) {
            return G(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e)return 1 === t.nodeType ? t.innerHTML.replace(we, "") : void 0;
                if ("string" == typeof e && !xe.test(e) && (c.htmlSerialize || !be.test(e)) && (c.leadingWhitespace || !ee.test(e)) && !ie[(K.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = p.htmlPrefilter(e);
                    try {
                        for (; i > n; n++)t = this[n] || {}, 1 === t.nodeType && (p.cleanData(re(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return Le(this, arguments, function (t) {
                var n = this.parentNode;
                p.inArray(this, e) < 0 && (p.cleanData(re(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        p.fn[e] = function (e) {
            for (var n, i = 0, r = [], a = p(e), s = a.length - 1; s >= i; i++)n = i === s ? this : this.clone(!0), p(a[i])[t](n), o.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ne, De = {HTML: "block", BODY: "block"};

    function Be(e, t) {
        var n = p(t.createElement(e)).appendTo(t.body), i = p.css(n[0], "display");
        return n.detach(), i
    }

    function He(e) {
        var t = i, n = De[e];
        return n || (n = Be(e, t), "none" !== n && n || (Ne = (Ne || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ne[0].contentWindow || Ne[0].contentDocument).document, t.write(), t.close(), n = Be(e, t), Ne.detach()), De[e] = n), n
    }

    var Ve = /^margin/, Me = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i"), Re = function (e, t, n, i) {
        var r, a, o = {};
        for (a in t)o[a] = e.style[a], e.style[a] = t[a];
        r = n.apply(e, i || []);
        for (a in t)e.style[a] = o[a];
        return r
    }, Ue = i.documentElement;
    !function () {
        var t, n, r, a, o, s, l = i.createElement("div"), u = i.createElement("div");
        if (u.style) {
            u.style.cssText = "float:left;opacity:.5", c.opacity = "0.5" === u.style.opacity, c.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = "content-box" === u.style.backgroundClip, l = i.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), c.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, p.extend(c, {
                reliableHiddenOffsets: function () {
                    return null == t && d(), a
                }, boxSizingReliable: function () {
                    return null == t && d(), r
                }, pixelMarginRight: function () {
                    return null == t && d(), n
                }, pixelPosition: function () {
                    return null == t && d(), t
                }, reliableMarginRight: function () {
                    return null == t && d(), o
                }, reliableMarginLeft: function () {
                    return null == t && d(), s
                }
            });
            function d() {
                var d, c, f = i.documentElement;
                f.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = r = s = !1, n = o = !0, e.getComputedStyle && (c = e.getComputedStyle(u), t = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, r = "4px" === (c || {width: "4px"}).width, u.style.marginRight = "50%", n = "4px" === (c || {marginRight: "4px"}).marginRight, d = u.appendChild(i.createElement("div")), d.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", d.style.marginRight = d.style.width = "0", u.style.width = "1px", o = !parseFloat((e.getComputedStyle(d) || {}).marginRight), u.removeChild(d)), u.style.display = "none", a = 0 === u.getClientRects().length, a && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", d = u.getElementsByTagName("td"), d[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === d[0].offsetHeight, a && (d[0].style.display = "", d[1].style.display = "none", a = 0 === d[0].offsetHeight)), f.removeChild(l)
            }
        }
    }();
    var We, qe, ze = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (We = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, qe = function (e, t, n) {
        var i, r, a, o, s = e.style;
        return n = n || We(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== o && void 0 !== o || p.contains(e.ownerDocument, e) || (o = p.style(e, t)), n && !c.pixelMarginRight() && Me.test(o) && Ve.test(t) && (i = s.width, r = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = r, s.maxWidth = a), void 0 === o ? o : o + ""
    }) : Ue.currentStyle && (We = function (e) {
        return e.currentStyle
    }, qe = function (e, t, n) {
        var i, r, a, o, s = e.style;
        return n = n || We(e), o = n ? n[t] : void 0, null == o && s && s[t] && (o = s[t]), Me.test(o) && !ze.test(t) && (i = s.left, r = e.runtimeStyle, a = r && r.left, a && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : o, o = s.pixelLeft + "px", s.left = i, a && (r.left = a)), void 0 === o ? o : o + "" || "auto"
    });
    function $e(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    var Je = /alpha\([^)]*\)/i, Xe = /opacity\s*=\s*([^)]*)/i, Qe = /^(none|table(?!-c[ea]).+)/, Ge = new RegExp("^(" + z + ")(.*)$", "i"), Ye = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ke = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ze = ["Webkit", "O", "Moz", "ms"], et = i.createElement("div").style;

    function tt(e) {
        if (e in et)return e;
        var t = e.charAt(0).toUpperCase() + e.slice(1), n = Ze.length;
        while (n--)if (e = Ze[n] + t, e in et)return e
    }

    function nt(e, t) {
        for (var n, i, r, a = [], o = 0, s = e.length; s > o; o++)i = e[o], i.style && (a[o] = p._data(i, "olddisplay"), n = i.style.display, t ? (a[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && X(i) && (a[o] = p._data(i, "olddisplay", He(i.nodeName)))) : (r = X(i), (n && "none" !== n || !r) && p._data(i, "olddisplay", r ? n : p.css(i, "display"))));
        for (o = 0; s > o; o++)i = e[o], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[o] || "" : "none"));
        return e
    }

    function it(e, t, n) {
        var i = Ge.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function rt(e, t, n, i, r) {
        for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > a; a += 2)"margin" === n && (o += p.css(e, n + J[a], !0, r)), i ? ("content" === n && (o -= p.css(e, "padding" + J[a], !0, r)), "margin" !== n && (o -= p.css(e, "border" + J[a] + "Width", !0, r))) : (o += p.css(e, "padding" + J[a], !0, r), "padding" !== n && (o += p.css(e, "border" + J[a] + "Width", !0, r)));
        return o
    }

    function at(e, t, n) {
        var i = !0, r = "width" === t ? e.offsetWidth : e.offsetHeight, a = We(e), o = c.boxSizing && "border-box" === p.css(e, "boxSizing", !1, a);
        if (0 >= r || null == r) {
            if (r = qe(e, t, a), (0 > r || null == r) && (r = e.style[t]), Me.test(r))return r;
            i = o && (c.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + rt(e, t, n || (o ? "border" : "content"), i, a) + "px"
    }

    p.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = qe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": c.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, o, s = p.camelCase(t), l = e.style;
                if (t = p.cssProps[s] || (p.cssProps[s] = tt(s) || s), o = p.cssHooks[t] || p.cssHooks[s], void 0 === n)return o && "get"in o && void 0 !== (r = o.get(e, !1, i)) ? r : l[t];
                if (a = typeof n, "string" === a && (r = $.exec(n)) && r[1] && (n = Q(e, t, r), a = "number"), null != n && n === n && ("number" === a && (n += r && r[3] || (p.cssNumber[s] ? "" : "px")), c.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(o && "set"in o && void 0 === (n = o.set(e, n, i)))))try {
                    l[t] = n
                } catch (u) {
                }
            }
        },
        css: function (e, t, n, i) {
            var r, a, o, s = p.camelCase(t);
            return t = p.cssProps[s] || (p.cssProps[s] = tt(s) || s), o = p.cssHooks[t] || p.cssHooks[s], o && "get"in o && (a = o.get(e, !0, n)), void 0 === a && (a = qe(e, t, i)), "normal" === a && t in Ke && (a = Ke[t]), "" === n || n ? (r = parseFloat(a), n === !0 || isFinite(r) ? r || 0 : a) : a
        }
    }), p.each(["height", "width"], function (e, t) {
        p.cssHooks[t] = {
            get: function (e, n, i) {
                return n ? Qe.test(p.css(e, "display")) && 0 === e.offsetWidth ? Re(e, Ye, function () {
                    return at(e, t, i)
                }) : at(e, t, i) : void 0
            }, set: function (e, n, i) {
                var r = i && We(e);
                return it(e, n, i ? rt(e, t, i, c.boxSizing && "border-box" === p.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), c.opacity || (p.cssHooks.opacity = {
        get: function (e, t) {
            return Xe.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, i = e.currentStyle, r = p.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", a = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === p.trim(a.replace(Je, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = Je.test(a) ? a.replace(Je, r) : a + " " + r)
        }
    }), p.cssHooks.marginRight = $e(c.reliableMarginRight, function (e, t) {
        return t ? Re(e, {display: "inline-block"}, qe, [e, "marginRight"]) : void 0
    }), p.cssHooks.marginLeft = $e(c.reliableMarginLeft, function (e, t) {
        return t ? (parseFloat(qe(e, "marginLeft")) || (p.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - Re(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), p.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        p.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)r[e + J[i] + t] = a[i] || a[i - 2] || a[0];
                return r
            }
        }, Ve.test(e) || (p.cssHooks[e + t].set = it)
    }), p.fn.extend({
        css: function (e, t) {
            return G(this, function (e, t, n) {
                var i, r, a = {}, o = 0;
                if (p.isArray(t)) {
                    for (i = We(e), r = t.length; r > o; o++)a[t[o]] = p.css(e, t[o], !1, i);
                    return a
                }
                return void 0 !== n ? p.style(e, t, n) : p.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return nt(this, !0)
        }, hide: function () {
            return nt(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                X(this) ? p(this).show() : p(this).hide()
            })
        }
    });
    function ot(e, t, n, i, r) {
        return new ot.prototype.init(e, t, n, i, r)
    }

    p.Tween = ot, ot.prototype = {
        constructor: ot, init: function (e, t, n, i, r, a) {
            this.elem = e, this.prop = n, this.easing = r || p.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (p.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = ot.propHooks[this.prop];
            return e && e.get ? e.get(this) : ot.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = ot.propHooks[this.prop];
            return this.options.duration ? this.pos = t = p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ot.propHooks._default.set(this), this
        }
    }, ot.prototype.init.prototype = ot.prototype, ot.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = p.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            }, set: function (e) {
                p.fx.step[e.prop] ? p.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[p.cssProps[e.prop]] && !p.cssHooks[e.prop] ? e.elem[e.prop] = e.now : p.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, p.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, p.fx = ot.prototype.init, p.fx.step = {};
    var st, lt, ut = /^(?:toggle|show|hide)$/, dt = /queueHooks$/;

    function ct() {
        return e.setTimeout(function () {
            st = void 0
        }), st = p.now()
    }

    function ft(e, t) {
        var n, i = {height: e}, r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)n = J[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function pt(e, t, n) {
        for (var i, r = (gt.tweeners[t] || []).concat(gt.tweeners["*"]), a = 0, o = r.length; o > a; a++)if (i = r[a].call(n, t, e))return i
    }

    function ht(e, t, n) {
        var i, r, a, o, s, l, u, d, f = this, h = {}, v = e.style, g = e.nodeType && X(e), m = p._data(e, "fxshow");
        n.queue || (s = p._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, f.always(function () {
            f.always(function () {
                s.unqueued--, p.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [v.overflow, v.overflowX, v.overflowY], u = p.css(e, "display"), d = "none" === u ? p._data(e, "olddisplay") || He(e.nodeName) : u, "inline" === d && "none" === p.css(e, "float") && (c.inlineBlockNeedsLayout && "inline" !== He(e.nodeName) ? v.zoom = 1 : v.display = "inline-block")), n.overflow && (v.overflow = "hidden", c.shrinkWrapBlocks() || f.always(function () {
            v.overflow = n.overflow[0], v.overflowX = n.overflow[1], v.overflowY = n.overflow[2]
        }));
        for (i in t)if (r = t[i], ut.exec(r)) {
            if (delete t[i], a = a || "toggle" === r, r === (g ? "hide" : "show")) {
                if ("show" !== r || !m || void 0 === m[i])continue;
                g = !0
            }
            h[i] = m && m[i] || p.style(e, i)
        } else u = void 0;
        if (p.isEmptyObject(h))"inline" === ("none" === u ? He(e.nodeName) : u) && (v.display = u); else {
            m ? "hidden"in m && (g = m.hidden) : m = p._data(e, "fxshow", {}), a && (m.hidden = !g), g ? p(e).show() : f.done(function () {
                p(e).hide()
            }), f.done(function () {
                var t;
                p._removeData(e, "fxshow");
                for (t in h)p.style(e, t, h[t])
            });
            for (i in h)o = pt(g ? m[i] : 0, i, f), i in m || (m[i] = o.start, g && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function vt(e, t) {
        var n, i, r, a, o;
        for (n in e)if (i = p.camelCase(n), r = t[i], a = e[n], p.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), o = p.cssHooks[i], o && "expand"in o) {
            a = o.expand(a), delete e[i];
            for (n in a)n in e || (e[n] = a[n], t[n] = r)
        } else t[i] = r
    }

    function gt(e, t, n) {
        var i, r, a = 0, o = gt.prefilters.length, s = p.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (r)return !1;
            for (var t = st || ct(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, a = 1 - i, o = 0, l = u.tweens.length; l > o; o++)u.tweens[o].run(a);
            return s.notifyWith(e, [u, a, n]), 1 > a && l ? n : (s.resolveWith(e, [u]), !1)
        }, u = s.promise({
            elem: e,
            props: p.extend({}, t),
            opts: p.extend(!0, {specialEasing: {}, easing: p.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: st || ct(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = p.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i), i
            },
            stop: function (t) {
                var n = 0, i = t ? u.tweens.length : 0;
                if (r)return this;
                for (r = !0; i > n; n++)u.tweens[n].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
            }
        }), d = u.props;
        for (vt(d, u.opts.specialEasing); o > a; a++)if (i = gt.prefilters[a].call(u, e, d, u.opts))return p.isFunction(i.stop) && (p._queueHooks(u.elem, u.opts.queue).stop = p.proxy(i.stop, i)), i;
        return p.map(d, pt, u), p.isFunction(u.opts.start) && u.opts.start.call(e, u), p.fx.timer(p.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    p.Animation = p.extend(gt, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return Q(n.elem, e, $.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            p.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(O);
            for (var n, i = 0, r = e.length; r > i; i++)n = e[i], gt.tweeners[n] = gt.tweeners[n] || [], gt.tweeners[n].unshift(t)
        }, prefilters: [ht], prefilter: function (e, t) {
            t ? gt.prefilters.unshift(e) : gt.prefilters.push(e)
        }
    }), p.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? p.extend({}, e) : {
            complete: n || !n && t || p.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !p.isFunction(t) && t
        };
        return i.duration = p.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in p.fx.speeds ? p.fx.speeds[i.duration] : p.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            p.isFunction(i.old) && i.old.call(this), i.queue && p.dequeue(this, i.queue)
        }, i
    }, p.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(X).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var r = p.isEmptyObject(e), a = p.speed(t, n, i), o = function () {
                var t = gt(this, p.extend({}, e), a);
                (r || p._data(this, "finish")) && t.stop(!0)
            };
            return o.finish = o, r || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
        }, stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, r = null != e && e + "queueHooks", a = p.timers, o = p._data(this);
                if (r)o[r] && o[r].stop && i(o[r]); else for (r in o)o[r] && o[r].stop && dt.test(r) && i(o[r]);
                for (r = a.length; r--;)a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1));
                !t && n || p.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = p._data(this), i = n[e + "queue"], r = n[e + "queueHooks"], a = p.timers, o = i ? i.length : 0;
                for (n.finish = !0, p.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;)a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                for (t = 0; o > t; t++)i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), p.each(["toggle", "show", "hide"], function (e, t) {
        var n = p.fn[t];
        p.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ft(t, !0), e, i, r)
        }
    }), p.each({
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        p.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), p.timers = [], p.fx.tick = function () {
        var e, t = p.timers, n = 0;
        for (st = p.now(); n < t.length; n++)e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || p.fx.stop(), st = void 0
    }, p.fx.timer = function (e) {
        p.timers.push(e), e() ? p.fx.start() : p.timers.pop()
    }, p.fx.interval = 13, p.fx.start = function () {
        lt || (lt = e.setInterval(p.fx.tick, p.fx.interval))
    }, p.fx.stop = function () {
        e.clearInterval(lt), lt = null
    }, p.fx.speeds = {slow: 600, fast: 200, _default: 400}, p.fn.delay = function (t, n) {
        return t = p.fx ? p.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(r)
            }
        })
    }, function () {
        var e, t = i.createElement("input"), n = i.createElement("div"), r = i.createElement("select"), a = r.appendChild(i.createElement("option"));
        n = i.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", c.getSetAttribute = "t" !== n.className, c.style = /top/.test(e.getAttribute("style")), c.hrefNormalized = "/a" === e.getAttribute("href"), c.checkOn = !!t.value, c.optSelected = a.selected, c.enctype = !!i.createElement("form").enctype, r.disabled = !0, c.optDisabled = !a.disabled, t = i.createElement("input"), t.setAttribute("value", ""), c.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), c.radioValue = "t" === t.value
    }();
    var mt = /\r/g, yt = /[\x20\t\r\n\f]+/g;
    p.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            {
                if (arguments.length)return i = p.isFunction(e), this.each(function (n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, p(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : p.isArray(r) && (r = p.map(r, function (e) {
                        return null == e ? "" : e + ""
                    })), t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()], t && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                });
                if (r)return t = p.valHooks[r.type] || p.valHooks[r.nodeName.toLowerCase()], t && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(mt, "") : null == n ? "" : n)
            }
        }
    }), p.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = p.find.attr(e, "value");
                    return null != t ? t : p.trim(p.text(e)).replace(yt, " ")
                }
            }, select: {
                get: function (e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, a = "select-one" === e.type || 0 > r, o = a ? null : [], s = a ? r + 1 : i.length, l = 0 > r ? s : a ? r : 0; s > l; l++)if (n = i[l], (n.selected || l === r) && (c.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !p.nodeName(n.parentNode, "optgroup"))) {
                        if (t = p(n).val(), a)return t;
                        o.push(t)
                    }
                    return o
                }, set: function (e, t) {
                    var n, i, r = e.options, a = p.makeArray(t), o = r.length;
                    while (o--)if (i = r[o], p.inArray(p.valHooks.option.get(i), a) > -1)try {
                        i.selected = n = !0
                    } catch (s) {
                        i.scrollHeight
                    } else i.selected = !1;
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), p.each(["radio", "checkbox"], function () {
        p.valHooks[this] = {
            set: function (e, t) {
                return p.isArray(t) ? e.checked = p.inArray(p(e).val(), t) > -1 : void 0
            }
        }, c.checkOn || (p.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var wt, bt, _t = p.expr.attrHandle, xt = /^(?:checked|selected)$/i, St = c.getSetAttribute, Tt = c.input;
    p.fn.extend({
        attr: function (e, t) {
            return G(this, p.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                p.removeAttr(this, e)
            })
        }
    }), p.extend({
        attr: function (e, t, n) {
            var i, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)return "undefined" == typeof e.getAttribute ? p.prop(e, t, n) : (1 === a && p.isXMLDoc(e) || (t = t.toLowerCase(), r = p.attrHooks[t] || (p.expr.match.bool.test(t) ? bt : wt)), void 0 !== n ? null === n ? void p.removeAttr(e, t) : r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get"in r && null !== (i = r.get(e, t)) ? i : (i = p.find.attr(e, t), null == i ? void 0 : i))
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!c.radioValue && "radio" === t && p.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, i, r = 0, a = t && t.match(O);
            if (a && 1 === e.nodeType)while (n = a[r++])i = p.propFix[n] || n, p.expr.match.bool.test(n) ? Tt && St || !xt.test(n) ? e[i] = !1 : e[p.camelCase("default-" + n)] = e[i] = !1 : p.attr(e, n, ""), e.removeAttribute(St ? n : i)
        }
    }), bt = {
        set: function (e, t, n) {
            return t === !1 ? p.removeAttr(e, n) : Tt && St || !xt.test(n) ? e.setAttribute(!St && p.propFix[n] || n, n) : e[p.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, p.each(p.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = _t[t] || p.find.attr;
        Tt && St || !xt.test(t) ? _t[t] = function (e, t, i) {
            var r, a;
            return i || (a = _t[t], _t[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, _t[t] = a), r
        } : _t[t] = function (e, t, n) {
            return n ? void 0 : e[p.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Tt && St || (p.attrHooks.value = {
        set: function (e, t, n) {
            return p.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n)
        }
    }), St || (wt = {
        set: function (e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, _t.id = _t.name = _t.coords = function (e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, p.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        }, set: wt.set
    }, p.attrHooks.contenteditable = {
        set: function (e, t, n) {
            wt.set(e, "" === t ? !1 : t, n)
        }
    }, p.each(["width", "height"], function (e, t) {
        p.attrHooks[t] = {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), c.style || (p.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Et = /^(?:input|select|textarea|button|object)$/i, jt = /^(?:a|area)$/i;
    p.fn.extend({
        prop: function (e, t) {
            return G(this, p.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = p.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {
                }
            })
        }
    }), p.extend({
        prop: function (e, t, n) {
            var i, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)return 1 === a && p.isXMLDoc(e) || (t = p.propFix[t] || t, r = p.propHooks[t]), void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = p.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Et.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), c.hrefNormalized || p.each(["href", "src"], function (e, t) {
        p.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), c.optSelected || (p.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        p.propFix[this.toLowerCase()] = this
    }), c.enctype || (p.propFix.enctype = "encoding");
    var Ct = /[\t\r\n\f]/g;

    function At(e) {
        return p.attr(e, "class") || ""
    }

    p.fn.extend({
        addClass: function (e) {
            var t, n, i, r, a, o, s, l = 0;
            if (p.isFunction(e))return this.each(function (t) {
                p(this).addClass(e.call(this, t, At(this)))
            });
            if ("string" == typeof e && e) {
                t = e.match(O) || [];
                while (n = this[l++])if (r = At(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ct, " ")) {
                    o = 0;
                    while (a = t[o++])i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                    s = p.trim(i), r !== s && p.attr(n, "class", s)
                }
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, r, a, o, s, l = 0;
            if (p.isFunction(e))return this.each(function (t) {
                p(this).removeClass(e.call(this, t, At(this)))
            });
            if (!arguments.length)return this.attr("class", "");
            if ("string" == typeof e && e) {
                t = e.match(O) || [];
                while (n = this[l++])if (r = At(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ct, " ")) {
                    o = 0;
                    while (a = t[o++])while (i.indexOf(" " + a + " ") > -1)i = i.replace(" " + a + " ", " ");
                    s = p.trim(i), r !== s && p.attr(n, "class", s)
                }
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : p.isFunction(e) ? this.each(function (n) {
                p(this).toggleClass(e.call(this, n, At(this), t), t)
            }) : this.each(function () {
                var t, i, r, a;
                if ("string" === n) {
                    i = 0, r = p(this), a = e.match(O) || [];
                    while (t = a[i++])r.hasClass(t) ? r.removeClass(t) : r.addClass(t)
                } else void 0 !== e && "boolean" !== n || (t = At(this), t && p._data(this, "__className__", t), p.attr(this, "class", t || e === !1 ? "" : p._data(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, i = 0;
            t = " " + e + " ";
            while (n = this[i++])if (1 === n.nodeType && (" " + At(n) + " ").replace(Ct, " ").indexOf(t) > -1)return !0;
            return !1
        }
    }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        p.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), p.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var kt = e.location, Pt = p.now(), It = /\?/, Ot = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    p.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse)return e.JSON.parse(t + "");
        var n, i = null, r = p.trim(t + "");
        return r && !p.trim(r.replace(Ot, function (e, t, r, a) {
            return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !a - !r, "")
        })) ? Function("return " + r)() : p.error("Invalid JSON: " + t)
    }, p.parseXML = function (t) {
        var n, i;
        if (!t || "string" != typeof t)return null;
        try {
            e.DOMParser ? (i = new e.DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + t), n
    };
    var Lt = /#.*$/, Ft = /([?&])_=[^&]*/, Nt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Bt = /^(?:GET|HEAD)$/, Ht = /^\/\//, Vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Mt = {}, Rt = {}, Ut = "*/".concat("*"), Wt = kt.href, qt = Vt.exec(Wt.toLowerCase()) || [];

    function zt(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0, a = t.toLowerCase().match(O) || [];
            if (p.isFunction(n))while (i = a[r++])"+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function $t(e, t, n, i) {
        var r = {}, a = e === Rt;

        function o(s) {
            var l;
            return r[s] = !0, p.each(e[s] || [], function (e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || a || r[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
            }), l
        }

        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function Jt(e, t) {
        var n, i, r = p.ajaxSettings.flatOptions || {};
        for (i in t)void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && p.extend(!0, e, n), e
    }

    function Xt(e, t, n) {
        var i, r, a, o, s = e.contents, l = e.dataTypes;
        while ("*" === l[0])l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)for (o in s)if (s[o] && s[o].test(r)) {
            l.unshift(o);
            break
        }
        if (l[0]in n)a = l[0]; else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    a = o;
                    break
                }
                i || (i = o)
            }
            a = a || i
        }
        return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0
    }

    function Qt(e, t, n, i) {
        var r, a, o, s, l, u = {}, d = e.dataTypes.slice();
        if (d[1])for (o in e.converters)u[o.toLowerCase()] = e.converters[o];
        a = d.shift();
        while (a)if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = d.shift())if ("*" === a)a = l; else if ("*" !== l && l !== a) {
            if (o = u[l + " " + a] || u["* " + a], !o)for (r in u)if (s = r.split(" "), s[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                o === !0 ? o = u[r] : u[r] !== !0 && (a = s[0], d.unshift(s[1]));
                break
            }
            if (o !== !0)if (o && e["throws"])t = o(t); else try {
                t = o(t)
            } catch (c) {
                return {state: "parsererror", error: o ? c : "No conversion from " + l + " to " + a}
            }
        }
        return {state: "success", data: t}
    }

    p.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Wt,
            type: "GET",
            isLocal: Dt.test(qt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ut,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": p.parseJSON, "text xml": p.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Jt(Jt(e, p.ajaxSettings), t) : Jt(p.ajaxSettings, e)
        },
        ajaxPrefilter: zt(Mt),
        ajaxTransport: zt(Rt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, r, a, o, s, l, u, d, c = p.ajaxSetup({}, n), f = c.context || c, h = c.context && (f.nodeType || f.jquery) ? p(f) : p.event, v = p.Deferred(), g = p.Callbacks("once memory"), m = c.statusCode || {}, y = {}, w = {}, b = 0, _ = "canceled", x = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === b) {
                        if (!d) {
                            d = {};
                            while (t = Nt.exec(o))d[t[1].toLowerCase()] = t[2]
                        }
                        t = d[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === b ? o : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return b || (e = w[n] = w[n] || e, y[e] = t), this
                },
                overrideMimeType: function (e) {
                    return b || (c.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (2 > b)for (t in e)m[t] = [m[t], e[t]]; else x.always(e[x.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || _;
                    return u && u.abort(t), T(0, t), this
                }
            };
            if (v.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, c.url = ((t || c.url || Wt) + "").replace(Lt, "").replace(Ht, qt[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = p.trim(c.dataType || "*").toLowerCase().match(O) || [""], null == c.crossDomain && (i = Vt.exec(c.url.toLowerCase()), c.crossDomain = !(!i || i[1] === qt[1] && i[2] === qt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (qt[3] || ("http:" === qt[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = p.param(c.data, c.traditional)), $t(Mt, c, n, x), 2 === b)return x;
            l = p.event && c.global, l && 0 === p.active++ && p.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Bt.test(c.type), a = c.url, c.hasContent || (c.data && (a = c.url += (It.test(a) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = Ft.test(a) ? a.replace(Ft, "$1_=" + Pt++) : a + (It.test(a) ? "&" : "?") + "_=" + Pt++)), c.ifModified && (p.lastModified[a] && x.setRequestHeader("If-Modified-Since", p.lastModified[a]), p.etag[a] && x.setRequestHeader("If-None-Match", p.etag[a])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : c.accepts["*"]);
            for (r in c.headers)x.setRequestHeader(r, c.headers[r]);
            if (c.beforeSend && (c.beforeSend.call(f, x, c) === !1 || 2 === b))return x.abort();
            _ = "abort";
            for (r in{success: 1, error: 1, complete: 1})x[r](c[r]);
            if (u = $t(Rt, c, n, x)) {
                if (x.readyState = 1, l && h.trigger("ajaxSend", [x, c]), 2 === b)return x;
                c.async && c.timeout > 0 && (s = e.setTimeout(function () {
                    x.abort("timeout")
                }, c.timeout));
                try {
                    b = 1, u.send(y, T)
                } catch (S) {
                    if (!(2 > b))throw S;
                    T(-1, S)
                }
            } else T(-1, "No Transport");
            function T(t, n, i, r) {
                var d, y, w, _, S, T = n;
                2 !== b && (b = 2, s && e.clearTimeout(s), u = void 0, o = r || "", x.readyState = t > 0 ? 4 : 0, d = t >= 200 && 300 > t || 304 === t, i && (_ = Xt(c, x, i)), _ = Qt(c, _, x, d), d ? (c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (p.lastModified[a] = S), S = x.getResponseHeader("etag"), S && (p.etag[a] = S)), 204 === t || "HEAD" === c.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = _.state, y = _.data, w = _.error, d = !w)) : (w = T, !t && T || (T = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (n || T) + "", d ? v.resolveWith(f, [y, T, x]) : v.rejectWith(f, [x, T, w]), x.statusCode(m), m = void 0, l && h.trigger(d ? "ajaxSuccess" : "ajaxError", [x, c, d ? y : w]), g.fireWith(f, [x, T]), l && (h.trigger("ajaxComplete", [x, c]), --p.active || p.event.trigger("ajaxStop")))
            }

            return x
        },
        getJSON: function (e, t, n) {
            return p.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return p.get(e, void 0, t, "script")
        }
    }), p.each(["get", "post"], function (e, t) {
        p[t] = function (e, n, i, r) {
            return p.isFunction(n) && (r = r || i, i = n, n = void 0), p.ajax(p.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, p.isPlainObject(e) && e))
        }
    }), p._evalUrl = function (e) {
        return p.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, p.fn.extend({
        wrapAll: function (e) {
            if (p.isFunction(e))return this.each(function (t) {
                p(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return p.isFunction(e) ? this.each(function (t) {
                p(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = p(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = p.isFunction(e);
            return this.each(function (n) {
                p(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    function Gt(e) {
        return e.style && e.style.display || p.css(e, "display")
    }

    function Yt(e) {
        if (!p.contains(e.ownerDocument || i, e))return !0;
        while (e && 1 === e.nodeType) {
            if ("none" === Gt(e) || "hidden" === e.type)return !0;
            e = e.parentNode
        }
        return !1
    }

    p.expr.filters.hidden = function (e) {
        return c.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Yt(e)
    }, p.expr.filters.visible = function (e) {
        return !p.expr.filters.hidden(e)
    };
    var Kt = /%20/g, Zt = /\[\]$/, en = /\r?\n/g, tn = /^(?:submit|button|image|reset|file)$/i, nn = /^(?:input|select|textarea|keygen)/i;

    function rn(e, t, n, i) {
        var r;
        if (p.isArray(t))p.each(t, function (t, r) {
            n || Zt.test(e) ? i(e, r) : rn(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        }); else if (n || "object" !== p.type(t))i(e, t); else for (r in t)rn(e + "[" + r + "]", t[r], n, i)
    }

    p.param = function (e, t) {
        var n, i = [], r = function (e, t) {
            t = p.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || e.jquery && !p.isPlainObject(e))p.each(e, function () {
            r(this.name, this.value)
        }); else for (n in e)rn(n, e[n], t, r);
        return i.join("&").replace(Kt, "+")
    }, p.fn.extend({
        serialize: function () {
            return p.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = p.prop(this, "elements");
                return e ? p.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !p(this).is(":disabled") && nn.test(this.nodeName) && !tn.test(e) && (this.checked || !Y.test(e))
            }).map(function (e, t) {
                var n = p(this).val();
                return null == n ? null : p.isArray(n) ? p.map(n, function (e) {
                    return {name: t.name, value: e.replace(en, "\r\n")}
                }) : {name: t.name, value: n.replace(en, "\r\n")}
            }).get()
        }
    }), p.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return this.isLocal ? un() : i.documentMode > 8 ? ln() : /^(get|post|head|put|delete|options)$/i.test(this.type) && ln() || un()
    } : ln;
    var an = 0, on = {}, sn = p.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in on)on[e](void 0, !0)
    }), c.cors = !!sn && "withCredentials"in sn, sn = c.ajax = !!sn, sn && p.ajaxTransport(function (t) {
        if (!t.crossDomain || c.cors) {
            var n;
            return {
                send: function (i, r) {
                    var a, o = t.xhr(), s = ++an;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (a in t.xhrFields)o[a] = t.xhrFields[a];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i)void 0 !== i[a] && o.setRequestHeader(a, i[a] + "");
                    o.send(t.hasContent && t.data || null), n = function (e, i) {
                        var a, l, u;
                        if (n && (i || 4 === o.readyState))if (delete on[s], n = void 0, o.onreadystatechange = p.noop, i)4 !== o.readyState && o.abort(); else {
                            u = {}, a = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                            try {
                                l = o.statusText
                            } catch (d) {
                                l = ""
                            }
                            a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                        }
                        u && r(a, l, u, o.getAllResponseHeaders())
                    }, t.async ? 4 === o.readyState ? e.setTimeout(n) : o.onreadystatechange = on[s] = n : n()
                }, abort: function () {
                    n && n(void 0, !0)
                }
            }
        }
    });
    function ln() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function un() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    p.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return p.globalEval(e), e
            }
        }
    }), p.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), p.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n = i.head || p("head")[0] || i.documentElement;
            return {
                send: function (r, a) {
                    t = i.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || a(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                }, abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var dn = [], cn = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = dn.pop() || p.expando + "_" + Pt++;
            return this[e] = !0, e
        }
    }), p.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r, a, o, s = t.jsonp !== !1 && (cn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && cn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(cn, "$1" + r) : t.jsonp !== !1 && (t.url += (It.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return o || p.error(r + " was not called"), o[0]
        }, t.dataTypes[0] = "json", a = e[r], e[r] = function () {
            o = arguments
        }, i.always(function () {
            void 0 === a ? p(e).removeProp(r) : e[r] = a, t[r] && (t.jsonpCallback = n.jsonpCallback, dn.push(r)), o && p.isFunction(a) && a(o[0]), o = a = void 0
        }), "script") : void 0
    }), p.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || i;
        var r = S.exec(e), a = !n && [];
        return r ? [t.createElement(r[1])] : (r = ue([e], t, a), a && a.length && p(a).remove(), p.merge([], r.childNodes))
    };
    var fn = p.fn.load;
    p.fn.load = function (e, t, n) {
        if ("string" != typeof e && fn)return fn.apply(this, arguments);
        var i, r, a, o = this, s = e.indexOf(" ");
        return s > -1 && (i = p.trim(e.slice(s, e.length)), e = e.slice(0, s)), p.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), o.length > 0 && p.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            a = arguments, o.html(i ? p("<div>").append(p.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
                o.each(function () {
                    n.apply(this, a || [e.responseText, t, e])
                })
            }), this
    }, p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        p.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), p.expr.filters.animated = function (e) {
        return p.grep(p.timers, function (t) {
            return e === t.elem
        }).length
    };
    function pn(e) {
        return p.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    p.offset = {
        setOffset: function (e, t, n) {
            var i, r, a, o, s, l, u, d = p.css(e, "position"), c = p(e), f = {};
            "static" === d && (e.style.position = "relative"), s = c.offset(), a = p.css(e, "top"), l = p.css(e, "left"), u = ("absolute" === d || "fixed" === d) && p.inArray("auto", [a, l]) > -1, u ? (i = c.position(), o = i.top, r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(l) || 0), p.isFunction(t) && (t = t.call(e, n, p.extend({}, s))), null != t.top && (f.top = t.top - s.top + o), null != t.left && (f.left = t.left - s.left + r), "using"in t ? t.using.call(e, f) : c.css(f)
        }
    }, p.fn.extend({
        offset: function (e) {
            if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                p.offset.setOffset(this, e, t)
            });
            var t, n, i = {top: 0, left: 0}, r = this[0], a = r && r.ownerDocument;
            if (a)return t = a.documentElement, p.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = pn(a), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i
        }, position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, i = this[0];
                return "fixed" === p.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || (n = e.offset()), n.top += p.css(e[0], "borderTopWidth", !0), n.left += p.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - p.css(i, "marginTop", !0),
                    left: t.left - n.left - p.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && !p.nodeName(e, "html") && "static" === p.css(e, "position"))e = e.offsetParent;
                return e || Ue
            })
        }
    }), p.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = /Y/.test(t);
        p.fn[e] = function (i) {
            return G(this, function (e, i, r) {
                var a = pn(e);
                return void 0 === r ? a ? t in a ? a[t] : a.document.documentElement[i] : e[i] : void(a ? a.scrollTo(n ? p(a).scrollLeft() : r, n ? r : p(a).scrollTop()) : e[i] = r)
            }, e, i, arguments.length, null)
        }
    }), p.each(["top", "left"], function (e, t) {
        p.cssHooks[t] = $e(c.pixelPosition, function (e, n) {
            return n ? (n = qe(e, t), Me.test(n) ? p(e).position()[t] + "px" : n) : void 0
        })
    }), p.each({Height: "height", Width: "width"}, function (e, t) {
        p.each({
            padding: "inner" + e, content: t, "": "outer" + e
        }, function (n, i) {
            p.fn[i] = function (i, r) {
                var a = arguments.length && (n || "boolean" != typeof i), o = n || (i === !0 || r === !0 ? "margin" : "border");
                return G(this, function (t, n, i) {
                    var r;
                    return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? p.css(t, n, o) : p.style(t, n, i, o)
                }, t, a ? i : void 0, a, null)
            }
        })
    }), p.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), p.fn.size = function () {
        return this.length
    }, p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return p
    });
    var hn = e.jQuery, vn = e.$;
    return p.noConflict = function (t) {
        return e.$ === p && (e.$ = vn), t && e.jQuery === p && (e.jQuery = hn), p
    }, t || (e.jQuery = e.$ = p), p
});
!function (e, t) {
    "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Spinner = t()
}(this, function () {
    "use strict";
    function e(e, t) {
        var n, i = document.createElement(e || "div");
        for (n in t)i[n] = t[n];
        return i
    }

    function t(e) {
        for (var t = 1, n = arguments.length; n > t; t++)e.appendChild(arguments[t]);
        return e
    }

    function n(e, t, n, i) {
        var r = ["opacity", t, ~~(100 * e), n, i].join("-"), a = .01 + n / i * 100, o = Math.max(1 - (1 - e) / t * (100 - a), e), s = u.substring(0, u.indexOf("Animation")).toLowerCase(), l = s && "-" + s + "-" || "";
        return c[r] || (f.insertRule("@" + l + "keyframes " + r + "{0%{opacity:" + o + "}" + a + "%{opacity:" + e + "}" + (a + .01) + "%{opacity:1}" + (a + t) % 100 + "%{opacity:" + e + "}100%{opacity:" + o + "}}", f.cssRules.length), c[r] = 1), r
    }

    function i(e, t) {
        var n, i, r = e.style;
        for (t = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < d.length; i++)if (n = d[i] + t, void 0 !== r[n])return n;
        return void 0 !== r[t] ? t : void 0
    }

    function r(e, t) {
        for (var n in t)e.style[i(e, n) || n] = t[n];
        return e
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)void 0 === e[i] && (e[i] = n[i])
        }
        return e
    }

    function o(e, t) {
        return "string" == typeof e ? e : e[t % e.length]
    }

    function s(e) {
        this.opts = a(e || {}, s.defaults, p)
    }

    function l() {
        function n(t, n) {
            return e("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', n)
        }

        f.addRule(".spin-vml", "behavior:url(#default#VML)"), s.prototype.lines = function (e, i) {
            function a() {
                return r(n("group", {coordsize: d + " " + d, coordorigin: -u + " " + -u}), {width: d, height: d})
            }

            function s(e, s, l) {
                t(f, t(r(a(), {
                    rotation: 360 / i.lines * e + "deg",
                    left: ~~s
                }), t(r(n("roundrect", {arcsize: i.corners}), {
                    width: u,
                    height: i.width,
                    left: i.radius,
                    top: -i.width >> 1,
                    filter: l
                }), n("fill", {color: o(i.color, e), opacity: i.opacity}), n("stroke", {opacity: 0}))))
            }

            var l, u = i.length + i.width, d = 2 * u, c = 2 * -(i.width + i.length) + "px", f = r(a(), {
                position: "absolute",
                top: c,
                left: c
            });
            if (i.shadow)for (l = 1; l <= i.lines; l++)s(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (l = 1; l <= i.lines; l++)s(l);
            return t(e, f)
        }, s.prototype.opacity = function (e, t, n, i) {
            var r = e.firstChild;
            i = i.shadow && i.lines || 0, r && t + i < r.childNodes.length && (r = r.childNodes[t + i], r = r && r.firstChild, r = r && r.firstChild, r && (r.opacity = n))
        }
    }

    var u, d = ["webkit", "Moz", "ms", "O"], c = {}, f = function () {
        var n = e("style", {type: "text/css"});
        return t(document.getElementsByTagName("head")[0], n), n.sheet || n.styleSheet
    }(), p = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        rotate: 0,
        corners: 1,
        color: "#000",
        direction: 1,
        speed: 1,
        trail: 100,
        opacity: .25,
        fps: 20,
        zIndex: 2e9,
        className: "spinner",
        top: "50%",
        left: "50%",
        position: "absolute"
    };
    s.defaults = {}, a(s.prototype, {
        spin: function (t) {
            this.stop();
            {
                var n = this, i = n.opts, a = n.el = r(e(0, {className: i.className}), {
                    position: i.position,
                    width: 0,
                    zIndex: i.zIndex
                });
                i.radius + i.length + i.width
            }
            if (r(a, {
                    left: i.left,
                    top: i.top
                }), t && t.insertBefore(a, t.firstChild || null), a.setAttribute("role", "progressbar"), n.lines(a, n.opts), !u) {
                var o, s = 0, l = (i.lines - 1) * (1 - i.direction) / 2, d = i.fps, c = d / i.speed, f = (1 - i.opacity) / (c * i.trail / 100), p = c / i.lines;
                !function h() {
                    s++;
                    for (var e = 0; e < i.lines; e++)o = Math.max(1 - (s + (i.lines - e) * p) % c * f, i.opacity), n.opacity(a, e * i.direction + l, o, i);
                    n.timeout = n.el && setTimeout(h, ~~(1e3 / d))
                }()
            }
            return n
        }, stop: function () {
            var e = this.el;
            return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = void 0), this
        }, lines: function (i, a) {
            function s(t, n) {
                return r(e(), {
                    position: "absolute",
                    width: a.length + a.width + "px",
                    height: a.width + "px",
                    background: t,
                    boxShadow: n,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / a.lines * d + a.rotate) + "deg) translate(" + a.radius + "px,0)",
                    borderRadius: (a.corners * a.width >> 1) + "px"
                })
            }

            for (var l, d = 0, c = (a.lines - 1) * (1 - a.direction) / 2; d < a.lines; d++)l = r(e(), {
                position: "absolute",
                top: 1 + ~(a.width / 2) + "px",
                transform: a.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: a.opacity,
                animation: u && n(a.opacity, a.trail, c + d * a.direction, a.lines) + " " + 1 / a.speed + "s linear infinite"
            }), a.shadow && t(l, r(s("#000", "0 0 4px #000"), {top: "2px"})), t(i, t(l, s(o(a.color, d), "0 0 1px rgba(0,0,0,.1)")));
            return i
        }, opacity: function (e, t, n) {
            t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
        }
    });
    var h = r(e("group"), {behavior: "url(#default#VML)"});
    return !i(h, "transform") && h.adj ? l() : u = i(h, "animation"), s
});
(function (e) {
    function t() {
    }

    function n(e) {
        C = [e]
    }

    function i(e, t, n) {
        return e && e.apply && e.apply(t.context || t, n)
    }

    function r(e) {
        return /\?/.test(e) ? "&" : "?"
    }

    function a(a) {
        function f(e) {
            z++ || ($(), V && (E[R] = {s: [e]}), N && (e = N.apply(a, [e])), i(O, a, [e, b, a]), i(F, a, [a, b]))
        }

        function I(e) {
            z++ || ($(), V && e != _ && (E[R] = e), i(L, a, [a, e]), i(F, a, [a, e]))
        }

        a = e.extend({}, A, a);
        var O = a.success, L = a.error, F = a.complete, N = a.dataFilter, D = a.callbackParameter, B = a.callback, H = a.cache, V = a.pageCache, M = a.charset, R = a.url, U = a.data, W = a.timeout, q, z = 0, $ = t, J, X, Q, G, Y, K;
        return S && S(function (e) {
            e.done(O).fail(L), O = e.resolve, L = e.reject
        }).promise(a), a.abort = function () {
            !z++ && $()
        }, i(a.beforeSend, a, [a]) === !1 || z ? a : (R = R || l, U = U ? typeof U == "string" ? U : e.param(U, a.traditional) : l, R += U ? r(R) + U : l, D && (R += r(R) + encodeURIComponent(D) + "=?"), !H && !V && (R += r(R) + "_" + (new Date).getTime() + "="), R = R.replace(/=\?(&|$)/, "=" + B + "$1"), V && (q = E[R]) ? q.s ? f(q.s[0]) : I(q) : (x[B] = n, G = e(w)[0], G.id = c + j++, M && (G[s] = M), k && k.version() < 11.6 ? (Y = e(w)[0]).text = "document.getElementById('" + G.id + "')." + h + "()" : G[o] = o, P && (G.htmlFor = G.id, G.event = p), G[v] = G[h] = G[g] = function (e) {
            if (!G[m] || !/i/.test(G[m])) {
                try {
                    G[p] && G[p]()
                } catch (t) {
                }
                e = C, C = 0, e ? f(e[0]) : I(u)
            }
        }, G.src = R, $ = function (e) {
            K && clearTimeout(K), G[g] = G[v] = G[h] = null, T[y](G), Y && T[y](Y)
        }, T[d](G, Q = T.firstChild), Y && T[d](Y, Q), K = W > 0 && setTimeout(function () {
                I(_)
            }, W)), a)
    }

    var o = "async", s = "charset", l = "", u = "error", d = "insertBefore", c = "_jqjsp", f = "on", p = f + "click", h = f + u, v = f + "load", g = f + "readystatechange", m = "readyState", y = "removeChild", w = "<script>", b = "success", _ = "timeout", x = window, S = e.Deferred, T = e("head")[0] || document.documentElement, E = {}, j = 0, C, A = {
        callback: c,
        url: location.href
    }, k = x.opera, P = !!e("<div>").html("<!--[if IE]><i><![endif]-->").find("i").length;
    a.setup = function (t) {
        e.extend(A, t)
    }, e.jsonp = a
})(jQuery);
var CryptoJS = CryptoJS || function (e, t) {
        var n = {}, i = n.lib = {}, r = i.Base = function () {
            function e() {
            }

            return {
                extend: function (t) {
                    e.prototype = this;
                    var n = new e;
                    t && n.mixIn(t);
                    n.$super = this;
                    return n
                }, create: function () {
                    var e = this.extend();
                    e.init.apply(e, arguments);
                    return e
                }, init: function () {
                }, mixIn: function (e) {
                    for (var t in e)e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                }, clone: function () {
                    return this.$super.extend(this)
                }
            }
        }(), a = i.WordArray = r.extend({
            init: function (e, n) {
                e = this.words = e || [];
                this.sigBytes = n != t ? n : 4 * e.length
            }, toString: function (e) {
                return (e || s).stringify(this)
            }, concat: function (e) {
                var t = this.words, n = e.words, i = this.sigBytes, e = e.sigBytes;
                this.clamp();
                if (i % 4)for (var r = 0; r < e; r++)t[i + r >>> 2] |= (n[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 24 - 8 * ((i + r) % 4); else if (65535 < n.length)for (r = 0; r < e; r += 4)t[i + r >>> 2] = n[r >>> 2]; else t.push.apply(t, n);
                this.sigBytes += e;
                return this
            }, clamp: function () {
                var t = this.words, n = this.sigBytes;
                t[n >>> 2] &= 4294967295 << 32 - 8 * (n % 4);
                t.length = e.ceil(n / 4)
            }, clone: function () {
                var e = r.clone.call(this);
                e.words = this.words.slice(0);
                return e
            }, random: function (t) {
                for (var n = [], i = 0; i < t; i += 4)n.push(4294967296 * e.random() | 0);
                return a.create(n, t)
            }
        }), o = n.enc = {}, s = o.Hex = {
            stringify: function (e) {
                for (var t = e.words, e = e.sigBytes, n = [], i = 0; i < e; i++) {
                    var r = t[i >>> 2] >>> 24 - 8 * (i % 4) & 255;
                    n.push((r >>> 4).toString(16));
                    n.push((r & 15).toString(16))
                }
                return n.join("")
            }, parse: function (e) {
                for (var t = e.length, n = [], i = 0; i < t; i += 2)n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - 4 * (i % 8);
                return a.create(n, t / 2)
            }
        }, l = o.Latin1 = {
            stringify: function (e) {
                for (var t = e.words, e = e.sigBytes, n = [], i = 0; i < e; i++)n.push(String.fromCharCode(t[i >>> 2] >>> 24 - 8 * (i % 4) & 255));
                return n.join("")
            }, parse: function (e) {
                for (var t = e.length, n = [], i = 0; i < t; i++)n[i >>> 2] |= (e.charCodeAt(i) & 255) << 24 - 8 * (i % 4);
                return a.create(n, t)
            }
        }, u = o.Utf8 = {
            stringify: function (e) {
                try {
                    return decodeURIComponent(escape(l.stringify(e)))
                } catch (t) {
                    throw Error("Malformed UTF-8 data")
                }
            }, parse: function (e) {
                return l.parse(unescape(encodeURIComponent(e)))
            }
        }, d = i.BufferedBlockAlgorithm = r.extend({
            reset: function () {
                this._data = a.create();
                this._nDataBytes = 0
            }, _append: function (e) {
                "string" == typeof e && (e = u.parse(e));
                this._data.concat(e);
                this._nDataBytes += e.sigBytes
            }, _process: function (t) {
                var n = this._data, i = n.words, r = n.sigBytes, o = this.blockSize, s = r / (4 * o), s = t ? e.ceil(s) : e.max((s | 0) - this._minBufferSize, 0), t = s * o, r = e.min(4 * t, r);
                if (t) {
                    for (var l = 0; l < t; l += o)this._doProcessBlock(i, l);
                    l = i.splice(0, t);
                    n.sigBytes -= r
                }
                return a.create(l, r)
            }, clone: function () {
                var e = r.clone.call(this);
                e._data = this._data.clone();
                return e
            }, _minBufferSize: 0
        });
        i.Hasher = d.extend({
            init: function () {
                this.reset()
            }, reset: function () {
                d.reset.call(this);
                this._doReset()
            }, update: function (e) {
                this._append(e);
                this._process();
                return this
            }, finalize: function (e) {
                e && this._append(e);
                this._doFinalize();
                return this._hash
            }, clone: function () {
                var e = d.clone.call(this);
                e._hash = this._hash.clone();
                return e
            }, blockSize: 16, _createHelper: function (e) {
                return function (t, n) {
                    return e.create(n).finalize(t)
                }
            }, _createHmacHelper: function (e) {
                return function (t, n) {
                    return c.HMAC.create(e, n).finalize(t)
                }
            }
        });
        var c = n.algo = {};
        return n
    }(Math);
(function (e) {
    function t(e, t, n, i, r, a, o) {
        e = e + (t & n | ~t & i) + r + o;
        return (e << a | e >>> 32 - a) + t
    }

    function n(e, t, n, i, r, a, o) {
        e = e + (t & i | n & ~i) + r + o;
        return (e << a | e >>> 32 - a) + t
    }

    function i(e, t, n, i, r, a, o) {
        e = e + (t ^ n ^ i) + r + o;
        return (e << a | e >>> 32 - a) + t
    }

    function r(e, t, n, i, r, a, o) {
        e = e + (n ^ (t | ~i)) + r + o;
        return (e << a | e >>> 32 - a) + t
    }

    var a = CryptoJS, o = a.lib, s = o.WordArray, o = o.Hasher, l = a.algo, u = [];
    (function () {
        for (var t = 0; 64 > t; t++)u[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0
    })();
    l = l.MD5 = o.extend({
        _doReset: function () {
            this._hash = s.create([1732584193, 4023233417, 2562383102, 271733878])
        }, _doProcessBlock: function (e, a) {
            for (var o = 0; 16 > o; o++) {
                var s = a + o, l = e[s];
                e[s] = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360
            }
            for (var s = this._hash.words, l = s[0], d = s[1], c = s[2], f = s[3], o = 0; 64 > o; o += 4)16 > o ? (l = t(l, d, c, f, e[a + o], 7, u[o]), f = t(f, l, d, c, e[a + o + 1], 12, u[o + 1]), c = t(c, f, l, d, e[a + o + 2], 17, u[o + 2]), d = t(d, c, f, l, e[a + o + 3], 22, u[o + 3])) : 32 > o ? (l = n(l, d, c, f, e[a + (o + 1) % 16], 5, u[o]), f = n(f, l, d, c, e[a + (o + 6) % 16], 9, u[o + 1]), c = n(c, f, l, d, e[a + (o + 11) % 16], 14, u[o + 2]), d = n(d, c, f, l, e[a + o % 16], 20, u[o + 3])) : 48 > o ? (l = i(l, d, c, f, e[a + (3 * o + 5) % 16], 4, u[o]), f = i(f, l, d, c, e[a + (3 * o + 8) % 16], 11, u[o + 1]), c = i(c, f, l, d, e[a + (3 * o + 11) % 16], 16, u[o + 2]), d = i(d, c, f, l, e[a + (3 * o + 14) % 16], 23, u[o + 3])) : (l = r(l, d, c, f, e[a + 3 * o % 16], 6, u[o]), f = r(f, l, d, c, e[a + (3 * o + 7) % 16], 10, u[o + 1]), c = r(c, f, l, d, e[a + (3 * o + 14) % 16], 15, u[o + 2]), d = r(d, c, f, l, e[a + (3 * o + 5) % 16], 21, u[o + 3]));
            s[0] = s[0] + l | 0;
            s[1] = s[1] + d | 0;
            s[2] = s[2] + c | 0;
            s[3] = s[3] + f | 0
        }, _doFinalize: function () {
            var e = this._data, t = e.words, n = 8 * this._nDataBytes, i = 8 * e.sigBytes;
            t[i >>> 5] |= 128 << 24 - i % 32;
            t[(i + 64 >>> 9 << 4) + 14] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360;
            e.sigBytes = 4 * (t.length + 1);
            this._process();
            e = this._hash.words;
            for (t = 0; 4 > t; t++)n = e[t], e[t] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360
        }
    });
    a.MD5 = o._createHelper(l);
    a.HmacMD5 = o._createHmacHelper(l)
})(Math);
if (window.polyvObject_init) {
    polyvplayer_object = jQuery.noConflict(true);
    polyvObject.fn.videoPlayer = function (e) {
        polyvplayer_object(this).videoPlayer(e)
    };
    polyvObject.fn.previewPlayer = function (e) {
        polyvplayer_object(this).previewPlayer(e)
    };
    polyvObject.fn.createPurePlayer = function (e) {
        polyvplayer_object(this).createPurePlayer(e)
    }
} else {
    var polyvObject = jQuery.noConflict(true);
    window.polyvObject_init = true
}
(function (e) {
    e.version = 20170922;
    e.majorVersion = 10;
    e.majorRevision = 3;
    createPreviewPlayer = function (e) {
        e.previewMode = true;
        return createShowPlayer(e, this)
    };
    createShowPlayer = function (t, n) {
        if (!arguments[1]) {
            n = this
        }
        e.h5Script = "//player.polyv.net/script/player.js";
        if (t.beta === true) {
            e.h5Script = "//player.polyv.net/javascript/" + e.version + "/player.js"
        }
        if (e.checkQiHoo() && t.ban360) {
            t.forceHTML5 = true;
            t.banBrowser = true
        }
        if (t.forceFlash) {
            if (t.vid && t.previewMode) {
                t.vid = e.decode(t.vid)
            }
            return privateCreate(n, t)
        }
        if (e.isSupportedHTMLDevice() || t.forceHTML5) {
            if (t.vrdomain) {
                t.vrFN = true
            }
            if (typeof s2j_setEncBrowser == "function") {
                t.isBro = s2j_setEncBrowser()
            }
            var i = JSON.stringify(t);
            var r = "http://";
            if (window.location.protocol == "https:") {
                r = "https://"
            }
            var a = "//player.polyv.net";
            var o = r + "player.polyv.net";
            var s = t;
            var l = window.location.href;
            var u = document.domain;
            var d = t.vid;
            var c = "polyvPlayer" + d;
            var f = false;
            var p = 1;
            var h = 0;
            var v = 0;
            var g = 0;
            var m = "";
            var y = 3;
            if (t.slot) {
                y = t.slot
            }
            if (typeof s2j_callOnBarrageUrl == "function") {
                m = s2j_callOnBarrageUrl()
            }
            var w = e('<div id="container' + t.vid + '"></div>');
            e(w).css("height", s.height);
            e(w).css("width", s.width);
            e(w).css("position", "relative");
            var b = "href=" + l + "&settings=" + i;
            var _ = r + "player.polyv.net/script/view" + y + ".html" + "?" + encodeURIComponent(b);
            if (s.vrdomain) {
                _ = r + s.vrdomain + "/script/view" + y + ".html" + "?" + encodeURIComponent(b)
            }
            if (t.beta_test == "on") {
                o = r + "beta.polyv.net";
                _ = r + "beta.polyv.net/file/player/trunk/view" + y + ".html" + "?" + encodeURIComponent(b);
                o = r + "192.168.1.124:81";
                _ = o + "/view" + y + ".html" + "?" + encodeURIComponent(b)
            }
            if (t.beta == "on") {
                _ = r + "player.polyv.net/javascript/" + e.version + "/view" + y + ".html" + "?" + encodeURIComponent(b);
                if (s.vrdomain) {
                    _ = r + s.vrdomain + "/javascript/" + e.version + "/view" + y + ".html" + "?" + encodeURIComponent(b)
                }
            }
            if (s.vrdomain) {
                o = r + s.vrdomain
            }
            var x = document.createElement("iframe");
            x.setAttribute("name", "polyvPlayer");
            x.setAttribute("id", c);
            x.setAttribute("frameborder", "0");
            x.setAttribute("src", _);
            x.setAttribute("allowfullscreen", "");
            x.setAttribute("mozallowfullscreen", "");
            x.setAttribute("webkitallowfullscreen", "");
            x.style["overflow"] = "hidden";
            x.style["width"] = "100%";
            x.style["height"] = "100%";
            x.style["left"] = 0;
            x.style["position"] = "absolute";
            x.style["z-index"] = 999;
            var S = e(x);
            e(n).append(w);
            w.append(S);
            if (s.height == 0) {
                var T = r + "player.polyv.net/script/js/ajs.js";
                var E = r + "player.polyv.net/script/js/base64.js";
                e.getScript(T, function () {
                    e.getScript(E, function () {
                        var t = a + "/videojson/" + d + ".json";
                        e.getJSON(t, function (t) {
                            var n = CryptoJS.MD5(d) + "";
                            var i = aesjs.utils.hex.toBytes(t.body);
                            var r = new aesjs.ModeOfOperation.cbc(e.stringToBytes(n.substr(0, 16)), e.stringToBytes(n.substr(16, 32)));
                            var a = r.decrypt(i);
                            var o = aesjs.utils.utf8.fromBytes(a);
                            var l = Base64.decode(o);
                            var u = JSON.parse(l);
                            s.ratio = u.ratio;
                            p = s.ratio;
                            var c = parseInt(e(w).css("width")) / s.ratio;
                            s.height = c;
                            e(w).css("height", c);
                            if (s.listid || s.flashvars && s.flashvars.listid) {
                                if (s.showVideoList == undefined || s.showVideoList == "on") {
                                    e("iframe").css("height", s.height + 95)
                                }
                            }
                        })
                    })
                })
            }
            if (t.vid && s.previewMode) {
                d = t.vid = e.decode(t.vid)
            }
            s.j2s_getDuration = function () {
                return h
            };
            s.j2s_getCurrentTime = function () {
                return v
            };
            s.j2s_resumeVideo = function () {
                A("j2s_resumeVideo", d)
            };
            s.j2s_playVideo = function () {
                A("j2s_playVideo", d)
            };
            s.j2s_pauseVideo = function () {
                A("j2s_pauseVideo", d)
            };
            s.j2s_seekVideo = function (e) {
                A("j2s_seekVideo", d, e)
            };
            s.j2s_stopVideo = function () {
                A("j2s_stopVideo", d)
            };
            s.j2s_stayInVideoTime = function () {
                return g
            };
            s.j2s_switch = function (e) {
                A("j2s_switch", d, e)
            };
            s.j2s_showBarrage = function () {
                A("j2s_showBarrage", d)
            };
            s.j2s_hideBarrage = function () {
                A("j2s_hideBarrage", d)
            };
            s.j2s_addBarrageMessage = function (e) {
                A("j2s_addBarrageMessage", d, e)
            };
            s.j2s_reloadBarrageData = function () {
                A("j2s_reloadBarrageData", d)
            };
            s.j2s_toggleHighSpeed = function (e) {
                A("j2s_toggleHighSpeed", d, e)
            };
            s.switchMMode = function (e) {
                A("switchMMode", d, e)
            };
            s.changeVid = function (e, t, n, i, r) {
                if (e == undefined || e == d || e.substr(0, 10) != d.substr(0, 10)) {
                    return
                }
                if (!arguments[1]) {
                    t = 0
                }
                if (!arguments[2]) {
                    n = "on"
                }
                if (!arguments[3] || !arguments[4]) {
                    i = r = 0
                }
                var a = '{"vid":"' + e + '","watchStartTime":"' + t + '","auto":"' + n + '", "ts":"' + i + '","sign":"' + r + '"}';
                A("changeVid", d, a);
                if (s.s2j_changeVid) {
                    s.s2j_changeVid()
                }
                if (typeof s2j_changeVid == "function") {
                    s2j_changeVid(d, e)
                }
                if (e != d) {
                    d = e
                }
            };
            s.changeParam = function (e, t, n, i) {
                var r = '{"p1":"' + e + '","p2":"' + t + '","p3":"' + n + '","p4":"' + i + '"}';
                A("changeParam", d, r)
            };
            s.changeRepeat = function (e) {
                A("changeRepeat", d, e)
            };
            s.changeCode = function (e) {
                A("changeCode", d, e)
            };
            s.j2s_setVolume = function (e) {
                A("j2s_setVolume", d, e)
            };
            s.j2s_removeVideo = function () {
                e(n).empty()
            };
            s.changeLiveStreamName = function (e) {
                A("changeLiveStreamName", d, e)
            };
            var j = e(w).css("position");
            window.addEventListener("message", function (e) {
                if (e.data.vid == d) {
                    switch (e.data.message) {
                        case"s2j_onPlayerInitOver":
                            if (s.s2j_onPlayerInitOver) {
                                s.s2j_onPlayerInitOver()
                            }
                            if (typeof s2j_onPlayerInitOver == "function") {
                                s2j_onPlayerInitOver(d)
                            }
                            break;
                        case"s2j_onPlayStart":
                            h = e.data.duration;
                            if (s.s2j_onPlayStart) {
                                f = true;
                                s.s2j_onPlayStart()
                            }
                            if (typeof s2j_onPlayStart == "function") {
                                s2j_onPlayStart(d)
                            }
                            break;
                        case"s2j_onVodVideoPlay":
                            if (s.s2j_onVodVideoPlay) {
                                s.s2j_onVodVideoPlay()
                            }
                            if (typeof s2j_onVodVideoPlay == "function") {
                                s2j_onVodVideoPlay(d)
                            }
                            break;
                        case"s2j_onVideoPlay":
                            if (s.s2j_onVideoPlay) {
                                s.s2j_onVideoPlay()
                            }
                            if (typeof s2j_onVideoPlay == "function") {
                                s2j_onVideoPlay(d)
                            }
                            break;
                        case"s2j_onVideoPause":
                            if (s.s2j_onVideoPause) {
                                s.s2j_onVideoPause()
                            }
                            if (typeof s2j_onVideoPause == "function") {
                                s2j_onVideoPause(d)
                            }
                            break;
                        case"s2j_onPlayOver":
                            if (s.s2j_onPlayOver) {
                                s.s2j_onPlayOver()
                            }
                            if (typeof s2j_onPlayOver == "function") {
                                s2j_onPlayOver(d)
                            }
                            break;
                        case"s2j_onSwitchHd":
                            var t = e.data.hdNum + 1;
                            if (s.s2j_onSwitchHd) {
                                s.s2j_onSwitchHd(t)
                            }
                            if (typeof s2j_onSwitchHd == "function") {
                                s2j_onSwitchHd(d, t)
                            }
                            break;
                        case"s2j_onOverPlay":
                            var n = e.data.type;
                            var i = e.data.sec;
                            if (s.s2j_onOverPlay) {
                                s.s2j_onOverPlay(n, i)
                            }
                            if (typeof s2j_onOverPlay == "function") {
                                s2j_onOverPlay(d, n, i)
                            }
                            break;
                        case"s2j_onPlayerError":
                            if (s.s2j_onPlayerError) {
                                s.s2j_onPlayerError(e.data.config)
                            }
                            if (typeof s2j_onPlayerError == "function") {
                                s2j_onPlayerError(d, e.data.config)
                            }
                            break;
                        case"renderParam":
                            v = e.data.cur;
                            g = e.data.stay;
                            break;
                        case"s2j_changeVideoId":
                            d = e.data.id;
                            break;
                        case"s2j_onVideoCanPlay":
                            if (s.s2j_onVideoCanPlay) {
                                s.s2j_onVideoCanPlay()
                            }
                            if (typeof s2j_onVideoCanPlay == "function") {
                                s2j_onVideoCanPlay(d)
                            }
                            break;
                        case"canToggleSpeed":
                            if (typeof canToggleSpeed == "function") {
                                canToggleSpeed(e.data.boo)
                            }
                            break;
                        case"documentReady":
                            document.getElementById(c).addEventListener("touchend", function (e) {
                                A("touchEnd", d)
                            }, false);
                            if (m != "") {
                                A("j2s_openDanmu", d, m)
                            }
                            break;
                        case"normalScreen":
                            if (s.s2j_onNormalScreen) {
                                s.s2j_onNormalScreen()
                            }
                            if (typeof s2j_onNormalScreen == "function") {
                                s2j_onNormalScreen(d)
                            }
                            break;
                        case"fullScreen":
                            if (s.s2j_onFullScreen) {
                                s.s2j_onFullScreen()
                            }
                            if (typeof s2j_onFullScreen == "function") {
                                s2j_onFullScreen(d)
                            }
                            break;
                        case"updateLiveStatus":
                            if (s.updateLiveStatus) {
                                s.updateLiveStatus(e.data.status)
                            }
                            if (typeof updateLiveStatus == "function") {
                                updateLiveStatus(e.data.status)
                            }
                            break;
                        case"logoHref":
                            window.open(e.data.href, "_blank");
                            break
                    }
                }
            }, false);
            window.addEventListener("onorientationchange"in window ? "orientationchange" : "resize", function () {
                setTimeout(function () {
                    A("adjust", d)
                }, 50)
            }, false);
            var C = document.getElementById(c);

            function A(e, t, n) {
                if (!arguments[2])n = 0;
                if (C == null || C == undefined) {
                    return
                }
                C.contentWindow.postMessage({value: e, vid: t, param1: n}, o)
            }

            return s
        } else if (t.forceH5 == true && e.isSupportHTML5) {
            var k = {
                on: function () {
                    return
                }
            };
            if (window.polyvPlayer) {
                return e.createH5Player(n, t)
            } else {
                e.getScript(e.h5Script, function () {
                    e.extend(k, e.createH5Player(n, t))
                })
            }
            return k
        } else {
            if (t.vid && t.previewMode) {
                t.vid = e.decode(t.vid)
            }
            return privateCreate(n, t)
        }
    };
    createPlayer = function (t) {
        if (t.ban_ui == true || t.ban_ui == "on") {
            t.hidecontrol = "true";
            if (e.isIOS()) {
                e("head").append(e.getIosCss())
            }
            return privateCreate(this, t)
        } else {
            return createShowPlayer(t, this)
        }
    };
    privateCreate = function (t, n) {
        var i;
        var r;
        var a = "http://";
        if (window.location.protocol == "https:") {
            a = "https://"
        }
        var o = ["//player.polyv.net", "//v3.polyv.net"];
        var s;
        setCookie = function (e, t, n) {
            var i = new Date;
            i.setTime(i.getTime() + n * 24 * 60 * 60 * 1e3);
            var r = "expires=" + i.toGMTString();
            document.cookie = e + "=" + t + "; " + r
        };
        getCookie = function (e) {
            var t = document.cookie.split(";");
            for (var n = 0; n < t.length; n++) {
                t[n] = t[n].replace(/(^\s*)|(\s*$)/g, "");
                var i = t[n].split("=");
                if (e == i[0]) {
                    return i[1]
                }
            }
            return null
        };
        delLastCookie = function () {
            var e = document.cookie.split(";");
            var t = e[e.length - 1];
            var n = t[0];
            var i = new Date;
            i.setTime(i.getTime() - 1e4);
            var r = getCookie(n);
            if (r != null) {
                document.cookie = n + "=" + r + ";expires=" + i.toGMTString()
            }
        };
        e.renderInstallGif = function (e, t) {
            if (w.height == 0) {
                l()
            } else {
                u()
            }
        };
        function l() {
            w.width = String(w.width);
            var e = function (e) {
                w.ratio = e.ratio;
                if (w.width.charAt(w.width.length - 1) == "%") {
                    var t = window.innerWidth > 0 ? window.innerWidth : screen.width;
                    w.height = t * (parseInt(w.width) / 100) / e.ratio
                } else {
                    w.height = w.width / e.ratio
                }
                u()
            };
            var t = function () {
                if (h == 0) {
                    h++;
                    l()
                }
            };
            g(e, t)
        }

        function u() {
            var n = "";
            if (S == e.playerType.INSTALLER) {
                n = "//player.polyv.net/script/images/install_flash_player.png"
            } else {
                n = "//player.polyv.net/script/images/upgrade_flash_player.png"
            }
            var i = e("<div />");
            i.attr("id", "plInstall").css({
                width: w.width,
                height: w.height,
                "background-image": "url(" + n + ")",
                "background-size": "contain",
                "background-position": "50%",
                "background-repeat": "no-repeat",
                cursor: "pointer",
                "background-color": "#212121"
            });
            t.append(i);
            var r = "//www.adobe.com/go/getflash/";
            i.bind("click", function () {
                window.open(r, "_blank")
            })
        }

        e.launchFullScreen = function (e) {
            if (e.requestFullScreen) {
                e.requestFullScreen()
            } else if (e.mozRequestFullScreen) {
                e.mozRequestFullScreen()
            } else if (e.webkitRequestFullScreen) {
                e.webkitRequestFullScreen()
            }
            e.webkitEnterFullscreen()
        };
        e.makeFlashPlayer = function (t, n) {
            var i = e.isSupportedHTMLDevice();
            n.swf_link = "//" + n.domain + "/videos/player.swf";
            if (!n.flashvars) {
                n.flashvars = {}
            }
            n.flashvars.vid = n.vid;
            if (n.df) {
                n.flashvars.df = n.df
            }
            if (n.watch_start_time) {
                n.flashvars.watch_start_time = n.watch_start_time
            }
            if (n.watch_end_time) {
                n.flashvars.watch_end_time = n.watch_end_time
            }
            if (n.show_rate) {
                n.flashvars.show_rate = n.show_rate
            }
            if (n.teaser_time) {
                n.flashvars.teaser_time = n.teaser_time
            }
            if (n.code) {
                n.flashvars.code = n.code
            }
            if (n.start) {
                n.flashvars.start = n.start
            }
            if (n.end) {
                n.flashvars.end = n.end
            }
            if (n.ban_ad) {
                if (n.ban_ad == true) {
                    n.ban_ad = "on"
                }
                n.flashvars.ban_ad = n.ban_ad
            }
            if (n.ban_ad_time) {
                if (n.ban_ad_time == true) {
                    n.ban_ad_time = "on"
                }
                n.flashvars.ban_ad_time = n.ban_ad_time
            }
            if (n.showHd == false) {
                n.showHd = "off";
                n.flashvars.showHd = n.showHd
            }
            if (n.showHd == "off") {
                n.flashvars.showHd = n.showHd
            }
            if (n.ban_skin_progress) {
                if (n.ban_skin_progress == true) {
                    n.ban_skin_progress = "on"
                }
                n.flashvars.ban_skin_progress = n.ban_skin_progress
            }
            if (n.teaserSkip) {
                n.flashvars.teaserSkip = n.teaserSkip
            }
            if (n.ban_skin_leftright_keyboard) {
                n.flashvars.ban_skin_leftright_keyboard = n.ban_skin_leftright_keyboard
            }
            if (n.loading_bg_img) {
                n.flashvars.cover_img = n.loading_bg_img
            }
            if (n.is_access_validurl) {
                n.flashvars.is_access_validurl = n.is_access_validurl
            }
            if (n.verification_data) {
                n.flashvars.verification_data = n.verification_data
            }
            if (n.showSrt) {
                if (n.showSrt == false) {
                    n.showSrt = "off"
                }
                n.flashvars.showSrt = n.showSrt
            }
            if (n.listid) {
                n.flashvars.listid = n.listid
            }
            if (n.ban_ui) {
                if (n.ban_ui == true) {
                    n.ban_ui = "on"
                }
                n.flashvars.ban_ui = n.ban_ui
            }
            if (n.autoplay && n.autoplay == true) {
                n.flashvars.autoplay = 1
            }
            if (n.autoplay && n.autoplay == false) {
                n.flashvars.autoplay = 0
            }
            if (n.previewMode === true) {
                n.flashvars.isPreviewMode = "on"
            }
            if (i) {
                n.flashvars.banSaveSegData = "on"
            }
            for (var r in n.params) {
                n.flashvars[r] = n.params[r]
            }
            if (n.session_id) {
                n.flashvars.session_id = n.session_id
            }
            if (n.liveVid) {
                n.flashvars.liveVid = n.liveVid
            }
            if (n.liveUid) {
                n.flashvars.liveUid = n.liveUid
            }
            if (n.vrdomain) {
                n.flashvars.vrMode = "on"
            }
            if (n.useH5 && n.useH5 == true) {
                if (e.isSupportHTML5) {
                    n.flashvars.skin_type = "skin_blue";
                    n.flashvars.ban_set_player = "off"
                }
            }
            if (n.adSkip === true) {
                n.flashvars.adSkip = "on"
            }
            if (n.adMatter) {
                var a = "[";
                for (var o = 0; o < n.adMatter.length; o++) {
                    a += JSON.stringify(n.adMatter[o]);
                    if (o != n.adMatter.length - 1) {
                        a += ","
                    }
                }
                a += "]";
                n.flashvars.adMatter = a
            }
            if (n.teaser_url) {
                n.flashvars.teaser_url = n.teaser_url
            }
            if (n.liveStreamName) {
                n.flashvars.name = n.liveStreamName
            }
            if (n.validHead) {
                n.flashvars.validHead = JSON.stringify(n.validHead)
            }
            if (n.preload === true) {
                n.flashvars.preload = "on"
            }
            if (e.isWinXP() && e.isIEVersion(8)) {
                n.flashvars.is_xp_ie8 = 1
            }
            c(t, n);
            d(t, n);
            window.initFlash = function (t) {
                e["init" + t] = true;
                n.hasPlayer = true
            };
            f()
        };
        function d(t, n) {
            var i = n.width, r = n.height;
            if (n.isBanByChrome) {
                i = 400;
                r = 400
            }
            var a = "";
            for (var o in n.flashvars) {
                a = a + o + "=" + n.flashvars[o] + "&"
            }
            for (var s in n.params) {
                n.flashvars[s] = n.params[s]
            }
            if (e.isIE()) {
                n.flashParams.movie = n.swf_link;
                var l = "";
                l += '<param name="flashvars" value="' + a + '" />';
                for (var u in n.flashParams) {
                    l += '<param name="' + u + '" value="' + n.flashParams[u] + '" />'
                }
                var d = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="' + n.vid + '"' + ' width="' + i + '"' + ' height="' + r + '"' + ' type="application/x-shockwave-flash"' + ' class="polyvFlashObject">' + l + "</object>";
                t.html(d)
            } else {
                var c = document.createElement("object");
                c.type = "application/x-shockwave-flash";
                c.data = n.swf_link;
                c.id = n.vid;
                c.width = i;
                c.height = r;
                c.className = "polyvFlashObject";
                n.flashParams.flashvars = a;
                var f;
                for (var p in n.flashParams) {
                    f = document.createElement("param");
                    f.name = p;
                    f.value = n.flashParams[p];
                    c.appendChild(f)
                }
                t.html(c)
            }
            n.s2j_onJsInitOver = false;
            e["setH" + n.vid] = function () {
                n.s2j_onJsInitOver = true;
                if (n.isBanByChrome || n.heightInitZero) {
                    if (n.forceHeight && n.forceHeight != "undefined") {
                        n.height = n.forceHeight
                    }
                    e.getPlayer(n.vid).setAttribute("height", n.height);
                    e.getPlayer(n.vid).setAttribute("width", n.width)
                }
            };
            window.s2j_onJsInitOver = function (t) {
                if (e["setH" + t]) {
                    e["setH" + t]()
                }
            }
        }

        function c(e, t) {
            var n = String(t.width), i = String(t.height);
            if (n.charAt(n.length - 1) == "%") {
                n = e.width() * (n.split("%")[0] / 100)
            }
            if (i.charAt(i.length - 1) == "%") {
                i = e.height() * (i.split("%")[0] / 100)
            }
            if (parseInt(n) < 400 || parseInt(i) < 400 && i != 1) {
                t.isBanByChrome = true
            }
        }

        function f() {
            e["checkInit" + w.vid] = function () {
                setTimeout(function () {
                    if (!e["init" + w.vid]) {
                        w.swf_link = "//players.polyv.net/videos/player.swf";
                        d(t, w);
                        setTimeout(function () {
                            if (!e["init" + w.vid]) {
                                p(t, w)
                            }
                        }, 2e4);
                        if (typeof reCreateFlash == "function") {
                            reCreateFlash(w.vid)
                        }
                    }
                }, 2e4)
            }()
        }

        function p(e, t) {
        }

        e.renderFlash = function (t, n) {
            if (n.height == 0) {
                n.heightInitZero = true;
                n.height = 1;
                e.makeFlashPlayer(t, n);
                v(t, n)
            } else {
                e.makeFlashPlayer(t, n)
            }
        };
        var h = 0;

        function v() {
            w.width = String(w.width);
            var t = function (t) {
                w.ratio = t.ratio;
                if (w.width.charAt(w.width.length - 1) == "%") {
                    var n = window.innerWidth > 0 ? window.innerWidth : screen.width;
                    w.height = n * (parseInt(w.width) / 100) / t.ratio
                } else {
                    w.height = w.width / t.ratio
                }
                if (w.s2j_onJsInitOver) {
                    e(e.getPlayer(w.vid)).attr("height", parseInt(w.height))
                } else {
                    w.forceHeight = w.height
                }
            };
            var n = function () {
                if (h == 0) {
                    h++;
                    v()
                }
            };
            g(t, n)
        }

        function g(t, n) {
            if (w.getBase64) {
                m(t, n)
            } else {
                var i = "//player.polyv.net/script/js/base64.js";
                e.getScript(i, function () {
                    w.getBase64 = true;
                    m(t, n)
                })
            }
        }

        function m(t, n) {
            if (!w.hasAes) {
                var i = "//player.polyv.net/script/js/ajs.js";
                e.getScript(i, function () {
                    w.hasAes = true;
                    y(t, n)
                })
            } else {
                y(t, n)
            }
        }

        function y(t, n) {
            var i = o[h] + "/videojson/" + w.vid + ".json";
            if (!arguments[1]) {
                arguments[1] = function () {
                }
            }
            e.getJSON(i, function (n) {
                var i = CryptoJS.MD5(w.vid) + "";
                var r = aesjs.utils.hex.toBytes(n.body);
                var a = new aesjs.ModeOfOperation.cbc(e.stringToBytes(i.substr(0, 16)), e.stringToBytes(i.substr(16, 32)));
                var o = a.decrypt(r);
                var s = aesjs.utils.utf8.fromBytes(o);
                var l = Base64.decode(s);
                var u = JSON.parse(l);
                t(u)
            }).error(function () {
                n()
            })
        }

        e.languageParser = {
            validFail: "%E7%B3%BB%E7%BB%9F%E9%94%99%E8%AF%AF%EF%BC%8C%E8%AF%B7%E7%A8%8D%E5%90%8E%E5%86%8D%E8%AF%95%EF%BC%81%3Cbr%2F%3ETry%20again%20later!",
            videoFail: "%E5%BE%88%E6%8A%B1%E6%AD%89%2C%E4%B8%8D%E8%83%BD%E6%92%AD%E6%94%BE%E6%9C%AC%E8%A7%86%E9%A2%91%3C%2Fbr%3E%3Cp%3ESorry%2Cthis%20video%20is%20not%20available.%3C%2Fp%3E",
            webVideoFail: "%E8%A7%86%E9%A2%91%E6%9A%82%E6%97%B6%E6%97%A0%E6%B3%95%E6%92%AD%E6%94%BE%2C%E8%AF%B7%E7%A8%8D%E5%90%8E%E5%88%B7%E6%96%B0%E9%87%8D%E8%AF%95%3C%2Fbr%3E%3Cp%3ESorry%2Cthis%20video%20is%20not%20available%3C%2Fbr%3Eplease%20try%20again%20later.%3C%2Fp%3E",
            passwordChecking: "%E6%AD%A3%E5%9C%A8%E6%8F%90%E4%BA%A4%2C%E8%AF%B7%E7%A8%8D%E5%90%8E",
            passwordFail: "%E8%AF%B7%E5%A1%AB%E5%86%99%E6%AD%A3%E7%A1%AE%E7%9A%84%E5%AF%86%E7%A0%81%EF%BC%81",
            errorMsg: "%E5%BE%88%E6%8A%B1%E6%AD%89%2C%E8%AF%A5%E8%A7%86%E9%A2%91%E6%9A%82%E6%97%B6%E6%97%A0%E6%B3%95%E6%92%AD%E6%94%BE",
            errorMsg2: "%E8%AF%B7%E8%81%94%E7%B3%BB%E7%BD%91%E7%AB%99%E7%AE%A1%E7%90%86%E5%91%98",
            error: "%E5%BD%93%E5%89%8D%E8%A7%86%E9%A2%91%E6%97%A0%E6%B3%95%E6%92%AD%E6%94%BE%EF%BC%8C%E8%AF%B7%E5%90%91%E7%AE%A1%E7%90%86%E5%91%98%E5%8F%8D%E9%A6%88",
            error2: "%E8%A7%86%E9%A2%91%E6%9A%82%E6%97%B6%E6%97%A0%E6%B3%95%E6%92%AD%E6%94%BE%EF%BC%8C%E8%AF%B7%E7%A8%8D%E5%90%8E%E5%88%B7%E6%96%B0%E9%87%8D%E8%AF%95",
            error3: "%E8%AF%A5%E8%A7%86%E9%A2%91%E6%AD%A3%E5%9C%A8%E5%AE%A1%E6%A0%B8%E4%B8%AD%EF%BC%8C%E8%AF%B7%E7%A8%8D%E5%90%8E%E5%86%8D%E8%AF%95",
            browChange: "%E8%AF%B7%E5%88%87%E6%8D%A2%E5%85%B6%E4%BB%96%E6%B5%8F%E8%A7%88%E5%99%A8%E8%A7%82%E7%9C%8B%E8%A7%86%E9%A2%91%20%3Cbr%2F%3ETry%20another%20browser",
            ucBrowChange: "%E4%B8%8D%E6%94%AF%E6%8C%81%E8%AF%A5%E6%B5%8F%E8%A7%88%E5%99%A8%E6%92%AD%E6%94%BE",
            userInfoThanks: "%E6%84%9F%E8%B0%A2%E6%82%A8%E7%9A%84%E5%A1%AB%E5%86%99%EF%BC%81",
            userInfoFillFull: "%E8%AF%B7%E6%8A%8A%E8%B5%84%E6%96%99%E6%AD%A3%E7%A1%AE%E5%A1%AB%E5%86%99%E5%AE%8C%E6%95%B4",
            userInfoTel: "%E8%AF%B7%E5%A1%AB%E5%86%99%E6%AD%A3%E7%A1%AE%E7%9A%84%E6%89%8B%E6%9C%BA%E5%8F%B7%E7%A0%81",
            userInfoMail: "%E8%AF%B7%E5%A1%AB%E5%86%99%E7%9C%9F%E5%AE%9E%E9%82%AE%E7%AE%B1"
        };
        e.updatePlayFacade = {
            initVideoJson: function () {
                s = 0;
                w.pid = e.getPid();
                w.jsonUrl = o[s] + "/videojson/" + w.vid + ".json?pid=" + w.pid;
                if (w.vjsonUrl)w.jsonUrl = w.vjsonUrl;
                w.uid = w.vid.substr(0, 10);
                if (!w.code) {
                    w.code = ""
                }
                if (w.teaser_time) {
                    w.teaser_time_set = w.teaser_time
                } else {
                    w.teaser_time = w.teaser_time_set = -1
                }
                P()
            }, initChangeVideo: function (n, i, r, a, o) {
                if (!arguments[2]) {
                    r = "on"
                }
                if (r == "off") {
                    w.stopAutoAfterChange = true
                } else {
                    w.stopAutoAfterChange = false
                }
                if (e.flowStatus == e.FLOW_STATUS.PREAD || e.flowStatus == e.FLOW_STATUS.ENDAD) {
                    w.stopAd()
                }
                w.isChangeVid = true;
                w.vid = n;
                w.uid = n.substr(0, 10);
                w.watchStartTimeRecord = i;
                w.hasValided = false;
                w.isSendOnPlay = false;
                w.hasSortVideo = false;
                if (arguments[3] && arguments[4]) {
                    w.ts = arguments[3];
                    w.sign = arguments[4]
                }
                this.initVideoJson();
                if (w.isClickPlayButton == "off") {
                    e("#playbutton").remove()
                }
                e(t).css("display", "block");
                e(".error").css("display", "none")
            }, changeVidStep: {
                playVideo: function () {
                    if (!!w.isChangeVid) {
                        w.taser_show = 0;
                        w.adList = [];
                        var n;
                        if (w.validUrl2.length > 0 && w.is_access_validurl == "on") {
                            de()
                        } else {
                            X(n, e(w.video)[0])
                        }
                    } else {
                        ue(t)
                    }
                }, initData: function () {
                    if (!!w.isChangeVid) {
                        w.isChangeVid = false;
                        w.hasSendLoadingStat = false;
                        w.hasSendSecondBuffer = false;
                        w.hasSendError = false;
                        if (w.watchStartTimeRecord > 0) {
                            w.watchStartTime = w.watchStartTimeRecord;
                            w.watchStartTimeRecord = 0
                        }
                        if (typeof initChangeVid == "function") {
                            initChangeVid(w.vid)
                        }
                    }
                }, valided: function () {
                    if (!w.hasValided) {
                        w.hasValided = true;
                        if (!!w.isChangeVid) {
                            var t;
                            X(t, e(w.video)[0])
                        } else {
                            e.updatePlayFacade.initPassword()
                        }
                    }
                }
            }, startVlidurl: function () {
                if (w.validUrl2.length > 0 && w.is_access_validurl == "on") {
                    de()
                } else {
                    this.initPassword()
                }
            }, initPassword: function () {
                if (w.usepassword != "true" || w.banpassword == true) {
                    this.startPlay()
                } else {
                    fe()
                }
            }, passworded: function (t) {
                if (t) {
                    if (typeof addPassword == "function") {
                        addPassword(false)
                    }
                    w.autoplay = true;
                    this.startPlay()
                } else {
                    if (typeof addPasswordTips == "function") {
                        addPasswordTips(decodeURIComponent(e.languageParser.passwordFail))
                    }
                }
            }, startPlay: function () {
                he(w.polyvObjectdiv, w.div);
                _e(w.polyvObjectthis, w.polyvObjectdiv, w.imageUrl)
            }, startPreAd: function (e, t) {
                L(e, t, "pre")
            }, startUserInfo: function () {
                if (!w.banAUserInfo && e.isAndroid() && w.userInfoRecord && (!z("autokey" + w.userInfoRecord.autokey) || w.forceUserInfo) && w.hasUserInfoRecord && !w.banVisitorInfo && !w.visitorPass) {
                    U()
                } else {
                    this.startPreAd(w.div, w.video)
                }
            }, preAdComplete: function () {
                if (!w.preadComplete) {
                    if (w.video) {
                        w.video.pause()
                    }
                    e(w.video).css("display", "none");
                    e(w.o).css("background-image", "");
                    w.preadComplete = true;
                    O(w.polyvObjectdiv, w.polyvObjectvideo)
                }
            }, teaserComplete: function () {
                if (!w.teaserComplete) {
                    e(w.polyvObjectdiv).css("background-image", 'url("")');
                    e(w.video).css("display", "block");
                    w.teaserComplete = true;
                    X(w.o, w.video)
                }
            }, videoComplete: function () {
                if (w.videoList.length > 1 && w.playNextIndex < w.videoList.length - 1) {
                    w.playNext()
                } else {
                    e(w.video).css("display", "none");
                    L(w.div, w.video, "end")
                }
            }, endAdComplete: function () {
                w.video.pause();
                e(w.video).css("display", "none");
                if (!w.audioBack) {
                    e(w.div).css("background-image", "")
                }
                e.isEndOnce = true;
                e.updateFlowStatus(e.FLOW_STATUS.OVER)
            }, onPlayStart: function () {
                if (typeof s2j_onPlayStart == "function") {
                    s2j_onPlayStart()
                }
                if (typeof s2j_onVideoPlay == "function") {
                    s2j_onVideoPlay()
                }
                if (w.s2j_onPlayStart) {
                    w.s2j_onPlayStart()
                }
            }, onPlay: function () {
                if (!w.audioBack) {
                    w.polyvObjectdiv.css({"background-image": "", "background-color": "#212121"})
                }
                if (w.s2j_onVideoPlay) {
                    w.s2j_onVideoPlay()
                }
                if (typeof s2j_onVideoPlay == "function") {
                    s2j_onVideoPlay()
                }
                if (e.haveDanmu) {
                    e.haveDanmu = false;
                    $()
                }
                if (e.startDanmu) {
                    e.cmManager.startTimer()
                }
                if (e.recordTime > 0) {
                    video.currentTime = e.recordTime;
                    e.recordTime = 0
                }
            }, onEnd: function () {
                e.updatePlayFacade.stopCountTimer();
                if (w.s2j_onPlayOver) {
                    w.s2j_onPlayOver()
                }
                if (typeof s2j_onPlayOver == "function") {
                    s2j_onPlayOver()
                }
                e.updatePlayFacade.videoComplete();
                if (e.startDanmu) {
                    e.cmManager.clear()
                }
            }, onSwitchHd: function () {
                if (w.s2j_onSwitchHd) {
                    w.s2j_onSwitchHd(w.playNum)
                }
                if (typeof s2j_onSwitchHd == "function") {
                    s2j_onSwitchHd(w.playNum)
                }
            }, onOverPlay: function () {
                if (w.s2j_onOverPlay) {
                    w.s2j_onOverPlay(w.overPlayType, w.overPlaySec)
                }
                if (typeof s2j_onOverPlay == "function") {
                    s2j_onOverPlay(w.overPlayType, w.overPlaySec)
                }
            }, startCountTimer: function () {
                w.isCounting = true;
                if (r) {
                    clearInterval(r)
                }
                r = setInterval(function () {
                    ie()
                }, 1e3);
                if (i) {
                    clearInterval(i)
                }
                i = setInterval(function () {
                    if (w.isSendLiveStat) {
                        re()
                    } else {
                        oe()
                    }
                }, 1e4)
            }, stopCountTimer: function () {
                clearInterval(r);
                clearInterval(i);
                w.isCounting = false
            }
        };
        if (!e.domain) {
            e.domain = document.domain
        }
        containInHost = function (t) {
            var n = t.split(",");
            for (var i = 0; i < n.length; i++) {
                if (n[i].length > 0 && e.domain.indexOf(n[i]) != -1) {
                    return true
                }
            }
            return false
        };
        var w = {
            flashParams: {
                allowScriptAccess: "always",
                allowFullScreen: "true",
                quality: "high",
                bgcolor: "#ffffff",
                allowFullScreen: "true",
                wmode: "transparent"
            },
            playerWidth: "1.0",
            allowfullscreen: "true",
            domain: "player.polyv.net",
            allowscriptaccess: "always",
            wmode: "Transparent",
            loading_bg_img: "",
            df: 0,
            flashvars: {},
            params: {},
            start: -1,
            end: -1,
            autoplay: false,
            is_auto_replay: "off",
            width: 600,
            height: 480,
            stay_duration: 0,
            ts: "",
            sign: "",
            j2s_getCurrentTime: function () {
                return 0
            },
            j2s_getDuration: function () {
                return 0
            },
            j2s_resumeVideo: function () {
            },
            j2s_pauseVideo: function () {
            },
            j2s_stopVideo: function () {
            },
            j2s_seekVideo: function () {
            },
            j2s_getVideo: function () {
            },
            j2s_stayInVideoTime: function () {
                return 0
            },
            videoClass: "plvideo"
        };
        w.isClickPlayButton = "off";
        w.hasSendInitOver = "off";
        w.showHd = "on";
        w.media = "video";
        if (!!n.audioBack) {
            n.useAudio = true
        }
        if (!!n.useAudio) {
            w.media = "audio"
        }
        if (n) {
            e.extend(w, n)
        }
        if (!w.vid) {
            return
        }
        var b = e.checkLowerDevice();
        var _ = e.checkFlashSupport();
        var x = e.checkHtmlSupport();
        var S = e.determinePlayerType(w, _, x);
        if (S == e.playerType.NO_SUPPORT || S == e.playerType.INSTALLER) {
            e.renderInstallGif(t, S);
            e(window).trigger("noSupportFlash", {type: S});
            return
        }
        if (S == e.playerType.FLASH) {
            e.renderFlash(t, w);
            if (w.s2j_onPlayStart) {
                s2j_onPlayStart = w.s2j_onPlayStart
            }
            if (w.s2j_onPlayOver) {
                s2j_onPlayOver = w.s2j_onPlayOver
            }
            if (w.s2j_onVideoPlay) {
                s2j_onVideoPlay = w.s2j_onVideoPlay
            }
            if (w.s2j_onVideoPause) {
                s2j_onVideoPause = w.s2j_onVideoPause
            }
            if (w.s2j_onPlayerInitOver) {
                s2j_onPlayerInitOver = w.s2j_onPlayerInitOver
            }
            if (w.s2j_focusComment) {
                s2j_focusComment = w.s2j_focusComment
            }
            if (w.s2j_onSwitchHd) {
                s2j_onSwitchHd = w.s2j_onSwitchHd
            }
            s2j_getPreviewMode = function () {
                if (w.previewMode == true) {
                    return 1
                }
            };
            s2j_onChangeHTML5Player = function (i) {
                if (window.polyvPlayer) {
                    if (e["toHTML5" + i]) {
                        w.H5 = e["toHTML5" + i](n)
                    } else {
                        w.H5 = e.createH5Player(t, w);
                        t.trigger("changeH5Success")
                    }
                } else {
                    e.getScript(e.h5Script, function () {
                        w.H5 = e.createH5Player(t, w);
                        t.trigger("changeH5Success")
                    })
                }
            };
            w.flashplayer = e.getPlayer(w.vid);
            w.flashplayer.on = function (e, n) {
                if (e == "changeH5Success") {
                    t.on("changeH5Success", function () {
                        n(w.H5)
                    })
                }
            };
            return w.flashplayer
        }
        var T = "";
        if (w.beta_test == "on") {
            if (w.jsonUrl) {
                w.vjsonUrl = w.jsonUrl
            }
        }
        w.route = ["ws", "kw"];
        w.mp4route = ["mpv.videocc.net", "cdn.freeovp.com"];
        if (!w.cdn) {
            w.cdn = 0
        }
        if (!w.showLine) {
            w.showLine = "on"
        }
        if (w.autoplay) {
            var E = navigator.userAgent, j = E.match(/Chrome\/([\d.]+)/) || E.match(/CriOS\/([\d.]+)/), C = !j && E.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/), A = C || E.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
            if (e.isIOS() && (E.indexOf("Safari") != -1 || E.indexOf("MQQBrowser") != -1) || E.indexOf("baidubrowser") != -1 || E.indexOf("UCBrowser") != -1) {
                w.autoplay = false
            }
            if (e.isIOS() && e.isWeixin() && E.split("MicroMessenger")[1].split(" ")[0].substr(1) > "6.5") {
                w.autoplay = false
            }
            if (e.isAndroid() && E.indexOf("Chrome") != -1 && !(j && A)) {
                w.autoplay = false
            }
        }
        if (w.audioControl) {
            w.autoplay = true
        }
        e.updatePlayFacade.initVideoJson();
        if (w.liveStreamName) {
            ae();
            setInterval(function () {
                ae()
            }, 6e3)
        }
        function k() {
            if (!w.hasAes) {
                var t = "//player.polyv.net/script/js/ajs.js";
                e.getScript(t, function () {
                    w.hasAes = true;
                    I()
                })
            } else {
                I()
            }
        }

        function P() {
            if (w.getBase64) {
                k()
            } else {
                var t = "//player.polyv.net/script/js/base64.js";
                e.getScript(t, function () {
                    w.getBase64 = true;
                    k()
                })
            }
        }

        function I() {
            e.getJSON(w.jsonUrl, function (t) {
                var n = CryptoJS.MD5(w.vid) + "";
                var i = aesjs.utils.hex.toBytes(t.body);
                var r = new aesjs.ModeOfOperation.cbc(e.stringToBytes(n.substr(0, 16)), e.stringToBytes(n.substr(16, 32)));
                var a = r.decrypt(i);
                var o = aesjs.utils.utf8.fromBytes(a);
                var s = Base64.decode(o);
                var l = JSON.parse(s);
                var u = true;
                w.errorCode = "";
                if (l.outflow == "false" && l.timeoutflow == "false") {
                    u = false
                } else {
                    if (l.outflow == "true") {
                        w.errorCode = "002"
                    }
                    if (l.timeoutflow == "true") {
                        w.errorCode = "001"
                    }
                }
                T = l.hash;
                if (l.setting_type == 1 && containInHost(l.disable_host)) {
                    u = true;
                    w.domainWhiteBlackError = true;
                    w.errorCode = "006"
                }
                if (l.setting_type == 2 && !containInHost(l.enable_host) && (e.domain.indexOf("polyv.net") == -1 && e.domain.indexOf("polyv.cn") == -1)) {
                    u = true;
                    w.domainWhiteBlackError = true;
                    w.errorCode = "006"
                }
                w.outdate = u;
                w.title = l.title;
                if (l.player) {
                    w.zColor = l.player.zColor;
                    w.skincolor = l.player.skincolor;
                    w.pColor = l.player.pColor
                }
                w.videolink = l.videolink;
                w.my_br = l.my_br;
                w.flv = l.flv;
                w.mp4 = l.mp4;
                for (var d = 0; d < l.mp4.length; d++) {
                    if (l.mp4[d].indexOf("cuplayer") > -1) {
                        var c = we("");
                        w.showLine = "off";
                        break
                    }
                }
                w.hls = l.hls;
                w.hlsLevel = l.hlsLevel;
                w.df_num = l.df_num;
                w.hlsIndex = l.hlsIndex;
                w.hls2 = l.hls2;
                w.hlsIndex2 = l.hlsIndex2;
                w.hlsIndex_15x = l.hls_15x_Index;
                w.hls_15x = l.hls_15x;
                w.playbackrate = 1;
                w.duration = l.duration;
                w.teaser_show = l.teaser_show;
                if (l.player.teaser_show) {
                    w.teaser_show = l.player.teaser_show
                }
                if (w.teaser_url) {
                    w.teaser_show = 1;
                    l.teaser_url = l.player.teaser_url = w.teaser_url
                }
                w.teaser_url = l.teaser_url;
                if (l.player.teaser_url) {
                    w.teaser_url = l.player.teaser_url
                }
                w.adList = l.adMatter.reverse();
                w.catatree = l.catatree;
                w.cataid = l.cataid;
                if (w.adMatter) {
                    w.catatree = "1";
                    w.cataid = 1;
                    w.adList = w.adMatter;
                    for (var d = 0; d < w.adList.length; d++) {
                        w.adList[d].cataid = 1
                    }
                }
                w.adsetting = l.adsetting == "true" ? "true" : "false";
                w.weburl = l.weburl;
                w.logoloca = l.player.logoloca;
                w.logo_url = l.player.logo_url;
                w.logo_location = l.player.logo_location;
                w.fileSize = l.filesize;
                w.validUrl2 = l.validUrl2;
                w.hls302 = l.hls302;
                if (w.hls302 === "1") {
                    w.hlsIndex = w.hlsIndex2;
                    w.hls = w.hls2
                }
                w.play_source_url = l.play_source_url;
                w.keepsource = l.keepsource;
                if (w.keepsource === "1") {
                    w.useKeepSource = true;
                    w.seed = 1;
                    w.mp4 = [];
                    w.hlsIndex = "";
                    w.showHd = "off";
                    w.showLine = "off"
                } else {
                    w.useKeepSource = false
                }
                w.userInfoRecord = l.userInfoRecord;
                w.hasUserInfoRecord = false;
                if (w.userInfoRecord && w.userInfoRecord.fields.length > 0) {
                    w.hasUserInfoRecord = true;
                    var f = String(w.userInfoRecord.time).split(":");
                    w.userInfoShowTime = parseInt(f[0]) * 60 + parseInt(f[1]);
                    if (String(w.userInfoRecord.time).indexOf(":") == -1) {
                        w.userInfoShowTime = parseInt(w.userInfoRecord.time)
                    }
                }
                if (w.verification_data) {
                    w.validUrl2 = w.verification_data
                }
                w.srt_list = [];
                for (var p in l.video_srt) {
                    var h = [];
                    h.push(p);
                    var v = l.video_srt[p];
                    v = v.indexOf("http:") > -1 ? v.replace("http:", "") : v.replace("https:", "");
                    h.push(v);
                    w.srt_list.push(h)
                }
                w.srt_list.reverse();
                w.srt_index = 0;
                w.show_srt = true;
                if (w.showSrt == "off" || w.showSrt == false) {
                    w.show_srt = false
                }
                if (w.teaser_time == -1) {
                    w.teaser_time = l.teaser_time != "" ? l.teaser_time : 1;
                    if (l.player.teaser_time) {
                        w.teaser_time = l.player.teaser_time
                    }
                    if (l.teaser_time == "") {
                        w.teaserShowAll = true
                    } else {
                        w.teaserShowAll = false
                    }
                } else {
                    w.teaser_time = w.teaser_time_set > 0 ? w.teaser_time_set : 1;
                    w.teaserShowAll = false
                }
                if (typeof w.preload == "undefined") {
                    if (l.preload == "true") {
                        w.preload = true
                    }
                }
                if (w.skinColor) {
                    if (typeof changeSkinColor == "function") {
                        changeSkinColor(w.skinColor)
                    }
                }
                if (w.is_access_validurl != "off") {
                    w.is_access_validurl = "on"
                } else {
                    w.is_access_validurl = "off"
                }
                if (w.showHd == true) {
                    w.showHd = "on"
                }
                if (w.liveVid && w.liveUid) {
                    w.isSendLiveStat = true;
                    w.outdate = false
                }
                w.j2s_getDuration = function () {
                    return w.duration
                };
                w.j2s_getJsonDuration = function () {
                    if (w.previewMode == true) {
                        return w.previewlong
                    } else if (w.start > 0 || w.end > 0) {
                        var e = l.duration;
                        if (w.start > 0 && w.end > 0) {
                            if (w.end > w.start) {
                                e = w.end - w.start
                            }
                        } else if (w.start > 0) {
                            e = l.duration - w.start
                        } else if (w.end > 0) {
                            if (w.end <= l.duration) {
                                e = w.end
                            }
                        }
                        return e
                    } else {
                        return l.duration
                    }
                };
                w.first_image = l.first_image;
                w.seed = l.seed;
                w.ratio = l.ratio;
                w.swf_link = l.swf_link;
                w.status = l.status;
                w.usepassword = l.usepassword;
                w.previewlong = l.previewDuration;
                if (!l.previewDuration) {
                    w.previewlong = 180
                }
                if (l.currentLine && l.currentLine == "kw") {
                    w.cdn = 1
                }
                w.firstToPlayTime = 0;
                e.isEndOnce = false;
                w.changeBrowser = w.seed == 1 && e.isFirefox() ? true : false;
                if (w.banHuaWei && (w.seed == 1 || w.forceHLS) && e.isHuaWei()) {
                    w.changeBrowser = true
                }
                if (w.banSAMSUNG && (w.seed == 1 || w.forceHLS) && e.isSAMSUNG()) {
                    w.changeBrowser = true
                }
                if (w.forceHLS && e.isFirefox()) {
                    w.changeBrowser = true
                }
                if (w.ts && w.sign && e.isAndroidQQ()) {
                    w.changeBrowser = true
                }
                if ((w.seed == 1 || w.forceHLS) && w.isBro && e.isBanBrowser()) {
                    w.changeBrowser = true
                }
                if (w.banBrowser) {
                    w.changeBrowser = true
                }
                if (l.status < 60) {
                    w.outdate = true;
                    var g = {};
                    g.name = "__onVxmlStatusError";
                    g.src = "";
                    e.getUrlStatus(g)
                }
                if (typeof canToggleSpeed == "function") {
                    if (w.hlsIndex_15x || w.hls_15x) {
                        canToggleSpeed(true)
                    } else {
                        canToggleSpeed(false)
                    }
                }
                if (typeof setRatio == "function") {
                    setRatio(w.ratio)
                }
                if (u) {
                    var g = {};
                    g.src = "";
                    if (w.domainWhiteBlackError) {
                        g.name = "__onDomainWhiteBlackCheckError"
                    }
                    if (l.outflow == "true") {
                        g.name = "__onUserWebSiteOutFlow"
                    }
                    if (l.timeoutflow == "true") {
                        g.name = "__onUserWebSiteTimeOut"
                    }
                    e.getUrlStatus(g)
                }
                e.updatePlayFacade.changeVidStep.playVideo()
            }).error(function () {
                if (s == 1) {
                    console.debug(" VIDEO JSON FAIL ");
                    var t = {};
                    t.pid = w.pid;
                    t.uid = w.uid;
                    t.vid = w.vid;
                    t.error = "load_videojson_failure";
                    t.type = "error";
                    t.href = e.href;
                    t.request_uri = w.jsonUrl;
                    t.response_code = 0;
                    se(t);
                    var n = {};
                    n.name = "__onXmlError";
                    n.src = w.jsonUrl;
                    e.getUrlStatus(n);
                    w.errorCode = "003";
                    xe()
                } else {
                    s = 1;
                    w.jsonUrl = o[s] + "/videojson/" + w.vid + ".json?pid=" + w.pid;
                    P()
                }
            })
        }

        function O(t, n) {
            if (w.teaserSkip) {
                if (typeof addTeaserSkip == "function") {
                    addTeaserSkip()
                }
            }
            e.updateFlowStatus(e.FLOW_STATUS.TEASER);
            if (w.teaser_url != "" && w.teaser_show == 1 && !w.ban_teaser) {
                var i = /\.[^\.]+$/.exec(w.teaser_url);
                if (i == ".png" || i == ".jpg" || i == ".gif") {
                    var r = false;
                    var a = new Image;
                    e(a).attr("src", w.teaser_url);
                    e(a).error(function () {
                        if (o) {
                            clearTimeout(o)
                        }
                        if (!r) {
                            r = true;
                            e.updatePlayFacade.teaserComplete()
                        }
                    });
                    t.css("background-image", "url(" + w.teaser_url + ")");
                    var o = setTimeout(function () {
                        if (w.teaser_show == 1) {
                            if (!r) {
                                r = true;
                                e.updatePlayFacade.teaserComplete()
                            }
                        }
                        clearTimeout(o)
                    }, w.teaser_time * 1e3)
                } else if (i == ".mp4") {
                    var r = false;
                    t.css("background-image", 'url("")');
                    n.attr("src", w.teaser_url);
                    n.css({width: "100%", height: "100%", display: "block"});
                    n[0].play();
                    var s = setInterval(function (t) {
                        if (n[0].error != null) {
                            if (e.flowStatus != e.FLOW_STATUS.PLAY) {
                                if (!r) {
                                    r = true;
                                    e.updatePlayFacade.teaserComplete()
                                }
                            }
                        }
                        clearInterval(s)
                    }, 500);
                    if (!w.teaserShowAll) {
                        var l = setTimeout(function (t) {
                            if (w.teaser_show == 1) {
                                if (!r) {
                                    r = true;
                                    e.updatePlayFacade.teaserComplete()
                                }
                            }
                            clearInterval(s);
                            clearTimeout(l)
                        }, w.teaser_time * 1e3)
                    }
                } else {
                    e.updatePlayFacade.teaserComplete()
                }
            } else {
                e.updatePlayFacade.teaserComplete()
            }
        }

        w.addrurl = "";
        w.adNow = [];
        function L(t, n, i) {
            if (!w.audioBack) {
                e(t).css("background-image", 'url("")')
            }
            e(n).css("display", "none");
            H();
            w.adIndex = 0;
            if (i == "pre") {
                e.updateFlowStatus(e.FLOW_STATUS.PREAD);
                if (w.ban_ad_time == "on" || w.ban_ad_time == true) {
                    if (w.banAdTime) {
                        w.banAdTime()
                    }
                }
                if (w.ban_ad == "on" || w.ban_ad == true || w.preAd.length == 0) {
                    e.updatePlayFacade.preAdComplete()
                } else {
                    if (w.preAd.length > 0) {
                        var r = 0;
                        for (var a = 0; a < w.preAd.length; a++) {
                            r += parseInt(w.preAd[a].timesize)
                        }
                        w.preAdTotalTime = r;
                        V(w.preAd, t, n, "pre");
                        if (w.showAdTotalTime) {
                            w.showAdTotalTime(w.preAdTotalTime)
                        }
                    } else {
                        e.updatePlayFacade.preAdComplete()
                    }
                }
            } else {
                e.updateFlowStatus(e.FLOW_STATUS.ENDAD);
                if (!!e.isEndOnce) {
                    e(t).css("background-image", "");
                    e.updateFlowStatus(e.FLOW_STATUS.OVER);
                    return
                }
                if (w.ban_ad_time == "on" || w.ban_ad_time == true) {
                    if (w.banAdTime) {
                        w.banAdTime()
                    }
                }
                if (w.ban_ad == "on" || w.ban_ad == true) {
                    e.updatePlayFacade.endAdComplete()
                } else {
                    if (w.endAd.length > 0) {
                        w.endAdTotalTime = 0;
                        for (var o = 0; o < w.endAd.length; o++) {
                            w.endAdTotalTime += parseInt(w.endAd[o].timesize)
                        }
                        if (w.showAdTotalTime) {
                            w.showAdTotalTime(w.endAdTotalTime)
                        }
                        V(w.endAd, t, n, "end")
                    } else {
                        e.updatePlayFacade.endAdComplete()
                    }
                }
            }
        }

        var F = [], N = [], D, B;
        e.hasADInfo = false;
        function H() {
            if (!e.hasADInfo) {
                e.hasADInfo = true;
                if (w.adList.length > 0) {
                    if (!w.catatree) {
                        w.catatree = w.cataid != 1 ? [1, w.cataid] : [1]
                    } else {
                        w.catatree = w.catatree.split(",")
                    }
                    for (var t = w.catatree.length - 1; t >= 0; t--) {
                        for (var n = 0; n < w.adList.length; n++) {
                            if (w.adList[n].cataid == w.catatree[t] && w.adList[n].location != "2" && w.adList[n].adtype != 3 && w.adList[n].timesize > 0) {
                                var i = /\.[^\.]+$/.exec(w.adList[n].matterurl);
                                if (w.adList[n].adtype == 2) {
                                    if (!(i == ".mp4" || i == ".m3u8")) {
                                        continue
                                    }
                                }
                                if (w.adList[n].location == "1" && !D) {
                                    F.push(w.adList[n])
                                } else if (w.adList[n].location == "3" && !B) {
                                    N.push(w.adList[n])
                                }
                            }
                        }
                        if (F.length > 0) {
                            D = true
                        }
                        if (N.length > 0) {
                            B = true
                        }
                        if (D && B) {
                            break
                        }
                    }
                }
            }
            w.preAd = F;
            w.endAd = N;
            if (w.adsetting == "true") {
                if (e.domain.indexOf(w.weburl) != -1) {
                    w.ban_ad = "on"
                }
            }
            if (w.ban_ad == "on" || w.ban_ad == true || w.preAd.length == 0) {
                return false
            }
            return true
        }

        w.nowAdType = 0;
        function V(t, n, i, r) {
            switch (t[w.adIndex].adtype) {
                case 1:
                    M(t[w.adIndex]);
                    w.nowAdType = 1;
                    e(n).css("background-image", "url(" + t[w.adIndex].matterurl + ")");
                    e(i).css("display", "none");
                    w.addrurl = t[w.adIndex].addrurl;
                    w.adNow = t[w.adIndex];
                    var a = 0;
                    if (w.countImageTimeInterval) {
                        clearInterval(w.countImageTimeInterval)
                    }
                    var o = false;
                    var s = new Image;
                    e(s).attr("src", t[w.adIndex].matterurl);
                    e(s).error(function () {
                        if (!o) {
                            clearInterval(w.countImageTimeInterval);
                            w.adIndex = 0;
                            if (r == "pre") {
                                e.updatePlayFacade.preAdComplete()
                            } else {
                                e.updatePlayFacade.endAdComplete()
                            }
                        }
                    });
                    w.countImageTimeInterval = setInterval(function () {
                        a++;
                        if (r == "pre") {
                            w.preAdTotalTime--;
                            if (w.showAdTotalTime) {
                                w.showAdTotalTime(w.preAdTotalTime)
                            }
                        } else {
                            w.endAdTotalTime--;
                            if (w.showAdTotalTime) {
                                w.showAdTotalTime(w.endAdTotalTime)
                            }
                        }
                        if (a == t[w.adIndex].timesize) {
                            o = true;
                            if (w.adIndex == t.length - 1) {
                                w.adIndex = 0;
                                if (r == "pre") {
                                    e.updatePlayFacade.preAdComplete()
                                } else {
                                    e.updatePlayFacade.endAdComplete()
                                }
                                clearInterval(w.countImageTimeInterval)
                            } else {
                                w.adIndex++;
                                clearInterval(w.countImageTimeInterval);
                                V(t, n, i, r)
                            }
                        }
                    }, 1e3);
                    break;
                case 2:
                    M(t[w.adIndex]);
                    w.nowAdType = 2;
                    e(n).css("background-image", 'url("")');
                    e(i).css({display: "block", width: "100%", height: "100%"});
                    i.src = t[w.adIndex].matterurl;
                    i.play();
                    w.addrurl = t[w.adIndex].addrurl;
                    w.adNow = t[w.adIndex];
                    var l = false;
                    var u = setInterval(function (t) {
                        if (e(i)[0].error != null) {
                            clearInterval(u);
                            clearInterval(w.countVideoTimeInterval);
                            w.adIndex = 0;
                            if (r == "pre") {
                                e.updatePlayFacade.preAdComplete()
                            } else {
                                i.pause();
                                e.updatePlayFacade.endAdComplete()
                            }
                        }
                    }, 500);
                    var d = 0;
                    if (w.countVideoTimeInterval) {
                        clearInterval(w.countVideoTimeInterval)
                    }
                    w.countVideoTimeInterval = setInterval(function (a) {
                        d++;
                        if (r == "pre") {
                            w.preAdTotalTime--;
                            if (w.showAdTotalTime) {
                                w.showAdTotalTime(w.preAdTotalTime)
                            }
                        } else {
                            w.endAdTotalTime--;
                            if (w.showAdTotalTime) {
                                w.showAdTotalTime(w.endAdTotalTime)
                            }
                        }
                        if (d == t[w.adIndex].timesize) {
                            l = true;
                            if (w.adIndex == t.length - 1) {
                                w.adIndex = 0;
                                if (r == "pre") {
                                    e.updatePlayFacade.preAdComplete()
                                } else {
                                    e.updatePlayFacade.endAdComplete()
                                }
                                clearInterval(u);
                                clearInterval(w.countVideoTimeInterval)
                            } else {
                                i.pause();
                                clearInterval(u);
                                clearInterval(w.countVideoTimeInterval);
                                w.adIndex++;
                                V(t, n, i, r)
                            }
                        }
                    }, 1e3);
                    break
            }
        }

        w.stopAd = function () {
            if (w.nowAdType == 1) {
                clearInterval(w.countImageTimeInterval)
            } else if (w.nowAdType == 2) {
                clearInterval(w.countVideoTimeInterval)
            }
        };
        w.changeLiveStreamName = function (e) {
            w.liveStreamName = e
        };
        function M(t) {
            var n = "//stat2.polyv.net/log/gganaly.html?adid=" + t.adid + "&type=1&ran=" + Math.floor(Math.random() * 999999999);
            e.ajax({
                url: n, type: "GET", success: function () {
                }
            })
        }

        function R(t) {
            var n = "//stat2.polyv.net/log/gganaly.html?adid=" + t.adid + "&type=0&ran=" + Math.floor(Math.random() * 999999999);
            e.ajax({
                url: n, type: "GET", success: function () {
                }
            })
        }

        function U() {
            if (!w.hasVisitor) {
                var t = false;
                e.updateFlowStatus(e.FLOW_STATUS.VISITOR);
                w.hasVisitor = true;
                var n = e("<form />");
                n.addClass("visitor");
                n.css({position: "absolute", width: "100%", height: "100%", top: 0, zIndex: 2, color: "white"});
                e(".container-main").append(n);
                var i = e("<div />").addClass("formContainer");
                var r = e("<div />").addClass("formTip").css("z-index", -1);
                var a = e("<div />").addClass("inputContainer");
                var o = e("<div />").addClass("btn-submit").html("提交");
                n.append(i, r);
                i.append(a);
                var s = w.userInfoRecord.fields;
                for (var l = 0; l < s.length; l++) {
                    var u = e("<div />").addClass("form-group fg_" + l);
                    var d = e("<div />").addClass("form-child");
                    var c = e("<div />").html(s[l].name + "  ").css({width: "100%"});
                    var f = e("<div />").addClass("btn-visitor-pre").html("上一步");
                    if (l == s.length - 1) {
                        var p = e("<div />").addClass("btn-visitor-next btn-submit").html("提交")
                    } else {
                        var p = e("<div />").addClass("btn-visitor-next").html("下一步")
                    }
                    if (s[l].type == "area") {
                        var h = e("<textarea />").addClass("input-vistor u_" + l).css({
                            "overflow-y": "auto",
                            width: "100%",
                            height: "100px"
                        })
                    } else {
                        var h = e("<input />").addClass("input-vistor u_" + l).css({
                            width: "100%",
                            height: "40px",
                            "font-size": "14px"
                        });
                        var v = W(s[l].name);
                        if (v != "") {
                            h.attr("type", v)
                        }
                    }
                    if (s[l].msg && s[l].msg != "") {
                        h.attr("placeholder", s[l].msg)
                    }
                    u.appendTo(a);
                    u.append(d);
                    u.append(f, p);
                    d.append(c, h)
                }
                e(".fg_0").css("display", "block");
                w.userInfoIndex = 0;
                e(".btn-visitor-pre").bind("click", function () {
                    w.userInfoIndex--;
                    if (w.userInfoIndex < 0) {
                        w.userInfoIndex = 0
                    }
                    g()
                });
                e(".btn-visitor-next").bind("click", function () {
                    w.userInfoIndex++;
                    if (w.userInfoIndex > w.userInfoRecord.fields.length - 1) {
                        w.userInfoIndex = w.userInfoRecord.fields.length - 1
                    }
                    g()
                });
                var g = function () {
                    if (w.userInfoIndex == 0) {
                        e(".btn-visitor-pre").css("background-color", "#abaaab");
                        e(".btn-submit").css("display", "none")
                    } else if (w.userInfoIndex == w.userInfoRecord.fields.length - 1) {
                        e(".btn-visitor-pre").css("background-color", "#138ad0");
                        e(".btn-submit").css("display", "inline-block")
                    } else {
                        e(".btn-visitor-pre").css("background-color", "#138ad0");
                        e(".btn-submit").css("display", "none")
                    }
                    for (var t = 0; t < w.userInfoRecord.fields.length; t++) {
                        if (t == w.userInfoIndex) {
                            e(".fg_" + t).css("display", "block")
                        } else {
                            e(".fg_" + t).css("display", "none")
                        }
                    }
                };
                var c = e.languageParser.userInfoThanks;
                e(".btn-submit").bind("click", function () {
                    c = e.languageParser.userInfoThanks;
                    var a = true;
                    var o = true;
                    var l = true;
                    for (var u = 0; u < s.length; u++) {
                        var d = e(".u_" + u)[0];
                        if (d.value == "") {
                            c = e.languageParser.userInfoFillFull;
                            a = false;
                            break
                        }
                        if (!w.banRegexp && W(s[u].name) == "tel") {
                            var f = /^0?1((3[0-9]{1})|(4[0-9]{1})|(5[0-9]{1})|(8[0-9]{1})){1}[0-9]{8}$/;
                            if (!f.test(d.value)) {
                                c = e.languageParser.userInfoTel;
                                o = false;
                                break
                            }
                        }
                        if (!w.banRegexp && W(s[u].name) == "email") {
                            var p = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
                            if (!p.test(d.value)) {
                                c = e.languageParser.userInfoMail;
                                l = false;
                                break
                            }
                        }
                        w.userInfoRecord.fields[u].value = d.value;
                        w.userInfoRecord.fields[u].type = "input"
                    }
                    if (!a || !o || !l) {
                        r.html(decodeURIComponent(c)).addClass("visitorTips").css("z-index", 2)
                    } else {
                        i.css("display", "none");
                        var h = "//v.polyv.net/uc/quserInfoRecord/addInfo";
                        var v = {
                            vid: w.vid,
                            id: String(w.userInfoRecord.qid),
                            userhref: String(e.href),
                            autokey: String(w.userInfoRecord.autokey),
                            title: String(w.userInfoRecord.title),
                            time: w.userInfoShowTime,
                            img: String(w.userInfoRecord.imagelink),
                            link: String(w.userInfoRecord.link),
                            field: w.userInfoRecord.fields
                        };
                        var g = {data: JSON.stringify(v)};
                        e.ajax({type: "POST", url: h, data: g});
                        r.html(decodeURIComponent(c)).addClass("visitorTips");
                        t = true;
                        q("autokey" + w.userInfoRecord.autokey, true)
                    }
                    r.bind("webkitAnimationEnd", function () {
                        r.removeClass("visitorTips").css("z-index", -1);
                        if (t) {
                            n.remove();
                            w.visitorPass = true;
                            w.j2s_resumeVideo();
                            if (e.isAndroid()) {
                                e.updatePlayFacade.startPreAd(w.div, w.video)
                            }
                        }
                    })
                })
            }
        }

        function W(e) {
            var t = "";
            if (e.indexOf("电话") > -1 || e.indexOf("手机") > -1 || e.indexOf("phone") > -1) {
                t = "tel"
            }
            if (e.indexOf("邮箱") > -1 || e.indexOf("mail") > -1) {
                t = "email"
            }
            return t
        }

        function q(t, n) {
            if (e.isWeixin()) {
                setCookie(t, n, 365);
                if (!getCookie(t)) {
                    delLastCookie();
                    setCookie(t, n, 365)
                }
            } else {
                localStorage[t] = n
            }
        }

        function z(t) {
            if (e.isWeixin()) {
                return getCookie(t)
            } else {
                return localStorage[t]
            }
            return null
        }

        function $() {
            var t = "js/CommentCoreLibrary.min.js";
            e.getScript(t, function () {
                var t = e("<div " + 'id="CmContainer"' + ">" + "<div" + ">");
                e("#container").append(t);
                e(t).css("top", 0);
                e(t).css("position", "absolute");
                e(t).css("overflow", "hidden");
                e(t).css("width", "100%");
                e(t).css("height", "100%");
                e.cmManager = new CommentManager(t[0]);
                e.ajax({
                    url: e.danmuUrl, type: "GET", dataType: "text", success: function (t) {
                        e.cmManager.init();
                        e.cmManager.load(PolyvParser(t));
                        e.cmManager.startTimer();
                        e.startDanmu = true
                    }, error: function (e, t, n) {
                        console.log(">> comment error" + e.readyState + " / " + e.status)
                    }
                })
            })
        }

        function J() {
            var t = "//player.polyv.net/script/js/srtParser.js";
            var n = false;
            if (!!w.isChangeVid) {
                if (w.srt_list.length != 0) {
                    if (typeof addSrt == "function") {
                        if (w.srt_list.length > 0) {
                            if (!w.show_srt) {
                                addSrt("off", w.srt_list, w.srt_list.length - 1)
                            } else {
                                addSrt("on", w.srt_list, w.srt_index)
                            }
                        }
                    }
                } else {
                    if (typeof addSrt == "function") {
                        addSrt("off")
                    }
                }
            } else {
                if (w.srt_list.length == 0) {
                    return
                }
            }
            if (w.srt_list.length > 0) {
                if (!!w.hasSrtParser) {
                    if (!!w.isChangeVid) {
                        w.j2s_initSrt(w.srt_index, true);
                        if (typeof addSrt == "function") {
                            w.srt_list.push(["不显示", ""]);
                            if (!w.show_srt) {
                                addSrt("off", w.srt_list, w.srt_list.length - 1)
                            } else {
                                addSrt("on", w.srt_list, w.srt_index)
                            }
                        }
                    }
                } else {
                    e.getScript(t, function () {
                        w.hasSrtParser = true;
                        var t = e("<div " + 'id="srtContainer"' + ">");
                        e(".container-main").append(t);
                        w.j2s_initSrt(w.srt_index, true);
                        if (typeof addSrt == "function") {
                            w.srt_list.push(["不显示", ""]);
                            if (!w.show_srt) {
                                addSrt("off", w.srt_list, w.srt_list.length - 1)
                            } else {
                                addSrt("on", w.srt_list, w.srt_index)
                            }
                        }
                    })
                }
            }
        }

        function X(t, n) {
            Q();
            e.updateFlowStatus(e.FLOW_STATUS.PLAY);
            e.isStartPlay = true;
            var i = new Date;
            w.firstToPlayTime = i.getTime();
            var r = e(n);
            var a = w.first_image;
            if (w.flashvars["loading_bg_img"]) {
                a = w.flashvars["loading_bg_img"]
            }
            if (w.loading_bg_img.length > 0) {
                a = w.loading_bg_img
            }
            G();
            n.preload = "auto";
            if (w.hidecontrol != "true" || w.hidecontrol == undefined) {
                n.controls = "controls"
            }
            var o = w.flashvars["ban_seek_by_limit_time"];
            if (o && o == "on") {
                if (n.hasAttribute("controls")) {
                    n.removeAttribute("controls")
                }
            }
            n.id = w.vid;
            w.stay_duration = 0;
            n.poster = a;
            r.css("background-size", w.playerWidth * 100 + "%");
            r.css("background-repeat", "no-repeat");
            r.css("background-position", "center");
            r.css("width", w.width);
            r.css("height", w.height);
            e(t).css("background-image", "");
            r.css("display", "block");
            if (w.audioBack) {
                w.polyvObjectdiv.css({background: 'url("//player.polyv.net/script/images/icon-audio.png") center center /cover no-repeat'});
                if (w.beta) {
                    w.polyvObjectdiv.css({background: 'url("./images/icon-audio.png") center center /cover no-repeat'})
                }
            }
            var s = false;
            if (w.isChangeVid) {
                s = w.isChangeVid
            }
            var l = Y(function (e) {
                if (!(w.preload === true && (w.teaser_show == 0 || w.ban_teaser === true) && !w.isPreAd)) {
                    n.src = e
                }
                if (!!s) {
                    n.src = e
                }
                if (w.video == "audio") {
                    n.load()
                }
                setTimeout(function () {
                    n.play()
                }, 300);
                if (w.stopAutoAfterChange) {
                    setTimeout(function () {
                        n.pause()
                    }, 300)
                }
            });
            clearInterval(w.videoErrorTimer);
            w.videoErrorTimer = setInterval(function (t) {
                if (r[0].error != null) {
                    switch (w.sourceType) {
                        case"hlsIndex":
                            w.enable_switch.hlsIndex[1] = false;
                            break;
                        case"hls":
                            for (var i = 0; i < w.enable_switch.hls.length; i++) {
                                if (n.src.indexOf(w.enable_switch.hls[i][0]) != -1) {
                                    w.enable_switch.hls[i][1] = false
                                }
                            }
                            break;
                        case"mp4":
                            for (var a = 0; a < w.enable_switch.mp4.length; a++) {
                                if (n.src.indexOf(w.enable_switch.mp4[a][0]) != -1) {
                                    w.enable_switch.mp4[a][1] = false
                                }
                            }
                            break;
                        case"hlsIndex_15x":
                            w.enable_switch.hlsIndex_15x[1] = false;
                            break;
                        case"hls_15x":
                            for (var o = 0; o < w.enable_switch.hls_15x.length; o++) {
                                if (n.src.indexOf(w.enable_switch.hls_15x[o][0]) != -1) {
                                    w.enable_switch.hls_15x[o][1] = false
                                }
                            }
                            break;
                        case"source_url":
                            w.enable_switch.source_url[1] = false;
                            break
                    }
                    var s = Y(function (t) {
                        if (w.previewMode == true) {
                            t = ""
                        }
                        if (t == "") {
                            if (!w.hasSendError) {
                                if (r[0].error != null) {
                                    w.hasSendError = true;
                                    var i = {};
                                    i.pid = w.pid;
                                    i.uid = w.uid;
                                    i.vid = w.vid;
                                    i.error = "load_video_failure";
                                    i.type = "error";
                                    i.errorType = r[0].error.code;
                                    i.href = e.href;
                                    se(i);
                                    clearInterval(w.videoErrorTimer);
                                    if (w.seed == 1 && (w.ts || w.sign)) {
                                        xe(e.languageParser.webVideoFail)
                                    } else {
                                        xe(e.languageParser.videoFail)
                                    }
                                    var a = {};
                                    a.name = "__onStreamPlayFaild";
                                    a.src = w.video.src;
                                    a.code = r[0].error.code;
                                    e.getUrlStatus(a)
                                }
                            }
                        } else {
                            if (w.ts && w.sign) {
                                ne(n)
                            } else {
                                n.src = t;
                                n.play()
                            }
                            if (typeof showHD == "function") {
                                if (w.showHd == "on") {
                                    showHD(w.playNum, w.fileSize)
                                }
                            }
                            if (typeof showLine == "function") {
                                if (w.showLine == "on") {
                                    showLine()
                                }
                            }
                        }
                    })
                }
            }, 1e3);
            if (typeof showHD == "function") {
                if (w.showHd == "on") {
                    showHD(w.playNum, w.fileSize)
                }
            }
            if (typeof showLine == "function") {
                if (w.showLine == "on") {
                    showLine()
                }
            }
            if (w.ban_ui == "on" || w.ban_ui == true) {
                if (typeof hideUI == "function") {
                    hideUI()
                }
            }
            w.isWaiting = false;
            w.seeking = false;
            J();
            e.updatePlayFacade.changeVidStep.initData();
            if (w.useVr && e.checkVrDevice()) {
                if (e.isIOS() && (w.seed == 1 || w.forceHLS)) {
                    vrFuc.isIosWechat()
                }
                if (w.seed == 1) {
                    vrFuc.init()
                }
                e(n).attr({
                    "x5-video-player-type": "h5",
                    "x5-video-player-fullscreen": "true",
                    "x5-video-orientation": "landscape"
                })
            }
            if (w.x5VideoType == "h5") {
                e(n).attr({
                    "x5-video-player-type": "h5",
                    "x5-video-player-fullscreen": "true",
                    "x5-video-orientation": "portrait"
                });
                n.style["object-position"] = "0px 0px";
                n.style["background-color"] = "white"
            }
        }

        function Q() {
            if (w.logoloca >= 1) {
                if (typeof addLogo == "function") {
                    addLogo(true, w.logoloca, w.logo_url, w.logo_location)
                }
            } else {
                if (typeof addLogo == "function") {
                    addLogo(false)
                }
            }
        }

        function G() {
            if (w.hasSortVideo === true) {
                return
            }
            for (var e = 0; e < w.fileSize.length; e++) {
                w.fileSize[e] = 1
            }
            if (w.show_rate != null) {
                switch (String(w.show_rate)) {
                    case"1":
                        w.fileSize[1] = 0;
                        w.fileSize[2] = 0;
                        w.df_num = 1;
                        break;
                    case"2":
                        w.fileSize[2] = 0;
                        w.df_num = 2;
                        break
                }
            }
            if (w.forceHightDf == "true" || w.forceHightDf == true) {
                w.df = w.df_num
            }
            w.enable_switch = {hlsIndex: [], hls: [], mp4: [], hlsIndex_15x: [], hls_15x: [], source_url: []};
            w.enable_switch.hlsIndex = [w.hlsIndex, true];
            w.enable_switch.hlsIndex_15x = [w.hlsIndex_15x, true];
            w.enable_switch.source_url = [w.play_source_url, true];
            if (w.ts && w.sign) {
                w.enable_switch.hlsIndex = ["", false]
            }
            for (var t = 0; t < w.fileSize.length; t++) {
                if (w.fileSize[t] != 0) {
                    if (w.hlstest) {
                        w.hls[t] = w.hls[t].replace("hls", "hlstest")
                    }
                    w.enable_switch.hls.push([w.hls[t], true]);
                    w.enable_switch.mp4.push([w.mp4[t], true]);
                    if (w.hls_15x) {
                        w.enable_switch.hls_15x.push([w.hls_15x[t], true])
                    }
                } else {
                    if (w.hlstest) {
                        w.hls[t] = w.hls[t].replace("hls", "hlstest")
                    }
                    w.enable_switch.hls.push([w.hls[t], false]);
                    w.enable_switch.mp4.push([w.mp4[t], false]);
                    if (w.hls_15x) {
                        w.enable_switch.hls_15x.push([w.hls_15x[t], false])
                    }
                }
            }
        }

        function Y(t) {
            var n = "";
            w.playNum = 0;
            w.df = w.df > w.df_num ? w.df_num : w.df;
            if (w.useKeepSource) {
                if (w.enable_switch.source_url[1]) {
                    n = w.enable_switch.source_url[0];
                    w.sourceType = "source_url"
                }
            } else {
                if (w.playbackrate == 1.5 && (w.hlsIndex_15x || w.hls_15x) && n == "") {
                    if (w.df == 0 && w.enable_switch.hlsIndex_15x[1]) {
                        n = w.enable_switch.hlsIndex_15x[0];
                        w.sourceType = "hlsIndex_15x"
                    } else {
                        w.df = w.df == 0 ? 1 : w.df;
                        if (w.enable_switch.hls_15x[w.df - 1][1]) {
                            n = w.enable_switch.hls_15x[w.df - 1][0];
                            w.sourceType = "hls_15x";
                            w.playNum = w.df - 1
                        } else {
                            for (var i = 0; i < w.df_num; i++) {
                                if (w.enable_switch.hls_15x[i][1]) {
                                    n = w.enable_switch.hls_15x[i][0];
                                    w.sourceType = "hls_15x";
                                    w.playNum = i;
                                    break
                                }
                            }
                        }
                    }
                }
                if ((w.seed == 1 || w.forceHLS) && n == "") {
                    if (w.df == 0 && w.enable_switch.hlsIndex[1]) {
                        n = w.enable_switch.hlsIndex[0];
                        w.sourceType = "hlsIndex"
                    } else {
                        w.df = w.df == 0 ? 1 : w.df;
                        if (w.enable_switch.hls[w.df - 1][1]) {
                            n = w.enable_switch.hls[w.df - 1][0];
                            w.sourceType = "hls";
                            w.playNum = w.df - 1
                        } else {
                            for (var r = 0; r < w.df_num; r++) {
                                if (w.enable_switch.hls[r][1]) {
                                    n = w.enable_switch.hls[r][0];
                                    w.sourceType = "hls";
                                    w.playNum = r;
                                    break
                                }
                            }
                        }
                    }
                }
                if (n != "" && !w.useKeepSource) {
                    if (w.previewMode == true) {
                        var a = w.vid.substring(0, 32);
                        n = n.replace(a, "p_" + a)
                    }
                    if (w.ts != "" && w.sign != "") {
                        n = n + "?ts=" + w.ts + "&sign=" + w.sign
                    }
                    if (n.indexOf("?") != -1) {
                        n = n + "&pid=" + w.pid
                    } else {
                        n = n + "?pid=" + w.pid
                    }
                    if (n.indexOf("?") != -1) {
                        n = n + "&route=" + w.route[w.cdn]
                    } else {
                        n = n + "?route=" + w.route[w.cdn]
                    }
                }
                if (w.seed == 0 && n == "") {
                    w.sourceType = "mp4";
                    w.df = w.df == 0 ? w.my_br : w.df;
                    if (w.enable_switch.mp4[w.df - 1] != undefined && w.enable_switch.mp4[w.df - 1][1]) {
                        n = w.enable_switch.mp4[w.df - 1][0];
                        w.playNum = w.df - 1
                    } else {
                        for (var i = 0; i < w.df_num; i++) {
                            if (w.enable_switch.mp4[i][1]) {
                                n = w.enable_switch.mp4[i][0];
                                w.playNum = i;
                                break
                            }
                        }
                    }
                    if (b) {
                        if (w.enable_switch.mp4[0][1]) {
                            n = w.enable_switch.mp4[0][0];
                            w.playNum = 0
                        } else {
                            n = ""
                        }
                    }
                    if (n != "" && w.cdn == 1) {
                        n = n.replace(w.mp4[0].split("/")[2], w.mp4route[1])
                    }
                    if (n != "") {
                        K(n, t)
                    } else {
                        t(n)
                    }
                    return
                }
                if (w.useVr && e.checkVrDevice() && n.indexOf(".m3u8") != -1) {
                    n = n.replace(n.split("/")[2], w.vrdomain)
                }
            }
            t(n);
            return n
        }

        function K(t, n) {
            if (w.sourceType == "mp4" && t.indexOf("cuplayer") != -1) {
                if (n) {
                    if (!w.hasAes) {
                        var i = "//player.polyv.net/script/js/ajs.js";
                        if (w.beta == "on") {
                            i = "//player.polyv.net/javascript/" + e.version + "/js/ajs.js"
                        }
                        if (w.beta_test == "on") {
                            i = "//192.168.1.124:81/js/ajs.js"
                        }
                        e.ajax({
                            url: i, dataType: "script", success: function () {
                                w.hasAes = true;
                                Z(t, n)
                            }
                        })
                    } else {
                        Z(t, n)
                    }
                }
            } else {
                if (n) {
                    if (t.indexOf("pid") < 0) {
                        if (t.indexOf("?") > -1) {
                            t = t + "&pid=" + w.pid
                        } else {
                            t = t + "?pid=" + w.pid
                        }
                    }
                    n(t)
                }
            }
        }

        function Z(t, n) {
            w.tokenUrl = o[s] + "/token/" + w.vid + ".json" + "?" + Math.floor(Math.random() * 999999999);
            e.getJSON(w.tokenUrl, function (e) {
                if (e.status != 200) {
                    if (t.indexOf("pid") < 0) {
                        if (t.indexOf("?") > -1) {
                            t = t + "&pid=" + w.pid
                        } else {
                            t = t + "?pid=" + w.pid
                        }
                    }
                    n(t);
                    return
                }
                var i = w.vid.substring(0, 16);
                i = ee(i);
                var r = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
                var a = aesjs.utils.hex.toBytes(e.result);
                var o = new aesjs.ModeOfOperation.cbc(i, r);
                var s = o.decrypt(a);
                var l = aesjs.utils.utf8.fromBytes(s);
                var u = Base64.decode(l);
                var e = JSON.parse(u);
                if (t.indexOf("?") != -1) {
                    t = t + "&ts=" + e.ts + "&sign=" + e.sign
                } else {
                    t = t + "?ts=" + e.ts + "&sign=" + e.sign
                }
                if (t.indexOf("pid") < 0) {
                    if (t.indexOf("?") > -1) {
                        t = t + "&pid=" + w.pid
                    } else {
                        t = t + "?pid=" + w.pid
                    }
                }
                n(t)
            }).fail(function () {
                if (t.indexOf("pid") < 0) {
                    if (t.indexOf("?") > -1) {
                        t = t + "&pid=" + w.pid
                    } else {
                        t = t + "?pid=" + w.pid
                    }
                }
                n(t)
            })
        }

        function ee(e) {
            var t, n, i = [];
            for (var r = 0; r < e.length; r++) {
                t = e.charCodeAt(r);
                n = [];
                do {
                    n.push(t & 255);
                    t = t >> 8
                } while (t);
                i = i.concat(n.reverse())
            }
            return i
        }

        function te(t, n) {
            e("video").removeAttr("poster");
            e.recordTime = t.currentTime;
            w.df = n + 1;
            if (w.ts && w.sign) {
                ne(t)
            } else {
                var i = Y(function (e) {
                    t.src = e;
                    t.play()
                })
            }
            if (typeof highLightHd == "function") {
                highLightHd(w.playNum)
            }
        }

        function ne(t) {
            var n = (new Date).getTime();
            var i = w.vid + n + "polyv";
            var r = CryptoJS.MD5(i);
            var o = "";
            if (w.hlstest) {
                o = a + "hlstest.videocc.net/event/switch_bitrate?sign=" + r + "&ts=" + n + "&vid=" + w.vid + "&mt=" + w.ts + "&ms=" + w.sign
            } else {
                o = a + "hls.videocc.net/event/switch_bitrate?sign=" + r + "&ts=" + n + "&vid=" + w.vid + "&mt=" + w.ts + "&ms=" + w.sign
            }
            e.ajax({
                url: o, dataType: "text", success: function (e) {
                    if (e == "success") {
                        var n = Y(function (e) {
                            t.src = e;
                            t.play()
                        })
                    }
                }, error: function () {
                }
            })
        }

        function ie() {
            w.stay_duration++
        }

        function re() {
            var t = (new Date).getTime();
            var n = Math.floor(e(w.video)[0].currentTime);
            var i = w.pid;
            var r = w.stay_duration;
            var a = "rtas.net" + i + w.liveVid + "0" + r;
            var o = CryptoJS.MD5(a) + "";
            var s = {pid: i, uid: w.liveUid, cid: w.liveVid, flow: 0, pd: r, sd: r, ts: t, sign: o};
            for (var l in w.params) {
                s[l] = w.params[l]
            }
            if (w.session_id) {
                s.session_id = we(w.session_id)
            }
            e.ajax({
                type: "GET", url: "//rtas.videocc.net/v1/view", data: s, success: function (e) {
                }
            })
        }

        function ae() {
            var t = "";
            if (a.indexOf("https") > -1) {
                t = "https://api.polyv.net/live/live_status/query?stream=" + w.liveStreamName
            } else {
                t = "http://api.live.polyv.net/live_status/query?stream=" + w.liveStreamName
            }
            e.ajax({
                url: t, type: "GET", dataType: "jsonp", success: function (e) {
                    if (e) {
                        if (typeof updateLiveStatus == "function") {
                            updateLiveStatus(e)
                        }
                    }
                }
            })
        }

        function oe() {
            var t = (new Date).getTime();
            var n = Math.floor(e(w.video)[0].currentTime);
            var i = w.pid;
            var r = w.stay_duration;
            var a = "rtas.net" + i + w.vid + "0" + r + n;
            var o = CryptoJS.MD5(a) + "";
            var s = {
                pid: i,
                uid: w.vid.substring(0, 10),
                vid: w.vid,
                flow: 0,
                pd: r,
                sd: r,
                cts: n,
                ts: t,
                sign: o,
                duration: w.duration,
                href: e.href
            };
            for (var l in w.params) {
                s[l] = w.params[l]
            }
            if (w.session_id) {
                s.session_id = we(w.session_id)
            }
            e.ajax({
                type: "GET", url: "//prtas.videocc.net/v1/view", data: s, success: function (e) {
                }
            })
        }

        function se(e) {
            for (var t in w.params) {
                e[t] = w.params[t]
            }
            if (w.session_id) {
                e.session_id = we(w.session_id)
            }
            if (w.liveVid || w.liveUid) {
                e.vid = w.liveUid + w.liveVid + ""
            }
            var n = new le(e)
        }

        function le(t) {
            var n = 0;
            var i;
            var r = function (t) {
                e.ajax({
                    type: "GET", url: "//prtas.videocc.net/qos", data: t, success: function () {
                        clearTimeout(i)
                    }, error: function () {
                        n++;
                        if (n < 4) {
                            i = setTimeout(function () {
                                r(t)
                            }, 5e3)
                        }
                    }
                })
            };
            r(t)
        }

        function ue(t) {
            return t.each(function () {
                var n;
                var i = e(this);
                var r = w.first_image;
                if (w.loading_bg_img.length > 0) {
                    r = w.loading_bg_img
                }
                var a = document.createElement("div");
                a.setAttribute("id", "plv_container");
                var o = e(a);
                o.css("background-size", w.playerWidth * 100 + "%");
                o.css("background-repeat", "no-repeat");
                o.css("background-position", "center");
                o.css("text-align", "left");
                o.css("width", w.width);
                o.css("height", w.height);
                e(this).empty();
                this.appendChild(a);
                var s = document.createElement(w.media);
                a.appendChild(s);
                e(w.media).css("display", "none");
                w.polyvObjectdiv = o;
                w.div = a;
                w.polyvObjectthis = i;
                w.o = t;
                if (w.outdate) {
                    switch (w.status) {
                        case 50:
                            w.errorCode = "009";
                            break;
                        case 51:
                            w.errorCode = "005";
                            break;
                        case 10:
                        case 20:
                            w.errorCode = "010";
                            break;
                        default:
                            if (!w.errorCode) {
                                w.errorCode = "000"
                            }
                            if (w.status < 0) {
                                w.errorCode = "004"
                            }
                            break
                    }
                    xe()
                } else {
                    if (!w.changeBrowser) {
                        w.imageUrl = r;
                        e.updatePlayFacade.startVlidurl()
                    } else {
                        xe(e.languageParser.browChange)
                    }
                }
            })
        }

        function de() {
            if (w.getBase64 != undefined) {
                ce()
            } else {
                e.ajax({
                    url: "//player.polyv.net/script/js/base64.js", dataType: "script", success: function () {
                        w.getBase64 = true;
                        ce()
                    }, error: function () {
                        w.errorCode = "013.01";
                        xe(e.languageParser.validFail)
                    }
                })
            }
        }

        function ce() {
            if (w.validUrl2.indexOf("http://") == -1 && w.validUrl2.indexOf("https://") == -1) {
                w.validUrl2 = a + e.domain + w.validUrl2
            }
            w.validMessage = e.languageParser.validFail;
            var t = new Date;
            w.validUrl2Time = t.getTime() + Math.floor(Math.random() * 1e5);
            var n = {};
            n.vid = w.vid;
            n.code = w.code;
            n.t = w.validUrl2Time;
            w.validUrl2Sign = w.validUrl2 + "?" + "vid=" + w.vid + "&code=" + w.code + "&t=" + w.validUrl2Time;
            var i = {
                url: w.validUrl2Sign, dataType: "jsonp", success: function (t) {
                    var i = t;
                    n.status = i.status;
                    n.username = i.username;
                    var r = "//v3.polyv.net/uc/services/get/player/sign";
                    e.ajax({
                        url: r, dataType: "jsonp", data: n, success: function (t) {
                            if (!t.sign) {
                                w.errorCode = "013.04";
                                xe(e.languageParser.validFail);
                                var n = {};
                                n.src = "";
                                n.sign = false;
                                n.name = "__onVerificationSignError";
                                e.getUrlStatus(n)
                            } else {
                                var a = e.decode(Base64.decode(t.sign));
                                if (a == i.sign) {
                                    if (i.msg) {
                                        w.validMessage = encodeURIComponent(i.msg)
                                    }
                                    switch (String(i.status)) {
                                        case"1":
                                            if (w.banHdSelect || w.banOverPlay) {
                                                w.banHdSelect = false;
                                                w.banOverPlay = false;
                                                if (w.validStatusValue == 4) {
                                                    te(video, w.playNum);
                                                    if (typeof showLoading == "function") {
                                                        showLoading()
                                                    }
                                                } else if (w.validStatusValue == 5) {
                                                    w.j2s_resumeVideo()
                                                }
                                            } else {
                                                e.updatePlayFacade.changeVidStep.valided()
                                            }
                                            break;
                                        case"4":
                                        case"5":
                                            if (!w.banHdSelect) {
                                                w.banHdSelect = true;
                                                e.updatePlayFacade.changeVidStep.valided()
                                            } else {
                                                e.updatePlayFacade.onSwitchHd()
                                            }
                                            w.isSwitching = false;
                                            if (String(i.status) == "5") {
                                                if (!w.banOverPlay) {
                                                    w.banOverPlay = true;
                                                    e.updatePlayFacade.changeVidStep.valided()
                                                } else {
                                                    e.updatePlayFacade.onOverPlay()
                                                }
                                            }
                                            break;
                                        default:
                                            w.errorCode = "013.06";
                                            xe(w.validMessage);
                                            var n = {};
                                            n.src = "";
                                            n.name = "__onVerificationBan";
                                            e.getUrlStatus(n)
                                    }
                                    w.isSwitching = false;
                                    w.isResumeing = false
                                } else {
                                    w.errorCode = "013.05";
                                    xe(e.languageParser.validFail);
                                    var n = {};
                                    n.src = r;
                                    n.name = "__onVerificationSignError";
                                    e.getUrlStatus(n)
                                }
                            }
                        }, error: function () {
                            w.errorCode = "013.03";
                            xe(e.languageParser.validFail);
                            var t = {};
                            t.src = r;
                            t.name = "__onVerificationSignError";
                            e.getUrlStatus(t)
                        }
                    })
                }, error: function () {
                    w.errorCode = "013.02";
                    xe(e.languageParser.validFail);
                    var t = {};
                    t.src = w.validUrl2;
                    t.name = "__onVerificationError";
                    e.getUrlStatus(t)
                }
            };
            if (w.validHead) {
                i.headers = w.validHead
            }
            e.ajax(i)
        }

        function fe() {
            if (typeof s2j_onPlayerInitOver == "function" && w.hasSendInitOver == "off") {
                w.hasSendInitOver = "on";
                s2j_onPlayerInitOver()
            }
            if (typeof addPassword == "function") {
                addPassword(true)
            }
        }

        function pe(t) {
            var n = "//v.polyv.net/uc/admin/checkpassword";
            var i = {};
            i.vid = w.vid;
            i.password = t;
            e.ajax({
                url: n, type: "GET", dataType: "jsonp", data: i, success: function (t) {
                    if (t == "1") {
                        e.updatePlayFacade.passworded(true)
                    } else {
                        e.updatePlayFacade.passworded(false)
                    }
                }, error: function () {
                    e.updatePlayFacade.passworded(false)
                }
            })
        }

        function he(i, r) {
            video = e(w.media)[0];
            var a = e(w.media);
            a.attr("webkit-playsinline", "");
            a.attr("playsinline", "");
            a.attr("x5-playsinline", "");
            a.css("display", "none");
            a.css("width", "0");
            a.css("height", "0");
            w.polyvObjectvideo = a;
            w.video = video;
            w.isPreAd = H();
            if (w.preload === true && (w.teaser_show == 0 || w.ban_teaser === true) && !w.isPreAd) {
                a.attr("preload", "auto");
                G();
                w.hasSortVideo = true;
                Y(function (e) {
                    video.src = e
                })
            } else {
                a.attr("autoplay", "autoplay")
            }
            if (!w.autoplay && !w.hidePlayBtn) {
                if (e("#plv_container img").length > 0) {
                    return
                }
                if (w.vrdomain) {
                    w.useVr = true
                }
                var o = "//player.polyv.net/script/images/button-play.png";
                if (w.useVr && e.checkVrDevice()) {
                    ve();
                    o = "//player.polyv.net/script/images/360.png";
                    if (w.beta_test == "on" || w.beta == "on") {
                        o = "./images/360.png"
                    }
                    if (typeof setVrMode == "function") {
                        setVrMode()
                    }
                }
                if (n.buttonImgUrl) {
                    o = n.buttonImgUrl
                }
                var s = e('<img id="playbutton">');
                s.attr("src", o);
                s.css("display", "none");
                s.appendTo(i);
                s.one("load", function () {
                    if (parseInt(w.height) == 0) {
                        var t = parseInt(i.css("width")) / w.ratio;
                        w.height = t;
                        i.parent().css("height", t);
                        i.css("height", t)
                    }
                    var n = parseInt(i.css("width")) / 3;
                    if (w.useVr && e.checkVrDevice()) {
                        s.css({
                            display: "none",
                            maxHeight: "70%",
                            right: 0,
                            left: 0,
                            bottom: 0,
                            top: 0,
                            margin: "auto",
                            position: "absolute"
                        });
                        if (w.loadedVrJs) {
                            s.css("display", "block")
                        }
                    } else {
                        s.css({
                            left: "50%",
                            top: "50%",
                            width: "80px",
                            height: "80px",
                            marginLeft: "-40px",
                            marginTop: "-40px",
                            position: "absolute",
                            opacity: .8,
                            display: "block"
                        })
                    }
                    if (w.ban_ui == true || w.ban_ui == "on") {
                        var r = (parseInt(i.css("height")) - 72) / 2;
                        s.css("position", "relative");
                        s.css("top", r + "px");
                        s.css("margin-top", 0)
                    }
                    if (typeof s2j_onPlayerInitOver == "function" && w.hasSendInitOver == "off") {
                        w.hasSendInitOver = "on";
                        s2j_onPlayerInitOver()
                    }
                    i.bind("click", function () {
                        s.remove();
                        video.play();
                        video.pause();
                        w.isClickPlayButton = "on";
                        e.updatePlayFacade.startUserInfo();
                        i.unbind("click");
                        if (typeof s2j_onPlayBtnClick == "function") {
                            s2j_onPlayBtnClick();
                            if (w.title.length > 0 && typeof changeTitle == "function") {
                                changeTitle(w.title)
                            }
                        }
                    })
                })
            } else {
                e.updatePlayFacade.startUserInfo();
                if (typeof s2j_onPlayerInitOver == "function" && w.hasSendInitOver == "off") {
                    w.hasSendInitOver = "on";
                    s2j_onPlayerInitOver()
                }
                if (w.ban_ui == true || w.ban_ui == "on") {
                    e("#plv_container").css("background-color", "#212121")
                }
            }
            w.j2s_startPlay = function () {
                video.play();
                video.pause();
                w.isClickPlayButton = "on";
                e.updatePlayFacade.startUserInfo();
                w.polyvObjectdiv.unbind("click");
                if (typeof s2j_onPlayBtnClick == "function") {
                    s2j_onPlayBtnClick();
                    if (w.title.length > 0 && typeof changeTitle == "function") {
                        changeTitle(w.title)
                    }
                }
            };
            w.j2s_pauseVideo = function () {
                w.video.pause();
                e.updateFlowStatus(e.FLOW_STATUS.PAUSE)
            };
            w.j2s_resumeVideo = function () {
                if (!w.banOverPlay || video.currentTime < w.previewlong) {
                    w.j2s_playVideo()
                } else {
                    if (!w.isResumeing) {
                        w.validStatusValue = 5;
                        w.isResumeing = true;
                        de()
                    }
                }
            };
            w.j2s_playVideo = function () {
                if (w.video.src) {
                    w.video.play()
                } else {
                    i.click()
                }
                a.css("display", "block");
                e.updateFlowStatus(e.FLOW_STATUS.PLAY)
            };
            w.j2s_seekVideo = function (e) {
                if (w.video.src) {
                    w.video.currentTime = e
                }
            };
            w.j2s_stopVideo = function () {
                w.video.pause();
                w.video.currentTime = 0;
                if (e.flowStatus == e.FLOW_STATUS.PLAY || e.FLOW_STATUS.PAUSE) {
                    e.updatePlayFacade.onEnd()
                }
            };
            w.changeCode = function (e) {
                w.code = e
            };
            w.changeValidHead = function (e) {
                w.validHead = e
            };
            w.j2s_setVolume = function (e) {
                e = parseFloat(e);
                e = e < 0 ? 0 : e;
                e = e > 1 ? 1 : e;
                w.video.volume = e
            };
            w.j2s_skipTeaser = function () {
                w.teaser_show = 0;
                e.updatePlayFacade.teaserComplete()
            };
            w.j2s_switchHd = function (t) {
                if (!w.isSwitching) {
                    w.playNum = t;
                    if (w.banHdSelect) {
                        e.updatePlayFacade.onSwitchHd()
                    } else {
                        te(w.video, t)
                    }
                }
            };
            w.changeLine = function () {
                if (w.cdn === 0) {
                    w.cdn = 1
                } else {
                    w.cdn = 0
                }
                te(video, w.playNum)
            };
            w.changeVrMode = function (e) {
                try {
                    vrFuc.changeMode(e)
                } catch (t) {
                }
            };
            w.updateVrSize = function () {
                try {
                    vrFuc.windowResize()
                } catch (e) {
                }
            };
            w.updateVrOri = function (e) {
                try {
                    vrFuc.isFullScreen = e
                } catch (t) {
                }
            };
            w.j2s_removeVideo = function () {
                e(t).empty()
            };
            w.j2s_switch = function (e) {
                e = e - 1;
                if (!w.banHdSelect) {
                    w.j2s_switchHd(e)
                } else {
                    w.validStatusValue = 4;
                    w.isSwitching = true;
                    de()
                }
            };
            w.j2s_toggleHighSpeed = function (t) {
                if (e.flowStatus == e.FLOW_STATUS.PLAY || e.flowStatus == e.FLOW_STATUS.PAUSE) {
                    if (t) {
                        w.playbackrate = 1.5;
                        w.j2s_switch(w.playNum + 1)
                    } else {
                        w.playbackrate = 1;
                        w.j2s_switch(w.playNum + 1)
                    }
                }
            };
            w.j2s_replay = function () {
                var t = false;
                if (w.endAd.length > 0) {
                    for (var n = 0; n < N.length; n++) {
                        if (N[n].adtype == 2) {
                            t = true
                        }
                    }
                }
                if (t) {
                    var i = Y(function (e) {
                        w.video.src = e;
                        w.j2s_seekVideo(0);
                        w.j2s_playVideo()
                    })
                }
                w.isSendOnPlay = false;
                w.j2s_seekVideo(0);
                w.j2s_playVideo();
                e.updatePlayFacade.onPlayStart()
            };
            w.j2s_adHop = function () {
                if (w.addrurl.indexOf("http://") != -1 || w.addrurl.indexOf("https://") != -1) {
                    window.open(w.addrurl);
                    R(w.adNow)
                }
            };
            w.j2s_skipAd = function () {
                w.stopAd();
                if (e.flowStatus == e.FLOW_STATUS.ENDAD) {
                    e.updatePlayFacade.endAdComplete()
                } else {
                    e.updatePlayFacade.preAdComplete()
                }
            };
            w.changeVid = function (t, n, i, r, a) {
                e.updatePlayFacade.initChangeVideo(t, n, i, r, a)
            };
            w.playNext = function () {
                if (w.videoList.length > 1) {
                    w.playNextIndex++;
                    w.playNextIndex = w.playNextIndex > w.videoList.length - 1 ? w.videoList.length - 1 : w.playNextIndex;
                    var e = w.videoList[w.playNextIndex];
                    if (e == undefined || e == w.vid || e.substr(0, 10) != w.vid.substr(0, 10)) {
                        return
                    }
                    if (typeof changeVideoId == "function") {
                        changeVideoId(e)
                    }
                    w.changeVid(e, 0)
                }
            };
            w.j2s_showBarrage = function () {
                if (e.startDanmu) {
                    e.cmManager.startTimer()
                }
            };
            w.j2s_hideBarrage = function () {
                if (e.startDanmu) {
                    e.cmManager.stopTimer()
                }
            };
            w.j2s_addBarrageMessage = function (t) {
                var n = e.parseJSON(t);
                for (var i in n) {
                    var r = {};
                    r.text = n[i].msg;
                    r.stime = 0;
                    r.mode = 1;
                    r.size = 14;
                    r.color = 255;
                    r.data = n[i].timestamp;
                    e.cmManager.insert(r)
                }
            };
            w.changeParam = function (e, t, n, i) {
                if (arguments[0] && arguments[0] != "undefined") {
                    w.params["param1"] = e
                }
                if (arguments[1] && arguments[1] != "undefined") {
                    w.params["param2"] = t
                }
                if (arguments[2] && arguments[2] != "undefined") {
                    w.params["param3"] = n
                }
                if (arguments[3] && arguments[3] != "undefined") {
                    w.params["param4"] = i
                }
            };
            w.switchMMode = function (t) {
                if (arguments[0]) {
                    if (w.useAudio && w.useAudio == true) {
                        if (t == "audio") {
                            return false
                        }
                    } else {
                        if (t == "video") {
                            return false
                        }
                    }
                }
                if (w.isClickPlayButton == "off") {
                    e("#playbutton").remove()
                }
                if (e.flowStatus != e.FLOW_STATUS.PREAD) {
                    var n = {
                        videosrc: w.video.src,
                        auto: w.video.autoplay,
                        post: w.video.poster,
                        pre: w.video.preload,
                        con: w.video.controls,
                        src: w.video.src
                    };
                    if (w.useAudio && w.useAudio == true) {
                        w.useAudio = false;
                        me("video", e("#audio"), n);
                        if (!w.first_image.length > 0) {
                            w.video.poster = ""
                        }
                    } else {
                        w.useAudio = true;
                        me("audio", e(w.video), n)
                    }
                    return true
                }
                return false
            };
            w.j2s_reloadBarrageData = function () {
                if (e.startDanmu) {
                    e.ajax({
                        url: e.danmuUrl, type: "GET", dataType: "text", success: function (t) {
                            e.cmManager.load(PolyvParser(t))
                        }, error: function (e, t, n) {
                            console.log(">> comment error" + e.readyState + " / " + e.status)
                        }
                    })
                }
            };
            w.j2s_hideSrt = function () {
                if (w.srt) {
                    w.srt.hide()
                }
            };
            w.j2s_showSrt = function () {
                if (w.srt) {
                    w.srt.show()
                }
            };
            w.j2s_setTimeSrt = function (e) {
                if (w.srt) {
                    w.srt.time(e)
                }
            };
            w.j2s_getCurrentTime = function () {
                return Math.floor(w.video.currentTime)
            };
            w.j2s_stayInVideoTime = function () {
                return w.stay_duration
            };
            w.j2s_getDuration = function () {
                return w.video.duration
            };
            e.cmManager;
            e.startDanmu = false;
            e.haveDanmu = false;
            e.danmuUrl = "";
            w.j2s_openDanmu = function (t) {
                e.haveDanmu = true;
                e.danmuUrl = t
            };
            w.j2s_getVideo = function () {
                return w.video
            };
            ge();
            var l = 0;
            w.isCounting = false;
            var u = setInterval(function () {
                if (e.flowStatus == e.FLOW_STATUS.PLAY) {
                    if (!video.paused) {
                        if (video.currentTime != l) {
                            if (!w.isCounting) {
                                e.updatePlayFacade.startCountTimer()
                            }
                        } else {
                            e.updatePlayFacade.stopCountTimer()
                        }
                        l = video.currentTime
                    }
                }
            }, 500)
        }

        function ve() {
            if (!w.hasLoadVrJs) {
                w.hasLoadVrJs = true;
                var t = "//player.polyv.net/script/js/panoramic.min.js";
                if (w.beta_test == "on" || w.beta == "on") {
                    t = "./js/panoramic.min.js"
                }
                e.getScript(t, function () {
                    e("#playbutton").css("display", "block");
                    if (typeof setVrReady == "function") {
                        setVrReady()
                    }
                    w.loadedVrJs = true
                }).fail(function (e, t, n) {
                    console.log(n)
                })
            }
        }

        function ge() {
            w.video.addEventListener("canplay", function () {
                if (typeof s2j_onVideoCanPlay == "function") {
                    s2j_onVideoCanPlay()
                }
                if (w.s2j_onVideoCanPlay) {
                    w.s2j_onVideoCanPlay()
                }
            });
            w.video.addEventListener("playing", function () {
                if (e.flowStatus == e.FLOW_STATUS.PLAY) {
                    e.updatePlayFacade.startCountTimer();
                    if (w.firstToPlayTime > 0 && !w.hasSendLoadingStat) {
                        var t = new Date;
                        w.hasSendLoadingStat = true;
                        var n = {};
                        n.pid = w.pid;
                        n.uid = w.uid;
                        n.vid = w.vid;
                        n.time = t.getTime() - w.firstToPlayTime;
                        n.type = "loading";
                        n.href = e.href;
                        n.param5 = e.version + "_VM";
                        se(n);
                        if (w.previewMode == true) {
                            if (typeof changeDuration == "function" && (w.sourceType == "hlsIndex" || w.sourceType == "hls")) {
                                if (video.duration != "NaN" && video.duration != Infinity && video.duration > 1) {
                                    w.previewlong = video.duration;
                                    delete w.watchEndTime
                                }
                                changeDuration()
                            }
                        }
                        if (w.start > 0 || w.end > 0) {
                            changeDuration();
                            if (w.start > 0) {
                                changeDuration(w.start)
                            }
                        }
                        if (w.title.length > 0 && typeof changeTitle == "function") {
                            changeTitle(w.title)
                        }
                        e.updatePlayFacade.onPlayStart();
                        e.updatePlayFacade.onPlay();
                        if (typeof vrFuc != "undefined") {
                            vrFuc.start()
                        }
                    }
                } else if (e.flowStatus == e.FLOW_STATUS.OVER) {
                    w.j2s_replay()
                }
                e.updatePlayFacade.onPlay()
            });
            w.video.addEventListener("pause", function () {
                e.updatePlayFacade.stopCountTimer();
                if (w.s2j_onVideoPause) {
                    w.s2j_onVideoPause()
                }
                if (typeof s2j_onVideoPause == "function") {
                    s2j_onVideoPause()
                }
                if (e.startDanmu) {
                    e.cmManager.stopTimer()
                }
            });
            var t = 0;
            w.watchStartTime = w.flashvars["watchStartTime"];
            if (!w.watchStartTime) {
                w.watchStartTime = w.watch_start_time
            }
            w.video.addEventListener("ended", function () {
                if (e.flowStatus == e.FLOW_STATUS.TEASER) {
                    if (w.teaser_show == 1) {
                        e.updatePlayFacade.teaserComplete()
                    }
                } else if (e.flowStatus == e.FLOW_STATUS.PREAD) {
                    if (w.adIndex == w.preAd.length - 1) {
                        e.updatePlayFacade.preAdComplete()
                    }
                } else {
                    e.updatePlayFacade.onEnd()
                }
            });
            w.video.addEventListener("loadedmetadata", function () {
            });
            w.watchEndTime = w.flashvars["watchEndTime"];
            if (!w.watchEndTime) {
                w.watchEndTime = w.watch_end_time
            }
            if (w.previewMode) {
                w.watchEndTime = w.previewlong
            }
            var n = -1;
            timeUpdate = function () {
                t = w.video.currentTime;
                if (w.watchEndTime && w.video.currentTime > w.watchEndTime) {
                    w.j2s_stopVideo()
                }
                if (w.end > 0 && w.video.currentTime > w.end) {
                    w.j2s_stopVideo()
                }
                if (e.flowStatus == e.FLOW_STATUS.PLAY || e.flowStatus == e.FLOW_STATUS.PAUSE || e.flowStatus == e.FLOW_STATUS.VISITOR) {
                    if (w.s2j_onTimeUpdate) {
                        w.s2j_onTimeUpdate()
                    }
                    if (w.start > 0 && w.video.currentTime < w.start - .5) {
                        if (w.video.currentTime >= .1) {
                            w.video.currentTime = w.start
                        }
                    }
                    if (!w.isSendOnPlay && w.video.currentTime > .5) {
                        w.isSendOnPlay = true;
                        if (typeof s2j_onVodVideoPlay == "function") {
                            s2j_onVodVideoPlay()
                        }
                        if (w.s2j_onVodVideoPlay) {
                            w.s2j_onVodVideoPlay()
                        }
                    }
                    if (e.startDanmu) {
                        e.cmManager.time(Math.floor(1e3 * w.polyvObjectvideo[0].currentTime))
                    }
                    if (w.watchStartTime && w.watchStartTime != 0) {
                        if (w.video.currentTime >= .1) {
                            w.video.currentTime = w.watchStartTime;
                            w.watchStartTime = 0
                        }
                    }
                    if (w.srt) {
                        w.srt.time(w.polyvObjectvideo[0].currentTime)
                    }
                    if (w.banOverPlay && video.currentTime >= w.previewlong && (new Date).getTime() - n >= 1e3) {
                        n = (new Date).getTime();
                        w.j2s_pauseVideo();
                        w.overPlayType = "play";
                        w.overPlaySec = 0;
                        e.updatePlayFacade.onOverPlay()
                    }
                    if (e.isIOS() && w.userInfoRecord && (!z("autokey" + w.userInfoRecord.autokey) || w.forceUserInfo) && w.hasUserInfoRecord && !w.banVisitorInfo && !w.visitorPass && w.video.currentTime > w.userInfoShowTime) {
                        w.video.pause();
                        U()
                    }
                }
            };
            w.video.addEventListener("timeupdate", timeUpdate);
            w.video.addEventListener("seeking", function () {
                w.seeking = true;
                if (w.s2j_onVideoSeeking) {
                    w.s2j_onVideoSeeking()
                }
                if (e.startDanmu) {
                    e.cmManager.clear()
                }
            });
            w.video.addEventListener("seeked", function () {
                w.seeking = false;
                if (w.s2j_onVideoSeeked) {
                    w.s2j_onVideoSeeked()
                }
            });
            w.video.addEventListener("progress", function () {
                if (w.s2j_onProgressUpdate) {
                    w.s2j_onProgressUpdate()
                }
            });
            w.video.addEventListener("waiting", function () {
                w.recordWaitingTime = w.video.currentTime;
                var e = new Date;
                w.recordWaitingMTime = e.getTime();
                if (!w.isWaiting && !w.seeking && w.video.currentTime > 0) {
                    if (w.waitingTimer) {
                        clearInterval(w.waitingTimer)
                    }
                    w.waitingTimer = setInterval(function () {
                        be(w.video)
                    }, 500)
                }
                if (typeof onbuffer == "function") {
                    onbuffer()
                }
            })
        }

        function me(e, t, n) {
            if (n.src == "") {
                G();
                var i = Y(function (e) {
                    n.src = e
                })
            }
            if (n.poster == "") {
                n.poster = w.first_image
            }
            t.remove();
            ye(e, n)
        }

        function ye(t, n) {
            var i;
            if (t == "video") {
                i = w.video = document.createElement("video");
                w.polyvObjectvideo = polyvObjectvideo = e(i);
                polyvObjectvideo.css({display: "none", height: "100%"});
                e("#plv_container").append(polyvObjectvideo);
                polyvObjectvideo.slideDown(300)
            } else {
                i = w.video = document.createElement("audio");
                w.polyvObjectvideo = polyvObjectvideo = e(i);
                var r = e("<div />");
                r.css({
                    background: 'url("//live.polyv.cn/assets/wimages/audio-bg.png") no-repeat',
                    "background-size": "cover",
                    "background-position": "center center",
                    width: "100%",
                    height: "100%"
                }).attr("id", "audio");
                r.append(w.polyvObjectvideo);
                r.css("display", "none");
                e("#plv_container").append(r);
                r.slideDown(300)
            }
            polyvObjectvideo.attr("webkit-playsinline", "");
            polyvObjectvideo.attr("playsinline", "");
            polyvObjectvideo.attr("x-webkit-airplay", "true");
            polyvObjectvideo.attr("id", w.vid);
            polyvObjectvideo.css("width", "100%");
            polyvObjectvideo.css("height", "100%");
            if (t == "audio") {
                polyvObjectvideo.css({width: 0, height: 0})
            }
            i.autoplay = n.auto;
            i.poster = n.post;
            i.preload = n.pre;
            i.controls = n.con;
            i.src = n.src;
            if (!w.autoplay) {
                i.pause()
            }
            if (!w.openDanMu && w.hasControl == true) {
                if (t == "video") {
                    unbindControlsTouch(e(".plvideo"));
                    unbindControlsTouch(polyvObjectvideo);
                    bindControlsTouch(polyvObjectvideo, false)
                } else {
                    unbindControlsTouch(e(".plvideo"));
                    bindControlsTouch(e(".plvideo"), false)
                }
            }
            ge();
            if (typeof switchMedia == "function") {
                switchMedia()
            }
        }

        function we(t) {
            if (!w.sessionId) {
                if (w.getBase64 != undefined) {
                    w.sessionId = Base64.encode(t)
                } else {
                    e.ajax({
                        url: "//player.polyv.net/script/js/base64.js", dataType: "script", success: function () {
                            w.getBase64 = true;
                            w.sessionId = Base64.encode(t)
                        }, error: function () {
                            if (!w.getSessionBase) {
                                w.getSessionBase = true;
                                we(t)
                            }
                        }
                    })
                }
            }
            return w.sessionId
        }

        function be(t) {
            if (t.currentTime > w.recordWaitingTime && !w.hasSendSecondBuffer) {
                w.hasSendSecondBuffer = true;
                var n = new Date;
                var i = n.getTime() - w.recordWaitingMTime;
                w.isWaiting = true;
                var r = {};
                r.pid = w.pid;
                r.uid = w.uid;
                r.vid = w.vid;
                r.time = i;
                r.type = "buffer";
                r.href = e.href;
                r.domain = e.domain;
                se(r);
                clearInterval(w.waitingTimer)
            }
        }

        function _e(t, n, i) {
            if (!w.autoplay) {
                n.css("background-image", "url(" + i + ")")
            }
            if (w.width.charAt(w.width.length - 1) == "%") {
                t.width(w.width);
                t.height(w.height)
            }
            if (w.ban_skin_progress == "on" || w.ban_skin_progress == true) {
                if (typeof banSkinProgress == "function") {
                    banSkinProgress()
                }
            }
            if (w.useVr && e.checkVrDevice()) {
                n.css("background-image", "url('')")
            }
        }

        function xe(i) {
            e("#plv_container").remove();
            var r = e("<div/>");
            r.addClass("error");
            r.css({color: "white", "letter-spacing": "1px"});
            var a = e("<img/>");
            var o = "//player.polyv.net/script/images/icon.png";
            if (n.beta_test == "on" || n.beta == "on") {
                o = "./images/icon.png"
            }
            a.attr("src", o);
            a.css({width: "80px", height: "80px"});
            if (!arguments[0]) {
                var s = e("<span/>").css({display: "block", padding: "10px 6px 2px 6px"});
                if (w.errorCode == "001" || w.errorCode == "002" || w.errorCode == "004" || w.errorCode == "005" || w.errorCode == "006") {
                    s.html(decodeURIComponent(e.languageParser.error) + "</br>" + "#" + w.errorCode)
                } else if (w.errorCode == "009" || w.errorCode == "010") {
                    s.html(decodeURIComponent(e.languageParser.error3) + "</br>" + "#" + w.errorCode)
                } else {
                    s.html(decodeURIComponent(e.languageParser.error2) + "</br>" + "#" + w.errorCode)
                }
                var l = e("<span/>").css({display: "block", fontSize: "13px", padding: "6px"});
                r.append(a, s, l)
            } else {
                var s = e("<span/>").css({display: "block", padding: "10px 6px 2px 6px"});
                s.html(decodeURIComponent(i));
                if (w.errorCode.indexOf("013") > -1) {
                    s.html(decodeURIComponent(i) + "</br>" + "#" + w.errorCode)
                }
                r.append(a, s)
            }
            t.append(r);
            t.css("display", "table");
            e.updateFlowStatus(e.FLOW_STATUS.ERROR)
        }

        w.j2s_initSrt = function (t, n) {
            if (!arguments[1]) {
                n = false
            }
            if (w.srt_index === t && !n) {
                return
            }
            if (w.srt_list[t] != undefined && w.srt_list[t][1].length > 0) {
                w.srt_index = t;
                var i = e("#srtContainer");
                i.html("");
                if (w.srt) {
                    w.srt.stopTimer()
                }
                w.srt = new Srt(w.srt_list[w.srt_index][1]);
                w.srt.setContainer(i);
                w.srt.startTimer()
            }
        };
        w.j2s_checkPassword = function (e) {
            pe(e)
        };
        w.videoList = [];
        w.playNextIndex = 0;
        w.getList = function (t) {
            var n = "//static.polyv.net/pxml/" + t + ".xml";
            e.ajax({
                type: "GET", url: n, success: function (t) {
                    e(t).find("videodoc").each(function (t) {
                        var n = e(this).children("vid").text();
                        w.videoList.push(n)
                    });
                    if (w.videoList.length == 0) {
                        if (typeof hideNext == "function") {
                            hideNext()
                        }
                    }
                }, error: function () {
                    if (typeof hideNext == "function") {
                        hideNext()
                    }
                }
            })
        };
        return w
    };
    e.fn.previewPlayer = createPreviewPlayer;
    e.fn.videoPlayer = createPlayer;
    e.fn.showPlayer = createShowPlayer;
    e.fn.createPurePlayer = function (t) {
        if (t.vid.length > 34) {
            t.vid = e.decode(t.vid)
        }
        return privateCreate(this, t)
    };
    e.createH5Player = function (e, t, n) {
        if (t.height == 0) {
            t.height = parseInt(e.width() * 9 / 16)
        }
        e.children().remove();
        var i = polyvPlayer({
            wrap: e[0],
            width: t.width,
            height: t.height,
            vid: t.vid,
            autoplay: t.autoplay,
            playsafe: t.playsafe,
            options: t
        });
        return i
    };
    e.getPid = function t() {
        var e = new Date;
        var t = e.getTime() + "";
        var n = parseInt(Math.random() * 1e6 + 1e6) + "";
        return t + "X" + n
    };
    e.getPlayer = function n(e) {
        if (navigator.appName.indexOf("Microsoft") != -1) {
            var t = window[e];
            try {
                if (t.length > 0) {
                    return t[0]
                } else {
                    return t
                }
            } catch (n) {
            }
            return document[e]
        } else {
            return document[e]
        }
    };
    e.getUrlStatus = function (t) {
        t.code = 0;
        if (t.src != "") {
            e.ajax({
                url: t.src, type: "GET", success: function (e) {
                    t.code = 200;
                    if (typeof s2j_onPlayerError == "function") {
                        s2j_onPlayerError(t)
                    }
                }, error: function (e) {
                    t.code = e.status;
                    if (typeof s2j_onPlayerError == "function") {
                        s2j_onPlayerError(t)
                    }
                }
            })
        } else {
            if (typeof s2j_onPlayerError == "function") {
                s2j_onPlayerError(t)
            }
        }
    };
    e.playerType = {FLASH: "flash", HTML: "html", INSTALLER: "installer", NO_SUPPORT: "nosupport"};
    e.determinePlayerType = function (t, n, i) {
        if (t.forceHTML5) {
            return e.playerType.HTML
        }
        if (t.forceFlash) {
            return e.playerType.FLASH
        }
        if (e.isSupportedHTMLDevice()) {
            if (i) {
                return e.playerType.HTML
            }
        }
        if (e.isFirefox() == true) {
            if (n == null) {
                return e.playerType.INSTALLER
            }
            return e.playerType.FLASH
        }
        if (n == null && i == false) {
            return e.playerType.NO_SUPPORT
        }
        if (n != null) {
            if (e.isFlashVersionSufficient(n)) {
                return e.playerType.FLASH
            } else {
                return e.playerType.INSTALLER
            }
        }
        if (i) {
            return e.playerType.HTML
        }
        return e.playerType.NO_SUPPORT
    };
    e.isFlashVersionSufficient = function (t) {
        if (t == null)return false;
        if (t.majorVersion > e.majorVersion || t.majorVersion == e.majorVersion && t.majorRevision > e.majorRevision) {
            return true
        }
        return false
    };
    e.isFirefox = function () {
        if (navigator.userAgent.match(new RegExp("Firefox", "i"))) {
            return true
        } else {
            return false
        }
    };
    e.isIphone = function () {
        if (navigator.userAgent.indexOf("iPhone") > -1) {
            return true
        } else {
            return false
        }
    };
    e.checkHtmlSupport = function () {
        var t = document.createElement("video");
        var n = document.createElement("canvas");
        var i = true;
        if (!navigator.userAgent.match(new RegExp("android", "i"))) {
            i = !!(t.canPlayType && t.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""))
        }
        var r = !!document.createElement("canvas").getContext;
        return i && r && e.isSupportedHTMLDevice()
    };
    e.checkLowerDevice = function () {
        var e = window.screen.height == 960 / 2;
        if (window.devicePixelRatio == 1) {
            e = true
        }
        return e
    };
    e.isIOS = function (e) {
        var t = ["iPad", "iPhone", "iPod"];
        var n = t.length;
        var i = e || navigator.userAgent;
        for (var r = 0; r < n; r++) {
            if (i.match(new RegExp(t[r], "i"))) {
                return true
            }
        }
        return false
    };
    e.iosVersion = function () {
        var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        e = parseInt(e[1], 10);
        return e
    };
    e.isSupportPlaybackRate = function () {
        if (e.isIOS() && (e.isWeixin() || e.isSafari() || e.isInternalQQ())) {
            return true
        }
        return false
    };
    e.isInternalQQ = function () {
        var e = navigator.userAgent;
        if (e.indexOf("QQ/") > -1) {
            return true
        }
        return false
    };
    e.isWeixin = function () {
        var e = navigator.userAgent.toLowerCase();
        return /micromessenger/.test(e) ? true : false
    };
    e.isSafari = function () {
        var e = navigator.userAgent;
        if (e.indexOf("Safari") > -1) {
            return true
        }
        return false
    };
    e.isUc = function (e) {
        var t = e || navigator.userAgent;
        if (t.indexOf("UCBrowser") != -1 || t.indexOf("UCWEB") != -1) {
            return true
        }
        return false
    };
    e.isAndroidQQ = function () {
        var t = navigator.userAgent;
        if (t.indexOf("MQQBrowser") > -1 && t.indexOf("TBS") < 0 && e.isAndroid()) {
            return true
        }
        return false
    };
    e.isQQ = function () {
        var e = navigator.userAgent;
        if (e.indexOf("MQQBrowser") > -1) {
            return true
        }
        return false
    };
    e.isChrome = function () {
        var e = navigator.userAgent;
        var t = false;
        if (e.indexOf("Chrome") != -1 && e.toLowerCase().indexOf("micromessenger") == -1 && e.indexOf("MQQBrowser") == -1 && e.indexOf("UCBrowser") == -1 && e.indexOf("baidubrowser") == -1) {
            t = true
        }
        return t
    };
    e.isHuaWei = function () {
        var t = navigator.userAgent;
        var n = false;
        if ((t.indexOf("HUAWEI") != -1 || t.indexOf("HONO") != -1) && e.isChrome()) {
            n = true
        }
        return n
    };
    e.isSAMSUNG = function () {
        var t = navigator.userAgent;
        var n = false;
        if (t.indexOf("SM-") && e.isChrome()) {
            n = true
        }
        return n
    };
    e.isQuark = function () {
        var e = navigator.userAgent;
        if (e.indexOf("Quark") > -1) {
            return true
        }
        return false
    };
    e.isBanBrowser = function () {
        if (e.isAndroid() && (e.isAndroidQQ() || e.isUc() || e.isHuaWei() || e.isQuark())) {
            return true
        }
        return false
    };
    e.isSupportedHTMLDevice = function (e) {
        var t = ["iPad", "iPhone", "iPod", "android"];
        var n = t.length;
        var i = e || navigator.userAgent;
        for (var r = 0; r < n; r++) {
            if (i.match(new RegExp(t[r], "i"))) {
                return true
            }
        }
        return false
    };
    e.isSupportHTML5 = function () {
        window.MediaSource = window.MediaSource || window.WebKitMediaSource;
        return window.MediaSource && typeof window.MediaSource.isTypeSupported === "function" && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
    };
    e.isAndroid = function () {
        if (navigator.userAgent.match(new RegExp("android", "i"))) {
            return true
        }
        return false
    };
    e.isIE = function () {
        if (!!window.ActiveXObject || "ActiveXObject"in window)return true; else return false
    };
    e.isIEVersion = function (e) {
        var t = document.createElement("b");
        t.innerHTML = "<!--[if IE " + e + "]><i></i><![endif]-->";
        return t.getElementsByTagName("i").length === 1
    };
    e.isWinXP = function () {
        var e = navigator.userAgent;
        var t = false;
        t = e.indexOf("Windows NT 5.1") > -1 || e.indexOf("Windows Xp") > -1;
        return t
    };
    e.checkFlashSupport = function () {
        var t = e.isIE() ? e.checkFlashSupportIE() : e.checkFlashSupportStandard();
        return t
    };
    e.checkFlashSupportIE = function () {
        var e;
        try {
            var t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            var n = t.GetVariable("$version");
            e = / ([0-9]+),([0-9]+),([0-9]+),/.exec(n)
        } catch (i) {
            return null
        }
        return {majorVersion: e[1], majorRevision: e[2], minorRevision: e[3]}
    };
    e.checkFlashSupportStandard = function () {
        var e;
        var t;
        var n;
        var i;
        try {
            if (typeof navigator.plugins != "undefined" && navigator.plugins.length > 0) {
                if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
                    var r = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
                    var a = navigator.plugins["Shockwave Flash" + r].description;
                    var o = navigator.plugins["Shockwave Flash" + r].filename;
                    if (o.match) {
                        if (o.toLowerCase().match(/lite/)) {
                            throw new Error
                        }
                    }
                    e = a.split(" ");
                    t = e[2].split(".")[0];
                    n = e[2].split(".")[1];
                    i = e[3];
                    if (i == "") {
                        i = e[4]
                    }
                    if (i[0] == "d") {
                        i = i.substring(1)
                    } else if (i[0] == "r") {
                        i = i.substring(1);
                        if (i.indexOf("d") > 0) {
                            i = i.substring(0, i.indexOf("d"))
                        }
                    }
                } else {
                    throw new Error
                }
            } else {
                return null
            }
        } catch (s) {
            return null
        }
        return {majorVersion: t, majorRevision: n, minorRevision: i}
    };
    e.decode = function (e) {
        var t, n, i, r, a, o;
        t = "abcdofghijklnmepqrstuvwxyz0123456789";
        o = "lpmkenjibhuvgycftxdrzsoawq0126783459";
        if (e.length == 34) {
            n = e
        } else {
            e = e.substr(1);
            n = "";
            for (i = 0; i < e.length; i++) {
                r = e.charAt(i);
                a = o.indexOf(r);
                if (a == -1) {
                    n = n + r
                } else {
                    n = n + t.charAt(a)
                }
            }
        }
        return n
    };
    e.H5 = false;
    e.getIosCss = function () {
        return e("<style type='text/css'>video::-webkit-media-controls-panel {display: none!important;-webkit-appearance: none;}video::--webkit-media-controls-play-button{display: none!important;-webkit-appearance: none;}video::-webkit-media-controls-start-playback-button {display: none!important;-webkit-appearance: none}</style>")
    };
    e.checkVrDevice = function () {
        if (e.isAndroid() && (e.isChrome() || e.isWeixin())) {
            return true
        }
        if (e.isIOS() && e.isWeixin()) {
            return true
        }
        return false
    };
    e.stringToBytes = function (e) {
        var t, n, i = [];
        for (var r = 0; r < e.length; r++) {
            t = e.charCodeAt(r);
            n = [];
            do {
                n.push(t & 255);
                t = t >> 8
            } while (t);
            i = i.concat(n.reverse())
        }
        return i
    };
    e.checkQiHoo = function () {
        if (!e.isIE()) {
            var t = i("type", "application/vnd.chromium.remoting-viewer");
            if (n() && t) {
                return true
            } else {
                return false
            }
        }
        function n() {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("chrome") > 1
        }

        function i(e, t) {
            var n = navigator.mimeTypes;
            for (var i in n) {
                if (n[i][e] == t) {
                    return true
                }
            }
            return false
        }

        return false
    };
    e.FLOW_STATUS = {
        LOADING: "loading",
        TEASER: "teaser",
        PREAD: "preAd",
        PLAY: "play",
        PAUSE: "pause",
        VISITOR: "visitor",
        ENDAD: "endAd",
        OVER: "over",
        ERROR: "error"
    };
    e.updateFlowStatus = function (t) {
        e.flowStatus = t;
        if (typeof updateFlow == "function") {
            updateFlow(t)
        }
    }
})(polyvObject);