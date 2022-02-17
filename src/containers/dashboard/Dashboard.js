import { Navbar } from "../../components/navbar/Navbar";
import { Propiedades } from "../propiedades/Propiedades";
import { AddNewProperty } from "./AddNewProperty";

export const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div>
        <AddNewProperty />
      </div>
      <Propiedades />
    </div>
  );
};
