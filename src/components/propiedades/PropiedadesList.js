import { PropiedadesCards } from "./PropiedadesCards";
import "./list.css";
import "./cards.css";
import "animate.css";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { LoadingCard } from "./LoadingCard";

export const PropiedadesList = () => {
  const [propiedades, setPropiedades] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "propiedades"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setLoading(false);
          setPropiedades(snapshot.docs);
        }
      ),
    []
  );

  return (
    <div>
      <div className="list">
        {loading ? (
          <LoadingCard />
        ) : (
          propiedades.length !== 0 &&
          propiedades.map((propiedad) => (
            <PropiedadesCards
              key={propiedad.id}
              image={propiedad?.data().image}
              imagen7={propiedad?.data().imagen7}
              id={propiedad?.id}
              operacion={propiedad?.data().operacion}
              titulo={propiedad?.data().titulo}
              direccion={propiedad?.data().direccion}
              precio={propiedad?.data().precio}
              habs={propiedad?.data().habs}
              bans={propiedad?.data().bans}
              m2={propiedad?.data().m2}
              carac1={propiedad?.data().carac1}
              descripcion={propiedad?.data().descripcion}
            />
          ))
        )}
      </div>
    </div>
  );
};
