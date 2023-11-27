import { useEffect, useState } from "react";
import './EmployeeManagementPage.css';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";


const EmployeeManagementPage = () => {

  let theme = createTheme({
    // Theme customization goes here as usual, including tonalOffset and/or
    // contrastThreshold as the augmentColor() function relies on these
  });
  
  theme = createTheme(theme, {
    // Custom colors created with augmentColor go here
    palette: {
      salmon: theme.palette.augmentColor({
        color: {
          main: '#E9A18B',
        },
        name: 'custom',
      }),
    },
  });
  
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
        <ThemeProvider theme={theme}>
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
                <Button 
                size="sm" 
                type="submit" 
                variant="outlined"
                color="salmon"
                sx={{
                    ':hover': {
                      bgcolor: 'pink', // theme.palette.primary.main
                      color: 'white',
                    },
                }}>
                  Save
                </Button>
                <Button
                  size="sm"
                  variant="outlined"
                  color="salmon"
                  sx={{
                    ':hover': {
                      bgcolor: 'pink', // theme.palette.primary.main
                      color: 'white',
                    },
                  }}
                  onClick={(e) => remove(e, employee.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          </thead>
        </table>
        </ThemeProvider>
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
              <td width={218}>First Name</td>
              <td width={218}>Last Name</td>
              <td width={218}>Salary</td>
              <td width={218}>Role</td>
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
                  <Button 
                  size="sm" 
                  variant="outlined"
                  color="salmon"
                  type="submit"
                  sx={{
                    ':hover': {
                      bgcolor: 'pink', // theme.palette.primary.main
                      color: 'white',
                    },
                  }}
                  >
                    Add
                  </Button>
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
