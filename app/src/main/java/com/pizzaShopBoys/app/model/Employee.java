package com.pizzaShopBoys.app.model;

import jakarta.persistence.*;

@Entity
public class Employee {
    // FIELDS
    // @id means id will auto generate

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private String firstName;
    private String lastName;
    private double salary;
    private String employeeRole;
    @Column(columnDefinition = "boolean default true")
    private boolean isActive = true;

    // CONSTRUCTOR
    public Employee() {
    }

    public Employee(String firstName, String lastName, double salary, String employeeRole) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.employeeRole = employeeRole;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", salary=" + salary +
                ", employeeRole='" + employeeRole + '\'' + ", isActive='" + isActive +
                '}';
    }
    // GETTERS and SETTERS


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;

    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public String getEmployeeRole() {
        return employeeRole;
    }

    public void setEmployeeRole(String employeeRole) {
        this.employeeRole = employeeRole;
    }

    public boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(boolean isActive) {
        this.isActive = isActive;
    }
}


