package com.pizzaShopBoys.app.controller;

import com.pizzaShopBoys.app.model.EmpMetricDTO;
import com.pizzaShopBoys.app.model.Employee;
import com.pizzaShopBoys.app.service.EmployeeService;
import jakarta.persistence.Tuple;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;
    @GetMapping("/employees")
    ResponseEntity<List<Employee>> getAllEmployees(){
        return ResponseEntity.status(HttpStatus.OK).body(employeeService.getAllEmployees());
    }
    @GetMapping("/employees/{id}")
    ResponseEntity<Employee> getAllEmployees(@PathVariable int id){
        return employeeService.getEmployeeById(id).map(ResponseEntity::ok)
                .orElseGet(()->ResponseEntity.notFound().build());
    }

    @GetMapping("/employee-metrics/{startDate}/{endDate}")
    List<EmpMetricDTO> getEmployeeMetrics(@PathVariable LocalDate startDate, @PathVariable LocalDate endDate){
        return employeeService.getEmployeeMetrics(startDate, endDate);
    }

    @PostMapping("/employees")
    ResponseEntity<Employee> createEmployee(@RequestBody Employee employee){
        return employeeService.createEmployee(employee)
                .map(ResponseEntity::ok)
                .orElseGet(()->ResponseEntity.internalServerError().build());
    }




    @PutMapping("/employees/{id}")
    ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee){

        return employeeService.updateEmployee(employee).map(ResponseEntity::ok)
                .orElseGet(()->ResponseEntity.notFound().build());
    }

    @DeleteMapping("/employees/{id}")
    ResponseEntity<Void> deleteEmployeeById(@PathVariable int id){
        employeeService.deleteEmployeeById(id);
        return ResponseEntity.noContent().build();
    }
}

