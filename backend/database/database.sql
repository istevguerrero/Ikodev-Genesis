CREATE DATABASE ticketsdb;

CREATE TABLE ticket (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    price TEXT
);

INSERT INTO ticket(name, price) VALUES
    ('cali-bogota', '500000'),
    ('bogota-cali', '550000');