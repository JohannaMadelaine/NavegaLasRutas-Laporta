import { useEffect, useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import fetchData from "./fetchData";
import Filter from "./components/Filter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Contacto from "./components/Contacto";
import ItemDetail from "./components/ItemDetail";
import Home from "./components/Home";

function App() {
  const [filterState, setFilterState] = useState("all");
  const [productos, setProductos] = useState([]);
  

  useEffect(() => {
    fetchData()
      .then((response) => {
        setProductos(response);
      })
      .catch((err) => console.error(err));
  }, []);


  const filteredProductos =
    filterState === "all"
      ? productos
      : productos.filter((producto) =>
          filterState === "Rebajas"
            ? producto.Rebajas
            : filterState === "NuevoProducto"
            ? producto.NuevoProducto
            : true
        );

 const yogaProductos = filteredProductos.filter(producto => producto.category === "yogaypilates");

  return (
    <>
      <BrowserRouter basename="/">
        <Header />
        <NavBar />
        <div className="mt-4 px-4">
          <label
            htmlFor="filter"
            className="block text-gray-700 text-sm font-bold mb-2"
          ></label>
          <Filter filterState={filterState} setFilterState={setFilterState} />
        </div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos/yogaypilates" element={<ItemListContainer productos={yogaProductos} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/detalle/:id" element={<ItemDetail productos={productos} />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
