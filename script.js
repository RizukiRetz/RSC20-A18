const navbar = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if (top >= 75){
        navbar.classList.add('active');
    }
    else{
        navbar.classList.remove('active');
    }
}

const menuHam = document.querySelector('.menu-icon');
const navLink = document.querySelector('.nav-link');
// window.addEventListener = function() {
//     menuHam.addEventListener('click',function(){

//     })
// }
menuHam.addEventListener("click", toggleHamburger)
function toggleHamburger(){
  navLink.classList.toggle("close");
  menuHam.classList.toggle("fa-times");
  menuHam.classList.toggle("fa-bars");
}

function checkToggle(e){
  var itemClicked = e.target
  if (itemClicked.classList.contains("item-box")) {
    toggleHamburger();
  }
}

menuHam.addEventListener("click", checkToggle);
