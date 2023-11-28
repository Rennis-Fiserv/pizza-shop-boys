package com.pizzaShopBoys.app.model;

import java.io.Serializable;

public class ProductVariantPK implements Serializable {

    private int productId;

    private String serving;

    public ProductVariantPK(){}
    public ProductVariantPK(int productId, String serving){
        this.productId = productId;
        this.serving = serving;
    }
}
