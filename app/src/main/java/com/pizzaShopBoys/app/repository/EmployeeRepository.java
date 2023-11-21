package com.pizzaShopBoys.app.repository;

import com.pizzaShopBoys.app.model.Employee;
import jakarta.persistence.Tuple;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;
// import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
// import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDate;
import java.util.Collection;
import java.util.List;
import com.pizzaShopBoys.app.model.EmpMetricDTO;
// import java.util.Optional;

@Repository
public interface EmployeeRepository extends ListCrudRepository<Employee,Integer> {
    @Query(value = "SELECT * FROM Employee  WHERE is_active=true", nativeQuery = true)
    public List<Employee> findAll();

    @Modifying
    @Query(value = "update Employee e set e.is_active=false where e.id=?1", nativeQuery = true)
    public void deleteById(int id);

    @Query(value = "SELECT e.id AS id, CONCAT(e.first_name, ' ', e.last_name) AS name, Count(*) AS orders\n" +
            "FROM Employee e\n" +
            "INNER JOIN Customer_order co\n" +
            "ON e.id = co.Employee_fk WHERE co.order_placed_date>?1 AND co.order_placed_date<?2\n" +
            "GROUP BY e.id", nativeQuery = true)
    public List<EmpMetricDTO> findMetrics(LocalDate startDate, LocalDate endDate);
}

