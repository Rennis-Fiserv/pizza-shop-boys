package com.pizzaShopBoys.app.repository;

import com.pizzaShopBoys.app.model.ZIP;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ZIPRepository extends ListCrudRepository<ZIP, Integer> {
}
