import DragSelect from 'dragselect';
import CursorMask from './CursorMask';

function setSelectorStyle(selector){
    const r = Math.floor(Math.random() * (255 - 0 + 1)) ;
    const g = Math.floor(Math.random() * (255 - 0 + 1)) ;
    const b = Math.floor(Math.random() * (255 - 0 + 1)) ;
    selector.style.background = `rgba(${r},${g},${b},0.1)`;
    selector.style.border = `1px solid rgba(${r},${g},${b},1)`;
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
    setSelectorStyle(elem);

function onselectEnd(selected) {
    selected.forEach((link,index) =>{
        link.classList.remove('shake');
    });
    cm.unmask();
    ds.break();
    elem.parentNode && elem.parentNode.removeChild(elem);
        selected.forEach((link,index) =>{
            window.open(link.href, '_blank');
        });
}
    ds.callback = onselectEnd;
});