(function(e, o, c, s, n) {
    e[s] = e[s] || [], e[s].push({
        "gtm.start": (new Date).getTime(),
        event: "gtm.js"
    });
    var a = o.getElementsByTagName(c)[0],
        t = o.createElement(c);
    t.async = !0, t.src = "https://www.googletagmanager.com/gtm.js?id=GTM-N82G7WC", a.parentNode.insertBefore(t, a)
})(window, document, "script", "dataLayer"),
function(e, o, c, s, n) {
    var a, t, i;
    e[n] = e[n] || [], a = function() {
        var r = {
            ti: "27005609"
        };
        r.q = e[n], e[n] = new UET(r), e[n].push("pageLoad")
    }, (t = o.createElement(c)).src = "//bat.bing.com/bat.js", t.async = 1, t.onload = t.onreadystatechange = function() {
        var r = this.readyState;
        r && "loaded" !== r && "complete" !== r || (a(), t.onload = t.onreadystatechange = null)
    }, (i = o.getElementsByTagName(c)[0]).parentNode.insertBefore(t, i)
}(window, document, "script", 0, "uetq"),
function(e, o, c, s, n, a) {
    e.hj = e.hj || function() {
        (e.hj.q = e.hj.q || []).push(arguments)
    }, e._hjSettings = {
        hjid: 1276013,
        hjsv: 6
    }, n = o.getElementsByTagName("head")[0], (a = o.createElement("script")).async = 1, a.defer = !0, a.src = "https://static.hotjar.com/c/hotjar-" + e._hjSettings.hjid + ".js?sv=" + e._hjSettings.hjsv, n.appendChild(a)
}(window, document);