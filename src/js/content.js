import DragSelect from 'dragselect';
import CursorMask from './CursorMask';

function exlpodeElement(element){
    return new Promise(res=>{
        element.animate([
            // keyframes
            { transform: 'translateY(0px)' }, 
            { transform: 'translateY(-300px)' }
          ], { 
            // timing options
            duration: 1000,
            iterations: Infinity
          });
    })
}

chrome.runtime.onMessage.addListener( (tab,obj,cb) => {
    const cm = new CursorMask();
    cm.mask();
    var linksList = document.querySelectorAll('a');

    const ds = new DragSelect({
        selectables: linksList,
        multiSelectKeys: ['ctrlKey', 'shiftKey', 'metaKey'],  // special keys that allow multiselection.
        multiSelectMode: false,
        selectorClass: 'expand-drag-selector',
        selectedClass:'shake',
        autoScrollSpeed: 3
    });

    const elem = document.querySelector('.expand-drag-selector');
    elem.style.background = 'rgba(0, 255, 0, 0.1)';


    function onselectEnd(linksList) {
        debugger;
        linksList.forEach((link,index) =>{
            window.open(link.href, '_blank');
        });
        cm.unmask();
        ds.break();
        elem.parentNode && elem.parentNode.removeChild(elem);
    }

    ds.callback = onselectEnd;
});