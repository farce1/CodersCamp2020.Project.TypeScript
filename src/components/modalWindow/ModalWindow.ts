import { render } from '../../utils/domHandlers';
type component = string | HTMLElement;

export const ModalWindow = (componentToDisplay: component, close: (e:Event) => void): HTMLElement => {
    const ModalWindow = document.createElement('div');
    ModalWindow.classList.add('modal-window-visible');
    const ModalWindowContent = document.createElement('div');
    ModalWindowContent.classList.add('modal-window-content');
    ModalWindow.appendChild(ModalWindowContent);

    if (typeof componentToDisplay === 'string') {
        const elementToDisplay=document.createElement('div');
        elementToDisplay.innerHTML=componentToDisplay;
        ModalWindowContent.appendChild(elementToDisplay);
    } else {
        ModalWindowContent.appendChild(componentToDisplay);
    }
    ModalWindowContent.onclick=function(e){
        close(e);
    }
    return ModalWindow;
}





/*const TestElement = document.createElement('div');
TestElement.classList.add('testElement');
const xbtn=document.createElement('button');
xbtn.classList.add("xbtn");
TestElement.appendChild(xbtn);

const tElement=`<div class="testElement"><button class="xbtn"></button></div>`;



const testFun = (e:Event) => {
    const btn=document.querySelector('.xbtn');
    const mv=document.querySelector('.modal-window-visible');
    const body=document.querySelector('body');
    if(e.target===btn){
    mv.classList.remove('modal-window-visible');
  body.removeChild(mv);
    }

}

let mw=ModalWindow(tElement, testFun);
let body=document.querySelector('body');
if(body){
body.appendChild(mw);
}*/

