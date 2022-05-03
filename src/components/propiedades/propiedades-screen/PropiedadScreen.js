import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPropiedadById } from "../../../firebase/firebase-config";
import { GoogleMaps } from "../../goiogle-maps/GoogleMaps";
import "animate.css";

import "./propiedad-screen.css";
import { LoadingScreen } from "./LoadingSreen";
import { ImgSlider } from "../../imgslider/ImgSlider";
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
              {propiedad?.habs ||
                propiedad?.bans ||
                propiedad?.m2 ||
                propiedad.carac1 ||
                propiedad.carac2 ||
                propiedad.carac3 ||
                (propiedad.carac4 && (
                  <ul>
                    <li>
                      {propiedad?.habs && propiedad?.habs + " habitaciones"}
                    </li>
                    <li>{propiedad?.bans && propiedad?.bans + " baños"}</li>
                    {propiedad.m2 !== "" && (
                      <li>{propiedad.m2 && propiedad?.m2 + " m²"}</li>
                    )}
                    {propiedad.carac1 !== "" && <li>{propiedad?.carac1}</li>}
                    {propiedad.carac2 !== "" && <li>{propiedad?.carac2}</li>}
                    {propiedad.carac3 !== "" && <li>{propiedad?.carac3}</li>}
                    {propiedad.carac4 !== "" && <li>{propiedad?.carac4}</li>}
                  </ul>
                ))}
            </div>

            <div className="propiedad-screen-img-container animate__animated animate__fadeIn">
              <ImgSlider propiedadId={propiedadId} />

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
              <div className="btn-propiedades-contactar">
                <a href="/#contacto" className="btn-contact">
                  CONTACTAR
                </a>
              </div>
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
