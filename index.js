const express = require('express');
const app = express();
app.use(express.json());

const EmployeeRoute = require('./Routes/Employee.route');
app.use('/employee', EmployeeRoute);

const UsertableRoute = require('./Routes/UserTable.route');
app.use('/user', UsertableRoute);

app.listen(3000, () =>{
    console.log("Listening on port 3000...");
});

// The endpoint is wrong 
app.use((req, res, next) =>{
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// Express Error Handler 
app.use((err, req, res, next) =>{
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
});