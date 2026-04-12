export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-white">
      
      {/* Card */}
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
        
        {/* Título */}
        <h1 className="text-2xl font-bold mb-2">
          Crear cuenta
        </h1>
        <p className="text-gray-400 mb-6 text-sm">
          Empieza a organizar tus materias y tareas 🚀
        </p>

        {/* Formulario */}
        <form className="flex flex-col gap-4">
          
          {/* Nombre */}
          <input
            type="text"
            placeholder="Nombre"
            className="bg-transparent border border-white/10 rounded-md px-3 py-2 outline-none focus:border-green-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Correo electrónico"
            className="bg-transparent border border-white/10 rounded-md px-3 py-2 outline-none focus:border-green-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Contraseña"
            className="bg-transparent border border-white/10 rounded-md px-3 py-2 outline-none focus:border-green-500"
          />

          {/* Botón */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-500 py-2 rounded-md font-medium transition"
          >
            Registrarse
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-400 mt-4 text-center">
          ¿Ya tienes cuenta?{" "}
          <span className="text-green-500 cursor-pointer hover:underline">
            Inicia sesión
          </span>
        </p>
      </div>
    </div>
  );
}