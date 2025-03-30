import { useState, useEffect, useRef } from "react";
import { FaRegTrashAlt, FaSearch, FaEdit, FaStar } from 'react-icons/fa';
import "./ShoeList.css";
import Footer from "../../components/footer/Footer";
import ShoesBrandList from "../../components/shoes-brand-list/ShoesBrandList";

function ShoeList() {
  // Estado inicial con algunos zapatos de ejemplo
  const initialShoes = [
    { id: 1, brand: "Nike", model: "Air Max", size: 42, color: "black", price: 120, rating: 4 },
    { id: 2, brand: "Adidas", model: "Superstar", size: 39, color: "white", price: 100, rating: 5 },
  ];

  const [shoes, setShoes] = useState(initialShoes);
  const [filteredShoes, setFilteredShoes] = useState(initialShoes);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);
  const formRef = useRef();

  // 1. LECTURA con búsqueda por nombre (marca o modelo)
  useEffect(() => {
    const results = shoes.filter(shoe => 
      shoe.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shoe.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredShoes(results);
  }, [searchTerm, shoes]);

  // 2. BORRADO
  const handleDelete = (id) => {
    setShoes(prevShoes => prevShoes.filter(shoe => shoe.id !== id));
  };

  // 3. ACTUALIZACIÓN
  const handleUpdate = (updatedShoe) => {
    setShoes(prevShoes => 
      prevShoes.map(shoe => shoe.id === updatedShoe.id ? updatedShoe : shoe)
    );
    setEditingId(null);
  };

  // 4. INSERCIÓN
  const handleAdd = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newShoe = {
      id: Date.now(),
      brand: formData.get('brand'),
      model: formData.get('model'),
      size: parseInt(formData.get('size')),
      color: formData.get('color'),
      price: parseFloat(formData.get('price')),
      rating: parseInt(formData.get('rating')) || 0
    };
    
    setShoes(prevShoes => [...prevShoes, newShoe]);
    formRef.current.reset();
  };

  // 5. Actualizar valoración
  const updateRating = (id, newRating) => {
    setShoes(prevShoes => 
      prevShoes.map(shoe => 
        shoe.id === id ? { ...shoe, rating: newRating } : shoe
      )
    );
  };

  // Componente de estrellas de valoración
  const RatingStars = ({ rating, onRatingChange, editable = false }) => {
    return (
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map(star => (
          <FaStar
            key={star}
            className={star <= rating ? "star-filled" : "star-empty"}
            onClick={() => editable && onRatingChange(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="shoe-container">
      <ShoesBrandList/>
      <br />
      <h1>Reseñas de Bambas</h1>
      
      {/* Barra de búsqueda */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar por marca..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Formulario de añadir/editar */}
      <form 
        ref={formRef} 
        onSubmit={editingId ? (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          handleUpdate({
            id: editingId,
            brand: formData.get('brand'),
            model: formData.get('model'),
            size: parseInt(formData.get('size')),
            color: formData.get('color'),
            price: parseFloat(formData.get('price')),
            rating: parseInt(formData.get('rating')) || 0
          });
        } : handleAdd}
      >
        <input name="brand" placeholder="Marca" required />
        <input name="model" placeholder="Modelo" required />
        <input 
          name="size" 
          type="number" 
          placeholder="Talla" 
          min="34" 
          max="48" 
          required 
        />
        <input name="color" placeholder="Color" required />
        <input 
          name="price" 
          type="number" 
          step="0.01" 
          min="0" 
          placeholder="Precio" 
          required 
        />
        <div className="rating-input">
          <label>Valoración:</label>
          <select name="rating" defaultValue="0">
            <option value="0">Sin valoración</option>
            <option value="1">1 estrella</option>
            <option value="2">2 estrellas</option>
            <option value="3">3 estrellas</option>
            <option value="4">4 estrellas</option>
            <option value="5">5 estrellas</option>
          </select>
        </div>
        <button type="submit">
          {editingId ? "Actualizar Zapato" : "Añadir Zapato"}
        </button>
        {editingId && (
          <button type="button" onClick={() => setEditingId(null)}>
            Cancelar
          </button>
        )}
      </form>

      {/* Lista de zapatos */}
      <div className="shoe-list">
        {filteredShoes.length > 0 ? (
          filteredShoes.map(shoe => (
            <div key={shoe.id} className="shoe-card">
              {editingId === shoe.id ? (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  handleUpdate({
                    id: shoe.id,
                    brand: formData.get('brand'),
                    model: formData.get('model'),
                    size: parseInt(formData.get('size')),
                    color: formData.get('color'),
                    price: parseFloat(formData.get('price')),
                    rating: parseInt(formData.get('rating')) || 0
                  });
                }}>
                  <input 
                    name="brand" 
                    defaultValue={shoe.brand} 
                    required 
                  />
                  <input 
                    name="model" 
                    defaultValue={shoe.model} 
                    required 
                  />
                  <input 
                    name="size" 
                    type="number" 
                    defaultValue={shoe.size} 
                    required 
                  />
                  <input 
                    name="color" 
                    defaultValue={shoe.color} 
                    required 
                  />
                  <input 
                    name="price" 
                    type="number" 
                    step="0.01" 
                    defaultValue={shoe.price} 
                    required 
                  />
                  <div className="rating-input">
                    <label>Valoración:</label>
                    <select name="rating" defaultValue={shoe.rating || 0}>
                      <option value="0">Sin valoración</option>
                      <option value="1">1 estrella</option>
                      <option value="2">2 estrellas</option>
                      <option value="3">3 estrellas</option>
                      <option value="4">4 estrellas</option>
                      <option value="5">5 estrellas</option>
                    </select>
                  </div>
                  <button type="submit">Guardar</button>
                  <button type="button" onClick={() => setEditingId(null)}>
                    Cancelar
                  </button>
                </form>
              ) : (
                <>
                  <div className="shoe-info">
                    <h3>{shoe.brand} {shoe.model}</h3>
                    <p>Talla: {shoe.size} | Color: {shoe.color}</p>
                    <p>Precio: {shoe.price.toFixed(2)}€</p>
                    <div className="shoe-rating">
                      <span>Valoración: </span>
                      <RatingStars 
                        rating={shoe.rating || 0} 
                        onRatingChange={(newRating) => updateRating(shoe.id, newRating)}
                        editable={true}
                      />
                      <span>({shoe.rating || 0}/5)</span>
                    </div>
                  </div>
                  <div className="shoe-actions">
                    <FaEdit 
                      className="edit-icon" 
                      onClick={() => {
                        setEditingId(shoe.id);
                        formRef.current.elements.brand.value = shoe.brand;
                        formRef.current.elements.model.value = shoe.model;
                        formRef.current.elements.size.value = shoe.size;
                        formRef.current.elements.color.value = shoe.color;
                        formRef.current.elements.price.value = shoe.price;
                        formRef.current.elements.rating.value = shoe.rating || 0;
                      }} 
                    />
                    <FaRegTrashAlt 
                      className="delete-icon" 
                      onClick={() => handleDelete(shoe.id)} 
                    />
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p>No se encontraron zapatos</p>
        )}
      </div>
      <br />
      <Footer/>
    </div>
  );
}

export default ShoeList;