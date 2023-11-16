package com.pizzaShopBoys.app.repository;


import com.pizzaShopBoys.app.model.OrderDetailPK;
import com.pizzaShopBoys.app.model.OrderDetail;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDetailRepository extends ListCrudRepository<OrderDetail, OrderDetailPK> {
    @Query(value = "SELECT * FROM Order_Detail od WHERE od.order_detail_id=?1", nativeQuery = true)
    public List<OrderDetail> findByOrderDetail(int orderDetailId);
}

