const url = 'https://restcountries.eu/rest/v2/region/europe?fields=name;alpha2Code';

export class CountryGenerator {
  async fetchCountries() {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  async getCountry() {
    return await this.fetchCountries();
  }
}
