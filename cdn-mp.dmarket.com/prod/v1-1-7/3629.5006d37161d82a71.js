"use strict";
(self.webpackChunkdmarket = self.webpackChunkdmarket || []).push([
    [3629], {
        53629: (Fe, w, n) => {
            n.r(w), n.d(w, {
                HomeModule: () => Ce
            });
            var s = n(36895),
                I = n(20254),
                F = n(89482),
                H = n(96384),
                g = n(82761),
                T = n(70655),
                e = n(94650),
                p = n(30430),
                A = n(49933),
                z = n(25043),
                v = n(93795),
                m = n(39646),
                _ = n(25071),
                S = n(64166),
                b = n(95918),
                O = n(88061),
                D = n(35575),
                Q = n(23775),
                x = n(74318),
                B = n(25565),
                y = n(82011),
                J = n(44632),
                k = n(27335),
                j = n(54004),
                q = n(49089),
                E = n(80529);
            let L = (() => {
                class o extends q.s {
                    constructor(t) {
                        super(q.D.CryptoTotalService), this.http = t
                    }
                    listenToTotalBalance() {
                        return this.http.get(this.rootPath + "/total?ts=" + Date.now()).pipe((0, j.U)(t => parseInt(t.total)))
                    }
                }
                return o.\u0275fac = function(t) {
                    return new(t || o)(e.LFG(E.eN))
                }, o.\u0275prov = e.Yz7({
                    token: o,
                    factory: o.\u0275fac,
                    providedIn: "root"
                }), o
            })();
            var r = n(63112),
                $ = n(82836),
                Y = n(41971),
                G = n(26474),
                U = n(84406),
                N = n(10108);
            const W = function() {
                return ["/navination/packs"]
            };

            function R(o, a) {
                if (1 & o) {
                    const t = e.EpF();
                    e.TgZ(0, "section", 2), e.TgZ(1, "div", 3), e.TgZ(2, "div", 4), e.TgZ(3, "div", 5), e._UZ(4, "img", 6), e.TgZ(5, "p", 7), e._uU(6), e.qZA(), e.TgZ(7, "h1", 8), e._uU(8), e._UZ(9, "br"), e._uU(10), e.qZA(), e.TgZ(11, "p", 9), e._uU(12), e.qZA(), e.TgZ(13, "div", 10), e.TgZ(14, "a", 11), e.ALo(15, "async"), e.ALo(16, "linkTranslate"), e._uU(17), e.qZA(), e.qZA(), e.qZA(), e._UZ(18, "img", 12), e.qZA(), e.TgZ(19, "div", 13), e.TgZ(20, "p", 14), e._uU(21), e.qZA(), e.TgZ(22, "countdown", 15), e.NdJ("timerEnd", function() {
                        return e.CHM(t), e.oxw(2).updateTimer()
                    }), e.qZA(), e.qZA(), e.qZA(), e.qZA()
                }
                if (2 & o) {
                    const t = e.oxw().$implicit,
                        i = e.oxw();
                    e.xp6(6), e.Oqu(t("the first epic metaverse")), e.xp6(2), e.hij(" ", t("Packs"), " "), e.xp6(2), e.hij(" ", t("with NFT Wearables"), " "), e.xp6(2), e.hij(" ", t("Welcome to the first ever presale of NFT esports inventory packs for your future character."), " "), e.xp6(2), e.Q6J("routerLink", e.lcZ(15, 9, e.lcZ(16, 11, e.DdM(13, W)))), e.xp6(3), e.hij(" ", t("Go to preorder page"), " "), e.xp6(4), e.Oqu(t("UNTIL THE NFT DRAW")), e.xp6(1), e.Q6J("endTime", i.packsPromoEndTime)("timerType", i.timerTypeEnum.TimerWithBigDigits)
                }
            }

            function V(o, a) {
                if (1 & o && (e.ynx(0), e.YNc(1, R, 23, 14, "section", 1), e.BQk()), 2 & o) {
                    const t = e.oxw();
                    e.xp6(1), e.Q6J("ngIf", t.isPacksPromoShown)
                }
            }
            let ee = (() => {
                class o {
                    constructor(t) {
                        this.cdr = t, this.packsPromoEndTime = 1617903e3, this.isPacksPromoShown = !0, this.timerTypeEnum = U.F
                    }
                    ngOnInit() {
                        this.setPacksPromoState()
                    }
                    setPacksPromoState() {
                        this.isPacksPromoShown = this.packsPromoEndTime > (new Date).getTime() / G.LC, this.cdr.markForCheck()
                    }
                    updateTimer() {
                        this.timeoutForUpdatingTimer = setTimeout(() => this.setPacksPromoState(), 2e3), this.cdr.markForCheck()
                    }
                    ngOnDestroy() {
                        clearTimeout(this.timeoutForUpdatingTimer)
                    }
                }
                return o.\u0275fac = function(t) {
                    return new(t || o)(e.Y36(e.sBO))
                }, o.\u0275cmp = e.Xpm({
                    type: o,
                    selectors: [
                        ["navination-packs-promo"]
                    ],
                    decls: 1,
                    vars: 0,
                    consts: [
                        [4, "transloco"],
                        ["class", "c-packsPromoMain", 4, "ngIf"],
                        [1, "c-packsPromoMain"],
                        [1, "l-container"],
                        [1, "c-packsPromoMain__content"],
                        [1, "c-packsPromoMain__description"],
                        ["src", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/navination/logo-navi.svg", "alt", "navi", 2, "width", "55px", "margin-bottom", "20px"],
                        [1, "c-packsPromoMain__subTitle"],
                        [1, "c-packsPromoMain__title"],
                        [1, "c-packsPromoMain__text"],
                        [1, "c-packsPromoMain__btns"],
                        [1, "c-packsPromo__btn", 3, "routerLink"],
                        ["src", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/navination/packs-promo-v3/main-img3.png", "alt", "NAVINATION NFT PACKS PRESALE", 1, "c-packsPromoMain__img"],
                        [1, "c-packsPromoCountdown"],
                        [1, "c-packsPromoCountdown__title"],
                        [1, "c-packsPromoCountdown__countdown", 3, "endTime", "timerType", "timerEnd"]
                    ],
                    template: function(t, i) {
                        1 & t && e.YNc(0, V, 2, 1, "ng-container", 0)
                    },
                    directives: [p.KI, s.O5, g.yS, U.M],
                    pipes: [s.Ov, N.U],
                    encapsulation: 2,
                    changeDetection: 0
                }), o
            })();
            var C = n(79895),
                M = n(97392),
                te = n(24515),
                oe = n(18401),
                ie = n(27820),
                u = n(99485),
                d = n(37084),
                ae = n(79489);

            function ne(o, a) {
                if (1 & o && (e.ynx(0), e._uU(1), e.ALo(2, "number"), e.TgZ(3, "p", 88), e._uU(4), e.TgZ(5, "a", 89), e._uU(6), e.qZA(), e._uU(7), e.qZA(), e.BQk()), 2 & o) {
                    const t = e.oxw().$implicit,
                        i = e.oxw();
                    e.xp6(1), e.hij(" $ ", e.lcZ(2, 4, i.totalDonated), "+ "), e.xp6(3), e.hij(" ", t("TOTAL SUM DONATED FOR UKRAINE TO THE"), " "), e.xp6(2), e.Oqu(t("OFFICIAL CRYPTO WALLETS")), e.xp6(1), e.hij(" ", t("SINCE 26 FEB 2022"), " ")
                }
            }

            function re(o, a) {
                if (1 & o && (e.TgZ(0, "li", 27), e.TgZ(1, "div", 28), e._uU(2, "80 000 000+"), e.qZA(), e.TgZ(3, "p", 29), e._uU(4), e.ALo(5, "uppercase"), e.qZA(), e.qZA()), 2 & o) {
                    const t = e.oxw().$implicit;
                    e.xp6(4), e.Oqu(e.lcZ(5, 1, t("transactions recorded in blockchain NFT")))
                }
            }
            const se = function() {
                return {
                    isAutoScrollEnabled: !1,
                    isHomePage: !0
                }
            };

            function ce(o, a) {
                if (1 & o && e.GkF(0, 90), 2 & o) {
                    const t = e.oxw(2);
                    e.Q6J("loadModule", t.LiveFeedDesktopLazyLoad)("moduleInputs", e.DdM(2, se))
                }
            }

            function me(o, a) {}

            function le(o, a) {
                1 & o && e.YNc(0, me, 0, 0, "ng-template")
            }

            function pe(o, a) {
                if (1 & o && (e.TgZ(0, "a", 92), e.ALo(1, "sanitize"), e.ALo(2, "async"), e.ALo(3, "linkTranslate"), e._uU(4, "here."), e.qZA()), 2 & o) {
                    const t = e.oxw().$implicit;
                    e.Q6J("href", e.xi3(1, 1, e.lcZ(2, 4, e.lcZ(3, 6, t.textEndLink)), "url"), e.LSH)
                }
            }

            function he(o, a) {}

            function de(o, a) {
                1 & o && e.YNc(0, he, 0, 0, "ng-template")
            }

            function ge(o, a) {
                if (1 & o && (e.TgZ(0, "div"), e.YNc(1, de, 1, 0, void 0, 43), e.qZA()), 2 & o) {
                    e.oxw(3);
                    const t = e.MAs(2);
                    e.xp6(1), e.Q6J("ngTemplateOutlet", t)
                }
            }

            function _e(o, a) {
                if (1 & o && (e.TgZ(0, "a", 60), e.ALo(1, "sanitize"), e.ALo(2, "async"), e.ALo(3, "linkTranslate"), e.ALo(4, "async"), e._uU(5), e.ALo(6, "async"), e.qZA()), 2 & o) {
                    const t = e.oxw(2).$implicit;
                    e.Q6J("href", e.xi3(1, 2, e.lcZ(2, 5, e.lcZ(3, 7, e.lcZ(4, 9, t.links[0].url$))), "url"), e.LSH), e.xp6(5), e.hij(" ", e.lcZ(6, 11, t.links[0].text), " ")
                }
            }
            const f = function() {
                    return {}
                },
                Z = function(o) {
                    return [o]
                };

            function xe(o, a) {
                if (1 & o && (e.TgZ(0, "a", 51), e.ALo(1, "async"), e.ALo(2, "async"), e.ALo(3, "linkTranslate"), e.ALo(4, "async"), e._uU(5), e.ALo(6, "async"), e.qZA()), 2 & o) {
                    const t = e.oxw(2).$implicit;
                    e.Q6J("queryParams", t.links[0].queryParams$ ? e.lcZ(1, 3, t.links[0].queryParams$) : e.DdM(13, f))("routerLink", e.lcZ(2, 5, e.lcZ(3, 7, e.VKq(14, Z, e.lcZ(4, 9, t.links[0].url$))))), e.xp6(5), e.hij(" ", e.lcZ(6, 11, t.links[0].text), " ")
                }
            }

            function ue(o, a) {
                if (1 & o && (e.ynx(0), e.YNc(1, _e, 7, 13, "a", 93), e.YNc(2, xe, 7, 16, "a", 94), e.BQk()), 2 & o) {
                    const t = e.oxw().$implicit;
                    e.xp6(1), e.Q6J("ngIf", t.linkNewWindow), e.xp6(1), e.Q6J("ngIf", !t.linkNewWindow)
                }
            }

            function fe(o, a) {
                if (1 & o && (e.TgZ(0, "article"), e.TgZ(1, "div", 46), e.TgZ(2, "div", 47), e.TgZ(3, "h3", 48), e._uU(4), e.ALo(5, "async"), e.qZA(), e.TgZ(6, "p", 49), e._uU(7), e.ALo(8, "async"), e.YNc(9, pe, 5, 8, "a", 91), e.qZA(), e.YNc(10, ge, 2, 1, "div", 8), e.YNc(11, ue, 3, 2, "ng-container", 8), e.qZA(), e.qZA(), e.TgZ(12, "h3", 52), e._uU(13), e.ALo(14, "async"), e.qZA(), e.TgZ(15, "div", 53), e.TgZ(16, "picture"), e._UZ(17, "source", 54), e._UZ(18, "source", 55), e._UZ(19, "img", 58), e.ALo(20, "async"), e.qZA(), e.qZA(), e.qZA()), 2 & o) {
                    const t = a.$implicit;
                    e.Tol("c-home__article c-home__article--" + t.className), e.ekj("c-home__article--mobile", t.isMobileBlock), e.xp6(4), e.Oqu(e.lcZ(5, 14, t.title)), e.xp6(3), e.hij(" ", e.lcZ(8, 16, t.text), " "), e.xp6(2), e.Q6J("ngIf", t.textEndLink), e.xp6(1), e.Q6J("ngIf", t.isMobileBlock), e.xp6(1), e.Q6J("ngIf", !t.isMobileBlock), e.xp6(2), e.Oqu(e.lcZ(14, 18, t.title)), e.xp6(4), e.Q6J("srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/articles/" + t.imageName + ".webp", e.LSH), e.xp6(1), e.Q6J("srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/articles/" + t.imageName + ".png", e.LSH), e.xp6(1), e.Q6J("src", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/articles/" + t.imageName + ".png", e.LSH)("alt", e.lcZ(20, 20, t.title))
                }
            }

            function Ze(o, a) {
                if (1 & o && (e.TgZ(0, "li", 95), e.TgZ(1, "a", 96), e._UZ(2, "i", 97), e.TgZ(3, "picture"), e._UZ(4, "source", 54), e._UZ(5, "source", 98), e._UZ(6, "img", 99), e.qZA(), e.qZA(), e.TgZ(7, "div", 100), e.TgZ(8, "p", 101), e._uU(9), e.qZA(), e.TgZ(10, "p", 102), e._uU(11), e.qZA(), e.TgZ(12, "p", 103), e._uU(13), e.ALo(14, "async"), e.qZA(), e.qZA(), e.qZA()), 2 & o) {
                    const t = a.$implicit,
                        i = a.index;
                    e.xp6(1), e.s9C("href", t.founderLink, e.LSH), e.xp6(3), e.MGl("srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/about-us/founder-", i + 1, ".webp", e.LSH), e.xp6(1), e.MGl("srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/about-us/founder-", i + 1, ".jpg", e.LSH), e.xp6(1), e.MGl("src", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/about-us/founder-", i + 1, ".jpg", e.LSH), e.s9C("alt", t.founderName), e.xp6(3), e.Oqu(t.founderName), e.xp6(2), e.Oqu(t.founderPosition), e.xp6(2), e.Oqu(e.lcZ(14, 8, t.founderDescription))
                }
            }

            function we(o, a) {
                if (1 & o && (e.TgZ(0, "picture"), e._UZ(1, "source", 54), e._UZ(2, "source", 107), e._UZ(3, "img", 108), e.qZA(), e.TgZ(4, "p", 109), e._uU(5), e.ALo(6, "async"), e.qZA(), e.TgZ(7, "p", 103), e._uU(8), e.ALo(9, "async"), e.qZA(), e.TgZ(10, "a", 110), e._uU(11), e.qZA()), 2 & o) {
                    const t = e.oxw().$implicit,
                        i = e.oxw(2).$implicit;
                    e.xp6(1), e.MGl("srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/about-us/news-logo-", t.nameCompany, ".webp", e.LSH), e.xp6(1), e.MGl("srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/about-us/news-logo-", t.nameCompany, ".svg", e.LSH), e.xp6(1), e.MGl("src", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/about-us/news-logo-", t.nameCompany, ".svg", e.LSH), e.xp6(2), e.Oqu(e.lcZ(6, 7, t.date)), e.xp6(3), e.Oqu(e.lcZ(9, 9, t.description)), e.xp6(2), e.Q6J("href", t.link, e.LSH), e.xp6(1), e.Oqu(i("read more"))
                }
            }

            function Te(o, a) {
                1 & o && e.YNc(0, we, 12, 11, "ng-template", 106)
            }

            function Ae(o, a) {
                if (1 & o && (e.TgZ(0, "swiper", 104), e.YNc(1, Te, 1, 0, void 0, 105), e.qZA()), 2 & o) {
                    const t = e.oxw(2);
                    e.Q6J("config", t.aboutUsNewsSwiper), e.xp6(1), e.Q6J("rxForOf", t.newsArticles)
                }
            }

            function ve(o, a) {
                if (1 & o && (e.TgZ(0, "section", 111), e.TgZ(1, "div", 63), e.TgZ(2, "div", 112), e.TgZ(3, "h3", 113), e._uU(4), e.qZA(), e.TgZ(5, "div", 114), e.TgZ(6, "mat-accordion", 115), e.TgZ(7, "mat-expansion-panel", 116, 117), e.TgZ(9, "mat-expansion-panel-header", 118), e.TgZ(10, "mat-panel-title", 119), e._uU(11), e.qZA(), e.TgZ(12, "mat-icon", 120), e._uU(13, "add "), e.qZA(), e.qZA(), e.TgZ(14, "p", 121), e._uU(15), e.qZA(), e.qZA(), e.qZA(), e.qZA(), e.qZA(), e.qZA(), e.qZA()), 2 & o) {
                    const t = e.MAs(8),
                        i = e.oxw().$implicit;
                    e.xp6(4), e.Oqu(i("Frequently asked questions")), e.xp6(2), e.Q6J("multi", !0), e.xp6(1), e.Q6J("hideToggle", !0), e.xp6(2), e.Q6J("collapsedHeight", "80px")("expandedHeight", "80px"), e.xp6(2), e.Oqu(i("What is NFT?")), e.xp6(1), e.ekj("c-dmFaqs__icon--open", t.expanded), e.xp6(3), e.hij(" ", i("A non-fungible token is scarce digital content stored on blockchain NFT, such as a piece of digital art or a virtual in-game item. Each NFT has a unique ID that provides proof of authenticity and ownership and makes the item one of a kind and not interchangeable."), " ")
                }
            }
            const be = function() {
                    return ["/stand-with-ukraine"]
                },
                ye = function() {
                    return ["/ingame-items/item-list/tf2-skins"]
                },
                ke = function() {
                    return ["/ingame-items/item-list/csgo-skins"]
                },
                qe = function() {
                    return ["/ingame-items/item-list/rust-skins"]
                },
                Le = function() {
                    return ["/ingame-items/item-list/dota2-skins"]
                };

            function Ue(o, a) {
                if (1 & o) {
                    const t = e.EpF();
                    e.ynx(0), e.TgZ(1, "main", 2), e.TgZ(2, "section", 3), e.TgZ(3, "div", 4), e.TgZ(4, "p", 5), e._uU(5), e.qZA(), e.TgZ(6, "p", 6), e._uU(7), e.qZA(), e.qZA(), e.TgZ(8, "div", 4), e.TgZ(9, "div", 7), e.YNc(10, ne, 8, 6, "ng-container", 8), e.TgZ(11, "a", 9), e.ALo(12, "async"), e.ALo(13, "linkTranslate"), e._uU(14), e.qZA(), e.qZA(), e.qZA(), e.qZA(), e.TgZ(15, "section", 10), e.TgZ(16, "div", 11), e.TgZ(17, "div", 12), e.NdJ("click", function() {
                        e.CHM(t);
                        const h = e.MAs(142);
                        return e.oxw().scrollToElement(h)
                    }), e.TgZ(18, "div", 13), e._uU(19), e.qZA(), e.TgZ(20, "div", 14), e._uU(21), e.qZA(), e.TgZ(22, "div", 15), e.TgZ(23, "picture", 16), e._UZ(24, "source", 17), e._UZ(25, "img", 18), e.qZA(), e.TgZ(26, "p", 19), e.TgZ(27, "a", 20), e.ALo(28, "async"), e.ALo(29, "linkTranslate"), e._uU(30, "TF 2"), e.qZA(), e.TgZ(31, "a", 21), e.ALo(32, "async"), e.ALo(33, "linkTranslate"), e._uU(34, "CS:GO"), e.qZA(), e.TgZ(35, "a", 22), e.ALo(36, "async"), e.ALo(37, "linkTranslate"), e._uU(38, "RUST"), e.qZA(), e.TgZ(39, "a", 23), e.ALo(40, "async"), e.ALo(41, "linkTranslate"), e._uU(42, "DOTA2"), e.qZA(), e.qZA(), e.qZA(), e.qZA(), e.qZA(), e.TgZ(43, "div", 24), e.TgZ(44, "a", 25), e.ALo(45, "async"), e.ALo(46, "async"), e.ALo(47, "linkTranslate"), e.ALo(48, "async"), e._uU(49), e.qZA(), e.qZA(), e.TgZ(50, "ul", 26), e.TgZ(51, "li", 27), e.TgZ(52, "div", 28), e._uU(53, "11 000 000+"), e.qZA(), e.TgZ(54, "p", 29), e._uU(55), e.ALo(56, "titlecase"), e.qZA(), e.qZA(), e.YNc(57, re, 6, 3, "li", 30), e.TgZ(58, "li", 27), e.TgZ(59, "div", 28), e._uU(60, "23 000 000+"), e.qZA(), e.TgZ(61, "p", 29), e._uU(62), e.ALo(63, "titlecase"), e.qZA(), e.qZA(), e.TgZ(64, "li", 31), e.TgZ(65, "div", 32), e.YNc(66, ce, 1, 3, "ng-container", 33), e.qZA(), e.TgZ(67, "p", 29), e._uU(68), e.ALo(69, "titlecase"), e.qZA(), e.qZA(), e.TgZ(70, "li", 34), e.TgZ(71, "a", 35), e.TgZ(72, "picture"), e._UZ(73, "source", 36), e._UZ(74, "source", 37), e._UZ(75, "img", 38), e.qZA(), e.qZA(), e.qZA(), e.qZA(), e.TgZ(76, "a", 39), e.TgZ(77, "picture"), e._UZ(78, "source", 40), e._UZ(79, "source", 41), e._UZ(80, "img", 42), e.qZA(), e.qZA(), e.YNc(81, le, 1, 0, void 0, 43), e.qZA(), e.TgZ(82, "section", 44), e._UZ(83, "navination-packs-promo"), e.qZA(), e.TgZ(84, "section", 45), e.TgZ(85, "article"), e.TgZ(86, "div", 46), e.TgZ(87, "div", 47), e.TgZ(88, "h3", 48), e._uU(89), e.ALo(90, "async"), e.qZA(), e.TgZ(91, "p", 49), e.TgZ(92, "b", 50), e._uU(93), e.qZA(), e._uU(94), e.ALo(95, "async"), e.qZA(), e.TgZ(96, "a", 51), e.ALo(97, "async"), e.ALo(98, "async"), e.ALo(99, "linkTranslate"), e.ALo(100, "async"), e._uU(101), e.ALo(102, "async"), e.qZA(), e.qZA(), e.qZA(), e.TgZ(103, "h3", 52), e._uU(104), e.ALo(105, "async"), e.qZA(), e.TgZ(106, "div", 53), e.TgZ(107, "picture"), e._UZ(108, "source", 54), e._UZ(109, "source", 55), e._UZ(110, "img", 56), e.ALo(111, "async"), e.qZA(), e.qZA(), e.qZA(), e.TgZ(112, "article"), e.TgZ(113, "div", 46), e.TgZ(114, "div", 47), e.TgZ(115, "h3", 48), e._uU(116), e.ALo(117, "async"), e.qZA(), e.TgZ(118, "p", 49), e._uU(119), e.TgZ(120, "a", 57), e._uU(121), e.qZA(), e._uU(122), e._UZ(123, "br"), e._uU(124), e.qZA(), e.TgZ(125, "a", 51), e.ALo(126, "async"), e.ALo(127, "async"), e.ALo(128, "linkTranslate"), e.ALo(129, "async"), e._uU(130), e.ALo(131, "async"), e.qZA(), e.qZA(), e.qZA(), e.TgZ(132, "h3", 52), e._uU(133), e.ALo(134, "async"), e.qZA(), e.TgZ(135, "div", 53), e.TgZ(136, "picture"), e._UZ(137, "source", 54), e._UZ(138, "source", 55), e._UZ(139, "img", 58), e.ALo(140, "async"), e.qZA(), e.qZA(), e.qZA(), e.TgZ(141, "article", null, 59), e.TgZ(143, "div", 46), e.TgZ(144, "div", 47), e.TgZ(145, "h3", 48), e._uU(146), e.ALo(147, "async"), e.qZA(), e.TgZ(148, "p", 49), e._uU(149), e.ALo(150, "async"), e.qZA(), e.TgZ(151, "a", 60), e.ALo(152, "async"), e.ALo(153, "linkTranslate"), e.ALo(154, "async"), e._uU(155), e.ALo(156, "async"), e.qZA(), e.qZA(), e.qZA(), e.TgZ(157, "h3", 52), e._uU(158), e.qZA(), e.TgZ(159, "div", 53), e.TgZ(160, "picture"), e._UZ(161, "source", 54), e._UZ(162, "source", 55), e._UZ(163, "img", 58), e.ALo(164, "async"), e.qZA(), e.qZA(), e.qZA(), e.YNc(165, fe, 21, 22, "article", 61), e.qZA(), e.TgZ(166, "section", 62), e.TgZ(167, "div", 63), e.TgZ(168, "div", 64), e.TgZ(169, "div", 65), e.TgZ(170, "p", 66), e.TgZ(171, "mat-icon", 67), e._uU(172, "format_quote"), e.qZA(), e._uU(173), e.TgZ(174, "mat-icon", 68), e._uU(175, "format_quote"), e.qZA(), e.qZA(), e.TgZ(176, "p", 69), e._uU(177), e.qZA(), e.TgZ(178, "div", 70), e.TgZ(179, "div", 71), e._uU(180), e.qZA(), e.TgZ(181, "div", 72), e._uU(182), e.qZA(), e.TgZ(183, "div", 73), e._uU(184), e.qZA(), e.qZA(), e.qZA(), e.TgZ(185, "picture"), e._UZ(186, "source", 74), e._UZ(187, "source", 75), e._UZ(188, "img", 76), e.qZA(), e.qZA(), e.qZA(), e.qZA(), e.TgZ(189, "section", 77), e.TgZ(190, "div", 63), e.TgZ(191, "h3", 48), e._uU(192), e.qZA(), e.TgZ(193, "ul", 78), e.YNc(194, Ze, 15, 10, "li", 79), e.qZA(), e.qZA(), e.qZA(), e.TgZ(195, "section", 80), e.TgZ(196, "div", 63), e.TgZ(197, "h3", 48), e._uU(198), e.qZA(), e.TgZ(199, "div", 81), e.YNc(200, Ae, 2, 2, "swiper", 82), e._UZ(201, "div", 83), e._UZ(202, "div", 84), e._UZ(203, "div", 85), e.qZA(), e.qZA(), e.qZA(), e.YNc(204, ve, 16, 9, "section", 86), e.qZA(), e._UZ(205, "app-footer", 87), e.BQk()
                }
                if (2 & o) {
                    const t = a.$implicit,
                        i = e.oxw(),
                        h = e.MAs(2);
                    e.xp6(5), e.Oqu(t("Stand With Ukraine")), e.xp6(2), e.Oqu(t("No to russian aggression")), e.xp6(3), e.Q6J("ngIf", i.totalDonated), e.xp6(1), e.Q6J("routerLink", e.lcZ(12, 69, e.lcZ(13, 71, e.DdM(151, be)))), e.xp6(3), e.Oqu(t("Donate")), e.xp6(5), e.Oqu(t("support ukraine")), e.xp6(2), e.Oqu(t("Trade Skins on DMarket")), e.xp6(6), e.Q6J("routerLink", e.lcZ(28, 73, e.lcZ(29, 75, e.DdM(152, ye)))), e.xp6(4), e.Q6J("routerLink", e.lcZ(32, 77, e.lcZ(33, 79, e.DdM(153, ke)))), e.xp6(4), e.Q6J("routerLink", e.lcZ(36, 81, e.lcZ(37, 83, e.DdM(154, qe)))), e.xp6(4), e.Q6J("routerLink", e.lcZ(40, 85, e.lcZ(41, 87, e.DdM(155, Le)))), e.xp6(5), e.Q6J("queryParams", e.lcZ(45, 89, i.defaultMpLink.queryParams$))("routerLink", e.lcZ(46, 91, e.lcZ(47, 93, e.lcZ(48, 95, i.defaultMpLink.url$)))), e.xp6(5), e.hij(" ", t("Trade now"), " "), e.xp6(6), e.Oqu(e.lcZ(56, 97, t("skins on the market"))), e.xp6(2), e.Q6J("ngIf", !1), e.xp6(5), e.Oqu(e.lcZ(63, 99, t("closed deals"))), e.xp6(6), e.Oqu(e.lcZ(69, 101, t("Live transactions"))), e.xp6(13), e.Q6J("ngTemplateOutlet", h), e.xp6(4), e.Tol("c-home__article c-home__article--" + i.articleConfig[i.HomeArticle.AboutUs].className), e.xp6(4), e.Oqu(e.lcZ(90, 103, i.articleConfig[i.HomeArticle.AboutUs].title)), e.xp6(4), e.Oqu(t("Ukrainian-born startup DMarket")), e.xp6(1), e.hij(" ", e.lcZ(95, 105, i.articleConfig[i.HomeArticle.AboutUs].text), " "), e.xp6(2), e.Q6J("queryParams", i.articleConfig[i.HomeArticle.AboutUs].links[0].queryParams$ ? e.lcZ(97, 107, i.articleConfig[i.HomeArticle.AboutUs].links[0].queryParams$) : e.DdM(156, f))("routerLink", e.lcZ(98, 109, e.lcZ(99, 111, e.VKq(157, Z, e.lcZ(100, 113, i.articleConfig[i.HomeArticle.AboutUs].links[0].url$))))), e.xp6(5), e.Oqu(e.lcZ(102, 115, i.articleConfig[i.HomeArticle.AboutUs].links[0].text)), e.xp6(3), e.hij(" ", e.lcZ(105, 117, i.articleConfig[i.HomeArticle.AboutUs].title), " "), e.xp6(4), e.Q6J("srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/articles/" + i.articleConfig[i.HomeArticle.AboutUs].imageName + ".webp", e.LSH), e.xp6(1), e.Q6J("srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/articles/" + i.articleConfig[i.HomeArticle.AboutUs].imageName + ".png", e.LSH), e.xp6(1), e.Q6J("alt", e.lcZ(111, 119, i.articleConfig[i.HomeArticle.AboutUs].title))("src", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/articles/" + i.articleConfig[i.HomeArticle.AboutUs].imageName + ".png", e.LSH), e.xp6(2), e.Tol("c-home__article c-home__article--" + i.articleConfig[i.HomeArticle.Marketplace].className), e.xp6(4), e.Oqu(e.lcZ(117, 121, i.articleConfig[i.HomeArticle.Marketplace].title)), e.xp6(3), e.hij(" ", t("DMarket is a marketplace to trade virtual items and technology for building metaverses. Based on the latest"), " "), e.xp6(2), e.Oqu(t("Newzoo report")), e.xp6(1), e.hij(" ", t("it\u2019s a Top-3 blockchain-based marketplace."), ""), e.xp6(2), e.hij(" ", t("DMarket builds bridges between real and virtual worlds by creating a cross-chain platform that accumulates multiple metaverses for brands, influencers, video games, eSports organizations, broadcasters, and all kinds of entities. DMarket is connecting the entertainment industry with the global metaverse."), " "), e.xp6(1), e.Q6J("queryParams", i.articleConfig[i.HomeArticle.Marketplace].links[0].queryParams$ ? e.lcZ(126, 123, i.articleConfig[i.HomeArticle.Marketplace].links[0].queryParams$) : e.DdM(159, f))("routerLink", e.lcZ(127, 125, e.lcZ(128, 127, e.VKq(160, Z, e.lcZ(129, 129, i.articleConfig[i.HomeArticle.Marketplace].links[0].url$))))), e.xp6(5), e.Oqu(e.lcZ(131, 131, i.articleConfig[i.HomeArticle.Marketplace].links[0].text)), e.xp6(3), e.hij(" ", e.lcZ(134, 133, i.articleConfig[i.HomeArticle.Marketplace].title), " "), e.xp6(4), e.Q6J("srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/articles/" + i.articleConfig[i.HomeArticle.Marketplace].imageName + ".webp", e.LSH), e.xp6(1), e.Q6J("srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/articles/" + i.articleConfig[i.HomeArticle.Marketplace].imageName + ".png", e.LSH), e.xp6(1), e.Q6J("src", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/articles/" + i.articleConfig[i.HomeArticle.Marketplace].imageName + ".png", e.LSH)("alt", e.lcZ(140, 135, i.articleConfig[i.HomeArticle.Marketplace].title)), e.xp6(2), e.Tol("c-home__article c-home__article--" + i.articleConfig[i.HomeArticle.Cashout].className), e.xp6(5), e.Oqu(e.lcZ(147, 137, i.articleConfig[i.HomeArticle.Cashout].title)), e.xp6(3), e.Oqu(e.lcZ(150, 139, i.articleConfig[i.HomeArticle.Cashout].text)), e.xp6(2), e.Q6J("href", e.lcZ(152, 141, e.lcZ(153, 143, e.lcZ(154, 145, i.articleConfig[i.HomeArticle.Cashout].links[0].url$))), e.LSH), e.xp6(4), e.hij(" ", e.lcZ(156, 147, i.articleConfig[i.HomeArticle.Cashout].links[0].text), " "), e.xp6(3), e.Oqu(t("Deposits & withdrawals")), e.xp6(3), e.Q6J("srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/articles/" + i.articleConfig[i.HomeArticle.Cashout].imageName + ".webp", e.LSH), e.xp6(1), e.Q6J("srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/articles/" + i.articleConfig[i.HomeArticle.Cashout].imageName + ".png", e.LSH), e.xp6(1), e.Q6J("src", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/articles/" + i.articleConfig[i.HomeArticle.Cashout].imageName + ".png", e.LSH)("alt", e.lcZ(164, 149, i.articleConfig[i.HomeArticle.Cashout].title)), e.xp6(2), e.Q6J("rxForOf", i.articles), e.xp6(8), e.hij(" ", t("DMarket is a pioneer in the open market trading of game-related virtual goods, a market that will explode in the next decade."), " "), e.xp6(4), e.hij(" \u201c", t("I love that DMarket is at the intersection of five growth trends in the game industry: advanced social games, virtual goods trading, fashion, esports, and blockchain. DMarket has a big opportunity to be a new kind of leader in the game industry. They have the leadership, ideas, and resources to succeed and it is fun for me to help a talented executive like Vlad."), " \u201d "), e.xp6(3), e.Oqu(t("Trip Hawkins")), e.xp6(2), e.hij(" ", t("DMarket's independent board member"), " "), e.xp6(2), e.hij(" ", t("Founder and The First CEO of Electronic Arts"), " "), e.xp6(8), e.Oqu(t("OUR FOUNDERS")), e.xp6(2), e.Q6J("rxForOf", i.founders), e.xp6(4), e.Oqu(t("DMARKET IN the NEWS")), e.xp6(2), e.Q6J("ngIf", i.pageViewInited), e.xp6(4), e.Q6J("ngIf", !1)
                }
            }

            function Ne(o, a) {
                1 & o && (e.TgZ(0, "div", 122), e.TgZ(1, "a", 123), e.TgZ(2, "picture"), e._UZ(3, "source", 124), e._UZ(4, "source", 125), e._UZ(5, "img", 126), e.qZA(), e.qZA(), e.TgZ(6, "a", 127), e.TgZ(7, "picture"), e._UZ(8, "source", 128), e._UZ(9, "source", 129), e._UZ(10, "img", 130), e.qZA(), e.qZA(), e.qZA())
            }
            _.ZP.use([_.W_, _.tl]);
            var c = (() => {
                return (o = c || (c = {})).Marketplace = "marketplace", o.F2F = "f2f", o.Mobile = "mobile", o.Cashout = "cashout", o.Api = "api", o.Explorer = "explorer", o.AboutUs = "aboutUs", c;
                var o
            })();
            let l = class {
                constructor(a, t, i, h, P, Me, Pe, Ie) {
                    this.pageMetaService = a, this.donationsCounterService = t, this.cdr = i, this.exchangeTabUrlBuilderService = h, this.defaultMarketUrlService = P, this.deviceDetectorService = Me, this.transloco = Pe, this.aboutUsTranslateService = Ie, this.LiveFeedDesktopLazyLoad = D.F8, this.pageViewInited = !1, this.isMobile = this.deviceDetectorService.isMobile(), this.newsArticles = this.aboutUsTranslateService.NewsArticles, this.aboutUsNewsSwiper = Q.V, this.founders = this.aboutUsTranslateService.FoundersData, this.HomeArticle = c, this.articleConfig = {
                        [c.Marketplace]: {
                            title: this.transloco.selectTranslate("About marketplace", {}, "homepage"),
                            text: this.transloco.selectTranslate("", {}, "homepage"),
                            imageName: "marketplace-x2",
                            links: [{
                                text: this.transloco.selectTranslate("Go to market", {}, "homepage"),
                                url$: this.defaultMarketUrlService.marketUrl$,
                                queryParams$: this.defaultMarketUrlService.marketQueryParams$,
                                analytics: "goToMarketMarketplace"
                            }],
                            className: "about"
                        },
                        [c.Cashout]: {
                            title: this.transloco.selectTranslate("Cashouts & deposits", {}, "homepage"),
                            text: this.transloco.selectTranslate("DMarket provides 20+ reliable payment methods for users to buy NFT and in-game items and cash-out their trading profits. The payment options include Visa/MasterCard, bank wire, PayPal, Skrill, Payoneer, UnionPay, Alipay, and other prominent methods.", {}, "homepage"),
                            imageName: "dpayments2-v2",
                            links: [{
                                text: this.transloco.selectTranslate("MORE INFO", {}, "homepage"),
                                url$: (0, m.of)(r.B[r.A.Withdrawals]),
                                analytics: "moreInfoCashouts"
                            }],
                            linkNewWindow: !0,
                            className: c.Cashout
                        },
                        [c.AboutUs]: {
                            title: this.transloco.selectTranslate("About us", {}, "homepage"),
                            text: this.transloco.selectTranslate("unlocks the multi-billion-dollar skins economy for game developers and players everywhere. Our team of passionate gamers believes a borderless gaming world is a better gaming world, and we\u2019re building the infrastructure to make it easy for everyone to thrive in the open system of the future.", {}, "homepage"),
                            imageName: "about_us-2",
                            links: [{
                                text: this.transloco.selectTranslate("Read more about us", {}, "homepage"),
                                url$: (0, m.of)(r.B[r.A.AboutUs]),
                                analytics: "learnMoreAboutUs"
                            }],
                            className: "aboutUs"
                        }
                    }, this.articles = [{
                        title: this.transloco.selectTranslate("Face2face trading", {}, "homepage"),
                        text: this.transloco.selectTranslate("Buy and sell Steam items without transferring them to DMarket. Avoid one trade hold period during each trade and so reduce the total cooldown by half. Use item in the game until it\u2019s sold.", {}, "homepage"),
                        imageName: "f2f-x2",
                        links: [{
                            text: this.transloco.selectTranslate("TRADE FACE2FACE", {}, "homepage"),
                            url$: (0, m.of)(r.B[r.A.SteamMarket]),
                            queryParams$: (0, m.of)(this.exchangeTabUrlBuilderService.buildTabQueryParams(O.xU.F2FOffers, {
                                type: z.e.TypeEnum.Steam
                            })),
                            analytics: "tradeF2f"
                        }],
                        className: "f2f"
                    }, {
                        title: this.transloco.selectTranslate("Mobile application", {}, "homepage"),
                        text: this.transloco.selectTranslate("DMarket\u2019s mobile apps for iOS and Android provide full platform functionality for the users, anytime and anywhere.", {}, "homepage"),
                        imageName: "mobile-v2",
                        isMobileBlock: !0,
                        links: [{
                            text: this.transloco.selectTranslate("", {}, "homepage"),
                            url$: (0, m.of)("")
                        }],
                        className: "mobile"
                    }, {
                        title: this.transloco.selectTranslate("Trading API", {}, "homepage"),
                        text: this.transloco.selectTranslate("DMarket Trading API enables all users to streamline their skins trading through a comprehensive range of API methods. It can help you manage your DMarket inventory and trade in bulk using pre-set algorithms, without routine manual efforts.", {}, "homepage"),
                        imageName: "api-x2",
                        links: [{
                            text: this.transloco.selectTranslate("DISCOVER BENEFITS", {}, "homepage"),
                            url$: (0, m.of)(r.B[r.A.Api]),
                            analytics: "generateApi"
                        }],
                        linkNewWindow: !0,
                        className: "trading"
                    }, {
                        title: this.transloco.selectTranslate("Mythical SAGA Explorer", {}, "homepage"),
                        text: this.transloco.selectTranslate("Every transaction on DMarket is registered on blockchain to ensure unrivaled security and prove the ownership and origin of each item. All this data can be accessed by anyone through the Mythical SAGA Explorer.", {}, "homepage"),
                        imageName: "blockchain-x2",
                        links: [{
                            text: this.transloco.selectTranslate("EXPLORE NOW", {}, "homepage"),
                            url$: (0, m.of)(r.B[r.A.Explorer]),
                            analytics: "exploreMoreBlockchain"
                        }],
                        linkNewWindow: !0,
                        className: "blockchain"
                    }, {
                        title: this.transloco.selectTranslate("FOR GAME DEVELOPERS", {}, "homepage"),
                        text: this.transloco.selectTranslate("DMarket creates an ecosystem where game developers, players, influencers, and brands can co-create video game content securely, making a profit while continuing to have fun in different gaming multiverses.", {}, "homepage"),
                        imageName: "developers-x2",
                        links: [{
                            text: this.transloco.selectTranslate("GET MORE INFO", {}, "homepage"),
                            url$: (0, m.of)(r.B[r.A.Developers]),
                            analytics: "learnMoreDevelopers"
                        }],
                        linkNewWindow: !0,
                        className: "developers"
                    }], this.defaultMpLink = this.articleConfig[c.Marketplace].links[0], this.totalDonated = 0
                }
                ngOnInit() {
                    this.pageMetaService.initTags(J.q.MainPage, this), "production" === S.N.environmentName && this.updateDonationCounter()
                }
                ngAfterViewInit() {
                    this.pageViewInited = !0, this.cdr.detectChanges()
                }
                scrollToElement(a) {
                    a.scrollIntoView()
                }
                updateDonationCounter() {
                    this.donationsCounterService.listenToTotalBalance().pipe((0, B._)(), (0, A.t)(this)).subscribe(a => {
                        this.totalDonated = a, this.cdr.markForCheck()
                    })
                }
            };
            l.\u0275fac = function(a) {
                return new(a || l)(e.Y36(y.d), e.Y36(L), e.Y36(e.sBO), e.Y36(b.W), e.Y36(k.F), e.Y36(v.x0), e.Y36(p.Vn), e.Y36(x.s))
            }, l.\u0275cmp = e.Xpm({
                type: l,
                selectors: [
                    ["home"]
                ],
                decls: 3,
                vars: 1,
                consts: [
                    [4, "transloco", "translocoRead"],
                    ["mobileApps", ""],
                    [1, "c-home"],
                    [1, "c-home__support"],
                    [1, "c-home__supportBlock"],
                    [1, "c-home__supportTitle"],
                    [1, "c-home__supportSubtitle"],
                    [1, "c-home__supportMoney"],
                    [4, "ngIf"],
                    ["rel", "nofollow noopener noreferrer", "target", "_blank", 1, "o-dmButton", "o-dmButton--center", "o-dmButton--blue", "c-home__button", 3, "routerLink"],
                    [1, "c-home__info"],
                    [1, "c-home__payments"],
                    [1, "c-home__paymentsContent", 3, "click"],
                    [1, "c-home__paymentsPreTitle"],
                    [1, "c-home__paymentsTitle"],
                    [1, "c-home__paymentsGames"],
                    [1, "c-home__paymentsGamesImg"],
                    ["srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/games-mob.png", "media", "(max-width: 600px)"],
                    ["alt", "games", "src", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/games.jpg", "imageLazyLoad", ""],
                    [1, "c-home__paymentsGamesCaptions"],
                    ["aria-label", "Team Fortress", 3, "routerLink"],
                    ["aria-label", "CSGO", 3, "routerLink"],
                    ["aria-label", "Rust", 3, "routerLink"],
                    ["aria-label", "DOTA2", 3, "routerLink"],
                    [1, "c-home__buttons"],
                    ["aria-label", "Trade now", 1, "o-dmButton", "o-dmButton--center", "o-dmButton--green", "c-home__button", 3, "queryParams", "routerLink"],
                    [1, "c-home__numbers"],
                    [1, "c-home__numbersItem"],
                    [1, "c-home__numbersItemQty"],
                    [1, "c-home__numbersItemTitle"],
                    ["class", "c-home__numbersItem", 4, "ngIf"],
                    [1, "c-home__numbersItem", "c-home__numbersItem--feed"],
                    [1, "c-home__numbersItemFeed"],
                    [3, "loadModule", "moduleInputs", 4, "appIsBrowser"],
                    [1, "c-home__numbersItem", "c-home__numbersItem--trustpilot"],
                    ["href", "https://www.trustpilot.com/review/dmarket.com", "target", "_blank", "rel", "noreferrer nofollow noopener", "aria-label", "Trustpilot", 1, "c-home__numbersItemTrustpilot"],
                    ["srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/trustpilot-mobile.webp", "type", "image/webp"],
                    ["srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/trustpilot-mobile.svg", "type", "image/svg"],
                    ["src", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/trustpilot-mobile.svg", "alt", "Trustpilot logo", "imageLazyLoad", "", 1, "c-home__trustpilotImg"],
                    ["href", "https://www.trustpilot.com/review/dmarket.com", "target", "_blank", "rel", "noreferrer nofollow noopener", "aria-label", "Trustpilot", 1, "c-home__trustpilot"],
                    ["srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/trustpilot.webp", "type", "image/webp"],
                    ["srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/trustpilot.svg", "type", "image/svg"],
                    ["src", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/trustpilot.svg", "alt", "Trustpilot logo", "imageLazyLoad", "", 1, "c-home__trustpilotImg"],
                    [4, "ngTemplateOutlet"],
                    [1, "c-home__navination"],
                    [1, "c-home__articles"],
                    [1, "c-home__article-info"],
                    [1, "c-home__article-infoContent"],
                    [1, "c-home__sectionTitle"],
                    [1, "c-home__article-infoText"],
                    [1, "c-home__article-infoText--bold"],
                    [1, "c-home__article-infoButton", "o-dmButton", "o-dmButton--center", "o-dmButton--green", 3, "queryParams", "routerLink"],
                    [1, "c-home__sectionTitle", "c-home__sectionTitle--mobile"],
                    [1, "c-home__article-image"],
                    ["type", "image/webp", 3, "srcset"],
                    ["type", "image/png", 3, "srcset"],
                    ["imageLazyLoad", "", 3, "alt", "src"],
                    ["href", "https://newzoo.com/insights/trend-reports/newzoo-intro-to-the-metaverse-report-2021-free-version/", "target", "_blank", "rel", "noopener noreferrer nofollow", 1, "o-link"],
                    ["imageLazyLoad", "", 3, "src", "alt"],
                    ["deposit", ""],
                    ["target", "_blank", "rel", "nofollow noopener noreferrer", 1, "c-home__article-infoButton", "o-dmButton", "o-dmButton--center", "o-dmButton--green", 3, "href"],
                    [3, "class", "c-home__article--mobile", 4, "rxFor", "rxForOf"],
                    [1, "c-home__comment"],
                    [1, "l-container"],
                    [1, "c-home__commentContent"],
                    [1, "c-home__commentInfo"],
                    [1, "c-home__commentQuote"],
                    [1, "c-home__commentQuoteIcon", "c-home__commentQuoteIcon--left"],
                    [1, "c-home__commentQuoteIcon", "c-home__commentQuoteIcon--right"],
                    [1, "c-home__commentText"],
                    [1, "c-home__commentAuthor"],
                    [1, "c-home__commentAuthorName"],
                    [1, "c-home__commentAuthorPosition", "c-home__commentAuthorPosition--capitalize"],
                    [1, "c-home__commentAuthorPosition"],
                    ["srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/trip-hawkins.webp", "type", "image/webp"],
                    ["srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/trip-hawkins.jpg", "type", "image/jpg"],
                    ["src", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/trip-hawkins.jpg", "alt", "Trip Hawkins photo", "imageLazyLoad", "", 1, "c-home__commentImg"],
                    [1, "c-homeFounders__section"],
                    [1, "c-homeFoundersList"],
                    ["class", "c-homeFoundersList__item", 4, "rxFor", "rxForOf"],
                    [1, "c-homeNews__section"],
                    [1, "c-homeNews__slider"],
                    [3, "config", 4, "ngIf"],
                    [1, "swiper-pagination", "c-homeNews__pagination"],
                    [1, "swiper-button-prev", "c-homeNews__prev"],
                    [1, "swiper-button-next", "c-homeNews__next"],
                    ["class", "c-homeFaqs__section", 4, "ngIf"],
                    ["isAlwaysShown", "true"],
                    [1, "c-home__supportMoneyText"],
                    ["href", "https://twitter.com/FedorovMykhailo/status/1497549813205848068", "rel", "nofollow noopener noreferrer", "target", "_blank"],
                    [3, "loadModule", "moduleInputs"],
                    ["target", "_blank", "rel", "noopener noreferrer noflollow", "class", "o-link", 3, "href", 4, "ngIf"],
                    ["target", "_blank", "rel", "noopener noreferrer noflollow", 1, "o-link", 3, "href"],
                    ["class", "c-home__article-infoButton o-dmButton o-dmButton--center o-dmButton--green", "target", "_blank", "rel", "nofollow noopener noreferrer", 3, "href", 4, "ngIf"],
                    ["class", "c-home__article-infoButton o-dmButton o-dmButton--center o-dmButton--green", 3, "queryParams", "routerLink", 4, "ngIf"],
                    [1, "c-homeFoundersList__item"],
                    ["aria-label", "founders link", "rel", "nofollow noopener noreferrer", "target", "_blank", 3, "href"],
                    ["inlineSVG", "sprites/sprite-about-us.svg#ic-linkedin", 1, "c-homeFounders__icon"],
                    ["type", "image/jpg", 3, "srcset"],
                    ["imageLazyLoad", "", 1, "c-homeFounders__avatar", 3, "src", "alt"],
                    [1, "c-homeFounders__info"],
                    [1, "c-homeNews__subTitle"],
                    [1, "c-homeFounders__position"],
                    [1, "c-homeNews__text"],
                    [3, "config"],
                    [4, "rxFor", "rxForOf"],
                    ["swiperSlide", "", "class", "c-homeNews__item"],
                    ["type", "image/svg", 3, "srcset"],
                    ["alt", "news logo", "imageLazyLoad", "", 1, "c-homeNews__logo", 3, "src"],
                    [1, "c-homeNews__text", "c-homeNews__text--uppercase"],
                    ["aria-label", "read more news", "rel", "nofollow noopener noreferrer", "target", "_blank", 1, "c-homeNews__link", 3, "href"],
                    [1, "c-homeFaqs__section"],
                    [1, "c-dmFaqs"],
                    [1, "c-dmFaqs__caption"],
                    [1, "c-dmFaqs__content"],
                    [3, "multi"],
                    [3, "hideToggle"],
                    ["faqPanelFirst", ""],
                    [3, "collapsedHeight", "expandedHeight"],
                    [1, "c-dmFaqs__title"],
                    [1, "c-dmFaqs__icon"],
                    [1, "c-dmFaqs__description"],
                    [1, "c-home__apps"],
                    ["href", "https://play.google.com/store/apps/details?id=com.dmarket.dmarketmobile&hl=en&gl=US", "aria-label", "Google Play", "rel", "nofollow noreferrer noopener", "target", "_blank", 1, "c-home__appsLink"],
                    ["srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/footer/img-google-play.webp", "type", "image/webp"],
                    ["srcset", "../../../assets/img/img-google-play.svg", "type", "image/svg"],
                    ["src", "../../../assets/img/img-google-play.svg", "alt", "Google Play", "imageLazyLoad", ""],
                    ["href", "https://apps.apple.com/ru/app/dmarket/id1441399013?l=en", "aria-label", "App Store", "rel", "nofollow noreferrer noopener", "target", "_blank", 1, "c-home__appsLink"],
                    ["srcset", "https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/footer/img-app-store.webp", "type", "image/webp"],
                    ["srcset", "../../../assets/img/img-app-store.svg", "type", "image/svg"],
                    ["src", "../../../assets/img/img-app-store.svg", "alt", "App Store", "imageLazyLoad", ""]
                ],
                template: function(a, t) {
                    1 & a && (e.YNc(0, Ue, 206, 162, "ng-container", 0), e.YNc(1, Ne, 11, 0, "ng-template", null, 1, e.W1O)), 2 & a && e.Q6J("translocoRead", "homepage")
                },
                directives: [p.KI, s.O5, g.yS, $.J, Y.E, s.tP, ee, C._0, M.Hw, te.c, oe.J, ie.d, u.nF, u.YC, d.pp, d.ib, d.yz, d.yK],
                pipes: [s.Ov, N.U, s.rS, s.JJ, s.gd, ae.M],
                styles: [':root{--ex-home-bg: #1b2218;--ex-home-games-position: 50px;--ex-home-info-top-spacing: 80px;--ex-home-bg-dark-gray: #0d0d0e;--ex-home-payment-size: 60px;--ex-section-bg-light: #151515}.c-home{background-color:var(--ex-color-black)}@media (max-width: 1440px){.c-home{--ex-home-games-position: 0;--ex-home-info-top-spacing: 40px}}@media (max-width: 1180px){.c-home{--ex-home-info-top-spacing: 30px}}@media (max-width: 767px){.c-home{--ex-home-info-top-spacing: 24px}}.c-home__support{display:flex;flex-direction:column;justify-content:space-between;align-items:center;position:relative;height:640px;padding:35px 20px;text-align:center;text-transform:uppercase;line-height:1;background-image:url(https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/home/home-support-bg.jpg);background-repeat:no-repeat;background-position:center;background-size:cover}.c-home__supportTitle{font-size:50px;font-weight:800}@media (max-width: 767px){.c-home__supportTitle{font-size:32px}}.c-home__supportSubtitle{font-size:28px;font-weight:800;margin-top:15px}@media (max-width: 767px){.c-home__supportSubtitle{font-size:20px}}.c-home__supportImg{position:absolute;left:50%;bottom:50%;transform:translate(-50%);max-height:150px}.c-home__supportInfo{max-width:445px;font-size:18px;line-height:1.3;font-weight:500}.c-home__supportMoney{margin-top:20px;font-size:56px;font-weight:800;color:#ffe601}@media (max-width: 767px){.c-home__supportMoney{font-size:30px}}.c-home__supportMoneyText{margin-top:14px;margin-bottom:34px;font-size:12px;font-weight:500}.c-home__supportMoneyText a{text-decoration:underline}.c-home__supportMoneyText a:hover{text-decoration:unset}.c-home__supportMoney .o-dmButton{min-width:300px;margin-top:30px}.c-home__sectionTitle{text-align:center;font-weight:900;font-size:30px;text-transform:uppercase;color:var(--ex-color-white)}@media (max-width: 991px){.c-home__sectionTitle{display:none}}.c-home__sectionTitle--mobile{display:none}@media (max-width: 991px){.c-home__sectionTitle--mobile{display:block;order:1;margin-bottom:20px;text-align:left;padding:0 20px;width:100%}}.c-home__apps{display:flex;justify-content:center;margin-top:25px}@media (max-width: 767px){.c-home__apps{flex-direction:column;align-items:center}}.c-home__appsLink{max-width:165px}@media (min-width: 768px){.c-home__appsLink+.c-home__appsLink{margin-left:5px}}@media (max-width: 767px){.c-home__appsLink{max-width:270px;width:100%;margin-bottom:16px}}.c-home__appsLink img{display:block;width:100%;height:100%}.c-home__info{position:relative;max-width:1920px;margin:auto;padding:var(--ex-home-info-top-spacing) 0 50px;background-repeat:no-repeat;background-position:center -55px;background-size:1920px;overflow:hidden}@media (max-width: 767px){.c-home__info .c-home__apps{display:none}}.c-home__payments{text-align:center}@media (max-width: 767px){.c-home__payments{margin-top:0;order:1}}.c-home__paymentsContent{display:inline-block;cursor:pointer}.c-home__paymentsPreTitle{font-size:20px;font-weight:500;text-transform:uppercase;color:var(--ex-color-white)}@media (max-width: 767px){.c-home__paymentsPreTitle{font-size:18px}}.c-home__paymentsTitle{font-size:50px;font-weight:900;text-transform:uppercase;color:var(--ex-color-white)}@media (max-width: 767px){.c-home__paymentsTitle{font-size:36px}}.c-home__paymentsGamesImg img{width:100%;max-width:723px;max-height:280px}.c-home__paymentsGamesCaptions{margin-top:15px;display:flex;justify-content:space-around;font-size:20px;font-weight:400;padding:0 64px}.c-home__paymentsGamesCaptions a{width:100px;text-align:center}@media (max-width: 767px){.c-home__paymentsGamesCaptions{padding:0}}.c-home__paymentsList{display:flex;align-items:center;justify-content:center;margin-top:20px}.c-home__paymentsListItem{display:flex;align-items:center;justify-content:center;position:relative;width:var(--ex-home-payment-size);height:var(--ex-home-payment-size);padding:8px;transform:scale(1.2);border-radius:50%;background-color:var(--ex-home-bg)}@media (max-width: 1180px){.c-home__paymentsListItem{--ex-home-payment-size: 46px;padding:4px}}@media (max-width: 767px){.c-home__paymentsListItem{--ex-home-payment-size: 40px}}.c-home__paymentsListItem--bitcoin-ethereum{z-index:1;padding:8px}.c-home__paymentsListItem--webmoney{z-index:1}.c-home__paymentsListItem--alipay{padding:8px}@media (max-width: 1180px){.c-home__paymentsListItem--alipay{padding:6px}}.c-home__paymentsListItem--visa-mc{padding:4px 16px}@media (max-width: 767px){.c-home__paymentsListItem--visa-mc{padding:4px 11px}}@media (max-width: 1180px){.c-home__paymentsListItem--visa-mc{padding:4px 13px}}.c-home__paymentsIcon{position:relative;z-index:1;width:100%;height:100%;color:var(--ex-color-white)}.c-home__paymentsIcon svg{width:100%;height:100%}.c-home__title{display:inline;padding:0 0 0 10px;font-size:32px;font-weight:900;letter-spacing:12px;text-transform:uppercase;background-color:var(--ex-color-white);color:var(--ex-color-black)}@media (max-width: 1180px){.c-home__title{padding:0 0 0 10px;font-size:26px;letter-spacing:11px}}@media (max-width: 991px){.c-home__title{font-size:22px;letter-spacing:8px}}@media (max-width: 767px){.c-home__title{padding:5px 6px 5px 12px;font-size:16px;letter-spacing:5px}}@media (max-width: 320px){.c-home__title{font-size:14px}}.c-home__numbers{display:flex;align-items:flex-end;justify-content:space-between;max-width:750px;margin:auto}@media (max-width: 1366px){.c-home__numbers{max-width:630px}}@media (max-width: 767px){.c-home__numbers{max-width:280px;order:6;margin-top:30px;margin-bottom:20px;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start}}.c-home__numbersItem{text-align:center;min-width:118px;flex:1}@media (max-width: 767px){.c-home__numbersItem{margin-top:25px;flex:50% 0 0;justify-content:space-between;padding:0 4px;text-align:left}.c-home__numbersItem:nth-child(even){order:1}}@media (max-width: 767px){.c-home__numbersItem--feed{display:none}}.c-home__numbersItemFeed{position:relative;min-height:22px;max-width:175px;margin:auto}.c-home__numbersItemFeed .c-liveFeed{bottom:0}@media (min-width: 992px){.c-home__numbersItemFeed .c-liveFeed{right:initial;left:0}}.c-home__numbersItemFeed .c-liveFeed--closed{min-width:100%}.c-home__numbersItemQty{min-height:22px;font-size:30px;font-weight:900;text-shadow:0 0 40px rgba(255,255,255,.45);white-space:nowrap}@media (max-width: 1180px){.c-home__numbersItemQty{font-size:18px}}@media (max-width: 767px){.c-home__numbersItemQty{font-size:16px}}.c-home__numbersItemTitle{margin-top:10px;font-size:16px;font-weight:500}@media (max-width: 767px){.c-home__numbersItemTitle{font-size:12px}}.c-home__numbersItemTrustpilot{display:block;max-width:100px}@media (min-width: 768px){.c-home__numbersItem--trustpilot{display:none}}.c-home__buttons{display:flex;align-items:center;justify-content:center;margin:64px auto 48px}.c-home__button{min-width:250px;height:70px;margin:0 8px;font-size:18px;font-weight:800;text-transform:uppercase}@media (max-width: 1180px){.c-home__button{min-width:200px;height:69px}}.c-home__trustpilot{display:block;max-width:215px;margin:50px auto 0}@media (max-width: 767px){.c-home__trustpilot{display:none}}.c-home__trustpilotImg{display:block;width:100%;height:100%}.c-home__articles{display:flex;flex-direction:column}.c-home__article{padding:50px 0;max-width:1540px;width:100%;margin:0 auto;display:flex;overflow:hidden;align-items:center}@media (max-width: 991px){.c-home__article{flex-direction:column-reverse;padding:25px 0}}.c-home__article .c-home__apps{justify-content:flex-start;margin-bottom:30px}.c-home__article-info{display:flex;justify-content:center;align-items:center;flex:50%;padding:0 20px}.c-home__article-info .c-home__sectionTitle{text-align:left}@media (min-width: 768px){.c-home__article-infoContent{max-width:630px}}.c-home__article-infoText{font-size:18px;line-height:27px;color:var(--ex-color-gray);margin:30px 0 50px}.c-home__article-infoText--bold{font-weight:700}.c-home__article-infoButton{--buttonWidth: 300px;text-transform:uppercase;font-weight:800;margin-right:14px;margin-bottom:20px}@media (max-width: 767px){.c-home__article-infoButton{--buttonWidth: 100%}}.c-home__article-image{display:flex;justify-content:center;align-items:center;flex:50%;padding:0 20px}.c-home__article-image picture{display:inline-flex}.c-home__article-image img{width:100%;max-width:600px;height:100%;filter:drop-shadow(10px 0 30px black)}@media (min-width: 768px){.c-home__article-image img{min-width:400px}}@media (min-width: 992px){.c-home__article--drops,.c-home__article--mobile,.c-home__article--trading,.c-home__article--aboutUs{flex-direction:row-reverse}}.c-home__article--aboutUs{order:1}.c-home__article--about{order:2}.c-home__article--drops{order:3}.c-home__article--f2f{order:4}.c-home__article--mobile{order:5;align-items:flex-start;background:var(--ex-section-bg-light)}@media (min-width: 992px){.c-home__article--mobile{padding:140px 0 0}}@media (max-width: 991px){.c-home__article--mobile{align-items:center}}@media (min-width: 768px){.c-home__article--mobile img{max-width:555px}}.c-home__article--cashout{order:6}.c-home__article--trading{order:7;background:var(--ex-section-bg-light)}.c-home__article--blockchain{order:8}.c-home__article--developers{order:9}.c-home__comment{background:var(--ex-section-bg-light)}.c-home__commentContent{display:flex;justify-content:space-between;align-items:center;padding:70px 0 0}@media (max-width: 991px){.c-home__commentContent{flex-direction:column-reverse;align-items:center;padding:40px 0}}.c-home__commentInfo{max-width:670px;padding:30px 50px 30px 30px}@media (max-width: 991px){.c-home__commentInfo{padding:30px}}.c-home__commentQuote{position:relative;display:inline;font-size:24px;line-height:1.5;font-weight:700;font-style:italic}.c-home__commentQuoteIcon{--mat-icon-size: 48px;position:absolute}.c-home__commentQuoteIcon--left{right:100%;top:-12px;transform:rotate(180deg)}.c-home__commentQuoteIcon--right{right:0;bottom:-4px;transform:translate(var(--mat-icon-size))}.c-home__commentText{margin-top:30px;font-size:18px;line-height:1.6}.c-home__commentAuthor{margin-top:40px;font-size:18px}.c-home__commentAuthorName{font-weight:600;text-transform:uppercase}.c-home__commentAuthorPosition{margin-top:10px;color:var(--ex-color-green)}.c-home__commentAuthorPosition--capitalize{text-transform:capitalize}.c-home__commentImg{display:block;width:100%;max-width:500px;height:100%}.c-homeNews__section{padding:0 0 50px}@media (min-width: 631px) and (max-width: 1390px){.c-homeNews__section{padding:0 50px 50px}}.c-homeNews__section .c-aboutUs__text{max-width:1000px;margin-left:auto;margin-right:auto}.c-homeNews__slider{margin-top:70px;position:relative}.c-homeNews__pagination{width:100%!important;margin:auto;bottom:-30px!important}.c-homeNews__pagination span{margin:0 5px;transition:var(--ex-transition-primary)}.c-homeNews__prev{left:unset;right:100%;margin-right:10px}.c-homeNews__prev:before{content:"keyboard_arrow_left"}.c-homeNews__next{right:unset;left:100%;margin-left:10px}.c-homeNews__next:before{content:"keyboard_arrow_right"}.c-homeNews__prev,.c-homeNews__next{display:flex;align-items:center;justify-content:center;opacity:.7;width:50px;height:50px;background-color:var(--ex-bg-color--400)}.c-homeNews__prev:hover,.c-homeNews__next:hover{opacity:1}.c-homeNews__prev:after,.c-homeNews__next:after{content:none}.c-homeNews__prev:before,.c-homeNews__next:before{display:block;font-family:Material Icons,serif;color:var(--ex-color-white);font-size:25px}@media (max-width: 630px){.c-homeNews__prev,.c-homeNews__next{display:none}}.c-homeNews__item{position:relative;background:var(--ex-color-white);padding:30px 30px 50px;height:auto;transition:var(--ex-transition-primary)}@media (min-width: 991px){.c-homeNews__item{opacity:.6}}.c-homeNews__item.swiper-slide-next{opacity:1}.c-homeNews__logo{margin-bottom:10px;width:190px;height:50px;object-fit:contain}.c-homeNews__text{font-size:18px;color:var(--ex-color-gray);margin-bottom:30px;line-height:32px}.c-homeNews__text--uppercase{text-transform:uppercase}.c-homeNews__link{position:absolute;bottom:20px;left:30px;font-weight:500;text-transform:capitalize;color:var(--ex-color-green)}.c-homeNews__link:hover{text-decoration:underline}.c-homeFounders__section{padding:50px 0}.c-homeFounders__section .c-aboutUs__subTitle{margin-bottom:10px}.c-homeFounders__section .c-aboutUs__text{opacity:.8}@media (max-width: 480px){.c-homeFounders__section .l-container{padding:0}}.c-homeFoundersList{display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fit,minmax(360px,3fr));grid-template-rows:repeat(1,auto);padding:50px 0}@media (max-width: 480px){.c-homeFoundersList{grid-template-columns:repeat(auto-fit,minmax(280px,3fr))}}.c-homeFoundersList__item{position:relative;background:var(--ex-bg-color--400)}.c-homeFounders__icon{position:absolute;top:20px;left:20px}.c-homeFounders__icon svg{max-width:24px;max-height:24px}.c-homeFounders__info{padding:30px}.c-homeFounders__avatar{width:100%;height:300px;object-fit:cover}.c-homeFounders__position{font-size:18px;margin-bottom:20px;color:var(--ex-color-green)}.c-homeFounders__buttons{padding:0 15px}.c-homeFaqs__section{padding:50px 0;background:var(--ex-home-bg-dark-gray)}.c-home__navination{--ex-color-main: #ff00c7}.c-home__navination .l-container{max-width:1450px}.c-home .c-packsPromoCountdown{display:flex;flex-direction:column;align-items:center;margin-top:110px}@media (max-width: 991px){.c-home .c-packsPromoCountdown{align-items:center;justify-content:center;margin-top:30px}}.c-home .c-packsPromoCountdown__title{font-size:18px;text-align:center;text-transform:uppercase;font-weight:600;color:var(--ex-color-white);margin-bottom:5px}.c-home .c-packsPromoCountdown__countdown{--ex-countdown-bg: none;--ex-countdown-color: #fff;--ex-countdown-title-color: var(--ex-color-gray);--ex-countdownTime-font-size: 36px;--ex-countdown-text-size: 14px;--ex-countdown-padding: 0;--ex-countdownNumber-width: 60px;display:flex;justify-content:center;margin-bottom:25px}@media (max-width: 480px){.c-home .c-packsPromoCountdown__countdown{--ex-countdownNumber-width: 60px}}.c-home .c-packsPromoCountdown__countdown .c-countdown__number{align-items:flex-start}.c-home .c-packsPromoCountdown__countdown .c-countdown__number:not(:last-child){border-right:1px solid var(--ex-color-gray);padding-right:10px;margin-right:10px;border-radius:1px}.c-home .c-packsPromoCountdown__countdown .c-countdown__time{color:var(--ex-color-navi)}.c-home .c-packsPromoCountdown__countdown .c-countdown__text{text-transform:capitalize}.c-home .c-packsPromo__btn{max-width:320px;width:100%;min-height:65px;background:linear-gradient(180deg,#fff766 0%,#fff200 84.04%);text-transform:uppercase;color:var(--ex-color-black);font-weight:900;font-size:14px;padding:10px 20px;cursor:pointer;border-radius:2px;border-color:#daab04;border-style:solid;border-width:1px 1px 3px;display:flex;justify-content:center;align-items:center}@media (max-width: 991px){.c-home .c-packsPromo__btn{margin:0 auto 20px}}.c-home .c-packsPromo__btn:hover{box-shadow:inset 0 -70px 0 0 var(--hoverButtoncolor)}.c-home .c-packsPromo__btn--violet{background:linear-gradient(180deg,#9068ff 0%,#854bff 84.04%);border-color:#854bff;color:var(--ex-color-white)}.c-home .c-packsPromo__btn--violet i{filter:brightness(6.5)}.c-home .c-packsPromo__btn--center{margin:0 auto 20px}.c-home .c-packsPromo__btn[disabled]{pointer-events:none;background:linear-gradient(180deg,#9b9b9b 0%,#8b8b8b 84.04%);color:#00000080;border-color:#6f6f6f}.c-home .c-packsPromoMain{background-image:url(https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/navination/packs-promo-v3/main-block-bg.png);background-repeat:no-repeat;background-position:center;background-size:cover;position:relative;padding-top:40px;overflow:hidden}.c-home .c-packsPromoMain:after{content:url(https://cdn-mp.dmarket.com/prod/v1-1-7/assets/img/navination/packs-promo-v3/main-navination.svg);position:absolute;left:20px;top:20px;z-index:0}.c-home .c-packsPromoMain__btns{width:100%;display:flex;align-items:center;flex-wrap:wrap}.c-home .c-packsPromoMain__btns .c-packsPromo__btn{margin-bottom:10px;margin-right:10px}@media (max-width: 991px){.c-home .c-packsPromoMain__btns .c-packsPromo__btn{margin:0 auto 20px}}.c-home .c-packsPromoMain__content{display:flex}@media (max-width: 991px){.c-home .c-packsPromoMain__content{flex-direction:column;align-items:center;text-align:center}}.c-home .c-packsPromoMain__description{position:relative;z-index:2;max-width:490px}@media (max-width: 991px){.c-home .c-packsPromoMain__description{order:2}}.c-home .c-packsPromoMain__img{width:370px;height:370px;max-width:100%;margin-left:45px;object-fit:contain;transform:scale(1.9) translate(25%) translateY(9%)}@media (max-width: 1280px){.c-home .c-packsPromoMain__img{transform:scale(1.8) translate(20%) translateY(9%)}}@media (max-width: 991px){.c-home .c-packsPromoMain__img{margin-left:0;min-height:422px;transform:scale(1.4)}}@media (max-width: 767px){.c-home .c-packsPromoMain__img{height:230px;margin-bottom:60px;min-height:unset;transform:scale(1.2)}}.c-home .c-packsPromoMain__title{font-weight:900;font-size:70px;font-style:italic;margin-bottom:10px;text-transform:uppercase;color:var(--ex-color-white)}@media (max-width: 1280px){.c-home .c-packsPromoMain__title{font-size:55px}}@media (max-width: 767px){.c-home .c-packsPromoMain__title{font-size:50px}}@media (max-width: 480px){.c-home .c-packsPromoMain__title{font-size:35px}}@media (max-width: 360px){.c-home .c-packsPromoMain__title{font-size:30px}}.c-home .c-packsPromoMain__subTitle{color:var(--ex-color-main);font-style:italic;font-weight:900;font-size:22px;margin-bottom:20px;text-transform:uppercase}.c-home .c-packsPromoMain__text{font-size:24px;color:var(--ex-color-white);margin-bottom:20px}\n'],
                encapsulation: 2,
                changeDetection: 0
            }), l = (0, T.gn)([(0, A.c)(), (0, T.w6)("design:paramtypes", [y.d, L, e.sBO, b.W, k.F, v.x0, p.Vn, x.s])], l);
            let Ce = (() => {
                class o {}
                return o.\u0275fac = function(t) {
                    return new(t || o)
                }, o.\u0275mod = e.oAB({
                    type: o
                }), o.\u0275inj = e.cJS({
                    providers: [{
                        provide: p.Hn,
                        useValue: "homepage"
                    }, x.s],
                    imports: [
                        [g.Bz.forChild([{
                            path: "",
                            component: l
                        }]), s.ez, F.m, I.A, H.A, g.Bz, d.To, M.Ps, p.y4, u.kz, C.KD]
                    ]
                }), o
            })()
        }
    }
]);