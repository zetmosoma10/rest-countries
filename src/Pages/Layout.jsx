import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const Layout = () => {
  return (
    <section className="font-Nunito text-slate-950">
      <Navbar />
      <Outlet />
    </section>
  );
};

export default Layout;
