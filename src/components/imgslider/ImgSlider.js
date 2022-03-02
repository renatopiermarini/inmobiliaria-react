import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { getImagenesCarousel } from "../../firebase/firebase-config";

import { useEffect, useState } from "react";
import "./Slider.css";

export const ImgSlider = ({ propiedadId }) => {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    getImagenesCarousel(propiedadId).then(setImagenes);
  }, []);

  return (
    <Carousel className="carousel">
      {imagenes.length > 0 &&
        imagenes.map((imagen) => (
          <div key={imagen.id} className="imgslider">
            <img src={imagen.data().imagenCarousel} className="sliderimg" />
          </div>
        ))}
    </Carousel>
  );
};
