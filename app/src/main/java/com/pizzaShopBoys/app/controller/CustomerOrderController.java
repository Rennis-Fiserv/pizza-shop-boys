package com.pizzaShopBoys.app.controller;

import com.pizzaShopBoys.app.dto.CustomerOrderDTO;
import com.pizzaShopBoys.app.model.CustomerOrder;
import com.pizzaShopBoys.app.repository.CustomerOrderRepository;
import com.pizzaShopBoys.app.repository.OrderDetailRepository;
import com.pizzaShopBoys.app.service.CustomerOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class CustomerOrderController {

    @Autowired
    CustomerOrderService customerOrderService;

    @Autowired
    CustomerOrderRepository customerOrderRepository;

    @Autowired
    OrderDetailRepository orderDetailRepository;

    @GetMapping("/customer-orders")
    ResponseEntity<List<CustomerOrder>> getAllCustomerOrders() {
        return ResponseEntity.status(HttpStatus.OK).body(customerOrderService.getAllCustomerOrders());
    }

    @GetMapping("/customer-orders/{id}")
    ResponseEntity<Optional<CustomerOrder>> getCustomerOrderById(@PathVariable int id) {
        return ResponseEntity.status(HttpStatus.OK).body(customerOrderService.getCustomerOrderById(id));
    }

    @PostMapping("/customer-orders")
    ResponseEntity<Optional<CustomerOrder>> createCustomerOrder(@RequestBody CustomerOrder customerOrder) {
        return ResponseEntity.status(HttpStatus.OK).body(customerOrderService.createCustomerOrder(customerOrder));
    }

    @PostMapping("/customer-orders-raw")
    ResponseEntity<Optional<CustomerOrder>> createCustomerOrder(@RequestBody CustomerOrderDTO customerOrderDTO) {
        return ResponseEntity.status(HttpStatus.OK).body(customerOrderService.createCustomerOrder2(customerOrderDTO));
    }



    @GetMapping("/customer-orders/byEmployeeByDate")
    public ResponseEntity<List<Object[]>> getOrdersByEmployeeByDate() {
        List<Object[]> result = customerOrderService.getOrdersByEmployeeByDate();
        return new ResponseEntity<>(result, HttpStatus.OK);

    }
    @GetMapping("/customer-orders/byZipByDate")
    public ResponseEntity<List<Object[]>> getOrdersByZipByDate() {
        List<Object[]> result = customerOrderService.getOrdersByZipByDate();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }


//
//    @PutMapping("/customers/{id}")
//    ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer) {
//
//        return customerService.updateCustomer(customer).map(ResponseEntity::ok)
//                .orElseGet(() -> ResponseEntity.notFound().build());
//    }
//
//    @DeleteMapping("/customers/{id}")
//    ResponseEntity<Void> deleteCustomerById(@PathVariable int id) {
//        customerService.deleteCustomerById(id);
//        return ResponseEntity.noContent().build();
//    }


    //
    // @PutMapping("/customers/{id}")
    // ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer) {
    //
    // return customerService.updateCustomer(customer).map(ResponseEntity::ok)
    // .orElseGet(() -> ResponseEntity.notFound().build());
    // }
    //
    // @DeleteMapping("/customers/{id}")
    // ResponseEntity<Void> deleteCustomerById(@PathVariable int id) {
    // customerService.deleteCustomerById(id);
    // return ResponseEntity.noContent().build();
    // }

}
