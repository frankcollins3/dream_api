const mongooose = require('mongoose')

mongooose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = {
    Dream: require('./dream')
}