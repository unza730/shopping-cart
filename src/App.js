import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SingleTshirt from "./components/SingleTshirt";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart1Componen/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/product/:id" element={<SingleTshirt />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
