import { render } from '../utils/domHandlers';
import { MainScreen } from '../views/MainScreen';

export const App = (): void => {
  const appComponent: HTMLElement = document.getElementById('geo-app')!;
  const mainScreen = render(MainScreen(), appComponent);
};
