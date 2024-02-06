window.addEventListener('resize', function(){
  var width = document.documentElement.clientWidth;
  if(width>992){
    document.querySelector('.hamburger-init').checked = false;
    document.querySelector('.MenuList').classList.remove('show');
  }
});

//menu
function ShowMenu(){
  document.querySelector('.MenuList').classList.toggle('show');
}

$('.brand').slick({
  dots: false,
  infinite: true,
  speed: 300,
  appendArrows: false,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
