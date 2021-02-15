
import '@testing-library/jest-dom';
import { render } from '../../utils/domHandlers';
import { StartWindow } from './StartWindow';
import { Button } from '../button/Button';
import { getByTestId } from '@testing-library/dom';
import { MainScreen } from '../../views/MainScreen';

describe('Test Start Window component', () => {
  beforeAll(() => {
    document.body.innerHTML = ` <div id="geo-app"></div>`;
    const appComponent: HTMLElement = document.getElementById('geo-app')!;
    const buttonElement = Button('Zagraj', ()=>{}, 'btn', 'start-window')
    const startWindowElement = StartWindow('GeoMind', buttonElement, 'geo-app', '../../../static/assets/ui/world.png')
    const mainScreen: HTMLElement = render(MainScreen(), appComponent);
    render(startWindowElement, mainScreen);
  });

  it('should render properly', () => {
    expect(getByTestId(document.documentElement, 'start-window')).toBeInTheDocument();
  });
  it('should have by default class name', ()=>{
    expect(document.getElementById('start-window')?.classList.contains('start-window')).toBeTruthy();
  })

})
