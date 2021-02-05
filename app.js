const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', express.static('public'));
app.use('/route', express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('/public/front.html', { root: __dirname })
        // res.send("Hello");
})

app.get('/route', (req, res) => {
    res.sendFile('public/game.html', { root: __dirname })
})

var PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})