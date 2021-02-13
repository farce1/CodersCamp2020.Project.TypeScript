import { CountryGenerator } from "../utils/api/countryGenerator";
import { Country, GameEngineSettings } from '../../typings/interfaces'
import { mapFunctionScript } from "../utils/functions";

export class GameEngine {
    settings: GameEngineSettings = {
        userAnswers: [],
        countryGenerator: new CountryGenerator(),
        countryToAsk: []
    };
    currentCountry: Country = {name: 'x', alpha2Code: 'x'};
    
    _addCountryScriptFunction(countryId: string){
        const newScript = document.createElement("script");
        const inlineScript = document.createTextNode(mapFunctionScript(countryId));
        newScript.appendChild(inlineScript); 
        document.getElementsByTagName('head')[0].appendChild(newScript);
    }
 
    async startEngine() {
      await this._generateCountry(); 
}
  
    async _generateCountry() {
        const country : Country = await this.settings.countryGenerator.getCountry();
        this.currentCountry = country
        this.settings.countryToAsk.push(country);
        this._addCountryScriptFunction(country.alpha2Code.toLowerCase())
      }
    }