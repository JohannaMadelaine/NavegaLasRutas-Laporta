import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Contacto from "./components/Contacto";
import Home from "./components/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ContextProvider } from "./components/Context";
import Cart from './components/Cart';
import Checkout from "./components/Checkout";
import Registro from "./components/Registo";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter basename="/">
        <Header />
        <NavBar />
        <div className="mt-4 px-4">
          <label
            htmlFor="filter"
            className="block text-gray-700 text-sm font-bold mb-2"
          ></label>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/contacto" element={<Registro />}/>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
