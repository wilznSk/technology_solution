/* Para el Scroll y controla el menu head */
window.onscroll = function() {myFunction()};
var header = document.getElementById("header");
//var sticky = header.offsetTop;
var sticky = 50;

function myFunction() {

  if (window.pageYOffset > sticky) {

    $("header").addClass("sticky");
    $(".navbar-brand").removeClass("fs-2").addClass("fs-5");
    $(".logo").hide();

  } else {

    $("header").removeClass("sticky");
    $(".navbar-brand").removeClass("fs-5").addClass("fs-2");
    $(".logo").show();

  }

}



$(document).ready(function () {
    $('.carousel').carousel({
      interval: 3500,
    });
  });