package com.pizzaShopBoys.app.repository;
import com.pizzaShopBoys.app.model.ProductVariant;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductVariantRepository extends ListCrudRepository<ProductVariant, Integer>{
}