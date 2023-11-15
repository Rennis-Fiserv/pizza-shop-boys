package com.pizzaShopBoys.app.controller;

import com.pizzaShopBoys.app.model.Employee;
import com.pizzaShopBoys.app.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    EmployeeController() {
    this.employeeService = new EmployeeService();
    }

    @GetMapping("/employee")
    ResponseEntity<List<Employee>> getAllEmployees(){
        return ResponseEntity.status(HttpStatus.OK).body(employeeService.getAllEmployees());
    }

    @GetMapping("/employee/{id}")
    ResponseEntity<Employee> getEmployeeById(@PathVariable int id){
        return ResponseEntity.status(HttpStatus.OK).body(employeeService.getEmployeeById());
    }

    @PostMapping("/employee")
    ResponseEntity<Employee> createEmployee(@RequestBody Employee employee){
   return employeeService.createEmployee(employee)
           .map(ResponseEntity::ok)
           .orElseGet(()->ResponseEntity.internalServerError().build());
    }

    @PutMapping("/employee/{id}")
    ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee){
        return employeeService.updateEmployee(employee).map(ResponseEntity::ok)
                .orElseGet(()->ResponseEntity.notFound().build());
    }

    @DeleteMapping("/employee")
    ResponseEntity<Void> deleteAllEmployees(){
        employeeService.deleteAllEmployees();
        return ResponseEntity.noContent().build();
    }
    @DeleteMapping("/employee/{id}")
    ResponseEntity<Void> deleteEmployeeById(@PathVariable int id){
        employeeService.deleteEmployeeById(id);
        return ResponseEntity.noContent().build();
    }
}