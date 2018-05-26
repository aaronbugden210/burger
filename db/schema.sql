DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id INTEGER AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN,
    PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Double Cheese Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Hawaiian Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Quadruple Bypass Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Avocado Burger', FALSE);