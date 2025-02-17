// CustomDropdown.js
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const CustomDropdown = ({ options, setSearchParams, searchParams }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  useEffect(() => {
    const continent = searchParams.get("continent");
    setSelectedOption(continent || options[0]);
  }, [searchParams, options]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full px-4 py-2 
            text-sm font-medium text-gray-700 dark:text-slate-50 bg-white dark:bg-dark_Blue_Dark_Mode_Elements 
            border border-gray-300 dark:border-slate-600
            rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-600
            focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-slate-600"
          onClick={toggleDropdown}
        >
          {selectedOption}
          <span className="-mr-1 ml-2 h-5 w-5 pt-1">
            <FaAngleDown />
          </span>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute  md:right-0  mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-dark_Blue_Dark_Mode_Elements ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <div
                key={`${option} ${index}`}
                className="block px-4 py-2 text-sm text-gray-700 dark:text-slate-50 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                onClick={() => {
                  handleOptionSelect(option);
                  if (option === "Filter by Region") {
                    setSearchParams({});
                  } else {
                    setSearchParams({ continent: option });
                  }
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
