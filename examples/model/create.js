/**
 * @author Richard Ayotte <rich.ayotte@ayottesoftware.com>
 */

'use strict';

var advise = require('dcl/advise')
	, User = require('../../models').User
;

User.create({name: 'Sam'})
.then(function(newUser){
	console.log(newUser.dataValues);
});

advise.around(User, 'create', function(create) {
	return function(user) {
		console.log(user);
		return create.apply(this, arguments)
		.then(function(newUser){
			newUser.dataValues.name = newUser.dataValues.name + 'Doh!';
			return newUser;
		});
	};
});

User.create({name: 'Sam'})
.then(function(newUser){
	console.log(newUser.dataValues);
});

advise.around(User, 'create', function(create) {
	return function(user) {
		console.log(user);
		return create.apply(this, arguments)
		.then(function(newUser){
			newUser.dataValues.name = newUser.dataValues.name + ' Ahhhhh.';
			return newUser;
		});
	};
});

User.create({name: 'Sam'})
.then(function(newUser){
	console.log(newUser.dataValues);
});
