const express = require("express");
// const Sequelize = require("sequelize");

// require("./config/config.json");

// const app = express();

// const sequelize = new Sequelize("test", "root", "12345678", {
//     dialect: "mysql",
//     host: "localhost",
//     port: 3306
// });


// sequelize
// .query('show tables').then(function(rows) {
//     console.log(JSON.stringify(rows));
// })


app.listen(3000, () => {
    console.log("server started");
});
