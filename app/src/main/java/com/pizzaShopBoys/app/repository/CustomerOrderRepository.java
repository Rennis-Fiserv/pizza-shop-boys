package com.pizzaShopBoys.app.repository;

import com.pizzaShopBoys.app.model.CustomerOrder;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerOrderRepository extends ListCrudRepository<CustomerOrder,Integer> {
}



