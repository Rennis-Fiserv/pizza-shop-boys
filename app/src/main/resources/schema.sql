CREATE TABLE if NOT EXISTS PRODUCT(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45),
    serving VARCHAR(45),
    PRIMARY KEY (id));

CREATE TABLE if NOT EXISTS EMPLOYEE(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(45),
    last_name VARCHAR(45),
    salary DOUBLE,
    employee_role VARCHAR(45),
    PRIMARY KEY (id));

    CREATE TABLE if NOT EXISTS CUSTOMER(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(45),
    last_name VARCHAR(45),
    phone_number BIGINT,
    PRIMARY KEY (id));

CREATE TABLE if NOT EXISTS zip(
    zip INT NOT NULL AUTO_INCREMENT,
    city VARCHAR(45),
    state VARCHAR(45),
    PRIMARY KEY (zip));

CREATE TABLE if NOT EXISTS order_detail(
    order_detail_id INT NOT NULL ,
    product_id INT NOT NULL,
    quantity INT,
    price NUMERIC,
    PRIMARY KEY (order_detail_id, product_id),
    FOREIGN KEY (order_detail_id) REFERENCES customer_order(id),
    FOREIGN KEY (product_id) REFERENCES product(id));

CREATE TABLE if NOT EXISTS customer_order(
    id INT NOT NULL,
    zip INT NOT NULL,
    employee_fk INT NOT NULL,
    customer_fk INT NOT NULL,
    order_placed_date DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (employee_fk) REFERENCES employee(id),
    FOREIGN KEY (customer_fk) REFERENCES customer(id));

CREATE TABLE if NOT EXISTS price_history(
    id INT NOT NULL,
    product_id INT NOT NULL,
    price NUMERIC,
    start_date DATE NOT NULL,
    end_date DATE,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES product(id));

