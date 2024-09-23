import { createContext, useContext, useState } from "react";

interface SelectedContextType {
  selectedNumber: null | number;
  setSelectedNumber: (selectedNumber: null | number) => void;
}

const SelectedContext = createContext<SelectedContextType>({
  selectedNumber: null,
  setSelectedNumber: () => {},
});

export const SelectedProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedNumber, setSelectedNumber] = useState<null | number>(null);

  return (
    <SelectedContext.Provider value={{ selectedNumber, setSelectedNumber }}>
      {children}
    </SelectedContext.Provider>
  );
};

export const useSelectedContext = () => useContext(SelectedContext);
