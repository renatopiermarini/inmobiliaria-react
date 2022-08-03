import { PropiedadesCards } from "../propiedades/PropiedadesCards";
import "./search-results.css";
import "animate.css";

export const SearchResults = ({ searchResults }) => {
  return (
    <>
      {searchResults.length > 0 && (
        <div className="list-div animate__animated animate__fadeIn">
          <div className="list-results-title">
            <h2 key="h2">Resultados de la búsqueda</h2>
          </div>
          <div key="div" className="list-results">
            {searchResults.map((propiedad) => (
              <PropiedadesCards
                key={propiedad.id}
                imagen={propiedad?.data().imagen}
                id={propiedad?.id}
                titulo={propiedad?.data().titulo}
                direccion={propiedad?.data().direccion}
                precio={propiedad?.data().precio}
                habs={propiedad?.data().habs}
                bans={propiedad?.data().bans}
                m2={propiedad?.data().m2}
                carac1={propiedad?.data().carac1}
                descripcion={propiedad?.data().descripcion}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
