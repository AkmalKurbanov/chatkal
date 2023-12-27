$(document).ready(function () {
  $('.tab-js').each(function (index) {
    let $this = $(this);
    let $sliderTabElement = $this.find('.tab__tabs-slide-element');
    let $tab = $(this).find('.tab__tabs li');
    let $tabId = $(this).find('.tab__tabs li.active').attr('data-id');

    $sliderTabElement.css({
      'left': $this.find('li.active').position().left,
      'width': $this.find('li.active').outerWidth(),
    });

    $this.find($tab).on('mouseenter', function (e) {
      let current = $(this);
      let width = current.outerWidth();
      let position = (current.position().left);

      $sliderTabElement.css({
        'left': position,
        'width': width
      });
    });


    $this.find($tab).on('click', function (e) {
      
      let tabIdLi = $(this).attr('data-id');

      $('.tab__tabs li').not(this).removeClass('active');
      $(this).addClass('active');

      $sliderTabElement.css({
        'left': $(this).position().left,
        'width': $(this).outerWidth(),
      });


      $this.find('.tab__content-item').each(function (index) {
        let dataIdContent = $(this).attr('data-id');
        if (dataIdContent == tabIdLi) {
          $(this).addClass('show');
          $(this).removeClass('hide');
        } else {
          $(this).removeClass('show');
          $(this).addClass('hide');
        }
      });

    });
    $this.find($tab).on('mouseleave', function (e) {
      $sliderTabElement.css({
        'left': $this.find('li.active').position().left,
        'width': $this.find('li.active').outerWidth(),
      });

    });


    $this.find('.tab__content-item').each(function (index) {
      if ($this.find('li.active').attr('data-id') == $(this).attr('data-id')) {
        $(this).addClass('show');
      }
    });


  });


});

