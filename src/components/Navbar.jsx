import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa6";
import { ThemeContext } from "../Pages/Layout";

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header className="bg-white dark:bg-dark_Blue_Dark_Mode_Elements">
      <nav className=" max-container text-Very_Dark_Blue_Light_Mode_Text dark:text-slate-50   py-5 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-sm lg:text-2xl ">
          Where in the world?
        </Link>
        <button
          onClick={toggleTheme}
          className="flex items-center space-x-1 font-semibold text-[12px] lg:text-base "
        >
          <span className="mr-1">
            <FaRegMoon />
          </span>
          Dark Mode
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
