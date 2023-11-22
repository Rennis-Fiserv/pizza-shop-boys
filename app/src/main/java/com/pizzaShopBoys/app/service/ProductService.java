package com.pizzaShopBoys.app.service;

import com.pizzaShopBoys.app.model.PriceHistory;
import com.pizzaShopBoys.app.model.Product;
import com.pizzaShopBoys.app.repository.ProductRepository;

import com.pizzaShopBoys.app.repository.PriceHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
     ProductRepository productRepository;

    @Autowired
    PriceHistoryRepository priceHistoryRepository;

//    CREATE
    @Transactional
    public Optional<Product> createProduct(Product product){
        var prod = productRepository.save(product);
        priceHistoryRepository.createPriceHistoryById(product.getId(), product.getPrice(), LocalDate.now());
        return Optional.of(prod);
}

//    READ
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }
    public Optional<Product> getProductById(int id){
        return productRepository.findById(id);
    }

//    UPDATE
    @Transactional
    public Optional<Product> updateProduct(Product product){
        if(productRepository.existsById(product.getId())){
            //Update price history
            priceHistoryRepository.updatePriceHistoryById(product.getId(), LocalDate.now());
            priceHistoryRepository.createPriceHistoryById(product.getId(), product.getPrice(), LocalDate.now());
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
