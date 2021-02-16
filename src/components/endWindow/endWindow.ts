import { Button } from '../button/Button';
import { render } from '../../utils/domHandlers';
import { MainScreen } from '../../views/MainScreen';
import { removeElementFromParent } from '../../utils/removeElementFromParent/removeElementFromParent';
import { openStartWindow } from '../../utils/constsTagElementsAndWindows';

export const endWindow = (goodAnserw: String) => {
  const appComponent: HTMLElement = document.getElementById('geo-app')!;
  const wrongAnswersCount = localStorage.getItem('numberOfWrongAnswers');
  const parentDiv = document.createElement('div');
  parentDiv.id = 'end-window';

  parentDiv.innerHTML = `<h1>Koniec gry</h1>
						<p>Rozegrane rundy: <span>${goodAnserw}</span>, Niepoprawne: <span>${wrongAnswersCount}</span></p>
							`;
  localStorage.setItem('numberOfWrongAnswers', '0');

  render(
    Button(
      'Zagraj ponownie',
      () => {
        localStorage.setItem('numberOfWrongAnswers', '0');
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
        localStorage.setItem('numberOfWrongAnswers', '0');
        openStartWindow();
        removeElementFromParent('geo-app', 'end-window');
      },
      'back-to-menu',
      'end-window'
    ),
    parentDiv
  );

  return parentDiv;
};
