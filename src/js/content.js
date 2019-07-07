import Charge from './Charge'

chrome.runtime.onMessage.addListener( (tab,obj,cb) => {
    const charge = new Charge(document.querySelectorAll('a'));
    charge.explode();
});
