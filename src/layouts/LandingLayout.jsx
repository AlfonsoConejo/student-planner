import LandingHeader from "../components/header/LandingHeader";
import MateriasApp from "../components/MateriasApp";
import AppHeader from "../components/header/AppHeader";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";


export default function LandingLayout() {

  if (import.meta.env.MODE === "development") {
    console.log("Modo desarrollo");
  } else {
    console.log("Modo producción");
  }

  return (
    <>
      <LandingHeader />

      <main>
        <Outlet/>
      </main>
      
    </>
  );
}
