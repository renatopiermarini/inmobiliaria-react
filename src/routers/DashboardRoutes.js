import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { PropiedadScreen } from "../components/propiedades/propiedades-screen/PropiedadScreen";
import { SearchResults } from "../components/search-results/SearchResults";
import { Footer } from "../containers/footer/Footer";

import { Login } from "../containers/login/Login";

import { Propiedades } from "../containers/propiedades/Propiedades";

import Home from "../home/Home";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="propiedades" element={<Propiedades />} />

          <Route path="login" element={<Login />} />

          <Route path="propiedad/:propiedadId" element={<PropiedadScreen />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
