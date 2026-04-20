import LandingHeader from "../components/header/LandingHeader";
import MateriasApp from "../components/MateriasApp";
import { useEffect } from "react";


export default function LandingLayout() {

  if (import.meta.env.MODE === "development") {
    console.log("Modo desarrollo");
  } else {
    console.log("Modo producción");
  }

  return (
    <>
      <LandingHeader />
      <MateriasApp/>
      
    </>
  );
}
