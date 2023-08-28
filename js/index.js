$(document).ready(function(){
    $('.delightful-slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 2,
        centerPadding: 0,
        rows: 2,
        prevArrow: $(".slider-prew"),
        nextArrow: $(".slider-next"),

    });
  });