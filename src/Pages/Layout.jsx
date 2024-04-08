import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const ThemeContext = createContext();
export { ThemeContext };

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
      <section
        className={`${
          darkMode && "dark"
        } font-Nunito  text-slate-950 dark:text-slate-50 `}
      >
        <Navbar />
        <Outlet />
      </section>
    </ThemeContext.Provider>
  );
};

export default Layout;
