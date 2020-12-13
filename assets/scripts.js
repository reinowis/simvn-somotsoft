$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
$(document).ready(function(){
  /** Set up Carousel */
  $(".owl-carousel").each(function (index) {
    var items_no = $(this).data('slides') || 3;
    var autoplay = $(this).data('autoplay') || false;
    var nav = $(this).data('nav') || false;
    var dots = $(this).data('dots') || false;
    var slidesMobile = $(this).data('slides-mobile') || items_no;
    var slidesTablet = $(this).data('slides-tablet') || items_no;
    var loop = $(this).data('loop') || false;
      $(this).owlCarousel({ // use $(this)
          autoplay: autoplay,
          nav: nav,
          dots: dots,
          loop: loop,
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
          }
      });
  });
  /** End of Carousel */
  /** Sticky the header */
  // get the sticky element
});
const stickyElm = document.querySelector('header');

  const observer = new IntersectionObserver(function(e){
    for (let i = 0; i < e.length; i++){
      $(e[i].target).toggleClass('is-sticky', e[0].intersectionRatio < 1);
    }
  }, {threshold: [0]});
  observer.observe(stickyElm);