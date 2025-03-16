import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ShoeCarousel.css"; // Estilos personalizados

// Importa las imágenes de zapatos
import airJordan1 from "./img/air-jordan1-retro-high-og-chicago-lost-&-found.png";
import airJordan4 from "./img/air-jordan-4-retro-military-black.png";
import airJordan5 from "./img/air-jordan-5-retro-og.png";


const shoeImages = [airJordan1, airJordan4, airJordan5];

function ShoeCarousel() {
  const settings = {
    dots: true, // Muestra los puntos de navegación
    infinite: true, // Carrusel infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 3, // Muestra 3 imágenes a la vez
    slidesToScroll: 1, // Se mueve de una en una
    autoplay: true, // Movimiento automático
    autoplaySpeed: 3000, // Cada 3 segundos
    responsive: [
      {
        breakpoint: 768, // En pantallas pequeñas
        settings: {
          slidesToShow: 1, // Muestra solo 1 imagen
        },
      },
    ],
  };

  return (
    <div className="shoe-carousel">
      <Slider {...settings}>
        {shoeImages.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Zapato ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}


export default ShoeCarousel;
