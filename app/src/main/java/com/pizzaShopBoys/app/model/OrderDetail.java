
package com.pizzaShopBoys.app.model;

import jakarta.persistence.Column;
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
    private double subTotal;
    @Column(columnDefinition = "double default 0")
    private double discount=0;

    // CONSTRUCTOR
    public OrderDetail() {
    }

    public OrderDetail(int orderDetailId, int productId, int quantity, double subTotal) {
        this.orderDetailId = orderDetailId;
        this.productId = productId;
        this.quantity = quantity;
        this.subTotal = subTotal;
        this.discount = 0;
    }

    public OrderDetail(int orderDetailId, int productId, int quantity, double subTotal, double discount) {
        this.orderDetailId = orderDetailId;
        this.productId = productId;
        this.quantity = quantity;
        this.subTotal = subTotal;
        this.discount = discount;
    }

    @Override
    public String toString() {
        return "OrderDetail{" +
                "orderDetailId=" + orderDetailId +
                ", productId=" + productId +
                ", quantity=" + quantity +
                ", price=" + subTotal +
                ", discount=" + discount +
                '}';
    }

    public int getQuantity() {
        return quantity;
    }

    public int getProductId() {
        return productId;
    }

    public void setSubTotal(double subTotal) {
        this.subTotal = subTotal;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public double getPrice() {
        return subTotal;
    }

    public void setOrderDetailId(int orderDetailId) {
        this.orderDetailId = orderDetailId;
    }

    public int getOrderDetailId() {
        return orderDetailId;
    }

    public void setDiscount(double discount) {
        this.discount = discount;
    }

    public double getDiscount() {
        return discount;
    }
}


