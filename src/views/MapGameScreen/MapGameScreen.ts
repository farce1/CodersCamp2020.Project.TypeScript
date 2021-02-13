import { europeMap } from '../../utils/maps/europe';
import { GameEngine } from '../../app/GameEngine';

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
    const countryGameEngine = new GameEngine();
    this._clearMainContainer();
    this.settings.gameContainter.insertAdjacentHTML('afterbegin', europeMap());
    countryGameEngine.startEngine(this.settings.gameContainter);
  }
}