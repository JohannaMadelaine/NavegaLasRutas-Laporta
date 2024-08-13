import { RiShoppingCartLine } from "react-icons/ri";
import { AppContext } from "../Context";
import { Link } from "react-router-dom";
import React, { useContext } from "react";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(AppContext);

  return (
    <div>
      <Link className="menu-link" to="/Cart">
        <div>
          <span className="numerito">{cantidadEnCarrito()}</span>
          <RiShoppingCartLine size={28} />
        </div>
      </Link>
    </div>
  );
};

export default CartWidget;
