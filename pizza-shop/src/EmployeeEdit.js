import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

const EmployeeEdit = () => {
  const initialFormState = {
    id: '',
    firstName: '',
    lastName: '',
    salary: '',
    employeeRole: ''
  };
  const [employee, setEmployee] = useState(initialFormState);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id !== 'new') {
      fetch(`/api/employees/${id}`)
        .then(response => response.json())
        .then(data => setEmployee(data));
    }
  }, [id, setEmployee]);

  const handleChange = (event) => {
    const { name, value } = event.target

    setEmployee({ ...employee, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch(`/api/employees${employee.id ? `/${employee.id}` : ''}`, {
      //method: (employee.id) ? 'PUT' : 'POST',
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    });
    setEmployee(initialFormState);
    navigate('/employees');
  }

  const title = <h2>{employee.id ? 'Edit Employee' : 'Add Employee'}</h2>;

  return (<div>
      <Container>
        {title}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="id">ID</Label>
            <Input type="text" name="id" id="id" value={employee.id || ''}
                   onChange={handleChange} autoComplete="address-level1"/>
          </FormGroup>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input type="text" name="firstName" id="firstName" value={employee.firstName || ''}
                   onChange={handleChange} autoComplete="address-level1"/>
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input type="text" name="lastName" id="lastName" value={employee.lastName || ''}
                   onChange={handleChange} autoComplete="address-level1"/>
          </FormGroup>
          <FormGroup>
            <Label for="salary">Salary</Label>
            <Input type="text" name="salary" id="salary" value={employee.salary || ''}
                   onChange={handleChange} autoComplete="address-level1"/>
          </FormGroup>
          <FormGroup>
            <Label for="employeeRole">Role</Label>
            <Input type="text" name="employeeRole" id="employeeRole" value={employee.employeeRole || ''}
                   onChange={handleChange} autoComplete="address-level1"/>
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/employees">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  )
};

export default EmployeeEdit;