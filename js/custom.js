
'use strict';
$('.links .icon').click(function () {
  window.console.log('ahmed')
  $('.links > ul').toggleClass('show');
})

$('.links ul li a').click(function () {
  let offsetSec = $('.' + this.id).offset().top;
  $('body, html').animate({
    scrollTop: offsetSec,
  }, 1000);
})