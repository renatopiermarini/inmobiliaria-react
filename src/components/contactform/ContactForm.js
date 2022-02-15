import "./contactform.css";

export const ContactForm = () => {
  return (
    <div className="contact-form-section">
      <h2>Contacto</h2>

      <form className="contact-form">
        <input type="text" placeholder="Nombre" className="contact-input" />
        <input
          type="email"
          placeholder="Email@email.com"
          className="contact-input"
        />
        <input type="text" placeholder="Telefono" className="contact-input" />
        <textarea
          placeholder="Ingrese su consulta"
          className="contact-input contact-textarea"
        />
        <button className="btn-contact">ENVIAR</button>
      </form>
    </div>
  );
};
