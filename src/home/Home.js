// import { PropiedadScreen } from "./components/propiedades/propiedades-screen/PropiedadScreen";

import { Search } from "../components/search/Search";
import { Contacto } from "../containers/contacto/Contacto";

import { Nosotros } from "../containers/nosotros/Nosotros";
import { Novedades } from "../containers/novedades/Novedades";
import "./home.css";
import "animate.css";
import iconUp from "./icono/flecha-hacia-arriba.png";

// import { Propiedades } from "./containers/propiedades/Propiedades";

function App() {
  return (
    <div className="home animate__animated animate__fadeIn">
      <div>
        <Search />
        <Novedades />
        <Nosotros />
        <Contacto />
        <a
          href="https://api.whatsapp.com/send?phone=+5492920482896&text=Hola! quiero hacer una consulta."
          className="whatsapp-button"
          target="_blank"
        >
          <img
            src="https://i.ibb.co/VgSspjY/whatsapp-button.png"
            alt="botão whatsapp"
          />
        </a>
        <a href="#navbar" className="scroll-to-top-btn">
          <img src={iconUp} className="scroll-to-top-img" />
        </a>
      </div>
    </div>
  );
}

export default App;
