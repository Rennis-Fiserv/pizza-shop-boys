
package com.pizzaShopBoys.app.model;

import jakarta.persistence.IdClass;
import org.springframework.data.relational.core.mapping.Table;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;



@Entity
@Table(name = "ORDER_DETAIL")
@IdClass(OrderDetailPK.class)
public class OrderDetail {
    // FIELDS
    // @id means id will auto generate
    @Id
    private int orderDetailId;
    @Id
    private int productId;
    private int quantity;
    private double price;

    // CONSTRUCTOR
    public OrderDetail() {
    }

    public OrderDetail(int orderDetailId, int productId, int quantity, double price) {
        this.orderDetailId = orderDetailId;
        this.productId = productId;
        this.quantity = quantity;
        this.price = price;
    }

    @Override
    public String toString() {
        return "OrderDetail{" +
                "orderDetailId=" + orderDetailId +
                ", productId=" + productId +
                ", quantity=" + quantity +
                ", price=" + price +
                '}';
    }

    public int getQuantity() {
        return quantity;
    }

    public int getProductId() {
        return productId;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public double getPrice() {
        return price;
    }

    public void setOrderDetailId(int orderDetailId) {
        this.orderDetailId = orderDetailId;
    }

    public int getOrderDetailId() {
        return orderDetailId;
    }
}


