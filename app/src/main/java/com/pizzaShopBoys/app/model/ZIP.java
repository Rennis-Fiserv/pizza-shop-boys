package com.pizzaShopBoys.app.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ZIP {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer zip;
    private String city;
    private String state;

    public ZIP() {
    }

    public ZIP(Integer zip, String city, String state) {
        this.zip = zip;
        this.city = city;
        this.state = state;
    }

    public Integer getId() {
        return zip;
    }

    public void setId(Integer zip) {
        this.zip = zip;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}