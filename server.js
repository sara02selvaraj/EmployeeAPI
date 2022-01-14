const express = require("express");
const app = express();
const cors = require('cors');
const db = require("./models");
const PORT  = process.env.PORT || 5000;

//config of cors
app.use(cors());

//parse requests of content-type json
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

//route 
const employeeRoutes = require('./routes/employee-routes');
app.use('/api/employees', employeeRoutes);

//calling sync()
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("Listening at : http://localhost:${PORT}");
    })
})