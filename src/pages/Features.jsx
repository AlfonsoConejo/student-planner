import FeatureCard from "@/components/FeatureCard";
import { useEffect } from "react";
import features from "../data/features";

export default function Features() {

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