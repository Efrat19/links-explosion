import DragSelect from 'dragselect';
import CursorMask from './CursorMask';

export default class Charge {

    constructor(selectables){
        this.cm = new CursorMask();
        this.ds = new DragSelect({
            selectables,
            multiSelectKeys: ['ctrlKey', 'shiftKey', 'metaKey'],  // special keys that allow multiselection.
            multiSelectMode: false,
            selectorClass: 'expand-drag-selector',
            selectedClass:'shake',
            autoScrollSpeed: 3,
            callback: selected => this.onselectEnd(selected)
        });
        this.selector = null;
    }

    explode(){
        this.cm.mask();
        this.selector = document.querySelector('.expand-drag-selector');
        this.setSelectorStyle();
    }


    setSelectorStyle(){
        const r = Math.floor(Math.random() * (255 - 0 + 1)) ;
        const g = Math.floor(Math.random() * (255 - 0 + 1)) ;
        const b = Math.floor(Math.random() * (255 - 0 + 1)) ;
        this.selector.style.background = `rgba(${r},${g},${b},0.1)`;
        this.selector.style.border = `1px solid rgba(${r},${g},${b},1)`;
    }

    onselectEnd(selected) {
        selected.forEach((link,index) =>{
            link.classList.remove('shake');
        });
        this.selector.parentNode && this.selector.parentNode.removeChild(this.selector);
        this.cm.unmask();
        this.ds.break();
        selected.forEach((link,index) =>{
            window.open(link.href, '_blank');
        });
    }
}


