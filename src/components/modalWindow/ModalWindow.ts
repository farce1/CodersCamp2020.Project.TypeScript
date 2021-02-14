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




