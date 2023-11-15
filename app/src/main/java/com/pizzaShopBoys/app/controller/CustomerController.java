package com.pizzaShopBoys.app.controller;

import com.pizzaShopBoys.app.model.Customer;
import com.pizzaShopBoys.app.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @GetMapping("/customers")
    ResponseEntity<List<Customer>> getAllCustomers() {
        return ResponseEntity.status(HttpStatus.OK).body(customerService.getAllCustomers());
    }

    @PostMapping("/customers")
    ResponseEntity<Customer> createCustomer(@RequestBody Customer customer) {
        return customerService.createCustomer(customer)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.internalServerError().build());
    }

    @PutMapping("/customers/{id}")
    ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer) {

        return customerService.updateCustomer(customer).map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/customers/{id}")
    ResponseEntity<Void> deleteCustomerById(@PathVariable int id) {
        customerService.deleteCustomerById(id);
        return ResponseEntity.noContent().build();
    }
}
