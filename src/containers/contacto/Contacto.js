import { ContactForm } from "../../components/contactform/ContactForm";
import "./contacto.css";
import "animate.css";

export const Contacto = () => {
  return (
    <div className="contacto animate__animated animate__fadeIn" id="contacto">
      <ContactForm />
    </div>
  );
};
