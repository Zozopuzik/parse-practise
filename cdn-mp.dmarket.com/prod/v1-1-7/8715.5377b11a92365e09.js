"use strict";
(self.webpackChunkdmarket = self.webpackChunkdmarket || []).push([
    [8715], {
        48639: (w, T, r) => {
            var n, a, g, d = r(5884),
                m = d.util,
                h = d.roots.default || (d.roots.default = {});
            h.live_feed = ((g = {}).ItemSold = function() {
                function n(a) {
                    if (this.Subtitle = [], a)
                        for (var c = Object.keys(a), e = 0; e < c.length; ++e) null != a[c[e]] && (this[c[e]] = a[c[e]])
                }
                return n.prototype.Title = "", n.prototype.Image = "", n.prototype.GameType = 0, n.prototype.GameSlug = "", n.prototype.ItemSlug = "", n.prototype.Subtitle = m.emptyArray, n.prototype.Exterior = "", n.prototype.Price = "", n.prototype.Discount = 0, n.prototype.Seller = null, n.prototype.Buyer = null, n.prototype.MarketType = 0, n.getTypeUrl = function(c) {
                    return void 0 === c && (c = "type.googleapis.com"), c + "/live_feed.ItemSold"
                }, n
            }(), g.GameType = (n = {}, (a = Object.create(n))[n[0] = "blockchain"] = 0, a[n[1] = "steam"] = 1, a[n[2] = "ethereum"] = 2, a), g.MarketType = function() {
                var n = {},
                    a = Object.create(n);
                return a[n[0] = "dmarket"] = 0, a[n[1] = "f2f"] = 1, a
            }(), g.User = function() {
                function n(a) {
                    if (a)
                        for (var c = Object.keys(a), e = 0; e < c.length; ++e) null != a[c[e]] && (this[c[e]] = a[c[e]])
                }
                return n.prototype.Wallet = "", n.getTypeUrl = function(c) {
                    return void 0 === c && (c = "type.googleapis.com"), c + "/live_feed.User"
                }, n
            }(), g), w.exports = h
        },
        18715: (w, T, r) => {
            r.r(T), r.d(T, {
                LiveFeedModule: () => Ae
            });
            var d = r(36895),
                m = r(30430),
                h = r(20254),
                g = r(89482),
                n = r(97392),
                a = r(38972),
                c = r(82761),
                e = r(94650),
                I = r(65938),
                _ = r(70655),
                $ = r(79433),
                N = r(61135),
                L = r(92137),
                C = r(65256);
            let z = (() => {
                class t {
                    constructor(i) {
                        this.realTimeUpdatesService = i, this.latestDeal$ = new N.X(null)
                    }
                    subscribeOnLiveFeedEvents() {
                        this.realTimeUpdatesService.subscribeToPublicChannel(C.S.LiveFeedEvent, l => this.latestDeal$.next(l))
                    }
                    unsubscribeFromLiveFeedEvents() {
                        this.realTimeUpdatesService.unsubscribeFromChannel(C.S.LiveFeedEvent)
                    }
                    getFeedLatestDeal() {
                        return this.latestDeal$.asObservable()
                    }
                }
                return t.\u0275fac = function(i) {
                    return new(i || t)(e.LFG(L.t))
                }, t.\u0275prov = e.Yz7({
                    token: t,
                    factory: t.\u0275fac,
                    providedIn: "root"
                }), t
            })();
            var D = r(39300),
                J = r(95698),
                V = r(71884),
                j = r(18505),
                E = r(50727),
                S = r(10711);
            const F_liveFeedScrolled25 = {
                    event: "feed-scroll-1-25-percent",
                    "feed-scroll-1-25-percent": "/virtual/feed-scroll-1-25-percent/"
                },
                F_liveFeedScrolled50 = {
                    event: "feed-scroll-26-50-percent",
                    "feed-scroll-26-50-percent": "/virtual/feed-scroll-26-50-percent/"
                },
                F_liveFeedScrolled75 = {
                    event: "feed-scroll-51-75-percent",
                    "feed-scroll-51-75-percent": "/virtual/feed-scroll-51-75-percent/"
                },
                F_liveFeedScrolled100 = {
                    event: "feed-scroll-76-100-percent",
                    "feed-scroll-76-100-percent": "/virtual/feed-scroll-76-100-percent/"
                };
            let M = (() => {
                class t {
                    constructor() {
                        this.liveFeedTrackedEvents = []
                    }
                    submitEventsOnScroll(i) {
                        if (100 === i) return;
                        const l = this.getGaEventOnScroll(i);
                        !this.eventIsTracked(l.event) && this.isScrollHigher(i) && this.liveFeedTrackedEvents.push({
                            eventName: l.event,
                            scrollValue: i
                        })
                    }
                    getGaEventOnScroll(i) {
                        switch (!0) {
                            case i >= 75:
                                return F_liveFeedScrolled25;
                            case i >= 50:
                                return F_liveFeedScrolled50;
                            case i >= 25:
                                return F_liveFeedScrolled75;
                            case i >= 0:
                                return F_liveFeedScrolled100
                        }
                    }
                    isScrollHigher(i) {
                        return this.liveFeedTrackedEvents.every(l => l.scrollValue > i)
                    }
                    eventIsTracked(i) {
                        return !!this.liveFeedTrackedEvents.find(l => l.eventName === i)
                    }
                }
                return t.\u0275fac = function(i) {
                    return new(i || t)
                }, t.\u0275prov = e.Yz7({
                    token: t,
                    factory: t.\u0275fac,
                    providedIn: "root"
                }), t
            })();
            var O = r(64782),
                k = r(88061),
                B = r(93795),
                U = r(19482),
                b = r(49933),
                u = r(48639),
                W = r(19017),
                G = r(27820),
                q = r(29490),
                Q = r(79895),
                Y = r(10108),
                K = r(12869);
            let R = (() => {
                class t {
                    constructor(i) {
                        this.seoAreaMetaService = i
                    }
                    transform(i) {
                        return this.seoAreaMetaService.buildFullItemRoute(i.GameSlug, i.ItemSlug, i)
                    }
                }
                return t.\u0275fac = function(i) {
                    return new(i || t)(e.Y36(K.jM, 16))
                }, t.\u0275pipe = e.Yjl({
                    name: "feedLink",
                    type: t,
                    pure: !0
                }), t
            })();
            var X = r(47066);
            const ee = ["feedContainer"],
                ie = ["feedItem"],
                te = function(t) {
                    return [t]
                };

            function oe(t, o) {
                if (1 & t && (e._UZ(0, "img", 20), e.ALo(1, "optimizeImage")), 2 & t) {
                    const i = e.oxw().$implicit,
                        l = e.oxw(2);
                    e.Q6J("lazyLoad", e.gM2(1, 3, i.Image, l.GameTypeProtoToHttp[i.GameType], e.VKq(8, te, l.imageOptimizationContext), l.imageSize))("defaultImage", l.defaultImage)("errorImage", l.defaultImage)
                }
            }

            function le(t, o) {
                if (1 & t && (e.ynx(0), e.TgZ(1, "span"), e.ALo(2, "lowercase"), e._uU(3), e.ALo(4, "uppercase"), e.qZA(), e.BQk()), 2 & t) {
                    const i = o.$implicit;
                    e.xp6(1), e.Gre("c-liveFeed__itemExterior--", e.lcZ(2, 4, i), ""), e.xp6(2), e.hij("", e.lcZ(4, 6, i), " ")
                }
            }

            function re(t, o) {
                if (1 & t && (e.TgZ(0, "div", 21), e._uU(1, " ( "), e.YNc(2, le, 5, 8, "ng-container", 22), e._uU(3, " ) "), e.qZA()), 2 & t) {
                    const i = e.oxw().$implicit;
                    e.xp6(2), e.Q6J("rxForOf", i.Subtitle)
                }
            }

            function ne(t, o) {
                if (1 & t && (e.TgZ(0, "span", 23), e._uU(1), e.qZA()), 2 & t) {
                    const i = e.oxw().$implicit;
                    e.xp6(1), e.hij("(-", i.Discount, "%)")
                }
            }

            function ae(t, o) {
                if (1 & t) {
                    const i = e.EpF();
                    e.TgZ(0, "li", 5, 6), e.TgZ(2, "figure", 7), e._UZ(3, "i", 8), e.YNc(4, oe, 2, 10, "img", 9), e.qZA(), e.TgZ(5, "div", 10), e.TgZ(6, "a", 11), e.NdJ("click", function() {
                        return e.CHM(i), e.oxw(2).openProductCards()
                    }), e.ALo(7, "async"), e.ALo(8, "linkTranslate"), e.ALo(9, "feedLink"), e.TgZ(10, "span", 12), e._uU(11), e.qZA(), e.ynx(12), e.YNc(13, re, 4, 1, "div", 13), e.BQk(), e.qZA(), e.TgZ(14, "div", 14), e._UZ(15, "price-with-icon", 15), e.YNc(16, ne, 2, 1, "span", 16), e.qZA(), e.TgZ(17, "div", 17), e.TgZ(18, "a", 18), e.ALo(19, "bceWalletLink"), e._uU(20), e.qZA(), e.TgZ(21, "mat-icon", 19), e._uU(22, "arrow_forward"), e.qZA(), e.TgZ(23, "a", 18), e.ALo(24, "bceWalletLink"), e._uU(25), e.qZA(), e.qZA(), e.qZA(), e.qZA()
                }
                if (2 & t) {
                    const i = o.$implicit,
                        l = e.oxw(2);
                    e.ekj("c-liveFeed__item--f2f", i.MarketType === l.MarketType.f2f), e.xp6(3), e.Q6J("inlineSVG", i.MarketType === l.MarketType.f2f ? "icon-steam.svg" : "icon-market.svg"), e.xp6(1), e.Q6J("ngIf", i.Image), e.xp6(2), e.Q6J("routerLink", e.lcZ(7, 14, e.lcZ(8, 16, e.lcZ(9, 18, i)))), e.xp6(5), e.Oqu(i.Title), e.xp6(2), e.Q6J("ngIf", i.Subtitle.length), e.xp6(2), e.Q6J("currency", l.currency)("price", i.Price), e.xp6(1), e.Q6J("ngIf", i.Discount > 0), e.xp6(2), e.Q6J("href", e.lcZ(19, 20, i.Seller.Wallet), e.LSH), e.xp6(2), e.hij("", i.Seller.Wallet, " "), e.xp6(3), e.Q6J("href", e.lcZ(24, 22, i.Buyer.Wallet), e.LSH), e.xp6(2), e.hij("", i.Buyer.Wallet, " ")
                }
            }

            function ce(t, o) {
                if (1 & t) {
                    const i = e.EpF();
                    e.TgZ(0, "ul", 2, 3), e.NdJ("scrollPercentage", function(s) {
                        return e.CHM(i), e.oxw().recordInnerScroll(s)
                    }), e.YNc(2, ae, 26, 24, "li", 4), e.qZA()
                }
                if (2 & t) {
                    const i = e.oxw();
                    e.xp6(2), e.Q6J("ngForOf", i.feedDeals)
                }
            }

            function se(t, o) {
                1 & t && (e.TgZ(0, "li", 5), e._UZ(1, "figure", 7), e._UZ(2, "div", 10), e.qZA())
            }
            const de = function() {
                return []
            };

            function ve(t, o) {
                if (1 & t && (e.TgZ(0, "ul", 24), e.YNc(1, se, 3, 0, "li", 25), e.qZA()), 2 & t) {
                    const i = e.oxw();
                    e.xp6(1), e.Q6J("rxForOf", e.DdM(1, de).constructor(i.firstLoadFeedDealsQty))
                }
            }
            let x = class {
                constructor(o, i, l, s, y, Ze) {
                    this.liveFeedService = o, this.cdr = i, this.realTimeUpdatesService = l, this.userTabsService = s, this.liveFeedGaService = y, this.deviceDetectorService = Ze, this.isNearBottom = !0, this.currency = $.pn.USD, this.feedDeals = [], this.MarketType = u.live_feed.MarketType, this.GameType = u.live_feed.GameType, this.GameTypeProtoToHttp = {
                        [u.live_feed.GameType.blockchain]: S.V.GameTypeEnum.Blockchain,
                        [u.live_feed.GameType.steam]: S.V.GameTypeEnum.Steam,
                        [u.live_feed.GameType.ethereum]: S.V.GameTypeEnum.Ethereum
                    }, this.firstLoadFeedDealsQty = 4, this.imageOptimizationContext = U.z.LiveFeed, this.feedDealsSubscription = E.w0.EMPTY, this.feedScrollSubscription = E.w0.EMPTY, this.defaultImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", this.imageSize = 24, this.isAutoScrollEnabled = !0, this.closeDialog$ = new e.vpe
                }
                ngOnInit() {
                    this.listenToLiveFeed()
                }
                ngAfterViewInit() {
                    this.scrollDownOnFeedUpdate()
                }
                ngOnDestroy() {
                    this.isNearBottom = !0, this.feedDeals = [], this.feedDealsSubscription.unsubscribe(), this.feedScrollSubscription.unsubscribe(), this.liveFeedService.unsubscribeFromLiveFeedEvents()
                }
                scrollDownOnFeedUpdate() {
                    this.feedScrollSubscription = this.feedItemList.changes.pipe((0, b.t)(this)).subscribe(() => this.onItemElementsChanged())
                }
                listenToLiveFeed() {
                    this.liveFeedService.subscribeOnLiveFeedEvents(), this.feedDealsSubscription = this.liveFeedService.getFeedLatestDeal().pipe((0, D.h)(o => !!o), (0, b.t)(this)).subscribe(o => {
                        this.feedDeals.push(o), this.feedDeals.length > 30 && this.feedDeals.shift(), this.liveFeedService.latestDeal$.next(null), this.cdr.markForCheck()
                    })
                }
                onItemElementsChanged() {
                    this.isNearBottom && this.isAutoScrollEnabled && this.scrollToBottom()
                }
                recordInnerScroll(o) {
                    this.liveFeedGaService.submitEventsOnScroll(o), this.isNearBottom = this.isUserNearBottom()
                }
                isUserNearBottom() {
                    const o = this.feedContainer ? .nativeElement;
                    if (o) return o.scrollTop + o.offsetHeight > o.scrollHeight - 40
                }
                scrollToBottom() {
                    setTimeout(() => {
                        this.feedItemList.last ? .nativeElement ? .scrollIntoView()
                    }, 0)
                }
                openProductCards() {
                    this.setMarketTabOnDealClick(), this.closeDialog$.emit()
                }
                setMarketTabOnDealClick() {
                    const o = [k.xU.DmarketOffers, k.xU.F2FOffers];
                    this.userTabsService.activeTab$.pipe((0, J.q)(1), (0, V.x)(), (0, D.h)(i => !o.includes(i) && this.deviceDetectorService.isMobile()), (0, j.b)(() => this.userTabsService.navigateToTab(k.xU.DmarketOffers)), (0, b.t)(this)).subscribe()
                }
            };

            function me(t, o) {
                if (1 & t) {
                    const i = e.EpF();
                    e.ynx(0), e.TgZ(1, "div", 1), e.TgZ(2, "div", 2), e.TgZ(3, "div", 3), e.TgZ(4, "h4", 4), e.TgZ(5, "mat-icon", 5), e.NdJ("click", function() {
                        return e.CHM(i), e.oxw().closeDialog()
                    }), e._uU(6, "close"), e.qZA(), e.TgZ(7, "span"), e._uU(8), e.qZA(), e.qZA(), e.TgZ(9, "div", 6), e.TgZ(10, "button", 7), e.NdJ("click", function() {
                        return e.CHM(i), e.oxw().closeDialog()
                    }), e.TgZ(11, "mat-icon"), e._uU(12, "close"), e.qZA(), e.qZA(), e.qZA(), e.qZA(), e.TgZ(13, "div", 8), e.TgZ(14, "live-feed", 9), e.NdJ("closeDialog$", function() {
                        return e.CHM(i), e.oxw().closeDialog()
                    }), e.qZA(), e.qZA(), e.qZA(), e.qZA(), e.BQk()
                }
                if (2 & t) {
                    const i = o.$implicit,
                        l = e.oxw();
                    e.xp6(8), e.Oqu(i("Live feed")), e.xp6(6), e.Q6J("imageSize", l.imageSize)
                }
            }
            x.\u0275fac = function(o) {
                return new(o || x)(e.Y36(z), e.Y36(e.sBO), e.Y36(L.t), e.Y36(O.z), e.Y36(M), e.Y36(B.x0))
            }, x.\u0275cmp = e.Xpm({
                type: x,
                selectors: [
                    ["live-feed"]
                ],
                viewQuery: function(o, i) {
                    if (1 & o && (e.Gf(ee, 5), e.Gf(ie, 5)), 2 & o) {
                        let l;
                        e.iGM(l = e.CRH()) && (i.feedContainer = l.first), e.iGM(l = e.CRH()) && (i.feedItemList = l)
                    }
                },
                inputs: {
                    imageSize: "imageSize",
                    isAutoScrollEnabled: "isAutoScrollEnabled"
                },
                outputs: {
                    closeDialog$: "closeDialog$"
                },
                decls: 2,
                vars: 2,
                consts: [
                    ["class", "c-liveFeed__list", 3, "scrollPercentage", 4, "ngIf"],
                    ["class", "c-liveFeed__list c-liveFeed__list--placeholder", 4, "ngIf"],
                    [1, "c-liveFeed__list", 3, "scrollPercentage"],
                    ["feedContainer", ""],
                    ["class", "c-liveFeed__item", 3, "c-liveFeed__item--f2f", 4, "ngFor", "ngForOf"],
                    [1, "c-liveFeed__item"],
                    ["feedItem", ""],
                    [1, "c-liveFeed__itemFigure"],
                    [1, "o-icon", "c-liveFeed__itemIcon", 3, "inlineSVG"],
                    ["alt", "Deal asset image", "class", "c-liveFeed__itemImg", 3, "lazyLoad", "defaultImage", "errorImage", 4, "ngIf"],
                    [1, "c-liveFeed__itemInfo"],
                    [1, "c-liveFeed__itemLink", 3, "routerLink", "click"],
                    [1, "c-liveFeed__itemTitle"],
                    ["class", "c-liveFeed__itemExterior", 4, "ngIf"],
                    [1, "c-liveFeed__itemPrice"],
                    [1, "c-liveFeed__itemPriceTotal", 3, "currency", "price"],
                    ["class", "c-liveFeed__itemPriceDiscount", 4, "ngIf"],
                    [1, "c-liveFeed__itemWallets"],
                    ["rel", "nofollow noreferrer noopener", "target", "_blank", 1, "c-liveFeed__itemWallet", 3, "href"],
                    [1, "c-liveFeed__itemWalletsIcon"],
                    ["alt", "Deal asset image", 1, "c-liveFeed__itemImg", 3, "lazyLoad", "defaultImage", "errorImage"],
                    [1, "c-liveFeed__itemExterior"],
                    [4, "rxFor", "rxForOf"],
                    [1, "c-liveFeed__itemPriceDiscount"],
                    [1, "c-liveFeed__list", "c-liveFeed__list--placeholder"],
                    ["class", "c-liveFeed__item", 4, "rxFor", "rxForOf"]
                ],
                template: function(o, i) {
                    1 & o && (e.YNc(0, ce, 3, 1, "ul", 0), e.YNc(1, ve, 2, 2, "ul", 1)), 2 & o && (e.Q6J("ngIf", i.feedDeals.length), e.xp6(1), e.Q6J("ngIf", !i.feedDeals.length))
                },
                directives: [d.O5, W.e, d.sg, G.d, c.yS, q.u, n.Hw, a.z1, Q._0],
                pipes: [d.Ov, Y.U, R, X.H, U.q, d.i8, d.gd],
                styles: [':root{--ex-bg-color-hue: 210;--ex-bg-color-saturation: 0%;--ex-bg-color-lightness: 0%;--ex-bg-color--100: #3e4044;--ex-bg-color--200: #35373a;--ex-bg-color--400: #2a2c2e;--ex-bg-color--700: #1d1f20;--ex-bg-color--1000: #17191a;--ex-body-bg: var(--ex-bg-color--700);--ex-color-black: #000;--ex-color-white: #fff;--ex-color-gray: #848484;--ex-color-yellow: #fff200;--ex-color-orange: #ffb661;--ex-color-grapefruit: #fc7e73;--ex-color-orangeInt: #ff8761;--ex-color-darkOrange: #f08441;--ex-color-green: #8dd294;--ex-color-dark-green: #44a569;--ex-color-blue: #4daef8;--ex-color-navi: #fff200;--ex-color-maincast: #f44856;--ex-bg-blue: var(--ex-color-blue);--ex-bg-gray: var(--ex-bg-color--100);--ex-color-red: #ff6464;--ex-color-violet: #af7fff;--ex-color-violet-blue: #5957f7;--ex-color-violet--dark: #7056e1;--ex-color-purple: #8851f6;--ex-color-primary: var(--ex-color-white);--ex-color-secondary: var(--ex-color-gray);--ex-border-color: var(--ex-bg-color--400);--ex-font-family: "Montserrat", arial, sans-serif;--ex-font-family--currencies: "dmarket-currencies", arial, sans-serif;--ex-letter-spacing: .46px;--ex-radius--round: 100px;--ex-radius--primary: 2px;--ex-transition-primary: all .25s ease-in-out;--ex-transition-secondary: .15s ease-in-out;--ex-bg-color--backdrop: hsla(var(--ex-bg-color-hue), calc(6% + var(--ex-bg-color-saturation)), 10%, .7);--ex-field-bg-color: var(--ex-bg-color--400);--ex-field-color--disabled: var(--ex-color-secondary);--ex-field-size: 48px;--ex-container-padding: 24px;--ex-content-width: 1280px;--ex-header-height: 60px;--ex-header-open-height: 1px;--ex-header-border-size: 2px;--ex-headerBannner-height: 65px;--ex-banner-height: 70px;--ex-screen-height: calc(var(--vh, 1vh) * 100);--ex-screenBanner-height: calc(var(--ex-screen-height) - var(--ex-banner-height));--ex-asset-size: 124px;--ex-asset-img-size: 82px;--ex-asset-size--sm: 90px;--ex-assetInner-padding: 6px;--ex-asset-margin: 2px;--ex-asset-margin--sm: 2px;--ex-asset-radius: 0;--ex-side-width--small: 437px;--ex-side-width--fluid: calc(100vw - var(--ex-side-width--small) - 6px);--ex-side-width--user: var(--ex-side-width--small);--ex-side-width--market: var(--ex-side-width--fluid);--ex-line-gradient: var(--ex-line-gradient--user);--ex-side-display: inherit;--ex-user-side-display: flex;--ex-image-filters: saturate(1.2) brightness(1.2) contrast(1.2);--ex-tabs-spacing: 18px;--font-size-for-tab-title: 13px;--ex-top-nav-height: 1px;--ex-games-selector-height: 1px}@supports not (-webkit-overflow-scrolling: touch){:root{--ex-bg-orange: linear-gradient(253.3deg, #f0965d 0%, #f5d673 100%);--ex-bg-green: linear-gradient(253.3deg, #75cbbe 0%, #63ca7c 100%);--ex-bg-secondary: linear-gradient(253.3deg, #4b55f5 0%, #7556f5 100%);--ex-bg-grapefruit: linear-gradient(180deg, #fc7e73, #fc7e73), linear-gradient(0deg, #df7053, #df7053), #8dd294;--ex-bg-pink-orange: linear-gradient(223.23deg, #df678f 0%, #f7cc88 100%, #e9a2d2 100%);--ex-bg-dark-blue: linear-gradient(261.44deg, #203cd3 13.53%, #2684dc 139.3%)}}@supports (-webkit-overflow-scrolling: touch){:root{--ex-bg-orange: var(--ex-color-orange);--ex-bg-green: var(--ex-color-green);--ex-bg-secondary: var(--ex-color-violet--dark);--ex-bg-grapefruit: #fc7e73;--ex-bg-pink-orange: #e47b8e;--ex-bg-dark-blue: #203cd3}}@media (max-width: 1440px){:root{--ex-header-height: 70px}}@media (max-width: 1280px){:root{--ex-container-padding: 20px}}@media (max-width: 1112px){:root{--ex-tabs-spacing: 16px}}@media (max-width: 991px){:root{--ex-side-width--small: 340px;--ex-tabs-spacing: 10px}}@media (max-width: 1100px){:root{--ex-header-height: 65px}}@media (max-width: 767px){:root{--ex-header-height: 58px;--ex-container-padding: 16px}}:root{--scrollbar-track: var(--ex-bg-color--400);--scrollbar-thumb: var(--ex-color-secondary)}.c-liveFeed__list{scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-track);scrollbar-width:thin}.c-liveFeed__list::-webkit-scrollbar{width:5px;height:5px;border-radius:100px}.c-liveFeed__list::-webkit-scrollbar-track{border-radius:100px;-webkit-transition:var(--ex-transition-primary);transition:var(--ex-transition-primary);box-shadow:inset 0 0 50px var(--scrollbar-track)}.c-liveFeed__list::-webkit-scrollbar-thumb{border-radius:100px;-webkit-transition:var(--ex-transition-primary);transition:var(--ex-transition-primary);background-color:var(--scrollbar-thumb)}@keyframes pulse{0%{transform:scale(1);opacity:1}to{transform:scale(2);opacity:0}}:root{--ex-live-feed-base-size: 8px;--ex-live-feed-icon-size: 24px;--ex-live-feed-game-icon-size: 8px;--ex-live-feed-height: 164px;--ex-live-feed-header-height: 36px;--ex-live-feed-font-size: 10px;--ex-live-feed-bg: #2a2c2e;--ex-live-info-space: 3px;--ex-live-wallet-width: 30px;--ex-live-feed-wrap: nowrap;--ex-live-feed-max-title-size: 150px}.c-liveFeed__item{display:flex;align-items:center;padding:var(--ex-live-feed-base-size) 0;font-size:var(--ex-live-feed-font-size)}.c-liveFeed__item+.c-liveFeed__item{border-top:1px solid var(--ex-live-feed-bg)}.c-liveFeed__itemFigure{position:relative;flex-shrink:0;width:var(--ex-live-feed-icon-size);height:var(--ex-live-feed-icon-size);padding:2px;border-radius:2px;overflow:hidden;background-color:var(--ex-live-feed-bg)}.c-liveFeed__itemFigure--hidden{background-color:transparent}.c-liveFeed__itemImg{display:block;width:100%;height:100%;object-fit:cover}.c-liveFeed__itemIcon{--ex-icon-size: var(--ex-live-feed-game-icon-size);position:absolute;bottom:2px;left:2px;color:var(--ex-color-green)}.c-liveFeed__itemInfo{display:flex;align-items:center;flex-wrap:var(--ex-live-feed-wrap);padding-left:var(--ex-live-feed-base-size);white-space:var(--ex-live-feed-wrap)}.c-liveFeed__itemTitle,.c-liveFeed__itemExterior,.c-liveFeed__itemPriceTotal,.c-liveFeed__itemPriceDiscount{margin-right:var(--ex-live-info-space)}.c-liveFeed__itemTitle{max-width:var(--ex-live-feed-max-title-size);overflow:hidden;text-overflow:ellipsis;color:var(--ex-color-white)}.c-liveFeed__itemExterior{color:var(--ex-color-gray)}.c-liveFeed__itemExterior--st{color:var(--ex-color-orange)}.c-liveFeed__itemLink{display:flex;align-items:center}.c-liveFeed__itemLink:hover .c-liveFeed__itemTitle,.c-liveFeed__itemLink:hover .c-liveFeed__itemExterior{text-decoration:underline}.c-liveFeed__itemPrice{color:var(--ex-color-green)}.c-liveFeed__itemPriceTotal{max-width:100px;overflow:hidden;text-overflow:ellipsis}.c-liveFeed__itemPriceDiscount{color:var(--ex-color-white)}.c-liveFeed__itemWallets{--mat-icon-size: 10px;display:flex;align-items:center;color:var(--ex-color-gray)}.c-liveFeed__itemWalletsIcon{margin:0 2px}.c-liveFeed__itemWallet{width:var(--ex-live-wallet-width);overflow:hidden;text-overflow:ellipsis}.c-liveFeed__itemWallet:hover{text-decoration:underline}.c-liveFeed__item--f2f .c-liveFeed__itemPriceTotal,.c-liveFeed__item--f2f .c-liveFeed__itemIcon{color:var(--ex-color-blue)}.c-liveFeed__list{padding:0 var(--ex-live-feed-base-size);height:var(--ex-live-feed-height);overflow-y:auto;transition:var(--ex-transition-primary)}.c-liveFeed__list--placeholder{animation:fadeing 1.4s infinite}.c-liveFeed__list--placeholder .c-liveFeed__itemInfo{flex:1;margin-left:var(--ex-live-feed-base-size);margin-right:var(--ex-live-feed-base-size);height:calc(var(--ex-live-feed-font-size) + 2px);border-radius:2px;background-color:var(--ex-live-feed-bg)}\n'],
                encapsulation: 2,
                changeDetection: 0
            }), x = (0, _.gn)([(0, b.c)(), (0, _.w6)("design:paramtypes", [z, e.sBO, L.t, O.z, M, B.x0])], x);
            let H = (() => {
                class t {
                    constructor(i) {
                        this.dialogRef = i, this.imageSize = 40
                    }
                    closeDialog() {
                        this.dialogRef.close()
                    }
                }
                return t.\u0275fac = function(i) {
                    return new(i || t)(e.Y36(I.so))
                }, t.\u0275cmp = e.Xpm({
                    type: t,
                    selectors: [
                        ["live-feed-mobile"]
                    ],
                    decls: 1,
                    vars: 0,
                    consts: [
                        [4, "transloco"],
                        [1, "c-dialog", "c-dialogLiveFeed"],
                        [1, "c-dialog__inner"],
                        [1, "c-dialogHeader", "c-dialogHeader--back"],
                        [1, "c-dialogHeader__title"],
                        [1, "c-dialogHeader__back", 3, "click"],
                        [1, "c-dialogHeader__inner"],
                        ["aria-label", "Close", "type", "button", 1, "c-dialogHeader__close", 3, "click"],
                        [1, "c-dialog__body"],
                        [1, "c-dialogLiveFeed__content", 3, "imageSize", "closeDialog$"]
                    ],
                    template: function(i, l) {
                        1 & i && e.YNc(0, me, 15, 2, "ng-container", 0)
                    },
                    directives: [m.KI, n.Hw, x],
                    styles: [".c-dialogLiveFeed{--ex-live-feed-icon-size: 40px;--ex-live-feed-height: 100%;--ex-live-feed-base-size: 16px;--ex-live-feed-font-size: 14px;--ex-live-info-space: 5px;--ex-live-wallet-width: 50px;--ex-live-feed-game-icon-size: 12px;--ex-live-feed-wrap: wrap;--ex-live-feed-max-title-size: auto;--dialogHeaderBg: var(--ex-bg-color--700);background-color:var(--ex-bg-color--700)}.c-dialogLiveFeed__content{display:block;height:100%;padding-top:10px;margin:0 calc(0px - var(--dialogPadding))}\n"],
                    encapsulation: 2,
                    changeDetection: 0
                }), t
            })();
            var P = r(57144),
                A = r(79177),
                v = (() => {
                    return (t = v || (v = {})).Full = "Full", t.Minimized = "Minimized", v;
                    var t
                })();
            let p = class extends A.yh {
                constructor() {
                    super(function ue() {
                        return {
                            mode: v.Full
                        }
                    }())
                }
                toggleMode() {
                    const o = this.getValue().mode === v.Full ? v.Minimized : v.Full;
                    this.update({
                        mode: o
                    })
                }
            };
            p.\u0275fac = function(o) {
                return new(o || p)
            }, p.\u0275prov = e.Yz7({
                token: p,
                factory: p.\u0275fac,
                providedIn: "root"
            }), p = (0, _.gn)([(0, A.yC)({
                name: "desktop-live-feed"
            }), (0, _.w6)("design:paramtypes", [])], p);
            var Z = r(54004);
            let he = (() => {
                class t extends A.AE {
                    constructor(i) {
                        super(i), this.store = i, this.isMinimized$ = this.select().pipe((0, Z.U)(l => l.mode === v.Minimized)), this.isFull$ = this.select().pipe((0, Z.U)(l => l.mode === v.Full))
                    }
                }
                return t.\u0275fac = function(i) {
                    return new(i || t)(e.LFG(p))
                }, t.\u0275prov = e.Yz7({
                    token: t,
                    factory: t.\u0275fac,
                    providedIn: "root"
                }), t
            })();
            const _e = function() {
                return ["/top-txns"]
            };

            function Fe(t, o) {
                if (1 & t && (e.TgZ(0, "a", 9), e.ALo(1, "async"), e.ALo(2, "linkTranslate"), e._UZ(3, "i", 10), e._uU(4), e.qZA()), 2 & t) {
                    const i = e.oxw().$implicit,
                        l = e.oxw();
                    e.Q6J("routerLink", e.lcZ(1, 4, e.lcZ(2, 6, e.DdM(8, _e))))("target", l.isHomePage ? "_self" : "_blank"), e.xp6(3), e.Q6J("inlineSVG", "sprites/" + l.spriteName + "#icon-tx"), e.xp6(1), e.hij(" ", i("TOP Txns"), " ")
                }
            }

            function be(t, o) {
                if (1 & t && e._UZ(0, "live-feed", 11), 2 & t) {
                    const i = e.oxw(2);
                    e.Q6J("imageSize", i.imageSize)("isAutoScrollEnabled", i.isAutoScrollEnabled)
                }
            }

            function ye(t, o) {
                if (1 & t) {
                    const i = e.EpF();
                    e.ynx(0), e.TgZ(1, "div", 1), e.ALo(2, "async"), e.TgZ(3, "div", 2), e._UZ(4, "i", 3), e.TgZ(5, "span", 4), e._uU(6), e.qZA(), e.YNc(7, Fe, 5, 9, "a", 5), e.ALo(8, "async"), e.TgZ(9, "button", 6), e.NdJ("click", function() {
                        return e.CHM(i), e.oxw().toggleLiveFeed()
                    }), e._UZ(10, "i", 7), e.ALo(11, "async"), e.qZA(), e.qZA(), e.YNc(12, be, 1, 2, "live-feed", 8), e.ALo(13, "async"), e.qZA(), e.BQk()
                }
                if (2 & t) {
                    const i = o.$implicit,
                        l = e.oxw();
                    e.xp6(1), e.ekj("c-liveFeed--closed", e.lcZ(2, 6, l.isMinimized$)), e.xp6(5), e.Oqu(i("Live Feed")), e.xp6(1), e.Q6J("ngIf", !e.lcZ(8, 8, l.isMinimized$)), e.xp6(3), e.Q6J("inlineSVG", e.lcZ(11, 10, l.toggleModeIconPath$)), e.xp6(2), e.Q6J("ngIf", e.lcZ(13, 12, l.isFull$))
                }
            }
            let Le = (() => {
                class t {
                    constructor(i, l, s) {
                        this.desktopLiveFeedStore = i, this.liveFeedDesktopQuery = l, this.cdr = s, this.spriteName = P.KY, this.isFull$ = this.liveFeedDesktopQuery.isFull$, this.isMinimized$ = this.liveFeedDesktopQuery.isMinimized$, this.toggleModeIconPath$ = this.isFull$.pipe((0, Z.U)(y => "sprites/" + P.KY + "#icon-arrow-" + (y ? "down" : "up"))), this.imageSize = 24, this.isAutoScrollEnabled = !0, this.isHomePage = !1
                    }
                    toggleLiveFeed() {
                        this.desktopLiveFeedStore.toggleMode(), this.cdr.markForCheck()
                    }
                }
                return t.\u0275fac = function(i) {
                    return new(i || t)(e.Y36(p), e.Y36(he), e.Y36(e.sBO))
                }, t.\u0275cmp = e.Xpm({
                    type: t,
                    selectors: [
                        ["live-feed-desktop"]
                    ],
                    inputs: {
                        isAutoScrollEnabled: "isAutoScrollEnabled",
                        isHomePage: "isHomePage"
                    },
                    decls: 1,
                    vars: 0,
                    consts: [
                        [4, "transloco"],
                        [1, "c-liveFeed"],
                        [1, "c-liveFeed__header"],
                        [1, "c-liveFeed__headerIcon"],
                        [1, "c-liveFeed__title"],
                        ["class", "c-liveFeed__title", 3, "routerLink", "target", 4, "ngIf"],
                        ["aria-label", "open/close selection area", "mat-fab", "", 1, "c-liveFeed__toggleBtn", 3, "click"],
                        [1, "o-icon", 3, "inlineSVG"],
                        ["class", "c-liveFeed__content", 3, "imageSize", "isAutoScrollEnabled", 4, "ngIf"],
                        [1, "c-liveFeed__title", 3, "routerLink", "target"],
                        [1, "c-liveFeed__titleIco", 3, "inlineSVG"],
                        [1, "c-liveFeed__content", 3, "imageSize", "isAutoScrollEnabled"]
                    ],
                    template: function(i, l) {
                        1 & i && e.YNc(0, ye, 14, 14, "ng-container", 0)
                    },
                    directives: [m.KI, d.O5, G.d, c.yS, x],
                    pipes: [d.Ov, Y.U],
                    styles: [":root{--ex-live-feed-base-size: 8px;--ex-live-feed-header-height: 36px}.c-liveFeed{position:absolute;right:0;bottom:var(--ex-live-feed-base-size);z-index:11;min-width:320px;max-width:400px;height:200px;background-color:var(--ex-bg-color--700);transition:var(--ex-transition-primary);overflow:hidden}.c-liveFeed__header{display:flex;align-items:center;height:var(--ex-live-feed-header-height);padding:var(--ex-live-feed-base-size);overflow:hidden}.c-liveFeed__headerIcon{display:block;width:var(--ex-live-feed-base-size);height:var(--ex-live-feed-base-size);margin:0 var(--ex-live-feed-base-size);border-radius:50%;background-color:var(--ex-color-red)}.c-liveFeed__title{display:flex;font-size:12px;color:var(--ex-color-white);margin-right:auto}.c-liveFeed__titleIco{display:inline-block;width:14px;height:14px;margin-right:4px;color:var(--ex-color-green)}.c-liveFeed__toggleBtn{--ex-icon-size: 18px;--ex-mat-button-size: 20px;--ex-mat-button-background: var(--ex-bg-color--400);margin-left:15px!important}.c-liveFeed__toggleBtn.mat-fab .mat-button-wrapper{line-height:1}.c-liveFeed--closed{min-width:150px;height:var(--ex-live-feed-header-height)}.c-liveFeed--closed .c-liveFeed__list{opacity:0;visibility:hidden}\n"],
                    encapsulation: 2,
                    changeDetection: 0
                }), t
            })();

            function Se(t, o) {
                if (1 & t) {
                    const i = e.EpF();
                    e.ynx(0), e.TgZ(1, "button", 1), e.NdJ("click", function() {
                        return e.CHM(i), e.oxw().openLiveFeed()
                    }), e.TgZ(2, "span", 2), e._uU(3), e.qZA(), e.TgZ(4, "span", 3), e._uU(5), e.qZA(), e.TgZ(6, "mat-icon", 4), e._uU(7, "chevron_right"), e.qZA(), e.qZA(), e.BQk()
                }
                if (2 & t) {
                    const i = o.$implicit;
                    e.xp6(3), e.Oqu(i("Live")), e.xp6(2), e.Oqu(i("Feed"))
                }
            }
            let ke = (() => {
                    class t {
                        constructor(i, l) {
                            this.dialog = i, this.cdr = l
                        }
                        ngOnInit() {}
                        openLiveFeed() {
                            this.dialog.open(H)
                        }
                    }
                    return t.\u0275fac = function(i) {
                        return new(i || t)(e.Y36(I.uw), e.Y36(e.sBO))
                    }, t.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["live-feed-button"]
                        ],
                        decls: 1,
                        vars: 0,
                        consts: [
                            [4, "transloco"],
                            [1, "c-liveFeedButton", 3, "click"],
                            [1, "c-liveFeedButton__badge"],
                            [1, "c-liveFeedButton__title"],
                            [1, "c-liveFeedButton__icon"]
                        ],
                        template: function(i, l) {
                            1 & i && e.YNc(0, Se, 8, 2, "ng-container", 0)
                        },
                        directives: [m.KI, n.Hw],
                        styles: [".c-liveFeedButton[_ngcontent-%COMP%]{display:flex;align-items:center;padding:10px 0 10px 10px;color:var(--ex-color-white)}.c-liveFeedButton__badge[_ngcontent-%COMP%]{padding:4px 2px;font-size:8px;line-height:1;background-color:var(--ex-color-red);border-radius:1px;letter-spacing:var(--ex-letter-spacing)}.c-liveFeedButton__title[_ngcontent-%COMP%]{margin-left:5px;font-size:11px;letter-spacing:var(--ex-letter-spacing)}.c-liveFeedButton__icon[_ngcontent-%COMP%]{--mat-icon-size: 18px;transform:translate(-2px)}"],
                        changeDetection: 0
                    }), t
                })(),
                Ae = (() => {
                    class t {
                        static get entryLiveFeedMobileComponent() {
                            return H
                        }
                        static get entryLiveFeedDesktopComponent() {
                            return Le
                        }
                        static get entryLiveFeedButtonComponent() {
                            return ke
                        }
                    }
                    return t.\u0275fac = function(i) {
                        return new(i || t)
                    }, t.\u0275mod = e.oAB({
                        type: t
                    }), t.\u0275inj = e.cJS({
                        imports: [
                            [d.ez, c.Bz, h.A, m.y4, g.m, n.Ps, a.mZ, Q.KD]
                        ]
                    }), t
                })()
        }
    }
]);