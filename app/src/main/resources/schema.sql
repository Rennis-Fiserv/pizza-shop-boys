CREATE TABLE if NOT EXISTS PRODUCT(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) UNIQUE,
    serving VARCHAR(45),
    price NUMERIC,
    PRIMARY KEY (id));

CREATE TABLE if NOT EXISTS EMPLOYEE(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(45),
    last_name VARCHAR(45),
    salary DOUBLE,
    employee_role VARCHAR(45),
    is_active BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id));

CREATE TABLE if NOT EXISTS CUSTOMER(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(45),
    last_name VARCHAR(45),
    phone_number VARCHAR(45),
    PRIMARY KEY (id));

CREATE TABLE if NOT EXISTS zip(
    zip INT NOT NULL AUTO_INCREMENT,
    city VARCHAR(45),
    state VARCHAR(45),
    PRIMARY KEY (zip));

CREATE TABLE if NOT EXISTS order_detail(
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    discount NUMERIC DEFAULT 0.0,
    sub_total NUMERIC NOT NULL,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES customer_order(id),
    FOREIGN KEY (product_id) REFERENCES product(id));

CREATE TABLE if NOT EXISTS customer_order(
    id INT NOT NULL AUTO_INCREMENT,
    zip INT NOT NULL,
    employee_fk INT NOT NULL,
    customer_fk INT NOT NULL,
    order_placed_date DATETIME NOT NULL,
    street_address VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (employee_fk) REFERENCES employee(id),
    FOREIGN KEY (customer_fk) REFERENCES customer(id));

CREATE TABLE if NOT EXISTS price_history(
    id INT NOT NULL AUTO_INCREMENT,
    product_id INT NOT NULL,
    price NUMERIC,
    start_date DATE NOT NULL,
    end_date DATE,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES product(id));

