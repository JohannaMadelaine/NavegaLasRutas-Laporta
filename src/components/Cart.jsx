import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./Context";

const Cart = () => {
  const { carrito, precioTotal, removeItemFromCart, vaciarCarrito } =
    useContext(AppContext);

  const handleEliminar = (index) => {
    removeItemFromCart(index);
  };
  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container max-w-sm mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="main-title text-2xl font-bold text-center mb-4">
        Carrito
      </h1>

      {carrito.map((prod, index) => (
        <div
          key={prod.id ? prod.id : index}
          className="bg-white shadow-md rounded-lg p-4 mb-4"
        >
          <img
            src={prod.imageUrl}
            alt={prod.name}
            className="w-24 h-24 object-cover rounded mx-auto mb-4"
          />
          <h3 className="text-lg font-bold mb-2 text-center">{prod.name}</h3>
          <p className="text-gray-700 text-sm text-center">
            Precio unit: ${prod.price}
          </p>
          <p className="text-gray-700 text-sm text-center">
            Precio total: ${prod.price * prod.cantidad}
          </p>
          <p className="text-gray-700 text-sm text-center">
            Cantidad: {prod.cantidad}
          </p>
          <button
            onClick={() => handleEliminar(index)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded mt-2 block mx-auto"
          >
            Eliminar
          </button>
        </div>
      ))}

      {carrito.length > 0 ? (
        <div className="text-center mt-6">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Precio total: ${precioTotal()}
          </h2>
          <button
            onClick={handleVaciar}
            className="bg-[#8C70D2] hover:bg-[#7B61C1] text-white font-bold py-2 px-4 rounded mr-2"
          >
            Vaciar
          </button>
          <Link to="/Checkout">
            <button className="bg-[#8C70D2] hover:bg-[#7B61C1] text-white font-bold py-2 px-4 rounded">
              Finalizar compra
            </button>
          </Link>
        </div>
      ) : (
        <h2 className="text-center text-lg text-gray-500 mt-6">
          El carrito está vacío :(
        </h2>
      )}
    </div>
  );
};

export default Cart;
