$('.accordion-js').on('click', function () {
  $(this).parent().toggleClass('open');
  $(this).parent().find('.accordion__text').slideToggle();
});