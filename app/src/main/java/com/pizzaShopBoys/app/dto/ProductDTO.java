package com.pizzaShopBoys.app.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ProductDTO {
   @JsonProperty("id")
   private int id;
   @JsonProperty("name")
   private String name;

   @JsonProperty("prices")
   private HashMap<String, Double> prices= new HashMap<>();
   @JsonProperty("sizes")
   private List<String> sizes = new ArrayList<>();

   public ProductDTO(int id, String name, ArrayList<String> sizes, HashMap<String, Double> prices) {
      this.id = id;
      this.name = name;
      this.sizes = sizes;
      this.prices = prices;
   }

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public HashMap<String, Double> getPrices() {
      return prices;
   }

   public void setPrices(HashMap<String, Double> prices) {
      this.prices = prices;
   }

   public List<String> getSizes() {
      return sizes;
   }

   public void setSizes(List<String> sizes) {
      this.sizes = sizes;
   }

   @Override
   public String toString() {
      return "ProductDTO{" +
              "name='" + name + '\'' +
              ", prices=" + prices +
              ", sizes=" + sizes +
              '}';
   }
}
