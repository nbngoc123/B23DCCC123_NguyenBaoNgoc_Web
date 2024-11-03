-- Create a database named "todolist"
CREATE DATABASE todolist;

USE todolist;

-- Create a table named "tasks" inside the "todolist" database
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    due_date DATE,
    completed BOOLEAN DEFAULT FALSE
);

USE todolist;
INSERT INTO tasks (title, description, due_date, completed)
VALUES
  ('Task 1', 'Description for Task 1', '2022-12-31', FALSE),
  ('Task 2', 'Description for Task 2', '2023-01-15', FALSE),
  ('Task 3', 'Description for Task 3', '2023-02-28', FALSE),
  ('Task 4', 'Description for Task 4', '2023-03-30', FALSE),
  ('Task 5', 'Description for Task 5', '2023-04-30', FALSE);

