import { PropiedadesCards } from "../propiedades/PropiedadesCards";
import "./search-results.css";

export const SearchResults = ({ searchResults }) => {
  return (
    <div className="list-div">
      {searchResults.map((propiedad) => (
        <div key="div" className="list-results">
          <h2 key="h2">Resultados de la búsqueda</h2>
          <PropiedadesCards
            key={propiedad.id}
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
        </div>
      ))}
    </div>
  );
};
