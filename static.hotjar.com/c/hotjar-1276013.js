window.hjSiteSettings = window.hjSiteSettings || {
    "site_id": 1276013,
    "rec_value": 0.0,
    "state_change_listen_mode": "automatic_with_fragments",
    "record": true,
    "continuous_capture_enabled": true,
    "recording_capture_keystrokes": true,
    "session_capture_console_consent": true,
    "anonymize_digits": false,
    "anonymize_emails": false,
    "suppress_all": false,
    "suppress_all_on_specific_pages": [],
    "suppress_text": false,
    "suppress_location": false,
    "user_attributes_enabled": true,
    "legal_name": null,
    "privacy_policy_url": null,
    "deferred_page_contents": [],
    "record_targeting_rules": [],
    "feedback_widgets": [{
        "id": 315454,
        "created_epoch_time": 1595853215,
        "effective_show_branding": false,
        "skin": "dark",
        "background": "#a3a3a3",
        "position": "bottom_right",
        "content": {
            "initial": "Help us improve by sharing your feedback.",
            "thankyou": "Thank you for sharing your feedback with us!",
            "emotion": "How would you rate your experience using DMarket?",
            "email": "We may wish to follow up. Enter your email if you're happy for us to contact you.",
            "comment_footer": "<p>Help us make DMarket perfect for you.</p>"
        },
        "connect_visit_data": "always",
        "language": "en",
        "display_condition": "immediate",
        "display_delay": 0,
        "persist_condition": "always",
        "auto_screenshot": true,
        "targeting_percentage": 20,
        "targeting": [{
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "desktop",
            "name": null,
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "tablet",
            "name": null,
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "phone",
            "name": null,
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "simple",
            "negate": false,
            "pattern": "https://dmarket.com/ingame-items/item-list/csgo-skins",
            "name": null,
            "rule_type": null
        }],
        "ask_for_consent": false,
        "emotion_style": "emoji",
        "display_type": "button",
        "show_legal": false,
        "widget_label": null,
        "active_seasonal_emotion_style": null,
        "parent_element_selector": null
    }],
    "heatmaps": [],
    "polls": [{
        "id": 912051,
        "created_epoch_time": 1686546853,
        "skin": "dark",
        "background": "#333333",
        "effective_show_branding": false,
        "position": "right",
        "content": {
            "version": 2,
            "questions": [{
                "uuid": "3a57ad74-7026-4b5b-b637-198254dfc9a2",
                "type": "single-close-ended",
                "text": "Was the process of depositing funds clear and easy to follow?",
                "required": true,
                "randomize_answer_order": false,
                "pin_last_to_bottom": false,
                "answers": [{
                    "text": "Yes😃",
                    "comments": false
                }, {
                    "text": "No 😔",
                    "comments": false
                }],
                "nextByAnswer": ["question:acf06d89-f7fa-4425-9093-daa4b73545d7", "byOrder"],
                "next": "byAnswer"
            }, {
                "uuid": "acf06d89-f7fa-4425-9093-daa4b73545d7",
                "type": "single-open-ended-multiple-line",
                "text": "Is there something that prevented you from depositing funds today?",
                "required": true,
                "next": "byOrder"
            }],
            "thankyou": "Thank you for answering this Survey. Your feedback is highly appreciated!"
        },
        "connect_visit_data": "always",
        "ask_for_consent": false,
        "language": "en",
        "display_condition": "abandon",
        "display_delay": 0,
        "persist_condition": "once",
        "targeting_percentage": 75,
        "targeting": [{
            "component": "trigger",
            "match_operation": "exact",
            "negate": false,
            "pattern": "backButton_balance",
            "name": null,
            "rule_type": null
        }, {
            "component": "trigger",
            "match_operation": "exact",
            "negate": false,
            "pattern": "balance_closeByCross",
            "name": null,
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "desktop",
            "name": null,
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "tablet",
            "name": null,
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "phone",
            "name": null,
            "rule_type": null
        }],
        "uuid": "bba90e91-830a-41e9-a685-3ffd139308f2",
        "invite": {
            "title": "Your feedback is important to us!",
            "description": "Tell us what you think about this page by taking our quick Survey.",
            "button": "Yes, I will give feedback",
            "close": "No thanks"
        },
        "invite_enabled": false,
        "display_type": "popover",
        "auto_screenshot": false,
        "show_legal": false,
        "logo_url": null,
        "button_color": "#00C764",
        "parent_element_selector": null
    }, {
        "id": 426927,
        "created_epoch_time": 1563270467,
        "skin": "light",
        "background": "#EAEAEA",
        "effective_show_branding": false,
        "position": "right",
        "content": {
            "version": 2,
            "questions": [{
                "uuid": "41e03694-673d-4053-9a09-000a62e98e17",
                "type": "rating-scale-7",
                "text": "How easy was it to buy an item?",
                "required": true,
                "scaleCount": 7,
                "labels": [{
                    "text": "Not easy"
                }, {
                    "text": "Very easy"
                }],
                "nextByAnswer": ["byOrder", "byOrder", "thankYou"],
                "next": "byAnswer"
            }, {
                "uuid": "38c6e533-3893-427c-b6ac-2134cc25a547",
                "type": "single-open-ended-multiple-line",
                "text": "Which difficulties did you face?",
                "required": true,
                "next": "thankYou"
            }],
            "thankyou": "Thank you for your feedback! "
        },
        "connect_visit_data": "always",
        "ask_for_consent": false,
        "language": "en",
        "display_condition": "immediate",
        "display_delay": 0,
        "persist_condition": "once",
        "targeting_percentage": 20,
        "targeting": [{
            "component": "trigger",
            "match_operation": "exact",
            "negate": false,
            "pattern": "purchase_success",
            "name": null,
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "tablet",
            "name": null,
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "phone",
            "name": null,
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "desktop",
            "name": null,
            "rule_type": null
        }],
        "uuid": "74989a5e-ac44-48ca-99fd-ceeda18f9ca9",
        "invite": {
            "title": "Your feedback is important to us!",
            "description": "Tell us what you think about this page by taking our quick Survey.",
            "button": "Yes, I will give feedback",
            "close": "No thanks"
        },
        "invite_enabled": false,
        "display_type": "popover",
        "auto_screenshot": false,
        "show_legal": true,
        "logo_url": null,
        "button_color": "#00C764",
        "parent_element_selector": null
    }, {
        "id": 414336,
        "created_epoch_time": 1558947941,
        "skin": "light",
        "background": "#EAEAEA",
        "effective_show_branding": false,
        "position": "right",
        "content": {
            "version": 2,
            "questions": [{
                "uuid": "1ba6b0b7-ab63-47bf-b90b-dd312d0d1b59",
                "type": "rating-scale-7",
                "text": "How easy was it to create the Target?",
                "required": true,
                "scaleCount": 7,
                "labels": [{
                    "text": "Very difficult"
                }, {
                    "text": "Very easy"
                }],
                "nextByAnswer": ["byOrder", "byOrder", "thankYou"],
                "next": "byAnswer"
            }, {
                "uuid": "aa23fe29-63da-4dc3-bef0-638a25b4fd1e",
                "type": "single-open-ended-multiple-line",
                "text": "Which difficulties did you face?",
                "required": true,
                "next": "thankYou"
            }],
            "thankyou": "Thank you. We highly value your feedback."
        },
        "connect_visit_data": "ask",
        "ask_for_consent": true,
        "language": "en",
        "display_condition": "immediate",
        "display_delay": 0,
        "persist_condition": "once",
        "targeting_percentage": 40,
        "targeting": [{
            "component": "trigger",
            "match_operation": "exact",
            "negate": false,
            "pattern": "target",
            "name": null,
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "desktop",
            "name": null,
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "tablet",
            "name": null,
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "phone",
            "name": null,
            "rule_type": null
        }],
        "uuid": "adc86350-3721-465b-a2d4-4aa0788d4940",
        "invite": {
            "title": "Your feedback is important to us!",
            "description": "Tell us what you think about this page by taking our quick Survey.",
            "button": "Yes, I will give feedback",
            "close": "No thanks"
        },
        "invite_enabled": false,
        "display_type": "popover",
        "auto_screenshot": false,
        "show_legal": false,
        "logo_url": null,
        "button_color": "#00C764",
        "parent_element_selector": null
    }, {
        "id": 414335,
        "created_epoch_time": 1558947911,
        "skin": "light",
        "background": "#EAEAEA",
        "effective_show_branding": false,
        "position": "right",
        "content": {
            "version": 2,
            "questions": [{
                "uuid": "4208bb3f-2e41-4eca-b2f6-c1897a6cb331",
                "type": "rating-scale-7",
                "text": "How easy was it to exchange items?",
                "required": true,
                "scaleCount": 7,
                "labels": [{
                    "text": "Very difficult"
                }, {
                    "text": "Very easy"
                }],
                "nextByAnswer": ["byOrder", "byOrder", "thankYou"],
                "next": "byAnswer"
            }, {
                "uuid": "91c278d3-31ba-4451-9d03-77c73c4f8054",
                "type": "single-open-ended-multiple-line",
                "text": "Which difficulties did you face?",
                "required": true,
                "next": "thankYou"
            }],
            "thankyou": "Thank you. We highly value your feedback."
        },
        "connect_visit_data": "never",
        "ask_for_consent": false,
        "language": "en",
        "display_condition": "immediate",
        "display_delay": 0,
        "persist_condition": "response",
        "targeting_percentage": 30,
        "targeting": [{
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "phone",
            "name": null,
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "desktop",
            "name": null,
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "tablet",
            "name": null,
            "rule_type": null
        }, {
            "component": "trigger",
            "match_operation": "exact",
            "negate": false,
            "pattern": "exchange_success",
            "name": null,
            "rule_type": null
        }],
        "uuid": "db1e6fb5-5e0d-4f2e-9697-11f54c203b4f",
        "invite": {
            "title": "Your feedback is important to us!",
            "description": "Tell us what you think about this page by taking our quick Survey.",
            "button": "Yes, I will give feedback",
            "close": "No thanks"
        },
        "invite_enabled": false,
        "display_type": "popover",
        "auto_screenshot": false,
        "show_legal": false,
        "logo_url": null,
        "button_color": "#00C764",
        "parent_element_selector": null
    }, {
        "id": 414330,
        "created_epoch_time": 1558947781,
        "skin": "light",
        "background": "#EAEAEA",
        "effective_show_branding": false,
        "position": "right",
        "content": {
            "version": 2,
            "questions": [{
                "uuid": "6af3ca62-2d18-4aeb-8964-47e8716631c9",
                "type": "rating-scale-7",
                "text": "How easy was it to sell an item?",
                "required": true,
                "scaleCount": 7,
                "labels": [{
                    "text": "Very difficult"
                }, {
                    "text": "Very easy"
                }],
                "nextByAnswer": ["byOrder", "byOrder", "thankYou"],
                "next": "byAnswer"
            }, {
                "uuid": "6c40580b-1e13-4adc-ab40-ce8dd5fc962a",
                "type": "single-open-ended-multiple-line",
                "text": "Which difficulties did you face?",
                "required": true,
                "next": "thankYou"
            }],
            "thankyou": "Thank you. We highly value your feedback."
        },
        "connect_visit_data": "never",
        "ask_for_consent": false,
        "language": "en",
        "display_condition": "immediate",
        "display_delay": 0,
        "persist_condition": "once",
        "targeting_percentage": 100,
        "targeting": [{
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "phone",
            "name": null,
            "rule_type": null
        }, {
            "component": "trigger",
            "match_operation": "exact",
            "negate": false,
            "pattern": "instant_sell",
            "name": null,
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "tablet",
            "name": null,
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "desktop",
            "name": null,
            "rule_type": null
        }],
        "uuid": "64883faf-a6ee-409d-ba9a-176fd82f21ed",
        "invite": {
            "title": "Your feedback is important to us!",
            "description": "Tell us what you think about this page by taking our quick Survey.",
            "button": "Yes, I will give feedback",
            "close": "No thanks"
        },
        "invite_enabled": false,
        "display_type": "popover",
        "auto_screenshot": false,
        "show_legal": false,
        "logo_url": null,
        "button_color": null,
        "parent_element_selector": null
    }, {
        "id": 410007,
        "created_epoch_time": 1557479646,
        "skin": "light",
        "background": "#EAEAEA",
        "effective_show_branding": false,
        "position": "right",
        "content": {
            "version": 2,
            "questions": [{
                "uuid": "0ab9f358-573d-48a6-a8eb-3af3ded4586e",
                "type": "rating-scale-7",
                "text": "How easy was it to put an item on sale?",
                "required": true,
                "scaleCount": 7,
                "labels": [{
                    "text": "Very difficult"
                }, {
                    "text": "Very easy"
                }],
                "nextByAnswer": ["byOrder", "byOrder", "thankYou"],
                "next": "byAnswer"
            }, {
                "uuid": "99644e21-0a35-4d50-ba0a-746fb8968a89",
                "type": "single-open-ended-multiple-line",
                "text": "Which difficulties did you face?",
                "required": true,
                "next": "thankYou"
            }],
            "thankyou": "Thank you! "
        },
        "connect_visit_data": "always",
        "ask_for_consent": false,
        "language": "en",
        "display_condition": "immediate",
        "display_delay": 0,
        "persist_condition": "once",
        "targeting_percentage": 25,
        "targeting": [{
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "phone",
            "name": null,
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "desktop",
            "name": null,
            "rule_type": null
        }, {
            "component": "trigger",
            "match_operation": "exact",
            "negate": false,
            "pattern": "sell_success",
            "name": null,
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "negate": false,
            "pattern": "tablet",
            "name": null,
            "rule_type": null
        }],
        "uuid": "afeb642e-9802-4926-978a-1f40f761b563",
        "invite": {
            "title": "Your feedback is important to us!",
            "description": "Tell us what you think about this page by taking our quick Survey.",
            "button": "Yes, I will give feedback",
            "close": "No thanks"
        },
        "invite_enabled": false,
        "display_type": "popover",
        "auto_screenshot": false,
        "show_legal": true,
        "logo_url": null,
        "button_color": "#00C764",
        "parent_element_selector": null
    }],
    "integrations": {
        "optimizely": {
            "tag_recordings": false
        },
        "abtasty": {
            "tag_recordings": false
        },
        "kissmetrics": {
            "send_user_id": false
        },
        "mixpanel": {
            "send_events": false
        },
        "unbounce": {
            "tag_recordings": false
        },
        "hubspot": {
            "enabled": false,
            "send_recordings": false,
            "send_surveys": false
        }
    },
    "features": ["survey.type_button", "survey.image_question", "heatmap.continuous.manual_retaker", "client_script.compression.pc", "survey.embeddable_widget", "feedback.embeddable_widget", "settings.billing_v2", "feedback.widget_telemetry", "survey.screenshots", "ask.popover_redesign", "error_reporting", "feedback.widgetV2"],
    "tracking_code_verified": true
};

! function() {
    "use strict";

    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    var t, r = function() {
        function t(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.send = e, this.batchSize = r, this.flushInterval = n, this.buffer = [], this.flushTimer = null
        }
        var r, n;
        return r = t, (n = [{
            key: "getBuffer",
            value: function() {
                return this.buffer
            }
        }, {
            key: "add",
            value: function(e) {
                var t = this;
                this.buffer.push(e), this.buffer.length >= this.batchSize ? this.flush() : this.flushTimer || (this.flushTimer = setTimeout((function() {
                    t.flush()
                }), this.flushInterval))
            }
        }, {
            key: "flush",
            value: function() {
                this.buffer.length > 0 && (this.send(this.buffer), this.buffer = []), this.flushTimer && (clearTimeout(this.flushTimer), this.flushTimer = null)
            }
        }]) && e(r.prototype, n), t
    }();

    function n(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? n(Object(r), !0).forEach((function(t) {
                a(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function a(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
    var s, o = function() {
            try {
                return "performance" in window && "now" in window.performance
            } catch (e) {
                return !1
            }
        },
        c = {
            version: 6,
            metricsUrl: (null === (t = window._hjSettings) || void 0 === t ? void 0 : t.metricsUrl) || "https://metrics.hotjar.io",
            sampling: {
                metrics: .1,
                fieldMetrics: .01,
                debug: .5,
                universalDebug: .05 * .1
            },
            browser: {
                hasPerformance: !1,
                shouldLogMetrics: !1,
                inLab: !1
            },
            buffer: {
                bufferSize: 40,
                flushInterval: 3e3
            }
        },
        u = {
            isDebugEnabled: !1,
            isMetricsEnabled: !1,
            isFieldMetricsEnabled: !1,
            loggedMetrics: {},
            genericTags: {}
        },
        l = function(e, t, r) {
            u.loggedMetrics[e] = i(i({}, u.loggedMetrics[e]), {}, a({}, t, r || {}))
        },
        f = function(e) {
            if (!e) return "value";
            var t = Object.keys(e)[0];
            return t && e[t] || "value"
        },
        d = function(e) {
            var t, r = null !== (t = e.tag) && void 0 !== t ? t : void 0;
            return u.isDebugEnabled ? i(i(i({}, r), e.extraTags), u.genericTags) : r
        },
        h = function(e, t) {
            if (!s) return !1;
            var r = u.isMetricsEnabled || u.isDebugEnabled;
            return "lab" === e && (r = c.browser.inLab), "field" === e && (r = u.isFieldMetricsEnabled), t ? r && t.flush : r
        },
        g = function(e) {
            var t = !1,
                r = "v=".concat(c.version),
                n = u.isDebugEnabled ? "".concat(c.metricsUrl, "?").concat(r, "&debug=true") : "".concat(c.metricsUrl, "?").concat(r),
                i = JSON.stringify(e);
            if ("sendBeacon" in navigator) try {
                t = navigator.sendBeacon.bind(navigator)(n, i)
            } catch (e) {}
            if (!1 === t) try {
                var a = new XMLHttpRequest;
                a.open("POST", n), a.timeout = 1e4, a.send(i)
            } catch (e) {}
            c.browser.shouldLogMetrics && console.debug("New Metrics: ", e)
        },
        b = {
            getConfig: function(e) {
                return c[e]
            },
            getState: function(e) {
                return u[e]
            },
            start: function() {
                try {
                    c.browser = {
                        hasPerformance: o(),
                        shouldLogMetrics: /hjMetrics=1/.test(location.search),
                        inLab: /hjLab=true/.test(location.search)
                    };
                    var e = b.time(),
                        t = window.hjSiteSettings || {},
                        n = t.features,
                        i = t.site_id,
                        a = new Set(n),
                        l = c.sampling;
                    return u.genericTags = {
                        site_id: i
                    }, u.isDebugEnabled = Math.random() <= l.universalDebug || a.has("client_script.metrics.debug") && Math.random() <= l.debug, u.isMetricsEnabled = Math.random() <= l.metrics, u.isFieldMetricsEnabled = u.isMetricsEnabled && Math.random() <= l.fieldMetrics, s = new r(g, c.buffer.bufferSize, c.buffer.flushInterval), e
                } catch (e) {
                    console.debug("Error in metrics.start", {
                        error: e
                    })
                }
            },
            reset: function() {
                u.loggedMetrics = {}
            },
            stop: function() {
                u.isDebugEnabled = !1, u.isMetricsEnabled = !1, u.genericTags = {}
            },
            count: function(e, t) {
                var r = t.incr,
                    n = t.tag,
                    o = t.extraTags,
                    c = t.type;
                try {
                    var l = f(n),
                        g = u.loggedMetrics[e],
                        b = 0;
                    if (r ? (b = (g && g[l] || 0) + (r.value || 1), u.loggedMetrics[e] = i(i({}, g), {}, a({}, l, (null == r ? void 0 : r.flush) ? 0 : b))) : b = 1, h(c, r)) {
                        var v = {
                            name: e,
                            type: "count",
                            value: b,
                            tags: d({
                                tag: n,
                                extraTags: o
                            })
                        };
                        s.add(v)
                    }
                } catch (e) {}
            },
            distr: function(e, t) {
                var r = t.task,
                    n = t.value,
                    i = t.extraTags;
                h() && s.add({
                    name: e,
                    type: "distribution",
                    value: n,
                    tags: d({
                        tag: {
                            task: r
                        },
                        extraTags: i
                    })
                })
            },
            time: function() {
                try {
                    if (!c.browser.hasPerformance) return;
                    return performance.now()
                } catch (e) {}
            },
            timeEnd: function(e, t) {
                var r = t.tag,
                    n = t.start,
                    i = t.total,
                    a = t.extraTags,
                    o = t.type;
                try {
                    var c = b.time();
                    if (!i && !c) return;
                    var u = f(r),
                        g = i || (n && c ? c - n : void 0);
                    if (l(e, u, {}), g && g > 0 && h(o)) {
                        var v = {
                            name: e,
                            type: "distribution",
                            value: Math.round(g),
                            tags: d({
                                tag: r,
                                extraTags: a
                            })
                        };
                        s.add(v)
                    }
                    return c
                } catch (t) {
                    console.debug("Failed to send timer metric: ", {
                        name: e,
                        tag: r,
                        error: t
                    })
                }
            },
            timeIncr: function(e, t) {
                var r, n, i, a, s = t.tag,
                    o = t.start,
                    c = t.flush,
                    d = t.extraTags,
                    h = t.type,
                    g = hj.metrics.time(),
                    v = o && g ? g - o : void 0,
                    m = (r = e, {
                        tagName: n = f(s),
                        start: (a = (i = u.loggedMetrics[r]) && i[n] || {}).start,
                        total: a.total
                    }),
                    w = v ? v + (m.total || 0) : m.total;
                return l(e, m.tagName, {
                    total: w
                }), c && b.timeEnd(e, {
                    tag: s,
                    total: w,
                    extraTags: d,
                    type: h
                }), w
            },
            timeWatcher: function() {
                var e, t = 0,
                    r = !1,
                    n = function() {
                        var r, n = b.time();
                        return t += null !== (r = e && n && n - e) && void 0 !== r ? r : 0, e = b.time(), t
                    };
                return {
                    start: function() {
                        if (!r) return r = !0, e = b.time()
                    },
                    incr: n,
                    end: function() {
                        var r = n();
                        return t = 0, e = void 0, r
                    }
                }
            },
            getErrorMessage: function(e) {
                return e instanceof Error ? e.message : "string" == typeof e ? e : ""
            }
        };
    window.hj = window.hj || function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        (window.hj.q = window.hj.q || []).push(t)
    }, window.hj.metrics = b;
    var v = hj.metrics.start();
    window.hjBootstrap = window.hjBootstrap || function(e, t, r) {
        var n, i = new RegExp("bot|google|headless|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|phantomjs|pingdom|ahrefsbot", "i"),
            a = (null === (n = window.navigator) || void 0 === n ? void 0 : n.userAgent) || "unknown";
        if (i.test(a)) return hj.metrics.count("session-rejection", {
            tag: {
                reason: "bot"
            }
        }), void console.warn("Hotjar not launching due to suspicious userAgent:", a);
        var s = "http:" === window.location.protocol,
            o = Boolean(window._hjSettings.preview);
        if (s && !o) return hj.metrics.count("session-rejection", {
            tag: {
                reason: "https"
            }
        }), void console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047");
        var c = function(e, t, r) {
            window.hjBootstrapCalled = (window.hjBootstrapCalled || []).concat(r), window.hj && window.hj._init && window.hj._init._verifyInstallation && hj._init._verifyInstallation()
        };
        c(0, 0, r);
        var u = window.document,
            l = u.head || u.getElementsByTagName("head")[0];
        hj.scriptDomain = e;
        var f = u.createElement("script");
        f.async = 1, f.src = hj.scriptDomain + t, f.charset = "utf-8", l.appendChild(f), c.revision = "2ed8190", window.hjBootstrap = c
    }, window.hjBootstrap("https://script.hotjar.com/", "modules.abdef350bc65bc59cb61.js", "1276013"), hj.metrics.timeEnd("resource-blocking-time", {
        tag: {
            resource: "hotjar-js"
        },
        start: v,
        type: "lab"
    }), window.hjLazyModules = window.hjLazyModules || {
        SURVEY_V2: {
            js: "survey-v2.d5405e3bb2d866a8d81e.js"
        },
        SURVEY_BOOTSTRAPPER: {
            js: "survey-bootstrapper.d55717dad3e3dcd9f312.js"
        },
        SURVEY_ISOLATED: {
            js: "survey-isolated.deb18d17784ac2d97d3b.js"
        },
        HEATMAP_RETAKER: {
            js: "heatmap-retaker.03eedc48703630f6a41e.js"
        },
        SURVEY_INVITATION: {
            js: "survey-invitation.0eed63f2449b5c5cd14a.js"
        },
        NOTIFICATION: {
            js: "notification.0ed6d753395a17d0055b.js"
        },
        INCOMING_FEEDBACK: {
            js: "incoming-feedback.90d38ed80bddf873aec3.js"
        },
        PREACT_INCOMING_FEEDBACK: {
            js: "preact-incoming-feedback.8917ef65a56484395694.js"
        },
        SENTRY: {
            js: "sentry.58c81e3e25532810f6fd.js"
        },
        BROWSER_PERF: {
            js: "browser-perf.28a8c6b22b3c0474c577.js"
        }
    }
}();