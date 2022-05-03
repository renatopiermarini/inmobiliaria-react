import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <h2>Marina Tortarolo</h2>
      <span>Oficina: San Martin 558 Local 2, Viedma</span>
      <span>Telefono: 2920482896</span>
      <span>Email: marinatortarolo@gmail.com</span>
      <div className="insta-face">
        <a href="https://www.instagram.com/marinatortaroloei/?hl=es">
          <img src="../../assets/instagram.png" />
        </a>
        <a href="https://www.facebook.com/Marina-Tortarolo-Estudio-Inm-108207047422549/">
          <img src="../../assets/facebook.png" />
        </a>
      </div>
      <a
        href="https://renato-piermarini-portfolio.vercel.app/"
        className="renato"
      >
        Desarrollada por Renato Piermarini
      </a>
    </div>
  );
};
