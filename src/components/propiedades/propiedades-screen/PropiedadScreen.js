import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPropiedadById } from "../../../firebase/firebase-config";
import { GoogleMaps } from "../../goiogle-maps/GoogleMaps";
import "animate.css";

import "./propiedad-screen.css";
import { LoadingScreen } from "./LoadingSreen";

export const PropiedadScreen = () => {
  const { propiedadId } = useParams();
  const navigate = useNavigate();
  const [propiedad, setPropiedad] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPropiedadById(propiedadId).then((data) => {
      setLoading(false);
      setPropiedad(data.data());
    });
  }, []);

  const currency = Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(propiedad?.precio);

  return (
    <div id="propiedad">
      <div className="propiedad-screen">
        {loading ? (
          <LoadingScreen />
        ) : (
          <div className="propiedad-container animate__animated animate__fadeIn">
            <div className="btn-volver-div">
              <button className="btn-volver" onClick={() => navigate(-1)}>
                Atrás
              </button>
            </div>
            <div className="propiedad-screen-info">
              <h2>{propiedad?.titulo}</h2>

              <div className="address">
                <p>{propiedad?.direccion}</p>
                <a href="#mapa">
                  <span>Ver mapa</span>
                </a>
              </div>
              <h3>
                {propiedad?.operacion !== "alquiler" && "US"}
                {currency}
              </h3>
            </div>
            <div className="caracteristicas">
              <h3>Caracteristicas</h3>
              <ul>
                <li>{propiedad?.habs + " habitaciones"}</li>
                <li>{propiedad?.bans + " baños"}</li>
                <li>{propiedad?.m2 + " m²"}</li>
                {propiedad.carac1 !== "" && <li>{propiedad?.carac1}</li>}
                {propiedad.carac2 !== "" && <li>{propiedad?.carac2}</li>}
                {propiedad.carac3 !== "" && <li>{propiedad?.carac3}</li>}
                {propiedad.carac4 !== "" && <li>{propiedad?.carac4}</li>}
              </ul>
            </div>

            <div className="propiedad-screen-img-container animate__animated animate__fadeIn">
              <img
                className="img-propiedad-screen animate__animated animate__fadeIn"
                src={propiedad?.image}
              />
              {propiedad.imagen0 && (
                <img
                  className="img-propiedad-screen animate__animated animate__fadeIn"
                  src={propiedad?.imagen0}
                />
              )}
              {propiedad.imagen1 && (
                <img
                  className="img-propiedad-screen animate__animated animate__fadeIn"
                  src={propiedad?.imagen1}
                />
              )}
              {propiedad.imagen2 && (
                <img
                  className="img-propiedad-screen animate__animated animate__fadeIn"
                  src={propiedad?.imagen2}
                />
              )}
              {propiedad.imagen3 && (
                <img
                  className="img-propiedad-screen animate__animated animate__fadeIn"
                  src={propiedad?.imagen3}
                />
              )}

              {propiedad.imagen4 && (
                <img
                  className="img-propiedad-screen animate__animated animate__fadeIn"
                  src={propiedad?.imagen4}
                />
              )}

              {propiedad.imagen5 && (
                <img
                  className="img-propiedad-screen animate__animated animate__fadeIn"
                  src={propiedad?.imagen5}
                />
              )}
              {propiedad.imagen6 && (
                <img
                  className="img-propiedad-screen animate__animated animate__fadeIn"
                  src={propiedad?.imagen6}
                />
              )}

              {propiedad.imagen7 && (
                <img
                  className="img-propiedad-screen animate__animated animate__fadeIn"
                  src={propiedad?.imagen7}
                />
              )}

              {propiedad.imagen8 && (
                <img
                  className="img-propiedad-screen animate__animated animate__fadeIn"
                  src={propiedad?.imagen8}
                />
              )}
              {propiedad.imagen9 && (
                <img
                  className="img-propiedad-screen animate__animated animate__fadeIn"
                  src={propiedad?.imagen9}
                />
              )}

              <p>{propiedad?.descripcion}</p>
            </div>
            <div className="mapa" id="mapa">
              {propiedad.coordenadas !== undefined && (
                <GoogleMaps
                  coordenadas={propiedad?.coordenadas}
                  titulo={propiedad?.titulo}
                />
              )}
            </div>
            <div className="btn-propiedades-contactar">
              <a href="/#contacto" className="btn-contact">
                CONTACTAR
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
