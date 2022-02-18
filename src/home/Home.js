// import { PropiedadScreen } from "./components/propiedades/propiedades-screen/PropiedadScreen";

import { Contacto } from "../containers/contacto/Contacto";

import { Header } from "../containers/header/Header";
import { Nosotros } from "../containers/nosotros/Nosotros";
import { Novedades } from "../containers/novedades/Novedades";
import "./home.css";

// import { Propiedades } from "./containers/propiedades/Propiedades";

function App() {
  return (
    <div className="home">
      <div>
        <Header />
        <Novedades />
        <Nosotros />
        <Contacto />
      </div>
    </div>
  );
}

export default App;
