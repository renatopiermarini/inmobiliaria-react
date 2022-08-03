import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPropiedadById } from "../../../firebase/firebase-config";
import { GoogleMaps } from "../../goiogle-maps/GoogleMaps";
import "animate.css";

import "./propiedad-screen.css";
import { LoadingScreen } from "./LoadingSreen";
import { ImgSlider } from "../../imgslider/ImgSlider";
import { ContactForm } from "../../contactform/ContactForm";
// import { EditProperty } from "../../propiedad-edit/EditProperty";

export const PropiedadScreen = () => {
  const { propiedadId } = useParams();
  const navigate = useNavigate();
  const [propiedad, setPropiedad] = useState([]);
  const [loading, setLoading] = useState(true);

  const userAuth = localStorage.getItem("usuario") || "";

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

  console.log(propiedad);

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
            <div className="propiedad-container-section">
              <div className="propiedad-left">
                <div className="propiedad-screen-info-container">
                  <div className="propiedad-screen-info">
                    <div className="propiedad-titulo-precio">
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
                    <p className="descripcion-p">{propiedad?.descripcion}</p>
                  </div>

                  <div className="caracteristicas">
                    <h3>Caracteristicas</h3>
                    <ul>
                      {propiedad?.habs && (
                        <li>{propiedad?.habs + " habitaciones"}</li>
                      )}
                      {propiedad?.bans && <li>{propiedad?.bans + " baños"}</li>}

                      {propiedad.m2 !== "" && (
                        <li>{propiedad.m2 && propiedad?.m2 + " m²"}</li>
                      )}
                      {propiedad.carac1 !== "" && <li>{propiedad?.carac1}</li>}
                      {propiedad.carac2 !== "" && <li>{propiedad?.carac2}</li>}
                      {propiedad.carac3 !== "" && <li>{propiedad?.carac3}</li>}
                      {propiedad.carac4 !== "" && <li>{propiedad?.carac4}</li>}
                    </ul>
                  </div>
                </div>
                <div className="contact-form-div">
                  <ContactForm />
                </div>
              </div>
              <div className="propiedad-right">
                <div className="propiedad-screen-img-container animate__animated animate__fadeIn">
                  <ImgSlider propiedadId={propiedadId} />
                </div>
                <div className="mapa-container">
                  <div className="mapa" id="mapa">
                    {propiedad.coordenadas !== undefined && (
                      <GoogleMaps
                        coordenadas={propiedad?.coordenadas}
                        titulo={propiedad?.titulo}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            {userAuth ? (
              <div className="btn-propiedades-contactar">
                <Link
                  to={`/propiedad/${propiedadId}/edit`}
                  className="btn-contact"
                >
                  Editar
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
      {/* {userAuth && (
        <EditProperty
          title={propiedad?.titulo}
          address={propiedad?.direccion}
          price={propiedad?.precio}
          rooms={propiedad?.habs}
          baths={propiedad?.bans}
          metros={propiedad?.m2}
          description={propiedad?.descripcion}
        />
      )} */}
    </div>
  );
};
