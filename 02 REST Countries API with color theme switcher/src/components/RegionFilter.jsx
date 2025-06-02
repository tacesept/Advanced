import { FaChevronDown } from "react-icons/fa";

export default function RegionFilter({ handleOpenRegionMenu, isRegionMenuOpen, uniqueRegions, handleRegionChange }) {
  return (
    <div className="relative max-w-[200px] w-full">
      <button
        id="filter-by-region"
        className="flex justify-between items-center shadow-filterBar py-[1.125rem] px-8 bg-white w-full dark:bg-blue-900"
        onClick={handleOpenRegionMenu}
        aria-haspopup="true"
        aria-expanded={isRegionMenuOpen}
        aria-controls="region-menu"
      >
        <span>Filter by Region</span>
        <FaChevronDown />
      </button>
      {isRegionMenuOpen && (
        <ul
          id="region-menu"
          aria-hidden={!isRegionMenuOpen}
          className="absolute right-0 py-4 px-6 bg-white dark:bg-blue-900 shadow-filterBar w-full mt-2 
            text-sm space-y-2"
        >
          {uniqueRegions.map((region) => (
            <li key={region}>
              <button
                className="hover:underline w-full text-left"
                onClick={() => handleRegionChange(region)}
              >
                {region}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}