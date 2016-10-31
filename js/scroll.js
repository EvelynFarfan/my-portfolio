$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 658) {
    $("#menu").css("display", "block");

  } else {
    $("#menu").css("display", "none");
  }
});
