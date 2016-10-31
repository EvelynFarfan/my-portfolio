$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 650) {
    $("#menu").css("display", "block");

  } else {
    $("#menu").css("display", "none");
  }
});
