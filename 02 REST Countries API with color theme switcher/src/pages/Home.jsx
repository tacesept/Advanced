import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { filterCountries } from "../utils/filterCountries";
import Cards from "../components/Cards";
import { useCountries } from "../contexts/CountriesContext";
import SearchFilter from "../components/SearchFilter";
import RegionFilter from "../components/RegionFilter";
import ClearFilter from "../components/ClearFilter";
 
export default function Home() {
  const { countries, loading } = useCountries();
  const [isRegionMenuOpen, setIsRegionMenuOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const regionFilter = searchParams.get("region") || "";
 

  // 3. Whenever either changes, sync to URL
  useEffect(() => { 
      const nextParams = {};
      if (searchTerm) nextParams.search = searchTerm;
      if (regionFilter) nextParams.region = regionFilter;
      setSearchParams(nextParams); 
  }, [searchTerm, regionFilter, setSearchParams]);

  // 4. Handlers just update state—no URL writing directly here
  const handleSearchChange = (e) => {
    setSearchParams({ search: e.target.value, region: regionFilter });
    setIsRegionMenuOpen(false);
  };
  const handleRegionChange = (newRegion) => {
    setSearchParams({ search: searchTerm, region: newRegion });
    setIsRegionMenuOpen(false);
  };

  /* 
  countries is an object, we need to convert it to an array
  */
  const countriesList = Array.isArray(countries) ? countries : [];

  /* get unique regions */
  const regions = new Set(countriesList.map((country) => country.region));
  const uniqueRegions = [...regions].sort();

  /* filter countries */
  const filteredCountries = filterCountries(
    countriesList,
    searchTerm,
    regionFilter
  );

  const handleOpenRegionMenu = () => {
    setIsRegionMenuOpen(!isRegionMenuOpen);
  };

  const handleClearFilters = () => {
    setSearchParams({});
  };

  /* error handling */
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
    <section className="px-4 md:px-10 mt-6 md:mt-12">
      <div className="max-w-[1280px] mx-auto w-full">
        <h1 className="sr-only">Countries</h1>
        {/* search and region filter */}
        <div className="flex flex-col md:flex-row gap-10 justify-between text-grey-950 dark:text-white">
          <SearchFilter
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
          />
          <RegionFilter
            handleOpenRegionMenu={handleOpenRegionMenu}
            isRegionMenuOpen={isRegionMenuOpen}
            uniqueRegions={uniqueRegions}
            handleRegionChange={handleRegionChange}
          />
        </div>
        {/* clear filter */}
        <ClearFilter
          handleClearFilters={handleClearFilters}
          regionFilter={regionFilter}
        />
        {/* cards */}
        <Cards countries={filteredCountries} />
      </div>
    </section>
  );
}
