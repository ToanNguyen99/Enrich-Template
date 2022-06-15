
"use strict"
jQuery(document).ready(function () {
    jQuery('body').addClass("home page-template page-template-full-width page-template-full-width-php page page-id-24 dalia-core-1.3 dalia child-child-ver-1.0.1 dalia-ver-1.3 eltdf-grid-1300 eltdf-empty-google-api eltdf-wide-dropdown-menu-content-in-grid eltdf-dark-header eltdf-sticky-header-on-scroll-down-up eltdf-dropdown-animate-height eltdf-header-standard eltdf-menu-area-in-grid-shadow-disable eltdf-menu-area-in-grid-border-disable eltdf-logo-area-border-disable eltdf-side-menu-slide-from-right eltdf-default-mobile-header eltdf-sticky-up-mobile-header eltdf-header-top-enabled eltdf-search-covers-header wpb-js-composer js-comp-ver-6.1 vc_responsive");
});

jQuery('.eltdf-side-menu-button-opener').click(function (e) {
    e.preventDefault();
    jQuery('body').addClass('eltdf-right-side-menu-opened');
    
})
jQuery('.eltdf-close-side-menu').click(function (e) {
    e.preventDefault();
    jQuery('body').removeClass('eltdf-right-side-menu-opened');
})

jQuery('.eltdf-cover').click(function (e) {
    e.preventDefault();
    jQuery('body').removeClass('eltdf-right-side-menu-opened');
})