import "./App.css";
import EmployeeForm from "./components/employees/EmployeeForm";
import EmployeeList from "./components/employees/EmployeeList";
import { EmployeeProvider } from "./contexts/EmployeesContext";
import { SelectedProvider } from "./contexts/SelectedContext";

function App() {
  return (
    <EmployeeProvider>
      <SelectedProvider>
        <div className="flex justify-between gap-8 m-10">
          <div className="w-1/2">
            <EmployeeForm />
          </div>

          <div className="w-1/2">
            <EmployeeList />
          </div>
        </div>
      </SelectedProvider>
    </EmployeeProvider>
  );
}

export default App;
