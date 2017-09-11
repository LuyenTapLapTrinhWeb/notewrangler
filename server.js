//import express
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'notewrangler',
    password: "1234"
});
connection.connect(function(err){
    if(!err){
        console.log('ok!')
    }
});

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
router.use(bodyParser.json());

//list
router.get('/notes', function (req, res) {
    connection.query('SELECT * FROM notes', function (err, rows, fields) {
        if (err) {
            // console.log(err);
            connection.end();
            throw err;
        }
        else {
            // console.log(rows);
            res.json(rows)
        }//send data to server from database
    })
});
//get one
router.get('/notes/:id', function (req, res) {
    var id = req.params.id;
    connection.query('SELECT * FROM notes where id =' + id, function (err, rows, fields) {
        if (err) {
            // console.log(err);
            connection.end();
            throw err;
        }
        else {
            // console.log(rows );
            res.json(rows)
        }//send data to server from database
    })
});
//list all users
router.get('/users', function (req, res) {
    
    connection.query('SELECT * FROM users', function (err, rows, fields) {
        if (err) {
            // console.log(err);
            connection.end();
            throw err;
        }
        else {
            // console.log(rows );
            res.json(rows)
        }//send data to server from database
    })
});

//get one
router.get('/users/:id', function (req, res) {
    var id = req.params.id;
    connection.query('SELECT * FROM users where id =' + id, function (err, rows, fields) {
        if (err) {
            // console.log(err);
            connection.end();
            throw err;
        }
        else {
            // console.log(rows );
            res.json(rows)
        }//send data to server from database
    })
});
//middleware
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

app.listen(port, () => { console.log("Hello", 3000) });
