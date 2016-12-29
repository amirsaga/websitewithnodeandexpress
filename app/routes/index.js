var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send(`
        <h1>Run with express</h1>
        `);
});

module.exports = router;
