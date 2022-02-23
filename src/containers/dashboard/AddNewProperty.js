import { useState } from "react";
import "./addnewproperty.css";
import { uploadProperty } from "../../firebase/firebase-config";
import swal from "sweetalert";
import "animate.css";

export const AddNewProperty = () => {
  // const propiedad = {
  //   titulo: "Alquiler",
  //   direccion: "Casa en Misiones Salesianas 1200, Viedma",
  //   precio: "$70.000 /mes",
  //   caracteristicas: {
  //     m2: "60m² construidos",
  //     hab: "2 habitaciones",
  //     ban: "3 baños",
  //     carac1: "Pileta",
  //     carac2: "Casa sin amueblar",
  //   },

  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [precio, setPrecio] = useState("");
  const [habs, setHabs] = useState("");
  const [bans, setBans] = useState("");
  const [m2, setM2] = useState("");
  const [carac1, setCarac1] = useState("");
  const [carac2, setCarac2] = useState("");
  const [carac3, setCarac3] = useState("");
  const [carac4, setCarac4] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (titulo !== "" && descripcion !== "" && direccion !== "") {
      await uploadProperty({
        tipo,
        titulo,
        direccion,
        precio,
        descripcion,
        m2,
        habs,
        bans,
        carac1,
        carac2,
        carac3,
        carac4,
      }).then(
        swal({
          text: "Propiedad cargada correctamente",
          icon: "success",
          timer: "2000",
        })
      );
      setTitulo("");
      setTipo("");
      setDireccion("");
      setPrecio("");
      setHabs("");
      setBans("");
      setM2("");
      setCarac1("");
      setCarac2("");
      setCarac3("");
      setCarac4("");
      setDescripcion("");
      setLoading(false);
    }
  };

  return (
    <div className="add-section contacto animate__animated animate__fadeIn">
      <h2>Añadir nueva propiedad</h2>
      <form className="form-section" onSubmit={handleSubmit}>
        <div className="add-form-section">
          <input
            onChange={(e) => setTitulo(e.target.value)}
            value={titulo}
            className="add-title"
            type="text"
            placeholder="Titulo. Tiene que contener 'venta' o 'alquiler'"
          />
          <select
            className="add-title select-title"
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="default" className="disabled" hidden>
              Tipo de propiedad
            </option>
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
            <option value="terreno">Lote</option>
            <option value="local">Local comercial</option>
            <option value="terreno">Chacras / Campos</option>
          </select>
          {/* <input
            onChange={(e) => setTipo(e.target.value.toLocaleLowerCase())}
            value={tipo}
            className="add-title tipo"
            type="text"
            placeholder="Tipo de propiedad"
          /> */}
          <input
            onChange={(e) => setDireccion(e.target.value)}
            value={direccion}
            className="direc-price"
            type="text"
            placeholder="Direccion"
          />
          <input
            onChange={(e) => setPrecio(parseInt(e.target.value))}
            value={precio}
            className="direc-price"
            type="number"
            placeholder="Precio"
          />
          <input
            onChange={(e) => setHabs(e.target.value)}
            value={habs}
            className="add-carac"
            type="text"
            placeholder="Habitaciones"
          />
          <input
            onChange={(e) => setBans(e.target.value)}
            value={bans}
            className="add-carac"
            type="text"
            placeholder="Banos"
          />
          <input
            onChange={(e) => setM2(e.target.value)}
            value={m2}
            className="add-carac"
            type="text"
            placeholder="m2"
          />
          <input
            onChange={(e) => setCarac1(e.target.value)}
            value={carac1}
            className="add-carac"
            type="text"
            placeholder="caracteristicas extra"
          />
          <input
            onChange={(e) => setCarac2(e.target.value)}
            value={carac2}
            className="add-carac"
            type="text"
            placeholder="caracteristicas extra"
          />
          <input
            onChange={(e) => setCarac3(e.target.value)}
            value={carac3}
            className="add-carac"
            type="text"
            placeholder="caracteristicas extra"
          />
          <input
            onChange={(e) => setCarac4(e.target.value)}
            value={carac4}
            className="add-carac"
            type="text"
            placeholder="caracteristicas extra"
          />

          <textarea
            onChange={(e) => setDescripcion(e.target.value)}
            value={descripcion}
            placeholder="Descripcion"
            className="add-textarea"
          />
          <input type="file" className="btn-add" />
        </div>
        <button
          className="btn-add-property"
          type="submit"
          disabled={
            loading || titulo === "" || descripcion === "" || direccion === ""
          }
        >
          Añadir propiedad
        </button>
      </form>
    </div>
  );
};
