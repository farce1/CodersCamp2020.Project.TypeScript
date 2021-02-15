import { Country } from '../../typings/interfaces';
import { translationCountryMap } from './consts';

export const handleStringScenario = (label: string, container: HTMLDivElement): HTMLDivElement => {
  const isImage = /(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(`${label}`);
  if (isImage) {
    container.style.background = `url("${label}") no-repeat`;
  } else {
    container.innerText = label;
  }
  return container;
};

export const getTranslationForCountryName = (countryName: string): string => {
  const translation = translationCountryMap.find(x => x.name_en === countryName);
  return translation?.name_pl || countryName;
};

export const mapFunctionScript = ({ name, alpha2Code }: Country) => `
function notify(evt){
  const fullCountryId = evt.target.id;
  const countryId = fullCountryId.substring(0,2);
  const generatedCountry = '${alpha2Code.toLowerCase()}'
  const goodAnswers = [];
  const wrongAnswers=[];
  const shouldBe = generatedCountry;
  const event =  new CustomEvent("klik");
  const bad_event =  new CustomEvent("badKlik");
  
  if (countryId === generatedCountry) {
    evt.target.style.fill = '#96bb7c';
    goodAnswers.push(countryId)
    localStorage.setItem("goodAnswers", goodAnswers)
    alert('Świetnie! Poprawnie wskazałeś - ${name}')
    document.dispatchEvent(event); 
} else {
    wrongAnswers.push(countryId)
    localStorage.setItem("wrongAnswers", wrongAnswers)
    localStorage.setItem("shouldBe", generatedCountry)
    document.dispatchEvent(bad_event); 
  alert('ZŁA ODPOWIEDŹ - SPRÓBUJ ZNOWU')
}
}
`;
