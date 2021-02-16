import { europeMap } from '../../utils/maps/europe';
import { GameEngine } from '../../app/GameEngine';
import { render } from '../../utils/domHandlers';

export class MapGameScreen {
  constructor(
    private settings: {
      gameContainter: HTMLElement;
      gameMode: string;
      gameExist: boolean;
      countryGameEngine: any;
      clearViewCallbackFunction: () => void;
    }
  ) {
    this.settings.gameExist = false;
  }

  _clearMainContainer(): void {
    this.settings.clearViewCallbackFunction();
  }

  startGame() {
    if (!this.settings.gameExist) {
      this.settings.countryGameEngine = new GameEngine();
      this.settings.gameExist = true;
    }

    this._clearMainContainer();
    this.settings.gameContainter.insertAdjacentHTML('afterbegin', europeMap());
    this.settings.countryGameEngine.startEngine(this.settings.gameContainter);
  }
}
