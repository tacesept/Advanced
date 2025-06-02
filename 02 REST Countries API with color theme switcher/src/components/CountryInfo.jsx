import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify";

export default function CountryInfo({ country, getName }) {

  return (
    <div>
      <h2 className="mt-16 lg:mt-0 text-2xl font-semibold">{country.name}</h2>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 md:mt-6 text-sm leading-[2rem]">
        {/* Column 1 */}
        <div className="space-y-2">
          {/* Native Name (if present) */}
          {country.name?.common && (
            <div className="flex gap-2">
              <dt className="font-semibold">Native Name:</dt>
              <dd className="font-light">{country.name.common}</dd>
            </div>
          )}

          {/* Population */}
          {typeof country.population === "number" && (
            <div className="flex gap-2">
              <dt className="font-semibold">Population:</dt>
              <dd className="font-light">
                {country.population.toLocaleString()}
              </dd>
            </div>
          )}

          {/* Region */}
          {country.region && (
            <div className="flex gap-2">
              <dt className="font-semibold">Region:</dt>
              <dd className="font-light">{country.region}</dd>
            </div>
          )}

          {/* Sub Region */}
          {country.subregion && (
            <div className="flex gap-2">
              <dt className="font-semibold">Sub Region:</dt>
              <dd className="font-light">{country.subregion}</dd>
            </div>
          )}

          {/* Capital (may be an array or string) */}
          {Array.isArray(country.capital)
            ? country.capital.length > 0 && (
                <div className="flex gap-2">
                  <dt className="font-semibold">Capital:</dt>
                  <dd className="font-light">{country.capital.join(", ")}</dd>
                </div>
              )
            : country.capital && (
                <div className="flex gap-2">
                  <dt className="font-semibold">Capital:</dt>
                  <dd className="font-light">{country.capital}</dd>
                </div>
              )}
        </div>

        {/* Column 2 */}
        <div className="space-y-2">
          {/* Top Level Domain (tld is usually an array) */}
          {Array.isArray(country.tld) && country.tld.length > 0 && (
            <div className="flex gap-2">
              <dt className="font-semibold">Top Level Domain:</dt>
              <dd className="font-light">{country.tld.join(", ")}</dd>
            </div>
          )}

          {/* Currencies (object of currency codes → { name, symbol }) */}
          {country.currencies && (
            <div className="flex gap-2">
              <dt className="font-semibold">Currencies:</dt>
              <dd className="font-light">
                {country.currencies.map((c) => c.name).join(", ")}
              </dd>
            </div>
          )}

          {/* Languages (object of language codes → language name) */}
          {country.languages && (
            <div className="flex gap-2">
              <dt className="font-semibold">Languages:</dt>
              <dd className="font-light">
                {country.languages.map((l) => l.name).join(", ")}
              </dd>
            </div>
          )}
        </div>
      </dl>

      <dl className="mt-6 flex items-start gap-2">
        <dt className="font-semibold text-nowrap">Border Countries:</dt>
        <dd className="font-light flex flex-wrap gap-4">
          {country.borders?.map((border) => (
            <Link
              to={`/${slugify(getName(border))}`}
              key={border}
              className="px-5 py-1.5 bg-white hover:bg-blue-900 hover:text-white dark:bg-blue-900 dark:hover:bg-white dark:hover:text-blue-900 rounded-md shadow-card"
            >
              {getName(border)}
            </Link>
          ))}
        </dd>
      </dl>
    </div>
  );
}