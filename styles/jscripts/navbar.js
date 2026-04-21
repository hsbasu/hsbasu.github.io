// navbar.js
$(function() {
  $("#myTopnav").load("/navbar.html");
});

function topnavbar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  }
  else {
    x.className = "topnav";
  }
}
