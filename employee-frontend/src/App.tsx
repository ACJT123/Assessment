import { useState } from "react";
import "./App.css";
import EmployeeForm from "./components/employees/EmployeeForm";
import EmployeeList from "./components/employees/EmployeeList";
import { EmployeeProvider } from "./contexts/EmployeesContext";

function App() {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  return (
    <EmployeeProvider>
      <div className="flex justify-between gap-8 m-10">
        <div className="w-1/2">
          <EmployeeForm selectedNumber={selectedNumber} />
        </div>

        <div className="w-1/2">
          <EmployeeList
            selectedNumber={(number: number) => {
              setSelectedNumber(number);
            }}
          />
        </div>
      </div>
    </EmployeeProvider>
  );
}

export default App;
