$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
$(document).ready(function(){
  $(".owl-carousel").each(function (index) {
    var items_no = $(this).data('slides') || 3;
    var autoplay = $(this).data('autoplay') || false;
      $(this).owlCarousel({ // use $(this)
          items: items_no,
          autoplay: autoplay
      });
  });
});