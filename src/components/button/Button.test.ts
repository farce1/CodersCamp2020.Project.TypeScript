import { render } from '../../utils/domHandlers';
import { Button } from './Button';

const label = 'lorem ipsum';
const prepareAppComponent = (label: string, onClick: () => void, className?: string, parentId?: string) => {
  const appComponent = document.getElementById('geo-app');
  appComponent && render(Button(label, onClick, className, parentId), appComponent);
};

describe('Test Button Component', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="geo-app"></div>';
  });

  it('Should render text correctly', () => {
    prepareAppComponent(label, () => {});
    expect(document.getElementById(`button-${label}`)?.innerText).toBe(label);
  });

  it('Should contain className', () => {
    prepareAppComponent(label, () => {}, 'false-btn');
    expect(document.getElementById(`button-${label}`)?.classList.contains('basic-btn')).toBeTruthy();
    expect(document.getElementById(`button-${label}`)?.classList.contains('false-btn')).toBeTruthy();
  });

  it('Should render component in parent component', () => {
    prepareAppComponent(label, () => {}, 'testing-class', 'geo-app');
    expect(document.getElementById('geo-app')?.innerHTML).toBe(
      `<div id="button-${label}" class="basic-btn testing-class"></div>`
    );
  });

  it('Should handle onClick properly', () => {
    const onClick = jest.fn();
    prepareAppComponent(label, onClick);
    const btn = document.getElementById(`button-${label}`);
    btn?.click();
    expect(onClick).toHaveBeenCalled();
  });
});
