"use strict";
(self.webpackChunkdmarket = self.webpackChunkdmarket || []).push([
    [8592], {
        20732: (g, l, t) => {
            function a(r, s) {
                return {
                    offset: (r - 1) * s,
                    limit: s
                }
            }
            t.d(l, {
                k: () => a
            })
        },
        11634: (g, l, t) => {
            t.d(l, {
                OL: () => s,
                YY: () => o,
                xv: () => a,
                yQ: () => r
            });
            var o = (() => {
                    return (n = o || (o = {})).RecaptchaRequired = "RecaptchaRequired", n.WrongRecaptcha = "WrongRecaptcha", n.BadCredentials = "BadCredentials", n.EmailIsNotVerified = "EmailIsNotVerified", n.Banned = "Banned", n.AttemptsLimitExceeded = "AttemptsLimitExceeded", o;
                    var n
                })(),
                a = (() => {
                    return (n = a || (a = {})).EmailIsNotVerified = "verification", n.Banned = "ban", a;
                    var n
                })(),
                r = (() => {
                    return (n = r || (r = {})).BadCredentials = "credentials", n.AttemptsLimitExceeded = "attemptsLimit", r;
                    var n
                })(),
                s = (() => {
                    return (n = s || (s = {})).Start = "start", n.Login = "login", n.Tfa = "tfa", n.IPConfirmationRequired = "IPConfirmationRequired", n.MetamaskAuth = "metaMaskAuth", s;
                    var n
                })()
        },
        88230: (g, l, t) => {
            t.d(l, {
                M: () => a
            });
            const a = () => t.e(8199).then(t.bind(t, 78199)).then(r => ({
                module: r.KYCStatusModule,
                component: r.KYCStatusModule.enryComponent
            }))
        },
        58079: (g, l, t) => {
            t.d(l, {
                $5: () => r,
                RJ: () => n,
                UD: () => s,
                kB: () => a,
                ox: () => o
            });
            const o = {
                    code: "TokenizationTimeoutError",
                    message: "TokenizationTimeoutError"
                },
                a = 600,
                r = 900,
                s = 5e3,
                n = 600
        },
        57453: (g, l, t) => {
            t.d(l, {
                b: () => O
            });
            var o = t(49089),
                a = t(77579),
                r = t(50727),
                s = t(17445),
                n = t(95698),
                e = t(18505),
                c = t(63900),
                d = t(54004),
                T = t(22529),
                u = t(39300),
                P = t(44868),
                f = t(58079),
                v = t(94650),
                A = t(80529);
            let O = (() => {
                class I extends o.s {
                    constructor(i, h) {
                        super(o.D.MarketPlaceApi), this.http = i, this.paymentsService = h, this.newTokenizedMethod$ = new a.x, this.checkTokenizationSubscription = r.w0.EMPTY
                    }
                    createTokenization(i) {
                        this.createTokenizationRequest(i).pipe((0, n.q)(1), (0, e.b)(h => this.checkTokenizationChangeStatus(h.TokenizationID, ""))).subscribe(h => this.paymentsService.processRedirectUrl(h.RedirectURL))
                    }
                    changeTokenization(i, h) {
                        this.editTokenizationRequest(h).pipe((0, n.q)(1), (0, e.b)(_ => this.checkTokenizationChangeStatus(h, i))).subscribe(_ => this.paymentsService.processRedirectUrl(_.RedirectURL))
                    }
                    checkTokenizationChangeStatus(i, h) {
                        this.checkTokenizationSubscription = (0, s.F)(f.UD).pipe((0, c.w)(() => this.checkTokenization(i)), (0, d.U)(_ => _.Title.toLowerCase()), (0, T.o)(_ => _ === h, !0), (0, u.h)(_ => _ !== h)).subscribe(_ => {
                            this.newTokenizedMethod$.next(_), this.paymentsService.closeWindowReference()
                        })
                    }
                    tokenizationStatusUnsubscribe() {
                        this.checkTokenizationSubscription.unsubscribe()
                    }
                    createTokenizationRequest(i) {
                        return this.http.post(this.rootPath + "/payment/transaction/tokenization", {
                            PaymentMethod: i,
                            Tokenization: []
                        })
                    }
                    editTokenizationRequest(i) {
                        return this.http.patch(this.rootPath + "/payment/transaction/tokenization/" + i, {
                            TokenizationID: i
                        })
                    }
                    checkTokenization(i) {
                        return this.http.get(this.rootPath + "/payment/transaction/tokenization/" + i)
                    }
                    setTokenizationToken(i, h, _) {
                        return this.http.put(this.rootPath + "/payment/transaction/tokenization/" + i, {
                            Token: h,
                            Mask: _
                        })
                    }
                }
                return I.\u0275fac = function(i) {
                    return new(i || I)(v.LFG(A.eN), v.LFG(P.cR))
                }, I.\u0275prov = v.Yz7({
                    token: I,
                    factory: I.\u0275fac,
                    providedIn: "root"
                }), I
            })()
        },
        6371: (g, l, t) => {
            t.d(l, {
                h: () => s
            });
            var o = t(49089),
                a = t(94650),
                r = t(80529);
            let s = (() => {
                class n extends o.s {
                    constructor(c) {
                        super(o.D.Exchange), this.http = c
                    }
                    depositAssets(c, d, T) {
                        return this.http.post(`${this.rootPath}/deposit-assets`, {
                            assets: c,
                            flow: d,
                            requestId: T
                        })
                    }
                    getActiveDeposits() {
                        return this.http.get(`${this.rootPath}/deposit-assets/transfer/active`)
                    }
                    getDepositDetails(c) {
                        return this.http.get(`${this.rootPath}/deposit-assets/transfer/${c}`)
                    }
                }
                return n.\u0275fac = function(c) {
                    return new(c || n)(a.LFG(r.eN))
                }, n.\u0275prov = a.Yz7({
                    token: n,
                    factory: n.\u0275fac,
                    providedIn: "root"
                }), n
            })()
        },
        73e3: (g, l, t) => {
            t.d(l, {
                I: () => a
            });
            const a = () => Promise.all([t.e(8592), t.e(1781)]).then(t.bind(t, 79075)).then(r => ({
                module: r.AddTradeUrlModule,
                component: r.AddTradeUrlModule.enryComponent
            }))
        },
        1927: (g, l, t) => {
            t.d(l, {
                YL: () => r,
                fg: () => n,
                ty: () => s
            });
            var a = t(60914).r.TransferErrorEnum,
                r = (() => {
                    return (e = r || (r = {})).Withdraw = "withdraw", e.Sell = "sell", r;
                    var e
                })(),
                s = (() => {
                    return (e = s || (s = {}))[e.ServiceError = 503] = "ServiceError", s;
                    var e
                })();
            const n = { ...a,
                ...s
            }
        },
        67508: (g, l, t) => {
            t.d(l, {
                LQ: () => a,
                _0: () => n
            });
            var o = (() => {
                return (e = o || (o = {})).NotPainted = "not painted", e.FactoryNew = "factory new", e.MinimalWear = "minimal wear", e.FieldTested = "field-tested", e.WellWorn = "well-worn", e.BattleScarred = "battle-scarred", o;
                var e
            })();
            const a = {
                    [o.NotPainted]: {
                        min: 0,
                        max: 0
                    },
                    [o.FactoryNew]: {
                        min: 0,
                        max: .07
                    },
                    [o.MinimalWear]: {
                        min: .07,
                        max: .15
                    },
                    [o.FieldTested]: {
                        min: .15,
                        max: .37
                    },
                    [o.WellWorn]: {
                        min: .37,
                        max: .44
                    },
                    [o.BattleScarred]: {
                        min: .44,
                        max: 1
                    }
                },
                r = (e, c) => e.split(";").map((d, T) => ({
                    title: d,
                    value: c + "-" + T
                })),
                s = {
                    [o.NotPainted]: [],
                    [o.FactoryNew]: "FN",
                    [o.MinimalWear]: "MW",
                    [o.FieldTested]: "FT",
                    [o.WellWorn]: "WW",
                    [o.BattleScarred]: "BS"
                },
                n = {
                    [o.NotPainted]: [],
                    [o.FactoryNew]: r("0 - 0.01;0.01 - 0.02;0.02 - 0.03;0.03 - 0.04;0.04 - 0.05;0.05 - 0.06;0.06 - 0.07", s[o.FactoryNew]),
                    [o.MinimalWear]: r("0.07 - 0.08;0.08 - 0.09;0.09 - 0.1;0.1 - 0.11;0.11 - 0.15", s[o.MinimalWear]),
                    [o.FieldTested]: r("0.15 - 0.18;0.18 - 0.21;0.21 - 0.24;0.24 - 0.27;0.27 - 0.38", s[o.FieldTested]),
                    [o.WellWorn]: r("0.38 - 0.39;0.39 - 0.4;0.4 - 0.41;0.41 - 0.42;0.42 - 0.45", s[o.WellWorn]),
                    [o.BattleScarred]: r("0.45 - 0.5;0.5 - 0.63;0.63 - 0.76;0.76 - 0.8", s[o.BattleScarred])
                }
        },
        90807: (g, l, t) => {
            t.d(l, {
                p: () => c
            });
            var o = t(49089),
                a = t(61135),
                r = t(32355),
                s = t(94650),
                n = t(80529);
            let c = (() => {
                class d extends o.s {
                    constructor(u, P) {
                        super(o.D.Exchange), this.http = u, this.userLikeTradersAnalytics = P, this.appraisedTarget$ = new a.X(null)
                    }
                    get headers() {
                        return {
                            headers: this.userLikeTradersAnalytics.getHeader
                        }
                    }
                    getConfig(u) {
                        return this.http.post(`${this.rootPath}/target/constructor`, {
                            attributes: u
                        })
                    }
                    getAppraiseTargets(u, P) {
                        return this.http.post(`${this.rootPath}/appraise/targets`, {
                            gameId: u,
                            objects: [{
                                title: P
                            }]
                        }, this.headers)
                    }
                    parseConfirmPattern(u) {
                        return u.split("::")
                    }
                    joinConfirmPattern(u) {
                        return u.join("::")
                    }
                }
                return d.\u0275fac = function(u) {
                    return new(u || d)(s.LFG(n.eN), s.LFG(r.J))
                }, d.\u0275prov = s.Yz7({
                    token: d,
                    factory: d.\u0275fac,
                    providedIn: "root"
                }), d
            })()
        },
        5734: (g, l, t) => {
            t.d(l, {
                r: () => n
            });
            var o = t(49089),
                a = t(77579),
                r = t(94650),
                s = t(80529);
            let n = (() => {
                class e extends o.s {
                    constructor(d) {
                        super(o.D.Target), this.http = d, this.targetsUpdateListener$ = new a.x
                    }
                    getTimeLimits(d) {
                        return this.http.post(`${this.rootPath}/time-limits`, d)
                    }
                }
                return e.\u0275fac = function(d) {
                    return new(d || e)(r.LFG(s.eN))
                }, e.\u0275prov = r.Yz7({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                }), e
            })()
        },
        71380: (g, l, t) => {
            t.d(l, {
                i: () => M
            });
            var o = t(36895),
                s = (t(48249), t(49514), t(30430)),
                n = t(94650);
            t(93548), t(85493), t(75028);
            var f = t(89482);
            t(69835), t(53007), t(5408);
            let M = (() => {
                class i {}
                return i.\u0275fac = function(_) {
                    return new(_ || i)
                }, i.\u0275mod = n.oAB({
                    type: i
                }), i.\u0275inj = n.cJS({
                    imports: [
                        [o.ez, s.y4, f.m, f.m]
                    ]
                }), i
            })()
        },
        77217: (g, l, t) => {
            t.d(l, {
                p: () => r
            });
            var o = t(24756),
                a = t(94650);
            let r = (() => {
                class s {
                    constructor(e) {
                        this.cdr = e, this.closeEmit = new a.vpe
                    }
                    get assetData() {
                        return this.assetDataRaw
                    }
                    set assetData(e) {
                        this.assetDataRaw = e, this.isMarketInventory = e.viewParent === o.gO.marketInventory, this.cdr.markForCheck()
                    }
                }
                return s.\u0275fac = function(e) {
                    return new(e || s)(a.Y36(a.sBO))
                }, s.\u0275dir = a.lG2({
                    type: s,
                    inputs: {
                        assetData: "assetData",
                        additionalParams: "additionalParams",
                        shareLinkAnalyticsType: "shareLinkAnalyticsType"
                    }
                }), s
            })()
        },
        95663: (g, l, t) => {
            t.d(l, {
                FL: () => d,
                db: () => P,
                gs: () => c,
                kp: () => D,
                l: () => f
            });
            var o = t(43783),
                a = t(10711),
                r = t(24756),
                s = t(64166),
                n = t(98584),
                e = o.x.MetadataStateEnum;
            const c = {
                    "1st": "1th Max | Marble Fade",
                    "2nd": "2nd Max | Marble Fade",
                    "3rd": "3th Max | Marble Fade",
                    "4th": "4th Max | Marble Fade",
                    "5th": "5th Max | Marble Fade",
                    "6th": "6th Max | Marble Fade",
                    "7th": "7th Max | Marble Fade",
                    "8th": "8th Max | Marble Fade",
                    "9th": "9th Max | Marble Fade",
                    "10th": "10th Max | Marble Fade",
                    "Max fake": "Max fake | Marble Fade",
                    FFI: "FFI | Marble Fade",
                    "Blue Gem": "Blue Gem | Case Hardened",
                    "Tier 1": "Tier 1 | Case Hardened",
                    "Tier 2": "Tier 2 | Case Hardened",
                    "Tier 3": "Tier 3 | Case Hardened",
                    "Tier 4": "Tier 4 | Case Hardened"
                },
                d = [r.Ch.PhaseTitle, r.Ch.PaintSeed, r.Ch.FadePercent, r.Ch.RarePattern, a.V.ExtraDocEnum.ItemType, a.V.ExtraDocEnum.ItemRarity, a.V.ExtraDocEnum.ContractAddress, a.V.ExtraDocEnum.InGameAssetID, a.V.ExtraDocEnum.EmissionSerial, a.V.ExtraDocEnum.EmissionTotal, a.V.ExtraDocEnum.Videos, a.V.ExtraDocEnum.Subscribers, a.V.ExtraDocEnum.Growth, a.V.ExtraDocEnum.Hero, a.V.ExtraDocEnum.PackName, a.V.ExtraDocEnum.Rarity, a.V.ExtraDocEnum.SerialNumber, a.V.ExtraDocEnum.Ability, a.V.ExtraDocEnum.BlockchainTitle, a.V.ExtraDocEnum.MetadataState, a.V.ExtraDocEnum.SagaAddress, a.V.ExtraDocEnum.NftOwner];
            var T = (() => {
                return (E = T || (T = {})).EthereumGameType = "ethereumGameType", E.NonEthereumGameType = "nonEthereumGameType", E.SagaWalletExists = "sagaWalletExists", T;
                var E
            })();
            const u = {
                    CapitalLetter: function i(E) {
                        return E[0].toUpperCase() + E.slice(1)
                    },
                    AllWordsCapitalLetter: function h(E) {
                        return E.replace(/(?:^|\s)\S/g, y => y.toUpperCase())
                    },
                    UpperCase: function O(E) {
                        return E.toUpperCase()
                    },
                    BlockChainLink: function v(E) {
                        return `<a target="_blank" class="c-assetPreviewParam__value--link"  rel="nofollow noreferrer noopener" href="${s.N.blockChainExplorerRootUrl}/accounts/${E}/transactions">${E}</a>`
                    },
                    EtherscanLink: function A(E) {
                        return `<a target="_blank" class="c-assetPreviewParam__value--link"  rel="nofollow noreferrer noopener" href="https://etherscan.io/address/${E}">${function _(E){return E.slice(0,6)+"..."+E.slice(E.length-4)}(E)}</a>`
                    },
                    Percentage: function I(E) {
                        return E + "%"
                    },
                    RarePattern: function M(E) {
                        return c[E] ? c[E] : ""
                    }
                },
                P = {
                    [a.V.ExtraDocEnum.ItemType]: {
                        title: (0, n.J)("Item type"),
                        transforms: [u.CapitalLetter]
                    },
                    [a.V.ExtraDocEnum.Videos]: {
                        title: (0, n.J)("Videos"),
                        icon: "icon-videos.svg",
                        transforms: []
                    },
                    [a.V.ExtraDocEnum.Subscribers]: {
                        title: (0, n.J)("Subscribers"),
                        icon: "icon-subscribers.svg",
                        transforms: []
                    },
                    [a.V.ExtraDocEnum.Growth]: {
                        title: (0, n.J)("Growth"),
                        icon: "icon-growth.svg",
                        transforms: []
                    },
                    [a.V.ExtraDocEnum.Hero]: {
                        title: (0, n.J)("Hero"),
                        transforms: [u.AllWordsCapitalLetter]
                    },
                    [a.V.ExtraDocEnum.Rarity]: {
                        title: (0, n.J)("Rarity"),
                        transforms: [u.CapitalLetter]
                    },
                    [a.V.ExtraDocEnum.SerialNumber]: {
                        title: (0, n.J)("Serial number"),
                        transforms: []
                    },
                    [a.V.ExtraDocEnum.Ability]: {
                        title: (0, n.J)("Ability"),
                        transforms: [u.CapitalLetter]
                    },
                    [a.V.ExtraDocEnum.SagaAddress]: {
                        fallbackKey: r.Ch.OwnersBlockchainId,
                        title: (0, n.J)("Owner\u2019s Blockchain ID"),
                        canBeCopied: !0,
                        canBeCopiedValue: null,
                        transforms: [u.BlockChainLink],
                        conditionsToHide: [T.EthereumGameType]
                    },
                    [r.Ch.PhaseTitle]: {
                        title: (0, n.J)("Phase"),
                        transforms: []
                    },
                    [r.Ch.FadePercent]: {
                        title: (0, n.J)("Fade"),
                        transforms: [u.Percentage]
                    },
                    [r.Ch.RarePattern]: {
                        title: (0, n.J)("Rare pattern"),
                        transforms: [u.RarePattern]
                    },
                    [r.Ch.PaintSeed]: {
                        title: (0, n.J)("Pattern"),
                        transforms: []
                    },
                    [a.V.ExtraDocEnum.PackName]: {
                        title: (0, n.J)("Set name"),
                        transforms: [u.CapitalLetter]
                    },
                    [a.V.ExtraDocEnum.ItemRarity]: {
                        title: (0, n.J)("Rarity"),
                        transforms: [u.CapitalLetter]
                    },
                    [a.V.ExtraDocEnum.EmissionSerial]: {
                        title: (0, n.J)("Serial number"),
                        transforms: [],
                        conditionsToHide: [T.EthereumGameType]
                    },
                    [a.V.ExtraDocEnum.EmissionTotal]: {
                        title: (0, n.J)("Total issued"),
                        transforms: []
                    },
                    [a.V.ExtraDocEnum.MetadataState]: {
                        title: (0, n.J)("Metadata"),
                        titleTooltip: E => E === e.Immutable ? (0, n.J)("This item's metadata was permanently locked and stored in decentralized file storage") : E,
                        value: E => E === e.Immutable ? (0, n.J)("Frozen") : E,
                        transforms: []
                    },
                    [a.V.ExtraDocEnum.ContractAddress]: {
                        title: (0, n.J)("Contract address"),
                        transforms: [u.EtherscanLink]
                    },
                    [a.V.ExtraDocEnum.InGameAssetID]: {
                        title: (0, n.J)("Token ID"),
                        transforms: [],
                        conditionsToHide: [T.NonEthereumGameType]
                    },
                    [a.V.ExtraDocEnum.BlockchainTitle]: {
                        title: (0, n.J)("Blockchain"),
                        transforms: []
                    },
                    [a.V.ExtraDocEnum.NftOwner]: {
                        title: (0, n.J)("Owner"),
                        canBeCopied: !0,
                        canBeCopiedValue: null,
                        transforms: []
                    }
                };

            function f(E, y) {
                return y.forEach(L => E = L(E)), E
            }

            function D(E = [], y) {
                if (!E.length) return !1;
                const L = {
                    [T.EthereumGameType]: y.gameType === a.V.GameTypeEnum.Ethereum,
                    [T.NonEthereumGameType]: y.gameType !== a.V.GameTypeEnum.Ethereum,
                    [T.SagaWalletExists]: !!y.extra.sagaAddress
                };
                return E.some(B => L[B])
            }
        },
        98791: (g, l, t) => {
            t.d(l, {
                Q: () => U,
                i: () => w
            });
            var o = t(10711),
                a = t(24756),
                r = t(77217),
                s = t(77049),
                n = t(96225),
                e = t(94650),
                c = t(36895),
                d = t(30430),
                T = t(27820),
                u = t(49514);
            const P = ["card"],
                f = ["description"];

            function v(m, C) {}

            function A(m, C) {
                1 & m && e.YNc(0, v, 0, 0, "ng-template")
            }
            const O = function(m, C) {
                return {
                    originId: m,
                    itemId: C
                }
            };

            function I(m, C) {
                if (1 & m && e._UZ(0, "i", 7), 2 & m) {
                    const p = e.oxw(3);
                    e.ekj("o-blur", p.isMarketInventory), e.Q6J("assetCardTooltipOrigin", e.WLB(3, O, p.tooltipKeyEnum.AssetLocationBadgeMarket, p.assetData.asset.itemId))
                }
            }

            function M(m, C) {
                if (1 & m && e._UZ(0, "i", 11), 2 & m) {
                    const p = e.oxw(4);
                    e.ekj("o-blur", p.isMarketInventory), e.Q6J("assetCardTooltipOrigin", e.WLB(3, O, p.tooltipKeyEnum.AssetLocationBadgeSteam, p.assetData.asset.itemId))
                }
            }

            function i(m, C) {
                1 & m && e._UZ(0, "i", 12)
            }

            function h(m, C) {
                1 & m && e._UZ(0, "i", 13)
            }

            function _(m, C) {
                if (1 & m && (e.ynx(0), e.YNc(1, M, 1, 6, "i", 8), e.YNc(2, i, 1, 0, "i", 9), e.YNc(3, h, 1, 0, "i", 10), e.BQk()), 2 & m) {
                    const p = e.oxw(3);
                    e.xp6(1), e.Q6J("ngIf", p.assetData.asset.gameType === p.GameTypeEnum.Steam), e.xp6(1), e.Q6J("ngIf", p.assetData.asset.gameType === p.GameTypeEnum.Blockchain && p.assetData.asset.gameId !== p.EthWithdrawGame), e.xp6(1), e.Q6J("ngIf", p.assetData.asset.gameType === p.GameTypeEnum.Ethereum || p.assetData.asset.gameId === p.EthWithdrawGame)
                }
            }

            function D(m, C) {
                if (1 & m && (e.ynx(0), e.YNc(1, I, 1, 6, "i", 5), e.YNc(2, _, 4, 3, "ng-container", 6), e.BQk()), 2 & m) {
                    const p = e.oxw(2);
                    e.xp6(1), e.Q6J("ngIf", p.assetData.asset.inMarket), e.xp6(1), e.Q6J("ngIf", !p.assetData.asset.inMarket)
                }
            }

            function E(m, C) {
                1 & m && e.YNc(0, D, 3, 2, "ng-container", 4)
            }

            function y(m, C) {
                if (1 & m && (e.ynx(0), e._uU(1), e.BQk()), 2 & m) {
                    const p = e.oxw().$implicit;
                    e.xp6(1), e.Oqu(p("Mythical SAGA Blockchain"))
                }
            }

            function L(m, C) {
                if (1 & m && (e.ynx(0), e.TgZ(1, "div", 14), e.TgZ(2, "strong", 15), e._uU(3), e.qZA(), e.TgZ(4, "span", 16), e.YNc(5, y, 2, 1, "ng-container", 17), e.qZA(), e.qZA(), e.BQk()), 2 & m) {
                    const p = C.$implicit,
                        R = e.oxw(2),
                        x = e.MAs(6);
                    e.xp6(3), e.Oqu(p("Item location:")), e.xp6(2), e.Q6J("ngIf", R.assetData.asset.inMarket)("ngIfElse", x)
                }
            }

            function B(m, C) {
                1 & m && e.YNc(0, L, 6, 3, "ng-container", 4)
            }

            function S(m, C) {
                if (1 & m && (e.ynx(0), e._uU(1), e.BQk()), 2 & m) {
                    const p = e.oxw().$implicit;
                    e.xp6(1), e.hij(" ", p("Game"), "")
                }
            }

            function W(m, C) {
                if (1 & m && (e.ynx(0), e._uU(1), e.BQk()), 2 & m) {
                    const p = e.oxw().$implicit;
                    e.xp6(1), e.hij(" ", p("Ethereum"), "")
                }
            }

            function k(m, C) {
                if (1 & m && (e.ynx(0), e._uU(1), e.BQk()), 2 & m) {
                    const p = e.oxw().$implicit;
                    e.xp6(1), e.Oqu(p("Steam"))
                }
            }

            function F(m, C) {
                if (1 & m && (e.ynx(0), e._uU(1), e.BQk()), 2 & m) {
                    const p = e.oxw().$implicit;
                    e.xp6(1), e.Oqu(p("User\u2019s ETH wallet"))
                }
            }

            function K(m, C) {
                if (1 & m && (e.ynx(0), e.YNc(1, S, 2, 1, "ng-container", 6), e.YNc(2, W, 2, 1, "ng-container", 6), e.YNc(3, k, 2, 1, "ng-container", 6), e.YNc(4, F, 2, 1, "ng-container", 6), e.BQk()), 2 & m) {
                    const p = e.oxw(2);
                    e.xp6(1), e.Q6J("ngIf", p.assetData.asset.gameType === p.GameTypeEnum.Blockchain && p.assetData.asset.gameId !== p.EthWithdrawGame), e.xp6(1), e.Q6J("ngIf", p.assetData.asset.gameType === p.GameTypeEnum.Blockchain && p.assetData.asset.gameId === p.EthWithdrawGame), e.xp6(1), e.Q6J("ngIf", p.assetData.asset.gameType === p.GameTypeEnum.Steam), e.xp6(1), e.Q6J("ngIf", p.assetData.asset.gameType === p.GameTypeEnum.Ethereum)
                }
            }

            function N(m, C) {
                1 & m && e.YNc(0, K, 5, 4, "ng-container", 4)
            }
            const U = {
                componentView: a.nV.card
            };
            let w = (() => {
                class m extends r.p {
                    constructor() {
                        super(...arguments), this.additionalParams = U, this.tooltipKeyEnum = s.tL, this.EthWithdrawGame = n.ZX, this.GameTypeEnum = o.V.GameTypeEnum
                    }
                }
                return m.\u0275fac = function() {
                    let C;
                    return function(R) {
                        return (C || (C = e.n5z(m)))(R || m)
                    }
                }(), m.\u0275cmp = e.Xpm({
                    type: m,
                    selectors: [
                        ["asset-location-badge"]
                    ],
                    viewQuery: function(p, R) {
                        if (1 & p && (e.Gf(P, 7), e.Gf(f, 7)), 2 & p) {
                            let x;
                            e.iGM(x = e.CRH()) && (R.card = x.first), e.iGM(x = e.CRH()) && (R.description = x.first)
                        }
                    },
                    features: [e.qOj],
                    decls: 7,
                    vars: 1,
                    consts: [
                        [4, "ngTemplateOutlet"],
                        ["card", ""],
                        ["description", ""],
                        ["assetNotInMarket", ""],
                        [4, "transloco"],
                        ["class", "c-asset__dmarketIcon o-icon", "inlineSVG", "icon-logo.svg", 3, "assetCardTooltipOrigin", "o-blur", 4, "ngIf"],
                        [4, "ngIf"],
                        ["inlineSVG", "icon-logo.svg", 1, "c-asset__dmarketIcon", "o-icon", 3, "assetCardTooltipOrigin"],
                        ["class", "c-asset__locationIcon o-icon", "inlineSVG", "icon-steam.svg", 3, "o-blur", "assetCardTooltipOrigin", 4, "ngIf"],
                        ["class", "c-asset__locationIcon o-icon", "inlineSVG", "icon-game.svg", 4, "ngIf"],
                        ["class", "c-asset__locationIcon o-icon", "inlineSVG", "icon-eth.svg", 4, "ngIf"],
                        ["inlineSVG", "icon-steam.svg", 1, "c-asset__locationIcon", "o-icon", 3, "assetCardTooltipOrigin"],
                        ["inlineSVG", "icon-game.svg", 1, "c-asset__locationIcon", "o-icon"],
                        ["inlineSVG", "icon-eth.svg", 1, "c-asset__locationIcon", "o-icon"],
                        [1, "c-assetPreviewParam"],
                        [1, "c-assetPreviewParam__label"],
                        [1, "c-assetPreviewParam__value"],
                        [4, "ngIf", "ngIfElse"]
                    ],
                    template: function(p, R) {
                        1 & p && (e.YNc(0, A, 1, 0, void 0, 0), e.YNc(1, E, 1, 0, "ng-template", null, 1, e.W1O), e.YNc(3, B, 1, 0, "ng-template", null, 2, e.W1O), e.YNc(5, N, 1, 0, "ng-template", null, 3, e.W1O)), 2 & p && e.Q6J("ngTemplateOutlet", R[R.additionalParams.componentView])
                    },
                    directives: [c.tP, d.KI, c.O5, T.d, u.h],
                    styles: ["[_nghost-%COMP%]{display:inline-flex}"],
                    changeDetection: 0
                }), m
            })()
        },
        5686: (g, l, t) => {
            t.d(l, {
                d: () => u
            });
            var o = t(30430),
                a = t(98584),
                r = t(94650);
            let u = (() => {
                class P {
                    getTimeToEndTimer(v) {
                        let A = "";
                        const O = Math.floor(v / 86400),
                            I = this.addZeroToTime(Math.floor(v / 3600)),
                            M = this.addZeroToTime(Math.floor(v / 60));
                        return O >= 1 && (A = `${O}${(0,o.Iu)((0,a.J)("d"))}`), I >= 1 && I <= 23 && (A = `${I}${(0,o.Iu)((0,a.J)("h"))}`), M >= 1 && M <= 59 && (A = `${M}${(0,o.Iu)((0,a.J)("m"))}`), A
                    }
                    addZeroToTime(v) {
                        return v < 10 ? `0${v}` : v
                    }
                }
                return P.\u0275fac = function(v) {
                    return new(v || P)
                }, P.\u0275prov = r.Yz7({
                    token: P,
                    factory: P.\u0275fac,
                    providedIn: "root"
                }), P
            })()
        },
        4836: (g, l, t) => {
            t.d(l, {
                KE: () => r
            });
            const r = {
                catalog: "/ingame-items/item-list",
                product: "/product-card"
            }
        },
        38321: (g, l, t) => {
            t.d(l, {
                t: () => s
            });
            var o = t(81042),
                a = t(94650);
            let s = (() => {
                class n {
                    constructor() {}
                    getRequestId() {
                        return (!this.requestErrorStatus || "5" !== this.requestErrorStatus.charAt(0)) && (this.currentRequestId = o.Z()), this.currentRequestId
                    }
                    setRequestErrorStatus(c) {
                        this.requestErrorStatus = c ? .toString()
                    }
                    clearRequestErrorStatus() {
                        this.requestErrorStatus = ""
                    }
                }
                return n.\u0275fac = function(c) {
                    return new(c || n)
                }, n.\u0275prov = a.Yz7({
                    token: n,
                    factory: n.\u0275fac
                }), n
            })()
        },
        24409: (g, l, t) => {
            t.d(l, {
                F: () => u
            });
            var o = t(70655),
                a = t(64628),
                r = t(12869),
                s = t(54004),
                n = t(25565),
                e = t(49933),
                c = t(99678),
                d = t(30430),
                T = t(94650);
            let u = class {
                constructor(f, v, A) {
                    this.gamesService = f, this.seoAreaMetaService = v, this.transloco = A
                }
                getChildProductRoutePath(f) {
                    return this.gamesService.getGameById(f.gameId).pipe((0, s.U)(v => this.seoAreaMetaService.buildFullItemRoute(v.slug, f.slug, f.extra)), (0, s.U)(v => (0, c.D)(v, this.transloco.getActiveLang())), (0, n._)(), (0, e.t)(this))
                }
            };
            u.\u0275fac = function(f) {
                return new(f || u)(T.LFG(a.B), T.LFG(r.jM), T.LFG(d.Vn))
            }, u.\u0275prov = T.Yz7({
                token: u,
                factory: u.\u0275fac,
                providedIn: "root"
            }), u = (0, o.gn)([(0, e.c)(), (0, o.w6)("design:paramtypes", [a.B, r.jM, d.Vn])], u)
        },
        23775: (g, l, t) => {
            t.d(l, {
                V: () => o
            });
            const o = {
                spaceBetween: 10,
                centeredSlides: !1,
                loop: !0,
                simulateTouch: !0,
                navigation: {
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next"
                },
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    dynamicBullets: !0,
                    clickable: !0
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    990: {
                        slidesPerView: 3
                    }
                }
            }
        },
        74318: (g, l, t) => {
            t.d(l, {
                s: () => r
            });
            var o = t(94650),
                a = t(30430);
            let r = (() => {
                class s {
                    constructor(e) {
                        this.transloco = e, this.NewsArticles = [{
                            nameCompany: "observer",
                            date: this.transloco.selectTranslate("FEB 23, 2021", {}, "aboutUs"),
                            description: this.transloco.selectTranslate("Through a partnership (which was revealed in December of 2020) with Los Angeles-based blockchain game tech company DMarket, NAVINATION is best described as equal parts competition and a fan engagement initiative that will be rolled out in seasons. The entire system is built on top of DMarket\u2019s DROP software application...", {}, "aboutUs"),
                            link: "https://esportsobserver.com/navi-navination-fan-engagement/"
                        }, {
                            nameCompany: "venture-beat",
                            date: this.transloco.selectTranslate("June 18, 2020", {}, "aboutUs"),
                            description: this.transloco.selectTranslate("Blockchain-based game marketplace DMarket has raised $6.5 million in venture funding and added video game pioneer Trip Hawkins as a board member. Almaz Capital led the round, with support from Xsolla. The funding will help DMarket expand its decentralized, cross-game marketplace, which lets gamers freely trade and sell in-game assets, earning real value for those virtual items...", {}, "aboutUs"),
                            link: "https://venturebeat.com/2020/06/18/dmarket-raises-6-5-million-for-cross-game-blockchain-marketpace-adds-trip-hawkins-as-board-member/"
                        }, {
                            nameCompany: "venture-beat",
                            date: this.transloco.selectTranslate("Dec 22, 2020", {}, "aboutUs"),
                            description: this.transloco.selectTranslate("The project is powered by the software application Drop, developed by Los Angeles-based DMarket. It took DMarket about eight months and around $1 million to develop this app. Using blockchain (the secure and transparent decentralized ledger) DMarket has made a decentralized, cross-game marketplace, which lets gamers freely trade and sell in-game assets, earning real value for those virtual items...", {}, "aboutUs"),
                            link: "https://venturebeat.com/2020/12/22/navi-esports-club-launches-metaverse-with-dmarket-in-game-trading-platform/"
                        }, {
                            nameCompany: "forbes",
                            date: this.transloco.selectTranslate("Nov 8, 2019", {}, "aboutUs"),
                            description: this.transloco.selectTranslate("DMarket founders have 10+ years of experience in virtual item trading and building in-game economy from scratch. The company provides both a toolset to build in-game economy and a place to buy, sell, collect or exchange a wide variety of in-game collectibles...", {}, "aboutUs"),
                            link: "https://www.forbes.com/sites/ilkerkoksal/2019/11/08/video-gaming-industry--its-revenue-shift/"
                        }, {
                            nameCompany: "reuters",
                            date: this.transloco.selectTranslate("NOV 26, 2019", {}, "aboutUs"),
                            description: this.transloco.selectTranslate("There is a shift in the gaming industry towards free-to-play games,\u201d said Tamara Slanova, co-founder of DMarket, a platform for game developers and players to sell virtual outfits or other cosmetic items known as \u2018skins\u2019...", {}, "aboutUs"),
                            link: "https://www.reuters.com/article/us-global-videogames-property-analysis-t/virtual-goldmine-in-game-goods-fuel-debate-over-digital-ownership-idUSKBN1Y0032"
                        }, {
                            nameCompany: "venture-beat",
                            date: this.transloco.selectTranslate("AUG 17, 2017", {}, "aboutUs"),
                            description: this.transloco.selectTranslate("Game developers will be able to use the DMarket API to make items from their games tradable, so they don\u2019t need to create their own independent marketplaces...", {}, "aboutUs"),
                            link: "https://venturebeat.com/2017/08/17/dmarket-launches-ico-plans-blockchain-marketplace-for-in-game-items/"
                        }], this.FoundersData = [{
                            founderLink: "https://www.linkedin.com/in/vlad-panchenko/",
                            founderName: "Vlad Panchenko",
                            founderPosition: "Founder & CEO",
                            founderDescription: this.transloco.selectTranslate("Involved in virtual item trading since 2008, in 2016 Vlad founded Skins.Cash, a global instant in-game skins market boasting 2M+ visitors a month. In 2015, Vlad founded Suntechsoft Corp Limited, the #1 private merchant of digital goods.", {}, "aboutUs")
                        }, {
                            founderLink: "https://www.linkedin.com/in/tamara-slanova/",
                            founderName: "Tamara Slanova",
                            founderPosition: "Co-Founder, CFO, Head of London Office",
                            founderDescription: this.transloco.selectTranslate("Tamara has more than 15 years experience in industries including gaming (Global Games, Suntechsoft, Skins.Cash) and international banking.", {}, "aboutUs")
                        }]
                    }
                }
                return s.\u0275fac = function(e) {
                    return new(e || s)(o.LFG(a.Vn))
                }, s.\u0275prov = o.Yz7({
                    token: s,
                    factory: s.\u0275fac
                }), s
            })()
        },
        24119: (g, l, t) => {
            t.d(l, {
                j: () => s
            });
            var o = t(49089),
                a = t(94650),
                r = t(80529);
            let s = (() => {
                class n extends o.s {
                    constructor(c) {
                        super(o.D.Exchange), this.http = c
                    }
                    requestGameIntegration(c) {
                        return this.http.post(`${this.rootPath}/game-integration/sign-up`, c)
                    }
                }
                return n.\u0275fac = function(c) {
                    return new(c || n)(a.LFG(r.eN))
                }, n.\u0275prov = a.Yz7({
                    token: n,
                    factory: n.\u0275fac
                }), n
            })()
        },
        45450: (g, l, t) => {
            t.d(l, {
                h: () => c
            });
            var o = t(36895),
                a = t(89482),
                r = t(97392),
                s = t(30430),
                n = t(99485),
                e = t(94650);
            let c = (() => {
                class d {}
                return d.\u0275fac = function(u) {
                    return new(u || d)
                }, d.\u0275mod = e.oAB({
                    type: d
                }), d.\u0275inj = e.cJS({
                    providers: [{
                        provide: s.Hn,
                        useValue: "giveawayLandings"
                    }],
                    imports: [
                        [o.ez, r.Ps, s.y4, a.m, n.kz]
                    ]
                }), d
            })()
        },
        13252: (g, l, t) => {
            t.d(l, {
                o: () => n
            });
            var o = t(36895),
                a = t(24006),
                r = t(94700),
                s = t(94650);
            let n = (() => {
                class e {}
                return e.\u0275fac = function(d) {
                    return new(d || e)
                }, e.\u0275mod = s.oAB({
                    type: e
                }), e.\u0275inj = s.cJS({
                    imports: [
                        [o.ez, r.a, r.lQ, a.UX]
                    ]
                }), e
            })()
        },
        37345: (g, l, t) => {
            t.d(l, {
                s: () => e
            });
            var o = t(70655),
                a = t(94650),
                r = t(24006),
                s = t(94700),
                n = t(49933);
            let e = class {
                constructor(d) {
                    this.cdr = d, this.recaptchaReactive = new r.NI(null, r.kI.required), this.recaptchaResponse = new a.vpe
                }
                ngOnInit() {
                    this.resetRecaptcha.pipe((0, n.t)(this)).subscribe(() => {
                        this.captcha.reset(), this.cdr.markForCheck()
                    }), this.recaptchaReactive.valueChanges.pipe((0, n.t)(this)).subscribe(d => this.recaptchaResponse.emit(d))
                }
            };
            e.\u0275fac = function(d) {
                return new(d || e)(a.Y36(a.sBO))
            }, e.\u0275cmp = a.Xpm({
                type: e,
                selectors: [
                    ["dm-recaptcha"]
                ],
                viewQuery: function(d, T) {
                    if (1 & d && a.Gf(s.wT, 7), 2 & d) {
                        let u;
                        a.iGM(u = a.CRH()) && (T.captcha = u.first)
                    }
                },
                inputs: {
                    resetRecaptcha: "resetRecaptcha"
                },
                outputs: {
                    recaptchaResponse: "recaptchaResponse"
                },
                decls: 1,
                vars: 1,
                consts: [
                    [3, "formControl"]
                ],
                template: function(d, T) {
                    1 & d && a._UZ(0, "re-captcha", 0), 2 & d && a.Q6J("formControl", T.recaptchaReactive)
                },
                directives: [s.wT, s.Vd, r.JJ, r.oH],
                encapsulation: 2,
                changeDetection: 0
            }), e = (0, o.gn)([(0, n.c)(), (0, o.w6)("design:paramtypes", [a.sBO])], e)
        },
        42382: (g, l, t) => {
            t.d(l, {
                C: () => O,
                V: () => M
            });
            var o = t(12311),
                a = t(94650),
                r = t(30430),
                s = t(59549),
                n = t(44144),
                e = t(24006),
                c = t(36895);
            const d = ["tfaCodeInputAutoFocus"];

            function T(i, h) {
                if (1 & i && (a.ynx(0), a._uU(1), a.BQk()), 2 & i) {
                    const _ = a.oxw(2).$implicit;
                    a.xp6(1), a.hij(" ", _("Please enter your Two-Factor Code from App to enable secure access."), " ")
                }
            }

            function u(i, h) {
                if (1 & i && (a.ynx(0), a._uU(1), a.BQk()), 2 & i) {
                    const _ = a.oxw(2).$implicit;
                    a.xp6(1), a.hij(" ", _("Please enter your Two-Factor Code from App to disable secure access."), " ")
                }
            }

            function P(i, h) {
                if (1 & i && (a.ynx(0), a._uU(1), a.BQk()), 2 & i) {
                    const _ = a.oxw(2).$implicit;
                    a.xp6(1), a.hij(" ", _("Please enter your two-factor code from the App to log in."), " ")
                }
            }

            function f(i, h) {
                if (1 & i && (a.TgZ(0, "p"), a.YNc(1, T, 2, 1, "ng-container", 4), a.YNc(2, u, 2, 1, "ng-container", 4), a.YNc(3, P, 2, 1, "ng-container", 4), a.qZA()), 2 & i) {
                    const _ = a.oxw(2);
                    a.xp6(1), a.Q6J("ngIf", _.tfaFlowType === _.TfaFlowType.Enable), a.xp6(1), a.Q6J("ngIf", _.tfaFlowType === _.TfaFlowType.Disable), a.xp6(1), a.Q6J("ngIf", _.tfaFlowType === _.TfaFlowType.Login)
                }
            }

            function v(i, h) {
                if (1 & i && (a.TgZ(0, "p", 6), a._uU(1), a.ALo(2, "async"), a.ALo(3, "async"), a.qZA()), 2 & i) {
                    const _ = a.oxw(2);
                    a.xp6(1), a.hij(" ", _.TfaErrorCodes[_.errorCode] ? a.lcZ(2, 1, _.TfaErrorCodes[_.errorCode]) : a.lcZ(3, 3, _.defaultErrorMessage), " ")
                }
            }

            function A(i, h) {
                if (1 & i && (a.ynx(0), a.TgZ(1, "mat-form-field", 1), a.TgZ(2, "mat-label"), a._uU(3), a.qZA(), a._UZ(4, "input", 2, 3), a.qZA(), a.TgZ(6, "mat-error"), a.YNc(7, f, 4, 3, "p", 4), a.qZA(), a.YNc(8, v, 4, 5, "p", 5), a.BQk()), 2 & i) {
                    const _ = h.$implicit,
                        D = a.oxw();
                    a.xp6(1), a.Q6J("hideRequiredMarker", !0), a.xp6(2), a.Oqu(_("Code")), a.xp6(1), a.Q6J("formControl", D.tfaCode)("maxLength", D.lenghtTfaCode), a.xp6(3), a.Q6J("ngIf", D.tfaCode.hasError("required") && D.tfaCode.touched && !D.errorCode), a.xp6(1), a.Q6J("ngIf", !!D.errorCode)
                }
            }
            var O = (() => {
                return (i = O || (O = {}))[i.Enable = 0] = "Enable", i[i.Disable = 1] = "Disable", i[i.Login = 2] = "Login", O;
                var i
            })();
            let M = (() => {
                class i {
                    constructor(_) {
                        this.transloco = _, this.errorCode = "", this.TfaErrorCodes = {
                            [o.Zp.InvalidOTPCode]: this.transloco.selectTranslate("Two-Factor Code is not valid. Please try again.", {}, "auth"),
                            [o.Zp.OTPSessionExpired]: this.transloco.selectTranslate("Your current session has been expired. Please re-login before entering a code.", {}, "auth"),
                            [o.Zp.MFAAlreadyEnabled]: this.transloco.selectTranslate("Two-factor authentication has already been enabled.", {}, "auth"),
                            [o.Zp.OTPDisabled]: this.transloco.selectTranslate("Two-factor authentication has already been disabled.", {}, "auth")
                        }, this.TfaFlowType = O, this.lenghtTfaCode = 6, this.defaultErrorMessage = this.transloco.selectTranslate("Something went wrong. Please try again later", {}, "auth")
                    }
                    ngOnInit() {
                        this.tfaFlowType === this.TfaFlowType.Enable && this.focusInput.nativeElement.focus()
                    }
                    ngAfterViewInit() {
                        this.tfaFlowType !== this.TfaFlowType.Enable && setTimeout(() => this.focusInput ? .nativeElement ? .focus(), 1e3)
                    }
                }
                return i.\u0275fac = function(_) {
                    return new(_ || i)(a.Y36(r.Vn))
                }, i.\u0275cmp = a.Xpm({
                    type: i,
                    selectors: [
                        ["tfa-code-input"]
                    ],
                    viewQuery: function(_, D) {
                        if (1 & _ && a.Gf(d, 7), 2 & _) {
                            let E;
                            a.iGM(E = a.CRH()) && (D.focusInput = E.first)
                        }
                    },
                    hostAttrs: [1, "c-dialogTfa__copyBlock", "c-dialogTfa__copyBlock--component"],
                    inputs: {
                        tfaCode: "tfaCode",
                        errorCode: "errorCode",
                        tfaFlowType: "tfaFlowType"
                    },
                    decls: 1,
                    vars: 1,
                    consts: [
                        [4, "transloco", "translocoRead"],
                        ["appearance", "fill", 3, "hideRequiredMarker"],
                        ["matInput", "", "name", "code", "type", "text", "autofocus", "", "cdk-focus-initial", "", "data-hj-whitelist", "", "ngDefaultControl", "", 1, "c-dialogTfa__copyCode", "c-dialogTfa__copyCode--input", 3, "formControl", "maxLength"],
                        ["tfaCodeInputAutoFocus", ""],
                        [4, "ngIf"],
                        ["class", "mat-error", 4, "ngIf"],
                        [1, "mat-error"]
                    ],
                    template: function(_, D) {
                        1 & _ && a.YNc(0, A, 9, 6, "ng-container", 0), 2 & _ && a.Q6J("translocoRead", "auth")
                    },
                    directives: [r.KI, s.KE, s.hX, n.Nt, e.Fj, e.JJ, e.oH, s.TO, c.O5],
                    pipes: [c.Ov],
                    encapsulation: 2,
                    changeDetection: 0
                }), i
            })()
        },
        53272: (g, l, t) => {
            t.d(l, {
                z: () => e
            });
            var o = t(36895),
                a = t(7279),
                r = t(24006),
                s = t(30430),
                n = t(94650);
            let e = (() => {
                class c {}
                return c.\u0275fac = function(T) {
                    return new(T || c)
                }, c.\u0275mod = n.oAB({
                    type: c
                }), c.\u0275inj = n.cJS({
                    providers: [{
                        provide: s.Hn,
                        useValue: "auth"
                    }],
                    imports: [
                        [o.ez, r.u5, r.UX, a.q, s.y4]
                    ]
                }), c
            })()
        },
        62805: (g, l, t) => {
            t.d(l, {
                q: () => A
            });
            var o = t(30430),
                a = t(18505),
                r = t(70262),
                s = t(49089),
                n = t(39937),
                e = t(58550),
                c = t(67845),
                d = t(53188),
                T = t(85557),
                u = t(23560),
                P = t(1403),
                f = t(94650),
                v = t(80529);
            let A = (() => {
                class O extends s.s {
                    constructor(M, i, h, _, D, E) {
                        super(s.D.Account), this.http = M, this.googleAnalyticsService = i, this.authHeaderService = h, this.userQuery = _, this.notificationsPushService = D, this.userStoreService = E
                    }
                    patchApiKey(M) {
                        return this.http.patch(this.rootPath + "/user/steam-api-key", {
                            steamApiKey: M
                        }).pipe((0, a.b)(() => {
                            this.notificationsPushService.pushNotification((0, o.Iu)("Steam API key was successfully accepted")), this.userStoreService.updateUserData()
                        }), (0, r.K)(h => {
                            throw this.googleAnalyticsService.sendAuthEvent(d.tf.Method, T.Q.Connect, {
                                method: "steam",
                                event: "flow_error",
                                flow_error_message: "p2p-steam-api-key-attach-failed",
                                site_place: this.authHeaderService.sitePlace("header")
                            }), h
                        }))
                    }
                    addTradeUrl(M) {
                        return this.http.put(this.rootPath + "/trade-url", {
                            tradeUrl: M
                        }).pipe((0, a.b)(() => {
                            this.userStoreService.updateUserData()
                        }))
                    }
                    buildTradeUrlLink(M) {
                        return "http://steamcommunity.com/profiles/" + M.steamAccount.steamId + "/tradeoffers/privacy#trade_offer_access_url"
                    }
                }
                return O.\u0275fac = function(M) {
                    return new(M || O)(f.LFG(v.eN), f.LFG(u.$), f.LFG(P.L), f.LFG(n.W), f.LFG(c.P), f.LFG(e.p))
                }, O.\u0275prov = f.Yz7({
                    token: O,
                    factory: O.\u0275fac,
                    providedIn: "root"
                }), O
            })()
        },
        33443: (g, l, t) => {
            function o(a, r) {
                return s => s.controls[a].value !== s.controls[r].value ? {
                    equivalent: !0
                } : null
            }
            t.d(l, {
                W: () => o
            })
        },
        73824: (g, l, t) => {
            t.d(l, {
                d: () => d
            });
            var o = t(49089),
                a = t(61135),
                r = t(54004),
                s = t(79401),
                n = t(39937),
                e = t(94650),
                c = t(80529);
            let d = (() => {
                class u extends o.s {
                    constructor(f, v) {
                        super(o.D.MarketPlaceApi), this.http = f, this.userQuery = v, this.currentActivePlanName = new a.X(""), this.isUserLogin$ = this.userQuery.isLoggedIn$
                    }
                    get getActivePlanName() {
                        return this.currentActivePlanName.asObservable()
                    }
                    set setActivePlanName(f) {
                        this.currentActivePlanName.next(f)
                    }
                    getActiveSubscriptions() {
                        return this.http.get(`${this.rootPath}/user-subscriptions`).pipe((0, r.U)(({
                            UserSubscriptions: f
                        }) => f[0]))
                    }
                    getCashBackAmount() {
                        return this.http.get(this.rootPath + "/cashback/balance")
                    }
                    cashBack() {
                        return this.http.post(this.rootPath + "/cashback/withdraw", {})
                    }
                    getSubscriptions() {
                        return this.http.get(`${this.rootPath}/subscriptions`).pipe((0, r.U)(f => [T, ...f.Subscriptions]))
                    }
                }
                return u.\u0275fac = function(f) {
                    return new(f || u)(e.LFG(c.eN), e.LFG(n.W))
                }, u.\u0275prov = e.Yz7({
                    token: u,
                    factory: u.\u0275fac,
                    providedIn: "root"
                }), u
            })();
            const T = {
                ID: null,
                Name: "Player",
                Price: {
                    Amount: "0",
                    Currency: s.i.CurrencyEnum.USD
                },
                PriceWithDiscount: null,
                HasDiscount: !1,
                TurnoverAmount: {
                    Amount: "0",
                    Currency: s.i.CurrencyEnum.USD
                },
                CashbackPercent: 0,
                SubscriptionPeriod: "0"
            }
        },
        71455: (g, l, t) => {
            t.d(l, {
                c: () => s
            });
            var o = t(49089),
                a = t(94650),
                r = t(80529);
            let s = (() => {
                class n extends o.s {
                    constructor(c) {
                        super(o.D.MarketPlaceApi), this.http = c
                    }
                    getRatesStats(c) {
                        return this.http.get(`${this.rootPath}/user/stats/deal?GameType=${c}`)
                    }
                    getRatesVisualStats(c, d = "success") {
                        switch (!0) {
                            case 0 == +c:
                                return d;
                            case +c <= 20.99:
                                return "error";
                            case +c <= 50.99:
                                return "warning";
                            default:
                                return "success"
                        }
                    }
                }
                return n.\u0275fac = function(c) {
                    return new(c || n)(a.LFG(r.eN))
                }, n.\u0275prov = a.Yz7({
                    token: n,
                    factory: n.\u0275fac,
                    providedIn: "root"
                }), n
            })()
        },
        43783: (g, l, t) => {
            t.d(l, {
                x: () => o
            });
            var o = (() => {
                return (a = o || (o = {})).ExteriorEnum = {
                    FieldTested: "field-tested",
                    MinimalWear: "minimal wear",
                    BattleScarred: "battle-scarred",
                    WellWorn: "well-worn",
                    FactoryNew: "factory new",
                    NotPainted: "not painted"
                }, a.MetadataStateEnum = {
                    Mutable: "Mutable",
                    Immutable: "Immutable"
                }, o;
                var a
            })()
        },
        89528: (g, l, t) => {
            t.d(l, {
                V: () => o
            });
            var o = (() => {
                return (a = o || (o = {})).StatusEnum = {
                    Processing: "Processing",
                    Completed: "Completed",
                    Refused: "Refused",
                    Failed: "Failed",
                    PartialCompleted: "PartialCompleted"
                }, a.TransferErrorEnum = {
                    Internal: "Internal",
                    Unknown: "Unknown",
                    InvalidTradeURL: "InvalidTradeURL",
                    TradingUnavailable: "TradingUnavailable",
                    TradeHold: "TradeHold",
                    TradeOfferExpired: "TradeOfferExpired",
                    TradeOfferCountered: "TradeOfferCountered",
                    TradeOfferCanceled: "TradeOfferCanceled",
                    TradeOfferDeclined: "TradeOfferDeclined",
                    TradeOfferInvalidItems: "TradeOfferInvalidItems",
                    TradeOfferInEscrow: "TradeOfferInEscrow",
                    TradeOfferCanceledBySecondFactor: "TradeOfferCanceledBySecondFactor",
                    PrivateInventory: "PrivateInventory",
                    NetworkIssue: "NetworkIssue",
                    AssetNotAvailable: "AssetNotAvailable",
                    InventoryRevoked: "InventoryRevoked",
                    NoAvailableAccounts: "NoAvailableAccounts",
                    LowBalance: "LowBalance"
                }, o;
                var a
            })()
        },
        26877: (g, l, t) => {
            t.d(l, {
                Z: () => o
            });
            var o = (() => ((o || (o = {})).StatusEnum = {
                Internal: "Internal",
                AutobotsError: "AutobotsError",
                UnknownTradeState: "UnknownTradeState",
                TradeOfferInvalid: "TradeOfferInvalid",
                TradeOfferActive: "TradeOfferActive",
                TradeOfferAccepted: "TradeOfferAccepted",
                TradeOfferCountered: "TradeOfferCountered",
                TradeOfferExpired: "TradeOfferExpired",
                TradeOfferCanceled: "TradeOfferCanceled",
                TradeOfferDeclined: "TradeOfferDeclined",
                TradeOfferInvalidItems: "TradeOfferInvalidItems",
                TradeOfferCreatedNeedsConfirmation: "TradeOfferCreatedNeedsConfirmation",
                TradeOfferCanceledBySecondFactor: "TradeOfferCanceledBySecondFactor",
                TradeOfferInEscrow: "TradeOfferInEscrow",
                PrivateInventory: "PrivateInventory",
                NetworkIssue: "NetworkIssue",
                InventoryRevoked: "InventoryRevoked",
                NoAvailableAccounts: "NoAvailableAccounts",
                LowBalance: "LowBalance"
            }, o))()
        },
        60914: (g, l, t) => {
            t.d(l, {
                r: () => o
            });
            var o = (() => {
                return (a = o || (o = {})).StatusEnum = {
                    Processing: "Processing",
                    Completed: "Completed",
                    Refused: "Refused",
                    Failed: "Failed",
                    PartialCompleted: "PartialCompleted"
                }, a.TransferErrorEnum = {
                    Internal: "Internal",
                    Unknown: "Unknown",
                    InvalidTradeURL: "InvalidTradeURL",
                    TradingUnavailable: "TradingUnavailable",
                    TradeHold: "TradeHold",
                    TradeOfferExpired: "TradeOfferExpired",
                    TradeOfferCountered: "TradeOfferCountered",
                    TradeOfferCanceled: "TradeOfferCanceled",
                    TradeOfferDeclined: "TradeOfferDeclined",
                    TradeOfferInvalidItems: "TradeOfferInvalidItems",
                    TradeOfferInEscrow: "TradeOfferInEscrow",
                    TradeOfferCanceledBySecondFactor: "TradeOfferCanceledBySecondFactor",
                    PrivateInventory: "PrivateInventory",
                    NetworkIssue: "NetworkIssue",
                    AssetNotAvailable: "AssetNotAvailable",
                    InventoryRevoked: "InventoryRevoked",
                    NoAvailableAccounts: "NoAvailableAccounts",
                    LowBalance: "LowBalance"
                }, o;
                var a
            })()
        }
    }
]);