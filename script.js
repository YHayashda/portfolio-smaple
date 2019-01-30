$(document).ready(function() {
  $("#menu").click(function() {
    $(".nav").toggleClass("active");
    $(this).toggleClass('fa-bar');
    $(this).toggleClass('fa-times');
  });
  $("#plus-btn").click(function() {
    $("body").css('font-size', '+=8');
  });
  $("#minus-btn").click(function() {
    $("body").css('font-size', '-=8');
  });
});
