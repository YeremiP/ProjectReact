import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
