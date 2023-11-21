package com.pizzaShopBoys.app.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;



@Entity
public class CustomerOrder {
    @Id
    @Column(name = "id")
    private int id;
    private int zip;
    private int employeeFk;
    private int customerFk;
    private LocalDateTime orderPlacedDate;
    private String streetAddress;
    @OneToMany(mappedBy = "customerOrder", fetch = FetchType.EAGER)
    private List<OrderDetail> orderDetails;

    public CustomerOrder() {

    }
    public CustomerOrder(int id, int zip, int employeeFk, int customerFk, LocalDateTime orderPlacedDate, String streetAddress, List<OrderDetail> orderDetails) {
        this.id = id;
        this.zip = zip;
        this.employeeFk = employeeFk;
        this.customerFk = customerFk;
        this.orderPlacedDate = orderPlacedDate;
        this.streetAddress = streetAddress;
        this.orderDetails = orderDetails;
    }

    public CustomerOrder(int id, int zip, int employeeFk, int customerFk, LocalDateTime orderPlacedDate, String streetAddress) {
        this.id = id;
        this.zip = zip;
        this.employeeFk = employeeFk;
        this.customerFk = customerFk;
        this.orderPlacedDate = orderPlacedDate;
        this.streetAddress = streetAddress;
    }

    public int getId() {
        return id;
    }

    public int getZip() {
        return zip;
    }

    public int getCustomerFk() {
        return customerFk;
    }

    public List<OrderDetail> getOrderDetails() {
        return orderDetails;
    }

    public void setOrderDetails(List<OrderDetail> orderDetails) {
        this.orderDetails = orderDetails;
    }

    public LocalDateTime getOrderPlacedTime() {
        return orderPlacedDate;
    }

    public void setOrderPlacedTime(LocalDateTime orderPlacedDate) {
        this.orderPlacedDate = orderPlacedDate;
    }

    public void setCustomerFk(int customerFk) {
        this.customerFk = customerFk;
    }

    public int getEmployeeFk() {
        return employeeFk;
    }

    @Override
    public String toString() {
        return "CustomerOrder{" +
                "id=" + id +
                ", zip=" + zip +
                ", employeeFk=" + employeeFk +
                ", customerFk=" + customerFk +
                ", orderPlacedDate=" + orderPlacedDate +
                ", streetAddress='" + streetAddress + '\'' +
                ", orderDetails=" + orderDetails +
                '}';
    }

    public void setEmployeeFk(int employeeFk) {
        this.employeeFk = employeeFk;
    }

    public void setZip(int zip) {
        this.zip = zip;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public void setId(int id) {
        this.id = id;
    }
}
