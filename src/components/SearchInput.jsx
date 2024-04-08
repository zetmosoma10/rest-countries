import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchInput = ({ input, handleSearchInput }) => {
  const [inputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };
  return (
    <>
      <div
        className={`bg-white dark:bg-dark_Blue_Dark_Mode_Elements rounded overflow-hidden 
            ${
              inputFocused ? "ring-2 ring-slate-300 dark:ring-slate-600 " : ""
            }  flex items-center shadow-lg w-full md:w-[40%]`}
      >
        <span className="text-lg opacity-50 dark:text-slate-50 ml-8">
          <IoIosSearch />
        </span>
        <input
          className="dark:bg-dark_Blue_Dark_Mode_Elements w-full font-Nunito indent-6  text-[12px] 
                md:text-sm py-4 outline-none dark:caret-slate-50 dark:text-slate-50 "
          type="text"
          placeholder="Search for a country…"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleSearchInput}
          name="input"
          value={input}
        />
      </div>
    </>
  );
};

export default SearchInput;
