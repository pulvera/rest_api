const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.send('Get all employees');
});

router.post('/', (req, res, next) =>{
    res.send('Created a new employee');
});

router.get('/:id', (req, res, next) =>{
    res.send('Get employee by its ID');
});

router.patch('/:id', (req, res, next) =>{
    res.send('Delete employee by its ID');
});

module.exports = router;