import { CountryGenerator } from '../utils/api/countryGenerator';
import { Country, GameEngineSettings } from '../../typings/interfaces';
import { getTranslationForCountryName, mapFunctionScript } from '../utils/functions';
import { ContainerComponent } from '../components/containerComponent/ContainerComponent';
import { Button } from '../components/button/Button';
import { removeElementFromParent } from '../utils/removeElementFromParent/removeElementFromParent';
import { appComponent, openStartWindow } from '../utils/constsTagElementsAndWindows';
import { endWindow } from '../components/endWindow/endWindow';
import {render} from "../utils/domHandlers";

const countryLabel = (label: string): string => `Zaznacz na mapie - ${getTranslationForCountryName(label)}`;
const numberOfQuestions = 3;

export class GameEngine {
  constructor() {
    document.addEventListener('klik', this.onCorrectCountryClick.bind(this), false);
    document.addEventListener('badKlik', this.onWrongCountryClick.bind(this), false);
  }
  settings: GameEngineSettings = {
    userProperAnswers: [],
    userWrongAnswers: [],
    countryGenerator: new CountryGenerator(),
    usedCountryGenerator: false,
    countries: [],
    countryToAsk: [],
  };
  currentCountry: Country = { name: 'x', alpha2Code: 'x' };
  currentCountryIndex = 0;

  getCurrentCountry = (): string => this.currentCountry.name;

  setCurrentCountry() {
    if (this.settings.countryGenerator === null) return;
    ++this.currentCountryIndex;

    this.currentCountry = this.settings.countryToAsk[this.currentCountryIndex];
    const countryNameLabel = document.getElementById('container-component');
    if (this.currentCountry !== undefined) {
      countryNameLabel && (countryNameLabel.innerText = countryLabel(this.currentCountry.name));
    } else {
      countryNameLabel && (countryNameLabel.innerText = countryLabel('x'));
      this.reset();
      alert('koniec gry! Tutaj otwórz modal');
      this.currentCountry = { name: 'x', alpha2Code: 'x' };
      countryNameLabel && (countryNameLabel.innerText = countryLabel(this.currentCountry.name));
      //   alert('koniec gry! Tutaj otwórz modal');
      removeElementFromParent('geo-app', 'mainContainer');
      render(endWindow(`${numberOfQuestions}`), appComponent);
    }

    this._addCountryScriptFunction(this.currentCountry);
  }

  onCorrectCountryClick() {
    this.setCurrentCountry();

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
      if (tryingToFindBadAnswersForOneQuestion.length === 3) {
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
    localStorage.clear();
    ContainerComponent(countryLabel(this.currentCountry.name), 'gameTitle', 'europe_map_container');
    Button(
      'Wyjdź z gry',
      () => {
        removeElementFromParent('geo-app', 'mainContainer');
        openStartWindow();
        this.reset();
      },
      'back-btn',
      'europe_map_container'
    );
  }

  async _generateCountry(): Promise<void> {
    const generateRandomUniqueIndexes = (indexesArray: number[] = []): number[] => {
      if (indexesArray.length === 3) {
        return indexesArray;
      }
      const randomNumber = Math.floor(Math.random() * 53);
      if (!indexesArray.includes(randomNumber)) {
        indexesArray.push(randomNumber);
      }
      return generateRandomUniqueIndexes(indexesArray);
    };

    const randomNumbers = generateRandomUniqueIndexes();
    if (
      !this.settings.usedCountryGenerator &&
      this.settings.countryGenerator !== undefined &&
      this.settings.countryGenerator !== null
    ) {
      const countries = await this.settings.countryGenerator.getCountry();
      this.settings.countries = await countries;
      this.settings.usedCountryGenerator = true;
    }

    this.settings.countryToAsk = randomNumbers.map((num: number) => this.settings.countries[num]);
    this.currentCountry = this.settings.countryToAsk[this.currentCountryIndex];
    this._addCountryScriptFunction(this.settings.countryToAsk[this.currentCountryIndex]);
  }

  reset() {
    document.removeEventListener('klik', this.onCorrectCountryClick.bind(this), false);
    document.removeEventListener('badKlik', this.onWrongCountryClick.bind(this), false);
    this.settings.userProperAnswers = [];
    this.settings.userWrongAnswers = [];
    this.settings.countryToAsk = [];
    this.settings.countryGenerator = null;
    this.currentCountryIndex = 0;
  }
}
