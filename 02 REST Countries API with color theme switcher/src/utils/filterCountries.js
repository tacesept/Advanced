// src/utils/filterCountries.js
export function filterCountries(countries, searchTerm = "", region = "") {
  const lowerSearch = searchTerm.toLowerCase().trim();

  return countries.filter((country) => {
    const matchesSearch =
      lowerSearch === "" || country.name.toLowerCase().includes(lowerSearch);

    const matchesRegion = region === "" || country.region === region;

    return matchesSearch && matchesRegion;
  });
}
