package com.pizzaShopBoys.app.model;

import java.sql.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class CustomerOrder {
    // FIELDS
    // @id means id will auto generate

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer zip;
    private Integer employee_fk;
    private Integer customer_fk;
    @Temporal(TemporalType.DATE)
    private Date order_placed_date;
    private String street_address;

    // CONSTRUCTORS

    public CustomerOrder() {
    }

    public CustomerOrder(Integer id, Integer zip, Integer employee_fk, Integer customer_fk, Date order_placed_date,
            String street_address) {
        this.id = id;
        this.zip = zip;
        this.employee_fk = employee_fk;
        this.customer_fk = customer_fk;
        this.order_placed_date = order_placed_date;
        this.street_address = street_address;
    }

    // GETTERS AND SETTERS

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getZip() {
        return zip;
    }

    public void setZip(Integer zip) {
        this.zip = zip;
    }

    public Integer getEmployee_fk() {
        return employee_fk;
    }

    public void setEmployee_fk(Integer employee_fk) {
        this.employee_fk = employee_fk;
    }

    public Integer getCustomer_fk() {
        return customer_fk;
    }

    public void setCustomer_fk(Integer customer_fk) {
        this.customer_fk = customer_fk;
    }

    public Date getOrder_placed_date() {
        return order_placed_date;
    }

    public void setOrder_placed_date(Date order_placed_date) {
        this.order_placed_date = order_placed_date;
    }

    public String getStreet_address() {
        return street_address;
    }

    public void setStreet_address(String street_address) {
        this.street_address = street_address;
    }
}