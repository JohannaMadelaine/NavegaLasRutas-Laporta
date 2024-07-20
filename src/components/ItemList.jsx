import React from "react";
import Item from "./Item";


const ItemList = ({ productos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productos.map((el) => {
        return (
          <Item
            key={el.id}
            id={el.id}
            name={el.name}
            description={el.description}
            specifications={el.specifications}
            price={el.price}
            imageUrl={el.imageUrl}
            category={el.category}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
