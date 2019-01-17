var wind = $(window);

// Preloader
$(wind).on("load", function () {
    $(".loading").fadeOut(500);
});

//smooth scroll
$('.navbar-nav').singlePageNav({
    speed: 1000,
    currentClass: 'active',
    offset: 80
});

// Navbar scrolling background 
wind.on("scroll", function () {
    var bodyScroll = $(wind).scrollTop(),
        navbar = $(".navbar-default");
    if (bodyScroll > 100) {
        navbar.addClass("nav-scroll");
    } else {
        navbar.removeClass("nav-scroll");
    }
});

// Stellar init
wind.stellar();

// Smooth button scroll
$('.button-scroll').on('click', function () {
    var scrollTo = $(this).attr('data-scrollTo');
    $('body, html').animate({
        "scrollTop": $('#' + scrollTo).offset().top - 80
    }, 1000);
});

// Skills bar animation init
$('.skills-progressbar-item').progressBar({
    shadow: false,
    percentage: true,
    animation: true,
    animateTarget: true,
    barColor: "#181818",
});

// TypedIt init
new TypeIt('#hero-text', {
    strings: ["Designer", "Creator", "Freelancer"],
    speed: 150,
    nextStringDelay: 1500,
    breakLines: false,
    lifeLike: true,
    loop: true
});

// Portfolio gallery init
var portfolioContent = $('.portfolio-content-items');
portfolioContent.mixItUp();

// Button contcat scroll init
$('a[rel="scroll-to-contact"]').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});

// Popup gallery init
$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
            return item.el.attr('title');
        }
    }
});

// Testimonials carousel init
$('.testimonials-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})