var express = require('express');
var router = express.Router();
const app = express();
const path = require('path');

// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/game', express.static('public'));

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
})

module.exports = router;