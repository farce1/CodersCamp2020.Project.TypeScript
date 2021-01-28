import { render } from '../utils/domHandlers';
import { MainScreen } from '../views/MainScreen';
import {Button} from "../components/button/Button";

export const App = (): void => {
  const appComponent: HTMLElement = document.getElementById('geo-app')!;
  const mainScreen = render(MainScreen(), appComponent);
  const button = render(Button('baton'), mainScreen);
};
