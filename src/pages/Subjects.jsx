import NoActivePeriodMessage from "@/components/NoActivePeriodMessage";
import EmptySubjectsMessage from "@/components/EmptySubjectsMessage";
import { apiFetch } from "@/services/apiFetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { notify } from "@/utils";
import { usePeriod } from "@/context/PeriodContext";

export default function Subjects() {
  const { selectedPeriod } = usePeriod();
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(subjects);

  if (!selectedPeriod) return;

  // Fetch all subjects of the period
  useEffect(() => {
    if (!selectedPeriod) {
      setSubjects([]);
      setIsLoading(false);
      return;
    }

    async function fetchSubjects() {
      try {
        setIsLoading(true);
        setSubjects([]);

        const res = await apiFetch(
          `/api/periods/${selectedPeriod.id}/subjects`
        );

        if (!res.ok) {
          notify("error", "Hubo un error en el servidor.");
          return;
        }

        const data = await res.json();
        setSubjects(data.data || []);
      } catch (error) {
        if (error.message !== "SESSION_EXPIRED") {
          notify("error", "Error de conexión.");
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchSubjects();
  }, [selectedPeriod]);


  return(
    <div className="flex flex-col flex-1 gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">
          Materias
        </h1>
        {
          selectedPeriod && 
          <Link to="/app/subjects/new" className="bg-sky-600 hover:bg-sky-500 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-colors">
            Agregar materia
          </Link>
        } 
      </div>

      <div className="flex-1">
        {
          isLoading ? (
            <div className="text-center p-6">Cargando materias...</div>
          ) : !selectedPeriod ? (
            <NoActivePeriodMessage />
          ) : subjects.length === 0 ? (
            <EmptySubjectsMessage />
          ) : (
            <></>
          )
        }
      </div>
    </div>
  );
}