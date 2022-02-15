import { PropiedadScreen } from "./components/propiedades/propiedades-screen/PropiedadScreen";
import { Contacto } from "./containers/contacto/Contacto";
import { Footer } from "./containers/footer/Footer";
import { Header } from "./containers/header/Header";
import { Nosotros } from "./containers/nosotros/Nosotros";
import { Novedades } from "./containers/novedades/Novedades";
import { Propiedades } from "./containers/propiedades/Propiedades";

function App() {
  return (
    <div>
      {/* <PropiedadScreen /> */}
      {/* <Propiedades /> */}
      <Header />
      <Novedades />
      <Nosotros />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
