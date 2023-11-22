package com.pizzaShopBoys.app.service;

import com.pizzaShopBoys.app.model.OrderDetail;
// import com.pizzaShopBoys.app.model.OrderDetailPK;
import com.pizzaShopBoys.app.repository.OrderDetailRepository;
// import jakarta.persistence.criteria.Order;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import java.util.List;
// import java.util.Optional;

@Service
public class OrderDetailService {
    @Autowired
    OrderDetailRepository orderDetailRepository;

    //    CREATE


    //    READ
   public List<OrderDetail> getAllOrders(){
       return orderDetailRepository.findAll();
   }

   public List<OrderDetail> findByOrderDetail(int id) {
       return orderDetailRepository.findByOrderDetail(id);
    }
//    public List<OrderDetail> getOrderDetailsById(OrderDetailPK id){
//        return orderDetailRepository.findById(id);
//    }

    //    UPDATE
//    public Optional<Employee> updateEmployee(Employee employee){
//        if(employeeRepository.existsById(employee.getId())){
//            return Optional.of(employeeRepository.save(employee));
//        }
//        else return Optional.empty();
//    }
//
//    //    DELETE
//    public void deleteEmployeeById(int id){
//        employeeRepository.deleteById(id);
//    }
//
//    public void deleteAllEmployee(){
//        employeeRepository.deleteAll();
//    }

}
