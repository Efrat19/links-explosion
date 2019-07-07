
export default class CursorMask {
    constructor() {
        this.maskCur = 'crosshair';
        this.saveState = [];
    }
    mask() {
        const elements = document.getElementsByTagName('*');
        Object.keys(elements).forEach((key, index) => {
            this.saveState.push(elements[key].style.cursor);
            elements[key].style.cursor = this.maskCur;
        })
    }
    unmask() {
        const elements = document.getElementsByTagName('*');
        Object.keys(elements).forEach((key, index) => {
            elements[key].style.cursor = this.saveState[index]
        })
    }
}
