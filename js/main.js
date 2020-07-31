$(document).ready(function () {
  var sticky = $(".left-container");

  if ($(window).width() <= 991) {
    //sticky.addClass("fixed1");

    $(".slide-navbtn").click(function () {
      $(".left-container").css("margin-left", "0px");
    });
    $(".closebtn").click(function () {
      $(".left-container").css("margin-left", "-300px");
    });
  } else {
    //  sticky.removeClass("fixed1");
  }

  $(".menu-list .menu-item.has-sub a.menu-link").click(function () {
    //slide up all the link lists
    $(".menu-list ul").slideUp();
    //slide down the link list below the h3 clicked - only if its closed
    if (!$(this).next().is(":visible")) {
      $(this).next().slideDown();
    }
  });
});
