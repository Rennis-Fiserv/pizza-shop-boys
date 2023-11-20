import { useEffect, useState } from "react";

const EmployeeManagementPage = () => {
  
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true);

    fetch('http://localhost:8080/api/employees')
      .then(response => response.json()) 
      .then(data => {
        setEmployees(data);
        setLoading(false);
      });
  }, []);

  const remove = async (id) => {
    await fetch(`http://localhost:8080/api/employees/${id}`, {
      method: "DELETE",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(() => {
      let updatedEmployees = [...employees].filter((i) => i.id !== id);
      setEmployees(updatedEmployees);
    });
  };

    if (loading) {
      return <p>Loading...</p>;
    }
  
  const employeesList = employees.map(employee => {
    return <form key={employee.id} onSubmit={(e) => handleSubmit(e, employee.id)}>
    <table>
      <thead>
        <tr>
          <td style={{ whiteSpace: "nowrap" }} width="20%">
            <input
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={(e) => handleEmployeeFieldChange(e, employee.id)}
            />
          </td>
          <td width="20%">
            <input
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={(e) => handleEmployeeFieldChange(e, employee.id)}
            />
          </td>
          <td width="20%">
            <input
              type="text"
              name="salary"
              value={employee.salary}
              onChange={(e) => handleEmployeeFieldChange(e, employee.id)}
            />
          </td>
          <td width="20%">
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
              onClick={() => remove(employee.id)}
            >
              Delete
            </button>
            <button
              size="sm"
              color="danger"
              onClick={() => remove(employee.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      </thead>
    </table>
  </form>
  });

  const handleEmployeeFieldChange = (event, employeeId) => {
    const { name, value } = event.target;
    const updatedEmployees = employees.map((employee) =>
      employee.id === employeeId
        ? { ...employee, [name]: value }
        : employee
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
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedEmployee),
    });
  };


  return (
    <>
      <div>
        <div className="float-end">
        </div>
        <h3>Employees</h3>
        <table>
          <thead>
            <tr>
              <td width="20%">First Name</td>
              <td width="20%">Last Name</td>
              <td width="20%">Salary</td>
              <td width="20%">Role</td>
            </tr>
          </thead>
        </table>
        <div>{employeesList}</div>
      </div>
    </>
  );
};

export default EmployeeManagementPage;
