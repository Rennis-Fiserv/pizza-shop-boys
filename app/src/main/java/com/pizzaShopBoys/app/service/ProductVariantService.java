package com.pizzaShopBoys.app.service;

import com.pizzaShopBoys.app.model.ProductVariant;
import com.pizzaShopBoys.app.repository.ProductVariantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProductVariantService {
    @Autowired

    ProductVariantRepository productVariantRepository;

    // CREATE
    public Optional<ProductVariant> createProductVariant(ProductVariant var) {
        return Optional.of(productVariantRepository.save(var));
    }

    // READ
    public List<ProductVariant> getAllProductVariants() {
        return productVariantRepository.findAll();
    }

    public Optional<ProductVariant> getProductVariantById(int id) {
        return productVariantRepository.findById(id);
    }

    // UPDATE
    public Optional<ProductVariant> updateProductVariant(ProductVariant var) {
        if (productVariantRepository.existsById(var.getId())) {
            return Optional.of(productVariantRepository.save(var));
        } else
            return Optional.empty();
    }

    // DELETE
    public void deleteProductVariantById(int id) {
        productVariantRepository.deleteById(id);
    }

    public void deleteAllProductVariants() {
        productVariantRepository.deleteAll();
    }

}
