import { CalendarDays, LayoutDashboard, BookOpen, Users, Parasol, FileSpreadsheet, ClipboardList} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-full bg-gray-800">
      <div className="overflow-y-auto py-5 px-3 h-full bg-gray-800 border-r border-gray-700">
        
      
        <ul className=" space-y-2 ">
          <h3 className="text-xs text-white">PERIODO</h3>
          <li>
            <NavLink to="/app/period" className="flex items-center p-2 text-base font-normal text-white rounded-lg border border-dashed bg-gray-700 hover:bg-gray-700  group">
              <CalendarDays size={19}/>
              <span className="ml-3 text-xs">Sin periodo seleccionado</span>
            </NavLink>
          </li>
        </ul>

        <ul className="pt-5 mt-5 space-y-2 border-t border-gray-700">
          <h3 className="text-xs text-white">GENERAL</h3>
          <li>
            <NavLink to="/app" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700  group">
              <LayoutDashboard size={19}/>
              <span className="ml-3">Tablero</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/app/calendar" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700  group">
              <CalendarDays size={19}/>
              <span className="ml-3">Calendario</span>
            </NavLink>
          </li>
        </ul>

        
        <ul className="pt-5 mt-5 space-y-2 border-t border-gray-700">
          <h3 className="text-xs text-white">ACTIVIDADES</h3>
          <li>
            <NavLink to="/app/tasks" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700  group">
              <ClipboardList size={19}/>
              <span className="ml-3">Tareas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/app/tests" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700  group">
              <FileSpreadsheet size={19}/>
              <span className="ml-3">Exámenes</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/app/subjects" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700  group">
              <BookOpen size={19}/>
              <span className="ml-3">Materias</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/app/teachers" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700  group">
              <Users size={19}/>
              <span className="ml-3">Profesores</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/app/breaks" className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700  group">
              <Parasol size={19}/>
              <span className="ml-3">Vacaciones</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
    );
};