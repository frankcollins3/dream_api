const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.urlencoded())
app.use(express.json())

const models = require('./Models')

app.get('/', (req, res) => {
    res.send('Home Base')
})

app.use('/dreams', require('./Controllers/dreamController'))

const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
    console.log(`The sweet sweet sounds of port ${PORT}`)
})