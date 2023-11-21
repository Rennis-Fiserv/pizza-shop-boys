package com.pizzaShopBoys.app.repository;


import com.pizzaShopBoys.app.model.CustomerOrder;
import com.pizzaShopBoys.app.model.Employee;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerOrderRepository extends ListCrudRepository<CustomerOrder, Integer> {
}
