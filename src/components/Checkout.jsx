import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "./Context";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("");
  const navigate = useNavigate();
  const { carrito, precioTotal, vaciarCarrito } = useContext(AppContext);
  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };
    console.log(pedido);

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      vaciarCarrito();
    });
  };

  useEffect(() => {
    if (pedidoId) {
      Swal.fire({
        title: "¡Gracias por tu compra!",
        text: `Tu número de pedido es: ${pedidoId}`,
        icon: "success",
        confirmButtonText: "Aceptar",
      }).then(() => {
        navigate("/");
      });
    }
  }, [pedidoId, navigate]);

  return (
    <div className="container max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Finalizar compra</h1>
      <form
        className="formulario bg-white shadow-md rounded-lg p-6 space-y-4"
        onSubmit={handleSubmit(comprar)}
      >
        <input
          type="text"
          placeholder="Ingresá tu nombre"
          {...register("nombre")}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Ingresá tu e-mail"
          {...register("email")}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="phone"
          placeholder="Ingresá tu teléfono"
          {...register("telefono")}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          className="enviar bg-[#8C70D2] hover:bg-[#7B61C1] text-white font-bold py-2 px-4 rounded w-full"
          type="submit"
        >
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
