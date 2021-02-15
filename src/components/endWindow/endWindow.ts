import { Button } from '../button/Button';
import { addElementToParent } from '../../utils/addElementToParent/addElementToParent';

export const endWindow = (goodAnserw: String) => {
  const wrongAnswers: String | null = localStorage.getItem('wrongAnswers');
  const parentDiv = document.createElement('div');
  parentDiv.id = 'end-window';
  parentDiv.innerHTML = `<h1>Koniec gry</h1>
						<p>Na <span>${goodAnserw}</span> wskazanych kraji popełniłeś <span>${wrongAnswers}</span> błędów</p>
							`;
  const button = Button('Zagraj ponownie', () => {}, 'play-again', 'end-window');
  addElementToParent('end-window', button);
  return parentDiv;
};
