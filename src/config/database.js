const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect('mongodb://localhost/Twitter_db');
}

module.exports = connect;