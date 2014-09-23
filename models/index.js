var Sequelize = require('sequelize')
	, config = require('config').database
	, db
;

db = new Sequelize(
	config.name
	, config.username
	, config.password
	, config.options
);

// Import models
['User'].forEach(function(model) {
  module.exports[model] = db.import(__dirname + '/' + model);
});


/*
db.query('SET FOREIGN_KEY_CHECKS = 0')
.then(function(){
	return db.sync({force: true});
})
.then(function(){
	return db.query('SET FOREIGN_KEY_CHECKS = 1');
})
.then(function(){
	console.log('Database synchronised.');
});

*/
module.exports.db = db;
