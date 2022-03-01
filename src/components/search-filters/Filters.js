import "../search/search.css";
import "animate.css";
import { db } from "../../firebase/firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import swal from "sweetalert";

export const Filters = ({ state, setSearchResults }) => {
  const [propiedad, setPropiedad] = useState("");
  const [habs, setHabs] = useState("");
  const [bans, setBans] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000000000000000000);
  const [localidad, setLocalidad] = useState("");

  const searchForProperties = async (e) => {
    e.preventDefault();

    const wherePropiedad =
      propiedad !== ""
        ? where("tipo", "==", propiedad)
        : swal({
            text: "Seleccione un tipo de propiedad",
            icon: "warning",
            timer: "2000",
          });
    const whereMinPrice = where("precio", ">=", minPrice);
    const whereMaxPrice = where("precio", "<=", maxPrice);
    const whereHabs = where("habs", "==", habs);
    const whereBans = where("bans", "==", bans);
    const whereOperacion = where("operacion", "==", state.propertyType);
    const whereLocalidad = where("localidad", "==", localidad);

    if (propiedad !== "" && habs !== "" && bans !== "" && localidad !== "") {
      const queryTipo = query(
        collection(db, "propiedades"),
        whereOperacion,
        wherePropiedad,
        whereHabs,
        whereBans,
        whereMinPrice,
        whereMaxPrice,
        whereLocalidad
      );
      const documentSnapshots1 = await getDocs(queryTipo);
      setSearchResults(documentSnapshots1.docs);
    } else if (propiedad !== "" && localidad !== "" && bans !== "") {
      const queryTipo = query(
        collection(db, "propiedades"),
        whereOperacion,
        wherePropiedad,
        whereLocalidad,
        whereMinPrice,
        whereMaxPrice,
        whereBans
      );
      const documentSnapshots1 = await getDocs(queryTipo);
      setSearchResults(documentSnapshots1.docs);
    } else if (propiedad !== "" && localidad !== "" && habs !== "") {
      const queryTipo = query(
        collection(db, "propiedades"),
        whereOperacion,
        wherePropiedad,
        whereLocalidad,
        whereMinPrice,
        whereMaxPrice,
        whereHabs
      );
      const documentSnapshots1 = await getDocs(queryTipo);
      setSearchResults(documentSnapshots1.docs);
    } else if (propiedad !== "" && bans !== "" && bans !== "") {
      const queryTipo = query(
        collection(db, "propiedades"),
        whereOperacion,
        wherePropiedad,
        whereHabs,
        whereMinPrice,
        whereMaxPrice,
        whereBans
      );
      const documentSnapshots1 = await getDocs(queryTipo);
      setSearchResults(documentSnapshots1.docs);
    } else if (propiedad !== "" && localidad !== "") {
      const queryTipo = query(
        collection(db, "propiedades"),
        whereOperacion,
        wherePropiedad,
        whereLocalidad,
        whereMinPrice,
        whereMaxPrice
      );
      const documentSnapshots1 = await getDocs(queryTipo);
      setSearchResults(documentSnapshots1.docs);
    } else if (propiedad !== "" && habs !== "") {
      const queryTipo = query(
        collection(db, "propiedades"),
        whereOperacion,
        wherePropiedad,
        whereHabs,
        whereMinPrice,
        whereMaxPrice
      );
      const documentSnapshots1 = await getDocs(queryTipo);
      setSearchResults(documentSnapshots1.docs);
    } else if (propiedad !== "" && bans !== "") {
      const queryTipo = query(
        collection(db, "propiedades"),
        whereOperacion,
        wherePropiedad,
        whereBans,
        whereMinPrice,
        whereMaxPrice
      );
      const documentSnapshots1 = await getDocs(queryTipo);
      setSearchResults(documentSnapshots1.docs);
    } else if (propiedad !== "") {
      const queryTipo = query(
        collection(db, "propiedades"),
        whereOperacion,
        wherePropiedad,
        whereMinPrice,
        whereMaxPrice
      );
      const documentSnapshots1 = await getDocs(queryTipo);
      setSearchResults(documentSnapshots1.docs);
    }
  };

  return (
    <form className="buscador animate__animated animate__fadeIn">
      <select
        className="select-property-type"
        onChange={(e) => setPropiedad(e.target.value)}
      >
        <option value="default" className="disabled" hidden>
          Tipo de propiedad
        </option>
        <option value="casa">Casa</option>
        <option value="departamento">Departamento</option>
        {state.propertyType === "venta" && <option value="lote">Lote</option>}
        <option value="local">Local comercial</option>
        <option value="terreno">Chacras / Campos</option>
      </select>
      <select
        className="select-property-type"
        onChange={(e) => setLocalidad(e.target.value)}
      >
        <option value="default" className="disabled" hidden>
          Localidad
        </option>
        <option value="viedma">Viedma</option>
        <option value="patagones">Carmen De Patagones</option>
        <option value="laboca">Balneario El Condor</option>
      </select>
      <select
        className="select-property-type"
        onChange={(e) => setHabs(e.target.value)}
      >
        <option value="default" hidden>
          Habitaciones
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <select
        className="select-property-type"
        onChange={(e) => setBans(e.target.value)}
      >
        <option value="default" hidden>
          Baños
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <div className="price-range">
        <header>Precio</header>
        <div className="price-range-input-section">
          <input
            type="number"
            placeholder="mínimo"
            onChange={(e) => setMinPrice(parseInt(e.target.value))}
          />
          <span>-</span>
          <input
            type="number"
            placeholder="máximo"
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="btn-buscar-div">
        <button
          className="btn-buscar"
          type="submit"
          onClick={searchForProperties}
        >
          BUSCAR
        </button>
      </div>
    </form>
  );
};
