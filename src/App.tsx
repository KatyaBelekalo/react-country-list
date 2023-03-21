import React from "react";
import { CountryList } from "./components/CountryList/CountryList";
import countries from "./country-data.json";
import { transformCountry } from "./mappers/transformCountries";

export const App = () => {
  const transformedCountries = transformCountry(countries);
  return (
    <div className="container">
      <h1 className="p-1">Country List</h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
};
