$(document).ready(function() {
  // Add spans to the <p> elements
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

// Takes a paragraph and puts spans in each of them. Credit for this idea
// goes to Daniel Tonon (http://stackoverflow.com/a/20850348)
function makeSpans() {
  // For each element
  $("h1, h2, h3, h4, h5, h6, p, li").each(function() {
    // take all the HTML and replace all words with the word
    // encapsulated in spans
    var newStr = $(this).text();
    // newStr.replace(/\w+/g, function replacer(match) {
    //   var r = "<span>" + match + "</span>";
    //   return r;
    // });
    newStr = newStr.replace(/\w+/g, function replacer(match) {
      var r = "<span>" + match + "</span>";
      return r;
    });
    console.log(newStr);

    // empty the original element
    $(this).empty();

    // Make this string the new HTML of the element
    $(this).html(newStr);
  });

}
