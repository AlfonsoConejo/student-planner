import { Link } from "react-router-dom";
import NoActivePeriodMessage from "@/components/NoActivePeriodMessage";

export default function Period() {
  return (
    <div className="flex flex-col flex-1 gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">
          Periodos
        </h1>

        <Link to="/app/periods/new" className="bg-sky-600 hover:bg-sky-500 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-colors">
          Nuevo periodo
        </Link>
      </div>

      <div className="flex-1">
        <NoActivePeriodMessage/>
      </div>
    </div>
  );
}