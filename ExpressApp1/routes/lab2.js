'use strict';
var express = require('express');
var router = express.Router();

/* Get subject listing*/

router.get('/', function (req, res) {
    if (req.query.method) {

        var x = parseInt(req.query.x);
        var y = parseInt(req.query.y);
        if (req.query.method === 'add') {
            var total = x + y;
            res.send("Sample Output:" + req.query.x + " + " + req.query.y + " = " + total.toString());
        }
        if (req.query.method == 'subtract') {
            var total = x - y;
            res.send("Sample Output:" + req.query.x + " - " + req.query.y + " = " + total.toString());
        }
        if (req.query.method === 'multiply') {
            var total = x * y;
            res.send("Sample Output:" + req.query.x + " * " + req.query.y + " = " + total.toString());
        }
        if (req.query.method === 'divide') {
            var total = x / y;
            res.send("Sample Output:" + req.query.x + " / " + req.query.y + " = " + total.toString());
        }
    } else {
        res.send('Follow this url : http://localhost:3000/lab2?method=add&x=16&y=4');
    }

});
module.exports = router;