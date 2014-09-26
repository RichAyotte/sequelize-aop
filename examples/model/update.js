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
	console.log('Running before User.update');
});

// After
advise.after(User, 'update', function(args, result) {
	console.log('Running after User.update');
	return result;
});

// Around
advise.around(User, 'update', function(update) {
	return function(user) {
		var attrValueHash = arguments[0];
		var where = arguments[1];
		var options = arguments[2];

		console.log(attrValueHash, where, options);
		if (attrValueHash.title == 'Webmaster') {
			attrValueHash.title = 'Web Guru';
		}

		return update.call(this, attrValueHash, where, options)
	};
});

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
