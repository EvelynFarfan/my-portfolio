$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 600) {
    $("#menu").css("display", "block");

  } else {
    $("#menu").css("display", "none");
  }
});
