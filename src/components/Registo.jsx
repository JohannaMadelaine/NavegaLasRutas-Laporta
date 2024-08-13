import { useForm } from "react-hook-form";

const Registro = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  };

  return (
    <div className="container max-w-md mx-auto p-4">
      <h1 className="main-title text-3xl font-bold text-center mb-6">
        Contacto
      </h1>
      <form
        className="formulario bg-white shadow-md rounded-lg p-6 space-y-4"
        onSubmit={handleSubmit(enviar)}
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
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Registro;
