import { FaSearch } from "react-icons/fa";

export default function SearchFilter({ searchTerm, handleSearchChange }) {
  return (
    <div className="relative max-w-[480px] w-full">
      <FaSearch className="absolute left-8 top-1/2 -translate-y-1/2 opacity-50 dark:opacity-100" />
      <input
        type="text"
        placeholder="Search for a country..."
        aria-label="Search for a country"
        autoComplete="off"
        value={searchTerm}
        onChange={handleSearchChange}
        className="py-[1.125rem] pl-18 pr-8 shadow-filterBar w-full bg-white dark:bg-blue-900"
      />
    </div>
  );
}