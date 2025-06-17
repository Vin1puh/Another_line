const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'viwes', 'main.html'));
});
app.get('/cosmetics', (req, res) => {
    res.sendFile(path.join(__dirname, 'viwes', 'cosmetics.html'));
});
app.get('/developments', (req, res) => {
    res.sendFile(path.join(__dirname, 'viwes', 'developments.html'));
});
app.get('/about_us', (req, res) => {
    res.sendFile(path.join(__dirname, 'viwes', 'about_us.html'));
});
app.get('/contact_us', (req, res) => {
    res.sendFile(path.join(__dirname, 'viwes', 'contact_us.html'));
});
app.get('/where_us', (req, res) => {
    res.sendFile(path.join(__dirname, 'viwes', 'where_us.html'));
});
app.get('/KIM_10', (req, res) => {
    res.sendFile(path.join(__dirname, 'viwes', 'KIM_10.html'));
});
app.get('/MR_991', (req, res) => {
    res.sendFile(path.join(__dirname, 'viwes', 'MR_991.html'));
});
app.get('/NV_X8', (req, res) => {
    res.sendFile(path.join(__dirname, 'viwes', 'NV_X8.html'));
});
app.get('/CCPM', (req, res) => {
    res.sendFile(path.join(__dirname, 'viwes', 'CCPM.html'));
});
app.get('/LS_C7', (req, res) => {
    res.sendFile(path.join(__dirname, 'viwes', 'LS_C7.html'));
});
app.get('/HSRG-9', (req, res) => {
    res.sendFile(path.join(__dirname, 'viwes', 'HSRG_9.html'));
});
app.get('/SVR_1', (req, res) => {
    res.sendFile(path.join(__dirname, 'viwes', 'SVRaC.html'));
});
app.get('/SVR_2', (req, res) => {
    res.sendFile(path.join(__dirname, 'viwes', 'SVRsA.html'));
});
app.get('/SVR_3', (req, res) => {
    res.sendFile(path.join(__dirname, 'viwes', 'SVRcR.html'));
});
app.get('/TO_1', (req, res) => {
    res.sendFile(path.join(__dirname, 'viwes', 'TO_1.html'));
});
app.get('/TO_2', (req, res) => {
    res.sendFile(path.join(__dirname, 'viwes', 'TO_2.html'));
});
app.get('/TO_3', (req, res) => {
    res.sendFile(path.join(__dirname, 'viwes', 'TO_3.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});