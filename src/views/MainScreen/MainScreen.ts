import Title from '../../components/Title/Title';

import logo from '../../assets/img/swiat.png';
import { Button } from '../../components/button/Button';
import RulesSelect from '../../components/rulesSelect/RulesSelect';
export const MainScreen = (startGame: VoidFunction): HTMLDivElement => {
  const mainScreen = document.createElement('div');
  mainScreen.appendChild(Title('GeoMind', 'animatedTitle'));
  mainScreen.setAttribute('data-testid', 'mainScreenTestId');
  const animatedLogoWrapper: HTMLDivElement = document.createElement('div');
  animatedLogoWrapper.className = 'logo__wrapper';
  const animatedLogo: HTMLImageElement = document.createElement('img');
  animatedLogo.src = logo;
  animatedLogo.className = 'animated-logo';
  animatedLogoWrapper.appendChild(animatedLogo);
  mainScreen.appendChild(animatedLogoWrapper);
  const textWrapperTemplate = `
    <label>O aplikacji: </label>
    <p>GeoMind</p>
    <label>Zasady Gry: </label>
    <p>Po naciśnięciu na odpowiednią strzałkę zobaczysz zasady dla wybranego trybu gry</p>`;
  const textWrapper: HTMLDivElement = document.createElement('div');
  textWrapper.className = 'rules__wrapper';
  textWrapper.innerHTML = textWrapperTemplate;

  mainScreen.appendChild(textWrapper);
  const buttonsWrapper: HTMLDivElement = document.createElement('div');
  buttonsWrapper.className = 'main-screen_buttons-wrapper';
  const handleRulesChange = (rules: string) => {
    textWrapper.children[3].textContent = rules;
  };
  mainScreen.appendChild(buttonsWrapper);
  buttonsWrapper.appendChild(Button('Prawda/Fałsz', () => startGame(), 'main-screen__button'));

  buttonsWrapper.appendChild(RulesSelect(handleRulesChange));
  buttonsWrapper.appendChild(Button('Wskaż na mapie', () => startGame(), 'main-screen__button'));

  return mainScreen;
};
