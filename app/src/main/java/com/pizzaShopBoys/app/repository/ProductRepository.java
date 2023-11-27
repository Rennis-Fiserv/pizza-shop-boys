package com.pizzaShopBoys.app.repository;

// import com.fasterxml.jackson.databind.util.JSONPObject;
// import com.pizzaShopBoys.app.model.OrderDetail;
import com.pizzaShopBoys.app.model.Product;
// import netscape.javascript.JSObject;
// import org.springframework.data.jpa.repository.Query;
// import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
// import java.util.Collection;
// import java.util.List;

@Repository
public interface ProductRepository extends ListCrudRepository<Product, Integer> {
}