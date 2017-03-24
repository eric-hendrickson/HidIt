$(document).ready(function() {
  // Add spans to <p> and <li> elements if the extension icon was clicked
  makeSpans();

  // The idea here is that if you click an element, its text opacity goes to
  // 0.0, making it totally transparent. But if you click it again, it goes
  // back to normal
  $("span").on("click", function() {
    if ($(this).hasClass("hideWord")) {
      $(this).removeClass("hideWord hoverOver");
    } else {
      $(this).addClass("hideWord");
    }

  });

  // This allows the user to see a word if it's hidden by hovering the
  // mouse over it, text will turn to dark red and will no longer be opaque
  $("span").hover(
    function() {
      if ($(this).hasClass("hideWord")) {
        $(this).addClass("hoverOver");
      }
    }, function() {
      $(this).removeClass("hoverOver");
    }

  );

});
