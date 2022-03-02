import { useState } from "react";
import "./navbar.css";
import { BurgerButton } from "./BurgerButton";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  const auth = localStorage.getItem("usuario") || "";
  return (
    <>
      <nav id="navbar">
        <Link to="/">
          <img src="../../assets/logo.jpeg" />
        </Link>
        <div className={`links ${clicked ? "active" : ""}`}>
          <a href="/">Inicio</a>
          <a href="/#novedades">Novedades</a>
          <NavLink to="/propiedades" className="navlink-propiedades">
            Propiedades
          </NavLink>
          <a href="/#nosotros">Nosotros</a>
          <a href="/#contacto">Contacto</a>
          {auth && <NavLink to="/dashboard">Dashboard</NavLink>}
        </div>
        <div className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <section className={`initial ${clicked ? " active" : ""}`}></section>
      </nav>
    </>
  );
};
