import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase/firebase-config";
import "./propiedad-screen.css";

export const PropiedadScreen = () => {
  const { propiedadId } = useParams();

  const [propiedad, setPropiedad] = useState([]);

  useEffect(() => {
    const funcionaWachoDale = doc(db, "propiedades", propiedadId);

    getDoc(funcionaWachoDale).then((data) => {
      setPropiedad(data.data());
    });
  }, []);

  console.log(propiedad);
  return (
    <div id="propiedad">
      <div className="propiedad-screen">
        <div className="propiedad-container">
          <div className="btn-volver-div">
            <a className="btn-volver">Atrás</a>
          </div>
          <div className="propiedad-screen-info">
            <h2>{propiedad?.titulo}</h2>

            <div className="address">
              <p>{propiedad?.direccion}</p>
              <a>
                <span>Ver mapa</span>
              </a>
            </div>
            <h3>{propiedad?.precio}</h3>
          </div>
          <div className="caracteristicas">
            <h3>Caracteristicas</h3>
            <ul>
              {/* Aca deberia mapear las caracteristicas segun existan o no */}
              <li>{propiedad?.habs}</li>
              <li>{propiedad?.bans}</li>
              <li>{propiedad?.m2}</li>
              {propiedad.carac1 !== "" && <li>{propiedad?.carac1}</li>}
              {propiedad.carac2 !== "" && <li>{propiedad?.carac2}</li>}
              {propiedad.carac3 !== "" && <li>{propiedad?.carac3}</li>}
              {propiedad.carac4 !== "" && <li>{propiedad?.carac4}</li>}
            </ul>
          </div>
          <div className="propiedad-screen-img-container">
            <img
              className="img-propiedad-screen"
              src="https://st.hzcdn.com/simgs/pictures/living-rooms/living-room-moore-house-design-img~a111971d0d6ade6a_4-9543-1-fd1c78b.jpg"
            />
            <img
              className="img-propiedad-screen"
              src="https://st.hzcdn.com/simgs/pictures/living-rooms/living-room-moore-house-design-img~a111971d0d6ade6a_4-9543-1-fd1c78b.jpg"
            />
            <img
              className="img-propiedad-screen"
              src="https://st.hzcdn.com/simgs/pictures/living-rooms/living-room-moore-house-design-img~a111971d0d6ade6a_4-9543-1-fd1c78b.jpg"
            />
            <button className="btn-ver-all-img">VER TODAS LAS FOTOS</button>

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
