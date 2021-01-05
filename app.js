const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, './public');

app.use(express.static(publicPath));

app.listen(process.env.PORT || 3000, function() { 
    console.log("=====================");
    console.log("http://localhost:3000");
    console.log("=====================");
    }
);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html/"))
});

app.get('/index', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html/"))
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html/"))
});


app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html/"))
});