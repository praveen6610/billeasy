const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')

const app = express()
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

//get all employees
app.get('/employees', (request, response) => {
    let sql = "SELECT e.id, e.firstname, e.lastname, e.email, r.name AS role, d.name AS department FROM employee AS e JOIN role AS r ON e.emp_role_id = r.id JOIN department AS d ON e.emp_department_id = d.id";
    let query = pool.query(sql, (error, results) => {
        if (error) throw error;
        response.status(200).json(results.rows);
    });
});

//get employee with specific id
app.get('/employees/:id', (request, response) => {
    let sql = "SELECT e.id, e.firstname, e.lastname, e.email, r.name AS role, d.name AS department FROM employee AS e JOIN role AS r ON e.emp_role_id = r.id JOIN department AS d ON e.emp_department_id = d.id WHERE e.id=" + request.params.id;
    pool.query(sql, (error,results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    });
});

//create new employee
app.post('/addemployee', (request, response) => {
    response.setHeader("Content-Type","application/json");
    const { firstname, lastname, email, emp_role_id, emp_department_id } = request.body
    let sql = 'INSERT INTO employee (firstname, lastname, email, emp_role_id, emp_department_id) VALUES ($1, $2, $3, $4, $5)';
    pool.query(sql,[firstname, lastname, email, emp_role_id, emp_department_id], error => {
        if (error) {
            throw error
        }
        response.status(201).json({ status: 'success', message: 'employee added.' })
    })
});

// Start server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening`)
})