DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    burger_name VARCHAR (40),
    devoured BOOLEAN DEFAULT true
);

SELECT * FROM burgers;
