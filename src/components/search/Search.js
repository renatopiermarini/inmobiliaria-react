import { useState } from "react";
import { AlquilerFilters } from "../search-filters/AlquilerFilters";
import { VentaFilters } from "../search-filters/VentaFilters";
import "../search/search.css";

export const Search = () => {
  const [state, setState] = useState(true);

  const showVentaFilters = () => {
    setState(true);
  };

  const showAlquilerFilters = () => {
    setState(false);
  };

  return (
    <div className="search-section">
      <div className="btn-container">
        <button className="btn-search btn-venta" onClick={showVentaFilters}>
          COMPRAR
        </button>
        <button
          className="btn-search btn-alquiler"
          onClick={showAlquilerFilters}
        >
          ALQUILAR
        </button>
      </div>
      <div className="buscador-container">
        {state === true ? <VentaFilters /> : <AlquilerFilters />}
      </div>
    </div>
  );
};
