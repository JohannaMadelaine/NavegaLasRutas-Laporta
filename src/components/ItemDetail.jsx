import React from "react";
import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { AppContext } from "./Context";

const ItemDetail = ({
  id,
  name,
  price,
  description,
  specifications,
  imageUrl,
  stock,
}) => {
  const { carrito, agregarAlCarrito } = useContext(AppContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1);
  };

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-6 bg-white"
      key={id}
    >
      <img className="w-full h-48 object-cover mb-4 rounded" src={imageUrl} />
      <h3 className="text-xl font-bold mb-2 text-center">{name}</h3>
      <p className="text-gray-700 text-base mb-4 text-center">{description}</p>
      <p className="text-gray-700 text-base mb-4 text-center ">
        {specifications}
      </p>
      <ItemCount
        cantidad={cantidad}
        handleSumar={handleSumar}
        handleRestar={handleRestar}
        handleAgregar={() => {
          agregarAlCarrito(id, name, price, imageUrl, cantidad);
        }}
      />
    </div>
  );
};

export default ItemDetail;
