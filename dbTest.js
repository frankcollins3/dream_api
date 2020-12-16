require('dotenv').config()

const models = require('./models');

models.Dream.create({
    name: 'Water Dream',
    description: ['shark fin swimming by', 'dream moving in sequences'],
    date: 11/33/2002
}).then(() => {
    console.log('Random Dream')
})