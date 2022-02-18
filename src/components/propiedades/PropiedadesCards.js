import { Link } from "react-router-dom";
import "./cards.css";

export const PropiedadesCards = ({
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

  console.log(id);

  return (
    <>
      <div className="card-container">
        <Link to={`/propiedad/${id}`} className="card-link">
          <div className="img-property-container">
            <img
              className="imagen-propiedad"
              src="https://st.hzcdn.com/simgs/pictures/living-rooms/living-room-moore-house-design-img~a111971d0d6ade6a_4-9543-1-fd1c78b.jpg"
            />
          </div>
        </Link>

        <div className="property-description-container">
          <Link to={`/propiedad/${id}`} className="card-link">
            <div className="property-description">
              <h2>{titulo}</h2>
              <span className="margin-top">{direccion}</span>

              <h3>{precio}</h3>
              <div className="comodidades">
                <span className="margin-top">{habs.substring(0, 5)}</span>
                <span className="margin-top">{bans.substring(0, 5)}</span>
                <span className="margin-top">{m2.substring(0, 4)}</span>
                <span className="margin-top">{carac1}</span>
              </div>
            </div>
          </Link>
          <p className="margin-top">{descripcion.substring(0, 150)}</p>
          <div className="btn-card-container">
            {auth ? (
              <div className="btn-card-container">
                <button className="btn delete">Eliminar</button>
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
    </>
  );
};
