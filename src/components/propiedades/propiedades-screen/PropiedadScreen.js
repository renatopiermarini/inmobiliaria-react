import { Navbar } from "../../navbar/Navbar";
import "./propiedad-screen.css";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Footer } from "../../../containers/footer/Footer";

export const PropiedadScreen = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="propiedad-screen">
        <div className="propiedad-container">
          <div className="btn-volver-div">
            <a className="btn-volver">Atrás</a>
          </div>
          <div className="propiedad-screen-info">
            <h2>Alquiler de casa</h2>

            <div className="address">
              <p>Misiones Salesianas 1200, Viedma</p>
              <a>
                <span>Ver mapa</span>
              </a>
            </div>
            <h3>$70.000 /mes</h3>
          </div>
          <div className="caracteristicas">
            <h3>Caracteristicas</h3>
            <ul>
              <li>60m² construidos</li>
              <li>2 habitaciones</li>
              <li>3 banos</li>
              <li>Pileta</li>
              <li>Casa sin amueblar</li>
            </ul>
          </div>
          <div className="propiedad-screen-img-container">
            <img
              className="img-propiedad-screen"
              src="https://st.hzcdn.com/simgs/pictures/living-rooms/living-room-moore-house-design-img~a111971d0d6ade6a_4-9543-1-fd1c78b.jpg"
            />
            <img
              className="img-propiedad-screen"
              src="https://st.hzcdn.com/simgs/pictures/living-rooms/living-room-moore-house-design-img~a111971d0d6ade6a_4-9543-1-fd1c78b.jpg"
            />
            <img
              className="img-propiedad-screen"
              src="https://st.hzcdn.com/simgs/pictures/living-rooms/living-room-moore-house-design-img~a111971d0d6ade6a_4-9543-1-fd1c78b.jpg"
            />
            <button className="btn-ver-all-img">VER TODAS LAS FOTOS</button>

            <p>
              Voluptate voluptate ullamco reprehenderit duis laborum cillum
              laboris laboris. Elit dolor anim aute exercitation et ex ut dolore
              ut sint nulla. Sint aliquip et adipisicing sunt fugiat culpa
              fugiat irure veniam labore in. Lorem eiusmod laborum deserunt
              fugiat. Deserunt magna quis eiusmod ea anim exercitation minim
              laboris adipisicing dolor anim dolore. Voluptate exercitation
              fugiat fugiat quis id amet fugiat duis culpa enim nulla qui mollit
              ex. Sit reprehenderit excepteur esse sit ut ullamco voluptate ea
              in reprehenderit.
            </p>
          </div>
          <div className="mapa">aca va el mapa</div>
          <div className="btn-propiedades-contactar">
            <button className="btn-contact">CONTACTAR</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
