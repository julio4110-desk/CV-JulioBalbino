$(document).ready(function (){
    document.querySelectorAll('.navbar-nav button').forEach(link =>{
          $(`.${link.className}`).click(function (){
              $('html, body')
              .animate({scrollTop: $(`#${link.className}`).offset().top-200},500,'linear')
          });
    })
});

//document.querySelectorAll("navbar-nav button").forEach(x => (console.log(x)))


var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('nav.navbar').style.top = "0";
  } else {
    document.querySelector('nav.navbar').style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
} 
