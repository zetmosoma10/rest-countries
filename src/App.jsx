import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import CountryDetails from "./Pages/CountryDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:country" element={<CountryDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
