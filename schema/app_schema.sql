CREATE DATABASE IF NOT EXISTS app;
USE app;
CREATE TABLE IF NOT EXISTS xuser (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
	email VARCHAR(60) NOT NULL UNIQUE, password BINARY(11) NOT NULL UNIQUE);