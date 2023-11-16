import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

const EmployeeInfo = () => {

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('api/employees')
      .then(response => response.json())
      .then(data => {
        setEmployees(data);
        setLoading(false);
      })
  }, []);

  const remove = async (id) => {
    await fetch(`/api/employees/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedEmployees = [...employees].filter(i => i.id !== id);
      setEmployees(updatedEmployees);
    });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const employeesList = employees.map(employee => {
    return <tr key={employee.id}>
      <td style={{whiteSpace: 'nowrap'}}>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.salary}</td>
      <td>{employee.employeeRole}</td>
      <td>
        <ButtonGroup>
          <Button size="sm" color="primary" tag={Link} to={"/employees/" + employee.id}>Edit</Button>
          <Button size="sm" color="danger" onClick={() => remove(employee.id)}>Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  });

  return (
    <div>
      <Container fluid>
        <div className="float-end">
          <Button color="success" tag={Link} to="/groups/new">Add Employee</Button>
        </div>
        <h3>New Employee</h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th width="20%">First Name</th>
            <th width="20%">Last Name</th>
            <th width="20%">Salary</th>
            <th width="20%">Role</th>
          </tr>
          </thead>
          <tbody>
          {employeesList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default EmployeeInfo;