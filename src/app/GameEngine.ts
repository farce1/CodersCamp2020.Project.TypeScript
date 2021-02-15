import { CountryGenerator } from '../utils/api/countryGenerator';
import { Country, GameEngineSettings } from '../../typings/interfaces';
import { getTranslationForCountryName, mapFunctionScript } from '../utils/functions';
import { ContainerComponent } from '../components/containerComponent/ContainerComponent';

const countryLabel = (label: string): string => `Zaznacz na mapie - ${getTranslationForCountryName(label)}`;
export class GameEngine {
  constructor() {
    document.addEventListener('klik', this.onCountryClick.bind(this), false);
    document.addEventListener('badKlik', this.onWrongCountryClick.bind(this), false);
  }
  settings: GameEngineSettings = {
    userProperAnswers: [],
    userWrongAnswers: [],
    countryGenerator: new CountryGenerator(),
    countryToAsk: [],
  };
  currentCountry: Country = { name: 'x', alpha2Code: 'x' };
  currentCountryIndex = 0;

  getCurrentCountry(): string {
    return this.currentCountry.name;
  }

  setCurrentCountry() {
    ++this.currentCountryIndex;
    this.currentCountry = this.settings.countryToAsk[this.currentCountryIndex];
    const countryNameLabel = document.getElementById('container-component');
    countryNameLabel && (countryNameLabel.innerText = countryLabel(this.currentCountry.name));
    this._addCountryScriptFunction(this.currentCountry);
  }

  onCountryClick() {
    this.setCurrentCountry();
    // proper answers
    if (this.settings.userProperAnswers.length !== 0) {
      const isAlreadyInLocalStorage: boolean = this.settings.userProperAnswers.every(userProperAnswer => {
        return userProperAnswer === localStorage.goodAnswers;
      });
      if (isAlreadyInLocalStorage) {
        return;
      } else {
        this.settings.userProperAnswers = [...this.settings.userProperAnswers, localStorage.goodAnswers];
      }
    } else {
      this.settings.userProperAnswers = [localStorage.goodAnswers];
    }
  }
  onWrongCountryClick() {
    this.settings.userWrongAnswers = [
      ...this.settings.userWrongAnswers,
      { wrongAnswer: localStorage.wrongAnswers, shouldBe: localStorage.shouldBe },
    ];
    if (this.settings.userWrongAnswers.length >= 3) {
      const indexOfLlastOneBadAnswer = this.settings.userWrongAnswers.length - 1;
      const oneQuestion = this.settings.userWrongAnswers[indexOfLlastOneBadAnswer].shouldBe;
      const tryingToFindBadAnswersForOneQuestion = this.settings.userWrongAnswers.filter((wrongAnswer, i) => {
        return wrongAnswer.shouldBe === oneQuestion;
      });
      if(tryingToFindBadAnswersForOneQuestion.length === 3){
        this.setCurrentCountry();
      }
    }
  }
  _addCountryScriptFunction(country: Country): void {
    const newScript = document.createElement('script');
    const inlineScript = document.createTextNode(mapFunctionScript(country));
    newScript.appendChild(inlineScript);
    document.getElementsByTagName('head')[0].appendChild(newScript);
  }

  async startEngine(gameCointainer: HTMLElement): Promise<void> {
    await this._generateCountry();
    ContainerComponent(countryLabel(this.currentCountry.name), 'gameTitle', 'europe_map_container');
  }

  async _generateCountry(): Promise<void> {
    const generateRandomUniqueIndexes = (indexesArray: number[] = []): number[] => {
      if (indexesArray.length === 24) {
        return indexesArray;
      }
      const randomNumber = Math.floor(Math.random() * 53);
      if (!indexesArray.includes(randomNumber)) {
        indexesArray.push(randomNumber);
      }
      return generateRandomUniqueIndexes(indexesArray);
    };

    const randomNumbers = generateRandomUniqueIndexes();
    const countries = await this.settings.countryGenerator.getCountry();

    this.settings.countryToAsk = randomNumbers.map((num: number) => countries[num]);
    this.currentCountry = this.settings.countryToAsk[0];
    this._addCountryScriptFunction(this.settings.countryToAsk[0]);
  }
}
