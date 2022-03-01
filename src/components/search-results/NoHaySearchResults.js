import "./search-results.css";

export const NoHaySearchResults = () => {
  return (
    <div className="list-div animate__animated animate__fadeIn">
      <div className="list-results">
        <h2>Resultados de la búsqueda</h2>
        <h5 className="no-results">No hay resultados</h5>
      </div>
    </div>
  );
};
