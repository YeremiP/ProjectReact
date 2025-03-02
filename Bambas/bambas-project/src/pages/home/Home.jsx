import Maps from "../../components/maps/Maps";
import "./Home.css";
import Footer from "../../components/footer/Footer"
import ShoesBrandList from "../../components/shoes-brand-list/ShoesBrandList";

function Home() {
  return (
    <>
      <ShoesBrandList />
      <div>
        <h1 className="title">¿Quienes somos?</h1>
        <p className="text">Somos <b>Bambas</b> una tienda de ventas de zapatos de edición limitada y exclusivas de las islas Canarias. Ofrecemos los modelos mas codiciados del mercado.<br />Cada par es cuidadosamente autenticado para garantizar su originalidad y calidad. Descubre una selección premium y eleva tu estilo con lo mejor del mundo sneaker.<br /> Visita nuestros modelos</p>
      </div>
      <div> <h1 className="visit-us"><b>Visitanos!!!</b></h1></div>
      <Maps />
      <Footer />

    </>
  );
}

export default Home;