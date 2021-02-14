import {ModalWindow} from './ModalWindow'
import { render } from '../../utils/domHandlers';

describe('Test modal Window', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="component"></div>';
  });

  it('Should render string correcly', () => {
    const component = document.getElementById('component');
    if (component) {
        render(ModalWindow('string',(e)=>{}), component);
        expect(document.querySelector('.modal-window-content')?.innerHTML).toBe('<div>string</div>');
    }
  })



  it('Should render HTML element correctly', () => {
    const component = document.getElementById('component');
    const elementToDisplay = document.createElement('div');
    elementToDisplay.setAttribute('id', 'toDisplay');

    if (component) {
    render(ModalWindow(elementToDisplay,(e)=>{}), component);
      expect(document.getElementById('toDisplay')).toBeTruthy();
    }
  });



  it('Should contain class attribute', () => {
    const component = ModalWindow('string',(e)=>{});

    if (component) {
      expect(component.classList.contains('modal-window-visible')).toBeTruthy();
    }
  });
});
