package com.pizzaShopBoys.app.model;

import jakarta.persistence.*;

@Entity
@IdClass(ProductVariant.class)
public class ProductVariant {

    @Id
    private String serving;
    private double price;
//
//    @ManyToOne
//    @JoinColumn(name = "id" )
//    private Product product;

    // CONSTRUCTORS

    public ProductVariant() {
    }

    public ProductVariant( String serving, double price) {
        this.serving = serving;
        this.price = price;
    }

    // GETTERS AND SETTERS



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
