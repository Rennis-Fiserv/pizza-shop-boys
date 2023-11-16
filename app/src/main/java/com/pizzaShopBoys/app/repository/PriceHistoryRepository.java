package com.pizzaShopBoys.app.repository;

import com.pizzaShopBoys.app.model.PriceHistory;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PriceHistoryRepository extends ListCrudRepository<PriceHistory, Integer>{
}