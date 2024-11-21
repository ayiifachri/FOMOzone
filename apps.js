const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Atur view engine ke EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Layani file statis dari direktori publik
app.use(express.static(path.join(__dirname, 'public')));

// Rute untuk file HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Layani index.html
});

// Rute untuk bayar.ejs
app.get('/', (req, res) => {
    res.render('bayar.js'); // Render bayar.ejs
});

// Jalankan server
app.listen(PORT, () => console.log('Running on port', PORT));