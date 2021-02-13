export const handleStringScenario = (label: string, container: HTMLDivElement): HTMLDivElement => {
  const isImage = /(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(`${label}`);
  if (isImage) {
    container.style.background = `url("${label}") no-repeat`;
  } else {
    container.innerText = label;
  }
  return container;
};

export const mapFunctionScript = (generatedCountryId : string) => `
function notify(evt){
  const fullCountryId = evt.target.id;
  const countryId = fullCountryId.substring(0,2);
  const generatedCountry = '${generatedCountryId}'
  if ('caches' in window){
    alert('Cache available')
}
}
`