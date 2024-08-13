import React from "react";

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="item-count flex items-center justify-center space-x-4">
        <button
          onClick={handleRestar}
          className="bg-[#8C70D2] hover:bg-[#7B61C1] text-white font-bold py-2 px-4 rounded"
        >
          -
        </button>
        <p className="text-lg font-semibold">{cantidad}</p>
        <button
          onClick={handleSumar}
          className="bg-[#8C70D2] hover:bg-[#7B61C1] text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
      </div>
      <button
        className="agregar-al-carrito bg-[#8C70D2] hover:bg-[#7B61C1] text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleAgregar}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
