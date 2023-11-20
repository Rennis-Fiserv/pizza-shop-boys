INSERT into PRODUCT(name, serving) VALUES ('pizza - l','16 in');
INSERT into PRODUCT(name, serving) VALUES ('pizza - m', '12 in');
INSERT into PRODUCT(name, serving) VALUES ('pizza - s','8 in');

INSERT into EMPLOYEE(first_name,last_name,salary,employee_role, is_active) VALUES('dhruv','thota',50000,'E', 1);
INSERT into EMPLOYEE(first_name,last_name,salary,employee_role, is_active) VALUES('will','cooper',50000,'E', 1);
INSERT into EMPLOYEE(first_name,last_name,salary,employee_role, is_active) VALUES('mark','rabbit',85000,'M', 1);
INSERT into EMPLOYEE(first_name,last_name,salary,employee_role, is_active) VALUES('tanish','patel',5000,'M', 0);

INSERT into CUSTOMER(first_name,last_name,phone_number) VALUES('netanel','frankel','1234567891');
INSERT into CUSTOMER(first_name,last_name,phone_number) VALUES('rennis','huh','1209125891');
INSERT into CUSTOMER(first_name,last_name,phone_number) VALUES('joseph','schmitt','1234567891');
INSERT into CUSTOMER(first_name,last_name,phone_number) VALUES('drew','huth','1927672391');
INSERT into CUSTOMER(first_name,last_name,phone_number) VALUES('tanish','patel','1123461691');

INSERT into ZIP(zip,city,state) VALUES (12345,'Chicago','IL');
INSERT into ZIP(zip,city,state) VALUES (34521,'New York','NY');
INSERT into ZIP(zip,city,state) VALUES (15486,'Berkely Heights','NJ');

INSERT into ORDER_DETAIL(order_detail_id, product_id, quantity, discount, sub_total) VALUES (1, 1, 1, 0, 5.5);
INSERT into ORDER_DETAIL(order_detail_id, product_id, quantity, discount, sub_total) VALUES (1, 2, 7, 0, 5);
INSERT into ORDER_DETAIL(order_detail_id, product_id, quantity, discount, sub_total) VALUES (1, 3, 5, 0, 5.5);
INSERT into ORDER_DETAIL(order_detail_id, product_id, quantity, discount, sub_total) VALUES (2, 1, 1, 0, 5.5);
INSERT into ORDER_DETAIL(order_detail_id, product_id, quantity, discount, sub_total) VALUES (2, 2, 7, 3.0, 5);
INSERT into ORDER_DETAIL(order_detail_id, product_id, quantity, discount, sub_total) VALUES (3, 3, 5, 1.0, 5.5);
INSERT into ORDER_DETAIL(order_detail_id, product_id, quantity, sub_total) VALUES (3, 4, 5, 5.5);

-- INSERT into CUSTOMER_ORDER(id, zip, employeeId, customerId, order_placed_date, street_address) VALUES (1, 1001, 1, 1, '2021-01-11 13:23:44', '101 Baker Street');

INSERT into PRICE_HISTORY(id, product_id, price, start_date, end_date) VALUES (1, 1, 50.0, '2023-11-13', '2023-11-14');
INSERT into PRICE_HISTORY(id, product_id, price, start_date, end_date) VALUES (2, 2, 50.0, '2023-11-16', NULL);
INSERT into PRICE_HISTORY(id, product_id, price, start_date, end_date) VALUES (3, 3, 50.0, '2023-11-16', NULL);
INSERT into PRICE_HISTORY(id, product_id, price, start_date, end_date) VALUES (4, 1, 50.0, '2023-11-15', NULL);