import { useState } from "react";

import { Filters } from "../search-filters/Filters";
import { NoHaySearchResults } from "../search-results/NoHaySearchResults";
import { SearchResults } from "../search-results/SearchResults";

import "../search/search.css";

export const Search = () => {
  const [state, setState] = useState({
    estado: true,
    propertyType: "venta",
  });
  const [ventaSelected, setVentaSelected] = useState(true);
  const [alquilerSelected, setAlquilerSelected] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  const showVentaFilters = () => {
    setState({
      estado: true,
      propertyType: "venta",
    });
    setVentaSelected(true);
    setAlquilerSelected(false);
  };

  const showAlquilerFilters = () => {
    setState({
      estado: true,
      propertyType: "alquiler",
    });
    setVentaSelected(false);
    setAlquilerSelected(true);
  };

  return (
    <>
      <div className="search-section">
        <div className="buscador-container">
          <div className="btn-container">
            <button
              className={
                ventaSelected === false
                  ? "btn-search btn-venta"
                  : "selected-venta"
              }
              onClick={showVentaFilters}
            >
              COMPRAR
            </button>
            <button
              className={
                alquilerSelected === false
                  ? "btn-search btn-alquiler"
                  : "selected-alquiler"
              }
              onClick={showAlquilerFilters}
            >
              ALQUILAR
            </button>
          </div>
          <div className="filters-container">
            <Filters
              state={state}
              setSearchResults={setSearchResults}
              setIsEmpty={setIsEmpty}
            />
          </div>
        </div>
      </div>
      {isEmpty ? (
        <NoHaySearchResults />
      ) : (
        <SearchResults searchResults={searchResults} />
      )}
    </>
  );
};
