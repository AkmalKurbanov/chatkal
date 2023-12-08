$('.search-js').on('click', function () {
  $('.search').addClass('open');
  $('body').addClass('no-scroll')
});

jQuery(function ($) {
  $(document).mouseup(function (e) {
    var div = $('.search');
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      div.removeClass('open');
      $('body').removeClass('no-scroll');
    }
  });
});