import { CountryGenerator } from '../src/utils/api/countryGenerator';

export interface Country {
  name: string;
  alpha2Code: string;
}

export interface GameEngineSettings {
  userProperAnswers: Object[];
  countryGenerator: CountryGenerator;
  countryToAsk: Country[];
}
