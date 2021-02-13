import { CountryGenerator } from '../utils/api/countryGenerator';
import { Country, GameEngineSettings } from '../../typings/interfaces';
import { getTranslationForCountryName, mapFunctionScript } from '../utils/functions';
import { ContainerComponent } from '../components/containerComponent/ContainerComponent';

const countryLabel = async (label: string): Promise<string> =>
  `Zaznacz na mapie - ${getTranslationForCountryName(label)}`;
export class GameEngine {
  settings: GameEngineSettings = {
    userAnswers: [],
    countryGenerator: new CountryGenerator(),
    countryToAsk: [],
  };
  currentCountry: Country = { name: 'x', alpha2Code: 'x' };

  getCurrentCountry(): string {
    return this.currentCountry.name;
  }

  _addCountryScriptFunction(country: Country): void {
    const newScript = document.createElement('script');
    const inlineScript = document.createTextNode(mapFunctionScript(country));
    newScript.appendChild(inlineScript);
    document.getElementsByTagName('head')[0].appendChild(newScript);
  }

  async startEngine(gameCointainer: HTMLElement): Promise<void> {
    await this._generateCountry();
    ContainerComponent(await countryLabel(this.currentCountry.name), 'gameTitle', 'europe_map_container');
  }

  async _generateCountry(): Promise<void> {
    const country: Country = await this.settings.countryGenerator.getCountry();
    this.currentCountry = country;
    this.settings.countryToAsk.push(country);
    this._addCountryScriptFunction(country);
  }
}
