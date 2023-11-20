// package com.pizzaShopBoys.app.service;

// import com.pizzaShopBoys.app.model.CustomerOrder;
// import com.pizzaShopBoys.app.repository.CustomerOrderRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import java.util.List;
// import java.util.Optional;

// @Service
// public class CustomerOrderService {
//     @Autowired

//     CustomerOrderRepository customerOrderRepository;

//     //    CREATE
//     public Optional<CustomerOrder> createCustomerOrder(CustomerOrder customerOrder){
//     return Optional.of(customerOrderRepository.save(customerOrder));
// }

// //    READ
//     public List<CustomerOrder> getAllCustomerOrders(){
//     return customerOrderRepository.findAll();
// }
//     public Optional<CustomerOrder> getCustomerOrderById(int id){
//         return customerOrderRepository.findById(id);
//     }

// //    UPDATE
//     public Optional<CustomerOrder> updateCustomerOrder(CustomerOrder customerOrder){
//         if(customerOrderRepository.existsById(customerOrder.getId())){
//             return Optional.of(customerOrderRepository.save(customerOrder));
//         }
//         else return Optional.empty();
//     }

// //    DELETE
//     public void deleteCustomerOrderById(int id){
//         customerOrderRepository.deleteById(id);
//     }

//     public void deleteAllCustomerOrder(){
//         customerOrderRepository.deleteAll();
//     }
// }
