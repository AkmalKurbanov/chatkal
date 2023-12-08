$(".dropdown-js").on('click', function () {
  $(this).parent('.dropdown-parent').find('.dropdown').toggleClass('open');

});
$(document).on('click', function (e) {
  if (!$(e.target).closest(".language__selected").length) {
    $('.dropdown').removeClass('open');
  }
  e.stopPropagation();
});