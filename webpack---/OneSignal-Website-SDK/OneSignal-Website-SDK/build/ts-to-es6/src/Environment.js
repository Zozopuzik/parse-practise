import SdkEnvironment from './managers/SdkEnvironment';
import {
    WindowEnvironmentKind
} from './models/WindowEnvironmentKind';
import bowser from 'bowser';
import {
    supportsVapidPush
} from './context/browser/utils/BrowserSupportsPush';
export default class Environment {
    /**
     * True if not in a service worker environment.
     */
    static isBrowser() {
        return typeof window !== 'undefined';
    }
    // Prefer Legacy Safari if API is available over VAPID until Safari
    // fixes issues with it.
    static useSafariLegacyPush() {
        var _a;
        return this.isBrowser() && ((_a = window.safari) === null || _a === void 0 ? void 0 : _a.pushNotification) != undefined;
    }
    // This is the counter part to useSafariLegacyPush(); as it notes only use
    // Safari VAPID if it doesn't have legacy Safari push.
    static useSafariVapidPush() {
        return bowser.safari && supportsVapidPush() && !this.useSafariLegacyPush();
    }
    static version() {
        return (typeof __VERSION__ === "undefined" ? 1 : Number(__VERSION__));
    }
    static get TRADITIONAL_CHINESE_LANGUAGE_TAG() {
        return ['tw', 'hant'];
    }
    static get SIMPLIFIED_CHINESE_LANGUAGE_TAG() {
        return ['cn', 'hans'];
    }
    /* Specifications: https://tools.ietf.org/html/bcp47 */
    static getLanguage() {
        let languageTag = navigator.language;
        if (languageTag) {
            languageTag = languageTag.toLowerCase();
            const languageSubtags = languageTag.split('-');
            if (languageSubtags[0] == 'zh') {
                // The language is zh-?
                // We must categorize the language as either zh-Hans (simplified) or zh-Hant (traditional); OneSignal only supports these two Chinese variants
                for (const traditionalSubtag of Environment.TRADITIONAL_CHINESE_LANGUAGE_TAG) {
                    if (languageSubtags.indexOf(traditionalSubtag) !== -1) {
                        return 'zh-Hant';
                    }
                }
                for (const simpleSubtag of Environment.SIMPLIFIED_CHINESE_LANGUAGE_TAG) {
                    if (languageSubtags.indexOf(simpleSubtag) !== -1) {
                        return 'zh-Hans';
                    }
                }
                return 'zh-Hant'; // Return Chinese traditional by default
            } else {
                // Return the language subtag (it can be three characters, so truncate it down to 2 just to be sure)
                return languageSubtags[0].substring(0, 2);
            }
        } else {
            return 'en';
        }
    }
    static supportsServiceWorkers() {
        const env = SdkEnvironment.getWindowEnv();
        switch (env) {
            case WindowEnvironmentKind.ServiceWorker:
                return true;
            default:
                return typeof navigator !== "undefined" &&
                    'serviceWorker' in navigator;
        }
    }
    /*
      Returns the MD5 hash of all stylesheets within the src/stylesheets
      directory.
     */
    static getSdkStylesVersionHash() {
        return (typeof __SRC_STYLESHEETS_MD5_HASH__ === "undefined" ? '2' : __SRC_STYLESHEETS_MD5_HASH__);
    }
}
//# sourceMappingURL=Environment.js.map