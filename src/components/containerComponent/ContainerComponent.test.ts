import { ContainerComponent } from './ContainerComponent';
import { render } from '../../utils/domHandlers';

describe('Test ContainerComponent', () => {
  beforeAll(() => {
    document.body.innerHTML = `<div id="geo-app"></div>`;
  });
  it('Should render text correctly', () => {
    const appComponent = document.getElementById('geo-app');
    if (appComponent) {
      render(ContainerComponent('text'), appComponent);
      expect(document.getElementById('container-component')?.innerText).toBe('text');
    }
  });

  it('Should render image correctly', () => {});

  it('Should render external component correctly', () => {});

  it('Should contain className', () => {});

  it('Should render component in parent component', () => {});
});
