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


// dynamically assigning the dates on index
const enddate = "01 August 2024 12:00 PM"
document.getElementById('end-date').innerText = enddate;
const inputs = document.querySelectorAll('.inputTime')

// function for get current and ending time
function time() {
  const end = new Date(enddate)
  const now = new Date()
  const diffrence = end - now;

  if(diffrence < 0)
  {
    return;  //prohibitting minus values in text boxes after time limit exeeds
  }

  inputs[0].value = Math.floor(diffrence / (1000 * 3600 * 24));
  inputs[1].value = Math.floor((diffrence % (1000 * 3600 * 24)) / (1000 * 3600));
  inputs[2].value = Math.floor((diffrence % (1000 * 60 * 60)) / (1000 * 60));
  inputs[3].value = Math.floor((diffrence % (1000 * 60)) / 1000);
}

// innitial call to time function
time()

// refreshes the seconds in output
setInterval(() => {
  time()
},1000);
