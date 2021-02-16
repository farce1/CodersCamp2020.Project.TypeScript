import { europeMap } from '../../utils/maps/europe';
import { GameEngine } from '../../app/GameEngine';
import { render } from '../../utils/domHandlers';

export class MapGameScreen {
  constructor(
    private settings: {
      gameContainter: HTMLElement;
      gameMode: string;
      clearViewCallbackFunction: () => void;
    }
  ) {}

  _clearMainContainer(): void {
    this.settings.clearViewCallbackFunction();
  }

  startGame() {
    window.countryGameEngine = new GameEngine();
    this._clearMainContainer();
    this.settings.gameContainter.insertAdjacentHTML('afterbegin', europeMap());
    window.countryGameEngine.startEngine(this.settings.gameContainter);
  }
}
