package com.pizzaShopBoys.app.service;

import com.pizzaShopBoys.app.model.Employee;
import com.pizzaShopBoys.app.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;

//    CREATE
    public Optional<Employee> createEmployee(Employee employee){
        return Optional.of(employeeRepository.save(employee));
    }
//    READ
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }
//    UPDATE
    public Optional<Employee> updateEmployee(Employee employee){
        if(employeeRepository.existsById(employee.getId())){
            return Optional.of(employeeRepository.save(employee));
        }
        else return Optional.empty();
    }

//    DELETE
    public void deleteEmployeeById(int id){
        employeeRepository.deleteById(id);
    }
}
