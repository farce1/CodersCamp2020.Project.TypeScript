import { ContainerComponent } from './ContainerComponent';
import { render } from '../../utils/domHandlers';

describe('Test ContainerComponent', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="geo-app"></div>';
  });

  it('Should render text correctly', () => {
    const appComponent = document.getElementById('geo-app');
    if (appComponent) {
      render(ContainerComponent('text'), appComponent);
      expect(document.getElementById('container-component')?.innerText).toBe('text');
    }
  });

  it('Should render image correctly', () => {
    const appComponent = document.getElementById('geo-app');
    if (appComponent) {
      render(ContainerComponent('../../assets/images/test.jpg'), appComponent);
      expect(document.getElementById('container-component')?.style.background).toBe(
        'url(../../assets/images/test.jpg) no-repeat'
      );
    }
  });

  it('Should render external component correctly', () => {
    const appComponent = document.getElementById('geo-app');
    const mockedComponent = document.createElement('div');
    mockedComponent.setAttribute('id', 'mocked');

    if (appComponent) {
      render(ContainerComponent(mockedComponent), appComponent);
      expect(document.getElementById('mocked')).toBeTruthy();
    }
  });

  it('Should contain className', () => {
    const appComponent = document.getElementById('geo-app');

    if (appComponent) {
      render(ContainerComponent('label-text', 'testing-class'), appComponent);
      expect(document.getElementById('container-component')?.classList.contains('testing-class')).toBeTruthy();
    }
  });

  it('Should render component in parent component', () => {
    const appComponent = document.getElementById('geo-app');

    if (appComponent) {
      ContainerComponent('label-text', 'testing-class', 'geo-app');
      expect(document.getElementById('geo-app')?.innerHTML).toBe(
        '<div class="testing-class" id="container-component" data-testid="container-component"></div>'
      );
    }
  });
});
