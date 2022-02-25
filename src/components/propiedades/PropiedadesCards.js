import { Link } from "react-router-dom";
import "./cards.css";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import swal from "sweetalert";
import "animate.css";

export const PropiedadesCards = ({
  image,
  id,
  titulo,
  direccion,
  precio,
  habs,
  bans,
  m2,
  carac1,
  descripcion,
}) => {
  const auth = localStorage.getItem("usuario") || "";
  const mostrarAlerta = () => {
    swal({
      title: "Vos decis bro?",
      text: "Estas seguro que deseas eliminar esta propiedad?",
      icon: "warning",
      buttons: ["No, casi la cago", "Obvio pa"],
    }).then((respuesta) => {
      if (respuesta) {
        handleDelete();
        swal({
          text: "La propiedad fue eliminada",
          icon: "success",
          timer: "2000",
        });
      }
    });
  };

  const handleDelete = () => {
    deleteDoc(doc(db, `propiedades/${id}`));
  };

  return (
    <div className="card-container-div animate__animated animate__fadeIn">
      <div className="card-container">
        <Link to={`/propiedad/${id}`} className="card-link">
          <div className="img-property-container">
            <img className="imagen-propiedad" src={image} />
          </div>
        </Link>

        <div className="property-description-container">
          <Link to={`/propiedad/${id}`} className="card-link">
            <div className="property-description">
              <h2>{titulo}</h2>
              <span className="margin-top">{direccion}</span>

              <h3>
                {Intl.NumberFormat("es-AR", {
                  style: "currency",
                  currency: "ARS",
                }).format(precio)}
              </h3>
              <div className="comodidades">
                <span className="margin-top">
                  {habs.substring(0, 5) + " habitaciones".substring(0, 4)}
                </span>
                <span className="margin-top">
                  {bans.substring(0, 5) + " baños".substring(0, 4)}
                </span>
                <span className="margin-top">{m2 + " m²".substring(0, 4)}</span>
                <span className="margin-top">{carac1}</span>
              </div>
              <p className="margin-top">{descripcion.substring(0, 85)}</p>
            </div>
          </Link>
        </div>
        <div className="btn-card-container">
          {auth ? (
            <div className="btn-card-container">
              <button className="btn delete" onClick={mostrarAlerta}>
                Eliminar
              </button>
            </div>
          ) : (
            <div className="btn-card-container">
              <a href="/#contacto" className="btn btn-llamar">
                Contactar
              </a>

              <Link to={`/propiedad/${id}`} className="btn btn-ver-mas">
                Ver mas
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
