import React, { useEffect, useState } from "react";

interface Employee {
  id: number;
  name: string;
}

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]); // Stocke les données de l'API
  const [error, setError] = useState<string | null>(null); // Gère les erreurs

  useEffect(() => {
    // Appel fetch pour récupérer les données
    fetch("http://localhost:3310/api/employees")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur réseau !");
        }
        return response.json();
      })
      .then((data: Employee[]) => {
        setEmployees(data); 
      })
      .catch((error) => {
        setError(error.message); 
      });
  }, []);

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  return (
    <div>
      <h1>Liste des employés</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
