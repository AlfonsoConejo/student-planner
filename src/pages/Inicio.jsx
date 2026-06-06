import { useEffect } from "react";

export default function Inicio() {

    useEffect(() => {
        document.title = "Organizador";
      }, []);

    return(
        <div className="min-h-dvh w-full bg-zinc-900 ">
            <div className="flex mx-auto max-w-7xl">
                Probando este texto 1
            </div>
        </div>
    )
}