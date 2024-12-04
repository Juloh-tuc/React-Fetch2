import React from "react";
import EmployeeList from "./components/EmployeesList";

const App: React.FC = () => {
  return (
    <div>
      <h1>Bienvenue dans l'application</h1>
      <EmployeeList />
    </div>
  );
};

export default App;
