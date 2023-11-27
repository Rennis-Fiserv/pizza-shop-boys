package com.pizzaShopBoys.app.service;

import com.pizzaShopBoys.app.model.Customer;
import com.pizzaShopBoys.app.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    @Autowired

    CustomerRepository customerRepository;

    // CREATE
    public Optional<Customer> createCustomer(Customer customer) {
        return Optional.of(customerRepository.save(customer));
    }

    // READ
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Optional<Customer> getCustomerById(int id) {
        return customerRepository.findById(id);
    }

    // UPDATE
    public Optional<Customer> updateCustomer(Customer customer) {
        if (customerRepository.existsById(customer.getId())) {
            return Optional.of(customerRepository.save(customer));
        } else
            return Optional.empty();
    }

    // DELETE
    public void deleteCustomerById(int id) {
        customerRepository.deleteById(id);
    }

    public void deleteAllCustomer() {
        customerRepository.deleteAll();
    }

}
