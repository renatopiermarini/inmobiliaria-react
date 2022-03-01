import "./contactform.css";
import emailjs from "emailjs-com";
import swal from "sweetalert";

export const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ive9qy6",
        "template_xg5fi5w",
        e.target,
        "D1JDIzUSAqTNrAy1a"
      )
      .then((res) =>
        swal({
          text: "Consulta enviada correctamente",
          icon: "success",
          timer: "2000",
        })
      )
      .catch((err) =>
        swal({
          text: "Ha ocurrido un error",
          icon: "danger",
          timer: "2000",
        })
      );
  };

  return (
    <div className="contact-form-section">
      <h2>Contacto</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Nombre"
          className="contact-input"
        />
        <input
          name="email"
          type="email"
          placeholder="Email@email.com"
          className="contact-input"
        />
        <input
          type="text"
          placeholder="Telefono"
          className="contact-input"
          name="telefono"
        />
        <textarea
          name="consulta"
          placeholder="Ingrese su consulta"
          className="contact-input contact-textarea"
        />
        <button className="btn-contact" type="submit">
          ENVIAR
        </button>
      </form>
    </div>
  );
};
