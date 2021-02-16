import { CountryGenerator } from '../src/utils/api/countryGenerator';

export interface Country {
  name: string;
  alpha2Code: string;
}

export interface CompareWrongAnswers {
  wrongAnswer: string;
  shouldBe: string;
}

export interface GameEngineSettings {
  userProperAnswers: Object[];
  userWrongAnswers: CompareWrongAnswers[];
  countryGenerator: CountryGenerator | null;
  usedCountryGenerator: boolean;
  countries: [];
  countryToAsk: Country[];
}
