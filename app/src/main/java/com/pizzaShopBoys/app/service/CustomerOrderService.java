package com.pizzaShopBoys.app.service;

import com.pizzaShopBoys.app.dto.CustomerOrderDTO;
import com.pizzaShopBoys.app.model.Customer;
import com.pizzaShopBoys.app.model.CustomerOrder;

import com.pizzaShopBoys.app.model.OrderDetail;
import com.pizzaShopBoys.app.repository.CustomerOrderRepository;
import com.pizzaShopBoys.app.repository.CustomerRepository;
import com.pizzaShopBoys.app.repository.OrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerOrderService {

    @Autowired
    CustomerOrderRepository customerOrderRepository;
    @Autowired
    OrderDetailRepository orderDetailRepository;

    @Autowired
    CustomerRepository customerRepository;

    public List<CustomerOrder> getAllCustomerOrders() {
        return customerOrderRepository.findAll();
    }

    public Optional<CustomerOrder> getCustomerOrderById(int id) {
        return customerOrderRepository.findById(id);
    }

    @Transactional
    public Optional<CustomerOrder> createCustomerOrder(CustomerOrder customerOrder) {
        var orderDetails = customerOrder.getOrderDetails();
        customerOrderRepository.save(new CustomerOrder(customerOrder.getZip(),
                customerOrder.getEmployeeFk(), customerOrder.getCustomerFk(), customerOrder.getOrderPlacedTime(),
                customerOrder.getStreetAddress()));
        for (int i = 0; i < orderDetails.size(); ++i) {
            OrderDetail od = orderDetails.get(i);
            orderDetailRepository.save(
                    new OrderDetail(
                    od.getOrderId(), od.getProductId(),od.getServing(), od.getQuantity(), od.getSubTotal(),
                    od.getDiscount()));
        }
        return Optional.of(customerOrder);
    }


    @Transactional
    public Optional<CustomerOrder> createCustomerOrder2(CustomerOrderDTO customerOrderDTO) {

//        Create Customer
       Customer newCustomer = customerRepository.save(new Customer(
               customerOrderDTO.getFirstName(),
               customerOrderDTO.getLastName(),
               customerOrderDTO.getPhone())
       );


//       Create Order

       CustomerOrder newCustomerOrder = customerOrderRepository.save(
               new CustomerOrder(
                       customerOrderDTO.getZip(),
                       customerOrderDTO.getEmployeeId(), newCustomer.getId(), customerOrderDTO.getOrderPlacedDate(),
                       customerOrderDTO.getStreetAddress()
               )
       );
        System.out.println(newCustomerOrder);

        for (int i = 0; i < customerOrderDTO.getOrderDetails().size(); ++i) {
           OrderDetail orderDetail = customerOrderDTO.getOrderDetails().get(i);


            orderDetailRepository.save(new OrderDetail(
                    newCustomerOrder.getId(),
                    orderDetail.getProductId(),
                    orderDetail.getServing(),
                    orderDetail.getQuantity(),
                    0,
                    0));
        }
    return customerOrderRepository.findById(newCustomerOrder.getId());
    }}


