package com.pizzaShopBoys.app.repository;

import com.pizzaShopBoys.app.model.CustomerOrder;
import com.pizzaShopBoys.app.model.Employee;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import java.util.List;

@Repository
public interface CustomerOrderRepository extends ListCrudRepository<CustomerOrder, Integer> {
    @Query("SELECT id AS orderId, employeeFk AS employeeId, orderPlacedDate AS orderDate, EXTRACT(WEEK FROM orderPlacedDate) AS orderWeek FROM CustomerOrder ORDER BY orderWeek, employeeId, orderDate")
    List<Object[]> getOrdersByEmployeeByDate();
 
    @Query("SELECT id AS orderId, zip AS zipCode, orderPlacedDate AS orderDate, EXTRACT(WEEK FROM orderPlacedDate) AS orderWeek FROM CustomerOrder ORDER BY orderWeek, zipCode, orderDate")
    List<Object[]> getOrdersByZipByDate();
}