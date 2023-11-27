package com.pizzaShopBoys.app.controller;

import com.pizzaShopBoys.app.model.Product;
import com.pizzaShopBoys.app.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    ProductService productService;

    ProductController() {
        this.productService = new ProductService();
    }

    @GetMapping("/products")
    ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.status(HttpStatus.OK).body(productService.getAllProducts());
    }

    @PostMapping("/products")
    ResponseEntity<Product> createProduct(@RequestBody Product product) {
        return productService.createProduct(product).map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/products/{id}")
    ResponseEntity<Product> updateProduct(@RequestBody Product product) {
        return productService.updateProduct(product).map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/products")
    ResponseEntity<Void> deleteAllProducts() {
        productService.deleteAllProducts();
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/products/{id}")
    ResponseEntity<Void> deleteProductById(@PathVariable int id) {
        productService.deleteProductById(id);
        return ResponseEntity.noContent().build();
    }
}
// }
