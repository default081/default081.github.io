$(function () {

    "use strict";
    var wind = $(window);

    //smooth scroll
    $('.navbar-nav, .contact-scroll').singlePageNav({
        speed: 1000,
        currentClass: 'active',
        offset: 80
    });

    // navbar scrolling background
    wind.on("scroll", function () {
        var bodyScroll = $(window).scrollTop(),
            navbar = $(".navbar-default");
        if (bodyScroll > 100) {
            navbar.addClass("nav-scroll");
        } else {
            navbar.removeClass("nav-scroll");
        }
    });

    // stellar
    wind.stellar();

    //smooth button scroll
    $('.button-scroll').on('click', function () {
        var scrollTo = $(this).attr('data-scrollTo');
        $('body, html').animate({
            "scrollTop": $('#' + scrollTo).offset().top - 80
        }, 1000);
    });
});

// Skills bar animation settings
$('.skills-progressbar-item').progressBar({
    shadow: false,
    percentage: true,
    animation: true,
    animateTarget: true,
    barColor: "#181818",
});

new TypeIt('#hero-text', {
    strings: ["Designer", "Programmer", "Freelancer"],
    speed: 150,
    nextStringDelay: 1500,
    breakLines: false,
    lifeLike: true,
    loop: true
});

// Preloader
$(window).on("load", function () {
    $(".loading").fadeOut(500);
});


var portfolioContent = $('.portfolio-content-items');
portfolioContent.mixItUp();

$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
            return item.el.attr('title');
        }
    }
});

$('.testimonials-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


new WOW().init();
