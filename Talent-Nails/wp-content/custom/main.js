"use strict";

    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1,
                descriptor.configurable = !0,
                "value"in descriptor && (descriptor.writable = !0),
                Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps),
            staticProps && defineProperties(Constructor, staticProps),
            Constructor
        }
    }();
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
            throw new TypeError("Cannot call a class as a function")
    }
    var RocketBrowserCompatibilityChecker = function() {
        function RocketBrowserCompatibilityChecker(options) {
            _classCallCheck(this, RocketBrowserCompatibilityChecker),
            this.passiveSupported = !1,
            this._checkPassiveOption(this),
            this.options = !!this.passiveSupported && options
        }
        return _createClass(RocketBrowserCompatibilityChecker, [{
            key: "_checkPassiveOption",
            value: function(self) {
                try {
                    var options = {
                        get passive() {
                            return !(self.passiveSupported = !0)
                        }
                    };
                    window.addEventListener("test", null, options),
                    window.removeEventListener("test", null, options)
                } catch (err) {
                    self.passiveSupported = !1
                }
            }
        }, {
            key: "initRequestIdleCallback",
            value: function() {
                !1 in window && (window.requestIdleCallback = function(cb) {
                    var start = Date.now();
                    return setTimeout(function() {
                        cb({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - start))
                            }
                        })
                    }, 1)
                }
                ),
                !1 in window && (window.cancelIdleCallback = function(id) {
                    return clearTimeout(id)
                }
                )
            }
        }, {
            key: "isDataSaverModeOn",
            value: function() {
                return "connection"in navigator && !0 === navigator.connection.saveData
            }
        }, {
            key: "supportsLinkPrefetch",
            value: function() {
                var elem = document.createElement("link");
                return elem.relList && elem.relList.supports && elem.relList.supports("prefetch") && window.IntersectionObserver && "isIntersecting"in IntersectionObserverEntry.prototype
            }
        }, {
            key: "isSlowConnection",
            value: function() {
                return "connection"in navigator && "effectiveType"in navigator.connection && ("2g" === navigator.connection.effectiveType || "slow-2g" === navigator.connection.effectiveType)
            }
        }]),
        RocketBrowserCompatibilityChecker
    }();

if (typeof revslider_showDoubleJqueryError === "undefined") {
    function revslider_showDoubleJqueryError(sliderID) {
        var err = "<div class='rs_error_message_box'>";
        err += "<div class='rs_error_message_oops'>Oops...</div>";
        err += "<div class='rs_error_message_content'>";
        err += "You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>";
        err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on";
        err += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it";
        err += "</div>";
        err += "</div>";
        jQuery(sliderID).show().html(err);
    }
}

(function() {
    "use strict";
    var e = function() {
        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(e, t, r) {
            return t && n(e.prototype, t),
            r && n(e, r),
            e
        }
    }();
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var t = function() {
        function r(e, t) {
            n(this, r),
            this.attrName = "data-rocketlazyloadscript",
            this.browser = t,
            this.options = this.browser.options,
            this.triggerEvents = e,
            this.userEventListener = this.triggerListener.bind(this)
        }
        return e(r, [{
            key: "init",
            value: function() {
                this._addEventListener(this)
            }
        }, {
            key: "reset",
            value: function() {
                this._removeEventListener(this)
            }
        }, {
            key: "_addEventListener",
            value: function(t) {
                this.triggerEvents.forEach(function(e) {
                    return window.addEventListener(e, t.userEventListener, t.options)
                })
            }
        }, {
            key: "_removeEventListener",
            value: function(t) {
                this.triggerEvents.forEach(function(e) {
                    return window.removeEventListener(e, t.userEventListener, t.options)
                })
            }
        }, {
            key: "_loadScriptSrc",
            value: function() {
                var r = this
                  , e = document.querySelectorAll("script[" + this.attrName + "]");
                0 !== e.length && Array.prototype.slice.call(e).forEach(function(e) {
                    var t = e.getAttribute(r.attrName);
                    e.setAttribute("src", t),
                    e.removeAttribute(r.attrName)
                }),
                this.reset()
            }
        }, {
            key: "triggerListener",
            value: function() {
                this._loadScriptSrc(),
                this._removeEventListener(this)
            }
        }], [{
            key: "run",
            value: function() {
                RocketBrowserCompatibilityChecker && new r(["keydown", "mouseover", "touchmove", "touchstart"],new RocketBrowserCompatibilityChecker({
                    passive: !0
                })).init()
            }
        }]),
        r
    }();
    t.run();
}());

var RocketstylesheetLinksConfig = {
    "excludeUris": "\/(.+\/)?feed\/?.+\/?|\/(?:.+\/)?embed\/|\/(index\\.php\/)?wp\\-json(\/.*|$)|\/wp-admin\/|\/logout\/|\/wp-login.php",
    "usesTrailingSlash": "1",
    "imageExt": "jpg|jpeg|gif|png|tiff|bmp|webp|avif",
    "fileExt": "jpg|jpeg|gif|png|tiff|bmp|webp|avif|php|pdf|html|htm",
    "siteUrl": "https:\/\/qnsmallside.com",
    "onHoverDelay": "100",
    "rateThrottle": "3"
};

(function() {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , e = function() {
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, t, n) {
            return t && i(e.prototype, t),
            n && i(e, n),
            e
        }
    }();
    function i(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var t = function() {
        function n(e, t) {
            i(this, n),
            this.browser = e,
            this.config = t,
            this.options = this.browser.options,
            this.prefetched = new Set,
            this.eventTime = null,
            this.threshold = 1111,
            this.numOnHover = 0
        }
        return e(n, [{
            key: "init",
            value: function() {
                !this.browser.supportsLinkPrefetch() || this.browser.isDataSaverModeOn() || this.browser.isSlowConnection() || (this.regex = {
                    excludeUris: RegExp(this.config.excludeUris, "i"),
                    images: RegExp(".(" + this.config.imageExt + ")$", "i"),
                    fileExt: RegExp(".(" + this.config.fileExt + ")$", "i")
                },
                this._initListeners(this))
            }
        }, {
            key: "_initListeners",
            value: function(e) {
                -1 < this.config.onHoverDelay && document.addEventListener("mouseover", e.listener.bind(e), e.listenerOptions),
                document.addEventListener("mousedown", e.listener.bind(e), e.listenerOptions),
                document.addEventListener("touchstart", e.listener.bind(e), e.listenerOptions)
            }
        }, {
            key: "listener",
            value: function(e) {
                var t = e.target.closest("a")
                  , n = this._prepareUrl(t);
                if (null !== n)
                    switch (e.type) {
                    case "mousedown":
                    case "touchstart":
                        this._addPrefetchLink(n);
                        break;
                    case "mouseover":
                        this._earlyPrefetch(t, n, "mouseout")
                    }
            }
        }, {
            key: "_earlyPrefetch",
            value: function(t, e, n) {
                var i = this
                  , r = setTimeout(function() {
                    if (r = null,
                    0 === i.numOnHover)
                        setTimeout(function() {
                            return i.numOnHover = 0
                        }, 1e3);
                    else if (i.numOnHover > i.config.rateThrottle)
                        return;
                    i.numOnHover++,
                    i._addPrefetchLink(e)
                }, this.config.onHoverDelay);
                t.addEventListener(n, function e() {
                    t.removeEventListener(n, e, {
                        passive: !0
                    }),
                    null !== r && (clearTimeout(r),
                    r = null)
                }, {
                    passive: !0
                })
            }
        }, {
            key: "_addPrefetchLink",
            value: function(i) {
                return this.prefetched.add(i.href),
                new Promise(function(e, t) {
                    var n = document.createElement("link");
                    n.rel = "prefetch",
                    n.href = i.href,
                    n.onload = e,
                    n.onerror = t,
                    document.head.appendChild(n)
                }
                ).catch(function() {})
            }
        }, {
            key: "_prepareUrl",
            value: function(e) {
                if (null === e || "object" !== (void 0 === e ? "undefined" : r(e)) || !1 in e || -1 === ["http:", "https:"].indexOf(e.protocol))
                    return null;
                var t = e.href.substring(0, this.config.siteUrl.length)
                  , n = this._getPathname(e.href, t)
                  , i = {
                    original: e.href,
                    protocol: e.protocol,
                    origin: t,
                    pathname: n,
                    href: t + n
                };
                return this._isLinkOk(i) ? i : null
            }
        }, {
            key: "_getPathname",
            value: function(e, t) {
                var n = t ? e.substring(this.config.siteUrl.length) : e;
                return n.startsWith("/") || (n = "/" + n),
                this._shouldAddTrailingSlash(n) ? n + "/" : n
            }
        }, {
            key: "_shouldAddTrailingSlash",
            value: function(e) {
                return this.config.usesTrailingSlash && !e.endsWith("/") && !this.regex.fileExt.test(e)
            }
        }, {
            key: "_isLinkOk",
            value: function(e) {
                return null !== e && "object" === (void 0 === e ? "undefined" : r(e)) && (!this.prefetched.has(e.href) && e.origin === this.config.siteUrl && -1 === e.href.indexOf("?") && -1 === e.href.indexOf("#") && !this.regex.excludeUris.test(e.href) && !this.regex.images.test(e.href))
            }
        }], [{
            key: "run",
            value: function() {
                "undefined" != typeof RocketstylesheetLinksConfig && new n(new RocketBrowserCompatibilityChecker({
                    capture: !0,
                    passive: !0
                }),RocketstylesheetLinksConfig).init()
            }
        }]),
        n
    }();
    t.run();
}());

jQuery(document).ready(function(jQuery) {
    jQuery.datepicker.setDefaults({
        "closeText": "Close",
        "currentText": "Today",
        "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        "monthNamesShort": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        "nextText": "Next",
        "prevText": "Previous",
        "dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "dayNamesShort": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        "dayNamesMin": ["S", "M", "T", "W", "T", "F", "S"],
        "dateFormat": "MM d, yy",
        "firstDay": 1,
        "isRTL": false
    });
});

var mejsL10n = {
    "language": "en",
    "strings": {
        "mejs.download-file": "Download File",
        "mejs.install-flash": "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https:\/\/get.adobe.com\/flashplayer\/",
        "mejs.fullscreen": "Fullscreen",
        "mejs.play": "Play",
        "mejs.pause": "Pause",
        "mejs.time-slider": "Time Slider",
        "mejs.time-help-text": "Use Left\/Right Arrow keys to advance one second, Up\/Down arrows to advance ten seconds.",
        "mejs.live-broadcast": "Live Broadcast",
        "mejs.volume-help-text": "Use Up\/Down Arrow keys to increase or decrease volume.",
        "mejs.unmute": "Unmute",
        "mejs.mute": "Mute",
        "mejs.volume-slider": "Volume Slider",
        "mejs.video-player": "Video Player",
        "mejs.audio-player": "Audio Player",
        "mejs.captions-subtitles": "Captions\/Subtitles",
        "mejs.captions-chapters": "Chapters",
        "mejs.none": "None",
        "mejs.afrikaans": "Afrikaans",
        "mejs.albanian": "Albanian",
        "mejs.arabic": "Arabic",
        "mejs.belarusian": "Belarusian",
        "mejs.bulgarian": "Bulgarian",
        "mejs.catalan": "Catalan",
        "mejs.chinese": "Chinese",
        "mejs.chinese-simplified": "Chinese (Simplified)",
        "mejs.chinese-traditional": "Chinese (Traditional)",
        "mejs.croatian": "Croatian",
        "mejs.czech": "Czech",
        "mejs.danish": "Danish",
        "mejs.dutch": "Dutch",
        "mejs.english": "English",
        "mejs.estonian": "Estonian",
        "mejs.filipino": "Filipino",
        "mejs.finnish": "Finnish",
        "mejs.french": "French",
        "mejs.galician": "Galician",
        "mejs.german": "German",
        "mejs.greek": "Greek",
        "mejs.haitian-creole": "Haitian Creole",
        "mejs.hebrew": "Hebrew",
        "mejs.hindi": "Hindi",
        "mejs.hungarian": "Hungarian",
        "mejs.icelandic": "Icelandic",
        "mejs.indonesian": "Indonesian",
        "mejs.irish": "Irish",
        "mejs.italian": "Italian",
        "mejs.japanese": "Japanese",
        "mejs.korean": "Korean",
        "mejs.latvian": "Latvian",
        "mejs.lithuanian": "Lithuanian",
        "mejs.macedonian": "Macedonian",
        "mejs.malay": "Malay",
        "mejs.maltese": "Maltese",
        "mejs.norwegian": "Norwegian",
        "mejs.persian": "Persian",
        "mejs.polish": "Polish",
        "mejs.portuguese": "Portuguese",
        "mejs.romanian": "Romanian",
        "mejs.russian": "Russian",
        "mejs.serbian": "Serbian",
        "mejs.slovak": "Slovak",
        "mejs.slovenian": "Slovenian",
        "mejs.spanish": "Spanish",
        "mejs.swahili": "Swahili",
        "mejs.swedish": "Swedish",
        "mejs.tagalog": "Tagalog",
        "mejs.thai": "Thai",
        "mejs.turkish": "Turkish",
        "mejs.ukrainian": "Ukrainian",
        "mejs.vietnamese": "Vietnamese",
        "mejs.welsh": "Welsh",
        "mejs.yiddish": "Yiddish"
    }
};

var eltdfGlobalVars = {
    "vars": {
        "eltdfAddForAdminBar": 0,
        "eltdfElementAppearAmount": -100,
        //"eltdfAjaxUrl": "https:\/\/qnsmallside.com\/wp-admin\/admin-ajax.php",
        "eltdfStickyHeaderHeight": 0,
        "eltdfStickyHeaderTransparencyHeight": 70,
        "eltdfTopBarHeight": 46,
        "eltdfLogoAreaHeight": 0,
        "eltdfMenuAreaHeight": 136,
        "eltdfMobileHeaderHeight": 70
    }
};
var eltdfPerPageVars = {
    "vars": {
        "eltdfMobileHeaderHeight": 70,
        "eltdfStickyScrollAmount": 680,
        "eltdfHeaderTransparencyHeight": 0,
        "eltdfHeaderVerticalWidth": 0
    }
};

jQuery(document).ready(function() {
    jQuery(".float-menu-1").floatingMenu({
        position: ["right", "top"],
        offset: [0, 135],
        shape: "rounded-out",
        sideSpace: false,
        buttonSpace: true,
        labelSpace: false,
        labelConnected: true,
        labelEffect: "slide-out",
        labelAnim: [400, "easeOutQuad"],
        color: "default",
        overColor: "default",
        labelsOn: true,
        subPosition: "under",
        subSpace: true,
        subEffect: "none",
        subOpen: "mouseover",
        subAnim: [400, "easeOutQuad"],
        windowPosition: ["center", "center"],
        windowOffset: [0, 0],
        windowCorners: "match",
        windowColor: "default",
        windowShadow: false,
        showAfterPosition: 0,
        mobileEnable: false,
        mobileScreen: 768,
    });
});
jQuery(document).ready(function() {
    jQuery(".float-menu-2").floatingMenu({
        position: ["right", "center"],
        offset: [0, 0],
        shape: "rounded",
        sideSpace: true,
        buttonSpace: true,
        labelSpace: true,
        labelConnected: true,
        labelEffect: "slide-out",
        labelAnim: [400, "easeOutQuad"],
        color: "default",
        overColor: "default",
        labelsOn: true,
        subPosition: "circular",
        subSpace: false,
        subEffect: "linear-slide",
        subOpen: "mouseover",
        subAnim: [400, "easeOutQuad"],
        windowPosition: ["center", "center"],
        windowOffset: [0, 0],
        windowCorners: "match",
        windowColor: "default",
        windowShadow: false,
        showAfterPosition: 0,
        mobileEnable: false,
        mobileScreen: 768,
    });
});