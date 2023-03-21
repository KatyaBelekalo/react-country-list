import React from "react";
import { Country } from "../../types/types";
import { Badge } from "../Badge/Badge";

interface CountryItemProps {
  countries: Country;
}

export const CountryItem = ({
  countries: { name, capital, flag, population, region, area },
}: CountryItemProps) => {
  return (
    <li className="list-group-item d-flex align-items-center">
      <img src={flag} width="100" className="img-thumbnail" alt="flag" />
      <p className="m-3 w-25">{name}</p>
      <p className="m-3 w-25">{capital}</p>
      <p className="m-3 w-25">{region}</p>
      <Badge color="bg-primary" label="area" value={area} />
      <Badge color="bg-secondary" label="population" value={population} />
    </li>
  );
};
