import { MapGameScreen } from './MapGameScreen/MapGameScreen';

export const MainScreen = (): HTMLElement => {
  const container: HTMLElement = document.createElement('section');
  container.classList.add('mainContainer');
  container.id = 'mainContainer';

  const defaultGameModeName = 'EUROPE';

  resetView(container);
  const mapGameScreen = new MapGameScreen({
    gameContainter: container,
    gameMode: defaultGameModeName,
    clearViewCallbackFunction: (): void => {
      //resetView(container);
    },
  });

  mapGameScreen.startGame();

  return container;
};

function resetView(parent: HTMLElement): void {
  parent.innerHTML = '';
}
