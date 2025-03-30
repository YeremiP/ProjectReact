import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import CopyrightPolicy from "./pages/copyRigth/Copyright";
import ShoeList from "./pages/shoe-list/ShoesList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/copyright" element={<CopyrightPolicy />}></Route>
        <Route path="/shoe-list" element={<ShoeList/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
