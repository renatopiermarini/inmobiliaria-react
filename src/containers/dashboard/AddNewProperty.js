import { useState } from "react";
import "./addnewproperty.css";
import { uploadProperty } from "../../firebase/firebase-config";

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
      });
      setLoading(false);
    }
  };

  return (
    <div className="add-section">
      <h2>Añadir nueva propiedad</h2>
      <form className="form-section" onSubmit={handleSubmit}>
        <div className="add-form-section">
          <input
            onChange={(e) => setTitulo(e.target.value)}
            value={titulo}
            className="add-title"
            type="text"
            placeholder="Titulo"
          />
          <input
            onChange={(e) => setDireccion(e.target.value)}
            value={direccion}
            className="direc-price"
            type="text"
            placeholder="Direccion"
          />
          <input
            onChange={(e) => setPrecio(e.target.value)}
            value={precio}
            className="direc-price"
            type="text"
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
