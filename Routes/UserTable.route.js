const express = require('express');
const router = express.Router();

const user = [
    {id: 1, fullName: "qwe"},
    {id: 2, fullName: "asd"},
    {id: 3, fullName: "zxc"},
    {id: 4, fullName: "tyu"}
];

router.get('/', (req, res, next) =>{
    res.send(user);
})

module.exports = router;