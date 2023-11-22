package com.pizzaShopBoys.app.controller;

import com.pizzaShopBoys.app.model.OrderDetail;
// import com.pizzaShopBoys.app.model.OrderDetailPK;
import com.pizzaShopBoys.app.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class OrderDetailController {

    @Autowired
    OrderDetailService orderDetailService;

    @GetMapping("/order-details")
    ResponseEntity<List<OrderDetail>> getAllOrders() {
        return ResponseEntity.status(HttpStatus.OK).body(orderDetailService.getAllOrders());
    }

    @GetMapping("/order-details/{id}")
    ResponseEntity<List<OrderDetail>> findByOrderDetail(@PathVariable int id) {
        return ResponseEntity.status(HttpStatus.OK).body(orderDetailService.findByOrderDetail(id));
    }

    // @PostMapping("/employees")
    // ResponseEntity<Employee> createEmployee(@RequestBody Employee employee){
    // return employeeService.createEmployee(employee)
    // .map(ResponseEntity::ok)
    // .orElseGet(()->ResponseEntity.internalServerError().build());
    // }
    //
    //
    //
    //
    // @PutMapping("/employees/{id}")
    // ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee){
    //
    // return employeeService.updateEmployee(employee).map(ResponseEntity::ok)
    // .orElseGet(()->ResponseEntity.notFound().build());
    // }
    //
    // @DeleteMapping("/employees/{id}")
    // ResponseEntity<Void> deleteEmployeeById(@PathVariable int id){
    // employeeService.deleteEmployeeById(id);
    // return ResponseEntity.noContent().build();
    // }
}
