const express = require("express")
const router = express.Router();
const db = require('../models')

router.get('/all', (req,res) => {
    db.Employee.findAll({
        include: [db.Job, db.Department, db.Gender,db.Address]
    }).then(allEmployees => res.send(allEmployees))
    .catch(err => console.log(err));
})
module.exports = router;