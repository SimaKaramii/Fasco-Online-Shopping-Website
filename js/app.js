window.addEventListener('resize', function(event){
  var width = document.documentElement.clientWidth;
  console.log('resized' , width);
  if(width>992){
    document.querySelector('.hamburger-init').checked = false;
    document.querySelector('.MenuList').classList.remove('show');
  }
});

//menu
function ShowMenu(input){
  document.querySelector('.MenuList').classList.toggle('show');
}
