export default function ClearFilter({
  handleClearFilters,
  regionFilter, 
}) {
  function ClearButton() {
    return (
      <button
        className="bg-blue-900 dark:bg-white text-white dark:text-blue-900 px-4 py-2 rounded-md hover:scale-105 transition-all duration-300"
        onClick={() => handleClearFilters()}
      >
        Clear Filters
      </button>
    );
  }
  function RegionFilterLabel() {
    return (
      <p 
        aria-live="polite"
        aria-atomic="true"
        className="filter-label"
      >
        Filter by Region: {regionFilter}
      </p>
    );
  }
  return (
    <div className="flex gap-4 items-center mt-10">
      <ClearButton />
      {regionFilter && <RegionFilterLabel />}
    </div>
  );
}
