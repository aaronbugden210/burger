var con = require("./connection.js");

function quesMarks(num)
{
    var newArray = [];

    for(var i = 0; i < num; i++)
    {
        newArray.push("?");
    }

    return newArray.toString();
}

function pushToSQL(object)
{
    var newArray = [];

    for(var key in object)
    {
        newArray.push(key + "=" + object[key]);
    }

    return newArray.toString();
}

var orm =
{
    all: function(tableData, cb)
    {
        var queryString = "SELECT * FROM " + tableData + ";";

        con.query(queryString, function(err, results)
        {
            if(err)
            {
                throw err;
            }
            cb(results)
        });
    },

    create: function(table, columns, values, cb)
    {
        var queryString = "INSERT INTO " + table;

        queryString += "(";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += quesMarks(values.length);
        queryString += ")";

        con.query(queryString, values, function(err, results)
        {
            if(err)
            {
                throw err;
            }

            cb(results);
        });
    },

    update: function(table, columnValues, condition, cb)
    {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += pushToSQL(columnValues);
        queryString += " WHERE ";
        queryString += condition;

        con.query(queryString, function(err, results)
        {
            if(err)
            {
                throw err;
            }

            cb(results);
        });
    }
}

module.exports = orm;