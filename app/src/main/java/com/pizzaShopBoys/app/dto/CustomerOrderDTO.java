package com.pizzaShopBoys.app.dto;

import com.pizzaShopBoys.app.model.OrderDetail;

import java.time.LocalDateTime;
import java.util.List;

public class CustomerOrderDTO {
    private String firstName;
    private String lastName;

    private int employee;

    private String phone;
    private List<OrderDetail> orderDetails;

    private String streetAddress;
    private int zip;

    private LocalDateTime orderPlacedDate;

    public CustomerOrderDTO(String firstName, String lastName, String phone, List<OrderDetail> orderDetails, String streetAddress, int zip, LocalDateTime orderPlacedDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.orderDetails = orderDetails;
        this.streetAddress = streetAddress;
        this.zip = zip;
        this.orderPlacedDate = orderPlacedDate;
    }

    public void setOrderDetails(List<OrderDetail> orderDetails) {
        this.orderDetails = orderDetails;
    }

    public LocalDateTime getOrderPlacedDate() {
        return orderPlacedDate;
    }

    public void setOrderPlacedDate(LocalDateTime orderPlacedDate) {
        this.orderPlacedDate = orderPlacedDate;
    }

    public String getFirstName() {
        return firstName;
    }

    public int getEmployee() {
        return employee;
    }

    public void setEmployee(int employee) {
        this.employee = employee;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List<OrderDetail> getOrderDetails() {
        return orderDetails;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }


    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public int getZip() {
        return zip;
    }

    public void setZip(int zip) {
        this.zip = zip;
    }
}

