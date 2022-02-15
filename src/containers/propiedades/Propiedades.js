import { Navbar } from "../../components/navbar/Navbar";
import { PropiedadesList } from "../../components/propiedades/PropiedadesList";
import { Footer } from "../footer/Footer";
import "./propiedades.css";

export const Propiedades = () => {
  return (
    <div className="propiedades-section">
      <Navbar />
      <div className="title">
        <h1>Propiedades</h1>
      </div>
      <div>
        <PropiedadesList />
      </div>
      <Footer />
    </div>
  );
};
