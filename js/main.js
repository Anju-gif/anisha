$(document).ready(function(){
  // ripples plugins
  $("#header,.info").ripples({
    dropRadius: 25,
   perturbance: .6,
  
   
 });
//  navbar sticky 

$('.navbar-toggler').click(function(){
  $('.navbar-toggler').toggleclass('change')
})


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// manufic popup plugin 
$('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
    enabled: true
  }
  // other options
});
});



