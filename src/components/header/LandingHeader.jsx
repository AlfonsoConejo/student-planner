import { Link } from 'react-router-dom';

export default function LandingHeader() {
  return (
    <header className="w-full border-b border-white/10 bg-[#0b1220] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-lg">
          <span className="text-green-500">⬢</span>
          <span>StudentApp</span>
        </div>

        {/* Navegación */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">

          <button className="border border-white/20 bg-transparent hover:bg-white/10 px-3 py-1.5 rounded-md text-white font-medium cursor-pointer transition">
            Iniciar Sesión
          </button>

          <Link className="bg-green-600 hover:bg-green-500 px-3 py-1.5 rounded-md text-white font-medium cursor-pointer" to="/register">Registrarse</Link>
        </nav>
      </div>
    </header>
  );
}