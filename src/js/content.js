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

function setSelectorStyle(){
    const elem = document.querySelector('.expand-drag-selector');
    const r = Math.floor(Math.random() * (255 - 0 + 1)) ;
    const g = Math.floor(Math.random() * (255 - 0 + 1)) ;
    const b = Math.floor(Math.random() * (255 - 0 + 1)) ;
    elem.style.background = `rgba(${r},${g},${b},0.1)`;
    elem.style.border = `1px solid rgba(${r},${g},${b},1)`;
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
    setSelectorStyle();

function onselectEnd(selected) {
  setTimeout(()=>{
    cm.unmask();
    ds.break();
    // elem.parentNode && elem.parentNode.removeChild(elem);
    selected.forEach((link,index) =>{
        link.classList.remove('shake');
        link.classList.add('explode');
    });
    setTimeout(()=>{
        selected.forEach((link,index) =>{
            link.classList.remove('explode');
            window.open(link.href, '_blank');
        });
    },1000)
  },500);
}
    ds.callback = onselectEnd;
});