import '../img/128.png';
import '../img/64.png';
import '../img/48.png';
import '../img/32.png';
import '../img/16.png';
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
          // chrome.tabs.update(tabs[0].id, {active: true})
        });
      });
 });