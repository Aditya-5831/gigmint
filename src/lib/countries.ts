import countries from "world-countries";

export const countryOptions = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
}));
