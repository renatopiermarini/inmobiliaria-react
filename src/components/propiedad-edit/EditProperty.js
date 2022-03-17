import { useEffect, useState } from "react";
import "../../containers/dashboard/addnewproperty.css";

import "animate.css";
import { useNavigate, useParams } from "react-router-dom";
import { editProperty, getPropiedadById } from "../../firebase/firebase-config";
import swal from "sweetalert";

export const EditProperty = () => {
  const { propiedadId } = useParams();
  const [propiedad, setPropiedad] = useState([]);
  const [loading, setLoading] = useState(true);

  const [titulo, setTitulo] = useState(propiedad?.titulo);

  const [direccion, setDireccion] = useState(propiedad?.direccion);

  const [precio, setPrecio] = useState(propiedad?.precio);

  const [habs, setHabs] = useState(propiedad?.habs);

  const [bans, setBans] = useState(propiedad?.bans);

  const [m2, setM2] = useState(propiedad?.m2);

  const [descripcion, setDescripcion] = useState(propiedad?.descripcion);

  const [carac1, setCarac1] = useState(propiedad?.carac1);
  const [carac2, setCarac2] = useState(propiedad?.carac2);
  const [carac3, setCarac3] = useState(propiedad?.carac3);
  const [carac4, setCarac4] = useState(propiedad?.carac4);

  const navigate = useNavigate();

  useEffect(() => {
    if (propiedad !== []) {
      setTitulo(propiedad?.titulo);
      setDireccion(propiedad?.direccion);
      setPrecio(propiedad?.precio);
      setHabs(propiedad?.habs);
      setBans(propiedad?.bans);
      setM2(propiedad?.m2);
      setDescripcion(propiedad?.descripcion);
      setCarac1(propiedad?.carac1);
      setCarac2(propiedad?.carac2);
      setCarac3(propiedad?.carac3);
      setCarac4(propiedad?.carac4);
    }
  }, [propiedad]);

  useEffect(() => {
    getPropiedadById(propiedadId).then((data) => {
      setLoading(false);
      setPropiedad(data.data());
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    await editProperty({
      propiedadId,
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
        text: "La propiedad fue editada correctamente",
        icon: "success",
        timer: "2000",
      })
    );
    navigate(`/propiedad/${propiedadId}`);
  };

  return (
    <>
      {!loading && propiedad !== [] && titulo !== undefined && (
        <div className="add-section animate__animated animate__fadeIn">
          <h2>Editar</h2>
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
                type="number"
                placeholder="Precio"
              />
              <div className="caracteristicas-add-inputs">
                <input
                  onChange={(e) => setHabs(e.target.value)}
                  value={habs}
                  className="add-carac"
                  type="number"
                  placeholder="Habitaciones"
                />
                <input
                  onChange={(e) => setBans(e.target.value)}
                  value={bans}
                  className="add-carac"
                  type="number"
                  placeholder="Banos"
                />
                <input
                  onChange={(e) => setM2(e.target.value)}
                  value={m2}
                  className="add-carac"
                  type="number"
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
              </div>

              <textarea
                onChange={(e) => setDescripcion(e.target.value)}
                value={descripcion}
                placeholder="Descripcion"
                className="add-textarea"
              />
            </div>

            <button
              className="btn-add-property"
              type="submit"
              disabled={loading}
            >
              Editar
            </button>
          </form>
        </div>
      )}
    </>
  );
};
