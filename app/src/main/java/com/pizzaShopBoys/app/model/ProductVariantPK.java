package com.pizzaShopBoys.app.model;

import jakarta.persistence.Column;

import java.io.Serializable;

public class ProductVariantPK implements Serializable {

    @Column(name = "product_id")
    private int productId;

    @Column(name = "serving")
    private String serving;

    public ProductVariantPK(){}
    public ProductVariantPK(int productId, String serving){
        this.productId = productId;
        this.serving = serving;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getServing() {
        return serving;
    }

    public void setServing(String serving) {
        this.serving = serving;
    }
}
