import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const Layout = () => {
  return (
    <section className="font-Nunito">
      <Navbar />
      <Outlet />
    </section>
  );
};

export default Layout;
