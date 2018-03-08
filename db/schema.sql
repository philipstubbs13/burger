### Schema

--Create database named burger_db and use it--
CREATE DATABASE burger_db;
USE burger_db;

--Create table named burgers with columns form id, burger_name, and devoured.--
--Make the id column the primary key--
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured boolean NOT NULL,
	PRIMARY KEY (id)
);

