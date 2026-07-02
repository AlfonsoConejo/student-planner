// ClassForm.jsx

const ClassForm = ({ classData, onChange }) => {
  return (
    <div className="rounded-xl border border-gray-700 p-5 flex flex-col gap-6">
      <h3 className="text-lg font-semibold text-white">
        Clase
      </h3>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Día */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-300">
            Día
          </label>

          <select
            value={classData.day}
            onChange={(e) => onChange("day", e.target.value)}
            className="
              rounded-lg
              border
              border-gray-700
              bg-gray-900
              px-4
              py-3
              text-white
              outline-none
              focus:border-cyan-600
            "
          >
            <option value="">Selecciona un día</option>
            <option value="monday">Lunes</option>
            <option value="tuesday">Martes</option>
            <option value="wednesday">Miércoles</option>
            <option value="thursday">Jueves</option>
            <option value="friday">Viernes</option>
            <option value="saturday">Sábado</option>
          </select>
        </div>

        {/* Aula */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-300">
            Aula
          </label>

          <input
            type="text"
            maxLength={30}
            placeholder="Ej. B-204"
            value={classData.classroom}
            onChange={(e) => onChange("classroom", e.target.value)}
            className="
              rounded-lg
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
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Hora de inicio */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-300">
            Hora de inicio
          </label>

          <input
            type="time"
            value={classData.startTime}
            onChange={(e) => onChange("startTime", e.target.value)}
            className="
              rounded-lg
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

        {/* Hora de término */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-300">
            Hora de término
          </label>

          <input
            type="time"
            value={classData.endTime}
            onChange={(e) => onChange("endTime", e.target.value)}
            className="
              rounded-lg
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
    </div>
  );
};

export default ClassForm;