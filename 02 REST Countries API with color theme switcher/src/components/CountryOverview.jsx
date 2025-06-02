import CountryInfo from "./CountryInfo";

export default function CountryOverview({ country, getName }) {
  return (
    <div className="mt-16 lg:grid lg:grid-cols-2 gap-30">
      <img
        src={country.flags.png}
        alt={country.name}
        className="w-full h-auto rounded-lg shadow-card"
      />

      <CountryInfo country={country} getName={getName} />
    </div>
  );
}