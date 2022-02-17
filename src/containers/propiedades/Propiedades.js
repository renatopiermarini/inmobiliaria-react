import { PropiedadesList } from "../../components/propiedades/PropiedadesList";
import "./propiedades.css";

export const Propiedades = () => {
  return (
    <div className="propiedades-section">
      <div className="title">
        <h1>Propiedades</h1>
      </div>
      <div>
        <PropiedadesList />
      </div>
    </div>
  );
};
