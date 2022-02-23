import { PropiedadesCards } from "./PropiedadesCards";
import "./list.css";
import "animate.css";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

export const PropiedadesList = () => {
  const [propiedades, setPropiedades] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "propiedades"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPropiedades(snapshot.docs);
        }
      ),
    []
  );
  console.log(propiedades);
  return (
    <div>
      <div className="list animate__animated animate__fadeIn">
        {propiedades.length !== 0 &&
          propiedades.map((propiedad) => (
            <PropiedadesCards
              key={propiedad.id}
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
          ))}
      </div>
    </div>
  );
};
