sequelize-aop
=============

Sequelize AOP Tests

1. Create database named sequelize_test
2. Copy `config/sample.js` to `config/development.js` and update db parameters
3. Create the tables by uncommenting:

```js
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
```

in the `models/index.js` and create the tables by running
```sh
node models/index.js.
```

Don't forget to re-comment unless you want the tables to be re-created everytime you run the tests.

Run the examples

```sh
node index.js
```