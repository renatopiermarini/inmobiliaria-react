import { useState } from "react";
import "./navbar.css";
import { BurgerButton } from "./BurgerButton";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <nav>
        <Link to="/">
          <img src="../../assets/logo.jpeg" />
        </Link>
        <div className={`links ${clicked ? "active" : ""}`}>
          <a href="/">Inicio</a>
          <a href="/#novedades">Novedades</a>
          <NavLink to="/propiedades">Propiedades</NavLink>
          <a href="/#nosotros">Nosotros</a>
          <a href="/#contacto">Contacto</a>
        </div>
        <div className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <section className={`initial ${clicked ? " active" : ""}`}></section>
      </nav>
    </>
  );
};
