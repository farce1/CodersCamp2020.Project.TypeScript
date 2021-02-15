import { Button } from '../button/Button';
import { addElementToParent } from '../../utils/addElementToParent/addElementToParent';
import { render } from '../../utils/domHandlers';
import { MainScreen } from '../../views/MainScreen';
import { removeElementFromParent } from '../../utils/removeElementFromParent/removeElementFromParent';

export const endWindow = (goodAnserw: String) => {
  const appComponent: HTMLElement = document.getElementById('geo-app')!;
  const wrongAnswers: String | null = localStorage.getItem('numberOfWrongAnswers');
  const parentDiv = document.createElement('div');
  parentDiv.id = 'end-window';
  parentDiv.innerHTML = `<h1>Koniec gry</h1>
						<p>Na <span>${goodAnserw}</span> rundy popełniłeś <span>${wrongAnswers}</span> ${
    wrongAnswers === '1' ? 'błąd' : 'błędów'
  }</p>
							`;

  render(
    Button(
      'Zagraj ponownie',
      () => {
        localStorage.setItem('wrongAnswers', '0');
        render(MainScreen(), appComponent);
        removeElementFromParent('geo-app', 'end-window');
      },
      'play-again',
      'end-window'
    ),
    parentDiv
  );

  render(
    Button(
      'Wróć do menu',
      () => {
        localStorage.setItem('wrongAnswers', '0');
        //   render(StartScreen(), appComponent);
        removeElementFromParent('geo-app', 'end-window');
      },
      'back-to-menu',
      'end-window'
    ),
    parentDiv
  );

  return parentDiv;
};
