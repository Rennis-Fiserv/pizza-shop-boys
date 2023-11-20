// package com.pizzaShopBoys.app.model;

// import java.sql.Date;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.Temporal;
// import jakarta.persistence.TemporalType;

// @Entity
// public class CustomerOrder {
//     // FIELDS
//     // @id means id will auto generate

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Integer id;
//     private Integer zip;
//     private Integer employeeId;
//     private Integer customerId;
//     private String street_address;
//     @Temporal(TemporalType.DATE)
//     private Date order_placed_date;

//     // CONSTRUCTORS

//     public CustomerOrder() {
//     }

//     public CustomerOrder(Integer id, Integer zip, Integer employeeId, Integer customerId, String streetAddress,
//             Date orderPlaced) {
//         this.id = id;
//         this.zip = zip;
//         this.employeeId = employeeId;
//         this.customerId = customerId;
//         this.street_address = streetAddress;
//         this.order_placed_date = orderPlaced;
//     }

//     // GETTERS AND SETTERS

//     public Integer getId() {
//         return id;
//     }

//     public void setId(Integer id) {
//         this.id = id;
//     }

//     public Integer getZip() {
//         return zip;
//     }

//     public void setZip(Integer zip) {
//         this.zip = zip;
//     }

//     public Integer getEmployeeId() {
//         return employeeId;
//     }

//     public void setEmployeeId(Integer employeeId) {
//         this.employeeId = employeeId;
//     }

//     public Integer getCustomerId() {
//         return customerId;
//     }

//     public void setCustomerId(Integer customerId) {
//         this.customerId = customerId;
//     }

//     public String getStreet_address() {
//         return street_address;
//     }

//     public void setStreet_address(String street_address) {
//         this.street_address = street_address;
//     }

//     public Date getOrder_placed_date() {
//         return order_placed_date;
//     }

//     public void setOrder_placed_date(Date order_placed_date) {
//         this.order_placed_date = order_placed_date;
//     }

// }