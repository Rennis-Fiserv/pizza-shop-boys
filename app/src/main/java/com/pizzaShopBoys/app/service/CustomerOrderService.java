package com.pizzaShopBoys.app.service;

import com.pizzaShopBoys.app.model.CustomerOrder;

import com.pizzaShopBoys.app.model.OrderDetail;
import com.pizzaShopBoys.app.repository.CustomerOrderRepository;
import com.pizzaShopBoys.app.repository.OrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;
import java.util.Optional;

@Service
public class CustomerOrderService {


    @Autowired
    CustomerOrderRepository customerOrderRepository;
    @Autowired
    OrderDetailRepository orderDetailRepository;
    public List<CustomerOrder> getAllCustomerOrders(){
        return customerOrderRepository.findAll();
    }


    public Optional<CustomerOrder> getCustomerOrderById(int id){
        return customerOrderRepository.findById(id);
    }


    @Transactional
    public Optional<CustomerOrder> createCustomerOrder(CustomerOrder customerOrder){
        var orderDetails = customerOrder.getOrderDetails();
        customerOrderRepository.save(new CustomerOrder(customerOrder.getId(), customerOrder.getZip(), customerOrder.getEmployeeFk(), customerOrder.getCustomerFk(), customerOrder.getOrderPlacedTime(), customerOrder.getStreetAddress()));
        for(int i=0; i<orderDetails.size(); ++i){
            OrderDetail od = orderDetails.get(i);
            od.setOrderId(customerOrder.getId());
            orderDetailRepository.save(od.getOrderId(), od.getProductId(), od.getQuantity(), od.getSubTotal(), od.getDiscount());
        }
        return Optional.of(customerOrder);

    }
}
