import "./nosotros.css";
import "animate.css";
export const Nosotros = () => {
  return (
    <div
      className="nosotros-section animate__animated animate__fadeIn"
      id="nosotros"
    >
      <div className="nosotros">
        <div className="nosotros-text-container">
          <h2 className="quienes-somos">Quienes somos</h2>
          <p className="nosotros-parrafo">
            Soy Marina, Licenciada en Ciencia Política, Martillera y Corredora
            Pública. En esta ultima profesión que elegí, encontré mi pasión y es
            por eso que me brindo a mis clientes con tiempo y dedicación, con
            amabilidad y buena energía para satisfacer sus necesidades y
            superarlas.
          </p>
        </div>
        <div>
          <img src="../../assets/nosotros.jpeg" className="nosotros-img" />
        </div>
      </div>
    </div>
  );
};
