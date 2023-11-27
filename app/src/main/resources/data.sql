INSERT into PRODUCT(name, category) VALUES ('peporoni','pizza');
INSERT into PRODUCT(name, category) VALUES ('house special', 'pizza');
INSERT into PRODUCT(name, category) VALUES ('breadsticks','sides');
INSERT into PRODUCT(name, category) VALUES ('soda', 'beverages');

INSERT into PRODUCT_VARIANT(product_id, serving, price) VALUES (1,'s',7.35);
INSERT into PRODUCT_VARIANT(product_id, serving, price) VALUES (1,'m', 9.35);
INSERT into PRODUCT_VARIANT(product_id, serving, price) VALUES (1,'l',14.00);
INSERT into PRODUCT_VARIANT(product_id, serving, price) VALUES (2,'s',8.50);
INSERT into PRODUCT_VARIANT(product_id, serving, price) VALUES (2,'m',10.50);
INSERT into PRODUCT_VARIANT(product_id, serving, price) VALUES (2,'l', 16.00);
INSERT into PRODUCT_VARIANT(product_id, serving, price) VALUES (3, '8 pieces', 2.50);
INSERT into PRODUCT_VARIANT(product_id, serving, price) VALUES (4, '1 can', 3.25);


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

INSERT into CUSTOMER_ORDER(id, zip, employee_fk, customer_fk, order_placed_date, street_address) VALUES (1, 1001, 1, 1, '2021-01-11 13:23:44', '101 Baker Street');
INSERT into CUSTOMER_ORDER(id, zip, employee_fk, customer_fk, order_placed_date, street_address) VALUES (2, 1001, 1, 2, '2021-01-12 13:23:44', '102 Baker Street');
INSERT into CUSTOMER_ORDER(id, zip, employee_fk, customer_fk, order_placed_date, street_address) VALUES (3, 1002, 4, 1, '2021-01-13 13:23:44', '103 Baker Street');
INSERT into CUSTOMER_ORDER(id, zip, employee_fk, customer_fk, order_placed_date, street_address) VALUES (4, 1002, 4, 2, '2021-01-13 13:23:44', '104 Baker Street');
INSERT into CUSTOMER_ORDER(id, zip, employee_fk, customer_fk, order_placed_date, street_address) VALUES (5, 1003, 4, 2, '2021-01-14 13:23:44', '105 Baker Street');
INSERT into CUSTOMER_ORDER(id, zip, employee_fk, customer_fk, order_placed_date, street_address) VALUES (6, 1001, 4, 3, '2021-01-14 13:23:44', '106 Baker Street');
INSERT into CUSTOMER_ORDER(id, zip, employee_fk, customer_fk, order_placed_date, street_address) VALUES (7, 1001, 2, 4, '2021-01-15 13:23:44', '107 Baker Street');

INSERT into ORDER_DETAIL(order_id, product_id, quantity, discount, sub_total) VALUES (1, 1, 1, 0, 5.5);
INSERT into ORDER_DETAIL(order_id, product_id, quantity, discount, sub_total) VALUES (1, 2, 7, 0, 5);
INSERT into ORDER_DETAIL(order_id, product_id, quantity, discount, sub_total) VALUES (1, 3, 5, 0, 5.5);
INSERT into ORDER_DETAIL(order_id, product_id, quantity, discount, sub_total) VALUES (2, 1, 1, 0, 5.5);
INSERT into ORDER_DETAIL(order_id, product_id, quantity, discount, sub_total) VALUES (3, 2, 7, 3.0, 5);
INSERT into ORDER_DETAIL(order_id, product_id, quantity, discount, sub_total) VALUES (4, 3, 5, 1.0, 5.5);
INSERT into ORDER_DETAIL(order_id, product_id, quantity, sub_total) VALUES (5, 1, 5, 5.5);
INSERT into ORDER_DETAIL(order_id, product_id, quantity, sub_total) VALUES (6, 1, 5, 5.5);
INSERT into ORDER_DETAIL(order_id, product_id, quantity, sub_total) VALUES (7, 1, 5, 5.5);

INSERT into PRICE_HISTORY(product_id, price, start_date, end_date) VALUES (1, 50.0, '2023-11-13', '2023-11-14');
INSERT into PRICE_HISTORY(product_id, price, start_date, end_date) VALUES (2, 50.0, '2023-11-16', NULL);
INSERT into PRICE_HISTORY(product_id, price, start_date, end_date) VALUES (3, 50.0, '2023-11-16', NULL);
INSERT into PRICE_HISTORY(product_id, price, start_date, end_date) VALUES (1, 50.0, '2023-11-15', NULL);
