function cardSwitch(ele, motion) {
  var card = document.getElementById(ele);
  if (motion == 1) {
    card.style.transform = "rotateY(180deg)";
  } else {
    card.style.transform = "rotateY(0deg)";
  }
}

var section = $("li");

function toggleAccordion() {
  section.removeClass("active");
  $(this).addClass("active");
}

section.on("click", toggleAccordion);

$(function () {
  window.setTimeout(function () {
    $("section").css("opacity", "1");
  }, 1000);
  $("div").addClass("default");

  $("div").on("click", function () {
    var e = $("section > div");
    if (e.hasClass("expand")) {
      e.removeClass("expand");
      $(this).addClass("expand");
    } else {
      $(this).addClass("expand");
    }
  });
});

