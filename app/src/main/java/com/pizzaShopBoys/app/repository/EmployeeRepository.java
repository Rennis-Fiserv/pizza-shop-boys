package com.pizzaShopBoys.app.repository;

import com.pizzaShopBoys.app.model.Employee;
import org.springframework.data.repository.ListCrudRepository;

public interface EmployeeRepository extends ListCrudRepository<Employee,Integer> {
}
