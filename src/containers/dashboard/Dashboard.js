import { Navbar } from "../../components/navbar/Navbar";
import { Propiedades } from "../propiedades/Propiedades";
import { AddNewProperty } from "./AddNewProperty";
import "animate.css";

export const Dashboard = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <Navbar />
      <div>
        <AddNewProperty />
      </div>
      <Propiedades />
    </div>
  );
};
