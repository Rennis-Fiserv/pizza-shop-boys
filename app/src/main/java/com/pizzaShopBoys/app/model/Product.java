package com.pizzaShopBoys.app.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    private String serving;

    private double price;

    protected Product() {
    };

    public Product(String name, String serving, double price) {
        this.name = name;
        this.serving = serving;
        this.price = price;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", serving='" + serving + '\'' +
                ", price='" + price + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getServing() {
        return serving;
    }

    public double getPrice() {
        return this.price;
    }
}
