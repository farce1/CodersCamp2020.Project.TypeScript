import { render } from './domHandlers';
import { StartWindow } from '../components/startWindow/StartWindow';
import { Button } from '../components/button/Button';
import { MainScreen } from '../views/MainScreen';
import { removeElementFromParent } from './removeElementFromParent/removeElementFromParent';
import { startWindowAnim } from '../components/startWindow/StartWindowAnim';

export const appComponent: HTMLElement = document.getElementById('geo-app')!;

export const openStartWindow = () => {
  const startWindow = render(
    StartWindow(
      'GeoMind',
      render(
        Button(
          'Zagraj',
          () => {
            render(MainScreen(), appComponent);
            removeElementFromParent('geo-app', 'start-window');
          },
          'btn_class',
          'btn'
        ),
        appComponent
      ),
      'geo-app',
      '../assets/ui/world.png'
    ),
    appComponent
  );
  startWindowAnim('world-img', 'title-box', 'btn-box');
};
