$(".leftArrow").on("click", function () {
  $(".center").slick("slickPrev");
});

$(".rightArrow").on("click", function () {
  $(".center").slick("slickNext");
});

var $status = $('.slide-count');
var $slickElement = $('.center');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + ' / ' + slick.slideCount);
});

$('.center').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 1,
  arrows: false,
  infinite: false,
  
  //autoplay: true,
  //autoplaySpeed: '3000',
  //appendArrows: '.my-arrows',
  //lazyLoad: 'ondemand',
  //slidesToShow: 2,
  //slidesToScroll: 1,
});
