(this["webpackJsonp@livechat/chat-widget"] = this["webpackJsonp@livechat/chat-widget"] || []).push([
    [0], {
        283: function(e, t, u) {
            e.exports = function() {
                "use strict";

                function e(e, t) {
                    for (var u = 0; u < t.length; u++) {
                        var n = t[u];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function t(t, u, n) {
                    return u && e(t.prototype, u), n && e(t, n), t
                }

                function u(e, t) {
                    if (e) {
                        if ("string" === typeof e) return n(e, t);
                        var u = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === u && e.constructor && (u = e.constructor.name), "Map" === u || "Set" === u ? Array.from(e) : "Arguments" === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u) ? n(e, t) : void 0
                    }
                }

                function n(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n
                }

                function r(e, t) {
                    var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (Array.isArray(e) || (n = u(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0;
                        return function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i = {
                    exports: {}
                };

                function s() {
                    return {
                        baseUrl: null,
                        breaks: !1,
                        extensions: null,
                        gfm: !0,
                        headerIds: !0,
                        headerPrefix: "",
                        highlight: null,
                        langPrefix: "language-",
                        mangle: !0,
                        pedantic: !1,
                        renderer: null,
                        sanitize: !1,
                        sanitizer: null,
                        silent: !1,
                        smartLists: !1,
                        smartypants: !1,
                        tokenizer: null,
                        walkTokens: null,
                        xhtml: !1
                    }
                }

                function l(e) {
                    i.exports.defaults = e
                }
                i.exports = {
                    defaults: s(),
                    getDefaults: s,
                    changeDefaults: l
                };
                var a = /[&<>"']/,
                    o = /[&<>"']/g,
                    D = /[<>"']|&(?!#?\w+;)/,
                    c = /[<>"']|&(?!#?\w+;)/g,
                    h = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;"
                    },
                    p = function(e) {
                        return h[e]
                    };

                function g(e, t) {
                    if (t) {
                        if (a.test(e)) return e.replace(o, p)
                    } else if (D.test(e)) return e.replace(c, p);
                    return e
                }
                var f = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;

                function F(e) {
                    return e.replace(f, (function(e, t) {
                        return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
                    }))
                }
                var A = /(^|[^\[])\^/g;

                function d(e, t) {
                    e = e.source || e, t = t || "";
                    var u = {
                        replace: function(t, n) {
                            return n = (n = n.source || n).replace(A, "$1"), e = e.replace(t, n), u
                        },
                        getRegex: function() {
                            return new RegExp(e, t)
                        }
                    };
                    return u
                }
                var C = /[^\w:]/g,
                    k = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

                function E(e, t, u) {
                    if (e) {
                        var n;
                        try {
                            n = decodeURIComponent(F(u)).replace(C, "").toLowerCase()
                        } catch (r) {
                            return null
                        }
                        if (0 === n.indexOf("javascript:") || 0 === n.indexOf("vbscript:") || 0 === n.indexOf("data:")) return null
                    }
                    t && !k.test(u) && (u = w(t, u));
                    try {
                        u = encodeURI(u).replace(/%25/g, "%")
                    } catch (r) {
                        return null
                    }
                    return u
                }
                var x = {},
                    m = /^[^:]+:\/*[^/]*$/,
                    b = /^([^:]+:)[\s\S]*$/,
                    B = /^([^:]+:\/*[^/]*)[\s\S]*$/;

                function w(e, t) {
                    x[" " + e] || (m.test(e) ? x[" " + e] = e + "/" : x[" " + e] = _(e, "/", !0));
                    var u = -1 === (e = x[" " + e]).indexOf(":");
                    return "//" === t.substring(0, 2) ? u ? t : e.replace(b, "$1") + t : "/" === t.charAt(0) ? u ? t : e.replace(B, "$1") + t : e + t
                }

                function v(e) {
                    for (var t, u, n = 1; n < arguments.length; n++)
                        for (u in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, u) && (e[u] = t[u]);
                    return e
                }

                function y(e, t) {
                    var u = e.replace(/\|/g, (function(e, t, u) {
                            for (var n = !1, r = t; --r >= 0 && "\\" === u[r];) n = !n;
                            return n ? "|" : " |"
                        })).split(/ \|/),
                        n = 0;
                    if (u.length > t) u.splice(t);
                    else
                        for (; u.length < t;) u.push("");
                    for (; n < u.length; n++) u[n] = u[n].trim().replace(/\\\|/g, "|");
                    return u
                }

                function _(e, t, u) {
                    var n = e.length;
                    if (0 === n) return "";
                    for (var r = 0; r < n;) {
                        var i = e.charAt(n - r - 1);
                        if (i !== t || u) {
                            if (i === t || !u) break;
                            r++
                        } else r++
                    }
                    return e.substr(0, n - r)
                }

                function z(e, t) {
                    if (-1 === e.indexOf(t[1])) return -1;
                    for (var u = e.length, n = 0, r = 0; r < u; r++)
                        if ("\\" === e[r]) r++;
                        else if (e[r] === t[0]) n++;
                    else if (e[r] === t[1] && --n < 0) return r;
                    return -1
                }

                function $(e) {
                    e && e.sanitize && !e.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")
                }

                function S(e, t) {
                    if (t < 1) return "";
                    for (var u = ""; t > 1;) 1 & t && (u += e), t >>= 1, e += e;
                    return u + e
                }
                var T = {
                        escape: g,
                        unescape: F,
                        edit: d,
                        cleanUrl: E,
                        resolveUrl: w,
                        noopTest: {
                            exec: function() {}
                        },
                        merge: v,
                        splitCells: y,
                        rtrim: _,
                        findClosingBracket: z,
                        checkSanitizeDeprecation: $,
                        repeatString: S
                    },
                    I = i.exports.defaults,
                    R = T.rtrim,
                    q = T.splitCells,
                    Z = T.escape,
                    O = T.findClosingBracket;

                function j(e, t, u) {
                    var n = t.href,
                        r = t.title ? Z(t.title) : null,
                        i = e[1].replace(/\\([\[\]])/g, "$1");
                    return "!" !== e[0].charAt(0) ? {
                        type: "link",
                        raw: u,
                        href: n,
                        title: r,
                        text: i
                    } : {
                        type: "image",
                        raw: u,
                        href: n,
                        title: r,
                        text: Z(i)
                    }
                }

                function U(e, t) {
                    var u = e.match(/^(\s+)(?:```)/);
                    if (null === u) return t;
                    var n = u[1];
                    return t.split("\n").map((function(e) {
                        var t = e.match(/^\s+/);
                        return null === t ? e : t[0].length >= n.length ? e.slice(n.length) : e
                    })).join("\n")
                }
                var P = function() {
                        function e(e) {
                            this.options = e || I
                        }
                        var t = e.prototype;
                        return t.space = function(e) {
                            var t = this.rules.block.newline.exec(e);
                            if (t) return t[0].length > 1 ? {
                                type: "space",
                                raw: t[0]
                            } : {
                                raw: "\n"
                            }
                        }, t.code = function(e) {
                            var t = this.rules.block.code.exec(e);
                            if (t) {
                                var u = t[0].replace(/^ {1,4}/gm, "");
                                return {
                                    type: "code",
                                    raw: t[0],
                                    codeBlockStyle: "indented",
                                    text: this.options.pedantic ? u : R(u, "\n")
                                }
                            }
                        }, t.fences = function(e) {
                            var t = this.rules.block.fences.exec(e);
                            if (t) {
                                var u = t[0],
                                    n = U(u, t[3] || "");
                                return {
                                    type: "code",
                                    raw: u,
                                    lang: t[2] ? t[2].trim() : t[2],
                                    text: n
                                }
                            }
                        }, t.heading = function(e) {
                            var t = this.rules.block.heading.exec(e);
                            if (t) {
                                var u = t[2].trim();
                                if (/#$/.test(u)) {
                                    var n = R(u, "#");
                                    this.options.pedantic ? u = n.trim() : n && !/ $/.test(n) || (u = n.trim())
                                }
                                return {
                                    type: "heading",
                                    raw: t[0],
                                    depth: t[1].length,
                                    text: u
                                }
                            }
                        }, t.nptable = function(e) {
                            var t = this.rules.block.nptable.exec(e);
                            if (t) {
                                var u = {
                                    type: "table",
                                    header: q(t[1].replace(/^ *| *\| *$/g, "")),
                                    align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                    cells: t[3] ? t[3].replace(/\n$/, "").split("\n") : [],
                                    raw: t[0]
                                };
                                if (u.header.length === u.align.length) {
                                    var n, r = u.align.length;
                                    for (n = 0; n < r; n++) /^ *-+: *$/.test(u.align[n]) ? u.align[n] = "right" : /^ *:-+: *$/.test(u.align[n]) ? u.align[n] = "center" : /^ *:-+ *$/.test(u.align[n]) ? u.align[n] = "left" : u.align[n] = null;
                                    for (r = u.cells.length, n = 0; n < r; n++) u.cells[n] = q(u.cells[n], u.header.length);
                                    return u
                                }
                            }
                        }, t.hr = function(e) {
                            var t = this.rules.block.hr.exec(e);
                            if (t) return {
                                type: "hr",
                                raw: t[0]
                            }
                        }, t.blockquote = function(e) {
                            var t = this.rules.block.blockquote.exec(e);
                            if (t) {
                                var u = t[0].replace(/^ *> ?/gm, "");
                                return {
                                    type: "blockquote",
                                    raw: t[0],
                                    text: u
                                }
                            }
                        }, t.list = function(e) {
                            var t = this.rules.block.list.exec(e);
                            if (t) {
                                var u, n, r, i, s, l, a, o, D, c = t[0],
                                    h = t[2],
                                    p = h.length > 1,
                                    g = {
                                        type: "list",
                                        raw: c,
                                        ordered: p,
                                        start: p ? +h.slice(0, -1) : "",
                                        loose: !1,
                                        items: []
                                    },
                                    f = t[0].match(this.rules.block.item),
                                    F = !1,
                                    A = f.length;
                                r = this.rules.block.listItemStart.exec(f[0]);
                                for (var d = 0; d < A; d++) {
                                    if (c = u = f[d], this.options.pedantic || (D = u.match(new RegExp("\\n\\s*\\n {0," + (r[0].length - 1) + "}\\S"))) && (s = u.length - D.index + f.slice(d + 1).join("\n").length, g.raw = g.raw.substring(0, g.raw.length - s), c = u = u.substring(0, D.index), A = d + 1), d !== A - 1) {
                                        if (i = this.rules.block.listItemStart.exec(f[d + 1]), this.options.pedantic ? i[1].length > r[1].length : i[1].length >= r[0].length || i[1].length > 3) {
                                            f.splice(d, 2, f[d] + (!this.options.pedantic && i[1].length < r[0].length && !f[d].match(/\n$/) ? "" : "\n") + f[d + 1]), d--, A--;
                                            continue
                                        }(!this.options.pedantic || this.options.smartLists ? i[2][i[2].length - 1] !== h[h.length - 1] : p === (1 === i[2].length)) && (s = f.slice(d + 1).join("\n").length, g.raw = g.raw.substring(0, g.raw.length - s), d = A - 1), r = i
                                    }
                                    n = u.length, ~(u = u.replace(/^ *([*+-]|\d+[.)]) ?/, "")).indexOf("\n ") && (n -= u.length, u = this.options.pedantic ? u.replace(/^ {1,4}/gm, "") : u.replace(new RegExp("^ {1," + n + "}", "gm"), "")), u = R(u, "\n"), d !== A - 1 && (c += "\n"), l = F || /\n\n(?!\s*$)/.test(c), d !== A - 1 && (F = "\n\n" === c.slice(-2), l || (l = F)), l && (g.loose = !0), this.options.gfm && (o = void 0, (a = /^\[[ xX]\] /.test(u)) && (o = " " !== u[1], u = u.replace(/^\[[ xX]\] +/, ""))), g.items.push({
                                        type: "list_item",
                                        raw: c,
                                        task: a,
                                        checked: o,
                                        loose: l,
                                        text: u
                                    })
                                }
                                return g
                            }
                        }, t.html = function(e) {
                            var t = this.rules.block.html.exec(e);
                            if (t) return {
                                type: this.options.sanitize ? "paragraph" : "html",
                                raw: t[0],
                                pre: !this.options.sanitizer && ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
                                text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : Z(t[0]) : t[0]
                            }
                        }, t.def = function(e) {
                            var t = this.rules.block.def.exec(e);
                            if (t) return t[3] && (t[3] = t[3].substring(1, t[3].length - 1)), {
                                type: "def",
                                tag: t[1].toLowerCase().replace(/\s+/g, " "),
                                raw: t[0],
                                href: t[2],
                                title: t[3]
                            }
                        }, t.table = function(e) {
                            var t = this.rules.block.table.exec(e);
                            if (t) {
                                var u = {
                                    type: "table",
                                    header: q(t[1].replace(/^ *| *\| *$/g, "")),
                                    align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                    cells: t[3] ? t[3].replace(/\n$/, "").split("\n") : []
                                };
                                if (u.header.length === u.align.length) {
                                    u.raw = t[0];
                                    var n, r = u.align.length;
                                    for (n = 0; n < r; n++) /^ *-+: *$/.test(u.align[n]) ? u.align[n] = "right" : /^ *:-+: *$/.test(u.align[n]) ? u.align[n] = "center" : /^ *:-+ *$/.test(u.align[n]) ? u.align[n] = "left" : u.align[n] = null;
                                    for (r = u.cells.length, n = 0; n < r; n++) u.cells[n] = q(u.cells[n].replace(/^ *\| *| *\| *$/g, ""), u.header.length);
                                    return u
                                }
                            }
                        }, t.lheading = function(e) {
                            var t = this.rules.block.lheading.exec(e);
                            if (t) return {
                                type: "heading",
                                raw: t[0],
                                depth: "=" === t[2].charAt(0) ? 1 : 2,
                                text: t[1]
                            }
                        }, t.paragraph = function(e) {
                            var t = this.rules.block.paragraph.exec(e);
                            if (t) return {
                                type: "paragraph",
                                raw: t[0],
                                text: "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1]
                            }
                        }, t.text = function(e) {
                            var t = this.rules.block.text.exec(e);
                            if (t) return {
                                type: "text",
                                raw: t[0],
                                text: t[0]
                            }
                        }, t.escape = function(e) {
                            var t = this.rules.inline.escape.exec(e);
                            if (t) return {
                                type: "escape",
                                raw: t[0],
                                text: Z(t[1])
                            }
                        }, t.tag = function(e, t, u) {
                            var n = this.rules.inline.tag.exec(e);
                            if (n) return !t && /^<a /i.test(n[0]) ? t = !0 : t && /^<\/a>/i.test(n[0]) && (t = !1), !u && /^<(pre|code|kbd|script)(\s|>)/i.test(n[0]) ? u = !0 : u && /^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0]) && (u = !1), {
                                type: this.options.sanitize ? "text" : "html",
                                raw: n[0],
                                inLink: t,
                                inRawBlock: u,
                                text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(n[0]) : Z(n[0]) : n[0]
                            }
                        }, t.link = function(e) {
                            var t = this.rules.inline.link.exec(e);
                            if (t) {
                                var u = t[2].trim();
                                if (!this.options.pedantic && /^</.test(u)) {
                                    if (!/>$/.test(u)) return;
                                    var n = R(u.slice(0, -1), "\\");
                                    if ((u.length - n.length) % 2 === 0) return
                                } else {
                                    var r = O(t[2], "()");
                                    if (r > -1) {
                                        var i = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + r;
                                        t[2] = t[2].substring(0, r), t[0] = t[0].substring(0, i).trim(), t[3] = ""
                                    }
                                }
                                var s = t[2],
                                    l = "";
                                if (this.options.pedantic) {
                                    var a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
                                    a && (s = a[1], l = a[3])
                                } else l = t[3] ? t[3].slice(1, -1) : "";
                                return s = s.trim(), /^</.test(s) && (s = this.options.pedantic && !/>$/.test(u) ? s.slice(1) : s.slice(1, -1)), j(t, {
                                    href: s ? s.replace(this.rules.inline._escapes, "$1") : s,
                                    title: l ? l.replace(this.rules.inline._escapes, "$1") : l
                                }, t[0])
                            }
                        }, t.reflink = function(e, t) {
                            var u;
                            if ((u = this.rules.inline.reflink.exec(e)) || (u = this.rules.inline.nolink.exec(e))) {
                                var n = (u[2] || u[1]).replace(/\s+/g, " ");
                                if (!(n = t[n.toLowerCase()]) || !n.href) {
                                    var r = u[0].charAt(0);
                                    return {
                                        type: "text",
                                        raw: r,
                                        text: r
                                    }
                                }
                                return j(u, n, u[0])
                            }
                        }, t.emStrong = function(e, t, u) {
                            void 0 === u && (u = "");
                            var n = this.rules.inline.emStrong.lDelim.exec(e);
                            if (n && (!n[3] || !u.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))) {
                                var r = n[1] || n[2] || "";
                                if (!r || r && ("" === u || this.rules.inline.punctuation.exec(u))) {
                                    var i, s, l = n[0].length - 1,
                                        a = l,
                                        o = 0,
                                        D = "*" === n[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                                    for (D.lastIndex = 0, t = t.slice(-1 * e.length + l); null != (n = D.exec(t));)
                                        if (i = n[1] || n[2] || n[3] || n[4] || n[5] || n[6])
                                            if (s = i.length, n[3] || n[4]) a += s;
                                            else if (!((n[5] || n[6]) && l % 3) || (l + s) % 3) {
                                        if (!((a -= s) > 0)) return s = Math.min(s, s + a + o), Math.min(l, s) % 2 ? {
                                            type: "em",
                                            raw: e.slice(0, l + n.index + s + 1),
                                            text: e.slice(1, l + n.index + s)
                                        } : {
                                            type: "strong",
                                            raw: e.slice(0, l + n.index + s + 1),
                                            text: e.slice(2, l + n.index + s - 1)
                                        }
                                    } else o += s
                                }
                            }
                        }, t.codespan = function(e) {
                            var t = this.rules.inline.code.exec(e);
                            if (t) {
                                var u = t[2].replace(/\n/g, " "),
                                    n = /[^ ]/.test(u),
                                    r = /^ /.test(u) && / $/.test(u);
                                return n && r && (u = u.substring(1, u.length - 1)), u = Z(u, !0), {
                                    type: "codespan",
                                    raw: t[0],
                                    text: u
                                }
                            }
                        }, t.br = function(e) {
                            var t = this.rules.inline.br.exec(e);
                            if (t) return {
                                type: "br",
                                raw: t[0]
                            }
                        }, t.del = function(e) {
                            var t = this.rules.inline.del.exec(e);
                            if (t) return {
                                type: "del",
                                raw: t[0],
                                text: t[2]
                            }
                        }, t.autolink = function(e, t) {
                            var u, n, r = this.rules.inline.autolink.exec(e);
                            if (r) return n = "@" === r[2] ? "mailto:" + (u = Z(this.options.mangle ? t(r[1]) : r[1])) : u = Z(r[1]), {
                                type: "link",
                                raw: r[0],
                                text: u,
                                href: n,
                                tokens: [{
                                    type: "text",
                                    raw: u,
                                    text: u
                                }]
                            }
                        }, t.url = function(e, t) {
                            var u;
                            if (u = this.rules.inline.url.exec(e)) {
                                var n, r;
                                if ("@" === u[2]) r = "mailto:" + (n = Z(this.options.mangle ? t(u[0]) : u[0]));
                                else {
                                    var i;
                                    do {
                                        i = u[0], u[0] = this.rules.inline._backpedal.exec(u[0])[0]
                                    } while (i !== u[0]);
                                    n = Z(u[0]), r = "www." === u[1] ? "http://" + n : n
                                }
                                return {
                                    type: "link",
                                    raw: u[0],
                                    text: n,
                                    href: r,
                                    tokens: [{
                                        type: "text",
                                        raw: n,
                                        text: n
                                    }]
                                }
                            }
                        }, t.inlineText = function(e, t, u) {
                            var n, r = this.rules.inline.text.exec(e);
                            if (r) return n = t ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r[0]) : Z(r[0]) : r[0] : Z(this.options.smartypants ? u(r[0]) : r[0]), {
                                type: "text",
                                raw: r[0],
                                text: n
                            }
                        }, e
                    }(),
                    L = T.noopTest,
                    M = T.edit,
                    N = T.merge,
                    J = {
                        newline: /^(?: *(?:\n|$))+/,
                        code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
                        fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
                        hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
                        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
                        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                        list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
                        html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
                        def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
                        nptable: L,
                        table: L,
                        lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
                        _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
                        text: /^[^\n]+/,
                        _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
                        _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
                    };
                J.def = M(J.def).replace("label", J._label).replace("title", J._title).getRegex(), J.bullet = /(?:[*+-]|\d{1,9}[.)])/, J.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/, J.item = M(J.item, "gm").replace(/bull/g, J.bullet).getRegex(), J.listItemStart = M(/^( *)(bull) */).replace("bull", J.bullet).getRegex(), J.list = M(J.list).replace(/bull/g, J.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + J.def.source + ")").getRegex(), J._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", J._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, J.html = M(J.html, "i").replace("comment", J._comment).replace("tag", J._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), J.paragraph = M(J._paragraph).replace("hr", J.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", J._tag).getRegex(), J.blockquote = M(J.blockquote).replace("paragraph", J.paragraph).getRegex(), J.normal = N({}, J), J.gfm = N({}, J.normal, {
                    nptable: "^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
                    table: "^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
                }), J.gfm.nptable = M(J.gfm.nptable).replace("hr", J.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", J._tag).getRegex(), J.gfm.table = M(J.gfm.table).replace("hr", J.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", J._tag).getRegex(), J.pedantic = N({}, J.normal, {
                    html: M("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", J._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
                    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
                    heading: /^(#{1,6})(.*)(?:\n+|$)/,
                    fences: L,
                    paragraph: M(J.normal._paragraph).replace("hr", J.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", J.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
                });
                var X = {
                    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
                    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
                    url: L,
                    tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
                    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
                    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
                    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
                    reflinkSearch: "reflink|nolink(?!\\()",
                    emStrong: {
                        lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
                        rDelimAst: /\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
                        rDelimUnd: /\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
                    },
                    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
                    br: /^( {2,}|\\)\n(?!\s*$)/,
                    del: L,
                    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
                    punctuation: /^([\spunctuation])/,
                    _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"
                };
                X.punctuation = M(X.punctuation).replace(/punctuation/g, X._punctuation).getRegex(), X.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, X.escapedEmSt = /\\\*|\\_/g, X._comment = M(J._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(), X.emStrong.lDelim = M(X.emStrong.lDelim).replace(/punct/g, X._punctuation).getRegex(), X.emStrong.rDelimAst = M(X.emStrong.rDelimAst, "g").replace(/punct/g, X._punctuation).getRegex(), X.emStrong.rDelimUnd = M(X.emStrong.rDelimUnd, "g").replace(/punct/g, X._punctuation).getRegex(), X._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, X._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, X._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, X.autolink = M(X.autolink).replace("scheme", X._scheme).replace("email", X._email).getRegex(), X._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, X.tag = M(X.tag).replace("comment", X._comment).replace("attribute", X._attribute).getRegex(), X._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, X._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, X._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, X.link = M(X.link).replace("label", X._label).replace("href", X._href).replace("title", X._title).getRegex(), X.reflink = M(X.reflink).replace("label", X._label).getRegex(), X.reflinkSearch = M(X.reflinkSearch, "g").replace("reflink", X.reflink).replace("nolink", X.nolink).getRegex(), X.normal = N({}, X), X.pedantic = N({}, X.normal, {
                    strong: {
                        start: /^__|\*\*/,
                        middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                        endAst: /\*\*(?!\*)/g,
                        endUnd: /__(?!_)/g
                    },
                    em: {
                        start: /^_|\*/,
                        middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
                        endAst: /\*(?!\*)/g,
                        endUnd: /_(?!_)/g
                    },
                    link: M(/^!?\[(label)\]\((.*?)\)/).replace("label", X._label).getRegex(),
                    reflink: M(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", X._label).getRegex()
                }), X.gfm = N({}, X.normal, {
                    escape: M(X.escape).replace("])", "~|])").getRegex(),
                    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
                    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
                    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
                    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
                    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
                }), X.gfm.url = M(X.gfm.url, "i").replace("email", X.gfm._extended_email).getRegex(), X.breaks = N({}, X.gfm, {
                    br: M(X.br).replace("{2,}", "*").getRegex(),
                    text: M(X.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
                });
                var G = {
                        block: J,
                        inline: X
                    },
                    V = P,
                    H = i.exports.defaults,
                    K = G.block,
                    Q = G.inline,
                    W = T.repeatString;

                function Y(e) {
                    return e.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c").replace(/"/g, "\u201d").replace(/\.{3}/g, "\u2026")
                }

                function ee(e) {
                    var t, u, n = "",
                        r = e.length;
                    for (t = 0; t < r; t++) u = e.charCodeAt(t), Math.random() > .5 && (u = "x" + u.toString(16)), n += "&#" + u + ";";
                    return n
                }
                var te = function() {
                        function e(e) {
                            this.tokens = [], this.tokens.links = Object.create(null), this.options = e || H, this.options.tokenizer = this.options.tokenizer || new V, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options;
                            var t = {
                                block: K.normal,
                                inline: Q.normal
                            };
                            this.options.pedantic ? (t.block = K.pedantic, t.inline = Q.pedantic) : this.options.gfm && (t.block = K.gfm, this.options.breaks ? t.inline = Q.breaks : t.inline = Q.gfm), this.tokenizer.rules = t
                        }
                        e.lex = function(t, u) {
                            return new e(u).lex(t)
                        }, e.lexInline = function(t, u) {
                            return new e(u).inlineTokens(t)
                        };
                        var u = e.prototype;
                        return u.lex = function(e) {
                            return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e, this.tokens, !0), this.inline(this.tokens), this.tokens
                        }, u.blockTokens = function(e, t, u) {
                            var n, r, i, s, l, a, o = this;
                            for (void 0 === t && (t = []), void 0 === u && (u = !0), this.options.pedantic && (e = e.replace(/^ +$/gm, "")); e;)
                                if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((function(u) {
                                        return !!(n = u.call(o, e, t)) && (e = e.substring(n.raw.length), t.push(n), !0)
                                    }))))
                                    if (n = this.tokenizer.space(e)) e = e.substring(n.raw.length), n.type && t.push(n);
                                    else if (n = this.tokenizer.code(e)) e = e.substring(n.raw.length), (s = t[t.length - 1]) && "paragraph" === s.type ? (s.raw += "\n" + n.raw, s.text += "\n" + n.text) : t.push(n);
                            else if (n = this.tokenizer.fences(e)) e = e.substring(n.raw.length), t.push(n);
                            else if (n = this.tokenizer.heading(e)) e = e.substring(n.raw.length), t.push(n);
                            else if (n = this.tokenizer.nptable(e)) e = e.substring(n.raw.length), t.push(n);
                            else if (n = this.tokenizer.hr(e)) e = e.substring(n.raw.length), t.push(n);
                            else if (n = this.tokenizer.blockquote(e)) e = e.substring(n.raw.length), n.tokens = this.blockTokens(n.text, [], u), t.push(n);
                            else if (n = this.tokenizer.list(e)) {
                                for (e = e.substring(n.raw.length), i = n.items.length, r = 0; r < i; r++) n.items[r].tokens = this.blockTokens(n.items[r].text, [], !1);
                                t.push(n)
                            } else if (n = this.tokenizer.html(e)) e = e.substring(n.raw.length), t.push(n);
                            else if (u && (n = this.tokenizer.def(e))) e = e.substring(n.raw.length), this.tokens.links[n.tag] || (this.tokens.links[n.tag] = {
                                href: n.href,
                                title: n.title
                            });
                            else if (n = this.tokenizer.table(e)) e = e.substring(n.raw.length), t.push(n);
                            else if (n = this.tokenizer.lheading(e)) e = e.substring(n.raw.length), t.push(n);
                            else if (l = e, this.options.extensions && this.options.extensions.startBlock && function() {
                                    var t = 1 / 0,
                                        u = e.slice(1),
                                        n = void 0;
                                    o.options.extensions.startBlock.forEach((function(e) {
                                        "number" === typeof(n = e.call(this, u)) && n >= 0 && (t = Math.min(t, n))
                                    })), t < 1 / 0 && t >= 0 && (l = e.substring(0, t + 1))
                                }(), u && (n = this.tokenizer.paragraph(l))) s = t[t.length - 1], a && "paragraph" === s.type ? (s.raw += "\n" + n.raw, s.text += "\n" + n.text) : t.push(n), a = l.length !== e.length, e = e.substring(n.raw.length);
                            else if (n = this.tokenizer.text(e)) e = e.substring(n.raw.length), (s = t[t.length - 1]) && "text" === s.type ? (s.raw += "\n" + n.raw, s.text += "\n" + n.text) : t.push(n);
                            else if (e) {
                                var D = "Infinite loop on byte: " + e.charCodeAt(0);
                                if (this.options.silent) {
                                    console.error(D);
                                    break
                                }
                                throw new Error(D)
                            }
                            return t
                        }, u.inline = function(e) {
                            var t, u, n, r, i, s, l = e.length;
                            for (t = 0; t < l; t++) switch ((s = e[t]).type) {
                                case "paragraph":
                                case "text":
                                case "heading":
                                    s.tokens = [], this.inlineTokens(s.text, s.tokens);
                                    break;
                                case "table":
                                    for (s.tokens = {
                                            header: [],
                                            cells: []
                                        }, r = s.header.length, u = 0; u < r; u++) s.tokens.header[u] = [], this.inlineTokens(s.header[u], s.tokens.header[u]);
                                    for (r = s.cells.length, u = 0; u < r; u++)
                                        for (i = s.cells[u], s.tokens.cells[u] = [], n = 0; n < i.length; n++) s.tokens.cells[u][n] = [], this.inlineTokens(i[n], s.tokens.cells[u][n]);
                                    break;
                                case "blockquote":
                                    this.inline(s.tokens);
                                    break;
                                case "list":
                                    for (r = s.items.length, u = 0; u < r; u++) this.inline(s.items[u].tokens)
                            }
                            return e
                        }, u.inlineTokens = function(e, t, u, n) {
                            var r, i, s, l = this;
                            void 0 === t && (t = []), void 0 === u && (u = !1), void 0 === n && (n = !1);
                            var a, o, D, c = e;
                            if (this.tokens.links) {
                                var h = Object.keys(this.tokens.links);
                                if (h.length > 0)
                                    for (; null != (a = this.tokenizer.rules.inline.reflinkSearch.exec(c));) h.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (c = c.slice(0, a.index) + "[" + W("a", a[0].length - 2) + "]" + c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
                            }
                            for (; null != (a = this.tokenizer.rules.inline.blockSkip.exec(c));) c = c.slice(0, a.index) + "[" + W("a", a[0].length - 2) + "]" + c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                            for (; null != (a = this.tokenizer.rules.inline.escapedEmSt.exec(c));) c = c.slice(0, a.index) + "++" + c.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
                            for (; e;)
                                if (o || (D = ""), o = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((function(u) {
                                        return !!(r = u.call(l, e, t)) && (e = e.substring(r.raw.length), t.push(r), !0)
                                    }))))
                                    if (r = this.tokenizer.escape(e)) e = e.substring(r.raw.length), t.push(r);
                                    else if (r = this.tokenizer.tag(e, u, n)) e = e.substring(r.raw.length), u = r.inLink, n = r.inRawBlock, (i = t[t.length - 1]) && "text" === r.type && "text" === i.type ? (i.raw += r.raw, i.text += r.text) : t.push(r);
                            else if (r = this.tokenizer.link(e)) e = e.substring(r.raw.length), "link" === r.type && (r.tokens = this.inlineTokens(r.text, [], !0, n)), t.push(r);
                            else if (r = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(r.raw.length), i = t[t.length - 1], "link" === r.type ? (r.tokens = this.inlineTokens(r.text, [], !0, n), t.push(r)) : i && "text" === r.type && "text" === i.type ? (i.raw += r.raw, i.text += r.text) : t.push(r);
                            else if (r = this.tokenizer.emStrong(e, c, D)) e = e.substring(r.raw.length), r.tokens = this.inlineTokens(r.text, [], u, n), t.push(r);
                            else if (r = this.tokenizer.codespan(e)) e = e.substring(r.raw.length), t.push(r);
                            else if (r = this.tokenizer.br(e)) e = e.substring(r.raw.length), t.push(r);
                            else if (r = this.tokenizer.del(e)) e = e.substring(r.raw.length), r.tokens = this.inlineTokens(r.text, [], u, n), t.push(r);
                            else if (r = this.tokenizer.autolink(e, ee)) e = e.substring(r.raw.length), t.push(r);
                            else if (u || !(r = this.tokenizer.url(e, ee))) {
                                if (s = e, this.options.extensions && this.options.extensions.startInline && function() {
                                        var t = 1 / 0,
                                            u = e.slice(1),
                                            n = void 0;
                                        l.options.extensions.startInline.forEach((function(e) {
                                            "number" === typeof(n = e.call(this, u)) && n >= 0 && (t = Math.min(t, n))
                                        })), t < 1 / 0 && t >= 0 && (s = e.substring(0, t + 1))
                                    }(), r = this.tokenizer.inlineText(s, n, Y)) e = e.substring(r.raw.length), "_" !== r.raw.slice(-1) && (D = r.raw.slice(-1)), o = !0, (i = t[t.length - 1]) && "text" === i.type ? (i.raw += r.raw, i.text += r.text) : t.push(r);
                                else if (e) {
                                    var p = "Infinite loop on byte: " + e.charCodeAt(0);
                                    if (this.options.silent) {
                                        console.error(p);
                                        break
                                    }
                                    throw new Error(p)
                                }
                            } else e = e.substring(r.raw.length), t.push(r);
                            return t
                        }, t(e, null, [{
                            key: "rules",
                            get: function() {
                                return {
                                    block: K,
                                    inline: Q
                                }
                            }
                        }]), e
                    }(),
                    ue = i.exports.defaults,
                    ne = T.cleanUrl,
                    re = T.escape,
                    ie = function() {
                        function e(e) {
                            this.options = e || ue
                        }
                        var t = e.prototype;
                        return t.code = function(e, t, u) {
                            var n = (t || "").match(/\S*/)[0];
                            if (this.options.highlight) {
                                var r = this.options.highlight(e, n);
                                null != r && r !== e && (u = !0, e = r)
                            }
                            return e = e.replace(/\n$/, "") + "\n", n ? '<pre><code class="' + this.options.langPrefix + re(n, !0) + '">' + (u ? e : re(e, !0)) + "</code></pre>\n" : "<pre><code>" + (u ? e : re(e, !0)) + "</code></pre>\n"
                        }, t.blockquote = function(e) {
                            return "<blockquote>\n" + e + "</blockquote>\n"
                        }, t.html = function(e) {
                            return e
                        }, t.heading = function(e, t, u, n) {
                            return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + n.slug(u) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n"
                        }, t.hr = function() {
                            return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
                        }, t.list = function(e, t, u) {
                            var n = t ? "ol" : "ul";
                            return "<" + n + (t && 1 !== u ? ' start="' + u + '"' : "") + ">\n" + e + "</" + n + ">\n"
                        }, t.listitem = function(e) {
                            return "<li>" + e + "</li>\n"
                        }, t.checkbox = function(e) {
                            return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
                        }, t.paragraph = function(e) {
                            return "<p>" + e + "</p>\n"
                        }, t.table = function(e, t) {
                            return t && (t = "<tbody>" + t + "</tbody>"), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
                        }, t.tablerow = function(e) {
                            return "<tr>\n" + e + "</tr>\n"
                        }, t.tablecell = function(e, t) {
                            var u = t.header ? "th" : "td";
                            return (t.align ? "<" + u + ' align="' + t.align + '">' : "<" + u + ">") + e + "</" + u + ">\n"
                        }, t.strong = function(e) {
                            return "<strong>" + e + "</strong>"
                        }, t.em = function(e) {
                            return "<em>" + e + "</em>"
                        }, t.codespan = function(e) {
                            return "<code>" + e + "</code>"
                        }, t.br = function() {
                            return this.options.xhtml ? "<br/>" : "<br>"
                        }, t.del = function(e) {
                            return "<del>" + e + "</del>"
                        }, t.link = function(e, t, u) {
                            if (null === (e = ne(this.options.sanitize, this.options.baseUrl, e))) return u;
                            var n = '<a href="' + re(e) + '"';
                            return t && (n += ' title="' + t + '"'), n += ">" + u + "</a>"
                        }, t.image = function(e, t, u) {
                            if (null === (e = ne(this.options.sanitize, this.options.baseUrl, e))) return u;
                            var n = '<img src="' + e + '" alt="' + u + '"';
                            return t && (n += ' title="' + t + '"'), n += this.options.xhtml ? "/>" : ">"
                        }, t.text = function(e) {
                            return e
                        }, e
                    }(),
                    se = function() {
                        function e() {}
                        var t = e.prototype;
                        return t.strong = function(e) {
                            return e
                        }, t.em = function(e) {
                            return e
                        }, t.codespan = function(e) {
                            return e
                        }, t.del = function(e) {
                            return e
                        }, t.html = function(e) {
                            return e
                        }, t.text = function(e) {
                            return e
                        }, t.link = function(e, t, u) {
                            return "" + u
                        }, t.image = function(e, t, u) {
                            return "" + u
                        }, t.br = function() {
                            return ""
                        }, e
                    }(),
                    le = function() {
                        function e() {
                            this.seen = {}
                        }
                        var t = e.prototype;
                        return t.serialize = function(e) {
                            return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-")
                        }, t.getNextSafeSlug = function(e, t) {
                            var u = e,
                                n = 0;
                            if (this.seen.hasOwnProperty(u)) {
                                n = this.seen[e];
                                do {
                                    u = e + "-" + ++n
                                } while (this.seen.hasOwnProperty(u))
                            }
                            return t || (this.seen[e] = n, this.seen[u] = 0), u
                        }, t.slug = function(e, t) {
                            void 0 === t && (t = {});
                            var u = this.serialize(e);
                            return this.getNextSafeSlug(u, t.dryrun)
                        }, e
                    }(),
                    ae = ie,
                    oe = se,
                    De = le,
                    ce = i.exports.defaults,
                    he = T.unescape,
                    pe = te,
                    ge = function() {
                        function e(e) {
                            this.options = e || ce, this.options.renderer = this.options.renderer || new ae, this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new oe, this.slugger = new De
                        }
                        e.parse = function(t, u) {
                            return new e(u).parse(t)
                        }, e.parseInline = function(t, u) {
                            return new e(u).parseInline(t)
                        };
                        var t = e.prototype;
                        return t.parse = function(e, t) {
                            void 0 === t && (t = !0);
                            var u, n, r, i, s, l, a, o, D, c, h, p, g, f, F, A, d, C, k, E = "",
                                x = e.length;
                            for (u = 0; u < x; u++)
                                if (c = e[u], !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[c.type]) || !1 === (k = this.options.extensions.renderers[c.type].call(this, c)) && ["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(c.type)) switch (c.type) {
                                    case "space":
                                        continue;
                                    case "hr":
                                        E += this.renderer.hr();
                                        continue;
                                    case "heading":
                                        E += this.renderer.heading(this.parseInline(c.tokens), c.depth, he(this.parseInline(c.tokens, this.textRenderer)), this.slugger);
                                        continue;
                                    case "code":
                                        E += this.renderer.code(c.text, c.lang, c.escaped);
                                        continue;
                                    case "table":
                                        for (o = "", a = "", i = c.header.length, n = 0; n < i; n++) a += this.renderer.tablecell(this.parseInline(c.tokens.header[n]), {
                                            header: !0,
                                            align: c.align[n]
                                        });
                                        for (o += this.renderer.tablerow(a), D = "", i = c.cells.length, n = 0; n < i; n++) {
                                            for (a = "", s = (l = c.tokens.cells[n]).length, r = 0; r < s; r++) a += this.renderer.tablecell(this.parseInline(l[r]), {
                                                header: !1,
                                                align: c.align[r]
                                            });
                                            D += this.renderer.tablerow(a)
                                        }
                                        E += this.renderer.table(o, D);
                                        continue;
                                    case "blockquote":
                                        D = this.parse(c.tokens), E += this.renderer.blockquote(D);
                                        continue;
                                    case "list":
                                        for (h = c.ordered, p = c.start, g = c.loose, i = c.items.length, D = "", n = 0; n < i; n++) A = (F = c.items[n]).checked, d = F.task, f = "", F.task && (C = this.renderer.checkbox(A), g ? F.tokens.length > 0 && "text" === F.tokens[0].type ? (F.tokens[0].text = C + " " + F.tokens[0].text, F.tokens[0].tokens && F.tokens[0].tokens.length > 0 && "text" === F.tokens[0].tokens[0].type && (F.tokens[0].tokens[0].text = C + " " + F.tokens[0].tokens[0].text)) : F.tokens.unshift({
                                            type: "text",
                                            text: C
                                        }) : f += C), f += this.parse(F.tokens, g), D += this.renderer.listitem(f, d, A);
                                        E += this.renderer.list(D, h, p);
                                        continue;
                                    case "html":
                                        E += this.renderer.html(c.text);
                                        continue;
                                    case "paragraph":
                                        E += this.renderer.paragraph(this.parseInline(c.tokens));
                                        continue;
                                    case "text":
                                        for (D = c.tokens ? this.parseInline(c.tokens) : c.text; u + 1 < x && "text" === e[u + 1].type;) D += "\n" + ((c = e[++u]).tokens ? this.parseInline(c.tokens) : c.text);
                                        E += t ? this.renderer.paragraph(D) : D;
                                        continue;
                                    default:
                                        var m = 'Token with "' + c.type + '" type was not found.';
                                        if (this.options.silent) return void console.error(m);
                                        throw new Error(m)
                                } else E += k || "";
                            return E
                        }, t.parseInline = function(e, t) {
                            t = t || this.renderer;
                            var u, n, r, i = "",
                                s = e.length;
                            for (u = 0; u < s; u++)
                                if (n = e[u], !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[n.type]) || !1 === (r = this.options.extensions.renderers[n.type].call(this, n)) && ["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(n.type)) switch (n.type) {
                                    case "escape":
                                        i += t.text(n.text);
                                        break;
                                    case "html":
                                        i += t.html(n.text);
                                        break;
                                    case "link":
                                        i += t.link(n.href, n.title, this.parseInline(n.tokens, t));
                                        break;
                                    case "image":
                                        i += t.image(n.href, n.title, n.text);
                                        break;
                                    case "strong":
                                        i += t.strong(this.parseInline(n.tokens, t));
                                        break;
                                    case "em":
                                        i += t.em(this.parseInline(n.tokens, t));
                                        break;
                                    case "codespan":
                                        i += t.codespan(n.text);
                                        break;
                                    case "br":
                                        i += t.br();
                                        break;
                                    case "del":
                                        i += t.del(this.parseInline(n.tokens, t));
                                        break;
                                    case "text":
                                        i += t.text(n.text);
                                        break;
                                    default:
                                        var l = 'Token with "' + n.type + '" type was not found.';
                                        if (this.options.silent) return void console.error(l);
                                        throw new Error(l)
                                } else i += r || "";
                            return i
                        }, e
                    }(),
                    fe = P,
                    Fe = ie,
                    Ae = se,
                    de = le,
                    Ce = T.merge,
                    ke = T.checkSanitizeDeprecation,
                    Ee = T.escape,
                    xe = i.exports.getDefaults,
                    me = i.exports.changeDefaults,
                    be = i.exports.defaults;

                function Be(e, t, u) {
                    if ("undefined" === typeof e || null === e) throw new Error("marked(): input parameter is undefined or null");
                    if ("string" !== typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
                    if ("function" === typeof t && (u = t, t = null), t = Ce({}, Be.defaults, t || {}), ke(t), u) {
                        var n, r = t.highlight;
                        try {
                            n = pe.lex(e, t)
                        } catch (a) {
                            return u(a)
                        }
                        var i = function(e) {
                            var i;
                            if (!e) try {
                                t.walkTokens && Be.walkTokens(n, t.walkTokens), i = ge.parse(n, t)
                            } catch (a) {
                                e = a
                            }
                            return t.highlight = r, e ? u(e) : u(null, i)
                        };
                        if (!r || r.length < 3) return i();
                        if (delete t.highlight, !n.length) return i();
                        var s = 0;
                        return Be.walkTokens(n, (function(e) {
                            "code" === e.type && (s++, setTimeout((function() {
                                r(e.text, e.lang, (function(t, u) {
                                    if (t) return i(t);
                                    null != u && u !== e.text && (e.text = u, e.escaped = !0), 0 === --s && i()
                                }))
                            }), 0))
                        })), void(0 === s && i())
                    }
                    try {
                        var l = pe.lex(e, t);
                        return t.walkTokens && Be.walkTokens(l, t.walkTokens), ge.parse(l, t)
                    } catch (a) {
                        if (a.message += "\nPlease report this to https://github.com/markedjs/marked.", t.silent) return "<p>An error occurred:</p><pre>" + Ee(a.message + "", !0) + "</pre>";
                        throw a
                    }
                }
                return Be.options = Be.setOptions = function(e) {
                    return Ce(Be.defaults, e), me(Be.defaults), Be
                }, Be.getDefaults = xe, Be.defaults = be, Be.use = function() {
                    for (var e = this, t = arguments.length, u = new Array(t), n = 0; n < t; n++) u[n] = arguments[n];
                    var r, i = Ce.apply(void 0, [{}].concat(u)),
                        s = Be.defaults.extensions || {
                            renderers: {},
                            childTokens: {}
                        };
                    u.forEach((function(t) {
                        if (t.extensions && (r = !0, t.extensions.forEach((function(e) {
                                if (!e.name) throw new Error("extension name required");
                                if (e.renderer) {
                                    var t = s.renderers ? s.renderers[e.name] : null;
                                    s.renderers[e.name] = t ? function() {
                                        for (var u = arguments.length, n = new Array(u), r = 0; r < u; r++) n[r] = arguments[r];
                                        var i = e.renderer.apply(this, n);
                                        return !1 === i && (i = t.apply(this, n)), i
                                    } : e.renderer
                                }
                                if (e.tokenizer) {
                                    if (!e.level || "block" !== e.level && "inline" !== e.level) throw new Error("extension level must be 'block' or 'inline'");
                                    s[e.level] ? s[e.level].unshift(e.tokenizer) : s[e.level] = [e.tokenizer], e.start && ("block" === e.level ? s.startBlock ? s.startBlock.push(e.start) : s.startBlock = [e.start] : "inline" === e.level && (s.startInline ? s.startInline.push(e.start) : s.startInline = [e.start]))
                                }
                                e.childTokens && (s.childTokens[e.name] = e.childTokens)
                            }))), t.renderer && function() {
                                var e = Be.defaults.renderer || new Fe,
                                    u = function(u) {
                                        var n = e[u];
                                        e[u] = function() {
                                            for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s];
                                            var l = t.renderer[u].apply(e, i);
                                            return !1 === l && (l = n.apply(e, i)), l
                                        }
                                    };
                                for (var n in t.renderer) u(n);
                                i.renderer = e
                            }(), t.tokenizer && function() {
                                var e = Be.defaults.tokenizer || new fe,
                                    u = function(u) {
                                        var n = e[u];
                                        e[u] = function() {
                                            for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s];
                                            var l = t.tokenizer[u].apply(e, i);
                                            return !1 === l && (l = n.apply(e, i)), l
                                        }
                                    };
                                for (var n in t.tokenizer) u(n);
                                i.tokenizer = e
                            }(), t.walkTokens) {
                            var u = Be.defaults.walkTokens;
                            i.walkTokens = function(n) {
                                t.walkTokens.call(e, n), u && u(n)
                            }
                        }
                        r && (i.extensions = s), Be.setOptions(i)
                    }))
                }, Be.walkTokens = function(e, t) {
                    for (var u, n = function() {
                            var e = u.value;
                            switch (t(e), e.type) {
                                case "table":
                                    for (var n, i = r(e.tokens.header); !(n = i()).done;) {
                                        var s = n.value;
                                        Be.walkTokens(s, t)
                                    }
                                    for (var l, a = r(e.tokens.cells); !(l = a()).done;)
                                        for (var o, D = r(l.value); !(o = D()).done;) {
                                            var c = o.value;
                                            Be.walkTokens(c, t)
                                        }
                                    break;
                                case "list":
                                    Be.walkTokens(e.items, t);
                                    break;
                                default:
                                    Be.defaults.extensions && Be.defaults.extensions.childTokens && Be.defaults.extensions.childTokens[e.type] ? Be.defaults.extensions.childTokens[e.type].forEach((function(u) {
                                        Be.walkTokens(e[u], t)
                                    })) : e.tokens && Be.walkTokens(e.tokens, t)
                            }
                        }, i = r(e); !(u = i()).done;) n()
                }, Be.parseInline = function(e, t) {
                    if ("undefined" === typeof e || null === e) throw new Error("marked.parseInline(): input parameter is undefined or null");
                    if ("string" !== typeof e) throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
                    t = Ce({}, Be.defaults, t || {}), ke(t);
                    try {
                        var u = pe.lexInline(e, t);
                        return t.walkTokens && Be.walkTokens(u, t.walkTokens), ge.parseInline(u, t)
                    } catch (n) {
                        if (n.message += "\nPlease report this to https://github.com/markedjs/marked.", t.silent) return "<p>An error occurred:</p><pre>" + Ee(n.message + "", !0) + "</pre>";
                        throw n
                    }
                }, Be.Parser = ge, Be.parser = ge.parse, Be.Renderer = Fe, Be.TextRenderer = Ae, Be.Lexer = pe, Be.lexer = pe.lex, Be.Tokenizer = fe, Be.Slugger = de, Be.parse = Be, Be
            }()
        }
    }
]);