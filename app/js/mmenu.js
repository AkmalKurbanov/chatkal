$(document).on('click', '.menu-js', function () {
  $('.menu').removeClass('close');
  $('.menu').addClass('open');
  $('body').addClass('no-scroll');
});

$(document).on('click', '.menu-to-lower-js', function () {
  $(this).parent().find('.lower-level').addClass('show')
});
$(document).on('click', '.menu-to-top-js', function () {
  $(this).parent().parent().removeClass('show');
});

$(document).on('click', '.close-btn-js', function () {
  $('.menu').addClass('close');
  $('.menu').removeClass('open');
  $('body').removeClass('no-scroll');
});