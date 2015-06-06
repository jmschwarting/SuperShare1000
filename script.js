function jqueryCookie(e) {
    function t(e) {
        return c.raw ? e : encodeURIComponent(e)
    }

    function n(e) {
        return c.raw ? e : decodeURIComponent(e)
    }

    function o(e) {
        return t(c.json ? JSON.stringify(e) : String(e))
    }

    function r(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(a, " ")), c.json ? JSON.parse(e) : e
        } catch (t) {}
    }

    function i(t, n) {
        var o = c.raw ? t : r(t);
        return e.isFunction(n) ? n(o) : o
    }
    var a = /\+/g,
        c = e.cookie = function(r, a, s) {
            if (arguments.length > 1 && !e.isFunction(a)) {
                if (s = e.extend({}, c.defaults, s), "number" == typeof s.expires) {
                    var u = s.expires,
                        d = s.expires = new Date;
                    d.setTime(+d + 864e5 * u)
                }
                return document.cookie = [t(r), "=", o(a), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
            }
            for (var l = r ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], f = 0, m = p.length; m > f; f++) {
                var h = p[f].split("="),
                    v = n(h.shift()),
                    g = h.join("=");
                if (r && r === v) {
                    l = i(g, a);
                    break
                }
                r || void 0 === (g = i(g)) || (l[v] = g)
            }
            return l
        };
    c.defaults = {}, e.removeCookie = function(t, n) {
        return void 0 === e.cookie(t) ? !1 : (e.cookie(t, "", e.extend({}, n, {
            expires: -1
        })), !e.cookie(t))
    }
}! function() {
    var e, t, n, o, r, i, a = "untorch-fsu",
        c = "untorch-ssu",
        s = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    n = -1 == window.location.href.indexOf("localhost:3000") ? "https://untorch.com" : "http://localhost:3000";
    var u = function(t) {
        e(i).html(t), e(i).show()
    }, d = function() {
            e(i).html(""), e(i).hide()
        }, l = function(e) {
            if (null === e || void 0 === e || "" === e) return !1;
            for (var n = e.split(","), o = 0; o < n.length; o++)
                if (n[o] == t) return !0;
            return !1
        }, p = function(n, o) {
            void 0 === n || "" === n ? n = t.toString() : (n += "," + t, e.removeCookie(o)), e.cookie(o, n, {
                expires: 1
            })
        }, f = function() {
            var t = e.cookie(a),
                n = void 0 !== t && l(t);
            if (n) {
                var o = e.cookie(c);
                return void p(o, c)
            }
            p(t, a)
        }, m = function() {
            for (var e = window.location.search.substring(1), t = e.split("&"), n = 0; n < t.length; n++) {
                var o = t[n].split("=");
                if ("ref" === o[0]) return o[1]
            }
        }, h = function(e) {
            return void 0 === e || null === e || "" === e ? !1 : "string" != typeof e ? !1 : -1 === e.indexOf("@") ? !1 : s.test(e) ? !0 : !1
        }, v = function() {
            var t = e.cookie(c);
            return l(t)
        }, g = function(r) {
            if (v()) return void u("We like your enthusiasm but try sharing this with your friends!");
            if (!h(r)) return void u("Invalid email address");
            var i = m(),
                a = {
                    email: r,
                    referrerToken: i
                };
            w(), e.post(n + "/api/campaign/" + t + "/signup", a).done(function(e) {
                d(), f(), k(e.referralToken)
            }).fail(function(e) {
                o.remove(), u(400 === e.status ? "Invalid email address" : "Sorry, there was an error signing up")
            })
        }, b = function(t, n) {
            e(n).click(function(n) {
                var o = e(t).val();
                g(o), n.preventDefault()
            })
        }, x = function(t, n) {
            var o = e("<form>").attr("class", "untorch-form-container").css({
                "max-width": "500px"
            }),
                r = e("<input>").attr("class", "untorch-email-input").css({
                    padding: "10px 16px"
                }).attr("data-untorch-element", "email").attr("placeholder", "Email address").css({
                    display: "block",
                    "box-sizing": "border-box",
                    width: "100%",
                    "font-size": "18px",
                    "margin-bottom": "15px",
                    "line-height": "28px",
                    "border-radius": "2px",
                    border: "1px solid #ccc"
                }),
                a = e("<button>").attr("type", "submit").attr("class", "untorch-submit-button").attr("data-untorch-element", "submit").css({
                    "background-color": "#2ecc71",
                    color: "white",
                    "border-radius": "2px",
                    border: "1px solid transparent"
                }).append('<span class="untorch-submit-button-inner"> Get Early Access </span>').css({
                    display: "inline-block",
                    padding: "4px 30px",
                    "font-size": "18px",
                    "margin-bottom": "15px",
                    "line-height": "40px"
                });
            i = e('<div data-untorch-element="alert"></div>').css({
                color: "#a94442",
                "background-color": "#f2dede",
                padding: "15px",
                border: "1px solid #ebccd1",
                "border-radius": "2px",
                "margin-bottom": "15px"
            }), d(), o.append(r), o.append(i), o.append(a), t.after(o), b(r, a), n()
        }, w = function() {
            o = e("<div>").attr("class", "untorch-backdrop").css({
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                "background-color": "rgba(0, 0, 0, 0.5)",
                "z-index": 2147483645
            }), r = e('<div id="loading" ><b>Loading...</b></div>').css({
                color: "white",
                position: "fixed",
                top: "50%",
                left: "47%"
            }), o.append(r), e("body").css("overflow", "hidden !important").prepend(o)
        }, k = function(o) {
            var i = e("<iframe>").attr("id", "untorch-iframe").attr("src", n + "/campaigns/" + t + "/confirmation/" + o).attr("frameborder", "0").css({
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                "z-index": 2147483647
            });
            e("body").prepend(i), e("body").css("overflow", "hidden"), e(r).remove(), setTimeout(function() {
                e("#untorch-iframe")[0].contentWindow.focus()
            }, 100)
        }, y = function(t) {
            t.origin = "_homeUrl", e("#untorch-iframe").remove(), e(".untorch-backdrop").remove(), e(".untorch-email-input").attr("disabled", !0), e("body").css("overflow", "auto")
        };
    window.addEventListener ? window.addEventListener("message", y) : window.attachEvent("onmessage", y);
    var j = function(t) {
        var n = e('[data-untorch-element="email"]'),
            o = e('[data-untorch-element="submit"]');
        if (i = e('[data-untorch-element="alert"]'), n.length > 0 && o.length > 0)
            for (var r = 0; r < o.length; r++) {
                if (r > n.length) return;
                b(n[r], o[r])
            } else x(t, function() {
                e(".untorch-submit-button").mouseenter(function() {
                    e(this).css("background-color", "#26b864")
                }).mouseleave(function() {
                    e(this).css("background-color", "#2ecc71")
                })
            })
    }, C = function() {
            var n = !1;
            e("script").each(function(o, r) {
                r = e(r), r.attr("data-untorch-campaign") && (n = !0, t = parseInt(r.attr("data-untorch-campaign"), 10), e(document).ready(function() {
                    j(r)
                }))
            }), n || console.error("Error: unable to load untorch"), jqueryCookie(e)
        };
    if (window.jQuery) e = window.jQuery, C();
    else {
        var E = document.createElement("SCRIPT");
        E.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js", E.type = "text/javascript", document.getElementsByTagName("head")[0].appendChild(E);
        var T = function() {
            window.jQuery ? (e = window.jQuery, C()) : window.setTimeout(function() {
                T()
            }, 100)
        };
        T()
    }
}();
