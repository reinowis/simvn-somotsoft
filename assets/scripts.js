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
  var stickyElem = $(".header");
//   var observer = new IntersectionObserver(function(e){
//       for (let i = 0; i < e.length; i++){
//         if (!e[i].isIntersecting){
//           $(e[i].target).parents('.header').addClass('is-sticky');
//         }
//         else{
//           if (e[i].target.getBoundingClientRect().top < 0 ) {
//             $(e[i].target).parents('.header').removeClass('is-sticky');
//           }
//         }
//       }
//     }, {threshold: [0], rootMargin: '-50px 0px -55%'});
//   for (let i = 0; i < stickyElem.length; i++){
//     observer.observe(stickyElem[i]);
//   }
// });
