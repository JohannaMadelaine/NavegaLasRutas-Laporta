import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemSeleccionado from "./ItemSeleccionado";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const [productoSeleccionado, setProductoSeleccionado] = useState({});
  useEffect(() => {
    const findProduct = productos.find((el) => el.id === parseInt(id));
    setProductoSeleccionado(findProduct);
  },[]);
  return (
    <div>
      <ItemSeleccionado
        key={productoSeleccionado.id}
        id={productoSeleccionado.id}
        imageUrl={productoSeleccionado.imageUrl}
        name={productoSeleccionado.name}
        description={productoSeleccionado.description}
        specifications={productoSeleccionado.specifications}
      />
    </div>
  );
};

export default ItemDetail;
