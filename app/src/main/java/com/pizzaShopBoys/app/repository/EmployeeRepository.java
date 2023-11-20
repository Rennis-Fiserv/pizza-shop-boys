package com.pizzaShopBoys.app.repository;

import com.pizzaShopBoys.app.model.Employee;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;
// import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
// import org.springframework.transaction.annotation.Transactional;
import java.util.List;
// import java.util.Optional;

@Repository
public interface EmployeeRepository extends ListCrudRepository<Employee,Integer> {
    @Query(value = "SELECT * FROM Employee  WHERE is_active=true", nativeQuery = true)
    public List<Employee> findAll();

    @Modifying
    @Query(value = "update Employee e set e.is_active=false where e.id=?1", nativeQuery = true)
    public void deleteById(int id);
}

