var mysql = require("mysql");

var con = mysql.createConnection(
{
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers"
});

con.connect(function(err)
{
    if(err)
    {
        console.error("Could not connect to database: " + err.stack);
        return;
    }

    console.log("Don done a connect " + con.threadId);
});

module.exports = con;