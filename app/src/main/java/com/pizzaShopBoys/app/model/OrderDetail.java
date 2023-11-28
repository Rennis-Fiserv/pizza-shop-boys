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

//    private int productId;

//    @Column(name = "serving")
//    private String serving;
    @Id
    @ManyToOne(fetch = FetchType.EAGER,  cascade = CascadeType.ALL)
    @JoinColumns(value = {
            @JoinColumn(name = "product_id", referencedColumnName = "product_id"),
            @JoinColumn(name = "serving", referencedColumnName = "serving")
    })
    private ProductVariant productVariant = new ProductVariant();
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

    public OrderDetail(int orderId, ProductVariant productVariant, int quantity, double subTotal) {
        this.orderId = orderId;
        this.quantity = quantity;
        this.subTotal = subTotal;
        this.discount = 0;
        this.productVariant = productVariant;
    }

    public OrderDetail(int orderId, ProductVariant productVariant, int quantity, double subTotal, double discount) {
        this.orderId = orderId;
        this.quantity = quantity;
        this.subTotal = subTotal;
        this.discount = discount;
        this.productVariant = productVariant;
    }

    @Override
    public String toString() {
        return "OrderDetail{" +
                "orderId=" + orderId +
//                ", productId=" + productId +
                ", quantity=" + quantity +
                ", subtotal=" + subTotal +
                ", discount=" + discount +
                '}';
    }

    public int getQuantity() {
        return quantity;
    }

    public String getServing() {
        return productVariant.getServing();
    }

    public void setServing(String serving) {
        this.productVariant.setServing(serving);;
    }

    public int getProductId() {
        return productVariant.getProductId();
    }

    public void setSubTotal(double subTotal) {
        this.subTotal = subTotal;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setProductId(int productId) {
        this.productVariant.setProductId(productId);
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
