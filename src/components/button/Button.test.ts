import { render } from '../../utils/domHandlers';
import { Button } from './Button';

const label = 'lorem ipsum';

describe('Test Button Component', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="geo-app"></div>';
  });

  it('Should render text correctly', () => {
    const appComponent = document.getElementById('geo-app');
    appComponent &&
      render(
        Button(label, () => {}),
        appComponent
      );
    expect(document.getElementById(`button-${label}`)?.innerText).toBe(label);
  });

  it('Should contain className', () => {
    const appComponent = document.getElementById('geo-app');

    appComponent &&
      render(
        Button(label, () => {}, 'false-btn'),
        appComponent
      );
    expect(document.getElementById(`button-${label}`)?.classList.contains('basic-btn')).toBeTruthy();
    expect(document.getElementById(`button-${label}`)?.classList.contains('false-btn')).toBeTruthy();
  });

  it('Should render component in parent component', () => {
    const appComponent = document.getElementById('geo-app');

    if (appComponent) {
      Button(label, () => {}, 'testing-class', 'geo-app');
      expect(document.getElementById('geo-app')?.innerHTML).toBe(
        `<div id="button-${label}" class="basic-btn testing-class"></div>`
      );
    }
  });

  it('Should handle onClick properly', () => {
    const appComponent = document.getElementById('geo-app');
    const onClick = jest.fn();
    appComponent && render(Button(label, onClick), appComponent);
    const btn = document.getElementById(`button-${label}`);
    btn?.click();
    expect(onClick).toHaveBeenCalled();
  });
});
