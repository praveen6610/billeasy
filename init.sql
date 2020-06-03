CREATE TABLE department(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE employee(
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(30),
    lastname VARCHAR(30),
    email VARCHAR(30),
    emp_role_id integer references role(id),
    emp_department_id integer references department(id)
);

INSERT INTO role(name) VALUES('SDE1');
INSERT INTO role(name) VALUES('SDE2');
INSERT INTO role(name) VALUES('QA1');
INSERT INTO role(name) VALUES('QA2');
INSERT INTO role(name) VALUES('DEV');

INSERT INTO department(name) VALUES('Development');
INSERT INTO department(name) VALUES('Testing');
INSERT INTO department(name) VALUES('Devops');

INSERT INTO employee(firstname,lastname,email,emp_role_id,emp_department_id) VALUES('Harvey','Specter','specter@gmail.com',1,1);
INSERT INTO employee(firstname,lastname,email,emp_role_id,emp_department_id) VALUES('Tony','Stark','jarvis@gmail.com',2,1);
INSERT INTO employee(firstname,lastname,email,emp_role_id,emp_department_id) VALUES('Diana','Prince','diana@gmail.com',3,2);
INSERT INTO employee(firstname,lastname,email,emp_role_id,emp_department_id) VALUES('Bruce','Wayne','superman@gmail.com',5,3);
INSERT INTO employee(firstname,lastname,email,emp_role_id,emp_department_id) VALUES('Mary','Jane','mary@gmail.com',2,1);