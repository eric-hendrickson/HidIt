// Takes a paragraph and puts spans in each of them. Credit for this idea
// goes to Daniel Tonon (http://stackoverflow.com/a/20850348)
function makeSpans() {
  console.log("running");
  // For each element that can be guaranteed to be text
  $("p, li").each(function() {
    // take all the HTML and replace all words with the word
    // encapsulated in spans
    var newStr = $(this).text();

    // wrap every valid word with span tags
    newStr = newStr.replace(/\w+/g, function replacer(match) {
      var r = "<span>" + match + "</span>";
      return r;
    });

    // empty the original element
    $(this).empty();

    // Make this string the new HTML of the element
    $(this).html(newStr);
  });

}
