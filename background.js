chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'window.dispatchEvent(new Event("mouseTouchToggle"));',
  });
});
