import FeatureCard from "@/components/FeatureCard";
import { useEffect } from "react";

export default function Features() {

  const features = [
    {
      id: 1,
      title: 'Autenticación con JWT',
      description: 'Acceso seguro con tokens de autenticación.',
      status: 'implemented'
    },
    {
      id: 2,
      title: 'Gestión de periodos',
      description: 'Administra ciclos y periodos académicos.',
      status: 'implemented'
    },
    {
      id: 3,
      title: 'Asignación de materias',
      description: 'Organiza materias por periodo activo.',
      status: 'developing'
    },
    {
      id: 4,
      title: 'Gestor de tareas',
      description: 'Crea y da seguimiento a tareas por materia.',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'Dashboard diario',
      description: 'Toda la información del día en un vistazo.',
      status: 'upcoming'
    },
    {
      id: 6,
      title: 'Control de vacaciones',
      description: 'Solicita y gestiona días libres y permisos.',
      status: 'upcoming'
    },
    {
      id: 7,
      title: 'Calendario de clases',
      description: 'Visualiza tus horarios en calendario interactivo.',
      status: 'upcoming'
    },
    {
      id: 8,
      title: 'Control de sesiones',
      description: 'Cierra sesión en otros dispositivos conectados.',
      status: 'upcoming'
    },
  ];

  useEffect(() => {
      document.title = "Funciones - Kitab";
    }, []);

  return(
    
    <div className="h-auto w-full text-white">
      {/* CENTER WRAPPER */}
      <div className="mx-auto flex flex-col w-full max-w-7xl justify-center">
        <section className="flex flex-col w-full px-6 pt-10 sm:pt-12 pb-6 gap-6 overflow-hidden">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Sigue la evolución de Kitab</h2>
            <p className="pt-3 text-slate-300">
              Esta hoja de ruta te muestra el camino recorrido y lo que estoy construyendo para ti. Explora las funciones ya disponibles, las que estoy desarrollando y las que pronto formarán parte de la experiencia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                status={feature.status}
              />
            ))}
          </div>  
        </section>
        
      </div>
      
    </div>
  )
}