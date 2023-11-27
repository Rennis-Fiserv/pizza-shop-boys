import { useEffect, useState } from "react";
import './EmployeeManagementPage.css';

const EmployeeManagementPage = () => {
  const initialFormState = {
    id: 0,
    firstName: "",
    lastName: "",
    salary: "",
    employeeRole: "",
  };
  const [employee, setEmployee] = useState(initialFormState);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:8080/api/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
  }, []);

  const remove = async (event, id) => {
    event.preventDefault();
    console.log('Removing employee with ID:', id);
    await fetch(`http://localhost:8080/api/employees/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log('Delete response:', response);
      let updatedEmployees = [...employees].filter((i) => i.id !== id);
      setEmployees(updatedEmployees);
    });
  }

  const add = async (event) => {
    event.preventDefault();

    await fetch(`http://localhost:8080/api/employees`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });
    setEmployee(initialFormState);
    // Reload the data after adding a new employee
    fetchEmployees();
  };

  const fetchEmployees = () => {
    fetch("http://localhost:8080/api/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const employeesList = employees.map((employee) => {
    return (
      <form key={employee.id} onSubmit={(e) => handleSubmit(e, employee.id)}>
        <table>
          <thead>
            <tr>
              <td style={{ whiteSpace: "nowrap" }}>
                <input
                  type="text"
                  name="firstName"
                  value={employee.firstName}
                  onChange={(e) => handleEmployeeFieldChange(e, employee.id)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="lastName"
                  value={employee.lastName}
                  onChange={(e) => handleEmployeeFieldChange(e, employee.id)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="salary"
                  value={employee.salary}
                  onChange={(e) => handleEmployeeFieldChange(e, employee.id)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="employeeRole"
                  value={employee.employeeRole}
                  onChange={(e) => handleEmployeeFieldChange(e, employee.id)}
                />
              </td>
              <td>
                <button size="sm" color="primary" type="submit">
                  Save
                </button>
                <button
                  size="sm"
                  color="danger"
                  onClick={(e) => remove(e, employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </thead>
        </table>
      </form>
    );
  });


  const handleEmployeeFieldChange = (event, employeeId) => {
    const { name, value } = event.target;
    const updatedEmployees = employees.map((employee) =>
      employee.id === employeeId ? { ...employee, [name]: value } : employee
    );
    setEmployees(updatedEmployees);
  };

  const handleSubmit = async (event, employeeId) => {
    event.preventDefault();

    const editedEmployee = employees.find(
      (employee) => employee.id === employeeId
    );

    await fetch(`http://localhost:8080/api/employees/${employeeId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedEmployee),
    });
  };

  return (
    <>
      <div>
        <h3>Employees</h3>
        <table>
          <thead>
            <tr>
              <td width={200}>First Name</td>
              <td width={200}>Last Name</td>
              <td width={200}>Salary</td>
              <td width={200}>Role</td>
            </tr>
          </thead>
        </table>
        <div>{employeesList}</div>
        {/* New employee form */}
        <form onSubmit={add}>
          <table>
            <thead>
              <tr>
                <td>
                  <input
                    type="text"
                    name="firstName"
                    value={employee.firstName}
                    onChange={(e) => setEmployee({ ...employee, firstName: e.target.value })}
                    placeholder="First Name"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="lastName"
                    value={employee.lastName}
                    onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
                    placeholder="Last Name"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="salary"
                    value={employee.salary}
                    onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
                    placeholder="Salary"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="employeeRole"
                    value={employee.employeeRole}
                    onChange={(e) => setEmployee({ ...employee, employeeRole: e.target.value })}
                    placeholder="Role"
                  />
                </td>
                <td>
                  <button size="sm" color="success" type="submit">
                    Add
                  </button>
                </td>
              </tr>
            </thead>
          </table>
        </form>
      </div>
    </>
  );
};

export default EmployeeManagementPage;
