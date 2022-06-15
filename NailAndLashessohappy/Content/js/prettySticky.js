/*!
 * prettySticky - v1 - 2014-10-26
 * https://github.com/moyamiller/prettySticky
 * Copyright (c) 2014 Moya Miller
 */

$(function() {
    //$(window).scroll(function() {
    //    var scroll = $(window).scrollTop() + 90;
    //    var currentArea = $("section").filter(function() {
    //    	return scroll <= $(this).offset().top + $(this).height();
    //    });
    //    $(".nav a").removeClass("selected");
    //    // re write
    //    //$(".nav a[href=#" + currentArea.attr("id") + "]").addClass("selected");

    //    //if ($(window).scrollTop() > 100) {
    //    //    $('nav').addClass("navScroll");
    //    //    $('img.logo').addClass("logoScroll");
    //    //    $('div.menu').addClass("menuScroll");
    //    //} else if ($(window).scrollTop() < 100 ) {
    //    //    $('nav').removeClass("navScroll");
    //    //    $('img.logo').removeClass("logoScroll");
    //    //    $('div.menu').removeClass("menuScroll");
    //    //}
    //});

    $(window).on('scroll', function () {

        if ($(window).scrollTop() >= 100) {
            $('nav').addClass("navScroll");
            //$('.top-nav-nav').css({
            //    'background-color:': 'rgba(255,255,255,0.7)!important'
            //});
        } else if ($(window).scrollTop() < 100 ){
            $('nav').removeClass("navScroll");
            //$('.top-nav-nav').css({
            //    'background-color:': 'rgba(0,0,0,0.0)'
            //});
        }
    });

});

