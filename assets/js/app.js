$.material.init();
$(".navbar-form select").dropdown();
$(".genre-filter select").dropdown();
$('.container img').imgLazyLoad({
   container: window,
   effect: 'fadeIn',
   speed: 600,
   delay: 400,
   callback: function(){}
});
$('[data-toggle="tooltip"]').tooltip();
$("#back-top").hide();
$(function () {
  $('span.bigstars').bigstars();
  $('span.stars').stars();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();
    }
  });
  $('#back-top a').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});
$(document).ready(function() {
// $(".fancybox").fancybox();
  if ($().jcarousel) {
    $(window).bind('load resize', function() {
      $('.fcarousel-6').deCarousel();
      $('.fcarousel-5').deCarousel();
    });
    $('.jcarousel').jcarousel({
      wrap: 'circular'
    });
    $('.jcarousel').jcarouselAutoscroll({
      target: '+=3',
      interval: 4000,
      autostart: true
    });
    $('.carousel-clip').jcarousel({
      vertical: true,
      wrap: 'circular'
    });
    $('.carousel-prev').jcarouselControl({
      target: '-=4'
    });
    $('.carousel-next').jcarouselControl({
      target: '+=4'
    });
  };
});
