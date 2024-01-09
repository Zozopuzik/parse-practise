(function() {
    function setCookie(name, value) {
        var cookie = name + "=" + encodeURIComponent(value) + "; path=/;";
        if (window.navigator.userAgent.match("Chrom(e|ium)")) {
            cookie = cookie + " SameSite=None; Secure";
        }
        document.cookie = cookie;
    }

    function getCookie(name) {
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(name + "=") == 0) return decodeURIComponent(c.substring((name + "=").length, c.length));
        }
        return null;
    }

    function removeCookie(name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }

    var trackingData = []

    function data() {
        return trackingData
    }

    function generateId() {
        var id = "",
            i = 12,
            chars = "abcdefghijklmnopqrstufwxyzABCDEFGHIJKLMNOPQRSTUFWXYZ1234567890";
        while (i--) {
            id += chars[Math.floor(Math.random() * chars.length)]
        }
        return "I1ars" + id;
    }

    function multiLevel(a) {
        for (var i = 0; i < a.length; a++) {
            if (typeof(a[i]) === 'object') {
                return true;
            }
        }
        return false;
    }

    function campaignKeys() {
        var scripts = document.getElementsByTagName('script');
        var keys = [];
        var unique = {};
        var src, i, match;

        for (i = 0; i < scripts.length; i++) {
            src = scripts[i].getAttribute('src') + "";
            match = src.match(/\/(.....)\/(embed|ol|trk)\.js/);
            if (match && !unique[match[1]]) {
                keys.push(match[1]);
                unique[match[1]] = true;
            }
        }

        return keys;
    }

    function parseVars(vars) {
        var buf = [];
        var callback = null;
        var v, i;
        if (typeof(vars) !== 'object') {
            buf.push(vars);
        } else {
            if (multiLevel(vars)) {
                for (i = 0; i < vars.length; i++) {
                    v = vars[i];
                    if (typeof(v) === 'object' && v.length > 1) {
                        if (v[0] === 'callback' && typeof(v[1]) === 'function') {
                            callback = v[1];
                        } else {
                            buf.push(encodeURIComponent(v[0]) + '=' + encodeURIComponent(v[1]));
                        }
                    } else {
                        buf.push(encodeURIComponent(v));
                    }
                }
            } else {
                if (vars.length > 1) {
                    buf.push(encodeURIComponent(vars[0]) + '=' + encodeURIComponent(vars[1]));
                } else if (vars.length === 1) {
                    buf.push(encodeURIComponent(vars[0]));
                }
            }
        }

        return {
            params: buf,
            callback: callback
        };
    }

    function parseSearchXref() {
        var searchParams = window.location.search.replace(/^\?/, '').split('&').map(function(p) {
            return p.split('=')
        });
        var xref = searchParams.filter(function(p) {
            return p[0] === 'xref'
        })[0];
        if (xref && window.history.replaceState) {
            window.history.replaceState(window.history.state, '', window.location.href.replace(/\??&?xref=[^&#]*/, ''));
        }
        return xref ? xref[1] : null;
    }

    function push(vars) {
        var debug = false;
        var baseUrl = "https://gleam.io";
        if (debug && typeof(console) != 'undefined') {
            console.log('Sending: ', vars)
        }

        var trackingToken = parseSearchXref() || getCookie('GleamId') || generateId();
        if (!getCookie('GleamId') || getCookie('GleamId') !== trackingToken) {
            setCookie('GleamId', trackingToken);
        }

        if (getCookie('GleamId')) {
            var config = parseVars(vars);
            var tokens = []
            for (var p = 0; p < config.params.length; p++) {
                var token = config.params[p].split('=');
                tokens.push(token[0])
                trackingData.push(config.params[p])
            }

            var keys = campaignKeys();
            for (var k = 0; k < keys.length; k++) {
                var key = keys[k];
                var cookieName = 'GleamA';
                var actionData = JSON.parse(getCookie(cookieName) || '{}');
                actionData[key] = tokens.join(',');
                setCookie(cookieName, JSON.stringify(actionData));
            }

            var src = baseUrl + '/track.js?i=' + encodeURIComponent(getCookie('GleamId')) +
                '&k=' + campaignKeys().join(',') +
                '&v=' + encodeURIComponent(config.params.join('&'));

            var f = document.createElement('script');
            f.src = src;

            f.onload = config.callback;

            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(f, s);

            if (window && window.addEventListener) {
                window.addEventListener('message', function(e) {
                    if (e.data === 'request-prefill') {
                        if (debug && typeof(console) != 'undefined') {
                            console.log('Re-sending: ', vars)
                        }
                        var f2 = document.createElement('script');
                        f2.src = src;

                        f2.onload = vars.callback;

                        f.parentNode.replaceChild(f2, f);
                    }
                }, false);
            }
        }
    }

    function initGleamTracker() {
        window.Gleam = {
            push: push,
            init: true,
            data: data
        }
    }

    if (typeof(Gleam) === 'undefined') {
        initGleamTracker();
    } else if (typeof(Gleam.init) === 'undefined') {
        var onLoadTracking = Gleam;
        initGleamTracker();
        Gleam.push(onLoadTracking);
    }

})();