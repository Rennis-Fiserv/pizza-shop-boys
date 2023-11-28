package com.pizzaShopBoys.app.model;

import jakarta.persistence.*;
import org.springframework.data.relational.core.mapping.Table;

@Entity
@Table(name = "ORDER_DETAIL")
@IdClass(OrderDetailPK.class)
public class OrderDetail {
    // FIELDS
    // @id means id will auto generate
    @Id
    @Column(name = "order_id")
    private int orderId;
    @Id
    private int productId;
    private int quantity;
    private double subTotal;
    @Column(columnDefinition = "double default 0")
    private double discount = 0;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "order_id", insertable = false, updatable = false)
    private CustomerOrder customerOrder;

    // CONSTRUCTOR
    public OrderDetail() {
    }

    public OrderDetail(int orderId, int productId, int quantity, double subTotal) {
        this.orderId = orderId;
        this.productId = productId;
        this.quantity = quantity;
        this.subTotal = subTotal;
        this.discount = 0;
    }

    public OrderDetail(int orderId, int productId, int quantity, double subTotal, double discount) {
        this.orderId = orderId;
        this.productId = productId;
        this.quantity = quantity;
        this.subTotal = subTotal;
        this.discount = discount;
    }

    @Override
    public String toString() {
        return "OrderDetail{" +
                "orderId=" + orderId +
                ", productId=" + productId +
                ", quantity=" + quantity +
                ", subtotal=" + subTotal +
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

    public double getSubTotal() {
        return subTotal;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setDiscount(double discount) {
        this.discount = discount;
    }

    public double getDiscount() {
        return discount;
    }
}
