import { useParams } from "react-router-dom";

export default function SubjectsForm() {

  //Detect if it is a Creation Form or an Edition Form
  const { id } = useParams();
  const isEditMode = Boolean(id);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-semibold text-white">
          {isEditMode ? "Editar Materia" : "Nueva materia"}
        </h1>
      </div>

      <div className="rounded-lg border border-gray-800 bg-gray-800 p-8">

      </div>
      
    </div>  
  )
}