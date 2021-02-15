import { render } from '../utils/domHandlers';
import { MainScreen } from '../views/MainScreen';
import { StartWindow} from '../components/startWindow/StartWindow';
import Title from '../components/Title/Title';
import { Button } from '../components/button/Button'
import { removeElementFromParent } from '../utils/removeElementFromParent/removeElementFromParent'
import { startWindowAnim } from '../components/startWindow/StartWindowAnim';


export const App = (): void => {
  const appComponent: HTMLElement = document.getElementById('geo-app')!;

  const startWindow = render(StartWindow('GeoMind',
    render(Button('Zagraj', ()=>{render(MainScreen(), appComponent)
      removeElementFromParent('geo-app', 'start-window')}, 'btn_class', 'btn'), appComponent),
    'geo-app', '../assets/ui/world.png'), appComponent)
  startWindowAnim('world-img', 'title-box', 'btn-box')

  //const title = render(Title('GeoMind', 'title', 'title'), appComponent)
  //const mainScreen = render(MainScreen(), appComponent);
};
