import { useState } from "react";
import "./navbar.css";
import { BurgerButton } from "./BurgerButton";

export const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <nav>
        <img src="../../assets/logo.jpeg" />
        <div className={`links ${clicked ? "active" : ""}`}>
          <a href="/">Inicio</a>
          <a href="#h">Nosotros</a>
          <a href="#h">Novedades</a>
          <a href="#h">Contacto</a>
        </div>
        <div className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <section className={`initial ${clicked ? " active" : ""}`}></section>
      </nav>
    </>
  );
};
