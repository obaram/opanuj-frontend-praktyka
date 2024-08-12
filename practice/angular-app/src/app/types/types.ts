type NativeName = {
  official: string;
  common: string;
};

type LanguageMap = {
  [key: string]: string;
};

type Currency = {
  name: string;
  symbol: string;
};

type Idd = {
  root: string;
  suffixes: string[];
};

type Translation = {
  official: string;
  common: string;
};

type TranslationsMap = {
  [key: string]: Translation;
};

type Demonyms = {
  eng: {
    f: string;
    m: string;
  };
};

type Maps = {
  googleMaps: string;
  openStreetMaps: string;
};

type Car = {
  signs: string[];
  side: string;
};

type Flags = {
  png: string;
  svg: string;
};

type CapitalInfo = {
  latlng: number[];
};

export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: NativeName;
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [key: string]: Currency;
  };
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  languages: LanguageMap;
  translations: TranslationsMap;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: Record<string, unknown>; // Assuming no specific structure is provided
  startOfWeek: string;
  capitalInfo: CapitalInfo;
};
