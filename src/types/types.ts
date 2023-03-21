interface CountryApi {
  flags: CountryFlag;
  name: CountryName;
  capital: string[];
  region: string;
  area: number;
  population: number;
}

interface CountryFlag {
  png: string;
  svg: string;
}

interface CountryName {
  common: string;
  official: string;
  nativeName: CountryNativeName;
}

interface CountryNativeName {
  [key: string]: CountryAllNativeName | undefined;
}

interface CountryAllNativeName {
  official: string;
  common: string;
}

interface Country {
  name: string;
  capital: string;
  population: number;
  flag: string;
  area: number;
  region: string;
}

export type { CountryApi, Country };
