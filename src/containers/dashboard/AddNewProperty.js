import { useRef, useState } from "react";
import "./addnewproperty.css";
import { uploadProperty } from "../../firebase/firebase-config";
import swal from "sweetalert";
import "animate.css";

export const AddNewProperty = () => {
  const [imagenPrincipal, setImagenPrincipal] = useState("");
  const [coordenadas, setCoordenadas] = useState({
    currentLocation: { lat: "", lng: "" },
  });
  const [imagen7, setImagen7] = useState([]);
  const [operacion, setOperacion] = useState("");
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [precio, setPrecio] = useState("");
  const [habs, setHabs] = useState("");
  const [bans, setBans] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [m2, setM2] = useState("");
  const [carac1, setCarac1] = useState("");
  const [carac2, setCarac2] = useState("");
  const [carac3, setCarac3] = useState("");
  const [carac4, setCarac4] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [loading, setLoading] = useState(false);

  const imagePrincipalRef = useRef(null);

  const image7Ref = useRef(null);

  const uploadImagenPrincipal = async (e) => {
    const file_extension = imagePrincipalRef?.current?.value
      ?.split("\\")[2]
      .split(".")[1];
    if (
      file_extension === "png" ||
      file_extension === "jpg" ||
      file_extension === "jpeg" ||
      file_extension === "gif" ||
      file_extension === "webp"
    ) {
      const reader = new FileReader();
      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
      }
      reader.onload = (readerEvent) => {
        setImagenPrincipal(readerEvent.target.result);
      };
    } else {
      swal({
        text: "Formato de imagen no valido",
        icon: "danger",
        timer: "2000",
      });
    }
  };

  const uploadImagen7 = async (e) => {
    const file_extension = image7Ref?.current?.value
      ?.split("\\")[2]
      .split(".")[1];
    if (
      file_extension === "png" ||
      file_extension === "jpg" ||
      file_extension === "jpeg" ||
      file_extension === "gif" ||
      file_extension === "webp"
    ) {
      let photoArchivo = [];

      for (let i = 0; i < e.target.files.length; i++) {
        const photo = e.target.files[i];
        const reader = new FileReader();
        if (photo) {
          reader.readAsDataURL(photo);
        }
        reader.onload = (readerEvent) => {
          photoArchivo[i] = [readerEvent.target.result];
          setImagen7(photoArchivo);
        };
      }
    } else {
      swal({
        text: "Formato de imagen no valido",
        icon: "danger",
        timer: "2000",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      titulo !== "" &&
      descripcion !== "" &&
      direccion !== "" &&
      imagenPrincipal !== "" &&
      coordenadas !== "" &&
      imagen7 !== [] &&
      tipo !== ""
    ) {
      await uploadProperty({
        localidad,
        coordenadas,
        imagenPrincipal,
        imagen7,
        operacion,
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
          text: "La propiedad fue agregada correctamente",
          icon: "success",
          timer: "2000",
        })
      );
      setImagen7([]);
      setImagenPrincipal("");
      setOperacion("");
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
      setLocalidad("");
      setCoordenadas({
        currentLocation: { lat: "", lng: "" },
      });
    }
  };

  return (
    <div className="add-section animate__animated animate__fadeIn">
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
          <select
            className="add-operacion"
            onChange={(e) => setOperacion(e.target.value)}
          >
            <option value="default" className="disabled" hidden>
              Tipo de operacion
            </option>
            <option value="venta">Venta</option>
            <option value="alquiler">Alquiler</option>
          </select>
          <select
            className="add-operacion"
            onChange={(e) => setLocalidad(e.target.value)}
          >
            <option value="default" className="disabled" hidden>
              Localidad
            </option>
            <option value="viedma">Viedma</option>
            <option value="patagones">Carmen De Patagones</option>
            <option value="laboca">Balneario El Condor</option>
          </select>
          <input
            onChange={(e) => setDireccion(e.target.value)}
            value={direccion}
            className="direc-price"
            type="text"
            placeholder="Direccion"
          />
          <div className="caracteristicas-add-inputs">
            <input
              onChange={(e) =>
                setCoordenadas({
                  currentLocation: {
                    lat: parseFloat(e.target.value),
                    lng: coordenadas.currentLocation.lng,
                  },
                })
              }
              type="number"
              placeholder="Latitud"
              className="add-carac"
              value={coordenadas.currentLocation.lat}
            />
            <input
              onChange={(e) =>
                setCoordenadas({
                  currentLocation: {
                    lat: coordenadas.currentLocation.lat,
                    lng: parseFloat(e.target.value),
                  },
                })
              }
              type="number"
              placeholder="Longitud"
              className="add-carac"
              value={coordenadas.currentLocation.lng}
            />
          </div>
          <input
            onChange={(e) => setPrecio(parseInt(e.target.value))}
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
          <label className="imagen-principal">Imagen miniatura</label>
          <input
            ref={imagePrincipalRef}
            type="file"
            className="btn-add"
            name="file"
            onChange={uploadImagenPrincipal}
          />
          <label className="imagen-principal">Todas las imagenes</label>
          <input
            ref={image7Ref}
            multiple
            type="file"
            className="btn-add"
            name="file"
            onChange={uploadImagen7}
          />
        </div>

        <button
          className="btn-add-property"
          type="submit"
          disabled={
            loading ||
            titulo === "" ||
            descripcion === "" ||
            direccion === "" ||
            imagenPrincipal === "" ||
            coordenadas === "" ||
            imagen7 === [] ||
            tipo === ""
          }
        >
          Añadir propiedad
        </button>
      </form>
    </div>
  );
};
