const mongoose = require('mongoose');
const config = require('./index')

mongoose.connect(config.db_path);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', function(err) {
	if(err) console.error('Mongodb connection error :', err);
});

db.once('open', function callback() {
	console.info('Mongodb connected successfully');
});

module.exports = db;