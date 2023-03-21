import { CountryApi, Country } from "../types/types";

export const transformCountry = (countries: CountryApi[]): Country[] => {
  return countries.map((country) => {
    return {
      name: country.name.common,
      capital: country.capital[0],
      population: country.population,
      flag: country.flags.svg,
      area: country.area,
      region: country.region,
    };
  });
};
