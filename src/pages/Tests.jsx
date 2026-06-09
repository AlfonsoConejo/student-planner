import { useAuth } from "@/customHooks/useAuth";
import NoActivePeriodMessage from "@/components/NoActivePeriodMessage";

export default function Tests() {
  const { user } = useAuth();

  return(
    <div className="flex flex-col flex-1 gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">
          Exámenes
        </h1>
  
        <button className="bg-sky-600 hover:bg-sky-500 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-colors">
          Agendar exámen
        </button>
      </div>

      <div className="flex-1">
      {
        !user?.period ? <NoActivePeriodMessage/> : (
          <>
          </>
        )
      }
      </div>
        
    </div>
  );
}