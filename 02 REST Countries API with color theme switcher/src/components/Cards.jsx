import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify";

export default function Cards({ countries }) { 

  return (
    <div className="mt-10 text-grey-950 dark:text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-18">
      {countries.map((country) => (
        <Link
          to={`/${slugify(country.name)}`}
          key={country.name}
          className="hover:scale-115 transition-all duration-300"
        >
          <div
            className="shadow-card rounded-md overflow-hidden bg-white dark:bg-blue-900
           w-full"
          >
            <img
              src={country.flags.png}
              alt={country.name}
              className="w-full h-48 object-cover"
            />
            <div className="px-6 pt-6 pb-12 space-y-4">
              <p className="text-lg font-bold">{country.name}</p>
              <ul className="space-y-1">
                <li>Population: {country.population}</li>
                <li>Region: {country.region}</li>
                <li>Capital: {country.capital}</li>
              </ul>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
