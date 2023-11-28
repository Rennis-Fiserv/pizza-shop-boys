package com.pizzaShopBoys.app.repository;

import com.pizzaShopBoys.app.model.OrderDetailPK;
import com.pizzaShopBoys.app.model.OrderDetail;
// import jakarta.persistence.criteria.Order;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface OrderDetailRepository extends ListCrudRepository<OrderDetail, OrderDetailPK> {
    @Query(value = "SELECT * FROM Order_Detail od WHERE od.order_detail_id=?1", nativeQuery = true)
    public List<OrderDetail> findByOrderDetail(int orderDetailId);

//    @Modifying
//    @Query(value = "INSERT INTO Order_Detail(order_id, product_id, quantity, sub_total, discount) VALUES (?1, ?2, ?3, ?4, ?5)", nativeQuery = true)
//    public void save(int orderId, int productId, int quantity, double subTotal, double discount);
}
