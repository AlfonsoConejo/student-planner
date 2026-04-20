import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function RegisterForm() {

  const API_URL = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.title = "Registro";
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-xl">
        
        {/* HEADER */}
        <h1 className="text-white text-2xl font-semibold text-center mb-6">
          Crear cuenta
        </h1>

        {/* SOCIAL */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button className="border border-gray-600 bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600 transition">
            GitHub
          </button>
          <button className="border border-gray-600 bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600 transition">
            Google
          </button>
        </div>

        <div className="text-center text-gray-400 text-sm mb-6">o</div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4" >
          
          {/* First Name */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Nombre
            </label>
            <input onChange={handleChange}
              type="text"
              name="firstName"
              placeholder="Juan"
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Apellido
            </label>
            <input onChange={handleChange}
              type="text"
              name="lastName"
              placeholder="Pérez"
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Correo
            </label>
            <input onChange={handleChange}
              type="email"
              name="email"
              placeholder="correo@email.com"
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Contraseña
            </label>
            <input onChange={handleChange}
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md font-semibold transition"
          >
            Crear cuenta
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-gray-400 text-sm text-center mt-6">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="text-blue-400 hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}