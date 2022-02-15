import { PropiedadesCards } from "../../components/propiedades/PropiedadesCards";
import "./novedades.css";

export const Novedades = () => {
  return (
    <div className="novedades-section">
      <div className="novedades-title">
        <h1>Propiedades Destacadas</h1>
      </div>
      <div className="novedades">
        <PropiedadesCards />

        <PropiedadesCards />
        <PropiedadesCards />
        <PropiedadesCards />
      </div>
      <div>
        <button className="btn-see-all">VER TODAS LAS PROPIEDADES</button>
      </div>
    </div>
  );
};
