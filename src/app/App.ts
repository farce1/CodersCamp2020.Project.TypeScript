import { render } from '../utils/domHandlers';
import { MainScreen } from '../views/MainScreen';
import { ContainerComponent } from '../components/containerComponent/ContainerComponent';
const image = require('../assets/images/test.jpg');
export const App = (): void => {
  const appComponent: HTMLElement = document.getElementById('geo-app')!;
  const mainScreen = render(MainScreen(), appComponent);
  const testContainerComponent = render(ContainerComponent(image, '', 'img'), mainScreen);
};
