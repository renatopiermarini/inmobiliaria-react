import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../../firebase/firebase-config";
import "./propiedad-screen.css";

export const PropiedadScreen = () => {
  const { propiedadId } = useParams();
  const navigate = useNavigate();
  const [propiedad, setPropiedad] = useState([]);

  useEffect(() => {
    const funcionaWachoDale = doc(db, "propiedades", propiedadId);

    getDoc(funcionaWachoDale).then((data) => {
      setPropiedad(data.data());
    });
  }, []);

  return (
    <div id="propiedad">
      <div className="propiedad-screen">
        <div className="propiedad-container">
          <div className="btn-volver-div">
            <button className="btn-volver" onClick={() => navigate(-1)}>
              Atrás
            </button>
          </div>
          <div className="propiedad-screen-info">
            <h2>{propiedad?.titulo}</h2>

            <div className="address">
              <p>{propiedad?.direccion}</p>
              <a>
                <span>Ver mapa</span>
              </a>
            </div>
            <h3>
              {Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(propiedad?.precio)}
            </h3>
          </div>
          <div className="caracteristicas">
            <h3>Caracteristicas</h3>
            <ul>
              {/* Aca deberia mapear las caracteristicas segun existan o no */}
              <li>{propiedad?.habs + " habitaciones"}</li>
              <li>{propiedad?.bans + " baños"}</li>
              <li>{propiedad?.m2 + " m²"}</li>
              {propiedad.carac1 !== "" && <li>{propiedad?.carac1}</li>}
              {propiedad.carac2 !== "" && <li>{propiedad?.carac2}</li>}
              {propiedad.carac3 !== "" && <li>{propiedad?.carac3}</li>}
              {propiedad.carac4 !== "" && <li>{propiedad?.carac4}</li>}
            </ul>
          </div>
          <div className="propiedad-screen-img-container">
            <img className="img-propiedad-screen" src={propiedad?.image} />
            <img className="img-propiedad-screen" src={propiedad?.imagen0} />
            <img className="img-propiedad-screen" src={propiedad?.imagen1} />
            {propiedad.imagen2 ? (
              <img className="img-propiedad-screen" src={propiedad?.imagen2} />
            ) : (
              <p></p>
            )}
            {propiedad.imagen3 ? (
              <img className="img-propiedad-screen" src={propiedad?.imagen3} />
            ) : (
              <p></p>
            )}

            {propiedad.imagen4 ? (
              <img className="img-propiedad-screen" src={propiedad?.imagen4} />
            ) : (
              <p></p>
            )}

            {propiedad.imagen5 ? (
              <img className="img-propiedad-screen" src={propiedad?.imagen5} />
            ) : (
              <p></p>
            )}
            {propiedad.imagen6 ? (
              <img className="img-propiedad-screen" src={propiedad?.imagen6} />
            ) : (
              <p></p>
            )}

            {propiedad.imagen7 ? (
              <img className="img-propiedad-screen" src={propiedad?.imagen7} />
            ) : (
              <p></p>
            )}

            {propiedad.imagen8 ? (
              <img className="img-propiedad-screen" src={propiedad?.imagen8} />
            ) : (
              <p></p>
            )}
            {propiedad.imagen9 ? (
              <img className="img-propiedad-screen" src={propiedad?.imagen9} />
            ) : (
              <p></p>
            )}

            <p>{propiedad?.descripcion}</p>
          </div>
          <div className="mapa">aca va el mapa</div>
          <div className="btn-propiedades-contactar">
            <button className="btn-contact">CONTACTAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};
