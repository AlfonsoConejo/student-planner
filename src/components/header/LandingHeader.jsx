import { Link } from 'react-router-dom';

export default function LandingHeader() {
  return (
    <header className="w-full border-b border-white/5 bg-[#0f172a]/80 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-lg tracking-tight">
          <span className="text-blue-500 text-xl">⬢</span>
          <span className="text-white">StudentApp</span>
        </div>

        {/* Navegación */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          
          {/* Botón outline */}
          <Link 
            to="/login" 
            className="border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-1.5 rounded-md text-gray-200 font-medium transition-all duration-200">
            Iniciar Sesión
          </Link>

          {/* Botón principal */}
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-500 px-4 py-1.5 rounded-md text-white font-semibold transition-all duration-200 shadow-md shadow-blue-900/30"
          >
            Registrarse
          </Link>
        </nav>
      </div>
    </header>
  );
}