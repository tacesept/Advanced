// CountriesContext.jsx
import { useState, useEffect, createContext, useContext } from "react";

const CountriesContext = createContext({
  countries: null,
  loading: true,
});

export function CountriesProvider({ children }) {
  const [countries, setCountries] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      });
  }, []);

  return (
    <CountriesContext.Provider value={{ countries, loading }}>
      {children}
    </CountriesContext.Provider>
  );
}

// Custom hook for convenience
export function useCountries() {
  return useContext(CountriesContext);
}
