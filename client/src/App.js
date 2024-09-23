import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import axios from "axios";



function App() {

  const [employees, setEmployees] = useState([]);

  const getEmployeesList = async () => {
    console.log("getEmployeesList 1");
    const results = await axios.get("http://localhost:8084/employees/list")
    console.log("getEmployeesList 2");
    console.log("results.data = ", results.data);
    setEmployees(results.data);
  }

  useEffect(() => {
    getEmployeesList();
  }, []);


  return (
    <div className='container'>
      <h3>Employee Directory</h3>
      <hr/>
      <table className='table table-bordered table-striped'>
        <thead className='table-dark'>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index + employee.firstName}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
