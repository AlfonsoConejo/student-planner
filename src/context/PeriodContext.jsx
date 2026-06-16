import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../customHooks/useAuth";

export const PeriodContext = createContext();

export const PeriodProvider = ({ children }) => {
  const { user } = useAuth();

  const [selectedPeriod, setSelectedPeriod] = useState(null);

  // Recuperar periodo guardado cuando cambia el usuario
  useEffect(() => {
    if (!user?.id) {
      setSelectedPeriod(null);
      return;
    }

    const savedPeriod = localStorage.getItem(
      `selectedPeriod_${user.id}`
    );

    if (savedPeriod) {
      try {
        setSelectedPeriod(JSON.parse(savedPeriod));
      } catch (error) {
        console.error("Error al recuperar el periodo:", error);
        setSelectedPeriod(null);
      }
    } else {
      setSelectedPeriod(null);
    }
  }, [user?.id]);

  // Guardar periodo cuando cambie
  useEffect(() => {
    if (!user?.id) return;

    const key = `selectedPeriod_${user.id}`;

    if (!selectedPeriod) {
      localStorage.removeItem(key);
      return;
    }

    localStorage.setItem(
      key,
      JSON.stringify(selectedPeriod)
    );
  }, [selectedPeriod, user?.id]);

  return (
    <PeriodContext.Provider
      value={{
        selectedPeriod,
        setSelectedPeriod,
      }}
    >
      {children}
    </PeriodContext.Provider>
  );
};

export const usePeriod = () => useContext(PeriodContext);