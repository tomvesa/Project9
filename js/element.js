export class Elem {
    constructor(selector){
        this.singleEl = document.querySelector(`${selector}`);
        this.multiEl = document.querySelectorAll(`${selector}`);
    }

    addClass(className){
        this.singleEl.classList.add(className);
    }

    addClassToAll(className){
        [...this.multiEl].forEach( item => item.classList.add(className));
    }

    removeClass(className){
        this.singleEl.classList.remove(className);
    }

    removeClassToAll(className){
        [...this.multiEl].forEach( item => item.classList.remove(className));
    }

    imgBackground(url){
        this.singleEl.style.backgroundImage = `linear-gradient( rgba(13, 10, 253, 0.15), rgba(255, 255, 255, 0.40) ), url(${url})`;
    }

    elementTitle(elTitle){
        this.singleEl.querySelector('.card-title').textContent = elTitle;
    }

    getElBySelector(Selector){
        return this.singleEl.querySelector(`${Selector}`);
    }

    getElBySelectorAll(Selector){
        return this.singleEl.querySelectorAll(`${Selector}`);
    }

    elementFocus(){
        //console.log('hello')
      return  this.singleEl.focus();
    }
}

export class InputElement extends Elem{
    constructor(selector){
        super(selector);    
    }

    set value(_value){
        return this.singleEl.value = _value;
    }


}