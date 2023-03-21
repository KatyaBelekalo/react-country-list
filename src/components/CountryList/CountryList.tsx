import React from "react";
import { Country } from "../../types/types";
import { CountryItem } from "../CountryItem/CountryItem";

interface CountryListProps {
  countries: Country[];
}

export const CountryList = ({ countries }: CountryListProps) => {
  return (
    <ul className="list-group">
      {countries.map((country) => (
        <CountryItem countries={country} />
      ))}
    </ul>
  );
};
