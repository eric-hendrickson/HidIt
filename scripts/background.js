chrome.browserAction.onClicked.addListener(function(tab) {
  alert("clicked");
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.reload(tabs[0].id);
  });
});
