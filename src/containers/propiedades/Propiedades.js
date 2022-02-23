import { PropiedadesList } from "../../components/propiedades/PropiedadesList";
import "./propiedades.css";
import "animate.css";

export const Propiedades = () => {
  return (
    <div className="propiedades-section animate__animated animate__fadeIn">
      <div className="title">
        <h1>Propiedades</h1>
      </div>
      <div>
        <PropiedadesList />
      </div>
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
    </div>
  );
};
