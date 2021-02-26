window.addEventListener('load', function(){
  new Glider(document.querySelector('.carrousel__lista'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.carrousel__indicadores',
    arrows: {
      prev: '.carrousel__anterior',
      next: '.carrousel__siguiente'
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 800,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
  });
})