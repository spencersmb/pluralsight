/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/wp-content/themes/et2017_sage/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = jQuery;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";

var $ = jQuery;
var ProductStore = function ProductStore() {
    this.state = {
        isOpen: false,
        currentIndex: 0
    };
};
var Product_Store = new ProductStore();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Product_Store;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 2 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    find: function find() {
        if (navigator.userAgent.toLowerCase().indexOf("safari") > -1 && !(navigator.userAgent.toLowerCase().indexOf("chrome") > -1) && navigator.appName === "Netscape") {
            if (navigator.userAgent.match(/iPad/i) !== null) {
                return "ipad";
            } else {
                return "safari";
            }
        } else {
            return 'not safari';
        }
    }
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

/* eslint-env browser */
/* globals WEBPACK_PUBLIC_PATH */

// Dynamically set absolute public path from current protocol and host
if (false) {
  // eslint-disable-next-line no-undef, camelcase
  __webpack_public_path__ = location.protocol + "//" + location.host + WEBPACK_PUBLIC_PATH;
}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var router_ts_1 = __webpack_require__(19);
var Common_ts_1 = __webpack_require__(15);
var Home_ts_1 = __webpack_require__(16);
var Products_ts_1 = __webpack_require__(17);
var jquery = __webpack_require__(0);
var $ = jquery;
(function () {
    var App = function App() {
        // Use this variable to set up the common and page specific functions. If you
        // rename this variable, you will also need to rename the namespace below.
        this.routes = {
            // All pages
            Common: Common_ts_1.default,
            // Home page
            Home: Home_ts_1.default,
            // About us page, note the change from about-us to aboutUs.
            Products: Products_ts_1.default
        };
    };
    App.prototype.init = function init () {
        new router_ts_1.default(this.routes).loadEvents();
    };
    var bootstrap = new App();
    //use window.load for now - dev site loads too fast and doc.ready doesnt work - but it works when not in dev env
    $(window).load(function () {
        console.log("Doc loaded");
        bootstrap.init();
    });
    /** run all functions */
    // $(document).ready(() => {
    //   console.log("Doc loaded");
    //   bootstrap.init();
    // });
})();

/***/ },
/* 5 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var jquery = __webpack_require__(0);
var $ = jquery;
var NavComponent = function NavComponent() {
    this.storeIcon = $('.store-front');
    this.currentPosition = $(window).scrollTop();
};
NavComponent.prototype.checkStore = function checkStore () {
    this.currentPosition = $(window).scrollTop();
    if (this.currentPosition < 200) {
        // remove hidden
        this.storeIcon.removeClass('store-hidden');
    } else {
        // add store-hidden
        this.storeIcon.addClass('store-hidden');
    }
};
NavComponent.prototype.init = function init () {
        var this$1 = this;

    console.log("Nav loaded");
    this.checkStore();
    $(window).on('scroll', function () {
        !window.requestAnimationFrame ? this$1.checkStore.bind(this$1) : window.requestAnimationFrame(this$1.checkStore.bind(this$1));
    });
};
var Nav = new NavComponent();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Nav;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";

var $ = jQuery;
var FormsComponent = function FormsComponent() {
    this.isOpen = false;
    this.svgArray = $('.et2017-contact__svg');
};
FormsComponent.prototype.onInputFocus = function onInputFocus (ev) {
    var parent = $(ev.target).parent();
    this.fillInput(parent);
};
FormsComponent.prototype.fillInput = function fillInput (parentObject) {
    if (!parentObject.hasClass('wpcf7-form-control-wrap')) {
        parentObject.addClass('input--filled');
    } else {
        parentObject.parent().addClass('input--filled');
    }
};
FormsComponent.prototype.emptyInput = function emptyInput (parentObject) {
    if (!parentObject.hasClass('wpcf7-form-control-wrap')) {
        parentObject.removeClass('input--filled');
    } else {
        parentObject.parent().removeClass('input--filled');
    }
};
FormsComponent.prototype.onInputBlur = function onInputBlur (ev) {
    if (ev.target.value.trim() === '') {
        var parent = $(ev.target).parent();
        this.emptyInput(parent);
    }
};
FormsComponent.prototype.trimPrototype = function trimPrototype () {
    // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    if (!String.prototype.trim) {
        (function () {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function () {
                return this.replace(rtrim, '');
            };
        })();
    }
};
FormsComponent.prototype.createEventlistenersforForms = function createEventlistenersforForms () {
        var this$1 = this;

    [].slice.call(document.querySelectorAll('.et-input__field')).forEach(function (inputEl) {
        // in case the input is already filled..
        if (inputEl.value.trim() !== '') {
            // classie.add( inputEl.parentNode, 'input--filled' );
            var parent = $(inputEl).parent();
            this$1.fillInput(parent);
        }
        // events:
        inputEl.addEventListener('focus', this$1.onInputFocus.bind(this$1));
        inputEl.addEventListener('blur', this$1.onInputBlur.bind(this$1));
    });
};
FormsComponent.prototype.isContactPage = function isContactPage () {
    return $('.et2017__contact').length > 0 ? true : false;
};
FormsComponent.prototype.contactFormInit = function contactFormInit () {
    console.log(this.svgArray);
    this.svgArray.on('click', this.svgCheckState.bind(this));
};
FormsComponent.prototype.addSvgAnimation = function addSvgAnimation () {
        var this$1 = this;

    this.svgArray.addClass('envelop-animate-out');
    setTimeout(function () {
        this$1.svgArray.removeClass('pristine');
        this$1.svgArray.addClass('touched');
    }, 300);
};
FormsComponent.prototype.svgCheckState = function svgCheckState () {
    console.log("init contact");
    if (!this.isOpen) {
        //add animation
        this.addSvgAnimation();
        this.isOpen = true;
    }
};
FormsComponent.prototype.init = function init () {
    this.trimPrototype();
    this.createEventlistenersforForms();
    // this.isContactPage() ? this.contactFormInit() : null ;
};
var et_ck_forms = new FormsComponent();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = et_ck_forms;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";

var $ = jQuery;
var SearchComponent = function SearchComponent() {
    this.searchContainer = document.getElementById("et-search-container");
};
SearchComponent.changePlaceholderText = function changePlaceholderText (object, text) {
    if (object) {
        object[0].placeholder = text;
    }
};
SearchComponent.prototype.init = function init () {
    if (this.searchContainer) {
        this.searchInput = this.searchContainer.querySelectorAll('.eltdf-search-field');
    }
    SearchComponent.changePlaceholderText(this.searchInput, "ex: Watercolor Typography");
};
var Search = new SearchComponent();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Search;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var browserCheck_ts_1 = __webpack_require__(2);
var jquery = __webpack_require__(0);
var $ = jquery;
var UtilityComponent = function UtilityComponent() {
    var this$1 = this;

    this._setBreakpoints = function (bps) {
        var arr = [];
        for (var key in bps) {
            if (bps.hasOwnProperty(key)) {
                arr.push(bps[key]);
            }
        }
        return arr.reverse();
    };
    this._checkBreakpoint = function () {
        // make breakpoint event available to all files via the window object
        console.log("check breakpoint on window resize");
        var old_breakpoint = this$1.breakpoint;
        this$1._setBreakpoint();
        if (old_breakpoint !== this$1.breakpoint) {
            $(window).trigger("breakpointChange", this$1.breakpoint);
        }
    };
    this._setBreakpoint = function () {
        // get breakpoint from css
        // console.log($('body').css("z-index"));
        var body = getComputedStyle(document.body),
            zindex = body["z-index"];
        this$1.breakpoint = parseInt(zindex, 10);
    };
    this._setWindowWidth = function () {
        this$1.windowWidth = window.innerWidth;
    };
    this.windowWidth = 0;
    this.breakpoint = 320;
    this.breakpoints = [];
    this.bps = {
        mobile: 544,
        tablet: 768,
        laptop: 992,
        desktop: 1200,
        desktop_xl: 1600
    };
    this.browser = browserCheck_ts_1.default.find();
};
UtilityComponent.prototype.buildHtml = function buildHtml (type, attrs, html) {
    // http://marcgrabanski.com/building-html-in-jquery-and-javascript/
    var h = '<' + type;
    for (var attr in attrs) {
        if (attrs.hasOwnProperty(attr) === false) { continue; }
        h += ' ' + attr + '="' + attrs[attr] + '"';
    }
    return h += html ? ">" + html + "</" + type + ">" : "/>";
};
UtilityComponent.prototype.setNumber = function setNumber (count) {
    // conver number to string
    var total = count;
    return total.toString();
};
UtilityComponent.prototype.init = function init () {
    console.log("Utilities loaded");
    // set breakpoint on window load
    this._setBreakpoint();
    this._setWindowWidth();
    console.log("Current Breakpoint is:", this.breakpoint);
    // console.log(this.browser);
    // create full array for image compression ref
    this.breakpoints = this._setBreakpoints(this.bps);
    $(window).on("resize", this._checkBreakpoint).bind(this);
};
var Utils = new UtilityComponent();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Utils;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";

var $ = jQuery;
/**
 *
 * Font Preview Component
 * ......................
 * Connects to React component using dispatch event trigger
 *
 * */
var ProductsFontPreviewComponent = function ProductsFontPreviewComponent() {
    this.fontPreviewArray = $(".et-font-preview__link");
    this.app = $('#app');
};
ProductsFontPreviewComponent.prototype.addButtonClick = function addButtonClick () {
        var this$1 = this;

    this.fontPreviewArray.each(function (index, el) {
        var elIndex = index;
        $(el).on("click", this$1.buttonClick.bind(this$1));
    });
};
ProductsFontPreviewComponent.prototype.createEvent = function createEvent () {
    this.event = new CustomEvent("fontCheck", {
        detail: {
            message: "Font Component up!",
            time: new Date()
        },
        bubbles: true,
        cancelable: true
    });
};
ProductsFontPreviewComponent.prototype.setData = function setData (data) {
    this.app.attr({
        "data-placeholder": data.placeholder,
        "data-name": data.name,
        "data-styles": data.styles
    });
};
ProductsFontPreviewComponent.prototype.buttonClick = function buttonClick (e) {
    e.preventDefault();
    console.log("fotn button click");
    // Build font attr
    var element = $(e.currentTarget);
    var name = element.data("name");
    var data = {
        placeholder: name + " preview",
        name: name,
        styles: element.data("styles").split(',')
    };
    // pass new data into react app
    this.setData(data);
    // fire event to notify React app to update
    e.currentTarget.dispatchEvent(this.event);
    // open slider
    this.open();
};
ProductsFontPreviewComponent.prototype.open = function open () {
    if (this.isOpen) {
        return;
    } else {
        this.app.addClass("open");
    }
};
ProductsFontPreviewComponent.prototype.close = function close () {
    this.app.removeClass("open");
};
ProductsFontPreviewComponent.prototype.init = function init () {
    this.createEvent();
    this.addButtonClick();
    //delay showing the app for just a sec for safari fix
    setTimeout(function () {
        console.log("Font Preview loaded");
        $('#app').addClass('loaded');
    }, 100);
};
var Products_font_preview_js = new ProductsFontPreviewComponent();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Products_font_preview_js;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";

var $ = jQuery;
var utilities_ts_1 = __webpack_require__(20);
var productStore_ts_1 = __webpack_require__(1);
/**
 *
 * License Select Class
 * ......................
 * Inspired by CodyHouse.co
 *
 * */
var ProductsSelectBtn = function ProductsSelectBtn(index, item) {
    this.cta = $(item);
    this.licenseBox = this.cta.find('.select');
    this.selectBox = this.cta.find('[data-type="select"]');
    this.initialPrice = this.licenseBox.find('.stnd').data('link');
    this.addtoCart = this.cta.find('.add-to-cart');
    this.index = index;
};
ProductsSelectBtn.prototype.setPriceUrl = function setPriceUrl () {
    this.addtoCart.find('a').attr('href', this.initialPrice);
};
ProductsSelectBtn.prototype.onSelectButtonClick = function onSelectButtonClick (e) {
    var $this = $(e.currentTarget); //targets the div wrapper
    //check if another box has been opened
    if (productStore_ts_1.default.state.isOpen) {
        this.resetSelectBox($this);
    }
    //toggle open
    $this.toggleClass('is-open');
    productStore_ts_1.default.state.isOpen = true;
    //target the actual element that was clicked - this gets fired everytime a user clicks, so it doesnt matter
    //because the item you select first is always the active item since only one is shown at a time.
    if ($(e.target).is('li')) {
        //index is kinda a hack to select the item that gets selected by always adding one to the index
        var activeItem = $(e.target),
            index = activeItem.index() + 1; //get position of element clicked relative to its siblings
        //Add active
        activeItem.addClass('active').siblings().removeClass('active');
        //get gumroad data
        this.gumroadLink = $this.find('.active').data('link');
        this.gumroadPrice = $this.find('.active').data('price');
        //determine what index to add and show
        $this.removeClass('selected-1 selected-2 selected-3').addClass('selected-' + index);
        //set gumroad link from LI and set it on the buynow
        $this.siblings('.add-to-cart').find('a').attr('href', this.gumroadLink);
        //Set price
        $this.parents('.et-box-item__description').find('.product-price').text(this.gumroadPrice);
    }
};
ProductsSelectBtn.prototype.resetSelectBox = function resetSelectBox (target) {
    //closes the ul if left open or user is not interacting with them
    target.parents('.et-box-item').siblings('div').find('[data-type="select"]').removeClass('is-open');
};
ProductsSelectBtn.prototype.safariCheck = function safariCheck () {
    if (utilities_ts_1.default.browser === 'safari') {
        var css = {
            '-webkit-transition': '0',
            'transition': '0'
        };
        this.selectBox.find('ul').css(css);
    }
};
ProductsSelectBtn.prototype.initDropdown = function initDropdown () {
    this.safariCheck();
    this.setPriceUrl();
    this.selectBox.on('click', this.onSelectButtonClick.bind(this));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductsSelectBtn;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";

var $ = jQuery;
var product_select_ts_1 = __webpack_require__(11);
var productStore_ts_1 = __webpack_require__(1);
/**
 *
 * License Select Functionality
 * ......................
 * Inspired by CodyHouse.co
 *
 * */
var ProductsLicenseSelect = function ProductsLicenseSelect() {
    this.productContainer = $('.products-cta');
    this.animating = false;
    this.addToCartBtn = $('.add-to-cart');
};
ProductsLicenseSelect.prototype.checkClickArea = function checkClickArea () {
        var this$1 = this;

    $('body').on('click', function (event) {
        //if user clicks outside the .cd-gallery list items - remove the .hover class and close the open ul.size/ul.color list elements
        if (!$(event.target).is('div.select') && !$(event.target).is('li')) {
            if (productStore_ts_1.default.state.isOpen) {
                this$1.closeDropdown();
            }
        }
    });
};
ProductsLicenseSelect.prototype.closeDropdown = function closeDropdown () {
    productStore_ts_1.default.state.isOpen = false;
    this.productContainer.find('[data-type="select"]').removeClass('is-open');
};
ProductsLicenseSelect.prototype.initDropdown = function initDropdown (items) {
    items.each(function (index, el) {
        var btn = new product_select_ts_1.default(index, el);
        btn.initDropdown();
    });
};
ProductsLicenseSelect.prototype.init = function init () {
    this.checkClickArea();
    //initialize
    this.initDropdown(this.productContainer); //loop through all select btns and create dropdown
};
var Products_License_select = new ProductsLicenseSelect();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Products_License_select;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";

var $ = jQuery;
var font_preview_ts_1 = __webpack_require__(10);
var products_license_ts_1 = __webpack_require__(12);
var products_modals_ts_1 = __webpack_require__(14);
var Font_Preview = font_preview_ts_1.default;
var License_Select = products_license_ts_1.default;
var Products_Modals = products_modals_ts_1.default;
var ProductsComponent = function ProductsComponent() {};
ProductsComponent.prototype.init = function init () {
    var isProductPage = $(".et-product-page").length > 0 ? true : false;
    if (isProductPage) {
        console.log("Products Main Loaded");
        Font_Preview.init();
        License_Select.init();
        Products_Modals.init();
    }
};
var Products = new ProductsComponent();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Products;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";

var $ = jQuery;
var ProductsModalsClass = function ProductsModalsClass() {
    this.youtube_btn = document.querySelectorAll('.et-box-item__youtube');
    this.youtube_player = document.getElementById('youtube-player');
    this.window = window;
    this.touched = false;
    this.licenseModal = $('#licenseModal');
    this.licenseModalBtn = $('.licenseModal');
    this.lic_modal_tabContent = this.licenseModal.find('.tab-content');
    this.licenseData = localStorage.getItem('etLicenses');
};
ProductsModalsClass.prototype.addEvents = function addEvents () {
        var this$1 = this;

    //Add youtube button click handlers
    [].slice.call(this.youtube_btn).forEach(function (inputEl) {
        // events:
        inputEl.addEventListener('click', this$1.onYouTubeOpen.bind(this$1));
    });
    $('#et_youtubeModal').on('hidden.bs.modal', this.onYoutubeClose.bind(this));
    //Add License click handlers
    this.licenseModalBtn.on('click', this.onModalOpen.bind(this));
    this.licenseModal.on('hidden.bs.modal', this.onModalClose.bind(this));
};
ProductsModalsClass.prototype.onYouTubeOpen = function onYouTubeOpen (ev) {
        var this$1 = this;

    ev.preventDefault();
    this.youtubeLink = ev.target.parentNode.getAttribute('data-youtube');
    //Add zindex to html elements to add custom Overlay
    this.addZ();
    var popup = document.querySelector('.you-tube-pop');
    //send to modal
    this.setSrc(popup, this.youtubeLink);
    //active modal
    setTimeout(function () {
        // $('.modal-body').addClass('active');
        this$1.addClassElement('.modal-body', 'active');
    }, 300);
    //activate custom overlay
    this.addOverlay();
};
ProductsModalsClass.prototype.addClassElement = function addClassElement (el, className) {
    document.querySelector(el).classList.add(className);
};
ProductsModalsClass.prototype.removeClassElement = function removeClassElement (el, className) {
    document.querySelector(el).classList.remove(className);
};
ProductsModalsClass.prototype.addZ = function addZ () {
    this.addClassElement('.eltdf-content', 'products-zindex');
    this.addClassElement('.eltdf-wrapper', 'products-zindex');
};
ProductsModalsClass.prototype.removeZ = function removeZ () {
    this.removeClassElement('.eltdf-content.products-zindex', 'products-zindex');
    this.removeClassElement('.eltdf-wrapper.products-zindex', 'products-zindex');
};
ProductsModalsClass.prototype.onYoutubeClose = function onYoutubeClose () {
    this.removeClassElement('.modal-body', 'active');
    this.removeOverlay();
};
ProductsModalsClass.prototype.onYoutubeCloseBtn = function onYoutubeCloseBtn () {
    var youtubeModal = document.getElementById('et_youtube_close_modal');
    if (youtubeModal) {
        youtubeModal.addEventListener('click', this.youtubeStopVideo.bind(this));
    }
};
ProductsModalsClass.prototype.youtubeStopVideo = function youtubeStopVideo () {
    var videoSrc = this.youtube_player.getAttribute('src');
    this.youtube_player.setAttribute('src', '');
    this.youtube_player.setAttribute('src', videoSrc);
};
ProductsModalsClass.prototype.addOverlay = function addOverlay () {
    var overlay = document.createElement('div');
    overlay.setAttribute('class', 'et-product-overlay fade');
    overlay.setAttribute('id', 'et-product-overlay');
    //onclick add our own overlay to body
    // $(".eltdf-full-width").append(overlay);
    document.querySelector('.eltdf-full-width').appendChild(overlay);
    //hide sticky header
    // $(".eltdf-sticky-header").addClass("modal-open");
    this.addClassElement('.eltdf-sticky-header', 'modal-open');
    setTimeout(function () {
        $('.et-product-overlay').addClass('in');
    }, 100);
};
ProductsModalsClass.prototype.removeOverlay = function removeOverlay () {
    this.removeZ();
    // $(".lic-overlay").remove();
    var overlay = document.getElementById('et-product-overlay');
    if (overlay) {
        overlay.parentNode.removeChild(overlay);
    }
    //animate sticky header back in
    this.removeClassElement('.eltdf-sticky-header', 'modal-open');
};
ProductsModalsClass.prototype.setSrc = function setSrc (el, value) {
    setTimeout(function () {
        el.setAttribute('src', value);
        // $('.you-tube-pop').attr('src', youtubeLink);
    }, 100);
};
ProductsModalsClass.prototype.onModalClose = function onModalClose () {
    $('body').css({
        width: 'auto',
        position: 'inherit',
        padding: '0'
    });
    $('html').css({
        overflowY: 'scroll'
    });
    this.lic_modal_tabContent.removeClass('active');
    this.removeClassElement('.modal-body', 'active');
    this.removeOverlay();
};
ProductsModalsClass.prototype.animateModalIn = function animateModalIn () {
    this.lic_modal_tabContent.addClass('active');
};
ProductsModalsClass.prototype.onModalOpen = function onModalOpen (e) {
        var this$1 = this;

    e.preventDefault();
    $('body').css({
        padding: '0 15px 0 0'
    });
    $('html').css({
        overflowY: 'hidden'
    });
    function setModalHeight() {
        var height = this.licenseModal.find('.tab-content').height();
        var tabs = this.licenseModal.find('.nav-tabs').height();
        $('#licenseModal .modal-body').height(height + tabs);
        setTimeout(function () {
            $('#licenseModal .modal-body').height('auto');
        }, 300);
    }
    this.asyncDataCall().then(function (data) {
        //remove spinner - content loaded
        $('.modal-loader').css({
            opacity: '0'
        });
        if (this$1.touched) {
            this$1.licenseModal.modal('show');
            this$1.animateModalIn();
        } else {
            $("#standard").html(data.standard);
            $("#extended").html(data.extended);
            this$1.licenseModal.modal('show');
            this$1.animateModalIn();
            this$1.touched = true;
        }
    });
    //Add zindex to html elements to add custom Overlay
    this.addZ();
    //active modal
    setTimeout(function () {
        // $('.modal-body').addClass('active');
        this$1.addClassElement('.modal-body', 'active');
    }, 300);
    //activate custom overlay
    this.addOverlay();
    //activate spinner{
    $('.et-product-overlay').append('<div class="modal-loader"></div>');
};
ProductsModalsClass.prototype.asyncDataCall = function asyncDataCall () {
        var this$1 = this;

    return new Promise(function (resolve, reject) {
        var urlString = this$1.window.et_products.url + '/wp-json/product-licenses/v1/license';
        if (this$1.licenseData !== null) {
            //check if data was just pulled from browser cache
            if (typeof this$1.licenseData === 'string') {
                this$1.licenseData = JSON.parse(this$1.licenseData);
            }
            //returned the cached data
            resolve(this$1.licenseData);
        } else {
            // Make Ajax call
            $.get(urlString).done(function (data) {
                localStorage.setItem('etLicenses', JSON.stringify(data));
                this$1.licenseData = data;
                resolve(this$1.licenseData);
            }).fail(function (status, err) { return reject(status + err.message); });
        }
    });
};
ProductsModalsClass.prototype.init = function init () {
    this.addEvents();
    this.onYoutubeCloseBtn();
};
var Products_Modals = new ProductsModalsClass();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Products_Modals;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var utils_ts_1 = __webpack_require__(9);
var navigation_ts_1 = __webpack_require__(6);
var et_ck_forms_ts_1 = __webpack_require__(7);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    init: function init() {
        // JavaScript to be fired on all pages
        console.log('Init: Common');
    },
    finalize: function finalize() {
        // JavaScript to be fired on all pages, after page specific JS is fired
        console.log('Finalize: Common');
        utils_ts_1.default.init();
        navigation_ts_1.default.init();
        et_ck_forms_ts_1.default.init();
    }
};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var search_ts_1 = __webpack_require__(8);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    init: function init() {
        // JavaScript to be fired on all pages
        console.log('Home: Init');
    },
    finalize: function finalize() {
        // JavaScript to be fired on all pages, after page specific JS is fired
        console.log('Home: Finalize');
        search_ts_1.default.init();
    }
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var products_main_ts_1 = __webpack_require__(13);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    init: function init() {
        // JavaScript to be fired on all pages
        console.log('Products: Init');
    },
    finalize: function finalize() {
        // JavaScript to be fired on all pages, after page specific JS is fired
        console.log('Products: Finalize');
        products_main_ts_1.default.init();
    }
};

/***/ },
/* 18 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (str) { return ("" + (str.charAt(0).toLowerCase()) + (str.replace(/[\W_]/g, '|').split('|').map(function (part) { return ("" + (part.charAt(0).toUpperCase()) + (part.slice(1))); }).join('').slice(1))); };

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 * ======================================================================== */
"use strict";

var camelCase_ts_1 = __webpack_require__(18);
// The routing fires all common scripts, followed by the page specific scripts.
// Add additional events for more control over timing e.g. a finalize event
var Router = function Router(routes) {
    this.routes = routes;
};
Router.prototype.capitalizeFirstLetter = function capitalizeFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
Router.prototype.fire = function fire (route, fn, args) {
        if ( fn === void 0 ) fn = 'init';

    var routeLow = this.capitalizeFirstLetter(route);
    var fire = routeLow !== '' && this.routes[routeLow] && typeof this.routes[routeLow][fn] === 'function';
    if (fire) {
        this.routes[routeLow][fn](args);
    }
};
Router.prototype.matchProps = function matchProps (item) {
    for (var prop in this.routes) {
        if (item === prop.toLowerCase()) {
            return item;
        }
    }
};
Router.prototype.loadEvents = function loadEvents () {
        var this$1 = this;

    // Fire common init JS
    this.fire('common');
    // Fire page-specific init JS, and then finalize JS
    document.body.className.toLowerCase().replace(/-/g, '_').split(/\s+/).map(camelCase_ts_1.default).filter(function (item) { return this$1.matchProps(item); }).forEach(function (className) {
        this$1.fire(className);
        this$1.fire(className, 'finalize');
    });
    // Fire common finalize JS
    this.fire('common', 'finalize');
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Router;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var browserCheck_ts_1 = __webpack_require__(2);
var jquery = __webpack_require__(0);
var $ = jquery;
var UtilityComponent = function UtilityComponent() {
    var this$1 = this;

    this._setBreakpoints = function (bps) {
        var arr = [];
        for (var key in bps) {
            if (bps.hasOwnProperty(key)) {
                arr.push(bps[key]);
            }
        }
        return arr.reverse();
    };
    this._checkBreakpoint = function () {
        // make breakpoint event available to all files via the window object
        console.log("check breakpoint on window resize");
        var old_breakpoint = this$1.breakpoint;
        this$1._setBreakpoint();
        if (old_breakpoint !== this$1.breakpoint) {
            $(window).trigger("breakpointChange", this$1.breakpoint);
        }
    };
    this._setBreakpoint = function () {
        // get breakpoint from css
        // console.log($('body').css("z-index"));
        var body = getComputedStyle(document.body),
            zindex = body["z-index"];
        this$1.breakpoint = parseInt(zindex, 10);
    };
    this._setWindowWidth = function () {
        this$1.windowWidth = window.innerWidth;
    };
    this.windowWidth = 0;
    this.breakpoint = 320;
    this.breakpoints = [];
    this.bps = {
        mobile: 544,
        tablet: 768,
        laptop: 992,
        desktop: 1200,
        desktop_xl: 1600
    };
    this.browser = browserCheck_ts_1.default.find();
};
UtilityComponent.prototype.buildHtml = function buildHtml (type, attrs, html) {
    // http://marcgrabanski.com/building-html-in-jquery-and-javascript/
    var h = '<' + type;
    for (var attr in attrs) {
        if (attrs.hasOwnProperty(attr) === false) { continue; }
        h += ' ' + attr + '="' + attrs[attr] + '"';
    }
    return h += html ? ">" + html + "</" + type + ">" : "/>";
};
UtilityComponent.prototype.setNumber = function setNumber (count) {
    // conver number to string
    var total = count;
    return total.toString();
};
UtilityComponent.prototype.init = function init () {
    console.log("Utilities loaded");
    // set breakpoint on window load
    this._setBreakpoint();
    this._setWindowWidth();
    console.log("Current Breakpoint is:", this.breakpoint);
    // console.log(this.browser);
    // create full array for image compression ref
    this.breakpoints = this._setBreakpoints(this.bps);
    $(window).on("resize", this._checkBreakpoint).bind(this);
};
var Utils = new UtilityComponent();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Utils;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(3);
__webpack_require__(4);
module.exports = __webpack_require__(5);


/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map