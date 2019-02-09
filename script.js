$(document).ready(function() {
  $("#menu").click(function() {
    $(".nav").toggleClass("active");
    $(this).toggleClass('fa-bar');
    $(this).toggleClass('fa-times');
  });
  $("#plus-btn").click(function() {
    $("body").css('font-size', '+=4');
  });
  $("#minus-btn").click(function() {
    $("body").css('font-size', '-=4');
  });


  // スクロールイベント
  $(window).scroll(function() {
    let scrl = $(window).scrollTop();
    const about = $(".about").offset().top;
    if (scrl > about*0.3) {
      $(".about").css({
        opacity:"1",
        transform: "translateY(0)"
      });
    }
  });
});
