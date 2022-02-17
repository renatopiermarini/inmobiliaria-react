import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";

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

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};
