import { createContext, useContext, useState } from "react";
import { SelectedContextType } from "../types/contexts/SelectedContext";

const SelectedContext = createContext<SelectedContextType>({
  selectedNumber: null,
  setSelectedNumber: () => {},
});

export const SelectedProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  return (
    <SelectedContext.Provider value={{ selectedNumber, setSelectedNumber }}>
      {children}
    </SelectedContext.Provider>
  );
};

export const useSelectedContext = () => useContext(SelectedContext);
