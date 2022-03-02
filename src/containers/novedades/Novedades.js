import {
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PropiedadesCards } from "../../components/propiedades/PropiedadesCards";
import "./novedades.css";
import "../../components/propiedades/cards.css";
import "animate.css";
import { LoadingCard } from "../../components/propiedades/LoadingCard";

export const Novedades = () => {
  const [propiedades, setPropiedades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "propiedades"),
          orderBy("timestamp", "desc"),
          limit(4)
        ),
        (snapshot) => {
          setLoading(false);
          setPropiedades(snapshot.docs);
        }
      ),
    []
  );

  return (
    <div className="novedades" id="novedades">
      <div className="novedades-title">
        <h1>Propiedades Destacadas</h1>
      </div>
      <div className="novedades">
        {loading ? (
          <LoadingCard />
        ) : (
          propiedades.map(
            (propiedad) =>
              propiedades.length !== 0 && (
                <PropiedadesCards
                  key={propiedad.id}
                  imagen={propiedad?.data().imagen}
                  operacion={propiedad?.data().operacion}
                  id={propiedad?.id}
                  titulo={propiedad?.data().titulo}
                  direccion={propiedad?.data().direccion}
                  precio={propiedad?.data().precio}
                  habs={propiedad?.data().habs}
                  bans={propiedad?.data().bans}
                  m2={propiedad?.data().m2}
                  carac1={propiedad?.data().carac1}
                  descripcion={propiedad?.data().descripcion}
                />
              )
          )
        )}
      </div>
      <div>
        <Link to="/propiedades">
          <button className="btn-see-all">VER TODAS LAS PROPIEDADES</button>
        </Link>
      </div>
    </div>
  );
};
