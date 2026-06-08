import { CalendarPlus } from "lucide-react";

export default function Period() {
  return (
    <div className="flex flex-col flex-1 gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">
          Periodos
        </h1>

        <button className="bg-sky-600 hover:bg-sky-500 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-colors">
          Nuevo periodo
        </button>
      </div>

      <div className="flex-1">
        <div className="flex flex-col justify-center items-center w-full h-full p-6 border border-dashed border-zinc-700 rounded-xl">
          <CalendarPlus
            size={48}
            className="text-zinc-400 mb-4"
          />

          <p className="text-xl font-medium text-center">
            Sin periodos disponibles
          </p>

          <p className="mt-2 max-w-md text-center text-zinc-400">
            Crea tu primer periodo para comenzar a organizar
            materias, tareas y exámenes.
          </p>

          <button className="mt-6 bg-sky-600 hover:bg-sky-500 px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer">
            Crear primer periodo
          </button>
        </div>
      </div>
    </div>
  );
}