import { Button } from '../button/Button';
import { addElementToParent } from '../../utils/addElementToParent/addElementToParent';
import { render } from '../../utils/domHandlers';
import { MainScreen } from '../../views/MainScreen';
import { removeElementFromParent } from '../../utils/removeElementFromParent/removeElementFromParent';
import { openStartWindow } from '../../utils/constsTagElementsAndWindows';

export const endWindow = (goodAnserw: String) => {
  const appComponent: HTMLElement = document.getElementById('geo-app')!;
  const wrongAnswersCount = localStorage.getItem('numberOfWrongAnswers');
  const parentDiv = document.createElement('div');
  parentDiv.id = 'end-window';
  let error = '';
  if (wrongAnswersCount === '1') {
    error = 'błąd';
  } else if (wrongAnswersCount === '2' || wrongAnswersCount === '3' || wrongAnswersCount === '4') {
    error = 'błędy';
  } else {
    error = 'błędów';
  }

  parentDiv.innerHTML = `<h1>Koniec gry</h1>
						<p>Na <span>${goodAnserw}</span> rundy popełniłeś <span>${wrongAnswersCount}</span> ${error}</p>
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
        //   render(StartScreen(), appComponent);
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
