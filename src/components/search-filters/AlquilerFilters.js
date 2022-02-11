import "../search/search.css";

export const AlquilerFilters = () => {
  return (
    <div className="buscador">
      <select className="select-property-type">
        <option value="default" disabled hidden>
          Tipo de propiedad
        </option>
        <option value="casa">Casa</option>
        <option value="departamento">Departamento</option>
        <option value="local">Local</option>
      </select>
    </div>
  );
};
