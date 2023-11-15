package com.pizzaShopBoys.app.repository;
import com.pizzaShopBoys.app.model.Customer;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends ListCrudRepository<Customer,Integer> {
}

