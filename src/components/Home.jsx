import React from "react";
import 'animate.css';

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <h1 className="text-4xl font-bold text-center mb-8 animate__animated animate__backInDown">
      ¡ENTRENA DESDE CASA CON LOS MEJORES ARTICULOS DEPORTIVOS!
      </h1>
      <img 
        src="https://img.freepik.com/foto-gratis/grupo-jovenes-entrenando-gimnasio-interior-manteniendo-estilo-vida-deportivo_155003-45875.jpg" 
        alt="Entrena desde casa" 
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default Home;

