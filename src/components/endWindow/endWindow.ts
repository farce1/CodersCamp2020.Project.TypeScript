import { Button } from '../button/Button';
import { addElementToParent } from '../../utils/addElementToParent/addElementToParent';
import { render } from '../../utils/domHandlers';
import { MainScreen } from '../../views/MainScreen';
import { removeElementFromParent } from '../../utils/removeElementFromParent/removeElementFromParent';

export const endWindow = (goodAnserw: String) => {
  const appComponent: HTMLElement = document.getElementById('geo-app')!;
  const wrongAnswers: String | null = localStorage.getItem('wrongAnswers');
  const parentDiv = document.createElement('div');
  parentDiv.id = 'end-window';
  parentDiv.innerHTML = `<h1>Koniec gry</h1>
						<p>Na <span>${goodAnserw}</span> wskazanych kraji popełniłeś <span>${wrongAnswers}</span> błędów</p>
							`;
  const buttonPlayAgain = Button(
    'Zagraj ponownie',
    () => {
      localStorage.setItem('wrongAnswers', '0');
      render(MainScreen(), appComponent);
      removeElementFromParent('geo-app', 'end-window');
    },
    'play-again',
    'end-window'
  );

  const buttonBackToMenu = Button(
    'Wróć do menu',
    () => {
      localStorage.setItem('wrongAnswers', '0');
      //   render(StartScreen(), appComponent);
      removeElementFromParent('geo-app', 'end-window');
    },
    'back-to-menu',
    'end-window'
  );

  addElementToParent('end-window', buttonPlayAgain);
  addElementToParent('end-window', buttonBackToMenu);
  return parentDiv;
};
