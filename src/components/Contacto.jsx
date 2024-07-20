import React from 'react'

const Contacto = () => {
  return (
    <form className="max-w-lg mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
        <input 
          type="text" 
          id="nombre" 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C70D2] focus:border-transparent" 
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
        <input 
          type="text" 
          id="email" 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C70D2] focus:border-transparent" 
        />
      </div>
      <div className="mb-4">
        <label htmlFor="asunto" className="block text-gray-700 text-sm font-bold mb-2">Asunto</label>
        <input 
          type="text" 
          name="asunto" 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C70D2] focus:border-transparent" 
        />
      </div>
      <div className="mb-4">
        <label htmlFor="mensaje" className="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
        <textarea 
          name="mensaje" 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8C70D2] focus:border-transparent" 
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button 
          type="submit" 
          className="bg-[#8C70D2] hover:bg-[#7B61C1] text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
        >
          ENVIAR
        </button>
      </div>
    </form>
  );
}

export default Contacto