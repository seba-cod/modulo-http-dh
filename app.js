const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, './public');

app.use(express.static(publicPath));

app.listen(3000, () => { 
    console.log("=====================");
    console.log("http://localhost:3000");
    console.log("=====================");
    }
);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html/"))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html/"))
});