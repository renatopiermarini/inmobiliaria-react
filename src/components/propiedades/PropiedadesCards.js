import "./cards.css";

export const PropiedadesCards = () => {
  return (
    <div className="card-container">
      <div>
        <img
          className="imagen-propiedad"
          src="https://st.hzcdn.com/simgs/pictures/living-rooms/living-room-moore-house-design-img~a111971d0d6ade6a_4-9543-1-fd1c78b.jpg"
        />
      </div>
      <div className="property-description-container">
        <div className="property-description">
          <a className="margin-top">
            Casa en calle Misiones Salesianas 1200, Vie...
          </a>
          <h2 className="margin-top">US$ 120.000</h2>
          <div className="comodidades">
            <span className="margin-top">3 hab.</span>
            <span className="margin-top">2 baños</span>
            <span className="margin-top">75 m²</span>
            <span className="margin-top"> 2 plantas</span>
          </div>
          <p className="margin-top">
            Commodo ea consequat voluptate ullamco. Elit reprehenderit laboris
            magna velit nostrud. Excepteur ullamco officia quis tempor...
          </p>
        </div>

        <div className="btn-card-container">
          <button className="btn btn-llamar">Contactar</button>
          <button className="btn btn-ver-mas">Ver mas</button>
        </div>
      </div>
    </div>
  );
};
