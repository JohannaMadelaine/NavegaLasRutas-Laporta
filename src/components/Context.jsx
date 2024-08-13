import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const ContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoInicial);

  const agregarAlCarrito = (id, name, price, imageUrl, cantidad) => {
    const itemAgregado = { id, name, price, imageUrl, cantidad };

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === id);

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
  };

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
  };

  const removeItemFromCart = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <AppContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        removeItemFromCart,
        cantidadEnCarrito,
        precioTotal,
        vaciarCarrito,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
