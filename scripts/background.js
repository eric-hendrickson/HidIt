var b = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  alert("clicked");

  if (!b) {
    // Reloads the page
    chrome.tabs.executeScript(null, {file: "scripts/content.js"});
    b = true;
  } else {
    b = false;
    chrome.tabs.reload();
  }
});
