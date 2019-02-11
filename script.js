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
    if (scrl > about*0.25) {
      $(".about").css({
        opacity:"1",
        transform: "translateY(0)"
      });
    }
    const works = $(".Works").offset().top;
    if (scrl > works*0.5) {
      $(".Works").css({
        opacity:"1",
        transform: "translateY(0)"
      });
    }
    const education = $(".Education").offset().top;
    if (scrl > education*0.6) {
      $(".Education").css({
        opacity:"1",
        transform: "translateY(0)"
      });
    }
    const Experience = $(".Experience").offset().top;
    if (scrl > Experience*0.8) {
      $(".Experience").css({
        opacity:"1",
        transform: "translateY(0)"
      });
    }
    const contact = $(".contact").offset().top;
    if (scrl > contact*0.8) {
      $(".contact").css({
        opacity:"1",
        transform: "translateY(0)"
      });
    }
  });
});
