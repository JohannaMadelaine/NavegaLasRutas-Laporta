import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, description, price, imageUrl }) => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-6 bg-white"
      key={id}
    >
      <img className="w-full h-48 object-cover mb-4 rounded" src={imageUrl} />
      <h3 className="text-xl font-bold mb-2 text-center ">{name}</h3>
      <p className="text-gray-700 text-base mb-4 text-center">{description}</p>
      <p className="text-gray-900 text-lg font-semibold mb-4 text-center">
        ${price}
      </p>
      <div className="flex justify-center space-x-4">
        <Link to={`/item/${id}`}>
          <button className="bg-[#8C70D2] hover:bg-[#7B61C1] text-white font-bold py-2 px-4 rounded">
            Ver detalle
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
