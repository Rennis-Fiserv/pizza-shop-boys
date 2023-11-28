package com.pizzaShopBoys.app.model;

import jakarta.persistence.*;

@Entity
@IdClass(ProductVariantPK.class)
public class ProductVariant {
    @Id
    @Column(name = "product_id")
    private int productId;

    @Id
    private String serving;
    private double price;

    // CONSTRUCTORS

    public ProductVariant() {
    }

    public ProductVariant(Integer  productId, String serving, double price) {
        this.productId = productId;
        this.serving = serving;
        this.price = price;
    }

    // GETTERS AND SETTERS


    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getServing() {
        return serving;
    }

    public void setServing(String serving) {
        this.serving = serving;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}