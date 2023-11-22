package com.pizzaShopBoys.app.repository;

// import com.pizzaShopBoys.app.model.OrderDetail;
import com.pizzaShopBoys.app.model.PriceHistory;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;
// import java.time.LocalDateTime;
// import java.util.List;

@Repository
public interface PriceHistoryRepository extends ListCrudRepository<PriceHistory, Integer> {
    @Modifying
    @Query(value = "UPDATE price_history ph SET ph.end_date=?2 WHERE ph.product_id = ?1 AND ph.end_date is NULL", nativeQuery = true)
    public void updatePriceHistoryById(int id, LocalDate date);

    @Modifying
    @Query(value = "INSERT INTO price_history(product_id, price, start_date) VALUES (?1, ?2, ?3)", nativeQuery = true)
    public void createPriceHistoryById(int id, double price, LocalDate date);
}