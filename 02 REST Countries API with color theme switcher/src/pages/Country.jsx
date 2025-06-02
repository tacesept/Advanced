import { useParams } from "react-router-dom";
import { useCountries } from "../contexts/CountriesContext";
import { slugify } from "../utils/slugify";

import BackBtn from "../components/BackBtn";
import CountryOverview from "../components/CountryOverview";

export default function Country() {
  const { name } = useParams();
  const { countries, loading } = useCountries();

  const countriesList = Array.isArray(countries) ? countries : [];

  const country = countriesList.find(
    (country) => slugify(country.name) === name
  );

  function getName(borderCode) {
    const borderCountry = countries.find((c) => c.alpha3Code === borderCode);
    return borderCountry ? borderCountry.name : borderCode;
  }

  if (loading)
    return (
      <div className="flex flex-col gap-10 items-center justify-center py-8 mt-40 text-grey-950 dark:text-white">
        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-2xl font-semibold">Loading</p>
      </div>
    );
  if (!countries || countries.length === 0)
    return (
      <div className="flex flex-col gap-10 items-center justify-center py-8 mt-40 text-grey-950 dark:text-white">
        <p className="text-2xl font-semibold">No countries found</p>
      </div>
    );

  return (
    <div className="px-7 md:px-10 my-10 md:my-20">
      <div
        className="max-w-[570px] lg:max-w-[1280px] mx-auto w-full text-gray-950 dark:text-white
      "
      >
        <BackBtn />
        <CountryOverview country={country} getName={getName} />
      </div>
    </div>
  );
}
