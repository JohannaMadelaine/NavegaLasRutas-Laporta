import CartWidget from "./CartWidget/CartWidget";
import logo from "../assets/imagenes/FiteBive.png";


const NavBar = () => {
  return (
    <nav className="bg-neutral-950 p-2">
      <div className="flex justify-between items-center">
        <div>
          <img src={logo} alt="FiteVibe Logo" className="h-11 rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
        </div>
        <div className="flex-1 flex justify-center space-x-4">
          <button className="text-white hover:underline hover:underline-offset-4 hover:decoration-white transition-colors duration-300 p-2 rounded-md">Musculación</button>
          <button className="text-white hover:underline hover:underline-offset-4 hover:decoration-white transition-colors duration-300 p-2 rounded-md">Yoga y Pilates</button>
          <button className="text-white hover:underline hover:underline-offset-4 hover:decoration-white transition-colors duration-300 p-2 rounded-md">Accesorios</button>
          <button className="text-white hover:underline hover:underline-offset-4 hover:decoration-white transition-colors duration-300 p-2 rounded-md">Contacto</button>
        </div>
        <div className="text-white flex items-center space-x-4">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
