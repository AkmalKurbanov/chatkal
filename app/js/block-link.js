$('.block-link').on('mouseenter', function () {
  $(this).find('.block-link__movable-element').addClass('up').removeClass('down');
});
$('.block-link').on('mouseleave', function () {
  $(this).find('.block-link__movable-element').addClass('down').removeClass('up');
});