import Charge from './Charge'



chrome.runtime.onMessage.addListener( (tab,obj,cb) => {
    const charge = new Charge(document.querySelectorAll('a'));
    charge.explode();
});

// let elem, ds, cm;
//
// function reset() {
//     cm = new CursorMask();
//     ds = getDragSelect();
// }

//
// chrome.runtime.onMessage.addListener( (tab,obj,cb) => {
//     reset();
//     cm.mask();
//     elem = document.querySelector('.expand-drag-selector');
//     console.log(elem);
//     setSelectorStyle(elem);
//     ds.callback = onselectEnd;
// });
//
// function getDragSelect() {
//     const linksList = document.querySelectorAll('a');
//     return new DragSelect({
//         selectables: linksList,
//         multiSelectKeys: ['ctrlKey', 'shiftKey', 'metaKey'],  // special keys that allow multiselection.
//         multiSelectMode: false,
//         selectorClass: 'expand-drag-selector',
//         selectedClass:'shake',
//         autoScrollSpeed: 3
//     });
// }
//
// function setSelectorStyle(selector){
//     const r = Math.floor(Math.random() * (255 - 0 + 1)) ;
//     const g = Math.floor(Math.random() * (255 - 0 + 1)) ;
//     const b = Math.floor(Math.random() * (255 - 0 + 1)) ;
//     selector.style.background = `rgba(${r},${g},${b},0.1)`;
//     selector.style.border = `1px solid rgba(${r},${g},${b},1)`;
// }
//
// function onselectEnd(selected) {
//     console.log('selected',selected);
//     selected.forEach((link,index) =>{
//         link.classList.remove('shake');
//     });
//     cm.unmask();
//     ds.break();
//     elem.parentNode && elem.parentNode.removeChild(elem);
//     selected.forEach((link,index) =>{
//         window.open(link.href, '_blank');
//     });
// }
