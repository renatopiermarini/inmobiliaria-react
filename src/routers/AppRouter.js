import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { Dashboard } from "../containers/dashboard/Dashboard";
import { DashboardRoutes } from "./DashboardRoutes";

import { PrivateRoutes } from "./PrivateRoutes";

import { useLayoutEffect } from "react";
import { EditProperty } from "../components/propiedad-edit/EditProperty";

export const AppRouter = () => {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/*" element={<DashboardRoutes />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoutes>
                <Dashboard />
              </PrivateRoutes>
            }
          />

          <Route
            path="propiedad/:propiedadId/edit"
            element={
              <PrivateRoutes>
                <EditProperty />
              </PrivateRoutes>
            }
          />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};
