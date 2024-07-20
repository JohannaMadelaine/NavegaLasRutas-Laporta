import React from "react";


const ItemSeleccionado = ({ id, name, description,specifications, imageUrl}) => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-6 bg-white"
      key={id}
    >
      <img className="w-full h-48 object-cover mb-4 rounded" src={imageUrl} />
      <h3 className="text-xl font-bold mb-2 text-center">{name}</h3>
      <p className="text-gray-700 text-base mb-4 text-center">{description}</p>
      <p className="text-gray-700 text-base mb-4 text-center ">{specifications}</p>
    </div>
  );
};

export default ItemSeleccionado;