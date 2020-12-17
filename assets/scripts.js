$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $(document).ready(function(){
    /** Set up Carousel */
    $(".owl-carousel").each(function (index) {
      var element = $(this);
      var items_no = element.data('slides') || 3;
      var autoplay = element.data('autoplay') || false;
      var nav = element.data('nav') || false;
      var dots = element.data('dots') || false;
      var slidesMobile = element.data('slides-mobile') || items_no;
      var slidesTablet = element.data('slides-tablet') || items_no;
      var loop = element.data('loop') || false;
      var autoplaySpeed = element.data('autoplay-speed') ||false;
      var autoplayTimeout = element.data('autoplay-speed') ||5000;
      var smartSpeed = element.data('smart-speed') || 1000;
      var autoplayHoverPause = element.data('autoplay-hover-pause') || false;
      var lazyload = element.data('lazyload') || false;
      var navText = ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'];
      if (element.data('custom-nav')){
        navText = ['<i class="fas fa-chevron-circle-left"></i>', '<i class="fas fa-chevron-circle-right"></i>'];
      }
      var sameHeight = element.data('same-height') || false;
      element.owlCarousel({
          autoplay: autoplay,
          nav: nav,
          dots: dots,
          loop: loop,
          autoplaySpeed: autoplaySpeed,
          smartSpeed: smartSpeed,
          autoplayHoverPause: autoplayHoverPause,
          autoplayTimeout: autoplayTimeout,
          navText: navText,
          lazyload: lazyload,
          responsive: {
            0:{
              items: slidesMobile
            },
            768 : {
              items: slidesTablet
            },
            992: {
              items: items_no
            }
          },
          onRefresh: function () {
            if (sameHeight){
              element.find('.owl-item').height('');
            }
          },
          onRefreshed: function () {
            if (sameHeight){
              element.find('.owl-item').height(element.height());
            }
          } 
      });
    });
    /** End of Carousel */
    /** Sticky the header */
    var stickyElem = $(".header__mobile__collapse");
    var observer = new IntersectionObserver(function(e){
        for (let i = 0; i < e.length; i++){
          if (e[i].isIntersecting){
            $("body").toggleClass('is-backdrop', true);
            $("body").append("<div class='header__mobile__backdrop'></div>");
          }
          else{
            $("body").toggleClass('is-backdrop', false);
            $(".header__mobile__backdrop").remove();
          }
        }
      }, {threshold: [0], rootMargin: '-50px 0px -55%'});
    for (let i = 0; i < stickyElem.length; i++){
      observer.observe(stickyElem[i]);
    }
    /** Set up the custom select */
    $(".select-customized").selectmenu({
      classes: {
        "ui-selectmenu-button" : "select-customized__button",
        "ui-selectmenu-menu": "select-customized__dropdown"
      }
    });
    /** Set up the zoom out */
    $("a.img-zoom").zoom();
    /** Set up smooth scroll */
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } // End if
    });
    /** Lazyload */
    lazyload();
  });
});

/** Set up category popup */
function showCategoryPopup(){
  $("#category-popup").modal({
    backdrop: 'static',
    // Prevent click outside to close modal
    keyboard: false
    // Prevnt escape key to close modal
  });
}
/** Handling data for popup goes here*/
$('#category-popup').on('shown.bs.modal	', function (e) {
  // do something...
})
/** End of Set up category popup */