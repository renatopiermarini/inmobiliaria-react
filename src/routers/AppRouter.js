import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../containers/dashboard/Dashboard";
import { DashboardRoutes } from "./DashboardRoutes";

import { PrivateRoutes } from "./PrivateRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
};
