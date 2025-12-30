import React from "react";

const SearchBar = () => {
  return (
    <div className="mt-8 flex justify-center px-4">
      <label
        className="
          input input-bordered border-orange-500 flex items-center gap-2
          w-full max-w-xs
          sm:max-w-md
          md:max-w-lg
          lg:max-w-xl
          h-11 sm:h-12 md:h-14
          rounded-full
          shadow-sm
        "
      >
        <svg
          className="h-5 w-5 opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </g>
        </svg>

        <input
          type="search"
          required
          placeholder="Search Phones..."
          className="
            grow bg-transparent outline-none
            text-sm sm:text-base md:text-lg
          "
        />
      </label>
    </div>
  );
};

export default SearchBar;
