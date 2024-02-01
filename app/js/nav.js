$('.nav-js ul .header__nav-li-parent .header__nav-a-parent').each(function (index) {
  $(this).on('mouseenter', function () {
    $(this).parent().addClass('hover');
    $(this).parent().find('.dropdown').addClass('open');
  });
});
$('.nav-js ul .header__nav-li-parent').each(function (index) {
  $(this).on('mouseleave', function () {
    $(this).removeClass('hover');
    $(this).find('.dropdown').removeClass('open');
  });
});