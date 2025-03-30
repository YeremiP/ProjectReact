// import "./ShoesBrandList.css"

// function ShoesBrandList() {
//   return (
//     <>
//      <header id="main-header">
//      <nav className="nav-bar">
//       <ul>
//         <li><a href="/">Inicio</a></li>
//         <li><a href="/Gallery">Modelos</a></li>
//       </ul>
//     </nav>
//   </header>
//     </>
//   );
// }

// export default ShoesBrandList;

import { useState } from 'react';
import './ShoesBrandList.css';
import Logo from '../../components/shoes-brand-list/img/logo.png'; // Asegúrate de importar la imagen correctamente

function ShoesBrandList() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para manejar la apertura/cierre del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header id="main-header">
        <nav className={`nav-bar ${isMenuOpen ? 'active' : ''}`}>
          {/* Icono de hamburguesa */}
          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>
          {/* Logo */}
          <img src={Logo} alt="Bambas Logo" className="logo" />
          {/* Lista de navegación */}
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/Gallery">Modelos</a></li>
            <li><a href="/shoe-list">Reseñas</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default ShoesBrandList;


