import '../img/128.png';
import '../img/64.png';
import '../img/48.png';
import '../img/32.png';
import '../img/16.png';
chrome.browserAction.onClicked.addListener( tab => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {}, response => {
        });
      });
 });
