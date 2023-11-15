package com.pizzaShopBoys.app.repository;

import com.pizzaShopBoys.app.model.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends ListCrudRepository<Employee, Integer>{
}