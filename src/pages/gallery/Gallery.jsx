import "./Gallery.css"
import Footer from "../../components/footer/Footer";
import ShoesBrandList from "../../components/shoes-brand-list/ShoesBrandList";
import Products from "../../services/products";

function Gallery() {
  return(
    <>
    <ShoesBrandList/>
    <div className="gallery">
      <h1>Nuestros Productos</h1>
      <div className="gallery-container">
        {Products.map((product) => (
          <div key={product.id} className="gallery-item">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span className="price">{product.price.toFixed(2)}€</span>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Gallery;