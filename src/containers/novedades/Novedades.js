import { Link } from "react-router-dom";
import { PropiedadesCards } from "../../components/propiedades/PropiedadesCards";
import "./novedades.css";

export const Novedades = () => {
  return (
    <div className="novedades-section" id="novedades">
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
        <Link to="/propiedades">
          <button className="btn-see-all">VER TODAS LAS PROPIEDADES</button>
        </Link>
      </div>
    </div>
  );
};
