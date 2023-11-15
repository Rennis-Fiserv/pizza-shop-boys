package com.pizzaShopBoys.app.service;

import com.pizzaShopBoys.app.model.Product;
import com.pizzaShopBoys.app.repository.ProductRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
     ProductRepository productRepository;

//    CREATE
    public Optional<Product> createProduct(Product product){
    return Optional.of(productRepository.save(product));
}

//    READ
    public List<Product> getAllProducts(){
    return productRepository.findAll();
}
    public Optional<Product> getProductById(int id){
        return productRepository.findById(id);
    }

//    UPDATE
    public Optional<Product> updateProduct(Product product){
        if(productRepository.existsById(product.getId())){
            return Optional.of(productRepository.save(product));
        }
        else return Optional.empty();
    }

//    DELETE
    public void deleteProductById(int id){
        productRepository.deleteById(id);
    }
    public void deleteAllProducts(){
        productRepository.deleteAll();
    }
}
