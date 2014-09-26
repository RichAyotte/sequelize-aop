/**
 * @author Richard Ayotte <rich.ayotte@ayottesoftware.com>
 */

'use strict';

var advise = require('dcl/advise')
	, User = require('../../models').User
;

User.create({name: 'Sam', title: 'Web Lord'})
.then(function(newUser){
	console.log('User created:', newUser.dataValues);
});

// Before
advise.before(User, 'update', function(attrValueHash, where, options) {
	console.log('Running before bulk update');
	if (options && options.individualHooks) {
		console.log('running before update');
	}
});

// After
advise.after(User, 'update', function(args, result) {
	var attrValueHash = args[0];
	var where = args[1];
	var options = args[2];

	console.log('Running after bulk update');
	if (options && options.individualHooks) {
		console.log('running after update');
	}
	return result;
});

// Around
advise.around(User, 'update', function(update) {
	return function(user) {
		var attrValueHash = arguments[0];
		var where = arguments[1];
		var options = arguments[2];

		console.log('Running before bulk update');
		if (options && options.individualHooks) {
			console.log('running before update');
		}

		console.log(attrValueHash, where, options);
		if (attrValueHash.title == 'Webmaster') {
			attrValueHash.title = 'Web Guru';
		}

		return update.call(this, attrValueHash, where, options)
		.then(function(){
			console.log('Running after bulk update');
			if (options && options.individualHooks) {
				console.log('running after update');
			}
		})
	};
});

// Bulk Update
User.update({
	title: 'Webmaster'
}, {
	where: {
		name: 'Sam'
	}
})
.then(function(){
	console.log('User updated.');
}).catch(function(err){
	console.log(err);
});

// Individual update
User.update({
	title: 'Webmaster'
}, {
	where: {
		name: 'Sam'
	}
}, {
	individualHooks: true
})
.then(function(){
	console.log('User updated.');
}).catch(function(err){
	console.log(err);
});
