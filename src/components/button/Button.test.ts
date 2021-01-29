import { render } from '../../utils/domHandlers';
import { Button } from './Button';

describe('Test Button Component', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="geo-app"></div>';
  });

  it('Should render text correctly', () => {
    const appComponent = document.getElementById('geo-app');
    appComponent &&
      render(
        Button('text', () => {}),
        appComponent
      );
    expect(document.getElementById('button')?.innerText).toBe('text');
  });

  it('Should contain className', () => {
    const appComponent = document.getElementById('geo-app');

    appComponent &&
      render(
        Button('text', () => {}, 'false-btn'),
        appComponent
      );
    expect(document.getElementById('button')?.classList.contains('basic-btn')).toBeTruthy();
    expect(document.getElementById('button')?.classList.contains('false-btn')).toBeTruthy();
  });

  it('Should render component in parent component', () => {
    const appComponent = document.getElementById('geo-app');

    if (appComponent) {
      Button('text', () => {}, 'testing-class', 'geo-app');
      expect(document.getElementById('geo-app')?.innerHTML).toBe(
        '<div id="button" class="basic-btn testing-class"></div>'
      );
    }
  });

  it('Should handle onClick properly', () => {
    const appComponent = document.getElementById('geo-app');
    const onClick = jest.fn();
    appComponent && render(Button('text', onClick), appComponent);
    const btn = document.getElementById('button');
    btn?.click();
    expect(onClick).toHaveBeenCalled();
  });
});
