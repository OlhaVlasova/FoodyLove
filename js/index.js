$(document).ready(function(){
    $(".delightful-slider").slick({
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 2,
        centerPadding: 0,
        rows: 2,
        prevArrow: $(".slider-prew"),
        nextArrow: $(".slider-next"),
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
        ]

    });

    $("#burger").on("click", function() {
        $(".main-menu").toggleClass("open");
        $("body").toggleClass("noScroll");
    });

    $("#nav a").on("click", function() {
        $(".main-menu").removeClass("open");
        $("body").removeClass("noScroll");
    });

    $("#submit").on("click", function() {
        alert("Thanks for your message. We will call you soon!");
    });
  });