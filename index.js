const express = require('express');
const app = express();

const PORT = 800;

app.get('/', (req, res) => {
    res.send('Dette er forsiden. <a href="/realmadrid">NAVIGER</a>');
});

app.get('/realmadrid', (req, res) => {
    res.send('Hala Madrid!');
});

app.get('/data', (req, res) => {
    res.json(getdata);
});

app.post('/data', (req, res) => {
    res.status(201).json(sndData);
});

app.listen(PORT, () => {
    console.log(`Serveren kjører på http://localhost:${PORT}`);
});





