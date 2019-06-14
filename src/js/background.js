import '../img/icon-128.png';
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
          // chrome.tabs.update(tabs[0].id, {active: true})
        });
      });
 });