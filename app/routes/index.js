var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send(`
        <link rel="stylesheet" type="text/css" href="/css/style.css">
        <h1>Run with express  nodemon</h1>
        <img src="/images/misc/background.jpg" alt="express" style="height: 300px;">
        <script src="/reload/reload.js"></script>
        `);
});

module.exports = router;
