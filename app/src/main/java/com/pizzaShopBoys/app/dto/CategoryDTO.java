package com.pizzaShopBoys.app.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

public class CategoryDTO {

    @JsonProperty("category")
    private String category;

    @JsonProperty("products")
    private List<ProductDTO> products;

    public CategoryDTO(String category, List<ProductDTO> products) {
        this.category = category;
        this.products = products;
    }

    public List<ProductDTO> getProducts() {
        return products;
    }

    public void addProduct(ProductDTO product) {
        products.add(product);
    }

    @Override
    public String toString() {
        return "CategoryDTO{" +
                "category='" + category + '\'' +
                ", products=" + products +
                '}';
    }
}
