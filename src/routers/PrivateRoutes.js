import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const auth = localStorage.getItem("usuario") || "";
  return auth ? children : <Navigate to="/login" />;
};
