import Maps from "../../components/maps/Maps";
import "./Home.css";
import Footer from "../../components/footer/Footer";
import ShoesBrandList from "../../components/shoes-brand-list/ShoesBrandList";
import ShoeCarousel from "../../components/shoe-carousel/ShoeCarousel";
import bannerImage from "../../components/banner/img/nike-air-banner.jpg";
import Banner from "../../components/banner/Banner";

function Home() {
  return (
    <>
      <ShoesBrandList />
      <br />
      <br />
      <Banner
        image={bannerImage}
        title="Bienvenido a Nuestra Tienda de Bambas"
        description="Encuentra los modelos más exclusivos aquí mismo"
      />
      <hr />
      <ShoeCarousel />
      <hr />
      <div>
        <p className="text">
           Visita nuestros modelos
        </p>
        <h1 className="visit-us">
          <b>Nos encontramos <br/>↓</b>
        </h1>
      </div>
      <Maps />
      <Footer />
    </>
  );
}

export default Home;
