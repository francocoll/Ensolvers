CREATE DATABASE tasksdb

CREATE TABLE task(
    id SERIAL PRIMARY KEY,
    title VARCHAR(225) UNIQUE,
    description VARCHAR(255)
);