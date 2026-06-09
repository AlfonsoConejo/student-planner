import { CalendarDays } from "lucide-react";

export default function CreatePeriod() {

  const PERIOD_COLORS = [
    "#EF4444", // Red
    "#F97316", // Orange
    "#F59E0B", // Amber
    "#EAB308", // Yellow
    "#84CC16", // Lime
    "#22C55E", // Green
    "#10B981", // Emerald
    "#14B8A6", // Teal
    "#06B6D4", // Cyan
    "#0EA5E9", // Sky
    "#3B82F6", // Blue
    "#6366F1", // Indigo
    "#8B5CF6", // Violet
    "#A855F7", // Purple
    "#D946EF", // Fuchsia
    "#EC4899", // Pink

    "#DC2626",
    "#EA580C",
    "#CA8A04",
    "#65A30D",
    "#16A34A",
    "#059669",
    "#0F766E",
    "#0891B2",
    "#2563EB",
    "#4338CA",
    "#7C3AED",
    "#9333EA",
    "#C026D3",
    "#DB2777",
  ];


  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-semibold text-white">
          Nuevo periodo
        </h1>
      </div>

      <div className="max-w-3xl rounded-3xl border border-gray-800 bg-gray-800 p-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-cyan-900/40">
            <CalendarDays size={24} />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              Información del periodo
            </h2>

            <p className="text-sm text-gray-400">
              Completa los datos básicos del periodo académico.
            </p>
          </div>
        </div>

        <form className="flex flex-col gap-6">
          {/* Nombre */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-300"
            >
              Nombre del periodo
            </label>

            <input
              id="name"
              type="text"
              placeholder="Ej. Agosto - Diciembre 2026"
              className="
                rounded-xl
                border
                border-gray-700
                bg-gray-900
                px-4
                py-3
                text-white
                placeholder:text-gray-500
                outline-none
                focus:border-cyan-600
              "
            />
          </div>

          {/* Fechas */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="startDate"
                className="text-sm font-medium text-gray-300"
              >
                Fecha de inicio
              </label>

              <input
                id="startDate"
                type="date"
                className="
                  rounded-xl
                  border
                  border-gray-700
                  bg-gray-900
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-cyan-600
                "
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="endDate"
                className="text-sm font-medium text-gray-300"
              >
                Fecha de finalización
              </label>

              <input
                id="endDate"
                type="date"
                className="
                  rounded-xl
                  border
                  border-gray-700
                  bg-gray-900
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-cyan-600
                "
              />
            </div>
          </div>
          
<div className="grid grid-cols-6 gap-3">
  {PERIOD_COLORS.map((color) => (
    <button
      key={color}
      type="button"
      className="h-10 w-10 rounded-full border-2 border-gray-700"
      style={{ backgroundColor: color }}
    />
  ))}
</div>

          {/* Resumen */}
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-4">
            <h3 className="font-medium text-white">
              Recomendaciones
            </h3>

            <ul className="mt-2 space-y-1 text-sm text-gray-400">
              <li>
                • Utiliza nombres fáciles de identificar.
              </li>

              <li>
                • La fecha de inicio debe ser anterior a la de finalización.
              </li>

              <li>
                • Podrás editar el periodo posteriormente.
              </li>
            </ul>
          </div>

          {/* Botones */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              className="
                rounded-xl
                border
                border-gray-700
                px-5
                py-3
                text-gray-300
                hover:bg-gray-800
              "
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="
                rounded-xl
                bg-cyan-600
                px-5
                py-3
                font-medium
                text-white
                hover:bg-cyan-500
              "
            >
              Crear periodo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}